"use strict"
const http = require("http");
const https = require('https');

class HttpsWithProxyClient {
    constructor(proxyConf) {
        this.proxyConf = proxyConf;
        this.proxyAgent = null;
        this.lastRequestHostname = null;
    }

    // Async private method, used only internally by HttpsWithProxyClient
    // Handle the connection with the HTTP proxy
    // In case the connection is successful, it returns a new http.Agent with keepAlive activated
    async _connectToProxy(url) {
        return new Promise((resolve, reject) => {
            const headers = {
                'Proxy-Authorization': 'Basic ' + Buffer.from(this.proxyConf.proxy_username + ':' + this.proxyConf.proxy_password).toString('base64')
            }

            const urlParsed = new URL(url);
            http.request({ // establishing a tunnel
                host: this.proxyConf.proxy_host,
                port: this.proxyConf.proxy_port,
                method: 'CONNECT',
                path: `${urlParsed.hostname}:443`,
                headers
            }).on('connect', (res, socket) => {
                if (res.statusCode === 200) {
                    resolve(new https.Agent({ socket: socket, keepAlive: true }));
                } else {
                    reject('Could not connect to proxy!')
                }

            }).on('error', (err) => {
                reject(err.message);
            }).on('timeout', (err) => {
                reject(err.message);
            }).end();
        });
    }

    // Public asynchronous method used to make an HTTPs get request on a given URL through an HTTP proxy
    async getURL(url, headers) {
		return new Promise(async (resolve, reject) => {
			const chunks = [];
            const urlParsed = new URL(url);
            headers = headers || {};
            
            // If there's no current valid connection established with the proxy
            // or if the host linked to the URL requested is different from the previous request
            // -> recreate a connection with the proxy
            if (!this.proxyAgent || this.lastRequestHostname !== urlParsed.hostname) {
                try {
                    this.proxyAgent = await this._connectToProxy(url);
                    this.lastRequestHostname = urlParsed.hostname;
                } catch (e) {
                    return reject(e);
                }
                
            }
			(/^https:/.test(url) ? https : http).get({
                	host: urlParsed.hostname,
                	path: urlParsed.pathname,
                	agent: this.proxyAgent,
                	headers: headers,
            	}, resp => {
				if (resp.statusCode !== 200) {
					reject(`Error: HTTP status code ${resp.statusCode} for ${url}`);
					return;
				}
				resp.on("data", d => chunks.push(d))
					.on("end", () => resolve(Buffer.concat(chunks)))
					.on("error", reject)
			}).on("error", (err) => {
                this.proxyAgent = null;
                reject(err.message);
            });

        })
    }
}

const conf = {
	"proxy_username": '',
	"proxy_password": '',
	"proxy_host": '127.0.0.1',
	"proxy_port": 7890
};
const httpsClient = new HttpsWithProxyClient(conf);
module.exports = async function getUrl(url, autoRetry = true) {
	return await autoRetry
		? _autoRetry(() => httpsClient.getURL(url), function log(_, __, backOff) {
			console.error(`Retrying ${url} in ${backOff} ${backOff === 1 ? 'second' : 'seconds'}.`);
		}, function gaveUp(ex, tries, _) {
			console.error(`Gave up after ${tries} ${tries === 1 ? 'try' : 'tries'}.`);
			throw ex;
		})
		: httpsClient.getURL(url);
}

// async function _getUrl(url) {
// 	return new Promise((resolve, reject) => {
// 		const chunks = [];
// 		//(/^https:/.test(url) ? https : http).get(url, opt, resp => {
// 		var options = {
// 				host: "127.0.0.1",
// 				port: 7890,
// 				path: "https://tile.googleapis.com/v1/3dtiles/root.json",
// 				headers: {
// 				  Host: "www.google.com"
// 				}
// 		};
// 		//(/^https:/.test('http://www.google.com') ? https : http).get(options, resp => {
// 		//options.path = url;
// 		http.get(options, resp => {
// 			if (resp.statusCode !== 200) {
// 				reject(`Error: HTTP status code ${resp.statusCode} for ${url}`);
// 				return;
// 			}
// 			resp.on("data", d => chunks.push(d))
// 			    .on("end", () => resolve(Buffer.concat(chunks)))
// 			    .on("error", reject)
// 		}).on("error", reject);
// 	});
// }

async function _autoRetry(fn, log = null, gaveUp = null, MAX_TRIES = 5, MAX_BACKOFF_SECS = 16) {
	for (let tries = 1, backOff = 1;; tries++, backOff = Math.min(2 * backOff, MAX_BACKOFF_SECS)) {
		try {
			return await fn();
		} catch (ex) {
			if (tries >= MAX_TRIES) return gaveUp && gaveUp(ex, tries, backOff);
			log && log(ex, tries, backOff);
			await new Promise((r, _) => setTimeout(r, 1000 * backOff));
		}
	}
}