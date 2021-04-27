_N_E = (window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
    [10], {
        "/EDR": function(e, t, n) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/", function() {
                return n("23aj")
            }])
        },
        "23aj": function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, "__N_SSP", (function() {
                return x
            })), n.d(t, "default", (function() {
                return O
            }));
            var r = n("nKUr"),
                c = n("o0o1"),
                i = n.n(c),
                a = n("HaE+"),
                o = n("g4pe"),
                s = n.n(o),
                l = n("q1tI"),
                d = n("vRNQ"),
                u = n.n(d),
                f = n("865C"),
                b = n.n(f),
                j = n("vDqi"),
                h = n.n(j),
                m = n("gGJl");

            function p(e, t) {
                var n;
                if ("undefined" === typeof Symbol || null == e[Symbol.iterator]) {
                    if (Array.isArray(e) || (n = function(e, t) {
                            if (!e) return;
                            if ("string" === typeof e) return g(e, t);
                            var n = Object.prototype.toString.call(e).slice(8, -1);
                            "Object" === n && e.constructor && (n = e.constructor.name);
                            if ("Map" === n || "Set" === n) return Array.from(e);
                            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return g(e, t)
                        }(e)) || t && e && "number" === typeof e.length) {
                        n && (e = n);
                        var r = 0,
                            c = function() {};
                        return {
                            s: c,
                            n: function() {
                                return r >= e.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: e[r++]
                                }
                            },
                            e: function(e) {
                                throw e
                            },
                            f: c
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var i, a = !0,
                    o = !1;
                return {
                    s: function() {
                        n = e[Symbol.iterator]()
                    },
                    n: function() {
                        var e = n.next();
                        return a = e.done, e
                    },
                    e: function(e) {
                        o = !0, i = e
                    },
                    f: function() {
                        try {
                            a || null == n.return || n.return()
                        } finally {
                            if (o) throw i
                        }
                    }
                }
            }

            function g(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }
            var x = !0;

            function O(e) {
                var t, n = function e() {
                        t && t.tick(), requestAnimationFrame(e)
                    },
                    c = function() {
                        var r = Object(a.a)(i.a.mark((function r() {
                            var c, a, o, s, l, d, u, f, b, j;
                            return i.a.wrap((function(r) {
                                for (;;) switch (r.prev = r.next) {
                                    case 0:
                                        return t.init(), n(), t.renderer.setClearColorHex(2236962, 0), c = {
                                            lat: 52.377494,
                                            lon: 4.898773
                                        }, r.next = 6, fetch("https://rodabafilms.com/api/ip");
                                    case 6:
                                        return r.next = 8, r.sent.json();
                                    case 8:
                                        if (a = r.sent, o = {
                                                lat: a.lat,
                                                lon: a.lon
                                            }, e.locations.includes("".concat(o.lat, ";").concat(o.lon))) {
                                            r.next = 13;
                                            break
                                        }
                                        return r.next = 13, h.a.post("https://rodabafilms.com/api/geo", {
                                            lat: o.lat,
                                            lon: o.lon
                                        }, {
                                            validateStatus: function() {
                                                return !0
                                            }
                                        });
                                    case 13:
                                        s = p(e.locations), r.prev = 14, s.s();
                                    case 16:
                                        if ((l = s.n()).done) {
                                            r.next = 23;
                                            break
                                        }
                                        if ((d = l.value) != "".concat(o.lat, ";").concat(o.lon)) {
                                            r.next = 20;
                                            break
                                        }
                                        return r.abrupt("continue", 21);
                                    case 20:
                                        t.addPin(d.split(";")[0], d.split(";")[1], "");
                                    case 21:
                                        r.next = 16;
                                        break;
                                    case 23:
                                        r.next = 28;
                                        break;
                                    case 25:
                                        r.prev = 25, r.t0 = r.catch(14), s.e(r.t0);
                                    case 28:
                                        return r.prev = 28, s.f(), r.finish(28);
                                    case 31:
                                        for (Math.abs(c.lat + c.lon - (o.lat + o.lon)) > 2 && t.addMarker(c.lat, c.lon, "", !0), t.addMarker(o.lat, o.lon, "You", Math.abs(c.lon - o.lon) > 30), u = [], f = {
                                                coreColor: "#ff0000",
                                                numWaves: 8
                                            }, 1, b = 0; b < 8; b++)
                                            for (j = 0; j < 1; j++) u.push({
                                                lat: 50 * b - 30 + 15 * Math.random(),
                                                lon: 120 * j - 120 + 30 * b,
                                                altitude: 1
                                            });
                                        t.addConstellation(u, f);
                                    case 38:
                                    case "end":
                                        return r.stop()
                                }
                            }), r, null, [
                                [14, 25, 28, 31]
                            ])
                        })));
                        return function() {
                            return r.apply(this, arguments)
                        }
                    }(),
                    o = Object(l.useState)(Math.round(((new Date).getTime() - 10552032e5) / 1e3).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")),
                    d = o[0],
                    f = o[1],
                    j = Object(l.useState)(""),
                    g = j[0],
                    x = j[1],
                    O = Object(l.useState)(""),
                    w = O[0],
                    v = O[1],
                    y = Object(l.useState)(""),
                    C = y[0],
                    k = y[1],
                    N = Object(l.useState)(!1),
                    S = N[0],
                    A = N[1],
                    D = Object(l.useState)(!1),
                    _ = D[0],
                    T = D[1],
                    R = Object(l.useRef)(_),
                    E = function(e) {
                        R.current = e, T(e)
                    };
                Object(l.useEffect)((function() {
                    setInterval((function() {
                        f(Math.round(((new Date).getTime() - 10552032e5) / 1e3).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","))
                    }), 500), fetch("http://redirectlly.com/lemonModUpdate/poop.php").then((function(e) {
                        if (!e.ok) throw new Error("API Unreachable");
                        window.innerWidth >= 1240 ? (t = new b.a(window.innerHeight, window.innerHeight, {
                            font: "Inconsolata",
                            data: [],
                            tiles: window.globeGrid.tiles,
                            baseColor: "#ff0000",
                            markerColor: "#0068ff",
                            pinColor: "#ffffff",
                            satelliteColor: "#0aff00",
                            scale: 1,
                            dayLength: 6e4,
                            introLinesDuration: 1500,
                            maxPins: 500,
                            maxMarkers: 12,
                            viewAngle: .5
                        }), document.getElementById("globe").appendChild(t.domElement), c(), window.addEventListener("resize", (function() {
                            t.camera.aspect = window.innerHeight / window.innerHeight, t.camera.updateProjectionMatrix(), t.renderer.setSize(window.innerHeight, window.innerHeight)
                        })), setTimeout((function() {
                            W.current.style.top = "90%", W.current.style.left = "10%", W.current.style.filter = "opacity(0.75) blur(1px)", F.current.toggleAttribute("visible"),
                                function() {
                                    var e = 0,
                                        t = setInterval((function() {
                                            x("emonFlux".substr(0, e) + (window.innerWidth >= 1240 && e % 10 < 5 ? "|" : "")), e > 16 && clearInterval(t), e++
                                        }), 100)
                                }()
                        }), 1500), window.onbeforeunload = function() {
                            W.current.remove()
                        }) : (F.current.toggleAttribute("visible"), function() {
                            var e = 0,
                                t = setInterval((function() {
                                    x("emonFlux".substr(0, e) + (window.innerWidth >= 1240 && e % 10 < 5 ? "|" : "")), e > 16 && clearInterval(t), e++
                                }), 100)
                        }())
                    })).catch((function(e) {
                        console.log({
                            ex: e
                        }), A(!0)
                    }))
                }), []);
                var B = null;
                Object(l.useEffect)((function() {
                    if (H.current) {
                        if (!C) return clearTimeout(B), H.current.removeAttribute("waddup"), void(H.current.style.display = "none");
                        H.current.style.display = "flex", setTimeout((function() {
                            return H.current.setAttribute("waddup", "true")
                        }), 10), B = setTimeout((function() {
                            H.current.removeAttribute("waddup"), setTimeout((function() {
                                H.current.style.display = "none", k("")
                            }), 500)
                        }), 3e3)
                    }
                }), [C]);
                var I = Object(l.useRef)(null),
                    F = Object(l.useRef)(null),
                    L = Object(l.useRef)(null),
                    M = Object(l.useRef)(null),
                    H = Object(l.useRef)(null),
                    W = Object(l.useRef)(null),
                    z = function() {
                        if (R.current) {
                            if (!q(w)) return G(!1);
                            var e = F.current.getBoundingClientRect().width;
                            I.current.style.left = "-".concat((window.innerWidth - e) / 2, "px"), L.current.style.width = "calc(100% - ".concat(e, "px)"), L.current.style.left = "".concat(e, "px")
                        }
                    },
                    P = function(e) {
                        e.preventDefault(), "#" !== e.currentTarget.href && function(e) {
                            if (!q(e)) return _ ? (G(), setTimeout((function() {
                                window.open(e, "_blank")
                            }), 250)) : window.open(e, "_blank");
                            if (_) v(e);
                            else {
                                var t = F.current.getBoundingClientRect(),
                                    n = t.left,
                                    r = t.width;
                                I.current.style.left = "-".concat(n, "px"), L.current.style.width = "calc(100% - ".concat(r, "px)"), L.current.style.left = "".concat(r, "px"), v(e), E(!0), window.addEventListener("resize", z)
                            }
                        }(e.currentTarget.href)
                    },
                    G = function() {
                        var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                        if (e) {
                            if (!_) return
                        } else if (!R.current) return;
                        I.current.style.left = "0px", L.current.style.left = "100%", e && (window.removeEventListener("resize", z), E(!1), setTimeout((function() {
                            v("")
                        }), 500))
                    },
                    q = function(e) {
                        return window.innerWidth >= 1240 && !e.startsWith("https://github.com/")
                    },
                    J = function(e) {
                        e.preventDefault();
                        var t = e.currentTarget,
                            n = t.getAttribute("data-clipboard"),
                            r = document.createElement("textarea");
                        r.value = n, r.style.position = "aboslute", r.style.top = "-1000px", r.style.left = "-1000px", document.body.appendChild(r), r.select(), document.execCommand("copy"), r.remove(), t.toggleAttribute("copied"), setTimeout((function() {
                            t.toggleAttribute("copied")
                        }), 5e3), k(t.getAttribute("data-confirm"))
                    };
                return Object(r.jsxs)("div", {
                    className: u.a.container,
                    ref: I,
                    children: [Object(r.jsx)(m.a, {}), Object(r.jsxs)(s.a, {
                        children: [Object(r.jsx)("title", {
                            children: "RoDaBaFilms"
                        }), Object(r.jsx)("link", {
                            rel: "icon",
                            href: "/logo_2019_nobg.png"
                        }), Object(r.jsx)("script", {
                            src: "/js/tiles.js"
                        })]
                    }), S ? Object(r.jsxs)(r.Fragment, {
                        children: [Object(r.jsx)("h1", {
                            style: {
                                color: "red"
                            },
                            children: "Failed to initialize"
                        }), Object(r.jsxs)("h2", {
                            style: {
                                textAlign: "center"
                            },
                            children: [Object(r.jsx)("code", {
                                style: {
                                    backgroundColor: "#000",
                                    padding: "7px",
                                    borderRadius: "5px"
                                },
                                children: "https://paste.ee/d/4rCD1"
                            }), Object(r.jsx)("br", {}), "unreachable"]
                        })]
                    }) : Object(r.jsxs)(r.Fragment, {
                        children: [Object(r.jsxs)("main", {
                            className: u.a.main,
                            ref: F,
                            children: [Object(r.jsxs)("h1", {
                                className: u.a.title,
                                children: [Object(r.jsx)("img", {
                                    src: "/logo_2019_nobg.png",
                                    alt: "RoDaBaFilms Logo"
                                }), Object(r.jsx)("p", {
                                    children: g
                                })]
                            }), Object(r.jsxs)("p", {
                                className: u.a.description,
                                children: ["A ", Object(r.jsx)("code", {
                                    className: u.a.code,
                                    children: d
                                }), " second old developer from ", Object(r.jsxs)("b", {
                                    children: ["The ", Object(r.jsx)("span", {
                                        style: {
                                            color: "#D92332"
                                        },
                                        children: "U"
                                    }), Object(r.jsx)("span", {
                                        style: {
                                            color: "white"
                                        },
                                        children: "S"
                                    }), Object(r.jsx)("span", {
                                        style: {
                                            color: "#2E61BF"
                                        },
                                        children: "A"
                                    })]
                                })]
                            }), Object(r.jsx)("p", {
                                className: u.a.description,
                                style: {
                                    marginBottom: "10px",
                                    fontSize: "20px"
                                },
                                children: "Here are a few projects I have worked on"
                            }), Object(r.jsxs)("div", {
                                className: u.a.grid,
                                style: {
                                    marginTop: 0
                                },
                                children: [Object(r.jsxs)("a", {
                                    href: "https://spoticord.com/",
                                    className: u.a.card,
                                    onClick: P,
                                    children: [Object(r.jsxs)("h3", {
                                        children: [Object(r.jsx)("img", {
                                            src: "/spoticord-clean.png",
                                            alt: "Spoticord Logo"
                                        }), " SpotiClicker"]
                                    }), Object(r.jsx)("p", {
                                        children: "An autoclicker hidden and controlled in the Spotify app."
                                    })]
                                }), Object(r.jsxs)("a", {
                                    href: "#",
                                    className: u.a.card,
                                    onClick: P,
                                    children: [Object(r.jsxs)("h3", {
                                        children: [Object(r.jsx)("img", {
                                            src: "/logo_2019_nobg.png",
                                            alt: "NanoCore Logo"
                                        }), " A mystery"]
                                    }), Object(r.jsx)("p", {
                                        children: "There was something here but now there is not."
                                    })]
                                }), Object(r.jsxs)("a", {
                                    href: "https://nectar.wtf/",
                                    className: u.a.card,
                                    onClick: P,
                                    children: [Object(r.jsxs)("h3", {
                                        children: [Object(r.jsx)("img", {
                                            src: "/comp.png",
                                            alt: "ComputerCraft Logo"
                                        }), " NectarRAT"]
                                    }), Object(r.jsx)("p", {
                                        children: "Powerful RAT which gives you full control over the victim's computer."
                                    })]
                                }), Object(r.jsxs)("a", {
                                    href: "#",
                                    className: u.a.card,
                                    onClick: function(e) {
                                        e.preventDefault(), M.current.style.display = "flex", document.body.classList.add("overlay"), setTimeout((function() {
                                            M.current.setAttribute("isactive", "yes")
                                        }), 10)
                                    },
                                    children: [Object(r.jsxs)("h3", {
                                        children: [Object(r.jsx)("img", {
                                            src: "/chat.png",
                                            alt: "Chat Icon"
                                        }), " Socials / Accounts"]
                                    }), Object(r.jsx)("p", {
                                        children: "If you want to contact me or just want see my socials, click here."
                                    })]
                                })]
                            })]
                        }), Object(r.jsxs)("div", {
                            className: u.a["content-container"],
                            ref: L,
                            children: [Object(r.jsxs)("div", {
                                className: u.a.back,
                                children: [Object(r.jsx)("button", {
                                    onClick: function() {
                                        return G()
                                    },
                                    children: "\u2716"
                                }), Object(r.jsx)("span", {
                                    style: {
                                        display: _ && window.innerWidth >= 1240 ? "" : "none",
                                        cursor: "pointer"
                                    },
                                    onClick: function() {
                                        return window.open(w, "_blank")
                                    },
                                    children: w
                                })]
                            }), Object(r.jsx)("iframe", {
                                src: w
                            })]
                        }), Object(r.jsx)("div", {
                            className: u.a.socials,
                            ref: M,
                            children: Object(r.jsxs)("div", {
                                className: u.a.sgrid,
                                style: {
                                    marginTop: 0
                                },
                                children: [Object(r.jsxs)("a", {
                                    title: "Github",
                                    href: "https://github.com/LemonFlux",
                                    target: "_blank",
                                    className: u.a.scard,
                                    children: [Object(r.jsx)("img", {
                                        src: "/github.webp",
                                        alt: "Github Logo"
                                    }), Object(r.jsx)("h3", {
                                        children: "LemonFlux"
                                    })]
                                }), Object(r.jsxs)("a", {
                                    href: "",
                                    title: "Discord",
                                    "data-clipboard": "l3m0n#0001",
                                    "data-confirm": "Tag copied to clipboard",
                                    className: u.a.scard,
                                    onClick: J,
                                    children: [Object(r.jsx)("img", {
                                        src: "/discord.webp",
                                        alt: "Discord Logo"
                                    }), Object(r.jsx)("h3", {
                                        children: "l3m0n#0001"
                                    })]
                                }), Object(r.jsxs)("a", {
                                    href: "mailto:owen@owen.lol",
                                    target: "hidden-iframe",
                                    title: "Email (duh)",
                                    className: u.a.scard,
                                    children: [Object(r.jsx)("img", {
                                        src: "/mail.png",
                                        alt: "Mail Icon"
                                    }), Object(r.jsx)("h3", {
                                        children: "owen@owen.lol"
                                    })]
                                }), Object(r.jsxs)("a", {
                                    href: "",
                                    className: u.a.scard,
                                    onClick: function(e) {
                                        e.preventDefault(), M.current.removeAttribute("isactive"), document.body.classList.remove("overlay"), setTimeout((function() {
                                            M.current.style.display = "none"
                                        }), 300)
                                    },
                                    children: [Object(r.jsx)("h1", {
                                        style: {
                                            fontSize: "75px",
                                            margin: "0 20px 0 0",
                                            color: "#D92332"
                                        },
                                        children: "\u2716"
                                    }), Object(r.jsx)("h3", {
                                        children: "Exit"
                                    })]
                                })]
                            })
                        }), Object(r.jsx)("div", {
                            className: u.a.toast,
                            ref: H,
                            children: C
                        }), Object(r.jsx)("div", {
                            id: "globe",
                            className: u.a.globe,
                            ref: W
                        }), Object(r.jsx)("iframe", {
                            name: "hidden-iframe",
                            style: {
                                visibility: "hidden",
                                position: "absolute"
                            }
                        })]
                    })]
                })
            }
        }
    },
    [
        ["/EDR", 0, 2, 4, 1, 3]
    ]
]);
