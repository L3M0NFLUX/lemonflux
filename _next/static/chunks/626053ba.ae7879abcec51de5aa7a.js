(window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
    [4], {
        "f+2g": function(e, t, i) {
            var r = r || {},
                a = {
                    REVISION: "66.87"
                };
            r.console = r.console || {
                    info: function() {},
                    log: function() {},
                    debug: function() {},
                    warn: function() {},
                    error: function() {}
                },
                function() {
                    for (var e = 0, t = ["ms", "moz", "webkit", "o"], i = 0; i < t.length && !r.requestAnimationFrame; ++i) r.requestAnimationFrame = r[t[i] + "RequestAnimationFrame"], r.cancelAnimationFrame = r[t[i] + "CancelAnimationFrame"] || r[t[i] + "CancelRequestAnimationFrame"];
                    void 0 === r.requestAnimationFrame && void 0 !== r.setTimeout && (r.requestAnimationFrame = function(t) {
                        var i = Date.now(),
                            a = Math.max(0, 16 - (i - e)),
                            o = r.setTimeout((function() {
                                t(i + a)
                            }), a);
                        return e = i + a, o
                    }), void 0 === r.cancelAnimationFrame && void 0 !== r.clearTimeout && (r.cancelAnimationFrame = function(e) {
                        r.clearTimeout(e)
                    })
                }(), a.ExceptionErrorHandler = function(e, t) {
                    console.error(e), console.error(t);
                    var i = new Error(e);
                    throw i.optionalData = t, i
                }, a.ConsoleErrorHandler = function(e, t) {
                    console.error(e), console.error(t)
                }, a.ConsoleWarningHandler = function(e, t) {
                    console.warn(e), console.warn(t)
                }, a.NullHandler = function(e, t) {}, a.onerror = a.ExceptionErrorHandler, a.onwarning = a.ConsoleWarningHandler, a.CullFaceNone = 0, a.CullFaceBack = 1, a.CullFaceFront = 2, a.CullFaceFrontBack = 3, a.FrontFaceDirectionCW = 0, a.FrontFaceDirectionCCW = 1, a.BasicShadowMap = 0, a.PCFShadowMap = 1, a.PCFSoftShadowMap = 2, a.FrontSide = 0, a.BackSide = 1, a.DoubleSide = 2, a.NoShading = 0, a.FlatShading = 1, a.SmoothShading = 2, a.NoColors = 0, a.FaceColors = 1, a.VertexColors = 2, a.NoBlending = 0, a.NormalBlending = 1, a.AdditiveBlending = 2, a.SubtractiveBlending = 3, a.MultiplyBlending = 4, a.CustomBlending = 5, a.AddEquation = 100, a.SubtractEquation = 101, a.ReverseSubtractEquation = 102, a.ZeroFactor = 200, a.OneFactor = 201, a.SrcColorFactor = 202, a.OneMinusSrcColorFactor = 203, a.SrcAlphaFactor = 204, a.OneMinusSrcAlphaFactor = 205, a.DstAlphaFactor = 206, a.OneMinusDstAlphaFactor = 207, a.DstColorFactor = 208, a.OneMinusDstColorFactor = 209, a.SrcAlphaSaturateFactor = 210, a.MultiplyOperation = 0, a.MixOperation = 1, a.AddOperation = 2, a.UVMapping = function() {}, a.CubeReflectionMapping = function() {}, a.CubeRefractionMapping = function() {}, a.SphericalReflectionMapping = function() {}, a.SphericalRefractionMapping = function() {}, a.RepeatWrapping = 1e3, a.ClampToEdgeWrapping = 1001, a.MirroredRepeatWrapping = 1002, a.NearestFilter = 1003, a.NearestMipMapNearestFilter = 1004, a.NearestMipMapLinearFilter = 1005, a.LinearFilter = 1006, a.LinearMipMapNearestFilter = 1007, a.LinearMipMapLinearFilter = 1008, a.Linear = 3e3, a.sRGB = 3001, a.RGBE = 3002, a.LogLUV = 3003, a.RGBM7 = 3004, a.RGBM16 = 3005, a.UnsignedByteType = 1009, a.ByteType = 1010, a.ShortType = 1011, a.UnsignedShortType = 1012, a.IntType = 1013, a.UnsignedIntType = 1014, a.FloatType = 1015, a.HalfType = 2005, a.UnsignedShort4444Type = 1016, a.UnsignedShort5551Type = 1017, a.UnsignedShort565Type = 1018, a.AlphaFormat = 1019, a.RGBFormat = 1020, a.RGBAFormat = 1021, a.LuminanceFormat = 1022, a.LuminanceAlphaFormat = 1023, a.RGB_S3TC_DXT1_Format = 2001, a.RGBA_S3TC_DXT1_Format = 2002, a.RGBA_S3TC_DXT3_Format = 2003, a.RGBA_S3TC_DXT5_Format = 2004, a.Color = function(e) {
                    return 3 === arguments.length ? this.setRGB(arguments[0], arguments[1], arguments[2]) : this.set(e)
                }, a.Color.prototype = {
                    constructor: a.Color,
                    r: 1,
                    g: 1,
                    b: 1,
                    set: function(e) {
                        return e instanceof a.Color ? this.copy(e) : "number" === typeof e ? this.setHex(e) : "string" === typeof e && this.setStyle(e), this
                    },
                    setHex: function(e) {
                        return e = Math.floor(e), this.r = (e >> 16 & 255) / 255, this.g = (e >> 8 & 255) / 255, this.b = (255 & e) / 255, this
                    },
                    setRGB: function(e, t, i) {
                        return this.r = e, this.g = t, this.b = i, this
                    },
                    setHSL: function(e, t, i) {
                        if (0 === t) this.r = this.g = this.b = i;
                        else {
                            var r = function(e, t, i) {
                                    return i < 0 && (i += 1), i > 1 && (i -= 1), i < 1 / 6 ? e + 6 * (t - e) * i : i < .5 ? t : i < 2 / 3 ? e + 6 * (t - e) * (2 / 3 - i) : e
                                },
                                a = i <= .5 ? i * (1 + t) : i + t - i * t,
                                o = 2 * i - a;
                            this.r = r(o, a, e + 1 / 3), this.g = r(o, a, e), this.b = r(o, a, e - 1 / 3)
                        }
                        return this
                    },
                    setStyle: function(e) {
                        if (/^rgb\((\d+), ?(\d+), ?(\d+)\)$/i.test(e)) {
                            var t = /^rgb\((\d+), ?(\d+), ?(\d+)\)$/i.exec(e);
                            return this.r = Math.min(255, parseInt(t[1], 10)) / 255, this.g = Math.min(255, parseInt(t[2], 10)) / 255, this.b = Math.min(255, parseInt(t[3], 10)) / 255, this
                        }
                        if (/^rgb\((\d+)\%, ?(\d+)\%, ?(\d+)\%\)$/i.test(e)) {
                            t = /^rgb\((\d+)\%, ?(\d+)\%, ?(\d+)\%\)$/i.exec(e);
                            return this.r = Math.min(100, parseInt(t[1], 10)) / 100, this.g = Math.min(100, parseInt(t[2], 10)) / 100, this.b = Math.min(100, parseInt(t[3], 10)) / 100, this
                        }
                        if (/^\#([0-9a-f]{6})$/i.test(e)) {
                            t = /^\#([0-9a-f]{6})$/i.exec(e);
                            return this.setHex(parseInt(t[1], 16)), this
                        }
                        if (/^\#([0-9a-f])([0-9a-f])([0-9a-f])$/i.test(e)) {
                            t = /^\#([0-9a-f])([0-9a-f])([0-9a-f])$/i.exec(e);
                            return this.setHex(parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3], 16)), this
                        }
                        if (/^(\w+)$/i.test(e)) return this.setHex(a.ColorKeywords[e]), this
                    },
                    copy: function(e) {
                        return this.r = e.r, this.g = e.g, this.b = e.b, this
                    },
                    copyGammaToLinear: function(e) {
                        return this.r = e.r * e.r, this.g = e.g * e.g, this.b = e.b * e.b, this
                    },
                    copyLinearToGamma: function(e) {
                        return this.r = Math.sqrt(e.r), this.g = Math.sqrt(e.g), this.b = Math.sqrt(e.b), this
                    },
                    convertGammaToLinear: function() {
                        var e = this.r,
                            t = this.g,
                            i = this.b;
                        return this.r = e * e, this.g = t * t, this.b = i * i, this
                    },
                    convertLinearToGamma: function() {
                        return this.r = Math.sqrt(this.r), this.g = Math.sqrt(this.g), this.b = Math.sqrt(this.b), this
                    },
                    getHex: function() {
                        return 255 * this.r << 16 ^ 255 * this.g << 8 ^ 255 * this.b << 0
                    },
                    getHexString: function() {
                        return ("000000" + this.getHex().toString(16)).slice(-6)
                    },
                    getHSL: function(e) {
                        var t, i, r = e || {
                                h: 0,
                                s: 0,
                                l: 0
                            },
                            a = this.r,
                            o = this.g,
                            n = this.b,
                            s = Math.max(a, o, n),
                            l = Math.min(a, o, n),
                            h = (l + s) / 2;
                        if (l === s) t = 0, i = 0;
                        else {
                            var c = s - l;
                            switch (i = h <= .5 ? c / (s + l) : c / (2 - s - l), s) {
                                case a:
                                    t = (o - n) / c + (o < n ? 6 : 0);
                                    break;
                                case o:
                                    t = (n - a) / c + 2;
                                    break;
                                case n:
                                    t = (a - o) / c + 4
                            }
                            t /= 6
                        }
                        return r.h = t, r.s = i, r.l = h, r
                    },
                    getStyle: function() {
                        return "rgb(" + (255 * this.r | 0) + "," + (255 * this.g | 0) + "," + (255 * this.b | 0) + ")"
                    },
                    offsetHSL: function(e, t, i) {
                        var r = this.getHSL();
                        return r.h += e, r.s += t, r.l += i, this.setHSL(r.h, r.s, r.l), this
                    },
                    add: function(e) {
                        return this.r += e.r, this.g += e.g, this.b += e.b, this
                    },
                    addColors: function(e, t) {
                        return this.r = e.r + t.r, this.g = e.g + t.g, this.b = e.b + t.b, this
                    },
                    addScalar: function(e) {
                        return this.r += e, this.g += e, this.b += e, this
                    },
                    multiply: function(e) {
                        return this.r *= e.r, this.g *= e.g, this.b *= e.b, this
                    },
                    multiplyScalar: function(e) {
                        return this.r *= e, this.g *= e, this.b *= e, this
                    },
                    lerp: function(e, t) {
                        return this.r += (e.r - this.r) * t, this.g += (e.g - this.g) * t, this.b += (e.b - this.b) * t, this
                    },
                    equals: function(e) {
                        return e.r === this.r && e.g === this.g && e.b === this.b
                    },
                    fromArray: function(e) {
                        return this.r = e[0], this.g = e[1], this.b = e[2], this
                    },
                    toArray: function() {
                        return [this.r, this.g, this.b]
                    },
                    clone: function() {
                        return (new a.Color).setRGB(this.r, this.g, this.b)
                    }
                }, a.ColorKeywords = {
                    aliceblue: 15792383,
                    antiquewhite: 16444375,
                    aqua: 65535,
                    aquamarine: 8388564,
                    azure: 15794175,
                    beige: 16119260,
                    bisque: 16770244,
                    black: 0,
                    blanchedalmond: 16772045,
                    blue: 255,
                    blueviolet: 9055202,
                    brown: 10824234,
                    burlywood: 14596231,
                    cadetblue: 6266528,
                    chartreuse: 8388352,
                    chocolate: 13789470,
                    coral: 16744272,
                    cornflowerblue: 6591981,
                    cornsilk: 16775388,
                    crimson: 14423100,
                    cyan: 65535,
                    darkblue: 139,
                    darkcyan: 35723,
                    darkgoldenrod: 12092939,
                    darkgray: 11119017,
                    darkgreen: 25600,
                    darkgrey: 11119017,
                    darkkhaki: 12433259,
                    darkmagenta: 9109643,
                    darkolivegreen: 5597999,
                    darkorange: 16747520,
                    darkorchid: 10040012,
                    darkred: 9109504,
                    darksalmon: 15308410,
                    darkseagreen: 9419919,
                    darkslateblue: 4734347,
                    darkslategray: 3100495,
                    darkslategrey: 3100495,
                    darkturquoise: 52945,
                    darkviolet: 9699539,
                    deeppink: 16716947,
                    deepskyblue: 49151,
                    dimgray: 6908265,
                    dimgrey: 6908265,
                    dodgerblue: 2003199,
                    firebrick: 11674146,
                    floralwhite: 16775920,
                    forestgreen: 2263842,
                    fuchsia: 16711935,
                    gainsboro: 14474460,
                    ghostwhite: 16316671,
                    gold: 16766720,
                    goldenrod: 14329120,
                    gray: 8421504,
                    green: 32768,
                    greenyellow: 11403055,
                    grey: 8421504,
                    honeydew: 15794160,
                    hotpink: 16738740,
                    indianred: 13458524,
                    indigo: 4915330,
                    ivory: 16777200,
                    khaki: 15787660,
                    lavender: 15132410,
                    lavenderblush: 16773365,
                    lawngreen: 8190976,
                    lemonchiffon: 16775885,
                    lightblue: 11393254,
                    lightcoral: 15761536,
                    lightcyan: 14745599,
                    lightgoldenrodyellow: 16448210,
                    lightgray: 13882323,
                    lightgreen: 9498256,
                    lightgrey: 13882323,
                    lightpink: 16758465,
                    lightsalmon: 16752762,
                    lightseagreen: 2142890,
                    lightskyblue: 8900346,
                    lightslategray: 7833753,
                    lightslategrey: 7833753,
                    lightsteelblue: 11584734,
                    lightyellow: 16777184,
                    lime: 65280,
                    limegreen: 3329330,
                    linen: 16445670,
                    magenta: 16711935,
                    maroon: 8388608,
                    mediumaquamarine: 6737322,
                    mediumblue: 205,
                    mediumorchid: 12211667,
                    mediumpurple: 9662683,
                    mediumseagreen: 3978097,
                    mediumslateblue: 8087790,
                    mediumspringgreen: 64154,
                    mediumturquoise: 4772300,
                    mediumvioletred: 13047173,
                    midnightblue: 1644912,
                    mintcream: 16121850,
                    mistyrose: 16770273,
                    moccasin: 16770229,
                    navajowhite: 16768685,
                    navy: 128,
                    oldlace: 16643558,
                    olive: 8421376,
                    olivedrab: 7048739,
                    orange: 16753920,
                    orangered: 16729344,
                    orchid: 14315734,
                    palegoldenrod: 15657130,
                    palegreen: 10025880,
                    paleturquoise: 11529966,
                    palevioletred: 14381203,
                    papayawhip: 16773077,
                    peachpuff: 16767673,
                    peru: 13468991,
                    pink: 16761035,
                    plum: 14524637,
                    powderblue: 11591910,
                    purple: 8388736,
                    red: 16711680,
                    rosybrown: 12357519,
                    royalblue: 4286945,
                    saddlebrown: 9127187,
                    salmon: 16416882,
                    sandybrown: 16032864,
                    seagreen: 3050327,
                    seashell: 16774638,
                    sienna: 10506797,
                    silver: 12632256,
                    skyblue: 8900331,
                    slateblue: 6970061,
                    slategray: 7372944,
                    slategrey: 7372944,
                    snow: 16775930,
                    springgreen: 65407,
                    steelblue: 4620980,
                    tan: 13808780,
                    teal: 32896,
                    thistle: 14204888,
                    tomato: 16737095,
                    turquoise: 4251856,
                    violet: 15631086,
                    wheat: 16113331,
                    white: 16777215,
                    whitesmoke: 16119285,
                    yellow: 16776960,
                    yellowgreen: 10145074
                }, a.Quaternion = function(e, t, i, r) {
                    this._x = e || 0, this._y = t || 0, this._z = i || 0, this._w = void 0 !== r ? r : 1
                }, a.Quaternion.prototype = {
                    constructor: a.Quaternion,
                    _x: 0,
                    _y: 0,
                    _z: 0,
                    _w: 0,
                    _euler: void 0,
                    _updateEuler: function(e) {
                        void 0 !== this._euler && this._euler.setFromQuaternion(this, void 0, !1)
                    },
                    get x() {
                        return this._x
                    },
                    set x(e) {
                        this._x = e, this._updateEuler()
                    },
                    get y() {
                        return this._y
                    },
                    set y(e) {
                        this._y = e, this._updateEuler()
                    },
                    get z() {
                        return this._z
                    },
                    set z(e) {
                        this._z = e, this._updateEuler()
                    },
                    get w() {
                        return this._w
                    },
                    set w(e) {
                        this._w = e, this._updateEuler()
                    },
                    set: function(e, t, i, r) {
                        return this._x = e, this._y = t, this._z = i, this._w = r, this._updateEuler(), this
                    },
                    copy: function(e) {
                        return this._x = e._x, this._y = e._y, this._z = e._z, this._w = e._w, this._updateEuler(), this
                    },
                    setFromEuler: function(e, t) {
                        if (!(e instanceof a.Euler)) return a.onerror("expecting a Euler", e);
                        var i = Math.cos(e._x / 2),
                            r = Math.cos(e._y / 2),
                            o = Math.cos(e._z / 2),
                            n = Math.sin(e._x / 2),
                            s = Math.sin(e._y / 2),
                            l = Math.sin(e._z / 2);
                        return "XYZ" === e.order ? (this._x = n * r * o + i * s * l, this._y = i * s * o - n * r * l, this._z = i * r * l + n * s * o, this._w = i * r * o - n * s * l) : "YXZ" === e.order ? (this._x = n * r * o + i * s * l, this._y = i * s * o - n * r * l, this._z = i * r * l - n * s * o, this._w = i * r * o + n * s * l) : "ZXY" === e.order ? (this._x = n * r * o - i * s * l, this._y = i * s * o + n * r * l, this._z = i * r * l + n * s * o, this._w = i * r * o - n * s * l) : "ZYX" === e.order ? (this._x = n * r * o - i * s * l, this._y = i * s * o + n * r * l, this._z = i * r * l - n * s * o, this._w = i * r * o + n * s * l) : "YZX" === e.order ? (this._x = n * r * o + i * s * l, this._y = i * s * o + n * r * l, this._z = i * r * l - n * s * o, this._w = i * r * o - n * s * l) : "XZY" === e.order && (this._x = n * r * o - i * s * l, this._y = i * s * o - n * r * l, this._z = i * r * l + n * s * o, this._w = i * r * o + n * s * l), !1 !== t && this._updateEuler(), this
                    },
                    setFromAxisAngle: function(e, t) {
                        var i = t / 2,
                            r = Math.sin(i);
                        return this._x = e.x * r, this._y = e.y * r, this._z = e.z * r, this._w = Math.cos(i), this._updateEuler(), this
                    },
                    setFromRotationMatrix: function(e) {
                        var t, i = e.elements,
                            r = i[0],
                            a = i[4],
                            o = i[8],
                            n = i[1],
                            s = i[5],
                            l = i[9],
                            h = i[2],
                            c = i[6],
                            u = i[10],
                            f = r + s + u;
                        return f > 0 ? (t = .5 / Math.sqrt(f + 1), this._w = .25 / t, this._x = (c - l) * t, this._y = (o - h) * t, this._z = (n - a) * t) : r > s && r > u ? (t = 2 * Math.sqrt(1 + r - s - u), this._w = (c - l) / t, this._x = .25 * t, this._y = (a + n) / t, this._z = (o + h) / t) : s > u ? (t = 2 * Math.sqrt(1 + s - r - u), this._w = (o - h) / t, this._x = (a + n) / t, this._y = .25 * t, this._z = (l + c) / t) : (t = 2 * Math.sqrt(1 + u - r - s), this._w = (n - a) / t, this._x = (o + h) / t, this._y = (l + c) / t, this._z = .25 * t), this._updateEuler(), this
                    },
                    inverse: function() {
                        return this.conjugate().normalize(), this
                    },
                    add: function(e) {
                        return this._x += e._x, this._y += e._y, this._z += e._z, this._w += e._w, this
                    },
                    sub: function(e) {
                        return this._x -= e._x, this._y -= e._y, this._z -= e._z, this._w -= e._w, this
                    },
                    multiplyScalar: function(e) {
                        return this._x *= e, this._y *= e, this._z *= e, this._w *= e, this
                    },
                    conjugate: function() {
                        return this._x *= -1, this._y *= -1, this._z *= -1, this._updateEuler(), this
                    },
                    lengthSq: function() {
                        return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w
                    },
                    length: function() {
                        return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w)
                    },
                    normalize: function() {
                        var e = this.length();
                        return 0 === e ? (this._x = 0, this._y = 0, this._z = 0, this._w = 1) : (e = 1 / e, this._x = this._x * e, this._y = this._y * e, this._z = this._z * e, this._w = this._w * e), this
                    },
                    multiply: function(e, t) {
                        return void 0 !== t ? (a.onwarning("DEPRECATED: Quaternion's .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."), this.multiplyQuaternions(e, t)) : this.multiplyQuaternions(this, e)
                    },
                    multiplyQuaternions: function(e, t) {
                        var i = e._x,
                            r = e._y,
                            a = e._z,
                            o = e._w,
                            n = t._x,
                            s = t._y,
                            l = t._z,
                            h = t._w;
                        return this._x = i * h + o * n + r * l - a * s, this._y = r * h + o * s + a * n - i * l, this._z = a * h + o * l + i * s - r * n, this._w = o * h - i * n - r * s - a * l, this._updateEuler(), this
                    },
                    multiplyVector3: function(e) {
                        return a.onwarning("DEPRECATED: Quaternion's .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead."), e.applyQuaternion(this)
                    },
                    slerp: function(e, t) {
                        var i = this._x,
                            r = this._y,
                            a = this._z,
                            o = this._w,
                            n = o * e._w + i * e._x + r * e._y + a * e._z;
                        if (n < 0 ? (this._w = -e._w, this._x = -e._x, this._y = -e._y, this._z = -e._z, n = -n) : this.copy(e), n >= 1) return this._w = o, this._x = i, this._y = r, this._z = a, this;
                        var s = Math.acos(n),
                            l = Math.sqrt(1 - n * n);
                        if (Math.abs(l) < .001) return this._w = .5 * (o + this._w), this._x = .5 * (i + this._x), this._y = .5 * (r + this._y), this._z = .5 * (a + this._z), this;
                        var h = Math.sin((1 - t) * s) / l,
                            c = Math.sin(t * s) / l;
                        return this._w = o * h + this._w * c, this._x = i * h + this._x * c, this._y = r * h + this._y * c, this._z = a * h + this._z * c, this._updateEuler(), this
                    },
                    equals: function(e) {
                        return e._x === this._x && e._y === this._y && e._z === this._z && e._w === this._w
                    },
                    fromArray: function(e) {
                        return this._x = e[0], this._y = e[1], this._z = e[2], this._w = e[3], this._updateEuler(), this
                    },
                    toArray: function() {
                        return [this._x, this._y, this._z, this._w]
                    },
                    clone: function() {
                        return new a.Quaternion(this._x, this._y, this._z, this._w)
                    }
                }, a.Quaternion.slerp = function(e, t, i, r) {
                    return i.copy(e).slerp(t, r)
                }, a.Vector2 = function(e, t) {
                    this.x = e || 0, this.y = t || 0
                }, a.Vector2.prototype = {
                    constructor: a.Vector2,
                    set: function(e, t) {
                        return this.x = e, this.y = t, this
                    },
                    setX: function(e) {
                        return this.x = e, this
                    },
                    setY: function(e) {
                        return this.y = e, this
                    },
                    setComponent: function(e, t) {
                        switch (e) {
                            case 0:
                                this.x = t;
                                break;
                            case 1:
                                this.y = t;
                                break;
                            default:
                                return a.onerror("index is out of range: " + e)
                        }
                    },
                    getComponent: function(e) {
                        switch (e) {
                            case 0:
                                return this.x;
                            case 1:
                                return this.y;
                            default:
                                return a.onerror("index is out of range: " + e)
                        }
                    },
                    copy: function(e) {
                        return this.x = e.x, this.y = e.y, this
                    },
                    add: function(e, t) {
                        return void 0 !== t ? (a.onwarning("DEPRECATED: Vector2's .add() now only accepts one argument. Use .addVectors( a, b ) instead."), this.addVectors(e, t)) : (this.x += e.x, this.y += e.y, this)
                    },
                    addVectors: function(e, t) {
                        return this.x = e.x + t.x, this.y = e.y + t.y, this
                    },
                    addScalar: function(e) {
                        return this.x += e, this.y += e, this
                    },
                    sub: function(e, t) {
                        return void 0 !== t ? (a.onwarning("DEPRECATED: Vector2's .sub() now only accepts one argument. Use .subVectors( a, b ) instead."), this.subVectors(e, t)) : (this.x -= e.x, this.y -= e.y, this)
                    },
                    subVectors: function(e, t) {
                        return this.x = e.x - t.x, this.y = e.y - t.y, this
                    },
                    multiplyScalar: function(e) {
                        return this.x *= e, this.y *= e, this
                    },
                    divideScalar: function(e) {
                        if (0 !== e) {
                            var t = 1 / e;
                            this.x *= t, this.y *= t
                        } else this.x = 0, this.y = 0;
                        return this
                    },
                    min: function(e) {
                        return this.x > e.x && (this.x = e.x), this.y > e.y && (this.y = e.y), this
                    },
                    max: function(e) {
                        return this.x < e.x && (this.x = e.x), this.y < e.y && (this.y = e.y), this
                    },
                    clamp: function(e, t) {
                        return this.x < e.x ? this.x = e.x : this.x > t.x && (this.x = t.x), this.y < e.y ? this.y = e.y : this.y > t.y && (this.y = t.y), this
                    },
                    clampScalar: function() {
                        var e, t;
                        return function(i, r) {
                            return void 0 === e && (e = new a.Vector2, t = new a.Vector2), e.set(i, i), t.set(r, r), this.clamp(e, t)
                        }
                    }(),
                    floor: function() {
                        return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this
                    },
                    ceil: function() {
                        return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this
                    },
                    round: function() {
                        return this.x = Math.round(this.x), this.y = Math.round(this.y), this
                    },
                    roundToZero: function() {
                        return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this
                    },
                    negate: function() {
                        return this.multiplyScalar(-1)
                    },
                    dot: function(e) {
                        return this.x * e.x + this.y * e.y
                    },
                    lengthSq: function() {
                        return this.x * this.x + this.y * this.y
                    },
                    length: function() {
                        return Math.sqrt(this.x * this.x + this.y * this.y)
                    },
                    normalize: function() {
                        return this.divideScalar(this.length())
                    },
                    distanceTo: function(e) {
                        return Math.sqrt(this.distanceToSquared(e))
                    },
                    distanceToSquared: function(e) {
                        var t = this.x - e.x,
                            i = this.y - e.y;
                        return t * t + i * i
                    },
                    setLength: function(e) {
                        var t = this.length();
                        return 0 !== t && e !== t && this.multiplyScalar(e / t), this
                    },
                    lerp: function(e, t) {
                        return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this
                    },
                    equals: function(e) {
                        return e.x === this.x && e.y === this.y
                    },
                    fromArray: function(e) {
                        return this.x = e[0], this.y = e[1], this
                    },
                    toArray: function() {
                        return [this.x, this.y]
                    },
                    clone: function() {
                        return new a.Vector2(this.x, this.y)
                    }
                }, a.Vector3 = function(e, t, i) {
                    this.x = e || 0, this.y = t || 0, this.z = i || 0
                }, a.Vector3.prototype = {
                    constructor: a.Vector3,
                    set: function(e, t, i) {
                        return this.x = e, this.y = t, this.z = i, this
                    },
                    setX: function(e) {
                        return this.x = e, this
                    },
                    setY: function(e) {
                        return this.y = e, this
                    },
                    setZ: function(e) {
                        return this.z = e, this
                    },
                    setComponent: function(e, t) {
                        switch (e) {
                            case 0:
                                this.x = t;
                                break;
                            case 1:
                                this.y = t;
                                break;
                            case 2:
                                this.z = t;
                                break;
                            default:
                                return a.onerror("index is out of range: " + e)
                        }
                    },
                    getComponent: function(e) {
                        switch (e) {
                            case 0:
                                return this.x;
                            case 1:
                                return this.y;
                            case 2:
                                return this.z;
                            default:
                                return a.onerror("index is out of range: " + e)
                        }
                    },
                    copy: function(e) {
                        return this.x = e.x, this.y = e.y, this.z = e.z, this
                    },
                    add: function(e, t) {
                        return void 0 !== t ? (a.onwarning("DEPRECATED: Vector3's .add() now only accepts one argument. Use .addVectors( a, b ) instead."), this.addVectors(e, t)) : (this.x += e.x, this.y += e.y, this.z += e.z, this)
                    },
                    addScalar: function(e) {
                        return this.x += e, this.y += e, this.z += e, this
                    },
                    addVectors: function(e, t) {
                        return this.x = e.x + t.x, this.y = e.y + t.y, this.z = e.z + t.z, this
                    },
                    sub: function(e, t) {
                        return void 0 !== t ? (a.onwarningn("DEPRECATED: Vector3's .sub() now only accepts one argument. Use .subVectors( a, b ) instead."), this.subVectors(e, t)) : (this.x -= e.x, this.y -= e.y, this.z -= e.z, this)
                    },
                    subVectors: function(e, t) {
                        return this.x = e.x - t.x, this.y = e.y - t.y, this.z = e.z - t.z, this
                    },
                    multiply: function(e, t) {
                        return void 0 !== t ? (a.onwarning("DEPRECATED: Vector3's .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."), this.multiplyVectors(e, t)) : (this.x *= e.x, this.y *= e.y, this.z *= e.z, this)
                    },
                    multiplyScalar: function(e) {
                        return this.x *= e, this.y *= e, this.z *= e, this
                    },
                    multiplyVectors: function(e, t) {
                        return this.x = e.x * t.x, this.y = e.y * t.y, this.z = e.z * t.z, this
                    },
                    applyEuler: function() {
                        var e;
                        return function(t) {
                            return t instanceof a.Euler ? (void 0 === e && (e = new a.Quaternion), this.applyQuaternion(e.setFromEuler(t)), this) : a.onerror("expecting an Euler", t)
                        }
                    }(),
                    applyAxisAngle: function() {
                        var e;
                        return function(t, i) {
                            return void 0 === e && (e = new a.Quaternion), this.applyQuaternion(e.setFromAxisAngle(t, i)), this
                        }
                    }(),
                    applyMatrix3: function(e) {
                        var t = this.x,
                            i = this.y,
                            r = this.z,
                            a = e.elements;
                        return this.x = a[0] * t + a[3] * i + a[6] * r, this.y = a[1] * t + a[4] * i + a[7] * r, this.z = a[2] * t + a[5] * i + a[8] * r, this
                    },
                    applyMatrix4: function(e) {
                        var t = this.x,
                            i = this.y,
                            r = this.z,
                            a = e.elements;
                        return this.x = a[0] * t + a[4] * i + a[8] * r + a[12], this.y = a[1] * t + a[5] * i + a[9] * r + a[13], this.z = a[2] * t + a[6] * i + a[10] * r + a[14], this
                    },
                    applyProjection: function(e) {
                        var t = this.x,
                            i = this.y,
                            r = this.z,
                            a = e.elements,
                            o = 1 / (a[3] * t + a[7] * i + a[11] * r + a[15]);
                        return this.x = (a[0] * t + a[4] * i + a[8] * r + a[12]) * o, this.y = (a[1] * t + a[5] * i + a[9] * r + a[13]) * o, this.z = (a[2] * t + a[6] * i + a[10] * r + a[14]) * o, this
                    },
                    applyQuaternion: function(e) {
                        var t = this.x,
                            i = this.y,
                            r = this.z,
                            a = e.x,
                            o = e.y,
                            n = e.z,
                            s = e.w,
                            l = s * t + o * r - n * i,
                            h = s * i + n * t - a * r,
                            c = s * r + a * i - o * t,
                            u = -a * t - o * i - n * r;
                        return this.x = l * s + u * -a + h * -n - c * -o, this.y = h * s + u * -o + c * -a - l * -n, this.z = c * s + u * -n + l * -o - h * -a, this
                    },
                    transformDirection: function(e) {
                        var t = this.x,
                            i = this.y,
                            r = this.z,
                            a = e.elements;
                        return this.x = a[0] * t + a[4] * i + a[8] * r, this.y = a[1] * t + a[5] * i + a[9] * r, this.z = a[2] * t + a[6] * i + a[10] * r, this.normalize(), this
                    },
                    divide: function(e) {
                        return this.x /= e.x, this.y /= e.y, this.z /= e.z, this
                    },
                    divideScalar: function(e) {
                        if (0 !== e) {
                            var t = 1 / e;
                            this.x *= t, this.y *= t, this.z *= t
                        } else this.x = 0, this.y = 0, this.z = 0;
                        return this
                    },
                    min: function(e) {
                        return this.x > e.x && (this.x = e.x), this.y > e.y && (this.y = e.y), this.z > e.z && (this.z = e.z), this
                    },
                    max: function(e) {
                        return this.x < e.x && (this.x = e.x), this.y < e.y && (this.y = e.y), this.z < e.z && (this.z = e.z), this
                    },
                    clamp: function(e, t) {
                        return this.x < e.x ? this.x = e.x : this.x > t.x && (this.x = t.x), this.y < e.y ? this.y = e.y : this.y > t.y && (this.y = t.y), this.z < e.z ? this.z = e.z : this.z > t.z && (this.z = t.z), this
                    },
                    clampScalar: function() {
                        var e, t;
                        return function(i, r) {
                            return void 0 === e && (e = new a.Vector3, t = new a.Vector3), e.set(i, i, i), t.set(r, r, r), this.clamp(e, t)
                        }
                    }(),
                    floor: function() {
                        return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this
                    },
                    ceil: function() {
                        return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this
                    },
                    round: function() {
                        return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this
                    },
                    roundToZero: function() {
                        return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z), this
                    },
                    negate: function() {
                        return this.multiplyScalar(-1)
                    },
                    dot: function(e) {
                        return this.x * e.x + this.y * e.y + this.z * e.z
                    },
                    lengthSq: function() {
                        return this.x * this.x + this.y * this.y + this.z * this.z
                    },
                    length: function() {
                        return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z)
                    },
                    lengthManhattan: function() {
                        return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z)
                    },
                    normalize: function() {
                        return this.divideScalar(this.length())
                    },
                    setLength: function(e) {
                        var t = this.length();
                        return 0 !== t && e !== t && this.multiplyScalar(e / t), this
                    },
                    lerp: function(e, t) {
                        return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this.z += (e.z - this.z) * t, this
                    },
                    cross: function(e, t) {
                        if (void 0 !== t) return a.onwarning("DEPRECATED: Vector3's .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."), this.crossVectors(e, t);
                        var i = this.x,
                            r = this.y,
                            o = this.z;
                        return this.x = r * e.z - o * e.y, this.y = o * e.x - i * e.z, this.z = i * e.y - r * e.x, this
                    },
                    crossVectors: function(e, t) {
                        var i = e.x,
                            r = e.y,
                            a = e.z,
                            o = t.x,
                            n = t.y,
                            s = t.z;
                        return this.x = r * s - a * n, this.y = a * o - i * s, this.z = i * n - r * o, this
                    },
                    projectOnVector: function() {
                        var e, t;
                        return function(i) {
                            return void 0 === e && (e = new a.Vector3), e.copy(i).normalize(), t = this.dot(e), this.copy(e).multiplyScalar(t)
                        }
                    }(),
                    projectOnPlane: function() {
                        var e;
                        return function(t) {
                            return void 0 === e && (e = new a.Vector3), e.copy(this).projectOnVector(t), this.sub(e)
                        }
                    }(),
                    reflect: function() {
                        var e;
                        return function(t) {
                            return void 0 === e && (e = new a.Vector3), this.sub(e.copy(t).multiplyScalar(2 * this.dot(t)))
                        }
                    }(),
                    angleTo: function(e) {
                        var t = this.dot(e) / (this.length() * e.length());
                        return Math.acos(a.Math.clamp(t, -1, 1))
                    },
                    distanceTo: function(e) {
                        return Math.sqrt(this.distanceToSquared(e))
                    },
                    distanceToSquared: function(e) {
                        var t = this.x - e.x,
                            i = this.y - e.y,
                            r = this.z - e.z;
                        return t * t + i * i + r * r
                    },
                    setEulerFromRotationMatrix: function(e, t) {
                        a.onerror("REMOVED: Vector3's setEulerFromRotationMatrix has been removed in favor of Euler.setFromRotationMatrix(), please update your code.")
                    },
                    setEulerFromQuaternion: function(e, t) {
                        a.onerror("REMOVED: Vector3's setEulerFromQuaternion: has been removed in favor of Euler.setFromQuaternion(), please update your code.")
                    },
                    getPositionFromMatrix: function(e) {
                        return a.onwarning("DEPRECATED: Vector3's .getPositionFromMatrix() has been renamed to .setFromMatrixPosition(). Please update your code."), this.setFromMatrixPosition(e)
                    },
                    getScaleFromMatrix: function(e) {
                        return a.onwarning("DEPRECATED: Vector3's .getScaleFromMatrix() has been renamed to .setFromMatrixScale(). Please update your code."), this.setFromMatrixScale(e)
                    },
                    getColumnFromMatrix: function(e, t) {
                        return a.onwarning("DEPRECATED: Vector3's .getColumnFromMatrix() has been renamed to .setFromMatrixColumn(). Please update your code."), this.setFromMatrixColumn(e, t)
                    },
                    setFromMatrixPosition: function(e) {
                        return this.x = e.elements[12], this.y = e.elements[13], this.z = e.elements[14], this
                    },
                    setFromMatrixScale: function(e) {
                        var t = this.set(e.elements[0], e.elements[1], e.elements[2]).length(),
                            i = this.set(e.elements[4], e.elements[5], e.elements[6]).length(),
                            r = this.set(e.elements[8], e.elements[9], e.elements[10]).length();
                        return this.x = t, this.y = i, this.z = r, this
                    },
                    setFromMatrixColumn: function(e, t) {
                        var i = 4 * e,
                            r = t.elements;
                        return this.x = r[i], this.y = r[i + 1], this.z = r[i + 2], this
                    },
                    equals: function(e) {
                        return e.x === this.x && e.y === this.y && e.z === this.z
                    },
                    fromArray: function(e) {
                        return this.x = e[0], this.y = e[1], this.z = e[2], this
                    },
                    toArray: function() {
                        return [this.x, this.y, this.z]
                    },
                    clone: function() {
                        return new a.Vector3(this.x, this.y, this.z)
                    }
                }, a.Vector4 = function(e, t, i, r) {
                    this.x = e || 0, this.y = t || 0, this.z = i || 0, this.w = void 0 !== r ? r : 1
                }, a.Vector4.prototype = {
                    constructor: a.Vector4,
                    set: function(e, t, i, r) {
                        return this.x = e, this.y = t, this.z = i, this.w = r, this
                    },
                    setX: function(e) {
                        return this.x = e, this
                    },
                    setY: function(e) {
                        return this.y = e, this
                    },
                    setZ: function(e) {
                        return this.z = e, this
                    },
                    setW: function(e) {
                        return this.w = e, this
                    },
                    setComponent: function(e, t) {
                        switch (e) {
                            case 0:
                                this.x = t;
                                break;
                            case 1:
                                this.y = t;
                                break;
                            case 2:
                                this.z = t;
                                break;
                            case 3:
                                this.w = t;
                                break;
                            default:
                                return a.onerror("index is out of range: " + e)
                        }
                    },
                    getComponent: function(e) {
                        switch (e) {
                            case 0:
                                return this.x;
                            case 1:
                                return this.y;
                            case 2:
                                return this.z;
                            case 3:
                                return this.w;
                            default:
                                return a.onerror("index is out of range: " + e)
                        }
                    },
                    copy: function(e) {
                        return this.x = e.x, this.y = e.y, this.z = e.z, this.w = void 0 !== e.w ? e.w : 1, this
                    },
                    add: function(e, t) {
                        return void 0 !== t ? (a.onwarning("DEPRECATED: Vector4's .add() now only accepts one argument. Use .addVectors( a, b ) instead."), this.addVectors(e, t)) : (this.x += e.x, this.y += e.y, this.z += e.z, this.w += e.w, this)
                    },
                    addScalar: function(e) {
                        return this.x += e, this.y += e, this.z += e, this.w += e, this
                    },
                    addVectors: function(e, t) {
                        return this.x = e.x + t.x, this.y = e.y + t.y, this.z = e.z + t.z, this.w = e.w + t.w, this
                    },
                    sub: function(e, t) {
                        return void 0 !== t ? (a.onwarning("DEPRECATED: Vector4's .sub() now only accepts one argument. Use .subVectors( a, b ) instead."), this.subVectors(e, t)) : (this.x -= e.x, this.y -= e.y, this.z -= e.z, this.w -= e.w, this)
                    },
                    subVectors: function(e, t) {
                        return this.x = e.x - t.x, this.y = e.y - t.y, this.z = e.z - t.z, this.w = e.w - t.w, this
                    },
                    multiplyScalar: function(e) {
                        return this.x *= e, this.y *= e, this.z *= e, this.w *= e, this
                    },
                    applyMatrix4: function(e) {
                        var t = this.x,
                            i = this.y,
                            r = this.z,
                            a = this.w,
                            o = e.elements;
                        return this.x = o[0] * t + o[4] * i + o[8] * r + o[12] * a, this.y = o[1] * t + o[5] * i + o[9] * r + o[13] * a, this.z = o[2] * t + o[6] * i + o[10] * r + o[14] * a, this.w = o[3] * t + o[7] * i + o[11] * r + o[15] * a, this
                    },
                    divideScalar: function(e) {
                        if (0 !== e) {
                            var t = 1 / e;
                            this.x *= t, this.y *= t, this.z *= t, this.w *= t
                        } else this.x = 0, this.y = 0, this.z = 0, this.w = 1;
                        return this
                    },
                    setAxisAngleFromQuaternion: function(e) {
                        this.w = 2 * Math.acos(e.w);
                        var t = Math.sqrt(1 - e.w * e.w);
                        return t < 1e-4 ? (this.x = 1, this.y = 0, this.z = 0) : (this.x = e.x / t, this.y = e.y / t, this.z = e.z / t), this
                    },
                    setAxisAngleFromRotationMatrix: function(e) {
                        var t, i, r, a, o = .01,
                            n = .1,
                            s = e.elements,
                            l = s[0],
                            h = s[4],
                            c = s[8],
                            u = s[1],
                            f = s[5],
                            p = s[9],
                            d = s[2],
                            m = s[6],
                            g = s[10];
                        if (Math.abs(h - u) < o && Math.abs(c - d) < o && Math.abs(p - m) < o) {
                            if (Math.abs(h + u) < n && Math.abs(c + d) < n && Math.abs(p + m) < n && Math.abs(l + f + g - 3) < n) return this.set(1, 0, 0, 0), this;
                            t = Math.PI;
                            var v = (l + 1) / 2,
                                y = (f + 1) / 2,
                                x = (g + 1) / 2,
                                _ = (h + u) / 4,
                                M = (c + d) / 4,
                                w = (p + m) / 4;
                            return v > y && v > x ? v < o ? (i = 0, r = .707106781, a = .707106781) : (r = _ / (i = Math.sqrt(v)), a = M / i) : y > x ? y < o ? (i = .707106781, r = 0, a = .707106781) : (i = _ / (r = Math.sqrt(y)), a = w / r) : x < o ? (i = .707106781, r = .707106781, a = 0) : (i = M / (a = Math.sqrt(x)), r = w / a), this.set(i, r, a, t), this
                        }
                        var S = Math.sqrt((m - p) * (m - p) + (c - d) * (c - d) + (u - h) * (u - h));
                        return Math.abs(S) < .001 && (S = 1), this.x = (m - p) / S, this.y = (c - d) / S, this.z = (u - h) / S, this.w = Math.acos((l + f + g - 1) / 2), this
                    },
                    min: function(e) {
                        return this.x > e.x && (this.x = e.x), this.y > e.y && (this.y = e.y), this.z > e.z && (this.z = e.z), this.w > e.w && (this.w = e.w), this
                    },
                    max: function(e) {
                        return this.x < e.x && (this.x = e.x), this.y < e.y && (this.y = e.y), this.z < e.z && (this.z = e.z), this.w < e.w && (this.w = e.w), this
                    },
                    clamp: function(e, t) {
                        return this.x < e.x ? this.x = e.x : this.x > t.x && (this.x = t.x), this.y < e.y ? this.y = e.y : this.y > t.y && (this.y = t.y), this.z < e.z ? this.z = e.z : this.z > t.z && (this.z = t.z), this.w < e.w ? this.w = e.w : this.w > t.w && (this.w = t.w), this
                    },
                    clampScalar: function() {
                        var e, t;
                        return function(i, r) {
                            return void 0 === e && (e = new a.Vector4, t = new a.Vector4), e.set(i, i, i, i), t.set(r, r, r, r), this.clamp(e, t)
                        }
                    }(),
                    floor: function() {
                        return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this.w = Math.floor(this.w), this
                    },
                    ceil: function() {
                        return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this.w = Math.ceil(this.w), this
                    },
                    round: function() {
                        return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this.w = Math.round(this.w), this
                    },
                    roundToZero: function() {
                        return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z), this.w = this.w < 0 ? Math.ceil(this.w) : Math.floor(this.w), this
                    },
                    negate: function() {
                        return this.multiplyScalar(-1)
                    },
                    dot: function(e) {
                        return this.x * e.x + this.y * e.y + this.z * e.z + this.w * e.w
                    },
                    lengthSq: function() {
                        return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w
                    },
                    length: function() {
                        return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w)
                    },
                    lengthManhattan: function() {
                        return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w)
                    },
                    normalize: function() {
                        return this.divideScalar(this.length())
                    },
                    setLength: function(e) {
                        var t = this.length();
                        return 0 !== t && e !== t && this.multiplyScalar(e / t), this
                    },
                    lerp: function(e, t) {
                        return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this.z += (e.z - this.z) * t, this.w += (e.w - this.w) * t, this
                    },
                    equals: function(e) {
                        return e.x === this.x && e.y === this.y && e.z === this.z && e.w === this.w
                    },
                    fromArray: function(e) {
                        return this.x = e[0], this.y = e[1], this.z = e[2], this.w = e[3], this
                    },
                    toArray: function() {
                        return [this.x, this.y, this.z, this.w]
                    },
                    clone: function() {
                        return new a.Vector4(this.x, this.y, this.z, this.w)
                    }
                }, a.Euler = function(e, t, i, r) {
                    this._x = e || 0, this._y = t || 0, this._z = i || 0, this._order = r || a.Euler.DefaultOrder
                }, a.Euler.RotationOrders = ["XYZ", "YZX", "ZXY", "XZY", "YXZ", "ZYX"], a.Euler.DefaultOrder = "XYZ", a.Euler.prototype = {
                    constructor: a.Euler,
                    _x: 0,
                    _y: 0,
                    _z: 0,
                    _order: a.Euler.DefaultOrder,
                    _quaternion: void 0,
                    _updateQuaternion: function() {
                        void 0 !== this._quaternion && this._quaternion.setFromEuler(this, !1)
                    },
                    get x() {
                        return this._x
                    },
                    set x(e) {
                        this._x = e, this._updateQuaternion()
                    },
                    get y() {
                        return this._y
                    },
                    set y(e) {
                        this._y = e, this._updateQuaternion()
                    },
                    get z() {
                        return this._z
                    },
                    set z(e) {
                        this._z = e, this._updateQuaternion()
                    },
                    get order() {
                        return this._order
                    },
                    set order(e) {
                        this._order = e, this._updateQuaternion()
                    },
                    set: function(e, t, i, r) {
                        return this._x = e, this._y = t, this._z = i, this._order = r || this._order, this._updateQuaternion(), this
                    },
                    setFromVector: function(e, t) {
                        return this._x = e.x, this._y = e.y, this._z = e.z, this._order = t || this._order, this._updateQuaternion(), this
                    },
                    copy: function(e) {
                        return this._x = e._x, this._y = e._y, this._z = e._z, this._order = e._order, this._updateQuaternion(), this
                    },
                    setFromRotationMatrix: function(e, t, i) {
                        function r(e) {
                            return Math.min(Math.max(e, -1), 1)
                        }
                        var o = e.elements,
                            n = o[0],
                            s = o[4],
                            l = o[8],
                            h = o[1],
                            c = o[5],
                            u = o[9],
                            f = o[2],
                            p = o[6],
                            d = o[10];
                        return "XYZ" === (t = t || this._order) ? (this._y = Math.asin(r(l)), Math.abs(l) < .99999 ? (this._x = Math.atan2(-u, d), this._z = Math.atan2(-s, n)) : (this._x = Math.atan2(p, c), this._z = 0)) : "YXZ" === t ? (this._x = Math.asin(-r(u)), Math.abs(u) < .99999 ? (this._y = Math.atan2(l, d), this._z = Math.atan2(h, c)) : (this._y = Math.atan2(-f, n), this._z = 0)) : "ZXY" === t ? (this._x = Math.asin(r(p)), Math.abs(p) < .99999 ? (this._y = Math.atan2(-f, d), this._z = Math.atan2(-s, c)) : (this._y = 0, this._z = Math.atan2(h, n))) : "ZYX" === t ? (this._y = Math.asin(-r(f)), Math.abs(f) < .99999 ? (this._x = Math.atan2(p, d), this._z = Math.atan2(h, n)) : (this._x = 0, this._z = Math.atan2(-s, c))) : "YZX" === t ? (this._z = Math.asin(r(h)), Math.abs(h) < .99999 ? (this._x = Math.atan2(-u, c), this._y = Math.atan2(-f, n)) : (this._x = 0, this._y = Math.atan2(l, d))) : "XZY" === t ? (this._z = Math.asin(-r(s)), Math.abs(s) < .99999 ? (this._x = Math.atan2(p, c), this._y = Math.atan2(l, n)) : (this._x = Math.atan2(-u, d), this._y = 0)) : a.onwarning("WARNING: Euler.setFromRotationMatrix() given unsupported order: " + t), this._order = t, !1 !== i && this._updateQuaternion(), this
                    },
                    setFromQuaternion: function() {
                        var e = null;
                        return function(t, i, r) {
                            return (e = e || new a.Matrix4).makeRotationFromQuaternion(t), this.setFromRotationMatrix(e, i, r), this
                        }
                    }(),
                    reorder: function() {
                        var e = new a.Quaternion;
                        return function(t) {
                            e.setFromEuler(this), this.setFromQuaternion(e, t)
                        }
                    }(),
                    fromArray: function(e) {
                        return this._x = e[0], this._y = e[1], this._z = e[2], void 0 !== e[3] && (this._order = e[3]), this._updateQuaternion(), this
                    },
                    toArray: function() {
                        return [this._x, this._y, this._z, this._order]
                    },
                    equals: function(e) {
                        return e._x === this._x && e._y === this._y && e._z === this._z && e._order === this._order
                    },
                    toVector3: function(e) {
                        return e ? e.set(this._x, this._y, this._z) : new a.Vector3(this._x, this._y, this._z)
                    },
                    clone: function() {
                        return new a.Euler(this._x, this._y, this._z, this._order)
                    }
                }, a.Line3 = function(e, t) {
                    this.start = void 0 !== e ? e : new a.Vector3, this.end = void 0 !== t ? t : new a.Vector3
                }, a.Line3.prototype = {
                    constructor: a.Line3,
                    set: function(e, t) {
                        return this.start.copy(e), this.end.copy(t), this
                    },
                    copy: function(e) {
                        return this.start.copy(e.start), this.end.copy(e.end), this
                    },
                    center: function(e) {
                        return (e || new a.Vector3).addVectors(this.start, this.end).multiplyScalar(.5)
                    },
                    delta: function(e) {
                        return (e || new a.Vector3).subVectors(this.end, this.start)
                    },
                    distanceSq: function() {
                        return this.start.distanceToSquared(this.end)
                    },
                    distance: function() {
                        return this.start.distanceTo(this.end)
                    },
                    at: function(e, t) {
                        var i = t || new a.Vector3;
                        return this.delta(i).multiplyScalar(e).add(this.start)
                    },
                    closestPointToPointParameter: function() {
                        var e = new a.Vector3,
                            t = new a.Vector3;
                        return function(i, r) {
                            e.subVectors(i, this.start), t.subVectors(this.end, this.start);
                            var o = t.dot(t),
                                n = t.dot(e) / o;
                            return r && (n = a.Math.clamp(n, 0, 1)), n
                        }
                    }(),
                    closestPointToPoint: function(e, t, i) {
                        var r = this.closestPointToPointParameter(e, t),
                            o = i || new a.Vector3;
                        return this.delta(o).multiplyScalar(r).add(this.start)
                    },
                    applyMatrix4: function(e) {
                        return this.start.applyMatrix4(e), this.end.applyMatrix4(e), this
                    },
                    equals: function(e) {
                        return e.start.equals(this.start) && e.end.equals(this.end)
                    },
                    clone: function() {
                        return (new a.Line3).copy(this)
                    }
                }, a.Box2 = function(e, t) {
                    this.min = void 0 !== e ? e : new a.Vector2(1 / 0, 1 / 0), this.max = void 0 !== t ? t : new a.Vector2(-1 / 0, -1 / 0)
                }, a.Box2.prototype = {
                    constructor: a.Box2,
                    set: function(e, t) {
                        return this.min.copy(e), this.max.copy(t), this
                    },
                    setFromPoints: function(e) {
                        if (e.length > 0) {
                            var t = e[0];
                            this.min.copy(t), this.max.copy(t);
                            for (var i = 1, r = e.length; i < r; i++)(t = e[i]).x < this.min.x ? this.min.x = t.x : t.x > this.max.x && (this.max.x = t.x), t.y < this.min.y ? this.min.y = t.y : t.y > this.max.y && (this.max.y = t.y)
                        } else this.makeEmpty();
                        return this
                    },
                    setFromCenterAndSize: function() {
                        var e = new a.Vector2;
                        return function(t, i) {
                            var r = e.copy(i).multiplyScalar(.5);
                            return this.min.copy(t).sub(r), this.max.copy(t).add(r), this
                        }
                    }(),
                    copy: function(e) {
                        return this.min.copy(e.min), this.max.copy(e.max), this
                    },
                    makeEmpty: function() {
                        return this.min.x = this.min.y = 1 / 0, this.max.x = this.max.y = -1 / 0, this
                    },
                    empty: function() {
                        return this.max.x < this.min.x || this.max.y < this.min.y
                    },
                    center: function(e) {
                        return (e || new a.Vector2).addVectors(this.min, this.max).multiplyScalar(.5)
                    },
                    size: function(e) {
                        return (e || new a.Vector2).subVectors(this.max, this.min)
                    },
                    expandByPoint: function(e) {
                        return this.min.min(e), this.max.max(e), this
                    },
                    expandByVector: function(e) {
                        return this.min.sub(e), this.max.add(e), this
                    },
                    expandByScalar: function(e) {
                        return this.min.addScalar(-e), this.max.addScalar(e), this
                    },
                    containsPoint: function(e) {
                        return !(e.x < this.min.x || e.x > this.max.x || e.y < this.min.y || e.y > this.max.y)
                    },
                    containsBox: function(e) {
                        return this.min.x <= e.min.x && e.max.x <= this.max.x && this.min.y <= e.min.y && e.max.y <= this.max.y
                    },
                    getParameter: function(e, t) {
                        return (t || new a.Vector2).set((e.x - this.min.x) / (this.max.x - this.min.x), (e.y - this.min.y) / (this.max.y - this.min.y))
                    },
                    isIntersectionBox: function(e) {
                        return !(e.max.x < this.min.x || e.min.x > this.max.x || e.max.y < this.min.y || e.min.y > this.max.y)
                    },
                    clampPoint: function(e, t) {
                        return (t || new a.Vector2).copy(e).clamp(this.min, this.max)
                    },
                    distanceToPoint: function() {
                        var e = new a.Vector2;
                        return function(t) {
                            return e.copy(t).clamp(this.min, this.max).sub(t).length()
                        }
                    }(),
                    intersect: function(e) {
                        return this.min.max(e.min), this.max.min(e.max), this
                    },
                    union: function(e) {
                        return this.min.min(e.min), this.max.max(e.max), this
                    },
                    translate: function(e) {
                        return this.min.add(e), this.max.add(e), this
                    },
                    equals: function(e) {
                        return e.min.equals(this.min) && e.max.equals(this.max)
                    },
                    clone: function() {
                        return (new a.Box2).copy(this)
                    }
                }, a.Box3 = function(e, t) {
                    this.min = void 0 !== e ? e : new a.Vector3(1 / 0, 1 / 0, 1 / 0), this.max = void 0 !== t ? t : new a.Vector3(-1 / 0, -1 / 0, -1 / 0)
                }, a.Box3.prototype = {
                    constructor: a.Box3,
                    set: function(e, t) {
                        return this.min.copy(e), this.max.copy(t), this
                    },
                    addPoint: function(e) {
                        e.x < this.min.x ? this.min.x = e.x : e.x > this.max.x && (this.max.x = e.x), e.y < this.min.y ? this.min.y = e.y : e.y > this.max.y && (this.max.y = e.y), e.z < this.min.z ? this.min.z = e.z : e.z > this.max.z && (this.max.z = e.z)
                    },
                    setFromPoints: function(e) {
                        if (e.length > 0) {
                            var t = e[0];
                            this.min.copy(t), this.max.copy(t);
                            for (var i = 1, r = e.length; i < r; i++) this.addPoint(e[i])
                        } else this.makeEmpty();
                        return this
                    },
                    setFromCenterAndSize: function() {
                        var e = new a.Vector3;
                        return function(t, i) {
                            var r = e.copy(i).multiplyScalar(.5);
                            return this.min.copy(t).sub(r), this.max.copy(t).add(r), this
                        }
                    }(),
                    setFromObject: function() {
                        var e = new a.Vector3;
                        return function(t) {
                            var i = this;
                            return t.updateMatrixWorld(!0), this.makeEmpty(), t.traverse((function(t) {
                                if (void 0 !== t.geometry && void 0 !== t.geometry.vertices)
                                    for (var r = t.geometry.vertices, a = 0, o = r.length; a < o; a++) e.copy(r[a]), e.applyMatrix4(t.matrixWorld), i.expandByPoint(e)
                            })), this
                        }
                    }(),
                    copy: function(e) {
                        return this.min.copy(e.min), this.max.copy(e.max), this
                    },
                    makeEmpty: function() {
                        return this.min.x = this.min.y = this.min.z = 1 / 0, this.max.x = this.max.y = this.max.z = -1 / 0, this
                    },
                    empty: function() {
                        return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z
                    },
                    center: function(e) {
                        return (e || new a.Vector3).addVectors(this.min, this.max).multiplyScalar(.5)
                    },
                    size: function(e) {
                        return (e || new a.Vector3).subVectors(this.max, this.min)
                    },
                    expandByPoint: function(e) {
                        return this.min.min(e), this.max.max(e), this
                    },
                    expandByVector: function(e) {
                        return this.min.sub(e), this.max.add(e), this
                    },
                    expandByScalar: function(e) {
                        return this.min.addScalar(-e), this.max.addScalar(e), this
                    },
                    containsPoint: function(e) {
                        return !(e.x < this.min.x || e.x > this.max.x || e.y < this.min.y || e.y > this.max.y || e.z < this.min.z || e.z > this.max.z)
                    },
                    containsBox: function(e) {
                        return this.min.x <= e.min.x && e.max.x <= this.max.x && this.min.y <= e.min.y && e.max.y <= this.max.y && this.min.z <= e.min.z && e.max.z <= this.max.z
                    },
                    getParameter: function(e, t) {
                        return (t || new a.Vector3).set((e.x - this.min.x) / (this.max.x - this.min.x), (e.y - this.min.y) / (this.max.y - this.min.y), (e.z - this.min.z) / (this.max.z - this.min.z))
                    },
                    isIntersectionBox: function(e) {
                        return !(e.max.x < this.min.x || e.min.x > this.max.x || e.max.y < this.min.y || e.min.y > this.max.y || e.max.z < this.min.z || e.min.z > this.max.z)
                    },
                    clampPoint: function(e, t) {
                        return (t || new a.Vector3).copy(e).clamp(this.min, this.max)
                    },
                    distanceToPoint: function() {
                        var e = new a.Vector3;
                        return function(t) {
                            return e.copy(t).clamp(this.min, this.max).sub(t).length()
                        }
                    }(),
                    getBoundingSphere: function() {
                        var e = new a.Vector3;
                        return function(t) {
                            var i = t || new a.Sphere;
                            return i.center = this.center(), i.radius = .5 * this.size(e).length(), i
                        }
                    }(),
                    intersect: function(e) {
                        return this.min.max(e.min), this.max.min(e.max), this
                    },
                    union: function(e) {
                        return this.min.min(e.min), this.max.max(e.max), this
                    },
                    applyMatrix4: function() {
                        var e = [new a.Vector3, new a.Vector3, new a.Vector3, new a.Vector3, new a.Vector3, new a.Vector3, new a.Vector3, new a.Vector3];
                        return function(t) {
                            return e[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(t), e[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(t), e[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(t), e[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(t), e[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(t), e[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(t), e[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(t), e[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(t), this.makeEmpty(), this.setFromPoints(e), this
                        }
                    }(),
                    translate: function(e) {
                        return this.min.add(e), this.max.add(e), this
                    },
                    equals: function(e) {
                        return e.min.equals(this.min) && e.max.equals(this.max)
                    },
                    clone: function() {
                        return (new a.Box3).copy(this)
                    }
                }, a.Matrix3 = function(e, t, i, r, a, o, n, s, l) {
                    this.elements = new Float32Array(9), this.set(void 0 !== e ? e : 1, t || 0, i || 0, r || 0, void 0 !== a ? a : 1, o || 0, n || 0, s || 0, void 0 !== l ? l : 1)
                }, a.Matrix3.prototype = {
                    constructor: a.Matrix3,
                    set: function(e, t, i, r, a, o, n, s, l) {
                        var h = this.elements;
                        return h[0] = e, h[3] = t, h[6] = i, h[1] = r, h[4] = a, h[7] = o, h[2] = n, h[5] = s, h[8] = l, this
                    },
                    identity: function() {
                        return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1), this
                    },
                    copy: function(e) {
                        var t = e.elements;
                        return this.set(t[0], t[3], t[6], t[1], t[4], t[7], t[2], t[5], t[8]), this
                    },
                    multiplyVector3: function(e) {
                        return a.onwarning("DEPRECATED: Matrix3's .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead."), e.applyMatrix3(this)
                    },
                    multiplyVector3Array: function() {
                        var e = new a.Vector3;
                        return function(t) {
                            for (var i = 0, r = t.length; i < r; i += 3) e.x = t[i], e.y = t[i + 1], e.z = t[i + 2], e.applyMatrix3(this), t[i] = e.x, t[i + 1] = e.y, t[i + 2] = e.z;
                            return t
                        }
                    }(),
                    multiplyScalar: function(e) {
                        var t = this.elements;
                        return t[0] *= e, t[3] *= e, t[6] *= e, t[1] *= e, t[4] *= e, t[7] *= e, t[2] *= e, t[5] *= e, t[8] *= e, this
                    },
                    determinant: function() {
                        var e = this.elements,
                            t = e[0],
                            i = e[1],
                            r = e[2],
                            a = e[3],
                            o = e[4],
                            n = e[5],
                            s = e[6],
                            l = e[7],
                            h = e[8];
                        return t * o * h - t * n * l - i * a * h + i * n * s + r * a * l - r * o * s
                    },
                    getInverse: function(e, t) {
                        if (!(e instanceof a.Matrix4)) return a.onerror("expecting a Matrix4", e);
                        var i = e.elements,
                            r = this.elements;
                        r[0] = i[10] * i[5] - i[6] * i[9], r[1] = -i[10] * i[1] + i[2] * i[9], r[2] = i[6] * i[1] - i[2] * i[5], r[3] = -i[10] * i[4] + i[6] * i[8], r[4] = i[10] * i[0] - i[2] * i[8], r[5] = -i[6] * i[0] + i[2] * i[4], r[6] = i[9] * i[4] - i[5] * i[8], r[7] = -i[9] * i[0] + i[1] * i[8], r[8] = i[5] * i[0] - i[1] * i[4];
                        var o = i[0] * r[0] + i[1] * r[3] + i[2] * r[6];
                        return 0 === o ? !0 === t ? a.onerror("Matrix3.getInverse(): can't invert matrix, determinant is 0", this) : (this.identity(), this) : (this.multiplyScalar(1 / o), this)
                    },
                    transpose: function() {
                        var e, t = this.elements;
                        return e = t[1], t[1] = t[3], t[3] = e, e = t[2], t[2] = t[6], t[6] = e, e = t[5], t[5] = t[7], t[7] = e, this
                    },
                    getNormalMatrix: function(e) {
                        return this.getInverse(e).transpose(), this
                    },
                    transposeIntoArray: function(e) {
                        var t = this.elements;
                        return e[0] = t[0], e[1] = t[3], e[2] = t[6], e[3] = t[1], e[4] = t[4], e[5] = t[7], e[6] = t[2], e[7] = t[5], e[8] = t[8], this
                    },
                    fromArray: function(e) {
                        return this.elements.set(e), this
                    },
                    toArray: function() {
                        var e = this.elements;
                        return [e[0], e[1], e[2], e[3], e[4], e[5], e[6], e[7], e[8]]
                    },
                    clone: function() {
                        var e = this.elements;
                        return new a.Matrix3(e[0], e[3], e[6], e[1], e[4], e[7], e[2], e[5], e[8])
                    }
                }, a.Matrix4 = function(e, t, i, r, a, o, n, s, l, h, c, u, f, p, d, m) {
                    this.elements = new Float32Array(16);
                    var g = this.elements;
                    g[0] = void 0 !== e ? e : 1, g[4] = t || 0, g[8] = i || 0, g[12] = r || 0, g[1] = a || 0, g[5] = void 0 !== o ? o : 1, g[9] = n || 0, g[13] = s || 0, g[2] = l || 0, g[6] = h || 0, g[10] = void 0 !== c ? c : 1, g[14] = u || 0, g[3] = f || 0, g[7] = p || 0, g[11] = d || 0, g[15] = void 0 !== m ? m : 1
                }, a.Matrix4.prototype = {
                    constructor: a.Matrix4,
                    set: function(e, t, i, r, a, o, n, s, l, h, c, u, f, p, d, m) {
                        var g = this.elements;
                        return g[0] = e, g[4] = t, g[8] = i, g[12] = r, g[1] = a, g[5] = o, g[9] = n, g[13] = s, g[2] = l, g[6] = h, g[10] = c, g[14] = u, g[3] = f, g[7] = p, g[11] = d, g[15] = m, this
                    },
                    identity: function() {
                        return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this
                    },
                    copy: function(e) {
                        return this.elements.set(e.elements), this
                    },
                    extractPosition: function(e) {
                        return a.onwarning("DEPRECATED: Matrix4's .extractPosition() has been renamed to .copyPosition()."), this.copyPosition(e)
                    },
                    copyPosition: function(e) {
                        var t = this.elements,
                            i = e.elements;
                        return t[12] = i[12], t[13] = i[13], t[14] = i[14], this
                    },
                    extractBasis: function(e, t, i) {
                        var r = this.elements;
                        return e.set(r[0], r[1], r[2]), t.set(r[4], r[5], r[6]), i.set(r[8], r[9], r[10]), this
                    },
                    makeBasis: function(e, t, i) {
                        this.identity();
                        var r = this.elements;
                        return r.elements[0] = e.x, r.elements[1] = e.y, r.elements[2] = e.z, r.elements[4] = t.x, r.elements[5] = t.y, r.elements[6] = t.z, r.elements[8] = i.x, r.elements[9] = i.y, r.elements[10] = i.z, this
                    },
                    extractRotation: function() {
                        var e = new a.Vector3;
                        return function(t) {
                            var i = this.elements,
                                r = t.elements,
                                a = 1 / e.set(r[0], r[1], r[2]).length(),
                                o = 1 / e.set(r[4], r[5], r[6]).length(),
                                n = 1 / e.set(r[8], r[9], r[10]).length();
                            return i[0] = r[0] * a, i[1] = r[1] * a, i[2] = r[2] * a, i[4] = r[4] * o, i[5] = r[5] * o, i[6] = r[6] * o, i[8] = r[8] * n, i[9] = r[9] * n, i[10] = r[10] * n, this
                        }
                    }(),
                    makeRotationFromEuler: function(e) {
                        if (!(e instanceof a.Euler)) return a.onerror("expecting a Euler", e);
                        var t = this.elements,
                            i = e.x,
                            r = e.y,
                            o = e.z,
                            n = Math.cos(i),
                            s = Math.sin(i),
                            l = Math.cos(r),
                            h = Math.sin(r),
                            c = Math.cos(o),
                            u = Math.sin(o);
                        if ("XYZ" === e.order) {
                            var f = n * c,
                                p = n * u,
                                d = s * c,
                                m = s * u;
                            t[0] = l * c, t[4] = -l * u, t[8] = h, t[1] = p + d * h, t[5] = f - m * h, t[9] = -s * l, t[2] = m - f * h, t[6] = d + p * h, t[10] = n * l
                        } else if ("YXZ" === e.order) {
                            var g = l * c,
                                v = l * u,
                                y = h * c,
                                x = h * u;
                            t[0] = g + x * s, t[4] = y * s - v, t[8] = n * h, t[1] = n * u, t[5] = n * c, t[9] = -s, t[2] = v * s - y, t[6] = x + g * s, t[10] = n * l
                        } else if ("ZXY" === e.order) {
                            g = l * c, v = l * u, y = h * c, x = h * u;
                            t[0] = g - x * s, t[4] = -n * u, t[8] = y + v * s, t[1] = v + y * s, t[5] = n * c, t[9] = x - g * s, t[2] = -n * h, t[6] = s, t[10] = n * l
                        } else if ("ZYX" === e.order) {
                            f = n * c, p = n * u, d = s * c, m = s * u;
                            t[0] = l * c, t[4] = d * h - p, t[8] = f * h + m, t[1] = l * u, t[5] = m * h + f, t[9] = p * h - d, t[2] = -h, t[6] = s * l, t[10] = n * l
                        } else if ("YZX" === e.order) {
                            var _ = n * l,
                                M = n * h,
                                w = s * l,
                                S = s * h;
                            t[0] = l * c, t[4] = S - _ * u, t[8] = w * u + M, t[1] = u, t[5] = n * c, t[9] = -s * c, t[2] = -h * c, t[6] = M * u + w, t[10] = _ - S * u
                        } else if ("XZY" === e.order) {
                            _ = n * l, M = n * h, w = s * l, S = s * h;
                            t[0] = l * c, t[4] = -u, t[8] = h * c, t[1] = _ * u + S, t[5] = n * c, t[9] = M * u - w, t[2] = w * u - M, t[6] = s * c, t[10] = S * u + _
                        }
                        return t[3] = 0, t[7] = 0, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this
                    },
                    setRotationFromQuaternion: function(e) {
                        return a.onwarning("DEPRECATED: Matrix4's .setRotationFromQuaternion() has been deprecated in favor of makeRotationFromQuaternion.  Please update your code."), this.makeRotationFromQuaternion(e)
                    },
                    makeRotationFromQuaternion: function(e) {
                        var t = this.elements,
                            i = e.x,
                            r = e.y,
                            a = e.z,
                            o = e.w,
                            n = i + i,
                            s = r + r,
                            l = a + a,
                            h = i * n,
                            c = i * s,
                            u = i * l,
                            f = r * s,
                            p = r * l,
                            d = a * l,
                            m = o * n,
                            g = o * s,
                            v = o * l;
                        return t[0] = 1 - (f + d), t[4] = c - v, t[8] = u + g, t[1] = c + v, t[5] = 1 - (h + d), t[9] = p - m, t[2] = u - g, t[6] = p + m, t[10] = 1 - (h + f), t[3] = 0, t[7] = 0, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this
                    },
                    lookAt: function() {
                        var e = new a.Vector3,
                            t = new a.Vector3,
                            i = new a.Vector3;
                        return function(r, a, o) {
                            var n = this.elements;
                            return i.subVectors(r, a).normalize(), 0 === i.length() && (i.z = 1), e.crossVectors(o, i).normalize(), 0 === e.length() && (i.x += 1e-4, e.crossVectors(o, i).normalize()), t.crossVectors(i, e), n[0] = e.x, n[4] = t.x, n[8] = i.x, n[1] = e.y, n[5] = t.y, n[9] = i.y, n[2] = e.z, n[6] = t.z, n[10] = i.z, this
                        }
                    }(),
                    multiply: function(e, t) {
                        return void 0 !== t ? (a.onwarning("DEPRECATED: Matrix4's .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."), this.multiplyMatrices(e, t)) : this.multiplyMatrices(this, e)
                    },
                    multiplyList: function(e) {
                        for (var t = 0, i = e.length; t < i; t++) this.multiplyMatrices(this, e[t]);
                        return this
                    },
                    multiplyMatricesList: function(e) {
                        return e.length > 0 ? (this.copy(e[0]), this.multiplyList(e.slice(1))) : this.identity(), this
                    },
                    multiplyMatrices: function(e, t) {
                        if (!(e instanceof a.Matrix4)) return a.onerror("expecting a Matrix4", e);
                        if (!(t instanceof a.Matrix4)) return a.onerror("expecting a Matrix4", t);
                        var i = e.elements,
                            r = t.elements,
                            o = this.elements,
                            n = i[0],
                            s = i[4],
                            l = i[8],
                            h = i[12],
                            c = i[1],
                            u = i[5],
                            f = i[9],
                            p = i[13],
                            d = i[2],
                            m = i[6],
                            g = i[10],
                            v = i[14],
                            y = i[3],
                            x = i[7],
                            _ = i[11],
                            M = i[15],
                            w = r[0],
                            S = r[4],
                            b = r[8],
                            A = r[12],
                            T = r[1],
                            C = r[5],
                            E = r[9],
                            L = r[13],
                            P = r[2],
                            R = r[6],
                            D = r[10],
                            V = r[14],
                            U = r[3],
                            F = r[7],
                            N = r[11],
                            O = r[15];
                        return o[0] = n * w + s * T + l * P + h * U, o[4] = n * S + s * C + l * R + h * F, o[8] = n * b + s * E + l * D + h * N, o[12] = n * A + s * L + l * V + h * O, o[1] = c * w + u * T + f * P + p * U, o[5] = c * S + u * C + f * R + p * F, o[9] = c * b + u * E + f * D + p * N, o[13] = c * A + u * L + f * V + p * O, o[2] = d * w + m * T + g * P + v * U, o[6] = d * S + m * C + g * R + v * F, o[10] = d * b + m * E + g * D + v * N, o[14] = d * A + m * L + g * V + v * O, o[3] = y * w + x * T + _ * P + M * U, o[7] = y * S + x * C + _ * R + M * F, o[11] = y * b + x * E + _ * D + M * N, o[15] = y * A + x * L + _ * V + M * O, this
                    },
                    multiplyToArray: function(e, t, i) {
                        var r = this.elements;
                        return this.multiplyMatrices(e, t), i[0] = r[0], i[1] = r[1], i[2] = r[2], i[3] = r[3], i[4] = r[4], i[5] = r[5], i[6] = r[6], i[7] = r[7], i[8] = r[8], i[9] = r[9], i[10] = r[10], i[11] = r[11], i[12] = r[12], i[13] = r[13], i[14] = r[14], i[15] = r[15], this
                    },
                    multiplyScalar: function(e) {
                        var t = this.elements;
                        return t[0] *= e, t[4] *= e, t[8] *= e, t[12] *= e, t[1] *= e, t[5] *= e, t[9] *= e, t[13] *= e, t[2] *= e, t[6] *= e, t[10] *= e, t[14] *= e, t[3] *= e, t[7] *= e, t[11] *= e, t[15] *= e, this
                    },
                    multiplyVector3: function(e) {
                        return a.onwarning("DEPRECATED: Matrix4's .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) or vector.applyProjection( matrix ) instead."), e.applyProjection(this)
                    },
                    multiplyVector4: function(e) {
                        return a.onwarning("DEPRECATED: Matrix4's .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead."), e.applyMatrix4(this)
                    },
                    multiplyVector3Array: function() {
                        var e = new a.Vector3;
                        return function(t) {
                            for (var i = 0, r = t.length; i < r; i += 3) e.x = t[i], e.y = t[i + 1], e.z = t[i + 2], e.applyProjection(this), t[i] = e.x, t[i + 1] = e.y, t[i + 2] = e.z;
                            return t
                        }
                    }(),
                    rotateAxis: function(e) {
                        a.onwarning("DEPRECATED: Matrix4's .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead."), e.transformDirection(this)
                    },
                    crossVector: function(e) {
                        return a.onwarning("DEPRECATED: Matrix4's .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead."), e.applyMatrix4(this)
                    },
                    determinant: function() {
                        var e = this.elements,
                            t = e[0],
                            i = e[4],
                            r = e[8],
                            a = e[12],
                            o = e[1],
                            n = e[5],
                            s = e[9],
                            l = e[13],
                            h = e[2],
                            c = e[6],
                            u = e[10],
                            f = e[14];
                        return e[3] * (+a * s * c - r * l * c - a * n * u + i * l * u + r * n * f - i * s * f) + e[7] * (+t * s * f - t * l * u + a * o * u - r * o * f + r * l * h - a * s * h) + e[11] * (+t * l * c - t * n * f - a * o * c + i * o * f + a * n * h - i * l * h) + e[15] * (-r * n * h - t * s * c + t * n * u + r * o * c - i * o * u + i * s * h)
                    },
                    transpose: function() {
                        var e, t = this.elements;
                        return e = t[1], t[1] = t[4], t[4] = e, e = t[2], t[2] = t[8], t[8] = e, e = t[6], t[6] = t[9], t[9] = e, e = t[3], t[3] = t[12], t[12] = e, e = t[7], t[7] = t[13], t[13] = e, e = t[11], t[11] = t[14], t[14] = e, this
                    },
                    flattenToArray: function(e) {
                        var t = this.elements;
                        return e[0] = t[0], e[1] = t[1], e[2] = t[2], e[3] = t[3], e[4] = t[4], e[5] = t[5], e[6] = t[6], e[7] = t[7], e[8] = t[8], e[9] = t[9], e[10] = t[10], e[11] = t[11], e[12] = t[12], e[13] = t[13], e[14] = t[14], e[15] = t[15], e
                    },
                    flattenToArrayOffset: function(e, t) {
                        var i = this.elements;
                        return e[t] = i[0], e[t + 1] = i[1], e[t + 2] = i[2], e[t + 3] = i[3], e[t + 4] = i[4], e[t + 5] = i[5], e[t + 6] = i[6], e[t + 7] = i[7], e[t + 8] = i[8], e[t + 9] = i[9], e[t + 10] = i[10], e[t + 11] = i[11], e[t + 12] = i[12], e[t + 13] = i[13], e[t + 14] = i[14], e[t + 15] = i[15], e
                    },
                    getPosition: function() {
                        var e = new a.Vector3;
                        return function() {
                            a.onwarning("DEPRECATED: Matrix4's .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead.");
                            var t = this.elements;
                            return e.set(t[12], t[13], t[14])
                        }
                    }(),
                    setPosition: function(e) {
                        var t = this.elements;
                        return t[12] = e.x, t[13] = e.y, t[14] = e.z, this
                    },
                    getInverse: function(e, t) {
                        var i = this.elements,
                            r = e.elements,
                            o = r[0],
                            n = r[4],
                            s = r[8],
                            l = r[12],
                            h = r[1],
                            c = r[5],
                            u = r[9],
                            f = r[13],
                            p = r[2],
                            d = r[6],
                            m = r[10],
                            g = r[14],
                            v = r[3],
                            y = r[7],
                            x = r[11],
                            _ = r[15];
                        i[0] = u * g * y - f * m * y + f * d * x - c * g * x - u * d * _ + c * m * _, i[4] = l * m * y - s * g * y - l * d * x + n * g * x + s * d * _ - n * m * _, i[8] = s * f * y - l * u * y + l * c * x - n * f * x - s * c * _ + n * u * _, i[12] = l * u * d - s * f * d - l * c * m + n * f * m + s * c * g - n * u * g, i[1] = f * m * v - u * g * v - f * p * x + h * g * x + u * p * _ - h * m * _, i[5] = s * g * v - l * m * v + l * p * x - o * g * x - s * p * _ + o * m * _, i[9] = l * u * v - s * f * v - l * h * x + o * f * x + s * h * _ - o * u * _, i[13] = s * f * p - l * u * p + l * h * m - o * f * m - s * h * g + o * u * g, i[2] = c * g * v - f * d * v + f * p * y - h * g * y - c * p * _ + h * d * _, i[6] = l * d * v - n * g * v - l * p * y + o * g * y + n * p * _ - o * d * _, i[10] = n * f * v - l * c * v + l * h * y - o * f * y - n * h * _ + o * c * _, i[14] = l * c * p - n * f * p - l * h * d + o * f * d + n * h * g - o * c * g, i[3] = u * d * v - c * m * v - u * p * y + h * m * y + c * p * x - h * d * x, i[7] = n * m * v - s * d * v + s * p * y - o * m * y - n * p * x + o * d * x, i[11] = s * c * v - n * u * v - s * h * y + o * u * y + n * h * x - o * c * x, i[15] = n * u * p - s * c * p + s * h * d - o * u * d - n * h * m + o * c * m;
                        var M = o * i[0] + h * i[4] + p * i[8] + v * i[12];
                        return 0 == M ? !0 === t ? a.onerror("Matrix4.getInverse(): can't invert matrix, determinant is 0", this) : (this.identity(), this) : (this.multiplyScalar(1 / M), this)
                    },
                    translate: function(e) {
                        a.onerror("DEPRECATED: Matrix4's .translate() has been removed.")
                    },
                    rotateX: function(e) {
                        a.onerror("DEPRECATED: Matrix4's .rotateX() has been removed.")
                    },
                    rotateY: function(e) {
                        a.onerror("DEPRECATED: Matrix4's .rotateY() has been removed.")
                    },
                    rotateZ: function(e) {
                        a.onerror("DEPRECATED: Matrix4's .rotateZ() has been removed.")
                    },
                    rotateByAxis: function(e, t) {
                        a.onerror("DEPRECATED: Matrix4's .rotateByAxis() has been removed.")
                    },
                    scale: function(e) {
                        var t = this.elements,
                            i = e.x,
                            r = e.y,
                            a = e.z;
                        return t[0] *= i, t[4] *= r, t[8] *= a, t[1] *= i, t[5] *= r, t[9] *= a, t[2] *= i, t[6] *= r, t[10] *= a, t[3] *= i, t[7] *= r, t[11] *= a, this
                    },
                    getMaxScaleOnAxis: function() {
                        var e = this.elements,
                            t = e[0] * e[0] + e[1] * e[1] + e[2] * e[2],
                            i = e[4] * e[4] + e[5] * e[5] + e[6] * e[6],
                            r = e[8] * e[8] + e[9] * e[9] + e[10] * e[10];
                        return Math.sqrt(Math.max(t, Math.max(i, r)))
                    },
                    makeTranslation: function(e, t, i) {
                        return this.set(1, 0, 0, e, 0, 1, 0, t, 0, 0, 1, i, 0, 0, 0, 1), this
                    },
                    makeRotationX: function(e) {
                        var t = Math.cos(e),
                            i = Math.sin(e);
                        return this.set(1, 0, 0, 0, 0, t, -i, 0, 0, i, t, 0, 0, 0, 0, 1), this
                    },
                    makeRotationY: function(e) {
                        var t = Math.cos(e),
                            i = Math.sin(e);
                        return this.set(t, 0, i, 0, 0, 1, 0, 0, -i, 0, t, 0, 0, 0, 0, 1), this
                    },
                    makeRotationZ: function(e) {
                        var t = Math.cos(e),
                            i = Math.sin(e);
                        return this.set(t, -i, 0, 0, i, t, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this
                    },
                    makeRotationAxis: function(e, t) {
                        var i = Math.cos(t),
                            r = Math.sin(t),
                            a = 1 - i,
                            o = e.x,
                            n = e.y,
                            s = e.z,
                            l = a * o,
                            h = a * n;
                        return this.set(l * o + i, l * n - r * s, l * s + r * n, 0, l * n + r * s, h * n + i, h * s - r * o, 0, l * s - r * n, h * s + r * o, a * s * s + i, 0, 0, 0, 0, 1), this
                    },
                    makeScale: function(e, t, i) {
                        return this.set(e, 0, 0, 0, 0, t, 0, 0, 0, 0, i, 0, 0, 0, 0, 1), this
                    },
                    makeShear: function(e, t) {
                        var i = e.x,
                            r = e.y,
                            a = e.z;
                        return t ? this.set(1, 0, 0, 0, i, 1, 0, 0, r, a, 1, 0, 0, 0, 0, 1) : this.set(1, i, r, 0, 0, 1, a, 0, 0, 0, 1, 0, 0, 0, 0, 1), this
                    },
                    compose: function(e, t, i) {
                        return this.makeRotationFromQuaternion(t), this.scale(i), this.setPosition(e), this
                    },
                    decompose: function() {
                        var e = new a.Vector3,
                            t = new a.Matrix4;
                        return function(i, r, a) {
                            var o = this.elements,
                                n = e.set(o[0], o[1], o[2]).length(),
                                s = e.set(o[4], o[5], o[6]).length(),
                                l = e.set(o[8], o[9], o[10]).length();
                            this.determinant() < 0 && (n = -n), i.x = o[12], i.y = o[13], i.z = o[14], t.elements.set(this.elements);
                            var h = 1 / n,
                                c = 1 / s,
                                u = 1 / l;
                            return t.elements[0] *= h, t.elements[1] *= h, t.elements[2] *= h, t.elements[4] *= c, t.elements[5] *= c, t.elements[6] *= c, t.elements[8] *= u, t.elements[9] *= u, t.elements[10] *= u, r.setFromRotationMatrix(t), a.x = n, a.y = s, a.z = l, this
                        }
                    }(),
                    makeFrustum: function(e, t, i, r, a, o, n, s) {
                        var l = this.elements,
                            h = 2 * a / (t - e),
                            c = 2 * a / (r - i),
                            u = (t + e) / (t - e),
                            f = (r + i) / (r - i),
                            p = -(o + a) / (o - a),
                            d = -2 * o * a / (o - a);
                        return l[0] = h, l[4] = 0, l[8] = u, l[12] = 0, l[1] = 0, l[5] = c, l[9] = f, l[13] = 0, l[2] = 0, l[6] = 0, l[10] = p, l[14] = d, l[3] = 0, l[7] = 0, l[11] = -1, l[15] = 0, n && s && (0 !== s.x && (l[8] += 2 * n.x / s.x), 0 !== s.y && (l[9] += 2 * n.y / s.y)), this
                    },
                    makePerspective: function(e, t, i, r, o, n) {
                        var s = i * Math.tan(a.Math.degToRad(.5 * e)),
                            l = -s,
                            h = l * t,
                            c = s * t;
                        return this.makeFrustum(h, c, l, s, i, r, o, n)
                    },
                    makeOrthographic: function(e, t, i, r, a, o) {
                        var n = this.elements,
                            s = t - e,
                            l = i - r,
                            h = o - a,
                            c = (t + e) / s,
                            u = (i + r) / l,
                            f = (o + a) / h;
                        return n[0] = 2 / s, n[4] = 0, n[8] = 0, n[12] = -c, n[1] = 0, n[5] = 2 / l, n[9] = 0, n[13] = -u, n[2] = 0, n[6] = 0, n[10] = -2 / h, n[14] = -f, n[3] = 0, n[7] = 0, n[11] = 0, n[15] = 1, this
                    },
                    fromArray: function(e) {
                        return this.elements.set(e), this
                    },
                    toArray: function() {
                        var e = this.elements;
                        return [e[0], e[1], e[2], e[3], e[4], e[5], e[6], e[7], e[8], e[9], e[10], e[11], e[12], e[13], e[14], e[15]]
                    },
                    clone: function() {
                        var e = this.elements;
                        return new a.Matrix4(e[0], e[4], e[8], e[12], e[1], e[5], e[9], e[13], e[2], e[6], e[10], e[14], e[3], e[7], e[11], e[15])
                    }
                }, a.Ray = function(e, t) {
                    this.origin = void 0 !== e ? e : new a.Vector3, this.direction = void 0 !== t ? t : new a.Vector3
                }, a.Ray.prototype = {
                    constructor: a.Ray,
                    set: function(e, t) {
                        return this.origin.copy(e), this.direction.copy(t), this
                    },
                    copy: function(e) {
                        return this.origin.copy(e.origin), this.direction.copy(e.direction), this
                    },
                    at: function(e, t) {
                        return (t || new a.Vector3).copy(this.direction).multiplyScalar(e).add(this.origin)
                    },
                    recast: function() {
                        var e = new a.Vector3;
                        return function(t) {
                            return this.origin.copy(this.at(t, e)), this
                        }
                    }(),
                    closestPointToPoint: function(e, t) {
                        var i = t || new a.Vector3;
                        i.subVectors(e, this.origin);
                        var r = i.dot(this.direction);
                        return r < 0 ? i.copy(this.origin) : i.copy(this.direction).multiplyScalar(r).add(this.origin)
                    },
                    distanceToPoint: function() {
                        var e = new a.Vector3;
                        return function(t) {
                            var i = e.subVectors(t, this.origin).dot(this.direction);
                            return i < 0 ? this.origin.distanceTo(t) : (e.copy(this.direction).multiplyScalar(i).add(this.origin), e.distanceTo(t))
                        }
                    }(),
                    distanceSqToSegment: function(e, t, i, r) {
                        var a, o, n, s, l = e.clone().add(t).multiplyScalar(.5),
                            h = t.clone().sub(e).normalize(),
                            c = .5 * e.distanceTo(t),
                            u = this.origin.clone().sub(l),
                            f = -this.direction.dot(h),
                            p = u.dot(this.direction),
                            d = -u.dot(h),
                            m = u.lengthSq(),
                            g = Math.abs(1 - f * f);
                        if (g >= 0)
                            if (o = f * p - d, s = c * g, (a = f * d - p) >= 0)
                                if (o >= -s)
                                    if (o <= s) {
                                        var v = 1 / g;
                                        n = (a *= v) * (a + f * (o *= v) + 2 * p) + o * (f * a + o + 2 * d) + m
                                    } else o = c, n = -(a = Math.max(0, -(f * o + p))) * a + o * (o + 2 * d) + m;
                        else o = -c, n = -(a = Math.max(0, -(f * o + p))) * a + o * (o + 2 * d) + m;
                        else o <= -s ? n = -(a = Math.max(0, -(-f * c + p))) * a + (o = a > 0 ? -c : Math.min(Math.max(-c, -d), c)) * (o + 2 * d) + m : o <= s ? (a = 0, n = (o = Math.min(Math.max(-c, -d), c)) * (o + 2 * d) + m) : n = -(a = Math.max(0, -(f * c + p))) * a + (o = a > 0 ? c : Math.min(Math.max(-c, -d), c)) * (o + 2 * d) + m;
                        else o = f > 0 ? -c : c, n = -(a = Math.max(0, -(f * o + p))) * a + o * (o + 2 * d) + m;
                        return i && i.copy(this.direction.clone().multiplyScalar(a).add(this.origin)), r && r.copy(h.clone().multiplyScalar(o).add(l)), n
                    },
                    isIntersectionSphere: function(e) {
                        return this.distanceToPoint(e.center) <= e.radius
                    },
                    isIntersectionPlane: function(e) {
                        var t = e.distanceToPoint(this.origin);
                        return 0 === t || e.normal.dot(this.direction) * t < 0
                    },
                    distanceToPlane: function(e) {
                        var t = e.normal.dot(this.direction);
                        if (0 == t) return 0 == e.distanceToPoint(this.origin) ? 0 : null;
                        var i = -(this.origin.dot(e.normal) + e.constant) / t;
                        return i >= 0 ? i : null
                    },
                    intersectPlane: function(e, t) {
                        var i = this.distanceToPlane(e);
                        return null === i ? null : this.at(i, t)
                    },
                    isIntersectionBox: function() {
                        var e = new a.Vector3;
                        return function(t) {
                            return null !== this.intersectBox(t, e)
                        }
                    }(),
                    intersectBox: function(e, t) {
                        var i, r, a, o, n, s, l = 1 / this.direction.x,
                            h = 1 / this.direction.y,
                            c = 1 / this.direction.z,
                            u = this.origin;
                        return l >= 0 ? (i = (e.min.x - u.x) * l, r = (e.max.x - u.x) * l) : (i = (e.max.x - u.x) * l, r = (e.min.x - u.x) * l), h >= 0 ? (a = (e.min.y - u.y) * h, o = (e.max.y - u.y) * h) : (a = (e.max.y - u.y) * h, o = (e.min.y - u.y) * h), i > o || a > r ? null : ((a > i || i !== i) && (i = a), (o < r || r !== r) && (r = o), c >= 0 ? (n = (e.min.z - u.z) * c, s = (e.max.z - u.z) * c) : (n = (e.max.z - u.z) * c, s = (e.min.z - u.z) * c), i > s || n > r ? null : ((n > i || i !== i) && (i = n), (s < r || r !== r) && (r = s), r < 0 ? null : this.at(i >= 0 ? i : r, t)))
                    },
                    intersectTriangle: function() {
                        var e = new a.Vector3,
                            t = new a.Vector3,
                            i = new a.Vector3,
                            r = new a.Vector3;
                        return function(a, o, n, s, l) {
                            t.subVectors(o, a), i.subVectors(n, a), r.crossVectors(t, i);
                            var h, c = this.direction.dot(r);
                            if (c > 0) {
                                if (s) return null;
                                h = 1
                            } else {
                                if (!(c < 0)) return null;
                                h = -1, c = -c
                            }
                            e.subVectors(this.origin, a);
                            var u = h * this.direction.dot(i.crossVectors(e, i));
                            if (u < 0) return null;
                            var f = h * this.direction.dot(t.cross(e));
                            if (f < 0) return null;
                            if (u + f > c) return null;
                            var p = -h * e.dot(r);
                            return p < 0 ? null : this.at(p / c, l)
                        }
                    }(),
                    applyMatrix4: function(e) {
                        return this.direction.add(this.origin).applyMatrix4(e), this.origin.applyMatrix4(e), this.direction.sub(this.origin), this.direction.normalize(), this
                    },
                    equals: function(e) {
                        return e.origin.equals(this.origin) && e.direction.equals(this.direction)
                    },
                    clone: function() {
                        return (new a.Ray).copy(this)
                    }
                }, a.Sphere = function(e, t) {
                    this.center = void 0 !== e ? e : new a.Vector3, this.radius = void 0 !== t ? t : 0
                }, a.Sphere.prototype = {
                    constructor: a.Sphere,
                    set: function(e, t) {
                        return this.center.copy(e), this.radius = t, this
                    },
                    setFromPoints: function() {
                        var e = new a.Box3;
                        return function(t, i) {
                            var r = this.center;
                            void 0 !== i ? r.copy(i) : e.setFromPoints(t).center(r);
                            for (var a = 0, o = r.x, n = r.y, s = r.z, l = 0, h = t.length; l < h; l++) {
                                var c = t[l],
                                    u = o - c.x,
                                    f = n - c.y,
                                    p = s - c.z,
                                    d = u * u + f * f + p * p;
                                a = Math.max(a, d)
                            }
                            return this.radius = Math.sqrt(a), this
                        }
                    }(),
                    copy: function(e) {
                        return this.center.copy(e.center), this.radius = e.radius, this
                    },
                    empty: function() {
                        return this.radius <= 0
                    },
                    containsPoint: function(e) {
                        return e.distanceToSquared(this.center) <= this.radius * this.radius
                    },
                    distanceToPoint: function(e) {
                        return e.distanceTo(this.center) - this.radius
                    },
                    intersectsSphere: function(e) {
                        var t = this.radius + e.radius;
                        return e.center.distanceToSquared(this.center) <= t * t
                    },
                    clampPoint: function(e, t) {
                        var i = this.center.distanceToSquared(e),
                            r = t || new a.Vector3;
                        return r.copy(e), i > this.radius * this.radius && (r.sub(this.center).normalize(), r.multiplyScalar(this.radius).add(this.center)), r
                    },
                    getBoundingBox: function(e) {
                        var t = e || new a.Box3;
                        return t.set(this.center, this.center), t.expandByScalar(this.radius), t
                    },
                    applyMatrix4: function(e) {
                        return this.center.applyMatrix4(e), this.radius = this.radius * e.getMaxScaleOnAxis(), this
                    },
                    translate: function(e) {
                        return this.center.add(e), this
                    },
                    equals: function(e) {
                        return e.center.equals(this.center) && e.radius === this.radius
                    },
                    clone: function() {
                        return (new a.Sphere).copy(this)
                    }
                }, a.Frustum = function(e, t, i, r, o, n) {
                    this.planes = [void 0 !== e ? e : new a.Plane, void 0 !== t ? t : new a.Plane, void 0 !== i ? i : new a.Plane, void 0 !== r ? r : new a.Plane, void 0 !== o ? o : new a.Plane, void 0 !== n ? n : new a.Plane]
                }, a.Frustum.prototype = {
                    constructor: a.Frustum,
                    set: function(e, t, i, r, a, o) {
                        var n = this.planes;
                        return n[0].copy(e), n[1].copy(t), n[2].copy(i), n[3].copy(r), n[4].copy(a), n[5].copy(o), this
                    },
                    copy: function(e) {
                        for (var t = this.planes, i = 0; i < 6; i++) t[i].copy(e.planes[i]);
                        return this
                    },
                    setFromMatrix: function(e) {
                        var t = this.planes,
                            i = e.elements,
                            r = i[0],
                            a = i[1],
                            o = i[2],
                            n = i[3],
                            s = i[4],
                            l = i[5],
                            h = i[6],
                            c = i[7],
                            u = i[8],
                            f = i[9],
                            p = i[10],
                            d = i[11],
                            m = i[12],
                            g = i[13],
                            v = i[14],
                            y = i[15];
                        return t[0].setComponents(n - r, c - s, d - u, y - m).normalize(), t[1].setComponents(n + r, c + s, d + u, y + m).normalize(), t[2].setComponents(n + a, c + l, d + f, y + g).normalize(), t[3].setComponents(n - a, c - l, d - f, y - g).normalize(), t[4].setComponents(n - o, c - h, d - p, y - v).normalize(), t[5].setComponents(n + o, c + h, d + p, y + v).normalize(), this
                    },
                    intersectsObject: function() {
                        var e = new a.Sphere;
                        return function(t) {
                            var i = t.geometry;
                            return null === i.boundingSphere && i.computeBoundingSphere(), e.copy(i.boundingSphere), e.applyMatrix4(t.matrixWorld), this.intersectsSphere(e)
                        }
                    }(),
                    intersectsSphere: function(e) {
                        for (var t = this.planes, i = e.center, r = -e.radius, a = 0; a < 6; a++) {
                            if (t[a].distanceToPoint(i) < r) return !1
                        }
                        return !0
                    },
                    intersectsBox: function() {
                        var e = new a.Vector3,
                            t = new a.Vector3;
                        return function(i) {
                            for (var r = this.planes, a = 0; a < 6; a++) {
                                var o = r[a];
                                e.x = o.normal.x > 0 ? i.min.x : i.max.x, t.x = o.normal.x > 0 ? i.max.x : i.min.x, e.y = o.normal.y > 0 ? i.min.y : i.max.y, t.y = o.normal.y > 0 ? i.max.y : i.min.y, e.z = o.normal.z > 0 ? i.min.z : i.max.z, t.z = o.normal.z > 0 ? i.max.z : i.min.z;
                                var n = o.distanceToPoint(e),
                                    s = o.distanceToPoint(t);
                                if (n < 0 && s < 0) return !1
                            }
                            return !0
                        }
                    }(),
                    containsPoint: function(e) {
                        for (var t = this.planes, i = 0; i < 6; i++)
                            if (t[i].distanceToPoint(e) < 0) return !1;
                        return !0
                    },
                    clone: function() {
                        return (new a.Frustum).copy(this)
                    }
                }, a.Plane = function(e, t) {
                    this.normal = void 0 !== e ? e : new a.Vector3(1, 0, 0), this.constant = void 0 !== t ? t : 0
                }, a.Plane.prototype = {
                    constructor: a.Plane,
                    set: function(e, t) {
                        return this.normal.copy(e), this.constant = t, this
                    },
                    setComponents: function(e, t, i, r) {
                        return this.normal.set(e, t, i), this.constant = r, this
                    },
                    setFromNormalAndCoplanarPoint: function(e, t) {
                        return this.normal.copy(e), this.constant = -t.dot(this.normal), this
                    },
                    setFromCoplanarPoints: function() {
                        var e = new a.Vector3,
                            t = new a.Vector3;
                        return function(i, r, a) {
                            var o = e.subVectors(a, r).cross(t.subVectors(i, r)).normalize();
                            return this.setFromNormalAndCoplanarPoint(o, i), this
                        }
                    }(),
                    copy: function(e) {
                        return this.normal.copy(e.normal), this.constant = e.constant, this
                    },
                    normalize: function() {
                        var e = 1 / this.normal.length();
                        return this.normal.multiplyScalar(e), this.constant *= e, this
                    },
                    negate: function() {
                        return this.constant *= -1, this.normal.negate(), this
                    },
                    distanceToPoint: function(e) {
                        return this.normal.dot(e) + this.constant
                    },
                    distanceToSphere: function(e) {
                        return this.distanceToPoint(e.center) - e.radius
                    },
                    projectPoint: function(e, t) {
                        return this.orthoPoint(e, t).sub(e).negate()
                    },
                    orthoPoint: function(e, t) {
                        var i = this.distanceToPoint(e);
                        return (t || new a.Vector3).copy(this.normal).multiplyScalar(i)
                    },
                    isIntersectionLine: function(e) {
                        var t = this.distanceToPoint(e.start),
                            i = this.distanceToPoint(e.end);
                        return t < 0 && i > 0 || i < 0 && t > 0
                    },
                    intersectLine: function() {
                        var e = new a.Vector3;
                        return function(t, i) {
                            var r = i || new a.Vector3,
                                o = t.delta(e),
                                n = this.normal.dot(o);
                            if (0 == n) return 0 == this.distanceToPoint(t.start) ? r.copy(t.start) : void 0;
                            var s = -(t.start.dot(this.normal) + this.constant) / n;
                            return s < 0 || s > 1 ? void 0 : r.copy(o).multiplyScalar(s).add(t.start)
                        }
                    }(),
                    coplanarPoint: function(e) {
                        return (e || new a.Vector3).copy(this.normal).multiplyScalar(-this.constant)
                    },
                    applyMatrix4: function() {
                        var e = new a.Vector3,
                            t = new a.Vector3,
                            i = new a.Matrix3;
                        return function(r, o) {
                            if (!(r instanceof a.Matrix4)) return a.onerror("expecting a Matrix4", r);
                            var n = o || i.getNormalMatrix(r),
                                s = e.copy(this.normal).applyMatrix3(n),
                                l = this.coplanarPoint(t);
                            return l.applyMatrix4(r), this.setFromNormalAndCoplanarPoint(s, l), this
                        }
                    }(),
                    translate: function(e) {
                        return this.constant = this.constant - e.dot(this.normal), this
                    },
                    equals: function(e) {
                        return e.normal.equals(this.normal) && e.constant == this.constant
                    },
                    clone: function() {
                        return (new a.Plane).copy(this)
                    }
                }, a.Math = {
                    PI2: 2 * Math.PI,
                    DegreeToRadiansFactor: Math.PI / 180,
                    RadianToDegreesFactor: 180 / Math.PI,
                    generateUUID: function() {
                        var e, t = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""),
                            i = new Array(36),
                            r = 0;
                        return function() {
                            for (var a = 0; a < 36; a++) 8 == a || 13 == a || 18 == a || 23 == a ? i[a] = "-" : 14 == a ? i[a] = "4" : (r <= 2 && (r = 33554432 + 16777216 * Math.random() | 0), e = 15 & r, r >>= 4, i[a] = t[19 == a ? 3 & e | 8 : e]);
                            return i.join("")
                        }
                    }(),
                    clamp: function(e, t, i) {
                        return e < t ? t : e > i ? i : e
                    },
                    clampBottom: function(e, t) {
                        return e < t ? t : e
                    },
                    mapLinear: function(e, t, i, r, a) {
                        return r + (e - t) * (a - r) / (i - t)
                    },
                    smoothstep: function(e, t, i) {
                        return e <= t ? 0 : e >= i ? 1 : (e = (e - t) / (i - t)) * e * (3 - 2 * e)
                    },
                    smootherstep: function(e, t, i) {
                        return e <= t ? 0 : e >= i ? 1 : (e = (e - t) / (i - t)) * e * e * (e * (6 * e - 15) + 10)
                    },
                    random16: function() {
                        return (65280 * Math.random() + 255 * Math.random()) / 65535
                    },
                    randInt: function(e, t) {
                        return e + Math.floor(Math.random() * (t - e + 1))
                    },
                    randFloat: function(e, t) {
                        return e + Math.random() * (t - e)
                    },
                    randFloatSpread: function(e) {
                        return e * (.5 - Math.random())
                    },
                    sign: function(e) {
                        return e < 0 ? -1 : e > 0 ? 1 : 0
                    },
                    degToRad: function(e) {
                        return e * this.DegreeToRadiansFactor
                    },
                    radToDeg: function(e) {
                        return e * this.RadianToDegreesFactor
                    },
                    isPowerOfTwo: function(e) {
                        return 0 === (e & e - 1) && 0 !== e
                    }
                }, a.Spline = function(e) {
                    this.points = e;
                    var t, i, r, o, n, s, l, h, c, u = [],
                        f = {
                            x: 0,
                            y: 0,
                            z: 0
                        };

                    function p(e, t, i, r, a, o, n) {
                        var s = .5 * (i - e),
                            l = .5 * (r - t);
                        return (2 * (t - i) + s + l) * n + (-3 * (t - i) - 2 * s - l) * o + s * a + t
                    }
                    this.initFromArray = function(e) {
                        this.points = [];
                        for (var t = 0; t < e.length; t++) this.points[t] = {
                            x: e[t][0],
                            y: e[t][1],
                            z: e[t][2]
                        }
                    }, this.getPoint = function(e) {
                        return t = (this.points.length - 1) * e, i = Math.floor(t), r = t - i, u[0] = 0 === i ? i : i - 1, u[1] = i, u[2] = i > this.points.length - 2 ? this.points.length - 1 : i + 1, u[3] = i > this.points.length - 3 ? this.points.length - 1 : i + 2, s = this.points[u[0]], l = this.points[u[1]], h = this.points[u[2]], c = this.points[u[3]], n = r * (o = r * r), f.x = p(s.x, l.x, h.x, c.x, r, o, n), f.y = p(s.y, l.y, h.y, c.y, r, o, n), f.z = p(s.z, l.z, h.z, c.z, r, o, n), f
                    }, this.getControlPointsArray = function() {
                        var e, t, i = this.points.length,
                            r = [];
                        for (e = 0; e < i; e++) t = this.points[e], r[e] = [t.x, t.y, t.z];
                        return r
                    }, this.getLength = function(e) {
                        var t, i, r, o, n = 0,
                            s = 0,
                            l = 0,
                            h = new a.Vector3,
                            c = new a.Vector3,
                            u = [],
                            f = 0;
                        for (u[0] = 0, e || (e = 100), r = this.points.length * e, h.copy(this.points[0]), t = 1; t < r; t++) i = t / r, o = this.getPoint(i), c.copy(o), f += c.distanceTo(h), h.copy(o), n = (this.points.length - 1) * i, (s = Math.floor(n)) != l && (u[s] = f, l = s);
                        return u[u.length] = f, {
                            chunks: u,
                            total: f
                        }
                    }, this.reparametrizeByArcLength = function(e) {
                        var t, i, r, o, n, s, l, h, c = [],
                            u = new a.Vector3,
                            f = this.getLength();
                        for (c.push(u.copy(this.points[0]).clone()), t = 1; t < this.points.length; t++) {
                            for (s = f.chunks[t] - f.chunks[t - 1], l = Math.ceil(e * s / f.total), o = (t - 1) / (this.points.length - 1), n = t / (this.points.length - 1), i = 1; i < l - 1; i++) r = o + i * (1 / l) * (n - o), h = this.getPoint(r), c.push(u.copy(h).clone());
                            c.push(u.copy(this.points[t]).clone())
                        }
                        this.points = c
                    }
                }, a.Triangle = function(e, t, i) {
                    this.a = void 0 !== e ? e : new a.Vector3, this.b = void 0 !== t ? t : new a.Vector3, this.c = void 0 !== i ? i : new a.Vector3
                }, a.Triangle.normal = function() {
                    var e = new a.Vector3;
                    return function(t, i, r, o) {
                        var n = o || new a.Vector3;
                        n.subVectors(r, i), e.subVectors(t, i), n.cross(e);
                        var s = n.lengthSq();
                        return s > 0 ? n.multiplyScalar(1 / Math.sqrt(s)) : n.set(0, 0, 0)
                    }
                }(), a.Triangle.barycoordFromPoint = function() {
                    var e = new a.Vector3,
                        t = new a.Vector3,
                        i = new a.Vector3;
                    return function(r, o, n, s, l) {
                        e.subVectors(s, o), t.subVectors(n, o), i.subVectors(r, o);
                        var h = e.dot(e),
                            c = e.dot(t),
                            u = e.dot(i),
                            f = t.dot(t),
                            p = t.dot(i),
                            d = h * f - c * c,
                            m = l || new a.Vector3;
                        if (0 == d) return m.set(-2, -1, -1);
                        var g = 1 / d,
                            v = (f * u - c * p) * g,
                            y = (h * p - c * u) * g;
                        return m.set(1 - v - y, y, v)
                    }
                }(), a.Triangle.containsPoint = function() {
                    var e = new a.Vector3;
                    return function(t, i, r, o) {
                        var n = a.Triangle.barycoordFromPoint(t, i, r, o, e);
                        return n.x >= 0 && n.y >= 0 && n.x + n.y <= 1
                    }
                }(), a.Triangle.prototype = {
                    constructor: a.Triangle,
                    set: function(e, t, i) {
                        return this.a.copy(e), this.b.copy(t), this.c.copy(i), this
                    },
                    setFromPointsAndIndices: function(e, t, i, r) {
                        return this.a.copy(e[t]), this.b.copy(e[i]), this.c.copy(e[r]), this
                    },
                    copy: function(e) {
                        return this.a.copy(e.a), this.b.copy(e.b), this.c.copy(e.c), this
                    },
                    area: function() {
                        var e = new a.Vector3,
                            t = new a.Vector3;
                        return function() {
                            return e.subVectors(this.c, this.b), t.subVectors(this.a, this.b), .5 * e.cross(t).length()
                        }
                    }(),
                    midpoint: function(e) {
                        return (e || new a.Vector3).addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3)
                    },
                    normal: function(e) {
                        return a.Triangle.normal(this.a, this.b, this.c, e)
                    },
                    plane: function(e) {
                        return (e || new a.Plane).setFromCoplanarPoints(this.a, this.b, this.c)
                    },
                    barycoordFromPoint: function(e, t) {
                        return a.Triangle.barycoordFromPoint(e, this.a, this.b, this.c, t)
                    },
                    containsPoint: function(e) {
                        return a.Triangle.containsPoint(e, this.a, this.b, this.c)
                    },
                    equals: function(e) {
                        return e.a.equals(this.a) && e.b.equals(this.b) && e.c.equals(this.c)
                    },
                    clone: function() {
                        return (new a.Triangle).copy(this)
                    }
                }, a.Vertex = function(e) {
                    return a.onerror("THREE.Vertex has been DEPRECATED. Use THREE.Vector3 instead.")
                }, a.UV = function(e, t) {
                    return a.onerror("THREE.UV has been DEPRECATED. Use THREE.Vector2 instead."), new a.Vector2(e, t)
                }, a.Clock = function(e) {
                    this.autoStart = void 0 === e || e, this.startTime = 0, this.oldTime = 0, this.elapsedTime = 0, this.running = !1
                }, a.Clock.prototype = {
                    constructor: a.Clock,
                    start: function() {
                        this.startTime = void 0 !== r.performance && void 0 !== r.performance.now ? r.performance.now() : Date.now(), this.oldTime = this.startTime, this.running = !0
                    },
                    stop: function() {
                        this.getElapsedTime(), this.running = !1
                    },
                    getElapsedTime: function() {
                        return this.getDelta(), this.elapsedTime
                    },
                    getDelta: function() {
                        var e = 0;
                        if (this.autoStart && !this.running && this.start(), this.running) {
                            var t = void 0 !== r.performance && void 0 !== r.performance.now ? r.performance.now() : Date.now();
                            e = .001 * (t - this.oldTime), this.oldTime = t, this.elapsedTime += e
                        }
                        return e
                    }
                }, a.EventDispatcher = function() {}, a.EventDispatcher.prototype = {
                    constructor: a.EventDispatcher,
                    apply: function(e) {
                        e.addEventListener = a.EventDispatcher.prototype.addEventListener, e.hasEventListener = a.EventDispatcher.prototype.hasEventListener, e.removeEventListener = a.EventDispatcher.prototype.removeEventListener, e.dispatchEvent = a.EventDispatcher.prototype.dispatchEvent
                    },
                    addEventListener: function(e, t) {
                        void 0 === this._listeners && (this._listeners = {});
                        var i = this._listeners;
                        void 0 === i[e] && (i[e] = []), -1 === i[e].indexOf(t) && i[e].push(t)
                    },
                    hasEventListener: function(e, t) {
                        if (void 0 === this._listeners) return !1;
                        var i = this._listeners;
                        return void 0 !== i[e] && -1 !== i[e].indexOf(t)
                    },
                    removeEventListener: function(e, t) {
                        if (void 0 !== this._listeners) {
                            var i = this._listeners[e];
                            if (void 0 !== i) {
                                var r = i.indexOf(t); - 1 !== r && i.splice(r, 1)
                            }
                        }
                    },
                    dispatchEvent: function() {
                        var e = [];
                        return function(t) {
                            if (void 0 !== this._listeners) {
                                var i = this._listeners[t.type];
                                if (void 0 !== i) {
                                    t.target = this;
                                    for (var r = i.length, a = 0; a < r; a++) e[a] = i[a];
                                    for (a = 0; a < r; a++) e[a].call(this, t)
                                }
                            }
                        }
                    }()
                },
                function(e) {
                    e.Raycaster = function(t, i, r, a) {
                        this.ray = new e.Ray(t, i), this.near = r || 0, this.far = a || 1 / 0
                    };
                    var t = new e.Sphere,
                        i = new e.Ray,
                        r = (new e.Plane, new e.Vector3, new e.Vector3),
                        a = new e.Matrix4,
                        o = function(e, t) {
                            return e.distance - t.distance
                        },
                        n = new e.Vector3,
                        s = new e.Vector3,
                        l = new e.Vector3,
                        h = function(o, c, u) {
                            if (o instanceof e.Sprite) {
                                if (r.setFromMatrixPosition(o.matrixWorld), (f = c.ray.distanceToPoint(r)) > o.scale.x) return u;
                                u.push({
                                    distance: f,
                                    point: o.position,
                                    face: null,
                                    object: o
                                })
                            } else if (o instanceof e.LOD) {
                                r.setFromMatrixPosition(o.matrixWorld);
                                var f = c.ray.origin.distanceTo(r);
                                h(o.getObjectForDistance(f), c, u)
                            } else if (o instanceof e.Mesh) {
                                if (null === (G = o.geometry).boundingSphere && G.computeBoundingSphere(), t.copy(G.boundingSphere), t.applyMatrix4(o.matrixWorld), !1 === c.ray.isIntersectionSphere(t)) return u;
                                if (a.getInverse(o.matrixWorld), i.copy(c.ray).applyMatrix4(a), null !== G.boundingBox && !1 === i.isIntersectionBox(G.boundingBox)) return u;
                                if (G instanceof e.BufferGeometry) {
                                    if (void 0 === (U = o.material)) return u;
                                    var p = G.attributes,
                                        d = c.precision;
                                    if (void 0 !== p.index)
                                        for (var m = G.offsets, g = p.index.array, v = p.position.array, y = 0, x = m.length; y < x; ++y)
                                            for (var _ = m[y].start, M = m[y].count, w = m[y].index, S = _, b = _ + M; S < b; S += 3) {
                                                if (T = w + g[S], C = w + g[S + 1], E = w + g[S + 2], n.set(v[3 * T], v[3 * T + 1], v[3 * T + 2]), s.set(v[3 * C], v[3 * C + 1], v[3 * C + 2]), l.set(v[3 * E], v[3 * E + 1], v[3 * E + 2]), U.side === e.BackSide) var A = i.intersectTriangle(l, s, n, !0);
                                                else A = i.intersectTriangle(n, s, l, U.side !== e.DoubleSide);
                                                if (null !== A) A.applyMatrix4(o.matrixWorld), (f = c.ray.origin.distanceTo(A)) < d || f < c.near || f > c.far || u.push({
                                                    distance: f,
                                                    point: A,
                                                    indices: [T, C, E],
                                                    face: null,
                                                    faceIndex: null,
                                                    object: o
                                                })
                                            } else
                                                for (m = G.offsets, v = p.position.array, S = 0, b = p.position.array.length; S < b; S += 3) {
                                                    if (T = S, C = S + 1, E = S + 2, n.set(v[3 * T], v[3 * T + 1], v[3 * T + 2]), s.set(v[3 * C], v[3 * C + 1], v[3 * C + 2]), l.set(v[3 * E], v[3 * E + 1], v[3 * E + 2]), U.side === e.BackSide) A = i.intersectTriangle(l, s, n, !0);
                                                    else A = i.intersectTriangle(n, s, l, U.side !== e.DoubleSide);
                                                    if (null !== A) A.applyMatrix4(o.matrixWorld), (f = c.ray.origin.distanceTo(A)) < d || f < c.near || f > c.far || u.push({
                                                        distance: f,
                                                        point: A,
                                                        indices: [T, C, E],
                                                        face: null,
                                                        faceIndex: null,
                                                        object: o
                                                    })
                                                }
                                } else if (G instanceof e.Geometry)
                                    for (var T, C, E, L = o.material instanceof e.MeshFaceMaterial, P = !0 === L ? o.material.materials : null, R = (d = c.precision, G.vertices), D = 0, V = G.faces.length; D < V; D++) {
                                        var U, F = G.faces[D];
                                        if (void 0 !== (U = !0 === L ? P[F.materialIndex] : o.material)) {
                                            if (T = R[F.a], C = R[F.b], E = R[F.c], !0 === U.morphTargets) {
                                                var N = G.morphTargets,
                                                    O = o.morphTargetInfluences;
                                                n.set(0, 0, 0), s.set(0, 0, 0), l.set(0, 0, 0);
                                                for (var z = 0, I = N.length; z < I; z++) {
                                                    var B = O[z];
                                                    if (0 !== B) {
                                                        var k = N[z].vertices;
                                                        n.x += (k[F.a].x - T.x) * B, n.y += (k[F.a].y - T.y) * B, n.z += (k[F.a].z - T.z) * B, s.x += (k[F.b].x - C.x) * B, s.y += (k[F.b].y - C.y) * B, s.z += (k[F.b].z - C.z) * B, l.x += (k[F.c].x - E.x) * B, l.y += (k[F.c].y - E.y) * B, l.z += (k[F.c].z - E.z) * B
                                                    }
                                                }
                                                n.add(T), s.add(C), l.add(E), T = n, C = s, E = l
                                            }
                                            if (U.side === e.BackSide) A = i.intersectTriangle(E, C, T, !0);
                                            else A = i.intersectTriangle(T, C, E, U.side !== e.DoubleSide);
                                            if (null !== A) A.applyMatrix4(o.matrixWorld), (f = c.ray.origin.distanceTo(A)) < d || f < c.near || f > c.far || u.push({
                                                distance: f,
                                                point: A,
                                                face: F,
                                                faceIndex: D,
                                                object: o
                                            })
                                        }
                                    }
                            } else if (o instanceof e.Line) {
                                var G, H = (d = c.linePrecision) * d;
                                if (null === (G = o.geometry).boundingSphere && G.computeBoundingSphere(), t.copy(G.boundingSphere), t.applyMatrix4(o.matrixWorld), !1 === c.ray.isIntersectionSphere(t)) return u;
                                if (a.getInverse(o.matrixWorld), i.copy(c.ray).applyMatrix4(a), G instanceof e.Geometry) {
                                    var W = (R = G.vertices).length,
                                        j = new e.Vector3,
                                        X = new e.Vector3,
                                        Y = o.type === e.LineStrip ? 1 : 2;
                                    for (S = 0; S < W - 1; S += Y) {
                                        if (!(i.distanceSqToSegment(R[S], R[S + 1], X, j) > H))(f = i.origin.distanceTo(X)) < c.near || f > c.far || u.push({
                                            distance: f,
                                            point: j.clone().applyMatrix4(o.matrixWorld),
                                            face: null,
                                            faceIndex: null,
                                            object: o
                                        })
                                    }
                                }
                            }
                        },
                        c = function(e, t, i) {
                            for (var r = e.getDescendants(), a = 0, o = r.length; a < o; a++) h(r[a], t, i)
                        };
                    e.Raycaster.prototype.precision = 1e-4, e.Raycaster.prototype.linePrecision = 1, e.Raycaster.prototype.set = function(e, t) {
                        this.ray.set(e, t)
                    }, e.Raycaster.prototype.intersectObject = function(e, t) {
                        var i = [];
                        return !0 === t && c(e, this, i), h(e, this, i), i.sort(o), i
                    }, e.Raycaster.prototype.intersectObjects = function(e, t) {
                        for (var i = [], r = 0, a = e.length; r < a; r++) h(e[r], this, i), !0 === t && c(e[r], this, i);
                        return i.sort(o), i
                    }
                }(a), a.Object3D = function() {
                    this.id = a.Object3DIdCount++, this.uuid = a.Math.generateUUID(), this.className = "Object3D", this.name = "", this.parent = void 0, this.children = [], this.up = new a.Vector3(0, 1, 0), this.position = new a.Vector3, this._rotation = new a.Euler, this._quaternion = new a.Quaternion, this.scale = new a.Vector3(1, 1, 1), this._rotation._quaternion = this.quaternion, this._quaternion._euler = this.rotation, this.renderDepth = null, this.rotationAutoUpdate = !0, this.matrix = new a.Matrix4, this.matrixWorld = new a.Matrix4, this.matrixAutoUpdate = !0, this.matrixWorldNeedsUpdate = !0, this.visible = !0, this.castShadow = !1, this.receiveShadow = !1, this.frustumCulled = !0, this.userData = {}
                }, a.Object3D.prototype = {
                    constructor: a.Object3D,
                    get rotation() {
                        return this._rotation
                    },
                    set rotation(e) {
                        this._rotation = e, this._rotation._quaternion = this._quaternion, this._quaternion._euler = this._rotation, this._rotation._updateQuaternion()
                    },
                    get quaternion() {
                        return this._quaternion
                    },
                    set quaternion(e) {
                        this._quaternion = e, this._quaternion._euler = this._rotation, this._rotation._quaternion = this._quaternion, this._quaternion._updateEuler()
                    },
                    get eulerOrder() {
                        return a.onwarning("DEPRECATED: Object3D's .eulerOrder has been moved to Object3D's .rotation.order."), this.rotation.order
                    },
                    set eulerOrder(e) {
                        a.onwarning("DEPRECATED: Object3D's .eulerOrder has been moved to Object3D's .rotation.order."), this.rotation.order = e
                    },
                    get useQuaternion() {
                        a.onwarning("DEPRECATED: Object3D's .useQuaternion has been removed. The library now uses quaternions by default.")
                    },
                    set useQuaternion(e) {
                        a.onwarning("DEPRECATED: Object3D's .useQuaternion has been removed. The library now uses quaternions by default.")
                    },
                    applyMatrix: function(e) {
                        this.matrix.multiplyMatrices(e, this.matrix), this.matrix.decompose(this.position, this.quaternion, this.scale)
                    },
                    setRotationFromAxisAngle: function(e, t) {
                        this.quaternion.setFromAxisAngle(e, t)
                    },
                    setRotationFromEuler: function(e) {
                        this.quaternion.setFromEuler(e, !0)
                    },
                    setRotationFromMatrix: function(e) {
                        this.quaternion.setFromRotationMatrix(e)
                    },
                    setRotationFromQuaternion: function(e) {
                        this.quaternion.copy(e)
                    },
                    rotateOnAxis: function() {
                        var e = new a.Quaternion;
                        return function(t, i) {
                            return e.setFromAxisAngle(t, i), this.quaternion.multiply(e), this
                        }
                    }(),
                    rotateX: function() {
                        var e = new a.Vector3(1, 0, 0);
                        return function(t) {
                            return this.rotateOnAxis(e, t)
                        }
                    }(),
                    rotateY: function() {
                        var e = new a.Vector3(0, 1, 0);
                        return function(t) {
                            return this.rotateOnAxis(e, t)
                        }
                    }(),
                    rotateZ: function() {
                        var e = new a.Vector3(0, 0, 1);
                        return function(t) {
                            return this.rotateOnAxis(e, t)
                        }
                    }(),
                    translateOnAxis: function() {
                        var e = new a.Vector3;
                        return function(t, i) {
                            return e.copy(t), e.applyQuaternion(this.quaternion), this.position.add(e.multiplyScalar(i)), this
                        }
                    }(),
                    translate: function(e, t) {
                        return a.onwarning("DEPRECATED: Object3D's .translate() has been removed. Use .translateOnAxis( axis, distance ) instead. Note args have been changed."), this.translateOnAxis(t, e)
                    },
                    translateX: function() {
                        var e = new a.Vector3(1, 0, 0);
                        return function(t) {
                            return this.translateOnAxis(e, t)
                        }
                    }(),
                    translateY: function() {
                        var e = new a.Vector3(0, 1, 0);
                        return function(t) {
                            return this.translateOnAxis(e, t)
                        }
                    }(),
                    translateZ: function() {
                        var e = new a.Vector3(0, 0, 1);
                        return function(t) {
                            return this.translateOnAxis(e, t)
                        }
                    }(),
                    localToWorld: function(e) {
                        return e.applyMatrix4(this.matrixWorld)
                    },
                    worldToLocal: function() {
                        var e = new a.Matrix4;
                        return function(t) {
                            return t.applyMatrix4(e.getInverse(this.matrixWorld))
                        }
                    }(),
                    lookAt: function() {
                        var e = new a.Matrix4;
                        return function(t) {
                            e.lookAt(t, this.position, this.up), this.quaternion.setFromRotationMatrix(e)
                        }
                    }(),
                    add: function(e) {
                        if (e !== this) {
                            if (e instanceof a.Object3D) {
                                void 0 !== e.parent && e.parent.remove(e), e.parent = this, e.dispatchEvent({
                                    type: "added"
                                }), this.children.push(e);
                                for (var t = this; void 0 !== t.parent;) t = t.parent;
                                void 0 !== t && t instanceof a.Scene && t.__addObject(e)
                            }
                        } else a.onwarning("THREE.Object3D.add: An object can't be added as a child of itself.")
                    },
                    remove: function(e) {
                        var t = this.children.indexOf(e);
                        if (-1 !== t) {
                            e.parent = void 0, e.dispatchEvent({
                                type: "removed"
                            }), this.children.splice(t, 1);
                            for (var i = this; void 0 !== i.parent;) i = i.parent;
                            void 0 !== i && i instanceof a.Scene && i.__removeObject(e)
                        }
                    },
                    traverse: function(e) {
                        e(this);
                        for (var t = 0, i = this.children.length; t < i; t++) this.children[t].traverse(e)
                    },
                    getObjectById: function(e, t) {
                        for (var i = 0, r = this.children.length; i < r; i++) {
                            var a = this.children[i];
                            if (a.id === e) return a;
                            if (!0 === t && void 0 !== (a = a.getObjectById(e, t))) return a
                        }
                    },
                    getObjectByName: function(e, t) {
                        for (var i = 0, r = this.children.length; i < r; i++) {
                            var a = this.children[i];
                            if (a.name === e) return a;
                            if (!0 === t && void 0 !== (a = a.getObjectByName(e, t))) return a
                        }
                    },
                    getChildByName: function(e, t) {
                        return a.onwarning("DEPRECATED: Object3D's .getChildByName() has been renamed to .getObjectByName()."), this.getObjectByName(e, t)
                    },
                    getDescendants: function(e) {
                        void 0 === e && (e = []), Array.prototype.push.apply(e, this.children);
                        for (var t = 0, i = this.children.length; t < i; t++) this.children[t].getDescendants(e);
                        return e
                    },
                    updateMatrix: function() {
                        this.matrix.compose(this.position, this.quaternion, this.scale), this.matrixWorldNeedsUpdate = !0
                    },
                    updateMatrixWorld: function(e) {
                        !0 === this.matrixAutoUpdate && this.updateMatrix(), !0 !== this.matrixWorldNeedsUpdate && !0 !== e || (void 0 === this.parent ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), this.matrixWorldNeedsUpdate = !1, e = !0);
                        for (var t = 0, i = this.children.length; t < i; t++) this.children[t].updateMatrixWorld(e)
                    },
                    clone: function(e, t) {
                        if (void 0 === e && (e = new a.Object3D), void 0 === t && (t = !0), e.name = this.name, e.up.copy(this.up), e.position.copy(this.position), e.quaternion.copy(this.quaternion), e.scale.copy(this.scale), e.renderDepth = this.renderDepth, e.rotationAutoUpdate = this.rotationAutoUpdate, e.matrix.copy(this.matrix), e.matrixWorld.copy(this.matrixWorld), e.matrixAutoUpdate = this.matrixAutoUpdate, e.matrixWorldNeedsUpdate = this.matrixWorldNeedsUpdate, e.visible = this.visible, e.castShadow = this.castShadow, e.receiveShadow = this.receiveShadow, e.frustumCulled = this.frustumCulled, e.userData = JSON.parse(JSON.stringify(this.userData)), !0 === t)
                            for (var i = 0; i < this.children.length; i++) {
                                var r = this.children[i];
                                e.add(r.clone())
                            }
                        return e
                    }
                }, a.EventDispatcher.prototype.apply(a.Object3D.prototype), a.Object3DIdCount = 0, a.Projector = function() {
                    var e, t, i, r, o, n, s, l, h, c, u, f = [],
                        p = 0,
                        d = [],
                        m = 0,
                        g = [],
                        v = 0,
                        y = [],
                        x = 0,
                        _ = [],
                        M = 0,
                        w = {
                            objects: [],
                            lights: [],
                            elements: []
                        },
                        S = new a.Vector3,
                        b = new a.Vector3,
                        A = new a.Vector3,
                        T = new a.Vector3,
                        C = new a.Vector4,
                        E = new a.Box3(new a.Vector3(-1, -1, -1), new a.Vector3(1, 1, 1)),
                        L = new a.Box3,
                        P = new Array(3),
                        R = (new Array(4), new a.Matrix4),
                        D = new a.Matrix4,
                        V = new a.Matrix4,
                        U = new a.Matrix3,
                        F = new a.Frustum,
                        N = new a.Vector4,
                        O = new a.Vector4;
                    this.projectVector = function(e, t) {
                        return t.matrixWorldInverse.getInverse(t.matrixWorld), D.multiplyMatrices(t.projectionMatrix, t.matrixWorldInverse), e.applyProjection(D)
                    }, this.unprojectVector = function() {
                        var e = new a.Matrix4;
                        return function(t, i) {
                            return e.getInverse(i.projectionMatrix), D.multiplyMatrices(i.matrixWorld, e), t.applyProjection(D)
                        }
                    }(), this.pickingRay = function(e, t) {
                        e.z = -1;
                        var i = new a.Vector3(e.x, e.y, 1);
                        return this.unprojectVector(e, t), this.unprojectVector(i, t), i.sub(e).normalize(), new a.Raycaster(e, i)
                    };
                    var z = function(i) {
                            if (!1 !== i.visible) {
                                i instanceof a.Light ? w.lights.push(i) : (i instanceof a.Mesh || i instanceof a.Line || i instanceof a.Sprite) && (!1 !== i.frustumCulled && !0 !== F.intersectsObject(i) || ((e = function() {
                                    if (t === p) {
                                        var e = new a.RenderableObject;
                                        return f.push(e), p++, t++, e
                                    }
                                    return f[t++]
                                }()).id = i.id, e.object = i, null !== i.renderDepth ? e.z = i.renderDepth : (T.setFromMatrixPosition(i.matrixWorld), T.applyProjection(D), e.z = T.z), w.objects.push(e)));
                                for (var r = 0, o = i.children.length; r < o; r++) z(i.children[r])
                            }
                        },
                        I = new function() {
                            var e = [],
                                t = null,
                                r = new a.Matrix3,
                                n = function(e) {
                                    var t = e.position,
                                        i = e.positionWorld,
                                        r = e.positionScreen;
                                    i.copy(t).applyMatrix4(u), r.copy(i).applyMatrix4(D);
                                    var a = 1 / r.w;
                                    r.x *= a, r.y *= a, r.z *= a, e.visible = r.x >= -1 && r.x <= 1 && r.y >= -1 && r.y <= 1 && r.z >= -1 && r.z <= 1
                                },
                                l = function(e, t, i) {
                                    return P[0] = e.positionScreen, P[1] = t.positionScreen, P[2] = i.positionScreen, !(!0 !== e.visible && !0 !== t.visible && !0 !== i.visible && !E.isIntersectionBox(L.setFromPoints(P))) && (i.positionScreen.x - e.positionScreen.x) * (t.positionScreen.y - e.positionScreen.y) - (i.positionScreen.y - e.positionScreen.y) * (t.positionScreen.x - e.positionScreen.x) < 0
                                };
                            return {
                                setObject: function(i) {
                                    t = i, r.getNormalMatrix(t.matrixWorld), e.length = 0
                                },
                                projectVertex: n,
                                checkTriangleVisibility: l,
                                pushVertex: function(e, t, r) {
                                    (i = B()).position.set(e, t, r), n(i)
                                },
                                pushNormal: function(t, i, r) {
                                    e.push(t, i, r)
                                },
                                pushLine: function(e, i) {
                                    var r = d[e],
                                        a = d[i];
                                    (s = G()).id = t.id, s.v1.copy(r), s.v2.copy(a), s.z = (r.positionScreen.z + a.positionScreen.z) / 2, s.material = t.material, w.elements.push(s)
                                },
                                pushTriangle: function(i, a, n) {
                                    var s = d[i],
                                        h = d[a],
                                        c = d[n];
                                    if (!0 === l(s, h, c)) {
                                        (o = k()).id = t.id, o.v1.copy(s), o.v2.copy(h), o.v3.copy(c), o.z = (s.positionScreen.z + h.positionScreen.z + c.positionScreen.z) / 3;
                                        for (var u = 0; u < 3; u++) {
                                            var f = 3 * arguments[u],
                                                p = o.vertexNormalsModel[u];
                                            p.set(e[f + 0], e[f + 1], e[f + 2]), p.applyMatrix3(r).normalize()
                                        }
                                        o.vertexNormalsLength = 3, o.material = t.material, w.elements.push(o)
                                    }
                                }
                            }
                        };

                    function B() {
                        if (r === m) {
                            var e = new a.RenderableVertex;
                            return d.push(e), m++, r++, e
                        }
                        return d[r++]
                    }

                    function k() {
                        if (n === v) {
                            var e = new a.RenderableFace;
                            return g.push(e), v++, n++, e
                        }
                        return g[n++]
                    }

                    function G() {
                        if (l === x) {
                            var e = new a.RenderableLine;
                            return y.push(e), x++, l++, e
                        }
                        return y[l++]
                    }

                    function H() {
                        if (c === M) {
                            var e = new a.RenderableSprite;
                            return _.push(e), M++, c++, e
                        }
                        return _[c++]
                    }

                    function W(e, t) {
                        return e.z !== t.z ? t.z - e.z : e.id !== t.id ? e.id - t.id : 0
                    }

                    function j(e, t) {
                        var i = 0,
                            r = 1,
                            a = e.z + e.w,
                            o = t.z + t.w,
                            n = -e.z + e.w,
                            s = -t.z + t.w;
                        return a >= 0 && o >= 0 && n >= 0 && s >= 0 || !(a < 0 && o < 0 || n < 0 && s < 0) && (a < 0 ? i = Math.max(i, a / (a - o)) : o < 0 && (r = Math.min(r, a / (a - o))), n < 0 ? i = Math.max(i, n / (n - s)) : s < 0 && (r = Math.min(r, n / (n - s))), !(r < i) && (e.lerp(t, i), t.lerp(e, 1 - r), !0))
                    }
                    this.projectScene = function(e, i, f, p) {
                        var m, g, v, y, x, _, M, T, E, L;
                        n = 0, l = 0, c = 0, w.elements.length = 0, !0 === e.autoUpdate && e.updateMatrixWorld(), void 0 === i.parent && i.updateMatrixWorld(), R.copy(i.matrixWorldInverse.getInverse(i.matrixWorld)), D.multiplyMatrices(i.projectionMatrix, R), F.setFromMatrix(D),
                            function(e, i) {
                                t = 0, w.objects.length = 0, w.lights.length = 0, z(e), !0 === i && w.objects.sort(W)
                            }(e, f);
                        for (var P = 0, X = w.objects.length; P < X; P++)
                            if (g = (m = w.objects[P].object).geometry, I.setObject(m), u = m.matrixWorld, r = 0, m instanceof a.Mesh) {
                                if (g instanceof a.BufferGeometry) {
                                    var Y = g.attributes,
                                        q = g.offsets;
                                    if (void 0 === Y.position) continue;
                                    for (var K = 0, Q = (Ee = Y.position.array).length; K < Q; K += 3) I.pushVertex(Ee[K], Ee[K + 1], Ee[K + 2]);
                                    var Z = Y.normal.array;
                                    for (K = 0, Q = Z.length; K < Q; K += 3) I.pushNormal(Z[K], Z[K + 1], Z[K + 2]);
                                    if (void 0 !== Y.index) {
                                        var J = Y.index.array;
                                        if (q.length > 0)
                                            for (P = 0; P < q.length; P++) {
                                                var $ = q[P],
                                                    ee = $.index;
                                                for (K = $.start, Q = $.start + $.count; K < Q; K += 3) I.pushTriangle(J[K] + ee, J[K + 1] + ee, J[K + 2] + ee)
                                            } else
                                                for (K = 0, Q = J.length; K < Q; K += 3) I.pushTriangle(J[K], J[K + 1], J[K + 2])
                                    } else
                                        for (K = 0, Q = Ee.length / 3; K < Q; K += 3) I.pushTriangle(K, K + 1, K + 2)
                                } else if (g instanceof a.Geometry) {
                                    v = g.vertices, y = g.faces, M = g.faceVertexUvs, U.getNormalMatrix(u), L = !0 === (E = m.material instanceof a.MeshFaceMaterial) ? m.material : null;
                                    for (var te = 0, ie = v.length; te < ie; te++) {
                                        var re = v[te];
                                        I.pushVertex(re.x, re.y, re.z)
                                    }
                                    for (var ae = 0, oe = y.length; ae < oe; ae++) {
                                        x = y[ae];
                                        var ne = !0 === E ? L.materials[x.materialIndex] : m.material;
                                        if (void 0 !== ne) {
                                            var se = ne.side,
                                                le = d[x.a],
                                                he = d[x.b],
                                                ce = d[x.c];
                                            if (!0 === ne.morphTargets) {
                                                var ue = g.morphTargets,
                                                    fe = m.morphTargetInfluences,
                                                    pe = le.position,
                                                    de = he.position,
                                                    me = ce.position;
                                                S.set(0, 0, 0), b.set(0, 0, 0), A.set(0, 0, 0);
                                                for (var ge = 0, ve = ue.length; ge < ve; ge++) {
                                                    var ye = fe[ge];
                                                    if (0 !== ye) {
                                                        var xe = ue[ge].vertices;
                                                        S.x += (xe[x.a].x - pe.x) * ye, S.y += (xe[x.a].y - pe.y) * ye, S.z += (xe[x.a].z - pe.z) * ye, b.x += (xe[x.b].x - de.x) * ye, b.y += (xe[x.b].y - de.y) * ye, b.z += (xe[x.b].z - de.z) * ye, A.x += (xe[x.c].x - me.x) * ye, A.y += (xe[x.c].y - me.y) * ye, A.z += (xe[x.c].z - me.z) * ye
                                                    }
                                                }
                                                le.position.add(S), he.position.add(b), ce.position.add(A), I.projectVertex(le), I.projectVertex(he), I.projectVertex(ce)
                                            }
                                            var _e = I.checkTriangleVisibility(le, he, ce);
                                            if (!(!1 === _e && se === a.FrontSide || !0 === _e && se === a.BackSide)) {
                                                (o = k()).id = m.id, o.v1.copy(le), o.v2.copy(he), o.v3.copy(ce), o.normalModel.copy(x.normal), !1 !== _e || se !== a.BackSide && se !== a.DoubleSide || o.normalModel.negate(), o.normalModel.applyMatrix3(U).normalize(), o.centroidModel.copy(x.centroid).applyMatrix4(u), _ = x.vertexNormals;
                                                for (var Me = 0, we = Math.min(_.length, 3); Me < we; Me++) {
                                                    var Se = o.vertexNormalsModel[Me];
                                                    Se.copy(_[Me]), !1 !== _e || se !== a.BackSide && se !== a.DoubleSide || Se.negate(), Se.applyMatrix3(U).normalize()
                                                }
                                                o.vertexNormalsLength = _.length;
                                                for (var be = 0, Ae = Math.min(M.length, 3); be < Ae; be++)
                                                    if (void 0 !== (T = M[be][ae]))
                                                        for (var Te = 0, Ce = T.length; Te < Ce; Te++) o.uvs[be][Te] = T[Te];
                                                o.color = x.color, o.material = ne, o.z = (le.positionScreen.z + he.positionScreen.z + ce.positionScreen.z) / 3, w.elements.push(o)
                                            }
                                        }
                                    }
                                }
                            } else if (m instanceof a.Line) {
                            if (g instanceof a.BufferGeometry) {
                                if (void 0 !== (Y = g.attributes).position) {
                                    var Ee;
                                    for (K = 0, Q = (Ee = Y.position.array).length; K < Q; K += 3) I.pushVertex(Ee[K], Ee[K + 1], Ee[K + 2]);
                                    if (void 0 !== Y.index)
                                        for (K = 0, Q = (J = Y.index.array).length; K < Q; K += 2) I.pushLine(J[K], J[K + 1]);
                                    else
                                        for (K = 0, Q = Ee.length / 3 - 1; K < Q; K++) I.pushLine(K, K + 1)
                                }
                            } else if (g instanceof a.Geometry) {
                                if (V.multiplyMatrices(D, u), 0 === (v = m.geometry.vertices).length) continue;
                                (le = B()).positionScreen.copy(v[0]).applyMatrix4(V);
                                var Le = m.type === a.LinePieces ? 2 : 1;
                                for (te = 1, ie = v.length; te < ie; te++)(le = B()).positionScreen.copy(v[te]).applyMatrix4(V), (te + 1) % Le > 0 || (he = d[r - 2], N.copy(le.positionScreen), O.copy(he.positionScreen), !0 === j(N, O) && (N.multiplyScalar(1 / N.w), O.multiplyScalar(1 / O.w), (s = G()).id = m.id, s.v1.positionScreen.copy(N), s.v2.positionScreen.copy(O), s.z = Math.max(N.z, O.z), s.material = m.material, m.material.vertexColors === a.VertexColors && (s.vertexColors[0].copy(m.geometry.colors[te]), s.vertexColors[1].copy(m.geometry.colors[te - 1])), w.elements.push(s)))
                            }
                        } else if (m instanceof a.Sprite) {
                            C.set(u.elements[12], u.elements[13], u.elements[14], 1), C.applyMatrix4(D);
                            var Pe = 1 / C.w;
                            C.z *= Pe, C.z >= -1 && C.z <= 1 && ((h = H()).id = m.id, h.x = C.x * Pe, h.y = C.y * Pe, h.z = C.z, h.object = m, h.rotation = m.rotation, h.scale.x = m.scale.x * Math.abs(h.x - (C.x + i.projectionMatrix.elements[0]) / (C.w + i.projectionMatrix.elements[12])), h.scale.y = m.scale.y * Math.abs(h.y - (C.y + i.projectionMatrix.elements[5]) / (C.w + i.projectionMatrix.elements[13])), h.material = m.material, w.elements.push(h))
                        }
                        return !0 === p && w.elements.sort(W), w
                    }
                }, a.Face3 = function(e, t, i, r, o, n) {
                    this.a = e, this.b = t, this.c = i, this.normal = r instanceof a.Vector3 ? r : new a.Vector3, this.vertexNormals = r instanceof Array ? r : [], this.color = o instanceof a.Color ? o : new a.Color, this.vertexColors = o instanceof Array ? o : [], this.vertexTangents = [], this.materialIndex = void 0 !== n ? n : 0, this.centroid = new a.Vector3
                }, a.Face3.prototype = {
                    constructor: a.Face3,
                    clone: function() {
                        var e, t, i = new a.Face3(this.a, this.b, this.c);
                        for (i.normal.copy(this.normal), i.color.copy(this.color), i.centroid.copy(this.centroid), i.materialIndex = this.materialIndex, e = 0, t = this.vertexNormals.length; e < t; e++) i.vertexNormals[e] = this.vertexNormals[e].clone();
                        for (e = 0, t = this.vertexColors.length; e < t; e++) i.vertexColors[e] = this.vertexColors[e].clone();
                        for (e = 0, t = this.vertexTangents.length; e < t; e++) i.vertexTangents[e] = this.vertexTangents[e].clone();
                        return i
                    }
                }, a.Face4 = function(e, t, i, r, o, n, s) {
                    return a.onwarning("THREE.Face4 has been removed. A THREE.Face3 will be created instead."), new a.Face3(e, t, i, o, n, s)
                }, a.BufferGeometry = function() {
                    this.id = a.GeometryIdCount++, this.uuid = a.Math.generateUUID(), this.className = "BufferGeometry", this.name = "", this.attributes = {}, this.offsets = [], this.boundingBox = null, this.boundingSphere = null
                }, a.BufferGeometry.prototype = {
                    constructor: a.BufferGeometry,
                    addAttribute: function(e, t, i, r) {
                        return this.attributes[e] = {
                            array: new t(i * r),
                            itemSize: r
                        }, this.attributes[e]
                    },
                    applyMatrix: function(e) {
                        var t = this.attributes.position;
                        void 0 !== t && (e.multiplyVector3Array(t.array), t.needsUpdate = !0);
                        var i = this.attributes.normal;
                        void 0 !== i && ((new a.Matrix3).getNormalMatrix(e).multiplyVector3Array(i.array), i.needsUpdate = !0)
                    },
                    computeBoundingBox: function() {
                        null === this.boundingBox && (this.boundingBox = new a.Box3);
                        var e = this.attributes.position.array;
                        if (e) {
                            var t = this.boundingBox;
                            e.length >= 3 && (t.min.x = t.max.x = e[0], t.min.y = t.max.y = e[1], t.min.z = t.max.z = e[2]);
                            for (var i = 3, r = e.length; i < r; i += 3) {
                                var o = e[i],
                                    n = e[i + 1],
                                    s = e[i + 2];
                                o < t.min.x ? t.min.x = o : o > t.max.x && (t.max.x = o), n < t.min.y ? t.min.y = n : n > t.max.y && (t.max.y = n), s < t.min.z ? t.min.z = s : s > t.max.z && (t.max.z = s)
                            }
                        }
                        void 0 !== e && 0 !== e.length || (this.boundingBox.min.set(0, 0, 0), this.boundingBox.max.set(0, 0, 0))
                    },
                    computeBoundingSphere: function() {
                        var e = new a.Box3,
                            t = new a.Vector3;
                        return function() {
                            null === this.boundingSphere && (this.boundingSphere = new a.Sphere);
                            var i = this.attributes.position.array;
                            if (i) {
                                e.makeEmpty();
                                for (var r = this.boundingSphere.center, o = 0, n = i.length; o < n; o += 3) t.set(i[o], i[o + 1], i[o + 2]), e.addPoint(t);
                                e.center(r);
                                var s = 0;
                                for (o = 0, n = i.length; o < n; o += 3) t.set(i[o], i[o + 1], i[o + 2]), s = Math.max(s, r.distanceToSquared(t));
                                this.boundingSphere.radius = Math.sqrt(s)
                            }
                        }
                    }(),
                    computeVertexNormals: function() {
                        if (this.attributes.position) {
                            var e, t, i, r, o = this.attributes.position.array.length;
                            if (void 0 === this.attributes.normal) this.attributes.normal = {
                                itemSize: 3,
                                array: new Float32Array(o)
                            };
                            else
                                for (e = 0, t = this.attributes.normal.array.length; e < t; e++) this.attributes.normal.array[e] = 0;
                            var n, s, l, h, c, u, f = this.attributes.position.array,
                                p = this.attributes.normal.array,
                                d = new a.Vector3,
                                m = new a.Vector3,
                                g = new a.Vector3,
                                v = new a.Vector3,
                                y = new a.Vector3;
                            if (this.attributes.index) {
                                var x = this.attributes.index.array,
                                    _ = this.offsets;
                                for (i = 0, r = _.length; i < r; ++i) {
                                    var M = _[i].start,
                                        w = _[i].count,
                                        S = _[i].index;
                                    for (e = M, t = M + w; e < t; e += 3) n = S + x[e], s = S + x[e + 1], l = S + x[e + 2], h = f[3 * n], c = f[3 * n + 1], u = f[3 * n + 2], d.set(h, c, u), h = f[3 * s], c = f[3 * s + 1], u = f[3 * s + 2], m.set(h, c, u), h = f[3 * l], c = f[3 * l + 1], u = f[3 * l + 2], g.set(h, c, u), v.subVectors(g, m), y.subVectors(d, m), v.cross(y), p[3 * n] += v.x, p[3 * n + 1] += v.y, p[3 * n + 2] += v.z, p[3 * s] += v.x, p[3 * s + 1] += v.y, p[3 * s + 2] += v.z, p[3 * l] += v.x, p[3 * l + 1] += v.y, p[3 * l + 2] += v.z
                                }
                            } else
                                for (e = 0, t = f.length; e < t; e += 9) h = f[e], c = f[e + 1], u = f[e + 2], d.set(h, c, u), h = f[e + 3], c = f[e + 4], u = f[e + 5], m.set(h, c, u), h = f[e + 6], c = f[e + 7], u = f[e + 8], g.set(h, c, u), v.subVectors(g, m), y.subVectors(d, m), v.cross(y), p[e] = v.x, p[e + 1] = v.y, p[e + 2] = v.z, p[e + 3] = v.x, p[e + 4] = v.y, p[e + 5] = v.z, p[e + 6] = v.x, p[e + 7] = v.y, p[e + 8] = v.z;
                            this.normalizeNormals(), this.normalsNeedUpdate = !0
                        }
                    },
                    normalizeNormals: function() {
                        for (var e, t, i, r, a = this.attributes.normal.array, o = 0, n = a.length; o < n; o += 3) e = a[o], t = a[o + 1], i = a[o + 2], r = 1 / Math.sqrt(e * e + t * t + i * i), a[o] *= r, a[o + 1] *= r, a[o + 2] *= r
                    },
                    computeTangents: function() {
                        if (void 0 !== this.attributes.index && void 0 !== this.attributes.position && void 0 !== this.attributes.normal && void 0 !== this.attributes.uv) {
                            var e = this.attributes.index.array,
                                t = this.attributes.position.array,
                                i = this.attributes.normal.array,
                                r = this.attributes.uv.array,
                                o = t.length / 3;
                            if (void 0 === this.attributes.tangent) {
                                var n = 4 * o;
                                this.attributes.tangent = {
                                    itemSize: 4,
                                    array: new Float32Array(n)
                                }
                            }
                            for (var s, l, h, c, u, f, p, d, m, g, v, y, x, _, M, w, S, b, A, T, C, E, L, P, R, D, V = this.attributes.tangent.array, U = [], F = [], N = 0; N < o; N++) U[N] = new a.Vector3, F[N] = new a.Vector3;
                            var O, z, I, B, k, G, H, W, j, X, Y = new a.Vector3,
                                q = new a.Vector3,
                                K = this.offsets;
                            for (I = 0, B = K.length; I < B; ++I) {
                                var Q = K[I].start,
                                    Z = K[I].count,
                                    J = K[I].index;
                                for (O = Q, z = Q + Z; O < z; O += 3) k = J + e[O], G = J + e[O + 1], H = J + e[O + 2], j = G, X = H, s = t[3 * (W = k)], l = t[3 * W + 1], h = t[3 * W + 2], c = t[3 * j], u = t[3 * j + 1], f = t[3 * j + 2], p = t[3 * X], d = t[3 * X + 1], m = t[3 * X + 2], g = r[2 * W], v = r[2 * W + 1], y = r[2 * j], x = r[2 * j + 1], _ = r[2 * X], M = r[2 * X + 1], w = c - s, S = p - s, b = u - l, A = d - l, T = f - h, C = m - h, D = 1 / ((E = y - g) * (R = M - v) - (L = _ - g) * (P = x - v)), Y.set((R * w - P * S) * D, (R * b - P * A) * D, (R * T - P * C) * D), q.set((E * S - L * w) * D, (E * A - L * b) * D, (E * C - L * T) * D), U[W].add(Y), U[j].add(Y), U[X].add(Y), F[W].add(q), F[j].add(q), F[X].add(q)
                            }
                            var $, ee, te, ie = new a.Vector3,
                                re = new a.Vector3,
                                ae = new a.Vector3,
                                oe = new a.Vector3;
                            for (I = 0, B = K.length; I < B; ++I) {
                                Q = K[I].start, Z = K[I].count, J = K[I].index;
                                for (O = Q, z = Q + Z; O < z; O += 3) k = J + e[O], G = J + e[O + 1], H = J + e[O + 2], ne(k), ne(G), ne(H)
                            }
                        } else a.onwarning("Missing required attributes (index, position, normal or uv) in BufferGeometry.computeTangents()");

                        function ne(e) {
                            ae.x = i[3 * e], ae.y = i[3 * e + 1], ae.z = i[3 * e + 2], oe.copy(ae), ee = U[e], ie.copy(ee), ie.sub(ae.multiplyScalar(ae.dot(ee))).normalize(), re.crossVectors(oe, ee), te = re.dot(F[e]), $ = te < 0 ? -1 : 1, V[4 * e] = ie.x, V[4 * e + 1] = ie.y, V[4 * e + 2] = ie.z, V[4 * e + 3] = $
                        }
                    },
                    computeOffsets: function(e) {
                        var t = e;
                        void 0 === e && (t = 65535);
                        Date.now();
                        for (var i = this.attributes.index.array, r = this.attributes.position.array, a = (r.length, i.length / 3), o = new Uint16Array(i.length), n = 0, s = 0, l = [{
                                start: 0,
                                count: 0,
                                index: 0
                            }], h = l[0], c = 0, u = new Int32Array(6), f = new Int32Array(r.length), p = new Int32Array(r.length), d = 0; d < r.length; d++) f[d] = -1, p[d] = -1;
                        for (var m = 0; m < a; m++) {
                            c = 0;
                            for (var g = 0; g < 3; g++) {
                                -1 == f[_ = i[3 * m + g]] ? (u[2 * g] = _, u[2 * g + 1] = -1, c++) : f[_] < h.index ? (u[2 * g] = _, u[2 * g + 1] = -1) : (u[2 * g] = _, u[2 * g + 1] = f[_])
                            }
                            if (s + c > h.index + t) {
                                var v = {
                                    start: n,
                                    count: 0,
                                    index: s
                                };
                                l.push(v), h = v;
                                for (var y = 0; y < 6; y += 2) {
                                    (x = u[y + 1]) > -1 && x < h.index && (u[y + 1] = -1)
                                }
                            }
                            for (y = 0; y < 6; y += 2) {
                                var x, _ = u[y]; - 1 === (x = u[y + 1]) && (x = s++), f[_] = x, p[x] = _, o[n++] = x - h.index, h.count++
                            }
                        }
                        return this.reorderBuffers(o, p, s), this.offsets = l, l
                    },
                    reorderBuffers: function(e, t, i) {
                        var r = {},
                            a = [Int8Array, Uint8Array, Uint8ClampedArray, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array];
                        for (var o in this.attributes)
                            if ("index" != o)
                                for (var n = this.attributes[o].array, s = 0, l = a.length; s < l; s++) {
                                    var h = a[s];
                                    if (n instanceof h) {
                                        r[o] = new h(this.attributes[o].itemSize * i);
                                        break
                                    }
                                }
                        for (var c = 0; c < i; c++) {
                            var u = t[c];
                            for (var o in this.attributes)
                                if ("index" != o)
                                    for (var f = this.attributes[o].array, p = this.attributes[o].itemSize, d = r[o], m = 0; m < p; m++) d[c * p + m] = f[u * p + m]
                        }
                        for (var o in this.attributes.index.array = e, this.attributes) "index" != o && (this.attributes[o].array = r[o], this.attributes[o].numItems = this.attributes[o].itemSize * i)
                    },
                    clone: function() {
                        var e = new a.BufferGeometry,
                            t = [Int8Array, Uint8Array, Uint8ClampedArray, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array];
                        for (var i in this.attributes) {
                            for (var r = this.attributes[i], o = r.array, n = {
                                    itemSize: r.itemSize,
                                    array: null
                                }, s = 0, l = t.length; s < l; s++) {
                                var h = t[s];
                                if (o instanceof h) {
                                    n.array = new h(o);
                                    break
                                }
                            }
                            e.attributes[i] = n
                        }
                        for (s = 0, l = this.offsets.length; s < l; s++) {
                            var c = this.offsets[s];
                            e.offsets.push({
                                start: c.start,
                                index: c.index,
                                count: c.count
                            })
                        }
                        return e
                    },
                    dispose: function() {
                        this.dispatchEvent({
                            type: "dispose"
                        })
                    }
                }, a.EventDispatcher.prototype.apply(a.BufferGeometry.prototype), a.Geometry = function() {
                    this.id = a.GeometryIdCount++, this.uuid = a.Math.generateUUID(), this.className = "Geometry", this.name = "", this.vertices = [], this.colors = [], this.faces = [], this.faceVertexUvs = [
                        []
                    ], this.morphTargets = [], this.morphColors = [], this.morphNormals = [], this.skinWeights = [], this.skinIndices = [], this.lineDistances = [], this.boundingBox = null, this.boundingSphere = null, this.hasTangents = !0, this.dynamic = !0, this.verticesNeedUpdate = !1, this.elementsNeedUpdate = !1, this.uvsNeedUpdate = !1, this.normalsNeedUpdate = !1, this.tangentsNeedUpdate = !1, this.colorsNeedUpdate = !1, this.lineDistancesNeedUpdate = !1, this.buffersNeedUpdate = !1
                }, a.Geometry.prototype = {
                    constructor: a.Geometry,
                    applyMatrix: function(e) {
                        for (var t = (new a.Matrix3).getNormalMatrix(e), i = 0, r = this.vertices.length; i < r; i++) {
                            this.vertices[i].applyMatrix4(e)
                        }
                        for (i = 0, r = this.faces.length; i < r; i++) {
                            var o = this.faces[i];
                            o.normal.applyMatrix3(t).normalize();
                            for (var n = 0, s = o.vertexNormals.length; n < s; n++) o.vertexNormals[n].applyMatrix3(t).normalize();
                            o.centroid.applyMatrix4(e)
                        }
                        this.boundingBox instanceof a.Box3 && this.computeBoundingBox(), this.boundingSphere instanceof a.Sphere && this.computeBoundingSphere()
                    },
                    computeCentroids: function() {
                        var e, t, i;
                        for (e = 0, t = this.faces.length; e < t; e++)(i = this.faces[e]).centroid.set(0, 0, 0), i.centroid.add(this.vertices[i.a]), i.centroid.add(this.vertices[i.b]), i.centroid.add(this.vertices[i.c]), i.centroid.divideScalar(3)
                    },
                    computeFaceNormals: function() {
                        for (var e = new a.Vector3, t = new a.Vector3, i = 0, r = this.faces.length; i < r; i++) {
                            var o = this.faces[i],
                                n = this.vertices[o.a],
                                s = this.vertices[o.b],
                                l = this.vertices[o.c];
                            e.subVectors(l, s), t.subVectors(n, s), e.cross(t), e.normalize(), o.normal.copy(e)
                        }
                    },
                    computeVertexNormals: function(e) {
                        var t, i, r, o, n, s;
                        for (s = new Array(this.vertices.length), t = 0, i = this.vertices.length; t < i; t++) s[t] = new a.Vector3;
                        if (e) {
                            var l, h, c, u = new a.Vector3,
                                f = new a.Vector3;
                            new a.Vector3, new a.Vector3, new a.Vector3;
                            for (r = 0, o = this.faces.length; r < o; r++) n = this.faces[r], l = this.vertices[n.a], h = this.vertices[n.b], c = this.vertices[n.c], u.subVectors(c, h), f.subVectors(l, h), u.cross(f), s[n.a].add(u), s[n.b].add(u), s[n.c].add(u)
                        } else
                            for (r = 0, o = this.faces.length; r < o; r++) s[(n = this.faces[r]).a].add(n.normal), s[n.b].add(n.normal), s[n.c].add(n.normal);
                        for (t = 0, i = this.vertices.length; t < i; t++) s[t].normalize();
                        for (r = 0, o = this.faces.length; r < o; r++)(n = this.faces[r]).vertexNormals[0] = s[n.a].clone(), n.vertexNormals[1] = s[n.b].clone(), n.vertexNormals[2] = s[n.c].clone()
                    },
                    computeMorphNormals: function() {
                        var e, t, i, r, o;
                        for (i = 0, r = this.faces.length; i < r; i++)
                            for ((o = this.faces[i]).__originalFaceNormal ? o.__originalFaceNormal.copy(o.normal) : o.__originalFaceNormal = o.normal.clone(), o.__originalVertexNormals || (o.__originalVertexNormals = []), e = 0, t = o.vertexNormals.length; e < t; e++) o.__originalVertexNormals[e] ? o.__originalVertexNormals[e].copy(o.vertexNormals[e]) : o.__originalVertexNormals[e] = o.vertexNormals[e].clone();
                        var n = new a.Geometry;
                        for (n.faces = this.faces, e = 0, t = this.morphTargets.length; e < t; e++) {
                            if (!this.morphNormals[e]) {
                                this.morphNormals[e] = {}, this.morphNormals[e].faceNormals = [], this.morphNormals[e].vertexNormals = [];
                                var s = this.morphNormals[e].faceNormals,
                                    l = this.morphNormals[e].vertexNormals;
                                for (i = 0, r = this.faces.length; i < r; i++) o = this.faces[i], h = new a.Vector3, c = {
                                    a: new a.Vector3,
                                    b: new a.Vector3,
                                    c: new a.Vector3
                                }, s.push(h), l.push(c)
                            }
                            var h, c, u = this.morphNormals[e];
                            for (n.vertices = this.morphTargets[e].vertices, n.computeFaceNormals(), n.computeVertexNormals(), i = 0, r = this.faces.length; i < r; i++) o = this.faces[i], h = u.faceNormals[i], c = u.vertexNormals[i], h.copy(o.normal), c.a.copy(o.vertexNormals[0]), c.b.copy(o.vertexNormals[1]), c.c.copy(o.vertexNormals[2])
                        }
                        for (i = 0, r = this.faces.length; i < r; i++)(o = this.faces[i]).normal = o.__originalFaceNormal, o.vertexNormals = o.__originalVertexNormals
                    },
                    computeTangents: function() {
                        var e, t, i, r, o, n, s, l, h, c, u, f, p, d, m, g, v, y, x, _, M, w, S, b, A, T, C, E, L, P, R, D, V, U, F = [],
                            N = [],
                            O = new a.Vector3,
                            z = new a.Vector3,
                            I = new a.Vector3,
                            B = new a.Vector3,
                            k = new a.Vector3;
                        for (i = 0, r = this.vertices.length; i < r; i++) F[i] = new a.Vector3, N[i] = new a.Vector3;
                        for (e = 0, t = this.faces.length; e < t; e++) s = this.faces[e], l = this.faceVertexUvs[0][e], E = this, L = s.a, P = s.b, R = s.c, D = 0, V = 1, U = 2, h = E.vertices[L], c = E.vertices[P], u = E.vertices[R], f = l[D], p = l[V], d = l[U], m = c.x - h.x, g = u.x - h.x, v = c.y - h.y, y = u.y - h.y, x = c.z - h.z, _ = u.z - h.z, M = p.x - f.x, w = d.x - f.x, S = p.y - f.y, b = d.y - f.y, A = 1 / (M * b - w * S), O.set((b * m - S * g) * A, (b * v - S * y) * A, (b * x - S * _) * A), z.set((M * g - w * m) * A, (M * y - w * v) * A, (M * _ - w * x) * A), F[L].add(O), F[P].add(O), F[R].add(O), N[L].add(z), N[P].add(z), N[R].add(z);
                        var G = ["a", "b", "c", "d"];
                        for (e = 0, t = this.faces.length; e < t; e++)
                            for (s = this.faces[e], o = 0; o < Math.min(s.vertexNormals.length, 3); o++) k.copy(s.vertexNormals[o]), n = s[G[o]], T = F[n], I.copy(T), I.sub(k.multiplyScalar(k.dot(T))).normalize(), B.crossVectors(s.vertexNormals[o], T), C = B.dot(N[n]) < 0 ? -1 : 1, s.vertexTangents[o] = new a.Vector4(I.x, I.y, I.z, C);
                        this.hasTangents = !0
                    },
                    computeLineDistances: function() {
                        for (var e = 0, t = this.vertices, i = 0, r = t.length; i < r; i++) i > 0 && (e += t[i].distanceTo(t[i - 1])), this.lineDistances[i] = e
                    },
                    computeBoundingBox: function() {
                        null === this.boundingBox && (this.boundingBox = new a.Box3), this.boundingBox.setFromPoints(this.vertices)
                    },
                    computeBoundingSphere: function() {
                        null === this.boundingSphere && (this.boundingSphere = new a.Sphere), this.boundingSphere.setFromPoints(this.vertices)
                    },
                    mergeVertices: function() {
                        var e, t, i, r, a, o, n, s, l = {},
                            h = [],
                            c = [],
                            u = Math.pow(10, 4);
                        for (i = 0, r = this.vertices.length; i < r; i++) e = this.vertices[i], void 0 === l[t = Math.round(e.x * u) + "_" + Math.round(e.y * u) + "_" + Math.round(e.z * u)] ? (l[t] = i, h.push(this.vertices[i]), c[i] = h.length - 1) : c[i] = c[l[t]];
                        var f = [];
                        for (i = 0, r = this.faces.length; i < r; i++) {
                            (a = this.faces[i]).a = c[a.a], a.b = c[a.b], a.c = c[a.c], o = [a.a, a.b, a.c];
                            for (var p = 0; p < 3; p++)
                                if (o[p] == o[(p + 1) % 3]) {
                                    p,
                                    f.push(i);
                                    break
                                }
                        }
                        for (i = f.length - 1; i >= 0; i--) {
                            var d = f[i];
                            for (this.faces.splice(d, 1), n = 0, s = this.faceVertexUvs.length; n < s; n++) this.faceVertexUvs[n].splice(d, 1)
                        }
                        var m = this.vertices.length - h.length;
                        return this.vertices = h, m
                    },
                    makeGroups: function() {
                        var e = 0;
                        return function(t) {
                            var i, r, a, o, n, s = {},
                                l = this.morphTargets.length,
                                h = this.morphNormals.length;
                            for (this.geometryGroups = {}, i = 0, r = this.faces.length; i < r; i++) a = this.faces[i], (o = t ? a.materialIndex : 0) in s || (s[o] = {
                                hash: o,
                                counter: 0
                            }), (n = s[o].hash + "_" + s[o].counter) in this.geometryGroups || (this.geometryGroups[n] = {
                                faces3: [],
                                materialIndex: o,
                                vertices: 0,
                                numMorphTargets: l,
                                numMorphNormals: h
                            }), this.geometryGroups[n].vertices + 3 > 65535 && (s[o].counter += 1, (n = s[o].hash + "_" + s[o].counter) in this.geometryGroups || (this.geometryGroups[n] = {
                                faces3: [],
                                materialIndex: o,
                                vertices: 0,
                                numMorphTargets: l,
                                numMorphNormals: h
                            })), this.geometryGroups[n].faces3.push(i), this.geometryGroups[n].vertices += 3;
                            for (var c in this.geometryGroupsList = [], this.geometryGroups) this.geometryGroups[c].id = e++, this.geometryGroupsList.push(this.geometryGroups[c])
                        }
                    }(),
                    clone: function() {
                        for (var e = new a.Geometry, t = this.vertices, i = 0, r = t.length; i < r; i++) e.vertices.push(t[i].clone());
                        var o = this.faces;
                        for (i = 0, r = o.length; i < r; i++) e.faces.push(o[i].clone());
                        var n = this.faceVertexUvs[0];
                        for (i = 0, r = n.length; i < r; i++) {
                            for (var s = n[i], l = [], h = 0, c = s.length; h < c; h++) l.push(new a.Vector2(s[h].x, s[h].y));
                            e.faceVertexUvs[0].push(l)
                        }
                        return e.morphTargets = this.morphTargets.slice(0), e.morphColors = this.morphColors.slice(0), e.morphNormals = this.morphNormals.slice(0), e.skinWeights = this.skinWeights.slice(0), e.skinIndices = this.skinIndices.slice(0), e.lineDistances = this.lineDistances.slice(0), this.boundingBox && (e.boundingBox = this.boundingBox.clone()), this.boundingSphere && (e.boundingSphere = this.boundingSphere.clone()), e.hasTangents = this.hasTangents, e.dynamic = this.dynamic, e
                    },
                    dispose: function() {
                        this.dispatchEvent({
                            type: "dispose"
                        })
                    }
                }, a.EventDispatcher.prototype.apply(a.Geometry.prototype), a.GeometryIdCount = 0, a.Geometry2 = function(e) {
                    a.BufferGeometry.call(this), this.className = "Geometry2", this.vertices = this.addAttribute("position", Float32Array, e, 3).array, this.normals = this.addAttribute("normal", Float32Array, e, 3).array, this.uvs = this.addAttribute("uv", Float32Array, e, 2).array, this.boundingBox = null, this.boundingSphere = null
                }, a.Geometry2.prototype = Object.create(a.BufferGeometry.prototype), a.Camera = function() {
                    a.Object3D.call(this), this.matrixWorldInverse = new a.Matrix4, this.projectionMatrix = new a.Matrix4, this.normalizedViewport = {
                        x: 0,
                        y: 0,
                        width: 1,
                        height: 1
                    }
                }, a.Camera.prototype = Object.create(a.Object3D.prototype), a.Camera.prototype.lookAt = function() {
                    var e = new a.Matrix4;
                    return function(t) {
                        e.lookAt(this.position, t, this.up), this.quaternion.setFromRotationMatrix(e)
                    }
                }(), a.Camera.prototype.clone = function(e) {
                    return void 0 === e && (e = new a.Camera), a.Object3D.prototype.clone.call(this, e), e.matrixWorldInverse.copy(this.matrixWorldInverse), e.projectionMatrix.copy(this.projectionMatrix), e.normalizedViewport = {
                        x: this.normalizedViewport.x,
                        y: this.normalizedViewport.y,
                        width: this.normalizedViewport.width,
                        height: this.normalizedViewport.height
                    }, e
                }, a.OrthographicCamera = function(e, t, i, r, o, n) {
                    a.Camera.call(this), this.left = e, this.right = t, this.top = i, this.bottom = r, this.near = void 0 !== o ? o : .1, this.far = void 0 !== n ? n : 2e3, this.updateProjectionMatrix()
                }, a.OrthographicCamera.prototype = Object.create(a.Camera.prototype), a.OrthographicCamera.prototype.updateProjectionMatrix = function() {
                    this.projectionMatrix.makeOrthographic(this.left, this.right, this.top, this.bottom, this.near, this.far);
                    var e = new a.Matrix4;
                    e.elements[0] *= this.normalizedViewport.width, e.elements[1] *= this.normalizedViewport.height, e.elements[12] += this.normalizedViewport.x, e.elements[13] += this.normalizedViewport.y, this.projectionMatrix = e.multiply(this.projectionMatrix)
                }, a.OrthographicCamera.prototype.clone = function() {
                    var e = new a.OrthographicCamera;
                    return a.Camera.prototype.clone.call(this, e), e.left = this.left, e.right = this.right, e.top = this.top, e.bottom = this.bottom, e.near = this.near, e.far = this.far, e
                }, a.PerspectiveCamera = function(e, t, i, r, o, n) {
                    a.Camera.call(this), this.fov = void 0 !== e ? e : 50, this.aspect = void 0 !== t ? t : 1, this.near = void 0 !== i ? i : .1, this.far = void 0 !== r ? r : 2e3, this.filmSize = void 0 !== o ? o : new a.Vector2(1, 1), this.filmOffset = void 0 !== n ? n : new a.Vector2(0, 0), this.updateProjectionMatrix()
                }, a.PerspectiveCamera.prototype = Object.create(a.Camera.prototype), a.PerspectiveCamera.prototype.setLens = function(e, t) {
                    void 0 === t && (t = 24), this.fov = 2 * a.Math.radToDeg(Math.atan(t / (2 * e))), this.updateProjectionMatrix()
                }, a.PerspectiveCamera.prototype.setViewOffset = function(e, t, i, r, a, o) {
                    this.fullWidth = e, this.fullHeight = t, this.x = i, this.y = r, this.width = a, this.height = o, this.updateProjectionMatrix()
                }, a.PerspectiveCamera.prototype.updateProjectionMatrix = function() {
                    if (this.fullWidth) {
                        var e = this.fullWidth / this.fullHeight,
                            t = Math.tan(a.Math.degToRad(.5 * this.fov)) * this.near,
                            i = -t,
                            r = e * i,
                            o = e * t,
                            n = Math.abs(o - r),
                            s = Math.abs(t - i);
                        this.projectionMatrix.makeFrustum(r + this.x * n / this.fullWidth, r + (this.x + this.width) * n / this.fullWidth, t - (this.y + this.height) * s / this.fullHeight, t - this.y * s / this.fullHeight, this.near, this.far, this.filmOffset, this.filmSize)
                    } else this.projectionMatrix.makePerspective(this.fov, this.aspect, this.near, this.far, this.filmOffset, this.filmSize);
                    var l = new a.Matrix4;
                    l.elements[0] *= this.normalizedViewport.width, l.elements[1] *= this.normalizedViewport.height, l.elements[12] += this.normalizedViewport.x, l.elements[13] += this.normalizedViewport.y, this.projectionMatrix = l.multiply(this.projectionMatrix)
                }, a.PerspectiveCamera.prototype.clone = function() {
                    var e = new a.PerspectiveCamera;
                    return a.Camera.prototype.clone.call(this, e), e.fov = this.fov, e.aspect = this.aspect, e.near = this.near, e.far = this.far, e.filmSize = this.filmSize, e.filmOffset = this.filmOffset, e
                }, a.Light = function(e) {
                    a.Object3D.call(this), this.color = new a.Color(e)
                }, a.Light.prototype = Object.create(a.Object3D.prototype), a.Light.prototype.clone = function(e) {
                    return void 0 === e && (e = new a.Light), a.Object3D.prototype.clone.call(this, e), e.color.copy(this.color), e
                }, a.AmbientLight = function(e) {
                    a.Light.call(this, e)
                }, a.AmbientLight.prototype = Object.create(a.Light.prototype), a.AmbientLight.prototype.clone = function() {
                    var e = new a.AmbientLight;
                    return a.Light.prototype.clone.call(this, e), e
                }, a.AreaLight = function(e, t, i, r, o) {
                    a.Light.call(this, e), this.position.set(0, 1, 0), this.target = new a.Object3D, this.intensity = void 0 !== t ? t : 1, this.distance = void 0 !== i ? i : 0, this.decayExponent = void 0 !== r ? r : 0, this.physicalFalloff = void 0 !== o && o, this.width = 1, this.height = 1
                }, a.AreaLight.prototype = Object.create(a.Light.prototype), a.AreaLight.prototype.clone = function() {
                    var e = new a.AreaLight;
                    return a.Light.prototype.clone.call(this, e), e.target = this.target.clone(), e.intensity = this.intensity, e.distance = this.distance, e.decayExponent = this.decayExponent, e.physicalFalloff = this.physicalFalloff, e.width = this.width, e.height = this.height, e
                }, a.DirectionalLight = function(e, t) {
                    a.Light.call(this, e), this.position.set(0, 1, 0), this.target = new a.Object3D, this.intensity = void 0 !== t ? t : 1, this.castShadow = !1, this.onlyShadow = !1, this.shadowCameraNear = 50, this.shadowCameraFar = 5e3, this.shadowCameraLeft = -500, this.shadowCameraRight = 500, this.shadowCameraTop = 500, this.shadowCameraBottom = -500, this.shadowCameraVisible = !1, this.shadowBias = 0, this.shadowDarkness = .5, this.shadowMapWidth = 512, this.shadowMapHeight = 512, this.shadowCascade = !1, this.shadowCascadeOffset = new a.Vector3(0, 0, -1e3), this.shadowCascadeCount = 2, this.shadowCascadeBias = [0, 0, 0], this.shadowCascadeWidth = [512, 512, 512], this.shadowCascadeHeight = [512, 512, 512], this.shadowCascadeNearZ = [-1, .99, .998], this.shadowCascadeFarZ = [.99, .998, 1], this.shadowCascadeArray = [], this.shadowMap = null, this.shadowMapSize = null, this.shadowCamera = null, this.shadowMatrix = null
                }, a.DirectionalLight.prototype = Object.create(a.Light.prototype), a.DirectionalLight.prototype.clone = function() {
                    var e = new a.DirectionalLight;
                    return a.Light.prototype.clone.call(this, e), e.target = this.target.clone(), e.intensity = this.intensity, e.castShadow = this.castShadow, e.onlyShadow = this.onlyShadow, e
                }, a.HemisphereLight = function(e, t, i) {
                    a.Light.call(this, e), this.position.set(0, 100, 0), this.groundColor = new a.Color(t), this.intensity = void 0 !== i ? i : 1
                }, a.HemisphereLight.prototype = Object.create(a.Light.prototype), a.HemisphereLight.prototype.clone = function() {
                    var e = new a.HemisphereLight;
                    return a.Light.prototype.clone.call(this, e), e.groundColor.copy(this.groundColor), e.intensity = this.intensity, e
                }, a.PointLight = function(e, t, i, r, o) {
                    a.Light.call(this, e), this.intensity = void 0 !== t ? t : 1, this.distance = void 0 !== i ? i : 0, this.decayExponent = void 0 !== r ? r : 0, this.physicalFalloff = void 0 !== o && o
                }, a.PointLight.prototype = Object.create(a.Light.prototype), a.PointLight.prototype.clone = function() {
                    var e = new a.PointLight;
                    return a.Light.prototype.clone.call(this, e), e.intensity = this.intensity, e.distance = this.distance, e.decayExponent = this.decayExponent, e.physicalFalloff = this.physicalFalloff, e
                }, a.SpotLight = function(e, t, i, r, o, n, s) {
                    a.Light.call(this, e), this.position.set(0, 1, 0), this.target = new a.Object3D, this.intensity = void 0 !== t ? t : 1, this.distance = void 0 !== i ? i : 0, this.decayExponent = void 0 !== n ? n : 0, this.physicalFalloff = void 0 !== s && s, this.angle = void 0 !== r ? r : Math.PI / 3, this.exponent = void 0 !== o ? o : 10, this.castShadow = !1, this.onlyShadow = !1, this.shadowCameraNear = 50, this.shadowCameraFar = 5e3, this.shadowCameraFov = 50, this.shadowCameraVisible = !1, this.shadowBias = 0, this.shadowDarkness = .5, this.shadowMapWidth = 512, this.shadowMapHeight = 512, this.shadowMap = null, this.shadowMapSize = null, this.shadowCamera = null, this.shadowMatrix = null
                }, a.SpotLight.prototype = Object.create(a.Light.prototype), a.SpotLight.prototype.clone = function() {
                    var e = new a.SpotLight;
                    return a.Light.prototype.clone.call(this, e), e.target = this.target.clone(), e.intensity = this.intensity, e.distance = this.distance, e.angle = this.angle, e.exponent = this.exponent, e.decayExponent = this.decayExponent, e.physicalFalloff = this.physicalFalloff, e.castShadow = this.castShadow, e.onlyShadow = this.onlyShadow, e
                }, a.Loader = function(e) {
                    this.showStatus = e, this.statusDomElement = e ? a.Loader.prototype.addStatusElement() : null, this.onLoadStart = function() {}, this.onLoadProgress = function() {}, this.onLoadComplete = function() {}
                }, a.Loader.prototype = {
                    constructor: a.Loader,
                    crossOrigin: void 0,
                    addStatusElement: function() {
                        var e = document.createElement("div");
                        return e.style.position = "absolute", e.style.right = "0px", e.style.top = "0px", e.style.fontSize = "0.8em", e.style.textAlign = "left", e.style.background = "rgba(0,0,0,0.25)", e.style.color = "#fff", e.style.width = "120px", e.style.padding = "0.5em 0.5em 0.5em 0.5em", e.style.zIndex = 1e3, e.innerHTML = "Loading ...", e
                    },
                    updateProgress: function(e) {
                        var t = "Loaded ";
                        e.total ? t += (100 * e.loaded / e.total).toFixed(0) + "%" : t += (e.loaded / 1e3).toFixed(2) + " KB", this.statusDomElement.innerHTML = t
                    },
                    extractUrlBase: function(e) {
                        var t = e.split("/");
                        return 1 === t.length ? "./" : (t.pop(), t.join("/") + "/")
                    },
                    initMaterials: function(e, t) {
                        for (var i = [], r = 0; r < e.length; ++r) i[r] = a.Loader.prototype.createMaterial(e[r], t);
                        return i
                    },
                    needsTangents: function(e) {
                        for (var t = 0, i = e.length; t < i; t++) {
                            if (e[t] instanceof a.ShaderMaterial) return !0
                        }
                        return !1
                    },
                    createMaterial: function(e, t) {
                        var i = this;

                        function r(e) {
                            var t = Math.log(e) / Math.LN2;
                            return Math.floor(t) == t
                        }

                        function o(e) {
                            var t = Math.log(e) / Math.LN2;
                            return Math.pow(2, Math.round(t))
                        }

                        function n(e, n, s, l, h, c, u) {
                            var f = /\.dds$/i.test(s),
                                p = t + s;
                            if (f) {
                                var d = a.ImageUtils.loadCompressedTexture(p);
                                e[n] = d
                            } else {
                                d = document.createElement("canvas");
                                e[n] = new a.Texture(d)
                            }
                            if (e[n].sourceFile = s, l && (e[n].repeat.set(l[0], l[1]), 1 !== l[0] && (e[n].wrapS = a.RepeatWrapping), 1 !== l[1] && (e[n].wrapT = a.RepeatWrapping)), h && e[n].offset.set(h[0], h[1]), c) {
                                var m = {
                                    repeat: a.RepeatWrapping,
                                    mirror: a.MirroredRepeatWrapping
                                };
                                void 0 !== m[c[0]] && (e[n].wrapS = m[c[0]]), void 0 !== m[c[1]] && (e[n].wrapT = m[c[1]])
                            }
                            u && (e[n].anisotropy = u), f || function(e, t) {
                                var a = new Image;
                                a.onload = function() {
                                    if (r(this.width) && r(this.height)) e.image = this;
                                    else {
                                        var t = o(this.width),
                                            i = o(this.height);
                                        e.image.width = t, e.image.height = i, e.image.getContext("2d").drawImage(this, 0, 0, t, i)
                                    }
                                    e.needsUpdate = !0
                                }, void 0 !== i.crossOrigin && (a.crossOrigin = i.crossOrigin), a.src = t
                            }(e[n], p)
                        }

                        function s(e) {
                            return (255 * e[0] << 16) + (255 * e[1] << 8) + 255 * e[2]
                        }
                        var l = "MeshLambertMaterial",
                            h = {
                                color: 15658734,
                                opacity: 1,
                                map: null,
                                lightMap: null,
                                normalMap: null,
                                bumpMap: null,
                                wireframe: !1
                            };
                        if (e.shading) {
                            var c = e.shading.toLowerCase();
                            "phong" === c ? l = "MeshPhongMaterial" : "basic" === c ? l = "MeshBasicMaterial" : "physical" === c && (l = "MeshPhysicalMaterial")
                        }
                        if (void 0 !== e.blending && void 0 !== a[e.blending] && (h.blending = a[e.blending]), (void 0 !== e.transparent || e.opacity < 1) && (h.transparent = e.transparent), void 0 !== e.depthTest && (h.depthTest = e.depthTest), void 0 !== e.depthWrite && (h.depthWrite = e.depthWrite), void 0 !== e.visible && (h.visible = e.visible), void 0 !== e.flipSided && (h.side = a.BackSide), void 0 !== e.doubleSided && (h.side = a.DoubleSide), void 0 !== e.wireframe && (h.wireframe = e.wireframe), void 0 !== e.vertexColors && ("face" === e.vertexColors ? h.vertexColors = a.FaceColors : e.vertexColors && (h.vertexColors = a.VertexColors)), e.colorDiffuse ? h.color = s(e.colorDiffuse) : e.DbgColor && (h.color = e.DbgColor), e.colorSpecular && (h.specular = s(e.colorSpecular)), e.colorAmbient && (h.ambient = s(e.colorAmbient)), e.transparency && (h.opacity = e.transparency), e.specularCoef && (h.shininess = e.specularCoef), e.mapDiffuse && t && n(h, "map", e.mapDiffuse, e.mapDiffuseRepeat, e.mapDiffuseOffset, e.mapDiffuseWrap, e.mapDiffuseAnisotropy), e.mapLight && t && n(h, "lightMap", e.mapLight, e.mapLightRepeat, e.mapLightOffset, e.mapLightWrap, e.mapLightAnisotropy), e.mapBump && t && n(h, "bumpMap", e.mapBump, e.mapBumpRepeat, e.mapBumpOffset, e.mapBumpWrap, e.mapBumpAnisotropy), e.mapNormal && t && n(h, "normalMap", e.mapNormal, e.mapNormalRepeat, e.mapNormalOffset, e.mapNormalWrap, e.mapNormalAnisotropy), e.mapSpecular && t && n(h, "specularMap", e.mapSpecular, e.mapSpecularRepeat, e.mapSpecularOffset, e.mapSpecularWrap, e.mapSpecularAnisotropy), e.mapBumpScale && (h.bumpScale = e.mapBumpScale), e.mapNormal) {
                            var u = a.ShaderLib.normalmap,
                                f = a.UniformsUtils.clone(u.uniforms);
                            f.tNormal.value = h.normalMap, e.mapNormalFactor && f.uNormalScale.value.set(e.mapNormalFactor, e.mapNormalFactor), h.map && (f.tDiffuse.value = h.map, f.enableDiffuse.value = !0), h.specularMap && (f.tSpecular.value = h.specularMap, f.enableSpecular.value = !0), h.lightMap && (f.tAO.value = h.lightMap, f.enableAO.value = !0), f.diffuse.value.setHex(h.color), f.specular.value.setHex(h.specular), f.ambient.value.setHex(h.ambient), f.shininess.value = h.shininess, void 0 !== h.opacity && (f.opacity.value = h.opacity);
                            var p = {
                                    fragmentShader: u.fragmentShader,
                                    vertexShader: u.vertexShader,
                                    uniforms: f,
                                    lights: !0,
                                    fog: !0
                                },
                                d = new a.ShaderMaterial(p);
                            h.transparent && (d.transparent = !0)
                        } else d = new a[l](h);
                        return void 0 !== e.DbgName && (d.name = e.DbgName), d
                    }
                }, a.XHRLoader = function(e) {
                    this.manager = void 0 !== e ? e : a.DefaultLoadingManager
                }, a.XHRLoader.prototype = {
                    constructor: a.XHRLoader,
                    load: function(e, t, i, r) {
                        var a = this,
                            o = new XMLHttpRequest;
                        void 0 !== t && o.addEventListener("load", (function(i) {
                            t(i.target.responseText), a.manager.itemEnd(e)
                        }), !1), void 0 !== i && o.addEventListener("progress", (function(e) {
                            i(e)
                        }), !1), void 0 !== r && o.addEventListener("error", (function(e) {
                            r(e)
                        }), !1), void 0 !== this.crossOrigin && (o.crossOrigin = this.crossOrigin), o.open("GET", e, !0), o.send(null), a.manager.itemStart(e)
                    },
                    setCrossOrigin: function(e) {
                        this.crossOrigin = e
                    }
                }, a.ImageLoader = function(e) {
                    this.manager = void 0 !== e ? e : a.DefaultLoadingManager
                }, a.ImageLoader.prototype = {
                    constructor: a.ImageLoader,
                    load: function(e, t, i, r) {
                        var a = this,
                            o = document.createElement("img");
                        return void 0 !== t && o.addEventListener("load", (function(i) {
                            a.manager.itemEnd(e), t(this)
                        }), !1), void 0 !== i && o.addEventListener("progress", (function(e) {
                            i(e)
                        }), !1), void 0 !== r && o.addEventListener("error", (function(e) {
                            r(e)
                        }), !1), void 0 !== this.crossOrigin && (o.crossOrigin = this.crossOrigin), o.src = e, a.manager.itemStart(e), o
                    },
                    setCrossOrigin: function(e) {
                        this.crossOrigin = e
                    }
                }, a.JSONLoader = function(e) {
                    a.Loader.call(this, e), this.withCredentials = !1
                }, a.JSONLoader.prototype = Object.create(a.Loader.prototype), a.JSONLoader.prototype.load = function(e, t, i) {
                    i = i && "string" === typeof i ? i : this.extractUrlBase(e), this.onLoadStart(), this.loadAjaxJSON(this, e, t, i)
                }, a.JSONLoader.prototype.loadAjaxJSON = function(e, t, i, r, o) {
                    var n = new XMLHttpRequest,
                        s = 0;
                    n.onreadystatechange = function() {
                        if (n.readyState === n.DONE)
                            if (200 === n.status || 0 === n.status) {
                                if (n.responseText) {
                                    var l = JSON.parse(n.responseText);
                                    if ("scene" === l.metadata.type) return void a.onerror('THREE.JSONLoader: "' + t + '" seems to be a Scene. Use THREE.SceneLoader instead.');
                                    var h = e.parse(l, r);
                                    i(h.geometry, h.materials)
                                } else a.onerror('THREE.JSONLoader: "' + t + '" seems to be unreachable or the file is empty.');
                                e.onLoadComplete()
                            } else a.onerror("THREE.JSONLoader: Couldn't load \"" + t + '" (' + n.status + ")");
                        else n.readyState === n.LOADING ? o && (0 === s && (s = n.getResponseHeader("Content-Length")), o({
                            total: s,
                            loaded: n.responseText.length
                        })) : n.readyState === n.HEADERS_RECEIVED && void 0 !== o && (s = n.getResponseHeader("Content-Length"))
                    }, n.open("GET", t, !0), n.withCredentials = this.withCredentials, n.send(null)
                }, a.JSONLoader.prototype.parse = function(e, t) {
                    var i = new a.Geometry,
                        r = void 0 !== e.scale ? 1 / e.scale : 1;
                    if (function(t) {
                            function r(e, t) {
                                return e & 1 << t
                            }
                            var o, n, s, l, h, c, u, f, p, d, m, g, v, y, x, _, M, w, S, b, A, T, C, E, L, P, R, D = e.faces,
                                V = e.vertices,
                                U = e.normals,
                                F = e.colors,
                                N = 0;
                            if (void 0 !== e.uvs) {
                                for (o = 0; o < e.uvs.length; o++) e.uvs[o].length && N++;
                                for (o = 0; o < N; o++) i.faceVertexUvs[o] = []
                            }
                            l = 0, h = V.length;
                            for (; l < h;)(w = new a.Vector3).x = V[l++] * t, w.y = V[l++] * t, w.z = V[l++] * t, i.vertices.push(w);
                            l = 0, h = D.length;
                            for (; l < h;)
                                if (d = D[l++], m = r(d, 0), g = r(d, 1), v = r(d, 3), y = r(d, 4), x = r(d, 5), _ = r(d, 6), M = r(d, 7), m) {
                                    if ((b = new a.Face3).a = D[l], b.b = D[l + 1], b.c = D[l + 3], (A = new a.Face3).a = D[l + 1], A.b = D[l + 2], A.c = D[l + 3], l += 4, g && (p = D[l++], b.materialIndex = p, A.materialIndex = p), s = i.faces.length, v)
                                        for (o = 0; o < N; o++)
                                            for (E = e.uvs[o], i.faceVertexUvs[o][s] = [], i.faceVertexUvs[o][s + 1] = [], n = 0; n < 4; n++) f = D[l++], P = E[2 * f], R = E[2 * f + 1], L = new a.Vector2(P, R), 2 !== n && i.faceVertexUvs[o][s].push(L), 0 !== n && i.faceVertexUvs[o][s + 1].push(L);
                                    if (y && (u = 3 * D[l++], b.normal.set(U[u++], U[u++], U[u]), A.normal.copy(b.normal)), x)
                                        for (o = 0; o < 4; o++) u = 3 * D[l++], C = new a.Vector3(U[u++], U[u++], U[u]), 2 !== o && b.vertexNormals.push(C), 0 !== o && A.vertexNormals.push(C);
                                    if (_ && (c = D[l++], T = F[c], b.color.setHex(T), A.color.setHex(T)), M)
                                        for (o = 0; o < 4; o++) c = D[l++], T = F[c], 2 !== o && b.vertexColors.push(new a.Color(T)), 0 !== o && A.vertexColors.push(new a.Color(T));
                                    i.faces.push(b), i.faces.push(A)
                                } else {
                                    if ((S = new a.Face3).a = D[l++], S.b = D[l++], S.c = D[l++], g && (p = D[l++], S.materialIndex = p), s = i.faces.length, v)
                                        for (o = 0; o < N; o++)
                                            for (E = e.uvs[o], i.faceVertexUvs[o][s] = [], n = 0; n < 3; n++) f = D[l++], P = E[2 * f], R = E[2 * f + 1], L = new a.Vector2(P, R), i.faceVertexUvs[o][s].push(L);
                                    if (y && (u = 3 * D[l++], S.normal.set(U[u++], U[u++], U[u])), x)
                                        for (o = 0; o < 3; o++) u = 3 * D[l++], C = new a.Vector3(U[u++], U[u++], U[u]), S.vertexNormals.push(C);
                                    if (_ && (c = D[l++], S.color.setHex(F[c])), M)
                                        for (o = 0; o < 3; o++) c = D[l++], S.vertexColors.push(new a.Color(F[c]));
                                    i.faces.push(S)
                                }
                        }(r), function() {
                            if (e.skinWeights)
                                for (var t = 0, r = e.skinWeights.length; t < r; t += 2) {
                                    var o = e.skinWeights[t],
                                        n = e.skinWeights[t + 1];
                                    i.skinWeights.push(new a.Vector4(o, n, 0, 0))
                                }
                            if (e.skinIndices)
                                for (t = 0, r = e.skinIndices.length; t < r; t += 2) {
                                    var s = e.skinIndices[t],
                                        l = e.skinIndices[t + 1];
                                    i.skinIndices.push(new a.Vector4(s, l, 0, 0))
                                }
                            i.bones = e.bones, i.bones && i.bones.length > 0 && (i.skinWeights.length !== i.skinIndices.length || i.skinIndices.length !== i.vertices.length) && a.onwarning("When skinning, number of vertices (" + i.vertices.length + "), skinIndices (" + i.skinIndices.length + "), and skinWeights (" + i.skinWeights.length + ") should match.");
                            i.animation = e.animation, i.animations = e.animations
                        }(), function(t) {
                            var r, o, n, s, l, h, c, u, f, p, d;
                            if (void 0 !== e.morphTargets)
                                for (l = 0, h = e.morphTargets.length; l < h; l++)
                                    for (i.morphTargets[l] = {}, i.morphTargets[l].name = e.morphTargets[l].name, i.morphTargets[l].vertices = [], n = i.morphTargets[l].vertices, s = e.morphTargets[l].vertices, r = 0, o = s.length; r < o; r += 3) {
                                        var m = new a.Vector3;
                                        m.x = s[r] * t, m.y = s[r + 1] * t, m.z = s[r + 2] * t, n.push(m)
                                    }
                            if (void 0 !== e.morphColors)
                                for (l = 0, h = e.morphColors.length; l < h; l++)
                                    for (i.morphColors[l] = {}, i.morphColors[l].name = e.morphColors[l].name, i.morphColors[l].colors = [], f = i.morphColors[l].colors, p = e.morphColors[l].colors, c = 0, u = p.length; c < u; c += 3)(d = new a.Color(16755200)).setRGB(p[c], p[c + 1], p[c + 2]), f.push(d)
                        }(r), i.computeCentroids(), i.computeFaceNormals(), i.computeBoundingSphere(), void 0 === e.materials) return {
                        geometry: i
                    };
                    var o = this.initMaterials(e.materials, t);
                    return this.needsTangents(o) && i.computeTangents(), {
                        geometry: i,
                        materials: o
                    }
                }, a.LoadingManager = function(e, t, i) {
                    var r = this,
                        a = 0,
                        o = 0;
                    this.onLoad = e, this.onProgress = t, this.onError = i, this.itemStart = function(e) {
                        o++
                    }, this.itemEnd = function(e) {
                        a++, void 0 !== r.onProgress && r.onProgress(e, a, o), a === o && void 0 !== r.onLoad && r.onLoad()
                    }
                }, a.DefaultLoadingManager = new a.LoadingManager, a.BufferGeometryLoader = function(e) {
                    this.manager = void 0 !== e ? e : a.DefaultLoadingManager
                }, a.BufferGeometryLoader.prototype = {
                    constructor: a.BufferGeometryLoader,
                    load: function(e, t, i, r) {
                        var o = this,
                            n = new a.XHRLoader;
                        n.setCrossOrigin(this.crossOrigin), n.load(e, (function(e) {
                            t(o.parse(JSON.parse(e)))
                        }))
                    },
                    setCrossOrigin: function(e) {
                        this.crossOrigin = e
                    },
                    parse: function(e) {
                        var t = new a.BufferGeometry,
                            i = e.attributes,
                            o = e.offsets,
                            n = e.boundingSphere;
                        for (var s in i) {
                            var l = i[s];
                            t.attributes[s] = {
                                itemSize: l.itemSize,
                                array: new r[l.type](l.array)
                            }
                        }
                        return void 0 !== o && (t.offsets = JSON.parse(JSON.stringify(o))), void 0 !== n && (t.boundingSphere = new a.Sphere((new a.Vector3).fromArray(void 0 !== n.center ? n.center : [0, 0, 0]), n.radius)), t
                    }
                }, a.Geometry2Loader = function(e) {
                    this.manager = void 0 !== e ? e : a.DefaultLoadingManager
                }, a.Geometry2Loader.prototype = {
                    constructor: a.Geometry2Loader,
                    load: function(e, t, i, r) {
                        var o = this,
                            n = new a.XHRLoader;
                        n.setCrossOrigin(this.crossOrigin), n.load(e, (function(e) {
                            t(o.parse(JSON.parse(e)))
                        }))
                    },
                    setCrossOrigin: function(e) {
                        this.crossOrigin = e
                    },
                    parse: function(e) {
                        var t = new a.Geometry2(e.vertices.length / 3),
                            i = ["vertices", "normals", "uvs"],
                            r = e.boundingSphere;
                        for (var o in i) {
                            var n = i[o];
                            t[n].set(e[n])
                        }
                        return void 0 !== r && (t.boundingSphere = new a.Sphere((new a.Vector3).fromArray(void 0 !== r.center ? r.center : [0, 0, 0]), r.radius)), t
                    }
                }, a.MaterialLoader = function(e) {
                    this.manager = void 0 !== e ? e : a.DefaultLoadingManager
                }, a.MaterialLoader.prototype = {
                    constructor: a.MaterialLoader,
                    load: function(e, t, i, r) {
                        var o = this,
                            n = new a.XHRLoader;
                        n.setCrossOrigin(this.crossOrigin), n.load(e, (function(e) {
                            t(o.parse(JSON.parse(e)))
                        }))
                    },
                    setCrossOrigin: function(e) {
                        this.crossOrigin = e
                    },
                    parse: function(e) {
                        var t = new a[e.type];
                        if (void 0 !== e.color && t.color.setHex(e.color), void 0 !== e.ambient && t.ambient.setHex(e.ambient), void 0 !== e.emissive && t.emissive.setHex(e.emissive), void 0 !== e.specular && t.specular.setHex(e.specular), void 0 !== e.falloff && (t.falloff = e.falloff), void 0 !== e.falloffColor && t.falloffColor.setHex(e.falloffColor), void 0 !== e.roughness && (t.roughness = e.roughness), void 0 !== e.metallic && (t.metallic = e.metallic), void 0 !== e.clearCoat && (t.clearCoat = e.clearCoat), void 0 !== e.clearCoatRoughness && (t.clearCoatRoughness = e.clearCoatRoughness), void 0 !== e.anisotropy && (t.anisotropy = e.anisotropy), void 0 !== e.anisotropyRotation && (t.anisotropyRotation = e.anisotropyRotation), void 0 !== e.translucency && t.translucency.setHex(e.translucency), void 0 !== e.translucencyNormalAlpha && (t.translucencyNormalAlpha = e.translucencyNormalAlpha), void 0 !== e.translucencyNormalPower && (t.translucencyNormalPower = e.translucencyNormalPower), void 0 !== e.translucencyViewAlpha && (t.translucencyViewAlpha = e.translucencyViewAlpha), void 0 !== e.translucencyViewPower && (t.translucencyViewPower = e.translucencyViewPower), void 0 !== e.shininess && (t.shininess = e.shininess), void 0 !== e.vertexColors && (t.vertexColors = e.vertexColors), void 0 !== e.blending && (t.blending = e.blending), void 0 !== e.side && (t.side = e.side), void 0 !== e.opacity && (t.opacity = e.opacity), void 0 !== e.transparent && (t.transparent = e.transparent), void 0 !== e.wireframe && (t.wireframe = e.wireframe), void 0 !== e.materials)
                            for (var i = 0, r = e.materials.length; i < r; i++) t.materials.push(this.parse(e.materials[i]));
                        return t
                    }
                }, a.ObjectLoader = function(e) {
                    this.manager = void 0 !== e ? e : a.DefaultLoadingManager
                }, a.ObjectLoader.prototype = {
                    constructor: a.ObjectLoader,
                    load: function(e, t, i, r) {
                        var o = this,
                            n = new a.XHRLoader(o.manager);
                        n.setCrossOrigin(this.crossOrigin), n.load(e, (function(e) {
                            t(o.parse(JSON.parse(e)))
                        }))
                    },
                    setCrossOrigin: function(e) {
                        this.crossOrigin = e
                    },
                    parse: function(e) {
                        var t = this.parseGeometries(e.geometries),
                            i = this.parseMaterials(e.materials);
                        return this.parseObject(e.object, t, i)
                    },
                    parseGeometries: function(e) {
                        var t = {};
                        if (void 0 !== e)
                            for (var i = new a.JSONLoader, r = new a.Geometry2Loader, o = new a.BufferGeometryLoader, n = 0, s = e.length; n < s; n++) {
                                var l, h = e[n];
                                switch (h.type) {
                                    case "PlaneGeometry":
                                        l = new a.PlaneGeometry(h.width, h.height, h.widthSegments, h.heightSegments);
                                        break;
                                    case "BoxGeometry":
                                    case "CubeGeometry":
                                        l = new a.BoxGeometry(h.width, h.height, h.depth, h.widthSegments, h.heightSegments, h.depthSegments);
                                        break;
                                    case "CircleGeometry":
                                        l = new a.CircleGeometry(h.radius, h.segments);
                                        break;
                                    case "CylinderGeometry":
                                        l = new a.CylinderGeometry(h.radiusTop, h.radiusBottom, h.height, h.radialSegments, h.heightSegments, h.openEnded);
                                        break;
                                    case "SphereGeometry":
                                        l = new a.SphereGeometry(h.radius, h.widthSegments, h.heightSegments, h.phiStart, h.phiLength, h.thetaStart, h.thetaLength);
                                        break;
                                    case "IcosahedronGeometry":
                                        l = new a.IcosahedronGeometry(h.radius, h.detail);
                                        break;
                                    case "TorusGeometry":
                                        l = new a.TorusGeometry(h.radius, h.tube, h.radialSegments, h.tubularSegments, h.arc);
                                        break;
                                    case "TorusKnotGeometry":
                                        l = new a.TorusKnotGeometry(h.radius, h.tube, h.radialSegments, h.tubularSegments, h.p, h.q, h.heightScale);
                                        break;
                                    case "BufferGeometry":
                                        l = o.parse(h.data);
                                        break;
                                    case "Geometry2":
                                        l = r.parse(h.data);
                                        break;
                                    case "Geometry":
                                        l = i.parse(h.data).geometry
                                }
                                l.uuid = h.uuid, void 0 !== h.name && (l.name = h.name), t[h.uuid] = l
                            }
                        return t
                    },
                    parseMaterials: function(e) {
                        var t = {};
                        if (void 0 !== e)
                            for (var i = new a.MaterialLoader, r = 0, o = e.length; r < o; r++) {
                                var n = e[r],
                                    s = i.parse(n);
                                s.uuid = n.uuid, void 0 !== n.name && (s.name = n.name), t[n.uuid] = s
                            }
                        return t
                    },
                    parseObject: function() {
                        var e = new a.Matrix4;
                        return function(t, i, r) {
                            var o;
                            switch (t.type) {
                                case "Scene":
                                    o = new a.Scene;
                                    break;
                                case "PerspectiveCamera":
                                    o = new a.PerspectiveCamera(t.fov, t.aspect, t.near, t.far);
                                    break;
                                case "OrthographicCamera":
                                    o = new a.OrthographicCamera(t.left, t.right, t.top, t.bottom, t.near, t.far);
                                    break;
                                case "AmbientLight":
                                    o = new a.AmbientLight(t.color);
                                    break;
                                case "DirectionalLight":
                                    o = new a.DirectionalLight(t.color, t.intensity);
                                    break;
                                case "PointLight":
                                    o = new a.PointLight(t.color, t.intensity, t.distance, t.decay, t.physicalFalloff);
                                    break;
                                case "SpotLight":
                                    o = new a.SpotLight(t.color, t.intensity, t.distance, t.angle, t.exponent, t.decay, t.physicalFalloff);
                                    break;
                                case "HemisphereLight":
                                    o = new a.HemisphereLight(t.color, t.groundColor, t.intensity);
                                    break;
                                case "AreaLight":
                                    (o = new a.AreaLight(t.color, t.intensity, t.distance, t.decayExponent, t.decay, t.physicalFalloff)).width = t.width || 1, o.height = t.height || 1;
                                    break;
                                case "Mesh":
                                    var n = i[t.geometry],
                                        s = r[t.material];
                                    void 0 === n && a.onerror("THREE.ObjectLoader: Undefined geometry " + t.geometry), void 0 === s && a.onerror("THREE.ObjectLoader: Undefined material " + t.material), o = new a.Mesh(n, s);
                                    break;
                                case "Sprite":
                                    void 0 === (s = r[t.material]) && a.onerror("THREE.ObjectLoader: Undefined material " + t.material), o = new a.Sprite(s);
                                    break;
                                default:
                                    o = new a.Object3D
                            }
                            if (o.uuid = t.uuid, void 0 !== t.name && (o.name = t.name), void 0 !== t.matrix ? (e.fromArray(t.matrix), e.decompose(o.position, o.quaternion, o.scale)) : (void 0 !== t.position && o.position.fromArray(t.position), void 0 !== t.rotation && o.rotation.fromArray(t.rotation), void 0 !== t.scale && o.scale.fromArray(t.scale)), void 0 !== t.visible && (o.visible = t.visible), void 0 !== t.userData && (o.userData = t.userData), void 0 !== t.children)
                                for (var l in t.children) o.add(this.parseObject(t.children[l], i, r));
                            return o
                        }
                    }()
                }, a.SceneLoader = function() {
                    this.onLoadStart = function() {}, this.onLoadProgress = function() {}, this.onLoadComplete = function() {}, this.callbackSync = function() {}, this.callbackProgress = function() {}, this.geometryHandlers = {}, this.hierarchyHandlers = {}, this.addGeometryHandler("ascii", a.JSONLoader)
                }, a.SceneLoader.prototype = {
                    constructor: a.SceneLoader,
                    load: function(e, t, i, r) {
                        var o = this,
                            n = new a.XHRLoader(o.manager);
                        n.setCrossOrigin(this.crossOrigin), n.load(e, (function(i) {
                            o.parse(JSON.parse(i), t, e)
                        }))
                    },
                    setCrossOrigin: function(e) {
                        this.crossOrigin = e
                    },
                    addGeometryHandler: function(e, t) {
                        this.geometryHandlers[e] = {
                            loaderClass: t
                        }
                    },
                    addHierarchyHandler: function(e, t) {
                        this.hierarchyHandlers[e] = {
                            loaderClass: t
                        }
                    },
                    parse: function(e, t, i) {
                        var r, o, n, s, l, h, c, u, f, p, d, m, g = this,
                            v = a.Loader.prototype.extractUrlBase(i),
                            y = [],
                            x = e;
                        for (var _ in this.geometryHandlers) {
                            var M = this.geometryHandlers[_].loaderClass;
                            this.geometryHandlers[_].loaderObject = new M
                        }
                        for (var _ in this.hierarchyHandlers) {
                            M = this.hierarchyHandlers[_].loaderClass;
                            this.hierarchyHandlers[_].loaderObject = new M
                        }
                        if (u = 0, f = 0, m = {
                                scene: new a.Scene,
                                geometries: {},
                                face_materials: {},
                                materials: {},
                                textures: {},
                                objects: {},
                                cameras: {},
                                lights: {},
                                fogs: {},
                                empties: {},
                                groups: {}
                            }, x.transform) {
                            var w = x.transform.position,
                                S = x.transform.rotation,
                                b = x.transform.scale;
                            w && m.scene.position.fromArray(w), S && m.scene.rotation.fromArray(S), b && m.scene.scale.fromArray(b), (w || S || b) && (m.scene.updateMatrix(), m.scene.updateMatrixWorld())
                        }

                        function A(e, t) {
                            return "relativeToHTML" == t ? e : v + e
                        }

                        function T() {
                            C(m.scene, x.objects)
                        }

                        function C(e, t) {
                            var i, s, l, h, u;
                            for (var f in t) {
                                var p = m.objects[f],
                                    d = t[f];
                                if (void 0 === p) {
                                    if (d.type && d.type in g.hierarchyHandlers) {
                                        if (void 0 === d.loading) {
                                            var v = {
                                                    type: 1,
                                                    url: 1,
                                                    material: 1,
                                                    position: 1,
                                                    rotation: 1,
                                                    scale: 1,
                                                    visible: 1,
                                                    children: 1,
                                                    userData: 1,
                                                    skin: 1,
                                                    morph: 1,
                                                    mirroredLoop: 1,
                                                    duration: 1
                                                },
                                                y = {};
                                            for (var _ in d) _ in v || (y[_] = d[_]);
                                            o = m.materials[d.material], d.loading = !0;
                                            var M = g.hierarchyHandlers[d.type].loaderObject;
                                            M.options ? M.load(A(d.url, x.urlBaseType), P(f, e, o, d)) : M.load(A(d.url, x.urlBaseType), P(f, e, o, d), y)
                                        }
                                    } else if (void 0 !== d.geometry) {
                                        if (r = m.geometries[d.geometry]) {
                                            var w = !1;
                                            if (w = (o = m.materials[d.material]) instanceof a.ShaderMaterial, s = d.position, l = d.rotation, h = d.scale, i = d.matrix, u = d.quaternion, d.material || (o = new a.MeshFaceMaterial(m.face_materials[d.geometry])), o instanceof a.MeshFaceMaterial && 0 === o.materials.length && (o = new a.MeshFaceMaterial(m.face_materials[d.geometry])), o instanceof a.MeshFaceMaterial)
                                                for (var S = 0; S < o.materials.length; S++) w = w || o.materials[S] instanceof a.ShaderMaterial;
                                            w && r.computeTangents(), d.skin ? p = new a.SkinnedMesh(r, o) : d.morph ? (p = new a.MorphAnimMesh(r, o), void 0 !== d.duration && (p.duration = d.duration), void 0 !== d.time && (p.time = d.time), void 0 !== d.mirroredLoop && (p.mirroredLoop = d.mirroredLoop), o.morphNormals && r.computeMorphNormals()) : p = new a.Mesh(r, o), p.name = f, i ? (p.matrixAutoUpdate = !1, p.matrix.set(i[0], i[1], i[2], i[3], i[4], i[5], i[6], i[7], i[8], i[9], i[10], i[11], i[12], i[13], i[14], i[15])) : (p.position.fromArray(s), u ? p.quaternion.fromArray(u) : p.rotation.fromArray(l), p.scale.fromArray(h)), p.visible = d.visible, p.castShadow = d.castShadow, p.receiveShadow = d.receiveShadow, e.add(p), m.objects[f] = p
                                        }
                                    } else if ("AmbientLight" === d.type || "PointLight" === d.type || "DirectionalLight" === d.type || "SpotLight" === d.type || "HemisphereLight" === d.type || "AreaLight" === d.type) {
                                        var b = d.color,
                                            T = d.intensity,
                                            E = d.distance,
                                            L = d.position,
                                            R = d.rotation;
                                        switch (d.type) {
                                            case "AmbientLight":
                                                c = new a.AmbientLight(b);
                                                break;
                                            case "PointLight":
                                                (c = new a.PointLight(b, T, E)).position.fromArray(L);
                                                break;
                                            case "DirectionalLight":
                                                (c = new a.DirectionalLight(b, T)).position.fromArray(d.direction);
                                                break;
                                            case "SpotLight":
                                                (c = new a.SpotLight(b, T, E, 1)).angle = d.angle, c.position.fromArray(L), c.target.set(L[0], L[1] - E, L[2]), c.target.applyEuler(new a.Euler(R[0], R[1], R[2], "XYZ"));
                                                break;
                                            case "HemisphereLight":
                                                (c = new a.DirectionalLight(b, T, E)).target.set(L[0], L[1] - E, L[2]), c.target.applyEuler(new a.Euler(R[0], R[1], R[2], "XYZ"));
                                                break;
                                            case "AreaLight":
                                                (c = new a.AreaLight(b, T)).position.fromArray(L), c.width = d.size, c.height = d.size_y
                                        }
                                        e.add(c), c.name = f, m.lights[f] = c, m.objects[f] = c
                                    } else "PerspectiveCamera" === d.type || "OrthographicCamera" === d.type ? (s = d.position, l = d.rotation, u = d.quaternion, "PerspectiveCamera" === d.type ? n = new a.PerspectiveCamera(d.fov, d.aspect, d.near, d.far) : "OrthographicCamera" === d.type && (n = new a.OrthographicCamera(d.left, d.right, d.top, d.bottom, d.near, d.far)), n.name = f, n.position.fromArray(s), void 0 !== u ? n.quaternion.fromArray(u) : void 0 !== l && n.rotation.fromArray(l), e.add(n), m.cameras[f] = n, m.objects[f] = n) : (s = d.position, l = d.rotation, h = d.scale, u = d.quaternion, (p = new a.Object3D).name = f, p.position.fromArray(s), u ? p.quaternion.fromArray(u) : p.rotation.fromArray(l), p.scale.fromArray(h), p.visible = void 0 !== d.visible && d.visible, e.add(p), m.objects[f] = p, m.empties[f] = p);
                                    if (p) {
                                        if (void 0 !== d.userData)
                                            for (var D in d.userData) {
                                                var V = d.userData[D];
                                                p.userData[D] = V
                                            }
                                        if (void 0 !== d.groups)
                                            for (S = 0; S < d.groups.length; S++) {
                                                var U = d.groups[S];
                                                void 0 === m.groups[U] && (m.groups[U] = []), m.groups[U].push(f)
                                            }
                                    }
                                }
                                void 0 !== p && void 0 !== d.children && C(p, d.children)
                            }
                        }

                        function E(e, t, i, r, a) {
                            var o = a.position,
                                n = a.rotation,
                                s = a.quaternion,
                                l = a.scale;
                            e.position.fromArray(o), s ? e.quaternion.fromArray(s) : e.rotation.fromArray(n), e.scale.fromArray(l), r && e.traverse((function(e) {
                                e.material = r
                            }));
                            var h = void 0 === a.visible || a.visible;
                            e.traverse((function(e) {
                                e.visible = h
                            })), i.add(e), e.name = t, m.objects[t] = e, T()
                        }

                        function L(e) {
                            return function(t, i) {
                                t.name = e,
                                    function(e, t, i) {
                                        m.geometries[i] = e, m.face_materials[i] = t, T()
                                    }(t, i, e), u -= 1, g.onLoadComplete(), D()
                            }
                        }

                        function P(e, t, i, r) {
                            return function(a) {
                                E(a.content ? a.content : a.dae ? a.scene : a, e, t, i, r), u -= 1, g.onLoadComplete(), D()
                            }
                        }

                        function R(e) {
                            return function(t, i) {
                                t.name = e, m.geometries[e] = t, m.face_materials[e] = i
                            }
                        }

                        function D() {
                            var e = {
                                totalModels: p,
                                totalTextures: d,
                                loadedModels: p - u,
                                loadedTextures: d - f
                            };
                            g.callbackProgress(e, m), g.onLoadProgress(), 0 === u && 0 === f && (! function() {
                                for (var e = 0; e < y.length; e++) {
                                    var t = y[e],
                                        i = m.objects[t.targetName];
                                    i ? t.object.target = i : (t.object.target = new a.Object3D, m.scene.add(t.object.target)), t.object.target.userData.targetInverse = t.object
                                }
                            }(), t(m))
                        }
                        var V, U, F, N, O, z, I, B, k, G = function(e) {
                            return function() {
                                ! function(e) {
                                    f -= e, D(), g.onLoadComplete()
                                }(e)
                            }
                        };

                        function H(e, t) {
                            if (t(e), void 0 !== e.children)
                                for (var i in e.children) H(e.children[i], t)
                        }
                        for (V in x.fogs) "linear" === (U = x.fogs[V]).type ? s = new a.Fog(0, U.near, U.far) : "exp2" === U.type && (s = new a.FogExp2(0, U.density)), h = U.color, s.color.setRGB(h[0], h[1], h[2]), m.fogs[V] = s;
                        for (F in x.geometries)(N = x.geometries[F]).type in this.geometryHandlers && (u += 1, g.onLoadStart());
                        for (var W in x.objects) H(x.objects[W], (function(e) {
                            e.type && e.type in g.hierarchyHandlers && (u += 1, g.onLoadStart())
                        }));
                        for (F in p = u, x.geometries)
                            if ("cube" === (N = x.geometries[F]).type)(r = new a.BoxGeometry(N.width, N.height, N.depth, N.widthSegments, N.heightSegments, N.depthSegments)).name = F, m.geometries[F] = r;
                            else if ("plane" === N.type)(r = new a.PlaneGeometry(N.width, N.height, N.widthSegments, N.heightSegments)).name = F, m.geometries[F] = r;
                        else if ("sphere" === N.type)(r = new a.SphereGeometry(N.radius, N.widthSegments, N.heightSegments)).name = F, m.geometries[F] = r;
                        else if ("cylinder" === N.type)(r = new a.CylinderGeometry(N.topRad, N.botRad, N.height, N.radSegs, N.heightSegs)).name = F, m.geometries[F] = r;
                        else if ("torus" === N.type)(r = new a.TorusGeometry(N.radius, N.tube, N.segmentsR, N.segmentsT)).name = F, m.geometries[F] = r;
                        else if ("icosahedron" === N.type)(r = new a.IcosahedronGeometry(N.radius, N.subdivisions)).name = F, m.geometries[F] = r;
                        else if (N.type in this.geometryHandlers) {
                            var j = {};
                            for (var X in N) "type" !== X && "url" !== X && (j[X] = N[X]);
                            this.geometryHandlers[N.type].loaderObject.load(A(N.url, x.urlBaseType), L(F), j)
                        } else if ("embedded" === N.type) {
                            var Y = x.embeds[N.id];
                            if (Y.metadata = x.metadata, Y) {
                                var q = this.geometryHandlers.ascii.loaderObject.parse(Y, "");
                                R(F)(q.geometry, q.materials)
                            }
                        }
                        for (O in x.textures)
                            if ((z = x.textures[O]).url instanceof Array) {
                                f += z.url.length;
                                for (var K = 0; K < z.url.length; K++) g.onLoadStart()
                            } else f += 1, g.onLoadStart();
                        for (O in d = f, x.textures) {
                            if (void 0 !== (z = x.textures[O]).mapping && void 0 !== a[z.mapping] && (z.mapping = new a[z.mapping]), z.url instanceof Array) {
                                for (var Q = z.url.length, Z = [], J = 0; J < Q; J++) Z[J] = A(z.url[J], x.urlBaseType);
                                l = ($ = /\.dds$/i.test(Z[0])) ? a.ImageUtils.loadCompressedTextureCube(Z, z.mapping, G(Q)) : a.ImageUtils.loadTextureCube(Z, z.mapping, G(Q))
                            } else {
                                var $ = /\.dds$/i.test(z.url),
                                    ee = A(z.url, x.urlBaseType),
                                    te = G(1);
                                if (l = $ ? a.ImageUtils.loadCompressedTexture(ee, z.mapping, te) : a.ImageUtils.loadTexture(ee, z.mapping, te), void 0 !== a[z.minFilter] && (l.minFilter = a[z.minFilter]), void 0 !== a[z.magFilter] && (l.magFilter = a[z.magFilter]), z.anisotropy && (l.anisotropy = z.anisotropy), z.repeat && (l.repeat.set(z.repeat[0], z.repeat[1]), 1 !== z.repeat[0] && (l.wrapS = a.RepeatWrapping), 1 !== z.repeat[1] && (l.wrapT = a.RepeatWrapping)), z.offset && l.offset.set(z.offset[0], z.offset[1]), z.wrap) {
                                    var ie = {
                                        repeat: a.RepeatWrapping,
                                        mirror: a.MirroredRepeatWrapping
                                    };
                                    void 0 !== ie[z.wrap[0]] && (l.wrapS = ie[z.wrap[0]]), void 0 !== ie[z.wrap[1]] && (l.wrapT = ie[z.wrap[1]])
                                }
                            }
                            m.textures[O] = l
                        }
                        for (I in x.materials) {
                            for (k in (B = x.materials[I]).parameters)
                                if ("envMap" === k || "map" === k || "lightMap" === k || "bumpMap" === k) B.parameters[k] = m.textures[B.parameters[k]];
                                else if ("shading" === k) B.parameters[k] = "flat" === B.parameters[k] ? a.FlatShading : a.SmoothShading;
                            else if ("side" === k) "double" == B.parameters[k] ? B.parameters[k] = a.DoubleSide : "back" == B.parameters[k] ? B.parameters[k] = a.BackSide : B.parameters[k] = a.FrontSide;
                            else if ("blending" === k) B.parameters[k] = B.parameters[k] in a ? a[B.parameters[k]] : a.NormalBlending;
                            else if ("combine" === k) B.parameters[k] = B.parameters[k] in a ? a[B.parameters[k]] : a.MultiplyOperation;
                            else if ("vertexColors" === k) "face" == B.parameters[k] ? B.parameters[k] = a.FaceColors : B.parameters[k] && (B.parameters[k] = a.VertexColors);
                            else if ("wrapRGB" === k) {
                                var re = B.parameters[k];
                                B.parameters[k] = new a.Vector3(re[0], re[1], re[2])
                            }
                            if (void 0 !== B.parameters.opacity && B.parameters.opacity < 1 && (B.parameters.transparent = !0), B.parameters.normalMap) {
                                var ae = a.ShaderLib.normalmap,
                                    oe = a.UniformsUtils.clone(ae.uniforms),
                                    ne = B.parameters.color,
                                    se = B.parameters.specular,
                                    le = B.parameters.ambient,
                                    he = B.parameters.shininess;
                                oe.tNormal.value = m.textures[B.parameters.normalMap], B.parameters.normalScale && oe.uNormalScale.value.set(B.parameters.normalScale[0], B.parameters.normalScale[1]), B.parameters.map && (oe.tDiffuse.value = B.parameters.map, oe.enableDiffuse.value = !0), B.parameters.envMap && (oe.tCube.value = B.parameters.envMap, oe.enableReflection.value = !0, oe.reflectivity.value = B.parameters.reflectivity), B.parameters.lightMap && (oe.tAO.value = B.parameters.lightMap, oe.enableAO.value = !0), B.parameters.specularMap && (oe.tSpecular.value = m.textures[B.parameters.specularMap], oe.enableSpecular.value = !0), B.parameters.displacementMap && (oe.tDisplacement.value = m.textures[B.parameters.displacementMap], oe.enableDisplacement.value = !0, oe.uDisplacementBias.value = B.parameters.displacementBias, oe.uDisplacementScale.value = B.parameters.displacementScale), oe.diffuse.value.setHex(ne), oe.specular.value.setHex(se), oe.ambient.value.setHex(le), oe.shininess.value = he, B.parameters.opacity && (oe.opacity.value = B.parameters.opacity);
                                var ce = {
                                    fragmentShader: ae.fragmentShader,
                                    vertexShader: ae.vertexShader,
                                    uniforms: oe,
                                    lights: !0,
                                    fog: !0
                                };
                                o = new a.ShaderMaterial(ce)
                            } else o = new a[B.type](B.parameters);
                            o.name = I, m.materials[I] = o
                        }
                        for (I in x.materials)
                            if ((B = x.materials[I]).parameters.materials) {
                                var ue = [];
                                for (J = 0; J < B.parameters.materials.length; J++) {
                                    var fe = B.parameters.materials[J];
                                    ue.push(m.materials[fe])
                                }
                                m.materials[I].materials = ue
                            }
                        T(), m.cameras && x.defaults.camera && (m.currentCamera = m.cameras[x.defaults.camera]), m.fogs && x.defaults.fog && (m.scene.fog = m.fogs[x.defaults.fog]), g.callbackSync(m), D()
                    }
                }, a.TextureLoader = function(e) {
                    this.manager = void 0 !== e ? e : a.DefaultLoadingManager
                }, a.TextureLoader.prototype = {
                    constructor: a.TextureLoader,
                    load: function(e, t, i, r) {
                        var o = new a.ImageLoader(this.manager);
                        o.setCrossOrigin(this.crossOrigin), o.load(e, (function(e) {
                            var i = new a.Texture(e);
                            i.needsUpdate = !0, void 0 !== t && t(i)
                        }))
                    },
                    setCrossOrigin: function(e) {
                        this.crossOrigin = e
                    }
                }, a.Material = function() {
                    this.id = a.MaterialIdCount++, this.uuid = a.Math.generateUUID(), this.name = "", this.side = a.FrontSide, this.opacity = 1, this.transparent = !1, this.blending = a.NormalBlending, this.blendSrc = a.SrcAlphaFactor, this.blendDst = a.OneMinusSrcAlphaFactor, this.blendEquation = a.AddEquation, this.depthTest = !0, this.depthWrite = !0, this.polygonOffset = !1, this.polygonOffsetFactor = 0, this.polygonOffsetUnits = 0, this.alphaTest = 0, this.overdraw = 0, this.visible = !0, this.needsUpdate = !0
                }, a.Material.prototype = {
                    constructor: a.Material,
                    setValues: function(e) {
                        if (void 0 !== e)
                            for (var t in e) {
                                var i = e[t];
                                if (void 0 !== i) {
                                    if (t in this) {
                                        var r = this[t];
                                        r instanceof a.Color ? r.set(i) : r instanceof a.Vector3 && i instanceof a.Vector3 ? r.copy(i) : this[t] = "overdraw" == t ? Number(i) : i
                                    }
                                } else a.onwarning("THREE.Material: '" + t + "' parameter is undefined.")
                            }
                    },
                    clone: function(e) {
                        return void 0 === e && (e = new a.Material), e.name = this.name, e.side = this.side, e.opacity = this.opacity, e.transparent = this.transparent, e.blending = this.blending, e.blendSrc = this.blendSrc, e.blendDst = this.blendDst, e.blendEquation = this.blendEquation, e.depthTest = this.depthTest, e.depthWrite = this.depthWrite, e.polygonOffset = this.polygonOffset, e.polygonOffsetFactor = this.polygonOffsetFactor, e.polygonOffsetUnits = this.polygonOffsetUnits, e.alphaTest = this.alphaTest, e.overdraw = this.overdraw, e.visible = this.visible, e
                    },
                    dispose: function() {
                        this.dispatchEvent({
                            type: "dispose"
                        })
                    }
                }, a.EventDispatcher.prototype.apply(a.Material.prototype), a.MaterialIdCount = 0, a.LineBasicMaterial = function(e) {
                    a.Material.call(this), this.color = new a.Color(16777215), this.linewidth = 1, this.linecap = "round", this.linejoin = "round", this.vertexColors = !1, this.fog = !0, this.setValues(e)
                }, a.LineBasicMaterial.prototype = Object.create(a.Material.prototype), a.LineBasicMaterial.prototype.clone = function() {
                    var e = new a.LineBasicMaterial;
                    return a.Material.prototype.clone.call(this, e), e.color.copy(this.color), e.linewidth = this.linewidth, e.linecap = this.linecap, e.linejoin = this.linejoin, e.vertexColors = this.vertexColors, e.fog = this.fog, e
                }, a.LineDashedMaterial = function(e) {
                    a.Material.call(this), this.color = new a.Color(16777215), this.linewidth = 1, this.scale = 1, this.dashSize = 3, this.gapSize = 1, this.vertexColors = !1, this.fog = !0, this.setValues(e)
                }, a.LineDashedMaterial.prototype = Object.create(a.Material.prototype), a.LineDashedMaterial.prototype.clone = function() {
                    var e = new a.LineDashedMaterial;
                    return a.Material.prototype.clone.call(this, e), e.color.copy(this.color), e.linewidth = this.linewidth, e.scale = this.scale, e.dashSize = this.dashSize, e.gapSize = this.gapSize, e.vertexColors = this.vertexColors, e.fog = this.fog, e
                }, a.MeshBasicMaterial = function(e) {
                    a.Material.call(this), this.color = new a.Color(16777215), this.map = null, this.lightMap = null, this.specularMap = null, this.envMap = null, this.combine = a.MultiplyOperation, this.reflectivity = 1, this.refractionRatio = .98, this.fog = !0, this.shading = a.SmoothShading, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.vertexColors = a.NoColors, this.skinning = !1, this.morphTargets = !1, this.setValues(e)
                }, a.MeshBasicMaterial.prototype = Object.create(a.Material.prototype), a.MeshBasicMaterial.prototype.clone = function() {
                    var e = new a.MeshBasicMaterial;
                    return a.Material.prototype.clone.call(this, e), e.color.copy(this.color), e.map = this.map, e.lightMap = this.lightMap, e.specularMap = this.specularMap, e.envMap = this.envMap, e.combine = this.combine, e.reflectivity = this.reflectivity, e.refractionRatio = this.refractionRatio, e.fog = this.fog, e.shading = this.shading, e.wireframe = this.wireframe, e.wireframeLinewidth = this.wireframeLinewidth, e.wireframeLinecap = this.wireframeLinecap, e.wireframeLinejoin = this.wireframeLinejoin, e.vertexColors = this.vertexColors, e.skinning = this.skinning, e.morphTargets = this.morphTargets, e
                }, a.MeshLambertMaterial = function(e) {
                    a.Material.call(this), this.color = new a.Color(16777215), this.ambient = new a.Color(16777215), this.emissive = new a.Color(0), this.wrapAround = !1, this.wrapRGB = new a.Vector3(1, 1, 1), this.map = null, this.lightMap = null, this.specularMap = null, this.envMap = null, this.combine = a.MultiplyOperation, this.reflectivity = 1, this.refractionRatio = .98, this.fog = !0, this.shading = a.SmoothShading, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.vertexColors = a.NoColors, this.skinning = !1, this.morphTargets = !1, this.morphNormals = !1, this.setValues(e)
                }, a.MeshLambertMaterial.prototype = Object.create(a.Material.prototype), a.MeshLambertMaterial.prototype.clone = function() {
                    var e = new a.MeshLambertMaterial;
                    return a.Material.prototype.clone.call(this, e), e.color.copy(this.color), e.ambient.copy(this.ambient), e.emissive.copy(this.emissive), e.wrapAround = this.wrapAround, e.wrapRGB.copy(this.wrapRGB), e.map = this.map, e.lightMap = this.lightMap, e.specularMap = this.specularMap, e.envMap = this.envMap, e.combine = this.combine, e.reflectivity = this.reflectivity, e.refractionRatio = this.refractionRatio, e.fog = this.fog, e.shading = this.shading, e.wireframe = this.wireframe, e.wireframeLinewidth = this.wireframeLinewidth, e.wireframeLinecap = this.wireframeLinecap, e.wireframeLinejoin = this.wireframeLinejoin, e.vertexColors = this.vertexColors, e.skinning = this.skinning, e.morphTargets = this.morphTargets, e.morphNormals = this.morphNormals, e
                }, a.MeshPhongMaterial = function(e) {
                    a.Material.call(this), this.color = new a.Color(16777215), this.ambient = new a.Color(0), this.emissive = new a.Color(0), this.specular = new a.Color(16777215), this.shininess = 30, this.wrapAround = !1, this.wrapRGB = new a.Vector3(1, 1, 1), this.map = null, this.opacityMap = null, this.lightMap = null, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalScale = new a.Vector2(1, 1), this.specularMap = null, this.envMap = null, this.combine = a.MultiplyOperation, this.reflectivity = 1, this.refractionRatio = .98, this.fog = !0, this.shading = a.SmoothShading, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.vertexColors = a.NoColors, this.skinning = !1, this.morphTargets = !1, this.morphNormals = !1, this.setValues(e)
                }, a.MeshPhongMaterial.prototype = Object.create(a.Material.prototype), a.MeshPhongMaterial.prototype.clone = function() {
                    var e = new a.MeshPhongMaterial;
                    return a.Material.prototype.clone.call(this, e), e.color.copy(this.color), e.ambient.copy(this.ambient), e.emissive.copy(this.emissive), e.specular.copy(this.specular), e.shininess = this.shininess, e.wrapAround = this.wrapAround, e.wrapRGB.copy(this.wrapRGB), e.map = this.map, e.opacityMap = this.opacityMap, e.lightMap = this.lightMap, e.emissiveMap = this.emissiveMap, e.bumpMap = this.bumpMap, e.bumpScale = this.bumpScale, e.normalMap = this.normalMap, e.normalScale.copy(this.normalScale), e.specularMap = this.specularMap, e.envMap = this.envMap, e.combine = this.combine, e.reflectivity = this.reflectivity, e.refractionRatio = this.refractionRatio, e.fog = this.fog, e.shading = this.shading, e.wireframe = this.wireframe, e.wireframeLinewidth = this.wireframeLinewidth, e.wireframeLinecap = this.wireframeLinecap, e.wireframeLinejoin = this.wireframeLinejoin, e.vertexColors = this.vertexColors, e.skinning = this.skinning, e.morphTargets = this.morphTargets, e.morphNormals = this.morphNormals, e
                }, a.MeshPhysicalMaterial = function(e) {
                    a.Material.call(this), this.color = new a.Color(16777215), this.map = null, this.opacityMap = null, this.fog = !0, this.falloff = !1, this.falloffColor = new a.Color(16777215), this.falloffMap = null, this.falloffBlendParams = new a.Vector4(1, 0, 0, 1), this.specular = new a.Color(16777215), this.specularMap = null, this.roughness = .5, this.roughnessMap = null, this.metallic = 0, this.metallicMap = null, this.clearCoat = 0, this.clearCoatRoughness = .2, this.anisotropy = 0, this.anisotropyMap = null, this.anisotropyRotation = 0, this.anisotropyRotationMap = null, this.translucency = new a.Color(0), this.translucencyMap = null, this.translucencyNormalAlpha = .75, this.translucencyNormalPower = 1, this.translucencyViewPower = 2, this.translucencyViewAlpha = .75, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalScale = new a.Vector2(1, 1), this.emissive = new a.Color(0), this.emissiveMap = null, this.ambient = new a.Color(0), this.lightMap = null, this.envMap = null, this.diffuseEnvMap = null, this.combine = a.AddOperation, this.shading = a.SmoothShading, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.blending = a.CustomBlending, this.blendSrc = a.OneFactor, this.blendDst = a.OneMinusSrcAlphaFactor, this.blendEquation = a.AddEquation, this.vertexColors = a.NoColors, this.skinning = !1, this.morphTargets = !1, this.morphNormals = !1, this.setValues(e)
                }, a.MeshPhysicalMaterial.prototype = Object.create(a.Material.prototype), a.MeshPhysicalMaterial.prototype.clone = function() {
                    var e = new a.MeshPhysicalMaterial;
                    return a.Material.prototype.clone.call(this, e), e.color.copy(this.color), e.map = this.map, e.opacityMap = this.opacityMap, e.fog = this.fog, e.falloff = this.falloff, e.falloffColor.copy(this.falloffColor), e.falloffMap = this.falloffMap, e.falloffBlendParams.copy(this.falloffBlendParams), e.specular.copy(this.specular), e.specularMap = this.specularMap, e.roughness = this.roughness, e.roughnessMap = this.roughnessMap, e.metallic = this.metallic, e.metallicMap = this.metallicMap, e.shading = this.shading, e.translucency.copy(this.translucency), e.translucencyMap = this.translucencyMap, e.translucencyNormalAlpha = this.translucencyNormalAlpha, e.translucencyNormalPower = this.translucencyNormalPower, e.translucencyViewPower = this.translucencyViewPower, e.translucencyViewAlpha = this.translucencyViewAlpha, e.bumpMap = this.bumpMap, e.bumpScale = this.bumpScale, e.normalMap = this.normalMap, e.normalScale.copy(this.normalScale), e.emissive.copy(this.emissive), e.emissiveMap = this.emissiveMap, e.ambient.copy(this.ambient), e.lightMap = this.lightMap, e.envMap = this.envMap, e.diffuseEnvMap = this.diffuseEnvMap, e.combine = this.combine, e.wireframe = this.wireframe, e.wireframeLinewidth = this.wireframeLinewidth, e.wireframeLinecap = this.wireframeLinecap, e.wireframeLinejoin = this.wireframeLinejoin, e.vertexColors = this.vertexColors, e.skinning = this.skinning, e.morphTargets = this.morphTargets, e.morphNormals = this.morphNormals, e
                }, a.MeshDepthMaterial = function(e) {
                    a.Material.call(this), this.wireframe = !1, this.wireframeLinewidth = 1, this.setValues(e)
                }, a.MeshDepthMaterial.prototype = Object.create(a.Material.prototype), a.MeshDepthMaterial.prototype.clone = function() {
                    var e = new a.MeshDepthMaterial;
                    return a.Material.prototype.clone.call(this, e), e.wireframe = this.wireframe, e.wireframeLinewidth = this.wireframeLinewidth, e
                }, a.MeshNormalMaterial = function(e) {
                    a.Material.call(this, e), this.shading = a.FlatShading, this.wireframe = !1, this.wireframeLinewidth = 1, this.morphTargets = !1, this.setValues(e)
                }, a.MeshNormalMaterial.prototype = Object.create(a.Material.prototype), a.MeshNormalMaterial.prototype.clone = function() {
                    var e = new a.MeshNormalMaterial;
                    return a.Material.prototype.clone.call(this, e), e.shading = this.shading, e.wireframe = this.wireframe, e.wireframeLinewidth = this.wireframeLinewidth, e
                }, a.MeshFaceMaterial = function(e) {
                    this.materials = e instanceof Array ? e : []
                }, a.MeshFaceMaterial.prototype.clone = function() {
                    for (var e = new a.MeshFaceMaterial, t = 0; t < this.materials.length; t++) e.materials.push(this.materials[t].clone());
                    return e
                }, a.ParticleSystemMaterial = function(e) {
                    a.Material.call(this), this.color = new a.Color(16777215), this.map = null, this.size = 1, this.sizeAttenuation = !0, this.vertexColors = !1, this.fog = !0, this.setValues(e)
                }, a.ParticleSystemMaterial.prototype = Object.create(a.Material.prototype), a.ParticleSystemMaterial.prototype.clone = function() {
                    var e = new a.ParticleSystemMaterial;
                    return a.Material.prototype.clone.call(this, e), e.color.copy(this.color), e.map = this.map, e.size = this.size, e.sizeAttenuation = this.sizeAttenuation, e.vertexColors = this.vertexColors, e.fog = this.fog, e
                }, a.ParticleBasicMaterial = a.ParticleSystemMaterial, a.ShaderMaterial = function(e) {
                    a.Material.call(this), this.shaderID = null, this.fragmentShader = "void main() {}", this.vertexShader = "void main() {}", this.uniforms = {}, this.defines = {}, this.attributes = null, this.shading = a.SmoothShading, this.linewidth = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.lights = !1, this.vertexColors = a.NoColors, this.skinning = !1, this.morphTargets = !1, this.morphNormals = !1, this.defaultAttributeValues = {
                        color: [1, 1, 1],
                        uv: [0, 0],
                        uv2: [0, 0]
                    }, this.index0AttributeName = "position", this.setValues(e)
                }, a.ShaderMaterial.prototype = Object.create(a.Material.prototype), a.ShaderMaterial.prototype.clone = function() {
                    var e = new a.ShaderMaterial;
                    return a.Material.prototype.clone.call(this, e), e.fragmentShader = this.fragmentShader, e.vertexShader = this.vertexShader, e.uniforms = a.UniformsUtils.clone(this.uniforms), e.attributes = this.attributes, e.defines = this.defines, e.shading = this.shading, e.wireframe = this.wireframe, e.wireframeLinewidth = this.wireframeLinewidth, e.fog = this.fog, e.lights = this.lights, e.vertexColors = this.vertexColors, e.skinning = this.skinning, e.morphTargets = this.morphTargets, e.morphNormals = this.morphNormals, e
                }, a.SpriteMaterial = function(e) {
                    a.Material.call(this), this.color = new a.Color(16777215), this.map = null, this.rotation = 0, this.fog = !1, this.setValues(e)
                }, a.SpriteMaterial.prototype = Object.create(a.Material.prototype), a.SpriteMaterial.prototype.clone = function() {
                    var e = new a.SpriteMaterial;
                    return a.Material.prototype.clone.call(this, e), e.color.copy(this.color), e.map = this.map, e.rotation = this.rotation, e.fog = this.fog, e
                }, a.SpriteCanvasMaterial = function(e) {
                    a.Material.call(this), this.color = new a.Color(16777215), this.program = function(e, t) {}, this.setValues(e)
                }, a.SpriteCanvasMaterial.prototype = Object.create(a.Material.prototype), a.SpriteCanvasMaterial.prototype.clone = function() {
                    var e = new a.SpriteCanvasMaterial;
                    return a.Material.prototype.clone.call(this, e), e.color.copy(this.color), e.program = this.program, e
                }, a.ParticleCanvasMaterial = a.SpriteCanvasMaterial, a.Texture = function(e, t, i, r, o, n, s, l, h) {
                    this.id = a.TextureIdCount++, this.uuid = a.Math.generateUUID(), this.name = "", this.image = e, this.mipmaps = [], this.mapping = void 0 !== t ? t : new a.UVMapping, this.wrapS = void 0 !== i ? i : a.ClampToEdgeWrapping, this.wrapT = void 0 !== r ? r : a.ClampToEdgeWrapping, this.magFilter = void 0 !== o ? o : a.LinearFilter, this.minFilter = void 0 !== n ? n : a.LinearMipMapLinearFilter, this.anisotropy = void 0 !== h ? h : 1, this.format = void 0 !== s ? s : a.RGBAFormat, this.type = void 0 !== l ? l : a.UnsignedByteType, this.offset = new a.Vector2(0, 0), this.repeat = new a.Vector2(1, 1), this.invert = !1, this.gainPivot = 0, this.gain = 1, this.brightness = 0, this.encoding = a.sRGB, this.generateMipmaps = !0, this.premultiplyAlpha = !1, this.flipY = !0, this.unpackAlignment = 4, this._needsUpdate = !1, this.onUpdate = null
                }, a.Texture.prototype = {
                    constructor: a.Texture,
                    get needsUpdate() {
                        return this._needsUpdate
                    },
                    set needsUpdate(e) {
                        !0 === e && this.update(), this._needsUpdate = e
                    },
                    clone: function(e) {
                        return void 0 === e && (e = new a.Texture), e.image = this.image, e.mipmaps = this.mipmaps.slice(0), e.mapping = this.mapping, e.wrapS = this.wrapS, e.wrapT = this.wrapT, e.magFilter = this.magFilter, e.minFilter = this.minFilter, e.anisotropy = this.anisotropy, e.format = this.format, e.type = this.type, e.offset.copy(this.offset), e.repeat.copy(this.repeat), e.invert = this.invert, e.gainPivot = this.gainPivot, e.gain = this.gain, e.brightness = this.brightness, e.encoding = this.encoding, e.generateMipmaps = this.generateMipmaps, e.premultiplyAlpha = this.premultiplyAlpha, e.flipY = this.flipY, e.unpackAlignment = this.unpackAlignment, e
                    },
                    update: function() {
                        this.dispatchEvent({
                            type: "update"
                        })
                    },
                    dispose: function() {
                        this.dispatchEvent({
                            type: "dispose"
                        })
                    }
                }, a.EventDispatcher.prototype.apply(a.Texture.prototype), a.TextureIdCount = 0, a.CompressedTexture = function(e, t, i, r, o, n, s, l, h, c, u) {
                    a.Texture.call(this, null, n, s, l, h, c, r, o, u), this.image = {
                        width: t,
                        height: i
                    }, this.mipmaps = e, this.generateMipmaps = !1
                }, a.CompressedTexture.prototype = Object.create(a.Texture.prototype), a.CompressedTexture.prototype.clone = function() {
                    var e = new a.CompressedTexture;
                    return a.Texture.prototype.clone.call(this, e), e
                }, a.DataTexture = function(e, t, i, r, o, n, s, l, h, c, u) {
                    a.Texture.call(this, null, n, s, l, h, c, r, o, u), this.image = {
                        data: e,
                        width: t,
                        height: i
                    }
                }, a.DataTexture.prototype = Object.create(a.Texture.prototype), a.DataTexture.prototype.clone = function() {
                    var e = new a.DataTexture;
                    return a.Texture.prototype.clone.call(this, e), e
                }, a.ParticleSystem = function(e, t) {
                    a.Object3D.call(this), this.geometry = void 0 !== e ? e : new a.Geometry, this.material = void 0 !== t ? t : new a.ParticleSystemMaterial({
                        color: 16777215 * Math.random()
                    }), this.sortParticles = !1, this.frustumCulled = !1
                }, a.ParticleSystem.prototype = Object.create(a.Object3D.prototype), a.ParticleSystem.prototype.clone = function(e) {
                    return void 0 === e && (e = new a.ParticleSystem(this.geometry, this.material)), e.sortParticles = this.sortParticles, a.Object3D.prototype.clone.call(this, e), e
                }, a.Line = function(e, t, i) {
                    a.Object3D.call(this), this.geometry = void 0 !== e ? e : new a.Geometry, this.material = void 0 !== t ? t : new a.LineBasicMaterial({
                        color: 16777215 * Math.random()
                    }), this.type = void 0 !== i ? i : a.LineStrip
                }, a.LineStrip = 0, a.LinePieces = 1, a.Line.prototype = Object.create(a.Object3D.prototype), a.Line.prototype.clone = function(e) {
                    return void 0 === e && (e = new a.Line(this.geometry, this.material, this.type)), a.Object3D.prototype.clone.call(this, e), e
                }, a.Mesh = function(e, t) {
                    a.Object3D.call(this), this.geometry = void 0 !== e ? e : new a.Geometry, this.material = void 0 !== t ? t : new a.MeshBasicMaterial({
                        color: 16777215 * Math.random()
                    }), this.updateMorphTargets()
                }, a.Mesh.prototype = Object.create(a.Object3D.prototype), a.Mesh.prototype.updateMorphTargets = function() {
                    if (void 0 !== this.geometry.morphTargets && this.geometry.morphTargets.length > 0) {
                        this.morphTargetBase = -1, this.morphTargetForcedOrder = [], this.morphTargetInfluences = [], this.morphTargetDictionary = {};
                        for (var e = 0, t = this.geometry.morphTargets.length; e < t; e++) this.morphTargetInfluences.push(0), this.morphTargetDictionary[this.geometry.morphTargets[e].name] = e
                    }
                }, a.Mesh.prototype.getMorphTargetIndexByName = function(e) {
                    return void 0 !== this.morphTargetDictionary[e] ? this.morphTargetDictionary[e] : (a.onwarning("THREE.Mesh.getMorphTargetIndexByName: morph target " + e + " does not exist. Returning 0."), 0)
                }, a.Mesh.prototype.clone = function(e) {
                    return void 0 === e && (e = new a.Mesh(this.geometry, this.material)), a.Object3D.prototype.clone.call(this, e), e
                }, a.Bone = function(e) {
                    a.Object3D.call(this), this.skin = e, this.skinMatrix = new a.Matrix4
                }, a.Bone.prototype = Object.create(a.Object3D.prototype), a.Bone.prototype.update = function(e, t) {
                    this.matrixAutoUpdate && (t |= this.updateMatrix()), (t || this.matrixWorldNeedsUpdate) && (e ? this.skinMatrix.multiplyMatrices(e, this.matrix) : this.skinMatrix.copy(this.matrix), this.matrixWorldNeedsUpdate = !1, t = !0);
                    var i, r = this.children.length;
                    for (i = 0; i < r; i++) this.children[i].update(this.skinMatrix, t)
                }, a.SkinnedMesh = function(e, t, i) {
                    var r, o, n, s, l, h;
                    if (a.Mesh.call(this, e, t), this.useVertexTexture = void 0 === i || i, this.identityMatrix = new a.Matrix4, this.bones = [], this.boneMatrices = [], this.geometry && void 0 !== this.geometry.bones) {
                        for (r = 0; r < this.geometry.bones.length; r++) s = (n = this.geometry.bones[r]).pos, l = n.rotq, h = n.scl, (o = this.addBone()).name = n.name, o.position.set(s[0], s[1], s[2]), o.quaternion.set(l[0], l[1], l[2], l[3]), void 0 !== h ? o.scale.set(h[0], h[1], h[2]) : o.scale.set(1, 1, 1);
                        for (r = 0; r < this.bones.length; r++) n = this.geometry.bones[r], o = this.bones[r], -1 === n.parent ? this.add(o) : this.bones[n.parent].add(o);
                        var c, u = this.bones.length;
                        if (this.useVertexTexture) c = u > 256 ? 64 : u > 64 ? 32 : u > 16 ? 16 : 8, this.boneTextureWidth = c, this.boneTextureHeight = c, this.boneMatrices = new Float32Array(this.boneTextureWidth * this.boneTextureHeight * 4), this.boneTexture = new a.DataTexture(this.boneMatrices, this.boneTextureWidth, this.boneTextureHeight, a.RGBAFormat, a.FloatType), this.boneTexture.minFilter = a.NearestFilter, this.boneTexture.magFilter = a.NearestFilter, this.boneTexture.generateMipmaps = !1, this.boneTexture.flipY = !1;
                        else this.boneMatrices = new Float32Array(16 * u);
                        this.pose()
                    }
                }, a.SkinnedMesh.prototype = Object.create(a.Mesh.prototype), a.SkinnedMesh.prototype.addBone = function(e) {
                    return void 0 === e && (e = new a.Bone(this)), this.bones.push(e), e
                }, a.SkinnedMesh.prototype.updateMatrixWorld = function() {
                    var e = new a.Matrix4;
                    return function(t) {
                        this.matrixAutoUpdate && this.updateMatrix(), (this.matrixWorldNeedsUpdate || t) && (this.parent ? this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix) : this.matrixWorld.copy(this.matrix), this.matrixWorldNeedsUpdate = !1, t = !0);
                        for (var i = 0, r = this.children.length; i < r; i++) {
                            var o = this.children[i];
                            o instanceof a.Bone ? o.update(this.identityMatrix, !1) : o.updateMatrixWorld(!0)
                        }
                        if (void 0 == this.boneInverses) {
                            this.boneInverses = [];
                            for (var n = 0, s = this.bones.length; n < s; n++) {
                                var l = new a.Matrix4;
                                l.getInverse(this.bones[n].skinMatrix), this.boneInverses.push(l)
                            }
                        }
                        for (n = 0, s = this.bones.length; n < s; n++) e.multiplyMatrices(this.bones[n].skinMatrix, this.boneInverses[n]), e.flattenToArrayOffset(this.boneMatrices, 16 * n);
                        this.useVertexTexture && (this.boneTexture.needsUpdate = !0)
                    }
                }(), a.SkinnedMesh.prototype.pose = function() {
                    this.updateMatrixWorld(!0), this.normalizeSkinWeights()
                }, a.SkinnedMesh.prototype.normalizeSkinWeights = function() {
                    if (this.geometry instanceof a.Geometry)
                        for (var e = 0; e < this.geometry.skinIndices.length; e++) {
                            var t = this.geometry.skinWeights[e],
                                i = 1 / t.lengthManhattan();
                            i !== 1 / 0 ? t.multiplyScalar(i) : t.set(1)
                        }
                }, a.SkinnedMesh.prototype.clone = function(e) {
                    return void 0 === e && (e = new a.SkinnedMesh(this.geometry, this.material, this.useVertexTexture)), a.Mesh.prototype.clone.call(this, e), e
                }, a.MorphAnimMesh = function(e, t) {
                    a.Mesh.call(this, e, t), this.duration = 1e3, this.mirroredLoop = !1, this.time = 0, this.lastKeyframe = 0, this.currentKeyframe = 0, this.direction = 1, this.directionBackwards = !1, this.setFrameRange(0, this.geometry.morphTargets.length - 1)
                }, a.MorphAnimMesh.prototype = Object.create(a.Mesh.prototype), a.MorphAnimMesh.prototype.setFrameRange = function(e, t) {
                    this.startKeyframe = e, this.endKeyframe = t, this.length = this.endKeyframe - this.startKeyframe + 1
                }, a.MorphAnimMesh.prototype.setDirectionForward = function() {
                    this.direction = 1, this.directionBackwards = !1
                }, a.MorphAnimMesh.prototype.setDirectionBackward = function() {
                    this.direction = -1, this.directionBackwards = !0
                }, a.MorphAnimMesh.prototype.parseAnimations = function() {
                    var e = this.geometry;
                    e.animations || (e.animations = {});
                    for (var t, i = e.animations, r = /([a-z]+)(\d+)/, a = 0, o = e.morphTargets.length; a < o; a++) {
                        var n = e.morphTargets[a].name.match(r);
                        if (n && n.length > 1) {
                            var s = n[1];
                            n[2];
                            i[s] || (i[s] = {
                                start: 1 / 0,
                                end: -1 / 0
                            });
                            var l = i[s];
                            a < l.start && (l.start = a), a > l.end && (l.end = a), t || (t = s)
                        }
                    }
                    e.firstAnimation = t
                }, a.MorphAnimMesh.prototype.setAnimationLabel = function(e, t, i) {
                    this.geometry.animations || (this.geometry.animations = {}), this.geometry.animations[e] = {
                        start: t,
                        end: i
                    }
                }, a.MorphAnimMesh.prototype.playAnimation = function(e, t) {
                    var i = this.geometry.animations[e];
                    i ? (this.setFrameRange(i.start, i.end), this.duration = (i.end - i.start) / t * 1e3, this.time = 0) : a.onwarning("animation[" + e + "] undefined")
                }, a.MorphAnimMesh.prototype.updateAnimation = function(e) {
                    var t = this.duration / this.length;
                    this.time += this.direction * e, this.mirroredLoop ? (this.time > this.duration || this.time < 0) && (this.direction *= -1, this.time > this.duration && (this.time = this.duration, this.directionBackwards = !0), this.time < 0 && (this.time = 0, this.directionBackwards = !1)) : (this.time = this.time % this.duration, this.time < 0 && (this.time += this.duration));
                    var i = this.startKeyframe + a.Math.clamp(Math.floor(this.time / t), 0, this.length - 1);
                    i !== this.currentKeyframe && (this.morphTargetInfluences[this.lastKeyframe] = 0, this.morphTargetInfluences[this.currentKeyframe] = 1, this.morphTargetInfluences[i] = 0, this.lastKeyframe = this.currentKeyframe, this.currentKeyframe = i);
                    var r = this.time % t / t;
                    this.directionBackwards && (r = 1 - r), this.morphTargetInfluences[this.currentKeyframe] = r, this.morphTargetInfluences[this.lastKeyframe] = 1 - r
                }, a.MorphAnimMesh.prototype.clone = function(e) {
                    return void 0 === e && (e = new a.MorphAnimMesh(this.geometry, this.material)), e.duration = this.duration, e.mirroredLoop = this.mirroredLoop, e.time = this.time, e.lastKeyframe = this.lastKeyframe, e.currentKeyframe = this.currentKeyframe, e.direction = this.direction, e.directionBackwards = this.directionBackwards, a.Mesh.prototype.clone.call(this, e), e
                }, a.LOD = function() {
                    a.Object3D.call(this), this.objects = []
                }, a.LOD.prototype = Object.create(a.Object3D.prototype), a.LOD.prototype.addLevel = function(e, t) {
                    void 0 === t && (t = 0), t = Math.abs(t);
                    for (var i = 0; i < this.objects.length && !(t < this.objects[i].distance); i++);
                    this.objects.splice(i, 0, {
                        distance: t,
                        object: e
                    }), this.add(e)
                }, a.LOD.prototype.getObjectForDistance = function(e) {
                    for (var t = 1, i = this.objects.length; t < i && !(e < this.objects[t].distance); t++);
                    return this.objects[t - 1].object
                }, a.LOD.prototype.update = function() {
                    var e = new a.Vector3,
                        t = new a.Vector3;
                    return function(i) {
                        if (this.objects.length > 1) {
                            e.setFromMatrixPosition(i.matrixWorld), t.setFromMatrixPosition(this.matrixWorld);
                            var r = e.distanceTo(t);
                            this.objects[0].object.visible = !0;
                            for (var a = 1, o = this.objects.length; a < o && r >= this.objects[a].distance; a++) this.objects[a - 1].object.visible = !1, this.objects[a].object.visible = !0;
                            for (; a < o; a++) this.objects[a].object.visible = !1
                        }
                    }
                }(), a.LOD.prototype.clone = function(e) {
                    void 0 === e && (e = new a.LOD), a.Object3D.prototype.clone.call(this, e);
                    for (var t = 0, i = this.objects.length; t < i; t++) {
                        var r = this.objects[t].object.clone();
                        r.visible = 0 === t, e.addLevel(r, this.objects[t].distance)
                    }
                    return e
                }, a.Sprite = function() {
                    var e = new a.Geometry2(3);
                    return e.vertices.set([-.5, -.5, 0, .5, -.5, 0, .5, .5, 0]),
                        function(t) {
                            a.Object3D.call(this), this.geometry = e, this.material = void 0 !== t ? t : new a.SpriteMaterial
                        }
                }(), a.Sprite.prototype = Object.create(a.Object3D.prototype), a.Sprite.prototype.updateMatrix = function() {
                    this.matrix.compose(this.position, this.quaternion, this.scale), this.matrixWorldNeedsUpdate = !0
                }, a.Sprite.prototype.clone = function(e) {
                    return void 0 === e && (e = new a.Sprite(this.material)), a.Object3D.prototype.clone.call(this, e), e
                }, a.Particle = a.Sprite, a.Scene = function() {
                    a.Object3D.call(this), this.fog = null, this.overrideMaterial = null, this.autoUpdate = !0, this.matrixAutoUpdate = !1, this.__lights = [], this.__objectsAdded = [], this.__objectsRemoved = []
                }, a.Scene.prototype = Object.create(a.Object3D.prototype), a.Scene.prototype.__addObject = function(e) {
                    if (e instanceof a.Light) - 1 === this.__lights.indexOf(e) && this.__lights.push(e), e.target && void 0 === e.target.parent && this.add(e.target);
                    else if (!(e instanceof a.Camera || e instanceof a.Bone)) {
                        this.__objectsAdded.push(e);
                        var t = this.__objectsRemoved.indexOf(e); - 1 !== t && this.__objectsRemoved.splice(t, 1)
                    }
                    this.dispatchEvent({
                        type: "objectAdded",
                        object: e
                    }), e.dispatchEvent({
                        type: "addedToScene",
                        scene: this
                    });
                    for (var i = 0; i < e.children.length; i++) this.__addObject(e.children[i])
                }, a.Scene.prototype.__removeObject = function(e) {
                    if (e instanceof a.Light) {
                        if (-1 !== (i = this.__lights.indexOf(e)) && this.__lights.splice(i, 1), e.shadowCascadeArray)
                            for (var t = 0; t < e.shadowCascadeArray.length; t++) this.__removeObject(e.shadowCascadeArray[t])
                    } else if (!(e instanceof a.Camera)) {
                        var i;
                        this.__objectsRemoved.push(e), -1 !== (i = this.__objectsAdded.indexOf(e)) && this.__objectsAdded.splice(i, 1)
                    }
                    this.dispatchEvent({
                        type: "objectRemoved",
                        object: e
                    }), e.dispatchEvent({
                        type: "removedFromScene",
                        scene: this
                    });
                    for (var r = 0; r < e.children.length; r++) this.__removeObject(e.children[r])
                }, a.Scene.prototype.clone = function(e) {
                    return void 0 === e && (e = new a.Scene), a.Object3D.prototype.clone.call(this, e), null !== this.fog && (e.fog = this.fog.clone()), null !== this.overrideMaterial && (e.overrideMaterial = this.overrideMaterial.clone()), e.autoUpdate = this.autoUpdate, e.matrixAutoUpdate = this.matrixAutoUpdate, e
                }, a.Fog = function(e, t, i) {
                    this.name = "", this.color = new a.Color(e), this.near = void 0 !== t ? t : 1, this.far = void 0 !== i ? i : 1e3
                }, a.Fog.prototype.clone = function() {
                    return new a.Fog(this.color.getHex(), this.near, this.far)
                }, a.FogExp2 = function(e, t) {
                    this.name = "", this.color = new a.Color(e), this.density = void 0 !== t ? t : 25e-5
                }, a.FogExp2.prototype.clone = function() {
                    return new a.FogExp2(this.color.getHex(), this.density)
                }, a.CanvasRenderer = function(e) {
                    console.log("THREE.CanvasRenderer", a.REVISION);
                    var t = a.Math.smoothstep;
                    e = e || {};
                    var i, o, n, s, l, h, c, u, f, p, d, m, g, v, y, x, _, M, w, S, b, A, T, C, E, L, P, R, D, V = this,
                        U = new a.Projector,
                        F = void 0 !== e.canvas ? e.canvas : document.createElement("canvas"),
                        N = F.width,
                        O = F.height,
                        z = Math.floor(N / 2),
                        I = Math.floor(O / 2),
                        B = F.getContext("2d", {
                            alpha: !0 === e.alpha
                        }),
                        k = new a.Color(0),
                        G = 0,
                        H = 1,
                        W = 0,
                        j = null,
                        X = null,
                        Y = null,
                        q = null,
                        K = null,
                        Q = null,
                        Z = 0,
                        J = (new a.RenderableVertex, new a.RenderableVertex, new a.Color),
                        $ = new a.Color,
                        ee = new a.Color,
                        te = new a.Color,
                        ie = new a.Color,
                        re = new a.Color,
                        ae = new a.Color,
                        oe = new a.Color,
                        ne = {},
                        se = new a.Box2,
                        le = new a.Box2,
                        he = new a.Box2,
                        ce = new a.Color,
                        ue = new a.Color,
                        fe = new a.Color,
                        pe = new a.Vector3,
                        de = new a.Vector3,
                        me = new a.Matrix3,
                        ge = 16;

                    function ve(e, t, i) {
                        for (var r = 0, o = n.length; r < o; r++) {
                            var s = n[r];
                            if (oe.copy(s.color), s instanceof a.DirectionalLight) {
                                var l = pe.setFromMatrixPosition(s.matrixWorld).normalize();
                                if ((h = t.dot(l)) <= 0) continue;
                                h *= s.intensity, i.add(oe.multiplyScalar(h))
                            } else if (s instanceof a.PointLight) {
                                var h;
                                l = pe.setFromMatrixPosition(s.matrixWorld);
                                if ((h = t.dot(pe.subVectors(l, e).normalize())) <= 0) continue;
                                if (0 == (h *= 0 == s.distance ? 1 : 1 - Math.min(e.distanceTo(l) / s.distance, 1))) continue;
                                h *= s.intensity, i.add(oe.multiplyScalar(h))
                            }
                        }
                    }

                    function ye(e, t, i) {
                        Le(i.opacity), Pe(i.blending);
                        var r = t.scale.x * z,
                            o = t.scale.y * I,
                            n = .5 * Math.sqrt(r * r + o * o);
                        if (he.min.set(e.x - n, e.y - n), he.max.set(e.x + n, e.y + n), i instanceof a.SpriteMaterial || i instanceof a.ParticleSystemMaterial) {
                            var s = i.map;
                            if (null !== s) {
                                !1 === s.hasEventListener("update", Se) && (void 0 !== s.image && s.image.width > 0 && be(s), s.addEventListener("update", Se));
                                var l = ne[s.id];
                                Fe(void 0 !== l ? l : "rgba( 0, 0, 0, 1 )");
                                var h = s.image,
                                    c = h.width * s.offset.x,
                                    u = h.height * s.offset.y,
                                    f = h.width * s.repeat.x,
                                    p = h.height * s.repeat.y,
                                    d = r / f,
                                    m = o / p;
                                B.save(), B.translate(e.x, e.y), 0 !== i.rotation && B.rotate(i.rotation), B.translate(-r / 2, -o / 2), B.scale(d, m), B.translate(-c, -u), B.fillRect(c, u, f, p), B.restore()
                            } else Fe(i.color.getStyle()), B.save(), B.translate(e.x, e.y), 0 !== i.rotation && B.rotate(i.rotation), B.scale(r, -o), B.fillRect(-.5, -.5, 1, 1), B.restore()
                        } else i instanceof a.SpriteCanvasMaterial && (Ue(i.color.getStyle()), Fe(i.color.getStyle()), B.save(), B.translate(e.x, e.y), 0 !== i.rotation && B.rotate(i.rotation), B.scale(r, o), i.program(B), B.restore())
                    }

                    function xe(e, t, i, r) {
                        if (Le(r.opacity), Pe(r.blending), B.beginPath(), B.moveTo(e.positionScreen.x, e.positionScreen.y), B.lineTo(t.positionScreen.x, t.positionScreen.y), r instanceof a.LineBasicMaterial) {
                            if (Re(r.linewidth), De(r.linecap), Ve(r.linejoin), r.vertexColors !== a.VertexColors) Ue(r.color.getStyle());
                            else {
                                var o = i.vertexColors[0].getStyle(),
                                    n = i.vertexColors[1].getStyle();
                                if (o === n) Ue(o);
                                else {
                                    try {
                                        var s = B.createLinearGradient(e.positionScreen.x, e.positionScreen.y, t.positionScreen.x, t.positionScreen.y);
                                        s.addColorStop(0, o), s.addColorStop(1, n)
                                    } catch (l) {
                                        s = o
                                    }
                                    Ue(s)
                                }
                            }
                            B.stroke(), he.expandByScalar(2 * r.linewidth)
                        } else r instanceof a.LineDashedMaterial && (Re(r.linewidth), De(r.linecap), Ve(r.linejoin), Ue(r.color.getStyle()), Ne(r.dashSize, r.gapSize), B.stroke(), he.expandByScalar(2 * r.linewidth), Ne(null, null))
                    }

                    function _e(e, i, r, o, n, l, h, c) {
                        var C, E, L, P, R, D;
                        V.info.render.vertices += 3, V.info.render.faces++, Le(c.opacity), Pe(c.blending), u = e.positionScreen.x, f = e.positionScreen.y, p = i.positionScreen.x, d = i.positionScreen.y, m = r.positionScreen.x, g = r.positionScreen.y, C = u, E = f, L = p, P = d, R = m, D = g, B.beginPath(), B.moveTo(C, E), B.lineTo(L, P), B.lineTo(R, D), B.closePath(), (c instanceof a.MeshLambertMaterial || c instanceof a.MeshPhongMaterial || c instanceof a.MeshPhysicalMaterial) && null === c.map ? (re.copy(c.color), ae.copy(c.emissive), c.vertexColors === a.FaceColors && re.multiply(h.color), !1 === c.wireframe && c.shading === a.SmoothShading && 3 === h.vertexNormalsLength ? ($.copy(ce), ee.copy(ce), te.copy(ce), ve(h.v1.positionWorld, h.vertexNormalsModel[0], $), ve(h.v2.positionWorld, h.vertexNormalsModel[1], ee), ve(h.v3.positionWorld, h.vertexNormalsModel[2], te), $.multiply(re).add(ae), ee.multiply(re).add(ae), te.multiply(re).add(ae), ie.addColors(ee, te).multiplyScalar(.5), x = Ce($, ee, te, ie), Te(u, f, p, d, m, g, 0, 0, 1, 0, 0, 1, x)) : (J.copy(ce), ve(h.centroidModel, h.normalModel, J), J.multiply(re).add(ae), !0 === c.wireframe ? Me(J, c.wireframeLinewidth, c.wireframeLinecap, c.wireframeLinejoin) : we(J))) : c instanceof a.MeshBasicMaterial || c instanceof a.MeshLambertMaterial || c instanceof a.MeshPhongMaterial ? null !== c.map ? c.map.mapping instanceof a.UVMapping && (_ = h.uvs[0], Ae(u, f, p, d, m, g, _[o].x, _[o].y, _[n].x, _[n].y, _[l].x, _[l].y, c.map)) : null !== c.envMap ? c.envMap.mapping instanceof a.SphericalReflectionMapping && (de.copy(h.vertexNormalsModel[o]).applyMatrix3(me), M = .5 * de.x + .5, w = .5 * de.y + .5, de.copy(h.vertexNormalsModel[n]).applyMatrix3(me), S = .5 * de.x + .5, b = .5 * de.y + .5, de.copy(h.vertexNormalsModel[l]).applyMatrix3(me), A = .5 * de.x + .5, T = .5 * de.y + .5, Ae(u, f, p, d, m, g, M, w, S, b, A, T, c.envMap)) : (J.copy(c.color), c.vertexColors === a.FaceColors && J.multiply(h.color), !0 === c.wireframe ? Me(J, c.wireframeLinewidth, c.wireframeLinecap, c.wireframeLinejoin) : we(J)) : c instanceof a.MeshDepthMaterial ? (v = s.near, y = s.far, $.r = $.g = $.b = 1 - t(e.positionScreen.z * e.positionScreen.w, v, y), ee.r = ee.g = ee.b = 1 - t(i.positionScreen.z * i.positionScreen.w, v, y), te.r = te.g = te.b = 1 - t(r.positionScreen.z * r.positionScreen.w, v, y), ie.addColors(ee, te).multiplyScalar(.5), x = Ce($, ee, te, ie), Te(u, f, p, d, m, g, 0, 0, 1, 0, 0, 1, x)) : c instanceof a.MeshNormalMaterial && (c.shading === a.FlatShading ? (de.copy(h.normalModel).applyMatrix3(me), J.setRGB(de.x, de.y, de.z).multiplyScalar(.5).addScalar(.5), !0 === c.wireframe ? Me(J, c.wireframeLinewidth, c.wireframeLinecap, c.wireframeLinejoin) : we(J)) : c.shading === a.SmoothShading && (de.copy(h.vertexNormalsModel[o]).applyMatrix3(me), $.setRGB(de.x, de.y, de.z).multiplyScalar(.5).addScalar(.5), de.copy(h.vertexNormalsModel[n]).applyMatrix3(me), ee.setRGB(de.x, de.y, de.z).multiplyScalar(.5).addScalar(.5), de.copy(h.vertexNormalsModel[l]).applyMatrix3(me), te.setRGB(de.x, de.y, de.z).multiplyScalar(.5).addScalar(.5), ie.addColors(ee, te).multiplyScalar(.5), x = Ce($, ee, te, ie), Te(u, f, p, d, m, g, 0, 0, 1, 0, 0, 1, x)))
                    }

                    function Me(e, t, i, r) {
                        Re(t), De(i), Ve(r), Ue(e.getStyle()), B.stroke(), he.expandByScalar(2 * t)
                    }

                    function we(e) {
                        Fe(e.getStyle()), B.fill()
                    }

                    function Se(e) {
                        be(e.target)
                    }

                    function be(e) {
                        var t = e.wrapS === a.RepeatWrapping,
                            i = e.wrapT === a.RepeatWrapping,
                            r = e.image,
                            o = document.createElement("canvas");
                        o.width = r.width, o.height = r.height;
                        var n = o.getContext("2d");
                        n.setTransform(1, 0, 0, -1, 0, r.height), n.drawImage(r, 0, 0), ne[e.id] = B.createPattern(o, !0 === t && !0 === i ? "repeat" : !0 === t && !1 === i ? "repeat-x" : !1 === t && !0 === i ? "repeat-y" : "no-repeat")
                    }

                    function Ae(e, t, i, r, o, n, s, l, h, c, u, f, p) {
                        if (!(p instanceof a.DataTexture)) {
                            !1 === p.hasEventListener("update", Se) && (void 0 !== p.image && p.image.width > 0 && be(p), p.addEventListener("update", Se));
                            var d = ne[p.id];
                            if (void 0 === d) return Fe("rgba(0,0,0,1)"), void B.fill();
                            Fe(d);
                            var m, g, v, y, x, _, M, w, S = p.offset.x / p.repeat.x,
                                b = p.offset.y / p.repeat.y,
                                A = p.image.width * p.repeat.x,
                                T = p.image.height * p.repeat.y;
                            h = (h + S) * A, c = (c + b) * T, u = (u + S) * A, f = (f + b) * T, i -= e, r -= t, o -= e, n -= t, 0 !== (M = (h -= s = (s + S) * A) * (f -= l = (l + b) * T) - (u -= s) * (c -= l)) && (x = e - (m = (f * i - c * o) * (w = 1 / M)) * s - (v = (h * o - u * i) * w) * l, _ = t - (g = (f * r - c * n) * w) * s - (y = (h * n - u * r) * w) * l, B.save(), B.transform(m, g, v, y, x, _), B.fill(), B.restore())
                        }
                    }

                    function Te(e, t, i, r, a, o, n, s, l, h, c, u, f) {
                        var p, d, m, g, v, y, x, _ = f.width - 1,
                            M = f.height - 1;
                        l *= _, h *= M, c *= _, u *= M, v = e - (p = ((u -= s *= M) * (i -= e) - (h -= s) * (a -= e)) * (x = 1 / ((l -= n *= _) * u - (c -= n) * h))) * n - (m = (l * a - c * i) * x) * s, y = t - (d = (u * (r -= t) - h * (o -= t)) * x) * n - (g = (l * o - c * r) * x) * s, B.save(), B.transform(p, d, m, g, v, y), B.clip(), B.drawImage(f, 0, 0), B.restore()
                    }

                    function Ce(e, t, i, r) {
                        return P[0] = 255 * e.r | 0, P[1] = 255 * e.g | 0, P[2] = 255 * e.b | 0, P[4] = 255 * t.r | 0, P[5] = 255 * t.g | 0, P[6] = 255 * t.b | 0, P[8] = 255 * i.r | 0, P[9] = 255 * i.g | 0, P[10] = 255 * i.b | 0, P[12] = 255 * r.r | 0, P[13] = 255 * r.g | 0, P[14] = 255 * r.b | 0, E.putImageData(L, 0, 0), D.drawImage(C, 0, 0), R
                    }

                    function Ee(e, t, i) {
                        var r, a = t.x - e.x,
                            o = t.y - e.y,
                            n = a * a + o * o;
                        0 !== n && (a *= r = i / Math.sqrt(n), o *= r, t.x += a, t.y += o, e.x -= a, e.y -= o)
                    }

                    function Le(e) {
                        H !== e && (B.globalAlpha = e, H = e)
                    }

                    function Pe(e) {
                        W !== e && (e === a.NormalBlending ? B.globalCompositeOperation = "source-over" : e === a.AdditiveBlending ? B.globalCompositeOperation = "lighter" : e === a.SubtractiveBlending && (B.globalCompositeOperation = "darker"), W = e)
                    }

                    function Re(e) {
                        Y !== e && (B.lineWidth = e, Y = e)
                    }

                    function De(e) {
                        q !== e && (B.lineCap = e, q = e)
                    }

                    function Ve(e) {
                        K !== e && (B.lineJoin = e, K = e)
                    }

                    function Ue(e) {
                        j !== e && (B.strokeStyle = e, j = e)
                    }

                    function Fe(e) {
                        X !== e && (B.fillStyle = e, X = e)
                    }

                    function Ne(e, t) {
                        Q === e && Z === t || (B.setLineDash([e, t]), Q = e, Z = t)
                    }(C = document.createElement("canvas")).width = C.height = 2, (E = C.getContext("2d")).fillStyle = "rgba(0,0,0,1)", E.fillRect(0, 0, 2, 2), L = E.getImageData(0, 0, 2, 2), P = L.data, (R = document.createElement("canvas")).width = R.height = ge, (D = R.getContext("2d")).translate(-ge / 2, -ge / 2), D.scale(ge, ge), ge--, void 0 === B.setLineDash && (void 0 !== B.mozDash ? B.setLineDash = function(e) {
                        B.mozDash = null !== e[0] ? e : null
                    } : B.setLineDash = function() {}), this.domElement = F, this.devicePixelRatio = void 0 !== e.devicePixelRatio ? e.devicePixelRatio : void 0 !== r.devicePixelRatio ? r.devicePixelRatio : 1, this.autoClear = !0, this.sortObjects = !0, this.sortElements = !0, this.info = {
                        render: {
                            vertices: 0,
                            faces: 0
                        }
                    }, this.supportsVertexTextures = function() {}, this.setFaceCulling = function() {}, this.setSize = function(e, t, i) {
                        N = e * this.devicePixelRatio, O = t * this.devicePixelRatio, z = Math.floor(N / 2), I = Math.floor(O / 2), F.width = N, F.height = O, 1 !== this.devicePixelRatio && !1 !== i && (F.style.width = e + "px", F.style.height = t + "px"), se.min.set(-z, -I), se.max.set(z, I), le.min.set(-z, -I), le.max.set(z, I), H = 1, W = 0, j = null, X = null, Y = null, q = null, K = null
                    }, this.setClearColor = function(e, t) {
                        k.set(e), G = void 0 !== t ? t : 1, le.min.set(-z, -I), le.max.set(z, I)
                    }, this.setClearColorHex = function(e, t) {
                        a.onwarning("DEPRECATED: .setClearColorHex() is being removed. Use .setClearColor() instead."), this.setClearColor(e, t)
                    }, this.getMaxAnisotropy = function() {
                        return 0
                    }, this.clear = function() {
                        B.setTransform(1, 0, 0, -1, z, I), !1 === le.empty() && (le.intersect(se), le.expandByScalar(2), G < 1 && B.clearRect(0 | le.min.x, 0 | le.min.y, le.max.x - le.min.x | 0, le.max.y - le.min.y | 0), G > 0 && (Pe(a.NormalBlending), Le(1), Fe("rgba(" + Math.floor(255 * k.r) + "," + Math.floor(255 * k.g) + "," + Math.floor(255 * k.b) + "," + G + ")"), B.fillRect(0 | le.min.x, 0 | le.min.y, le.max.x - le.min.x | 0, le.max.y - le.min.y | 0)), le.makeEmpty())
                    }, this.clearColor = function() {}, this.clearDepth = function() {}, this.clearStencil = function() {}, this.render = function(e, t) {
                        if (t instanceof a.Camera !== !1) {
                            !0 === this.autoClear && this.clear(), B.setTransform(1, 0, 0, -1, z, I), V.info.render.vertices = 0, V.info.render.faces = 0, i = U.projectScene(e, t, this.sortObjects, this.sortElements), o = i.elements, n = i.lights, s = t, me.getNormalMatrix(t.matrixWorldInverse),
                                function() {
                                    ce.setRGB(0, 0, 0), ue.setRGB(0, 0, 0), fe.setRGB(0, 0, 0);
                                    for (var e = 0, t = n.length; e < t; e++) {
                                        var i = n[e],
                                            r = i.color;
                                        i instanceof a.AmbientLight ? ce.add(r) : i instanceof a.DirectionalLight ? ue.add(r) : i instanceof a.PointLight && fe.add(r)
                                    }
                                }();
                            for (var r = 0, u = o.length; r < u; r++) {
                                var f = o[r],
                                    p = f.material;
                                if (void 0 !== p && !1 !== p.visible) {
                                    if (he.makeEmpty(), f instanceof a.RenderableSprite)(l = f).x *= z, l.y *= I, ye(l, f, p);
                                    else if (f instanceof a.RenderableLine) l = f.v1, h = f.v2, l.positionScreen.x *= z, l.positionScreen.y *= I, h.positionScreen.x *= z, h.positionScreen.y *= I, he.setFromPoints([l.positionScreen, h.positionScreen]), !0 === se.isIntersectionBox(he) && xe(l, h, f, p);
                                    else if (f instanceof a.RenderableFace) {
                                        if (l = f.v1, h = f.v2, c = f.v3, l.positionScreen.z < -1 || l.positionScreen.z > 1) continue;
                                        if (h.positionScreen.z < -1 || h.positionScreen.z > 1) continue;
                                        if (c.positionScreen.z < -1 || c.positionScreen.z > 1) continue;
                                        l.positionScreen.x *= z, l.positionScreen.y *= I, h.positionScreen.x *= z, h.positionScreen.y *= I, c.positionScreen.x *= z, c.positionScreen.y *= I, p.overdraw > 0 && (Ee(l.positionScreen, h.positionScreen, p.overdraw), Ee(h.positionScreen, c.positionScreen, p.overdraw), Ee(c.positionScreen, l.positionScreen, p.overdraw)), he.setFromPoints([l.positionScreen, h.positionScreen, c.positionScreen]), !0 === se.isIntersectionBox(he) && _e(l, h, c, 0, 1, 2, f, p)
                                    }
                                    le.union(he)
                                }
                            }
                            B.setTransform(1, 0, 0, 1, 0, 0)
                        } else a.onerror("THREE.CanvasRenderer.render: camera is not an instance of THREE.Camera.")
                    }
                }, a.ShaderChunk = {
                    common: ["#define PI 3.14159", "#define PI2 6.28318", "#define LOG2 1.442695", "#define ENCODING_Linear 3000", "#define ENCODING_sRGB 3001", "#define ENCODING_RGBE 3002", "#define ENCODING_RGBM7 3004", "#define ENCODING_RGBM16 3005", "#define SPECULAR_COEFF 0.18", "float square( float a ) { return a*a; }", "vec2  square( vec2 a )  { return vec2( a.x*a.x, a.y*a.y ); }", "vec3  square( vec3 a )  { return vec3( a.x*a.x, a.y*a.y, a.z*a.z ); }", "vec4  square( vec4 a )  { return vec4( a.x*a.x, a.y*a.y, a.z*a.z, a.w*a.w ); }", "float saturate( float a ) { return clamp( a, 0.0, 1.0 ); }", "vec2  saturate( vec2 a )  { return clamp( a, 0.0, 1.0 ); }", "vec3  saturate( vec3 a )  { return clamp( a, 0.0, 1.0 ); }", "vec4  saturate( vec4 a )  { return clamp( a, 0.0, 1.0 ); }", "float average( float a ) { return a; }", "float average( vec2 a )  { return ( a.x + a.y) * 0.5; }", "float average( vec3 a )  { return ( a.x + a.y + a.z) * 0.3333333333; }", "float average( vec4 a )  { return ( a.x + a.y + a.z + a.w) * 0.25; }", "float whiteCompliment( float a ) { return saturate( 1.0 - a ); }", "vec2  whiteCompliment( vec2 a )  { return saturate( vec2(1.0) - a ); }", "vec3  whiteCompliment( vec3 a )  { return saturate( vec3(1.0) - a ); }", "vec4  whiteCompliment( vec4 a )  { return saturate( vec4(1.0) - a ); }", "vec3 projectOnPlane( vec3 point, vec3 pointOnPlane, vec3 planeNormal) {", "float distance = dot( planeNormal, point-pointOnPlane );", "return point - distance * planeNormal;", "}", "float sideOfPlane( vec3 point, vec3 pointOnPlane, vec3 planeNormal ) {", "return sign( dot( point - pointOnPlane, planeNormal ) );", "}", "vec2 applyUVOffsetRepeat( vec2 uv, vec4 offsetRepeat ) {", "return uv * offsetRepeat.zw + offsetRepeat.xy;", "}", "vec3 linePlaneIntersect( vec3 pointOnLine, vec3 lineDirection, vec3 pointOnPlane, vec3 planeNormal ) {", "return pointOnLine + lineDirection * ( dot( planeNormal, pointOnPlane - pointOnLine ) / dot( planeNormal, lineDirection ) );", "}", "vec4 applyGainBrightness( vec4 texel, vec4 gainBrightnessCoeff ) {", "if( gainBrightnessCoeff.w < 0.0 ) {", "texel.xyz = whiteCompliment( texel.xyz );", "}", "texel.xyz = ( texel.xyz - vec3( gainBrightnessCoeff.x ) ) * gainBrightnessCoeff.y + vec3( gainBrightnessCoeff.z + gainBrightnessCoeff.x );", "return texel;", "}", "vec4 texelDecode( vec4 texel, int encoding ) {", "if( encoding == 3001 ) {", "texel = vec4( pow( max( texel.xyz, vec3( 0.0 ) ), vec3( 2.2 ) ), texel.w );", "}", "else if( encoding == 3002 ) {", "texel = vec4( texel.xyz * pow( 2.0, texel.w*256.0 - 128.0 ), 1.0 );", "}", "else if( encoding == 3004 ) {", "texel = vec4( texel.xyz * texel.w * 7.0, 1.0 );", "}", "else if( encoding == 3005 ) {", "texel = vec4( texel.xyz * texel.w * 16.0, 1.0 );", "}", "return texel;", "}"].join("\n"),
                    fog_pars_fragment: ["#ifdef USE_FOG", "uniform vec3 fogColor;", "#ifdef FOG_EXP2", "uniform float fogDensity;", "#else", "uniform float fogNear;", "uniform float fogFar;", "#endif", "#endif"].join("\n"),
                    fog_fragment: ["#ifdef USE_FOG", "float depth = gl_FragCoord.z / gl_FragCoord.w;", "#ifdef FOG_EXP2", "float fogFactor = exp2( - square( fogDensity ) * square( depth ) * LOG2 );", "fogFactor = 1.0 - saturate( fogFactor );", "#else", "float fogFactor = smoothstep( fogNear, fogFar, depth );", "#endif", "gl_FragColor = mix( gl_FragColor, vec4( fogColor, gl_FragColor.w ), fogFactor );", "#endif"].join("\n"),
                    diffuseenvmap_pars_fragment: ["#if defined( USE_DIFFUSEENVMAP )", "uniform samplerCube diffuseEnvMap;", "uniform int diffuseEnvEncoding;", "#endif"].join("\n"),
                    envmap_pars_fragment: ["#if defined( USE_DIFFUSEENVMAP ) || defined( USE_ENVMAP )", "uniform float flipEnvMap;", "#endif", "#ifdef USE_ENVMAP", "uniform float reflectivity;", "uniform samplerCube envMap;", "uniform int combine;", "uniform int envEncoding;", "#endif"].join("\n"),
                    envmap_fragment: ["#if defined( USE_ENVMAP ) && ! defined( PHYSICAL )", "vec3 worldNormal = vec3( normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz ) );", "vec3 worldView = -vec3( normalize( ( vec4( viewDirection, 0.0 ) * viewMatrix ).xyz ) );", "vec3 reflectVec = reflect( worldView, worldNormal );", "#ifdef DOUBLE_SIDED", "float flipNormal = ( -1.0 + 2.0 * float( gl_FrontFacing ) );", "vec4 cubeColor = textureCube( envMap, flipNormal * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );", "#else", "vec4 cubeColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );", "#endif", "cubeColor = texelDecode( cubeColor, envEncoding );", "float fresnelReflectivity = saturate( reflectivity );", "if ( combine == 1 ) {", "gl_FragColor.xyz = mix( gl_FragColor.xyz, cubeColor.xyz, fresnelReflectivity );", "} else if ( combine == 2 ) {", "gl_FragColor.xyz += cubeColor.xyz * fresnelReflectivity;", "} else {", "gl_FragColor.xyz = mix( gl_FragColor.xyz, gl_FragColor.xyz * cubeColor.xyz, fresnelReflectivity );", "}", "#endif"].join("\n"),
                    worldpos_vertex: ["#if defined( USE_ENVMAP ) || defined( PHONG ) || defined( LAMBERT ) || defined ( USE_SHADOWMAP )", "#ifdef USE_SKINNING", "vec4 worldPosition = modelMatrix * skinned;", "#endif", "#if defined( USE_MORPHTARGETS ) && ! defined( USE_SKINNING )", "vec4 worldPosition = modelMatrix * vec4( morphed, 1.0 );", "#endif", "#if ! defined( USE_MORPHTARGETS ) && ! defined( USE_SKINNING )", "vec4 worldPosition = modelMatrix * vec4( position, 1.0 );", "#endif", "#endif"].join("\n"),
                    map_particle_pars_fragment: ["#ifdef USE_MAP", "uniform sampler2D map;", "#endif"].join("\n"),
                    map_particle_fragment: ["#ifdef USE_MAP", "gl_FragColor = gl_FragColor * texelDecode( texture2D( map, vec2( gl_PointCoord.x, 1.0 - gl_PointCoord.y ) ), ENCODING_sRGB );", "#endif"].join("\n"),
                    map_pars_vertex: ["#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_REFLECTIVITYMAP ) || defined( USE_ROUGHNESSMAP ) || defined( USE_METALLICMAP ) || defined( USE_OPACITYMAP ) || defined( USE_FALLOFFMAP ) || defined( USE_TRANSLUCENCYMAP ) || defined( USE_ANISOTROPYMAP ) || defined( USE_ANISOTROPYROTATIONMAP )", "varying vec2 vUv;", "#endif"].join("\n"),
                    map_pars_fragment: ["#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_REFLECTIVITYMAP ) || defined( USE_ROUGHNESSMAP ) || defined( USE_METALLICMAP ) || defined( USE_OPACITYMAP ) || defined( USE_FALLOFFMAP ) || defined( USE_TRANSLUCENCYMAP ) || defined( USE_ANISOTROPYMAP ) || defined( USE_ANISOTROPYROTATIONMAP )", "varying vec2 vUv;", "uniform vec4 offsetRepeat;", "uniform vec4 gainBrightness;", "#endif", "#ifdef USE_MAP", "uniform sampler2D map;", "#endif"].join("\n"),
                    map_vertex: ["#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_REFLECTIVITYMAP ) || defined( USE_ROUGHNESSMAP ) || defined( USE_METALLICMAP ) || defined( USE_OPACITYMAP ) || defined( USE_FALLOFFMAP ) || defined( USE_TRANSLUCENCYMAP ) || defined( USE_ANISOTROPYMAP ) || defined( USE_ANISOTROPYROTATIONMAP )", "vUv = uv;", "#endif"].join("\n"),
                    map_fragment: ["#if defined( USE_MAP ) || defined( USE_FALLOFFMAP )", "vec2 vUvLocal = applyUVOffsetRepeat( vUv, offsetRepeat );", "#endif", "#ifdef USE_MAP", "vec4 texelColor = clamp( applyGainBrightness( texelDecode( texture2D( map, vUvLocal ), ENCODING_sRGB ), gainBrightness ), vec4(0.0), vec4(1.0) );", "gl_FragColor = gl_FragColor * texelColor;", "#if defined( PHYSICAL ) || defined( PHONG )", "diffuseColor *= texelColor.xyz;", "#endif", "#endif"].join("\n"),
                    falloffmap_pars_fragment: ["#ifdef USE_FALLOFFMAP", "uniform sampler2D falloffMap;", "#endif"].join("\n"),
                    opacitymap_pars_fragment: ["#ifdef USE_OPACITYMAP", "uniform sampler2D opacityMap;", "uniform vec4 opacityOffsetRepeat;", "uniform vec4 opacityGainBrightness;", "#endif"].join("\n"),
                    opacitymap_fragment: ["#ifdef USE_OPACITYMAP", "vec2 vOpacityUv = applyUVOffsetRepeat( vUv, opacityOffsetRepeat );", "vec4 texelOpacity = applyGainBrightness( texture2D( opacityMap, vOpacityUv ), opacityGainBrightness );", "gl_FragColor.w = clamp( gl_FragColor.w * texelOpacity.r, 0.0, 1.0 );", "#endif"].join("\n"),
                    translucencymap_pars_fragment: ["#ifdef USE_TRANSLUCENCYMAP", "uniform sampler2D translucencyMap;", "uniform vec4 translucencyOffsetRepeat;", "uniform vec4 translucencyGainBrightness;", "#endif"].join("\n"),
                    translucencymap_fragment: ["#ifdef USE_TRANSLUCENCYMAP", "vec2 vTranslucencyUv = applyUVOffsetRepeat( vUv, translucencyOffsetRepeat );", "vec4 texelTranslucency = applyGainBrightness( texture2D( translucencyMap, vTranslucencyUv ), translucencyGainBrightness );", "translucencyColor.xyz = clamp( translucencyColor.xyz * texelTranslucency.xyz, vec3( 0.0 ), vec3( 1.0 ) );", "#endif"].join("\n"),
                    lightmap_pars_fragment: ["#if defined( USE_LIGHTMAP ) || defined( USE_EMISSIVEMAP )", "varying vec2 vUv2;", "#endif", "#if defined( USE_LIGHTMAP )", "uniform sampler2D lightMap;", "#endif", "#if defined( USE_EMISSIVEMAP )", "uniform sampler2D emissiveMap;", "#endif"].join("\n"),
                    lightmap_pars_vertex: ["#if defined( USE_LIGHTMAP ) || defined( USE_EMISSIVEMAP )", "varying vec2 vUv2;", "#endif"].join("\n"),
                    lightmap_fragment: ["#ifdef USE_LIGHTMAP", "#endif"].join("\n"),
                    lightmap_vertex: ["#if defined( USE_LIGHTMAP ) || defined( USE_EMISSIVEMAP )", "vUv2 = uv2;", "#endif"].join("\n"),
                    bumpmap_pars_fragment: ["#ifdef USE_BUMPMAP", "uniform sampler2D bumpMap;", "uniform vec4 bumpOffsetRepeat;", "uniform float bumpScale;", "vec2 dHdxy_fwd() {", "#ifdef GL_OES_standard_derivatives", "vec2 vBumpUv = applyUVOffsetRepeat( vUv, bumpOffsetRepeat );", "vec2 dSTdx = dFdx( vBumpUv );", "vec2 dSTdy = dFdy( vBumpUv );", "float Hll = bumpScale * texture2D( bumpMap, vBumpUv ).x;", "float dBx = bumpScale * texture2D( bumpMap, vBumpUv + dSTdx ).x - Hll;", "float dBy = bumpScale * texture2D( bumpMap, vBumpUv + dSTdy ).x - Hll;", "return vec2( dBx, dBy );", "#else", "return vec2( 0.0, 0.0 );", "#endif", "}", "vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy ) {", "#ifdef GL_OES_standard_derivatives", "vec3 vSigmaX = dFdx( surf_pos );", "vec3 vSigmaY = dFdy( surf_pos );", "vec3 vN = surf_norm;", "vec3 R1 = cross( vSigmaY, vN );", "vec3 R2 = cross( vN, vSigmaX );", "float fDet = dot( vSigmaX, R1 );", "vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );", "return normalize( abs( fDet ) * surf_norm - vGrad );", "#else", "return surf_norm;", "#endif", "}", "#endif"].join("\n"),
                    lightattenuation_func_fragment: ["float calcLightAttenuation( float lightDistance, float cutoffDistance, float decayExponent ) {", "if ( decayExponent > 0.0 && cutoffDistance > 0.0 ) {", "return pow( saturate( -lightDistance / cutoffDistance + 1.0 ), decayExponent );", "}", "else if ( decayExponent < 0.0 ) {", "float numerator = 1.0;", "if( cutoffDistance > 0.0 ) {", "numerator = ( saturate( 1.0 - pow( lightDistance / cutoffDistance, 4.0 ) ) );", "numerator *= numerator;", "} ", "return numerator / ( ( lightDistance * lightDistance ) + 1.0 );", "}", "else {", "return 1.0;", "}", "}"].join("\n"),
                    normalmap_pars_fragment: ["#ifdef USE_NORMALMAP", "uniform sampler2D normalMap;", "uniform vec4 normalOffsetRepeat;", "uniform vec2 normalScale;", "vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm ) {", "#ifdef GL_OES_standard_derivatives", "vec2 vNormalUv = applyUVOffsetRepeat( vUv, normalOffsetRepeat );", "vec3 q0 = dFdx( eye_pos.xyz );", "vec3 q1 = dFdy( eye_pos.xyz );", "vec2 st0 = dFdx( vNormalUv.st );", "vec2 st1 = dFdy( vNormalUv.st );", "vec3 S = normalize(  q0 * st1.t - q1 * st0.t );", "vec3 T = normalize( -q0 * st1.s + q1 * st0.s );", "vec3 N = normalize( surf_norm );", "vec3 mapN = texture2D( normalMap, vNormalUv ).xyz * 2.0 - 1.0;", "mapN.xy = normalScale * mapN.xy;", "mat3 tsn = mat3( S, T, N );", "return normalize( tsn * mapN );", "#else", "return surf_norm;", "#endif", "}", "#endif"].join("\n"),
                    anisotropymap_pars_fragment: ["#ifdef USE_ANISOTROPYMAP", "uniform sampler2D anisotropyMap;", "uniform vec4 anisotropyGainBrightness;", "uniform vec4 anisotropyOffsetRepeat;", "#endif"].join("\n"),
                    anisotropymap_fragment: ["#ifdef USE_ANISOTROPYMAP", "vec2 vAnisotropyUv = applyUVOffsetRepeat( vUv, anisotropyOffsetRepeat );", "#else", "#ifdef ANISOTROPY", "#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_REFLECTIVITYMAP ) || defined( USE_ROUGHNESSMAP ) || defined( USE_METALLICMAP ) || defined( USE_OPACITYMAP ) || defined( USE_FALLOFFMAP ) || defined( USE_TRANSLUCENCYMAP ) || defined( USE_ANISOTROPYMAP ) || defined( USE_ANISOTROPYROTATIONMAP )", "vec2 vAnisotropyUv = vUv;", "#else", "vec2 vAnisotropyUv = vec2( 0, 0 );", "#endif", "#endif", "#endif", "float anisotropyStrength = anisotropy;", "#ifdef USE_ANISOTROPYMAP", "vec4 texelAnisotropy = applyGainBrightness( texture2D( anisotropyMap, vAnisotropyUv ), anisotropyGainBrightness );", "anisotropyStrength = clamp( anisotropyStrength + texelAnisotropy.r, -1.0, 1.0 );", "#endif"].join("\n"),
                    anisotropyrotationmap_pars_fragment: ["#ifdef USE_ANISOTROPYROTATIONMAP", "uniform sampler2D anisotropyRotationMap;", "uniform vec4 anisotropyRotationGainBrightness;", "uniform vec4 anisotropyRotationOffsetRepeat;", "#endif"].join("\n"),
                    anisotropyrotationmap_fragment: ["float anisotropyRotationStrength = anisotropyRotation;", "#ifdef USE_ANISOTROPYROTATIONMAP", "vec2 vAnisotropyRotationUv = applyUVOffsetRepeat( vUv, anisotropyRotationOffsetRepeat );", "vec4 texelAnisotropyRotation = applyGainBrightness( texture2D( anisotropyRotationMap, vAnisotropyRotationUv ), anisotropyRotationGainBrightness );", "anisotropyRotationStrength += texelAnisotropyRotation.r;", "#endif"].join("\n"),
                    metallicmap_pars_fragment: ["#ifdef USE_METALLICMAP", "uniform sampler2D metallicMap;", "uniform vec4 metallicGainBrightness;", "uniform vec4 metallicOffsetRepeat;", "#endif"].join("\n"),
                    metallicmap_fragment: ["float metallicStrength = metallic;", "#ifdef USE_METALLICMAP", "vec2 vMetallicUv = applyUVOffsetRepeat( vUv, metallicOffsetRepeat );", "vec4 texelMetallic = applyGainBrightness( texture2D( metallicMap, vMetallicUv ), metallicGainBrightness );", "metallicStrength = clamp( metallicStrength * texelMetallic.r, 0.0, 1.0 );", "#endif"].join("\n"),
                    roughnessmap_pars_fragment: ["#ifdef USE_ROUGHNESSMAP", "uniform sampler2D roughnessMap;", "uniform vec4 roughnessOffsetRepeat;", "uniform vec4 roughnessGainBrightness;", "#endif"].join("\n"),
                    roughnessmap_fragment: ["float roughnessStrength = roughness;", "#ifdef USE_ROUGHNESSMAP", "vec2 vRoughnessUv = applyUVOffsetRepeat( vUv, roughnessOffsetRepeat );", "vec4 texelRoughness = applyGainBrightness( texture2D( roughnessMap, vRoughnessUv ), roughnessGainBrightness );", "roughnessStrength = clamp( roughnessStrength * texelRoughness.r, 0.0, 1.0 );", "#endif"].join("\n"),
                    specularmap_pars_fragment: ["#ifdef USE_SPECULARMAP", "uniform sampler2D specularMap;", "uniform vec4 specularGainBrightness;", "uniform vec4 specularOffsetRepeat;", "#endif"].join("\n"),
                    specularmap_fragment: ["#ifdef PHYSICAL", "vec3 specularColor = specular;", "#else", "float specularStrength = 1.0;", "#endif", "#ifdef USE_SPECULARMAP", "vec2 vSpecularUv = applyUVOffsetRepeat( vUv, specularOffsetRepeat );", "vec4 texelSpecular = applyGainBrightness( texelDecode( texture2D( specularMap, vSpecularUv ), ENCODING_sRGB ), specularGainBrightness );", "#ifdef PHYSICAL", "specularColor.rgb = clamp( specularColor.rgb * texelSpecular.rgb, vec3( 0.0 ), vec3( 1.0 ) );", "#else", "specularStrength = clamp( specularStrength * texelSpecular.r, 0.0, 1.0 );", "#endif", "#endif"].join("\n"),
                    lights_lambert_pars_vertex: ["uniform vec3 ambient;", "uniform vec3 diffuse;", "uniform vec3 emissive;", "uniform vec3 ambientLightColor;", "#if MAX_DIR_LIGHTS > 0", "uniform vec3 directionalLightColor[ MAX_DIR_LIGHTS ];", "uniform vec3 directionalLightDirection[ MAX_DIR_LIGHTS ];", "#endif", "#if MAX_HEMI_LIGHTS > 0", "uniform vec3 hemisphereLightSkyColor[ MAX_HEMI_LIGHTS ];", "uniform vec3 hemisphereLightGroundColor[ MAX_HEMI_LIGHTS ];", "uniform vec3 hemisphereLightDirection[ MAX_HEMI_LIGHTS ];", "#endif", "#if MAX_POINT_LIGHTS > 0", "uniform vec3 pointLightColor[ MAX_POINT_LIGHTS ];", "uniform vec3 pointLightPosition[ MAX_POINT_LIGHTS ];", "uniform float pointLightDistance[ MAX_POINT_LIGHTS ];", "uniform float pointLightDecayExponent[ MAX_POINT_LIGHTS ];", "#endif", "#if MAX_SPOT_LIGHTS > 0", "uniform vec3 spotLightColor[ MAX_SPOT_LIGHTS ];", "uniform vec3 spotLightPosition[ MAX_SPOT_LIGHTS ];", "uniform vec3 spotLightDirection[ MAX_SPOT_LIGHTS ];", "uniform float spotLightDistance[ MAX_SPOT_LIGHTS ];", "uniform float spotLightAngleCos[ MAX_SPOT_LIGHTS ];", "uniform float spotLightExponent[ MAX_SPOT_LIGHTS ];", "uniform float spotLightDecayExponent[ MAX_SPOT_LIGHTS ];", "#endif", "#if MAX_AREA_LIGHTS > 0", "uniform vec3 areaLightColor[ MAX_AREA_LIGHTS ];", "uniform vec3 areaLightPosition[ MAX_AREA_LIGHTS ];", "uniform vec3 areaLightWidth[ MAX_AREA_LIGHTS ];", "uniform vec3 areaLightHeight[ MAX_AREA_LIGHTS ];", "uniform float areaLightDistance[ MAX_AREA_LIGHTS ];", "uniform float areaLightDecayExponent[ MAX_AREA_LIGHTS ];", "#endif", "#ifdef WRAP_AROUND", "uniform vec3 wrapRGB;", "#endif"].join("\n"),
                    lights_lambert_vertex: ["vLightFront = vec3( 0.0 );", "#ifdef DOUBLE_SIDED", "vLightBack = vec3( 0.0 );", "#endif", "transformedNormal = normalize( transformedNormal );", "#if MAX_DIR_LIGHTS > 0", "for( int i = 0; i < MAX_DIR_LIGHTS; i ++ ) {", "vec4 lDirection = viewMatrix * vec4( directionalLightDirection[ i ], 0.0 );", "vec3 dirVector = normalize( lDirection.xyz );", "float dotProduct = dot( transformedNormal, dirVector );", "vec3 directionalLightWeighting = vec3( max( dotProduct, 0.0 ) );", "#ifdef DOUBLE_SIDED", "vec3 directionalLightWeightingBack = vec3( max( -dotProduct, 0.0 ) );", "#ifdef WRAP_AROUND", "vec3 directionalLightWeightingHalfBack = vec3( max( -0.5 * dotProduct + 0.5, 0.0 ) );", "#endif", "#endif", "#ifdef WRAP_AROUND", "vec3 directionalLightWeightingHalf = vec3( max( 0.5 * dotProduct + 0.5, 0.0 ) );", "directionalLightWeighting = mix( directionalLightWeighting, directionalLightWeightingHalf, wrapRGB );", "#ifdef DOUBLE_SIDED", "directionalLightWeightingBack = mix( directionalLightWeightingBack, directionalLightWeightingHalfBack, wrapRGB );", "#endif", "#endif", "vLightFront += directionalLightColor[ i ] * directionalLightWeighting;", "#ifdef DOUBLE_SIDED", "vLightBack += directionalLightColor[ i ] * directionalLightWeightingBack;", "#endif", "}", "#endif", "#if MAX_POINT_LIGHTS > 0", "for( int i = 0; i < MAX_POINT_LIGHTS; i ++ ) {", "vec4 lPosition = viewMatrix * vec4( pointLightPosition[ i ], 1.0 );", "vec3 lVector = lPosition.xyz - mvPosition.xyz;", "float distanceAttenuation = calcLightAttenuation( length( lVector ), pointLightDistance[ i ], pointLightDecayExponent[i] );", "lVector = normalize( lVector );", "float dotProduct = dot( transformedNormal, lVector );", "vec3 pointLightWeighting = vec3( max( dotProduct, 0.0 ) );", "#ifdef DOUBLE_SIDED", "vec3 pointLightWeightingBack = vec3( max( -dotProduct, 0.0 ) );", "#ifdef WRAP_AROUND", "vec3 pointLightWeightingHalfBack = vec3( max( -0.5 * dotProduct + 0.5, 0.0 ) );", "#endif", "#endif", "#ifdef WRAP_AROUND", "vec3 pointLightWeightingHalf = vec3( max( 0.5 * dotProduct + 0.5, 0.0 ) );", "pointLightWeighting = mix( pointLightWeighting, pointLightWeightingHalf, wrapRGB );", "#ifdef DOUBLE_SIDED", "pointLightWeightingBack = mix( pointLightWeightingBack, pointLightWeightingHalfBack, wrapRGB );", "#endif", "#endif", "vLightFront += pointLightColor[ i ] * pointLightWeighting * distanceAttenuation;", "#ifdef DOUBLE_SIDED", "vLightBack += pointLightColor[ i ] * pointLightWeightingBack * distanceAttenuation;", "#endif", "}", "#endif", "#if MAX_SPOT_LIGHTS > 0", "for( int i = 0; i < MAX_SPOT_LIGHTS; i ++ ) {", "vec4 lPosition = viewMatrix * vec4( spotLightPosition[ i ], 1.0 );", "vec3 lVector = lPosition.xyz - mvPosition.xyz;", "float distanceAttenuation = calcLightAttenuation( length( lVector ), spotLightDistance[ i ], spotLightDecayExponent[i] );", "float spotEffect = dot( spotLightDirection[ i ], normalize( spotLightPosition[ i ] - worldPosition.xyz ) );", "if ( spotEffect > spotLightAngleCos[ i ] ) {", "spotEffect = pow( max( spotEffect, 0.0 ), spotLightExponent[ i ] );", "lVector = normalize( lVector );", "float dotProduct = dot( transformedNormal, lVector );", "vec3 spotLightWeighting = vec3( max( dotProduct, 0.0 ) );", "#ifdef DOUBLE_SIDED", "vec3 spotLightWeightingBack = vec3( max( -dotProduct, 0.0 ) );", "#ifdef WRAP_AROUND", "vec3 spotLightWeightingHalfBack = vec3( max( -0.5 * dotProduct + 0.5, 0.0 ) );", "#endif", "#endif", "#ifdef WRAP_AROUND", "vec3 spotLightWeightingHalf = vec3( max( 0.5 * dotProduct + 0.5, 0.0 ) );", "spotLightWeighting = mix( spotLightWeighting, spotLightWeightingHalf, wrapRGB );", "#ifdef DOUBLE_SIDED", "spotLightWeightingBack = mix( spotLightWeightingBack, spotLightWeightingHalfBack, wrapRGB );", "#endif", "#endif", "vLightFront += spotLightColor[ i ] * spotLightWeighting * distanceAttenuation * spotEffect;", "#ifdef DOUBLE_SIDED", "vLightBack += spotLightColor[ i ] * spotLightWeightingBack * distanceAttenuation * spotEffect;", "#endif", "}", "}", "#endif", "#if MAX_HEMI_LIGHTS > 0", "for( int i = 0; i < MAX_HEMI_LIGHTS; i ++ ) {", "vec4 lDirection = viewMatrix * vec4( hemisphereLightDirection[ i ], 0.0 );", "vec3 lVector = normalize( lDirection.xyz );", "float dotProduct = dot( transformedNormal, lVector );", "float hemiDiffuseWeight = 0.5 * dotProduct + 0.5;", "float hemiDiffuseWeightBack = -0.5 * dotProduct + 0.5;", "vLightFront += mix( hemisphereLightGroundColor[ i ], hemisphereLightSkyColor[ i ], hemiDiffuseWeight );", "#ifdef DOUBLE_SIDED", "vLightBack += mix( hemisphereLightGroundColor[ i ], hemisphereLightSkyColor[ i ], hemiDiffuseWeightBack );", "#endif", "}", "#endif", "vLightFront = ( vLightFront + ambientLightColor + ambient) * diffuse + emissive;", "#ifdef DOUBLE_SIDED", "vLightBack = ( vLightFront + ambientLightColor + ambient) * diffuse + emissive;", "#endif"].join("\n"),
                    lights_physical_pars_vertex: ["#if MAX_SPOT_LIGHTS > 0 || MAX_AREA_LIGHTS > 0 || defined( USE_BUMPMAP ) || defined( USE_ENVMAP )", "varying vec3 vWorldPosition;", "#endif"].join("\n"),
                    lights_physical_vertex: ["#if MAX_SPOT_LIGHTS > 0 || MAX_AREA_LIGHTS > 0 || defined( USE_BUMPMAP ) || defined( USE_ENVMAP )", "vWorldPosition = worldPosition.xyz;", "#endif", "#ifdef USE_SKINNING", "vNormal = normalize( normalMatrix * skinnedNormal.xyz );", "vec4 skinnedTangent = skinMatrix * vec4( tangent.xyz, 0.0 );", "vTangent = normalize( normalMatrix * skinnedTangent.xyz );", "#else", "vNormal = normalize( normalMatrix * normal );", "vTangent = normalize( normalMatrix * tangent.xyz );", "#endif", "vBinormal = normalize( cross( vNormal, vTangent ) * tangent.w );"].join("\n"),
                    lights_physical_pars_fragment: ["uniform vec3 ambientLightColor;", "#if MAX_DIR_LIGHTS > 0", "uniform vec3 directionalLightColor[ MAX_DIR_LIGHTS ];", "uniform vec3 directionalLightDirection[ MAX_DIR_LIGHTS ];", "#endif", "#if MAX_HEMI_LIGHTS > 0", "uniform vec3 hemisphereLightSkyColor[ MAX_HEMI_LIGHTS ];", "uniform vec3 hemisphereLightGroundColor[ MAX_HEMI_LIGHTS ];", "uniform vec3 hemisphereLightDirection[ MAX_HEMI_LIGHTS ];", "#endif", "#if MAX_POINT_LIGHTS > 0", "uniform vec3 pointLightColor[ MAX_POINT_LIGHTS ];", "uniform vec3 pointLightPosition[ MAX_POINT_LIGHTS ];", "uniform float pointLightDistance[ MAX_POINT_LIGHTS ];", "uniform float pointLightDecayExponent[ MAX_POINT_LIGHTS ];", "#endif", "#if MAX_SPOT_LIGHTS > 0", "uniform vec3 spotLightColor[ MAX_SPOT_LIGHTS ];", "uniform vec3 spotLightPosition[ MAX_SPOT_LIGHTS ];", "uniform vec3 spotLightDirection[ MAX_SPOT_LIGHTS ];", "uniform float spotLightAngleCos[ MAX_SPOT_LIGHTS ];", "uniform float spotLightExponent[ MAX_SPOT_LIGHTS ];", "uniform float spotLightDistance[ MAX_SPOT_LIGHTS ];", "uniform float spotLightDecayExponent[ MAX_SPOT_LIGHTS ];", "#endif", "#if MAX_AREA_LIGHTS > 0", "uniform vec3 areaLightColor[ MAX_AREA_LIGHTS ];", "uniform vec3 areaLightPosition[ MAX_AREA_LIGHTS ];", "uniform vec3 areaLightWidth[ MAX_AREA_LIGHTS ];", "uniform vec3 areaLightHeight[ MAX_AREA_LIGHTS ];", "uniform float areaLightDistance[ MAX_AREA_LIGHTS ];", "uniform float areaLightDecayExponent[ MAX_AREA_LIGHTS ];", "#endif", "#if MAX_SPOT_LIGHTS > 0 || MAX_AREA_LIGHTS > 0 || defined( USE_BUMPMAP )", "varying vec3 vWorldPosition;", "#endif", "#ifdef WRAP_AROUND", "uniform vec3 wrapRGB;", "#endif", "varying vec3 vViewPosition;", "varying vec3 vTangent;", "varying vec3 vBinormal;", "varying vec3 vNormal;", "vec3 Fresnel_Schlick_SpecularBlendToWhite(vec3 specularColor, float hDotV) {", "float Fc = pow(max( 1.0 - hDotV, 0.0 ), 5.0);", "return saturate( 50.0 * average( specularColor ) ) * Fc + (1.0 - Fc) * specularColor;", "}", "vec3 Fresnel_Schlick_SpecularBlendToWhiteRoughness(vec3 specularColor, float hDotV, float roughness) {", "float Fc = pow(max( 1.0 - hDotV, 0.0 ), 5.0) / ( 1.0 + 3.0 * roughness );", "return mix( specularColor, vec3( saturate( 50.0 * average( specularColor ) ) ), Fc );", "}", "float Distribution_GGX( float roughness2, float nDotH ) {", "float denom = nDotH * nDotH * (roughness2 - 1.0) + 1.0;", "return roughness2 / ( PI * square( denom ) + 0.0000001 );", "}", "float Distribution_GGXAniso( vec2 anisotropicM, vec2 xyDotH, float nDotH ) {", "float anisoTerm = ( xyDotH.x * xyDotH.x / ( anisotropicM.x * anisotropicM.x ) + xyDotH.y * xyDotH.y / ( anisotropicM.y * anisotropicM.y ) + nDotH * nDotH );", "return 1.0 / ( PI * anisotropicM.x * anisotropicM.y * anisoTerm * anisoTerm + 0.0000001 );", "}", "float Visibility_Kelemen( float vDotH ) {", "return 1.0 / ( 4.0 * vDotH * vDotH + 0.0000001 );", "}", "float Visibility_Schlick( float roughness2, float nDotL, float nDotV) {", "float termL = (nDotL + sqrt(roughness2 + (1.0 - roughness2) * nDotL * nDotL));", "float termV = (nDotV + sqrt(roughness2 + (1.0 - roughness2) * nDotV * nDotV));", "return 1.0 / ( abs( termL * termV ) + 0.0000001 );", "}", "float Diffuse_Lambert() {", "return 1.0 / PI;", "}", "float Diffuse_OrenNayer( float m2, float nDotV, float nDotL, float vDotH ) {", "float termA = 1.0 - 0.5 * m2 / (m2 + 0.33);", "float Cosri = 2.0 * vDotH - 1.0 - nDotV * nDotL;", "float termB = 0.45 * m2 / (m2 + 0.09) * Cosri * ( Cosri >= 0.0 ? min( 1.0, nDotL / nDotV ) : nDotL );", "return 1.0 / PI * ( nDotL * termA + termB );", "}", "mat2 createRotationMat2( float rads) {", "float cos_rads = cos( rads );", "float sin_rads = sin( rads );", "return mat2( vec2( cos_rads, sin_rads ), vec2( -sin_rads, cos_rads ) );", "}", "vec2 calcAnisotropyUV( float anisotropyLocal) {", "float oneMinusAbsAnisotropy = 1.0 - min( abs( anisotropyLocal ) * 0.9, 0.9 );", "vec2 anisotropyUV = vec2 ( 1.0 / oneMinusAbsAnisotropy, oneMinusAbsAnisotropy );", "if( anisotropy < 0.0 ) {", "anisotropyUV.xy = anisotropyUV.yx;", "}", "return anisotropyUV;", "}"].join("\n"),
                    lights_physical_fragment: ["mat3 tsb = mat3( normalize( vTangent ), normalize( vBinormal ), normal );", "#ifdef USE_NORMALMAP", "normal = perturbNormal2Arb( -vViewPosition, normal );", "#endif", "#if defined( USE_BUMPMAP )", "normal = perturbNormalArb( -vViewPosition, normal, dHdxy_fwd() );", "#endif", "#ifdef DOUBLE_SIDED", "normal = normal * ( -1.0 + 2.0 * float( gl_FrontFacing ) );", "#endif", "#ifdef FALLOFF", "vec3 modulatedFalloffColor = falloffColor;", "#ifdef USE_FALLOFFMAP", "vec4 falloffTexelColor = texelDecode( texture2D( falloffMap, vUvLocal ), ENCODING_sRGB );", "modulatedFalloffColor = modulatedFalloffColor * falloffTexelColor.xyz;", "#endif", "float fm = abs( dot( normal, viewDirection ) );", "fm = /*falloffBlendParams.x * fm + falloffBlendParams.y * */ ( fm * fm * ( 3.0 - 2.0 * fm ) );", "diffuseColor = mix( modulatedFalloffColor, diffuseColor, fm );", "#endif", "float nDotV = saturate( dot( normal, viewDirection ) );", "float m2 = pow( clamp( roughnessStrength, 0.02, 1.0 ), 4.0 );", "float m2ClearCoat = pow( clamp( clearCoatRoughness, 0.02, 1.0 ), 4.0 );", "specularColor = mix( specularColor * SPECULAR_COEFF, diffuseColor, metallicStrength );", "diffuseColor *= ( 1.0 - metallicStrength );", "#ifdef ANISOTROPY", "vec2 anisotropicM = calcAnisotropyUV( anisotropyStrength ) * sqrt( m2 );", "#ifdef ANISOTROPYROTATION", "mat2 anisotropicRotationMatrix = createRotationMat2( anisotropyRotationStrength * 2.0 * PI );", "#endif", "vec3 anisotropicS = tsb[1];", "vec3 anisotropicT = tsb[0];", "#endif", "vec3 totalLighting  = vec3( 0.0 );", "#if ( defined( USE_ENVMAP ) || defined( USE_DIFFUSEENVMAP ) ) && defined( PHYSICAL )", "{", "vec3 worldNormal = vec3( normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz ) );", "vec3 worldView = -vec3( normalize( ( vec4( viewDirection, 0.0 ) * viewMatrix ).xyz ) );", "vec3 reflectVec = reflect( worldView, worldNormal );", "vec3 hVector = normal;//normalize( viewDirection.xyz + lVector.xyz );", "float nDotH = saturate( dot( normal, normal ) );", "float hDotV = saturate( dot( normal, viewDirection ) );", "float nDotL = hDotV;//saturate( dot( normal, lVector ) );", "vec3 queryVector = vec3( flipEnvMap * reflectVec.x, reflectVec.yz );", "#ifdef DOUBLE_SIDED", "queryVector *= ( -1.0 + 2.0 * float( gl_FrontFacing ) );", "#endif", "vec3 worldEnvNormal = vec3( normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz ) );", "worldEnvNormal = vec3( flipEnvMap * worldEnvNormal.x, worldEnvNormal.yz );", "#ifdef DOUBLE_SIDED", "worldEnvNormal *= ( -1.0 + 2.0 * float( gl_FrontFacing ) );", "#endif", "vec4 diffuseEnvColor = vec4( 0.0, 0.0, 0.0, 1.0 );", "#if defined( USE_DIFFUSEENVMAP )", "diffuseEnvColor = texelDecode( textureCube( diffuseEnvMap, worldEnvNormal ), diffuseEnvEncoding );", "#elif defined( USE_ENVMAP )", "#if defined( TEXTURE_CUBE_LOD_EXT )", "diffuseEnvColor = texelDecode( textureCubeLodEXT( envMap, worldEnvNormal, 9.5 ), envEncoding );", "#else", "diffuseEnvColor = texelDecode( textureCube( envMap, worldEnvNormal, 10.0 ), envEncoding );", "#endif", "#endif", "vec4 specularEnvColor = vec4( 0.0, 0.0, 0.0, 1.0 );", "#if defined( USE_ENVMAP )", "#if defined( TEXTURE_CUBE_LOD_EXT )", "float specularMIPLevel = 9.7925 - 0.5 * log2( 2.0 / ( roughness * roughness + 0.00001 ) - 1.0 );", "specularEnvColor = texelDecode( textureCubeLodEXT( envMap, queryVector, specularMIPLevel ), envEncoding );", "#else", "specularEnvColor = mix( texelDecode( textureCube( envMap, queryVector ), envEncoding ), texelDecode( textureCube( envMap, queryVector, 10.0 ), envEncoding ), roughnessStrength );", "#endif", "#endif", "vec3 specClearCoat = vec3(0, 0, 0);", "#if defined( CLEARCOAT ) && defined( USE_ENVMAP )", "#if defined( TEXTURE_CUBE_LOD_EXT )", "float clearCoatMIPLevel = 9.7925 - 0.5 * log2( 2.0 / ( clearCoatRoughness * clearCoatRoughness + 0.00001 ) - 1.0 );", "vec4 specularClearCoatEnvColor = texelDecode( textureCubeLodEXT( envMap, queryVector, clearCoatMIPLevel ), envEncoding );", "#else", "vec4 specularClearCoatEnvColor = mix( texelDecode( textureCube( envMap, queryVector ), envEncoding ), texelDecode( textureCube( envMap, queryVector, 10.0 ), envEncoding ), clearCoatRoughness );", "#endif", "vec3 fresnelClearCoat = Fresnel_Schlick_SpecularBlendToWhiteRoughness( vec3( SPECULAR_COEFF ), nDotL, m2ClearCoat );", "specClearCoat = specularClearCoatEnvColor.rgb * fresnelClearCoat;", "#endif", "vec3 fresnelColor = Fresnel_Schlick_SpecularBlendToWhiteRoughness( specularColor, nDotL, m2 );", "vec3 spec = fresnelColor * specularEnvColor.rgb;", "vec3 diff = diffuseColor * diffuseEnvColor.rgb;", "vec3 shadingResult = spec + diff;", "#ifdef CLEARCOAT", "shadingResult = mix( shadingResult, specClearCoat, clearCoat );", "#endif", "totalLighting  += shadingResult;", "}", "#endif", "#if MAX_POINT_LIGHTS > 0", "for ( int i = 0; i < MAX_POINT_LIGHTS; i ++ ) {", "vec4 lPosition = viewMatrix * vec4( pointLightPosition[ i ], 1.0 );", "vec3 lVector = lPosition.xyz + vViewPosition.xyz;", "float distanceAttenuation = calcLightAttenuation( length( lVector ), pointLightDistance[ i ], pointLightDecayExponent[i] );", "vec3 incidentLight = pointLightColor[ i ] * distanceAttenuation;", "lVector = normalize( lVector );", "vec3 hVector = normalize( viewDirection.xyz + lVector.xyz );", "float nDotH = saturate( dot( normal, hVector ) );", "float nDotL = saturate( dot( normal, lVector ) );", "float hDotV = saturate( dot( hVector, viewDirection ) );", "#ifdef CLEARCOAT", "float dClearCoat = Distribution_GGX( m2ClearCoat, nDotH );", "float visClearCoat = Visibility_Kelemen( hDotV );", "vec3 fresnelClearCoat = Fresnel_Schlick_SpecularBlendToWhite( vec3( SPECULAR_COEFF ), hDotV );", "vec3 specClearCoat = clamp( nDotL * dClearCoat * visClearCoat, 0.0, 10.0 ) * fresnelClearCoat;", "#endif", "#ifdef ANISOTROPY", "vec2 xyDotH = vec2( dot( anisotropicS, hVector ), dot( anisotropicT, hVector ) );", "#ifdef ANISOTROPYROTATION", "xyDotH = anisotropicRotationMatrix * xyDotH;", "#endif", "float d = Distribution_GGXAniso( anisotropicM, xyDotH, nDotH );", "#else", "float d = Distribution_GGX( m2, nDotH );", "#endif", "float vis = Visibility_Schlick(m2, nDotL, nDotV);", "vec3 fresnelColor = Fresnel_Schlick_SpecularBlendToWhite( specularColor, hDotV );", "vec3 spec = clamp( nDotL * d * vis, 0.0, 10.0 ) * fresnelColor;", "vec3 diff = nDotL * Diffuse_Lambert() * diffuseColor;", "#ifdef TRANSLUCENCY", "diff *= whiteCompliment( translucencyColor.xyz );", "#endif", "vec3 shadingResult = spec + diff;", "#ifdef CLEARCOAT", "shadingResult = mix( shadingResult, specClearCoat, clearCoat );", "#endif", "totalLighting  += incidentLight * shadingResult;", "#ifdef TRANSLUCENCY", "float lightNormalTL = mix( 1.0, pow( abs( dot( lVector.xyz, normal ) ), translucencyNormalPower ), translucencyNormalAlpha );", "float viewNormalTL = mix( 1.0, pow( abs( dot( viewDirection.xyz, lVector.xyz) ), translucencyViewPower ), translucencyViewAlpha );", "totalLighting += lightNormalTL * viewNormalTL * translucencyColor.rgb * incidentLight;", "#endif", "}", "#endif", "#if MAX_SPOT_LIGHTS > 0", "for ( int i = 0; i < MAX_SPOT_LIGHTS; i ++ ) {", "vec4 lPosition = viewMatrix * vec4( spotLightPosition[ i ], 1.0 );", "vec3 lVector = lPosition.xyz + vViewPosition.xyz;", "float distanceAttenuation = calcLightAttenuation( length( lVector ), spotLightDistance[ i ], spotLightDecayExponent[i] );", "vec3 incidentLight = spotLightColor[ i ] * distanceAttenuation;", "lVector = normalize( lVector );", "float spotEffect = dot( spotLightDirection[ i ], normalize( spotLightPosition[ i ] - vWorldPosition ) );", "if ( spotEffect > spotLightAngleCos[ i ] ) {", "spotEffect = pow( max( spotEffect, 0.0 ), spotLightExponent[ i ] );", "incidentLight *= spotEffect;", "vec3 hVector = normalize( viewDirection.xyz + lVector.xyz );", "float nDotH = saturate( dot( normal, hVector ) );", "float nDotL = saturate( dot( normal, lVector ) );", "float hDotV = saturate( dot( hVector, viewDirection ) );", "#ifdef CLEARCOAT", "float dClearCoat = Distribution_GGX( m2ClearCoat, nDotH );", "float visClearCoat = Visibility_Kelemen( hDotV );", "vec3 fresnelClearCoat = Fresnel_Schlick_SpecularBlendToWhite( vec3( SPECULAR_COEFF ), hDotV );", "vec3 specClearCoat = clamp( nDotL * dClearCoat * visClearCoat, 0.0, 10.0 ) * fresnelClearCoat;", "#endif", "#ifdef ANISOTROPY", "vec2 xyDotH = vec2( dot( anisotropicS, hVector ), dot( anisotropicT, hVector ) );", "#ifdef ANISOTROPYROTATION", "xyDotH = anisotropicRotationMatrix * xyDotH;", "#endif", "float d = Distribution_GGXAniso( anisotropicM, xyDotH, nDotH );", "#else", "float d = Distribution_GGX( m2, nDotH );", "#endif", "float vis = Visibility_Schlick(m2, nDotL, nDotV);", "vec3 fresnelColor = Fresnel_Schlick_SpecularBlendToWhite( specularColor, hDotV );", "vec3 spec = clamp( nDotL * d * vis, 0.0, 10.0 ) * fresnelColor;", "vec3 diff = nDotL * Diffuse_Lambert() * diffuseColor;", "#ifdef TRANSLUCENCY", "diff *= whiteCompliment( translucencyColor.xyz );", "#endif", "vec3 shadingResult = spec + diff;", "#ifdef CLEARCOAT", "shadingResult = mix( shadingResult, specClearCoat, clearCoat );", "#endif", "totalLighting  += incidentLight * shadingResult;", "#ifdef TRANSLUCENCY", "float lightNormalTL = mix( 1.0, pow( abs( dot( lVector.xyz, normal ) ), translucencyNormalPower ), translucencyNormalAlpha );", "float viewNormalTL = mix( 1.0, pow( abs( dot( viewDirection.xyz, lVector.xyz) ), translucencyViewPower ), translucencyViewAlpha );", "totalLighting += lightNormalTL * viewNormalTL * translucencyColor.rgb * incidentLight;", "#endif", "}", "}", "#endif", "#if MAX_DIR_LIGHTS > 0", "for( int i = 0; i < MAX_DIR_LIGHTS; i ++ ) {", "vec4 lDirection = viewMatrix * vec4( directionalLightDirection[ i ], 0.0 );", "vec3 lVector = normalize( lDirection.xyz );", "vec3 incidentLight = directionalLightColor[ i ];", "vec3 hVector = normalize( viewDirection.xyz + lVector.xyz );", "float nDotH = saturate( dot( normal, hVector ) );", "float nDotL = saturate( dot( normal, lVector ) );", "float hDotV = saturate( dot( hVector, viewDirection ) );", "#ifdef CLEARCOAT", "float dClearCoat = Distribution_GGX( m2ClearCoat, nDotH );", "float visClearCoat = Visibility_Kelemen( hDotV );", "vec3 fresnelClearCoat = Fresnel_Schlick_SpecularBlendToWhite( vec3( SPECULAR_COEFF ), hDotV );", "vec3 specClearCoat = clamp( nDotL * dClearCoat * visClearCoat, 0.0, 10.0 ) * fresnelClearCoat;", "#endif", "#ifdef ANISOTROPY", "vec2 xyDotH = vec2( dot( anisotropicS, hVector ), dot( anisotropicT, hVector ) );", "#ifdef ANISOTROPYROTATION", "xyDotH = anisotropicRotationMatrix * xyDotH;", "#endif", "float d = Distribution_GGXAniso( anisotropicM, xyDotH, nDotH );", "#else", "float d = Distribution_GGX( m2, nDotH );", "#endif", "float vis = Visibility_Schlick(m2, nDotL, nDotV);", "vec3 fresnelColor = Fresnel_Schlick_SpecularBlendToWhite( specularColor, hDotV );", "vec3 spec = clamp( nDotL * d * vis, 0.0, 10.0 ) * fresnelColor;", "vec3 diff = nDotL * Diffuse_Lambert() * diffuseColor;", "#ifdef TRANSLUCENCY", "diff *= whiteCompliment( translucencyColor.xyz );", "#endif", "vec3 shadingResult = spec + diff;", "#ifdef CLEARCOAT", "shadingResult = mix( shadingResult, specClearCoat, clearCoat );", "#endif", "totalLighting  += incidentLight * shadingResult;", "#ifdef TRANSLUCENCY", "float lightNormalTL = mix( 1.0, pow( abs( dot( lVector.xyz, normal ) ), translucencyNormalPower ), translucencyNormalAlpha );", "float viewNormalTL = mix( 1.0, pow( abs( dot( viewDirection.xyz, lVector.xyz) ), translucencyViewPower ), translucencyViewAlpha );", "totalLighting += lightNormalTL * viewNormalTL * translucencyColor.rgb * incidentLight;", "#endif", "}", "#endif", "#if MAX_HEMI_LIGHTS > 0", "for( int i = 0; i < MAX_HEMI_LIGHTS; i ++ ) {", "vec4 lDirection = viewMatrix * vec4( hemisphereLightDirection[ i ], 0.0 );", "vec3 lVector = normalize( lDirection.xyz );", "float nDotL = dot( normal, lVector );", "vec3 hemiColor = ( PI / 2.0 ) * ( ( 1.0 + nDotL ) * hemisphereLightSkyColor[ i ] + ( 1.0 - nDotL ) * hemisphereLightGroundColor[ i ] );", "totalLighting += diffuseColor * hemiColor;", "}", "#endif", "#if MAX_AREA_LIGHTS > 0", "for( int i = 0; i < MAX_AREA_LIGHTS; i ++ ) {", "vec3 lPosition = ( viewMatrix * vec4( areaLightPosition[ i ], 1.0 ) ).xyz;", "vec3 width = areaLightWidth[ i ];", "vec3 height = areaLightHeight[ i ];", "vec3 up = normalize( ( viewMatrix * vec4( height, 0.0 ) ).xyz );", "vec3 right = normalize( ( viewMatrix * vec4( width, 0.0 ) ).xyz );", "vec3 pnormal = normalize( cross( right, up ) );", "float widthScalar = length( width );", "float heightScalar = length( height );", "vec3 projection = projectOnPlane( -vViewPosition.xyz, lPosition, pnormal );", "vec3 dir = projection - lPosition;", "vec2 diagonal = vec2( dot( dir, right ), dot( dir, up ) );", "vec2 nearest2D = vec2( clamp( diagonal.x, -widthScalar, widthScalar ), clamp( diagonal.y, -heightScalar, heightScalar ) );", "vec3 nearestPointInside = lPosition + ( right *nearest2D.x + up * nearest2D.y );", "vec3 lVector = ( nearestPointInside + vViewPosition.xyz );", "float distanceAttenuation = calcLightAttenuation( length( lVector ), areaLightDistance[ i ], areaLightDecayExponent[i] );", "lVector = normalize( lVector );", "vec3 incidentLight = areaLightColor[ i ] * distanceAttenuation * 0.01;", "float nDotLDiffuse = saturate( dot( normal, lVector ) );", "vec3 diff = Diffuse_Lambert() * diffuseColor * widthScalar * heightScalar;", "vec3 viewReflection = reflect( viewDirection.xyz, normal );", "vec3 reflectionLightPlaneIntersection = linePlaneIntersect( -vViewPosition.xyz, viewReflection, lPosition, pnormal );", "float specAngle = dot( viewReflection, pnormal );", "if ( specAngle < 0.0 ) {", "vec3 dirSpec = reflectionLightPlaneIntersection - lPosition;", "vec2 dirSpec2D = vec2( dot( dirSpec, right ), dot( dirSpec, up ) );", "vec2 nearestSpec2D = vec2( clamp( dirSpec2D.x, -widthScalar, widthScalar ), clamp( dirSpec2D.y, -heightScalar, heightScalar ) );", "lVector = normalize( lPosition + ( right *nearestSpec2D.x + up * nearestSpec2D.y ) + vViewPosition.xyz );", "} else { ", "lVector = vec3( 0 );", "}", "vec3 hVector = normalize( viewDirection.xyz + lVector.xyz );", "float nDotH = saturate( dot( normal, hVector ) );", "float nDotL = saturate( dot( normal, lVector ) );", "float hDotV = saturate( dot( hVector, viewDirection ) );", "#ifdef CLEARCOAT", "float dClearCoat = Distribution_GGX( m2ClearCoat, nDotH );", "float visClearCoat = Visibility_Kelemen( hDotV );", "vec3 fresnelClearCoat = Fresnel_Schlick_SpecularBlendToWhite( vec3( SPECULAR_COEFF ), hDotV );", "vec3 specClearCoat = clamp( nDotL * dClearCoat * visClearCoat, 0.0, 10.0 ) * fresnelClearCoat;", "#endif", "#ifdef TRANSLUCENCY", "diff *= whiteCompliment( translucencyColor.xyz );", "#endif", "#ifdef CLEARCOAT", "diff = mix( diff, specClearCoat, clearCoat );", "#endif", "#ifdef ANISOTROPY", "vec2 xyDotH = vec2( dot( anisotropicS, hVector ), dot( anisotropicT, hVector ) );", "#ifdef ANISOTROPYROTATION", "xyDotH = anisotropicRotationMatrix * xyDotH;", "#endif", "float d = Distribution_GGXAniso( anisotropicM, xyDotH, nDotH );", "#else", "float d = Distribution_GGX( m2, nDotH );", "#endif", "float vis = Visibility_Schlick(m2, nDotL, nDotV);", "vec3 fresnelColor = Fresnel_Schlick_SpecularBlendToWhite( specularColor, hDotV );", "vec3 spec = clamp( nDotL * d * vis, 0.0, 10.0 ) * fresnelColor;", "totalLighting  += incidentLight * spec;", "totalLighting  += incidentLight * nDotLDiffuse * diff;", "#ifdef TRANSLUCENCY", "float lightNormalTL = mix( 1.0, pow( abs( dot( lVector.xyz, normal ) ), translucencyNormalPower ), translucencyNormalAlpha );", "float viewNormalTL = mix( 1.0, pow( abs( dot( viewDirection.xyz, lVector.xyz) ), translucencyViewPower ), translucencyViewAlpha );", "totalLighting += lightNormalTL * viewNormalTL * translucencyColor.rgb * incidentLight;", "#endif", "}", "#endif", "#ifdef CLEARCOAT", "totalLighting += diffuseColor * ( ambientLightColor * ( 1.0 - clearCoat ) );", "#else", "totalLighting += diffuseColor * ambientLightColor;", "#endif", "gl_FragColor.xyz += totalLighting;", "vec3 emissiveLocal = emissive;", "#ifdef USE_EMISSIVEMAP", "vec3 emissiveColor = texture2D( emissiveMap, vUv2 ).xyz;", "#ifdef GAMMA_INPUT", "emissiveColor *= emissiveColor;", "#endif", "emissiveLocal *= emissiveColor;", "#endif", "gl_FragColor.xyz += emissiveLocal;", "vec3 ambientLocal = ambient;", "#ifdef USE_LIGHTMAP", "vec3 ambientColor = texture2D( lightMap, vUv2 ).xyz;", "#ifdef GAMMA_INPUT", "ambientColor *= ambientColor;", "#endif", "ambientLocal *= ambientColor;", "#ifdef CLEARCOAT", "ambientLocal *= ( 1.0 - clearCoat );", "#endif", "#endif", "gl_FragColor.xyz += diffuseColor * ambientLocal;"].join("\n"),
                    lights_phong_pars_vertex: ["#if MAX_SPOT_LIGHTS > 0 || defined( USE_BUMPMAP ) || defined( USE_ENVMAP )", "varying vec3 vWorldPosition;", "#endif"].join("\n"),
                    lights_phong_vertex: ["#if MAX_SPOT_LIGHTS > 0 || defined( USE_BUMPMAP ) || defined( USE_ENVMAP )", "vWorldPosition = worldPosition.xyz;", "#endif"].join("\n"),
                    lights_phong_pars_fragment: ["uniform vec3 ambientLightColor;", "#if MAX_DIR_LIGHTS > 0", "uniform vec3 directionalLightColor[ MAX_DIR_LIGHTS ];", "uniform vec3 directionalLightDirection[ MAX_DIR_LIGHTS ];", "#endif", "#if MAX_HEMI_LIGHTS > 0", "uniform vec3 hemisphereLightSkyColor[ MAX_HEMI_LIGHTS ];", "uniform vec3 hemisphereLightGroundColor[ MAX_HEMI_LIGHTS ];", "uniform vec3 hemisphereLightDirection[ MAX_HEMI_LIGHTS ];", "#endif", "#if MAX_POINT_LIGHTS > 0", "uniform vec3 pointLightColor[ MAX_POINT_LIGHTS ];", "uniform vec3 pointLightPosition[ MAX_POINT_LIGHTS ];", "uniform float pointLightDistance[ MAX_POINT_LIGHTS ];", "uniform float pointLightDecayExponent[ MAX_POINT_LIGHTS ];", "#endif", "#if MAX_SPOT_LIGHTS > 0", "uniform vec3 spotLightColor[ MAX_SPOT_LIGHTS ];", "uniform vec3 spotLightPosition[ MAX_SPOT_LIGHTS ];", "uniform vec3 spotLightDirection[ MAX_SPOT_LIGHTS ];", "uniform float spotLightAngleCos[ MAX_SPOT_LIGHTS ];", "uniform float spotLightExponent[ MAX_SPOT_LIGHTS ];", "uniform float spotLightDistance[ MAX_SPOT_LIGHTS ];", "uniform float spotLightDecayExponent[ MAX_SPOT_LIGHTS ];", "#endif", "#if MAX_AREA_LIGHTS > 0", "uniform vec3 areaLightColor[ MAX_AREA_LIGHTS ];", "uniform vec3 areaLightPosition[ MAX_AREA_LIGHTS ];", "uniform vec3 areaLightWidth[ MAX_AREA_LIGHTS ];", "uniform vec3 areaLightHeight[ MAX_AREA_LIGHTS ];", "uniform float areaLightDistance[ MAX_AREA_LIGHTS ];", "uniform float areaLightDecayExponent[ MAX_AREA_LIGHTS ];", "#endif", "#if MAX_SPOT_LIGHTS > 0 || MAX_AREA_LIGHTS > 0 || defined( USE_BUMPMAP )", "varying vec3 vWorldPosition;", "#endif", "#ifdef WRAP_AROUND", "uniform vec3 wrapRGB;", "#endif", "varying vec3 vViewPosition;", "varying vec3 vNormal;"].join("\n"),
                    lights_phong_fragment: ["vec3 normal = normalize( vNormal );", "vec3 viewDirection = normalize( vViewPosition );", "#ifdef DOUBLE_SIDED", "normal = normal * ( -1.0 + 2.0 * float( gl_FrontFacing ) );", "#endif", "#ifdef USE_NORMALMAP", "normal = perturbNormal2Arb( -vViewPosition, normal );", "#elif defined( USE_BUMPMAP )", "normal = perturbNormalArb( -vViewPosition, normal, dHdxy_fwd() );", "#endif", "#if MAX_POINT_LIGHTS > 0", "vec3 pointDiffuse  = vec3( 0.0 );", "vec3 pointSpecular = vec3( 0.0 );", "for ( int i = 0; i < MAX_POINT_LIGHTS; i ++ ) {", "vec4 lPosition = viewMatrix * vec4( pointLightPosition[ i ], 1.0 );", "vec3 lVector = lPosition.xyz + vViewPosition.xyz;", "float distanceAttenuation = calcLightAttenuation( length( lVector ), pointLightDistance[ i ], pointLightDecayExponent[i] );", "lVector = normalize( lVector );", "float dotProduct = dot( normal, lVector );", "float pointDiffuseWeight = max( dotProduct, 0.0 );", "pointDiffuse  += pointLightColor[ i ] * pointDiffuseWeight * distanceAttenuation;", "vec3 pointHalfVector = normalize( lVector + viewDirection );", "float pointDotNormalHalf = max( dot( normal, pointHalfVector ), 0.0 );", "float pointSpecularWeight = specularStrength * pow( max( pointDotNormalHalf, 0.0 ), shininess );", "float specularNormalization = ( shininess + 2.0001 ) / 8.0;", "vec3 schlick = specular + vec3( 1.0 - specular ) * pow( max( 1.0 - dot( lVector, pointHalfVector ), 0.0 ), 5.0 );", "pointSpecular += schlick * pointLightColor[ i ] * pointSpecularWeight * pointDiffuseWeight * distanceAttenuation * specularNormalization;", "}", "#endif", "#if MAX_SPOT_LIGHTS > 0", "vec3 spotDiffuse  = vec3( 0.0 );", "vec3 spotSpecular = vec3( 0.0 );", "for ( int i = 0; i < MAX_SPOT_LIGHTS; i ++ ) {", "vec4 lPosition = viewMatrix * vec4( spotLightPosition[ i ], 1.0 );", "vec3 lVector = lPosition.xyz + vViewPosition.xyz;", "float distanceAttenuation = calcLightAttenuation( length( lVector ), spotLightDistance[ i ], spotLightDecayExponent[i] );", "lVector = normalize( lVector );", "float spotEffect = dot( spotLightDirection[ i ], normalize( spotLightPosition[ i ] - vWorldPosition ) );", "if ( spotEffect > spotLightAngleCos[ i ] ) {", "spotEffect = pow( max( spotEffect, 0.0 ), spotLightExponent[ i ] );", "float dotProduct = dot( normal, lVector );", "#ifdef WRAP_AROUND", "float spotDiffuseWeightFull = max( dotProduct, 0.0 );", "float spotDiffuseWeightHalf = max( 0.5 * dotProduct + 0.5, 0.0 );", "vec3 spotDiffuseWeight = mix( vec3 ( spotDiffuseWeightFull ), vec3( spotDiffuseWeightHalf ), wrapRGB );", "#else", "float spotDiffuseWeight = max( dotProduct, 0.0 );", "#endif", "spotDiffuse += spotLightColor[ i ] * spotDiffuseWeight * distanceAttenuation * spotEffect;", "vec3 spotHalfVector = normalize( lVector + viewDirection );", "float spotDotNormalHalf = max( dot( normal, spotHalfVector ), 0.0 );", "float spotSpecularWeight = specularStrength * pow( max( spotDotNormalHalf, 0.0 ), shininess );", "float specularNormalization = ( shininess + 2.0001 ) / 8.0;", "vec3 schlick = specular + vec3( 1.0 - specular ) * pow( max( 1.0 - dot( lVector, spotHalfVector ), 0.0 ), 5.0 );", "spotSpecular += schlick * spotLightColor[ i ] * spotSpecularWeight * spotDiffuseWeight * distanceAttenuation * specularNormalization * spotEffect;", "}", "}", "#endif", "#if MAX_DIR_LIGHTS > 0", "vec3 dirDiffuse  = vec3( 0.0 );", "vec3 dirSpecular = vec3( 0.0 );", "for( int i = 0; i < MAX_DIR_LIGHTS; i ++ ) {", "vec4 lDirection = viewMatrix * vec4( directionalLightDirection[ i ], 0.0 );", "vec3 dirVector = normalize( lDirection.xyz );", "float dotProduct = dot( normal, dirVector );", "#ifdef WRAP_AROUND", "float dirDiffuseWeightFull = max( dotProduct, 0.0 );", "float dirDiffuseWeightHalf = max( 0.5 * dotProduct + 0.5, 0.0 );", "vec3 dirDiffuseWeight = mix( vec3( dirDiffuseWeightFull ), vec3( dirDiffuseWeightHalf ), wrapRGB );", "#else", "float dirDiffuseWeight = max( dotProduct, 0.0 );", "#endif", "dirDiffuse  += directionalLightColor[ i ] * dirDiffuseWeight;", "vec3 dirHalfVector = normalize( dirVector + viewDirection );", "float dirDotNormalHalf = max( dot( normal, dirHalfVector ), 0.0 );", "float dirSpecularWeight = specularStrength * pow( max( dirDotNormalHalf, 0.0 ), shininess );", "float specularNormalization = ( shininess + 2.0001 ) / 8.0;", "vec3 schlick = specular + vec3( 1.0 - specular ) * pow( max( 1.0 - dot( dirVector, dirHalfVector ), 0.0 ), 5.0 );", "dirSpecular += schlick * directionalLightColor[ i ] * dirSpecularWeight * dirDiffuseWeight * specularNormalization;", "}", "#endif", "#if MAX_HEMI_LIGHTS > 0", "vec3 hemiDiffuse  = vec3( 0.0 );", "vec3 hemiSpecular = vec3( 0.0 );", "for( int i = 0; i < MAX_HEMI_LIGHTS; i ++ ) {", "vec4 lDirection = viewMatrix * vec4( hemisphereLightDirection[ i ], 0.0 );", "vec3 lVector = normalize( lDirection.xyz );", "float dotProduct = dot( normal, lVector );", "float hemiDiffuseWeight = 0.5 * dotProduct + 0.5;", "vec3 hemiColor = mix( hemisphereLightGroundColor[ i ], hemisphereLightSkyColor[ i ], hemiDiffuseWeight );", "hemiDiffuse += hemiColor;", "vec3 hemiHalfVectorSky = normalize( lVector + viewDirection );", "float hemiDotNormalHalfSky = 0.5 * dot( normal, hemiHalfVectorSky ) + 0.5;", "float hemiSpecularWeightSky = specularStrength * pow( max( hemiDotNormalHalfSky, 0.0 ), shininess );", "vec3 lVectorGround = -lVector;", "vec3 hemiHalfVectorGround = normalize( lVectorGround + viewDirection );", "float hemiDotNormalHalfGround = 0.5 * dot( normal, hemiHalfVectorGround ) + 0.5;", "float hemiSpecularWeightGround = specularStrength * pow( max( hemiDotNormalHalfGround, 0.0 ), shininess );", "float dotProductGround = dot( normal, lVectorGround );", "float specularNormalization = ( shininess + 2.0001 ) / 8.0;", "vec3 schlickSky = specular + vec3( 1.0 - specular ) * pow( max( 1.0 - dot( lVector, hemiHalfVectorSky ), 0.0 ), 5.0 );", "vec3 schlickGround = specular + vec3( 1.0 - specular ) * pow( max( 1.0 - dot( lVectorGround, hemiHalfVectorGround ), 0.0 ), 5.0 );", "hemiSpecular += hemiColor * specularNormalization * ( schlickSky * hemiSpecularWeightSky * max( dotProduct, 0.0 ) + schlickGround * hemiSpecularWeightGround * max( dotProductGround, 0.0 ) );", "}", "#endif", "#if MAX_AREA_LIGHTS > 0", "vec3 areaDiffuse  = vec3( 0.0 );", "vec3 areaSpecular = vec3( 0.0 );", "for( int i = 0; i < MAX_AREA_LIGHTS; i ++ ) {", "vec3 lPosition = ( viewMatrix * vec4( areaLightPosition[ i ], 1.0 ) ).xyz;", "vec3 width = areaLightWidth[ i ];", "vec3 height = areaLightHeight[ i ];", "vec3 up = normalize( ( viewMatrix * vec4( height, 0.0 ) ).xyz );", "vec3 right = normalize( ( viewMatrix * vec4( width, 0.0 ) ).xyz );", "vec3 pnormal = normalize( cross( right, up ) );", "float widthScalar = length( width );", "float heightScalar = length( height );", "vec3 projection = projectOnPlane( -vViewPosition.xyz, lPosition, pnormal );", "vec3 dir = projection - lPosition;", "vec2 diagonal = vec2( dot( dir, right ), dot( dir, up ) );", "vec2 nearest2D = vec2( clamp( diagonal.x, -widthScalar, widthScalar ), clamp( diagonal.y, -heightScalar, heightScalar ) );", "vec3 nearestPointInside = lPosition + ( right *nearest2D.x + up * nearest2D.y );", "vec3 lVector = ( nearestPointInside + vViewPosition.xyz );", "float distanceAttenuation = calcLightAttenuation( length( lVector ), areaLightDistance[ i ], areaLightDecayExponent[i] );", "lVector = normalize( lVector );", "float nDotLDiffuse = saturate( dot( normal, lVector ) );", "vec3 viewReflection = reflect( viewDirection.xyz, normal );", "vec3 reflectionLightPlaneIntersection = linePlaneIntersect( -vViewPosition.xyz, viewReflection, lPosition, pnormal );", "float specAngle = dot( viewReflection, pnormal );", "if ( specAngle < 0.0 ) {", "vec3 dirSpec = reflectionLightPlaneIntersection - lPosition;", "vec2 dirSpec2D = vec2( dot( dirSpec, right ), dot( dirSpec, up ) );", "vec2 nearestSpec2D = vec2( clamp( dirSpec2D.x, -widthScalar, widthScalar ), clamp( dirSpec2D.y, -heightScalar, heightScalar ) );", "lVector = normalize( lPosition + ( right *nearestSpec2D.x + up * nearestSpec2D.y ) + vViewPosition.xyz );", "} else { ", "lVector = vec3( 0 );", "}", "float dotProduct = nDotLDiffuse;", "float areaDiffuseWeight = max( dotProduct, 0.0 );", "areaDiffuse  += areaLightColor[ i ] * areaDiffuseWeight * distanceAttenuation * widthScalar * heightScalar * 0.01;", "vec3 areaHalfVector = normalize( lVector + viewDirection );", "float areaDotNormalHalf = max( dot( normal, areaHalfVector ), 0.0 );", "float areaSpecularWeight = specularStrength * pow( max( areaDotNormalHalf, 0.0 ), shininess );", "float specularNormalization = ( shininess + 2.0001 ) / 8.0;", "vec3 schlick = specular + vec3( 1.0 - specular ) * pow( max( 1.0 - dot( lVector, areaHalfVector ), 0.0 ), 5.0 );", "areaSpecular += schlick * areaLightColor[ i ] * areaSpecularWeight * areaDiffuseWeight * distanceAttenuation * specularNormalization * 0.01;", "}", "#endif", "vec3 totalDiffuse = vec3( 0.0 );", "vec3 totalSpecular = vec3( 0.0 );", "#if MAX_DIR_LIGHTS > 0", "totalDiffuse += dirDiffuse;", "totalSpecular += dirSpecular;", "#endif", "#if MAX_HEMI_LIGHTS > 0", "totalDiffuse += hemiDiffuse;", "totalSpecular += hemiSpecular;", "#endif", "#if MAX_POINT_LIGHTS > 0", "totalDiffuse += pointDiffuse;", "totalSpecular += pointSpecular;", "#endif", "#if MAX_SPOT_LIGHTS > 0", "totalDiffuse += spotDiffuse;", "totalSpecular += spotSpecular;", "#endif", "#if MAX_AREA_LIGHTS > 0", "totalDiffuse += areaDiffuse;", "totalSpecular += areaSpecular;", "#endif", "vec3 ambientLocal = ambient;", "#ifdef USE_LIGHTMAP", "vec3 ambientColor = texture2D( lightMap, vUv2 ).xyz;", "#ifdef GAMMA_INPUT", "ambientColor *= ambientColor;", "#endif", "ambientLocal *= ambientColor;", "#endif", "gl_FragColor.xyz = diffuseColor * ( totalDiffuse + ambientLightColor + ambientLocal ) + totalSpecular;", "vec3 emissiveLocal = emissive;", "#ifdef USE_EMISSIVEMAP", "vec3 emissiveColor = texture2D( emissiveMap, vUv2 ).xyz;", "#ifdef GAMMA_INPUT", "emissiveColor *= emissiveColor;", "#endif", "emissiveLocal *= emissiveColor;", "#endif", "gl_FragColor.xyz += emissiveLocal.xyz;"].join("\n"),
                    color_pars_fragment: ["#ifdef USE_COLOR", "varying vec3 vColor;", "#endif"].join("\n"),
                    color_fragment: ["#ifdef USE_COLOR", "gl_FragColor = gl_FragColor * vec4( vColor, 1.0 );", "#endif"].join("\n"),
                    color_pars_vertex: ["#ifdef USE_COLOR", "varying vec3 vColor;", "#endif"].join("\n"),
                    color_vertex: ["#ifdef USE_COLOR", "#ifdef GAMMA_INPUT", "vColor = color * color;", "#else", "vColor = color;", "#endif", "#endif"].join("\n"),
                    skinning_pars_vertex: ["#ifdef USE_SKINNING", "#ifdef BONE_TEXTURE", "uniform sampler2D boneTexture;", "uniform int boneTextureWidth;", "uniform int boneTextureHeight;", "mat4 getBoneMatrix( const float i ) {", "float j = i * 4.0;", "float x = mod( j, float( boneTextureWidth ) );", "float y = floor( j / float( boneTextureWidth ) );", "float dx = 1.0 / float( boneTextureWidth );", "float dy = 1.0 / float( boneTextureHeight );", "y = dy * ( y + 0.5 );", "vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );", "vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );", "vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );", "vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );", "mat4 bone = mat4( v1, v2, v3, v4 );", "return bone;", "}", "#else", "uniform mat4 boneGlobalMatrices[ MAX_BONES ];", "mat4 getBoneMatrix( const float i ) {", "mat4 bone = boneGlobalMatrices[ int(i) ];", "return bone;", "}", "#endif", "#endif"].join("\n"),
                    skinbase_vertex: ["#ifdef USE_SKINNING", "mat4 boneMatX = getBoneMatrix( skinIndex.x );", "mat4 boneMatY = getBoneMatrix( skinIndex.y );", "mat4 boneMatZ = getBoneMatrix( skinIndex.z );", "mat4 boneMatW = getBoneMatrix( skinIndex.w );", "#endif"].join("\n"),
                    skinning_vertex: ["#ifdef USE_SKINNING", "#ifdef USE_MORPHTARGETS", "vec4 skinVertex = vec4( morphed, 1.0 );", "#else", "vec4 skinVertex = vec4( position, 1.0 );", "#endif", "vec4 skinned  = boneMatX * skinVertex * skinWeight.x;", "skinned      += boneMatY * skinVertex * skinWeight.y;", "skinned      += boneMatZ * skinVertex * skinWeight.z;", "skinned      += boneMatW * skinVertex * skinWeight.w;", "#endif"].join("\n"),
                    morphtarget_pars_vertex: ["#ifdef USE_MORPHTARGETS", "#ifndef USE_MORPHNORMALS", "uniform float morphTargetInfluences[ 8 ];", "#else", "uniform float morphTargetInfluences[ 4 ];", "#endif", "#endif"].join("\n"),
                    morphtarget_vertex: ["#ifdef USE_MORPHTARGETS", "vec3 morphed = vec3( 0.0 );", "morphed += ( morphTarget0 - position ) * morphTargetInfluences[ 0 ];", "morphed += ( morphTarget1 - position ) * morphTargetInfluences[ 1 ];", "morphed += ( morphTarget2 - position ) * morphTargetInfluences[ 2 ];", "morphed += ( morphTarget3 - position ) * morphTargetInfluences[ 3 ];", "#ifndef USE_MORPHNORMALS", "morphed += ( morphTarget4 - position ) * morphTargetInfluences[ 4 ];", "morphed += ( morphTarget5 - position ) * morphTargetInfluences[ 5 ];", "morphed += ( morphTarget6 - position ) * morphTargetInfluences[ 6 ];", "morphed += ( morphTarget7 - position ) * morphTargetInfluences[ 7 ];", "#endif", "morphed += position;", "#endif"].join("\n"),
                    default_vertex: ["vec4 mvPosition;", "#ifdef USE_SKINNING", "mvPosition = modelViewMatrix * skinned;", "#endif", "#if !defined( USE_SKINNING ) && defined( USE_MORPHTARGETS )", "mvPosition = modelViewMatrix * vec4( morphed, 1.0 );", "#endif", "#if !defined( USE_SKINNING ) && ! defined( USE_MORPHTARGETS )", "mvPosition = modelViewMatrix * vec4( position, 1.0 );", "#endif", "gl_Position = projectionMatrix * mvPosition;"].join("\n"),
                    morphnormal_vertex: ["#ifdef USE_MORPHNORMALS", "vec3 morphedNormal = vec3( 0.0 );", "morphedNormal +=  ( morphNormal0 - normal ) * morphTargetInfluences[ 0 ];", "morphedNormal +=  ( morphNormal1 - normal ) * morphTargetInfluences[ 1 ];", "morphedNormal +=  ( morphNormal2 - normal ) * morphTargetInfluences[ 2 ];", "morphedNormal +=  ( morphNormal3 - normal ) * morphTargetInfluences[ 3 ];", "morphedNormal += normal;", "#endif"].join("\n"),
                    skinnormal_vertex: ["#ifdef USE_SKINNING", "mat4 skinMatrix = skinWeight.x * boneMatX;", "skinMatrix \t+= skinWeight.y * boneMatY;", "#ifdef USE_MORPHNORMALS", "vec4 skinnedNormal = skinMatrix * vec4( morphedNormal, 0.0 );", "#else", "vec4 skinnedNormal = skinMatrix * vec4( normal, 0.0 );", "#endif", "#endif"].join("\n"),
                    defaultnormal_vertex: ["vec3 objectNormal;", "#ifdef USE_SKINNING", "objectNormal = skinnedNormal.xyz;", "#endif", "#if !defined( USE_SKINNING ) && defined( USE_MORPHNORMALS )", "objectNormal = morphedNormal;", "#endif", "#if !defined( USE_SKINNING ) && ! defined( USE_MORPHNORMALS )", "objectNormal = normal;", "#endif", "#ifdef FLIP_SIDED", "objectNormal = -objectNormal;", "#endif", "vec3 transformedNormal = normalMatrix * objectNormal;"].join("\n"),
                    shadowmap_pars_fragment: ["#ifdef USE_SHADOWMAP", "uniform sampler2D shadowMap[ MAX_SHADOWS ];", "uniform vec2 shadowMapSize[ MAX_SHADOWS ];", "uniform float shadowDarkness[ MAX_SHADOWS ];", "uniform float shadowBias[ MAX_SHADOWS ];", "varying vec4 vShadowCoord[ MAX_SHADOWS ];", "float unpackDepth( const vec4 rgba_depth ) {", "const vec4 bit_shift = vec4( 1.0 / ( 256.0 * 256.0 * 256.0 ), 1.0 / ( 256.0 * 256.0 ), 1.0 / 256.0, 1.0 );", "float depth = dot( rgba_depth, bit_shift );", "return depth;", "}", "#endif"].join("\n"),
                    shadowmap_fragment: ["#ifdef USE_SHADOWMAP", "#ifdef SHADOWMAP_DEBUG", "vec3 frustumColors[3];", "frustumColors[0] = vec3( 1.0, 0.5, 0.0 );", "frustumColors[1] = vec3( 0.0, 1.0, 0.8 );", "frustumColors[2] = vec3( 0.0, 0.5, 1.0 );", "#endif", "#ifdef SHADOWMAP_CASCADE", "int inFrustumCount = 0;", "#endif", "float fDepth;", "vec3 shadowColor = vec3( 1.0 );", "for( int i = 0; i < MAX_SHADOWS; i ++ ) {", "vec3 shadowCoord = vShadowCoord[ i ].xyz / vShadowCoord[ i ].w;", "bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );", "bool inFrustum = all( inFrustumVec );", "#ifdef SHADOWMAP_CASCADE", "inFrustumCount += int( inFrustum );", "bvec3 frustumTestVec = bvec3( inFrustum, inFrustumCount == 1, shadowCoord.z <= 1.0 );", "#else", "bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );", "#endif", "bool frustumTest = all( frustumTestVec );", "if ( frustumTest ) {", "shadowCoord.z += shadowBias[ i ];", "#if defined( SHADOWMAP_TYPE_PCF )", "float shadow = 0.0;", "const float shadowDelta = 1.0 / 9.0;", "float xPixelOffset = 1.0 / shadowMapSize[ i ].x;", "float yPixelOffset = 1.0 / shadowMapSize[ i ].y;", "float dx0 = -1.25 * xPixelOffset;", "float dy0 = -1.25 * yPixelOffset;", "float dx1 = 1.25 * xPixelOffset;", "float dy1 = 1.25 * yPixelOffset;", "fDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx0, dy0 ) ) );", "if ( fDepth < shadowCoord.z ) shadow += shadowDelta;", "fDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( 0.0, dy0 ) ) );", "if ( fDepth < shadowCoord.z ) shadow += shadowDelta;", "fDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx1, dy0 ) ) );", "if ( fDepth < shadowCoord.z ) shadow += shadowDelta;", "fDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx0, 0.0 ) ) );", "if ( fDepth < shadowCoord.z ) shadow += shadowDelta;", "fDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy ) );", "if ( fDepth < shadowCoord.z ) shadow += shadowDelta;", "fDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx1, 0.0 ) ) );", "if ( fDepth < shadowCoord.z ) shadow += shadowDelta;", "fDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx0, dy1 ) ) );", "if ( fDepth < shadowCoord.z ) shadow += shadowDelta;", "fDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( 0.0, dy1 ) ) );", "if ( fDepth < shadowCoord.z ) shadow += shadowDelta;", "fDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx1, dy1 ) ) );", "if ( fDepth < shadowCoord.z ) shadow += shadowDelta;", "shadowColor = shadowColor * vec3( ( 1.0 - shadowDarkness[ i ] * shadow ) );", "#elif defined( SHADOWMAP_TYPE_PCF_SOFT )", "float shadow = 0.0;", "float xPixelOffset = 1.0 / shadowMapSize[ i ].x;", "float yPixelOffset = 1.0 / shadowMapSize[ i ].y;", "float dx0 = -1.0 * xPixelOffset;", "float dy0 = -1.0 * yPixelOffset;", "float dx1 = 1.0 * xPixelOffset;", "float dy1 = 1.0 * yPixelOffset;", "mat3 shadowKernel;", "mat3 depthKernel;", "depthKernel[0][0] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx0, dy0 ) ) );", "depthKernel[0][1] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx0, 0.0 ) ) );", "depthKernel[0][2] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx0, dy1 ) ) );", "depthKernel[1][0] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( 0.0, dy0 ) ) );", "depthKernel[1][1] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy ) );", "depthKernel[1][2] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( 0.0, dy1 ) ) );", "depthKernel[2][0] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx1, dy0 ) ) );", "depthKernel[2][1] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx1, 0.0 ) ) );", "depthKernel[2][2] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx1, dy1 ) ) );", "vec3 shadowZ = vec3( shadowCoord.z );", "shadowKernel[0] = vec3(lessThan(depthKernel[0], shadowZ ));", "shadowKernel[0] *= vec3(0.25);", "shadowKernel[1] = vec3(lessThan(depthKernel[1], shadowZ ));", "shadowKernel[1] *= vec3(0.25);", "shadowKernel[2] = vec3(lessThan(depthKernel[2], shadowZ ));", "shadowKernel[2] *= vec3(0.25);", "vec2 fractionalCoord = 1.0 - fract( shadowCoord.xy * shadowMapSize[i].xy );", "shadowKernel[0] = mix( shadowKernel[1], shadowKernel[0], fractionalCoord.x );", "shadowKernel[1] = mix( shadowKernel[2], shadowKernel[1], fractionalCoord.x );", "vec4 shadowValues;", "shadowValues.x = mix( shadowKernel[0][1], shadowKernel[0][0], fractionalCoord.y );", "shadowValues.y = mix( shadowKernel[0][2], shadowKernel[0][1], fractionalCoord.y );", "shadowValues.z = mix( shadowKernel[1][1], shadowKernel[1][0], fractionalCoord.y );", "shadowValues.w = mix( shadowKernel[1][2], shadowKernel[1][1], fractionalCoord.y );", "shadow = dot( shadowValues, vec4( 1.0 ) );", "shadowColor = shadowColor * vec3( ( 1.0 - shadowDarkness[ i ] * shadow ) );", "#else", "vec4 rgbaDepth = texture2D( shadowMap[ i ], shadowCoord.xy );", "float fDepth = unpackDepth( rgbaDepth );", "if ( fDepth < shadowCoord.z )", "shadowColor = shadowColor * vec3( 1.0 - shadowDarkness[ i ] );", "#endif", "}", "#ifdef SHADOWMAP_DEBUG", "#ifdef SHADOWMAP_CASCADE", "if ( inFrustum && inFrustumCount == 1 ) gl_FragColor.xyz *= frustumColors[ i ];", "#else", "if ( inFrustum ) gl_FragColor.xyz *= frustumColors[ i ];", "#endif", "#endif", "}", "#ifdef GAMMA_OUTPUT", "shadowColor *= shadowColor;", "#endif", "gl_FragColor.xyz = gl_FragColor.xyz * shadowColor;", "#endif"].join("\n"),
                    shadowmap_pars_vertex: ["#ifdef USE_SHADOWMAP", "varying vec4 vShadowCoord[ MAX_SHADOWS ];", "uniform mat4 shadowMatrix[ MAX_SHADOWS ];", "#endif"].join("\n"),
                    shadowmap_vertex: ["#ifdef USE_SHADOWMAP", "for( int i = 0; i < MAX_SHADOWS; i ++ ) {", "vShadowCoord[ i ] = shadowMatrix[ i ] * worldPosition;", "}", "#endif"].join("\n"),
                    alphatest_fragment: ["#ifdef ALPHATEST", "if ( gl_FragColor.a < ALPHATEST ) discard;", "#endif"].join("\n"),
                    linear_to_gamma_fragment: ["#ifdef GAMMA_OUTPUT", "gl_FragColor.xyz = sqrt( gl_FragColor.xyz );", "#endif"].join("\n")
                }, a.UniformsUtils = {
                    merge: function(e) {
                        var t, i, r, a = {};
                        for (t = 0; t < e.length; t++)
                            for (i in r = this.clone(e[t])) a[i] = r[i];
                        return a
                    },
                    clone: function(e) {
                        var t, i, r, o = {};
                        for (t in e)
                            for (i in o[t] = {}, e[t])(r = e[t][i]) instanceof a.Color || r instanceof a.Vector2 || r instanceof a.Vector3 || r instanceof a.Vector4 || r instanceof a.Matrix4 || r instanceof a.Texture ? o[t][i] = r.clone() : o[t][i] = r instanceof Array ? r.slice() : r;
                        return o
                    }
                }, a.UniformsLib = {
                    common: {
                        diffuse: {
                            type: "c",
                            value: new a.Color(15658734)
                        },
                        opacity: {
                            type: "f",
                            value: 1
                        },
                        map: {
                            type: "t",
                            value: null
                        },
                        offsetRepeat: {
                            type: "v4",
                            value: new a.Vector4(0, 0, 1, 1)
                        },
                        gainBrightness: {
                            type: "v4",
                            value: new a.Vector4(0, 1, 0, 1)
                        },
                        lightMap: {
                            type: "t",
                            value: null
                        },
                        emissiveMap: {
                            type: "t",
                            value: null
                        },
                        envMap: {
                            type: "t",
                            value: null
                        },
                        envEncoding: {
                            type: "i",
                            value: 0
                        },
                        diffuseEnvMap: {
                            type: "t",
                            value: null
                        },
                        diffuseEnvEncoding: {
                            type: "i",
                            value: 0
                        },
                        flipEnvMap: {
                            type: "f",
                            value: -1
                        },
                        useRefract: {
                            type: "i",
                            value: 0
                        },
                        reflectivity: {
                            type: "f",
                            value: 1
                        },
                        refractionRatio: {
                            type: "f",
                            value: .98
                        },
                        combine: {
                            type: "i",
                            value: 0
                        },
                        morphTargetInfluences: {
                            type: "f",
                            value: 0
                        }
                    },
                    specularmap: {
                        specularMap: {
                            type: "t",
                            value: null
                        },
                        specularOffsetRepeat: {
                            type: "v4",
                            value: new a.Vector4(0, 0, 1, 1)
                        },
                        specularGainBrightness: {
                            type: "v4",
                            value: new a.Vector4(0, 1, 0, 1)
                        }
                    },
                    bumpmap: {
                        bumpMap: {
                            type: "t",
                            value: null
                        },
                        bumpScale: {
                            type: "f",
                            value: 1
                        },
                        bumpOffsetRepeat: {
                            type: "v4",
                            value: new a.Vector4(0, 0, 1, 1)
                        }
                    },
                    opacitymap: {
                        opacityMap: {
                            type: "t",
                            value: null
                        },
                        opacityOffsetRepeat: {
                            type: "v4",
                            value: new a.Vector4(0, 0, 1, 1)
                        },
                        opacityGainBrightness: {
                            type: "v4",
                            value: new a.Vector4(0, 1, 0, 1)
                        }
                    },
                    normalmap: {
                        normalMap: {
                            type: "t",
                            value: null
                        },
                        normalScale: {
                            type: "v2",
                            value: new a.Vector2(1, 1)
                        },
                        normalOffsetRepeat: {
                            type: "v4",
                            value: new a.Vector4(0, 0, 1, 1)
                        }
                    },
                    fog: {
                        fogDensity: {
                            type: "f",
                            value: 25e-5
                        },
                        fogNear: {
                            type: "f",
                            value: 1
                        },
                        fogFar: {
                            type: "f",
                            value: 2e3
                        },
                        fogColor: {
                            type: "c",
                            value: new a.Color(16777215)
                        }
                    },
                    lights: {
                        ambientLightColor: {
                            type: "fv",
                            value: []
                        },
                        directionalLightDirection: {
                            type: "fv",
                            value: []
                        },
                        directionalLightColor: {
                            type: "fv",
                            value: []
                        },
                        hemisphereLightDirection: {
                            type: "fv",
                            value: []
                        },
                        hemisphereLightSkyColor: {
                            type: "fv",
                            value: []
                        },
                        hemisphereLightGroundColor: {
                            type: "fv",
                            value: []
                        },
                        pointLightColor: {
                            type: "fv",
                            value: []
                        },
                        pointLightPosition: {
                            type: "fv",
                            value: []
                        },
                        pointLightDistance: {
                            type: "fv1",
                            value: []
                        },
                        pointLightDecayExponent: {
                            type: "fv1",
                            value: []
                        },
                        spotLightColor: {
                            type: "fv",
                            value: []
                        },
                        spotLightPosition: {
                            type: "fv",
                            value: []
                        },
                        spotLightDirection: {
                            type: "fv",
                            value: []
                        },
                        spotLightDistance: {
                            type: "fv1",
                            value: []
                        },
                        spotLightDecayExponent: {
                            type: "fv1",
                            value: []
                        },
                        spotLightAngleCos: {
                            type: "fv1",
                            value: []
                        },
                        spotLightExponent: {
                            type: "fv1",
                            value: []
                        },
                        areaLightColor: {
                            type: "fv",
                            value: []
                        },
                        areaLightPosition: {
                            type: "fv",
                            value: []
                        },
                        areaLightDistance: {
                            type: "fv1",
                            value: []
                        },
                        areaLightDecayExponent: {
                            type: "fv1",
                            value: []
                        },
                        areaLightWidth: {
                            type: "fv",
                            value: []
                        },
                        areaLightHeight: {
                            type: "fv",
                            value: []
                        }
                    },
                    particle: {
                        psColor: {
                            type: "c",
                            value: new a.Color(15658734)
                        },
                        opacity: {
                            type: "f",
                            value: 1
                        },
                        size: {
                            type: "f",
                            value: 1
                        },
                        scale: {
                            type: "f",
                            value: 1
                        },
                        map: {
                            type: "t",
                            value: null
                        },
                        fogDensity: {
                            type: "f",
                            value: 25e-5
                        },
                        fogNear: {
                            type: "f",
                            value: 1
                        },
                        fogFar: {
                            type: "f",
                            value: 2e3
                        },
                        fogColor: {
                            type: "c",
                            value: new a.Color(16777215)
                        }
                    },
                    shadowmap: {
                        shadowMap: {
                            type: "tv",
                            value: []
                        },
                        shadowMapSize: {
                            type: "v2v",
                            value: []
                        },
                        shadowBias: {
                            type: "fv1",
                            value: []
                        },
                        shadowDarkness: {
                            type: "fv1",
                            value: []
                        },
                        shadowMatrix: {
                            type: "m4v",
                            value: []
                        }
                    }
                }, a.ShaderLib = {
                    physical: {
                        uniforms: a.UniformsUtils.merge([a.UniformsLib.common, a.UniformsLib.bumpmap, a.UniformsLib.normalmap, a.UniformsLib.fog, a.UniformsLib.lights, a.UniformsLib.shadowmap, a.UniformsLib.opacitymap, a.UniformsLib.specularmap, {
                            ambient: {
                                type: "c",
                                value: new a.Color(16777215)
                            },
                            emissive: {
                                type: "c",
                                value: new a.Color(0)
                            },
                            specular: {
                                type: "c",
                                value: new a.Color(16777215)
                            },
                            falloffColor: {
                                type: "c",
                                value: new a.Color(16777215)
                            },
                            falloffMap: {
                                type: "t",
                                value: null
                            },
                            falloffBlendParams: {
                                type: "v4",
                                value: new a.Vector4(1, 0, 0, 1)
                            },
                            clearCoat: {
                                type: "f",
                                value: 0
                            },
                            clearCoatRoughness: {
                                type: "f",
                                value: .25
                            },
                            roughness: {
                                type: "f",
                                value: .5
                            },
                            roughnessMap: {
                                type: "t",
                                value: null
                            },
                            roughnessOffsetRepeat: {
                                type: "v4",
                                value: new a.Vector4(0, 0, 1, 1)
                            },
                            roughnessGainBrightness: {
                                type: "v4",
                                value: new a.Vector4(0, 1, 0, 1)
                            },
                            metallic: {
                                type: "f",
                                value: .5
                            },
                            metallicMap: {
                                type: "t",
                                value: null
                            },
                            metallicOffsetRepeat: {
                                type: "v4",
                                value: new a.Vector4(0, 0, 1, 1)
                            },
                            metallicGainBrightness: {
                                type: "v4",
                                value: new a.Vector4(0, 1, 0, 1)
                            },
                            anisotropy: {
                                type: "f",
                                value: 0
                            },
                            anisotropyMap: {
                                type: "t",
                                value: null
                            },
                            anisotropyOffsetRepeat: {
                                type: "v4",
                                value: new a.Vector4(0, 0, 1, 1)
                            },
                            anisotropyGainBrightness: {
                                type: "v4",
                                value: new a.Vector4(0, 1, 0, 1)
                            },
                            anisotropyRotation: {
                                type: "f",
                                value: 0
                            },
                            anisotropyRotationMap: {
                                type: "t",
                                value: null
                            },
                            anisotropyRotationOffsetRepeat: {
                                type: "v4",
                                value: new a.Vector4(0, 0, 1, 1)
                            },
                            anisotropyRotationGainBrightness: {
                                type: "v4",
                                value: new a.Vector4(0, 1, 0, 1)
                            },
                            translucency: {
                                type: "c",
                                value: new a.Color(0)
                            },
                            translucencyMap: {
                                type: "t",
                                value: null
                            },
                            translucencyNormalAlpha: {
                                type: "f",
                                value: .75
                            },
                            translucencyNormalPower: {
                                type: "f",
                                value: 2
                            },
                            translucencyViewAlpha: {
                                type: "f",
                                value: .75
                            },
                            translucencyViewPower: {
                                type: "f",
                                value: 2
                            }
                        }]),
                        vertexShader: ["attribute vec4 tangent;", "#define PHONG", "#define PHYSICAL", "varying vec3 vViewPosition;", "varying vec3 vTangent;", "varying vec3 vBinormal;", "varying vec3 vNormal;", a.ShaderChunk.common, a.ShaderChunk.map_pars_vertex, a.ShaderChunk.normalmap_pars_vertex, a.ShaderChunk.roughnessmap_pars_vertex, a.ShaderChunk.specularmap_pars_vertex, a.ShaderChunk.opacitymap_pars_vertex, a.ShaderChunk.anisotropymap_pars_vertex, a.ShaderChunk.anisotropyrotationmap_pars_vertex, a.ShaderChunk.metallicmap_pars_vertex, a.ShaderChunk.translucencymap_pars_vertex, a.ShaderChunk.bumpmap_pars_vertex, a.ShaderChunk.lightmap_pars_vertex, a.ShaderChunk.lights_physical_pars_vertex, a.ShaderChunk.color_pars_vertex, a.ShaderChunk.morphtarget_pars_vertex, a.ShaderChunk.skinning_pars_vertex, a.ShaderChunk.shadowmap_pars_vertex, "void main() {", a.ShaderChunk.map_vertex, a.ShaderChunk.normalmap_vertex, a.ShaderChunk.roughnessmap_vertex, a.ShaderChunk.opacitymap_vertex, a.ShaderChunk.specularmap_vertex, a.ShaderChunk.anisotropymap_vertex, a.ShaderChunk.anisotropyrotationmap_vertex, a.ShaderChunk.metallicmap_vertex, a.ShaderChunk.translucencymap_vertex, a.ShaderChunk.bumpmap_vertex, a.ShaderChunk.lightmap_vertex, a.ShaderChunk.color_vertex, a.ShaderChunk.morphnormal_vertex, a.ShaderChunk.skinbase_vertex, a.ShaderChunk.skinnormal_vertex, a.ShaderChunk.defaultnormal_vertex, "vNormal = normalize( transformedNormal );", a.ShaderChunk.morphtarget_vertex, a.ShaderChunk.skinning_vertex, a.ShaderChunk.default_vertex, "vViewPosition = -mvPosition.xyz;", a.ShaderChunk.worldpos_vertex, a.ShaderChunk.lights_physical_vertex, a.ShaderChunk.shadowmap_vertex, "}"].join("\n"),
                        fragmentShader: ["#ifdef TEXTURE_CUBE_LOD_EXT", "#extension GL_EXT_shader_texture_lod : enable", "#endif", "#define PHYSICAL", "uniform vec3 diffuse;", "uniform float opacity;", "uniform vec3 ambient;", "uniform vec3 emissive;", "uniform vec3 falloffColor;", "uniform vec4 falloffBlendParams;", "uniform vec3 specular;", "uniform float roughness;", "uniform float metallic;", "uniform float clearCoat;", "uniform float clearCoatRoughness;", "uniform vec3 translucency;", "uniform float translucencyNormalAlpha;", "uniform float translucencyNormalPower;", "uniform float translucencyViewPower;", "uniform float translucencyViewAlpha;", "uniform float anisotropy;", "uniform float anisotropyRotation;", a.ShaderChunk.common, a.ShaderChunk.color_pars_fragment, a.ShaderChunk.map_pars_fragment, a.ShaderChunk.falloffmap_pars_fragment, a.ShaderChunk.opacitymap_pars_fragment, a.ShaderChunk.translucencymap_pars_fragment, a.ShaderChunk.lightmap_pars_fragment, a.ShaderChunk.envmap_pars_fragment, a.ShaderChunk.diffuseenvmap_pars_fragment, a.ShaderChunk.fog_pars_fragment, a.ShaderChunk.lights_physical_pars_fragment, a.ShaderChunk.shadowmap_pars_fragment, a.ShaderChunk.bumpmap_pars_fragment, a.ShaderChunk.normalmap_pars_fragment, a.ShaderChunk.specularmap_pars_fragment, a.ShaderChunk.anisotropymap_pars_fragment, a.ShaderChunk.anisotropyrotationmap_pars_fragment, a.ShaderChunk.metallicmap_pars_fragment, a.ShaderChunk.roughnessmap_pars_fragment, a.ShaderChunk.reflectivitymap_pars_fragment, a.ShaderChunk.lightattenuation_func_fragment, "void main() {", "gl_FragColor = vec4( vec3 ( 0.0 ), opacity );", "vec3 diffuseColor = diffuse;", "vec3 translucencyColor = translucency;", "vec3 normal = normalize( vNormal );", "vec3 viewDirection = normalize( vViewPosition );", a.ShaderChunk.map_fragment, a.ShaderChunk.opacitymap_fragment, a.ShaderChunk.alphatest_fragment, a.ShaderChunk.specularmap_fragment, a.ShaderChunk.anisotropymap_fragment, a.ShaderChunk.anisotropyrotationmap_fragment, a.ShaderChunk.roughnessmap_fragment, a.ShaderChunk.metallicmap_fragment, a.ShaderChunk.translucencymap_fragment, a.ShaderChunk.reflectivitymap_fragment, a.ShaderChunk.lights_physical_fragment, a.ShaderChunk.lightmap_fragment, a.ShaderChunk.color_fragment, a.ShaderChunk.envmap_fragment, a.ShaderChunk.shadowmap_fragment, a.ShaderChunk.linear_to_gamma_fragment, a.ShaderChunk.fog_fragment, "gl_FragColor.xyz *= gl_FragColor.w;", "}"].join("\n")
                    },
                    basic: {
                        uniforms: a.UniformsUtils.merge([a.UniformsLib.common, a.UniformsLib.fog, a.UniformsLib.shadowmap]),
                        vertexShader: [a.ShaderChunk.common, a.ShaderChunk.map_pars_vertex, a.ShaderChunk.lightmap_pars_vertex, a.ShaderChunk.color_pars_vertex, a.ShaderChunk.morphtarget_pars_vertex, a.ShaderChunk.skinning_pars_vertex, a.ShaderChunk.shadowmap_pars_vertex, "void main() {", a.ShaderChunk.map_vertex, a.ShaderChunk.lightmap_vertex, a.ShaderChunk.color_vertex, a.ShaderChunk.skinbase_vertex, "#ifdef USE_ENVMAP", a.ShaderChunk.morphnormal_vertex, a.ShaderChunk.skinnormal_vertex, a.ShaderChunk.defaultnormal_vertex, "#endif", a.ShaderChunk.morphtarget_vertex, a.ShaderChunk.skinning_vertex, a.ShaderChunk.default_vertex, a.ShaderChunk.worldpos_vertex, a.ShaderChunk.shadowmap_vertex, "}"].join("\n"),
                        fragmentShader: ["uniform vec3 diffuse;", "uniform float opacity;", a.ShaderChunk.common, a.ShaderChunk.color_pars_fragment, a.ShaderChunk.map_pars_fragment, a.ShaderChunk.lightmap_pars_fragment, a.ShaderChunk.envmap_pars_fragment, a.ShaderChunk.fog_pars_fragment, a.ShaderChunk.shadowmap_pars_fragment, a.ShaderChunk.specularmap_pars_fragment, "void main() {", "gl_FragColor = vec4( diffuse, opacity );", a.ShaderChunk.map_fragment, a.ShaderChunk.alphatest_fragment, a.ShaderChunk.specularmap_fragment, a.ShaderChunk.lightmap_fragment, a.ShaderChunk.color_fragment, a.ShaderChunk.envmap_fragment, a.ShaderChunk.shadowmap_fragment, a.ShaderChunk.linear_to_gamma_fragment, a.ShaderChunk.fog_fragment, "}"].join("\n")
                    },
                    lambert: {
                        uniforms: a.UniformsUtils.merge([a.UniformsLib.common, a.UniformsLib.fog, a.UniformsLib.lights, a.UniformsLib.shadowmap, {
                            ambient: {
                                type: "c",
                                value: new a.Color(16777215)
                            },
                            emissive: {
                                type: "c",
                                value: new a.Color(0)
                            },
                            wrapRGB: {
                                type: "v3",
                                value: new a.Vector3(1, 1, 1)
                            }
                        }]),
                        vertexShader: ["#define LAMBERT", "varying vec3 vLightFront;", "#ifdef DOUBLE_SIDED", "varying vec3 vLightBack;", "#endif", a.ShaderChunk.common, a.ShaderChunk.map_pars_vertex, a.ShaderChunk.lightmap_pars_vertex, a.ShaderChunk.lights_lambert_pars_vertex, a.ShaderChunk.color_pars_vertex, a.ShaderChunk.morphtarget_pars_vertex, a.ShaderChunk.skinning_pars_vertex, a.ShaderChunk.shadowmap_pars_vertex, a.ShaderChunk.lightattenuation_func_fragment, "void main() {", a.ShaderChunk.map_vertex, a.ShaderChunk.lightmap_vertex, a.ShaderChunk.color_vertex, a.ShaderChunk.morphnormal_vertex, a.ShaderChunk.skinbase_vertex, a.ShaderChunk.skinnormal_vertex, a.ShaderChunk.defaultnormal_vertex, a.ShaderChunk.morphtarget_vertex, a.ShaderChunk.skinning_vertex, a.ShaderChunk.default_vertex, a.ShaderChunk.worldpos_vertex, a.ShaderChunk.lights_lambert_vertex, a.ShaderChunk.shadowmap_vertex, "}"].join("\n"),
                        fragmentShader: ["uniform float opacity;", "varying vec3 vLightFront;", "#ifdef DOUBLE_SIDED", "varying vec3 vLightBack;", "#endif", a.ShaderChunk.common, a.ShaderChunk.color_pars_fragment, a.ShaderChunk.map_pars_fragment, a.ShaderChunk.lightmap_pars_fragment, a.ShaderChunk.envmap_pars_fragment, a.ShaderChunk.fog_pars_fragment, a.ShaderChunk.shadowmap_pars_fragment, a.ShaderChunk.specularmap_pars_fragment, "void main() {", "gl_FragColor = vec4( vec3 ( 1.0 ), opacity );", a.ShaderChunk.map_fragment, a.ShaderChunk.alphatest_fragment, a.ShaderChunk.specularmap_fragment, "#ifdef DOUBLE_SIDED", "if ( gl_FrontFacing )", "gl_FragColor.xyz *= vLightFront;", "else", "gl_FragColor.xyz *= vLightBack;", "#else", "gl_FragColor.xyz *= vLightFront;", "#endif", a.ShaderChunk.lightmap_fragment, a.ShaderChunk.color_fragment, a.ShaderChunk.envmap_fragment, a.ShaderChunk.shadowmap_fragment, a.ShaderChunk.linear_to_gamma_fragment, a.ShaderChunk.fog_fragment, "}"].join("\n")
                    },
                    phong: {
                        uniforms: a.UniformsUtils.merge([a.UniformsLib.common, a.UniformsLib.bumpmap, a.UniformsLib.normalmap, a.UniformsLib.specularmap, a.UniformsLib.fog, a.UniformsLib.lights, a.UniformsLib.shadowmap, a.UniformsLib.opacitymap, {
                            ambient: {
                                type: "c",
                                value: new a.Color(16777215)
                            },
                            emissive: {
                                type: "c",
                                value: new a.Color(0)
                            },
                            specular: {
                                type: "c",
                                value: new a.Color(1118481)
                            },
                            shininess: {
                                type: "f",
                                value: 30
                            },
                            wrapRGB: {
                                type: "v3",
                                value: new a.Vector3(1, 1, 1)
                            }
                        }]),
                        vertexShader: ["#define PHONG", "varying vec3 vViewPosition;", "varying vec3 vNormal;", a.ShaderChunk.common, a.ShaderChunk.map_pars_vertex, a.ShaderChunk.normalmap_pars_vertex, a.ShaderChunk.bumpmap_pars_vertex, a.ShaderChunk.specularmap_pars_vertex, a.ShaderChunk.opacitymap_pars_vertex, a.ShaderChunk.lightmap_pars_vertex, a.ShaderChunk.lights_phong_pars_vertex, a.ShaderChunk.color_pars_vertex, a.ShaderChunk.morphtarget_pars_vertex, a.ShaderChunk.skinning_pars_vertex, a.ShaderChunk.shadowmap_pars_vertex, "void main() {", a.ShaderChunk.map_vertex, a.ShaderChunk.normalmap_vertex, a.ShaderChunk.bumpmap_vertex, a.ShaderChunk.opacitymap_vertex, a.ShaderChunk.specularmap_vertex, a.ShaderChunk.lightmap_vertex, a.ShaderChunk.color_vertex, a.ShaderChunk.morphnormal_vertex, a.ShaderChunk.skinbase_vertex, a.ShaderChunk.skinnormal_vertex, a.ShaderChunk.defaultnormal_vertex, "vNormal = normalize( transformedNormal );", a.ShaderChunk.morphtarget_vertex, a.ShaderChunk.skinning_vertex, a.ShaderChunk.default_vertex, "vViewPosition = -mvPosition.xyz;", a.ShaderChunk.worldpos_vertex, a.ShaderChunk.lights_phong_vertex, a.ShaderChunk.shadowmap_vertex, "}"].join("\n"),
                        fragmentShader: ["#define PHONG", "uniform vec3 diffuse;", "uniform float opacity;", "uniform vec3 ambient;", "uniform vec3 emissive;", "uniform vec3 specular;", "uniform float shininess;", a.ShaderChunk.common, a.ShaderChunk.color_pars_fragment, a.ShaderChunk.map_pars_fragment, a.ShaderChunk.opacitymap_pars_fragment, a.ShaderChunk.lightmap_pars_fragment, a.ShaderChunk.envmap_pars_fragment, a.ShaderChunk.fog_pars_fragment, a.ShaderChunk.lights_phong_pars_fragment, a.ShaderChunk.shadowmap_pars_fragment, a.ShaderChunk.bumpmap_pars_fragment, a.ShaderChunk.normalmap_pars_fragment, a.ShaderChunk.specularmap_pars_fragment, a.ShaderChunk.lightattenuation_func_fragment, "void main() {", "gl_FragColor = vec4( vec3 ( 1.0 ), opacity );", "vec3 diffuseColor = diffuse;", a.ShaderChunk.map_fragment, a.ShaderChunk.opacitymap_fragment, a.ShaderChunk.alphatest_fragment, a.ShaderChunk.specularmap_fragment, a.ShaderChunk.lights_phong_fragment, a.ShaderChunk.lightmap_fragment, a.ShaderChunk.color_fragment, a.ShaderChunk.envmap_fragment, a.ShaderChunk.shadowmap_fragment, a.ShaderChunk.linear_to_gamma_fragment, a.ShaderChunk.fog_fragment, "}"].join("\n")
                    },
                    particle_basic: {
                        uniforms: a.UniformsUtils.merge([a.UniformsLib.particle, a.UniformsLib.shadowmap]),
                        vertexShader: ["uniform float size;", "uniform float scale;", a.ShaderChunk.common, a.ShaderChunk.color_pars_vertex, a.ShaderChunk.shadowmap_pars_vertex, "void main() {", a.ShaderChunk.color_vertex, "vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );", "#ifdef USE_SIZEATTENUATION", "gl_PointSize = size * ( scale / length( mvPosition.xyz ) );", "#else", "gl_PointSize = size;", "#endif", "gl_Position = projectionMatrix * mvPosition;", a.ShaderChunk.worldpos_vertex, a.ShaderChunk.shadowmap_vertex, "}"].join("\n"),
                        fragmentShader: ["uniform vec3 psColor;", "uniform float opacity;", a.ShaderChunk.common, a.ShaderChunk.color_pars_fragment, a.ShaderChunk.map_particle_pars_fragment, a.ShaderChunk.fog_pars_fragment, a.ShaderChunk.shadowmap_pars_fragment, "void main() {", "gl_FragColor = vec4( psColor, opacity );", a.ShaderChunk.map_particle_fragment, a.ShaderChunk.alphatest_fragment, a.ShaderChunk.color_fragment, a.ShaderChunk.shadowmap_fragment, a.ShaderChunk.fog_fragment, "}"].join("\n")
                    },
                    dashed: {
                        uniforms: a.UniformsUtils.merge([a.UniformsLib.common, a.UniformsLib.fog, {
                            scale: {
                                type: "f",
                                value: 1
                            },
                            dashSize: {
                                type: "f",
                                value: 1
                            },
                            totalSize: {
                                type: "f",
                                value: 2
                            }
                        }]),
                        vertexShader: ["uniform float scale;", "attribute float lineDistance;", "varying float vLineDistance;", a.ShaderChunk.common, a.ShaderChunk.color_pars_vertex, "void main() {", a.ShaderChunk.color_vertex, "vLineDistance = scale * lineDistance;", "vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );", "gl_Position = projectionMatrix * mvPosition;", "}"].join("\n"),
                        fragmentShader: ["uniform vec3 diffuse;", "uniform float opacity;", "uniform float dashSize;", "uniform float totalSize;", "varying float vLineDistance;", a.ShaderChunk.common, a.ShaderChunk.color_pars_fragment, a.ShaderChunk.fog_pars_fragment, "void main() {", "if ( mod( vLineDistance, totalSize ) > dashSize ) {", "discard;", "}", "gl_FragColor = vec4( diffuse, opacity );", a.ShaderChunk.color_fragment, a.ShaderChunk.fog_fragment, "}"].join("\n")
                    },
                    depth: {
                        uniforms: {
                            mNear: {
                                type: "f",
                                value: 1
                            },
                            mFar: {
                                type: "f",
                                value: 2e3
                            },
                            opacity: {
                                type: "f",
                                value: 1
                            }
                        },
                        vertexShader: ["void main() {", "gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );", "}"].join("\n"),
                        fragmentShader: ["uniform float mNear;", "uniform float mFar;", "uniform float opacity;", "void main() {", "float depth = gl_FragCoord.z / gl_FragCoord.w;", "float color = clamp( ( depth - mNear ) / ( mFar - mNear ), 0.0, 1.0 );", "gl_FragColor = vec4( vec3( color ), opacity );", "}"].join("\n")
                    },
                    normal: {
                        uniforms: {
                            opacity: {
                                type: "f",
                                value: 1
                            }
                        },
                        vertexShader: ["varying vec3 vNormal;", a.ShaderChunk.common, a.ShaderChunk.morphtarget_pars_vertex, "void main() {", "vNormal = normalize( normalMatrix * normal );", a.ShaderChunk.morphtarget_vertex, a.ShaderChunk.default_vertex, "}"].join("\n"),
                        fragmentShader: ["uniform float opacity;", "varying vec3 vNormal;", "void main() {", "gl_FragColor = vec4( 0.5 * normalize( vNormal ) + 0.5, opacity );", "}"].join("\n")
                    },
                    normalmap: {
                        uniforms: a.UniformsUtils.merge([a.UniformsLib.fog, a.UniformsLib.lights, a.UniformsLib.shadowmap, {
                            enableAO: {
                                type: "i",
                                value: 0
                            },
                            enableDiffuse: {
                                type: "i",
                                value: 0
                            },
                            enableSpecular: {
                                type: "i",
                                value: 0
                            },
                            enableReflection: {
                                type: "i",
                                value: 0
                            },
                            enableDisplacement: {
                                type: "i",
                                value: 0
                            },
                            tDisplacement: {
                                type: "t",
                                value: null
                            },
                            tDiffuse: {
                                type: "t",
                                value: null
                            },
                            tCube: {
                                type: "t",
                                value: null
                            },
                            tNormal: {
                                type: "t",
                                value: null
                            },
                            tSpecular: {
                                type: "t",
                                value: null
                            },
                            tAO: {
                                type: "t",
                                value: null
                            },
                            uNormalScale: {
                                type: "v2",
                                value: new a.Vector2(1, 1)
                            },
                            uDisplacementBias: {
                                type: "f",
                                value: 0
                            },
                            uDisplacementScale: {
                                type: "f",
                                value: 1
                            },
                            diffuse: {
                                type: "c",
                                value: new a.Color(16777215)
                            },
                            specular: {
                                type: "c",
                                value: new a.Color(1118481)
                            },
                            ambient: {
                                type: "c",
                                value: new a.Color(16777215)
                            },
                            shininess: {
                                type: "f",
                                value: 30
                            },
                            opacity: {
                                type: "f",
                                value: 1
                            },
                            useRefract: {
                                type: "i",
                                value: 0
                            },
                            refractionRatio: {
                                type: "f",
                                value: .98
                            },
                            reflectivity: {
                                type: "f",
                                value: .5
                            },
                            uOffset: {
                                type: "v2",
                                value: new a.Vector2(0, 0)
                            },
                            uRepeat: {
                                type: "v2",
                                value: new a.Vector2(1, 1)
                            },
                            wrapRGB: {
                                type: "v3",
                                value: new a.Vector3(1, 1, 1)
                            }
                        }]),
                        fragmentShader: ["uniform vec3 ambient;", "uniform vec3 diffuse;", "uniform vec3 specular;", "uniform float shininess;", "uniform float opacity;", "uniform bool enableDiffuse;", "uniform bool enableSpecular;", "uniform bool enableAO;", "uniform bool enableReflection;", "uniform sampler2D tDiffuse;", "uniform sampler2D tNormal;", "uniform sampler2D tSpecular;", "uniform sampler2D tAO;", "uniform samplerCube tCube;", "uniform vec2 uNormalScale;", "uniform bool useRefract;", "uniform float refractionRatio;", "uniform float reflectivity;", "varying vec3 vTangent;", "varying vec3 vBinormal;", "varying vec3 vNormal;", "varying vec2 vUv;", "uniform vec3 ambientLightColor;", "#if MAX_DIR_LIGHTS > 0", "uniform vec3 directionalLightColor[ MAX_DIR_LIGHTS ];", "uniform vec3 directionalLightDirection[ MAX_DIR_LIGHTS ];", "#endif", "#if MAX_HEMI_LIGHTS > 0", "uniform vec3 hemisphereLightSkyColor[ MAX_HEMI_LIGHTS ];", "uniform vec3 hemisphereLightGroundColor[ MAX_HEMI_LIGHTS ];", "uniform vec3 hemisphereLightDirection[ MAX_HEMI_LIGHTS ];", "#endif", "#if MAX_POINT_LIGHTS > 0", "uniform vec3 pointLightColor[ MAX_POINT_LIGHTS ];", "uniform vec3 pointLightPosition[ MAX_POINT_LIGHTS ];", "uniform float pointLightDistance[ MAX_POINT_LIGHTS ];", "#endif", "#if MAX_SPOT_LIGHTS > 0", "uniform vec3 spotLightColor[ MAX_SPOT_LIGHTS ];", "uniform vec3 spotLightPosition[ MAX_SPOT_LIGHTS ];", "uniform vec3 spotLightDirection[ MAX_SPOT_LIGHTS ];", "uniform float spotLightAngleCos[ MAX_SPOT_LIGHTS ];", "uniform float spotLightExponent[ MAX_SPOT_LIGHTS ];", "uniform float spotLightDistance[ MAX_SPOT_LIGHTS ];", "#endif", "#ifdef WRAP_AROUND", "uniform vec3 wrapRGB;", "#endif", "varying vec3 vWorldPosition;", "varying vec3 vViewPosition;", a.ShaderChunk.common, a.ShaderChunk.shadowmap_pars_fragment, a.ShaderChunk.fog_pars_fragment, "void main() {", "gl_FragColor = vec4( vec3( 1.0 ), opacity );", "vec3 specularTex = vec3( 1.0 );", "vec3 normalTex = texture2D( tNormal, vUv ).xyz * 2.0 - 1.0;", "normalTex.xy *= uNormalScale;", "normalTex = normalize( normalTex );", "if( enableDiffuse ) {", "#ifdef GAMMA_INPUT", "vec4 texelColor = texture2D( tDiffuse, vUv );", "texelColor.xyz *= texelColor.xyz;", "gl_FragColor = gl_FragColor * texelColor;", "#else", "gl_FragColor = gl_FragColor * texture2D( tDiffuse, vUv );", "#endif", "}", "if( enableAO ) {", "#ifdef GAMMA_INPUT", "vec4 aoColor = texture2D( tAO, vUv );", "aoColor.xyz *= aoColor.xyz;", "gl_FragColor.xyz = gl_FragColor.xyz * aoColor.xyz;", "#else", "gl_FragColor.xyz = gl_FragColor.xyz * texture2D( tAO, vUv ).xyz;", "#endif", "}", "if( enableSpecular )", "specularTex = texture2D( tSpecular, vUv ).xyz;", "mat3 tsb = mat3( normalize( vTangent ), normalize( vBinormal ), normalize( vNormal ) );", "vec3 finalNormal = tsb * normalTex;", "#ifdef FLIP_SIDED", "finalNormal = -finalNormal;", "#endif", "vec3 normal = normalize( finalNormal );", "vec3 viewDirection = normalize( vViewPosition );", "#if MAX_POINT_LIGHTS > 0", "vec3 pointDiffuse = vec3( 0.0 );", "vec3 pointSpecular = vec3( 0.0 );", "for ( int i = 0; i < MAX_POINT_LIGHTS; i ++ ) {", "vec4 lPosition = viewMatrix * vec4( pointLightPosition[ i ], 1.0 );", "vec3 pointVector = lPosition.xyz + vViewPosition.xyz;", "float pointDistance = 1.0;", "if ( pointLightDistance[ i ] > 0.0 )", "pointDistance = 1.0 - min( ( length( pointVector ) / pointLightDistance[ i ] ), 1.0 );", "pointVector = normalize( pointVector );", "#ifdef WRAP_AROUND", "float pointDiffuseWeightFull = max( dot( normal, pointVector ), 0.0 );", "float pointDiffuseWeightHalf = max( 0.5 * dot( normal, pointVector ) + 0.5, 0.0 );", "vec3 pointDiffuseWeight = mix( vec3 ( pointDiffuseWeightFull ), vec3( pointDiffuseWeightHalf ), wrapRGB );", "#else", "float pointDiffuseWeight = max( dot( normal, pointVector ), 0.0 );", "#endif", "pointDiffuse += pointDistance * pointLightColor[ i ] * diffuse * pointDiffuseWeight;", "vec3 pointHalfVector = normalize( pointVector + viewDirection );", "float pointDotNormalHalf = max( dot( normal, pointHalfVector ), 0.0 );", "float pointSpecularWeight = specularTex.r * max( pow( pointDotNormalHalf, shininess ), 0.0 );", "float specularNormalization = ( shininess + 2.0001 ) / 8.0;", "vec3 schlick = specular + vec3( 1.0 - specular ) * pow( 1.0 - dot( pointVector, pointHalfVector ), 5.0 );", "pointSpecular += schlick * pointLightColor[ i ] * pointSpecularWeight * pointDiffuseWeight * pointDistance * specularNormalization;", "}", "#endif", "#if MAX_SPOT_LIGHTS > 0", "vec3 spotDiffuse = vec3( 0.0 );", "vec3 spotSpecular = vec3( 0.0 );", "for ( int i = 0; i < MAX_SPOT_LIGHTS; i ++ ) {", "vec4 lPosition = viewMatrix * vec4( spotLightPosition[ i ], 1.0 );", "vec3 spotVector = lPosition.xyz + vViewPosition.xyz;", "float spotDistance = 1.0;", "if ( spotLightDistance[ i ] > 0.0 )", "spotDistance = 1.0 - min( ( length( spotVector ) / spotLightDistance[ i ] ), 1.0 );", "spotVector = normalize( spotVector );", "float spotEffect = dot( spotLightDirection[ i ], normalize( spotLightPosition[ i ] - vWorldPosition ) );", "if ( spotEffect > spotLightAngleCos[ i ] ) {", "spotEffect = max( pow( spotEffect, spotLightExponent[ i ] ), 0.0 );", "#ifdef WRAP_AROUND", "float spotDiffuseWeightFull = max( dot( normal, spotVector ), 0.0 );", "float spotDiffuseWeightHalf = max( 0.5 * dot( normal, spotVector ) + 0.5, 0.0 );", "vec3 spotDiffuseWeight = mix( vec3 ( spotDiffuseWeightFull ), vec3( spotDiffuseWeightHalf ), wrapRGB );", "#else", "float spotDiffuseWeight = max( dot( normal, spotVector ), 0.0 );", "#endif", "spotDiffuse += spotDistance * spotLightColor[ i ] * diffuse * spotDiffuseWeight * spotEffect;", "vec3 spotHalfVector = normalize( spotVector + viewDirection );", "float spotDotNormalHalf = max( dot( normal, spotHalfVector ), 0.0 );", "float spotSpecularWeight = specularTex.r * max( pow( spotDotNormalHalf, shininess ), 0.0 );", "float specularNormalization = ( shininess + 2.0001 ) / 8.0;", "vec3 schlick = specular + vec3( 1.0 - specular ) * pow( 1.0 - dot( spotVector, spotHalfVector ), 5.0 );", "spotSpecular += schlick * spotLightColor[ i ] * spotSpecularWeight * spotDiffuseWeight * spotDistance * specularNormalization * spotEffect;", "}", "}", "#endif", "#if MAX_DIR_LIGHTS > 0", "vec3 dirDiffuse = vec3( 0.0 );", "vec3 dirSpecular = vec3( 0.0 );", "for( int i = 0; i < MAX_DIR_LIGHTS; i++ ) {", "vec4 lDirection = viewMatrix * vec4( directionalLightDirection[ i ], 0.0 );", "vec3 dirVector = normalize( lDirection.xyz );", "#ifdef WRAP_AROUND", "float directionalLightWeightingFull = max( dot( normal, dirVector ), 0.0 );", "float directionalLightWeightingHalf = max( 0.5 * dot( normal, dirVector ) + 0.5, 0.0 );", "vec3 dirDiffuseWeight = mix( vec3( directionalLightWeightingFull ), vec3( directionalLightWeightingHalf ), wrapRGB );", "#else", "float dirDiffuseWeight = max( dot( normal, dirVector ), 0.0 );", "#endif", "dirDiffuse += directionalLightColor[ i ] * diffuse * dirDiffuseWeight;", "vec3 dirHalfVector = normalize( dirVector + viewDirection );", "float dirDotNormalHalf = max( dot( normal, dirHalfVector ), 0.0 );", "float dirSpecularWeight = specularTex.r * max( pow( dirDotNormalHalf, shininess ), 0.0 );", "float specularNormalization = ( shininess + 2.0001 ) / 8.0;", "vec3 schlick = specular + vec3( 1.0 - specular ) * pow( 1.0 - dot( dirVector, dirHalfVector ), 5.0 );", "dirSpecular += schlick * directionalLightColor[ i ] * dirSpecularWeight * dirDiffuseWeight * specularNormalization;", "}", "#endif", "#if MAX_HEMI_LIGHTS > 0", "vec3 hemiDiffuse  = vec3( 0.0 );", "vec3 hemiSpecular = vec3( 0.0 );", "for( int i = 0; i < MAX_HEMI_LIGHTS; i ++ ) {", "vec4 lDirection = viewMatrix * vec4( hemisphereLightDirection[ i ], 0.0 );", "vec3 lVector = normalize( lDirection.xyz );", "float dotProduct = dot( normal, lVector );", "float hemiDiffuseWeight = 0.5 * dotProduct + 0.5;", "vec3 hemiColor = mix( hemisphereLightGroundColor[ i ], hemisphereLightSkyColor[ i ], hemiDiffuseWeight );", "hemiDiffuse += diffuse * hemiColor;", "vec3 hemiHalfVectorSky = normalize( lVector + viewDirection );", "float hemiDotNormalHalfSky = 0.5 * dot( normal, hemiHalfVectorSky ) + 0.5;", "float hemiSpecularWeightSky = specularTex.r * max( pow( hemiDotNormalHalfSky, shininess ), 0.0 );", "vec3 lVectorGround = -lVector;", "vec3 hemiHalfVectorGround = normalize( lVectorGround + viewDirection );", "float hemiDotNormalHalfGround = 0.5 * dot( normal, hemiHalfVectorGround ) + 0.5;", "float hemiSpecularWeightGround = specularTex.r * max( pow( hemiDotNormalHalfGround, shininess ), 0.0 );", "float dotProductGround = dot( normal, lVectorGround );", "float specularNormalization = ( shininess + 2.0001 ) / 8.0;", "vec3 schlickSky = specular + vec3( 1.0 - specular ) * pow( 1.0 - dot( lVector, hemiHalfVectorSky ), 5.0 );", "vec3 schlickGround = specular + vec3( 1.0 - specular ) * pow( 1.0 - dot( lVectorGround, hemiHalfVectorGround ), 5.0 );", "hemiSpecular += hemiColor * specularNormalization * ( schlickSky * hemiSpecularWeightSky * max( dotProduct, 0.0 ) + schlickGround * hemiSpecularWeightGround * max( dotProductGround, 0.0 ) );", "}", "#endif", "vec3 totalDiffuse = vec3( 0.0 );", "vec3 totalSpecular = vec3( 0.0 );", "#if MAX_DIR_LIGHTS > 0", "totalDiffuse += dirDiffuse;", "totalSpecular += dirSpecular;", "#endif", "#if MAX_HEMI_LIGHTS > 0", "totalDiffuse += hemiDiffuse;", "totalSpecular += hemiSpecular;", "#endif", "#if MAX_POINT_LIGHTS > 0", "totalDiffuse += pointDiffuse;", "totalSpecular += pointSpecular;", "#endif", "#if MAX_SPOT_LIGHTS > 0", "totalDiffuse += spotDiffuse;", "totalSpecular += spotSpecular;", "#endif", "#ifdef METAL", "gl_FragColor.xyz = gl_FragColor.xyz * ( totalDiffuse + ambientLightColor * ambient + totalSpecular );", "#else", "gl_FragColor.xyz = gl_FragColor.xyz * ( totalDiffuse + ambientLightColor * ambient ) + totalSpecular;", "#endif", "if ( enableReflection ) {", "vec3 vReflect;", "vec3 cameraToVertex = normalize( vWorldPosition - cameraPosition );", "if ( useRefract ) {", "vReflect = refract( cameraToVertex, normal, refractionRatio );", "} else {", "vReflect = reflect( cameraToVertex, normal );", "}", "vec4 cubeColor = textureCube( tCube, vec3( -vReflect.x, vReflect.yz ) );", "#ifdef GAMMA_INPUT", "cubeColor.xyz *= cubeColor.xyz;", "#endif", "gl_FragColor.xyz = mix( gl_FragColor.xyz, cubeColor.xyz, specularTex.r * reflectivity );", "}", a.ShaderChunk.shadowmap_fragment, a.ShaderChunk.linear_to_gamma_fragment, a.ShaderChunk.fog_fragment, "}"].join("\n"),
                        vertexShader: ["attribute vec4 tangent;", "uniform vec2 uOffset;", "uniform vec2 uRepeat;", "uniform bool enableDisplacement;", "#ifdef VERTEX_TEXTURES", "uniform sampler2D tDisplacement;", "uniform float uDisplacementScale;", "uniform float uDisplacementBias;", "#endif", "varying vec3 vTangent;", "varying vec3 vBinormal;", "varying vec3 vNormal;", "varying vec2 vUv;", "varying vec3 vWorldPosition;", "varying vec3 vViewPosition;", a.ShaderChunk.common, a.ShaderChunk.skinning_pars_vertex, a.ShaderChunk.shadowmap_pars_vertex, "void main() {", a.ShaderChunk.skinbase_vertex, a.ShaderChunk.skinnormal_vertex, "#ifdef USE_SKINNING", "vNormal = normalize( normalMatrix * skinnedNormal.xyz );", "vec4 skinnedTangent = skinMatrix * vec4( tangent.xyz, 0.0 );", "vTangent = normalize( normalMatrix * skinnedTangent.xyz );", "#else", "vNormal = normalize( normalMatrix * normal );", "vTangent = normalize( normalMatrix * tangent.xyz );", "#endif", "vBinormal = normalize( cross( vNormal, vTangent ) * tangent.w );", "vUv = uv * uRepeat + uOffset;", "vec3 displacedPosition;", "#ifdef VERTEX_TEXTURES", "if ( enableDisplacement ) {", "vec3 dv = texture2D( tDisplacement, uv ).xyz;", "float df = uDisplacementScale * dv.x + uDisplacementBias;", "displacedPosition = position + normalize( normal ) * df;", "} else {", "#ifdef USE_SKINNING", "vec4 skinVertex = vec4( position, 1.0 );", "vec4 skinned  = boneMatX * skinVertex * skinWeight.x;", "skinned \t  += boneMatY * skinVertex * skinWeight.y;", "displacedPosition  = skinned.xyz;", "#else", "displacedPosition = position;", "#endif", "}", "#else", "#ifdef USE_SKINNING", "vec4 skinVertex = vec4( position, 1.0 );", "vec4 skinned  = boneMatX * skinVertex * skinWeight.x;", "skinned \t  += boneMatY * skinVertex * skinWeight.y;", "displacedPosition  = skinned.xyz;", "#else", "displacedPosition = position;", "#endif", "#endif", "vec4 mvPosition = modelViewMatrix * vec4( displacedPosition, 1.0 );", "vec4 worldPosition = modelMatrix * vec4( displacedPosition, 1.0 );", "gl_Position = projectionMatrix * mvPosition;", "vWorldPosition = worldPosition.xyz;", "vViewPosition = -mvPosition.xyz;", "#ifdef USE_SHADOWMAP", "for( int i = 0; i < MAX_SHADOWS; i ++ ) {", "vShadowCoord[ i ] = shadowMatrix[ i ] * worldPosition;", "}", "#endif", "}"].join("\n")
                    },
                    cube: {
                        uniforms: {
                            tCube: {
                                type: "t",
                                value: null
                            },
                            tFlip: {
                                type: "f",
                                value: -1
                            },
                            tEncoding: {
                                type: "i",
                                value: 0
                            },
                            blurring: {
                                type: "f",
                                value: 0
                            }
                        },
                        vertexShader: ["varying vec3 vWorldPosition;", "void main() {", "vec4 worldPosition = modelMatrix * vec4( position, 1.0 );", "vWorldPosition = worldPosition.xyz;", "gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );", "}"].join("\n"),
                        fragmentShader: ["#ifdef TEXTURE_CUBE_LOD_EXT", "#extension GL_EXT_shader_texture_lod : enable", "#endif", a.ShaderChunk.common, "uniform samplerCube tCube;", "uniform float tFlip;", "uniform int tEncoding;", "uniform float blurring;", "varying vec3 vWorldPosition;", "void main() {", "vec3 queryVector = vec3( tFlip * vWorldPosition.x, vWorldPosition.yz );", "#if defined( TEXTURE_CUBE_LOD_EXT )", "vec4 color = textureCubeLodEXT( tCube, queryVector, blurring );", "#else", "vec4 color = textureCube( tCube, queryVector );", "#endif", "color = texelDecode( color, tEncoding );", "#ifdef GAMMA_OUTPUT", "color.xyz = sqrt( color.xyz );", "#endif", "gl_FragColor = color;", "}"].join("\n")
                    },
                    depthRGBA: {
                        uniforms: {},
                        vertexShader: [a.ShaderChunk.common, a.ShaderChunk.morphtarget_pars_vertex, a.ShaderChunk.skinning_pars_vertex, "void main() {", a.ShaderChunk.skinbase_vertex, a.ShaderChunk.morphtarget_vertex, a.ShaderChunk.skinning_vertex, a.ShaderChunk.default_vertex, "}"].join("\n"),
                        fragmentShader: ["vec4 pack_depth( const float depth ) {", "\t\tconst vec4 bit_shift = vec4( 256.0 * 256.0 * 256.0, 256.0 * 256.0, 256.0, 1.0 );", "\tconst vec4 bit_mask = vec4( 0.0, 1.0 / 256.0, 1.0 / 256.0, 1.0 / 256.0 );", "\tvec4 res = mod( depth * bit_shift * vec4( 255 ), vec4( 256 ) ) / vec4( 255 );", "\tres -= res.xxyz * bit_mask;", "\treturn res;", "}", "void main() {", "gl_FragData[ 0 ] = pack_depth( gl_FragCoord.z );", "}"].join("\n")
                    },
                    linearDepthRGBA: {
                        uniforms: {
                            zNear: {
                                type: "f",
                                value: .5
                            },
                            zFar: {
                                type: "f",
                                value: 1e3
                            }
                        },
                        vertexShader: [a.ShaderChunk.common, a.ShaderChunk.morphtarget_pars_vertex, a.ShaderChunk.skinning_pars_vertex, "varying vec3 vViewPosition;", "void main() {", a.ShaderChunk.skinbase_vertex, a.ShaderChunk.morphtarget_vertex, a.ShaderChunk.skinning_vertex, a.ShaderChunk.default_vertex, "vViewPosition = -mvPosition.xyz;", "}"].join("\n"),
                        fragmentShader: ["uniform float zNear;", "uniform float zFar;", "varying vec3 vViewPosition;", "vec4 pack_depth( const float depth ) {", "\t\tconst vec4 bit_shift = vec4( 256.0 * 256.0 * 256.0, 256.0 * 256.0, 256.0, 1.0 );", "\tconst vec4 bit_mask = vec4( 0.0, 1.0 / 256.0, 1.0 / 256.0, 1.0 / 256.0 );", "\tvec4 res = mod( depth * bit_shift * vec4( 255 ), vec4( 256 ) ) / vec4( 255 );", "\tres -= res.xxyz * bit_mask;", "\treturn res;", "}", "void main() {", "gl_FragColor = pack_depth( clamp( ( vViewPosition.z - zNear ) / ( zFar - zNear ), 0.0, 1.0 ) );", "}"].join("\n")
                    }
                }, a.WebGLRenderer = function(e) {
                    console.log("THREE.WebGLRenderer", a.REVISION);
                    var t = void 0 !== (e = e || {}).canvas ? e.canvas : document.createElement("canvas"),
                        i = void 0 !== e.context ? e.context : null,
                        o = void 0 !== e.precision ? e.precision : "mediump",
                        n = void 0 !== e.alpha && e.alpha,
                        s = void 0 === e.premultipliedAlpha || e.premultipliedAlpha,
                        l = void 0 !== e.antialias && e.antialias,
                        h = void 0 === e.stencil || e.stencil,
                        c = void 0 !== e.preserveDrawingBuffer && e.preserveDrawingBuffer,
                        u = new a.Color(0),
                        f = 0;
                    this.domElement = t, this.context = null, this.devicePixelRatio = void 0 !== e.devicePixelRatio ? e.devicePixelRatio : void 0 !== r.devicePixelRatio ? r.devicePixelRatio : 1, this.autoClear = !0, this.autoClearColor = !0, this.autoClearDepth = !0, this.autoClearStencil = !0, this.sortObjects = !0, this.autoUpdateObjects = !0, this.gammaInput = !0, this.gammaOutput = !0, this.shadowMapEnabled = !1, this.shadowMapAutoUpdate = !0, this.shadowMapType = a.PCFShadowMap, this.shadowMapCullFace = a.CullFaceFront, this.shadowMapDebug = !1, this.shadowMapCascade = !1, this.maxMorphTargets = 8, this.maxMorphNormals = 4, this.autoScaleCubemaps = !0, this.renderPluginsPre = [], this.renderPluginsPost = [], this.info = {
                        memory: {
                            programs: 0,
                            geometries: 0,
                            textures: 0
                        },
                        render: {
                            calls: 0,
                            vertices: 0,
                            faces: 0,
                            points: 0
                        }
                    };
                    var p, d, m, g, v, y, x = this,
                        _ = [],
                        M = 0,
                        w = null,
                        S = null,
                        b = -1,
                        A = null,
                        T = null,
                        C = 0,
                        E = -1,
                        L = -1,
                        P = -1,
                        R = -1,
                        D = -1,
                        V = -1,
                        U = -1,
                        F = -1,
                        N = null,
                        O = null,
                        z = null,
                        I = null,
                        B = 0,
                        k = 0,
                        G = t.width,
                        H = t.height,
                        W = 0,
                        j = 0,
                        X = new Uint8Array(16),
                        Y = new a.Frustum,
                        q = new a.Matrix4,
                        K = new a.Matrix4,
                        Q = new a.Vector3,
                        Z = new a.Vector3,
                        J = new a.Vector3,
                        $ = new a.Vector3,
                        ee = !0,
                        te = {
                            ambient: [0, 0, 0],
                            directional: {
                                length: 0,
                                colors: new Array,
                                positions: new Array
                            },
                            point: {
                                length: 0,
                                colors: new Array,
                                positions: new Array,
                                distances: new Array,
                                decayExponents: new Array
                            },
                            spot: {
                                length: 0,
                                colors: new Array,
                                positions: new Array,
                                distances: new Array,
                                decayExponents: new Array,
                                directions: new Array,
                                anglesCos: new Array,
                                exponents: new Array
                            },
                            hemi: {
                                length: 0,
                                skyColors: new Array,
                                groundColors: new Array,
                                positions: new Array
                            },
                            area: {
                                length: 0,
                                colors: new Array,
                                positions: new Array,
                                distances: new Array,
                                decayExponents: new Array,
                                widths: new Array,
                                heights: new Array
                            }
                        };
                    ! function() {
                        try {
                            var e = {
                                alpha: n,
                                premultipliedAlpha: s,
                                antialias: l,
                                stencil: h,
                                preserveDrawingBuffer: c
                            };
                            null === (p = i || t.getContext("webgl", e) || t.getContext("experimental-webgl", e)) && a.onerror("Error creating WebGL context.")
                        } catch (r) {
                            a.onerror(r)
                        }
                        d = p.getExtension("OES_texture_float"), p.getExtension("OES_texture_float_linear"), m = p.getExtension("OES_standard_derivatives"), g = p.getExtension("EXT_shader_texture_lod"), v = p.getExtension("EXT_texture_filter_anisotropic") || p.getExtension("MOZ_EXT_texture_filter_anisotropic") || p.getExtension("WEBKIT_EXT_texture_filter_anisotropic"), y = p.getExtension("WEBGL_compressed_texture_s3tc") || p.getExtension("MOZ_WEBGL_compressed_texture_s3tc") || p.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc"), d || console.log("THREE.WebGLRenderer: Float textures not supported.");
                        m || console.log("THREE.WebGLRenderer: Standard derivatives not supported.");
                        g || console.log("THREE.WebGLRenderer: Shader texture LOD not supported.");
                        v || console.log("THREE.WebGLRenderer: Anisotropic texture filtering not supported.");
                        y || console.log("THREE.WebGLRenderer: S3TC compressed textures not supported.");
                        void 0 === p.getShaderPrecisionFormat && (p.getShaderPrecisionFormat = function() {
                            return {
                                rangeMin: 1,
                                rangeMax: 1,
                                precision: 1
                            }
                        })
                    }(), p.clearColor(0, 0, 0, 1), p.clearDepth(1), p.clearStencil(0), p.enable(p.DEPTH_TEST), p.depthFunc(p.LEQUAL), p.frontFace(p.CCW), p.cullFace(p.BACK), p.enable(p.CULL_FACE), p.enable(p.BLEND), p.blendEquation(p.FUNC_ADD), p.blendFunc(p.SRC_ALPHA, p.ONE_MINUS_SRC_ALPHA), p.viewport(B, k, G, H), p.clearColor(u.r, u.g, u.b, f), this.context = p;
                    var ie = p.getParameter(p.MAX_TEXTURE_IMAGE_UNITS),
                        re = p.getParameter(p.MAX_VERTEX_TEXTURE_IMAGE_UNITS),
                        ae = (p.getParameter(p.MAX_TEXTURE_SIZE), p.getParameter(p.MAX_CUBE_MAP_TEXTURE_SIZE)),
                        oe = v ? p.getParameter(v.MAX_TEXTURE_MAX_ANISOTROPY_EXT) : 0,
                        ne = re > 0,
                        se = ne && d,
                        le = (y && p.getParameter(p.COMPRESSED_TEXTURE_FORMATS), p.getShaderPrecisionFormat(p.VERTEX_SHADER, p.HIGH_FLOAT)),
                        he = p.getShaderPrecisionFormat(p.VERTEX_SHADER, p.MEDIUM_FLOAT),
                        ce = (p.getShaderPrecisionFormat(p.VERTEX_SHADER, p.LOW_FLOAT), p.getShaderPrecisionFormat(p.FRAGMENT_SHADER, p.HIGH_FLOAT)),
                        ue = p.getShaderPrecisionFormat(p.FRAGMENT_SHADER, p.MEDIUM_FLOAT),
                        fe = (p.getShaderPrecisionFormat(p.FRAGMENT_SHADER, p.LOW_FLOAT), p.getShaderPrecisionFormat(p.VERTEX_SHADER, p.HIGH_INT), p.getShaderPrecisionFormat(p.VERTEX_SHADER, p.MEDIUM_INT), p.getShaderPrecisionFormat(p.VERTEX_SHADER, p.LOW_INT), p.getShaderPrecisionFormat(p.FRAGMENT_SHADER, p.HIGH_INT), p.getShaderPrecisionFormat(p.FRAGMENT_SHADER, p.MEDIUM_INT), p.getShaderPrecisionFormat(p.FRAGMENT_SHADER, p.LOW_INT), le.precision > 0 && ce.precision > 0),
                        pe = he.precision > 0 && ue.precision > 0;

                    function de(e) {
                        var t, i;
                        if (e.__webglVertexBuffer = p.createBuffer(), e.__webglNormalBuffer = p.createBuffer(), e.__webglTangentBuffer = p.createBuffer(), e.__webglColorBuffer = p.createBuffer(), e.__webglUVBuffer = p.createBuffer(), e.__webglUV2Buffer = p.createBuffer(), e.__webglSkinIndicesBuffer = p.createBuffer(), e.__webglSkinWeightsBuffer = p.createBuffer(), e.__webglFaceBuffer = p.createBuffer(), e.__webglLineBuffer = p.createBuffer(), e.numMorphTargets)
                            for (e.__webglMorphTargetsBuffers = [], t = 0, i = e.numMorphTargets; t < i; t++) e.__webglMorphTargetsBuffers.push(p.createBuffer());
                        if (e.numMorphNormals)
                            for (e.__webglMorphNormalsBuffers = [], t = 0, i = e.numMorphNormals; t < i; t++) e.__webglMorphNormalsBuffers.push(p.createBuffer());
                        x.info.memory.geometries++
                    }
                    "highp" !== o || fe || (pe ? (o = "mediump", a.onwarning("WebGLRenderer: highp not supported, using mediump")) : (o = "lowp", a.onwarning("WebGLRenderer: highp and mediump not supported, using lowp"))), "mediump" !== o || pe || (o = "lowp", a.onwarning("WebGLRenderer: mediump not supported, using lowp")), this.getContext = function() {
                        return p
                    }, this.supportsVertexTextures = function() {
                        return ne
                    }, this.supportsFloatTextures = function() {
                        return d
                    }, this.supportsStandardDerivatives = function() {
                        return m
                    }, this.supportsCompressedTextureS3TC = function() {
                        return y
                    }, this.getMaxAnisotropy = function() {
                        return oe
                    }, this.getPrecision = function() {
                        return o
                    }, this.setSize = function(e, i, r) {
                        t.width = e * this.devicePixelRatio, t.height = i * this.devicePixelRatio, 1 !== this.devicePixelRatio && !1 !== r && (t.style.width = e + "px", t.style.height = i + "px"), this.setViewport(0, 0, e, i)
                    }, this.setViewport = function(e, t, i, r) {
                        B = e * this.devicePixelRatio, k = t * this.devicePixelRatio, G = i * this.devicePixelRatio, H = r * this.devicePixelRatio, p.viewport(B, k, G, H)
                    }, this.setScissor = function(e, t, i, r) {
                        p.scissor(e * this.devicePixelRatio, t * this.devicePixelRatio, i * this.devicePixelRatio, r * this.devicePixelRatio)
                    }, this.enableScissorTest = function(e) {
                        e ? p.enable(p.SCISSOR_TEST) : p.disable(p.SCISSOR_TEST)
                    }, this.setClearColor = function(e, t) {
                        u.set(e), f = void 0 !== t ? t : 1, p.clearColor(u.r, u.g, u.b, f)
                    }, this.setClearColorHex = function(e, t) {
                        a.onwarning("DEPRECATED: .setClearColorHex() is being removed. Use .setClearColor() instead."), this.setClearColor(e, t)
                    }, this.getClearColor = function() {
                        return u
                    }, this.getClearAlpha = function() {
                        return f
                    }, this.clear = function(e, t, i) {
                        var r = 0;
                        (void 0 === e || e) && (r |= p.COLOR_BUFFER_BIT), (void 0 === t || t) && (r |= p.DEPTH_BUFFER_BIT), (void 0 === i || i) && (r |= p.STENCIL_BUFFER_BIT), p.clear(r)
                    }, this.clearColor = function() {
                        p.clear(p.COLOR_BUFFER_BIT)
                    }, this.clearDepth = function() {
                        p.clear(p.DEPTH_BUFFER_BIT)
                    }, this.clearStencil = function() {
                        p.clear(p.STENCIL_BUFFER_BIT)
                    }, this.clearTarget = function(e, t, i, r) {
                        this.setRenderTarget(e), this.clear(t, i, r)
                    }, this.addPostPlugin = function(e) {
                        e.init(this), this.renderPluginsPost.push(e)
                    }, this.addPrePlugin = function(e) {
                        e.init(this), this.renderPluginsPre.push(e)
                    }, this.updateShadowMap = function(e, t) {
                        w = null, P = -1, U = -1, F = -1, A = -1, b = -1, ee = !0, E = -1, L = -1, this.shadowMapPlugin.update(e, t)
                    };
                    var me = function(e) {
                            var t = e.target;
                            t.removeEventListener("dispose", me), _e(t)
                        },
                        ge = function(e) {
                            var t = e.target;
                            t.removeEventListener("dispose", ge), Me(t), x.info.memory.textures--
                        },
                        ve = function(e) {
                            var t = e.target;
                            t.removeEventListener("dispose", ve), we(t), x.info.memory.textures--
                        },
                        ye = function(e) {
                            var t = e.target;
                            t.removeEventListener("dispose", ye), Se(t)
                        },
                        xe = function(e) {
                            if (void 0 !== e.__webglVertexBuffer && p.deleteBuffer(e.__webglVertexBuffer), void 0 !== e.__webglNormalBuffer && p.deleteBuffer(e.__webglNormalBuffer), void 0 !== e.__webglTangentBuffer && p.deleteBuffer(e.__webglTangentBuffer), void 0 !== e.__webglColorBuffer && p.deleteBuffer(e.__webglColorBuffer), void 0 !== e.__webglUVBuffer && p.deleteBuffer(e.__webglUVBuffer), void 0 !== e.__webglUV2Buffer && p.deleteBuffer(e.__webglUV2Buffer), void 0 !== e.__webglSkinIndicesBuffer && p.deleteBuffer(e.__webglSkinIndicesBuffer), void 0 !== e.__webglSkinWeightsBuffer && p.deleteBuffer(e.__webglSkinWeightsBuffer), void 0 !== e.__webglFaceBuffer && p.deleteBuffer(e.__webglFaceBuffer), void 0 !== e.__webglLineBuffer && p.deleteBuffer(e.__webglLineBuffer), void 0 !== e.__webglLineDistanceBuffer && p.deleteBuffer(e.__webglLineDistanceBuffer), void 0 !== e.__webglCustomAttributesList)
                                for (var t in e.__webglCustomAttributesList) p.deleteBuffer(e.__webglCustomAttributesList[t].buffer);
                            x.info.memory.geometries--
                        },
                        _e = function(e) {
                            if (e.__webglInit = void 0, e instanceof a.BufferGeometry) {
                                var t = e.attributes;
                                for (var i in t) void 0 !== t[i].buffer && p.deleteBuffer(t[i].buffer);
                                x.info.memory.geometries--
                            } else if (void 0 !== e.geometryGroups)
                                for (var r in e.geometryGroups) {
                                    var o = e.geometryGroups[r];
                                    if (void 0 !== o.numMorphTargets)
                                        for (var n = 0, s = o.numMorphTargets; n < s; n++) p.deleteBuffer(o.__webglMorphTargetsBuffers[n]);
                                    if (void 0 !== o.numMorphNormals)
                                        for (n = 0, s = o.numMorphNormals; n < s; n++) p.deleteBuffer(o.__webglMorphNormalsBuffers[n]);
                                    xe(o)
                                } else xe(e)
                        },
                        Me = function(e) {
                            if (e.image && e.image.__webglTextureCube) p.deleteTexture(e.image.__webglTextureCube);
                            else {
                                if (!e.__webglInit) return;
                                e.__webglInit = !1, p.deleteTexture(e.__webglTexture)
                            }
                        },
                        we = function(e) {
                            if (e && e.__webglTexture)
                                if (p.deleteTexture(e.__webglTexture), e instanceof a.WebGLRenderTargetCube)
                                    for (var t = 0; t < 6; t++) p.deleteFramebuffer(e.__webglFramebuffer[t]), p.deleteRenderbuffer(e.__webglRenderbuffer[t]);
                                else p.deleteFramebuffer(e.__webglFramebuffer), p.deleteRenderbuffer(e.__webglRenderbuffer)
                        },
                        Se = function(e, t) {
                            var i = t || e.program;
                            if (void 0 !== i) {
                                var r, a, o;
                                t || (e.program = void 0);
                                var n = !1;
                                for (r = 0, a = _.length; r < a; r++)
                                    if ((o = _[r]).program === i) {
                                        o.usedTimes--, 0 === o.usedTimes && (n = !0);
                                        break
                                    }
                                if (!0 === n) {
                                    var s = [];
                                    for (r = 0, a = _.length; r < a; r++)(o = _[r]).program !== i && s.push(o);
                                    _ = s, p.deleteProgram(i), x.info.memory.programs--
                                }
                            }
                        };

                    function be(e, t) {
                        var i = e.vertices.length,
                            r = t.material;
                        if (r.attributes)
                            for (var a in void 0 === e.__webglCustomAttributesList && (e.__webglCustomAttributesList = []), r.attributes) {
                                var o = r.attributes[a];
                                if (!o.__webglInitialized || o.createUniqueBuffers) {
                                    o.__webglInitialized = !0;
                                    var n = 1;
                                    "v2" === o.type ? n = 2 : "v3" === o.type ? n = 3 : "v4" === o.type ? n = 4 : "c" === o.type && (n = 3), o.size = n, o.array = new Float32Array(i * n), o.buffer = p.createBuffer(), o.buffer.belongsToAttribute = a, o.needsUpdate = !0
                                }
                                e.__webglCustomAttributesList.push(o)
                            }
                    }

                    function Ae(e, t) {
                        var i, r, a = t.geometry,
                            o = e.faces3,
                            n = 3 * o.length,
                            s = 1 * o.length,
                            l = 3 * o.length,
                            h = Te(t, e),
                            c = Le(h),
                            u = Ce(h),
                            f = Ee(h);
                        if (e.__vertexArray = new Float32Array(3 * n), u && (e.__normalArray = new Float32Array(3 * n)), a.hasTangents && (e.__tangentArray = new Float32Array(4 * n)), f && (e.__colorArray = new Float32Array(3 * n)), c && (a.faceVertexUvs.length > 0 && (e.__uvArray = new Float32Array(2 * n)), a.faceVertexUvs.length > 1 && (e.__uv2Array = new Float32Array(2 * n))), t.geometry.skinWeights.length && t.geometry.skinIndices.length && (e.__skinIndexArray = new Float32Array(4 * n), e.__skinWeightArray = new Float32Array(4 * n)), e.__faceArray = new Uint16Array(3 * s), e.__lineArray = new Uint16Array(2 * l), e.numMorphTargets)
                            for (e.__morphTargetsArrays = [], i = 0, r = e.numMorphTargets; i < r; i++) e.__morphTargetsArrays.push(new Float32Array(3 * n));
                        if (e.numMorphNormals)
                            for (e.__morphNormalsArrays = [], i = 0, r = e.numMorphNormals; i < r; i++) e.__morphNormalsArrays.push(new Float32Array(3 * n));
                        if (e.__webglFaceCount = 3 * s, e.__webglLineCount = 2 * l, h.attributes)
                            for (var d in void 0 === e.__webglCustomAttributesList && (e.__webglCustomAttributesList = []), h.attributes) {
                                var m = h.attributes[d],
                                    g = {};
                                for (var v in m) g[v] = m[v];
                                if (!g.__webglInitialized || g.createUniqueBuffers) {
                                    g.__webglInitialized = !0;
                                    var y = 1;
                                    "v2" === g.type ? y = 2 : "v3" === g.type ? y = 3 : "v4" === g.type ? y = 4 : "c" === g.type && (y = 3), g.size = y, g.array = new Float32Array(n * y), g.buffer = p.createBuffer(), g.buffer.belongsToAttribute = d, m.needsUpdate = !0, g.__original = m
                                }
                                e.__webglCustomAttributesList.push(g)
                            }
                        e.__inittedArrays = !0
                    }

                    function Te(e, t) {
                        return e.material instanceof a.MeshFaceMaterial ? e.material.materials[t.materialIndex] : e.material
                    }

                    function Ce(e) {
                        return !(e instanceof a.MeshBasicMaterial && !e.envMap || e instanceof a.MeshDepthMaterial) && (function(e) {
                            return e && void 0 !== e.shading && e.shading === a.SmoothShading
                        }(e) ? a.SmoothShading : a.FlatShading)
                    }

                    function Ee(e) {
                        return !!e.vertexColors && e.vertexColors
                    }

                    function Le(e) {
                        return e.map || e.opacityMap || e.lightMap || e.emissiveMap || e.bumpMap || e.normalMap || e.specularMap || e.reflectivityMap || e.roughnessMap || e.falloffMap || e.anisotropyMap || e.anisotropyRotationMap || e.metallicMap || e.translucencyMap || e.anisotropy && 0 !== e.anisotropy || a.ShaderMaterial, !0
                    }

                    function Pe(e, t, i, r, o) {
                        if (e.__inittedArrays) {
                            var n, s, l, h, c, u, f, d, m, g, v, y, x, _, M, w, S, b, A, T, C, E, L, P, R, D, V, U, F, N, O, z, I, B, k, G, H, W, j, X, Y, q = Ce(o),
                                K = Ee(o),
                                Q = Le(o),
                                Z = q === a.SmoothShading,
                                J = 0,
                                $ = 0,
                                ee = 0,
                                te = 0,
                                ie = 0,
                                re = 0,
                                ae = 0,
                                oe = 0,
                                ne = 0,
                                se = 0,
                                le = 0,
                                he = 0,
                                ce = e.__vertexArray,
                                ue = e.__uvArray,
                                fe = e.__uv2Array,
                                pe = e.__normalArray,
                                de = e.__tangentArray,
                                me = e.__colorArray,
                                ge = e.__skinIndexArray,
                                ve = e.__skinWeightArray,
                                ye = e.__morphTargetsArrays,
                                xe = e.__morphNormalsArrays,
                                _e = e.__webglCustomAttributesList,
                                Me = e.__faceArray,
                                we = e.__lineArray,
                                Se = t.geometry,
                                be = Se.verticesNeedUpdate,
                                Ae = Se.elementsNeedUpdate,
                                Te = Se.uvsNeedUpdate,
                                Pe = Se.normalsNeedUpdate,
                                Re = Se.tangentsNeedUpdate,
                                De = Se.colorsNeedUpdate,
                                Ve = Se.morphTargetsNeedUpdate,
                                Ue = Se.vertices,
                                Fe = e.faces3,
                                Ne = Se.faces,
                                Oe = Se.faceVertexUvs[0],
                                ze = Se.faceVertexUvs[1],
                                Ie = (Se.colors, Se.skinIndices),
                                Be = Se.skinWeights,
                                ke = Se.morphTargets,
                                Ge = Se.morphNormals;
                            if (be) {
                                for (n = 0, s = Fe.length; n < s; n++) v = Ue[(l = Ne[Fe[n]]).a], y = Ue[l.b], x = Ue[l.c], ce[$] = v.x, ce[$ + 1] = v.y, ce[$ + 2] = v.z, ce[$ + 3] = y.x, ce[$ + 4] = y.y, ce[$ + 5] = y.z, ce[$ + 6] = x.x, ce[$ + 7] = x.y, ce[$ + 8] = x.z, $ += 9;
                                p.bindBuffer(p.ARRAY_BUFFER, e.__webglVertexBuffer), p.bufferData(p.ARRAY_BUFFER, ce, i)
                            }
                            if (Ve)
                                for (B = 0, k = ke.length; B < k; B++) {
                                    for (le = 0, n = 0, s = Fe.length; n < s; n++) l = Ne[W = Fe[n]], v = ke[B].vertices[l.a], y = ke[B].vertices[l.b], x = ke[B].vertices[l.c], (G = ye[B])[le] = v.x, G[le + 1] = v.y, G[le + 2] = v.z, G[le + 3] = y.x, G[le + 4] = y.y, G[le + 5] = y.z, G[le + 6] = x.x, G[le + 7] = x.y, G[le + 8] = x.z, o.morphNormals && (Z ? (S = (j = Ge[B].vertexNormals[W]).a, b = j.b, A = j.c) : (b = S = Ge[B].faceNormals[W], A = S), (H = xe[B])[le] = S.x, H[le + 1] = S.y, H[le + 2] = S.z, H[le + 3] = b.x, H[le + 4] = b.y, H[le + 5] = b.z, H[le + 6] = A.x, H[le + 7] = A.y, H[le + 8] = A.z), le += 9;
                                    p.bindBuffer(p.ARRAY_BUFFER, e.__webglMorphTargetsBuffers[B]), p.bufferData(p.ARRAY_BUFFER, ye[B], i), o.morphNormals && (p.bindBuffer(p.ARRAY_BUFFER, e.__webglMorphNormalsBuffers[B]), p.bufferData(p.ARRAY_BUFFER, xe[B], i))
                                }
                            if (Be.length) {
                                for (n = 0, s = Fe.length; n < s; n++) L = Be[(l = Ne[Fe[n]]).a], P = Be[l.b], R = Be[l.c], ve[se] = L.x, ve[se + 1] = L.y, ve[se + 2] = L.z, ve[se + 3] = L.w, ve[se + 4] = P.x, ve[se + 5] = P.y, ve[se + 6] = P.z, ve[se + 7] = P.w, ve[se + 8] = R.x, ve[se + 9] = R.y, ve[se + 10] = R.z, ve[se + 11] = R.w, D = Ie[l.a], V = Ie[l.b], U = Ie[l.c], ge[se] = D.x, ge[se + 1] = D.y, ge[se + 2] = D.z, ge[se + 3] = D.w, ge[se + 4] = V.x, ge[se + 5] = V.y, ge[se + 6] = V.z, ge[se + 7] = V.w, ge[se + 8] = U.x, ge[se + 9] = U.y, ge[se + 10] = U.z, ge[se + 11] = U.w, se += 12;
                                se > 0 && (p.bindBuffer(p.ARRAY_BUFFER, e.__webglSkinIndicesBuffer), p.bufferData(p.ARRAY_BUFFER, ge, i), p.bindBuffer(p.ARRAY_BUFFER, e.__webglSkinWeightsBuffer), p.bufferData(p.ARRAY_BUFFER, ve, i))
                            }
                            if (De && K) {
                                for (n = 0, s = Fe.length; n < s; n++) u = (l = Ne[Fe[n]]).vertexColors, f = l.color, 3 === u.length && K === a.VertexColors ? (T = u[0], C = u[1], E = u[2]) : (T = f, C = f, E = f), me[ne] = T.r, me[ne + 1] = T.g, me[ne + 2] = T.b, me[ne + 3] = C.r, me[ne + 4] = C.g, me[ne + 5] = C.b, me[ne + 6] = E.r, me[ne + 7] = E.g, me[ne + 8] = E.b, ne += 9;
                                ne > 0 && (p.bindBuffer(p.ARRAY_BUFFER, e.__webglColorBuffer), p.bufferData(p.ARRAY_BUFFER, me, i))
                            }
                            if (Re && Se.hasTangents) {
                                var He = new a.Vector3(0, 0, 0);
                                for (n = 0, s = Fe.length; n < s; n++) _ = (d = (l = Ne[Fe[n]]).vertexTangents)[0] || He, M = d[1] || He, w = d[2] || He, de[ae] = _.x, de[ae + 1] = _.y, de[ae + 2] = _.z, de[ae + 3] = _.w, de[ae + 4] = M.x, de[ae + 5] = M.y, de[ae + 6] = M.z, de[ae + 7] = M.w, de[ae + 8] = w.x, de[ae + 9] = w.y, de[ae + 10] = w.z, de[ae + 11] = w.w, ae += 12;
                                p.bindBuffer(p.ARRAY_BUFFER, e.__webglTangentBuffer), p.bufferData(p.ARRAY_BUFFER, de, i)
                            }
                            if (Pe && q) {
                                for (n = 0, s = Fe.length; n < s; n++)
                                    if (h = (l = Ne[Fe[n]]).vertexNormals, c = l.normal, 3 === h.length && Z)
                                        for (F = 0; F < 3; F++) O = h[F], pe[re] = O.x, pe[re + 1] = O.y, pe[re + 2] = O.z, re += 3;
                                    else
                                        for (F = 0; F < 3; F++) pe[re] = c.x, pe[re + 1] = c.y, pe[re + 2] = c.z, re += 3;
                                p.bindBuffer(p.ARRAY_BUFFER, e.__webglNormalBuffer), p.bufferData(p.ARRAY_BUFFER, pe, i)
                            }
                            if (Te && Oe && Q) {
                                for (n = 0, s = Fe.length; n < s; n++)
                                    if (void 0 !== (m = Oe[Fe[n]]))
                                        for (F = 0; F < 3; F++) z = m[F], ue[ee] = z.x, ue[ee + 1] = z.y, ee += 2;
                                ee > 0 && (p.bindBuffer(p.ARRAY_BUFFER, e.__webglUVBuffer), p.bufferData(p.ARRAY_BUFFER, ue, i))
                            }
                            if (Te && ze && Q) {
                                for (n = 0, s = Fe.length; n < s; n++)
                                    if (void 0 !== (g = ze[Fe[n]]))
                                        for (F = 0; F < 3; F++) I = g[F], fe[te] = I.x, fe[te + 1] = I.y, te += 2;
                                te > 0 && (p.bindBuffer(p.ARRAY_BUFFER, e.__webglUV2Buffer), p.bufferData(p.ARRAY_BUFFER, fe, i))
                            }
                            if (Ae) {
                                for (n = 0, s = Fe.length; n < s; n++) Me[ie] = J, Me[ie + 1] = J + 1, Me[ie + 2] = J + 2, ie += 3, we[oe] = J, we[oe + 1] = J + 1, we[oe + 2] = J, we[oe + 3] = J + 2, we[oe + 4] = J + 1, we[oe + 5] = J + 2, oe += 6, J += 3;
                                p.bindBuffer(p.ELEMENT_ARRAY_BUFFER, e.__webglFaceBuffer), p.bufferData(p.ELEMENT_ARRAY_BUFFER, Me, i), p.bindBuffer(p.ELEMENT_ARRAY_BUFFER, e.__webglLineBuffer), p.bufferData(p.ELEMENT_ARRAY_BUFFER, we, i)
                            }
                            if (_e)
                                for (F = 0, N = _e.length; F < N; F++)
                                    if ((Y = _e[F]).__original.needsUpdate) {
                                        if (he = 0, 0, 1 === Y.size) {
                                            if (void 0 === Y.boundTo || "vertices" === Y.boundTo)
                                                for (n = 0, s = Fe.length; n < s; n++) l = Ne[Fe[n]], Y.array[he] = Y.value[l.a], Y.array[he + 1] = Y.value[l.b], Y.array[he + 2] = Y.value[l.c], he += 3;
                                            else if ("faces" === Y.boundTo)
                                                for (n = 0, s = Fe.length; n < s; n++) X = Y.value[Fe[n]], Y.array[he] = X, Y.array[he + 1] = X, Y.array[he + 2] = X, he += 3
                                        } else if (2 === Y.size) {
                                            if (void 0 === Y.boundTo || "vertices" === Y.boundTo)
                                                for (n = 0, s = Fe.length; n < s; n++) l = Ne[Fe[n]], v = Y.value[l.a], y = Y.value[l.b], x = Y.value[l.c], Y.array[he] = v.x, Y.array[he + 1] = v.y, Y.array[he + 2] = y.x, Y.array[he + 3] = y.y, Y.array[he + 4] = x.x, Y.array[he + 5] = x.y, he += 6;
                                            else if ("faces" === Y.boundTo)
                                                for (n = 0, s = Fe.length; n < s; n++) v = X = Y.value[Fe[n]], y = X, x = X, Y.array[he] = v.x, Y.array[he + 1] = v.y, Y.array[he + 2] = y.x, Y.array[he + 3] = y.y, Y.array[he + 4] = x.x, Y.array[he + 5] = x.y, he += 6
                                        } else if (3 === Y.size) {
                                            var We;
                                            if (We = "c" === Y.type ? ["r", "g", "b"] : ["x", "y", "z"], void 0 === Y.boundTo || "vertices" === Y.boundTo)
                                                for (n = 0, s = Fe.length; n < s; n++) l = Ne[Fe[n]], v = Y.value[l.a], y = Y.value[l.b], x = Y.value[l.c], Y.array[he] = v[We[0]], Y.array[he + 1] = v[We[1]], Y.array[he + 2] = v[We[2]], Y.array[he + 3] = y[We[0]], Y.array[he + 4] = y[We[1]], Y.array[he + 5] = y[We[2]], Y.array[he + 6] = x[We[0]], Y.array[he + 7] = x[We[1]], Y.array[he + 8] = x[We[2]], he += 9;
                                            else if ("faces" === Y.boundTo)
                                                for (n = 0, s = Fe.length; n < s; n++) v = X = Y.value[Fe[n]], y = X, x = X, Y.array[he] = v[We[0]], Y.array[he + 1] = v[We[1]], Y.array[he + 2] = v[We[2]], Y.array[he + 3] = y[We[0]], Y.array[he + 4] = y[We[1]], Y.array[he + 5] = y[We[2]], Y.array[he + 6] = x[We[0]], Y.array[he + 7] = x[We[1]], Y.array[he + 8] = x[We[2]], he += 9;
                                            else if ("faceVertices" === Y.boundTo)
                                                for (n = 0, s = Fe.length; n < s; n++) v = (X = Y.value[Fe[n]])[0], y = X[1], x = X[2], Y.array[he] = v[We[0]], Y.array[he + 1] = v[We[1]], Y.array[he + 2] = v[We[2]], Y.array[he + 3] = y[We[0]], Y.array[he + 4] = y[We[1]], Y.array[he + 5] = y[We[2]], Y.array[he + 6] = x[We[0]], Y.array[he + 7] = x[We[1]], Y.array[he + 8] = x[We[2]], he += 9
                                        } else if (4 === Y.size)
                                            if (void 0 === Y.boundTo || "vertices" === Y.boundTo)
                                                for (n = 0, s = Fe.length; n < s; n++) l = Ne[Fe[n]], v = Y.value[l.a], y = Y.value[l.b], x = Y.value[l.c], Y.array[he] = v.x, Y.array[he + 1] = v.y, Y.array[he + 2] = v.z, Y.array[he + 3] = v.w, Y.array[he + 4] = y.x, Y.array[he + 5] = y.y, Y.array[he + 6] = y.z, Y.array[he + 7] = y.w, Y.array[he + 8] = x.x, Y.array[he + 9] = x.y, Y.array[he + 10] = x.z, Y.array[he + 11] = x.w, he += 12;
                                            else if ("faces" === Y.boundTo)
                                            for (n = 0, s = Fe.length; n < s; n++) v = X = Y.value[Fe[n]], y = X, x = X, Y.array[he] = v.x, Y.array[he + 1] = v.y, Y.array[he + 2] = v.z, Y.array[he + 3] = v.w, Y.array[he + 4] = y.x, Y.array[he + 5] = y.y, Y.array[he + 6] = y.z, Y.array[he + 7] = y.w, Y.array[he + 8] = x.x, Y.array[he + 9] = x.y, Y.array[he + 10] = x.z, Y.array[he + 11] = x.w, he += 12;
                                        else if ("faceVertices" === Y.boundTo)
                                            for (n = 0, s = Fe.length; n < s; n++) v = (X = Y.value[Fe[n]])[0], y = X[1], x = X[2], Y.array[he] = v.x, Y.array[he + 1] = v.y, Y.array[he + 2] = v.z, Y.array[he + 3] = v.w, Y.array[he + 4] = y.x, Y.array[he + 5] = y.y, Y.array[he + 6] = y.z, Y.array[he + 7] = y.w, Y.array[he + 8] = x.x, Y.array[he + 9] = x.y, Y.array[he + 10] = x.z, Y.array[he + 11] = x.w, he += 12;
                                        p.bindBuffer(p.ARRAY_BUFFER, Y.buffer), p.bufferData(p.ARRAY_BUFFER, Y.array, i)
                                    }
                            r && (delete e.__inittedArrays, delete e.__colorArray, delete e.__normalArray, delete e.__tangentArray, delete e.__uvArray, delete e.__uv2Array, delete e.__faceArray, delete e.__vertexArray, delete e.__lineArray, delete e.__skinIndexArray, delete e.__skinWeightArray)
                        }
                    }

                    function Re(e, t, i, r) {
                        var a, o, n, s;
                        for (o in t) n = t[o], a = i[o], n >= 0 && (a ? (s = a.itemSize, p.bindBuffer(p.ARRAY_BUFFER, a.buffer), De(n), p.vertexAttribPointer(n, s, p.FLOAT, !1, 0, r * s * 4)) : e.defaultAttributeValues && (2 === e.defaultAttributeValues[o].length ? p.vertexAttrib2fv(n, e.defaultAttributeValues[o]) : 3 === e.defaultAttributeValues[o].length && p.vertexAttrib3fv(n, e.defaultAttributeValues[o])))
                    }

                    function De(e) {
                        0 === X[e] && (p.enableVertexAttribArray(e), X[e] = 1)
                    }

                    function Ve() {
                        for (var e in X) 1 === X[e] && (p.disableVertexAttribArray(e), X[e] = 0)
                    }

                    function Ue(e, t) {
                        return e.z !== t.z ? t.z - e.z : e.id - t.id
                    }

                    function Fe(e, t) {
                        return t[0] - e[0]
                    }

                    function Ne(e, t, i) {
                        if (e.length)
                            for (var r = 0, a = e.length; r < a; r++) w = null, T = null, P = -1, U = -1, F = -1, E = -1, L = -1, A = -1, b = -1, ee = !0, e[r].render(t, i, W, j), w = null, T = null, P = -1, U = -1, F = -1, E = -1, L = -1, A = -1, b = -1, ee = !0
                    }

                    function Oe(e, t, i, r, o, n, s, l) {
                        var h, c, u, f, p, d, m;
                        t ? (p = e.length - 1, d = -1, m = -1) : (p = 0, d = e.length, m = 1);
                        for (var g = p; g !== d; g += m)
                            if ((h = e[g]).render) {
                                if (c = h.object, u = h.buffer, l) f = l;
                                else {
                                    if (!(f = h[i])) continue;
                                    s && x.setBlending(f.blending, f.blendEquation, f.blendSrc, f.blendDst), x.setDepthTest(f.depthTest), x.setDepthWrite(f.depthWrite), tt(f.polygonOffset, f.polygonOffsetFactor, f.polygonOffsetUnits)
                                }
                                x.setMaterialFaces(f), u instanceof a.BufferGeometry ? x.renderBufferDirect(r, o, n, f, u, c) : x.renderBuffer(r, o, n, f, u, c)
                            }
                    }

                    function ze(e, t, i, r, a, o, n) {
                        for (var s, l, h, c = 0, u = e.length; c < u; c++)
                            if ((l = (s = e[c]).object).visible) {
                                if (n) h = n;
                                else {
                                    if (!(h = s[t])) continue;
                                    o && x.setBlending(h.blending, h.blendEquation, h.blendSrc, h.blendDst), x.setDepthTest(h.depthTest), x.setDepthWrite(h.depthWrite), tt(h.polygonOffset, h.polygonOffsetFactor, h.polygonOffsetUnits)
                                }
                                x.renderImmediateObject(i, r, a, h, l)
                            }
                    }

                    function Ie(e) {
                        var t = e.object.material;
                        t.transparent ? (e.transparent = t, e.opaque = null) : (e.opaque = t, e.transparent = null)
                    }

                    function Be(e) {
                        var t = e.object,
                            i = e.buffer,
                            r = t.geometry,
                            o = t.material;
                        if (o instanceof a.MeshFaceMaterial) {
                            var n = r instanceof a.BufferGeometry ? 0 : i.materialIndex;
                            (o = o.materials[n]).transparent ? (e.transparent = o, e.opaque = null) : (e.opaque = o, e.transparent = null)
                        } else o && (o.transparent ? (e.transparent = o, e.opaque = null) : (e.opaque = o, e.transparent = null))
                    }

                    function ke(e, t) {
                        var i, r, o, n;
                        if (void 0 === e.__webglInit)
                            if (e.__webglInit = !0, e._modelViewMatrix = new a.Matrix4, e._normalMatrix = new a.Matrix3, void 0 !== e.geometry && void 0 === e.geometry.__webglInit && (e.geometry.__webglInit = !0, e.geometry.addEventListener("dispose", me)), void 0 === (r = e.geometry));
                            else if (r instanceof a.BufferGeometry) ! function(e) {
                            var t, i, r;
                            for (t in e.attributes) r = "index" === t ? p.ELEMENT_ARRAY_BUFFER : p.ARRAY_BUFFER, (i = e.attributes[t]).buffer = p.createBuffer(), p.bindBuffer(r, i.buffer), p.bufferData(r, i.array, p.STATIC_DRAW)
                        }(r);
                        else if (e instanceof a.Mesh)
                            for (i in o = e.material, void 0 === r.geometryGroups && r.makeGroups(o instanceof a.MeshFaceMaterial), r.geometryGroups)(n = r.geometryGroups[i]).__webglVertexBuffer || (de(n), Ae(n, e), r.verticesNeedUpdate = !0, r.morphTargetsNeedUpdate = !0, r.elementsNeedUpdate = !0, r.uvsNeedUpdate = !0, r.normalsNeedUpdate = !0, r.tangentsNeedUpdate = !0, r.colorsNeedUpdate = !0);
                        else e instanceof a.Line ? r.__webglVertexBuffer || (! function(e) {
                            e.__webglVertexBuffer = p.createBuffer(), e.__webglColorBuffer = p.createBuffer(), e.__webglLineDistanceBuffer = p.createBuffer(), x.info.memory.geometries++
                        }(r), function(e, t) {
                            var i = e.vertices.length;
                            e.__vertexArray = new Float32Array(3 * i), e.__colorArray = new Float32Array(3 * i), e.__lineDistanceArray = new Float32Array(1 * i), e.__webglLineCount = i, be(e, t)
                        }(r, e), r.verticesNeedUpdate = !0, r.colorsNeedUpdate = !0, r.lineDistancesNeedUpdate = !0) : e instanceof a.ParticleSystem && (r.__webglVertexBuffer || (! function(e) {
                            e.__webglVertexBuffer = p.createBuffer(), e.__webglColorBuffer = p.createBuffer(), x.info.memory.geometries++
                        }(r), function(e, t) {
                            var i = e.vertices.length;
                            e.__vertexArray = new Float32Array(3 * i), e.__colorArray = new Float32Array(3 * i), e.__sortArray = [], e.__webglParticleCount = i, be(e, t)
                        }(r, e), r.verticesNeedUpdate = !0, r.colorsNeedUpdate = !0));
                        if (void 0 === e.__webglActive) {
                            if (e instanceof a.Mesh) {
                                if ((r = e.geometry) instanceof a.BufferGeometry) Ge(t.__webglObjects, r, e);
                                else if (r instanceof a.Geometry)
                                    for (i in r.geometryGroups) n = r.geometryGroups[i], Ge(t.__webglObjects, n, e)
                            } else e instanceof a.Line || e instanceof a.ParticleSystem ? (r = e.geometry, Ge(t.__webglObjects, r, e)) : e instanceof a.ImmediateRenderObject || e.immediateRenderCallback ? function(e, t) {
                                e.push({
                                    id: null,
                                    object: t,
                                    opaque: null,
                                    transparent: null,
                                    z: 0
                                })
                            }(t.__webglObjectsImmediate, e) : e instanceof a.Sprite ? t.__webglSprites.push(e) : e instanceof a.LensFlare && t.__webglFlares.push(e);
                            e.__webglActive = !0
                        }
                    }

                    function Ge(e, t, i) {
                        e.push({
                            id: null,
                            buffer: t,
                            object: i,
                            opaque: null,
                            transparent: null,
                            z: 0
                        })
                    }

                    function He(e) {
                        var t, i, r, o = e.geometry;
                        if (o instanceof a.BufferGeometry) ! function(e, t) {
                            var i, r, a = e.attributes;
                            for (i in a)(r = a[i]).needsUpdate && ("index" === i ? (p.bindBuffer(p.ELEMENT_ARRAY_BUFFER, r.buffer), p.bufferData(p.ELEMENT_ARRAY_BUFFER, r.array, t)) : (p.bindBuffer(p.ARRAY_BUFFER, r.buffer), p.bufferData(p.ARRAY_BUFFER, r.array, t)), r.needsUpdate = !1)
                        }(o, p.DYNAMIC_DRAW);
                        else if (e instanceof a.Mesh) {
                            for (var n = 0, s = o.geometryGroupsList.length; n < s; n++) r = Te(e, t = o.geometryGroupsList[n]), o.buffersNeedUpdate && Ae(t, e), i = r.attributes && We(r), (o.verticesNeedUpdate || o.morphTargetsNeedUpdate || o.elementsNeedUpdate || o.uvsNeedUpdate || o.normalsNeedUpdate || o.colorsNeedUpdate || o.tangentsNeedUpdate || i) && Pe(t, e, p.DYNAMIC_DRAW, !o.dynamic, r);
                            o.verticesNeedUpdate = !1, o.morphTargetsNeedUpdate = !1, o.elementsNeedUpdate = !1, o.uvsNeedUpdate = !1, o.normalsNeedUpdate = !1, o.colorsNeedUpdate = !1, o.tangentsNeedUpdate = !1, o.buffersNeedUpdate = !1, r.attributes && je(r)
                        } else e instanceof a.Line ? (i = (r = Te(e, o)).attributes && We(r), (o.verticesNeedUpdate || o.colorsNeedUpdate || o.lineDistancesNeedUpdate || i) && function(e, t) {
                            var i, r, a, o, n, s, l, h, c, u, f, d, m = e.vertices,
                                g = e.colors,
                                v = e.lineDistances,
                                y = m.length,
                                x = g.length,
                                _ = v.length,
                                M = e.__vertexArray,
                                w = e.__colorArray,
                                S = e.__lineDistanceArray,
                                b = e.verticesNeedUpdate,
                                A = e.colorsNeedUpdate,
                                T = e.lineDistancesNeedUpdate,
                                C = e.__webglCustomAttributesList;
                            if (b) {
                                for (i = 0; i < y; i++) o = m[i], M[n = 3 * i] = o.x, M[n + 1] = o.y, M[n + 2] = o.z;
                                p.bindBuffer(p.ARRAY_BUFFER, e.__webglVertexBuffer), p.bufferData(p.ARRAY_BUFFER, M, t)
                            }
                            if (A) {
                                for (r = 0; r < x; r++) s = g[r], w[n = 3 * r] = s.r, w[n + 1] = s.g, w[n + 2] = s.b;
                                p.bindBuffer(p.ARRAY_BUFFER, e.__webglColorBuffer), p.bufferData(p.ARRAY_BUFFER, w, t)
                            }
                            if (T) {
                                for (a = 0; a < _; a++) S[a] = v[a];
                                p.bindBuffer(p.ARRAY_BUFFER, e.__webglLineDistanceBuffer), p.bufferData(p.ARRAY_BUFFER, S, t)
                            }
                            if (C)
                                for (l = 0, h = C.length; l < h; l++)
                                    if ((d = C[l]).needsUpdate && (void 0 === d.boundTo || "vertices" === d.boundTo)) {
                                        if (n = 0, u = d.value.length, 1 === d.size)
                                            for (c = 0; c < u; c++) d.array[c] = d.value[c];
                                        else if (2 === d.size)
                                            for (c = 0; c < u; c++) f = d.value[c], d.array[n] = f.x, d.array[n + 1] = f.y, n += 2;
                                        else if (3 === d.size)
                                            if ("c" === d.type)
                                                for (c = 0; c < u; c++) f = d.value[c], d.array[n] = f.r, d.array[n + 1] = f.g, d.array[n + 2] = f.b, n += 3;
                                            else
                                                for (c = 0; c < u; c++) f = d.value[c], d.array[n] = f.x, d.array[n + 1] = f.y, d.array[n + 2] = f.z, n += 3;
                                        else if (4 === d.size)
                                            for (c = 0; c < u; c++) f = d.value[c], d.array[n] = f.x, d.array[n + 1] = f.y, d.array[n + 2] = f.z, d.array[n + 3] = f.w, n += 4;
                                        p.bindBuffer(p.ARRAY_BUFFER, d.buffer), p.bufferData(p.ARRAY_BUFFER, d.array, t)
                                    }
                        }(o, p.DYNAMIC_DRAW), o.verticesNeedUpdate = !1, o.colorsNeedUpdate = !1, o.lineDistancesNeedUpdate = !1, r.attributes && je(r)) : e instanceof a.ParticleSystem && (i = (r = Te(e, o)).attributes && We(r), (o.verticesNeedUpdate || o.colorsNeedUpdate || e.sortParticles || i) && function(e, t, i) {
                            var r, a, o, n, s, l, h, c, u, f, d, m, g = e.vertices,
                                v = g.length,
                                y = e.colors,
                                x = y.length,
                                _ = e.__vertexArray,
                                M = e.__colorArray,
                                w = e.__sortArray,
                                S = e.verticesNeedUpdate,
                                b = (e.elementsNeedUpdate, e.colorsNeedUpdate),
                                A = e.__webglCustomAttributesList;
                            if (i.sortParticles) {
                                for (K.copy(q), K.multiply(i.matrixWorld), r = 0; r < v; r++) o = g[r], Q.copy(o), Q.applyProjection(K), w[r] = [Q.z, r];
                                for (w.sort(Fe), r = 0; r < v; r++) o = g[w[r][1]], _[n = 3 * r] = o.x, _[n + 1] = o.y, _[n + 2] = o.z;
                                for (a = 0; a < x; a++) n = 3 * a, l = y[w[a][1]], M[n] = l.r, M[n + 1] = l.g, M[n + 2] = l.b;
                                if (A)
                                    for (h = 0, c = A.length; h < c; h++)
                                        if (void 0 === (m = A[h]).boundTo || "vertices" === m.boundTo)
                                            if (n = 0, f = m.value.length, 1 === m.size)
                                                for (u = 0; u < f; u++) s = w[u][1], m.array[u] = m.value[s];
                                            else if (2 === m.size)
                                    for (u = 0; u < f; u++) s = w[u][1], d = m.value[s], m.array[n] = d.x, m.array[n + 1] = d.y, n += 2;
                                else if (3 === m.size)
                                    if ("c" === m.type)
                                        for (u = 0; u < f; u++) s = w[u][1], d = m.value[s], m.array[n] = d.r, m.array[n + 1] = d.g, m.array[n + 2] = d.b, n += 3;
                                    else
                                        for (u = 0; u < f; u++) s = w[u][1], d = m.value[s], m.array[n] = d.x, m.array[n + 1] = d.y, m.array[n + 2] = d.z, n += 3;
                                else if (4 === m.size)
                                    for (u = 0; u < f; u++) s = w[u][1], d = m.value[s], m.array[n] = d.x, m.array[n + 1] = d.y, m.array[n + 2] = d.z, m.array[n + 3] = d.w, n += 4
                            } else {
                                if (S)
                                    for (r = 0; r < v; r++) o = g[r], _[n = 3 * r] = o.x, _[n + 1] = o.y, _[n + 2] = o.z;
                                if (b)
                                    for (a = 0; a < x; a++) l = y[a], M[n = 3 * a] = l.r, M[n + 1] = l.g, M[n + 2] = l.b;
                                if (A)
                                    for (h = 0, c = A.length; h < c; h++)
                                        if ((m = A[h]).needsUpdate && (void 0 === m.boundTo || "vertices" === m.boundTo))
                                            if (f = m.value.length, n = 0, 1 === m.size)
                                                for (u = 0; u < f; u++) m.array[u] = m.value[u];
                                            else if (2 === m.size)
                                    for (u = 0; u < f; u++) d = m.value[u], m.array[n] = d.x, m.array[n + 1] = d.y, n += 2;
                                else if (3 === m.size)
                                    if ("c" === m.type)
                                        for (u = 0; u < f; u++) d = m.value[u], m.array[n] = d.r, m.array[n + 1] = d.g, m.array[n + 2] = d.b, n += 3;
                                    else
                                        for (u = 0; u < f; u++) d = m.value[u], m.array[n] = d.x, m.array[n + 1] = d.y, m.array[n + 2] = d.z, n += 3;
                                else if (4 === m.size)
                                    for (u = 0; u < f; u++) d = m.value[u], m.array[n] = d.x, m.array[n + 1] = d.y, m.array[n + 2] = d.z, m.array[n + 3] = d.w, n += 4
                            }
                            if ((S || i.sortParticles) && (p.bindBuffer(p.ARRAY_BUFFER, e.__webglVertexBuffer), p.bufferData(p.ARRAY_BUFFER, _, t)), (b || i.sortParticles) && (p.bindBuffer(p.ARRAY_BUFFER, e.__webglColorBuffer), p.bufferData(p.ARRAY_BUFFER, M, t)), A)
                                for (h = 0, c = A.length; h < c; h++)((m = A[h]).needsUpdate || i.sortParticles) && (p.bindBuffer(p.ARRAY_BUFFER, m.buffer), p.bufferData(p.ARRAY_BUFFER, m.array, t))
                        }(o, p.DYNAMIC_DRAW, e), o.verticesNeedUpdate = !1, o.colorsNeedUpdate = !1, r.attributes && je(r))
                    }

                    function We(e) {
                        for (var t in e.attributes)
                            if (e.attributes[t].needsUpdate) return !0;
                        return !1
                    }

                    function je(e) {
                        for (var t in e.attributes) e.attributes[t].needsUpdate = !1
                    }

                    function Xe(e, t) {
                        e instanceof a.Mesh || e instanceof a.ParticleSystem || e instanceof a.Line ? Ye(t.__webglObjects, e) : e instanceof a.Sprite ? qe(t.__webglSprites, e) : e instanceof a.LensFlare ? qe(t.__webglFlares, e) : (e instanceof a.ImmediateRenderObject || e.immediateRenderCallback) && Ye(t.__webglObjectsImmediate, e), delete e.__webglActive
                    }

                    function Ye(e, t) {
                        for (var i = e.length - 1; i >= 0; i--) e[i].object === t && e.splice(i, 1)
                    }

                    function qe(e, t) {
                        for (var i = e.length - 1; i >= 0; i--) e[i] === t && e.splice(i, 1)
                    }

                    function Ke(e, i, r, o, n) {
                        if (C = 0, o.needsUpdate) {
                            var s = o.program;
                            x.initMaterial(o, i, r, n), o.needsUpdate = !1, s && Se(o, s)
                        }
                        o.morphTargets && (n.__webglMorphTargetInfluences || (n.__webglMorphTargetInfluences = new Float32Array(x.maxMorphTargets)));
                        var l = !1,
                            h = o.program,
                            c = h.uniforms,
                            u = o.uniforms;
                        if (h !== w && (p.useProgram(h), w = h, l = !0), o.id !== b && (b = o.id, l = !0), (l || e !== T) && (p.uniformMatrix4fv(c.projectionMatrix, !1, e.projectionMatrix.elements), e !== T && (T = e)), o.skinning)
                            if (se && n.useVertexTexture) {
                                if (null !== c.boneTexture) {
                                    var f = Ze();
                                    p.uniform1i(c.boneTexture, f), x.setTexture(n.boneTexture, f)
                                }
                                null !== c.boneTextureWidth && p.uniform1i(c.boneTextureWidth, n.boneTextureWidth), null !== c.boneTextureHeight && p.uniform1i(c.boneTextureHeight, n.boneTextureHeight)
                            } else null !== c.boneGlobalMatrices && p.uniformMatrix4fv(c.boneGlobalMatrices, !1, n.boneMatrices);
                        return l && (r && o.fog && function(e, t) {
                                e.fogColor.value = t.color, t instanceof a.Fog ? (e.fogNear.value = t.near, e.fogFar.value = t.far) : t instanceof a.FogExp2 && (e.fogDensity.value = t.density)
                            }(u, r), (o instanceof a.MeshPhongMaterial || o instanceof a.MeshLambertMaterial || o instanceof a.MeshPhysicalMaterial || o.lights) && (ee && (! function(e, t) {
                                var i, r, o, n, s, l, h, c, u = 0,
                                    f = 0,
                                    p = 0,
                                    d = te,
                                    m = d.directional.colors,
                                    g = d.directional.positions,
                                    v = d.point.colors,
                                    y = d.point.positions,
                                    x = d.point.distances,
                                    _ = d.point.decayExponents,
                                    M = d.spot.colors,
                                    w = d.spot.positions,
                                    S = d.spot.distances,
                                    b = d.spot.decayExponents,
                                    A = d.spot.directions,
                                    T = d.spot.anglesCos,
                                    C = d.spot.exponents,
                                    E = d.hemi.skyColors,
                                    L = d.hemi.groundColors,
                                    P = d.hemi.positions,
                                    R = d.area.colors,
                                    D = d.area.positions,
                                    V = d.area.distances,
                                    U = d.area.decayExponents,
                                    F = d.area.widths,
                                    N = d.area.heights,
                                    O = 0,
                                    z = 0,
                                    I = 0,
                                    B = 0,
                                    k = 0,
                                    G = 0,
                                    H = 0,
                                    W = 0,
                                    j = 0,
                                    X = 0,
                                    Y = 0,
                                    q = 0,
                                    K = 0,
                                    ee = 0,
                                    ie = 0;
                                for (i = 0, r = t.length; i < r; i++)
                                    if (!(o = t[i]).onlyShadow)
                                        if (n = o.color, h = o.intensity, c = o.distance, o instanceof a.AmbientLight) {
                                            if (!o.visible) continue;
                                            u += n.r, f += n.g, p += n.b
                                        } else if (o instanceof a.DirectionalLight) {
                                    if (G += 1, !o.visible) continue;
                                    if ($.setFromMatrixPosition(o.matrixWorld), Q.setFromMatrixPosition(o.target.matrixWorld), $.sub(Q), $.normalize(), 0 === $.x && 0 === $.y && 0 === $.z) continue;
                                    g[Y = 3 * O] = $.x, g[Y + 1] = $.y, g[Y + 2] = $.z, $e(m, Y, n, h), O += 1
                                } else if (o instanceof a.PointLight) {
                                    if (H += 1, !o.visible) continue;
                                    $e(v, q = 3 * z, n, h), Q.setFromMatrixPosition(o.matrixWorld), y[q] = Q.x, y[q + 1] = Q.y, y[q + 2] = Q.z, x[z] = c, o.physicalFalloff ? _[z] = -1 : _[z] = 0 === c ? 0 : o.decayExponent, z += 1
                                } else if (o instanceof a.SpotLight) {
                                    if (W += 1, !o.visible) continue;
                                    $e(M, K = 3 * I, n, h), Q.setFromMatrixPosition(o.matrixWorld), w[K] = Q.x, w[K + 1] = Q.y, w[K + 2] = Q.z, S[I] = c, o.physicalFalloff ? b[z] = -1 : b[z] = 0 === c ? 0 : o.decayExponent, $.copy(Q), Q.setFromMatrixPosition(o.target.matrixWorld), $.sub(Q), $.normalize(), A[K] = $.x, A[K + 1] = $.y, A[K + 2] = $.z, T[I] = Math.cos(o.angle), C[I] = o.exponent, I += 1
                                } else if (o instanceof a.HemisphereLight) {
                                    if (j += 1, !o.visible) continue;
                                    if ($.setFromMatrixPosition(o.matrixWorld), $.normalize(), 0 === $.x && 0 === $.y && 0 === $.z) continue;
                                    P[ee = 3 * B] = $.x, P[ee + 1] = $.y, P[ee + 2] = $.z, s = o.color, l = o.groundColor, $e(E, ee, s, h), $e(L, ee, l, h), B += 1
                                } else if (o instanceof a.AreaLight) {
                                    if (X += 1, !o.visible) continue;
                                    $e(R, ie = 3 * k, n, h), Q.setFromMatrixPosition(o.matrixWorld), D[ie] = Q.x, D[ie + 1] = Q.y, D[ie + 2] = Q.z, V[k] = c, U[k] = o.decayExponent, o.matrixWorld.extractBasis(Z, J, Q), Z.multiplyScalar(o.width), J.multiplyScalar(o.height), F[ie] = Z.x, F[ie + 1] = Z.y, F[ie + 2] = Z.z, N[ie] = J.x, N[ie + 1] = J.y, N[ie + 2] = J.z, k += 1
                                }
                                for (i = 3 * O, r = Math.max(m.length, 3 * G); i < r; i++) m[i] = 0;
                                for (i = 3 * z, r = Math.max(v.length, 3 * H); i < r; i++) v[i] = 0;
                                for (i = 3 * I, r = Math.max(M.length, 3 * W); i < r; i++) M[i] = 0;
                                for (i = 3 * B, r = Math.max(E.length, 3 * j); i < r; i++) E[i] = 0;
                                for (i = 3 * B, r = Math.max(L.length, 3 * j); i < r; i++) L[i] = 0;
                                for (i = 3 * k, r = Math.max(R.length, 3 * X); i < r; i++) R[i] = 0;
                                d.directional.length = O, d.point.length = z, d.spot.length = I, d.hemi.length = B, d.area.length = k, d.ambient[0] = u, d.ambient[1] = f, d.ambient[2] = p
                            }(0, i), ee = !1), function(e, t) {
                                e.ambientLightColor.value = t.ambient, e.directionalLightColor.value = t.directional.colors, e.directionalLightDirection.value = t.directional.positions, e.pointLightColor.value = t.point.colors, e.pointLightPosition.value = t.point.positions, e.pointLightDistance.value = t.point.distances, e.pointLightDecayExponent.value = t.point.decayExponents, e.spotLightColor.value = t.spot.colors, e.spotLightPosition.value = t.spot.positions, e.spotLightDistance.value = t.spot.distances, e.spotLightDecayExponent.value = t.spot.decayExponents, e.spotLightDirection.value = t.spot.directions, e.spotLightAngleCos.value = t.spot.anglesCos, e.spotLightExponent.value = t.spot.exponents, e.hemisphereLightSkyColor.value = t.hemi.skyColors, e.hemisphereLightGroundColor.value = t.hemi.groundColors, e.hemisphereLightDirection.value = t.hemi.positions, e.areaLightColor.value = t.area.colors, e.areaLightPosition.value = t.area.positions, e.areaLightDistance.value = t.area.distances, e.areaLightDecayExponent.value = t.area.decayExponents, e.areaLightWidth.value = t.area.widths, e.areaLightHeight.value = t.area.heights
                            }(u, te)), (o instanceof a.MeshBasicMaterial || o instanceof a.MeshLambertMaterial || o instanceof a.MeshPhysicalMaterial || o instanceof a.MeshPhongMaterial) && function(e, t) {
                                e.opacity.value = t.opacity, e.diffuse.value = t.color, e.map.value = t.map, e.lightMap.value = t.lightMap, e.emissiveMap.value = t.emissiveMap, t.bumpMap && (e.bumpMap.value = t.bumpMap, e.bumpScale.value = t.bumpScale);
                                t.normalMap && (e.normalMap.value = t.normalMap, e.normalScale.value.copy(t.normalScale));
                                if (t.map) {
                                    var i = t.map;
                                    e.offsetRepeat.value.set(i.offset.x, i.offset.y, i.repeat.x, i.repeat.y), e.gainBrightness.value.set(i.gainPivot, i.gain, i.brightness, i.invert ? -1 : 1)
                                }
                                if (t.specularMap) {
                                    var r = t.specularMap;
                                    e.specularMap.value = r, e.specularOffsetRepeat.value.set(r.offset.x, r.offset.y, r.repeat.x, r.repeat.y), e.specularGainBrightness.value.set(r.gainPivot, r.gain, r.brightness, r.invert ? -1 : 1)
                                }
                                if (t.opacityMap) {
                                    var o = t.opacityMap;
                                    e.opacityMap.value = o, e.opacityOffsetRepeat.value.set(o.offset.x, o.offset.y, o.repeat.x, o.repeat.y), e.opacityGainBrightness.value.set(o.gainPivot, o.gain, o.brightness, o.invert ? -1 : 1)
                                }
                                if (t.bumpMap) {
                                    var n = t.bumpMap;
                                    e.bumpOffsetRepeat.value.set(n.offset.x, n.offset.y, n.repeat.x, n.repeat.y)
                                }
                                if (t.normalMap) {
                                    var s = t.normalMap;
                                    e.normalOffsetRepeat.value.set(s.offset.x, s.offset.y, s.repeat.x, s.repeat.y)
                                }
                                if (t.anisotropyMap) {
                                    var l = t.anisotropyMap;
                                    e.anisotropyOffsetRepeat.value.set(l.offset.x, l.offset.y, l.repeat.x, l.repeat.y), e.anisotropyGainBrightness.value.set(l.gainPivot, l.gain, l.brightness, l.invert ? -1 : 1)
                                }
                                if (t.anisotropyRotationMap) {
                                    var h = t.anisotropyRotationMap;
                                    e.anisotropyRotationOffsetRepeat.value.set(h.offset.x, h.offset.y, h.repeat.x, h.repeat.y), e.anisotropyRotationGainBrightness.value.set(h.gainPivot, h.gain, h.brightness, h.invert ? -1 : 1)
                                }
                                if (t.roughnessMap) {
                                    var c = t.roughnessMap;
                                    e.roughnessOffsetRepeat.value.set(c.offset.x, c.offset.y, c.repeat.x, c.repeat.y), e.roughnessGainBrightness.value.set(c.gainPivot, c.gain, c.brightness, c.invert ? -1 : 1)
                                }
                                if (t.metallicMap) {
                                    var u = t.metallicMap;
                                    e.metallicOffsetRepeat.value.set(u.offset.x, u.offset.y, u.repeat.x, u.repeat.y), e.metallicGainBrightness.value.set(u.gainPivot, u.gain, u.brightness, u.invert ? -1 : 1)
                                }
                                if (t.translucencyMap) {
                                    var f = t.translucencyMap;
                                    e.translucencyMap.value = f
                                }
                                e.envMap.value = t.envMap, e.flipEnvMap.value = t.envMap instanceof a.WebGLRenderTargetCube ? 1 : -1, e.envEncoding.value = t.envMap ? t.envMap.encoding : 0, e.diffuseEnvMap.value = t.diffuseEnvMap, e.diffuseEnvEncoding.value = t.diffuseEnvMap ? t.diffuseEnvMap.encoding : 0, e.reflectivity.value = t.reflectivity, e.refractionRatio.value = t.refractionRatio, e.combine.value = t.combine, e.useRefract.value = t.envMap && t.envMap.mapping instanceof a.CubeRefractionMapping
                            }(u, o), o instanceof a.LineBasicMaterial ? Qe(u, o) : o instanceof a.LineDashedMaterial ? (Qe(u, o), function(e, t) {
                                e.dashSize.value = t.dashSize, e.totalSize.value = t.dashSize + t.gapSize, e.scale.value = t.scale
                            }(u, o)) : o instanceof a.ParticleSystemMaterial ? function(e, i) {
                                e.psColor.value = i.color, e.opacity.value = i.opacity, e.size.value = i.size, e.scale.value = t.height / 2, e.map.value = i.map
                            }(u, o) : o instanceof a.MeshPhongMaterial ? function(e, t) {
                                e.opacityMap.value = t.opacityMap, e.shininess.value = t.shininess, e.ambient.value = t.ambient, e.emissive.value = t.emissive, e.specular.value = t.specular, t.wrapAround && e.wrapRGB.value.copy(t.wrapRGB)
                            }(u, o) : o instanceof a.MeshPhysicalMaterial ? function(e, t) {
                                e.opacityMap.value = t.opacityMap, e.falloffBlendParams.value = t.falloffBlendParams, e.falloffMap.value = t.falloffMap, e.roughness.value = t.roughness, e.metallic.value = t.metallic, e.clearCoat.value = t.clearCoat, e.clearCoatRoughness.value = t.clearCoatRoughness, e.roughnessMap.value = t.roughnessMap, e.metallicMap.value = t.metallicMap, e.translucencyMap.value = t.translucencyMap, e.translucencyNormalAlpha.value = t.translucencyNormalAlpha, e.translucencyNormalPower.value = t.translucencyNormalPower, e.translucencyViewAlpha.value = t.translucencyViewAlpha, e.translucencyViewPower.value = t.translucencyViewPower, e.anisotropyMap.value = t.anisotropyMap, e.anisotropy.value = t.anisotropy, e.anisotropyRotation.value = t.anisotropyRotation, e.anisotropyRotationMap.value = t.anisotropyRotationMap, e.ambient.value = t.ambient, e.emissive.value = t.emissive, e.falloffColor.value = t.falloffColor, e.specular.value = t.specular, e.translucency.value = t.translucency
                            }(u, o) : o instanceof a.MeshLambertMaterial ? function(e, t) {
                                e.ambient.value = t.ambient, e.emissive.value = t.emissive, t.wrapAround && e.wrapRGB.value.copy(t.wrapRGB)
                            }(u, o) : o instanceof a.MeshDepthMaterial ? (u.mNear.value = e.near, u.mFar.value = e.far, u.opacity.value = o.opacity) : o instanceof a.MeshNormalMaterial && (u.opacity.value = o.opacity), n.receiveShadow && !o._shadowPass && function(e, t) {
                                if (e.shadowMatrix)
                                    for (var i = 0, r = 0, o = t.length; r < o; r++) {
                                        var n = t[r];
                                        n.castShadow && ((n instanceof a.SpotLight || n instanceof a.DirectionalLight && !n.shadowCascade) && (e.shadowMap.value[i] = n.shadowMap, e.shadowMapSize.value[i] = n.shadowMapSize, e.shadowMatrix.value[i] = n.shadowMatrix, e.shadowDarkness.value[i] = n.shadowDarkness, e.shadowBias.value[i] = n.shadowBias, i++))
                                    }
                            }(u, i), function(e, t) {
                                var i, r, o, n, s, l, h, c, u, f, d;
                                for (u = 0, f = t.length; u < f; u++)
                                    if (n = e.uniforms[t[u][1]])
                                        if (o = (i = t[u][0]).type, r = i.value, "i" === o) p.uniform1i(n, r);
                                        else if ("f" === o) p.uniform1f(n, r);
                                else if ("v2" === o) p.uniform2f(n, r.x, r.y);
                                else if ("v3" === o) p.uniform3f(n, r.x, r.y, r.z);
                                else if ("v4" === o) p.uniform4f(n, r.x, r.y, r.z, r.w);
                                else if ("c" === o) p.uniform3f(n, r.r, r.g, r.b);
                                else if ("iv1" === o) p.uniform1iv(n, r);
                                else if ("iv" === o) p.uniform3iv(n, r);
                                else if ("fv1" === o) p.uniform1fv(n, r);
                                else if ("fv" === o) p.uniform3fv(n, r);
                                else if ("v2v" === o) {
                                    for (void 0 === i._array && (i._array = new Float32Array(2 * r.length)), h = 0, c = r.length; h < c; h++) d = 2 * h, i._array[d] = r[h].x, i._array[d + 1] = r[h].y;
                                    p.uniform2fv(n, i._array)
                                } else if ("v3v" === o) {
                                    for (void 0 === i._array && (i._array = new Float32Array(3 * r.length)), h = 0, c = r.length; h < c; h++) d = 3 * h, i._array[d] = r[h].x, i._array[d + 1] = r[h].y, i._array[d + 2] = r[h].z;
                                    p.uniform3fv(n, i._array)
                                } else if ("v4v" === o) {
                                    for (void 0 === i._array && (i._array = new Float32Array(4 * r.length)), h = 0, c = r.length; h < c; h++) d = 4 * h, i._array[d] = r[h].x, i._array[d + 1] = r[h].y, i._array[d + 2] = r[h].z, i._array[d + 3] = r[h].w;
                                    p.uniform4fv(n, i._array)
                                } else if ("m4" === o) void 0 === i._array && (i._array = new Float32Array(16)), r.flattenToArray(i._array), p.uniformMatrix4fv(n, !1, i._array);
                                else if ("m4v" === o) {
                                    for (void 0 === i._array && (i._array = new Float32Array(16 * r.length)), h = 0, c = r.length; h < c; h++) r[h].flattenToArrayOffset(i._array, 16 * h);
                                    p.uniformMatrix4fv(n, !1, i._array)
                                } else if ("t" === o) {
                                    if (s = r, l = Ze(), p.uniform1i(n, l), !s) continue;
                                    s.image instanceof Array && 6 === s.image.length ? st(s, l) : s instanceof a.WebGLRenderTargetCube ? lt(s, l) : x.setTexture(s, l)
                                } else if ("tv" === o) {
                                    for (void 0 === i._array && (i._array = []), h = 0, c = i.value.length; h < c; h++) i._array[h] = Ze();
                                    for (p.uniform1iv(n, i._array), h = 0, c = i.value.length; h < c; h++) s = i.value[h], l = i._array[h], s && x.setTexture(s, l)
                                } else a.onwarning("THREE.WebGLRenderer: Unknown uniform type: " + o)
                            }(h, o.uniformsList), (o instanceof a.ShaderMaterial || o instanceof a.MeshPhongMaterial || o instanceof a.MeshPhysicalMaterial || o.envMap || o.diffuseEnvMap) && null !== c.cameraPosition && (Q.setFromMatrixPosition(e.matrixWorld), p.uniform3f(c.cameraPosition, Q.x, Q.y, Q.z)), (o instanceof a.MeshPhongMaterial || o instanceof a.MeshLambertMaterial || o instanceof a.MeshPhysicalMaterial || o instanceof a.ShaderMaterial || o.skinning) && null !== c.viewMatrix && p.uniformMatrix4fv(c.viewMatrix, !1, e.matrixWorldInverse.elements)),
                            function(e, t) {
                                p.uniformMatrix4fv(e.modelViewMatrix, !1, t._modelViewMatrix.elements), e.normalMatrix && p.uniformMatrix3fv(e.normalMatrix, !1, t._normalMatrix.elements)
                            }(c, n), null !== c.modelMatrix && p.uniformMatrix4fv(c.modelMatrix, !1, n.matrixWorld.elements), h
                    }

                    function Qe(e, t) {
                        e.diffuse.value = t.color, e.opacity.value = t.opacity
                    }

                    function Ze() {
                        var e = C;
                        return e >= ie && a.onwarning("WebGLRenderer: trying to use " + e + " texture units while this GPU supports only " + ie), C += 1, e
                    }

                    function Je(e, t) {
                        e._modelViewMatrix.multiplyMatrices(t.matrixWorldInverse, e.matrixWorld), e._normalMatrix.getNormalMatrix(e._modelViewMatrix)
                    }

                    function $e(e, t, i, r) {
                        e[t] = i.r * r, e[t + 1] = i.g * r, e[t + 2] = i.b * r
                    }

                    function et(e) {
                        e !== I && (p.lineWidth(e), I = e)
                    }

                    function tt(e, t, i) {
                        N !== e && (e ? p.enable(p.POLYGON_OFFSET_FILL) : p.disable(p.POLYGON_OFFSET_FILL), N = e), !e || O === t && z === i || (p.polygonOffset(t, i), O = t, z = i)
                    }

                    function it(e) {
                        for (var t = e.split("\n"), i = 0, r = t.length; i < r; i++) t[i] = i + 1 + ": " + t[i];
                        return t.join("\n")
                    }

                    function rt(e, t, i, r) {
                        var o;
                        return "fragment" === e ? o = p.createShader(p.FRAGMENT_SHADER) : "vertex" === e && (o = p.createShader(p.VERTEX_SHADER)), p.shaderSource(o, t), p.compileShader(o), p.getShaderParameter(o, p.COMPILE_STATUS) ? o : (a.onerror("shader error: " + i + "." + e, {
                            getShaderParameter: p.getShaderParameter(o, p.COMPILE_STATUS),
                            shaderInfoLog: p.getShaderInfoLog(o),
                            shaderCode: it(t),
                            getError: p.getError(),
                            simpleCode: r,
                            gl_MAX_VARYING_VECTORS: p.getParameter(p.MAX_VARYING_VECTORS),
                            gl_MAX_VERTEX_ATTRIBS: p.getParameter(p.MAX_VERTEX_ATTRIBS),
                            gl_MAX_VERTEX_UNIFORM_VECTORS: p.getParameter(p.MAX_VERTEX_UNIFORM_VECTORS),
                            gl_MAX_VERTEX_TEXTURE_IMAGE_UNITS: p.getParameter(p.MAX_VERTEX_TEXTURE_IMAGE_UNITS),
                            gl_MAX_FRAGMENT_UNIFORM_VECTORS: p.getParameter(p.MAX_FRAGMENT_UNIFORM_VECTORS),
                            gl_MAX_TEXTURE_IMAGE_UNITS: p.getParameter(p.MAX_TEXTURE_IMAGE_UNITS)
                        }), null)
                    }

                    function at(e, t, i) {
                        i ? (p.texParameteri(e, p.TEXTURE_WRAP_S, ft(t.wrapS)), p.texParameteri(e, p.TEXTURE_WRAP_T, ft(t.wrapT)), p.texParameteri(e, p.TEXTURE_MAG_FILTER, ft(t.magFilter)), p.texParameteri(e, p.TEXTURE_MIN_FILTER, ft(t.minFilter))) : (p.texParameteri(e, p.TEXTURE_WRAP_S, p.CLAMP_TO_EDGE), p.texParameteri(e, p.TEXTURE_WRAP_T, p.CLAMP_TO_EDGE), p.texParameteri(e, p.TEXTURE_MAG_FILTER, ut(t.magFilter)), p.texParameteri(e, p.TEXTURE_MIN_FILTER, ut(t.minFilter))), v && t.type !== a.FloatType && (t.anisotropy > 1 || t.__oldAnisotropy) && (p.texParameterf(e, v.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(t.anisotropy, oe)), t.__oldAnisotropy = t.anisotropy)
                    }
                    this.renderBufferImmediate = function(e, t, i) {
                        if (e.hasPositions && !e.__webglVertexBuffer && (e.__webglVertexBuffer = p.createBuffer()), e.hasNormals && !e.__webglNormalBuffer && (e.__webglNormalBuffer = p.createBuffer()), e.hasUvs && !e.__webglUvBuffer && (e.__webglUvBuffer = p.createBuffer()), e.hasColors && !e.__webglColorBuffer && (e.__webglColorBuffer = p.createBuffer()), e.hasPositions && (p.bindBuffer(p.ARRAY_BUFFER, e.__webglVertexBuffer), p.bufferData(p.ARRAY_BUFFER, e.positionArray, p.DYNAMIC_DRAW), p.enableVertexAttribArray(t.attributes.position), p.vertexAttribPointer(t.attributes.position, 3, p.FLOAT, !1, 0, 0)), e.hasNormals) {
                            if (p.bindBuffer(p.ARRAY_BUFFER, e.__webglNormalBuffer), i.shading === a.FlatShading) {
                                var r, o, n, s, l, h, c, u, f, d, m, g = 3 * e.count;
                                for (m = 0; m < g; m += 9) s = (d = e.normalArray)[m], h = d[m + 1], u = d[m + 2], l = d[m + 3], c = d[m + 4], f = d[m + 5], r = (s + l + d[m + 6]) / 3, o = (h + c + d[m + 7]) / 3, n = (u + f + d[m + 8]) / 3, d[m] = r, d[m + 1] = o, d[m + 2] = n, d[m + 3] = r, d[m + 4] = o, d[m + 5] = n, d[m + 6] = r, d[m + 7] = o, d[m + 8] = n
                            }
                            p.bufferData(p.ARRAY_BUFFER, e.normalArray, p.DYNAMIC_DRAW), p.enableVertexAttribArray(t.attributes.normal), p.vertexAttribPointer(t.attributes.normal, 3, p.FLOAT, !1, 0, 0)
                        }
                        e.hasUvs && i.map && (p.bindBuffer(p.ARRAY_BUFFER, e.__webglUvBuffer), p.bufferData(p.ARRAY_BUFFER, e.uvArray, p.DYNAMIC_DRAW), p.enableVertexAttribArray(t.attributes.uv), p.vertexAttribPointer(t.attributes.uv, 2, p.FLOAT, !1, 0, 0)), e.hasColors && i.vertexColors !== a.NoColors && (p.bindBuffer(p.ARRAY_BUFFER, e.__webglColorBuffer), p.bufferData(p.ARRAY_BUFFER, e.colorArray, p.DYNAMIC_DRAW), p.enableVertexAttribArray(t.attributes.color), p.vertexAttribPointer(t.attributes.color, 3, p.FLOAT, !1, 0, 0)), p.drawArrays(p.TRIANGLES, 0, e.count), e.count = 0
                    }, this.renderBufferDirect = function(e, t, i, r, o, n) {
                        if (!1 !== r.visible) {
                            var s, l, h, c, u = Ke(e, t, i, r, n),
                                f = u.attributes,
                                d = o.attributes,
                                m = !1,
                                g = r.wireframe ? 1 : 0,
                                v = 16777215 * o.id + 2 * u.id + g;
                            if (v !== A && (A = v, m = !0), m && Ve(), n instanceof a.Mesh)
                                if (S = d.index) {
                                    (T = o.offsets).length > 1 && (m = !0);
                                    for (var y = 0, _ = T.length; y < _; y++) {
                                        var M = T[y].index;
                                        if (m) {
                                            for (l in f) h = f[l], s = d[l], h >= 0 && (s ? (c = s.itemSize, p.bindBuffer(p.ARRAY_BUFFER, s.buffer), De(h), p.vertexAttribPointer(h, c, p.FLOAT, !1, 0, M * c * 4)) : r.defaultAttributeValues && (2 === r.defaultAttributeValues[l].length ? p.vertexAttrib2fv(h, r.defaultAttributeValues[l]) : 3 === r.defaultAttributeValues[l].length && p.vertexAttrib3fv(h, r.defaultAttributeValues[l])));
                                            p.bindBuffer(p.ELEMENT_ARRAY_BUFFER, S.buffer)
                                        }
                                        p.drawElements(p.TRIANGLES, T[y].count, p.UNSIGNED_SHORT, 2 * T[y].start), x.info.render.calls++, x.info.render.vertices += T[y].count, x.info.render.faces += T[y].count / 3
                                    }
                                } else {
                                    if (m)
                                        for (l in f) "index" !== l && (h = f[l], s = d[l], h >= 0 && (s ? (c = s.itemSize, p.bindBuffer(p.ARRAY_BUFFER, s.buffer), De(h), p.vertexAttribPointer(h, c, p.FLOAT, !1, 0, 0)) : r.defaultAttributeValues && r.defaultAttributeValues[l] && (2 === r.defaultAttributeValues[l].length ? p.vertexAttrib2fv(h, r.defaultAttributeValues[l]) : 3 === r.defaultAttributeValues[l].length && p.vertexAttrib3fv(h, r.defaultAttributeValues[l]))));
                                    var w = o.attributes.position;
                                    p.drawArrays(p.TRIANGLES, 0, w.array.length / 3), x.info.render.calls++, x.info.render.vertices += w.array.length / 3, x.info.render.faces += w.array.length / 3 / 3
                                }
                            else if (n instanceof a.ParticleSystem) {
                                if (m)
                                    for (l in f) h = f[l], s = d[l], h >= 0 && (s ? (c = s.itemSize, p.bindBuffer(p.ARRAY_BUFFER, s.buffer), De(h), p.vertexAttribPointer(h, c, p.FLOAT, !1, 0, 0)) : r.defaultAttributeValues && r.defaultAttributeValues[l] && (2 === r.defaultAttributeValues[l].length ? p.vertexAttrib2fv(h, r.defaultAttributeValues[l]) : 3 === r.defaultAttributeValues[l].length && p.vertexAttrib3fv(h, r.defaultAttributeValues[l])));
                                w = d.position;
                                p.drawArrays(p.POINTS, 0, w.array.length / 3), x.info.render.calls++, x.info.render.points += w.array.length / 3
                            } else if (n instanceof a.Line) {
                                var S, b = n.type === a.LineStrip ? p.LINE_STRIP : p.LINES;
                                if (et(r.linewidth), S = d.index) {
                                    var T;
                                    (T = o.offsets).length > 1 && (m = !0);
                                    for (y = 0, _ = T.length; y < _; y++) {
                                        M = T[y].index;
                                        m && (Re(r, f, d, M), p.bindBuffer(p.ELEMENT_ARRAY_BUFFER, S.buffer)), p.drawElements(p.LINES, T[y].count, p.UNSIGNED_SHORT, 2 * T[y].start), x.info.render.calls++, x.info.render.vertices += T[y].count
                                    }
                                } else {
                                    m && Re(r, f, d, 0);
                                    w = d.position;
                                    p.drawArrays(b, 0, w.array.length / 3), x.info.render.calls++, x.info.render.points += w.array.length
                                }
                            }
                        }
                    }, this.renderBuffer = function(e, t, i, r, o, n) {
                        if (!1 !== r.visible) {
                            var s, l, h, c = Ke(e, t, i, r, n),
                                u = c.attributes,
                                f = !1,
                                d = r.wireframe ? 1 : 0,
                                m = 16777215 * o.id + 2 * c.id + d;
                            if (m !== A && (A = m, f = !0), f && Ve(), !r.morphTargets && u.position >= 0 ? f && (p.bindBuffer(p.ARRAY_BUFFER, o.__webglVertexBuffer), De(u.position), p.vertexAttribPointer(u.position, 3, p.FLOAT, !1, 0, 0)) : n.morphTargetBase && function(e, t, i) {
                                    var r = e.program.attributes; - 1 !== i.morphTargetBase && r.position >= 0 ? (p.bindBuffer(p.ARRAY_BUFFER, t.__webglMorphTargetsBuffers[i.morphTargetBase]), De(r.position), p.vertexAttribPointer(r.position, 3, p.FLOAT, !1, 0, 0)) : r.position >= 0 && (p.bindBuffer(p.ARRAY_BUFFER, t.__webglVertexBuffer), De(r.position), p.vertexAttribPointer(r.position, 3, p.FLOAT, !1, 0, 0));
                                    if (i.morphTargetForcedOrder.length)
                                        for (var a = 0, o = i.morphTargetForcedOrder, n = i.morphTargetInfluences; a < e.numSupportedMorphTargets && a < o.length;) r["morphTarget" + a] >= 0 && (p.bindBuffer(p.ARRAY_BUFFER, t.__webglMorphTargetsBuffers[o[a]]), De(r["morphTarget" + a]), p.vertexAttribPointer(r["morphTarget" + a], 3, p.FLOAT, !1, 0, 0)), r["morphNormal" + a] >= 0 && e.morphNormals && (p.bindBuffer(p.ARRAY_BUFFER, t.__webglMorphNormalsBuffers[o[a]]), De(r["morphNormal" + a]), p.vertexAttribPointer(r["morphNormal" + a], 3, p.FLOAT, !1, 0, 0)), i.__webglMorphTargetInfluences[a] = n[o[a]], a++;
                                    else {
                                        var s, l, h = [],
                                            c = (n = i.morphTargetInfluences).length;
                                        for (l = 0; l < c; l++)(s = n[l]) > 0 && h.push([s, l]);
                                        h.length > e.numSupportedMorphTargets ? (h.sort(Fe), h.length = e.numSupportedMorphTargets) : h.length > e.numSupportedMorphNormals ? h.sort(Fe) : 0 === h.length && h.push([0, 0]);
                                        var u;
                                        for (a = 0; a < e.numSupportedMorphTargets;) h[a] ? (u = h[a][1], r["morphTarget" + a] >= 0 && (p.bindBuffer(p.ARRAY_BUFFER, t.__webglMorphTargetsBuffers[u]), De(r["morphTarget" + a]), p.vertexAttribPointer(r["morphTarget" + a], 3, p.FLOAT, !1, 0, 0)), r["morphNormal" + a] >= 0 && e.morphNormals && (p.bindBuffer(p.ARRAY_BUFFER, t.__webglMorphNormalsBuffers[u]), De(r["morphNormal" + a]), p.vertexAttribPointer(r["morphNormal" + a], 3, p.FLOAT, !1, 0, 0)), i.__webglMorphTargetInfluences[a] = n[u]) : i.__webglMorphTargetInfluences[a] = 0, a++
                                    }
                                    null !== e.program.uniforms.morphTargetInfluences && p.uniform1fv(e.program.uniforms.morphTargetInfluences, i.__webglMorphTargetInfluences)
                                }(r, o, n), f) {
                                if (o.__webglCustomAttributesList)
                                    for (l = 0, h = o.__webglCustomAttributesList.length; l < h; l++) u[(s = o.__webglCustomAttributesList[l]).buffer.belongsToAttribute] >= 0 && (p.bindBuffer(p.ARRAY_BUFFER, s.buffer), De(u[s.buffer.belongsToAttribute]), p.vertexAttribPointer(u[s.buffer.belongsToAttribute], s.size, p.FLOAT, !1, 0, 0));
                                u.color >= 0 && (n.geometry.colors.length > 0 || n.geometry.faces.length > 0 ? (p.bindBuffer(p.ARRAY_BUFFER, o.__webglColorBuffer), De(u.color), p.vertexAttribPointer(u.color, 3, p.FLOAT, !1, 0, 0)) : r.defaultAttributeValues && p.vertexAttrib3fv(u.color, r.defaultAttributeValues.color)), u.normal >= 0 && (p.bindBuffer(p.ARRAY_BUFFER, o.__webglNormalBuffer), De(u.normal), p.vertexAttribPointer(u.normal, 3, p.FLOAT, !1, 0, 0)), u.tangent >= 0 && (p.bindBuffer(p.ARRAY_BUFFER, o.__webglTangentBuffer), De(u.tangent), p.vertexAttribPointer(u.tangent, 4, p.FLOAT, !1, 0, 0)), u.uv >= 0 && (n.geometry.faceVertexUvs[0] ? (p.bindBuffer(p.ARRAY_BUFFER, o.__webglUVBuffer), De(u.uv), p.vertexAttribPointer(u.uv, 2, p.FLOAT, !1, 0, 0)) : r.defaultAttributeValues && p.vertexAttrib2fv(u.uv, r.defaultAttributeValues.uv)), u.uv2 >= 0 && (n.geometry.faceVertexUvs[1] ? (p.bindBuffer(p.ARRAY_BUFFER, o.__webglUV2Buffer), De(u.uv2), p.vertexAttribPointer(u.uv2, 2, p.FLOAT, !1, 0, 0)) : r.defaultAttributeValues && p.vertexAttrib2fv(u.uv2, r.defaultAttributeValues.uv2)), r.skinning && u.skinIndex >= 0 && u.skinWeight >= 0 && (p.bindBuffer(p.ARRAY_BUFFER, o.__webglSkinIndicesBuffer), De(u.skinIndex), p.vertexAttribPointer(u.skinIndex, 4, p.FLOAT, !1, 0, 0), p.bindBuffer(p.ARRAY_BUFFER, o.__webglSkinWeightsBuffer), De(u.skinWeight), p.vertexAttribPointer(u.skinWeight, 4, p.FLOAT, !1, 0, 0)), u.lineDistance >= 0 && (p.bindBuffer(p.ARRAY_BUFFER, o.__webglLineDistanceBuffer), De(u.lineDistance), p.vertexAttribPointer(u.lineDistance, 1, p.FLOAT, !1, 0, 0))
                            }
                            if (n instanceof a.Mesh) r.wireframe ? (et(r.wireframeLinewidth), f && p.bindBuffer(p.ELEMENT_ARRAY_BUFFER, o.__webglLineBuffer), p.drawElements(p.LINES, o.__webglLineCount, p.UNSIGNED_SHORT, 0)) : (f && p.bindBuffer(p.ELEMENT_ARRAY_BUFFER, o.__webglFaceBuffer), p.drawElements(p.TRIANGLES, o.__webglFaceCount, p.UNSIGNED_SHORT, 0)), x.info.render.calls++, x.info.render.vertices += o.__webglFaceCount, x.info.render.faces += o.__webglFaceCount / 3;
                            else if (n instanceof a.Line) {
                                var g = n.type === a.LineStrip ? p.LINE_STRIP : p.LINES;
                                et(r.linewidth), p.drawArrays(g, 0, o.__webglLineCount), x.info.render.calls++
                            } else n instanceof a.ParticleSystem && (p.drawArrays(p.POINTS, 0, o.__webglParticleCount), x.info.render.calls++, x.info.render.points += o.__webglParticleCount)
                        }
                    }, this.render = function(e, t, i, r) {
                        if (t instanceof a.Camera !== !1) {
                            var o, n, s, l, h, c = e.__lights,
                                u = e.fog;
                            for (b = -1, ee = !0, !0 === e.autoUpdate && e.updateMatrixWorld(), void 0 === t.parent && t.updateMatrixWorld(), t.matrixWorldInverse.getInverse(t.matrixWorld), q.multiplyMatrices(t.projectionMatrix, t.matrixWorldInverse), Y.setFromMatrix(q), this.autoUpdateObjects && this.initWebGLObjects(e), Ne(this.renderPluginsPre, e, t), x.info.render.calls = 0, x.info.render.vertices = 0, x.info.render.faces = 0, x.info.render.points = 0, this.setRenderTarget(i), (this.autoClear || r) && this.clear(this.autoClearColor, this.autoClearDepth, this.autoClearStencil), o = 0, n = (h = e.__webglObjects).length; o < n; o++) l = (s = h[o]).object, s.id = o, s.render = !1, l.visible && ((l instanceof a.Mesh || l instanceof a.ParticleSystem) && l.frustumCulled && !Y.intersectsObject(l) || (Je(l, t), Be(s), s.render = !0, !0 === this.sortObjects && (null !== l.renderDepth ? s.z = l.renderDepth : (Q.setFromMatrixPosition(l.matrixWorld), Q.applyProjection(q), s.z = Q.z))));
                            for (this.sortObjects && h.sort(Ue), o = 0, n = (h = e.__webglObjectsImmediate).length; o < n; o++)(l = (s = h[o]).object).visible && (Je(l, t), Ie(s));
                            if (e.overrideMaterial) {
                                var f = e.overrideMaterial;
                                this.setBlending(f.blending, f.blendEquation, f.blendSrc, f.blendDst), this.setDepthTest(f.depthTest), this.setDepthWrite(f.depthWrite), tt(f.polygonOffset, f.polygonOffsetFactor, f.polygonOffsetUnits), Oe(e.__webglObjects, !1, "", t, c, u, !0, f), ze(e.__webglObjectsImmediate, "", t, c, u, !1, f)
                            } else {
                                f = null;
                                this.setBlending(a.NoBlending), Oe(e.__webglObjects, !0, "opaque", t, c, u, !1, f), ze(e.__webglObjectsImmediate, "opaque", t, c, u, !1, f), Oe(e.__webglObjects, !1, "transparent", t, c, u, !0, f), ze(e.__webglObjectsImmediate, "transparent", t, c, u, !0, f)
                            }
                            Ne(this.renderPluginsPost, e, t), i && i.generateMipmaps && i.minFilter !== a.NearestFilter && i.minFilter !== a.LinearFilter && a.isPowerOfTwo(i.width) && a.isPowerOfTwo(i.height) && function(e) {
                                e instanceof a.WebGLRenderTargetCube ? (p.bindTexture(p.TEXTURE_CUBE_MAP, e.__webglTexture), p.generateMipmap(p.TEXTURE_CUBE_MAP), ot("_gl.generateMipmap CubeMap, renderTarget.name: " + e.name, e), p.bindTexture(p.TEXTURE_CUBE_MAP, null)) : (p.bindTexture(p.TEXTURE_2D, e.__webglTexture), p.generateMipmap(p.TEXTURE_2D), ot("_gl.generateMipmap, renderTarget.name: " + e.name, e), p.bindTexture(p.TEXTURE_2D, null))
                            }(i), this.setDepthTest(!0), this.setDepthWrite(!0)
                        } else a.onerror("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.")
                    }, this.renderImmediateObject = function(e, t, i, r, a) {
                        var o = Ke(e, t, i, r, a);
                        A = -1, x.setMaterialFaces(r), a.immediateRenderCallback ? a.immediateRenderCallback(o, p, Y) : a.render((function(e) {
                            x.renderBufferImmediate(e, o, r)
                        }))
                    }, this.initWebGLObjects = function(e) {
                        for (e.__webglObjects || (e.__webglObjects = [], e.__webglObjectsImmediate = [], e.__webglSprites = [], e.__webglFlares = []); e.__objectsAdded.length;) ke(e.__objectsAdded[0], e), e.__objectsAdded.splice(0, 1);
                        for (; e.__objectsRemoved.length;) Xe(e.__objectsRemoved[0], e), e.__objectsRemoved.splice(0, 1);
                        for (var t = 0, i = e.__webglObjects.length; t < i; t++) {
                            var r = e.__webglObjects[t].object;
                            void 0 === r.__webglInit && (void 0 !== r.__webglActive && Xe(r, e), ke(r, e)), He(r)
                        }
                    }, this.initMaterial = function(e, t, i, r) {
                        var n, s, l, h, c, u, f;
                        e.addEventListener("dispose", ye), e instanceof a.MeshDepthMaterial ? f = "depth" : e instanceof a.MeshNormalMaterial ? f = "normal" : e instanceof a.MeshBasicMaterial ? f = "basic" : e instanceof a.MeshLambertMaterial ? f = "lambert" : e instanceof a.MeshPhongMaterial ? f = "phong" : e instanceof a.MeshPhysicalMaterial ? f = "physical" : e instanceof a.LineBasicMaterial ? f = "basic" : e instanceof a.LineDashedMaterial ? f = "dashed" : e instanceof a.ParticleSystemMaterial && (f = "particle_basic"), f && a.ShaderLib[f] && function(e, t) {
                            e.uniforms = a.UniformsUtils.clone(t.uniforms), e.vertexShader = t.vertexShader, e.fragmentShader = t.fragmentShader
                        }(e, a.ShaderLib[f]), f || (f = e.shaderID), h = function(e) {
                            for (var t = 0, i = 0, r = 0, o = 0, n = 0, s = 0, l = e.length; s < l; s++) {
                                var h = e[s];
                                h.onlyShadow || !1 === h.visible || (h instanceof a.DirectionalLight && t++, h instanceof a.PointLight && i++, h instanceof a.SpotLight && r++, h instanceof a.HemisphereLight && o++, h instanceof a.AreaLight && n++)
                            }
                            return {
                                directional: t,
                                point: i,
                                spot: r,
                                hemi: o,
                                area: n
                            }
                        }(t), u = function(e) {
                            for (var t = 0, i = 0, r = e.length; i < r; i++) {
                                var o = e[i];
                                o.castShadow && (o instanceof a.SpotLight && t++, o instanceof a.DirectionalLight && !o.shadowCascade && t++)
                            }
                            return t
                        }(t), c = function(e) {
                            if (se && e && e.useVertexTexture) return 1024;
                            var t = p.getParameter(p.MAX_VERTEX_UNIFORM_VECTORS),
                                i = Math.floor((t - 20) / 4);
                            return void 0 !== e && e instanceof a.SkinnedMesh && (i = Math.min(e.bones.length, i)) < e.bones.length && a.onwarning("WebGLRenderer: too many bones - " + e.bones.length + ", this GPU supports just " + i + " (try OpenGL instead of ANGLE)"), i
                        }(r), l = {
                            map: !!e.map,
                            opacityMap: !!e.opacityMap,
                            envMap: !!e.envMap,
                            diffuseEnvMap: !!e.diffuseEnvMap,
                            lightMap: !!e.lightMap,
                            emissiveMap: !!e.emissiveMap,
                            bumpMap: !!e.bumpMap,
                            normalMap: !!e.normalMap,
                            specularMap: !!e.specularMap,
                            reflectivityMap: !!e.reflectivityMap,
                            roughnessMap: !!e.roughnessMap,
                            translucencyMap: !!e.translucencyMap,
                            metallicMap: !!e.metallicMap,
                            falloffMap: !!e.falloffMap,
                            clearCoat: void 0 !== e.clearCoat && 0 !== e.clearCoat,
                            anisotropy: void 0 !== e.anisotropy && 0 !== e.anisotropy || !!e.anisotropyMap,
                            anisotropyMap: !!e.anisotropyMap,
                            anisotropyRotation: void 0 !== e.anisotropyRotation && 0 !== e.anisotropyRotation || !!e.anisotropyRotationMap,
                            anisotropyRotationMap: !!e.anisotropyRotationMap,
                            vertexColors: e.vertexColors,
                            fog: i,
                            useFog: e.fog,
                            fogExp: i instanceof a.FogExp2,
                            sizeAttenuation: !!e.sizeAttenuation,
                            skinning: e.skinning,
                            maxBones: c,
                            useVertexTexture: se && r && r.useVertexTexture,
                            morphTargets: e.morphTargets,
                            morphNormals: e.morphNormals,
                            maxMorphTargets: this.maxMorphTargets,
                            maxMorphNormals: this.maxMorphNormals,
                            maxDirLights: h.directional,
                            maxPointLights: h.point,
                            maxSpotLights: h.spot,
                            maxHemiLights: h.hemi,
                            maxAreaLights: h.area,
                            maxShadows: u,
                            shadowMapEnabled: this.shadowMapEnabled && r.receiveShadow && u > 0,
                            shadowMapType: this.shadowMapType,
                            shadowMapDebug: this.shadowMapDebug,
                            shadowMapCascade: this.shadowMapCascade,
                            translucency: e.translucency && e.translucency.getHex() > 0,
                            alphaTest: e.alphaTest,
                            falloff: e.falloff || !1,
                            wrapAround: e.wrapAround,
                            doubleSided: e.side === a.DoubleSide,
                            flipSided: e.side === a.BackSide
                        }, e.program = function(e, t, i, r, n, s, l, h) {
                            var c, u, f, d, m, v = [],
                                y = [];
                            e ? (y.push(e), v.push(e)) : (y.push(t), y.push(i));
                            for (f in s) y.push(f), y.push(s[f]), v.push(f), v.push(s[f]);
                            for (c in l) y.push(c), y.push(l[c]), v.push(c), v.push(l[c]);
                            m = y.join();
                            var w = v.join();
                            for (c = 0, u = _.length; c < u; c++) {
                                var S = _[c];
                                if (S.code.length === m.length && S.code === m) return S.usedTimes++, S.program
                            }
                            var b = "SHADOWMAP_TYPE_BASIC";
                            l.shadowMapType === a.PCFShadowMap ? b = "SHADOWMAP_TYPE_PCF" : l.shadowMapType === a.PCFSoftShadowMap && (b = "SHADOWMAP_TYPE_PCF_SOFT");
                            var A = function(e) {
                                var t, i, r = [];
                                for (var a in e) !1 !== (t = e[a]) && (i = "#define " + a + " " + t, r.push(i));
                                return r.join("\n")
                            }(s);
                            d = p.createProgram();
                            var T = null !== g,
                                C = ["precision " + o + " float;", "precision " + o + " int;", A, ne ? "#define VERTEX_TEXTURES" : "", x.gammaInput ? "#define GAMMA_INPUT" : "", x.gammaOutput ? "#define GAMMA_OUTPUT" : "", "#define MAX_DIR_LIGHTS " + l.maxDirLights, "#define MAX_POINT_LIGHTS " + l.maxPointLights, "#define MAX_SPOT_LIGHTS " + l.maxSpotLights, "#define MAX_HEMI_LIGHTS " + l.maxHemiLights, "#define MAX_AREA_LIGHTS " + l.maxAreaLights, "#define MAX_SHADOWS " + l.maxShadows, "#define MAX_BONES " + l.maxBones, l.map ? "#define USE_MAP" : "", l.opacityMap ? "#define USE_OPACITYMAP" : "", l.falloffMap ? "#define USE_FALLOFFMAP" : "", l.translucencyMap ? "#define USE_TRANSLUCENCYMAP" : "", l.envMap ? "#define USE_ENVMAP" : "", l.diffuseEnvMap ? "#define USE_DIFFUSEENVMAP" : "", l.lightMap ? "#define USE_LIGHTMAP" : "", l.emissiveMap ? "#define USE_EMISSIVEMAP" : "", l.bumpMap ? "#define USE_BUMPMAP" : "", l.reflectivityMap ? "#define USE_REFLECTIVITYMAP" : "", l.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", l.metallicMap ? "#define USE_METALLICMAP" : "", l.normalMap ? "#define USE_NORMALMAP" : "", l.specularMap ? "#define USE_SPECULARMAP" : "", l.vertexColors ? "#define USE_COLOR" : "", l.clearCoat ? "#define CLEARCOAT" : "", l.anisotropy ? "#define ANISOTROPY" : "", l.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "", l.anisotropy && l.anisotropyRotation ? "#define ANISOTROPYROTATION" : "", l.anisotropy && l.anisotropyRotationMap ? "#define USE_ANISOTROPYROTATIONMAP" : "", l.skinning ? "#define USE_SKINNING" : "", l.useVertexTexture ? "#define BONE_TEXTURE" : "", l.morphTargets ? "#define USE_MORPHTARGETS" : "", l.morphNormals ? "#define USE_MORPHNORMALS" : "", l.wrapAround ? "#define WRAP_AROUND" : "", l.doubleSided ? "#define DOUBLE_SIDED" : "", l.flipSided ? "#define FLIP_SIDED" : "", l.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", l.shadowMapEnabled ? "#define " + b : "", l.shadowMapDebug ? "#define SHADOWMAP_DEBUG" : "", l.shadowMapCascade ? "#define SHADOWMAP_CASCADE" : "", l.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "", "uniform mat4 modelMatrix;", "uniform mat4 modelViewMatrix;", "uniform mat4 projectionMatrix;", "uniform mat4 viewMatrix;", "uniform mat3 normalMatrix;", "uniform vec3 cameraPosition;", "attribute vec3 position;", "attribute vec3 normal;", "attribute vec2 uv;", "attribute vec2 uv2;", "#ifdef USE_COLOR", "attribute vec3 color;", "#endif", "#ifdef USE_MORPHTARGETS", "attribute vec3 morphTarget0;", "attribute vec3 morphTarget1;", "attribute vec3 morphTarget2;", "attribute vec3 morphTarget3;", "#ifdef USE_MORPHNORMALS", "attribute vec3 morphNormal0;", "attribute vec3 morphNormal1;", "attribute vec3 morphNormal2;", "attribute vec3 morphNormal3;", "#else", "attribute vec3 morphTarget4;", "attribute vec3 morphTarget5;", "attribute vec3 morphTarget6;", "attribute vec3 morphTarget7;", "#endif", "#endif", "#ifdef USE_SKINNING", "attribute vec4 skinIndex;", "attribute vec4 skinWeight;", "#endif", ""].join("\n"),
                                E = ["precision " + o + " float;", "precision " + o + " int;", l.bumpMap || l.normalMap ? "#extension GL_OES_standard_derivatives : enable" : "", A, "#define MAX_DIR_LIGHTS " + l.maxDirLights, "#define MAX_POINT_LIGHTS " + l.maxPointLights, "#define MAX_SPOT_LIGHTS " + l.maxSpotLights, "#define MAX_HEMI_LIGHTS " + l.maxHemiLights, "#define MAX_AREA_LIGHTS " + l.maxAreaLights, "#define MAX_SHADOWS " + l.maxShadows, l.alphaTest ? "#define ALPHATEST " + l.alphaTest : "", x.gammaInput ? "#define GAMMA_INPUT" : "", x.gammaOutput ? "#define GAMMA_OUTPUT" : "", l.useFog && l.fog ? "#define USE_FOG" : "", l.useFog && l.fogExp ? "#define FOG_EXP2" : "", l.map ? "#define USE_MAP" : "", l.opacityMap ? "#define USE_OPACITYMAP" : "", l.falloffMap ? "#define USE_FALLOFFMAP" : "", l.translucencyMap ? "#define USE_TRANSLUCENCYMAP" : "", l.envMap ? "#define USE_ENVMAP" : "", l.diffuseEnvMap ? "#define USE_DIFFUSEENVMAP" : "", l.lightMap ? "#define USE_LIGHTMAP" : "", l.emissiveMap ? "#define USE_EMISSIVEMAP" : "", l.bumpMap ? "#define USE_BUMPMAP" : "", l.reflectivityMap ? "#define USE_REFLECTIVITYMAP" : "", l.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", l.metallicMap ? "#define USE_METALLICMAP" : "", l.normalMap ? "#define USE_NORMALMAP" : "", l.specularMap ? "#define USE_SPECULARMAP" : "", l.vertexColors ? "#define USE_COLOR" : "", l.clearCoat ? "#define CLEARCOAT" : "", l.translucency ? "#define TRANSLUCENCY" : "", l.anisotropy ? "#define ANISOTROPY" : "", l.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "", l.anisotropy && l.anisotropyRotation ? "#define ANISOTROPYROTATION" : "", l.anisotropy && l.anisotropyRotationMap ? "#define USE_ANISOTROPYROTATIONMAP" : "", l.falloff ? "#define FALLOFF" : "", l.wrapAround ? "#define WRAP_AROUND" : "", l.doubleSided ? "#define DOUBLE_SIDED" : "", l.flipSided ? "#define FLIP_SIDED" : "", l.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", l.shadowMapEnabled ? "#define " + b : "", l.shadowMapDebug ? "#define SHADOWMAP_DEBUG" : "", l.shadowMapCascade ? "#define SHADOWMAP_CASCADE" : "", T ? "#define TEXTURE_CUBE_LOD_EXT" : "", "uniform mat4 viewMatrix;", "uniform vec3 cameraPosition;", ""].join("\n"),
                                L = rt("vertex", C + i, e, w),
                                P = rt("fragment", E + t, e, w);
                            p.attachShader(d, L, m), p.attachShader(d, P, m), void 0 !== h && p.bindAttribLocation(d, 0, h);
                            p.linkProgram(d);
                            var R, D, V, U, F = p.getProgramInfoLog(d);
                            if (!1 === p.getProgramParameter(d, p.LINK_STATUS)) {
                                var N = p.getError();
                                a.onerror(e + " shader program error: " + N + "\n " + F, {
                                    shaderID: e,
                                    programInfo: F,
                                    glError: N,
                                    vertexShader: C + i,
                                    fragmentShader: E + t,
                                    getProgramParameter_LINK_STATUS: p.getProgramParameter(d, p.LINK_STATUS),
                                    getProgramParameter_VALIDATE_STATUS: p.getProgramParameter(d, p.VALIDATE_STATUS),
                                    getProgramParameter_ATTACHED_SHADERS: p.getProgramParameter(d, p.ATTACHED_SHADERS),
                                    getProgramParameter_ACTIVE_ATTRIBUTES: p.getProgramParameter(d, p.ACTIVE_ATTRIBUTES),
                                    getProgramParameter_ACTIVE_UNIFORMS: p.getProgramParameter(d, p.ACTIVE_UNIFORMS),
                                    gl_MAX_VARYING_VECTORS: p.getParameter(p.MAX_VARYING_VECTORS),
                                    gl_MAX_VERTEX_ATTRIBS: p.getParameter(p.MAX_VERTEX_ATTRIBS),
                                    gl_MAX_VERTEX_UNIFORM_VECTORS: p.getParameter(p.MAX_VERTEX_UNIFORM_VECTORS),
                                    gl_MAX_VERTEX_TEXTURE_IMAGE_UNITS: p.getParameter(p.MAX_VERTEX_TEXTURE_IMAGE_UNITS),
                                    gl_MAX_FRAGMENT_UNIFORM_VECTORS: p.getParameter(p.MAX_FRAGMENT_UNIFORM_VECTORS),
                                    gl_MAX_TEXTURE_IMAGE_UNITS: p.getParameter(p.MAX_TEXTURE_IMAGE_UNITS)
                                })
                            }
                            p.deleteShader(P), p.deleteShader(L), d.uniforms = {}, d.attributes = {}, R = ["viewMatrix", "modelViewMatrix", "projectionMatrix", "normalMatrix", "modelMatrix", "cameraPosition", "morphTargetInfluences"], l.useVertexTexture ? (R.push("boneTexture"), R.push("boneTextureWidth"), R.push("boneTextureHeight")) : R.push("boneGlobalMatrices");
                            for (D in r) R.push(D);
                            for (function(e, t) {
                                    var i, r, a;
                                    for (i = 0, r = t.length; i < r; i++) a = t[i], e.uniforms[a] = p.getUniformLocation(e, a)
                                }(d, R), R = ["position", "normal", "uv", "uv2", "tangent", "color", "skinIndex", "skinWeight", "lineDistance"], U = 0; U < l.maxMorphTargets; U++) R.push("morphTarget" + U);
                            for (U = 0; U < l.maxMorphNormals; U++) R.push("morphNormal" + U);
                            for (V in n) R.push(V);
                            return function(e, t) {
                                var i, r, a;
                                for (i = 0, r = t.length; i < r; i++) a = t[i], e.attributes[a] = p.getAttribLocation(e, a)
                            }(d, R), d.id = M++, _.push({
                                program: d,
                                code: m,
                                usedTimes: 1
                            }), x.info.memory.programs = _.length, d
                        }(f, e.fragmentShader, e.vertexShader, e.uniforms, e.attributes, e.defines, l, e.index0AttributeName);
                        var d = e.program.attributes;
                        if (e.morphTargets) {
                            e.numSupportedMorphTargets = 0;
                            var m = "morphTarget";
                            for (s = 0; s < this.maxMorphTargets; s++) d[m + s] >= 0 && e.numSupportedMorphTargets++
                        }
                        if (e.morphNormals) {
                            e.numSupportedMorphNormals = 0;
                            m = "morphNormal";
                            for (s = 0; s < this.maxMorphNormals; s++) d[m + s] >= 0 && e.numSupportedMorphNormals++
                        }
                        for (n in e.uniformsList = [], e.uniforms) e.uniformsList.push([e.uniforms[n], n])
                    }, this.setFaceCulling = function(e, t) {
                        e === a.CullFaceNone ? p.disable(p.CULL_FACE) : (t === a.FrontFaceDirectionCW ? p.frontFace(p.CW) : p.frontFace(p.CCW), e === a.CullFaceBack ? p.cullFace(p.BACK) : e === a.CullFaceFront ? p.cullFace(p.FRONT) : p.cullFace(p.FRONT_AND_BACK), p.enable(p.CULL_FACE))
                    }, this.setMaterialFaces = function(e) {
                        var t = e.side === a.DoubleSide,
                            i = e.side === a.BackSide;
                        E !== t && (t ? p.disable(p.CULL_FACE) : p.enable(p.CULL_FACE), E = t), L !== i && (i ? p.frontFace(p.CW) : p.frontFace(p.CCW), L = i)
                    }, this.setDepthTest = function(e) {
                        U !== e && (e ? p.enable(p.DEPTH_TEST) : p.disable(p.DEPTH_TEST), U = e)
                    }, this.setDepthWrite = function(e) {
                        F !== e && (p.depthMask(e), F = e)
                    }, this.setBlending = function(e, t, i, r) {
                        e !== P && (e === a.NoBlending ? p.disable(p.BLEND) : e === a.AdditiveBlending ? (p.enable(p.BLEND), p.blendEquation(p.FUNC_ADD), p.blendFunc(p.SRC_ALPHA, p.ONE)) : e === a.SubtractiveBlending ? (p.enable(p.BLEND), p.blendEquation(p.FUNC_ADD), p.blendFunc(p.ZERO, p.ONE_MINUS_SRC_COLOR)) : e === a.MultiplyBlending ? (p.enable(p.BLEND), p.blendEquation(p.FUNC_ADD), p.blendFunc(p.ZERO, p.SRC_COLOR)) : e === a.CustomBlending ? p.enable(p.BLEND) : (p.enable(p.BLEND), p.blendEquationSeparate(p.FUNC_ADD, p.FUNC_ADD), p.blendFuncSeparate(p.SRC_ALPHA, p.ONE_MINUS_SRC_ALPHA, p.ONE, p.ONE_MINUS_SRC_ALPHA)), P = e), e === a.CustomBlending ? (t !== R && (p.blendEquation(ft(t)), R = t), i === D && r === V || (p.blendFunc(ft(i), ft(r)), D = i, V = r)) : (R = null, D = null, V = null)
                    };
                    var ot = function(e, t) {
                        var i = p.getError();
                        if (i !== p.NO_ERROR) {
                            var r = "";
                            r = i === p.OUT_OF_MEMORY ? "OUT_OF_MEMORY" : i === p.INVALID_ENUM ? "INVALID_ENUM" : i === p.INVALID_OPERATION ? "INVALID_OPERATION" : i === p.INVALID_VALUE ? "INVALID_VALUE" : i === p.INVALID_FRAMEBUFFER_OPERATION ? "INVALID_FRAMEBUFFER_OPERATION" : i === p.CONTEXT_LOST_WEBGL ? "CONTEXT_LOST_WEBGL" : i === p.NO_ERROR ? "NO_ERROR" : "Unknown code: " + i, a.onerror("WebGL Error: " + r + " (" + e + ")", t)
                        }
                    };

                    function nt(e, t) {
                        if (e.width <= t && e.height <= t) return e;
                        var i = Math.max(e.width, e.height),
                            r = Math.floor(e.width * t / i),
                            a = Math.floor(e.height * t / i),
                            o = document.createElement("canvas");
                        return o.width = r, o.height = a, o.getContext("2d").drawImage(e, 0, 0, e.width, e.height, 0, 0, r, a), o
                    }

                    function st(e, t) {
                        if (6 === e.image.length)
                            if (e.needsUpdate) {
                                e.image.__webglTextureCube || (e.addEventListener("dispose", ge), e.image.__webglTextureCube = p.createTexture(), x.info.memory.textures++), p.activeTexture(p.TEXTURE0 + t), p.bindTexture(p.TEXTURE_CUBE_MAP, e.image.__webglTextureCube), p.pixelStorei(p.UNPACK_FLIP_Y_WEBGL, e.flipY);
                                for (var i = e instanceof a.CompressedTexture, r = [], o = 0; o < 6; o++) x.autoScaleCubemaps && !i ? r[o] = nt(e.image[o], ae) : r[o] = e.image[o];
                                var n = r[0],
                                    s = a.Math.isPowerOfTwo(n.width) && a.Math.isPowerOfTwo(n.height),
                                    l = ft(e.format),
                                    h = ft(e.type);
                                at(p.TEXTURE_CUBE_MAP, e, s);
                                for (o = 0; o < 6; o++)
                                    if (i)
                                        for (var c, u = r[o].mipmaps, f = 0, d = u.length; f < d; f++) c = u[f], e.format !== a.RGBAFormat ? (p.compressedTexImage2D(p.TEXTURE_CUBE_MAP_POSITIVE_X + o, f, l, c.width, c.height, 0, c.data), ot("_gl.compressedTexImage2D CubeMap Mipmaps Compressed, texture.name: " + e.name, e)) : (p.texImage2D(p.TEXTURE_CUBE_MAP_POSITIVE_X + o, f, l, c.width, c.height, 0, l, h, c.data), ot("_gl.texImage2D CubeMap Mipmaps Compressed RGBA, texture.name: " + e.name, e));
                                    else p.texImage2D(p.TEXTURE_CUBE_MAP_POSITIVE_X + o, 0, l, l, h, r[o]), ot("_gl.texImage2D CubeMap, texture.name: " + e.name, {
                                        texture: e,
                                        cubeImage: r,
                                        index: o
                                    });
                                e.generateMipmaps && s && (p.generateMipmap(p.TEXTURE_CUBE_MAP), ot("_gl.generateMipmap CubeMap Mipmaps, texture.name: " + e.name, e)), e.needsUpdate = !1, e.onUpdate && e.onUpdate()
                            } else p.activeTexture(p.TEXTURE0 + t), p.bindTexture(p.TEXTURE_CUBE_MAP, e.image.__webglTextureCube)
                    }

                    function lt(e, t) {
                        p.activeTexture(p.TEXTURE0 + t), p.bindTexture(p.TEXTURE_CUBE_MAP, e.__webglTexture)
                    }

                    function ht(e, t, i) {
                        p.bindFramebuffer(p.FRAMEBUFFER, e), p.framebufferTexture2D(p.FRAMEBUFFER, p.COLOR_ATTACHMENT0, i, t.__webglTexture, 0)
                    }

                    function ct(e, t) {
                        p.bindRenderbuffer(p.RENDERBUFFER, e);
                        var i = "";
                        if (t.depthBuffer && !t.stencilBuffer ? (p.renderbufferStorage(p.RENDERBUFFER, p.DEPTH_COMPONENT16, t.width, t.height), p.framebufferRenderbuffer(p.FRAMEBUFFER, p.DEPTH_ATTACHMENT, p.RENDERBUFFER, e), i = "renderTarget: " + t.width + "+" + t.height + " DEPTH_ATTACHMENT") : t.depthBuffer && t.stencilBuffer ? (p.renderbufferStorage(p.RENDERBUFFER, p.DEPTH_STENCIL, t.width, t.height), p.framebufferRenderbuffer(p.FRAMEBUFFER, p.DEPTH_STENCIL_ATTACHMENT, p.RENDERBUFFER, e), i = "renderTarget: " + t.width + "+" + t.height + " DEPTH_STENCIL_ATTACHMENT") : (p.renderbufferStorage(p.RENDERBUFFER, p.RGBA4, t.width, t.height), i = "renderTarget: " + t.width + "+" + t.height + " RGBA4"), p.checkFramebufferStatus(p.FRAMEBUFFER) != p.FRAMEBUFFER_COMPLETE) throw console.log(t), new Error("(A) Rendering to this texture (renderTarget.name: " + t.name + ") is not supported (incomplete framebuffer) " + i)
                    }

                    function ut(e) {
                        return e === a.NearestFilter || e === a.NearestMipMapNearestFilter || e === a.NearestMipMapLinearFilter ? p.NEAREST : p.LINEAR
                    }

                    function ft(e) {
                        if (e === a.RepeatWrapping) return p.REPEAT;
                        if (e === a.ClampToEdgeWrapping) return p.CLAMP_TO_EDGE;
                        if (e === a.MirroredRepeatWrapping) return p.MIRRORED_REPEAT;
                        if (e === a.NearestFilter) return p.NEAREST;
                        if (e === a.NearestMipMapNearestFilter) return p.NEAREST_MIPMAP_NEAREST;
                        if (e === a.NearestMipMapLinearFilter) return p.NEAREST_MIPMAP_LINEAR;
                        if (e === a.LinearFilter) return p.LINEAR;
                        if (e === a.LinearMipMapNearestFilter) return p.LINEAR_MIPMAP_NEAREST;
                        if (e === a.LinearMipMapLinearFilter) return p.LINEAR_MIPMAP_LINEAR;
                        if (e === a.UnsignedByteType) return p.UNSIGNED_BYTE;
                        if (e === a.UnsignedShort4444Type) return p.UNSIGNED_SHORT_4_4_4_4;
                        if (e === a.UnsignedShort5551Type) return p.UNSIGNED_SHORT_5_5_5_1;
                        if (e === a.UnsignedShort565Type) return p.UNSIGNED_SHORT_5_6_5;
                        if (e === a.ByteType) return p.BYTE;
                        if (e === a.ShortType) return p.SHORT;
                        if (e === a.UnsignedShortType) return p.UNSIGNED_SHORT;
                        if (e === a.IntType) return p.INT;
                        if (e === a.UnsignedIntType) return p.UNSIGNED_INT;
                        if (e === a.FloatType) return p.FLOAT;
                        if (e === a.HalfType) return 36193;
                        if (e === a.AlphaFormat) return p.ALPHA;
                        if (e === a.RGBFormat) return p.RGB;
                        if (e === a.RGBAFormat) return p.RGBA;
                        if (e === a.LuminanceFormat) return p.LUMINANCE;
                        if (e === a.LuminanceAlphaFormat) return p.LUMINANCE_ALPHA;
                        if (e === a.AddEquation) return p.FUNC_ADD;
                        if (e === a.SubtractEquation) return p.FUNC_SUBTRACT;
                        if (e === a.ReverseSubtractEquation) return p.FUNC_REVERSE_SUBTRACT;
                        if (e === a.ZeroFactor) return p.ZERO;
                        if (e === a.OneFactor) return p.ONE;
                        if (e === a.SrcColorFactor) return p.SRC_COLOR;
                        if (e === a.OneMinusSrcColorFactor) return p.ONE_MINUS_SRC_COLOR;
                        if (e === a.SrcAlphaFactor) return p.SRC_ALPHA;
                        if (e === a.OneMinusSrcAlphaFactor) return p.ONE_MINUS_SRC_ALPHA;
                        if (e === a.DstAlphaFactor) return p.DST_ALPHA;
                        if (e === a.OneMinusDstAlphaFactor) return p.ONE_MINUS_DST_ALPHA;
                        if (e === a.DstColorFactor) return p.DST_COLOR;
                        if (e === a.OneMinusDstColorFactor) return p.ONE_MINUS_DST_COLOR;
                        if (e === a.SrcAlphaSaturateFactor) return p.SRC_ALPHA_SATURATE;
                        if (void 0 !== y) {
                            if (e === a.RGB_S3TC_DXT1_Format) return y.COMPRESSED_RGB_S3TC_DXT1_EXT;
                            if (e === a.RGBA_S3TC_DXT1_Format) return y.COMPRESSED_RGBA_S3TC_DXT1_EXT;
                            if (e === a.RGBA_S3TC_DXT3_Format) return y.COMPRESSED_RGBA_S3TC_DXT3_EXT;
                            if (e === a.RGBA_S3TC_DXT5_Format) return y.COMPRESSED_RGBA_S3TC_DXT5_EXT
                        }
                        return 0
                    }
                    this.setTexture = function(e, t) {
                        if (e.needsUpdate) {
                            e.__webglInit || (e.__webglInit = !0, e.addEventListener("dispose", ge), e.__webglTexture = p.createTexture(), x.info.memory.textures++), p.activeTexture(p.TEXTURE0 + t), p.bindTexture(p.TEXTURE_2D, e.__webglTexture), p.pixelStorei(p.UNPACK_FLIP_Y_WEBGL, e.flipY), p.pixelStorei(p.UNPACK_PREMULTIPLY_ALPHA_WEBGL, e.premultiplyAlpha), p.pixelStorei(p.UNPACK_ALIGNMENT, e.unpackAlignment);
                            var i = e.image,
                                r = a.Math.isPowerOfTwo(i.width) && a.Math.isPowerOfTwo(i.height),
                                o = ft(e.format),
                                n = ft(e.type);
                            at(p.TEXTURE_2D, e, r);
                            var s, l = e.mipmaps;
                            if (e instanceof a.DataTexture)
                                if (l.length > 0 && r) {
                                    for (var h = 0, c = l.length; h < c; h++) s = l[h], p.texImage2D(p.TEXTURE_2D, h, o, s.width, s.height, 0, o, n, s.data), ot("_gl.texImage2D DataTexture Mipmaps, texture.name: " + e.name, e);
                                    e.generateMipmaps = !1
                                } else p.texImage2D(p.TEXTURE_2D, 0, o, i.width, i.height, 0, o, n, i.data), ot("_gl.texImage2D DataTexture, texture.name: " + e.name, e);
                            else if (e instanceof a.CompressedTexture)
                                for (h = 0, c = l.length; h < c; h++) s = l[h], e.format !== a.RGBAFormat ? (p.compressedTexImage2D(p.TEXTURE_2D, h, o, s.width, s.height, 0, s.data), ot("_gl.texImage2D CompressedTexture Non RGBA, texture.name: " + e.name, e)) : (p.texImage2D(p.TEXTURE_2D, h, o, s.width, s.height, 0, o, n, s.data), ot("_gl.texImage2D CompressedTexture, texture.name: " + e.name, e));
                            else if (l.length > 0 && r) {
                                for (h = 0, c = l.length; h < c; h++) s = l[h], p.texImage2D(p.TEXTURE_2D, h, o, o, n, s), ot("_gl.texImage2D Mipmaps, texture.name: " + e.name, e);
                                e.generateMipmaps = !1
                            } else p.texImage2D(p.TEXTURE_2D, 0, o, o, n, e.image), ot("_gl.texImage2D, texture.name: " + e.name, e);
                            e.generateMipmaps && r && (p.generateMipmap(p.TEXTURE_2D), ot("_gl.generateMipmap, texture.name: " + e.name, e)), e.needsUpdate = !1, e.onUpdate && e.onUpdate()
                        } else p.activeTexture(p.TEXTURE0 + t), p.bindTexture(p.TEXTURE_2D, e.__webglTexture)
                    }, this.setRenderTarget = function(e) {
                        var t, i, r, o, n, s = e instanceof a.WebGLRenderTargetCube;
                        if (e && !e.__webglFramebuffer) {
                            void 0 === e.depthBuffer && (e.depthBuffer = !0), void 0 === e.stencilBuffer && (e.stencilBuffer = !0), e.addEventListener("dispose", ve), e.__webglTexture = p.createTexture(), x.info.memory.textures++;
                            var l = a.Math.isPowerOfTwo(e.width) && a.Math.isPowerOfTwo(e.height),
                                h = ft(e.format),
                                c = ft(e.type);
                            if (s) {
                                e.__webglFramebuffer = [], e.__webglRenderbuffer = [], p.bindTexture(p.TEXTURE_CUBE_MAP, e.__webglTexture), at(p.TEXTURE_CUBE_MAP, e, l);
                                for (var u = 0; u < 6; u++) e.__webglFramebuffer[u] = p.createFramebuffer(), e.__webglRenderbuffer[u] = p.createRenderbuffer(), p.texImage2D(p.TEXTURE_CUBE_MAP_POSITIVE_X + u, 0, h, e.width, e.height, 0, h, c, null), ot("_gl.texImage2D CubeMap, renderTarget.name: " + e.name, e), ht(e.__webglFramebuffer[u], e, p.TEXTURE_CUBE_MAP_POSITIVE_X + u), ct(e.__webglRenderbuffer[u], e);
                                l && (p.generateMipmap(p.TEXTURE_CUBE_MAP), ot("_gl.generateMipmap, CubeMap, renderTarget.name: " + e.name, e))
                            } else {
                                if (e.__webglFramebuffer = p.createFramebuffer(), e.shareDepthFrom ? e.__webglRenderbuffer = e.shareDepthFrom.__webglRenderbuffer : e.__webglRenderbuffer = p.createRenderbuffer(), p.bindTexture(p.TEXTURE_2D, e.__webglTexture), at(p.TEXTURE_2D, e, l), p.texImage2D(p.TEXTURE_2D, 0, h, e.width, e.height, 0, h, c, null), ot("_gl.texImage2D, renderTarget.name: " + e.name, e), ht(e.__webglFramebuffer, e, p.TEXTURE_2D), e.shareDepthFrom) {
                                    var f = "glFormat: " + h + " glType: " + c;
                                    if (e.depthBuffer && !e.stencilBuffer ? (p.framebufferRenderbuffer(p.FRAMEBUFFER, p.DEPTH_ATTACHMENT, p.RENDERBUFFER, e.__webglRenderbuffer), f = " renderTarget: " + e.width + "+" + e.height + " DEPTH_ATTACHMENT") : e.depthBuffer && e.stencilBuffer && (p.framebufferRenderbuffer(p.FRAMEBUFFER, p.DEPTH_STENCIL_ATTACHMENT, p.RENDERBUFFER, e.__webglRenderbuffer), f = " renderTarget: " + e.width + "+" + e.height + " DEPTH_STENCIL_ATTACHMENT"), p.checkFramebufferStatus(p.FRAMEBUFFER) != p.FRAMEBUFFER_COMPLETE) throw new Error("(B) Rendering to this texture (renderTarget.name: " + e.name + ") is not supported (incomplete framebuffer) " + f)
                                } else ct(e.__webglRenderbuffer, e);
                                l && (p.generateMipmap(p.TEXTURE_2D), ot("_gl.generateMipmap, renderTarget.name: " + e.name, e))
                            }
                            s ? p.bindTexture(p.TEXTURE_CUBE_MAP, null) : p.bindTexture(p.TEXTURE_2D, null), p.bindRenderbuffer(p.RENDERBUFFER, null), p.bindFramebuffer(p.FRAMEBUFFER, null)
                        }
                        e ? (t = s ? e.__webglFramebuffer[e.activeCubeFace] : e.__webglFramebuffer, i = e.width, r = e.height, o = 0, n = 0) : (t = null, i = G, r = H, o = B, n = k), t !== S && (p.bindFramebuffer(p.FRAMEBUFFER, t), p.viewport(o, n, i, r), S = t), W = i, j = r
                    }, this.shadowMapPlugin = new a.ShadowMapPlugin, this.addPrePlugin(this.shadowMapPlugin), this.addPostPlugin(new a.SpritePlugin), this.addPostPlugin(new a.LensFlarePlugin)
                }, a.WebGLRenderTarget = function(e, t, i, r) {
                    this.name = r || "", this.width = e, this.height = t, i = i || {}, this.wrapS = void 0 !== i.wrapS ? i.wrapS : a.ClampToEdgeWrapping, this.wrapT = void 0 !== i.wrapT ? i.wrapT : a.ClampToEdgeWrapping, this.magFilter = void 0 !== i.magFilter ? i.magFilter : a.LinearFilter, this.minFilter = void 0 !== i.minFilter ? i.minFilter : a.LinearMipMapLinearFilter, this.anisotropy = void 0 !== i.anisotropy ? i.anisotropy : 1, this.offset = new a.Vector2(0, 0), this.repeat = new a.Vector2(1, 1), this.format = void 0 !== i.format ? i.format : a.RGBAFormat, this.type = void 0 !== i.type ? i.type : a.UnsignedByteType, this.depthBuffer = void 0 === i.depthBuffer || i.depthBuffer, this.stencilBuffer = void 0 === i.stencilBuffer || i.stencilBuffer, this.generateMipmaps = void 0 !== i.generateMipmaps && i.generateMipmaps, this.shareDepthFrom = null
                }, a.WebGLRenderTarget.prototype = {
                    constructor: a.WebGLRenderTarget,
                    clone: function() {
                        var e = new a.WebGLRenderTarget(this.width, this.height, null, this.name + " Clone");
                        return e.wrapS = this.wrapS, e.wrapT = this.wrapT, e.magFilter = this.magFilter, e.minFilter = this.minFilter, e.anisotropy = this.anisotropy, e.offset.copy(this.offset), e.repeat.copy(this.repeat), e.format = this.format, e.type = this.type, e.depthBuffer = this.depthBuffer, e.stencilBuffer = this.stencilBuffer, e.generateMipmaps = this.generateMipmaps, e.shareDepthFrom = this.shareDepthFrom, e
                    },
                    dispose: function() {
                        this.dispatchEvent({
                            type: "dispose"
                        })
                    }
                }, a.EventDispatcher.prototype.apply(a.WebGLRenderTarget.prototype), a.WebGLRenderTargetCube = function(e, t, i) {
                    a.WebGLRenderTarget.call(this, e, t, i), this.activeCubeFace = 0
                }, a.WebGLRenderTargetCube.prototype = Object.create(a.WebGLRenderTarget.prototype), a.RenderableVertex = function() {
                    this.position = new a.Vector3, this.positionWorld = new a.Vector3, this.positionScreen = new a.Vector4, this.visible = !0
                }, a.RenderableVertex.prototype.copy = function(e) {
                    this.positionWorld.copy(e.positionWorld), this.positionScreen.copy(e.positionScreen)
                }, a.RenderableFace = function() {
                    this.id = 0, this.v1 = new a.RenderableVertex, this.v2 = new a.RenderableVertex, this.v3 = new a.RenderableVertex, this.centroidModel = new a.Vector3, this.normalModel = new a.Vector3, this.vertexNormalsModel = [new a.Vector3, new a.Vector3, new a.Vector3], this.vertexNormalsLength = 0, this.color = null, this.material = null, this.uvs = [
                        []
                    ], this.z = 0
                }, a.RenderableObject = function() {
                    this.id = 0, this.object = null, this.z = 0
                }, a.RenderableSprite = function() {
                    this.id = 0, this.object = null, this.x = 0, this.y = 0, this.z = 0, this.rotation = 0, this.scale = new a.Vector2, this.material = null
                }, a.RenderableLine = function() {
                    this.id = 0, this.v1 = new a.RenderableVertex, this.v2 = new a.RenderableVertex, this.vertexColors = [new a.Color, new a.Color], this.material = null, this.z = 0
                }, a.GeometryUtils = {
                    merge: function(e, t, i) {
                        var r, o, n = e.vertices.length,
                            s = (e.faceVertexUvs[0].length, t instanceof a.Mesh ? t.geometry : t),
                            l = e.vertices,
                            h = s.vertices,
                            c = e.faces,
                            u = s.faces,
                            f = e.faceVertexUvs[0],
                            p = s.faceVertexUvs[0];
                        void 0 === i && (i = 0), t instanceof a.Mesh && (t.matrixAutoUpdate && t.updateMatrix(), r = t.matrix, o = (new a.Matrix3).getNormalMatrix(r));
                        for (var d = 0, m = h.length; d < m; d++) {
                            var g = h[d].clone();
                            r && g.applyMatrix4(r), l.push(g)
                        }
                        for (d = 0, m = u.length; d < m; d++) {
                            var v, y, x, _ = u[d],
                                M = _.vertexNormals,
                                w = _.vertexColors;
                            (v = new a.Face3(_.a + n, _.b + n, _.c + n)).normal.copy(_.normal), o && v.normal.applyMatrix3(o).normalize();
                            for (var S = 0, b = M.length; S < b; S++) y = M[S].clone(), o && y.applyMatrix3(o).normalize(), v.vertexNormals.push(y);
                            v.color.copy(_.color);
                            for (S = 0, b = w.length; S < b; S++) x = w[S], v.vertexColors.push(x.clone());
                            v.materialIndex = _.materialIndex + i, v.centroid.copy(_.centroid), r && v.centroid.applyMatrix4(r), c.push(v)
                        }
                        for (d = 0, m = p.length; d < m; d++) {
                            var A = p[d],
                                T = [];
                            for (S = 0, b = A.length; S < b; S++) T.push(new a.Vector2(A[S].x, A[S].y));
                            f.push(T)
                        }
                    },
                    randomPointInTriangle: function() {
                        var e = new a.Vector3;
                        return function(t, i, r) {
                            var o = new a.Vector3,
                                n = a.Math.random16(),
                                s = a.Math.random16();
                            n + s > 1 && (n = 1 - n, s = 1 - s);
                            var l = 1 - n - s;
                            return o.copy(t), o.multiplyScalar(n), e.copy(i), e.multiplyScalar(s), o.add(e), e.copy(r), e.multiplyScalar(l), o.add(e), o
                        }
                    }(),
                    randomPointInFace: function(e, t, i) {
                        var r, o, n;
                        return r = t.vertices[e.a], o = t.vertices[e.b], n = t.vertices[e.c], a.GeometryUtils.randomPointInTriangle(r, o, n)
                    },
                    randomPointsInGeometry: function(e, t) {
                        var i, r, o, n, s, l = e.faces,
                            h = e.vertices,
                            c = l.length,
                            u = 0,
                            f = [];
                        for (r = 0; r < c; r++) o = h[(i = l[r]).a], n = h[i.b], s = h[i.c], i._area = a.GeometryUtils.triangleArea(o, n, s), u += i._area, f[r] = u;
                        var p, d, m, g = [],
                            v = {};
                        for (r = 0; r < t; r++) p = a.Math.random16() * u, m = p, d = function e(t, i) {
                            if (i < t) return t;
                            var r = t + Math.floor((i - t) / 2);
                            return f[r] > m ? e(t, r - 1) : f[r] < m ? e(r + 1, i) : r
                        }(0, f.length - 1), g[r] = a.GeometryUtils.randomPointInFace(l[d], e, !0), v[d] ? v[d] += 1 : v[d] = 1;
                        return g
                    },
                    triangleArea: function() {
                        var e = new a.Vector3,
                            t = new a.Vector3;
                        return function(i, r, a) {
                            return e.subVectors(r, i), t.subVectors(a, i), e.cross(t), .5 * e.length()
                        }
                    }(),
                    center: function(e) {
                        e.computeBoundingBox();
                        var t = e.boundingBox,
                            i = new a.Vector3;
                        return i.addVectors(t.min, t.max), i.multiplyScalar(-.5), e.applyMatrix((new a.Matrix4).makeTranslation(i.x, i.y, i.z)), e.computeBoundingBox(), i
                    },
                    triangulateQuads: function(e) {
                        var t, i, r, a, o = [],
                            n = [];
                        for (t = 0, i = e.faceVertexUvs.length; t < i; t++) n[t] = [];
                        for (t = 0, i = e.faces.length; t < i; t++) {
                            var s = e.faces[t];
                            for (o.push(s), r = 0, a = e.faceVertexUvs.length; r < a; r++) n[r].push(e.faceVertexUvs[r][t])
                        }
                        e.faces = o, e.faceVertexUvs = n, e.computeCentroids(), e.computeFaceNormals(), e.computeVertexNormals(), e.hasTangents && e.computeTangents()
                    }
                }, a.ImageUtils = {
                    crossOrigin: void 0,
                    loadTexture: function(e, t, i, r) {
                        var o = new a.ImageLoader;
                        o.crossOrigin = this.crossOrigin;
                        var n = new a.Texture(void 0, t),
                            s = o.load(e, (function() {
                                n.needsUpdate = !0, i && i(n)
                            }));
                        return n.image = s, n.sourceFile = e, n
                    },
                    loadCompressedTexture: function(e, t, i, r) {
                        var o = new a.CompressedTexture;
                        o.mapping = t;
                        var n = new XMLHttpRequest;
                        return n.onload = function() {
                            var e = n.response,
                                t = a.ImageUtils.parseDDS(e, !0);
                            o.format = t.format, o.mipmaps = t.mipmaps, o.image.width = t.width, o.image.height = t.height, o.generateMipmaps = !1, o.needsUpdate = !0, i && i(o)
                        }, n.onerror = r, n.open("GET", e, !0), n.responseType = "arraybuffer", n.send(null), o
                    },
                    loadTextureCube: function(e, t, i, r) {
                        var o = [];
                        o.loadCount = 0;
                        var n = new a.Texture;
                        n.image = o, void 0 !== t && (n.mapping = t), n.flipY = !1;
                        for (var s = 0, l = e.length; s < l; ++s) {
                            var h = new Image;
                            o[s] = h, h.onload = function() {
                                o.loadCount += 1, 6 === o.loadCount && (n.needsUpdate = !0, i && i(n))
                            }, h.onerror = r, h.crossOrigin = this.crossOrigin, h.src = e[s]
                        }
                        return n
                    },
                    loadCompressedTextureCube: function(e, t, i, r) {
                        var o = [];
                        o.loadCount = 0;
                        var n = new a.CompressedTexture;
                        n.image = o, void 0 !== t && (n.mapping = t), n.flipY = !1, n.generateMipmaps = !1;
                        var s = function(e, t) {
                            return function() {
                                var r = e.response,
                                    s = a.ImageUtils.parseDDS(r, !0);
                                t.format = s.format, t.mipmaps = s.mipmaps, t.width = s.width, t.height = s.height, o.loadCount += 1, 6 === o.loadCount && (n.format = s.format, n.needsUpdate = !0, i && i(n))
                            }
                        };
                        if (e instanceof Array)
                            for (var l = 0, h = e.length; l < h; ++l) {
                                var c = {};
                                o[l] = c, (f = new XMLHttpRequest).onload = s(f, c), f.onerror = r;
                                var u = e[l];
                                f.open("GET", u, !0), f.responseType = "arraybuffer", f.send(null)
                            } else {
                                var f;
                                u = e;
                                (f = new XMLHttpRequest).onload = function() {
                                    var e = f.response,
                                        t = a.ImageUtils.parseDDS(e, !0);
                                    if (t.isCubemap) {
                                        for (var r = t.mipmaps.length / t.mipmapCount, s = 0; s < r; s++) {
                                            o[s] = {
                                                mipmaps: []
                                            };
                                            for (var l = 0; l < t.mipmapCount; l++) o[s].mipmaps.push(t.mipmaps[s * t.mipmapCount + l]), o[s].format = t.format, o[s].width = t.width, o[s].height = t.height
                                        }
                                        n.format = t.format, n.needsUpdate = !0, i && i(n)
                                    }
                                }, f.onerror = r, f.open("GET", u, !0), f.responseType = "arraybuffer", f.send(null)
                            }
                        return n
                    },
                    loadDDSTexture: function(e, t, i, r) {
                        var o = [];
                        o.loadCount = 0;
                        var n = new a.CompressedTexture;
                        n.image = o, void 0 !== t && (n.mapping = t), n.flipY = !1, n.generateMipmaps = !1;
                        var s = new XMLHttpRequest;
                        return s.onload = function() {
                            var e = s.response,
                                t = a.ImageUtils.parseDDS(e, !0);
                            if (t.isCubemap)
                                for (var r = t.mipmaps.length / t.mipmapCount, l = 0; l < r; l++) {
                                    o[l] = {
                                        mipmaps: []
                                    };
                                    for (var h = 0; h < t.mipmapCount; h++) o[l].mipmaps.push(t.mipmaps[l * t.mipmapCount + h]), o[l].format = t.format, o[l].width = t.width, o[l].height = t.height
                                } else n.image.width = t.width, n.image.height = t.height, n.mipmaps = t.mipmaps;
                            n.format = t.format, n.needsUpdate = !0, i && i(n)
                        }, s.onerror = r, s.open("GET", e, !0), s.responseType = "arraybuffer", s.send(null), n
                    },
                    parseDDS: function(e, t) {
                        var i = {
                            mipmaps: [],
                            width: 0,
                            height: 0,
                            format: null,
                            mipmapCount: 1
                        };

                        function r(e) {
                            return e.charCodeAt(0) + (e.charCodeAt(1) << 8) + (e.charCodeAt(2) << 16) + (e.charCodeAt(3) << 24)
                        }

                        function o(e, t, i, r) {
                            for (var a = i * r * 4, o = new Uint8Array(e, t, a), n = new Uint8Array(a), s = 0, l = 0, h = 0; h < r; h++)
                                for (var c = 0; c < i; c++) {
                                    var u = o[l],
                                        f = o[++l],
                                        p = o[++l],
                                        d = o[++l];
                                    l++, n[s] = p, n[++s] = f, n[++s] = u, n[++s] = d, s++
                                }
                            return n
                        }
                        var n, s = r("DXT1"),
                            l = r("DXT3"),
                            h = r("DXT5"),
                            c = new Int32Array(e, 0, 31);
                        if (542327876 !== c[0]) return a.onerror("ImageUtils.parseDDS(): Invalid magic number in DDS header"), i;
                        if (4 & !c[20]) return a.onerror("ImageUtils.parseDDS(): Unsupported format, must contain a FourCC code"), i;
                        var u, f = c[21],
                            p = !1;
                        switch (f) {
                            case s:
                                n = 8, i.format = a.RGB_S3TC_DXT1_Format;
                                break;
                            case l:
                                n = 16, i.format = a.RGBA_S3TC_DXT3_Format;
                                break;
                            case h:
                                n = 16, i.format = a.RGBA_S3TC_DXT5_Format;
                                break;
                            default:
                                if (!(32 == c[22] && 16711680 & c[23] && 65280 & c[24] && 255 & c[25] && 4278190080 & c[26])) return a.onerror("ImageUtils.parseDDS(): Unsupported FourCC code: ", (u = f, String.fromCharCode(255 & u, u >> 8 & 255, u >> 16 & 255, u >> 24 & 255))), i;
                                p = !0, n = 64, i.format = a.RGBAFormat
                        }
                        i.mipmapCount = 1, 131072 & c[2] && !1 !== t && (i.mipmapCount = Math.max(1, c[7])), i.isCubemap = !!(512 & c[28]), i.width = c[4], i.height = c[3];
                        for (var d = c[1] + 4, m = i.width, g = i.height, v = i.isCubemap ? 6 : 1, y = 0; y < v; y++) {
                            for (var x = 0; x < i.mipmapCount; x++) {
                                if (p) var _ = (M = o(e, d, m, g)).length;
                                else {
                                    _ = Math.max(4, m) / 4 * Math.max(4, g) / 4 * n;
                                    var M = new Uint8Array(e, d, _)
                                }
                                var w = {
                                    data: M,
                                    width: m,
                                    height: g
                                };
                                i.mipmaps.push(w), d += _, m = Math.max(.5 * m, 1), g = Math.max(.5 * g, 1)
                            }
                            m = i.width, g = i.height
                        }
                        return i
                    },
                    getNormalMap: function(e, t) {
                        var i = function(e, t) {
                                return [e[0] - t[0], e[1] - t[1], e[2] - t[2]]
                            },
                            r = function(e) {
                                var t = Math.sqrt(e[0] * e[0] + e[1] * e[1] + e[2] * e[2]);
                                return [e[0] / t, e[1] / t, e[2] / t]
                            };
                        t |= 1;
                        var a = e.width,
                            o = e.height,
                            n = document.createElement("canvas");
                        n.width = a, n.height = o;
                        var s = n.getContext("2d");
                        s.drawImage(e, 0, 0);
                        for (var l, h, c = s.getImageData(0, 0, a, o).data, u = s.createImageData(a, o), f = u.data, p = 0; p < a; p++)
                            for (var d = 0; d < o; d++) {
                                var m = d - 1 < 0 ? 0 : d - 1,
                                    g = d + 1 > o - 1 ? o - 1 : d + 1,
                                    v = p - 1 < 0 ? 0 : p - 1,
                                    y = p + 1 > a - 1 ? a - 1 : p + 1,
                                    x = [],
                                    _ = [0, 0, c[4 * (d * a + p)] / 255 * t];
                                x.push([-1, 0, c[4 * (d * a + v)] / 255 * t]), x.push([-1, -1, c[4 * (m * a + v)] / 255 * t]), x.push([0, -1, c[4 * (m * a + p)] / 255 * t]), x.push([1, -1, c[4 * (m * a + y)] / 255 * t]), x.push([1, 0, c[4 * (d * a + y)] / 255 * t]), x.push([1, 1, c[4 * (g * a + y)] / 255 * t]), x.push([0, 1, c[4 * (g * a + p)] / 255 * t]), x.push([-1, 1, c[4 * (g * a + v)] / 255 * t]);
                                for (var M = [], w = x.length, S = 0; S < w; S++) {
                                    var b = x[S],
                                        A = x[(S + 1) % w];
                                    b = i(b, _), A = i(A, _), M.push(r((h = A, [(l = b)[1] * h[2] - l[2] * h[1], l[2] * h[0] - l[0] * h[2], l[0] * h[1] - l[1] * h[0]])))
                                }
                                var T = [0, 0, 0];
                                for (S = 0; S < M.length; S++) T[0] += M[S][0], T[1] += M[S][1], T[2] += M[S][2];
                                T[0] /= M.length, T[1] /= M.length, T[2] /= M.length;
                                var C = 4 * (d * a + p);
                                f[C] = (T[0] + 1) / 2 * 255 | 0, f[C + 1] = (T[1] + 1) / 2 * 255 | 0, f[C + 2] = 255 * T[2] | 0, f[C + 3] = 255
                            }
                        return s.putImageData(u, 0, 0), n
                    },
                    generateDataTexture: function(e, t, i) {
                        for (var r = e * t, o = new Uint8Array(3 * r), n = Math.floor(255 * i.r), s = Math.floor(255 * i.g), l = Math.floor(255 * i.b), h = 0; h < r; h++) o[3 * h] = n, o[3 * h + 1] = s, o[3 * h + 2] = l;
                        var c = new a.DataTexture(o, e, t, a.RGBFormat);
                        return c.needsUpdate = !0, c
                    }
                }, a.SceneUtils = {
                    createMultiMaterialObject: function(e, t) {
                        for (var i = new a.Object3D, r = 0, o = t.length; r < o; r++) i.add(new a.Mesh(e, t[r]));
                        return i
                    },
                    detach: function(e, t, i) {
                        e.applyMatrix(t.matrixWorld), t.remove(e), i.add(e)
                    },
                    attach: function(e, t, i) {
                        var r = new a.Matrix4;
                        r.getInverse(i.matrixWorld), e.applyMatrix(r), t.remove(e), i.add(e)
                    }
                }, a.FontUtils = {
                    faces: {},
                    face: "helvetiker",
                    weight: "normal",
                    style: "normal",
                    size: 150,
                    divisions: 10,
                    getFace: function() {
                        return this.faces[this.face][this.weight][this.style]
                    },
                    loadFace: function(e) {
                        var t = e.familyName.toLowerCase(),
                            i = this;
                        i.faces[t] = i.faces[t] || {}, i.faces[t][e.cssFontWeight] = i.faces[t][e.cssFontWeight] || {}, i.faces[t][e.cssFontWeight][e.cssFontStyle] = e;
                        i.faces[t][e.cssFontWeight][e.cssFontStyle] = e;
                        return e
                    },
                    drawText: function(e) {
                        var t, i = this.getFace(),
                            r = this.size / i.resolution,
                            o = 0,
                            n = String(e).split(""),
                            s = n.length,
                            l = [];
                        for (t = 0; t < s; t++) {
                            var h = new a.Path,
                                c = this.extractGlyphPoints(n[t], i, r, o, h);
                            o += c.offset, l.push(c.path)
                        }
                        return {
                            paths: l,
                            offset: o / 2
                        }
                    },
                    extractGlyphPoints: function(e, t, i, r, o) {
                        var n, s, l, h, c, u, f, p, d, m, g, v, y, x, _, M, w, S, b = [],
                            A = t.glyphs[e] || t.glyphs["?"];
                        if (A) {
                            if (A.o)
                                for (c = (h = A._cachedOutline || (A._cachedOutline = A.o.split(" "))).length, u = i, f = i, n = 0; n < c;) switch (h[n++]) {
                                    case "m":
                                        p = h[n++] * u + r, d = h[n++] * f, o.moveTo(p, d);
                                        break;
                                    case "l":
                                        p = h[n++] * u + r, d = h[n++] * f, o.lineTo(p, d);
                                        break;
                                    case "q":
                                        if (m = h[n++] * u + r, g = h[n++] * f, x = h[n++] * u + r, _ = h[n++] * f, o.quadraticCurveTo(x, _, m, g), S = b[b.length - 1])
                                            for (v = S.x, y = S.y, s = 1, l = this.divisions; s <= l; s++) {
                                                var T = s / l;
                                                a.Shape.Utils.b2(T, v, x, m), a.Shape.Utils.b2(T, y, _, g)
                                            }
                                        break;
                                    case "b":
                                        if (m = h[n++] * u + r, g = h[n++] * f, x = h[n++] * u + r, _ = h[n++] * -f, M = h[n++] * u + r, w = h[n++] * -f, o.bezierCurveTo(m, g, x, _, M, w), S = b[b.length - 1])
                                            for (v = S.x, y = S.y, s = 1, l = this.divisions; s <= l; s++) T = s / l, a.Shape.Utils.b3(T, v, x, M, m), a.Shape.Utils.b3(T, y, _, w, g)
                                }
                            return {
                                offset: A.ha * i,
                                path: o
                            }
                        }
                    }
                }, a.FontUtils.generateShapes = function(e, t) {
                    var i = void 0 !== (t = t || {}).size ? t.size : 100,
                        r = void 0 !== t.curveSegments ? t.curveSegments : 4,
                        o = void 0 !== t.font ? t.font : "helvetiker",
                        n = void 0 !== t.weight ? t.weight : "normal",
                        s = void 0 !== t.style ? t.style : "normal";
                    a.FontUtils.size = i, a.FontUtils.divisions = r, a.FontUtils.face = o, a.FontUtils.weight = n, a.FontUtils.style = s;
                    for (var l = a.FontUtils.drawText(e).paths, h = [], c = 0, u = l.length; c < u; c++) Array.prototype.push.apply(h, l[c].toShapes());
                    return h
                },
                function(e) {
                    var t = 1e-10,
                        i = function(e) {
                            for (var t = e.length, i = 0, r = t - 1, a = 0; a < t; r = a++) i += e[r].x * e[a].y - e[a].x * e[r].y;
                            return .5 * i
                        },
                        r = function(e, i, r, a, o, n) {
                            var s, l, h, c, u, f, p, d, m, g, v, y, x, _, M;
                            if (l = e[n[i]].x, h = e[n[i]].y, c = e[n[r]].x, u = e[n[r]].y, f = e[n[a]].x, p = e[n[a]].y, t > (c - l) * (p - h) - (u - h) * (f - l)) return !1;
                            for (g = f - c, v = p - u, y = l - f, x = h - p, _ = c - l, M = u - h, s = 0; s < o; s++)
                                if (d = e[n[s]].x, m = e[n[s]].y, !(d === l && m === h || d === c && m === u || d === f && m === p) && g * (m - u) - v * (d - c) >= -1e-10 && y * (m - p) - x * (d - f) >= -1e-10 && _ * (m - h) - M * (d - l) >= -1e-10) return !1;
                            return !0
                        };
                    e.Triangulate = function(e, t) {
                        var o = e.length;
                        if (o < 3) return null;
                        var n, s, l, h = [],
                            c = [],
                            u = [];
                        if (i(e) > 0)
                            for (s = 0; s < o; s++) c[s] = s;
                        else
                            for (s = 0; s < o; s++) c[s] = o - 1 - s;
                        var f = o,
                            p = 2 * f;
                        for (s = f - 1; f > 2;) {
                            if (p-- <= 0) return a.onwarning("Warning, unable to triangulate polygon!"), t ? u : h;
                            if (f <= (n = s) && (n = 0), f <= (s = n + 1) && (s = 0), f <= (l = s + 1) && (l = 0), r(e, n, s, l, f, c)) {
                                var d, m, g, v, y;
                                for (d = c[n], m = c[s], g = c[l], h.push([e[d], e[m], e[g]]), u.push([c[n], c[s], c[l]]), v = s, y = s + 1; y < f; v++, y++) c[v] = c[y];
                                p = 2 * --f
                            }
                        }
                        return t ? u : h
                    }, e.Triangulate.area = i
                }(a.FontUtils), r._typeface_js = {
                    faces: a.FontUtils.faces,
                    loadFace: a.FontUtils.loadFace
                }, a.typeface_js = r._typeface_js, a.Curve = function() {}, a.Curve.prototype.getPoint = function(e) {
                    return a.onwarning("Warning, getPoint() not implemented!"), null
                }, a.Curve.prototype.getPointAt = function(e) {
                    var t = this.getUtoTmapping(e);
                    return this.getPoint(t)
                }, a.Curve.prototype.getPoints = function(e) {
                    e || (e = 5);
                    var t, i = [];
                    for (t = 0; t <= e; t++) i.push(this.getPoint(t / e));
                    return i
                }, a.Curve.prototype.getSpacedPoints = function(e) {
                    e || (e = 5);
                    var t, i = [];
                    for (t = 0; t <= e; t++) i.push(this.getPointAt(t / e));
                    return i
                }, a.Curve.prototype.getLength = function() {
                    var e = this.getLengths();
                    return e[e.length - 1]
                }, a.Curve.prototype.getLengths = function(e) {
                    if (e || (e = this.__arcLengthDivisions ? this.__arcLengthDivisions : 200), this.cacheArcLengths && this.cacheArcLengths.length == e + 1 && !this.needsUpdate) return this.cacheArcLengths;
                    this.needsUpdate = !1;
                    var t, i, r = [],
                        a = this.getPoint(0),
                        o = 0;
                    for (r.push(0), i = 1; i <= e; i++) o += (t = this.getPoint(i / e)).distanceTo(a), r.push(o), a = t;
                    return this.cacheArcLengths = r, r
                }, a.Curve.prototype.updateArcLengths = function() {
                    this.needsUpdate = !0, this.getLengths()
                }, a.Curve.prototype.getUtoTmapping = function(e, t) {
                    var i, r = this.getLengths(),
                        a = 0,
                        o = r.length;
                    i = t || e * r[o - 1];
                    for (var n, s = 0, l = o - 1; s <= l;)
                        if ((n = r[a = Math.floor(s + (l - s) / 2)] - i) < 0) s = a + 1;
                        else {
                            if (!(n > 0)) {
                                l = a;
                                break
                            }
                            l = a - 1
                        }
                    if (r[a = l] == i) return a / (o - 1);
                    var h = r[a];
                    return (a + (i - h) / (r[a + 1] - h)) / (o - 1)
                }, a.Curve.prototype.getTangent = function(e) {
                    var t = 1e-4,
                        i = e - t,
                        r = e + t;
                    i < 0 && (i = 0), r > 1 && (r = 1);
                    var a = this.getPoint(i);
                    return this.getPoint(r).clone().sub(a).normalize()
                }, a.Curve.prototype.getTangentAt = function(e) {
                    var t = this.getUtoTmapping(e);
                    return this.getTangent(t)
                }, a.Curve.Utils = {
                    tangentQuadraticBezier: function(e, t, i, r) {
                        return 2 * (1 - e) * (i - t) + 2 * e * (r - i)
                    },
                    tangentCubicBezier: function(e, t, i, r, a) {
                        return -3 * t * (1 - e) * (1 - e) + 3 * i * (1 - e) * (1 - e) - 6 * e * i * (1 - e) + 6 * e * r * (1 - e) - 3 * e * e * r + 3 * e * e * a
                    },
                    tangentSpline: function(e, t, i, r, a) {
                        return 6 * e * e - 6 * e + (3 * e * e - 4 * e + 1) + (-6 * e * e + 6 * e) + (3 * e * e - 2 * e)
                    },
                    interpolate: function(e, t, i, r, a) {
                        var o = .5 * (i - e),
                            n = .5 * (r - t),
                            s = a * a;
                        return (2 * t - 2 * i + o + n) * (a * s) + (-3 * t + 3 * i - 2 * o - n) * s + o * a + t
                    }
                }, a.Curve.create = function(e, t) {
                    return e.prototype = Object.create(a.Curve.prototype), e.prototype.getPoint = t, e
                }, a.CurvePath = function() {
                    this.curves = [], this.bends = [], this.autoClose = !1
                }, a.CurvePath.prototype = Object.create(a.Curve.prototype), a.CurvePath.prototype.add = function(e) {
                    this.curves.push(e)
                }, a.CurvePath.prototype.checkConnection = function() {}, a.CurvePath.prototype.closePath = function() {
                    var e = this.curves[0].getPoint(0),
                        t = this.curves[this.curves.length - 1].getPoint(1);
                    e.equals(t) || this.curves.push(new a.LineCurve(t, e))
                }, a.CurvePath.prototype.getPoint = function(e) {
                    for (var t, i = e * this.getLength(), r = this.getCurveLengths(), a = 0; a < r.length;) {
                        if (r[a] >= i) {
                            var o = 1 - (r[a] - i) / (t = this.curves[a]).getLength();
                            return t.getPointAt(o)
                        }
                        a++
                    }
                    return null
                }, a.CurvePath.prototype.getLength = function() {
                    var e = this.getCurveLengths();
                    return e[e.length - 1]
                }, a.CurvePath.prototype.getCurveLengths = function() {
                    if (this.cacheLengths && this.cacheLengths.length == this.curves.length) return this.cacheLengths;
                    var e, t = [],
                        i = 0,
                        r = this.curves.length;
                    for (e = 0; e < r; e++) i += this.curves[e].getLength(), t.push(i);
                    return this.cacheLengths = t, t
                }, a.CurvePath.prototype.getBoundingBox = function() {
                    var e, t, i, r, o, n, s, l, h, c, u = this.getPoints();
                    e = t = Number.NEGATIVE_INFINITY, r = o = Number.POSITIVE_INFINITY;
                    var f = u[0] instanceof a.Vector3;
                    for (c = f ? new a.Vector3 : new a.Vector2, l = 0, h = u.length; l < h; l++)(s = u[l]).x > e ? e = s.x : s.x < r && (r = s.x), s.y > t ? t = s.y : s.y < o && (o = s.y), f && (s.z > i ? i = s.z : s.z < n && (n = s.z)), c.add(s);
                    var p = {
                        minX: r,
                        minY: o,
                        maxX: e,
                        maxY: t,
                        centroid: c.divideScalar(h)
                    };
                    return f && (p.maxZ = i, p.minZ = n), p
                }, a.CurvePath.prototype.createPointsGeometry = function(e) {
                    var t = this.getPoints(e, !0);
                    return this.createGeometry(t)
                }, a.CurvePath.prototype.createSpacedPointsGeometry = function(e) {
                    var t = this.getSpacedPoints(e, !0);
                    return this.createGeometry(t)
                }, a.CurvePath.prototype.createGeometry = function(e) {
                    for (var t = new a.Geometry, i = 0; i < e.length; i++) t.vertices.push(new a.Vector3(e[i].x, e[i].y, e[i].z || 0));
                    return t
                }, a.CurvePath.prototype.addWrapPath = function(e) {
                    this.bends.push(e)
                }, a.CurvePath.prototype.getTransformedPoints = function(e, t) {
                    var i, r, a = this.getPoints(e);
                    for (t || (t = this.bends), i = 0, r = t.length; i < r; i++) a = this.getWrapPoints(a, t[i]);
                    return a
                }, a.CurvePath.prototype.getTransformedSpacedPoints = function(e, t) {
                    var i, r, a = this.getSpacedPoints(e);
                    for (t || (t = this.bends), i = 0, r = t.length; i < r; i++) a = this.getWrapPoints(a, t[i]);
                    return a
                }, a.CurvePath.prototype.getWrapPoints = function(e, t) {
                    var i, r, a, o, n, s, l = this.getBoundingBox();
                    for (i = 0, r = e.length; i < r; i++) {
                        o = (a = e[i]).x, n = a.y, s = o / l.maxX, s = t.getUtoTmapping(s, o);
                        var h = t.getPoint(s),
                            c = t.getTangent(s);
                        c.set(-c.y, c.x).multiplyScalar(n), a.x = h.x + c.x, a.y = h.y + c.y
                    }
                    return e
                }, a.Gyroscope = function() {
                    a.Object3D.call(this)
                }, a.Gyroscope.prototype = Object.create(a.Object3D.prototype), a.Gyroscope.prototype.updateMatrixWorld = function(e) {
                    this.matrixAutoUpdate && this.updateMatrix(), (this.matrixWorldNeedsUpdate || e) && (this.parent ? (this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), this.matrixWorld.decompose(this.translationWorld, this.quaternionWorld, this.scaleWorld), this.matrix.decompose(this.translationObject, this.quaternionObject, this.scaleObject), this.matrixWorld.compose(this.translationWorld, this.quaternionObject, this.scaleWorld)) : this.matrixWorld.copy(this.matrix), this.matrixWorldNeedsUpdate = !1, e = !0);
                    for (var t = 0, i = this.children.length; t < i; t++) this.children[t].updateMatrixWorld(e)
                }, a.Gyroscope.prototype.translationWorld = new a.Vector3, a.Gyroscope.prototype.translationObject = new a.Vector3, a.Gyroscope.prototype.quaternionWorld = new a.Quaternion, a.Gyroscope.prototype.quaternionObject = new a.Quaternion, a.Gyroscope.prototype.scaleWorld = new a.Vector3, a.Gyroscope.prototype.scaleObject = new a.Vector3, a.Path = function(e) {
                    a.CurvePath.call(this), this.actions = [], e && this.fromPoints(e)
                }, a.Path.prototype = Object.create(a.CurvePath.prototype), a.PathActions = {
                    MOVE_TO: "moveTo",
                    LINE_TO: "lineTo",
                    QUADRATIC_CURVE_TO: "quadraticCurveTo",
                    BEZIER_CURVE_TO: "bezierCurveTo",
                    CSPLINE_THRU: "splineThru",
                    ARC: "arc",
                    ELLIPSE: "ellipse"
                }, a.Path.prototype.fromPoints = function(e) {
                    this.moveTo(e[0].x, e[0].y);
                    for (var t = 1, i = e.length; t < i; t++) this.lineTo(e[t].x, e[t].y)
                }, a.Path.prototype.moveTo = function(e, t) {
                    var i = Array.prototype.slice.call(arguments);
                    this.actions.push({
                        action: a.PathActions.MOVE_TO,
                        args: i
                    })
                }, a.Path.prototype.lineTo = function(e, t) {
                    var i = Array.prototype.slice.call(arguments),
                        r = this.actions[this.actions.length - 1].args,
                        o = r[r.length - 2],
                        n = r[r.length - 1],
                        s = new a.LineCurve(new a.Vector2(o, n), new a.Vector2(e, t));
                    this.curves.push(s), this.actions.push({
                        action: a.PathActions.LINE_TO,
                        args: i
                    })
                }, a.Path.prototype.quadraticCurveTo = function(e, t, i, r) {
                    var o = Array.prototype.slice.call(arguments),
                        n = this.actions[this.actions.length - 1].args,
                        s = n[n.length - 2],
                        l = n[n.length - 1],
                        h = new a.QuadraticBezierCurve(new a.Vector2(s, l), new a.Vector2(e, t), new a.Vector2(i, r));
                    this.curves.push(h), this.actions.push({
                        action: a.PathActions.QUADRATIC_CURVE_TO,
                        args: o
                    })
                }, a.Path.prototype.bezierCurveTo = function(e, t, i, r, o, n) {
                    var s = Array.prototype.slice.call(arguments),
                        l = this.actions[this.actions.length - 1].args,
                        h = l[l.length - 2],
                        c = l[l.length - 1],
                        u = new a.CubicBezierCurve(new a.Vector2(h, c), new a.Vector2(e, t), new a.Vector2(i, r), new a.Vector2(o, n));
                    this.curves.push(u), this.actions.push({
                        action: a.PathActions.BEZIER_CURVE_TO,
                        args: s
                    })
                }, a.Path.prototype.splineThru = function(e) {
                    var t = Array.prototype.slice.call(arguments),
                        i = this.actions[this.actions.length - 1].args,
                        r = i[i.length - 2],
                        o = i[i.length - 1],
                        n = [new a.Vector2(r, o)];
                    Array.prototype.push.apply(n, e);
                    var s = new a.SplineCurve(n);
                    this.curves.push(s), this.actions.push({
                        action: a.PathActions.CSPLINE_THRU,
                        args: t
                    })
                }, a.Path.prototype.arc = function(e, t, i, r, a, o) {
                    var n = this.actions[this.actions.length - 1].args,
                        s = n[n.length - 2],
                        l = n[n.length - 1];
                    this.absarc(e + s, t + l, i, r, a, o)
                }, a.Path.prototype.absarc = function(e, t, i, r, a, o) {
                    this.absellipse(e, t, i, i, r, a, o)
                }, a.Path.prototype.ellipse = function(e, t, i, r, a, o, n) {
                    var s = this.actions[this.actions.length - 1].args,
                        l = s[s.length - 2],
                        h = s[s.length - 1];
                    this.absellipse(e + l, t + h, i, r, a, o, n)
                }, a.Path.prototype.absellipse = function(e, t, i, r, o, n, s) {
                    var l = Array.prototype.slice.call(arguments),
                        h = new a.EllipseCurve(e, t, i, r, o, n, s);
                    this.curves.push(h);
                    var c = h.getPoint(1);
                    l.push(c.x), l.push(c.y), this.actions.push({
                        action: a.PathActions.ELLIPSE,
                        args: l
                    })
                }, a.Path.prototype.getSpacedPoints = function(e, t) {
                    e || (e = 40);
                    for (var i = [], r = 0; r < e; r++) i.push(this.getPoint(r / e));
                    return i
                }, a.Path.prototype.getPoints = function(e, t) {
                    if (this.useSpacedPoints) return console.log("tata"), this.getSpacedPoints(e, t);
                    e = e || 12;
                    var i, r, o, n, s, l, h, c, u, f, p, d, m, g, v, y, x, _, M = [];
                    for (i = 0, r = this.actions.length; i < r; i++) switch (n = (o = this.actions[i]).action, s = o.args, n) {
                        case a.PathActions.MOVE_TO:
                        case a.PathActions.LINE_TO:
                            M.push(new a.Vector2(s[0], s[1]));
                            break;
                        case a.PathActions.QUADRATIC_CURVE_TO:
                            for (l = s[2], h = s[3], f = s[0], p = s[1], M.length > 0 ? (d = (g = M[M.length - 1]).x, m = g.y) : (d = (g = this.actions[i - 1].args)[g.length - 2], m = g[g.length - 1]), v = 1; v <= e; v++) y = v / e, x = a.Shape.Utils.b2(y, d, f, l), _ = a.Shape.Utils.b2(y, m, p, h), M.push(new a.Vector2(x, _));
                            break;
                        case a.PathActions.BEZIER_CURVE_TO:
                            for (l = s[4], h = s[5], f = s[0], p = s[1], c = s[2], u = s[3], M.length > 0 ? (d = (g = M[M.length - 1]).x, m = g.y) : (d = (g = this.actions[i - 1].args)[g.length - 2], m = g[g.length - 1]), v = 1; v <= e; v++) y = v / e, x = a.Shape.Utils.b3(y, d, f, c, l), _ = a.Shape.Utils.b3(y, m, p, u, h), M.push(new a.Vector2(x, _));
                            break;
                        case a.PathActions.CSPLINE_THRU:
                            g = this.actions[i - 1].args;
                            var w = [new a.Vector2(g[g.length - 2], g[g.length - 1])],
                                S = e * s[0].length;
                            w = w.concat(s[0]);
                            var b = new a.SplineCurve(w);
                            for (v = 1; v <= S; v++) M.push(b.getPointAt(v / S));
                            break;
                        case a.PathActions.ARC:
                            var A = s[0],
                                T = s[1],
                                C = s[2],
                                E = s[3],
                                L = s[4],
                                P = !!s[5],
                                R = L - E,
                                D = 2 * e;
                            for (v = 1; v <= D; v++) y = v / D, P || (y = 1 - y), V = E + y * R, x = A + C * Math.cos(V), _ = T + C * Math.sin(V), M.push(new a.Vector2(x, _));
                            break;
                        case a.PathActions.ELLIPSE:
                            A = s[0], T = s[1];
                            var V, U = s[2],
                                F = s[3];
                            E = s[4], L = s[5], P = !!s[6], R = L - E, D = 2 * e;
                            for (v = 1; v <= D; v++) y = v / D, P || (y = 1 - y), V = E + y * R, x = A + U * Math.cos(V), _ = T + F * Math.sin(V), M.push(new a.Vector2(x, _))
                    }
                    var N = M[M.length - 1];
                    return Math.abs(N.x - M[0].x) < 1e-10 && Math.abs(N.y - M[0].y) < 1e-10 && M.splice(M.length - 1, 1), t && M.push(M[0]), M
                }, a.Path.prototype.toShapes = function(e) {
                    function t(e, t) {
                        for (var i = t.length, r = !1, a = i - 1, o = 0; o < i; a = o++) {
                            var n = t[a],
                                s = t[o],
                                l = s.x - n.x,
                                h = s.y - n.y;
                            if (Math.abs(h) > 1e-10) {
                                if (h < 0 && (n = t[o], l = -l, s = t[a], h = -h), e.y < n.y || e.y > s.y) continue;
                                if (e.y == n.y) {
                                    if (e.x == n.x) return !0
                                } else {
                                    var c = h * (e.x - n.x) - l * (e.y - n.y);
                                    if (0 == c) return !0;
                                    if (c < 0) continue;
                                    r = !r
                                }
                            } else {
                                if (e.y != n.y) continue;
                                if (s.x <= e.x && e.x <= n.x || n.x <= e.x && e.x <= s.x) return !0
                            }
                        }
                        return r
                    }
                    var i, r, o, n, s, l = [],
                        h = new a.Path;
                    for (i = 0, r = this.actions.length; i < r; i++) s = (o = this.actions[i]).args, (n = o.action) == a.PathActions.MOVE_TO && 0 != h.actions.length && (l.push(h), h = new a.Path), h[n].apply(h, s);
                    if (0 != h.actions.length && l.push(h), 0 == l.length) return [];
                    var c, u, f, p = [];
                    if (1 == l.length) return u = l[0], (f = new a.Shape).actions = u.actions, f.curves = u.curves, p.push(f), p;
                    var d = !a.Shape.Utils.isClockWise(l[0].getPoints());
                    d = e ? !d : d;
                    var m, g, v, y, x = [],
                        _ = [],
                        M = [],
                        w = 0;
                    for (_[w] = void 0, M[w] = [], i = 0, r = l.length; i < r; i++) m = (u = l[i]).getPoints(), c = a.Shape.Utils.isClockWise(m), (c = e ? !c : c) ? (!d && _[w] && w++, _[w] = {
                        s: new a.Shape,
                        p: m
                    }, _[w].s.actions = u.actions, _[w].s.curves = u.curves, d && w++, M[w] = []) : M[w].push({
                        h: u,
                        p: m[0]
                    });
                    if (_.length > 1) {
                        for (var S = !1, b = [], A = 0, T = _.length; A < T; A++) x[A] = [];
                        for (A = 0, T = _.length; A < T; A++) {
                            _[A];
                            for (var C = M[A], E = 0; E < C.length; E++) {
                                for (var L = C[E], P = !0, R = 0; R < _.length; R++) t(L.p, _[R].p) && (A != R && b.push({
                                    froms: A,
                                    tos: R,
                                    hole: E
                                }), P ? (P = !1, x[R].push(L)) : S = !0);
                                P && x[A].push(L)
                            }
                        }
                        b.length > 0 && (S || (M = x))
                    }
                    for (i = 0, r = _.length; i < r; i++)
                        for (f = _[i].s, p.push(f), v = 0, y = (g = M[i]).length; v < y; v++) f.holes.push(g[v].h);
                    return p
                }, a.Shape = function() {
                    a.Path.apply(this, arguments), this.holes = []
                }, a.Shape.prototype = Object.create(a.Path.prototype), a.Shape.prototype.extrude = function(e) {
                    return new a.ExtrudeGeometry(this, e)
                }, a.Shape.prototype.makeGeometry = function(e) {
                    return new a.ShapeGeometry(this, e)
                }, a.Shape.prototype.getPointsHoles = function(e) {
                    var t, i = this.holes.length,
                        r = [];
                    for (t = 0; t < i; t++) r[t] = this.holes[t].getTransformedPoints(e, this.bends);
                    return r
                }, a.Shape.prototype.getSpacedPointsHoles = function(e) {
                    var t, i = this.holes.length,
                        r = [];
                    for (t = 0; t < i; t++) r[t] = this.holes[t].getTransformedSpacedPoints(e, this.bends);
                    return r
                }, a.Shape.prototype.extractAllPoints = function(e) {
                    return {
                        shape: this.getTransformedPoints(e),
                        holes: this.getPointsHoles(e)
                    }
                }, a.Shape.prototype.extractPoints = function(e) {
                    return this.useSpacedPoints ? this.extractAllSpacedPoints(e) : this.extractAllPoints(e)
                }, a.Shape.prototype.extractAllSpacedPoints = function(e) {
                    return {
                        shape: this.getTransformedSpacedPoints(e),
                        holes: this.getSpacedPointsHoles(e)
                    }
                }, a.Shape.Utils = {
                    triangulateShape: function(e, t) {
                        function i(e, t, i) {
                            return e.x != t.x ? e.x < t.x ? e.x <= i.x && i.x <= t.x : t.x <= i.x && i.x <= e.x : e.y < t.y ? e.y <= i.y && i.y <= t.y : t.y <= i.y && i.y <= e.y
                        }

                        function r(e, t, r, a, o) {
                            var n = t.x - e.x,
                                s = t.y - e.y,
                                l = a.x - r.x,
                                h = a.y - r.y,
                                c = e.x - r.x,
                                u = e.y - r.y,
                                f = s * l - n * h,
                                p = s * c - n * u;
                            if (Math.abs(f) > 1e-10) {
                                var d;
                                if (f > 0) {
                                    if (p < 0 || p > f) return [];
                                    if ((d = h * c - l * u) < 0 || d > f) return []
                                } else {
                                    if (p > 0 || p < f) return [];
                                    if ((d = h * c - l * u) > 0 || d < f) return []
                                }
                                if (0 == d) return !o || 0 != p && p != f ? [e] : [];
                                if (d == f) return !o || 0 != p && p != f ? [t] : [];
                                if (0 == p) return [r];
                                if (p == f) return [a];
                                var m = d / f;
                                return [{
                                    x: e.x + m * n,
                                    y: e.y + m * s
                                }]
                            }
                            if (0 != p || h * c != l * u) return [];
                            var g, v, y, x, _, M, w, S, b = 0 == n && 0 == s,
                                A = 0 == l && 0 == h;
                            return b && A ? e.x != r.x || e.y != r.y ? [] : [e] : b ? i(r, a, e) ? [e] : [] : A ? i(e, t, r) ? [r] : [] : (0 != n ? (e.x < t.x ? (g = e, y = e.x, v = t, x = t.x) : (g = t, y = t.x, v = e, x = e.x), r.x < a.x ? (_ = r, w = r.x, M = a, S = a.x) : (_ = a, w = a.x, M = r, S = r.x)) : (e.y < t.y ? (g = e, y = e.y, v = t, x = t.y) : (g = t, y = t.y, v = e, x = e.y), r.y < a.y ? (_ = r, w = r.y, M = a, S = a.y) : (_ = a, w = a.y, M = r, S = r.y)), y <= w ? x < w ? [] : x == w ? o ? [] : [_] : x <= S ? [_, v] : [_, M] : y > S ? [] : y == S ? o ? [] : [g] : x <= S ? [g, v] : [g, M])
                        }

                        function o(e, t, i, r) {
                            var a = t.x - e.x,
                                o = t.y - e.y,
                                n = i.x - e.x,
                                s = i.y - e.y,
                                l = r.x - e.x,
                                h = r.y - e.y,
                                c = a * s - o * n,
                                u = a * h - o * l;
                            if (Math.abs(c) > 1e-10) {
                                var f = l * s - h * n;
                                return c > 0 ? u >= 0 && f >= 0 : u >= 0 || f >= 0
                            }
                            return u > 0
                        }
                        for (var n, s, l, h, c, u, f = {}, p = e.concat(), d = 0, m = t.length; d < m; d++) Array.prototype.push.apply(p, t[d]);
                        for (n = 0, s = p.length; n < s; n++) void 0 !== f[c = p[n].x + ":" + p[n].y] && console.log("Duplicate point", c), f[c] = n;
                        var g = function(e, t) {
                                var i, a = e.concat();

                                function n(e, t) {
                                    var r = a.length - 1,
                                        n = e - 1;
                                    n < 0 && (n = r);
                                    var s = e + 1;
                                    s > r && (s = 0);
                                    var l = o(a[e], a[n], a[s], i[t]);
                                    if (!l) return !1;
                                    var h = i.length - 1,
                                        c = t - 1;
                                    c < 0 && (c = h);
                                    var u = t + 1;
                                    return u > h && (u = 0), !!(l = o(i[t], i[c], i[u], a[e]))
                                }

                                function s(e, t) {
                                    var i, o;
                                    for (i = 0; i < a.length; i++)
                                        if (o = i + 1, o %= a.length, r(e, t, a[i], a[o], !0).length > 0) return !0;
                                    return !1
                                }
                                var l = [];

                                function h(e, i) {
                                    var a, o, n, s;
                                    for (a = 0; a < l.length; a++)
                                        for (o = t[l[a]], n = 0; n < o.length; n++)
                                            if (s = n + 1, s %= o.length, r(e, i, o[n], o[s], !0).length > 0) return !0;
                                    return !1
                                }
                                for (var c, u, f, p, d, m, g, v, y, x, _ = [], M = 0, w = t.length; M < w; M++) l.push(M);
                                for (var S = 2 * l.length; l.length > 0;) {
                                    if (--S < 0) {
                                        console.log("Infinite Loop! Holes left:" + l.length + ", Probably Hole outside Shape!");
                                        break
                                    }
                                    for (u = 0; u < a.length; u++) {
                                        f = a[u], c = -1;
                                        for (M = 0; M < l.length; M++)
                                            if (d = l[M], void 0 === _[m = f.x + ":" + f.y + ":" + d]) {
                                                i = t[d];
                                                for (var b = 0; b < i.length; b++)
                                                    if (p = i[b], n(u, b) && !s(f, p) && !h(f, p)) {
                                                        c = b, l.splice(M, 1), g = a.slice(0, u + 1), v = a.slice(u), y = i.slice(c), x = i.slice(0, c + 1), a = g.concat(y).concat(x).concat(v);
                                                        break
                                                    }
                                                if (c >= 0) break;
                                                _[m] = !0
                                            }
                                        if (c >= 0) break
                                    }
                                }
                                return a
                            }(e, t),
                            v = a.FontUtils.Triangulate(g, !1);
                        for (n = 0, s = v.length; n < s; n++)
                            for (h = v[n], l = 0; l < 3; l++) void 0 !== (u = f[c = h[l].x + ":" + h[l].y]) && (h[l] = u);
                        return v.concat()
                    },
                    isClockWise: function(e) {
                        return a.FontUtils.Triangulate.area(e) < 0
                    },
                    b2p0: function(e, t) {
                        var i = 1 - e;
                        return i * i * t
                    },
                    b2p1: function(e, t) {
                        return 2 * (1 - e) * e * t
                    },
                    b2p2: function(e, t) {
                        return e * e * t
                    },
                    b2: function(e, t, i, r) {
                        return this.b2p0(e, t) + this.b2p1(e, i) + this.b2p2(e, r)
                    },
                    b3p0: function(e, t) {
                        var i = 1 - e;
                        return i * i * i * t
                    },
                    b3p1: function(e, t) {
                        var i = 1 - e;
                        return 3 * i * i * e * t
                    },
                    b3p2: function(e, t) {
                        return 3 * (1 - e) * e * e * t
                    },
                    b3p3: function(e, t) {
                        return e * e * e * t
                    },
                    b3: function(e, t, i, r, a) {
                        return this.b3p0(e, t) + this.b3p1(e, i) + this.b3p2(e, r) + this.b3p3(e, a)
                    }
                }, a.LineCurve = function(e, t) {
                    this.v1 = e, this.v2 = t
                }, a.LineCurve.prototype = Object.create(a.Curve.prototype), a.LineCurve.prototype.getPoint = function(e) {
                    var t = this.v2.clone().sub(this.v1);
                    return t.multiplyScalar(e).add(this.v1), t
                }, a.LineCurve.prototype.getPointAt = function(e) {
                    return this.getPoint(e)
                }, a.LineCurve.prototype.getTangent = function(e) {
                    return this.v2.clone().sub(this.v1).normalize()
                }, a.QuadraticBezierCurve = function(e, t, i) {
                    this.v0 = e, this.v1 = t, this.v2 = i
                }, a.QuadraticBezierCurve.prototype = Object.create(a.Curve.prototype), a.QuadraticBezierCurve.prototype.getPoint = function(e) {
                    var t, i;
                    return t = a.Shape.Utils.b2(e, this.v0.x, this.v1.x, this.v2.x), i = a.Shape.Utils.b2(e, this.v0.y, this.v1.y, this.v2.y), new a.Vector2(t, i)
                }, a.QuadraticBezierCurve.prototype.getTangent = function(e) {
                    var t, i;
                    t = a.Curve.Utils.tangentQuadraticBezier(e, this.v0.x, this.v1.x, this.v2.x), i = a.Curve.Utils.tangentQuadraticBezier(e, this.v0.y, this.v1.y, this.v2.y);
                    var r = new a.Vector2(t, i);
                    return r.normalize(), r
                }, a.CubicBezierCurve = function(e, t, i, r) {
                    this.v0 = e, this.v1 = t, this.v2 = i, this.v3 = r
                }, a.CubicBezierCurve.prototype = Object.create(a.Curve.prototype), a.CubicBezierCurve.prototype.getPoint = function(e) {
                    var t, i;
                    return t = a.Shape.Utils.b3(e, this.v0.x, this.v1.x, this.v2.x, this.v3.x), i = a.Shape.Utils.b3(e, this.v0.y, this.v1.y, this.v2.y, this.v3.y), new a.Vector2(t, i)
                }, a.CubicBezierCurve.prototype.getTangent = function(e) {
                    var t, i;
                    t = a.Curve.Utils.tangentCubicBezier(e, this.v0.x, this.v1.x, this.v2.x, this.v3.x), i = a.Curve.Utils.tangentCubicBezier(e, this.v0.y, this.v1.y, this.v2.y, this.v3.y);
                    var r = new a.Vector2(t, i);
                    return r.normalize(), r
                }, a.SplineCurve = function(e) {
                    this.points = void 0 == e ? [] : e
                }, a.SplineCurve.prototype = Object.create(a.Curve.prototype), a.SplineCurve.prototype.getPoint = function(e) {
                    var t, i, r, o = new a.Vector2,
                        n = [],
                        s = this.points;
                    return r = (t = (s.length - 1) * e) - (i = Math.floor(t)), n[0] = 0 == i ? i : i - 1, n[1] = i, n[2] = i > s.length - 2 ? s.length - 1 : i + 1, n[3] = i > s.length - 3 ? s.length - 1 : i + 2, o.x = a.Curve.Utils.interpolate(s[n[0]].x, s[n[1]].x, s[n[2]].x, s[n[3]].x, r), o.y = a.Curve.Utils.interpolate(s[n[0]].y, s[n[1]].y, s[n[2]].y, s[n[3]].y, r), o
                }, a.EllipseCurve = function(e, t, i, r, a, o, n) {
                    this.aX = e, this.aY = t, this.xRadius = i, this.yRadius = r, this.aStartAngle = a, this.aEndAngle = o, this.aClockwise = n
                }, a.EllipseCurve.prototype = Object.create(a.Curve.prototype), a.EllipseCurve.prototype.getPoint = function(e) {
                    var t, i = this.aEndAngle - this.aStartAngle;
                    i < 0 && (i += 2 * Math.PI), i > 2 * Math.PI && (i -= 2 * Math.PI), t = !0 === this.aClockwise ? this.aEndAngle + (1 - e) * (2 * Math.PI - i) : this.aStartAngle + e * i;
                    var r = this.aX + this.xRadius * Math.cos(t),
                        o = this.aY + this.yRadius * Math.sin(t);
                    return new a.Vector2(r, o)
                }, a.ArcCurve = function(e, t, i, r, o, n) {
                    a.EllipseCurve.call(this, e, t, i, i, r, o, n)
                }, a.ArcCurve.prototype = Object.create(a.EllipseCurve.prototype), a.LineCurve3 = a.Curve.create((function(e, t) {
                    this.v1 = e, this.v2 = t
                }), (function(e) {
                    var t = new a.Vector3;
                    return t.subVectors(this.v2, this.v1), t.multiplyScalar(e), t.add(this.v1), t
                })), a.QuadraticBezierCurve3 = a.Curve.create((function(e, t, i) {
                    this.v0 = e, this.v1 = t, this.v2 = i
                }), (function(e) {
                    var t, i, r;
                    return t = a.Shape.Utils.b2(e, this.v0.x, this.v1.x, this.v2.x), i = a.Shape.Utils.b2(e, this.v0.y, this.v1.y, this.v2.y), r = a.Shape.Utils.b2(e, this.v0.z, this.v1.z, this.v2.z), new a.Vector3(t, i, r)
                })), a.CubicBezierCurve3 = a.Curve.create((function(e, t, i, r) {
                    this.v0 = e, this.v1 = t, this.v2 = i, this.v3 = r
                }), (function(e) {
                    var t, i, r;
                    return t = a.Shape.Utils.b3(e, this.v0.x, this.v1.x, this.v2.x, this.v3.x), i = a.Shape.Utils.b3(e, this.v0.y, this.v1.y, this.v2.y, this.v3.y), r = a.Shape.Utils.b3(e, this.v0.z, this.v1.z, this.v2.z, this.v3.z), new a.Vector3(t, i, r)
                })), a.SplineCurve3 = a.Curve.create((function(e) {
                    this.points = void 0 == e ? [] : e
                }), (function(e) {
                    var t, i, r, o = new a.Vector3,
                        n = [],
                        s = this.points;
                    r = (t = (s.length - 1) * e) - (i = Math.floor(t)), n[0] = 0 == i ? i : i - 1, n[1] = i, n[2] = i > s.length - 2 ? s.length - 1 : i + 1, n[3] = i > s.length - 3 ? s.length - 1 : i + 2;
                    var l = s[n[0]],
                        h = s[n[1]],
                        c = s[n[2]],
                        u = s[n[3]];
                    return o.x = a.Curve.Utils.interpolate(l.x, h.x, c.x, u.x, r), o.y = a.Curve.Utils.interpolate(l.y, h.y, c.y, u.y, r), o.z = a.Curve.Utils.interpolate(l.z, h.z, c.z, u.z, r), o
                })), a.ClosedSplineCurve3 = a.Curve.create((function(e) {
                    this.points = void 0 == e ? [] : e
                }), (function(e) {
                    var t, i, r, o = new a.Vector3,
                        n = [],
                        s = this.points;
                    return r = (t = (s.length - 0) * e) - (i = Math.floor(t)), i += i > 0 ? 0 : (Math.floor(Math.abs(i) / s.length) + 1) * s.length, n[0] = (i - 1) % s.length, n[1] = i % s.length, n[2] = (i + 1) % s.length, n[3] = (i + 2) % s.length, o.x = a.Curve.Utils.interpolate(s[n[0]].x, s[n[1]].x, s[n[2]].x, s[n[3]].x, r), o.y = a.Curve.Utils.interpolate(s[n[0]].y, s[n[1]].y, s[n[2]].y, s[n[3]].y, r), o.z = a.Curve.Utils.interpolate(s[n[0]].z, s[n[1]].z, s[n[2]].z, s[n[3]].z, r), o
                })), a.AnimationHandler = function() {
                    var e = [],
                        t = {},
                        i = {
                            update: function(t) {
                                for (var i = 0; i < e.length; i++) e[i].update(t)
                            },
                            addToUpdate: function(t) {
                                -1 === e.indexOf(t) && e.push(t)
                            },
                            removeFromUpdate: function(t) {
                                var i = e.indexOf(t); - 1 !== i && e.splice(i, 1)
                            },
                            add: function(e) {
                                void 0 !== t[e.name] && a.onwarning("THREE.AnimationHandler.add: Warning! " + e.name + " already exists in library. Overwriting."), t[e.name] = e, o(e)
                            },
                            get: function(e) {
                                if ("string" === typeof e) return t[e] ? t[e] : (a.onwarning("THREE.AnimationHandler.get: Couldn't find animation " + e), null)
                            },
                            parse: function(e) {
                                var t = [];
                                if (e instanceof a.SkinnedMesh)
                                    for (var i = 0; i < e.bones.length; i++) t.push(e.bones[i]);
                                else r(e, t);
                                return t
                            }
                        },
                        r = function(e, t) {
                            t.push(e);
                            for (var i = 0; i < e.children.length; i++) r(e.children[i], t)
                        },
                        o = function(e) {
                            if (!0 !== e.initialized) {
                                for (var t = 0; t < e.hierarchy.length; t++) {
                                    for (var i = 0; i < e.hierarchy[t].keys.length; i++)
                                        if (e.hierarchy[t].keys[i].time < 0 && (e.hierarchy[t].keys[i].time = 0), void 0 !== e.hierarchy[t].keys[i].rot && !(e.hierarchy[t].keys[i].rot instanceof a.Quaternion)) {
                                            var r = e.hierarchy[t].keys[i].rot;
                                            e.hierarchy[t].keys[i].rot = new a.Quaternion(r[0], r[1], r[2], r[3])
                                        }
                                    if (e.hierarchy[t].keys.length && void 0 !== e.hierarchy[t].keys[0].morphTargets) {
                                        var o = {};
                                        for (i = 0; i < e.hierarchy[t].keys.length; i++)
                                            for (var n = 0; n < e.hierarchy[t].keys[i].morphTargets.length; n++) {
                                                o[l = e.hierarchy[t].keys[i].morphTargets[n]] = -1
                                            }
                                        e.hierarchy[t].usedMorphTargets = o;
                                        for (i = 0; i < e.hierarchy[t].keys.length; i++) {
                                            var s = {};
                                            for (var l in o) {
                                                for (n = 0; n < e.hierarchy[t].keys[i].morphTargets.length; n++)
                                                    if (e.hierarchy[t].keys[i].morphTargets[n] === l) {
                                                        s[l] = e.hierarchy[t].keys[i].morphTargetsInfluences[n];
                                                        break
                                                    }
                                                n === e.hierarchy[t].keys[i].morphTargets.length && (s[l] = 0)
                                            }
                                            e.hierarchy[t].keys[i].morphTargetsInfluences = s
                                        }
                                    }
                                    for (i = 1; i < e.hierarchy[t].keys.length; i++) e.hierarchy[t].keys[i].time === e.hierarchy[t].keys[i - 1].time && (e.hierarchy[t].keys.splice(i, 1), i--);
                                    for (i = 0; i < e.hierarchy[t].keys.length; i++) e.hierarchy[t].keys[i].index = i
                                }
                                e.initialized = !0
                            }
                        };
                    return i.LINEAR = 0, i.CATMULLROM = 1, i.CATMULLROM_FORWARD = 2, i
                }(), a.Animation = function(e, t) {
                    this.root = e, this.data = a.AnimationHandler.get(t), this.hierarchy = a.AnimationHandler.parse(e), this.currentTime = 0, this.timeScale = 1, this.isPlaying = !1, this.isPaused = !0, this.loop = !0, this.interpolationType = a.AnimationHandler.LINEAR
                }, a.Animation.prototype.play = function(e) {
                    this.currentTime = void 0 !== e ? e : 0, !1 === this.isPlaying && (this.isPlaying = !0, this.reset(), this.update(0)), this.isPaused = !1, a.AnimationHandler.addToUpdate(this)
                }, a.Animation.prototype.pause = function() {
                    !0 === this.isPaused ? a.AnimationHandler.addToUpdate(this) : a.AnimationHandler.removeFromUpdate(this), this.isPaused = !this.isPaused
                }, a.Animation.prototype.stop = function() {
                    this.isPlaying = !1, this.isPaused = !1, a.AnimationHandler.removeFromUpdate(this)
                }, a.Animation.prototype.reset = function() {
                    for (var e = 0, t = this.hierarchy.length; e < t; e++) {
                        var i = this.hierarchy[e];
                        i.matrixAutoUpdate = !0, void 0 === i.animationCache && (i.animationCache = {}, i.animationCache.prevKey = {
                            pos: 0,
                            rot: 0,
                            scl: 0
                        }, i.animationCache.nextKey = {
                            pos: 0,
                            rot: 0,
                            scl: 0
                        }, i.animationCache.originalMatrix = i instanceof a.Bone ? i.skinMatrix : i.matrix);
                        var r = i.animationCache.prevKey,
                            o = i.animationCache.nextKey;
                        r.pos = this.data.hierarchy[e].keys[0], r.rot = this.data.hierarchy[e].keys[0], r.scl = this.data.hierarchy[e].keys[0], o.pos = this.getNextKeyWith("pos", e, 1), o.rot = this.getNextKeyWith("rot", e, 1), o.scl = this.getNextKeyWith("scl", e, 1)
                    }
                }, a.Animation.prototype.update = function() {
                    var e = [],
                        t = new a.Vector3,
                        i = function(e, t) {
                            var i, a, o, n, s, l, h, c, u, f = [],
                                p = [];
                            return o = (i = (e.length - 1) * t) - (a = Math.floor(i)), f[0] = 0 === a ? a : a - 1, f[1] = a, f[2] = a > e.length - 2 ? a : a + 1, f[3] = a > e.length - 3 ? a : a + 2, l = e[f[0]], h = e[f[1]], c = e[f[2]], u = e[f[3]], s = o * (n = o * o), p[0] = r(l[0], h[0], c[0], u[0], o, n, s), p[1] = r(l[1], h[1], c[1], u[1], o, n, s), p[2] = r(l[2], h[2], c[2], u[2], o, n, s), p
                        },
                        r = function(e, t, i, r, a, o, n) {
                            var s = .5 * (i - e),
                                l = .5 * (r - t);
                            return (2 * (t - i) + s + l) * n + (-3 * (t - i) - 2 * s - l) * o + s * a + t
                        };
                    return function(r) {
                        if (!1 !== this.isPlaying) {
                            var o;
                            this.currentTime += r * this.timeScale;
                            var n = ["pos", "rot", "scl"],
                                s = this.data.length;
                            if (!0 === this.loop && this.currentTime > s) this.currentTime %= s, this.reset();
                            else if (!1 === this.loop && this.currentTime > s) return void this.stop();
                            this.currentTime = Math.min(this.currentTime, s);
                            for (var l = 0, h = this.hierarchy.length; l < h; l++)
                                for (var c = this.hierarchy[l], u = c.animationCache, f = 0; f < 3; f++) {
                                    var p = n[f],
                                        d = u.prevKey[p],
                                        m = u.nextKey[p];
                                    if (m.time <= this.currentTime) {
                                        for (d = this.data.hierarchy[l].keys[0], m = this.getNextKeyWith(p, l, 1); m.time < this.currentTime && m.index > d.index;) d = m, m = this.getNextKeyWith(p, l, m.index + 1);
                                        u.prevKey[p] = d, u.nextKey[p] = m
                                    }
                                    c.matrixAutoUpdate = !0, c.matrixWorldNeedsUpdate = !0;
                                    var g = (this.currentTime - d.time) / (m.time - d.time),
                                        v = d[p],
                                        y = m[p];
                                    if (g < 0 && (g = 0), g > 1 && (g = 1), "pos" === p) {
                                        if (o = c.position, this.interpolationType === a.AnimationHandler.LINEAR) o.x = v[0] + (y[0] - v[0]) * g, o.y = v[1] + (y[1] - v[1]) * g, o.z = v[2] + (y[2] - v[2]) * g;
                                        else if (this.interpolationType === a.AnimationHandler.CATMULLROM || this.interpolationType === a.AnimationHandler.CATMULLROM_FORWARD) {
                                            e[0] = this.getPrevKeyWith("pos", l, d.index - 1).pos, e[1] = v, e[2] = y, e[3] = this.getNextKeyWith("pos", l, m.index + 1).pos;
                                            var x = i(e, g = .33 * g + .33);
                                            if (o.x = x[0], o.y = x[1], o.z = x[2], this.interpolationType === a.AnimationHandler.CATMULLROM_FORWARD) {
                                                var _ = i(e, 1.01 * g);
                                                t.set(_[0], _[1], _[2]), t.sub(o), t.y = 0, t.normalize();
                                                var M = Math.atan2(t.x, t.z);
                                                c.rotation.set(0, M, 0)
                                            }
                                        }
                                    } else "rot" === p ? a.Quaternion.slerp(v, y, c.quaternion, g) : "scl" === p && ((o = c.scale).x = v[0] + (y[0] - v[0]) * g, o.y = v[1] + (y[1] - v[1]) * g, o.z = v[2] + (y[2] - v[2]) * g)
                                }
                        }
                    }
                }(), a.Animation.prototype.getNextKeyWith = function(e, t, i) {
                    var r = this.data.hierarchy[t].keys;
                    for (this.interpolationType === a.AnimationHandler.CATMULLROM || this.interpolationType === a.AnimationHandler.CATMULLROM_FORWARD ? i = i < r.length - 1 ? i : r.length - 1 : i %= r.length; i < r.length; i++)
                        if (void 0 !== r[i][e]) return r[i];
                    return this.data.hierarchy[t].keys[0]
                }, a.Animation.prototype.getPrevKeyWith = function(e, t, i) {
                    var r = this.data.hierarchy[t].keys;
                    for (i = this.interpolationType === a.AnimationHandler.CATMULLROM || this.interpolationType === a.AnimationHandler.CATMULLROM_FORWARD ? i > 0 ? i : 0 : i >= 0 ? i : i + r.length; i >= 0; i--)
                        if (void 0 !== r[i][e]) return r[i];
                    return this.data.hierarchy[t].keys[r.length - 1]
                }, a.KeyFrameAnimation = function(e, t) {
                    this.root = e, this.data = a.AnimationHandler.get(t), this.hierarchy = a.AnimationHandler.parse(e), this.currentTime = 0, this.timeScale = .001, this.isPlaying = !1, this.isPaused = !0, this.loop = !0;
                    for (var i = 0, r = this.hierarchy.length; i < r; i++) {
                        var o = this.data.hierarchy[i].keys,
                            n = this.data.hierarchy[i].sids,
                            s = this.hierarchy[i];
                        if (o.length && n) {
                            for (var l = 0; l < n.length; l++) {
                                var h = n[l],
                                    c = this.getNextKeyWith(h, i, 0);
                                c && c.apply(h)
                            }
                            s.matrixAutoUpdate = !1, this.data.hierarchy[i].node.updateMatrix(), s.matrixWorldNeedsUpdate = !0
                        }
                    }
                }, a.KeyFrameAnimation.prototype.play = function(e) {
                    if (this.currentTime = void 0 !== e ? e : 0, !1 === this.isPlaying) {
                        this.isPlaying = !0;
                        var t, i, r, o = this.hierarchy.length;
                        for (t = 0; t < o; t++) {
                            i = this.hierarchy[t], void 0 === (r = this.data.hierarchy[t]).animationCache && (r.animationCache = {}, r.animationCache.prevKey = null, r.animationCache.nextKey = null, r.animationCache.originalMatrix = i instanceof a.Bone ? i.skinMatrix : i.matrix);
                            var n = this.data.hierarchy[t].keys;
                            n.length && (r.animationCache.prevKey = n[0], r.animationCache.nextKey = n[1], this.startTime = Math.min(n[0].time, this.startTime), this.endTime = Math.max(n[n.length - 1].time, this.endTime))
                        }
                        this.update(0)
                    }
                    this.isPaused = !1, a.AnimationHandler.addToUpdate(this)
                }, a.KeyFrameAnimation.prototype.pause = function() {
                    this.isPaused ? a.AnimationHandler.addToUpdate(this) : a.AnimationHandler.removeFromUpdate(this), this.isPaused = !this.isPaused
                }, a.KeyFrameAnimation.prototype.stop = function() {
                    this.isPlaying = !1, this.isPaused = !1, a.AnimationHandler.removeFromUpdate(this);
                    for (var e = 0; e < this.data.hierarchy.length; e++) {
                        var t = this.hierarchy[e],
                            i = this.data.hierarchy[e];
                        if (void 0 !== i.animationCache) {
                            var r = i.animationCache.originalMatrix;
                            t instanceof a.Bone ? (r.copy(t.skinMatrix), t.skinMatrix = r) : (r.copy(t.matrix), t.matrix = r), delete i.animationCache
                        }
                    }
                }, a.KeyFrameAnimation.prototype.update = function(e) {
                    if (!1 !== this.isPlaying) {
                        this.currentTime += e * this.timeScale;
                        var t = this.data.length;
                        !0 === this.loop && this.currentTime > t && (this.currentTime %= t), this.currentTime = Math.min(this.currentTime, t);
                        for (var i = 0, r = this.hierarchy.length; i < r; i++) {
                            var a = this.hierarchy[i],
                                o = this.data.hierarchy[i],
                                n = o.keys,
                                s = o.animationCache;
                            if (n.length) {
                                var l = s.prevKey,
                                    h = s.nextKey;
                                if (h.time <= this.currentTime) {
                                    for (; h.time < this.currentTime && h.index > l.index;) h = n[(l = h).index + 1];
                                    s.prevKey = l, s.nextKey = h
                                }
                                h.time >= this.currentTime ? l.interpolate(h, this.currentTime) : l.interpolate(h, h.time), this.data.hierarchy[i].node.updateMatrix(), a.matrixWorldNeedsUpdate = !0
                            }
                        }
                    }
                }, a.KeyFrameAnimation.prototype.getNextKeyWith = function(e, t, i) {
                    var r = this.data.hierarchy[t].keys;
                    for (i %= r.length; i < r.length; i++)
                        if (r[i].hasTarget(e)) return r[i];
                    return r[0]
                }, a.KeyFrameAnimation.prototype.getPrevKeyWith = function(e, t, i) {
                    var r = this.data.hierarchy[t].keys;
                    for (i = i >= 0 ? i : i + r.length; i >= 0; i--)
                        if (r[i].hasTarget(e)) return r[i];
                    return r[r.length - 1]
                }, a.MorphAnimation = function(e) {
                    this.mesh = e, this.frames = e.morphTargetInfluences.length, this.currentTime = 0, this.duration = 1e3, this.loop = !0, this.isPlaying = !1
                }, a.MorphAnimation.prototype = {
                    play: function() {
                        this.isPlaying = !0
                    },
                    pause: function() {
                        this.isPlaying = !1
                    },
                    update: function() {
                        var e = 0,
                            t = 0;
                        return function(i) {
                            if (!1 !== this.isPlaying) {
                                this.currentTime += i, !0 === this.loop && this.currentTime > this.duration && (this.currentTime %= this.duration), this.currentTime = Math.min(this.currentTime, this.duration);
                                var r = this.duration / this.frames,
                                    a = Math.floor(this.currentTime / r);
                                a != t && (this.mesh.morphTargetInfluences[e] = 0, this.mesh.morphTargetInfluences[t] = 1, this.mesh.morphTargetInfluences[a] = 0, e = t, t = a), this.mesh.morphTargetInfluences[a] = this.currentTime % r / r, this.mesh.morphTargetInfluences[e] = 1 - this.mesh.morphTargetInfluences[a]
                            }
                        }
                    }()
                }, a.CubeCamera = function(e, t, i) {
                    a.Object3D.call(this), this.className = "CubeCamera";
                    var r = 90,
                        o = new a.PerspectiveCamera(r, 1, e, t);
                    o.up.set(0, -1, 0), o.lookAt(new a.Vector3(1, 0, 0)), this.add(o);
                    var n = new a.PerspectiveCamera(r, 1, e, t);
                    n.up.set(0, -1, 0), n.lookAt(new a.Vector3(-1, 0, 0)), this.add(n);
                    var s = new a.PerspectiveCamera(r, 1, e, t);
                    s.up.set(0, 0, 1), s.lookAt(new a.Vector3(0, 1, 0)), this.add(s);
                    var l = new a.PerspectiveCamera(r, 1, e, t);
                    l.up.set(0, 0, -1), l.lookAt(new a.Vector3(0, -1, 0)), this.add(l);
                    var h = new a.PerspectiveCamera(r, 1, e, t);
                    h.up.set(0, -1, 0), h.lookAt(new a.Vector3(0, 0, 1)), this.add(h);
                    var c = new a.PerspectiveCamera(r, 1, e, t);
                    c.up.set(0, -1, 0), c.lookAt(new a.Vector3(0, 0, -1)), this.add(c), this.renderTarget = new a.WebGLRenderTargetCube(i, i, {
                        format: a.RGBFormat,
                        magFilter: a.LinearFilter,
                        minFilter: a.LinearFilter
                    }), this.updateCubeMap = function(e, t) {
                        var i = this.renderTarget,
                            r = i.generateMipmaps;
                        i.generateMipmaps = !1, i.activeCubeFace = 0, e.render(t, o, i), i.activeCubeFace = 1, e.render(t, n, i), i.activeCubeFace = 2, e.render(t, s, i), i.activeCubeFace = 3, e.render(t, l, i), i.activeCubeFace = 4, e.render(t, h, i), i.generateMipmaps = r, i.activeCubeFace = 5, e.render(t, c, i)
                    }
                }, a.CubeCamera.prototype = Object.create(a.Object3D.prototype), a.CombinedCamera = function(e, t, i, r, o, n, s) {
                    a.Camera.call(this), this.className = "CombinedCamera", this.fov = i, this.left = -e / 2, this.right = e / 2, this.top = t / 2, this.bottom = -t / 2, this.cameraO = new a.OrthographicCamera(e / -2, e / 2, t / 2, t / -2, n, s), this.cameraP = new a.PerspectiveCamera(i, e / t, r, o), this.zoom = 1, this.toPerspective()
                }, a.CombinedCamera.prototype = Object.create(a.Camera.prototype), a.CombinedCamera.prototype.toPerspective = function() {
                    this.near = this.cameraP.near, this.far = this.cameraP.far, this.cameraP.fov = this.fov / this.zoom, this.cameraP.updateProjectionMatrix(), this.projectionMatrix = this.cameraP.projectionMatrix, this.inPerspectiveMode = !0, this.inOrthographicMode = !1
                }, a.CombinedCamera.prototype.toOrthographic = function() {
                    var e = this.fov,
                        t = this.cameraP.aspect,
                        i = (this.cameraP.near + this.cameraP.far) / 2,
                        r = Math.tan(e / 2) * i,
                        a = 2 * r * t / 2;
                    r /= this.zoom, a /= this.zoom, this.cameraO.left = -a, this.cameraO.right = a, this.cameraO.top = r, this.cameraO.bottom = -r, this.cameraO.updateProjectionMatrix(), this.near = this.cameraO.near, this.far = this.cameraO.far, this.projectionMatrix = this.cameraO.projectionMatrix, this.inPerspectiveMode = !1, this.inOrthographicMode = !0
                }, a.CombinedCamera.prototype.setSize = function(e, t) {
                    this.cameraP.aspect = e / t, this.left = -e / 2, this.right = e / 2, this.top = t / 2, this.bottom = -t / 2
                }, a.CombinedCamera.prototype.setFov = function(e) {
                    this.fov = e, this.inPerspectiveMode ? this.toPerspective() : this.toOrthographic()
                }, a.CombinedCamera.prototype.updateProjectionMatrix = function() {
                    this.inPerspectiveMode ? this.toPerspective() : (this.toPerspective(), this.toOrthographic())
                }, a.CombinedCamera.prototype.setLens = function(e, t) {
                    void 0 === t && (t = 24);
                    var i = 2 * a.Math.radToDeg(Math.atan(t / (2 * e)));
                    return this.setFov(i), i
                }, a.CombinedCamera.prototype.setZoom = function(e) {
                    this.zoom = e, this.inPerspectiveMode ? this.toPerspective() : this.toOrthographic()
                }, a.CombinedCamera.prototype.toFrontView = function() {
                    this.rotation.x = 0, this.rotation.y = 0, this.rotation.z = 0, this.rotationAutoUpdate = !1
                }, a.CombinedCamera.prototype.toBackView = function() {
                    this.rotation.x = 0, this.rotation.y = Math.PI, this.rotation.z = 0, this.rotationAutoUpdate = !1
                }, a.CombinedCamera.prototype.toLeftView = function() {
                    this.rotation.x = 0, this.rotation.y = -Math.PI / 2, this.rotation.z = 0, this.rotationAutoUpdate = !1
                }, a.CombinedCamera.prototype.toRightView = function() {
                    this.rotation.x = 0, this.rotation.y = Math.PI / 2, this.rotation.z = 0, this.rotationAutoUpdate = !1
                }, a.CombinedCamera.prototype.toTopView = function() {
                    this.rotation.x = -Math.PI / 2, this.rotation.y = 0, this.rotation.z = 0, this.rotationAutoUpdate = !1
                }, a.CombinedCamera.prototype.toBottomView = function() {
                    this.rotation.x = Math.PI / 2, this.rotation.y = 0, this.rotation.z = 0, this.rotationAutoUpdate = !1
                }, a.BoxGeometry = function(e, t, i, r, o, n) {
                    a.Geometry.call(this), this.className = "BoxGeometry";
                    var s = this;
                    this.width = e, this.height = t, this.depth = i, this.widthSegments = r || 1, this.heightSegments = o || 1, this.depthSegments = n || 1;
                    var l = this.width / 2,
                        h = this.height / 2,
                        c = this.depth / 2;

                    function u(e, t, i, r, o, n, l, h) {
                        var c, u, f, p = s.widthSegments,
                            d = s.heightSegments,
                            m = o / 2,
                            g = n / 2,
                            v = s.vertices.length;
                        "x" === e && "y" === t || "y" === e && "x" === t ? c = "z" : "x" === e && "z" === t || "z" === e && "x" === t ? (c = "y", d = s.depthSegments) : ("z" === e && "y" === t || "y" === e && "z" === t) && (c = "x", p = s.depthSegments);
                        var y = p + 1,
                            x = d + 1,
                            _ = o / p,
                            M = n / d,
                            w = new a.Vector3;
                        for (w[c] = l > 0 ? 1 : -1, f = 0; f < x; f++)
                            for (u = 0; u < y; u++) {
                                var S = new a.Vector3;
                                S[e] = (u * _ - m) * i, S[t] = (f * M - g) * r, S[c] = l, s.vertices.push(S)
                            }
                        for (f = 0; f < d; f++)
                            for (u = 0; u < p; u++) {
                                var b = u + y * f,
                                    A = u + y * (f + 1),
                                    T = u + 1 + y * (f + 1),
                                    C = u + 1 + y * f,
                                    E = new a.Vector2(u / p, 1 - f / d),
                                    L = new a.Vector2(u / p, 1 - (f + 1) / d),
                                    P = new a.Vector2((u + 1) / p, 1 - (f + 1) / d),
                                    R = new a.Vector2((u + 1) / p, 1 - f / d),
                                    D = new a.Face3(b + v, A + v, C + v);
                                D.normal.copy(w), D.vertexNormals.push(w.clone(), w.clone(), w.clone()), D.materialIndex = h, s.faces.push(D), s.faceVertexUvs[0].push([E, L, R]), (D = new a.Face3(A + v, T + v, C + v)).normal.copy(w), D.vertexNormals.push(w.clone(), w.clone(), w.clone()), D.materialIndex = h, s.faces.push(D), s.faceVertexUvs[0].push([L.clone(), P, R.clone()])
                            }
                    }
                    u("z", "y", -1, -1, this.depth, this.height, l, 0), u("z", "y", 1, -1, this.depth, this.height, -l, 1), u("x", "z", 1, 1, this.width, this.depth, h, 2), u("x", "z", 1, -1, this.width, this.depth, -h, 3), u("x", "y", 1, -1, this.width, this.height, c, 4), u("x", "y", -1, -1, this.width, this.height, -c, 5), this.computeCentroids(), this.mergeVertices()
                }, a.BoxGeometry.prototype = Object.create(a.Geometry.prototype), a.CircleGeometry = function(e, t, i, r) {
                    a.Geometry.call(this), this.className = "CircleGeometry", this.radius = e = e || 50, this.segments = t = void 0 !== t ? Math.max(3, t) : 8, this.thetaStart = i = void 0 !== i ? i : 0, this.thetaLength = r = void 0 !== r ? r : 2 * Math.PI;
                    var o, n = [],
                        s = new a.Vector3,
                        l = new a.Vector2(.5, .5);
                    for (this.vertices.push(s), n.push(l), o = 0; o <= t; o++) {
                        var h = new a.Vector3,
                            c = i + o / t * r;
                        h.x = e * Math.cos(c), h.y = e * Math.sin(c), this.vertices.push(h), n.push(new a.Vector2((h.x / e + 1) / 2, (h.y / e + 1) / 2))
                    }
                    var u = new a.Vector3(0, 0, 1);
                    for (o = 1; o <= t; o++) {
                        var f = o,
                            p = o + 1;
                        this.faces.push(new a.Face3(f, p, 0, [u.clone(), u.clone(), u.clone()])), this.faceVertexUvs[0].push([n[o].clone(), n[o + 1].clone(), l.clone()])
                    }
                    this.computeCentroids(), this.computeFaceNormals(), this.boundingSphere = new a.Sphere(new a.Vector3, e)
                }, a.CircleGeometry.prototype = Object.create(a.Geometry.prototype), a.CubeGeometry = a.BoxGeometry, a.CylinderGeometry = function(e, t, i, r, o, n) {
                    a.Geometry.call(this), this.className = "CylinderGeometry", this.radiusTop = e = void 0 !== e ? e : 20, this.radiusBottom = t = void 0 !== t ? t : 20, this.height = i = void 0 !== i ? i : 100, this.radialSegments = r = r || 8, this.heightSegments = o = o || 1, this.openEnded = n = void 0 !== n && n;
                    var s, l, h = i / 2,
                        c = [],
                        u = [];
                    for (l = 0; l <= o; l++) {
                        var f = [],
                            p = [],
                            d = l / o,
                            m = d * (t - e) + e;
                        for (s = 0; s <= r; s++) {
                            var g = s / r,
                                v = new a.Vector3;
                            v.x = m * Math.sin(g * Math.PI * 2), v.y = -d * i + h, v.z = m * Math.cos(g * Math.PI * 2), this.vertices.push(v), f.push(this.vertices.length - 1), p.push(new a.Vector2(g, 1 - d))
                        }
                        c.push(f), u.push(p)
                    }
                    var y, x, _ = (t - e) / i;
                    for (s = 0; s < r; s++)
                        for (0 !== e ? (y = this.vertices[c[0][s]].clone(), x = this.vertices[c[0][s + 1]].clone()) : (y = this.vertices[c[1][s]].clone(), x = this.vertices[c[1][s + 1]].clone()), y.setY(Math.sqrt(y.x * y.x + y.z * y.z) * _).normalize(), x.setY(Math.sqrt(x.x * x.x + x.z * x.z) * _).normalize(), l = 0; l < o; l++) {
                            var M = c[l][s],
                                w = c[l + 1][s],
                                S = c[l + 1][s + 1],
                                b = c[l][s + 1],
                                A = y.clone(),
                                T = y.clone(),
                                C = x.clone(),
                                E = x.clone(),
                                L = u[l][s].clone(),
                                P = u[l + 1][s].clone(),
                                R = u[l + 1][s + 1].clone(),
                                D = u[l][s + 1].clone();
                            this.faces.push(new a.Face3(M, w, b, [A, T, E])), this.faceVertexUvs[0].push([L, P, D]), this.faces.push(new a.Face3(w, S, b, [T.clone(), C, E.clone()])), this.faceVertexUvs[0].push([P.clone(), R, D.clone()])
                        }
                    if (!1 === n && e > 0)
                        for (this.vertices.push(new a.Vector3(0, h, 0)), s = 0; s < r; s++) {
                            M = c[0][s], w = c[0][s + 1], S = this.vertices.length - 1, A = new a.Vector3(0, 1, 0), T = new a.Vector3(0, 1, 0), C = new a.Vector3(0, 1, 0), L = u[0][s].clone(), P = u[0][s + 1].clone(), R = new a.Vector2(P.x, 0);
                            this.faces.push(new a.Face3(M, w, S, [A, T, C])), this.faceVertexUvs[0].push([L, P, R])
                        }
                    if (!1 === n && t > 0)
                        for (this.vertices.push(new a.Vector3(0, -h, 0)), s = 0; s < r; s++) {
                            M = c[l][s + 1], w = c[l][s], S = this.vertices.length - 1, A = new a.Vector3(0, -1, 0), T = new a.Vector3(0, -1, 0), C = new a.Vector3(0, -1, 0), L = u[l][s + 1].clone(), P = u[l][s].clone(), R = new a.Vector2(P.x, 1);
                            this.faces.push(new a.Face3(M, w, S, [A, T, C])), this.faceVertexUvs[0].push([L, P, R])
                        }
                    this.computeCentroids(), this.computeFaceNormals()
                }, a.CylinderGeometry.prototype = Object.create(a.Geometry.prototype), a.ExtrudeGeometry = function(e, t) {
                    "undefined" !== typeof e ? (a.Geometry.call(this), this.className = "ExtrudeGeometry", e = e instanceof Array ? e : [e], this.shapebb = e[e.length - 1].getBoundingBox(), this.addShapeList(e, t), this.computeCentroids(), this.computeFaceNormals()) : e = []
                }, a.ExtrudeGeometry.prototype = Object.create(a.Geometry.prototype), a.ExtrudeGeometry.prototype.addShapeList = function(e, t) {
                    for (var i = e.length, r = 0; r < i; r++) {
                        var a = e[r];
                        this.addShape(a, t)
                    }
                }, a.ExtrudeGeometry.prototype.addShape = function(e, t) {
                    var i, r, o, n, s, l, h, c, u = void 0 !== t.amount ? t.amount : 100,
                        f = void 0 !== t.bevelThickness ? t.bevelThickness : 6,
                        p = void 0 !== t.bevelSize ? t.bevelSize : f - 2,
                        d = void 0 !== t.bevelSegments ? t.bevelSegments : 3,
                        m = void 0 === t.bevelEnabled || t.bevelEnabled,
                        g = void 0 !== t.curveSegments ? t.curveSegments : 12,
                        v = void 0 !== t.steps ? t.steps : 1,
                        y = t.extrudePath,
                        x = !1,
                        _ = t.material,
                        M = t.extrudeMaterial,
                        w = void 0 !== t.UVGenerator ? t.UVGenerator : a.ExtrudeGeometry.WorldUVGenerator;
                    this.shapebb;
                    y && (i = y.getSpacedPoints(v), x = !0, m = !1, r = void 0 !== t.frames ? t.frames : new a.TubeGeometry.FrenetFrames(y, v, !1), o = new a.Vector3, n = new a.Vector3, s = new a.Vector3), m || (d = 0, f = 0, p = 0);
                    var S = this,
                        b = this.vertices.length,
                        A = e.extractPoints(g),
                        T = A.shape,
                        C = A.holes,
                        E = !a.Shape.Utils.isClockWise(T);
                    if (E) {
                        for (T = T.reverse(), h = 0, c = C.length; h < c; h++) l = C[h], a.Shape.Utils.isClockWise(l) && (C[h] = l.reverse());
                        E = !1
                    }
                    var L = a.Shape.Utils.triangulateShape(T, C),
                        P = T;
                    for (h = 0, c = C.length; h < c; h++) l = C[h], T = T.concat(l);

                    function R(e, t, i) {
                        return t ? t.clone().multiplyScalar(i).add(e) : a.onerror("die, vec not specified")
                    }
                    var D, V, U, F, N, O, z = T.length,
                        I = L.length;
                    P.length, Math.PI;

                    function B(e, t, i) {
                        var r, o, n = 1e-10,
                            s = a.Math.sign,
                            l = 1,
                            h = e.x - t.x,
                            c = e.y - t.y,
                            u = i.x - e.x,
                            f = i.y - e.y,
                            p = h * h + c * c,
                            d = h * f - c * u;
                        if (Math.abs(d) > n) {
                            var m = Math.sqrt(p),
                                g = Math.sqrt(u * u + f * f),
                                v = t.x - c / m,
                                y = t.y + h / m,
                                x = ((i.x - f / g - v) * f - (i.y + u / g - y) * u) / (h * f - c * u),
                                _ = (r = v + h * x - e.x) * r + (o = y + c * x - e.y) * o;
                            if (_ <= 2) return new a.Vector2(r, o);
                            l = Math.sqrt(_ / 2)
                        } else {
                            var M = !1;
                            h > n ? u > n && (M = !0) : h < -1e-10 ? u < -1e-10 && (M = !0) : s(c) == s(f) && (M = !0), M ? (r = -c, o = h, l = Math.sqrt(p)) : (r = h, o = c, l = Math.sqrt(p / 2))
                        }
                        return new a.Vector2(r / l, o / l)
                    }
                    for (var k = [], G = 0, H = P.length, W = H - 1, j = G + 1; G < H; G++, W++, j++) {
                        W === H && (W = 0), j === H && (j = 0);
                        P[G], P[W], P[j];
                        k[G] = B(P[G], P[W], P[j])
                    }
                    var X, Y, q = [],
                        K = k.concat();
                    for (h = 0, c = C.length; h < c; h++) {
                        for (l = C[h], X = [], G = 0, W = (H = l.length) - 1, j = G + 1; G < H; G++, W++, j++) W === H && (W = 0), j === H && (j = 0), X[G] = B(l[G], l[W], l[j]);
                        q.push(X), K = K.concat(X)
                    }
                    for (D = 0; D < d; D++) {
                        for (F = f * (1 - (U = D / d)), V = p * Math.sin(U * Math.PI / 2), G = 0, H = P.length; G < H; G++) Z((N = R(P[G], k[G], V)).x, N.y, -F);
                        for (h = 0, c = C.length; h < c; h++)
                            for (l = C[h], X = q[h], G = 0, H = l.length; G < H; G++) Z((N = R(l[G], X[G], V)).x, N.y, -F)
                    }
                    for (V = p, G = 0; G < z; G++) N = m ? R(T[G], K[G], V) : T[G], x ? (n.copy(r.normals[0]).multiplyScalar(N.x), o.copy(r.binormals[0]).multiplyScalar(N.y), s.copy(i[0]).add(n).add(o), Z(s.x, s.y, s.z)) : Z(N.x, N.y, 0);
                    for (Y = 1; Y <= v; Y++)
                        for (G = 0; G < z; G++) N = m ? R(T[G], K[G], V) : T[G], x ? (n.copy(r.normals[Y]).multiplyScalar(N.x), o.copy(r.binormals[Y]).multiplyScalar(N.y), s.copy(i[Y]).add(n).add(o), Z(s.x, s.y, s.z)) : Z(N.x, N.y, u / v * Y);
                    for (D = d - 1; D >= 0; D--) {
                        for (F = f * (1 - (U = D / d)), V = p * Math.sin(U * Math.PI / 2), G = 0, H = P.length; G < H; G++) Z((N = R(P[G], k[G], V)).x, N.y, u + F);
                        for (h = 0, c = C.length; h < c; h++)
                            for (l = C[h], X = q[h], G = 0, H = l.length; G < H; G++) N = R(l[G], X[G], V), x ? Z(N.x, N.y + i[v - 1].y, i[v - 1].x + F) : Z(N.x, N.y, u + F)
                    }

                    function Q(e, t) {
                        var i, r;
                        for (G = e.length; --G >= 0;) {
                            i = G, (r = G - 1) < 0 && (r = e.length - 1);
                            var a = 0,
                                o = v + 2 * d;
                            for (a = 0; a < o; a++) {
                                var n = z * a,
                                    s = z * (a + 1);
                                $(t + i + n, t + r + n, t + r + s, t + i + s, e, a, o, i, r)
                            }
                        }
                    }

                    function Z(e, t, i) {
                        S.vertices.push(new a.Vector3(e, t, i))
                    }

                    function J(i, r, o, n) {
                        i += b, r += b, o += b, S.faces.push(new a.Face3(i, r, o, null, null, _));
                        var s = n ? w.generateBottomUV(S, e, t, i, r, o) : w.generateTopUV(S, e, t, i, r, o);
                        S.faceVertexUvs[0].push(s)
                    }

                    function $(i, r, o, n, s, l, h, c, u) {
                        i += b, r += b, o += b, n += b, S.faces.push(new a.Face3(i, r, n, null, null, M)), S.faces.push(new a.Face3(r, o, n, null, null, M));
                        var f = w.generateSideWallUV(S, e, s, t, i, r, o, n, l, h, c, u);
                        S.faceVertexUvs[0].push([f[0], f[1], f[3]]), S.faceVertexUvs[0].push([f[1], f[2], f[3]])
                    }! function() {
                        if (m) {
                            var e = 0,
                                t = z * e;
                            for (G = 0; G < I; G++) J((O = L[G])[2] + t, O[1] + t, O[0] + t, !0);
                            for (t = z * (e = v + 2 * d), G = 0; G < I; G++) J((O = L[G])[0] + t, O[1] + t, O[2] + t, !1)
                        } else {
                            for (G = 0; G < I; G++) J((O = L[G])[2], O[1], O[0], !0);
                            for (G = 0; G < I; G++) J((O = L[G])[0] + z * v, O[1] + z * v, O[2] + z * v, !1)
                        }
                    }(),
                    function() {
                        var e = 0;
                        for (Q(P, e), e += P.length, h = 0, c = C.length; h < c; h++) Q(l = C[h], e), e += l.length
                    }()
                }, a.ExtrudeGeometry.WorldUVGenerator = {
                    generateTopUV: function(e, t, i, r, o, n) {
                        var s = e.vertices[r].x,
                            l = e.vertices[r].y,
                            h = e.vertices[o].x,
                            c = e.vertices[o].y,
                            u = e.vertices[n].x,
                            f = e.vertices[n].y;
                        return [new a.Vector2(s, l), new a.Vector2(h, c), new a.Vector2(u, f)]
                    },
                    generateBottomUV: function(e, t, i, r, a, o) {
                        return this.generateTopUV(e, t, i, r, a, o)
                    },
                    generateSideWallUV: function(e, t, i, r, o, n, s, l, h, c, u, f) {
                        var p = e.vertices[o].x,
                            d = e.vertices[o].y,
                            m = e.vertices[o].z,
                            g = e.vertices[n].x,
                            v = e.vertices[n].y,
                            y = e.vertices[n].z,
                            x = e.vertices[s].x,
                            _ = e.vertices[s].y,
                            M = e.vertices[s].z,
                            w = e.vertices[l].x,
                            S = e.vertices[l].y,
                            b = e.vertices[l].z;
                        return Math.abs(d - v) < .01 ? [new a.Vector2(p, 1 - m), new a.Vector2(g, 1 - y), new a.Vector2(x, 1 - M), new a.Vector2(w, 1 - b)] : [new a.Vector2(d, 1 - m), new a.Vector2(v, 1 - y), new a.Vector2(_, 1 - M), new a.Vector2(S, 1 - b)]
                    }
                }, a.ExtrudeGeometry.__v1 = new a.Vector2, a.ExtrudeGeometry.__v2 = new a.Vector2, a.ExtrudeGeometry.__v3 = new a.Vector2, a.ExtrudeGeometry.__v4 = new a.Vector2, a.ExtrudeGeometry.__v5 = new a.Vector2, a.ExtrudeGeometry.__v6 = new a.Vector2, a.ShapeGeometry = function(e, t) {
                    a.Geometry.call(this), this.className = "ShapeGeometry", e instanceof Array === !1 && (e = [e]), this.shapebb = e[e.length - 1].getBoundingBox(), this.addShapeList(e, t), this.computeCentroids(), this.computeFaceNormals()
                }, a.ShapeGeometry.prototype = Object.create(a.Geometry.prototype), a.ShapeGeometry.prototype.addShapeList = function(e, t) {
                    for (var i = 0, r = e.length; i < r; i++) this.addShape(e[i], t);
                    return this
                }, a.ShapeGeometry.prototype.addShape = function(e, t) {
                    void 0 === t && (t = {});
                    var i, r, o, n = void 0 !== t.curveSegments ? t.curveSegments : 12,
                        s = t.material,
                        l = void 0 === t.UVGenerator ? a.ExtrudeGeometry.WorldUVGenerator : t.UVGenerator,
                        h = (this.shapebb, this.vertices.length),
                        c = e.extractPoints(n),
                        u = c.shape,
                        f = c.holes,
                        p = !a.Shape.Utils.isClockWise(u);
                    if (p) {
                        for (u = u.reverse(), i = 0, r = f.length; i < r; i++) o = f[i], a.Shape.Utils.isClockWise(o) && (f[i] = o.reverse());
                        p = !1
                    }
                    var d = a.Shape.Utils.triangulateShape(u, f),
                        m = u;
                    for (i = 0, r = f.length; i < r; i++) o = f[i], u = u.concat(o);
                    var g, v, y = u.length,
                        x = d.length;
                    m.length;
                    for (i = 0; i < y; i++) g = u[i], this.vertices.push(new a.Vector3(g.x, g.y, 0));
                    for (i = 0; i < x; i++) {
                        var _ = (v = d[i])[0] + h,
                            M = v[1] + h,
                            w = v[2] + h;
                        this.faces.push(new a.Face3(_, M, w, null, null, s)), this.faceVertexUvs[0].push(l.generateBottomUV(this, e, t, _, M, w))
                    }
                }, a.LatheGeometry = function(e, t, i, r) {
                    a.Geometry.call(this), this.className = "LatheGeometry", t = t || 12, i = i || 0, r = r || 2 * Math.PI;
                    for (var o = 1 / (e.length - 1), n = 1 / t, s = 0, l = t; s <= l; s++)
                        for (var h = i + s * n * r, c = Math.cos(h), u = Math.sin(h), f = 0, p = e.length; f < p; f++) {
                            var d = e[f],
                                m = new a.Vector3;
                            m.x = c * d.x - u * d.y, m.y = u * d.x + c * d.y, m.z = d.z, this.vertices.push(m)
                        }
                    var g = e.length;
                    for (s = 0, l = t; s < l; s++)
                        for (f = 0, p = e.length - 1; f < p; f++) {
                            var v = f + g * s,
                                y = v,
                                x = v + g,
                                _ = (c = v + 1 + g, v + 1),
                                M = s * n,
                                w = f * o,
                                S = M + n,
                                b = w + o;
                            this.faces.push(new a.Face3(y, x, _)), this.faceVertexUvs[0].push([new a.Vector2(M, w), new a.Vector2(S, w), new a.Vector2(M, b)]), this.faces.push(new a.Face3(x, c, _)), this.faceVertexUvs[0].push([new a.Vector2(S, w), new a.Vector2(S, b), new a.Vector2(M, b)])
                        }
                    this.mergeVertices(), this.computeCentroids(), this.computeFaceNormals(), this.computeVertexNormals()
                }, a.LatheGeometry.prototype = Object.create(a.Geometry.prototype), a.PlaneGeometry = function(e, t, i, r) {
                    var o, n;
                    a.Geometry.call(this), this.className = "PlaneGeometry", this.width = e, this.height = t, this.widthSegments = i || 1, this.heightSegments = r || 1;
                    var s = e / 2,
                        l = t / 2,
                        h = this.widthSegments,
                        c = this.heightSegments,
                        u = h + 1,
                        f = c + 1,
                        p = this.width / h,
                        d = this.height / c,
                        m = new a.Vector3(0, 0, 1);
                    for (n = 0; n < f; n++)
                        for (o = 0; o < u; o++) {
                            var g = o * p - s,
                                v = n * d - l;
                            this.vertices.push(new a.Vector3(g, -v, 0))
                        }
                    for (n = 0; n < c; n++)
                        for (o = 0; o < h; o++) {
                            var y = o + u * n,
                                x = o + u * (n + 1),
                                _ = o + 1 + u * (n + 1),
                                M = o + 1 + u * n,
                                w = new a.Vector2(o / h, 1 - n / c),
                                S = new a.Vector2(o / h, 1 - (n + 1) / c),
                                b = new a.Vector2((o + 1) / h, 1 - (n + 1) / c),
                                A = new a.Vector2((o + 1) / h, 1 - n / c),
                                T = new a.Face3(y, x, M);
                            T.normal.copy(m), T.vertexNormals.push(m.clone(), m.clone(), m.clone()), this.faces.push(T), this.faceVertexUvs[0].push([w, S, A]), (T = new a.Face3(x, _, M)).normal.copy(m), T.vertexNormals.push(m.clone(), m.clone(), m.clone()), this.faces.push(T), this.faceVertexUvs[0].push([S.clone(), b, A.clone()])
                        }
                    this.computeCentroids()
                }, a.PlaneGeometry.prototype = Object.create(a.Geometry.prototype), a.RingGeometry = function(e, t, i, r, o, n) {
                    a.Geometry.call(this), this.className = "RingGeometry", e = e || 0, t = t || 50, o = void 0 !== o ? o : 0, n = void 0 !== n ? n : 2 * Math.PI, i = void 0 !== i ? Math.max(3, i) : 8;
                    var s, l, h = [],
                        c = e,
                        u = (t - e) / (r = void 0 !== r ? Math.max(3, r) : 8);
                    for (s = 0; s <= r; s++) {
                        for (l = 0; l <= i; l++) {
                            var f = new a.Vector3,
                                p = o + l / i * n;
                            f.x = c * Math.cos(p), f.y = c * Math.sin(p), this.vertices.push(f), h.push(new a.Vector2((f.x / t + 1) / 2, (f.y / t + 1) / 2))
                        }
                        c += u
                    }
                    var d = new a.Vector3(0, 0, 1);
                    for (s = 0; s < r; s++) {
                        var m = s * i;
                        for (l = 0; l <= i; l++) {
                            var g = (p = l + m) + s,
                                v = p + i + s,
                                y = p + i + 1 + s;
                            this.faces.push(new a.Face3(g, v, y, [d.clone(), d.clone(), d.clone()])), this.faceVertexUvs[0].push([h[g].clone(), h[v].clone(), h[y].clone()]), g = p + s, v = p + i + 1 + s, y = p + 1 + s, this.faces.push(new a.Face3(g, v, y, [d.clone(), d.clone(), d.clone()])), this.faceVertexUvs[0].push([h[g].clone(), h[v].clone(), h[y].clone()])
                        }
                    }
                    this.computeCentroids(), this.computeFaceNormals(), this.boundingSphere = new a.Sphere(new a.Vector3, c)
                }, a.RingGeometry.prototype = Object.create(a.Geometry.prototype), a.SphereGeometry = function(e, t, i, r, o, n, s) {
                    a.Geometry.call(this), this.className = "SphereGeometry", this.radius = e = e || 50, this.widthSegments = t = Math.max(3, Math.floor(t) || 8), this.heightSegments = i = Math.max(2, Math.floor(i) || 6), this.phiStart = r = void 0 !== r ? r : 0, this.phiLength = o = void 0 !== o ? o : 2 * Math.PI, this.thetaStart = n = void 0 !== n ? n : 0, this.thetaLength = s = void 0 !== s ? s : Math.PI;
                    var l, h, c = [],
                        u = [];
                    for (h = 0; h <= i; h++) {
                        var f = [],
                            p = [];
                        for (l = 0; l <= t; l++) {
                            var d = l / t,
                                m = h / i,
                                g = new a.Vector3;
                            g.x = -e * Math.cos(r + d * o) * Math.sin(n + m * s), g.y = e * Math.cos(n + m * s), g.z = e * Math.sin(r + d * o) * Math.sin(n + m * s), this.vertices.push(g), f.push(this.vertices.length - 1), p.push(new a.Vector2(d, 1 - m))
                        }
                        c.push(f), u.push(p)
                    }
                    for (h = 0; h < this.heightSegments; h++)
                        for (l = 0; l < this.widthSegments; l++) {
                            var v = c[h][l + 1],
                                y = c[h][l],
                                x = c[h + 1][l],
                                _ = c[h + 1][l + 1],
                                M = this.vertices[v].clone().normalize(),
                                w = this.vertices[y].clone().normalize(),
                                S = this.vertices[x].clone().normalize(),
                                b = this.vertices[_].clone().normalize(),
                                A = u[h][l + 1].clone(),
                                T = u[h][l].clone(),
                                C = u[h + 1][l].clone(),
                                E = u[h + 1][l + 1].clone();
                            Math.abs(this.vertices[v].y) === this.radius ? (A.x = (A.x + T.x) / 2, this.faces.push(new a.Face3(v, x, _, [M, S, b])), this.faceVertexUvs[0].push([A, C, E])) : Math.abs(this.vertices[x].y) === this.radius ? (C.x = (C.x + E.x) / 2, this.faces.push(new a.Face3(v, y, x, [M, w, S])), this.faceVertexUvs[0].push([A, T, C])) : (this.faces.push(new a.Face3(v, y, _, [M, w, b])), this.faceVertexUvs[0].push([A, T, E]), this.faces.push(new a.Face3(y, x, _, [w.clone(), S, b.clone()])), this.faceVertexUvs[0].push([T.clone(), C, E.clone()]))
                        }
                    this.computeCentroids(), this.computeFaceNormals(), this.boundingSphere = new a.Sphere(new a.Vector3, e)
                }, a.SphereGeometry.prototype = Object.create(a.Geometry.prototype), a.TextGeometry = function(e, t) {
                    this.className = "TextGeometry", t = t || {};
                    var i = a.FontUtils.generateShapes(e, t);
                    t.amount = void 0 !== t.height ? t.height : 50, void 0 === t.bevelThickness && (t.bevelThickness = 10), void 0 === t.bevelSize && (t.bevelSize = 8), void 0 === t.bevelEnabled && (t.bevelEnabled = !1), a.ExtrudeGeometry.call(this, i, t)
                }, a.TextGeometry.prototype = Object.create(a.ExtrudeGeometry.prototype), a.TorusGeometry = function(e, t, i, r, o) {
                    a.Geometry.call(this), this.className = "TorusGeometry";
                    this.radius = e || 100, this.tube = t || 40, this.radialSegments = i || 8, this.tubularSegments = r || 6, this.arc = o || 2 * Math.PI;
                    for (var n = new a.Vector3, s = [], l = [], h = 0; h <= this.radialSegments; h++)
                        for (var c = 0; c <= this.tubularSegments; c++) {
                            var u = c / this.tubularSegments * this.arc,
                                f = h / this.radialSegments * Math.PI * 2;
                            n.x = this.radius * Math.cos(u), n.y = this.radius * Math.sin(u);
                            var p = new a.Vector3;
                            p.x = (this.radius + this.tube * Math.cos(f)) * Math.cos(u), p.y = (this.radius + this.tube * Math.cos(f)) * Math.sin(u), p.z = this.tube * Math.sin(f), this.vertices.push(p), s.push(new a.Vector2(c / this.tubularSegments, h / this.radialSegments)), l.push(p.clone().sub(n).normalize())
                        }
                    for (h = 1; h <= this.radialSegments; h++)
                        for (c = 1; c <= this.tubularSegments; c++) {
                            var d = (this.tubularSegments + 1) * h + c - 1,
                                m = (this.tubularSegments + 1) * (h - 1) + c - 1,
                                g = (this.tubularSegments + 1) * (h - 1) + c,
                                v = (this.tubularSegments + 1) * h + c,
                                y = new a.Face3(d, m, v, [l[d].clone(), l[m].clone(), l[v].clone()]);
                            this.faces.push(y), this.faceVertexUvs[0].push([s[d].clone(), s[m].clone(), s[v].clone()]), y = new a.Face3(m, g, v, [l[m].clone(), l[g].clone(), l[v].clone()]), this.faces.push(y), this.faceVertexUvs[0].push([s[m].clone(), s[g].clone(), s[v].clone()])
                        }
                    this.computeCentroids(), this.computeFaceNormals()
                }, a.TorusGeometry.prototype = Object.create(a.Geometry.prototype), a.TorusKnotGeometry = function(e, t, i, r, o, n, s) {
                    a.Geometry.call(this), this.className = "TorusKnotGeometry";
                    this.radius = e || 100, this.tube = t || 40, this.radialSegments = i || 64, this.tubularSegments = r || 8, this.p = o || 2, this.q = n || 3, this.heightScale = s || 1, this.grid = new Array(this.radialSegments);
                    for (var l = new a.Vector3, h = new a.Vector3, c = new a.Vector3, u = 0; u < this.radialSegments; ++u) {
                        this.grid[u] = new Array(this.tubularSegments);
                        var f = u / this.radialSegments * 2 * this.p * Math.PI,
                            p = P(f, this.q, this.p, this.radius, this.heightScale),
                            d = P(f + .01, this.q, this.p, this.radius, this.heightScale);
                        l.subVectors(d, p), h.addVectors(d, p), c.crossVectors(l, h), h.crossVectors(c, l), c.normalize(), h.normalize();
                        for (var m = 0; m < this.tubularSegments; ++m) {
                            var g = m / this.tubularSegments * 2 * Math.PI,
                                v = -this.tube * Math.cos(g),
                                y = this.tube * Math.sin(g),
                                x = new a.Vector3;
                            x.x = p.x + v * h.x + y * c.x, x.y = p.y + v * h.y + y * c.y, x.z = p.z + v * h.z + y * c.z, this.grid[u][m] = this.vertices.push(x) - 1
                        }
                    }
                    for (u = 0; u < this.radialSegments; ++u)
                        for (m = 0; m < this.tubularSegments; ++m) {
                            var _ = (u + 1) % this.radialSegments,
                                M = (m + 1) % this.tubularSegments,
                                w = this.grid[u][m],
                                S = this.grid[_][m],
                                b = this.grid[_][M],
                                A = this.grid[u][M],
                                T = new a.Vector2(u / this.radialSegments, m / this.tubularSegments),
                                C = new a.Vector2((u + 1) / this.radialSegments, m / this.tubularSegments),
                                E = new a.Vector2((u + 1) / this.radialSegments, (m + 1) / this.tubularSegments),
                                L = new a.Vector2(u / this.radialSegments, (m + 1) / this.tubularSegments);
                            this.faces.push(new a.Face3(w, S, A)), this.faceVertexUvs[0].push([T, C, L]), this.faces.push(new a.Face3(S, b, A)), this.faceVertexUvs[0].push([C.clone(), E, L.clone()])
                        }

                    function P(e, t, i, r, o) {
                        var n = Math.cos(e),
                            s = Math.sin(e),
                            l = t / i * e,
                            h = Math.cos(l),
                            c = r * (2 + h) * .5 * n,
                            u = r * (2 + h) * s * .5,
                            f = o * r * Math.sin(l) * .5;
                        return new a.Vector3(c, u, f)
                    }
                    this.computeCentroids(), this.computeFaceNormals(), this.computeVertexNormals()
                }, a.TorusKnotGeometry.prototype = Object.create(a.Geometry.prototype), a.TubeGeometry = function(e, t, i, r, o) {
                    a.Geometry.call(this), this.className = "TubeGeometry", this.path = e, this.segments = t || 64, this.radius = i || 1, this.radialSegments = r || 8, this.closed = o || !1, this.grid = [];
                    var n, s, l, h, c, u, f, p, d, m, g, v, y, x, _, M, w, S, b, A = this,
                        T = this.segments + 1,
                        C = new a.Vector3,
                        E = new a.TubeGeometry.FrenetFrames(this.path, this.segments, this.closed),
                        L = E.tangents,
                        P = E.normals,
                        R = E.binormals;

                    function D(e, t, i) {
                        return A.vertices.push(new a.Vector3(e, t, i)) - 1
                    }
                    for (this.tangents = L, this.normals = P, this.binormals = R, p = 0; p < T; p++)
                        for (this.grid[p] = [], l = p / (T - 1), f = e.getPointAt(l), L[p], n = P[p], s = R[p], d = 0; d < this.radialSegments; d++) h = d / this.radialSegments * 2 * Math.PI, c = -this.radius * Math.cos(h), u = this.radius * Math.sin(h), C.copy(f), C.x += c * n.x + u * s.x, C.y += c * n.y + u * s.y, C.z += c * n.z + u * s.z, this.grid[p][d] = D(C.x, C.y, C.z);
                    for (p = 0; p < this.segments; p++)
                        for (d = 0; d < this.radialSegments; d++) m = this.closed ? (p + 1) % this.segments : p + 1, g = (d + 1) % this.radialSegments, v = this.grid[p][d], y = this.grid[m][d], x = this.grid[m][g], _ = this.grid[p][g], M = new a.Vector2(p / this.segments, d / this.radialSegments), w = new a.Vector2((p + 1) / this.segments, d / this.radialSegments), S = new a.Vector2((p + 1) / this.segments, (d + 1) / this.radialSegments), b = new a.Vector2(p / this.segments, (d + 1) / this.radialSegments), this.faces.push(new a.Face3(v, y, _)), this.faceVertexUvs[0].push([M, w, b]), this.faces.push(new a.Face3(y, x, _)), this.faceVertexUvs[0].push([w.clone(), S, b.clone()]);
                    this.computeCentroids(), this.computeFaceNormals(), this.computeVertexNormals()
                }, a.TubeGeometry.prototype = Object.create(a.Geometry.prototype), a.TubeGeometry.FrenetFrames = function(e, t, i) {
                    new a.Vector3;
                    var r, o, n, s, l, h, c, u = new a.Vector3,
                        f = (new a.Vector3, []),
                        p = [],
                        d = [],
                        m = new a.Vector3,
                        g = new a.Matrix4,
                        v = t + 1,
                        y = 1e-4;
                    for (this.tangents = f, this.normals = p, this.binormals = d, h = 0; h < v; h++) c = h / (v - 1), f[h] = e.getTangentAt(c), f[h].normalize();
                    for (function() {
                            p[0] = new a.Vector3, d[0] = new a.Vector3, o = Number.MAX_VALUE, n = Math.abs(f[0].x), s = Math.abs(f[0].y), l = Math.abs(f[0].z), n <= o && (o = n, u.set(1, 0, 0));
                            s <= o && (o = s, u.set(0, 1, 0));
                            l <= o && u.set(0, 0, 1);
                            m.crossVectors(f[0], u).normalize(), p[0].crossVectors(f[0], m), d[0].crossVectors(f[0], p[0])
                        }(), h = 1; h < v; h++) p[h] = p[h - 1].clone(), d[h] = d[h - 1].clone(), m.crossVectors(f[h - 1], f[h]), m.length() > y && (m.normalize(), r = Math.acos(a.Math.clamp(f[h - 1].dot(f[h]), -1, 1)), p[h].applyMatrix4(g.makeRotationAxis(m, r))), d[h].crossVectors(f[h], p[h]);
                    if (i)
                        for (r = Math.acos(a.Math.clamp(p[0].dot(p[v - 1]), -1, 1)), r /= v - 1, f[0].dot(m.crossVectors(p[0], p[v - 1])) > 0 && (r = -r), h = 1; h < v; h++) p[h].applyMatrix4(g.makeRotationAxis(f[h], r * h)), d[h].crossVectors(f[h], p[h])
                }, a.PolyhedronGeometry = function(e, t, i, r) {
                    a.Geometry.call(this), this.className = "PolyhedronGeometry", i = i || 1, r = r || 0;
                    for (var o = this, n = 0, s = e.length; n < s; n++) x(new a.Vector3(e[n][0], e[n][1], e[n][2]));
                    var l = this.vertices,
                        h = [];
                    for (n = 0, s = t.length; n < s; n++) {
                        var c = l[t[n][0]],
                            u = l[t[n][1]],
                            f = l[t[n][2]];
                        h[n] = new a.Face3(c.index, u.index, f.index, [c.clone(), u.clone(), f.clone()])
                    }
                    for (n = 0, s = h.length; n < s; n++) M(h[n], r);
                    for (n = 0, s = this.faceVertexUvs[0].length; n < s; n++) {
                        var p = this.faceVertexUvs[0][n],
                            d = p[0].x,
                            m = p[1].x,
                            g = p[2].x,
                            v = Math.max(d, Math.max(m, g)),
                            y = Math.min(d, Math.min(m, g));
                        v > .9 && y < .1 && (d < .2 && (p[0].x += 1), m < .2 && (p[1].x += 1), g < .2 && (p[2].x += 1))
                    }
                    for (n = 0, s = this.vertices.length; n < s; n++) this.vertices[n].multiplyScalar(i);

                    function x(e) {
                        var t = e.normalize().clone();
                        t.index = o.vertices.push(t) - 1;
                        var i = w(e) / 2 / Math.PI + .5,
                            r = function(e) {
                                return Math.atan2(-e.y, Math.sqrt(e.x * e.x + e.z * e.z))
                            }(e) / Math.PI + .5;
                        return t.uv = new a.Vector2(i, 1 - r), t
                    }

                    function _(e, t, i) {
                        var r = new a.Face3(e.index, t.index, i.index, [e.clone(), t.clone(), i.clone()]);
                        r.centroid.add(e).add(t).add(i).divideScalar(3), o.faces.push(r);
                        var n = w(r.centroid);
                        o.faceVertexUvs[0].push([S(e.uv, e, n), S(t.uv, t, n), S(i.uv, i, n)])
                    }

                    function M(e, t) {
                        for (var i = Math.pow(2, t), r = (Math.pow(4, t), x(o.vertices[e.a])), a = x(o.vertices[e.b]), n = x(o.vertices[e.c]), s = [], l = 0; l <= i; l++) {
                            s[l] = [];
                            for (var h = x(r.clone().lerp(n, l / i)), c = x(a.clone().lerp(n, l / i)), u = i - l, f = 0; f <= u; f++) s[l][f] = 0 == f && l == i ? h : x(h.clone().lerp(c, f / u))
                        }
                        for (l = 0; l < i; l++)
                            for (f = 0; f < 2 * (i - l) - 1; f++) {
                                var p = Math.floor(f / 2);
                                f % 2 == 0 ? _(s[l][p + 1], s[l + 1][p], s[l][p]) : _(s[l][p + 1], s[l + 1][p + 1], s[l + 1][p])
                            }
                    }

                    function w(e) {
                        return Math.atan2(e.z, -e.x)
                    }

                    function S(e, t, i) {
                        return i < 0 && 1 === e.x && (e = new a.Vector2(e.x - 1, e.y)), 0 === t.x && 0 === t.z && (e = new a.Vector2(i / 2 / Math.PI + .5, e.y)), e.clone()
                    }
                    this.mergeVertices(), this.computeCentroids(), this.computeFaceNormals(), this.boundingSphere = new a.Sphere(new a.Vector3, i)
                }, a.PolyhedronGeometry.prototype = Object.create(a.Geometry.prototype), a.IcosahedronGeometry = function(e, t) {
                    this.radius = e, this.detail = t;
                    var i = (1 + Math.sqrt(5)) / 2,
                        r = [
                            [-1, i, 0],
                            [1, i, 0],
                            [-1, -i, 0],
                            [1, -i, 0],
                            [0, -1, i],
                            [0, 1, i],
                            [0, -1, -i],
                            [0, 1, -i],
                            [i, 0, -1],
                            [i, 0, 1],
                            [-i, 0, -1],
                            [-i, 0, 1]
                        ];
                    a.PolyhedronGeometry.call(this, r, [
                        [0, 11, 5],
                        [0, 5, 1],
                        [0, 1, 7],
                        [0, 7, 10],
                        [0, 10, 11],
                        [1, 5, 9],
                        [5, 11, 4],
                        [11, 10, 2],
                        [10, 7, 6],
                        [7, 1, 8],
                        [3, 9, 4],
                        [3, 4, 2],
                        [3, 2, 6],
                        [3, 6, 8],
                        [3, 8, 9],
                        [4, 9, 5],
                        [2, 4, 11],
                        [6, 2, 10],
                        [8, 6, 7],
                        [9, 8, 1]
                    ], e, t), this.className = "IcosahedronGeometry"
                }, a.IcosahedronGeometry.prototype = Object.create(a.Geometry.prototype), a.OctahedronGeometry = function(e, t) {
                    a.PolyhedronGeometry.call(this, [
                        [1, 0, 0],
                        [-1, 0, 0],
                        [0, 1, 0],
                        [0, -1, 0],
                        [0, 0, 1],
                        [0, 0, -1]
                    ], [
                        [0, 2, 4],
                        [0, 4, 3],
                        [0, 3, 5],
                        [0, 5, 2],
                        [1, 2, 5],
                        [1, 5, 3],
                        [1, 3, 4],
                        [1, 4, 2]
                    ], e, t), this.className = "OctahedronGeometry"
                }, a.OctahedronGeometry.prototype = Object.create(a.Geometry.prototype), a.TetrahedronGeometry = function(e, t) {
                    this.className = "TetrahedronGeometry";
                    a.PolyhedronGeometry.call(this, [
                        [1, 1, 1],
                        [-1, -1, 1],
                        [-1, 1, -1],
                        [1, -1, -1]
                    ], [
                        [2, 1, 0],
                        [0, 3, 2],
                        [1, 3, 0],
                        [2, 3, 1]
                    ], e, t)
                }, a.TetrahedronGeometry.prototype = Object.create(a.Geometry.prototype), a.ParametricGeometry = function(e, t, i) {
                    a.Geometry.call(this), this.className = "ParametricGeometry";
                    var r, o, n, s, l, h, c, u, f, p, d, m, g = this.vertices,
                        v = this.faces,
                        y = this.faceVertexUvs[0],
                        x = t + 1;
                    for (r = 0; r <= i; r++)
                        for (s = r / i, o = 0; o <= t; o++) n = e(o / t, s), g.push(n);
                    for (r = 0; r < i; r++)
                        for (o = 0; o < t; o++) l = r * x + o, h = r * x + o + 1, c = (r + 1) * x + o + 1, u = (r + 1) * x + o, f = new a.Vector2(o / t, r / i), p = new a.Vector2((o + 1) / t, r / i), d = new a.Vector2((o + 1) / t, (r + 1) / i), m = new a.Vector2(o / t, (r + 1) / i), v.push(new a.Face3(l, h, u)), y.push([f, p, m]), v.push(new a.Face3(h, c, u)), y.push([p.clone(), d, m.clone()]);
                    this.computeCentroids(), this.computeFaceNormals(), this.computeVertexNormals()
                }, a.ParametricGeometry.prototype = Object.create(a.Geometry.prototype), a.AxisHelper = function(e) {
                    e = e || 1;
                    var t = new a.Geometry;
                    t.vertices.push(new a.Vector3, new a.Vector3(e, 0, 0), new a.Vector3, new a.Vector3(0, e, 0), new a.Vector3, new a.Vector3(0, 0, e)), t.colors.push(new a.Color(16711680), new a.Color(16755200), new a.Color(65280), new a.Color(11206400), new a.Color(255), new a.Color(43775));
                    var i = new a.LineBasicMaterial({
                        vertexColors: a.VertexColors
                    });
                    a.Line.call(this, t, i, a.LinePieces), this.className = "AxisHelper"
                }, a.AxisHelper.prototype = Object.create(a.Line.prototype), a.ArrowHelper = function(e, t, i, r, o, n) {
                    a.Object3D.call(this), this.className = "ArrowHelper", void 0 === r && (r = 16776960), void 0 === i && (i = 1), void 0 === o && (o = .2 * i), void 0 === n && (n = .2 * o), this.position = t;
                    var s = new a.Geometry;
                    s.vertices.push(new a.Vector3(0, 0, 0)), s.vertices.push(new a.Vector3(0, 1, 0)), this.line = new a.Line(s, new a.LineBasicMaterial({
                        color: r
                    })), this.line.matrixAutoUpdate = !1, this.add(this.line);
                    var l = new a.CylinderGeometry(0, .5, 1, 5, 1);
                    l.applyMatrix((new a.Matrix4).makeTranslation(0, -.5, 0)), this.cone = new a.Mesh(l, new a.MeshBasicMaterial({
                        color: r
                    })), this.cone.matrixAutoUpdate = !1, this.add(this.cone), this.setDirection(e), this.setLength(i, o, n)
                }, a.ArrowHelper.prototype = Object.create(a.Object3D.prototype), a.ArrowHelper.prototype.setDirection = function() {
                    var e, t = new a.Vector3;
                    return function(i) {
                        i.y > .99999 ? this.quaternion.set(0, 0, 0, 1) : i.y < -.99999 ? this.quaternion.set(1, 0, 0, 0) : (t.set(i.z, 0, -i.x).normalize(), e = Math.acos(i.y), this.quaternion.setFromAxisAngle(t, e))
                    }
                }(), a.ArrowHelper.prototype.setLength = function(e, t, i) {
                    void 0 === t && (t = .2 * e), void 0 === i && (i = .2 * t), this.line.scale.set(1, e, 1), this.line.updateMatrix(), this.cone.scale.set(i, t, i), this.cone.position.y = e, this.cone.updateMatrix()
                }, a.ArrowHelper.prototype.setColor = function(e) {
                    this.line.material.color.setHex(e), this.cone.material.color.setHex(e)
                }, a.BoxHelper = function(e) {
                    var t = [new a.Vector3(1, 1, 1), new a.Vector3(-1, 1, 1), new a.Vector3(-1, -1, 1), new a.Vector3(1, -1, 1), new a.Vector3(1, 1, -1), new a.Vector3(-1, 1, -1), new a.Vector3(-1, -1, -1), new a.Vector3(1, -1, -1)];
                    this.vertices = t;
                    var i = new a.Geometry;
                    i.vertices.push(t[0], t[1], t[1], t[2], t[2], t[3], t[3], t[0], t[4], t[5], t[5], t[6], t[6], t[7], t[7], t[4], t[0], t[4], t[1], t[5], t[2], t[6], t[3], t[7]), a.Line.call(this, i, new a.LineBasicMaterial({
                        color: 16776960
                    }), a.LinePieces), void 0 !== e && this.update(e)
                }, a.BoxHelper.prototype = Object.create(a.Line.prototype), a.BoxHelper.prototype.update = function(e) {
                    var t = e.geometry;
                    null === t.boundingBox && t.computeBoundingBox();
                    var i = t.boundingBox.min,
                        r = t.boundingBox.max,
                        a = this.vertices;
                    a[0].set(r.x, r.y, r.z), a[1].set(i.x, r.y, r.z), a[2].set(i.x, i.y, r.z), a[3].set(r.x, i.y, r.z), a[4].set(r.x, r.y, i.z), a[5].set(i.x, r.y, i.z), a[6].set(i.x, i.y, i.z), a[7].set(r.x, i.y, i.z), this.geometry.computeBoundingSphere(), this.geometry.verticesNeedUpdate = !0, this.matrixAutoUpdate = !1, this.matrixWorld = e.matrixWorld
                }, a.BoundingBoxHelper = function(e, t) {
                    var i = void 0 !== t ? t : 8947848;
                    this.object = e, this.box = new a.Box3, a.Mesh.call(this, new a.BoxGeometry(1, 1, 1), new a.MeshBasicMaterial({
                        color: i,
                        wireframe: !0
                    }))
                }, a.BoundingBoxHelper.prototype = Object.create(a.Mesh.prototype), a.BoundingBoxHelper.prototype.update = function() {
                    this.box.setFromObject(this.object), this.box.size(this.scale), this.box.center(this.position)
                }, a.CameraHelper = function(e) {
                    var t = new a.Geometry,
                        i = new a.LineBasicMaterial({
                            color: 16777215,
                            vertexColors: a.FaceColors
                        }),
                        r = {},
                        o = 16755200,
                        n = 16711680,
                        s = 43775,
                        l = 3355443;

                    function h(e, t, i) {
                        c(e, i), c(t, i)
                    }

                    function c(e, i) {
                        t.vertices.push(new a.Vector3), t.colors.push(new a.Color(i)), void 0 === r[e] && (r[e] = []), r[e].push(t.vertices.length - 1)
                    }
                    h("n1", "n2", o), h("n2", "n4", o), h("n4", "n3", o), h("n3", "n1", o), h("f1", "f2", o), h("f2", "f4", o), h("f4", "f3", o), h("f3", "f1", o), h("n1", "f1", o), h("n2", "f2", o), h("n3", "f3", o), h("n4", "f4", o), h("p", "n1", n), h("p", "n2", n), h("p", "n3", n), h("p", "n4", n), h("u1", "u2", s), h("u2", "u3", s), h("u3", "u1", s), h("c", "t", 16777215), h("p", "c", l), h("cn1", "cn2", l), h("cn3", "cn4", l), h("cf1", "cf2", l), h("cf3", "cf4", l), a.Line.call(this, t, i, a.LinePieces), this.camera = e, this.matrixWorld = e.matrixWorld, this.matrixAutoUpdate = !1, this.pointMap = r, this.update()
                }, a.CameraHelper.prototype = Object.create(a.Line.prototype), a.CameraHelper.prototype.update = function() {
                    var e = new a.Vector3,
                        t = new a.Camera,
                        i = new a.Projector;
                    return function() {
                        var r = this;

                        function a(a, o, n, s) {
                            e.set(o, n, s), i.unprojectVector(e, t);
                            var l = r.pointMap[a];
                            if (void 0 !== l)
                                for (var h = 0, c = l.length; h < c; h++) r.geometry.vertices[l[h]].copy(e)
                        }
                        t.projectionMatrix.copy(this.camera.projectionMatrix), a("c", 0, 0, -1), a("t", 0, 0, 1), a("n1", -1, -1, -1), a("n2", 1, -1, -1), a("n3", -1, 1, -1), a("n4", 1, 1, -1), a("f1", -1, -1, 1), a("f2", 1, -1, 1), a("f3", -1, 1, 1), a("f4", 1, 1, 1), a("u1", .7, 1.1, -1), a("u2", -.7, 1.1, -1), a("u3", 0, 2, -1), a("cf1", -1, 0, 1), a("cf2", 1, 0, 1), a("cf3", 0, -1, 1), a("cf4", 0, 1, 1), a("cn1", -1, 0, -1), a("cn2", 1, 0, -1), a("cn3", 0, -1, -1), a("cn4", 0, 1, -1), this.geometry.verticesNeedUpdate = !0
                    }
                }(), a.DirectionalLightHelper = function(e, t) {
                    a.Object3D.call(this), this.light = e, this.light.updateMatrixWorld(), this.matrixWorld = e.matrixWorld, this.matrixAutoUpdate = !1, t = t || 1;
                    var i = new a.PlaneGeometry(t, t),
                        r = new a.MeshBasicMaterial({
                            wireframe: !0,
                            fog: !1
                        });
                    r.color.copy(this.light.color).multiplyScalar(this.light.intensity), this.lightPlane = new a.Mesh(i, r), this.add(this.lightPlane), (i = new a.Geometry).vertices.push(new a.Vector3), i.vertices.push(new a.Vector3), (r = new a.LineBasicMaterial({
                        fog: !1
                    })).color.copy(this.light.color).multiplyScalar(this.light.intensity), this.targetLine = new a.Line(i, r), this.add(this.targetLine), this.update()
                }, a.DirectionalLightHelper.prototype = Object.create(a.Object3D.prototype), a.DirectionalLightHelper.prototype.dispose = function() {
                    this.lightPlane.geometry.dispose(), this.lightPlane.material.dispose(), this.targetLine.geometry.dispose(), this.targetLine.material.dispose()
                }, a.DirectionalLightHelper.prototype.update = function() {
                    var e = new a.Vector3,
                        t = new a.Vector3,
                        i = new a.Vector3;
                    return function() {
                        e.setFromMatrixPosition(this.light.matrixWorld), t.setFromMatrixPosition(this.light.target.matrixWorld), i.subVectors(t, e), this.lightPlane.lookAt(i), this.lightPlane.material.color.copy(this.light.color).multiplyScalar(this.light.intensity), this.targetLine.geometry.vertices[1].copy(i), this.targetLine.geometry.verticesNeedUpdate = !0, this.targetLine.material.color.copy(this.lightPlane.material.color)
                    }
                }(), a.EdgesHelper = function(e, t) {
                    var i = void 0 !== t ? t : 16777215,
                        r = [0, 0],
                        o = {},
                        n = function(e, t) {
                            return e - t
                        },
                        s = ["a", "b", "c"],
                        l = new a.BufferGeometry,
                        h = e.geometry.clone();
                    h.mergeVertices(), h.computeFaceNormals();
                    for (var c = h.vertices, u = h.faces, f = 0, p = 0, d = u.length; p < d; p++)
                        for (var m = u[p], g = 0; g < 3; g++) {
                            r[0] = m[s[g]], r[1] = m[s[(g + 1) % 3]], r.sort(n), void 0 === o[x = r.toString()] ? (o[x] = {
                                vert1: r[0],
                                vert2: r[1],
                                face1: p,
                                face2: void 0
                            }, f++) : o[x].face2 = p
                        }
                    l.addAttribute("position", Float32Array, 2 * f, 3);
                    var v = l.attributes.position.array,
                        y = 0;
                    for (var x in o) {
                        var _ = o[x];
                        if (void 0 === _.face2 || u[_.face1].normal.dot(u[_.face2].normal) < .9999) {
                            var M = c[_.vert1];
                            v[y++] = M.x, v[y++] = M.y, v[y++] = M.z, M = c[_.vert2], v[y++] = M.x, v[y++] = M.y, v[y++] = M.z
                        }
                    }
                    a.Line.call(this, l, new a.LineBasicMaterial({
                        color: i
                    }), a.LinePieces), this.matrixAutoUpdate = !1, this.matrixWorld = e.matrixWorld
                }, a.EdgesHelper.prototype = Object.create(a.Line.prototype), a.FaceNormalsHelper = function(e, t, i, r) {
                    this.object = e, this.size = void 0 !== t ? t : 1;
                    for (var o = void 0 !== i ? i : 16776960, n = void 0 !== r ? r : 1, s = new a.Geometry, l = 0, h = this.object.geometry.faces.length; l < h; l++) s.vertices.push(new a.Vector3), s.vertices.push(new a.Vector3);
                    a.Line.call(this, s, new a.LineBasicMaterial({
                        color: o,
                        linewidth: n
                    }), a.LinePieces), this.matrixAutoUpdate = !1, this.normalMatrix = new a.Matrix3, this.update()
                }, a.FaceNormalsHelper.prototype = Object.create(a.Line.prototype), a.FaceNormalsHelper.prototype.update = function(e) {
                    var t = new a.Vector3;
                    return function(e) {
                        this.object.updateMatrixWorld(!0), this.normalMatrix.getNormalMatrix(this.object.matrixWorld);
                        for (var i = this.geometry.vertices, r = this.object.geometry.faces, a = this.object.matrixWorld, o = 0, n = r.length; o < n; o++) {
                            var s = r[o];
                            t.copy(s.normal).applyMatrix3(this.normalMatrix).normalize().multiplyScalar(this.size);
                            var l = 2 * o;
                            i[l].copy(s.centroid).applyMatrix4(a), i[l + 1].addVectors(i[l], t)
                        }
                        return this.geometry.verticesNeedUpdate = !0, this
                    }
                }(), a.GridHelper = function(e, t) {
                    var i = new a.Geometry,
                        r = new a.LineBasicMaterial({
                            vertexColors: a.VertexColors
                        });
                    this.color1 = new a.Color(4473924), this.color2 = new a.Color(8947848);
                    for (var o = -e; o <= e; o += t) {
                        i.vertices.push(new a.Vector3(-e, 0, o), new a.Vector3(e, 0, o), new a.Vector3(o, 0, -e), new a.Vector3(o, 0, e));
                        var n = 0 === o ? this.color1 : this.color2;
                        i.colors.push(n, n, n, n)
                    }
                    a.Line.call(this, i, r, a.LinePieces)
                }, a.GridHelper.prototype = Object.create(a.Line.prototype), a.GridHelper.prototype.setColors = function(e, t) {
                    this.color1.set(e), this.color2.set(t), this.geometry.colorsNeedUpdate = !0
                }, a.HemisphereLightHelper = function(e, t, i, r) {
                    a.Object3D.call(this), this.light = e, this.light.updateMatrixWorld(), this.matrixWorld = e.matrixWorld, this.matrixAutoUpdate = !1, this.colors = [new a.Color, new a.Color];
                    var o = new a.SphereGeometry(t, 4, 2);
                    o.applyMatrix((new a.Matrix4).makeRotationX(-Math.PI / 2));
                    for (var n = 0; n < 8; n++) o.faces[n].color = this.colors[n < 4 ? 0 : 1];
                    var s = new a.MeshBasicMaterial({
                        vertexColors: a.FaceColors,
                        wireframe: !0
                    });
                    this.lightSphere = new a.Mesh(o, s), this.add(this.lightSphere), this.update()
                }, a.HemisphereLightHelper.prototype = Object.create(a.Object3D.prototype), a.HemisphereLightHelper.prototype.dispose = function() {
                    this.lightSphere.geometry.dispose(), this.lightSphere.material.dispose()
                }, a.HemisphereLightHelper.prototype.update = function() {
                    var e = new a.Vector3;
                    return function() {
                        this.colors[0].copy(this.light.color).multiplyScalar(this.light.intensity), this.colors[1].copy(this.light.groundColor).multiplyScalar(this.light.intensity), this.lightSphere.lookAt(e.setFromMatrixPosition(this.light.matrixWorld).negate()), this.lightSphere.geometry.colorsNeedUpdate = !0
                    }
                }(), a.PointLightHelper = function(e, t) {
                    this.light = e, this.light.updateMatrixWorld();
                    var i = new a.SphereGeometry(t, 4, 2),
                        r = new a.MeshBasicMaterial({
                            wireframe: !0,
                            fog: !1
                        });
                    r.color.copy(this.light.color).multiplyScalar(this.light.intensity), a.Mesh.call(this, i, r), this.matrixWorld = this.light.matrixWorld, this.matrixAutoUpdate = !1
                }, a.PointLightHelper.prototype = Object.create(a.Mesh.prototype), a.PointLightHelper.prototype.dispose = function() {
                    this.geometry.dispose(), this.material.dispose()
                }, a.PointLightHelper.prototype.update = function() {
                    this.material.color.copy(this.light.color).multiplyScalar(this.light.intensity)
                }, a.SpotLightHelper = function(e) {
                    a.Object3D.call(this), this.light = e, this.light.updateMatrixWorld(), this.matrixWorld = e.matrixWorld, this.matrixAutoUpdate = !1;
                    var t = new a.CylinderGeometry(0, 1, 1, 8, 1, !0);
                    t.applyMatrix((new a.Matrix4).makeTranslation(0, -.5, 0)), t.applyMatrix((new a.Matrix4).makeRotationX(-Math.PI / 2));
                    var i = new a.MeshBasicMaterial({
                        wireframe: !0,
                        fog: !1
                    });
                    this.cone = new a.Mesh(t, i), this.add(this.cone), this.update()
                }, a.SpotLightHelper.prototype = Object.create(a.Object3D.prototype), a.SpotLightHelper.prototype.dispose = function() {
                    this.cone.geometry.dispose(), this.cone.material.dispose()
                }, a.SpotLightHelper.prototype.update = function() {
                    var e = new a.Vector3,
                        t = new a.Vector3;
                    return function() {
                        var i = this.light.distance ? this.light.distance : 1e4,
                            r = i * Math.tan(this.light.angle);
                        this.cone.scale.set(r, r, i), e.setFromMatrixPosition(this.light.matrixWorld), t.setFromMatrixPosition(this.light.target.matrixWorld), this.cone.lookAt(t.sub(e)), this.cone.material.color.copy(this.light.color).multiplyScalar(this.light.intensity)
                    }
                }(), a.VertexNormalsHelper = function(e, t, i, r) {
                    this.object = e, this.size = void 0 !== t ? t : 1;
                    for (var o = void 0 !== i ? i : 16711680, n = void 0 !== r ? r : 1, s = new a.Geometry, l = (e.geometry.vertices, e.geometry.faces), h = 0, c = l.length; h < c; h++)
                        for (var u = 0, f = l[h].vertexNormals.length; u < f; u++) s.vertices.push(new a.Vector3), s.vertices.push(new a.Vector3);
                    a.Line.call(this, s, new a.LineBasicMaterial({
                        color: o,
                        linewidth: n
                    }), a.LinePieces), this.matrixAutoUpdate = !1, this.normalMatrix = new a.Matrix3, this.update()
                }, a.VertexNormalsHelper.prototype = Object.create(a.Line.prototype), a.VertexNormalsHelper.prototype.update = function(e) {
                    var t = new a.Vector3;
                    return function(e) {
                        var i = ["a", "b", "c", "d"];
                        this.object.updateMatrixWorld(!0), this.normalMatrix.getNormalMatrix(this.object.matrixWorld);
                        for (var r = this.geometry.vertices, a = this.object.geometry.vertices, o = this.object.geometry.faces, n = this.object.matrixWorld, s = 0, l = 0, h = o.length; l < h; l++)
                            for (var c = o[l], u = 0, f = c.vertexNormals.length; u < f; u++) {
                                var p = a[c[i[u]]],
                                    d = c.vertexNormals[u];
                                r[s].copy(p).applyMatrix4(n), t.copy(d).applyMatrix3(this.normalMatrix).normalize().multiplyScalar(this.size), t.add(r[s]), r[s += 1].copy(t), s += 1
                            }
                        return this.geometry.verticesNeedUpdate = !0, this
                    }
                }(), a.VertexTangentsHelper = function(e, t, i, r) {
                    this.object = e, this.size = void 0 !== t ? t : 1;
                    for (var o = void 0 !== i ? i : 255, n = void 0 !== r ? r : 1, s = new a.Geometry, l = (e.geometry.vertices, e.geometry.faces), h = 0, c = l.length; h < c; h++)
                        for (var u = 0, f = l[h].vertexTangents.length; u < f; u++) s.vertices.push(new a.Vector3), s.vertices.push(new a.Vector3);
                    a.Line.call(this, s, new a.LineBasicMaterial({
                        color: o,
                        linewidth: n
                    }), a.LinePieces), this.matrixAutoUpdate = !1, this.update()
                }, a.VertexTangentsHelper.prototype = Object.create(a.Line.prototype), a.VertexTangentsHelper.prototype.update = function(e) {
                    var t = new a.Vector3;
                    return function(e) {
                        var i = ["a", "b", "c", "d"];
                        this.object.updateMatrixWorld(!0);
                        for (var r = this.geometry.vertices, a = this.object.geometry.vertices, o = this.object.geometry.faces, n = this.object.matrixWorld, s = 0, l = 0, h = o.length; l < h; l++)
                            for (var c = o[l], u = 0, f = c.vertexTangents.length; u < f; u++) {
                                var p = a[c[i[u]]],
                                    d = c.vertexTangents[u];
                                r[s].copy(p).applyMatrix4(n), t.copy(d).transformDirection(n).multiplyScalar(this.size), t.add(r[s]), r[s += 1].copy(t), s += 1
                            }
                        return this.geometry.verticesNeedUpdate = !0, this
                    }
                }(), a.WireframeHelper = function(e, t) {
                    var i = void 0 !== t ? t : 16777215,
                        r = [0, 0],
                        o = {},
                        n = function(e, t) {
                            return e - t
                        },
                        s = ["a", "b", "c"],
                        l = new a.BufferGeometry;
                    if (e.geometry instanceof a.Geometry) {
                        for (var h = e.geometry.vertices, c = e.geometry.faces, u = 0, f = new Uint32Array(6 * c.length), p = 0, d = c.length; p < d; p++)
                            for (var m = c[p], g = 0; g < 3; g++) {
                                r[0] = m[s[g]], r[1] = m[s[(g + 1) % 3]], r.sort(n), void 0 === o[C = r.toString()] && (f[2 * u] = r[0], f[2 * u + 1] = r[1], o[C] = !0, u++)
                            }
                        l.addAttribute("position", Float32Array, 2 * u, 3);
                        var v = l.attributes.position.array;
                        for (p = 0, d = u; p < d; p++)
                            for (g = 0; g < 2; g++) {
                                var y = h[f[2 * p + g]];
                                v[(A = 6 * p + 3 * g) + 0] = y.x, v[A + 1] = y.y, v[A + 2] = y.z
                            }
                    } else if (e.geometry instanceof a.BufferGeometry && void 0 !== e.geometry.attributes.index) {
                        h = e.geometry.attributes.position.array;
                        for (var x = e.geometry.attributes.index.array, _ = e.geometry.offsets, M = (u = 0, f = new Uint32Array(2 * x.length), 0), w = _.length; M < w; ++M)
                            for (var S = _[M].start, b = _[M].count, A = _[M].index, T = (p = S, S + b); p < T; p += 3)
                                for (g = 0; g < 3; g++) {
                                    var C;
                                    r[0] = A + x[p + g], r[1] = A + x[p + (g + 1) % 3], r.sort(n), void 0 === o[C = r.toString()] && (f[2 * u] = r[0], f[2 * u + 1] = r[1], o[C] = !0, u++)
                                }
                        l.addAttribute("position", Float32Array, 2 * u, 3);
                        for (v = l.attributes.position.array, p = 0, d = u; p < d; p++)
                            for (g = 0; g < 2; g++) {
                                A = 6 * p + 3 * g;
                                var E = 3 * f[2 * p + g];
                                v[A + 0] = h[E], v[A + 1] = h[E + 1], v[A + 2] = h[E + 2]
                            }
                    } else if (e.geometry instanceof a.BufferGeometry) {
                        var L = (u = (h = e.geometry.attributes.position.array).length / 3) / 3;
                        l.addAttribute("position", Float32Array, 2 * u, 3);
                        for (v = l.attributes.position.array, p = 0, d = L; p < d; p++)
                            for (g = 0; g < 3; g++) {
                                var P = 9 * p + 3 * g;
                                v[(A = 18 * p + 6 * g) + 0] = h[P], v[A + 1] = h[P + 1], v[A + 2] = h[P + 2];
                                E = 9 * p + (g + 1) % 3 * 3;
                                v[A + 3] = h[E], v[A + 4] = h[E + 1], v[A + 5] = h[E + 2]
                            }
                    }
                    a.Line.call(this, l, new a.LineBasicMaterial({
                        color: i
                    }), a.LinePieces), this.matrixAutoUpdate = !1, this.matrixWorld = e.matrixWorld
                }, a.WireframeHelper.prototype = Object.create(a.Line.prototype), a.ImmediateRenderObject = function() {
                    a.Object3D.call(this), this.render = function(e) {}
                }, a.ImmediateRenderObject.prototype = Object.create(a.Object3D.prototype), a.LensFlare = function(e, t, i, r, o) {
                    a.Object3D.call(this), this.lensFlares = [], this.positionScreen = new a.Vector3, this.customUpdateCallback = void 0, void 0 !== e && this.add(e, t, i, r, o)
                }, a.LensFlare.prototype = Object.create(a.Object3D.prototype), a.LensFlare.prototype.add = function(e, t, i, r, o, n) {
                    void 0 === t && (t = -1), void 0 === i && (i = 0), void 0 === n && (n = 1), void 0 === o && (o = new a.Color(16777215)), void 0 === r && (r = a.NormalBlending), i = Math.min(i, Math.max(0, i)), this.lensFlares.push({
                        texture: e,
                        size: t,
                        distance: i,
                        x: 0,
                        y: 0,
                        z: 0,
                        scale: 1,
                        rotation: 1,
                        opacity: n,
                        color: o,
                        blending: r
                    })
                }, a.LensFlare.prototype.updateLensFlares = function() {
                    var e, t, i = this.lensFlares.length,
                        r = 2 * -this.positionScreen.x,
                        a = 2 * -this.positionScreen.y;
                    for (e = 0; e < i; e++)(t = this.lensFlares[e]).x = this.positionScreen.x + r * t.distance, t.y = this.positionScreen.y + a * t.distance, t.wantedRotation = t.x * Math.PI * .25, t.rotation += .25 * (t.wantedRotation - t.rotation)
                }, a.MorphBlendMesh = function(e, t) {
                    a.Mesh.call(this, e, t), this.animationsMap = {}, this.animationsList = [];
                    var i = this.geometry.morphTargets.length,
                        r = "__default",
                        o = i - 1,
                        n = i / 1;
                    this.createAnimation(r, 0, o, n), this.setAnimationWeight(r, 1)
                }, a.MorphBlendMesh.prototype = Object.create(a.Mesh.prototype), a.MorphBlendMesh.prototype.createAnimation = function(e, t, i, r) {
                    var a = {
                        startFrame: t,
                        endFrame: i,
                        length: i - t + 1,
                        fps: r,
                        duration: (i - t) / r,
                        lastFrame: 0,
                        currentFrame: 0,
                        active: !1,
                        time: 0,
                        direction: 1,
                        weight: 1,
                        directionBackwards: !1,
                        mirroredLoop: !1
                    };
                    this.animationsMap[e] = a, this.animationsList.push(a)
                }, a.MorphBlendMesh.prototype.autoCreateAnimations = function(e) {
                    for (var t, i = /([a-z]+)(\d+)/, r = {}, a = this.geometry, o = 0, n = a.morphTargets.length; o < n; o++) {
                        var s = a.morphTargets[o].name.match(i);
                        if (s && s.length > 1) {
                            var l = s[1];
                            s[2];
                            r[l] || (r[l] = {
                                start: 1 / 0,
                                end: -1 / 0
                            }), o < (h = r[l]).start && (h.start = o), o > h.end && (h.end = o), t || (t = l)
                        }
                    }
                    for (var l in r) {
                        var h = r[l];
                        this.createAnimation(l, h.start, h.end, e)
                    }
                    this.firstAnimation = t
                }, a.MorphBlendMesh.prototype.setAnimationDirectionForward = function(e) {
                    var t = this.animationsMap[e];
                    t && (t.direction = 1, t.directionBackwards = !1)
                }, a.MorphBlendMesh.prototype.setAnimationDirectionBackward = function(e) {
                    var t = this.animationsMap[e];
                    t && (t.direction = -1, t.directionBackwards = !0)
                }, a.MorphBlendMesh.prototype.setAnimationFPS = function(e, t) {
                    var i = this.animationsMap[e];
                    i && (i.fps = t, i.duration = (i.end - i.start) / i.fps)
                }, a.MorphBlendMesh.prototype.setAnimationDuration = function(e, t) {
                    var i = this.animationsMap[e];
                    i && (i.duration = t, i.fps = (i.end - i.start) / i.duration)
                }, a.MorphBlendMesh.prototype.setAnimationWeight = function(e, t) {
                    var i = this.animationsMap[e];
                    i && (i.weight = t)
                }, a.MorphBlendMesh.prototype.setAnimationTime = function(e, t) {
                    var i = this.animationsMap[e];
                    i && (i.time = t)
                }, a.MorphBlendMesh.prototype.getAnimationTime = function(e) {
                    var t = 0,
                        i = this.animationsMap[e];
                    return i && (t = i.time), t
                }, a.MorphBlendMesh.prototype.getAnimationDuration = function(e) {
                    var t = -1,
                        i = this.animationsMap[e];
                    return i && (t = i.duration), t
                }, a.MorphBlendMesh.prototype.playAnimation = function(e) {
                    var t = this.animationsMap[e];
                    t ? (t.time = 0, t.active = !0) : a.onwarning("animation[" + e + "] undefined")
                }, a.MorphBlendMesh.prototype.stopAnimation = function(e) {
                    var t = this.animationsMap[e];
                    t && (t.active = !1)
                }, a.MorphBlendMesh.prototype.update = function(e) {
                    for (var t = 0, i = this.animationsList.length; t < i; t++) {
                        var r = this.animationsList[t];
                        if (r.active) {
                            var o = r.duration / r.length;
                            r.time += r.direction * e, r.mirroredLoop ? (r.time > r.duration || r.time < 0) && (r.direction *= -1, r.time > r.duration && (r.time = r.duration, r.directionBackwards = !0), r.time < 0 && (r.time = 0, r.directionBackwards = !1)) : (r.time = r.time % r.duration, r.time < 0 && (r.time += r.duration));
                            var n = r.startFrame + a.Math.clamp(Math.floor(r.time / o), 0, r.length - 1),
                                s = r.weight;
                            n !== r.currentFrame && (this.morphTargetInfluences[r.lastFrame] = 0, this.morphTargetInfluences[r.currentFrame] = 1 * s, this.morphTargetInfluences[n] = 0, r.lastFrame = r.currentFrame, r.currentFrame = n);
                            var l = r.time % o / o;
                            r.directionBackwards && (l = 1 - l), this.morphTargetInfluences[r.currentFrame] = l * s, this.morphTargetInfluences[r.lastFrame] = (1 - l) * s
                        }
                    }
                }, a.LensFlarePlugin = function() {
                    var e, t, i, r = {};

                    function o(t, i) {
                        var r = e.createProgram(),
                            a = e.createShader(e.FRAGMENT_SHADER),
                            o = e.createShader(e.VERTEX_SHADER),
                            n = "precision " + i + " float;\n";
                        return e.shaderSource(a, n + t.fragmentShader), e.shaderSource(o, n + t.vertexShader), e.compileShader(a), e.compileShader(o), e.attachShader(r, a), e.attachShader(r, o), e.linkProgram(r), r
                    }
                    this.init = function(n) {
                        e = n.context, t = n, i = n.getPrecision(), r.vertices = new Float32Array(16), r.faces = new Uint16Array(6);
                        var s = 0;
                        r.vertices[s++] = -1, r.vertices[s++] = -1, r.vertices[s++] = 0, r.vertices[s++] = 0, r.vertices[s++] = 1, r.vertices[s++] = -1, r.vertices[s++] = 1, r.vertices[s++] = 0, r.vertices[s++] = 1, r.vertices[s++] = 1, r.vertices[s++] = 1, r.vertices[s++] = 1, r.vertices[s++] = -1, r.vertices[s++] = 1, r.vertices[s++] = 0, r.vertices[s++] = 1, s = 0, r.faces[s++] = 0, r.faces[s++] = 1, r.faces[s++] = 2, r.faces[s++] = 0, r.faces[s++] = 2, r.faces[s++] = 3, r.vertexBuffer = e.createBuffer(), r.elementBuffer = e.createBuffer(), e.bindBuffer(e.ARRAY_BUFFER, r.vertexBuffer), e.bufferData(e.ARRAY_BUFFER, r.vertices, e.STATIC_DRAW), e.bindBuffer(e.ELEMENT_ARRAY_BUFFER, r.elementBuffer), e.bufferData(e.ELEMENT_ARRAY_BUFFER, r.faces, e.STATIC_DRAW), r.tempTexture = e.createTexture(), r.occlusionTexture = e.createTexture(), e.bindTexture(e.TEXTURE_2D, r.tempTexture), e.texImage2D(e.TEXTURE_2D, 0, e.RGB, 16, 16, 0, e.RGB, e.UNSIGNED_BYTE, null), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_S, e.CLAMP_TO_EDGE), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_T, e.CLAMP_TO_EDGE), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MAG_FILTER, e.NEAREST), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, e.NEAREST), e.bindTexture(e.TEXTURE_2D, r.occlusionTexture), e.texImage2D(e.TEXTURE_2D, 0, e.RGBA, 16, 16, 0, e.RGBA, e.UNSIGNED_BYTE, null), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_S, e.CLAMP_TO_EDGE), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_T, e.CLAMP_TO_EDGE), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MAG_FILTER, e.NEAREST), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, e.NEAREST), e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS) <= 0 ? (r.hasVertexTexture = !1, r.program = o(a.ShaderFlares.lensFlare, i)) : (r.hasVertexTexture = !0, r.program = o(a.ShaderFlares.lensFlareVertexTexture, i)), r.attributes = {}, r.uniforms = {}, r.attributes.vertex = e.getAttribLocation(r.program, "position"), r.attributes.uv = e.getAttribLocation(r.program, "uv"), r.uniforms.renderType = e.getUniformLocation(r.program, "renderType"), r.uniforms.map = e.getUniformLocation(r.program, "map"), r.uniforms.occlusionMap = e.getUniformLocation(r.program, "occlusionMap"), r.uniforms.opacity = e.getUniformLocation(r.program, "opacity"), r.uniforms.color = e.getUniformLocation(r.program, "color"), r.uniforms.scale = e.getUniformLocation(r.program, "scale"), r.uniforms.rotation = e.getUniformLocation(r.program, "rotation"), r.uniforms.screenPosition = e.getUniformLocation(r.program, "screenPosition")
                    }, this.render = function(i, o, n, s) {
                        var l = i.__webglFlares,
                            h = l.length;
                        if (h) {
                            var c, u, f, p, d, m = new a.Vector3,
                                g = s / n,
                                v = .5 * n,
                                y = .5 * s,
                                x = 16 / s,
                                _ = new a.Vector2(x * g, x),
                                M = new a.Vector3(1, 1, 0),
                                w = new a.Vector2(1, 1),
                                S = r.uniforms,
                                b = r.attributes;
                            for (e.useProgram(r.program), e.enableVertexAttribArray(r.attributes.vertex), e.enableVertexAttribArray(r.attributes.uv), e.uniform1i(S.occlusionMap, 0), e.uniform1i(S.map, 1), e.bindBuffer(e.ARRAY_BUFFER, r.vertexBuffer), e.vertexAttribPointer(b.vertex, 2, e.FLOAT, !1, 16, 0), e.vertexAttribPointer(b.uv, 2, e.FLOAT, !1, 16, 8), e.bindBuffer(e.ELEMENT_ARRAY_BUFFER, r.elementBuffer), e.disable(e.CULL_FACE), e.depthMask(!1), c = 0; c < h; c++)
                                if (x = 16 / s, _.set(x * g, x), p = l[c], m.set(p.matrixWorld.elements[12], p.matrixWorld.elements[13], p.matrixWorld.elements[14]), m.applyMatrix4(o.matrixWorldInverse), m.applyProjection(o.projectionMatrix), M.copy(m), w.x = M.x * v + v, w.y = M.y * y + y, r.hasVertexTexture || w.x > 0 && w.x < n && w.y > 0 && w.y < s)
                                    for (e.activeTexture(e.TEXTURE1), e.bindTexture(e.TEXTURE_2D, r.tempTexture), e.copyTexImage2D(e.TEXTURE_2D, 0, e.RGB, w.x - 8, w.y - 8, 16, 16, 0), e.uniform1i(S.renderType, 0), e.uniform2f(S.scale, _.x, _.y), e.uniform3f(S.screenPosition, M.x, M.y, M.z), e.disable(e.BLEND), e.enable(e.DEPTH_TEST), e.drawElements(e.TRIANGLES, 6, e.UNSIGNED_SHORT, 0), e.activeTexture(e.TEXTURE0), e.bindTexture(e.TEXTURE_2D, r.occlusionTexture), e.copyTexImage2D(e.TEXTURE_2D, 0, e.RGBA, w.x - 8, w.y - 8, 16, 16, 0), e.uniform1i(S.renderType, 1), e.disable(e.DEPTH_TEST), e.activeTexture(e.TEXTURE1), e.bindTexture(e.TEXTURE_2D, r.tempTexture), e.drawElements(e.TRIANGLES, 6, e.UNSIGNED_SHORT, 0), p.positionScreen.copy(M), p.customUpdateCallback ? p.customUpdateCallback(p) : p.updateLensFlares(), e.uniform1i(S.renderType, 2), e.enable(e.BLEND), u = 0, f = p.lensFlares.length; u < f; u++)(d = p.lensFlares[u]).opacity > .001 && d.scale > .001 && (M.x = d.x, M.y = d.y, M.z = d.z, x = d.size * d.scale / s, _.x = x * g, _.y = x, e.uniform3f(S.screenPosition, M.x, M.y, M.z), e.uniform2f(S.scale, _.x, _.y), e.uniform1f(S.rotation, d.rotation), e.uniform1f(S.opacity, d.opacity), e.uniform3f(S.color, d.color.r, d.color.g, d.color.b), t.setBlending(d.blending, d.blendEquation, d.blendSrc, d.blendDst), t.setTexture(d.texture, 1), e.drawElements(e.TRIANGLES, 6, e.UNSIGNED_SHORT, 0));
                            e.enable(e.CULL_FACE), e.enable(e.DEPTH_TEST), e.depthMask(!0)
                        }
                    }
                }, a.ShadowMapPlugin = function() {
                    var e, t, i, r, o, n, s = new a.Frustum,
                        l = new a.Matrix4,
                        h = new a.Vector3,
                        c = new a.Vector3,
                        u = new a.Vector3;

                    function f(e, t) {
                        var i = new a.DirectionalLight;
                        i.isVirtual = !0, i.onlyShadow = !0, i.castShadow = !0, i.shadowCameraNear = e.shadowCameraNear, i.shadowCameraFar = e.shadowCameraFar, i.shadowCameraLeft = e.shadowCameraLeft, i.shadowCameraRight = e.shadowCameraRight, i.shadowCameraBottom = e.shadowCameraBottom, i.shadowCameraTop = e.shadowCameraTop, i.shadowCameraVisible = e.shadowCameraVisible, i.shadowDarkness = e.shadowDarkness, i.shadowBias = e.shadowCascadeBias[t], i.shadowMapWidth = e.shadowCascadeWidth[t], i.shadowMapHeight = e.shadowCascadeHeight[t], i.pointsWorld = [], i.pointsFrustum = [];
                        for (var r = i.pointsWorld, o = i.pointsFrustum, n = 0; n < 8; n++) r[n] = new a.Vector3, o[n] = new a.Vector3;
                        var s = e.shadowCascadeNearZ[t],
                            l = e.shadowCascadeFarZ[t];
                        return o[0].set(-1, -1, s), o[1].set(1, -1, s), o[2].set(-1, 1, s), o[3].set(1, 1, s), o[4].set(-1, -1, l), o[5].set(1, -1, l), o[6].set(-1, 1, l), o[7].set(1, 1, l), i
                    }

                    function p(e, t) {
                        var i = e.shadowCascadeArray[t];
                        i.position.copy(e.position), i.target.position.copy(e.target.position), i.lookAt(i.target), i.shadowCameraVisible = e.shadowCameraVisible, i.shadowDarkness = e.shadowDarkness, i.shadowBias = e.shadowCascadeBias[t];
                        var r = e.shadowCascadeNearZ[t],
                            a = e.shadowCascadeFarZ[t],
                            o = i.pointsFrustum;
                        o[0].z = r, o[1].z = r, o[2].z = r, o[3].z = r, o[4].z = a, o[5].z = a, o[6].z = a, o[7].z = a
                    }

                    function d(e, t) {
                        var i = t.shadowCamera,
                            r = t.pointsFrustum,
                            o = t.pointsWorld;
                        h.set(1 / 0, 1 / 0, 1 / 0), c.set(-1 / 0, -1 / 0, -1 / 0);
                        for (var n = 0; n < 8; n++) {
                            var s = o[n];
                            s.copy(r[n]), a.ShadowMapPlugin.__projector.unprojectVector(s, e), s.applyMatrix4(i.matrixWorldInverse), s.x < h.x && (h.x = s.x), s.x > c.x && (c.x = s.x), s.y < h.y && (h.y = s.y), s.y > c.y && (c.y = s.y), s.z < h.z && (h.z = s.z), s.z > c.z && (c.z = s.z)
                        }
                        i.left = h.x, i.right = c.x, i.top = c.y, i.bottom = h.y, i.updateProjectionMatrix()
                    }

                    function m(e) {
                        return e.material instanceof a.MeshFaceMaterial ? e.material.materials[0] : e.material
                    }
                    this.init = function(s) {
                        e = s.context, t = s;
                        var l = a.ShaderLib.depthRGBA,
                            h = a.UniformsUtils.clone(l.uniforms);
                        i = new a.ShaderMaterial({
                            fragmentShader: l.fragmentShader,
                            vertexShader: l.vertexShader,
                            uniforms: h
                        }), r = new a.ShaderMaterial({
                            fragmentShader: l.fragmentShader,
                            vertexShader: l.vertexShader,
                            uniforms: h,
                            morphTargets: !0
                        }), o = new a.ShaderMaterial({
                            fragmentShader: l.fragmentShader,
                            vertexShader: l.vertexShader,
                            uniforms: h,
                            skinning: !0
                        }), n = new a.ShaderMaterial({
                            fragmentShader: l.fragmentShader,
                            vertexShader: l.vertexShader,
                            uniforms: h,
                            morphTargets: !0,
                            skinning: !0
                        }), i._shadowPass = !0, r._shadowPass = !0, o._shadowPass = !0, n._shadowPass = !0
                    }, this.render = function(e, i) {
                        t.shadowMapEnabled && t.shadowMapAutoUpdate && this.update(e, i)
                    }, this.update = function(h, c) {
                        var g, v, y, x, _, M, w, S, b, A, T, C, E, L, P = [],
                            R = 0,
                            D = null;
                        for (e.clearColor(1, 1, 1, 1), e.disable(e.BLEND), e.enable(e.CULL_FACE), e.frontFace(e.CCW), t.shadowMapCullFace === a.CullFaceFront ? e.cullFace(e.FRONT) : e.cullFace(e.BACK), t.setDepthTest(!0), g = 0, v = h.__lights.length; g < v; g++)
                            if ((E = h.__lights[g]).castShadow)
                                if (E instanceof a.DirectionalLight && E.shadowCascade)
                                    for (_ = 0; _ < E.shadowCascadeCount; _++) {
                                        var V;
                                        if (E.shadowCascadeArray[_]) V = E.shadowCascadeArray[_];
                                        else {
                                            (V = f(E, _)).originalCamera = c;
                                            var U = new a.Gyroscope;
                                            U.position = E.shadowCascadeOffset, U.add(V), U.add(V.target), c.add(U), E.shadowCascadeArray[_] = V
                                        }
                                        p(E, _), P[R] = V, R++
                                    } else P[R] = E, R++;
                        for (g = 0, v = P.length; g < v; g++) {
                            if (!(E = P[g]).shadowMap) {
                                var F = a.NearestFilter;
                                t.shadowMapType === a.PCFSoftShadowMap && (F = a.NearestFilter);
                                var N = {
                                    minFilter: F,
                                    magFilter: F,
                                    format: a.RGBAFormat
                                };
                                E.shadowMap = new a.WebGLRenderTarget(E.shadowMapWidth, E.shadowMapHeight, N), E.shadowMapSize = new a.Vector2(E.shadowMapWidth, E.shadowMapHeight), E.shadowMatrix = new a.Matrix4
                            }
                            if (!E.shadowCamera) {
                                if (E instanceof a.SpotLight) E.shadowCamera = new a.PerspectiveCamera(E.shadowCameraFov, E.shadowMapWidth / E.shadowMapHeight, E.shadowCameraNear, E.shadowCameraFar);
                                else {
                                    if (!(E instanceof a.DirectionalLight)) {
                                        a.onerror("Unsupported light type for shadow");
                                        continue
                                    }
                                    E.shadowCamera = new a.OrthographicCamera(E.shadowCameraLeft, E.shadowCameraRight, E.shadowCameraTop, E.shadowCameraBottom, E.shadowCameraNear, E.shadowCameraFar)
                                }
                                h.add(E.shadowCamera), !0 === h.autoUpdate && h.updateMatrixWorld()
                            }
                            for (E.shadowCameraVisible && !E.cameraHelper && (E.cameraHelper = new a.CameraHelper(E.shadowCamera), E.shadowCamera.add(E.cameraHelper)), E.isVirtual && V.originalCamera == c && d(c, E), M = E.shadowMap, w = E.shadowMatrix, (S = E.shadowCamera).position.setFromMatrixPosition(E.matrixWorld), u.setFromMatrixPosition(E.target.matrixWorld), S.lookAt(u), S.updateMatrixWorld(), S.matrixWorldInverse.getInverse(S.matrixWorld), E.cameraHelper && (E.cameraHelper.visible = E.shadowCameraVisible), E.shadowCameraVisible && E.cameraHelper.update(), w.set(.5, 0, 0, .5, 0, .5, 0, .5, 0, 0, .5, .5, 0, 0, 0, 1), w.multiply(S.projectionMatrix), w.multiply(S.matrixWorldInverse), l.multiplyMatrices(S.projectionMatrix, S.matrixWorldInverse), s.setFromMatrix(l), t.setRenderTarget(M), t.clear(), y = 0, x = (L = h.__webglObjects).length; y < x; y++) C = (T = L[y]).object, T.render = !1, C.visible && C.castShadow && ((C instanceof a.Mesh || C instanceof a.ParticleSystem) && C.frustumCulled && !s.intersectsObject(C) || (C._modelViewMatrix.multiplyMatrices(S.matrixWorldInverse, C.matrixWorld), T.render = !0));
                            var O, z, I;
                            for (y = 0, x = L.length; y < x; y++)(T = L[y]).render && (C = T.object, b = T.buffer, O = m(C), z = void 0 !== C.geometry.morphTargets && C.geometry.morphTargets.length > 0 && O.morphTargets, I = C instanceof a.SkinnedMesh && O.skinning, A = C.customDepthMaterial ? C.customDepthMaterial : I ? z ? n : o : z ? r : i, b instanceof a.BufferGeometry ? t.renderBufferDirect(S, h.__lights, D, A, b, C) : t.renderBuffer(S, h.__lights, D, A, b, C));
                            for (y = 0, x = (L = h.__webglObjectsImmediate).length; y < x; y++)(C = (T = L[y]).object).visible && C.castShadow && (C._modelViewMatrix.multiplyMatrices(S.matrixWorldInverse, C.matrixWorld), t.renderImmediateObject(S, h.__lights, D, i, C))
                        }
                        var B = t.getClearColor(),
                            k = t.getClearAlpha();
                        e.clearColor(B.r, B.g, B.b, k), e.enable(e.BLEND), t.shadowMapCullFace === a.CullFaceFront && e.cullFace(e.BACK)
                    }
                }, a.ShadowMapPlugin.__projector = new a.Projector, a.SpritePlugin = function() {
                    var e, t, i, r, o, n, s, l, h, c;

                    function u(e, t) {
                        return e.z !== t.z ? t.z - e.z : t.id - e.id
                    }
                    this.init = function(u) {
                        e = u.context, t = u, r = new Float32Array([-.5, -.5, 0, 0, .5, -.5, 1, 0, .5, .5, 1, 1, -.5, .5, 0, 1]), o = new Uint16Array([0, 1, 2, 0, 2, 3]), n = e.createBuffer(), s = e.createBuffer(), e.bindBuffer(e.ARRAY_BUFFER, n), e.bufferData(e.ARRAY_BUFFER, r, e.STATIC_DRAW), e.bindBuffer(e.ELEMENT_ARRAY_BUFFER, s), e.bufferData(e.ELEMENT_ARRAY_BUFFER, o, e.STATIC_DRAW), l = function() {
                            var i = e.createProgram(),
                                r = e.createShader(e.VERTEX_SHADER),
                                a = e.createShader(e.FRAGMENT_SHADER);
                            return e.shaderSource(r, ["precision " + t.getPrecision() + " float;", "uniform mat4 modelViewMatrix;", "uniform mat4 projectionMatrix;", "uniform float rotation;", "uniform vec2 scale;", "uniform vec2 uvOffset;", "uniform vec2 uvScale;", "attribute vec2 position;", "attribute vec2 uv;", "varying vec2 vUV;", "void main() {", "vUV = uvOffset + uv * uvScale;", "vec2 alignedPosition = position * scale;", "vec2 rotatedPosition;", "rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;", "rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;", "vec4 finalPosition;", "finalPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );", "finalPosition.xy += rotatedPosition;", "finalPosition = projectionMatrix * finalPosition;", "gl_Position = finalPosition;", "}"].join("\n")), e.shaderSource(a, ["precision " + t.getPrecision() + " float;", "uniform vec3 color;", "uniform sampler2D map;", "uniform float opacity;", "uniform int fogType;", "uniform vec3 fogColor;", "uniform float fogDensity;", "uniform float fogNear;", "uniform float fogFar;", "uniform float alphaTest;", "varying vec2 vUV;", "void main() {", "vec4 texture = texture2D( map, vUV );", "if ( texture.a < alphaTest ) discard;", "gl_FragColor = vec4( color * texture.xyz, texture.a * opacity );", "if ( fogType > 0 ) {", "float depth = gl_FragCoord.z / gl_FragCoord.w;", "float fogFactor = 0.0;", "if ( fogType == 1 ) {", "fogFactor = smoothstep( fogNear, fogFar, depth );", "} else {", "const float LOG2 = 1.442695;", "float fogFactor = exp2( - fogDensity * fogDensity * depth * depth * LOG2 );", "fogFactor = 1.0 - clamp( fogFactor, 0.0, 1.0 );", "}", "gl_FragColor = mix( gl_FragColor, vec4( fogColor, gl_FragColor.w ), fogFactor );", "}", "}"].join("\n")), e.compileShader(r), e.compileShader(a), e.attachShader(i, r), e.attachShader(i, a), e.linkProgram(i), i
                        }(), h = {
                            position: e.getAttribLocation(l, "position"),
                            uv: e.getAttribLocation(l, "uv")
                        }, c = {
                            uvOffset: e.getUniformLocation(l, "uvOffset"),
                            uvScale: e.getUniformLocation(l, "uvScale"),
                            rotation: e.getUniformLocation(l, "rotation"),
                            scale: e.getUniformLocation(l, "scale"),
                            color: e.getUniformLocation(l, "color"),
                            map: e.getUniformLocation(l, "map"),
                            opacity: e.getUniformLocation(l, "opacity"),
                            modelViewMatrix: e.getUniformLocation(l, "modelViewMatrix"),
                            projectionMatrix: e.getUniformLocation(l, "projectionMatrix"),
                            fogType: e.getUniformLocation(l, "fogType"),
                            fogDensity: e.getUniformLocation(l, "fogDensity"),
                            fogNear: e.getUniformLocation(l, "fogNear"),
                            fogFar: e.getUniformLocation(l, "fogFar"),
                            fogColor: e.getUniformLocation(l, "fogColor"),
                            alphaTest: e.getUniformLocation(l, "alphaTest")
                        };
                        var f = document.createElement("canvas");
                        f.width = 8, f.height = 8;
                        var p = f.getContext("2d");
                        p.fillStyle = "#ffffff", p.fillRect(0, 0, f.width, f.height), (i = new a.Texture(f)).needsUpdate = !0
                    }, this.render = function(r, o, f, p) {
                        var d = r.__webglSprites,
                            m = d.length;
                        if (m) {
                            e.useProgram(l), e.enableVertexAttribArray(h.position), e.enableVertexAttribArray(h.uv), e.disable(e.CULL_FACE), e.enable(e.BLEND), e.bindBuffer(e.ARRAY_BUFFER, n), e.vertexAttribPointer(h.position, 2, e.FLOAT, !1, 16, 0), e.vertexAttribPointer(h.uv, 2, e.FLOAT, !1, 16, 8), e.bindBuffer(e.ELEMENT_ARRAY_BUFFER, s), e.uniformMatrix4fv(c.projectionMatrix, !1, o.projectionMatrix.elements), e.activeTexture(e.TEXTURE0), e.uniform1i(c.map, 0);
                            var g = 0,
                                v = 0,
                                y = r.fog;
                            y ? (e.uniform3f(c.fogColor, y.color.r, y.color.g, y.color.b), y instanceof a.Fog ? (e.uniform1f(c.fogNear, y.near), e.uniform1f(c.fogFar, y.far), e.uniform1i(c.fogType, 1), g = 1, v = 1) : y instanceof a.FogExp2 && (e.uniform1f(c.fogDensity, y.density), e.uniform1i(c.fogType, 2), g = 2, v = 2)) : (e.uniform1i(c.fogType, 0), g = 0, v = 0);
                            var x, _, M, w, S = [];
                            for (x = 0; x < m; x++) M = (_ = d[x]).material, !1 !== _.visible && (_._modelViewMatrix.multiplyMatrices(o.matrixWorldInverse, _.matrixWorld), _.z = -_._modelViewMatrix.elements[14]);
                            for (d.sort(u), x = 0; x < m; x++) !1 !== (_ = d[x]).visible && (M = _.material, e.uniform1f(c.alphaTest, M.alphaTest), e.uniformMatrix4fv(c.modelViewMatrix, !1, _._modelViewMatrix.elements), S[0] = _.scale.x, S[1] = _.scale.y, g !== (w = r.fog && M.fog ? v : 0) && (e.uniform1i(c.fogType, w), g = w), null !== M.map ? (e.uniform2f(c.uvOffset, M.map.offset.x, M.map.offset.y), e.uniform2f(c.uvScale, M.map.repeat.x, M.map.repeat.y)) : (e.uniform2f(c.uvOffset, 0, 0), e.uniform2f(c.uvScale, 1, 1)), e.uniform1f(c.opacity, M.opacity), e.uniform3f(c.color, M.color.r, M.color.g, M.color.b), e.uniform1f(c.rotation, M.rotation), e.uniform2fv(c.scale, S), t.setBlending(M.blending, M.blendEquation, M.blendSrc, M.blendDst), t.setDepthTest(M.depthTest), t.setDepthWrite(M.depthWrite), M.map && M.map.image && M.map.image.width ? t.setTexture(M.map, 0) : t.setTexture(i, 0), e.drawElements(e.TRIANGLES, 6, e.UNSIGNED_SHORT, 0));
                            e.enable(e.CULL_FACE)
                        }
                    }
                }, a.DepthPassPlugin = function() {
                    this.enabled = !1, this.renderTarget = null;
                    var e, t, i, r, o, n, s = new a.Frustum,
                        l = new a.Matrix4;

                    function h(e) {
                        return e.material instanceof a.MeshFaceMaterial ? e.material.materials[0] : e.material
                    }
                    this.init = function(s) {
                        e = s.context, t = s;
                        var l = a.ShaderLib.depthRGBA,
                            h = a.UniformsUtils.clone(l.uniforms);
                        i = new a.ShaderMaterial({
                            fragmentShader: l.fragmentShader,
                            vertexShader: l.vertexShader,
                            uniforms: h
                        }), r = new a.ShaderMaterial({
                            fragmentShader: l.fragmentShader,
                            vertexShader: l.vertexShader,
                            uniforms: h,
                            morphTargets: !0
                        }), o = new a.ShaderMaterial({
                            fragmentShader: l.fragmentShader,
                            vertexShader: l.vertexShader,
                            uniforms: h,
                            skinning: !0
                        }), n = new a.ShaderMaterial({
                            fragmentShader: l.fragmentShader,
                            vertexShader: l.vertexShader,
                            uniforms: h,
                            morphTargets: !0,
                            skinning: !0
                        }), i._shadowPass = !0, r._shadowPass = !0, o._shadowPass = !0, n._shadowPass = !0
                    }, this.render = function(e, t) {
                        this.enabled && this.update(e, t)
                    }, this.update = function(c, u) {
                        var f, p, d, m, g, v, y, x, _, M, w = null;
                        for (e.clearColor(1, 1, 1, 1), e.disable(e.BLEND), t.setDepthTest(!0), !0 === c.autoUpdate && c.updateMatrixWorld(), u.matrixWorldInverse.getInverse(u.matrixWorld), l.multiplyMatrices(u.projectionMatrix, u.matrixWorldInverse), s.setFromMatrix(l), t.setRenderTarget(this.renderTarget), t.clear(), f = 0, p = (y = c.__webglObjects).length; f < p; f++) v = (g = y[f]).object, g.render = !1, v.visible && ((v instanceof a.Mesh || v instanceof a.ParticleSystem) && v.frustumCulled && !s.intersectsObject(v) || (v._modelViewMatrix.multiplyMatrices(u.matrixWorldInverse, v.matrixWorld), g.render = !0));
                        for (f = 0, p = y.length; f < p; f++)
                            if ((g = y[f]).render) {
                                if (v = g.object, d = g.buffer, v instanceof a.ParticleSystem && !v.customDepthMaterial) continue;
                                (x = h(v)) && t.setMaterialFaces(v.material), _ = v.geometry.morphTargets.length > 0 && x.morphTargets, M = v instanceof a.SkinnedMesh && x.skinning, m = v.customDepthMaterial ? v.customDepthMaterial : M ? _ ? n : o : _ ? r : i, d instanceof a.BufferGeometry ? t.renderBufferDirect(u, c.__lights, w, m, d, v) : t.renderBuffer(u, c.__lights, w, m, d, v)
                            }
                        for (f = 0, p = (y = c.__webglObjectsImmediate).length; f < p; f++)(v = (g = y[f]).object).visible && (v._modelViewMatrix.multiplyMatrices(u.matrixWorldInverse, v.matrixWorld), t.renderImmediateObject(u, c.__lights, w, i, v));
                        var S = t.getClearColor(),
                            b = t.getClearAlpha();
                        e.clearColor(S.r, S.g, S.b, b), e.enable(e.BLEND)
                    }
                }, a.ShaderFlares = {
                    lensFlareVertexTexture: {
                        vertexShader: ["uniform lowp int renderType;", "uniform vec3 screenPosition;", "uniform vec2 scale;", "uniform float rotation;", "uniform sampler2D occlusionMap;", "attribute vec2 position;", "attribute vec2 uv;", "varying vec2 vUV;", "varying float vVisibility;", "void main() {", "vUV = uv;", "vec2 pos = position;", "if( renderType == 2 ) {", "vec4 visibility = texture2D( occlusionMap, vec2( 0.1, 0.1 ) );", "visibility += texture2D( occlusionMap, vec2( 0.5, 0.1 ) );", "visibility += texture2D( occlusionMap, vec2( 0.9, 0.1 ) );", "visibility += texture2D( occlusionMap, vec2( 0.9, 0.5 ) );", "visibility += texture2D( occlusionMap, vec2( 0.9, 0.9 ) );", "visibility += texture2D( occlusionMap, vec2( 0.5, 0.9 ) );", "visibility += texture2D( occlusionMap, vec2( 0.1, 0.9 ) );", "visibility += texture2D( occlusionMap, vec2( 0.1, 0.5 ) );", "visibility += texture2D( occlusionMap, vec2( 0.5, 0.5 ) );", "vVisibility =        visibility.r / 9.0;", "vVisibility *= 1.0 - visibility.g / 9.0;", "vVisibility *=       visibility.b / 9.0;", "vVisibility *= 1.0 - visibility.a / 9.0;", "pos.x = cos( rotation ) * position.x - sin( rotation ) * position.y;", "pos.y = sin( rotation ) * position.x + cos( rotation ) * position.y;", "}", "gl_Position = vec4( ( pos * scale + screenPosition.xy ).xy, screenPosition.z, 1.0 );", "}"].join("\n"),
                        fragmentShader: ["uniform lowp int renderType;", "uniform sampler2D map;", "uniform float opacity;", "uniform vec3 color;", "varying vec2 vUV;", "varying float vVisibility;", "void main() {", "if( renderType == 0 ) {", "gl_FragColor = vec4( 1.0, 0.0, 1.0, 0.0 );", "} else if( renderType == 1 ) {", "gl_FragColor = texture2D( map, vUV );", "} else {", "vec4 texture = texture2D( map, vUV );", "texture.a *= opacity * vVisibility;", "gl_FragColor = texture;", "gl_FragColor.rgb *= color;", "}", "}"].join("\n")
                    },
                    lensFlare: {
                        vertexShader: ["uniform lowp int renderType;", "uniform vec3 screenPosition;", "uniform vec2 scale;", "uniform float rotation;", "attribute vec2 position;", "attribute vec2 uv;", "varying vec2 vUV;", "void main() {", "vUV = uv;", "vec2 pos = position;", "if( renderType == 2 ) {", "pos.x = cos( rotation ) * position.x - sin( rotation ) * position.y;", "pos.y = sin( rotation ) * position.x + cos( rotation ) * position.y;", "}", "gl_Position = vec4( ( pos * scale + screenPosition.xy ).xy, screenPosition.z, 1.0 );", "}"].join("\n"),
                        fragmentShader: ["precision mediump float;", "uniform lowp int renderType;", "uniform sampler2D map;", "uniform sampler2D occlusionMap;", "uniform float opacity;", "uniform vec3 color;", "varying vec2 vUV;", "void main() {", "if( renderType == 0 ) {", "gl_FragColor = vec4( texture2D( map, vUV ).rgb, 0.0 );", "} else if( renderType == 1 ) {", "gl_FragColor = texture2D( map, vUV );", "} else {", "float visibility = texture2D( occlusionMap, vec2( 0.5, 0.1 ) ).a;", "visibility += texture2D( occlusionMap, vec2( 0.9, 0.5 ) ).a;", "visibility += texture2D( occlusionMap, vec2( 0.5, 0.9 ) ).a;", "visibility += texture2D( occlusionMap, vec2( 0.1, 0.5 ) ).a;", "visibility = ( 1.0 - visibility / 4.0 );", "vec4 texture = texture2D( map, vUV );", "texture.a *= opacity * visibility;", "gl_FragColor = texture;", "gl_FragColor.rgb *= color;", "}", "}"].join("\n")
                    }
                }, e.exports && (t = e.exports = a), t.THREE = a
        }
    }
]);