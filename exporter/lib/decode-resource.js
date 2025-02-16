"use strict"

// generate random id
function uuidv4() {
	return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
		let r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
		return v.toString(16);
	});
}

module.exports = (function() {
	// minified protobuf decoder js code
	const code = function() {
		(function() {
			'use strict';
			var T, jb = this;
			function kb(c, d, e) {
				c = c.split(".");
				e = e || jb;
				c[0]in e || "undefined" == typeof e.execScript || e.execScript("var " + c[0]);
				for (var h; c.length && (h = c.shift()); )
					c.length || void 0 === d ? e[h] && e[h] !== Object.prototype[h] ? e = e[h] : e = e[h] = {} : e[h] = d
			}
			var Fb = Date.now || function() {
				return +new Date
			}
			;
			function Mb(c) {
				this.length = c.length || c;
				for (var d = 0; d < this.length; d++)
					this[d] = c[d] || 0
			}
			Mb.prototype.a = 4;
			Mb.prototype.set = function(c, d) {
				d = d || 0;
				for (var e = 0; e < c.length && d + e < this.length; e++)
					this[d + e] = c[e]
			}
			;
			Mb.prototype.toString = Array.prototype.join;
			"undefined" == typeof Float32Array && (Mb.BYTES_PER_ELEMENT = 4,
			Mb.prototype.BYTES_PER_ELEMENT = Mb.prototype.a,
			Mb.prototype.set = Mb.prototype.set,
			Mb.prototype.toString = Mb.prototype.toString,
			kb("Float32Array", Mb, void 0));
			function Rb(c) {
				this.length = c.length || c;
				for (var d = 0; d < this.length; d++)
					this[d] = c[d] || 0
			}
			Rb.prototype.a = 8;
			Rb.prototype.set = function(c, d) {
				d = d || 0;
				for (var e = 0; e < c.length && d + e < this.length; e++)
					this[d + e] = c[e]
			}
			;
			Rb.prototype.toString = Array.prototype.join;
			if ("undefined" == typeof Float64Array) {
				try {
					Rb.BYTES_PER_ELEMENT = 8
				} catch (c) {}
				Rb.prototype.BYTES_PER_ELEMENT = Rb.prototype.a;
				Rb.prototype.set = Rb.prototype.set;
				Rb.prototype.toString = Rb.prototype.toString;
				kb("Float64Array", Rb, void 0)
			}
			;function Sb() {
				this.matrixMeshFromGlobe = this.matrixGlobeFromMesh = null;
				this.meshes = [];
				this.overlaySurfaceMeshes = [];
				this.copyrightIds = this.waterMesh = null;
				this.nonEmptyOctants = 0;
				this.bvhTriPermutation = this.bvhNodes = null
			}
			function Tb() {
				this.vertexAlphas = this.indices = this.uvOffsetAndScale = this.layerBounds = this.texture = this.vertices = null;
				this.numNonDegenerateTriangles = 0;
				this.meshId = -1;
				this.octantCounts = this.normals = null
			}
			function Ub() {
				this.bytes = null;
				this.textureFormat = 1;
				this.viewDirection = this.height = this.width = 0;
				this.meshId = -1
			}
			function Vb() {  //buldData
				this.headNodePath = "";
				this.obbRotations = this.obbExtents = this.obbCenters = this.metersPerTexel = this.flags = this.bulkMetadataEpoch = this.epoch = this.childIndices = null;
				this.defaultImageryEpoch = 0;
				this.imageryEpochArray = null;
				this.defaultTextureFormat = 0;
				this.textureFormatArray = null;
				this.defaultAvailableViewDirections = 0;
				this.childBulkMetadata = this.nodes = this.viewDependentTextureFormatArray = this.availableViewDirectionsArray = null
			}
			function Wb() {
				this.textures = [];
				this.transformInfo = [];
				this.projectionOrigin = null
			}
			function pc() {
				this.vertexTransformMap = this.transformTable = null;
				this.meshId = -1;
				this.uvOffsetAndScale = null
			}
			;function qc(res) {
				this.u = new DataView(res.buffer);
				this.b = res;
				this.a = 0;
				this.length = res.length; //data length
				this.h = [];
				this.l = this.o = 0
			}
			T = qc.prototype;
			T.D = function() { 
				if (this.a < this.length) {  //get path flags
					var c = this.sa();
					this.o = c & 7;
					return this.l = c >> 3
				}
				return 0
			}
			;
			T.O = function(c) {
				this.h.push(this.length);
				this.length = c
			}
			;
			T.N = function() {
				if (!this.h.length)
					return !1;
				this.length = this.h.pop();
				return !0
			}
			;
			T.sa = function() {  //unpackVarInt unpacks variable length integer from proto
				var c = 0
				, d = 1;
				do {
					var e = this.b[this.a++];
					c += (127 & e) * d;
					d *= 128
				} while (e & 128);
				return c
			}
			;
			T.jd = function() {
				do
					var c = this.b[this.a++];
				while (c & 128)
			}
			;
			T.hd = function() {
				this.a = this.sa() + this.a
			}
			;
			T.B = function() {
				switch (this.o) {
				case 0:
					return this.jd(), !0;
				case 1:
					return this.a += 8, !0;
				case 2:
					return this.hd(), !0;
				case 5:
					return this.a += 4, !0
				}
				return !1
			}
			;
			T.Xc = function() {
				var c = this.sa();
				return c & 2147483648 ? (c & 2147483647) - 2147483648 : c //c&0x80000000?(c&0x7FFFFFFF)-0x80000000:c
			}
			;
			T.f = qc.prototype.sa;
			T.$ = function() {
				var c = this.u.getFloat32(this.a, !0);
				this.a += 4;
				return c
			}
			;
			T.ua = function() {
				var c = this.u.getFloat64(this.a, !0);
				this.a += 8;
				return c
			}
			;
			T.Ia = function() {
				return this.b[this.a++]
			}
			;
			T.Ka = function() {
				var c = this.b[this.a++];
				c |= this.b[this.a++] << 8;
				return c & 32768 ? c | 4294901760 : c
			}
			;
			T.ia = function() {
				var c = this.b[this.a++];
				return this.b[this.a++] << 8 | c
			}
			;
			T.cd = function() {
				var c = this.b[this.a++];
				c = this.a + c;
				for (var d = ""; this.a < c; ) {
					var e = this.b[this.a++];
					if (128 > e)
						d += String.fromCharCode(e);
					else if (!(192 > e))
						if (224 > e) {
							var h = this.b[this.a++];
							d += String.fromCharCode((e & 31) << 6 | h & 63)
						} else if (240 > e) {
							h = this.b[this.a++];
							var k = this.b[this.a++];
							d += String.fromCharCode((e & 15) << 12 | (h & 63) << 6 | k & 63)
						}
				}
				return d
			}
			;
			T.data = function() {
				return this.b
			}
			;
			T.Oc = function() {
				this.a = this.l = this.o = 0;
				this.length = this.b.length;
				this.h = []
			}
			;
			T.U = function(c) {
				this.a += c
			}
			;
			function rc(c, d) {  //顶层执行主体函数
				this.h = new qc(c); //response data
				this.Oa = d;
				this.c = null; //bulkData
				this.b = new Float64Array(3);
				this.a = new Float32Array(4); //
				this.o = {}; //childIndices
				this.l = this.u = 0;
				this.ra = this.L = this.ba = this.M = !1
			}
			T = rc.prototype;
			T.Nc = function() {  //parse bulkmetadata
				var c = this.h, d, e = [], h = this.c = new Vb;
				this.a[0] = Infinity;
				this.a[1] = Infinity;
				this.a[2] = Infinity;
				this.a[3] = Infinity;
				for (h.defaultTextureFormat = 6; d = c.D(); )
					switch (d) {
					case 1:		//NodeMetadata struct
						d = c.f();
						c.O(c.a + d);
						e.push(this.bd());
						c.N();
						break;
					case 2:     //head_node_key
						d = c.f();
						c.O(c.a + d);
						this.Vc();
						c.N();
						break;
					case 3:     //head_node_center
						c.f();
						this.b[0] = c.ua();
						this.b[1] = c.ua();
						this.b[2] = c.ua();
						break;
					case 4:    //meters_per_texel
						c.f();
						this.a[0] = c.$();
						this.a[1] = c.$();
						this.a[2] = c.$();
						this.a[3] = c.$();
						break;
					case 5:
						h.defaultImageryEpoch = c.f();
						break;
					case 6:
						h.defaultTextureFormat = sc(c.f());
						break;
					case 7:
						h.defaultAvailableViewDirections = c.f();
						break;
					case 8:
						h.defaultViewDependentTextureFormat = sc(c.f());
						break;
					default:
						c.B()
					}
				c.Oc();
				d = e.slice();
				d.sort(tc);
				for (var k = 0; k < e.length; k++)
					this.o[d[k]] = k;
				k = e.length;
				h.epoch = new Uint32Array(k);
				h.bulkMetadataEpoch = new Uint32Array(k);
				h.flags = new Uint8Array(k);
				h.metersPerTexel = new Float32Array(k);
				h.obbCenters = new Float64Array(3 * k);
				h.obbExtents = new Float32Array(3 * k);
				h.obbRotations = new Float32Array(9 * k);
				h.imageryEpochArray = new Uint32Array(k);
				h.textureFormatArray = new Uint8Array(k);
				h.viewDependentTextureFormatArray = new Uint8Array(k);
				h.availableViewDirectionsArray = new Uint8Array(k);
				for (k = 0; d = c.D(); )
					switch (d) {
					case 1:
						d = c.f();
						c.O(c.a + d);
						this.$c(e[k++]);
						c.N();
						break;
					default:
						c.B()
					}
				this.pc();
				c = [h.childIndices.buffer, h.epoch.buffer, h.bulkMetadataEpoch.buffer, h.flags.buffer, h.metersPerTexel.buffer, h.obbCenters.buffer, h.obbExtents.buffer, h.obbRotations.buffer];
				this.M ? c.push(h.imageryEpochArray.buffer) : h.imageryEpochArray = null;
				this.ba ? c.push(h.textureFormatArray.buffer) : h.textureFormatArray = null;
				this.L ? c.push(h.availableViewDirectionsArray.buffer) : h.availableViewDirectionsArray = null;
				this.ra ? c.push(h.viewDependentTextureFormatArray.buffer) : h.viewDependentTextureFormatArray = null;
				this.Oa(h, c)
			}
			;
			function tc(c, d) {  //sort compare function
				var e = c.length - d.length;
				return 0 != e ? e : c < d ? -1 : 1
			}
			T.Vc = function() {
				for (var c = this.h, d = this.c, e; e = c.D(); )
					switch (e) {
					case 1:
						d.headNodePath = c.cd();
						break;
					case 2:
						this.l = c.f();
						break;
					default:
						c.B()
					}
			}
			;
			T.bd = function() {  //unpackPathAndFlags unpacks path, flags and level (strlen(path)) from node metadata
				for (var c = this.h, level, path_id = ""; level = c.D(); )
					switch (level) {
					case 1:
						path_id = c.f();
						level = (path_id & 3) + 1;
						path_id = path_id >> 2 & (1 << 3 * level) - 1;
						for (var h = "", k = 0; k < level; k++)
							h += path_id >> 3 * k & 7;
						path_id = h;
						break;
					default:
						c.B()
					}
				return path_id
			}
			;
			T.$c = function(c) {  //paser NodeMetadata
				var d = this.h, e = this.c, h, k = 0, g = [], m = [], p = [], v = 0, z = this.l, B = this.l, A = this.o[c];
				e.imageryEpochArray[A] = e.defaultImageryEpoch;
				e.textureFormatArray[A] = e.defaultTextureFormat;
				for (e.availableViewDirectionsArray[A] = e.defaultAvailableViewDirections; h = d.D(); )
					switch (h) {
					case 1:
						k = d.f();
						break;
					case 3:
						d.f();
						g[0] = d.Ka();
						g[1] = d.Ka();
						g[2] = d.Ka();
						m[0] = d.Ia();
						m[1] = d.Ia();
						m[2] = d.Ia();
						p[0] = d.ia();
						p[1] = d.ia();
						p[2] = d.ia();
						break;
					case 4:
						v = d.$();
						break;
					case 2:
						z = d.f();
						break;
					case 5:
						B = d.f();
						break;
					case 7:
						this.M = !0;
						e.imageryEpochArray[A] = d.f();
						break;
					case 8:
						this.ba = !0;
						e.textureFormatArray[A] = sc(d.f());
						break;
					case 9:
						this.L = !0;
						e.availableViewDirectionsArray[A] = d.f();
						break;
					case 10:
						this.ra = !0;
						e.viewDependentTextureFormatArray[A] = sc(d.f());
						break;
					default:
						d.B()
					}
				c = c.length;
				4 > c && this.u++;
				e.epoch[A] = z;
				e.bulkMetadataEpoch[A] = B;
				e.flags[A] = k >> 2 + 3 * c;
				0 == v && (v = this.a[c - 1]);
				e.metersPerTexel[A] = v;
				g[0] = g[0] * v + this.b[0];
				g[1] = g[1] * v + this.b[1];
				g[2] = g[2] * v + this.b[2];
				m[0] *= v;
				m[1] *= v;
				m[2] *= v;
				p[0] = p[0] * Math.PI / 32768;
				p[1] = p[1] * Math.PI / 65536;
				p[2] = p[2] * Math.PI / 32768;
				k = new Float32Array(9);
				z = p[0];
				c = p[1];
				v = p[2];
				p = Math.cos(z);
				z = Math.sin(z);
				B = Math.cos(c);
				c = Math.sin(c);
				d = Math.cos(v);
				v = Math.sin(v);
				k[0] = p * d - B * z * v;
				k[1] = B * p * v + d * z;
				k[2] = v * c;
				k[3] = -p * v - d * B * z;
				k[4] = p * B * d - z * v;
				k[5] = d * c;
				k[6] = c * z;
				k[7] = -p * c;
				k[8] = B;
				k == k ? (p = k[1],
				v = k[2],
				z = k[5],
				k[1] = k[3],
				k[2] = k[6],
				k[3] = p,
				k[5] = k[7],
				k[6] = v,
				k[7] = z) : (k[0] = k[0],
				k[1] = k[3],
				k[2] = k[6],
				k[3] = k[1],
				k[4] = k[4],
				k[5] = k[7],
				k[6] = k[2],
				k[7] = k[5],
				k[8] = k[8]);
				e.obbCenters.set(g, 3 * A);
				e.obbRotations.set(k, 9 * A);
				e.obbExtents.set(m, 3 * A)
			}
			;
			T.pc = function() {
				this.c.childIndices = new Int16Array(8 * (this.u + 1));
				this.Ab("", -1)
			}
			;
			T.Ab = function(c, d) {
				if (4 != c.length)
					for (var e = 0; 8 > e; e++) {
						var h = c + e
						, k = this.o[h];
						void 0 !== k ? this.Ab(h, k) : k = -1;
						this.c.childIndices[8 * (d + 1) + e] = k
					}
			}
			;
			var uc = [6, 1];
			function sc(c) {
				for (var d = 0; d < uc.length; d++) {
					var e = uc[d];
					if (c & 1 << e - 1)
						return 0 == e && c.toString(16),
						e
				}
				c.toString(16);
				return uc[0]
			}
			;function vc(c, d) {
				return 0 == d ? c + 1 & -2 : 1 == d ? c | 1 : c + 2
			}
			;function zd(c) {
				this.ba = c;
				this.l = null;
				this.o = 0;
				this.b = this.h = this.L = this.M = this.c = this.u = null;
				this.a = 0
			}
			T = zd.prototype;
			T.start = function() {
				for (var c = this.ba, d = 0, e = 0; e < c.length; ++e)
					d += c[e].numNonDegenerateTriangles;
				if (0 >= d)
					return null;
				this.M = new Uint32Array(d);
				this.c = new Uint32Array(d);
				this.L = new Uint8Array(6 * d);
				this.h = Array(3);
				this.h[0] = new Uint8Array(d);
				this.h[1] = new Uint8Array(d);
				this.h[2] = new Uint8Array(d);
				for (var h = this.L, k = this.h, g, m, p, v, z, B, A = 0, G = 0, C = 0, R = 0, L = 0, O = 0, sa = 0, ka = 0, qa = 0; qa < c.length; ++qa) {
					e = c[qa];
					var P = e.indices
					, la = e.vertices
					, Ea = P.length - 2;
					for (e = 0; e < Ea; ++e) {
						m = P[vc(e, 0)];
						var J = P[vc(e, 1)]
						, aa = P[vc(e, 2)];
						if (m != J && J != aa && aa != m) {
							this.M[ka] = qa << 24 | e;
							this.c[ka] = ka;
							p = 8 * m;
							g = v = la[p++];
							m = z = la[p++];
							p = B = la[p];
							var Ja = 8 * J;
							J = la[Ja++];
							J < g ? g = J : J > v && (v = J);
							J = la[Ja++];
							J < m ? m = J : J > z && (z = J);
							J = la[Ja];
							J < p ? p = J : J > B && (B = J);
							aa *= 8;
							J = la[aa++];
							J < g ? g = J : J > v && (v = J);
							J = la[aa++];
							J < m ? m = J : J > z && (z = J);
							J = la[aa];
							J < p ? p = J : J > B && (B = J);
							h[A++] = g;
							h[A++] = m;
							h[A++] = p;
							h[A++] = v;
							h[A++] = z;
							h[A++] = B;
							g = g + v >> 1;
							m = m + z >> 1;
							p = p + B >> 1;
							k[0][ka] = g;
							k[1][ka] = m;
							k[2][ka] = p;
							0 < ka ? (g < G ? G = g : g > L && (L = g),
							m < C ? C = m : m > O && (O = m),
							p < R ? R = p : p > sa && (sa = p)) : (G = L = g,
							C = O = m,
							R = sa = p);
							++ka
						}
					}
				}
				this.l = c = new Uint8Array(24 * d);
				this.u = new Uint32Array(c.buffer);
				c[0] = G;
				c[1] = C;
				c[2] = R;
				c[3] = L;
				c[4] = O;
				c[5] = sa;
				this.b = new Uint32Array(3 * d);
				this.a = 0;
				this.b[this.a++] = 0;
				this.b[this.a++] = 0;
				this.b[this.a++] = d;
				this.o = 1;
				return this.cb
			}
			;
			T.cb = function() {
				for (var c = this.b, d = 0; 0 < this.a; ) {
					var e = c[--this.a]
					, h = c[--this.a]
					, k = c[--this.a]
					, g = e - h;
					if (0 == d || 1E4 > d + g)
						this.nc(k, h, e),
						d += g;
					else {
						this.a += 3;
						break
					}
				}
				return 0 == this.a ? this.wc : this.cb
			}
			;
			T.nc = function(c, d, e) {
				var h = e - d;
				if (4 >= h)
					this.ob(c, d, e);
				else {
					var k = this.l
					, g = 12 * c
					, m = k[g + 3] - k[g + 0]
					, p = k[g + 4] - k[g + 1]
					, v = k[g + 5] - k[g + 2];
					if (m > p && m > v)
						var z = 0;
					else
						p > v ? (z = 1,
						m = p) : (z = 2,
						m = v);
					k = k[g + z] + (m >> 1);
					p = d;
					v = e;
					g = this.h[z];
					for (m = this.c; ; ) {
						for (; p < v && !(g[m[p]] >= k); )
							p++;
						for (; p < v && !(g[m[v - 1]] < k); )
							v--;
						if (p == v) {
							p = v;
							break
						}
						var B = m[p];
						m[p] = m[v - 1];
						m[v - 1] = B
					}
					if (p == d || p == e) {
						if (255 > h) {
							this.ob(c, d, e);
							return
						}
						p = (d + e) / 2;
						k = g[m[p]]
					}
					h = this.o++;
					g = this.o++;
					this.Fc(c, h, z, k, d, p, e);
					this.b[this.a++] = g;
					this.b[this.a++] = p;
					this.b[this.a++] = e;
					this.b[this.a++] = h;
					this.b[this.a++] = d;
					this.b[this.a++] = p
				}
			}
			;
			T.Fc = function(c, d, e, h, k, g, m) {
				h = this.l;
				c *= 12;
				h[c + 6] = 0;
				h[c + 7] = e;
				this.u[c + 8 >> 2] = d;
				e = this.h[0];
				c = this.h[1];
				for (var p = this.h[2], v = 0; 2 > v; v++) {
					var z = 0 == v ? k : g
					, B = 0 == v ? g : m;
					if (!(4 >= B - z)) {
						var A = this.c[z]
						, G = e[A]
						, C = c[A];
						A = p[A];
						var R = G
						, L = G
						, O = C
						, sa = C
						, ka = A
						, qa = A;
						for (z += 1; z < B; z++)
							A = this.c[z],
							G = e[A],
							C = c[A],
							A = p[A],
							G < R ? R = G : G > L && (L = G),
							C < O ? O = C : C > sa && (sa = C),
							A < ka ? ka = A : A > qa && (qa = A);
						B = 12 * (0 == v ? d : d + 1);
						h[B++] = R;
						h[B++] = O;
						h[B++] = ka;
						h[B++] = L;
						h[B++] = sa;
						h[B] = qa
					}
				}
			}
			;
			T.ob = function(c, d, e) {
				var h = this.L, k = this.c, g, m, p, v;
				var z = g = m = 255;
				var B = p = v = 0;
				for (var A = d; A < e; ++A) {
					var G = 6 * k[A]
					, C = h[G++];
					z = z < C ? z : C;
					C = h[G++];
					g = g < C ? g : C;
					C = h[G++];
					m = m < C ? m : C;
					C = h[G++];
					B = B > C ? B : C;
					C = h[G++];
					p = p > C ? p : C;
					C = h[G++];
					v = v > C ? v : C
				}
				h = this.l;
				c *= 12;
				k = c + 0;
				h[k++] = z;
				h[k++] = g;
				h[k++] = m;
				h[k++] = B;
				h[k++] = p;
				h[k] = v;
				h[c + 6] = 1;
				h[c + 7] = e - d;
				this.u[c + 8 >> 2] = d
			}
			;
			T.wc = function() {
				for (var c = this.l, d = this.u, e = this.o - 1; 0 <= e; e--) {
					var h = 12 * e;
					if (0 == c[h + 6]) {
						var k = h + 0;
						h = 12 * d[h + 8 >> 2];
						for (var g = h + 12, m = 0; 3 > m; m++,
						k++,
						h++,
						g++) {
							var p = c[h]
							, v = c[g];
							c[k] = p <= v ? p : v;
							p = c[3 + h];
							v = c[3 + g];
							c[3 + k] = p >= v ? p : v
						}
					}
				}
				for (e = 0; e < this.c.length; ++e)
					this.c[e] = this.M[this.c[e]];
				this.l = c.subarray(0, 12 * this.o);
				return null
			}
			;
			T.hc = function() {
				return this.l
			}
			;
			var Ad = null;
			function Bd() {
				this.Gc()
			}
			T = Bd.prototype;
			T.xb = function(c) {
				return this.a._malloc(c)
			}
			;
			T.mb = function(c) {
				this.a._free(c)
			}
			;
			T.lc = function(c, d, e, h) {
				this.a.HEAPU8.set(c.subarray(d, d + e), h)
			}
			;
			T.mc = function(c, d, e, h) {
				e.set(this.a.HEAPU8.subarray(c, c + d), h)
			}
			;
			T.Ac = function(c, d) {
				return this.a._crn_get_decompressed_size(c, d)
			}
			;
			T.sc = function(c, d, e, h) {  //将源数据偏移地址为c的长度为d数据解压缩到内存地址为e，长度为h的buffer中
				return this.a._crn_decompress(c, d, e, h)
			}
			;
			T.Gc = function() {
				function c(a) {
					eval.call(null, a)
				}
				function d(a) {
					w.print(a + ":\n" + Error().stack);
					throw "Assertion: " + a;
				}
				function e(a, b) {
					a || d("Assertion failed: " + b)
				}
				function h(a, b, n, u) {
					var f = 0;
					try {
						var c = eval("_" + a)
					} catch (Fa) {
						try {
							c = Kd.Module["_" + a]
						} catch (sf) {}
					}
					e(c, "Cannot call unknown function " + a + " (perhaps LLVM optimizations or closure removed it?)");
					var r = 0;
					a = u ? u.map(function(a) {
						var b = n[r++];
						"string" == b ? (f || (f = Q.Bb()),
						b = Q.Ma(a.length + 1),
						G(a, b),
						a = b) : "array" == b && (f || (f = Q.Bb()),
						b = Q.Ma(a.length),
						C(a, b),
						a = b);
						return a
					}) : [];
					b = function(a, b) {
						if ("string" == b)
							return m(a);
						e("array" != b);
						return a
					}(c.apply(null, a), b);
					f && Q.kd(f);
					return b
				}
				function k(a, f, n) {
					n = n || "i8";
					"*" === n[n.length - 1] && (n = "i32");
					switch (n) {
					case "i1":
						D[a] = f;
						break;
					case "i8":
						D[a] = f;
						break;
					case "i16":
						Da[a >> 1] = f;
						break;
					case "i32":
						b[a >> 2] = f;
						break;
					case "i64":
						b[a >> 2] = f;
						break;
					case "float":
						Cb[a >> 2] = f;
						break;
					case "double":
						Xb[0] = f;
						b[a >> 2] = cb[0];
						b[a + 4 >> 2] = cb[1];
						break;
					default:
						d("invalid type for setValue: " + n)
					}
				}
				function g(a, b, n) {
					if ("number" === typeof a) {
						var f = !0;
						var c = a
					} else
						f = !1,
						c = a.length;
					var N = "string" === typeof b ? b : null;
					n = [db, Q.Ma, Q.Cb][void 0 === n ? 2 : n](Math.max(c, N ? 1 : b.length));
					if (f)
						return Xa(n, 0, c),
						n;
					f = 0;
					for (var r; f < c; ) {
						var d = a[f];
						"function" === typeof d && (d = Q.ef(d));
						r = N || b[f];
						0 === r ? f++ : ("i64" == r && (r = "i32"),
						k(n + f, d, r),
						f += Q.Ea(r))
					}
					return n
				}
				function m(a, b) {
					for (var f = "undefined" == typeof b, u = "", c = 0, N, r = String.fromCharCode(0); ; ) {
						N = String.fromCharCode(I[a + c]);
						if (f && N == r)
							break;
						u += N;
						c += 1;
						if (!f && c == b)
							break
					}
					return u
				}
				function p(a) {
					for (; 0 < a.length; ) {
						var b = a.shift()
						, n = b.Da;
						"number" === typeof n && (n = Ma[n]);
						n(void 0 === b.gc ? null : b.gc)
					}
				}
				function v(a, b) {
					return Array.prototype.slice.call(D.subarray(a, a + b))
				}
				function z(a) {
					for (var b = 0; D[a + b]; )
						b++;
					return b
				}
				function B(a, b) {
					var f = z(a);
					b && f++;
					a = v(a, f);
					b && (a[f - 1] = 0);
					return a
				}
				function A(a, b, n) {
					var f = []
					, c = 0;
					void 0 === n && (n = a.length);
					for (; c < n; ) {
						var N = a.charCodeAt(c);
						255 < N && (N &= 255);
						f.push(N);
						c += 1
					}
					b || f.push(0);
					return f
				}
				function G(a, b, n) {
					for (var f = 0; f < a.length; ) {
						var c = a.charCodeAt(f);
						255 < c && (c &= 255);
						D[b + f] = c;
						f += 1
					}
					n || (D[b + f] = 0)
				}
				function C(a, b) {
					for (var f = 0; f < a.length; f++)
						D[b + f] = a[f]
				}
				function R(a, b) {
					return 0 <= a ? a : 32 >= b ? 2 * Math.abs(1 << b - 1) + a : Math.pow(2, b) + a
				}
				function L(a, b) {
					if (0 >= a)
						return a;
					var f = 32 >= b ? Math.abs(1 << b - 1) : Math.pow(2, b - 1);
					a >= f && (32 >= b || a > f) && (a = -2 * f + a);
					return a
				}
				function O(a) {
					return 0 == (a | 0) ? 0 : 0 == (a - 1 & a | 0)
				}
				function sa(a) {
					a = a - 1 | 0;
					a |= a >>> 16;
					a |= a >>> 8;
					a |= a >>> 4;
					a |= a >>> 2;
					return (a >>> 1 | a) + 1 | 0
				}
				function ka(a, b) {
					return a >>> 0 < b >>> 0 ? a : b
				}
				function qa(a, b) {
					return a >>> 0 > b >>> 0 ? a : b
				}
				function P(a, f, n) {
					var u = M;
					M += 512;
					var c = u | 0;
					Ld(c, q.md | 0, (lb = M,
					M += 12,
					b[lb >> 2] = f,
					b[lb + 4 >> 2] = n,
					b[lb + 8 >> 2] = a,
					lb));
					Md(c);
					M = u
				}
				function la(a, f, n, u, c) {
					var N = M;
					M += 4;
					var na = N
					, d = a + 4 | 0;
					var e = (a + 8 | 0) >> 2;
					t[d >> 2] >>> 0 > t[e] >>> 0 && P(q.nd | 0, q.a | 0, 2181);
					Math.floor(2147418112 / (u >>> 0)) >>> 0 <= f >>> 0 && P(q.Vb | 0, q.a | 0, 2182);
					var h = t[e]
					, y = h >>> 0 < f >>> 0;
					do {
						if (y) {
							var E = n ? O(f) ? f : sa(f) : f;
							0 != (E | 0) & E >>> 0 > h >>> 0 || P(q.$b | 0, q.a | 0, 2191);
							var H = E * u | 0;
							if (0 == (c | 0)) {
								var x = a | 0;
								var l = Ea(b[x >> 2], H, na, 1);
								if (0 == (l | 0)) {
									E = 0;
									break
								}
								b[x >> 2] = l
							} else {
								l = J(H, na);
								if (0 == (l | 0)) {
									E = 0;
									break
								}
								x = (a | 0) >> 2;
								Ma[c](l, b[x], b[d >> 2]);
								var g = b[x];
								0 != (g | 0) && aa(g);
								b[x] = l
							}
							x = t[na >> 2];
							b[e] = x >>> 0 > H >>> 0 ? Math.floor((x >>> 0) / (u >>> 0)) : E
						}
						E = 1
					} while (0);
					M = N;
					return E
				}
				function Ea(a, f, n, u) {
					var c = M;
					M += 4;
					var N = c;
					0 == (a & 7 | 0) ? 2147418112 < f >>> 0 ? (mb(q.o | 0),
					n = 0) : (b[N >> 2] = f,
					a = Ma[b[Yb >> 2]](a, f, N, u, b[Zb >> 2]),
					0 != (n | 0) && (b[n >> 2] = b[N >> 2]),
					0 != (a & 7 | 0) && P(q.u | 0, q.a | 0, 2654),
					n = a) : (mb(q.Fb | 0),
					n = 0);
					M = c;
					return n
				}
				function J(a, f) {
					var n = M;
					M += 4;
					var u = n;
					a = a + 3 & -4;
					a = 0 == (a | 0) ? 4 : a;
					if (2147418112 < a >>> 0)
						mb(q.o | 0),
						f = 0;
					else {
						b[u >> 2] = a;
						var c = Ma[b[Yb >> 2]](0, a, u, 1, b[Zb >> 2]);
						u = t[u >> 2];
						0 != (f | 0) && (b[f >> 2] = u);
						0 == (c | 0) | u >>> 0 < a >>> 0 ? (mb(q.Eb | 0),
						f = 0) : (0 != (c & 7 | 0) && P(q.u | 0, q.a | 0, 2629),
						f = c)
					}
					M = n;
					return f
				}
				function aa(a) {
					if (0 != (a | 0))
						if (0 == (a & 7 | 0))
							Ma[b[Yb >> 2]](a, 0, 0, 1, b[Zb >> 2]);
						else
							mb(q.Gb | 0)
				}
				function Ja(a, f, n, u) {
					var c = a >> 2
					, N = M;
					M += 200;
					var r = N >> 2;
					var d = N + 64;
					var e = d >> 2;
					var l = N + 132
					, y = 0 == (f | 0) | 11 < u >>> 0;
					a: do
						if (y)
							var E = 0;
						else {
							b[c] = f;
							Ua(d);
							for (var H = 0; ; ) {
								var x = I[n + H | 0];
								if (0 != x << 24 >> 24) {
									var h = ((x & 255) << 2) + d | 0;
									b[h >> 2] = b[h >> 2] + 1 | 0
								}
								var g = H + 1 | 0;
								if ((g | 0) == (f | 0)) {
									var k = 1
									, $b = -1
									, p = 0
									, m = 0
									, v = 0;
									break
								}
								H = g
							}
							for (; ; ) {
								var A = t[(k << 2 >> 2) + e];
								if (0 == (A | 0)) {
									b[((k - 1 << 2) + 28 >> 2) + c] = 0;
									var w = v
									, z = m
									, B = p
									, G = $b
								} else {
									var C = ka($b, k)
									, F = qa(p, k)
									, K = k - 1 | 0;
									b[(K << 2 >> 2) + r] = v;
									var J = A + v | 0
									, U = 16 - k | 0;
									b[((K << 2) + 28 >> 2) + c] = (J - 1 << U | (1 << U) - 1) + 1 | 0;
									b[((K << 2) + 96 >> 2) + c] = m;
									b[l + (k << 2) >> 2] = m;
									w = J;
									z = A + m | 0;
									B = F;
									G = C
								}
								var L = k + 1 | 0;
								if (17 == (L | 0))
									break;
								k = L;
								$b = G;
								p = B;
								m = z;
								v = w << 1
							}
							b[c + 1] = z;
							var ac = (a + 172 | 0) >> 2;
							if (z >>> 0 > t[ac] >>> 0) {
								var R = O(z) ? z : ka(f, sa(z));
								b[ac] = R;
								var Q = a + 176 | 0
								, W = b[Q >> 2];
								if (0 == (W | 0))
									var wc = R;
								else
									ab(W),
									wc = b[ac];
								var ma = Ya(wc);
								b[Q >> 2] = ma;
								if (0 == (ma | 0)) {
									E = 0;
									break
								}
								var fa = Q
							} else
								fa = a + 176 | 0;
							var ha = a + 24 | 0;
							D[ha] = G & 255;
							D[a + 25 | 0] = B & 255;
							for (var ba = 0; ; ) {
								var ia = I[n + ba | 0]
								, ca = ia & 255;
								if (0 != ia << 24 >> 24) {
									0 == (b[(ca << 2 >> 2) + e] | 0) && P(q.ac | 0, q.a | 0, 2334);
									var ja = (ca << 2) + l | 0
									, V = t[ja >> 2];
									b[ja >> 2] = V + 1 | 0;
									V >>> 0 >= z >>> 0 && P(q.bc | 0, q.a | 0, 2338);
									Da[b[fa >> 2] + (V << 1) >> 1] = ba & 65535
								}
								var S = ba + 1 | 0;
								if ((S | 0) == (f | 0))
									break;
								ba = S
							}
							var X = I[ha]
							, ea = (X & 255) >>> 0 < u >>> 0 ? u : 0
							, da = a + 8 | 0;
							b[da >> 2] = ea;
							var xc = 0 != (ea | 0);
							if (xc) {
								var oa = 1 << ea
								, ua = a + 164 | 0;
								if (oa >>> 0 > t[ua >> 2] >>> 0) {
									b[ua >> 2] = oa;
									var Y = a + 168 | 0
									, yc = b[Y >> 2];
									0 != (yc | 0) && Va(yc);
									var Ca = va(oa);
									b[Y >> 2] = Ca;
									if (0 == (Ca | 0)) {
										E = 0;
										break a
									}
									Xa(Ca, -1, oa << 2, 1);
									if (0 == (ea | 0))
										var aa = 26;
									else
										ra = Y,
										aa = 34
								} else {
									var la = a + 168 | 0;
									Xa(b[la >> 2], -1, oa << 2, 1);
									var ra = la;
									aa = 34
								}
								b: do
									if (34 == aa)
										for (var pa = 1; ; ) {
											var xa = 0 == (b[(pa << 2 >> 2) + e] | 0);
											c: do
												if (!xa) {
													var Ba = ea - pa | 0
													, Aa = 1 << Ba
													, ta = pa - 1 | 0
													, za = t[(ta << 2 >> 2) + r]
													, zc = Nd(a, pa);
													if (!(za >>> 0 > zc >>> 0))
														for (var Ja = b[((ta << 2) + 96 >> 2) + c] - za | 0, Ha = pa << 16, ya = za; ; ) {
															var Ka = Z[b[fa >> 2] + (Ja + ya << 1) >> 1] & 65535;
															(I[n + Ka | 0] & 255 | 0) != (pa | 0) && P(q.cc | 0, q.a | 0, 2380);
															for (var La = ya << Ba, Oa = Ka | Ha, Ga = 0; ; ) {
																var ub = Ga + La | 0;
																ub >>> 0 >= oa >>> 0 && P(q.ec | 0, q.a | 0, 2386);
																var vb = t[ra >> 2];
																if (-1 == (b[vb + (ub << 2) >> 2] | 0))
																	var Ac = vb;
																else
																	P(q.fc | 0, q.a | 0, 2388),
																	Ac = b[ra >> 2];
																b[Ac + (ub << 2) >> 2] = Oa;
																var Ia = Ga + 1 | 0;
																if (Ia >>> 0 >= Aa >>> 0)
																	break;
																Ga = Ia
															}
															var wa = ya + 1 | 0;
															if (wa >>> 0 > zc >>> 0)
																break c;
															ya = wa
														}
												}
											while (0);
											var Ea = pa + 1 | 0;
											if (Ea >>> 0 > ea >>> 0)
												break b;
											pa = Ea
										}
								while (0);
								var Ma = D[ha]
							} else
								Ma = X;
							var Na = a + 96 | 0;
							b[Na >> 2] = b[Na >> 2] - b[r] | 0;
							var Qa = a + 100 | 0;
							b[Qa >> 2] = b[Qa >> 2] - b[r + 1] | 0;
							var Sa = a + 104 | 0;
							b[Sa >> 2] = b[Sa >> 2] - b[r + 2] | 0;
							var Bc = a + 108 | 0;
							b[Bc >> 2] = b[Bc >> 2] - b[r + 3] | 0;
							var Cc = a + 112 | 0;
							b[Cc >> 2] = b[Cc >> 2] - b[r + 4] | 0;
							var Gb = a + 116 | 0;
							b[Gb >> 2] = b[Gb >> 2] - b[r + 5] | 0;
							var Pa = a + 120 | 0;
							b[Pa >> 2] = b[Pa >> 2] - b[r + 6] | 0;
							var nb = a + 124 | 0;
							b[nb >> 2] = b[nb >> 2] - b[r + 7] | 0;
							var Ta = a + 128 | 0;
							b[Ta >> 2] = b[Ta >> 2] - b[r + 8] | 0;
							var Dc = a + 132 | 0;
							b[Dc >> 2] = b[Dc >> 2] - b[r + 9] | 0;
							var Ec = a + 136 | 0;
							b[Ec >> 2] = b[Ec >> 2] - b[r + 10] | 0;
							var rb = a + 140 | 0;
							b[rb >> 2] = b[rb >> 2] - b[r + 11] | 0;
							var Hb = a + 144 | 0;
							b[Hb >> 2] = b[Hb >> 2] - b[r + 12] | 0;
							var Ib = a + 148 | 0;
							b[Ib >> 2] = b[Ib >> 2] - b[r + 13] | 0;
							var Jb = a + 152 | 0;
							b[Jb >> 2] = b[Jb >> 2] - b[r + 14] | 0;
							var ob = a + 156 | 0;
							b[ob >> 2] = b[ob >> 2] - b[r + 15] | 0;
							var Kb = a + 16 | 0;
							b[Kb >> 2] = 0;
							var Za = (a + 20 | 0) >> 2;
							b[Za] = Ma & 255;
							b: do
								if (xc) {
									for (var sb = ea; ; ) {
										if (0 == (sb | 0))
											break b;
										var $a = sb - 1 | 0;
										if (0 != (b[(sb << 2 >> 2) + e] | 0))
											break;
										sb = $a
									}
									b[Kb >> 2] = b[(($a << 2) + 28 >> 2) + c];
									for (var Lb = ea + 1 | 0, Ra = b[Za] = Lb; ; ) {
										if (Ra >>> 0 > B >>> 0)
											break b;
										if (0 != (b[(Ra << 2 >> 2) + e] | 0))
											break;
										Ra = Ra + 1 | 0
									}
									b[Za] = Ra
								}
							while (0);
							b[c + 23] = -1;
							b[c + 40] = 1048575;
							b[c + 3] = 32 - b[da >> 2] | 0;
							E = 1
						}
					while (0);
					M = N;
					return E
				}
				function Ua(a) {
					Xa(a, 0, 68, 1)
				}
				function ab(a) {
					if (0 != (a | 0)) {
						var f = b[a - 4 >> 2];
						a = a - 8 | 0;
						var n = 0 == (f | 0) ? 4 : (f | 0) == (b[a >> 2] ^ -1 | 0) ? 5 : 4;
						4 == n && P(q.M | 0, q.a | 0, 696);
						aa(a)
					}
				}
				function Ya(a) {
					a = 0 == (a | 0) ? 1 : a;
					var f = J((a << 1) + 8 | 0, 0);
					0 == (f | 0) ? a = 0 : (b[f + 4 >> 2] = a,
					b[f >> 2] = a ^ -1,
					a = f + 8 | 0);
					return a
				}
				function Va(a) {
					if (0 != (a | 0)) {
						var f = b[a - 4 >> 2];
						a = a - 8 | 0;
						var n = 0 == (f | 0) ? 4 : (f | 0) == (b[a >> 2] ^ -1 | 0) ? 5 : 4;
						4 == n && P(q.M | 0, q.a | 0, 696);
						aa(a)
					}
				}
				function va(a) {
					a = 0 == (a | 0) ? 1 : a;
					var f = J((a << 2) + 8 | 0, 0);
					0 == (f | 0) ? a = 0 : (b[f + 4 >> 2] = a,
					b[f >> 2] = a ^ -1,
					a = f + 8 | 0);
					return a
				}
				function Nd(a, f) {
					0 != (f | 0) & 17 > f >>> 0 || P(q.Zb | 0, q.a | 0, 2018);
					a = b[a + (f - 1 << 2) + 28 >> 2];
					return 0 == (a | 0) ? -1 : (a - 1 | 0) >>> ((16 - f | 0) >>> 0)
				}
				function pa(a) {
					return (I[a | 0] & 255) << 8 | I[a + 1 | 0] & 255
				}
				function pb(a) {
					return (I[a + 1 | 0] & 255) << 16 | (I[a | 0] & 255) << 24 | I[a + 3 | 0] & 255 | (I[a + 2 | 0] & 255) << 8
				}
				function Ka(a) {
					return I[a | 0] & 255
				}
				function Na(a) {
					return I[a + 2 | 0] & 255 | (I[a | 0] & 255) << 16 | (I[a + 1 | 0] & 255) << 8
				}
				function Od(a) {
					return 0 != (D[a + 12 | 0] & 1) << 24 >> 24
				}
				function Pd(a, f, n, u) {
					0 == (a | 0) ? (a = db(f),
					0 == (n | 0) ? n = a : (b[n >> 2] = 0 == (a | 0) ? 0 : bc(a),
					n = a)) : 0 == (f | 0) ? (eb(a),
					0 != (n | 0) && (b[n >> 2] = 0),
					n = 0) : (u ? (f = Qd(a, f),
					0 == (f | 0) ? f = 0 : a = f) : f = 0,
					0 != (n | 0) && (b[n >> 2] = bc(a)),
					n = f);
					return n
				}
				function Rd(a) {
					return 0 == (a | 0) ? 0 : bc(a)
				}
				function mb(a) {
					P(a, q.a | 0, 2602)
				}
				function Sd(a, b) { //crnd_get_crn_format_bits_per_texel
					0 == a && 0 == b || 9 == a && 0 == b ? a = 4 : 1 == a && 0 == b || 2 == a && 0 == b || 7 == a && 0 == b || 8 == a && 0 == b || 3 == a && 0 == b || 4 == a && 0 == b || 5 == a && 0 == b || 6 == a && 0 == b ? a = 8 : (P(q.Mb | 0, q.a | 0, 2766),
					a = 0);
					return a
				}
				function Fc(a, b) {
					return Sd(a, b) << 1 & 536870910
				}
				function Gc(a, b, n) {
					if (0 == (b | 0) | 74 > n >>> 0)
						var f = 0;
					else
						18552 != (pa(b) | 0) ? f = 0 : 74 > pa(b + 2 | 0) >>> 0 ? f = 0 : pb(b + 6 | 0) >>> 0 > n >>> 0 ? f = 0 : f = b;
					return f
				}
				function Sa(a, f, n) {
					var u = n >> 2;
					0 == (a | 0) | 74 > f >>> 0 | 0 == (n | 0) ? u = 0 : 40 != (b[u] | 0) ? u = 0 : (a = Gc(0, a, f),
					0 == (a | 0) ? u = 0 : (b[u + 1] = pa(a + 12 | 0),
					b[u + 2] = pa(a + 14 | 0),
					b[u + 3] = Ka(a + 16 | 0),
					b[u + 4] = Ka(a + 17 | 0),
					f = a + 18 | 0,
					n = n + 32 | 0,
					b[n >> 2] = Ka(f),
					b[n + 4 >> 2] = 0,
					n = Ka(f),
					b[u + 5] = 0 == (n | 0) ? 8 : 9 == (n | 0) ? 8 : 16,
					b[u + 6] = pb(a + 25 | 0),
					b[u + 7] = pb(a + 29 | 0),
					u = 1));
					return u
				}
				function Ha(a) {
					b[a >> 2] = 0;
					Hc(a + 4 | 0);
					b[a + 20 >> 2] = 0
				}
				function Hc(a) {
					Td(a)
				}
				function Ud(a, f) {
					if ((a | 0) != (f | 0)) {
						b[a >> 2] = b[f >> 2];
						var n = a + 4 | 0;
						Vd(n, f + 4 | 0);
						if (Od(n))
							Ic(a);
						else {
							n = b[f + 20 >> 2];
							f = (a + 20 | 0) >> 2;
							var u = b[f];
							0 == (n | 0) ? (cc(u),
							b[f] = 0) : 0 == (u | 0) ? (n = Wd(n),
							b[f] = n) : Jc(u, n)
						}
					}
					return a
				}
				function Xd(a) {
					Yd(a)
				}
				function cc(a) {
					0 != (a | 0) && (Zd(a),
					aa(a))
				}
				function Vd(a, b) {
					$d(a, b);
					return a
				}
				function Ic(a) {
					b[a >> 2] = 0;
					dc(a + 4 | 0);
					a = a + 20 | 0;
					var f = b[a >> 2];
					0 != (f | 0) && (cc(f),
					b[a >> 2] = 0)
				}
				function ae(a, f) {
					b[a >> 2] = 0;
					Hc(a + 4 | 0);
					b[a + 20 >> 2] = 0;
					Ud(a, f)
				}
				function ya(a) {
					var f = b[a + 20 >> 2];
					0 != (f | 0) && cc(f);
					Xd(a + 4 | 0)
				}
				function be(a) {
					var b = 0 == (a | 0);
					a: do
						if (b)
							var n = 0;
						else
							for (b = 0; ; )
								if (a >>>= 1,
								b = b + 1 | 0,
								0 == (a | 0)) {
									n = b;
									break a
								}
					while (0);
					return n
				}
				function ce(a) {
					return b[a + 4 >> 2]
				}
				function Kc(a) {
					a >>= 2;
					b[a] = 0;
					b[a + 1] = 0;
					b[a + 2] = 0;
					b[a + 3] = 0;
					b[a + 4] = 0;
					b[a + 5] = 0
				}
				function de(a) {
					b[a + 16 >> 2] = 0;
					b[a + 20 >> 2] = 0
				}
				function Jc(a, f) {
					if ((a | 0) != (f | 0)) {
						ee(a);
						fb(a, f, 180, 1);
						var n = f + 168 | 0;
						if (0 != (b[n >> 2] | 0)) {
							var u = a + 164 | 0
							, c = va(b[u >> 2]);
							b[a + 168 >> 2] = c;
							0 != (c | 0) && fb(c, b[n >> 2], b[u >> 2] << 2, 1)
						}
						f = f + 176 | 0;
						0 != (b[f >> 2] | 0) && (n = a + 172 | 0,
						u = Ya(b[n >> 2]),
						b[a + 176 >> 2] = u,
						0 != (u | 0) && fb(u, b[f >> 2], b[n >> 2] << 1, 1))
					}
					return a
				}
				function Wd(a) {
					var b = J(180, 0);
					return 0 == (b | 0) ? 0 : fe(b, a)
				}
				function dc(a) {
					var f = a | 0
					, n = b[f >> 2];
					if (0 != (n | 0)) {
						var u = a + 4 | 0;
						aa(n);
						b[f >> 2] = 0;
						b[u >> 2] = 0;
						b[a + 8 >> 2] = 0
					}
					D[a + 12 | 0] = 0
				}
				function ec(a, f) {
					var n = (a + 4 | 0) >> 2;
					var u = t[n]
					, c = (u | 0) == (f | 0);
					do
						if (c)
							var N = 1;
						else {
							if (u >>> 0 <= f >>> 0) {
								if (t[a + 8 >> 2] >>> 0 < f >>> 0) {
									if (!Lc(a, f, (u + 1 | 0) == (f | 0))) {
										N = 0;
										break
									}
									N = b[n]
								} else
									N = u;
								ge(b[a >> 2] + N | 0, f - N | 0)
							}
							b[n] = f;
							N = 1
						}
					while (0);
					return N
				}
				function gb(a, f) {
					t[a + 4 >> 2] >>> 0 <= f >>> 0 && P(q.l | 0, q.a | 0, 968);
					return b[a >> 2] + f | 0
				}
				function he() {
					var a = J(180, 0);
					return 0 == (a | 0) ? 0 : ie(a)
				}
				function je(a) {
					a = t[a >> 2];
					return 16 < a >>> 0 ? ka(ke(a) + 1 | 0, 11) & 255 : 0
				}
				function Mc(a) {
					var f = a + 4 | 0
					, n = ce(f);
					0 != (n | 0) & 8193 > n >>> 0 || P(q.Pb | 0, q.a | 0, 3106);
					var u = a | 0;
					b[u >> 2] = n;
					var c = a + 20 | 0
					, N = t[c >> 2];
					0 == (N | 0) ? (n = he(),
					c = b[c >> 2] = n,
					u = b[u >> 2]) : (c = N,
					u = n);
					f = gb(f, 0);
					return Ja(c, u, f, je(a))
				}
				function ke(a) {
					var b = le(a);
					return 32 == (b | 0) ? 32 : (1 << b >>> 0 < a >>> 0 & 1) + b | 0
				}
				function Ta(a, b) {
					0 == (b | 0) ? a = 0 : 16 < b >>> 0 ? (b = yb(a, b - 16 | 0),
					a = yb(a, 16),
					a = b << 16 | a) : a = yb(a, b);
					return a
				}
				function U(a, f) {
					var n = t[f + 20 >> 2] >> 2;
					var u = (a + 20 | 0) >> 2;
					var c = t[u];
					if (24 > (c | 0)) {
						var N = (a + 4 | 0) >> 2;
						var r = t[N]
						, d = t[a + 8 >> 2]
						, e = r >>> 0 < d >>> 0;
						16 > (c | 0) ? (e ? (e = r + 1 | 0,
						r = (I[r] & 255) << 8) : (e = r,
						r = 0),
						e >>> 0 < d >>> 0 ? (d = e + 1 | 0,
						e = I[e] & 255) : (d = e,
						e = 0),
						b[N] = d,
						b[u] = c + 16 | 0,
						N = a + 16 | 0,
						c = (e | r) << 16 - c | b[N >> 2],
						b[N >> 2] = c) : (e ? (b[N] = r + 1 | 0,
						r = I[r] & 255) : r = 0,
						b[u] = c + 8 | 0,
						N = a + 16 | 0,
						c = r << 24 - c | b[N >> 2],
						b[N >> 2] = c)
					} else
						c = b[a + 16 >> 2];
					a = a + 16 | 0;
					N = (c >>> 16) + 1 | 0;
					if (N >>> 0 > t[n + 4] >>> 0) {
						d = t[n + 5];
						e = d - 1 | 0;
						var l = N >>> 0 > t[((e << 2) + 28 >> 2) + n] >>> 0;
						a: do
							if (l)
								for (; ; ) {
									r = d + 1 | 0;
									if (N >>> 0 <= t[((d << 2) + 28 >> 2) + n] >>> 0) {
										var y = d;
										break a
									}
									d = r
								}
							else
								r = d,
								y = e;
						while (0);
						c = (c >>> ((32 - r | 0) >>> 0)) + b[((y << 2) + 96 >> 2) + n] | 0;
						if (c >>> 0 < t[f >> 2] >>> 0) {
							x = r;
							h = Z[b[n + 44] + (c << 1) >> 1] & 65535;
							var E = 22
						} else {
							P(q.L | 0, q.a | 0, 3375);
							var H = 0;
							E = 23
						}
					} else {
						x = t[b[n + 42] + (c >>> ((32 - b[n + 2] | 0) >>> 0) << 2) >> 2];
						-1 == (x | 0) && P(q.Tb | 0, q.a | 0, 3353);
						n = x & 65535;
						x >>>= 16;
						f = me(f + 4 | 0, n);
						if ((I[f] & 255 | 0) == (x | 0))
							var x = x
							, h = n;
						else
							P(q.Ub | 0, q.a | 0, 3357),
							h = n;
						E = 22
					}
					22 == E && (b[a >> 2] <<= x,
					b[u] = b[u] - x | 0,
					H = h);
					return H
				}
				function hb(a, f, n) {
					0 == (n | 0) ? a = 0 : (b[a >> 2] = f,
					b[a + 4 >> 2] = f,
					b[a + 12 >> 2] = n,
					b[a + 8 >> 2] = f + n | 0,
					de(a),
					a = 1);
					return a
				}
				function yb(a, f) {
					33 <= f >>> 0 && P(q.Qb | 0, q.a | 0, 3299);
					var n = (a + 20 | 0) >> 2;
					var u = t[n]
					, c = (u | 0) < (f | 0);
					a: do
						if (c) {
							var N = a + 4 | 0;
							c = a + 8 | 0;
							for (var d = a + 16 | 0, e = u; ; )
								if (u = b[N >> 2],
								(u | 0) == (b[c >> 2] | 0) ? u = 0 : (b[N >> 2] = u + 1 | 0,
								u = I[u] & 255),
								e = e + 8 | 0,
								b[n] = e,
								33 > (e | 0) || (P(q.Rb | 0, q.a | 0, 3308),
								e = b[n]),
								u = u << 32 - e | b[d >> 2],
								b[d >> 2] = u,
								(e | 0) >= (f | 0)) {
									N = e;
									d = u;
									break a
								}
						} else
							N = u,
							d = b[a + 16 >> 2];
					while (0);
					b[a + 16 >> 2] = d << f;
					b[n] = N - f | 0;
					return d >>> ((32 - f | 0) >>> 0)
				}
				function me(a, f) {
					t[a + 4 >> 2] >>> 0 <= f >>> 0 && P(q.l | 0, q.a | 0, 967);
					return b[a >> 2] + f | 0
				}
				function wa(a, b) {
					var f = M;
					M += 24;
					var u = f
					, c = Ta(a, be(8192));
					if (0 == (c | 0))
						Ic(b),
						a = 1;
					else {
						var d = b + 4 | 0;
						if (ec(d, c)) {
							var r = gb(d, 0);
							Xa(r, 0, c, 1);
							r = Ta(a, 5);
							if (0 == (r | 0) | 21 < r >>> 0)
								a = 0;
							else {
								Ha(u);
								var e = u + 4 | 0
								, h = ec(e, 21);
								a: do
									if (h) {
										for (var l = 0; ; ) {
											var y = Ta(a, 3)
											, E = gb(e, I[q.ba + l | 0] & 255);
											D[E] = y & 255;
											l = l + 1 | 0;
											if ((l | 0) == (r | 0))
												break
										}
										if (Mc(u))
											b: for (r = 0; ; ) {
												l = r >>> 0 < c >>> 0;
												e = c - r | 0;
												y = 0 == (r | 0);
												for (E = r - 1 | 0; ; ) {
													if (!l) {
														if ((r | 0) != (c | 0)) {
															l = 0;
															break a
														}
														l = Mc(b);
														break a
													}
													h = U(a, u);
													if (17 > h >>> 0) {
														e = gb(d, r);
														D[e] = h & 255;
														r = r + 1 | 0;
														continue b
													}
													if (17 == (h | 0)) {
														h = Ta(a, 3) + 3 | 0;
														if (h >>> 0 > e >>> 0) {
															l = 0;
															break a
														}
														r = h + r | 0;
														continue b
													} else if (18 == (h | 0)) {
														h = Ta(a, 7) + 11 | 0;
														if (h >>> 0 > e >>> 0) {
															l = 0;
															break a
														}
														r = h + r | 0;
														continue b
													} else {
														if (2 <= (h - 19 | 0) >>> 0) {
															P(q.L | 0, q.a | 0, 3249);
															l = 0;
															break a
														}
														var H = 19 == (h | 0) ? Ta(a, 2) + 3 | 0 : Ta(a, 6) + 7 | 0;
														if (y | H >>> 0 > e >>> 0) {
															l = 0;
															break a
														}
														h = gb(d, E);
														h = I[h];
														if (0 == h << 24 >> 24) {
															l = 0;
															break a
														}
														H = H + r | 0;
														if (r >>> 0 < H >>> 0) {
															e = r;
															break
														}
													}
												}
												for (; ; )
													if (r = gb(d, e),
													e = e + 1 | 0,
													D[r] = h,
													(e | 0) == (H | 0)) {
														r = H;
														continue b
													}
											}
										else
											l = 0
									} else
										l = 0;
								while (0);
								ya(u);
								a = l
							}
						} else
							a = 0
					}
					M = f;
					return a
				}
				function Nc(a) {
					return 519686845 == (b[a >> 2] | 0)
				}
				function ne(a, b) {  //crnd_unpack_begin
					if (0 == (a | 0) | 62 > b >>> 0)
						a = 0;
					else {
						var f = oe();
						0 == (f | 0) ? a = 0 : pe(f, a, b) ? a = f : (Oc(f),
						a = 0)
					}
					return a
				}
				function oe() {
					var a = J(300, 0);
					return 0 == (a | 0) ? 0 : qe(a)
				}
				function pe(a, f, n) {
					var u = Gc(0, f, n);
					b[a + 88 >> 2] = u;
					if (0 == (u | 0))
						var c = 0;
					else
						b[a + 4 >> 2] = f,
						b[a + 8 >> 2] = n,
						re(a) ? c = se(a) : c = 0;
					return c
				}
				function Oc(a) {
					0 != (a | 0) && (te(a),
					aa(a))
				}
				function ue(a, b, n, u, c) {
					if (0 == (a | 0) | 0 == (b | 0) | 8 > n >>> 0 | 15 < c >>> 0)
						var f = 0;
					else
						Nc(a) ? f = ve(a, b, n, u, c) : f = 0;
					return f
				}
				function ve(a, f, n, u, c) {
					var d = t[a + 88 >> 2]
					, r = pb((c << 2) + d + 70 | 0)
					, e = b[a + 8 >> 2]
					, na = c + 1 | 0;
					d = na >>> 0 < Ka(d + 16 | 0) >>> 0 ? pb((na << 2) + d + 70 | 0) : e;
					d >>> 0 <= r >>> 0 && P(q.Wb | 0, q.a | 0, 3794);
					return Pc(a, b[a + 4 >> 2] + r | 0, d - r | 0, f, n, u, c)
				}
				function Pc(a, f, n, u, c, d, r) {
					var N = a + 88 | 0
					, e = t[N >> 2]
					, na = (qa(pa(e + 12 | 0) >>> (r >>> 0), 1) + 3 | 0) >>> 2;
					r = (qa(pa(e + 14 | 0) >>> (r >>> 0), 1) + 3 | 0) >>> 2;
					e = Ka(e + 18 | 0);
					e = (0 == (e | 0) ? 8 : 9 == (e | 0) ? 8 : 16) * na | 0;
					if (0 == (d | 0)) {
						var y = e;
						var E = 5
					} else if (e >>> 0 <= d >>> 0 & 0 == (d & 3 | 0))
						y = d,
						E = 5;
					else {
						var H = 0;
						E = 12
					}
					5 == E && ((y * r | 0) >>> 0 > c >>> 0 ? H = 0 : (c = (na + 1 | 0) >>> 1,
					d = (r + 1 | 0) >>> 1,
					hb(a + 92 | 0, f, n) ? (f = Ka(b[N >> 2] + 18 | 0),
					0 == (f | 0) ? (Qc(a, u, 0, y, na, r, c, d),
					H = 1) : 2 == (f | 0) || 3 == (f | 0) || 5 == (f | 0) || 6 == (f | 0) || 4 == (f | 0) ? (Rc(a, u, 0, y, na, r, c, d),
					H = 1) : 9 == (f | 0) ? (Sc(a, u, 0, y, na, r, c, d),
					H = 1) : 7 == (f | 0) || 8 == (f | 0) ? (Tc(a, u, 0, y, na, r, c, d),
					H = 1) : H = 0) : H = 0));
					return H
				}
				function we(a) {
					0 == (a | 0) ? a = 0 : Nc(a) ? (Oc(a),
					a = 1) : a = 0;
					return a
				}
				function xe(a, f) {
					var n = M;
					M += 40;
					var c = n;
					Wa(c);
					Sa(a, f, c);
					a = b[c + 4 >> 2];
					M = n;
					return a
				}
				function Wa(a) {
					ye(a)
				}
				function ze(a, f) {
					var n = M;
					M += 40;
					var c = n;
					Wa(c);
					Sa(a, f, c);
					a = b[c + 8 >> 2];
					M = n;
					return a
				}
				function Ae(a, f) {
					var n = M;
					M += 40;
					var c = n;
					Wa(c);
					Sa(a, f, c);
					a = b[c + 12 >> 2];
					M = n;
					return a
				}
				function Be(a, f) {
					var n = M;
					M += 40;
					var c = n;
					Wa(c);
					Sa(a, f, c);
					a = b[(c + 32 | 0) >> 2];
					M = n;
					return a
				}
				function Ce(a, f) {
					var n = M;
					M += 40;
					var c = n;
					Wa(c);
					Sa(a, f, c);
					a = (b[c + 4 >> 2] + 3 | 0) >>> 2;
					f = (b[c + 8 >> 2] + 3 | 0) >>> 2;
					c = c + 32 | 0;
					c = Fc(b[c >> 2], b[c + 4 >> 2]);
					M = n;
					return f * a * c | 0
				}
				function De(a, f, n, c) {
					var u = M;
					M += 44;
					var d = u
					, r = u + 40;
					Wa(d);
					Sa(a, f, d);
					var e = (b[d + 4 >> 2] + 3 | 0) >>> 2; //blocks_x
					d = d + 32 | 0;
					d = Fc(b[d >> 2], b[d + 4 >> 2]);
					e = e * d | 0; //row_pitch
					a = ne(a, f);
					r |= 0;
					b[r >> 2] = n;
					ue(a, r, c, e, 0);
					we(a);
					M = u
				}
				function te(a) {
					Ee(a)
				}
				function Ee(a) {
					Uc(a)
				}
				function Fe(a) {
					b[a >> 2] = 0;
					b[a + 4 >> 2] = 0;
					b[a + 8 >> 2] = 0;
					D[a + 12 | 0] = 0
				}
				function Ge(a) {
					b[a >> 2] = 0;
					b[a + 4 >> 2] = 0;
					b[a + 8 >> 2] = 0;
					D[a + 12 | 0] = 0
				}
				function He(a) {
					b[a + 164 >> 2] = 0;
					b[a + 168 >> 2] = 0;
					b[a + 172 >> 2] = 0;
					b[a + 176 >> 2] = 0
				}
				function Td(a) {
					b[a >> 2] = 0;
					b[a + 4 >> 2] = 0;
					b[a + 8 >> 2] = 0;
					D[a + 12 | 0] = 0
				}
				function ye(a) {
					b[a >> 2] = 40
				}
				function Vc(a) {
					Ie(a)
				}
				function Wc(a) {
					Je(a)
				}
				function Je(a) {
					Ke(a)
				}
				function Ke(a) {
					var f = a | 0
					, n = b[f >> 2];
					if (0 != (n | 0)) {
						var c = a + 4 | 0;
						aa(n);
						b[f >> 2] = 0;
						b[c >> 2] = 0;
						b[a + 8 >> 2] = 0
					}
					D[a + 12 | 0] = 0
				}
				function Ie(a) {
					Le(a)
				}
				function Le(a) {
					var f = a | 0
					, n = b[f >> 2];
					if (0 != (n | 0)) {
						var c = a + 4 | 0;
						aa(n);
						b[f >> 2] = 0;
						b[c >> 2] = 0;
						b[a + 8 >> 2] = 0
					}
					D[a + 12 | 0] = 0
				}
				function qe(a) {
					0 == (a | 0) ? a = 0 : Me(a);
					return a
				}
				function Me(a) {
					Ne(a)
				}
				function Ne(a) {
					b[a >> 2] = 519686845;
					b[a + 4 >> 2] = 0;
					b[a + 8 >> 2] = 0;
					b[a + 88 >> 2] = 0;
					Kc(a + 92 | 0);
					Ha(a + 116 | 0);
					Ha(a + 140 | 0);
					Ha(a + 164 | 0);
					Ha(a + 188 | 0);
					Ha(a + 212 | 0);
					Xc(a + 236 | 0);
					Xc(a + 252 | 0);
					Yc(a + 268 | 0);
					Yc(a + 284 | 0)
				}
				function Xc(a) {
					Ge(a)
				}
				function Yc(a) {
					Fe(a)
				}
				function ie(a) {
					0 == (a | 0) ? a = 0 : Oe(a);
					return a
				}
				function Oe(a) {
					He(a)
				}
				function Lc(a, b, n) {
					la(a, b, n, 1, 0) ? a = 1 : (D[a + 12 | 0] = 1,
					a = 0);
					return a
				}
				function ge(a, b) {
					Xa(a, 0, b, 1)
				}
				function fe(a, b) {
					0 == (a | 0) ? a = 0 : Pe(a, b);
					return a
				}
				function Pe(a, b) {
					Qe(a, b)
				}
				function Qe(a, f) {
					b[a + 164 >> 2] = 0;
					b[a + 168 >> 2] = 0;
					b[a + 172 >> 2] = 0;
					b[a + 176 >> 2] = 0;
					Jc(a, f)
				}
				function $d(a, f) {
					var n = (a | 0) == (f | 0);
					do
						if (n)
							var c = 1;
						else {
							c = (f + 4 | 0) >> 2;
							if ((b[a + 8 >> 2] | 0) == (b[c] | 0))
								ec(a, 0);
							else if (dc(a),
							!Lc(a, b[c], 0)) {
								c = 0;
								break
							}
							fb(b[a >> 2], b[f >> 2], b[c], 1);
							b[a + 4 >> 2] = b[c];
							c = 1
						}
					while (0);
					return c
				}
				function Zd(a) {
					Re(a)
				}
				function Re(a) {
					Se(a)
				}
				function Se(a) {
					var f = b[a + 168 >> 2];
					0 != (f | 0) && Va(f);
					a = b[a + 176 >> 2];
					0 != (a | 0) && ab(a)
				}
				function Yd(a) {
					dc(a)
				}
				function Qc(a, f, c, u, d, N, r, e) {
					var n, na = M;
					M += 24;
					var y = na;
					var E = y >> 2;
					var H = na + 4;
					var x = H >> 2;
					c = na + 8 >> 2;
					var h = a + 236 | 0
					, l = zb(h)
					, g = a + 252 | 0
					, Fa = zb(g);
					b[E] = 0;
					b[x] = 0;
					var k = Ka(b[a + 88 >> 2] + 17 | 0)
					, p = u >>> 2
					, m = 0 == (k | 0);
					a: do
						if (!m) {
							m = 0 == (e | 0);
							var v = e - 1 | 0;
							N = 0 != (N & 1 | 0);
							var A = u << 1
							, w = a + 92 | 0
							, z = a + 116 | 0
							, B = a + 188 | 0
							, G = p + 1 | 0
							, D = p + 2 | 0
							, C = p + 3 | 0
							, K = r - 1 | 0;
							a = a + 140 | 0;
							var F = K << 4;
							d = 0 != (d & 1 | 0);
							for (var J = 0, L = 1; ; ) {
								b: do
									if (m)
										var O = L;
									else {
										O = b[f + (J << 2) >> 2];
										for (var P = 0, W = L; ; ) {
											if (0 == (P & 1 | 0)) {
												var Q = O;
												L = 16;
												var Z = 1
												, fa = r
												, ha = 0
											} else
												Q = O + F | 0,
												L = -16,
												fa = Z = -1,
												ha = K;
											var ba = (P | 0) == (v | 0)
											, ia = ba & N
											, ca = (ha | 0) == (fa | 0);
											c: do
												if (ca)
													var ja = W;
												else
													for (ja = ba & N ^ 1,
													ba = W,
													W = Q,
													Q = W >> 2; ; ) {
														ca = 1 == (ba | 0) ? U(w, z) | 512 : ba;
														ba = ca & 7;
														ca >>>= 3;
														var V = I[q.h + ba | 0] & 255;
														var S = 0;
														for (n = b[E]; ; ) {
															var X = U(w, a);
															b[E] = n + X | 0;
															ma(y, l);
															n = t[E];
															X = za(h, n);
															b[(S << 2 >> 2) + c] = b[X >> 2];
															S = S + 1 | 0;
															if (S >>> 0 >= V >>> 0)
																break
														}
														V = (ha | 0) == (K | 0) & d;
														S = W >> 2;
														n = ia | V;
														d: do
															if (n)
																for (S = 0; ; ) {
																	var ea = S * u | 0;
																	n = ea >> 2;
																	var da = W + ea | 0
																	, R = 0 == (S | 0) | ja;
																	X = S << 1;
																	var oa = U(w, B);
																	b[x] = b[x] + oa | 0;
																	ma(H, Fa);
																	V ? (R ? (b[da >> 2] = b[((I[(ba << 2) + ta + X | 0] & 255) << 2 >> 2) + c],
																	X = za(g, b[x]),
																	b[n + (Q + 1)] = b[X >> 2],
																	n = U(w, B),
																	b[x] = b[x] + n | 0) : (n = U(w, B),
																	b[x] = b[x] + n | 0),
																	ma(H, Fa)) : R ? (b[da >> 2] = b[((I[(ba << 2) + ta + X | 0] & 255) << 2 >> 2) + c],
																	da = za(g, b[x]),
																	b[n + (Q + 1)] = b[da >> 2],
																	ea = ea + (W + 8) | 0,
																	da = U(w, B),
																	b[x] = b[x] + da | 0,
																	ma(H, Fa),
																	b[ea >> 2] = b[((I[(ba << 2) + ta + (X | 1) | 0] & 255) << 2 >> 2) + c],
																	X = za(g, b[x]),
																	b[n + (Q + 3)] = b[X >> 2]) : (n = U(w, B),
																	b[x] = b[x] + n | 0,
																	ma(H, Fa));
																	S = S + 1 | 0;
																	if (2 == (S | 0))
																		break d
																}
															else
																b[S] = b[((I[(ba << 2) + ta | 0] & 255) << 2 >> 2) + c],
																X = U(w, B),
																b[x] = b[x] + X | 0,
																ma(H, Fa),
																X = za(g, b[x]),
																b[Q + 1] = b[X >> 2],
																b[Q + 2] = b[((I[(ba << 2) + ta + 1 | 0] & 255) << 2 >> 2) + c],
																X = U(w, B),
																b[x] = b[x] + X | 0,
																ma(H, Fa),
																X = za(g, b[x]),
																b[Q + 3] = b[X >> 2],
																b[(p << 2 >> 2) + S] = b[((I[(ba << 2) + ta + 2 | 0] & 255) << 2 >> 2) + c],
																X = U(w, B),
																b[x] = b[x] + X | 0,
																ma(H, Fa),
																X = za(g, b[x]),
																b[(G << 2 >> 2) + S] = b[X >> 2],
																b[(D << 2 >> 2) + S] = b[((I[(ba << 2) + ta + 3 | 0] & 255) << 2 >> 2) + c],
																X = U(w, B),
																b[x] = b[x] + X | 0,
																ma(H, Fa),
																X = za(g, b[x]),
																b[(C << 2 >> 2) + S] = b[X >> 2];
														while (0);
														ha = ha + Z | 0;
														if ((ha | 0) == (fa | 0)) {
															ja = ca;
															break c
														}
														ba = ca;
														W = W + L | 0;
														Q = W >> 2
													}
											while (0);
											P = P + 1 | 0;
											if ((P | 0) == (e | 0)) {
												O = ja;
												break b
											}
											O = O + A | 0;
											W = ja
										}
									}
								while (0);
								J = J + 1 | 0;
								if ((J | 0) == (k | 0))
									break a;
								L = O
							}
						}
					while (0);
					M = na;
					return 1
				}
				function Uc(a) {
					b[a >> 2] = 0;
					Vc(a + 284 | 0);
					Vc(a + 268 | 0);
					Wc(a + 252 | 0);
					Wc(a + 236 | 0);
					var f = a + 188 | 0;
					ya(a + 212 | 0);
					ya(f);
					f = a + 140 | 0;
					ya(a + 164 | 0);
					ya(f);
					ya(a + 116 | 0)
				}
				function ma(a, f) {
					var c = b[a >> 2];
					f = c - f | 0;
					var u = f >> 31;
					b[a >> 2] = u & c | f & (u ^ -1)
				}
				function fc(a) {
					return b[a + 4 >> 2]
				}
				function zb(a) {
					return b[a + 4 >> 2]
				}
				function Rc(a, f, c, u, d, N, r, e) {
					var n = M;
					M += 48;
					var na = n;
					var y = na >> 2;
					var E = n + 4;
					var H = E >> 2;
					var x = n + 8;
					var h = x >> 2;
					var l = n + 12;
					var g = l >> 2;
					var Fa = n + 16 >> 2;
					c = n + 32 >> 2;
					var k = a + 236 | 0
					, p = zb(k)
					, m = a + 252 | 0
					, v = zb(m)
					, w = a + 268 | 0
					, A = fc(w)
					, z = b[a + 88 >> 2]
					, B = pa(z + 63 | 0);
					b[y] = 0;
					b[H] = 0;
					b[h] = 0;
					b[g] = 0;
					z = Ka(z + 17 | 0);
					var G = 0 == (z | 0);
					a: do
						if (!G) {
							G = 0 == (e | 0);
							var D = e - 1 | 0;
							N = 0 == (N & 1 | 0);
							var K = u << 1
							, C = a + 92 | 0
							, F = a + 116 | 0
							, J = a + 212 | 0
							, L = a + 188 | 0
							, O = a + 284 | 0
							, P = a + 140 | 0;
							a = a + 164 | 0;
							var W = r - 1 | 0
							, Q = W << 5;
							d = 0 != (d & 1 | 0);
							for (var R = 0, fa = 1; ; ) {
								b: do
									if (G)
										var ha = fa;
									else {
										ha = b[f + (R << 2) >> 2];
										for (var ba = 0, ia = fa; ; ) {
											if (0 == (ba & 1 | 0)) {
												var ca = ha;
												fa = 32;
												var ja = 1
												, V = r
												, S = 0
											} else
												ca = ha + Q | 0,
												fa = -32,
												V = ja = -1,
												S = W;
											var X = N | (ba | 0) != (D | 0);
											var ea = (S | 0) == (V | 0);
											c: do
												if (ea)
													var da = ia;
												else
													for (da = ia; ; ) {
														ia = 1 == (da | 0) ? U(C, F) | 512 : da;
														da = ia & 7;
														ia >>>= 3;
														ea = I[q.h + da | 0] & 255;
														for (var Y = 0, oa = b[h]; ; ) {
															var ua = U(C, a);
															b[h] = oa + ua | 0;
															ma(x, A);
															oa = t[h];
															ua = Aa(w, oa);
															b[(Y << 2 >> 2) + c] = Z[ua >> 1] & 65535;
															Y = Y + 1 | 0;
															if (Y >>> 0 >= ea >>> 0)
																break
														}
														Y = 0;
														for (oa = b[y]; !(ua = U(C, P),
														b[y] = oa + ua | 0,
														ma(na, p),
														oa = t[y],
														ua = za(k, oa),
														b[(Y << 2 >> 2) + Fa] = b[ua >> 2],
														Y = Y + 1 | 0,
														Y >>> 0 >= ea >>> 0); )
															;
														Y = (S | 0) == (W | 0) & d;
														oa = ca;
														ea = oa >> 2;
														for (ua = 0; ; ) {
															var ka = 0 == (ua | 0) | X;
															var aa = ua << 1;
															var Ca = U(C, J);
															b[g] = b[g] + Ca | 0;
															ma(l, B);
															Ca = U(C, L);
															b[H] = b[H] + Ca | 0;
															ma(E, v);
															if (ka) {
																var ra = oa
																, la = I[(da << 2) + ta + aa | 0] & 255;
																Ca = Aa(O, 3 * b[g] | 0) >> 1;
																b[ra >> 2] = (Z[Ca] & 65535) << 16 | b[(la << 2 >> 2) + c];
																b[ea + 1] = (Z[Ca + 2] & 65535) << 16 | Z[Ca + 1] & 65535;
																b[ea + 2] = b[(la << 2 >> 2) + Fa];
																Ca = za(m, b[H]);
																b[ea + 3] = b[Ca >> 2]
															}
															Ca = U(C, J);
															b[g] = b[g] + Ca | 0;
															ma(l, B);
															Ca = U(C, L);
															b[H] = b[H] + Ca | 0;
															ma(E, v);
															Y | ka ^ 1 || (ka = oa + 16 | 0,
															Ca = I[(da << 2) + ta + (aa | 1) | 0] & 255,
															aa = Aa(O, 3 * b[g] | 0) >> 1,
															b[ka >> 2] = (Z[aa] & 65535) << 16 | b[(Ca << 2 >> 2) + c],
															b[ea + 5] = (Z[aa + 2] & 65535) << 16 | Z[aa + 1] & 65535,
															b[ea + 6] = b[(Ca << 2 >> 2) + Fa],
															aa = za(m, b[H]),
															b[ea + 7] = b[aa >> 2]);
															ua = ua + 1 | 0;
															if (2 == (ua | 0))
																break;
															oa = oa + u | 0;
															ea = oa >> 2
														}
														S = S + ja | 0;
														if ((S | 0) == (V | 0)) {
															da = ia;
															break c
														}
														da = ia;
														ca = ca + fa | 0
													}
											while (0);
											ba = ba + 1 | 0;
											if ((ba | 0) == (e | 0)) {
												ha = da;
												break b
											}
											ha = ha + K | 0;
											ia = da
										}
									}
								while (0);
								R = R + 1 | 0;
								if ((R | 0) == (z | 0))
									break a;
								fa = ha
							}
						}
					while (0);
					M = n;
					return 1
				}
				function Sc(a, f, c, u, d, N, r, e) {
					var n, na = M;
					M += 24;
					var y = na;
					var E = y >> 2;
					var H = na + 4;
					var x = H >> 2;
					c = na + 8 >> 2;
					var h = a + 268 | 0
					, l = fc(h)
					, g = b[a + 88 >> 2]
					, k = pa(g + 63 | 0);
					b[E] = 0;
					b[x] = 0;
					g = Ka(g + 17 | 0);
					var Fa = 0 == (g | 0);
					a: do
						if (!Fa) {
							Fa = 0 == (e | 0);
							var p = e - 1 | 0;
							N = 0 == (N & 1 | 0);
							var m = u << 1
							, v = a + 92 | 0
							, w = a + 116 | 0;
							d = 0 == (d & 1 | 0);
							var z = a + 164 | 0
							, A = a + 212 | 0;
							a = a + 284 | 0;
							for (var B = r - 1 | 0, C = B << 4, G = 0, D = 1; ; ) {
								b: do
									if (Fa)
										var K = D;
									else {
										K = b[f + (G << 2) >> 2];
										for (var F = 0, J = D; ; ) {
											if (0 == (F & 1 | 0)) {
												var L = K;
												D = 16;
												var O = 1
												, P = r
												, W = 0
											} else
												L = K + C | 0,
												D = -16,
												P = O = -1,
												W = B;
											var Q = N | (F | 0) != (p | 0)
											, R = (W | 0) == (P | 0);
											c: do
												if (R)
													var fa = J;
												else
													for (fa = J; ; ) {
														J = 1 == (fa | 0) ? U(v, w) | 512 : fa;
														fa = J & 7;
														J >>>= 3;
														var ha = I[q.h + fa | 0] & 255;
														R = d | (W | 0) != (B | 0);
														var ba = 0;
														for (n = b[E]; ; ) {
															var ia = U(v, z);
															b[E] = n + ia | 0;
															ma(y, l);
															n = t[E];
															ia = Aa(h, n);
															b[(ba << 2 >> 2) + c] = Z[ia >> 1] & 65535;
															ba = ba + 1 | 0;
															if (ba >>> 0 >= ha >>> 0) {
																ha = L;
																n = ha >> 2;
																ba = 0;
																break
															}
														}
														for (; ; ) {
															ia = ha;
															var ca = 0 == (ba | 0) | Q;
															var ja = ba << 1;
															var V = U(v, A);
															b[x] = b[x] + V | 0;
															ma(H, k);
															R ? ca ? (V = I[(fa << 2) + ta + ja | 0] & 255,
															ca = Aa(a, 3 * b[x] | 0) >> 1,
															b[ia >> 2] = (Z[ca] & 65535) << 16 | b[(V << 2 >> 2) + c],
															b[n + 1] = (Z[ca + 2] & 65535) << 16 | Z[ca + 1] & 65535,
															ia = ha + 8 | 0,
															ca = U(v, A),
															b[x] = b[x] + ca | 0,
															ma(H, k),
															ca = I[(fa << 2) + ta + (ja | 1) | 0] & 255,
															ja = Aa(a, 3 * b[x] | 0) >> 1,
															b[ia >> 2] = (Z[ja] & 65535) << 16 | b[(ca << 2 >> 2) + c],
															b[n + 3] = (Z[ja + 2] & 65535) << 16 | Z[ja + 1] & 65535) : (n = U(v, A),
															b[x] = b[x] + n | 0,
															ma(H, k)) : (ca ? (ca = I[(fa << 2) + ta + ja | 0] & 255,
															ja = Aa(a, 3 * b[x] | 0) >> 1,
															b[ia >> 2] = (Z[ja] & 65535) << 16 | b[(ca << 2 >> 2) + c],
															b[n + 1] = (Z[ja + 2] & 65535) << 16 | Z[ja + 1] & 65535,
															n = U(v, A),
															b[x] = b[x] + n | 0) : (n = U(v, A),
															b[x] = b[x] + n | 0),
															ma(H, k));
															ba = ba + 1 | 0;
															if (2 == (ba | 0))
																break;
															ha = ha + u | 0;
															n = ha >> 2
														}
														W = W + O | 0;
														if ((W | 0) == (P | 0)) {
															fa = J;
															break c
														}
														fa = J;
														L = L + D | 0
													}
											while (0);
											F = F + 1 | 0;
											if ((F | 0) == (e | 0)) {
												K = fa;
												break b
											}
											K = K + m | 0;
											J = fa
										}
									}
								while (0);
								G = G + 1 | 0;
								if ((G | 0) == (g | 0))
									break a;
								D = K
							}
						}
					while (0);
					M = na;
					return 1
				}
				function Tc(a, f, c, u, d, e, r, h) {
					var n = M;
					M += 48;
					var N = n;
					var y = N >> 2;
					var E = n + 4;
					var na = E >> 2;
					var x = n + 8;
					var l = x >> 2;
					var g = n + 12;
					var k = g >> 2;
					var Fa = n + 16 >> 2;
					c = n + 32 >> 2;
					var p = a + 268 | 0
					, m = fc(p)
					, v = b[a + 88 >> 2]
					, w = pa(v + 63 | 0);
					b[y] = 0;
					b[na] = 0;
					b[l] = 0;
					b[k] = 0;
					v = Ka(v + 17 | 0);
					var A = 0 == (v | 0);
					a: do
						if (!A) {
							A = 0 == (h | 0);
							var z = h - 1 | 0;
							e = 0 == (e & 1 | 0);
							var B = u << 1
							, K = a + 92 | 0
							, G = a + 116 | 0
							, D = a + 212 | 0
							, C = a + 284 | 0;
							a = a + 164 | 0;
							var F = r - 1 | 0
							, J = F << 5;
							d = 0 != (d & 1 | 0);
							for (var L = 0, O = 1; ; ) {
								b: do
									if (A)
										var P = O;
									else {
										P = b[f + (L << 2) >> 2];
										for (var Q = 0, W = O; ; ) {
											if (0 == (Q & 1 | 0)) {
												var R = P;
												O = 32;
												var Y = 1
												, fa = r
												, ha = 0
											} else
												R = P + J | 0,
												O = -32,
												fa = Y = -1,
												ha = F;
											var ba = e | (Q | 0) != (z | 0);
											var ia = (ha | 0) == (fa | 0);
											c: do
												if (ia)
													var ca = W;
												else
													for (ca = W; ; ) {
														W = 1 == (ca | 0) ? U(K, G) | 512 : ca;
														ca = W & 7;
														W >>>= 3;
														ia = I[q.h + ca | 0] & 255;
														for (var ja = 0, V = b[y]; ; ) {
															var S = U(K, a);
															b[y] = V + S | 0;
															ma(N, m);
															V = t[y];
															S = Aa(p, V);
															b[(ja << 2 >> 2) + Fa] = Z[S >> 1] & 65535;
															ja = ja + 1 | 0;
															if (ja >>> 0 >= ia >>> 0)
																break
														}
														ja = 0;
														for (V = b[l]; !(S = U(K, a),
														b[l] = V + S | 0,
														ma(x, m),
														V = t[l],
														S = Aa(p, V),
														b[(ja << 2 >> 2) + c] = Z[S >> 1] & 65535,
														ja = ja + 1 | 0,
														ja >>> 0 >= ia >>> 0); )
															;
														ja = (ha | 0) == (F | 0) & d;
														V = R;
														ia = V >> 2;
														for (S = 0; ; ) {
															var X = 0 == (S | 0) | ba;
															var ea = S << 1;
															var da = U(K, D);
															b[na] = b[na] + da | 0;
															ma(E, w);
															da = U(K, D);
															b[k] = b[k] + da | 0;
															ma(g, w);
															if (X) {
																var aa = V
																, oa = I[(ca << 2) + ta + ea | 0] & 255;
																var ua = Aa(C, 3 * b[na] | 0) >> 1;
																da = Aa(C, 3 * b[k] | 0) >> 1;
																b[aa >> 2] = (Z[ua] & 65535) << 16 | b[(oa << 2 >> 2) + Fa];
																b[ia + 1] = (Z[ua + 2] & 65535) << 16 | Z[ua + 1] & 65535;
																b[ia + 2] = (Z[da] & 65535) << 16 | b[(oa << 2 >> 2) + c];
																b[ia + 3] = (Z[da + 2] & 65535) << 16 | Z[da + 1] & 65535
															}
															da = U(K, D);
															b[na] = b[na] + da | 0;
															ma(E, w);
															da = U(K, D);
															b[k] = b[k] + da | 0;
															ma(g, w);
															ja | X ^ 1 || (X = V + 16 | 0,
															ua = I[(ca << 2) + ta + (ea | 1) | 0] & 255,
															da = Aa(C, 3 * b[na] | 0) >> 1,
															ea = Aa(C, 3 * b[k] | 0) >> 1,
															b[X >> 2] = (Z[da] & 65535) << 16 | b[(ua << 2 >> 2) + Fa],
															b[ia + 5] = (Z[da + 2] & 65535) << 16 | Z[da + 1] & 65535,
															b[ia + 6] = (Z[ea] & 65535) << 16 | b[(ua << 2 >> 2) + c],
															b[ia + 7] = (Z[ea + 2] & 65535) << 16 | Z[ea + 1] & 65535);
															S = S + 1 | 0;
															if (2 == (S | 0))
																break;
															V = V + u | 0;
															ia = V >> 2
														}
														ha = ha + Y | 0;
														if ((ha | 0) == (fa | 0)) {
															ca = W;
															break c
														}
														ca = W;
														R = R + O | 0
													}
											while (0);
											Q = Q + 1 | 0;
											if ((Q | 0) == (h | 0)) {
												P = ca;
												break b
											}
											P = P + B | 0;
											W = ca
										}
									}
								while (0);
								L = L + 1 | 0;
								if ((L | 0) == (v | 0))
									break a;
								O = P
							}
						}
					while (0);
					M = n;
					return 1
				}
				function Aa(a, f) {
					t[a + 4 >> 2] >>> 0 <= f >>> 0 && P(q.l | 0, q.a | 0, 968);
					return (f << 1) + b[a >> 2] | 0
				}
				function za(a, f) {
					t[a + 4 >> 2] >>> 0 <= f >>> 0 && P(q.l | 0, q.a | 0, 968);
					return (f << 2) + b[a >> 2] | 0
				}
				function re(a) {
					var f = a + 92 | 0
					, c = b[a + 4 >> 2];
					var u = (a + 88 | 0) >> 2;
					var d = b[u];
					c = hb(f, c + Na(d + 67 | 0) | 0, pa(d + 65 | 0));
					do
						if (c)
							if (wa(f, a + 116 | 0)) {
								d = b[u];
								if (0 == (pa(d + 39 | 0) | 0)) {
									if (0 == (pa(d + 55 | 0) | 0)) {
										d = 0;
										break
									}
								} else {
									if (!wa(f, a + 140 | 0)) {
										d = 0;
										break
									}
									if (!wa(f, a + 188 | 0)) {
										d = 0;
										break
									}
									d = b[u]
								}
								if (0 != (pa(d + 55 | 0) | 0)) {
									if (!wa(f, a + 164 | 0)) {
										d = 0;
										break
									}
									if (!wa(f, a + 212 | 0)) {
										d = 0;
										break
									}
								}
								d = 1
							} else
								d = 0;
						else
							d = 0;
					while (0);
					return d
				}
				function le(a) {
					var b = 1 < a >>> 0;
					a: do
						if (b)
							for (b = 0; ; ) {
								b = b + 1 | 0;
								if (3 >= a >>> 0) {
									var c = b;
									break a
								}
								a >>>= 1
							}
						else
							c = 0;
					while (0);
					return c
				}
				function se(a) {
					var f = a + 88 | 0
					, c = b[f >> 2];
					if (0 == (pa(c + 39 | 0) | 0)) {
						d = c;
						var u = 5
					} else if (Zc(a))
						if ($c(a)) {
							var d = b[f >> 2];
							u = 5
						} else
							e = 0,
							u = 9;
					else {
						var e = 0;
						u = 9
					}
					do
						if (5 == u) {
							if (0 != (pa(d + 55 | 0) | 0)) {
								if (!ad(a)) {
									e = 0;
									break
								}
								if (!bd(a)) {
									e = 0;
									break
								}
							}
							e = 1
						}
					while (0);
					return e
				}
				function cd(a) {
					Xa(a, 0, 64, 1)
				}
				function dd(a, f) {
					var c = (a + 4 | 0) >> 2;
					var u = t[c]
					, d = (u | 0) == (f | 0);
					do
						if (d)
							var e = 1;
						else {
							if (u >>> 0 <= f >>> 0) {
								if (t[a + 8 >> 2] >>> 0 < f >>> 0) {
									if (!Te(a, f, (u + 1 | 0) == (f | 0))) {
										e = 0;
										break
									}
									e = b[c]
								} else
									e = u;
								Ue((e << 1) + b[a >> 2] | 0, f - e | 0)
							}
							b[c] = f;
							e = 1
						}
					while (0);
					return e
				}
				function Te(a, b, c) {
					la(a, b, c, 2, 0) ? a = 1 : (D[a + 12 | 0] = 1,
					a = 0);
					return a
				}
				function Ue(a, b) {
					Xa(a, 0, b << 1, 1)
				}
				function ed(a, f) {
					var c = (a + 4 | 0) >> 2;
					var u = t[c]
					, d = (u | 0) == (f | 0);
					do
						if (d)
							var e = 1;
						else {
							if (u >>> 0 <= f >>> 0) {
								if (t[a + 8 >> 2] >>> 0 < f >>> 0) {
									if (!Ve(a, f, (u + 1 | 0) == (f | 0))) {
										e = 0;
										break
									}
									e = b[c]
								} else
									e = u;
								We((e << 2) + b[a >> 2] | 0, f - e | 0)
							}
							b[c] = f;
							e = 1
						}
					while (0);
					return e
				}
				function Ve(a, b, c) {
					la(a, b, c, 4, 0) ? a = 1 : (D[a + 12 | 0] = 1,
					a = 0);
					return a
				}
				function We(a, b) {
					Xa(a, 0, b << 2, 1)
				}
				function ee(a) {
					var f = a + 168 | 0
					, c = b[f >> 2];
					0 != (c | 0) && (Va(c),
					b[f >> 2] = 0,
					b[a + 164 >> 2] = 0);
					f = a + 176 | 0;
					c = b[f >> 2];
					0 != (c | 0) && (ab(c),
					b[f >> 2] = 0,
					b[a + 172 >> 2] = 0)
				}
				function Zc(a) {
					var f = M;
					M += 48;
					var c = f
					, u = a + 88 | 0
					, d = pa(b[u >> 2] + 39 | 0)
					, e = a + 236 | 0;
					if (ed(e, d)) {
						var r = a + 92 | 0;
						u = b[u >> 2];
						if (hb(r, b[a + 4 >> 2] + Na(u + 33 | 0) | 0, Na(u + 36 | 0))) {
							a = c | 0;
							Ha(a);
							u = c + 24 | 0;
							Ha(u);
							for (var h = 0; ; ) {
								if (2 <= h >>> 0) {
									var l = 9;
									break
								}
								if (!wa(r, c + 24 * h | 0)) {
									var g = 0;
									l = 11;
									break
								}
								h = h + 1 | 0
							}
							a: do
								if (9 == l)
									if (c = za(e, 0),
									0 == (d | 0))
										g = 1;
									else {
										var y = g = e = 0
										, E = 0
										, H = 0
										, x = 0;
										for (h = 0; ; ) {
											x = U(r, a) + x & 31;
											H = U(r, u) + H & 63;
											E = U(r, a) + E & 31;
											var k = U(r, a) + y | 0;
											y = k & 31;
											g = U(r, u) + g & 63;
											e = U(r, a) + e & 31;
											b[c >> 2] = H << 5 | x << 11 | E | k << 27 | g << 21 | e << 16;
											h = h + 1 | 0;
											if ((h | 0) == (d | 0)) {
												g = 1;
												break a
											}
											c = c + 4 | 0
										}
									}
							while (0);
							ya(u);
							ya(a);
							d = g
						} else
							d = 0
					} else
						d = 0;
					M = f;
					return d
				}
				function $c(a) {
					var f = M;
					M += 480;
					var c = f
					, u = f + 24
					, d = f + 220
					, e = f + 416
					, r = b[a + 88 >> 2]
					, h = pa(r + 47 | 0)
					, l = a + 92 | 0;
					if (hb(l, b[a + 4 >> 2] + Na(r + 41 | 0) | 0, Na(r + 44 | 0))) {
						Ha(c);
						r = wa(l, c);
						a: do
							if (r) {
								for (var g = -3, y = -3, E = 0; ; ) {
									b[u + (E << 2) >> 2] = g;
									b[d + (E << 2) >> 2] = y;
									g = g + 1 | 0;
									var H = 3 < (g | 0);
									y = (H & 1) + y | 0;
									E = E + 1 | 0;
									if (49 == (E | 0))
										break;
									g = H ? -3 : g
								}
								cd(e);
								y = a + 252 | 0;
								if (ed(y, h)) {
									var x = za(y, 0);
									if (0 == (h | 0))
										y = 1;
									else {
										a = e | 0;
										r = e + 4 | 0;
										y = e + 8 | 0;
										E = e + 12 | 0;
										g = e + 16 | 0;
										H = e + 20 | 0;
										for (var k = e + 24 | 0, t = e + 28 | 0, p = e + 32 | 0, m = e + 36 | 0, v = e + 40 | 0, w = e + 44 | 0, A = e + 48 | 0, z = e + 52 | 0, B = e + 56 | 0, K = e + 60 | 0, D = 0; ; ) {
											for (var C = 0; ; ) {
												var G = U(l, c)
												, F = C << 1
												, J = (F << 2) + e | 0;
												b[J >> 2] = b[J >> 2] + b[u + (G << 2) >> 2] & 3;
												F = ((F | 1) << 2) + e | 0;
												b[F >> 2] = b[F >> 2] + b[d + (G << 2) >> 2] & 3;
												C = C + 1 | 0;
												if (8 == (C | 0))
													break
											}
											b[x >> 2] = (I[q.c + b[r >> 2] | 0] & 255) << 2 | I[q.c + b[a >> 2] | 0] & 255 | (I[q.c + b[y >> 2] | 0] & 255) << 4 | (I[q.c + b[E >> 2] | 0] & 255) << 6 | (I[q.c + b[g >> 2] | 0] & 255) << 8 | (I[q.c + b[H >> 2] | 0] & 255) << 10 | (I[q.c + b[k >> 2] | 0] & 255) << 12 | (I[q.c + b[t >> 2] | 0] & 255) << 14 | (I[q.c + b[p >> 2] | 0] & 255) << 16 | (I[q.c + b[m >> 2] | 0] & 255) << 18 | (I[q.c + b[v >> 2] | 0] & 255) << 20 | (I[q.c + b[w >> 2] | 0] & 255) << 22 | (I[q.c + b[A >> 2] | 0] & 255) << 24 | (I[q.c + b[z >> 2] | 0] & 255) << 26 | (I[q.c + b[B >> 2] | 0] & 255) << 28 | (I[q.c + b[K >> 2] | 0] & 255) << 30;
											D = D + 1 | 0;
											if ((D | 0) == (h | 0)) {
												y = 1;
												break a
											}
											x = x + 4 | 0
										}
									}
								} else
									y = 0
							} else
								y = 0;
						while (0);
						ya(c);
						c = y
					} else
						c = 0;
					M = f;
					return c
				}
				function ad(a) {
					var f = M;
					M += 24;
					var c = f
					, u = b[a + 88 >> 2]
					, d = pa(u + 55 | 0)
					, e = a + 92 | 0;
					if (hb(e, b[a + 4 >> 2] + Na(u + 49 | 0) | 0, Na(u + 52 | 0))) {
						Ha(c);
						u = wa(e, c);
						a: do
							if (u) {
								var r = a + 268 | 0;
								if (dd(r, d))
									if (r = Aa(r, 0),
									0 == (d | 0))
										r = 1;
									else {
										a = r;
										for (var h = r = u = 0; ; ) {
											var l = U(e, c)
											, g = U(e, c);
											u = l + u & 255;
											r = g + r & 255;
											Da[a >> 1] = (r << 8 | u) & 65535;
											h = h + 1 | 0;
											if ((h | 0) == (d | 0)) {
												r = 1;
												break a
											}
											a = a + 2 | 0
										}
									}
								else
									r = 0
							} else
								r = 0;
						while (0);
						ya(c);
						c = r
					} else
						c = 0;
					M = f;
					return c
				}
				function bd(a) {
					var f = M;
					M += 1888;
					var c = f
					, u = f + 24
					, d = f + 924
					, e = f + 1824
					, r = b[a + 88 >> 2]
					, h = pa(r + 63 | 0)
					, l = a + 92 | 0;
					if (hb(l, b[a + 4 >> 2] + Na(r + 57 | 0) | 0, Na(r + 60 | 0))) {
						Ha(c);
						r = wa(l, c);
						a: do
							if (r) {
								for (var g = -7, y = -7, E = 0; ; ) {
									b[u + (E << 2) >> 2] = g;
									b[d + (E << 2) >> 2] = y;
									g = g + 1 | 0;
									var H = 7 < (g | 0);
									y = (H & 1) + y | 0;
									E = E + 1 | 0;
									if (225 == (E | 0))
										break;
									g = H ? -7 : g
								}
								cd(e);
								y = a + 284 | 0;
								if (dd(y, 3 * h | 0)) {
									var x = Aa(y, 0);
									if (0 == (h | 0))
										y = 1;
									else {
										a = e | 0;
										r = e + 4 | 0;
										y = e + 8 | 0;
										E = e + 12 | 0;
										g = e + 16 | 0;
										H = e + 20 | 0;
										var k = e + 24 | 0
										, t = e + 28 | 0
										, p = e + 32 | 0
										, m = e + 36 | 0
										, v = e + 40 | 0
										, w = e + 44 | 0
										, A = e + 48 | 0
										, z = e + 52 | 0
										, B = e + 56 | 0
										, K = e + 60 | 0
										, C = x;
										x = C >> 1;
										for (var D = 0; ; ) {
											for (var F = 0; ; ) {
												var G = U(l, c)
												, J = F << 1
												, L = (J << 2) + e | 0;
												b[L >> 2] = b[L >> 2] + b[u + (G << 2) >> 2] & 7;
												J = ((J | 1) << 2) + e | 0;
												b[J >> 2] = b[J >> 2] + b[d + (G << 2) >> 2] & 7;
												F = F + 1 | 0;
												if (8 == (F | 0))
													break
											}
											Da[x] = (I[q.b + b[r >> 2] | 0] & 255) << 3 | I[q.b + b[a >> 2] | 0] & 255 | (I[q.b + b[y >> 2] | 0] & 255) << 6 | (I[q.b + b[E >> 2] | 0] & 255) << 9 | (I[q.b + b[g >> 2] | 0] & 255) << 12 | (I[q.b + b[H >> 2] | 0] & 255) << 15;
											Da[x + 1] = (I[q.b + b[k >> 2] | 0] & 255) << 2 | (I[q.b + b[H >> 2] | 0] & 255) >>> 1 | (I[q.b + b[t >> 2] | 0] & 255) << 5 | (I[q.b + b[p >> 2] | 0] & 255) << 8 | (I[q.b + b[m >> 2] | 0] & 255) << 11 | (I[q.b + b[v >> 2] | 0] & 255) << 14;
											Da[x + 2] = (I[q.b + b[w >> 2] | 0] & 255) << 1 | (I[q.b + b[v >> 2] | 0] & 255) >>> 2 | (I[q.b + b[A >> 2] | 0] & 255) << 4 | (I[q.b + b[z >> 2] | 0] & 255) << 7 | (I[q.b + b[B >> 2] | 0] & 255) << 10 | (I[q.b + b[K >> 2] | 0] & 255) << 13;
											D = D + 1 | 0;
											if ((D | 0) == (h | 0)) {
												y = 1;
												break a
											}
											C = C + 6 | 0;
											x = C >> 1
										}
									}
								} else
									y = 0
							} else
								y = 0;
						while (0);
						ya(c);
						c = y
					} else
						c = 0;
					M = f;
					return c
				}
				function db(a) {
					var f = 245 > a >>> 0;
					do {
						if (f) {
							var c = 11 > a >>> 0 ? 16 : a + 11 & -8
							, u = c >>> 3
							, d = t[l >> 2]
							, e = d >>> (u >>> 0);
							if (0 != (e & 3 | 0)) {
								a = (e & 1 ^ 1) + u | 0;
								c = a << 1;
								f = (c << 2) + l + 40 | 0;
								u = (c + 2 << 2) + l + 40 | 0;
								var r = t[u >> 2];
								c = r + 8 | 0;
								e = t[c >> 2];
								if ((f | 0) == (e | 0))
									b[l >> 2] = d & (1 << a ^ -1);
								else {
									if (e >>> 0 < t[l + 16 >> 2] >>> 0)
										throw K(),
										"Reached an unreachable!";
									b[u >> 2] = e;
									b[e + 12 >> 2] = f
								}
								d = a << 3;
								b[r + 4 >> 2] = d | 3;
								d = r + (d | 4) | 0;
								b[d >> 2] |= 1;
								r = c;
								var h = 38;
								break
							}
							if (c >>> 0 <= t[l + 8 >> 2] >>> 0) {
								var g = c;
								h = 30;
								break
							}
							if (0 != (e | 0)) {
								a = 2 << u;
								a = e << u & (a | -a);
								f = (a & -a) - 1 | 0;
								a = f >>> 12 & 16;
								r = f >>> (a >>> 0);
								f = r >>> 5 & 8;
								u = r >>> (f >>> 0);
								r = u >>> 2 & 4;
								e = u >>> (r >>> 0);
								u = e >>> 1 & 2;
								e >>>= u >>> 0;
								var k = e >>> 1 & 1;
								r = (f | a | r | u | k) + (e >>> (k >>> 0)) | 0;
								a = r << 1;
								u = (a << 2) + l + 40 | 0;
								e = (a + 2 << 2) + l + 40 | 0;
								f = t[e >> 2];
								a = f + 8 | 0;
								k = t[a >> 2];
								if ((u | 0) == (k | 0))
									b[l >> 2] = d & (1 << r ^ -1);
								else {
									if (k >>> 0 < t[l + 16 >> 2] >>> 0)
										throw K(),
										"Reached an unreachable!";
									b[e >> 2] = k;
									b[k + 12 >> 2] = u
								}
								r <<= 3;
								d = r - c | 0;
								b[f + 4 >> 2] = c | 3;
								u = f;
								f = u + c | 0;
								b[u + (c | 4) >> 2] = d | 1;
								b[u + r >> 2] = d;
								k = t[l + 8 >> 2];
								if (0 != (k | 0)) {
									c = b[l + 20 >> 2];
									u = k >>> 2 & 1073741822;
									r = (u << 2) + l + 40 | 0;
									e = t[l >> 2];
									k = 1 << (k >>> 3);
									if (0 == (e & k | 0))
										b[l >> 2] = e | k,
										e = r,
										u = (u + 2 << 2) + l + 40 | 0;
									else if (u = (u + 2 << 2) + l + 40 | 0,
									e = t[u >> 2],
									!(e >>> 0 >= t[l + 16 >> 2] >>> 0))
										throw K(),
										"Reached an unreachable!";
									b[u >> 2] = c;
									b[e + 12 >> 2] = c;
									b[(c + 8 | 0) >> 2] = e;
									b[(c + 12 | 0) >> 2] = r
								}
								b[l + 8 >> 2] = d;
								b[l + 20 >> 2] = f;
								r = a;
								h = 38;
								break
							}
							if (0 == (b[l + 4 >> 2] | 0)) {
								g = c;
								h = 30;
								break
							}
							d = fd(c);
							if (0 == (d | 0)) {
								g = c;
								h = 30;
								break
							}
							r = d
						} else {
							if (4294967231 < a >>> 0) {
								g = -1;
								h = 30;
								break
							}
							d = a + 11 & -8;
							if (0 == (b[l + 4 >> 2] | 0)) {
								g = d;
								h = 30;
								break
							}
							c = gd(d);
							if (0 == (c | 0)) {
								g = d;
								h = 30;
								break
							}
							r = c
						}
						h = 38
					} while (0);
					30 == h && (c = t[l + 8 >> 2],
					g >>> 0 > c >>> 0 ? (d = t[l + 12 >> 2],
					g >>> 0 < d >>> 0 ? (d = d - g | 0,
					b[l + 12 >> 2] = d,
					c = t[l + 24 >> 2],
					b[l + 24 >> 2] = c + g | 0,
					b[g + (c + 4) >> 2] = d | 1,
					b[c + 4 >> 2] = g | 3,
					r = c + 8 | 0) : r = hd(g)) : (a = c - g | 0,
					d = t[l + 20 >> 2],
					15 < a >>> 0 ? (b[l + 20 >> 2] = d + g | 0,
					b[l + 8 >> 2] = a,
					b[g + (d + 4) >> 2] = a | 1,
					b[d + c >> 2] = a,
					b[d + 4 >> 2] = g | 3) : (b[l + 8 >> 2] = 0,
					b[l + 20 >> 2] = 0,
					b[d + 4 >> 2] = c | 3,
					g = c + (d + 4) | 0,
					b[g >> 2] |= 1),
					r = d + 8 | 0));
					return r
				}
				function fd(a) {
					var f = b[l + 4 >> 2]
					, c = (f & -f) - 1 | 0;
					f = c >>> 12 & 16;
					var d = c >>> (f >>> 0);
					c = d >>> 5 & 8;
					var e = d >>> (c >>> 0);
					d = e >>> 2 & 4;
					var h = e >>> (d >>> 0);
					e = h >>> 1 & 2;
					h >>>= e >>> 0;
					var r = h >>> 1 & 1;
					f = c = t[l + ((c | f | d | e | r) + (h >>> (r >>> 0)) << 2) + 304 >> 2];
					e = f >> 2;
					c = (b[c + 4 >> 2] & -8) - a | 0;
					a: for (; ; )
						for (d = f; ; ) {
							h = b[d + 16 >> 2];
							if (0 == (h | 0)) {
								if (d = b[d + 20 >> 2],
								0 == (d | 0))
									break a
							} else
								d = h;
							h = (b[d + 4 >> 2] & -8) - a | 0;
							if (h >>> 0 < c >>> 0) {
								f = d;
								e = f >> 2;
								c = h;
								continue a
							}
						}
					h = f;
					var g = t[l + 16 >> 2];
					if (!(h >>> 0 < g >>> 0 || (d = h + a | 0,
					h >>> 0 >= d >>> 0))) {
						r = t[e + 6];
						var k = t[e + 3]
						, p = (k | 0) == (f | 0);
						do {
							if (p) {
								var y = f + 20 | 0;
								var E = b[y >> 2];
								if (0 == (E | 0) && (y = f + 16 | 0,
								E = b[y >> 2],
								0 == (E | 0))) {
									E = 0;
									y = E >> 2;
									break
								}
								for (; ; ) {
									var H = E + 20 | 0
									, x = b[H >> 2];
									if (0 != (x | 0))
										y = H,
										E = x;
									else {
										H = E + 16 | 0;
										x = t[H >> 2];
										if (0 == (x | 0))
											break;
										y = H;
										E = x
									}
								}
								if (y >>> 0 < g >>> 0)
									throw K(),
									"Reached an unreachable!";
								b[y >> 2] = 0
							} else {
								y = t[e + 2];
								if (y >>> 0 < g >>> 0)
									throw K(),
									"Reached an unreachable!";
								b[y + 12 >> 2] = k;
								b[k + 8 >> 2] = y;
								E = k
							}
							y = E >> 2
						} while (0);
						g = 0 == (r | 0);
						a: do
							if (!g) {
								k = f + 28 | 0;
								p = (b[k >> 2] << 2) + l + 304 | 0;
								H = (f | 0) == (b[p >> 2] | 0);
								do {
									if (H) {
										b[p >> 2] = E;
										if (0 != (E | 0))
											break;
										b[l + 4 >> 2] &= 1 << b[k >> 2] ^ -1;
										break a
									}
									if (r >>> 0 < t[l + 16 >> 2] >>> 0)
										throw K(),
										"Reached an unreachable!";
									x = r + 16 | 0;
									(b[x >> 2] | 0) == (f | 0) ? b[x >> 2] = E : b[r + 20 >> 2] = E;
									if (0 == (E | 0))
										break a
								} while (0);
								if (E >>> 0 < t[l + 16 >> 2] >>> 0)
									throw K(),
									"Reached an unreachable!";
								b[y + 6] = r;
								k = t[e + 4];
								if (0 != (k | 0)) {
									if (k >>> 0 < t[l + 16 >> 2] >>> 0)
										throw K(),
										"Reached an unreachable!";
									b[y + 4] = k;
									b[k + 24 >> 2] = E
								}
								k = t[e + 5];
								if (0 != (k | 0)) {
									if (k >>> 0 < t[l + 16 >> 2] >>> 0)
										throw K(),
										"Reached an unreachable!";
									b[y + 5] = k;
									b[k + 24 >> 2] = E
								}
							}
						while (0);
						if (16 > c >>> 0)
							a = c + a | 0,
							b[e + 1] = a | 3,
							a = a + (h + 4) | 0,
							b[a >> 2] |= 1;
						else {
							b[e + 1] = a | 3;
							b[a + (h + 4) >> 2] = c | 1;
							b[h + c + a >> 2] = c;
							g = t[l + 8 >> 2];
							if (0 != (g | 0)) {
								a = t[l + 20 >> 2];
								h = g >>> 2 & 1073741822;
								e = (h << 2) + l + 40 | 0;
								r = t[l >> 2];
								g = 1 << (g >>> 3);
								if (0 == (r & g | 0))
									b[l >> 2] = r | g,
									r = e,
									h = (h + 2 << 2) + l + 40 | 0;
								else if (h = (h + 2 << 2) + l + 40 | 0,
								r = t[h >> 2],
								!(r >>> 0 >= t[l + 16 >> 2] >>> 0))
									throw K(),
									"Reached an unreachable!";
								b[h >> 2] = a;
								b[r + 12 >> 2] = a;
								b[a + 8 >> 2] = r;
								b[a + 12 >> 2] = e
							}
							b[l + 8 >> 2] = c;
							b[l + 20 >> 2] = d
						}
						return f + 8 | 0
					}
					K();
					throw "Reached an unreachable!";
				}
				function hd(a) {
					0 == (b[xa >> 2] | 0) && id();
					var f = 0 == (b[l + 440 >> 2] & 4 | 0);
					do
						if (f) {
							var c = b[l + 24 >> 2];
							if (0 == (c | 0))
								var d = 6;
							else if (c = gc(c),
							0 == (c | 0))
								d = 6;
							else {
								var e = b[xa + 8 >> 2];
								e = a + 47 - b[l + 12 >> 2] + e & -e;
								if (2147483647 <= e >>> 0)
									d = 14;
								else {
									var h = La(e);
									if ((h | 0) == (b[c >> 2] + b[c + 4 >> 2] | 0)) {
										var r = h
										, g = e;
										var k = h;
										d = 13
									} else {
										var p = h
										, y = e;
										d = 15
									}
								}
							}
							if (6 == d)
								if (c = La(0),
								-1 == (c | 0))
									d = 14;
								else {
									e = b[xa + 8 >> 2];
									e = e + (a + 47) & -e;
									h = c;
									var E = b[xa + 4 >> 2]
									, H = E - 1 | 0;
									e = 0 == (H & h | 0) ? e : e - h + (H + h & -E) | 0;
									2147483647 <= e >>> 0 ? d = 14 : (h = La(e),
									(h | 0) == (c | 0) ? (r = c,
									g = e,
									k = h,
									d = 13) : (p = h,
									y = e,
									d = 15))
								}
							if (13 == d) {
								if (-1 != (r | 0)) {
									var x = g
									, q = r;
									d = 26;
									break
								}
								p = k;
								y = g
							} else if (14 == d) {
								b[l + 440 >> 2] |= 4;
								d = 23;
								break
							}
							c = -y | 0;
							if (-1 != (p | 0) & 2147483647 > y >>> 0)
								if (y >>> 0 >= (a + 48 | 0) >>> 0) {
									var m = y;
									d = 21
								} else
									e = b[xa + 8 >> 2],
									e = a + 47 - y + e & -e,
									2147483647 <= e >>> 0 ? (m = y,
									d = 21) : -1 == (La(e) | 0) ? (La(c),
									d = 22) : (m = e + y | 0,
									d = 21);
							else
								m = y,
								d = 21;
							21 == d && -1 != (p | 0) ? (x = m,
							q = p,
							d = 26) : (b[l + 440 >> 2] |= 4,
							d = 23)
						} else
							d = 23;
					while (0);
					23 == d && (f = b[xa + 8 >> 2],
					f = f + (a + 47) & -f,
					2147483647 <= f >>> 0 ? d = 49 : (f = La(f),
					r = La(0),
					-1 != (r | 0) & -1 != (f | 0) & f >>> 0 < r >>> 0 ? (r = r - f | 0,
					r >>> 0 <= (a + 40 | 0) >>> 0 | -1 == (f | 0) ? d = 49 : (x = r,
					q = f,
					d = 26)) : d = 49));
					a: do
						if (26 == d) {
							f = b[l + 432 >> 2] + x | 0;
							b[l + 432 >> 2] = f;
							f >>> 0 > t[l + 436 >> 2] >>> 0 && (b[l + 436 >> 2] = f);
							f = t[l + 24 >> 2];
							r = 0 == (f | 0);
							b: do
								if (r)
									g = t[l + 16 >> 2],
									0 == (g | 0) | q >>> 0 < g >>> 0 && (b[l + 16 >> 2] = q),
									b[l + 444 >> 2] = q,
									b[l + 448 >> 2] = x,
									b[l + 456 >> 2] = 0,
									b[l + 36 >> 2] = b[xa >> 2],
									b[l + 32 >> 2] = -1,
									Xe(),
									Ab(q, x - 40 | 0);
								else {
									p = l + 444 | 0;
									for (k = p >> 2; 0 != (p | 0); ) {
										g = t[k];
										p = p + 4 | 0;
										y = t[p >> 2];
										m = g + y | 0;
										if ((q | 0) == (m | 0)) {
											if (0 != (b[k + 3] & 8 | 0))
												break;
											k = f;
											if (!(k >>> 0 >= g >>> 0 & k >>> 0 < m >>> 0))
												break;
											b[p >> 2] = y + x | 0;
											Ab(b[l + 24 >> 2], b[l + 12 >> 2] + x | 0);
											break b
										}
										p = b[k + 2];
										k = p >> 2
									}
									q >>> 0 < t[l + 16 >> 2] >>> 0 && (b[l + 16 >> 2] = q);
									k = q + x | 0;
									for (p = l + 444 | 0; 0 != (p | 0); ) {
										y = p | 0;
										g = t[y >> 2];
										if ((g | 0) == (k | 0)) {
											if (0 != (b[p + 12 >> 2] & 8 | 0))
												break;
											b[y >> 2] = q;
											var v = p + 4 | 0;
											b[v >> 2] = b[v >> 2] + x | 0;
											v = jd(q, g, a);
											d = 50;
											break a
										}
										p = b[p + 8 >> 2]
									}
									kd(q, x)
								}
							while (0);
							f = t[l + 12 >> 2];
							f >>> 0 <= a >>> 0 ? d = 49 : (v = f - a | 0,
							b[l + 12 >> 2] = v,
							r = f = t[l + 24 >> 2],
							b[l + 24 >> 2] = r + a | 0,
							b[a + (r + 4) >> 2] = v | 1,
							b[f + 4 >> 2] = a | 3,
							v = f + 8 | 0,
							d = 50)
						}
					while (0);
					49 == d && (a = ld(),
					b[a >> 2] = 12,
					v = 0);
					return v
				}
				function gd(a) {
					var f = a >> 2
					, c = -a | 0
					, d = a >>> 8;
					if (0 == (d | 0))
						var e = 0;
					else if (16777215 < a >>> 0)
						e = 31;
					else {
						var h = (d + 1048320 | 0) >>> 16 & 8
						, r = d << h
						, g = (r + 520192 | 0) >>> 16 & 4
						, k = r << g
						, p = (k + 245760 | 0) >>> 16 & 2
						, y = 14 - (g | h | p) + (k << p >>> 15) | 0;
						e = a >>> ((y + 7 | 0) >>> 0) & 1 | y << 1
					}
					var E = t[l + (e << 2) + 304 >> 2]
					, H = 0 == (E | 0);
					a: do
						if (H)
							var x = 0
							, q = c
							, v = 0;
						else {
							var m = 31 == (e | 0) ? 0 : 25 - (e >>> 1) | 0
							, w = 0
							, A = c
							, z = E;
							var B = z >> 2;
							for (var C = a << m, D = 0; ; ) {
								var F = b[B + 1] & -8
								, G = F - a | 0;
								if (G >>> 0 < A >>> 0) {
									if ((F | 0) == (a | 0)) {
										x = z;
										q = G;
										v = z;
										break a
									}
									var I = z
									, J = G
								} else
									I = w,
									J = A;
								var M = t[B + 5]
								, L = t[((C >>> 31 << 2) + 16 >> 2) + B]
								, O = 0 == (M | 0) | (M | 0) == (L | 0) ? D : M;
								if (0 == (L | 0)) {
									x = I;
									q = J;
									v = O;
									break a
								}
								w = I;
								A = J;
								z = L;
								B = z >> 2;
								C <<= 1;
								D = O
							}
						}
					while (0);
					if (0 == (v | 0) & 0 == (x | 0)) {
						var P = 2 << e
						, Q = b[l + 4 >> 2] & (P | -P);
						if (0 == (Q | 0))
							var R = v;
						else {
							var U = (Q & -Q) - 1 | 0
							, Y = U >>> 12 & 16
							, W = U >>> (Y >>> 0)
							, Z = W >>> 5 & 8
							, aa = W >>> (Z >>> 0)
							, fa = aa >>> 2 & 4
							, ha = aa >>> (fa >>> 0)
							, ba = ha >>> 1 & 2
							, ia = ha >>> (ba >>> 0)
							, ca = ia >>> 1 & 1;
							R = b[l + ((Z | Y | fa | ba | ca) + (ia >>> (ca >>> 0)) << 2) + 304 >> 2]
						}
					} else
						R = v;
					var ja = 0 == (R | 0);
					a: do
						if (ja) {
							var V = q
							, S = x;
							var X = S >> 2
						} else {
							var ea = R;
							var da = ea >> 2;
							for (var ka = q, oa = x; ; ) {
								var ua = (b[da + 1] & -8) - a | 0
								, ma = ua >>> 0 < ka >>> 0
								, pa = ma ? ua : ka
								, Ca = ma ? ea : oa
								, la = t[da + 4];
								if (0 != (la | 0))
									ea = la;
								else {
									var ra = t[da + 5];
									if (0 == (ra | 0)) {
										V = pa;
										S = Ca;
										X = S >> 2;
										break a
									}
									ea = ra
								}
								da = ea >> 2;
								ka = pa;
								oa = Ca
							}
						}
					while (0);
					var va = 0 == (S | 0);
					a: do
						if (va)
							var sa = 0;
						else if (V >>> 0 >= (b[l + 8 >> 2] - a | 0) >>> 0)
							sa = 0;
						else {
							var qa = S;
							var Ba = qa >> 2;
							var xa = t[l + 16 >> 2];
							if (!(qa >>> 0 < xa >>> 0)) {
								var ya = qa + a | 0
								, za = ya;
								if (!(qa >>> 0 >= ya >>> 0)) {
									var ta = t[X + 6]
									, Aa = t[X + 3]
									, Ja = (Aa | 0) == (S | 0);
									do {
										if (Ja) {
											var Ka = S + 20 | 0
											, Ha = b[Ka >> 2];
											if (0 == (Ha | 0)) {
												var Ia = S + 16 | 0
												, Oa = b[Ia >> 2];
												if (0 == (Oa | 0)) {
													var Ga = 0;
													var ub = Ga >> 2;
													break
												}
												var vb = Ia
												, wa = Oa
											} else
												vb = Ka,
												wa = Ha;
											for (; ; ) {
												var La = wa + 20 | 0
												, Ea = b[La >> 2];
												if (0 != (Ea | 0))
													vb = La,
													wa = Ea;
												else {
													var Ma = wa + 16 | 0
													, Na = t[Ma >> 2];
													if (0 == (Na | 0))
														break;
													vb = Ma;
													wa = Na
												}
											}
											if (vb >>> 0 < xa >>> 0)
												throw K(),
												"Reached an unreachable!";
											b[vb >> 2] = 0;
											Ga = wa
										} else {
											var Da = t[X + 2];
											if (Da >>> 0 < xa >>> 0)
												throw K(),
												"Reached an unreachable!";
											b[Da + 12 >> 2] = Aa;
											b[Aa + 8 >> 2] = Da;
											Ga = Aa
										}
										ub = Ga >> 2
									} while (0);
									var Qa = 0 == (ta | 0);
									b: do
										if (!Qa) {
											var Sa = S + 28 | 0
											, Ta = (b[Sa >> 2] << 2) + l + 304 | 0
											, Xa = (S | 0) == (b[Ta >> 2] | 0);
											do {
												if (Xa) {
													b[Ta >> 2] = Ga;
													if (0 != (Ga | 0))
														break;
													b[l + 4 >> 2] &= 1 << b[Sa >> 2] ^ -1;
													break b
												}
												if (ta >>> 0 < t[l + 16 >> 2] >>> 0)
													throw K(),
													"Reached an unreachable!";
												var Gb = ta + 16 | 0;
												(b[Gb >> 2] | 0) == (S | 0) ? b[Gb >> 2] = Ga : b[ta + 20 >> 2] = Ga;
												if (0 == (Ga | 0))
													break b
											} while (0);
											if (Ga >>> 0 < t[l + 16 >> 2] >>> 0)
												throw K(),
												"Reached an unreachable!";
											b[ub + 6] = ta;
											var Pa = t[X + 4];
											if (0 != (Pa | 0)) {
												if (Pa >>> 0 < t[l + 16 >> 2] >>> 0)
													throw K(),
													"Reached an unreachable!";
												b[ub + 4] = Pa;
												b[Pa + 24 >> 2] = Ga
											}
											var nb = t[X + 5];
											if (0 != (nb | 0)) {
												if (nb >>> 0 < t[l + 16 >> 2] >>> 0)
													throw K(),
													"Reached an unreachable!";
												b[ub + 5] = nb;
												b[nb + 24 >> 2] = Ga
											}
										}
									while (0);
									var ab = 16 > V >>> 0;
									b: do
										if (ab) {
											var Va = V + a | 0;
											b[X + 1] = Va | 3;
											var Ya = Va + (qa + 4) | 0;
											b[Ya >> 2] |= 1
										} else if (b[X + 1] = a | 3,
										b[f + (Ba + 1)] = V | 1,
										b[(V >> 2) + Ba + f] = V,
										256 > V >>> 0) {
											var rb = V >>> 2 & 1073741822
											, Hb = (rb << 2) + l + 40 | 0
											, Ib = t[l >> 2]
											, Jb = 1 << (V >>> 3);
											if (0 == (Ib & Jb | 0)) {
												b[l >> 2] = Ib | Jb;
												var ob = Hb
												, Kb = (rb + 2 << 2) + l + 40 | 0
											} else {
												var Za = (rb + 2 << 2) + l + 40 | 0
												, sb = t[Za >> 2];
												if (sb >>> 0 >= t[l + 16 >> 2] >>> 0)
													ob = sb,
													Kb = Za;
												else
													throw K(),
													"Reached an unreachable!";
											}
											b[Kb >> 2] = za;
											b[ob + 12 >> 2] = za;
											b[f + (Ba + 2)] = ob;
											b[f + (Ba + 3)] = Hb
										} else {
											var $a = ya
											, Lb = V >>> 8;
											if (0 == (Lb | 0))
												var Ra = 0;
											else if (16777215 < V >>> 0)
												Ra = 31;
											else {
												var Ua = (Lb + 1048320 | 0) >>> 16 & 8
												, cb = Lb << Ua
												, db = (cb + 520192 | 0) >>> 16 & 4
												, eb = cb << db
												, gb = (eb + 245760 | 0) >>> 16 & 2
												, hb = 14 - (db | Ua | gb) + (eb << gb >>> 15) | 0;
												Ra = V >>> ((hb + 7 | 0) >>> 0) & 1 | hb << 1
											}
											var Wa = (Ra << 2) + l + 304 | 0;
											b[f + (Ba + 7)] = Ra;
											var tb = a + (qa + 16) | 0;
											b[f + (Ba + 5)] = 0;
											b[tb >> 2] = 0;
											var bb = b[l + 4 >> 2]
											, Db = 1 << Ra;
											if (0 == (bb & Db | 0))
												b[l + 4 >> 2] = bb | Db,
												b[Wa >> 2] = $a,
												b[f + (Ba + 6)] = Wa,
												b[f + (Ba + 3)] = $a,
												b[f + (Ba + 2)] = $a;
											else
												for (var lb = V << (31 == (Ra | 0) ? 0 : 25 - (Ra >>> 1) | 0), qb = b[Wa >> 2]; ; ) {
													if ((b[qb + 4 >> 2] & -8 | 0) == (V | 0)) {
														var mb = qb + 8 | 0
														, Eb = t[mb >> 2]
														, pb = t[l + 16 >> 2];
														if (!(qb >>> 0 < pb >>> 0 || Eb >>> 0 < pb >>> 0)) {
															b[Eb + 12 >> 2] = $a;
															b[mb >> 2] = $a;
															b[f + (Ba + 2)] = Eb;
															b[f + (Ba + 3)] = qb;
															b[f + (Ba + 6)] = 0;
															break b
														}
														K();
														throw "Reached an unreachable!";
													}
													var fb = (lb >>> 31 << 2) + qb + 16 | 0
													, ib = t[fb >> 2];
													if (0 == (ib | 0)) {
														if (fb >>> 0 >= t[l + 16 >> 2] >>> 0) {
															b[fb >> 2] = $a;
															b[f + (Ba + 6)] = qb;
															b[f + (Ba + 3)] = $a;
															b[f + (Ba + 2)] = $a;
															break b
														}
														K();
														throw "Reached an unreachable!";
													}
													lb <<= 1;
													qb = ib
												}
										}
									while (0);
									sa = S + 8 | 0;
									break a
								}
							}
							K();
							throw "Reached an unreachable!";
						}
					while (0);
					return sa
				}
				function md(a) {
					0 == (b[xa >> 2] | 0) && id();
					var f = 4294967232 > a >>> 0;
					a: do {
						if (f) {
							var c = t[l + 24 >> 2];
							if (0 == (c | 0)) {
								c = 0;
								break
							}
							var d = t[l + 12 >> 2];
							if (d >>> 0 > (a + 40 | 0) >>> 0) {
								var e = t[xa + 8 >> 2]
								, h = (Math.floor(((-40 - a - 1 + d + e | 0) >>> 0) / (e >>> 0)) - 1) * e | 0
								, r = gc(c);
								if (0 == (b[r + 12 >> 2] & 8 | 0) && (d = La(0),
								c = (r + 4 | 0) >> 2,
								(d | 0) == (b[r >> 2] + b[c] | 0) && (h = La(-(2147483646 < h >>> 0 ? -2147483648 - e | 0 : h) | 0),
								e = La(0),
								-1 != (h | 0) & e >>> 0 < d >>> 0 && (h = d - e | 0,
								(d | 0) != (e | 0))))) {
									b[c] = b[c] - h | 0;
									b[l + 432 >> 2] = b[l + 432 >> 2] - h | 0;
									Ab(b[l + 24 >> 2], b[l + 12 >> 2] - h | 0);
									c = (d | 0) != (e | 0);
									break a
								}
							}
							if (t[l + 12 >> 2] >>> 0 <= t[l + 28 >> 2] >>> 0) {
								c = 0;
								break
							}
							b[l + 28 >> 2] = -1
						}
						c = 0
					} while (0);
					return c & 1
				}
				function eb(a) {
					var f = a >> 2
					, c = 0 == (a | 0);
					a: do
						if (!c) {
							var d = a - 8 | 0
							, e = d
							, h = t[l + 16 >> 2]
							, r = d >>> 0 < h >>> 0;
							b: do
								if (!r) {
									var g = t[a - 4 >> 2]
									, k = g & 3;
									if (1 != (k | 0)) {
										var p = g & -8;
										var y = p >> 2;
										var E = a + (p - 8) | 0
										, H = E
										, x = 0 == (g & 1 | 0);
										c: do
											if (x) {
												var q = t[d >> 2];
												if (0 == (k | 0))
													break a;
												var v = -8 - q | 0;
												var m = v >> 2;
												var w = a + v | 0
												, A = w
												, z = q + p | 0;
												if (w >>> 0 < h >>> 0)
													break b;
												if ((A | 0) == (b[l + 20 >> 2] | 0)) {
													var B = (a + (p - 4) | 0) >> 2;
													if (3 != (b[B] & 3 | 0)) {
														var C = A;
														var D = C >> 2;
														var F = z;
														break
													}
													b[l + 8 >> 2] = z;
													b[B] &= -2;
													b[m + (f + 1)] = z | 1;
													b[E >> 2] = z;
													break a
												}
												if (256 > q >>> 0) {
													var G = t[m + (f + 2)]
													, I = t[m + (f + 3)];
													if ((G | 0) == (I | 0))
														b[l >> 2] &= 1 << (q >>> 3) ^ -1,
														C = A,
														D = C >> 2,
														F = z;
													else {
														var J = ((q >>> 2 & 1073741822) << 2) + l + 40 | 0;
														if (!((G | 0) != (J | 0) & G >>> 0 < h >>> 0) && (I | 0) == (J | 0) | I >>> 0 >= h >>> 0) {
															b[G + 12 >> 2] = I;
															b[I + 8 >> 2] = G;
															C = A;
															D = C >> 2;
															F = z;
															break c
														}
														K();
														throw "Reached an unreachable!";
													}
												} else {
													var M = w
													, L = t[m + (f + 6)]
													, O = t[m + (f + 3)]
													, P = (O | 0) == (M | 0);
													do {
														if (P) {
															var Q = v + (a + 20) | 0
															, R = b[Q >> 2];
															if (0 == (R | 0)) {
																var U = v + (a + 16) | 0
																, Y = b[U >> 2];
																if (0 == (Y | 0)) {
																	var W = 0;
																	var Z = W >> 2;
																	break
																}
																var aa = U
																, fa = Y
															} else {
																aa = Q;
																fa = R;
																var ha = 21
															}
															for (; ; ) {
																var ba = fa + 20 | 0
																, ia = b[ba >> 2];
																if (0 != (ia | 0))
																	aa = ba,
																	fa = ia;
																else {
																	var ca = fa + 16 | 0
																	, ja = t[ca >> 2];
																	if (0 == (ja | 0))
																		break;
																	aa = ca;
																	fa = ja
																}
															}
															if (aa >>> 0 < h >>> 0)
																throw K(),
																"Reached an unreachable!";
															b[aa >> 2] = 0;
															W = fa
														} else {
															var V = t[m + (f + 2)];
															if (V >>> 0 < h >>> 0)
																throw K(),
																"Reached an unreachable!";
															b[V + 12 >> 2] = O;
															b[O + 8 >> 2] = V;
															W = O
														}
														Z = W >> 2
													} while (0);
													if (0 != (L | 0)) {
														var S = v + (a + 28) | 0
														, X = (b[S >> 2] << 2) + l + 304 | 0
														, ea = (M | 0) == (b[X >> 2] | 0);
														do {
															if (ea) {
																b[X >> 2] = W;
																if (0 != (W | 0))
																	break;
																b[l + 4 >> 2] &= 1 << b[S >> 2] ^ -1;
																C = A;
																D = C >> 2;
																F = z;
																break c
															}
															if (L >>> 0 < t[l + 16 >> 2] >>> 0)
																throw K(),
																"Reached an unreachable!";
															var da = L + 16 | 0;
															(b[da >> 2] | 0) == (M | 0) ? b[da >> 2] = W : b[L + 20 >> 2] = W;
															if (0 == (W | 0)) {
																C = A;
																D = C >> 2;
																F = z;
																break c
															}
														} while (0);
														if (W >>> 0 < t[l + 16 >> 2] >>> 0)
															throw K(),
															"Reached an unreachable!";
														b[Z + 6] = L;
														var ka = t[m + (f + 4)];
														if (0 != (ka | 0)) {
															if (ka >>> 0 < t[l + 16 >> 2] >>> 0)
																throw K(),
																"Reached an unreachable!";
															b[Z + 4] = ka;
															b[ka + 24 >> 2] = W
														}
														var oa = t[m + (f + 5)];
														if (0 != (oa | 0)) {
															if (oa >>> 0 < t[l + 16 >> 2] >>> 0)
																throw K(),
																"Reached an unreachable!";
															b[Z + 5] = oa;
															b[oa + 24 >> 2] = W
														}
													}
													C = A;
													D = C >> 2;
													F = z
												}
											} else
												C = e,
												D = C >> 2,
												F = p;
										while (0);
										var ma = C;
										if (!(ma >>> 0 >= E >>> 0)) {
											var pa = a + (p - 4) | 0
											, la = t[pa >> 2];
											if (0 != (la & 1 | 0)) {
												if (0 == (la & 2 | 0)) {
													if ((H | 0) == (b[l + 24 >> 2] | 0)) {
														var ra = b[l + 12 >> 2] + F | 0;
														b[l + 12 >> 2] = ra;
														b[l + 24 >> 2] = C;
														b[D + 1] = ra | 1;
														(C | 0) == (b[l + 20 >> 2] | 0) && (b[l + 20 >> 2] = 0,
														b[l + 8 >> 2] = 0);
														if (ra >>> 0 <= t[l + 28 >> 2] >>> 0)
															break a;
														md(0);
														break a
													}
													if ((H | 0) == (b[l + 20 >> 2] | 0)) {
														var qa = b[l + 8 >> 2] + F | 0;
														b[l + 8 >> 2] = qa;
														b[l + 20 >> 2] = C;
														b[D + 1] = qa | 1;
														b[(ma + qa | 0) >> 2] = qa;
														break a
													}
													var sa = (la & -8) + F | 0
													, va = la >>> 3
													, xa = 256 > la >>> 0;
													c: do
														if (xa) {
															var ta = t[f + y]
															, Ba = t[((p | 4) >> 2) + f];
															if ((ta | 0) == (Ba | 0))
																b[l >> 2] &= 1 << va ^ -1;
															else {
																var Aa = ((la >>> 2 & 1073741822) << 2) + l + 40 | 0;
																ha = (ta | 0) == (Aa | 0) ? 63 : ta >>> 0 < t[l + 16 >> 2] >>> 0 ? 66 : 63;
																if (63 == ha && !((Ba | 0) != (Aa | 0) && Ba >>> 0 < t[l + 16 >> 2] >>> 0)) {
																	b[ta + 12 >> 2] = Ba;
																	b[Ba + 8 >> 2] = ta;
																	break c
																}
																K();
																throw "Reached an unreachable!";
															}
														} else {
															var ya = E
															, wa = t[y + (f + 4)]
															, za = t[((p | 4) >> 2) + f]
															, Ka = (za | 0) == (ya | 0);
															do {
																if (Ka) {
																	var Ha = p + (a + 12) | 0
																	, Ia = b[Ha >> 2];
																	if (0 == (Ia | 0)) {
																		var Ja = p + (a + 8) | 0
																		, La = b[Ja >> 2];
																		if (0 == (La | 0)) {
																			var Oa = 0;
																			var Ga = Oa >> 2;
																			break
																		}
																		var Ea = Ja
																		, Da = La
																	} else
																		Ea = Ha,
																		Da = Ia,
																		ha = 73;
																	for (; ; ) {
																		var Ma = Da + 20 | 0
																		, Na = b[Ma >> 2];
																		if (0 != (Na | 0))
																			Ea = Ma,
																			Da = Na;
																		else {
																			var Sa = Da + 16 | 0
																			, Ta = t[Sa >> 2];
																			if (0 == (Ta | 0))
																				break;
																			Ea = Sa;
																			Da = Ta
																		}
																	}
																	if (Ea >>> 0 < t[l + 16 >> 2] >>> 0)
																		throw K(),
																		"Reached an unreachable!";
																	b[Ea >> 2] = 0;
																	Oa = Da
																} else {
																	var Qa = t[f + y];
																	if (Qa >>> 0 < t[l + 16 >> 2] >>> 0)
																		throw K(),
																		"Reached an unreachable!";
																	b[Qa + 12 >> 2] = za;
																	b[za + 8 >> 2] = Qa;
																	Oa = za
																}
																Ga = Oa >> 2
															} while (0);
															if (0 != (wa | 0)) {
																var Va = p + (a + 20) | 0
																, Xa = (b[Va >> 2] << 2) + l + 304 | 0
																, ab = (ya | 0) == (b[Xa >> 2] | 0);
																do {
																	if (ab) {
																		b[Xa >> 2] = Oa;
																		if (0 != (Oa | 0))
																			break;
																		b[l + 4 >> 2] &= 1 << b[Va >> 2] ^ -1;
																		break c
																	}
																	if (wa >>> 0 < t[l + 16 >> 2] >>> 0)
																		throw K(),
																		"Reached an unreachable!";
																	var Ya = wa + 16 | 0;
																	(b[Ya >> 2] | 0) == (ya | 0) ? b[Ya >> 2] = Oa : b[wa + 20 >> 2] = Oa;
																	if (0 == (Oa | 0))
																		break c
																} while (0);
																if (Oa >>> 0 < t[l + 16 >> 2] >>> 0)
																	throw K(),
																	"Reached an unreachable!";
																b[Ga + 6] = wa;
																var Ua = t[y + (f + 2)];
																if (0 != (Ua | 0)) {
																	if (Ua >>> 0 < t[l + 16 >> 2] >>> 0)
																		throw K(),
																		"Reached an unreachable!";
																	b[Ga + 4] = Ua;
																	b[Ua + 24 >> 2] = Oa
																}
																var Wa = t[y + (f + 3)];
																if (0 != (Wa | 0)) {
																	if (Wa >>> 0 < t[l + 16 >> 2] >>> 0)
																		throw K(),
																		"Reached an unreachable!";
																	b[Ga + 5] = Wa;
																	b[Wa + 24 >> 2] = Oa
																}
															}
														}
													while (0);
													b[D + 1] = sa | 1;
													b[ma + sa >> 2] = sa;
													if ((C | 0) != (b[l + 20 >> 2] | 0))
														var Pa = sa;
													else {
														b[l + 8 >> 2] = sa;
														break a
													}
												} else
													b[pa >> 2] = la & -2,
													b[D + 1] = F | 1,
													Pa = b[ma + F >> 2] = F;
												if (256 > Pa >>> 0) {
													var nb = Pa >>> 2 & 1073741822
													, cb = (nb << 2) + l + 40 | 0
													, db = t[l >> 2]
													, eb = 1 << (Pa >>> 3);
													if (0 == (db & eb | 0)) {
														b[l >> 2] = db | eb;
														var rb = cb
														, fb = (nb + 2 << 2) + l + 40 | 0
													} else {
														var gb = (nb + 2 << 2) + l + 40 | 0
														, hb = t[gb >> 2];
														if (hb >>> 0 >= t[l + 16 >> 2] >>> 0)
															rb = hb,
															fb = gb;
														else
															throw K(),
															"Reached an unreachable!";
													}
													b[fb >> 2] = C;
													b[rb + 12 >> 2] = C;
													b[D + 2] = rb;
													b[D + 3] = cb;
													break a
												}
												var ob = C
												, bb = Pa >>> 8;
												if (0 == (bb | 0))
													var Za = 0;
												else if (16777215 < Pa >>> 0)
													Za = 31;
												else {
													var sb = (bb + 1048320 | 0) >>> 16 & 8
													, $a = bb << sb
													, lb = ($a + 520192 | 0) >>> 16 & 4
													, Ra = $a << lb
													, mb = (Ra + 245760 | 0) >>> 16 & 2
													, pb = 14 - (lb | sb | mb) + (Ra << mb >>> 15) | 0;
													Za = Pa >>> ((pb + 7 | 0) >>> 0) & 1 | pb << 1
												}
												var ib = (Za << 2) + l + 304 | 0;
												b[D + 7] = Za;
												b[D + 5] = 0;
												b[D + 4] = 0;
												var wb = b[l + 4 >> 2]
												, xb = 1 << Za
												, Cb = 0 == (wb & xb | 0);
												c: do
													if (Cb)
														b[l + 4 >> 2] = wb | xb,
														b[ib >> 2] = ob,
														b[D + 6] = ib,
														b[D + 3] = C,
														b[D + 2] = C;
													else
														for (var yb = Pa << (31 == (Za | 0) ? 0 : 25 - (Za >>> 1) | 0), tb = b[ib >> 2]; ; ) {
															if ((b[tb + 4 >> 2] & -8 | 0) == (Pa | 0)) {
																var zb = tb + 8 | 0
																, Db = t[zb >> 2]
																, Ab = t[l + 16 >> 2];
																if (!(tb >>> 0 < Ab >>> 0 || Db >>> 0 < Ab >>> 0)) {
																	b[Db + 12 >> 2] = ob;
																	b[zb >> 2] = ob;
																	b[D + 2] = Db;
																	b[D + 3] = tb;
																	b[D + 6] = 0;
																	break c
																}
																K();
																throw "Reached an unreachable!";
															}
															var qb = (yb >>> 31 << 2) + tb + 16 | 0
															, Bb = t[qb >> 2];
															if (0 == (Bb | 0)) {
																if (qb >>> 0 >= t[l + 16 >> 2] >>> 0) {
																	b[qb >> 2] = ob;
																	b[D + 6] = tb;
																	b[D + 3] = C;
																	b[D + 2] = C;
																	break c
																}
																K();
																throw "Reached an unreachable!";
															}
															yb <<= 1;
															tb = Bb
														}
												while (0);
												var Eb = b[l + 32 >> 2] - 1 | 0;
												b[l + 32 >> 2] = Eb;
												if (0 != (Eb | 0))
													break a;
												Ye();
												break a
											}
										}
									}
								}
							while (0);
							K();
							throw "Reached an unreachable!";
						}
					while (0)
				}
				function Ye() {
					var a = b[l + 452 >> 2]
					, f = 0 == (a | 0);
					a: do
						if (!f)
							for (; ; )
								if (a = b[a + 8 >> 2],
								0 == (a | 0))
									break a;
					while (0);
					b[l + 32 >> 2] = -1
				}
				function Qd(a, b) {
					return 0 == (a | 0) ? db(b) : nd(a, b)
				}
				function nd(a, f) {
					var c;
					var d = 4294967231 < f >>> 0;
					a: do
						if (d) {
							var e = ld();
							b[e >> 2] = 12;
							e = 0
						} else {
							var h = c = a - 8 | 0;
							d = (a - 4 | 0) >> 2;
							var r = t[d];
							e = r & -8;
							var g = e - 8 | 0
							, k = a + g | 0;
							if (!(c >>> 0 < t[l + 16 >> 2] >>> 0)) {
								var p = r & 3;
								if (1 != (p | 0) & -8 < (g | 0) && (c = (a + (e - 4) | 0) >> 2,
								0 != (b[c] & 1 | 0))) {
									g = 11 > f >>> 0 ? 16 : f + 11 & -8;
									if (0 == (p | 0)) {
										var y = 0
										, E = Ze(h, g);
										var H = 17
									} else
										e >>> 0 < g >>> 0 ? (k | 0) != (b[l + 24 >> 2] | 0) ? H = 21 : (k = b[l + 12 >> 2] + e | 0,
										k >>> 0 <= g >>> 0 ? H = 21 : (y = k - g | 0,
										E = a + (g - 8) | 0,
										b[d] = g | r & 1 | 2,
										b[a + (g - 4) >> 2] = y | 1,
										b[l + 24 >> 2] = E,
										b[l + 12 >> 2] = y,
										y = 0,
										E = h,
										H = 17)) : (y = e - g | 0,
										15 >= y >>> 0 ? y = 0 : (b[d] = g | r & 1 | 2,
										b[a + (g - 4) >> 2] = y | 3,
										b[c] |= 1,
										y = a + g | 0),
										E = h,
										H = 17);
									if (17 == H && 0 != (E | 0)) {
										0 != (y | 0) && eb(y);
										e = E + 8 | 0;
										break a
									}
									h = db(f);
									if (0 == (h | 0)) {
										e = 0;
										break a
									}
									d = e - (0 == (b[d] & 3 | 0) ? 8 : 4) | 0;
									fb(h, a, d >>> 0 < f >>> 0 ? d : f, 1);
									eb(a);
									e = h;
									break a
								}
							}
							K();
							throw "Reached an unreachable!";
						}
					while (0);
					return e
				}
				function id() {
					if (0 == (b[xa >> 2] | 0)) {
						var a = $e(8);
						if (0 == (a - 1 & a | 0))
							b[xa + 8 >> 2] = a,
							b[xa + 4 >> 2] = a,
							b[xa + 12 >> 2] = -1,
							b[xa + 16 >> 2] = 2097152,
							b[xa + 20 >> 2] = 0,
							b[l + 440 >> 2] = 0,
							a = af(0),
							b[xa >> 2] = a & -16 ^ 1431655768;
						else
							throw K(),
							"Reached an unreachable!";
					}
				}
				function bc(a) {
					if (0 == (a | 0))
						a = 0;
					else {
						a = b[a - 4 >> 2];
						var f = a & 3;
						a = 1 == (f | 0) ? 0 : (a & -8) - (0 == (f | 0) ? 8 : 4) | 0
					}
					return a
				}
				function Ze(a, f) {
					var c = b[a + 4 >> 2] & -8;
					if (256 > f >>> 0)
						var d = 0;
					else
						c >>> 0 >= (f + 4 | 0) >>> 0 && (c - f | 0) >>> 0 <= b[xa + 8 >> 2] << 1 >>> 0 ? d = a : d = 0;
					return d
				}
				function gc(a) {
					var f, c = l + 444 | 0;
					for (f = c >> 2; ; ) {
						var d = t[f];
						if (d >>> 0 <= a >>> 0 && (d + b[f + 1] | 0) >>> 0 > a >>> 0) {
							a = c;
							break
						}
						f = t[f + 2];
						if (0 == (f | 0)) {
							a = 0;
							break
						}
						c = f;
						f = c >> 2
					}
					return a
				}
				function Ab(a, f) {
					var c = a + 8 | 0;
					c = 0 == (c & 7 | 0) ? 0 : -c & 7;
					var d = f - c | 0;
					b[l + 24 >> 2] = a + c | 0;
					b[l + 12 >> 2] = d;
					b[c + (a + 4) >> 2] = d | 1;
					b[f + (a + 4) >> 2] = 40;
					b[l + 28 >> 2] = b[xa + 16 >> 2]
				}
				function Xe() {
					for (var a = 0; ; ) {
						var f = a << 1
						, c = (f << 2) + l + 40 | 0;
						b[l + (f + 3 << 2) + 40 >> 2] = c;
						b[l + (f + 2 << 2) + 40 >> 2] = c;
						a = a + 1 | 0;
						if (32 == (a | 0))
							break
					}
				}
				function jd(a, f, c) {
					var d = f >> 2
					, e = a >> 2
					, n = a + 8 | 0;
					n = 0 == (n & 7 | 0) ? 0 : -n & 7;
					var h = f + 8 | 0;
					var g = 0 == (h & 7 | 0) ? 0 : -h & 7;
					var k = g >> 2;
					var p = f + g | 0
					, y = n + c | 0;
					h = y >> 2;
					var E = a + y | 0
					, H = p - (a + n) - c | 0;
					b[(n + 4 >> 2) + e] = c | 3;
					c = (p | 0) == (b[l + 24 >> 2] | 0);
					a: do
						if (c) {
							var x = b[l + 12 >> 2] + H | 0;
							b[l + 12 >> 2] = x;
							b[l + 24 >> 2] = E;
							b[h + (e + 1)] = x | 1
						} else if ((p | 0) == (b[l + 20 >> 2] | 0))
							x = b[l + 8 >> 2] + H | 0,
							b[l + 8 >> 2] = x,
							b[l + 20 >> 2] = E,
							b[h + (e + 1)] = x | 1,
							b[(a + x + y | 0) >> 2] = x;
						else {
							var q = t[k + (d + 1)];
							if (1 == (q & 3 | 0)) {
								x = q & -8;
								var v = q >>> 3
								, m = 256 > q >>> 0;
								b: do
									if (m) {
										var w = t[((g | 8) >> 2) + d]
										, z = t[k + (d + 3)];
										if ((w | 0) == (z | 0))
											b[l >> 2] &= 1 << v ^ -1;
										else {
											q = ((q >>> 2 & 1073741822) << 2) + l + 40 | 0;
											var A = (w | 0) == (q | 0) ? 15 : w >>> 0 < t[l + 16 >> 2] >>> 0 ? 18 : 15;
											if (15 == A && !((z | 0) != (q | 0) && z >>> 0 < t[l + 16 >> 2] >>> 0)) {
												b[w + 12 >> 2] = z;
												b[z + 8 >> 2] = w;
												break b
											}
											K();
											throw "Reached an unreachable!";
										}
									} else {
										w = p;
										z = t[((g | 24) >> 2) + d];
										var C = t[k + (d + 3)]
										, D = (C | 0) == (w | 0);
										do {
											if (D) {
												var B = g | 16;
												var F = B + (f + 4) | 0
												, G = b[F >> 2];
												if (0 == (G | 0)) {
													if (B = f + B | 0,
													G = b[B >> 2],
													0 == (G | 0)) {
														G = 0;
														B = G >> 2;
														break
													}
												} else
													B = F,
													A = 25;
												for (; ; ) {
													F = G + 20 | 0;
													var I = b[F >> 2];
													if (0 != (I | 0))
														B = F,
														G = I;
													else {
														F = G + 16 | 0;
														I = t[F >> 2];
														if (0 == (I | 0))
															break;
														B = F;
														G = I
													}
												}
												if (B >>> 0 < t[l + 16 >> 2] >>> 0)
													throw K(),
													"Reached an unreachable!";
												b[B >> 2] = 0
											} else {
												B = t[((g | 8) >> 2) + d];
												if (B >>> 0 < t[l + 16 >> 2] >>> 0)
													throw K(),
													"Reached an unreachable!";
												b[B + 12 >> 2] = C;
												b[C + 8 >> 2] = B;
												G = C
											}
											B = G >> 2
										} while (0);
										if (0 != (z | 0)) {
											C = g + (f + 28) | 0;
											D = (b[C >> 2] << 2) + l + 304 | 0;
											F = (w | 0) == (b[D >> 2] | 0);
											do {
												if (F) {
													b[D >> 2] = G;
													if (0 != (G | 0))
														break;
													b[l + 4 >> 2] &= 1 << b[C >> 2] ^ -1;
													break b
												}
												if (z >>> 0 < t[l + 16 >> 2] >>> 0)
													throw K(),
													"Reached an unreachable!";
												I = z + 16 | 0;
												(b[I >> 2] | 0) == (w | 0) ? b[I >> 2] = G : b[z + 20 >> 2] = G;
												if (0 == (G | 0))
													break b
											} while (0);
											if (G >>> 0 < t[l + 16 >> 2] >>> 0)
												throw K(),
												"Reached an unreachable!";
											b[B + 6] = z;
											w = g | 16;
											z = t[(w >> 2) + d];
											if (0 != (z | 0)) {
												if (z >>> 0 < t[l + 16 >> 2] >>> 0)
													throw K(),
													"Reached an unreachable!";
												b[B + 4] = z;
												b[z + 24 >> 2] = G
											}
											w = t[(w + 4 >> 2) + d];
											if (0 != (w | 0)) {
												if (w >>> 0 < t[l + 16 >> 2] >>> 0)
													throw K(),
													"Reached an unreachable!";
												b[B + 5] = w;
												b[w + 24 >> 2] = G
											}
										}
									}
								while (0);
								q = f + (x | g) | 0;
								x = x + H | 0
							} else
								q = p,
								x = H;
							q = q + 4 | 0;
							b[q >> 2] &= -2;
							b[h + (e + 1)] = x | 1;
							b[(x >> 2) + e + h] = x;
							if (256 > x >>> 0) {
								v = x >>> 2 & 1073741822;
								q = (v << 2) + l + 40 | 0;
								m = t[l >> 2];
								x = 1 << (x >>> 3);
								if (0 == (m & x | 0))
									b[l >> 2] = m | x,
									x = q,
									v = (v + 2 << 2) + l + 40 | 0;
								else if (v = (v + 2 << 2) + l + 40 | 0,
								x = t[v >> 2],
								!(x >>> 0 >= t[l + 16 >> 2] >>> 0))
									throw K(),
									"Reached an unreachable!";
								b[v >> 2] = E;
								b[x + 12 >> 2] = E;
								b[h + (e + 2)] = x;
								b[h + (e + 3)] = q
							} else if (q = E,
							m = x >>> 8,
							0 == (m | 0) ? m = 0 : 16777215 < x >>> 0 ? m = 31 : (v = (m + 1048320 | 0) >>> 16 & 8,
							w = m << v,
							m = (w + 520192 | 0) >>> 16 & 4,
							w <<= m,
							z = (w + 245760 | 0) >>> 16 & 2,
							v = 14 - (m | v | z) + (w << z >>> 15) | 0,
							m = x >>> ((v + 7 | 0) >>> 0) & 1 | v << 1),
							v = (m << 2) + l + 304 | 0,
							b[h + (e + 7)] = m,
							w = y + (a + 16) | 0,
							b[h + (e + 5)] = 0,
							b[w >> 2] = 0,
							w = b[l + 4 >> 2],
							z = 1 << m,
							0 == (w & z | 0))
								b[l + 4 >> 2] = w | z,
								b[v >> 2] = q,
								b[h + (e + 6)] = v,
								b[h + (e + 3)] = q,
								b[h + (e + 2)] = q;
							else
								for (d = x << (31 == (m | 0) ? 0 : 25 - (m >>> 1) | 0),
								f = b[v >> 2]; ; ) {
									if ((b[f + 4 >> 2] & -8 | 0) == (x | 0)) {
										d = f + 8 | 0;
										k = t[d >> 2];
										g = t[l + 16 >> 2];
										if (!(f >>> 0 < g >>> 0 || k >>> 0 < g >>> 0)) {
											b[k + 12 >> 2] = q;
											b[d >> 2] = q;
											b[h + (e + 2)] = k;
											b[h + (e + 3)] = f;
											b[h + (e + 6)] = 0;
											break a
										}
										K();
										throw "Reached an unreachable!";
									}
									k = (d >>> 31 << 2) + f + 16 | 0;
									g = t[k >> 2];
									if (0 == (g | 0)) {
										if (k >>> 0 >= t[l + 16 >> 2] >>> 0) {
											b[k >> 2] = q;
											b[h + (e + 6)] = f;
											b[h + (e + 3)] = q;
											b[h + (e + 2)] = q;
											break a
										}
										K();
										throw "Reached an unreachable!";
									}
									d <<= 1;
									f = g
								}
						}
					while (0);
					return a + (n | 8) | 0
				}
				function bf() {
					return q.Yb | 0
				}
				function cf() {
					return q.Hb | 0
				}
				function od(a) {
					b[a >> 2] = pd + 8 | 0
				}
				function qd(a) {
					0 != (a | 0) && eb(a)
				}
				function df(a) {
					hc(a);
					qd(a)
				}
				function hc(a) {
					ef(a | 0)
				}
				function ff(a) {
					od(a | 0);
					b[a >> 2] = rd + 8 | 0
				}
				function gf(a) {
					hc(a | 0);
					qd(a)
				}
				function kd(a, f) {
					var c = t[l + 24 >> 2];
					var d = c >> 2;
					var e = gc(c)
					, h = b[e >> 2];
					var g = b[e + 4 >> 2];
					e = h + g | 0;
					var k = h + (g - 39) | 0;
					h = h + (g - 47) + (0 == (k & 7 | 0) ? 0 : -k & 7) | 0;
					h = h >>> 0 < (c + 16 | 0) >>> 0 ? c : h;
					k = h + 8 | 0;
					g = k >> 2;
					Ab(a, f - 40 | 0);
					b[(h + 4 | 0) >> 2] = 27;
					b[g] = b[l + 444 >> 2];
					b[g + 1] = b[l + 448 >> 2];
					b[g + 2] = b[l + 452 >> 2];
					b[g + 3] = b[l + 456 >> 2];
					b[l + 444 >> 2] = a;
					b[l + 448 >> 2] = f;
					b[l + 456 >> 2] = 0;
					b[l + 452 >> 2] = k;
					a = h + 28 | 0;
					b[a >> 2] = 7;
					f = (h + 32 | 0) >>> 0 < e >>> 0;
					a: do
						if (f)
							for (; ; ) {
								f = a + 4 | 0;
								b[f >> 2] = 7;
								if ((a + 8 | 0) >>> 0 >= e >>> 0)
									break a;
								a = f
							}
					while (0);
					e = (h | 0) == (c | 0);
					a: do
						if (!e)
							if (a = h - c | 0,
							f = c + a | 0,
							g = a + (c + 4) | 0,
							b[g >> 2] &= -2,
							b[d + 1] = a | 1,
							b[f >> 2] = a,
							256 > a >>> 0) {
								g = a >>> 2 & 1073741822;
								f = (g << 2) + l + 40 | 0;
								k = t[l >> 2];
								a = 1 << (a >>> 3);
								if (0 == (k & a | 0))
									b[l >> 2] = k | a,
									a = f,
									g = (g + 2 << 2) + l + 40 | 0;
								else if (g = (g + 2 << 2) + l + 40 | 0,
								a = t[g >> 2],
								!(a >>> 0 >= t[l + 16 >> 2] >>> 0))
									throw K(),
									"Reached an unreachable!";
								b[g >> 2] = c;
								b[a + 12 >> 2] = c;
								b[d + 2] = a;
								b[d + 3] = f
							} else {
								f = c;
								k = a >>> 8;
								if (0 == (k | 0))
									k = 0;
								else if (16777215 < a >>> 0)
									k = 31;
								else {
									g = (k + 1048320 | 0) >>> 16 & 8;
									var p = k << g;
									k = (p + 520192 | 0) >>> 16 & 4;
									p <<= k;
									var q = (p + 245760 | 0) >>> 16 & 2;
									g = 14 - (k | g | q) + (p << q >>> 15) | 0;
									k = a >>> ((g + 7 | 0) >>> 0) & 1 | g << 1
								}
								g = (k << 2) + l + 304 | 0;
								b[d + 7] = k;
								b[d + 5] = 0;
								b[d + 4] = 0;
								p = b[l + 4 >> 2];
								q = 1 << k;
								if (0 == (p & q | 0))
									b[l + 4 >> 2] = p | q,
									b[g >> 2] = f,
									b[d + 6] = g,
									b[d + 3] = c,
									b[d + 2] = c;
								else
									for (e = a << (31 == (k | 0) ? 0 : 25 - (k >>> 1) | 0),
									h = b[g >> 2]; ; ) {
										if ((b[h + 4 >> 2] & -8 | 0) == (a | 0)) {
											c = h + 8 | 0;
											e = t[c >> 2];
											a = t[l + 16 >> 2];
											if (!(h >>> 0 < a >>> 0 || e >>> 0 < a >>> 0)) {
												b[e + 12 >> 2] = f;
												b[c >> 2] = f;
												b[d + 2] = e;
												b[d + 3] = h;
												b[d + 6] = 0;
												break a
											}
											K();
											throw "Reached an unreachable!";
										}
										g = (e >>> 31 << 2) + h + 16 | 0;
										k = t[g >> 2];
										if (0 == (k | 0)) {
											if (g >>> 0 >= t[l + 16 >> 2] >>> 0) {
												b[g >> 2] = f;
												b[d + 6] = h;
												b[d + 3] = c;
												b[d + 2] = c;
												break a
											}
											K();
											throw "Reached an unreachable!";
										}
										e <<= 1;
										h = k
									}
							}
					while (0)
				}
				function hf(a, c) {
					function f(a) {
						if ("double" === a)
							var f = (cb[0] = b[c + d >> 2],
							cb[1] = b[c + d + 4 >> 2],
							Xb[0]);
						else
							"i64" == a ? f = [b[c + d >> 2], b[c + d + 4 >> 2]] : (a = "i32",
							f = b[c + d >> 2]);
						d += Q.Cc(a);
						return f
					}
					for (var d = 0, e = [], h, g; ; ) {
						var k = a;
						h = D[a];
						if (0 === h)
							break;
						g = D[a + 1];
						if (37 == h) {
							var l = !1
							, p = !1
							, y = !1
							, E = !1;
							a: for (; ; ) {
								switch (g) {
								case 43:
									l = !0;
									break;
								case 45:
									p = !0;
									break;
								case 35:
									y = !0;
									break;
								case 48:
									if (E)
										break a;
									else {
										E = !0;
										break
									}
								default:
									break a
								}
								a++;
								g = D[a + 1]
							}
							var H = 0;
							if (42 == g)
								H = f("i32"),
								a++,
								g = D[a + 1];
							else
								for (; 48 <= g && 57 >= g; )
									H = 10 * H + (g - 48),
									a++,
									g = D[a + 1];
							var x = !1;
							if (46 == g) {
								var q = 0;
								x = !0;
								a++;
								g = D[a + 1];
								if (42 == g)
									q = f("i32"),
									a++;
								else
									for (; ; ) {
										g = D[a + 1];
										if (48 > g || 57 < g)
											break;
										q = 10 * q + (g - 48);
										a++
									}
								g = D[a + 1]
							} else
								q = 6;
							switch (String.fromCharCode(g)) {
							case "h":
								g = D[a + 2];
								if (104 == g) {
									a++;
									var t = 1
								} else
									t = 2;
								break;
							case "l":
								g = D[a + 2];
								108 == g ? (a++,
								t = 8) : t = 4;
								break;
							case "L":
							case "q":
							case "j":
								t = 8;
								break;
							case "z":
							case "t":
							case "I":
								t = 4;
								break;
							default:
								t = null
							}
							t && a++;
							g = D[a + 1];
							if (-1 != "diuoxXp".split("").indexOf(String.fromCharCode(g))) {
								k = 100 == g || 105 == g;
								t = t || 4;
								var v = h = f("i" + 8 * t), m;
								8 == t && (h = Q.Mc(h[0], h[1], 117 == g));
								4 >= t && (h = (k ? L : R)(h & Math.pow(256, t) - 1, 8 * t));
								var w = Math.abs(h);
								k = "";
								if (100 == g || 105 == g)
									8 == t && Bb ? m = Bb.stringify(v[0], v[1]) : m = L(h, 8 * t, 1).toString(10);
								else if (117 == g)
									8 == t && Bb ? m = Bb.stringify(v[0], v[1], !0) : m = R(h, 8 * t, 1).toString(10),
									h = Math.abs(h);
								else if (111 == g)
									m = (y ? "0" : "") + w.toString(8);
								else if (120 == g || 88 == g) {
									k = y ? "0x" : "";
									if (0 > h) {
										h = -h;
										m = (w - 1).toString(16);
										y = [];
										for (v = 0; v < m.length; v++)
											y.push((15 - parseInt(m[v], 16)).toString(16));
										for (m = y.join(""); m.length < 2 * t; )
											m = "f" + m
									} else
										m = w.toString(16);
									88 == g && (k = k.toUpperCase(),
									m = m.toUpperCase())
								} else
									112 == g && (0 === w ? m = "(nil)" : (k = "0x",
									m = w.toString(16)));
								if (x)
									for (; m.length < q; )
										m = "0" + m;
								for (l && (k = 0 > h ? "-" + k : "+" + k); k.length + m.length < H; )
									p ? m += " " : E ? m = "0" + m : k = " " + k;
								m = k + m;
								m.split("").forEach(function(a) {
									e.push(a.charCodeAt(0))
								})
							} else if (-1 != "fFeEgG".split("").indexOf(String.fromCharCode(g))) {
								h = f("double");
								if (isNaN(h))
									m = "nan",
									E = !1;
								else if (isFinite(h)) {
									x = !1;
									t = Math.min(q, 20);
									if (103 == g || 71 == g)
										x = !0,
										q = q || 1,
										t = parseInt(h.toExponential(t).split("e")[1], 10),
										q > t && -4 <= t ? (g = (103 == g ? "f" : "F").charCodeAt(0),
										q -= t + 1) : (g = (103 == g ? "e" : "E").charCodeAt(0),
										q--),
										t = Math.min(q, 20);
									if (101 == g || 69 == g)
										m = h.toExponential(t),
										/[eE][-+]\d$/.test(m) && (m = m.slice(0, -1) + "0" + m.slice(-1));
									else if (102 == g || 70 == g)
										m = h.toFixed(t);
									k = m.split("e");
									if (x && !y)
										for (; 1 < k[0].length && -1 != k[0].indexOf(".") && ("0" == k[0].slice(-1) || "." == k[0].slice(-1)); )
											k[0] = k[0].slice(0, -1);
									else
										for (y && -1 == m.indexOf(".") && (k[0] += "."); q > t++; )
											k[0] += "0";
									m = k[0] + (1 < k.length ? "e" + k[1] : "");
									69 == g && (m = m.toUpperCase());
									l && 0 <= h && (m = "+" + m)
								} else
									m = (0 > h ? "-" : "") + "inf",
									E = !1;
								for (; m.length < H; )
									p ? m += " " : !E || "-" != m[0] && "+" != m[0] ? m = (E ? "0" : " ") + m : m = m[0] + "0" + m.slice(1);
								97 > g && (m = m.toUpperCase());
								m.split("").forEach(function(a) {
									e.push(a.charCodeAt(0))
								})
							} else if (115 == g) {
								(l = f("i8*")) ? (l = B(l),
								x && l.length > q && (l = l.slice(0, q))) : l = A("(null)", !0);
								if (!p)
									for (; l.length < H--; )
										e.push(32);
								e = e.concat(l);
								if (p)
									for (; l.length < H--; )
										e.push(32)
							} else if (99 == g) {
								for (p && e.push(f("i8")); 0 < --H; )
									e.push(32);
								p || e.push(f("i8"))
							} else if (110 == g)
								p = f("i32*"),
								b[p >> 2] = e.length;
							else if (37 == g)
								e.push(h);
							else
								for (v = k; v < a + 2; v++)
									e.push(D[v]);
							a += 2
						} else
							e.push(h),
							a += 1
					}
					return e
				}
				function jf(a, b, c, d) {
					c = hf(c, d);
					b = void 0 === b ? c.length : Math.min(c.length, b - 1);
					for (d = 0; d < b; d++)
						D[a + d] = c[d];
					D[a + d] = 0;
					return c.length
				}
				function Ld(a, b, c) {
					return jf(a, void 0, b, c)
				}
				function Y(a) {
					Y.a || (Y.a = g([0], "i32", 2));
					return b[Y.a >> 2] = a
				}
				function kf(a, b, c, d) {
					a = F.streams[a];
					if (!a || a.object.T)
						return Y(ra.Pa),
						-1;
					if (a.pa) {
						if (a.object.Y)
							return Y(ra.Jb),
							-1;
						if (0 > c || 0 > d)
							return Y(ra.wa),
							-1;
						for (var f = a.object.v; f.length < d; )
							f.push(0);
						for (var e = 0; e < c; e++)
							f[d + e] = I[b + e];
						a.object.timestamp = Date.now();
						return e
					}
					Y(ra.fa);
					return -1
				}
				function sd(a, b, c) {
					var f = F.streams[a];
					if (f) {
						if (f.pa) {
							if (0 > c)
								return Y(ra.wa),
								-1;
							if (f.object.T) {
								if (f.object.ca) {
									for (a = 0; a < c; a++)
										try {
											f.object.ca(D[b + a])
										} catch (na) {
											return Y(ra.Qa),
											-1
										}
									f.object.timestamp = Date.now();
									return a
								}
								Y(ra.Lb);
								return -1
							}
							b = kf(a, b, c, f.position);
							-1 != b && (f.position += b);
							return b
						}
						Y(ra.fa);
						return -1
					}
					Y(ra.Pa);
					return -1
				}
				function lf(a) {
					return z(a)
				}
				function mf(a, b) {
					return sd(b, a, lf(a))
				}
				function Nb(a, b) {
					a = R(a & 255);
					D[Nb.a] = a;
					return -1 == sd(b, Nb.a, 1) ? (b in F.streams && (F.streams[b].error = !0),
					-1) : a
				}
				function Md(a) {
					var c = b[Ob >> 2];
					a = mf(a, c);
					return 0 > a ? a : 0 > Nb(10, c) ? -1 : a + 1
				}
				function Xa(a, c, d) {
					if (20 <= d) {
						for (d = a + d; a % 4; )
							D[a++] = c;
						0 > c && (c += 256);
						a >>= 2;
						for (var f = d >> 2, e = c | c << 8 | c << 16 | c << 24; a < f; )
							b[a++] = e;
						for (a <<= 2; a < d; )
							D[a++] = c
					} else
						for (; d--; )
							D[a++] = c
				}
				function fb(a, c, d) {
					if (20 <= d && c % 2 == a % 2)
						if (c % 4 == a % 4) {
							for (d = c + d; c % 4; )
								D[a++] = D[c++];
							c >>= 2;
							a >>= 2;
							for (var f = d >> 2; c < f; )
								b[a++] = b[c++];
							c <<= 2;
							for (a <<= 2; c < d; )
								D[a++] = D[c++]
						} else {
							d = c + d;
							c % 2 && (D[a++] = D[c++]);
							c >>= 1;
							a >>= 1;
							for (f = d >> 1; c < f; )
								Da[a++] = Da[c++];
							c <<= 1;
							a <<= 1;
							c < d && (D[a++] = D[c++])
						}
					else
						for (; d--; )
							D[a++] = D[c++]
				}
				function K() {
					throw "abort() at " + Error().stack;
				}
				function $e(a) {
					switch (a) {
					case 8:
						return 4096;
					case 54:
					case 56:
					case 21:
					case 61:
					case 63:
					case 22:
					case 67:
					case 23:
					case 24:
					case 25:
					case 26:
					case 27:
					case 69:
					case 28:
					case 101:
					case 70:
					case 71:
					case 29:
					case 30:
					case 199:
					case 75:
					case 76:
					case 32:
					case 43:
					case 44:
					case 80:
					case 46:
					case 47:
					case 45:
					case 48:
					case 49:
					case 42:
					case 82:
					case 33:
					case 7:
					case 108:
					case 109:
					case 107:
					case 112:
					case 119:
					case 121:
						return 200809;
					case 13:
					case 104:
					case 94:
					case 95:
					case 34:
					case 35:
					case 77:
					case 81:
					case 83:
					case 84:
					case 85:
					case 86:
					case 87:
					case 88:
					case 89:
					case 90:
					case 91:
					case 94:
					case 95:
					case 110:
					case 111:
					case 113:
					case 114:
					case 115:
					case 116:
					case 117:
					case 118:
					case 120:
					case 40:
					case 16:
					case 79:
					case 19:
						return -1;
					case 92:
					case 93:
					case 5:
					case 72:
					case 6:
					case 74:
					case 92:
					case 93:
					case 96:
					case 97:
					case 98:
					case 99:
					case 102:
					case 103:
					case 105:
						return 1;
					case 38:
					case 66:
					case 50:
					case 51:
					case 4:
						return 1024;
					case 15:
					case 64:
					case 41:
						return 32;
					case 55:
					case 37:
					case 17:
						return 2147483647;
					case 18:
					case 1:
						return 47839;
					case 59:
					case 57:
						return 99;
					case 68:
					case 58:
						return 2048;
					case 0:
						return 2097152;
					case 3:
						return 65536;
					case 14:
						return 32768;
					case 73:
						return 32767;
					case 39:
						return 16384;
					case 60:
						return 1E3;
					case 106:
						return 700;
					case 52:
						return 256;
					case 62:
						return 255;
					case 2:
						return 100;
					case 65:
						return 64;
					case 36:
						return 20;
					case 100:
						return 16;
					case 20:
						return 6;
					case 53:
						return 4
					}
					Y(ra.wa);
					return -1
				}
				function af(a) {
					var c = Math.floor(Date.now() / 1E3);
					a && (b[a >> 2] = c);
					return c
				}
				function nf() {
					return Y.a
				}
				function La(a) {
					var b = La;
					b.b || (Ia = Ia + 4095 >> 12 << 12,
					b.b = !0);
					b = Ia;
					0 != a && Q.Cb(a);
					return b
				}
				function td(a) {
					a = a || w.arguments;
					w.setStatus && w.setStatus("");
					w.preRun && w.preRun();
					var b = null;
					w._main && (p(ud),
					b = w.jc(a),
					w.noExitRuntime || (p(vd),
					of.print()));
					w.postRun && w.postRun();
					return b
				}
				var ib = {};
				if ("undefined" == typeof wb)
					var wb = {};
				var w = {};
				try {
					this.Module = w
				} catch (a) {
					this.Module = w = {}
				}
				var wd = "object" === typeof wb;
				if (wd)
					if (wd)
						w.print || (w.print = function(a) {
							console.log(a)
						}
						),
						w.printErr || (w.printErr = function(a) {
							console.log(a)
						}
						),
						w.read = function(a) {
							var b = new XMLHttpRequest;
							b.open("GET", a, !1);
							b.send(null);
							return b.responseText
						}
						,
						w.arguments || "undefined" != typeof arguments && (w.arguments = arguments);
					else
						throw "Unknown runtime environment. Where are we?";
				else
					w.print = print,
					w.printErr = printErr,
					w.read = "undefined" != typeof read ? read : function(a) {
						snarf(a)
					}
					,
					w.arguments || ("undefined" != typeof scriptArgs ? w.arguments = scriptArgs : "undefined" != typeof arguments && (w.arguments = arguments));
				"undefined" == !w.load && w.read && (w.load = function(a) {
					c(w.read(a))
				}
				);
				w.printErr || (w.printErr = function() {}
				);
				w.print || (w.print = w.printErr);
				w.arguments || (w.arguments = []);
				w.print = w.print;
				w.qf = w.printErr;
				var Q = {
					Bb: function() {
						return M
					},
					kd: function(a) {
						M = a
					},
					bf: function(a, b) {
						b = b || 4;
						return 1 == b ? a : "Math.ceil((" + a + ")/" + b + ")*" + b
					},
					Ic: function(a) {
						return a in Q.Sb || a in Q.Nb
					},
					Jc: function(a) {
						return "*" == a[a.length - 1]
					},
					Lc: function(a) {
						return isPointerType(a) ? !1 : /^\[\d+ x (.*)\]/.test(a) || /<?{ ?[^}]* ?}>?/.test(a) ? !0 : "%" == a[0]
					},
					Sb: {
						i1: 0,
						i8: 0,
						i16: 0,
						i32: 0,
						i64: 0
					},
					Nb: {
						"float": 0,
						"double": 0
					},
					Se: function(a, b, c, e) {
						var f = Math.pow(2, e) - 1;
						if (32 > e)
							switch (c) {
							case "shl":
								return [a << e, b << e | (a & f << 32 - e) >>> 32 - e];
							case "ashr":
								return [(a >>> e | (b & f) << 32 - e) >> 0 >>> 0, b >> e >>> 0];
							case "lshr":
								return [(a >>> e | (b & f) << 32 - e) >>> 0, b >>> e]
							}
						else if (32 == e)
							switch (c) {
							case "shl":
								return [0, a];
							case "ashr":
								return [b, 0 > (b | 0) ? f : 0];
							case "lshr":
								return [b, 0]
							}
						else
							switch (c) {
							case "shl":
								return [0, a << e - 32];
							case "ashr":
								return [b >> e - 32 >>> 0, 0 > (b | 0) ? f : 0];
							case "lshr":
								return [b >>> e - 32, 0]
							}
						d("unknown bitshift64 op: " + [value, c, e])
					},
					nf: function(a, b) {
						return (a | 0 | b | 0) + 4294967296 * (Math.round(a / 4294967296) | Math.round(b / 4294967296))
					},
					Qe: function(a, b) {
						return ((a | 0) & (b | 0)) + 4294967296 * (Math.round(a / 4294967296) & Math.round(b / 4294967296))
					},
					uf: function(a, b) {
						return ((a | 0) ^ (b | 0)) + 4294967296 * (Math.round(a / 4294967296) ^ Math.round(b / 4294967296))
					},
					Ea: function(a) {
						if (1 == Q.ja)
							return 1;
						var b = {
							"%i1": 1,
							"%i8": 1,
							"%i16": 2,
							"%i32": 4,
							"%i64": 8,
							"%float": 4,
							"%double": 8
						}["%" + a];
						b || ("*" == a[a.length - 1] ? b = Q.ja : "i" == a[0] && (a = parseInt(a.substr(1)),
						e(0 == a % 8),
						b = a / 8));
						return b
					},
					Cc: function(a) {
						return Math.max(Q.Ea(a), Q.ja)
					},
					tc: function(a, b) {
						var c = {};
						return b ? a.filter(function(a) {
							return c[a[b]] ? !1 : c[a[b]] = !0
						}) : a.filter(function(a) {
							return c[a] ? !1 : c[a] = !0
						})
					},
					set: function() {
						for (var a = "object" === typeof arguments[0] ? arguments[0] : arguments, b = {}, c = 0; c < a.length; c++)
							b[a[c]] = 0;
						return b
					},
					ic: function(a) {
						a.W = 0;
						a.la = 0;
						var b = []
						, c = -1;
						a.lb = a.Ca.map(function(f) {
							var d;
							if (Q.Ic(f) || Q.Jc(f))
								f = d = Q.Ea(f);
							else if (Q.Lc(f))
								d = ib.types[f].W,
								f = ib.types[f].la;
							else
								throw "Unclear type in struct: " + f + ", in " + a.Qc + " :: " + dump(ib.types[a.Qc]);
							f = a.pf ? 1 : Math.min(f, Q.ja);
							a.la = Math.max(a.la, f);
							f = Q.ka(a.W, f);
							a.W = f + d;
							0 <= c && b.push(f - c);
							return c = f
						});
						a.W = Q.ka(a.W, a.la);
						0 == b.length ? a.kb = a.W : 1 == Q.tc(b).length && (a.kb = b[0]);
						a.lf = 1 != a.kb;
						return a.lb
					},
					zc: function(a, b, c) {
						if (b) {
							c = c || 0;
							var f = ("undefined" === typeof ib ? Q.tf : ib.types)[b];
							if (!f)
								return null;
							e(f.Ca.length === a.length, "Number of named fields must match the type for " + b);
							var d = f.lb
						} else
							f = {
								Ca: a.map(function(a) {
									return a[0]
								})
							},
							d = Q.ic(f);
						var g = {
							Ne: f.W
						};
						b ? a.forEach(function(a, b) {
							if ("string" === typeof a)
								g[a] = d[b] + c;
							else {
								var e;
								for (e in a)
									var h = e;
								g[h] = Q.zc(a[h], f.Ca[b], d[b])
							}
						}) : a.forEach(function(a, b) {
							g[a[1]] = d[b]
						});
						return g
					},
					Pe: function(a) {
						var b = Ma.length;
						Ma.push(a);
						Ma.push(0);
						return b
					},
					Ma: function(a) {
						var b = M;
						M += a;
						M = M + 3 >> 2 << 2;
						return b
					},
					Cb: function(a) {
						var c = Ia;
						Ia += a;
						Ia = Ia + 3 >> 2 << 2;
						if (Ia >= bb) {
							for (; bb <= Ia; )
								bb = 2 * bb + 4095 >> 12 << 12;
							a = D;
							var d = new ArrayBuffer(bb);
							D = new Int8Array(d);
							Da = new Int16Array(d);
							b = new Int32Array(d);
							I = new Uint8Array(d);
							Z = new Uint16Array(d);
							t = new Uint32Array(d);
							Cb = new Float32Array(d);
							ic = new Float64Array(d);
							D.set(a)
						}
						return c
					},
					ka: function(a, b) {
						return Math.ceil(a / (b ? b : 4)) * (b ? b : 4)
					},
					Mc: function(a, b, c) {
						return c ? (a >>> 0) + 4294967296 * (b >>> 0) : (a >>> 0) + 4294967296 * (b | 0)
					},
					ja: 4,
					Me: 0
				}, of = {
					Xb: 0,
					bb: 0,
					rf: {},
					mf: function(a, b) {
						b || (this.bb++,
						this.bb >= this.Xb && d("\n\nToo many corrections!"))
					},
					print: function() {}
				}, lb, Kd = this;
				w.ccall = h;
				w.cwrap = function(a, b, c) {
					return function() {
						return h(a, b, c, Array.prototype.slice.call(arguments))
					}
				}
				;
				w.setValue = k;
				w.getValue = function(a, c) {
					c = c || "i8";
					"*" === c[c.length - 1] && (c = "i32");
					switch (c) {
					case "i1":
						return D[a];
					case "i8":
						return D[a];
					case "i16":
						return Da[a >> 1];
					case "i32":
						return b[a >> 2];
					case "i64":
						return b[a >> 2];
					case "float":
						return Cb[a >> 2];
					case "double":
						return cb[0] = b[a >> 2],
						cb[1] = b[a + 4 >> 2],
						Xb[0];
					default:
						d("invalid type for setValue: " + c)
					}
					return null
				}
				;
				w.ALLOC_NORMAL = 0;
				w.ALLOC_STACK = 1;
				w.ALLOC_STATIC = 2;
				w.allocate = g;
				w.Pointer_stringify = m;
				w.Array_stringify = function(a) {
					for (var b = "", c = 0; c < a.length; c++)
						b += String.fromCharCode(a[c]);
					return b
				}
				;
				var M, pf = w.TOTAL_STACK || 5242880, bb = w.TOTAL_MEMORY || 10485760;
				e(!!Int32Array && !!Float64Array && !!(new Int32Array(1)).subarray && !!(new Int32Array(1)).set, "Cannot fallback to non-typed array case: Code is too specialized");
				var Qa = new ArrayBuffer(bb);
				var D = new Int8Array(Qa);
				var Da = new Int16Array(Qa);
				var b = new Int32Array(Qa);
				var I = new Uint8Array(Qa);
				var Z = new Uint16Array(Qa);
				var t = new Uint32Array(Qa);
				var Cb = new Float32Array(Qa);
				var ic = new Float64Array(Qa);
				b[0] = 255;
				e(255 === I[0] && 0 === I[3], "Typed arrays 2 must be run on a little-endian system");
				var jc = A("(null)");
				var Ia = jc.length;
				for (var Pb = 0; Pb < jc.length; Pb++)
					D[Pb] = jc[Pb];
				w.HEAP = void 0;
				w.HEAP8 = D;
				w.HEAP16 = Da;
				w.HEAP32 = b;
				w.HEAPU8 = I;
				w.HEAPU16 = Z;
				w.HEAPU32 = t;
				w.HEAPF32 = Cb;
				w.HEAPF64 = ic;
				var kc = (M = Q.ka(Ia)) + pf;
				var lc = Q.ka(kc, 8)
				, cb = b.subarray(lc >> 2)
				, Xb = ic.subarray(lc >> 3);
				kc = lc + 8;
				Ia = kc + 4095 >> 12 << 12;
				var xd = []
				, ud = []
				, vd = [];
				w.Array_copy = v;
				w.TypedArray_copy = function(a, b, c) {
					void 0 === c && (c = 0);
					for (var d = new Uint8Array(b - c), f = c; f < b; ++f)
						d[f - c] = D[a + f];
					return d.buffer
				}
				;
				w.String_len = z;
				w.String_copy = B;
				w.intArrayFromString = A;
				w.intArrayToString = function(a) {
					for (var b = [], c = 0; c < a.length; c++) {
						var d = a[c];
						255 < d && (d &= 255);
						b.push(String.fromCharCode(d))
					}
					return b.join("")
				}
				;
				w.writeStringToMemory = G;
				w.writeArrayToMemory = C;
				var q = []
				, mc = 0;
				la.X = 1;
				Ja.X = 1;
				Sa.X = 1;
				U.X = 1;
				yb.X = 1;
				wa.X = 1;
				Pc.X = 1;
				w._crn_get_width = xe;
				w._crn_get_height = ze;
				w._crn_get_levels = Ae;
				w._crn_get_dxt_format = Be;
				w._crn_get_decompressed_size = Ce;
				w._crn_decompress = De;
				Qc.X = 1;
				Uc.X = 1;
				Rc.X = 1;
				Sc.X = 1;
				Tc.X = 1;
				Zc.X = 1;
				$c.X = 1;
				ad.X = 1;
				bd.X = 1;
				w._malloc = db;
				db.X = 1;
				fd.X = 1;
				hd.X = 1;
				gd.X = 1;
				md.X = 1;
				w._free = eb;
				eb.X = 1;
				nd.X = 1;
				jd.X = 1;
				kd.X = 1;
				var Bb = function() {
					function a(a, b) {
						this.j = a | 0;
						this.m = b | 0
					}
					function b(a, b, c) {
						null != a && ("number" == typeof a ? this.C(a, b, c) : null == b && "string" != typeof a ? this.J(a, 256) : this.J(a, b))
					}
					function c() {
						return new b(null)
					}
					function d(a) {
						return "0123456789abcdefghijklmnopqrstuvwxyz".charAt(a)
					}
					function e(a, b) {
						a = h[a.charCodeAt(b)];
						return null == a ? -1 : a
					}
					function g(a) {
						var b = c();
						b.S(a);
						return b
					}
					a.Va = {};
					a.S = function(b) {
						if (-128 <= b && 128 > b) {
							var c = a.Va[b];
							if (c)
								return c
						}
						c = new a(b | 0,0 > b ? -1 : 0);
						-128 <= b && 128 > b && (a.Va[b] = c);
						return c
					}
					;
					a.C = function(b) {
						return isNaN(b) || !isFinite(b) ? a.K : b <= -a.Ya ? a.w : b + 1 >= a.Ya ? a.yc : 0 > b ? a.C(-b).s() : new a(b % a.P | 0,b / a.P | 0)
					}
					;
					a.I = function(b, c) {
						return new a(b,c)
					}
					;
					a.J = function(b, c) {
						if (0 == b.length)
							throw Error("number format error: empty string");
						c = c || 10;
						if (2 > c || 36 < c)
							throw Error("radix out of range: " + c);
						if ("-" == b.charAt(0))
							return a.J(b.substring(1), c).s();
						if (0 <= b.indexOf("-"))
							throw Error('number format error: interior "-" character: ' + b);
						for (var d = a.C(Math.pow(c, 8)), f = a.K, e = 0; e < b.length; e += 8) {
							var g = Math.min(8, b.length - e)
							, h = parseInt(b.substring(e, e + g), c);
							8 > g ? (g = a.C(Math.pow(c, g)),
							f = f.multiply(g).add(a.C(h))) : (f = f.multiply(d),
							f = f.add(a.C(h)))
						}
						return f
					}
					;
					a.xa = 65536;
					a.Ge = 16777216;
					a.P = a.xa * a.xa;
					a.He = a.P / 2;
					a.Ie = a.P * a.xa;
					a.dc = a.P * a.P;
					a.Ya = a.dc / 2;
					a.K = a.S(0);
					a.ga = a.S(1);
					a.Wa = a.S(-1);
					a.yc = a.I(-1, 2147483647);
					a.w = a.I(0, -2147483648);
					a.Xa = a.S(16777216);
					a.prototype.va = function() {
						return this.m * a.P + this.Bc()
					}
					;
					a.prototype.toString = function(b) {
						b = b || 10;
						if (2 > b || 36 < b)
							throw Error("radix out of range: " + b);
						if (this.Z())
							return "0";
						if (this.A()) {
							if (this.equals(a.w)) {
								var c = a.C(b)
								, d = this.H(c);
								c = d.multiply(c).V(this);
								return d.toString(b) + c.j.toString(b)
							}
							return "-" + this.s().toString(b)
						}
						d = a.C(Math.pow(b, 6));
						c = this;
						for (var f = ""; ; ) {
							var e = c.H(d)
							, g = c.V(e.multiply(d)).j.toString(b);
							c = e;
							if (c.Z())
								return g + f;
							for (; 6 > g.length; )
								g = "0" + g;
							f = "" + g + f
						}
					}
					;
					a.prototype.Bc = function() {
						return 0 <= this.j ? this.j : a.P + this.j
					}
					;
					a.prototype.Z = function() {
						return 0 == this.m && 0 == this.j
					}
					;
					a.prototype.A = function() {
						return 0 > this.m
					}
					;
					a.prototype.rb = function() {
						return 1 == (this.j & 1)
					}
					;
					a.prototype.equals = function(a) {
						return this.m == a.m && this.j == a.j
					}
					;
					a.prototype.vb = function(a) {
						return 0 > this.compare(a)
					}
					;
					a.prototype.Dc = function(a) {
						return 0 < this.compare(a)
					}
					;
					a.prototype.Ec = function(a) {
						return 0 <= this.compare(a)
					}
					;
					a.prototype.compare = function(a) {
						if (this.equals(a))
							return 0;
						var b = this.A()
						, c = a.A();
						return b && !c ? -1 : !b && c ? 1 : this.V(a).A() ? -1 : 1
					}
					;
					a.prototype.s = function() {
						return this.equals(a.w) ? a.w : this.Sc().add(a.ga)
					}
					;
					a.prototype.add = function(b) {
						var c = this.m >>> 16
						, d = this.m & 65535
						, f = this.j >>> 16
						, e = b.m >>> 16
						, g = b.m & 65535
						, h = b.j >>> 16;
						b = (this.j & 65535) + (b.j & 65535);
						h = (b >>> 16) + (f + h);
						f = h >>> 16;
						f += d + g;
						c = (f >>> 16) + (c + e) & 65535;
						return a.I((h & 65535) << 16 | b & 65535, c << 16 | f & 65535)
					}
					;
					a.prototype.V = function(a) {
						return this.add(a.s())
					}
					;
					a.prototype.multiply = function(b) {
						if (this.Z() || b.Z())
							return a.K;
						if (this.equals(a.w))
							return b.rb() ? a.w : a.K;
						if (b.equals(a.w))
							return this.rb() ? a.w : a.K;
						if (this.A())
							return b.A() ? this.s().multiply(b.s()) : this.s().multiply(b).s();
						if (b.A())
							return this.multiply(b.s()).s();
						if (this.vb(a.Xa) && b.vb(a.Xa))
							return a.C(this.va() * b.va());
						var c = this.m >>> 16
						, d = this.m & 65535
						, f = this.j >>> 16
						, e = this.j & 65535
						, g = b.m >>> 16
						, h = b.m & 65535
						, k = b.j >>> 16;
						b = b.j & 65535;
						var y = e * b;
						var l = (y >>> 16) + f * b;
						var n = l >>> 16;
						l = (l & 65535) + e * k;
						n += l >>> 16;
						n += d * b;
						var m = n >>> 16;
						n = (n & 65535) + f * k;
						m += n >>> 16;
						n = (n & 65535) + e * h;
						m = m + (n >>> 16) + (c * b + d * k + f * h + e * g) & 65535;
						return a.I((l & 65535) << 16 | y & 65535, m << 16 | n & 65535)
					}
					;
					a.prototype.H = function(b) {
						if (b.Z())
							throw Error("division by zero");
						if (this.Z())
							return a.K;
						if (this.equals(a.w)) {
							if (b.equals(a.ga) || b.equals(a.Wa))
								return a.w;
							if (b.equals(a.w))
								return a.ga;
							var c = this.gd(1).H(b).shiftLeft(1);
							if (c.equals(a.K))
								return b.A() ? a.ga : a.Wa;
							var d = this.V(b.multiply(c));
							return c.add(d.H(b))
						}
						if (b.equals(a.w))
							return a.K;
						if (this.A())
							return b.A() ? this.s().H(b.s()) : this.s().H(b).s();
						if (b.A())
							return this.H(b.s()).s();
						var f = a.K;
						for (d = this; d.Ec(b); ) {
							c = Math.max(1, Math.floor(d.va() / b.va()));
							var e = Math.ceil(Math.log(c) / Math.LN2);
							e = 48 >= e ? 1 : Math.pow(2, e - 48);
							for (var g = a.C(c), h = g.multiply(b); h.A() || h.Dc(d); )
								c -= e,
								g = a.C(c),
								h = g.multiply(b);
							g.Z() && (g = a.ga);
							f = f.add(g);
							d = d.V(h)
						}
						return f
					}
					;
					a.prototype.yb = function(a) {
						return this.V(this.H(a).multiply(a))
					}
					;
					a.prototype.Sc = function() {
						return a.I(~this.j, ~this.m)
					}
					;
					a.prototype.shiftLeft = function(b) {
						b &= 63;
						if (0 == b)
							return this;
						var c = this.j;
						return 32 > b ? a.I(c << b, this.m << b | c >>> 32 - b) : a.I(0, c << b - 32)
					}
					;
					a.prototype.gd = function(b) {
						b &= 63;
						if (0 == b)
							return this;
						var c = this.m;
						return 32 > b ? a.I(this.j >>> b | c << 32 - b, c >> b) : a.I(c >> b - 32, 0 <= c ? 0 : -1)
					}
					;
					b.prototype.ya = function(a, b, c, d, f, e) {
						for (; 0 <= --e; ) {
							var g = b * this[a++] + c[d] + f;
							f = Math.floor(g / 67108864);
							c[d++] = g & 67108863
						}
						return f
					}
					;
					b.prototype.i = 26;
					b.prototype.G = 67108863;
					b.prototype.ea = 67108864;
					b.prototype.Ob = Math.pow(2, 52);
					b.prototype.Ta = 26;
					b.prototype.Ua = 0;
					var h = [], k;
					var l = 48;
					for (k = 0; 9 >= k; ++k)
						h[l++] = k;
					l = 97;
					for (k = 10; 36 > k; ++k)
						h[l++] = k;
					l = 65;
					for (k = 10; 36 > k; ++k)
						h[l++] = k;
					b.prototype.copyTo = function(a) {
						for (var b = this.t - 1; 0 <= b; --b)
							a[b] = this[b];
						a.t = this.t;
						a.g = this.g
					}
					;
					b.prototype.S = function(a) {
						this.t = 1;
						this.g = 0 > a ? -1 : 0;
						0 < a ? this[0] = a : -1 > a ? this[0] = a + DV : this.t = 0
					}
					;
					b.prototype.J = function(a, c) {
						if (16 == c)
							c = 4;
						else if (8 == c)
							c = 3;
						else if (256 == c)
							c = 8;
						else if (2 == c)
							c = 1;
						else if (32 == c)
							c = 5;
						else if (4 == c)
							c = 2;
						else {
							this.xc(a, c);
							return
						}
						this.g = this.t = 0;
						for (var d = a.length, f = !1, g = 0; 0 <= --d; ) {
							var h = 8 == c ? a[d] & 255 : e(a, d);
							0 > h ? "-" == a.charAt(d) && (f = !0) : (f = !1,
							0 == g ? this[this.t++] = h : g + c > this.i ? (this[this.t - 1] |= (h & (1 << this.i - g) - 1) << g,
							this[this.t++] = h >> this.i - g) : this[this.t - 1] |= h << g,
							g += c,
							g >= this.i && (g -= this.i))
						}
						8 == c && 0 != (a[0] & 128) && (this.g = -1,
						0 < g && (this[this.t - 1] |= (1 << this.i - g) - 1 << g));
						this.R();
						f && b.a.F(this, this)
					}
					;
					b.prototype.R = function() {
						for (var a = this.g & this.G; 0 < this.t && this[this.t - 1] == a; )
							--this.t
					}
					;
					b.prototype.Ba = function(a, b) {
						var c;
						for (c = this.t - 1; 0 <= c; --c)
							b[c + a] = this[c];
						for (c = a - 1; 0 <= c; --c)
							b[c] = 0;
						b.t = this.t + a;
						b.g = this.g
					}
					;
					b.prototype.vc = function(a, b) {
						for (var c = a; c < this.t; ++c)
							b[c - a] = this[c];
						b.t = Math.max(this.t - a, 0);
						b.g = this.g
					}
					;
					b.prototype.ub = function(a, b) {
						var c = a % this.i
						, d = this.i - c
						, f = (1 << d) - 1;
						a = Math.floor(a / this.i);
						var e = this.g << c & this.G, g;
						for (g = this.t - 1; 0 <= g; --g)
							b[g + a + 1] = this[g] >> d | e,
							e = (this[g] & f) << c;
						for (g = a - 1; 0 <= g; --g)
							b[g] = 0;
						b[a] = e;
						b.t = this.t + a + 1;
						b.g = this.g;
						b.R()
					}
					;
					b.prototype.Uc = function(a, b) {
						b.g = this.g;
						var c = Math.floor(a / this.i);
						if (c >= this.t)
							b.t = 0;
						else {
							a %= this.i;
							var d = this.i - a
							, f = (1 << a) - 1;
							b[0] = this[c] >> a;
							for (var e = c + 1; e < this.t; ++e)
								b[e - c - 1] |= (this[e] & f) << d,
								b[e - c] = this[e] >> a;
							0 < a && (b[this.t - c - 1] |= (this.g & f) << d);
							b.t = this.t - c;
							b.R()
						}
					}
					;
					b.prototype.F = function(a, b) {
						for (var c = 0, d = 0, f = Math.min(a.t, this.t); c < f; )
							d += this[c] - a[c],
							b[c++] = d & this.G,
							d >>= this.i;
						if (a.t < this.t) {
							for (d -= a.g; c < this.t; )
								d += this[c],
								b[c++] = d & this.G,
								d >>= this.i;
							d += this.g
						} else {
							for (d += this.g; c < a.t; )
								d -= a[c],
								b[c++] = d & this.G,
								d >>= this.i;
							d -= a.g
						}
						b.g = 0 > d ? -1 : 0;
						-1 > d ? b[c++] = this.ea + d : 0 < d && (b[c++] = d);
						b.t = c;
						b.R()
					}
					;
					b.prototype.Pc = function(a, c) {
						var d = this.abs()
						, f = a.abs()
						, e = d.t;
						for (c.t = e + f.t; 0 <= --e; )
							c[e] = 0;
						for (e = 0; e < f.t; ++e)
							c[e + d.t] = d.ya(0, f[e], c, e, 0, d.t);
						c.g = 0;
						c.R();
						this.g != a.g && b.a.F(c, c)
					}
					;
					b.prototype.aa = function(a, d, f) {
						var e = a.abs();
						if (!(0 >= e.t)) {
							var g = this.abs();
							if (g.t < e.t)
								null != d && d.S(0),
								null != f && this.copyTo(f);
							else {
								null == f && (f = c());
								var h = c()
								, k = this.g;
								a = a.g;
								var l = e[e.t - 1], n = 1, m;
								0 != (m = l >>> 16) && (l = m,
								n += 16);
								0 != (m = l >> 8) && (l = m,
								n += 8);
								0 != (m = l >> 4) && (l = m,
								n += 4);
								0 != (m = l >> 2) && (l = m,
								n += 2);
								0 != l >> 1 && (n += 1);
								l = this.i - n;
								0 < l ? (e.ub(l, h),
								g.ub(l, f)) : (e.copyTo(h),
								g.copyTo(f));
								e = h.t;
								g = h[e - 1];
								if (0 != g) {
									m = g * (1 << this.Ta) + (1 < e ? h[e - 2] >> this.Ua : 0);
									n = this.Ob / m;
									m = (1 << this.Ta) / m;
									var u = 1 << this.Ua
									, y = f.t
									, p = y - e
									, r = null == d ? c() : d;
									h.Ba(p, r);
									0 <= f.kc(r) && (f[f.t++] = 1,
									f.F(r, f));
									b.c.Ba(e, r);
									for (r.F(h, h); h.t < e; )
										h[h.t++] = 0;
									for (; 0 <= --p; ) {
										var q = f[--y] == g ? this.G : Math.floor(f[y] * n + (f[y - 1] + u) * m);
										if ((f[y] += h.ya(0, q, f, p, 0, e)) < q)
											for (h.Ba(p, r),
											f.F(r, f); f[y] < --q; )
												f.F(r, f)
									}
									null != d && (f.vc(e, d),
									k != a && b.a.F(d, d));
									f.t = e;
									f.R();
									0 < l && f.Uc(l, f);
									0 > k && b.a.F(f, f)
								}
							}
						}
					}
					;
					b.prototype.toString = function(a) {
						if (0 > this.g)
							return "-" + this.s().toString(a);
						if (16 == a)
							a = 4;
						else if (8 == a)
							a = 3;
						else if (2 == a)
							a = 1;
						else if (32 == a)
							a = 5;
						else if (4 == a)
							a = 2;
						else
							return this.ld(a);
						var b = (1 << a) - 1, c, f = !1, e = "", g = this.t, h = this.i - g * this.i % a;
						if (0 < g--)
							for (h < this.i && 0 < (c = this[g] >> h) && (f = !0,
							e = d(c)); 0 <= g; )
								h < a ? (c = (this[g] & (1 << h) - 1) << a - h,
								c |= this[--g] >> (h += this.i - a)) : (c = this[g] >> (h -= a) & b,
								0 >= h && (h += this.i,
								--g)),
								0 < c && (f = !0),
								f && (e += d(c));
						return f ? e : "0"
					}
					;
					b.prototype.s = function() {
						var a = c();
						b.a.F(this, a);
						return a
					}
					;
					b.prototype.abs = function() {
						return 0 > this.g ? this.s() : this
					}
					;
					b.prototype.kc = function(a) {
						var b = this.g - a.g;
						if (0 != b)
							return b;
						var c = this.t;
						b = c - a.t;
						if (0 != b)
							return b;
						for (; 0 <= --c; )
							if (0 != (b = this[c] - a[c]))
								return b;
						return 0
					}
					;
					b.a = g(0);
					b.c = g(1);
					b.prototype.xc = function(a, c) {
						this.S(0);
						null == c && (c = 10);
						for (var d = this.ab(c), f = Math.pow(c, d), g = !1, h = 0, k = 0, l = 0; l < a.length; ++l) {
							var n = e(a, l);
							0 > n ? "-" == a.charAt(l) && 0 == this.La() && (g = !0) : (k = c * k + n,
							++h >= d && (this.gb(f),
							this.fb(k, 0),
							k = h = 0))
						}
						0 < h && (this.gb(Math.pow(c, h)),
						this.fb(k, 0));
						g && b.a.F(this, this)
					}
					;
					b.prototype.ab = function(a) {
						return Math.floor(Math.LN2 * this.i / Math.log(a))
					}
					;
					b.prototype.La = function() {
						return 0 > this.g ? -1 : 0 >= this.t || 1 == this.t && 0 >= this[0] ? 0 : 1
					}
					;
					b.prototype.gb = function(a) {
						this[this.t] = this.ya(0, a - 1, this, 0, 0, this.t);
						++this.t;
						this.R()
					}
					;
					b.prototype.fb = function(a, b) {
						if (0 != a) {
							for (; this.t <= b; )
								this[this.t++] = 0;
							for (this[b] += a; this[b] >= this.ea; )
								this[b] -= this.ea,
								++b >= this.t && (this[this.t++] = 0),
								++this[b]
						}
					}
					;
					b.prototype.ld = function(a) {
						null == a && (a = 10);
						if (0 == this.La() || 2 > a || 36 < a)
							return "0";
						var b = Math.pow(a, this.ab(a))
						, d = g(b)
						, f = c()
						, e = c()
						, h = "";
						for (this.aa(d, f, e); 0 < f.La(); )
							h = (b + e.pb()).toString(a).substr(1) + h,
							f.aa(d, f, e);
						return e.pb().toString(a) + h
					}
					;
					b.prototype.pb = function() {
						if (0 > this.g) {
							if (1 == this.t)
								return this[0] - this.ea;
							if (0 == this.t)
								return -1
						} else {
							if (1 == this.t)
								return this[0];
							if (0 == this.t)
								return 0
						}
						return (this[1] & (1 << 32 - this.i) - 1) << this.i | this[0]
					}
					;
					b.prototype.$a = function(a, b) {
						for (var c = 0, d = 0, f = Math.min(a.t, this.t); c < f; )
							d += this[c] + a[c],
							b[c++] = d & this.G,
							d >>= this.i;
						if (a.t < this.t) {
							for (d += a.g; c < this.t; )
								d += this[c],
								b[c++] = d & this.G,
								d >>= this.i;
							d += this.g
						} else {
							for (d += this.g; c < a.t; )
								d += a[c],
								b[c++] = d & this.G,
								d >>= this.i;
							d += a.g
						}
						b.g = 0 > d ? -1 : 0;
						0 < d ? b[c++] = d : -1 > d && (b[c++] = this.ea + d);
						b.t = c;
						b.R()
					}
					;
					var m = {
						result: [0, 0],
						add: function(b, c, d, f) {
							b = (new a(b,c)).add(new a(d,f));
							m.result[0] = b.j;
							m.result[1] = b.m
						},
						V: function(b, c, d, f) {
							b = (new a(b,c)).V(new a(d,f));
							m.result[0] = b.j;
							m.result[1] = b.m
						},
						multiply: function(b, c, d, f) {
							b = (new a(b,c)).multiply(new a(d,f));
							m.result[0] = b.j;
							m.result[1] = b.m
						},
						wb: function() {
							m.da = new b;
							m.da.J("4294967296", 10)
						},
						qa: function(a, c) {
							var d = new b;
							d.J(c.toString(), 10);
							c = new b;
							d.Pc(m.da, c);
							d = new b;
							d.J(a.toString(), 10);
							a = new b;
							d.$a(c, a);
							return a
						},
						Ze: function(c, d, f, e, g) {
							m.da || m.wb();
							g ? (c = m.qa(c >>> 0, d >>> 0),
							e = m.qa(f >>> 0, e >>> 0),
							f = new b,
							c.aa(e, f, null),
							e = new b,
							c = new b,
							f.aa(m.da, c, e),
							m.result[0] = parseInt(e.toString()) | 0,
							m.result[1] = parseInt(c.toString()) | 0) : (c = new a(c,d),
							e = new a(f,e),
							f = c.H(e),
							m.result[0] = f.j,
							m.result[1] = f.m)
						},
						yb: function(c, d, f, e, g) {
							m.da || m.wb();
							g ? (c = m.qa(c >>> 0, d >>> 0),
							e = m.qa(f >>> 0, e >>> 0),
							f = new b,
							c.aa(e, null, f),
							e = new b,
							c = new b,
							f.aa(m.da, c, e),
							m.result[0] = parseInt(e.toString()) | 0,
							m.result[1] = parseInt(c.toString()) | 0) : (c = new a(c,d),
							e = new a(f,e),
							f = c.yb(e),
							m.result[0] = f.j,
							m.result[1] = f.m)
						},
						stringify: function(c, d, f) {
							c = (new a(c,d)).toString();
							f && "-" == c[0] && (m.Na || (m.Na = new b,
							m.Na.J("18446744073709551616", 10)),
							f = new b,
							f.J(c, 10),
							c = new b,
							m.Na.$a(f, c),
							c = c.toString(10));
							return c
						}
					};
					return m
				}(), ra = {
					pd: 7,
					fa: 13,
					qd: 98,
					rd: 99,
					sd: 97,
					td: 11,
					ud: 114,
					Pa: 9,
					vd: 74,
					wd: 16,
					xd: 125,
					yd: 10,
					zd: 103,
					Ad: 111,
					Bd: 104,
					Cd: 35,
					Dd: 89,
					Ed: 33,
					Fd: 122,
					Ib: 17,
					Gd: 14,
					Hd: 27,
					Id: 113,
					Jd: 43,
					Kd: 84,
					Ld: 115,
					Md: 4,
					wa: 22,
					Qa: 5,
					Nd: 106,
					Jb: 21,
					Kb: 40,
					Od: 24,
					Pd: 31,
					Qd: 90,
					Rd: 72,
					Sd: 36,
					Td: 100,
					Ud: 102,
					Vd: 101,
					Wd: 23,
					Xd: 105,
					Yd: 61,
					Zd: 19,
					Ra: 2,
					$d: 8,
					ae: 37,
					be: 67,
					ce: 12,
					de: 42,
					ee: 92,
					fe: 28,
					ge: 63,
					he: 60,
					ie: 38,
					je: 107,
					Sa: 20,
					ke: 39,
					le: 131,
					me: 88,
					ne: 95,
					oe: 25,
					Lb: 6,
					pe: 75,
					qe: 130,
					re: 1,
					se: 32,
					te: 71,
					ue: 93,
					ve: 91,
					we: 34,
					xe: 30,
					ye: 29,
					ze: 3,
					Ae: 116,
					Be: 62,
					Ce: 110,
					De: 26,
					Ee: 11,
					Fe: 18
				}, nc = 0, Ob = 0, oc = 0, F = {
					rc: "/",
					Rc: 2,
					streams: [null],
					nb: !0,
					Za: function(a, b) {
						if ("string" !== typeof a)
							return null;
						void 0 === b && (b = F.rc);
						a && "/" == a[0] && (b = "");
						a = (b + "/" + a).split("/").reverse();
						for (b = [""]; a.length; ) {
							var c = a.pop();
							"" != c && "." != c && (".." == c ? 1 < b.length && b.pop() : b.push(c))
						}
						return 1 == b.length ? "/" : b.join("/")
					},
					za: function(a, b, c) {
						var d = {
							Kc: !1,
							oa: !1,
							error: 0,
							name: null,
							path: null,
							object: null,
							Ga: !1,
							zb: null,
							Ha: null
						};
						a = F.Za(a);
						if ("/" == a)
							d.Kc = !0,
							d.oa = d.Ga = !0,
							d.name = "/",
							d.path = d.zb = "/",
							d.object = d.Ha = F.root;
						else if (null !== a) {
							c = c || 0;
							a = a.slice(1).split("/");
							for (var f = F.root, e = [""]; a.length; ) {
								1 == a.length && f.Y && (d.Ga = !0,
								d.zb = 1 == e.length ? "/" : e.join("/"),
								d.Ha = f,
								d.name = a[0]);
								var g = a.shift();
								if (!f.Y) {
									d.error = ra.Sa;
									break
								} else if (!f.read) {
									d.error = ra.fa;
									break
								} else if (!f.v.hasOwnProperty(g)) {
									d.error = ra.Ra;
									break
								}
								f = f.v[g];
								if (f.link && (!b || 0 != a.length)) {
									if (40 < c) {
										d.error = ra.Kb;
										break
									}
									d = F.Za(f.link, e.join("/"));
									d = F.za([d].concat(a).join("/"), b, c + 1);
									break
								}
								e.push(g);
								0 == a.length && (d.oa = !0,
								d.path = e.join("/"),
								d.object = f)
							}
						}
						return d
					},
					jb: function(a, b) {
						F.hb();
						a = F.za(a, b);
						if (a.oa)
							return a.object;
						Y(a.error);
						return null
					},
					eb: function(a, b, c, d, e) {
						a || (a = "/");
						"string" === typeof a && (a = F.jb(a));
						if (!a)
							throw Y(ra.fa),
							Error("Parent path must exist.");
						if (!a.Y)
							throw Y(ra.Sa),
							Error("Parent must be a folder.");
						if (!a.write && !F.nb)
							throw Y(ra.fa),
							Error("Parent folder must be writeable.");
						if (!b || "." == b || ".." == b)
							throw Y(ra.Ra),
							Error("Name must not be empty.");
						if (a.v.hasOwnProperty(b))
							throw Y(ra.Ib),
							Error("Can't overwrite object.");
						a.v[b] = {
							read: void 0 === d ? !0 : d,
							write: void 0 === e ? !1 : e,
							timestamp: Date.now(),
							Hc: F.Rc++
						};
						for (var f in c)
							c.hasOwnProperty(f) && (a.v[b][f] = c[f]);
						return a.v[b]
					},
					Aa: function(a, b, c, d) {
						return F.eb(a, b, {
							Y: !0,
							T: !1,
							v: {}
						}, c, d)
					},
					qc: function(a, b, c, d) {
						a = F.jb(a);
						if (null === a)
							throw Error("Invalid parent.");
						for (b = b.split("/").reverse(); b.length; ) {
							var f = b.pop();
							f && (a.v.hasOwnProperty(f) || F.Aa(a, f, c, d),
							a = a.v[f])
						}
						return a
					},
					na: function(a, b, c, d, e) {
						c.Y = !1;
						return F.eb(a, b, c, d, e)
					},
					Ue: function(a, b, c, d, e) {
						if ("string" === typeof c) {
							for (var f = Array(c.length), g = 0, h = c.length; g < h; ++g)
								f[g] = c.charCodeAt(g);
							c = f
						}
						return F.na(a, b, {
							T: !1,
							v: c
						}, d, e)
					},
					Ve: function(a, b, c, d, e) {
						return F.na(a, b, {
							T: !1,
							url: c
						}, d, e)
					},
					We: function(a, b, c, d, e) {
						return F.na(a, b, {
							T: !1,
							link: c
						}, d, e)
					},
					ma: function(a, b, c, d) {
						if (!c && !d)
							throw Error("A device must have at least one callback defined.");
						return F.na(a, b, {
							T: !0,
							input: c,
							ca: d
						}, !!c, !!d)
					},
					cf: function(a) {
						if (a.T || a.Y || a.link || a.v)
							return !0;
						var b = !0;
						if ("undefined" !== typeof XMLHttpRequest)
							e("Cannot do synchronous binary XHRs in modern browsers. Use --embed-file or --preload-file in emcc");
						else if (w.read)
							try {
								a.v = A(w.read(a.url), !0)
							} catch (n) {
								b = !1
							}
						else
							throw Error("Cannot load without read() or XMLHttpRequest.");
						b || Y(ra.Qa);
						return b
					},
					hb: function() {
						F.root || (F.root = {
							read: !0,
							write: !0,
							Y: !0,
							T: !1,
							timestamp: Date.now(),
							Hc: 1,
							v: {}
						})
					},
					ha: function(a, b, c) {
						function d(a) {
							null === a || 10 === a ? (b.ta(b.buffer.join("")),
							b.buffer = []) : b.buffer.push(String.fromCharCode(a))
						}
						e(!F.ha.b, "FS.init was previously called. If you want to initialize later with custom parameters, remove any earlier calls (note that one is automatically added to the generated code)");
						F.ha.b = !0;
						F.hb();
						a = a || w.stdin;
						b = b || w.stdout;
						c = c || w.stderr;
						var f = !0
						, h = !0
						, k = !0;
						a || (f = !1,
						a = function() {
							if (!a.cache || !a.cache.length) {
								var b;
								"undefined" != typeof wb && "function" == typeof wb.prompt ? b = wb.prompt("Input: ") : "function" == typeof readline && (b = readline());
								b || (b = "");
								a.cache = A(b + "\n", !0)
							}
							return a.cache.shift()
						}
						);
						b || (h = !1,
						b = d);
						b.ta || (b.ta = w.print);
						b.buffer || (b.buffer = []);
						c || (k = !1,
						c = d);
						c.ta || (c.ta = w.print);
						c.buffer || (c.buffer = []);
						F.Aa("/", "tmp", !0, !0);
						var l = F.Aa("/", "dev", !0, !0)
						, m = F.ma(l, "stdin", a)
						, n = F.ma(l, "stdout", null, b);
						c = F.ma(l, "stderr", null, c);
						F.ma(l, "tty", a, b);
						F.streams[1] = {
							path: "/dev/stdin",
							object: m,
							position: 0,
							sb: !0,
							pa: !1,
							qb: !1,
							tb: !f,
							error: !1,
							ib: !1,
							Db: []
						};
						F.streams[2] = {
							path: "/dev/stdout",
							object: n,
							position: 0,
							sb: !1,
							pa: !0,
							qb: !1,
							tb: !h,
							error: !1,
							ib: !1,
							Db: []
						};
						F.streams[3] = {
							path: "/dev/stderr",
							object: c,
							position: 0,
							sb: !1,
							pa: !0,
							qb: !1,
							tb: !k,
							error: !1,
							ib: !1,
							Db: []
						};
						nc = g([1], "void*", 2);
						Ob = g([2], "void*", 2);
						oc = g([3], "void*", 2);
						F.qc("/", "dev/shm/tmp", !0, !0);
						F.streams[nc] = F.streams[1];
						F.streams[Ob] = F.streams[2];
						F.streams[oc] = F.streams[3];
						g([g([0, 0, 0, 0, nc, 0, 0, 0, Ob, 0, 0, 0, oc, 0, 0, 0], "void*", 2)], "void*", 2)
					},
					Tc: function() {
						F.ha.b && (F.streams[2] && 0 < F.streams[2].object.ca.buffer.length && F.streams[2].object.ca(10),
						F.streams[3] && 0 < F.streams[3].object.ca.buffer.length && F.streams[3].object.ca(10))
					},
					sf: function(a) {
						"./" == a.substr(0, 2) && (a = a.substr(2));
						return a
					},
					Ye: function(a) {
						a = F.za(a);
						if (!a.Ga || !a.oa)
							throw "Invalid path " + a;
						delete a.Ha.v[a.name]
					}
				}, ld = nf, ef;
				xd.unshift({
					Da: function() {
						w.noFSInit || F.ha.b || F.ha()
					}
				});
				ud.push({
					Da: function() {
						F.nb = !1
					}
				});
				vd.push({
					Da: function() {
						F.Tc()
					}
				});
				Y(0);
				Nb.a = g([0], "i8", 2);
				g(12, "void*", 2);
				w.jc = function(a) {
					function b() {
						for (var a = 0; 3 > a; a++)
							d.push(0)
					}
					var c = a.length + 1
					, d = [g(A("/bin/this.program"), "i8", 2)];
					b();
					for (var e = 0; e < c - 1; e += 1)
						d.push(g(A(a[e]), "i8", 2)),
						b();
					d.push(0);
					d = g(d, "i32", 2);
					return _main(c, d, 0)
				}
				;
				var qf;
				q.md = g([37, 115, 40, 37, 117, 41, 58, 32, 65, 115, 115, 101, 114, 116, 105, 111, 110, 32, 102, 97, 105, 108, 117, 114, 101, 58, 32, 34, 37, 115, 34, 10, 0], "i8", 2);
				q.nd = g([109, 95, 115, 105, 122, 101, 32, 60, 61, 32, 109, 95, 99, 97, 112, 97, 99, 105, 116, 121, 0], "i8", 2);
				q.a = g([116, 104, 105, 114, 100, 95, 112, 97, 114, 116, 121, 47, 99, 114, 117, 110, 99, 104, 47, 101, 109, 115, 99, 114, 105, 112, 116, 101, 110, 47, 46, 46, 47, 105, 110, 99, 47, 99, 114, 110, 95, 100, 101, 99, 111, 109, 112, 46, 104, 0], "i8", 2);
				q.Vb = g([109, 105, 110, 95, 110, 101, 119, 95, 99, 97, 112, 97, 99, 105, 116, 121, 32, 60, 32, 40, 48, 120, 55, 70, 70, 70, 48, 48, 48, 48, 85, 32, 47, 32, 101, 108, 101, 109, 101, 110, 116, 95, 115, 105, 122, 101, 41, 0], "i8", 2);
				q.$b = g([110, 101, 119, 95, 99, 97, 112, 97, 99, 105, 116, 121, 32, 38, 38, 32, 40, 110, 101, 119, 95, 99, 97, 112, 97, 99, 105, 116, 121, 32, 62, 32, 109, 95, 99, 97, 112, 97, 99, 105, 116, 121, 41, 0], "i8", 2);
				q.ac = g([110, 117, 109, 95, 99, 111, 100, 101, 115, 91, 99, 93, 0], "i8", 2);
				q.bc = g([115, 111, 114, 116, 101, 100, 95, 112, 111, 115, 32, 60, 32, 116, 111, 116, 97, 108, 95, 117, 115, 101, 100, 95, 115, 121, 109, 115, 0], "i8", 2);
				q.cc = g([112, 67, 111, 100, 101, 115, 105, 122, 101, 115, 91, 115, 121, 109, 95, 105, 110, 100, 101, 120, 93, 32, 61, 61, 32, 99, 111, 100, 101, 115, 105, 122, 101, 0], "i8", 2);
				q.ec = g([116, 32, 60, 32, 40, 49, 85, 32, 60, 60, 32, 116, 97, 98, 108, 101, 95, 98, 105, 116, 115, 41, 0], "i8", 2);
				q.fc = g([109, 95, 108, 111, 111, 107, 117, 112, 91, 116, 93, 32, 61, 61, 32, 99, 85, 73, 78, 84, 51, 50, 95, 77, 65, 88, 0], "i8", 2);
				var Yb = g([2], ["i8* (i8*, i32, i32*, i1, i8*)*", 0, 0, 0, 0], 2);
				g([4], ["i32 (i8*, i8*)*", 0, 0, 0, 0], 2);
				var Zb = g(1, "i8*", 2);
				q.o = g([99, 114, 110, 100, 95, 109, 97, 108, 108, 111, 99, 58, 32, 115, 105, 122, 101, 32, 116, 111, 111, 32, 98, 105, 103, 0], "i8", 2);
				q.Eb = g([99, 114, 110, 100, 95, 109, 97, 108, 108, 111, 99, 58, 32, 111, 117, 116, 32, 111, 102, 32, 109, 101, 109, 111, 114, 121, 0], "i8", 2);
				q.u = g([40, 40, 117, 105, 110, 116, 51, 50, 41, 112, 95, 110, 101, 119, 32, 38, 32, 40, 67, 82, 78, 68, 95, 77, 73, 78, 95, 65, 76, 76, 79, 67, 95, 65, 76, 73, 71, 78, 77, 69, 78, 84, 32, 45, 32, 49, 41, 41, 32, 61, 61, 32, 48, 0], "i8", 2);
				q.Fb = g([99, 114, 110, 100, 95, 114, 101, 97, 108, 108, 111, 99, 58, 32, 98, 97, 100, 32, 112, 116, 114, 0], "i8", 2);
				q.Gb = g([99, 114, 110, 100, 95, 102, 114, 101, 101, 58, 32, 98, 97, 100, 32, 112, 116, 114, 0], "i8", 2);
				q.Re = g([99, 114, 110, 100, 95, 109, 115, 105, 122, 101, 58, 32, 98, 97, 100, 32, 112, 116, 114, 0], "i8", 2);
				g([1, 0, 0, 0, 2, 0, 0, 0, 4, 0, 0, 0, 8, 0, 0, 0, 16, 0, 0, 0, 32, 0, 0, 0, 64, 0, 0, 0, 128, 0, 0, 0, 256, 0, 0, 0, 512, 0, 0, 0, 1024, 0, 0, 0, 2048, 0, 0, 0, 4096, 0, 0, 0, 8192, 0, 0, 0, 16384, 0, 0, 0, 32768, 0, 0, 0, 65536, 0, 0, 0, 131072, 0, 0, 0, 262144, 0, 0, 0, 524288, 0, 0, 0, 1048576, 0, 0, 0, 2097152, 0, 0, 0, 4194304, 0, 0, 0, 8388608, 0, 0, 0, 16777216, 0, 0, 0, 33554432, 0, 0, 0, 67108864, 0, 0, 0, 134217728, 0, 0, 0, 268435456, 0, 0, 0, 536870912, 0, 0, 0, 1073741824, 0, 0, 0, -2147483648, 0, 0, 0], ["i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0], 2);
				q.Mb = g([102, 97, 108, 115, 101, 0], "i8", 2);
				q.Te = g([99, 114, 110, 100, 95, 118, 97, 108, 105, 100, 97, 116, 101, 95, 102, 105, 108, 101, 40, 38, 110, 101, 119, 95, 104, 101, 97, 100, 101, 114, 44, 32, 97, 99, 116, 117, 97, 108, 95, 98, 97, 115, 101, 95, 100, 97, 116, 97, 95, 115, 105, 122, 101, 44, 32, 78, 85, 76, 76, 41, 0], "i8", 2);
				q.Xe = g([40, 116, 111, 116, 97, 108, 95, 115, 121, 109, 115, 32, 62, 61, 32, 49, 41, 32, 38, 38, 32, 40, 116, 111, 116, 97, 108, 95, 115, 121, 109, 115, 32, 60, 61, 32, 112, 114, 101, 102, 105, 120, 95, 99, 111, 100, 105, 110, 103, 58, 58, 99, 77, 97, 120, 83, 117, 112, 112, 111, 114, 116, 101, 100, 83, 121, 109, 115, 41, 32, 38, 38, 32, 40, 99, 111, 100, 101, 95, 115, 105, 122, 101, 95, 108, 105, 109, 105, 116, 32, 62, 61, 32, 49, 41, 0], "i8", 2);
				q.Pb = g([40, 116, 111, 116, 97, 108, 95, 115, 121, 109, 115, 32, 62, 61, 32, 49, 41, 32, 38, 38, 32, 40, 116, 111, 116, 97, 108, 95, 115, 121, 109, 115, 32, 60, 61, 32, 112, 114, 101, 102, 105, 120, 95, 99, 111, 100, 105, 110, 103, 58, 58, 99, 77, 97, 120, 83, 117, 112, 112, 111, 114, 116, 101, 100, 83, 121, 109, 115, 41, 0], "i8", 2);
				q.ba = g([17, 18, 19, 20, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15, 16], "i8", 2);
				q.L = g([48, 0], "i8", 2);
				q.Qb = g([110, 117, 109, 95, 98, 105, 116, 115, 32, 60, 61, 32, 51, 50, 85, 0], "i8", 2);
				q.Rb = g([109, 95, 98, 105, 116, 95, 99, 111, 117, 110, 116, 32, 60, 61, 32, 99, 66, 105, 116, 66, 117, 102, 83, 105, 122, 101, 0], "i8", 2);
				q.Tb = g([116, 32, 33, 61, 32, 99, 85, 73, 78, 84, 51, 50, 95, 77, 65, 88, 0], "i8", 2);
				q.Ub = g([109, 111, 100, 101, 108, 46, 109, 95, 99, 111, 100, 101, 95, 115, 105, 122, 101, 115, 91, 115, 121, 109, 93, 32, 61, 61, 32, 108, 101, 110, 0], "i8", 2);
				g([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 4, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 8, 0, 0, 0, 4, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 8, 0, 0, 0, 3, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 8, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 4, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 4, 0, 0, 0, 4, 0, 0, 0, 7, 0, 0, 0, 4, 0, 0, 0, 4, 0, 0, 0, 4, 0, 0, 0, 4, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 8, 0, 0, 0, 4, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 4, 0, 0, 0, 5, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 4, 0, 0, 0, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 8, 0, 0, 0, 3, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 4, 0, 0, 0, 6, 0, 0, 0, 4, 0, 0, 0, 4, 0, 0, 0, 4, 0, 0, 0, 4, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 8, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 4, 0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 4, 0, 0, 0, 4, 0, 0, 0, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 4, 0, 0, 0, 5, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 4, 0, 0, 0, 6, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 4, 0, 0, 0, 4, 0, 0, 0, 7, 0, 0, 0, 4, 0, 0, 0, 4, 0, 0, 0, 4, 0, 0, 0, 4, 0, 0, 0, 8, 0, 0, 0], ["i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0], 2);
				g([0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 4, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 8, 0, 0, 0, 4, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 8, 0, 0, 0, 3, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 8, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 4, 0, 0, 0, 5, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 4, 0, 0, 0, 6, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 4, 0, 0, 0, 4, 0, 0, 0, 7, 0, 0, 0, 4, 0, 0, 0, 4, 0, 0, 0, 4, 0, 0, 0, 4, 0, 0, 0, 8, 0, 0, 0], ["i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0], 2);
				q.Je = g([0, 3, 1, 2], "i8", 2);
				q.c = g([0, 2, 3, 1], "i8", 2);
				q.Ke = g([0, 7, 1, 2, 3, 4, 5, 6], "i8", 2);
				q.b = g([0, 2, 3, 4, 5, 6, 7, 1], "i8", 2);
				q.Le = g([1, 0, 5, 4, 3, 2, 6, 7], "i8", 2);
				q.od = g([1, 0, 7, 6, 5, 4, 3, 2], "i8", 2);
				q.af = g([105, 110, 100, 101, 120, 32, 60, 32, 50, 0], "i8", 2);
				q.df = g([40, 108, 111, 32, 60, 61, 32, 48, 120, 70, 70, 70, 70, 85, 41, 32, 38, 38, 32, 40, 104, 105, 32, 60, 61, 32, 48, 120, 70, 70, 70, 70, 85, 41, 0], "i8", 2);
				q.ff = g([40, 120, 32, 60, 32, 99, 68, 88, 84, 66, 108, 111, 99, 107, 83, 105, 122, 101, 41, 32, 38, 38, 32, 40, 121, 32, 60, 32, 99, 68, 88, 84, 66, 108, 111, 99, 107, 83, 105, 122, 101, 41, 0], "i8", 2);
				q.gf = g([118, 97, 108, 117, 101, 32, 60, 61, 32, 48, 120, 70, 70, 0], "i8", 2);
				q.hf = g([118, 97, 108, 117, 101, 32, 60, 61, 32, 48, 120, 70, 0], "i8", 2);
				q.jf = g([40, 108, 111, 32, 60, 61, 32, 48, 120, 70, 70, 41, 32, 38, 38, 32, 40, 104, 105, 32, 60, 61, 32, 48, 120, 70, 70, 41, 0], "i8", 2);
				q.l = g([105, 32, 60, 32, 109, 95, 115, 105, 122, 101, 0], "i8", 2);
				q.M = g([110, 117, 109, 32, 38, 38, 32, 40, 110, 117, 109, 32, 61, 61, 32, 126, 110, 117, 109, 95, 99, 104, 101, 99, 107, 41, 0], "i8", 2);
				q.h = g([1, 2, 2, 3, 3, 3, 3, 4], "i8", 2);
				var ta = g([0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 0, 1, 0, 0, 1, 2, 1, 2, 0, 0, 0, 1, 0, 2, 1, 0, 2, 0, 0, 1, 2, 3], "i8", 2);
				q.Wb = g([110, 101, 120, 116, 95, 108, 101, 118, 101, 108, 95, 111, 102, 115, 32, 62, 32, 99, 117, 114, 95, 108, 101, 118, 101, 108, 95, 111, 102, 115, 0], "i8", 2);
				q.Zb = g([40, 108, 101, 110, 32, 62, 61, 32, 49, 41, 32, 38, 38, 32, 40, 108, 101, 110, 32, 60, 61, 32, 99, 77, 97, 120, 69, 120, 112, 101, 99, 116, 101, 100, 67, 111, 100, 101, 83, 105, 122, 101, 41, 0], "i8", 2);
				var l = g(468, ["i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "*", 0, 0, 0, "i32", 0, 0, 0, "*", 0, 0, 0, "i32", 0, 0, 0, "*", 0, 0, 0, "i32", 0, 0, 0], 2);
				var xa = g(24, "i32", 2);
				q.kf = g([109, 97, 120, 32, 115, 121, 115, 116, 101, 109, 32, 98, 121, 116, 101, 115, 32, 61, 32, 37, 49, 48, 108, 117, 10, 0], "i8", 2);
				q.Oe = g([115, 121, 115, 116, 101, 109, 32, 98, 121, 116, 101, 115, 32, 32, 32, 32, 32, 61, 32, 37, 49, 48, 108, 117, 10, 0], "i8", 2);
				q.$e = g([105, 110, 32, 117, 115, 101, 32, 98, 121, 116, 101, 115, 32, 32, 32, 32, 32, 61, 32, 37, 49, 48, 108, 117, 10, 0], "i8", 2);
				g([0], "i8", 2);
				g(1, "void ()*", 2);
				var pd = g([0, 0, 0, 0, 0, 0, 0, 0, 6, 0, 0, 0, 8, 0, 0, 0, 10, 0, 0, 0], ["*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0], 2);
				g(1, "void*", 2);
				q.Yb = g([115, 116, 100, 58, 58, 98, 97, 100, 95, 97, 108, 108, 111, 99, 0], "i8", 2);
				var rd = g([0, 0, 0, 0, 0, 0, 0, 0, 6, 0, 0, 0, 12, 0, 0, 0, 14, 0, 0, 0], ["*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0, "*", 0, 0, 0], 2);
				g(1, "void*", 2);
				q.Hb = g([98, 97, 100, 95, 97, 114, 114, 97, 121, 95, 110, 101, 119, 95, 108, 101, 110, 103, 116, 104, 0], "i8", 2);
				q.Oa = g([83, 116, 57, 98, 97, 100, 95, 97, 108, 108, 111, 99, 0], "i8", 2);
				var xb = g(12, "*", 2);
				q.ra = g([83, 116, 50, 48, 98, 97, 100, 95, 97, 114, 114, 97, 121, 95, 110, 101, 119, 95, 108, 101, 110, 103, 116, 104, 0], "i8", 2);
				var Qb = g(12, "*", 2);
				b[pd + 4 >> 2] = xb;
				b[rd + 4 >> 2] = Qb;
				var yd = g([2, 0, 0, 0, 0], ["i8*", 0, 0, 0, 0], 2);
				b[xb >> 2] = yd + 8 | 0;
				b[xb + 4 >> 2] = q.Oa | 0;
				b[xb + 8 >> 2] = qf;
				b[Qb >> 2] = yd + 8 | 0;
				b[Qb + 4 >> 2] = q.ra | 0;
				b[Qb + 8 >> 2] = xb;
				var Ma = [0, 0, Pd, 0, Rd, 0, hc, 0, df, 0, bf, 0, gf, 0, cf, 0, Ha, 0, ae, 0, ya, 0, Kc, 0, od, 0, ff, 0];
				w.FUNCTION_TABLE = Ma;
				w.run = td;
				p(xd);
				w.noInitialRun && (mc++,
				w.monitorRunDependencies && w.monitorRunDependencies(mc));
				0 == mc && td();
				this.a = w
			}
			;
			function Cd(c, d, e) {
				this.b = new qc(c);
				this.o = d;
				this.a = new Wb;
				this.l = e
			}
			Cd.prototype.c = function() {
				for (var c = this.b, d; d = c.D(); )
					switch (d) {
					case 2:
						d = c.f();
						c.O(c.a + d);
						this.a.textures.push(Dd(c, this.o));
						c.N();
						break;
					case 3:
						d = c.f();
						c.O(c.a + d);
						d = this.h();
						this.a.transformInfo[d.meshId] = d;
						c.N();
						break;
					case 4:
						var e = c.f() / 4;
						this.a.projectionOrigin = new Float32Array(e);
						for (d = 0; d < e; ++d)
							this.a.projectionOrigin[d] = c.$();
						break;
					default:
						c.B()
					}
				c = [];
				e = this.a.textures;
				for (d = 0; d < e.length; d++)
					c.push(e[d].bytes.buffer);
				for (d = 0; d < this.a.transformInfo.length; ++d)
					if (this.a.transformInfo[d]) {
						c.push(this.a.transformInfo[d].transformTable.buffer);
						c.push(this.a.transformInfo[d].vertexTransformMap.buffer);
						var h = e[this.a.transformInfo[d].meshId];
						h = new Float32Array([.5, .5 - h.height, 1 / h.width, -1 / h.height]);
						this.a.transformInfo[d].uvOffsetAndScale = h;
						c.push(h.buffer)
					}
				this.a.projectionOrigin && c.push(this.a.projectionOrigin.buffer);
				this.l(this.a, c)
			}
			;
			Cd.prototype.h = function() {
				for (var c = this.b, d, e = new pc; d = c.D(); )
					switch (d) {
					case 1:
						d = c.f();
						for (var h = d / 6, k = new Float64Array(5 * h), g = c.data(), m = c.a, p = 0; p < h; ++p) {
							var v = m + 6 * p
							, z = g[v]
							, B = g[v + 1]
							, A = g[v + 2]
							, G = g[v + 3]
							, C = g[v + 4];
							v = g[v + 5];
							127 < G && (G -= 256);
							A += G << 8;
							127 < v && (v -= 256);
							C += v << 8;
							G = 2 * Math.PI * z / 256;
							z = Math.cos(G);
							G = Math.sin(G);
							B /= 255;
							k[5 * p] = 1 + (B - 1) * z * z;
							k[5 * p + 1] = (B - 1) * z * G;
							k[5 * p + 2] = 1 + (B - 1) * G * G;
							k[5 * p + 3] = A;
							k[5 * p + 4] = C
						}
						e.transformTable = k;
						c.U(d);
						break;
					case 2:
						d = c.f();
						h = d / 2;
						k = new Uint16Array(h);
						g = c.data();
						m = c.a;
						for (p = 0; p < h; ++p)
							k[p] = g[m + 2 * p] + (g[m + 2 * p + 1] << 8);
						e.vertexTransformMap = k;
						c.U(d);
						break;
					case 3:
						e.meshId = c.f();
						break;
					default:
						c.B()
					}
				return e
			}
			;
			var Ed = null;
			function Dd(c, d) {
				for (var e = c.data(), h, k = 1, g = 0, m = 0, p = 256, v = 256, z = 0, B = -1; h = c.D(); )
					switch (h) {
					case 1:
						m = c.Xc();  //length
						g || (g = c.a);
						c.U(m);  //移动数据的下标：c.a=c.a+m
						break;
					case 3:
						p = c.f();
						break;
					case 4:
						v = c.f();  //height
						break;
					case 2:
						k = c.f(); //format
						break;
					case 5:
						z = c.f();
						break;
					case 6:
						B = c.f();
						break;
					default:
						c.B()
					}
				c = new Ub; //创建一个texture的结构体对象数据
				switch (k) {
				case 1:
					c.bytes = new Uint8Array(m);
					c.bytes.set(e.subarray(g, g + m));
					break;
				case 6:
					Ed || (Ed = new Bd);
					h = Ed;
					var A = h.xb(m);  //分配texture内存
					h.lc(e, g, m, A); //g:偏移地址，m：texture数据长度， A:存放解析后的texture内存
					e = h.Ac(A, m);  //get decompressed_size
					g = h.xb(e);  //分配decompressed_size大小内存
					c.bytes = new Uint8Array(e); //分配decompressed_size大小字节数组
					h.sc(A, m, g, e);
					h.mc(g, e, c.bytes, 0);
					h.mb(A);
					h.mb(g);
					if (!d) {
						d = new Uint16Array(c.bytes.buffer);
						m = p;
						A = v;
						e = new Uint16Array(m * A);
						Ad || (Ad = new Uint16Array(4));
						g = Ad;
						h = m / 4;
						for (var G = A / 4, C = 0; C < G; C++)
							for (var R = 0; R < h; R++) {
								A = 4 * (C * h + R);
								g[0] = d[A];
								g[1] = d[A + 1];
								var L = g[0] & 31;
								var O = g[0] & 2016;
								var sa = g[0] & 63488;
								var ka = g[1] & 31;
								var qa = g[1] & 2016;
								var P = g[1] & 63488;
								g[2] = 5 * L + 3 * ka >> 3 | 5 * O + 3 * qa >> 3 & 2016 | 5 * sa + 3 * P >> 3 & 63488;
								g[3] = 5 * ka + 3 * L >> 3 | 5 * qa + 3 * O >> 3 & 2016 | 5 * P + 3 * sa >> 3 & 63488;
								O = 4 * C * m + 4 * R;
								L = d[A + 2];
								e[O] = g[L & 3];
								e[O + 1] = g[L >> 2 & 3];
								e[O + 2] = g[L >> 4 & 3];
								e[O + 3] = g[L >> 6 & 3];
								O += m;
								e[O] = g[L >> 8 & 3];
								e[O + 1] = g[L >> 10 & 3];
								e[O + 2] = g[L >> 12 & 3];
								e[O + 3] = g[L >> 14];
								L = d[A + 3];
								O += m;
								e[O] = g[L & 3];
								e[O + 1] = g[L >> 2 & 3];
								e[O + 2] = g[L >> 4 & 3];
								e[O + 3] = g[L >> 6 & 3];
								O += m;
								e[O] = g[L >> 8 & 3];
								e[O + 1] = g[L >> 10 & 3];
								e[O + 2] = g[L >> 12 & 3];
								e[O + 3] = g[L >> 14]
							}
						c.bytes = new Uint8Array(e.buffer)
					}
				}
				c.textureFormat = k;
				c.width = p;
				c.height = v;
				c.viewDirection = z;
				c.meshId = B;
				return c
			}
			;function Fd(c, d, e, h) {
				this.b = new qc(c);
				this.u = d;
				this.h = e;
				this.a = new Sb;
				this.l = [];
				this.o = h;
				this.c = null
			}
			T = Fd.prototype;
			T.Fa = function() {
				for (var c = this.b, d; d = c.D(); )
					switch (d) {
					case 1:
						var e = c.f() / 8, h = this.a.matrixGlobeFromMesh = new Float64Array(16);
						for (d = 0; d < e; d++)
							h[d] = c.ua();
						this.a.matrixMeshFromGlobe = new Float64Array(16);
						d = this.a.matrixMeshFromGlobe;
						e = h[0];
						var k = h[1]
						, g = h[2]
						, m = h[3]
						, p = h[4]
						, v = h[5]
						, z = h[6]
						, B = h[7]
						, A = h[8]
						, G = h[9]
						, C = h[10]
						, R = h[11]
						, L = h[12]
						, O = h[13]
						, sa = h[14];
						h = h[15];
						var ka = e * v - k * p
						, qa = e * z - g * p
						, P = e * B - m * p
						, la = k * z - g * v
						, Ea = k * B - m * v
						, J = g * B - m * z
						, aa = A * O - G * L
						, Ja = A * sa - C * L
						, Ua = A * h - R * L
						, ab = G * sa - C * O
						, Ya = G * h - R * O
						, Va = C * h - R * sa
						, va = ka * Va - qa * Ya + P * ab + la * Ua - Ea * Ja + J * aa;
						0 != va && (va = 1 / va,
						d[0] = (v * Va - z * Ya + B * ab) * va,
						d[1] = (-k * Va + g * Ya - m * ab) * va,
						d[2] = (O * J - sa * Ea + h * la) * va,
						d[3] = (-G * J + C * Ea - R * la) * va,
						d[4] = (-p * Va + z * Ua - B * Ja) * va,
						d[5] = (e * Va - g * Ua + m * Ja) * va,
						d[6] = (-L * J + sa * P - h * qa) * va,
						d[7] = (A * J - C * P + R * qa) * va,
						d[8] = (p * Ya - v * Ua + B * aa) * va,
						d[9] = (-e * Ya + k * Ua - m * aa) * va,
						d[10] = (L * Ea - O * P + h * ka) * va,
						d[11] = (-A * Ea + G * P - R * ka) * va,
						d[12] = (-p * ab + v * Ja - z * aa) * va,
						d[13] = (e * ab - k * Ja + g * aa) * va,
						d[14] = (-L * la + O * qa - sa * ka) * va,
						d[15] = (A * la - G * qa + C * ka) * va);
						break;
					case 2:
						d = c.f();
						c.O(c.a + d);
						this.a.meshes.push(this.Ja());
						c.N();
						break;
					case 3:
						d = c.f();
						this.a.copyrightIds ? this.a.copyrightIds.push(d) : this.a.copyrightIds = [d];
						break;
					case 6:
						d = c.f();
						c.O(c.a + d);
						this.a.waterMesh = this.Ja();
						c.N();
						break;
					case 7:
						d = c.f();
						c.O(c.a + d);
						this.a.overlaySurfaceMeshes.push(this.Ja());
						c.N();
						break;
					case 8:
						this.h ? this.ad() : c.B();
						break;
					default:
						c.B()
					}
				this.oc();
				if (this.h)
					for (d = 0; d < this.a.meshes.length; ++d)
						this.uc(this.a.meshes[d]);
				c = [];
				c.push(this.a.matrixGlobeFromMesh.buffer);
				c.push(this.a.matrixMeshFromGlobe.buffer);
				e = this.a.meshes;
				for (d = 0; d < e.length; d++)
					c.push(e[d].vertices.buffer),
					c.push(e[d].uvOffsetAndScale.buffer),
					c.push(e[d].layerBounds.buffer),
					c.push(e[d].indices.buffer),
					e[d].normals && c.push(e[d].normals.buffer),
					(k = e[d].texture) && c.push(k.bytes.buffer);
				e = this.a.overlaySurfaceMeshes;
				for (d = 0; d < e.length; d++)
					c.push(e[d].vertices.buffer),
					c.push(e[d].layerBounds.buffer),
					c.push(e[d].indices.buffer),
					e[d].normals && c.push(e[d].normals.buffer);
				if (d = this.a.waterMesh)
					c.push(d.vertices.buffer),
					c.push(d.vertexAlphas.buffer),
					c.push(d.layerBounds.buffer),
					c.push(d.indices.buffer),
					d.normals && c.push(d.normals.buffer);
				c.push(this.a.bvhNodes.buffer);
				c.push(this.a.bvhTriPermutation.buffer);
				this.o(this.a, c)
			}
			;
			T.oc = function() {
				for (var c = this.a, d = c.meshes.slice(), e = 0; e < c.overlaySurfaceMeshes.length; e++)
					d.push(c.overlaySurfaceMeshes[e]);
				c.waterMesh && d.push(c.waterMesh);
				if (0 != d.length) {
					c = new zd(d);
					for (d = c.start(); null != d; )
						d = d.apply(c);
					this.a.bvhNodes = c.hc();
					this.a.bvhTriPermutation = c.c
				}
			}
			;
			T.Ja = function() {
				var c = this.b
				, d = new Tb
				, e = [];
				this.l.push(e);
				for (var h; h = c.D(); )
					switch (h) {
					case 1:
						this.fd(d);
						break;
					case 3:
						this.Wc(d);
						break;
					case 6:
						h = c.f();
						c.O(c.a + h);
						d.texture = Dd(c, this.u);
						c.N();
						break;
					case 7:
						this.dd(d);
						break;
					case 8:
						this.Yc(d, e);
						break;
					case 9:
						this.ed(d);
						break;
					case 10:
						var k = c.f() / 4, g = d.uvOffsetAndScale = new Float32Array(4);
						for (h = 0; h < k; h++)
							g[h] = c.$();
						break;
					case 11:
						this.h ? this.Zc(d) : c.B();
						break;
					case 12:
						d.meshId = c.f();
						break;
					default:
						c.B()
					}
				d.uvOffsetAndScale && (d.uvOffsetAndScale[1] -= 1 / d.uvOffsetAndScale[3],
				d.uvOffsetAndScale[3] *= -1);
				c = d.vertices;
				k = d.indices;
				for (var m = g = 0; m < e.length; m++) {
					var p = m & 7;
					0 < e[m] && (this.a.nonEmptyOctants |= 1 << p);
					for (h = 0; h < e[m]; h++) {
						var v = 8 * k[g++] + 3;
						c[v] = p
					}
				}
				return d
			}
			;
			T.Wc = function(c) {
				var d = this.b;
				d.f();
				for (var e = d.f(), h = c.indices = new Uint16Array(e), k = 0, g = 0, m, p = 0, v = 0, z = 0; z < e; z++) {
					var B = d.f();
					m = p;
					p = v;
					v = k - B;
					h[z] = v;
					m != p && p != v && m != v && g++;
					B || k++
				}
				c.numNonDegenerateTriangles = g
			}
			;
			T.fd = function(c) {
				var d = this.b
				, e = d.data()
				, h = d.f()
				, k = h / 3;
				c = c.vertices = new Uint8Array(8 * k);
				for (var g = d.a, m = 0; 2 >= m; m++) {
					var p = e[g++];
					c[m] = p;
					for (var v = 1; v < k; v++)
						p = p + e[g++] & 255,
						c[8 * v + m] = p
				}
				d.U(h)
			}
			;
			T.ed = function(c) {
				var d = this.b
				, e = d.data()
				, h = d.f();
				c = c.vertexAlphas = new Uint8Array(h);
				var k = d.a
				, g = e[k++];
				c[0] = g;
				for (var m = 1; m < h; m++)
					g = g + e[k++] & 255,
					c[m] = g;
				d.U(h)
			}
			;
			T.dd = function(c) {
				for (var d = this.b, e = d.data(), h = (d.f() - 4) / 4, k = d.ia(), g = d.ia(), m = 0, p = 0, v = d.a, z = c.vertices, B = 0; B < h; B++) {
					var A = e[v + 1 * h + B] + (e[v + 3 * h + B] << 8);
					m = (m + (e[v + 0 * h + B] + (e[v + 2 * h + B] << 8))) % (k + 1);
					p = (p + A) % (g + 1);
					A = 8 * B + 4;
					z[A + 0] = m & 255;
					z[A + 1] = m >> 8;
					z[A + 2] = p & 255;
					z[A + 3] = p >> 8
				}
				c.uvOffsetAndScale || (c.uvOffsetAndScale = new Float32Array([.5, .5, 1 / (k + 1), 1 / (g + 1)]));
				d.U(4 * h)
			}
			;
			T.Yc = function(c, d) {
				var e = this.b;
				e.f();
				var h = e.f()
				, k = 0
				, g = c.layerBounds = new Uint32Array(10)
				, m = 0;
				c = c.octantCounts = new Uint32Array(72);
				for (var p = 0; p < h; p++) {
					0 == p % 8 && (g[m++] = k);
					var v = e.f();
					d.push(v);
					c[8 * (m - 1) + (p & 7)] = v;
					k += v
				}
				for (; 10 > m; m++)
					g[m] = k
			}
			;
			function Gd(c, d) {
				if (4 >= d)
					return (c << d) + (c & (1 << d) - 1);
				if (6 >= d) {
					var e = 8 - d;
					return (c << d) + (c << d >> e) + (c << d >> e >> e) + (c << d >> e >> e >> e)
				}
				return -(c & 1)
			}
			function Hd(c, d) {
				return c < d ? c : d
			}
			function Id(c) {
				c = Math.round(c);
				return Hd(0 > c ? 0 : c, 255)
			}
			T.ad = function() {
				var c = this.b
				, d = c.data()
				, e = c.f()
				, h = c.a
				, k = d[h] + (d[h + 1] << 8)
				, g = d[h + 2];
				h += 3;
				this.c = new Uint8Array(3 * k);
				for (var m = 0; m < e; ++m) {
					var p = d[h + m]
					, v = d[h + k + m];
					p = Gd(p, g);
					v = Gd(v, g);
					var z = p / 255
					, B = v / 255;
					v = this.c;
					p = 3 * m;
					var A = z
					, G = B
					, C = A + G
					, R = A - G
					, L = 1;
					.5 <= C && 1.5 >= C && -.5 <= R && .5 >= R || (L = -1,
					.5 >= C ? (A = .5 - B,
					G = .5 - z) : 1.5 <= C ? (A = 1.5 - B,
					G = 1.5 - z) : -.5 >= R ? (A = B - .5,
					G = z + .5) : (A = B + .5,
					G = z - .5),
					C = A + G,
					R = A - G);
					z = Hd(Hd(2 * C - 1, 3 - 2 * C), Hd(2 * R + 1, 1 - 2 * R)) * L;
					A = 2 * A - 1;
					G = 2 * G - 1;
					B = 127 / Math.sqrt(z * z + A * A + G * G);
					v[p + 0] = Id(B * z + 127);
					v[p + 1] = Id(B * A + 127);
					v[p + 2] = Id(B * G + 127)
				}
				c.U(e)
			}
			;
			T.Zc = function(c) {
				var d = this.b
				, e = d.data()
				, h = d.f()
				, k = d.a;
				c.normals = new Uint8Array(e.buffer.slice(k, k + h));
				d.U(h)
			}
			;
			T.uc = function(c) {
				var d = c.normals;
				if (d && this.c)
					for (h = d.length / 2,
					c.normals = new Uint8Array(4 * h),
					k = 0; k < h; ++k) {
						var e = d[k] + (d[h + k] << 8);
						c.normals[4 * k] = this.c[3 * e];
						c.normals[4 * k + 1] = this.c[3 * e + 1];
						c.normals[4 * k + 2] = this.c[3 * e + 2];
						c.normals[4 * k + 3] = 0
					}
				else {
					var h = c.vertices.length / 8;
					c.normals = new Uint8Array(4 * h);
					for (var k = 0; k < h; ++k)
						c.normals[4 * k] = 127,
						c.normals[4 * k + 1] = 127,
						c.normals[4 * k + 2] = 127,
						c.normals[4 * k + 3] = 0
				}
			}
			;
			var Jd = [];
			function rf(c) {
				this.b = c;
				c.webkitPostMessage && (c.postMessage = c.webkitPostMessage);
				var d = this;
				c.onmessage = function(c) {
					d.a(c)
				}
			}
			rf.prototype.a = function(c) {
				var d = Fb(), e = c.data.id, h = c.data.command;
				c = c.data.payload;
				var k = this.b;
				if (void 0 !== e && void 0 !== h && c) {
					c = new Uint8Array(c);
					var g = function(c, g) {
						var h = Fb() - d, m = {};
						m.id = e;
						m.time = h;
						m.payload = c;
						m.logs = [];
						m.complete = !0;
						k.postMessage(m, g)
					};
					0 == h ? (h = new rc(c, g), h.Nc()) :
					1 == h ? (h = new Fd(c, !0, !1, g), h.Fa()) :
					2 == h ? (h = new Fd(c, !1, !0, g), h.Fa()) :
					3 == h ? (h = new Fd(c, !0, !0, g), h.Fa()) :
					4 == h ? (h = new Cd(c, !0, g), h.c()) :
					5 == h ? (h = new Cd(c, !1, g), h.c()) :
					Jd.push("Bad DecodeTaskCommand: " + h)
				}
			}
			;
			new rf(self);  //入口函数
		}
		).call(this);
	};

	const callbacks = {};
	const self = {
		postMessage: function (p, g) {
			callbacks[p.id].resolve(p);
			delete callbacks[event.id];
		}
	}

	code();

	return async function decode(command, payload) {
		const id = uuidv4();
		return await new Promise(function (resolve, reject) {
			callbacks[id] = { resolve, reject }
			self.onmessage({ data: { id, command, payload } });;
		});
	}
})();