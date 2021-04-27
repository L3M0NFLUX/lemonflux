(window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
    [3], {
        "/0+H": function(t, e, n) {
            "use strict";
            e.__esModule = !0, e.isInAmpMode = s, e.useAmp = function() {
                return s(i.default.useContext(o.AmpStateContext))
            };
            var r, i = (r = n("q1tI")) && r.__esModule ? r : {
                    default: r
                },
                o = n("lwAK");

            function s() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    e = t.ampFirst,
                    n = void 0 !== e && e,
                    r = t.hybrid,
                    i = void 0 !== r && r,
                    o = t.hasQuery,
                    s = void 0 !== o && o;
                return n || i && s
            }
        },
        "/j52": function(t, e, n) {
            ! function() {
                function e(t) {
                    return (t %= 360) < 0 ? 360 + t : t
                }

                function n(t) {
                    return t >>> 0
                }

                function r(t) {
                    return t.replace(/^\s+/, "").replace(/\s+$/, "").toLowerCase()
                }

                function i(t, e) {
                    return Array.prototype.slice.call(t, e)
                }

                function o(t, e, n) {
                    return t > e ? t < n ? t : n : e
                }

                function s(t, e, n) {
                    return (1 - n) * t + n * e
                }

                function a(t) {
                    return (t = Math.round(255 * t)) > 0 ? t < 255 ? 255 & t : 255 : 0
                }

                function u(t) {
                    return t / 255
                }

                function h(t, e, n) {
                    var r, i, o;
                    if (0 == e) r = i = o = n;
                    else {
                        function s(t, e, n) {
                            return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? t + 6 * (e - t) * n : n < .5 ? e : n < 2 / 3 ? t + (e - t) * (2 / 3 - n) * 6 : t
                        }
                        var a = n < .5 ? n * (1 + e) : n + e - n * e,
                            u = 2 * n - a;
                        r = s(u, a, t + 1 / 3), i = s(u, a, t), o = s(u, a, t - 1 / 3)
                    }
                    return [r, i, o]
                }

                function l(t) {
                    for (var e = [parseInt(t.substr(1, 1), 16), parseInt(t.substr(2, 1), 16), parseInt(t.substr(3, 1), 16), 1], n = 0; n < 3; ++n) e[n] = (16 * e[n] + e[n]) / 255;
                    return e
                }

                function f(t) {
                    return [parseInt(t.substr(1, 2), 16) / 255, parseInt(t.substr(3, 2), 16) / 255, parseInt(t.substr(5, 2), 16) / 255, 1]
                }
                var d = {
                    aliceblue: [240, 248, 255],
                    antiquewhite: [250, 235, 215],
                    aqua: [0, 255, 255],
                    aquamarine: [127, 255, 212],
                    azure: [240, 255, 255],
                    beige: [245, 245, 220],
                    bisque: [255, 228, 196],
                    black: [0, 0, 0],
                    blanchedalmond: [255, 235, 205],
                    blue: [0, 0, 255],
                    blueviolet: [138, 43, 226],
                    brown: [165, 42, 42],
                    burlywood: [222, 184, 135],
                    cadetblue: [95, 158, 160],
                    chartreuse: [127, 255, 0],
                    chocolate: [210, 105, 30],
                    coral: [255, 127, 80],
                    cornflowerblue: [100, 149, 237],
                    cornsilk: [255, 248, 220],
                    crimson: [220, 20, 60],
                    cyan: [0, 255, 255],
                    darkblue: [0, 0, 139],
                    darkcyan: [0, 139, 139],
                    darkgoldenrod: [184, 134, 11],
                    darkgray: [169, 169, 169],
                    darkgreen: [0, 100, 0],
                    darkgrey: [169, 169, 169],
                    darkkhaki: [189, 183, 107],
                    darkmagenta: [139, 0, 139],
                    darkolivegreen: [85, 107, 47],
                    darkorange: [255, 140, 0],
                    darkorchid: [153, 50, 204],
                    darkred: [139, 0, 0],
                    darksalmon: [233, 150, 122],
                    darkseagreen: [143, 188, 143],
                    darkslateblue: [72, 61, 139],
                    darkslategray: [47, 79, 79],
                    darkslategrey: [47, 79, 79],
                    darkturquoise: [0, 206, 209],
                    darkviolet: [148, 0, 211],
                    deeppink: [255, 20, 147],
                    deepskyblue: [0, 191, 255],
                    dimgray: [105, 105, 105],
                    dimgrey: [105, 105, 105],
                    dodgerblue: [30, 144, 255],
                    firebrick: [178, 34, 34],
                    floralwhite: [255, 250, 240],
                    forestgreen: [34, 139, 34],
                    fuchsia: [255, 0, 255],
                    gainsboro: [220, 220, 220],
                    ghostwhite: [248, 248, 255],
                    gold: [255, 215, 0],
                    goldenrod: [218, 165, 32],
                    gray: [128, 128, 128],
                    green: [0, 128, 0],
                    greenyellow: [173, 255, 47],
                    grey: [128, 128, 128],
                    honeydew: [240, 255, 240],
                    hotpink: [255, 105, 180],
                    indianred: [205, 92, 92],
                    indigo: [75, 0, 130],
                    ivory: [255, 255, 240],
                    khaki: [240, 230, 140],
                    lavender: [230, 230, 250],
                    lavenderblush: [255, 240, 245],
                    lawngreen: [124, 252, 0],
                    lemonchiffon: [255, 250, 205],
                    lightblue: [173, 216, 230],
                    lightcoral: [240, 128, 128],
                    lightcyan: [224, 255, 255],
                    lightgoldenrodyellow: [250, 250, 210],
                    lightgray: [211, 211, 211],
                    lightgreen: [144, 238, 144],
                    lightgrey: [211, 211, 211],
                    lightpink: [255, 182, 193],
                    lightsalmon: [255, 160, 122],
                    lightseagreen: [32, 178, 170],
                    lightskyblue: [135, 206, 250],
                    lightslategray: [119, 136, 153],
                    lightslategrey: [119, 136, 153],
                    lightsteelblue: [176, 196, 222],
                    lightyellow: [255, 255, 224],
                    lime: [0, 255, 0],
                    limegreen: [50, 205, 50],
                    linen: [250, 240, 230],
                    magenta: [255, 0, 255],
                    maroon: [128, 0, 0],
                    mediumaquamarine: [102, 205, 170],
                    mediumblue: [0, 0, 205],
                    mediumorchid: [186, 85, 211],
                    mediumpurple: [147, 112, 216],
                    mediumseagreen: [60, 179, 113],
                    mediumslateblue: [123, 104, 238],
                    mediumspringgreen: [0, 250, 154],
                    mediumturquoise: [72, 209, 204],
                    mediumvioletred: [199, 21, 133],
                    midnightblue: [25, 25, 112],
                    mintcream: [245, 255, 250],
                    mistyrose: [255, 228, 225],
                    moccasin: [255, 228, 181],
                    navajowhite: [255, 222, 173],
                    navy: [0, 0, 128],
                    oldlace: [253, 245, 230],
                    olive: [128, 128, 0],
                    olivedrab: [107, 142, 35],
                    orange: [255, 165, 0],
                    orangered: [255, 69, 0],
                    orchid: [218, 112, 214],
                    palegoldenrod: [238, 232, 170],
                    palegreen: [152, 251, 152],
                    paleturquoise: [175, 238, 238],
                    palevioletred: [216, 112, 147],
                    papayawhip: [255, 239, 213],
                    peachpuff: [255, 218, 185],
                    peru: [205, 133, 63],
                    pink: [255, 192, 203],
                    plum: [221, 160, 221],
                    powderblue: [176, 224, 230],
                    purple: [128, 0, 128],
                    red: [255, 0, 0],
                    rosybrown: [188, 143, 143],
                    royalblue: [65, 105, 225],
                    saddlebrown: [139, 69, 19],
                    salmon: [250, 128, 114],
                    sandybrown: [244, 164, 96],
                    seagreen: [46, 139, 87],
                    seashell: [255, 245, 238],
                    sienna: [160, 82, 45],
                    silver: [192, 192, 192],
                    skyblue: [135, 206, 235],
                    slateblue: [106, 90, 205],
                    slategray: [112, 128, 144],
                    slategrey: [112, 128, 144],
                    snow: [255, 250, 250],
                    springgreen: [0, 255, 127],
                    steelblue: [70, 130, 180],
                    tan: [210, 180, 140],
                    teal: [0, 128, 128],
                    thistle: [216, 191, 216],
                    tomato: [255, 99, 71],
                    turquoise: [64, 224, 208],
                    violet: [238, 130, 238],
                    wheat: [245, 222, 179],
                    white: [255, 255, 255],
                    whitesmoke: [245, 245, 245],
                    yellow: [255, 255, 0],
                    yellowgreen: [154, 205, 50]
                };

                function p(t) {
                    var e, n, r = t[0],
                        i = t[1],
                        o = t[2],
                        s = Math.min(Math.min(r, i), o),
                        a = Math.max(Math.max(r, i), o),
                        u = a;
                    return a == s ? n = 0 : a == r ? n = (i - o) / (a - s) * 60 % 360 : a == i ? n = (o - r) / (a - s) * 60 + 120 : a == o && (n = (r - i) / (a - s) * 60 + 240), n < 0 && (n += 360), e = 0 == a ? 0 : 1 - s / a, [Math.round(n), Math.round(100 * e), Math.round(100 * u), t[3]]
                }

                function m(t) {
                    var n = e(t[0]),
                        r = (r = t[1]) / 100,
                        i = (i = t[2]) / 100,
                        o = Math.floor(n / 60 % 6),
                        s = n / 60 - o,
                        a = i * (1 - r),
                        u = i * (1 - s * r),
                        h = i * (1 - (1 - s) * r),
                        c = [];
                    switch (o) {
                        case 0:
                            c = [i, h, a];
                            break;
                        case 1:
                            c = [u, i, a];
                            break;
                        case 2:
                            c = [a, i, h];
                            break;
                        case 3:
                            c = [a, u, i];
                            break;
                        case 4:
                            c = [h, a, i];
                            break;
                        case 5:
                            c = [i, a, u]
                    }
                    return [c[0], c[1], c[2], t[3]]
                }

                function v(t) {
                    var n = function(t, e, n) {
                        var r, i, o = Math.max(t, e, n),
                            s = Math.min(t, e, n),
                            a = (o + s) / 2;
                        if (o == s) r = i = 0;
                        else {
                            var u = o - s;
                            switch (i = a > .5 ? u / (2 - o - s) : u / (o + s), o) {
                                case t:
                                    r = (e - n) / u + (e < n ? 6 : 0);
                                    break;
                                case e:
                                    r = (n - t) / u + 2;
                                    break;
                                case n:
                                    r = (t - e) / u + 4
                            }
                            r /= 6
                        }
                        return [r, i, a]
                    }(t[0], t[1], t[2]);
                    return n[0] = e(Math.floor(360 * n[0])), n[1] = Math.floor(100 * n[1]), n[2] = Math.floor(100 * n[2]), n
                }

                function y(t) {
                    var e = v(t);
                    return e.push(t[3]), e
                }
                var g = {
                        byteOrPercent: function(t) {
                            var e;
                            return "string" == typeof t && (e = t.match(/^([0-9]+)%$/)) ? Math.floor(255 * parseFloat(e[1]) / 100) : parseFloat(t)
                        },
                        floatOrPercent: function(t) {
                            var e;
                            return "string" == typeof t && (e = t.match(/^([0-9]+)%$/)) ? parseFloat(e[1]) / 100 : parseFloat(t)
                        },
                        numberOrPercent: function(t, e) {
                            var n;
                            return "string" == typeof t && (n = t.match(/^([0-9]+)%$/)) ? parseFloat(n[1]) / 100 * e : parseFloat(t)
                        },
                        rgba: function(t) {
                            for (var e = 0; e < 3; ++e) t[e] = u(g.byteOrPercent(t[e]));
                            return t[3] = g.floatOrPercent(t[e]), new w(t)
                        },
                        rgba8: function(t) {
                            return new w([u(g.byteOrPercent(t[0])), u(g.byteOrPercent(t[1])), u(g.byteOrPercent(t[2])), u(g.byteOrPercent(t[3]))])
                        },
                        float3: function(t) {
                            for (var e = 0; e < 3; ++e) t[e] = g.floatOrPercent(t[e]);
                            return t[3] = 1, new w(t)
                        },
                        float4: function(t) {
                            for (var e = 0; e < 3; ++e) t[e] = g.floatOrPercent(t[e]);
                            return t[3] = g.floatOrPercent(t[e]), new w(t)
                        },
                        hsla: function(t) {
                            return t[0] = g.numberOrPercent(t[0], 360), t[1] = g.numberOrPercent(t[1], 100), t[2] = g.numberOrPercent(t[2], 100), t[3] = g.numberOrPercent(t[3], 1), new w(function(t) {
                                var e = h(parseFloat(t[0]) / 360, parseFloat(t[1]) / 100, parseFloat(t[2]) / 100);
                                return [e[0], e[1], e[2], parseFloat(t[3])]
                            }(t))
                        },
                        hsva: function(t) {
                            return t[0] = e(parseFloat(t[0])), t[1] = Math.max(0, Math.min(100, parseFloat(t[1]))), t[2] = Math.max(0, Math.min(100, parseFloat(t[2]))), t[3] = g.floatOrPercent(t[3]), new w(m(t))
                        }
                    },
                    b = {
                        keyword: {},
                        hex3: {},
                        hex7: {},
                        rgb: {
                            parse: function(t) {
                                return (t = t.slice(0)).push(1), g.rgba(t)
                            }
                        },
                        rgba: {
                            parse: g.rgba
                        },
                        hsl: {
                            parse: function(t) {
                                return (t = t.slice(0)).push(1), g.hsla(t)
                            }
                        },
                        hsla: {
                            parse: g.hsla
                        },
                        hsv: {
                            parse: function(t) {
                                return (t = t.slice(0)).push(1), g.hsva(t)
                            }
                        },
                        hsva: {
                            parse: g.hsva
                        },
                        rgb8: {
                            parse: function(t) {
                                return (t = t.slice(0)).push(1), g.rgba(t)
                            }
                        },
                        rgba8: {
                            parse: function(t) {
                                return g.rgba8(t)
                            }
                        },
                        packed_rgba: {
                            parse: function(t) {
                                return t = [t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (255 & t) / 255], g.rgba(t)
                            },
                            output: function(t) {
                                return n(a(t[0]) << 24 | a(t[1]) << 16 | a(t[2]) << 8 | a(t[3]))
                            }
                        },
                        packed_argb: {
                            parse: function(t) {
                                return t = [t >> 16 & 255, t >> 8 & 255, t >> 0 & 255, (t >> 24 & 255) / 255], g.rgba(t)
                            },
                            output: function(t) {
                                return n(a(t[3]) << 24 | a(t[0]) << 16 | a(t[1]) << 8 | a(t[2]))
                            }
                        },
                        float3: {
                            parse: g.float3
                        },
                        float4: {
                            parse: g.float4
                        }
                    };

                function w(t) {
                    this._value = t
                }
                var x = function() {
                        var t = null;
                        if (arguments[0] instanceof w) return new w(arguments[0]._value);
                        if ("string" == typeof arguments[0]) {
                            var e = arguments[0][0];
                            if ("#" == e) {
                                if (t = arguments[0].match(/^#([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])$/i)) return new w(l(t[0]));
                                if (t = arguments[0].match(/^#([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])$/i)) return new w(f(t[0]))
                            } else {
                                if (t = b[arguments[0].toLowerCase()]) return 2 == arguments.length ? t.parse(arguments[1]) : t.parse(i(arguments, 1));
                                if (t = arguments[0].match(/^\s*([A-Z][A-Z0-9_]+)\s*\(\s*([\-0-9A-FX]+)\s*\)\s*$/i)) return (n = b[t[1].toLowerCase()]).parse(t[2]);
                                if (t = arguments[0].match(/^\s*([A-Z][A-Z0-9]+)\s*\(\s*([0-9\.]+%?)\s*,\s*([0-9\.]+%?)\s*,\s*([0-9\.]+%?)\s*(,\s*([0-9\.]+%?)\s*)?\)\s*$/i)) {
                                    var n = b[t[1].toLowerCase()];
                                    if (void 0 === t[5]) {
                                        var o = [t[2], t[3], t[4]];
                                        return n.parse(o)
                                    }
                                    var o = [t[2], t[3], t[4], t[6]];
                                    return n.parse(o)
                                }
                                if (1 == arguments.length && (t = d[r(arguments[0])])) return new w([u((o = t)[0]), u(o[1]), u(o[2]), 1])
                            }
                        }
                        throw "Could not parse color '" + arguments[0] + "'"
                    },
                    _ = {
                        white: x("white"),
                        black: x("black"),
                        gray: x("gray")
                    };

                function M(t, e) {
                    if (void 0 == e) return a(this._value[t]);
                    var n, r = i(this._value, 0);
                    if ("string" != typeof e) {
                        var o = this.clone();
                        return o._value[t] = e, o
                    }
                    if (n = e.match(/^([+\-\\*]=?)([0-9.]+)/)) {
                        var s = n[1],
                            u = parseFloat(n[2]);
                        switch (s[0]) {
                            case "+":
                                r[t] += u / 255;
                                break;
                            case "-":
                                r[t] -= u / 255;
                                break;
                            case "*":
                                r[t] *= u
                        }
                        return "=" == s[1] ? (this._value = r, this) : new w(r)
                    }
                }

                function S(t) {
                    return function() {
                        function n(n, r, i) {
                            i = parseFloat(i);
                            var o = p(n._value),
                                s = 0;
                            switch (r) {
                                case "=":
                                    o[t] = i, s = 1;
                                    break;
                                case "+":
                                    o[t] += i, s = 1;
                                    break;
                                case "+=":
                                    o[t] += i;
                                    break;
                                case "-":
                                    o[t] -= i, s = 1;
                                    break;
                                case "-=":
                                    o[t] -= i;
                                    break;
                                case "*":
                                    o[t] *= i, s = 1;
                                    break;
                                case "*=":
                                    o[t] *= i;
                                    break;
                                default:
                                    throw "Bad op " + r
                            }
                            return 0 == t ? o[t] = e(o[t]) : 1 != t && 2 != t || (o[t] < 0 ? o[t] = 0 : o[t] > 99 && (o[t] = 99)), s && (n = n.clone()), n._value = m(o), n
                        }
                        return 0 == arguments.length ? p(this._value)[t] : 1 == arguments.length ? "string" == typeof arguments[0] && (r = arguments[0].match(/^([\+\-\*]=?)([0-9.]+)/)) ? n(this, r[1], r[2]) : n(this, "=", arguments[0]) : 2 == arguments.length ? n(this, arguments[0], arguments[1]) : void 0;
                        var r
                    }
                }
                var j = {
                    clone: function() {
                        return new w(this._value.slice(0))
                    },
                    html: function() {
                        var t = this,
                            e = this._value,
                            n = {
                                hex3: function() {
                                    return t.hex3()
                                },
                                hex6: function() {
                                    return t.hex6()
                                },
                                rgb: function() {
                                    return "rgb(" + t.rgb().join(",") + ")"
                                },
                                rgba: function() {
                                    return "rgba(" + t.rgba().join(",") + ")"
                                },
                                hsl: function() {
                                    return "hsl(" + v(e).join(",") + ")"
                                },
                                hsla: function() {
                                    return "hsla(" + y(e).join(",") + ")"
                                },
                                keyword: function() {
                                    var t, n = 195076;
                                    for (O in d) {
                                        for (var r = d[O], i = 0, o = 0; o < 3; ++o) {
                                            var s = e[o] - u(r[o]);
                                            i += s * s
                                        }
                                        i < n && (t = O, n = i)
                                    }
                                    return t
                                }
                            },
                            r = arguments[0] || "rgba";
                        return n[r]()
                    },
                    red: function() {
                        return M.call(this, 0, arguments[0])
                    },
                    green: function() {
                        return M.call(this, 1, arguments[0])
                    },
                    blue: function() {
                        return M.call(this, 2, arguments[0])
                    },
                    alpha: function() {
                        return 1 == arguments.length ? (c = this.clone(), c._value[3] = g.floatOrPercent(arguments[0]), c) : this._value[3]
                    },
                    alpha8: function() {
                        return 1 == arguments.length ? (c = this.clone(), c._value[3] = g.byteOrPercent(arguments[0]) / 255, c) : Math.floor(255 * this._value[3])
                    },
                    grayvalue: function() {
                        var t = this._value;
                        return (t[0] + t[1] + t[2]) / 3
                    },
                    grayvalue8: function() {
                        return a(this.grayvalue())
                    },
                    luminance: function() {
                        var t = this._value;
                        return .2126 * t[0] + .7152 * t[1] + .0722 * t[2]
                    },
                    luminance8: function() {
                        return a(this.luminance())
                    },
                    hsv: function() {
                        return p(this._value).slice(0, 3)
                    },
                    hsva: function() {
                        return p(this._value)
                    },
                    packed_rgba: function() {
                        return b.packed_rgba.output(this._value)
                    },
                    packed_argb: function() {
                        return b.packed_argb.output(this._value)
                    },
                    hue: S(0),
                    saturation: S(1),
                    value: S(2),
                    clamp: function() {
                        var t = this._value;
                        return new w([o(t[0], 0, 1), o(t[1], 0, 1), o(t[2], 0, 1), o(t[3], 0, 1)])
                    },
                    blend: function(t, e) {
                        "number" !== typeof e && (e = g.floatOrPercent(e));
                        var n = this,
                            r = x(t);
                        return new w([s(n._value[0], r._value[0], e), s(n._value[1], r._value[1], e), s(n._value[2], r._value[2], e), s(n._value[3], r._value[3], e)])
                    },
                    add: function(t) {
                        var e = this._value,
                            n = x(t)._value;
                        return new w([e[0] + n[0] * n[3], e[1] + n[1] * n[3], e[2] + n[2] * n[3], e[3]])
                    },
                    inc: function(t) {
                        var e = this._value,
                            n = x(t)._value;
                        return e[0] += n[0] * n[3], e[1] += n[1] * n[3], e[2] += n[2] * n[3], this
                    },
                    dec: function(t) {
                        var e = this._value,
                            n = x(t)._value;
                        return e[0] -= n[0] * n[3], e[1] -= n[1] * n[3], e[2] -= n[2] * n[3], this
                    },
                    subtract: function(t) {
                        var e = this._value,
                            n = x(t)._value;
                        return new w([e[0] - n[0] * n[3], e[1] - n[1] * n[3], e[2] - n[2] * n[3], e[3]])
                    },
                    multiply: function(t) {
                        var e = this._value,
                            n = x(t)._value;
                        return new w([e[0] * n[0], e[1] * n[1], e[2] * n[2], e[3] * n[3]])
                    },
                    scale: function(t) {
                        var e = this._value;
                        return new w([e[0] * t, e[1] * t, e[2] * t, e[3]])
                    },
                    xor: function(t) {
                        var e = this.rgba8(),
                            n = x(t).rgba8();
                        return x("rgba8", e[0] ^ n[0], e[1] ^ n[1], e[2] ^ n[2], e[3])
                    },
                    tint: function(t) {
                        return this.blend(_.white, t)
                    },
                    shade: function(t) {
                        return this.blend(_.black, t)
                    },
                    tone: function(t) {
                        return this.blend(_.gray, t)
                    },
                    complement: function() {
                        var t = this.hsva();
                        return t[0] = e(t[0] + 180), new w(m(t))
                    },
                    triad: function() {
                        return [new w(this._value), this.hue("+120"), this.hue("+240")]
                    },
                    hueSet: function() {
                        for (var t = [], e = 100; e >= 30; e -= 35)
                            for (var n = 100; n >= 30; n -= 35) t.push(this.hue("+", 0).saturation(e).value(n));
                        return t
                    },
                    hueRange: function(t, e) {
                        for (var n = this.hue(), r = [], i = 0; i < e; ++i) {
                            var o = n + 2 * (i / (e - 1) - .5) * t;
                            r.push(this.hue("=", o))
                        }
                        return r
                    },
                    contrastWhiteBlack: function() {
                        return this.value() < 50 ? x("white") : x("black")
                    },
                    contrastGray: function() {
                        var t = this.hsva(),
                            e = t[2] < 30 ? t[2] + 20 : t[2] - 20;
                        return new w(m([t[0], 0, e, t[3]]))
                    },
                    hex3: function() {
                        function t(t, e) {
                            return Math.min(Math.round(a(t) / 16), 15).toString(16)
                        }
                        return "#" + t(this._value[0]) + t(this._value[1]) + t(this._value[2])
                    },
                    hex6: function() {
                        function t(t, e) {
                            var n = a(t).toString(16);
                            return n.length < 2 ? "0" + n : n
                        }
                        return "#" + t(this._value[0]) + t(this._value[1]) + t(this._value[2])
                    },
                    rgb: function() {
                        var t = this._value;
                        return [a(t[0]), a(t[1]), a(t[2])]
                    },
                    rgba: function() {
                        var t = this._value;
                        return [a(t[0]), a(t[1]), a(t[2]), t[3]]
                    },
                    rgb8: function() {
                        var t = this._value;
                        return [a(t[0]), a(t[1]), a(t[2])]
                    },
                    rgba8: function() {
                        var t = this._value;
                        return [a(t[0]), a(t[1]), a(t[2]), this.alpha8()]
                    },
                    float3: function() {
                        return [this._value[0], this._value[1], this._value[2]]
                    },
                    float4: function() {
                        return [this._value[0], this._value[1], this._value[2], this._value[3]]
                    }
                };
                for (var O in j.sub = j.subtract, j.mul = j.multiply, j) w.prototype[O] = j[O];
                x.float3 = function(t, e, n) {
                    return new w([t, e, n, 1])
                }, x.float4 = function(t, e, n, r) {
                    return new w([t, e, n, r])
                }, x.version = "0.2.4", x.Color = w, t.exports ? t.exports = x : "undefined" !== typeof window && (window.pusher = window.pusher || {}, window.pusher.color = x)
            }()
        },
        "1dP/": function(t, e, n) {
            ! function e(n, r, i) {
                var o = function(t) {
                    return "[object Array]" === Object.prototype.toString.call(t)
                };

                function s(t, e) {
                    if (!(this instanceof s)) return new s(t, e);
                    o(t) ? (e = t[1], t = t[0]) : "object" === typeof t && t && (e = t.y, t = t.x), this.x = s.clean(t || 0), this.y = s.clean(e || 0)
                }
                s.prototype = {
                    change: function(t) {
                        if ("function" === typeof t) this.observers ? this.observers.push(t) : this.observers = [t];
                        else if (this.observers && this.observers.length)
                            for (var e = this.observers.length - 1; e >= 0; e--) this.observers[e](this, t);
                        return this
                    },
                    ignore: function(t) {
                        if (this.observers)
                            if (t)
                                for (var e = this.observers, n = e.length; n--;) e[n] === t && e.splice(n, 1);
                            else this.observers = [];
                        return this
                    },
                    set: function(t, e, n) {
                        if ("number" != typeof t && (n = e, e = t.y, t = t.x), this.x === t && this.y === e) return this;
                        var r = null;
                        return !1 !== n && this.observers && this.observers.length && (r = this.clone()), this.x = s.clean(t), this.y = s.clean(e), !1 !== n ? this.change(r) : void 0
                    },
                    zero: function() {
                        return this.set(0, 0)
                    },
                    clone: function() {
                        return new this.constructor(this.x, this.y)
                    },
                    negate: function(t) {
                        return t ? new this.constructor(-this.x, -this.y) : this.set(-this.x, -this.y)
                    },
                    add: function(t, e, n) {
                        return "number" != typeof t && (n = e, o(t) ? (e = t[1], t = t[0]) : (e = t.y, t = t.x)), t += this.x, e += this.y, n ? new this.constructor(t, e) : this.set(t, e)
                    },
                    subtract: function(t, e, n) {
                        return "number" != typeof t && (n = e, o(t) ? (e = t[1], t = t[0]) : (e = t.y, t = t.x)), t = this.x - t, e = this.y - e, n ? new this.constructor(t, e) : this.set(t, e)
                    },
                    multiply: function(t, e, n) {
                        return "number" != typeof t ? (n = e, o(t) ? (e = t[1], t = t[0]) : (e = t.y, t = t.x)) : "number" != typeof e && (n = e, e = t), t *= this.x, e *= this.y, n ? new this.constructor(t, e) : this.set(t, e)
                    },
                    rotate: function(t, e, n) {
                        var r, i, o = this.x,
                            s = this.y,
                            a = Math.cos(t),
                            u = Math.sin(t);
                        return r = a * o - (e = e ? -1 : 1) * u * s, i = e * u * o + a * s, n ? new this.constructor(r, i) : this.set(r, i)
                    },
                    length: function() {
                        var t = this.x,
                            e = this.y;
                        return Math.sqrt(t * t + e * e)
                    },
                    lengthSquared: function() {
                        var t = this.x,
                            e = this.y;
                        return t * t + e * e
                    },
                    distance: function(t) {
                        var e = this.x - t.x,
                            n = this.y - t.y;
                        return Math.sqrt(e * e + n * n)
                    },
                    normalize: function(t) {
                        var e = this.length(),
                            n = e < Number.MIN_VALUE ? 0 : 1 / e;
                        return t ? new this.constructor(this.x * n, this.y * n) : this.set(this.x * n, this.y * n)
                    },
                    equal: function(t, e) {
                        return "number" != typeof t && (o(t) ? (e = t[1], t = t[0]) : (e = t.y, t = t.x)), s.clean(t) === this.x && s.clean(e) === this.y
                    },
                    abs: function(t) {
                        var e = Math.abs(this.x),
                            n = Math.abs(this.y);
                        return t ? new this.constructor(e, n) : this.set(e, n)
                    },
                    min: function(t, e) {
                        var n = this.x,
                            r = this.y,
                            i = t.x,
                            o = t.y,
                            s = n < i ? n : i,
                            a = r < o ? r : o;
                        return e ? new this.constructor(s, a) : this.set(s, a)
                    },
                    max: function(t, e) {
                        var n = this.x,
                            r = this.y,
                            i = t.x,
                            o = t.y,
                            s = n > i ? n : i,
                            a = r > o ? r : o;
                        return e ? new this.constructor(s, a) : this.set(s, a)
                    },
                    clamp: function(t, e, n) {
                        var r = this.min(e, !0).max(t);
                        return n ? r : this.set(r.x, r.y)
                    },
                    lerp: function(t, e, n) {
                        return this.add(t.subtract(this, !0).multiply(e), n)
                    },
                    skew: function(t) {
                        return t ? new this.constructor(-this.y, this.x) : this.set(-this.y, this.x)
                    },
                    dot: function(t) {
                        return s.clean(this.x * t.x + t.y * this.y)
                    },
                    perpDot: function(t) {
                        return s.clean(this.x * t.y - this.y * t.x)
                    },
                    angleTo: function(t) {
                        return Math.atan2(this.perpDot(t), this.dot(t))
                    },
                    divide: function(t, e, n) {
                        if ("number" != typeof t ? (n = e, o(t) ? (e = t[1], t = t[0]) : (e = t.y, t = t.x)) : "number" != typeof e && (n = e, e = t), 0 === t || 0 === e) throw new Error("division by zero");
                        if (isNaN(t) || isNaN(e)) throw new Error("NaN detected");
                        return n ? new this.constructor(this.x / t, this.y / e) : this.set(this.x / t, this.y / e)
                    },
                    isPointOnLine: function(t, e) {
                        return (t.y - this.y) * (t.x - e.x) === (t.y - e.y) * (t.x - this.x)
                    },
                    toArray: function() {
                        return [this.x, this.y]
                    },
                    fromArray: function(t) {
                        return this.set(t[0], t[1])
                    },
                    toJSON: function() {
                        return {
                            x: this.x,
                            y: this.y
                        }
                    },
                    toString: function() {
                        return "(" + this.x + ", " + this.y + ")"
                    },
                    constructor: s
                }, s.fromArray = function(t, e) {
                    return new(e || s)(t[0], t[1])
                }, s.precision = r || 8;
                var a = Math.pow(10, s.precision);
                return s.clean = n || function(t) {
                    if (isNaN(t)) throw new Error("NaN detected");
                    if (!isFinite(t)) throw new Error("Infinity detected");
                    return Math.round(t) === t ? t : Math.round(t * a) / a
                }, s.inject = e, n || (s.fast = e((function(t) {
                    return t
                })), "object" == typeof t.exports ? t.exports = s : window.Vec2 = window.Vec2 || s), s
            }()
        },
        "2SVd": function(t, e, n) {
            "use strict";
            t.exports = function(t) {
                return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(t)
            }
        },
        "5Lr+": function(t, e, n) {
            ! function e(n, r, i) {
                function o(t, e) {
                    if (!(this instanceof o)) return new o(t, e);
                    var n;
                    n = t, "[object Array]" === Object.prototype.toString.call(n) ? (e = t[1], t = t[0]) : "object" === typeof t && t && (e = t.y, t = t.x), this.x = o.clean(t || 0), this.y = o.clean(e || 0)
                }
                o.prototype = {
                    change: function(t) {
                        if (t) this.observers ? this.observers.push(t) : this.observers = [t];
                        else if (this.observers)
                            for (var e = this.observers.length - 1; e >= 0; e--) this.observers[e](this);
                        return this
                    },
                    ignore: function(t) {
                        if (this.observers)
                            for (var e = this.observers, n = e.length; n--;) e[n] === t && e.splice(n, 1);
                        return this
                    },
                    set: function(t, e, n) {
                        return "number" != typeof t && (n = e, e = t.y, t = t.x), this.x === t && this.y === e ? this : (this.x = o.clean(t), this.y = o.clean(e), !1 !== n ? this.change() : void 0)
                    },
                    zero: function() {
                        return this.set(0, 0)
                    },
                    clone: function() {
                        return new this.constructor(this.x, this.y)
                    },
                    negate: function(t) {
                        return t ? new this.constructor(-this.x, -this.y) : this.set(-this.x, -this.y)
                    },
                    add: function(t, e) {
                        return e ? new this.constructor(this.x + t.x, this.y + t.y) : (this.x += t.x, this.y += t.y, this.change())
                    },
                    subtract: function(t, e) {
                        return e ? new this.constructor(this.x - t.x, this.y - t.y) : (this.x -= t.x, this.y -= t.y, this.change())
                    },
                    multiply: function(t, e) {
                        var n, r;
                        return "number" !== typeof t ? (n = t.x, r = t.y) : n = r = t, e ? new this.constructor(this.x * n, this.y * r) : this.set(this.x * n, this.y * r)
                    },
                    rotate: function(t, e, n) {
                        var r, i, o = this.x,
                            s = this.y,
                            a = Math.cos(t),
                            u = Math.sin(t);
                        return r = a * o - (e = e ? -1 : 1) * u * s, i = e * u * o + a * s, n ? new this.constructor(r, i) : this.set(r, i)
                    },
                    length: function() {
                        var t = this.x,
                            e = this.y;
                        return Math.sqrt(t * t + e * e)
                    },
                    lengthSquared: function() {
                        var t = this.x,
                            e = this.y;
                        return t * t + e * e
                    },
                    distance: function(t) {
                        var e = this.x - t.x,
                            n = this.y - t.y;
                        return Math.sqrt(e * e + n * n)
                    },
                    normalize: function(t) {
                        var e = this.length(),
                            n = e < Number.MIN_VALUE ? 0 : 1 / e;
                        return t ? new this.constructor(this.x * n, this.y * n) : this.set(this.x * n, this.y * n)
                    },
                    equal: function(t, e) {
                        return e === i && (e = t.y, t = t.x), o.clean(t) === this.x && o.clean(e) === this.y
                    },
                    abs: function(t) {
                        var e = Math.abs(this.x),
                            n = Math.abs(this.y);
                        return t ? new this.constructor(e, n) : this.set(e, n)
                    },
                    min: function(t, e) {
                        var n = this.x,
                            r = this.y,
                            i = t.x,
                            o = t.y,
                            s = n < i ? n : i,
                            a = r < o ? r : o;
                        return e ? new this.constructor(s, a) : this.set(s, a)
                    },
                    max: function(t, e) {
                        var n = this.x,
                            r = this.y,
                            i = t.x,
                            o = t.y,
                            s = n > i ? n : i,
                            a = r > o ? r : o;
                        return e ? new this.constructor(s, a) : this.set(s, a)
                    },
                    clamp: function(t, e, n) {
                        var r = this.min(e, !0).max(t);
                        return n ? r : this.set(r.x, r.y)
                    },
                    lerp: function(t, e) {
                        return this.add(t.subtract(this, !0).multiply(e), !0)
                    },
                    skew: function() {
                        return new this.constructor(-this.y, this.x)
                    },
                    dot: function(t) {
                        return o.clean(this.x * t.x + t.y * this.y)
                    },
                    perpDot: function(t) {
                        return o.clean(this.x * t.y - this.y * t.x)
                    },
                    angleTo: function(t) {
                        return Math.atan2(this.perpDot(t), this.dot(t))
                    },
                    divide: function(t, e) {
                        var n, r;
                        if ("number" !== typeof t ? (n = t.x, r = t.y) : n = r = t, 0 === n || 0 === r) throw new Error("division by zero");
                        if (isNaN(n) || isNaN(r)) throw new Error("NaN detected");
                        return e ? new this.constructor(this.x / n, this.y / r) : this.set(this.x / n, this.y / r)
                    },
                    isPointOnLine: function(t, e) {
                        return (t.y - this.y) * (t.x - e.x) === (t.y - e.y) * (t.x - this.x)
                    },
                    toArray: function() {
                        return [this.x, this.y]
                    },
                    fromArray: function(t) {
                        return this.set(t[0], t[1])
                    },
                    toJSON: function() {
                        return {
                            x: this.x,
                            y: this.y
                        }
                    },
                    toString: function() {
                        return "(" + this.x + ", " + this.y + ")"
                    },
                    constructor: o
                }, o.fromArray = function(t, e) {
                    return new(e || o)(t[0], t[1])
                }, o.precision = r || 8;
                var s = Math.pow(10, o.precision);
                return o.clean = n || function(t) {
                    if (isNaN(t)) throw new Error("NaN detected");
                    if (!isFinite(t)) throw new Error("Infinity detected");
                    return Math.round(t) === t ? t : Math.round(t * s) / s
                }, o.inject = e, n || (o.fast = e((function(t) {
                    return t
                })), "object" == typeof t.exports ? t.exports = o : window.Vec2 = window.Vec2 || o), o
            }()
        },
        "5oMp": function(t, e, n) {
            "use strict";
            t.exports = function(t, e) {
                return e ? t.replace(/\/+$/, "") + "/" + e.replace(/^\/+/, "") : t
            }
        },
        "865C": function(t, e, n) {
            var r = n("Y5Gq"),
                i = n("f+2g"),
                o = (n("uN/N"), n("BKOI")),
                s = n("1dP/"),
                a = n("g0yK"),
                u = n("A926"),
                h = n("SLfz"),
                c = n("M+4H"),
                l = n("/j52"),
                f = n("AaLD"),
                d = function() {
                    if (0 != this.data.length) {
                        for (; this.data.length > 0 && this.firstRunTime + (next = this.data.pop()).when < Date.now();) this.addPin(next.lat, next.lng, next.label);
                        this.firstRunTime + next.when >= Date.now() && this.data.push(next)
                    }
                },
                p = function() {
                    this.hexGrid && this.scene.remove(this.hexGrid);
                    var t = ["#define PI 3.141592653589793238462643", "#define DISTANCE 500.0", "#define INTRODURATION " + (parseFloat(this.introLinesDuration) + 1e-5), "#define INTROALTITUDE " + (parseFloat(this.introLinesAltitude) + 1e-5), "attribute float lng;", "uniform float currentTime;", "varying vec4 vColor;", "", "void main()", "{", "   vec3 newPos = position;", "   float opacityVal = 0.0;", "   float introStart = INTRODURATION * ((180.0 + lng)/360.0);", "   if(currentTime > introStart){", "      opacityVal = 1.0;", "   }", "   if(currentTime > introStart && currentTime < introStart + INTRODURATION / 8.0){", "      newPos = position * INTROALTITUDE;", "      opacityVal = .3;", "   }", "   if(currentTime > introStart + INTRODURATION / 8.0 && currentTime < introStart + INTRODURATION / 8.0 + 200.0){", "      newPos = position * (1.0 + ((INTROALTITUDE-1.0) * (1.0-(currentTime - introStart-(INTRODURATION/8.0))/200.0)));", "   }", "   vColor = vec4( color, opacityVal );", "   gl_Position = projectionMatrix * modelViewMatrix * vec4(newPos, 1.0);", "}"].join("\n"),
                        e = ["varying vec4 vColor;", "void main()", "{", "   gl_FragColor = vColor;", "   float depth = gl_FragCoord.z / gl_FragCoord.w;", "   float fogFactor = smoothstep(" + parseInt(this.cameraDistance) + ".0," + parseInt(this.cameraDistance + 300) + ".0, depth );", "   vec3 fogColor = vec3(0.0);", "   gl_FragColor = mix( vColor, vec4( fogColor, gl_FragColor.w ), fogFactor );", "}"].join("\n");
                    this.pointUniforms = {
                        currentTime: {
                            type: "f",
                            value: 0
                        }
                    };
                    var n = new i.ShaderMaterial({
                            uniforms: this.pointUniforms,
                            attributes: {
                                lng: {
                                    type: "f",
                                    value: null
                                }
                            },
                            vertexShader: t,
                            fragmentShader: e,
                            transparent: !0,
                            vertexColors: i.VertexColors,
                            side: i.DoubleSide
                        }),
                        r = 4 * this.tiles.length,
                        o = new i.BufferGeometry;
                    o.addAttribute("index", Uint16Array, 3 * r, 1), o.addAttribute("position", Float32Array, 3 * r, 3), o.addAttribute("normal", Float32Array, 3 * r, 3), o.addAttribute("color", Float32Array, 3 * r, 3), o.addAttribute("lng", Float32Array, 3 * r, 1);
                    for (var s = o.attributes.lng.array, a = l(this.baseColor).hueSet(), u = [], h = 0; h < a.length; h++) u.push(a[h].shade(Math.random() / 3));
                    var c = 21845,
                        f = o.attributes.index.array;
                    for (h = 0; h < f.length; h++) f[h] = h % 65535;
                    var d = o.attributes.position.array,
                        p = o.attributes.color.array,
                        m = function(t, e, n, r, i, o, a, h, c, l, f, m, v) {
                            var y = 3 * t,
                                g = 3 * y,
                                b = Math.floor(Math.random() * u.length);
                            u[b].rgb();
                            s[y] = m, s[y + 1] = m, s[y + 2] = m, d[g] = e, d[g + 1] = n, d[g + 2] = r, d[g + 3] = i, d[g + 4] = o, d[g + 5] = a, d[g + 6] = h, d[g + 7] = c, d[g + 8] = l, p[g] = v.r, p[g + 1] = v.g, p[g + 2] = v.b, p[g + 3] = v.r, p[g + 4] = v.g, p[g + 5] = v.b, p[g + 6] = v.r, p[g + 7] = v.g, p[g + 8] = v.b
                        };
                    for (h = 0; h < this.tiles.length; h++) {
                        var v = this.tiles[h],
                            y = 4 * h,
                            g = Math.floor(Math.random() * u.length),
                            b = u[g].rgb(),
                            w = new i.Color;
                        w.setRGB(b[0] / 255, b[1] / 255, b[2] / 255), m(y, v.b[0].x, v.b[0].y, v.b[0].z, v.b[1].x, v.b[1].y, v.b[1].z, v.b[2].x, v.b[2].y, v.b[2].z, v.lat, v.lon, w), m(y + 1, v.b[0].x, v.b[0].y, v.b[0].z, v.b[2].x, v.b[2].y, v.b[2].z, v.b[3].x, v.b[3].y, v.b[3].z, v.lat, v.lon, w), m(y + 2, v.b[0].x, v.b[0].y, v.b[0].z, v.b[3].x, v.b[3].y, v.b[3].z, v.b[4].x, v.b[4].y, v.b[4].z, v.lat, v.lon, w), v.b.length > 5 && m(y + 3, v.b[0].x, v.b[0].y, v.b[0].z, v.b[5].x, v.b[5].y, v.b[5].z, v.b[4].x, v.b[4].y, v.b[4].z, v.lat, v.lon, w)
                    }
                    o.offsets = [];
                    var x = r / c;
                    for (h = 0; h < x; h++) {
                        var _ = {
                            start: h * c * 3,
                            index: h * c * 3,
                            count: 3 * Math.min(r - h * c, c)
                        };
                        o.offsets.push(_)
                    }
                    o.computeBoundingSphere(), this.hexGrid = new i.Mesh(o, n), this.scene.add(this.hexGrid)
                },
                m = function() {
                    for (var t, e = new i.LineBasicMaterial({
                            color: this.introLinesColor,
                            transparent: !0,
                            linewidth: 2,
                            opacity: .5
                        }), n = 0; n < this.introLinesCount; n++) {
                        var r = new i.Geometry,
                            o = 180 * Math.random() + 90,
                            s = 5 * Math.random(),
                            a = 4 + Math.floor(5 * Math.random());
                        Math.random() < .3 && (s = 30 * Math.random() - 50, a = 3 + Math.floor(3 * Math.random()));
                        for (var u = 0; u < a; u++) {
                            var h = f.mapPoint(o, s - 5 * u);
                            t = new i.Vector3(h.x * this.introLinesAltitude, h.y * this.introLinesAltitude, h.z * this.introLinesAltitude), r.vertices.push(t)
                        }
                        this.introLines.add(new i.Line(r, e))
                    }
                    this.scene.add(this.introLines)
                };

            function v(t, e, n) {
                n || (n = {}), this.width = t, this.height = e, this.points = [], this.introLines = new i.Object3D, this.pins = [], this.markers = [], this.satelliteAnimations = [], this.satelliteMeshes = [], this.satellites = {}, this.quadtree = new o(new s(180, 360), 5), this.active = !0;
                var r = {
                    font: "Inconsolata",
                    baseColor: "#ffcc00",
                    markerColor: "#ffcc00",
                    pinColor: "#00eeee",
                    satelliteColor: "#ff0000",
                    blankPercentage: 0,
                    thinAntarctica: .01,
                    mapUrl: "resources/equirectangle_projection.png",
                    introLinesAltitude: 1.1,
                    introLinesDuration: 2e3,
                    introLinesColor: "#8FD8D8",
                    introLinesCount: 60,
                    scale: 1,
                    dayLength: 28e3,
                    pointsPerDegree: 1.1,
                    pointSize: .6,
                    pointsVariance: .2,
                    maxPins: 500,
                    maxMarkers: 4,
                    data: [],
                    tiles: [],
                    viewAngle: 0
                };
                for (var a in r) this[a] || (this[a] = r[a], n[a] && (this[a] = n[a]));
                this.setScale(this.scale), this.renderer = new i.WebGLRenderer({
                    antialias: !0
                }), this.renderer.setSize(this.width, this.height), this.renderer.gammaInput = !0, this.renderer.gammaOutput = !0, this.domElement = this.renderer.domElement, this.data.sort((function(t, e) {
                    return e.lng - 2 * e.label.length - (t.lng - 2 * t.label.length)
                }));
                for (a = 0; a < this.data.length; a++) this.data[a].when = this.introLinesDuration * ((180 + this.data[a].lng) / 360) + 500
            }
            v.prototype.init = function(t) {
                this.camera = new i.PerspectiveCamera(50, this.width / this.height, 1, this.cameraDistance + 300), this.camera.position.z = this.cameraDistance, this.cameraAngle = Math.PI, this.scene = new i.Scene, this.scene.fog = new i.Fog(0, this.cameraDistance, this.cameraDistance + 300), m.call(this), this.smokeProvider = new c(this.scene), p.call(this), setTimeout(t, 500)
            }, v.prototype.destroy = function(t) {
                var e = this;
                this.active = !1, setTimeout((function() {
                    for (; e.scene.children.length > 0;) e.scene.remove(e.scene.children[0]);
                    "function" == typeof t && t()
                }), 1e3)
            }, v.prototype.addPin = function(t, e, n) {
                t = parseFloat(t), e = parseFloat(e);
                var r = {
                        lineColor: this.pinColor,
                        topColor: this.pinColor,
                        font: this.font
                    },
                    i = 1.2;
                "string" == typeof n && 0 !== n.length || (i -= .05 + .05 * Math.random());
                var o = new a(t, e, n, i, this.scene, this.smokeProvider, r);
                this.pins.push(o);
                var u = function(t, e) {
                    return {
                        x: t + 90,
                        y: e + 180,
                        rad: 2 + Math.abs(t) / 90 * 15
                    }
                }(t, e);
                if (o.pos_ = new s(parseInt(u.x), parseInt(u.y)), n.length > 0 ? o.rad_ = u.rad : o.rad_ = 1, this.quadtree.addObject(o), n.length > 0) {
                    var h = this.quadtree.getCollisionsForObject(o),
                        c = 0,
                        l = 0,
                        f = [];
                    for (var d in h) h[d].text.length > 0 && (c++, h[d].age() > 5e3 ? f.push(h[d]) : l++);
                    if (c > 0 && 0 == l)
                        for (d = 0; d < f.length; d++) f[d].hideLabel(), f[d].hideSmoke(), f[d].hideTop(), f[d].changeAltitude(.05 * Math.random() + 1.1);
                    else c > 0 && (o.hideLabel(), o.hideSmoke(), o.hideTop(), o.changeAltitude(.05 * Math.random() + 1.1))
                }
                if (this.pins.length > this.maxPins) {
                    var p = this.pins.shift();
                    this.quadtree.removeObject(p), p.remove()
                }
                return o
            }, v.prototype.addMarker = function(t, e, n, r) {
                var i, o = {
                    markerColor: this.markerColor,
                    lineColor: this.markerColor,
                    font: this.font
                };
                return i = new u(t, e, n, 1.2, "boolean" == typeof r && r ? this.markers[this.markers.length - 1] : "object" == typeof r ? r : null, this.scene, o), this.markers.push(i), this.markers.length > this.maxMarkers && this.markers.shift().remove(), i
            }, v.prototype.addSatellite = function(t, e, n, r, i, o) {
                r || (r = {}), void 0 == r.coreColor && (r.coreColor = this.satelliteColor);
                var s = new h(t, e, n, this.scene, r, i, o);
                return this.satellites[s.toString()] || (this.satellites[s.toString()] = s), s.onRemove(function() {
                    delete this.satellites[s.toString()]
                }.bind(this)), s
            }, v.prototype.addConstellation = function(t, e) {
                for (var n, r = [], i = 0; i < t.length; i++) n = 0 === i ? this.addSatellite(t[i].lat, t[i].lon, t[i].altitude, e) : this.addSatellite(t[i].lat, t[i].lon, t[i].altitude, e, r[0].canvas, r[0].texture), r.push(n);
                return r
            }, v.prototype.setMaxPins = function(t) {
                for (this.maxPins = t; this.pins.length > this.maxPins;) {
                    var e = this.pins.shift();
                    this.quadtree.removeObject(e), e.remove()
                }
            }, v.prototype.setMaxMarkers = function(t) {
                for (this.maxMarkers = t; this.markers.length > this.maxMarkers;) this.markers.shift().remove()
            }, v.prototype.setBaseColor = function(t) {
                this.baseColor = t, p.call(this)
            }, v.prototype.setMarkerColor = function(t) {
                this.markerColor = t, this.scene._encom_markerTexture = null
            }, v.prototype.setPinColor = function(t) {
                this.pinColor = t
            }, v.prototype.setScale = function(t) {
                this.scale = t, this.cameraDistance = 1700 / t, this.scene && this.scene.fog && (this.scene.fog.near = this.cameraDistance, this.scene.fog.far = this.cameraDistance + 300, p.call(this), this.camera.far = this.cameraDistance + 300, this.camera.updateProjectionMatrix())
            }, v.prototype.tick = function() {
                if (this.camera) {
                    this.firstRunTime || (this.firstRunTime = Date.now()), d.call(this), r.update(), this.lastRenderDate || (this.lastRenderDate = new Date), this.firstRenderDate || (this.firstRenderDate = new Date), this.totalRunTime = new Date - this.firstRenderDate;
                    var t = new Date - this.lastRenderDate;
                    this.lastRenderDate = new Date;
                    var e = 2 * Math.PI / (this.dayLength / t);
                    for (var n in this.cameraAngle += e, this.active || (this.cameraDistance += 1e3 * t / 1e3), this.camera.position.x = this.cameraDistance * Math.cos(this.cameraAngle) * Math.cos(this.viewAngle), this.camera.position.y = Math.sin(this.viewAngle) * this.cameraDistance, this.camera.position.z = this.cameraDistance * Math.sin(this.cameraAngle) * Math.cos(this.viewAngle), this.satellites) this.satellites[n].tick(this.camera.position, this.cameraAngle, t);
                    for (n = 0; n < this.satelliteMeshes.length; n++) {
                        var i = this.satelliteMeshes[n];
                        i.lookAt(this.camera.position), i.rotateZ(i.tiltDirection * Math.PI / 2), i.rotateZ(Math.sin(this.cameraAngle + i.lon / 180 * Math.PI) * i.tiltMultiplier * i.tiltDirection * -1)
                    }
                    this.introLinesDuration > this.totalRunTime ? (this.totalRunTime / this.introLinesDuration < .1 && (this.introLines.children[0].material.opacity = this.totalRunTime / this.introLinesDuration * 10 - .2), this.totalRunTime / this.introLinesDuration > .8 ? this.introLines.children[0].material.opacity = 5 * Math.max(1 - this.totalRunTime / this.introLinesDuration, 0) : this.introLines.children[0].material.opacity = 1, this.introLines.rotateY(2 * Math.PI / (this.introLinesDuration / t))) : this.introLines && (this.scene.remove(this.introLines), this.introLines), this.pointUniforms.currentTime.value = this.totalRunTime, this.smokeProvider.tick(this.totalRunTime), this.camera.lookAt(this.scene.position), this.renderer.render(this.scene, this.camera)
                }
            }, t.exports = v
        },
        "8Kt/": function(t, e, n) {
            "use strict";
            n("lSNA");
            e.__esModule = !0, e.defaultHead = c, e.default = void 0;
            var r, i = function(t) {
                    if (t && t.__esModule) return t;
                    if (null === t || "object" !== typeof t && "function" !== typeof t) return {
                        default: t
                    };
                    var e = h();
                    if (e && e.has(t)) return e.get(t);
                    var n = {},
                        r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var i in t)
                        if (Object.prototype.hasOwnProperty.call(t, i)) {
                            var o = r ? Object.getOwnPropertyDescriptor(t, i) : null;
                            o && (o.get || o.set) ? Object.defineProperty(n, i, o) : n[i] = t[i]
                        }
                    n.default = t, e && e.set(t, n);
                    return n
                }(n("q1tI")),
                o = (r = n("Xuae")) && r.__esModule ? r : {
                    default: r
                },
                s = n("lwAK"),
                a = n("FYa8"),
                u = n("/0+H");

            function h() {
                if ("function" !== typeof WeakMap) return null;
                var t = new WeakMap;
                return h = function() {
                    return t
                }, t
            }

            function c() {
                var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                    e = [i.default.createElement("meta", {
                        charSet: "utf-8"
                    })];
                return t || e.push(i.default.createElement("meta", {
                    name: "viewport",
                    content: "width=device-width"
                })), e
            }

            function l(t, e) {
                return "string" === typeof e || "number" === typeof e ? t : e.type === i.default.Fragment ? t.concat(i.default.Children.toArray(e.props.children).reduce((function(t, e) {
                    return "string" === typeof e || "number" === typeof e ? t : t.concat(e)
                }), [])) : t.concat(e)
            }
            var f = ["name", "httpEquiv", "charSet", "itemProp"];

            function d(t, e) {
                return t.reduce((function(t, e) {
                    var n = i.default.Children.toArray(e.props.children);
                    return t.concat(n)
                }), []).reduce(l, []).reverse().concat(c(e.inAmpMode)).filter(function() {
                    var t = new Set,
                        e = new Set,
                        n = new Set,
                        r = {};
                    return function(i) {
                        var o = !0,
                            s = !1;
                        if (i.key && "number" !== typeof i.key && i.key.indexOf("$") > 0) {
                            s = !0;
                            var a = i.key.slice(i.key.indexOf("$") + 1);
                            t.has(a) ? o = !1 : t.add(a)
                        }
                        switch (i.type) {
                            case "title":
                            case "base":
                                e.has(i.type) ? o = !1 : e.add(i.type);
                                break;
                            case "meta":
                                for (var u = 0, h = f.length; u < h; u++) {
                                    var c = f[u];
                                    if (i.props.hasOwnProperty(c))
                                        if ("charSet" === c) n.has(c) ? o = !1 : n.add(c);
                                        else {
                                            var l = i.props[c],
                                                d = r[c] || new Set;
                                            "name" === c && s || !d.has(l) ? (d.add(l), r[c] = d) : o = !1
                                        }
                                }
                        }
                        return o
                    }
                }()).reverse().map((function(t, e) {
                    var n = t.key || e;
                    return i.default.cloneElement(t, {
                        key: n
                    })
                }))
            }

            function p(t) {
                var e = t.children,
                    n = (0, i.useContext)(s.AmpStateContext),
                    r = (0, i.useContext)(a.HeadManagerContext);
                return i.default.createElement(o.default, {
                    reduceComponentsToState: d,
                    headManager: r,
                    inAmpMode: (0, u.isInAmpMode)(n)
                }, e)
            }
            p.rewind = function() {};
            var m = p;
            e.default = m
        },
        "8oxB": function(t, e) {
            var n, r, i = t.exports = {};

            function o() {
                throw new Error("setTimeout has not been defined")
            }

            function s() {
                throw new Error("clearTimeout has not been defined")
            }

            function a(t) {
                if (n === setTimeout) return setTimeout(t, 0);
                if ((n === o || !n) && setTimeout) return n = setTimeout, setTimeout(t, 0);
                try {
                    return n(t, 0)
                } catch (e) {
                    try {
                        return n.call(null, t, 0)
                    } catch (e) {
                        return n.call(this, t, 0)
                    }
                }
            }! function() {
                try {
                    n = "function" === typeof setTimeout ? setTimeout : o
                } catch (t) {
                    n = o
                }
                try {
                    r = "function" === typeof clearTimeout ? clearTimeout : s
                } catch (t) {
                    r = s
                }
            }();
            var u, h = [],
                c = !1,
                l = -1;

            function f() {
                c && u && (c = !1, u.length ? h = u.concat(h) : l = -1, h.length && d())
            }

            function d() {
                if (!c) {
                    var t = a(f);
                    c = !0;
                    for (var e = h.length; e;) {
                        for (u = h, h = []; ++l < e;) u && u[l].run();
                        l = -1, e = h.length
                    }
                    u = null, c = !1,
                        function(t) {
                            if (r === clearTimeout) return clearTimeout(t);
                            if ((r === s || !r) && clearTimeout) return r = clearTimeout, clearTimeout(t);
                            try {
                                r(t)
                            } catch (e) {
                                try {
                                    return r.call(null, t)
                                } catch (e) {
                                    return r.call(this, t)
                                }
                            }
                        }(t)
                }
            }

            function p(t, e) {
                this.fun = t, this.array = e
            }

            function m() {}
            i.nextTick = function(t) {
                var e = new Array(arguments.length - 1);
                if (arguments.length > 1)
                    for (var n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
                h.push(new p(t, e)), 1 !== h.length || c || a(d)
            }, p.prototype.run = function() {
                this.fun.apply(null, this.array)
            }, i.title = "browser", i.browser = !0, i.env = {}, i.argv = [], i.version = "", i.versions = {}, i.on = m, i.addListener = m, i.once = m, i.off = m, i.removeListener = m, i.removeAllListeners = m, i.emit = m, i.prependListener = m, i.prependOnceListener = m, i.listeners = function(t) {
                return []
            }, i.binding = function(t) {
                throw new Error("process.binding is not supported")
            }, i.cwd = function() {
                return "/"
            }, i.chdir = function(t) {
                throw new Error("process.chdir is not supported")
            }, i.umask = function() {
                return 0
            }
        },
        "9rSQ": function(t, e, n) {
            "use strict";
            var r = n("xTJ+");

            function i() {
                this.handlers = []
            }
            i.prototype.use = function(t, e) {
                return this.handlers.push({
                    fulfilled: t,
                    rejected: e
                }), this.handlers.length - 1
            }, i.prototype.eject = function(t) {
                this.handlers[t] && (this.handlers[t] = null)
            }, i.prototype.forEach = function(t) {
                r.forEach(this.handlers, (function(e) {
                    null !== e && t(e)
                }))
            }, t.exports = i
        },
        A926: function(t, e, n) {
            var r = n("f+2g"),
                i = n("Y5Gq"),
                o = n("AaLD"),
                s = function(t, e, n, s, a, u, h) {
                    var c, l, f, d, p, m = {
                        lineColor: "#FFCC00",
                        lineWidth: 1,
                        markerColor: "#FFCC00",
                        labelColor: "#FFF",
                        font: "Inconsolata",
                        fontSize: 20,
                        drawTime: 2e3,
                        lineSegments: 150
                    };
                    if (this.lat = parseFloat(t), this.lon = parseFloat(e), this.text = n, this.altitude = parseFloat(s), this.scene = u, this.previous = a, this.next = [], this.previous && this.previous.next.push(this), h)
                        for (var v in m) void 0 != h[v] && (m[v] = h[v]);
                    this.opts = m, c = o.mapPoint(t, e), a && o.mapPoint(a.lat, a.lon), u._encom_markerTexture || (u._encom_markerTexture = function(t) {
                        var e, n;
                        return e = o.renderToCanvas(30, 30, (function(e) {
                            e.fillStyle = t, e.strokeStyle = t, e.lineWidth = 3, e.beginPath(), e.arc(15, 15, 10, 0, 2 * Math.PI), e.stroke(), e.beginPath(), e.arc(15, 15, 6, 0, 2 * Math.PI), e.fill()
                        })), (n = new r.Texture(e)).needsUpdate = !0, n
                    }(this.opts.markerColor)), l = new r.SpriteMaterial({
                        map: u._encom_markerTexture,
                        opacity: .7,
                        depthTest: !0,
                        fog: !0
                    }), this.marker = new r.Sprite(l), this.marker.scale.set(0, 0), this.marker.position.set(c.x * s, c.y * s, c.z * s), f = o.createLabel(n.toUpperCase(), this.opts.fontSize, this.opts.labelColor, this.opts.font, this.opts.markerColor), (d = new r.Texture(f)).needsUpdate = !0, p = new r.SpriteMaterial({
                        map: d,
                        useScreenCoordinates: !1,
                        opacity: 0,
                        depthTest: !0,
                        fog: !0
                    }), this.labelSprite = new r.Sprite(p), this.labelSprite.position = {
                        x: c.x * s * 1.1,
                        y: c.y * s * 1.05 + (c.y < 0 ? -15 : 30),
                        z: c.z * s * 1.1
                    }, this.labelSprite.scale.set(f.width, f.height), new i.Tween({
                        opacity: 0
                    }).to({
                        opacity: 1
                    }, 500).onUpdate((function() {
                        p.opacity = this.opacity
                    })).start();
                    var y = this;
                    if (new i.Tween({
                            x: 0,
                            y: 0
                        }).to({
                            x: 50,
                            y: 50
                        }, 2e3).easing(i.Easing.Elastic.Out).onUpdate((function() {
                            y.marker.scale.set(this.x, this.y)
                        })).delay(this.previous ? y.opts.drawTime : 0).start(), this.previous) {
                        var g, b, w, x, _, M, S, j, O = [],
                            k = [];
                        y.geometrySpline = new r.Geometry, g = new r.LineBasicMaterial({
                            color: this.opts.lineColor,
                            transparent: !0,
                            linewidth: 3,
                            opacity: .5
                        }), y.geometrySplineDotted = new r.Geometry, b = new r.LineBasicMaterial({
                            color: this.opts.lineColor,
                            linewidth: 1,
                            transparent: !0,
                            opacity: .5
                        }), w = (t - a.lat) / y.opts.lineSegments, x = (e - a.lon) / y.opts.lineSegments, _ = o.mapPoint(a.lat, a.lon), O = [], k = [];
                        for (var C = 0; C < y.opts.lineSegments + 1; C++) {
                            var P = ((90 + a.lat + C * w) % 180 - 90) * (.5 + Math.cos(C * (5 * Math.PI / 2) / y.opts.lineSegments) / 2) + C * t / y.opts.lineSegments / 2,
                                I = (180 + a.lon + C * x) % 360 - 180;
                            O.push({
                                lat: P,
                                lon: I,
                                index: C
                            }), 0 == C || C == y.opts.lineSegments ? k.push({
                                lat: P,
                                lon: I,
                                index: C
                            }) : k.push({
                                lat: P + 1,
                                lon: I,
                                index: C
                            }), sPoint = new r.Vector3(1.2 * _.x, 1.2 * _.y, 1.2 * _.z), sPoint2 = new r.Vector3(1.2 * _.x, 1.2 * _.y, 1.2 * _.z), sPoint.globe_index = C, sPoint2.globe_index = C, y.geometrySpline.vertices.push(sPoint), y.geometrySplineDotted.vertices.push(sPoint2)
                        }
                        a.lat, a.lon, (j = function() {
                            for (var t = O.shift(), e = k.shift(), n = 0; n < y.geometrySpline.vertices.length; n++) S = y.geometrySpline.vertices[n], M = o.mapPoint(t.lat, t.lon), currentVert2 = y.geometrySplineDotted.vertices[n], currentPoint2 = o.mapPoint(e.lat, e.lon), n >= t.index && (S.set(1.2 * M.x, 1.2 * M.y, 1.2 * M.z), currentVert2.set(1.19 * currentPoint2.x, 1.19 * currentPoint2.y, 1.19 * currentPoint2.z)), y.geometrySpline.verticesNeedUpdate = !0, y.geometrySplineDotted.verticesNeedUpdate = !0;
                            O.length > 0 && setTimeout(j, y.opts.drawTime / y.opts.lineSegments)
                        })(), this.scene.add(new r.Line(y.geometrySpline, g)), this.scene.add(new r.Line(y.geometrySplineDotted, b, r.LinePieces))
                    }
                    this.scene.add(this.marker), this.scene.add(this.labelSprite)
                };
            s.prototype.remove = function() {
                for (var t, e = 0, n = this, r = function(t) {
                        for (var i = 0; i < e; i++) t.geometrySpline.vertices[i].set(t.geometrySpline.vertices[i + 1]), t.geometrySplineDotted.vertices[i].set(t.geometrySplineDotted.vertices[i + 1]), t.geometrySpline.verticesNeedUpdate = !0, t.geometrySplineDotted.verticesNeedUpdate = !0;
                        ++e < t.geometrySpline.vertices.length ? setTimeout((function() {
                            r(t)
                        }), n.opts.drawTime / n.opts.lineSegments) : (n.scene.remove(t.geometrySpline), n.scene.remove(t.geometrySplineDotted))
                    }, i = 0; i < n.next.length; i++) t = i, r(n.next[t]);
                n.scene.remove(n.marker), n.scene.remove(n.labelSprite)
            }, t.exports = s
        },
        AaLD: function(t, e) {
            var n = {
                renderToCanvas: function(t, e, n) {
                    var r = document.createElement("canvas");
                    return r.width = t, r.height = e, n(r.getContext("2d")), r
                },
                mapPoint: function(t, e, n) {
                    n || (n = 500);
                    var r = (90 - t) * Math.PI / 180,
                        i = (180 - e) * Math.PI / 180;
                    return {
                        x: n * Math.sin(r) * Math.cos(i),
                        y: n * Math.cos(r),
                        z: n * Math.sin(r) * Math.sin(i)
                    }
                },
                hexToRgb: function(t) {
                    t = t.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, (function(t, e, n, r) {
                        return e + e + n + n + r + r
                    }));
                    var e = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);
                    return e ? {
                        r: parseInt(e[1], 16),
                        g: parseInt(e[2], 16),
                        b: parseInt(e[3], 16)
                    } : null
                },
                createLabel: function(t, e, n, r, i) {
                    var o = document.createElement("canvas"),
                        s = o.getContext("2d");
                    s.font = e + "pt " + r;
                    var a = s.measureText(t).width;
                    return o.width = a, o.height = e + 10, o.width % 2 && o.width++, o.height % 2 && o.height++, i && (o.height += 30), s.font = e + "pt " + r, s.textAlign = "center", s.textBaseline = "middle", s.strokeStyle = "black", s.miterLimit = 2, s.lineJoin = "circle", s.lineWidth = 6, s.strokeText(t, o.width / 2, o.height / 2), s.lineWidth = 2, s.fillStyle = n, s.fillText(t, o.width / 2, o.height / 2), i && (s.strokeStyle = i, s.lineWidth = 4, s.beginPath(), s.moveTo(0, o.height - 10), s.lineTo(o.width - 1, o.height - 10), s.stroke()), o
                }
            };
            t.exports = n
        },
        BKOI: function(t, e, n) {
            var r, i = n("5Lr+"),
                o = n("Wh0i"),
                s = n("ak1v"),
                a = n("m4wL");
            r = function(t, e, n) {
                var r, u = {
                        objects_: {},
                        quadrants_: {},
                        ids_: 1,
                        quadrantIds_: 1,
                        autoId_: !0,
                        inited_: !1,
                        debug_: !1,
                        size_: void 0,
                        root_: void 0,
                        quadrantObjectsLimit_: void 0,
                        quadrantLevelLimit_: void 0,
                        quadrantSizeLimit_: void 0
                    },
                    h = new s,
                    c = {
                        p: "pos_",
                        r: "rad_",
                        id: "id_"
                    },
                    l = {
                        data: {
                            necessary: {
                                size_: h.isVec2,
                                quadrantObjectsLimit_: h.isNumber,
                                quadrantLevelLimit_: h.isNumber
                            }
                        },
                        k: {
                            necessary: {
                                p: h.isVec2
                            },
                            c: {
                                necessary: {
                                    r: h.isNumber
                                }
                            }
                        }
                    },
                    f = {
                        nextId: function() {
                            return u.ids_++
                        },
                        nextQuadrantId: function(t) {
                            var e = u.quadrantIds_;
                            return u.quadrantIds_ += t || 4, e
                        },
                        hasCollision: function(t, e) {
                            return t[c.r] + e[c.r] > t[c.p].distance(e[c.p])
                        },
                        removeQuadrantParentQuadrants: function(t, e) {
                            t.parent_ && e[t.parent_.id_] && (delete e[t.parent_.id_], f.removeQuadrantParentQuadrants(t.parent_, e))
                        },
                        getSubtreeTopQuadrant: function t(e, n) {
                            return e.parent_ && n[e.parent_.id_] ? t(e.parent_, n) : e
                        },
                        removeQuadrantChildtree: function(t, e) {
                            var n, r = t.getChildren();
                            for (n = 0; n < r.length; n++) {
                                if (!e[r[n].id_]) return;
                                delete e[r[n].id_], f.removeQuadrantChildtree(r[n], e)
                            }
                        },
                        getIntersectingQuadrants: function t(e, n, r) {
                            var i, o;
                            if (n.intersects(e[c.p], e[c.r]))
                                if (r.biggest[n.id_] = n, (o = n.getChildren()).length)
                                    for (i = 0; i < o.length; i++) t(e, o[i], r);
                                else r.leaves[n.id_] = n;
                            else f.removeQuadrantParentQuadrants(n, r.biggest)
                        },
                        getSmallestIntersectingQuadrants: function(t, e, n) {
                            var r, i;
                            for (r in e || (e = u.root_), n || (n = {
                                    leaves: {},
                                    biggest: {}
                                }), f.getIntersectingQuadrants(t, e, n), n.leaves) n.biggest[r] && (i = f.getSubtreeTopQuadrant(n.leaves[r], n.biggest), f.removeQuadrantChildtree(i, n.biggest));
                            return n.biggest
                        },
                        removeQuadrantObjects: function(t) {
                            var e, n = t.removeObjects([], 1);
                            for (e = 0; e < n.length; e++) delete u.quadrants_[n[e].obj[c.id]][n[e].quadrant.id_];
                            return n
                        },
                        removeObjectFromQuadrants: function(t, e) {
                            var n;
                            for (n in void 0 === e && (e = u.quadrants_[t[c.id]]), e) f.removeObjectFromQuadrant(t, e[n])
                        },
                        removeObjectFromQuadrant: function(t, e) {
                            e.removeObject(t[c.id]), delete u.quadrants_[t[c.id]][e.id_], !e.hasChildren() && e.parent_ && f.refactorSubtree(e.parent_)
                        },
                        refactorSubtree: function(t) {
                            var e, n, r, i;
                            if (!t.refactoring_) {
                                for (e = 0; e < t.children_.length; e++)
                                    if ((r = t.children_[e]).hasChildren()) return;
                                if (!(t.getObjectCountForLimit() > u.quadrantObjectsLimit_)) {
                                    for (t.refactoring_ = !0, e = 0; e < t.children_.length; e++)
                                        for (n in (r = t.children_[e]).objects_) i = r.objects_[n], f.removeObjectFromQuadrant(i, r), f.addObjectToQuadrant(i, t);
                                    t.looseChildren(), t.refactoring_ = !1, t.parent_ && f.refactorSubtree(t.parent_)
                                }
                            }
                        },
                        updateObjectQuadrants: function(t) {
                            var e, n = u.quadrants_[t[c.id]],
                                r = f.getSmallestIntersectingQuadrants(t),
                                i = o.getIdsOfObjects(n),
                                s = o.getIdsOfObjects(r),
                                a = o.arrayDiffs(i, s),
                                h = a[0],
                                l = a[1];
                            for (e = 0; e < l.length; e++) f.populateSubtree(t, r[l[e]]);
                            for (e = 0; e < h.length; e++) n[h[e]] && f.removeObjectFromQuadrant(t, n[h[e]])
                        },
                        addObjectToQuadrant: function(t, e) {
                            var n = t[c.id];
                            void 0 === u.quadrants_[n] && (u.quadrants_[n] = {}), u.quadrants_[n][e.id_] = e, e.addObject(n, t)
                        },
                        populateSubtree: function(t, e) {
                            var n, r, i, o;
                            if (e || (e = u.root_), e.hasChildren())
                                for (r in i = f.getSmallestIntersectingQuadrants(t, e)) {
                                    if (i[r] === e) return void f.addObjectToQuadrant(t, e);
                                    f.populateSubtree(t, i[r])
                                } else if (e.getObjectCount() < u.quadrantObjectsLimit_ || e.size_.x < u.quadrantSizeLimit_.x) f.addObjectToQuadrant(t, e);
                                else
                                    for (e.makeChildren(f.nextQuadrantId()), (o = f.removeQuadrantObjects(e)).push({
                                            obj: t,
                                            quadrant: e
                                        }), n = 0; n < o.length; n++) f.populateSubtree(o[n].obj, o[n].quadrant)
                        },
                        init: function() {
                            var t;
                            u.quadrantLevelLimit_ || (u.quadrantLevelLimit_ = 6), h.byCallbackObject(u, l.data.necessary), u.root_ = new a(new i(0, 0), u.size_.clone(), f.nextQuadrantId(1)), t = Math.pow(2, u.quadrantLevelLimit_), u.quadrantSizeLimit_ = u.size_.clone().divide(t), u.inited_ = !0
                        },
                        checkInit: function(t) {
                            return t && !u.inited_ && f.init(), u.inited_
                        },
                        checkObjectKeys: function(t) {
                            h.isNumber(t[c.id], c.id), h.isNumber(t[c.r], c.r), h.hasNoKey(u.objects_, t[c.id], c.id), h.byCallbackObject(t, l.k.necessary, c)
                        },
                        setObjId: function(t) {
                            u.autoId_ && !t[c.id] && (t[c.id] = f.nextId())
                        },
                        removeObjectById: function(t) {
                            h.hasKey(u.objects_, t, c.id), f.removeObjectFromQuadrants(u.objects_[t]), delete u.objects_[t]
                        },
                        updateObjectById: function(t) {
                            h.hasKey(u.objects_, t, c.id), f.updateObjectQuadrants(u.objects_[t])
                        },
                        getObjectsByObject: function(t) {
                            var e, n, r = u.quadrants_[t[c.id]],
                                i = {
                                    objects: {},
                                    quadrants: {}
                                };
                            for (n in r)
                                for (r[n].getObjectsUp(i), e = 0; e < r[n].children_.length; e++) r[n].children_[e].getObjectsDown(i);
                            return delete i.objects[t[c.id]], i.objects
                        }
                    },
                    d = {
                        getQuadrants: function() {
                            return u.root_.getChildren(!0, [u.root_])
                        },
                        getLeafQuadrants: function() {
                            return d.getQuadrants().filter((function(t) {
                                return !t.hasChildren()
                            }))
                        }
                    },
                    p = {
                        getQuadrantObjectsLimit: function() {
                            return u.quadrantObjectsLimit_
                        },
                        setQuadrantObjectsLimit: function(t) {
                            void 0 !== t && (h.isNumber(t, "quadrantObjectsLimit_"), u.quadrantObjectsLimit_ = t)
                        },
                        getQuadrantLevelLimit: function() {
                            return u.quadrantLevelLimit_
                        },
                        setQuadrantLevelLimit: function(t) {
                            void 0 !== t && (h.isNumber(t, "quadrantLevelLimit_"), u.quadrantLevelLimit_ = t)
                        },
                        setObjectKey: function(t, e) {
                            h.fnFalse(f.checkInit), void 0 !== e && (h.hasKey(c, t, t), h.isString(e, t), "id" === t && (u.autoId_ = !1), c[t] = e)
                        },
                        getSize: function() {
                            return u.size_.clone()
                        },
                        setSize: function(t) {
                            void 0 !== t && (h.isVec2(t, "size_"), u.size_ = t.clone())
                        },
                        addObjects: function(t) {
                            t.forEach((function(t) {
                                p.addObject(t)
                            }))
                        },
                        addObject: function(t) {
                            h.isDefined(t, "obj"), h.isObject(t, "obj"), f.checkInit(!0), f.setObjId(t), f.checkObjectKeys(t), f.populateSubtree(t), u.objects_[t[c.id]] = t
                        },
                        removeObjects: function(t) {
                            var e;
                            for (e = 0; e < t.length; e++) p.removeObject(t[e])
                        },
                        removeObject: function(t) {
                            f.checkInit(!0), h.hasKey(t, c.id, c.id), f.removeObjectById(t[c.id])
                        },
                        updateObjects: function(t) {
                            var e;
                            for (e = 0; e < t.length; e++) p.updateObject(t[e])
                        },
                        updateObject: function(t) {
                            f.checkInit(!0), h.hasKey(t, c.id, c.id), f.updateObjectById(t[c.id])
                        },
                        getPossibleCollisionsForObject: function(t) {
                            return f.checkInit(!0), h.hasKey(t, c.id, c.id), f.getObjectsByObject(t)
                        },
                        getCollisionsForObject: function(t) {
                            var e, n;
                            for (e in f.checkInit(!0), h.hasKey(t, c.id, c.id), n = f.getObjectsByObject(t)) f.hasCollision(t, n[e]) || delete n[e];
                            return n
                        },
                        getCount: function() {
                            return Object.keys(u.objects_).length
                        },
                        getObjects: function() {
                            var t, e = {};
                            for (t in u.objects_) e[t] = u.objects_[t];
                            return e
                        },
                        getQuadrantCount: function(t) {
                            return t ? Object.keys(u.quadrants_[t[c.id]]).length : 1 + u.root_.getChildCount(!0)
                        },
                        getQuadrantObjectCount: function() {
                            return u.root_.getObjectCount(!0)
                        },
                        debug: function(t) {
                            var e;
                            if (void 0 !== t) {
                                for (e in u.debug_ = t, f.checkInit(!0), d) this[e] = d[e];
                                for (e in f) this[e] = f[e];
                                this.data_ = u
                            }
                            return u.debug_
                        }
                    };
                for (r in p) this[r] = p[r];
                this.setSize(t), this.setQuadrantObjectsLimit(e), this.setQuadrantLevelLimit(n)
            }, t.exports = r
        },
        Bnag: function(t, e) {
            t.exports = function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
        },
        CgaS: function(t, e, n) {
            "use strict";
            var r = n("xTJ+"),
                i = n("MLWZ"),
                o = n("9rSQ"),
                s = n("UnBK"),
                a = n("SntB");

            function u(t) {
                this.defaults = t, this.interceptors = {
                    request: new o,
                    response: new o
                }
            }
            u.prototype.request = function(t) {
                "string" === typeof t ? (t = arguments[1] || {}).url = arguments[0] : t = t || {}, (t = a(this.defaults, t)).method ? t.method = t.method.toLowerCase() : this.defaults.method ? t.method = this.defaults.method.toLowerCase() : t.method = "get";
                var e = [s, void 0],
                    n = Promise.resolve(t);
                for (this.interceptors.request.forEach((function(t) {
                        e.unshift(t.fulfilled, t.rejected)
                    })), this.interceptors.response.forEach((function(t) {
                        e.push(t.fulfilled, t.rejected)
                    })); e.length;) n = n.then(e.shift(), e.shift());
                return n
            }, u.prototype.getUri = function(t) {
                return t = a(this.defaults, t), i(t.url, t.params, t.paramsSerializer).replace(/^\?/, "")
            }, r.forEach(["delete", "get", "head", "options"], (function(t) {
                u.prototype[t] = function(e, n) {
                    return this.request(a(n || {}, {
                        method: t,
                        url: e,
                        data: (n || {}).data
                    }))
                }
            })), r.forEach(["post", "put", "patch"], (function(t) {
                u.prototype[t] = function(e, n, r) {
                    return this.request(a(r || {}, {
                        method: t,
                        url: e,
                        data: n
                    }))
                }
            })), t.exports = u
        },
        DfZB: function(t, e, n) {
            "use strict";
            t.exports = function(t) {
                return function(e) {
                    return t.apply(null, e)
                }
            }
        },
        EbDI: function(t, e) {
            t.exports = function(t) {
                if ("undefined" !== typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t)
            }
        },
        FwuM: function(t, e, n) {
            var r = n("f+2g");
            t.exports = function(t, e, n, i, o, s) {
                void 0 == s && (this.repeatAtTile = -1), this.shutDownFlag = this.repeatAtTile < 0, this.done = !1, this.tilesHorizontal = n, this.tilesVertical = e, this.numberOfTiles = i, t.wrapS = t.wrapT = r.RepeatWrapping, t.repeat.set(1 / this.tilesHorizontal, 1 / this.tilesVertical), this.tileDisplayDuration = o, this.currentDisplayTime = 0, this.currentTile = 0, t.offset.y = 1, this.update = function(e) {
                    for (this.currentDisplayTime += e; !this.done && this.currentDisplayTime > this.tileDisplayDuration;)
                        if (this.shutDownFlag && this.currentTile >= i) this.done = !0, this.shutDownCb();
                        else {
                            this.currentDisplayTime -= this.tileDisplayDuration, this.currentTile++, this.currentTile != i || this.shutDownFlag || (this.currentTile = s);
                            var n = this.currentTile % this.tilesHorizontal;
                            t.offset.x = n / this.tilesHorizontal;
                            var r = Math.floor(this.currentTile / this.tilesHorizontal);
                            t.offset.y = 1 - r / this.tilesVertical - 1 / this.tilesVertical
                        }
                }, this.shutDown = function(t) {
                    _this.shutDownFlag = !0, _this.shutDownCb = t
                }
            }
        },
        HSsa: function(t, e, n) {
            "use strict";
            t.exports = function(t, e) {
                return function() {
                    for (var n = new Array(arguments.length), r = 0; r < n.length; r++) n[r] = arguments[r];
                    return t.apply(e, n)
                }
            }
        },
        "HaE+": function(t, e, n) {
            "use strict";

            function r(t, e, n, r, i, o, s) {
                try {
                    var a = t[o](s),
                        u = a.value
                } catch (h) {
                    return void n(h)
                }
                a.done ? e(u) : Promise.resolve(u).then(r, i)
            }

            function i(t) {
                return function() {
                    var e = this,
                        n = arguments;
                    return new Promise((function(i, o) {
                        var s = t.apply(e, n);

                        function a(t) {
                            r(s, i, o, a, u, "next", t)
                        }

                        function u(t) {
                            r(s, i, o, a, u, "throw", t)
                        }
                        a(void 0)
                    }))
                }
            }
            n.d(e, "a", (function() {
                return i
            }))
        },
        Ijbi: function(t, e, n) {
            var r = n("WkPL");
            t.exports = function(t) {
                if (Array.isArray(t)) return r(t)
            }
        },
        JEQr: function(t, e, n) {
            "use strict";
            (function(e) {
                var r = n("xTJ+"),
                    i = n("yK9s"),
                    o = {
                        "Content-Type": "application/x-www-form-urlencoded"
                    };

                function s(t, e) {
                    !r.isUndefined(t) && r.isUndefined(t["Content-Type"]) && (t["Content-Type"] = e)
                }
                var a = {
                    adapter: function() {
                        var t;
                        return ("undefined" !== typeof XMLHttpRequest || "undefined" !== typeof e && "[object process]" === Object.prototype.toString.call(e)) && (t = n("tQ2B")), t
                    }(),
                    transformRequest: [function(t, e) {
                        return i(e, "Accept"), i(e, "Content-Type"), r.isFormData(t) || r.isArrayBuffer(t) || r.isBuffer(t) || r.isStream(t) || r.isFile(t) || r.isBlob(t) ? t : r.isArrayBufferView(t) ? t.buffer : r.isURLSearchParams(t) ? (s(e, "application/x-www-form-urlencoded;charset=utf-8"), t.toString()) : r.isObject(t) ? (s(e, "application/json;charset=utf-8"), JSON.stringify(t)) : t
                    }],
                    transformResponse: [function(t) {
                        if ("string" === typeof t) try {
                            t = JSON.parse(t)
                        } catch (e) {}
                        return t
                    }],
                    timeout: 0,
                    xsrfCookieName: "XSRF-TOKEN",
                    xsrfHeaderName: "X-XSRF-TOKEN",
                    maxContentLength: -1,
                    maxBodyLength: -1,
                    validateStatus: function(t) {
                        return t >= 200 && t < 300
                    },
                    headers: {
                        common: {
                            Accept: "application/json, text/plain, */*"
                        }
                    }
                };
                r.forEach(["delete", "get", "head"], (function(t) {
                    a.headers[t] = {}
                })), r.forEach(["post", "put", "patch"], (function(t) {
                    a.headers[t] = r.merge(o)
                })), t.exports = a
            }).call(this, n("8oxB"))
        },
        LYNF: function(t, e, n) {
            "use strict";
            var r = n("OH9c");
            t.exports = function(t, e, n, i, o) {
                var s = new Error(t);
                return r(s, e, n, i, o)
            }
        },
        Lmem: function(t, e, n) {
            "use strict";
            t.exports = function(t) {
                return !(!t || !t.__CANCEL__)
            }
        },
        "M+4H": function(t, e, n) {
            var r = n("f+2g"),
                i = n("AaLD"),
                o = ["#define PI 3.141592653589793238462643", "#define DISTANCE 500.0", "attribute float myStartTime;", "attribute float myStartLat;", "attribute float myStartLon;", "attribute float altitude;", "attribute float active;", "uniform float currentTime;", "uniform vec3 color;", "varying vec4 vColor;", "", "vec3 getPos(float lat, float lon)", "{", "   if (lon < -180.0){", "      lon = lon + 360.0;", "   }", "   float phi = (90.0 - lat) * PI / 180.0;", "   float theta = (180.0 - lon) * PI / 180.0;", "   float x = DISTANCE * sin(phi) * cos(theta) * altitude;", "   float y = DISTANCE * cos(phi) * altitude;", "   float z = DISTANCE * sin(phi) * sin(theta) * altitude;", "   return vec3(x, y, z);", "}", "", "void main()", "{", "   float dt = currentTime - myStartTime;", "   if (dt < 0.0){", "      dt = 0.0;", "   }", "   if (dt > 0.0 && active > 0.0) {", "      dt = mod(dt,1500.0);", "   }", "   float opacity = 1.0 - dt/ 1500.0;", "   if (dt == 0.0 || active == 0.0){", "      opacity = 0.0;", "   }", "   vec3 newPos = getPos(myStartLat, myStartLon - ( dt / 50.0));", "   vColor = vec4( color, opacity );", "   vec4 mvPosition = modelViewMatrix * vec4( newPos, 1.0 );", "   gl_PointSize = 2.5 - (dt / 1500.0);", "   gl_Position = projectionMatrix * mvPosition;", "}"].join("\n"),
                s = ["varying vec4 vColor;", "void main()", "{", "   gl_FragColor = vColor;", "   float depth = gl_FragCoord.z / gl_FragCoord.w;", "   float fogFactor = smoothstep(1500.0, 1800.0, depth );", "   vec3 fogColor = vec3(0.0);", "   gl_FragColor = mix( vColor, vec4( fogColor, gl_FragColor.w), fogFactor );", "}"].join("\n"),
                a = function(t, e) {
                    var n = {
                        smokeCount: 5e3,
                        smokePerPin: 30,
                        smokePerSecond: 20
                    };
                    if (e)
                        for (var i in n) void 0 !== e[i] && (n[i] = e[i]);
                    this.opts = n, this.geometry = new r.Geometry, this.attributes = {
                        myStartTime: {
                            type: "f",
                            value: []
                        },
                        myStartLat: {
                            type: "f",
                            value: []
                        },
                        myStartLon: {
                            type: "f",
                            value: []
                        },
                        altitude: {
                            type: "f",
                            value: []
                        },
                        active: {
                            type: "f",
                            value: []
                        }
                    }, this.uniforms = {
                        currentTime: {
                            type: "f",
                            value: 0
                        },
                        color: {
                            type: "c",
                            value: new r.Color("#aaa")
                        }
                    };
                    var a = new r.ShaderMaterial({
                        uniforms: this.uniforms,
                        attributes: this.attributes,
                        vertexShader: o,
                        fragmentShader: s,
                        transparent: !0
                    });
                    for (i = 0; i < n.smokeCount; i++) {
                        var u = new r.Vector3;
                        u.set(0, 0, 0), this.geometry.vertices.push(u), this.attributes.myStartTime.value[i] = 0, this.attributes.myStartLat.value[i] = 0, this.attributes.myStartLon.value[i] = 0, this.attributes.altitude.value[i] = 0, this.attributes.active.value[i] = 0
                    }
                    this.attributes.myStartTime.needsUpdate = !0, this.attributes.myStartLat.needsUpdate = !0, this.attributes.myStartLon.needsUpdate = !0, this.attributes.altitude.needsUpdate = !0, this.attributes.active.needsUpdate = !0, this.smokeIndex = 0, this.totalRunTime = 0, t.add(new r.ParticleSystem(this.geometry, a))
                };
            a.prototype.setFire = function(t, e, n) {
                for (var r = i.mapPoint(t, e), o = this.smokeIndex, s = 0; s < this.opts.smokePerPin; s++) this.geometry.vertices[this.smokeIndex].set(r.x * n, r.y * n, r.z * n), this.geometry.verticesNeedUpdate = !0, this.attributes.myStartTime.value[this.smokeIndex] = this.totalRunTime + (1e3 * s / this.opts.smokePerSecond + 1500), this.attributes.myStartLat.value[this.smokeIndex] = t, this.attributes.myStartLon.value[this.smokeIndex] = e, this.attributes.altitude.value[this.smokeIndex] = n, this.attributes.active.value[this.smokeIndex] = 1, this.attributes.myStartTime.needsUpdate = !0, this.attributes.myStartLat.needsUpdate = !0, this.attributes.myStartLon.needsUpdate = !0, this.attributes.altitude.needsUpdate = !0, this.attributes.active.needsUpdate = !0, this.smokeIndex++, this.smokeIndex = this.smokeIndex % this.geometry.vertices.length;
                return o
            }, a.prototype.extinguish = function(t) {
                for (var e = 0; e < this.opts.smokePerPin; e++) this.attributes.active.value[(e + t) % this.opts.smokeCount] = 0, this.attributes.active.needsUpdate = !0
            }, a.prototype.changeAltitude = function(t, e) {
                for (var n = 0; n < this.opts.smokePerPin; n++) this.attributes.altitude.value[(n + e) % this.opts.smokeCount] = t, this.attributes.altitude.needsUpdate = !0
            }, a.prototype.tick = function(t) {
                this.totalRunTime = t, this.uniforms.currentTime.value = this.totalRunTime
            }, t.exports = a
        },
        MLWZ: function(t, e, n) {
            "use strict";
            var r = n("xTJ+");

            function i(t) {
                return encodeURIComponent(t).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]")
            }
            t.exports = function(t, e, n) {
                if (!e) return t;
                var o;
                if (n) o = n(e);
                else if (r.isURLSearchParams(e)) o = e.toString();
                else {
                    var s = [];
                    r.forEach(e, (function(t, e) {
                        null !== t && "undefined" !== typeof t && (r.isArray(t) ? e += "[]" : t = [t], r.forEach(t, (function(t) {
                            r.isDate(t) ? t = t.toISOString() : r.isObject(t) && (t = JSON.stringify(t)), s.push(i(e) + "=" + i(t))
                        })))
                    })), o = s.join("&")
                }
                if (o) {
                    var a = t.indexOf("#"); - 1 !== a && (t = t.slice(0, a)), t += (-1 === t.indexOf("?") ? "?" : "&") + o
                }
                return t
            }
        },
        OH9c: function(t, e, n) {
            "use strict";
            t.exports = function(t, e, n, r, i) {
                return t.config = e, n && (t.code = n), t.request = r, t.response = i, t.isAxiosError = !0, t.toJSON = function() {
                    return {
                        message: this.message,
                        name: this.name,
                        description: this.description,
                        number: this.number,
                        fileName: this.fileName,
                        lineNumber: this.lineNumber,
                        columnNumber: this.columnNumber,
                        stack: this.stack,
                        config: this.config,
                        code: this.code
                    }
                }, t
            }
        },
        OTTw: function(t, e, n) {
            "use strict";
            var r = n("xTJ+");
            t.exports = r.isStandardBrowserEnv() ? function() {
                var t, e = /(msie|trident)/i.test(navigator.userAgent),
                    n = document.createElement("a");

                function i(t) {
                    var r = t;
                    return e && (n.setAttribute("href", r), r = n.href), n.setAttribute("href", r), {
                        href: n.href,
                        protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
                        host: n.host,
                        search: n.search ? n.search.replace(/^\?/, "") : "",
                        hash: n.hash ? n.hash.replace(/^#/, "") : "",
                        hostname: n.hostname,
                        port: n.port,
                        pathname: "/" === n.pathname.charAt(0) ? n.pathname : "/" + n.pathname
                    }
                }
                return t = i(window.location.href),
                    function(e) {
                        var n = r.isString(e) ? i(e) : e;
                        return n.protocol === t.protocol && n.host === t.host
                    }
            }() : function() {
                return !0
            }
        },
        PHPW: function(t, e, n) {
            var r = n("Ra2f"),
                i = 0,
                o = function(t, e, n, r) {
                    this.id = i++, void 0 == r && (r = !0), this.points = [t, e, n], r && (t.registerFace(this), e.registerFace(this), n.registerFace(this))
                };
            o.prototype.getOtherPoints = function(t) {
                for (var e = [], n = 0; n < this.points.length; n++) this.points[n].toString() !== t.toString() && e.push(this.points[n]);
                return e
            }, o.prototype.findThirdPoint = function(t, e) {
                for (var n = 0; n < this.points.length; n++)
                    if (this.points[n].toString() !== t.toString() && this.points[n].toString() !== e.toString()) return this.points[n]
            }, o.prototype.isAdjacentTo = function(t) {
                for (var e = 0, n = 0; n < this.points.length; n++)
                    for (var r = 0; r < t.points.length; r++) this.points[n].toString() == t.points[r].toString() && e++;
                return 2 == e
            }, o.prototype.getCentroid = function(t) {
                if (this.centroid && !t) return this.centroid;
                var e = (this.points[0].x + this.points[1].x + this.points[2].x) / 3,
                    n = (this.points[0].y + this.points[1].y + this.points[2].y) / 3,
                    i = (this.points[0].z + this.points[1].z + this.points[2].z) / 3,
                    o = new r(e, n, i);
                return this.centroid = o, o
            }, t.exports = o
        },
        RIqP: function(t, e, n) {
            var r = n("Ijbi"),
                i = n("EbDI"),
                o = n("ZhPi"),
                s = n("Bnag");
            t.exports = function(t) {
                return r(t) || i(t) || o(t) || s()
            }
        },
        Ra2f: function(t, e) {
            var n = function(t, e, n) {
                void 0 !== t && void 0 !== e && void 0 !== n && (this.x = t.toFixed(3), this.y = e.toFixed(3), this.z = n.toFixed(3)), this.faces = []
            };
            n.prototype.subdivide = function(t, e, r) {
                var i = [];
                i.push(this);
                for (var o = 1; o < e; o++) {
                    var s = new n(this.x * (1 - o / e) + t.x * (o / e), this.y * (1 - o / e) + t.y * (o / e), this.z * (1 - o / e) + t.z * (o / e));
                    s = r(s), i.push(s)
                }
                return i.push(t), i
            }, n.prototype.segment = function(t, e) {
                e = Math.max(.01, Math.min(1, e));
                var r = t.x * (1 - e) + this.x * e,
                    i = t.y * (1 - e) + this.y * e,
                    o = t.z * (1 - e) + this.z * e;
                return new n(r, i, o)
            }, n.prototype.midpoint = function(t, e) {
                return this.segment(t, .5)
            }, n.prototype.project = function(t, e) {
                void 0 == e && (e = 1), e = Math.max(0, Math.min(1, e));
                this.y, this.x, this.z, this.x, this.z, this.y;
                var n = t / Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2) + Math.pow(this.z, 2));
                return this.x = this.x * n * e, this.y = this.y * n * e, this.z = this.z * n * e, this
            }, n.prototype.registerFace = function(t) {
                this.faces.push(t)
            }, n.prototype.getOrderedFaces = function() {
                for (var t = this.faces.slice(), e = [], n = 0; n < this.faces.length;) {
                    if (0 == n) e.push(t[n]), t.splice(n, 1);
                    else
                        for (var r = !1, i = 0; i < t.length && !r;) t[i].isAdjacentTo(e[n - 1]) && (r = !0, e.push(t[i]), t.splice(i, 1)), i++;
                    n++
                }
                return e
            }, n.prototype.findCommonFace = function(t, e) {
                for (var n = 0; n < this.faces.length; n++)
                    for (var r = 0; r < t.faces.length; r++)
                        if (this.faces[n].id === t.faces[r].id && this.faces[n].id !== e.id) return this.faces[n];
                return null
            }, n.prototype.toJson = function() {
                return {
                    x: this.x,
                    y: this.y,
                    z: this.z
                }
            }, n.prototype.toString = function() {
                return this.x + "," + this.y + "," + this.z
            }, t.exports = n
        },
        "Rn+g": function(t, e, n) {
            "use strict";
            var r = n("LYNF");
            t.exports = function(t, e, n) {
                var i = n.config.validateStatus;
                n.status && i && !i(n.status) ? e(r("Request failed with status code " + n.status, n.config, null, n.request, n)) : t(n)
            }
        },
        SLfz: function(t, e, n) {
            var r = n("FwuM"),
                i = n("f+2g"),
                o = n("AaLD"),
                s = function(t, e, n, r, i, s, a, u) {
                    var h = t / n,
                        c = Math.floor((t - r) / i),
                        l = (e - 25) / (t - r),
                        f = 0,
                        d = 0,
                        p = 0,
                        m = o.hexToRgb(s);
                    return o.renderToCanvas(t * e / n, e * n, (function(n) {
                        for (var o = 0; o < t; o++) {
                            o - p * h >= h && (f = 0, d += e, p++);
                            var s = f + 25,
                                v = d + Math.floor(e / 2);
                            n.lineWidth = 2, n.strokeStyle = u;
                            var y = Math.PI / 16,
                                g = -Math.PI + Math.PI / 4,
                                b = 8,
                                w = Math.floor(t - 2 * (t - r) / i) + 1;
                            o < r && (b = b * o / r);
                            for (var x, _ = Math.floor((w - r) / 2) + r, M = 0; M < 4; M++) {
                                if (n.beginPath(), o < r || o >= t) n.arc(s, v, b, M * Math.PI / 2 + g + y, M * Math.PI / 2 + g + Math.PI / 2 - 2 * y);
                                else if (o > r && o < _) {
                                    var S = _ - r,
                                        j = 3 * Math.PI / 2,
                                        O = o - r,
                                        k = j / S,
                                        C = -Math.PI + Math.PI / 4 + y + k * O;
                                    n.arc(s, v, b, Math.max(M * Math.PI / 2 + g, C), Math.max(M * Math.PI / 2 + g + Math.PI / 2 - 2 * y, C + Math.PI / 2 - 2 * y))
                                } else if (o >= _ && o < w) {
                                    S = w - _, O = o - _, k = (j = 2 * M * Math.PI / 4) / S, C = Math.PI / 2 + Math.PI / 4 + y + k * O;
                                    n.arc(s, v, b, C, C + Math.PI / 2 - 2 * y)
                                } else if (o >= w && o < (t - w) / 2 + w) {
                                    S = (t - w) / 2, O = o - w, k = (j = Math.PI / 2) / S, C = M * (Math.PI / 2) + Math.PI / 4 + y + k * O;
                                    n.arc(s, v, b, C, C + Math.PI / 2 - 2 * y)
                                } else n.arc(s, v, b, M * Math.PI / 2 + g + y, M * Math.PI / 2 + g + Math.PI / 2 - 2 * y);
                                n.stroke()
                            }
                            for (var P = 0; P < i; P++)(x = o - c * P - r) > 0 && x * l < e - 25 && (n.strokeStyle = "rgba(" + m.r + "," + m.g + "," + m.b + "," + (.9 - x * l / (e - 25)) + ")", n.lineWidth = 2, n.beginPath(), n.arc(s, v, x * l, -Math.PI / 12, Math.PI / 12), n.stroke());
                            n.fillStyle = "#000", n.beginPath(), n.arc(s, v, 3, 0, 2 * Math.PI), n.fill(), n.strokeStyle = a, n.lineWidth = 2, n.beginPath(), o < r ? n.arc(s, v, 3 * o / r, 0, 2 * Math.PI) : n.arc(s, v, 3, 0, 2 * Math.PI), n.stroke(), f += e
                        }
                    }))
                },
                a = function(t, e, n, a, u, h, c) {
                    var l, f, d, p, m = o.mapPoint(t, e);
                    m.x *= n, m.y *= n, m.z *= n;
                    var v = {
                        numWaves: 8,
                        waveColor: "#FFF",
                        coreColor: "#FF0000",
                        shieldColor: "#FFF",
                        size: 1
                    };
                    if (this.lat = t, this.lon = e, this.altitude = n, this.scene = a, this.onRemoveList = [], f = 50, 100, 10, d = Math.floor(6.25), u)
                        for (var y in v) void 0 != u[y] && (v[y] = u[y]);
                    this.opts = v, h ? (this.canvas = h, c ? this.texture = c : (this.texture = new i.Texture(this.canvas), this.texture.needsUpdate = !0, p = Math.floor(f - 2 * (f - d) / v.numWaves) + 1, this.animator = new r(this.texture, 10, 5, f, 80, p))) : (this.canvas = s(f, 100, 10, d, v.numWaves, v.waveColor, v.coreColor, v.shieldColor), this.texture = new i.Texture(this.canvas), this.texture.needsUpdate = !0, p = Math.floor(f - 2 * (f - d) / v.numWaves) + 1, this.animator = new r(this.texture, 10, 5, f, 80, p)), l = new i.PlaneGeometry(150 * v.size, 150 * v.size, 1, 1), this.material = new i.MeshBasicMaterial({
                        map: this.texture,
                        depthTest: !1,
                        transparent: !0
                    }), this.mesh = new i.Mesh(l, this.material), this.mesh.tiltMultiplier = Math.PI / 2 * (1 - Math.abs(t / 90)), this.mesh.tiltDirection = t > 0 ? -1 : 1, this.mesh.lon = e, this.mesh.position.set(m.x, m.y, m.z), this.mesh.rotation.z = t / 90 * -1 * Math.PI / 2, this.mesh.rotation.y = e / 180 * Math.PI, a.add(this.mesh)
                };
            a.prototype.changeAltitude = function(t) {
                var e = o.mapPoint(this.lat, this.lon);
                e.x *= t, e.y *= t, e.z *= t, this.altitude = t, this.mesh.position.set(e.x, e.y, e.z)
            }, a.prototype.changeCanvas = function(t, e, n, o) {
                numFrames = 50, pixels = 100, rows = 10, waveStart = Math.floor(numFrames / 8), t ? this.opts.numWaves = t : t = this.opts.numWaves, e ? this.opts.waveColor = e : e = this.opts.waveColor, n ? this.opts.coreColor = n : n = this.opts.coreColor, o ? this.opts.shieldColor = o : o = this.opts.shieldColor, this.canvas = s(numFrames, pixels, rows, waveStart, t, e, n, o), this.texture = new i.Texture(this.canvas), this.texture.needsUpdate = !0, repeatAt = Math.floor(numFrames - 2 * (numFrames - waveStart) / t) + 1, this.animator = new r(this.texture, rows, numFrames / rows, numFrames, 80, repeatAt), this.material.map = this.texture
            }, a.prototype.tick = function(t, e, n) {
                this.mesh.lookAt(t), this.mesh.rotateZ(this.mesh.tiltDirection * Math.PI / 2), this.mesh.rotateZ(Math.sin(e + this.mesh.lon / 180 * Math.PI) * this.mesh.tiltMultiplier * this.mesh.tiltDirection * -1), this.animator && this.animator.update(n)
            }, a.prototype.remove = function() {
                this.scene.remove(this.mesh);
                for (var t = 0; t < this.onRemoveList.length; t++) this.onRemoveList[t]()
            }, a.prototype.onRemove = function(t) {
                this.onRemoveList.push(t)
            }, a.prototype.toString = function() {
                return this.lat + "_" + this.lon + "_" + this.altitude
            }, t.exports = a
        },
        SntB: function(t, e, n) {
            "use strict";
            var r = n("xTJ+");
            t.exports = function(t, e) {
                e = e || {};
                var n = {},
                    i = ["url", "method", "data"],
                    o = ["headers", "auth", "proxy", "params"],
                    s = ["baseURL", "transformRequest", "transformResponse", "paramsSerializer", "timeout", "timeoutMessage", "withCredentials", "adapter", "responseType", "xsrfCookieName", "xsrfHeaderName", "onUploadProgress", "onDownloadProgress", "decompress", "maxContentLength", "maxBodyLength", "maxRedirects", "transport", "httpAgent", "httpsAgent", "cancelToken", "socketPath", "responseEncoding"],
                    a = ["validateStatus"];

                function u(t, e) {
                    return r.isPlainObject(t) && r.isPlainObject(e) ? r.merge(t, e) : r.isPlainObject(e) ? r.merge({}, e) : r.isArray(e) ? e.slice() : e
                }

                function h(i) {
                    r.isUndefined(e[i]) ? r.isUndefined(t[i]) || (n[i] = u(void 0, t[i])) : n[i] = u(t[i], e[i])
                }
                r.forEach(i, (function(t) {
                    r.isUndefined(e[t]) || (n[t] = u(void 0, e[t]))
                })), r.forEach(o, h), r.forEach(s, (function(i) {
                    r.isUndefined(e[i]) ? r.isUndefined(t[i]) || (n[i] = u(void 0, t[i])) : n[i] = u(void 0, e[i])
                })), r.forEach(a, (function(r) {
                    r in e ? n[r] = u(t[r], e[r]) : r in t && (n[r] = u(void 0, t[r]))
                }));
                var c = i.concat(o).concat(s).concat(a),
                    l = Object.keys(t).concat(Object.keys(e)).filter((function(t) {
                        return -1 === c.indexOf(t)
                    }));
                return r.forEach(l, h), n
            }
        },
        UnBK: function(t, e, n) {
            "use strict";
            var r = n("xTJ+"),
                i = n("xAGQ"),
                o = n("Lmem"),
                s = n("JEQr");

            function a(t) {
                t.cancelToken && t.cancelToken.throwIfRequested()
            }
            t.exports = function(t) {
                return a(t), t.headers = t.headers || {}, t.data = i(t.data, t.headers, t.transformRequest), t.headers = r.merge(t.headers.common || {}, t.headers[t.method] || {}, t.headers), r.forEach(["delete", "get", "head", "post", "put", "patch", "common"], (function(e) {
                    delete t.headers[e]
                })), (t.adapter || s.adapter)(t).then((function(e) {
                    return a(t), e.data = i(e.data, e.headers, t.transformResponse), e
                }), (function(e) {
                    return o(e) || (a(t), e && e.response && (e.response.data = i(e.response.data, e.response.headers, t.transformResponse))), Promise.reject(e)
                }))
            }
        },
        Wh0i: function(t, e) {
            var n = {
                fnName: function(t) {
                    var e = t.toString();
                    return e = (e = e.substr("function ".length)).substr(0, e.indexOf("("))
                },
                thrower: function(t, e, n) {
                    var r = t;
                    throw n && (r += "_" + n), e && (r += " - "), e && n && (r += n + ": "), e && (r += e), new Error(r)
                },
                getIdsOfObjects: function(t) {
                    var e = [];
                    for (var n in t) e.push(t[n].id_);
                    return e
                },
                compare: function(t, e) {
                    return t - e
                },
                arrayDiffs: function(t, e) {
                    var n = 0,
                        r = 0,
                        i = [],
                        o = [];
                    for (t.sort(this.compare), e.sort(this.compare); n < t.length && r < e.length;) t[n] !== e[r] ? t[n] < e[r] ? (i.push(t[n]), n++) : (o.push(e[r]), r++) : (n++, r++);
                    return n < t.length ? i.push.apply(i, t.slice(n, t.length)) : o.push.apply(o, e.slice(r, e.length)), [i, o]
                }
            };
            t.exports = n
        },
        Xuae: function(t, e, n) {
            "use strict";
            var r = n("RIqP"),
                i = n("lwsE"),
                o = n("W8MJ"),
                s = (n("PJYZ"), n("7W2i")),
                a = n("a1gu"),
                u = n("Nsbk");

            function h(t) {
                var e = function() {
                    if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" === typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = u(t);
                    if (e) {
                        var i = u(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else n = r.apply(this, arguments);
                    return a(this, n)
                }
            }
            e.__esModule = !0, e.default = void 0;
            var c = n("q1tI"),
                l = function(t) {
                    s(n, t);
                    var e = h(n);

                    function n(t) {
                        var o;
                        return i(this, n), (o = e.call(this, t))._hasHeadManager = void 0, o.emitChange = function() {
                            o._hasHeadManager && o.props.headManager.updateHead(o.props.reduceComponentsToState(r(o.props.headManager.mountedInstances), o.props))
                        }, o._hasHeadManager = o.props.headManager && o.props.headManager.mountedInstances, o
                    }
                    return o(n, [{
                        key: "componentDidMount",
                        value: function() {
                            this._hasHeadManager && this.props.headManager.mountedInstances.add(this), this.emitChange()
                        }
                    }, {
                        key: "componentDidUpdate",
                        value: function() {
                            this.emitChange()
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            this._hasHeadManager && this.props.headManager.mountedInstances.delete(this), this.emitChange()
                        }
                    }, {
                        key: "render",
                        value: function() {
                            return null
                        }
                    }]), n
                }(c.Component);
            e.default = l
        },
        XwJu: function(t, e, n) {
            "use strict";
            t.exports = function(t) {
                return "object" === typeof t && !0 === t.isAxiosError
            }
        },
        Y5Gq: function(t, e) {
            void 0 === Date.now && (Date.now = function() {
                return (new Date).valueOf()
            });
            var n = n || function() {
                var t = [];
                return {
                    REVISION: "13",
                    getAll: function() {
                        return t
                    },
                    removeAll: function() {
                        t = []
                    },
                    add: function(e) {
                        t.push(e)
                    },
                    remove: function(e) {
                        var n = t.indexOf(e); - 1 !== n && t.splice(n, 1)
                    },
                    update: function(e) {
                        if (0 === t.length) return !1;
                        var n = 0;
                        for (e = void 0 !== e ? e : "undefined" !== typeof window && void 0 !== window.performance && void 0 !== window.performance.now ? window.performance.now() : Date.now(); n < t.length;) t[n].update(e) ? n++ : t.splice(n, 1);
                        return !0
                    }
                }
            }();
            n.Tween = function(t) {
                var e = t,
                    r = {},
                    i = {},
                    o = {},
                    s = 1e3,
                    a = 0,
                    u = !1,
                    h = !1,
                    c = !1,
                    l = 0,
                    f = null,
                    d = n.Easing.Linear.None,
                    p = n.Interpolation.Linear,
                    m = [],
                    v = null,
                    y = !1,
                    g = null,
                    b = null,
                    w = null;
                for (var x in t) r[x] = parseFloat(t[x], 10);
                this.to = function(t, e) {
                    return void 0 !== e && (s = e), i = t, this
                }, this.start = function(t) {
                    for (var s in n.add(this), h = !0, y = !1, f = void 0 !== t ? t : "undefined" !== typeof window && void 0 !== window.performance && void 0 !== window.performance.now ? window.performance.now() : Date.now(), f += l, i) {
                        if (i[s] instanceof Array) {
                            if (0 === i[s].length) continue;
                            i[s] = [e[s]].concat(i[s])
                        }
                        r[s] = e[s], r[s] instanceof Array === !1 && (r[s] *= 1), o[s] = r[s] || 0
                    }
                    return this
                }, this.stop = function() {
                    return h ? (n.remove(this), h = !1, null !== w && w.call(e), this.stopChainedTweens(), this) : this
                }, this.stopChainedTweens = function() {
                    for (var t = 0, e = m.length; t < e; t++) m[t].stop()
                }, this.delay = function(t) {
                    return l = t, this
                }, this.repeat = function(t) {
                    return a = t, this
                }, this.yoyo = function(t) {
                    return u = t, this
                }, this.easing = function(t) {
                    return d = t, this
                }, this.interpolation = function(t) {
                    return p = t, this
                }, this.chain = function() {
                    return m = arguments, this
                }, this.onStart = function(t) {
                    return v = t, this
                }, this.onUpdate = function(t) {
                    return g = t, this
                }, this.onComplete = function(t) {
                    return b = t, this
                }, this.onStop = function(t) {
                    return w = t, this
                }, this.update = function(t) {
                    var n;
                    if (t < f) return !0;
                    !1 === y && (null !== v && v.call(e), y = !0);
                    var h = (t - f) / s,
                        w = d(h = h > 1 ? 1 : h);
                    for (n in i) {
                        var x = r[n] || 0,
                            _ = i[n];
                        _ instanceof Array ? e[n] = p(_, w) : ("string" === typeof _ && (_ = x + parseFloat(_, 10)), "number" === typeof _ && (e[n] = x + (_ - x) * w))
                    }
                    if (null !== g && g.call(e, w), 1 == h) {
                        if (a > 0) {
                            for (n in isFinite(a) && a--, o) {
                                if ("string" === typeof i[n] && (o[n] = o[n] + parseFloat(i[n], 10)), u) {
                                    var M = o[n];
                                    o[n] = i[n], i[n] = M
                                }
                                r[n] = o[n]
                            }
                            return u && (c = !c), f = t + l, !0
                        }
                        null !== b && b.call(e);
                        for (var S = 0, j = m.length; S < j; S++) m[S].start(t);
                        return !1
                    }
                    return !0
                }
            }, n.Easing = {
                Linear: {
                    None: function(t) {
                        return t
                    }
                },
                Quadratic: {
                    In: function(t) {
                        return t * t
                    },
                    Out: function(t) {
                        return t * (2 - t)
                    },
                    InOut: function(t) {
                        return (t *= 2) < 1 ? .5 * t * t : -.5 * (--t * (t - 2) - 1)
                    }
                },
                Cubic: {
                    In: function(t) {
                        return t * t * t
                    },
                    Out: function(t) {
                        return --t * t * t + 1
                    },
                    InOut: function(t) {
                        return (t *= 2) < 1 ? .5 * t * t * t : .5 * ((t -= 2) * t * t + 2)
                    }
                },
                Quartic: {
                    In: function(t) {
                        return t * t * t * t
                    },
                    Out: function(t) {
                        return 1 - --t * t * t * t
                    },
                    InOut: function(t) {
                        return (t *= 2) < 1 ? .5 * t * t * t * t : -.5 * ((t -= 2) * t * t * t - 2)
                    }
                },
                Quintic: {
                    In: function(t) {
                        return t * t * t * t * t
                    },
                    Out: function(t) {
                        return --t * t * t * t * t + 1
                    },
                    InOut: function(t) {
                        return (t *= 2) < 1 ? .5 * t * t * t * t * t : .5 * ((t -= 2) * t * t * t * t + 2)
                    }
                },
                Sinusoidal: {
                    In: function(t) {
                        return 1 - Math.cos(t * Math.PI / 2)
                    },
                    Out: function(t) {
                        return Math.sin(t * Math.PI / 2)
                    },
                    InOut: function(t) {
                        return .5 * (1 - Math.cos(Math.PI * t))
                    }
                },
                Exponential: {
                    In: function(t) {
                        return 0 === t ? 0 : Math.pow(1024, t - 1)
                    },
                    Out: function(t) {
                        return 1 === t ? 1 : 1 - Math.pow(2, -10 * t)
                    },
                    InOut: function(t) {
                        return 0 === t ? 0 : 1 === t ? 1 : (t *= 2) < 1 ? .5 * Math.pow(1024, t - 1) : .5 * (2 - Math.pow(2, -10 * (t - 1)))
                    }
                },
                Circular: {
                    In: function(t) {
                        return 1 - Math.sqrt(1 - t * t)
                    },
                    Out: function(t) {
                        return Math.sqrt(1 - --t * t)
                    },
                    InOut: function(t) {
                        return (t *= 2) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
                    }
                },
                Elastic: {
                    In: function(t) {
                        var e, n = .1;
                        return 0 === t ? 0 : 1 === t ? 1 : (!n || n < 1 ? (n = 1, e = .1) : e = .4 * Math.asin(1 / n) / (2 * Math.PI), -n * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / .4))
                    },
                    Out: function(t) {
                        var e, n = .1;
                        return 0 === t ? 0 : 1 === t ? 1 : (!n || n < 1 ? (n = 1, e = .1) : e = .4 * Math.asin(1 / n) / (2 * Math.PI), n * Math.pow(2, -10 * t) * Math.sin((t - e) * (2 * Math.PI) / .4) + 1)
                    },
                    InOut: function(t) {
                        var e, n = .1,
                            r = .4;
                        return 0 === t ? 0 : 1 === t ? 1 : (!n || n < 1 ? (n = 1, e = .1) : e = r * Math.asin(1 / n) / (2 * Math.PI), (t *= 2) < 1 ? n * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / r) * -.5 : n * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / r) * .5 + 1)
                    }
                },
                Back: {
                    In: function(t) {
                        var e = 1.70158;
                        return t * t * ((e + 1) * t - e)
                    },
                    Out: function(t) {
                        var e = 1.70158;
                        return --t * t * ((e + 1) * t + e) + 1
                    },
                    InOut: function(t) {
                        var e = 2.5949095;
                        return (t *= 2) < 1 ? t * t * ((e + 1) * t - e) * .5 : .5 * ((t -= 2) * t * ((e + 1) * t + e) + 2)
                    }
                },
                Bounce: {
                    In: function(t) {
                        return 1 - n.Easing.Bounce.Out(1 - t)
                    },
                    Out: function(t) {
                        return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
                    },
                    InOut: function(t) {
                        return t < .5 ? .5 * n.Easing.Bounce.In(2 * t) : .5 * n.Easing.Bounce.Out(2 * t - 1) + .5
                    }
                }
            }, n.Interpolation = {
                Linear: function(t, e) {
                    var r = t.length - 1,
                        i = r * e,
                        o = Math.floor(i),
                        s = n.Interpolation.Utils.Linear;
                    return e < 0 ? s(t[0], t[1], i) : e > 1 ? s(t[r], t[r - 1], r - i) : s(t[o], t[o + 1 > r ? r : o + 1], i - o)
                },
                Bezier: function(t, e) {
                    var r, i = 0,
                        o = t.length - 1,
                        s = Math.pow,
                        a = n.Interpolation.Utils.Bernstein;
                    for (r = 0; r <= o; r++) i += s(1 - e, o - r) * s(e, r) * t[r] * a(o, r);
                    return i
                },
                CatmullRom: function(t, e) {
                    var r = t.length - 1,
                        i = r * e,
                        o = Math.floor(i),
                        s = n.Interpolation.Utils.CatmullRom;
                    return t[0] === t[r] ? (e < 0 && (o = Math.floor(i = r * (1 + e))), s(t[(o - 1 + r) % r], t[o], t[(o + 1) % r], t[(o + 2) % r], i - o)) : e < 0 ? t[0] - (s(t[0], t[0], t[1], t[1], -i) - t[0]) : e > 1 ? t[r] - (s(t[r], t[r], t[r - 1], t[r - 1], i - r) - t[r]) : s(t[o ? o - 1 : 0], t[o], t[r < o + 1 ? r : o + 1], t[r < o + 2 ? r : o + 2], i - o)
                },
                Utils: {
                    Linear: function(t, e, n) {
                        return (e - t) * n + t
                    },
                    Bernstein: function(t, e) {
                        var r = n.Interpolation.Utils.Factorial;
                        return r(t) / r(e) / r(t - e)
                    },
                    Factorial: function() {
                        var t = [1];
                        return function(e) {
                            var n, r = 1;
                            if (t[e]) return t[e];
                            for (n = e; n > 1; n--) r *= n;
                            return t[e] = r
                        }
                    }(),
                    CatmullRom: function(t, e, n, r, i) {
                        var o = .5 * (n - t),
                            s = .5 * (r - e),
                            a = i * i;
                        return (2 * e - 2 * n + o + s) * (i * a) + (-3 * e + 3 * n - 2 * o - s) * a + o * i + e
                    }
                }
            }, t.exports = n
        },
        ak1v: function(t, e, n) {
            n("5Lr+");
            var r = n("Wh0i"),
                i = function() {};
            i.prototype = {
                isNumber: function(t, e) {
                    "number" !== typeof t && r.thrower("NaN", "Not a Number", e)
                },
                isString: function(t, e) {
                    "string" === typeof t || t instanceof String || r.thrower("NaS", "Not a String", e)
                },
                isVec2: function(t, e) {
                    ("object" !== typeof t || void 0 === t.x || void 0 === t.y) && r.thrower("NaV", "Not a Vec2", e)
                },
                isDefined: function(t, e) {
                    void 0 === t && r.thrower("ND", "Not defined", e)
                },
                isObject: function(t, e) {
                    "object" !== typeof t && r.thrower("NaO", "Not an Object", e)
                },
                hasKey: function(t, e, n) {
                    this.isDefined(t, "obj"), -1 === Object.keys(t).indexOf(e.toString()) && r.thrower("OhnK", "Object has no key", n + e)
                },
                hasNoKey: function(t, e, n) {
                    this.isDefined(t, "obj"), -1 !== Object.keys(t).indexOf(e.toString()) && r.thrower("OhK", "Object has key", n + e)
                },
                fnFalse: function(t) {
                    t() && r.thrower("FarT", "function already returns true", r.fnName(t))
                },
                byCallbackObject: function(t, e, n) {
                    var r;
                    for (r in e) void 0 !== n ? e[r](t[n[r]], n[r]) : e[r](t[r], r)
                }
            }, t.exports = i
        },
        endd: function(t, e, n) {
            "use strict";

            function r(t) {
                this.message = t
            }
            r.prototype.toString = function() {
                return "Cancel" + (this.message ? ": " + this.message : "")
            }, r.prototype.__CANCEL__ = !0, t.exports = r
        },
        eqyj: function(t, e, n) {
            "use strict";
            var r = n("xTJ+");
            t.exports = r.isStandardBrowserEnv() ? {
                write: function(t, e, n, i, o, s) {
                    var a = [];
                    a.push(t + "=" + encodeURIComponent(e)), r.isNumber(n) && a.push("expires=" + new Date(n).toGMTString()), r.isString(i) && a.push("path=" + i), r.isString(o) && a.push("domain=" + o), !0 === s && a.push("secure"), document.cookie = a.join("; ")
                },
                read: function(t) {
                    var e = document.cookie.match(new RegExp("(^|;\\s*)(" + t + ")=([^;]*)"));
                    return e ? decodeURIComponent(e[3]) : null
                },
                remove: function(t) {
                    this.write(t, "", Date.now() - 864e5)
                }
            } : {
                write: function() {},
                read: function() {
                    return null
                },
                remove: function() {}
            }
        },
        ervw: function(t, e, n) {
            n("Ra2f");

            function r(t, e) {
                return {
                    x: e.x - t.x,
                    y: e.y - t.y,
                    z: e.z - t.z
                }
            }
            var i = function(t, e) {
                void 0 == e && (e = 1), e = Math.max(.01, Math.min(1, e)), this.centerPoint = t, this.faces = t.getOrderedFaces(), this.boundary = [], this.neighborIds = [], this.neighbors = [];
                for (var n = {}, i = 0; i < this.faces.length; i++) {
                    this.boundary.push(this.faces[i].getCentroid().segment(this.centerPoint, e));
                    for (var o = this.faces[i].getOtherPoints(this.centerPoint), s = 0; s < 2; s++) n[o[s]] = 1
                }
                this.neighborIds = Object.keys(n);
                var a, u, h, c, l, f = (a = this.boundary[1], u = this.boundary[2], h = this.boundary[3], U = r(a, u), V = r(a, h), N = {
                    x: U.y * V.z - U.z * V.y,
                    y: U.z * V.x - U.x * V.z,
                    z: U.x * V.y - U.y * V.x
                }, N);
                c = this.centerPoint, l = f, c.x * l.x >= 0 && c.y * l.y >= 0 && c.z * l.z >= 0 || this.boundary.reverse()
            };
            i.prototype.getLatLon = function(t, e) {
                var n = this.centerPoint;
                "number" == typeof e && e < this.boundary.length && (n = this.boundary[e]);
                var r = Math.acos(n.y / t),
                    i = (Math.atan2(n.x, n.z) + Math.PI + Math.PI / 2) % (2 * Math.PI) - Math.PI;
                return {
                    lat: 180 * r / Math.PI - 90,
                    lon: 180 * i / Math.PI
                }
            }, i.prototype.scaledBoundary = function(t) {
                t = Math.max(0, Math.min(1, t));
                for (var e = [], n = 0; n < this.boundary.length; n++) e.push(this.centerPoint.segment(this.boundary[n], 1 - t));
                return e
            }, i.prototype.toJson = function() {
                return {
                    centerPoint: this.centerPoint.toJson(),
                    boundary: this.boundary.map((function(t) {
                        return t.toJson()
                    }))
                }
            }, i.prototype.toString = function() {
                return this.centerPoint.toString()
            }, t.exports = i
        },
        g0yK: function(t, e, n) {
            var r = n("f+2g"),
                i = n("Y5Gq"),
                o = n("AaLD"),
                s = function(t, e, n, s, a, u, h) {
                    var c, l, f, d, p, m, v, y, g = {
                        lineColor: "#8FD8D8",
                        lineWidth: 1,
                        topColor: "#8FD8D8",
                        smokeColor: "#FFF",
                        labelColor: "#FFF",
                        font: "Inconsolata",
                        showLabel: n.length > 0,
                        showTop: n.length > 0,
                        showSmoke: n.length > 0
                    };
                    if (this.lat = t, this.lon = e, this.text = n, this.altitude = s, this.scene = a, this.smokeProvider = u, this.dateCreated = Date.now(), h)
                        for (var b in g) void 0 != h[b] && (g[b] = h[b]);
                    this.opts = g, this.topVisible = g.showTop, this.smokeVisible = g.showSmoke, this.labelVisible = g.showLabel, this.lineGeometry = new r.Geometry, c = new r.LineBasicMaterial({
                        color: g.lineColor,
                        linewidth: g.lineWidth
                    }), v = o.mapPoint(t, e), this.lineGeometry.vertices.push(new r.Vector3(v.x, v.y, v.z)), this.lineGeometry.vertices.push(new r.Vector3(v.x, v.y, v.z)), this.line = new r.Line(this.lineGeometry, c), l = o.createLabel(n, 18, g.labelColor, g.font), (f = new r.Texture(l)).needsUpdate = !0, d = new r.SpriteMaterial({
                        map: f,
                        useScreenCoordinates: !1,
                        opacity: 0,
                        depthTest: !0,
                        fog: !0
                    }), this.labelSprite = new r.Sprite(d), this.labelSprite.position = {
                        x: v.x * s * 1.1,
                        y: v.y * s + (v.y < 0 ? -15 : 30),
                        z: v.z * s * 1.1
                    }, this.labelSprite.scale.set(l.width, l.height), (p = new r.Texture((y = g.topColor, o.renderToCanvas(20, 20, (function(t) {
                        t.fillStyle = y, t.beginPath(), t.arc(10, 10, 5, 0, 2 * Math.PI), t.fill()
                    }))))).needsUpdate = !0, m = new r.SpriteMaterial({
                        map: p,
                        depthTest: !0,
                        fog: !0,
                        opacity: 0
                    }), this.topSprite = new r.Sprite(m), this.topSprite.scale.set(20, 20), this.topSprite.position.set(v.x * s, v.y * s, v.z * s), this.smokeVisible && (this.smokeId = u.setFire(t, e, s));
                    var w = this;
                    (g.showTop || g.showLabel) && new i.Tween({
                        opacity: 0
                    }).to({
                        opacity: 1
                    }, 500).onUpdate((function() {
                        w.topVisible ? m.opacity = this.opacity : m.opacity = 0, w.labelVisible ? d.opacity = this.opacity : d.opacity = 0
                    })).delay(1e3).start(), new i.Tween(v).to({
                        x: v.x * s,
                        y: v.y * s,
                        z: v.z * s
                    }, 1500).easing(i.Easing.Elastic.Out).onUpdate((function() {
                        w.lineGeometry.vertices[1].x = this.x, w.lineGeometry.vertices[1].y = this.y, w.lineGeometry.vertices[1].z = this.z, w.lineGeometry.verticesNeedUpdate = !0
                    })).start(), this.scene.add(this.labelSprite), this.scene.add(this.line), this.scene.add(this.topSprite)
                };
            s.prototype.toString = function() {
                return this.lat + "_" + this.lon
            }, s.prototype.changeAltitude = function(t) {
                var e = o.mapPoint(this.lat, this.lon),
                    n = this;
                new i.Tween({
                    altitude: this.altitude
                }).to({
                    altitude: t
                }, 1500).easing(i.Easing.Elastic.Out).onUpdate((function() {
                    n.smokeVisible && n.smokeProvider.changeAltitude(this.altitude, n.smokeId), n.topVisible && n.topSprite.position.set(e.x * this.altitude, e.y * this.altitude, e.z * this.altitude), n.labelVisible && (n.labelSprite.position = {
                        x: e.x * this.altitude * 1.1,
                        y: e.y * this.altitude + (e.y < 0 ? -15 : 30),
                        z: e.z * this.altitude * 1.1
                    }), n.lineGeometry.vertices[1].x = e.x * this.altitude, n.lineGeometry.vertices[1].y = e.y * this.altitude, n.lineGeometry.vertices[1].z = e.z * this.altitude, n.lineGeometry.verticesNeedUpdate = !0
                })).onComplete((function() {
                    n.altitude = t
                })).start()
            }, s.prototype.hideTop = function() {
                this.topVisible && (this.topSprite.material.opacity = 0, this.topVisible = !1)
            }, s.prototype.showTop = function() {
                this.topVisible || (this.topSprite.material.opacity = 1, this.topVisible = !0)
            }, s.prototype.hideLabel = function() {
                this.labelVisible && (this.labelSprite.material.opacity = 0, this.labelVisible = !1)
            }, s.prototype.showLabel = function() {
                this.labelVisible || (this.labelSprite.material.opacity = 1, this.labelVisible = !0)
            }, s.prototype.hideSmoke = function() {
                this.smokeVisible && (this.smokeProvider.extinguish(this.smokeId), this.smokeVisible = !1)
            }, s.prototype.showSmoke = function() {
                this.smokeVisible || (this.smokeId = this.smokeProvider.setFire(this.lat, this.lon, this.altitude), this.smokeVisible = !0)
            }, s.prototype.age = function() {
                return Date.now() - this.dateCreated
            }, s.prototype.remove = function() {
                this.scene.remove(this.labelSprite), this.scene.remove(this.line), this.scene.remove(this.topSprite), this.smokeVisible && this.smokeProvider.extinguish(this.smokeId)
            }, t.exports = s
        },
        g4pe: function(t, e, n) {
            t.exports = n("8Kt/")
        },
        g7np: function(t, e, n) {
            "use strict";
            var r = n("2SVd"),
                i = n("5oMp");
            t.exports = function(t, e) {
                return t && !r(e) ? i(t, e) : e
            }
        },
        gGJl: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return s
            }));
            var r = n("nKUr"),
                i = n("g4pe"),
                o = n.n(i);

            function s() {
                return Object(r.jsxs)(o.a, {
                    children: [Object(r.jsx)("meta", {
                        name: "title",
                        content: "RoDaBaFilms"
                    }), Object(r.jsx)("meta", {
                        name: "description",
                        content: "Welcome to my portfolio website. Nothing much to see here except a few projects I have worked on and my socials."
                    }), Object(r.jsx)("meta", {
                        property: "og:type",
                        content: "website"
                    }), Object(r.jsx)("meta", {
                        property: "og:url",
                        content: "https://rodabafilms.com/"
                    }), Object(r.jsx)("meta", {
                        property: "og:title",
                        content: "RoDaBaFilms"
                    }), Object(r.jsx)("meta", {
                        property: "og:description",
                        content: "Welcome to my portfolio website. Nothing much to see here except a few projects I have worked on and my socials."
                    }), Object(r.jsx)("meta", {
                        property: "og:image",
                        content: "https://rodabafilms.com/background-blend.png"
                    }), Object(r.jsx)("meta", {
                        property: "twitter:card",
                        content: "summary_large_image"
                    }), Object(r.jsx)("meta", {
                        property: "twitter:url",
                        content: "https://rodabafilms.com/"
                    }), Object(r.jsx)("meta", {
                        property: "twitter:title",
                        content: "RoDaBaFilms"
                    }), Object(r.jsx)("meta", {
                        property: "twitter:description",
                        content: "Welcome to my portfolio website. Nothing much to see here except a few projects I have worked on and my socials."
                    }), Object(r.jsx)("meta", {
                        property: "twitter:image",
                        content: "https://rodabafilms.com/background-blend.png"
                    }), Object(r.jsx)("meta", {
                        name: "description",
                        content: "Welcome to my portfolio website. Nothing much to see here except a few projects I have worked on and my socials."
                    }), Object(r.jsx)("meta", {
                        name: "robots",
                        content: "index, follow"
                    }), Object(r.jsx)("meta", {
                        name: "author",
                        content: "RoDaBaFilms"
                    })]
                })
            }
        },
        "jfS+": function(t, e, n) {
            "use strict";
            var r = n("endd");

            function i(t) {
                if ("function" !== typeof t) throw new TypeError("executor must be a function.");
                var e;
                this.promise = new Promise((function(t) {
                    e = t
                }));
                var n = this;
                t((function(t) {
                    n.reason || (n.reason = new r(t), e(n.reason))
                }))
            }
            i.prototype.throwIfRequested = function() {
                if (this.reason) throw this.reason
            }, i.source = function() {
                var t;
                return {
                    token: new i((function(e) {
                        t = e
                    })),
                    cancel: t
                }
            }, t.exports = i
        },
        lSNA: function(t, e) {
            t.exports = function(t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t
            }
        },
        lwAK: function(t, e, n) {
            "use strict";
            var r;
            e.__esModule = !0, e.AmpStateContext = void 0;
            var i = ((r = n("q1tI")) && r.__esModule ? r : {
                default: r
            }).default.createContext({});
            e.AmpStateContext = i
        },
        m4wL: function(t, e) {
            var n = function(t, e, n, r) {
                this.leftTop_ = t.clone(), this.children_ = [], this.objects_ = {}, this.objectCount_ = 0, this.id_ = n || 0, this.parent_ = r, this.refactoring_ = !1, this.setSize(e)
            };
            n.prototype = {
                setSize: function(t) {
                    t && (this.size_ = t, this.rad_ = t.multiply(.5, !0), this.center_ = this.leftTop_.add(this.rad_, !0), this.leftBot_ = this.leftTop_.clone(), this.leftBot_.y += t.y, this.rightTop_ = this.leftTop_.clone(), this.rightTop_.x += t.x, this.rightBot_ = this.leftTop_.add(t, !0), this.leftMid_ = this.center_.clone(), this.leftMid_.x = this.leftTop_.x, this.topMid_ = this.center_.clone(), this.topMid_.y = this.leftTop_.y)
                },
                makeChildren: function(t) {
                    return !(this.children_.length > 0) && (this.children_.push(new n(this.leftTop_, this.rad_, t++, this), new n(this.topMid_, this.rad_, t++, this), new n(this.leftMid_, this.rad_, t++, this), new n(this.center_, this.rad_, t++, this)), t)
                },
                looseChildren: function() {
                    this.children_ = []
                },
                addObjects: function(t) {
                    var e;
                    for (e in t) this.addObject(e, t[e])
                },
                addObject: function(t, e) {
                    this.objectCount_++, this.objects_[t] = e
                },
                removeObjects: function(t, e) {
                    var n;
                    for (n in t || (t = []), this.objects_) t.push({
                        obj: this.objects_[n],
                        quadrant: this
                    }), delete this.objects_[n];
                    return this.objectCount_ = 0, e && 1 !== e || this.parent_ && this.parent_.removeObjects(t, 1), e && -1 !== e || this.children_.forEach((function(e) {
                        e.removeObjects(t, -1)
                    })), t
                },
                removeObject: function(t) {
                    var e = this.objects_[t];
                    return this.objectCount_--, delete this.objects_[t], e
                },
                getObjectCountForLimit: function() {
                    var t, e, n = {};
                    for (e in this.objects_) n[e] = !0;
                    for (t = 0; t < this.children_.length; t++)
                        for (e in this.children_[t].objects_) n[e] = !0;
                    return Object.keys(n).length
                },
                getObjectCount: function(t, e) {
                    var n = this.objectCount_;
                    return t && this.children_.forEach((function(r) {
                        n += r.getObjectCount(!e && t)
                    })), n
                },
                intersectingChildren: function(t, e) {
                    return this.children_.filter((function(n) {
                        return n.intersects(t, e)
                    }))
                },
                intersects: function(t, e) {
                    var n = t.subtract(this.center_, !0).abs();
                    return !(n.x > this.rad_.x + e) && (!(n.y > this.rad_.y + e) && (n.x <= this.rad_.x || (n.y <= this.rad_.y || (cornerDistSq = Math.pow(n.x - this.rad_.x, 2) + Math.pow(n.y - this.rad_.y, 2), cornerDistSq <= Math.pow(e, 2)))))
                },
                hasChildren: function() {
                    return 0 !== this.getChildCount()
                },
                getChildCount: function(t) {
                    var e = this.children_.length;
                    return t && this.children_.forEach((function(n) {
                        e += n.getChildCount(t)
                    })), e
                },
                getChildren: function(t, e) {
                    return e || (e = []), e.push.apply(e, this.children_), t && this.children_.forEach((function(n) {
                        n.getChildren(t, e)
                    })), e
                },
                getObjectsUp: function(t) {
                    var e;
                    if (!t.quadrants[this.id_]) {
                        for (e in t.quadrants[this.id_] = !0, this.objects_) t.objects[e] = this.objects_[e];
                        this.parent_ && this.parent_.getObjectsUp(t)
                    }
                },
                getObjectsDown: function(t) {
                    var e;
                    if (!t.quadrants[this.id_]) {
                        for (e in t.quadrants[this.id_] = !0, this.objects_) t.objects[e] = this.objects_[e];
                        for (e = 0; e < this.children_.length; e++) this.children_[e].getObjectsDown(t)
                    }
                }
            }, t.exports = n
        },
        tQ2B: function(t, e, n) {
            "use strict";
            var r = n("xTJ+"),
                i = n("Rn+g"),
                o = n("eqyj"),
                s = n("MLWZ"),
                a = n("g7np"),
                u = n("w0Vi"),
                h = n("OTTw"),
                c = n("LYNF");
            t.exports = function(t) {
                return new Promise((function(e, n) {
                    var l = t.data,
                        f = t.headers;
                    r.isFormData(l) && delete f["Content-Type"];
                    var d = new XMLHttpRequest;
                    if (t.auth) {
                        var p = t.auth.username || "",
                            m = t.auth.password ? unescape(encodeURIComponent(t.auth.password)) : "";
                        f.Authorization = "Basic " + btoa(p + ":" + m)
                    }
                    var v = a(t.baseURL, t.url);
                    if (d.open(t.method.toUpperCase(), s(v, t.params, t.paramsSerializer), !0), d.timeout = t.timeout, d.onreadystatechange = function() {
                            if (d && 4 === d.readyState && (0 !== d.status || d.responseURL && 0 === d.responseURL.indexOf("file:"))) {
                                var r = "getAllResponseHeaders" in d ? u(d.getAllResponseHeaders()) : null,
                                    o = {
                                        data: t.responseType && "text" !== t.responseType ? d.response : d.responseText,
                                        status: d.status,
                                        statusText: d.statusText,
                                        headers: r,
                                        config: t,
                                        request: d
                                    };
                                i(e, n, o), d = null
                            }
                        }, d.onabort = function() {
                            d && (n(c("Request aborted", t, "ECONNABORTED", d)), d = null)
                        }, d.onerror = function() {
                            n(c("Network Error", t, null, d)), d = null
                        }, d.ontimeout = function() {
                            var e = "timeout of " + t.timeout + "ms exceeded";
                            t.timeoutErrorMessage && (e = t.timeoutErrorMessage), n(c(e, t, "ECONNABORTED", d)), d = null
                        }, r.isStandardBrowserEnv()) {
                        var y = (t.withCredentials || h(v)) && t.xsrfCookieName ? o.read(t.xsrfCookieName) : void 0;
                        y && (f[t.xsrfHeaderName] = y)
                    }
                    if ("setRequestHeader" in d && r.forEach(f, (function(t, e) {
                            "undefined" === typeof l && "content-type" === e.toLowerCase() ? delete f[e] : d.setRequestHeader(e, t)
                        })), r.isUndefined(t.withCredentials) || (d.withCredentials = !!t.withCredentials), t.responseType) try {
                        d.responseType = t.responseType
                    } catch (g) {
                        if ("json" !== t.responseType) throw g
                    }
                    "function" === typeof t.onDownloadProgress && d.addEventListener("progress", t.onDownloadProgress), "function" === typeof t.onUploadProgress && d.upload && d.upload.addEventListener("progress", t.onUploadProgress), t.cancelToken && t.cancelToken.promise.then((function(t) {
                        d && (d.abort(), n(t), d = null)
                    })), l || (l = null), d.send(l)
                }))
            }
        },
        "uN/N": function(t, e, n) {
            var r = n("ervw"),
                i = n("PHPW"),
                o = n("Ra2f"),
                s = function(t, e, n) {
                    this.radius = t;
                    for (var s = 1.61803399, a = [new o(1e3, 1e3 * s, 0), new o(-1e3, 1e3 * s, 0), new o(1e3, 1e3 * -s, 0), new o(-1e3, 1e3 * -s, 0), new o(0, 1e3, 1e3 * s), new o(0, -1e3, 1e3 * s), new o(0, 1e3, 1e3 * -s), new o(0, -1e3, 1e3 * -s), new o(1e3 * s, 0, 1e3), new o(1e3 * -s, 0, 1e3), new o(1e3 * s, 0, -1e3), new o(1e3 * -s, 0, -1e3)], u = {}, h = 0; h < a.length; h++) u[a[h]] = a[h];
                    for (var c = [new i(a[0], a[1], a[4], !1), new i(a[1], a[9], a[4], !1), new i(a[4], a[9], a[5], !1), new i(a[5], a[9], a[3], !1), new i(a[2], a[3], a[7], !1), new i(a[3], a[2], a[5], !1), new i(a[7], a[10], a[2], !1), new i(a[0], a[8], a[10], !1), new i(a[0], a[4], a[8], !1), new i(a[8], a[2], a[10], !1), new i(a[8], a[4], a[5], !1), new i(a[8], a[5], a[2], !1), new i(a[1], a[0], a[6], !1), new i(a[11], a[1], a[6], !1), new i(a[3], a[9], a[11], !1), new i(a[6], a[10], a[7], !1), new i(a[3], a[11], a[7], !1), new i(a[11], a[6], a[7], !1), new i(a[6], a[0], a[10], !1), new i(a[9], a[1], a[11], !1)], l = function(t) {
                            return u[t] ? u[t] : (u[t] = t, t)
                        }, f = [], d = 0; d < c.length; d++) {
                        var p = null,
                            m = [c[d].points[0]],
                            v = c[d].points[0].subdivide(c[d].points[1], e, l),
                            y = c[d].points[0].subdivide(c[d].points[2], e, l);
                        for (h = 1; h <= e; h++) {
                            p = m, m = v[h].subdivide(y[h], h, l);
                            for (var g = 0; g < h; g++) {
                                var b = new i(p[g], m[g], m[g + 1]);
                                f.push(b), g > 0 && (b = new i(p[g - 1], p[g], m[g]), f.push(b))
                            }
                        }
                    }
                    c = f;
                    var w = {};
                    for (var x in u) {
                        var _ = u[x].project(t);
                        w[_] = _
                    }
                    for (var x in u = w, this.tiles = [], this.tileLookup = {}, u) {
                        var M = new r(u[x], n);
                        this.tiles.push(M), this.tileLookup[M.toString()] = M
                    }
                    for (var S in this.tiles) {
                        var j = this;
                        this.tiles[S].neighbors = this.tiles[S].neighborIds.map((function(t) {
                            return j.tileLookup[t]
                        }))
                    }
                };
            s.prototype.toJson = function() {
                return JSON.stringify({
                    radius: this.radius,
                    tiles: this.tiles.map((function(t) {
                        return t.toJson()
                    }))
                })
            }, s.prototype.toObj = function() {
                for (var t = [], e = [], n = "# vertices \n", r = {}, i = 0; i < this.tiles.length; i++) {
                    for (var o = this.tiles[i], s = [], a = 0; a < o.boundary.length; a++) {
                        var u = r[o.boundary[a]];
                        void 0 == u && (t.push(o.boundary[a]), u = t.length, r[o.boundary[a]] = u), s.push(u)
                    }
                    e.push(s)
                }
                for (i = 0; i < t.length; i++) n += "v " + t[i].x + " " + t[i].y + " " + t[i].z + "\n";
                n += "\n# faces\n";
                for (i = 0; i < e.length; i++) {
                    faceString = "f";
                    for (a = 0; a < e[i].length; a++) faceString = faceString + " " + e[i][a];
                    n += faceString + "\n"
                }
                return n
            }, t.exports = s
        },
        vDqi: function(t, e, n) {
            t.exports = n("zuR4")
        },
        vRNQ: function(t, e, n) {
            t.exports = {
                container: "Home_container__1EcsU",
                main: "Home_main__1x8gC",
                footer: "Home_footer__1WdhD",
                title: "Home_title__3DjR7",
                description: "Home_description__17Z4F",
                code: "Home_code__axx2Y",
                grid: "Home_grid__2Ei2F",
                card: "Home_card__2SdtB",
                logo: "Home_logo__1YbrH",
                sgrid: "Home_sgrid__3XqCH",
                scard: "Home_scard__3dx67",
                "content-container": "Home_content-container__2lZMH",
                back: "Home_back__1-q8T",
                socials: "Home_socials__1N58a",
                swag: "Home_swag__M2uEa",
                toast: "Home_toast__lmeB3",
                globe: "Home_globe__1JVaj"
            }
        },
        w0Vi: function(t, e, n) {
            "use strict";
            var r = n("xTJ+"),
                i = ["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"];
            t.exports = function(t) {
                var e, n, o, s = {};
                return t ? (r.forEach(t.split("\n"), (function(t) {
                    if (o = t.indexOf(":"), e = r.trim(t.substr(0, o)).toLowerCase(), n = r.trim(t.substr(o + 1)), e) {
                        if (s[e] && i.indexOf(e) >= 0) return;
                        s[e] = "set-cookie" === e ? (s[e] ? s[e] : []).concat([n]) : s[e] ? s[e] + ", " + n : n
                    }
                })), s) : s
            }
        },
        xAGQ: function(t, e, n) {
            "use strict";
            var r = n("xTJ+");
            t.exports = function(t, e, n) {
                return r.forEach(n, (function(n) {
                    t = n(t, e)
                })), t
            }
        },
        "xTJ+": function(t, e, n) {
            "use strict";
            var r = n("HSsa"),
                i = Object.prototype.toString;

            function o(t) {
                return "[object Array]" === i.call(t)
            }

            function s(t) {
                return "undefined" === typeof t
            }

            function a(t) {
                return null !== t && "object" === typeof t
            }

            function u(t) {
                if ("[object Object]" !== i.call(t)) return !1;
                var e = Object.getPrototypeOf(t);
                return null === e || e === Object.prototype
            }

            function h(t) {
                return "[object Function]" === i.call(t)
            }

            function c(t, e) {
                if (null !== t && "undefined" !== typeof t)
                    if ("object" !== typeof t && (t = [t]), o(t))
                        for (var n = 0, r = t.length; n < r; n++) e.call(null, t[n], n, t);
                    else
                        for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && e.call(null, t[i], i, t)
            }
            t.exports = {
                isArray: o,
                isArrayBuffer: function(t) {
                    return "[object ArrayBuffer]" === i.call(t)
                },
                isBuffer: function(t) {
                    return null !== t && !s(t) && null !== t.constructor && !s(t.constructor) && "function" === typeof t.constructor.isBuffer && t.constructor.isBuffer(t)
                },
                isFormData: function(t) {
                    return "undefined" !== typeof FormData && t instanceof FormData
                },
                isArrayBufferView: function(t) {
                    return "undefined" !== typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(t) : t && t.buffer && t.buffer instanceof ArrayBuffer
                },
                isString: function(t) {
                    return "string" === typeof t
                },
                isNumber: function(t) {
                    return "number" === typeof t
                },
                isObject: a,
                isPlainObject: u,
                isUndefined: s,
                isDate: function(t) {
                    return "[object Date]" === i.call(t)
                },
                isFile: function(t) {
                    return "[object File]" === i.call(t)
                },
                isBlob: function(t) {
                    return "[object Blob]" === i.call(t)
                },
                isFunction: h,
                isStream: function(t) {
                    return a(t) && h(t.pipe)
                },
                isURLSearchParams: function(t) {
                    return "undefined" !== typeof URLSearchParams && t instanceof URLSearchParams
                },
                isStandardBrowserEnv: function() {
                    return ("undefined" === typeof navigator || "ReactNative" !== navigator.product && "NativeScript" !== navigator.product && "NS" !== navigator.product) && ("undefined" !== typeof window && "undefined" !== typeof document)
                },
                forEach: c,
                merge: function t() {
                    var e = {};

                    function n(n, r) {
                        u(e[r]) && u(n) ? e[r] = t(e[r], n) : u(n) ? e[r] = t({}, n) : o(n) ? e[r] = n.slice() : e[r] = n
                    }
                    for (var r = 0, i = arguments.length; r < i; r++) c(arguments[r], n);
                    return e
                },
                extend: function(t, e, n) {
                    return c(e, (function(e, i) {
                        t[i] = n && "function" === typeof e ? r(e, n) : e
                    })), t
                },
                trim: function(t) {
                    return t.replace(/^\s*/, "").replace(/\s*$/, "")
                },
                stripBOM: function(t) {
                    return 65279 === t.charCodeAt(0) && (t = t.slice(1)), t
                }
            }
        },
        yK9s: function(t, e, n) {
            "use strict";
            var r = n("xTJ+");
            t.exports = function(t, e) {
                r.forEach(t, (function(n, r) {
                    r !== e && r.toUpperCase() === e.toUpperCase() && (t[e] = n, delete t[r])
                }))
            }
        },
        zuR4: function(t, e, n) {
            "use strict";
            var r = n("xTJ+"),
                i = n("HSsa"),
                o = n("CgaS"),
                s = n("SntB");

            function a(t) {
                var e = new o(t),
                    n = i(o.prototype.request, e);
                return r.extend(n, o.prototype, e), r.extend(n, e), n
            }
            var u = a(n("JEQr"));
            u.Axios = o, u.create = function(t) {
                return a(s(u.defaults, t))
            }, u.Cancel = n("endd"), u.CancelToken = n("jfS+"), u.isCancel = n("Lmem"), u.all = function(t) {
                return Promise.all(t)
            }, u.spread = n("DfZB"), u.isAxiosError = n("XwJu"), t.exports = u, t.exports.default = u
        }
    }
]);