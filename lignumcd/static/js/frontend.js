/*! jQuery v1.11.2 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */
!function (d, c) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = d.document ? c(d, !0) : function (b) {
        if (!b.document) {
            throw new Error("jQuery requires a window with a document")
        }
        return c(b)
    } : c(d)
}("undefined" != typeof window ? window : this, function (a, b) {
    var c = [], d = c.slice, e = c.concat, f = c.push, g = c.indexOf, h = {}, i = h.toString, j = h.hasOwnProperty,
        k = {}, l = "1.11.2", m = function (a, b) {
            return new m.fn.init(a, b)
        }, n = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, o = /^-ms-/, p = /-([\da-z])/gi, q = function (a, b) {
            return b.toUpperCase()
        };
    m.fn = m.prototype = {
        jquery: l, constructor: m, selector: "", length: 0, toArray: function () {
            return d.call(this)
        }, get: function (a) {
            return null != a ? 0 > a ? this[a + this.length] : this[a] : d.call(this)
        }, pushStack: function (a) {
            var b = m.merge(this.constructor(), a);
            return b.prevObject = this, b.context = this.context, b
        }, each: function (a, b) {
            return m.each(this, a, b)
        }, map: function (a) {
            return this.pushStack(m.map(this, function (b, c) {
                return a.call(b, c, b)
            }))
        }, slice: function () {
            return this.pushStack(d.apply(this, arguments))
        }, first: function () {
            return this.eq(0)
        }, last: function () {
            return this.eq(-1)
        }, eq: function (a) {
            var b = this.length, c = +a + (0 > a ? b : 0);
            return this.pushStack(c >= 0 && b > c ? [this[c]] : [])
        }, end: function () {
            return this.prevObject || this.constructor(null)
        }, push: f, sort: c.sort, splice: c.splice
    }, m.extend = m.fn.extend = function () {
        var a, b, c, d, e, f, g = arguments[0] || {}, h = 1, i = arguments.length, j = !1;
        for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || m.isFunction(g) || (g = {}), h === i && (g = this, h--); i > h; h++) {
            if (null != (e = arguments[h])) {
                for (d in e) {
                    a = g[d], c = e[d], g !== c && (j && c && (m.isPlainObject(c) || (b = m.isArray(c))) ? (b ? (b = !1, f = a && m.isArray(a) ? a : []) : f = a && m.isPlainObject(a) ? a : {}, g[d] = m.extend(j, f, c)) : void 0 !== c && (g[d] = c))
                }
            }
        }
        return g
    }, m.extend({
        expando: "jQuery" + (l + Math.random()).replace(/\D/g, ""), isReady: !0, error: function (a) {
            throw new Error(a)
        }, noop: function () {
        }, isFunction: function (a) {
            return "function" === m.type(a)
        }, isArray: Array.isArray || function (a) {
            return "array" === m.type(a)
        }, isWindow: function (a) {
            return null != a && a == a.window
        }, isNumeric: function (a) {
            return !m.isArray(a) && a - parseFloat(a) + 1 >= 0
        }, isEmptyObject: function (a) {
            var b;
            for (b in a) {
                return !1
            }
            return !0
        }, isPlainObject: function (a) {
            var b;
            if (!a || "object" !== m.type(a) || a.nodeType || m.isWindow(a)) {
                return !1
            }
            try {
                if (a.constructor && !j.call(a, "constructor") && !j.call(a.constructor.prototype, "isPrototypeOf")) {
                    return !1
                }
            } catch (c) {
                return !1
            }
            if (k.ownLast) {
                for (b in a) {
                    return j.call(a, b)
                }
            }
            for (b in a) {
            }
            return void 0 === b || j.call(a, b)
        }, type: function (a) {
            return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? h[i.call(a)] || "object" : typeof a
        }, globalEval: function (b) {
            b && m.trim(b) && (a.execScript || function (b) {
                a.eval.call(a, b)
            })(b)
        }, camelCase: function (a) {
            return a.replace(o, "ms-").replace(p, q)
        }, nodeName: function (a, b) {
            return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
        }, each: function (a, b, c) {
            var d, e = 0, f = a.length, g = r(a);
            if (c) {
                if (g) {
                    for (; f > e; e++) {
                        if (d = b.apply(a[e], c), d === !1) {
                            break
                        }
                    }
                } else {
                    for (e in a) {
                        if (d = b.apply(a[e], c), d === !1) {
                            break
                        }
                    }
                }
            } else {
                if (g) {
                    for (; f > e; e++) {
                        if (d = b.call(a[e], e, a[e]), d === !1) {
                            break
                        }
                    }
                } else {
                    for (e in a) {
                        if (d = b.call(a[e], e, a[e]), d === !1) {
                            break
                        }
                    }
                }
            }
            return a
        }, trim: function (a) {
            return null == a ? "" : (a + "").replace(n, "")
        }, makeArray: function (a, b) {
            var c = b || [];
            return null != a && (r(Object(a)) ? m.merge(c, "string" == typeof a ? [a] : a) : f.call(c, a)), c
        }, inArray: function (a, b, c) {
            var d;
            if (b) {
                if (g) {
                    return g.call(b, a, c)
                }
                for (d = b.length, c = c ? 0 > c ? Math.max(0, d + c) : c : 0; d > c; c++) {
                    if (c in b && b[c] === a) {
                        return c
                    }
                }
            }
            return -1
        }, merge: function (a, b) {
            var c = +b.length, d = 0, e = a.length;
            while (c > d) {
                a[e++] = b[d++]
            }
            if (c !== c) {
                while (void 0 !== b[d]) {
                    a[e++] = b[d++]
                }
            }
            return a.length = e, a
        }, grep: function (a, b, c) {
            for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++) {
                d = !b(a[f], f), d !== h && e.push(a[f])
            }
            return e
        }, map: function (a, b, c) {
            var d, f = 0, g = a.length, h = r(a), i = [];
            if (h) {
                for (; g > f; f++) {
                    d = b(a[f], f, c), null != d && i.push(d)
                }
            } else {
                for (f in a) {
                    d = b(a[f], f, c), null != d && i.push(d)
                }
            }
            return e.apply([], i)
        }, guid: 1, proxy: function (a, b) {
            var c, e, f;
            return "string" == typeof b && (f = a[b], b = a, a = f), m.isFunction(a) ? (c = d.call(arguments, 2), e = function () {
                return a.apply(b || this, c.concat(d.call(arguments)))
            }, e.guid = a.guid = a.guid || m.guid++, e) : void 0
        }, now: function () {
            return +new Date
        }, support: k
    }), m.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (a, b) {
        h["[object " + b + "]"] = b.toLowerCase()
    });

    function r(a) {
        var b = a.length, c = m.type(a);
        return "function" === c || m.isWindow(a) ? !1 : 1 === a.nodeType && b ? !0 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a
    }

    var s = function (a) {
        var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u = "sizzle" + 1 * new Date, v = a.document, w = 0,
            x = 0, y = hb(), z = hb(), A = hb(), B = function (a, b) {
                return a === b && (l = !0), 0
            }, C = 1 << 31, D = {}.hasOwnProperty, E = [], F = E.pop, G = E.push, H = E.push, I = E.slice,
            J = function (a, b) {
                for (var c = 0, d = a.length; d > c; c++) {
                    if (a[c] === b) {
                        return c
                    }
                }
                return -1
            },
            K = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            L = "[\\x20\\t\\r\\n\\f]", M = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", N = M.replace("w", "w#"),
            O = "\\[" + L + "*(" + M + ")(?:" + L + "*([*^$|!~]?=)" + L + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + N + "))|)" + L + "*\\]",
            P = ":(" + M + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + O + ")*)|.*)\\)|)",
            Q = new RegExp(L + "+", "g"), R = new RegExp("^" + L + "+|((?:^|[^\\\\])(?:\\\\.)*)" + L + "+$", "g"),
            S = new RegExp("^" + L + "*," + L + "*"), T = new RegExp("^" + L + "*([>+~]|" + L + ")" + L + "*"),
            U = new RegExp("=" + L + "*([^\\]'\"]*?)" + L + "*\\]", "g"), V = new RegExp(P),
            W = new RegExp("^" + N + "$"), X = {
                ID: new RegExp("^#(" + M + ")"),
                CLASS: new RegExp("^\\.(" + M + ")"),
                TAG: new RegExp("^(" + M.replace("w", "w*") + ")"),
                ATTR: new RegExp("^" + O),
                PSEUDO: new RegExp("^" + P),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + L + "*(even|odd|(([+-]|)(\\d*)n|)" + L + "*(?:([+-]|)" + L + "*(\\d+)|))" + L + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + K + ")$", "i"),
                needsContext: new RegExp("^" + L + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + L + "*((?:-\\d)?\\d*)" + L + "*\\)|)(?=[^-]|$)", "i")
            }, Y = /^(?:input|select|textarea|button)$/i, Z = /^h\d$/i, $ = /^[^{]+\{\s*\[native \w/,
            _ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ab = /[+~]/, bb = /'|\\/g,
            cb = new RegExp("\\\\([\\da-f]{1,6}" + L + "?|(" + L + ")|.)", "ig"), db = function (a, b, c) {
                var d = "0x" + b - 65536;
                return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320)
            }, eb = function () {
                m()
            };
        try {
            H.apply(E = I.call(v.childNodes), v.childNodes), E[v.childNodes.length].nodeType
        } catch (fb) {
            H = {
                apply: E.length ? function (a, b) {
                    G.apply(a, I.call(b))
                } : function (a, b) {
                    var c = a.length, d = 0;
                    while (a[c++] = b[d++]) {
                    }
                    a.length = c - 1
                }
            }
        }

        function gb(a, b, d, e) {
            var f, h, j, k, l, o, r, s, w, x;
            if ((b ? b.ownerDocument || b : v) !== n && m(b), b = b || n, d = d || [], k = b.nodeType, "string" != typeof a || !a || 1 !== k && 9 !== k && 11 !== k) {
                return d
            }
            if (!e && p) {
                if (11 !== k && (f = _.exec(a))) {
                    if (j = f[1]) {
                        if (9 === k) {
                            if (h = b.getElementById(j), !h || !h.parentNode) {
                                return d
                            }
                            if (h.id === j) {
                                return d.push(h), d
                            }
                        } else {
                            if (b.ownerDocument && (h = b.ownerDocument.getElementById(j)) && t(b, h) && h.id === j) {
                                return d.push(h), d
                            }
                        }
                    } else {
                        if (f[2]) {
                            return H.apply(d, b.getElementsByTagName(a)), d
                        }
                        if ((j = f[3]) && c.getElementsByClassName) {
                            return H.apply(d, b.getElementsByClassName(j)), d
                        }
                    }
                }
                if (c.qsa && (!q || !q.test(a))) {
                    if (s = r = u, w = b, x = 1 !== k && a, 1 === k && "object" !== b.nodeName.toLowerCase()) {
                        o = g(a), (r = b.getAttribute("id")) ? s = r.replace(bb, "\\$&") : b.setAttribute("id", s), s = "[id='" + s + "'] ", l = o.length;
                        while (l--) {
                            o[l] = s + rb(o[l])
                        }
                        w = ab.test(a) && pb(b.parentNode) || b, x = o.join(",")
                    }
                    if (x) {
                        try {
                            return H.apply(d, w.querySelectorAll(x)), d
                        } catch (y) {
                        } finally {
                            r || b.removeAttribute("id")
                        }
                    }
                }
            }
            return i(a.replace(R, "$1"), b, d, e)
        }

        function hb() {
            var a = [];

            function b(c, e) {
                return a.push(c + " ") > d.cacheLength && delete b[a.shift()], b[c + " "] = e
            }

            return b
        }

        function ib(a) {
            return a[u] = !0, a
        }

        function jb(a) {
            var b = n.createElement("div");
            try {
                return !!a(b)
            } catch (c) {
                return !1
            } finally {
                b.parentNode && b.parentNode.removeChild(b), b = null
            }
        }

        function kb(a, b) {
            var c = a.split("|"), e = a.length;
            while (e--) {
                d.attrHandle[c[e]] = b
            }
        }

        function lb(a, b) {
            var c = b && a,
                d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || C) - (~a.sourceIndex || C);
            if (d) {
                return d
            }
            if (c) {
                while (c = c.nextSibling) {
                    if (c === b) {
                        return -1
                    }
                }
            }
            return a ? 1 : -1
        }

        function mb(a) {
            return function (b) {
                var c = b.nodeName.toLowerCase();
                return "input" === c && b.type === a
            }
        }

        function nb(a) {
            return function (b) {
                var c = b.nodeName.toLowerCase();
                return ("input" === c || "button" === c) && b.type === a
            }
        }

        function ob(a) {
            return ib(function (b) {
                return b = +b, ib(function (c, d) {
                    var e, f = a([], c.length, b), g = f.length;
                    while (g--) {
                        c[e = f[g]] && (c[e] = !(d[e] = c[e]))
                    }
                })
            })
        }

        function pb(a) {
            return a && "undefined" != typeof a.getElementsByTagName && a
        }

        c = gb.support = {}, f = gb.isXML = function (a) {
            var b = a && (a.ownerDocument || a).documentElement;
            return b ? "HTML" !== b.nodeName : !1
        }, m = gb.setDocument = function (a) {
            var b, e, g = a ? a.ownerDocument || a : v;
            return g !== n && 9 === g.nodeType && g.documentElement ? (n = g, o = g.documentElement, e = g.defaultView, e && e !== e.top && (e.addEventListener ? e.addEventListener("unload", eb, !1) : e.attachEvent && e.attachEvent("onunload", eb)), p = !f(g), c.attributes = jb(function (a) {
                return a.className = "i", !a.getAttribute("className")
            }), c.getElementsByTagName = jb(function (a) {
                return a.appendChild(g.createComment("")), !a.getElementsByTagName("*").length
            }), c.getElementsByClassName = $.test(g.getElementsByClassName), c.getById = jb(function (a) {
                return o.appendChild(a).id = u, !g.getElementsByName || !g.getElementsByName(u).length
            }), c.getById ? (d.find.ID = function (a, b) {
                if ("undefined" != typeof b.getElementById && p) {
                    var c = b.getElementById(a);
                    return c && c.parentNode ? [c] : []
                }
            }, d.filter.ID = function (a) {
                var b = a.replace(cb, db);
                return function (a) {
                    return a.getAttribute("id") === b
                }
            }) : (delete d.find.ID, d.filter.ID = function (a) {
                var b = a.replace(cb, db);
                return function (a) {
                    var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");
                    return c && c.value === b
                }
            }), d.find.TAG = c.getElementsByTagName ? function (a, b) {
                return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : c.qsa ? b.querySelectorAll(a) : void 0
            } : function (a, b) {
                var c, d = [], e = 0, f = b.getElementsByTagName(a);
                if ("*" === a) {
                    while (c = f[e++]) {
                        1 === c.nodeType && d.push(c)
                    }
                    return d
                }
                return f
            }, d.find.CLASS = c.getElementsByClassName && function (a, b) {
                return p ? b.getElementsByClassName(a) : void 0
            }, r = [], q = [], (c.qsa = $.test(g.querySelectorAll)) && (jb(function (a) {
                o.appendChild(a).innerHTML = "<a id='" + u + "'></a><select id='" + u + "-\f]' msallowcapture=''><option selected=''></option></select>", a.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + L + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || q.push("\\[" + L + "*(?:value|" + K + ")"), a.querySelectorAll("[id~=" + u + "-]").length || q.push("~="), a.querySelectorAll(":checked").length || q.push(":checked"), a.querySelectorAll("a#" + u + "+*").length || q.push(".#.+[+~]")
            }), jb(function (a) {
                var b = g.createElement("input");
                b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && q.push("name" + L + "*[*^$|!~]?="), a.querySelectorAll(":enabled").length || q.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), q.push(",.*:")
            })), (c.matchesSelector = $.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && jb(function (a) {
                c.disconnectedMatch = s.call(a, "div"), s.call(a, "[s!='']:x"), r.push("!=", P)
            }), q = q.length && new RegExp(q.join("|")), r = r.length && new RegExp(r.join("|")), b = $.test(o.compareDocumentPosition), t = b || $.test(o.contains) ? function (a, b) {
                var c = 9 === a.nodeType ? a.documentElement : a, d = b && b.parentNode;
                return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
            } : function (a, b) {
                if (b) {
                    while (b = b.parentNode) {
                        if (b === a) {
                            return !0
                        }
                    }
                }
                return !1
            }, B = b ? function (a, b) {
                if (a === b) {
                    return l = !0, 0
                }
                var d = !a.compareDocumentPosition - !b.compareDocumentPosition;
                return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === g || a.ownerDocument === v && t(v, a) ? -1 : b === g || b.ownerDocument === v && t(v, b) ? 1 : k ? J(k, a) - J(k, b) : 0 : 4 & d ? -1 : 1)
            } : function (a, b) {
                if (a === b) {
                    return l = !0, 0
                }
                var c, d = 0, e = a.parentNode, f = b.parentNode, h = [a], i = [b];
                if (!e || !f) {
                    return a === g ? -1 : b === g ? 1 : e ? -1 : f ? 1 : k ? J(k, a) - J(k, b) : 0
                }
                if (e === f) {
                    return lb(a, b)
                }
                c = a;
                while (c = c.parentNode) {
                    h.unshift(c)
                }
                c = b;
                while (c = c.parentNode) {
                    i.unshift(c)
                }
                while (h[d] === i[d]) {
                    d++
                }
                return d ? lb(h[d], i[d]) : h[d] === v ? -1 : i[d] === v ? 1 : 0
            }, g) : n
        }, gb.matches = function (a, b) {
            return gb(a, null, null, b)
        }, gb.matchesSelector = function (a, b) {
            if ((a.ownerDocument || a) !== n && m(a), b = b.replace(U, "='$1']"), !(!c.matchesSelector || !p || r && r.test(b) || q && q.test(b))) {
                try {
                    var d = s.call(a, b);
                    if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType) {
                        return d
                    }
                } catch (e) {
                }
            }
            return gb(b, n, null, [a]).length > 0
        }, gb.contains = function (a, b) {
            return (a.ownerDocument || a) !== n && m(a), t(a, b)
        }, gb.attr = function (a, b) {
            (a.ownerDocument || a) !== n && m(a);
            var e = d.attrHandle[b.toLowerCase()],
                f = e && D.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;
            return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null
        }, gb.error = function (a) {
            throw new Error("Syntax error, unrecognized expression: " + a)
        }, gb.uniqueSort = function (a) {
            var b, d = [], e = 0, f = 0;
            if (l = !c.detectDuplicates, k = !c.sortStable && a.slice(0), a.sort(B), l) {
                while (b = a[f++]) {
                    b === a[f] && (e = d.push(f))
                }
                while (e--) {
                    a.splice(d[e], 1)
                }
            }
            return k = null, a
        }, e = gb.getText = function (a) {
            var b, c = "", d = 0, f = a.nodeType;
            if (f) {
                if (1 === f || 9 === f || 11 === f) {
                    if ("string" == typeof a.textContent) {
                        return a.textContent
                    }
                    for (a = a.firstChild; a; a = a.nextSibling) {
                        c += e(a)
                    }
                } else {
                    if (3 === f || 4 === f) {
                        return a.nodeValue
                    }
                }
            } else {
                while (b = a[d++]) {
                    c += e(b)
                }
            }
            return c
        }, d = gb.selectors = {
            cacheLength: 50,
            createPseudo: ib,
            match: X,
            attrHandle: {},
            find: {},
            relative: {
                ">": {dir: "parentNode", first: !0},
                " ": {dir: "parentNode"},
                "+": {dir: "previousSibling", first: !0},
                "~": {dir: "previousSibling"}
            },
            preFilter: {
                ATTR: function (a) {
                    return a[1] = a[1].replace(cb, db), a[3] = (a[3] || a[4] || a[5] || "").replace(cb, db), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4)
                }, CHILD: function (a) {
                    return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || gb.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && gb.error(a[0]), a
                }, PSEUDO: function (a) {
                    var b, c = !a[6] && a[2];
                    return X.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && V.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3))
                }
            },
            filter: {
                TAG: function (a) {
                    var b = a.replace(cb, db).toLowerCase();
                    return "*" === a ? function () {
                        return !0
                    } : function (a) {
                        return a.nodeName && a.nodeName.toLowerCase() === b
                    }
                }, CLASS: function (a) {
                    var b = y[a + " "];
                    return b || (b = new RegExp("(^|" + L + ")" + a + "(" + L + "|$)")) && y(a, function (a) {
                        return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "")
                    })
                }, ATTR: function (a, b, c) {
                    return function (d) {
                        var e = gb.attr(d, a);
                        return null == e ? "!=" === b : b ? (e += "", "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e.replace(Q, " ") + " ").indexOf(c) > -1 : "|=" === b ? e === c || e.slice(0, c.length + 1) === c + "-" : !1) : !0
                    }
                }, CHILD: function (a, b, c, d, e) {
                    var f = "nth" !== a.slice(0, 3), g = "last" !== a.slice(-4), h = "of-type" === b;
                    return 1 === d && 0 === e ? function (a) {
                        return !!a.parentNode
                    } : function (b, c, i) {
                        var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling", q = b.parentNode,
                            r = h && b.nodeName.toLowerCase(), s = !i && !h;
                        if (q) {
                            if (f) {
                                while (p) {
                                    l = b;
                                    while (l = l[p]) {
                                        if (h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) {
                                            return !1
                                        }
                                    }
                                    o = p = "only" === a && !o && "nextSibling"
                                }
                                return !0
                            }
                            if (o = [g ? q.firstChild : q.lastChild], g && s) {
                                k = q[u] || (q[u] = {}), j = k[a] || [], n = j[0] === w && j[1], m = j[0] === w && j[2], l = n && q.childNodes[n];
                                while (l = ++n && l && l[p] || (m = n = 0) || o.pop()) {
                                    if (1 === l.nodeType && ++m && l === b) {
                                        k[a] = [w, n, m];
                                        break
                                    }
                                }
                            } else {
                                if (s && (j = (b[u] || (b[u] = {}))[a]) && j[0] === w) {
                                    m = j[1]
                                } else {
                                    while (l = ++n && l && l[p] || (m = n = 0) || o.pop()) {
                                        if ((h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) && ++m && (s && ((l[u] || (l[u] = {}))[a] = [w, m]), l === b)) {
                                            break
                                        }
                                    }
                                }
                            }
                            return m -= e, m === d || m % d === 0 && m / d >= 0
                        }
                    }
                }, PSEUDO: function (a, b) {
                    var c, e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || gb.error("unsupported pseudo: " + a);
                    return e[u] ? e(b) : e.length > 1 ? (c = [a, a, "", b], d.setFilters.hasOwnProperty(a.toLowerCase()) ? ib(function (a, c) {
                        var d, f = e(a, b), g = f.length;
                        while (g--) {
                            d = J(a, f[g]), a[d] = !(c[d] = f[g])
                        }
                    }) : function (a) {
                        return e(a, 0, c)
                    }) : e
                }
            },
            pseudos: {
                not: ib(function (a) {
                    var b = [], c = [], d = h(a.replace(R, "$1"));
                    return d[u] ? ib(function (a, b, c, e) {
                        var f, g = d(a, null, e, []), h = a.length;
                        while (h--) {
                            (f = g[h]) && (a[h] = !(b[h] = f))
                        }
                    }) : function (a, e, f) {
                        return b[0] = a, d(b, null, f, c), b[0] = null, !c.pop()
                    }
                }), has: ib(function (a) {
                    return function (b) {
                        return gb(a, b).length > 0
                    }
                }), contains: ib(function (a) {
                    return a = a.replace(cb, db), function (b) {
                        return (b.textContent || b.innerText || e(b)).indexOf(a) > -1
                    }
                }), lang: ib(function (a) {
                    return W.test(a || "") || gb.error("unsupported lang: " + a), a = a.replace(cb, db).toLowerCase(), function (b) {
                        var c;
                        do {
                            if (c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) {
                                return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-")
                            }
                        } while ((b = b.parentNode) && 1 === b.nodeType);
                        return !1
                    }
                }), target: function (b) {
                    var c = a.location && a.location.hash;
                    return c && c.slice(1) === b.id
                }, root: function (a) {
                    return a === o
                }, focus: function (a) {
                    return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
                }, enabled: function (a) {
                    return a.disabled === !1
                }, disabled: function (a) {
                    return a.disabled === !0
                }, checked: function (a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && !!a.checked || "option" === b && !!a.selected
                }, selected: function (a) {
                    return a.parentNode && a.parentNode.selectedIndex, a.selected === !0
                }, empty: function (a) {
                    for (a = a.firstChild; a; a = a.nextSibling) {
                        if (a.nodeType < 6) {
                            return !1
                        }
                    }
                    return !0
                }, parent: function (a) {
                    return !d.pseudos.empty(a)
                }, header: function (a) {
                    return Z.test(a.nodeName)
                }, input: function (a) {
                    return Y.test(a.nodeName)
                }, button: function (a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && "button" === a.type || "button" === b
                }, text: function (a) {
                    var b;
                    return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
                }, first: ob(function () {
                    return [0]
                }), last: ob(function (a, b) {
                    return [b - 1]
                }), eq: ob(function (a, b, c) {
                    return [0 > c ? c + b : c]
                }), even: ob(function (a, b) {
                    for (var c = 0; b > c; c += 2) {
                        a.push(c)
                    }
                    return a
                }), odd: ob(function (a, b) {
                    for (var c = 1; b > c; c += 2) {
                        a.push(c)
                    }
                    return a
                }), lt: ob(function (a, b, c) {
                    for (var d = 0 > c ? c + b : c; --d >= 0;) {
                        a.push(d)
                    }
                    return a
                }), gt: ob(function (a, b, c) {
                    for (var d = 0 > c ? c + b : c; ++d < b;) {
                        a.push(d)
                    }
                    return a
                })
            }
        }, d.pseudos.nth = d.pseudos.eq;
        for (b in {radio: !0, checkbox: !0, file: !0, password: !0, image: !0}) {
            d.pseudos[b] = mb(b)
        }
        for (b in {submit: !0, reset: !0}) {
            d.pseudos[b] = nb(b)
        }

        function qb() {
        }

        qb.prototype = d.filters = d.pseudos, d.setFilters = new qb, g = gb.tokenize = function (a, b) {
            var c, e, f, g, h, i, j, k = z[a + " "];
            if (k) {
                return b ? 0 : k.slice(0)
            }
            h = a, i = [], j = d.preFilter;
            while (h) {
                (!c || (e = S.exec(h))) && (e && (h = h.slice(e[0].length) || h), i.push(f = [])), c = !1, (e = T.exec(h)) && (c = e.shift(), f.push({
                    value: c,
                    type: e[0].replace(R, " ")
                }), h = h.slice(c.length));
                for (g in d.filter) {
                    !(e = X[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), f.push({
                        value: c,
                        type: g,
                        matches: e
                    }), h = h.slice(c.length))
                }
                if (!c) {
                    break
                }
            }
            return b ? h.length : h ? gb.error(a) : z(a, i).slice(0)
        };

        function rb(a) {
            for (var b = 0, c = a.length, d = ""; c > b; b++) {
                d += a[b].value
            }
            return d
        }

        function sb(a, b, c) {
            var d = b.dir, e = c && "parentNode" === d, f = x++;
            return b.first ? function (b, c, f) {
                while (b = b[d]) {
                    if (1 === b.nodeType || e) {
                        return a(b, c, f)
                    }
                }
            } : function (b, c, g) {
                var h, i, j = [w, f];
                if (g) {
                    while (b = b[d]) {
                        if ((1 === b.nodeType || e) && a(b, c, g)) {
                            return !0
                        }
                    }
                } else {
                    while (b = b[d]) {
                        if (1 === b.nodeType || e) {
                            if (i = b[u] || (b[u] = {}), (h = i[d]) && h[0] === w && h[1] === f) {
                                return j[2] = h[2]
                            }
                            if (i[d] = j, j[2] = a(b, c, g)) {
                                return !0
                            }
                        }
                    }
                }
            }
        }

        function tb(a) {
            return a.length > 1 ? function (b, c, d) {
                var e = a.length;
                while (e--) {
                    if (!a[e](b, c, d)) {
                        return !1
                    }
                }
                return !0
            } : a[0]
        }

        function ub(a, b, c) {
            for (var d = 0, e = b.length; e > d; d++) {
                gb(a, b[d], c)
            }
            return c
        }

        function vb(a, b, c, d, e) {
            for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++) {
                (f = a[h]) && (!c || c(f, d, e)) && (g.push(f), j && b.push(h))
            }
            return g
        }

        function wb(a, b, c, d, e, f) {
            return d && !d[u] && (d = wb(d)), e && !e[u] && (e = wb(e, f)), ib(function (f, g, h, i) {
                var j, k, l, m = [], n = [], o = g.length, p = f || ub(b || "*", h.nodeType ? [h] : h, []),
                    q = !a || !f && b ? p : vb(p, m, a, h, i), r = c ? e || (f ? a : o || d) ? [] : g : q;
                if (c && c(q, r, h, i), d) {
                    j = vb(r, n), d(j, [], h, i), k = j.length;
                    while (k--) {
                        (l = j[k]) && (r[n[k]] = !(q[n[k]] = l))
                    }
                }
                if (f) {
                    if (e || a) {
                        if (e) {
                            j = [], k = r.length;
                            while (k--) {
                                (l = r[k]) && j.push(q[k] = l)
                            }
                            e(null, r = [], j, i)
                        }
                        k = r.length;
                        while (k--) {
                            (l = r[k]) && (j = e ? J(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l))
                        }
                    }
                } else {
                    r = vb(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : H.apply(g, r)
                }
            })
        }

        function xb(a) {
            for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0, k = sb(function (a) {
                return a === b
            }, h, !0), l = sb(function (a) {
                return J(b, a) > -1
            }, h, !0), m = [function (a, c, d) {
                var e = !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d));
                return b = null, e
            }]; f > i; i++) {
                if (c = d.relative[a[i].type]) {
                    m = [sb(tb(m), c)]
                } else {
                    if (c = d.filter[a[i].type].apply(null, a[i].matches), c[u]) {
                        for (e = ++i; f > e; e++) {
                            if (d.relative[a[e].type]) {
                                break
                            }
                        }
                        return wb(i > 1 && tb(m), i > 1 && rb(a.slice(0, i - 1).concat({value: " " === a[i - 2].type ? "*" : ""})).replace(R, "$1"), c, e > i && xb(a.slice(i, e)), f > e && xb(a = a.slice(e)), f > e && rb(a))
                    }
                    m.push(c)
                }
            }
            return tb(m)
        }

        function yb(a, b) {
            var c = b.length > 0, e = a.length > 0, f = function (f, g, h, i, k) {
                var l, m, o, p = 0, q = "0", r = f && [], s = [], t = j, u = f || e && d.find.TAG("*", k),
                    v = w += null == t ? 1 : Math.random() || 0.1, x = u.length;
                for (k && (j = g !== n && g); q !== x && null != (l = u[q]); q++) {
                    if (e && l) {
                        m = 0;
                        while (o = a[m++]) {
                            if (o(l, g, h)) {
                                i.push(l);
                                break
                            }
                        }
                        k && (w = v)
                    }
                    c && ((l = !o && l) && p--, f && r.push(l))
                }
                if (p += q, c && q !== p) {
                    m = 0;
                    while (o = b[m++]) {
                        o(r, s, g, h)
                    }
                    if (f) {
                        if (p > 0) {
                            while (q--) {
                                r[q] || s[q] || (s[q] = F.call(i))
                            }
                        }
                        s = vb(s)
                    }
                    H.apply(i, s), k && !f && s.length > 0 && p + b.length > 1 && gb.uniqueSort(i)
                }
                return k && (w = v, j = t), r
            };
            return c ? ib(f) : f
        }

        return h = gb.compile = function (a, b) {
            var c, d = [], e = [], f = A[a + " "];
            if (!f) {
                b || (b = g(a)), c = b.length;
                while (c--) {
                    f = xb(b[c]), f[u] ? d.push(f) : e.push(f)
                }
                f = A(a, yb(e, d)), f.selector = a
            }
            return f
        }, i = gb.select = function (a, b, e, f) {
            var i, j, k, l, m, n = "function" == typeof a && a, o = !f && g(a = n.selector || a);
            if (e = e || [], 1 === o.length) {
                if (j = o[0] = o[0].slice(0), j.length > 2 && "ID" === (k = j[0]).type && c.getById && 9 === b.nodeType && p && d.relative[j[1].type]) {
                    if (b = (d.find.ID(k.matches[0].replace(cb, db), b) || [])[0], !b) {
                        return e
                    }
                    n && (b = b.parentNode), a = a.slice(j.shift().value.length)
                }
                i = X.needsContext.test(a) ? 0 : j.length;
                while (i--) {
                    if (k = j[i], d.relative[l = k.type]) {
                        break
                    }
                    if ((m = d.find[l]) && (f = m(k.matches[0].replace(cb, db), ab.test(j[0].type) && pb(b.parentNode) || b))) {
                        if (j.splice(i, 1), a = f.length && rb(j), !a) {
                            return H.apply(e, f), e
                        }
                        break
                    }
                }
            }
            return (n || h(a, o))(f, b, !p, e, ab.test(a) && pb(b.parentNode) || b), e
        }, c.sortStable = u.split("").sort(B).join("") === u, c.detectDuplicates = !!l, m(), c.sortDetached = jb(function (a) {
            return 1 & a.compareDocumentPosition(n.createElement("div"))
        }), jb(function (a) {
            return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href")
        }) || kb("type|href|height|width", function (a, b, c) {
            return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
        }), c.attributes && jb(function (a) {
            return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value")
        }) || kb("value", function (a, b, c) {
            return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue
        }), jb(function (a) {
            return null == a.getAttribute("disabled")
        }) || kb(K, function (a, b, c) {
            var d;
            return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
        }), gb
    }(a);
    m.find = s, m.expr = s.selectors, m.expr[":"] = m.expr.pseudos, m.unique = s.uniqueSort, m.text = s.getText, m.isXMLDoc = s.isXML, m.contains = s.contains;
    var t = m.expr.match.needsContext, u = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, v = /^.[^:#\[\.,]*$/;

    function w(a, b, c) {
        if (m.isFunction(b)) {
            return m.grep(a, function (a, d) {
                return !!b.call(a, d, a) !== c
            })
        }
        if (b.nodeType) {
            return m.grep(a, function (a) {
                return a === b !== c
            })
        }
        if ("string" == typeof b) {
            if (v.test(b)) {
                return m.filter(b, a, c)
            }
            b = m.filter(b, a)
        }
        return m.grep(a, function (a) {
            return m.inArray(a, b) >= 0 !== c
        })
    }

    m.filter = function (a, b, c) {
        var d = b[0];
        return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? m.find.matchesSelector(d, a) ? [d] : [] : m.find.matches(a, m.grep(b, function (a) {
            return 1 === a.nodeType
        }))
    }, m.fn.extend({
        find: function (a) {
            var b, c = [], d = this, e = d.length;
            if ("string" != typeof a) {
                return this.pushStack(m(a).filter(function () {
                    for (b = 0; e > b; b++) {
                        if (m.contains(d[b], this)) {
                            return !0
                        }
                    }
                }))
            }
            for (b = 0; e > b; b++) {
                m.find(a, d[b], c)
            }
            return c = this.pushStack(e > 1 ? m.unique(c) : c), c.selector = this.selector ? this.selector + " " + a : a, c
        }, filter: function (a) {
            return this.pushStack(w(this, a || [], !1))
        }, not: function (a) {
            return this.pushStack(w(this, a || [], !0))
        }, is: function (a) {
            return !!w(this, "string" == typeof a && t.test(a) ? m(a) : a || [], !1).length
        }
    });
    var x, y = a.document, z = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, A = m.fn.init = function (a, b) {
        var c, d;
        if (!a) {
            return this
        }
        if ("string" == typeof a) {
            if (c = "<" === a.charAt(0) && ">" === a.charAt(a.length - 1) && a.length >= 3 ? [null, a, null] : z.exec(a), !c || !c[1] && b) {
                return !b || b.jquery ? (b || x).find(a) : this.constructor(b).find(a)
            }
            if (c[1]) {
                if (b = b instanceof m ? b[0] : b, m.merge(this, m.parseHTML(c[1], b && b.nodeType ? b.ownerDocument || b : y, !0)), u.test(c[1]) && m.isPlainObject(b)) {
                    for (c in b) {
                        m.isFunction(this[c]) ? this[c](b[c]) : this.attr(c, b[c])
                    }
                }
                return this
            }
            if (d = y.getElementById(c[2]), d && d.parentNode) {
                if (d.id !== c[2]) {
                    return x.find(a)
                }
                this.length = 1, this[0] = d
            }
            return this.context = y, this.selector = a, this
        }
        return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : m.isFunction(a) ? "undefined" != typeof x.ready ? x.ready(a) : a(m) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), m.makeArray(a, this))
    };
    A.prototype = m.fn, x = m(y);
    var B = /^(?:parents|prev(?:Until|All))/, C = {children: !0, contents: !0, next: !0, prev: !0};
    m.extend({
        dir: function (a, b, c) {
            var d = [], e = a[b];
            while (e && 9 !== e.nodeType && (void 0 === c || 1 !== e.nodeType || !m(e).is(c))) {
                1 === e.nodeType && d.push(e), e = e[b]
            }
            return d
        }, sibling: function (a, b) {
            for (var c = []; a; a = a.nextSibling) {
                1 === a.nodeType && a !== b && c.push(a)
            }
            return c
        }
    }), m.fn.extend({
        has: function (a) {
            var b, c = m(a, this), d = c.length;
            return this.filter(function () {
                for (b = 0; d > b; b++) {
                    if (m.contains(this, c[b])) {
                        return !0
                    }
                }
            })
        }, closest: function (a, b) {
            for (var c, d = 0, e = this.length, f = [], g = t.test(a) || "string" != typeof a ? m(a, b || this.context) : 0; e > d; d++) {
                for (c = this[d]; c && c !== b; c = c.parentNode) {
                    if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && m.find.matchesSelector(c, a))) {
                        f.push(c);
                        break
                    }
                }
            }
            return this.pushStack(f.length > 1 ? m.unique(f) : f)
        }, index: function (a) {
            return a ? "string" == typeof a ? m.inArray(this[0], m(a)) : m.inArray(a.jquery ? a[0] : a, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        }, add: function (a, b) {
            return this.pushStack(m.unique(m.merge(this.get(), m(a, b))))
        }, addBack: function (a) {
            return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
        }
    });

    function D(a, b) {
        do {
            a = a[b]
        } while (a && 1 !== a.nodeType);
        return a
    }

    m.each({
        parent: function (a) {
            var b = a.parentNode;
            return b && 11 !== b.nodeType ? b : null
        }, parents: function (a) {
            return m.dir(a, "parentNode")
        }, parentsUntil: function (a, b, c) {
            return m.dir(a, "parentNode", c)
        }, next: function (a) {
            return D(a, "nextSibling")
        }, prev: function (a) {
            return D(a, "previousSibling")
        }, nextAll: function (a) {
            return m.dir(a, "nextSibling")
        }, prevAll: function (a) {
            return m.dir(a, "previousSibling")
        }, nextUntil: function (a, b, c) {
            return m.dir(a, "nextSibling", c)
        }, prevUntil: function (a, b, c) {
            return m.dir(a, "previousSibling", c)
        }, siblings: function (a) {
            return m.sibling((a.parentNode || {}).firstChild, a)
        }, children: function (a) {
            return m.sibling(a.firstChild)
        }, contents: function (a) {
            return m.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : m.merge([], a.childNodes)
        }
    }, function (a, b) {
        m.fn[a] = function (c, d) {
            var e = m.map(this, b, c);
            return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = m.filter(d, e)), this.length > 1 && (C[a] || (e = m.unique(e)), B.test(a) && (e = e.reverse())), this.pushStack(e)
        }
    });
    var E = /\S+/g, F = {};

    function G(a) {
        var b = F[a] = {};
        return m.each(a.match(E) || [], function (a, c) {
            b[c] = !0
        }), b
    }

    m.Callbacks = function (a) {
        a = "string" == typeof a ? F[a] || G(a) : m.extend({}, a);
        var b, c, d, e, f, g, h = [], i = !a.once && [], j = function (l) {
            for (c = a.memory && l, d = !0, f = g || 0, g = 0, e = h.length, b = !0; h && e > f; f++) {
                if (h[f].apply(l[0], l[1]) === !1 && a.stopOnFalse) {
                    c = !1;
                    break
                }
            }
            b = !1, h && (i ? i.length && j(i.shift()) : c ? h = [] : k.disable())
        }, k = {
            add: function () {
                if (h) {
                    var d = h.length;
                    !function f(b) {
                        m.each(b, function (b, c) {
                            var d = m.type(c);
                            "function" === d ? a.unique && k.has(c) || h.push(c) : c && c.length && "string" !== d && f(c)
                        })
                    }(arguments), b ? e = h.length : c && (g = d, j(c))
                }
                return this
            }, remove: function () {
                return h && m.each(arguments, function (a, c) {
                    var d;
                    while ((d = m.inArray(c, h, d)) > -1) {
                        h.splice(d, 1), b && (e >= d && e--, f >= d && f--)
                    }
                }), this
            }, has: function (a) {
                return a ? m.inArray(a, h) > -1 : !(!h || !h.length)
            }, empty: function () {
                return h = [], e = 0, this
            }, disable: function () {
                return h = i = c = void 0, this
            }, disabled: function () {
                return !h
            }, lock: function () {
                return i = void 0, c || k.disable(), this
            }, locked: function () {
                return !i
            }, fireWith: function (a, c) {
                return !h || d && !i || (c = c || [], c = [a, c.slice ? c.slice() : c], b ? i.push(c) : j(c)), this
            }, fire: function () {
                return k.fireWith(this, arguments), this
            }, fired: function () {
                return !!d
            }
        };
        return k
    }, m.extend({
        Deferred: function (a) {
            var b = [["resolve", "done", m.Callbacks("once memory"), "resolved"], ["reject", "fail", m.Callbacks("once memory"), "rejected"], ["notify", "progress", m.Callbacks("memory")]],
                c = "pending", d = {
                    state: function () {
                        return c
                    }, always: function () {
                        return e.done(arguments).fail(arguments), this
                    }, then: function () {
                        var a = arguments;
                        return m.Deferred(function (c) {
                            m.each(b, function (b, f) {
                                var g = m.isFunction(a[b]) && a[b];
                                e[f[1]](function () {
                                    var a = g && g.apply(this, arguments);
                                    a && m.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments)
                                })
                            }), a = null
                        }).promise()
                    }, promise: function (a) {
                        return null != a ? m.extend(a, d) : d
                    }
                }, e = {};
            return d.pipe = d.then, m.each(b, function (a, f) {
                var g = f[2], h = f[3];
                d[f[1]] = g.add, h && g.add(function () {
                    c = h
                }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function () {
                    return e[f[0] + "With"](this === e ? d : this, arguments), this
                }, e[f[0] + "With"] = g.fireWith
            }), d.promise(e), a && a.call(e, e), e
        }, when: function (a) {
            var b = 0, c = d.call(arguments), e = c.length, f = 1 !== e || a && m.isFunction(a.promise) ? e : 0,
                g = 1 === f ? a : m.Deferred(), h = function (a, b, c) {
                    return function (e) {
                        b[a] = this, c[a] = arguments.length > 1 ? d.call(arguments) : e, c === i ? g.notifyWith(b, c) : --f || g.resolveWith(b, c)
                    }
                }, i, j, k;
            if (e > 1) {
                for (i = new Array(e), j = new Array(e), k = new Array(e); e > b; b++) {
                    c[b] && m.isFunction(c[b].promise) ? c[b].promise().done(h(b, k, c)).fail(g.reject).progress(h(b, j, i)) : --f
                }
            }
            return f || g.resolveWith(k, c), g.promise()
        }
    });
    var H;
    m.fn.ready = function (a) {
        return m.ready.promise().done(a), this
    }, m.extend({
        isReady: !1, readyWait: 1, holdReady: function (a) {
            a ? m.readyWait++ : m.ready(!0)
        }, ready: function (a) {
            if (a === !0 ? !--m.readyWait : !m.isReady) {
                if (!y.body) {
                    return setTimeout(m.ready)
                }
                m.isReady = !0, a !== !0 && --m.readyWait > 0 || (H.resolveWith(y, [m]), m.fn.triggerHandler && (m(y).triggerHandler("ready"), m(y).off("ready")))
            }
        }
    });

    function I() {
        y.addEventListener ? (y.removeEventListener("DOMContentLoaded", J, !1), a.removeEventListener("load", J, !1)) : (y.detachEvent("onreadystatechange", J), a.detachEvent("onload", J))
    }

    function J() {
        (y.addEventListener || "load" === event.type || "complete" === y.readyState) && (I(), m.ready())
    }

    m.ready.promise = function (b) {
        if (!H) {
            if (H = m.Deferred(), "complete" === y.readyState) {
                setTimeout(m.ready)
            } else {
                if (y.addEventListener) {
                    y.addEventListener("DOMContentLoaded", J, !1), a.addEventListener("load", J, !1)
                } else {
                    y.attachEvent("onreadystatechange", J), a.attachEvent("onload", J);
                    var c = !1;
                    try {
                        c = null == a.frameElement && y.documentElement
                    } catch (d) {
                    }
                    c && c.doScroll && !function e() {
                        if (!m.isReady) {
                            try {
                                c.doScroll("left")
                            } catch (a) {
                                return setTimeout(e, 50)
                            }
                            I(), m.ready()
                        }
                    }()
                }
            }
        }
        return H.promise(b)
    };
    var K = "undefined", L;
    for (L in m(k)) {
        break
    }
    k.ownLast = "0" !== L, k.inlineBlockNeedsLayout = !1, m(function () {
        var a, b, c, d;
        c = y.getElementsByTagName("body")[0], c && c.style && (b = y.createElement("div"), d = y.createElement("div"), d.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(d).appendChild(b), typeof b.style.zoom !== K && (b.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", k.inlineBlockNeedsLayout = a = 3 === b.offsetWidth, a && (c.style.zoom = 1)), c.removeChild(d))
    }), function () {
        var a = y.createElement("div");
        if (null == k.deleteExpando) {
            k.deleteExpando = !0;
            try {
                delete a.test
            } catch (b) {
                k.deleteExpando = !1
            }
        }
        a = null
    }(), m.acceptData = function (a) {
        var b = m.noData[(a.nodeName + " ").toLowerCase()], c = +a.nodeType || 1;
        return 1 !== c && 9 !== c ? !1 : !b || b !== !0 && a.getAttribute("classid") === b
    };
    var M = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, N = /([A-Z])/g;

    function O(a, b, c) {
        if (void 0 === c && 1 === a.nodeType) {
            var d = "data-" + b.replace(N, "-$1").toLowerCase();
            if (c = a.getAttribute(d), "string" == typeof c) {
                try {
                    c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : M.test(c) ? m.parseJSON(c) : c
                } catch (e) {
                }
                m.data(a, b, c)
            } else {
                c = void 0
            }
        }
        return c
    }

    function P(a) {
        var b;
        for (b in a) {
            if (("data" !== b || !m.isEmptyObject(a[b])) && "toJSON" !== b) {
                return !1
            }
        }
        return !0
    }

    function Q(a, b, d, e) {
        if (m.acceptData(a)) {
            var f, g, h = m.expando, i = a.nodeType, j = i ? m.cache : a, k = i ? a[h] : a[h] && h;
            if (k && j[k] && (e || j[k].data) || void 0 !== d || "string" != typeof b) {
                return k || (k = i ? a[h] = c.pop() || m.guid++ : h), j[k] || (j[k] = i ? {} : {toJSON: m.noop}), ("object" == typeof b || "function" == typeof b) && (e ? j[k] = m.extend(j[k], b) : j[k].data = m.extend(j[k].data, b)), g = j[k], e || (g.data || (g.data = {}), g = g.data), void 0 !== d && (g[m.camelCase(b)] = d), "string" == typeof b ? (f = g[b], null == f && (f = g[m.camelCase(b)])) : f = g, f
            }
        }
    }

    function R(a, b, c) {
        if (m.acceptData(a)) {
            var d, e, f = a.nodeType, g = f ? m.cache : a, h = f ? a[m.expando] : m.expando;
            if (g[h]) {
                if (b && (d = c ? g[h] : g[h].data)) {
                    m.isArray(b) ? b = b.concat(m.map(b, m.camelCase)) : b in d ? b = [b] : (b = m.camelCase(b), b = b in d ? [b] : b.split(" ")), e = b.length;
                    while (e--) {
                        delete d[b[e]]
                    }
                    if (c ? !P(d) : !m.isEmptyObject(d)) {
                        return
                    }
                }
                (c || (delete g[h].data, P(g[h]))) && (f ? m.cleanData([a], !0) : k.deleteExpando || g != g.window ? delete g[h] : g[h] = null)
            }
        }
    }

    m.extend({
        cache: {},
        noData: {"applet ": !0, "embed ": !0, "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},
        hasData: function (a) {
            return a = a.nodeType ? m.cache[a[m.expando]] : a[m.expando], !!a && !P(a)
        },
        data: function (a, b, c) {
            return Q(a, b, c)
        },
        removeData: function (a, b) {
            return R(a, b)
        },
        _data: function (a, b, c) {
            return Q(a, b, c, !0)
        },
        _removeData: function (a, b) {
            return R(a, b, !0)
        }
    }), m.fn.extend({
        data: function (a, b) {
            var c, d, e, f = this[0], g = f && f.attributes;
            if (void 0 === a) {
                if (this.length && (e = m.data(f), 1 === f.nodeType && !m._data(f, "parsedAttrs"))) {
                    c = g.length;
                    while (c--) {
                        g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = m.camelCase(d.slice(5)), O(f, d, e[d])))
                    }
                    m._data(f, "parsedAttrs", !0)
                }
                return e
            }
            return "object" == typeof a ? this.each(function () {
                m.data(this, a)
            }) : arguments.length > 1 ? this.each(function () {
                m.data(this, a, b)
            }) : f ? O(f, a, m.data(f, a)) : void 0
        }, removeData: function (a) {
            return this.each(function () {
                m.removeData(this, a)
            })
        }
    }), m.extend({
        queue: function (a, b, c) {
            var d;
            return a ? (b = (b || "fx") + "queue", d = m._data(a, b), c && (!d || m.isArray(c) ? d = m._data(a, b, m.makeArray(c)) : d.push(c)), d || []) : void 0
        }, dequeue: function (a, b) {
            b = b || "fx";
            var c = m.queue(a, b), d = c.length, e = c.shift(), f = m._queueHooks(a, b), g = function () {
                m.dequeue(a, b)
            };
            "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire()
        }, _queueHooks: function (a, b) {
            var c = b + "queueHooks";
            return m._data(a, c) || m._data(a, c, {
                empty: m.Callbacks("once memory").add(function () {
                    m._removeData(a, b + "queue"), m._removeData(a, c)
                })
            })
        }
    }), m.fn.extend({
        queue: function (a, b) {
            var c = 2;
            return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? m.queue(this[0], a) : void 0 === b ? this : this.each(function () {
                var c = m.queue(this, a, b);
                m._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && m.dequeue(this, a)
            })
        }, dequeue: function (a) {
            return this.each(function () {
                m.dequeue(this, a)
            })
        }, clearQueue: function (a) {
            return this.queue(a || "fx", [])
        }, promise: function (a, b) {
            var c, d = 1, e = m.Deferred(), f = this, g = this.length, h = function () {
                --d || e.resolveWith(f, [f])
            };
            "string" != typeof a && (b = a, a = void 0), a = a || "fx";
            while (g--) {
                c = m._data(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h))
            }
            return h(), e.promise(b)
        }
    });
    var S = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, T = ["Top", "Right", "Bottom", "Left"], U = function (a, b) {
        return a = b || a, "none" === m.css(a, "display") || !m.contains(a.ownerDocument, a)
    }, V = m.access = function (a, b, c, d, e, f, g) {
        var h = 0, i = a.length, j = null == c;
        if ("object" === m.type(c)) {
            e = !0;
            for (h in c) {
                m.access(a, b, h, c[h], !0, f, g)
            }
        } else {
            if (void 0 !== d && (e = !0, m.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function (a, b, c) {
                    return j.call(m(a), c)
                })), b)) {
                for (; i > h; h++) {
                    b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)))
                }
            }
        }
        return e ? a : j ? b.call(a) : i ? b(a[0], c) : f
    }, W = /^(?:checkbox|radio)$/i;
    !function () {
        var a = y.createElement("input"), b = y.createElement("div"), c = y.createDocumentFragment();
        if (b.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", k.leadingWhitespace = 3 === b.firstChild.nodeType, k.tbody = !b.getElementsByTagName("tbody").length, k.htmlSerialize = !!b.getElementsByTagName("link").length, k.html5Clone = "<:nav></:nav>" !== y.createElement("nav").cloneNode(!0).outerHTML, a.type = "checkbox", a.checked = !0, c.appendChild(a), k.appendChecked = a.checked, b.innerHTML = "<textarea>x</textarea>", k.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue, c.appendChild(b), b.innerHTML = "<input type='radio' checked='checked' name='t'/>", k.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, k.noCloneEvent = !0, b.attachEvent && (b.attachEvent("onclick", function () {
                k.noCloneEvent = !1
            }), b.cloneNode(!0).click()), null == k.deleteExpando) {
            k.deleteExpando = !0;
            try {
                delete b.test
            } catch (d) {
                k.deleteExpando = !1
            }
        }
    }(), function () {
        var b, c, d = y.createElement("div");
        for (b in {submit: !0, change: !0, focusin: !0}) {
            c = "on" + b, (k[b + "Bubbles"] = c in a) || (d.setAttribute(c, "t"), k[b + "Bubbles"] = d.attributes[c].expando === !1)
        }
        d = null
    }();
    var X = /^(?:input|select|textarea)$/i, Y = /^key/, Z = /^(?:mouse|pointer|contextmenu)|click/,
        $ = /^(?:focusinfocus|focusoutblur)$/, _ = /^([^.]*)(?:\.(.+)|)$/;

    function ab() {
        return !0
    }

    function bb() {
        return !1
    }

    function cb() {
        try {
            return y.activeElement
        } catch (a) {
        }
    }

    m.event = {
        global: {},
        add: function (a, b, c, d, e) {
            var f, g, h, i, j, k, l, n, o, p, q, r = m._data(a);
            if (r) {
                c.handler && (i = c, c = i.handler, e = i.selector), c.guid || (c.guid = m.guid++), (g = r.events) || (g = r.events = {}), (k = r.handle) || (k = r.handle = function (a) {
                    return typeof m === K || a && m.event.triggered === a.type ? void 0 : m.event.dispatch.apply(k.elem, arguments)
                }, k.elem = a), b = (b || "").match(E) || [""], h = b.length;
                while (h--) {
                    f = _.exec(b[h]) || [], o = q = f[1], p = (f[2] || "").split(".").sort(), o && (j = m.event.special[o] || {}, o = (e ? j.delegateType : j.bindType) || o, j = m.event.special[o] || {}, l = m.extend({
                        type: o,
                        origType: q,
                        data: d,
                        handler: c,
                        guid: c.guid,
                        selector: e,
                        needsContext: e && m.expr.match.needsContext.test(e),
                        namespace: p.join(".")
                    }, i), (n = g[o]) || (n = g[o] = [], n.delegateCount = 0, j.setup && j.setup.call(a, d, p, k) !== !1 || (a.addEventListener ? a.addEventListener(o, k, !1) : a.attachEvent && a.attachEvent("on" + o, k))), j.add && (j.add.call(a, l), l.handler.guid || (l.handler.guid = c.guid)), e ? n.splice(n.delegateCount++, 0, l) : n.push(l), m.event.global[o] = !0)
                }
                a = null
            }
        },
        remove: function (a, b, c, d, e) {
            var f, g, h, i, j, k, l, n, o, p, q, r = m.hasData(a) && m._data(a);
            if (r && (k = r.events)) {
                b = (b || "").match(E) || [""], j = b.length;
                while (j--) {
                    if (h = _.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o) {
                        l = m.event.special[o] || {}, o = (d ? l.delegateType : l.bindType) || o, n = k[o] || [], h = h[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), i = f = n.length;
                        while (f--) {
                            g = n[f], !e && q !== g.origType || c && c.guid !== g.guid || h && !h.test(g.namespace) || d && d !== g.selector && ("**" !== d || !g.selector) || (n.splice(f, 1), g.selector && n.delegateCount--, l.remove && l.remove.call(a, g))
                        }
                        i && !n.length && (l.teardown && l.teardown.call(a, p, r.handle) !== !1 || m.removeEvent(a, o, r.handle), delete k[o])
                    } else {
                        for (o in k) {
                            m.event.remove(a, o + b[j], c, d, !0)
                        }
                    }
                }
                m.isEmptyObject(k) && (delete r.handle, m._removeData(a, "events"))
            }
        },
        trigger: function (b, c, d, e) {
            var f, g, h, i, k, l, n, o = [d || y], p = j.call(b, "type") ? b.type : b,
                q = j.call(b, "namespace") ? b.namespace.split(".") : [];
            if (h = l = d = d || y, 3 !== d.nodeType && 8 !== d.nodeType && !$.test(p + m.event.triggered) && (p.indexOf(".") >= 0 && (q = p.split("."), p = q.shift(), q.sort()), g = p.indexOf(":") < 0 && "on" + p, b = b[m.expando] ? b : new m.Event(p, "object" == typeof b && b), b.isTrigger = e ? 2 : 3, b.namespace = q.join("."), b.namespace_re = b.namespace ? new RegExp("(^|\\.)" + q.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = d), c = null == c ? [b] : m.makeArray(c, [b]), k = m.event.special[p] || {}, e || !k.trigger || k.trigger.apply(d, c) !== !1)) {
                if (!e && !k.noBubble && !m.isWindow(d)) {
                    for (i = k.delegateType || p, $.test(i + p) || (h = h.parentNode); h; h = h.parentNode) {
                        o.push(h), l = h
                    }
                    l === (d.ownerDocument || y) && o.push(l.defaultView || l.parentWindow || a)
                }
                n = 0;
                while ((h = o[n++]) && !b.isPropagationStopped()) {
                    b.type = n > 1 ? i : k.bindType || p, f = (m._data(h, "events") || {})[b.type] && m._data(h, "handle"), f && f.apply(h, c), f = g && h[g], f && f.apply && m.acceptData(h) && (b.result = f.apply(h, c), b.result === !1 && b.preventDefault())
                }
                if (b.type = p, !e && !b.isDefaultPrevented() && (!k._default || k._default.apply(o.pop(), c) === !1) && m.acceptData(d) && g && d[p] && !m.isWindow(d)) {
                    l = d[g], l && (d[g] = null), m.event.triggered = p;
                    try {
                        d[p]()
                    } catch (r) {
                    }
                    m.event.triggered = void 0, l && (d[g] = l)
                }
                return b.result
            }
        },
        dispatch: function (a) {
            a = m.event.fix(a);
            var b, c, e, f, g, h = [], i = d.call(arguments), j = (m._data(this, "events") || {})[a.type] || [],
                k = m.event.special[a.type] || {};
            if (i[0] = a, a.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, a) !== !1) {
                h = m.event.handlers.call(this, a, j), b = 0;
                while ((f = h[b++]) && !a.isPropagationStopped()) {
                    a.currentTarget = f.elem, g = 0;
                    while ((e = f.handlers[g++]) && !a.isImmediatePropagationStopped()) {
                        (!a.namespace_re || a.namespace_re.test(e.namespace)) && (a.handleObj = e, a.data = e.data, c = ((m.event.special[e.origType] || {}).handle || e.handler).apply(f.elem, i), void 0 !== c && (a.result = c) === !1 && (a.preventDefault(), a.stopPropagation()))
                    }
                }
                return k.postDispatch && k.postDispatch.call(this, a), a.result
            }
        },
        handlers: function (a, b) {
            var c, d, e, f, g = [], h = b.delegateCount, i = a.target;
            if (h && i.nodeType && (!a.button || "click" !== a.type)) {
                for (; i != this; i = i.parentNode || this) {
                    if (1 === i.nodeType && (i.disabled !== !0 || "click" !== a.type)) {
                        for (e = [], f = 0; h > f; f++) {
                            d = b[f], c = d.selector + " ", void 0 === e[c] && (e[c] = d.needsContext ? m(c, this).index(i) >= 0 : m.find(c, this, null, [i]).length), e[c] && e.push(d)
                        }
                        e.length && g.push({elem: i, handlers: e})
                    }
                }
            }
            return h < b.length && g.push({elem: this, handlers: b.slice(h)}), g
        },
        fix: function (a) {
            if (a[m.expando]) {
                return a
            }
            var b, c, d, e = a.type, f = a, g = this.fixHooks[e];
            g || (this.fixHooks[e] = g = Z.test(e) ? this.mouseHooks : Y.test(e) ? this.keyHooks : {}), d = g.props ? this.props.concat(g.props) : this.props, a = new m.Event(f), b = d.length;
            while (b--) {
                c = d[b], a[c] = f[c]
            }
            return a.target || (a.target = f.srcElement || y), 3 === a.target.nodeType && (a.target = a.target.parentNode), a.metaKey = !!a.metaKey, g.filter ? g.filter(a, f) : a
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "), filter: function (a, b) {
                return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function (a, b) {
                var c, d, e, f = b.button, g = b.fromElement;
                return null == a.pageX && null != b.clientX && (d = a.target.ownerDocument || y, e = d.documentElement, c = d.body, a.pageX = b.clientX + (e && e.scrollLeft || c && c.scrollLeft || 0) - (e && e.clientLeft || c && c.clientLeft || 0), a.pageY = b.clientY + (e && e.scrollTop || c && c.scrollTop || 0) - (e && e.clientTop || c && c.clientTop || 0)), !a.relatedTarget && g && (a.relatedTarget = g === a.target ? b.toElement : g), a.which || void 0 === f || (a.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0), a
            }
        },
        special: {
            load: {noBubble: !0}, focus: {
                trigger: function () {
                    if (this !== cb() && this.focus) {
                        try {
                            return this.focus(), !1
                        } catch (a) {
                        }
                    }
                }, delegateType: "focusin"
            }, blur: {
                trigger: function () {
                    return this === cb() && this.blur ? (this.blur(), !1) : void 0
                }, delegateType: "focusout"
            }, click: {
                trigger: function () {
                    return m.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
                }, _default: function (a) {
                    return m.nodeName(a.target, "a")
                }
            }, beforeunload: {
                postDispatch: function (a) {
                    void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result)
                }
            }
        },
        simulate: function (a, b, c, d) {
            var e = m.extend(new m.Event, c, {type: a, isSimulated: !0, originalEvent: {}});
            d ? m.event.trigger(e, null, b) : m.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault()
        }
    }, m.removeEvent = y.removeEventListener ? function (a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c, !1)
    } : function (a, b, c) {
        var d = "on" + b;
        a.detachEvent && (typeof a[d] === K && (a[d] = null), a.detachEvent(d, c))
    }, m.Event = function (a, b) {
        return this instanceof m.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? ab : bb) : this.type = a, b && m.extend(this, b), this.timeStamp = a && a.timeStamp || m.now(), void (this[m.expando] = !0)) : new m.Event(a, b)
    }, m.Event.prototype = {
        isDefaultPrevented: bb,
        isPropagationStopped: bb,
        isImmediatePropagationStopped: bb,
        preventDefault: function () {
            var a = this.originalEvent;
            this.isDefaultPrevented = ab, a && (a.preventDefault ? a.preventDefault() : a.returnValue = !1)
        },
        stopPropagation: function () {
            var a = this.originalEvent;
            this.isPropagationStopped = ab, a && (a.stopPropagation && a.stopPropagation(), a.cancelBubble = !0)
        },
        stopImmediatePropagation: function () {
            var a = this.originalEvent;
            this.isImmediatePropagationStopped = ab, a && a.stopImmediatePropagation && a.stopImmediatePropagation(), this.stopPropagation()
        }
    }, m.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function (a, b) {
        m.event.special[a] = {
            delegateType: b, bindType: b, handle: function (a) {
                var c, d = this, e = a.relatedTarget, f = a.handleObj;
                return (!e || e !== d && !m.contains(d, e)) && (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c
            }
        }
    }), k.submitBubbles || (m.event.special.submit = {
        setup: function () {
            return m.nodeName(this, "form") ? !1 : void m.event.add(this, "click._submit keypress._submit", function (a) {
                var b = a.target, c = m.nodeName(b, "input") || m.nodeName(b, "button") ? b.form : void 0;
                c && !m._data(c, "submitBubbles") && (m.event.add(c, "submit._submit", function (a) {
                    a._submit_bubble = !0
                }), m._data(c, "submitBubbles", !0))
            })
        }, postDispatch: function (a) {
            a._submit_bubble && (delete a._submit_bubble, this.parentNode && !a.isTrigger && m.event.simulate("submit", this.parentNode, a, !0))
        }, teardown: function () {
            return m.nodeName(this, "form") ? !1 : void m.event.remove(this, "._submit")
        }
    }), k.changeBubbles || (m.event.special.change = {
        setup: function () {
            return X.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (m.event.add(this, "propertychange._change", function (a) {
                "checked" === a.originalEvent.propertyName && (this._just_changed = !0)
            }), m.event.add(this, "click._change", function (a) {
                this._just_changed && !a.isTrigger && (this._just_changed = !1), m.event.simulate("change", this, a, !0)
            })), !1) : void m.event.add(this, "beforeactivate._change", function (a) {
                var b = a.target;
                X.test(b.nodeName) && !m._data(b, "changeBubbles") && (m.event.add(b, "change._change", function (a) {
                    !this.parentNode || a.isSimulated || a.isTrigger || m.event.simulate("change", this.parentNode, a, !0)
                }), m._data(b, "changeBubbles", !0))
            })
        }, handle: function (a) {
            var b = a.target;
            return this !== b || a.isSimulated || a.isTrigger || "radio" !== b.type && "checkbox" !== b.type ? a.handleObj.handler.apply(this, arguments) : void 0
        }, teardown: function () {
            return m.event.remove(this, "._change"), !X.test(this.nodeName)
        }
    }), k.focusinBubbles || m.each({focus: "focusin", blur: "focusout"}, function (a, b) {
        var c = function (a) {
            m.event.simulate(b, a.target, m.event.fix(a), !0)
        };
        m.event.special[b] = {
            setup: function () {
                var d = this.ownerDocument || this, e = m._data(d, b);
                e || d.addEventListener(a, c, !0), m._data(d, b, (e || 0) + 1)
            }, teardown: function () {
                var d = this.ownerDocument || this, e = m._data(d, b) - 1;
                e ? m._data(d, b, e) : (d.removeEventListener(a, c, !0), m._removeData(d, b))
            }
        }
    }), m.fn.extend({
        on: function (a, b, c, d, e) {
            var f, g;
            if ("object" == typeof a) {
                "string" != typeof b && (c = c || b, b = void 0);
                for (f in a) {
                    this.on(f, b, c, a[f], e)
                }
                return this
            }
            if (null == c && null == d ? (d = b, c = b = void 0) : null == d && ("string" == typeof b ? (d = c, c = void 0) : (d = c, c = b, b = void 0)), d === !1) {
                d = bb
            } else {
                if (!d) {
                    return this
                }
            }
            return 1 === e && (g = d, d = function (a) {
                return m().off(a), g.apply(this, arguments)
            }, d.guid = g.guid || (g.guid = m.guid++)), this.each(function () {
                m.event.add(this, a, d, c, b)
            })
        }, one: function (a, b, c, d) {
            return this.on(a, b, c, d, 1)
        }, off: function (a, b, c) {
            var d, e;
            if (a && a.preventDefault && a.handleObj) {
                return d = a.handleObj, m(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this
            }
            if ("object" == typeof a) {
                for (e in a) {
                    this.off(e, b, a[e])
                }
                return this
            }
            return (b === !1 || "function" == typeof b) && (c = b, b = void 0), c === !1 && (c = bb), this.each(function () {
                m.event.remove(this, a, c, b)
            })
        }, trigger: function (a, b) {
            return this.each(function () {
                m.event.trigger(a, b, this)
            })
        }, triggerHandler: function (a, b) {
            var c = this[0];
            return c ? m.event.trigger(a, b, c, !0) : void 0
        }
    });

    function db(a) {
        var b = eb.split("|"), c = a.createDocumentFragment();
        if (c.createElement) {
            while (b.length) {
                c.createElement(b.pop())
            }
        }
        return c
    }

    var eb = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        fb = / jQuery\d+="(?:null|\d+)"/g, gb = new RegExp("<(?:" + eb + ")[\\s/>]", "i"), hb = /^\s+/,
        ib = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, jb = /<([\w:]+)/,
        kb = /<tbody/i, lb = /<|&#?\w+;/, mb = /<(?:script|style|link)/i, nb = /checked\s*(?:[^=]|=\s*.checked.)/i,
        ob = /^$|\/(?:java|ecma)script/i, pb = /^true\/(.*)/, qb = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, rb = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            area: [1, "<map>", "</map>"],
            param: [1, "<object>", "</object>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: k.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
        }, sb = db(y), tb = sb.appendChild(y.createElement("div"));
    rb.optgroup = rb.option, rb.tbody = rb.tfoot = rb.colgroup = rb.caption = rb.thead, rb.th = rb.td;

    function ub(a, b) {
        var c, d, e = 0,
            f = typeof a.getElementsByTagName !== K ? a.getElementsByTagName(b || "*") : typeof a.querySelectorAll !== K ? a.querySelectorAll(b || "*") : void 0;
        if (!f) {
            for (f = [], c = a.childNodes || a; null != (d = c[e]); e++) {
                !b || m.nodeName(d, b) ? f.push(d) : m.merge(f, ub(d, b))
            }
        }
        return void 0 === b || b && m.nodeName(a, b) ? m.merge([a], f) : f
    }

    function vb(a) {
        W.test(a.type) && (a.defaultChecked = a.checked)
    }

    function wb(a, b) {
        return m.nodeName(a, "table") && m.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
    }

    function xb(a) {
        return a.type = (null !== m.find.attr(a, "type")) + "/" + a.type, a
    }

    function yb(a) {
        var b = pb.exec(a.type);
        return b ? a.type = b[1] : a.removeAttribute("type"), a
    }

    function zb(a, b) {
        for (var c, d = 0; null != (c = a[d]); d++) {
            m._data(c, "globalEval", !b || m._data(b[d], "globalEval"))
        }
    }

    function Ab(a, b) {
        if (1 === b.nodeType && m.hasData(a)) {
            var c, d, e, f = m._data(a), g = m._data(b, f), h = f.events;
            if (h) {
                delete g.handle, g.events = {};
                for (c in h) {
                    for (d = 0, e = h[c].length; e > d; d++) {
                        m.event.add(b, c, h[c][d])
                    }
                }
            }
            g.data && (g.data = m.extend({}, g.data))
        }
    }

    function Bb(a, b) {
        var c, d, e;
        if (1 === b.nodeType) {
            if (c = b.nodeName.toLowerCase(), !k.noCloneEvent && b[m.expando]) {
                e = m._data(b);
                for (d in e.events) {
                    m.removeEvent(b, d, e.handle)
                }
                b.removeAttribute(m.expando)
            }
            "script" === c && b.text !== a.text ? (xb(b).text = a.text, yb(b)) : "object" === c ? (b.parentNode && (b.outerHTML = a.outerHTML), k.html5Clone && a.innerHTML && !m.trim(b.innerHTML) && (b.innerHTML = a.innerHTML)) : "input" === c && W.test(a.type) ? (b.defaultChecked = b.checked = a.checked, b.value !== a.value && (b.value = a.value)) : "option" === c ? b.defaultSelected = b.selected = a.defaultSelected : ("input" === c || "textarea" === c) && (b.defaultValue = a.defaultValue)
        }
    }

    m.extend({
        clone: function (a, b, c) {
            var d, e, f, g, h, i = m.contains(a.ownerDocument, a);
            if (k.html5Clone || m.isXMLDoc(a) || !gb.test("<" + a.nodeName + ">") ? f = a.cloneNode(!0) : (tb.innerHTML = a.outerHTML, tb.removeChild(f = tb.firstChild)), !(k.noCloneEvent && k.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || m.isXMLDoc(a))) {
                for (d = ub(f), h = ub(a), g = 0; null != (e = h[g]); ++g) {
                    d[g] && Bb(e, d[g])
                }
            }
            if (b) {
                if (c) {
                    for (h = h || ub(a), d = d || ub(f), g = 0; null != (e = h[g]); g++) {
                        Ab(e, d[g])
                    }
                } else {
                    Ab(a, f)
                }
            }
            return d = ub(f, "script"), d.length > 0 && zb(d, !i && ub(a, "script")), d = h = e = null, f
        }, buildFragment: function (a, b, c, d) {
            for (var e, f, g, h, i, j, l, n = a.length, o = db(b), p = [], q = 0; n > q; q++) {
                if (f = a[q], f || 0 === f) {
                    if ("object" === m.type(f)) {
                        m.merge(p, f.nodeType ? [f] : f)
                    } else {
                        if (lb.test(f)) {
                            h = h || o.appendChild(b.createElement("div")), i = (jb.exec(f) || ["", ""])[1].toLowerCase(), l = rb[i] || rb._default, h.innerHTML = l[1] + f.replace(ib, "<$1></$2>") + l[2], e = l[0];
                            while (e--) {
                                h = h.lastChild
                            }
                            if (!k.leadingWhitespace && hb.test(f) && p.push(b.createTextNode(hb.exec(f)[0])), !k.tbody) {
                                f = "table" !== i || kb.test(f) ? "<table>" !== l[1] || kb.test(f) ? 0 : h : h.firstChild, e = f && f.childNodes.length;
                                while (e--) {
                                    m.nodeName(j = f.childNodes[e], "tbody") && !j.childNodes.length && f.removeChild(j)
                                }
                            }
                            m.merge(p, h.childNodes), h.textContent = "";
                            while (h.firstChild) {
                                h.removeChild(h.firstChild)
                            }
                            h = o.lastChild
                        } else {
                            p.push(b.createTextNode(f))
                        }
                    }
                }
            }
            h && o.removeChild(h), k.appendChecked || m.grep(ub(p, "input"), vb), q = 0;
            while (f = p[q++]) {
                if ((!d || -1 === m.inArray(f, d)) && (g = m.contains(f.ownerDocument, f), h = ub(o.appendChild(f), "script"), g && zb(h), c)) {
                    e = 0;
                    while (f = h[e++]) {
                        ob.test(f.type || "") && c.push(f)
                    }
                }
            }
            return h = null, o
        }, cleanData: function (a, b) {
            for (var d, e, f, g, h = 0, i = m.expando, j = m.cache, l = k.deleteExpando, n = m.event.special; null != (d = a[h]); h++) {
                if ((b || m.acceptData(d)) && (f = d[i], g = f && j[f])) {
                    if (g.events) {
                        for (e in g.events) {
                            n[e] ? m.event.remove(d, e) : m.removeEvent(d, e, g.handle)
                        }
                    }
                    j[f] && (delete j[f], l ? delete d[i] : typeof d.removeAttribute !== K ? d.removeAttribute(i) : d[i] = null, c.push(f))
                }
            }
        }
    }), m.fn.extend({
        text: function (a) {
            return V(this, function (a) {
                return void 0 === a ? m.text(this) : this.empty().append((this[0] && this[0].ownerDocument || y).createTextNode(a))
            }, null, a, arguments.length)
        }, append: function () {
            return this.domManip(arguments, function (a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = wb(this, a);
                    b.appendChild(a)
                }
            })
        }, prepend: function () {
            return this.domManip(arguments, function (a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = wb(this, a);
                    b.insertBefore(a, b.firstChild)
                }
            })
        }, before: function () {
            return this.domManip(arguments, function (a) {
                this.parentNode && this.parentNode.insertBefore(a, this)
            })
        }, after: function () {
            return this.domManip(arguments, function (a) {
                this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
            })
        }, remove: function (a, b) {
            for (var c, d = a ? m.filter(a, this) : this, e = 0; null != (c = d[e]); e++) {
                b || 1 !== c.nodeType || m.cleanData(ub(c)), c.parentNode && (b && m.contains(c.ownerDocument, c) && zb(ub(c, "script")), c.parentNode.removeChild(c))
            }
            return this
        }, empty: function () {
            for (var a, b = 0; null != (a = this[b]); b++) {
                1 === a.nodeType && m.cleanData(ub(a, !1));
                while (a.firstChild) {
                    a.removeChild(a.firstChild)
                }
                a.options && m.nodeName(a, "select") && (a.options.length = 0)
            }
            return this
        }, clone: function (a, b) {
            return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function () {
                return m.clone(this, a, b)
            })
        }, html: function (a) {
            return V(this, function (a) {
                var b = this[0] || {}, c = 0, d = this.length;
                if (void 0 === a) {
                    return 1 === b.nodeType ? b.innerHTML.replace(fb, "") : void 0
                }
                if (!("string" != typeof a || mb.test(a) || !k.htmlSerialize && gb.test(a) || !k.leadingWhitespace && hb.test(a) || rb[(jb.exec(a) || ["", ""])[1].toLowerCase()])) {
                    a = a.replace(ib, "<$1></$2>");
                    try {
                        for (; d > c; c++) {
                            b = this[c] || {}, 1 === b.nodeType && (m.cleanData(ub(b, !1)), b.innerHTML = a)
                        }
                        b = 0
                    } catch (e) {
                    }
                }
                b && this.empty().append(a)
            }, null, a, arguments.length)
        }, replaceWith: function () {
            var a = arguments[0];
            return this.domManip(arguments, function (b) {
                a = this.parentNode, m.cleanData(ub(this)), a && a.replaceChild(b, this)
            }), a && (a.length || a.nodeType) ? this : this.remove()
        }, detach: function (a) {
            return this.remove(a, !0)
        }, domManip: function (a, b) {
            a = e.apply([], a);
            var c, d, f, g, h, i, j = 0, l = this.length, n = this, o = l - 1, p = a[0], q = m.isFunction(p);
            if (q || l > 1 && "string" == typeof p && !k.checkClone && nb.test(p)) {
                return this.each(function (c) {
                    var d = n.eq(c);
                    q && (a[0] = p.call(this, c, d.html())), d.domManip(a, b)
                })
            }
            if (l && (i = m.buildFragment(a, this[0].ownerDocument, !1, this), c = i.firstChild, 1 === i.childNodes.length && (i = c), c)) {
                for (g = m.map(ub(i, "script"), xb), f = g.length; l > j; j++) {
                    d = i, j !== o && (d = m.clone(d, !0, !0), f && m.merge(g, ub(d, "script"))), b.call(this[j], d, j)
                }
                if (f) {
                    for (h = g[g.length - 1].ownerDocument, m.map(g, yb), j = 0; f > j; j++) {
                        d = g[j], ob.test(d.type || "") && !m._data(d, "globalEval") && m.contains(h, d) && (d.src ? m._evalUrl && m._evalUrl(d.src) : m.globalEval((d.text || d.textContent || d.innerHTML || "").replace(qb, "")))
                    }
                }
                i = c = null
            }
            return this
        }
    }), m.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (a, b) {
        m.fn[a] = function (a) {
            for (var c, d = 0, e = [], g = m(a), h = g.length - 1; h >= d; d++) {
                c = d === h ? this : this.clone(!0), m(g[d])[b](c), f.apply(e, c.get())
            }
            return this.pushStack(e)
        }
    });
    var Cb, Db = {};

    function Eb(b, c) {
        var d, e = m(c.createElement(b)).appendTo(c.body),
            f = a.getDefaultComputedStyle && (d = a.getDefaultComputedStyle(e[0])) ? d.display : m.css(e[0], "display");
        return e.detach(), f
    }

    function Fb(a) {
        var b = y, c = Db[a];
        return c || (c = Eb(a, b), "none" !== c && c || (Cb = (Cb || m("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), b = (Cb[0].contentWindow || Cb[0].contentDocument).document, b.write(), b.close(), c = Eb(a, b), Cb.detach()), Db[a] = c), c
    }

    !function () {
        var a;
        k.shrinkWrapBlocks = function () {
            if (null != a) {
                return a
            }
            a = !1;
            var b, c, d;
            return c = y.getElementsByTagName("body")[0], c && c.style ? (b = y.createElement("div"), d = y.createElement("div"), d.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(d).appendChild(b), typeof b.style.zoom !== K && (b.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", b.appendChild(y.createElement("div")).style.width = "5px", a = 3 !== b.offsetWidth), c.removeChild(d), a) : void 0
        }
    }();
    var Gb = /^margin/, Hb = new RegExp("^(" + S + ")(?!px)[a-z%]+$", "i"), Ib, Jb, Kb = /^(top|right|bottom|left)$/;
    a.getComputedStyle ? (Ib = function (b) {
        return b.ownerDocument.defaultView.opener ? b.ownerDocument.defaultView.getComputedStyle(b, null) : a.getComputedStyle(b, null)
    }, Jb = function (a, b, c) {
        var d, e, f, g, h = a.style;
        return c = c || Ib(a), g = c ? c.getPropertyValue(b) || c[b] : void 0, c && ("" !== g || m.contains(a.ownerDocument, a) || (g = m.style(a, b)), Hb.test(g) && Gb.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 === g ? g : g + ""
    }) : y.documentElement.currentStyle && (Ib = function (a) {
        return a.currentStyle
    }, Jb = function (a, b, c) {
        var d, e, f, g, h = a.style;
        return c = c || Ib(a), g = c ? c[b] : void 0, null == g && h && h[b] && (g = h[b]), Hb.test(g) && !Kb.test(b) && (d = h.left, e = a.runtimeStyle, f = e && e.left, f && (e.left = a.currentStyle.left), h.left = "fontSize" === b ? "1em" : g, g = h.pixelLeft + "px", h.left = d, f && (e.left = f)), void 0 === g ? g : g + "" || "auto"
    });

    function Lb(a, b) {
        return {
            get: function () {
                var c = a();
                if (null != c) {
                    return c ? void delete this.get : (this.get = b).apply(this, arguments)
                }
            }
        }
    }

    !function () {
        var b, c, d, e, f, g, h;
        if (b = y.createElement("div"), b.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", d = b.getElementsByTagName("a")[0], c = d && d.style) {
            c.cssText = "float:left;opacity:.5", k.opacity = "0.5" === c.opacity, k.cssFloat = !!c.cssFloat, b.style.backgroundClip = "content-box", b.cloneNode(!0).style.backgroundClip = "", k.clearCloneStyle = "content-box" === b.style.backgroundClip, k.boxSizing = "" === c.boxSizing || "" === c.MozBoxSizing || "" === c.WebkitBoxSizing, m.extend(k, {
                reliableHiddenOffsets: function () {
                    return null == g && i(), g
                }, boxSizingReliable: function () {
                    return null == f && i(), f
                }, pixelPosition: function () {
                    return null == e && i(), e
                }, reliableMarginRight: function () {
                    return null == h && i(), h
                }
            });

            function i() {
                var b, c, d, i;
                c = y.getElementsByTagName("body")[0], c && c.style && (b = y.createElement("div"), d = y.createElement("div"), d.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(d).appendChild(b), b.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", e = f = !1, h = !0, a.getComputedStyle && (e = "1%" !== (a.getComputedStyle(b, null) || {}).top, f = "4px" === (a.getComputedStyle(b, null) || {width: "4px"}).width, i = b.appendChild(y.createElement("div")), i.style.cssText = b.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", i.style.marginRight = i.style.width = "0", b.style.width = "1px", h = !parseFloat((a.getComputedStyle(i, null) || {}).marginRight), b.removeChild(i)), b.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", i = b.getElementsByTagName("td"), i[0].style.cssText = "margin:0;border:0;padding:0;display:none", g = 0 === i[0].offsetHeight, g && (i[0].style.display = "", i[1].style.display = "none", g = 0 === i[0].offsetHeight), c.removeChild(d))
            }
        }
    }(), m.swap = function (a, b, c, d) {
        var e, f, g = {};
        for (f in b) {
            g[f] = a.style[f], a.style[f] = b[f]
        }
        e = c.apply(a, d || []);
        for (f in b) {
            a.style[f] = g[f]
        }
        return e
    };
    var Mb = /alpha\([^)]*\)/i, Nb = /opacity\s*=\s*([^)]*)/, Ob = /^(none|table(?!-c[ea]).+)/,
        Pb = new RegExp("^(" + S + ")(.*)$", "i"), Qb = new RegExp("^([+-])=(" + S + ")", "i"),
        Rb = {position: "absolute", visibility: "hidden", display: "block"},
        Sb = {letterSpacing: "0", fontWeight: "400"}, Tb = ["Webkit", "O", "Moz", "ms"];

    function Ub(a, b) {
        if (b in a) {
            return b
        }
        var c = b.charAt(0).toUpperCase() + b.slice(1), d = b, e = Tb.length;
        while (e--) {
            if (b = Tb[e] + c, b in a) {
                return b
            }
        }
        return d
    }

    function Vb(a, b) {
        for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++) {
            d = a[g], d.style && (f[g] = m._data(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && U(d) && (f[g] = m._data(d, "olddisplay", Fb(d.nodeName)))) : (e = U(d), (c && "none" !== c || !e) && m._data(d, "olddisplay", e ? c : m.css(d, "display"))))
        }
        for (g = 0; h > g; g++) {
            d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"))
        }
        return a
    }

    function Wb(a, b, c) {
        var d = Pb.exec(b);
        return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b
    }

    function Xb(a, b, c, d, e) {
        for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2) {
            "margin" === c && (g += m.css(a, c + T[f], !0, e)), d ? ("content" === c && (g -= m.css(a, "padding" + T[f], !0, e)), "margin" !== c && (g -= m.css(a, "border" + T[f] + "Width", !0, e))) : (g += m.css(a, "padding" + T[f], !0, e), "padding" !== c && (g += m.css(a, "border" + T[f] + "Width", !0, e)))
        }
        return g
    }

    function Yb(a, b, c) {
        var d = !0, e = "width" === b ? a.offsetWidth : a.offsetHeight, f = Ib(a),
            g = k.boxSizing && "border-box" === m.css(a, "boxSizing", !1, f);
        if (0 >= e || null == e) {
            if (e = Jb(a, b, f), (0 > e || null == e) && (e = a.style[b]), Hb.test(e)) {
                return e
            }
            d = g && (k.boxSizingReliable() || e === a.style[b]), e = parseFloat(e) || 0
        }
        return e + Xb(a, b, c || (g ? "border" : "content"), d, f) + "px"
    }

    m.extend({
        cssHooks: {
            opacity: {
                get: function (a, b) {
                    if (b) {
                        var c = Jb(a, "opacity");
                        return "" === c ? "1" : c
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {"float": k.cssFloat ? "cssFloat" : "styleFloat"},
        style: function (a, b, c, d) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var e, f, g, h = m.camelCase(b), i = a.style;
                if (b = m.cssProps[h] || (m.cssProps[h] = Ub(i, h)), g = m.cssHooks[b] || m.cssHooks[h], void 0 === c) {
                    return g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b]
                }
                if (f = typeof c, "string" === f && (e = Qb.exec(c)) && (c = (e[1] + 1) * e[2] + parseFloat(m.css(a, b)), f = "number"), null != c && c === c && ("number" !== f || m.cssNumber[h] || (c += "px"), k.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), !(g && "set" in g && void 0 === (c = g.set(a, c, d))))) {
                    try {
                        i[b] = c
                    } catch (j) {
                    }
                }
            }
        },
        css: function (a, b, c, d) {
            var e, f, g, h = m.camelCase(b);
            return b = m.cssProps[h] || (m.cssProps[h] = Ub(a.style, h)), g = m.cssHooks[b] || m.cssHooks[h], g && "get" in g && (f = g.get(a, !0, c)), void 0 === f && (f = Jb(a, b, d)), "normal" === f && b in Sb && (f = Sb[b]), "" === c || c ? (e = parseFloat(f), c === !0 || m.isNumeric(e) ? e || 0 : f) : f
        }
    }), m.each(["height", "width"], function (a, b) {
        m.cssHooks[b] = {
            get: function (a, c, d) {
                return c ? Ob.test(m.css(a, "display")) && 0 === a.offsetWidth ? m.swap(a, Rb, function () {
                    return Yb(a, b, d)
                }) : Yb(a, b, d) : void 0
            }, set: function (a, c, d) {
                var e = d && Ib(a);
                return Wb(a, c, d ? Xb(a, b, d, k.boxSizing && "border-box" === m.css(a, "boxSizing", !1, e), e) : 0)
            }
        }
    }), k.opacity || (m.cssHooks.opacity = {
        get: function (a, b) {
            return Nb.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? 0.01 * parseFloat(RegExp.$1) + "" : b ? "1" : ""
        }, set: function (a, b) {
            var c = a.style, d = a.currentStyle, e = m.isNumeric(b) ? "alpha(opacity=" + 100 * b + ")" : "",
                f = d && d.filter || c.filter || "";
            c.zoom = 1, (b >= 1 || "" === b) && "" === m.trim(f.replace(Mb, "")) && c.removeAttribute && (c.removeAttribute("filter"), "" === b || d && !d.filter) || (c.filter = Mb.test(f) ? f.replace(Mb, e) : f + " " + e)
        }
    }), m.cssHooks.marginRight = Lb(k.reliableMarginRight, function (a, b) {
        return b ? m.swap(a, {display: "inline-block"}, Jb, [a, "marginRight"]) : void 0
    }), m.each({margin: "", padding: "", border: "Width"}, function (a, b) {
        m.cssHooks[a + b] = {
            expand: function (c) {
                for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++) {
                    e[a + T[d] + b] = f[d] || f[d - 2] || f[0]
                }
                return e
            }
        }, Gb.test(a) || (m.cssHooks[a + b].set = Wb)
    }), m.fn.extend({
        css: function (a, b) {
            return V(this, function (a, b, c) {
                var d, e, f = {}, g = 0;
                if (m.isArray(b)) {
                    for (d = Ib(a), e = b.length; e > g; g++) {
                        f[b[g]] = m.css(a, b[g], !1, d)
                    }
                    return f
                }
                return void 0 !== c ? m.style(a, b, c) : m.css(a, b)
            }, a, b, arguments.length > 1)
        }, show: function () {
            return Vb(this, !0)
        }, hide: function () {
            return Vb(this)
        }, toggle: function (a) {
            return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function () {
                U(this) ? m(this).show() : m(this).hide()
            })
        }
    });

    function Zb(a, b, c, d, e) {
        return new Zb.prototype.init(a, b, c, d, e)
    }

    m.Tween = Zb, Zb.prototype = {
        constructor: Zb, init: function (a, b, c, d, e, f) {
            this.elem = a, this.prop = c, this.easing = e || "swing", this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (m.cssNumber[c] ? "" : "px")
        }, cur: function () {
            var a = Zb.propHooks[this.prop];
            return a && a.get ? a.get(this) : Zb.propHooks._default.get(this)
        }, run: function (a) {
            var b, c = Zb.propHooks[this.prop];
            return this.pos = b = this.options.duration ? m.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : Zb.propHooks._default.set(this), this
        }
    }, Zb.prototype.init.prototype = Zb.prototype, Zb.propHooks = {
        _default: {
            get: function (a) {
                var b;
                return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (b = m.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0) : a.elem[a.prop]
            }, set: function (a) {
                m.fx.step[a.prop] ? m.fx.step[a.prop](a) : a.elem.style && (null != a.elem.style[m.cssProps[a.prop]] || m.cssHooks[a.prop]) ? m.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now
            }
        }
    }, Zb.propHooks.scrollTop = Zb.propHooks.scrollLeft = {
        set: function (a) {
            a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
        }
    }, m.easing = {
        linear: function (a) {
            return a
        }, swing: function (a) {
            return 0.5 - Math.cos(a * Math.PI) / 2
        }
    }, m.fx = Zb.prototype.init, m.fx.step = {};
    var $b, _b, ac = /^(?:toggle|show|hide)$/, bc = new RegExp("^(?:([+-])=|)(" + S + ")([a-z%]*)$", "i"),
        cc = /queueHooks$/, dc = [ic], ec = {
            "*": [function (a, b) {
                var c = this.createTween(a, b), d = c.cur(), e = bc.exec(b), f = e && e[3] || (m.cssNumber[a] ? "" : "px"),
                    g = (m.cssNumber[a] || "px" !== f && +d) && bc.exec(m.css(c.elem, a)), h = 1, i = 20;
                if (g && g[3] !== f) {
                    f = f || g[3], e = e || [], g = +d || 1;
                    do {
                        h = h || ".5", g /= h, m.style(c.elem, a, g + f)
                    } while (h !== (h = c.cur() / d) && 1 !== h && --i)
                }
                return e && (g = c.start = +g || +d || 0, c.unit = f, c.end = e[1] ? g + (e[1] + 1) * e[2] : +e[2]), c
            }]
        };

    function fc() {
        return setTimeout(function () {
            $b = void 0
        }), $b = m.now()
    }

    function gc(a, b) {
        var c, d = {height: a}, e = 0;
        for (b = b ? 1 : 0; 4 > e; e += 2 - b) {
            c = T[e], d["margin" + c] = d["padding" + c] = a
        }
        return b && (d.opacity = d.width = a), d
    }

    function hc(a, b, c) {
        for (var d, e = (ec[b] || []).concat(ec["*"]), f = 0, g = e.length; g > f; f++) {
            if (d = e[f].call(c, b, a)) {
                return d
            }
        }
    }

    function ic(a, b, c) {
        var d, e, f, g, h, i, j, l, n = this, o = {}, p = a.style, q = a.nodeType && U(a), r = m._data(a, "fxshow");
        c.queue || (h = m._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function () {
            h.unqueued || i()
        }), h.unqueued++, n.always(function () {
            n.always(function () {
                h.unqueued--, m.queue(a, "fx").length || h.empty.fire()
            })
        })), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [p.overflow, p.overflowX, p.overflowY], j = m.css(a, "display"), l = "none" === j ? m._data(a, "olddisplay") || Fb(a.nodeName) : j, "inline" === l && "none" === m.css(a, "float") && (k.inlineBlockNeedsLayout && "inline" !== Fb(a.nodeName) ? p.zoom = 1 : p.display = "inline-block")), c.overflow && (p.overflow = "hidden", k.shrinkWrapBlocks() || n.always(function () {
            p.overflow = c.overflow[0], p.overflowX = c.overflow[1], p.overflowY = c.overflow[2]
        }));
        for (d in b) {
            if (e = b[d], ac.exec(e)) {
                if (delete b[d], f = f || "toggle" === e, e === (q ? "hide" : "show")) {
                    if ("show" !== e || !r || void 0 === r[d]) {
                        continue
                    }
                    q = !0
                }
                o[d] = r && r[d] || m.style(a, d)
            } else {
                j = void 0
            }
        }
        if (m.isEmptyObject(o)) {
            "inline" === ("none" === j ? Fb(a.nodeName) : j) && (p.display = j)
        } else {
            r ? "hidden" in r && (q = r.hidden) : r = m._data(a, "fxshow", {}), f && (r.hidden = !q), q ? m(a).show() : n.done(function () {
                m(a).hide()
            }), n.done(function () {
                var b;
                m._removeData(a, "fxshow");
                for (b in o) {
                    m.style(a, b, o[b])
                }
            });
            for (d in o) {
                g = hc(q ? r[d] : 0, d, n), d in r || (r[d] = g.start, q && (g.end = g.start, g.start = "width" === d || "height" === d ? 1 : 0))
            }
        }
    }

    function jc(a, b) {
        var c, d, e, f, g;
        for (c in a) {
            if (d = m.camelCase(c), e = b[d], f = a[c], m.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = m.cssHooks[d], g && "expand" in g) {
                f = g.expand(f), delete a[d];
                for (c in f) {
                    c in a || (a[c] = f[c], b[c] = e)
                }
            } else {
                b[d] = e
            }
        }
    }

    function kc(a, b, c) {
        var d, e, f = 0, g = dc.length, h = m.Deferred().always(function () {
            delete i.elem
        }), i = function () {
            if (e) {
                return !1
            }
            for (var b = $b || fc(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++) {
                j.tweens[g].run(f)
            }
            return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1)
        }, j = h.promise({
            elem: a,
            props: m.extend({}, b),
            opts: m.extend(!0, {specialEasing: {}}, c),
            originalProperties: b,
            originalOptions: c,
            startTime: $b || fc(),
            duration: c.duration,
            tweens: [],
            createTween: function (b, c) {
                var d = m.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                return j.tweens.push(d), d
            },
            stop: function (b) {
                var c = 0, d = b ? j.tweens.length : 0;
                if (e) {
                    return this
                }
                for (e = !0; d > c; c++) {
                    j.tweens[c].run(1)
                }
                return b ? h.resolveWith(a, [j, b]) : h.rejectWith(a, [j, b]), this
            }
        }), k = j.props;
        for (jc(k, j.opts.specialEasing); g > f; f++) {
            if (d = dc[f].call(j, a, k, j.opts)) {
                return d
            }
        }
        return m.map(k, hc, j), m.isFunction(j.opts.start) && j.opts.start.call(a, j), m.fx.timer(m.extend(i, {
            elem: a,
            anim: j,
            queue: j.opts.queue
        })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
    }

    m.Animation = m.extend(kc, {
        tweener: function (a, b) {
            m.isFunction(a) ? (b = a, a = ["*"]) : a = a.split(" ");
            for (var c, d = 0, e = a.length; e > d; d++) {
                c = a[d], ec[c] = ec[c] || [], ec[c].unshift(b)
            }
        }, prefilter: function (a, b) {
            b ? dc.unshift(a) : dc.push(a)
        }
    }), m.speed = function (a, b, c) {
        var d = a && "object" == typeof a ? m.extend({}, a) : {
            complete: c || !c && b || m.isFunction(a) && a,
            duration: a,
            easing: c && b || b && !m.isFunction(b) && b
        };
        return d.duration = m.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in m.fx.speeds ? m.fx.speeds[d.duration] : m.fx.speeds._default, (null == d.queue || d.queue === !0) && (d.queue = "fx"), d.old = d.complete, d.complete = function () {
            m.isFunction(d.old) && d.old.call(this), d.queue && m.dequeue(this, d.queue)
        }, d
    }, m.fn.extend({
        fadeTo: function (a, b, c, d) {
            return this.filter(U).css("opacity", 0).show().end().animate({opacity: b}, a, c, d)
        }, animate: function (a, b, c, d) {
            var e = m.isEmptyObject(a), f = m.speed(b, c, d), g = function () {
                var b = kc(this, m.extend({}, a), f);
                (e || m._data(this, "finish")) && b.stop(!0)
            };
            return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
        }, stop: function (a, b, c) {
            var d = function (a) {
                var b = a.stop;
                delete a.stop, b(c)
            };
            return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function () {
                var b = !0, e = null != a && a + "queueHooks", f = m.timers, g = m._data(this);
                if (e) {
                    g[e] && g[e].stop && d(g[e])
                } else {
                    for (e in g) {
                        g[e] && g[e].stop && cc.test(e) && d(g[e])
                    }
                }
                for (e = f.length; e--;) {
                    f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1))
                }
                (b || !c) && m.dequeue(this, a)
            })
        }, finish: function (a) {
            return a !== !1 && (a = a || "fx"), this.each(function () {
                var b, c = m._data(this), d = c[a + "queue"], e = c[a + "queueHooks"], f = m.timers,
                    g = d ? d.length : 0;
                for (c.finish = !0, m.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;) {
                    f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1))
                }
                for (b = 0; g > b; b++) {
                    d[b] && d[b].finish && d[b].finish.call(this)
                }
                delete c.finish
            })
        }
    }), m.each(["toggle", "show", "hide"], function (a, b) {
        var c = m.fn[b];
        m.fn[b] = function (a, d, e) {
            return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(gc(b, !0), a, d, e)
        }
    }), m.each({
        slideDown: gc("show"),
        slideUp: gc("hide"),
        slideToggle: gc("toggle"),
        fadeIn: {opacity: "show"},
        fadeOut: {opacity: "hide"},
        fadeToggle: {opacity: "toggle"}
    }, function (a, b) {
        m.fn[a] = function (a, c, d) {
            return this.animate(b, a, c, d)
        }
    }), m.timers = [], m.fx.tick = function () {
        var a, b = m.timers, c = 0;
        for ($b = m.now(); c < b.length; c++) {
            a = b[c], a() || b[c] !== a || b.splice(c--, 1)
        }
        b.length || m.fx.stop(), $b = void 0
    }, m.fx.timer = function (a) {
        m.timers.push(a), a() ? m.fx.start() : m.timers.pop()
    }, m.fx.interval = 13, m.fx.start = function () {
        _b || (_b = setInterval(m.fx.tick, m.fx.interval))
    }, m.fx.stop = function () {
        clearInterval(_b), _b = null
    }, m.fx.speeds = {slow: 600, fast: 200, _default: 400}, m.fn.delay = function (a, b) {
        return a = m.fx ? m.fx.speeds[a] || a : a, b = b || "fx", this.queue(b, function (b, c) {
            var d = setTimeout(b, a);
            c.stop = function () {
                clearTimeout(d)
            }
        })
    }, function () {
        var a, b, c, d, e;
        b = y.createElement("div"), b.setAttribute("className", "t"), b.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", d = b.getElementsByTagName("a")[0], c = y.createElement("select"), e = c.appendChild(y.createElement("option")), a = b.getElementsByTagName("input")[0], d.style.cssText = "top:1px", k.getSetAttribute = "t" !== b.className, k.style = /top/.test(d.getAttribute("style")), k.hrefNormalized = "/a" === d.getAttribute("href"), k.checkOn = !!a.value, k.optSelected = e.selected, k.enctype = !!y.createElement("form").enctype, c.disabled = !0, k.optDisabled = !e.disabled, a = y.createElement("input"), a.setAttribute("value", ""), k.input = "" === a.getAttribute("value"), a.value = "t", a.setAttribute("type", "radio"), k.radioValue = "t" === a.value
    }();
    var lc = /\r/g;
    m.fn.extend({
        val: function (a) {
            var b, c, d, e = this[0];
            if (arguments.length) {
                return d = m.isFunction(a), this.each(function (c) {
                    var e;
                    1 === this.nodeType && (e = d ? a.call(this, c, m(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : m.isArray(e) && (e = m.map(e, function (a) {
                        return null == a ? "" : a + ""
                    })), b = m.valHooks[this.type] || m.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e))
                })
            }
            if (e) {
                return b = m.valHooks[e.type] || m.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(lc, "") : null == c ? "" : c)
            }
        }
    }), m.extend({
        valHooks: {
            option: {
                get: function (a) {
                    var b = m.find.attr(a, "value");
                    return null != b ? b : m.trim(m.text(a))
                }
            }, select: {
                get: function (a) {
                    for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++) {
                        if (c = d[i], !(!c.selected && i !== e || (k.optDisabled ? c.disabled : null !== c.getAttribute("disabled")) || c.parentNode.disabled && m.nodeName(c.parentNode, "optgroup"))) {
                            if (b = m(c).val(), f) {
                                return b
                            }
                            g.push(b)
                        }
                    }
                    return g
                }, set: function (a, b) {
                    var c, d, e = a.options, f = m.makeArray(b), g = e.length;
                    while (g--) {
                        if (d = e[g], m.inArray(m.valHooks.option.get(d), f) >= 0) {
                            try {
                                d.selected = c = !0
                            } catch (h) {
                                d.scrollHeight
                            }
                        } else {
                            d.selected = !1
                        }
                    }
                    return c || (a.selectedIndex = -1), e
                }
            }
        }
    }), m.each(["radio", "checkbox"], function () {
        m.valHooks[this] = {
            set: function (a, b) {
                return m.isArray(b) ? a.checked = m.inArray(m(a).val(), b) >= 0 : void 0
            }
        }, k.checkOn || (m.valHooks[this].get = function (a) {
            return null === a.getAttribute("value") ? "on" : a.value
        })
    });
    var mc, nc, oc = m.expr.attrHandle, pc = /^(?:checked|selected)$/i, qc = k.getSetAttribute, rc = k.input;
    m.fn.extend({
        attr: function (a, b) {
            return V(this, m.attr, a, b, arguments.length > 1)
        }, removeAttr: function (a) {
            return this.each(function () {
                m.removeAttr(this, a)
            })
        }
    }), m.extend({
        attr: function (a, b, c) {
            var d, e, f = a.nodeType;
            if (a && 3 !== f && 8 !== f && 2 !== f) {
                return typeof a.getAttribute === K ? m.prop(a, b, c) : (1 === f && m.isXMLDoc(a) || (b = b.toLowerCase(), d = m.attrHooks[b] || (m.expr.match.bool.test(b) ? nc : mc)), void 0 === c ? d && "get" in d && null !== (e = d.get(a, b)) ? e : (e = m.find.attr(a, b), null == e ? void 0 : e) : null !== c ? d && "set" in d && void 0 !== (e = d.set(a, c, b)) ? e : (a.setAttribute(b, c + ""), c) : void m.removeAttr(a, b))
            }
        }, removeAttr: function (a, b) {
            var c, d, e = 0, f = b && b.match(E);
            if (f && 1 === a.nodeType) {
                while (c = f[e++]) {
                    d = m.propFix[c] || c, m.expr.match.bool.test(c) ? rc && qc || !pc.test(c) ? a[d] = !1 : a[m.camelCase("default-" + c)] = a[d] = !1 : m.attr(a, c, ""), a.removeAttribute(qc ? c : d)
                }
            }
        }, attrHooks: {
            type: {
                set: function (a, b) {
                    if (!k.radioValue && "radio" === b && m.nodeName(a, "input")) {
                        var c = a.value;
                        return a.setAttribute("type", b), c && (a.value = c), b
                    }
                }
            }
        }
    }), nc = {
        set: function (a, b, c) {
            return b === !1 ? m.removeAttr(a, c) : rc && qc || !pc.test(c) ? a.setAttribute(!qc && m.propFix[c] || c, c) : a[m.camelCase("default-" + c)] = a[c] = !0, c
        }
    }, m.each(m.expr.match.bool.source.match(/\w+/g), function (a, b) {
        var c = oc[b] || m.find.attr;
        oc[b] = rc && qc || !pc.test(b) ? function (a, b, d) {
            var e, f;
            return d || (f = oc[b], oc[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, oc[b] = f), e
        } : function (a, b, c) {
            return c ? void 0 : a[m.camelCase("default-" + b)] ? b.toLowerCase() : null
        }
    }), rc && qc || (m.attrHooks.value = {
        set: function (a, b, c) {
            return m.nodeName(a, "input") ? void (a.defaultValue = b) : mc && mc.set(a, b, c)
        }
    }), qc || (mc = {
        set: function (a, b, c) {
            var d = a.getAttributeNode(c);
            return d || a.setAttributeNode(d = a.ownerDocument.createAttribute(c)), d.value = b += "", "value" === c || b === a.getAttribute(c) ? b : void 0
        }
    }, oc.id = oc.name = oc.coords = function (a, b, c) {
        var d;
        return c ? void 0 : (d = a.getAttributeNode(b)) && "" !== d.value ? d.value : null
    }, m.valHooks.button = {
        get: function (a, b) {
            var c = a.getAttributeNode(b);
            return c && c.specified ? c.value : void 0
        }, set: mc.set
    }, m.attrHooks.contenteditable = {
        set: function (a, b, c) {
            mc.set(a, "" === b ? !1 : b, c)
        }
    }, m.each(["width", "height"], function (a, b) {
        m.attrHooks[b] = {
            set: function (a, c) {
                return "" === c ? (a.setAttribute(b, "auto"), c) : void 0
            }
        }
    })), k.style || (m.attrHooks.style = {
        get: function (a) {
            return a.style.cssText || void 0
        }, set: function (a, b) {
            return a.style.cssText = b + ""
        }
    });
    var sc = /^(?:input|select|textarea|button|object)$/i, tc = /^(?:a|area)$/i;
    m.fn.extend({
        prop: function (a, b) {
            return V(this, m.prop, a, b, arguments.length > 1)
        }, removeProp: function (a) {
            return a = m.propFix[a] || a, this.each(function () {
                try {
                    this[a] = void 0, delete this[a]
                } catch (b) {
                }
            })
        }
    }), m.extend({
        propFix: {"for": "htmlFor", "class": "className"}, prop: function (a, b, c) {
            var d, e, f, g = a.nodeType;
            if (a && 3 !== g && 8 !== g && 2 !== g) {
                return f = 1 !== g || !m.isXMLDoc(a), f && (b = m.propFix[b] || b, e = m.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b]
            }
        }, propHooks: {
            tabIndex: {
                get: function (a) {
                    var b = m.find.attr(a, "tabindex");
                    return b ? parseInt(b, 10) : sc.test(a.nodeName) || tc.test(a.nodeName) && a.href ? 0 : -1
                }
            }
        }
    }), k.hrefNormalized || m.each(["href", "src"], function (a, b) {
        m.propHooks[b] = {
            get: function (a) {
                return a.getAttribute(b, 4)
            }
        }
    }), k.optSelected || (m.propHooks.selected = {
        get: function (a) {
            var b = a.parentNode;
            return b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex), null
        }
    }), m.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        m.propFix[this.toLowerCase()] = this
    }), k.enctype || (m.propFix.enctype = "encoding");
    var uc = /[\t\r\n\f]/g;
    m.fn.extend({
        addClass: function (a) {
            var b, c, d, e, f, g, h = 0, i = this.length, j = "string" == typeof a && a;
            if (m.isFunction(a)) {
                return this.each(function (b) {
                    m(this).addClass(a.call(this, b, this.className))
                })
            }
            if (j) {
                for (b = (a || "").match(E) || []; i > h; h++) {
                    if (c = this[h], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(uc, " ") : " ")) {
                        f = 0;
                        while (e = b[f++]) {
                            d.indexOf(" " + e + " ") < 0 && (d += e + " ")
                        }
                        g = m.trim(d), c.className !== g && (c.className = g)
                    }
                }
            }
            return this
        }, removeClass: function (a) {
            var b, c, d, e, f, g, h = 0, i = this.length, j = 0 === arguments.length || "string" == typeof a && a;
            if (m.isFunction(a)) {
                return this.each(function (b) {
                    m(this).removeClass(a.call(this, b, this.className))
                })
            }
            if (j) {
                for (b = (a || "").match(E) || []; i > h; h++) {
                    if (c = this[h], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(uc, " ") : "")) {
                        f = 0;
                        while (e = b[f++]) {
                            while (d.indexOf(" " + e + " ") >= 0) {
                                d = d.replace(" " + e + " ", " ")
                            }
                        }
                        g = a ? m.trim(d) : "", c.className !== g && (c.className = g)
                    }
                }
            }
            return this
        }, toggleClass: function (a, b) {
            var c = typeof a;
            return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : this.each(m.isFunction(a) ? function (c) {
                m(this).toggleClass(a.call(this, c, this.className, b), b)
            } : function () {
                if ("string" === c) {
                    var b, d = 0, e = m(this), f = a.match(E) || [];
                    while (b = f[d++]) {
                        e.hasClass(b) ? e.removeClass(b) : e.addClass(b)
                    }
                } else {
                    (c === K || "boolean" === c) && (this.className && m._data(this, "__className__", this.className), this.className = this.className || a === !1 ? "" : m._data(this, "__className__") || "")
                }
            })
        }, hasClass: function (a) {
            for (var b = " " + a + " ", c = 0, d = this.length; d > c; c++) {
                if (1 === this[c].nodeType && (" " + this[c].className + " ").replace(uc, " ").indexOf(b) >= 0) {
                    return !0
                }
            }
            return !1
        }
    }), m.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (a, b) {
        m.fn[b] = function (a, c) {
            return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
        }
    }), m.fn.extend({
        hover: function (a, b) {
            return this.mouseenter(a).mouseleave(b || a)
        }, bind: function (a, b, c) {
            return this.on(a, null, b, c)
        }, unbind: function (a, b) {
            return this.off(a, null, b)
        }, delegate: function (a, b, c, d) {
            return this.on(b, a, c, d)
        }, undelegate: function (a, b, c) {
            return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
        }
    });
    var vc = m.now(), wc = /\?/,
        xc = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    m.parseJSON = function (b) {
        if (a.JSON && a.JSON.parse) {
            return a.JSON.parse(b + "")
        }
        var c, d = null, e = m.trim(b + "");
        return e && !m.trim(e.replace(xc, function (a, b, e, f) {
            return c && b && (d = 0), 0 === d ? a : (c = e || b, d += !f - !e, "")
        })) ? Function("return " + e)() : m.error("Invalid JSON: " + b)
    }, m.parseXML = function (b) {
        var c, d;
        if (!b || "string" != typeof b) {
            return null
        }
        try {
            a.DOMParser ? (d = new DOMParser, c = d.parseFromString(b, "text/xml")) : (c = new ActiveXObject("Microsoft.XMLDOM"), c.async = "false", c.loadXML(b))
        } catch (e) {
            c = void 0
        }
        return c && c.documentElement && !c.getElementsByTagName("parsererror").length || m.error("Invalid XML: " + b), c
    };
    var yc, zc, Ac = /#.*$/, Bc = /([?&])_=[^&]*/, Cc = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        Dc = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, Ec = /^(?:GET|HEAD)$/, Fc = /^\/\//,
        Gc = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/, Hc = {}, Ic = {}, Jc = "*/".concat("*");
    try {
        zc = location.href
    } catch (Kc) {
        zc = y.createElement("a"), zc.href = "", zc = zc.href
    }
    yc = Gc.exec(zc.toLowerCase()) || [];

    function Lc(a) {
        return function (b, c) {
            "string" != typeof b && (c = b, b = "*");
            var d, e = 0, f = b.toLowerCase().match(E) || [];
            if (m.isFunction(c)) {
                while (d = f[e++]) {
                    "+" === d.charAt(0) ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
                }
            }
        }
    }

    function Mc(a, b, c, d) {
        var e = {}, f = a === Ic;

        function g(h) {
            var i;
            return e[h] = !0, m.each(a[h] || [], function (a, h) {
                var j = h(b, c, d);
                return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j), g(j), !1)
            }), i
        }

        return g(b.dataTypes[0]) || !e["*"] && g("*")
    }

    function Nc(a, b) {
        var c, d, e = m.ajaxSettings.flatOptions || {};
        for (d in b) {
            void 0 !== b[d] && ((e[d] ? a : c || (c = {}))[d] = b[d])
        }
        return c && m.extend(!0, a, c), a
    }

    function Oc(a, b, c) {
        var d, e, f, g, h = a.contents, i = a.dataTypes;
        while ("*" === i[0]) {
            i.shift(), void 0 === e && (e = a.mimeType || b.getResponseHeader("Content-Type"))
        }
        if (e) {
            for (g in h) {
                if (h[g] && h[g].test(e)) {
                    i.unshift(g);
                    break
                }
            }
        }
        if (i[0] in c) {
            f = i[0]
        } else {
            for (g in c) {
                if (!i[0] || a.converters[g + " " + i[0]]) {
                    f = g;
                    break
                }
                d || (d = g)
            }
            f = f || d
        }
        return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0
    }

    function Pc(a, b, c, d) {
        var e, f, g, h, i, j = {}, k = a.dataTypes.slice();
        if (k[1]) {
            for (g in a.converters) {
                j[g.toLowerCase()] = a.converters[g]
            }
        }
        f = k.shift();
        while (f) {
            if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift()) {
                if ("*" === f) {
                    f = i
                } else {
                    if ("*" !== i && i !== f) {
                        if (g = j[i + " " + f] || j["* " + f], !g) {
                            for (e in j) {
                                if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
                                    g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));
                                    break
                                }
                            }
                        }
                        if (g !== !0) {
                            if (g && a["throws"]) {
                                b = g(b)
                            } else {
                                try {
                                    b = g(b)
                                } catch (l) {
                                    return {state: "parsererror", error: g ? l : "No conversion from " + i + " to " + f}
                                }
                            }
                        }
                    }
                }
            }
        }
        return {state: "success", data: b}
    }

    m.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: zc,
            type: "GET",
            isLocal: Dc.test(yc[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Jc,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {xml: /xml/, html: /html/, json: /json/},
            responseFields: {xml: "responseXML", text: "responseText", json: "responseJSON"},
            converters: {"* text": String, "text html": !0, "text json": m.parseJSON, "text xml": m.parseXML},
            flatOptions: {url: !0, context: !0}
        },
        ajaxSetup: function (a, b) {
            return b ? Nc(Nc(a, m.ajaxSettings), b) : Nc(m.ajaxSettings, a)
        },
        ajaxPrefilter: Lc(Hc),
        ajaxTransport: Lc(Ic),
        ajax: function (a, b) {
            "object" == typeof a && (b = a, a = void 0), b = b || {};
            var c, d, e, f, g, h, i, j, k = m.ajaxSetup({}, b), l = k.context || k,
                n = k.context && (l.nodeType || l.jquery) ? m(l) : m.event, o = m.Deferred(),
                p = m.Callbacks("once memory"), q = k.statusCode || {}, r = {}, s = {}, t = 0, u = "canceled", v = {
                    readyState: 0, getResponseHeader: function (a) {
                        var b;
                        if (2 === t) {
                            if (!j) {
                                j = {};
                                while (b = Cc.exec(f)) {
                                    j[b[1].toLowerCase()] = b[2]
                                }
                            }
                            b = j[a.toLowerCase()]
                        }
                        return null == b ? null : b
                    }, getAllResponseHeaders: function () {
                        return 2 === t ? f : null
                    }, setRequestHeader: function (a, b) {
                        var c = a.toLowerCase();
                        return t || (a = s[c] = s[c] || a, r[a] = b), this
                    }, overrideMimeType: function (a) {
                        return t || (k.mimeType = a), this
                    }, statusCode: function (a) {
                        var b;
                        if (a) {
                            if (2 > t) {
                                for (b in a) {
                                    q[b] = [q[b], a[b]]
                                }
                            } else {
                                v.always(a[v.status])
                            }
                        }
                        return this
                    }, abort: function (a) {
                        var b = a || u;
                        return i && i.abort(b), x(0, b), this
                    }
                };
            if (o.promise(v).complete = p.add, v.success = v.done, v.error = v.fail, k.url = ((a || k.url || zc) + "").replace(Ac, "").replace(Fc, yc[1] + "//"), k.type = b.method || b.type || k.method || k.type, k.dataTypes = m.trim(k.dataType || "*").toLowerCase().match(E) || [""], null == k.crossDomain && (c = Gc.exec(k.url.toLowerCase()), k.crossDomain = !(!c || c[1] === yc[1] && c[2] === yc[2] && (c[3] || ("http:" === c[1] ? "80" : "443")) === (yc[3] || ("http:" === yc[1] ? "80" : "443")))), k.data && k.processData && "string" != typeof k.data && (k.data = m.param(k.data, k.traditional)), Mc(Hc, k, b, v), 2 === t) {
                return v
            }
            h = m.event && k.global, h && 0 === m.active++ && m.event.trigger("ajaxStart"), k.type = k.type.toUpperCase(), k.hasContent = !Ec.test(k.type), e = k.url, k.hasContent || (k.data && (e = k.url += (wc.test(e) ? "&" : "?") + k.data, delete k.data), k.cache === !1 && (k.url = Bc.test(e) ? e.replace(Bc, "$1_=" + vc++) : e + (wc.test(e) ? "&" : "?") + "_=" + vc++)), k.ifModified && (m.lastModified[e] && v.setRequestHeader("If-Modified-Since", m.lastModified[e]), m.etag[e] && v.setRequestHeader("If-None-Match", m.etag[e])), (k.data && k.hasContent && k.contentType !== !1 || b.contentType) && v.setRequestHeader("Content-Type", k.contentType), v.setRequestHeader("Accept", k.dataTypes[0] && k.accepts[k.dataTypes[0]] ? k.accepts[k.dataTypes[0]] + ("*" !== k.dataTypes[0] ? ", " + Jc + "; q=0.01" : "") : k.accepts["*"]);
            for (d in k.headers) {
                v.setRequestHeader(d, k.headers[d])
            }
            if (k.beforeSend && (k.beforeSend.call(l, v, k) === !1 || 2 === t)) {
                return v.abort()
            }
            u = "abort";
            for (d in {success: 1, error: 1, complete: 1}) {
                v[d](k[d])
            }
            if (i = Mc(Ic, k, b, v)) {
                v.readyState = 1, h && n.trigger("ajaxSend", [v, k]), k.async && k.timeout > 0 && (g = setTimeout(function () {
                    v.abort("timeout")
                }, k.timeout));
                try {
                    t = 1, i.send(r, x)
                } catch (w) {
                    if (!(2 > t)) {
                        throw w
                    }
                    x(-1, w)
                }
            } else {
                x(-1, "No Transport")
            }

            function x(a, b, c, d) {
                var j, r, s, u, w, x = b;
                2 !== t && (t = 2, g && clearTimeout(g), i = void 0, f = d || "", v.readyState = a > 0 ? 4 : 0, j = a >= 200 && 300 > a || 304 === a, c && (u = Oc(k, v, c)), u = Pc(k, u, v, j), j ? (k.ifModified && (w = v.getResponseHeader("Last-Modified"), w && (m.lastModified[e] = w), w = v.getResponseHeader("etag"), w && (m.etag[e] = w)), 204 === a || "HEAD" === k.type ? x = "nocontent" : 304 === a ? x = "notmodified" : (x = u.state, r = u.data, s = u.error, j = !s)) : (s = x, (a || !x) && (x = "error", 0 > a && (a = 0))), v.status = a, v.statusText = (b || x) + "", j ? o.resolveWith(l, [r, x, v]) : o.rejectWith(l, [v, x, s]), v.statusCode(q), q = void 0, h && n.trigger(j ? "ajaxSuccess" : "ajaxError", [v, k, j ? r : s]), p.fireWith(l, [v, x]), h && (n.trigger("ajaxComplete", [v, k]), --m.active || m.event.trigger("ajaxStop")))
            }

            return v
        },
        getJSON: function (a, b, c) {
            return m.get(a, b, c, "json")
        },
        getScript: function (a, b) {
            return m.get(a, void 0, b, "script")
        }
    }), m.each(["get", "post"], function (a, b) {
        m[b] = function (a, c, d, e) {
            return m.isFunction(c) && (e = e || d, d = c, c = void 0), m.ajax({
                url: a,
                type: b,
                dataType: e,
                data: c,
                success: d
            })
        }
    }), m._evalUrl = function (a) {
        return m.ajax({url: a, type: "GET", dataType: "script", async: !1, global: !1, "throws": !0})
    }, m.fn.extend({
        wrapAll: function (a) {
            if (m.isFunction(a)) {
                return this.each(function (b) {
                    m(this).wrapAll(a.call(this, b))
                })
            }
            if (this[0]) {
                var b = m(a, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && b.insertBefore(this[0]), b.map(function () {
                    var a = this;
                    while (a.firstChild && 1 === a.firstChild.nodeType) {
                        a = a.firstChild
                    }
                    return a
                }).append(this)
            }
            return this
        }, wrapInner: function (a) {
            return this.each(m.isFunction(a) ? function (b) {
                m(this).wrapInner(a.call(this, b))
            } : function () {
                var b = m(this), c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a)
            })
        }, wrap: function (a) {
            var b = m.isFunction(a);
            return this.each(function (c) {
                m(this).wrapAll(b ? a.call(this, c) : a)
            })
        }, unwrap: function () {
            return this.parent().each(function () {
                m.nodeName(this, "body") || m(this).replaceWith(this.childNodes)
            }).end()
        }
    }), m.expr.filters.hidden = function (a) {
        return a.offsetWidth <= 0 && a.offsetHeight <= 0 || !k.reliableHiddenOffsets() && "none" === (a.style && a.style.display || m.css(a, "display"))
    }, m.expr.filters.visible = function (a) {
        return !m.expr.filters.hidden(a)
    };
    var Qc = /%20/g, Rc = /\[\]$/, Sc = /\r?\n/g, Tc = /^(?:submit|button|image|reset|file)$/i,
        Uc = /^(?:input|select|textarea|keygen)/i;

    function Vc(a, b, c, d) {
        var e;
        if (m.isArray(b)) {
            m.each(b, function (b, e) {
                c || Rc.test(a) ? d(a, e) : Vc(a + "[" + ("object" == typeof e ? b : "") + "]", e, c, d)
            })
        } else {
            if (c || "object" !== m.type(b)) {
                d(a, b)
            } else {
                for (e in b) {
                    Vc(a + "[" + e + "]", b[e], c, d)
                }
            }
        }
    }

    m.param = function (a, b) {
        var c, d = [], e = function (a, b) {
            b = m.isFunction(b) ? b() : null == b ? "" : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
        };
        if (void 0 === b && (b = m.ajaxSettings && m.ajaxSettings.traditional), m.isArray(a) || a.jquery && !m.isPlainObject(a)) {
            m.each(a, function () {
                e(this.name, this.value)
            })
        } else {
            for (c in a) {
                Vc(c, a[c], b, e)
            }
        }
        return d.join("&").replace(Qc, "+")
    }, m.fn.extend({
        serialize: function () {
            return m.param(this.serializeArray())
        }, serializeArray: function () {
            return this.map(function () {
                var a = m.prop(this, "elements");
                return a ? m.makeArray(a) : this
            }).filter(function () {
                var a = this.type;
                return this.name && !m(this).is(":disabled") && Uc.test(this.nodeName) && !Tc.test(a) && (this.checked || !W.test(a))
            }).map(function (a, b) {
                var c = m(this).val();
                return null == c ? null : m.isArray(c) ? m.map(c, function (a) {
                    return {name: b.name, value: a.replace(Sc, "\r\n")}
                }) : {name: b.name, value: c.replace(Sc, "\r\n")}
            }).get()
        }
    }), m.ajaxSettings.xhr = void 0 !== a.ActiveXObject ? function () {
        return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && Zc() || $c()
    } : Zc;
    var Wc = 0, Xc = {}, Yc = m.ajaxSettings.xhr();
    a.attachEvent && a.attachEvent("onunload", function () {
        for (var a in Xc) {
            Xc[a](void 0, !0)
        }
    }), k.cors = !!Yc && "withCredentials" in Yc, Yc = k.ajax = !!Yc, Yc && m.ajaxTransport(function (a) {
        if (!a.crossDomain || k.cors) {
            var b;
            return {
                send: function (c, d) {
                    var e, f = a.xhr(), g = ++Wc;
                    if (f.open(a.type, a.url, a.async, a.username, a.password), a.xhrFields) {
                        for (e in a.xhrFields) {
                            f[e] = a.xhrFields[e]
                        }
                    }
                    a.mimeType && f.overrideMimeType && f.overrideMimeType(a.mimeType), a.crossDomain || c["X-Requested-With"] || (c["X-Requested-With"] = "XMLHttpRequest");
                    for (e in c) {
                        void 0 !== c[e] && f.setRequestHeader(e, c[e] + "")
                    }
                    f.send(a.hasContent && a.data || null), b = function (c, e) {
                        var h, i, j;
                        if (b && (e || 4 === f.readyState)) {
                            if (delete Xc[g], b = void 0, f.onreadystatechange = m.noop, e) {
                                4 !== f.readyState && f.abort()
                            } else {
                                j = {}, h = f.status, "string" == typeof f.responseText && (j.text = f.responseText);
                                try {
                                    i = f.statusText
                                } catch (k) {
                                    i = ""
                                }
                                h || !a.isLocal || a.crossDomain ? 1223 === h && (h = 204) : h = j.text ? 200 : 404
                            }
                        }
                        j && d(h, i, j, f.getAllResponseHeaders())
                    }, a.async ? 4 === f.readyState ? setTimeout(b) : f.onreadystatechange = Xc[g] = b : b()
                }, abort: function () {
                    b && b(void 0, !0)
                }
            }
        }
    });

    function Zc() {
        try {
            return new a.XMLHttpRequest
        } catch (b) {
        }
    }

    function $c() {
        try {
            return new a.ActiveXObject("Microsoft.XMLHTTP")
        } catch (b) {
        }
    }

    m.ajaxSetup({
        accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
        contents: {script: /(?:java|ecma)script/},
        converters: {
            "text script": function (a) {
                return m.globalEval(a), a
            }
        }
    }), m.ajaxPrefilter("script", function (a) {
        void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET", a.global = !1)
    }), m.ajaxTransport("script", function (a) {
        if (a.crossDomain) {
            var b, c = y.head || m("head")[0] || y.documentElement;
            return {
                send: function (d, e) {
                    b = y.createElement("script"), b.async = !0, a.scriptCharset && (b.charset = a.scriptCharset), b.src = a.url, b.onload = b.onreadystatechange = function (a, c) {
                        (c || !b.readyState || /loaded|complete/.test(b.readyState)) && (b.onload = b.onreadystatechange = null, b.parentNode && b.parentNode.removeChild(b), b = null, c || e(200, "success"))
                    }, c.insertBefore(b, c.firstChild)
                }, abort: function () {
                    b && b.onload(void 0, !0)
                }
            }
        }
    });
    var _c = [], ad = /(=)\?(?=&|$)|\?\?/;
    m.ajaxSetup({
        jsonp: "callback", jsonpCallback: function () {
            var a = _c.pop() || m.expando + "_" + vc++;
            return this[a] = !0, a
        }
    }), m.ajaxPrefilter("json jsonp", function (b, c, d) {
        var e, f, g,
            h = b.jsonp !== !1 && (ad.test(b.url) ? "url" : "string" == typeof b.data && !(b.contentType || "").indexOf("application/x-www-form-urlencoded") && ad.test(b.data) && "data");
        return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = m.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(ad, "$1" + e) : b.jsonp !== !1 && (b.url += (wc.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function () {
            return g || m.error(e + " was not called"), g[0]
        }, b.dataTypes[0] = "json", f = a[e], a[e] = function () {
            g = arguments
        }, d.always(function () {
            a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, _c.push(e)), g && m.isFunction(f) && f(g[0]), g = f = void 0
        }), "script") : void 0
    }), m.parseHTML = function (a, b, c) {
        if (!a || "string" != typeof a) {
            return null
        }
        "boolean" == typeof b && (c = b, b = !1), b = b || y;
        var d = u.exec(a), e = !c && [];
        return d ? [b.createElement(d[1])] : (d = m.buildFragment([a], b, e), e && e.length && m(e).remove(), m.merge([], d.childNodes))
    };
    var bd = m.fn.load;
    m.fn.load = function (a, b, c) {
        if ("string" != typeof a && bd) {
            return bd.apply(this, arguments)
        }
        var d, e, f, g = this, h = a.indexOf(" ");
        return h >= 0 && (d = m.trim(a.slice(h, a.length)), a = a.slice(0, h)), m.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b && (f = "POST"), g.length > 0 && m.ajax({
            url: a,
            type: f,
            dataType: "html",
            data: b
        }).done(function (a) {
            e = arguments, g.html(d ? m("<div>").append(m.parseHTML(a)).find(d) : a)
        }).complete(c && function (a, b) {
            g.each(c, e || [a.responseText, b, a])
        }), this
    }, m.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (a, b) {
        m.fn[b] = function (a) {
            return this.on(b, a)
        }
    }), m.expr.filters.animated = function (a) {
        return m.grep(m.timers, function (b) {
            return a === b.elem
        }).length
    };
    var cd = a.document.documentElement;

    function dd(a) {
        return m.isWindow(a) ? a : 9 === a.nodeType ? a.defaultView || a.parentWindow : !1
    }

    m.offset = {
        setOffset: function (a, b, c) {
            var d, e, f, g, h, i, j, k = m.css(a, "position"), l = m(a), n = {};
            "static" === k && (a.style.position = "relative"), h = l.offset(), f = m.css(a, "top"), i = m.css(a, "left"), j = ("absolute" === k || "fixed" === k) && m.inArray("auto", [f, i]) > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), m.isFunction(b) && (b = b.call(a, c, h)), null != b.top && (n.top = b.top - h.top + g), null != b.left && (n.left = b.left - h.left + e), "using" in b ? b.using.call(a, n) : l.css(n)
        }
    }, m.fn.extend({
        offset: function (a) {
            if (arguments.length) {
                return void 0 === a ? this : this.each(function (b) {
                    m.offset.setOffset(this, a, b)
                })
            }
            var b, c, d = {top: 0, left: 0}, e = this[0], f = e && e.ownerDocument;
            if (f) {
                return b = f.documentElement, m.contains(b, e) ? (typeof e.getBoundingClientRect !== K && (d = e.getBoundingClientRect()), c = dd(f), {
                    top: d.top + (c.pageYOffset || b.scrollTop) - (b.clientTop || 0),
                    left: d.left + (c.pageXOffset || b.scrollLeft) - (b.clientLeft || 0)
                }) : d
            }
        }, position: function () {
            if (this[0]) {
                var a, b, c = {top: 0, left: 0}, d = this[0];
                return "fixed" === m.css(d, "position") ? b = d.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), m.nodeName(a[0], "html") || (c = a.offset()), c.top += m.css(a[0], "borderTopWidth", !0), c.left += m.css(a[0], "borderLeftWidth", !0)), {
                    top: b.top - c.top - m.css(d, "marginTop", !0),
                    left: b.left - c.left - m.css(d, "marginLeft", !0)
                }
            }
        }, offsetParent: function () {
            return this.map(function () {
                var a = this.offsetParent || cd;
                while (a && !m.nodeName(a, "html") && "static" === m.css(a, "position")) {
                    a = a.offsetParent
                }
                return a || cd
            })
        }
    }), m.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (a, b) {
        var c = /Y/.test(b);
        m.fn[a] = function (d) {
            return V(this, function (a, d, e) {
                var f = dd(a);
                return void 0 === e ? f ? b in f ? f[b] : f.document.documentElement[d] : a[d] : void (f ? f.scrollTo(c ? m(f).scrollLeft() : e, c ? e : m(f).scrollTop()) : a[d] = e)
            }, a, d, arguments.length, null)
        }
    }), m.each(["top", "left"], function (a, b) {
        m.cssHooks[b] = Lb(k.pixelPosition, function (a, c) {
            return c ? (c = Jb(a, b), Hb.test(c) ? m(a).position()[b] + "px" : c) : void 0
        })
    }), m.each({Height: "height", Width: "width"}, function (a, b) {
        m.each({padding: "inner" + a, content: b, "": "outer" + a}, function (c, d) {
            m.fn[d] = function (d, e) {
                var f = arguments.length && (c || "boolean" != typeof d),
                    g = c || (d === !0 || e === !0 ? "margin" : "border");
                return V(this, function (b, c, d) {
                    var e;
                    return m.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? m.css(b, c, g) : m.style(b, c, d, g)
                }, b, f ? d : void 0, f, null)
            }
        })
    }), m.fn.size = function () {
        return this.length
    }, m.fn.andSelf = m.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function () {
        return m
    });
    var ed = a.jQuery, fd = a.$;
    return m.noConflict = function (b) {
        return a.$ === m && (a.$ = fd), b && a.jQuery === m && (a.jQuery = ed), m
    }, typeof b === K && (a.jQuery = a.$ = m), m
});
(function (b) {
    if (typeof define === "function" && define.amd && define.amd.jQuery) {
        define(["jquery"], b)
    } else {
        b(jQuery)
    }
}(function (ac) {
    var S = "left", T = "right", ad = "up", G = "down", af = "in", E = "out", V = "none", L = "auto", W = "swipe",
        K = "pinch", R = "tap", Y = "doubletap", ag = "longtap", F = "hold", M = "horizontal", J = "vertical",
        Z = "all", O = 10, ab = "start", X = "move", aa = "end", Q = "cancel", ah = "ontouchstart" in window,
        I = window.navigator.msPointerEnabled && !window.navigator.pointerEnabled,
        ae = window.navigator.pointerEnabled || window.navigator.msPointerEnabled, P = "TouchSwipe";
    var U = {
        fingers: 1,
        threshold: 75,
        cancelThreshold: null,
        pinchThreshold: 20,
        maxTimeThreshold: null,
        fingerReleaseThreshold: 250,
        longTapThreshold: 500,
        doubleTapThreshold: 200,
        swipe: null,
        swipeLeft: null,
        swipeRight: null,
        swipeUp: null,
        swipeDown: null,
        swipeStatus: null,
        pinchIn: null,
        pinchOut: null,
        pinchStatus: null,
        click: null,
        tap: null,
        doubleTap: null,
        longTap: null,
        hold: null,
        triggerOnTouchEnd: true,
        triggerOnTouchLeave: false,
        allowPageScroll: "auto",
        fallbackToMouseEvents: true,
        excludedElements: "label, button, input, select, textarea, a, .noSwipe"
    };
    ac.fn.swipe = function (a) {
        var b = ac(this), c = b.data(P);
        if (c && typeof a === "string") {
            if (c[a]) {
                return c[a].apply(this, Array.prototype.slice.call(arguments, 1))
            } else {
                ac.error("Method " + a + " does not exist on jQuery.swipe")
            }
        } else {
            if (!c && (typeof a === "object" || !a)) {
                return H.apply(this, arguments)
            }
        }
        return b
    };
    ac.fn.swipe.defaults = U;
    ac.fn.swipe.phases = {PHASE_START: ab, PHASE_MOVE: X, PHASE_END: aa, PHASE_CANCEL: Q};
    ac.fn.swipe.directions = {LEFT: S, RIGHT: T, UP: ad, DOWN: G, IN: af, OUT: E};
    ac.fn.swipe.pageScroll = {NONE: V, HORIZONTAL: M, VERTICAL: J, AUTO: L};
    ac.fn.swipe.fingers = {ONE: 1, TWO: 2, THREE: 3, ALL: Z};

    function H(a) {
        if (a && (a.allowPageScroll === undefined && (a.swipe !== undefined || a.swipeStatus !== undefined))) {
            a.allowPageScroll = V
        }
        if (a.click !== undefined && a.tap === undefined) {
            a.tap = a.click
        }
        if (!a) {
            a = {}
        }
        a = ac.extend({}, ac.fn.swipe.defaults, a);
        return this.each(function () {
            var b = ac(this);
            var c = b.data(P);
            if (!c) {
                c = new N(this, a);
                b.data(P, c)
            }
        })
    }

    function N(bT, D) {
        var v = (ah || ae || !D.fallbackToMouseEvents),
            t = v ? (ae ? (I ? "MSPointerDown" : "pointerdown") : "touchstart") : "mousedown",
            x = v ? (ae ? (I ? "MSPointerMove" : "pointermove") : "touchmove") : "mousemove",
            h = v ? (ae ? (I ? "MSPointerUp" : "pointerup") : "touchend") : "mouseup", j = v ? null : "mouseleave",
            bK = (ae ? (I ? "MSPointerCancel" : "pointercancel") : "touchcancel");
        var bh = 0, by = null, bm = 0, bW = 0, bo = 0, y = 1, ay = 0, bE = 0, q = null;
        var bw = ac(bT);
        var b = "start";
        var f = 0;
        var bx = null;
        var i = 0, bV = 0, bS = 0, bk = 0, p = 0;
        var br = null, bi = null;
        try {
            bw.bind(t, bA);
            bw.bind(bK, bO)
        } catch (bd) {
            ac.error("events not supported " + t + "," + bK + " on jQuery.swipe")
        }
        this.enable = function () {
            bw.bind(t, bA);
            bw.bind(bK, bO);
            return bw
        };
        this.disable = function () {
            bD();
            return bw
        };
        this.destroy = function () {
            bD();
            bw.data(P, null);
            return bw
        };
        this.option = function (ai, aj) {
            if (D[ai] !== undefined) {
                if (aj === undefined) {
                    return D[ai]
                } else {
                    D[ai] = aj
                }
            } else {
                ac.error("Option " + ai + " does not exist on jQuery.swipe.options")
            }
            return null
        };

        function bA(aj) {
            if (bM()) {
                return
            }
            if (ac(aj.target).closest(D.excludedElements, bw).length > 0) {
                return
            }
            var ai = aj.originalEvent ? aj.originalEvent : aj;
            var ak, al = ah ? ai.touches[0] : ai;
            b = ab;
            if (ah) {
                f = ai.touches.length
            } else {
                aj.preventDefault()
            }
            bh = 0;
            by = null;
            bE = null;
            bm = 0;
            bW = 0;
            bo = 0;
            y = 1;
            ay = 0;
            bx = be();
            q = bn();
            k();
            if (!ah || (f === D.fingers || D.fingers === Z) || bq()) {
                bf(0, al);
                i = aw();
                if (f == 2) {
                    bf(1, ai.touches[1]);
                    bW = bo = av(bx[0].start, bx[1].start)
                }
                if (D.swipeStatus || D.pinchStatus) {
                    ak = o(ai, b)
                }
            } else {
                ak = false
            }
            if (ak === false) {
                b = Q;
                o(ai, b);
                return ak
            } else {
                if (D.hold) {
                    bi = setTimeout(ac.proxy(function () {
                        bw.trigger("hold", [ai.target]);
                        if (D.hold) {
                            ak = D.hold.call(bw, ai, ai.target)
                        }
                    }, this), D.longTapThreshold)
                }
                a0(true)
            }
            return null
        }

        function bU(al) {
            var ai = al.originalEvent ? al.originalEvent : al;
            if (b === aa || b === Q || bb()) {
                return
            }
            var am, an = ah ? ai.touches[0] : ai;
            var ak = bG(an);
            bV = aw();
            if (ah) {
                f = ai.touches.length
            }
            if (D.hold) {
                clearTimeout(bi)
            }
            b = X;
            if (f == 2) {
                if (bW == 0) {
                    bf(1, ai.touches[1]);
                    bW = bo = av(bx[0].start, bx[1].start)
                } else {
                    bG(ai.touches[1]);
                    bo = av(bx[0].end, bx[1].end);
                    bE = ax(bx[0].end, bx[1].end)
                }
                y = bQ(bW, bo);
                ay = Math.abs(bW - bo)
            }
            if ((f === D.fingers || D.fingers === Z) || !ah || bq()) {
                by = bC(ak.start, ak.end);
                bc(al, by);
                bh = bv(ak.start, ak.end);
                bm = bB();
                bF(by, bh);
                if (D.swipeStatus || D.pinchStatus) {
                    am = o(ai, b)
                }
                if (!D.triggerOnTouchEnd || D.triggerOnTouchLeave) {
                    var ao = true;
                    if (D.triggerOnTouchLeave) {
                        var aj = bp(this);
                        ao = C(ak.end, aj)
                    }
                    if (!D.triggerOnTouchEnd && ao) {
                        b = bL(X)
                    } else {
                        if (D.triggerOnTouchLeave && !ao) {
                            b = bL(aa)
                        }
                    }
                    if (b == Q || b == aa) {
                        o(ai, b)
                    }
                }
            } else {
                b = Q;
                o(ai, b)
            }
            if (am === false) {
                b = Q;
                o(ai, b)
            }
        }

        function r(aj) {
            var ai = aj.originalEvent;
            if (ah) {
                if (ai.touches.length > 0) {
                    B();
                    return true
                }
            }
            if (bb()) {
                f = bk
            }
            bV = aw();
            bm = bB();
            if (n() || !ba()) {
                b = Q;
                o(ai, b)
            } else {
                if (D.triggerOnTouchEnd || (D.triggerOnTouchEnd == false && b === X)) {
                    aj.preventDefault();
                    b = aa;
                    o(ai, b)
                } else {
                    if (!D.triggerOnTouchEnd && bR()) {
                        b = aa;
                        bI(ai, b, R)
                    } else {
                        if (b === X) {
                            b = Q;
                            o(ai, b)
                        }
                    }
                }
            }
            a0(false);
            return null
        }

        function bO() {
            f = 0;
            bV = 0;
            i = 0;
            bW = 0;
            bo = 0;
            y = 1;
            k();
            a0(false)
        }

        function s(aj) {
            var ai = aj.originalEvent;
            if (D.triggerOnTouchLeave) {
                b = bL(aa);
                o(ai, b)
            }
        }

        function bD() {
            bw.unbind(t, bA);
            bw.unbind(bK, bO);
            bw.unbind(x, bU);
            bw.unbind(h, r);
            if (j) {
                bw.unbind(j, s)
            }
            a0(false)
        }

        function bL(ai) {
            var aj = ai;
            var ak = bN();
            var al = ba();
            var am = n();
            if (!ak || am) {
                aj = Q
            } else {
                if (al && ai == X && (!D.triggerOnTouchEnd || D.triggerOnTouchLeave)) {
                    aj = aa
                } else {
                    if (!al && ai == aa && D.triggerOnTouchLeave) {
                        aj = Q
                    }
                }
            }
            return aj
        }

        function o(ai, ak) {
            var aj = undefined;
            if (u() || g()) {
                aj = bI(ai, ak, W)
            } else {
                if ((m() || bq()) && aj !== false) {
                    aj = bI(ai, ak, K)
                }
            }
            if (bH() && aj !== false) {
                aj = bI(ai, ak, Y)
            } else {
                if (az() && aj !== false) {
                    aj = bI(ai, ak, ag)
                } else {
                    if (bg() && aj !== false) {
                        aj = bI(ai, ak, R)
                    }
                }
            }
            if (ak === Q) {
                bO(ai)
            }
            if (ak === aa) {
                if (ah) {
                    if (ai.touches.length == 0) {
                        bO(ai)
                    }
                } else {
                    bO(ai)
                }
            }
            return aj
        }

        function bI(ai, al, aj) {
            var ak = undefined;
            if (aj == W) {
                bw.trigger("swipeStatus", [al, by || null, bh || 0, bm || 0, f, bx]);
                if (D.swipeStatus) {
                    ak = D.swipeStatus.call(bw, ai, al, by || null, bh || 0, bm || 0, f, bx);
                    if (ak === false) {
                        return false
                    }
                }
                if (al == aa && bs()) {
                    bw.trigger("swipe", [by, bh, bm, f, bx]);
                    if (D.swipe) {
                        ak = D.swipe.call(bw, ai, by, bh, bm, f, bx);
                        if (ak === false) {
                            return false
                        }
                    }
                    switch (by) {
                        case S:
                            bw.trigger("swipeLeft", [by, bh, bm, f, bx]);
                            if (D.swipeLeft) {
                                ak = D.swipeLeft.call(bw, ai, by, bh, bm, f, bx)
                            }
                            break;
                        case T:
                            bw.trigger("swipeRight", [by, bh, bm, f, bx]);
                            if (D.swipeRight) {
                                ak = D.swipeRight.call(bw, ai, by, bh, bm, f, bx)
                            }
                            break;
                        case ad:
                            bw.trigger("swipeUp", [by, bh, bm, f, bx]);
                            if (D.swipeUp) {
                                ak = D.swipeUp.call(bw, ai, by, bh, bm, f, bx)
                            }
                            break;
                        case G:
                            bw.trigger("swipeDown", [by, bh, bm, f, bx]);
                            if (D.swipeDown) {
                                ak = D.swipeDown.call(bw, ai, by, bh, bm, f, bx)
                            }
                            break
                    }
                }
            }
            if (aj == K) {
                bw.trigger("pinchStatus", [al, bE || null, ay || 0, bm || 0, f, y, bx]);
                if (D.pinchStatus) {
                    ak = D.pinchStatus.call(bw, ai, al, bE || null, ay || 0, bm || 0, f, y, bx);
                    if (ak === false) {
                        return false
                    }
                }
                if (al == aa && bP()) {
                    switch (bE) {
                        case af:
                            bw.trigger("pinchIn", [bE || null, ay || 0, bm || 0, f, y, bx]);
                            if (D.pinchIn) {
                                ak = D.pinchIn.call(bw, ai, bE || null, ay || 0, bm || 0, f, y, bx)
                            }
                            break;
                        case E:
                            bw.trigger("pinchOut", [bE || null, ay || 0, bm || 0, f, y, bx]);
                            if (D.pinchOut) {
                                ak = D.pinchOut.call(bw, ai, bE || null, ay || 0, bm || 0, f, y, bx)
                            }
                            break
                    }
                }
            }
            if (aj == R) {
                if (al === Q || al === aa) {
                    clearTimeout(br);
                    clearTimeout(bi);
                    if (c() && !w()) {
                        p = aw();
                        br = setTimeout(ac.proxy(function () {
                            p = null;
                            bw.trigger("tap", [ai.target]);
                            if (D.tap) {
                                ak = D.tap.call(bw, ai, ai.target)
                            }
                        }, this), D.doubleTapThreshold)
                    } else {
                        p = null;
                        bw.trigger("tap", [ai.target]);
                        if (D.tap) {
                            ak = D.tap.call(bw, ai, ai.target)
                        }
                    }
                }
            } else {
                if (aj == Y) {
                    if (al === Q || al === aa) {
                        clearTimeout(br);
                        p = null;
                        bw.trigger("doubletap", [ai.target]);
                        if (D.doubleTap) {
                            ak = D.doubleTap.call(bw, ai, ai.target)
                        }
                    }
                } else {
                    if (aj == ag) {
                        if (al === Q || al === aa) {
                            clearTimeout(br);
                            p = null;
                            bw.trigger("longtap", [ai.target]);
                            if (D.longTap) {
                                ak = D.longTap.call(bw, ai, ai.target)
                            }
                        }
                    }
                }
            }
            return ak
        }

        function ba() {
            var ai = true;
            if (D.threshold !== null) {
                ai = bh >= D.threshold
            }
            return ai
        }

        function n() {
            var ai = false;
            if (D.cancelThreshold !== null && by !== null) {
                ai = (bu(by) - bh) >= D.cancelThreshold
            }
            return ai
        }

        function bj() {
            if (D.pinchThreshold !== null) {
                return ay >= D.pinchThreshold
            }
            return true
        }

        function bN() {
            var ai;
            if (D.maxTimeThreshold) {
                if (bm >= D.maxTimeThreshold) {
                    ai = false
                } else {
                    ai = true
                }
            } else {
                ai = true
            }
            return ai
        }

        function bc(ak, aj) {
            if (D.allowPageScroll === V || bq()) {
                ak.preventDefault()
            } else {
                var ai = D.allowPageScroll === L;
                switch (aj) {
                    case S:
                        if ((D.swipeLeft && ai) || (!ai && D.allowPageScroll != M)) {
                            ak.preventDefault()
                        }
                        break;
                    case T:
                        if ((D.swipeRight && ai) || (!ai && D.allowPageScroll != M)) {
                            ak.preventDefault()
                        }
                        break;
                    case ad:
                        if ((D.swipeUp && ai) || (!ai && D.allowPageScroll != J)) {
                            ak.preventDefault()
                        }
                        break;
                    case G:
                        if ((D.swipeDown && ai) || (!ai && D.allowPageScroll != J)) {
                            ak.preventDefault()
                        }
                        break
                }
            }
        }

        function bP() {
            var aj = bz();
            var ak = d();
            var ai = bj();
            return aj && ak && ai
        }

        function bq() {
            return !!(D.pinchStatus || D.pinchIn || D.pinchOut)
        }

        function m() {
            return !!(bP() && bq())
        }

        function bs() {
            var ak = bN();
            var ai = ba();
            var al = bz();
            var an = d();
            var am = n();
            var aj = !am && an && al && ai && ak;
            return aj
        }

        function g() {
            return !!(D.swipe || D.swipeStatus || D.swipeLeft || D.swipeRight || D.swipeUp || D.swipeDown)
        }

        function u() {
            return !!(bs() && g())
        }

        function bz() {
            return ((f === D.fingers || D.fingers === Z) || !ah)
        }

        function d() {
            return bx[0].end.x !== 0
        }

        function bR() {
            return !!(D.tap)
        }

        function c() {
            return !!(D.doubleTap)
        }

        function bt() {
            return !!(D.longTap)
        }

        function l() {
            if (p == null) {
                return false
            }
            var ai = aw();
            return (c() && ((ai - p) <= D.doubleTapThreshold))
        }

        function w() {
            return l()
        }

        function z() {
            return ((f === 1 || !ah) && (isNaN(bh) || bh < D.threshold))
        }

        function a() {
            return ((bm > D.longTapThreshold) && (bh < O))
        }

        function bg() {
            return !!(z() && bR())
        }

        function bH() {
            return !!(l() && c())
        }

        function az() {
            return !!(a() && bt())
        }

        function B() {
            bS = aw();
            bk = event.touches.length + 1
        }

        function k() {
            bS = 0;
            bk = 0
        }

        function bb() {
            var aj = false;
            if (bS) {
                var ai = aw() - bS;
                if (ai <= D.fingerReleaseThreshold) {
                    aj = true
                }
            }
            return aj
        }

        function bM() {
            return !!(bw.data(P + "_intouch") === true)
        }

        function a0(ai) {
            if (ai === true) {
                bw.bind(x, bU);
                bw.bind(h, r);
                if (j) {
                    bw.bind(j, s)
                }
            } else {
                bw.unbind(x, bU, false);
                bw.unbind(h, r, false);
                if (j) {
                    bw.unbind(j, s, false)
                }
            }
            bw.data(P + "_intouch", ai === true)
        }

        function bf(aj, ak) {
            var ai = ak.identifier !== undefined ? ak.identifier : 0;
            bx[aj].identifier = ai;
            bx[aj].start.x = bx[aj].end.x = ak.pageX || ak.clientX;
            bx[aj].start.y = bx[aj].end.y = ak.pageY || ak.clientY;
            return bx[aj]
        }

        function bG(ak) {
            var ai = ak.identifier !== undefined ? ak.identifier : 0;
            var aj = bl(ai);
            aj.end.x = ak.pageX || ak.clientX;
            aj.end.y = ak.pageY || ak.clientY;
            return aj
        }

        function bl(ai) {
            for (var aj = 0; aj < bx.length; aj++) {
                if (bx[aj].identifier == ai) {
                    return bx[aj]
                }
            }
        }

        function be() {
            var aj = [];
            for (var ai = 0; ai <= 5; ai++) {
                aj.push({start: {x: 0, y: 0}, end: {x: 0, y: 0}, identifier: 0})
            }
            return aj
        }

        function bF(aj, ai) {
            ai = Math.max(ai, bu(aj));
            q[aj].distance = ai
        }

        function bu(ai) {
            if (q[ai]) {
                return q[ai].distance
            }
            return undefined
        }

        function bn() {
            var ai = {};
            ai[S] = A(S);
            ai[T] = A(T);
            ai[ad] = A(ad);
            ai[G] = A(G);
            return ai
        }

        function A(ai) {
            return {direction: ai, distance: 0}
        }

        function bB() {
            return bV - i
        }

        function av(ai, aj) {
            var ak = Math.abs(ai.x - aj.x);
            var al = Math.abs(ai.y - aj.y);
            return Math.round(Math.sqrt(ak * ak + al * al))
        }

        function bQ(ak, aj) {
            var ai = (aj / ak) * 1;
            return ai.toFixed(2)
        }

        function ax() {
            if (y < 1) {
                return E
            } else {
                return af
            }
        }

        function bv(ai, aj) {
            return Math.round(Math.sqrt(Math.pow(aj.x - ai.x, 2) + Math.pow(aj.y - ai.y, 2)))
        }

        function bJ(ak, am) {
            var an = ak.x - am.x;
            var ai = am.y - ak.y;
            var al = Math.atan2(ai, an);
            var aj = Math.round(al * 180 / Math.PI);
            if (aj < 0) {
                aj = 360 - Math.abs(aj)
            }
            return aj
        }

        function bC(aj, ak) {
            var ai = bJ(aj, ak);
            if ((ai <= 45) && (ai >= 0)) {
                return S
            } else {
                if ((ai <= 360) && (ai >= 315)) {
                    return S
                } else {
                    if ((ai >= 135) && (ai <= 225)) {
                        return T
                    } else {
                        if ((ai > 45) && (ai < 135)) {
                            return G
                        } else {
                            return ad
                        }
                    }
                }
            }
        }

        function aw() {
            var ai = new Date();
            return ai.getTime()
        }

        function bp(ak) {
            ak = ac(ak);
            var ai = ak.offset();
            var aj = {left: ai.left, right: ai.left + ak.outerWidth(), top: ai.top, bottom: ai.top + ak.outerHeight()};
            return aj
        }

        function C(aj, ai) {
            return (aj.x > ai.left && aj.x < ai.right && aj.y > ai.top && aj.y < ai.bottom)
        }
    }
}));
if (typeof(console) === "undefined") {
    var console = {};
    console.log = console.error = console.info = console.debug = console.warn = console.trace = console.dir = console.dirxml = console.group = console.groupEnd = console.time = console.timeEnd = console.assert = console.profile = console.groupCollapsed = function () {
    }
}
if (window.tplogs == true) {
    try {
        console.groupCollapsed("ThemePunch GreenSocks Logs")
    } catch (e) {
    }
}
var oldgs = window.GreenSockGlobals;
oldgs_queue = window._gsQueue;
var punchgs = window.GreenSockGlobals = {};
if (window.tplogs == true) {
    try {
        console.info("Build GreenSock SandBox for ThemePunch Plugins");
        console.info("GreenSock TweenLite Engine Initalised by ThemePunch Plugin")
    } catch (e) {
    }
    /*!
 * VERSION: 1.14.2
 * DATE: 2014-10-28
 * UPDATES AND DOCS AT: http://www.greensock.com
 *
 * @license Copyright (c) 2008-2014, GreenSock. All rights reserved.
 * This work is subject to the terms at http://www.greensock.com/terms_of_use.html or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 *
 * @author: Jack Doyle, jack@greensock.com
 */
}
(function (aA, aP) {
    var aL = aA.GreenSockGlobals = aA.GreenSockGlobals || aA;
    if (!aL.TweenLite) {
        var aB, aC, aG, aT, aF, aI = function (a) {
            var d, b = a.split("."), c = aL;
            for (d = 0; b.length > d; d++) {
                c[b[d]] = c = c[b[d]] || {}
            }
            return c
        }, aM = aI("com.greensock"), aU = 1e-10, az = function (b) {
            var d, a = [], c = b.length;
            for (d = 0; d !== c; a.push(b[d++])) {
            }
            return a
        }, aH = function () {
        }, aO = function () {
            var a = Object.prototype.toString, b = a.call([]);
            return function (c) {
                return null != c && (c instanceof Array || "object" == typeof c && !!c.push && a.call(c) === b)
            }
        }(), aR = {}, aE = function (c, d, g, b) {
            this.sc = aR[c] ? aR[c].sc : [], aR[c] = this, this.gsClass = null, this.func = g;
            var f = [];
            this.check = function (l) {
                for (var k, j, a, n, o = d.length, i = o; --o > -1;) {
                    (k = aR[d[o]] || new aE(d[o], [])).gsClass ? (f[o] = k.gsClass, i--) : l && k.sc.push(this)
                }
                if (0 === i && g) {
                    for (j = ("com.greensock." + c).split("."), a = j.pop(), n = aI(j.join("."))[a] = this.gsClass = g.apply(g, f), b && (aL[a] = n, "function" == typeof define && define.amd ? define((aA.GreenSockAMDPath ? aA.GreenSockAMDPath + "/" : "") + c.split(".").pop(), [], function () {
                        return n
                    }) : c === aP && "undefined" != typeof module && module.exports && (module.exports = n)), o = 0; this.sc.length > o; o++) {
                        this.sc[o].check()
                    }
                }
            }, this.check(!0)
        }, aQ = aA._gsDefine = function (b, d, a, c) {
            return new aE(b, d, a, c)
        }, ay = aM._class = function (b, c, a) {
            return c = c || function () {
            }, aQ(b, [], function () {
                return c
            }, a), c
        };
        aQ.globals = aL;
        var aN = [0, 0, 1, 1], Y = [], av = ay("easing.Ease", function (b, d, a, c) {
            this._func = b, this._type = a || 0, this._power = c || 0, this._params = d ? aN.concat(d) : aN
        }, !0), ax = av.map = {}, ac = av.register = function (p, h, g, q) {
            for (var b, d, j, c, f = h.split(","), k = f.length, m = (g || "easeIn,easeOut,easeInOut").split(","); --k > -1;) {
                for (d = f[k], b = q ? ay("easing." + d, null, !0) : aM.easing[d] || {}, j = m.length; --j > -1;) {
                    c = m[j], ax[d + "." + c] = ax[c + d] = b[c] = p.getRatio ? p : p[c] || new p
                }
            }
        };
        for (aG = av.prototype, aG._calcEnd = !1, aG.getRatio = function (b) {
            if (this._func) {
                return this._params[0] = b, this._func.apply(null, this._params)
            }
            var d = this._type, a = this._power, c = 1 === d ? 1 - b : 2 === d ? b : 0.5 > b ? 2 * b : 2 * (1 - b);
            return 1 === a ? c *= c : 2 === a ? c *= c * c : 3 === a ? c *= c * c * c : 4 === a && (c *= c * c * c * c), 1 === d ? 1 - c : 2 === d ? c : 0.5 > b ? c / 2 : 1 - c / 2
        }, aB = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"], aC = aB.length; --aC > -1;) {
            aG = aB[aC] + ",Power" + aC, ac(new av(null, null, 1, aC), aG, "easeOut", !0), ac(new av(null, null, 2, aC), aG, "easeIn" + (0 === aC ? ",easeNone" : "")), ac(new av(null, null, 3, aC), aG, "easeInOut")
        }
        ax.linear = aM.easing.Linear.easeIn, ax.swing = aM.easing.Quad.easeInOut;
        var aS = ay("events.EventDispatcher", function (a) {
            this._listeners = {}, this._eventTarget = a || this
        });
        aG = aS.prototype, aG.addEventListener = function (k, g, d, m, a) {
            a = a || 0;
            var b, c, f = this._listeners[k], j = 0;
            for (null == f && (this._listeners[k] = f = []), c = f.length; --c > -1;) {
                b = f[c], b.c === g && b.s === d ? f.splice(c, 1) : 0 === j && a > b.pr && (j = c + 1)
            }
            f.splice(j, 0, {c: g, s: d, up: m, pr: a}), this !== aT || aF || aT.wake()
        }, aG.removeEventListener = function (b, d) {
            var a, c = this._listeners[b];
            if (c) {
                for (a = c.length; --a > -1;) {
                    if (c[a].c === d) {
                        return c.splice(a, 1), void 0
                    }
                }
            }
        }, aG.dispatchEvent = function (b) {
            var f, a, c, d = this._listeners[b];
            if (d) {
                for (f = d.length, a = this._eventTarget; --f > -1;) {
                    c = d[f], c && (c.up ? c.c.call(c.s || a, {type: b, target: a}) : c.c.call(c.s || a))
                }
            }
        };
        var aJ = aA.requestAnimationFrame, ar = aA.cancelAnimationFrame, Z = Date.now || function () {
            return (new Date).getTime()
        }, aw = Z();
        for (aB = ["ms", "moz", "webkit", "o"], aC = aB.length; --aC > -1 && !aJ;) {
            aJ = aA[aB[aC] + "RequestAnimationFrame"], ar = aA[aB[aC] + "CancelAnimationFrame"] || aA[aB[aC] + "CancelRequestAnimationFrame"]
        }
        ay("Ticker", function (y, q) {
            var k, z, a, g, j, m = this, x = Z(), o = q !== !1 && aJ, w = 500, b = 33, v = function (d) {
                var f, c, h = Z() - aw;
                h > w && (x += h - b), aw += h, m.time = (aw - x) / 1000, f = m.time - j, (!k || f > 0 || d === !0) && (m.frame++, j += f + (f >= g ? 0.004 : g - f), c = !0), d !== !0 && (a = z(v)), c && m.dispatchEvent("tick")
            };
            aS.call(m), m.time = m.frame = 0, m.tick = function () {
                v(!0)
            }, m.lagSmoothing = function (c, d) {
                w = c || 1 / aU, b = Math.min(d, w, 0)
            }, m.sleep = function () {
                null != a && (o && ar ? ar(a) : clearTimeout(a), z = aH, a = null, m === aT && (aF = !1))
            }, m.wake = function () {
                null !== a ? m.sleep() : m.frame > 10 && (aw = Z() - w + 5), z = 0 === k ? aH : o && aJ ? aJ : function (c) {
                    return setTimeout(c, 0 | 1000 * (j - m.time) + 1)
                }, m === aT && (aF = !0), v(2)
            }, m.fps = function (c) {
                return arguments.length ? (k = c, g = 1 / (k || 60), j = this.time + g, m.wake(), void 0) : k
            }, m.useRAF = function (c) {
                return arguments.length ? (m.sleep(), o = c, m.fps(k), void 0) : o
            }, m.fps(y), setTimeout(function () {
                o && (!a || 5 > m.frame) && m.useRAF(!1)
            }, 1500)
        }), aG = aM.Ticker.prototype = new aM.events.EventDispatcher, aG.constructor = aM.Ticker;
        var aa = ay("core.Animation", function (b, c) {
            if (this.vars = c = c || {}, this._duration = this._totalDuration = b || 0, this._delay = Number(c.delay) || 0, this._timeScale = 1, this._active = c.immediateRender === !0, this.data = c.data, this._reversed = c.reversed === !0, aq) {
                aF || aT.wake();
                var a = this.vars.useFrames ? aD : aq;
                a.add(this, a._time), this.vars.paused && this.paused(!0)
            }
        });
        aT = aa.ticker = new aM.Ticker, aG = aa.prototype, aG._dirty = aG._gc = aG._initted = aG._paused = !1, aG._totalTime = aG._time = 0, aG._rawPrevTime = -1, aG._next = aG._last = aG._onUpdate = aG._timeline = aG.timeline = null, aG._paused = !1;
        var ap = function () {
            aF && Z() - aw > 2000 && aT.wake(), setTimeout(ap, 2000)
        };
        ap(), aG.play = function (a, b) {
            return null != a && this.seek(a, b), this.reversed(!1).paused(!1)
        }, aG.pause = function (a, b) {
            return null != a && this.seek(a, b), this.paused(!0)
        }, aG.resume = function (a, b) {
            return null != a && this.seek(a, b), this.paused(!1)
        }, aG.seek = function (a, b) {
            return this.totalTime(Number(a), b !== !1)
        }, aG.restart = function (a, b) {
            return this.reversed(!1).paused(!1).totalTime(a ? -this._delay : 0, b !== !1, !0)
        }, aG.reverse = function (a, b) {
            return null != a && this.seek(a || this.totalDuration(), b), this.reversed(!0).paused(!1)
        }, aG.render = function () {
        }, aG.invalidate = function () {
            return this._time = this._totalTime = 0, this._initted = this._gc = !1, this._rawPrevTime = -1, (this._gc || !this.timeline) && this._enabled(!0), this
        }, aG.isActive = function () {
            var b, c = this._timeline, a = this._startTime;
            return !c || !this._gc && !this._paused && c.isActive() && (b = c.rawTime()) >= a && a + this.totalDuration() / this._timeScale > b
        }, aG._enabled = function (a, b) {
            return aF || aT.wake(), this._gc = !a, this._active = this.isActive(), b !== !0 && (a && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !a && this.timeline && this._timeline._remove(this, !0)), !1
        }, aG._kill = function () {
            return this._enabled(!1, !1)
        }, aG.kill = function (a, b) {
            return this._kill(a, b), this
        }, aG._uncache = function (a) {
            for (var b = a ? this : this.timeline; b;) {
                b._dirty = !0, b = b.timeline
            }
            return this
        }, aG._swapSelfInParams = function (b) {
            for (var c = b.length, a = b.concat(); --c > -1;) {
                "{self}" === b[c] && (a[c] = this)
            }
            return a
        }, aG.eventCallback = function (b, f, a, c) {
            if ("on" === (b || "").substr(0, 2)) {
                var d = this.vars;
                if (1 === arguments.length) {
                    return d[b]
                }
                null == f ? delete d[b] : (d[b] = f, d[b + "Params"] = aO(a) && -1 !== a.join("").indexOf("{self}") ? this._swapSelfInParams(a) : a, d[b + "Scope"] = c), "onUpdate" === b && (this._onUpdate = f)
            }
            return this
        }, aG.delay = function (a) {
            return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + a - this._delay), this._delay = a, this) : this._delay
        }, aG.duration = function (a) {
            return arguments.length ? (this._duration = this._totalDuration = a, this._uncache(!0), this._timeline.smoothChildTiming && this._time > 0 && this._time < this._duration && 0 !== a && this.totalTime(this._totalTime * (a / this._duration), !0), this) : (this._dirty = !1, this._duration)
        }, aG.totalDuration = function (a) {
            return this._dirty = !1, arguments.length ? this.duration(a) : this._totalDuration
        }, aG.time = function (a, b) {
            return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(a > this._duration ? this._duration : a, b)) : this._time
        }, aG.totalTime = function (b, f, a) {
            if (aF || aT.wake(), !arguments.length) {
                return this._totalTime
            }
            if (this._timeline) {
                if (0 > b && !a && (b += this.totalDuration()), this._timeline.smoothChildTiming) {
                    this._dirty && this.totalDuration();
                    var c = this._totalDuration, d = this._timeline;
                    if (b > c && !a && (b = c), this._startTime = (this._paused ? this._pauseTime : d._time) - (this._reversed ? c - b : b) / this._timeScale, d._dirty || this._uncache(!1), d._timeline) {
                        for (; d._timeline;) {
                            d._timeline._time !== (d._startTime + d._totalTime) / d._timeScale && d.totalTime(d._totalTime, !0), d = d._timeline
                        }
                    }
                }
                this._gc && this._enabled(!0, !1), (this._totalTime !== b || 0 === this._duration) && (this.render(b, f, !1), au.length && af())
            }
            return this
        }, aG.progress = aG.totalProgress = function (a, b) {
            return arguments.length ? this.totalTime(this.duration() * a, b) : this._time / this.duration()
        }, aG.startTime = function (a) {
            return arguments.length ? (a !== this._startTime && (this._startTime = a, this.timeline && this.timeline._sortChildren && this.timeline.add(this, a - this._delay)), this) : this._startTime
        }, aG.endTime = function (a) {
            return this._startTime + (0 != a ? this.totalDuration() : this.duration()) / this._timeScale
        }, aG.timeScale = function (b) {
            if (!arguments.length) {
                return this._timeScale
            }
            if (b = b || aU, this._timeline && this._timeline.smoothChildTiming) {
                var c = this._pauseTime, a = c || 0 === c ? c : this._timeline.totalTime();
                this._startTime = a - (a - this._startTime) * this._timeScale / b
            }
            return this._timeScale = b, this._uncache(!1)
        }, aG.reversed = function (a) {
            return arguments.length ? (a != this._reversed && (this._reversed = a, this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, !0)), this) : this._reversed
        }, aG.paused = function (b) {
            if (!arguments.length) {
                return this._paused
            }
            if (b != this._paused && this._timeline) {
                aF || b || aT.wake();
                var d = this._timeline, a = d.rawTime(), c = a - this._pauseTime;
                !b && d.smoothChildTiming && (this._startTime += c, this._uncache(!1)), this._pauseTime = b ? a : null, this._paused = b, this._active = this.isActive(), !b && 0 !== c && this._initted && this.duration() && this.render(d.smoothChildTiming ? this._totalTime : (a - this._startTime) / this._timeScale, !0, !0)
            }
            return this._gc && !b && this._enabled(!0, !1), this
        };
        var ao = ay("core.SimpleTimeline", function (a) {
            aa.call(this, 0, a), this.autoRemoveChildren = this.smoothChildTiming = !0
        });
        aG = ao.prototype = new aa, aG.constructor = ao, aG.kill()._gc = !1, aG._first = aG._last = aG._recent = null, aG._sortChildren = !1, aG.add = aG.insert = function (b, d) {
            var a, c;
            if (b._startTime = Number(d || 0) + b._delay, b._paused && this !== b._timeline && (b._pauseTime = b._startTime + (this.rawTime() - b._startTime) / b._timeScale), b.timeline && b.timeline._remove(b, !0), b.timeline = b._timeline = this, b._gc && b._enabled(!0, !0), a = this._last, this._sortChildren) {
                for (c = b._startTime; a && a._startTime > c;) {
                    a = a._prev
                }
            }
            return a ? (b._next = a._next, a._next = b) : (b._next = this._first, this._first = b), b._next ? b._next._prev = b : this._last = b, b._prev = a, this._recent = b, this._timeline && this._uncache(!0), this
        }, aG._remove = function (a, b) {
            return a.timeline === this && (b || a._enabled(!1, !0), a._prev ? a._prev._next = a._next : this._first === a && (this._first = a._next), a._next ? a._next._prev = a._prev : this._last === a && (this._last = a._prev), a._next = a._prev = a.timeline = null, a === this._recent && (this._recent = this._last), this._timeline && this._uncache(!0)), this
        }, aG.render = function (b, f, a) {
            var c, d = this._first;
            for (this._totalTime = this._time = this._rawPrevTime = b; d;) {
                c = d._next, (d._active || b >= d._startTime && !d._paused) && (d._reversed ? d.render((d._dirty ? d.totalDuration() : d._totalDuration) - (b - d._startTime) * d._timeScale, f, a) : d.render((b - d._startTime) * d._timeScale, f, a)), d = c
            }
        }, aG.rawTime = function () {
            return aF || aT.wake(), this._totalTime
        };
        var aj = ay("TweenLite", function (h, d, f) {
            if (aa.call(this, d, f), this.render = aj.prototype.render, null == h) {
                throw"Cannot tween a null target."
            }
            this.target = h = "string" != typeof h ? h : aj.selector(h) || h;
            var g, k, c,
                j = h.jquery || h.length && h !== aA && h[0] && (h[0] === aA || h[0].nodeType && h[0].style && !h.nodeType),
                b = this.vars.overwrite;
            if (this._overwrite = b = null == b ? ab[aj.defaultOverwrite] : "number" == typeof b ? b >> 0 : ab[b], (j || h instanceof Array || h.push && aO(h)) && "number" != typeof h[0]) {
                for (this._targets = c = az(h), this._propLookup = [], this._siblings = [], g = 0; c.length > g; g++) {
                    k = c[g], k ? "string" != typeof k ? k.length && k !== aA && k[0] && (k[0] === aA || k[0].nodeType && k[0].style && !k.nodeType) ? (c.splice(g--, 1), this._targets = c = c.concat(az(k))) : (this._siblings[g] = at(k, this, !1), 1 === b && this._siblings[g].length > 1 && ak(k, this, null, 1, this._siblings[g])) : (k = c[g--] = aj.selector(k), "string" == typeof k && c.splice(g + 1, 1)) : c.splice(g--, 1)
                }
            } else {
                this._propLookup = {}, this._siblings = at(h, this, !1), 1 === b && this._siblings.length > 1 && ak(h, this, null, 1, this._siblings)
            }
            (this.vars.immediateRender || 0 === d && 0 === this._delay && this.vars.immediateRender !== !1) && (this._time = -aU, this.render(-this._delay))
        }, !0), an = function (a) {
            return a && a.length && a !== aA && a[0] && (a[0] === aA || a[0].nodeType && a[0].style && !a.nodeType)
        }, ad = function (b, d) {
            var a, c = {};
            for (a in b) {
                al[a] || a in d && "transform" !== a && "x" !== a && "y" !== a && "width" !== a && "height" !== a && "className" !== a && "border" !== a || !(!X[a] || X[a] && X[a]._autoCSS) || (c[a] = b[a], delete b[a])
            }
            b.css = c
        };
        aG = aj.prototype = new aa, aG.constructor = aj, aG.kill()._gc = !1, aG.ratio = 0, aG._firstPT = aG._targets = aG._overwrittenProps = aG._startAt = null, aG._notifyPluginsOfEnabled = aG._lazy = !1, aj.version = "1.14.2", aj.defaultEase = aG._ease = new av(null, null, 1, 1), aj.defaultOverwrite = "auto", aj.ticker = aT, aj.autoSleep = !0, aj.lagSmoothing = function (a, b) {
            aT.lagSmoothing(a, b)
        }, aj.selector = aA.$ || aA.jQuery || function (b) {
            var a = aA.$ || aA.jQuery;
            return a ? (aj.selector = a, a(b)) : "undefined" == typeof document ? b : document.querySelectorAll ? document.querySelectorAll(b) : document.getElementById("#" === b.charAt(0) ? b.substr(1) : b)
        };
        var au = [], ag = {}, ae = aj._internals = {isArray: aO, isSelector: an, lazyTweens: au}, X = aj._plugins = {},
            am = ae.tweenLookup = {}, aK = 0, al = ae.reservedProps = {
                ease: 1,
                delay: 1,
                overwrite: 1,
                onComplete: 1,
                onCompleteParams: 1,
                onCompleteScope: 1,
                useFrames: 1,
                runBackwards: 1,
                startAt: 1,
                onUpdate: 1,
                onUpdateParams: 1,
                onUpdateScope: 1,
                onStart: 1,
                onStartParams: 1,
                onStartScope: 1,
                onReverseComplete: 1,
                onReverseCompleteParams: 1,
                onReverseCompleteScope: 1,
                onRepeat: 1,
                onRepeatParams: 1,
                onRepeatScope: 1,
                easeParams: 1,
                yoyo: 1,
                immediateRender: 1,
                repeat: 1,
                repeatDelay: 1,
                data: 1,
                paused: 1,
                reversed: 1,
                autoCSS: 1,
                lazy: 1,
                onOverwrite: 1
            }, ab = {none: 0, all: 1, auto: 2, concurrent: 3, allOnStart: 4, preexisting: 5, "true": 1, "false": 0},
            aD = aa._rootFramesTimeline = new ao, aq = aa._rootTimeline = new ao, af = ae.lazyRender = function () {
                var a, b = au.length;
                for (ag = {}; --b > -1;) {
                    a = au[b], a && a._lazy !== !1 && (a.render(a._lazy[0], a._lazy[1], !0), a._lazy = !1)
                }
                au.length = 0
            };
        aq._startTime = aT.time, aD._startTime = aT.frame, aq._active = aD._active = !0, setTimeout(af, 1), aa._updateRoot = aj.render = function () {
            var b, c, a;
            if (au.length && af(), aq.render((aT.time - aq._startTime) * aq._timeScale, !1, !1), aD.render((aT.frame - aD._startTime) * aD._timeScale, !1, !1), au.length && af(), !(aT.frame % 120)) {
                for (a in am) {
                    for (c = am[a].tweens, b = c.length; --b > -1;) {
                        c[b]._gc && c.splice(b, 1)
                    }
                    0 === c.length && delete am[a]
                }
                if (a = aq._first, (!a || a._paused) && aj.autoSleep && !aD._first && 1 === aT._listeners.tick.length) {
                    for (; a && a._paused;) {
                        a = a._next
                    }
                    a || aT.sleep()
                }
            }
        }, aT.addEventListener("tick", aa._updateRoot);
        var at = function (b, f, a) {
            var c, d, g = b._gsTweenID;
            if (am[g || (b._gsTweenID = g = "t" + aK++)] || (am[g] = {
                    target: b,
                    tweens: []
                }), f && (c = am[g].tweens, c[d = c.length] = f, a)) {
                for (; --d > -1;) {
                    c[d] === f && c.splice(d, 1)
                }
            }
            return am[g].tweens
        }, ah = function (d, h, c, f) {
            var g, j, b = d.vars.onOverwrite;
            return b && (g = b(d, h, c, f)), b = aj.onOverwrite, b && (j = b(d, h, c, f)), g !== !1 && j !== !1
        }, ak = function (A, w, p, B, b) {
            var g, y, d, k;
            if (1 === B || B >= 4) {
                for (k = b.length, g = 0; k > g; g++) {
                    if ((d = b[g]) !== w) {
                        d._gc || ah(d, w) && d._enabled(!1, !1) && (y = !0)
                    } else {
                        if (5 === B) {
                            break
                        }
                    }
                }
                return y
            }
            var q, z = w._startTime + aU, j = [], v = 0, x = 0 === w._duration;
            for (g = b.length; --g > -1;) {
                (d = b[g]) === w || d._gc || d._paused || (d._timeline !== w._timeline ? (q = q || ai(w, 0, x), 0 === ai(d, q, x) && (j[v++] = d)) : z >= d._startTime && d._startTime + d.totalDuration() / d._timeScale > z && ((x || !d._initted) && 2e-10 >= z - d._startTime || (j[v++] = d)))
            }
            for (g = v; --g > -1;) {
                if (d = j[g], 2 === B && d._kill(p, A, w) && (y = !0), 2 !== B || !d._firstPT && d._initted) {
                    if (2 !== B && !ah(d, w)) {
                        continue
                    }
                    d._enabled(!1, !1) && (y = !0)
                }
            }
            return y
        }, ai = function (b, f, a) {
            for (var c = b._timeline, d = c._timeScale, g = b._startTime; c._timeline;) {
                if (g += c._startTime, d *= c._timeScale, c._paused) {
                    return -100
                }
                c = c._timeline
            }
            return g /= d, g > f ? g - f : a && g === f || !b._initted && 2 * aU > g - f ? aU : (g += b.totalDuration() / b._timeScale / d) > f + aU ? 0 : g - f - aU
        };
        aG._init = function () {
            var p, k, g, q, b, d = this.vars, m = this._overwrittenProps, c = this._duration, f = !!d.immediateRender,
                j = d.ease;
            if (d.startAt) {
                this._startAt && (this._startAt.render(-1, !0), this._startAt.kill()), b = {};
                for (q in d.startAt) {
                    b[q] = d.startAt[q]
                }
                if (b.overwrite = !1, b.immediateRender = !0, b.lazy = f && d.lazy !== !1, b.startAt = b.delay = null, this._startAt = aj.to(this.target, 0, b), f) {
                    if (this._time > 0) {
                        this._startAt = null
                    } else {
                        if (0 !== c) {
                            return
                        }
                    }
                }
            } else {
                if (d.runBackwards && 0 !== c) {
                    if (this._startAt) {
                        this._startAt.render(-1, !0), this._startAt.kill(), this._startAt = null
                    } else {
                        0 !== this._time && (f = !1), g = {};
                        for (q in d) {
                            al[q] && "autoCSS" !== q || (g[q] = d[q])
                        }
                        if (g.overwrite = 0, g.data = "isFromStart", g.lazy = f && d.lazy !== !1, g.immediateRender = f, this._startAt = aj.to(this.target, 0, g), f) {
                            if (0 === this._time) {
                                return
                            }
                        } else {
                            this._startAt._init(), this._startAt._enabled(!1), this.vars.immediateRender && (this._startAt = null)
                        }
                    }
                }
            }
            if (this._ease = j = j ? j instanceof av ? j : "function" == typeof j ? new av(j, d.easeParams) : ax[j] || aj.defaultEase : aj.defaultEase, d.easeParams instanceof Array && j.config && (this._ease = j.config.apply(j, d.easeParams)), this._easeType = this._ease._type, this._easePower = this._ease._power, this._firstPT = null, this._targets) {
                for (p = this._targets.length; --p > -1;) {
                    this._initProps(this._targets[p], this._propLookup[p] = {}, this._siblings[p], m ? m[p] : null) && (k = !0)
                }
            } else {
                k = this._initProps(this.target, this._propLookup, this._siblings, m)
            }
            if (k && aj._onPluginEvent("_onInitAllProps", this), m && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)), d.runBackwards) {
                for (g = this._firstPT; g;) {
                    g.s += g.c, g.c = -g.c, g = g._next
                }
            }
            this._onUpdate = d.onUpdate, this._initted = !0
        }, aG._initProps = function (k, g, q, b) {
            var d, m, c, f, j, p;
            if (null == k) {
                return !1
            }
            ag[k._gsTweenID] && af(), this.vars.css || k.style && k !== aA && k.nodeType && X.css && this.vars.autoCSS !== !1 && ad(this.vars, k);
            for (d in this.vars) {
                if (p = this.vars[d], al[d]) {
                    p && (p instanceof Array || p.push && aO(p)) && -1 !== p.join("").indexOf("{self}") && (this.vars[d] = p = this._swapSelfInParams(p, this))
                } else {
                    if (X[d] && (f = new X[d])._onInitTween(k, this.vars[d], this)) {
                        for (this._firstPT = j = {
                            _next: this._firstPT,
                            t: f,
                            p: "setRatio",
                            s: 0,
                            c: 1,
                            f: !0,
                            n: d,
                            pg: !0,
                            pr: f._priority
                        }, m = f._overwriteProps.length; --m > -1;) {
                            g[f._overwriteProps[m]] = this._firstPT
                        }
                        (f._priority || f._onInitAllProps) && (c = !0), (f._onDisable || f._onEnable) && (this._notifyPluginsOfEnabled = !0)
                    } else {
                        this._firstPT = g[d] = j = {
                            _next: this._firstPT,
                            t: k,
                            p: d,
                            f: "function" == typeof k[d],
                            n: d,
                            pg: !1,
                            pr: 0
                        }, j.s = j.f ? k[d.indexOf("set") || "function" != typeof k["get" + d.substr(3)] ? d : "get" + d.substr(3)]() : parseFloat(k[d]), j.c = "string" == typeof p && "=" === p.charAt(1) ? parseInt(p.charAt(0) + "1", 10) * Number(p.substr(2)) : Number(p) - j.s || 0
                    }
                }
                j && j._next && (j._next._prev = j)
            }
            return b && this._kill(b, k) ? this._initProps(k, g, q, b) : this._overwrite > 1 && this._firstPT && q.length > 1 && ak(k, this, g, this._overwrite, q) ? (this._kill(g, k), this._initProps(k, g, q, b)) : (this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration) && (ag[k._gsTweenID] = !0), c)
        }, aG.render = function (y, v, k) {
            var z, b, d, w, c = this._time, j = this._duration, p = this._rawPrevTime;
            if (y >= j) {
                this._totalTime = this._time = j, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1, this._reversed || (z = !0, b = "onComplete"), 0 === j && (this._initted || !this.vars.lazy || k) && (this._startTime === this._timeline._duration && (y = 0), (0 === y || 0 > p || p === aU) && p !== y && (k = !0, p > aU && (b = "onReverseComplete")), this._rawPrevTime = w = !v || y || p === y ? y : aU)
            } else {
                if (1e-7 > y) {
                    this._totalTime = this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== c || 0 === j && p > 0 && p !== aU) && (b = "onReverseComplete", z = this._reversed), 0 > y && (this._active = !1, 0 === j && (this._initted || !this.vars.lazy || k) && (p >= 0 && (k = !0), this._rawPrevTime = w = !v || y || p === y ? y : aU)), this._initted || (k = !0)
                } else {
                    if (this._totalTime = this._time = y, this._easeType) {
                        var x = y / j, g = this._easeType, q = this._easePower;
                        (1 === g || 3 === g && x >= 0.5) && (x = 1 - x), 3 === g && (x *= 2), 1 === q ? x *= x : 2 === q ? x *= x * x : 3 === q ? x *= x * x * x : 4 === q && (x *= x * x * x * x), this.ratio = 1 === g ? 1 - x : 2 === g ? x : 0.5 > y / j ? x / 2 : 1 - x / 2
                    } else {
                        this.ratio = this._ease.getRatio(y / j)
                    }
                }
            }
            if (this._time !== c || k) {
                if (!this._initted) {
                    if (this._init(), !this._initted || this._gc) {
                        return
                    }
                    if (!k && this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration)) {
                        return this._time = this._totalTime = c, this._rawPrevTime = p, au.push(this), this._lazy = [y, v], void 0
                    }
                    this._time && !z ? this.ratio = this._ease.getRatio(this._time / j) : z && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                }
                for (this._lazy !== !1 && (this._lazy = !1), this._active || !this._paused && this._time !== c && y >= 0 && (this._active = !0), 0 === c && (this._startAt && (y >= 0 ? this._startAt.render(y, v, k) : b || (b = "_dummyGS")), this.vars.onStart && (0 !== this._time || 0 === j) && (v || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || Y))), d = this._firstPT; d;) {
                    d.f ? d.t[d.p](d.c * this.ratio + d.s) : d.t[d.p] = d.c * this.ratio + d.s, d = d._next
                }
                this._onUpdate && (0 > y && this._startAt && y !== -0.0001 && this._startAt.render(y, v, k), v || (this._time !== c || z) && this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || Y)), b && (!this._gc || k) && (0 > y && this._startAt && !this._onUpdate && y !== -0.0001 && this._startAt.render(y, v, k), z && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !v && this.vars[b] && this.vars[b].apply(this.vars[b + "Scope"] || this, this.vars[b + "Params"] || Y), 0 === j && this._rawPrevTime === aU && w !== aU && (this._rawPrevTime = 0))
            }
        }, aG._kill = function (v, k, g) {
            if ("all" === v && (v = null), null == v && (null == k || k === this.target)) {
                return this._lazy = !1, this._enabled(!1, !1)
            }
            k = "string" != typeof k ? k || this._targets || this.target : aj.selector(k) || k;
            var w, b, d, m, c, f, j, p, q;
            if ((aO(k) || an(k)) && "number" != typeof k[0]) {
                for (w = k.length; --w > -1;) {
                    this._kill(v, k[w]) && (f = !0)
                }
            } else {
                if (this._targets) {
                    for (w = this._targets.length; --w > -1;) {
                        if (k === this._targets[w]) {
                            c = this._propLookup[w] || {}, this._overwrittenProps = this._overwrittenProps || [], b = this._overwrittenProps[w] = v ? this._overwrittenProps[w] || {} : "all";
                            break
                        }
                    }
                } else {
                    if (k !== this.target) {
                        return !1
                    }
                    c = this._propLookup, b = this._overwrittenProps = v ? this._overwrittenProps || {} : "all"
                }
                if (c) {
                    if (j = v || c, p = v !== b && "all" !== b && v !== c && ("object" != typeof v || !v._tempKill), g && (aj.onOverwrite || this.vars.onOverwrite)) {
                        for (d in j) {
                            c[d] && (q || (q = []), q.push(d))
                        }
                        if (!ah(this, g, k, q)) {
                            return !1
                        }
                    }
                    for (d in j) {
                        (m = c[d]) && (m.pg && m.t._kill(j) && (f = !0), m.pg && 0 !== m.t._overwriteProps.length || (m._prev ? m._prev._next = m._next : m === this._firstPT && (this._firstPT = m._next), m._next && (m._next._prev = m._prev), m._next = m._prev = null), delete c[d]), p && (b[d] = 1)
                    }
                    !this._firstPT && this._initted && this._enabled(!1, !1)
                }
            }
            return f
        }, aG.invalidate = function () {
            return this._notifyPluginsOfEnabled && aj._onPluginEvent("_onDisable", this), this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null, this._notifyPluginsOfEnabled = this._active = this._lazy = !1, this._propLookup = this._targets ? {} : [], aa.prototype.invalidate.call(this), this.vars.immediateRender && (this._time = -aU, this.render(-this._delay)), this
        }, aG._enabled = function (b, d) {
            if (aF || aT.wake(), b && this._gc) {
                var a, c = this._targets;
                if (c) {
                    for (a = c.length; --a > -1;) {
                        this._siblings[a] = at(c[a], this, !0)
                    }
                } else {
                    this._siblings = at(this.target, this, !0)
                }
            }
            return aa.prototype._enabled.call(this, b, d), this._notifyPluginsOfEnabled && this._firstPT ? aj._onPluginEvent(b ? "_onEnable" : "_onDisable", this) : !1
        }, aj.to = function (b, c, a) {
            return new aj(b, c, a)
        }, aj.from = function (b, c, a) {
            return a.runBackwards = !0, a.immediateRender = 0 != a.immediateRender, new aj(b, c, a)
        }, aj.fromTo = function (b, d, a, c) {
            return c.startAt = a, c.immediateRender = 0 != c.immediateRender && 0 != a.immediateRender, new aj(b, d, c)
        }, aj.delayedCall = function (b, f, a, c, d) {
            return new aj(f, 0, {
                delay: b,
                onComplete: f,
                onCompleteParams: a,
                onCompleteScope: c,
                onReverseComplete: f,
                onReverseCompleteParams: a,
                onReverseCompleteScope: c,
                immediateRender: !1,
                useFrames: d,
                overwrite: 0
            })
        }, aj.set = function (a, b) {
            return new aj(a, 0, b)
        }, aj.getTweensOf = function (b, f) {
            if (null == b) {
                return []
            }
            b = "string" != typeof b ? b : aj.selector(b) || b;
            var a, c, d, g;
            if ((aO(b) || an(b)) && "number" != typeof b[0]) {
                for (a = b.length, c = []; --a > -1;) {
                    c = c.concat(aj.getTweensOf(b[a], f))
                }
                for (a = c.length; --a > -1;) {
                    for (g = c[a], d = a; --d > -1;) {
                        g === c[d] && c.splice(a, 1)
                    }
                }
            } else {
                for (c = at(b).concat(), a = c.length; --a > -1;) {
                    (c[a]._gc || f && !c[a].isActive()) && c.splice(a, 1)
                }
            }
            return c
        }, aj.killTweensOf = aj.killDelayedCallsTo = function (b, f, a) {
            "object" == typeof f && (a = f, f = !1);
            for (var c = aj.getTweensOf(b, f), d = c.length; --d > -1;) {
                c[d]._kill(a, b)
            }
        };
        var W = ay("plugins.TweenPlugin", function (a, b) {
            this._overwriteProps = (a || "").split(","), this._propName = this._overwriteProps[0], this._priority = b || 0, this._super = W.prototype
        }, !0);
        if (aG = W.prototype, W.version = "1.10.1", W.API = 2, aG._firstPT = null, aG._addTween = function (d, h, c, f, g, k) {
                var b, j;
                return null != f && (b = "number" == typeof f || "=" !== f.charAt(1) ? Number(f) - c : parseInt(f.charAt(0) + "1", 10) * Number(f.substr(2))) ? (this._firstPT = j = {
                    _next: this._firstPT,
                    t: d,
                    p: h,
                    s: c,
                    c: b,
                    f: "function" == typeof d[h],
                    n: g || h,
                    r: k
                }, j._next && (j._next._prev = j), j) : void 0
            }, aG.setRatio = function (b) {
                for (var d, a = this._firstPT, c = 0.000001; a;) {
                    d = a.c * b + a.s, a.r ? d = Math.round(d) : c > d && d > -c && (d = 0), a.f ? a.t[a.p](d) : a.t[a.p] = d, a = a._next
                }
            }, aG._kill = function (b) {
                var d, a = this._overwriteProps, c = this._firstPT;
                if (null != b[this._propName]) {
                    this._overwriteProps = []
                } else {
                    for (d = a.length; --d > -1;) {
                        null != b[a[d]] && a.splice(d, 1)
                    }
                }
                for (; c;) {
                    null != b[c.n] && (c._next && (c._next._prev = c._prev), c._prev ? (c._prev._next = c._next, c._prev = null) : this._firstPT === c && (this._firstPT = c._next)), c = c._next
                }
                return !1
            }, aG._roundProps = function (b, c) {
                for (var a = this._firstPT; a;) {
                    (b[this._propName] || null != a.n && b[a.n.split(this._propName + "_").join("")]) && (a.r = c), a = a._next
                }
            }, aj._onPluginEvent = function (d, h) {
                var c, f, g, k, b, j = h._firstPT;
                if ("_onInitAllProps" === d) {
                    for (; j;) {
                        for (b = j._next, f = g; f && f.pr > j.pr;) {
                            f = f._next
                        }
                        (j._prev = f ? f._prev : k) ? j._prev._next = j : g = j, (j._next = f) ? f._prev = j : k = j, j = b
                    }
                    j = h._firstPT = g
                }
                for (; j;) {
                    j.pg && "function" == typeof j.t[d] && j.t[d]() && (c = !0), j = j._next
                }
                return c
            }, W.activate = function (a) {
                for (var b = a.length; --b > -1;) {
                    a[b].API === W.API && (X[(new a[b])._propName] = a[b])
                }
                return !0
            }, aQ.plugin = function (d) {
                if (!(d && d.propName && d.init && d.API)) {
                    throw"illegal plugin definition."
                }
                var h, c = d.propName, f = d.priority || 0, g = d.overwriteProps, k = {
                    init: "_onInitTween",
                    set: "setRatio",
                    kill: "_kill",
                    round: "_roundProps",
                    initAll: "_onInitAllProps"
                }, b = ay("plugins." + c.charAt(0).toUpperCase() + c.substr(1) + "Plugin", function () {
                    W.call(this, c, f), this._overwriteProps = g || []
                }, d.global === !0), j = b.prototype = new W(c);
                j.constructor = b, b.API = d.API;
                for (h in k) {
                    "function" == typeof d[h] && (j[k[h]] = d[h])
                }
                return b.version = d.version, W.activate([b]), b
            }, aB = aA._gsQueue) {
            for (aC = 0; aB.length > aC; aC++) {
                aB[aC]()
            }
            for (aG in aR) {
                aR[aG].func || aA.console.log("GSAP encountered missing dependency: com.greensock." + aG)
            }
        }
        aF = !1
    }
})("undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window, "TweenLite");
/*!
 * VERSION: 1.14.2
 * DATE: 2014-10-18
 * UPDATES AND DOCS AT: http://www.greensock.com
 *
 * @license Copyright (c) 2008-2014, GreenSock. All rights reserved.
 * This work is subject to the terms at http://www.greensock.com/terms_of_use.html or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 *
 * @author: Jack Doyle, jack@greensock.com
 */
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function () {
    _gsScope._gsDefine("TimelineLite", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function (D, y, v) {
        var E = function (c) {
                y.call(this, c), this._labels = {}, this.autoRemoveChildren = this.vars.autoRemoveChildren === !0, this.smoothChildTiming = this.vars.smoothChildTiming === !0, this._sortChildren = !0, this._onUpdate = this.vars.onUpdate;
                var a, f, h = this.vars;
                for (f in h) {
                    a = h[f], g(a) && -1 !== a.join("").indexOf("{self}") && (h[f] = this._swapSelfInParams(a))
                }
                g(h.tweens) && this.add(h.tweens, 0, h.align, h.stagger)
            }, b = 1e-10, j = v._internals, A = j.isSelector, g = j.isArray, w = j.lazyTweens, q = j.lazyRender, B = [],
            C = _gsScope._gsDefine.globals, z = function (c) {
                var f, a = {};
                for (f in c) {
                    a[f] = c[f]
                }
                return a
            }, d = function (c, l, a, f) {
                var h = c._timeline._totalTime;
                (l || !this._forcingPlayhead) && (c._timeline.pause(c._startTime), l && l.apply(f || c._timeline, a || B), this._forcingPlayhead && c._timeline.seek(h))
            }, x = function (c) {
                var h, a = [], f = c.length;
                for (h = 0; h !== f; a.push(c[h++])) {
                }
                return a
            }, k = E.prototype = new y;
        return E.version = "1.14.2", k.constructor = E, k.kill()._gc = k._forcingPlayhead = !1, k.to = function (a, h, c, f) {
            var i = c.repeat && C.TweenMax || v;
            return h ? this.add(new i(a, h, c), f) : this.set(a, c, f)
        }, k.from = function (a, h, c, f) {
            return this.add((c.repeat && C.TweenMax || v).from(a, h, c), f)
        }, k.fromTo = function (f, l, h, i, m) {
            var c = i.repeat && C.TweenMax || v;
            return l ? this.add(c.fromTo(f, l, h, i), m) : this.set(f, i, m)
        }, k.staggerTo = function (I, F, a, i, f, s, m, G) {
            var H, c = new E({
                onComplete: s,
                onCompleteParams: m,
                onCompleteScope: G,
                smoothChildTiming: this.smoothChildTiming
            });
            for ("string" == typeof I && (I = v.selector(I) || I), I = I || [], A(I) && (I = x(I)), i = i || 0, 0 > i && (I = x(I), I.reverse(), i *= -1), H = 0; I.length > H; H++) {
                a.startAt && (a.startAt = z(a.startAt)), c.to(I[H], F, z(a), H * i)
            }
            return this.add(c, f)
        }, k.staggerFrom = function (h, p, f, l, m, F, c, u) {
            return f.immediateRender = 0 != f.immediateRender, f.runBackwards = !0, this.staggerTo(h, p, f, l, m, F, c, u)
        }, k.staggerFromTo = function (G, u, m, H, c, l, F, f, p) {
            return H.startAt = m, H.immediateRender = 0 != H.immediateRender && 0 != m.immediateRender, this.staggerTo(G, u, H, c, l, F, f, p)
        }, k.call = function (a, h, c, f) {
            return this.add(v.delayedCall(0, a, h, c), f)
        }, k.set = function (a, f, c) {
            return c = this._parseTimeOrLabel(c, 0, !0), null == f.immediateRender && (f.immediateRender = c === this._time && !this._paused), this.add(new v(a, 0, f), c)
        }, E.exportRoot = function (f, i) {
            f = f || {}, null == f.smoothChildTiming && (f.smoothChildTiming = !0);
            var h, m, c = new E(f), l = c._timeline;
            for (null == i && (i = !0), l._remove(c, !0), c._startTime = 0, c._rawPrevTime = c._time = c._totalTime = l._time, h = l._first; h;) {
                m = h._next, i && h instanceof v && h.target === h.vars.onComplete || c.add(h, h._startTime - h._delay), h = m
            }
            return l.add(c, 0), c
        }, k.add = function (i, o, H, t) {
            var s, I, J, G, m, F;
            if ("number" != typeof o && (o = this._parseTimeOrLabel(o, 0, !0, i)), !(i instanceof D)) {
                if (i instanceof Array || i && i.push && g(i)) {
                    for (H = H || "normal", t = t || 0, s = o, I = i.length, J = 0; I > J; J++) {
                        g(G = i[J]) && (G = new E({tweens: G})), this.add(G, s), "string" != typeof G && "function" != typeof G && ("sequence" === H ? s = G._startTime + G.totalDuration() / G._timeScale : "start" === H && (G._startTime -= G.delay())), s += t
                    }
                    return this._uncache(!0)
                }
                if ("string" == typeof i) {
                    return this.addLabel(i, o)
                }
                if ("function" != typeof i) {
                    throw"Cannot add " + i + " into the timeline; it is not a tween, timeline, function, or string."
                }
                i = v.delayedCall(0, i)
            }
            if (y.prototype.add.call(this, i, o), (this._gc || this._time === this._duration) && !this._paused && this._duration < this.duration()) {
                for (m = this, F = m.rawTime() > i._startTime; m._timeline;) {
                    F && m._timeline.smoothChildTiming ? m.totalTime(m._totalTime, !0) : m._gc && m._enabled(!0, !1), m = m._timeline
                }
            }
            return this
        }, k.remove = function (c) {
            if (c instanceof D) {
                return this._remove(c, !1)
            }
            if (c instanceof Array || c && c.push && g(c)) {
                for (var a = c.length; --a > -1;) {
                    this.remove(c[a])
                }
                return this
            }
            return "string" == typeof c ? this.removeLabel(c) : this.kill(null, c)
        }, k._remove = function (c, a) {
            y.prototype._remove.call(this, c, a);
            var f = this._last;
            return f ? this._time > f._startTime + f._totalDuration / f._timeScale && (this._time = this.duration(), this._totalTime = this._totalDuration) : this._time = this._totalTime = this._duration = this._totalDuration = 0, this
        }, k.append = function (a, c) {
            return this.add(a, this._parseTimeOrLabel(null, c, !0, a))
        }, k.insert = k.insertMultiple = function (c, h, a, f) {
            return this.add(c, h || 0, a, f)
        }, k.appendMultiple = function (c, h, a, f) {
            return this.add(c, this._parseTimeOrLabel(null, h, !0, c), a, f)
        }, k.addLabel = function (a, c) {
            return this._labels[a] = this._parseTimeOrLabel(c), this
        }, k.addPause = function (c, h, a, f) {
            return this.call(d, ["{self}", h, a, f], this, c)
        }, k.removeLabel = function (a) {
            return delete this._labels[a], this
        }, k.getLabelTime = function (a) {
            return null != this._labels[a] ? this._labels[a] : -1
        }, k._parseTimeOrLabel = function (h, a, c, f) {
            var l;
            if (f instanceof D && f.timeline === this) {
                this.remove(f)
            } else {
                if (f && (f instanceof Array || f.push && g(f))) {
                    for (l = f.length; --l > -1;) {
                        f[l] instanceof D && f[l].timeline === this && this.remove(f[l])
                    }
                }
            }
            if ("string" == typeof a) {
                return this._parseTimeOrLabel(a, c && "number" == typeof h && null == this._labels[a] ? h - this.duration() : 0, c)
            }
            if (a = a || 0, "string" != typeof h || !isNaN(h) && null == this._labels[h]) {
                null == h && (h = this.duration())
            } else {
                if (l = h.indexOf("="), -1 === l) {
                    return null == this._labels[h] ? c ? this._labels[h] = this.duration() + a : a : this._labels[h] + a
                }
                a = parseInt(h.charAt(l - 1) + "1", 10) * Number(h.substr(l + 1)), h = l > 1 ? this._parseTimeOrLabel(h.substr(0, l - 1), 0, c) : this.duration()
            }
            return Number(h) + a
        }, k.seek = function (a, c) {
            return this.totalTime("number" == typeof a ? a : this._parseTimeOrLabel(a), c !== !1)
        }, k.stop = function () {
            return this.paused(!0)
        }, k.gotoAndPlay = function (a, c) {
            return this.play(a, c)
        }, k.gotoAndStop = function (a, c) {
            return this.pause(a, c)
        }, k.render = function (N, I, G) {
            this._gc && this._enabled(!0, !1);
            var O, r, L, l, M, K = this._dirty ? this.totalDuration() : this._totalDuration, h = this._time,
                H = this._startTime, F = this._timeScale, J = this._paused;
            if (N >= K ? (this._totalTime = this._time = K, this._reversed || this._hasPausedChild() || (r = !0, l = "onComplete", 0 === this._duration && (0 === N || 0 > this._rawPrevTime || this._rawPrevTime === b) && this._rawPrevTime !== N && this._first && (M = !0, this._rawPrevTime > b && (l = "onReverseComplete"))), this._rawPrevTime = this._duration || !I || N || this._rawPrevTime === N ? N : b, N = K + 0.0001) : 1e-7 > N ? (this._totalTime = this._time = 0, (0 !== h || 0 === this._duration && this._rawPrevTime !== b && (this._rawPrevTime > 0 || 0 > N && this._rawPrevTime >= 0)) && (l = "onReverseComplete", r = this._reversed), 0 > N ? (this._active = !1, this._rawPrevTime >= 0 && this._first && (M = !0), this._rawPrevTime = N) : (this._rawPrevTime = this._duration || !I || N || this._rawPrevTime === N ? N : b, N = 0, this._initted || (M = !0))) : this._totalTime = this._time = this._rawPrevTime = N, this._time !== h && this._first || G || M) {
                if (this._initted || (this._initted = !0), this._active || !this._paused && this._time !== h && N > 0 && (this._active = !0), 0 === h && this.vars.onStart && 0 !== this._time && (I || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || B)), this._time >= h) {
                    for (O = this._first; O && (L = O._next, !this._paused || J);) {
                        (O._active || O._startTime <= this._time && !O._paused && !O._gc) && (O._reversed ? O.render((O._dirty ? O.totalDuration() : O._totalDuration) - (N - O._startTime) * O._timeScale, I, G) : O.render((N - O._startTime) * O._timeScale, I, G)), O = L
                    }
                } else {
                    for (O = this._last; O && (L = O._prev, !this._paused || J);) {
                        (O._active || h >= O._startTime && !O._paused && !O._gc) && (O._reversed ? O.render((O._dirty ? O.totalDuration() : O._totalDuration) - (N - O._startTime) * O._timeScale, I, G) : O.render((N - O._startTime) * O._timeScale, I, G)), O = L
                    }
                }
                this._onUpdate && (I || (w.length && q(), this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || B))), l && (this._gc || (H === this._startTime || F !== this._timeScale) && (0 === this._time || K >= this.totalDuration()) && (r && (w.length && q(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !I && this.vars[l] && this.vars[l].apply(this.vars[l + "Scope"] || this, this.vars[l + "Params"] || B)))
            }
        }, k._hasPausedChild = function () {
            for (var a = this._first; a;) {
                if (a._paused || a instanceof E && a._hasPausedChild()) {
                    return !0
                }
                a = a._next
            }
            return !1
        }, k.getChildren = function (f, l, h, i) {
            i = i || -9999999999;
            for (var p = [], c = this._first, m = 0; c;) {
                i > c._startTime || (c instanceof v ? l !== !1 && (p[m++] = c) : (h !== !1 && (p[m++] = c), f !== !1 && (p = p.concat(c.getChildren(!0, l, h)), m = p.length))), c = c._next
            }
            return p
        }, k.getTweensOf = function (f, l) {
            var h, i, p = this._gc, c = [], m = 0;
            for (p && this._enabled(!0, !0), h = v.getTweensOf(f), i = h.length; --i > -1;) {
                (h[i].timeline === this || l && this._contains(h[i])) && (c[m++] = h[i])
            }
            return p && this._enabled(!1, !0), c
        }, k.recent = function () {
            return this._recent
        }, k._contains = function (a) {
            for (var c = a.timeline; c;) {
                if (c === this) {
                    return !0
                }
                c = c.timeline
            }
            return !1
        }, k.shiftChildren = function (c, l, a) {
            a = a || 0;
            for (var f, h = this._first, m = this._labels; h;) {
                h._startTime >= a && (h._startTime += c), h = h._next
            }
            if (l) {
                for (f in m) {
                    m[f] >= a && (m[f] += c)
                }
            }
            return this._uncache(!0)
        }, k._kill = function (c, l) {
            if (!c && !l) {
                return this._enabled(!1, !1)
            }
            for (var a = l ? this.getTweensOf(l) : this.getChildren(!0, !0, !1), f = a.length, h = !1; --f > -1;) {
                a[f]._kill(c, l) && (h = !0)
            }
            return h
        }, k.clear = function (c) {
            var f = this.getChildren(!1, !0, !0), a = f.length;
            for (this._time = this._totalTime = 0; --a > -1;) {
                f[a]._enabled(!1, !1)
            }
            return c !== !1 && (this._labels = {}), this._uncache(!0)
        }, k.invalidate = function () {
            for (var a = this._first; a;) {
                a.invalidate(), a = a._next
            }
            return D.prototype.invalidate.call(this)
        }, k._enabled = function (c, a) {
            if (c === this._gc) {
                for (var f = this._first; f;) {
                    f._enabled(c, !0), f = f._next
                }
            }
            return y.prototype._enabled.call(this, c, a)
        }, k.totalTime = function () {
            this._forcingPlayhead = !0;
            var a = D.prototype.totalTime.apply(this, arguments);
            return this._forcingPlayhead = !1, a
        }, k.duration = function (a) {
            return arguments.length ? (0 !== this.duration() && 0 !== a && this.timeScale(this._duration / a), this) : (this._dirty && this.totalDuration(), this._duration)
        }, k.totalDuration = function (c) {
            if (!arguments.length) {
                if (this._dirty) {
                    for (var l, a, f = 0, h = this._last, m = 999999999999; h;) {
                        l = h._prev, h._dirty && h.totalDuration(), h._startTime > m && this._sortChildren && !h._paused ? this.add(h, h._startTime - h._delay) : m = h._startTime, 0 > h._startTime && !h._paused && (f -= h._startTime, this._timeline.smoothChildTiming && (this._startTime += h._startTime / this._timeScale), this.shiftChildren(-h._startTime, !1, -9999999999), m = 0), a = h._startTime + h._totalDuration / h._timeScale, a > f && (f = a), h = l
                    }
                    this._duration = this._totalDuration = f, this._dirty = !1
                }
                return this._totalDuration
            }
            return 0 !== this.totalDuration() && 0 !== c && this.timeScale(this._totalDuration / c), this
        }, k.usesFrames = function () {
            for (var a = this._timeline; a._timeline;) {
                a = a._timeline
            }
            return a === D._rootFramesTimeline
        }, k.rawTime = function () {
            return this._paused ? this._totalTime : (this._timeline.rawTime() - this._startTime) * this._timeScale
        }, E
    }, !0)
}), _gsScope._gsDefine && _gsScope._gsQueue.pop()(), function (a) {
    var b = function () {
        return (_gsScope.GreenSockGlobals || _gsScope)[a]
    };
    "function" == typeof define && define.amd ? define(["TweenLite"], b) : "undefined" != typeof module && module.exports && (require("./TweenLite.js"), module.exports = b())
}("TimelineLite");
/*!
 * VERSION: beta 1.9.4
 * DATE: 2014-07-17
 * UPDATES AND DOCS AT: http://www.greensock.com
 *
 * @license Copyright (c) 2008-2014, GreenSock. All rights reserved.
 * This work is subject to the terms at http://www.greensock.com/terms_of_use.html or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 *
 * @author: Jack Doyle, jack@greensock.com
 **/
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function () {
    _gsScope._gsDefine("easing.Back", ["easing.Ease"], function (F) {
        var z, w, G, b = _gsScope.GreenSockGlobals || _gsScope, k = b.com.greensock, C = 2 * Math.PI, j = Math.PI / 2,
            x = k._class, v = function (f, a) {
                var c = x("easing." + f, function () {
                }, !0), d = c.prototype = new F;
                return d.constructor = c, d.getRatio = a, c
            }, D = F.register || function () {
            }, E = function (c, h, a, d) {
                var f = x("easing." + c, {easeOut: new h, easeIn: new a, easeInOut: new d}, !0);
                return D(f, c), f
            }, B = function (c, d, a) {
                this.t = c, this.v = d, a && (this.next = a, a.prev = this, this.c = a.v - d, this.gap = a.t - c)
            }, g = function (f, a) {
                var c = x("easing." + f, function (h) {
                    this._p1 = h || 0 === h ? h : 1.70158, this._p2 = 1.525 * this._p1
                }, !0), d = c.prototype = new F;
                return d.constructor = c, d.getRatio = a, d.config = function (h) {
                    return new c(h)
                }, c
            }, y = E("Back", g("BackOut", function (a) {
                return (a -= 1) * a * ((this._p1 + 1) * a + this._p1) + 1
            }), g("BackIn", function (a) {
                return a * a * ((this._p1 + 1) * a - this._p1)
            }), g("BackInOut", function (a) {
                return 1 > (a *= 2) ? 0.5 * a * a * ((this._p2 + 1) * a - this._p2) : 0.5 * ((a -= 2) * a * ((this._p2 + 1) * a + this._p2) + 2)
            })), q = x("easing.SlowMo", function (c, d, a) {
                d = d || 0 === d ? d : 0.7, null == c ? c = 0.7 : c > 1 && (c = 1), this._p = 1 !== c ? d : 0, this._p1 = (1 - c) / 2, this._p2 = c, this._p3 = this._p1 + this._p2, this._calcEnd = a === !0
            }, !0), A = q.prototype = new F;
        return A.constructor = q, A.getRatio = function (a) {
            var c = a + (0.5 - a) * this._p;
            return this._p1 > a ? this._calcEnd ? 1 - (a = 1 - a / this._p1) * a : c - (a = 1 - a / this._p1) * a * a * a * c : a > this._p3 ? this._calcEnd ? 1 - (a = (a - this._p3) / this._p1) * a : c + (a - c) * (a = (a - this._p3) / this._p1) * a * a * a : this._calcEnd ? 1 : c
        }, q.ease = new q(0.7, 0.7), A.config = q.config = function (c, d, a) {
            return new q(c, d, a)
        }, z = x("easing.SteppedEase", function (a) {
            a = a || 1, this._p1 = 1 / a, this._p2 = a + 1
        }, !0), A = z.prototype = new F, A.constructor = z, A.getRatio = function (a) {
            return 0 > a ? a = 0 : a >= 1 && (a = 0.999999999), (this._p2 * a >> 0) * this._p1
        }, A.config = z.config = function (a) {
            return new z(a)
        }, w = x("easing.RoughEase", function (P) {
            P = P || {};
            for (var L, U, c, I, R, H, M = P.taper || "none", K = [], S = 0, T = 0 | (P.points || 20), t = T, O = P.randomize !== !1, J = P.clamp === !0, Q = P.template instanceof F ? P.template : null, N = "number" == typeof P.strength ? 0.4 * P.strength : 0.4; --t > -1;) {
                L = O ? Math.random() : 1 / T * t, U = Q ? Q.getRatio(L) : L, "none" === M ? c = N : "out" === M ? (I = 1 - L, c = I * I * N) : "in" === M ? c = L * L * N : 0.5 > L ? (I = 2 * L, c = 0.5 * I * I * N) : (I = 2 * (1 - L), c = 0.5 * I * I * N), O ? U += Math.random() * c - 0.5 * c : t % 2 ? U += 0.5 * c : U -= 0.5 * c, J && (U > 1 ? U = 1 : 0 > U && (U = 0)), K[S++] = {
                    x: L,
                    y: U
                }
            }
            for (K.sort(function (a, d) {
                return a.x - d.x
            }), H = new B(1, 1, null), t = T; --t > -1;) {
                R = K[t], H = new B(R.x, R.y, H)
            }
            this._prev = new B(0, 0, 0 !== H.t ? H : H.next)
        }, !0), A = w.prototype = new F, A.constructor = w, A.getRatio = function (a) {
            var c = this._prev;
            if (a > c.t) {
                for (; c.next && a >= c.t;) {
                    c = c.next
                }
                c = c.prev
            } else {
                for (; c.prev && c.t >= a;) {
                    c = c.prev
                }
            }
            return this._prev = c, c.v + (a - c.t) / c.gap * c.c
        }, A.config = function (a) {
            return new w(a)
        }, w.ease = new w, E("Bounce", v("BounceOut", function (a) {
            return 1 / 2.75 > a ? 7.5625 * a * a : 2 / 2.75 > a ? 7.5625 * (a -= 1.5 / 2.75) * a + 0.75 : 2.5 / 2.75 > a ? 7.5625 * (a -= 2.25 / 2.75) * a + 0.9375 : 7.5625 * (a -= 2.625 / 2.75) * a + 0.984375
        }), v("BounceIn", function (a) {
            return 1 / 2.75 > (a = 1 - a) ? 1 - 7.5625 * a * a : 2 / 2.75 > a ? 1 - (7.5625 * (a -= 1.5 / 2.75) * a + 0.75) : 2.5 / 2.75 > a ? 1 - (7.5625 * (a -= 2.25 / 2.75) * a + 0.9375) : 1 - (7.5625 * (a -= 2.625 / 2.75) * a + 0.984375)
        }), v("BounceInOut", function (a) {
            var c = 0.5 > a;
            return a = c ? 1 - 2 * a : 2 * a - 1, a = 1 / 2.75 > a ? 7.5625 * a * a : 2 / 2.75 > a ? 7.5625 * (a -= 1.5 / 2.75) * a + 0.75 : 2.5 / 2.75 > a ? 7.5625 * (a -= 2.25 / 2.75) * a + 0.9375 : 7.5625 * (a -= 2.625 / 2.75) * a + 0.984375, c ? 0.5 * (1 - a) : 0.5 * a + 0.5
        })), E("Circ", v("CircOut", function (a) {
            return Math.sqrt(1 - (a -= 1) * a)
        }), v("CircIn", function (a) {
            return -(Math.sqrt(1 - a * a) - 1)
        }), v("CircInOut", function (a) {
            return 1 > (a *= 2) ? -0.5 * (Math.sqrt(1 - a * a) - 1) : 0.5 * (Math.sqrt(1 - (a -= 2) * a) + 1)
        })), G = function (f, a, c) {
            var d = x("easing." + f, function (i, l) {
                this._p1 = i || 1, this._p2 = l || c, this._p3 = this._p2 / C * (Math.asin(1 / this._p1) || 0)
            }, !0), h = d.prototype = new F;
            return h.constructor = d, h.getRatio = a, h.config = function (i, l) {
                return new d(i, l)
            }, d
        }, E("Elastic", G("ElasticOut", function (a) {
            return this._p1 * Math.pow(2, -10 * a) * Math.sin((a - this._p3) * C / this._p2) + 1
        }, 0.3), G("ElasticIn", function (a) {
            return -(this._p1 * Math.pow(2, 10 * (a -= 1)) * Math.sin((a - this._p3) * C / this._p2))
        }, 0.3), G("ElasticInOut", function (a) {
            return 1 > (a *= 2) ? -0.5 * this._p1 * Math.pow(2, 10 * (a -= 1)) * Math.sin((a - this._p3) * C / this._p2) : 0.5 * this._p1 * Math.pow(2, -10 * (a -= 1)) * Math.sin((a - this._p3) * C / this._p2) + 1
        }, 0.45)), E("Expo", v("ExpoOut", function (a) {
            return 1 - Math.pow(2, -10 * a)
        }), v("ExpoIn", function (a) {
            return Math.pow(2, 10 * (a - 1)) - 0.001
        }), v("ExpoInOut", function (a) {
            return 1 > (a *= 2) ? 0.5 * Math.pow(2, 10 * (a - 1)) : 0.5 * (2 - Math.pow(2, -10 * (a - 1)))
        })), E("Sine", v("SineOut", function (a) {
            return Math.sin(a * j)
        }), v("SineIn", function (a) {
            return -Math.cos(a * j) + 1
        }), v("SineInOut", function (a) {
            return -0.5 * (Math.cos(Math.PI * a) - 1)
        })), x("easing.EaseLookup", {
            find: function (a) {
                return F.map[a]
            }
        }, !0), D(b.SlowMo, "SlowMo", "ease,"), D(w, "RoughEase", "ease,"), D(z, "SteppedEase", "ease,"), y
    }, !0)
}), _gsScope._gsDefine && _gsScope._gsQueue.pop()();
/*!
 * VERSION: 1.14.2
 * DATE: 2014-10-28
 * UPDATES AND DOCS AT: http://www.greensock.com
 *
 * @license Copyright (c) 2008-2014, GreenSock. All rights reserved.
 * This work is subject to the terms at http://www.greensock.com/terms_of_use.html or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 *
 * @author: Jack Doyle, jack@greensock.com
 */
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function () {
    _gsScope._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin", "TweenLite"], function (au, aN) {
        var aI, aw, av, aB, aT = function () {
            au.call(this, "css"), this._overwriteProps.length = 0, this.setRatio = aT.prototype.setRatio
        }, aA = {}, aF = aT.prototype = new au("css");
        aF.constructor = aT, aT.version = "1.14.2", aT.API = 2, aT.defaultTransformPerspective = 0, aT.defaultSkewType = "compensated", aF = "px", aT.suffixMap = {
            top: aF,
            right: aF,
            bottom: aF,
            left: aF,
            width: aF,
            height: aF,
            fontSize: aF,
            padding: aF,
            margin: aF,
            perspective: aF,
            lineHeight: ""
        };
        var aJ, at, aM, az, aU, aP, aO = /(?:\d|\-\d|\.\d|\-\.\d)+/g,
            aC = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
            aL = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi, ar = /(?![+-]?\d*\.?\d+|e[+-]\d+)[^0-9]/g,
            ao = /(?:\d|\-|\+|=|#|\.)*/g, ap = /opacity *= *([^)]*)/i, a1 = /opacity:([^;]*)/i,
            aq = /alpha\(opacity *=.+?\)/i, aS = /^(rgb|hsl)/, a6 = /([A-Z])/g, a3 = /-([a-z])/gi,
            a4 = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi, bq = function (a, b) {
                return b.toUpperCase()
            }, aG = /(?:Left|Right|Width)/i, a7 = /(M11|M12|M21|M22)=[\d\-\.e]+/gi,
            bs = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i, bn = /,(?=[^\)]*(?:\(|$))/gi,
            bb = Math.PI / 180, bc = 180 / Math.PI, a9 = {}, an = document, aX = an.createElement("div"),
            bg = an.createElement("img"), bm = aT._internals = {_specialProps: aA}, bl = navigator.userAgent,
            aW = function () {
                var b, c = bl.indexOf("Android"), a = an.createElement("div");
                return aM = -1 !== bl.indexOf("Safari") && -1 === bl.indexOf("Chrome") && (-1 === c || Number(bl.substr(c + 8, 1)) > 3), aU = aM && 6 > Number(bl.substr(bl.indexOf("Version/") + 8, 1)), az = -1 !== bl.indexOf("Firefox"), (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(bl) || /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(bl)) && (aP = parseFloat(RegExp.$1)), a.innerHTML = "<a style='top:1px;opacity:.55;'>a</a>", b = a.getElementsByTagName("a")[0], b ? /^0.55/.test(b.style.opacity) : !1
            }(), br = function (a) {
                return ap.test("string" == typeof a ? a : (a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1
            }, a0 = function (a) {
                window.console && console.log(a)
            }, aH = "", aY = "", aZ = function (b, f) {
                f = f || aX;
                var a, d, c = f.style;
                if (void 0 !== c[b]) {
                    return b
                }
                for (b = b.charAt(0).toUpperCase() + b.substr(1), a = ["O", "Moz", "ms", "Ms", "Webkit"], d = 5; --d > -1 && void 0 === c[a[d] + b];) {
                }
                return d >= 0 ? (aY = 3 === d ? "ms" : a[d], aH = "-" + aY.toLowerCase() + "-", aY + b) : null
            }, ay = an.defaultView ? an.defaultView.getComputedStyle : function () {
            }, bj = aT.getStyle = function (b, f, a, d, c) {
                var g;
                return aW || "opacity" !== f ? (!d && b.style[f] ? g = b.style[f] : (a = a || ay(b)) ? g = a[f] || a.getPropertyValue(f) || a.getPropertyValue(f.replace(a6, "-$1").toLowerCase()) : b.currentStyle && (g = b.currentStyle[f]), null == c || g && "none" !== g && "auto" !== g && "auto auto" !== g ? g : c) : br(b)
            }, bk = bm.convertToPixels = function (w, j, a, x, d) {
                if ("px" === x || !x) {
                    return a
                }
                if ("auto" === x || !a) {
                    return 0
                }
                var c, g, k, v = aG.test(j), m = w, b = aX.style, q = 0 > a;
                if (q && (a = -a), "%" === x && -1 !== j.indexOf("border")) {
                    c = a / 100 * (v ? w.clientWidth : w.clientHeight)
                } else {
                    if (b.cssText = "border:0 solid red;position:" + bj(w, "position") + ";line-height:0;", "%" !== x && m.appendChild) {
                        b[v ? "borderLeftWidth" : "borderTopWidth"] = a + x
                    } else {
                        if (m = w.parentNode || an.body, g = m._gsCache, k = aN.ticker.frame, g && v && g.time === k) {
                            return g.width * a / 100
                        }
                        b[v ? "width" : "height"] = a + x
                    }
                    m.appendChild(aX), c = parseFloat(aX[v ? "offsetWidth" : "offsetHeight"]), m.removeChild(aX), v && "%" === x && aT.cacheWidths !== !1 && (g = m._gsCache = m._gsCache || {}, g.time = k, g.width = 100 * (c / a)), 0 !== c || d || (c = bk(w, j, a, x, !0))
                }
                return q ? -c : c
            }, a5 = bm.calculateOffset = function (b, f, a) {
                if ("absolute" !== bj(b, "position", a)) {
                    return 0
                }
                var d = "left" === f ? "Left" : "Top", c = bj(b, "margin" + d, a);
                return b["offset" + d] - (bk(b, f, parseFloat(c), c.replace(ao, "")) || 0)
            }, aV = function (b, f) {
                var a, d, c = {};
                if (f = f || ay(b, null)) {
                    if (a = f.length) {
                        for (; --a > -1;) {
                            c[f[a].replace(a3, bq)] = f.getPropertyValue(f[a])
                        }
                    } else {
                        for (a in f) {
                            c[a] = f[a]
                        }
                    }
                } else {
                    if (f = b.currentStyle || b.style) {
                        for (a in f) {
                            "string" == typeof a && void 0 === c[a] && (c[a.replace(a3, bq)] = f[a])
                        }
                    }
                }
                return aW || (c.opacity = br(b)), d = bD(b, f, !1), c.rotation = d.rotation, c.skewX = d.skewX, c.scaleX = d.scaleX, c.scaleY = d.scaleY, c.x = d.x, c.y = d.y, a2 && (c.z = d.z, c.rotationX = d.rotationX, c.rotationY = d.rotationY, c.scaleZ = d.scaleZ), c.filters && delete c.filters, c
            }, bz = function (p, k, g, b, q) {
                var d, m, c, f = {}, j = p.style;
                for (m in g) {
                    "cssText" !== m && "length" !== m && isNaN(m) && (k[m] !== (d = g[m]) || q && q[m]) && -1 === m.indexOf("Origin") && ("number" == typeof d || "string" == typeof d) && (f[m] = "auto" !== d || "left" !== m && "top" !== m ? "" !== d && "auto" !== d && "none" !== d || "string" != typeof k[m] || "" === k[m].replace(ar, "") ? d : 0 : a5(p, m), void 0 !== j[m] && (c = new bC(j, m, j[m], c)))
                }
                if (b) {
                    for (m in b) {
                        "className" !== m && (f[m] = b[m])
                    }
                }
                return {difs: f, firstMPT: c}
            }, bd = {width: ["Left", "Right"], height: ["Top", "Bottom"]},
            bf = ["marginLeft", "marginRight", "marginTop", "marginBottom"], bo = function (b, f, a) {
                var d = parseFloat("width" === f ? b.offsetWidth : b.offsetHeight), c = bd[f], g = c.length;
                for (a = a || ay(b, null); --g > -1;) {
                    d -= parseFloat(bj(b, "padding" + c[g], a, !0)) || 0, d -= parseFloat(bj(b, "border" + c[g] + "Width", a, !0)) || 0
                }
                return d
            }, ab = function (b, f) {
                (null == b || "" === b || "auto" === b || "auto auto" === b) && (b = "0 0");
                var a = b.split(" "), d = -1 !== b.indexOf("left") ? "0%" : -1 !== b.indexOf("right") ? "100%" : a[0],
                    c = -1 !== b.indexOf("top") ? "0%" : -1 !== b.indexOf("bottom") ? "100%" : a[1];
                return null == c ? c = "0" : "center" === c && (c = "50%"), ("center" === d || isNaN(parseFloat(d)) && -1 === (d + "").indexOf("=")) && (d = "50%"), f && (f.oxp = -1 !== d.indexOf("%"), f.oyp = -1 !== c.indexOf("%"), f.oxr = "=" === d.charAt(1), f.oyr = "=" === c.charAt(1), f.ox = parseFloat(d.replace(ar, "")), f.oy = parseFloat(c.replace(ar, ""))), d + " " + c + (a.length > 2 ? " " + a[2] : "")
            }, aD = function (a, b) {
                return "string" == typeof a && "=" === a.charAt(1) ? parseInt(a.charAt(0) + "1", 10) * parseFloat(a.substr(2)) : parseFloat(a) - parseFloat(b)
            }, bF = function (a, b) {
                return null == a ? b : "string" == typeof a && "=" === a.charAt(1) ? parseInt(a.charAt(0) + "1", 10) * parseFloat(a.substr(2)) + b : parseFloat(a)
            }, bx = function (k, h, g, b) {
                var m, d, j, c, f = 0.000001;
                return null == k ? c = h : "number" == typeof k ? c = k : (m = 360, d = k.split("_"), j = Number(d[0].replace(ar, "")) * (-1 === k.indexOf("rad") ? 1 : bc) - ("=" === k.charAt(1) ? 0 : h), d.length && (b && (b[g] = h + j), -1 !== k.indexOf("short") && (j %= m, j !== j % (m / 2) && (j = 0 > j ? j + m : j - m)), -1 !== k.indexOf("_cw") && 0 > j ? j = (j + 9999999999 * m) % m - (0 | j / m) * m : -1 !== k.indexOf("ccw") && j > 0 && (j = (j - 9999999999 * m) % m - (0 | j / m) * m)), c = h + j), f > c && c > -f && (c = 0), c
            }, bh = {
                aqua: [0, 255, 255],
                lime: [0, 255, 0],
                silver: [192, 192, 192],
                black: [0, 0, 0],
                maroon: [128, 0, 0],
                teal: [0, 128, 128],
                blue: [0, 0, 255],
                navy: [0, 0, 128],
                white: [255, 255, 255],
                fuchsia: [255, 0, 255],
                olive: [128, 128, 0],
                yellow: [255, 255, 0],
                orange: [255, 165, 0],
                gray: [128, 128, 128],
                purple: [128, 0, 128],
                green: [0, 128, 0],
                red: [255, 0, 0],
                pink: [255, 192, 203],
                cyan: [0, 255, 255],
                transparent: [255, 255, 255, 0]
            }, bu = function (b, c, a) {
                return b = 0 > b ? b + 1 : b > 1 ? b - 1 : b, 0 | 255 * (1 > 6 * b ? c + 6 * (a - c) * b : 0.5 > b ? a : 2 > 3 * b ? c + 6 * (a - c) * (2 / 3 - b) : c) + 0.5
            }, aK = aT.parseColor = function (d) {
                var h, c, g, f, j, b;
                return d && "" !== d ? "number" == typeof d ? [d >> 16, 255 & d >> 8, 255 & d] : ("," === d.charAt(d.length - 1) && (d = d.substr(0, d.length - 1)), bh[d] ? bh[d] : "#" === d.charAt(0) ? (4 === d.length && (h = d.charAt(1), c = d.charAt(2), g = d.charAt(3), d = "#" + h + h + c + c + g + g), d = parseInt(d.substr(1), 16), [d >> 16, 255 & d >> 8, 255 & d]) : "hsl" === d.substr(0, 3) ? (d = d.match(aO), f = Number(d[0]) % 360 / 360, j = Number(d[1]) / 100, b = Number(d[2]) / 100, c = 0.5 >= b ? b * (j + 1) : b + j - b * j, h = 2 * b - c, d.length > 3 && (d[3] = Number(d[3])), d[0] = bu(f + 1 / 3, h, c), d[1] = bu(f, h, c), d[2] = bu(f - 1 / 3, h, c), d) : (d = d.match(aO) || bh.transparent, d[0] = Number(d[0]), d[1] = Number(d[1]), d[2] = Number(d[2]), d.length > 3 && (d[3] = Number(d[3])), d)) : bh.black
            }, bE = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#.+?\\b";
        for (aF in bh) {
            bE += "|" + aF + "\\b"
        }
        bE = RegExp(bE + ")", "gi");
        var a8 = function (w, p, j, b) {
            if (null == w) {
                return function (a) {
                    return a
                }
            }
            var x, d = p ? (w.match(bE) || [""])[0] : "", q = w.split(d).join("").match(aL) || [],
                c = w.substr(0, w.indexOf(q[0])), g = ")" === w.charAt(w.length - 1) ? ")" : "",
                k = -1 !== w.indexOf(" ") ? " " : ",", v = q.length, m = v > 0 ? q[0].replace(aO, "") : "";
            return v ? x = p ? function (f) {
                var i, h, a, l;
                if ("number" == typeof f) {
                    f += m
                } else {
                    if (b && bn.test(f)) {
                        for (l = f.replace(bn, "|").split("|"), a = 0; l.length > a; a++) {
                            l[a] = x(l[a])
                        }
                        return l.join(",")
                    }
                }
                if (i = (f.match(bE) || [d])[0], h = f.split(i).join("").match(aL) || [], a = h.length, v > a--) {
                    for (; v > ++a;) {
                        h[a] = j ? h[0 | (a - 1) / 2] : q[a]
                    }
                }
                return c + h.join(k) + k + i + g + (-1 !== f.indexOf("inset") ? " inset" : "")
            } : function (a) {
                var h, i, f;
                if ("number" == typeof a) {
                    a += m
                } else {
                    if (b && bn.test(a)) {
                        for (i = a.replace(bn, "|").split("|"), f = 0; i.length > f; f++) {
                            i[f] = x(i[f])
                        }
                        return i.join(",")
                    }
                }
                if (h = a.match(aL) || [], f = h.length, v > f--) {
                    for (; v > ++f;) {
                        h[f] = j ? h[0 | (f - 1) / 2] : q[f]
                    }
                }
                return c + h.join(k) + g
            } : function (a) {
                return a
            }
        }, aQ = function (a) {
            return a = a.split(","), function (k, g, b, p, d, m, c) {
                var f, j = (g + "").split(" ");
                for (c = {}, f = 0; 4 > f; f++) {
                    c[a[f]] = j[f] = j[f] || j[(f - 1) / 2 >> 0]
                }
                return p.parse(k, c, d, m)
            }
        }, bC = (bm._setPluginRatio = function (k) {
            this.plugin.setRatio(k);
            for (var h, g, b, m, d = this.data, j = d.proxy, c = d.firstMPT, f = 0.000001; c;) {
                h = j[c.v], c.r ? h = Math.round(h) : f > h && h > -f && (h = 0), c.t[c.p] = h, c = c._next
            }
            if (d.autoRotate && (d.autoRotate.rotation = j.rotation), 1 === k) {
                for (c = d.firstMPT; c;) {
                    if (g = c.t, g.type) {
                        if (1 === g.type) {
                            for (m = g.xs0 + g.s + g.xs1, b = 1; g.l > b; b++) {
                                m += g["xn" + b] + g["xs" + (b + 1)]
                            }
                            g.e = m
                        }
                    } else {
                        g.e = g.s + g.xs0
                    }
                    c = c._next
                }
            }
        }, function (b, f, a, d, c) {
            this.t = b, this.p = f, this.v = a, this.r = c, d && (d._prev = this, this._next = d)
        }), al = (bm._parseToProxy = function (D, x, q, b, E, k) {
            var A, j, m, v, C, w = b, g = {}, B = {}, z = q._transform, y = a9;
            for (q._transform = null, a9 = x, b = C = q.parse(D, x, b, E), a9 = y, k && (q._transform = z, w && (w._prev = null, w._prev && (w._prev._next = null))); b && b !== w;) {
                if (1 >= b.type && (j = b.p, B[j] = b.s + b.c, g[j] = b.s, k || (v = new bC(b, "s", j, v, b.r), b.c = 0), 1 === b.type)) {
                    for (A = b.l; --A > 0;) {
                        m = "xn" + A, j = b.p + "_" + m, B[j] = b.data[m], g[j] = b[m], k || (v = new bC(b, m, j, v, b.rxp[m]))
                    }
                }
                b = b._next
            }
            return {proxy: g, end: B, firstMPT: v, pt: C}
        }, bm.CSSPropTween = function (q, k, b, v, m, d, g, i, n, j, c) {
            this.t = q, this.p = k, this.s = b, this.c = v, this.n = g || k, q instanceof al || aB.push(this.n), this.r = i, this.type = d || 0, n && (this.pr = n, aI = !0), this.b = void 0 === j ? b : j, this.e = void 0 === c ? b + v : c, m && (this._next = m, m._prev = this)
        }), aa = aT.parseComplex = function (E, V, N, H, F, K, X, J, L, D) {
            N = N || K || "", X = new al(E, V, 0, 0, X, D ? 2 : 1, null, !1, J, N, H), H += "";
            var U, I, Y, W, Q, B, q, z, b, A, j, d, h = N.split(", ").join(",").split(" "),
                G = H.split(", ").join(",").split(" "), M = h.length, m = aJ !== !1;
            for ((-1 !== H.indexOf(",") || -1 !== N.indexOf(",")) && (h = h.join(" ").replace(bn, ", ").split(" "), G = G.join(" ").replace(bn, ", ").split(" "), M = h.length), M !== G.length && (h = (K || "").split(" "), M = h.length), X.plugin = L, X.setRatio = D, U = 0; M > U; U++) {
                if (W = h[U], Q = G[U], z = parseFloat(W), z || 0 === z) {
                    X.appendXtra("", z, aD(Q, z), Q.replace(aC, ""), m && -1 !== Q.indexOf("px"), !0)
                } else {
                    if (F && ("#" === W.charAt(0) || bh[W] || aS.test(W))) {
                        d = "," === Q.charAt(Q.length - 1) ? ")," : ")", W = aK(W), Q = aK(Q), b = W.length + Q.length > 6, b && !aW && 0 === Q[3] ? (X["xs" + X.l] += X.l ? " transparent" : "transparent", X.e = X.e.split(G[U]).join("transparent")) : (aW || (b = !1), X.appendXtra(b ? "rgba(" : "rgb(", W[0], Q[0] - W[0], ",", !0, !0).appendXtra("", W[1], Q[1] - W[1], ",", !0).appendXtra("", W[2], Q[2] - W[2], b ? "," : d, !0), b && (W = 4 > W.length ? 1 : W[3], X.appendXtra("", W, (4 > Q.length ? 1 : Q[3]) - W, d, !1)))
                    } else {
                        if (B = W.match(aO)) {
                            if (q = Q.match(aC), !q || q.length !== B.length) {
                                return X
                            }
                            for (Y = 0, I = 0; B.length > I; I++) {
                                j = B[I], A = W.indexOf(j, Y), X.appendXtra(W.substr(Y, A - Y), Number(j), aD(q[I], j), "", m && "px" === W.substr(A + j.length, 2), 0 === I), Y = A + j.length
                            }
                            X["xs" + X.l] += W.substr(Y)
                        } else {
                            X["xs" + X.l] += X.l ? " " + W : W
                        }
                    }
                }
            }
            if (-1 !== H.indexOf("=") && X.data) {
                for (d = X.xs0 + X.data.s, U = 1; X.l > U; U++) {
                    d += X["xs" + U] + X.data["xn" + U]
                }
                X.e = d + X["xs" + U]
            }
            return X.l || (X.type = -1, X.xs0 = X.e), X.xfirst || X
        }, ax = 9;
        for (aF = al.prototype, aF.l = aF.pr = 0; --ax > 0;) {
            aF["xn" + ax] = 0, aF["xs" + ax] = ""
        }
        aF.xs0 = "", aF._next = aF._prev = aF.xfirst = aF.data = aF.plugin = aF.setRatio = aF.rxp = null, aF.appendXtra = function (d, h, c, g, f, k) {
            var b = this, j = b.l;
            return b["xs" + j] += k && j ? " " + d : d || "", c || 0 === j || b.plugin ? (b.l++, b.type = b.setRatio ? 2 : 1, b["xs" + b.l] = g || "", j > 0 ? (b.data["xn" + j] = h + c, b.rxp["xn" + j] = f, b["xn" + j] = h, b.plugin || (b.xfirst = new al(b, "xn" + j, h, c, b.xfirst || b, 0, b.n, f, b.pr), b.xfirst.xs0 = 0), b) : (b.data = {s: h + c}, b.rxp = {}, b.s = h, b.c = c, b.r = f, b)) : (b["xs" + j] += h + (g || ""), b)
        };
        var aj = function (a, b) {
            b = b || {}, this.p = b.prefix ? aZ(a) || a : a, aA[a] = aA[this.p] = this, this.format = b.formatter || a8(b.defaultValue, b.color, b.collapsible, b.multi), b.parser && (this.parse = b.parser), this.clrs = b.color, this.multi = b.multi, this.keyword = b.keyword, this.dflt = b.defaultValue, this.pr = b.priority || 0
        }, bw = bm._registerComplexSpecialProp = function (d, h, c) {
            "object" != typeof h && (h = {parser: c});
            var g, f, j = d.split(","), b = h.defaultValue;
            for (c = c || [b], g = 0; j.length > g; g++) {
                h.prefix = 0 === g && h.prefix, h.defaultValue = c[g] || b, f = new aj(j[g], h)
            }
        }, bv = function (a) {
            if (!aA[a]) {
                var b = a.charAt(0).toUpperCase() + a.substr(1) + "Plugin";
                bw(a, {
                    parser: function (g, f, m, k, o, d, c) {
                        var j = (_gsScope.GreenSockGlobals || _gsScope).com.greensock.plugins[b];
                        return j ? (j._cssRegister(), aA[m].parse(g, f, m, k, o, d, c)) : (a0("Error: " + b + " js file not loaded."), o)
                    }
                })
            }
        };
        aF = aj.prototype, aF.parseComplex = function (y, v, k, b, z, g) {
            var w, d, j, m, x, q, c = this.keyword;
            if (this.multi && (bn.test(k) || bn.test(v) ? (d = v.replace(bn, "|").split("|"), j = k.replace(bn, "|").split("|")) : c && (d = [v], j = [k])), j) {
                for (m = j.length > d.length ? j.length : d.length, w = 0; m > w; w++) {
                    v = d[w] = d[w] || this.dflt, k = j[w] = j[w] || this.dflt, c && (x = v.indexOf(c), q = k.indexOf(c), x !== q && (k = -1 === q ? j : d, k[w] += " " + c))
                }
                v = d.join(", "), k = j.join(", ")
            }
            return aa(y, this.p, v, k, this.clrs, this.dflt, b, this.pr, z, g)
        }, aF.parse = function (d, g, c, f, h, b) {
            return this.parseComplex(d.style, this.format(bj(d, this.p, av, !1, this.dflt)), this.format(g), h, b)
        }, aT.registerSpecialProp = function (b, c, a) {
            bw(b, {
                parser: function (g, i, h, k, f, j) {
                    var d = new al(g, h, 0, 0, f, 2, h, !1, a);
                    return d.plugin = j, d.setRatio = c(g, i, k._tween, h), d
                }, priority: a
            })
        };
        var am,
            bA = "scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","),
            bH = aZ("transform"), bB = aH + "transform", ag = aZ("transformOrigin"), a2 = null !== aZ("perspective"),
            aR = bm.Transform = function () {
                this.skewY = 0
            }, bI = window.SVGElement, ah = function (b, f, a) {
                var d, c = an.createElementNS("http://www.w3.org/2000/svg", b), g = /([a-z])([A-Z])/g;
                for (d in a) {
                    c.setAttributeNS(null, d.replace(g, "$1-$2").toLowerCase(), a[d])
                }
                return f.appendChild(c), c
            }, ba = document.documentElement, ac = function () {
                var b, d, a, c = aP || /Android/i.test(bl) && !window.chrome;
                return an.createElementNS && !c && (b = ah("svg", ba), d = ah("rect", b, {
                    width: 100,
                    height: 50,
                    x: 100
                }), a = d.getBoundingClientRect().left, d.style[ag] = "50% 50%", d.style[bH] = "scale(0.5,0.5)", c = a === d.getBoundingClientRect().left, ba.removeChild(b)), c
            }(), bp = function (b, d, a) {
                var c = b.getBBox();
                d = ab(d).split(" "), a.xOrigin = (-1 !== d[0].indexOf("%") ? parseFloat(d[0]) / 100 * c.width : parseFloat(d[0])) + c.x, a.yOrigin = (-1 !== d[1].indexOf("%") ? parseFloat(d[1]) / 100 * c.height : parseFloat(d[1])) + c.y
            }, bD = bm.getTransform = function (b9, cn, cj, ca) {
                if (b9._gsTransform && cj && !ca) {
                    return b9._gsTransform
                }
                var ce, cd, cg, ck, b8, cm, cc, cs, cp, co, cf, cl, b7, b3 = cj ? b9._gsTransform || new aR : new aR,
                    b5 = 0 > b3.scaleX, bJ = 0.00002, b6 = 100000, cq = 179.99, bN = cq * bb,
                    bK = a2 ? parseFloat(bj(b9, ag, cn, !1, "0 0 0").split(" ")[2]) || b3.zOrigin || 0 : 0,
                    bL = parseFloat(aT.defaultTransformPerspective) || 0;
                if (bH ? ce = bj(b9, bB, cn, !0) : b9.currentStyle && (ce = b9.currentStyle.filter.match(a7), ce = ce && 4 === ce.length ? [ce[0].substr(4), Number(ce[2].substr(4)), Number(ce[1].substr(4)), ce[3].substr(4), b3.x || 0, b3.y || 0].join(",") : ""), ce && "none" !== ce && "matrix(1, 0, 0, 1, 0, 0)" !== ce) {
                    for (cd = (ce || "").match(/(?:\-|\b)[\d\-\.e]+\b/gi) || [], cg = cd.length; --cg > -1;) {
                        ck = Number(cd[cg]), cd[cg] = (b8 = ck - (ck |= 0)) ? (0 | b8 * b6 + (0 > b8 ? -0.5 : 0.5)) / b6 + ck : ck
                    }
                    if (16 === cd.length) {
                        var bW = cd[8], ch = cd[9], bY = cd[10], bV = cd[12], bO = cd[13], b2 = cd[14];
                        if (b3.zOrigin && (b2 = -b3.zOrigin, bV = bW * b2 - cd[12], bO = ch * b2 - cd[13], b2 = bY * b2 + b3.zOrigin - cd[14]), !cj || ca || null == b3.rotationX) {
                            var L, bR, bU, bT, H, bX, be, ci = cd[0], O = cd[1], ae = cd[2], cb = cd[3], bS = cd[4],
                                bM = cd[5], s = cd[6], b0 = cd[7], bP = cd[11], bQ = Math.atan2(s, bY),
                                M = -bN > bQ || bQ > bN;
                            b3.rotationX = bQ * bc, bQ && (bT = Math.cos(-bQ), H = Math.sin(-bQ), L = bS * bT + bW * H, bR = bM * bT + ch * H, bU = s * bT + bY * H, bW = bS * -H + bW * bT, ch = bM * -H + ch * bT, bY = s * -H + bY * bT, bP = b0 * -H + bP * bT, bS = L, bM = bR, s = bU), bQ = Math.atan2(bW, ci), b3.rotationY = bQ * bc, bQ && (bX = -bN > bQ || bQ > bN, bT = Math.cos(-bQ), H = Math.sin(-bQ), L = ci * bT - bW * H, bR = O * bT - ch * H, bU = ae * bT - bY * H, ch = O * H + ch * bT, bY = ae * H + bY * bT, bP = cb * H + bP * bT, ci = L, O = bR, ae = bU), bQ = Math.atan2(O, bM), b3.rotation = bQ * bc, bQ && (be = -bN > bQ || bQ > bN, bT = Math.cos(-bQ), H = Math.sin(-bQ), ci = ci * bT + bS * H, bR = O * bT + bM * H, bM = O * -H + bM * bT, s = ae * -H + s * bT, O = bR), be && M ? b3.rotation = b3.rotationX = 0 : be && bX ? b3.rotation = b3.rotationY = 0 : bX && M && (b3.rotationY = b3.rotationX = 0), b3.scaleX = (0 | Math.sqrt(ci * ci + O * O) * b6 + 0.5) / b6, b3.scaleY = (0 | Math.sqrt(bM * bM + ch * ch) * b6 + 0.5) / b6, b3.scaleZ = (0 | Math.sqrt(s * s + bY * bY) * b6 + 0.5) / b6, b3.skewX = 0, b3.perspective = bP ? 1 / (0 > bP ? -bP : bP) : 0, b3.x = bV, b3.y = bO, b3.z = b2
                        }
                    } else {
                        if (!(a2 && !ca && cd.length && b3.x === cd[4] && b3.y === cd[5] && (b3.rotationX || b3.rotationY) || void 0 !== b3.x && "none" === bj(b9, "display", cn))) {
                            var cr = cd.length >= 6, b1 = cr ? cd[0] : 1, b4 = cd[1] || 0, bZ = cd[2] || 0,
                                a = cr ? cd[3] : 1;
                            b3.x = cd[4] || 0, b3.y = cd[5] || 0, cm = Math.sqrt(b1 * b1 + b4 * b4), cc = Math.sqrt(a * a + bZ * bZ), cs = b1 || b4 ? Math.atan2(b4, b1) * bc : b3.rotation || 0, cp = bZ || a ? Math.atan2(bZ, a) * bc + cs : b3.skewX || 0, co = cm - Math.abs(b3.scaleX || 0), cf = cc - Math.abs(b3.scaleY || 0), Math.abs(cp) > 90 && 270 > Math.abs(cp) && (b5 ? (cm *= -1, cp += 0 >= cs ? 180 : -180, cs += 0 >= cs ? 180 : -180) : (cc *= -1, cp += 0 >= cp ? 180 : -180)), cl = (cs - b3.rotation) % 180, b7 = (cp - b3.skewX) % 180, (void 0 === b3.skewX || co > bJ || -bJ > co || cf > bJ || -bJ > cf || cl > -cq && cq > cl && false | cl * b6 || b7 > -cq && cq > b7 && false | b7 * b6) && (b3.scaleX = cm, b3.scaleY = cc, b3.rotation = cs, b3.skewX = cp), a2 && (b3.rotationX = b3.rotationY = b3.z = 0, b3.perspective = bL, b3.scaleZ = 1)
                        }
                    }
                    b3.zOrigin = bK;
                    for (cg in b3) {
                        bJ > b3[cg] && b3[cg] > -bJ && (b3[cg] = 0)
                    }
                } else {
                    b3 = {
                        x: 0,
                        y: 0,
                        z: 0,
                        scaleX: 1,
                        scaleY: 1,
                        scaleZ: 1,
                        skewX: 0,
                        skewY: 0,
                        perspective: bL,
                        rotation: 0,
                        rotationX: 0,
                        rotationY: 0,
                        zOrigin: 0
                    }
                }
                return cj && (b9._gsTransform = b3), b3.svg = bI && b9 instanceof bI && b9.parentNode instanceof bI, b3.svg && (bp(b9, bj(b9, ag, av, !1, "50% 50%") + "", b3), am = aT.useSVGTransformAttr || ac), b3.xPercent = b3.yPercent = 0, b3
            }, aE = function (A) {
                var O, K, E = this.data, B = -E.rotation * bb, H = B + E.skewX * bb, V = 100000,
                    G = (0 | Math.cos(B) * E.scaleX * V) / V, J = (0 | Math.sin(B) * E.scaleX * V) / V,
                    L = (0 | Math.sin(H) * -E.scaleY * V) / V, z = (0 | Math.cos(H) * E.scaleY * V) / V, N = this.t.style,
                    F = this.t.currentStyle;
                if (F) {
                    K = J, J = -L, L = -K, O = F.filter, N.filter = "";
                    var W, Q, I = this.t.offsetWidth, M = this.t.offsetHeight, y = "absolute" !== F.position,
                        c = "progid:DXImageTransform.Microsoft.Matrix(M11=" + G + ", M12=" + J + ", M21=" + L + ", M22=" + z,
                        x = E.x + I * E.xPercent / 100, U = E.y + M * E.yPercent / 100;
                    if (null != E.ox && (W = (E.oxp ? 0.01 * I * E.ox : E.ox) - I / 2, Q = (E.oyp ? 0.01 * M * E.oy : E.oy) - M / 2, x += W - (W * G + Q * J), U += Q - (W * L + Q * z)), y ? (W = I / 2, Q = M / 2, c += ", Dx=" + (W - (W * G + Q * J) + x) + ", Dy=" + (Q - (W * L + Q * z) + U) + ")") : c += ", sizingMethod='auto expand')", N.filter = -1 !== O.indexOf("DXImageTransform.Microsoft.Matrix(") ? O.replace(bs, c) : c + " " + O, (0 === A || 1 === A) && 1 === G && 0 === J && 0 === L && 1 === z && (y && -1 === c.indexOf("Dx=0, Dy=0") || ap.test(O) && 100 !== parseFloat(RegExp.$1) || -1 === O.indexOf("gradient(" && O.indexOf("Alpha")) && N.removeAttribute("filter")), !y) {
                        var q, j, k, D = 8 > aP ? 1 : -1;
                        for (W = E.ieOffsetX || 0, Q = E.ieOffsetY || 0, E.ieOffsetX = Math.round((I - ((0 > G ? -G : G) * I + (0 > J ? -J : J) * M)) / 2 + x), E.ieOffsetY = Math.round((M - ((0 > z ? -z : z) * M + (0 > L ? -L : L) * I)) / 2 + U), ax = 0; 4 > ax; ax++) {
                            j = bf[ax], q = F[j], K = -1 !== q.indexOf("px") ? parseFloat(q) : bk(this.t, j, parseFloat(q), q.replace(ao, "")) || 0, k = K !== E[j] ? 2 > ax ? -E.ieOffsetX : -E.ieOffsetY : 2 > ax ? W - E.ieOffsetX : Q - E.ieOffsetY, N[j] = (E[j] = Math.round(K - k * (0 === ax || 2 === ax ? 1 : D))) + "px"
                        }
                    }
                }
            }, bG = bm.set3DTransformRatio = function (V) {
                var bS, bO, ae, Y, bK, bW, bJ, bM, bP, U, bR, bX, bU, bT, bL, bQ, Q, J, K, p, M, bV, E, q = this.data,
                    B = this.t.style, Z = q.rotation * bb, bN = q.scaleX, F = q.scaleY, be = q.scaleZ, W = q.x, H = q.y,
                    G = q.z, I = q.perspective;
                if (!(1 !== V && 0 !== V || "auto" !== q.force3D || q.rotationY || q.rotationX || 1 !== be || I || G)) {
                    return af.call(this, V), void 0
                }
                if (az) {
                    var j = 0.0001;
                    j > bN && bN > -j && (bN = be = 0.00002), j > F && F > -j && (F = be = 0.00002), !I || q.z || q.rotationX || q.rotationY || (I = 0)
                }
                if (Z || q.skewX) {
                    J = Math.cos(Z), K = Math.sin(Z), bS = J, bK = K, q.skewX && (Z -= q.skewX * bb, J = Math.cos(Z), K = Math.sin(Z), "simple" === q.skewType && (p = Math.tan(q.skewX * bb), p = Math.sqrt(1 + p * p), J *= p, K *= p)), bO = -K, bW = J
                } else {
                    if (!(q.rotationY || q.rotationX || 1 !== be || I || q.svg)) {
                        return B[bH] = (q.xPercent || q.yPercent ? "translate(" + q.xPercent + "%," + q.yPercent + "%) translate3d(" : "translate3d(") + W + "px," + H + "px," + G + "px)" + (1 !== bN || 1 !== F ? " scale(" + bN + "," + F + ")" : ""), void 0
                    }
                    bS = bW = 1, bO = bK = 0
                }
                bR = 1, ae = Y = bJ = bM = bP = U = bX = bU = bT = 0, bL = I ? -1 / I : 0, bQ = q.zOrigin, Q = 100000, Z = q.rotationY * bb, Z && (J = Math.cos(Z), K = Math.sin(Z), bP = bR * -K, bU = bL * -K, ae = bS * K, bJ = bK * K, bR *= J, bL *= J, bS *= J, bK *= J), Z = q.rotationX * bb, Z && (J = Math.cos(Z), K = Math.sin(Z), p = bO * J + ae * K, M = bW * J + bJ * K, bV = U * J + bR * K, E = bT * J + bL * K, ae = bO * -K + ae * J, bJ = bW * -K + bJ * J, bR = U * -K + bR * J, bL = bT * -K + bL * J, bO = p, bW = M, U = bV, bT = E), 1 !== be && (ae *= be, bJ *= be, bR *= be, bL *= be), 1 !== F && (bO *= F, bW *= F, U *= F, bT *= F), 1 !== bN && (bS *= bN, bK *= bN, bP *= bN, bU *= bN), bQ && (bX -= bQ, Y = ae * bX, bM = bJ * bX, bX = bR * bX + bQ), q.svg && (Y += q.xOrigin - (q.xOrigin * bS + q.yOrigin * bO), bM += q.yOrigin - (q.xOrigin * bK + q.yOrigin * bW)), Y = (p = (Y += W) - (Y |= 0)) ? (0 | p * Q + (0 > p ? -0.5 : 0.5)) / Q + Y : Y, bM = (p = (bM += H) - (bM |= 0)) ? (0 | p * Q + (0 > p ? -0.5 : 0.5)) / Q + bM : bM, bX = (p = (bX += G) - (bX |= 0)) ? (0 | p * Q + (0 > p ? -0.5 : 0.5)) / Q + bX : bX, B[bH] = (q.xPercent || q.yPercent ? "translate(" + q.xPercent + "%," + q.yPercent + "%) matrix3d(" : "matrix3d(") + [(0 | bS * Q) / Q, (0 | bK * Q) / Q, (0 | bP * Q) / Q, (0 | bU * Q) / Q, (0 | bO * Q) / Q, (0 | bW * Q) / Q, (0 | U * Q) / Q, (0 | bT * Q) / Q, (0 | ae * Q) / Q, (0 | bJ * Q) / Q, (0 | bR * Q) / Q, (0 | bL * Q) / Q, Y, bM, bX, I ? 1 + -bX / I : 1].join(",") + ")"
            }, af = bm.set2DTransformRatio = function (F) {
                var z, w, b, G, k, C, j, v, x, E, y, g = this.data, D = this.t, B = D.style, A = g.x, q = g.y;
                return !(g.rotationX || g.rotationY || g.z || g.force3D === !0 || "auto" === g.force3D && 1 !== F && 0 !== F) || g.svg && am || !a2 ? (G = g.scaleX, k = g.scaleY, g.rotation || g.skewX || g.svg ? (z = g.rotation * bb, w = z - g.skewX * bb, b = 100000, C = Math.cos(z) * G, j = Math.sin(z) * G, v = Math.sin(w) * -k, x = Math.cos(w) * k, g.svg && (A += g.xOrigin - (g.xOrigin * C + g.yOrigin * v), q += g.yOrigin - (g.xOrigin * j + g.yOrigin * x), y = 0.000001, y > A && A > -y && (A = 0), y > q && q > -y && (q = 0)), E = (0 | C * b) / b + "," + (0 | j * b) / b + "," + (0 | v * b) / b + "," + (0 | x * b) / b + "," + A + "," + q + ")", g.svg && am ? D.setAttribute("transform", "matrix(" + E) : B[bH] = (g.xPercent || g.yPercent ? "translate(" + g.xPercent + "%," + g.yPercent + "%) matrix(" : "matrix(") + E) : B[bH] = (g.xPercent || g.yPercent ? "translate(" + g.xPercent + "%," + g.yPercent + "%) matrix(" : "matrix(") + G + ",0,0," + k + "," + A + "," + q + ")", void 0) : (this.setRatio = bG, bG.call(this, F), void 0)
            };
        bw("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent", {
            parser: function (s, I, E, w, B, A, D) {
                if (w._transform) {
                    return B
                }
                var F, q, H, z, L, K, J, C = w._transform = bD(s, av, !0, D.parseTransform), G = s.style, k = 0.000001,
                    b = bA.length, j = D, a = {};
                if ("string" == typeof j.transform && bH) {
                    H = aX.style, H[bH] = j.transform, H.display = "block", H.position = "absolute", an.body.appendChild(aX), F = bD(aX, null, !1), an.body.removeChild(aX)
                } else {
                    if ("object" == typeof j) {
                        if (F = {
                                scaleX: bF(null != j.scaleX ? j.scaleX : j.scale, C.scaleX),
                                scaleY: bF(null != j.scaleY ? j.scaleY : j.scale, C.scaleY),
                                scaleZ: bF(j.scaleZ, C.scaleZ),
                                x: bF(j.x, C.x),
                                y: bF(j.y, C.y),
                                z: bF(j.z, C.z),
                                xPercent: bF(j.xPercent, C.xPercent),
                                yPercent: bF(j.yPercent, C.yPercent),
                                perspective: bF(j.transformPerspective, C.perspective)
                            }, J = j.directionalRotation, null != J) {
                            if ("object" == typeof J) {
                                for (H in J) {
                                    j[H] = J[H]
                                }
                            } else {
                                j.rotation = J
                            }
                        }
                        "string" == typeof j.x && -1 !== j.x.indexOf("%") && (F.x = 0, F.xPercent = bF(j.x, C.xPercent)), "string" == typeof j.y && -1 !== j.y.indexOf("%") && (F.y = 0, F.yPercent = bF(j.y, C.yPercent)), F.rotation = bx("rotation" in j ? j.rotation : "shortRotation" in j ? j.shortRotation + "_short" : "rotationZ" in j ? j.rotationZ : C.rotation, C.rotation, "rotation", a), a2 && (F.rotationX = bx("rotationX" in j ? j.rotationX : "shortRotationX" in j ? j.shortRotationX + "_short" : C.rotationX || 0, C.rotationX, "rotationX", a), F.rotationY = bx("rotationY" in j ? j.rotationY : "shortRotationY" in j ? j.shortRotationY + "_short" : C.rotationY || 0, C.rotationY, "rotationY", a)), F.skewX = null == j.skewX ? C.skewX : bx(j.skewX, C.skewX), F.skewY = null == j.skewY ? C.skewY : bx(j.skewY, C.skewY), (q = F.skewY - C.skewY) && (F.skewX += q, F.rotation += q)
                    }
                }
                for (a2 && null != j.force3D && (C.force3D = j.force3D, K = !0), C.skewType = j.skewType || C.skewType || aT.defaultSkewType, L = C.force3D || C.z || C.rotationX || C.rotationY || F.z || F.rotationX || F.rotationY || F.perspective, L || null == j.scale || (F.scaleZ = 1); --b > -1;) {
                    E = bA[b], z = F[E] - C[E], (z > k || -k > z || null != j[E] || null != a9[E]) && (K = !0, B = new al(C, E, C[E], z, B), E in a && (B.e = a[E]), B.xs0 = 0, B.plugin = A, w._overwriteProps.push(B.n))
                }
                return z = j.transformOrigin, z && C.svg && (bp(s, z, F), B = new al(C, "xOrigin", C.xOrigin, F.xOrigin - C.xOrigin, B, -1, "transformOrigin"), B.b = C.xOrigin, B.e = B.xs0 = F.xOrigin, B = new al(C, "yOrigin", C.yOrigin, F.yOrigin - C.yOrigin, B, -1, "transformOrigin"), B.b = C.yOrigin, B.e = B.xs0 = F.yOrigin, z = "0px 0px"), (z || a2 && L && C.zOrigin) && (bH ? (K = !0, E = ag, z = (z || bj(s, E, av, !1, "50% 50%")) + "", B = new al(G, E, 0, 0, B, -1, "transformOrigin"), B.b = G[E], B.plugin = A, a2 ? (H = C.zOrigin, z = z.split(" "), C.zOrigin = (z.length > 2 && (0 === H || "0px" !== z[2]) ? parseFloat(z[2]) : H) || 0, B.xs0 = B.e = z[0] + " " + (z[1] || "50%") + " 0px", B = new al(C, "zOrigin", 0, 0, B, -1, B.n), B.b = H, B.xs0 = B.e = C.zOrigin) : B.xs0 = B.e = z) : ab(z + "", C)), K && (w._transformType = C.svg && am || !L && 3 !== this._transformType ? 2 : 3), B
            }, prefix: !0
        }), bw("boxShadow", {
            defaultValue: "0px 0px 0px 0px #999",
            prefix: !0,
            color: !0,
            multi: !0,
            keyword: "inset"
        }), bw("borderRadius", {
            defaultValue: "0px", parser: function (B, L, H, E, Q) {
                L = this.format(L);
                var D, G, I, A, K, C, R, N, M, F, J, z, q, r, j, s,
                    O = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"],
                    k = B.style;
                for (M = parseFloat(B.offsetWidth), F = parseFloat(B.offsetHeight), D = L.split(" "), G = 0; O.length > G; G++) {
                    this.p.indexOf("border") && (O[G] = aZ(O[G])), K = A = bj(B, O[G], av, !1, "0px"), -1 !== K.indexOf(" ") && (A = K.split(" "), K = A[0], A = A[1]), C = I = D[G], R = parseFloat(K), z = K.substr((R + "").length), q = "=" === C.charAt(1), q ? (N = parseInt(C.charAt(0) + "1", 10), C = C.substr(2), N *= parseFloat(C), J = C.substr((N + "").length - (0 > N ? 1 : 0)) || "") : (N = parseFloat(C), J = C.substr((N + "").length)), "" === J && (J = aw[H] || z), J !== z && (r = bk(B, "borderLeft", R, z), j = bk(B, "borderTop", R, z), "%" === J ? (K = 100 * (r / M) + "%", A = 100 * (j / F) + "%") : "em" === J ? (s = bk(B, "borderLeft", 1, "em"), K = r / s + "em", A = j / s + "em") : (K = r + "px", A = j + "px"), q && (C = parseFloat(K) + N + J, I = parseFloat(A) + N + J)), Q = aa(k, O[G], K + " " + A, C + " " + I, !1, "0px", Q)
                }
                return Q
            }, prefix: !0, formatter: a8("0px 0px 0px 0px", !1, !0)
        }), bw("backgroundPosition", {
            defaultValue: "0 0", parser: function (E, z, v, b, k, B) {
                var j, s, w, D, y, c, C = "background-position", A = av || ay(E, null),
                    q = this.format((A ? aP ? A.getPropertyValue(C + "-x") + " " + A.getPropertyValue(C + "-y") : A.getPropertyValue(C) : E.currentStyle.backgroundPositionX + " " + E.currentStyle.backgroundPositionY) || "0 0"),
                    x = this.format(z);
                if (-1 !== q.indexOf("%") != (-1 !== x.indexOf("%")) && (c = bj(E, "backgroundImage").replace(a4, ""), c && "none" !== c)) {
                    for (j = q.split(" "), s = x.split(" "), bg.setAttribute("src", c), w = 2; --w > -1;) {
                        q = j[w], D = -1 !== q.indexOf("%"), D !== (-1 !== s[w].indexOf("%")) && (y = 0 === w ? E.offsetWidth - bg.width : E.offsetHeight - bg.height, j[w] = D ? parseFloat(q) / 100 * y + "px" : 100 * (parseFloat(q) / y) + "%")
                    }
                    q = j.join(" ")
                }
                return this.parseComplex(E.style, q, x, k, B)
            }, formatter: ab
        }), bw("backgroundSize", {defaultValue: "0 0", formatter: ab}), bw("perspective", {
            defaultValue: "0px",
            prefix: !0
        }), bw("perspectiveOrigin", {
            defaultValue: "50% 50%",
            prefix: !0
        }), bw("transformStyle", {prefix: !0}), bw("backfaceVisibility", {prefix: !0}), bw("userSelect", {prefix: !0}), bw("margin", {parser: aQ("marginTop,marginRight,marginBottom,marginLeft")}), bw("padding", {parser: aQ("paddingTop,paddingRight,paddingBottom,paddingLeft")}), bw("clip", {
            defaultValue: "rect(0px,0px,0px,0px)",
            parser: function (p, k, g, b, d, m) {
                var c, f, j;
                return 9 > aP ? (f = p.currentStyle, j = 8 > aP ? " " : ",", c = "rect(" + f.clipTop + j + f.clipRight + j + f.clipBottom + j + f.clipLeft + ")", k = this.format(k).split(",").join(j)) : (c = this.format(bj(p, this.p, av, !1, this.dflt)), k = this.format(k)), this.parseComplex(p.style, c, k, d, m)
            }
        }), bw("textShadow", {
            defaultValue: "0px 0px 0px #999",
            color: !0,
            multi: !0
        }), bw("autoRound,strictUnits", {
            parser: function (b, f, a, d, c) {
                return c
            }
        }), bw("border", {
            defaultValue: "0px solid #000", parser: function (d, g, c, f, h, b) {
                return this.parseComplex(d.style, this.format(bj(d, "borderTopWidth", av, !1, "0px") + " " + bj(d, "borderTopStyle", av, !1, "solid") + " " + bj(d, "borderTopColor", av, !1, "#000")), this.format(g), h, b)
            }, color: !0, formatter: function (a) {
                var b = a.split(" ");
                return b[0] + " " + (b[1] || "solid") + " " + (a.match(bE) || ["#000"])[0]
            }
        }), bw("borderWidth", {parser: aQ("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")}), bw("float,cssFloat,styleFloat", {
            parser: function (d, h, c, g, f) {
                var j = d.style, b = "cssFloat" in j ? "cssFloat" : "styleFloat";
                return new al(j, b, 0, 0, f, -1, c, !1, 0, j[b], h)
            }
        });
        var by = function (b) {
            var f, a = this.t, d = a.filter || bj(this.data, "filter") || "", c = 0 | this.s + this.c * b;
            100 === c && (-1 === d.indexOf("atrix(") && -1 === d.indexOf("radient(") && -1 === d.indexOf("oader(") ? (a.removeAttribute("filter"), f = !bj(this.data, "filter")) : (a.filter = d.replace(aq, ""), f = !0)), f || (this.xn1 && (a.filter = d = d || "alpha(opacity=" + c + ")"), -1 === d.indexOf("pacity") ? 0 === c && this.xn1 || (a.filter = d + " alpha(opacity=" + c + ")") : a.filter = d.replace(ap, "opacity=" + c))
        };
        bw("opacity,alpha,autoAlpha", {
            defaultValue: "1", parser: function (p, k, g, b, d, m) {
                var c = parseFloat(bj(p, "opacity", av, !1, "1")), f = p.style, j = "autoAlpha" === g;
                return "string" == typeof k && "=" === k.charAt(1) && (k = ("-" === k.charAt(0) ? -1 : 1) * parseFloat(k.substr(2)) + c), j && 1 === c && "hidden" === bj(p, "visibility", av) && 0 !== k && (c = 0), aW ? d = new al(f, "opacity", c, k - c, d) : (d = new al(f, "opacity", 100 * c, 100 * (k - c), d), d.xn1 = j ? 1 : 0, f.zoom = 1, d.type = 2, d.b = "alpha(opacity=" + d.s + ")", d.e = "alpha(opacity=" + (d.s + d.c) + ")", d.data = p, d.plugin = m, d.setRatio = by), j && (d = new al(f, "visibility", 0, 0, d, -1, null, !1, 0, 0 !== c ? "inherit" : "hidden", 0 === k ? "hidden" : "inherit"), d.xs0 = "inherit", b._overwriteProps.push(d.n), b._overwriteProps.push(g)), d
            }
        });
        var bt = function (a, b) {
            b && (a.removeProperty ? ("ms" === b.substr(0, 2) && (b = "M" + b.substr(1)), a.removeProperty(b.replace(a6, "-$1").toLowerCase())) : a.removeAttribute(b))
        }, ai = function (b) {
            if (this.t._gsClassPT = this, 1 === b || 0 === b) {
                this.t.setAttribute("class", 0 === b ? this.b : this.e);
                for (var c = this.data, a = this.t.style; c;) {
                    c.v ? a[c.p] = c.v : bt(a, c.p), c = c._next
                }
                1 === b && this.t._gsClassPT === this && (this.t._gsClassPT = null)
            } else {
                this.t.getAttribute("class") !== this.e && this.t.setAttribute("class", this.e)
            }
        };
        bw("className", {
            parser: function (A, s, b, j, x, i, k) {
                var m, z, q, g, y, w = A.getAttribute("class") || "", v = A.style.cssText;
                if (x = j._classNamePT = new al(A, b, 0, 0, x, 2), x.setRatio = ai, x.pr = -11, aI = !0, x.b = w, z = aV(A, av), q = A._gsClassPT) {
                    for (g = {}, y = q.data; y;) {
                        g[y.p] = 1, y = y._next
                    }
                    q.setRatio(1)
                }
                return A._gsClassPT = x, x.e = "=" !== s.charAt(1) ? s : w.replace(RegExp("\\s*\\b" + s.substr(2) + "\\b"), "") + ("+" === s.charAt(0) ? " " + s.substr(2) : ""), j._tween._duration && (A.setAttribute("class", x.e), m = bz(A, z, aV(A), k, g), A.setAttribute("class", w), x.data = m.firstMPT, A.style.cssText = v, x = x.xfirst = j.parse(A, m.difs, x, i)), x
            }
        });
        var bi = function (d) {
            if ((1 === d || 0 === d) && this.data._totalTime === this.data._totalDuration && "isFromStart" !== this.data.data) {
                var h, c, g, f, j = this.t.style, b = aA.transform.parse;
                if ("all" === this.e) {
                    j.cssText = "", f = !0
                } else {
                    for (h = this.e.split(" ").join("").split(","), g = h.length; --g > -1;) {
                        c = h[g], aA[c] && (aA[c].parse === b ? f = !0 : c = "transformOrigin" === c ? ag : aA[c].p), bt(j, c)
                    }
                }
                f && (bt(j, bH), this.t._gsTransform && delete this.t._gsTransform)
            }
        };
        for (bw("clearProps", {
            parser: function (a, d, c, b, f) {
                return f = new al(a, c, 0, 0, f, 2), f.setRatio = bi, f.e = d, f.pr = -10, f.data = b._tween, aI = !0, f
            }
        }), aF = "bezier,throwProps,physicsProps,physics2D".split(","), ax = aF.length; ax--;) {
            bv(aF[ax])
        }
        aF = aT.prototype, aF._firstPT = null, aF._onInitTween = function (z, j, b) {
            if (!z.nodeType) {
                return !1
            }
            this._target = z, this._tween = b, this._vars = j, aJ = j.autoRound, aI = !1, aw = j.suffixMap || aT.suffixMap, av = ay(z, ""), aB = this._overwriteProps;
            var h, a, n, k, f, i, u, q, r, s = z.style;
            if (at && "" === s.zIndex && (h = bj(z, "zIndex", av), ("auto" === h || "" === h) && this._addLazySet(s, "zIndex", 0)), "string" == typeof j && (k = s.cssText, h = aV(z, av), s.cssText = k + ";" + j, h = bz(z, h, aV(z)).difs, !aW && a1.test(j) && (h.opacity = parseFloat(RegExp.$1)), j = h, s.cssText = k), this._firstPT = a = this.parse(z, j, null), this._transformType) {
                for (r = 3 === this._transformType, bH ? aM && (at = !0, "" === s.zIndex && (u = bj(z, "zIndex", av), ("auto" === u || "" === u) && this._addLazySet(s, "zIndex", 0)), aU && this._addLazySet(s, "WebkitBackfaceVisibility", this._vars.WebkitBackfaceVisibility || (r ? "visible" : "hidden"))) : s.zoom = 1, n = a; n && n._next;) {
                    n = n._next
                }
                q = new al(z, "transform", 0, 0, null, 2), this._linkCSSP(q, null, n), q.setRatio = r && a2 ? bG : bH ? af : aE, q.data = this._transform || bD(z, av, !0), aB.pop()
            }
            if (aI) {
                for (; a;) {
                    for (i = a._next, n = k; n && n.pr > a.pr;) {
                        n = n._next
                    }
                    (a._prev = n ? n._prev : f) ? a._prev._next = a : k = a, (a._next = n) ? n._prev = a : f = a, a = i
                }
                this._firstPT = k
            }
            return !0
        }, aF.parse = function (C, s, o, h) {
            var y, k, B, r, b, A, x, w, j, q, z = C.style;
            for (y in s) {
                A = s[y], k = aA[y], k ? o = k.parse(C, A, y, this, o, h, s) : (b = bj(C, y, av) + "", j = "string" == typeof A, "color" === y || "fill" === y || "stroke" === y || -1 !== y.indexOf("Color") || j && aS.test(A) ? (j || (A = aK(A), A = (A.length > 3 ? "rgba(" : "rgb(") + A.join(",") + ")"), o = aa(z, y, b, A, !0, "transparent", o, 0, h)) : !j || -1 === A.indexOf(" ") && -1 === A.indexOf(",") ? (B = parseFloat(b), x = B || 0 === B ? b.substr((B + "").length) : "", ("" === b || "auto" === b) && ("width" === y || "height" === y ? (B = bo(C, y, av), x = "px") : "left" === y || "top" === y ? (B = a5(C, y, av), x = "px") : (B = "opacity" !== y ? 0 : 1, x = "")), q = j && "=" === A.charAt(1), q ? (r = parseInt(A.charAt(0) + "1", 10), A = A.substr(2), r *= parseFloat(A), w = A.replace(ao, "")) : (r = parseFloat(A), w = j ? A.substr((r + "").length) || "" : ""), "" === w && (w = y in aw ? aw[y] : x), A = r || 0 === r ? (q ? r + B : r) + w : s[y], x !== w && "" !== w && (r || 0 === r) && B && (B = bk(C, y, B, x), "%" === w ? (B /= bk(C, y, 100, "%") / 100, s.strictUnits !== !0 && (b = B + "%")) : "em" === w ? B /= bk(C, y, 1, "em") : "px" !== w && (r = bk(C, y, r, w), w = "px"), q && (r || 0 === r) && (A = r + B + w)), q && (r += B), !B && 0 !== B || !r && 0 !== r ? void 0 !== z[y] && (A || "NaN" != A + "" && null != A) ? (o = new al(z, y, r || B || 0, 0, o, -1, y, !1, 0, b, A), o.xs0 = "none" !== A || "display" !== y && -1 === y.indexOf("Style") ? A : b) : a0("invalid " + y + " tween value: " + s[y]) : (o = new al(z, y, B, r - B, o, 0, y, aJ !== !1 && ("px" === w || "zIndex" === y), 0, b, A), o.xs0 = w)) : o = aa(z, y, b, A, !0, null, o, 0, h)), h && o && !o.plugin && (o.plugin = h)
            }
            return o
        }, aF.setRatio = function (b) {
            var f, a, d, c = this._firstPT, g = 0.000001;
            if (1 !== b || this._tween._time !== this._tween._duration && 0 !== this._tween._time) {
                if (b || this._tween._time !== this._tween._duration && 0 !== this._tween._time || this._tween._rawPrevTime === -0.000001) {
                    for (; c;) {
                        if (f = c.c * b + c.s, c.r ? f = Math.round(f) : g > f && f > -g && (f = 0), c.type) {
                            if (1 === c.type) {
                                if (d = c.l, 2 === d) {
                                    c.t[c.p] = c.xs0 + f + c.xs1 + c.xn1 + c.xs2
                                } else {
                                    if (3 === d) {
                                        c.t[c.p] = c.xs0 + f + c.xs1 + c.xn1 + c.xs2 + c.xn2 + c.xs3
                                    } else {
                                        if (4 === d) {
                                            c.t[c.p] = c.xs0 + f + c.xs1 + c.xn1 + c.xs2 + c.xn2 + c.xs3 + c.xn3 + c.xs4
                                        } else {
                                            if (5 === d) {
                                                c.t[c.p] = c.xs0 + f + c.xs1 + c.xn1 + c.xs2 + c.xn2 + c.xs3 + c.xn3 + c.xs4 + c.xn4 + c.xs5
                                            } else {
                                                for (a = c.xs0 + f + c.xs1, d = 1; c.l > d; d++) {
                                                    a += c["xn" + d] + c["xs" + (d + 1)]
                                                }
                                                c.t[c.p] = a
                                            }
                                        }
                                    }
                                }
                            } else {
                                -1 === c.type ? c.t[c.p] = c.xs0 : c.setRatio && c.setRatio(b)
                            }
                        } else {
                            c.t[c.p] = f + c.xs0
                        }
                        c = c._next
                    }
                } else {
                    for (; c;) {
                        2 !== c.type ? c.t[c.p] = c.b : c.setRatio(b), c = c._next
                    }
                }
            } else {
                for (; c;) {
                    2 !== c.type ? c.t[c.p] = c.e : c.setRatio(b), c = c._next
                }
            }
        }, aF._enableTransforms = function (a) {
            this._transform = this._transform || bD(this._target, av, !0), this._transformType = this._transform.svg && am || !a && 3 !== this._transformType ? 2 : 3
        };
        var ak = function () {
            this.t[this.p] = this.e, this.data._linkCSSP(this, this._next, null, !0)
        };
        aF._addLazySet = function (b, d, a) {
            var c = this._firstPT = new al(b, d, 0, 0, this._firstPT, 2);
            c.e = a, c.setRatio = ak, c.data = this
        }, aF._linkCSSP = function (b, d, a, c) {
            return b && (d && (d._prev = b), b._next && (b._next._prev = b._prev), b._prev ? b._prev._next = b._next : this._firstPT === b && (this._firstPT = b._next, c = !0), a ? a._next = b : c || null !== this._firstPT || (this._firstPT = b), b._next = d, b._prev = a), b
        }, aF._kill = function (d) {
            var a, c, b, f = d;
            if (d.autoAlpha || d.alpha) {
                f = {};
                for (c in d) {
                    f[c] = d[c]
                }
                f.opacity = 1, f.autoAlpha && (f.visibility = 1)
            }
            return d.className && (a = this._classNamePT) && (b = a.xfirst, b && b._prev ? this._linkCSSP(b._prev, a._next, b._prev._prev) : b === this._firstPT && (this._firstPT = a._next), a._next && this._linkCSSP(a._next, a._next._next, b._prev), this._classNamePT = null), au.prototype._kill.call(this, f)
        };
        var ad = function (d, h, c) {
            var g, f, j, b;
            if (d.slice) {
                for (f = d.length; --f > -1;) {
                    ad(d[f], h, c)
                }
            } else {
                for (g = d.childNodes, f = g.length; --f > -1;) {
                    j = g[f], b = j.type, j.style && (h.push(aV(j)), c && c.push(j)), 1 !== b && 9 !== b && 11 !== b || !j.childNodes.length || ad(j, h, c)
                }
            }
        };
        return aT.cascadeTo = function (x, k, b) {
            var y, g, v, d = aN.to(x, k, b), j = [d], m = [], w = [], q = [], c = aN._internals.reservedProps;
            for (x = d._targets || d.target, ad(x, m, q), d.render(k, !0), ad(x, w), d.render(0, !0), d._enabled(!0), y = q.length; --y > -1;) {
                if (g = bz(q[y], m[y], w[y]), g.firstMPT) {
                    g = g.difs;
                    for (v in b) {
                        c[v] && (g[v] = b[v])
                    }
                    j.push(aN.to(q[y], k, g))
                }
            }
            return j
        }, au.activate([aT]), aT
    }, !0)
}), _gsScope._gsDefine && _gsScope._gsQueue.pop()(), function (a) {
    var b = function () {
        return (_gsScope.GreenSockGlobals || _gsScope)[a]
    };
    "function" == typeof define && define.amd ? define(["TweenLite"], b) : "undefined" != typeof module && module.exports && (require("../TweenLite.js"), module.exports = b())
}("CSSPlugin");
/*!
 * VERSION: beta 0.3.3
 * DATE: 2014-10-29
 * UPDATES AND DOCS AT: http://www.greensock.com
 *
 * @license Copyright (c) 2008-2014, GreenSock. All rights reserved.
 * SplitText is a Club GreenSock membership benefit; You must have a valid membership to use
 * this code without violating the terms of use. Visit http://www.greensock.com/club/ to sign up or get more details.
 * This work is subject to the software agreement that was issued with your membership.
 *
 * @author: Jack Doyle, jack@greensock.com
 */
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
(function (w) {
    var J = w.GreenSockGlobals || w, F = function (c) {
            var a, d = c.split("."), f = J;
            for (a = 0; d.length > a; a++) {
                f[d[a]] = f = f[d[a]] || {}
            }
            return f
        }, x = F("com.greensock.utils"), z = function (c) {
            var d = c.nodeType, a = "";
            if (1 === d || 9 === d || 11 === d) {
                if ("string" == typeof c.textContent) {
                    return c.textContent
                }
                for (c = c.firstChild; c; c = c.nextSibling) {
                    a += z(c)
                }
            } else {
                if (3 === d || 4 === d) {
                    return c.nodeValue
                }
            }
            return a
        }, C = document, M = C.defaultView ? C.defaultView.getComputedStyle : function () {
        }, B = /([A-Z])/g, G = function (c, g, a, d) {
            var f;
            return (a = a || M(c, null)) ? (c = a.getPropertyValue(g.replace(B, "-$1").toLowerCase()), f = c || a.length ? c : a[g]) : c.currentStyle && (a = c.currentStyle, f = a[g]), d ? f : parseInt(f, 10) || 0
        }, E = function (a) {
            return a.length && a[0] && (a[0].nodeType && a[0].style && !a.nodeType || a[0].length && a[0][0]) ? !0 : !1
        }, N = function (c) {
            var g, a, d, f = [], h = c.length;
            for (g = 0; h > g; g++) {
                if (a = c[g], E(a)) {
                    for (d = a.length, d = 0; a.length > d; d++) {
                        f.push(a[d])
                    }
                } else {
                    f.push(a)
                }
            }
            return f
        }, q = ")eefec303079ad17405c", L = /(?:<br>|<br\/>|<br \/>)/gi, A = C.all && !C.addEventListener,
        I = "<div style='position:relative;display:inline-block;" + (A ? "*display:inline;*zoom:1;'" : "'"),
        D = function (c) {
            c = c || "";
            var d = -1 !== c.indexOf("++"), a = 1;
            return d && (c = c.split("++").join("")), function () {
                return I + (c ? " class='" + c + (d ? a++ : "") + "'>" : ">")
            }
        }, K = x.SplitText = J.SplitText = function (a, c) {
            if ("string" == typeof a && (a = K.selector(a)), !a) {
                throw"cannot split a null element."
            }
            this.elements = E(a) ? N(a) : [a], this.chars = [], this.words = [], this.lines = [], this._originals = [], this.vars = c || {}, this.split(c)
        }, H = function (c, f, a) {
            var d = c.nodeType;
            if (1 === d || 9 === d || 11 === d) {
                for (c = c.firstChild; c; c = c.nextSibling) {
                    H(c, f, a)
                }
            } else {
                (3 === d || 4 === d) && (c.nodeValue = c.nodeValue.split(f).join(a))
            }
        }, k = function (c, d) {
            for (var a = d.length; --a > -1;) {
                c.push(d[a])
            }
        }, j = function (ay, aI, aG, az, aC) {
            L.test(ay.innerHTML) && (ay.innerHTML = ay.innerHTML.replace(L, q));
            var aD, aL, aB, aH, aJ, av, u, ax, aK, aw, ac, v, ap, aE, aa = z(ay),
                ar = aI.type || aI.split || "chars,words,lines", ad = -1 !== ar.indexOf("lines") ? [] : null,
                ao = -1 !== ar.indexOf("words"), af = -1 !== ar.indexOf("chars"),
                ag = "absolute" === aI.position || aI.absolute === !0, au = ag ? "&#173; " : " ", aj = -999, an = M(ay),
                ae = G(ay, "paddingLeft", an), am = G(ay, "borderBottomWidth", an) + G(ay, "borderTopWidth", an),
                g = G(ay, "borderLeftWidth", an) + G(ay, "borderRightWidth", an),
                r = G(ay, "paddingTop", an) + G(ay, "paddingBottom", an),
                aq = G(ay, "paddingLeft", an) + G(ay, "paddingRight", an), aF = G(ay, "textAlign", an, !0),
                c = ay.clientHeight, aA = ay.clientWidth, al = "</div>", n = D(aI.wordsClass), ab = D(aI.charsClass),
                m = -1 !== (aI.linesClass || "").indexOf("++"), ak = aI.linesClass, a = -1 !== aa.indexOf("<"), at = !0,
                ah = [], ai = [], h = [];
            for (m && (ak = ak.split("++").join("")), a && (aa = aa.split("<").join("{{LT}}")), aD = aa.length, aH = n(), aJ = 0; aD > aJ; aJ++) {
                if (u = aa.charAt(aJ), ")" === u && aa.substr(aJ, 20) === q) {
                    aH += (at ? al : "") + "<BR/>", at = !1, aJ !== aD - 20 && aa.substr(aJ + 20, 20) !== q && (aH += " " + n(), at = !0), aJ += 19
                } else {
                    if (" " === u && " " !== aa.charAt(aJ - 1) && aJ !== aD - 1 && aa.substr(aJ - 20, 20) !== q) {
                        for (aH += at ? al : "", at = !1; " " === aa.charAt(aJ + 1);) {
                            aH += au, aJ++
                        }
                        (")" !== aa.charAt(aJ + 1) || aa.substr(aJ + 1, 20) !== q) && (aH += au + n(), at = !0)
                    } else {
                        aH += af && " " !== u ? ab() + u + "</div>" : u
                    }
                }
            }
            for (ay.innerHTML = aH + (at ? al : ""), a && H(ay, "{{LT}}", "<"), av = ay.getElementsByTagName("*"), aD = av.length, ax = [], aJ = 0; aD > aJ; aJ++) {
                ax[aJ] = av[aJ]
            }
            if (ad || ag) {
                for (aJ = 0; aD > aJ; aJ++) {
                    aK = ax[aJ], aB = aK.parentNode === ay, (aB || ag || af && !ao) && (aw = aK.offsetTop, ad && aB && aw !== aj && "BR" !== aK.nodeName && (aL = [], ad.push(aL), aj = aw), ag && (aK._x = aK.offsetLeft, aK._y = aw, aK._w = aK.offsetWidth, aK._h = aK.offsetHeight), ad && (ao !== aB && af || (aL.push(aK), aK._x -= ae), aB && aJ && (ax[aJ - 1]._wordEnd = !0), "BR" === aK.nodeName && aK.nextSibling && "BR" === aK.nextSibling.nodeName && ad.push([])))
                }
            }
            for (aJ = 0; aD > aJ; aJ++) {
                aK = ax[aJ], aB = aK.parentNode === ay, "BR" !== aK.nodeName ? (ag && (v = aK.style, ao || aB || (aK._x += aK.parentNode._x, aK._y += aK.parentNode._y), v.left = aK._x + "px", v.top = aK._y + "px", v.position = "absolute", v.display = "block", v.width = aK._w + 1 + "px", v.height = aK._h + "px"), ao ? aB && "" !== aK.innerHTML ? ai.push(aK) : af && ah.push(aK) : aB ? (ay.removeChild(aK), ax.splice(aJ--, 1), aD--) : !aB && af && (aw = !ad && !ag && aK.nextSibling, ay.appendChild(aK), aw || ay.appendChild(C.createTextNode(" ")), ah.push(aK))) : ad || ag ? (ay.removeChild(aK), ax.splice(aJ--, 1), aD--) : ao || ay.appendChild(aK)
            }
            if (ad) {
                for (ag && (ac = C.createElement("div"), ay.appendChild(ac), ap = ac.offsetWidth + "px", aw = ac.offsetParent === ay ? 0 : ay.offsetLeft, ay.removeChild(ac)), v = ay.style.cssText, ay.style.cssText = "display:none;"; ay.firstChild;) {
                    ay.removeChild(ay.firstChild)
                }
                for (aE = !ag || !ao && !af, aJ = 0; ad.length > aJ; aJ++) {
                    for (aL = ad[aJ], ac = C.createElement("div"), ac.style.cssText = "display:block;text-align:" + aF + ";position:" + (ag ? "absolute;" : "relative;"), ak && (ac.className = ak + (m ? aJ + 1 : "")), h.push(ac), aD = aL.length, av = 0; aD > av; av++) {
                        "BR" !== aL[av].nodeName && (aK = aL[av], ac.appendChild(aK), aE && (aK._wordEnd || ao) && ac.appendChild(C.createTextNode(" ")), ag && (0 === av && (ac.style.top = aK._y + "px", ac.style.left = ae + aw + "px"), aK.style.top = "0px", aw && (aK.style.left = aK._x - aw + "px")))
                    }
                    0 === aD && (ac.innerHTML = "&nbsp;"), ao || af || (ac.innerHTML = z(ac).split(String.fromCharCode(160)).join(" ")), ag && (ac.style.width = ap, ac.style.height = aK._h + "px"), ay.appendChild(ac)
                }
                ay.style.cssText = v
            }
            ag && (c > ay.clientHeight && (ay.style.height = c - r + "px", c > ay.clientHeight && (ay.style.height = c + am + "px")), aA > ay.clientWidth && (ay.style.width = aA - aq + "px", aA > ay.clientWidth && (ay.style.width = aA + g + "px"))), k(aG, ah), k(az, ai), k(aC, h)
        }, b = K.prototype;
    b.split = function (a) {
        this.isSplit && this.revert(), this.vars = a || this.vars, this._originals.length = this.chars.length = this.words.length = this.lines.length = 0;
        for (var c = this.elements.length; --c > -1;) {
            this._originals[c] = this.elements[c].innerHTML, j(this.elements[c], this.vars, this.chars, this.words, this.lines)
        }
        return this.chars.reverse(), this.words.reverse(), this.lines.reverse(), this.isSplit = !0, this
    }, b.revert = function () {
        if (!this._originals) {
            throw"revert() call wasn't scoped properly."
        }
        for (var a = this._originals.length; --a > -1;) {
            this.elements[a].innerHTML = this._originals[a]
        }
        return this.chars = [], this.words = [], this.lines = [], this.isSplit = !1, this
    }, K.selector = w.$ || w.jQuery || function (c) {
        var a = w.$ || w.jQuery;
        return a ? (K.selector = a, a(c)) : "undefined" == typeof document ? c : document.querySelectorAll ? document.querySelectorAll(c) : document.getElementById("#" === c.charAt(0) ? c.substr(1) : c)
    }, K.version = "0.3.3"
})(_gsScope), function (a) {
    var b = function () {
        return (_gsScope.GreenSockGlobals || _gsScope)[a]
    };
    "function" == typeof define && define.amd ? define(["TweenLite"], b) : "undefined" != typeof module && module.exports && (module.exports = b())
}("SplitText");
try {
    window.GreenSockGlobals = null;
    window._gsQueue = null;
    window._gsDefine = null;
    delete (window.GreenSockGlobals);
    delete (window._gsQueue);
    delete (window._gsDefine)
} catch (e) {
}
try {
    window.GreenSockGlobals = oldgs;
    window._gsQueue = oldgs_queue
} catch (e) {
}
if (window.tplogs == true) {
    try {
        console.groupEnd()
    } catch (e) {
    }
}
(function (b, a) {
    b.waitForImages = {hasImageProperties: ["backgroundImage", "listStyleImage", "borderImage", "borderCornerImage"]};
    b.expr[":"].uncached = function (c) {
        var d = document.createElement("img");
        d.src = c.src;
        return b(c).is('img[src!=""]') && !d.complete
    };
    b.fn.waitForImages = function (c, f, d) {
        if (b.isPlainObject(arguments[0])) {
            f = c.each;
            d = c.waitForAll;
            c = c.finished
        }
        c = c || b.noop;
        f = f || b.noop;
        d = !!d;
        if (!b.isFunction(c) || !b.isFunction(f)) {
            throw new TypeError("An invalid callback was supplied.")
        }
        return this.each(function () {
            var j = b(this), k = [];
            if (d) {
                var n = b.waitForImages.hasImageProperties || [], h = /url\((['"]?)(.*?)\1\)/g;
                j.find("*").each(function () {
                    var i = b(this);
                    if (i.is("img:uncached")) {
                        k.push({src: i.attr("src"), element: i[0]})
                    }
                    b.each(n, function (p, q) {
                        var o = i.css(q);
                        if (!o) {
                            return true
                        }
                        var l;
                        while (l = h.exec(o)) {
                            k.push({src: l[2], element: i[0]})
                        }
                    })
                })
            } else {
                j.find("img:uncached").each(function () {
                    k.push({src: this.src, element: this})
                })
            }
            var m = k.length, g = 0;
            if (m == 0) {
                c.call(j[0])
            }
            b.each(k, function (l, i) {
                var p = new Image;
                b(p).bind("load error", function (o) {
                    g++;
                    f.call(i.element, g, m, o.type == "load");
                    if (g == m) {
                        c.call(j[0]);
                        return false
                    }
                });
                p.src = i.src
            })
        })
    }
})(jQuery);
/*!
 * Bootstrap v3.3.6 (http://getbootstrap.com)
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under the MIT license
 */
if ("undefined" == typeof jQuery) {
    throw new Error("Bootstrap's JavaScript requires jQuery")
}
+function (d) {
    var c = d.fn.jquery.split(" ")[0].split(".");
    if (c[0] < 2 && c[1] < 9 || 1 == c[0] && 9 == c[1] && c[2] < 1 || c[0] > 2) {
        throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 3")
    }
}(jQuery), +function (d) {
    function c() {
        var f = document.createElement("bootstrap"), e = {
            WebkitTransition: "webkitTransitionEnd",
            MozTransition: "transitionend",
            OTransition: "oTransitionEnd otransitionend",
            transition: "transitionend"
        };
        for (var g in e) {
            if (void 0 !== f.style[g]) {
                return {end: e[g]}
            }
        }
        return !1
    }

    d.fn.emulateTransitionEnd = function (a) {
        var h = !1, g = this;
        d(this).one("bsTransitionEnd", function () {
            h = !0
        });
        var f = function () {
            h || d(g).trigger(d.support.transition.end)
        };
        return setTimeout(f, a), this
    }, d(function () {
        d.support.transition = c(), d.support.transition && (d.event.special.bsTransitionEnd = {
            bindType: d.support.transition.end,
            delegateType: d.support.transition.end,
            handle: function (a) {
                return d(a.target).is(this) ? a.handleObj.handler.apply(this, arguments) : void 0
            }
        })
    })
}(jQuery), +function (g) {
    function f(a) {
        return this.each(function () {
            var d = g(this), b = d.data("bs.alert");
            b || d.data("bs.alert", b = new i(this)), "string" == typeof a && b[a].call(d)
        })
    }

    var j = '[data-dismiss="alert"]', i = function (a) {
        g(a).on("click", j, this.close)
    };
    i.VERSION = "3.3.6", i.TRANSITION_DURATION = 150, i.prototype.close = function (a) {
        function m() {
            d.detach().trigger("closed.bs.alert").remove()
        }

        var l = g(this), k = l.attr("data-target");
        k || (k = l.attr("href"), k = k && k.replace(/.*(?=#[^\s]*$)/, ""));
        var d = g(k);
        a && a.preventDefault(), d.length || (d = l.closest(".alert")), d.trigger(a = g.Event("close.bs.alert")), a.isDefaultPrevented() || (d.removeClass("in"), g.support.transition && d.hasClass("fade") ? d.one("bsTransitionEnd", m).emulateTransitionEnd(i.TRANSITION_DURATION) : m())
    };
    var h = g.fn.alert;
    g.fn.alert = f, g.fn.alert.Constructor = i, g.fn.alert.noConflict = function () {
        return g.fn.alert = h, this
    }, g(document).on("click.bs.alert.data-api", j, i.prototype.close)
}(jQuery), +function (f) {
    function e(a) {
        return this.each(function () {
            var i = f(this), c = i.data("bs.button"), b = "object" == typeof a && a;
            c || i.data("bs.button", c = new h(this, b)), "toggle" == a ? c.toggle() : a && c.setState(a)
        })
    }

    var h = function (a, c) {
        this.$element = f(a), this.options = f.extend({}, h.DEFAULTS, c), this.isLoading = !1
    };
    h.VERSION = "3.3.6", h.DEFAULTS = {loadingText: "loading..."}, h.prototype.setState = function (a) {
        var l = "disabled", k = this.$element, j = k.is("input") ? "val" : "html", i = k.data();
        a += "Text", null == i.resetText && k.data("resetText", k[j]()), setTimeout(f.proxy(function () {
            k[j](null == i[a] ? this.options[a] : i[a]), "loadingText" == a ? (this.isLoading = !0, k.addClass(l).attr(l, l)) : this.isLoading && (this.isLoading = !1, k.removeClass(l).removeAttr(l))
        }, this), 0)
    }, h.prototype.toggle = function () {
        var i = !0, d = this.$element.closest('[data-toggle="buttons"]');
        if (d.length) {
            var j = this.$element.find("input");
            "radio" == j.prop("type") ? (j.prop("checked") && (i = !1), d.find(".active").removeClass("active"), this.$element.addClass("active")) : "checkbox" == j.prop("type") && (j.prop("checked") !== this.$element.hasClass("active") && (i = !1), this.$element.toggleClass("active")), j.prop("checked", this.$element.hasClass("active")), i && j.trigger("change")
        } else {
            this.$element.attr("aria-pressed", !this.$element.hasClass("active")), this.$element.toggleClass("active")
        }
    };
    var g = f.fn.button;
    f.fn.button = e, f.fn.button.Constructor = h, f.fn.button.noConflict = function () {
        return f.fn.button = g, this
    }, f(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function (b) {
        var a = f(b.target);
        a.hasClass("btn") || (a = a.closest(".btn")), e.call(a, "toggle"), f(b.target).is('input[type="radio"]') || f(b.target).is('input[type="checkbox"]') || b.preventDefault()
    }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function (a) {
        f(a.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(a.type))
    })
}(jQuery), +function (g) {
    function f(a) {
        return this.each(function () {
            var l = g(this), k = l.data("bs.carousel"),
                c = g.extend({}, j.DEFAULTS, l.data(), "object" == typeof a && a),
                b = "string" == typeof a ? a : c.slide;
            k || l.data("bs.carousel", k = new j(this, c)), "number" == typeof a ? k.to(a) : b ? k[b]() : c.interval && k.pause().cycle()
        })
    }

    var j = function (a, d) {
        this.$element = g(a), this.$indicators = this.$element.find(".carousel-indicators"), this.options = d, this.paused = null, this.sliding = null, this.interval = null, this.$active = null, this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", g.proxy(this.keydown, this)), "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", g.proxy(this.pause, this)).on("mouseleave.bs.carousel", g.proxy(this.cycle, this))
    };
    j.VERSION = "3.3.6", j.TRANSITION_DURATION = 600, j.DEFAULTS = {
        interval: 5000,
        pause: "hover",
        wrap: !0,
        keyboard: !0
    }, j.prototype.keydown = function (b) {
        if (!/input|textarea/i.test(b.target.tagName)) {
            switch (b.which) {
                case 37:
                    this.prev();
                    break;
                case 39:
                    this.next();
                    break;
                default:
                    return
            }
            b.preventDefault()
        }
    }, j.prototype.cycle = function (a) {
        return a || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(g.proxy(this.next, this), this.options.interval)), this
    }, j.prototype.getItemIndex = function (b) {
        return this.$items = b.parent().children(".item"), this.$items.index(b || this.$active)
    }, j.prototype.getItemForDirection = function (l, k) {
        var p = this.getItemIndex(k), o = "prev" == l && 0 === p || "next" == l && p == this.$items.length - 1;
        if (o && !this.options.wrap) {
            return k
        }
        var n = "prev" == l ? -1 : 1, m = (p + n) % this.$items.length;
        return this.$items.eq(m)
    }, j.prototype.to = function (e) {
        var d = this, k = this.getItemIndex(this.$active = this.$element.find(".item.active"));
        return e > this.$items.length - 1 || 0 > e ? void 0 : this.sliding ? this.$element.one("slid.bs.carousel", function () {
            d.to(e)
        }) : k == e ? this.pause().cycle() : this.slide(e > k ? "next" : "prev", this.$items.eq(e))
    }, j.prototype.pause = function (a) {
        return a || (this.paused = !0), this.$element.find(".next, .prev").length && g.support.transition && (this.$element.trigger(g.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
    }, j.prototype.next = function () {
        return this.sliding ? void 0 : this.slide("next")
    }, j.prototype.prev = function () {
        return this.sliding ? void 0 : this.slide("prev")
    }, j.prototype.slide = function (v, u) {
        var t = this.$element.find(".item.active"), s = u || this.getItemForDirection(v, t), r = this.interval,
            q = "next" == v ? "left" : "right", p = this;
        if (s.hasClass("active")) {
            return this.sliding = !1
        }
        var o = s[0], n = g.Event("slide.bs.carousel", {relatedTarget: o, direction: q});
        if (this.$element.trigger(n), !n.isDefaultPrevented()) {
            if (this.sliding = !0, r && this.pause(), this.$indicators.length) {
                this.$indicators.find(".active").removeClass("active");
                var c = g(this.$indicators.children()[this.getItemIndex(s)]);
                c && c.addClass("active")
            }
            var a = g.Event("slid.bs.carousel", {relatedTarget: o, direction: q});
            return g.support.transition && this.$element.hasClass("slide") ? (s.addClass(v), s[0].offsetWidth, t.addClass(q), s.addClass(q), t.one("bsTransitionEnd", function () {
                s.removeClass([v, q].join(" ")).addClass("active"), t.removeClass(["active", q].join(" ")), p.sliding = !1, setTimeout(function () {
                    p.$element.trigger(a)
                }, 0)
            }).emulateTransitionEnd(j.TRANSITION_DURATION)) : (t.removeClass("active"), s.addClass("active"), this.sliding = !1, this.$element.trigger(a)), r && this.cycle(), this
        }
    };
    var i = g.fn.carousel;
    g.fn.carousel = f, g.fn.carousel.Constructor = j, g.fn.carousel.noConflict = function () {
        return g.fn.carousel = i, this
    };
    var h = function (n) {
        var m, l = g(this), k = g(l.attr("data-target") || (m = l.attr("href")) && m.replace(/.*(?=#[^\s]+$)/, ""));
        if (k.hasClass("carousel")) {
            var b = g.extend({}, k.data(), l.data()), a = l.attr("data-slide-to");
            a && (b.interval = !1), f.call(k, b), a && k.data("bs.carousel").to(a), n.preventDefault()
        }
    };
    g(document).on("click.bs.carousel.data-api", "[data-slide]", h).on("click.bs.carousel.data-api", "[data-slide-to]", h), g(window).on("load", function () {
        g('[data-ride="carousel"]').each(function () {
            var a = g(this);
            f.call(a, a.data())
        })
    })
}(jQuery), +function (g) {
    function f(a) {
        var k, e = a.attr("data-target") || (k = a.attr("href")) && k.replace(/.*(?=#[^\s]+$)/, "");
        return g(e)
    }

    function j(a) {
        return this.each(function () {
            var k = g(this), d = k.data("bs.collapse"),
                b = g.extend({}, i.DEFAULTS, k.data(), "object" == typeof a && a);
            !d && b.toggle && /show|hide/.test(a) && (b.toggle = !1), d || k.data("bs.collapse", d = new i(this, b)), "string" == typeof a && d[a]()
        })
    }

    var i = function (a, d) {
        this.$element = g(a), this.options = g.extend({}, i.DEFAULTS, d), this.$trigger = g('[data-toggle="collapse"][href="#' + a.id + '"],[data-toggle="collapse"][data-target="#' + a.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle()
    };
    i.VERSION = "3.3.6", i.TRANSITION_DURATION = 350, i.DEFAULTS = {toggle: !0}, i.prototype.dimension = function () {
        var b = this.$element.hasClass("width");
        return b ? "width" : "height"
    }, i.prototype.show = function () {
        if (!this.transitioning && !this.$element.hasClass("in")) {
            var a, m = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
            if (!(m && m.length && (a = m.data("bs.collapse"), a && a.transitioning))) {
                var l = g.Event("show.bs.collapse");
                if (this.$element.trigger(l), !l.isDefaultPrevented()) {
                    m && m.length && (j.call(m, "hide"), a || m.data("bs.collapse", null));
                    var k = this.dimension();
                    this.$element.removeClass("collapse").addClass("collapsing")[k](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;
                    var d = function () {
                        this.$element.removeClass("collapsing").addClass("collapse in")[k](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
                    };
                    if (!g.support.transition) {
                        return d.call(this)
                    }
                    var c = g.camelCase(["scroll", k].join("-"));
                    this.$element.one("bsTransitionEnd", g.proxy(d, this)).emulateTransitionEnd(i.TRANSITION_DURATION)[k](this.$element[0][c])
                }
            }
        }
    }, i.prototype.hide = function () {
        if (!this.transitioning && this.$element.hasClass("in")) {
            var a = g.Event("hide.bs.collapse");
            if (this.$element.trigger(a), !a.isDefaultPrevented()) {
                var k = this.dimension();
                this.$element[k](this.$element[k]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;
                var d = function () {
                    this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
                };
                return g.support.transition ? void this.$element[k](0).one("bsTransitionEnd", g.proxy(d, this)).emulateTransitionEnd(i.TRANSITION_DURATION) : d.call(this)
            }
        }
    }, i.prototype.toggle = function () {
        this[this.$element.hasClass("in") ? "hide" : "show"]()
    }, i.prototype.getParent = function () {
        return g(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(g.proxy(function (k, b) {
            var a = g(b);
            this.addAriaAndCollapsedClass(f(a), a)
        }, this)).end()
    }, i.prototype.addAriaAndCollapsedClass = function (e, d) {
        var k = e.hasClass("in");
        e.attr("aria-expanded", k), d.toggleClass("collapsed", !k).attr("aria-expanded", k)
    };
    var h = g.fn.collapse;
    g.fn.collapse = j, g.fn.collapse.Constructor = i, g.fn.collapse.noConflict = function () {
        return g.fn.collapse = h, this
    }, g(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function (l) {
        var k = g(this);
        k.attr("data-target") || l.preventDefault();
        var c = f(k), b = c.data("bs.collapse"), a = b ? "toggle" : k.data();
        j.call(c, a)
    })
}(jQuery), +function (j) {
    function i(a) {
        var f = a.attr("data-target");
        f || (f = a.attr("href"), f = f && /#[A-Za-z]/.test(f) && f.replace(/.*(?=#[^\s]*$)/, ""));
        var e = f && j(f);
        return e && e.length ? e : a.parent()
    }

    function p(a) {
        a && 3 === a.which || (j(n).remove(), j(m).each(function () {
            var g = j(this), c = i(g), b = {relatedTarget: this};
            c.hasClass("open") && (a && "click" == a.type && /input|textarea/i.test(a.target.tagName) && j.contains(c[0], a.target) || (c.trigger(a = j.Event("hide.bs.dropdown", b)), a.isDefaultPrevented() || (g.attr("aria-expanded", "false"), c.removeClass("open").trigger(j.Event("hidden.bs.dropdown", b)))))
        }))
    }

    function o(a) {
        return this.each(function () {
            var e = j(this), b = e.data("bs.dropdown");
            b || e.data("bs.dropdown", b = new l(this)), "string" == typeof a && b[a].call(e)
        })
    }

    var n = ".dropdown-backdrop", m = '[data-toggle="dropdown"]', l = function (a) {
        j(a).on("click.bs.dropdown", this.toggle)
    };
    l.VERSION = "3.3.6", l.prototype.toggle = function (r) {
        var q = j(this);
        if (!q.is(".disabled, :disabled")) {
            var c = i(q), b = c.hasClass("open");
            if (p(), !b) {
                "ontouchstart" in document.documentElement && !c.closest(".navbar-nav").length && j(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(j(this)).on("click", p);
                var a = {relatedTarget: this};
                if (c.trigger(r = j.Event("show.bs.dropdown", a)), r.isDefaultPrevented()) {
                    return
                }
                q.trigger("focus").attr("aria-expanded", "true"), c.toggleClass("open").trigger(j.Event("shown.bs.dropdown", a))
            }
            return !1
        }
    }, l.prototype.keydown = function (t) {
        if (/(38|40|27|32)/.test(t.which) && !/input|textarea/i.test(t.target.tagName)) {
            var s = j(this);
            if (t.preventDefault(), t.stopPropagation(), !s.is(".disabled, :disabled")) {
                var r = i(s), q = r.hasClass("open");
                if (!q && 27 != t.which || q && 27 == t.which) {
                    return 27 == t.which && r.find(m).trigger("focus"), s.trigger("click")
                }
                var f = " li:not(.disabled):visible a", b = r.find(".dropdown-menu" + f);
                if (b.length) {
                    var a = b.index(t.target);
                    38 == t.which && a > 0 && a--, 40 == t.which && a < b.length - 1 && a++, ~a || (a = 0), b.eq(a).trigger("focus")
                }
            }
        }
    };
    var k = j.fn.dropdown;
    j.fn.dropdown = o, j.fn.dropdown.Constructor = l, j.fn.dropdown.noConflict = function () {
        return j.fn.dropdown = k, this
    }, j(document).on("click.bs.dropdown.data-api", p).on("click.bs.dropdown.data-api", ".dropdown form", function (b) {
        b.stopPropagation()
    }).on("click.bs.dropdown.data-api", m, l.prototype.toggle).on("keydown.bs.dropdown.data-api", m, l.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", l.prototype.keydown)
}(jQuery), +function (f) {
    function e(a, c) {
        return this.each(function () {
            var i = f(this), d = i.data("bs.modal"), b = f.extend({}, h.DEFAULTS, i.data(), "object" == typeof a && a);
            d || i.data("bs.modal", d = new h(this, b)), "string" == typeof a ? d[a](c) : b.show && d.show(c)
        })
    }

    var h = function (a, d) {
        this.options = d, this.$body = f(document.body), this.$element = f(a), this.$dialog = this.$element.find(".modal-dialog"), this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, this.ignoreBackdropClick = !1, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, f.proxy(function () {
            this.$element.trigger("loaded.bs.modal")
        }, this))
    };
    h.VERSION = "3.3.6", h.TRANSITION_DURATION = 300, h.BACKDROP_TRANSITION_DURATION = 150, h.DEFAULTS = {
        backdrop: !0,
        keyboard: !0,
        show: !0
    }, h.prototype.toggle = function (b) {
        return this.isShown ? this.hide() : this.show(b)
    }, h.prototype.show = function (a) {
        var i = this, c = f.Event("show.bs.modal", {relatedTarget: a});
        this.$element.trigger(c), this.isShown || c.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', f.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function () {
            i.$element.one("mouseup.dismiss.bs.modal", function (d) {
                f(d.target).is(i.$element) && (i.ignoreBackdropClick = !0)
            })
        }), this.backdrop(function () {
            var d = f.support.transition && i.$element.hasClass("fade");
            i.$element.parent().length || i.$element.appendTo(i.$body), i.$element.show().scrollTop(0), i.adjustDialog(), d && i.$element[0].offsetWidth, i.$element.addClass("in"), i.enforceFocus();
            var b = f.Event("shown.bs.modal", {relatedTarget: a});
            d ? i.$dialog.one("bsTransitionEnd", function () {
                i.$element.trigger("focus").trigger(b)
            }).emulateTransitionEnd(h.TRANSITION_DURATION) : i.$element.trigger("focus").trigger(b)
        }))
    }, h.prototype.hide = function (a) {
        a && a.preventDefault(), a = f.Event("hide.bs.modal"), this.$element.trigger(a), this.isShown && !a.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), f(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), f.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", f.proxy(this.hideModal, this)).emulateTransitionEnd(h.TRANSITION_DURATION) : this.hideModal())
    }, h.prototype.enforceFocus = function () {
        f(document).off("focusin.bs.modal").on("focusin.bs.modal", f.proxy(function (b) {
            this.$element[0] === b.target || this.$element.has(b.target).length || this.$element.trigger("focus")
        }, this))
    }, h.prototype.escape = function () {
        this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", f.proxy(function (b) {
            27 == b.which && this.hide()
        }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
    }, h.prototype.resize = function () {
        this.isShown ? f(window).on("resize.bs.modal", f.proxy(this.handleUpdate, this)) : f(window).off("resize.bs.modal")
    }, h.prototype.hideModal = function () {
        var b = this;
        this.$element.hide(), this.backdrop(function () {
            b.$body.removeClass("modal-open"), b.resetAdjustments(), b.resetScrollbar(), b.$element.trigger("hidden.bs.modal")
        })
    }, h.prototype.removeBackdrop = function () {
        this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
    }, h.prototype.backdrop = function (a) {
        var k = this, j = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
            var i = f.support.transition && j;
            if (this.$backdrop = f(document.createElement("div")).addClass("modal-backdrop " + j).appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", f.proxy(function (b) {
                    return this.ignoreBackdropClick ? void (this.ignoreBackdropClick = !1) : void (b.target === b.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide()))
                }, this)), i && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !a) {
                return
            }
            i ? this.$backdrop.one("bsTransitionEnd", a).emulateTransitionEnd(h.BACKDROP_TRANSITION_DURATION) : a()
        } else {
            if (!this.isShown && this.$backdrop) {
                this.$backdrop.removeClass("in");
                var c = function () {
                    k.removeBackdrop(), a && a()
                };
                f.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", c).emulateTransitionEnd(h.BACKDROP_TRANSITION_DURATION) : c()
            } else {
                a && a()
            }
        }
    }, h.prototype.handleUpdate = function () {
        this.adjustDialog()
    }, h.prototype.adjustDialog = function () {
        var b = this.$element[0].scrollHeight > document.documentElement.clientHeight;
        this.$element.css({
            paddingLeft: !this.bodyIsOverflowing && b ? this.scrollbarWidth : "",
            paddingRight: this.bodyIsOverflowing && !b ? this.scrollbarWidth : ""
        })
    }, h.prototype.resetAdjustments = function () {
        this.$element.css({paddingLeft: "", paddingRight: ""})
    }, h.prototype.checkScrollbar = function () {
        var d = window.innerWidth;
        if (!d) {
            var c = document.documentElement.getBoundingClientRect();
            d = c.right - Math.abs(c.left)
        }
        this.bodyIsOverflowing = document.body.clientWidth < d, this.scrollbarWidth = this.measureScrollbar()
    }, h.prototype.setScrollbar = function () {
        var b = parseInt(this.$body.css("padding-right") || 0, 10);
        this.originalBodyPad = document.body.style.paddingRight || "", this.bodyIsOverflowing && this.$body.css("padding-right", b + this.scrollbarWidth)
    }, h.prototype.resetScrollbar = function () {
        this.$body.css("padding-right", this.originalBodyPad)
    }, h.prototype.measureScrollbar = function () {
        var d = document.createElement("div");
        d.className = "modal-scrollbar-measure", this.$body.append(d);
        var c = d.offsetWidth - d.clientWidth;
        return this.$body[0].removeChild(d), c
    };
    var g = f.fn.modal;
    f.fn.modal = e, f.fn.modal.Constructor = h, f.fn.modal.noConflict = function () {
        return f.fn.modal = g, this
    }, f(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function (k) {
        var j = f(this), i = j.attr("href"), b = f(j.attr("data-target") || i && i.replace(/.*(?=#[^\s]+$)/, "")),
            a = b.data("bs.modal") ? "toggle" : f.extend({remote: !/#/.test(i) && i}, b.data(), j.data());
        j.is("a") && k.preventDefault(), b.one("show.bs.modal", function (c) {
            c.isDefaultPrevented() || b.one("hidden.bs.modal", function () {
                j.is(":visible") && j.trigger("focus")
            })
        }), e.call(b, a, this)
    })
}(jQuery), +function (f) {
    function e(a) {
        return this.each(function () {
            var i = f(this), c = i.data("bs.tooltip"), b = "object" == typeof a && a;
            (c || !/destroy|hide/.test(a)) && (c || i.data("bs.tooltip", c = new h(this, b)), "string" == typeof a && c[a]())
        })
    }

    var h = function (d, c) {
        this.type = null, this.options = null, this.enabled = null, this.timeout = null, this.hoverState = null, this.$element = null, this.inState = null, this.init("tooltip", d, c)
    };
    h.VERSION = "3.3.6", h.TRANSITION_DURATION = 150, h.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1,
        viewport: {selector: "body", padding: 0}
    }, h.prototype.init = function (a, p, o) {
        if (this.enabled = !0, this.type = a, this.$element = f(p), this.options = this.getOptions(o), this.$viewport = this.options.viewport && f(f.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport), this.inState = {
                click: !1,
                hover: !1,
                focus: !1
            }, this.$element[0] instanceof document.constructor && !this.options.selector) {
            throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!")
        }
        for (var n = this.options.trigger.split(" "), m = n.length; m--;) {
            var l = n[m];
            if ("click" == l) {
                this.$element.on("click." + this.type, this.options.selector, f.proxy(this.toggle, this))
            } else {
                if ("manual" != l) {
                    var k = "hover" == l ? "mouseenter" : "focusin", j = "hover" == l ? "mouseleave" : "focusout";
                    this.$element.on(k + "." + this.type, this.options.selector, f.proxy(this.enter, this)), this.$element.on(j + "." + this.type, this.options.selector, f.proxy(this.leave, this))
                }
            }
        }
        this.options.selector ? this._options = f.extend({}, this.options, {
            trigger: "manual",
            selector: ""
        }) : this.fixTitle()
    }, h.prototype.getDefaults = function () {
        return h.DEFAULTS
    }, h.prototype.getOptions = function (a) {
        return a = f.extend({}, this.getDefaults(), this.$element.data(), a), a.delay && "number" == typeof a.delay && (a.delay = {
            show: a.delay,
            hide: a.delay
        }), a
    }, h.prototype.getDelegateOptions = function () {
        var a = {}, d = this.getDefaults();
        return this._options && f.each(this._options, function (b, c) {
            d[b] != c && (a[b] = c)
        }), a
    }, h.prototype.enter = function (a) {
        var d = a instanceof this.constructor ? a : f(a.currentTarget).data("bs." + this.type);
        return d || (d = new this.constructor(a.currentTarget, this.getDelegateOptions()), f(a.currentTarget).data("bs." + this.type, d)), a instanceof f.Event && (d.inState["focusin" == a.type ? "focus" : "hover"] = !0), d.tip().hasClass("in") || "in" == d.hoverState ? void (d.hoverState = "in") : (clearTimeout(d.timeout), d.hoverState = "in", d.options.delay && d.options.delay.show ? void (d.timeout = setTimeout(function () {
            "in" == d.hoverState && d.show()
        }, d.options.delay.show)) : d.show())
    }, h.prototype.isInStateTrue = function () {
        for (var b in this.inState) {
            if (this.inState[b]) {
                return !0
            }
        }
        return !1
    }, h.prototype.leave = function (a) {
        var d = a instanceof this.constructor ? a : f(a.currentTarget).data("bs." + this.type);
        return d || (d = new this.constructor(a.currentTarget, this.getDelegateOptions()), f(a.currentTarget).data("bs." + this.type, d)), a instanceof f.Event && (d.inState["focusout" == a.type ? "focus" : "hover"] = !1), d.isInStateTrue() ? void 0 : (clearTimeout(d.timeout), d.hoverState = "out", d.options.delay && d.options.delay.hide ? void (d.timeout = setTimeout(function () {
            "out" == d.hoverState && d.hide()
        }, d.options.delay.hide)) : d.hide())
    }, h.prototype.show = function () {
        var D = f.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
            this.$element.trigger(D);
            var C = f.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
            if (D.isDefaultPrevented() || !C) {
                return
            }
            var B = this, A = this.tip(), z = this.getUID(this.type);
            this.setContent(), A.attr("id", z), this.$element.attr("aria-describedby", z), this.options.animation && A.addClass("fade");
            var y = "function" == typeof this.options.placement ? this.options.placement.call(this, A[0], this.$element[0]) : this.options.placement,
                x = /\s?auto?\s?/i, w = x.test(y);
            w && (y = y.replace(x, "") || "top"), A.detach().css({
                top: 0,
                left: 0,
                display: "block"
            }).addClass(y).data("bs." + this.type, this), this.options.container ? A.appendTo(this.options.container) : A.insertAfter(this.$element), this.$element.trigger("inserted.bs." + this.type);
            var v = this.getPosition(), u = A[0].offsetWidth, t = A[0].offsetHeight;
            if (w) {
                var s = y, r = this.getPosition(this.$viewport);
                y = "bottom" == y && v.bottom + t > r.bottom ? "top" : "top" == y && v.top - t < r.top ? "bottom" : "right" == y && v.right + u > r.width ? "left" : "left" == y && v.left - u < r.left ? "right" : y, A.removeClass(s).addClass(y)
            }
            var c = this.getCalculatedOffset(y, v, u, t);
            this.applyPlacement(c, y);
            var a = function () {
                var b = B.hoverState;
                B.$element.trigger("shown.bs." + B.type), B.hoverState = null, "out" == b && B.leave(B)
            };
            f.support.transition && this.$tip.hasClass("fade") ? A.one("bsTransitionEnd", a).emulateTransitionEnd(h.TRANSITION_DURATION) : a()
        }
    }, h.prototype.applyPlacement = function (z, y) {
        var x = this.tip(), w = x[0].offsetWidth, v = x[0].offsetHeight, u = parseInt(x.css("margin-top"), 10),
            t = parseInt(x.css("margin-left"), 10);
        isNaN(u) && (u = 0), isNaN(t) && (t = 0), z.top += u, z.left += t, f.offset.setOffset(x[0], f.extend({
            using: function (b) {
                x.css({top: Math.round(b.top), left: Math.round(b.left)})
            }
        }, z), 0), x.addClass("in");
        var s = x[0].offsetWidth, r = x[0].offsetHeight;
        "top" == y && r != v && (z.top = z.top + v - r);
        var q = this.getViewportAdjustedDelta(y, z, s, r);
        q.left ? z.left += q.left : z.top += q.top;
        var p = /top|bottom/.test(y), o = p ? 2 * q.left - w + s : 2 * q.top - v + r,
            a = p ? "offsetWidth" : "offsetHeight";
        x.offset(z), this.replaceArrow(o, x[0][a], p)
    }, h.prototype.replaceArrow = function (i, d, j) {
        this.arrow().css(j ? "left" : "top", 50 * (1 - i / d) + "%").css(j ? "top" : "left", "")
    }, h.prototype.setContent = function () {
        var d = this.tip(), c = this.getTitle();
        d.find(".tooltip-inner")[this.options.html ? "html" : "text"](c), d.removeClass("fade in top bottom left right")
    }, h.prototype.hide = function (a) {
        function k() {
            "in" != j.hoverState && i.detach(), j.$element.removeAttr("aria-describedby").trigger("hidden.bs." + j.type), a && a()
        }

        var j = this, i = f(this.$tip), c = f.Event("hide.bs." + this.type);
        return this.$element.trigger(c), c.isDefaultPrevented() ? void 0 : (i.removeClass("in"), f.support.transition && i.hasClass("fade") ? i.one("bsTransitionEnd", k).emulateTransitionEnd(h.TRANSITION_DURATION) : k(), this.hoverState = null, this)
    }, h.prototype.fixTitle = function () {
        var b = this.$element;
        (b.attr("title") || "string" != typeof b.attr("data-original-title")) && b.attr("data-original-title", b.attr("title") || "").attr("title", "")
    }, h.prototype.hasContent = function () {
        return this.getTitle()
    }, h.prototype.getPosition = function (a) {
        a = a || this.$element;
        var n = a[0], m = "BODY" == n.tagName, l = n.getBoundingClientRect();
        null == l.width && (l = f.extend({}, l, {width: l.right - l.left, height: l.bottom - l.top}));
        var k = m ? {top: 0, left: 0} : a.offset(),
            j = {scroll: m ? document.documentElement.scrollTop || document.body.scrollTop : a.scrollTop()},
            i = m ? {width: f(window).width(), height: f(window).height()} : null;
        return f.extend({}, l, j, i, k)
    }, h.prototype.getCalculatedOffset = function (j, i, l, k) {
        return "bottom" == j ? {
            top: i.top + i.height,
            left: i.left + i.width / 2 - l / 2
        } : "top" == j ? {
            top: i.top - k,
            left: i.left + i.width / 2 - l / 2
        } : "left" == j ? {top: i.top + i.height / 2 - k / 2, left: i.left - l} : {
            top: i.top + i.height / 2 - k / 2,
            left: i.left + i.width
        }
    }, h.prototype.getViewportAdjustedDelta = function (v, u, t, s) {
        var r = {top: 0, left: 0};
        if (!this.$viewport) {
            return r
        }
        var q = this.options.viewport && this.options.viewport.padding || 0, p = this.getPosition(this.$viewport);
        if (/right|left/.test(v)) {
            var o = u.top - q - p.scroll, n = u.top + q - p.scroll + s;
            o < p.top ? r.top = p.top - o : n > p.top + p.height && (r.top = p.top + p.height - n)
        } else {
            var m = u.left - q, l = u.left + q + t;
            m < p.left ? r.left = p.left - m : l > p.right && (r.left = p.left + p.width - l)
        }
        return r
    }, h.prototype.getTitle = function () {
        var i, d = this.$element, j = this.options;
        return i = d.attr("data-original-title") || ("function" == typeof j.title ? j.title.call(d[0]) : j.title)
    }, h.prototype.getUID = function (b) {
        do {
            b += ~~(1000000 * Math.random())
        } while (document.getElementById(b));
        return b
    }, h.prototype.tip = function () {
        if (!this.$tip && (this.$tip = f(this.options.template), 1 != this.$tip.length)) {
            throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!")
        }
        return this.$tip
    }, h.prototype.arrow = function () {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
    }, h.prototype.enable = function () {
        this.enabled = !0
    }, h.prototype.disable = function () {
        this.enabled = !1
    }, h.prototype.toggleEnabled = function () {
        this.enabled = !this.enabled
    }, h.prototype.toggle = function (a) {
        var d = this;
        a && (d = f(a.currentTarget).data("bs." + this.type), d || (d = new this.constructor(a.currentTarget, this.getDelegateOptions()), f(a.currentTarget).data("bs." + this.type, d))), a ? (d.inState.click = !d.inState.click, d.isInStateTrue() ? d.enter(d) : d.leave(d)) : d.tip().hasClass("in") ? d.leave(d) : d.enter(d)
    }, h.prototype.destroy = function () {
        var b = this;
        clearTimeout(this.timeout), this.hide(function () {
            b.$element.off("." + b.type).removeData("bs." + b.type), b.$tip && b.$tip.detach(), b.$tip = null, b.$arrow = null, b.$viewport = null
        })
    };
    var g = f.fn.tooltip;
    f.fn.tooltip = e, f.fn.tooltip.Constructor = h, f.fn.tooltip.noConflict = function () {
        return f.fn.tooltip = g, this
    }
}(jQuery), +function (f) {
    function e(a) {
        return this.each(function () {
            var i = f(this), c = i.data("bs.popover"), b = "object" == typeof a && a;
            (c || !/destroy|hide/.test(a)) && (c || i.data("bs.popover", c = new h(this, b)), "string" == typeof a && c[a]())
        })
    }

    var h = function (d, c) {
        this.init("popover", d, c)
    };
    if (!f.fn.tooltip) {
        throw new Error("Popover requires tooltip.js")
    }
    h.VERSION = "3.3.6", h.DEFAULTS = f.extend({}, f.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    }), h.prototype = f.extend({}, f.fn.tooltip.Constructor.prototype), h.prototype.constructor = h, h.prototype.getDefaults = function () {
        return h.DEFAULTS
    }, h.prototype.setContent = function () {
        var i = this.tip(), d = this.getTitle(), j = this.getContent();
        i.find(".popover-title")[this.options.html ? "html" : "text"](d), i.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof j ? "html" : "append" : "text"](j), i.removeClass("fade top bottom left right in"), i.find(".popover-title").html() || i.find(".popover-title").hide()
    }, h.prototype.hasContent = function () {
        return this.getTitle() || this.getContent()
    }, h.prototype.getContent = function () {
        var d = this.$element, c = this.options;
        return d.attr("data-content") || ("function" == typeof c.content ? c.content.call(d[0]) : c.content)
    }, h.prototype.arrow = function () {
        return this.$arrow = this.$arrow || this.tip().find(".arrow")
    };
    var g = f.fn.popover;
    f.fn.popover = e, f.fn.popover.Constructor = h, f.fn.popover.noConflict = function () {
        return f.fn.popover = g, this
    }
}(jQuery), +function (f) {
    function e(b, a) {
        this.$body = f(document.body), this.$scrollElement = f(f(b).is(document.body) ? window : b), this.options = f.extend({}, e.DEFAULTS, a), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", f.proxy(this.process, this)), this.refresh(), this.process()
    }

    function h(a) {
        return this.each(function () {
            var i = f(this), c = i.data("bs.scrollspy"), b = "object" == typeof a && a;
            c || i.data("bs.scrollspy", c = new e(this, b)), "string" == typeof a && c[a]()
        })
    }

    e.VERSION = "3.3.6", e.DEFAULTS = {offset: 10}, e.prototype.getScrollHeight = function () {
        return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
    }, e.prototype.refresh = function () {
        var a = this, j = "offset", i = 0;
        this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight(), f.isWindow(this.$scrollElement[0]) || (j = "position", i = this.$scrollElement.scrollTop()), this.$body.find(this.selector).map(function () {
            var c = f(this), k = c.data("target") || c.attr("href"), d = /^#./.test(k) && f(k);
            return d && d.length && d.is(":visible") && [[d[j]().top + i, k]] || null
        }).sort(function (d, c) {
            return d[0] - c[0]
        }).each(function () {
            a.offsets.push(this[0]), a.targets.push(this[1])
        })
    }, e.prototype.process = function () {
        var j, i = this.$scrollElement.scrollTop() + this.options.offset, o = this.getScrollHeight(),
            n = this.options.offset + o - this.$scrollElement.height(), m = this.offsets, l = this.targets,
            k = this.activeTarget;
        if (this.scrollHeight != o && this.refresh(), i >= n) {
            return k != (j = l[l.length - 1]) && this.activate(j)
        }
        if (k && i < m[0]) {
            return this.activeTarget = null, this.clear()
        }
        for (j = m.length; j--;) {
            k != l[j] && i >= m[j] && (void 0 === m[j + 1] || i < m[j + 1]) && this.activate(l[j])
        }
    }, e.prototype.activate = function (a) {
        this.activeTarget = a, this.clear();
        var j = this.selector + '[data-target="' + a + '"],' + this.selector + '[href="' + a + '"]',
            i = f(j).parents("li").addClass("active");
        i.parent(".dropdown-menu").length && (i = i.closest("li.dropdown").addClass("active")), i.trigger("activate.bs.scrollspy")
    }, e.prototype.clear = function () {
        f(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
    };
    var g = f.fn.scrollspy;
    f.fn.scrollspy = h, f.fn.scrollspy.Constructor = e, f.fn.scrollspy.noConflict = function () {
        return f.fn.scrollspy = g, this
    }, f(window).on("load.bs.scrollspy.data-api", function () {
        f('[data-spy="scroll"]').each(function () {
            var a = f(this);
            h.call(a, a.data())
        })
    })
}(jQuery), +function (g) {
    function f(a) {
        return this.each(function () {
            var c = g(this), b = c.data("bs.tab");
            b || c.data("bs.tab", b = new j(this)), "string" == typeof a && b[a]()
        })
    }

    var j = function (a) {
        this.element = g(a)
    };
    j.VERSION = "3.3.6", j.TRANSITION_DURATION = 150, j.prototype.show = function () {
        var a = this.element, p = a.closest("ul:not(.dropdown-menu)"), o = a.data("target");
        if (o || (o = a.attr("href"), o = o && o.replace(/.*(?=#[^\s]*$)/, "")), !a.parent("li").hasClass("active")) {
            var n = p.find(".active:last a"), m = g.Event("hide.bs.tab", {relatedTarget: a[0]}),
                l = g.Event("show.bs.tab", {relatedTarget: n[0]});
            if (n.trigger(m), a.trigger(l), !l.isDefaultPrevented() && !m.isDefaultPrevented()) {
                var k = g(o);
                this.activate(a.closest("li"), p), this.activate(k, k.parent(), function () {
                    n.trigger({type: "hidden.bs.tab", relatedTarget: a[0]}), a.trigger({
                        type: "shown.bs.tab",
                        relatedTarget: n[0]
                    })
                })
            }
        }
    }, j.prototype.activate = function (a, n, m) {
        function l() {
            k.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), a.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), c ? (a[0].offsetWidth, a.addClass("in")) : a.removeClass("fade"), a.parent(".dropdown-menu").length && a.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), m && m()
        }

        var k = n.find("> .active"),
            c = m && g.support.transition && (k.length && k.hasClass("fade") || !!n.find("> .fade").length);
        k.length && c ? k.one("bsTransitionEnd", l).emulateTransitionEnd(j.TRANSITION_DURATION) : l(), k.removeClass("in")
    };
    var i = g.fn.tab;
    g.fn.tab = f, g.fn.tab.Constructor = j, g.fn.tab.noConflict = function () {
        return g.fn.tab = i, this
    };
    var h = function (a) {
        a.preventDefault(), f.call(g(this), "show")
    };
    g(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', h).on("click.bs.tab.data-api", '[data-toggle="pill"]', h)
}(jQuery), +function (f) {
    function e(a) {
        return this.each(function () {
            var i = f(this), c = i.data("bs.affix"), b = "object" == typeof a && a;
            c || i.data("bs.affix", c = new h(this, b)), "string" == typeof a && c[a]()
        })
    }

    var h = function (a, c) {
        this.options = f.extend({}, h.DEFAULTS, c), this.$target = f(this.options.target).on("scroll.bs.affix.data-api", f.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", f.proxy(this.checkPositionWithEventLoop, this)), this.$element = f(a), this.affixed = null, this.unpin = null, this.pinnedOffset = null, this.checkPosition()
    };
    h.VERSION = "3.3.6", h.RESET = "affix affix-top affix-bottom", h.DEFAULTS = {
        offset: 0,
        target: window
    }, h.prototype.getState = function (t, s, r, q) {
        var p = this.$target.scrollTop(), o = this.$element.offset(), n = this.$target.height();
        if (null != r && "top" == this.affixed) {
            return r > p ? "top" : !1
        }
        if ("bottom" == this.affixed) {
            return null != r ? p + this.unpin <= o.top ? !1 : "bottom" : t - q >= p + n ? !1 : "bottom"
        }
        var m = null == this.affixed, l = m ? p : o.top, k = m ? n : s;
        return null != r && r >= p ? "top" : null != q && l + k >= t - q ? "bottom" : !1
    }, h.prototype.getPinnedOffset = function () {
        if (this.pinnedOffset) {
            return this.pinnedOffset
        }
        this.$element.removeClass(h.RESET).addClass("affix");
        var d = this.$target.scrollTop(), c = this.$element.offset();
        return this.pinnedOffset = c.top - d
    }, h.prototype.checkPositionWithEventLoop = function () {
        setTimeout(f.proxy(this.checkPosition, this), 1)
    }, h.prototype.checkPosition = function () {
        if (this.$element.is(":visible")) {
            var a = this.$element.height(), p = this.options.offset, o = p.top, n = p.bottom,
                m = Math.max(f(document).height(), f(document.body).height());
            "object" != typeof p && (n = o = p), "function" == typeof o && (o = p.top(this.$element)), "function" == typeof n && (n = p.bottom(this.$element));
            var l = this.getState(m, a, o, n);
            if (this.affixed != l) {
                null != this.unpin && this.$element.css("top", "");
                var k = "affix" + (l ? "-" + l : ""), c = f.Event(k + ".bs.affix");
                if (this.$element.trigger(c), c.isDefaultPrevented()) {
                    return
                }
                this.affixed = l, this.unpin = "bottom" == l ? this.getPinnedOffset() : null, this.$element.removeClass(h.RESET).addClass(k).trigger(k.replace("affix", "affixed") + ".bs.affix")
            }
            "bottom" == l && this.$element.offset({top: m - a - n})
        }
    };
    var g = f.fn.affix;
    f.fn.affix = e, f.fn.affix.Constructor = h, f.fn.affix.noConflict = function () {
        return f.fn.affix = g, this
    }, f(window).on("load", function () {
        f('[data-spy="affix"]').each(function () {
            var b = f(this), a = b.data();
            a.offset = a.offset || {}, null != a.offsetBottom && (a.offset.bottom = a.offsetBottom), null != a.offsetTop && (a.offset.top = a.offsetTop), e.call(b, a)
        })
    })
}(jQuery);
(function (d, e, j, h, f, c, b) {
    d.GoogleAnalyticsObject = f;
    d[f] = d[f] || function () {
        (d[f].q = d[f].q || []).push(arguments)
    }, d[f].l = 1 * new Date();
    c = e.createElement(j), b = e.getElementsByTagName(j)[0];
    c.async = 1;
    c.src = h;
    b.parentNode.insertBefore(c, b)
})(window, document, "script", "https://www.google-analytics.com/analytics.js", "ga");
ga("create", "UA-8905947-2", "auto");
ga("send", "pageview");
(function (d) {
    var a = location.href.replace(/#.*/, "");
    var c = d.localScroll = function (e) {
        d("body").localScroll(e)
    };
    c.defaults = {duration: 1000, axis: "y", event: "click", stop: true, target: window, reset: true};
    c.hash = function (f) {
        if (location.hash) {
            f = d.extend({}, c.defaults, f);
            f.hash = false;
            if (f.reset) {
                var g = f.duration;
                delete f.duration;
                d(f.target).scrollTo(0, f);
                f.duration = g
            }
            b(0, location, f)
        }
    };
    d.fn.localScroll = function (e) {
        e = d.extend({}, c.defaults, e);
        return e.lazy ? this.bind(e.event, function (g) {
            var h = d([g.target, g.target.parentNode]).filter(f)[0];
            if (h) {
                b(g, h, e)
            }
        }) : this.find("a,area").filter(f).bind(e.event, function (g) {
            b(g, this, e)
        }).end().end();

        function f() {
            return !!this.href && !!this.hash && this.href.replace(this.hash, "") == a && (!e.filter || d(this).is(e.filter))
        }
    };

    function b(i, p, g) {
        var r = p.hash.slice(1), o = document.getElementById(r) || document.getElementsByName(r)[0];
        if (!o) {
            return
        }
        if (i) {
            i.preventDefault()
        }
        var n = d(g.target);
        if (g.lock && n.is(":animated") || g.onBefore && g.onBefore.call(g, i, o, n) === false) {
            return
        }
        if (g.stop) {
            n.stop(true)
        }
        if (g.hash) {
            var m = o.id == r ? "id" : "name", l = d("<a> </a>").attr(m, r).css({
                position: "absolute",
                top: d(window).scrollTop(),
                left: d(window).scrollLeft()
            });
            o[m] = "";
            d("body").prepend(l);
            location = p.hash;
            l.remove();
            o[m] = r
        }
        n.scrollTo(o, g).trigger("notify.serialScroll", [o])
    }
})(jQuery);
(function (c) {
    var b = c.scrollTo = function (e, d, f) {
        c(window).scrollTo(e, d, f)
    };
    b.defaults = {axis: "xy", duration: parseFloat(c.fn.jquery) >= 1.3 ? 0 : 1, limit: true};
    b.window = function (d) {
        return c(window)._scrollable()
    };
    c.fn._scrollable = function () {
        return this.map(function () {
            var e = this,
                f = !e.nodeName || c.inArray(e.nodeName.toLowerCase(), ["iframe", "#document", "html", "body"]) != -1;
            if (!f) {
                return e
            }
            var d = (e.contentWindow || e).document || e.ownerDocument || e;
            return /webkit/i.test(navigator.userAgent) || d.compatMode == "BackCompat" ? d.body : d.documentElement
        })
    };
    c.fn.scrollTo = function (i, h, d) {
        if (typeof h == "object") {
            d = h;
            h = 0
        }
        if (typeof d == "function") {
            d = {onAfter: d}
        }
        if (i == "max") {
            i = 9000000000
        }
        d = c.extend({}, b.defaults, d);
        h = h || d.duration;
        d.queue = d.queue && d.axis.length > 1;
        if (d.queue) {
            h /= 2
        }
        d.offset = a(d.offset);
        d.over = a(d.over);
        return this._scrollable().each(function () {
            if (i == null) {
                return
            }
            var m = this, j = c(m), k = i, g, e = {}, l = j.is("html,body");
            switch (typeof k) {
                case"number":
                case"string":
                    if (/^([+-]=?)?\d+(\.\d+)?(px|%)?$/.test(k)) {
                        k = a(k);
                        break
                    }
                    k = c(k, this);
                    if (!k.length) {
                        return
                    }
                case"object":
                    if (k.is || k.style) {
                        g = (k = c(k)).offset()
                    }
            }
            c.each(d.axis.split(""), function (t, r) {
                var o = r == "x" ? "Left" : "Top", v = o.toLowerCase(), s = "scroll" + o, p = m[s], n = b.max(m, r);
                if (g) {
                    e[s] = g[v] + (l ? 0 : p - j.offset()[v]);
                    if (d.margin) {
                        e[s] -= parseInt(k.css("margin" + o)) || 0;
                        e[s] -= parseInt(k.css("border" + o + "Width")) || 0
                    }
                    e[s] += d.offset[v] || 0;
                    if (d.over[v]) {
                        e[s] += k[r == "x" ? "width" : "height"]() * d.over[v]
                    }
                } else {
                    var u = k[v];
                    e[s] = u.slice && u.slice(-1) == "%" ? parseFloat(u) / 100 * n : u
                }
                if (d.limit && /^\d+$/.test(e[s])) {
                    e[s] = e[s] <= 0 ? 0 : Math.min(e[s], n)
                }
                if (!t && d.queue) {
                    if (p != e[s]) {
                        f(d.onAfterFirst)
                    }
                    delete e[s]
                }
            });
            f(d.onAfter);

            function f(n) {
                j.animate(e, h, d.easing, n && function () {
                    n.call(this, i, d)
                })
            }
        }).end()
    };
    b.max = function (h, g) {
        var k = g == "x" ? "Width" : "Height", f = "scroll" + k;
        if (!c(h).is("html,body")) {
            return h[f] - c(h)[k.toLowerCase()]()
        }
        var j = "client" + k, i = h.ownerDocument.documentElement, e = h.ownerDocument.body;
        return Math.max(i[f], e[f]) - Math.min(i[j], e[j])
    };

    function a(d) {
        return typeof d == "object" ? d : {top: d, left: d}
    }
})(jQuery);
(function (c, a, d) {
    var b = c();
    c.fn.dropdownHover = function (e) {
        b = b.add(this.parent());
        return this.each(function () {
            var j = c(this), k = j.parent(), m = {delay: 500, instantlyCloseOthers: !0},
                h = {delay: c(this).data("delay"), instantlyCloseOthers: c(this).data("close-others")},
                g = c.extend(!0, {}, m, e, h), l;
            k.hover(function (f) {
                if (!k.hasClass("open") && !j.is(f.target)) {
                    return !0
                }
                g.instantlyCloseOthers === !0 && b.removeClass("open");
                a.clearTimeout(l);
                k.addClass("open")
            }, function () {
                l = a.setTimeout(function () {
                    k.removeClass("open")
                }, g.delay)
            });
            j.hover(function () {
                g.instantlyCloseOthers === !0 && b.removeClass("open");
                a.clearTimeout(l);
                k.addClass("open")
            });
            k.find(".dropdown-submenu").each(function () {
                var i = c(this), f;
                i.hover(function () {
                    a.clearTimeout(f);
                    i.children(".dropdown-menu").show();
                    i.siblings().children(".dropdown-menu").hide()
                }, function () {
                    var n = i.children(".dropdown-menu");
                    f = a.setTimeout(function () {
                        n.hide()
                    }, g.delay)
                })
            })
        })
    };
    c(document).ready(function () {
        c('[data-hover="dropdown"]').dropdownHover()
    })
})(jQuery, this);
!function (E, D, C, B) {
    function A(a, d) {
        this.settings = null, this.options = E.extend({}, A.Defaults, d), this.$element = E(a), this.drag = E.extend({}, s), this.state = E.extend({}, r), this.e = E.extend({}, p), this._plugins = {}, this._supress = {}, this._current = null, this._speed = null, this._coordinates = [], this._breakpoint = null, this._width = null, this._items = [], this._clones = [], this._mergers = [], this._invalidated = {}, this._pipe = [], E.each(A.Plugins, E.proxy(function (e, c) {
            this._plugins[e[0].toLowerCase() + e.slice(1)] = new c(this)
        }, this)), E.each(A.Pipe, E.proxy(function (e, f) {
            this._pipe.push({filter: f.filter, run: E.proxy(f.run, this)})
        }, this)), this.setup(), this.initialize()
    }

    function z(b) {
        if (b.touches !== B) {
            return {x: b.touches[0].pageX, y: b.touches[0].pageY}
        }
        if (b.touches === B) {
            if (b.pageX !== B) {
                return {x: b.pageX, y: b.pageY}
            }
            if (b.pageX === B) {
                return {x: b.clientX, y: b.clientY}
            }
        }
    }

    function y(g) {
        var c, j, i = C.createElement("div"), h = g;
        for (c in h) {
            if (j = h[c], "undefined" != typeof i.style[j]) {
                return i = null, [j, c]
            }
        }
        return [!1]
    }

    function x() {
        return y(["transition", "WebkitTransition", "MozTransition", "OTransition"])[1]
    }

    function w() {
        return y(["transform", "WebkitTransform", "MozTransform", "OTransform", "msTransform"])[0]
    }

    function v() {
        return y(["perspective", "webkitPerspective", "MozPerspective", "OPerspective", "MsPerspective"])[0]
    }

    function u() {
        return "ontouchstart" in D || !!navigator.msMaxTouchPoints
    }

    function t() {
        return D.navigator.msPointerEnabled
    }

    var s, r, p;
    s = {
        start: 0,
        startX: 0,
        startY: 0,
        current: 0,
        currentX: 0,
        currentY: 0,
        offsetX: 0,
        offsetY: 0,
        distance: null,
        startTime: 0,
        endTime: 0,
        updatedX: 0,
        targetEl: null
    }, r = {isTouch: !1, isScrolling: !1, isSwiping: !1, direction: !1, inMotion: !1}, p = {
        _onDragStart: null,
        _onDragMove: null,
        _onDragEnd: null,
        _transitionEnd: null,
        _resizer: null,
        _responsiveCall: null,
        _goToLoop: null,
        _checkVisibile: null
    }, A.Defaults = {
        items: 3,
        loop: !1,
        center: !1,
        mouseDrag: !0,
        touchDrag: !0,
        pullDrag: !0,
        freeDrag: !1,
        margin: 0,
        stagePadding: 0,
        merge: !1,
        mergeFit: !0,
        autoWidth: !1,
        startPosition: 0,
        rtl: !1,
        smartSpeed: 250,
        fluidSpeed: !1,
        dragEndSpeed: !1,
        responsive: {},
        responsiveRefreshRate: 200,
        responsiveBaseElement: D,
        responsiveClass: !1,
        fallbackEasing: "swing",
        info: !1,
        nestedItemSelector: !1,
        itemElement: "div",
        stageElement: "div",
        themeClass: "owl-theme",
        baseClass: "owl-carousel",
        itemClass: "owl-item",
        centerClass: "center",
        activeClass: "active"
    }, A.Width = {
        Default: "default",
        Inner: "inner",
        Outer: "outer"
    }, A.Plugins = {}, A.Pipe = [{
        filter: ["width", "items", "settings"], run: function (b) {
            b.current = this._items && this._items[this.relative(this._current)]
        }
    }, {
        filter: ["items", "settings"], run: function () {
            var d = this._clones, c = this.$stage.children(".cloned");
            (c.length !== d.length || !this.settings.loop && d.length > 0) && (this.$stage.children(".cloned").remove(), this._clones = [])
        }
    }, {
        filter: ["items", "settings"], run: function () {
            var g, f, j = this._clones, i = this._items,
                h = this.settings.loop ? j.length - Math.max(2 * this.settings.items, 4) : 0;
            for (g = 0, f = Math.abs(h / 2); f > g; g++) {
                h > 0 ? (this.$stage.children().eq(i.length + j.length - 1).remove(), j.pop(), this.$stage.children().eq(0).remove(), j.pop()) : (j.push(j.length / 2), this.$stage.append(i[j[j.length - 1]].clone().addClass("cloned")), j.push(i.length - 1 - (j.length - 1) / 2), this.$stage.prepend(i[j[j.length - 1]].clone().addClass("cloned")))
            }
        }
    }, {
        filter: ["width", "items", "settings"], run: function () {
            var h, g, l, k = this.settings.rtl ? 1 : -1, j = (this.width() / this.settings.items).toFixed(), i = 0;
            for (this._coordinates = [], g = 0, l = this._clones.length + this._items.length; l > g; g++) {
                h = this._mergers[this.relative(g)], h = this.settings.mergeFit && Math.min(h, this.settings.items) || h, i += (this.settings.autoWidth ? this._items[this.relative(g)].width() + this.settings.margin : j * h) * k, this._coordinates.push(i)
            }
        }
    }, {
        filter: ["width", "items", "settings"], run: function () {
            var a, h, g = (this.width() / this.settings.items).toFixed(), f = {
                width: Math.abs(this._coordinates[this._coordinates.length - 1]) + 2 * this.settings.stagePadding,
                "padding-left": this.settings.stagePadding || "",
                "padding-right": this.settings.stagePadding || ""
            };
            if (this.$stage.css(f), f = {width: this.settings.autoWidth ? "auto" : g - this.settings.margin}, f[this.settings.rtl ? "margin-left" : "margin-right"] = this.settings.margin, !this.settings.autoWidth && E.grep(this._mergers, function (b) {
                    return b > 1
                }).length > 0) {
                for (a = 0, h = this._coordinates.length; h > a; a++) {
                    f.width = Math.abs(this._coordinates[a]) - Math.abs(this._coordinates[a - 1] || 0) - this.settings.margin, this.$stage.children().eq(a).css(f)
                }
            } else {
                this.$stage.children().css(f)
            }
        }
    }, {
        filter: ["width", "items", "settings"], run: function (b) {
            b.current && this.reset(this.$stage.children().index(b.current))
        }
    }, {
        filter: ["position"], run: function () {
            this.animate(this.coordinates(this._current))
        }
    }, {
        filter: ["width", "position", "items", "settings"], run: function () {
            var H, G, F, o, n = this.settings.rtl ? 1 : -1, m = 2 * this.settings.stagePadding,
                l = this.coordinates(this.current()) + m, k = l + this.width() * n, j = [];
            for (F = 0, o = this._coordinates.length; o > F; F++) {
                H = this._coordinates[F - 1] || 0, G = Math.abs(this._coordinates[F]) + m * n, (this.op(H, "<=", l) && this.op(H, ">", k) || this.op(G, "<", l) && this.op(G, ">", k)) && j.push(F)
            }
            this.$stage.children("." + this.settings.activeClass).removeClass(this.settings.activeClass), this.$stage.children(":eq(" + j.join("), :eq(") + ")").addClass(this.settings.activeClass), this.settings.center && (this.$stage.children("." + this.settings.centerClass).removeClass(this.settings.centerClass), this.$stage.children().eq(this.current()).addClass(this.settings.centerClass))
        }
    }], A.prototype.initialize = function () {
        if (this.trigger("initialize"), this.$element.addClass(this.settings.baseClass).addClass(this.settings.themeClass).toggleClass("owl-rtl", this.settings.rtl), this.browserSupport(), this.settings.autoWidth && this.state.imagesLoaded !== !0) {
            var a, f, d;
            if (a = this.$element.find("img"), f = this.settings.nestedItemSelector ? "." + this.settings.nestedItemSelector : B, d = this.$element.children(f).width(), a.length && 0 >= d) {
                return this.preloadAutoWidthImages(a), !1
            }
        }
        this.$element.addClass("owl-loading"), this.$stage = E("<" + this.settings.stageElement + ' class="owl-stage"/>').wrap('<div class="owl-stage-outer">'), this.$element.append(this.$stage.parent()), this.replace(this.$element.children().not(this.$stage.parent())), this._width = this.$element.width(), this.refresh(), this.$element.removeClass("owl-loading").addClass("owl-loaded"), this.eventsCall(), this.internalEvents(), this.addTriggerableEvents(), this.trigger("initialized")
    }, A.prototype.setup = function () {
        var a = this.viewport(), h = this.options.responsive, g = -1, f = null;
        h ? (E.each(h, function (b) {
            a >= b && b > g && (g = Number(b))
        }), f = E.extend({}, this.options, h[g]), delete f.responsive, f.responsiveClass && this.$element.attr("class", function (d, c) {
            return c.replace(/\b owl-responsive-\S+/g, "")
        }).addClass("owl-responsive-" + g)) : f = E.extend({}, this.options), (null === this.settings || this._breakpoint !== g) && (this.trigger("change", {
            property: {
                name: "settings",
                value: f
            }
        }), this._breakpoint = g, this.settings = f, this.invalidate("settings"), this.trigger("changed", {
            property: {
                name: "settings",
                value: this.settings
            }
        }))
    }, A.prototype.optionsLogic = function () {
        this.$element.toggleClass("owl-center", this.settings.center), this.settings.loop && this._items.length < this.settings.items && (this.settings.loop = !1), this.settings.autoWidth && (this.settings.stagePadding = !1, this.settings.merge = !1)
    }, A.prototype.prepare = function (a) {
        var d = this.trigger("prepare", {content: a});
        return d.data || (d.data = E("<" + this.settings.itemElement + "/>").addClass(this.settings.itemClass).append(a)), this.trigger("prepared", {content: d.data}), d.data
    }, A.prototype.update = function () {
        for (var a = 0, h = this._pipe.length, g = E.proxy(function (b) {
            return this[b]
        }, this._invalidated), f = {}; h > a;) {
            (this._invalidated.all || E.grep(this._pipe[a].filter, g).length > 0) && this._pipe[a].run(f), a++
        }
        this._invalidated = {}
    }, A.prototype.width = function (b) {
        switch (b = b || A.Width.Default) {
            case A.Width.Inner:
            case A.Width.Outer:
                return this._width;
            default:
                return this._width - 2 * this.settings.stagePadding + this.settings.margin
        }
    }, A.prototype.refresh = function () {
        if (0 === this._items.length) {
            return !1
        }
        (new Date).getTime();
        this.trigger("refresh"), this.setup(), this.optionsLogic(), this.$stage.addClass("owl-refresh"), this.update(), this.$stage.removeClass("owl-refresh"), this.state.orientation = D.orientation, this.watchVisibility(), this.trigger("refreshed")
    }, A.prototype.eventsCall = function () {
        this.e._onDragStart = E.proxy(function (b) {
            this.onDragStart(b)
        }, this), this.e._onDragMove = E.proxy(function (b) {
            this.onDragMove(b)
        }, this), this.e._onDragEnd = E.proxy(function (b) {
            this.onDragEnd(b)
        }, this), this.e._onResize = E.proxy(function (b) {
            this.onResize(b)
        }, this), this.e._transitionEnd = E.proxy(function (b) {
            this.transitionEnd(b)
        }, this), this.e._preventClick = E.proxy(function (b) {
            this.preventClick(b)
        }, this)
    }, A.prototype.onThrottledResize = function () {
        D.clearTimeout(this.resizeTimer), this.resizeTimer = D.setTimeout(this.e._onResize, this.settings.responsiveRefreshRate)
    }, A.prototype.onResize = function () {
        return this._items.length ? this._width === this.$element.width() ? !1 : this.trigger("resize").isDefaultPrevented() ? !1 : (this._width = this.$element.width(), this.invalidate("width"), this.refresh(), void this.trigger("resized")) : !1
    }, A.prototype.eventsRouter = function (d) {
        var c = d.type;
        "mousedown" === c || "touchstart" === c ? this.onDragStart(d) : "mousemove" === c || "touchmove" === c ? this.onDragMove(d) : "mouseup" === c || "touchend" === c ? this.onDragEnd(d) : "touchcancel" === c && this.onDragEnd(d)
    }, A.prototype.internalEvents = function () {
        var a = (u(), t());
        this.settings.mouseDrag ? (this.$stage.on("mousedown", E.proxy(function (b) {
            this.eventsRouter(b)
        }, this)), this.$stage.on("dragstart", function () {
            return !1
        }), this.$stage.get(0).onselectstart = function () {
            return !1
        }) : this.$element.addClass("owl-text-select-on"), this.settings.touchDrag && !a && this.$stage.on("touchstart touchcancel", E.proxy(function (b) {
            this.eventsRouter(b)
        }, this)), this.transitionEndVendor && this.on(this.$stage.get(0), this.transitionEndVendor, this.e._transitionEnd, !1), this.settings.responsive !== !1 && this.on(D, "resize", E.proxy(this.onThrottledResize, this))
    }, A.prototype.onDragStart = function (j) {
        var f, c, b, a;
        if (f = j.originalEvent || j || D.event, 3 === f.which || this.state.isTouch) {
            return !1
        }
        if ("mousedown" === f.type && this.$stage.addClass("owl-grab"), this.trigger("drag"), this.drag.startTime = (new Date).getTime(), this.speed(0), this.state.isTouch = !0, this.state.isScrolling = !1, this.state.isSwiping = !1, this.drag.distance = 0, c = z(f).x, b = z(f).y, this.drag.offsetX = this.$stage.position().left, this.drag.offsetY = this.$stage.position().top, this.settings.rtl && (this.drag.offsetX = this.$stage.position().left + this.$stage.width() - this.width() + this.settings.margin), this.state.inMotion && this.support3d) {
            a = this.getTransformProperty(), this.drag.offsetX = a, this.animate(a), this.state.inMotion = !0
        } else {
            if (this.state.inMotion && !this.support3d) {
                return this.state.inMotion = !1, !1
            }
        }
        this.drag.startX = c - this.drag.offsetX, this.drag.startY = b - this.drag.offsetY, this.drag.start = c - this.drag.startX, this.drag.targetEl = f.target || f.srcElement, this.drag.updatedX = this.drag.start, ("IMG" === this.drag.targetEl.tagName || "A" === this.drag.targetEl.tagName) && (this.drag.targetEl.draggable = !1), E(C).on("mousemove.owl.dragEvents mouseup.owl.dragEvents touchmove.owl.dragEvents touchend.owl.dragEvents", E.proxy(function (d) {
            this.eventsRouter(d)
        }, this))
    }, A.prototype.onDragMove = function (b) {
        var n, m, l, k, f, d;
        this.state.isTouch && (this.state.isScrolling || (n = b.originalEvent || b || D.event, m = z(n).x, l = z(n).y, this.drag.currentX = m - this.drag.startX, this.drag.currentY = l - this.drag.startY, this.drag.distance = this.drag.currentX - this.drag.offsetX, this.drag.distance < 0 ? this.state.direction = this.settings.rtl ? "right" : "left" : this.drag.distance > 0 && (this.state.direction = this.settings.rtl ? "left" : "right"), this.settings.loop ? this.op(this.drag.currentX, ">", this.coordinates(this.minimum())) && "right" === this.state.direction ? this.drag.currentX -= (this.settings.center && this.coordinates(0)) - this.coordinates(this._items.length) : this.op(this.drag.currentX, "<", this.coordinates(this.maximum())) && "left" === this.state.direction && (this.drag.currentX += (this.settings.center && this.coordinates(0)) - this.coordinates(this._items.length)) : (k = this.coordinates(this.settings.rtl ? this.maximum() : this.minimum()), f = this.coordinates(this.settings.rtl ? this.minimum() : this.maximum()), d = this.settings.pullDrag ? this.drag.distance / 5 : 0, this.drag.currentX = Math.max(Math.min(this.drag.currentX, k + d), f + d)), (this.drag.distance > 8 || this.drag.distance < -8) && (n.preventDefault !== B ? n.preventDefault() : n.returnValue = !1, this.state.isSwiping = !0), this.drag.updatedX = this.drag.currentX, (this.drag.currentY > 16 || this.drag.currentY < -16) && this.state.isSwiping === !1 && (this.state.isScrolling = !0, this.drag.updatedX = this.drag.start), this.animate(this.drag.updatedX)))
    }, A.prototype.onDragEnd = function (a) {
        var h, g, c;
        if (this.state.isTouch) {
            if ("mouseup" === a.type && this.$stage.removeClass("owl-grab"), this.trigger("dragged"), this.drag.targetEl.removeAttribute("draggable"), this.state.isTouch = !1, this.state.isScrolling = !1, this.state.isSwiping = !1, 0 === this.drag.distance && this.state.inMotion !== !0) {
                return this.state.inMotion = !1, !1
            }
            this.drag.endTime = (new Date).getTime(), h = this.drag.endTime - this.drag.startTime, g = Math.abs(this.drag.distance), (g > 3 || h > 300) && this.removeClick(this.drag.targetEl), c = this.closest(this.drag.updatedX), this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed), this.current(c), this.invalidate("position"), this.update(), this.settings.pullDrag || this.drag.updatedX !== this.coordinates(c) || this.transitionEnd(), this.drag.distance = 0, E(C).off(".owl.dragEvents")
        }
    }, A.prototype.removeClick = function (a) {
        this.drag.targetEl = a, E(a).on("click.preventClick", this.e._preventClick), D.setTimeout(function () {
            E(a).off("click.preventClick")
        }, 300)
    }, A.prototype.preventClick = function (a) {
        a.preventDefault ? a.preventDefault() : a.returnValue = !1, a.stopPropagation && a.stopPropagation(), E(a.target).off("click.preventClick")
    }, A.prototype.getTransformProperty = function () {
        var b, d;
        return b = D.getComputedStyle(this.$stage.get(0), null).getPropertyValue(this.vendorName + "transform"), b = b.replace(/matrix(3d)?\(|\)/g, "").split(","), d = 16 === b.length, d !== !0 ? b[4] : b[12]
    }, A.prototype.closest = function (a) {
        var j = -1, i = 30, h = this.width(), g = this.coordinates();
        return this.settings.freeDrag || E.each(g, E.proxy(function (b, c) {
            return a > c - i && c + i > a ? j = b : this.op(a, "<", c) && this.op(a, ">", g[b + 1] || c - h) && (j = "left" === this.state.direction ? b + 1 : b), -1 === j
        }, this)), this.settings.loop || (this.op(a, ">", g[this.minimum()]) ? j = a = this.minimum() : this.op(a, "<", g[this.maximum()]) && (j = a = this.maximum())), j
    }, A.prototype.animate = function (a) {
        this.trigger("translate"), this.state.inMotion = this.speed() > 0, this.support3d ? this.$stage.css({
            transform: "translate3d(" + a + "px,0px, 0px)",
            transition: this.speed() / 1000 + "s"
        }) : this.state.isTouch ? this.$stage.css({left: a + "px"}) : this.$stage.animate({left: a}, this.speed() / 1000, this.settings.fallbackEasing, E.proxy(function () {
            this.state.inMotion && this.transitionEnd()
        }, this))
    }, A.prototype.current = function (d) {
        if (d === B) {
            return this._current
        }
        if (0 === this._items.length) {
            return B
        }
        if (d = this.normalize(d), this._current !== d) {
            var c = this.trigger("change", {property: {name: "position", value: d}});
            c.data !== B && (d = this.normalize(c.data)), this._current = d, this.invalidate("position"), this.trigger("changed", {
                property: {
                    name: "position",
                    value: this._current
                }
            })
        }
        return this._current
    }, A.prototype.invalidate = function (b) {
        this._invalidated[b] = !0
    }, A.prototype.reset = function (b) {
        b = this.normalize(b), b !== B && (this._speed = 0, this._current = b, this.suppress(["translate", "translated"]), this.animate(this.coordinates(b)), this.release(["translate", "translated"]))
    }, A.prototype.normalize = function (a, f) {
        var d = f ? this._items.length : this._items.length + this._clones.length;
        return !E.isNumeric(a) || 1 > d ? B : a = this._clones.length ? (a % d + d) % d : Math.max(this.minimum(f), Math.min(this.maximum(f), a))
    }, A.prototype.relative = function (b) {
        return b = this.normalize(b), b -= this._clones.length / 2, this.normalize(b, !0)
    }, A.prototype.maximum = function (h) {
        var g, l, k, j = 0, i = this.settings;
        if (h) {
            return this._items.length - 1
        }
        if (!i.loop && i.center) {
            g = this._items.length - 1
        } else {
            if (i.loop || i.center) {
                if (i.loop || i.center) {
                    g = this._items.length + i.items
                } else {
                    if (!i.autoWidth && !i.merge) {
                        throw"Can not detect maximum absolute position."
                    }
                    for (revert = i.rtl ? 1 : -1, l = this.$stage.width() - this.$element.width(); (k = this.coordinates(j)) && !(k * revert >= l);) {
                        g = ++j
                    }
                }
            } else {
                g = this._items.length - i.items
            }
        }
        return g
    }, A.prototype.minimum = function (b) {
        return b ? 0 : this._clones.length / 2
    }, A.prototype.items = function (b) {
        return b === B ? this._items.slice() : (b = this.normalize(b, !0), this._items[b])
    }, A.prototype.mergers = function (b) {
        return b === B ? this._mergers.slice() : (b = this.normalize(b, !0), this._mergers[b])
    }, A.prototype.clones = function (a) {
        var h = this._clones.length / 2, g = h + this._items.length, d = function (b) {
            return b % 2 === 0 ? g + b / 2 : h - (b + 1) / 2
        };
        return a === B ? E.map(this._clones, function (e, c) {
            return d(c)
        }) : E.map(this._clones, function (b, e) {
            return b === a ? d(e) : null
        })
    }, A.prototype.speed = function (b) {
        return b !== B && (this._speed = b), this._speed
    }, A.prototype.coordinates = function (a) {
        var d = null;
        return a === B ? E.map(this._coordinates, E.proxy(function (e, c) {
            return this.coordinates(c)
        }, this)) : (this.settings.center ? (d = this._coordinates[a], d += (this.width() - d + (this._coordinates[a - 1] || 0)) / 2 * (this.settings.rtl ? -1 : 1)) : d = this._coordinates[a - 1] || 0, d)
    }, A.prototype.duration = function (e, d, f) {
        return Math.min(Math.max(Math.abs(d - e), 1), 6) * Math.abs(f || this.settings.smartSpeed)
    }, A.prototype.to = function (F, o) {
        if (this.settings.loop) {
            var n = F - this.relative(this.current()), m = this.current(), l = this.current(), k = this.current() + n,
                b = 0 > l - k ? !0 : !1, a = this._clones.length + this._items.length;
            k < this.settings.items && b === !1 ? (m = l + this._items.length, this.reset(m)) : k >= a - this.settings.items && b === !0 && (m = l - this._items.length, this.reset(m)), D.clearTimeout(this.e._goToLoop), this.e._goToLoop = D.setTimeout(E.proxy(function () {
                this.speed(this.duration(this.current(), m + n, o)), this.current(m + n), this.update()
            }, this), 30)
        } else {
            this.speed(this.duration(this.current(), F, o)), this.current(F), this.update()
        }
    }, A.prototype.next = function (b) {
        b = b || !1, this.to(this.relative(this.current()) + 1, b)
    }, A.prototype.prev = function (b) {
        b = b || !1, this.to(this.relative(this.current()) - 1, b)
    }, A.prototype.transitionEnd = function (b) {
        return b !== B && (b.stopPropagation(), (b.target || b.srcElement || b.originalTarget) !== this.$stage.get(0)) ? !1 : (this.state.inMotion = !1, void this.trigger("translated"))
    }, A.prototype.viewport = function () {
        var a;
        if (this.options.responsiveBaseElement !== D) {
            a = E(this.options.responsiveBaseElement).width()
        } else {
            if (D.innerWidth) {
                a = D.innerWidth
            } else {
                if (!C.documentElement || !C.documentElement.clientWidth) {
                    throw"Can not detect viewport width."
                }
                a = C.documentElement.clientWidth
            }
        }
        return a
    }, A.prototype.replace = function (a) {
        this.$stage.empty(), this._items = [], a && (a = a instanceof jQuery ? a : E(a)), this.settings.nestedItemSelector && (a = a.find("." + this.settings.nestedItemSelector)), a.filter(function () {
            return 1 === this.nodeType
        }).each(E.proxy(function (d, c) {
            c = this.prepare(c), this.$stage.append(c), this._items.push(c), this._mergers.push(1 * c.find("[data-merge]").andSelf("[data-merge]").attr("data-merge") || 1)
        }, this)), this.reset(E.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0), this.invalidate("items")
    }, A.prototype.add = function (d, c) {
        c = c === B ? this._items.length : this.normalize(c, !0), this.trigger("add", {
            content: d,
            position: c
        }), 0 === this._items.length || c === this._items.length ? (this.$stage.append(d), this._items.push(d), this._mergers.push(1 * d.find("[data-merge]").andSelf("[data-merge]").attr("data-merge") || 1)) : (this._items[c].before(d), this._items.splice(c, 0, d), this._mergers.splice(c, 0, 1 * d.find("[data-merge]").andSelf("[data-merge]").attr("data-merge") || 1)), this.invalidate("items"), this.trigger("added", {
            content: d,
            position: c
        })
    }, A.prototype.remove = function (b) {
        b = this.normalize(b, !0), b !== B && (this.trigger("remove", {
            content: this._items[b],
            position: b
        }), this._items[b].remove(), this._items.splice(b, 1), this._mergers.splice(b, 1), this.invalidate("items"), this.trigger("removed", {
            content: null,
            position: b
        }))
    }, A.prototype.addTriggerableEvents = function () {
        var a = E.proxy(function (d, e) {
            return E.proxy(function (b) {
                b.relatedTarget !== this && (this.suppress([e]), d.apply(this, [].slice.call(arguments, 1)), this.release([e]))
            }, this)
        }, this);
        E.each({
            next: this.next,
            prev: this.prev,
            to: this.to,
            destroy: this.destroy,
            refresh: this.refresh,
            replace: this.replace,
            add: this.add,
            remove: this.remove
        }, E.proxy(function (b, d) {
            this.$element.on(b + ".owl.carousel", a(d, b + ".owl.carousel"))
        }, this))
    }, A.prototype.watchVisibility = function () {
        function b(c) {
            return c.offsetWidth > 0 && c.offsetHeight > 0
        }

        function a() {
            b(this.$element.get(0)) && (this.$element.removeClass("owl-hidden"), this.refresh(), D.clearInterval(this.e._checkVisibile))
        }

        b(this.$element.get(0)) || (this.$element.addClass("owl-hidden"), D.clearInterval(this.e._checkVisibile), this.e._checkVisibile = D.setInterval(E.proxy(a, this), 500))
    }, A.prototype.preloadAutoWidthImages = function (a) {
        var j, i, h, g;
        j = 0, i = this, a.each(function (c, b) {
            h = E(b), g = new Image, g.onload = function () {
                j++, h.attr("src", g.src), h.css("opacity", 1), j >= a.length && (i.state.imagesLoaded = !0, i.initialize())
            }, g.src = h.attr("src") || h.attr("data-src") || h.attr("data-src-retina")
        })
    }, A.prototype.destroy = function () {
        this.$element.hasClass(this.settings.themeClass) && this.$element.removeClass(this.settings.themeClass), this.settings.responsive !== !1 && E(D).off("resize.owl.carousel"), this.transitionEndVendor && this.off(this.$stage.get(0), this.transitionEndVendor, this.e._transitionEnd);
        for (var a in this._plugins) {
            this._plugins[a].destroy()
        }
        (this.settings.mouseDrag || this.settings.touchDrag) && (this.$stage.off("mousedown touchstart touchcancel"), E(C).off(".owl.dragEvents"), this.$stage.get(0).onselectstart = function () {
        }, this.$stage.off("dragstart", function () {
            return !1
        })), this.$element.off(".owl"), this.$stage.children(".cloned").remove(), this.e = null, this.$element.removeData("owlCarousel"), this.$stage.children().contents().unwrap(), this.$stage.children().unwrap(), this.$stage.unwrap()
    }, A.prototype.op = function (f, e, h) {
        var g = this.settings.rtl;
        switch (e) {
            case"<":
                return g ? f > h : h > f;
            case">":
                return g ? h > f : f > h;
            case">=":
                return g ? h >= f : f >= h;
            case"<=":
                return g ? f >= h : h >= f
        }
    }, A.prototype.on = function (f, e, h, g) {
        f.addEventListener ? f.addEventListener(e, h, g) : f.attachEvent && f.attachEvent("on" + e, h)
    }, A.prototype.off = function (f, e, h, g) {
        f.removeEventListener ? f.removeEventListener(e, h, g) : f.detachEvent && f.detachEvent("on" + e, h)
    }, A.prototype.trigger = function (a, l, k) {
        var j = {item: {count: this._items.length, index: this.current()}},
            i = E.camelCase(E.grep(["on", a, k], function (b) {
                return b
            }).join("-").toLowerCase()),
            h = E.Event([a, "owl", k || "carousel"].join(".").toLowerCase(), E.extend({relatedTarget: this}, j, l));
        return this._supress[a] || (E.each(this._plugins, function (d, c) {
            c.onTrigger && c.onTrigger(h)
        }), this.$element.trigger(h), this.settings && "function" == typeof this.settings[i] && this.settings[i].apply(this, h)), h
    }, A.prototype.suppress = function (a) {
        E.each(a, E.proxy(function (d, c) {
            this._supress[c] = !0
        }, this))
    }, A.prototype.release = function (a) {
        E.each(a, E.proxy(function (d, c) {
            delete this._supress[c]
        }, this))
    }, A.prototype.browserSupport = function () {
        if (this.support3d = v(), this.support3d) {
            this.transformVendor = w();
            var b = ["transitionend", "webkitTransitionEnd", "transitionend", "oTransitionEnd"];
            this.transitionEndVendor = b[x()], this.vendorName = this.transformVendor.replace(/Transform/i, ""), this.vendorName = "" !== this.vendorName ? "-" + this.vendorName.toLowerCase() + "-" : ""
        }
        this.state.orientation = D.orientation
    }, E.fn.owlCarousel = function (a) {
        return this.each(function () {
            E(this).data("owlCarousel") || E(this).data("owlCarousel", new A(this, a))
        })
    }, E.fn.owlCarousel.Constructor = A
}(window.Zepto || window.jQuery, window, document), function (e, d) {
    var f = function (a) {
        this._core = a, this._loaded = [], this._handlers = {
            "initialized.owl.carousel change.owl.carousel": e.proxy(function (i) {
                if (i.namespace && this._core.settings && this._core.settings.lazyLoad && (i.property && "position" == i.property.name || "initialized" == i.type)) {
                    for (var o = this._core.settings, n = o.center && Math.ceil(o.items / 2) || o.items, m = o.center && -1 * n || 0, l = (i.property && i.property.value || this._core.current()) + m, k = this._core.clones().length, j = e.proxy(function (g, c) {
                        this.load(c)
                    }, this); m++ < n;) {
                        this.load(k / 2 + this._core.relative(l)), k && e.each(this._core.clones(this._core.relative(l++)), j)
                    }
                }
            }, this)
        }, this._core.options = e.extend({}, f.Defaults, this._core.options), this._core.$element.on(this._handlers)
    };
    f.Defaults = {lazyLoad: !1}, f.prototype.load = function (g) {
        var b = this._core.$stage.children().eq(g), a = b && b.find(".owl-lazy");
        !a || e.inArray(b.get(0), this._loaded) > -1 || (a.each(e.proxy(function (l, k) {
            var j, i = e(k), h = d.devicePixelRatio > 1 && i.attr("data-src-retina") || i.attr("data-src");
            this._core.trigger("load", {
                element: i,
                url: h
            }, "lazy"), i.is("img") ? i.one("load.owl.lazy", e.proxy(function () {
                i.css("opacity", 1), this._core.trigger("loaded", {element: i, url: h}, "lazy")
            }, this)).attr("src", h) : (j = new Image, j.onload = e.proxy(function () {
                i.css({"background-image": "url(" + h + ")", opacity: "1"}), this._core.trigger("loaded", {
                    element: i,
                    url: h
                }, "lazy")
            }, this), j.src = h)
        }, this)), this._loaded.push(b.get(0)))
    }, f.prototype.destroy = function () {
        var g, c;
        for (g in this.handlers) {
            this._core.$element.off(g, this.handlers[g])
        }
        for (c in Object.getOwnPropertyNames(this)) {
            "function" != typeof this[c] && (this[c] = null)
        }
    }, e.fn.owlCarousel.Constructor.Plugins.Lazy = f
}(window.Zepto || window.jQuery, window, document), function (d) {
    var c = function (a) {
        this._core = a, this._handlers = {
            "initialized.owl.carousel": d.proxy(function () {
                this._core.settings.autoHeight && this.update()
            }, this), "changed.owl.carousel": d.proxy(function (b) {
                this._core.settings.autoHeight && "position" == b.property.name && this.update()
            }, this), "loaded.owl.lazy": d.proxy(function (b) {
                this._core.settings.autoHeight && b.element.closest("." + this._core.settings.itemClass) === this._core.$stage.children().eq(this._core.current()) && this.update()
            }, this)
        }, this._core.options = d.extend({}, c.Defaults, this._core.options), this._core.$element.on(this._handlers)
    };
    c.Defaults = {autoHeight: !1, autoHeightClass: "owl-height"}, c.prototype.update = function () {
        this._core.$stage.parent().height(this._core.$stage.children().eq(this._core.current()).height()).addClass(this._core.settings.autoHeightClass)
    }, c.prototype.destroy = function () {
        var f, e;
        for (f in this._handlers) {
            this._core.$element.off(f, this._handlers[f])
        }
        for (e in Object.getOwnPropertyNames(this)) {
            "function" != typeof this[e] && (this[e] = null)
        }
    }, d.fn.owlCarousel.Constructor.Plugins.AutoHeight = c
}(window.Zepto || window.jQuery, window, document), function (f, e, h) {
    var g = function (a) {
        this._core = a, this._videos = {}, this._playing = null, this._fullscreen = !1, this._handlers = {
            "resize.owl.carousel": f.proxy(function (b) {
                this._core.settings.video && !this.isInFullScreen() && b.preventDefault()
            }, this), "refresh.owl.carousel changed.owl.carousel": f.proxy(function () {
                this._playing && this.stop()
            }, this), "prepared.owl.carousel": f.proxy(function (d) {
                var i = f(d.content).find(".owl-video");
                i.length && (i.css("display", "none"), this.fetch(i, f(d.content)))
            }, this)
        }, this._core.options = f.extend({}, g.Defaults, this._core.options), this._core.$element.on(this._handlers), this._core.$element.on("click.owl.video", ".owl-video-play-icon", f.proxy(function (b) {
            this.play(b)
        }, this))
    };
    g.Defaults = {video: !1, videoHeight: !1, videoWidth: !1}, g.prototype.fetch = function (j, i) {
        var o = j.attr("data-vimeo-id") ? "vimeo" : "youtube", n = j.attr("data-vimeo-id") || j.attr("data-youtube-id"),
            m = j.attr("data-width") || this._core.settings.videoWidth,
            l = j.attr("data-height") || this._core.settings.videoHeight, k = j.attr("href");
        if (!k) {
            throw new Error("Missing video URL.")
        }
        if (n = k.match(/(http:|https:|)\/\/(player.|www.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com))\/(video\/|embed\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/), n[3].indexOf("youtu") > -1) {
            o = "youtube"
        } else {
            if (!(n[3].indexOf("vimeo") > -1)) {
                throw new Error("Video URL not supported.")
            }
            o = "vimeo"
        }
        n = n[6], this._videos[k] = {
            type: o,
            id: n,
            width: m,
            height: l
        }, i.attr("data-video", k), this.thumbnail(j, this._videos[k])
    }, g.prototype.thumbnail = function (w, v) {
        var u, t, s, r = v.width && v.height ? 'style="width:' + v.width + "px;height:" + v.height + 'px;"' : "",
            p = w.find("img"), o = "src", n = "", m = this._core.settings, a = function (b) {
                t = '<div class="owl-video-play-icon"></div>', u = m.lazyLoad ? '<div class="owl-video-tn ' + n + '" ' + o + '="' + b + '"></div>' : '<div class="owl-video-tn" style="opacity:1;background-image:url(' + b + ')"></div>', w.after(u), w.after(t)
            };
        return w.wrap('<div class="owl-video-wrapper"' + r + "></div>"), this._core.settings.lazyLoad && (o = "data-src", n = "owl-lazy"), p.length ? (a(p.attr(o)), p.remove(), !1) : void ("youtube" === v.type ? (s = "http://img.youtube.com/vi/" + v.id + "/hqdefault.jpg", a(s)) : "vimeo" === v.type && f.ajax({
            type: "GET",
            url: "http://vimeo.com/api/v2/video/" + v.id + ".json",
            jsonp: "callback",
            dataType: "jsonp",
            success: function (b) {
                s = b[0].thumbnail_large, a(s)
            }
        }))
    }, g.prototype.stop = function () {
        this._core.trigger("stop", null, "video"), this._playing.find(".owl-video-frame").remove(), this._playing.removeClass("owl-video-playing"), this._playing = null
    }, g.prototype.play = function (a) {
        this._core.trigger("play", null, "video"), this._playing && this.stop();
        var p, o, n = f(a.target || a.srcElement), m = n.closest("." + this._core.settings.itemClass),
            l = this._videos[m.attr("data-video")], k = l.width || "100%", j = l.height || this._core.$stage.height();
        "youtube" === l.type ? p = '<iframe width="' + k + '" height="' + j + '" src="http://www.youtube.com/embed/' + l.id + "?autoplay=1&v=" + l.id + '" frameborder="0" allowfullscreen></iframe>' : "vimeo" === l.type && (p = '<iframe src="http://player.vimeo.com/video/' + l.id + '?autoplay=1" width="' + k + '" height="' + j + '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>'), m.addClass("owl-video-playing"), this._playing = m, o = f('<div style="height:' + j + "px; width:" + k + 'px" class="owl-video-frame">' + p + "</div>"), n.after(o)
    }, g.prototype.isInFullScreen = function () {
        var a = h.fullscreenElement || h.mozFullScreenElement || h.webkitFullscreenElement;
        return a && f(a).parent().hasClass("owl-video-frame") && (this._core.speed(0), this._fullscreen = !0), a && this._fullscreen && this._playing ? !1 : this._fullscreen ? (this._fullscreen = !1, !1) : this._playing && this._core.state.orientation !== e.orientation ? (this._core.state.orientation = e.orientation, !1) : !0
    }, g.prototype.destroy = function () {
        var d, c;
        this._core.$element.off("click.owl.video");
        for (d in this._handlers) {
            this._core.$element.off(d, this._handlers[d])
        }
        for (c in Object.getOwnPropertyNames(this)) {
            "function" != typeof this[c] && (this[c] = null)
        }
    }, f.fn.owlCarousel.Constructor.Plugins.Video = g
}(window.Zepto || window.jQuery, window, document), function (g, f, j, i) {
    var h = function (a) {
        this.core = a, this.core.options = g.extend({}, h.Defaults, this.core.options), this.swapping = !0, this.previous = i, this.next = i, this.handlers = {
            "change.owl.carousel": g.proxy(function (b) {
                "position" == b.property.name && (this.previous = this.core.current(), this.next = b.property.value)
            }, this), "drag.owl.carousel dragged.owl.carousel translated.owl.carousel": g.proxy(function (b) {
                this.swapping = "translated" == b.type
            }, this), "translate.owl.carousel": g.proxy(function () {
                this.swapping && (this.core.options.animateOut || this.core.options.animateIn) && this.swap()
            }, this)
        }, this.core.$element.on(this.handlers)
    };
    h.Defaults = {animateOut: !1, animateIn: !1}, h.prototype.swap = function () {
        if (1 === this.core.settings.items && this.core.support3d) {
            this.core.speed(0);
            var a, o = g.proxy(this.clear, this), n = this.core.$stage.children().eq(this.previous),
                m = this.core.$stage.children().eq(this.next), l = this.core.settings.animateIn,
                k = this.core.settings.animateOut;
            this.core.current() !== this.previous && (k && (a = this.core.coordinates(this.previous) - this.core.coordinates(this.next), n.css({left: a + "px"}).addClass("animated owl-animated-out").addClass(k).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", o)), l && m.addClass("animated owl-animated-in").addClass(l).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", o))
        }
    }, h.prototype.clear = function (a) {
        g(a.target).css({left: ""}).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut), this.core.transitionEnd()
    }, h.prototype.destroy = function () {
        var d, c;
        for (d in this.handlers) {
            this.core.$element.off(d, this.handlers[d])
        }
        for (c in Object.getOwnPropertyNames(this)) {
            "function" != typeof this[c] && (this[c] = null)
        }
    }, g.fn.owlCarousel.Constructor.Plugins.Animate = h
}(window.Zepto || window.jQuery, window, document), function (f, e, h) {
    var g = function (a) {
        this.core = a, this.core.options = f.extend({}, g.Defaults, this.core.options), this.handlers = {
            "translated.owl.carousel refreshed.owl.carousel": f.proxy(function () {
                this.autoplay()
            }, this), "play.owl.autoplay": f.proxy(function (i, d, j) {
                this.play(d, j)
            }, this), "stop.owl.autoplay": f.proxy(function () {
                this.stop()
            }, this), "mouseover.owl.autoplay": f.proxy(function () {
                this.core.settings.autoplayHoverPause && this.pause()
            }, this), "mouseleave.owl.autoplay": f.proxy(function () {
                this.core.settings.autoplayHoverPause && this.autoplay()
            }, this)
        }, this.core.$element.on(this.handlers)
    };
    g.Defaults = {
        autoplay: !1,
        autoplayTimeout: 5000,
        autoplayHoverPause: !1,
        autoplaySpeed: !1
    }, g.prototype.autoplay = function () {
        this.core.settings.autoplay && !this.core.state.videoPlay ? (e.clearInterval(this.interval), this.interval = e.setInterval(f.proxy(function () {
            this.play()
        }, this), this.core.settings.autoplayTimeout)) : e.clearInterval(this.interval)
    }, g.prototype.play = function () {
        return h.hidden === !0 || this.core.state.isTouch || this.core.state.isScrolling || this.core.state.isSwiping || this.core.state.inMotion ? void 0 : this.core.settings.autoplay === !1 ? void e.clearInterval(this.interval) : void this.core.next(this.core.settings.autoplaySpeed)
    }, g.prototype.stop = function () {
        e.clearInterval(this.interval)
    }, g.prototype.pause = function () {
        e.clearInterval(this.interval)
    }, g.prototype.destroy = function () {
        var b, d;
        e.clearInterval(this.interval);
        for (b in this.handlers) {
            this.core.$element.off(b, this.handlers[b])
        }
        for (d in Object.getOwnPropertyNames(this)) {
            "function" != typeof this[d] && (this[d] = null)
        }
    }, f.fn.owlCarousel.Constructor.Plugins.autoplay = g
}(window.Zepto || window.jQuery, window, document), function (d) {
    var c = function (a) {
        this._core = a, this._initialized = !1, this._pages = [], this._controls = {}, this._templates = [], this.$element = this._core.$element, this._overrides = {
            next: this._core.next,
            prev: this._core.prev,
            to: this._core.to
        }, this._handlers = {
            "prepared.owl.carousel": d.proxy(function (e) {
                this._core.settings.dotsData && this._templates.push(d(e.content).find("[data-dot]").andSelf("[data-dot]").attr("data-dot"))
            }, this), "add.owl.carousel": d.proxy(function (e) {
                this._core.settings.dotsData && this._templates.splice(e.position, 0, d(e.content).find("[data-dot]").andSelf("[data-dot]").attr("data-dot"))
            }, this), "remove.owl.carousel prepared.owl.carousel": d.proxy(function (b) {
                this._core.settings.dotsData && this._templates.splice(b.position, 1)
            }, this), "change.owl.carousel": d.proxy(function (f) {
                if ("position" == f.property.name && !this._core.state.revert && !this._core.settings.loop && this._core.settings.navRewind) {
                    var e = this._core.current(), h = this._core.maximum(), g = this._core.minimum();
                    f.data = f.property.value > h ? e >= h ? g : h : f.property.value < g ? h : f.property.value
                }
            }, this), "changed.owl.carousel": d.proxy(function (b) {
                "position" == b.property.name && this.draw()
            }, this), "refreshed.owl.carousel": d.proxy(function () {
                this._initialized || (this.initialize(), this._initialized = !0), this._core.trigger("refresh", null, "navigation"), this.update(), this.draw(), this._core.trigger("refreshed", null, "navigation")
            }, this)
        }, this._core.options = d.extend({}, c.Defaults, this._core.options), this.$element.on(this._handlers)
    };
    c.Defaults = {
        nav: !1,
        navRewind: !0,
        navText: ["prev", "next"],
        navSpeed: !1,
        navElement: "div",
        navContainer: !1,
        navContainerClass: "owl-nav",
        navClass: ["owl-prev", "owl-next"],
        slideBy: 1,
        dotClass: "owl-dot",
        dotsClass: "owl-dots",
        dots: !0,
        dotsEach: !1,
        dotData: !1,
        dotsSpeed: !1,
        dotsContainer: !1,
        controlsClass: "owl-controls"
    }, c.prototype.initialize = function () {
        var a, f, e = this._core.settings;
        e.dotsData || (this._templates = [d("<div>").addClass(e.dotClass).append(d("<span>")).prop("outerHTML")]), e.navContainer && e.dotsContainer || (this._controls.$container = d("<div>").addClass(e.controlsClass).appendTo(this.$element)), this._controls.$indicators = e.dotsContainer ? d(e.dotsContainer) : d("<div>").hide().addClass(e.dotsClass).appendTo(this._controls.$container), this._controls.$indicators.on("click", "div", d.proxy(function (g) {
            var h = d(g.target).parent().is(this._controls.$indicators) ? d(g.target).index() : d(g.target).parent().index();
            g.preventDefault(), this.to(h, e.dotsSpeed)
        }, this)), a = e.navContainer ? d(e.navContainer) : d("<div>").addClass(e.navContainerClass).prependTo(this._controls.$container), this._controls.$next = d("<" + e.navElement + ">"), this._controls.$previous = this._controls.$next.clone(), this._controls.$previous.addClass(e.navClass[0]).html(e.navText[0]).hide().prependTo(a).on("click", d.proxy(function () {
            this.prev(e.navSpeed)
        }, this)), this._controls.$next.addClass(e.navClass[1]).html(e.navText[1]).hide().appendTo(a).on("click", d.proxy(function () {
            this.next(e.navSpeed)
        }, this));
        for (f in this._overrides) {
            this._core[f] = d.proxy(this[f], this)
        }
    }, c.prototype.destroy = function () {
        var f, e, h, g;
        for (f in this._handlers) {
            this.$element.off(f, this._handlers[f])
        }
        for (e in this._controls) {
            this._controls[e].remove()
        }
        for (g in this.overides) {
            this._core[g] = this._overrides[g]
        }
        for (h in Object.getOwnPropertyNames(this)) {
            "function" != typeof this[h] && (this[h] = null)
        }
    }, c.prototype.update = function () {
        var i, h, n, m = this._core.settings, l = this._core.clones().length / 2, k = l + this._core.items().length,
            j = m.center || m.autoWidth || m.dotData ? 1 : m.dotsEach || m.items;
        if ("page" !== m.slideBy && (m.slideBy = Math.min(m.slideBy, m.items)), m.dots || "page" == m.slideBy) {
            for (this._pages = [], i = l, h = 0, n = 0; k > i; i++) {
                (h >= j || 0 === h) && (this._pages.push({
                    start: i - l,
                    end: i - l + j - 1
                }), h = 0, ++n), h += this._core.mergers(this._core.relative(i))
            }
        }
    }, c.prototype.draw = function () {
        var a, j, i = "", h = this._core.settings,
            g = (this._core.$stage.children(), this._core.relative(this._core.current()));
        if (!h.nav || h.loop || h.navRewind || (this._controls.$previous.toggleClass("disabled", 0 >= g), this._controls.$next.toggleClass("disabled", g >= this._core.maximum())), this._controls.$previous.toggle(h.nav), this._controls.$next.toggle(h.nav), h.dots) {
            if (a = this._pages.length - this._controls.$indicators.children().length, h.dotData && 0 !== a) {
                for (j = 0; j < this._controls.$indicators.children().length; j++) {
                    i += this._templates[this._core.relative(j)]
                }
                this._controls.$indicators.html(i)
            } else {
                a > 0 ? (i = new Array(a + 1).join(this._templates[0]), this._controls.$indicators.append(i)) : 0 > a && this._controls.$indicators.children().slice(a).remove()
            }
            this._controls.$indicators.find(".active").removeClass("active"), this._controls.$indicators.children().eq(d.inArray(this.current(), this._pages)).addClass("active")
        }
        this._controls.$indicators.toggle(h.dots)
    }, c.prototype.onTrigger = function (a) {
        var e = this._core.settings;
        a.page = {
            index: d.inArray(this.current(), this._pages),
            count: this._pages.length,
            size: e && (e.center || e.autoWidth || e.dotData ? 1 : e.dotsEach || e.items)
        }
    }, c.prototype.current = function () {
        var a = this._core.relative(this._core.current());
        return d.grep(this._pages, function (b) {
            return b.start <= a && b.end >= a
        }).pop()
    }, c.prototype.getPosition = function (a) {
        var h, g, f = this._core.settings;
        return "page" == f.slideBy ? (h = d.inArray(this.current(), this._pages), g = this._pages.length, a ? ++h : --h, h = this._pages[(h % g + g) % g].start) : (h = this._core.relative(this._core.current()), g = this._core.items().length, a ? h += f.slideBy : h -= f.slideBy), h
    }, c.prototype.next = function (a) {
        d.proxy(this._overrides.to, this._core)(this.getPosition(!0), a)
    }, c.prototype.prev = function (a) {
        d.proxy(this._overrides.to, this._core)(this.getPosition(!1), a)
    }, c.prototype.to = function (a, h, g) {
        var f;
        g ? d.proxy(this._overrides.to, this._core)(a, h) : (f = this._pages.length, d.proxy(this._overrides.to, this._core)(this._pages[(a % f + f) % f].start, h))
    }, d.fn.owlCarousel.Constructor.Plugins.Navigation = c
}(window.Zepto || window.jQuery, window, document), function (e, d) {
    var f = function (a) {
        this._core = a, this._hashes = {}, this.$element = this._core.$element, this._handlers = {
            "initialized.owl.carousel": e.proxy(function () {
                "URLHash" == this._core.settings.startPosition && e(d).trigger("hashchange.owl.navigation")
            }, this), "prepared.owl.carousel": e.proxy(function (g) {
                var h = e(g.content).find("[data-hash]").andSelf("[data-hash]").attr("data-hash");
                this._hashes[h] = g.content
            }, this)
        }, this._core.options = e.extend({}, f.Defaults, this._core.options), this.$element.on(this._handlers), e(d).on("hashchange.owl.navigation", e.proxy(function () {
            var b = d.location.hash.substring(1), h = this._core.$stage.children(),
                g = this._hashes[b] && h.index(this._hashes[b]) || 0;
            return b ? void this._core.to(g, !1, !0) : !1
        }, this))
    };
    f.Defaults = {URLhashListener: !1}, f.prototype.destroy = function () {
        var b, a;
        e(d).off("hashchange.owl.navigation");
        for (b in this._handlers) {
            this._core.$element.off(b, this._handlers[b])
        }
        for (a in Object.getOwnPropertyNames(this)) {
            "function" != typeof this[a] && (this[a] = null)
        }
    }, e.fn.owlCarousel.Constructor.Plugins.Hash = f
}(window.Zepto || window.jQuery, window, document);
/*!
 * Isotope PACKAGED v2.0.0
 * Filter & sort magical layouts
 * http://isotope.metafizzy.co
 */
(function (b) {
    function c() {
    }

    function a(f) {
        function e(i) {
            i.prototype.option || (i.prototype.option = function (j) {
                f.isPlainObject(j) && (this.options = f.extend(!0, this.options, j))
            })
        }

        function h(k, j) {
            f.fn[k] = function (v) {
                if ("string" == typeof v) {
                    for (var o = d.call(arguments, 1), i = 0, l = this.length; l > i; i++) {
                        var t = this[i], m = f.data(t, k);
                        if (m) {
                            if (f.isFunction(m[v]) && "_" !== v.charAt(0)) {
                                var r = m[v].apply(m, o);
                                if (void 0 !== r) {
                                    return r
                                }
                            } else {
                                g("no such method '" + v + "' for " + k + " instance")
                            }
                        } else {
                            g("cannot call methods on " + k + " prior to initialization; attempted to call '" + v + "'")
                        }
                    }
                    return this
                }
                return this.each(function () {
                    var n = f.data(this, k);
                    n ? (n.option(v), n._init()) : (n = new j(this, v), f.data(this, k, n))
                })
            }
        }

        if (f) {
            var g = "undefined" == typeof console ? c : function (i) {
                console.error(i)
            };
            return f.bridget = function (i, j) {
                e(j), h(i, j)
            }, f.bridget
        }
    }

    var d = Array.prototype.slice;
    "function" == typeof define && define.amd ? define("jquery-bridget/jquery.bridget", ["jquery"], a) : a(b.jQuery)
})(window), function (b) {
    function d(j) {
        var h = b.event;
        return h.target = h.target || h.srcElement || j, h
    }

    var a = document.documentElement, f = function () {
    };
    a.addEventListener ? f = function (j, k, h) {
        j.addEventListener(k, h, !1)
    } : a.attachEvent && (f = function (h, e, j) {
        h[e + j] = j.handleEvent ? function () {
            var k = d(h);
            j.handleEvent.call(j, k)
        } : function () {
            var k = d(h);
            j.call(h, k)
        }, h.attachEvent("on" + e, h[e + j])
    });
    var g = function () {
    };
    a.removeEventListener ? g = function (j, k, h) {
        j.removeEventListener(k, h, !1)
    } : a.detachEvent && (g = function (j, k, h) {
        j.detachEvent("on" + k, j[k + h]);
        try {
            delete j[k + h]
        } catch (l) {
            j[k + h] = void 0
        }
    });
    var c = {bind: f, unbind: g};
    "function" == typeof define && define.amd ? define("eventie/eventie", c) : "object" == typeof exports ? module.exports = c : b.eventie = c
}(this), function (b) {
    function d(e) {
        "function" == typeof e && (d.isReady ? e() : c.push(e))
    }

    function a(j) {
        var h = "readystatechange" === j.type && "complete" !== g.readyState;
        if (!d.isReady && !h) {
            d.isReady = !0;
            for (var l = 0, k = c.length; k > l; l++) {
                var e = c[l];
                e()
            }
        }
    }

    function f(e) {
        return e.bind(g, "DOMContentLoaded", a), e.bind(g, "readystatechange", a), e.bind(b, "load", a), d
    }

    var g = b.document, c = [];
    d.isReady = !1, "function" == typeof define && define.amd ? (d.isReady = "function" == typeof requirejs, define("doc-ready/doc-ready", ["eventie/eventie"], f)) : b.docReady = f(b.eventie)
}(this), function () {
    function b() {
    }

    function d(j, k) {
        for (var h = j.length; h--;) {
            if (j[h].listener === k) {
                return h
            }
        }
        return -1
    }

    function a(e) {
        return function () {
            return this[e].apply(this, arguments)
        }
    }

    var f = b.prototype, g = this, c = g.EventEmitter;
    f.getListeners = function (j) {
        var k, h, l = this._getEvents();
        if (j instanceof RegExp) {
            k = {};
            for (h in l) {
                l.hasOwnProperty(h) && j.test(h) && (k[h] = l[h])
            }
        } else {
            k = l[j] || (l[j] = [])
        }
        return k
    }, f.flattenListeners = function (j) {
        var k, h = [];
        for (k = 0; j.length > k; k += 1) {
            h.push(j[k].listener)
        }
        return h
    }, f.getListenersAsObject = function (j) {
        var k, h = this.getListeners(j);
        return h instanceof Array && (k = {}, k[j] = h), k || h
    }, f.addListener = function (h, e) {
        var k, l = this.getListenersAsObject(h), j = "object" == typeof e;
        for (k in l) {
            l.hasOwnProperty(k) && -1 === d(l[k], e) && l[k].push(j ? e : {listener: e, once: !1})
        }
        return this
    }, f.on = a("addListener"), f.addOnceListener = function (h, i) {
        return this.addListener(h, {listener: i, once: !0})
    }, f.once = a("addOnceListener"), f.defineEvent = function (e) {
        return this.getListeners(e), this
    }, f.defineEvents = function (h) {
        for (var i = 0; h.length > i; i += 1) {
            this.defineEvent(h[i])
        }
        return this
    }, f.removeListener = function (h, e) {
        var k, l, j = this.getListenersAsObject(h);
        for (l in j) {
            j.hasOwnProperty(l) && (k = d(j[l], e), -1 !== k && j[l].splice(k, 1))
        }
        return this
    }, f.off = a("removeListener"), f.addListeners = function (h, i) {
        return this.manipulateListeners(!1, h, i)
    }, f.removeListeners = function (h, i) {
        return this.manipulateListeners(!0, h, i)
    }, f.manipulateListeners = function (j, m, h) {
        var p, u, l = j ? this.removeListener : this.addListener, k = j ? this.removeListeners : this.addListeners;
        if ("object" != typeof m || m instanceof RegExp) {
            for (p = h.length; p--;) {
                l.call(this, m, h[p])
            }
        } else {
            for (p in m) {
                m.hasOwnProperty(p) && (u = m[p]) && ("function" == typeof u ? l.call(this, p, u) : k.call(this, p, u))
            }
        }
        return this
    }, f.removeEvent = function (j) {
        var k, h = typeof j, l = this._getEvents();
        if ("string" === h) {
            delete l[j]
        } else {
            if (j instanceof RegExp) {
                for (k in l) {
                    l.hasOwnProperty(k) && j.test(k) && delete l[k]
                }
            } else {
                delete this._events
            }
        }
        return this
    }, f.removeAllListeners = a("removeEvent"), f.emitEvent = function (j, m) {
        var h, p, u, l, k = this.getListenersAsObject(j);
        for (u in k) {
            if (k.hasOwnProperty(u)) {
                for (p = k[u].length; p--;) {
                    h = k[u][p], h.once === !0 && this.removeListener(j, h.listener), l = h.listener.apply(this, m || []), l === this._getOnceReturnValue() && this.removeListener(j, h.listener)
                }
            }
        }
        return this
    }, f.trigger = a("emitEvent"), f.emit = function (h) {
        var i = Array.prototype.slice.call(arguments, 1);
        return this.emitEvent(h, i)
    }, f.setOnceReturnValue = function (e) {
        return this._onceReturnValue = e, this
    }, f._getOnceReturnValue = function () {
        return this.hasOwnProperty("_onceReturnValue") ? this._onceReturnValue : !0
    }, f._getEvents = function () {
        return this._events || (this._events = {})
    }, b.noConflict = function () {
        return g.EventEmitter = c, b
    }, "function" == typeof define && define.amd ? define("eventEmitter/EventEmitter", [], function () {
        return b
    }) : "object" == typeof module && module.exports ? module.exports = b : this.EventEmitter = b
}.call(this), function (b) {
    function c(f) {
        if (f) {
            if ("string" == typeof d[f]) {
                return f
            }
            f = f.charAt(0).toUpperCase() + f.slice(1);
            for (var h, i = 0, g = a.length; g > i; i++) {
                if (h = a[i] + f, "string" == typeof d[h]) {
                    return h
                }
            }
        }
    }

    var a = "Webkit Moz ms Ms O".split(" "), d = document.documentElement.style;
    "function" == typeof define && define.amd ? define("get-style-property/get-style-property", [], function () {
        return c
    }) : "object" == typeof exports ? module.exports = c : b.getStyleProperty = c
}(window), function (b) {
    function f(k) {
        var l = parseFloat(k), j = -1 === k.indexOf("%") && !isNaN(l);
        return j && l
    }

    function a() {
        for (var k = {
            width: 0,
            height: 0,
            innerWidth: 0,
            innerHeight: 0,
            outerWidth: 0,
            outerHeight: 0
        }, l = 0, j = c.length; j > l; l++) {
            var m = c[l];
            k[m] = 0
        }
        return k
    }

    function g(j) {
        function l(A) {
            if ("string" == typeof A && (A = document.querySelector(A)), A && "object" == typeof A && A.nodeType) {
                var B = d(A);
                if ("none" === B.display) {
                    return a()
                }
                var C = {};
                C.width = A.offsetWidth, C.height = A.offsetHeight;
                for (var F = C.isBorderBox = !(!k || !B[k] || "border-box" !== B[k]), H = 0, K = c.length; K > H; H++) {
                    var J = c[H], E = B[J];
                    E = e(A, E);
                    var u = parseFloat(E);
                    C[J] = isNaN(u) ? 0 : u
                }
                var D = C.paddingLeft + C.paddingRight, G = C.paddingTop + C.paddingBottom,
                    x = C.marginLeft + C.marginRight, N = C.marginTop + C.marginBottom,
                    w = C.borderLeftWidth + C.borderRightWidth, r = C.borderTopWidth + C.borderBottomWidth, s = F && i,
                    p = f(B.width);
                p !== !1 && (C.width = p + (s ? 0 : D + w));
                var M = f(B.height);
                return M !== !1 && (C.height = M + (s ? 0 : G + r)), C.innerWidth = C.width - (D + w), C.innerHeight = C.height - (G + r), C.outerWidth = C.width + x, C.outerHeight = C.height + N, C
            }
        }

        function e(n, v) {
            if (h || -1 === v.indexOf("%")) {
                return v
            }
            var m = n.style, w = m.left, u = n.runtimeStyle, p = u && u.left;
            return p && (u.left = n.currentStyle.left), m.left = v, v = m.pixelLeft, m.left = w, p && (u.left = p), v
        }

        var i, k = j("boxSizing");
        return function () {
            if (k) {
                var n = document.createElement("div");
                n.style.width = "200px", n.style.padding = "1px 2px 3px 4px", n.style.borderStyle = "solid", n.style.borderWidth = "1px 2px 3px 4px", n.style[k] = "border-box";
                var m = document.body || document.documentElement;
                m.appendChild(n);
                var p = d(n);
                i = 200 === f(p.width), m.removeChild(n)
            }
        }(), l
    }

    var h = b.getComputedStyle, d = h ? function (e) {
            return h(e, null)
        } : function (e) {
            return e.currentStyle
        },
        c = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"];
    "function" == typeof define && define.amd ? define("get-size/get-size", ["get-style-property/get-style-property"], g) : "object" == typeof exports ? module.exports = g(require("get-style-property")) : b.getSize = g(b.getStyleProperty)
}(window), function (l, h) {
    function g(a, i) {
        return a[j](i)
    }

    function d(a) {
        if (!a.parentNode) {
            var i = document.createDocumentFragment();
            i.appendChild(a)
        }
    }

    function f(o, s) {
        d(o);
        for (var a = o.parentNode.querySelectorAll(s), u = 0, p = a.length; p > u; u++) {
            if (a[u] === o) {
                return !0
            }
        }
        return !1
    }

    function b(a, i) {
        return d(a), g(a, i)
    }

    var m, j = function () {
        if (h.matchesSelector) {
            return "matchesSelector"
        }
        for (var e = ["webkit", "moz", "ms", "o"], a = 0, s = e.length; s > a; a++) {
            var u = e[a], p = u + "MatchesSelector";
            if (h[p]) {
                return p
            }
        }
    }();
    if (j) {
        var k = document.createElement("div"), c = g(k, "div");
        m = c ? g : b
    } else {
        m = f
    }
    "function" == typeof define && define.amd ? define("matches-selector/matches-selector", [], function () {
        return m
    }) : window.matchesSelector = m
}(this, Element.prototype), function (b) {
    function f(k, l) {
        for (var j in l) {
            k[j] = l[j]
        }
        return k
    }

    function a(i) {
        for (var j in i) {
            return !1
        }
        return j = null, !0
    }

    function g(e) {
        return e.replace(/([A-Z])/g, function (i) {
            return "-" + i.toLowerCase()
        })
    }

    function h(F, j, e) {
        function C(l, m) {
            l && (this.element = l, this.layout = m, this.position = {x: 0, y: 0}, this._create())
        }

        var E = e("transition"), i = e("transform"), s = E && i, x = !!e("perspective"), A = {
            WebkitTransition: "webkitTransitionEnd",
            MozTransition: "transitionend",
            OTransition: "otransitionend",
            transition: "transitionend"
        }[E], z = ["transform", "transition", "transitionDuration", "transitionProperty"], o = function () {
            for (var m = {}, p = 0, l = z.length; l > p; p++) {
                var r = z[p], u = e(r);
                u && u !== r && (m[r] = u)
            }
            return m
        }();
        f(C.prototype, F.prototype), C.prototype._create = function () {
            this._transn = {ingProperties: {}, clean: {}, onEnd: {}}, this.css({position: "absolute"})
        }, C.prototype.handleEvent = function (l) {
            var m = "on" + l.type;
            this[m] && this[m](l)
        }, C.prototype.getSize = function () {
            this.size = j(this.element)
        }, C.prototype.css = function (m) {
            var n = this.element.style;
            for (var l in m) {
                var p = o[l] || l;
                n[p] = m[l]
            }
        }, C.prototype.getPosition = function () {
            var p = c(this.element), v = this.layout.options, m = v.isOriginLeft, y = v.isOriginTop,
                G = parseInt(p[m ? "left" : "right"], 10), u = parseInt(p[y ? "top" : "bottom"], 10);
            G = isNaN(G) ? 0 : G, u = isNaN(u) ? 0 : u;
            var l = this.layout.size;
            G -= m ? l.paddingLeft : l.paddingRight, u -= y ? l.paddingTop : l.paddingBottom, this.position.x = G, this.position.y = u
        }, C.prototype.layoutPosition = function () {
            var m = this.layout.size, n = this.layout.options, l = {};
            n.isOriginLeft ? (l.left = this.position.x + m.paddingLeft + "px", l.right = "") : (l.right = this.position.x + m.paddingRight + "px", l.left = ""), n.isOriginTop ? (l.top = this.position.y + m.paddingTop + "px", l.bottom = "") : (l.bottom = this.position.y + m.paddingBottom + "px", l.top = ""), this.css(l), this.emitEvent("layout", [this])
        };
        var B = x ? function (l, m) {
            return "translate3d(" + l + "px, " + m + "px, 0)"
        } : function (l, m) {
            return "translate(" + l + "px, " + m + "px)"
        };
        C.prototype._transitionTo = function (L, I) {
            this.getPosition();
            var G = this.position.x, v = this.position.y, y = parseInt(L, 10), l = parseInt(I, 10),
                M = y === this.position.x && l === this.position.y;
            if (this.setPosition(L, I), M && !this.isTransitioning) {
                return this.layoutPosition(), void 0
            }
            var J = L - G, K = I - v, m = {}, H = this.layout.options;
            J = H.isOriginLeft ? J : -J, K = H.isOriginTop ? K : -K, m.transform = B(J, K), this.transition({
                to: m,
                onTransitionEnd: {transform: this.layoutPosition},
                isCleaning: !0
            })
        }, C.prototype.goTo = function (l, m) {
            this.setPosition(l, m), this.layoutPosition()
        }, C.prototype.moveTo = s ? C.prototype._transitionTo : C.prototype.goTo, C.prototype.setPosition = function (l, m) {
            this.position.x = parseInt(l, 10), this.position.y = parseInt(m, 10)
        }, C.prototype._nonTransition = function (l) {
            this.css(l.to), l.isCleaning && this._removeStyles(l.to);
            for (var m in l.onTransitionEnd) {
                l.onTransitionEnd[m].call(this)
            }
        }, C.prototype._transition = function (m) {
            if (!parseFloat(this.layout.options.transitionDuration)) {
                return this._nonTransition(m), void 0
            }
            var n = this._transn;
            for (var l in m.onTransitionEnd) {
                n.onEnd[l] = m.onTransitionEnd[l]
            }
            for (l in m.to) {
                n.ingProperties[l] = !0, m.isCleaning && (n.clean[l] = !0)
            }
            if (m.from) {
                this.css(m.from);
                var p = this.element.offsetHeight;
                p = null
            }
            this.enableTransition(m.to), this.css(m.to), this.isTransitioning = !0
        };
        var k = i && g(i) + ",opacity";
        C.prototype.enableTransition = function () {
            this.isTransitioning || (this.css({
                transitionProperty: k,
                transitionDuration: this.layout.options.transitionDuration
            }), this.element.addEventListener(A, this, !1))
        }, C.prototype.transition = C.prototype[E ? "_transition" : "_nonTransition"], C.prototype.onwebkitTransitionEnd = function (l) {
            this.ontransitionend(l)
        }, C.prototype.onotransitionend = function (l) {
            this.ontransitionend(l)
        };
        var w = {"-webkit-transform": "transform", "-moz-transform": "transform", "-o-transform": "transform"};
        C.prototype.ontransitionend = function (l) {
            if (l.target === this.element) {
                var m = this._transn, p = w[l.propertyName] || l.propertyName;
                if (delete m.ingProperties[p], a(m.ingProperties) && this.disableTransition(), p in m.clean && (this.element.style[l.propertyName] = "", delete m.clean[p]), p in m.onEnd) {
                    var r = m.onEnd[p];
                    r.call(this), delete m.onEnd[p]
                }
                this.emitEvent("transitionEnd", [this])
            }
        }, C.prototype.disableTransition = function () {
            this.removeTransitionStyles(), this.element.removeEventListener(A, this, !1), this.isTransitioning = !1
        }, C.prototype._removeStyles = function (m) {
            var n = {};
            for (var l in m) {
                n[l] = ""
            }
            this.css(n)
        };
        var D = {transitionProperty: "", transitionDuration: ""};
        return C.prototype.removeTransitionStyles = function () {
            this.css(D)
        }, C.prototype.removeElem = function () {
            this.element.parentNode.removeChild(this.element), this.emitEvent("remove", [this])
        }, C.prototype.remove = function () {
            if (!E || !parseFloat(this.layout.options.transitionDuration)) {
                return this.removeElem(), void 0
            }
            var l = this;
            this.on("transitionEnd", function () {
                return l.removeElem(), !0
            }), this.hide()
        }, C.prototype.reveal = function () {
            delete this.isHidden, this.css({display: ""});
            var l = this.layout.options;
            this.transition({from: l.hiddenStyle, to: l.visibleStyle, isCleaning: !0})
        }, C.prototype.hide = function () {
            this.isHidden = !0, this.css({display: ""});
            var l = this.layout.options;
            this.transition({
                from: l.visibleStyle,
                to: l.hiddenStyle,
                isCleaning: !0,
                onTransitionEnd: {
                    opacity: function () {
                        this.isHidden && this.css({display: "none"})
                    }
                }
            })
        }, C.prototype.destroy = function () {
            this.css({position: "", left: "", right: "", top: "", bottom: "", transition: "", transform: ""})
        }, C
    }

    var d = b.getComputedStyle, c = d ? function (e) {
        return d(e, null)
    } : function (e) {
        return e.currentStyle
    };
    "function" == typeof define && define.amd ? define("outlayer/item", ["eventEmitter/EventEmitter", "get-size/get-size", "get-style-property/get-style-property"], h) : (b.Outlayer = {}, b.Outlayer.Item = h(b.EventEmitter, b.getSize, b.getStyleProperty))
}(window), function (B) {
    function w(c, d) {
        for (var a in d) {
            c[a] = d[a]
        }
        return c
    }

    function l(a) {
        return "[object Array]" === v.call(a)
    }

    function j(a) {
        var c = [];
        if (l(a)) {
            c = a
        } else {
            if (a && "number" == typeof a.length) {
                for (var d = 0, f = a.length; f > d; d++) {
                    c.push(a[d])
                }
            } else {
                c.push(a)
            }
        }
        return c
    }

    function k(c, d) {
        var a = x(d, c);
        -1 !== a && d.splice(a, 1)
    }

    function b(a) {
        return a.replace(/(.)([A-Z])/g, function (d, f, c) {
            return f + "-" + c
        }).toLowerCase()
    }

    function C(e, t, n, o, c, p) {
        function a(f, d) {
            if ("string" == typeof f && (f = z.querySelector(f)), !f || !y(f)) {
                return A && A.error("Bad " + this.constructor.namespace + " element: " + f), void 0
            }
            this.element = f, this.options = w({}, this.constructor.defaults), this.option(d);
            var s = ++h;
            this.element.outlayerGUID = s, r[s] = this, this._create(), this.options.isInitLayout && this.layout()
        }

        var h = 0, r = {};
        return a.namespace = "outlayer", a.Item = p, a.defaults = {
            containerStyle: {position: "relative"},
            isInitLayout: !0,
            isOriginLeft: !0,
            isOriginTop: !0,
            isResizeBound: !0,
            isResizingContainer: !0,
            transitionDuration: "0.4s",
            hiddenStyle: {opacity: 0, transform: "scale(0.001)"},
            visibleStyle: {opacity: 1, transform: "scale(1)"}
        }, w(a.prototype, n.prototype), a.prototype.option = function (d) {
            w(this.options, d)
        }, a.prototype._create = function () {
            this.reloadItems(), this.stamps = [], this.stamp(this.options.stamp), w(this.element.style, this.options.containerStyle), this.options.isResizeBound && this.bindResize()
        }, a.prototype.reloadItems = function () {
            this.items = this._itemize(this.element.children)
        }, a.prototype._itemize = function (u) {
            for (var F = this._filterFindItemElements(u), f = this.constructor.Item, G = [], H = 0, E = F.length; E > H; H++) {
                var D = F[H], d = new f(D, this);
                G.push(d)
            }
            return G
        }, a.prototype._filterFindItemElements = function (I) {
            I = j(I);
            for (var F = this.options.itemSelector, E = [], D = 0, d = I.length; d > D; D++) {
                var J = I[D];
                if (y(J)) {
                    if (F) {
                        c(J, F) && E.push(J);
                        for (var G = J.querySelectorAll(F), H = 0, f = G.length; f > H; H++) {
                            E.push(G[H])
                        }
                    } else {
                        E.push(J)
                    }
                }
            }
            return E
        }, a.prototype.getItemElements = function () {
            for (var f = [], s = 0, d = this.items.length; d > s; s++) {
                f.push(this.items[s].element)
            }
            return f
        }, a.prototype.layout = function () {
            this._resetLayout(), this._manageStamps();
            var d = void 0 !== this.options.isLayoutInstant ? this.options.isLayoutInstant : !this._isLayoutInited;
            this.layoutItems(this.items, d), this._isLayoutInited = !0
        }, a.prototype._init = a.prototype.layout, a.prototype._resetLayout = function () {
            this.getSize()
        }, a.prototype.getSize = function () {
            this.size = o(this.element)
        }, a.prototype._getMeasurement = function (f, s) {
            var d, u = this.options[f];
            u ? ("string" == typeof u ? d = this.element.querySelector(u) : y(u) && (d = u), this[f] = d ? o(d)[s] : u) : this[f] = 0
        }, a.prototype.layoutItems = function (d, f) {
            d = this._getItemsForLayout(d), this._layoutItems(d, f), this._postLayout()
        }, a.prototype._getItemsForLayout = function (f) {
            for (var s = [], d = 0, u = f.length; u > d; d++) {
                var D = f[d];
                D.isIgnored || s.push(D)
            }
            return s
        }, a.prototype._layoutItems = function (I, F) {
            function E() {
                f.emitEvent("layoutComplete", [f, I])
            }

            var f = this;
            if (!I || !I.length) {
                return E(), void 0
            }
            this._itemsOn(I, "layout", E);
            for (var D = [], d = 0, J = I.length; J > d; d++) {
                var G = I[d], H = this._getItemLayoutPosition(G);
                H.item = G, H.isInstant = F || G.isLayoutInstant, D.push(H)
            }
            this._processLayoutQueue(D)
        }, a.prototype._getItemLayoutPosition = function () {
            return {x: 0, y: 0}
        }, a.prototype._processLayoutQueue = function (f) {
            for (var s = 0, d = f.length; d > s; s++) {
                var u = f[s];
                this._positionItem(u.item, u.x, u.y, u.isInstant)
            }
        }, a.prototype._positionItem = function (f, s, d, u) {
            u ? f.goTo(s, d) : f.moveTo(s, d)
        }, a.prototype._postLayout = function () {
            this.resizeContainer()
        }, a.prototype.resizeContainer = function () {
            if (this.options.isResizingContainer) {
                var d = this._getContainerSize();
                d && (this._setContainerMeasure(d.width, !0), this._setContainerMeasure(d.height, !1))
            }
        }, a.prototype._getContainerSize = m, a.prototype._setContainerMeasure = function (f, s) {
            if (void 0 !== f) {
                var d = this.size;
                d.isBorderBox && (f += s ? d.paddingLeft + d.paddingRight + d.borderLeftWidth + d.borderRightWidth : d.paddingBottom + d.paddingTop + d.borderTopWidth + d.borderBottomWidth), f = Math.max(f, 0), this.element.style[s ? "width" : "height"] = f + "px"
            }
        }, a.prototype._itemsOn = function (J, G, F) {
            function D() {
                return E++, E === d && F.call(K), !0
            }

            for (var E = 0, d = J.length, K = this, H = 0, I = J.length; I > H; H++) {
                var f = J[H];
                f.on(G, D)
            }
        }, a.prototype.ignore = function (d) {
            var f = this.getItem(d);
            f && (f.isIgnored = !0)
        }, a.prototype.unignore = function (d) {
            var f = this.getItem(d);
            f && delete f.isIgnored
        }, a.prototype.stamp = function (f) {
            if (f = this._find(f)) {
                this.stamps = this.stamps.concat(f);
                for (var s = 0, d = f.length; d > s; s++) {
                    var u = f[s];
                    this.ignore(u)
                }
            }
        }, a.prototype.unstamp = function (f) {
            if (f = this._find(f)) {
                for (var s = 0, d = f.length; d > s; s++) {
                    var u = f[s];
                    k(u, this.stamps), this.unignore(u)
                }
            }
        }, a.prototype._find = function (d) {
            return d ? ("string" == typeof d && (d = this.element.querySelectorAll(d)), d = j(d)) : void 0
        }, a.prototype._manageStamps = function () {
            if (this.stamps && this.stamps.length) {
                this._getBoundingRect();
                for (var f = 0, s = this.stamps.length; s > f; f++) {
                    var d = this.stamps[f];
                    this._manageStamp(d)
                }
            }
        }, a.prototype._getBoundingRect = function () {
            var d = this.element.getBoundingClientRect(), f = this.size;
            this._boundingRect = {
                left: d.left + f.paddingLeft + f.borderLeftWidth,
                top: d.top + f.paddingTop + f.borderTopWidth,
                right: d.right - (f.paddingRight + f.borderRightWidth),
                bottom: d.bottom - (f.paddingBottom + f.borderBottomWidth)
            }
        }, a.prototype._manageStamp = m, a.prototype._getElementOffset = function (f) {
            var s = f.getBoundingClientRect(), d = this._boundingRect, u = o(f), D = {
                left: s.left - d.left - u.marginLeft,
                top: s.top - d.top - u.marginTop,
                right: d.right - s.right - u.marginRight,
                bottom: d.bottom - s.bottom - u.marginBottom
            };
            return D
        }, a.prototype.handleEvent = function (d) {
            var f = "on" + d.type;
            this[f] && this[f](d)
        }, a.prototype.bindResize = function () {
            this.isResizeBound || (e.bind(B, "resize", this), this.isResizeBound = !0)
        }, a.prototype.unbindResize = function () {
            this.isResizeBound && e.unbind(B, "resize", this), this.isResizeBound = !1
        }, a.prototype.onresize = function () {
            function d() {
                f.resize(), delete f.resizeTimeout
            }

            this.resizeTimeout && clearTimeout(this.resizeTimeout);
            var f = this;
            this.resizeTimeout = setTimeout(d, 100)
        }, a.prototype.resize = function () {
            this.isResizeBound && this.needsResizeLayout() && this.layout()
        }, a.prototype.needsResizeLayout = function () {
            var d = o(this.element), f = this.size && d;
            return f && d.innerWidth !== this.size.innerWidth
        }, a.prototype.addItems = function (d) {
            var f = this._itemize(d);
            return f.length && (this.items = this.items.concat(f)), f
        }, a.prototype.appended = function (d) {
            var f = this.addItems(d);
            f.length && (this.layoutItems(f, !0), this.reveal(f))
        }, a.prototype.prepended = function (f) {
            var s = this._itemize(f);
            if (s.length) {
                var d = this.items.slice(0);
                this.items = s.concat(d), this._resetLayout(), this._manageStamps(), this.layoutItems(s, !0), this.reveal(s), this.layoutItems(d)
            }
        }, a.prototype.reveal = function (f) {
            var s = f && f.length;
            if (s) {
                for (var d = 0; s > d; d++) {
                    var u = f[d];
                    u.reveal()
                }
            }
        }, a.prototype.hide = function (f) {
            var s = f && f.length;
            if (s) {
                for (var d = 0; s > d; d++) {
                    var u = f[d];
                    u.hide()
                }
            }
        }, a.prototype.getItem = function (f) {
            for (var s = 0, d = this.items.length; d > s; s++) {
                var u = this.items[s];
                if (u.element === f) {
                    return u
                }
            }
        }, a.prototype.getItems = function (f) {
            if (f && f.length) {
                for (var u = [], d = 0, D = f.length; D > d; d++) {
                    var E = f[d], s = this.getItem(E);
                    s && u.push(s)
                }
                return u
            }
        }, a.prototype.remove = function (f) {
            f = j(f);
            var E = this.getItems(f);
            if (E && E.length) {
                this._itemsOn(E, "remove", function () {
                    this.emitEvent("removeComplete", [this, E])
                });
                for (var d = 0, D = E.length; D > d; d++) {
                    var u = E[d];
                    u.remove(), k(u, this.items)
                }
            }
        }, a.prototype.destroy = function () {
            var f = this.element.style;
            f.height = "", f.position = "", f.width = "";
            for (var s = 0, d = this.items.length; d > s; s++) {
                var u = this.items[s];
                u.destroy()
            }
            this.unbindResize(), delete this.element.outlayerGUID, g && g.removeData(this.element, this.constructor.namespace)
        }, a.data = function (d) {
            var f = d && d.outlayerGUID;
            return f && r[f]
        }, a.create = function (f, d) {
            function s() {
                a.apply(this, arguments)
            }

            return Object.create ? s.prototype = Object.create(a.prototype) : w(s.prototype, a.prototype), s.prototype.constructor = s, s.defaults = w({}, a.defaults), w(s.defaults, d), s.prototype.settings = {}, s.namespace = f, s.data = a.data, s.Item = function () {
                p.apply(this, arguments)
            }, s.Item.prototype = new p, t(function () {
                for (var H = b(f), E = z.querySelectorAll(".js-" + H), u = "data-" + H + "-options", L = 0, F = E.length; F > L; L++) {
                    var G, J = E[L], I = J.getAttribute(u);
                    try {
                        G = I && JSON.parse(I)
                    } catch (D) {
                        A && A.error("Error parsing " + u + " on " + J.nodeName.toLowerCase() + (J.id ? "#" + J.id : "") + ": " + D);
                        continue
                    }
                    var K = new s(J, G);
                    g && g.data(J, f, K)
                }
            }), g && g.bridget && g.bridget(f, s), s
        }, a.Item = p, a
    }

    var z = B.document, A = B.console, g = B.jQuery, m = function () {
    }, v = Object.prototype.toString, y = "object" == typeof HTMLElement ? function (a) {
        return a instanceof HTMLElement
    } : function (a) {
        return a && "object" == typeof a && 1 === a.nodeType && "string" == typeof a.nodeName
    }, x = Array.prototype.indexOf ? function (a, c) {
        return a.indexOf(c)
    } : function (c, d) {
        for (var a = 0, f = c.length; f > a; a++) {
            if (c[a] === d) {
                return a
            }
        }
        return -1
    };
    "function" == typeof define && define.amd ? define("outlayer/outlayer", ["eventie/eventie", "doc-ready/doc-ready", "eventEmitter/EventEmitter", "get-size/get-size", "matches-selector/matches-selector", "./item"], C) : B.Outlayer = C(B.eventie, B.docReady, B.EventEmitter, B.getSize, B.matchesSelector, B.Outlayer.Item)
}(window), function (a) {
    function b(c) {
        function d() {
            c.Item.apply(this, arguments)
        }

        return d.prototype = new c.Item, d.prototype._create = function () {
            this.id = this.layout.itemGUID++, c.Item.prototype._create.call(this), this.sortData = {}
        }, d.prototype.updateSortData = function () {
            if (!this.isIgnored) {
                this.sortData.id = this.id, this.sortData["original-order"] = this.id, this.sortData.random = Math.random();
                var g = this.layout.options.getSortData, h = this.layout._sorters;
                for (var f in g) {
                    var j = h[f];
                    this.sortData[f] = j(this.element, this)
                }
            }
        }, d
    }

    "function" == typeof define && define.amd ? define("isotope/js/item", ["outlayer/outlayer"], b) : (a.Isotope = a.Isotope || {}, a.Isotope.Item = b(a.Outlayer))
}(window), function (a) {
    function b(d, f) {
        function c(e) {
            this.isotope = e, e && (this.options = e.options[this.namespace], this.element = e.element, this.items = e.filteredItems, this.size = e.size)
        }

        return function () {
            function e(k) {
                return function () {
                    return f.prototype[k].apply(this.isotope, arguments)
                }
            }

            for (var i = ["_resetLayout", "_getItemLayoutPosition", "_manageStamp", "_getContainerSize", "_getElementOffset", "needsResizeLayout"], j = 0, h = i.length; h > j; j++) {
                var g = i[j];
                c.prototype[g] = e(g)
            }
        }(), c.prototype.needsVerticalResizeLayout = function () {
            var h = d(this.isotope.element), g = this.isotope.size && h;
            return g && h.innerHeight !== this.isotope.size.innerHeight
        }, c.prototype._getMeasurement = function () {
            this.isotope._getMeasurement.apply(this, arguments)
        }, c.prototype.getColumnWidth = function () {
            this.getSegmentSize("column", "Width")
        }, c.prototype.getRowHeight = function () {
            this.getSegmentSize("row", "Height")
        }, c.prototype.getSegmentSize = function (h, j) {
            var g = h + j, k = "outer" + j;
            if (this._getMeasurement(g, k), !this[g]) {
                var l = this.getFirstItemSize();
                this[g] = l && l[k] || this.isotope.size["inner" + j]
            }
        }, c.prototype.getFirstItemSize = function () {
            var g = this.isotope.filteredItems[0];
            return g && g.element && d(g.element)
        }, c.prototype.layout = function () {
            this.isotope.layout.apply(this.isotope, arguments)
        }, c.prototype.getSize = function () {
            this.isotope.getSize(), this.size = this.isotope.size
        }, c.modes = {}, c.create = function (g, h) {
            function i() {
                c.apply(this, arguments)
            }

            return i.prototype = new c, h && (i.options = h), i.prototype.namespace = g, c.modes[g] = i, i
        }, c
    }

    "function" == typeof define && define.amd ? define("isotope/js/layout-mode", ["get-size/get-size", "outlayer/outlayer"], b) : (a.Isotope = a.Isotope || {}, a.Isotope.LayoutMode = b(a.getSize, a.Outlayer))
}(window), function (b) {
    function c(d, f) {
        var g = d.create("masonry");
        return g.prototype._resetLayout = function () {
            this.getSize(), this._getMeasurement("columnWidth", "outerWidth"), this._getMeasurement("gutter", "outerWidth"), this.measureColumns();
            var e = this.cols;
            for (this.colYs = []; e--;) {
                this.colYs.push(0)
            }
            this.maxY = 0
        }, g.prototype.measureColumns = function () {
            if (this.getContainerWidth(), !this.columnWidth) {
                var h = this.items[0], e = h && h.element;
                this.columnWidth = e && f(e).outerWidth || this.containerWidth
            }
            this.columnWidth += this.gutter, this.cols = Math.floor((this.containerWidth + this.gutter) / this.columnWidth), this.cols = Math.max(this.cols, 1)
        }, g.prototype.getContainerWidth = function () {
            var h = this.options.isFitWidth ? this.element.parentNode : this.element, e = f(h);
            this.containerWidth = e && e.innerWidth
        }, g.prototype._getItemLayoutPosition = function (z) {
            z.getSize();
            var w = z.size.outerWidth % this.columnWidth, k = w && 1 > w ? "round" : "ceil",
                l = Math[k](z.size.outerWidth / this.columnWidth);
            l = Math.min(l, this.cols);
            for (var i = this._getColGroup(l), A = Math.min.apply(Math, i), x = a(i, A), y = {
                x: this.columnWidth * x,
                y: A
            }, j = A + z.size.outerHeight, m = this.cols + 1 - i.length, v = 0; m > v; v++) {
                this.colYs[x + v] = j
            }
            return y
        }, g.prototype._getColGroup = function (j) {
            if (2 > j) {
                return this.colYs
            }
            for (var k = [], h = this.cols + 1 - j, l = 0; h > l; l++) {
                var m = this.colYs.slice(l, l + j);
                k[l] = Math.max.apply(Math, m)
            }
            return k
        }, g.prototype._manageStamp = function (w) {
            var l = f(w), j = this._getElementOffset(w), k = this.options.isOriginLeft ? j.left : j.right,
                e = k + l.outerWidth, x = Math.floor(k / this.columnWidth);
            x = Math.max(0, x);
            var m = Math.floor(e / this.columnWidth);
            m -= e % this.columnWidth ? 0 : 1, m = Math.min(this.cols - 1, m);
            for (var v = (this.options.isOriginTop ? j.top : j.bottom) + l.outerHeight, h = x; m >= h; h++) {
                this.colYs[h] = Math.max(v, this.colYs[h])
            }
        }, g.prototype._getContainerSize = function () {
            this.maxY = Math.max.apply(Math, this.colYs);
            var e = {height: this.maxY};
            return this.options.isFitWidth && (e.width = this._getContainerFitWidth()), e
        }, g.prototype._getContainerFitWidth = function () {
            for (var h = 0, i = this.cols; --i && 0 === this.colYs[i];) {
                h++
            }
            return (this.cols - h) * this.columnWidth - this.gutter
        }, g.prototype.needsResizeLayout = function () {
            var e = this.containerWidth;
            return this.getContainerWidth(), e !== this.containerWidth
        }, g
    }

    var a = Array.prototype.indexOf ? function (d, f) {
        return d.indexOf(f)
    } : function (f, g) {
        for (var d = 0, h = f.length; h > d; d++) {
            var j = f[d];
            if (j === g) {
                return d
            }
        }
        return -1
    };
    "function" == typeof define && define.amd ? define("masonry/masonry", ["outlayer/outlayer", "get-size/get-size"], c) : b.Masonry = c(b.Outlayer, b.getSize)
}(window), function (b) {
    function c(f, g) {
        for (var d in g) {
            f[d] = g[d]
        }
        return f
    }

    function a(g, f) {
        var k = g.create("masonry"), l = k.prototype._getElementOffset, j = k.prototype.layout,
            h = k.prototype._getMeasurement;
        c(k.prototype, f.prototype), k.prototype._getElementOffset = l, k.prototype.layout = j, k.prototype._getMeasurement = h;
        var d = k.prototype.measureColumns;
        k.prototype.measureColumns = function () {
            this.items = this.isotope.filteredItems, d.call(this)
        };
        var e = k.prototype._manageStamp;
        return k.prototype._manageStamp = function () {
            this.options.isOriginLeft = this.isotope.options.isOriginLeft, this.options.isOriginTop = this.isotope.options.isOriginTop, e.apply(this, arguments)
        }, k
    }

    "function" == typeof define && define.amd ? define("isotope/js/layout-modes/masonry", ["../layout-mode", "masonry/masonry"], a) : a(b.Isotope.LayoutMode, b.Masonry)
}(window), function (a) {
    function b(c) {
        var d = c.create("fitRows");
        return d.prototype._resetLayout = function () {
            this.x = 0, this.y = 0, this.maxY = 0
        }, d.prototype._getItemLayoutPosition = function (f) {
            f.getSize(), 0 !== this.x && f.size.outerWidth + this.x > this.isotope.size.innerWidth && (this.x = 0, this.y = this.maxY);
            var g = {x: this.x, y: this.y};
            return this.maxY = Math.max(this.maxY, this.y + f.size.outerHeight), this.x += f.size.outerWidth, g
        }, d.prototype._getContainerSize = function () {
            return {height: this.maxY}
        }, d
    }

    "function" == typeof define && define.amd ? define("isotope/js/layout-modes/fit-rows", ["../layout-mode"], b) : b(a.Isotope.LayoutMode)
}(window), function (a) {
    function b(c) {
        var d = c.create("vertical", {horizontalAlignment: 0});
        return d.prototype._resetLayout = function () {
            this.y = 0
        }, d.prototype._getItemLayoutPosition = function (g) {
            g.getSize();
            var h = (this.isotope.size.innerWidth - g.size.outerWidth) * this.options.horizontalAlignment, f = this.y;
            return this.y += g.size.outerHeight, {x: h, y: f}
        }, d.prototype._getContainerSize = function () {
            return {height: this.y}
        }, d
    }

    "function" == typeof define && define.amd ? define("isotope/js/layout-modes/vertical", ["../layout-mode"], b) : b(a.Isotope.LayoutMode)
}(window), function (x) {
    function m(f, h) {
        for (var a in h) {
            f[a] = h[a]
        }
        return f
    }

    function j(a) {
        return "[object Array]" === k.call(a)
    }

    function d(a) {
        var f = [];
        if (j(a)) {
            f = a
        } else {
            if (a && "number" == typeof a.length) {
                for (var h = 0, i = a.length; i > h; h++) {
                    f.push(a[h])
                }
            } else {
                f.push(a)
            }
        }
        return f
    }

    function g(f, h) {
        var a = l(h, f);
        -1 !== a && h.splice(a, 1)
    }

    function b(B, n, a, A, o) {
        function p(f, h) {
            return function (F, D) {
                for (var E = 0, t = f.length; t > E; E++) {
                    var J = f[E], H = F.sortData[J], I = D.sortData[J];
                    if (H > I || I > H) {
                        var C = void 0 !== h[J] ? h[J] : h, G = C ? 1 : -1;
                        return (H > I ? 1 : -1) * G
                    }
                }
                return 0
            }
        }

        var z = B.create("isotope", {layoutMode: "masonry", isJQueryFiltering: !0, sortAscending: !0});
        z.Item = A, z.LayoutMode = o, z.prototype._create = function () {
            this.itemGUID = 0, this._sorters = {}, this._getSorters(), B.prototype._create.call(this), this.modes = {}, this.filteredItems = this.items, this.sortHistory = ["original-order"];
            for (var f in o.modes) {
                this._initLayoutMode(f)
            }
        }, z.prototype.reloadItems = function () {
            this.itemGUID = 0, B.prototype.reloadItems.call(this)
        }, z.prototype._itemize = function () {
            for (var h = B.prototype._itemize.apply(this, arguments), f = 0, r = h.length; r > f; f++) {
                var t = h[f];
                t.id = this.itemGUID++
            }
            return this._updateItemsSortData(h), h
        }, z.prototype._initLayoutMode = function (h) {
            var f = o.modes[h], r = this.options[h] || {};
            this.options[h] = f.options ? m(f.options, r) : r, this.modes[h] = new f(this)
        }, z.prototype.layout = function () {
            return !this._isLayoutInited && this.options.isInitLayout ? (this.arrange(), void 0) : (this._layout(), void 0)
        }, z.prototype._layout = function () {
            var f = this._getIsInstant();
            this._resetLayout(), this._manageStamps(), this.layoutItems(this.filteredItems, f), this._isLayoutInited = !0
        }, z.prototype.arrange = function (f) {
            this.option(f), this._getIsInstant(), this.filteredItems = this._filter(this.items), this._sort(), this._layout()
        }, z.prototype._init = z.prototype.arrange, z.prototype._getIsInstant = function () {
            var f = void 0 !== this.options.isLayoutInstant ? this.options.isLayoutInstant : !this._isLayoutInited;
            return this._isInstant = f, f
        }, z.prototype._filter = function (M) {
            function J() {
                I.reveal(F), I.hide(C)
            }

            var G = this.options.filter;
            G = G || "*";
            for (var E = [], F = [], C = [], N = this._getFilterTest(G), K = 0, L = M.length; L > K; K++) {
                var D = M[K];
                if (!D.isIgnored) {
                    var H = N(D);
                    H && E.push(D), H && D.isHidden ? F.push(D) : H || D.isHidden || C.push(D)
                }
            }
            var I = this;
            return this._isInstant ? this._noTransition(J) : J(), E
        }, z.prototype._getFilterTest = function (f) {
            return y && this.options.isJQueryFiltering ? function (h) {
                return y(h.element).is(f)
            } : "function" == typeof f ? function (h) {
                return f(h.element)
            } : function (h) {
                return a(h.element, f)
            }
        }, z.prototype.updateSortData = function (f) {
            this._getSorters(), f = d(f);
            var h = this.getItems(f);
            h = h.length ? h : this.items, this._updateItemsSortData(h)
        }, z.prototype._getSorters = function () {
            var h = this.options.getSortData;
            for (var r in h) {
                var f = h[r];
                this._sorters[r] = s(f)
            }
        }, z.prototype._updateItemsSortData = function (h) {
            for (var r = 0, f = h.length; f > r; r++) {
                var u = h[r];
                u.updateSortData()
            }
        };
        var s = function () {
            function f(E) {
                if ("string" != typeof E) {
                    return E
                }
                var D = v(E).split(" "), H = D[0], I = H.match(/^\[(.+)\]$/), G = I && I[1], F = h(G, H),
                    C = z.sortDataParsers[D[1]];
                return E = C ? function (i) {
                    return i && C(F(i))
                } : function (i) {
                    return i && F(i)
                }
            }

            function h(u, C) {
                var r;
                return r = u ? function (i) {
                    return i.getAttribute(u)
                } : function (E) {
                    var D = E.querySelector(C);
                    return D && c(D)
                }
            }

            return f
        }();
        z.sortDataParsers = {
            parseInt: function (f) {
                return parseInt(f, 10)
            }, parseFloat: function (f) {
                return parseFloat(f)
            }
        }, z.prototype._sort = function () {
            var h = this.options.sortBy;
            if (h) {
                var r = [].concat.apply(h, this.sortHistory), f = p(r, this.options.sortAscending);
                this.filteredItems.sort(f), h !== this.sortHistory[0] && this.sortHistory.unshift(h)
            }
        }, z.prototype._mode = function () {
            var f = this.options.layoutMode, h = this.modes[f];
            if (!h) {
                throw Error("No layout mode: " + f)
            }
            return h.options = this.options[f], h
        }, z.prototype._resetLayout = function () {
            B.prototype._resetLayout.call(this), this._mode()._resetLayout()
        }, z.prototype._getItemLayoutPosition = function (f) {
            return this._mode()._getItemLayoutPosition(f)
        }, z.prototype._manageStamp = function (f) {
            this._mode()._manageStamp(f)
        }, z.prototype._getContainerSize = function () {
            return this._mode()._getContainerSize()
        }, z.prototype.needsResizeLayout = function () {
            return this._mode().needsResizeLayout()
        }, z.prototype.appended = function (h) {
            var r = this.addItems(h);
            if (r.length) {
                var f = this._filterRevealAdded(r);
                this.filteredItems = this.filteredItems.concat(f)
            }
        }, z.prototype.prepended = function (h) {
            var r = this._itemize(h);
            if (r.length) {
                var f = this.items.slice(0);
                this.items = r.concat(f), this._resetLayout(), this._manageStamps();
                var u = this._filterRevealAdded(r);
                this.layoutItems(f), this.filteredItems = u.concat(this.filteredItems)
            }
        }, z.prototype._filterRevealAdded = function (f) {
            var h = this._noTransition(function () {
                return this._filter(f)
            });
            return this.layoutItems(h, !0), this.reveal(h), f
        }, z.prototype.insert = function (h) {
            var C = this.addItems(h);
            if (C.length) {
                var f, D, E = C.length;
                for (f = 0; E > f; f++) {
                    D = C[f], this.element.appendChild(D.element)
                }
                var u = this._filter(C);
                for (this._noTransition(function () {
                    this.hide(u)
                }), f = 0; E > f; f++) {
                    C[f].isLayoutInstant = !0
                }
                for (this.arrange(), f = 0; E > f; f++) {
                    delete C[f].isLayoutInstant
                }
                this.reveal(u)
            }
        };
        var e = z.prototype.remove;
        return z.prototype.remove = function (h) {
            h = d(h);
            var D = this.getItems(h);
            if (e.call(this, h), D && D.length) {
                for (var f = 0, C = D.length; C > f; f++) {
                    var u = D[f];
                    g(u, this.filteredItems)
                }
            }
        }, z.prototype._noTransition = function (h) {
            var r = this.options.transitionDuration;
            this.options.transitionDuration = 0;
            var f = h.call(this);
            return this.options.transitionDuration = r, f
        }, z
    }

    var y = x.jQuery, v = String.prototype.trim ? function (a) {
        return a.trim()
    } : function (a) {
        return a.replace(/^\s+|\s+$/g, "")
    }, w = document.documentElement, c = w.textContent ? function (a) {
        return a.textContent
    } : function (a) {
        return a.innerText
    }, k = Object.prototype.toString, l = Array.prototype.indexOf ? function (a, f) {
        return a.indexOf(f)
    } : function (f, h) {
        for (var a = 0, n = f.length; n > a; a++) {
            if (f[a] === h) {
                return a
            }
        }
        return -1
    };
    "function" == typeof define && define.amd ? define(["outlayer/outlayer", "get-size/get-size", "matches-selector/matches-selector", "isotope/js/item", "isotope/js/layout-mode", "isotope/js/layout-modes/masonry", "isotope/js/layout-modes/fit-rows", "isotope/js/layout-modes/vertical"], b) : x.Isotope = b(x.Outlayer, x.getSize, x.matchesSelector, x.Isotope.Item, x.Isotope.LayoutMode)
}(window);
/*!
 * imagesLoaded PACKAGED v3.1.8
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */
(function () {
    function d() {
    }

    function b(i, h) {
        for (var j = i.length; j--;) {
            if (i[j].listener === h) {
                return j
            }
        }
        return -1
    }

    function g(h) {
        return function () {
            return this[h].apply(this, arguments)
        }
    }

    var a = d.prototype, c = this, f = c.EventEmitter;
    a.getListeners = function (k) {
        var j, l, h = this._getEvents();
        if ("object" == typeof k) {
            j = {};
            for (l in h) {
                h.hasOwnProperty(l) && k.test(l) && (j[l] = h[l])
            }
        } else {
            j = h[k] || (h[k] = [])
        }
        return j
    }, a.flattenListeners = function (i) {
        var h, j = [];
        for (h = 0; i.length > h; h += 1) {
            j.push(i[h].listener)
        }
        return j
    }, a.getListenersAsObject = function (i) {
        var h, j = this.getListeners(i);
        return j instanceof Array && (h = {}, h[i] = j), h || j
    }, a.addListener = function (k, m) {
        var h, j = this.getListenersAsObject(k), l = "object" == typeof m;
        for (h in j) {
            j.hasOwnProperty(h) && -1 === b(j[h], m) && j[h].push(l ? m : {listener: m, once: !1})
        }
        return this
    }, a.on = g("addListener"), a.addOnceListener = function (i, h) {
        return this.addListener(i, {listener: h, once: !0})
    }, a.once = g("addOnceListener"), a.defineEvent = function (h) {
        return this.getListeners(h), this
    }, a.defineEvents = function (i) {
        for (var h = 0; i.length > h; h += 1) {
            this.defineEvent(i[h])
        }
        return this
    }, a.removeListener = function (k, m) {
        var h, j, l = this.getListenersAsObject(k);
        for (j in l) {
            l.hasOwnProperty(j) && (h = b(l[j], m), -1 !== h && l[j].splice(h, 1))
        }
        return this
    }, a.off = g("removeListener"), a.addListeners = function (i, h) {
        return this.manipulateListeners(!1, i, h)
    }, a.removeListeners = function (i, h) {
        return this.manipulateListeners(!0, i, h)
    }, a.manipulateListeners = function (m, j, u) {
        var h, l, p = m ? this.removeListener : this.addListener, k = m ? this.removeListeners : this.addListeners;
        if ("object" != typeof j || j instanceof RegExp) {
            for (h = u.length; h--;) {
                p.call(this, j, u[h])
            }
        } else {
            for (h in j) {
                j.hasOwnProperty(h) && (l = j[h]) && ("function" == typeof l ? p.call(this, h, l) : k.call(this, h, l))
            }
        }
        return this
    }, a.removeEvent = function (k) {
        var j, l = typeof k, h = this._getEvents();
        if ("string" === l) {
            delete h[k]
        } else {
            if ("object" === l) {
                for (j in h) {
                    h.hasOwnProperty(j) && k.test(j) && delete h[j]
                }
            } else {
                delete this._events
            }
        }
        return this
    }, a.removeAllListeners = g("removeEvent"), a.emitEvent = function (m, j) {
        var u, h, l, p, k = this.getListenersAsObject(m);
        for (l in k) {
            if (k.hasOwnProperty(l)) {
                for (h = k[l].length; h--;) {
                    u = k[l][h], u.once === !0 && this.removeListener(m, u.listener), p = u.listener.apply(this, j || []), p === this._getOnceReturnValue() && this.removeListener(m, u.listener)
                }
            }
        }
        return this
    }, a.trigger = g("emitEvent"), a.emit = function (i) {
        var h = Array.prototype.slice.call(arguments, 1);
        return this.emitEvent(i, h)
    }, a.setOnceReturnValue = function (h) {
        return this._onceReturnValue = h, this
    }, a._getOnceReturnValue = function () {
        return this.hasOwnProperty("_onceReturnValue") ? this._onceReturnValue : !0
    }, a._getEvents = function () {
        return this._events || (this._events = {})
    }, d.noConflict = function () {
        return c.EventEmitter = f, d
    }, "function" == typeof define && define.amd ? define("eventEmitter/EventEmitter", [], function () {
        return d
    }) : "object" == typeof module && module.exports ? module.exports = d : this.EventEmitter = d
}).call(this), function (d) {
    function b(e) {
        var h = d.event;
        return h.target = h.target || h.srcElement || e, h
    }

    var g = document.documentElement, a = function () {
    };
    g.addEventListener ? a = function (i, h, j) {
        i.addEventListener(h, j, !1)
    } : g.attachEvent && (a = function (j, k, h) {
        j[k + h] = h.handleEvent ? function () {
            var e = b(j);
            h.handleEvent.call(h, e)
        } : function () {
            var e = b(j);
            h.call(j, e)
        }, j.attachEvent("on" + k, j[k + h])
    });
    var c = function () {
    };
    g.removeEventListener ? c = function (i, h, j) {
        i.removeEventListener(h, j, !1)
    } : g.detachEvent && (c = function (k, j, l) {
        k.detachEvent("on" + j, k[j + l]);
        try {
            delete k[j + l]
        } catch (h) {
            k[j + l] = void 0
        }
    });
    var f = {bind: a, unbind: c};
    "function" == typeof define && define.amd ? define("eventie/eventie", f) : d.eventie = f
}(this), function (b, a) {
    "function" == typeof define && define.amd ? define(["eventEmitter/EventEmitter", "eventie/eventie"], function (d, c) {
        return a(b, d, c)
    }) : "object" == typeof exports ? module.exports = a(b, require("wolfy87-eventemitter"), require("eventie")) : b.imagesLoaded = a(b, b.EventEmitter, b.eventie)
}(window, function (p, B, j) {
    function k(c, a) {
        for (var d in a) {
            c[d] = a[d]
        }
        return c
    }

    function b(a) {
        return "[object Array]" === w.call(a)
    }

    function g(d) {
        var c = [];
        if (b(d)) {
            c = d
        } else {
            if ("number" == typeof d.length) {
                for (var f = 0, a = d.length; a > f; f++) {
                    c.push(d[f])
                }
            } else {
                c.push(d)
            }
        }
        return c
    }

    function C(d, a, f) {
        if (!(this instanceof C)) {
            return new C(d, a)
        }
        "string" == typeof d && (d = document.querySelectorAll(d)), this.elements = g(d), this.options = k({}, this.options), "function" == typeof a ? f = a : k(this.options, a), f && this.on("always", f), this.getImages(), y && (this.jqDeferred = new y.Deferred);
        var c = this;
        setTimeout(function () {
            c.check()
        })
    }

    function m(a) {
        this.img = a
    }

    function x(a) {
        this.src = a, z[a] = this
    }

    var y = p.jQuery, A = p.console, l = A !== void 0, w = Object.prototype.toString;
    C.prototype = new B, C.prototype.options = {}, C.prototype.getImages = function () {
        this.images = [];
        for (var v = 0, c = this.elements.length; c > v; v++) {
            var E = this.elements[v];
            "IMG" === E.nodeName && this.addImage(E);
            var a = E.nodeType;
            if (a && (1 === a || 9 === a || 11 === a)) {
                for (var h = E.querySelectorAll("img"), D = 0, d = h.length; d > D; D++) {
                    var u = h[D];
                    this.addImage(u)
                }
            }
        }
    }, C.prototype.addImage = function (c) {
        var a = new m(c);
        this.images.push(a)
    }, C.prototype.check = function () {
        function f(n, i) {
            return c.options.debug && l && A.log("confirm", n, i), c.progress(n), s++, s === a && c.complete(), !0
        }

        var c = this, s = 0, a = this.images.length;
        if (this.hasAnyBroken = !1, !a) {
            return this.complete(), void 0
        }
        for (var d = 0; a > d; d++) {
            var h = this.images[d];
            h.on("confirm", f), h.check()
        }
    }, C.prototype.progress = function (c) {
        this.hasAnyBroken = this.hasAnyBroken || !c.isLoaded;
        var a = this;
        setTimeout(function () {
            a.emit("progress", a, c), a.jqDeferred && a.jqDeferred.notify && a.jqDeferred.notify(a, c)
        })
    }, C.prototype.complete = function () {
        var c = this.hasAnyBroken ? "fail" : "done";
        this.isComplete = !0;
        var a = this;
        setTimeout(function () {
            if (a.emit(c, a), a.emit("always", a), a.jqDeferred) {
                var d = a.hasAnyBroken ? "reject" : "resolve";
                a.jqDeferred[d](a)
            }
        })
    }, y && (y.fn.imagesLoaded = function (c, a) {
        var d = new C(this, c, a);
        return d.jqDeferred.promise(y(this))
    }), m.prototype = new B, m.prototype.check = function () {
        var c = z[this.img.src] || new x(this.img.src);
        if (c.isConfirmed) {
            return this.confirm(c.isLoaded, "cached was confirmed"), void 0
        }
        if (this.img.complete && void 0 !== this.img.naturalWidth) {
            return this.confirm(0 !== this.img.naturalWidth, "naturalWidth"), void 0
        }
        var a = this;
        c.on("confirm", function (d, f) {
            return a.confirm(d.isLoaded, f), !0
        }), c.check()
    }, m.prototype.confirm = function (c, a) {
        this.isLoaded = c, this.emit("confirm", this, a)
    };
    var z = {};
    return x.prototype = new B, x.prototype.check = function () {
        if (!this.isChecked) {
            var a = new Image;
            j.bind(a, "load", this), j.bind(a, "error", this), a.src = this.src, this.isChecked = !0
        }
    }, x.prototype.handleEvent = function (c) {
        var a = "on" + c.type;
        this[a] && this[a](c)
    }, x.prototype.onload = function (a) {
        this.confirm(!0, "onload"), this.unbindProxyEvents(a)
    }, x.prototype.onerror = function (a) {
        this.confirm(!1, "onerror"), this.unbindProxyEvents(a)
    }, x.prototype.confirm = function (c, a) {
        this.isConfirmed = !0, this.isLoaded = c, this.emit("confirm", this, a)
    }, x.prototype.unbindProxyEvents = function (a) {
        j.unbind(a.target, "load", this), j.unbind(a.target, "error", this)
    }, C
});
(function () {
    var b, a;
    b = function () {
        function c(g, d) {
            var h, f;
            this.options = {
                target: "instafeed",
                get: "popular",
                resolution: "thumbnail",
                sortBy: "none",
                links: !0,
                mock: !1,
                useHttp: !1
            };
            if (typeof g == "object") {
                for (h in g) {
                    f = g[h], this.options[h] = f
                }
            }
            this.context = d != null ? d : this, this.unique = this._genKey()
        }

        return c.prototype.hasNext = function () {
            return typeof this.context.nextUrl == "string" && this.context.nextUrl.length > 0
        }, c.prototype.next = function () {
            return this.hasNext() ? this.run(this.context.nextUrl) : !1
        }, c.prototype.run = function (e) {
            var g, f, d;
            if (typeof this.options.clientId != "string" && typeof this.options.accessToken != "string") {
                throw new Error("Missing clientId or accessToken.")
            }
            if (typeof this.options.accessToken != "string" && typeof this.options.clientId != "string") {
                throw new Error("Missing clientId or accessToken.")
            }
            return this.options.before != null && typeof this.options.before == "function" && this.options.before.call(this), typeof document != "undefined" && document !== null && (d = document.createElement("script"), d.id = "instafeed-fetcher", d.src = e || this._buildUrl(), g = document.getElementsByTagName("head"), g[0].appendChild(d), f = "instafeedCache" + this.unique, window[f] = new c(this.options, this), window[f].unique = this.unique), !0
        }, c.prototype.parse = function (R) {
            var F, K, H, N, G, J, C, W, Q, M, U, O, I, T, B, L, P, k, V, A, D, j;
            if (typeof R != "object") {
                if (this.options.error != null && typeof this.options.error == "function") {
                    return this.options.error.call(this, "Invalid JSON data"), !1
                }
                throw new Error("Invalid JSON response")
            }
            if (R.meta.code !== 200) {
                if (this.options.error != null && typeof this.options.error == "function") {
                    return this.options.error.call(this, R.meta.error_message), !1
                }
                throw new Error("Error from Instagram: " + R.meta.error_message)
            }
            if (R.data.length === 0) {
                if (this.options.error != null && typeof this.options.error == "function") {
                    return this.options.error.call(this, "No images were returned from Instagram"), !1
                }
                throw new Error("No images were returned from Instagram")
            }
            this.options.success != null && typeof this.options.success == "function" && this.options.success.call(this, R), this.context.nextUrl = "", R.pagination != null && (this.context.nextUrl = R.pagination.next_url);
            if (this.options.sortBy !== "none") {
                this.options.sortBy === "random" ? T = ["", "random"] : T = this.options.sortBy.split("-"), I = T[0] === "least" ? !0 : !1;
                switch (T[1]) {
                    case"random":
                        R.data.sort(function () {
                            return 0.5 - Math.random()
                        });
                        break;
                    case"recent":
                        R.data = this._sortBy(R.data, "created_time", I);
                        break;
                    case"liked":
                        R.data = this._sortBy(R.data, "likes.count", I);
                        break;
                    case"commented":
                        R.data = this._sortBy(R.data, "comments.count", I);
                        break;
                    default:
                        throw new Error("Invalid option for sortBy: '" + this.options.sortBy + "'.")
                }
            }
            if (typeof document != "undefined" && document !== null && this.options.mock === !1) {
                W = R.data, this.options.limit != null && W.length > this.options.limit && (W = W.slice(0, this.options.limit + 1 || 9000000000)), K = document.createDocumentFragment(), this.options.filter != null && typeof this.options.filter == "function" && (W = this._filter(W, this.options.filter));
                if (this.options.template != null && typeof this.options.template == "string") {
                    N = "", J = "", M = "", B = document.createElement("div");
                    for (L = 0, V = W.length; L < V; L++) {
                        G = W[L], C = G.images[this.options.resolution].url, this.options.useHttp || (C = C.replace("http://", "//")), J = this._makeTemplate(this.options.template, {
                            model: G,
                            id: G.id,
                            link: G.link,
                            image: C,
                            caption: this._getObjectProperty(G, "caption.text"),
                            likes: G.likes.count,
                            comments: G.comments.count,
                            location: this._getObjectProperty(G, "location.name")
                        }), N += J
                    }
                    B.innerHTML = N, j = [].slice.call(B.childNodes);
                    for (P = 0, A = j.length; P < A; P++) {
                        O = j[P], K.appendChild(O)
                    }
                } else {
                    for (k = 0, D = W.length; k < D; k++) {
                        G = W[k], Q = document.createElement("img"), C = G.images[this.options.resolution].url, this.options.useHttp || (C = C.replace("http://", "//")), Q.src = C, this.options.links === !0 ? (F = document.createElement("a"), F.href = G.link, F.appendChild(Q), K.appendChild(F)) : K.appendChild(Q)
                    }
                }
                document.getElementById(this.options.target).appendChild(K), H = document.getElementsByTagName("head")[0], H.removeChild(document.getElementById("instafeed-fetcher")), U = "instafeedCache" + this.unique, window[U] = void 0;
                try {
                    delete window[U]
                } catch (z) {
                }
            }
            return this.options.after != null && typeof this.options.after == "function" && this.options.after.call(this), !0
        }, c.prototype._buildUrl = function () {
            var f, d, g;
            f = "https://api.instagram.com/v1";
            switch (this.options.get) {
                case"popular":
                    d = "media/popular";
                    break;
                case"tagged":
                    if (typeof this.options.tagName != "string") {
                        throw new Error("No tag name specified. Use the 'tagName' option.")
                    }
                    d = "tags/" + this.options.tagName + "/media/recent";
                    break;
                case"location":
                    if (typeof this.options.locationId != "number") {
                        throw new Error("No location specified. Use the 'locationId' option.")
                    }
                    d = "locations/" + this.options.locationId + "/media/recent";
                    break;
                case"user":
                    if (typeof this.options.userId != "number") {
                        throw new Error("No user specified. Use the 'userId' option.")
                    }
                    if (typeof this.options.accessToken != "string") {
                        throw new Error("No access token. Use the 'accessToken' option.")
                    }
                    d = "users/" + this.options.userId + "/media/recent";
                    break;
                default:
                    throw new Error("Invalid option for get: '" + this.options.get + "'.")
            }
            return g = "" + f + "/" + d, this.options.accessToken != null ? g += "?access_token=" + this.options.accessToken : g += "?client_id=" + this.options.clientId, this.options.limit != null && (g += "&count=" + this.options.limit), g += "&callback=instafeedCache" + this.unique + ".parse", g
        }, c.prototype._genKey = function () {
            var d;
            return d = function () {
                return ((1 + Math.random()) * 65536 | 0).toString(16).substring(1)
            }, "" + d() + d() + d() + d()
        }, c.prototype._makeTemplate = function (j, f) {
            var l, h, d, g, k;
            h = /(?:\{{2})([\w\[\]\.]+)(?:\}{2})/, l = j;
            while (h.test(l)) {
                d = l.match(h)[1], g = (k = this._getObjectProperty(f, d)) != null ? k : "", l = l.replace(h, "" + g)
            }
            return l
        }, c.prototype._getObjectProperty = function (g, d) {
            var h, f;
            d = d.replace(/\[(\w+)\]/g, ".$1"), f = d.split(".");
            while (f.length) {
                h = f.shift();
                if (!(g != null && h in g)) {
                    return null
                }
                g = g[h]
            }
            return g
        }, c.prototype._sortBy = function (g, d, h) {
            var f;
            return f = function (m, l) {
                var j, k;
                return j = this._getObjectProperty(m, d), k = this._getObjectProperty(l, d), h ? j > k ? 1 : -1 : j < k ? 1 : -1
            }, g.sort(f.bind(this)), g
        }, c.prototype._filter = function (j, f) {
            var l, h, d, g, k;
            l = [], d = function (i) {
                if (f(i)) {
                    return l.push(i)
                }
            };
            for (g = 0, k = j.length; g < k; g++) {
                h = j[g], d(h)
            }
            return l
        }, c
    }(), a = typeof exports != "undefined" && exports !== null ? exports : window, a.Instafeed = b
}).call(this);
/*!
* FitVids 1.1
*
* Copyright 2013, Chris Coyier - http://css-tricks.com + Dave Rupert - http://daverupert.com
* Credit to Thierry Koblentz - http://www.alistapart.com/articles/creating-intrinsic-ratios-for-video/
* Released under the WTFPL license - http://sam.zoy.org/wtfpl/
*
*/
(function (a) {
    a.fn.fitVids = function (b) {
        var e = {customSelector: null};
        if (!document.getElementById("fit-vids-style")) {
            var d = document.head || document.getElementsByTagName("head")[0];
            var c = ".fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}";
            var f = document.createElement("div");
            f.innerHTML = '<p>x</p><style id="fit-vids-style">' + c + "</style>";
            d.appendChild(f.childNodes[1])
        }
        if (b) {
            a.extend(e, b)
        }
        return this.each(function () {
            var g = ["iframe[src*='player.vimeo.com']", "iframe[src*='youtube.com']", "iframe[src*='youtube-nocookie.com']", "iframe[src*='kickstarter.com'][src*='video.html']", "object", "embed"];
            if (e.customSelector) {
                g.push(e.customSelector)
            }
            var h = a(this).find(g.join(","));
            h = h.not("object object");
            h.each(function () {
                var m = a(this);
                if (this.tagName.toLowerCase() === "embed" && m.parent("object").length || m.parent(".fluid-width-video-wrapper").length) {
                    return
                }
                var i = (this.tagName.toLowerCase() === "object" || (m.attr("height") && !isNaN(parseInt(m.attr("height"), 10)))) ? parseInt(m.attr("height"), 10) : m.height(),
                    j = !isNaN(parseInt(m.attr("width"), 10)) ? parseInt(m.attr("width"), 10) : m.width(), k = i / j;
                if (!m.attr("id")) {
                    var l = "fitvid" + Math.floor(Math.random() * 999999);
                    m.attr("id", l)
                }
                m.wrap('<div class="fluid-width-video-wrapper"></div>').parent(".fluid-width-video-wrapper").css("padding-top", (k * 100) + "%");
                m.removeAttr("height").removeAttr("width")
            })
        })
    }
})(window.jQuery || window.Zepto);
(function (b) {
    b.easytabs = function (J, O) {
        var N = this, C = b(J), K = {
            animate: true,
            panelActiveClass: "active",
            tabActiveClass: "active",
            defaultTab: "li:first-child",
            animationSpeed: "normal",
            tabs: "> ul > li",
            updateHash: true,
            cycle: false,
            collapsible: false,
            collapsedClass: "collapsed",
            collapsedByDefault: true,
            uiTabs: false,
            transitionIn: "fadeIn",
            transitionOut: "fadeOut",
            transitionInEasing: "swing",
            transitionOutEasing: "swing",
            transitionCollapse: "slideUp",
            transitionUncollapse: "slideDown",
            transitionCollapseEasing: "swing",
            transitionUncollapseEasing: "swing",
            containerClass: "",
            tabsClass: "",
            tabClass: "",
            panelClass: "",
            cache: true,
            event: "click",
            panelContext: C
        }, L, H, x, G, P, z = {fast: 200, normal: 400, slow: 600}, B;
        N.init = function () {
            N.settings = B = b.extend({}, K, O);
            B.bind_str = B.event + ".easytabs";
            if (B.uiTabs) {
                B.tabActiveClass = "ui-tabs-selected";
                B.containerClass = "ui-tabs ui-widget ui-widget-content ui-corner-all";
                B.tabsClass = "ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all";
                B.tabClass = "ui-state-default ui-corner-top";
                B.panelClass = "ui-tabs-panel ui-widget-content ui-corner-bottom"
            }
            if (B.collapsible && O.defaultTab !== undefined && O.collpasedByDefault === undefined) {
                B.collapsedByDefault = false
            }
            if (typeof(B.animationSpeed) === "string") {
                B.animationSpeed = z[B.animationSpeed]
            }
            b("a.anchor").remove().prependTo("body");
            C.data("easytabs", {});
            N.setTransitions();
            N.getTabs();
            R();
            M();
            a();
            F();
            Q();
            C.attr("data-easytabs", true)
        };
        N.setTransitions = function () {
            x = (B.animate) ? {
                show: B.transitionIn,
                hide: B.transitionOut,
                speed: B.animationSpeed,
                collapse: B.transitionCollapse,
                uncollapse: B.transitionUncollapse,
                halfSpeed: B.animationSpeed / 2
            } : {show: "show", hide: "hide", speed: 0, collapse: "hide", uncollapse: "show", halfSpeed: 0}
        };
        N.getTabs = function () {
            var c;
            N.tabs = C.find(B.tabs), N.panels = b(), N.tabs.each(function () {
                var d = b(this), e = d.children("a"), f = d.children("a").data("target");
                d.data("easytabs", {});
                if (f !== undefined && f !== null) {
                    d.data("easytabs").ajax = e.attr("href")
                } else {
                    f = e.attr("href")
                }
                f = f.match(/#([^\?]+)/)[1];
                c = B.panelContext.find("#" + f);
                if (c.length) {
                    c.data("easytabs", {position: c.css("position"), visibility: c.css("visibility")});
                    c.not(B.panelActiveClass).hide();
                    N.panels = N.panels.add(c);
                    d.data("easytabs").panel = c
                } else {
                    N.tabs = N.tabs.not(d);
                    if ("console" in window) {
                        console.warn("Warning: tab without matching panel for selector '#" + f + "' removed from set")
                    }
                }
            })
        };
        N.selectTab = function (d, f) {
            var h = window.location, g = h.hash.match(/^[^\?]*/)[0], e = d.parent().data("easytabs").panel,
                c = d.parent().data("easytabs").ajax;
            if (B.collapsible && !P && (d.hasClass(B.tabActiveClass) || d.hasClass(B.collapsedClass))) {
                N.toggleTabCollapse(d, e, c, f)
            } else {
                if (!d.hasClass(B.tabActiveClass) || !e.hasClass(B.panelActiveClass)) {
                    E(d, e, c, f)
                } else {
                    if (!B.cache) {
                        E(d, e, c, f)
                    }
                }
            }
        };
        N.toggleTabCollapse = function (d, f, e, c) {
            N.panels.stop(true, true);
            if (y(C, "easytabs:before", [d, f, B])) {
                N.tabs.filter("." + B.tabActiveClass).removeClass(B.tabActiveClass).children().removeClass(B.tabActiveClass);
                if (d.hasClass(B.collapsedClass)) {
                    if (e && (!B.cache || !d.parent().data("easytabs").cached)) {
                        C.trigger("easytabs:ajax:beforeSend", [d, f]);
                        f.load(e, function (h, i, g) {
                            d.parent().data("easytabs").cached = true;
                            C.trigger("easytabs:ajax:complete", [d, f, h, i, g])
                        })
                    }
                    d.parent().removeClass(B.collapsedClass).addClass(B.tabActiveClass).children().removeClass(B.collapsedClass).addClass(B.tabActiveClass);
                    f.addClass(B.panelActiveClass)[x.uncollapse](x.speed, B.transitionUncollapseEasing, function () {
                        C.trigger("easytabs:midTransition", [d, f, B]);
                        if (typeof c == "function") {
                            c()
                        }
                    })
                } else {
                    d.addClass(B.collapsedClass).parent().addClass(B.collapsedClass);
                    f.removeClass(B.panelActiveClass)[x.collapse](x.speed, B.transitionCollapseEasing, function () {
                        C.trigger("easytabs:midTransition", [d, f, B]);
                        if (typeof c == "function") {
                            c()
                        }
                    })
                }
            }
        };
        N.matchTab = function (c) {
            return N.tabs.find("[href='" + c + "'],[data-target='" + c + "']").first()
        };
        N.matchInPanel = function (c) {
            return (c && N.validId(c) ? N.panels.filter(":has(" + c + ")").first() : [])
        };
        N.validId = function (c) {
            return c.substr(1).match(/^[A-Za-z]+[A-Za-z0-9\-_:\.].$/)
        };
        N.selectTabFromHashChange = function () {
            var e = window.location.hash.match(/^[^\?]*/)[0], c = N.matchTab(e), d;
            if (B.updateHash) {
                if (c.length) {
                    P = true;
                    N.selectTab(c)
                } else {
                    d = N.matchInPanel(e);
                    if (d.length) {
                        e = "#" + d.attr("id");
                        c = N.matchTab(e);
                        P = true;
                        N.selectTab(c)
                    } else {
                        if (!L.hasClass(B.tabActiveClass) && !B.cycle) {
                            if (e === "" || N.matchTab(G).length || C.closest(e).length) {
                                P = true;
                                N.selectTab(H)
                            }
                        }
                    }
                }
            }
        };
        N.cycleTabs = function (c) {
            if (B.cycle) {
                c = c % N.tabs.length;
                $tab = b(N.tabs[c]).children("a").first();
                P = true;
                N.selectTab($tab, function () {
                    setTimeout(function () {
                        N.cycleTabs(c + 1)
                    }, B.cycle)
                })
            }
        };
        N.publicMethods = {
            select: function (c) {
                var d;
                if ((d = N.tabs.filter(c)).length === 0) {
                    if ((d = N.tabs.find("a[href='" + c + "']")).length === 0) {
                        if ((d = N.tabs.find("a" + c)).length === 0) {
                            if ((d = N.tabs.find("[data-target='" + c + "']")).length === 0) {
                                if ((d = N.tabs.find("a[href$='" + c + "']")).length === 0) {
                                    b.error("Tab '" + c + "' does not exist in tab set")
                                }
                            }
                        }
                    }
                } else {
                    d = d.children("a").first()
                }
                N.selectTab(d)
            }
        };
        var y = function (d, c, e) {
            var f = b.Event(c);
            d.trigger(f, e);
            return f.result !== false
        };
        var R = function () {
            C.addClass(B.containerClass);
            N.tabs.parent().addClass(B.tabsClass);
            N.tabs.addClass(B.tabClass);
            N.panels.addClass(B.panelClass)
        };
        var M = function () {
            var e = window.location.hash.match(/^[^\?]*/)[0], c = N.matchTab(e).parent(), d;
            if (c.length === 1) {
                L = c;
                B.cycle = false
            } else {
                d = N.matchInPanel(e);
                if (d.length) {
                    e = "#" + d.attr("id");
                    L = N.matchTab(e).parent()
                } else {
                    L = N.tabs.parent().find(B.defaultTab);
                    if (L.length === 0) {
                        b.error("The specified default tab ('" + B.defaultTab + "') could not be found in the tab set ('" + B.tabs + "') out of " + N.tabs.length + " tabs.")
                    }
                }
            }
            H = L.children("a").first();
            D(c)
        };
        var D = function (d) {
            var e, c;
            if (B.collapsible && d.length === 0 && B.collapsedByDefault) {
                L.addClass(B.collapsedClass).children().addClass(B.collapsedClass)
            } else {
                e = b(L.data("easytabs").panel);
                c = L.data("easytabs").ajax;
                if (c && (!B.cache || !L.data("easytabs").cached)) {
                    C.trigger("easytabs:ajax:beforeSend", [H, e]);
                    e.load(c, function (h, f, g) {
                        L.data("easytabs").cached = true;
                        C.trigger("easytabs:ajax:complete", [H, e, h, f, g])
                    })
                }
                L.data("easytabs").panel.show().addClass(B.panelActiveClass);
                L.addClass(B.tabActiveClass).children().addClass(B.tabActiveClass)
            }
            C.trigger("easytabs:initialised", [H, e])
        };
        var a = function () {
            N.tabs.children("a").bind(B.bind_str, function (c) {
                B.cycle = false;
                P = false;
                N.selectTab(b(this));
                c.preventDefault ? c.preventDefault() : c.returnValue = false
            })
        };
        var E = function (g, c, m, j) {
            N.panels.stop(true, true);
            if (y(C, "easytabs:before", [g, c, B])) {
                var f = N.panels.filter(":visible"), h = c.parent(), l, i, d, k,
                    e = window.location.hash.match(/^[^\?]*/)[0];
                if (B.animate) {
                    l = A(c);
                    i = f.length ? I(f) : 0;
                    d = l - i
                }
                G = e;
                k = function () {
                    C.trigger("easytabs:midTransition", [g, c, B]);
                    if (B.animate && B.transitionIn == "fadeIn") {
                        if (d < 0) {
                            h.animate({height: h.height() + d}, x.halfSpeed).css({"min-height": ""})
                        }
                    }
                    if (B.updateHash && !P) {
                        window.location.hash = "#" + c.attr("id")
                    } else {
                        P = false
                    }
                    c[x.show](x.speed, B.transitionInEasing, function () {
                        h.css({height: "", "min-height": ""});
                        C.trigger("easytabs:after", [g, c, B]);
                        if (typeof j == "function") {
                            j()
                        }
                    })
                };
                if (m && (!B.cache || !g.parent().data("easytabs").cached)) {
                    C.trigger("easytabs:ajax:beforeSend", [g, c]);
                    c.load(m, function (o, p, n) {
                        g.parent().data("easytabs").cached = true;
                        C.trigger("easytabs:ajax:complete", [g, c, o, p, n])
                    })
                }
                if (B.animate && B.transitionOut == "fadeOut") {
                    if (d > 0) {
                        h.animate({height: (h.height() + d)}, x.halfSpeed)
                    } else {
                        h.css({"min-height": h.height()})
                    }
                }
                N.tabs.filter("." + B.tabActiveClass).removeClass(B.tabActiveClass).children().removeClass(B.tabActiveClass);
                N.tabs.filter("." + B.collapsedClass).removeClass(B.collapsedClass).children().removeClass(B.collapsedClass);
                g.parent().addClass(B.tabActiveClass).children().addClass(B.tabActiveClass);
                N.panels.filter("." + B.panelActiveClass).removeClass(B.panelActiveClass);
                c.addClass(B.panelActiveClass);
                if (f.length) {
                    f[x.hide](x.speed, B.transitionOutEasing, k)
                } else {
                    c[x.uncollapse](x.speed, B.transitionUncollapseEasing, k)
                }
            }
        };
        var A = function (e) {
            if (e.data("easytabs") && e.data("easytabs").lastHeight) {
                return e.data("easytabs").lastHeight
            }
            var g = e.css("display"), f, d;
            try {
                f = b("<div></div>", {position: "absolute", visibility: "hidden", overflow: "hidden"})
            } catch (c) {
                f = b("<div></div>", {visibility: "hidden", overflow: "hidden"})
            }
            d = e.wrap(f).css({position: "relative", visibility: "hidden", display: "block"}).outerHeight();
            e.unwrap();
            e.css({position: e.data("easytabs").position, visibility: e.data("easytabs").visibility, display: g});
            e.data("easytabs").lastHeight = d;
            return d
        };
        var I = function (d) {
            var c = d.outerHeight();
            if (d.data("easytabs")) {
                d.data("easytabs").lastHeight = c
            } else {
                d.data("easytabs", {lastHeight: c})
            }
            return c
        };
        var F = function () {
            if (typeof b(window).hashchange === "function") {
                b(window).hashchange(function () {
                    N.selectTabFromHashChange()
                })
            } else {
                if (b.address && typeof b.address.change === "function") {
                    b.address.change(function () {
                        N.selectTabFromHashChange()
                    })
                }
            }
        };
        var Q = function () {
            var c;
            if (B.cycle) {
                c = N.tabs.index(L);
                setTimeout(function () {
                    N.cycleTabs(c + 1)
                }, B.cycle)
            }
        };
        N.init()
    };
    b.fn.easytabs = function (d) {
        var a = arguments;
        return this.each(function () {
            var c = b(this), f = c.data("easytabs");
            if (undefined === f) {
                f = new b.easytabs(this, d);
                c.data("easytabs", f)
            }
            if (f.publicMethods[d]) {
                return f.publicMethods[d](Array.prototype.slice.call(a, 1))
            }
        })
    }
})(jQuery);
/*! WOW - v1.0.3 - 2015-01-14
* Copyright (c) 2015 Matthieu Aussaguel; Licensed MIT */
(function () {
    var i, h, n, m, l, k = function (d, c) {
        return function () {
            return d.apply(c, arguments)
        }
    }, j = [].indexOf || function (e) {
        for (var d = 0, f = this.length; f > d; d++) {
            if (d in this && this[d] === e) {
                return d
            }
        }
        return -1
    };
    h = function () {
        function b() {
        }

        return b.prototype.extend = function (f, e) {
            var o, g;
            for (o in e) {
                g = e[o], null == f[o] && (f[o] = g)
            }
            return f
        }, b.prototype.isMobile = function (c) {
            return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(c)
        }, b.prototype.addEvent = function (e, d, f) {
            return null != e.addEventListener ? e.addEventListener(d, f, !1) : null != e.attachEvent ? e.attachEvent("on" + d, f) : e[d] = f
        }, b.prototype.removeEvent = function (e, d, f) {
            return null != e.removeEventListener ? e.removeEventListener(d, f, !1) : null != e.detachEvent ? e.detachEvent("on" + d, f) : delete e[d]
        }, b.prototype.innerHeight = function () {
            return "innerHeight" in window ? window.innerHeight : document.documentElement.clientHeight
        }, b
    }(), n = this.WeakMap || this.MozWeakMap || (n = function () {
        function b() {
            this.keys = [], this.values = []
        }

        return b.prototype.get = function (o) {
            var g, t, s, r, p;
            for (p = this.keys, g = s = 0, r = p.length; r > s; g = ++s) {
                if (t = p[g], t === o) {
                    return this.values[g]
                }
            }
        }, b.prototype.set = function (p, o) {
            var v, u, t, s, r;
            for (r = this.keys, v = t = 0, s = r.length; s > t; v = ++t) {
                if (u = r[v], u === p) {
                    return void (this.values[v] = o)
                }
            }
            return this.keys.push(p), this.values.push(o)
        }, b
    }()), i = this.MutationObserver || this.WebkitMutationObserver || this.MozMutationObserver || (i = function () {
        function b() {
            "undefined" != typeof console && null !== console && console.warn("MutationObserver is not supported by your browser."), "undefined" != typeof console && null !== console && console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content.")
        }

        return b.notSupported = !0, b.prototype.observe = function () {
        }, b
    }()), m = this.getComputedStyle || function (b) {
        return this.getPropertyValue = function (a) {
            var d;
            return "float" === a && (a = "styleFloat"), l.test(a) && a.replace(l, function (e, c) {
                return c.toUpperCase()
            }), (null != (d = b.currentStyle) ? d[a] : void 0) || null
        }, this
    }, l = /(\-([a-z]){1})/g, this.WOW = function () {
        function a(b) {
            null == b && (b = {}), this.scrollCallback = k(this.scrollCallback, this), this.scrollHandler = k(this.scrollHandler, this), this.start = k(this.start, this), this.scrolled = !0, this.config = this.util().extend(b, this.defaults), this.animationNameCache = new n
        }

        return a.prototype.defaults = {
            boxClass: "wow",
            animateClass: "animated",
            offset: 0,
            mobile: !0,
            live: !0,
            callback: null
        }, a.prototype.init = function () {
            var b;
            return this.element = window.document.documentElement, "interactive" === (b = document.readyState) || "complete" === b ? this.start() : this.util().addEvent(document, "DOMContentLoaded", this.start), this.finished = []
        }, a.prototype.start = function () {
            var f, p, o, g;
            if (this.stopped = !1, this.boxes = function () {
                    var b, t, s, r;
                    for (s = this.element.querySelectorAll("." + this.config.boxClass), r = [], b = 0, t = s.length; t > b; b++) {
                        f = s[b], r.push(f)
                    }
                    return r
                }.call(this), this.all = function () {
                    var b, t, s, r;
                    for (s = this.boxes, r = [], b = 0, t = s.length; t > b; b++) {
                        f = s[b], r.push(f)
                    }
                    return r
                }.call(this), this.boxes.length) {
                if (this.disabled()) {
                    this.resetStyle()
                } else {
                    for (g = this.boxes, p = 0, o = g.length; o > p; p++) {
                        f = g[p], this.applyStyle(f, !0)
                    }
                }
            }
            return this.disabled() || (this.util().addEvent(window, "scroll", this.scrollHandler), this.util().addEvent(window, "resize", this.scrollHandler), this.interval = setInterval(this.scrollCallback, 50)), this.config.live ? new i(function (b) {
                return function (r) {
                    var w, v, u, t, s;
                    for (s = [], u = 0, t = r.length; t > u; u++) {
                        v = r[u], s.push(function () {
                            var d, c, y, x;
                            for (y = v.addedNodes || [], x = [], d = 0, c = y.length; c > d; d++) {
                                w = y[d], x.push(this.doSync(w))
                            }
                            return x
                        }.call(b))
                    }
                    return s
                }
            }(this)).observe(document.body, {childList: !0, subtree: !0}) : void 0
        }, a.prototype.stop = function () {
            return this.stopped = !0, this.util().removeEvent(window, "scroll", this.scrollHandler), this.util().removeEvent(window, "resize", this.scrollHandler), null != this.interval ? clearInterval(this.interval) : void 0
        }, a.prototype.sync = function () {
            return i.notSupported ? this.doSync(this.element) : void 0
        }, a.prototype.doSync = function (o) {
            var g, t, s, r, p;
            if (null == o && (o = this.element), 1 === o.nodeType) {
                for (o = o.parentNode || o, r = o.querySelectorAll("." + this.config.boxClass), p = [], t = 0, s = r.length; s > t; t++) {
                    g = r[t], j.call(this.all, g) < 0 ? (this.boxes.push(g), this.all.push(g), this.stopped || this.disabled() ? this.resetStyle() : this.applyStyle(g, !0), p.push(this.scrolled = !0)) : p.push(void 0)
                }
                return p
            }
        }, a.prototype.show = function (b) {
            return this.applyStyle(b), b.className = "" + b.className + " " + this.config.animateClass, null != this.config.callback ? this.config.callback(b) : void 0
        }, a.prototype.applyStyle = function (g, f) {
            var r, p, o;
            return p = g.getAttribute("data-wow-duration"), r = g.getAttribute("data-wow-delay"), o = g.getAttribute("data-wow-iteration"), this.animate(function (b) {
                return function () {
                    return b.customStyle(g, f, p, r, o)
                }
            }(this))
        }, a.prototype.animate = function () {
            return "requestAnimationFrame" in window ? function (b) {
                return window.requestAnimationFrame(b)
            } : function (b) {
                return b()
            }
        }(), a.prototype.resetStyle = function () {
            var g, f, r, p, o;
            for (p = this.boxes, o = [], f = 0, r = p.length; r > f; f++) {
                g = p[f], o.push(g.style.visibility = "visible")
            }
            return o
        }, a.prototype.customStyle = function (g, f, r, p, o) {
            return f && this.cacheAnimationName(g), g.style.visibility = f ? "hidden" : "visible", r && this.vendorSet(g.style, {animationDuration: r}), p && this.vendorSet(g.style, {animationDelay: p}), o && this.vendorSet(g.style, {animationIterationCount: o}), this.vendorSet(g.style, {animationName: f ? "none" : this.cachedAnimationName(g)}), g
        }, a.prototype.vendors = ["moz", "webkit"], a.prototype.vendorSet = function (o, g) {
            var t, s, r, p;
            p = [];
            for (t in g) {
                s = g[t], o["" + t] = s, p.push(function () {
                    var c, u, e, d;
                    for (e = this.vendors, d = [], c = 0, u = e.length; u > c; c++) {
                        r = e[c], d.push(o["" + r + t.charAt(0).toUpperCase() + t.substr(1)] = s)
                    }
                    return d
                }.call(this))
            }
            return p
        }, a.prototype.vendorCSS = function (o, d) {
            var v, u, t, s, r, p;
            for (u = m(o), v = u.getPropertyCSSValue(d), p = this.vendors, s = 0, r = p.length; r > s; s++) {
                t = p[s], v = v || u.getPropertyCSSValue("-" + t + "-" + d)
            }
            return v
        }, a.prototype.animationName = function (e) {
            var d;
            try {
                d = this.vendorCSS(e, "animation-name").cssText
            } catch (f) {
                d = m(e).getPropertyValue("animation-name")
            }
            return "none" === d ? "" : d
        }, a.prototype.cacheAnimationName = function (b) {
            return this.animationNameCache.set(b, this.animationName(b))
        }, a.prototype.cachedAnimationName = function (b) {
            return this.animationNameCache.get(b)
        }, a.prototype.scrollHandler = function () {
            return this.scrolled = !0
        }, a.prototype.scrollCallback = function () {
            var b;
            return !this.scrolled || (this.scrolled = !1, this.boxes = function () {
                var f, p, o, g;
                for (o = this.boxes, g = [], f = 0, p = o.length; p > f; f++) {
                    b = o[f], b && (this.isVisible(b) ? this.show(b) : g.push(b))
                }
                return g
            }.call(this), this.boxes.length || this.config.live) ? void 0 : this.stop()
        }, a.prototype.offsetTop = function (d) {
            for (var c; void 0 === d.offsetTop;) {
                d = d.parentNode
            }
            for (c = d.offsetTop; d = d.offsetParent;) {
                c += d.offsetTop
            }
            return c
        }, a.prototype.isVisible = function (o) {
            var g, t, s, r, p;
            return t = o.getAttribute("data-wow-offset") || this.config.offset, p = window.pageYOffset, r = p + Math.min(this.element.clientHeight, this.util().innerHeight()) - t, s = this.offsetTop(o), g = s + o.clientHeight, r >= s && g >= p
        }, a.prototype.util = function () {
            return null != this._util ? this._util : this._util = new h
        }, a.prototype.disabled = function () {
            return !this.config.mobile && this.util().isMobile(navigator.userAgent)
        }, a
    }()
}).call(this);
/*! fancyBox v2.1.5 fancyapps.com | fancyapps.com/fancybox/#license */
(function (a, x, i, u) {
    var k = i("html"), g = i(a), e = i(x), j = i.fancybox = function () {
        j.open.apply(this, arguments)
    }, o = navigator.userAgent.match(/msie/i), d = null, A = x.createTouch !== u, y = function (b) {
        return b && b.hasOwnProperty && b instanceof i
    }, c = function (b) {
        return b && "string" === i.type(b)
    }, z = function (b) {
        return c(b) && 0 < b.indexOf("%")
    }, h = function (b, l) {
        var f = parseInt(b, 10) || 0;
        l && z(b) && (f *= j.getViewport()[l] / 100);
        return Math.ceil(f)
    }, m = function (l, f) {
        return h(l, f) + "px"
    };
    i.extend(j, {
        version: "2.1.5",
        defaults: {
            padding: 15,
            margin: 20,
            width: 800,
            height: 600,
            minWidth: 100,
            minHeight: 100,
            maxWidth: 9999,
            maxHeight: 9999,
            pixelRatio: 1,
            autoSize: !0,
            autoHeight: !1,
            autoWidth: !1,
            autoResize: !0,
            autoCenter: !A,
            fitToView: !0,
            aspectRatio: !1,
            topRatio: 0.5,
            leftRatio: 0.5,
            scrolling: "auto",
            wrapCSS: "",
            arrows: !0,
            closeBtn: !0,
            closeClick: !1,
            nextClick: !1,
            mouseWheel: !0,
            autoPlay: !1,
            playSpeed: 3000,
            preload: 3,
            modal: !1,
            loop: !0,
            ajax: {dataType: "html", headers: {"X-fancyBox": !0}},
            iframe: {scrolling: "auto", preload: !0},
            swf: {wmode: "transparent", allowfullscreen: "true", allowscriptaccess: "always"},
            keys: {
                next: {13: "left", 34: "up", 39: "left", 40: "up"},
                prev: {8: "right", 33: "down", 37: "right", 38: "down"},
                close: [27],
                play: [32],
                toggle: [70]
            },
            direction: {next: "left", prev: "right"},
            scrollOutside: !0,
            index: 0,
            type: null,
            href: null,
            content: null,
            title: null,
            tpl: {
                wrap: '<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>',
                image: '<img class="fancybox-image" src="{href}" alt="" />',
                iframe: '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen' + (o ? ' allowtransparency="true"' : "") + "></iframe>",
                error: '<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>',
                closeBtn: '<a title="Close" class="fancybox-item fancybox-close" href="javascript:;"></a>',
                next: '<a title="Next" class="fancybox-nav fancybox-next" href="javascript:;"><span></span></a>',
                prev: '<a title="Previous" class="fancybox-nav fancybox-prev" href="javascript:;"><span></span></a>'
            },
            openEffect: "fade",
            openSpeed: 250,
            openEasing: "swing",
            openOpacity: !0,
            openMethod: "zoomIn",
            closeEffect: "fade",
            closeSpeed: 250,
            closeEasing: "swing",
            closeOpacity: !0,
            closeMethod: "zoomOut",
            nextEffect: "elastic",
            nextSpeed: 250,
            nextEasing: "swing",
            nextMethod: "changeIn",
            prevEffect: "elastic",
            prevSpeed: 250,
            prevEasing: "swing",
            prevMethod: "changeOut",
            helpers: {overlay: !0, title: !0},
            onCancel: i.noop,
            beforeLoad: i.noop,
            afterLoad: i.noop,
            beforeShow: i.noop,
            afterShow: i.noop,
            beforeChange: i.noop,
            beforeClose: i.noop,
            afterClose: i.noop
        },
        group: {},
        opts: {},
        previous: null,
        coming: null,
        current: null,
        isActive: !1,
        isOpen: !1,
        isOpened: !1,
        wrap: null,
        skin: null,
        outer: null,
        inner: null,
        player: {timer: null, isActive: !1},
        ajaxLoad: null,
        imgPreload: null,
        transitions: {},
        helpers: {},
        open: function (b, f) {
            if (b && (i.isPlainObject(f) || (f = {}), !1 !== j.close(!0))) {
                return i.isArray(b) || (b = y(b) ? i(b).get() : [b]), i.each(b, function (w, B) {
                    var r = {}, v, t, s, n, p;
                    "object" === i.type(B) && (B.nodeType && (B = i(B)), y(B) ? (r = {
                        href: B.data("fancybox-href") || B.attr("href"),
                        title: B.data("fancybox-title") || B.attr("title"),
                        isDom: !0,
                        element: B
                    }, i.metadata && i.extend(!0, r, B.metadata())) : r = B);
                    v = f.href || r.href || (c(B) ? B : null);
                    t = f.title !== u ? f.title : r.title || "";
                    n = (s = f.content || r.content) ? "html" : f.type || r.type;
                    !n && r.isDom && (n = B.data("fancybox-type"), n || (n = (n = B.prop("class").match(/fancybox\.(\w+)/)) ? n[1] : null));
                    c(v) && (n || (j.isImage(v) ? n = "image" : j.isSWF(v) ? n = "swf" : "#" === v.charAt(0) ? n = "inline" : c(B) && (n = "html", s = B)), "ajax" === n && (p = v.split(/\s+/, 2), v = p.shift(), p = p.shift()));
                    s || ("inline" === n ? v ? s = i(c(v) ? v.replace(/.*(?=#[^\s]+$)/, "") : v) : r.isDom && (s = B) : "html" === n ? s = v : !n && (!v && r.isDom) && (n = "inline", s = B));
                    i.extend(r, {href: v, type: n, content: s, title: t, selector: p});
                    b[w] = r
                }), j.opts = i.extend(!0, {}, j.defaults, f), f.keys !== u && (j.opts.keys = f.keys ? i.extend({}, j.defaults.keys, f.keys) : !1), j.group = b, j._start(j.opts.index)
            }
        },
        cancel: function () {
            var b = j.coming;
            b && !1 !== j.trigger("onCancel") && (j.hideLoading(), j.ajaxLoad && j.ajaxLoad.abort(), j.ajaxLoad = null, j.imgPreload && (j.imgPreload.onload = j.imgPreload.onerror = null), b.wrap && b.wrap.stop(!0, !0).trigger("onReset").remove(), j.coming = null, j.current || j._afterZoomOut(b))
        },
        close: function (b) {
            j.cancel();
            !1 !== j.trigger("beforeClose") && (j.unbindEvents(), j.isActive && (!j.isOpen || !0 === b ? (i(".fancybox-wrap").stop(!0).trigger("onReset").remove(), j._afterZoomOut()) : (j.isOpen = j.isOpened = !1, j.isClosing = !0, i(".fancybox-item, .fancybox-nav").remove(), j.wrap.stop(!0, !0).removeClass("fancybox-opened"), j.transitions[j.current.closeMethod]())))
        },
        play: function (b) {
            var l = function () {
                clearTimeout(j.player.timer)
            }, f = function () {
                l();
                j.current && j.player.isActive && (j.player.timer = setTimeout(j.next, j.current.playSpeed))
            }, n = function () {
                l();
                e.unbind(".player");
                j.player.isActive = !1;
                j.trigger("onPlayEnd")
            };
            if (!0 === b || !j.player.isActive && !1 !== b) {
                if (j.current && (j.current.loop || j.current.index < j.group.length - 1)) {
                    j.player.isActive = !0, e.bind({
                        "onCancel.player beforeClose.player": n,
                        "onUpdate.player": f,
                        "beforeLoad.player": l
                    }), f(), j.trigger("onPlayStart")
                }
            } else {
                n()
            }
        },
        next: function (b) {
            var f = j.current;
            f && (c(b) || (b = f.direction.next), j.jumpto(f.index + 1, b, "next"))
        },
        prev: function (b) {
            var f = j.current;
            f && (c(b) || (b = f.direction.prev), j.jumpto(f.index - 1, b, "prev"))
        },
        jumpto: function (b, l, f) {
            var n = j.current;
            n && (b = h(b), j.direction = l || n.direction[b >= n.index ? "next" : "prev"], j.router = f || "jumpto", n.loop && (0 > b && (b = n.group.length + b % n.group.length), b %= n.group.length), n.group[b] !== u && (j.cancel(), j._start(b)))
        },
        reposition: function (b, n) {
            var l = j.current, p = l ? l.wrap : null, f;
            p && (f = j._getPosition(n), b && "scroll" === b.type ? (delete f.position, p.stop(!0, !0).animate(f, 200)) : (p.css(f), l.pos = i.extend({}, l.dim, f)))
        },
        update: function (b) {
            var l = b && b.type, f = !l || "orientationchange" === l;
            f && (clearTimeout(d), d = null);
            j.isOpen && !d && (d = setTimeout(function () {
                var n = j.current;
                n && !j.isClosing && (j.wrap.removeClass("fancybox-tmp"), (f || "load" === l || "resize" === l && n.autoResize) && j._setDimension(), "scroll" === l && n.canShrink || j.reposition(b), j.trigger("onUpdate"), d = null)
            }, f && !A ? 0 : 300))
        },
        toggle: function (b) {
            j.isOpen && (j.current.fitToView = "boolean" === i.type(b) ? b : !j.current.fitToView, A && (j.wrap.removeAttr("style").addClass("fancybox-tmp"), j.trigger("onUpdate")), j.update())
        },
        hideLoading: function () {
            e.unbind(".loading");
            i("#fancybox-loading").remove()
        },
        showLoading: function () {
            var b, f;
            j.hideLoading();
            b = i('<div id="fancybox-loading"><div></div></div>').click(j.cancel).appendTo("body");
            e.bind("keydown.loading", function (l) {
                if (27 === (l.which || l.keyCode)) {
                    l.preventDefault(), j.cancel()
                }
            });
            j.defaults.fixed || (f = j.getViewport(), b.css({
                position: "absolute",
                top: 0.5 * f.h + f.y,
                left: 0.5 * f.w + f.x
            }))
        },
        getViewport: function () {
            var b = j.current && j.current.locked || !1, f = {x: g.scrollLeft(), y: g.scrollTop()};
            b ? (f.w = b[0].clientWidth, f.h = b[0].clientHeight) : (f.w = A && a.innerWidth ? a.innerWidth : g.width(), f.h = A && a.innerHeight ? a.innerHeight : g.height());
            return f
        },
        unbindEvents: function () {
            j.wrap && y(j.wrap) && j.wrap.unbind(".fb");
            e.unbind(".fb");
            g.unbind(".fb")
        },
        bindEvents: function () {
            var b = j.current, f;
            b && (g.bind("orientationchange.fb" + (A ? "" : " resize.fb") + (b.autoCenter && !b.locked ? " scroll.fb" : ""), j.update), (f = b.keys) && e.bind("keydown.fb", function (n) {
                var p = n.which || n.keyCode, l = n.target || n.srcElement;
                if (27 === p && j.coming) {
                    return !1
                }
                !n.ctrlKey && (!n.altKey && !n.shiftKey && !n.metaKey && (!l || !l.type && !i(l).is("[contenteditable]"))) && i.each(f, function (s, r) {
                    if (1 < b.group.length && r[p] !== u) {
                        return j[s](r[p]), n.preventDefault(), !1
                    }
                    if (-1 < i.inArray(p, r)) {
                        return j[s](), n.preventDefault(), !1
                    }
                })
            }), i.fn.mousewheel && b.mouseWheel && j.wrap.bind("mousewheel.fb", function (s, t, l, r) {
                for (var p = i(s.target || null), n = !1; p.length && !n && !p.is(".fancybox-skin") && !p.is(".fancybox-wrap");) {
                    n = p[0] && !(p[0].style.overflow && "hidden" === p[0].style.overflow) && (p[0].clientWidth && p[0].scrollWidth > p[0].clientWidth || p[0].clientHeight && p[0].scrollHeight > p[0].clientHeight), p = i(p).parent()
                }
                if (0 !== t && !n && 1 < j.group.length && !b.canShrink) {
                    if (0 < r || 0 < l) {
                        j.prev(0 < r ? "down" : "left")
                    } else {
                        if (0 > r || 0 > l) {
                            j.next(0 > r ? "up" : "right")
                        }
                    }
                    s.preventDefault()
                }
            }))
        },
        trigger: function (b, l) {
            var f, n = l || j.coming || j.current;
            if (n) {
                i.isFunction(n[b]) && (f = n[b].apply(n, Array.prototype.slice.call(arguments, 1)));
                if (!1 === f) {
                    return !1
                }
                n.helpers && i.each(n.helpers, function (r, p) {
                    if (p && j.helpers[r] && i.isFunction(j.helpers[r][b])) {
                        j.helpers[r][b](i.extend(!0, {}, j.helpers[r].defaults, p), n)
                    }
                });
                e.trigger(b)
            }
        },
        isImage: function (b) {
            return c(b) && b.match(/(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg)((\?|#).*)?$)/i)
        },
        isSWF: function (b) {
            return c(b) && b.match(/\.(swf)((\?|#).*)?$/i)
        },
        _start: function (b) {
            var l = {}, f, n;
            b = h(b);
            f = j.group[b] || null;
            if (!f) {
                return !1
            }
            l = i.extend(!0, {}, j.opts, f);
            f = l.margin;
            n = l.padding;
            "number" === i.type(f) && (l.margin = [f, f, f, f]);
            "number" === i.type(n) && (l.padding = [n, n, n, n]);
            l.modal && i.extend(!0, l, {
                closeBtn: !1,
                closeClick: !1,
                nextClick: !1,
                arrows: !1,
                mouseWheel: !1,
                keys: null,
                helpers: {overlay: {closeClick: !1}}
            });
            l.autoSize && (l.autoWidth = l.autoHeight = !0);
            "auto" === l.width && (l.autoWidth = !0);
            "auto" === l.height && (l.autoHeight = !0);
            l.group = j.group;
            l.index = b;
            j.coming = l;
            if (!1 === j.trigger("beforeLoad")) {
                j.coming = null
            } else {
                n = l.type;
                f = l.href;
                if (!n) {
                    return j.coming = null, j.current && j.router && "jumpto" !== j.router ? (j.current.index = b, j[j.router](j.direction)) : !1
                }
                j.isActive = !0;
                if ("image" === n || "swf" === n) {
                    l.autoHeight = l.autoWidth = !1, l.scrolling = "visible"
                }
                "image" === n && (l.aspectRatio = !0);
                "iframe" === n && A && (l.scrolling = "scroll");
                l.wrap = i(l.tpl.wrap).addClass("fancybox-" + (A ? "mobile" : "desktop") + " fancybox-type-" + n + " fancybox-tmp " + l.wrapCSS).appendTo(l.parent || "body");
                i.extend(l, {
                    skin: i(".fancybox-skin", l.wrap),
                    outer: i(".fancybox-outer", l.wrap),
                    inner: i(".fancybox-inner", l.wrap)
                });
                i.each(["Top", "Right", "Bottom", "Left"], function (r, p) {
                    l.skin.css("padding" + p, m(l.padding[r]))
                });
                j.trigger("onReady");
                if ("inline" === n || "html" === n) {
                    if (!l.content || !l.content.length) {
                        return j._error("content")
                    }
                } else {
                    if (!f) {
                        return j._error("href")
                    }
                }
                "image" === n ? j._loadImage() : "ajax" === n ? j._loadAjax() : "iframe" === n ? j._loadIframe() : j._afterLoad()
            }
        },
        _error: function (b) {
            i.extend(j.coming, {
                type: "html",
                autoWidth: !0,
                autoHeight: !0,
                minWidth: 0,
                minHeight: 0,
                scrolling: "no",
                hasError: b,
                content: j.coming.tpl.error
            });
            j._afterLoad()
        },
        _loadImage: function () {
            var b = j.imgPreload = new Image;
            b.onload = function () {
                this.onload = this.onerror = null;
                j.coming.width = this.width / j.opts.pixelRatio;
                j.coming.height = this.height / j.opts.pixelRatio;
                j._afterLoad()
            };
            b.onerror = function () {
                this.onload = this.onerror = null;
                j._error("image")
            };
            b.src = j.coming.href;
            !0 !== b.complete && j.showLoading()
        },
        _loadAjax: function () {
            var b = j.coming;
            j.showLoading();
            j.ajaxLoad = i.ajax(i.extend({}, b.ajax, {
                url: b.href, error: function (f, l) {
                    j.coming && "abort" !== l ? j._error("ajax", f) : j.hideLoading()
                }, success: function (l, f) {
                    "success" === f && (b.content = l, j._afterLoad())
                }
            }))
        },
        _loadIframe: function () {
            var b = j.coming,
                f = i(b.tpl.iframe.replace(/\{rnd\}/g, (new Date).getTime())).attr("scrolling", A ? "auto" : b.iframe.scrolling).attr("src", b.href);
            i(b.wrap).bind("onReset", function () {
                try {
                    i(this).find("iframe").hide().attr("src", "//about:blank").end().empty()
                } catch (l) {
                }
            });
            b.iframe.preload && (j.showLoading(), f.one("load", function () {
                i(this).data("ready", 1);
                A || i(this).bind("load.fb", j.update);
                i(this).parents(".fancybox-wrap").width("100%").removeClass("fancybox-tmp").show();
                j._afterLoad()
            }));
            b.content = f.appendTo(b.inner);
            b.iframe.preload || j._afterLoad()
        },
        _preloadImages: function () {
            var b = j.group, r = j.current, p = b.length, s = r.preload ? Math.min(r.preload, p - 1) : 0, n, l;
            for (l = 1; l <= s; l += 1) {
                n = b[(r.index + l) % p], "image" === n.type && n.href && ((new Image).src = n.href)
            }
        },
        _afterLoad: function () {
            var b = j.coming, r = j.current, p, s, f, n, l;
            j.hideLoading();
            if (b && !1 !== j.isActive) {
                if (!1 === j.trigger("afterLoad", b, r)) {
                    b.wrap.stop(!0).trigger("onReset").remove(), j.coming = null
                } else {
                    r && (j.trigger("beforeChange", r), r.wrap.stop(!0).removeClass("fancybox-opened").find(".fancybox-item, .fancybox-nav").remove());
                    j.unbindEvents();
                    p = b.content;
                    s = b.type;
                    f = b.scrolling;
                    i.extend(j, {wrap: b.wrap, skin: b.skin, outer: b.outer, inner: b.inner, current: b, previous: r});
                    n = b.href;
                    switch (s) {
                        case"inline":
                        case"ajax":
                        case"html":
                            b.selector ? p = i("<div>").html(p).find(b.selector) : y(p) && (p.data("fancybox-placeholder") || p.data("fancybox-placeholder", i('<div class="fancybox-placeholder"></div>').insertAfter(p).hide()), p = p.show().detach(), b.wrap.bind("onReset", function () {
                                i(this).find(p).length && p.hide().replaceAll(p.data("fancybox-placeholder")).data("fancybox-placeholder", !1)
                            }));
                            break;
                        case"image":
                            p = b.tpl.image.replace("{href}", n);
                            break;
                        case"swf":
                            p = '<object id="fancybox-swf" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="movie" value="' + n + '"></param>', l = "", i.each(b.swf, function (v, t) {
                                p += '<param name="' + v + '" value="' + t + '"></param>';
                                l += " " + v + '="' + t + '"'
                            }), p += '<embed src="' + n + '" type="application/x-shockwave-flash" width="100%" height="100%"' + l + "></embed></object>"
                    }
                    (!y(p) || !p.parent().is(b.inner)) && b.inner.append(p);
                    j.trigger("beforeShow");
                    b.inner.css("overflow", "yes" === f ? "scroll" : "no" === f ? "hidden" : f);
                    j._setDimension();
                    j.reposition();
                    j.isOpen = !1;
                    j.coming = null;
                    j.bindEvents();
                    if (j.isOpened) {
                        if (r.prevMethod) {
                            j.transitions[r.prevMethod]()
                        }
                    } else {
                        i(".fancybox-wrap").not(b.wrap).stop(!0).trigger("onReset").remove()
                    }
                    j.transitions[j.isOpened ? b.nextMethod : b.openMethod]();
                    j._preloadImages()
                }
            }
        },
        _setDimension: function () {
            var ad = j.getViewport(), ab = 0, aa = !1, ac = !1, aa = j.wrap, W = j.skin, Z = j.inner, Y = j.current,
                ac = Y.width, X = Y.height, V = Y.minWidth, K = Y.minHeight, U = Y.maxWidth, T = Y.maxHeight,
                N = Y.scrolling, R = Y.scrollOutside ? Y.scrollbarWidth : 0, l = Y.margin, f = h(l[1] + l[3]),
                P = h(l[0] + l[2]), I, b, L, O, S, J, Q, M, w;
            aa.add(W).add(Z).width("auto").height("auto").removeClass("fancybox-tmp");
            l = h(W.outerWidth(!0) - W.width());
            I = h(W.outerHeight(!0) - W.height());
            b = f + l;
            L = P + I;
            O = z(ac) ? (ad.w - b) * h(ac) / 100 : ac;
            S = z(X) ? (ad.h - L) * h(X) / 100 : X;
            if ("iframe" === Y.type) {
                if (w = Y.content, Y.autoHeight && 1 === w.data("ready")) {
                    try {
                        w[0].contentWindow.document.location && (Z.width(O).height(9999), J = w.contents().find("body"), R && J.css("overflow-x", "hidden"), S = J.outerHeight(!0))
                    } catch (E) {
                    }
                }
            } else {
                if (Y.autoWidth || Y.autoHeight) {
                    Z.addClass("fancybox-tmp"), Y.autoWidth || Z.width(O), Y.autoHeight || Z.height(S), Y.autoWidth && (O = Z.width()), Y.autoHeight && (S = Z.height()), Z.removeClass("fancybox-tmp")
                }
            }
            ac = h(O);
            X = h(S);
            M = O / S;
            V = h(z(V) ? h(V, "w") - b : V);
            U = h(z(U) ? h(U, "w") - b : U);
            K = h(z(K) ? h(K, "h") - L : K);
            T = h(z(T) ? h(T, "h") - L : T);
            J = U;
            Q = T;
            Y.fitToView && (U = Math.min(ad.w - b, U), T = Math.min(ad.h - L, T));
            b = ad.w - f;
            P = ad.h - P;
            Y.aspectRatio ? (ac > U && (ac = U, X = h(ac / M)), X > T && (X = T, ac = h(X * M)), ac < V && (ac = V, X = h(ac / M)), X < K && (X = K, ac = h(X * M))) : (ac = Math.max(V, Math.min(ac, U)), Y.autoHeight && "iframe" !== Y.type && (Z.width(ac), X = Z.height()), X = Math.max(K, Math.min(X, T)));
            if (Y.fitToView) {
                if (Z.width(ac).height(X), aa.width(ac + l), ad = aa.width(), f = aa.height(), Y.aspectRatio) {
                    for (; (ad > b || f > P) && (ac > V && X > K) && !(19 < ab++);) {
                        X = Math.max(K, Math.min(T, X - 10)), ac = h(X * M), ac < V && (ac = V, X = h(ac / M)), ac > U && (ac = U, X = h(ac / M)), Z.width(ac).height(X), aa.width(ac + l), ad = aa.width(), f = aa.height()
                    }
                } else {
                    ac = Math.max(V, Math.min(ac, ac - (ad - b))), X = Math.max(K, Math.min(X, X - (f - P)))
                }
            }
            R && ("auto" === N && X < S && ac + l + R < b) && (ac += R);
            Z.width(ac).height(X);
            aa.width(ac + l);
            ad = aa.width();
            f = aa.height();
            aa = (ad > b || f > P) && ac > V && X > K;
            ac = Y.aspectRatio ? ac < J && X < Q && ac < O && X < S : (ac < J || X < Q) && (ac < O || X < S);
            i.extend(Y, {
                dim: {width: m(ad), height: m(f)},
                origWidth: O,
                origHeight: S,
                canShrink: aa,
                canExpand: ac,
                wPadding: l,
                hPadding: I,
                wrapSpace: f - W.outerHeight(!0),
                skinSpace: W.height() - X
            });
            !w && (Y.autoHeight && X > K && X < T && !ac) && Z.height("auto")
        },
        _getPosition: function (b) {
            var r = j.current, p = j.getViewport(), s = r.margin, n = j.wrap.width() + s[1] + s[3],
                l = j.wrap.height() + s[0] + s[2], s = {position: "absolute", top: s[0], left: s[3]};
            r.autoCenter && r.fixed && !b && l <= p.h && n <= p.w ? s.position = "fixed" : r.locked || (s.top += p.y, s.left += p.x);
            s.top = m(Math.max(s.top, s.top + (p.h - l) * r.topRatio));
            s.left = m(Math.max(s.left, s.left + (p.w - n) * r.leftRatio));
            return s
        },
        _afterZoomIn: function () {
            var b = j.current;
            b && (j.isOpen = j.isOpened = !0, j.wrap.css("overflow", "visible").addClass("fancybox-opened"), j.update(), (b.closeClick || b.nextClick && 1 < j.group.length) && j.inner.css("cursor", "pointer").bind("click.fb", function (f) {
                !i(f.target).is("a") && !i(f.target).parent().is("a") && (f.preventDefault(), j[b.closeClick ? "close" : "next"]())
            }), b.closeBtn && i(b.tpl.closeBtn).appendTo(j.skin).bind("click.fb", function (f) {
                f.preventDefault();
                j.close()
            }), b.arrows && 1 < j.group.length && ((b.loop || 0 < b.index) && i(b.tpl.prev).appendTo(j.outer).bind("click.fb", j.prev), (b.loop || b.index < j.group.length - 1) && i(b.tpl.next).appendTo(j.outer).bind("click.fb", j.next)), j.trigger("afterShow"), !b.loop && b.index === b.group.length - 1 ? j.play(!1) : j.opts.autoPlay && !j.player.isActive && (j.opts.autoPlay = !1, j.play()))
        },
        _afterZoomOut: function (b) {
            b = b || j.current;
            i(".fancybox-wrap").trigger("onReset").remove();
            i.extend(j, {
                group: {},
                opts: {},
                router: !1,
                current: null,
                isActive: !1,
                isOpened: !1,
                isOpen: !1,
                isClosing: !1,
                wrap: null,
                skin: null,
                outer: null,
                inner: null
            });
            j.trigger("afterClose", b)
        }
    });
    j.transitions = {
        getOrigPosition: function () {
            var w = j.current, t = w.element, s = w.orig, v = {}, r = 50, p = 50, n = w.hPadding, l = w.wPadding,
                b = j.getViewport();
            !s && (w.isDom && t.is(":visible")) && (s = t.find("img:first"), s.length || (s = t));
            y(s) ? (v = s.offset(), s.is("img") && (r = s.outerWidth(), p = s.outerHeight())) : (v.top = b.y + (b.h - p) * w.topRatio, v.left = b.x + (b.w - r) * w.leftRatio);
            if ("fixed" === j.wrap.css("position") || w.locked) {
                v.top -= b.y, v.left -= b.x
            }
            return v = {
                top: m(v.top - n * w.topRatio),
                left: m(v.left - l * w.leftRatio),
                width: m(r + l),
                height: m(p + n)
            }
        }, step: function (b, s) {
            var r, t, p = s.prop;
            t = j.current;
            var n = t.wrapSpace, l = t.skinSpace;
            if ("width" === p || "height" === p) {
                r = s.end === s.start ? 1 : (b - s.start) / (s.end - s.start), j.isClosing && (r = 1 - r), t = "width" === p ? t.wPadding : t.hPadding, t = b - t, j.skin[p](h("width" === p ? t : t - n * r)), j.inner[p](h("width" === p ? t : t - n * r - l * r))
            }
        }, zoomIn: function () {
            var b = j.current, n = b.pos, l = b.openEffect, p = "elastic" === l, f = i.extend({opacity: 1}, n);
            delete f.position;
            p ? (n = this.getOrigPosition(), b.openOpacity && (n.opacity = 0.1)) : "fade" === l && (n.opacity = 0.1);
            j.wrap.css(n).animate(f, {
                duration: "none" === l ? 0 : b.openSpeed,
                easing: b.openEasing,
                step: p ? this.step : null,
                complete: j._afterZoomIn
            })
        }, zoomOut: function () {
            var b = j.current, l = b.closeEffect, f = "elastic" === l, n = {opacity: 0.1};
            f && (n = this.getOrigPosition(), b.closeOpacity && (n.opacity = 0.1));
            j.wrap.animate(n, {
                duration: "none" === l ? 0 : b.closeSpeed,
                easing: b.closeEasing,
                step: f ? this.step : null,
                complete: j._afterZoomOut
            })
        }, changeIn: function () {
            var b = j.current, r = b.nextEffect, p = b.pos, s = {opacity: 1}, n = j.direction, l;
            p.opacity = 0.1;
            "elastic" === r && (l = "down" === n || "up" === n ? "top" : "left", "down" === n || "right" === n ? (p[l] = m(h(p[l]) - 200), s[l] = "+=200px") : (p[l] = m(h(p[l]) + 200), s[l] = "-=200px"));
            "none" === r ? j._afterZoomIn() : j.wrap.css(p).animate(s, {
                duration: b.nextSpeed,
                easing: b.nextEasing,
                complete: j._afterZoomIn
            })
        }, changeOut: function () {
            var b = j.previous, l = b.prevEffect, f = {opacity: 0.1}, n = j.direction;
            "elastic" === l && (f["down" === n || "up" === n ? "top" : "left"] = ("up" === n || "left" === n ? "-" : "+") + "=200px");
            b.wrap.animate(f, {
                duration: "none" === l ? 0 : b.prevSpeed, easing: b.prevEasing, complete: function () {
                    i(this).trigger("onReset").remove()
                }
            })
        }
    };
    j.helpers.overlay = {
        defaults: {closeClick: !0, speedOut: 200, showEarly: !0, css: {}, locked: !A, fixed: !0},
        overlay: null,
        fixed: !1,
        el: i("html"),
        create: function (b) {
            b = i.extend({}, this.defaults, b);
            this.overlay && this.close();
            this.overlay = i('<div class="fancybox-overlay"></div>').appendTo(j.coming ? j.coming.parent : b.parent);
            this.fixed = !1;
            b.fixed && j.defaults.fixed && (this.overlay.addClass("fancybox-overlay-fixed"), this.fixed = !0)
        },
        open: function (b) {
            var f = this;
            b = i.extend({}, this.defaults, b);
            this.overlay ? this.overlay.unbind(".overlay").width("auto").height("auto") : this.create(b);
            this.fixed || (g.bind("resize.overlay", i.proxy(this.update, this)), this.update());
            b.closeClick && this.overlay.bind("click.overlay", function (l) {
                if (i(l.target).hasClass("fancybox-overlay")) {
                    return j.isActive ? j.close() : f.close(), !1
                }
            });
            this.overlay.css(b.css).show()
        },
        close: function () {
            var l, f;
            g.unbind("resize.overlay");
            this.el.hasClass("fancybox-lock") && (i(".fancybox-margin").removeClass("fancybox-margin"), l = g.scrollTop(), f = g.scrollLeft(), this.el.removeClass("fancybox-lock"), g.scrollTop(l).scrollLeft(f));
            i(".fancybox-overlay").remove().hide();
            i.extend(this, {overlay: null, fixed: !1})
        },
        update: function () {
            var l = "100%", f;
            this.overlay.width(l).height("100%");
            o ? (f = Math.max(x.documentElement.offsetWidth, x.body.offsetWidth), e.width() > f && (l = e.width())) : e.width() > g.width() && (l = e.width());
            this.overlay.width(l).height(e.height())
        },
        onReady: function (l, f) {
            var n = this.overlay;
            i(".fancybox-overlay").stop(!0, !0);
            n || this.create(l);
            l.locked && (this.fixed && f.fixed) && (n || (this.margin = e.height() > g.height() ? i("html").css("margin-right").replace("px", "") : !1), f.locked = this.overlay.append(f.wrap), f.fixed = !1);
            !0 === l.showEarly && this.beforeShow.apply(this, arguments)
        },
        beforeShow: function (l, f) {
            var n, p;
            f.locked && (!1 !== this.margin && (i("*").filter(function () {
                return "fixed" === i(this).css("position") && !i(this).hasClass("fancybox-overlay") && !i(this).hasClass("fancybox-wrap")
            }).addClass("fancybox-margin"), this.el.addClass("fancybox-margin")), n = g.scrollTop(), p = g.scrollLeft(), this.el.addClass("fancybox-lock"), g.scrollTop(n).scrollLeft(p));
            this.open(l)
        },
        onUpdate: function () {
            this.fixed || this.update()
        },
        afterClose: function (b) {
            this.overlay && !j.coming && this.overlay.fadeOut(b.speedOut, i.proxy(this.close, this))
        }
    };
    j.helpers.title = {
        defaults: {type: "float", position: "bottom"}, beforeShow: function (b) {
            var l = j.current, f = l.title, n = b.type;
            i.isFunction(f) && (f = f.call(l.element, l));
            if (c(f) && "" !== i.trim(f)) {
                l = i('<div class="fancybox-title fancybox-title-' + n + '-wrap">' + f + "</div>");
                switch (n) {
                    case"inside":
                        n = j.skin;
                        break;
                    case"outside":
                        n = j.wrap;
                        break;
                    case"over":
                        n = j.inner;
                        break;
                    default:
                        n = j.skin, l.appendTo("body"), o && l.width(l.width()), l.wrapInner('<span class="child"></span>'), j.current.margin[2] += Math.abs(h(l.css("margin-bottom")))
                }
                l["top" === b.position ? "prependTo" : "appendTo"](n)
            }
        }
    };
    i.fn.fancybox = function (b) {
        var n, l = i(this), p = this.selector || "", f = function (w) {
            var v = i(this).blur(), t = n, s, r;
            !w.ctrlKey && (!w.altKey && !w.shiftKey && !w.metaKey) && !v.is(".fancybox-wrap") && (s = b.groupAttr || "data-fancybox-group", r = v.attr(s), r || (s = "rel", r = v.get(0)[s]), r && ("" !== r && "nofollow" !== r) && (v = p.length ? i(p) : l, v = v.filter("[" + s + '="' + r + '"]'), t = v.index(this)), b.index = t, !1 !== j.open(v, b) && w.preventDefault())
        };
        b = b || {};
        n = b.index || 0;
        !p || !1 === b.live ? l.unbind("click.fb-start").bind("click.fb-start", f) : e.undelegate(p, "click.fb-start").delegate(p + ":not('.fancybox-item, .fancybox-nav')", "click.fb-start", f);
        this.filter("[data-fancybox-start=1]").trigger("click");
        return this
    };
    e.ready(function () {
        var b, l;
        i.scrollbarWidth === u && (i.scrollbarWidth = function () {
            var p = i('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo("body"),
                n = p.children(), n = n.innerWidth() - n.height(99).innerWidth();
            p.remove();
            return n
        });
        if (i.support.fixedPosition === u) {
            b = i.support;
            l = i('<div style="position:fixed;top:20px;"></div>').appendTo("body");
            var f = 20 === l[0].offsetTop || 15 === l[0].offsetTop;
            l.remove();
            b.fixedPosition = f
        }
        i.extend(j.defaults, {scrollbarWidth: i.scrollbarWidth(), fixed: i.support.fixedPosition, parent: i("body")});
        b = i(a).width();
        k.addClass("fancybox-lock-test");
        l = i(a).width();
        k.removeClass("fancybox-lock-test");
        i("<style type='text/css'>.fancybox-margin{margin-right:" + (l - b) + "px;}</style>").appendTo("head")
    })
})(window, document, jQuery);
/*!
 * Media helper for fancyBox
 * version: 1.0.6 (Fri, 14 Jun 2013)
 * @requires fancyBox v2.0 or later
 *
 * Usage:
 *     $(".fancybox").fancybox({
 *         helpers : {
 *             media: true
 *         }
 *     });
 *
 * Set custom URL parameters:
 *     $(".fancybox").fancybox({
 *         helpers : {
 *             media: {
 *                 youtube : {
 *                     params : {
 *                         autoplay : 0
 *                     }
 *                 }
 *             }
 *         }
 *     });
 *
 * Or:
 *     $(".fancybox").fancybox({,
 *         helpers : {
 *             media: true
 *         },
 *         youtube : {
 *             autoplay: 0
 *         }
 *     });
 *
 *  Supports:
 *
 *      Youtube
 *          http://www.youtube.com/watch?v=opj24KnzrWo
 *          http://www.youtube.com/embed/opj24KnzrWo
 *          http://youtu.be/opj24KnzrWo
 *			http://www.youtube-nocookie.com/embed/opj24KnzrWo
 *      Vimeo
 *          http://vimeo.com/40648169
 *          http://vimeo.com/channels/staffpicks/38843628
 *          http://vimeo.com/groups/surrealism/videos/36516384
 *          http://player.vimeo.com/video/45074303
 *      Metacafe
 *          http://www.metacafe.com/watch/7635964/dr_seuss_the_lorax_movie_trailer/
 *          http://www.metacafe.com/watch/7635964/
 *      Dailymotion
 *          http://www.dailymotion.com/video/xoytqh_dr-seuss-the-lorax-premiere_people
 *      Twitvid
 *          http://twitvid.com/QY7MD
 *      Twitpic
 *          http://twitpic.com/7p93st
 *      Instagram
 *          http://instagr.am/p/IejkuUGxQn/
 *          http://instagram.com/p/IejkuUGxQn/
 *      Google maps
 *          http://maps.google.com/maps?q=Eiffel+Tower,+Avenue+Gustave+Eiffel,+Paris,+France&t=h&z=17
 *          http://maps.google.com/?ll=48.857995,2.294297&spn=0.007666,0.021136&t=m&z=16
 *          http://maps.google.com/?ll=48.859463,2.292626&spn=0.000965,0.002642&t=m&z=19&layer=c&cbll=48.859524,2.292532&panoid=YJ0lq28OOy3VT2IqIuVY0g&cbp=12,151.58,,0,-15.56
 */
(function (b) {
    var a = b.fancybox, c = function (d, e, f) {
        f = f || "";
        if (b.type(f) === "object") {
            f = b.param(f, true)
        }
        b.each(e, function (g, h) {
            d = d.replace("$" + g, h || "")
        });
        if (f.length) {
            d += (d.indexOf("?") > 0 ? "&" : "?") + f
        }
        return d
    };
    a.helpers.media = {
        defaults: {
            youtube: {
                matcher: /(youtube\.com|youtu\.be|youtube-nocookie\.com)\/(watch\?v=|v\/|u\/|embed\/?)?(videoseries\?list=(.*)|[\w-]{11}|\?listType=(.*)&list=(.*)).*/i,
                params: {autoplay: 1, autohide: 1, fs: 1, rel: 0, hd: 1, wmode: "opaque", enablejsapi: 1},
                type: "iframe",
                url: "//www.youtube.com/embed/$3"
            },
            vimeo: {
                matcher: /(?:vimeo(?:pro)?.com)\/(?:[^\d]+)?(\d+)(?:.*)/,
                params: {autoplay: 1, hd: 1, show_title: 1, show_byline: 1, show_portrait: 0, fullscreen: 1},
                type: "iframe",
                url: "//player.vimeo.com/video/$1"
            },
            metacafe: {
                matcher: /metacafe.com\/(?:watch|fplayer)\/([\w\-]{1,10})/,
                params: {autoPlay: "yes"},
                type: "swf",
                url: function (e, f, d) {
                    d.swf.flashVars = "playerVars=" + b.param(f, true);
                    return "//www.metacafe.com/fplayer/" + e[1] + "/.swf"
                }
            },
            dailymotion: {
                matcher: /dailymotion.com\/video\/(.*)\/?(.*)/,
                params: {additionalInfos: 0, autoStart: 1},
                type: "swf",
                url: "//www.dailymotion.com/swf/video/$1"
            },
            twitvid: {
                matcher: /twitvid\.com\/([a-zA-Z0-9_\-\?\=]+)/i,
                params: {autoplay: 0},
                type: "iframe",
                url: "//www.twitvid.com/embed.php?guid=$1"
            },
            twitpic: {
                matcher: /twitpic\.com\/(?!(?:place|photos|events)\/)([a-zA-Z0-9\?\=\-]+)/i,
                type: "image",
                url: "//twitpic.com/show/full/$1/"
            },
            instagram: {
                matcher: /(instagr\.am|instagram\.com)\/p\/([a-zA-Z0-9_\-]+)\/?/i,
                type: "image",
                url: "//$1/p/$2/media/?size=l"
            },
            google_maps: {
                matcher: /maps\.google\.([a-z]{2,3}(\.[a-z]{2})?)\/(\?ll=|maps\?)(.*)/i,
                type: "iframe",
                url: function (d) {
                    return "//maps.google." + d[1] + "/" + d[3] + "" + d[4] + "&output=" + (d[4].indexOf("layer=c") > 0 ? "svembed" : "embed")
                }
            }
        }, beforeLoad: function (g, j) {
            var d = j.href || "", e = false, i, f, h, k;
            for (i in g) {
                if (g.hasOwnProperty(i)) {
                    f = g[i];
                    h = d.match(f.matcher);
                    if (h) {
                        e = f.type;
                        k = b.extend(true, {}, f.params, j[i] || (b.isPlainObject(g[i]) ? g[i].params : null));
                        d = b.type(f.url) === "function" ? f.url.call(this, h, k, j) : c(f.url, h, k);
                        break
                    }
                }
            }
            if (e) {
                j.href = d;
                j.type = e;
                j.autoHeight = false
            }
        }
    }
}(jQuery));
/*!
 * Thumbnail helper for fancyBox
 * version: 1.0.7 (Mon, 01 Oct 2012)
 * @requires fancyBox v2.0 or later
 *
 * Usage:
 *     $(".fancybox").fancybox({
 *         helpers : {
 *             thumbs: {
 *                 width  : 50,
 *                 height : 50
 *             }
 *         }
 *     });
 *
 */
(function (b) {
    var a = b.fancybox;
    a.helpers.thumbs = {
        defaults: {
            width: 50, height: 50, position: "bottom", source: function (d) {
                var c;
                if (d.element) {
                    c = b(d.element).find("img").attr("src")
                }
                if (!c && d.type === "image" && d.href) {
                    c = d.href
                }
                return c
            }
        }, wrap: null, list: null, width: 0, init: function (f, i) {
            var e = this, g, c = f.width, h = f.height, d = f.source;
            g = "";
            for (var j = 0; j < i.group.length; j++) {
                g += '<li><a style="width:' + c + "px;height:" + h + 'px;" href="javascript:jQuery.fancybox.jumpto(' + j + ');"></a></li>'
            }
            this.wrap = b('<div id="fancybox-thumbs"></div>').addClass(f.position).appendTo("body");
            this.list = b("<ul>" + g + "</ul>").appendTo(this.wrap);
            b.each(i.group, function (l) {
                var k = d(i.group[l]);
                if (!k) {
                    return
                }
                b("<img />").load(function () {
                    var r = this.width, m = this.height, p, n, o;
                    if (!e.list || !r || !m) {
                        return
                    }
                    p = r / c;
                    n = m / h;
                    o = e.list.children().eq(l).find("a");
                    if (p >= 1 && n >= 1) {
                        if (p > n) {
                            r = Math.floor(r / n);
                            m = h
                        } else {
                            r = c;
                            m = Math.floor(m / p)
                        }
                    }
                    b(this).css({width: r, height: m, top: Math.floor(h / 2 - m / 2), left: Math.floor(c / 2 - r / 2)});
                    o.width(c).height(h);
                    b(this).hide().appendTo(o).fadeIn(300)
                }).attr("src", k)
            });
            this.width = this.list.children().eq(0).outerWidth(true);
            this.list.width(this.width * (i.group.length + 1)).css("left", Math.floor(b(window).width() * 0.5 - (i.index * this.width + this.width * 0.5)))
        }, beforeLoad: function (c, d) {
            if (d.group.length < 2) {
                d.helpers.thumbs = false;
                return
            }
            d.margin[c.position === "top" ? 0 : 2] += ((c.height) + 15)
        }, afterShow: function (c, d) {
            if (this.list) {
                this.onUpdate(c, d)
            } else {
                this.init(c, d)
            }
            this.list.children().removeClass("active").eq(d.index).addClass("active")
        }, onUpdate: function (c, d) {
            if (this.list) {
                this.list.stop(true).animate({left: Math.floor(b(window).width() * 0.5 - (d.index * this.width + this.width * 0.5))}, 150)
            }
        }, beforeClose: function () {
            if (this.wrap) {
                this.wrap.remove()
            }
            this.wrap = null;
            this.list = null;
            this.width = 0
        }
    }
}(jQuery));
var VanillaForm = function (i) {
    function h() {
        var b = "9320087105434084715";
        return b = b.split(""), b = b.reverse().join("")
    }

    function n(b) {
        b.formFocused = !0
    }

    function m(d, c) {
        c.classList.remove("error"), c.removeEventListener("focus", j[c.name], !1), delete j[c.name], j.length--, j.length <= 0 && (j.length = 0, d.setSubmitState("initial"))
    }

    function l(a) {
        var o = a.getBoundingClientRect(), g = Math.round(o.top) - 5, f = i.innerHeight;
        return 0 >= g ? void i.scrollBy(0, g) : void (g >= f && i.scrollBy(0, g - f + 30))
    }

    var k = function (d) {
        var c = this;
        return d ? (c.dict = {
            markedAsSpamError: "Your message was marked as spam and was not sent! Fix your message!",
            markedAsSpamServerError: "Your message was marked as SPAM and was not send.",
            sendSuccess: "We have received your inquiry. Stay tuned, we’ll get back to you very soon.",
            sendError: "Mail server has experienced an error. Please try again.",
            httpRequestError: "[%s] There was a problem with receiving response from mailing server",
            timeoutError: "Your request was timeout. Please try again.",
            parseResponseError: "Response from mailing server was unclear. Please contact administrator."
        }, c.responseTimeout = 5000, c.httpRequest = null, c.url = d.action || location.href, c.form = d, c.processing = !1, c.submitButton = d.querySelector('[type="submit"]'), c.submitButton ? (c.notificationBox = d.querySelector(".notification-box"), c.notificationBox ? (c.notificationBox.addEventListener("click", function () {
            this.classList.remove("show-error"), this.classList.remove("show-success")
        }, !1), c.formFocused = !1, c.focusBound = null, c.init(), c) : (console.warn("Couldn't bind to submit button"), null)) : (console.warn("Couldn't bind to submit button"), null)) : (console.warn("Couldn't bind to form element"), null)
    }, j = {length: 0};
    return k.prototype.logError = function (b) {
        this.notify(b, "error")
    }, k.prototype.notify = function (e, d) {
        var f = this.notificationBox;
        return f ? (f.innerHTML = e, f.classList.add("show-" + (d || "error")), void l(f)) : void console.warn("Notification box not found")
    }, k.prototype.setSubmitState = function (g) {
        var f = this, r = f.submitButton, p = r.getAttribute("data-" + g),
            o = r.className.replace(/state-[a-z]+/gi, "");
        f.processing = "processing" === g, r.className = o + " state-" + g, r.value = p
    }, k.prototype.validateForm = function () {
        var t, s, r, p = this, o = p.form, g = o.elements, d = !1, b = !1,
            a = /^([\w\-]+(?:\.[\w\-]+)*)@((?:[\w\-]+\.)*\w[\w\-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
        for (s = g.length - 1; s >= 0; --s) {
            r = g[s], d = !1, j[r.name] && m(p, r), "" === r.value && r.required ? d = !0 : ("checkbox" === r.type && r.required && !r.checked && (d = !0), "email" !== r.type || "" === r.value || a.test(r.value) || (d = !0)), d ? (r.classList.add("error"), j[r.name] = m.bind(null, p, r), j.length++, r.addEventListener("focus", j[r.name], !1), b = !0) : r.classList.remove("error"), b && p.setSubmitState("error")
        }
        if (!b) {
            if (p.formFocused !== !0) {
                return p.logError(p.dict.markedAsSpamError), !1
            }
            t = o.querySelector('[name="contact_secret"]'), t || (t = document.createElement("input"), t.type = "hidden", t.name = "contact_secret", o.appendChild(t)), t.value = h()
        }
        return setTimeout(function () {
            i.scrollBy(0, -1)
        }, 1), !b
    }, k.prototype.resetForm = function () {
        var g, f, r = this, p = r.form, o = r.submitButton;
        for (f = p.length - 1; f >= 0; --f) {
            g = p[f], g !== o && (g.classList.remove("success"), g.value = "")
        }
        r.setSubmitState("initial")
    }, k.prototype.successForm = function () {
        var b = this;
        b.setSubmitState("success"), b.notify(b.dict.sendSuccess, "success")
    }, k.prototype.processResponse = function (g) {
        var f, r = this, p = r.dict;
        try {
            f = JSON.parse(g)
        } catch (o) {
            console.error(o), f = {result: "ParseError"}
        }
        switch (f.result) {
            case"OK":
                r.successForm(p.sendSuccess), setTimeout(r.resetForm.bind(r), 4000);
                break;
            case"NO_SPAM":
                r.logError(p.markedAsSpamServerError);
                break;
            case"SEND_ERROR":
                r.logError(p.sendError), r.setSubmitState("initial");
                break;
            case"ParseError":
                r.logError(p.parseResponseError)
        }
    }, k.prototype.requestStateChange = function () {
        var d = this, c = d.httpRequest;
        4 === c.readyState && (200 === c.status ? d.processResponse(c.responseText) : (d.setSubmitState("initial"), 0 !== c.status && d.logError(d.dict.httpRequestError.replace("%s", c.status))))
    }, k.prototype.init = function () {
        var a, s, r = this, p = r.form, o = r.submitButton, c = p.elements;
        if (p.addEventListener("submit", r.submitForm.bind(r), !0), i.XMLHttpRequest ? r.httpRequest = new XMLHttpRequest : i.ActiveXObject("Microsoft.XMLHTTP") && (r.httpRequest = new ActiveXObject("Microsoft.XMLHTTP")), r.focusBound = n.bind(null, r), !r.httpRequest) {
            return console.error("Couldn't init XMLHttpRequest"), null
        }
        for (r.formFocused = !1, s = c.length - 1; s >= 0; --s) {
            a = c[s], "submit" !== a.type && a.addEventListener("focus", r.focusBound, !1)
        }
        o.value !== o.getAttribute("data-initial") && (o.setAttribute("data-initial", o.value), r.setSubmitState("initial"))
    }, k.prototype.send = function (e) {
        var d = this, f = d.httpRequest;
        f.open("POST", d.url, !0), f.timeout = d.responseTimeout, f.ontimeout = function () {
            d.logError(d.dict.timeoutError), d.setSubmitState("initial")
        }, f.send(e), f.onreadystatechange = d.requestStateChange.bind(d)
    }, k.prototype.submitForm = function (e) {
        var d = this, f = "";
        return e && (e.preventDefault(), e.stopPropagation()), d.validateForm() && (d.setSubmitState("processing"), f = new FormData(d.form), d.send(f)), !1
    }, k
}(window);
var q = null;
window.PR_SHOULD_USE_CONTINUATION = !0;
(function () {
    function d(F) {
        function w(J) {
            var K = J.charCodeAt(0);
            if (K !== 92) {
                return K
            }
            var I = J.charAt(1);
            return (K = k[I]) ? K : "0" <= I && I <= "7" ? parseInt(J.substring(1), 8) : I === "u" || I === "x" ? parseInt(J.substring(2), 16) : J.charCodeAt(1)
        }

        function C(I) {
            if (I < 32) {
                return (I < 16 ? "\\x0" : "\\x") + I.toString(16)
            }
            I = String.fromCharCode(I);
            if (I === "\\" || I === "-" || I === "[" || I === "]") {
                I = "\\" + I
            }
            return I
        }

        function A(J) {
            for (var M = J.substring(1, J.length - 1).match(/\\u[\dA-Fa-f]{4}|\\x[\dA-Fa-f]{2}|\\[0-3][0-7]{0,2}|\\[0-7]{1,2}|\\[\S\s]|[^\\]/g), J = [], I = [], O = M[0] === "^", P = O ? 1 : 0, L = M.length; P < L; ++P) {
                var K = M[P];
                if (/\\[bdsw]/i.test(K)) {
                    J.push(K)
                } else {
                    var K = w(K), N;
                    P + 2 < L && "-" === M[P + 1] ? (N = w(M[P + 2]), P += 2) : N = K;
                    I.push([K, N]);
                    N < 65 || K > 122 || (N < 65 || K > 90 || I.push([Math.max(65, K) | 32, Math.min(N, 90) | 32]), N < 97 || K > 122 || I.push([Math.max(97, K) & -33, Math.min(N, 122) & -33]))
                }
            }
            I.sort(function (Q, R) {
                return Q[0] - R[0] || R[1] - Q[1]
            });
            M = [];
            K = [NaN, NaN];
            for (P = 0; P < I.length; ++P) {
                L = I[P], L[0] <= K[1] + 1 ? K[1] = Math.max(K[1], L[1]) : M.push(K = L)
            }
            I = ["["];
            O && I.push("^");
            I.push.apply(I, J);
            for (P = 0; P < M.length; ++P) {
                L = M[P], I.push(C(L[0])), L[1] > L[0] && (L[1] + 1 > L[0] && I.push("-"), I.push(C(L[1])))
            }
            I.push("]");
            return I.join("")
        }

        function E(J) {
            for (var M = J.source.match(/\[(?:[^\\\]]|\\[\S\s])*]|\\u[\dA-Fa-f]{4}|\\x[\dA-Fa-f]{2}|\\\d+|\\[^\dux]|\(\?[!:=]|[()^]|[^()[\\^]+/g), I = M.length, N = [], O = 0, L = 0; O < I; ++O) {
                var K = M[O];
                K === "(" ? ++L : "\\" === K.charAt(0) && (K = +K.substring(1)) && K <= L && (N[K] = -1)
            }
            for (O = 1; O < N.length; ++O) {
                -1 === N[O] && (N[O] = ++G)
            }
            for (L = O = 0; O < I; ++O) {
                K = M[O], K === "(" ? (++L, N[L] === void 0 && (M[O] = "(?:")) : "\\" === K.charAt(0) && (K = +K.substring(1)) && K <= L && (M[O] = "\\" + N[L])
            }
            for (L = O = 0; O < I; ++O) {
                "^" === M[O] && "^" !== M[O + 1] && (M[O] = "")
            }
            if (J.ignoreCase && H) {
                for (O = 0; O < I; ++O) {
                    K = M[O], J = K.charAt(0), K.length >= 2 && J === "[" ? M[O] = A(K) : J !== "\\" && (M[O] = K.replace(/[A-Za-z]/g, function (P) {
                        P = P.charCodeAt(0);
                        return "[" + String.fromCharCode(P & -33, P | 32) + "]"
                    }))
                }
            }
            return M.join("")
        }

        for (var G = 0, H = !1, x = !1, u = 0, D = F.length; u < D; ++u) {
            var B = F[u];
            if (B.ignoreCase) {
                x = !0
            } else {
                if (/[a-z]/i.test(B.source.replace(/\\u[\da-f]{4}|\\x[\da-f]{2}|\\[^UXux]/gi, ""))) {
                    H = !0;
                    x = !1;
                    break
                }
            }
        }
        for (var k = {b: 8, t: 9, n: 10, v: 11, f: 12, r: 13}, v = [], u = 0, D = F.length; u < D; ++u) {
            B = F[u];
            if (B.global || B.multiline) {
                throw Error("" + B)
            }
            v.push("(?:" + E(B) + ")")
        }
        return RegExp(v.join("|"), x ? "gi" : "g")
    }

    function c(B) {
        function u(E) {
            switch (E.nodeType) {
                case 1:
                    if (x.test(E.className)) {
                        break
                    }
                    for (var F = E.firstChild; F; F = F.nextSibling) {
                        u(F)
                    }
                    F = E.nodeName;
                    if ("BR" === F || "LI" === F) {
                        w[D] = "\n", C[D << 1] = A++, C[D++ << 1 | 1] = E
                    }
                    break;
                case 3:
                case 4:
                    F = E.nodeValue, F.length && (F = k ? F.replace(/\r\n?/g, "\n") : F.replace(/[\t\n\r ]+/g, " "), w[D] = F, C[D << 1] = A, A += F.length, C[D++ << 1 | 1] = E)
            }
        }

        var x = /(?:^|\s)nocode(?:\s|$)/, w = [], A = 0, C = [], D = 0, v;
        B.currentStyle ? v = B.currentStyle.whiteSpace : window.getComputedStyle && (v = document.defaultView.getComputedStyle(B, q).getPropertyValue("white-space"));
        var k = v && "pre" === v.substring(0, 3);
        u(B);
        return {a: w.join("").replace(/\n$/, ""), c: C}
    }

    function t(u, k, w, v) {
        k && (u = {a: k, d: u}, w(u), v.push.apply(v, u.e))
    }

    function h(u, k) {
        function x(P) {
            for (var F = P.d, C = [F, "pln"], L = 0, J = P.a.match(A) || [], B = {}, E = 0, N = J.length; E < N; ++E) {
                var K = J[E], O = B[K], D = void 0, M;
                if (typeof O === "string") {
                    M = !1
                } else {
                    var I = w[K.charAt(0)];
                    if (I) {
                        D = K.match(I[1]), O = I[0]
                    } else {
                        for (M = 0; M < v; ++M) {
                            if (I = k[M], D = K.match(I[1])) {
                                O = I[0];
                                break
                            }
                        }
                        D || (O = "pln")
                    }
                    if ((M = O.length >= 5 && "lang-" === O.substring(0, 5)) && !(D && typeof D[1] === "string")) {
                        M = !1, O = "src"
                    }
                    M || (B[K] = O)
                }
                I = L;
                L += K.length;
                if (M) {
                    M = D[1];
                    var H = K.indexOf(M), G = H + M.length;
                    D[2] && (G = K.length - D[2].length, H = G - M.length);
                    O = O.substring(5);
                    t(F + I, K.substring(0, H), x, C);
                    t(F + I + H, M, s(O, M), C);
                    t(F + I + G, K.substring(G), x, C)
                } else {
                    C.push(F + I, O)
                }
            }
            P.e = C
        }

        var w = {}, A;
        (function () {
            for (var G = u.concat(k), B = [], F = {}, H = 0, E = G.length; H < E; ++H) {
                var D = G[H], I = D[3];
                if (I) {
                    for (var C = I.length; --C >= 0;) {
                        w[I.charAt(C)] = D
                    }
                }
                D = D[1];
                I = "" + D;
                F.hasOwnProperty(I) || (B.push(D), F[I] = q)
            }
            B.push(/[\S\s]/);
            A = d(B)
        })();
        var v = k.length;
        return x
    }

    function o(u) {
        var k = [], w = [];
        u.tripleQuotedStrings ? k.push(["str", /^(?:'''(?:[^'\\]|\\[\S\s]|''?(?=[^']))*(?:'''|$)|"""(?:[^"\\]|\\[\S\s]|""?(?=[^"]))*(?:"""|$)|'(?:[^'\\]|\\[\S\s])*(?:'|$)|"(?:[^"\\]|\\[\S\s])*(?:"|$))/, q, "'\""]) : u.multiLineStrings ? k.push(["str", /^(?:'(?:[^'\\]|\\[\S\s])*(?:'|$)|"(?:[^"\\]|\\[\S\s])*(?:"|$)|`(?:[^\\`]|\\[\S\s])*(?:`|$))/, q, "'\"`"]) : k.push(["str", /^(?:'(?:[^\n\r'\\]|\\.)*(?:'|$)|"(?:[^\n\r"\\]|\\.)*(?:"|$))/, q, "\"'"]);
        u.verbatimStrings && w.push(["str", /^@"(?:[^"]|"")*(?:"|$)/, q]);
        var v = u.hashComments;
        v && (u.cStyleComments ? (v > 1 ? k.push(["com", /^#(?:##(?:[^#]|#(?!##))*(?:###|$)|.*)/, q, "#"]) : k.push(["com", /^#(?:(?:define|elif|else|endif|error|ifdef|include|ifndef|line|pragma|undef|warning)\b|[^\n\r]*)/, q, "#"]), w.push(["str", /^<(?:(?:(?:\.\.\/)*|\/?)(?:[\w-]+(?:\/[\w-]+)+)?[\w-]+\.h|[a-z]\w*)>/, q])) : k.push(["com", /^#[^\n\r]*/, q, "#"]));
        u.cStyleComments && (w.push(["com", /^\/\/[^\n\r]*/, q]), w.push(["com", /^\/\*[\S\s]*?(?:\*\/|$)/, q]));
        u.regexLiterals && w.push(["lang-regex", /^(?:^^\.?|[!+-]|!=|!==|#|%|%=|&|&&|&&=|&=|\(|\*|\*=|\+=|,|-=|->|\/|\/=|:|::|;|<|<<|<<=|<=|=|==|===|>|>=|>>|>>=|>>>|>>>=|[?@[^]|\^=|\^\^|\^\^=|{|\||\|=|\|\||\|\|=|~|break|case|continue|delete|do|else|finally|instanceof|return|throw|try|typeof)\s*(\/(?=[^*/])(?:[^/[\\]|\\[\S\s]|\[(?:[^\\\]]|\\[\S\s])*(?:]|$))+\/)/]);
        (v = u.types) && w.push(["typ", v]);
        u = ("" + u.keywords).replace(/^ | $/g, "");
        u.length && w.push(["kwd", RegExp("^(?:" + u.replace(/[\s,]+/g, "|") + ")\\b"), q]);
        k.push(["pln", /^\s+/, q, " \r\n\t\xa0"]);
        w.push(["lit", /^@[$_a-z][\w$@]*/i, q], ["typ", /^(?:[@_]?[A-Z]+[a-z][\w$@]*|\w+_t\b)/, q], ["pln", /^[$_a-z][\w$@]*/i, q], ["lit", /^(?:0x[\da-f]+|(?:\d(?:_\d+)*\d*(?:\.\d*)?|\.\d\+)(?:e[+-]?\d+)?)[a-z]*/i, q, "0123456789"], ["pln", /^\\[\S\s]?/, q], ["pun", /^.[^\s\w"-$'./@\\`]*/, q]);
        return h(k, w)
    }

    function r(H, x) {
        function E(K) {
            switch (K.nodeType) {
                case 1:
                    if (B.test(K.className)) {
                        break
                    }
                    if ("BR" === K.nodeName) {
                        C(K), K.parentNode && K.parentNode.removeChild(K)
                    } else {
                        for (K = K.firstChild; K; K = K.nextSibling) {
                            E(K)
                        }
                    }
                    break;
                case 3:
                case 4:
                    if (v) {
                        var k = K.nodeValue, L = k.match(I);
                        if (L) {
                            var M = k.substring(0, L.index);
                            K.nodeValue = M;
                            (k = k.substring(L.index + L[0].length)) && K.parentNode.insertBefore(J.createTextNode(k), K.nextSibling);
                            C(K);
                            M || K.parentNode.removeChild(K)
                        }
                    }
            }
        }

        function C(K) {
            function k(M, R) {
                var Q = R ? M.cloneNode(!1) : M, P = M.parentNode;
                if (P) {
                    var P = k(P, 1), O = M.nextSibling;
                    P.appendChild(Q);
                    for (var N = O; N; N = O) {
                        O = N.nextSibling, P.appendChild(N)
                    }
                }
                return Q
            }

            for (; !K.nextSibling;) {
                if (K = K.parentNode, !K) {
                    return
                }
            }
            for (var K = k(K.nextSibling, 0), L; (L = K.parentNode) && L.nodeType === 1;) {
                K = L
            }
            F.push(K)
        }

        var B = /(?:^|\s)nocode(?:\s|$)/, I = /\r\n?|\n/, J = H.ownerDocument, A;
        H.currentStyle ? A = H.currentStyle.whiteSpace : window.getComputedStyle && (A = J.defaultView.getComputedStyle(H, q).getPropertyValue("white-space"));
        var v = A && "pre" === A.substring(0, 3);
        for (A = J.createElement("LI"); H.firstChild;) {
            A.appendChild(H.firstChild)
        }
        for (var F = [A], D = 0; D < F.length; ++D) {
            E(F[D])
        }
        x === (x | 0) && F[0].setAttribute("value", x);
        var u = J.createElement("OL");
        u.className = "linenums";
        for (var w = Math.max(0, x - 1 | 0) || 0, D = 0, G = F.length; D < G; ++D) {
            A = F[D], A.className = "L" + (D + w) % 10, A.firstChild || A.appendChild(J.createTextNode("\xa0")), u.appendChild(A)
        }
        H.appendChild(u)
    }

    function z(u, k) {
        for (var w = k.length; --w >= 0;) {
            var v = k[w];
            y.hasOwnProperty(v) ? window.console && console.warn("cannot override language handler %s", v) : y[v] = u
        }
    }

    function s(u, k) {
        if (!u || !y.hasOwnProperty(u)) {
            u = /^\s*</.test(k) ? "default-markup" : "default-code"
        }
        return y[u]
    }

    function p(X) {
        var L = X.g;
        try {
            var T = c(X.h), Q = T.a;
            X.a = Q;
            X.c = T.c;
            X.d = 0;
            s(L, Q)(X);
            var N = /\bMSIE\b/.test(navigator.userAgent), L = /\n/g, F = X.a, G = F.length, T = 0, M = X.c,
                I = M.length, Q = 0, U = X.e, R = U.length, X = 0;
            U[R] = G;
            var H, K;
            for (K = H = 0; K < R;) {
                U[K] !== U[K + 2] ? (U[H++] = U[K++], U[H++] = U[K++]) : K += 2
            }
            R = H;
            for (K = H = 0; K < R;) {
                for (var A = U[K], S = U[K + 1], W = K + 2; W + 2 <= R && U[W + 1] === S;) {
                    W += 2
                }
                U[H++] = A;
                U[H++] = S;
                K = W
            }
            for (U.length = H; Q < I;) {
                var J = M[Q + 2] || G, V = U[X + 2] || G, W = Math.min(J, V), P = M[Q + 1], O;
                if (P.nodeType !== 1 && (O = F.substring(T, W))) {
                    N && (O = O.replace(L, "\r"));
                    P.nodeValue = O;
                    var E = P.ownerDocument, D = E.createElement("SPAN");
                    D.className = U[X + 1];
                    var B = P.parentNode;
                    B.replaceChild(D, P);
                    D.appendChild(P);
                    T < J && (M[Q + 1] = P = E.createTextNode(F.substring(W, J)), B.insertBefore(P, D.nextSibling))
                }
                T = W;
                T >= J && (Q += 2);
                T >= V && (X += 2)
            }
        } catch (C) {
            "console" in window && console.log(C && C.stack ? C.stack : C)
        }
    }

    var m = ["break,continue,do,else,for,if,return,while"],
        j = [[m, "auto,case,char,const,default,double,enum,extern,float,goto,int,long,register,short,signed,sizeof,static,struct,switch,typedef,union,unsigned,void,volatile"], "catch,class,delete,false,import,new,operator,private,protected,public,this,throw,true,try,typeof"],
        n = [j, "alignof,align_union,asm,axiom,bool,concept,concept_map,const_cast,constexpr,decltype,dynamic_cast,explicit,export,friend,inline,late_check,mutable,namespace,nullptr,reinterpret_cast,static_assert,static_cast,template,typeid,typename,using,virtual,where"],
        l = [j, "abstract,boolean,byte,extends,final,finally,implements,import,instanceof,null,native,package,strictfp,super,synchronized,throws,transient"],
        i = [l, "as,base,by,checked,decimal,delegate,descending,dynamic,event,fixed,foreach,from,group,implicit,in,interface,internal,into,is,lock,object,out,override,orderby,params,partial,readonly,ref,sbyte,sealed,stackalloc,string,select,uint,ulong,unchecked,unsafe,ushort,var"],
        j = [j, "debugger,eval,export,function,get,null,set,undefined,var,with,Infinity,NaN"],
        g = [m, "and,as,assert,class,def,del,elif,except,exec,finally,from,global,import,in,is,lambda,nonlocal,not,or,pass,print,raise,try,with,yield,False,True,None"],
        f = [m, "alias,and,begin,case,class,def,defined,elsif,end,ensure,false,in,module,next,nil,not,or,redo,rescue,retry,self,super,then,true,undef,unless,until,when,yield,BEGIN,END"],
        m = [m, "case,done,elif,esac,eval,fi,function,in,local,set,then,until"],
        e = /^(DIR|FILE|vector|(de|priority_)?queue|list|stack|(const_)?iterator|(multi)?(set|map)|bitset|u?(int|float)\d*)/,
        b = /\S/, a = o({
            keywords: [n, i, j, "caller,delete,die,do,dump,elsif,eval,exit,foreach,for,goto,if,import,last,local,my,next,no,our,print,package,redo,require,sub,undef,unless,until,use,wantarray,while,BEGIN,END" + g, f, m],
            hashComments: !0,
            cStyleComments: !0,
            multiLineStrings: !0,
            regexLiterals: !0
        }), y = {};
    z(a, ["default-code"]);
    z(h([], [["pln", /^[^<?]+/], ["dec", /^<!\w[^>]*(?:>|$)/], ["com", /^<\!--[\S\s]*?(?:--\>|$)/], ["lang-", /^<\?([\S\s]+?)(?:\?>|$)/], ["lang-", /^<%([\S\s]+?)(?:%>|$)/], ["pun", /^(?:<[%?]|[%?]>)/], ["lang-", /^<xmp\b[^>]*>([\S\s]+?)<\/xmp\b[^>]*>/i], ["lang-js", /^<script\b[^>]*>([\S\s]*?)(<\/script\b[^>]*>)/i], ["lang-css", /^<style\b[^>]*>([\S\s]*?)(<\/style\b[^>]*>)/i], ["lang-in.tag", /^(<\/?[a-z][^<>]*>)/i]]), ["default-markup", "htm", "html", "mxml", "xhtml", "xml", "xsl"]);
    z(h([["pln", /^\s+/, q, " \t\r\n"], ["atv", /^(?:"[^"]*"?|'[^']*'?)/, q, "\"'"]], [["tag", /^^<\/?[a-z](?:[\w-.:]*\w)?|\/?>$/i], ["atn", /^(?!style[\s=]|on)[a-z](?:[\w:-]*\w)?/i], ["lang-uq.val", /^=\s*([^\s"'>]*(?:[^\s"'/>]|\/(?=\s)))/], ["pun", /^[/<->]+/], ["lang-js", /^on\w+\s*=\s*"([^"]+)"/i], ["lang-js", /^on\w+\s*=\s*'([^']+)'/i], ["lang-js", /^on\w+\s*=\s*([^\s"'>]+)/i], ["lang-css", /^style\s*=\s*"([^"]+)"/i], ["lang-css", /^style\s*=\s*'([^']+)'/i], ["lang-css", /^style\s*=\s*([^\s"'>]+)/i]]), ["in.tag"]);
    z(h([], [["atv", /^[\S\s]+/]]), ["uq.val"]);
    z(o({keywords: n, hashComments: !0, cStyleComments: !0, types: e}), ["c", "cc", "cpp", "cxx", "cyc", "m"]);
    z(o({keywords: "null,true,false"}), ["json"]);
    z(o({keywords: i, hashComments: !0, cStyleComments: !0, verbatimStrings: !0, types: e}), ["cs"]);
    z(o({keywords: l, cStyleComments: !0}), ["java"]);
    z(o({keywords: m, hashComments: !0, multiLineStrings: !0}), ["bsh", "csh", "sh"]);
    z(o({keywords: g, hashComments: !0, multiLineStrings: !0, tripleQuotedStrings: !0}), ["cv", "py"]);
    z(o({
        keywords: "caller,delete,die,do,dump,elsif,eval,exit,foreach,for,goto,if,import,last,local,my,next,no,our,print,package,redo,require,sub,undef,unless,until,use,wantarray,while,BEGIN,END",
        hashComments: !0,
        multiLineStrings: !0,
        regexLiterals: !0
    }), ["perl", "pl", "pm"]);
    z(o({keywords: f, hashComments: !0, multiLineStrings: !0, regexLiterals: !0}), ["rb"]);
    z(o({keywords: j, cStyleComments: !0, regexLiterals: !0}), ["js"]);
    z(o({
        keywords: "all,and,by,catch,class,else,extends,false,finally,for,if,in,is,isnt,loop,new,no,not,null,of,off,on,or,return,super,then,true,try,unless,until,when,while,yes",
        hashComments: 3,
        cStyleComments: !0,
        multilineStrings: !0,
        tripleQuotedStrings: !0,
        regexLiterals: !0
    }), ["coffee"]);
    z(h([], [["str", /^[\S\s]+/]]), ["regex"]);
    window.prettyPrintOne = function (u, k, w) {
        var v = document.createElement("PRE");
        v.innerHTML = u;
        w && r(v, w);
        p({g: k, i: w, h: v});
        return v.innerHTML
    };
    window.prettyPrint = function (E) {
        function v() {
            for (var L = window.PR_SHOULD_USE_CONTINUATION ? w.now() + 250 : Infinity; u < A.length && w.now() < L; u++) {
                var O = A[u], I = O.className;
                if (I.indexOf("prettyprint") >= 0) {
                    var I = I.match(B), K, H;
                    if (H = !I) {
                        H = O;
                        for (var M = void 0, N = H.firstChild; N; N = N.nextSibling) {
                            var J = N.nodeType, M = J === 1 ? M ? H : N : J === 3 ? b.test(N.nodeValue) ? H : M : M
                        }
                        H = (K = M === H ? void 0 : M) && "CODE" === K.tagName
                    }
                    H && (I = K.className.match(B));
                    I && (I = I[1]);
                    H = !1;
                    for (M = O.parentNode; M; M = M.parentNode) {
                        if ((M.tagName === "pre" || M.tagName === "code" || M.tagName === "xmp") && M.className && M.className.indexOf("prettyprint") >= 0) {
                            H = !0;
                            break
                        }
                    }
                    H || ((H = (H = O.className.match(/\blinenums\b(?::(\d+))?/)) ? H[1] && H[1].length ? +H[1] : !0 : !1) && r(O, H), D = {
                        g: I,
                        h: O,
                        i: H
                    }, p(D))
                }
            }
            u < A.length ? setTimeout(v, 250) : E && E()
        }

        for (var C = [document.getElementsByTagName("pre"), document.getElementsByTagName("code"), document.getElementsByTagName("xmp")], A = [], x = 0; x < C.length; ++x) {
            for (var F = 0, G = C[x].length; F < G; ++F) {
                A.push(C[x][F])
            }
        }
        var C = q, w = Date;
        w.now || (w = {
            now: function () {
                return +new Date
            }
        });
        var u = 0, D, B = /\blang(?:uage)?-([\w.]+)(?!\S)/;
        v()
    };
    window.PR = {
        createSimpleLexer: h,
        registerLangHandler: z,
        sourceDecorator: o,
        PR_ATTRIB_NAME: "atn",
        PR_ATTRIB_VALUE: "atv",
        PR_COMMENT: "com",
        PR_DECLARATION: "dec",
        PR_KEYWORD: "kwd",
        PR_LITERAL: "lit",
        PR_NOCODE: "nocode",
        PR_PLAIN: "pln",
        PR_PUNCTUATION: "pun",
        PR_SOURCE: "src",
        PR_STRING: "str",
        PR_TAG: "tag",
        PR_TYPE: "typ"
    }
})();

function revslider_showDoubleJqueryError(b) {
    var a = "Revolution Slider Error: You have some jquery.js library include that comes after the revolution files js include.";
    a += "<br> This includes make eliminates the revolution slider libraries, and make it not work.";
    a += "<br><br> To fix it you can:<br>&nbsp;&nbsp;&nbsp; 1. In the Slider Settings -> Troubleshooting set option:  <strong><b>Put JS Includes To Body</b></strong> option to true.";
    a += "<br>&nbsp;&nbsp;&nbsp; 2. Find the double jquery.js include and remove it.";
    a = "<span style='font-size:16px;color:#BC0C06;'>" + a + "</span>";
    jQuery(b).show().html(a)
}

(function (a2, aK) {
    function aR() {
        var a = false;
        if (navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/iPad/i)) {
            if (navigator.userAgent.match(/OS 4_\d like Mac OS X/i)) {
                a = true
            }
        } else {
            a = false
        }
        return a
    }

    function aM(G, R) {
        if (G == aK) {
            return false
        }
        if (G.data("aimg") != aK) {
            if (G.data("aie8") == "enabled" && a6(8) || G.data("amobile") == "enabled" && aq()) {
                G.html('<img class="tp-slider-alternative-image" src="' + G.data("aimg") + '">')
            }
        }
        if (R.navigationStyle == "preview1" || R.navigationStyle == "preview3" || R.navigationStyle == "preview4") {
            R.soloArrowLeftHalign = "left";
            R.soloArrowLeftValign = "center";
            R.soloArrowLeftHOffset = 0;
            R.soloArrowLeftVOffset = 0;
            R.soloArrowRightHalign = "right";
            R.soloArrowRightValign = "center";
            R.soloArrowRightHOffset = 0;
            R.soloArrowRightVOffset = 0;
            R.navigationArrows = "solo"
        }
        if (R.simplifyAll == "on" && (a6(8) || aR())) {
            G.find(".tp-caption").each(function () {
                var b = a2(this);
                b.removeClass("customin").removeClass("customout").addClass("fadein").addClass("fadeout");
                b.data("splitin", "");
                b.data("speed", 400)
            });
            G.find(">ul>li").each(function () {
                var b = a2(this);
                b.data("transition", "fade");
                b.data("masterspeed", 500);
                b.data("slotamount", 1);
                var f = b.find(">img").first();
                f.data("kenburns", "off")
            })
        }
        R.desktop = !navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|BB10|mobi|tablet|opera mini|nexus 7)/i);
        if (R.fullWidth != "on" && R.fullScreen != "on") {
            R.autoHeight = "off"
        }
        if (R.fullScreen == "on") {
            R.autoHeight = "on"
        }
        if (R.fullWidth != "on" && R.fullScreen != "on") {
            forceFulWidth = "off"
        }
        if (R.fullWidth == "on" && R.autoHeight == "off") {
            G.css({maxHeight: R.startheight + "px"})
        }
        if (aq() && R.hideThumbsOnMobile == "on" && R.navigationType == "thumb") {
            R.navigationType = "none"
        }
        if (aq() && R.hideBulletsOnMobile == "on" && R.navigationType == "bullet") {
            R.navigationType = "none"
        }
        if (aq() && R.hideBulletsOnMobile == "on" && R.navigationType == "both") {
            R.navigationType = "none"
        }
        if (aq() && R.hideArrowsOnMobile == "on") {
            R.navigationArrows = "none"
        }
        if (R.forceFullWidth == "on" && G.closest(".forcefullwidth_wrapper_tp_banner").length == 0) {
            var V = G.parent().offset().left;
            var s = G.parent().css("marginBottom");
            var K = G.parent().css("marginTop");
            if (s == aK) {
                s = 0
            }
            if (K == aK) {
                K = 0
            }
            G.parent().wrap('<div style="position:relative;width:100%;height:auto;margin-top:' + K + ";margin-bottom:" + s + '" class="forcefullwidth_wrapper_tp_banner"></div>');
            G.closest(".forcefullwidth_wrapper_tp_banner").append('<div class="tp-fullwidth-forcer" style="width:100%;height:' + G.height() + 'px"></div>');
            G.css({
                backgroundColor: G.parent().css("backgroundColor"),
                backgroundImage: G.parent().css("backgroundImage")
            });
            G.parent().css({left: 0 - V + "px", position: "absolute", width: a2(window).width()});
            R.width = a2(window).width()
        }
        try {
            if (R.hideThumbsUnderResolution > a2(window).width() && R.hideThumbsUnderResolution != 0) {
                G.parent().find(".tp-bullets.tp-thumbs").css({display: "none"})
            } else {
                G.parent().find(".tp-bullets.tp-thumbs").css({display: "block"})
            }
        } catch (U) {
        }
        if (!G.hasClass("revslider-initialised")) {
            G.addClass("revslider-initialised");
            if (G.attr("id") == aK) {
                G.attr("id", "revslider-" + Math.round(Math.random() * 1000 + 5))
            }
            R.firefox13 = false;
            R.ie = !a2.support.opacity;
            R.ie9 = document.documentMode == 9;
            R.origcd = R.delay;
            var W = a2.fn.jquery.split("."), p = parseFloat(W[0]), u = parseFloat(W[1]), c = parseFloat(W[2] || "0");
            if (p == 1 && u < 7) {
                G.html('<div style="text-align:center; padding:40px 0px; font-size:20px; color:#992222;"> The Current Version of jQuery:' + W + " <br>Please update your jQuery Version to min. 1.7 in Case you wish to use the Revolution Slider Plugin</div>")
            }
            if (p > 1) {
                R.ie = false
            }
            if (!a2.support.transition) {
                a2.fn.transition = a2.fn.animate
            }
            G.find(".caption").each(function () {
                a2(this).addClass("tp-caption")
            });
            if (aq()) {
                G.find(".tp-caption").each(function () {
                    var b = a2(this);
                    if (b.data("autoplayonlyfirsttime") == true || b.data("autoplayonlyfirsttime") == "true") {
                        b.data("autoplayonlyfirsttime", "false")
                    }
                    if (b.data("autoplay") == true || b.data("autoplay") == "true") {
                        b.data("autoplay", false)
                    }
                })
            }
            var n = 0;
            var a = 0;
            var z = 0;
            var N = "http";
            if (location.protocol === "https:") {
                N = "https"
            }
            G.find(".tp-caption").each(function (v) {
                try {
                    if ((a2(this).data("ytid") != aK || a2(this).find("iframe").attr("src").toLowerCase().indexOf("youtube") > 0) && n == 0) {
                        n = 1;
                        var k = document.createElement("script");
                        var g = "https";
                        k.src = g + "://www.youtube.com/iframe_api";
                        var j = document.getElementsByTagName("script")[0];
                        var m = true;
                        a2("head").find("*").each(function () {
                            if (a2(this).attr("src") == g + "://www.youtube.com/iframe_api") {
                                m = false
                            }
                        });
                        if (m) {
                            j.parentNode.insertBefore(k, j)
                        }
                    }
                } catch (f) {
                }
                try {
                    if ((a2(this).data("vimeoid") != aK || a2(this).find("iframe").attr("src").toLowerCase().indexOf("vimeo") > 0) && a == 0) {
                        a = 1;
                        var b = document.createElement("script");
                        b.src = N + "://a.vimeocdn.com/js/froogaloop2.min.js";
                        var j = document.getElementsByTagName("script")[0];
                        var m = true;
                        a2("head").find("*").each(function () {
                            if (a2(this).attr("src") == N + "://a.vimeocdn.com/js/froogaloop2.min.js") {
                                m = false
                            }
                        });
                        if (m) {
                            j.parentNode.insertBefore(b, j)
                        }
                    }
                } catch (f) {
                }
                try {
                    if (a2(this).data("videomp4") != aK || a2(this).data("videowebm") != aK) {
                    }
                } catch (f) {
                }
            });
            G.find(".tp-caption video").each(function (b) {
                a2(this).removeClass("video-js").removeClass("vjs-default-skin");
                a2(this).attr("preload", "");
                a2(this).css({display: "none"})
            });
            G.find(">ul:first-child >li").each(function () {
                var b = a2(this);
                b.data("origindex", b.index())
            });
            if (R.shuffle == "on") {
                var l = {}, J = G.find(">ul:first-child >li:first-child");
                l.fstransition = J.data("fstransition");
                l.fsmasterspeed = J.data("fsmasterspeed");
                l.fsslotamount = J.data("fsslotamount");
                for (var e = 0; e < G.find(">ul:first-child >li").length; e++) {
                    var h = Math.round(Math.random() * G.find(">ul:first-child >li").length);
                    G.find(">ul:first-child >li:eq(" + h + ")").prependTo(G.find(">ul:first-child"))
                }
                var X = G.find(">ul:first-child >li:first-child");
                X.data("fstransition", l.fstransition);
                X.data("fsmasterspeed", l.fsmasterspeed);
                X.data("fsslotamount", l.fsslotamount)
            }
            R.slots = 4;
            R.act = -1;
            R.next = 0;
            if (R.startWithSlide != aK) {
                R.next = R.startWithSlide
            }
            var y = aQ("#")[0];
            if (y.length < 9) {
                if (y.split("slide").length > 1) {
                    var d = parseInt(y.split("slide")[1], 0);
                    if (d < 1) {
                        d = 1
                    }
                    if (d > G.find(">ul:first >li").length) {
                        d = G.find(">ul:first >li").length
                    }
                    R.next = d - 1
                }
            }
            R.firststart = 1;
            if (R.navigationHOffset == aK) {
                R.navOffsetHorizontal = 0
            }
            if (R.navigationVOffset == aK) {
                R.navOffsetVertical = 0
            }
            G.append('<div class="tp-loader ' + R.spinner + '"><div class="dot1"></div><div class="dot2"></div><div class="bounce1"></div><div class="bounce2"></div><div class="bounce3"></div></div>');
            if (G.find(".tp-bannertimer").length == 0) {
                G.append('<div class="tp-bannertimer" style="visibility:hidden"></div>')
            }
            var o = G.find(".tp-bannertimer");
            if (o.length > 0) {
                o.css({width: "0%"})
            }
            G.addClass("tp-simpleresponsive");
            R.container = G;
            R.slideamount = G.find(">ul:first >li").length;
            if (G.height() == 0) {
                G.height(R.startheight)
            }
            if (R.startwidth == aK || R.startwidth == 0) {
                R.startwidth = G.width()
            }
            if (R.startheight == aK || R.startheight == 0) {
                R.startheight = G.height()
            }
            R.width = G.width();
            R.height = G.height();
            R.bw = R.startwidth / G.width();
            R.bh = R.startheight / G.height();
            if (R.width != R.startwidth) {
                R.height = Math.round(R.startheight * (R.width / R.startwidth));
                G.height(R.height)
            }
            if (R.shadow != 0) {
                G.parent().append('<div class="tp-bannershadow tp-shadow' + R.shadow + '"></div>');
                var V = 0;
                if (R.forceFullWidth == "on") {
                    V = 0 - R.container.parent().offset().left
                }
                G.parent().find(".tp-bannershadow").css({width: R.width, left: V})
            }
            G.find("ul").css({display: "none"});
            var I = G;
            G.find("ul").css({display: "block"});
            aF(G, R);
            if (R.parallax != "off") {
                aO(G, R)
            }
            if (R.slideamount > 1) {
                aT(G, R)
            }
            if (R.slideamount > 1 && R.navigationType == "thumb") {
                aV(G, R)
            }
            if (R.slideamount > 1) {
                a4(G, R)
            }
            if (R.keyboardNavigation == "on") {
                aY(G, R)
            }
            aP(G, R);
            if (R.hideThumbs > 0) {
                a3(G, R)
            }
            setTimeout(function () {
                am(G, R)
            }, R.startDelay);
            R.startDelay = 0;
            if (R.slideamount > 1) {
                aD(G, R)
            }
            setTimeout(function () {
                G.trigger("revolution.slide.onloaded")
            }, 500);
            a2("body").data("rs-fullScreenMode", false);
            a2(window).on("mozfullscreenchange webkitfullscreenchange fullscreenchange", function () {
                a2("body").data("rs-fullScreenMode", !a2("body").data("rs-fullScreenMode"));
                if (a2("body").data("rs-fullScreenMode")) {
                    setTimeout(function () {
                        a2(window).trigger("resize")
                    }, 200)
                }
            });
            var Q = "resize.revslider-" + G.attr("id");
            a2(window).on(Q, function () {
                if (G == aK) {
                    return false
                }
                if (a2("body").find(G) != 0) {
                    if (R.forceFullWidth == "on") {
                        var b = R.container.closest(".forcefullwidth_wrapper_tp_banner").offset().left;
                        R.container.parent().css({left: 0 - b + "px", width: a2(window).width()})
                    }
                }
                if (G.outerWidth(true) != R.width || G.is(":hidden")) {
                    aJ(G, R)
                }
            });
            try {
                if (R.hideThumbsUnderResoluition != 0 && R.navigationType == "thumb") {
                    if (R.hideThumbsUnderResoluition > a2(window).width()) {
                        a2(".tp-bullets").css({display: "none"})
                    } else {
                        a2(".tp-bullets").css({display: "block"})
                    }
                }
            } catch (U) {
            }
            G.find(".tp-scrollbelowslider").on("click", function () {
                var b = 0;
                try {
                    b = a2("body").find(R.fullScreenOffsetContainer).height()
                } catch (f) {
                }
                try {
                    b = b - parseInt(a2(this).data("scrolloffset"), 0)
                } catch (f) {
                }
                a2("body,html").animate({scrollTop: G.offset().top + G.find(">ul >li").height() - b + "px"}, {duration: 400})
            });
            var t = G.parent();
            if (a2(window).width() < R.hideSliderAtLimit) {
                G.trigger("stoptimer");
                if (t.css("display") != "none") {
                    t.data("olddisplay", t.css("display"))
                }
                t.css({display: "none"})
            }
            aL(G, R)
        }
    }

    a2.fn.extend({
        revolution: function (b) {
            var a = {
                delay: 9000,
                startheight: 500,
                startwidth: 960,
                fullScreenAlignForce: "off",
                autoHeight: "off",
                hideTimerBar: "off",
                hideThumbs: 200,
                hideNavDelayOnMobile: 1500,
                thumbWidth: 100,
                thumbHeight: 50,
                thumbAmount: 3,
                navigationType: "bullet",
                navigationArrows: "solo",
                navigationInGrid: "off",
                hideThumbsOnMobile: "off",
                hideBulletsOnMobile: "off",
                hideArrowsOnMobile: "off",
                hideThumbsUnderResoluition: 0,
                navigationStyle: "round",
                navigationHAlign: "center",
                navigationVAlign: "bottom",
                navigationHOffset: 0,
                navigationVOffset: 20,
                soloArrowLeftHalign: "left",
                soloArrowLeftValign: "center",
                soloArrowLeftHOffset: 20,
                soloArrowLeftVOffset: 0,
                soloArrowRightHalign: "right",
                soloArrowRightValign: "center",
                soloArrowRightHOffset: 20,
                soloArrowRightVOffset: 0,
                keyboardNavigation: "on",
                touchenabled: "on",
                onHoverStop: "on",
                stopAtSlide: -1,
                stopAfterLoops: -1,
                hideCaptionAtLimit: 0,
                hideAllCaptionAtLimit: 0,
                hideSliderAtLimit: 0,
                shadow: 0,
                fullWidth: "off",
                fullScreen: "off",
                minFullScreenHeight: 0,
                fullScreenOffsetContainer: "",
                fullScreenOffset: "0",
                dottedOverlay: "none",
                forceFullWidth: "off",
                spinner: "spinner0",
                swipe_treshold: 75,
                swipe_min_touches: 1,
                drag_block_vertical: false,
                isJoomla: false,
                parallax: "off",
                parallaxLevels: [10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85],
                parallaxBgFreeze: "off",
                parallaxOpacity: "on",
                parallaxDisableOnMobile: "off",
                panZoomDisableOnMobile: "off",
                simplifyAll: "on",
                minHeight: 0,
                nextSlideOnWindowFocus: "off",
                startDelay: 0
            };
            b = a2.extend({}, a, b);
            return this.each(function () {
                if (window.tplogs == true) {
                    try {
                        console.groupCollapsed("Slider Revolution 4.6.3 Initialisation on " + a2(this).attr("id"));
                        console.groupCollapsed("Used Options:");
                        console.info(b);
                        console.groupEnd();
                        console.groupCollapsed("Tween Engine:")
                    } catch (c) {
                    }
                }
                if (punchgs.TweenLite == aK) {
                    if (window.tplogs == true) {
                        try {
                            console.error("GreenSock Engine Does not Exist!")
                        } catch (c) {
                        }
                    }
                    return false
                }
                punchgs.force3D = true;
                if (window.tplogs == true) {
                    try {
                        console.info("GreenSock Engine Version in Slider Revolution:" + punchgs.TweenLite.version)
                    } catch (c) {
                    }
                }
                if (b.simplifyAll == "on") {
                } else {
                    punchgs.TweenLite.lagSmoothing(1000, 16);
                    punchgs.force3D = "true"
                }
                if (window.tplogs == true) {
                    try {
                        console.groupEnd();
                        console.groupEnd()
                    } catch (c) {
                    }
                }
                aM(a2(this), b)
            })
        }, revscroll: function (a) {
            return this.each(function () {
                var b = a2(this);
                if (b != aK && b.length > 0 && a2("body").find("#" + b.attr("id")).length > 0) {
                    a2("body,html").animate({scrollTop: b.offset().top + b.find(">ul >li").height() - a + "px"}, {duration: 400})
                }
            })
        }, revredraw: function (a) {
            return this.each(function () {
                var d = a2(this);
                if (d != aK && d.length > 0 && a2("body").find("#" + d.attr("id")).length > 0) {
                    var c = d.parent().find(".tp-bannertimer");
                    var b = c.data("opt");
                    aJ(d, b)
                }
            })
        }, revkill: function (h) {
            var f = this, d = a2(this);
            if (d != aK && d.length > 0 && a2("body").find("#" + d.attr("id")).length > 0) {
                d.data("conthover", 1);
                d.data("conthover-changed", 1);
                d.trigger("revolution.slide.onpause");
                var e = d.parent().find(".tp-bannertimer");
                var g = e.data("opt");
                g.bannertimeronpause = true;
                d.trigger("stoptimer");
                punchgs.TweenLite.killTweensOf(d.find("*"), false);
                punchgs.TweenLite.killTweensOf(d, false);
                d.unbind("hover, mouseover, mouseenter,mouseleave, resize");
                var c = "resize.revslider-" + d.attr("id");
                a2(window).off(c);
                d.find("*").each(function () {
                    var a = a2(this);
                    a.unbind("on, hover, mouseenter,mouseleave,mouseover, resize,restarttimer, stoptimer");
                    a.off("on, hover, mouseenter,mouseleave,mouseover, resize");
                    a.data("mySplitText", null);
                    a.data("ctl", null);
                    if (a.data("tween") != aK) {
                        a.data("tween").kill()
                    }
                    if (a.data("kenburn") != aK) {
                        a.data("kenburn").kill()
                    }
                    a.remove();
                    a.empty();
                    a = null
                });
                punchgs.TweenLite.killTweensOf(d.find("*"), false);
                punchgs.TweenLite.killTweensOf(d, false);
                e.remove();
                try {
                    d.closest(".forcefullwidth_wrapper_tp_banner").remove()
                } catch (b) {
                }
                try {
                    d.closest(".rev_slider_wrapper").remove()
                } catch (b) {
                }
                try {
                    d.remove()
                } catch (b) {
                }
                d.empty();
                d.html();
                d = null;
                g = null;
                delete f.container;
                delete f.opt;
                return true
            } else {
                return false
            }
        }, revpause: function (a) {
            return this.each(function () {
                var d = a2(this);
                if (d != aK && d.length > 0 && a2("body").find("#" + d.attr("id")).length > 0) {
                    d.data("conthover", 1);
                    d.data("conthover-changed", 1);
                    d.trigger("revolution.slide.onpause");
                    var c = d.parent().find(".tp-bannertimer");
                    var b = c.data("opt");
                    b.bannertimeronpause = true;
                    d.trigger("stoptimer")
                }
            })
        }, revresume: function (a) {
            return this.each(function () {
                var d = a2(this);
                if (d != aK && d.length > 0 && a2("body").find("#" + d.attr("id")).length > 0) {
                    d.data("conthover", 0);
                    d.data("conthover-changed", 1);
                    d.trigger("revolution.slide.onresume");
                    var c = d.parent().find(".tp-bannertimer");
                    var b = c.data("opt");
                    b.bannertimeronpause = false;
                    d.trigger("starttimer")
                }
            })
        }, revnext: function (a) {
            return this.each(function () {
                var b = a2(this);
                if (b != aK && b.length > 0 && a2("body").find("#" + b.attr("id")).length > 0) {
                    b.parent().find(".tp-rightarrow").click()
                }
            })
        }, revprev: function (a) {
            return this.each(function () {
                var b = a2(this);
                if (b != aK && b.length > 0 && a2("body").find("#" + b.attr("id")).length > 0) {
                    b.parent().find(".tp-leftarrow").click()
                }
            })
        }, revmaxslide: function (a) {
            return a2(this).find(">ul:first-child >li").length
        }, revcurrentslide: function (d) {
            var c = a2(this);
            if (c != aK && c.length > 0 && a2("body").find("#" + c.attr("id")).length > 0) {
                var a = c.parent().find(".tp-bannertimer");
                var b = a.data("opt");
                return b.act
            }
        }, revlastslide: function (d) {
            var c = a2(this);
            if (c != aK && c.length > 0 && a2("body").find("#" + c.attr("id")).length > 0) {
                var a = c.parent().find(".tp-bannertimer");
                var b = a.data("opt");
                return b.lastslide
            }
        }, revshowslide: function (a) {
            return this.each(function () {
                var b = a2(this);
                if (b != aK && b.length > 0 && a2("body").find("#" + b.attr("id")).length > 0) {
                    b.data("showus", a);
                    b.parent().find(".tp-rightarrow").click()
                }
            })
        }
    });
    var aX = function () {
        var b, a, c = {
            hidden: "visibilitychange",
            webkitHidden: "webkitvisibilitychange",
            mozHidden: "mozvisibilitychange",
            msHidden: "msvisibilitychange"
        };
        for (b in c) {
            if (b in document) {
                a = c[b];
                break
            }
        }
        return function (d) {
            if (d) {
                document.addEventListener(a, d)
            }
            return !document[b]
        }
    }();
    var aL = function (d, c) {
        var a = document.documentMode === aK, b = window.chrome;
        if (a && !b) {
            a2(window).on("focusin", function () {
                if (d == aK) {
                    return false
                }
                setTimeout(function () {
                    if (c.nextSlideOnWindowFocus == "on") {
                        d.revnext()
                    }
                    d.revredraw()
                }, 300)
            }).on("focusout", function () {
            })
        } else {
            if (window.addEventListener) {
                window.addEventListener("focus", function (f) {
                    if (d == aK) {
                        return false
                    }
                    setTimeout(function () {
                        if (c.nextSlideOnWindowFocus == "on") {
                            d.revnext()
                        }
                        d.revredraw()
                    }, 300)
                }, false);
                window.addEventListener("blur", function (f) {
                }, false)
            } else {
                window.attachEvent("focus", function (f) {
                    setTimeout(function () {
                        if (d == aK) {
                            return false
                        }
                        if (c.nextSlideOnWindowFocus == "on") {
                            d.revnext()
                        }
                        d.revredraw()
                    }, 300)
                });
                window.attachEvent("blur", function (f) {
                })
            }
        }
    };
    var aQ = function (d) {
        var b = [], f;
        var c = window.location.href.slice(window.location.href.indexOf(d) + 1).split("_");
        for (var a = 0; a < c.length; a++) {
            c[a] = c[a].replace("%3D", "=");
            f = c[a].split("=");
            b.push(f[0]);
            b[f[0]] = f[1]
        }
        return b
    };
    var aJ = function (e, b) {
        if (e == aK) {
            return false
        }
        try {
            if (b.hideThumbsUnderResoluition != 0 && b.navigationType == "thumb") {
                if (b.hideThumbsUnderResoluition > a2(window).width()) {
                    a2(".tp-bullets").css({display: "none"})
                } else {
                    a2(".tp-bullets").css({display: "block"})
                }
            }
        } catch (h) {
        }
        e.find(".defaultimg").each(function (a) {
            aZ(a2(this), b)
        });
        var p = e.parent();
        if (a2(window).width() < b.hideSliderAtLimit) {
            e.trigger("stoptimer");
            if (p.css("display") != "none") {
                p.data("olddisplay", p.css("display"))
            }
            p.css({display: "none"})
        } else {
            if (e.is(":hidden")) {
                if (p.data("olddisplay") != aK && p.data("olddisplay") != "undefined" && p.data("olddisplay") != "none") {
                    p.css({display: p.data("olddisplay")})
                } else {
                    p.css({display: "block"})
                }
                e.trigger("restarttimer");
                setTimeout(function () {
                    aJ(e, b)
                }, 150)
            }
        }
        var d = 0;
        if (b.forceFullWidth == "on") {
            d = 0 - b.container.parent().offset().left
        }
        try {
            e.parent().find(".tp-bannershadow").css({width: b.width, left: d})
        } catch (h) {
        }
        var m = e.find(">ul >li:eq(" + b.act + ") .slotholder");
        var j = e.find(">ul >li:eq(" + b.next + ") .slotholder");
        aw(e, b, e);
        punchgs.TweenLite.set(j.find(".defaultimg"), {opacity: 0});
        m.find(".defaultimg").css({opacity: 1});
        j.find(".defaultimg").each(function () {
            var a = a2(this);
            if (b.panZoomDisableOnMobile == "on") {
            } else {
                if (a.data("kenburn") != aK) {
                    a.data("kenburn").restart();
                    aj(e, b, true)
                }
            }
        });
        var g = e.find(">ul >li:eq(" + b.next + ")");
        var k = e.parent().find(".tparrows");
        if (k.hasClass("preview2")) {
            k.css({width: parseInt(k.css("minWidth"), 0)})
        }
        aW(g, b, true);
        aI(e, b)
    };
    var a6 = function (b, d) {
        var c = a2('<div style="display:none;"/>').appendTo(a2("body"));
        c.html("<!--[if " + (d || "") + " IE " + (b || "") + "]><a>&nbsp;</a><![endif]-->");
        var a = c.find("a").length;
        c.remove();
        return a
    };
    var a1 = function (b, a) {
        if (b.next == a.find(">ul >li").length - 1) {
            b.looptogo = b.looptogo - 1;
            if (b.looptogo <= 0) {
                b.stopLoop = "on"
            }
        }
        am(a, b)
    };
    var aT = function (b, d) {
        var c = "hidebullets";
        if (d.hideThumbs == 0) {
            c = ""
        }
        if (d.navigationType == "bullet" || d.navigationType == "both") {
            b.parent().append('<div class="tp-bullets ' + c + " simplebullets " + d.navigationStyle + '"></div>')
        }
        var a = b.parent().find(".tp-bullets");
        b.find(">ul:first >li").each(function (g) {
            var h = b.find(">ul:first >li:eq(" + g + ") img:first").attr("src");
            a.append('<div class="bullet"></div>');
            var f = a.find(".bullet:first")
        });
        a.find(".bullet").each(function (f) {
            var e = a2(this);
            if (f == d.slideamount - 1) {
                e.addClass("last")
            }
            if (f == 0) {
                e.addClass("first")
            }
            e.click(function () {
                var h = false, g = e.index();
                if (d.navigationArrows == "withbullet" || d.navigationArrows == "nexttobullets") {
                    g = e.index() - 1
                }
                if (g == d.act) {
                    h = true
                }
                if (d.transition == 0 && !h) {
                    d.next = g;
                    a1(d, b)
                }
            })
        });
        a.append('<div class="tpclear"></div>');
        aI(b, d)
    };
    var a4 = function (f, h) {
        function a(e) {
            f.parent().append('<div style="' + b + '" class="tp-' + e + "arrow " + c + " tparrows " + g + '"><div class="tp-arr-allwrapper"><div class="tp-arr-iwrapper"><div class="tp-arr-imgholder"></div><div class="tp-arr-imgholder2"></div><div class="tp-arr-titleholder"></div><div class="tp-arr-subtitleholder"></div></div></div></div>')
        }

        var d = f.find(".tp-bullets"), b = "", c = "hidearrows", g = h.navigationStyle;
        if (h.hideThumbs == 0) {
            c = ""
        }
        if (h.navigationArrows == "none") {
            b = "visibility:hidden;display:none"
        }
        h.soloArrowStyle = "default " + h.navigationStyle;
        if (h.navigationArrows != "none" && h.navigationArrows != "nexttobullets") {
            g = h.soloArrowStyle
        }
        a("left");
        a("right");
        f.parent().find(".tp-rightarrow").click(function () {
            if (h.transition == 0) {
                if (f.data("showus") != aK && f.data("showus") != -1) {
                    h.next = f.data("showus") - 1
                } else {
                    h.next = h.next + 1
                }
                f.data("showus", -1);
                if (h.next >= h.slideamount) {
                    h.next = 0
                }
                if (h.next < 0) {
                    h.next = 0
                }
                if (h.act != h.next) {
                    a1(h, f)
                }
            }
        });
        f.parent().find(".tp-leftarrow").click(function () {
            if (h.transition == 0) {
                h.next = h.next - 1;
                h.leftarrowpressed = 1;
                if (h.next < 0) {
                    h.next = h.slideamount - 1
                }
                a1(h, f)
            }
        });
        aI(f, h)
    };
    var aY = function (b, a) {
        a2(document).keydown(function (c) {
            if (a.transition == 0 && c.keyCode == 39) {
                if (b.data("showus") != aK && b.data("showus") != -1) {
                    a.next = b.data("showus") - 1
                } else {
                    a.next = a.next + 1
                }
                b.data("showus", -1);
                if (a.next >= a.slideamount) {
                    a.next = 0
                }
                if (a.next < 0) {
                    a.next = 0
                }
                if (a.act != a.next) {
                    a1(a, b)
                }
            }
            if (a.transition == 0 && c.keyCode == 37) {
                a.next = a.next - 1;
                a.leftarrowpressed = 1;
                if (a.next < 0) {
                    a.next = a.slideamount - 1
                }
                a1(a, b)
            }
        });
        aI(b, a)
    };
    var aP = function (a, c) {
        var b = "vertical";
        if (c.touchenabled == "on") {
            if (c.drag_block_vertical == true) {
                b = "none"
            }
            a.swipe({
                allowPageScroll: b,
                fingers: c.swipe_min_touches,
                treshold: c.swipe_treshold,
                swipe: function (g, h, j, f, e, d) {
                    switch (h) {
                        case"left":
                            if (c.transition == 0) {
                                c.next = c.next + 1;
                                if (c.next == c.slideamount) {
                                    c.next = 0
                                }
                                a1(c, a)
                            }
                            break;
                        case"right":
                            if (c.transition == 0) {
                                c.next = c.next - 1;
                                c.leftarrowpressed = 1;
                                if (c.next < 0) {
                                    c.next = c.slideamount - 1
                                }
                                a1(c, a)
                            }
                            break;
                        case"up":
                            if (b == "none") {
                                a2("html, body").animate({scrollTop: a.offset().top + a.height() + "px"})
                            }
                            break;
                        case"down":
                            if (b == "none") {
                                a2("html, body").animate({scrollTop: a.offset().top - a2(window).height() + "px"})
                            }
                            break
                    }
                }
            })
        }
    };
    var a3 = function (d, b) {
        var f = d.parent().find(".tp-bullets"), c = d.parent().find(".tparrows");
        if (f == null) {
            d.append('<div class=".tp-bullets"></div>');
            var f = d.parent().find(".tp-bullets")
        }
        if (c == null) {
            d.append('<div class=".tparrows"></div>');
            var c = d.parent().find(".tparrows")
        }
        d.data("hideThumbs", b.hideThumbs);
        f.addClass("hidebullets");
        c.addClass("hidearrows");
        if (aq()) {
            try {
                d.hammer().on("touch", function () {
                    d.addClass("hovered");
                    if (b.onHoverStop == "on") {
                        d.trigger("stoptimer")
                    }
                    clearTimeout(d.data("hideThumbs"));
                    f.removeClass("hidebullets");
                    c.removeClass("hidearrows")
                });
                d.hammer().on("release", function () {
                    d.removeClass("hovered");
                    d.trigger("starttimer");
                    if (!d.hasClass("hovered") && !f.hasClass("hovered")) {
                        d.data("hideThumbs", setTimeout(function () {
                            f.addClass("hidebullets");
                            c.addClass("hidearrows");
                            d.trigger("starttimer")
                        }, b.hideNavDelayOnMobile))
                    }
                })
            } catch (a) {
            }
        } else {
            f.hover(function () {
                b.overnav = true;
                if (b.onHoverStop == "on") {
                    d.trigger("stoptimer")
                }
                f.addClass("hovered");
                clearTimeout(d.data("hideThumbs"));
                f.removeClass("hidebullets");
                c.removeClass("hidearrows")
            }, function () {
                b.overnav = false;
                d.trigger("starttimer");
                f.removeClass("hovered");
                if (!d.hasClass("hovered") && !f.hasClass("hovered")) {
                    d.data("hideThumbs", setTimeout(function () {
                        f.addClass("hidebullets");
                        c.addClass("hidearrows")
                    }, b.hideThumbs))
                }
            });
            c.hover(function () {
                b.overnav = true;
                if (b.onHoverStop == "on") {
                    d.trigger("stoptimer")
                }
                f.addClass("hovered");
                clearTimeout(d.data("hideThumbs"));
                f.removeClass("hidebullets");
                c.removeClass("hidearrows")
            }, function () {
                b.overnav = false;
                d.trigger("starttimer");
                f.removeClass("hovered")
            });
            d.on("mouseenter", function () {
                d.addClass("hovered");
                if (b.onHoverStop == "on") {
                    d.trigger("stoptimer")
                }
                clearTimeout(d.data("hideThumbs"));
                f.removeClass("hidebullets");
                c.removeClass("hidearrows")
            });
            d.on("mouseleave", function () {
                d.removeClass("hovered");
                d.trigger("starttimer");
                if (!d.hasClass("hovered") && !f.hasClass("hovered")) {
                    d.data("hideThumbs", setTimeout(function () {
                        f.addClass("hidebullets");
                        c.addClass("hidearrows")
                    }, b.hideThumbs))
                }
            })
        }
    };
    var aI = function (B, H) {
        var D = B.parent();
        var K = D.find(".tp-bullets");
        if (H.navigationType == "thumb") {
            K.find(".thumb").each(function (a) {
                var b = a2(this);
                b.css({width: H.thumbWidth * H.bw + "px", height: H.thumbHeight * H.bh + "px"})
            });
            var C = K.find(".tp-mask");
            C.width(H.thumbWidth * H.thumbAmount * H.bw);
            C.height(H.thumbHeight * H.bh);
            C.parent().width(H.thumbWidth * H.thumbAmount * H.bw);
            C.parent().height(H.thumbHeight * H.bh)
        }
        var G = D.find(".tp-leftarrow");
        var z = D.find(".tp-rightarrow");
        if (H.navigationType == "thumb" && H.navigationArrows == "nexttobullets") {
            H.navigationArrows = "solo"
        }
        if (H.navigationArrows == "nexttobullets") {
            G.prependTo(K).css({"float": "left"});
            z.insertBefore(K.find(".tpclear")).css({"float": "left"})
        }
        var R = 0;
        if (H.forceFullWidth == "on") {
            R = 0 - H.container.parent().offset().left
        }
        var N = 0, J = 0;
        if (H.navigationInGrid == "on") {
            N = B.width() > H.startwidth ? (B.width() - H.startwidth) / 2 : 0, J = B.height() > H.startheight ? (B.height() - H.startheight) / 2 : 0
        }
        if (H.navigationArrows != "none" && H.navigationArrows != "nexttobullets") {
            var P = H.soloArrowLeftValign, L = H.soloArrowLeftHalign, F = H.soloArrowRightValign,
                O = H.soloArrowRightHalign, x = H.soloArrowLeftVOffset, I = H.soloArrowLeftHOffset,
                M = H.soloArrowRightVOffset, j = H.soloArrowRightHOffset;
            G.css({position: "absolute"});
            z.css({position: "absolute"});
            if (P == "center") {
                G.css({top: "50%", marginTop: x - Math.round(G.innerHeight() / 2) + "px"})
            } else {
                if (P == "bottom") {
                    G.css({top: "auto", bottom: 0 + x + "px"})
                } else {
                    if (P == "top") {
                        G.css({bottom: "auto", top: 0 + x + "px"})
                    }
                }
            }
            if (L == "center") {
                G.css({left: "50%", marginLeft: R + I - Math.round(G.innerWidth() / 2) + "px"})
            } else {
                if (L == "left") {
                    G.css({left: N + I + R + "px"})
                } else {
                    if (L == "right") {
                        G.css({right: N + I - R + "px"})
                    }
                }
            }
            if (F == "center") {
                z.css({top: "50%", marginTop: M - Math.round(z.innerHeight() / 2) + "px"})
            } else {
                if (F == "bottom") {
                    z.css({top: "auto", bottom: 0 + M + "px"})
                } else {
                    if (F == "top") {
                        z.css({bottom: "auto", top: 0 + M + "px"})
                    }
                }
            }
            if (O == "center") {
                z.css({left: "50%", marginLeft: R + j - Math.round(z.innerWidth() / 2) + "px"})
            } else {
                if (O == "left") {
                    z.css({left: N + j + R + "px"})
                } else {
                    if (O == "right") {
                        z.css({right: N + j - R + "px"})
                    }
                }
            }
            if (G.position() != null) {
                G.css({top: Math.round(parseInt(G.position().top, 0)) + "px"})
            }
            if (z.position() != null) {
                z.css({top: Math.round(parseInt(z.position().top, 0)) + "px"})
            }
        }
        if (H.navigationArrows == "none") {
            G.css({visibility: "hidden"});
            z.css({visibility: "hidden"})
        }
        var Q = H.navigationVAlign, k = H.navigationHAlign, A = H.navigationVOffset * H.bh,
            e = H.navigationHOffset * H.bw;
        if (Q == "center") {
            K.css({top: "50%", marginTop: A - Math.round(K.innerHeight() / 2) + "px"})
        }
        if (Q == "bottom") {
            K.css({bottom: 0 + A + "px"})
        }
        if (Q == "top") {
            K.css({top: 0 + A + "px"})
        }
        if (k == "center") {
            K.css({left: "50%", marginLeft: R + e - Math.round(K.innerWidth() / 2) + "px"})
        }
        if (k == "left") {
            K.css({left: 0 + e + R + "px"})
        }
        if (k == "right") {
            K.css({right: 0 + e - R + "px"})
        }
    };
    var aS = function (k) {
        var b = k.container;
        k.beforli = k.next - 1;
        k.comingli = k.next + 1;
        if (k.beforli < 0) {
            k.beforli = k.slideamount - 1
        }
        if (k.comingli >= k.slideamount) {
            k.comingli = 0
        }
        var x = b.find(">ul:first-child >li:eq(" + k.comingli + ")"),
            G = b.find(">ul:first-child >li:eq(" + k.beforli + ")"), j = G.find(".defaultimg").attr("src"),
            F = x.find(".defaultimg").attr("src");
        if (k.arr == aK) {
            k.arr = b.parent().find(".tparrows"), k.rar = b.parent().find(".tp-rightarrow"), k.lar = b.parent().find(".tp-leftarrow"), k.raimg = k.rar.find(".tp-arr-imgholder"), k.laimg = k.lar.find(".tp-arr-imgholder"), k.raimg_b = k.rar.find(".tp-arr-imgholder2"), k.laimg_b = k.lar.find(".tp-arr-imgholder2"), k.ratit = k.rar.find(".tp-arr-titleholder"), k.latit = k.lar.find(".tp-arr-titleholder")
        }
        var D = k.arr, A = k.rar, w = k.lar, C = k.raimg, y = k.laimg, e = k.raimg_b, B = k.laimg_b, E = k.ratit,
            t = k.latit;
        if (x.data("title") != aK) {
            E.html(x.data("title"))
        }
        if (G.data("title") != aK) {
            t.html(G.data("title"))
        }
        if (A.hasClass("itishovered")) {
            A.width(E.outerWidth(true) + parseInt(A.css("minWidth"), 0))
        }
        if (w.hasClass("itishovered")) {
            w.width(t.outerWidth(true) + parseInt(w.css("minWidth"), 0))
        }
        if (D.hasClass("preview2") && !D.hasClass("hashoveralready")) {
            D.addClass("hashoveralready");
            if (!aq()) {
                D.hover(function () {
                    var a = a2(this), c = a.find(".tp-arr-titleholder");
                    if (a2(window).width() > 767) {
                        a.width(c.outerWidth(true) + parseInt(a.css("minWidth"), 0))
                    }
                    a.addClass("itishovered")
                }, function () {
                    var a = a2(this), c = a.find(".tp-arr-titleholder");
                    a.css({width: parseInt(a.css("minWidth"), 0)});
                    a.removeClass("itishovered")
                })
            } else {
                var D = a2(this), z = D.find(".tp-arr-titleholder");
                z.addClass("alwayshidden");
                punchgs.TweenLite.set(z, {autoAlpha: 0})
            }
        }
        if (G.data("thumb") != aK) {
            j = G.data("thumb")
        }
        if (x.data("thumb") != aK) {
            F = x.data("thumb")
        }
        if (!D.hasClass("preview4")) {
            punchgs.TweenLite.to(C, 0.5, {
                autoAlpha: 0, onComplete: function () {
                    C.css({backgroundImage: "url(" + F + ")"});
                    y.css({backgroundImage: "url(" + j + ")"})
                }
            });
            punchgs.TweenLite.to(y, 0.5, {
                autoAlpha: 0, onComplete: function () {
                    punchgs.TweenLite.to(C, 0.5, {autoAlpha: 1, delay: 0.2});
                    punchgs.TweenLite.to(y, 0.5, {autoAlpha: 1, delay: 0.2})
                }
            })
        } else {
            e.css({backgroundImage: "url(" + F + ")"});
            B.css({backgroundImage: "url(" + j + ")"});
            punchgs.TweenLite.fromTo(e, 0.8, {force3D: punchgs.force3d, x: 0}, {
                x: -C.width(),
                ease: punchgs.Power3.easeOut,
                delay: 1,
                onComplete: function () {
                    C.css({backgroundImage: "url(" + F + ")"});
                    punchgs.TweenLite.set(e, {x: 0})
                }
            });
            punchgs.TweenLite.fromTo(B, 0.8, {force3D: punchgs.force3d, x: 0}, {
                x: C.width(),
                ease: punchgs.Power3.easeOut,
                delay: 1,
                onComplete: function () {
                    y.css({backgroundImage: "url(" + j + ")"});
                    punchgs.TweenLite.set(B, {x: 0})
                }
            });
            punchgs.TweenLite.fromTo(C, 0.8, {x: 0}, {
                force3D: punchgs.force3d,
                x: -C.width(),
                ease: punchgs.Power3.easeOut,
                delay: 1,
                onComplete: function () {
                    punchgs.TweenLite.set(C, {x: 0})
                }
            });
            punchgs.TweenLite.fromTo(y, 0.8, {x: 0}, {
                force3D: punchgs.force3d,
                x: C.width(),
                ease: punchgs.Power3.easeOut,
                delay: 1,
                onComplete: function () {
                    punchgs.TweenLite.set(y, {x: 0})
                }
            })
        }
        if (A.hasClass("preview4") && !A.hasClass("hashoveralready")) {
            A.addClass("hashoveralready");
            A.hover(function () {
                var a = a2(this).find(".tp-arr-iwrapper");
                var c = a2(this).find(".tp-arr-allwrapper");
                punchgs.TweenLite.fromTo(a, 0.4, {x: a.width()}, {
                    x: 0,
                    delay: 0.3,
                    ease: punchgs.Power3.easeOut,
                    overwrite: "all"
                });
                punchgs.TweenLite.to(c, 0.2, {autoAlpha: 1, overwrite: "all"})
            }, function () {
                var a = a2(this).find(".tp-arr-iwrapper");
                var c = a2(this).find(".tp-arr-allwrapper");
                punchgs.TweenLite.to(a, 0.4, {
                    x: a.width(),
                    ease: punchgs.Power3.easeOut,
                    delay: 0.2,
                    overwrite: "all"
                });
                punchgs.TweenLite.to(c, 0.2, {delay: 0.6, autoAlpha: 0, overwrite: "all"})
            });
            w.hover(function () {
                var a = a2(this).find(".tp-arr-iwrapper");
                var c = a2(this).find(".tp-arr-allwrapper");
                punchgs.TweenLite.fromTo(a, 0.4, {x: 0 - a.width()}, {
                    x: 0,
                    delay: 0.3,
                    ease: punchgs.Power3.easeOut,
                    overwrite: "all"
                });
                punchgs.TweenLite.to(c, 0.2, {autoAlpha: 1, overwrite: "all"})
            }, function () {
                var a = a2(this).find(".tp-arr-iwrapper");
                var c = a2(this).find(".tp-arr-allwrapper");
                punchgs.TweenLite.to(a, 0.4, {
                    x: 0 - a.width(),
                    ease: punchgs.Power3.easeOut,
                    delay: 0.2,
                    overwrite: "all"
                });
                punchgs.TweenLite.to(c, 0.2, {delay: 0.6, autoAlpha: 0, overwrite: "all"})
            })
        }
    };
    var aZ = function (f, d) {
        d.container.closest(".forcefullwidth_wrapper_tp_banner").find(".tp-fullwidth-forcer").css({height: d.container.height()});
        d.container.closest(".rev_slider_wrapper").css({height: d.container.height()});
        d.width = parseInt(d.container.width(), 0);
        d.height = parseInt(d.container.height(), 0);
        d.bw = d.width / d.startwidth;
        d.bh = d.height / d.startheight;
        if (d.bh > d.bw) {
            d.bh = d.bw
        }
        if (d.bh < d.bw) {
            d.bw = d.bh
        }
        if (d.bw < d.bh) {
            d.bh = d.bw
        }
        if (d.bh > 1) {
            d.bw = 1;
            d.bh = 1
        }
        if (d.bw > 1) {
            d.bw = 1;
            d.bh = 1
        }
        d.height = Math.round(d.startheight * (d.width / d.startwidth));
        if (d.height > d.startheight && d.autoHeight != "on") {
            d.height = d.startheight
        }
        if (d.fullScreen == "on") {
            d.height = d.bw * d.startheight;
            var b = d.container.parent().width();
            var c = a2(window).height();
            if (d.fullScreenOffsetContainer != aK) {
                try {
                    var e = d.fullScreenOffsetContainer.split(",");
                    a2.each(e, function (g, h) {
                        c = c - a2(h).outerHeight(true);
                        if (c < d.minFullScreenHeight) {
                            c = d.minFullScreenHeight
                        }
                    })
                } catch (a) {
                }
                try {
                    if (d.fullScreenOffset.split("%").length > 1 && d.fullScreenOffset != aK && d.fullScreenOffset.length > 0) {
                        c = c - a2(window).height() * parseInt(d.fullScreenOffset, 0) / 100
                    } else {
                        if (d.fullScreenOffset != aK && d.fullScreenOffset.length > 0) {
                            c = c - parseInt(d.fullScreenOffset, 0)
                        }
                    }
                    if (c < d.minFullScreenHeight) {
                        c = d.minFullScreenHeight
                    }
                } catch (a) {
                }
            }
            d.container.parent().height(c);
            d.container.closest(".rev_slider_wrapper").height(c);
            d.container.css({height: "100%"});
            d.height = c;
            if (d.minHeight != aK && d.height < d.minHeight) {
                d.height = d.minHeight
            }
        } else {
            if (d.minHeight != aK && d.height < d.minHeight) {
                d.height = d.minHeight
            }
            d.container.height(d.height)
        }
        d.slotw = Math.ceil(d.width / d.slots);
        if (d.fullScreen == "on") {
            d.sloth = Math.ceil(a2(window).height() / d.slots)
        } else {
            d.sloth = Math.ceil(d.height / d.slots)
        }
        if (d.autoHeight == "on") {
            d.sloth = Math.ceil(f.height() / d.slots)
        }
    };
    var aF = function (b, a) {
        b.find(".tp-caption").each(function () {
            a2(this).addClass(a2(this).data("transition"));
            a2(this).addClass("start")
        });
        b.find(">ul:first").css({
            overflow: "hidden",
            width: "100%",
            height: "100%",
            maxHeight: b.parent().css("maxHeight")
        }).addClass("tp-revslider-mainul");
        if (a.autoHeight == "on") {
            b.find(">ul:first").css({overflow: "hidden", width: "100%", height: "100%", maxHeight: "none"});
            b.css({maxHeight: "none"});
            b.parent().css({maxHeight: "none"})
        }
        b.find(">ul:first >li").each(function (h) {
            var e = a2(this);
            e.addClass("tp-revslider-slidesli");
            e.css({width: "100%", height: "100%", overflow: "hidden"});
            if (e.data("link") != aK) {
                var g = e.data("link");
                var k = "_self";
                var d = 60;
                if (e.data("slideindex") == "back") {
                    d = 0
                }
                var c = checksl = e.data("linktoslide");
                if (c != aK) {
                    if (c != "next" && c != "prev") {
                        b.find(">ul:first-child >li").each(function () {
                            var f = a2(this);
                            if (f.data("origindex") + 1 == checksl) {
                                c = f.index() + 1
                            }
                        })
                    }
                }
                if (e.data("target") != aK) {
                    k = e.data("target")
                }
                if (g != "slide") {
                    c = "no"
                }
                var j = '<div class="tp-caption sft slidelink" style="width:100%;height:100%;z-index:' + d + ';" data-x="center" data-y="center" data-linktoslide="' + c + '" data-start="0"><a style="width:100%;height:100%;display:block"';
                if (g != "slide") {
                    j = j + ' target="' + k + '" href="' + g + '"'
                }
                j = j + '><span style="width:100%;height:100%;display:block"></span></a></div>';
                e.append(j)
            }
        });
        b.parent().css({overflow: "visible"});
        b.find(">ul:first >li >img").each(function (p) {
            var g = a2(this);
            g.addClass("defaultimg");
            if (g.data("lazyload") != aK && g.data("lazydone") != 1) {
            } else {
                aZ(g, a)
            }
            if (a6(8)) {
                g.data("kenburns", "off")
            }
            if (a.panZoomDisableOnMobile == "on" && aq()) {
                g.data("kenburns", "off");
                g.data("bgfit", "cover")
            }
            g.wrap('<div class="slotholder" style="width:100%;height:100%;"data-duration="' + g.data("duration") + '"data-zoomstart="' + g.data("zoomstart") + '"data-zoomend="' + g.data("zoomend") + '"data-rotationstart="' + g.data("rotationstart") + '"data-rotationend="' + g.data("rotationend") + '"data-ease="' + g.data("ease") + '"data-duration="' + g.data("duration") + '"data-bgpositionend="' + g.data("bgpositionend") + '"data-bgposition="' + g.data("bgposition") + '"data-duration="' + g.data("duration") + '"data-kenburns="' + g.data("kenburns") + '"data-easeme="' + g.data("ease") + '"data-bgfit="' + g.data("bgfit") + '"data-bgfitend="' + g.data("bgfitend") + '"data-owidth="' + g.data("owidth") + '"data-oheight="' + g.data("oheight") + '"></div>');
            if (a.dottedOverlay != "none" && a.dottedOverlay != aK) {
                g.closest(".slotholder").append('<div class="tp-dottedoverlay ' + a.dottedOverlay + '"></div>')
            }
            var h = g.attr("src"), k = g.data("lazyload"), e = g.data("bgfit"), j = g.data("bgrepeat"),
                d = g.data("bgposition");
            if (e == aK) {
                e = "cover"
            }
            if (j == aK) {
                j = "no-repeat"
            }
            if (d == aK) {
                d = "center center"
            }
            var m = g.closest(".slotholder");
            g.replaceWith('<div class="tp-bgimg defaultimg" data-lazyload="' + g.data("lazyload") + '" data-bgfit="' + e + '"data-bgposition="' + d + '" data-bgrepeat="' + j + '" data-lazydone="' + g.data("lazydone") + '" src="' + h + '" data-src="' + h + '" style="background-color:' + g.css("backgroundColor") + ";background-repeat:" + j + ";background-image:url(" + h + ");background-size:" + e + ";background-position:" + d + ';width:100%;height:100%;"></div>');
            if (a6(8)) {
                m.find(".tp-bgimg").css({backgroundImage: "none", "background-image": "none"});
                m.find(".tp-bgimg").append('<img class="ieeightfallbackimage defaultimg" src="' + h + '" style="width:100%">')
            }
            g.css({opacity: 0});
            g.data("li-id", p)
        })
    };
    var a5 = function (R, J, G, O) {
        var D = R, I = D.find(".defaultimg"), A = D.data("zoomstart"), Q = D.data("rotationstart");
        if (I.data("currotate") != aK) {
            Q = I.data("currotate")
        }
        if (I.data("curscale") != aK && O == "box") {
            A = I.data("curscale") * 100
        } else {
            if (I.data("curscale") != aK) {
                A = I.data("curscale")
            }
        }
        aZ(I, J);
        var L = I.data("src"), V = I.css("backgroundColor"), P = J.width, H = J.height, U = I.data("fxof"), z = 0;
        if (J.autoHeight == "on") {
            H = J.container.height()
        }
        if (U == aK) {
            U = 0
        }
        var K = 0, t = I.data("bgfit"), W = I.data("bgrepeat"), B = I.data("bgposition");
        if (t == aK) {
            t = "cover"
        }
        if (W == aK) {
            W = "no-repeat"
        }
        if (B == aK) {
            B = "center center"
        }
        if (a6(8)) {
            D.data("kenburns", "off");
            var g = L;
            L = ""
        }
        switch (O) {
            case"box":
                var w = 0, a = 0, j = 0;
                if (J.sloth > J.slotw) {
                    w = J.sloth
                } else {
                    w = J.slotw
                }
                if (!G) {
                    var K = 0 - w
                }
                J.slotw = w;
                J.sloth = w;
                var a = 0;
                var j = 0;
                if (D.data("kenburns") == "on") {
                    t = A;
                    if (t.toString().length < 4) {
                        t = ap(t, D, J)
                    }
                }
                for (var F = 0; F < J.slots; F++) {
                    j = 0;
                    for (var M = 0; M < J.slots; M++) {
                        D.append('<div class="slot" style="position:absolute;top:' + (z + j) + "px;left:" + (U + a) + "px;width:" + w + "px;height:" + w + 'px;overflow:hidden;"><div class="slotslide" data-x="' + a + '" data-y="' + j + '" style="position:absolute;top:' + 0 + "px;left:" + 0 + "px;width:" + w + "px;height:" + w + 'px;overflow:hidden;"><div style="position:absolute;top:' + (0 - j) + "px;left:" + (0 - a) + "px;width:" + P + "px;height:" + H + "px;background-color:" + V + ";background-image:url(" + L + ");background-repeat:" + W + ";background-size:" + t + ";background-position:" + B + ';"></div></div></div>');
                        j = j + w;
                        if (a6(8)) {
                            D.find(".slot ").last().find(".slotslide").append('<img src="' + g + '">');
                            aH(D, J)
                        }
                        if (A != aK && Q != aK) {
                            punchgs.TweenLite.set(D.find(".slot").last(), {rotationZ: Q})
                        }
                    }
                    a = a + w
                }
                break;
            case"vertical":
            case"horizontal":
                if (D.data("kenburns") == "on") {
                    t = A;
                    if (t.toString().length < 4) {
                        t = ap(t, D, J)
                    }
                }
                if (O == "horizontal") {
                    if (!G) {
                        var K = 0 - J.slotw
                    }
                    for (var M = 0; M < J.slots; M++) {
                        D.append('<div class="slot" style="position:absolute;top:' + (0 + z) + "px;left:" + (U + M * J.slotw) + "px;overflow:hidden;width:" + (J.slotw + 0.6) + "px;height:" + H + 'px"><div class="slotslide" style="position:absolute;top:0px;left:' + K + "px;width:" + (J.slotw + 0.6) + "px;height:" + H + 'px;overflow:hidden;"><div style="background-color:' + V + ";position:absolute;top:0px;left:" + (0 - M * J.slotw) + "px;width:" + P + "px;height:" + H + "px;background-image:url(" + L + ");background-repeat:" + W + ";background-size:" + t + ";background-position:" + B + ';"></div></div></div>');
                        if (A != aK && Q != aK) {
                            punchgs.TweenLite.set(D.find(".slot").last(), {rotationZ: Q})
                        }
                        if (a6(8)) {
                            D.find(".slot ").last().find(".slotslide").append('<img class="ieeightfallbackimage" src="' + g + '" style="width:100%;height:auto">');
                            aH(D, J)
                        }
                    }
                } else {
                    if (!G) {
                        var K = 0 - J.sloth
                    }
                    for (var M = 0; M < J.slots + 2; M++) {
                        D.append('<div class="slot" style="position:absolute;top:' + (z + M * J.sloth) + "px;left:" + U + "px;overflow:hidden;width:" + P + "px;height:" + J.sloth + 'px"><div class="slotslide" style="position:absolute;top:' + K + "px;left:0px;width:" + P + "px;height:" + J.sloth + 'px;overflow:hidden;"><div style="background-color:' + V + ";position:absolute;top:" + (0 - M * J.sloth) + "px;left:0px;width:" + P + "px;height:" + H + "px;background-image:url(" + L + ");background-repeat:" + W + ";background-size:" + t + ";background-position:" + B + ';"></div></div></div>');
                        if (A != aK && Q != aK) {
                            punchgs.TweenLite.set(D.find(".slot").last(), {rotationZ: Q})
                        }
                        if (a6(8)) {
                            D.find(".slot ").last().find(".slotslide").append('<img class="ieeightfallbackimage" src="' + g + '" style="width:100%;height:auto;">');
                            aH(D, J)
                        }
                    }
                }
                break
        }
    };
    var aH = function (d, b) {
        if (a6(8)) {
            var f = d.find(".ieeightfallbackimage");
            var c = f.width(), a = f.height();
            if (b.startwidth / b.startheight < d.data("owidth") / d.data("oheight")) {
                f.css({width: "auto", height: "100%"})
            } else {
                f.css({width: "100%", height: "auto"})
            }
            setTimeout(function () {
                var h = f.width(), e = f.height(), g = d.data("bgposition");
                if (g == "center center") {
                    f.css({position: "absolute", top: b.height / 2 - e / 2 + "px", left: b.width / 2 - h / 2 + "px"})
                }
                if (g == "center top" || g == "top center") {
                    f.css({position: "absolute", top: "0px", left: b.width / 2 - h / 2 + "px"})
                }
                if (g == "center bottom" || g == "bottom center") {
                    f.css({position: "absolute", bottom: "0px", left: b.width / 2 - h / 2 + "px"})
                }
                if (g == "right top" || g == "top right") {
                    f.css({position: "absolute", top: "0px", right: "0px"})
                }
                if (g == "right bottom" || g == "bottom right") {
                    f.css({position: "absolute", bottom: "0px", right: "0px"})
                }
                if (g == "right center" || g == "center right") {
                    f.css({position: "absolute", top: b.height / 2 - e / 2 + "px", right: "0px"})
                }
                if (g == "left bottom" || g == "bottom left") {
                    f.css({position: "absolute", bottom: "0px", left: "0px"})
                }
                if (g == "left center" || g == "center left") {
                    f.css({position: "absolute", top: b.height / 2 - e / 2 + "px", left: "0px"})
                }
            }, 20)
        }
    };
    var aw = function (a, c, b) {
        b.find(".slot").each(function () {
            a2(this).remove()
        });
        c.transition = 0
    };
    var ah = function (b, a) {
        b.find("img, .defaultimg").each(function (f) {
            var c = a2(this), d = c.data("lazyload");
            if (d != c.attr("src") && a < 3 && d != aK && d != "undefined") {
                if (d != aK && d != "undefined") {
                    c.attr("src", d);
                    var e = new Image;
                    e.onload = function (g) {
                        c.data("lazydone", 1);
                        if (c.hasClass("defaultimg")) {
                            aG(c, e)
                        }
                    };
                    e.error = function () {
                        c.data("lazydone", 1)
                    };
                    e.src = c.attr("src");
                    if (e.complete) {
                        if (c.hasClass("defaultimg")) {
                            aG(c, e)
                        }
                        c.data("lazydone", 1)
                    }
                }
            } else {
                if ((d === aK || d === "undefined") && c.data("lazydone") != 1) {
                    var e = new Image;
                    e.onload = function () {
                        if (c.hasClass("defaultimg")) {
                            aG(c, e)
                        }
                        c.data("lazydone", 1)
                    };
                    e.error = function () {
                        c.data("lazydone", 1)
                    };
                    if (c.attr("src") != aK && c.attr("src") != "undefined") {
                        e.src = c.attr("src")
                    } else {
                        e.src = c.data("src")
                    }
                    if (e.complete) {
                        if (c.hasClass("defaultimg")) {
                            aG(c, e)
                        }
                        c.data("lazydone", 1)
                    }
                }
            }
        })
    };
    var aG = function (d, b) {
        var f = d.closest("li"), c = b.width, a = b.height;
        f.data("owidth", c);
        f.data("oheight", a);
        f.find(".slotholder").data("owidth", c);
        f.find(".slotholder").data("oheight", a);
        f.data("loadeddone", 1)
    };
    var ag = function (d, c, a) {
        ah(d, 0);
        var b = setInterval(function () {
            a.bannertimeronpause = true;
            a.container.trigger("stoptimer");
            a.cd = 0;
            var e = 0;
            d.find("img, .defaultimg").each(function (f) {
                if (a2(this).data("lazydone") != 1) {
                    e++
                }
            });
            if (e > 0) {
                ah(d, e)
            } else {
                clearInterval(b);
                if (c != aK) {
                    c()
                }
            }
        }, 100)
    };
    var am = function (d, g) {
        try {
            var c = d.find(">ul:first-child >li:eq(" + g.act + ")")
        } catch (a) {
            var c = d.find(">ul:first-child >li:eq(1)")
        }
        g.lastslide = g.act;
        var b = d.find(">ul:first-child >li:eq(" + g.next + ")");
        var f = b.find(".defaultimg");
        g.bannertimeronpause = true;
        d.trigger("stoptimer");
        g.cd = 0;
        if (f.data("lazyload") != aK && f.data("lazyload") != "undefined" && f.data("lazydone") != 1) {
            if (!a6(8)) {
                f.css({backgroundImage: 'url("' + b.find(".defaultimg").data("lazyload") + '")'})
            } else {
                f.attr("src", b.find(".defaultimg").data("lazyload"))
            }
            f.data("src", b.find(".defaultimg").data("lazyload"));
            f.data("lazydone", 1);
            f.data("orgw", 0);
            b.data("loadeddone", 1);
            d.find(".tp-loader").css({display: "block"});
            ag(d.find(".tp-static-layers"), function () {
                ag(b, function () {
                    var e = b.find(".slotholder");
                    if (e.data("kenburns") == "on") {
                        var h = setInterval(function () {
                            var j = e.data("owidth");
                            if (j >= 0) {
                                clearInterval(h);
                                ay(g, f, d)
                            }
                        }, 10)
                    } else {
                        ay(g, f, d)
                    }
                }, g)
            }, g)
        } else {
            if (b.data("loadeddone") === aK) {
                b.data("loadeddone", 1);
                ag(b, function () {
                    ay(g, f, d)
                }, g)
            } else {
                ay(g, f, d)
            }
        }
    };
    var ay = function (b, a, c) {
        b.bannertimeronpause = false;
        b.cd = 0;
        c.trigger("nulltimer");
        c.find(".tp-loader").css({display: "none"});
        aZ(a, b);
        aI(c, b);
        aZ(a, b);
        aU(c, b)
    };
    var aU = function (h, k) {
        h.trigger("revolution.slide.onbeforeswap");
        k.transition = 1;
        k.videoplaying = false;
        try {
            var g = h.find(">ul:first-child >li:eq(" + k.act + ")")
        } catch (d) {
            var g = h.find(">ul:first-child >li:eq(1)")
        }
        k.lastslide = k.act;
        var f = h.find(">ul:first-child >li:eq(" + k.next + ")");
        setTimeout(function () {
            aS(k)
        }, 200);
        var j = g.find(".slotholder"), c = f.find(".slotholder");
        if (c.data("kenburns") == "on" || j.data("kenburns") == "on") {
            aa(h, k);
            h.find(".kenburnimg").remove()
        }
        if (f.data("delay") != aK) {
            k.cd = 0;
            k.delay = f.data("delay")
        } else {
            k.delay = k.origcd
        }
        if (k.firststart == 1) {
            punchgs.TweenLite.set(g, {autoAlpha: 0})
        }
        punchgs.TweenLite.set(g, {zIndex: 18});
        punchgs.TweenLite.set(f, {autoAlpha: 0, zIndex: 20});
        var b = 0;
        if (g.index() != f.index() && k.firststart != 1) {
            b = aE(g, k)
        }
        if (g.data("saveperformance") != "on") {
            b = 0
        }
        setTimeout(function () {
            h.trigger("restarttimer");
            ao(h, k, f, g, j, c)
        }, b)
    };
    var ao = function (bP, bJ, bU, bI, bN, bH) {
        function bE() {
            a2.each(bY, function (d, c) {
                if (c[0] == bV || c[8] == bV) {
                    bX = c[1];
                    bM = c[2];
                    bW = bD
                }
                bD = bD + 1
            })
        }

        if (bU.data("differentissplayed") == "prepared") {
            bU.data("differentissplayed", "done");
            bU.data("transition", bU.data("savedtransition"));
            bU.data("slotamount", bU.data("savedslotamount"));
            bU.data("masterspeed", bU.data("savedmasterspeed"))
        }
        if (bU.data("fstransition") != aK && bU.data("differentissplayed") != "done") {
            bU.data("savedtransition", bU.data("transition"));
            bU.data("savedslotamount", bU.data("slotamount"));
            bU.data("savedmasterspeed", bU.data("masterspeed"));
            bU.data("transition", bU.data("fstransition"));
            bU.data("slotamount", bU.data("fsslotamount"));
            bU.data("masterspeed", bU.data("fsmasterspeed"));
            bU.data("differentissplayed", "prepared")
        }
        bP.find(".active-revslide").removeClass(".active-revslide");
        bU.addClass("active-revslide");
        if (bU.data("transition") == aK) {
            bU.data("transition", "random")
        }
        var bX = 0, bR = bU.data("transition").split(","),
            bZ = bU.data("nexttransid") == aK ? -1 : bU.data("nexttransid");
        if (bU.data("randomtransition") == "on") {
            bZ = Math.round(Math.random() * bR.length)
        } else {
            bZ = bZ + 1
        }
        if (bZ == bR.length) {
            bZ = 0
        }
        bU.data("nexttransid", bZ);
        var bV = bR[bZ];
        if (bJ.ie) {
            if (bV == "boxfade") {
                bV = "boxslide"
            }
            if (bV == "slotfade-vertical") {
                bV = "slotzoom-vertical"
            }
            if (bV == "slotfade-horizontal") {
                bV = "slotzoom-horizontal"
            }
        }
        if (a6(8)) {
            bV = 11
        }
        var bM = 0;
        if (bJ.parallax == "scroll" && bJ.parallaxFirstGo == aK) {
            bJ.parallaxFirstGo = true;
            a0(bP, bJ);
            setTimeout(function () {
                a0(bP, bJ)
            }, 210);
            setTimeout(function () {
                a0(bP, bJ)
            }, 420)
        }
        if (bV == "slidehorizontal") {
            bV = "slideleft";
            if (bJ.leftarrowpressed == 1) {
                bV = "slideright"
            }
        }
        if (bV == "slidevertical") {
            bV = "slideup";
            if (bJ.leftarrowpressed == 1) {
                bV = "slidedown"
            }
        }
        if (bV == "parallaxhorizontal") {
            bV = "parallaxtoleft";
            if (bJ.leftarrowpressed == 1) {
                bV = "parallaxtoright"
            }
        }
        if (bV == "parallaxvertical") {
            bV = "parallaxtotop";
            if (bJ.leftarrowpressed == 1) {
                bV = "parallaxtobottom"
            }
        }
        var bY = [["boxslide", 0, 1, 10, 0, "box", false, null, 0], ["boxfade", 1, 0, 10, 0, "box", false, null, 1], ["slotslide-horizontal", 2, 0, 0, 200, "horizontal", true, false, 2], ["slotslide-vertical", 3, 0, 0, 200, "vertical", true, false, 3], ["curtain-1", 4, 3, 0, 0, "horizontal", true, true, 4], ["curtain-2", 5, 3, 0, 0, "horizontal", true, true, 5], ["curtain-3", 6, 3, 25, 0, "horizontal", true, true, 6], ["slotzoom-horizontal", 7, 0, 0, 400, "horizontal", true, true, 7], ["slotzoom-vertical", 8, 0, 0, 0, "vertical", true, true, 8], ["slotfade-horizontal", 9, 0, 0, 500, "horizontal", true, null, 9], ["slotfade-vertical", 10, 0, 0, 500, "vertical", true, null, 10], ["fade", 11, 0, 1, 300, "horizontal", true, null, 11], ["slideleft", 12, 0, 1, 0, "horizontal", true, true, 12], ["slideup", 13, 0, 1, 0, "horizontal", true, true, 13], ["slidedown", 14, 0, 1, 0, "horizontal", true, true, 14], ["slideright", 15, 0, 1, 0, "horizontal", true, true, 15], ["papercut", 16, 0, 0, 600, "", null, null, 16], ["3dcurtain-horizontal", 17, 0, 20, 100, "vertical", false, true, 17], ["3dcurtain-vertical", 18, 0, 10, 100, "horizontal", false, true, 18], ["cubic", 19, 0, 20, 600, "horizontal", false, true, 19], ["cube", 19, 0, 20, 600, "horizontal", false, true, 20], ["flyin", 20, 0, 4, 600, "vertical", false, true, 21], ["turnoff", 21, 0, 1, 1600, "horizontal", false, true, 22], ["incube", 22, 0, 20, 200, "horizontal", false, true, 23], ["cubic-horizontal", 23, 0, 20, 500, "vertical", false, true, 24], ["cube-horizontal", 23, 0, 20, 500, "vertical", false, true, 25], ["incube-horizontal", 24, 0, 20, 500, "vertical", false, true, 26], ["turnoff-vertical", 25, 0, 1, 200, "horizontal", false, true, 27], ["fadefromright", 12, 1, 1, 0, "horizontal", true, true, 28], ["fadefromleft", 15, 1, 1, 0, "horizontal", true, true, 29], ["fadefromtop", 14, 1, 1, 0, "horizontal", true, true, 30], ["fadefrombottom", 13, 1, 1, 0, "horizontal", true, true, 31], ["fadetoleftfadefromright", 12, 2, 1, 0, "horizontal", true, true, 32], ["fadetorightfadetoleft", 15, 2, 1, 0, "horizontal", true, true, 33], ["fadetobottomfadefromtop", 14, 2, 1, 0, "horizontal", true, true, 34], ["fadetotopfadefrombottom", 13, 2, 1, 0, "horizontal", true, true, 35], ["parallaxtoright", 12, 3, 1, 0, "horizontal", true, true, 36], ["parallaxtoleft", 15, 3, 1, 0, "horizontal", true, true, 37], ["parallaxtotop", 14, 3, 1, 0, "horizontal", true, true, 38], ["parallaxtobottom", 13, 3, 1, 0, "horizontal", true, true, 39], ["scaledownfromright", 12, 4, 1, 0, "horizontal", true, true, 40], ["scaledownfromleft", 15, 4, 1, 0, "horizontal", true, true, 41], ["scaledownfromtop", 14, 4, 1, 0, "horizontal", true, true, 42], ["scaledownfrombottom", 13, 4, 1, 0, "horizontal", true, true, 43], ["zoomout", 13, 5, 1, 0, "horizontal", true, true, 44], ["zoomin", 13, 6, 1, 0, "horizontal", true, true, 45], ["notransition", 26, 0, 1, 0, "horizontal", true, null, 46]];
        var bG = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45];
        var bQ = [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27];
        var bX = 0;
        var bM = 1;
        var bW = 0;
        var bD = 0;
        var bF = [];
        if (bH.data("kenburns") == "on") {
            if (bV == "boxslide" || bV == 0 || bV == "boxfade" || bV == 1 || bV == "papercut" || bV == 16) {
                bV = 11
            }
            aj(bP, bJ, true, true)
        }
        if (bV == "random") {
            bV = Math.round(Math.random() * bY.length - 1);
            if (bV > bY.length - 1) {
                bV = bY.length - 1
            }
        }
        if (bV == "random-static") {
            bV = Math.round(Math.random() * bG.length - 1);
            if (bV > bG.length - 1) {
                bV = bG.length - 1
            }
            bV = bG[bV]
        }
        if (bV == "random-premium") {
            bV = Math.round(Math.random() * bQ.length - 1);
            if (bV > bQ.length - 1) {
                bV = bQ.length - 1
            }
            bV = bQ[bV]
        }
        var bq = [12, 13, 14, 15, 16, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45];
        if (bJ.isJoomla == true && window.MooTools != aK && bq.indexOf(bV) != -1) {
            var a9 = Math.round(Math.random() * (bQ.length - 2)) + 1;
            if (a9 > bQ.length - 1) {
                a9 = bQ.length - 1
            }
            if (a9 == 0) {
                a9 = 1
            }
            bV = bQ[a9]
        }
        bE();
        if (a6(8) && bX > 15 && bX < 28) {
            bV = Math.round(Math.random() * bG.length - 1);
            if (bV > bG.length - 1) {
                bV = bG.length - 1
            }
            bV = bG[bV];
            bD = 0;
            bE()
        }
        var Q = -1;
        if (bJ.leftarrowpressed == 1 || bJ.act > bJ.next) {
            Q = 1
        }
        bJ.leftarrowpressed = 0;
        if (bX > 26) {
            bX = 26
        }
        if (bX < 0) {
            bX = 0
        }
        var be = 300;
        if (bU.data("masterspeed") != aK && bU.data("masterspeed") > 99 && bU.data("masterspeed") < bJ.delay) {
            be = bU.data("masterspeed")
        }
        if (bU.data("masterspeed") != aK && bU.data("masterspeed") > bJ.delay) {
            be = bJ.delay
        }
        bF = bY[bW];
        bP.parent().find(".bullet").each(function () {
            var c = a2(this), d = c.index();
            c.removeClass("selected");
            if (bJ.navigationArrows == "withbullet" || bJ.navigationArrows == "nexttobullets") {
                d = c.index() - 1
            }
            if (d == bJ.next) {
                c.addClass("selected")
            }
        });
        var bs = new punchgs.TimelineLite({
            onComplete: function () {
                aA(bP, bJ, bH, bN, bU, bI, bs)
            }
        });
        bs.add(punchgs.TweenLite.set(bH.find(".defaultimg"), {opacity: 0}));
        bs.pause();
        if (bU.data("slotamount") == aK || bU.data("slotamount") < 1) {
            bJ.slots = Math.round(Math.random() * 12 + 4);
            if (bV == "boxslide") {
                bJ.slots = Math.round(Math.random() * 6 + 3)
            } else {
                if (bV == "flyin") {
                    bJ.slots = Math.round(Math.random() * 4 + 1)
                }
            }
        } else {
            bJ.slots = bU.data("slotamount")
        }
        if (bU.data("rotate") == aK) {
            bJ.rotate = 0
        } else {
            if (bU.data("rotate") == 999) {
                bJ.rotate = Math.round(Math.random() * 360)
            } else {
                bJ.rotate = bU.data("rotate")
            }
        }
        if (!a2.support.transition || bJ.ie || bJ.ie9) {
            bJ.rotate = 0
        }
        if (bJ.firststart == 1) {
            bJ.firststart = 0
        }
        be = be + bF[4];
        if ((bX == 4 || bX == 5 || bX == 6) && bJ.slots < 3) {
            bJ.slots = 3
        }
        if (bF[3] != 0) {
            bJ.slots = Math.min(bJ.slots, bF[3])
        }
        if (bX == 9) {
            bJ.slots = bJ.width / 20
        }
        if (bX == 10) {
            bJ.slots = bJ.height / 20
        }
        if (bF[7] != null) {
            a5(bN, bJ, bF[7], bF[5])
        }
        if (bF[6] != null) {
            a5(bH, bJ, bF[6], bF[5])
        }
        if (bX == 0) {
            var bS = Math.ceil(bJ.height / bJ.sloth);
            var bg = 0;
            bH.find(".slotslide").each(function (c) {
                var d = a2(this);
                bg = bg + 1;
                if (bg == bS) {
                    bg = 0
                }
                bs.add(punchgs.TweenLite.from(d, be / 600, {
                    opacity: 0,
                    top: 0 - bJ.sloth,
                    left: 0 - bJ.slotw,
                    rotation: bJ.rotate,
                    force3D: "auto",
                    ease: punchgs.Power2.easeOut
                }), (c * 15 + bg * 30) / 1500)
            })
        }
        if (bX == 1) {
            var bd, bf = 0;
            bH.find(".slotslide").each(function (d) {
                var g = a2(this), c = Math.random() * be + 300, f = Math.random() * 500 + 200;
                if (c + f > bd) {
                    bd = f + f;
                    bf = d
                }
                bs.add(punchgs.TweenLite.from(g, c / 1000, {
                    autoAlpha: 0,
                    force3D: "auto",
                    rotation: bJ.rotate,
                    ease: punchgs.Power2.easeInOut
                }), f / 1000)
            })
        }
        if (bX == 2) {
            var b0 = new punchgs.TimelineLite;
            bN.find(".slotslide").each(function () {
                var c = a2(this);
                b0.add(punchgs.TweenLite.to(c, be / 1000, {
                    left: bJ.slotw,
                    force3D: "auto",
                    rotation: 0 - bJ.rotate
                }), 0);
                bs.add(b0, 0)
            });
            bH.find(".slotslide").each(function () {
                var c = a2(this);
                b0.add(punchgs.TweenLite.from(c, be / 1000, {
                    left: 0 - bJ.slotw,
                    force3D: "auto",
                    rotation: bJ.rotate
                }), 0);
                bs.add(b0, 0)
            })
        }
        if (bX == 3) {
            var b0 = new punchgs.TimelineLite;
            bN.find(".slotslide").each(function () {
                var c = a2(this);
                b0.add(punchgs.TweenLite.to(c, be / 1000, {
                    top: bJ.sloth,
                    rotation: bJ.rotate,
                    force3D: "auto",
                    transformPerspective: 600
                }), 0);
                bs.add(b0, 0)
            });
            bH.find(".slotslide").each(function () {
                var c = a2(this);
                b0.add(punchgs.TweenLite.from(c, be / 1000, {
                    top: 0 - bJ.sloth,
                    rotation: bJ.rotate,
                    ease: punchgs.Power2.easeOut,
                    force3D: "auto",
                    transformPerspective: 600
                }), 0);
                bs.add(b0, 0)
            })
        }
        if (bX == 4 || bX == 5) {
            setTimeout(function () {
                bN.find(".defaultimg").css({opacity: 0})
            }, 100);
            var br = be / 1000, bc = br, b0 = new punchgs.TimelineLite;
            bN.find(".slotslide").each(function (d) {
                var f = a2(this);
                var c = d * br / bJ.slots;
                if (bX == 5) {
                    c = (bJ.slots - d - 1) * br / bJ.slots / 1.5
                }
                b0.add(punchgs.TweenLite.to(f, br * 3, {
                    transformPerspective: 600,
                    force3D: "auto",
                    top: 0 + bJ.height,
                    opacity: 0.5,
                    rotation: bJ.rotate,
                    ease: punchgs.Power2.easeInOut,
                    delay: c
                }), 0);
                bs.add(b0, 0)
            });
            bH.find(".slotslide").each(function (d) {
                var f = a2(this);
                var c = d * br / bJ.slots;
                if (bX == 5) {
                    c = (bJ.slots - d - 1) * br / bJ.slots / 1.5
                }
                b0.add(punchgs.TweenLite.from(f, br * 3, {
                    top: 0 - bJ.height,
                    opacity: 0.5,
                    rotation: bJ.rotate,
                    force3D: "auto",
                    ease: punchgs.Power2.easeInOut,
                    delay: c
                }), 0);
                bs.add(b0, 0)
            })
        }
        if (bX == 6) {
            if (bJ.slots < 2) {
                bJ.slots = 2
            }
            if (bJ.slots % 2) {
                bJ.slots = bJ.slots + 1
            }
            var b0 = new punchgs.TimelineLite;
            setTimeout(function () {
                bN.find(".defaultimg").css({opacity: 0})
            }, 100);
            bN.find(".slotslide").each(function (d) {
                var f = a2(this);
                if (d + 1 < bJ.slots / 2) {
                    var c = (d + 2) * 90
                } else {
                    var c = (2 + bJ.slots - d) * 90
                }
                b0.add(punchgs.TweenLite.to(f, (be + c) / 1000, {
                    top: 0 + bJ.height,
                    opacity: 1,
                    force3D: "auto",
                    rotation: bJ.rotate,
                    ease: punchgs.Power2.easeInOut
                }), 0);
                bs.add(b0, 0)
            });
            bH.find(".slotslide").each(function (d) {
                var f = a2(this);
                if (d + 1 < bJ.slots / 2) {
                    var c = (d + 2) * 90
                } else {
                    var c = (2 + bJ.slots - d) * 90
                }
                b0.add(punchgs.TweenLite.from(f, (be + c) / 1000, {
                    top: 0 - bJ.height,
                    opacity: 1,
                    force3D: "auto",
                    rotation: bJ.rotate,
                    ease: punchgs.Power2.easeInOut
                }), 0);
                bs.add(b0, 0)
            })
        }
        if (bX == 7) {
            be = be * 2;
            if (be > bJ.delay) {
                be = bJ.delay
            }
            var b0 = new punchgs.TimelineLite;
            setTimeout(function () {
                bN.find(".defaultimg").css({opacity: 0})
            }, 100);
            bN.find(".slotslide").each(function () {
                var c = a2(this).find("div");
                b0.add(punchgs.TweenLite.to(c, be / 1000, {
                    left: 0 - bJ.slotw / 2 + "px",
                    top: 0 - bJ.height / 2 + "px",
                    width: bJ.slotw * 2 + "px",
                    height: bJ.height * 2 + "px",
                    opacity: 0,
                    rotation: bJ.rotate,
                    force3D: "auto",
                    ease: punchgs.Power2.easeOut
                }), 0);
                bs.add(b0, 0)
            });
            bH.find(".slotslide").each(function (c) {
                var d = a2(this).find("div");
                b0.add(punchgs.TweenLite.fromTo(d, be / 1000, {
                    left: 0,
                    top: 0,
                    opacity: 0,
                    transformPerspective: 600
                }, {
                    left: 0 - c * bJ.slotw + "px",
                    ease: punchgs.Power2.easeOut,
                    force3D: "auto",
                    top: 0 + "px",
                    width: bJ.width,
                    height: bJ.height,
                    opacity: 1,
                    rotation: 0,
                    delay: 0.1
                }), 0);
                bs.add(b0, 0)
            })
        }
        if (bX == 8) {
            be = be * 3;
            if (be > bJ.delay) {
                be = bJ.delay
            }
            var b0 = new punchgs.TimelineLite;
            bN.find(".slotslide").each(function () {
                var c = a2(this).find("div");
                b0.add(punchgs.TweenLite.to(c, be / 1000, {
                    left: 0 - bJ.width / 2 + "px",
                    top: 0 - bJ.sloth / 2 + "px",
                    width: bJ.width * 2 + "px",
                    height: bJ.sloth * 2 + "px",
                    force3D: "auto",
                    opacity: 0,
                    rotation: bJ.rotate
                }), 0);
                bs.add(b0, 0)
            });
            bH.find(".slotslide").each(function (c) {
                var d = a2(this).find("div");
                b0.add(punchgs.TweenLite.fromTo(d, be / 1000, {
                    left: 0,
                    top: 0,
                    opacity: 0,
                    force3D: "auto"
                }, {
                    left: 0 + "px",
                    top: 0 - c * bJ.sloth + "px",
                    width: bH.find(".defaultimg").data("neww") + "px",
                    height: bH.find(".defaultimg").data("newh") + "px",
                    opacity: 1,
                    rotation: 0
                }), 0);
                bs.add(b0, 0)
            })
        }
        if (bX == 9 || bX == 10) {
            var bl = 0;
            bH.find(".slotslide").each(function (c) {
                var d = a2(this);
                bl++;
                bs.add(punchgs.TweenLite.fromTo(d, be / 1000, {
                    autoAlpha: 0,
                    force3D: "auto",
                    transformPerspective: 600
                }, {autoAlpha: 1, ease: punchgs.Power2.easeInOut, delay: c * 5 / 1000}), 0)
            })
        }
        if (bX == 11 || bX == 26) {
            var bl = 0;
            if (bX == 26) {
                be = 0
            }
            bH.find(".slotslide").each(function (c) {
                var d = a2(this);
                bs.add(punchgs.TweenLite.from(d, be / 1000, {
                    autoAlpha: 0,
                    force3D: "auto",
                    ease: punchgs.Power2.easeInOut
                }), 0)
            })
        }
        if (bX == 12 || bX == 13 || bX == 14 || bX == 15) {
            be = be;
            if (be > bJ.delay) {
                be = bJ.delay
            }
            setTimeout(function () {
                punchgs.TweenLite.set(bN.find(".defaultimg"), {autoAlpha: 0})
            }, 100);
            var bt = bJ.width, bo = bJ.height, bk = bH.find(".slotslide"), bK = 0, ba = 0, A = 1, bC = 1, j = 1,
                e = punchgs.Power2.easeInOut, t = punchgs.Power2.easeInOut, bB = be / 1000, bi = bB;
            if (bJ.fullWidth == "on" || bJ.fullScreen == "on") {
                bt = bk.width();
                bo = bk.height()
            }
            if (bX == 12) {
                bK = bt
            } else {
                if (bX == 15) {
                    bK = 0 - bt
                } else {
                    if (bX == 13) {
                        ba = bo
                    } else {
                        if (bX == 14) {
                            ba = 0 - bo
                        }
                    }
                }
            }
            if (bM == 1) {
                A = 0
            }
            if (bM == 2) {
                A = 0
            }
            if (bM == 3) {
                e = punchgs.Power2.easeInOut;
                t = punchgs.Power1.easeInOut;
                bB = be / 1200
            }
            if (bM == 4 || bM == 5) {
                bC = 0.6
            }
            if (bM == 6) {
                bC = 1.4
            }
            if (bM == 5 || bM == 6) {
                j = 1.4;
                A = 0;
                bt = 0;
                bo = 0;
                bK = 0;
                ba = 0
            }
            if (bM == 6) {
                j = 0.6
            }
            var bh = 0;
            bs.add(punchgs.TweenLite.from(bk, bB, {
                left: bK,
                top: ba,
                scale: j,
                opacity: A,
                rotation: bJ.rotate,
                ease: t,
                force3D: "auto"
            }), 0);
            var bn = bN.find(".slotslide");
            if (bM == 4 || bM == 5) {
                bt = 0;
                bo = 0
            }
            if (bM != 1) {
                switch (bX) {
                    case 12:
                        bs.add(punchgs.TweenLite.to(bn, bi, {
                            left: 0 - bt + "px",
                            force3D: "auto",
                            scale: bC,
                            opacity: A,
                            rotation: bJ.rotate,
                            ease: e
                        }), 0);
                        break;
                    case 15:
                        bs.add(punchgs.TweenLite.to(bn, bi, {
                            left: bt + "px",
                            force3D: "auto",
                            scale: bC,
                            opacity: A,
                            rotation: bJ.rotate,
                            ease: e
                        }), 0);
                        break;
                    case 13:
                        bs.add(punchgs.TweenLite.to(bn, bi, {
                            top: 0 - bo + "px",
                            force3D: "auto",
                            scale: bC,
                            opacity: A,
                            rotation: bJ.rotate,
                            ease: e
                        }), 0);
                        break;
                    case 14:
                        bs.add(punchgs.TweenLite.to(bn, bi, {
                            top: bo + "px",
                            force3D: "auto",
                            scale: bC,
                            opacity: A,
                            rotation: bJ.rotate,
                            ease: e
                        }), 0);
                        break
                }
            }
        }
        if (bX == 16) {
            var b0 = new punchgs.TimelineLite;
            bs.add(punchgs.TweenLite.set(bI, {position: "absolute", "z-index": 20}), 0);
            bs.add(punchgs.TweenLite.set(bU, {position: "absolute", "z-index": 15}), 0);
            bI.wrapInner('<div class="tp-half-one" style="position:relative; width:100%;height:100%"></div>');
            bI.find(".tp-half-one").clone(true).appendTo(bI).addClass("tp-half-two");
            bI.find(".tp-half-two").removeClass("tp-half-one");
            var bt = bJ.width, bo = bJ.height;
            if (bJ.autoHeight == "on") {
                bo = bP.height()
            }
            bI.find(".tp-half-one .defaultimg").wrap('<div class="tp-papercut" style="width:' + bt + "px;height:" + bo + 'px;"></div>');
            bI.find(".tp-half-two .defaultimg").wrap('<div class="tp-papercut" style="width:' + bt + "px;height:" + bo + 'px;"></div>');
            bI.find(".tp-half-two .defaultimg").css({position: "absolute", top: "-50%"});
            bI.find(".tp-half-two .tp-caption").wrapAll('<div style="position:absolute;top:-50%;left:0px;"></div>');
            bs.add(punchgs.TweenLite.set(bI.find(".tp-half-two"), {
                width: bt,
                height: bo,
                overflow: "hidden",
                zIndex: 15,
                position: "absolute",
                top: bo / 2,
                left: "0px",
                transformPerspective: 600,
                transformOrigin: "center bottom"
            }), 0);
            bs.add(punchgs.TweenLite.set(bI.find(".tp-half-one"), {
                width: bt,
                height: bo / 2,
                overflow: "visible",
                zIndex: 10,
                position: "absolute",
                top: "0px",
                left: "0px",
                transformPerspective: 600,
                transformOrigin: "center top"
            }), 0);
            var b = bI.find(".defaultimg"), a = Math.round(Math.random() * 20 - 10),
                bL = Math.round(Math.random() * 20 - 10), bT = Math.round(Math.random() * 20 - 10),
                bz = Math.random() * 0.4 - 0.2, bw = Math.random() * 0.4 - 0.2, bm = Math.random() * 1 + 1,
                by = Math.random() * 1 + 1, bA = Math.random() * 0.3 + 0.3;
            bs.add(punchgs.TweenLite.set(bI.find(".tp-half-one"), {overflow: "hidden"}), 0);
            bs.add(punchgs.TweenLite.fromTo(bI.find(".tp-half-one"), be / 800, {
                width: bt,
                height: bo / 2,
                position: "absolute",
                top: "0px",
                left: "0px",
                force3D: "auto",
                transformOrigin: "center top"
            }, {scale: bm, rotation: a, y: 0 - bo - bo / 4, autoAlpha: 0, ease: punchgs.Power2.easeInOut}), 0);
            bs.add(punchgs.TweenLite.fromTo(bI.find(".tp-half-two"), be / 800, {
                width: bt,
                height: bo,
                overflow: "hidden",
                position: "absolute",
                top: bo / 2,
                left: "0px",
                force3D: "auto",
                transformOrigin: "center bottom"
            }, {
                scale: by,
                rotation: bL,
                y: bo + bo / 4,
                ease: punchgs.Power2.easeInOut,
                autoAlpha: 0,
                onComplete: function () {
                    punchgs.TweenLite.set(bI, {position: "absolute", "z-index": 15});
                    punchgs.TweenLite.set(bU, {position: "absolute", "z-index": 20});
                    if (bI.find(".tp-half-one").length > 0) {
                        bI.find(".tp-half-one .defaultimg").unwrap();
                        bI.find(".tp-half-one .slotholder").unwrap()
                    }
                    bI.find(".tp-half-two").remove()
                }
            }), 0);
            b0.add(punchgs.TweenLite.set(bH.find(".defaultimg"), {autoAlpha: 1}), 0);
            if (bI.html() != null) {
                bs.add(punchgs.TweenLite.fromTo(bU, (be - 200) / 1000, {
                    scale: bA,
                    x: bJ.width / 4 * bz,
                    y: bo / 4 * bw,
                    rotation: bT,
                    force3D: "auto",
                    transformOrigin: "center center",
                    ease: punchgs.Power2.easeOut
                }, {autoAlpha: 1, scale: 1, x: 0, y: 0, rotation: 0}), 0)
            }
            bs.add(b0, 0)
        }
        if (bX == 17) {
            bH.find(".slotslide").each(function (c) {
                var d = a2(this);
                bs.add(punchgs.TweenLite.fromTo(d, be / 800, {
                    opacity: 0,
                    rotationY: 0,
                    scale: 0.9,
                    rotationX: -110,
                    force3D: "auto",
                    transformPerspective: 600,
                    transformOrigin: "center center"
                }, {
                    opacity: 1,
                    top: 0,
                    left: 0,
                    scale: 1,
                    rotation: 0,
                    rotationX: 0,
                    force3D: "auto",
                    rotationY: 0,
                    ease: punchgs.Power3.easeOut,
                    delay: c * 0.06
                }), 0)
            })
        }
        if (bX == 18) {
            bH.find(".slotslide").each(function (c) {
                var d = a2(this);
                bs.add(punchgs.TweenLite.fromTo(d, be / 500, {
                    autoAlpha: 0,
                    rotationY: 310,
                    scale: 0.9,
                    rotationX: 10,
                    force3D: "auto",
                    transformPerspective: 600,
                    transformOrigin: "center center"
                }, {
                    autoAlpha: 1,
                    top: 0,
                    left: 0,
                    scale: 1,
                    rotation: 0,
                    rotationX: 0,
                    force3D: "auto",
                    rotationY: 0,
                    ease: punchgs.Power3.easeOut,
                    delay: c * 0.06
                }), 0)
            })
        }
        if (bX == 19 || bX == 22) {
            var b0 = new punchgs.TimelineLite;
            bs.add(punchgs.TweenLite.set(bI, {zIndex: 20}), 0);
            bs.add(punchgs.TweenLite.set(bU, {zIndex: 20}), 0);
            setTimeout(function () {
                bN.find(".defaultimg").css({opacity: 0})
            }, 100);
            var a8 = bU.css("z-index"), bv = bI.css("z-index"), bx = 90, A = 1, bu = "center center ";
            if (Q == 1) {
                bx = -90
            }
            if (bX == 19) {
                bu = bu + "-" + bJ.height / 2;
                A = 0
            } else {
                bu = bu + bJ.height / 2
            }
            punchgs.TweenLite.set(bP, {
                transformStyle: "flat",
                backfaceVisibility: "hidden",
                transformPerspective: 600
            });
            bH.find(".slotslide").each(function (c) {
                var d = a2(this);
                b0.add(punchgs.TweenLite.fromTo(d, be / 1000, {
                    transformStyle: "flat",
                    backfaceVisibility: "hidden",
                    left: 0,
                    rotationY: bJ.rotate,
                    z: 10,
                    top: 0,
                    scale: 1,
                    force3D: "auto",
                    transformPerspective: 600,
                    transformOrigin: bu,
                    rotationX: bx
                }, {
                    left: 0,
                    rotationY: 0,
                    top: 0,
                    z: 0,
                    scale: 1,
                    force3D: "auto",
                    rotationX: 0,
                    delay: c * 50 / 1000,
                    ease: punchgs.Power2.easeInOut
                }), 0);
                b0.add(punchgs.TweenLite.to(d, 0.1, {autoAlpha: 1, delay: c * 50 / 1000}), 0);
                bs.add(b0)
            });
            bN.find(".slotslide").each(function (d) {
                var f = a2(this);
                var c = -90;
                if (Q == 1) {
                    c = 90
                }
                b0.add(punchgs.TweenLite.fromTo(f, be / 1000, {
                    transformStyle: "flat",
                    backfaceVisibility: "hidden",
                    autoAlpha: 1,
                    rotationY: 0,
                    top: 0,
                    z: 0,
                    scale: 1,
                    force3D: "auto",
                    transformPerspective: 600,
                    transformOrigin: bu,
                    rotationX: 0
                }, {
                    autoAlpha: 1,
                    rotationY: bJ.rotate,
                    top: 0,
                    z: 10,
                    scale: 1,
                    rotationX: c,
                    delay: d * 50 / 1000,
                    force3D: "auto",
                    ease: punchgs.Power2.easeInOut
                }), 0);
                bs.add(b0)
            })
        }
        if (bX == 20) {
            setTimeout(function () {
                bN.find(".defaultimg").css({opacity: 0})
            }, 100);
            var a8 = bU.css("z-index"), bv = bI.css("z-index");
            if (Q == 1) {
                var bO = -bJ.width;
                var bx = 70;
                var bu = "left center -" + bJ.height / 2
            } else {
                var bO = bJ.width;
                var bx = -70;
                var bu = "right center -" + bJ.height / 2
            }
            bH.find(".slotslide").each(function (c) {
                var d = a2(this);
                bs.add(punchgs.TweenLite.fromTo(d, be / 1500, {
                    left: bO,
                    rotationX: 40,
                    z: -600,
                    opacity: A,
                    top: 0,
                    force3D: "auto",
                    transformPerspective: 600,
                    transformOrigin: bu,
                    rotationY: bx
                }, {left: 0, delay: c * 50 / 1000, ease: punchgs.Power2.easeInOut}), 0);
                bs.add(punchgs.TweenLite.fromTo(d, be / 1000, {
                    rotationX: 40,
                    z: -600,
                    opacity: A,
                    top: 0,
                    scale: 1,
                    force3D: "auto",
                    transformPerspective: 600,
                    transformOrigin: bu,
                    rotationY: bx
                }, {
                    rotationX: 0,
                    opacity: 1,
                    top: 0,
                    z: 0,
                    scale: 1,
                    rotationY: 0,
                    delay: c * 50 / 1000,
                    ease: punchgs.Power2.easeInOut
                }), 0);
                bs.add(punchgs.TweenLite.to(d, 0.1, {opacity: 1, force3D: "auto", delay: c * 50 / 1000 + be / 2000}), 0)
            });
            bN.find(".slotslide").each(function (d) {
                var h = a2(this);
                if (Q != 1) {
                    var c = -bJ.width;
                    var f = 70;
                    var g = "left center -" + bJ.height / 2
                } else {
                    var c = bJ.width;
                    var f = -70;
                    var g = "right center -" + bJ.height / 2
                }
                bs.add(punchgs.TweenLite.fromTo(h, be / 1000, {
                    opacity: 1,
                    rotationX: 0,
                    top: 0,
                    z: 0,
                    scale: 1,
                    left: 0,
                    force3D: "auto",
                    transformPerspective: 600,
                    transformOrigin: g,
                    rotationY: 0
                }, {
                    opacity: 1,
                    rotationX: 40,
                    top: 0,
                    z: -600,
                    left: c,
                    force3D: "auto",
                    scale: 0.8,
                    rotationY: f,
                    delay: d * 50 / 1000,
                    ease: punchgs.Power2.easeInOut
                }), 0);
                bs.add(punchgs.TweenLite.to(h, 0.1, {
                    force3D: "auto",
                    opacity: 0,
                    delay: d * 50 / 1000 + (be / 1000 - be / 10000)
                }), 0)
            })
        }
        if (bX == 21 || bX == 25) {
            setTimeout(function () {
                bN.find(".defaultimg").css({opacity: 0})
            }, 100);
            var a8 = bU.css("z-index"), bv = bI.css("z-index"), bx = 90, bO = -bJ.width, bj = -bx;
            if (Q == 1) {
                if (bX == 25) {
                    var bu = "center top 0";
                    bx = bJ.rotate
                } else {
                    var bu = "left center 0";
                    bj = bJ.rotate
                }
            } else {
                bO = bJ.width;
                bx = -90;
                if (bX == 25) {
                    var bu = "center bottom 0";
                    bj = -bx;
                    bx = bJ.rotate
                } else {
                    var bu = "right center 0";
                    bj = bJ.rotate
                }
            }
            bH.find(".slotslide").each(function (c) {
                var d = a2(this);
                bs.add(punchgs.TweenLite.fromTo(d, be / 1000, {
                    left: 0,
                    transformStyle: "flat",
                    rotationX: bj,
                    z: 0,
                    autoAlpha: 0,
                    top: 0,
                    scale: 1,
                    force3D: "auto",
                    transformPerspective: 600,
                    transformOrigin: bu,
                    rotationY: bx
                }, {
                    left: 0,
                    rotationX: 0,
                    top: 0,
                    z: 0,
                    autoAlpha: 1,
                    scale: 1,
                    rotationY: 0,
                    force3D: "auto",
                    ease: punchgs.Power3.easeInOut
                }), 0)
            });
            if (Q != 1) {
                bO = -bJ.width;
                bx = 90;
                if (bX == 25) {
                    bu = "center top 0";
                    bj = -bx;
                    bx = bJ.rotate
                } else {
                    bu = "left center 0";
                    bj = bJ.rotate
                }
            } else {
                bO = bJ.width;
                bx = -90;
                if (bX == 25) {
                    bu = "center bottom 0";
                    bj = -bx;
                    bx = bJ.rotate
                } else {
                    bu = "right center 0";
                    bj = bJ.rotate
                }
            }
            bN.find(".slotslide").each(function (c) {
                var d = a2(this);
                bs.add(punchgs.TweenLite.fromTo(d, be / 1000, {
                    left: 0,
                    transformStyle: "flat",
                    rotationX: 0,
                    z: 0,
                    autoAlpha: 1,
                    top: 0,
                    scale: 1,
                    force3D: "auto",
                    transformPerspective: 600,
                    transformOrigin: bu,
                    rotationY: 0
                }, {
                    left: 0,
                    rotationX: bj,
                    top: 0,
                    z: 0,
                    autoAlpha: 1,
                    force3D: "auto",
                    scale: 1,
                    rotationY: bx,
                    ease: punchgs.Power1.easeInOut
                }), 0)
            })
        }
        if (bX == 23 || bX == 24) {
            setTimeout(function () {
                bN.find(".defaultimg").css({opacity: 0})
            }, 100);
            var a8 = bU.css("z-index"), bv = bI.css("z-index"), bx = -90, A = 1, bb = 0;
            if (Q == 1) {
                bx = 90
            }
            if (bX == 23) {
                var bu = "center center -" + bJ.width / 2;
                A = 0
            } else {
                var bu = "center center " + bJ.width / 2
            }
            punchgs.TweenLite.set(bP, {transformStyle: "preserve-3d", backfaceVisibility: "hidden", perspective: 2500});
            bH.find(".slotslide").each(function (c) {
                var d = a2(this);
                bs.add(punchgs.TweenLite.fromTo(d, be / 1000, {
                    left: bb,
                    rotationX: bJ.rotate,
                    force3D: "auto",
                    opacity: A,
                    top: 0,
                    scale: 1,
                    transformPerspective: 600,
                    transformOrigin: bu,
                    rotationY: bx
                }, {
                    left: 0,
                    rotationX: 0,
                    autoAlpha: 1,
                    top: 0,
                    z: 0,
                    scale: 1,
                    rotationY: 0,
                    delay: c * 50 / 500,
                    ease: punchgs.Power2.easeInOut
                }), 0)
            });
            bx = 90;
            if (Q == 1) {
                bx = -90
            }
            bN.find(".slotslide").each(function (c) {
                var d = a2(this);
                bs.add(punchgs.TweenLite.fromTo(d, be / 1000, {
                    left: 0,
                    autoAlpha: 1,
                    rotationX: 0,
                    top: 0,
                    z: 0,
                    scale: 1,
                    force3D: "auto",
                    transformPerspective: 600,
                    transformOrigin: bu,
                    rotationY: 0
                }, {
                    left: bb,
                    autoAlpha: 1,
                    rotationX: bJ.rotate,
                    top: 0,
                    scale: 1,
                    rotationY: bx,
                    delay: c * 50 / 500,
                    ease: punchgs.Power2.easeInOut
                }), 0)
            })
        }
        bs.pause();
        aW(bU, bJ, null, bs);
        punchgs.TweenLite.to(bU, 0.001, {autoAlpha: 1});
        var bp = {};
        bp.slideIndex = bJ.next + 1;
        bp.slide = bU;
        bP.trigger("revolution.slide.onchange", bp);
        setTimeout(function () {
            bP.trigger("revolution.slide.onafterswap")
        }, be);
        bP.trigger("revolution.slide.onvideostop")
    };
    var aA = function (f, b, h, d, a, c, g) {
        punchgs.TweenLite.to(h.find(".defaultimg"), 0.001, {
            autoAlpha: 1, onComplete: function () {
                aw(f, b, a)
            }
        });
        if (a.index() != c.index()) {
            punchgs.TweenLite.to(c, 0.2, {
                autoAlpha: 0, onComplete: function () {
                    aw(f, b, c)
                }
            })
        }
        b.act = b.next;
        if (b.navigationType == "thumb") {
            aC(f)
        }
        if (h.data("kenburns") == "on") {
            aj(f, b)
        }
        f.find(".current-sr-slide-visible").removeClass("current-sr-slide-visible");
        a.addClass("current-sr-slide-visible");
        if (b.parallax == "scroll" || b.parallax == "scroll+mouse" || b.parallax == "mouse+scroll") {
            a0(f, b)
        }
        g.clear()
    };
    var al = function (c) {
        var g = c.target.getVideoEmbedCode();
        var e = a2("#" + g.split('id="')[1].split('"')[0]);
        var b = e.closest(".tp-simpleresponsive");
        var d = e.parent().data("player");
        if (c.data == YT.PlayerState.PLAYING) {
            var f = b.find(".tp-bannertimer");
            var a = f.data("opt");
            if (e.closest(".tp-caption").data("volume") == "mute") {
                d.mute()
            }
            a.videoplaying = true;
            b.trigger("stoptimer");
            b.trigger("revolution.slide.onvideoplay")
        } else {
            var f = b.find(".tp-bannertimer");
            var a = f.data("opt");
            if (c.data != -1 && c.data != 3) {
                a.videoplaying = false;
                b.trigger("starttimer");
                b.trigger("revolution.slide.onvideostop")
            }
            if (c.data == 0 && a.nextslideatend == true) {
                a.container.revnext()
            } else {
                a.videoplaying = false;
                b.trigger("starttimer");
                b.trigger("revolution.slide.onvideostop")
            }
        }
    };
    var an = function (b, a, c) {
        if (b.addEventListener) {
            b.addEventListener(a, c, false)
        } else {
            b.attachEvent(a, c, false)
        }
    };
    var a7 = function (b, f) {
        var d = $f(b), a = a2("#" + b), c = a.closest(".tp-simpleresponsive"), e = a.closest(".tp-caption");
        setTimeout(function () {
            d.addEvent("ready", function (g) {
                if (f) {
                    d.api("play")
                }
                d.addEvent("play", function (i) {
                    var h = c.find(".tp-bannertimer");
                    var j = h.data("opt");
                    j.videoplaying = true;
                    c.trigger("stoptimer");
                    if (e.data("volume") == "mute") {
                        d.api("setVolume", "0")
                    }
                });
                d.addEvent("finish", function (i) {
                    var h = c.find(".tp-bannertimer");
                    var j = h.data("opt");
                    j.videoplaying = false;
                    c.trigger("starttimer");
                    c.trigger("revolution.slide.onvideoplay");
                    if (j.nextslideatend == true) {
                        j.container.revnext()
                    }
                });
                d.addEvent("pause", function (i) {
                    var h = c.find(".tp-bannertimer");
                    var j = h.data("opt");
                    j.videoplaying = false;
                    c.trigger("starttimer");
                    c.trigger("revolution.slide.onvideostop")
                });
                e.find(".tp-thumb-image").click(function () {
                    punchgs.TweenLite.to(a2(this), 0.3, {
                        autoAlpha: 0,
                        force3D: "auto",
                        ease: punchgs.Power3.easeInOut
                    });
                    d.api("play")
                })
            })
        }, 150)
    };
    var ax = function (f, h) {
        var d = h.width();
        var b = h.height();
        var c = f.data("mediaAspect");
        if (c == aK) {
            c = 1
        }
        var g = d / b;
        f.css({position: "absolute"});
        var a = f.find("video");
        if (g < c) {
            punchgs.TweenLite.to(f, 0.0001, {
                width: b * c,
                force3D: "auto",
                top: 0,
                left: 0 - (b * c - d) / 2,
                height: b
            })
        } else {
            punchgs.TweenLite.to(f, 0.0001, {
                width: d,
                force3D: "auto",
                top: 0 - (d / c - b) / 2,
                left: 0,
                height: d / c
            })
        }
    };
    var ak = function () {
        var a = {};
        a.x = 0;
        a.y = 0;
        a.rotationX = 0;
        a.rotationY = 0;
        a.rotationZ = 0;
        a.scale = 1;
        a.scaleX = 1;
        a.scaleY = 1;
        a.skewX = 0;
        a.skewY = 0;
        a.opacity = 0;
        a.transformOrigin = "center, center";
        a.transformPerspective = 400;
        a.rotation = 0;
        return a
    };
    var at = function (a, c) {
        var b = c.split(";");
        a2.each(b, function (g, h) {
            h = h.split(":");
            var f = h[0], d = h[1];
            if (f == "rotationX") {
                a.rotationX = parseInt(d, 0)
            }
            if (f == "rotationY") {
                a.rotationY = parseInt(d, 0)
            }
            if (f == "rotationZ") {
                a.rotationZ = parseInt(d, 0)
            }
            if (f == "rotationZ") {
                a.rotation = parseInt(d, 0)
            }
            if (f == "scaleX") {
                a.scaleX = parseFloat(d)
            }
            if (f == "scaleY") {
                a.scaleY = parseFloat(d)
            }
            if (f == "opacity") {
                a.opacity = parseFloat(d)
            }
            if (f == "skewX") {
                a.skewX = parseInt(d, 0)
            }
            if (f == "skewY") {
                a.skewY = parseInt(d, 0)
            }
            if (f == "x") {
                a.x = parseInt(d, 0)
            }
            if (f == "y") {
                a.y = parseInt(d, 0)
            }
            if (f == "z") {
                a.z = parseInt(d, 0)
            }
            if (f == "transformOrigin") {
                a.transformOrigin = d.toString()
            }
            if (f == "transformPerspective") {
                a.transformPerspective = parseInt(d, 0)
            }
        });
        return a
    };
    var az = function (b) {
        var d = b.split("animation:");
        var c = {};
        c.animation = at(ak(), d[1]);
        var a = d[0].split(";");
        a2.each(a, function (h, g) {
            g = g.split(":");
            var j = g[0], f = g[1];
            if (j == "typ") {
                c.typ = f
            }
            if (j == "speed") {
                c.speed = parseInt(f, 0) / 1000
            }
            if (j == "start") {
                c.start = parseInt(f, 0) / 1000
            }
            if (j == "elementdelay") {
                c.elementdelay = parseFloat(f)
            }
            if (j == "ease") {
                c.ease = f
            }
        });
        return c
    };
    var aW = function (g, a, k, y) {
        function e() {
        }

        function x() {
        }

        if (g.data("ctl") == aK) {
            g.data("ctl", new punchgs.TimelineLite)
        }
        var t = g.data("ctl"), j = 0, w = 0, m = g.find(".tp-caption"),
            b = a.container.find(".tp-static-layers").find(".tp-caption");
        t.pause();
        a2.each(b, function (d, c) {
            m.push(c)
        });
        m.each(function (bA) {
            var bv = k, bI = -1, bF = a2(this);
            if (bF.hasClass("tp-static-layer")) {
                var by = bF.data("startslide"), bL = bF.data("endslide");
                if (by == -1 || by == "-1") {
                    bF.data("startslide", 0)
                }
                if (bL == -1 || bL == "-1") {
                    bF.data("endslide", a.slideamount)
                }
                if (by == 0 && bL == a.slideamount - 1) {
                    bF.data("endslide", a.slideamount + 1)
                }
                by = bF.data("startslide"), bL = bF.data("endslide");
                if (!bF.hasClass("tp-is-shown")) {
                    if (by <= a.next && bL >= a.next || by == a.next || bL == a.next) {
                        bF.addClass("tp-is-shown");
                        bI = 1
                    } else {
                        bI = 0
                    }
                } else {
                    if (bL == a.next || by > a.next || bL < a.next) {
                        bI = 2
                    } else {
                        bI = 0
                    }
                }
            }
            j = a.width / 2 - a.startwidth * a.bw / 2;
            var bu = a.bw;
            var bB = a.bh;
            if (a.fullScreen == "on") {
                w = a.height / 2 - a.startheight * a.bh / 2
            }
            if (a.autoHeight == "on" || a.minHeight != aK && a.minHeight > 0) {
                w = a.container.height() / 2 - a.startheight * a.bh / 2
            }
            if (w < 0) {
                w = 0
            }
            var bH = 0;
            if (a.width < a.hideCaptionAtLimit && bF.data("captionhidden") == "on") {
                bF.addClass("tp-hidden-caption");
                bH = 1
            } else {
                if (a.width < a.hideAllCaptionAtLimit || a.width < a.hideAllCaptionAtLilmit) {
                    bF.addClass("tp-hidden-caption");
                    bH = 1
                } else {
                    bF.removeClass("tp-hidden-caption")
                }
            }
            if (bH == 0) {
                if (bF.data("linktoslide") != aK && !bF.hasClass("hasclicklistener")) {
                    bF.addClass("hasclicklistener");
                    bF.css({cursor: "pointer"});
                    if (bF.data("linktoslide") != "no") {
                        bF.click(function () {
                            var d = a2(this);
                            var f = d.data("linktoslide");
                            if (f != "next" && f != "prev") {
                                a.container.data("showus", f);
                                a.container.parent().find(".tp-rightarrow").click()
                            } else {
                                if (f == "next") {
                                    a.container.parent().find(".tp-rightarrow").click()
                                } else {
                                    if (f == "prev") {
                                        a.container.parent().find(".tp-leftarrow").click()
                                    }
                                }
                            }
                        })
                    }
                }
                if (j < 0) {
                    j = 0
                }
                if (bF.hasClass("tp-videolayer") || bF.find("iframe").length > 0 || bF.find("video").length > 0) {
                    var bq = "iframe" + Math.round(Math.random() * 100000 + 1), bM = bF.data("videowidth"),
                        bs = bF.data("videoheight"), a9 = bF.data("videoattributes"), u = bF.data("ytid"),
                        br = bF.data("vimeoid"), o = bF.data("videpreload"), H = bF.data("videomp4"),
                        bb = bF.data("videowebm"), bC = bF.data("videoogv"), J = bF.data("videocontrols"), bc = "http",
                        bE = bF.data("videoloop") == "loop" ? "loop" : bF.data("videoloop") == "loopandnoslidestop" ? "loop" : "";
                    if (bF.data("thumbimage") != aK && bF.data("videoposter") == aK) {
                        bF.data("videoposter", bF.data("thumbimage"))
                    }
                    if (u != aK && String(u).length > 1 && bF.find("iframe").length == 0) {
                        bc = "https";
                        if (J == "none") {
                            a9 = a9.replace("controls=1", "controls=0");
                            if (a9.toLowerCase().indexOf("controls") == -1) {
                                a9 = a9 + "&controls=0"
                            }
                        }
                        bF.append('<iframe style="visible:hidden" src="' + bc + "://www.youtube.com/embed/" + u + "?" + a9 + '" width="' + bM + '" height="' + bs + '" style="width:' + bM + "px;height:" + bs + 'px"></iframe>')
                    }
                    if (br != aK && String(br).length > 1 && bF.find("iframe").length == 0) {
                        if (location.protocol === "https:") {
                            bc = "https"
                        }
                        bF.append('<iframe style="visible:hidden" src="' + bc + "://player.vimeo.com/video/" + br + "?" + a9 + '" width="' + bM + '" height="' + bs + '" style="width:' + bM + "px;height:" + bs + 'px"></iframe>')
                    }
                    if ((H != aK || bb != aK) && bF.find("video").length == 0) {
                        if (J != "controls") {
                            J = ""
                        }
                        var R = '<video style="visible:hidden" class="" ' + bE + ' preload="' + o + '" width="' + bM + '" height="' + bs + '"';
                        if (bF.data("videoposter") != aK) {
                            if (bF.data("videoposter") != aK) {
                                R = R + 'poster="' + bF.data("videoposter") + '">'
                            }
                        }
                        if (bb != aK && av().toLowerCase() == "firefox") {
                            R = R + '<source src="' + bb + '" type="video/webm" />'
                        }
                        if (H != aK) {
                            R = R + '<source src="' + H + '" type="video/mp4" />'
                        }
                        if (bC != aK) {
                            R = R + '<source src="' + bC + '" type="video/ogg" />'
                        }
                        R = R + "</video>";
                        bF.append(R);
                        if (J == "controls") {
                            bF.append('<div class="tp-video-controls"><div class="tp-video-button-wrap"><button type="button" class="tp-video-button tp-vid-play-pause">Play</button></div><div class="tp-video-seek-bar-wrap"><input  type="range" class="tp-seek-bar" value="0"></div><div class="tp-video-button-wrap"><button  type="button" class="tp-video-button tp-vid-mute">Mute</button></div><div class="tp-video-vol-bar-wrap"><input  type="range" class="tp-volume-bar" min="0" max="1" step="0.1" value="1"></div><div class="tp-video-button-wrap"><button  type="button" class="tp-video-button tp-vid-full-screen">Full-Screen</button></div></div>')
                        }
                    }
                    var bp = false;
                    if (bF.data("autoplayonlyfirsttime") == true || bF.data("autoplayonlyfirsttime") == "true" || bF.data("autoplay") == true) {
                        bF.data("autoplay", true);
                        bp = true
                    }
                    bF.find("iframe").each(function () {
                        var z = a2(this);
                        punchgs.TweenLite.to(z, 0.1, {
                            autoAlpha: 1,
                            zIndex: 0,
                            transformStyle: "preserve-3d",
                            z: 0,
                            rotationX: 0,
                            force3D: "auto"
                        });
                        if (aq()) {
                            var s = z.attr("src");
                            z.attr("src", "");
                            z.attr("src", s)
                        }
                        a.nextslideatend = bF.data("nextslideatend");
                        if (bF.data("videoposter") != aK && bF.data("videoposter").length > 2 && bF.data("autoplay") != true && !bv) {
                            if (bF.find(".tp-thumb-image").length == 0) {
                                bF.append('<div class="tp-thumb-image" style="cursor:pointer; position:absolute;top:0px;left:0px;width:100%;height:100%;background-image:url(' + bF.data("videoposter") + '); background-size:cover"></div>')
                            } else {
                                punchgs.TweenLite.set(bF.find(".tp-thumb-image"), {autoAlpha: 1})
                            }
                        }
                        if (z.attr("src").toLowerCase().indexOf("youtube") >= 0) {
                            if (!z.hasClass("HasListener")) {
                                try {
                                    z.attr("id", bq);
                                    var S;
                                    var N = setInterval(function () {
                                        if (YT != aK) {
                                            if (typeof YT.Player != aK && typeof YT.Player != "undefined") {
                                                S = new YT.Player(bq, {
                                                    events: {
                                                        onStateChange: al,
                                                        onReady: function (Y) {
                                                            var T = Y.target.getVideoEmbedCode(),
                                                                f = a2("#" + T.split('id="')[1].split('"')[0]),
                                                                p = f.closest(".tp-caption"), V = p.data("videorate"),
                                                                d = p.data("videostart");
                                                            if (V != aK) {
                                                                Y.target.setPlaybackRate(parseFloat(V))
                                                            }
                                                            if (!aq() && p.data("autoplay") == true || bp) {
                                                                p.data("timerplay", setTimeout(function () {
                                                                    Y.target.playVideo()
                                                                }, p.data("start")))
                                                            }
                                                            p.find(".tp-thumb-image").click(function () {
                                                                punchgs.TweenLite.to(a2(this), 0.3, {
                                                                    autoAlpha: 0,
                                                                    force3D: "auto",
                                                                    ease: punchgs.Power3.easeInOut
                                                                });
                                                                if (!aq()) {
                                                                    S.playVideo()
                                                                }
                                                            })
                                                        }
                                                    }
                                                })
                                            }
                                        }
                                        z.addClass("HasListener");
                                        bF.data("player", S);
                                        clearInterval(N)
                                    }, 100)
                                } catch (G) {
                                }
                            } else {
                                if (!k) {
                                    var S = bF.data("player");
                                    if (bF.data("forcerewind") == "on" && !aq()) {
                                        S.seekTo(0)
                                    }
                                    if (!aq() && bF.data("autoplay") == true || bp) {
                                        bF.data("timerplay", setTimeout(function () {
                                            S.playVideo()
                                        }, bF.data("start")))
                                    }
                                }
                            }
                        } else {
                            if (z.attr("src").toLowerCase().indexOf("vimeo") >= 0) {
                                if (!z.hasClass("HasListener")) {
                                    z.addClass("HasListener");
                                    z.attr("id", bq);
                                    var C = z.attr("src");
                                    var K = {}, h = C, I = /([^&=]+)=([^&]*)/g, Q;
                                    while (Q = I.exec(h)) {
                                        K[decodeURIComponent(Q[1])] = decodeURIComponent(Q[2])
                                    }
                                    if (K.player_id != aK) {
                                        C = C.replace(K.player_id, bq)
                                    } else {
                                        C = C + "&player_id=" + bq
                                    }
                                    try {
                                        C = C.replace("api=0", "api=1")
                                    } catch (G) {
                                    }
                                    C = C + "&api=1";
                                    z.attr("src", C);
                                    var S = bF.find("iframe")[0];
                                    var A = setInterval(function () {
                                        if ($f != aK) {
                                            if (typeof $f(bq).api != aK && typeof $f(bq).api != "undefined") {
                                                $f(S).addEvent("ready", function () {
                                                    a7(bq, bp)
                                                });
                                                clearInterval(A)
                                            }
                                        }
                                    }, 100)
                                } else {
                                    if (!k) {
                                        if (!aq() && (bF.data("autoplay") == true || bF.data("forcerewind") == "on")) {
                                            var z = bF.find("iframe");
                                            var E = z.attr("id");
                                            var L = $f(E);
                                            if (bF.data("forcerewind") == "on") {
                                                L.api("seekTo", 0)
                                            }
                                            bF.data("timerplay", setTimeout(function () {
                                                if (bF.data("autoplay") == true) {
                                                    L.api("play")
                                                }
                                            }, bF.data("start")))
                                        }
                                    }
                                }
                            }
                        }
                    });
                    if (aq() && bF.data("disablevideoonmobile") == 1 || a6(8)) {
                        bF.find("video").remove()
                    }
                    if (bF.find("video").length > 0) {
                        bF.find("video").each(function (p) {
                            var d = this, f = a2(this);
                            if (!f.parent().hasClass("html5vid")) {
                                f.wrap('<div class="html5vid" style="position:relative;top:0px;left:0px;width:auto;height:auto"></div>')
                            }
                            var h = f.parent();
                            an(d, "loadedmetadata", function (n) {
                                n.data("metaloaded", 1)
                            }(h));
                            clearInterval(h.data("interval"));
                            h.data("interval", setInterval(function () {
                                if (h.data("metaloaded") == 1 || d.duration != NaN) {
                                    clearInterval(h.data("interval"));
                                    if (!h.hasClass("HasListener")) {
                                        h.addClass("HasListener");
                                        if (bF.data("dottedoverlay") != "none" && bF.data("dottedoverlay") != aK) {
                                            if (bF.find(".tp-dottedoverlay").length != 1) {
                                                h.append('<div class="tp-dottedoverlay ' + bF.data("dottedoverlay") + '"></div>')
                                            }
                                        }
                                        if (f.attr("control") == aK) {
                                            if (h.find(".tp-video-play-button").length == 0) {
                                                h.append('<div class="tp-video-play-button"><i class="revicon-right-dir"></i><div class="tp-revstop"></div></div>')
                                            }
                                            h.find("video, .tp-poster, .tp-video-play-button").click(function () {
                                                if (h.hasClass("videoisplaying")) {
                                                    d.pause()
                                                } else {
                                                    d.play()
                                                }
                                            })
                                        }
                                        if (bF.data("forcecover") == 1 || bF.hasClass("fullscreenvideo")) {
                                            if (bF.data("forcecover") == 1) {
                                                ax(h, a.container);
                                                h.addClass("fullcoveredvideo");
                                                bF.addClass("fullcoveredvideo")
                                            }
                                            h.css({width: "100%", height: "100%"})
                                        }
                                        var G = bF.find(".tp-vid-play-pause")[0], K = bF.find(".tp-vid-mute")[0],
                                            A = bF.find(".tp-vid-full-screen")[0], z = bF.find(".tp-seek-bar")[0],
                                            C = bF.find(".tp-volume-bar")[0];
                                        if (G != aK) {
                                            an(G, "click", function () {
                                                if (d.paused == true) {
                                                    d.play()
                                                } else {
                                                    d.pause()
                                                }
                                            });
                                            an(K, "click", function () {
                                                if (d.muted == false) {
                                                    d.muted = true;
                                                    K.innerHTML = "Unmute"
                                                } else {
                                                    d.muted = false;
                                                    K.innerHTML = "Mute"
                                                }
                                            });
                                            an(A, "click", function () {
                                                if (d.requestFullscreen) {
                                                    d.requestFullscreen()
                                                } else {
                                                    if (d.mozRequestFullScreen) {
                                                        d.mozRequestFullScreen()
                                                    } else {
                                                        if (d.webkitRequestFullscreen) {
                                                            d.webkitRequestFullscreen()
                                                        }
                                                    }
                                                }
                                            });
                                            an(z, "change", function () {
                                                var n = d.duration * (z.value / 100);
                                                d.currentTime = n
                                            });
                                            an(d, "timeupdate", function () {
                                                var n = 100 / d.duration * d.currentTime;
                                                z.value = n
                                            });
                                            an(z, "mousedown", function () {
                                                d.pause()
                                            });
                                            an(z, "mouseup", function () {
                                                d.play()
                                            });
                                            an(C, "change", function () {
                                                d.volume = C.value
                                            })
                                        }
                                        an(d, "play", function () {
                                            if (bF.data("volume") == "mute") {
                                                d.muted = true
                                            }
                                            h.addClass("videoisplaying");
                                            if (bF.data("videoloop") == "loopandnoslidestop") {
                                                a.videoplaying = false;
                                                a.container.trigger("starttimer");
                                                a.container.trigger("revolution.slide.onvideostop")
                                            } else {
                                                a.videoplaying = true;
                                                a.container.trigger("stoptimer");
                                                a.container.trigger("revolution.slide.onvideoplay")
                                            }
                                            var L = bF.find(".tp-vid-play-pause")[0], N = bF.find(".tp-vid-mute")[0];
                                            if (L != aK) {
                                                L.innerHTML = "Pause"
                                            }
                                            if (N != aK && d.muted) {
                                                N.innerHTML = "Unmute"
                                            }
                                        });
                                        an(d, "pause", function () {
                                            h.removeClass("videoisplaying");
                                            a.videoplaying = false;
                                            a.container.trigger("starttimer");
                                            a.container.trigger("revolution.slide.onvideostop");
                                            var n = bF.find(".tp-vid-play-pause")[0];
                                            if (n != aK) {
                                                n.innerHTML = "Play"
                                            }
                                        });
                                        an(d, "ended", function () {
                                            h.removeClass("videoisplaying");
                                            a.videoplaying = false;
                                            a.container.trigger("starttimer");
                                            a.container.trigger("revolution.slide.onvideostop");
                                            if (a.nextslideatend == true) {
                                                a.container.revnext()
                                            }
                                        })
                                    }
                                    var s = false;
                                    if (bF.data("autoplayonlyfirsttime") == true || bF.data("autoplayonlyfirsttime") == "true") {
                                        s = true
                                    }
                                    var I = 16 / 9;
                                    if (bF.data("aspectratio") == "4:3") {
                                        I = 4 / 3
                                    }
                                    h.data("mediaAspect", I);
                                    if (h.closest(".tp-caption").data("forcecover") == 1) {
                                        ax(h, a.container);
                                        h.addClass("fullcoveredvideo")
                                    }
                                    f.css({display: "block"});
                                    a.nextslideatend = bF.data("nextslideatend");
                                    if (bF.data("autoplay") == true || s == true) {
                                        if (bF.data("videoloop") == "loopandnoslidestop") {
                                            a.videoplaying = false;
                                            a.container.trigger("starttimer");
                                            a.container.trigger("revolution.slide.onvideostop")
                                        } else {
                                            a.videoplaying = true;
                                            a.container.trigger("stoptimer");
                                            a.container.trigger("revolution.slide.onvideoplay")
                                        }
                                        if (bF.data("forcerewind") == "on" && !h.hasClass("videoisplaying")) {
                                            if (d.currentTime > 0) {
                                                d.currentTime = 0
                                            }
                                        }
                                        if (bF.data("volume") == "mute") {
                                            d.muted = true
                                        }
                                        h.data("timerplay", setTimeout(function () {
                                            if (bF.data("forcerewind") == "on" && !h.hasClass("videoisplaying")) {
                                                if (d.currentTime > 0) {
                                                    d.currentTime = 0
                                                }
                                            }
                                            if (bF.data("volume") == "mute") {
                                                d.muted = true
                                            }
                                            d.play()
                                        }, 10 + bF.data("start")))
                                    }
                                    if (h.data("ww") == aK) {
                                        h.data("ww", f.attr("width"))
                                    }
                                    if (h.data("hh") == aK) {
                                        h.data("hh", f.attr("height"))
                                    }
                                    if (!bF.hasClass("fullscreenvideo") && bF.data("forcecover") == 1) {
                                        try {
                                            h.width(h.data("ww") * a.bw);
                                            h.height(h.data("hh") * a.bh)
                                        } catch (E) {
                                        }
                                    }
                                    clearInterval(h.data("interval"))
                                }
                            }), 100)
                        })
                    }
                    if (bF.data("autoplay") == true) {
                        setTimeout(function () {
                            if (bF.data("videoloop") != "loopandnoslidestop") {
                                a.videoplaying = true;
                                a.container.trigger("stoptimer")
                            }
                        }, 200);
                        if (bF.data("videoloop") != "loopandnoslidestop") {
                            a.videoplaying = true;
                            a.container.trigger("stoptimer")
                        }
                        if (bF.data("autoplayonlyfirsttime") == true || bF.data("autoplayonlyfirsttime") == "true") {
                            bF.data("autoplay", false);
                            bF.data("autoplayonlyfirsttime", false)
                        }
                    }
                }
                var l = 0;
                var bn = 0;
                if (bF.find("img").length > 0) {
                    var O = bF.find("img");
                    if (O.width() == 0) {
                        O.css({width: "auto"})
                    }
                    if (O.height() == 0) {
                        O.css({height: "auto"})
                    }
                    if (O.data("ww") == aK && O.width() > 0) {
                        O.data("ww", O.width())
                    }
                    if (O.data("hh") == aK && O.height() > 0) {
                        O.data("hh", O.height())
                    }
                    var D = O.data("ww");
                    var W = O.data("hh");
                    if (D == aK) {
                        D = 0
                    }
                    if (W == aK) {
                        W = 0
                    }
                    O.width(D * a.bw);
                    O.height(W * a.bh);
                    l = O.width();
                    bn = O.height()
                } else {
                    if (bF.find("iframe").length > 0 || bF.find("video").length > 0) {
                        var i = false, O = bF.find("iframe");
                        if (O.length == 0) {
                            O = bF.find("video");
                            i = true
                        }
                        O.css({display: "block"});
                        if (bF.data("ww") == aK) {
                            bF.data("ww", O.width())
                        }
                        if (bF.data("hh") == aK) {
                            bF.data("hh", O.height())
                        }
                        var D = bF.data("ww"), W = bF.data("hh");
                        var c = bF;
                        if (c.data("fsize") == aK) {
                            c.data("fsize", parseInt(c.css("font-size"), 0) || 0)
                        }
                        if (c.data("pt") == aK) {
                            c.data("pt", parseInt(c.css("paddingTop"), 0) || 0)
                        }
                        if (c.data("pb") == aK) {
                            c.data("pb", parseInt(c.css("paddingBottom"), 0) || 0)
                        }
                        if (c.data("pl") == aK) {
                            c.data("pl", parseInt(c.css("paddingLeft"), 0) || 0)
                        }
                        if (c.data("pr") == aK) {
                            c.data("pr", parseInt(c.css("paddingRight"), 0) || 0)
                        }
                        if (c.data("mt") == aK) {
                            c.data("mt", parseInt(c.css("marginTop"), 0) || 0)
                        }
                        if (c.data("mb") == aK) {
                            c.data("mb", parseInt(c.css("marginBottom"), 0) || 0)
                        }
                        if (c.data("ml") == aK) {
                            c.data("ml", parseInt(c.css("marginLeft"), 0) || 0)
                        }
                        if (c.data("mr") == aK) {
                            c.data("mr", parseInt(c.css("marginRight"), 0) || 0)
                        }
                        if (c.data("bt") == aK) {
                            c.data("bt", parseInt(c.css("borderTop"), 0) || 0)
                        }
                        if (c.data("bb") == aK) {
                            c.data("bb", parseInt(c.css("borderBottom"), 0) || 0)
                        }
                        if (c.data("bl") == aK) {
                            c.data("bl", parseInt(c.css("borderLeft"), 0) || 0)
                        }
                        if (c.data("br") == aK) {
                            c.data("br", parseInt(c.css("borderRight"), 0) || 0)
                        }
                        if (c.data("lh") == aK) {
                            c.data("lh", parseInt(c.css("lineHeight"), 0) || 0)
                        }
                        if (c.data("lh") == "auto") {
                            c.data("lh", c.data("fsize") + 4)
                        }
                        var bx = a.width, bJ = a.height;
                        if (bx > a.startwidth) {
                            bx = a.startwidth
                        }
                        if (bJ > a.startheight) {
                            bJ = a.startheight
                        }
                        if (!bF.hasClass("fullscreenvideo")) {
                            bF.css({
                                "font-size": c.data("fsize") * a.bw + "px",
                                "padding-top": c.data("pt") * a.bh + "px",
                                "padding-bottom": c.data("pb") * a.bh + "px",
                                "padding-left": c.data("pl") * a.bw + "px",
                                "padding-right": c.data("pr") * a.bw + "px",
                                "margin-top": c.data("mt") * a.bh + "px",
                                "margin-bottom": c.data("mb") * a.bh + "px",
                                "margin-left": c.data("ml") * a.bw + "px",
                                "margin-right": c.data("mr") * a.bw + "px",
                                "border-top": c.data("bt") * a.bh + "px",
                                "border-bottom": c.data("bb") * a.bh + "px",
                                "border-left": c.data("bl") * a.bw + "px",
                                "border-right": c.data("br") * a.bw + "px",
                                "line-height": c.data("lh") * a.bh + "px",
                                height: W * a.bh + "px"
                            })
                        } else {
                            j = 0;
                            w = 0;
                            bF.data("x", 0);
                            bF.data("y", 0);
                            var bD = a.height;
                            if (a.autoHeight == "on") {
                                bD = a.container.height()
                            }
                            bF.css({width: a.width, height: bD})
                        }
                        if (i == false) {
                            O.width(D * a.bw);
                            O.height(W * a.bh)
                        } else {
                            if (bF.data("forcecover") != 1 && !bF.hasClass("fullscreenvideo")) {
                                O.width(D * a.bw);
                                O.height(W * a.bh)
                            }
                        }
                        l = O.width();
                        bn = O.height()
                    } else {
                        bF.find(".tp-resizeme, .tp-resizeme *").each(function () {
                            aN(a2(this), a)
                        });
                        if (bF.hasClass("tp-resizeme")) {
                            bF.find("*").each(function () {
                                aN(a2(this), a)
                            })
                        }
                        aN(bF, a);
                        bn = bF.outerHeight(true);
                        l = bF.outerWidth(true);
                        var bk = bF.outerHeight();
                        var bh = bF.css("backgroundColor");
                        bF.find(".frontcorner").css({
                            borderWidth: bk + "px",
                            left: 0 - bk + "px",
                            borderRight: "0px solid transparent",
                            borderTopColor: bh
                        });
                        bF.find(".frontcornertop").css({
                            borderWidth: bk + "px",
                            left: 0 - bk + "px",
                            borderRight: "0px solid transparent",
                            borderBottomColor: bh
                        });
                        bF.find(".backcorner").css({
                            borderWidth: bk + "px",
                            right: 0 - bk + "px",
                            borderLeft: "0px solid transparent",
                            borderBottomColor: bh
                        });
                        bF.find(".backcornertop").css({
                            borderWidth: bk + "px",
                            right: 0 - bk + "px",
                            borderLeft: "0px solid transparent",
                            borderTopColor: bh
                        })
                    }
                }
                if (a.fullScreenAlignForce == "on") {
                    j = 0;
                    w = 0
                }
                if (bF.data("voffset") == aK) {
                    bF.data("voffset", 0)
                }
                if (bF.data("hoffset") == aK) {
                    bF.data("hoffset", 0)
                }
                var U = bF.data("voffset") * bu;
                var bj = bF.data("hoffset") * bu;
                var bl = a.startwidth * bu;
                var r = a.startheight * bu;
                if (a.fullScreenAlignForce == "on") {
                    bl = a.container.width();
                    r = a.container.height()
                }
                if (bF.data("x") == "center" || bF.data("xcenter") == "center") {
                    bF.data("xcenter", "center");
                    bF.data("x", bl / 2 - bF.outerWidth(true) / 2 + bj)
                }
                if (bF.data("x") == "left" || bF.data("xleft") == "left") {
                    bF.data("xleft", "left");
                    bF.data("x", 0 / bu + bj)
                }
                if (bF.data("x") == "right" || bF.data("xright") == "right") {
                    bF.data("xright", "right");
                    bF.data("x", (bl - bF.outerWidth(true) + bj) / bu)
                }
                if (bF.data("y") == "center" || bF.data("ycenter") == "center") {
                    bF.data("ycenter", "center");
                    bF.data("y", r / 2 - bF.outerHeight(true) / 2 + U)
                }
                if (bF.data("y") == "top" || bF.data("ytop") == "top") {
                    bF.data("ytop", "top");
                    bF.data("y", 0 / a.bh + U)
                }
                if (bF.data("y") == "bottom" || bF.data("ybottom") == "bottom") {
                    bF.data("ybottom", "bottom");
                    bF.data("y", (r - bF.outerHeight(true) + U) / bu)
                }
                if (bF.data("start") == aK) {
                    bF.data("start", 1000)
                }
                var bg = bF.data("easing");
                if (bg == aK) {
                    bg = "punchgs.Power1.easeOut"
                }
                var bi = bF.data("start") / 1000, bf = bF.data("speed") / 1000;
                if (bF.data("x") == "center" || bF.data("xcenter") == "center") {
                    var bz = bF.data("x") + j
                } else {
                    var bz = bu * bF.data("x") + j
                }
                if (bF.data("y") == "center" || bF.data("ycenter") == "center") {
                    var P = bF.data("y") + w
                } else {
                    var P = a.bh * bF.data("y") + w
                }
                punchgs.TweenLite.set(bF, {top: P, left: bz, overwrite: "auto"});
                if (bI == 0) {
                    bv = true
                }
                if (bF.data("timeline") != aK && !bv) {
                    if (bI != 2) {
                        bF.data("timeline").gotoAndPlay(0)
                    }
                    bv = true
                }
                if (!bv) {
                    if (bF.data("timeline") != aK) {
                    }
                    var B = new punchgs.TimelineLite({smoothChildTiming: true, onStart: x});
                    B.pause();
                    if (a.fullScreenAlignForce == "on") {
                    }
                    var a8 = bF;
                    if (bF.data("mySplitText") != aK) {
                        bF.data("mySplitText").revert()
                    }
                    if (bF.data("splitin") == "chars" || bF.data("splitin") == "words" || bF.data("splitin") == "lines" || bF.data("splitout") == "chars" || bF.data("splitout") == "words" || bF.data("splitout") == "lines") {
                        if (bF.find("a").length > 0) {
                            bF.data("mySplitText", new punchgs.SplitText(bF.find("a"), {
                                type: "lines,words,chars",
                                charsClass: "tp-splitted",
                                wordsClass: "tp-splitted",
                                linesClass: "tp-splitted"
                            }))
                        } else {
                            if (bF.find(".tp-layer-inner-rotation").length > 0) {
                                bF.data("mySplitText", new punchgs.SplitText(bF.find(".tp-layer-inner-rotation"), {
                                    type: "lines,words,chars",
                                    charsClass: "tp-splitted",
                                    wordsClass: "tp-splitted",
                                    linesClass: "tp-splitted"
                                }))
                            } else {
                                bF.data("mySplitText", new punchgs.SplitText(bF, {
                                    type: "lines,words,chars",
                                    charsClass: "tp-splitted",
                                    wordsClass: "tp-splitted",
                                    linesClass: "tp-splitted"
                                }))
                            }
                        }
                        bF.addClass("splitted")
                    }
                    if (bF.data("splitin") == "chars") {
                        a8 = bF.data("mySplitText").chars
                    }
                    if (bF.data("splitin") == "words") {
                        a8 = bF.data("mySplitText").words
                    }
                    if (bF.data("splitin") == "lines") {
                        a8 = bF.data("mySplitText").lines
                    }
                    var M = ak();
                    var F = ak();
                    if (bF.data("repeat") != aK) {
                        repeatV = bF.data("repeat")
                    }
                    if (bF.data("yoyo") != aK) {
                        yoyoV = bF.data("yoyo")
                    }
                    if (bF.data("repeatdelay") != aK) {
                        repeatdelayV = bF.data("repeatdelay")
                    }
                    var ba = bF.attr("class");
                    if (ba.match("customin")) {
                        M = at(M, bF.data("customin"))
                    } else {
                        if (ba.match("randomrotate")) {
                            M.scale = Math.random() * 3 + 1;
                            M.rotation = Math.round(Math.random() * 200 - 100);
                            M.x = Math.round(Math.random() * 200 - 100);
                            M.y = Math.round(Math.random() * 200 - 100)
                        } else {
                            if (ba.match("lfr") || ba.match("skewfromright")) {
                                M.x = 15 + a.width
                            } else {
                                if (ba.match("lfl") || ba.match("skewfromleft")) {
                                    M.x = -15 - l
                                } else {
                                    if (ba.match("sfl") || ba.match("skewfromleftshort")) {
                                        M.x = -50
                                    } else {
                                        if (ba.match("sfr") || ba.match("skewfromrightshort")) {
                                            M.x = 50
                                        } else {
                                            if (ba.match("lft")) {
                                                M.y = -25 - bn
                                            } else {
                                                if (ba.match("lfb")) {
                                                    M.y = 25 + a.height
                                                } else {
                                                    if (ba.match("sft")) {
                                                        M.y = -50
                                                    } else {
                                                        if (ba.match("sfb")) {
                                                            M.y = 50
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                    if (ba.match("skewfromright") || bF.hasClass("skewfromrightshort")) {
                        M.skewX = -85
                    } else {
                        if (ba.match("skewfromleft") || bF.hasClass("skewfromleftshort")) {
                            M.skewX = 85
                        }
                    }
                    if (ba.match("fade") || ba.match("sft") || ba.match("sfl") || ba.match("sfb") || ba.match("skewfromleftshort") || ba.match("sfr") || ba.match("skewfromrightshort")) {
                        M.opacity = 0
                    }
                    if (av().toLowerCase() == "safari") {
                    }
                    var bw = bF.data("elementdelay") == aK ? 0 : bF.data("elementdelay");
                    F.ease = M.ease = bF.data("easing") == aK ? punchgs.Power1.easeInOut : bF.data("easing");
                    M.data = {};
                    M.data.oldx = M.x;
                    M.data.oldy = M.y;
                    F.data = {};
                    F.data.oldx = F.x;
                    F.data.oldy = F.y;
                    M.x = M.x * bu;
                    M.y = M.y * bu;
                    var bK = new punchgs.TimelineLite;
                    if (bI != 2) {
                        if (ba.match("customin")) {
                            if (a8 != bF) {
                                B.add(punchgs.TweenLite.set(bF, {
                                    force3D: "auto",
                                    opacity: 1,
                                    scaleX: 1,
                                    scaleY: 1,
                                    rotationX: 0,
                                    rotationY: 0,
                                    rotationZ: 0,
                                    skewX: 0,
                                    skewY: 0,
                                    z: 0,
                                    x: 0,
                                    y: 0,
                                    visibility: "visible",
                                    delay: 0,
                                    overwrite: "all"
                                }))
                            }
                            M.visibility = "hidden";
                            F.visibility = "visible";
                            F.overwrite = "all";
                            F.opacity = 1;
                            F.onComplete = e();
                            F.delay = bi;
                            F.force3D = "auto";
                            B.add(bK.staggerFromTo(a8, bf, M, F, bw), "frame0")
                        } else {
                            M.visibility = "visible";
                            M.transformPerspective = 600;
                            if (a8 != bF) {
                                B.add(punchgs.TweenLite.set(bF, {
                                    force3D: "auto",
                                    opacity: 1,
                                    scaleX: 1,
                                    scaleY: 1,
                                    rotationX: 0,
                                    rotationY: 0,
                                    rotationZ: 0,
                                    skewX: 0,
                                    skewY: 0,
                                    z: 0,
                                    x: 0,
                                    y: 0,
                                    visibility: "visible",
                                    delay: 0,
                                    overwrite: "all"
                                }))
                            }
                            F.visibility = "visible";
                            F.delay = bi;
                            F.onComplete = e();
                            F.opacity = 1;
                            F.force3D = "auto";
                            if (ba.match("randomrotate") && a8 != bF) {
                                for (var bA = 0; bA < a8.length; bA++) {
                                    var X = {};
                                    var bo = {};
                                    a2.extend(X, M);
                                    a2.extend(bo, F);
                                    M.scale = Math.random() * 3 + 1;
                                    M.rotation = Math.round(Math.random() * 200 - 100);
                                    M.x = Math.round(Math.random() * 200 - 100);
                                    M.y = Math.round(Math.random() * 200 - 100);
                                    if (bA != 0) {
                                        bo.delay = bi + bA * bw
                                    }
                                    B.append(punchgs.TweenLite.fromTo(a8[bA], bf, X, bo), "frame0")
                                }
                            } else {
                                B.add(bK.staggerFromTo(a8, bf, M, F, bw), "frame0")
                            }
                        }
                    }
                    bF.data("timeline", B);
                    var bm = [];
                    if (bF.data("frames") != aK) {
                        var be = bF.data("frames");
                        be = be.replace(/\s+/g, "");
                        be = be.replace("{", "");
                        var bd = be.split("}");
                        a2.each(bd, function (f, d) {
                            if (d.length > 0) {
                                var h = az(d);
                                ad(bF, a, h, "frame" + (f + 10), bu)
                            }
                        })
                    }
                    B = bF.data("timeline");
                    if (bF.data("end") != aK && (bI == -1 || bI == 2)) {
                        ac(bF, a, bF.data("end") / 1000, M, "frame99", bu)
                    } else {
                        if (bI == -1 || bI == 2) {
                            ac(bF, a, 999999, M, "frame99", bu)
                        } else {
                            ac(bF, a, 200, M, "frame99", bu)
                        }
                    }
                    B = bF.data("timeline");
                    bF.data("timeline", B);
                    ai(bF, bu);
                    B.resume()
                }
            }
            if (bv) {
                af(bF);
                ai(bF, bu);
                if (bF.data("timeline") != aK) {
                    var bG = bF.data("timeline").getTweensOf();
                    a2.each(bG, function (p, z) {
                        if (z.vars.data != aK) {
                            var h = z.vars.data.oldx * bu;
                            var d = z.vars.data.oldy * bu;
                            if (z.progress() != 1 && z.progress() != 0) {
                                try {
                                    z.vars.x = h;
                                    z.vary.y = d
                                } catch (f) {
                                }
                            } else {
                                if (z.progress() == 1) {
                                    punchgs.TweenLite.set(z.target, {x: h, y: d})
                                }
                            }
                        }
                    })
                }
            }
        });
        var v = a2("body").find("#" + a.container.attr("id")).find(".tp-bannertimer");
        v.data("opt", a);
        if (y != aK) {
            setTimeout(function () {
                y.resume()
            }, 30)
        }
    };
    var av = function () {
        var c = navigator.appName, a = navigator.userAgent, d;
        var b = a.match(/(opera|chrome|safari|firefox|msie)\/?\s*(\.?\d+(\.\d+)*)/i);
        if (b && (d = a.match(/version\/([\.\d]+)/i)) != null) {
            b[2] = d[1]
        }
        b = b ? [b[1], b[2]] : [c, navigator.appVersion, "-?"];
        return b[0]
    };
    var ar = function () {
        var c = navigator.appName, a = navigator.userAgent, d;
        var b = a.match(/(opera|chrome|safari|firefox|msie)\/?\s*(\.?\d+(\.\d+)*)/i);
        if (b && (d = a.match(/version\/([\.\d]+)/i)) != null) {
            b[2] = d[1]
        }
        b = b ? [b[1], b[2]] : [c, navigator.appVersion, "-?"];
        return b[1]
    };
    var aN = function (a, b) {
        if (a.data("fsize") == aK) {
            a.data("fsize", parseInt(a.css("font-size"), 0) || 0)
        }
        if (a.data("pt") == aK) {
            a.data("pt", parseInt(a.css("paddingTop"), 0) || 0)
        }
        if (a.data("pb") == aK) {
            a.data("pb", parseInt(a.css("paddingBottom"), 0) || 0)
        }
        if (a.data("pl") == aK) {
            a.data("pl", parseInt(a.css("paddingLeft"), 0) || 0)
        }
        if (a.data("pr") == aK) {
            a.data("pr", parseInt(a.css("paddingRight"), 0) || 0)
        }
        if (a.data("mt") == aK) {
            a.data("mt", parseInt(a.css("marginTop"), 0) || 0)
        }
        if (a.data("mb") == aK) {
            a.data("mb", parseInt(a.css("marginBottom"), 0) || 0)
        }
        if (a.data("ml") == aK) {
            a.data("ml", parseInt(a.css("marginLeft"), 0) || 0)
        }
        if (a.data("mr") == aK) {
            a.data("mr", parseInt(a.css("marginRight"), 0) || 0)
        }
        if (a.data("bt") == aK) {
            a.data("bt", parseInt(a.css("borderTopWidth"), 0) || 0)
        }
        if (a.data("bb") == aK) {
            a.data("bb", parseInt(a.css("borderBottomWidth"), 0) || 0)
        }
        if (a.data("bl") == aK) {
            a.data("bl", parseInt(a.css("borderLeftWidth"), 0) || 0)
        }
        if (a.data("br") == aK) {
            a.data("br", parseInt(a.css("borderRightWidth"), 0) || 0)
        }
        if (a.data("ls") == aK) {
            a.data("ls", parseInt(a.css("letterSpacing"), 0) || 0)
        }
        if (a.data("lh") == aK) {
            a.data("lh", parseInt(a.css("lineHeight"), 0) || "auto")
        }
        if (a.data("minwidth") == aK) {
            a.data("minwidth", parseInt(a.css("minWidth"), 0) || 0)
        }
        if (a.data("minheight") == aK) {
            a.data("minheight", parseInt(a.css("minHeight"), 0) || 0)
        }
        if (a.data("maxwidth") == aK) {
            a.data("maxwidth", parseInt(a.css("maxWidth"), 0) || "none")
        }
        if (a.data("maxheight") == aK) {
            a.data("maxheight", parseInt(a.css("maxHeight"), 0) || "none")
        }
        if (a.data("wii") == aK) {
            a.data("wii", parseInt(a.css("width"), 0) || 0)
        }
        if (a.data("hii") == aK) {
            a.data("hii", parseInt(a.css("height"), 0) || 0)
        }
        if (a.data("wan") == aK) {
            a.data("wan", a.css("-webkit-transition"))
        }
        if (a.data("moan") == aK) {
            a.data("moan", a.css("-moz-animation-transition"))
        }
        if (a.data("man") == aK) {
            a.data("man", a.css("-ms-animation-transition"))
        }
        if (a.data("ani") == aK) {
            a.data("ani", a.css("transition"))
        }
        if (a.data("lh") == "auto") {
            a.data("lh", a.data("fsize") + 4)
        }
        if (!a.hasClass("tp-splitted")) {
            a.css("-webkit-transition", "none");
            a.css("-moz-transition", "none");
            a.css("-ms-transition", "none");
            a.css("transition", "none");
            punchgs.TweenLite.set(a, {
                fontSize: Math.round(a.data("fsize") * b.bw) + "px",
                letterSpacing: Math.floor(a.data("ls") * b.bw) + "px",
                paddingTop: Math.round(a.data("pt") * b.bh) + "px",
                paddingBottom: Math.round(a.data("pb") * b.bh) + "px",
                paddingLeft: Math.round(a.data("pl") * b.bw) + "px",
                paddingRight: Math.round(a.data("pr") * b.bw) + "px",
                marginTop: a.data("mt") * b.bh + "px",
                marginBottom: a.data("mb") * b.bh + "px",
                marginLeft: a.data("ml") * b.bw + "px",
                marginRight: a.data("mr") * b.bw + "px",
                borderTopWidth: Math.round(a.data("bt") * b.bh) + "px",
                borderBottomWidth: Math.round(a.data("bb") * b.bh) + "px",
                borderLeftWidth: Math.round(a.data("bl") * b.bw) + "px",
                borderRightWidth: Math.round(a.data("br") * b.bw) + "px",
                lineHeight: Math.round(a.data("lh") * b.bh) + "px",
                minWidth: a.data("minwidth") * b.bw + "px",
                minHeight: a.data("minheight") * b.bh + "px",
                overwrite: "auto"
            });
            setTimeout(function () {
                a.css("-webkit-transition", a.data("wan"));
                a.css("-moz-transition", a.data("moan"));
                a.css("-ms-transition", a.data("man"));
                a.css("transition", a.data("ani"))
            }, 30);
            if (a.data("maxheight") != "none") {
                a.css({maxHeight: a.data("maxheight") * b.bh + "px"})
            }
            if (a.data("maxwidth") != "none") {
                a.css({maxWidth: a.data("maxwidth") * b.bw + "px"})
            }
        }
    };
    var ai = function (b, a) {
        b.find(".rs-pendulum").each(function () {
            var h = a2(this);
            if (h.data("timeline") == aK) {
                h.data("timeline", new punchgs.TimelineLite);
                var e = h.data("startdeg") == aK ? -20 : h.data("startdeg"),
                    f = h.data("enddeg") == aK ? 20 : h.data("enddeg"), g = h.data("speed") == aK ? 2 : h.data("speed"),
                    d = h.data("origin") == aK ? "50% 50%" : h.data("origin"),
                    c = h.data("easing") == aK ? punchgs.Power2.easeInOut : h.data("ease");
                e = e * a;
                f = f * a;
                h.data("timeline").append(new punchgs.TweenLite.fromTo(h, g, {
                    force3D: "auto",
                    rotation: e,
                    transformOrigin: d
                }, {rotation: f, ease: c}));
                h.data("timeline").append(new punchgs.TweenLite.fromTo(h, g, {
                    force3D: "auto",
                    rotation: f,
                    transformOrigin: d
                }, {
                    rotation: e, ease: c, onComplete: function () {
                        h.data("timeline").restart()
                    }
                }))
            }
        });
        b.find(".rs-rotate").each(function () {
            var e = a2(this);
            if (e.data("timeline") == aK) {
                e.data("timeline", new punchgs.TimelineLite);
                var c = e.data("startdeg") == aK ? 0 : e.data("startdeg"),
                    d = e.data("enddeg") == aK ? 360 : e.data("enddeg");
                speed = e.data("speed") == aK ? 2 : e.data("speed"), origin = e.data("origin") == aK ? "50% 50%" : e.data("origin"), easing = e.data("easing") == aK ? punchgs.Power2.easeInOut : e.data("easing");
                c = c * a;
                d = d * a;
                e.data("timeline").append(new punchgs.TweenLite.fromTo(e, speed, {
                    force3D: "auto",
                    rotation: c,
                    transformOrigin: origin
                }, {
                    rotation: d, ease: easing, onComplete: function () {
                        e.data("timeline").restart()
                    }
                }))
            }
        });
        b.find(".rs-slideloop").each(function () {
            var k = a2(this);
            if (k.data("timeline") == aK) {
                k.data("timeline", new punchgs.TimelineLite);
                var e = k.data("xs") == aK ? 0 : k.data("xs"), g = k.data("ys") == aK ? 0 : k.data("ys"),
                    j = k.data("xe") == aK ? 0 : k.data("xe"), d = k.data("ye") == aK ? 0 : k.data("ye"),
                    c = k.data("speed") == aK ? 2 : k.data("speed"),
                    h = k.data("easing") == aK ? punchgs.Power2.easeInOut : k.data("easing");
                e = e * a;
                g = g * a;
                j = j * a;
                d = d * a;
                k.data("timeline").append(new punchgs.TweenLite.fromTo(k, c, {force3D: "auto", x: e, y: g}, {
                    x: j,
                    y: d,
                    ease: h
                }));
                k.data("timeline").append(new punchgs.TweenLite.fromTo(k, c, {force3D: "auto", x: j, y: d}, {
                    x: e,
                    y: g,
                    onComplete: function () {
                        k.data("timeline").restart()
                    }
                }))
            }
        });
        b.find(".rs-pulse").each(function () {
            var g = a2(this);
            if (g.data("timeline") == aK) {
                g.data("timeline", new punchgs.TimelineLite);
                var e = g.data("zoomstart") == aK ? 0 : g.data("zoomstart"),
                    c = g.data("zoomend") == aK ? 0 : g.data("zoomend"),
                    d = g.data("speed") == aK ? 2 : g.data("speed"),
                    f = g.data("easing") == aK ? punchgs.Power2.easeInOut : g.data("easing");
                g.data("timeline").append(new punchgs.TweenLite.fromTo(g, d, {force3D: "auto", scale: e}, {
                    scale: c,
                    ease: f
                }));
                g.data("timeline").append(new punchgs.TweenLite.fromTo(g, d, {force3D: "auto", scale: c}, {
                    scale: e,
                    onComplete: function () {
                        g.data("timeline").restart()
                    }
                }))
            }
        });
        b.find(".rs-wave").each(function () {
            var h = a2(this);
            if (h.data("timeline") == aK) {
                h.data("timeline", new punchgs.TimelineLite);
                var e = h.data("angle") == aK ? 10 : h.data("angle"),
                    f = h.data("radius") == aK ? 10 : h.data("radius"),
                    g = h.data("speed") == aK ? -20 : h.data("speed"),
                    d = h.data("origin") == aK ? -20 : h.data("origin");
                e = e * a;
                f = f * a;
                var c = {a: 0, ang: e, element: h, unit: f};
                h.data("timeline").append(new punchgs.TweenLite.fromTo(c, g, {a: 360}, {
                    a: 0,
                    force3D: "auto",
                    ease: punchgs.Linear.easeNone,
                    onUpdate: function () {
                        var i = c.a * (Math.PI / 180);
                        punchgs.TweenLite.to(c.element, 0.1, {
                            force3D: "auto",
                            x: Math.cos(i) * c.unit,
                            y: c.unit * (1 - Math.sin(i))
                        })
                    },
                    onComplete: function () {
                        h.data("timeline").restart()
                    }
                }))
            }
        })
    };
    var af = function (a) {
        a.find(".rs-pendulum, .rs-slideloop, .rs-pulse, .rs-wave").each(function () {
            var b = a2(this);
            if (b.data("timeline") != aK) {
                b.data("timeline").pause();
                b.data("timeline", null)
            }
        })
    };
    var aE = function (e, c) {
        var a = 0;
        var b = e.find(".tp-caption"), d = c.container.find(".tp-static-layers").find(".tp-caption");
        a2.each(d, function (g, f) {
            b.push(f)
        });
        b.each(function (j) {
            var C = -1;
            var i = a2(this);
            if (i.hasClass("tp-static-layer")) {
                if (i.data("startslide") == -1 || i.data("startslide") == "-1") {
                    i.data("startslide", 0)
                }
                if (i.data("endslide") == -1 || i.data("endslide") == "-1") {
                    i.data("endslide", c.slideamount)
                }
                if (i.hasClass("tp-is-shown")) {
                    if (i.data("startslide") > c.next || i.data("endslide") < c.next) {
                        C = 2;
                        i.removeClass("tp-is-shown")
                    } else {
                        C = 0
                    }
                } else {
                    C = 2
                }
            }
            if (C != 0) {
                af(i);
                if (i.find("iframe").length > 0) {
                    punchgs.TweenLite.to(i.find("iframe"), 0.2, {autoAlpha: 0});
                    if (aq()) {
                        i.find("iframe").remove()
                    }
                    try {
                        var B = i.find("iframe");
                        var z = B.attr("id");
                        var w = $f(z);
                        w.api("pause");
                        clearTimeout(i.data("timerplay"))
                    } catch (r) {
                    }
                    try {
                        var y = i.data("player");
                        y.stopVideo();
                        clearTimeout(i.data("timerplay"))
                    } catch (r) {
                    }
                }
                if (i.find("video").length > 0) {
                    try {
                        i.find("video").each(function (h) {
                            var m = a2(this).parent();
                            var l = m.attr("id");
                            clearTimeout(m.data("timerplay"));
                            var f = this;
                            f.pause()
                        })
                    } catch (r) {
                    }
                }
                try {
                    var t = i.data("timeline");
                    var g = t.getLabelTime("frame99");
                    var x = t.time();
                    if (g > x) {
                        var A = t.getTweensOf(i);
                        a2.each(A, function (h, f) {
                            if (h != 0) {
                                f.pause()
                            }
                        });
                        if (i.css("opacity") != 0) {
                            var k = i.data("endspeed") == aK ? i.data("speed") : i.data("endspeed");
                            if (k > a) {
                                a = k
                            }
                            t.play("frame99")
                        } else {
                            t.progress(1, false)
                        }
                    }
                } catch (r) {
                }
            }
        });
        return a
    };
    var ad = function (h, k, g, d, f) {
        var j = h.data("timeline");
        var c = new punchgs.TimelineLite;
        var b = h;
        if (g.typ == "chars") {
            b = h.data("mySplitText").chars
        } else {
            if (g.typ == "words") {
                b = h.data("mySplitText").words
            } else {
                if (g.typ == "lines") {
                    b = h.data("mySplitText").lines
                }
            }
        }
        g.animation.ease = g.ease;
        if (g.animation.rotationZ != aK) {
            g.animation.rotation = g.animation.rotationZ
        }
        g.animation.data = {};
        g.animation.data.oldx = g.animation.x;
        g.animation.data.oldy = g.animation.y;
        g.animation.x = g.animation.x * f;
        g.animation.y = g.animation.y * f;
        j.add(c.staggerTo(b, g.speed, g.animation, g.elementdelay), g.start);
        j.addLabel(d, g.start);
        h.data("timeline", j)
    };
    var ac = function (w, j, b, m, A, g) {
        var z = w.data("timeline"), y = new punchgs.TimelineLite;
        var v = ak(), k = w.data("endspeed") == aK ? w.data("speed") : w.data("endspeed"), x = w.attr("class");
        v.ease = w.data("endeasing") == aK ? punchgs.Power1.easeInOut : w.data("endeasing");
        k = k / 1000;
        if (x.match("ltr") || x.match("ltl") || x.match("str") || x.match("stl") || x.match("ltt") || x.match("ltb") || x.match("stt") || x.match("stb") || x.match("skewtoright") || x.match("skewtorightshort") || x.match("skewtoleft") || x.match("skewtoleftshort") || x.match("fadeout") || x.match("randomrotateout")) {
            if (x.match("skewtoright") || x.match("skewtorightshort")) {
                v.skewX = 35
            } else {
                if (x.match("skewtoleft") || x.match("skewtoleftshort")) {
                    v.skewX = -35
                }
            }
            if (x.match("ltr") || x.match("skewtoright")) {
                v.x = j.width + 60
            } else {
                if (x.match("ltl") || x.match("skewtoleft")) {
                    v.x = 0 - (j.width + 60)
                } else {
                    if (x.match("ltt")) {
                        v.y = 0 - (j.height + 60)
                    } else {
                        if (x.match("ltb")) {
                            v.y = j.height + 60
                        } else {
                            if (x.match("str") || x.match("skewtorightshort")) {
                                v.x = 50;
                                v.opacity = 0
                            } else {
                                if (x.match("stl") || x.match("skewtoleftshort")) {
                                    v.x = -50;
                                    v.opacity = 0
                                } else {
                                    if (x.match("stt")) {
                                        v.y = -50;
                                        v.opacity = 0
                                    } else {
                                        if (x.match("stb")) {
                                            v.y = 50;
                                            v.opacity = 0
                                        } else {
                                            if (x.match("randomrotateout")) {
                                                v.x = Math.random() * j.width;
                                                v.y = Math.random() * j.height;
                                                v.scale = Math.random() * 2 + 0.3;
                                                v.rotation = Math.random() * 360 - 180;
                                                v.opacity = 0
                                            } else {
                                                if (x.match("fadeout")) {
                                                    v.opacity = 0
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
            if (x.match("skewtorightshort")) {
                v.x = 270
            } else {
                if (x.match("skewtoleftshort")) {
                    v.x = -270
                }
            }
            v.data = {};
            v.data.oldx = v.x;
            v.data.oldy = v.y;
            v.x = v.x * g;
            v.y = v.y * g;
            v.overwrite = "auto";
            var t = w;
            var t = w;
            if (w.data("splitout") == "chars") {
                t = w.data("mySplitText").chars
            } else {
                if (w.data("splitout") == "words") {
                    t = w.data("mySplitText").words
                } else {
                    if (w.data("splitout") == "lines") {
                        t = w.data("mySplitText").lines
                    }
                }
            }
            var d = w.data("endelementdelay") == aK ? 0 : w.data("endelementdelay");
            z.add(y.staggerTo(t, k, v, d), b)
        } else {
            if (w.hasClass("customout")) {
                v = at(v, w.data("customout"));
                var t = w;
                if (w.data("splitout") == "chars") {
                    t = w.data("mySplitText").chars
                } else {
                    if (w.data("splitout") == "words") {
                        t = w.data("mySplitText").words
                    } else {
                        if (w.data("splitout") == "lines") {
                            t = w.data("mySplitText").lines
                        }
                    }
                }
                var d = w.data("endelementdelay") == aK ? 0 : w.data("endelementdelay");
                v.onStart = function () {
                    punchgs.TweenLite.set(w, {
                        transformPerspective: v.transformPerspective,
                        transformOrigin: v.transformOrigin,
                        overwrite: "auto"
                    })
                };
                v.data = {};
                v.data.oldx = v.x;
                v.data.oldy = v.y;
                v.x = v.x * g;
                v.y = v.y * g;
                z.add(y.staggerTo(t, k, v, d), b)
            } else {
                m.delay = 0;
                z.add(punchgs.TweenLite.to(w, k, m), b)
            }
        }
        z.addLabel(A, b);
        w.data("timeline", z)
    };
    var ae = function (a, c) {
        a.children().each(function () {
            try {
                a2(this).die("click")
            } catch (d) {
            }
            try {
                a2(this).die("mouseenter")
            } catch (d) {
            }
            try {
                a2(this).die("mouseleave")
            } catch (d) {
            }
            try {
                a2(this).unbind("hover")
            } catch (d) {
            }
        });
        try {
            a.die("click", "mouseenter", "mouseleave")
        } catch (b) {
        }
        clearInterval(c.cdint);
        a = null
    };
    var aD = function (d, c) {
        c.cd = 0;
        c.loop = 0;
        if (c.stopAfterLoops != aK && c.stopAfterLoops > -1) {
            c.looptogo = c.stopAfterLoops
        } else {
            c.looptogo = 9999999
        }
        if (c.stopAtSlide != aK && c.stopAtSlide > -1) {
            c.lastslidetoshow = c.stopAtSlide
        } else {
            c.lastslidetoshow = 999
        }
        c.stopLoop = "off";
        if (c.looptogo == 0) {
            c.stopLoop = "on"
        }
        if (c.slideamount > 1 && !(c.stopAfterLoops == 0 && c.stopAtSlide == 1)) {
            var a = d.find(".tp-bannertimer");
            d.on("stoptimer", function () {
                var e = a2(this).find(".tp-bannertimer");
                e.data("tween").pause();
                if (c.hideTimerBar == "on") {
                    e.css({visibility: "hidden"})
                }
            });
            d.on("starttimer", function () {
                if (c.conthover != 1 && c.videoplaying != true && c.width > c.hideSliderAtLimit && c.bannertimeronpause != true && c.overnav != true) {
                    if (c.stopLoop == "on" && c.next == c.lastslidetoshow - 1 || c.noloopanymore == 1) {
                        c.noloopanymore = 1
                    } else {
                        a.css({visibility: "visible"});
                        a.data("tween").resume()
                    }
                }
                if (c.hideTimerBar == "on") {
                    a.css({visibility: "hidden"})
                }
            });
            d.on("restarttimer", function () {
                var e = a2(this).find(".tp-bannertimer");
                if (c.stopLoop == "on" && c.next == c.lastslidetoshow - 1 || c.noloopanymore == 1) {
                    c.noloopanymore = 1
                } else {
                    e.css({visibility: "visible"});
                    e.data("tween").kill();
                    e.data("tween", punchgs.TweenLite.fromTo(e, c.delay / 1000, {width: "0%"}, {
                        force3D: "auto",
                        width: "100%",
                        ease: punchgs.Linear.easeNone,
                        onComplete: b,
                        delay: 1
                    }))
                }
                if (c.hideTimerBar == "on") {
                    e.css({visibility: "hidden"})
                }
            });
            d.on("nulltimer", function () {
                a.data("tween").pause(0);
                if (c.hideTimerBar == "on") {
                    a.css({visibility: "hidden"})
                }
            });
            var b = function () {
                if (a2("body").find(d).length == 0) {
                    ae(d, c);
                    clearInterval(c.cdint)
                }
                d.trigger("revolution.slide.slideatend");
                if (d.data("conthover-changed") == 1) {
                    c.conthover = d.data("conthover");
                    d.data("conthover-changed", 0)
                }
                c.act = c.next;
                c.next = c.next + 1;
                if (c.next > d.find(">ul >li").length - 1) {
                    c.next = 0;
                    c.looptogo = c.looptogo - 1;
                    if (c.looptogo <= 0) {
                        c.stopLoop = "on"
                    }
                }
                if (c.stopLoop == "on" && c.next == c.lastslidetoshow - 1) {
                    d.find(".tp-bannertimer").css({visibility: "hidden"});
                    d.trigger("revolution.slide.onstop");
                    c.noloopanymore = 1
                } else {
                    a.data("tween").restart()
                }
                am(d, c)
            };
            a.data("tween", punchgs.TweenLite.fromTo(a, c.delay / 1000, {width: "0%"}, {
                force3D: "auto",
                width: "100%",
                ease: punchgs.Linear.easeNone,
                onComplete: b,
                delay: 1
            }));
            a.data("opt", c);
            d.hover(function () {
                if (c.onHoverStop == "on" && !aq()) {
                    d.trigger("stoptimer");
                    d.trigger("revolution.slide.onpause");
                    var e = d.find(">ul >li:eq(" + c.next + ") .slotholder");
                    e.find(".defaultimg").each(function () {
                        var f = a2(this);
                        if (f.data("kenburn") != aK) {
                            f.data("kenburn").pause()
                        }
                    })
                }
            }, function () {
                if (d.data("conthover") != 1) {
                    d.trigger("revolution.slide.onresume");
                    d.trigger("starttimer");
                    var e = d.find(">ul >li:eq(" + c.next + ") .slotholder");
                    e.find(".defaultimg").each(function () {
                        var f = a2(this);
                        if (f.data("kenburn") != aK) {
                            f.data("kenburn").play()
                        }
                    })
                }
            })
        }
    };
    var aq = function () {
        var b = ["android", "webos", "iphone", "ipad", "blackberry", "Android", "webos", , "iPod", "iPhone", "iPad", "Blackberry", "BlackBerry"];
        var a = false;
        for (var c in b) {
            if (navigator.userAgent.split(b[c]).length > 1) {
                a = true
            }
        }
        return a
    };
    var ap = function (g, c, j) {
        var f = c.data("owidth");
        var b = c.data("oheight");
        if (f / b > j.width / j.height) {
            var d = j.container.width() / f;
            var h = b * d;
            var a = h / j.container.height() * g;
            g = g * (100 / a);
            a = 100;
            g = g;
            return g + "% " + a + "% 1"
        } else {
            var d = j.container.width() / f;
            var h = b * d;
            var a = h / j.container.height() * g;
            return g + "% " + a + "%"
        }
    };
    var aj = function (I, F, L, D) {
        try {
            var H = I.find(">ul:first-child >li:eq(" + F.act + ")")
        } catch (B) {
            var H = I.find(">ul:first-child >li:eq(1)")
        }
        F.lastslide = F.act;
        var P = I.find(">ul:first-child >li:eq(" + F.next + ")"), K = P.find(".slotholder"), R = K.data("bgposition"),
            M = K.data("bgpositionend"), G = K.data("zoomstart") / 100, Q = K.data("zoomend") / 100,
            A = K.data("rotationstart"), J = K.data("rotationend"), O = K.data("bgfit"), k = K.data("bgfitend"),
            U = K.data("easeme"), z = K.data("duration") / 1000, C = 100;
        if (O == aK) {
            O = 100
        }
        if (k == aK) {
            k = 100
        }
        var e = O, t = k;
        O = ap(O, K, F);
        k = ap(k, K, F);
        C = ap(100, K, F);
        if (G == aK) {
            G = 1
        }
        if (Q == aK) {
            Q = 1
        }
        if (A == aK) {
            A = 0
        }
        if (J == aK) {
            J = 0
        }
        if (G < 1) {
            G = 1
        }
        if (Q < 1) {
            Q = 1
        }
        var a = {};
        a.w = parseInt(C.split(" ")[0], 0), a.h = parseInt(C.split(" ")[1], 0);
        var j = false;
        if (C.split(" ")[2] == "1") {
            j = true
        }
        K.find(".defaultimg").each(function () {
            var w = a2(this);
            if (K.find(".kenburnimg").length == 0) {
                K.append('<div class="kenburnimg" style="position:absolute;z-index:1;width:100%;height:100%;top:0px;left:0px;"><img src="' + w.attr("src") + '" style="-webkit-touch-callout: none;-webkit-user-select: none;-khtml-user-select: none;-moz-user-select: none;-ms-user-select: none;user-select: none;position:absolute;width:' + a.w + "%;height:" + a.h + '%;"></div>')
            } else {
                K.find(".kenburnimg img").css({width: a.w + "%", height: a.h + "%"})
            }
            var g = K.find(".kenburnimg img");
            var h = au(F, R, O, g, j), c = au(F, M, k, g, j);
            if (j) {
                h.w = e / 100;
                c.w = t / 100
            }
            if (D) {
                punchgs.TweenLite.set(g, {
                    autoAlpha: 0,
                    transformPerspective: 1200,
                    transformOrigin: "0% 0%",
                    top: 0,
                    left: 0,
                    scale: h.w,
                    x: h.x,
                    y: h.y
                });
                var s = h.w, l = s * g.width() - F.width, b = s * g.height() - F.height, m = Math.abs(h.x / l * 100),
                    r = Math.abs(h.y / b * 100);
                if (b == 0) {
                    r = 0
                }
                if (l == 0) {
                    m = 0
                }
                w.data("bgposition", m + "% " + r + "%");
                if (!a6(8)) {
                    w.data("currotate", ab(g))
                }
                if (!a6(8)) {
                    w.data("curscale", a.w * s + "%  " + (a.h * s + "%"))
                }
                K.find(".kenburnimg").remove()
            } else {
                w.data("kenburn", punchgs.TweenLite.fromTo(g, z, {
                    autoAlpha: 1,
                    force3D: punchgs.force3d,
                    transformOrigin: "0% 0%",
                    top: 0,
                    left: 0,
                    scale: h.w,
                    x: h.x,
                    y: h.y
                }, {
                    autoAlpha: 1, rotationZ: J, ease: U, x: c.x, y: c.y, scale: c.w, onUpdate: function () {
                        var p = g[0]._gsTransform.scaleX;
                        var f = p * g.width() - F.width, n = p * g.height() - F.height,
                            v = Math.abs(g[0]._gsTransform.x / f * 100), d = Math.abs(g[0]._gsTransform.y / n * 100);
                        if (n == 0) {
                            d = 0
                        }
                        if (f == 0) {
                            v = 0
                        }
                        w.data("bgposition", v + "% " + d + "%");
                        if (!a6(8)) {
                            w.data("currotate", ab(g))
                        }
                        if (!a6(8)) {
                            w.data("curscale", a.w * p + "%  " + (a.h * p + "%"))
                        }
                    }
                }))
            }
        })
    };
    var au = function (f, b, g, d, a) {
        var c = {};
        if (!a) {
            c.w = parseInt(g.split(" ")[0], 0) / 100
        } else {
            c.w = parseInt(g.split(" ")[1], 0) / 100
        }
        switch (b) {
            case"left top":
            case"top left":
                c.x = 0;
                c.y = 0;
                break;
            case"center top":
            case"top center":
                c.x = ((0 - d.width()) * c.w + parseInt(f.width, 0)) / 2;
                c.y = 0;
                break;
            case"top right":
            case"right top":
                c.x = (0 - d.width()) * c.w + parseInt(f.width, 0);
                c.y = 0;
                break;
            case"center left":
            case"left center":
                c.x = 0;
                c.y = ((0 - d.height()) * c.w + parseInt(f.height, 0)) / 2;
                break;
            case"center center":
                c.x = ((0 - d.width()) * c.w + parseInt(f.width, 0)) / 2;
                c.y = ((0 - d.height()) * c.w + parseInt(f.height, 0)) / 2;
                break;
            case"center right":
            case"right center":
                c.x = (0 - d.width()) * c.w + parseInt(f.width, 0);
                c.y = ((0 - d.height()) * c.w + parseInt(f.height, 0)) / 2;
                break;
            case"bottom left":
            case"left bottom":
                c.x = 0;
                c.y = (0 - d.height()) * c.w + parseInt(f.height, 0);
                break;
            case"bottom center":
            case"center bottom":
                c.x = ((0 - d.width()) * c.w + parseInt(f.width, 0)) / 2;
                c.y = (0 - d.height()) * c.w + parseInt(f.height, 0);
                break;
            case"bottom right":
            case"right bottom":
                c.x = (0 - d.width()) * c.w + parseInt(f.width, 0);
                c.y = (0 - d.height()) * c.w + parseInt(f.height, 0);
                break
        }
        return c
    };
    var ab = function (f) {
        var b = f.css("-webkit-transform") || f.css("-moz-transform") || f.css("-ms-transform") || f.css("-o-transform") || f.css("transform");
        if (b !== "none") {
            var g = b.split("(")[1].split(")")[0].split(",");
            var d = g[0];
            var a = g[1];
            var c = Math.round(Math.atan2(a, d) * (180 / Math.PI))
        } else {
            var c = 0
        }
        return c < 0 ? c += 360 : c
    };
    var aa = function (h, f) {
        try {
            var d = h.find(">ul:first-child >li:eq(" + f.act + ")")
        } catch (e) {
            var d = h.find(">ul:first-child >li:eq(1)")
        }
        f.lastslide = f.act;
        var g = h.find(">ul:first-child >li:eq(" + f.next + ")");
        var c = d.find(".slotholder");
        var b = g.find(".slotholder");
        h.find(".defaultimg").each(function () {
            var a = a2(this);
            punchgs.TweenLite.killTweensOf(a, false);
            punchgs.TweenLite.set(a, {scale: 1, rotationZ: 0});
            punchgs.TweenLite.killTweensOf(a.data("kenburn img"), false);
            if (a.data("kenburn") != aK) {
                a.data("kenburn").pause()
            }
            if (a.data("currotate") != aK && a.data("bgposition") != aK && a.data("curscale") != aK) {
                punchgs.TweenLite.set(a, {
                    rotation: a.data("currotate"),
                    backgroundPosition: a.data("bgposition"),
                    backgroundSize: a.data("curscale")
                })
            }
            if (a != aK && a.data("kenburn img") != aK && a.data("kenburn img").length > 0) {
                punchgs.TweenLite.set(a.data("kenburn img"), {autoAlpha: 0})
            }
        })
    };
    var aO = function (a, b) {
        if (aq() && b.parallaxDisableOnMobile == "on") {
            return false
        }
        a.find(">ul:first-child >li").each(function () {
            var c = a2(this);
            for (var d = 1; d <= 10; d++) {
                c.find(".rs-parallaxlevel-" + d).each(function () {
                    var e = a2(this);
                    e.wrap('<div style="position:absolute;top:0px;left:0px;width:100%;height:100%;z-index:' + e.css("zIndex") + '" class="tp-parallax-container" data-parallaxlevel="' + b.parallaxLevels[d - 1] + '"></div>')
                })
            }
        });
        if (b.parallax == "mouse" || b.parallax == "scroll+mouse" || b.parallax == "mouse+scroll") {
            a.mouseenter(function (g) {
                var j = a.find(".current-sr-slide-visible");
                var f = a.offset().top, c = a.offset().left, d = g.pageX - c, h = g.pageY - f;
                j.data("enterx", d);
                j.data("entery", h)
            });
            a.on("mousemove.hoverdir, mouseleave.hoverdir", function (j) {
                var g = a.find(".current-sr-slide-visible");
                switch (j.type) {
                    case"mousemove":
                        var h = a.offset().top, m = a.offset().left, e = g.data("enterx"), d = g.data("entery"),
                            k = e - (j.pageX - m), c = d - (j.pageY - h);
                        g.find(".tp-parallax-container").each(function () {
                            var l = a2(this), o = parseInt(l.data("parallaxlevel"), 0) / 100, f = k * o, n = c * o;
                            if (b.parallax == "scroll+mouse" || b.parallax == "mouse+scroll") {
                                punchgs.TweenLite.to(l, 0.4, {
                                    force3D: "auto",
                                    x: f,
                                    ease: punchgs.Power3.easeOut,
                                    overwrite: "all"
                                })
                            } else {
                                punchgs.TweenLite.to(l, 0.4, {
                                    force3D: "auto",
                                    x: f,
                                    y: n,
                                    ease: punchgs.Power3.easeOut,
                                    overwrite: "all"
                                })
                            }
                        });
                        break;
                    case"mouseleave":
                        g.find(".tp-parallax-container").each(function () {
                            var f = a2(this);
                            if (b.parallax == "scroll+mouse" || b.parallax == "mouse+scroll") {
                                punchgs.TweenLite.to(f, 1.5, {force3D: "auto", x: 0, ease: punchgs.Power3.easeOut})
                            } else {
                                punchgs.TweenLite.to(f, 1.5, {
                                    force3D: "auto",
                                    x: 0,
                                    y: 0,
                                    ease: punchgs.Power3.easeOut
                                })
                            }
                        });
                        break
                }
            });
            if (aq()) {
                window.ondeviceorientation = function (j) {
                    var g = Math.round(j.beta || 0), e = Math.round(j.gamma || 0);
                    var f = a.find(".current-sr-slide-visible");
                    if (a2(window).width() > a2(window).height()) {
                        var h = e;
                        e = g;
                        g = h
                    }
                    var d = 360 / a.width() * e, c = 180 / a.height() * g;
                    f.find(".tp-parallax-container").each(function () {
                        var l = a2(this), o = parseInt(l.data("parallaxlevel"), 0) / 100, m = d * o, k = c * o;
                        punchgs.TweenLite.to(l, 0.2, {force3D: "auto", x: m, y: k, ease: punchgs.Power3.easeOut})
                    })
                }
            }
        }
        if (b.parallax == "scroll" || b.parallax == "scroll+mouse" || b.parallax == "mouse+scroll") {
            a2(window).on("scroll", function (c) {
                a0(a, b)
            })
        }
    };
    var a0 = function (v, e) {
        if (aq() && e.parallaxDisableOnMobile == "on") {
            return false
        }
        var b = v.offset().top, h = a2(window).scrollTop(), w = b + v.height() / 2, d = b + v.height() / 2 - h,
            p = a2(window).height() / 2, m = p - d;
        if (w < p) {
            m = m - (p - w)
        }
        var j = v.find(".current-sr-slide-visible");
        v.find(".tp-parallax-container").each(function (c) {
            var l = a2(this), f = parseInt(l.data("parallaxlevel"), 0) / 100, a = m * f;
            l.data("parallaxoffset", a);
            punchgs.TweenLite.to(l, 0.2, {force3D: "auto", y: a, ease: punchgs.Power3.easeOut})
        });
        if (e.parallaxBgFreeze != "on") {
            var g = e.parallaxLevels[0] / 100, k = m * g;
            punchgs.TweenLite.to(v, 0.2, {force3D: "auto", y: k, ease: punchgs.Power3.easeOut})
        }
    };
    var aV = function (j, g) {
        var e = j.parent();
        if (g.navigationType == "thumb" || g.navsecond == "both") {
            e.append('<div class="tp-bullets tp-thumbs ' + g.navigationStyle + '"><div class="tp-mask"><div class="tp-thumbcontainer"></div></div></div>')
        }
        var f = e.find(".tp-bullets.tp-thumbs .tp-mask .tp-thumbcontainer");
        var h = f.parent();
        h.width(g.thumbWidth * g.thumbAmount);
        h.height(g.thumbHeight);
        h.parent().width(g.thumbWidth * g.thumbAmount);
        h.parent().height(g.thumbHeight);
        j.find(">ul:first >li").each(function (n) {
            var m = j.find(">ul:first >li:eq(" + n + ")");
            var p = m.find(".defaultimg").css("backgroundColor");
            if (m.data("thumb") != aK) {
                var l = m.data("thumb")
            } else {
                var l = m.find("img:first").attr("src")
            }
            f.append('<div class="bullet thumb" style="background-color:' + p + ";position:relative;width:" + g.thumbWidth + "px;height:" + g.thumbHeight + "px;background-image:url(" + l + ') !important;background-size:cover;background-position:center center;"></div>');
            var k = f.find(".bullet:first")
        });
        var d = 10;
        f.find(".bullet").each(function (k) {
            var a = a2(this);
            if (k == g.slideamount - 1) {
                a.addClass("last")
            }
            if (k == 0) {
                a.addClass("first")
            }
            a.width(g.thumbWidth);
            a.height(g.thumbHeight);
            if (d < a.outerWidth(true)) {
                d = a.outerWidth(true)
            }
            a.click(function () {
                if (g.transition == 0 && a.index() != g.act) {
                    g.next = a.index();
                    a1(g, j)
                }
            })
        });
        var c = d * j.find(">ul:first >li").length;
        var b = f.parent().width();
        g.thumbWidth = d;
        if (b < c) {
            a2(document).mousemove(function (a) {
                a2("body").data("mousex", a.pageX)
            });
            f.parent().mouseenter(function () {
                var y = a2(this);
                var k = y.offset(), p = a2("body").data("mousex") - k.left, z = y.width(),
                    m = y.find(".bullet:first").outerWidth(true), x = m * j.find(">ul:first >li").length,
                    w = x - z + 15, v = w / z;
                y.addClass("over");
                p = p - 30;
                var n = 0 - p * v;
                if (n > 0) {
                    n = 0
                }
                if (n < 0 - x + z) {
                    n = 0 - x + z
                }
                aB(y, n, 200)
            });
            f.parent().mousemove(function () {
                var y = a2(this), k = y.offset(), p = a2("body").data("mousex") - k.left, z = y.width(),
                    m = y.find(".bullet:first").outerWidth(true), x = m * j.find(">ul:first >li").length - 1,
                    w = x - z + 15, v = w / z;
                p = p - 3;
                if (p < 6) {
                    p = 0
                }
                if (p + 3 > z - 6) {
                    p = z
                }
                var n = 0 - p * v;
                if (n > 0) {
                    n = 0
                }
                if (n < 0 - x + z) {
                    n = 0 - x + z
                }
                aB(y, n, 0)
            });
            f.parent().mouseleave(function () {
                var a = a2(this);
                a.removeClass("over");
                aC(j)
            })
        }
    };
    var aC = function (k) {
        var v = k.parent().find(".tp-bullets.tp-thumbs .tp-mask .tp-thumbcontainer"), d = v.parent(), b = d.offset(),
            h = d.find(".bullet:first").outerWidth(true), w = d.find(".bullet.selected").index() * h, c = d.width(),
            h = d.find(".bullet:first").outerWidth(true), p = h * k.find(">ul:first >li").length, m = p - c, j = m / c,
            g = 0 - w;
        if (g > 0) {
            g = 0
        }
        if (g < 0 - p + c) {
            g = 0 - p + c
        }
        if (!d.hasClass("over")) {
            aB(d, g, 200)
        }
    };
    var aB = function (b, a, c) {
        punchgs.TweenLite.to(b.find(".tp-thumbcontainer"), 0.2, {
            force3D: "auto",
            left: a,
            ease: punchgs.Power3.easeOut,
            overwrite: "auto"
        })
    }
})(jQuery);
(function (a) {
    a.fn.extend({
        retinise: function (c) {
            var f = {suffix: "@2x", srcattr: "data-src", retattr: "data-ret", altattr: "data-alt"}, e = a.extend(f, c),
                b = window.devicePixelRatio, d = b > 1 ? !0 : !1;
            a(this).each(function () {
                var i = a(this), k = i.css("display");
                i.css("display", "none");
                if (i.attr(e.srcattr)) {
                    var j = i.attr(e.srcattr), h = i.attr(e.altattr), g = i.attr(e.retattr);
                    if (d === !0) {
                        i.attr(e.retattr) ? i.attr({src: g, alt: h}) : i.attr({
                            src: j.replace(/\.\w+$/, function (l) {
                                return e.suffix + l
                            }), alt: h
                        });
                        i.load(function () {
                            var m = i.height() / b, l = i.width() / b;
                            i.attr({height: m, width: l}).css({display: k})
                        })
                    } else {
                        i.attr({src: j, alt: h}).css({display: k})
                    }
                }
            })
        }
    })
})(jQuery);
(function (a) {
    a.fn.dcFlickr = function (c) {
        var g = {
            base: "http://api.flickr.com/services/feeds/",
            api: "photos_public.gne",
            limit: 20,
            q: {lang: "en-us", format: "json", jsoncallback: "?"},
            onLoad: function () {
            }
        };
        var c = a.extend(g, c);
        var b = g.base + g.api + "?";
        var f = true;
        for (var d in g.q) {
            if (!f) {
                b += "&"
            }
            b += d + "=" + g.q[d];
            f = false
        }
        var e = this;
        return e.each(function (h) {
            var i = "";
            limit = g.limit;
            a.getJSON(b, function (j) {
                a.each(j.items, function (l, m) {
                    if (l < limit) {
                        var k = (m.media.m).replace("_m.jpg", "_q.jpg");
                        i += '<div class="item"><figure>';
                        i += '<img src="' + k + '" alt="" />';
                        i += '<a href="' + m.link + '" target="_blank" class="link-out"><i class="icon-link"></i></a></figure></div>'
                    }
                });
                e.html(i)
            }).success(function () {
                g.onLoad.call(this)
            })
        })
    }
})(jQuery);
!function (b) {
    b.fn.animatedModal = function (c) {
        function f() {
            h.css({"z-index": j.zIndexOut}), j.afterClose()
        }

        function u() {
            j.afterOpen()
        }

        var k = b(this), j = b.extend({
                modalTarget: "animatedModal",
                position: "fixed",
                width: "100%",
                height: "100%",
                top: "0px",
                left: "0px",
                zIndexIn: "9999",
                zIndexOut: "-9999",
                color: "#39BEB9",
                opacityIn: "1",
                opacityOut: "0",
                animatedIn: "zoomIn",
                animatedOut: "zoomOut",
                animationDuration: ".6s",
                overflow: "auto",
                beforeOpen: function () {
                },
                afterOpen: function () {
                },
                beforeClose: function () {
                },
                afterClose: function () {
                }
            }, c), p = b(".close-" + j.modalTarget), v = b(k).attr("href"), h = b("body").find("#" + j.modalTarget),
            g = "#" + h.attr("id");
        h.addClass("animated"), h.addClass(j.modalTarget + "-off");
        var a = {
            position: j.position,
            width: j.width,
            height: j.height,
            top: j.top,
            left: j.left,
            "background-color": j.color,
            "overflow-y": j.overflow,
            "z-index": j.zIndexOut,
            opacity: j.opacityOut,
            "-webkit-animation-duration": j.animationDuration
        };
        h.css(a), k.click(function (d) {
            d.preventDefault(), b("body, html").css({overflow: "hidden"}), v == g && (h.hasClass(j.modalTarget + "-off") && (h.removeClass(j.animatedOut), h.removeClass(j.modalTarget + "-off"), h.addClass(j.modalTarget + "-on")), h.hasClass(j.modalTarget + "-on") && (j.beforeOpen(), h.css({
                opacity: j.opacityIn,
                "z-index": j.zIndexIn
            }), h.addClass(j.animatedIn), h.one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", u)))
        }), p.click(function (d) {
            d.preventDefault(), b("body, html").css({overflow: "auto"}), j.beforeClose(), h.hasClass(j.modalTarget + "-on") && (h.removeClass(j.modalTarget + "-on"), h.addClass(j.modalTarget + "-off")), h.hasClass(j.modalTarget + "-off") && (h.removeClass(j.animatedIn), h.addClass(j.animatedOut), h.one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", f))
        })
    }
}(jQuery);
/*! Backstretch - v2.0.4 - 2013-06-19
* http://srobbin.com/jquery-plugins/backstretch/
* Copyright (c) 2013 Scott Robbin; Licensed MIT */
(function (z, y, g) {
    z.fn.backstretch = function (d, a) {
        (d === g || 0 === d.length) && z.error("No images were supplied for Backstretch");
        0 === z(y).scrollTop() && y.scrollTo(0, 0);
        return this.each(function () {
            var f = z(this), e = f.data("backstretch");
            if (e) {
                if ("string" == typeof d && "function" == typeof e[d]) {
                    e[d](a);
                    return
                }
                a = z.extend(e.options, a);
                e.destroy(!0)
            }
            e = new c(this, d, a);
            f.data("backstretch", e)
        })
    };
    z.backstretch = function (d, a) {
        return z("body").backstretch(d, a).data("backstretch")
    };
    z.expr[":"].backstretch = function (a) {
        return z(a).data("backstretch") !== g
    };
    z.fn.backstretch.defaults = {centeredX: !0, centeredY: !0, duration: 5000, fade: 0};
    var b = {
        left: 0,
        top: 0,
        overflow: "hidden",
        margin: 0,
        padding: 0,
        height: "100%",
        width: "100%",
        zIndex: -999999
    }, B = {
        position: "absolute",
        display: "none",
        margin: 0,
        padding: 0,
        border: "none",
        width: "auto",
        height: "auto",
        maxHeight: "none",
        maxWidth: "none",
        zIndex: -999999
    }, c = function (f, a, d) {
        this.options = z.extend({}, z.fn.backstretch.defaults, d || {});
        this.images = z.isArray(a) ? a : [a];
        z.each(this.images, function () {
            z("<img />")[0].src = this
        });
        this.isBody = f === document.body;
        this.$container = z(f);
        this.$root = this.isBody ? o ? z(y) : z(document) : this.$container;
        f = this.$container.children(".backstretch").first();
        this.$wrap = f.length ? f : z('<div class="backstretch"></div>').css(b).appendTo(this.$container);
        this.isBody || (f = this.$container.css("position"), a = this.$container.css("zIndex"), this.$container.css({
            position: "static" === f ? "relative" : f,
            zIndex: "auto" === a ? 0 : a,
            background: "none"
        }), this.$wrap.css({zIndex: -999998}));
        this.$wrap.css({position: this.isBody && o ? "fixed" : "absolute"});
        this.index = 0;
        this.show(this.index);
        z(y).on("resize.backstretch", z.proxy(this.resize, this)).on("orientationchange.backstretch", z.proxy(function () {
            this.isBody && 0 === y.pageYOffset && (y.scrollTo(0, 1), this.resize())
        }, this))
    };
    c.prototype = {
        resize: function () {
            try {
                var k = {left: 0, top: 0}, d = this.isBody ? this.$root.width() : this.$root.innerWidth(), r = d,
                    n = this.isBody ? y.innerHeight ? y.innerHeight : this.$root.height() : this.$root.innerHeight(),
                    l = r / this.$img.data("ratio"), p;
                l >= n ? (p = (l - n) / 2, this.options.centeredY && (k.top = "-" + p + "px")) : (l = n, r = l * this.$img.data("ratio"), p = (r - d) / 2, this.options.centeredX && (k.left = "-" + p + "px"));
                this.$wrap.css({width: d, height: n}).find("img:not(.deleteable)").css({width: r, height: l}).css(k)
            } catch (m) {
            }
            return this
        }, show: function (k) {
            if (!(Math.abs(k) > this.images.length - 1)) {
                var a = this, f = a.$wrap.find("img").addClass("deleteable"), h = {relatedTarget: a.$container[0]};
                a.$container.trigger(z.Event("backstretch.before", h), [a, k]);
                this.index = k;
                clearInterval(a.interval);
                a.$img = z("<img />").css(B).bind("load", function (e) {
                    var d = this.width || z(e.target).width();
                    e = this.height || z(e.target).height();
                    z(this).data("ratio", d / e);
                    z(this).fadeIn(a.options.speed || a.options.fade, function () {
                        f.remove();
                        a.paused || a.cycle();
                        z(["after", "show"]).each(function () {
                            a.$container.trigger(z.Event("backstretch." + this, h), [a, k])
                        })
                    });
                    a.resize()
                }).appendTo(a.$wrap);
                a.$img.attr("src", a.images[k]);
                return a
            }
        }, next: function () {
            return this.show(this.index < this.images.length - 1 ? this.index + 1 : 0)
        }, prev: function () {
            return this.show(0 === this.index ? this.images.length - 1 : this.index - 1)
        }, pause: function () {
            this.paused = !0;
            return this
        }, resume: function () {
            this.paused = !1;
            this.next();
            return this
        }, cycle: function () {
            1 < this.images.length && (clearInterval(this.interval), this.interval = setInterval(z.proxy(function () {
                this.paused || this.next()
            }, this), this.options.duration));
            return this
        }, destroy: function (a) {
            z(y).off("resize.backstretch orientationchange.backstretch");
            clearInterval(this.interval);
            a || this.$wrap.remove();
            this.$container.removeData("backstretch")
        }
    };
    var o, w = navigator.userAgent, j = navigator.platform, x = w.match(/AppleWebKit\/([0-9]+)/), x = !!x && x[1],
        v = w.match(/Fennec\/([0-9]+)/), v = !!v && v[1], i = w.match(/Opera Mobi\/([0-9]+)/), A = !!i && i[1],
        u = w.match(/MSIE ([0-9]+)/), u = !!u && u[1];
    o = !((-1 < j.indexOf("iPhone") || -1 < j.indexOf("iPad") || -1 < j.indexOf("iPod")) && x && 534 > x || y.operamini && "[object OperaMini]" === {}.toString.call(y.operamini) || i && 7458 > A || -1 < w.indexOf("Android") && x && 533 > x || v && 6 > v || "palmGetResource" in y && x && 534 > x || -1 < w.indexOf("MeeGo") && -1 < w.indexOf("NokiaBrowser/8.5.0") || u && 6 >= u)
})(jQuery, window);
!function (j) {
    function E(b) {
        var c = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
        b = b.replace(c, function (h, l, f, d) {
            return l + l + f + f + d + d
        });
        var a = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(b);
        return a ? {r: parseInt(a[1], 16), g: parseInt(a[2], 16), b: parseInt(a[3], 16)} : null
    }

    function B() {
        var a = document.createElement("canvas");
        return !(!a.getContext || !a.getContext("2d"))
    }

    function I() {
        return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1)
    }

    function k() {
        return I() + I() + "-" + I() + "-" + I() + "-" + I() + "-" + I() + I() + I()
    }

    function y(d) {
        var h = d.match(/^[0-9]{4}-[0-9]{2}-[0-9]{2}\s[0-9]{1,2}:[0-9]{2}:[0-9]{2}$/);
        if (null !== h && h.length > 0) {
            var c = d.split(" "), b = c[0].split("-"), f = c[1].split(":");
            return new Date(b[0], b[1] - 1, b[2], f[0], f[1], f[2])
        }
        var l = Date.parse(d);
        return isNaN(l) ? (l = Date.parse(d.replace(/-/g, "/").replace("T", " ")), isNaN(l) ? new Date : l) : l
    }

    function v(Y, R, O, V, Z) {
        for (var M = {}, m = {}, L = {}, P = {}, S = {}, X = {}, N = null, T = 0; T < V.length; T++) {
            var Q, K = V[T];
            Q = null === N ? O / z[K] : z[N] / z[K];
            var W = Y / z[K], U = R / z[K];
            Z && (W = W > 0 ? Math.floor(W) : Math.ceil(W), U = U > 0 ? Math.floor(U) : Math.ceil(U)), "Days" !== K && (W %= Q, U %= Q), M[K] = W, L[K] = Math.abs(W), m[K] = U, X[K] = Math.abs(U), P[K] = Math.abs(W) / Q, S[K] = Math.abs(U) / Q, N = K
        }
        return {raw_time: M, raw_old_time: m, time: L, old_time: X, pct: P, old_pct: S}
    }

    function x() {
        "undefined" != typeof F.TC_Instance_List ? w = F.TC_Instance_List : F.TC_Instance_List = w, C(F)
    }

    function C(b) {
        for (var c = ["webkit", "moz"], a = 0; a < c.length && !b.requestAnimationFrame; ++a) {
            b.requestAnimationFrame = b[c[a] + "RequestAnimationFrame"], b.cancelAnimationFrame = b[c[a] + "CancelAnimationFrame"]
        }
        b.requestAnimationFrame && b.cancelAnimationFrame || (b.requestAnimationFrame = function (m, f, d) {
            "undefined" == typeof d && (d = {data: {last_frame: 0}});
            var h = (new Date).getTime(), o = Math.max(0, 16 - (h - d.data.last_frame)), l = b.setTimeout(function () {
                m(h + o)
            }, o);
            return d.data.last_frame = h + o, l
        }, b.cancelAnimationFrame = function (d) {
            clearTimeout(d)
        })
    }

    var F = window;
    Object.keys || (Object.keys = function () {
        var d = Object.prototype.hasOwnProperty, f = !{toString: null}.propertyIsEnumerable("toString"),
            c = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"],
            b = c.length;
        return function (a) {
            if ("object" != typeof a && ("function" != typeof a || null === a)) {
                throw new TypeError("Object.keys called on non-object")
            }
            var i, e, h = [];
            for (i in a) {
                d.call(a, i) && h.push(i)
            }
            if (f) {
                for (e = 0; b > e; e++) {
                    d.call(a, c[e]) && h.push(c[e])
                }
            }
            return h
        }
    }());
    var g = !1, A = 200, G = ("#debug" === location.hash, ["Days", "Hours", "Minutes", "Seconds"]),
        D = {Seconds: "Minutes", Minutes: "Hours", Hours: "Days", Days: "Years"},
        z = {Seconds: 1, Minutes: 60, Hours: 3600, Days: 86400, Months: 2678400, Years: 31536000};
    Array.prototype.indexOf || (Array.prototype.indexOf = function (b) {
        var c = this.length >>> 0, a = Number(arguments[1]) || 0;
        for (a = 0 > a ? Math.ceil(a) : Math.floor(a), 0 > a && (a += c); c > a; a++) {
            if (a in this && this[a] === b) {
                return a
            }
        }
        return -1
    });
    var w = {}, J = function (a, b) {
        this.element = a, this.container, this.listeners = null, this.data = {
            paused: !1,
            last_frame: 0,
            animation_frame: null,
            interval_fallback: null,
            timer: !1,
            total_duration: null,
            prev_time: null,
            drawn_units: [],
            text_elements: {Days: null, Hours: null, Minutes: null, Seconds: null},
            attributes: {
                canvas: null,
                context: null,
                item_size: null,
                line_width: null,
                radius: null,
                outer_radius: null
            },
            state: {fading: {Days: !1, Hours: !1, Minutes: !1, Seconds: !1}}
        }, this.config = null, this.setOptions(b), this.initialize()
    };
    J.prototype.clearListeners = function () {
        this.listeners = {all: [], visible: []}
    }, J.prototype.addTime = function (a) {
        if (this.data.attributes.ref_date instanceof Date) {
            var b = this.data.attributes.ref_date;
            b.setSeconds(b.getSeconds() + a)
        } else {
            isNaN(this.data.attributes.ref_date) || (this.data.attributes.ref_date += 1000 * a)
        }
    }, J.prototype.initialize = function (N) {
        this.data.drawn_units = [];
        for (var P = 0; P < Object.keys(this.config.time).length; P++) {
            var Q = Object.keys(this.config.time)[P];
            this.config.time[Q].show && this.data.drawn_units.push(Q)
        }
        j(this.element).children("div.time_circles").remove(), "undefined" == typeof N && (N = !0), (N || null === this.listeners) && this.clearListeners(), this.container = j("<div>"), this.container.addClass("time_circles"), this.container.appendTo(this.element);
        var t = this.element.offsetHeight, b = this.element.offsetWidth;
        0 === t && (t = j(this.element).height()), 0 === b && (b = j(this.element).width()), 0 === t && b > 0 ? t = b / this.data.drawn_units.length : 0 === b && t > 0 && (b = t * this.data.drawn_units.length);
        var i = document.createElement("canvas");
        i.width = b, i.height = t, this.data.attributes.canvas = j(i), this.data.attributes.canvas.appendTo(this.container);
        var L = B();
        L || "undefined" == typeof G_vmlCanvasManager || (G_vmlCanvasManager.initElement(i), g = !0, L = !0), L && (this.data.attributes.context = i.getContext("2d")), this.data.attributes.item_size = Math.min(b / this.data.drawn_units.length, t), this.data.attributes.line_width = this.data.attributes.item_size * this.config.fg_width, this.data.attributes.radius = (0.8 * this.data.attributes.item_size - this.data.attributes.line_width) / 2, this.data.attributes.outer_radius = this.data.attributes.radius + 0.5 * Math.max(this.data.attributes.line_width, this.data.attributes.line_width * this.config.bg_width);
        var P = 0;
        for (var K in this.data.text_elements) {
            if (this.config.time[K].show) {
                var O = j("<div>");
                O.addClass("textDiv_" + K), O.css("top", Math.round(0.35 * this.data.attributes.item_size)), O.css("left", Math.round(P++ * this.data.attributes.item_size)), O.css("width", this.data.attributes.item_size), O.appendTo(this.container);
                var M = j("<h4>");
                M.text(this.config.time[K].text), M.css("font-size", Math.round(this.config.text_size * this.data.attributes.item_size)), M.css("line-height", Math.round(this.config.text_size * this.data.attributes.item_size) + "px"), M.appendTo(O);
                var u = j("<span>");
                u.css("font-size", Math.round(3 * this.config.text_size * this.data.attributes.item_size)), u.css("line-height", Math.round(this.config.text_size * this.data.attributes.item_size) + "px"), u.appendTo(O), this.data.text_elements[K] = u
            }
        }
        this.start(), this.config.start || (this.data.paused = !0);
        var d = this;
        this.data.interval_fallback = F.setInterval(function () {
            d.update.call(d, !0)
        }, 100)
    }, J.prototype.update = function (K) {
        if ("undefined" == typeof K) {
            K = !1
        } else {
            if (K && this.data.paused) {
                return
            }
        }
        g && this.data.attributes.context.clearRect(0, 0, this.data.attributes.canvas[0].width, this.data.attributes.canvas[0].hright);
        var U, Q, W = this.data.prev_time, L = new Date;
        if (this.data.prev_time = L, null === W && (W = L), !this.config.count_past_zero && L > this.data.attributes.ref_date) {
            for (var P = 0; P < this.data.drawn_units.length; P++) {
                var O = this.data.drawn_units[P];
                this.data.text_elements[O].text("0");
                var R = P * this.data.attributes.item_size + this.data.attributes.item_size / 2,
                    T = this.data.attributes.item_size / 2, N = this.config.time[O].color;
                this.drawArc(R, T, N, 0)
            }
            return void this.stop()
        }
        U = (this.data.attributes.ref_date - L) / 1000, Q = (this.data.attributes.ref_date - W) / 1000;
        var X = "smooth" !== this.config.animation, V = v(U, Q, this.data.total_duration, this.data.drawn_units, X),
            S = v(U, Q, z.Years, G, X), P = 0, u = 0, l = null, r = this.data.drawn_units.slice();
        for (var P in G) {
            var O = G[P];
            if (Math.floor(S.raw_time[O]) !== Math.floor(S.raw_old_time[O]) && this.notifyListeners(O, Math.floor(S.time[O]), Math.floor(U), "all"), !(r.indexOf(O) < 0)) {
                if (Math.floor(V.raw_time[O]) !== Math.floor(V.raw_old_time[O]) && this.notifyListeners(O, Math.floor(V.time[O]), Math.floor(U), "visible"), !K) {
                    this.data.text_elements[O].text(Math.floor(Math.abs(V.time[O])));
                    var R = u * this.data.attributes.item_size + this.data.attributes.item_size / 2,
                        T = this.data.attributes.item_size / 2, N = this.config.time[O].color;
                    "smooth" === this.config.animation ? (null === l || g || (Math.floor(V.time[l]) > Math.floor(V.old_time[l]) ? (this.radialFade(R, T, N, 1, O), this.data.state.fading[O] = !0) : Math.floor(V.time[l]) < Math.floor(V.old_time[l]) && (this.radialFade(R, T, N, 0, O), this.data.state.fading[O] = !0)), this.data.state.fading[O] || this.drawArc(R, T, N, V.pct[O])) : this.animateArc(R, T, N, V.pct[O], V.old_pct[O], (new Date).getTime() + A)
                }
                l = O, u++
            }
        }
        if (!this.data.paused && !K) {
            var c = this, m = function () {
                c.update.call(c)
            };
            if ("smooth" === this.config.animation) {
                this.data.animation_frame = F.requestAnimationFrame(m, c.element, c)
            } else {
                var d = U % 1 * 1000;
                0 > d && (d = 1000 + d), d += 50, c.data.animation_frame = F.setTimeout(function () {
                    c.data.animation_frame = F.requestAnimationFrame(m, c.element, c)
                }, d)
            }
        }
    }, J.prototype.animateArc = function (L, m, f, p, M, d) {
        if (null !== this.data.attributes.context) {
            var b = M - p;
            if (Math.abs(b) > 0.5) {
                0 === p ? this.radialFade(L, m, f, 1) : this.radialFade(L, m, f, 0)
            } else {
                var c = (A - (d - (new Date).getTime())) / A;
                c > 1 && (c = 1);
                var l = M * (1 - c) + p * c;
                if (this.drawArc(L, m, f, l), c >= 1) {
                    return
                }
                var K = this;
                F.requestAnimationFrame(function () {
                    K.animateArc(L, m, f, p, M, d)
                }, this.element)
            }
        }
    }, J.prototype.drawArc = function (N, K, p, M) {
        if (null !== this.data.attributes.context) {
            var O = Math.max(this.data.attributes.outer_radius, this.data.attributes.item_size / 2);
            g || this.data.attributes.context.clearRect(N - O, K - O, 2 * O, 2 * O), this.config.use_background && (this.data.attributes.context.beginPath(), this.data.attributes.context.arc(N, K, this.data.attributes.radius, 0, 2 * Math.PI, !1), this.data.attributes.context.lineWidth = this.data.attributes.line_width * this.config.bg_width, this.data.attributes.context.strokeStyle = this.config.circle_bg_color, this.data.attributes.context.stroke());
            var f, b, c, u = -0.5 * Math.PI, L = 2 * Math.PI;
            f = u + this.config.start_angle / 360 * L;
            var m = 2 * M * Math.PI;
            "Both" === this.config.direction ? (c = !1, f -= m / 2, b = f + m) : "Clockwise" === this.config.direction ? (c = !1, b = f + m) : (c = !0, b = f - m), this.data.attributes.context.beginPath(), this.data.attributes.context.arc(N, K, this.data.attributes.radius, f, b, c), this.data.attributes.context.lineWidth = this.data.attributes.line_width, this.data.attributes.context.strokeStyle = p, this.data.attributes.context.stroke()
        }
    }, J.prototype.radialFade = function (p, e, l, K, d) {
        var b, c = E(l), f = this, m = 0.2 * (1 === K ? -1 : 1);
        for (b = 0; 1 >= K && K >= 0; b++) {
            !function () {
                var i = 50 * b, h = "rgba(" + c.r + ", " + c.g + ", " + c.b + ", " + Math.round(10 * K) / 10 + ")";
                F.setTimeout(function () {
                    f.drawArc(p, e, h, 1)
                }, i)
            }(), K += m
        }
        void 0 !== typeof d && F.setTimeout(function () {
            f.data.state.fading[d] = !1
        }, 50 * b)
    }, J.prototype.timeLeft = function () {
        if (this.data.paused && "number" == typeof this.data.timer) {
            return this.data.timer
        }
        var a = new Date;
        return (this.data.attributes.ref_date - a) / 1000
    }, J.prototype.start = function () {
        F.cancelAnimationFrame(this.data.animation_frame), F.clearTimeout(this.data.animation_frame);
        var b = j(this.element).data("date");
        if ("undefined" == typeof b && (b = j(this.element).attr("data-date")), "string" == typeof b) {
            this.data.attributes.ref_date = y(b)
        } else {
            if ("number" == typeof this.data.timer) {
                this.data.paused && (this.data.attributes.ref_date = (new Date).getTime() + 1000 * this.data.timer)
            } else {
                var a = j(this.element).data("timer");
                "undefined" == typeof a && (a = j(this.element).attr("data-timer")), "string" == typeof a && (a = parseFloat(a)), "number" == typeof a ? (this.data.timer = a, this.data.attributes.ref_date = (new Date).getTime() + 1000 * a) : this.data.attributes.ref_date = this.config.ref_date
            }
        }
        this.data.paused = !1, this.update.call(this)
    }, J.prototype.restart = function () {
        this.data.timer = !1, this.start()
    }, J.prototype.stop = function () {
        "number" == typeof this.data.timer && (this.data.timer = this.timeLeft(this)), this.data.paused = !0, F.cancelAnimationFrame(this.data.animation_frame)
    }, J.prototype.destroy = function () {
        this.clearListeners(), this.stop(), F.clearInterval(this.data.interval_fallback), this.data.interval_fallback = null, this.container.remove(), j(this.element).removeAttr("data-tc-id"), j(this.element).removeData("tc-id")
    }, J.prototype.setOptions = function (d) {
        if (null === this.config && (this.default_options.ref_date = new Date, this.config = j.extend(!0, {}, this.default_options)), j.extend(!0, this.config, d), F = this.config.use_top_frame ? window.top : window, x(), this.data.total_duration = this.config.total_duration, "string" == typeof this.data.total_duration) {
            if ("undefined" != typeof z[this.data.total_duration]) {
                this.data.total_duration = z[this.data.total_duration]
            } else {
                if ("Auto" === this.data.total_duration) {
                    for (var c = 0; c < Object.keys(this.config.time).length; c++) {
                        var b = Object.keys(this.config.time)[c];
                        if (this.config.time[b].show) {
                            this.data.total_duration = z[D[b]];
                            break
                        }
                    }
                } else {
                    this.data.total_duration = z.Years, console.error("Valid values for TimeCircles config.total_duration are either numeric, or (string) Years, Months, Days, Hours, Minutes, Auto")
                }
            }
        }
    }, J.prototype.addListener = function (b, c, a) {
        "function" == typeof b && ("undefined" == typeof a && (a = "visible"), this.listeners[a].push({
            func: b,
            scope: c
        }))
    }, J.prototype.notifyListeners = function (d, h, c, b) {
        for (var f = 0; f < this.listeners[b].length; f++) {
            var l = this.listeners[b][f];
            l.func.apply(l.scope, [d, h, c])
        }
    }, J.prototype.default_options = {
        ref_date: new Date,
        start: !0,
        animation: "smooth",
        count_past_zero: !0,
        circle_bg_color: "#60686F",
        use_background: !0,
        fg_width: 0.1,
        bg_width: 1.2,
        text_size: 0.07,
        total_duration: "Auto",
        direction: "Clockwise",
        use_top_frame: !1,
        start_angle: 0,
        time: {
            Days: {show: !0, text: "Days", color: "#FC6"},
            Hours: {show: !0, text: "Hours", color: "#9CF"},
            Minutes: {show: !0, text: "Minutes", color: "#BFB"},
            Seconds: {show: !0, text: "Seconds", color: "#F99"}
        }
    };
    var H = function (a, b) {
        this.elements = a, this.options = b, this.foreach()
    };
    H.prototype.getInstance = function (f) {
        var c, b = j(f).data("tc-id");
        if ("undefined" == typeof b && (b = k(), j(f).attr("data-tc-id", b)), "undefined" == typeof w[b]) {
            var h = this.options, d = j(f).data("options");
            "string" == typeof d && (d = JSON.parse(d)), "object" == typeof d && (h = j.extend(!0, {}, this.options, d)), c = new J(f, h), w[b] = c
        } else {
            c = w[b], "undefined" != typeof this.options && c.setOptions(this.options)
        }
        return c
    }, H.prototype.addTime = function (a) {
        this.foreach(function (b) {
            b.addTime(a)
        })
    }, H.prototype.foreach = function (a) {
        var b = this;
        return this.elements.each(function () {
            var c = b.getInstance(this);
            "function" == typeof a && a(c)
        }), this
    }, H.prototype.start = function () {
        return this.foreach(function (a) {
            a.start()
        }), this
    }, H.prototype.stop = function () {
        return this.foreach(function (a) {
            a.stop()
        }), this
    }, H.prototype.restart = function () {
        return this.foreach(function (a) {
            a.restart()
        }), this
    }, H.prototype.rebuild = function () {
        return this.foreach(function (a) {
            a.initialize(!1)
        }), this
    }, H.prototype.getTime = function () {
        return this.getInstance(this.elements[0]).timeLeft()
    }, H.prototype.addListener = function (b, c) {
        "undefined" == typeof c && (c = "visible");
        var a = this;
        return this.foreach(function (d) {
            d.addListener(b, a.elements, c)
        }), this
    }, H.prototype.destroy = function () {
        return this.foreach(function (a) {
            a.destroy()
        }), this
    }, H.prototype.end = function () {
        return this.elements
    }, j.fn.TimeCircles = function (a) {
        return new H(this, a)
    }
}(jQuery);
(function (a) {
    a(".carousel-boxed").owlCarousel({
        loop: false,
        margin: 30,
        nav: false,
        navText: ["", ""],
        dots: false,
        responsive: {0: {items: 1}, 768: {items: 4}, 992: {items: 4}}
    });
    a(".carousel-boxed2").owlCarousel({
        loop: false,
        margin: 15,
        nav: true,
        navContainer: ".nav-outside",
        navClass: ["btn btn-square nav-outside-prev", "btn btn-square nav-outside-next"],
        navText: ['<i class="icon-left-open-big"></i>', '<i class="icon-right-open-big"></i>'],
        dots: false,
        responsive: {0: {items: 1}, 768: {items: 3}, 1024: {items: 4}}
    });
    a(".carousel-boxed3").owlCarousel({
        loop: false,
        margin: 30,
        nav: true,
        navText: ["", ""],
        dots: false,
        responsive: {0: {items: 1}, 768: {items: 2}, 992: {items: 4}}
    });
    a(".clients").owlCarousel({
        autoplay: true,
        autoplayTimeout: 3000,
        loop: true,
        margin: 20,
        nav: false,
        interval: 500,
        dots: false,
        responsive: {0: {items: 3}, 768: {items: 5}, 1200: {items: 6}}
    });
    a(".testimonials3").owlCarousel({
        autoplay: true,
        autoplayTimeout: 5000,
        loop: true,
        margin: 0,
        nav: false,
        dots: false,
        items: 4
    });
    a(".basic-slider").owlCarousel({items: 1, nav: true, navText: ["", ""], dots: true, loop: true, margin: 0});
    a(".basic-carousel").owlCarousel({
        items: 4,
        nav: true,
        navText: ["", ""],
        dots: false,
        loop: false,
        margin: 0,
        autoWidth: false,
        responsive: {0: {items: 1}, 768: {items: 2}, 1441: {items: 3}}
    });
    a(".blog-carousel").owlCarousel({
        items: 5,
        nav: true,
        navText: ["", ""],
        dots: false,
        loop: false,
        margin: 0,
        autoWidth: false,
        responsive: {0: {items: 1}, 550: {items: 2}, 1026: {items: 3}, 1681: {items: 4}, 1921: {items: 5}}
    })
})(jQuery);
$(window).load(function () {
    $(".carousel-wrapper:not(.wow)").css("visibility", "visible");
    $(".circle-progress-wrapper strong").css("visibility", "visible");
    $(".basic-carousel").css("visibility", "visible");
    $("#status").fadeOut();
    $("#preloader").delay(350).fadeOut("slow");
    $("body").delay(350).css({overflow: "visible"})
});
$(document).ready(function () {
    $(".countdown").TimeCircles({
        fg_width: 0.015,
        bg_width: 1,
        circle_bg_color: "rgba(255,255,255,0.1)",
        time: {
            Days: {color: "#f5ae56"},
            Hours: {color: "#53cfc2"},
            Minutes: {color: "#ef6578"},
            Seconds: {color: "#67b7d4"}
        }
    });
    $(window).resize(function () {
        $(".countdown").TimeCircles().rebuild()
    });
    a();
    $(window).resize(function () {
        a()
    });

    function a() {
        width = $(window).width();
        var d = "";
        if (width < 768) {
            d = "mode-xs"
        } else {
            if (width < 992) {
                d = "mode-sm"
            } else {
                if (width < 1200) {
                    d = "mode-md"
                } else {
                    if (width > 1200) {
                        d = "mode-lg"
                    }
                }
            }
        }
        $("body").removeClass("mode-xs").removeClass("mode-sm").removeClass("mode-md").removeClass("mode-lg").addClass(d)
    }

    $("#home-tp-fullscreen").revolution({
        delay: 300000,
        startwidth: 1170,
        startheight: 770,
        hideThumbs: 200,
        hideArrowsOnMobile: "off",
        fullWidth: "on",
        fullScreen: "on",
        soloArrowLeftHOffset: 0,
        soloArrowRightHOffset: 0,
        fullScreenOffsetContainer: ".mode-xs .navbar"
    });
    $(".tp-fullscreen").revolution({
        delay: 9000,
        startwidth: 1170,
        startheight: 750,
        hideThumbs: 200,
        hideArrowsOnMobile: "off",
        fullWidth: "on",
        fullScreen: "on",
        soloArrowLeftHOffset: 0,
        soloArrowRightHOffset: 0,
        fullScreenOffsetContainer: ".mode-xs .navbar"
    });
    $(".tp-fullwidth").revolution({
        delay: 9000,
        startwidth: 1170,
        startheight: 650,
        hideThumbs: 200,
        hideArrowsOnMobile: "off",
        fullWidth: "on",
        fullScreen: "off",
        soloArrowLeftHOffset: 0,
        soloArrowRightHOffset: 0
    });
    $(".tp-banner").revolution({
        startwidth: 1170,
        startheight: 550,
        hideThumbs: 200,
        hideArrowsOnMobile: "off",
        fullWidth: "off",
        fullScreen: "off",
        soloArrowLeftHOffset: 0,
        soloArrowRightHOffset: 0
    });
    $("#contact-info-button").animatedModal({
        modalTarget: "contact-info",
        animatedIn: "lightSpeedIn",
        animatedOut: "bounceOutDown",
        animationDuration: "0.6s",
        color: "rgba(252, 252, 252, 0.97)"
    });
    var b = $(".navbar"), c = b.offset();
    $(window).scroll(function () {
        if ($(this).scrollTop() > c.top + b.height() && b.hasClass("default") && $(this).scrollTop() > 300) {
            b.fadeOut("fast", function () {
                $(this).removeClass("default").addClass("fixed").fadeIn("fast")
            })
        } else {
            if ($(this).scrollTop() <= c.top + 300 && b.hasClass("fixed")) {
                b.fadeOut(0, function () {
                    $(this).removeClass("fixed").addClass("default").fadeIn(0)
                })
            }
        }
    });
    $(".js-activated").dropdownHover({instantlyCloseOthers: false, delay: 0}).dropdown();
    $(".dropdown-menu a, .social .dropdown-menu, .social .dropdown-menu input").click(function (d) {
        d.stopPropagation()
    });
    $(".btn.responsive-menu").on("click", function () {
        $(this).toggleClass("opn")
    });
    $(".navbar .nav li a").on("click", function () {
        $(".navbar .navbar-collapse.in").collapse("hide");
        $(".btn.responsive-menu").removeClass("opn")
    });
    $(".player").fitVids();
    $(".icon-overlay a").prepend('<span class="icn-more"></span>');
    $(".fancybox-media").fancybox({
        arrows: true,
        padding: 0,
        closeBtn: true,
        openEffect: "fade",
        closeEffect: "fade",
        prevEffect: "fade",
        nextEffect: "fade",
        helpers: {media: {}, overlay: {locked: false}, buttons: false, thumbs: false, title: {type: "inside"}},
        beforeLoad: function () {
            var d, e = $(this.element).data("title-id");
            if (e) {
                d = $("#" + e);
                if (d.length) {
                    this.title = d.html()
                }
            }
        }
    });
    $(".tabs.tabs-top").easytabs({animationSpeed: 300, updateHash: false});
    $(".tabs.tabs-bottom").easytabs({animationSpeed: 300, updateHash: false, cycle: 5000});
    $(".panel-group").find('.panel-default:has(".in")').addClass("panel-active");
    $(".panel-group").on("shown.bs.collapse", function (d) {
        $(d.target).closest(".panel-default").addClass(" panel-active")
    }).on("hidden.bs.collapse", function (d) {
        $(d.target).closest(".panel-default").removeClass(" panel-active")
    });
    if (navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i)) {
        $(".parallax").addClass("mobile")
    }
    $("a[data-rel]").each(function () {
        $(this).attr("rel", $(this).data("rel"))
    });
    $(".retina").retinise();
    $(".comment-form input[title], .comment-form textarea").each(function () {
        if ($(this).val() === "") {
            $(this).val($(this).attr("title"))
        }
        $(this).focus(function () {
            if ($(this).val() == $(this).attr("title")) {
                $(this).val("").addClass("focused")
            }
        });
        $(this).blur(function () {
            if ($(this).val() === "") {
                $(this).val($(this).attr("title")).removeClass("focused")
            }
        })
    });
    $(".navbar, .scroll").localScroll({hash: true});
    $(".flickr-feed").dcFlickr({
        limit: 15,
        q: {id: "51789731@N07", lang: "en-us", format: "json", jsoncallback: "?"},
        onLoad: function () {
            $(".owl-flickr").owlCarousel({
                loop: false,
                margin: 10,
                nav: true,
                navText: ["", ""],
                dots: false,
                items: 7,
                responsive: {0: {items: 3}, 700: {items: 5}, 1000: {items: 7}}
            })
        }
    });
    if ($("[rel=tooltip]").length) {
        $("[rel=tooltip]").tooltip()
    }
    window.prettyPrint && prettyPrint()
});
$(function () {
    var g = $(".grid-view-img .isotope");
    g.isotope({
        itemSelector: ".post-grid",
        transitionDuration: "0.6s",
        masonry: {columnWidth: g.width() / 12},
        layoutMode: "masonry"
    });
    $(window).resize(function () {
        g.isotope({masonry: {columnWidth: g.width() / 12}})
    });
    g.imagesLoaded(function () {
        g.isotope("layout")
    });
    var f = $(".portfolio-grid .isotope");
    f.isotope({
        itemSelector: ".item",
        transitionDuration: "0.7s",
        masonry: {columnWidth: f.width() / 12},
        layoutMode: "masonry"
    });
    $(window).resize(function () {
        f.isotope({masonry: {columnWidth: f.width() / 12}})
    });
    $(".portfolio-grid .isotope-filter").on("click", ".button", function () {
        var h = $(this).attr("data-filter");
        f.isotope({filter: h})
    });
    $(".portfolio-grid .button-group").each(function (j, h) {
        var k = $(h);
        k.on("click", ".button", function () {
            k.find(".is-checked").removeClass("is-checked");
            $(this).addClass("is-checked")
        })
    });
    f.imagesLoaded(function () {
        f.isotope("layout")
    });
    jQuery(".btn-load-more").click(function () {
        var h = $(this).attr("href"), i = $(this);
        i.text("Loading...").addClass("btn-disabled");
        jQuery.get(h, function (k) {
            var j = jQuery(k).find(".portfolio-grid .isotope .item");
            imagesLoaded(j, function () {
                jQuery(".portfolio-grid .isotope").append(j).isotope("appended", j);
                i.remove();
                setTimeout(function () {
                    jQuery(".portfolio-grid .isotope").isotope("layout")
                }, 600)
            })
        });
        return false
    });
    var d = $(".list-view .isotope");
    d.isotope({
        itemSelector: ".post",
        transitionDuration: "0.6s",
        masonry: {columnWidth: ".col-md-6"},
        layoutMode: "masonry"
    });
    $(window).resize(function () {
        d.isotope({masonry: {columnWidth: ".col-md-6"}})
    });
    d.imagesLoaded(function () {
        d.isotope("layout")
    });
    var a = $(".grid-view.col3 .isotope");
    a.isotope({
        itemSelector: ".grid-view-post",
        transitionDuration: "0.6s",
        masonry: {columnWidth: ".col-sm-6.col-md-4"},
        layoutMode: "masonry"
    });
    $(window).resize(function () {
        a.isotope({masonry: {columnWidth: ".col-sm-6.col-md-4"}})
    });
    a.imagesLoaded(function () {
        a.isotope("layout")
    });
    var c = $(".grid-view.col2 .isotope");
    c.isotope({
        itemSelector: ".grid-view-post",
        transitionDuration: "0.6s",
        masonry: {columnWidth: ".col-md-6.col-sm-12"},
        layoutMode: "masonry"
    });
    $(window).resize(function () {
        c.isotope({masonry: {columnWidth: ".col-md-6.col-sm-12"}})
    });
    c.imagesLoaded(function () {
        c.isotope("layout")
    });
    headerWrapper = parseInt($(".navbar").height(), 10);
    var e = $(".navbar").height();
    var b = 68;
    $(".onepage section").css("padding-top", b + "px");
    $(".onepage section").css("margin-top", -(b) + "px");
    $(".onepage section:first-of-type").css("padding-top", e + "px");
    $(".onepage section:first-of-type").css("margin-top", -(e) + "px");
    offsetTolerance = -(e);
    $(window).scroll(function () {
        scrollPosition = parseInt($(this).scrollTop(), 10);
        $(".onepage .navbar ul a").each(function () {
            thisHref = $(this).attr("href");
            thisTruePosition = parseInt($(thisHref).offset().top, 10);
            thisPosition = thisTruePosition - headerWrapper - offsetTolerance;
            if (scrollPosition >= thisPosition) {
                $(".current").removeClass("current");
                $(".navbar ul a[href=" + thisHref + "]").parent("li").addClass("current")
            }
        });
        bottomPage = parseInt($(document).height(), 10) - parseInt($(window).height(), 10);
        if (scrollPosition == bottomPage || scrollPosition >= bottomPage) {
            $(".current").removeClass("current");
            $(".onepage .navbar ul a:last").parent("li").addClass("current")
        }
    })
});
var instagramFeed = new Instafeed({
    get: "user",
    userId: 1215763826,
    accessToken: "1215763826.f1627ea.dad6ca96bd7642519b573d52c3ef467f",
    resolution: "low_resolution",
    template: '<div class="item"><figure><img src="{{image}}" /><a href="{{link}}" class="link-out" target="_blank"><i class="icon-link"></i></a></figure></div>',
    after: function () {
        $("#instafeed").owlCarousel({
            loop: false,
            margin: 10,
            nav: true,
            navText: ["", ""],
            dots: false,
            responsive: {0: {items: 2}, 768: {items: 4}, 1000: {items: 5}}
        })
    }
});
$("#instafeed").each(function () {
    instagramFeed.run()
});
document.addEventListener("DOMContentLoaded", function () {
    var a;
    a = new VanillaForm(document.querySelector("form.vanilla"));
    var b;
    b = new VanillaForm(document.querySelector("form.vanilla-modal"))
});
new WOW().init();