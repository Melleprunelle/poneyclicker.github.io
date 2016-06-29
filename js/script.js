(function () {
    var h, k = this,
        aa = function (a, b) {
            var c = a.split("."),
                d = k;
            c[0] in d || !d.execScript || d.execScript("var " + c[0]);
            for (var e; c.length && (e = c.shift());) c.length || void 0 === b ? d = d[e] ? d[e] : d[e] = {} : d[e] = b
        },
        ba = function () {},
        ca = function (a) {
            a.ma = function () {
                return a.ad ? a.ad : a.ad = new a
            }
        },
        da = function (a) {
            var b = typeof a;
            if ("object" == b)
                if (a) {
                    if (a instanceof Array) return "array";
                    if (a instanceof Object) return b;
                    var c = Object.prototype.toString.call(a);
                    if ("[object Window]" == c) return "object";
                    if ("[object Array]" == c || "number" == typeof a.length &&
                        "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) return "array";
                    if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) return "function"
                } else return "null";
            else if ("function" == b && "undefined" == typeof a.call) return "object";
            return b
        },
        m = function (a) {
            return "string" == typeof a
        },
        ea = function (a) {
            return "function" == da(a)
        },
        fa = function (a) {
            var b = typeof a;
            return "object" == b && null != a ||
                "function" == b
        },
        ga = function (a, b, c) {
            return a.call.apply(a.bind, arguments)
        },
        ha = function (a, b, c) {
            if (!a) throw Error();
            if (2 < arguments.length) {
                var d = Array.prototype.slice.call(arguments, 2);
                return function () {
                    var c = Array.prototype.slice.call(arguments);
                    Array.prototype.unshift.apply(c, d);
                    return a.apply(b, c)
                }
            }
            return function () {
                return a.apply(b, arguments)
            }
        },
        p = function (a, b, c) {
            p = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? ga : ha;
            return p.apply(null, arguments)
        },
        ia = function (a,
            b) {
            var c = Array.prototype.slice.call(arguments, 1);
            return function () {
                var b = c.slice();
                b.push.apply(b, arguments);
                return a.apply(this, b)
            }
        },
        ka = Date.now || function () {
            return +new Date
        },
        la = function (a, b) {
            function c() {}
            c.prototype = b.prototype;
            a.Jd = b.prototype;
            a.prototype = new c;
            a.prototype.constructor = a;
            a.qf = function (a, c, f) {
                for (var g = Array(arguments.length - 2), l = 2; l < arguments.length; l++) g[l - 2] = arguments[l];
                return b.prototype[c].apply(a, g)
            }
        };
    var ma = "undefined" != typeof DOMTokenList,
        q = function (a, b) {
            if (ma) {
                var c = a.classList;
                0 == c.contains(b) && c.toggle(b)
            } else if (c = a.className) {
                for (var c = c.split(/\s+/), d = !1, e = 0; e < c.length && !d; ++e) d = c[e] == b;
                d || (c.push(b), a.className = c.join(" "))
            } else a.className = b
        },
        r = function (a, b) {
            if (ma) {
                var c = a.classList;
                1 == c.contains(b) && c.toggle(b)
            } else if ((c = a.className) && !(0 > c.indexOf(b))) {
                for (var c = c.split(/\s+/), d = 0; d < c.length; ++d) c[d] == b && c.splice(d--, 1);
                a.className = c.join(" ")
            }
        };
    var oa = function (a) {
        if (Error.captureStackTrace) Error.captureStackTrace(this, oa);
        else {
            var b = Error().stack;
            b && (this.stack = b)
        }
        a && (this.message = String(a))
    };
    la(oa, Error);
    oa.prototype.name = "CustomError";
    var pa = String.prototype.trim ? function (a) {
            return a.trim()
        } : function (a) {
            return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "")
        },
        Aa = function (a) {
            if (!qa.test(a)) return a; - 1 != a.indexOf("&") && (a = a.replace(ra, "&amp;")); - 1 != a.indexOf("<") && (a = a.replace(sa, "&lt;")); - 1 != a.indexOf(">") && (a = a.replace(ta, "&gt;")); - 1 != a.indexOf('"') && (a = a.replace(va, "&quot;")); - 1 != a.indexOf("'") && (a = a.replace(wa, "&#39;")); - 1 != a.indexOf("\x00") && (a = a.replace(za, "&#0;"));
            return a
        },
        ra = /&/g,
        sa = /</g,
        ta = />/g,
        va = /"/g,
        wa = /'/g,
        za = /\x00/g,
        qa = /[\x00&<>"']/,
        Ba = function (a, b) {
            return a < b ? -1 : a > b ? 1 : 0
        },
        Ca = function (a) {
            return String(a).replace(/\-([a-z])/g, function (a, c) {
                return c.toUpperCase()
            })
        },
        Da = function (a) {
            var b = m(void 0) ? "undefined".replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08") : "\\s";
            return a.replace(new RegExp("(^" + (b ? "|[" + b + "]+" : "") + ")([a-z])", "g"), function (a, b, e) {
                return b + e.toUpperCase()
            })
        };
    var Ea = Array.prototype.indexOf ? function (a, b, c) {
        return Array.prototype.indexOf.call(a, b, c)
    } : function (a, b, c) {
        c = null == c ? 0 : 0 > c ? Math.max(0, a.length + c) : c;
        if (m(a)) return m(b) && 1 == b.length ? a.indexOf(b, c) : -1;
        for (; c < a.length; c++)
            if (c in a && a[c] === b) return c;
        return -1
    };
    var Fa;
    a: {
        var Ga = k.navigator;
        if (Ga) {
            var Ha = Ga.userAgent;
            if (Ha) {
                Fa = Ha;
                break a
            }
        }
        Fa = ""
    }
    var u = function (a) {
        return -1 != Fa.indexOf(a)
    };
    var Ja = function () {
            this.Qe = "";
            this.Zd = Ia
        },
        Ia = {};
    var La = function () {
        this.tc = "";
        this.$d = Ka
    };
    La.prototype.jc = function () {
        return 1
    };
    var Ma = function (a) {
            if (a instanceof La && a.constructor === La && a.$d === Ka) return a.tc;
            da(a);
            return "type_error:SafeUrl"
        },
        Ka = {};
    var Oa = function () {
        this.Re = "";
        this.ae = Na
    };
    Oa.prototype.jc = function () {
        return 1
    };
    var Pa = function (a) {
            if (a instanceof Oa && a.constructor === Oa && a.ae === Na) return a.Re;
            da(a);
            return "type_error:TrustedResourceUrl"
        },
        Na = {};
    var Ra = function () {
        this.tc = "";
        this.Yd = Qa;
        this.pe = null
    };
    Ra.prototype.jc = function () {
        return this.pe
    };
    var Qa = {};
    var Sa = u("Opera"),
        w = u("Trident") || u("MSIE"),
        Ta = u("Edge"),
        Ua = u("Gecko") && !(-1 != Fa.toLowerCase().indexOf("webkit") && !u("Edge")) && !(u("Trident") || u("MSIE")) && !u("Edge"),
        Va = -1 != Fa.toLowerCase().indexOf("webkit") && !u("Edge"),
        Wa = function () {
            var a = k.document;
            return a ? a.documentMode : void 0
        },
        Xa;
    a: {
        var Ya = "",
            Za = function () {
                var a = Fa;
                if (Ua) return /rv\:([^\);]+)(\)|;)/.exec(a);
                if (Ta) return /Edge\/([\d\.]+)/.exec(a);
                if (w) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
                if (Va) return /WebKit\/(\S+)/.exec(a);
                if (Sa) return /(?:Version)[ \/]?(\S+)/.exec(a)
            }();
        Za && (Ya = Za ? Za[1] : "");
        if (w) {
            var $a = Wa();
            if (null != $a && $a > parseFloat(Ya)) {
                Xa = String($a);
                break a
            }
        }
        Xa = Ya
    }
    var ab = Xa,
        bb = {},
        cb = function (a) {
            if (!bb[a]) {
                for (var b = 0, c = pa(String(ab)).split("."), d = pa(String(a)).split("."), e = Math.max(c.length, d.length), f = 0; 0 == b && f < e; f++) {
                    var g = c[f] || "",
                        l = d[f] || "",
                        n = RegExp("(\\d*)(\\D*)", "g"),
                        t = RegExp("(\\d*)(\\D*)", "g");
                    do {
                        var x = n.exec(g) || ["", "", ""],
                            z = t.exec(l) || ["", "", ""];
                        if (0 == x[0].length && 0 == z[0].length) break;
                        b = Ba(0 == x[1].length ? 0 : parseInt(x[1], 10), 0 == z[1].length ? 0 : parseInt(z[1], 10)) || Ba(0 == x[2].length, 0 == z[2].length) || Ba(x[2], z[2])
                    } while (0 == b)
                }
                bb[a] = 0 <= b
            }
        },
        db = k.document,
        eb = db && w ? Wa() || ("CSS1Compat" == db.compatMode ? parseInt(ab, 10) : 5) : void 0;
    var fb;
    if (!(fb = !Ua && !w)) {
        var gb;
        if (gb = w) gb = 9 <= Number(eb);
        fb = gb
    }
    fb || Ua && cb("1.9.1");
    w && cb("9");
    var y = function (a) {
            var b = document;
            return m(a) ? b.getElementById(a) : a
        },
        A = function (a) {
            var b = document;
            return (b.getElementsByClassName ? b.getElementsByClassName(a)[0] : b.querySelectorAll && b.querySelector ? b.querySelector("." + a) : jb(a)[0]) || null
        },
        jb = function (a) {
            var b, c, d, e;
            b = document;
            if (b.querySelectorAll && b.querySelector && a) return b.querySelectorAll("" + (a ? "." + a : ""));
            if (a && b.getElementsByClassName) {
                var f = b.getElementsByClassName(a);
                return f
            }
            f = b.getElementsByTagName("*");
            if (a) {
                e = {};
                for (c = d = 0; b = f[c]; c++) {
                    var g =
                        b.className,
                        l;
                    if (l = "function" == typeof g.split) l = 0 <= Ea(g.split(/\s+/), a);
                    l && (e[d++] = b)
                }
                e.length = d;
                return e
            }
            return f
        },
        kb = function (a, b) {
            if ("textContent" in a) a.textContent = b;
            else if (3 == a.nodeType) a.data = b;
            else if (a.firstChild && 3 == a.firstChild.nodeType) {
                for (; a.lastChild != a.firstChild;) a.removeChild(a.lastChild);
                a.firstChild.data = b
            } else {
                for (var c; c = a.firstChild;) a.removeChild(c);
                a.appendChild((9 == a.nodeType ? a : a.ownerDocument || a.document).createTextNode(String(b)))
            }
        };
    w && cb(8);
    var lb = {},
        nb = {},
        ob = {},
        pb = {},
        qb = {},
        rb = {},
        sb = function () {
            throw Error("Do not instantiate directly");
        };
    sb.prototype.bc = null;
    sb.prototype.toString = function () {
        return this.content
    };
    var vb = function (a, b, c) {
            a.innerHTML = tb(b(c || ub, void 0, void 0))
        },
        tb = function (a) {
            if (!fa(a)) return String(a);
            if (a instanceof sb) {
                if (a.Wa === lb) return a.content;
                if (a.Wa === rb) return Aa(a.content)
            }
            return "zSoyz"
        },
        ub = {};
    var wb = function (a, b) {
            return null != a && a.Wa === b
        },
        xb = function (a) {
            if (null != a) switch (a.bc) {
            case 1:
                return 1;
            case -1:
                return -1;
            case 0:
                return 0
            }
            return null
        },
        yb = function () {
            sb.call(this)
        };
    la(yb, sb);
    yb.prototype.Wa = lb;
    var B = function (a) {
            if (null == a || a.Wa !== lb)
                if (a instanceof Ra) {
                    var b = zb,
                        c;
                    a instanceof Ra && a.constructor === Ra && a.Yd === Qa ? c = a.tc : (da(a), c = "type_error:SafeHtml");
                    a = b(c, a.jc())
                } else a = zb(Aa(String(String(a))), xb(a));
            return a
        },
        zb = function (a) {
            function b(a) {
                this.content = a
            }
            b.prototype = a.prototype;
            return function (a, d) {
                var e = new b(String(a));
                void 0 !== d && (e.bc = d);
                return e
            }
        }(yb),
        Ab = function (a, b) {
            for (var c in b) c in a || (a[c] = b[c]);
            return a
        };
    (function (a) {
        function b(a) {
            this.content = a
        }
        b.prototype = a.prototype;
        return function (a, d) {
            var e = String(a);
            if (!e) return "";
            e = new b(e);
            void 0 !== d && (e.bc = d);
            return e
        }
    })(yb);
    var Bb = function (a) {
            return a.replace(/<\//g, "<\\/").replace(/\]\]>/g, "]]\\>")
        },
        E = function (a) {
            return wb(a, lb) ? String(String(a.content).replace(Cb, "").replace(Db, "&lt;")).replace(Eb, Fb) : Aa(String(a))
        },
        Ib = function (a) {
            if (null == a) return " null ";
            if (wb(a, nb)) return a.content;
            switch (typeof a) {
            case "boolean":
            case "number":
                return " " + a + " ";
            default:
                return "'" + String(String(a)).replace(Gb, Hb) + "'"
            }
        },
        G = function (a) {
            wb(a, ob) || wb(a, pb) ? a = F(a) : a instanceof La ? a = F(Ma(a)) : a instanceof Oa ? a = F(Pa(a)) : (a = String(a), a = Jb.test(a) ?
                a.replace(Kb, Lb) : "about:invalid#zSoyz");
            return a
        },
        H = function (a) {
            wb(a, qb) ? a = Bb(a.content) : null == a ? a = "" : a instanceof Ja ? (a instanceof Ja && a.constructor === Ja && a.Zd === Ia ? a = a.Qe : (da(a), a = "type_error:SafeStyle"), a = Bb(a)) : (a = String(a), a = Mb.test(a) ? a : "zSoyz");
            return a
        },
        Nb = {
            "\x00": "&#0;",
            "\t": "&#9;",
            "\n": "&#10;",
            "\x0B": "&#11;",
            "\f": "&#12;",
            "\r": "&#13;",
            " ": "&#32;",
            '"': "&quot;",
            "&": "&amp;",
            "'": "&#39;",
            "-": "&#45;",
            "/": "&#47;",
            "<": "&lt;",
            "=": "&#61;",
            ">": "&gt;",
            "`": "&#96;",
            "\u0085": "&#133;",
            "\u00a0": "&#160;",
            "\u2028": "&#8232;",
            "\u2029": "&#8233;"
        },
        Fb = function (a) {
            return Nb[a]
        },
        Ob = {
            "\x00": "\\x00",
            "\b": "\\x08",
            "\t": "\\t",
            "\n": "\\n",
            "\x0B": "\\x0b",
            "\f": "\\f",
            "\r": "\\r",
            '"': "\\x22",
            $: "\\x24",
            "&": "\\x26",
            "'": "\\x27",
            "(": "\\x28",
            ")": "\\x29",
            "*": "\\x2a",
            "+": "\\x2b",
            ",": "\\x2c",
            "-": "\\x2d",
            ".": "\\x2e",
            "/": "\\/",
            ":": "\\x3a",
            "<": "\\x3c",
            "=": "\\x3d",
            ">": "\\x3e",
            "?": "\\x3f",
            "[": "\\x5b",
            "\\": "\\\\",
            "]": "\\x5d",
            "^": "\\x5e",
            "{": "\\x7b",
            "|": "\\x7c",
            "}": "\\x7d",
            "\u0085": "\\x85",
            "\u2028": "\\u2028",
            "\u2029": "\\u2029"
        },
        Hb =
        function (a) {
            return Ob[a]
        },
        Pb = {
            "\x00": "%00",
            "\u0001": "%01",
            "\u0002": "%02",
            "\u0003": "%03",
            "\u0004": "%04",
            "\u0005": "%05",
            "\u0006": "%06",
            "\u0007": "%07",
            "\b": "%08",
            "\t": "%09",
            "\n": "%0A",
            "\x0B": "%0B",
            "\f": "%0C",
            "\r": "%0D",
            "\u000e": "%0E",
            "\u000f": "%0F",
            "\u0010": "%10",
            "\u0011": "%11",
            "\u0012": "%12",
            "\u0013": "%13",
            "\u0014": "%14",
            "\u0015": "%15",
            "\u0016": "%16",
            "\u0017": "%17",
            "\u0018": "%18",
            "\u0019": "%19",
            "\u001a": "%1A",
            "\u001b": "%1B",
            "\u001c": "%1C",
            "\u001d": "%1D",
            "\u001e": "%1E",
            "\u001f": "%1F",
            " ": "%20",
            '"': "%22",
            "'": "%27",
            "(": "%28",
            ")": "%29",
            "<": "%3C",
            ">": "%3E",
            "\\": "%5C",
            "{": "%7B",
            "}": "%7D",
            "\u007f": "%7F",
            "\u0085": "%C2%85",
            "\u00a0": "%C2%A0",
            "\u2028": "%E2%80%A8",
            "\u2029": "%E2%80%A9",
            "\uff01": "%EF%BC%81",
            "\uff03": "%EF%BC%83",
            "\uff04": "%EF%BC%84",
            "\uff06": "%EF%BC%86",
            "\uff07": "%EF%BC%87",
            "\uff08": "%EF%BC%88",
            "\uff09": "%EF%BC%89",
            "\uff0a": "%EF%BC%8A",
            "\uff0b": "%EF%BC%8B",
            "\uff0c": "%EF%BC%8C",
            "\uff0f": "%EF%BC%8F",
            "\uff1a": "%EF%BC%9A",
            "\uff1b": "%EF%BC%9B",
            "\uff1d": "%EF%BC%9D",
            "\uff1f": "%EF%BC%9F",
            "\uff20": "%EF%BC%A0",
            "\uff3b": "%EF%BC%BB",
            "\uff3d": "%EF%BC%BD"
        },
        Lb = function (a) {
            return Pb[a]
        },
        Eb = /[\x00\x22\x27\x3c\x3e]/g,
        Gb = /[\x00\x08-\x0d\x22\x26\x27\/\x3c-\x3e\\\x85\u2028\u2029]/g,
        Kb = /[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,
        Mb = /^(?!-*(?:expression|(?:moz-)?binding))(?:[.#]?-?(?:[_a-z0-9-]+)(?:-[_a-z0-9-]+)*-?|(?:rgb|hsl)a?\([0-9.%,\u0020]+\)|-?(?:[0-9]+(?:\.[0-9]*)?|\.[0-9]+)(?:[a-z]{1,2}|%)?|!important|)$/i,
        Qb = /^(?![^#?]*\/(?:\.|%2E){2}(?:[\/?#]|$))(?:(?:https?|mailto):|[^&:\/?#]*(?:[\/?#]|$))/i,
        Jb = /^[^&:\/?#]*(?:[\/?#]|$)|^https?:|^data:image\/[a-z0-9+]+;base64,[a-z0-9+\/]+=*$|^blob:/i,
        F = function (a) {
            return String(a).replace(Kb, Lb)
        },
        Cb = /<(?:!|\/?([a-zA-Z][a-zA-Z0-9:\-]*))(?:[^>'"]|"[^"]*"|'[^']*')*>/g,
        Db = /</g;
    var Tb = function (a, b, c) {
            b = a = a || {};
            b = "" + ('<div id="panel_set"' + (b.o.pa ? 'dir="rtl"' : "") + '><div id="ad_closed_panel" class="panel" wp="1"><div class="panel-container"><div class="panel-content"><div class="panel-row"><span id="closed_text"></span>' + (40 < b.A ? '</div><div class="panel-row" wp="0">' : "") + (J(b.o).Hd ? Rb(b) + '<a id="spacer"></a>' + Sb(b) : Sb(b) + '<a id="spacer"></a>' + Rb(b)) + '</div></div></div></div><div id="survey_panel" class="panel"></div><div id="post_survey_panel" class="panel" wp="1"><div class="panel-container"><div class="panel-content"><span id="confirmation_msg" class="conf-msg">' +
                B(J(b.o).ac) + '</span><span id="contributor_msg" class="conf-msg"></span></div></div></div><div id="final_closed_panel" class="panel" wp="1"><div class="panel-container"><div class="panel-content"><span id="final_closed_text"></span></div></div></div></div>');
            a = a || {};
            c = c || {};
            c = "<style" + (c.j ? ' nonce="' + c.j + '" nonce="' + c.j + '"' : "") + ">#panel_set>.panel {position: fixed; top: -" + H(a.A) + "px; left: -" + H(a.C) + "px; z-index: 9100; display: block; width: " + H(a.C) + "px; height: " + H(a.A) + "px;}#panel_set img {border: 0;}#panel_set>.panel.visible {position: fixed; left: 0; top: 0; opacity: 1;}#panel_set .panel-container {display: table; width: " +
                H(a.C) + "px; height: " + H(a.A) + "px; margin: 0; padding: 0; background-color: #FAFAFA;}#panel_set .panel-row {display: block; padding: 0 0 0.3em 0;}#panel_set .panel-row:first-child {padding: 0.3em;}#panel_set .panel-content {vertical-align: top; display: table-cell; color: #999999; color: rgba(0,0,0,0.4); text-align: center; font-family: 'Arial', sans-serif;}.jake-middle.survey-horiz #panel_set .panel-content {vertical-align: middle;}#ad_closed_panel .btn {display: inline-block; border-radius: 2px; box-sizing: border-box; -moz-box-sizing: border-box; -webkit-box-sizing: border-box; box-shadow: 0px 0px 2px rgba(0,0,0,0.12), 0px 1px 3px rgba(0,0,0,0.26) !important; text-decoration: none; white-space: nowrap; line-height: 1em; cursor: pointer;}#closed_text, #final_closed_text {display: inline-block; line-height: 1.28em; font-size: 1.2em;}#closed_text img, #final_closed_text img {margin-bottom: -0.34em; height: 1.25em; opacity: 0.4; -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=40)\";}#spacer {display: inline-block; padding: 0; box-shadow: none; width: 3px;}" +
                (360 >= a.C && 100 <= a.A ? "#ad_closed_panel .responsive-btn {max-width: 288px; width: 75%; white-space: normal; margin-bottom: 0.4em;}#spacer {display: none;}" : "") + (220 >= a.C ? "#ad_closed_panel .responsive-btn {max-width: 198px; width: 90%; white-space: normal; margin-bottom: 0.4em;}#spacer {display: none;}" : "") + (220 <= a.A ? "#panel_set .panel-content {vertical-align: top;}" : "") + (36 >= a.A ? "#closed_text {padding: 0 1em 0 0;}#panel_set .panel-row {padding: 0 !important;}" : "") + '.btn>span {display: inline-block; padding: 0.5em 0.6em; line-height: 1em;}#settings_btn {background-color: #FFFFFF; color: #9E9EA6;}#settings_btn:hover, #settings_btn:active {background-color: #F5F5F5;}#settings_text {white-space: nowrap;}#report_btn {background-color: #4285F5; color: white;}#report_btn:hover, #report_btn:active {background-color: #3275E5;}#settings_icon {position: relative; display: inline-block; margin-bottom: -0.15em; height: 1em; width: 1em; opacity: 0.4; -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=40)";}[dir="rtl"] #settings_icon {float: left;}#confirmation_msg {font-weight: bold; color: #333333;}#confirmation_msg, #final_closed_text {line-height: 1.1em;}' +
                (100 <= a.A ? "#confirmation_msg, #final_closed_text {padding: 1em 0.3em;}" : "") + "#post_survey_panel span {display: block; text-align: center; line-height: 1em;}#post_survey_panel a, #post_survey_panel a:active, #post_survey_panel a:hover {text-decoration: none; color: #4285F5;}#final_closed_panel, #final_closed_panel span {opacity: 0; transition: opacity 400ms linear;}#final_closed_panel span {white-space: normal;}#final_closed_panel span.visible {opacity: 1;}.fallback-wrap .btn{margin: 1px auto 1px auto; white-space: normal;}</style>";
            return b + c
        },
        Sb = function (a) {
            a = a || {};
            return "" + (a.bf ? '<a id="report_btn" class="btn responsive-btn shadow"><span id="report_text" class="btn-text">' + B(J(a.o).vc) + "</span></a>" : "")
        },
        Rb = function (a) {
            a = a || {};
            var b = a.af;
            wb(b, ob) || wb(b, pb) ? b = F(b) : b instanceof La ? b = F(Ma(b)) : b instanceof Oa ? b = F(Pa(b)) : (b = String(b), b = Qb.test(b) ? b.replace(Kb, Lb) : "#zSoyz");
            return '<a id="settings_btn" class="btn responsive-btn shadow" href="' + E(b) + '" target="_blank" wp="0"><span id="settings_text" class="btn-text">' + B(a.$e) + '&nbsp;<img id="settings_icon" src="' +
                E(G(a.Ze)) + '"></span></a>'
        };
    var Ub = function (a, b) {
        var c = parseInt(a, 10);
        return isNaN(c) ? b : c
    };
    var Wb = function (a) {
        Wb[" "](a);
        return a
    };
    Wb[" "] = ba;
    var Xb = function (a, b) {
        for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b.call(void 0, a[c], c, a)
    };
    var Yb = function (a, b) {
            this.Qd = a;
            this.Rd = b
        },
        Zb = function (a, b) {
            this.url = a;
            this.cd = !!b;
            this.depth = null
        };
    var K = function (a, b, c) {
            a.addEventListener ? a.addEventListener(b, c, !1) : a.attachEvent && a.attachEvent("on" + b, c)
        },
        $b = function (a, b, c) {
            a.removeEventListener ? a.removeEventListener(b, c, !1) : a.detachEvent && a.detachEvent("on" + b, c)
        };
    var ac = function (a, b, c, d, e) {
            this.nd = c || 4E3;
            this.Ca = a || "&";
            this.be = b || ",$";
            this.Ib = void 0 !== d ? d : "trn";
            this.hf = e || null;
            this.Hc = !1;
            this.ua = {};
            this.Fe = 0;
            this.ea = []
        },
        bc = function (a, b) {
            var c = {};
            c[a] = b;
            return [c]
        },
        cc = function (a, b, c, d) {
            a.ea.push(b);
            a.ua[b] = bc(c, d)
        },
        fc = function (a, b, c, d) {
            b = b + "//" + c + d;
            var e = dc(a) - d.length - 0;
            if (0 > e) return "";
            a.ea.sort(function (a, b) {
                return a - b
            });
            d = null;
            c = "";
            for (var f = 0; f < a.ea.length; f++)
                for (var g = a.ea[f], l = a.ua[g], n = 0; n < l.length; n++) {
                    if (!e) {
                        d = null == d ? g : d;
                        break
                    }
                    var t = ec(l[n], a.Ca,
                        a.be);
                    if (t) {
                        t = c + t;
                        if (e >= t.length) {
                            e -= t.length;
                            b += t;
                            c = a.Ca;
                            break
                        } else a.Hc && (c = e, t[c - 1] == a.Ca && --c, b += t.substr(0, c), c = a.Ca, e = 0);
                        d = null == d ? g : d
                    }
                }
            f = "";
            a.Ib && null != d && (f = c + a.Ib + "=" + (a.hf || d));
            return b + f + ""
        },
        dc = function (a) {
            if (!a.Ib) return a.nd;
            var b = 1,
                c;
            for (c in a.ua) b = c.length > b ? c.length : b;
            return a.nd - a.Ib.length - b - a.Ca.length - 1
        },
        ec = function (a, b, c, d, e) {
            var f = [];
            Xb(a, function (a, l) {
                var n = gc(a, b, c, d, e);
                n && f.push(l + "=" + n)
            });
            return f.join(b)
        },
        gc = function (a, b, c, d, e) {
            if (null == a) return "";
            b = b || "&";
            c = c || ",$";
            "string" ==
            typeof c && (c = c.split(""));
            if (a instanceof Array) {
                if (d = d || 0, d < c.length) {
                    for (var f = [], g = 0; g < a.length; g++) f.push(gc(a[g], b, c, d + 1, e));
                    return f.join(c[d])
                }
            } else if ("object" == typeof a) return e = e || 0, 2 > e ? encodeURIComponent(ec(a, b, c, d, e + 1)) : "...";
            return encodeURIComponent(String(a))
        };
    var ic = function (a, b, c, d, e, f) {
            try {
                var g;
                c instanceof ac ? g = c : (g = new ac, Xb(c, function (a, b) {
                    var c = g,
                        d = c.Fe++,
                        e = bc(b, a);
                    c.ea.push(d);
                    c.ua[d] = e
                }));
                if ((d ? a.ef : Math.random()) < (e || a.oe)) {
                    var l = fc(g, a.Se, a.se, a.Oe + b + "&");
                    "undefined" === typeof f ? hc(k, l) : hc(k, l, f)
                }
            } catch (n) {}
        },
        hc = function (a, b, c) {
            a.google_image_requests || (a.google_image_requests = []);
            var d = a.document.createElement("img");
            if (c) {
                var e = function (a) {
                    c(a);
                    $b(d, "load", e);
                    $b(d, "error", e)
                };
                K(d, "load", e);
                K(d, "error", e)
            }
            d.src = b;
            a.google_image_requests.push(d)
        };
    var jc = function (a, b, c) {
            this.message = a;
            this.fileName = b || "";
            this.lineNumber = c || -1
        },
        kc = function (a) {
            var b = a.toString();
            a.name && -1 == b.indexOf(a.name) && (b += ": " + a.name);
            a.message && -1 == b.indexOf(a.message) && (b += ": " + a.message);
            if (a.stack) {
                a = a.stack;
                var c = b;
                try {
                    -1 == a.indexOf(c) && (a = c + "\n" + a);
                    for (var d; a != d;) d = a, a = a.replace(/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/, "$1");
                    b = a.replace(/\n */g, "\n")
                } catch (e) {
                    b = c
                }
            }
            return b
        };
    var mc = function (a, b, c) {
            if (m(b))(b = lc(a, b)) && (a.style[b] = c);
            else
                for (var d in b) {
                    c = a;
                    var e = b[d],
                        f = lc(c, d);
                    f && (c.style[f] = e)
                }
        },
        nc = {},
        lc = function (a, b) {
            var c = nc[b];
            if (!c) {
                var d = Ca(b),
                    c = d;
                void 0 === a.style[d] && (d = (Va ? "Webkit" : Ua ? "Moz" : w ? "ms" : Sa ? "O" : null) + Da(d), void 0 !== a.style[d] && (c = d));
                nc[b] = c
            }
            return c
        };
    var oc = window;
    var pc = function (a) {
        a.preventDefault ? a.preventDefault() : a.returnValue = !1
    };
    var qc, M;
    qc = new function () {
        this.Se = "http:" === oc.location.protocol ? "http:" : "https:";
        this.se = "pagead2.googlesyndication.com";
        this.Oe = "/pagead/gen_204?id=";
        this.oe = .01;
        this.ef = Math.random()
    };
    M = new function () {
        this.sd = qc;
        this.ve = "jserror";
        this.Gc = null;
        this.Ud = !1
    };
    var rc = function (a) {
            ic(qc, "gdn::mta", a, !0, .01, void 0)
        },
        sc = function (a, b, c) {
            try {
                var d = M.ve,
                    e = new ac;
                e.Hc = !0;
                cc(e, 1, "context", a);
                if (!(b instanceof jc)) {
                    var f = b;
                    b = new jc(kc(f), f.fileName, f.lineNumber)
                }
                cc(e, 2, "msg", b.message.substring(0, 512));
                b.fileName && cc(e, 3, "file", b.fileName);
                0 < b.lineNumber && cc(e, 4, "line", b.lineNumber.toString());
                b = {};
                if (M.Gc) try {
                    M.Gc(b)
                } catch (C) {}
                if (c) try {
                    c(b)
                } catch (C) {}
                c = [b];
                e.ea.push(5);
                e.ua[5] = c;
                var g, f = k;
                c = [];
                var l, n = null;
                do {
                    b = f;
                    var t;
                    try {
                        var x;
                        if (x = !!b && null != b.location.href) b: {
                            try {
                                Wb(b.foo);
                                x = !0;
                                break b
                            } catch (C) {}
                            x = !1
                        }
                        t = x
                    } catch (C) {
                        t = !1
                    }
                    t ? (l = b.location.href, n = b.document && b.document.referrer || null) : (l = n, n = null);
                    c.push(new Zb(l || ""));
                    try {
                        f = b.parent
                    } catch (C) {
                        f = null
                    }
                } while (f && b != f);
                l = 0;
                for (var z = c.length - 1; l <= z; ++l) c[l].depth = z - l;
                b = k;
                if (b.location && b.location.ancestorOrigins && b.location.ancestorOrigins.length == c.length - 1)
                    for (l = 1; l < c.length; ++l) {
                        var ua = c[l];
                        ua.url || (ua.url = b.location.ancestorOrigins[l - 1] || "", ua.cd = !0)
                    }
                for (var xa = new Zb(k.location.href, !1), ya = c.length - 1, z = ya; 0 <= z; --z) {
                    var Y =
                        c[z];
                    if (Y.url && !Y.cd) {
                        xa = Y;
                        break
                    }
                }
                var Y = null,
                    D = c.length && c[ya].url;
                0 != xa.depth && D && (Y = c[ya]);
                g = new Yb(xa, Y);
                g.Rd && cc(e, 6, "top", g.Rd.url || "");
                cc(e, 7, "url", g.Qd.url || "");
                ic(M.sd, d, e, M.Ud, 0)
            } catch (C) {
                try {
                    ic(M.sd, d, {
                        context: "ecmserr",
                        rctx: a,
                        msg: kc(C),
                        url: g.Qd.url
                    }, M.Ud, 0)
                } catch (I) {}
            }
        };
    var tc = function (a) {
            a = String(a);
            if (/^\s*$/.test(a) ? 0 : /^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g, "@").replace(/(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g, "]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, ""))) try {
                return eval("(" + a + ")")
            } catch (b) {}
            throw Error("Invalid JSON string: " + a);
        },
        wc = function (a) {
            var b = [];
            uc(new vc, a, b);
            return b.join("")
        },
        vc = function () {
            this.Cb = void 0
        },
        uc = function (a, b, c) {
            if (null ==
                b) c.push("null");
            else {
                if ("object" == typeof b) {
                    if ("array" == da(b)) {
                        var d = b;
                        b = d.length;
                        c.push("[");
                        for (var e = "", f = 0; f < b; f++) c.push(e), e = d[f], uc(a, a.Cb ? a.Cb.call(d, String(f), e) : e, c), e = ",";
                        c.push("]");
                        return
                    }
                    if (b instanceof String || b instanceof Number || b instanceof Boolean) b = b.valueOf();
                    else {
                        c.push("{");
                        f = "";
                        for (d in b) Object.prototype.hasOwnProperty.call(b, d) && (e = b[d], "function" != typeof e && (c.push(f), xc(d, c), c.push(":"), uc(a, a.Cb ? a.Cb.call(b, d, e) : e, c), f = ","));
                        c.push("}");
                        return
                    }
                }
                switch (typeof b) {
                case "string":
                    xc(b,
                        c);
                    break;
                case "number":
                    c.push(isFinite(b) && !isNaN(b) ? String(b) : "null");
                    break;
                case "boolean":
                    c.push(String(b));
                    break;
                case "function":
                    c.push("null");
                    break;
                default:
                    throw Error("Unknown type: " + typeof b);
                }
            }
        },
        yc = {
            '"': '\\"',
            "\\": "\\\\",
            "/": "\\/",
            "\b": "\\b",
            "\f": "\\f",
            "\n": "\\n",
            "\r": "\\r",
            "\t": "\\t",
            "\x0B": "\\u000b"
        },
        zc = /\uffff/.test("\uffff") ? /[\\\"\x00-\x1f\x7f-\uffff]/g : /[\\\"\x00-\x1f\x7f-\xff]/g,
        xc = function (a, b) {
            b.push('"', a.replace(zc, function (a) {
                var b = yc[a];
                b || (b = "\\u" + (a.charCodeAt(0) | 65536).toString(16).substr(1),
                    yc[a] = b);
                return b
            }), '"')
        };
    var Ac = function (a) {
        var b = {};
        if (a && a.key_value) {
            a = a.key_value;
            for (var c = 0; c < a.length; c++) {
                var d = a[c];
                if ("key" in d && "value" in d) {
                    var e = d.value;
                    b[d.key] = null == e ? null : String(e)
                }
            }
        }
        return b
    };
    var Bc = function (a, b, c) {
        this.De = c;
        this.me = a;
        this.Xe = b;
        this.tb = 0;
        this.fb = null
    };
    Bc.prototype.get = function () {
        var a;
        0 < this.tb ? (this.tb--, a = this.fb, this.fb = a.next, a.next = null) : a = this.me();
        return a
    };
    Bc.prototype.put = function (a) {
        this.Xe(a);
        this.tb < this.De && (this.tb++, a.next = this.fb, this.fb = a)
    };
    var Cc = function (a) {
            k.setTimeout(function () {
                throw a;
            }, 0)
        },
        Dc, Ec = function () {
            var a = k.MessageChannel;
            "undefined" === typeof a && "undefined" !== typeof window && window.postMessage && window.addEventListener && !u("Presto") && (a = function () {
                var a = document.createElement("IFRAME");
                a.style.display = "none";
                a.src = "";
                document.documentElement.appendChild(a);
                var b = a.contentWindow,
                    a = b.document;
                a.open();
                a.write("");
                a.close();
                var c = "callImmediate" + Math.random(),
                    d = "file:" == b.location.protocol ? "*" : b.location.protocol + "//" + b.location.host,
                    a = p(function (a) {
                        if (("*" == d || a.origin == d) && a.data == c) this.port1.onmessage()
                    }, this);
                b.addEventListener("message", a, !1);
                this.port1 = {};
                this.port2 = {
                    postMessage: function () {
                        b.postMessage(c, d)
                    }
                }
            });
            if ("undefined" !== typeof a && !u("Trident") && !u("MSIE")) {
                var b = new a,
                    c = {},
                    d = c;
                b.port1.onmessage = function () {
                    if (void 0 !== c.next) {
                        c = c.next;
                        var a = c.Lc;
                        c.Lc = null;
                        a()
                    }
                };
                return function (a) {
                    d.next = {
                        Lc: a
                    };
                    d = d.next;
                    b.port2.postMessage(0)
                }
            }
            return "undefined" !== typeof document && "onreadystatechange" in document.createElement("SCRIPT") ?
                function (a) {
                    var b = document.createElement("SCRIPT");
                    b.onreadystatechange = function () {
                        b.onreadystatechange = null;
                        b.parentNode.removeChild(b);
                        b = null;
                        a();
                        a = null
                    };
                    document.documentElement.appendChild(b)
                } : function (a) {
                    k.setTimeout(a, 0)
                }
        };
    var Fc = function () {
            this.Nb = this.ta = null
        },
        Hc = new Bc(function () {
            return new Gc
        }, function (a) {
            a.reset()
        }, 100);
    Fc.prototype.add = function (a, b) {
        var c = Hc.get();
        c.set(a, b);
        this.Nb ? this.Nb.next = c : this.ta = c;
        this.Nb = c
    };
    Fc.prototype.remove = function () {
        var a = null;
        this.ta && (a = this.ta, this.ta = this.ta.next, this.ta || (this.Nb = null), a.next = null);
        return a
    };
    var Gc = function () {
        this.next = this.scope = this.ic = null
    };
    Gc.prototype.set = function (a, b) {
        this.ic = a;
        this.scope = b;
        this.next = null
    };
    Gc.prototype.reset = function () {
        this.next = this.scope = this.ic = null
    };
    var Mc = function (a, b) {
            Ic || Jc();
            Kc || (Ic(), Kc = !0);
            Lc.add(a, b)
        },
        Ic, Jc = function () {
            if (k.Promise && k.Promise.resolve) {
                var a = k.Promise.resolve(void 0);
                Ic = function () {
                    a.then(Nc)
                }
            } else Ic = function () {
                var a = Nc;
                !ea(k.setImmediate) || k.Window && k.Window.prototype && !u("Edge") && k.Window.prototype.setImmediate == k.setImmediate ? (Dc || (Dc = Ec()), Dc(a)) : k.setImmediate(a)
            }
        },
        Kc = !1,
        Lc = new Fc,
        Nc = function () {
            for (var a; a = Lc.remove();) {
                try {
                    a.ic.call(a.scope)
                } catch (b) {
                    Cc(b)
                }
                Hc.put(a)
            }
            Kc = !1
        };
    var N = function (a, b) {
            this.D = 0;
            this.Cd = void 0;
            this.ha = this.N = this.ba = null;
            this.eb = this.hc = !1;
            if (a != ba) try {
                var c = this;
                a.call(b, function (a) {
                    Oc(c, 2, a)
                }, function (a) {
                    Oc(c, 3, a)
                })
            } catch (d) {
                Oc(this, 3, d)
            }
        },
        Pc = function () {
            this.next = this.context = this.qa = this.Ba = this.Y = null;
            this.Pa = !1
        };
    Pc.prototype.reset = function () {
        this.context = this.qa = this.Ba = this.Y = null;
        this.Pa = !1
    };
    var Qc = new Bc(function () {
            return new Pc
        }, function (a) {
            a.reset()
        }, 100),
        Rc = function (a, b, c) {
            var d = Qc.get();
            d.Ba = a;
            d.qa = b;
            d.context = c;
            return d
        },
        Tc = function (a, b, c) {
            Sc(a, b, c, null) || Mc(ia(b, a))
        },
        Uc = function (a) {
            return new N(function (b, c) {
                var d = a.length,
                    e = [];
                if (d)
                    for (var f = function (a, c) {
                            d--;
                            e[a] = c;
                            0 == d && b(e)
                        }, g = function (a) {
                            c(a)
                        }, l = 0, n; l < a.length; l++) n = a[l], Tc(n, ia(f, l), g);
                else b(e)
            })
        },
        Wc = function () {
            var a, b;
            new N(function (c, d) {
                a = c;
                b = d
            });
            return new Vc(a, b)
        };
    N.prototype.then = function (a, b, c) {
        return Xc(this, ea(a) ? a : null, ea(b) ? b : null, c)
    };
    N.prototype.then = N.prototype.then;
    N.prototype.$goog_Thenable = !0;
    N.prototype.cancel = function (a) {
        0 == this.D && Mc(function () {
            var b = new Yc(a);
            Zc(this, b)
        }, this)
    };
    var Zc = function (a, b) {
            if (0 == a.D)
                if (a.ba) {
                    var c = a.ba;
                    if (c.N) {
                        for (var d = 0, e = null, f = null, g = c.N; g && (g.Pa || (d++, g.Y == a && (e = g), !(e && 1 < d))); g = g.next) e || (f = g);
                        e && (0 == c.D && 1 == d ? Zc(c, b) : (f ? (d = f, d.next == c.ha && (c.ha = d), d.next = d.next.next) : $c(c), ad(c, e, 3, b)))
                    }
                    a.ba = null
                } else Oc(a, 3, b)
        },
        cd = function (a, b) {
            a.N || 2 != a.D && 3 != a.D || bd(a);
            a.ha ? a.ha.next = b : a.N = b;
            a.ha = b
        },
        Xc = function (a, b, c, d) {
            var e = Rc(null, null, null);
            e.Y = new N(function (a, g) {
                e.Ba = b ? function (c) {
                    try {
                        var e = b.call(d, c);
                        a(e)
                    } catch (t) {
                        g(t)
                    }
                } : a;
                e.qa = c ? function (b) {
                    try {
                        var e =
                            c.call(d, b);
                        void 0 === e && b instanceof Yc ? g(b) : a(e)
                    } catch (t) {
                        g(t)
                    }
                } : g
            });
            e.Y.ba = a;
            cd(a, e);
            return e.Y
        };
    N.prototype.jf = function (a) {
        this.D = 0;
        Oc(this, 2, a)
    };
    N.prototype.kf = function (a) {
        this.D = 0;
        Oc(this, 3, a)
    };
    var Oc = function (a, b, c) {
            0 == a.D && (a === c && (b = 3, c = new TypeError("Promise cannot resolve to itself")), a.D = 1, Sc(c, a.jf, a.kf, a) || (a.Cd = c, a.D = b, a.ba = null, bd(a), 3 != b || c instanceof Yc || dd(a, c)))
        },
        Sc = function (a, b, c, d) {
            if (a instanceof N) return cd(a, Rc(b || ba, c || null, d)), !0;
            var e;
            if (a) try {
                e = !!a.$goog_Thenable
            } catch (g) {
                e = !1
            } else e = !1;
            if (e) return a.then(b, c, d), !0;
            if (fa(a)) try {
                var f = a.then;
                if (ea(f)) return ed(a, f, b, c, d), !0
            } catch (g) {
                return c.call(d, g), !0
            }
            return !1
        },
        ed = function (a, b, c, d, e) {
            var f = !1,
                g = function (a) {
                    f || (f = !0, c.call(e, a))
                },
                l = function (a) {
                    f || (f = !0, d.call(e, a))
                };
            try {
                b.call(a, g, l)
            } catch (n) {
                l(n)
            }
        },
        bd = function (a) {
            a.hc || (a.hc = !0, Mc(a.we, a))
        },
        $c = function (a) {
            var b = null;
            a.N && (b = a.N, a.N = b.next, b.next = null);
            a.N || (a.ha = null);
            return b
        };
    N.prototype.we = function () {
        for (var a; a = $c(this);) ad(this, a, this.D, this.Cd);
        this.hc = !1
    };
    var ad = function (a, b, c, d) {
            if (3 == c && b.qa && !b.Pa)
                for (; a && a.eb; a = a.ba) a.eb = !1;
            if (b.Y) b.Y.ba = null, fd(b, c, d);
            else try {
                b.Pa ? b.Ba.call(b.context) : fd(b, c, d)
            } catch (e) {
                gd.call(null, e)
            }
            Qc.put(b)
        },
        fd = function (a, b, c) {
            2 == b ? a.Ba.call(a.context, c) : a.qa && a.qa.call(a.context, c)
        },
        dd = function (a, b) {
            a.eb = !0;
            Mc(function () {
                a.eb && gd.call(null, b)
            })
        },
        gd = Cc,
        Yc = function (a) {
            oa.call(this, a)
        };
    la(Yc, oa);
    Yc.prototype.name = "cancel";
    var Vc = function (a, b) {
        this.resolve = a;
        this.reject = b
    };
    var hd = function () {
        this.ka = this.ka;
        this.ub = this.ub
    };
    hd.prototype.ka = !1;
    hd.prototype.ia = function () {
        if (this.ub)
            for (; this.ub.length;) this.ub.shift()()
    };
    var O = function (a, b, c, d, e) {
        hd.call(this);
        this.Ua = a;
        this.status = 1;
        this.Da = b;
        this.yb = c;
        this.mf = d;
        this.Ce = !!e;
        this.ab = Math.random();
        this.Fb = {};
        this.Va = this.Sc = null;
        this.qc = p(this.Te, this)
    };
    la(O, hd);
    O.prototype.Te = function (a) {
        if (a.origin === this.yb && (this.Ce || a.source == this.Da)) {
            var b = null;
            try {
                b = tc(a.data)
            } catch (c) {}
            if (fa(b) && (a = b.i, b.c === this.Ua && a != this.ab && (2 !== this.status && (this.status = 2, id(this), this.Va && (this.Va(), this.Va = null)), a = b.s, b = b.p, m(a) && (m(b) || fa(b)))))
                if (this.Fb.hasOwnProperty(a)) this.Fb[a](b);
                else this.Sc && this.Sc(a, b)
        }
    };
    var id = function (a) {
        var b = {};
        b.c = a.Ua;
        b.i = a.ab;
        a.Da.postMessage(wc(b), a.yb)
    };
    O.prototype.td = function () {
        if (1 === this.status) {
            try {
                this.Da.postMessage && id(this)
            } catch (a) {}
            window.setTimeout(p(this.td, this), 50)
        }
    };
    O.prototype.connect = function (a) {
        a && (this.Va = a);
        K(window, "message", this.qc);
        this.mf && this.td()
    };
    var jd = function (a, b) {
        a.Fb["lbx-rdy"] = b
    };
    O.prototype.send = function (a, b) {
        var c = {};
        c.c = this.Ua;
        c.i = this.ab;
        c.s = a;
        c.p = b;
        this.Da.postMessage(wc(c), this.yb)
    };
    O.prototype.ia = function () {
        this.status = 3;
        $b(window, "message", this.qc);
        O.Jd.ia.call(this)
    };
    var ld = function (a, b, c, d, e) {
        O.call(this, a, b, c, d);
        this.pd = e
    };
    la(ld, O);
    var nd = function (a) {
        return new N(function (b, c) {
            window.setTimeout(ia(c, Error("apmc:timeout")), 4E3);
            try {
                var d = tc(a.data),
                    e = new ld(d.c, a.source, a.origin, !0);
                md(e, a).then(function () {
                    b(e)
                }, function () {
                    e.ka || (e.ka = !0, e.ia())
                })
            } catch (f) {
                c(Error("apmc:error"))
            }
        })
    };
    ld.prototype.send = function (a, b) {
        od(this, a, b)
    };
    var md = function (a, b) {
            var c = p(a.connect, a),
                d = new N(function (a, b) {
                    k.setTimeout(ia(b, Error("apmc:nocon")), 4E3);
                    k.setTimeout(ia(c, a), 0)
                });
            d.then(p(a.qc, a, b));
            return d
        },
        od = function (a, b, c) {
            var d = {};
            d.c = a.Ua;
            d.i = a.ab;
            d.s = b;
            d.p = c;
            a.pd && (d.msg_type = a.pd);
            k.setTimeout(ia(function (a, b, c) {
                a.postMessage(b, c)
            }, a.Da, wc(d), a.yb), 0)
        };
    var pd = function () {
        this.aa = {}
    };
    ca(pd);
    var R = function (a, b, c) {
        return void 0 !== a.aa[b] ? (a = a.aa[b], m(a) && "true" === a.toLowerCase() || !0 === a) : c
    };
    var qd = function () {
        this.Fc = [];
        this.md = [];
        this.h()
    };
    qd.prototype.m = function (a) {
        this.h();
        this.g(a)
    };
    qd.prototype.h = function () {
        this.Fc.length = 0;
        this.md.length = 0
    };
    qd.prototype.g = function (a) {
        for (var b in a) {
            var c = a[b],
                d = b.toLowerCase();
            if ("ad_text" == d)
                for (var e = 0; e < c.length; ++e) this.Fc.push(c[e]);
            if ("line_rtl" == d)
                for (e = 0; e < c.length; ++e) this.md.push(c[e])
        }
    };
    var rd = function () {
        this.h()
    };
    h = rd.prototype;
    h.height = function () {
        return this.R
    };
    h.width = function () {
        return this.U
    };
    h.m = function (a) {
        this.h();
        this.g(a)
    };
    h.h = function () {
        this.oa = "";
        this.U = this.R = 0
    };
    h.g = function (a) {
        for (var b in a) {
            var c = a[b],
                d = b.toLowerCase();
            "image_url" == d && (this.oa = c);
            "height" == d && (this.R = c);
            "width" == d && (this.U = c)
        }
    };
    var sd = function () {
        this.Vd = [];
        this.Eb = null;
        this.vd = [];
        this.h()
    };
    sd.prototype.name = function () {
        return this.S
    };
    sd.prototype.m = function (a) {
        this.h();
        this.g(a)
    };
    sd.prototype.h = function () {
        this.S = "";
        this.Vd.length = 0;
        this.Eb = null;
        this.vd.length = 0
    };
    sd.prototype.g = function (a) {
        for (var b in a) {
            var c = a[b],
                d = b.toLowerCase();
            "name" == d && (this.S = c);
            if ("user_reviews" == d)
                for (var e = 0; e < c.length; ++e) this.Vd.push(c[e]);
            "screenshot_data" == d && (null === this.Eb && (this.Eb = new td), this.Eb.g(c));
            if ("promo_code" == d)
                for (e = 0; e < c.length; ++e) d = new ud, this.vd.push(d), d.g(c[e])
        }
    };
    var ud = function () {
        this.h()
    };
    ud.prototype.m = function (a) {
        this.h();
        this.g(a)
    };
    ud.prototype.h = function () {};
    ud.prototype.g = function (a) {
        for (var b in a);
    };
    var vd = function () {
        this.h()
    };
    h = vd.prototype;
    h.id = function () {
        return this.Yc
    };
    h.name = function () {
        return this.S
    };
    h.m = function (a) {
        this.h();
        this.g(a)
    };
    h.h = function () {
        this.S = this.Yc = ""
    };
    h.g = function (a) {
        for (var b in a) {
            var c = a[b],
                d = b.toLowerCase();
            "id" == d && (this.Yc = c);
            "name" == d && (this.S = c)
        }
    };
    var wd = function () {
        this.uc = [];
        this.h()
    };
    wd.prototype.product = function (a) {
        return this.uc[a]
    };
    wd.prototype.m = function (a) {
        this.h();
        this.g(a)
    };
    wd.prototype.h = function () {
        this.uc.length = 0
    };
    wd.prototype.g = function (a) {
        for (var b in a) {
            var c = a[b];
            if ("product" == b.toLowerCase())
                for (var d = 0; d < c.length; ++d) {
                    var e = new vd;
                    this.uc.push(e);
                    e.g(c[d])
                }
        }
    };
    var xd = function () {
        this.va = [];
        this.h()
    };
    xd.prototype.title = function () {
        return this.Ga
    };
    xd.prototype.m = function (a) {
        this.h();
        this.g(a)
    };
    xd.prototype.h = function () {
        this.Ga = "";
        this.va.length = 0
    };
    xd.prototype.g = function (a) {
        for (var b in a) {
            var c = a[b],
                d = b.toLowerCase();
            "title" == d && (this.Ga = c);
            if ("artists" == d)
                for (d = 0; d < c.length; ++d) this.va.push(c[d])
        }
    };
    var yd = function () {
        this.va = [];
        this.Id = [];
        this.h()
    };
    yd.prototype.title = function () {
        return this.Ga
    };
    yd.prototype.m = function (a) {
        this.h();
        this.g(a)
    };
    yd.prototype.h = function () {
        this.Ga = "";
        this.va.length = 0;
        this.Id.length = 0
    };
    yd.prototype.g = function (a) {
        for (var b in a) {
            var c = a[b],
                d = b.toLowerCase();
            "title" == d && (this.Ga = c);
            if ("artists" == d)
                for (var e = 0; e < c.length; ++e) this.va.push(c[e]);
            if ("songs" == d)
                for (e = 0; e < c.length; ++e) d = new xd, this.Id.push(d), d.g(c[e])
        }
    };
    var zd = function () {
        this.oa = [];
        this.fc = [];
        this.h()
    };
    zd.prototype.duration = function (a) {
        return this.fc[a]
    };
    zd.prototype.m = function (a) {
        this.h();
        this.g(a)
    };
    zd.prototype.h = function () {
        this.oa.length = 0;
        this.fc.length = 0
    };
    zd.prototype.g = function (a) {
        for (var b in a) {
            var c = a[b],
                d = b.toLowerCase();
            if ("image_url" == d)
                for (var e = 0; e < c.length; ++e) this.oa.push(c[e]);
            if ("duration" == d)
                for (e = 0; e < c.length; ++e) this.fc.push(c[e])
        }
    };
    var Ad = function () {
        this.h()
    };
    Ad.prototype.m = function (a) {
        this.h();
        this.g(a)
    };
    Ad.prototype.h = function () {};
    Ad.prototype.g = function (a) {
        for (var b in a);
    };
    var Bd = function () {
        this.h()
    };
    Bd.prototype.m = function (a) {
        this.h();
        this.g(a)
    };
    Bd.prototype.h = function () {};
    Bd.prototype.g = function (a) {
        for (var b in a);
    };
    var Cd = function () {
        this.Ma = null;
        this.h()
    };
    Cd.prototype.text = function () {
        return this.F
    };
    Cd.prototype.m = function (a) {
        this.h();
        this.g(a)
    };
    Cd.prototype.h = function () {
        this.F = this.oa = "";
        this.Ma = null
    };
    Cd.prototype.g = function (a) {
        for (var b in a) {
            var c = a[b],
                d = b.toLowerCase();
            "image_url" == d && (this.oa = c);
            "text" == d && (this.F = c);
            "action_urls" == d && (null === this.Ma && (this.Ma = new Bd), this.Ma.g(c))
        }
    };
    var Dd = function () {
        this.h()
    };
    Dd.prototype.m = function (a) {
        this.h();
        this.g(a)
    };
    Dd.prototype.h = function () {};
    Dd.prototype.g = function (a) {
        for (var b in a);
    };
    var S = function () {
        this.Wb = [];
        this.ib = this.jb = this.Za = this.pb = this.Qa = this.Hb = this.kb = null;
        this.Qc = [];
        this.h()
    };
    S.prototype.buttons = function (a) {
        return this.Wb[a]
    };
    S.prototype.m = function (a) {
        this.h();
        this.g(a)
    };
    S.prototype.h = function () {
        this.Wb.length = 0;
        this.ib = this.jb = this.Za = this.pb = this.Qa = this.Hb = this.kb = null;
        this.Qc.length = 0
    };
    S.prototype.g = function (a) {
        for (var b in a) {
            var c = a[b],
                d = b.toLowerCase();
            if ("buttons" == d)
                for (var e = 0; e < c.length; ++e) {
                    var f = new Cd;
                    this.Wb.push(f);
                    f.g(c[e])
                }
            "image_creative" == d && (null === this.kb && (this.kb = new rd), this.kb.g(c));
            "text_creative" == d && (null === this.Hb && (this.Hb = new qd), this.Hb.g(c));
            "app_creative" == d && (null === this.Qa && (this.Qa = new sd), this.Qa.g(c));
            "music_creative" == d && (null === this.pb && (this.pb = new yd), this.pb.g(c));
            "crossfade_creative" == d && (null === this.Za && (this.Za = new zd), this.Za.g(c));
            "iap_creative" ==
            d && (null === this.jb && (this.jb = new wd), this.jb.g(c));
            "html5_template_creative" == d && (null === this.ib && (this.ib = new Ad), this.ib.g(c));
            if ("creative_conversion_urls" == d)
                for (e = 0; e < c.length; ++e) d = new Dd, this.Qc.push(d), d.g(c[e])
        }
    };
    S.CREATIVE_TYPE_UNKNOWN = 0;
    S.CREATIVE_TYPE_TEXT = 1;
    S.CREATIVE_TYPE_IMAGE = 2;
    S.CREATIVE_TYPE_CROSSFADE_BANNER = 3;
    S.CREATIVE_TYPE_PRODUCT = 4;
    S.CREATIVE_TYPE_APP = 5;
    S.CREATIVE_TYPE_MUSIC = 6;
    S.CREATIVE_TYPE_IN_APP_PURCHASE = 7;
    S.CREATIVE_TYPE_HTML5_TEMPLATE = 8;
    var T = function () {
        this.Rc = [];
        this.Ra = null;
        this.aa = [];
        this.h()
    };
    T.prototype.height = function () {
        return this.R
    };
    T.prototype.width = function () {
        return this.U
    };
    var Ed = function (a) {
        null === a.Ra && (a.Ra = new U);
        return a.Ra
    };
    T.prototype.m = function (a) {
        this.h();
        this.g(a)
    };
    T.prototype.h = function () {
        this.U = this.R = this.Rc.length = 0;
        this.Ra = null;
        this.aa.length = 0
    };
    T.prototype.g = function (a) {
        for (var b in a) {
            var c = a[b],
                d = b.toLowerCase();
            if ("creatives" == d)
                for (var e = 0; e < c.length; ++e) {
                    var f = new S;
                    this.Rc.push(f);
                    f.g(c[e])
                }
            "height" == d && (this.R = c);
            "width" == d && (this.U = c);
            "attribution" == d && Ed(this).g(c);
            if ("flags" == d)
                for (e = 0; e < c.length; ++e) d = new Fd, this.aa.push(d), d.g(c[e])
        }
    };
    T.CREATIVE_TYPE_UNKNOWN = 0;
    T.CREATIVE_TYPE_TEXT = 1;
    T.CREATIVE_TYPE_IMAGE = 2;
    T.CREATIVE_TYPE_CROSSFADE_BANNER = 3;
    T.CREATIVE_TYPE_PRODUCT = 4;
    T.CREATIVE_TYPE_APP = 5;
    var V = function () {
        this.h()
    };
    h = V.prototype;
    h.label = function () {
        return this.ed
    };
    h.Aa = function () {
        return this.fd
    };
    h.nc = function () {
        return this.Zc
    };
    h.m = function (a) {
        this.h();
        this.g(a)
    };
    h.h = function () {
        this.fd = this.ed = "";
        this.Zc = !0
    };
    h.g = function (a) {
        for (var b in a) {
            var c = a[b],
                d = b.toLowerCase();
            "label" == d && (this.ed = c);
            "label_instance" == d && (this.fd = c);
            "include_close_button_token" == d && (this.Zc = c)
        }
    };
    var Gd = function () {
        this.w = this.Jb = this.J = null;
        this.h()
    };
    Gd.prototype.text = function () {
        return this.F
    };
    Gd.prototype.P = function () {
        null === this.J && (this.J = new V);
        return this.J
    };
    var Hd = function (a) {
        null === a.Jb && (a.Jb = new V);
        return a.Jb
    };
    Gd.prototype.K = function () {
        null === this.w && (this.w = new Id);
        return this.w
    };
    Gd.prototype.m = function (a) {
        this.h();
        this.g(a)
    };
    Gd.prototype.h = function () {
        this.F = "";
        this.w = this.Jb = this.J = null
    };
    Gd.prototype.g = function (a) {
        for (var b in a) {
            var c = a[b],
                d = b.toLowerCase();
            "text" == d && (this.F = c);
            "conversion" == d && this.P().g(c);
            "undo_conversion" == d && Hd(this).g(c);
            "survey" == d && this.K().g(c)
        }
    };
    var Id = function () {
        this.v = [];
        this.h()
    };
    h = Id.prototype;
    h.mc = function () {
        return this.Xc
    };
    h.options = function (a) {
        return this.v[a]
    };
    h.m = function (a) {
        this.h();
        this.g(a)
    };
    h.h = function () {
        this.Xc = "";
        this.v.length = 0
    };
    h.g = function (a) {
        for (var b in a) {
            var c = a[b],
                d = b.toLowerCase();
            "header" == d && (this.Xc = c);
            if ("options" == d)
                for (d = 0; d < c.length; ++d) {
                    var e = new Jd;
                    this.v.push(e);
                    e.g(c[d])
                }
        }
    };
    var Jd = function () {
        this.J = null;
        this.h()
    };
    h = Jd.prototype;
    h.text = function () {
        return this.F
    };
    h.P = function () {
        null === this.J && (this.J = new V);
        return this.J
    };
    h.m = function (a) {
        this.h();
        this.g(a)
    };
    h.h = function () {
        this.F = "";
        this.J = null
    };
    h.g = function (a) {
        for (var b in a) {
            var c = a[b],
                d = b.toLowerCase();
            "text" == d && (this.F = c);
            "conversion" == d && this.P().g(c)
        }
    };
    var Kd = function () {
            this.Ab = this.zb = this.sb = this.qb = this.lb = null;
            this.Nd = [];
            this.la = [];
            this.rb = null;
            this.h()
        },
        Ld = function (a) {
            null === a.lb && (a.lb = new V);
            return a.lb
        },
        J = function (a) {
            null === a.rb && (a.rb = new Md);
            return a.rb
        };
    Kd.prototype.m = function (a) {
        this.h();
        this.g(a)
    };
    Kd.prototype.h = function () {
        this.Bc = this.Cc = this.Xd = this.Zb = this.$a = this.ec = this.yd = this.zd = this.Ob = this.Ec = this.Jc = this.Rb = this.Sb = "";
        this.Ab = this.zb = this.sb = this.qb = this.lb = null;
        this.Nd.length = 0;
        this.wa = this.Mc = this.Kb = this.xd = this.wd = this.rd = this.qd = this.Tb = "";
        this.pa = this.lc = !1;
        this.la.length = 0;
        this.rb = null
    };
    Kd.prototype.g = function (a) {
        for (var b in a) {
            var c = a[b],
                d = b.toLowerCase();
            "attribution_text" == d && (this.Sb = c);
            "attribution_icon_url" == d && (this.Rb = c);
            "attribution_destination_url" == d && (this.Jc = c);
            "ad_feedback_text" == d && (this.Ec = c);
            "ad_feedback_icon_url" == d && (this.Ob = c);
            "pub_feedback_text" == d && (this.zd = c);
            "pub_feedback_icon_url" == d && (this.yd = c);
            "conversion_url" == d && (this.ec = c);
            "encoded_cookie" == d && (this.$a = c);
            "close_button_token" == d && (this.Zb = c);
            "why_this_ad_token" == d && (this.Xd = c);
            "why_this_ad_url" == d &&
                (this.Cc = c);
            "why_this_ad_text" == d && (this.Bc = c);
            "interaction_conversion" == d && Ld(this).g(c);
            "mute_conversion" == d && (null === this.qb && (this.qb = new V), this.qb.g(c));
            "mute_undo_conversion" == d && (null === this.sb && (this.sb = new V), this.sb.g(c));
            "pub_feedback_conversion" == d && (null === this.zb && (this.zb = new V), this.zb.g(c));
            "pub_feedback_undo_conversion" == d && (null === this.Ab && (this.Ab = new V), this.Ab.g(c));
            if ("survey_options" == d)
                for (var e = 0; e < c.length; ++e) {
                    var f = new Jd;
                    this.Nd.push(f);
                    f.g(c[e])
                }
            "back_icon_url" == d &&
                (this.Tb = c);
            "mute_confirmation_header" == d && (this.qd = c);
            "mute_confirmation_text" == d && (this.rd = c);
            "pub_feedback_confirmation_header" == d && (this.wd = c);
            "pub_feedback_confirmation_text" == d && (this.xd = c);
            "undo_text" == d && (this.Kb = c);
            "closing_countdown_text" == d && (this.Mc = c);
            "close_message" == d && (this.wa = c, this.lc = !0);
            "is_rtl_language" == d && (this.pa = c);
            if ("feedback_options" == d)
                for (e = 0; e < c.length; ++e) f = new Gd, this.la.push(f), f.g(c[e]);
            "mute_panel_data" == d && J(this).g(c)
        }
    };
    var Md = function () {
        this.h()
    };
    Md.prototype.ye = function () {
        return this.kc
    };
    Md.prototype.m = function (a) {
        this.h();
        this.g(a)
    };
    Md.prototype.h = function () {
        this.$b = this.Na = this.Pb = this.Oa = this.Qb = "";
        this.Uc = !1;
        this.dc = this.cc = this.ac = this.vc = this.kc = "";
        this.Hd = !1;
        this.ld = this.kd = this.jd = ""
    };
    Md.prototype.g = function (a) {
        for (var b in a) {
            var c = a[b],
                d = b.toLowerCase();
            "adchoices_icon_url" == d && (this.Qb = c);
            "ads_by_google_icon_url" == d && (this.Oa = c);
            "adchoices_button_text" == d && (this.Pb = c);
            "ads_by_google_button_text" == d && (this.Na = c);
            "closed_message_text" == d && (this.$b = c);
            "enable_lightbox" == d && (this.Uc = c);
            "google_logo_url" == d && (this.kc = c);
            "report_ad_button_text" == d && (this.vc = c);
            "confirmation_text" == d && (this.ac = c);
            "contributor_text" == d && (this.cc = c);
            "contributor_url" == d && (this.dc = c);
            "settings_button_first" ==
            d && (this.Hd = c);
            "lightbox_header_text" == d && (this.jd = c);
            "lightbox_settings_button_text" == d && (this.kd = c);
            "lightbox_settings_icon_url" == d && (this.ld = c)
        }
    };
    var U = function () {
        this.Lb = null;
        this.h()
    };
    U.prototype.text = function () {
        return this.F
    };
    U.prototype.position = function () {
        return this.ud
    };
    var Nd = function (a) {
        null === a.Lb && (a.Lb = new Kd);
        return a.Lb
    };
    U.prototype.m = function (a) {
        this.h();
        this.g(a)
    };
    U.prototype.h = function () {
        this.F = "";
        this.ud = 0;
        this.Lb = null
    };
    U.prototype.g = function (a) {
        for (var b in a) {
            var c = a[b],
                d = b.toLowerCase();
            "text" == d && (this.F = c);
            "position" == d && (this.ud = c);
            "user_feedback_data" == d && Nd(this).g(c)
        }
    };
    U.BOTTOM_LEFT = 0;
    U.TOP_LEFT = 1;
    U.TOP_RIGHT = 2;
    U.BOTTOM_RIGHT = 3;
    var Fd = function () {
        this.h()
    };
    h = Fd.prototype;
    h.name = function () {
        return this.S
    };
    h.value = function () {
        return this.Wd
    };
    h.m = function (a) {
        this.h();
        this.g(a)
    };
    h.h = function () {
        this.Wd = this.S = ""
    };
    h.g = function (a) {
        for (var b in a) {
            var c = a[b],
                d = b.toLowerCase();
            "name" == d && (this.S = c);
            "value" == d && (this.Wd = c)
        }
    };
    var td = function () {
        this.Dd = [];
        this.h()
    };
    td.prototype.m = function (a) {
        this.h();
        this.g(a)
    };
    td.prototype.h = function () {
        this.Dd.length = 0
    };
    td.prototype.g = function (a) {
        for (var b in a) {
            var c = a[b];
            if ("screenshots" == b.toLowerCase())
                for (var d = 0; d < c.length; ++d) {
                    var e = new Od;
                    this.Dd.push(e);
                    e.g(c[d])
                }
        }
    };
    var Od = function () {
        this.h()
    };
    h = Od.prototype;
    h.url = function () {
        return this.Sd
    };
    h.width = function () {
        return this.U
    };
    h.height = function () {
        return this.R
    };
    h.m = function (a) {
        this.h();
        this.g(a)
    };
    h.h = function () {
        this.Sd = "";
        this.R = this.U = 0
    };
    h.g = function (a) {
        for (var b in a) {
            var c = a[b],
                d = b.toLowerCase();
            "url" == d && (this.Sd = c);
            "width" == d && (this.U = c);
            "height" == d && (this.R = c)
        }
    };
    var Pd = function (a, b, c) {
        this.ne = a;
        this.ie = b;
        this.Vc = c
    };
    Pd.prototype.send = function (a) {
        var b = this.ne + "&label=" + a.label();
        a.Aa() && (b += "&label_instance=" + a.Aa());
        a.nc() && (b += "&cbt=" + this.ie);
        this.Vc && (b += "&cid=" + this.Vc);
        hc(window, b, void 0)
    };
    var Qd = function (a) {
            this.gc = a
        },
        Rd = function (a) {
            this.xa = [];
            a = document.querySelectorAll(a);
            for (var b = 0; b < a.length; ++b) this.xa.push(new Qd(a[b]))
        },
        Sd = function (a, b, c, d) {
            this.Z = c;
            this.de = b;
            this.Oc = new Rd(a);
            this.Kc = d || function () {};
            this.oc = 1
        },
        Td = function (a) {
            for (var b = a.Oc, c = a.Z, d = 0; d < b.xa.length; ++d) b.xa[d].gc.style["font-size"] = c + "px";
            a.Kc()
        },
        Ud = function (a) {
            a = p(function (a, c) {
                window.setTimeout(c, 5E3);
                for (Td(this); this.Z + this.oc <= this.de;) {
                    this.Z += this.oc;
                    Td(this);
                    var d;
                    a: {
                        d = this.Oc;
                        for (var e = 0; e < d.xa.length; ++e) {
                            var f;
                            b: {
                                f = d.xa[e];
                                var g = f.gc;
                                for (f = f.gc;;) {
                                    f = f.parentElement;
                                    if (!f || f === document.body) break;
                                    var l = f.getAttribute("wp");
                                    if (null !== l)
                                        if ("0" === l || "1" === l) {
                                            var n = g,
                                                g = f.getBoundingClientRect(),
                                                n = n.getBoundingClientRect();
                                            if (!(g.top < n.top + .5 && g.right > n.right - .5 && g.bottom > n.bottom - .5 && g.left < n.left + .5)) {
                                                f = !1;
                                                break b
                                            }
                                            if ("1" === l) break;
                                            else g = f
                                        } else throw "Waypoint value invalid";
                                }
                                f = !0
                            }
                            if (!f) {
                                d = !1;
                                break a
                            }
                        }
                        d = !0
                    }
                    if (!d) {
                        this.Z -= this.oc;
                        Td(this);
                        break
                    }
                }
                a()
            }, a);
            return new N(a)
        };
    Sd.prototype.resize = function () {
        var a = p(function (a, c) {
            window.setTimeout(c, 5E3);
            var d = p(function () {
                Ud(this).then(a)
            }, this);
            "complete" === document.readyState ? d() : K(document, "readystatechange", d)
        }, this);
        return new N(a)
    };
    var Vd = function (a, b) {
        a.Kc = b
    };
    var Wd = function (a, b, c) {
        a = a || {};
        b = Ab({
            tf: a.K.v.length,
            cb: a.dd ? "left" : "right",
            L: a.dd ? "right" : "left"
        }, a);
        var d;
        b = b || {};
        d = c || {};
        b = "&nbsp;" + ("<style" + (d.j ? ' nonce="' + d.j + '" nonce="' + d.j + '"' : "") + ">#survey-container {position: fixed; top: 0; left: 0; z-index: 9100; width: " + H(b.C) + "px; height: " + H(b.A) + "px; overflow: hidden; background-color: #FAFAFA; font-size: 0; white-space: nowrap;}.survey-horiz, .survey-vert {text-align: center;}#survey-container * {box-sizing: border-box; -moz-box-sizing: border-box; -webkit-box-sizing: border-box;}.survey-block {height: " +
                H(b.Vb) + "px;}.survey-option {position: relative; z-index: 9110; overflow: hidden; display: inline-block; padding: 1px 5px; width: " + H(b.ce) + "px; height: " + H(b.Vb) + "px; border: 1px solid #E0E0E0; background-color: #FFFFFF; cursor: pointer;}.survey-option:hover, .survey-option:active {background-color: #F5F5F5;}.survey-option div {width: 100%; height: 100%; display: table; text-align: center;}.survey-option span {vertical-align: middle; display: table-cell; color: #4285F4; font-family: Arial, sans-serif; text-align: center; font-size: 12px; line-height: 14px; white-space: normal;}@media (min-height: 54px) {.survey-horiz.survey-spaced .survey-option, .survey-vert .survey-option {box-shadow: 0px 0px 2px rgba(0,0,0,0.12), 0px 1px 3px rgba(0,0,0,0.26) !important; border: none;}}.survey-horiz .survey-option {display: inline-block; margin-" +
                H(b.L) + ": -1px; box-shadow: none;}.survey-horiz .survey-option:first-child {margin-" + H(b.L) + ": 0;}.survey-horiz.survey-spaced .survey-option {margin-" + H(b.L) + ": " + H(b.Ta) + "px;}.survey-horiz.survey-spaced .survey-option:first-child {margin-" + H(b.L) + ": 0;}.survey-horiz.jake-middle .survey-block {margin-top: " + H((b.A - b.Vb) / 2) + "px;}.survey-horiz.jake-top .survey-block {margin-top: " + H(b.Ta) + "px;}.survey-vert .survey-option, .survey-horiz.survey-spaced .survey-option {border-radius: 2px;}.survey-vert .survey-option {margin: " +
                H(b.Ta) + "px auto 0 auto; display: block;}.survey-vert.jake-top .survey-option:first-child {margin-top: " + H(b.Ta) + "px;}.survey-vert.jake-middle .survey-option:first-child {margin-top: " + H((b.A - b.nf) / 2) + "px;}.scroll {position: absolute; top: 0px; z-index: 9120; display: none; width: 30px; border: 1px solid transparent; background-color: #666; background-color: rgba(0,0,0,0.6); text-align: center; transition: visibility 150ms step-end; cursor: pointer;}.survey-scroll .scroll {display: block;}.scroll div {position: absolute; top: 50%; left: 50%; height: 36px; width: 36px; margin: -18px 0 0 -18px;}.scroll:hover, .scroll:active {background-color: #999; background-color: rgba(0,0,0,0.4);}.scroll-right {" +
                H(b.cb) + ": 0; border-top-" + H(b.L) + "-radius: 4px; border-bottom-" + H(b.L) + '-radius: 4px;}.scroll-right div {background-image:url("https://www.gstatic.com/images/icons/material/system/1x/keyboard_arrow_' + F(b.cb) + '_white_36dp.png");}.scroll-left {' + H(b.L) + ": 0; border-top-" + H(b.cb) + "-radius: 4px; border-bottom-" + H(b.cb) + '-radius: 4px;}.scroll-left div {background-image:url("https://www.gstatic.com/images/icons/material/system/1x/keyboard_arrow_' + F(b.L) + '_white_36dp.png");}.survey-option {transition: margin 150ms linear;}</style>') +
            '<div id="survey-container">';
        d = (d = Ab({
            options: a.K.v
        }, a)) || {};
        c = c || {};
        a = "";
        d = d.options;
        for (var e = d.length, f = 0; f < e; f++) a += '<a class="survey-block survey-option"><div><span>' + B(d[f].text()) + "</span></div></a>";
        a += '<a class="survey-block scroll scroll-left" style="' + (c.j ? "/*" + c.j + "*//*" + c.j + "*/" : "") + 'visibility:hidden"><div></div></a><a class="survey-block scroll scroll-right" style="' + (c.j ? "/*" + c.j + "*//*" + c.j + "*/" : "") + 'visibility:visible"><div></div></a>';
        return b + a + "</div>"
    };
    var Xd = function (a, b, c, d, e, f) {
        this.wc = a;
        this.B = b;
        this.u = c;
        this.pc = d;
        this.w = e;
        this.Pc = f;
        this.M = 96;
        this.Sa = Math.min(50, this.u);
        this.I = 8;
        this.Ed = 30;
        this.T = 0;
        this.za = !0;
        this.od = Math.max(1, Math.floor((this.B - this.Ed - 1) / (this.M - 1)));
        this.collapse()
    };
    Xd.prototype.Bb = function () {
        vb(this.wc, Wd, {
            C: this.B,
            A: this.u,
            dd: this.pc,
            ce: this.M,
            Vb: this.Sa,
            Ta: this.I,
            nf: this.w.v.length * (this.Sa + this.I) - this.I,
            rf: this.w.v.length * (this.M - 1) + 1,
            sf: this.w.v.length * (this.M + this.I) - this.I,
            K: this.w
        });
        var a = A("scroll-right");
        a && K(a, "click", p(this.Le, this));
        (a = A("scroll-left")) && K(a, "click", p(this.Ke, this));
        for (var a = document, a = a.querySelectorAll && a.querySelector ? a.querySelectorAll(".survey-option") : jb("survey-option"), b = 0; b < a.length; b++) K(a[b], "click", p(this.sc, this, b))
    };
    Xd.prototype.expand = function () {
        this.wc.style.display = "block"
    };
    Xd.prototype.collapse = function () {
        this.wc.style.display = "none"
    };
    Xd.prototype.display = function (a) {
        this.Pc = a;
        this.expand()
    };
    var Yd = function (a) {
        var b = [],
            c = a.u,
            d = a.B,
            e = a.Sa,
            f = a.w.v.length * (a.M - 1) + 1,
            g = a.w.v.length * (a.M + a.I) - a.I;
        a = a.w.v.length * (a.Sa + a.I) - a.I;
        c > a && d < f ? (b.push("survey-vert"), c > a + 50 ? b.push("jake-top") : b.push("jake-middle")) : (b.push("survey-horiz"), d >= g && b.push("survey-spaced"), d < f && b.push("survey-scroll"), c > e + 50 ? b.push("jake-top") : b.push("jake-middle"));
        return b
    };
    Xd.prototype.sc = function (a) {
        (a = this.w.options(a).P()) && this.Pc(a);
        this.collapse()
    };
    var Zd = function (a) {
        var b = -1 * a.T * (a.M - 1);
        a.za || (b = a.T === a.w.v.length - a.od ? a.B - (a.w.v.length * (a.M - 1) + 1) : b + a.Ed);
        return b
    };
    Xd.prototype.Le = function () {
        var a = A("scroll-right"),
            b = A("scroll-left"),
            c = A("survey-option");
        if (a && b && c) {
            var d = this.w.v.length - this.od;
            this.T = Math.min(this.T + 1, d);
            this.za = this.T < d;
            this.za || (a.style.visibility = "hidden", b.style.visibility = "visible");
            c.style["margin-" + (this.pc ? "right" : "left")] = Zd(this) + "px"
        }
    };
    Xd.prototype.Ke = function () {
        var a = A("scroll-right"),
            b = A("scroll-left"),
            c = A("survey-option");
        if (a && b && c) {
            this.T = Math.max(this.T - 1, 0);
            if (this.za = 0 === this.T) a.style.visibility = "visible", b.style.visibility = "hidden";
            c.style["margin-" + (this.pc ? "right" : "left")] = Zd(this) + "px"
        }
    };
    var ae = function (a, b, c) {
        var d = pd.ma();
        this.u = a;
        this.B = b;
        null !== c ? this.l = c : rc({
            context: "mta_noufdata"
        });
        this.Fd = !1;
        this.Xa = new Pd(this.l.ec, this.l.Zb, this.l.$a);
        this.ue = !!R(d, "show_feedback_survey_button");
        this.Tc = !!R(d, "enable_jake_why_this_ad");
        c = J(this.l);
        a = "//support.google.com/adsense/troubleshooter/1631343";
        c && c.Oa && c.Na ? (b = c.Na, c = c.Oa) : (b = c.Pb, c = c.Qb);
        this.Tc && $d(this.l) && (b = this.l.Bc, a = this.l.Cc);
        this.Ee = {
            A: this.u,
            C: this.B,
            bf: this.ue,
            o: this.l,
            $e: b,
            af: a,
            Ze: c
        };
        this.Ea = null;
        this.ob = this.l.la[1 <
            this.l.la.length ? 1 : 0];
        this.Xb = !1;
        this.X = null;
        this.Bd = Wc().resolve;
        this.hd = !1;
        this.Ub = p(this.ee, this);
        this.Gd = !1;
        K(oc, "message", this.Ub);
        oc.top.postMessage(wc({
            msg_type: "mta-lbx",
            googMsgType: "sth"
        }), "*")
    };
    la(ae, hd);
    var $d = function (a) {
        return !!a && !!a.Xd && !!a.Cc && !!a.Bc
    };
    h = ae.prototype;
    h.Bb = function () {
        var a = y("mute_panel");
        a && vb(a, Tb, this.Ee);
        var b = J(this.l).$b.replace("%1$s", '<img src="' + J(this.l).kc + '">');
        y("closed_text").innerHTML = b;
        y("final_closed_text").innerHTML = b;
        J(this.l).cc && J(this.l).dc && (y("contributor_msg").innerHTML = J(this.l).cc.replace("<a", '<a target="_blank" style="white-space:nowrap"').replace("%1$s", J(this.l).dc));
        (b = y("report_btn")) && K(b, "click", p(this.Ve, this));
        this.Tc && $d(this.l) && (b = y("settings_btn")) && K(b, "click", p(this.We, this));
        var b = y("survey_panel"),
            c =
            this.ob.K(),
            d = ["jake-top"];
        b && c && (this.Ea = new Xd(b, this.B, this.u, this.l.pa, c), d = Yd(this.Ea), this.Ea.Bb());
        a.className = d.join(" ");
        var e = new Sd(".panel-row", 16, 9);
        Vd(e, function () {
            var a = y("ad_closed_panel"),
                b = r;
            13 >= e.Z && (b = q);
            a && b.call(null, a, "fallback-wrap")
        });
        var f = new Sd(".btn-text", 16, 9),
            a = new Sd(".conf-msg", 17, 12),
            b = new Sd("#final_closed_text", 17, 12);
        return Uc([e.resize().then(function () {
            f.resize()
        }), a.resize(), b.resize()])
    };
    h.We = function () {
        var a = new V;
        a.g({
            label: "closebutton_whythisad_click",
            Aa: "1",
            nc: !1
        });
        this.Xa.send(a)
    };
    h.ee = function (a) {
        this.Xb || (this.Xb = !0, nd(a).then(p(this.he, this), p(this.ge, this)))
    };
    h.he = function (a) {
        $b(oc, "message", this.Ub);
        this.X = a;
        jd(this.X, p(function () {
            this.hd = !0
        }, this));
        this.Bd && this.Bd(a);
        var b = this.ob.K().v;
        a = [];
        for (var c = 0; c < b.length; ++c) a.push(b[c].text());
        b = {};
        c = {};
        c["d-lht"] = J(this.l).jd;
        c["d-sbt"] = J(this.l).kd;
        c["d-siu"] = J(this.l).ld;
        c["d-oa"] = a;
        b.ufd = c;
        this.X.send("chk-lbx", b)
    };
    h.ge = function () {
        this.Xb = !1
    };
    h.Ve = function () {
        var a = this.ob.P();
        this.Gd || (a ? (this.Xa.send(a), this.Gd = !0) : rc({
            context: "mta_nomoconv"
        }));
        this.hd && J(this.l).Uc ? (a = p(this.Ye, this), this.X.Fb["lbx-exit"] = a, this.X.send("show-lbx", {})) : this.Ea ? this.Ea.display(p(this.Ad, this)) : be(this)
    };
    h.Ye = function (a) {
        a = a.foi;
        (a = this.ob.K().options(a).P()) && this.Ad(a)
    };
    h.Ad = function (a) {
        this.Xa.send(a);
        be(this)
    };
    var be = function (a) {
        var b = y("survey_panel");
        b && r(b, "visible");
        (b = y("post_survey_panel")) && q(b, "visible");
        window.setTimeout(p(a.qe, a), 1600)
    };
    h = ae.prototype;
    h.qe = function () {
        var a = y("final_closed_panel");
        a && q(a, "visible");
        window.setTimeout(p(this.re, this), 300)
    };
    h.re = function () {
        var a = y("final_closed_text");
        a && q(a, "visible");
        window.setTimeout(p(this.je, this), 900)
    };
    h.je = function () {
        if (this.l.lc) {
            var a = tc(this.l.wa);
            Ac(a);
            a = a.msg_type;
            if ("ablate-me" == a || "resize-me" == a || "dismiss" == a || "i-dismiss" == a) try {
                var b = this.l.wa;
                "i-dismiss" == a ? window.parent.interstitialAdFrame.dismiss() : window.top.postMessage(b, "*")
            } catch (c) {
                sc("jmta::mute", c, function (a) {
                    a.closeMsg = b
                })
            }
        }
    };
    h.expand = function () {
        var a = y("ad_closed_panel");
        a && q(a, "visible");
        this.Fd || ((a = Ld(this.l)) ? (this.Xa.send(a), this.Fd = !0) : rc({
            context: "mta_noiconv"
        }))
    };
    h.collapse = function () {
        var a = y("ad_closed_panel");
        a && r(a, "visible")
    };
    h.ia = function () {
        $b(oc, "message", this.Ub);
        if (this.X) {
            var a = this.X;
            a.ka || (a.ka = !0, a.ia())
        }
        ae.Jd.ia.call(this)
    };
    var ce = function (a, b, c) {
            a = a || {};
            c = c || {};
            var d;
            b = a || {};
            d = c || {};
            var e = b.height > 2 * b.width,
                f = b.width > 2 * b.height;
            b = "" + ("<style" + (d.j ? ' nonce="' + d.j + '" nonce="' + d.j + '"' : "") + ">#info_card {height:" + H(b.A) + "px;" + H(b.Be) + ":" + H(-b.C) + "px; line-height:normal; position:absolute;" + H(b.pf) + ":" + H(-b.A) + "px; width:" + H(b.C) + "px; z-index:9100;}#info_container {display:-webkit-box; height:" + H(b.height) + "px; -webkit-box-orient:vertical; -webkit-box-pack:center; position:absolute; right:0; top:0; width:" + H(b.width) + "px;}#info_container * {box-sizing:border-box; -moz-box-sizing:border-box; -webkit-box-sizing:border-box;}#back_section{cursor:pointer; opacity:1.0; width:" +
                (e ? H(b.width) : "30") + "px; height:" + (e ? "30" : H(b.height)) + "px; display:table-cell; vertical-align:middle; text-align:center;}#back_section.hidden{display:none;}#back_section.expand{width:" + (e ? H(b.width) : "50") + "px;}#info_content {display:" + (e ? "block;" : "table-cell;") + "height:" + (e ? H(b.height - 30) : H(b.height)) + "px; position:relative;" + (e ? "" : "vertical-align:middle;") + "width:" + (e ? H(b.width) : H(b.width - 30)) + "px;}#info_content.expand{height:" + H(b.height) + "px; width:" + H(b.width) + "px;}#info_content.shrink {width:" +
                (e ? H(b.width) : H(b.width - 50)) + "px;}#survey_page .header {text-align:center;}#survey_page table {border-collapse:collapse;}#survey_page td {padding:0;}#undo_link {cursor:pointer;}.half{" + (f ? "width" : "height") + ":" + (e && !b.Ia ? "15%" : "50%") + ";}.athird{" + (f ? "width" : "height") + ":" + (e && !b.Ia ? "15%" : "33%") + ";}.overlay{position:absolute; bottom:" + H(b.A - b.height) + "px; left:" + H(b.C - b.width) + "px; right:0; top:0;}.opt_tappable{bottom:0; cursor:pointer; left:0; margin:" + (f ? "0 5px;" : "5px 0;") + "position:absolute; right:0; top:0;}.opt_border {" +
                (f ? "border-left:1px solid #ccc;border-right:1px solid #ccc;" : "border-bottom:1px solid #ccc;border-top:1px solid #ccc;") + "}.opt_border_last {" + (e ? "border-bottom:1px solid #ccc;" : "") + "}.middle{vertical-align:middle !important;}</style>");
            a.Ia ? (d = c || {}, d = "<style" + (d.j ? ' nonce="' + d.j + '" nonce="' + d.j + '"' : "") + ">#info_card {background-color:rgba(255,255,255,0.9);}#info_container {box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.16), 0 2px 5px 0 rgba(0, 0, 0, 0.26);}</style>") : d = "";
            b += d;
            if (a.Ja) {
                d = a || {};
                var e = c || {},
                    f = d.width > 2 * d.height,
                    g = d.height > 2 * d.width,
                    l = (60 > d.height ? "11" : "12") + "px",
                    n = "" + (16E3 < d.height * d.width ? "20" : "17"),
                    t = "" + (d.o.pa ? "right" : "left"),
                    x = "" + (d.o.pa ? "left" : "right");
                d = "" + ("<link href='//fonts.googleapis.com/css?family=Roboto+Condensed|Roboto:500,700' rel='stylesheet' type='text/css'><style" + (e.j ? ' nonce="' + e.j + '" nonce="' + e.j + '"' : "") + ">#info_card{background-color:#F5F5F5;}#info_card *{color:#616161; font-family:'Roboto Condensed', san-serif; font-size:" + H(l) + ";" + (60 > d.height ? "line-height:" +
                        H(l) + ";" : "") + "}#info_card .fb_opt_txt, #info_card .conf .header, #undo_link {font-family:'Roboto', san-serif;}#info_card .header {color:#000;}#back_section{background-color:#e2e2e2;}" + (d.o.pa ? "#info_container {direction:rtl;}#back_section {transform:scaleX(-1); -o-transform:scaleX(-1); -ms-transform:scaleX(-1); -moz-transform:scaleX(-1); -webkit-transform:scaleX(-1);}" : "") + "#fb_tbl {border-collapse:collapse; width:100%;" + (f ? "" : g && !d.Ia ? "height:45%;" : "height:100%;") + "}.menu_icon {width:" + H(n) + "px; height:" +
                    H(n) + "px;}#survey_page {border-collapse:collapse;" + (f ? "" : g && !d.Ia ? "height:45%;" : "height:100%;") + "width:100%;}#survey_page .header {" + (f ? "" : "margin-top:20px;") + (50 < d.height ? "margin-bottom:5px;" : "") + "}.fb_opt{padding:0 5px; position:relative; text-align:center; vertical-align:" + (f ? "top" : "middle") + ";}" + (f ? "" : ".overlay.opt_border, .overlay.opt_border_last{left:25%; right:25%;}") + ".cell {display:table-cell; vertical-align:middle;}.conf {" + (g ? "padding:0 10px;" : "padding-" + H(t) + ":" + (16E3 < d.height * d.width ?
                        "10" : "5") + "px;") + "}.conf .header {font-weight:500;" + (50 < d.height ? "margin-bottom:5px;" : "") + (g ? "margin-top:20px;" : "") + "}.fb_opt_txt {font-weight:bold;}#undo_link {color:#4285F4; font-weight:bold; text-transform:uppercase;}#countdown {color:" + H("#303030") + ";}img#survey_logo {position:absolute; bottom:0; margin-bottom:9px;" + H(x) + ":0; margin-" + H(x) + ":9px;}</style>");
                c = c || {};
                c = '<div id="info_container"><div id="back_section" onclick="' + (c.j ? "/*" + c.j + "*//*" + c.j + "*/" : "") + 'handleClick(\'backClick\', event)"><img id="back_icon" src="' +
                    E(G(a.o.Tb)) + '" /><span id="undo_link">' + B(a.o.Kb) + '</span></div><div id="info_content"></div></div>';
                c = d + c
            } else {
                d = a || {};
                var e = c || {},
                    f = d.width > 2 * d.height,
                    g = d.height > 2 * d.width,
                    l = "" + (d.Ka ? "#333" : "#f1f2f2"),
                    n = "" + (d.Ka ? "#333" : "#fff"),
                    t = "" + (d.Ka ? "#fff" : "#333"),
                    x = "" + (d.Ka ? "#ccc" : "#999"),
                    z = "" + (d.Ka ? "#e5e5e5" : "#666");
                c = "" + ("<style" + (e.j ? ' nonce="' + e.j + '" nonce="' + e.j + '"' : "") + ">#info_card {font:bold " + H((60 < d.height ? "12" : "11") + "px") + " Roboto;}#info_container > ul {list-style-type:none; margin:0; padding:0;}" +
                        (g ? "" : "#info_container > ul > li {clear:none; float:left; line-height:normal;}") + "#back_section{background-color:" + H(l) + ";" + (g ? "border-bottom:1px solid #ccc;" : "border-right:1px solid #ccc;") + "}#info_content {display:table; background-color:" + H(n) + "; opacity:0.97;}" + (f ? ".inline {float:left;}" : "") + ".mn_opt {color:" + H("#39c") + "; display:table;" + (f ? "height:" + H(d.height) + "px;" : "width:" + (g ? H(d.width) : H(d.width - 30)) + "px;") + (60 >= d.height ? "line-height:11px;" : "") + "padding:0 5px;}.cell {display:table-cell; position:relative; width:inherit;}.conf {color:" +
                        H(x) + ";" + (g ? "padding:5px 10px;" : "padding-left:" + (16E3 < d.height * d.width ? "10" : "5") + "px;") + (g ? "" : "vertical-align:middle;") + "}.header {color:" + H(t) + "; margin-bottom:" + (50 > d.height ? "0" : "5") + "px;}.fb_opt{color:" + H("#39c") + "; padding:" + (50 > d.height ? "2" : "5") + "px 0; position:relative;}.center{text-align:center;}#undo_link {color:" + H("#39c") + ";}#survey_page {display:table-cell;" + (g ? "" : "vertical-align:middle;") + "}#countdown {color:" + H(z) + ";}#border_overlay {border:1px solid #ccc; pointer-events:none;}</style>") +
                    '<div id="info_container"><ul><li><div id="back_section" onclick="' + (c.j ? "/*" + c.j + "*/" : "") + 'handleClick(\'backClick\', event)"><img id="back_icon" src="' + E(G(a.o.Tb)) + '" /><span id="undo_link">' + B(a.o.Kb) + '</span></div></li><li><div id="info_content"></div></li></ul></div><div id="border_overlay" class="overlay"></div>'
            }
            return b + c
        },
        de = function (a, b, c) {
            a = a || {};
            c = c || {};
            b = "";
            if (a.Ja) {
                var d;
                d = a || {};
                a = c || {};
                c = d.width > 2 * d.height;
                var e = "" + (d.na ? "half" : "athird");
                d = "" + ('<table id="fb_tbl"><tr>' + (d.na ? "" : '<td class="fb_opt ' +
                        E(e) + '"><img src="' + E(G(d.o.Rb)) + '" class="menu_icon" /><div>' + B(d.o.Sb) + '</div><div class="opt_tappable" onclick="' + (a.j ? "/*" + a.j + "*//*" + a.j + "*/" : "") + "handleClick('attributionClick', event)\"></div></td>") + (c || d.na ? "" : "</tr><tr>") + '<td class="fb_opt ' + E(e) + '"><img src="' + E(G(d.o.yd)) + '" class="menu_icon" /><div>' + B(d.o.zd) + '</div><div class="opt_tappable" onclick="' + (a.j ? "/*" + a.j + "*//*" + a.j + "*/" : "") + "handleClick('pubMuteClick', event)\"></div></td>" + (c ? "" : "</tr><tr>") + '<td class="fb_opt ' + E(e) + '"><img src="' +
                    E(G(d.o.Ob)) + '" class="menu_icon" /><div>' + B(d.o.Ec) + '</div><div class="opt_tappable" onclick="' + (a.j ? "/*" + a.j + "*//*" + a.j + "*/" : "") + "handleClick('adMuteClick', event)\"></div></td></tr></table>");
                b += d
            } else {
                d = "" + (a.na ? "half" : "athird");
                d = a.na ? "" : '<div class="inline center ' + E(d) + ' mn_opt"><div class="cell middle"><img src="' + E(G(a.o.Rb)) + '" class="menu_icon" /><div class="fb_opt_txt">' + B(a.o.Sb) + '</div><div class="opt_tappable" onclick="' + (c.j ? "/*" + c.j + "*/" : "") + "handleClick('attributionClick', event)\"></div></div></div>";
                a = (a = Ab({
                    options: a.o.la
                }, a)) || {};
                c = c || {};
                for (var e = "", f = "" + (a.na ? "half" : "athird"), g = a.options, l = g.length, n = 0; n < l; n++) var t = g[n],
                    e = e + ('<div class="inline center ' + E(f) + " mn_opt opt_border" + (n == l - 1 ? "_last" : "") + '"><div class="cell middle"><img src="' + E(G(a.o.Ob)) + '" class="menu_icon" /><div class="fb_opt_txt">' + B(t.text()) + '</div><div class="opt_tappable" onclick="' + (c.j ? "/*" + c.j + "*//*" + c.j + "*//*" + c.j + "*//*" + c.j + "*/" : "") + "handleClick('menuClick', event, " + E(Ib(n)) + ')"></div></div></div>');
                b += d + e
            }
            return b
        },
        ee = function (a, b, c) {
            a = a || {};
            c = c || {};
            b = "";
            if (a.Ja) {
                var d;
                d = a || {};
                c = c || {};
                var e = d.width > 2 * d.height;
                a = "" + ('<table id="survey_page"><tr><td><div class="header center">' + B(d.Kd) + '</div></td></tr><tr><td style="' + (c.j ? "/*" + c.j + "*//*" + c.j + "*/" : "") + 'height:100%;"><table style="' + (c.j ? "/*" + c.j + "*//*" + c.j + "*/" : "") + 'width:100%;height:100%"><tr>');
                d = d.Ld;
                for (var f = d.length, g = 0; g < f; g++) a += '<td class="athird fb_opt middle"><span class="fb_opt_txt">' + B(d[g].text()) + '</span><div class="overlay ' + (0 != g && g != f - 1 ? "opt_border" :
                    "") + '"></div><div class="opt_tappable" onclick="' + (c.j ? "/*" + c.j + "*//*" + c.j + "*//*" + c.j + "*//*" + c.j + "*/" : "") + "handleClick('surveyOptionClick', event, " + E(Ib(g)) + ')"></div></td>' + (e || g == f - 1 ? "" : "</tr><tr>");
                b += a + "</tr></table></td></tr></table>"
            } else {
                b += '<div id="survey_page"><div class="header center">' + B(a.Kd) + "</div>";
                a = a.Ld;
                e = a.length;
                for (d = 0; d < e; d++) b += '<div class="inline athird center fb_opt ' + (0 != d ? "opt_border" : "") + (d == e - 1 ? "_last" : "") + '"><div style="' + (c.j ? "/*" + c.j + "*//*" + c.j + "*/" : "") + 'display:table;width:100%;height:100%"><div class="cell middle">' +
                    B(a[d].text()) + '</div></div><div class="opt_tappable" onclick="' + (c.j ? "/*" + c.j + "*//*" + c.j + "*/" : "") + "handleClick('surveyOptionClick', event, " + E(Ib(d)) + ')"></div></div>';
                b += "</div>"
            }
            return b
        },
        fe = function (a, b, c) {
            a = a || {};
            c = c || {};
            return '<div class="cell conf"><div class="header">' + B(a.mc) + ' <a id="undo_link" onclick="' + (c.j ? "/*" + c.j + "*/" : "") + "handleClick('undoClick', event)\">" + B(a.lf) + "</a></div>" + B(a.text) + ' <span id="countdown" style="' + (c.j ? "/*" + c.j + "*/" : "") + 'display:none"></span></div>' + (a.cf ? '<img id="survey_logo" src="//pagead2.googlesyndication.com/pagead/images/mtad/mat_logo.png" />' :
                "")
        };
    var ge = function () {
        this.Yb = {};
        var a = p(this.Ie, this);
        aa("handleClick", a)
    };
    ca(ge);
    ge.prototype.V = function (a, b) {
        this.Yb[b] = a
    };
    ge.prototype.Ie = function (a, b, c) {
        ea(this.Yb[a]) && this.Yb[a].apply(this, Array.prototype.slice.call(arguments, 1))
    };
    var he = function () {
        this.vb = [];
        var a = p(this.rc, this);
        aa("onLoad", a)
    };
    ca(he);
    he.prototype.V = function (a) {
        this.vb.push(a)
    };
    he.prototype.rc = function () {
        for (var a = 0; a < this.vb.length; a += 1) ea(this.vb[a]) && this.vb[a]()
    };
    var ie = ["", "moz", "ms", "O", "webkit"];
    var je = function (a, b, c, d, e) {
        this.u = a;
        this.B = b;
        this.gb = c;
        this.Mb = d;
        this.Wc = !1;
        this.l = e;
        this.La = 0;
        this.ya = this.Ya = null;
        this.nb = !1;
        a = pd.ma();
        this.sa = !!R(a, "use_material");
        this.Ha = this.Md = null;
        this.te = !!R(a, "enable_expand_animation");
        this.Ae = !!R(a, "hide_attribution_menu");
        this.Ue = !!R(a, "replace_back_undo_with_text");
        this.Td = !!R(a, "use_dynamic_overlay_size");
        this.xb = this.B;
        this.wb = this.u;
        a = ge.ma();
        a.V(p(this.He, this), "backClick");
        a.V(p(this.Ge, this), "attributionClick");
        a.V(p(this.Je, this), "menuClick");
        a.V(p(this.sc, this), "surveyOptionClick");
        a.V(p(this.Me, this), "undoClick");
        he.ma().V(p(this.rc, this))
    };
    je.prototype.Bb = function () {
        if (this.Td) {
            var a = Math.min(this.u, 60),
                b = 468 >= this.B ? this.B : 320;
            270 > b && (250 > this.u ? a = this.u : (a = Math.min(this.u, 150), this.u > 2 * this.B && (a = Math.max(a, Math.floor(.45 * this.u)))));
            this.xb = b;
            this.wb = a
        }
        vb(y("info_card"), ce, {
            A: this.u,
            C: this.B,
            height: this.wb,
            width: this.xb,
            Be: this.gb,
            pf: this.Mb,
            Ka: R(pd.ma(), "uses_octagon_sdk", !1),
            Ja: this.sa,
            Ia: this.Td,
            o: this.l
        });
        ke(this)
    };
    je.prototype.rc = function () {
        if (this.te)
            for (var a = y("info_card"), b = this.gb + " linear 0.2s," + this.Mb + " linear 0.2s", c = 0; c < ie.length; c++) mc(a, ie[c] ? ie[c] + "Transition" : "transition", b)
    };
    je.prototype.collapse = function () {
        var a = y("info_card");
        mc(a, this.gb, -1 * this.B + "px");
        mc(a, this.Mb, -1 * this.u + "px")
    };
    je.prototype.expand = function () {
        ke(this);
        var a = y("info_card");
        mc(a, this.gb, "0px");
        mc(a, this.Mb, "0px");
        this.Wc || (le(this, Ld(this.l)), this.Wc = !0)
    };
    var ke = function (a) {
            vb(y("info_content"), de, {
                height: a.wb,
                width: a.xb,
                Ja: a.sa,
                na: a.Ae,
                o: a.l
            });
            a.La = 1;
            me(!0)
        },
        ne = function (a, b, c) {
            vb(y("info_content"), fe, {
                mc: b,
                text: c,
                lf: a.l.Kb,
                cf: 16E3 < a.B * a.u && a.sa
            });
            a.La = 3;
            me(!1)
        },
        me = function (a, b) {
            var c = y("back_section"),
                d = y("info_content");
            if (c && d)
                if (a) {
                    r(c, "hidden");
                    r(d, "expand");
                    var e = y("back_icon"),
                        f = y("undo_link");
                    e && f && (b ? (q(c, "expand"), q(d, "shrink"), e.style.display = "none", f.style.display = "inline") : (r(c, "expand"), r(d, "shrink"), e.style.display = "inline", f.style.display =
                        "none"))
                } else q(c, "hidden"), q(d, "expand"), r(d, "shrink")
        },
        le = function (a, b) {
            var c = a.l.ec + "&label=" + b.label();
            "" !== b.Aa() && (c += "&label_instance=" + b.Aa());
            b.nc() && (c += "&cbt=" + a.l.Zb);
            0 < a.l.$a.length && (c += "&cid=" + a.l.$a);
            (new Image).src = c
        };
    je.prototype.df = function (a, b, c) {
        if (3 == this.La && !(0 > b || b > a || this.ya)) {
            var d = a,
                e = y("countdown"),
                f = this.l.Mc;
            a = p(function () {
                var a = "";
                0 < d && (a = f.replace("%1$d", String(d)));
                e.style.display = a ? "inline" : "none";
                kb(e, a);
                if (d == b) try {
                    var l = this.l.wa;
                    "i-dismiss" == c ? window.parent.interstitialAdFrame.dismiss() : window.top.postMessage(l, "*");
                    this.nb = !0
                } catch (n) {
                    sc("iaf::mute", n, function (a) {
                        a.closeMsg = l
                    })
                }
                0 >= d && oe(this);
                d--
            }, this);
            a();
            0 <= d && (this.ya = k.setInterval(a, 1E3))
        }
    };
    var oe = function (a) {
            a.ya && (k.clearInterval(a.ya), a.ya = null, a.nb = !1);
            a.Ya && (window.clearTimeout(a.Ya), a.Ya = null);
            if (a = y("countdown")) a.style.display = "none"
        },
        pe = function (a) {
            if (a.l.lc) {
                var b = tc(a.l.wa),
                    c = Ac(b),
                    b = b.msg_type;
                if ("ablate-me" == b || "resize-me" == b || "dismiss" == b || "i-dismiss" == b) {
                    var d = Ub(c["secs-to-countdown"], 2);
                    a.Ya = window.setTimeout(p(a.df, a, Ub(c.countdown, 0), Ub(c["message-tick"], 0), b), 1E3 * d)
                }
            }
        };
    h = je.prototype;
    h.He = function () {
        if (!this.nb) switch (oe(this), this.La) {
        case 1:
            this.collapse();
            break;
        case 2:
            ke(this), this.Ha && le(this, this.Ha)
        }
    };
    h.Me = function () {
        this.nb || (oe(this), this.collapse(), this.Ha && le(this, this.Ha))
    };
    h.Ge = function () {
        window.open(this.l.Jc)
    };
    h.Je = function (a, b) {
        var c = this.l.la[b];
        le(this, c.P());
        this.Ha = Hd(c);
        if (null !== c.w && 0 < c.K().v.length) {
            var d = c.K(),
                c = d.mc(),
                d = d.v,
                e;
            e = y("info_content");
            vb(e, ee, {
                height: this.wb,
                width: this.xb,
                Ja: this.sa,
                Kd: c,
                Ld: d
            });
            this.La = 2;
            this.Md = d;
            me(!0, this.Ue)
        } else ne(this, this.l.wd, this.l.xd), pe(this)
    };
    h.sc = function (a, b) {
        ne(this, this.l.qd, this.l.rd);
        le(this, this.Md[b].P());
        pe(this)
    };
    var ye = function (a, b, c, d, e, f, g, l, n, t, x, z, ua, xa, ya, Y, D, C, I, Ae, L, P, ib, Vb, kd, na, v, Q, Be) {
            this.Dc = a;
            this.da = b;
            this.H = c;
            this.W = d;
            this.O = e;
            this.G = f;
            this.Nc = g;
            this.bb = l;
            this.ke = n;
            this.xe = t;
            this.Ic = x;
            this.Od = z;
            this.xc = ua;
            this.Pd = xa;
            this.Gb = ya;
            this.yc = Y;
            a: for (a = this.H, b = "A", c = a.childNodes, d = 0; d < c.length; d++)
                if (e = c.item(d), "undefined" != typeof e.tagName && e.tagName.toUpperCase() == b) {
                    a = e;
                    break a
                }
            this.ga = a;
            this.Ne = !0 === Be;
            this.Db = "left" == C;
            this.Fa = this.ca = null;
            this.$c = na;
            this.bd = !0 === L;
            this.sa = !!ib;
            this.fa = null;
            if (Vb) {
                L = new T;
                L.m(v);
                if (v.flags && (ib = pd.ma(), v = v.flags))
                    for (ib.aa = {}, na = 0; na < v.length; na++) ib.aa[v[na].name] = v[na].value;
                this.fa = (v = J(Nd(Ed(L)))) && (v.Qb && v.Pb || v.Oa && v.Na) && v.$b && v.ye && v.vc && v.ac ? new ae(L.height(), L.width(), Nd(Ed(L))) : new je(L.height(), L.width(), C, this.bd ? "bottom" : "top", Nd(Ed(L)));
                this.fa.Bb()
            }
            this.sa || (C = "undefined" != typeof SVGElement && "undefined" != typeof document.createElementNS, "img" == I && (C = !1), C ? "adchoices" == D ? (D = Q ? qe : re, W(this.W, se(te(), D("0px"))), this.Db ? (I = this.O + 2, Q = 0) : (I =
                5, Q = this.G - this.O - 0), this.ca = ue(this.Od, I, this.yc, this.xc), W(this.ga, se(ve(this, this.G, this.bb), D(Q + "px"), this.ca))) : "adsbygoogle" == D ? (D = we, I = te(), Q = D("0px"), W(this.W, se(I, Q)), this.Db ? (v = 0, Q = this.O + 2, C = this.G - this.Gb - 5) : (Q = 5, C = this.G - this.Gb - 2 - 0 - this.O, v = this.G - this.O - 0), I = ve(this, this.G, this.bb), this.ca = ue(this.Od, Q, this.yc, this.xc), "" != this.Pd && (this.Fa = ue(this.Pd, C, this.yc, this.Gb)), D = D(v + "px"), null != this.ga && (D = this.Fa ? se(I, this.ca, this.Fa, D) : se(I, this.ca, D), W(this.ga, D))) : xe(this) : xe(this));
            this.ra = null;
            this.gd = 0;
            P = P && this.Dc ? this.Dc : this.da;
            Vb && !kd ? K(P, "click", p(this.fa.expand, this.fa)) : (Vb && kd && this.$c && K(this.$c, "click", p(this.fa.expand, this.fa)), Ae ? this.Ac() : (K(P, "mouseover", p(this.Ac, this)), K(P, "mouseout", p(this.gf, this)), K(P, "mouseup", p(this.zc, this)), K(P, "touchstart", p(this.Ac, this)), K(P, "touchend", p(this.zc, this)), K(P, "touchcancel", p(this.zc, this)), K(this.ga, "click", p(this.Pe, this))))
        },
        se = function (a) {
            for (var b = X("svg", {
                    width: "100%",
                    height: "100%"
                }), c = 0; c < arguments.length; c++) b.appendChild(arguments[c]);
            return b
        },
        X = function (a, b) {
            var c = document.createElementNS("http://www.w3.org/2000/svg", a),
                d;
            for (d in b) c.setAttribute(d, b[d]);
            return c
        },
        W = function (a, b) {
            for (var c = 1; c < arguments.length; c++) a.appendChild(arguments[c])
        },
        te = function () {
            return X("rect", {
                "class": "abgbg",
                width: "100%",
                height: "100%"
            })
        },
        ve = function (a, b, c) {
            var d = "M";
            a.bd ? (d += "0," + c + "L" + b + "," + c, d = a.Db ? d + ("L" + b + ",4s0,-4,-4,-4L0,0") : d + ("L" + b + ",0L4,0s-4,0,-4,4")) : (d += "0,0L" + b + ",0", d = a.Db ? d + ("L" + b + "," + (c - 4) + "s0,4,-4,4L0," + c) : d + ("L" + b + "," + c + "L4," + c +
                "s-4,0,-4,-4"));
            return X("path", {
                "class": "abgbg",
                d: d + "z"
            })
        },
        ue = function (a, b, c, d) {
            b = X("svg", {
                "class": "abgtxt",
                x: b + "px",
                y: 11 + c + "px",
                width: d + "px"
            });
            c = X("text");
            a = document.createTextNode(a);
            W(b, c);
            W(c, a);
            return b
        },
        ze = function (a, b) {
            var c = a.childNodes.item(0),
                d = c.getComputedTextLength();
            0 != d && c.setAttribute("transform", "scale(" + b / d + ")")
        },
        re = function (a) {
            a = X("svg", {
                "class": "abgi",
                x: a,
                y: "0.5px"
            });
            var b = X("circle", {
                    cx: "6.711px",
                    cy: "6.04px",
                    r: "0.483"
                }),
                c = X("path", {
                    d: "M2.696,3.234c0-0.555,0.131-0.989,0.537-1.201c0.359-0.188,0.769-0.136,1.25,0.141l7.438,4.219c0.485,0.28,0.743,0.546,0.734,1c-0.009,0.456-0.271,0.771-0.766,1.032L7.78,10.519c-0.594,0.297-0.798,0.289-1.031,0.188C6.39,10.55,6.296,10.237,6.296,9.378l0.016-1.672c0-0.828,0.844-0.906,0.844,0l0.016,1.719C7.155,9.94,7.499,9.769,7.499,9.769L11.53,7.69c0.359-0.219,0.25-0.406,0.141-0.516c-0.024-0.024-0.188-0.12-0.25-0.156L4.233,2.987c-0.797-0.531-0.656,0.25-0.656,0.25s-0.016,7.182-0.016,7.625c0,0.797,0.094,0.672,1.062,0.156c0.95-0.506,1.156,0.422,0.516,0.75c0,0-0.869,0.473-1.297,0.641c-0.797,0.312-1.109-0.234-1.141-0.641C2.674,11.401,2.696,3.234,2.696,3.234z"
                });
            W(a, b, c);
            return a
        },
        qe = function (a) {
            a = X("svg", {
                "class": "abgi",
                x: a
            });
            var b = X("circle", {
                    cx: "6",
                    cy: "6",
                    r: "0.67"
                }),
                c = X("path", {
                    d: "M4.2,11.3Q3.3,11.8,3.3,10.75L3.3,4.1Q3.3,3.1,4.3,3.5L10.4,7.0Q12.0,7.5,10.4,8.0L6.65,10.0L6.65,7.75a0.65,0.65,0,1,0,-1.3,0L5.35,10.75a0.9,0.9,0,0,0,1.3,0.8L12.7,8.2Q13.7,7.5,12.7,6.7L3.3,1.6Q2.2,1.3,1.8,2.5L1.8,12.5Q2.2,13.9,3.3,13.3L4.8,12.5A0.3,0.3,0,1,0,4.2,11.3Z"
                });
            W(a, b, c);
            return a
        },
        Ce = function (a, b) {
            return "a" + a + "," + a + ",0,1," + b + ",0," + 2 * a + "a" + a + "," + a + ",0,1," + b + ",0," + -2 * a
        },
        we = function (a) {
            a = X("svg", {
                "class": "abgi",
                x: a
            });
            var b = X("path", {
                d: "M7.5,1.5" + Ce(6, 0) + "m0,1" + Ce(5, 1) + "ZM6.625,11l1.75,0l0,-4.5l-1.75,0ZM7.5,3.75" + Ce(1, 0) + "Z"
            });
            W(a, b);
            return a
        },
        xe = function (a) {
            var b = De(a.ke, a.Ic, a.O, a.Nc);
            W(a.W, b);
            b = De(a.xe, a.Ic, a.G, a.bb);
            a.ga.appendChild(b);
            b.width = a.G
        },
        De = function (a, b, c, d) {
            var e = document.createElement("img");
            e.src = a;
            e.alt = b;
            e.setAttribute("border", "0");
            e.width = c;
            e.height = d;
            return e
        };
    ye.prototype.Ac = function () {
        window.clearTimeout(this.ra);
        this.ra = null;
        this.H && "block" == this.H.style.display || (this.gd = ka(), this.G && (this.da.style.width = this.G + "px", this.da.style.height = this.bb + "px"), this.W && this.H && (this.W.style.display = "none", this.H.style.display = "block"), this.ca && ze(this.ca, this.xc), this.Fa && ze(this.Fa, this.Gb))
    };
    ye.prototype.gf = function () {
        Ee(this, 500)
    };
    ye.prototype.zc = function () {
        Ee(this, 4E3)
    };
    var Ee = function (a, b) {
        window.clearTimeout(a.ra);
        a.ra = window.setTimeout(p(a.ze, a), b)
    };
    ye.prototype.ze = function () {
        window.clearTimeout(this.ra);
        this.ra = null;
        this.le && (this.da.style.left = this.le + "px");
        this.O && (this.da.style.width = this.O + "px", this.da.style.height = this.Nc + "px");
        this.W && this.H && (this.W.style.display = "block", this.H.style.display = "none")
    };
    ye.prototype.Pe = function (a) {
        if (this.H && "block" == this.H.style.display && 500 > ka() - this.gd) pc(a);
        else if (this.Ne) {
            var b = this.ga.getAttribute("href");
            window.adSlot ? window.adSlot.openSystemBrowser(b) && pc(a) : window.openSystemBrowser && (window.openSystemBrowser(b), pc(a))
        }
    };
    if ("undefined" != typeof window.abgp) {
        var Z = window.abgp;
        new ye(Z.elp, Z.el, Z.ael, Z.iel, Z.hw, Z.sw, Z.hh, Z.sh, Z.himg, Z.simg, Z.alt, Z.t, Z.tw, Z.t2, Z.t2w, Z.tbo, Z.att, Z.halign, Z.ff, Z.fe, Z.iba, Z.lttp, Z.umd, Z.uic, Z.uit, Z.ict, Z.icd, Z.uaal, Z.opi)
    };
}).call(this);