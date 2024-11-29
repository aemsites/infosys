!function(e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document)
            throw new Error("jQuery requires a window with a document");
        return t(e)
    }
    : t(e)
}("undefined" != typeof window ? window : this, function(e, t) {
    "use strict";
    var n = []
      , i = e.document
      , r = Object.getPrototypeOf
      , o = n.slice
      , s = n.concat
      , a = n.push
      , l = n.indexOf
      , c = {}
      , u = c.toString
      , f = c.hasOwnProperty
      , h = f.toString
      , d = h.call(Object)
      , p = {}
      , g = function(e) {
        return "function" == typeof e && "number" != typeof e.nodeType
    }
      , m = function(e) {
        return null != e && e === e.window
    }
      , v = {
        type: !0,
        src: !0,
        nonce: !0,
        noModule: !0
    };
    function y(e, t, n) {
        var r, o, s = (n = n || i).createElement("script");
        if (s.text = e,
        t)
            for (r in v)
                (o = t[r] || t.getAttribute && t.getAttribute(r)) && s.setAttribute(r, o);
        n.head.appendChild(s).parentNode.removeChild(s)
    }
    function _(e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? c[u.call(e)] || "object" : typeof e
    }
    var b = "3.4.1 -ajax,-ajax/jsonp,-ajax/load,-ajax/parseXML,-ajax/script,-ajax/var/location,-ajax/var/nonce,-ajax/var/rquery,-ajax/xhr,-manipulation/_evalUrl,-event/ajax,-effects,-effects/Tween,-effects/animatedSelector"
      , E = function(e, t) {
        return new E.fn.init(e,t)
    }
      , w = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    function C(e) {
        var t = !!e && "length"in e && e.length
          , n = _(e);
        return !g(e) && !m(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e)
    }
    E.fn = E.prototype = {
        jquery: b,
        constructor: E,
        length: 0,
        toArray: function() {
            return o.call(this)
        },
        get: function(e) {
            return null == e ? o.call(this) : e < 0 ? this[e + this.length] : this[e]
        },
        pushStack: function(e) {
            var t = E.merge(this.constructor(), e);
            return t.prevObject = this,
            t
        },
        each: function(e) {
            return E.each(this, e)
        },
        map: function(e) {
            return this.pushStack(E.map(this, function(t, n) {
                return e.call(t, n, t)
            }))
        },
        slice: function() {
            return this.pushStack(o.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(e) {
            var t = this.length
              , n = +e + (e < 0 ? t : 0);
            return this.pushStack(0 <= n && n < t ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: a,
        sort: n.sort,
        splice: n.splice
    },
    E.extend = E.fn.extend = function() {
        var e, t, n, i, r, o, s = arguments[0] || {}, a = 1, l = arguments.length, c = !1;
        for ("boolean" == typeof s && (c = s,
        s = arguments[a] || {},
        a++),
        "object" == typeof s || g(s) || (s = {}),
        a === l && (s = this,
        a--); a < l; a++)
            if (null != (e = arguments[a]))
                for (t in e)
                    i = e[t],
                    "__proto__" !== t && s !== i && (c && i && (E.isPlainObject(i) || (r = Array.isArray(i))) ? (n = s[t],
                    o = r && !Array.isArray(n) ? [] : r || E.isPlainObject(n) ? n : {},
                    r = !1,
                    s[t] = E.extend(c, o, i)) : void 0 !== i && (s[t] = i));
        return s
    }
    ,
    E.extend({
        expando: "jQuery" + (b + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isPlainObject: function(e) {
            var t, n;
            return !(!e || "[object Object]" !== u.call(e) || (t = r(e)) && ("function" != typeof (n = f.call(t, "constructor") && t.constructor) || h.call(n) !== d))
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e)
                return !1;
            return !0
        },
        globalEval: function(e, t) {
            y(e, {
                nonce: t && t.nonce
            })
        },
        each: function(e, t) {
            var n, i = 0;
            if (C(e))
                for (n = e.length; i < n && !1 !== t.call(e[i], i, e[i]); i++)
                    ;
            else
                for (i in e)
                    if (!1 === t.call(e[i], i, e[i]))
                        break;
            return e
        },
        trim: function(e) {
            return null == e ? "" : (e + "").replace(w, "")
        },
        makeArray: function(e, t) {
            var n = t || [];
            return null != e && (C(Object(e)) ? E.merge(n, "string" == typeof e ? [e] : e) : a.call(n, e)),
            n
        },
        inArray: function(e, t, n) {
            return null == t ? -1 : l.call(t, e, n)
        },
        merge: function(e, t) {
            for (var n = +t.length, i = 0, r = e.length; i < n; i++)
                e[r++] = t[i];
            return e.length = r,
            e
        },
        grep: function(e, t, n) {
            for (var i = [], r = 0, o = e.length, s = !n; r < o; r++)
                !t(e[r], r) !== s && i.push(e[r]);
            return i
        },
        map: function(e, t, n) {
            var i, r, o = 0, a = [];
            if (C(e))
                for (i = e.length; o < i; o++)
                    null != (r = t(e[o], o, n)) && a.push(r);
            else
                for (o in e)
                    null != (r = t(e[o], o, n)) && a.push(r);
            return s.apply([], a)
        },
        guid: 1,
        support: p
    }),
    "function" == typeof Symbol && (E.fn[Symbol.iterator] = n[Symbol.iterator]),
    E.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
        c["[object " + t + "]"] = t.toLowerCase()
    });
    var T = function(e) {
        var t, n, i, r, o, s, a, l, c, u, f, h, d, p, g, m, v, y, _, b = "sizzle" + 1 * new Date, E = e.document, w = 0, C = 0, T = le(), x = le(), S = le(), D = le(), A = function(e, t) {
            return e === t && (f = !0),
            0
        }, N = {}.hasOwnProperty, I = [], k = I.pop, O = I.push, L = I.push, P = I.slice, j = function(e, t) {
            for (var n = 0, i = e.length; n < i; n++)
                if (e[n] === t)
                    return n;
            return -1
        }, H = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", R = "[\\x20\\t\\r\\n\\f]", M = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+", q = "\\[" + R + "*(" + M + ")(?:" + R + "*([*^$|!~]?=)" + R + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + M + "))|)" + R + "*\\]", F = ":(" + M + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + q + ")*)|.*)\\)|)", W = new RegExp(R + "+","g"), B = new RegExp("^" + R + "+|((?:^|[^\\\\])(?:\\\\.)*)" + R + "+$","g"), U = new RegExp("^" + R + "*," + R + "*"), V = new RegExp("^" + R + "*([>+~]|" + R + ")" + R + "*"), Q = new RegExp(R + "|>"), K = new RegExp(F), $ = new RegExp("^" + M + "$"), z = {
            ID: new RegExp("^#(" + M + ")"),
            CLASS: new RegExp("^\\.(" + M + ")"),
            TAG: new RegExp("^(" + M + "|[*])"),
            ATTR: new RegExp("^" + q),
            PSEUDO: new RegExp("^" + F),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + R + "*(even|odd|(([+-]|)(\\d*)n|)" + R + "*(?:([+-]|)" + R + "*(\\d+)|))" + R + "*\\)|)","i"),
            bool: new RegExp("^(?:" + H + ")$","i"),
            needsContext: new RegExp("^" + R + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + R + "*((?:-\\d)?\\d*)" + R + "*\\)|)(?=[^-]|$)","i")
        }, Y = /HTML$/i, X = /^(?:input|select|textarea|button)$/i, G = /^h\d$/i, J = /^[^{]+\{\s*\[native \w/, Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ee = /[+~]/, te = new RegExp("\\\\([\\da-f]{1,6}" + R + "?|(" + R + ")|.)","ig"), ne = function(e, t, n) {
            var i = "0x" + t - 65536;
            return i != i || n ? t : i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
        }, ie = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, re = function(e, t) {
            return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
        }, oe = function() {
            h()
        }, se = be(function(e) {
            return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
        }, {
            dir: "parentNode",
            next: "legend"
        });
        try {
            L.apply(I = P.call(E.childNodes), E.childNodes),
            I[E.childNodes.length].nodeType
        } catch (t) {
            L = {
                apply: I.length ? function(e, t) {
                    O.apply(e, P.call(t))
                }
                : function(e, t) {
                    for (var n = e.length, i = 0; e[n++] = t[i++]; )
                        ;
                    e.length = n - 1
                }
            }
        }
        function ae(e, t, i, r) {
            var o, a, c, u, f, p, v, y = t && t.ownerDocument, w = t ? t.nodeType : 9;
            if (i = i || [],
            "string" != typeof e || !e || 1 !== w && 9 !== w && 11 !== w)
                return i;
            if (!r && ((t ? t.ownerDocument || t : E) !== d && h(t),
            t = t || d,
            g)) {
                if (11 !== w && (f = Z.exec(e)))
                    if (o = f[1]) {
                        if (9 === w) {
                            if (!(c = t.getElementById(o)))
                                return i;
                            if (c.id === o)
                                return i.push(c),
                                i
                        } else if (y && (c = y.getElementById(o)) && _(t, c) && c.id === o)
                            return i.push(c),
                            i
                    } else {
                        if (f[2])
                            return L.apply(i, t.getElementsByTagName(e)),
                            i;
                        if ((o = f[3]) && n.getElementsByClassName && t.getElementsByClassName)
                            return L.apply(i, t.getElementsByClassName(o)),
                            i
                    }
                if (n.qsa && !D[e + " "] && (!m || !m.test(e)) && (1 !== w || "object" !== t.nodeName.toLowerCase())) {
                    if (v = e,
                    y = t,
                    1 === w && Q.test(e)) {
                        for ((u = t.getAttribute("id")) ? u = u.replace(ie, re) : t.setAttribute("id", u = b),
                        a = (p = s(e)).length; a--; )
                            p[a] = "#" + u + " " + _e(p[a]);
                        v = p.join(","),
                        y = ee.test(e) && ve(t.parentNode) || t
                    }
                    try {
                        return L.apply(i, y.querySelectorAll(v)),
                        i
                    } catch (t) {
                        D(e, !0)
                    } finally {
                        u === b && t.removeAttribute("id")
                    }
                }
            }
            return l(e.replace(B, "$1"), t, i, r)
        }
        function le() {
            var e = [];
            return function t(n, r) {
                return e.push(n + " ") > i.cacheLength && delete t[e.shift()],
                t[n + " "] = r
            }
        }
        function ce(e) {
            return e[b] = !0,
            e
        }
        function ue(e) {
            var t = d.createElement("fieldset");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t),
                t = null
            }
        }
        function fe(e, t) {
            for (var n = e.split("|"), r = n.length; r--; )
                i.attrHandle[n[r]] = t
        }
        function he(e, t) {
            var n = t && e
              , i = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (i)
                return i;
            if (n)
                for (; n = n.nextSibling; )
                    if (n === t)
                        return -1;
            return e ? 1 : -1
        }
        function de(e) {
            return function(t) {
                return "input" === t.nodeName.toLowerCase() && t.type === e
            }
        }
        function pe(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }
        function ge(e) {
            return function(t) {
                return "form"in t ? t.parentNode && !1 === t.disabled ? "label"in t ? "label"in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && se(t) === e : t.disabled === e : "label"in t && t.disabled === e
            }
        }
        function me(e) {
            return ce(function(t) {
                return t = +t,
                ce(function(n, i) {
                    for (var r, o = e([], n.length, t), s = o.length; s--; )
                        n[r = o[s]] && (n[r] = !(i[r] = n[r]))
                })
            })
        }
        function ve(e) {
            return e && void 0 !== e.getElementsByTagName && e
        }
        for (t in n = ae.support = {},
        o = ae.isXML = function(e) {
            var t = e.namespaceURI
              , n = (e.ownerDocument || e).documentElement;
            return !Y.test(t || n && n.nodeName || "HTML")
        }
        ,
        h = ae.setDocument = function(e) {
            var t, r, s = e ? e.ownerDocument || e : E;
            return s !== d && 9 === s.nodeType && s.documentElement && (p = (d = s).documentElement,
            g = !o(d),
            E !== d && (r = d.defaultView) && r.top !== r && (r.addEventListener ? r.addEventListener("unload", oe, !1) : r.attachEvent && r.attachEvent("onunload", oe)),
            n.attributes = ue(function(e) {
                return e.className = "i",
                !e.getAttribute("className")
            }),
            n.getElementsByTagName = ue(function(e) {
                return e.appendChild(d.createComment("")),
                !e.getElementsByTagName("*").length
            }),
            n.getElementsByClassName = J.test(d.getElementsByClassName),
            n.getById = ue(function(e) {
                return p.appendChild(e).id = b,
                !d.getElementsByName || !d.getElementsByName(b).length
            }),
            n.getById ? (i.filter.ID = function(e) {
                var t = e.replace(te, ne);
                return function(e) {
                    return e.getAttribute("id") === t
                }
            }
            ,
            i.find.ID = function(e, t) {
                if (void 0 !== t.getElementById && g) {
                    var n = t.getElementById(e);
                    return n ? [n] : []
                }
            }
            ) : (i.filter.ID = function(e) {
                var t = e.replace(te, ne);
                return function(e) {
                    var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }
            ,
            i.find.ID = function(e, t) {
                if (void 0 !== t.getElementById && g) {
                    var n, i, r, o = t.getElementById(e);
                    if (o) {
                        if ((n = o.getAttributeNode("id")) && n.value === e)
                            return [o];
                        for (r = t.getElementsByName(e),
                        i = 0; o = r[i++]; )
                            if ((n = o.getAttributeNode("id")) && n.value === e)
                                return [o]
                    }
                    return []
                }
            }
            ),
            i.find.TAG = n.getElementsByTagName ? function(e, t) {
                return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0
            }
            : function(e, t) {
                var n, i = [], r = 0, o = t.getElementsByTagName(e);
                if ("*" === e) {
                    for (; n = o[r++]; )
                        1 === n.nodeType && i.push(n);
                    return i
                }
                return o
            }
            ,
            i.find.CLASS = n.getElementsByClassName && function(e, t) {
                if (void 0 !== t.getElementsByClassName && g)
                    return t.getElementsByClassName(e)
            }
            ,
            v = [],
            m = [],
            (n.qsa = J.test(d.querySelectorAll)) && (ue(function(e) {
                p.appendChild(e).innerHTML = "<a id='" + b + "'></a><select id='" + b + "-\r\\' msallowcapture=''><option selected=''></option></select>",
                e.querySelectorAll("[msallowcapture^='']").length && m.push("[*^$]=" + R + "*(?:''|\"\")"),
                e.querySelectorAll("[selected]").length || m.push("\\[" + R + "*(?:value|" + H + ")"),
                e.querySelectorAll("[id~=" + b + "-]").length || m.push("~="),
                e.querySelectorAll(":checked").length || m.push(":checked"),
                e.querySelectorAll("a#" + b + "+*").length || m.push(".#.+[+~]")
            }),
            ue(function(e) {
                e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var t = d.createElement("input");
                t.setAttribute("type", "hidden"),
                e.appendChild(t).setAttribute("name", "D"),
                e.querySelectorAll("[name=d]").length && m.push("name" + R + "*[*^$|!~]?="),
                2 !== e.querySelectorAll(":enabled").length && m.push(":enabled", ":disabled"),
                p.appendChild(e).disabled = !0,
                2 !== e.querySelectorAll(":disabled").length && m.push(":enabled", ":disabled"),
                e.querySelectorAll("*,:x"),
                m.push(",.*:")
            })),
            (n.matchesSelector = J.test(y = p.matches || p.webkitMatchesSelector || p.mozMatchesSelector || p.oMatchesSelector || p.msMatchesSelector)) && ue(function(e) {
                n.disconnectedMatch = y.call(e, "*"),
                y.call(e, "[s!='']:x"),
                v.push("!=", F)
            }),
            m = m.length && new RegExp(m.join("|")),
            v = v.length && new RegExp(v.join("|")),
            t = J.test(p.compareDocumentPosition),
            _ = t || J.test(p.contains) ? function(e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e
                  , i = t && t.parentNode;
                return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
            }
            : function(e, t) {
                if (t)
                    for (; t = t.parentNode; )
                        if (t === e)
                            return !0;
                return !1
            }
            ,
            A = t ? function(e, t) {
                if (e === t)
                    return f = !0,
                    0;
                var i = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return i || (1 & (i = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !n.sortDetached && t.compareDocumentPosition(e) === i ? e === d || e.ownerDocument === E && _(E, e) ? -1 : t === d || t.ownerDocument === E && _(E, t) ? 1 : u ? j(u, e) - j(u, t) : 0 : 4 & i ? -1 : 1)
            }
            : function(e, t) {
                if (e === t)
                    return f = !0,
                    0;
                var n, i = 0, r = e.parentNode, o = t.parentNode, s = [e], a = [t];
                if (!r || !o)
                    return e === d ? -1 : t === d ? 1 : r ? -1 : o ? 1 : u ? j(u, e) - j(u, t) : 0;
                if (r === o)
                    return he(e, t);
                for (n = e; n = n.parentNode; )
                    s.unshift(n);
                for (n = t; n = n.parentNode; )
                    a.unshift(n);
                for (; s[i] === a[i]; )
                    i++;
                return i ? he(s[i], a[i]) : s[i] === E ? -1 : a[i] === E ? 1 : 0
            }
            ),
            d
        }
        ,
        ae.matches = function(e, t) {
            return ae(e, null, null, t)
        }
        ,
        ae.matchesSelector = function(e, t) {
            if ((e.ownerDocument || e) !== d && h(e),
            n.matchesSelector && g && !D[t + " "] && (!v || !v.test(t)) && (!m || !m.test(t)))
                try {
                    var i = y.call(e, t);
                    if (i || n.disconnectedMatch || e.document && 11 !== e.document.nodeType)
                        return i
                } catch (e) {
                    D(t, !0)
                }
            return 0 < ae(t, d, null, [e]).length
        }
        ,
        ae.contains = function(e, t) {
            return (e.ownerDocument || e) !== d && h(e),
            _(e, t)
        }
        ,
        ae.attr = function(e, t) {
            (e.ownerDocument || e) !== d && h(e);
            var r = i.attrHandle[t.toLowerCase()]
              , o = r && N.call(i.attrHandle, t.toLowerCase()) ? r(e, t, !g) : void 0;
            return void 0 !== o ? o : n.attributes || !g ? e.getAttribute(t) : (o = e.getAttributeNode(t)) && o.specified ? o.value : null
        }
        ,
        ae.escape = function(e) {
            return (e + "").replace(ie, re)
        }
        ,
        ae.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }
        ,
        ae.uniqueSort = function(e) {
            var t, i = [], r = 0, o = 0;
            if (f = !n.detectDuplicates,
            u = !n.sortStable && e.slice(0),
            e.sort(A),
            f) {
                for (; t = e[o++]; )
                    t === e[o] && (r = i.push(o));
                for (; r--; )
                    e.splice(i[r], 1)
            }
            return u = null,
            e
        }
        ,
        r = ae.getText = function(e) {
            var t, n = "", i = 0, o = e.nodeType;
            if (o) {
                if (1 === o || 9 === o || 11 === o) {
                    if ("string" == typeof e.textContent)
                        return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling)
                        n += r(e)
                } else if (3 === o || 4 === o)
                    return e.nodeValue
            } else
                for (; t = e[i++]; )
                    n += r(t);
            return n
        }
        ,
        (i = ae.selectors = {
            cacheLength: 50,
            createPseudo: ce,
            match: z,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(e) {
                    return e[1] = e[1].replace(te, ne),
                    e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne),
                    "~=" === e[2] && (e[3] = " " + e[3] + " "),
                    e.slice(0, 4)
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(),
                    "nth" === e[1].slice(0, 3) ? (e[3] || ae.error(e[0]),
                    e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])),
                    e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && ae.error(e[0]),
                    e
                },
                PSEUDO: function(e) {
                    var t, n = !e[6] && e[2];
                    return z.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && K.test(n) && (t = s(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t),
                    e[2] = n.slice(0, t)),
                    e.slice(0, 3))
                }
            },
            filter: {
                TAG: function(e) {
                    var t = e.replace(te, ne).toLowerCase();
                    return "*" === e ? function() {
                        return !0
                    }
                    : function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function(e) {
                    var t = T[e + " "];
                    return t || (t = new RegExp("(^|" + R + ")" + e + "(" + R + "|$)")) && T(e, function(e) {
                        return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                    })
                },
                ATTR: function(e, t, n) {
                    return function(i) {
                        var r = ae.attr(i, e);
                        return null == r ? "!=" === t : !t || (r += "",
                        "=" === t ? r === n : "!=" === t ? r !== n : "^=" === t ? n && 0 === r.indexOf(n) : "*=" === t ? n && -1 < r.indexOf(n) : "$=" === t ? n && r.slice(-n.length) === n : "~=" === t ? -1 < (" " + r.replace(W, " ") + " ").indexOf(n) : "|=" === t && (r === n || r.slice(0, n.length + 1) === n + "-"))
                    }
                },
                CHILD: function(e, t, n, i, r) {
                    var o = "nth" !== e.slice(0, 3)
                      , s = "last" !== e.slice(-4)
                      , a = "of-type" === t;
                    return 1 === i && 0 === r ? function(e) {
                        return !!e.parentNode
                    }
                    : function(t, n, l) {
                        var c, u, f, h, d, p, g = o !== s ? "nextSibling" : "previousSibling", m = t.parentNode, v = a && t.nodeName.toLowerCase(), y = !l && !a, _ = !1;
                        if (m) {
                            if (o) {
                                for (; g; ) {
                                    for (h = t; h = h[g]; )
                                        if (a ? h.nodeName.toLowerCase() === v : 1 === h.nodeType)
                                            return !1;
                                    p = g = "only" === e && !p && "nextSibling"
                                }
                                return !0
                            }
                            if (p = [s ? m.firstChild : m.lastChild],
                            s && y) {
                                for (_ = (d = (c = (u = (f = (h = m)[b] || (h[b] = {}))[h.uniqueID] || (f[h.uniqueID] = {}))[e] || [])[0] === w && c[1]) && c[2],
                                h = d && m.childNodes[d]; h = ++d && h && h[g] || (_ = d = 0) || p.pop(); )
                                    if (1 === h.nodeType && ++_ && h === t) {
                                        u[e] = [w, d, _];
                                        break
                                    }
                            } else if (y && (_ = d = (c = (u = (f = (h = t)[b] || (h[b] = {}))[h.uniqueID] || (f[h.uniqueID] = {}))[e] || [])[0] === w && c[1]),
                            !1 === _)
                                for (; (h = ++d && h && h[g] || (_ = d = 0) || p.pop()) && ((a ? h.nodeName.toLowerCase() !== v : 1 !== h.nodeType) || !++_ || (y && ((u = (f = h[b] || (h[b] = {}))[h.uniqueID] || (f[h.uniqueID] = {}))[e] = [w, _]),
                                h !== t)); )
                                    ;
                            return (_ -= r) === i || _ % i == 0 && 0 <= _ / i
                        }
                    }
                },
                PSEUDO: function(e, t) {
                    var n, r = i.pseudos[e] || i.setFilters[e.toLowerCase()] || ae.error("unsupported pseudo: " + e);
                    return r[b] ? r(t) : 1 < r.length ? (n = [e, e, "", t],
                    i.setFilters.hasOwnProperty(e.toLowerCase()) ? ce(function(e, n) {
                        for (var i, o = r(e, t), s = o.length; s--; )
                            e[i = j(e, o[s])] = !(n[i] = o[s])
                    }) : function(e) {
                        return r(e, 0, n)
                    }
                    ) : r
                }
            },
            pseudos: {
                not: ce(function(e) {
                    var t = []
                      , n = []
                      , i = a(e.replace(B, "$1"));
                    return i[b] ? ce(function(e, t, n, r) {
                        for (var o, s = i(e, null, r, []), a = e.length; a--; )
                            (o = s[a]) && (e[a] = !(t[a] = o))
                    }) : function(e, r, o) {
                        return t[0] = e,
                        i(t, null, o, n),
                        t[0] = null,
                        !n.pop()
                    }
                }),
                has: ce(function(e) {
                    return function(t) {
                        return 0 < ae(e, t).length
                    }
                }),
                contains: ce(function(e) {
                    return e = e.replace(te, ne),
                    function(t) {
                        return -1 < (t.textContent || r(t)).indexOf(e)
                    }
                }),
                lang: ce(function(e) {
                    return $.test(e || "") || ae.error("unsupported lang: " + e),
                    e = e.replace(te, ne).toLowerCase(),
                    function(t) {
                        var n;
                        do {
                            if (n = g ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang"))
                                return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                        } while ((t = t.parentNode) && 1 === t.nodeType);
                        return !1
                    }
                }),
                target: function(t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id
                },
                root: function(e) {
                    return e === p
                },
                focus: function(e) {
                    return e === d.activeElement && (!d.hasFocus || d.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: ge(!1),
                disabled: ge(!0),
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex,
                    !0 === e.selected
                },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeType < 6)
                            return !1;
                    return !0
                },
                parent: function(e) {
                    return !i.pseudos.empty(e)
                },
                header: function(e) {
                    return G.test(e.nodeName)
                },
                input: function(e) {
                    return X.test(e.nodeName)
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                text: function(e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                },
                first: me(function() {
                    return [0]
                }),
                last: me(function(e, t) {
                    return [t - 1]
                }),
                eq: me(function(e, t, n) {
                    return [n < 0 ? n + t : n]
                }),
                even: me(function(e, t) {
                    for (var n = 0; n < t; n += 2)
                        e.push(n);
                    return e
                }),
                odd: me(function(e, t) {
                    for (var n = 1; n < t; n += 2)
                        e.push(n);
                    return e
                }),
                lt: me(function(e, t, n) {
                    for (var i = n < 0 ? n + t : t < n ? t : n; 0 <= --i; )
                        e.push(i);
                    return e
                }),
                gt: me(function(e, t, n) {
                    for (var i = n < 0 ? n + t : n; ++i < t; )
                        e.push(i);
                    return e
                })
            }
        }).pseudos.nth = i.pseudos.eq,
        {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        })
            i.pseudos[t] = de(t);
        for (t in {
            submit: !0,
            reset: !0
        })
            i.pseudos[t] = pe(t);
        function ye() {}
        function _e(e) {
            for (var t = 0, n = e.length, i = ""; t < n; t++)
                i += e[t].value;
            return i
        }
        function be(e, t, n) {
            var i = t.dir
              , r = t.next
              , o = r || i
              , s = n && "parentNode" === o
              , a = C++;
            return t.first ? function(t, n, r) {
                for (; t = t[i]; )
                    if (1 === t.nodeType || s)
                        return e(t, n, r);
                return !1
            }
            : function(t, n, l) {
                var c, u, f, h = [w, a];
                if (l) {
                    for (; t = t[i]; )
                        if ((1 === t.nodeType || s) && e(t, n, l))
                            return !0
                } else
                    for (; t = t[i]; )
                        if (1 === t.nodeType || s)
                            if (u = (f = t[b] || (t[b] = {}))[t.uniqueID] || (f[t.uniqueID] = {}),
                            r && r === t.nodeName.toLowerCase())
                                t = t[i] || t;
                            else {
                                if ((c = u[o]) && c[0] === w && c[1] === a)
                                    return h[2] = c[2];
                                if ((u[o] = h)[2] = e(t, n, l))
                                    return !0
                            }
                return !1
            }
        }
        function Ee(e) {
            return 1 < e.length ? function(t, n, i) {
                for (var r = e.length; r--; )
                    if (!e[r](t, n, i))
                        return !1;
                return !0
            }
            : e[0]
        }
        function we(e, t, n, i, r) {
            for (var o, s = [], a = 0, l = e.length, c = null != t; a < l; a++)
                (o = e[a]) && (n && !n(o, i, r) || (s.push(o),
                c && t.push(a)));
            return s
        }
        function Ce(e, t, n, i, r, o) {
            return i && !i[b] && (i = Ce(i)),
            r && !r[b] && (r = Ce(r, o)),
            ce(function(o, s, a, l) {
                var c, u, f, h = [], d = [], p = s.length, g = o || function(e, t, n) {
                    for (var i = 0, r = t.length; i < r; i++)
                        ae(e, t[i], n);
                    return n
                }(t || "*", a.nodeType ? [a] : a, []), m = !e || !o && t ? g : we(g, h, e, a, l), v = n ? r || (o ? e : p || i) ? [] : s : m;
                if (n && n(m, v, a, l),
                i)
                    for (c = we(v, d),
                    i(c, [], a, l),
                    u = c.length; u--; )
                        (f = c[u]) && (v[d[u]] = !(m[d[u]] = f));
                if (o) {
                    if (r || e) {
                        if (r) {
                            for (c = [],
                            u = v.length; u--; )
                                (f = v[u]) && c.push(m[u] = f);
                            r(null, v = [], c, l)
                        }
                        for (u = v.length; u--; )
                            (f = v[u]) && -1 < (c = r ? j(o, f) : h[u]) && (o[c] = !(s[c] = f))
                    }
                } else
                    v = we(v === s ? v.splice(p, v.length) : v),
                    r ? r(null, s, v, l) : L.apply(s, v)
            })
        }
        function Te(e) {
            for (var t, n, r, o = e.length, s = i.relative[e[0].type], a = s || i.relative[" "], l = s ? 1 : 0, u = be(function(e) {
                return e === t
            }, a, !0), f = be(function(e) {
                return -1 < j(t, e)
            }, a, !0), h = [function(e, n, i) {
                var r = !s && (i || n !== c) || ((t = n).nodeType ? u(e, n, i) : f(e, n, i));
                return t = null,
                r
            }
            ]; l < o; l++)
                if (n = i.relative[e[l].type])
                    h = [be(Ee(h), n)];
                else {
                    if ((n = i.filter[e[l].type].apply(null, e[l].matches))[b]) {
                        for (r = ++l; r < o && !i.relative[e[r].type]; r++)
                            ;
                        return Ce(1 < l && Ee(h), 1 < l && _e(e.slice(0, l - 1).concat({
                            value: " " === e[l - 2].type ? "*" : ""
                        })).replace(B, "$1"), n, l < r && Te(e.slice(l, r)), r < o && Te(e = e.slice(r)), r < o && _e(e))
                    }
                    h.push(n)
                }
            return Ee(h)
        }
        return ye.prototype = i.filters = i.pseudos,
        i.setFilters = new ye,
        s = ae.tokenize = function(e, t) {
            var n, r, o, s, a, l, c, u = x[e + " "];
            if (u)
                return t ? 0 : u.slice(0);
            for (a = e,
            l = [],
            c = i.preFilter; a; ) {
                for (s in n && !(r = U.exec(a)) || (r && (a = a.slice(r[0].length) || a),
                l.push(o = [])),
                n = !1,
                (r = V.exec(a)) && (n = r.shift(),
                o.push({
                    value: n,
                    type: r[0].replace(B, " ")
                }),
                a = a.slice(n.length)),
                i.filter)
                    !(r = z[s].exec(a)) || c[s] && !(r = c[s](r)) || (n = r.shift(),
                    o.push({
                        value: n,
                        type: s,
                        matches: r
                    }),
                    a = a.slice(n.length));
                if (!n)
                    break
            }
            return t ? a.length : a ? ae.error(e) : x(e, l).slice(0)
        }
        ,
        a = ae.compile = function(e, t) {
            var n, r, o, a, l, u, f = [], p = [], m = S[e + " "];
            if (!m) {
                for (t || (t = s(e)),
                n = t.length; n--; )
                    (m = Te(t[n]))[b] ? f.push(m) : p.push(m);
                (m = S(e, (r = p,
                a = 0 < (o = f).length,
                l = 0 < r.length,
                u = function(e, t, n, s, u) {
                    var f, p, m, v = 0, y = "0", _ = e && [], b = [], E = c, C = e || l && i.find.TAG("*", u), T = w += null == E ? 1 : Math.random() || .1, x = C.length;
                    for (u && (c = t === d || t || u); y !== x && null != (f = C[y]); y++) {
                        if (l && f) {
                            for (p = 0,
                            t || f.ownerDocument === d || (h(f),
                            n = !g); m = r[p++]; )
                                if (m(f, t || d, n)) {
                                    s.push(f);
                                    break
                                }
                            u && (w = T)
                        }
                        a && ((f = !m && f) && v--,
                        e && _.push(f))
                    }
                    if (v += y,
                    a && y !== v) {
                        for (p = 0; m = o[p++]; )
                            m(_, b, t, n);
                        if (e) {
                            if (0 < v)
                                for (; y--; )
                                    _[y] || b[y] || (b[y] = k.call(s));
                            b = we(b)
                        }
                        L.apply(s, b),
                        u && !e && 0 < b.length && 1 < v + o.length && ae.uniqueSort(s)
                    }
                    return u && (w = T,
                    c = E),
                    _
                }
                ,
                a ? ce(u) : u))).selector = e
            }
            return m
        }
        ,
        l = ae.select = function(e, t, n, r) {
            var o, l, c, u, f, h = "function" == typeof e && e, d = !r && s(e = h.selector || e);
            if (n = n || [],
            1 === d.length) {
                if (2 < (l = d[0] = d[0].slice(0)).length && "ID" === (c = l[0]).type && 9 === t.nodeType && g && i.relative[l[1].type]) {
                    if (!(t = (i.find.ID(c.matches[0].replace(te, ne), t) || [])[0]))
                        return n;
                    h && (t = t.parentNode),
                    e = e.slice(l.shift().value.length)
                }
                for (o = z.needsContext.test(e) ? 0 : l.length; o-- && (c = l[o],
                !i.relative[u = c.type]); )
                    if ((f = i.find[u]) && (r = f(c.matches[0].replace(te, ne), ee.test(l[0].type) && ve(t.parentNode) || t))) {
                        if (l.splice(o, 1),
                        !(e = r.length && _e(l)))
                            return L.apply(n, r),
                            n;
                        break
                    }
            }
            return (h || a(e, d))(r, t, !g, n, !t || ee.test(e) && ve(t.parentNode) || t),
            n
        }
        ,
        n.sortStable = b.split("").sort(A).join("") === b,
        n.detectDuplicates = !!f,
        h(),
        n.sortDetached = ue(function(e) {
            return 1 & e.compareDocumentPosition(d.createElement("fieldset"))
        }),
        ue(function(e) {
            return e.innerHTML = "<a href='#'></a>",
            "#" === e.firstChild.getAttribute("href")
        }) || fe("type|href|height|width", function(e, t, n) {
            if (!n)
                return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }),
        n.attributes && ue(function(e) {
            return e.innerHTML = "<input/>",
            e.firstChild.setAttribute("value", ""),
            "" === e.firstChild.getAttribute("value")
        }) || fe("value", function(e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase())
                return e.defaultValue
        }),
        ue(function(e) {
            return null == e.getAttribute("disabled")
        }) || fe(H, function(e, t, n) {
            var i;
            if (!n)
                return !0 === e[t] ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
        }),
        ae
    }(e);
    E.find = T,
    E.expr = T.selectors,
    E.expr[":"] = E.expr.pseudos,
    E.uniqueSort = E.unique = T.uniqueSort,
    E.text = T.getText,
    E.isXMLDoc = T.isXML,
    E.contains = T.contains,
    E.escapeSelector = T.escape;
    var x = function(e, t, n) {
        for (var i = [], r = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
            if (1 === e.nodeType) {
                if (r && E(e).is(n))
                    break;
                i.push(e)
            }
        return i
    }
      , S = function(e, t) {
        for (var n = []; e; e = e.nextSibling)
            1 === e.nodeType && e !== t && n.push(e);
        return n
    }
      , D = E.expr.match.needsContext;
    function A(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    }
    var N = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
    function I(e, t, n) {
        return g(t) ? E.grep(e, function(e, i) {
            return !!t.call(e, i, e) !== n
        }) : t.nodeType ? E.grep(e, function(e) {
            return e === t !== n
        }) : "string" != typeof t ? E.grep(e, function(e) {
            return -1 < l.call(t, e) !== n
        }) : E.filter(t, e, n)
    }
    E.filter = function(e, t, n) {
        var i = t[0];
        return n && (e = ":not(" + e + ")"),
        1 === t.length && 1 === i.nodeType ? E.find.matchesSelector(i, e) ? [i] : [] : E.find.matches(e, E.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }
    ,
    E.fn.extend({
        find: function(e) {
            var t, n, i = this.length, r = this;
            if ("string" != typeof e)
                return this.pushStack(E(e).filter(function() {
                    for (t = 0; t < i; t++)
                        if (E.contains(r[t], this))
                            return !0
                }));
            for (n = this.pushStack([]),
            t = 0; t < i; t++)
                E.find(e, r[t], n);
            return 1 < i ? E.uniqueSort(n) : n
        },
        filter: function(e) {
            return this.pushStack(I(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(I(this, e || [], !0))
        },
        is: function(e) {
            return !!I(this, "string" == typeof e && D.test(e) ? E(e) : e || [], !1).length
        }
    });
    var k, O = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (E.fn.init = function(e, t, n) {
        var r, o;
        if (!e)
            return this;
        if (n = n || k,
        "string" == typeof e) {
            if (!(r = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : O.exec(e)) || !r[1] && t)
                return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (r[1]) {
                if (t = t instanceof E ? t[0] : t,
                E.merge(this, E.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : i, !0)),
                N.test(r[1]) && E.isPlainObject(t))
                    for (r in t)
                        g(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                return this
            }
            return (o = i.getElementById(r[2])) && (this[0] = o,
            this.length = 1),
            this
        }
        return e.nodeType ? (this[0] = e,
        this.length = 1,
        this) : g(e) ? void 0 !== n.ready ? n.ready(e) : e(E) : E.makeArray(e, this)
    }
    ).prototype = E.fn,
    k = E(i);
    var L = /^(?:parents|prev(?:Until|All))/
      , P = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    function j(e, t) {
        for (; (e = e[t]) && 1 !== e.nodeType; )
            ;
        return e
    }
    E.fn.extend({
        has: function(e) {
            var t = E(e, this)
              , n = t.length;
            return this.filter(function() {
                for (var e = 0; e < n; e++)
                    if (E.contains(this, t[e]))
                        return !0
            })
        },
        closest: function(e, t) {
            var n, i = 0, r = this.length, o = [], s = "string" != typeof e && E(e);
            if (!D.test(e))
                for (; i < r; i++)
                    for (n = this[i]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (s ? -1 < s.index(n) : 1 === n.nodeType && E.find.matchesSelector(n, e))) {
                            o.push(n);
                            break
                        }
            return this.pushStack(1 < o.length ? E.uniqueSort(o) : o)
        },
        index: function(e) {
            return e ? "string" == typeof e ? l.call(E(e), this[0]) : l.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(E.uniqueSort(E.merge(this.get(), E(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }),
    E.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return x(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return x(e, "parentNode", n)
        },
        next: function(e) {
            return j(e, "nextSibling")
        },
        prev: function(e) {
            return j(e, "previousSibling")
        },
        nextAll: function(e) {
            return x(e, "nextSibling")
        },
        prevAll: function(e) {
            return x(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return x(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return x(e, "previousSibling", n)
        },
        siblings: function(e) {
            return S((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return S(e.firstChild)
        },
        contents: function(e) {
            return void 0 !== e.contentDocument ? e.contentDocument : (A(e, "template") && (e = e.content || e),
            E.merge([], e.childNodes))
        }
    }, function(e, t) {
        E.fn[e] = function(n, i) {
            var r = E.map(this, t, n);
            return "Until" !== e.slice(-5) && (i = n),
            i && "string" == typeof i && (r = E.filter(i, r)),
            1 < this.length && (P[e] || E.uniqueSort(r),
            L.test(e) && r.reverse()),
            this.pushStack(r)
        }
    });
    var H = /[^\x20\t\r\n\f]+/g;
    function R(e) {
        return e
    }
    function M(e) {
        throw e
    }
    function q(e, t, n, i) {
        var r;
        try {
            e && g(r = e.promise) ? r.call(e).done(t).fail(n) : e && g(r = e.then) ? r.call(e, t, n) : t.apply(void 0, [e].slice(i))
        } catch (e) {
            n.apply(void 0, [e])
        }
    }
    E.Callbacks = function(e) {
        var t, n;
        e = "string" == typeof e ? (t = e,
        n = {},
        E.each(t.match(H) || [], function(e, t) {
            n[t] = !0
        }),
        n) : E.extend({}, e);
        var i, r, o, s, a = [], l = [], c = -1, u = function() {
            for (s = s || e.once,
            o = i = !0; l.length; c = -1)
                for (r = l.shift(); ++c < a.length; )
                    !1 === a[c].apply(r[0], r[1]) && e.stopOnFalse && (c = a.length,
                    r = !1);
            e.memory || (r = !1),
            i = !1,
            s && (a = r ? [] : "")
        }, f = {
            add: function() {
                return a && (r && !i && (c = a.length - 1,
                l.push(r)),
                function t(n) {
                    E.each(n, function(n, i) {
                        g(i) ? e.unique && f.has(i) || a.push(i) : i && i.length && "string" !== _(i) && t(i)
                    })
                }(arguments),
                r && !i && u()),
                this
            },
            remove: function() {
                return E.each(arguments, function(e, t) {
                    for (var n; -1 < (n = E.inArray(t, a, n)); )
                        a.splice(n, 1),
                        n <= c && c--
                }),
                this
            },
            has: function(e) {
                return e ? -1 < E.inArray(e, a) : 0 < a.length
            },
            empty: function() {
                return a && (a = []),
                this
            },
            disable: function() {
                return s = l = [],
                a = r = "",
                this
            },
            disabled: function() {
                return !a
            },
            lock: function() {
                return s = l = [],
                r || i || (a = r = ""),
                this
            },
            locked: function() {
                return !!s
            },
            fireWith: function(e, t) {
                return s || (t = [e, (t = t || []).slice ? t.slice() : t],
                l.push(t),
                i || u()),
                this
            },
            fire: function() {
                return f.fireWith(this, arguments),
                this
            },
            fired: function() {
                return !!o
            }
        };
        return f
    }
    ,
    E.extend({
        Deferred: function(t) {
            var n = [["notify", "progress", E.Callbacks("memory"), E.Callbacks("memory"), 2], ["resolve", "done", E.Callbacks("once memory"), E.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", E.Callbacks("once memory"), E.Callbacks("once memory"), 1, "rejected"]]
              , i = "pending"
              , r = {
                state: function() {
                    return i
                },
                always: function() {
                    return o.done(arguments).fail(arguments),
                    this
                },
                catch: function(e) {
                    return r.then(null, e)
                },
                pipe: function() {
                    var e = arguments;
                    return E.Deferred(function(t) {
                        E.each(n, function(n, i) {
                            var r = g(e[i[4]]) && e[i[4]];
                            o[i[1]](function() {
                                var e = r && r.apply(this, arguments);
                                e && g(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[i[0] + "With"](this, r ? [e] : arguments)
                            })
                        }),
                        e = null
                    }).promise()
                },
                then: function(t, i, r) {
                    var o = 0;
                    function s(t, n, i, r) {
                        return function() {
                            var a = this
                              , l = arguments
                              , c = function() {
                                var e, c;
                                if (!(t < o)) {
                                    if ((e = i.apply(a, l)) === n.promise())
                                        throw new TypeError("Thenable self-resolution");
                                    c = e && ("object" == typeof e || "function" == typeof e) && e.then,
                                    g(c) ? r ? c.call(e, s(o, n, R, r), s(o, n, M, r)) : (o++,
                                    c.call(e, s(o, n, R, r), s(o, n, M, r), s(o, n, R, n.notifyWith))) : (i !== R && (a = void 0,
                                    l = [e]),
                                    (r || n.resolveWith)(a, l))
                                }
                            }
                              , u = r ? c : function() {
                                try {
                                    c()
                                } catch (e) {
                                    E.Deferred.exceptionHook && E.Deferred.exceptionHook(e, u.stackTrace),
                                    o <= t + 1 && (i !== M && (a = void 0,
                                    l = [e]),
                                    n.rejectWith(a, l))
                                }
                            }
                            ;
                            t ? u() : (E.Deferred.getStackHook && (u.stackTrace = E.Deferred.getStackHook()),
                            e.setTimeout(u))
                        }
                    }
                    return E.Deferred(function(e) {
                        n[0][3].add(s(0, e, g(r) ? r : R, e.notifyWith)),
                        n[1][3].add(s(0, e, g(t) ? t : R)),
                        n[2][3].add(s(0, e, g(i) ? i : M))
                    }).promise()
                },
                promise: function(e) {
                    return null != e ? E.extend(e, r) : r
                }
            }
              , o = {};
            return E.each(n, function(e, t) {
                var s = t[2]
                  , a = t[5];
                r[t[1]] = s.add,
                a && s.add(function() {
                    i = a
                }, n[3 - e][2].disable, n[3 - e][3].disable, n[0][2].lock, n[0][3].lock),
                s.add(t[3].fire),
                o[t[0]] = function() {
                    return o[t[0] + "With"](this === o ? void 0 : this, arguments),
                    this
                }
                ,
                o[t[0] + "With"] = s.fireWith
            }),
            r.promise(o),
            t && t.call(o, o),
            o
        },
        when: function(e) {
            var t = arguments.length
              , n = t
              , i = Array(n)
              , r = o.call(arguments)
              , s = E.Deferred()
              , a = function(e) {
                return function(n) {
                    i[e] = this,
                    r[e] = 1 < arguments.length ? o.call(arguments) : n,
                    --t || s.resolveWith(i, r)
                }
            };
            if (t <= 1 && (q(e, s.done(a(n)).resolve, s.reject, !t),
            "pending" === s.state() || g(r[n] && r[n].then)))
                return s.then();
            for (; n--; )
                q(r[n], a(n), s.reject);
            return s.promise()
        }
    });
    var F = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    E.Deferred.exceptionHook = function(t, n) {
        e.console && e.console.warn && t && F.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n)
    }
    ,
    E.readyException = function(t) {
        e.setTimeout(function() {
            throw t
        })
    }
    ;
    var W = E.Deferred();
    function B() {
        i.removeEventListener("DOMContentLoaded", B),
        e.removeEventListener("load", B),
        E.ready()
    }
    E.fn.ready = function(e) {
        return W.then(e).catch(function(e) {
            E.readyException(e)
        }),
        this
    }
    ,
    E.extend({
        isReady: !1,
        readyWait: 1,
        ready: function(e) {
            (!0 === e ? --E.readyWait : E.isReady) || (E.isReady = !0) !== e && 0 < --E.readyWait || W.resolveWith(i, [E])
        }
    }),
    E.ready.then = W.then,
    "complete" === i.readyState || "loading" !== i.readyState && !i.documentElement.doScroll ? e.setTimeout(E.ready) : (i.addEventListener("DOMContentLoaded", B),
    e.addEventListener("load", B));
    var U = function(e, t, n, i, r, o, s) {
        var a = 0
          , l = e.length
          , c = null == n;
        if ("object" === _(n))
            for (a in r = !0,
            n)
                U(e, t, a, n[a], !0, o, s);
        else if (void 0 !== i && (r = !0,
        g(i) || (s = !0),
        c && (s ? (t.call(e, i),
        t = null) : (c = t,
        t = function(e, t, n) {
            return c.call(E(e), n)
        }
        )),
        t))
            for (; a < l; a++)
                t(e[a], n, s ? i : i.call(e[a], a, t(e[a], n)));
        return r ? e : c ? t.call(e) : l ? t(e[0], n) : o
    }
      , V = /^-ms-/
      , Q = /-([a-z])/g;
    function K(e, t) {
        return t.toUpperCase()
    }
    function $(e) {
        return e.replace(V, "ms-").replace(Q, K)
    }
    var z = function(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    };
    function Y() {
        this.expando = E.expando + Y.uid++
    }
    Y.uid = 1,
    Y.prototype = {
        cache: function(e) {
            var t = e[this.expando];
            return t || (t = {},
            z(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))),
            t
        },
        set: function(e, t, n) {
            var i, r = this.cache(e);
            if ("string" == typeof t)
                r[$(t)] = n;
            else
                for (i in t)
                    r[$(i)] = t[i];
            return r
        },
        get: function(e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][$(t)]
        },
        access: function(e, t, n) {
            return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n),
            void 0 !== n ? n : t)
        },
        remove: function(e, t) {
            var n, i = e[this.expando];
            if (void 0 !== i) {
                if (void 0 !== t) {
                    n = (t = Array.isArray(t) ? t.map($) : (t = $(t))in i ? [t] : t.match(H) || []).length;
                    for (; n--; )
                        delete i[t[n]]
                }
                (void 0 === t || E.isEmptyObject(i)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        },
        hasData: function(e) {
            var t = e[this.expando];
            return void 0 !== t && !E.isEmptyObject(t)
        }
    };
    var X = new Y
      , G = new Y
      , J = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/
      , Z = /[A-Z]/g;
    function ee(e, t, n) {
        var i, r;
        if (void 0 === n && 1 === e.nodeType)
            if (i = "data-" + t.replace(Z, "-$&").toLowerCase(),
            "string" == typeof (n = e.getAttribute(i))) {
                try {
                    n = "true" === (r = n) || "false" !== r && ("null" === r ? null : r === +r + "" ? +r : J.test(r) ? JSON.parse(r) : r)
                } catch (e) {}
                G.set(e, t, n)
            } else
                n = void 0;
        return n
    }
    E.extend({
        hasData: function(e) {
            return G.hasData(e) || X.hasData(e)
        },
        data: function(e, t, n) {
            return G.access(e, t, n)
        },
        removeData: function(e, t) {
            G.remove(e, t)
        },
        _data: function(e, t, n) {
            return X.access(e, t, n)
        },
        _removeData: function(e, t) {
            X.remove(e, t)
        }
    }),
    E.fn.extend({
        data: function(e, t) {
            var n, i, r, o = this[0], s = o && o.attributes;
            if (void 0 === e) {
                if (this.length && (r = G.get(o),
                1 === o.nodeType && !X.get(o, "hasDataAttrs"))) {
                    for (n = s.length; n--; )
                        s[n] && 0 === (i = s[n].name).indexOf("data-") && (i = $(i.slice(5)),
                        ee(o, i, r[i]));
                    X.set(o, "hasDataAttrs", !0)
                }
                return r
            }
            return "object" == typeof e ? this.each(function() {
                G.set(this, e)
            }) : U(this, function(t) {
                var n;
                if (o && void 0 === t)
                    return void 0 !== (n = G.get(o, e)) ? n : void 0 !== (n = ee(o, e)) ? n : void 0;
                this.each(function() {
                    G.set(this, e, t)
                })
            }, null, t, 1 < arguments.length, null, !0)
        },
        removeData: function(e) {
            return this.each(function() {
                G.remove(this, e)
            })
        }
    }),
    E.extend({
        queue: function(e, t, n) {
            var i;
            if (e)
                return t = (t || "fx") + "queue",
                i = X.get(e, t),
                n && (!i || Array.isArray(n) ? i = X.access(e, t, E.makeArray(n)) : i.push(n)),
                i || []
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = E.queue(e, t)
              , i = n.length
              , r = n.shift()
              , o = E._queueHooks(e, t);
            "inprogress" === r && (r = n.shift(),
            i--),
            r && ("fx" === t && n.unshift("inprogress"),
            delete o.stop,
            r.call(e, function() {
                E.dequeue(e, t)
            }, o)),
            !i && o && o.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return X.get(e, n) || X.access(e, n, {
                empty: E.Callbacks("once memory").add(function() {
                    X.remove(e, [t + "queue", n])
                })
            })
        }
    }),
    E.fn.extend({
        queue: function(e, t) {
            var n = 2;
            return "string" != typeof e && (t = e,
            e = "fx",
            n--),
            arguments.length < n ? E.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                var n = E.queue(this, e, t);
                E._queueHooks(this, e),
                "fx" === e && "inprogress" !== n[0] && E.dequeue(this, e)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                E.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var n, i = 1, r = E.Deferred(), o = this, s = this.length, a = function() {
                --i || r.resolveWith(o, [o])
            };
            for ("string" != typeof e && (t = e,
            e = void 0),
            e = e || "fx"; s--; )
                (n = X.get(o[s], e + "queueHooks")) && n.empty && (i++,
                n.empty.add(a));
            return a(),
            r.promise(t)
        }
    });
    var te = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source
      , ne = new RegExp("^(?:([+-])=|)(" + te + ")([a-z%]*)$","i")
      , ie = ["Top", "Right", "Bottom", "Left"]
      , re = i.documentElement
      , oe = function(e) {
        return E.contains(e.ownerDocument, e)
    }
      , se = {
        composed: !0
    };
    re.getRootNode && (oe = function(e) {
        return E.contains(e.ownerDocument, e) || e.getRootNode(se) === e.ownerDocument
    }
    );
    var ae = function(e, t) {
        return "none" === (e = t || e).style.display || "" === e.style.display && oe(e) && "none" === E.css(e, "display")
    }
      , le = function(e, t, n, i) {
        var r, o, s = {};
        for (o in t)
            s[o] = e.style[o],
            e.style[o] = t[o];
        for (o in r = n.apply(e, i || []),
        t)
            e.style[o] = s[o];
        return r
    }
      , ce = {};
    function ue(e, t) {
        for (var n, i, r, o, s, a, l, c = [], u = 0, f = e.length; u < f; u++)
            (i = e[u]).style && (n = i.style.display,
            t ? ("none" === n && (c[u] = X.get(i, "display") || null,
            c[u] || (i.style.display = "")),
            "" === i.style.display && ae(i) && (c[u] = (l = s = o = void 0,
            s = (r = i).ownerDocument,
            a = r.nodeName,
            (l = ce[a]) || (o = s.body.appendChild(s.createElement(a)),
            l = E.css(o, "display"),
            o.parentNode.removeChild(o),
            "none" === l && (l = "block"),
            ce[a] = l)))) : "none" !== n && (c[u] = "none",
            X.set(i, "display", n)));
        for (u = 0; u < f; u++)
            null != c[u] && (e[u].style.display = c[u]);
        return e
    }
    E.fn.extend({
        show: function() {
            return ue(this, !0)
        },
        hide: function() {
            return ue(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                ae(this) ? E(this).show() : E(this).hide()
            })
        }
    });
    var fe = /^(?:checkbox|radio)$/i
      , he = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i
      , de = /^$|^module$|\/(?:java|ecma)script/i
      , pe = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    };
    function ge(e, t) {
        var n;
        return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [],
        void 0 === t || t && A(e, t) ? E.merge([e], n) : n
    }
    function me(e, t) {
        for (var n = 0, i = e.length; n < i; n++)
            X.set(e[n], "globalEval", !t || X.get(t[n], "globalEval"))
    }
    pe.optgroup = pe.option,
    pe.tbody = pe.tfoot = pe.colgroup = pe.caption = pe.thead,
    pe.th = pe.td;
    var ve, ye, _e = /<|&#?\w+;/;
    function be(e, t, n, i, r) {
        for (var o, s, a, l, c, u, f = t.createDocumentFragment(), h = [], d = 0, p = e.length; d < p; d++)
            if ((o = e[d]) || 0 === o)
                if ("object" === _(o))
                    E.merge(h, o.nodeType ? [o] : o);
                else if (_e.test(o)) {
                    for (s = s || f.appendChild(t.createElement("div")),
                    a = (he.exec(o) || ["", ""])[1].toLowerCase(),
                    l = pe[a] || pe._default,
                    s.innerHTML = l[1] + E.htmlPrefilter(o) + l[2],
                    u = l[0]; u--; )
                        s = s.lastChild;
                    E.merge(h, s.childNodes),
                    (s = f.firstChild).textContent = ""
                } else
                    h.push(t.createTextNode(o));
        for (f.textContent = "",
        d = 0; o = h[d++]; )
            if (i && -1 < E.inArray(o, i))
                r && r.push(o);
            else if (c = oe(o),
            s = ge(f.appendChild(o), "script"),
            c && me(s),
            n)
                for (u = 0; o = s[u++]; )
                    de.test(o.type || "") && n.push(o);
        return f
    }
    ve = i.createDocumentFragment().appendChild(i.createElement("div")),
    (ye = i.createElement("input")).setAttribute("type", "radio"),
    ye.setAttribute("checked", "checked"),
    ye.setAttribute("name", "t"),
    ve.appendChild(ye),
    p.checkClone = ve.cloneNode(!0).cloneNode(!0).lastChild.checked,
    ve.innerHTML = "<textarea>x</textarea>",
    p.noCloneChecked = !!ve.cloneNode(!0).lastChild.defaultValue;
    var Ee = /^key/
      , we = /^(?:mouse|pointer|contextmenu|drag|drop)|click/
      , Ce = /^([^.]*)(?:\.(.+)|)/;
    function Te() {
        return !0
    }
    function xe() {
        return !1
    }
    function Se(e, t) {
        return e === function() {
            try {
                return i.activeElement
            } catch (e) {}
        }() == ("focus" === t)
    }
    function De(e, t, n, i, r, o) {
        var s, a;
        if ("object" == typeof t) {
            for (a in "string" != typeof n && (i = i || n,
            n = void 0),
            t)
                De(e, a, n, i, t[a], o);
            return e
        }
        if (null == i && null == r ? (r = n,
        i = n = void 0) : null == r && ("string" == typeof n ? (r = i,
        i = void 0) : (r = i,
        i = n,
        n = void 0)),
        !1 === r)
            r = xe;
        else if (!r)
            return e;
        return 1 === o && (s = r,
        (r = function(e) {
            return E().off(e),
            s.apply(this, arguments)
        }
        ).guid = s.guid || (s.guid = E.guid++)),
        e.each(function() {
            E.event.add(this, t, r, i, n)
        })
    }
    function Ae(e, t, n) {
        n ? (X.set(e, t, !1),
        E.event.add(e, t, {
            namespace: !1,
            handler: function(e) {
                var i, r, s = X.get(this, t);
                if (1 & e.isTrigger && this[t]) {
                    if (s.length)
                        (E.event.special[t] || {}).delegateType && e.stopPropagation();
                    else if (s = o.call(arguments),
                    X.set(this, t, s),
                    i = n(this, t),
                    this[t](),
                    s !== (r = X.get(this, t)) || i ? X.set(this, t, !1) : r = {},
                    s !== r)
                        return e.stopImmediatePropagation(),
                        e.preventDefault(),
                        r.value
                } else
                    s.length && (X.set(this, t, {
                        value: E.event.trigger(E.extend(s[0], E.Event.prototype), s.slice(1), this)
                    }),
                    e.stopImmediatePropagation())
            }
        })) : void 0 === X.get(e, t) && E.event.add(e, t, Te)
    }
    E.event = {
        global: {},
        add: function(e, t, n, i, r) {
            var o, s, a, l, c, u, f, h, d, p, g, m = X.get(e);
            if (m)
                for (n.handler && (n = (o = n).handler,
                r = o.selector),
                r && E.find.matchesSelector(re, r),
                n.guid || (n.guid = E.guid++),
                (l = m.events) || (l = m.events = {}),
                (s = m.handle) || (s = m.handle = function(t) {
                    return void 0 !== E && E.event.triggered !== t.type ? E.event.dispatch.apply(e, arguments) : void 0
                }
                ),
                c = (t = (t || "").match(H) || [""]).length; c--; )
                    d = g = (a = Ce.exec(t[c]) || [])[1],
                    p = (a[2] || "").split(".").sort(),
                    d && (f = E.event.special[d] || {},
                    d = (r ? f.delegateType : f.bindType) || d,
                    f = E.event.special[d] || {},
                    u = E.extend({
                        type: d,
                        origType: g,
                        data: i,
                        handler: n,
                        guid: n.guid,
                        selector: r,
                        needsContext: r && E.expr.match.needsContext.test(r),
                        namespace: p.join(".")
                    }, o),
                    (h = l[d]) || ((h = l[d] = []).delegateCount = 0,
                    f.setup && !1 !== f.setup.call(e, i, p, s) || e.addEventListener && e.addEventListener(d, s)),
                    f.add && (f.add.call(e, u),
                    u.handler.guid || (u.handler.guid = n.guid)),
                    r ? h.splice(h.delegateCount++, 0, u) : h.push(u),
                    E.event.global[d] = !0)
        },
        remove: function(e, t, n, i, r) {
            var o, s, a, l, c, u, f, h, d, p, g, m = X.hasData(e) && X.get(e);
            if (m && (l = m.events)) {
                for (c = (t = (t || "").match(H) || [""]).length; c--; )
                    if (d = g = (a = Ce.exec(t[c]) || [])[1],
                    p = (a[2] || "").split(".").sort(),
                    d) {
                        for (f = E.event.special[d] || {},
                        h = l[d = (i ? f.delegateType : f.bindType) || d] || [],
                        a = a[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                        s = o = h.length; o--; )
                            u = h[o],
                            !r && g !== u.origType || n && n.guid !== u.guid || a && !a.test(u.namespace) || i && i !== u.selector && ("**" !== i || !u.selector) || (h.splice(o, 1),
                            u.selector && h.delegateCount--,
                            f.remove && f.remove.call(e, u));
                        s && !h.length && (f.teardown && !1 !== f.teardown.call(e, p, m.handle) || E.removeEvent(e, d, m.handle),
                        delete l[d])
                    } else
                        for (d in l)
                            E.event.remove(e, d + t[c], n, i, !0);
                E.isEmptyObject(l) && X.remove(e, "handle events")
            }
        },
        dispatch: function(e) {
            var t, n, i, r, o, s, a = E.event.fix(e), l = new Array(arguments.length), c = (X.get(this, "events") || {})[a.type] || [], u = E.event.special[a.type] || {};
            for (l[0] = a,
            t = 1; t < arguments.length; t++)
                l[t] = arguments[t];
            if (a.delegateTarget = this,
            !u.preDispatch || !1 !== u.preDispatch.call(this, a)) {
                for (s = E.event.handlers.call(this, a, c),
                t = 0; (r = s[t++]) && !a.isPropagationStopped(); )
                    for (a.currentTarget = r.elem,
                    n = 0; (o = r.handlers[n++]) && !a.isImmediatePropagationStopped(); )
                        a.rnamespace && !1 !== o.namespace && !a.rnamespace.test(o.namespace) || (a.handleObj = o,
                        a.data = o.data,
                        void 0 !== (i = ((E.event.special[o.origType] || {}).handle || o.handler).apply(r.elem, l)) && !1 === (a.result = i) && (a.preventDefault(),
                        a.stopPropagation()));
                return u.postDispatch && u.postDispatch.call(this, a),
                a.result
            }
        },
        handlers: function(e, t) {
            var n, i, r, o, s, a = [], l = t.delegateCount, c = e.target;
            if (l && c.nodeType && !("click" === e.type && 1 <= e.button))
                for (; c !== this; c = c.parentNode || this)
                    if (1 === c.nodeType && ("click" !== e.type || !0 !== c.disabled)) {
                        for (o = [],
                        s = {},
                        n = 0; n < l; n++)
                            void 0 === s[r = (i = t[n]).selector + " "] && (s[r] = i.needsContext ? -1 < E(r, this).index(c) : E.find(r, this, null, [c]).length),
                            s[r] && o.push(i);
                        o.length && a.push({
                            elem: c,
                            handlers: o
                        })
                    }
            return c = this,
            l < t.length && a.push({
                elem: c,
                handlers: t.slice(l)
            }),
            a
        },
        addProp: function(e, t) {
            Object.defineProperty(E.Event.prototype, e, {
                enumerable: !0,
                configurable: !0,
                get: g(t) ? function() {
                    if (this.originalEvent)
                        return t(this.originalEvent)
                }
                : function() {
                    if (this.originalEvent)
                        return this.originalEvent[e]
                }
                ,
                set: function(t) {
                    Object.defineProperty(this, e, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: t
                    })
                }
            })
        },
        fix: function(e) {
            return e[E.expando] ? e : new E.Event(e)
        },
        special: {
            load: {
                noBubble: !0
            },
            click: {
                setup: function(e) {
                    var t = this || e;
                    return fe.test(t.type) && t.click && A(t, "input") && Ae(t, "click", Te),
                    !1
                },
                trigger: function(e) {
                    var t = this || e;
                    return fe.test(t.type) && t.click && A(t, "input") && Ae(t, "click"),
                    !0
                },
                _default: function(e) {
                    var t = e.target;
                    return fe.test(t.type) && t.click && A(t, "input") && X.get(t, "click") || A(t, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    },
    E.removeEvent = function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    }
    ,
    E.Event = function(e, t) {
        if (!(this instanceof E.Event))
            return new E.Event(e,t);
        e && e.type ? (this.originalEvent = e,
        this.type = e.type,
        this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Te : xe,
        this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target,
        this.currentTarget = e.currentTarget,
        this.relatedTarget = e.relatedTarget) : this.type = e,
        t && E.extend(this, t),
        this.timeStamp = e && e.timeStamp || Date.now(),
        this[E.expando] = !0
    }
    ,
    E.Event.prototype = {
        constructor: E.Event,
        isDefaultPrevented: xe,
        isPropagationStopped: xe,
        isImmediatePropagationStopped: xe,
        isSimulated: !1,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = Te,
            e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = Te,
            e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = Te,
            e && !this.isSimulated && e.stopImmediatePropagation(),
            this.stopPropagation()
        }
    },
    E.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        code: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function(e) {
            var t = e.button;
            return null == e.which && Ee.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && we.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
        }
    }, E.event.addProp),
    E.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        E.event.special[e] = {
            setup: function() {
                return Ae(this, e, Se),
                !1
            },
            trigger: function() {
                return Ae(this, e),
                !0
            },
            delegateType: t
        }
    }),
    E.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, t) {
        E.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var n, i = e.relatedTarget, r = e.handleObj;
                return i && (i === this || E.contains(this, i)) || (e.type = r.origType,
                n = r.handler.apply(this, arguments),
                e.type = t),
                n
            }
        }
    }),
    E.fn.extend({
        on: function(e, t, n, i) {
            return De(this, e, t, n, i)
        },
        one: function(e, t, n, i) {
            return De(this, e, t, n, i, 1)
        },
        off: function(e, t, n) {
            var i, r;
            if (e && e.preventDefault && e.handleObj)
                return i = e.handleObj,
                E(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler),
                this;
            if ("object" == typeof e) {
                for (r in e)
                    this.off(r, t, e[r]);
                return this
            }
            return !1 !== t && "function" != typeof t || (n = t,
            t = void 0),
            !1 === n && (n = xe),
            this.each(function() {
                E.event.remove(this, e, n, t)
            })
        }
    });
    var Ne = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi
      , Ie = /<script|<style|<link/i
      , ke = /checked\s*(?:[^=]|=\s*.checked.)/i
      , Oe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    function Le(e, t) {
        return A(e, "table") && A(11 !== t.nodeType ? t : t.firstChild, "tr") && E(e).children("tbody")[0] || e
    }
    function Pe(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type,
        e
    }
    function je(e) {
        return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"),
        e
    }
    function He(e, t) {
        var n, i, r, o, s, a, l, c;
        if (1 === t.nodeType) {
            if (X.hasData(e) && (o = X.access(e),
            s = X.set(t, o),
            c = o.events))
                for (r in delete s.handle,
                s.events = {},
                c)
                    for (n = 0,
                    i = c[r].length; n < i; n++)
                        E.event.add(t, r, c[r][n]);
            G.hasData(e) && (a = G.access(e),
            l = E.extend({}, a),
            G.set(t, l))
        }
    }
    function Re(e, t, n, i) {
        t = s.apply([], t);
        var r, o, a, l, c, u, f = 0, h = e.length, d = h - 1, m = t[0], v = g(m);
        if (v || 1 < h && "string" == typeof m && !p.checkClone && ke.test(m))
            return e.each(function(r) {
                var o = e.eq(r);
                v && (t[0] = m.call(this, r, o.html())),
                Re(o, t, n, i)
            });
        if (h && (o = (r = be(t, e[0].ownerDocument, !1, e, i)).firstChild,
        1 === r.childNodes.length && (r = o),
        o || i)) {
            for (l = (a = E.map(ge(r, "script"), Pe)).length; f < h; f++)
                c = r,
                f !== d && (c = E.clone(c, !0, !0),
                l && E.merge(a, ge(c, "script"))),
                n.call(e[f], c, f);
            if (l)
                for (u = a[a.length - 1].ownerDocument,
                E.map(a, je),
                f = 0; f < l; f++)
                    c = a[f],
                    de.test(c.type || "") && !X.access(c, "globalEval") && E.contains(u, c) && (c.src && "module" !== (c.type || "").toLowerCase() ? E._evalUrl && !c.noModule && E._evalUrl(c.src, {
                        nonce: c.nonce || c.getAttribute("nonce")
                    }) : y(c.textContent.replace(Oe, ""), c, u))
        }
        return e
    }
    function Me(e, t, n) {
        for (var i, r = t ? E.filter(t, e) : e, o = 0; null != (i = r[o]); o++)
            n || 1 !== i.nodeType || E.cleanData(ge(i)),
            i.parentNode && (n && oe(i) && me(ge(i, "script")),
            i.parentNode.removeChild(i));
        return e
    }
    E.extend({
        htmlPrefilter: function(e) {
            return e.replace(Ne, "<$1></$2>")
        },
        clone: function(e, t, n) {
            var i, r, o, s, a, l, c, u = e.cloneNode(!0), f = oe(e);
            if (!(p.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || E.isXMLDoc(e)))
                for (s = ge(u),
                i = 0,
                r = (o = ge(e)).length; i < r; i++)
                    a = o[i],
                    "input" === (c = (l = s[i]).nodeName.toLowerCase()) && fe.test(a.type) ? l.checked = a.checked : "input" !== c && "textarea" !== c || (l.defaultValue = a.defaultValue);
            if (t)
                if (n)
                    for (o = o || ge(e),
                    s = s || ge(u),
                    i = 0,
                    r = o.length; i < r; i++)
                        He(o[i], s[i]);
                else
                    He(e, u);
            return 0 < (s = ge(u, "script")).length && me(s, !f && ge(e, "script")),
            u
        },
        cleanData: function(e) {
            for (var t, n, i, r = E.event.special, o = 0; void 0 !== (n = e[o]); o++)
                if (z(n)) {
                    if (t = n[X.expando]) {
                        if (t.events)
                            for (i in t.events)
                                r[i] ? E.event.remove(n, i) : E.removeEvent(n, i, t.handle);
                        n[X.expando] = void 0
                    }
                    n[G.expando] && (n[G.expando] = void 0)
                }
        }
    }),
    E.fn.extend({
        detach: function(e) {
            return Me(this, e, !0)
        },
        remove: function(e) {
            return Me(this, e)
        },
        text: function(e) {
            return U(this, function(e) {
                return void 0 === e ? E.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                })
            }, null, e, arguments.length)
        },
        append: function() {
            return Re(this, arguments, function(e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Le(this, e).appendChild(e)
            })
        },
        prepend: function() {
            return Re(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = Le(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return Re(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return Re(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++)
                1 === e.nodeType && (E.cleanData(ge(e, !1)),
                e.textContent = "");
            return this
        },
        clone: function(e, t) {
            return e = null != e && e,
            t = null == t ? e : t,
            this.map(function() {
                return E.clone(this, e, t)
            })
        },
        html: function(e) {
            return U(this, function(e) {
                var t = this[0] || {}
                  , n = 0
                  , i = this.length;
                if (void 0 === e && 1 === t.nodeType)
                    return t.innerHTML;
                if ("string" == typeof e && !Ie.test(e) && !pe[(he.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = E.htmlPrefilter(e);
                    try {
                        for (; n < i; n++)
                            1 === (t = this[n] || {}).nodeType && (E.cleanData(ge(t, !1)),
                            t.innerHTML = e);
                        t = 0
                    } catch (e) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var e = [];
            return Re(this, arguments, function(t) {
                var n = this.parentNode;
                E.inArray(this, e) < 0 && (E.cleanData(ge(this)),
                n && n.replaceChild(t, this))
            }, e)
        }
    }),
    E.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, t) {
        E.fn[e] = function(e) {
            for (var n, i = [], r = E(e), o = r.length - 1, s = 0; s <= o; s++)
                n = s === o ? this : this.clone(!0),
                E(r[s])[t](n),
                a.apply(i, n.get());
            return this.pushStack(i)
        }
    });
    var qe = new RegExp("^(" + te + ")(?!px)[a-z%]+$","i")
      , Fe = function(t) {
        var n = t.ownerDocument.defaultView;
        return n && n.opener || (n = e),
        n.getComputedStyle(t)
    }
      , We = new RegExp(ie.join("|"),"i");
    function Be(e, t, n) {
        var i, r, o, s, a = e.style;
        return (n = n || Fe(e)) && ("" !== (s = n.getPropertyValue(t) || n[t]) || oe(e) || (s = E.style(e, t)),
        !p.pixelBoxStyles() && qe.test(s) && We.test(t) && (i = a.width,
        r = a.minWidth,
        o = a.maxWidth,
        a.minWidth = a.maxWidth = a.width = s,
        s = n.width,
        a.width = i,
        a.minWidth = r,
        a.maxWidth = o)),
        void 0 !== s ? s + "" : s
    }
    function Ue(e, t) {
        return {
            get: function() {
                if (!e())
                    return (this.get = t).apply(this, arguments);
                delete this.get
            }
        }
    }
    !function() {
        function t() {
            if (u) {
                c.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",
                u.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",
                re.appendChild(c).appendChild(u);
                var t = e.getComputedStyle(u);
                r = "1%" !== t.top,
                l = 12 === n(t.marginLeft),
                u.style.right = "60%",
                a = 36 === n(t.right),
                o = 36 === n(t.width),
                u.style.position = "absolute",
                s = 12 === n(u.offsetWidth / 3),
                re.removeChild(c),
                u = null
            }
        }
        function n(e) {
            return Math.round(parseFloat(e))
        }
        var r, o, s, a, l, c = i.createElement("div"), u = i.createElement("div");
        u.style && (u.style.backgroundClip = "content-box",
        u.cloneNode(!0).style.backgroundClip = "",
        p.clearCloneStyle = "content-box" === u.style.backgroundClip,
        E.extend(p, {
            boxSizingReliable: function() {
                return t(),
                o
            },
            pixelBoxStyles: function() {
                return t(),
                a
            },
            pixelPosition: function() {
                return t(),
                r
            },
            reliableMarginLeft: function() {
                return t(),
                l
            },
            scrollboxSize: function() {
                return t(),
                s
            }
        }))
    }();
    var Ve = ["Webkit", "Moz", "ms"]
      , Qe = i.createElement("div").style
      , Ke = {};
    function $e(e) {
        return E.cssProps[e] || Ke[e] || (e in Qe ? e : Ke[e] = function(e) {
            for (var t = e[0].toUpperCase() + e.slice(1), n = Ve.length; n--; )
                if ((e = Ve[n] + t)in Qe)
                    return e
        }(e) || e)
    }
    var ze, Ye, Xe = /^(none|table(?!-c[ea]).+)/, Ge = /^--/, Je = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }, Ze = {
        letterSpacing: "0",
        fontWeight: "400"
    };
    function et(e, t, n) {
        var i = ne.exec(t);
        return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t
    }
    function tt(e, t, n, i, r, o) {
        var s = "width" === t ? 1 : 0
          , a = 0
          , l = 0;
        if (n === (i ? "border" : "content"))
            return 0;
        for (; s < 4; s += 2)
            "margin" === n && (l += E.css(e, n + ie[s], !0, r)),
            i ? ("content" === n && (l -= E.css(e, "padding" + ie[s], !0, r)),
            "margin" !== n && (l -= E.css(e, "border" + ie[s] + "Width", !0, r))) : (l += E.css(e, "padding" + ie[s], !0, r),
            "padding" !== n ? l += E.css(e, "border" + ie[s] + "Width", !0, r) : a += E.css(e, "border" + ie[s] + "Width", !0, r));
        return !i && 0 <= o && (l += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - l - a - .5)) || 0),
        l
    }
    function nt(e, t, n) {
        var i = Fe(e)
          , r = (!p.boxSizingReliable() || n) && "border-box" === E.css(e, "boxSizing", !1, i)
          , o = r
          , s = Be(e, t, i)
          , a = "offset" + t[0].toUpperCase() + t.slice(1);
        if (qe.test(s)) {
            if (!n)
                return s;
            s = "auto"
        }
        return (!p.boxSizingReliable() && r || "auto" === s || !parseFloat(s) && "inline" === E.css(e, "display", !1, i)) && e.getClientRects().length && (r = "border-box" === E.css(e, "boxSizing", !1, i),
        (o = a in e) && (s = e[a])),
        (s = parseFloat(s) || 0) + tt(e, t, n || (r ? "border" : "content"), o, i, s) + "px"
    }
    E.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = Be(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            gridArea: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnStart: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowStart: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {},
        style: function(e, t, n, i) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var r, o, s, a = $(t), l = Ge.test(t), c = e.style;
                if (l || (t = $e(a)),
                s = E.cssHooks[t] || E.cssHooks[a],
                void 0 === n)
                    return s && "get"in s && void 0 !== (r = s.get(e, !1, i)) ? r : c[t];
                "string" == (o = typeof n) && (r = ne.exec(n)) && r[1] && (n = function(e, t, n, i) {
                    var r, o, s = 20, a = function() {
                        return E.css(e, t, "")
                    }, l = a(), c = n && n[3] || (E.cssNumber[t] ? "" : "px"), u = e.nodeType && (E.cssNumber[t] || "px" !== c && +l) && ne.exec(E.css(e, t));
                    if (u && u[3] !== c) {
                        for (l /= 2,
                        c = c || u[3],
                        u = +l || 1; s--; )
                            E.style(e, t, u + c),
                            (1 - o) * (1 - (o = a() / l || .5)) <= 0 && (s = 0),
                            u /= o;
                        u *= 2,
                        E.style(e, t, u + c),
                        n = n || []
                    }
                    return n && (u = +u || +l || 0,
                    r = n[1] ? u + (n[1] + 1) * n[2] : +n[2]),
                    r
                }(e, t, r),
                o = "number"),
                null != n && n == n && ("number" !== o || l || (n += r && r[3] || (E.cssNumber[a] ? "" : "px")),
                p.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (c[t] = "inherit"),
                s && "set"in s && void 0 === (n = s.set(e, n, i)) || (l ? c.setProperty(t, n) : c[t] = n))
            }
        },
        css: function(e, t, n, i) {
            var r, o, s, a = $(t);
            return Ge.test(t) || (t = $e(a)),
            (s = E.cssHooks[t] || E.cssHooks[a]) && "get"in s && (r = s.get(e, !0, n)),
            void 0 === r && (r = Be(e, t, i)),
            "normal" === r && t in Ze && (r = Ze[t]),
            "" === n || n ? (o = parseFloat(r),
            !0 === n || isFinite(o) ? o || 0 : r) : r
        }
    }),
    E.each(["height", "width"], function(e, t) {
        E.cssHooks[t] = {
            get: function(e, n, i) {
                if (n)
                    return !Xe.test(E.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? nt(e, t, i) : le(e, Je, function() {
                        return nt(e, t, i)
                    })
            },
            set: function(e, n, i) {
                var r, o = Fe(e), s = !p.scrollboxSize() && "absolute" === o.position, a = (s || i) && "border-box" === E.css(e, "boxSizing", !1, o), l = i ? tt(e, t, i, a, o) : 0;
                return a && s && (l -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(o[t]) - tt(e, t, "border", !1, o) - .5)),
                l && (r = ne.exec(n)) && "px" !== (r[3] || "px") && (e.style[t] = n,
                n = E.css(e, t)),
                et(0, n, l)
            }
        }
    }),
    E.cssHooks.marginLeft = Ue(p.reliableMarginLeft, function(e, t) {
        if (t)
            return (parseFloat(Be(e, "marginLeft")) || e.getBoundingClientRect().left - le(e, {
                marginLeft: 0
            }, function() {
                return e.getBoundingClientRect().left
            })) + "px"
    }),
    E.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(e, t) {
        E.cssHooks[e + t] = {
            expand: function(n) {
                for (var i = 0, r = {}, o = "string" == typeof n ? n.split(" ") : [n]; i < 4; i++)
                    r[e + ie[i] + t] = o[i] || o[i - 2] || o[0];
                return r
            }
        },
        "margin" !== e && (E.cssHooks[e + t].set = et)
    }),
    E.fn.extend({
        css: function(e, t) {
            return U(this, function(e, t, n) {
                var i, r, o = {}, s = 0;
                if (Array.isArray(t)) {
                    for (i = Fe(e),
                    r = t.length; s < r; s++)
                        o[t[s]] = E.css(e, t[s], !1, i);
                    return o
                }
                return void 0 !== n ? E.style(e, t, n) : E.css(e, t)
            }, e, t, 1 < arguments.length)
        }
    }),
    E.fn.delay = function(t, n) {
        return t = E.fx && E.fx.speeds[t] || t,
        n = n || "fx",
        this.queue(n, function(n, i) {
            var r = e.setTimeout(n, t);
            i.stop = function() {
                e.clearTimeout(r)
            }
        })
    }
    ,
    ze = i.createElement("input"),
    Ye = i.createElement("select").appendChild(i.createElement("option")),
    ze.type = "checkbox",
    p.checkOn = "" !== ze.value,
    p.optSelected = Ye.selected,
    (ze = i.createElement("input")).value = "t",
    ze.type = "radio",
    p.radioValue = "t" === ze.value;
    var it, rt = E.expr.attrHandle;
    E.fn.extend({
        attr: function(e, t) {
            return U(this, E.attr, e, t, 1 < arguments.length)
        },
        removeAttr: function(e) {
            return this.each(function() {
                E.removeAttr(this, e)
            })
        }
    }),
    E.extend({
        attr: function(e, t, n) {
            var i, r, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o)
                return void 0 === e.getAttribute ? E.prop(e, t, n) : (1 === o && E.isXMLDoc(e) || (r = E.attrHooks[t.toLowerCase()] || (E.expr.match.bool.test(t) ? it : void 0)),
                void 0 !== n ? null === n ? void E.removeAttr(e, t) : r && "set"in r && void 0 !== (i = r.set(e, n, t)) ? i : (e.setAttribute(t, n + ""),
                n) : r && "get"in r && null !== (i = r.get(e, t)) ? i : null == (i = E.find.attr(e, t)) ? void 0 : i)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!p.radioValue && "radio" === t && A(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t),
                        n && (e.value = n),
                        t
                    }
                }
            }
        },
        removeAttr: function(e, t) {
            var n, i = 0, r = t && t.match(H);
            if (r && 1 === e.nodeType)
                for (; n = r[i++]; )
                    e.removeAttribute(n)
        }
    }),
    it = {
        set: function(e, t, n) {
            return !1 === t ? E.removeAttr(e, n) : e.setAttribute(n, n),
            n
        }
    },
    E.each(E.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var n = rt[t] || E.find.attr;
        rt[t] = function(e, t, i) {
            var r, o, s = t.toLowerCase();
            return i || (o = rt[s],
            rt[s] = r,
            r = null != n(e, t, i) ? s : null,
            rt[s] = o),
            r
        }
    });
    var ot = /^(?:input|select|textarea|button)$/i
      , st = /^(?:a|area)$/i;
    function at(e) {
        return (e.match(H) || []).join(" ")
    }
    function lt(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }
    function ct(e) {
        return Array.isArray(e) ? e : "string" == typeof e && e.match(H) || []
    }
    E.fn.extend({
        prop: function(e, t) {
            return U(this, E.prop, e, t, 1 < arguments.length)
        },
        removeProp: function(e) {
            return this.each(function() {
                delete this[E.propFix[e] || e]
            })
        }
    }),
    E.extend({
        prop: function(e, t, n) {
            var i, r, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o)
                return 1 === o && E.isXMLDoc(e) || (t = E.propFix[t] || t,
                r = E.propHooks[t]),
                void 0 !== n ? r && "set"in r && void 0 !== (i = r.set(e, n, t)) ? i : e[t] = n : r && "get"in r && null !== (i = r.get(e, t)) ? i : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = E.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : ot.test(e.nodeName) || st.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            for: "htmlFor",
            class: "className"
        }
    }),
    p.optSelected || (E.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex,
            null
        },
        set: function(e) {
            var t = e.parentNode;
            t && (t.selectedIndex,
            t.parentNode && t.parentNode.selectedIndex)
        }
    }),
    E.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        E.propFix[this.toLowerCase()] = this
    }),
    E.fn.extend({
        addClass: function(e) {
            var t, n, i, r, o, s, a, l = 0;
            if (g(e))
                return this.each(function(t) {
                    E(this).addClass(e.call(this, t, lt(this)))
                });
            if ((t = ct(e)).length)
                for (; n = this[l++]; )
                    if (r = lt(n),
                    i = 1 === n.nodeType && " " + at(r) + " ") {
                        for (s = 0; o = t[s++]; )
                            i.indexOf(" " + o + " ") < 0 && (i += o + " ");
                        r !== (a = at(i)) && n.setAttribute("class", a)
                    }
            return this
        },
        removeClass: function(e) {
            var t, n, i, r, o, s, a, l = 0;
            if (g(e))
                return this.each(function(t) {
                    E(this).removeClass(e.call(this, t, lt(this)))
                });
            if (!arguments.length)
                return this.attr("class", "");
            if ((t = ct(e)).length)
                for (; n = this[l++]; )
                    if (r = lt(n),
                    i = 1 === n.nodeType && " " + at(r) + " ") {
                        for (s = 0; o = t[s++]; )
                            for (; -1 < i.indexOf(" " + o + " "); )
                                i = i.replace(" " + o + " ", " ");
                        r !== (a = at(i)) && n.setAttribute("class", a)
                    }
            return this
        },
        toggleClass: function(e, t) {
            var n = typeof e
              , i = "string" === n || Array.isArray(e);
            return "boolean" == typeof t && i ? t ? this.addClass(e) : this.removeClass(e) : g(e) ? this.each(function(n) {
                E(this).toggleClass(e.call(this, n, lt(this), t), t)
            }) : this.each(function() {
                var t, r, o, s;
                if (i)
                    for (r = 0,
                    o = E(this),
                    s = ct(e); t = s[r++]; )
                        o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
                else
                    void 0 !== e && "boolean" !== n || ((t = lt(this)) && X.set(this, "__className__", t),
                    this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : X.get(this, "__className__") || ""))
            })
        },
        hasClass: function(e) {
            var t, n, i = 0;
            for (t = " " + e + " "; n = this[i++]; )
                if (1 === n.nodeType && -1 < (" " + at(lt(n)) + " ").indexOf(t))
                    return !0;
            return !1
        }
    });
    var ut = /\r/g;
    E.fn.extend({
        val: function(e) {
            var t, n, i, r = this[0];
            return arguments.length ? (i = g(e),
            this.each(function(n) {
                var r;
                1 === this.nodeType && (null == (r = i ? e.call(this, n, E(this).val()) : e) ? r = "" : "number" == typeof r ? r += "" : Array.isArray(r) && (r = E.map(r, function(e) {
                    return null == e ? "" : e + ""
                })),
                (t = E.valHooks[this.type] || E.valHooks[this.nodeName.toLowerCase()]) && "set"in t && void 0 !== t.set(this, r, "value") || (this.value = r))
            })) : r ? (t = E.valHooks[r.type] || E.valHooks[r.nodeName.toLowerCase()]) && "get"in t && void 0 !== (n = t.get(r, "value")) ? n : "string" == typeof (n = r.value) ? n.replace(ut, "") : null == n ? "" : n : void 0
        }
    }),
    E.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = E.find.attr(e, "value");
                    return null != t ? t : at(E.text(e))
                }
            },
            select: {
                get: function(e) {
                    var t, n, i, r = e.options, o = e.selectedIndex, s = "select-one" === e.type, a = s ? null : [], l = s ? o + 1 : r.length;
                    for (i = o < 0 ? l : s ? o : 0; i < l; i++)
                        if (((n = r[i]).selected || i === o) && !n.disabled && (!n.parentNode.disabled || !A(n.parentNode, "optgroup"))) {
                            if (t = E(n).val(),
                            s)
                                return t;
                            a.push(t)
                        }
                    return a
                },
                set: function(e, t) {
                    for (var n, i, r = e.options, o = E.makeArray(t), s = r.length; s--; )
                        ((i = r[s]).selected = -1 < E.inArray(E.valHooks.option.get(i), o)) && (n = !0);
                    return n || (e.selectedIndex = -1),
                    o
                }
            }
        }
    }),
    E.each(["radio", "checkbox"], function() {
        E.valHooks[this] = {
            set: function(e, t) {
                if (Array.isArray(t))
                    return e.checked = -1 < E.inArray(E(e).val(), t)
            }
        },
        p.checkOn || (E.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        }
        )
    }),
    p.focusin = "onfocusin"in e;
    var ft = /^(?:focusinfocus|focusoutblur)$/
      , ht = function(e) {
        e.stopPropagation()
    };
    E.extend(E.event, {
        trigger: function(t, n, r, o) {
            var s, a, l, c, u, h, d, p, v = [r || i], y = f.call(t, "type") ? t.type : t, _ = f.call(t, "namespace") ? t.namespace.split(".") : [];
            if (a = p = l = r = r || i,
            3 !== r.nodeType && 8 !== r.nodeType && !ft.test(y + E.event.triggered) && (-1 < y.indexOf(".") && (y = (_ = y.split(".")).shift(),
            _.sort()),
            u = y.indexOf(":") < 0 && "on" + y,
            (t = t[E.expando] ? t : new E.Event(y,"object" == typeof t && t)).isTrigger = o ? 2 : 3,
            t.namespace = _.join("."),
            t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + _.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
            t.result = void 0,
            t.target || (t.target = r),
            n = null == n ? [t] : E.makeArray(n, [t]),
            d = E.event.special[y] || {},
            o || !d.trigger || !1 !== d.trigger.apply(r, n))) {
                if (!o && !d.noBubble && !m(r)) {
                    for (c = d.delegateType || y,
                    ft.test(c + y) || (a = a.parentNode); a; a = a.parentNode)
                        v.push(a),
                        l = a;
                    l === (r.ownerDocument || i) && v.push(l.defaultView || l.parentWindow || e)
                }
                for (s = 0; (a = v[s++]) && !t.isPropagationStopped(); )
                    p = a,
                    t.type = 1 < s ? c : d.bindType || y,
                    (h = (X.get(a, "events") || {})[t.type] && X.get(a, "handle")) && h.apply(a, n),
                    (h = u && a[u]) && h.apply && z(a) && (t.result = h.apply(a, n),
                    !1 === t.result && t.preventDefault());
                return t.type = y,
                o || t.isDefaultPrevented() || d._default && !1 !== d._default.apply(v.pop(), n) || !z(r) || u && g(r[y]) && !m(r) && ((l = r[u]) && (r[u] = null),
                E.event.triggered = y,
                t.isPropagationStopped() && p.addEventListener(y, ht),
                r[y](),
                t.isPropagationStopped() && p.removeEventListener(y, ht),
                E.event.triggered = void 0,
                l && (r[u] = l)),
                t.result
            }
        },
        simulate: function(e, t, n) {
            var i = E.extend(new E.Event, n, {
                type: e,
                isSimulated: !0
            });
            E.event.trigger(i, null, t)
        }
    }),
    E.fn.extend({
        trigger: function(e, t) {
            return this.each(function() {
                E.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            if (n)
                return E.event.trigger(e, t, n, !0)
        }
    }),
    p.focusin || E.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        var n = function(e) {
            E.event.simulate(t, e.target, E.event.fix(e))
        };
        E.event.special[t] = {
            setup: function() {
                var i = this.ownerDocument || this
                  , r = X.access(i, t);
                r || i.addEventListener(e, n, !0),
                X.access(i, t, (r || 0) + 1)
            },
            teardown: function() {
                var i = this.ownerDocument || this
                  , r = X.access(i, t) - 1;
                r ? X.access(i, t, r) : (i.removeEventListener(e, n, !0),
                X.remove(i, t))
            }
        }
    });
    var dt, pt = /\[\]$/, gt = /\r?\n/g, mt = /^(?:submit|button|image|reset|file)$/i, vt = /^(?:input|select|textarea|keygen)/i;
    function yt(e, t, n, i) {
        var r;
        if (Array.isArray(t))
            E.each(t, function(t, r) {
                n || pt.test(e) ? i(e, r) : yt(e + "[" + ("object" == typeof r && null != r ? t : "") + "]", r, n, i)
            });
        else if (n || "object" !== _(t))
            i(e, t);
        else
            for (r in t)
                yt(e + "[" + r + "]", t[r], n, i)
    }
    E.param = function(e, t) {
        var n, i = [], r = function(e, t) {
            var n = g(t) ? t() : t;
            i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
        };
        if (null == e)
            return "";
        if (Array.isArray(e) || e.jquery && !E.isPlainObject(e))
            E.each(e, function() {
                r(this.name, this.value)
            });
        else
            for (n in e)
                yt(n, e[n], t, r);
        return i.join("&")
    }
    ,
    E.fn.extend({
        serialize: function() {
            return E.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = E.prop(this, "elements");
                return e ? E.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !E(this).is(":disabled") && vt.test(this.nodeName) && !mt.test(e) && (this.checked || !fe.test(e))
            }).map(function(e, t) {
                var n = E(this).val();
                return null == n ? null : Array.isArray(n) ? E.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(gt, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(gt, "\r\n")
                }
            }).get()
        }
    }),
    E.fn.extend({
        wrapAll: function(e) {
            var t;
            return this[0] && (g(e) && (e = e.call(this[0])),
            t = E(e, this[0].ownerDocument).eq(0).clone(!0),
            this[0].parentNode && t.insertBefore(this[0]),
            t.map(function() {
                for (var e = this; e.firstElementChild; )
                    e = e.firstElementChild;
                return e
            }).append(this)),
            this
        },
        wrapInner: function(e) {
            return g(e) ? this.each(function(t) {
                E(this).wrapInner(e.call(this, t))
            }) : this.each(function() {
                var t = E(this)
                  , n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function(e) {
            var t = g(e);
            return this.each(function(n) {
                E(this).wrapAll(t ? e.call(this, n) : e)
            })
        },
        unwrap: function(e) {
            return this.parent(e).not("body").each(function() {
                E(this).replaceWith(this.childNodes)
            }),
            this
        }
    }),
    E.expr.pseudos.hidden = function(e) {
        return !E.expr.pseudos.visible(e)
    }
    ,
    E.expr.pseudos.visible = function(e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
    }
    ,
    p.createHTMLDocument = ((dt = i.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>",
    2 === dt.childNodes.length),
    E.parseHTML = function(e, t, n) {
        return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t,
        t = !1),
        t || (p.createHTMLDocument ? ((r = (t = i.implementation.createHTMLDocument("")).createElement("base")).href = i.location.href,
        t.head.appendChild(r)) : t = i),
        s = !n && [],
        (o = N.exec(e)) ? [t.createElement(o[1])] : (o = be([e], t, s),
        s && s.length && E(s).remove(),
        E.merge([], o.childNodes)));
        var r, o, s
    }
    ,
    E.offset = {
        setOffset: function(e, t, n) {
            var i, r, o, s, a, l, c = E.css(e, "position"), u = E(e), f = {};
            "static" === c && (e.style.position = "relative"),
            a = u.offset(),
            o = E.css(e, "top"),
            l = E.css(e, "left"),
            ("absolute" === c || "fixed" === c) && -1 < (o + l).indexOf("auto") ? (s = (i = u.position()).top,
            r = i.left) : (s = parseFloat(o) || 0,
            r = parseFloat(l) || 0),
            g(t) && (t = t.call(e, n, E.extend({}, a))),
            null != t.top && (f.top = t.top - a.top + s),
            null != t.left && (f.left = t.left - a.left + r),
            "using"in t ? t.using.call(e, f) : u.css(f)
        }
    },
    E.fn.extend({
        offset: function(e) {
            if (arguments.length)
                return void 0 === e ? this : this.each(function(t) {
                    E.offset.setOffset(this, e, t)
                });
            var t, n, i = this[0];
            return i ? i.getClientRects().length ? (t = i.getBoundingClientRect(),
            n = i.ownerDocument.defaultView,
            {
                top: t.top + n.pageYOffset,
                left: t.left + n.pageXOffset
            }) : {
                top: 0,
                left: 0
            } : void 0
        },
        position: function() {
            if (this[0]) {
                var e, t, n, i = this[0], r = {
                    top: 0,
                    left: 0
                };
                if ("fixed" === E.css(i, "position"))
                    t = i.getBoundingClientRect();
                else {
                    for (t = this.offset(),
                    n = i.ownerDocument,
                    e = i.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === E.css(e, "position"); )
                        e = e.parentNode;
                    e && e !== i && 1 === e.nodeType && ((r = E(e).offset()).top += E.css(e, "borderTopWidth", !0),
                    r.left += E.css(e, "borderLeftWidth", !0))
                }
                return {
                    top: t.top - r.top - E.css(i, "marginTop", !0),
                    left: t.left - r.left - E.css(i, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent; e && "static" === E.css(e, "position"); )
                    e = e.offsetParent;
                return e || re
            })
        }
    }),
    E.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(e, t) {
        var n = "pageYOffset" === t;
        E.fn[e] = function(i) {
            return U(this, function(e, i, r) {
                var o;
                if (m(e) ? o = e : 9 === e.nodeType && (o = e.defaultView),
                void 0 === r)
                    return o ? o[t] : e[i];
                o ? o.scrollTo(n ? o.pageXOffset : r, n ? r : o.pageYOffset) : e[i] = r
            }, e, i, arguments.length)
        }
    }),
    E.each(["top", "left"], function(e, t) {
        E.cssHooks[t] = Ue(p.pixelPosition, function(e, n) {
            if (n)
                return n = Be(e, t),
                qe.test(n) ? E(e).position()[t] + "px" : n
        })
    }),
    E.each({
        Height: "height",
        Width: "width"
    }, function(e, t) {
        E.each({
            padding: "inner" + e,
            content: t,
            "": "outer" + e
        }, function(n, i) {
            E.fn[i] = function(r, o) {
                var s = arguments.length && (n || "boolean" != typeof r)
                  , a = n || (!0 === r || !0 === o ? "margin" : "border");
                return U(this, function(t, n, r) {
                    var o;
                    return m(t) ? 0 === i.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement,
                    Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === r ? E.css(t, n, a) : E.style(t, n, r, a)
                }, t, s ? r : void 0, s)
            }
        })
    }),
    E.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, t) {
        E.fn[t] = function(e, n) {
            return 0 < arguments.length ? this.on(t, null, e, n) : this.trigger(t)
        }
    }),
    E.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }),
    E.fn.extend({
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, i) {
            return this.on(t, e, n, i)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    }),
    E.proxy = function(e, t) {
        var n, i, r;
        if ("string" == typeof t && (n = e[t],
        t = e,
        e = n),
        g(e))
            return i = o.call(arguments, 2),
            (r = function() {
                return e.apply(t || this, i.concat(o.call(arguments)))
            }
            ).guid = e.guid = e.guid || E.guid++,
            r
    }
    ,
    E.holdReady = function(e) {
        e ? E.readyWait++ : E.ready(!0)
    }
    ,
    E.isArray = Array.isArray,
    E.parseJSON = JSON.parse,
    E.nodeName = A,
    E.isFunction = g,
    E.isWindow = m,
    E.camelCase = $,
    E.type = _,
    E.now = Date.now,
    E.isNumeric = function(e) {
        var t = E.type(e);
        return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
    }
    ,
    "function" == typeof define && define.amd && define("jquery", [], function() {
        return E
    });
    var _t = e.jQuery
      , bt = e.$;
    return E.noConflict = function(t) {
        return e.$ === E && (e.$ = bt),
        t && e.jQuery === E && (e.jQuery = _t),
        E
    }
    ,
    t || (e.jQuery = e.$ = E),
    E
});
var BrowserClass = {
    init: function() {
        this.classes = [],
        this.agent = navigator.userAgent.toLowerCase(),
        this.checkBrowser(),
        this.checkPlatform(),
        this.isMobile(this.classes) ? this.classes.push("mobile") : this.classes.push("desktop")
    },
    checkBrowser: function() {
        var e = Array()
          , t = ""
          , n = ""
          , i = ""
          , r = this.agent.match(/(?:\b(ms)?ie\s+|\btrident\/7\.0;.*\s+rv:)(\d+)/);
        r && (this.classes.push("ie"),
        void 0 !== r[2] && this.classes.push("ie" + r[2])),
        this.agent.match(/opera/) && (this.classes.push("opera"),
        (t = this.stristr(this.agent, "version").split("/"))[1] && (n = t[1].split(" "),
        this.classes.push("opera" + this.clearVersion(n[0])))),
        this.agent.match(/chrome/) ? (this.classes.push("chrome"),
        n = (t = this.stristr(this.agent, "chrome").split("/"))[1].split(" "),
        this.classes.push("chrome" + this.clearVersion(n[0]))) : this.agent.match(/crios/) ? (this.classes.push("chrome"),
        (t = this.stristr(this.agent, "crios").split("/"))[1] && (n = t[1].split(" "),
        this.classes.push("chrome" + this.clearVersion(n[0])))) : this.agent.match(/safari/) && (this.classes.push("safari"),
        (t = this.stristr(this.agent, "version").split("/"))[1] && (n = t[1].split(" "),
        this.classes.push("safari" + this.clearVersion(n[0])))),
        this.agent.match(/netscape/) && (this.classes.push("netscape"),
        (e = this.agent.match(/navigator\/([^ ]*)/)) ? this.classes.push("netscape" + this.clearVersion(e[1])) : (e = this.agent.match(/netscape6?\/([^ ]*)/)) && this.classes.push("netscape" + this.clearVersion(e[1]))),
        this.agent.match(/firefox/) && (this.classes.push("ff"),
        (e = this.agent.match(/firefox[\/ \(]([^ ;\)]+)/)) && this.classes.push("ff" + this.clearVersion(e[1]))),
        this.agent.match(/konqueror/) && (this.classes.push("konqueror"),
        n = (t = this.stristr(this.agent, "konqueror").split(" "))[0].split("/"),
        this.classes.push("konqueror" + this.clearVersion(n[1]))),
        this.agent.match(/dillo/) && this.classes.push("dillo"),
        this.agent.match(/chimera/) && this.classes.push("chimera"),
        this.agent.match(/beonex/) && this.classes.push("beonex"),
        this.agent.match(/aweb/) && this.classes.push("aweb"),
        this.agent.match(/amaya/) && this.classes.push("amaya"),
        this.agent.match(/icab/) && this.classes.push("icab"),
        this.agent.match(/lynx/) && this.classes.push("lynx"),
        this.agent.match(/galeon/) && this.classes.push("galeon"),
        this.agent.match(/opera mini/) && (this.classes.push("operamini"),
        (i = this.stristr(this.agent, "opera mini")).match("///") ? (n = (t = i.split("/"))[1].split(" "),
        this.classes.push("operamini" + this.clearVersion(n[0]))) : (n = this.stristr(i, "opera mini").split(" "),
        this.classes.push("operamini" + this.clearVersion(n[1]))))
    },
    checkPlatform: function() {
        this.agent.match(/windows/) && this.classes.push("win"),
        this.agent.match(/ipad/) && this.classes.push("ipad"),
        this.agent.match(/ipod/) && this.classes.push("ipod"),
        this.agent.match(/iphone/) && this.classes.push("iphone"),
        this.agent.match(/mac/) && this.classes.push("mac"),
        this.agent.match(/android/) && this.classes.push("android"),
        this.agent.match(/linux/) && this.classes.push("linux"),
        this.agent.match(/nokia/) && this.classes.push("nokia"),
        this.agent.match(/blackberry/) && this.classes.push("blackberry"),
        this.agent.match(/freebsd/) && this.classes.push("freebsd"),
        this.agent.match(/openbsd/) && this.classes.push("openbsd"),
        this.agent.match(/netbsd/) && this.classes.push("netbsd")
    },
    isMobile: function(e) {
        var t = !1;
        if ($.each(["ipad", "ipod", "iphone", "android", "blackberry", "operamini"], function(n, i) {
            if (-1 != $.inArray(i, e))
                return t = !0,
                !1
        }),
        t || this.agent.match(/(up.browser|up.link|mmp|symbian|smartphone|midp|wap|vodafone|o2|pocket|kindle|mobile|pda|psp|treo)/))
            return !0
    },
    clearVersion: function(e) {
        var t = ((e = e.replace("/[^0-9,.,a-z,A-Z-]/", "")) + "").indexOf(".");
        return e.substr(0, t)
    },
    stristr: function(e, t, n) {
        var i;
        return -1 != (i = (e += "").toLowerCase().indexOf((t + "").toLowerCase())) && (n ? e.substr(0, i) : e.slice(i))
    }
};
BrowserClass.init(),
$("body").addClass(BrowserClass.classes.join(" ")),
function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? t(exports, require("jquery")) : "function" == typeof define && define.amd ? define(["exports", "jquery"], t) : t((e = e || self).bootstrap = {}, e.jQuery)
}(this, function(e, t) {
    "use strict";
    function n(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1,
            i.configurable = !0,
            "value"in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i)
        }
    }
    function i(e, t, i) {
        return t && n(e.prototype, t),
        i && n(e, i),
        e
    }
    function r(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(e);
            t && (i = i.filter(function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, i)
        }
        return n
    }
    function o(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? r(Object(n), !0).forEach(function(t) {
                var i, r, o;
                i = e,
                o = n[r = t],
                r in i ? Object.defineProperty(i, r, {
                    value: o,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : i[r] = o
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : r(Object(n)).forEach(function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            })
        }
        return e
    }
    t = t && t.hasOwnProperty("default") ? t.default : t;
    var s = "transitionend";
    var a = {
        TRANSITION_END: "bsTransitionEnd",
        getUID: function(e) {
            for (; e += ~~(1e6 * Math.random()),
            document.getElementById(e); )
                ;
            return e
        },
        getSelectorFromElement: function(e) {
            var t = e.getAttribute("data-target");
            if (!t || "#" === t) {
                var n = e.getAttribute("href");
                t = n && "#" !== n ? n.trim() : ""
            }
            try {
                return document.querySelector(t) ? t : null
            } catch (e) {
                return null
            }
        },
        getTransitionDurationFromElement: function(e) {
            if (!e)
                return 0;
            var n = t(e).css("transition-duration")
              , i = t(e).css("transition-delay")
              , r = parseFloat(n)
              , o = parseFloat(i);
            return r || o ? (n = n.split(",")[0],
            i = i.split(",")[0],
            1e3 * (parseFloat(n) + parseFloat(i))) : 0
        },
        reflow: function(e) {
            return e.offsetHeight
        },
        triggerTransitionEnd: function(e) {
            t(e).trigger(s)
        },
        supportsTransitionEnd: function() {
            return Boolean(s)
        },
        isElement: function(e) {
            return (e[0] || e).nodeType
        },
        typeCheckConfig: function(e, t, n) {
            for (var i in n)
                if (Object.prototype.hasOwnProperty.call(n, i)) {
                    var r = n[i]
                      , o = t[i]
                      , s = o && a.isElement(o) ? "element" : (l = o,
                    {}.toString.call(l).match(/\s([a-z]+)/i)[1].toLowerCase());
                    if (!new RegExp(r).test(s))
                        throw new Error(e.toUpperCase() + ': Option "' + i + '" provided type "' + s + '" but expected type "' + r + '".')
                }
            var l
        },
        findShadowRoot: function(e) {
            if (!document.documentElement.attachShadow)
                return null;
            if ("function" != typeof e.getRootNode)
                return e instanceof ShadowRoot ? e : e.parentNode ? a.findShadowRoot(e.parentNode) : null;
            var t = e.getRootNode();
            return t instanceof ShadowRoot ? t : null
        },
        jQueryDetection: function() {
            if (void 0 === t)
                throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
            var e = t.fn.jquery.split(" ")[0].split(".");
            if (e[0] < 2 && e[1] < 9 || 1 === e[0] && 9 === e[1] && e[2] < 1 || 4 <= e[0])
                throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")
        }
    };
    a.jQueryDetection(),
    t.fn.emulateTransitionEnd = function(e) {
        var n = this
          , i = !1;
        return t(this).one(a.TRANSITION_END, function() {
            i = !0
        }),
        setTimeout(function() {
            i || a.triggerTransitionEnd(n)
        }, e),
        this
    }
    ,
    t.event.special[a.TRANSITION_END] = {
        bindType: s,
        delegateType: s,
        handle: function(e) {
            if (t(e.target).is(this))
                return e.handleObj.handler.apply(this, arguments)
        }
    };
    var l = "alert"
      , c = "bs.alert"
      , u = "." + c
      , f = t.fn[l]
      , h = {
        CLOSE: "close" + u,
        CLOSED: "closed" + u,
        CLICK_DATA_API: "click" + u + ".data-api"
    }
      , d = function() {
        function e(e) {
            this._element = e
        }
        var n = e.prototype;
        return n.close = function(e) {
            var t = this._element;
            e && (t = this._getRootElement(e)),
            this._triggerCloseEvent(t).isDefaultPrevented() || this._removeElement(t)
        }
        ,
        n.dispose = function() {
            t.removeData(this._element, c),
            this._element = null
        }
        ,
        n._getRootElement = function(e) {
            var n = a.getSelectorFromElement(e)
              , i = !1;
            return n && (i = document.querySelector(n)),
            i || t(e).closest(".alert")[0]
        }
        ,
        n._triggerCloseEvent = function(e) {
            var n = t.Event(h.CLOSE);
            return t(e).trigger(n),
            n
        }
        ,
        n._removeElement = function(e) {
            var n = this;
            if (t(e).removeClass("show"),
            t(e).hasClass("fade")) {
                var i = a.getTransitionDurationFromElement(e);
                t(e).one(a.TRANSITION_END, function(t) {
                    return n._destroyElement(e, t)
                }).emulateTransitionEnd(i)
            } else
                this._destroyElement(e)
        }
        ,
        n._destroyElement = function(e) {
            t(e).detach().trigger(h.CLOSED).remove()
        }
        ,
        e._jQueryInterface = function(n) {
            return this.each(function() {
                var i = t(this)
                  , r = i.data(c);
                r || (r = new e(this),
                i.data(c, r)),
                "close" === n && r[n](this)
            })
        }
        ,
        e._handleDismiss = function(e) {
            return function(t) {
                t && t.preventDefault(),
                e.close(this)
            }
        }
        ,
        i(e, null, [{
            key: "VERSION",
            get: function() {
                return "4.4.1"
            }
        }]),
        e
    }();
    t(document).on(h.CLICK_DATA_API, '[data-dismiss="alert"]', d._handleDismiss(new d)),
    t.fn[l] = d._jQueryInterface,
    t.fn[l].Constructor = d,
    t.fn[l].noConflict = function() {
        return t.fn[l] = f,
        d._jQueryInterface
    }
    ;
    var p = "button"
      , g = "bs.button"
      , m = "." + g
      , v = ".data-api"
      , y = t.fn[p]
      , _ = "active"
      , b = '[data-toggle^="button"]'
      , E = 'input:not([type="hidden"])'
      , w = ".btn"
      , C = {
        CLICK_DATA_API: "click" + m + v,
        FOCUS_BLUR_DATA_API: "focus" + m + v + " blur" + m + v,
        LOAD_DATA_API: "load" + m + v
    }
      , T = function() {
        function e(e) {
            this._element = e
        }
        var n = e.prototype;
        return n.toggle = function() {
            var e = !0
              , n = !0
              , i = t(this._element).closest('[data-toggle="buttons"]')[0];
            if (i) {
                var r = this._element.querySelector(E);
                if (r) {
                    if ("radio" === r.type)
                        if (r.checked && this._element.classList.contains(_))
                            e = !1;
                        else {
                            var o = i.querySelector(".active");
                            o && t(o).removeClass(_)
                        }
                    else
                        "checkbox" === r.type ? "LABEL" === this._element.tagName && r.checked === this._element.classList.contains(_) && (e = !1) : e = !1;
                    e && (r.checked = !this._element.classList.contains(_),
                    t(r).trigger("change")),
                    r.focus(),
                    n = !1
                }
            }
            this._element.hasAttribute("disabled") || this._element.classList.contains("disabled") || (n && this._element.setAttribute("aria-pressed", !this._element.classList.contains(_)),
            e && t(this._element).toggleClass(_))
        }
        ,
        n.dispose = function() {
            t.removeData(this._element, g),
            this._element = null
        }
        ,
        e._jQueryInterface = function(n) {
            return this.each(function() {
                var i = t(this).data(g);
                i || (i = new e(this),
                t(this).data(g, i)),
                "toggle" === n && i[n]()
            })
        }
        ,
        i(e, null, [{
            key: "VERSION",
            get: function() {
                return "4.4.1"
            }
        }]),
        e
    }();
    t(document).on(C.CLICK_DATA_API, b, function(e) {
        var n = e.target;
        if (t(n).hasClass("btn") || (n = t(n).closest(w)[0]),
        !n || n.hasAttribute("disabled") || n.classList.contains("disabled"))
            e.preventDefault();
        else {
            var i = n.querySelector(E);
            if (i && (i.hasAttribute("disabled") || i.classList.contains("disabled")))
                return void e.preventDefault();
            T._jQueryInterface.call(t(n), "toggle")
        }
    }).on(C.FOCUS_BLUR_DATA_API, b, function(e) {
        var n = t(e.target).closest(w)[0];
        t(n).toggleClass("focus", /^focus(in)?$/.test(e.type))
    }),
    t(window).on(C.LOAD_DATA_API, function() {
        for (var e = [].slice.call(document.querySelectorAll('[data-toggle="buttons"] .btn')), t = 0, n = e.length; t < n; t++) {
            var i = e[t]
              , r = i.querySelector(E);
            r.checked || r.hasAttribute("checked") ? i.classList.add(_) : i.classList.remove(_)
        }
        for (var o = 0, s = (e = [].slice.call(document.querySelectorAll('[data-toggle="button"]'))).length; o < s; o++) {
            var a = e[o];
            "true" === a.getAttribute("aria-pressed") ? a.classList.add(_) : a.classList.remove(_)
        }
    }),
    t.fn[p] = T._jQueryInterface,
    t.fn[p].Constructor = T,
    t.fn[p].noConflict = function() {
        return t.fn[p] = y,
        T._jQueryInterface
    }
    ;
    var x = "carousel"
      , S = "bs.carousel"
      , D = "." + S
      , A = ".data-api"
      , N = t.fn[x]
      , I = {
        interval: 5e3,
        keyboard: !0,
        slide: !1,
        pause: "hover",
        wrap: !0,
        touch: !0
    }
      , k = {
        interval: "(number|boolean)",
        keyboard: "boolean",
        slide: "(boolean|string)",
        pause: "(string|boolean)",
        wrap: "boolean",
        touch: "boolean"
    }
      , O = "next"
      , L = "prev"
      , P = {
        SLIDE: "slide" + D,
        SLID: "slid" + D,
        KEYDOWN: "keydown" + D,
        MOUSEENTER: "mouseenter" + D,
        MOUSELEAVE: "mouseleave" + D,
        TOUCHSTART: "touchstart" + D,
        TOUCHMOVE: "touchmove" + D,
        TOUCHEND: "touchend" + D,
        POINTERDOWN: "pointerdown" + D,
        POINTERUP: "pointerup" + D,
        DRAG_START: "dragstart" + D,
        LOAD_DATA_API: "load" + D + A,
        CLICK_DATA_API: "click" + D + A
    }
      , j = "active"
      , H = ".active.carousel-item"
      , R = ".carousel-indicators"
      , M = {
        TOUCH: "touch",
        PEN: "pen"
    }
      , q = function() {
        function e(e, t) {
            this._items = null,
            this._interval = null,
            this._activeElement = null,
            this._isPaused = !1,
            this._isSliding = !1,
            this.touchTimeout = null,
            this.touchStartX = 0,
            this.touchDeltaX = 0,
            this._config = this._getConfig(t),
            this._element = e,
            this._indicatorsElement = this._element.querySelector(R),
            this._touchSupported = "ontouchstart"in document.documentElement || 0 < navigator.maxTouchPoints,
            this._pointerEvent = Boolean(window.PointerEvent || window.MSPointerEvent),
            this._addEventListeners()
        }
        var n = e.prototype;
        return n.next = function() {
            this._isSliding || this._slide(O)
        }
        ,
        n.nextWhenVisible = function() {
            !document.hidden && t(this._element).is(":visible") && "hidden" !== t(this._element).css("visibility") && this.next()
        }
        ,
        n.prev = function() {
            this._isSliding || this._slide(L)
        }
        ,
        n.pause = function(e) {
            e || (this._isPaused = !0),
            this._element.querySelector(".carousel-item-next, .carousel-item-prev") && (a.triggerTransitionEnd(this._element),
            this.cycle(!0)),
            clearInterval(this._interval),
            this._interval = null
        }
        ,
        n.cycle = function(e) {
            e || (this._isPaused = !1),
            this._interval && (clearInterval(this._interval),
            this._interval = null),
            this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval))
        }
        ,
        n.to = function(e) {
            var n = this;
            this._activeElement = this._element.querySelector(H);
            var i = this._getItemIndex(this._activeElement);
            if (!(e > this._items.length - 1 || e < 0))
                if (this._isSliding)
                    t(this._element).one(P.SLID, function() {
                        return n.to(e)
                    });
                else {
                    if (i === e)
                        return this.pause(),
                        void this.cycle();
                    var r = i < e ? O : L;
                    this._slide(r, this._items[e])
                }
        }
        ,
        n.dispose = function() {
            t(this._element).off(D),
            t.removeData(this._element, S),
            this._items = null,
            this._config = null,
            this._element = null,
            this._interval = null,
            this._isPaused = null,
            this._isSliding = null,
            this._activeElement = null,
            this._indicatorsElement = null
        }
        ,
        n._getConfig = function(e) {
            return e = o({}, I, {}, e),
            a.typeCheckConfig(x, e, k),
            e
        }
        ,
        n._handleSwipe = function() {
            var e = Math.abs(this.touchDeltaX);
            if (!(e <= 40)) {
                var t = e / this.touchDeltaX;
                (this.touchDeltaX = 0) < t && this.prev(),
                t < 0 && this.next()
            }
        }
        ,
        n._addEventListeners = function() {
            var e = this;
            this._config.keyboard && t(this._element).on(P.KEYDOWN, function(t) {
                return e._keydown(t)
            }),
            "hover" === this._config.pause && t(this._element).on(P.MOUSEENTER, function(t) {
                return e.pause(t)
            }).on(P.MOUSELEAVE, function(t) {
                return e.cycle(t)
            }),
            this._config.touch && this._addTouchEventListeners()
        }
        ,
        n._addTouchEventListeners = function() {
            var e = this;
            if (this._touchSupported) {
                var n = function(t) {
                    e._pointerEvent && M[t.originalEvent.pointerType.toUpperCase()] ? e.touchStartX = t.originalEvent.clientX : e._pointerEvent || (e.touchStartX = t.originalEvent.touches[0].clientX)
                }
                  , i = function(t) {
                    e._pointerEvent && M[t.originalEvent.pointerType.toUpperCase()] && (e.touchDeltaX = t.originalEvent.clientX - e.touchStartX),
                    e._handleSwipe(),
                    "hover" === e._config.pause && (e.pause(),
                    e.touchTimeout && clearTimeout(e.touchTimeout),
                    e.touchTimeout = setTimeout(function(t) {
                        return e.cycle(t)
                    }, 500 + e._config.interval))
                };
                t(this._element.querySelectorAll(".carousel-item img")).on(P.DRAG_START, function(e) {
                    return e.preventDefault()
                }),
                this._pointerEvent ? (t(this._element).on(P.POINTERDOWN, function(e) {
                    return n(e)
                }),
                t(this._element).on(P.POINTERUP, function(e) {
                    return i(e)
                }),
                this._element.classList.add("pointer-event")) : (t(this._element).on(P.TOUCHSTART, function(e) {
                    return n(e)
                }),
                t(this._element).on(P.TOUCHMOVE, function(t) {
                    return function(t) {
                        t.originalEvent.touches && 1 < t.originalEvent.touches.length ? e.touchDeltaX = 0 : e.touchDeltaX = t.originalEvent.touches[0].clientX - e.touchStartX
                    }(t)
                }),
                t(this._element).on(P.TOUCHEND, function(e) {
                    return i(e)
                }))
            }
        }
        ,
        n._keydown = function(e) {
            if (!/input|textarea/i.test(e.target.tagName))
                switch (e.which) {
                case 37:
                    e.preventDefault(),
                    this.prev();
                    break;
                case 39:
                    e.preventDefault(),
                    this.next()
                }
        }
        ,
        n._getItemIndex = function(e) {
            return this._items = e && e.parentNode ? [].slice.call(e.parentNode.querySelectorAll(".carousel-item")) : [],
            this._items.indexOf(e)
        }
        ,
        n._getItemByDirection = function(e, t) {
            var n = e === O
              , i = e === L
              , r = this._getItemIndex(t)
              , o = this._items.length - 1;
            if ((i && 0 === r || n && r === o) && !this._config.wrap)
                return t;
            var s = (r + (e === L ? -1 : 1)) % this._items.length;
            return -1 == s ? this._items[this._items.length - 1] : this._items[s]
        }
        ,
        n._triggerSlideEvent = function(e, n) {
            var i = this._getItemIndex(e)
              , r = this._getItemIndex(this._element.querySelector(H))
              , o = t.Event(P.SLIDE, {
                relatedTarget: e,
                direction: n,
                from: r,
                to: i
            });
            return t(this._element).trigger(o),
            o
        }
        ,
        n._setActiveIndicatorElement = function(e) {
            if (this._indicatorsElement) {
                var n = [].slice.call(this._indicatorsElement.querySelectorAll(".active"));
                t(n).removeClass(j);
                var i = this._indicatorsElement.children[this._getItemIndex(e)];
                i && t(i).addClass(j)
            }
        }
        ,
        n._slide = function(e, n) {
            var i, r, o, s = this, l = this._element.querySelector(H), c = this._getItemIndex(l), u = n || l && this._getItemByDirection(e, l), f = this._getItemIndex(u), h = Boolean(this._interval);
            if (o = e === O ? (i = "carousel-item-left",
            r = "carousel-item-next",
            "left") : (i = "carousel-item-right",
            r = "carousel-item-prev",
            "right"),
            u && t(u).hasClass(j))
                this._isSliding = !1;
            else if (!this._triggerSlideEvent(u, o).isDefaultPrevented() && l && u) {
                this._isSliding = !0,
                h && this.pause(),
                this._setActiveIndicatorElement(u);
                var d = t.Event(P.SLID, {
                    relatedTarget: u,
                    direction: o,
                    from: c,
                    to: f
                });
                if (t(this._element).hasClass("slide")) {
                    t(u).addClass(r),
                    a.reflow(u),
                    t(l).addClass(i),
                    t(u).addClass(i);
                    var p = parseInt(u.getAttribute("data-interval"), 10);
                    p ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval,
                    this._config.interval = p) : this._config.interval = this._config.defaultInterval || this._config.interval;
                    var g = a.getTransitionDurationFromElement(l);
                    t(l).one(a.TRANSITION_END, function() {
                        t(u).removeClass(i + " " + r).addClass(j),
                        t(l).removeClass(j + " " + r + " " + i),
                        s._isSliding = !1,
                        setTimeout(function() {
                            return t(s._element).trigger(d)
                        }, 0)
                    }).emulateTransitionEnd(g)
                } else
                    t(l).removeClass(j),
                    t(u).addClass(j),
                    this._isSliding = !1,
                    t(this._element).trigger(d);
                h && this.cycle()
            }
        }
        ,
        e._jQueryInterface = function(n) {
            return this.each(function() {
                var i = t(this).data(S)
                  , r = o({}, I, {}, t(this).data());
                "object" == typeof n && (r = o({}, r, {}, n));
                var s = "string" == typeof n ? n : r.slide;
                if (i || (i = new e(this,r),
                t(this).data(S, i)),
                "number" == typeof n)
                    i.to(n);
                else if ("string" == typeof s) {
                    if (void 0 === i[s])
                        throw new TypeError('No method named "' + s + '"');
                    i[s]()
                } else
                    r.interval && r.ride && (i.pause(),
                    i.cycle())
            })
        }
        ,
        e._dataApiClickHandler = function(n) {
            var i = a.getSelectorFromElement(this);
            if (i) {
                var r = t(i)[0];
                if (r && t(r).hasClass("carousel")) {
                    var s = o({}, t(r).data(), {}, t(this).data())
                      , l = this.getAttribute("data-slide-to");
                    l && (s.interval = !1),
                    e._jQueryInterface.call(t(r), s),
                    l && t(r).data(S).to(l),
                    n.preventDefault()
                }
            }
        }
        ,
        i(e, null, [{
            key: "VERSION",
            get: function() {
                return "4.4.1"
            }
        }, {
            key: "Default",
            get: function() {
                return I
            }
        }]),
        e
    }();
    t(document).on(P.CLICK_DATA_API, "[data-slide], [data-slide-to]", q._dataApiClickHandler),
    t(window).on(P.LOAD_DATA_API, function() {
        for (var e = [].slice.call(document.querySelectorAll('[data-ride="carousel"]')), n = 0, i = e.length; n < i; n++) {
            var r = t(e[n]);
            q._jQueryInterface.call(r, r.data())
        }
    }),
    t.fn[x] = q._jQueryInterface,
    t.fn[x].Constructor = q,
    t.fn[x].noConflict = function() {
        return t.fn[x] = N,
        q._jQueryInterface
    }
    ;
    var F = "collapse"
      , W = "bs.collapse"
      , B = "." + W
      , U = t.fn[F]
      , V = {
        toggle: !0,
        parent: ""
    }
      , Q = {
        toggle: "boolean",
        parent: "(string|element)"
    }
      , K = {
        SHOW: "show" + B,
        SHOWN: "shown" + B,
        HIDE: "hide" + B,
        HIDDEN: "hidden" + B,
        CLICK_DATA_API: "click" + B + ".data-api"
    }
      , $ = "show"
      , z = "collapse"
      , Y = "collapsing"
      , X = "collapsed"
      , G = '[data-toggle="collapse"]'
      , J = function() {
        function e(e, t) {
            this._isTransitioning = !1,
            this._element = e,
            this._config = this._getConfig(t),
            this._triggerArray = [].slice.call(document.querySelectorAll('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'));
            for (var n = [].slice.call(document.querySelectorAll(G)), i = 0, r = n.length; i < r; i++) {
                var o = n[i]
                  , s = a.getSelectorFromElement(o)
                  , l = [].slice.call(document.querySelectorAll(s)).filter(function(t) {
                    return t === e
                });
                null !== s && 0 < l.length && (this._selector = s,
                this._triggerArray.push(o))
            }
            this._parent = this._config.parent ? this._getParent() : null,
            this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray),
            this._config.toggle && this.toggle()
        }
        var n = e.prototype;
        return n.toggle = function() {
            t(this._element).hasClass($) ? this.hide() : this.show()
        }
        ,
        n.show = function() {
            var n, i, r = this;
            if (!(this._isTransitioning || t(this._element).hasClass($) || (this._parent && 0 === (n = [].slice.call(this._parent.querySelectorAll(".show, .collapsing")).filter(function(e) {
                return "string" == typeof r._config.parent ? e.getAttribute("data-parent") === r._config.parent : e.classList.contains(z)
            })).length && (n = null),
            n && (i = t(n).not(this._selector).data(W)) && i._isTransitioning))) {
                var o = t.Event(K.SHOW);
                if (t(this._element).trigger(o),
                !o.isDefaultPrevented()) {
                    n && (e._jQueryInterface.call(t(n).not(this._selector), "hide"),
                    i || t(n).data(W, null));
                    var s = this._getDimension();
                    t(this._element).removeClass(z).addClass(Y),
                    this._element.style[s] = 0,
                    this._triggerArray.length && t(this._triggerArray).removeClass(X).attr("aria-expanded", !0),
                    this.setTransitioning(!0);
                    var l = "scroll" + (s[0].toUpperCase() + s.slice(1))
                      , c = a.getTransitionDurationFromElement(this._element);
                    t(this._element).one(a.TRANSITION_END, function() {
                        t(r._element).removeClass(Y).addClass(z).addClass($),
                        r._element.style[s] = "",
                        r.setTransitioning(!1),
                        t(r._element).trigger(K.SHOWN)
                    }).emulateTransitionEnd(c),
                    this._element.style[s] = this._element[l] + "px"
                }
            }
        }
        ,
        n.hide = function() {
            var e = this;
            if (!this._isTransitioning && t(this._element).hasClass($)) {
                var n = t.Event(K.HIDE);
                if (t(this._element).trigger(n),
                !n.isDefaultPrevented()) {
                    var i = this._getDimension();
                    this._element.style[i] = this._element.getBoundingClientRect()[i] + "px",
                    a.reflow(this._element),
                    t(this._element).addClass(Y).removeClass(z).removeClass($);
                    var r = this._triggerArray.length;
                    if (0 < r)
                        for (var o = 0; o < r; o++) {
                            var s = this._triggerArray[o]
                              , l = a.getSelectorFromElement(s);
                            null !== l && (t([].slice.call(document.querySelectorAll(l))).hasClass($) || t(s).addClass(X).attr("aria-expanded", !1))
                        }
                    this.setTransitioning(!0),
                    this._element.style[i] = "";
                    var c = a.getTransitionDurationFromElement(this._element);
                    t(this._element).one(a.TRANSITION_END, function() {
                        e.setTransitioning(!1),
                        t(e._element).removeClass(Y).addClass(z).trigger(K.HIDDEN)
                    }).emulateTransitionEnd(c)
                }
            }
        }
        ,
        n.setTransitioning = function(e) {
            this._isTransitioning = e
        }
        ,
        n.dispose = function() {
            t.removeData(this._element, W),
            this._config = null,
            this._parent = null,
            this._element = null,
            this._triggerArray = null,
            this._isTransitioning = null
        }
        ,
        n._getConfig = function(e) {
            return (e = o({}, V, {}, e)).toggle = Boolean(e.toggle),
            a.typeCheckConfig(F, e, Q),
            e
        }
        ,
        n._getDimension = function() {
            return t(this._element).hasClass("width") ? "width" : "height"
        }
        ,
        n._getParent = function() {
            var n, i = this;
            a.isElement(this._config.parent) ? (n = this._config.parent,
            void 0 !== this._config.parent.jquery && (n = this._config.parent[0])) : n = document.querySelector(this._config.parent);
            var r = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]'
              , o = [].slice.call(n.querySelectorAll(r));
            return t(o).each(function(t, n) {
                i._addAriaAndCollapsedClass(e._getTargetFromElement(n), [n])
            }),
            n
        }
        ,
        n._addAriaAndCollapsedClass = function(e, n) {
            var i = t(e).hasClass($);
            n.length && t(n).toggleClass(X, !i).attr("aria-expanded", i)
        }
        ,
        e._getTargetFromElement = function(e) {
            var t = a.getSelectorFromElement(e);
            return t ? document.querySelector(t) : null
        }
        ,
        e._jQueryInterface = function(n) {
            return this.each(function() {
                var i = t(this)
                  , r = i.data(W)
                  , s = o({}, V, {}, i.data(), {}, "object" == typeof n && n ? n : {});
                if (!r && s.toggle && /show|hide/.test(n) && (s.toggle = !1),
                r || (r = new e(this,s),
                i.data(W, r)),
                "string" == typeof n) {
                    if (void 0 === r[n])
                        throw new TypeError('No method named "' + n + '"');
                    r[n]()
                }
            })
        }
        ,
        i(e, null, [{
            key: "VERSION",
            get: function() {
                return "4.4.1"
            }
        }, {
            key: "Default",
            get: function() {
                return V
            }
        }]),
        e
    }();
    t(document).on(K.CLICK_DATA_API, G, function(e) {
        "A" === e.currentTarget.tagName && e.preventDefault();
        var n = t(this)
          , i = a.getSelectorFromElement(this)
          , r = [].slice.call(document.querySelectorAll(i));
        t(r).each(function() {
            var e = t(this)
              , i = e.data(W) ? "toggle" : n.data();
            J._jQueryInterface.call(e, i)
        })
    }),
    t.fn[F] = J._jQueryInterface,
    t.fn[F].Constructor = J,
    t.fn[F].noConflict = function() {
        return t.fn[F] = U,
        J._jQueryInterface
    }
    ;
    var Z = "undefined" != typeof window && "undefined" != typeof document && "undefined" != typeof navigator
      , ee = function() {
        for (var e = ["Edge", "Trident", "Firefox"], t = 0; t < e.length; t += 1)
            if (Z && 0 <= navigator.userAgent.indexOf(e[t]))
                return 1;
        return 0
    }()
      , te = Z && window.Promise ? function(e) {
        var t = !1;
        return function() {
            t || (t = !0,
            window.Promise.resolve().then(function() {
                t = !1,
                e()
            }))
        }
    }
    : function(e) {
        var t = !1;
        return function() {
            t || (t = !0,
            setTimeout(function() {
                t = !1,
                e()
            }, ee))
        }
    }
    ;
    function ne(e) {
        return e && "[object Function]" === {}.toString.call(e)
    }
    function ie(e, t) {
        if (1 !== e.nodeType)
            return [];
        var n = e.ownerDocument.defaultView.getComputedStyle(e, null);
        return t ? n[t] : n
    }
    function re(e) {
        return "HTML" === e.nodeName ? e : e.parentNode || e.host
    }
    function oe(e) {
        if (!e)
            return document.body;
        switch (e.nodeName) {
        case "HTML":
        case "BODY":
            return e.ownerDocument.body;
        case "#document":
            return e.body
        }
        var t = ie(e)
          , n = t.overflow
          , i = t.overflowX
          , r = t.overflowY;
        return /(auto|scroll|overlay)/.test(n + r + i) ? e : oe(re(e))
    }
    function se(e) {
        return e && e.referenceNode ? e.referenceNode : e
    }
    var ae = Z && !(!window.MSInputMethodContext || !document.documentMode)
      , le = Z && /MSIE 10/.test(navigator.userAgent);
    function ce(e) {
        return 11 === e ? ae : 10 === e ? le : ae || le
    }
    function ue(e) {
        if (!e)
            return document.documentElement;
        for (var t = ce(10) ? document.body : null, n = e.offsetParent || null; n === t && e.nextElementSibling; )
            n = (e = e.nextElementSibling).offsetParent;
        var i = n && n.nodeName;
        return i && "BODY" !== i && "HTML" !== i ? -1 !== ["TH", "TD", "TABLE"].indexOf(n.nodeName) && "static" === ie(n, "position") ? ue(n) : n : e ? e.ownerDocument.documentElement : document.documentElement
    }
    function fe(e) {
        return null !== e.parentNode ? fe(e.parentNode) : e
    }
    function he(e, t) {
        if (!(e && e.nodeType && t && t.nodeType))
            return document.documentElement;
        var n = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING
          , i = n ? e : t
          , r = n ? t : e
          , o = document.createRange();
        o.setStart(i, 0),
        o.setEnd(r, 0);
        var s = o.commonAncestorContainer;
        if (e !== s && t !== s || i.contains(r))
            return function(e) {
                var t = e.nodeName;
                return "BODY" !== t && ("HTML" === t || ue(e.firstElementChild) === e)
            }(s) ? s : ue(s);
        var a = fe(e);
        return a.host ? he(a.host, t) : he(e, fe(t).host)
    }
    function de(e, t) {
        var n = "top" === (1 < arguments.length && void 0 !== t ? t : "top") ? "scrollTop" : "scrollLeft"
          , i = e.nodeName;
        if ("BODY" !== i && "HTML" !== i)
            return e[n];
        var r = e.ownerDocument.documentElement;
        return (e.ownerDocument.scrollingElement || r)[n]
    }
    function pe(e, t) {
        var n = "x" === t ? "Left" : "Top"
          , i = "Left" == n ? "Right" : "Bottom";
        return parseFloat(e["border" + n + "Width"], 10) + parseFloat(e["border" + i + "Width"], 10)
    }
    function ge(e, t, n, i) {
        return Math.max(t["offset" + e], t["scroll" + e], n["client" + e], n["offset" + e], n["scroll" + e], ce(10) ? parseInt(n["offset" + e]) + parseInt(i["margin" + ("Height" === e ? "Top" : "Left")]) + parseInt(i["margin" + ("Height" === e ? "Bottom" : "Right")]) : 0)
    }
    function me(e) {
        var t = e.body
          , n = e.documentElement
          , i = ce(10) && getComputedStyle(n);
        return {
            height: ge("Height", t, n, i),
            width: ge("Width", t, n, i)
        }
    }
    function ve(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1,
            i.configurable = !0,
            "value"in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i)
        }
    }
    function ye(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n,
        e
    }
    var _e = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var i in n)
                Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
        }
        return e
    }
    ;
    function be(e) {
        return _e({}, e, {
            right: e.left + e.width,
            bottom: e.top + e.height
        })
    }
    function Ee(e) {
        var t = {};
        try {
            if (ce(10)) {
                t = e.getBoundingClientRect();
                var n = de(e, "top")
                  , i = de(e, "left");
                t.top += n,
                t.left += i,
                t.bottom += n,
                t.right += i
            } else
                t = e.getBoundingClientRect()
        } catch (e) {}
        var r = {
            left: t.left,
            top: t.top,
            width: t.right - t.left,
            height: t.bottom - t.top
        }
          , o = "HTML" === e.nodeName ? me(e.ownerDocument) : {}
          , s = o.width || e.clientWidth || r.width
          , a = o.height || e.clientHeight || r.height
          , l = e.offsetWidth - s
          , c = e.offsetHeight - a;
        if (l || c) {
            var u = ie(e);
            l -= pe(u, "x"),
            c -= pe(u, "y"),
            r.width -= l,
            r.height -= c
        }
        return be(r)
    }
    function we(e, t, n) {
        var i = 2 < arguments.length && void 0 !== n && n
          , r = ce(10)
          , o = "HTML" === t.nodeName
          , s = Ee(e)
          , a = Ee(t)
          , l = oe(e)
          , c = ie(t)
          , u = parseFloat(c.borderTopWidth, 10)
          , f = parseFloat(c.borderLeftWidth, 10);
        i && o && (a.top = Math.max(a.top, 0),
        a.left = Math.max(a.left, 0));
        var h = be({
            top: s.top - a.top - u,
            left: s.left - a.left - f,
            width: s.width,
            height: s.height
        });
        if (h.marginTop = 0,
        h.marginLeft = 0,
        !r && o) {
            var d = parseFloat(c.marginTop, 10)
              , p = parseFloat(c.marginLeft, 10);
            h.top -= u - d,
            h.bottom -= u - d,
            h.left -= f - p,
            h.right -= f - p,
            h.marginTop = d,
            h.marginLeft = p
        }
        return (r && !i ? t.contains(l) : t === l && "BODY" !== l.nodeName) && (h = function(e, t, n) {
            var i = 2 < arguments.length && !1
              , r = de(t, "top")
              , o = de(t, "left")
              , s = i ? -1 : 1;
            return e.top += r * s,
            e.bottom += r * s,
            e.left += o * s,
            e.right += o * s,
            e
        }(h, t)),
        h
    }
    function Ce(e) {
        if (!e || !e.parentElement || ce())
            return document.documentElement;
        for (var t = e.parentElement; t && "none" === ie(t, "transform"); )
            t = t.parentElement;
        return t || document.documentElement
    }
    function Te(e, t, n, i, r) {
        var o = 4 < arguments.length && void 0 !== r && r
          , s = {
            top: 0,
            left: 0
        }
          , a = o ? Ce(e) : he(e, se(t));
        if ("viewport" === i)
            s = function(e, t) {
                var n = 1 < arguments.length && void 0 !== t && t
                  , i = e.ownerDocument.documentElement
                  , r = we(e, i)
                  , o = Math.max(i.clientWidth, window.innerWidth || 0)
                  , s = Math.max(i.clientHeight, window.innerHeight || 0)
                  , a = n ? 0 : de(i)
                  , l = n ? 0 : de(i, "left");
                return be({
                    top: a - r.top + r.marginTop,
                    left: l - r.left + r.marginLeft,
                    width: o,
                    height: s
                })
            }(a, o);
        else {
            var l = void 0;
            "scrollParent" === i ? "BODY" === (l = oe(re(t))).nodeName && (l = e.ownerDocument.documentElement) : l = "window" === i ? e.ownerDocument.documentElement : i;
            var c = we(l, a, o);
            if ("HTML" !== l.nodeName || function e(t) {
                var n = t.nodeName;
                if ("BODY" === n || "HTML" === n)
                    return !1;
                if ("fixed" === ie(t, "position"))
                    return !0;
                var i = re(t);
                return !!i && e(i)
            }(a))
                s = c;
            else {
                var u = me(e.ownerDocument)
                  , f = u.height
                  , h = u.width;
                s.top += c.top - c.marginTop,
                s.bottom = f + c.top,
                s.left += c.left - c.marginLeft,
                s.right = h + c.left
            }
        }
        var d = "number" == typeof (n = n || 0);
        return s.left += d ? n : n.left || 0,
        s.top += d ? n : n.top || 0,
        s.right -= d ? n : n.right || 0,
        s.bottom -= d ? n : n.bottom || 0,
        s
    }
    function xe(e, t, n, i, r, o) {
        var s = 5 < arguments.length && void 0 !== o ? o : 0;
        if (-1 === e.indexOf("auto"))
            return e;
        var a = Te(n, i, s, r)
          , l = {
            top: {
                width: a.width,
                height: t.top - a.top
            },
            right: {
                width: a.right - t.right,
                height: a.height
            },
            bottom: {
                width: a.width,
                height: a.bottom - t.bottom
            },
            left: {
                width: t.left - a.left,
                height: a.height
            }
        }
          , c = Object.keys(l).map(function(e) {
            return _e({
                key: e
            }, l[e], {
                area: function(e) {
                    return e.width * e.height
                }(l[e])
            })
        }).sort(function(e, t) {
            return t.area - e.area
        })
          , u = c.filter(function(e) {
            var t = e.width
              , i = e.height;
            return t >= n.clientWidth && i >= n.clientHeight
        })
          , f = 0 < u.length ? u[0].key : c[0].key
          , h = e.split("-")[1];
        return f + (h ? "-" + h : "")
    }
    function Se(e, t, n, i) {
        var r = 3 < arguments.length && void 0 !== i ? i : null;
        return we(n, r ? Ce(t) : he(t, se(n)), r)
    }
    function De(e) {
        var t = e.ownerDocument.defaultView.getComputedStyle(e)
          , n = parseFloat(t.marginTop || 0) + parseFloat(t.marginBottom || 0)
          , i = parseFloat(t.marginLeft || 0) + parseFloat(t.marginRight || 0);
        return {
            width: e.offsetWidth + i,
            height: e.offsetHeight + n
        }
    }
    function Ae(e) {
        var t = {
            left: "right",
            right: "left",
            bottom: "top",
            top: "bottom"
        };
        return e.replace(/left|right|bottom|top/g, function(e) {
            return t[e]
        })
    }
    function Ne(e, t, n) {
        n = n.split("-")[0];
        var i = De(e)
          , r = {
            width: i.width,
            height: i.height
        }
          , o = -1 !== ["right", "left"].indexOf(n)
          , s = o ? "top" : "left"
          , a = o ? "left" : "top"
          , l = o ? "height" : "width"
          , c = o ? "width" : "height";
        return r[s] = t[s] + t[l] / 2 - i[l] / 2,
        r[a] = n === a ? t[a] - i[c] : t[Ae(a)],
        r
    }
    function Ie(e, t) {
        return Array.prototype.find ? e.find(t) : e.filter(t)[0]
    }
    function ke(e, t, n) {
        return (void 0 === n ? e : e.slice(0, function(e, t, n) {
            if (Array.prototype.findIndex)
                return e.findIndex(function(e) {
                    return e[t] === n
                });
            var i = Ie(e, function(e) {
                return e[t] === n
            });
            return e.indexOf(i)
        }(e, "name", n))).forEach(function(e) {
            e.function && console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
            var n = e.function || e.fn;
            e.enabled && ne(n) && (t.offsets.popper = be(t.offsets.popper),
            t.offsets.reference = be(t.offsets.reference),
            t = n(t, e))
        }),
        t
    }
    function Oe(e, t) {
        return e.some(function(e) {
            var n = e.name;
            return e.enabled && n === t
        })
    }
    function Le(e) {
        for (var t = [!1, "ms", "Webkit", "Moz", "O"], n = e.charAt(0).toUpperCase() + e.slice(1), i = 0; i < t.length; i++) {
            var r = t[i]
              , o = r ? "" + r + n : e;
            if (void 0 !== document.body.style[o])
                return o
        }
        return null
    }
    function Pe(e) {
        var t = e.ownerDocument;
        return t ? t.defaultView : window
    }
    function je(e) {
        return "" !== e && !isNaN(parseFloat(e)) && isFinite(e)
    }
    function He(e, t) {
        Object.keys(t).forEach(function(n) {
            var i = "";
            -1 !== ["width", "height", "top", "right", "bottom", "left"].indexOf(n) && je(t[n]) && (i = "px"),
            e.style[n] = t[n] + i
        })
    }
    var Re = Z && /Firefox/i.test(navigator.userAgent);
    function Me(e, t, n) {
        var i = Ie(e, function(e) {
            return e.name === t
        })
          , r = !!i && e.some(function(e) {
            return e.name === n && e.enabled && e.order < i.order
        });
        if (!r) {
            var o = "`" + t + "`"
              , s = "`" + n + "`";
            console.warn(s + " modifier is required by " + o + " modifier in order to work, be sure to include it before " + o + "!")
        }
        return r
    }
    var qe = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"]
      , Fe = qe.slice(3);
    function We(e, t) {
        var n = 1 < arguments.length && void 0 !== t && t
          , i = Fe.indexOf(e)
          , r = Fe.slice(i + 1).concat(Fe.slice(0, i));
        return n ? r.reverse() : r
    }
    var Be = {
        placement: "bottom",
        positionFixed: !1,
        eventsEnabled: !0,
        removeOnDestroy: !1,
        onCreate: function() {},
        onUpdate: function() {},
        modifiers: {
            shift: {
                order: 100,
                enabled: !0,
                fn: function(e) {
                    var t = e.placement
                      , n = t.split("-")[0]
                      , i = t.split("-")[1];
                    if (i) {
                        var r = e.offsets
                          , o = r.reference
                          , s = r.popper
                          , a = -1 !== ["bottom", "top"].indexOf(n)
                          , l = a ? "left" : "top"
                          , c = a ? "width" : "height"
                          , u = {
                            start: ye({}, l, o[l]),
                            end: ye({}, l, o[l] + o[c] - s[c])
                        };
                        e.offsets.popper = _e({}, s, u[i])
                    }
                    return e
                }
            },
            offset: {
                order: 200,
                enabled: !0,
                fn: function(e, t) {
                    var n, i = t.offset, r = e.placement, o = e.offsets, s = o.popper, a = o.reference, l = r.split("-")[0];
                    return n = je(+i) ? [+i, 0] : function(e, t, n, i) {
                        var r = [0, 0]
                          , o = -1 !== ["right", "left"].indexOf(i)
                          , s = e.split(/(\+|\-)/).map(function(e) {
                            return e.trim()
                        })
                          , a = s.indexOf(Ie(s, function(e) {
                            return -1 !== e.search(/,|\s/)
                        }));
                        s[a] && -1 === s[a].indexOf(",") && console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");
                        var l = /\s*,\s*|\s+/
                          , c = -1 !== a ? [s.slice(0, a).concat([s[a].split(l)[0]]), [s[a].split(l)[1]].concat(s.slice(a + 1))] : [s];
                        return (c = c.map(function(e, i) {
                            var r = (1 === i ? !o : o) ? "height" : "width"
                              , s = !1;
                            return e.reduce(function(e, t) {
                                return "" === e[e.length - 1] && -1 !== ["+", "-"].indexOf(t) ? (e[e.length - 1] = t,
                                s = !0,
                                e) : s ? (e[e.length - 1] += t,
                                s = !1,
                                e) : e.concat(t)
                            }, []).map(function(e) {
                                return function(e, t, n, i) {
                                    var r = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/)
                                      , o = +r[1]
                                      , s = r[2];
                                    if (!o)
                                        return e;
                                    if (0 !== s.indexOf("%"))
                                        return "vh" !== s && "vw" !== s ? o : ("vh" === s ? Math.max(document.documentElement.clientHeight, window.innerHeight || 0) : Math.max(document.documentElement.clientWidth, window.innerWidth || 0)) / 100 * o;
                                    var a = void 0;
                                    switch (s) {
                                    case "%p":
                                        a = n;
                                        break;
                                    case "%":
                                    case "%r":
                                    default:
                                        a = i
                                    }
                                    return be(a)[t] / 100 * o
                                }(e, r, t, n)
                            })
                        })).forEach(function(e, t) {
                            e.forEach(function(n, i) {
                                je(n) && (r[t] += n * ("-" === e[i - 1] ? -1 : 1))
                            })
                        }),
                        r
                    }(i, s, a, l),
                    "left" === l ? (s.top += n[0],
                    s.left -= n[1]) : "right" === l ? (s.top += n[0],
                    s.left += n[1]) : "top" === l ? (s.left += n[0],
                    s.top -= n[1]) : "bottom" === l && (s.left += n[0],
                    s.top += n[1]),
                    e.popper = s,
                    e
                },
                offset: 0
            },
            preventOverflow: {
                order: 300,
                enabled: !0,
                fn: function(e, t) {
                    var n = t.boundariesElement || ue(e.instance.popper);
                    e.instance.reference === n && (n = ue(n));
                    var i = Le("transform")
                      , r = e.instance.popper.style
                      , o = r.top
                      , s = r.left
                      , a = r[i];
                    r.top = "",
                    r.left = "",
                    r[i] = "";
                    var l = Te(e.instance.popper, e.instance.reference, t.padding, n, e.positionFixed);
                    r.top = o,
                    r.left = s,
                    r[i] = a,
                    t.boundaries = l;
                    var c = t.priority
                      , u = e.offsets.popper
                      , f = {
                        primary: function(e) {
                            var n = u[e];
                            return u[e] < l[e] && !t.escapeWithReference && (n = Math.max(u[e], l[e])),
                            ye({}, e, n)
                        },
                        secondary: function(e) {
                            var n = "right" === e ? "left" : "top"
                              , i = u[n];
                            return u[e] > l[e] && !t.escapeWithReference && (i = Math.min(u[n], l[e] - ("right" === e ? u.width : u.height))),
                            ye({}, n, i)
                        }
                    };
                    return c.forEach(function(e) {
                        var t = -1 !== ["left", "top"].indexOf(e) ? "primary" : "secondary";
                        u = _e({}, u, f[t](e))
                    }),
                    e.offsets.popper = u,
                    e
                },
                priority: ["left", "right", "top", "bottom"],
                padding: 5,
                boundariesElement: "scrollParent"
            },
            keepTogether: {
                order: 400,
                enabled: !0,
                fn: function(e) {
                    var t = e.offsets
                      , n = t.popper
                      , i = t.reference
                      , r = e.placement.split("-")[0]
                      , o = Math.floor
                      , s = -1 !== ["top", "bottom"].indexOf(r)
                      , a = s ? "right" : "bottom"
                      , l = s ? "left" : "top"
                      , c = s ? "width" : "height";
                    return n[a] < o(i[l]) && (e.offsets.popper[l] = o(i[l]) - n[c]),
                    n[l] > o(i[a]) && (e.offsets.popper[l] = o(i[a])),
                    e
                }
            },
            arrow: {
                order: 500,
                enabled: !0,
                fn: function(e, t) {
                    var n;
                    if (!Me(e.instance.modifiers, "arrow", "keepTogether"))
                        return e;
                    var i = t.element;
                    if ("string" == typeof i) {
                        if (!(i = e.instance.popper.querySelector(i)))
                            return e
                    } else if (!e.instance.popper.contains(i))
                        return console.warn("WARNING: `arrow.element` must be child of its popper element!"),
                        e;
                    var r = e.placement.split("-")[0]
                      , o = e.offsets
                      , s = o.popper
                      , a = o.reference
                      , l = -1 !== ["left", "right"].indexOf(r)
                      , c = l ? "height" : "width"
                      , u = l ? "Top" : "Left"
                      , f = u.toLowerCase()
                      , h = l ? "left" : "top"
                      , d = l ? "bottom" : "right"
                      , p = De(i)[c];
                    a[d] - p < s[f] && (e.offsets.popper[f] -= s[f] - (a[d] - p)),
                    a[f] + p > s[d] && (e.offsets.popper[f] += a[f] + p - s[d]),
                    e.offsets.popper = be(e.offsets.popper);
                    var g = a[f] + a[c] / 2 - p / 2
                      , m = ie(e.instance.popper)
                      , v = parseFloat(m["margin" + u], 10)
                      , y = parseFloat(m["border" + u + "Width"], 10)
                      , _ = g - e.offsets.popper[f] - v - y;
                    return _ = Math.max(Math.min(s[c] - p, _), 0),
                    e.arrowElement = i,
                    e.offsets.arrow = (ye(n = {}, f, Math.round(_)),
                    ye(n, h, ""),
                    n),
                    e
                },
                element: "[x-arrow]"
            },
            flip: {
                order: 600,
                enabled: !0,
                fn: function(e, t) {
                    if (Oe(e.instance.modifiers, "inner"))
                        return e;
                    if (e.flipped && e.placement === e.originalPlacement)
                        return e;
                    var n = Te(e.instance.popper, e.instance.reference, t.padding, t.boundariesElement, e.positionFixed)
                      , i = e.placement.split("-")[0]
                      , r = Ae(i)
                      , o = e.placement.split("-")[1] || ""
                      , s = [];
                    switch (t.behavior) {
                    case "flip":
                        s = [i, r];
                        break;
                    case "clockwise":
                        s = We(i);
                        break;
                    case "counterclockwise":
                        s = We(i, !0);
                        break;
                    default:
                        s = t.behavior
                    }
                    return s.forEach(function(a, l) {
                        if (i !== a || s.length === l + 1)
                            return e;
                        i = e.placement.split("-")[0],
                        r = Ae(i);
                        var c = e.offsets.popper
                          , u = e.offsets.reference
                          , f = Math.floor
                          , h = "left" === i && f(c.right) > f(u.left) || "right" === i && f(c.left) < f(u.right) || "top" === i && f(c.bottom) > f(u.top) || "bottom" === i && f(c.top) < f(u.bottom)
                          , d = f(c.left) < f(n.left)
                          , p = f(c.right) > f(n.right)
                          , g = f(c.top) < f(n.top)
                          , m = f(c.bottom) > f(n.bottom)
                          , v = "left" === i && d || "right" === i && p || "top" === i && g || "bottom" === i && m
                          , y = -1 !== ["top", "bottom"].indexOf(i)
                          , _ = !!t.flipVariations && (y && "start" === o && d || y && "end" === o && p || !y && "start" === o && g || !y && "end" === o && m)
                          , b = !!t.flipVariationsByContent && (y && "start" === o && p || y && "end" === o && d || !y && "start" === o && m || !y && "end" === o && g)
                          , E = _ || b;
                        (h || v || E) && (e.flipped = !0,
                        (h || v) && (i = s[l + 1]),
                        E && (o = "end" === o ? "start" : "start" === o ? "end" : o),
                        e.placement = i + (o ? "-" + o : ""),
                        e.offsets.popper = _e({}, e.offsets.popper, Ne(e.instance.popper, e.offsets.reference, e.placement)),
                        e = ke(e.instance.modifiers, e, "flip"))
                    }),
                    e
                },
                behavior: "flip",
                padding: 5,
                boundariesElement: "viewport",
                flipVariations: !1,
                flipVariationsByContent: !1
            },
            inner: {
                order: 700,
                enabled: !1,
                fn: function(e) {
                    var t = e.placement
                      , n = t.split("-")[0]
                      , i = e.offsets
                      , r = i.popper
                      , o = i.reference
                      , s = -1 !== ["left", "right"].indexOf(n)
                      , a = -1 === ["top", "left"].indexOf(n);
                    return r[s ? "left" : "top"] = o[n] - (a ? r[s ? "width" : "height"] : 0),
                    e.placement = Ae(t),
                    e.offsets.popper = be(r),
                    e
                }
            },
            hide: {
                order: 800,
                enabled: !0,
                fn: function(e) {
                    if (!Me(e.instance.modifiers, "hide", "preventOverflow"))
                        return e;
                    var t = e.offsets.reference
                      , n = Ie(e.instance.modifiers, function(e) {
                        return "preventOverflow" === e.name
                    }).boundaries;
                    if (t.bottom < n.top || t.left > n.right || t.top > n.bottom || t.right < n.left) {
                        if (!0 === e.hide)
                            return e;
                        e.hide = !0,
                        e.attributes["x-out-of-boundaries"] = ""
                    } else {
                        if (!1 === e.hide)
                            return e;
                        e.hide = !1,
                        e.attributes["x-out-of-boundaries"] = !1
                    }
                    return e
                }
            },
            computeStyle: {
                order: 850,
                enabled: !0,
                fn: function(e, t) {
                    var n = t.x
                      , i = t.y
                      , r = e.offsets.popper
                      , o = Ie(e.instance.modifiers, function(e) {
                        return "applyStyle" === e.name
                    }).gpuAcceleration;
                    void 0 !== o && console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");
                    var s, a, l = void 0 !== o ? o : t.gpuAcceleration, c = ue(e.instance.popper), u = Ee(c), f = {
                        position: r.position
                    }, h = function(e, t) {
                        function n(e) {
                            return e
                        }
                        var i = e.offsets
                          , r = i.popper
                          , o = i.reference
                          , s = Math.round
                          , a = Math.floor
                          , l = s(o.width)
                          , c = s(r.width)
                          , u = -1 !== ["left", "right"].indexOf(e.placement)
                          , f = -1 !== e.placement.indexOf("-")
                          , h = t ? u || f || l % 2 == c % 2 ? s : a : n
                          , d = t ? s : n;
                        return {
                            left: h(l % 2 == 1 && c % 2 == 1 && !f && t ? r.left - 1 : r.left),
                            top: d(r.top),
                            bottom: d(r.bottom),
                            right: h(r.right)
                        }
                    }(e, window.devicePixelRatio < 2 || !Re), d = "bottom" === n ? "top" : "bottom", p = "right" === i ? "left" : "right", g = Le("transform");
                    if (a = "bottom" == d ? "HTML" === c.nodeName ? -c.clientHeight + h.bottom : -u.height + h.bottom : h.top,
                    s = "right" == p ? "HTML" === c.nodeName ? -c.clientWidth + h.right : -u.width + h.right : h.left,
                    l && g)
                        f[g] = "translate3d(" + s + "px, " + a + "px, 0)",
                        f[d] = 0,
                        f[p] = 0,
                        f.willChange = "transform";
                    else {
                        var m = "bottom" == d ? -1 : 1
                          , v = "right" == p ? -1 : 1;
                        f[d] = a * m,
                        f[p] = s * v,
                        f.willChange = d + ", " + p
                    }
                    var y = {
                        "x-placement": e.placement
                    };
                    return e.attributes = _e({}, y, e.attributes),
                    e.styles = _e({}, f, e.styles),
                    e.arrowStyles = _e({}, e.offsets.arrow, e.arrowStyles),
                    e
                },
                gpuAcceleration: !0,
                x: "bottom",
                y: "right"
            },
            applyStyle: {
                order: 900,
                enabled: !0,
                fn: function(e) {
                    return He(e.instance.popper, e.styles),
                    t = e.instance.popper,
                    n = e.attributes,
                    Object.keys(n).forEach(function(e) {
                        !1 !== n[e] ? t.setAttribute(e, n[e]) : t.removeAttribute(e)
                    }),
                    e.arrowElement && Object.keys(e.arrowStyles).length && He(e.arrowElement, e.arrowStyles),
                    e;
                    var t, n
                },
                onLoad: function(e, t, n, i, r) {
                    var o = Se(r, t, e, n.positionFixed)
                      , s = xe(n.placement, o, t, e, n.modifiers.flip.boundariesElement, n.modifiers.flip.padding);
                    return t.setAttribute("x-placement", s),
                    He(t, {
                        position: n.positionFixed ? "fixed" : "absolute"
                    }),
                    n
                },
                gpuAcceleration: void 0
            }
        }
    }
      , Ue = (function(e, t, n) {
        t && ve(e.prototype, t),
        n && ve(e, n)
    }(Ve, [{
        key: "update",
        value: function() {
            return function() {
                if (!this.state.isDestroyed) {
                    var e = {
                        instance: this,
                        styles: {},
                        arrowStyles: {},
                        attributes: {},
                        flipped: !1,
                        offsets: {}
                    };
                    e.offsets.reference = Se(this.state, this.popper, this.reference, this.options.positionFixed),
                    e.placement = xe(this.options.placement, e.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding),
                    e.originalPlacement = e.placement,
                    e.positionFixed = this.options.positionFixed,
                    e.offsets.popper = Ne(this.popper, e.offsets.reference, e.placement),
                    e.offsets.popper.position = this.options.positionFixed ? "fixed" : "absolute",
                    e = ke(this.modifiers, e),
                    this.state.isCreated ? this.options.onUpdate(e) : (this.state.isCreated = !0,
                    this.options.onCreate(e))
                }
            }
            .call(this)
        }
    }, {
        key: "destroy",
        value: function() {
            return function() {
                return this.state.isDestroyed = !0,
                Oe(this.modifiers, "applyStyle") && (this.popper.removeAttribute("x-placement"),
                this.popper.style.position = "",
                this.popper.style.top = "",
                this.popper.style.left = "",
                this.popper.style.right = "",
                this.popper.style.bottom = "",
                this.popper.style.willChange = "",
                this.popper.style[Le("transform")] = ""),
                this.disableEventListeners(),
                this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper),
                this
            }
            .call(this)
        }
    }, {
        key: "enableEventListeners",
        value: function() {
            return function() {
                this.state.eventsEnabled || (this.state = function(e, t, n, i) {
                    n.updateBound = i,
                    Pe(e).addEventListener("resize", n.updateBound, {
                        passive: !0
                    });
                    var r = oe(e);
                    return function e(t, n, i, r) {
                        var o = "BODY" === t.nodeName
                          , s = o ? t.ownerDocument.defaultView : t;
                        s.addEventListener(n, i, {
                            passive: !0
                        }),
                        o || e(oe(s.parentNode), n, i, r),
                        r.push(s)
                    }(r, "scroll", n.updateBound, n.scrollParents),
                    n.scrollElement = r,
                    n.eventsEnabled = !0,
                    n
                }(this.reference, this.options, this.state, this.scheduleUpdate))
            }
            .call(this)
        }
    }, {
        key: "disableEventListeners",
        value: function() {
            return function() {
                var e, t;
                this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate),
                this.state = (e = this.reference,
                t = this.state,
                Pe(e).removeEventListener("resize", t.updateBound),
                t.scrollParents.forEach(function(e) {
                    e.removeEventListener("scroll", t.updateBound)
                }),
                t.updateBound = null,
                t.scrollParents = [],
                t.scrollElement = null,
                t.eventsEnabled = !1,
                t))
            }
            .call(this)
        }
    }]),
    Ve);
    function Ve(e, t) {
        var n = this
          , i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
        !function(e, t) {
            if (!(e instanceof Ve))
                throw new TypeError("Cannot call a class as a function")
        }(this),
        this.scheduleUpdate = function() {
            return requestAnimationFrame(n.update)
        }
        ,
        this.update = te(this.update.bind(this)),
        this.options = _e({}, Ve.Defaults, i),
        this.state = {
            isDestroyed: !1,
            isCreated: !1,
            scrollParents: []
        },
        this.reference = e && e.jquery ? e[0] : e,
        this.popper = t && t.jquery ? t[0] : t,
        this.options.modifiers = {},
        Object.keys(_e({}, Ve.Defaults.modifiers, i.modifiers)).forEach(function(e) {
            n.options.modifiers[e] = _e({}, Ve.Defaults.modifiers[e] || {}, i.modifiers ? i.modifiers[e] : {})
        }),
        this.modifiers = Object.keys(this.options.modifiers).map(function(e) {
            return _e({
                name: e
            }, n.options.modifiers[e])
        }).sort(function(e, t) {
            return e.order - t.order
        }),
        this.modifiers.forEach(function(e) {
            e.enabled && ne(e.onLoad) && e.onLoad(n.reference, n.popper, n.options, e, n.state)
        }),
        this.update();
        var r = this.options.eventsEnabled;
        r && this.enableEventListeners(),
        this.state.eventsEnabled = r
    }
    Ue.Utils = ("undefined" != typeof window ? window : global).PopperUtils,
    Ue.placements = qe,
    Ue.Defaults = Be;
    var Qe = "dropdown"
      , Ke = "bs.dropdown"
      , $e = "." + Ke
      , ze = ".data-api"
      , Ye = t.fn[Qe]
      , Xe = new RegExp("38|40|27")
      , Ge = {
        HIDE: "hide" + $e,
        HIDDEN: "hidden" + $e,
        SHOW: "show" + $e,
        SHOWN: "shown" + $e,
        CLICK: "click" + $e,
        CLICK_DATA_API: "click" + $e + ze,
        KEYDOWN_DATA_API: "keydown" + $e + ze,
        KEYUP_DATA_API: "keyup" + $e + ze
    }
      , Je = "disabled"
      , Ze = "show"
      , et = "dropdown-menu-right"
      , tt = '[data-toggle="dropdown"]'
      , nt = ".dropdown-menu"
      , it = {
        offset: 0,
        flip: !0,
        boundary: "scrollParent",
        reference: "toggle",
        display: "dynamic",
        popperConfig: null
    }
      , rt = {
        offset: "(number|string|function)",
        flip: "boolean",
        boundary: "(string|element)",
        reference: "(string|element)",
        display: "string",
        popperConfig: "(null|object)"
    }
      , ot = function() {
        function e(e, t) {
            this._element = e,
            this._popper = null,
            this._config = this._getConfig(t),
            this._menu = this._getMenuElement(),
            this._inNavbar = this._detectNavbar(),
            this._addEventListeners()
        }
        var n = e.prototype;
        return n.toggle = function() {
            if (!this._element.disabled && !t(this._element).hasClass(Je)) {
                var n = t(this._menu).hasClass(Ze);
                e._clearMenus(),
                n || this.show(!0)
            }
        }
        ,
        n.show = function(n) {
            if (void 0 === n && (n = !1),
            !(this._element.disabled || t(this._element).hasClass(Je) || t(this._menu).hasClass(Ze))) {
                var i = {
                    relatedTarget: this._element
                }
                  , r = t.Event(Ge.SHOW, i)
                  , o = e._getParentFromElement(this._element);
                if (t(o).trigger(r),
                !r.isDefaultPrevented()) {
                    if (!this._inNavbar && n) {
                        if (void 0 === Ue)
                            throw new TypeError("Bootstrap's dropdowns require Popper.js (https://popper.js.org/)");
                        var s = this._element;
                        "parent" === this._config.reference ? s = o : a.isElement(this._config.reference) && (s = this._config.reference,
                        void 0 !== this._config.reference.jquery && (s = this._config.reference[0])),
                        "scrollParent" !== this._config.boundary && t(o).addClass("position-static"),
                        this._popper = new Ue(s,this._menu,this._getPopperConfig())
                    }
                    "ontouchstart"in document.documentElement && 0 === t(o).closest(".navbar-nav").length && t(document.body).children().on("mouseover", null, t.noop),
                    this._element.focus(),
                    this._element.setAttribute("aria-expanded", !0),
                    t(this._menu).toggleClass(Ze),
                    t(o).toggleClass(Ze).trigger(t.Event(Ge.SHOWN, i))
                }
            }
        }
        ,
        n.hide = function() {
            if (!this._element.disabled && !t(this._element).hasClass(Je) && t(this._menu).hasClass(Ze)) {
                var n = {
                    relatedTarget: this._element
                }
                  , i = t.Event(Ge.HIDE, n)
                  , r = e._getParentFromElement(this._element);
                t(r).trigger(i),
                i.isDefaultPrevented() || (this._popper && this._popper.destroy(),
                t(this._menu).toggleClass(Ze),
                t(r).toggleClass(Ze).trigger(t.Event(Ge.HIDDEN, n)))
            }
        }
        ,
        n.dispose = function() {
            t.removeData(this._element, Ke),
            t(this._element).off($e),
            this._element = null,
            (this._menu = null) !== this._popper && (this._popper.destroy(),
            this._popper = null)
        }
        ,
        n.update = function() {
            this._inNavbar = this._detectNavbar(),
            null !== this._popper && this._popper.scheduleUpdate()
        }
        ,
        n._addEventListeners = function() {
            var e = this;
            t(this._element).on(Ge.CLICK, function(t) {
                t.preventDefault(),
                t.stopPropagation(),
                e.toggle()
            })
        }
        ,
        n._getConfig = function(e) {
            return e = o({}, this.constructor.Default, {}, t(this._element).data(), {}, e),
            a.typeCheckConfig(Qe, e, this.constructor.DefaultType),
            e
        }
        ,
        n._getMenuElement = function() {
            if (!this._menu) {
                var t = e._getParentFromElement(this._element);
                t && (this._menu = t.querySelector(nt))
            }
            return this._menu
        }
        ,
        n._getPlacement = function() {
            var e = t(this._element.parentNode)
              , n = "bottom-start";
            return e.hasClass("dropup") ? (n = "top-start",
            t(this._menu).hasClass(et) && (n = "top-end")) : e.hasClass("dropright") ? n = "right-start" : e.hasClass("dropleft") ? n = "left-start" : t(this._menu).hasClass(et) && (n = "bottom-end"),
            n
        }
        ,
        n._detectNavbar = function() {
            return 0 < t(this._element).closest(".navbar").length
        }
        ,
        n._getOffset = function() {
            var e = this
              , t = {};
            return "function" == typeof this._config.offset ? t.fn = function(t) {
                return t.offsets = o({}, t.offsets, {}, e._config.offset(t.offsets, e._element) || {}),
                t
            }
            : t.offset = this._config.offset,
            t
        }
        ,
        n._getPopperConfig = function() {
            var e = {
                placement: this._getPlacement(),
                modifiers: {
                    offset: this._getOffset(),
                    flip: {
                        enabled: this._config.flip
                    },
                    preventOverflow: {
                        boundariesElement: this._config.boundary
                    }
                }
            };
            return "static" === this._config.display && (e.modifiers.applyStyle = {
                enabled: !1
            }),
            o({}, e, {}, this._config.popperConfig)
        }
        ,
        e._jQueryInterface = function(n) {
            return this.each(function() {
                var i = t(this).data(Ke);
                if (i || (i = new e(this,"object" == typeof n ? n : null),
                t(this).data(Ke, i)),
                "string" == typeof n) {
                    if (void 0 === i[n])
                        throw new TypeError('No method named "' + n + '"');
                    i[n]()
                }
            })
        }
        ,
        e._clearMenus = function(n) {
            if (!n || 3 !== n.which && ("keyup" !== n.type || 9 === n.which))
                for (var i = [].slice.call(document.querySelectorAll(tt)), r = 0, o = i.length; r < o; r++) {
                    var s = e._getParentFromElement(i[r])
                      , a = t(i[r]).data(Ke)
                      , l = {
                        relatedTarget: i[r]
                    };
                    if (n && "click" === n.type && (l.clickEvent = n),
                    a) {
                        var c = a._menu;
                        if (t(s).hasClass(Ze) && !(n && ("click" === n.type && /input|textarea/i.test(n.target.tagName) || "keyup" === n.type && 9 === n.which) && t.contains(s, n.target))) {
                            var u = t.Event(Ge.HIDE, l);
                            t(s).trigger(u),
                            u.isDefaultPrevented() || ("ontouchstart"in document.documentElement && t(document.body).children().off("mouseover", null, t.noop),
                            i[r].setAttribute("aria-expanded", "false"),
                            a._popper && a._popper.destroy(),
                            t(c).removeClass(Ze),
                            t(s).removeClass(Ze).trigger(t.Event(Ge.HIDDEN, l)))
                        }
                    }
                }
        }
        ,
        e._getParentFromElement = function(e) {
            var t, n = a.getSelectorFromElement(e);
            return n && (t = document.querySelector(n)),
            t || e.parentNode
        }
        ,
        e._dataApiKeydownHandler = function(n) {
            if ((/input|textarea/i.test(n.target.tagName) ? !(32 === n.which || 27 !== n.which && (40 !== n.which && 38 !== n.which || t(n.target).closest(nt).length)) : Xe.test(n.which)) && (n.preventDefault(),
            n.stopPropagation(),
            !this.disabled && !t(this).hasClass(Je))) {
                var i = e._getParentFromElement(this)
                  , r = t(i).hasClass(Ze);
                if (r || 27 !== n.which)
                    if (r && (!r || 27 !== n.which && 32 !== n.which)) {
                        var o = [].slice.call(i.querySelectorAll(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)")).filter(function(e) {
                            return t(e).is(":visible")
                        });
                        if (0 !== o.length) {
                            var s = o.indexOf(n.target);
                            38 === n.which && 0 < s && s--,
                            40 === n.which && s < o.length - 1 && s++,
                            s < 0 && (s = 0),
                            o[s].focus()
                        }
                    } else {
                        if (27 === n.which) {
                            var a = i.querySelector(tt);
                            t(a).trigger("focus")
                        }
                        t(this).trigger("click")
                    }
            }
        }
        ,
        i(e, null, [{
            key: "VERSION",
            get: function() {
                return "4.4.1"
            }
        }, {
            key: "Default",
            get: function() {
                return it
            }
        }, {
            key: "DefaultType",
            get: function() {
                return rt
            }
        }]),
        e
    }();
    t(document).on(Ge.KEYDOWN_DATA_API, tt, ot._dataApiKeydownHandler).on(Ge.KEYDOWN_DATA_API, nt, ot._dataApiKeydownHandler).on(Ge.CLICK_DATA_API + " " + Ge.KEYUP_DATA_API, ot._clearMenus).on(Ge.CLICK_DATA_API, tt, function(e) {
        e.preventDefault(),
        e.stopPropagation(),
        ot._jQueryInterface.call(t(this), "toggle")
    }).on(Ge.CLICK_DATA_API, ".dropdown form", function(e) {
        e.stopPropagation()
    }),
    t.fn[Qe] = ot._jQueryInterface,
    t.fn[Qe].Constructor = ot,
    t.fn[Qe].noConflict = function() {
        return t.fn[Qe] = Ye,
        ot._jQueryInterface
    }
    ;
    var st = "modal"
      , at = "bs.modal"
      , lt = "." + at
      , ct = t.fn[st]
      , ut = {
        backdrop: !0,
        keyboard: !0,
        focus: !0,
        show: !0
    }
      , ft = {
        backdrop: "(boolean|string)",
        keyboard: "boolean",
        focus: "boolean",
        show: "boolean"
    }
      , ht = {
        HIDE: "hide" + lt,
        HIDE_PREVENTED: "hidePrevented" + lt,
        HIDDEN: "hidden" + lt,
        SHOW: "show" + lt,
        SHOWN: "shown" + lt,
        FOCUSIN: "focusin" + lt,
        RESIZE: "resize" + lt,
        CLICK_DISMISS: "click.dismiss" + lt,
        KEYDOWN_DISMISS: "keydown.dismiss" + lt,
        MOUSEUP_DISMISS: "mouseup.dismiss" + lt,
        MOUSEDOWN_DISMISS: "mousedown.dismiss" + lt,
        CLICK_DATA_API: "click" + lt + ".data-api"
    }
      , dt = "modal-open"
      , pt = "fade"
      , gt = "show"
      , mt = "modal-static"
      , vt = ".modal-dialog"
      , yt = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top"
      , _t = ".sticky-top"
      , bt = function() {
        function e(e, t) {
            this._config = this._getConfig(t),
            this._element = e,
            this._dialog = e.querySelector(vt),
            this._backdrop = null,
            this._isShown = !1,
            this._isBodyOverflowing = !1,
            this._ignoreBackdropClick = !1,
            this._isTransitioning = !1,
            this._scrollbarWidth = 0
        }
        var n = e.prototype;
        return n.toggle = function(e) {
            return this._isShown ? this.hide() : this.show(e)
        }
        ,
        n.show = function(e) {
            var n = this;
            if (!this._isShown && !this._isTransitioning) {
                t(this._element).hasClass(pt) && (this._isTransitioning = !0);
                var i = t.Event(ht.SHOW, {
                    relatedTarget: e
                });
                t(this._element).trigger(i),
                this._isShown || i.isDefaultPrevented() || (this._isShown = !0,
                this._checkScrollbar(),
                this._setScrollbar(),
                this._adjustDialog(),
                this._setEscapeEvent(),
                this._setResizeEvent(),
                t(this._element).on(ht.CLICK_DISMISS, '[data-dismiss="modal"]', function(e) {
                    return n.hide(e)
                }),
                t(this._dialog).on(ht.MOUSEDOWN_DISMISS, function() {
                    t(n._element).one(ht.MOUSEUP_DISMISS, function(e) {
                        t(e.target).is(n._element) && (n._ignoreBackdropClick = !0)
                    })
                }),
                this._showBackdrop(function() {
                    return n._showElement(e)
                }))
            }
        }
        ,
        n.hide = function(e) {
            var n = this;
            if (e && e.preventDefault(),
            this._isShown && !this._isTransitioning) {
                var i = t.Event(ht.HIDE);
                if (t(this._element).trigger(i),
                this._isShown && !i.isDefaultPrevented()) {
                    this._isShown = !1;
                    var r = t(this._element).hasClass(pt);
                    if (r && (this._isTransitioning = !0),
                    this._setEscapeEvent(),
                    this._setResizeEvent(),
                    t(document).off(ht.FOCUSIN),
                    t(this._element).removeClass(gt),
                    t(this._element).off(ht.CLICK_DISMISS),
                    t(this._dialog).off(ht.MOUSEDOWN_DISMISS),
                    r) {
                        var o = a.getTransitionDurationFromElement(this._element);
                        t(this._element).one(a.TRANSITION_END, function(e) {
                            return n._hideModal(e)
                        }).emulateTransitionEnd(o)
                    } else
                        this._hideModal()
                }
            }
        }
        ,
        n.dispose = function() {
            [window, this._element, this._dialog].forEach(function(e) {
                return t(e).off(lt)
            }),
            t(document).off(ht.FOCUSIN),
            t.removeData(this._element, at),
            this._config = null,
            this._element = null,
            this._dialog = null,
            this._backdrop = null,
            this._isShown = null,
            this._isBodyOverflowing = null,
            this._ignoreBackdropClick = null,
            this._isTransitioning = null,
            this._scrollbarWidth = null
        }
        ,
        n.handleUpdate = function() {
            this._adjustDialog()
        }
        ,
        n._getConfig = function(e) {
            return e = o({}, ut, {}, e),
            a.typeCheckConfig(st, e, ft),
            e
        }
        ,
        n._triggerBackdropTransition = function() {
            var e = this;
            if ("static" === this._config.backdrop) {
                var n = t.Event(ht.HIDE_PREVENTED);
                if (t(this._element).trigger(n),
                n.defaultPrevented)
                    return;
                this._element.classList.add(mt);
                var i = a.getTransitionDurationFromElement(this._element);
                t(this._element).one(a.TRANSITION_END, function() {
                    e._element.classList.remove(mt)
                }).emulateTransitionEnd(i),
                this._element.focus()
            } else
                this.hide()
        }
        ,
        n._showElement = function(e) {
            var n = this
              , i = t(this._element).hasClass(pt)
              , r = this._dialog ? this._dialog.querySelector(".modal-body") : null;
            function o() {
                n._config.focus && n._element.focus(),
                n._isTransitioning = !1,
                t(n._element).trigger(s)
            }
            this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element),
            this._element.style.display = "block",
            this._element.removeAttribute("aria-hidden"),
            this._element.setAttribute("aria-modal", !0),
            t(this._dialog).hasClass("modal-dialog-scrollable") && r ? r.scrollTop = 0 : this._element.scrollTop = 0,
            i && a.reflow(this._element),
            t(this._element).addClass(gt),
            this._config.focus && this._enforceFocus();
            var s = t.Event(ht.SHOWN, {
                relatedTarget: e
            });
            if (i) {
                var l = a.getTransitionDurationFromElement(this._dialog);
                t(this._dialog).one(a.TRANSITION_END, o).emulateTransitionEnd(l)
            } else
                o()
        }
        ,
        n._enforceFocus = function() {
            var e = this;
            t(document).off(ht.FOCUSIN).on(ht.FOCUSIN, function(n) {
                document !== n.target && e._element !== n.target && 0 === t(e._element).has(n.target).length && e._element.focus()
            })
        }
        ,
        n._setEscapeEvent = function() {
            var e = this;
            this._isShown && this._config.keyboard ? t(this._element).on(ht.KEYDOWN_DISMISS, function(t) {
                27 === t.which && e._triggerBackdropTransition()
            }) : this._isShown || t(this._element).off(ht.KEYDOWN_DISMISS)
        }
        ,
        n._setResizeEvent = function() {
            var e = this;
            this._isShown ? t(window).on(ht.RESIZE, function(t) {
                return e.handleUpdate(t)
            }) : t(window).off(ht.RESIZE)
        }
        ,
        n._hideModal = function() {
            var e = this;
            this._element.style.display = "none",
            this._element.setAttribute("aria-hidden", !0),
            this._element.removeAttribute("aria-modal"),
            this._isTransitioning = !1,
            this._showBackdrop(function() {
                t(document.body).removeClass(dt),
                e._resetAdjustments(),
                e._resetScrollbar(),
                t(e._element).trigger(ht.HIDDEN)
            })
        }
        ,
        n._removeBackdrop = function() {
            this._backdrop && (t(this._backdrop).remove(),
            this._backdrop = null)
        }
        ,
        n._showBackdrop = function(e) {
            var n = this
              , i = t(this._element).hasClass(pt) ? pt : "";
            if (this._isShown && this._config.backdrop) {
                if (this._backdrop = document.createElement("div"),
                this._backdrop.className = "modal-backdrop",
                i && this._backdrop.classList.add(i),
                t(this._backdrop).appendTo(document.body),
                t(this._element).on(ht.CLICK_DISMISS, function(e) {
                    n._ignoreBackdropClick ? n._ignoreBackdropClick = !1 : e.target === e.currentTarget && n._triggerBackdropTransition()
                }),
                i && a.reflow(this._backdrop),
                t(this._backdrop).addClass(gt),
                !e)
                    return;
                if (!i)
                    return void e();
                var r = a.getTransitionDurationFromElement(this._backdrop);
                t(this._backdrop).one(a.TRANSITION_END, e).emulateTransitionEnd(r)
            } else if (!this._isShown && this._backdrop) {
                t(this._backdrop).removeClass(gt);
                var o = function() {
                    n._removeBackdrop(),
                    e && e()
                };
                if (t(this._element).hasClass(pt)) {
                    var s = a.getTransitionDurationFromElement(this._backdrop);
                    t(this._backdrop).one(a.TRANSITION_END, o).emulateTransitionEnd(s)
                } else
                    o()
            } else
                e && e()
        }
        ,
        n._adjustDialog = function() {
            var e = this._element.scrollHeight > document.documentElement.clientHeight;
            !this._isBodyOverflowing && e && (this._element.style.paddingLeft = this._scrollbarWidth + "px"),
            this._isBodyOverflowing && !e && (this._element.style.paddingRight = this._scrollbarWidth + "px")
        }
        ,
        n._resetAdjustments = function() {
            this._element.style.paddingLeft = "",
            this._element.style.paddingRight = ""
        }
        ,
        n._checkScrollbar = function() {
            var e = document.body.getBoundingClientRect();
            this._isBodyOverflowing = e.left + e.right < window.innerWidth,
            this._scrollbarWidth = this._getScrollbarWidth()
        }
        ,
        n._setScrollbar = function() {
            var e = this;
            if (this._isBodyOverflowing) {
                var n = [].slice.call(document.querySelectorAll(yt))
                  , i = [].slice.call(document.querySelectorAll(_t));
                t(n).each(function(n, i) {
                    var r = i.style.paddingRight
                      , o = t(i).css("padding-right");
                    t(i).data("padding-right", r).css("padding-right", parseFloat(o) + e._scrollbarWidth + "px")
                }),
                t(i).each(function(n, i) {
                    var r = i.style.marginRight
                      , o = t(i).css("margin-right");
                    t(i).data("margin-right", r).css("margin-right", parseFloat(o) - e._scrollbarWidth + "px")
                });
                var r = document.body.style.paddingRight
                  , o = t(document.body).css("padding-right");
                t(document.body).data("padding-right", r).css("padding-right", parseFloat(o) + this._scrollbarWidth + "px")
            }
            t(document.body).addClass(dt)
        }
        ,
        n._resetScrollbar = function() {
            var e = [].slice.call(document.querySelectorAll(yt));
            t(e).each(function(e, n) {
                var i = t(n).data("padding-right");
                t(n).removeData("padding-right"),
                n.style.paddingRight = i || ""
            });
            var n = [].slice.call(document.querySelectorAll("" + _t));
            t(n).each(function(e, n) {
                var i = t(n).data("margin-right");
                void 0 !== i && t(n).css("margin-right", i).removeData("margin-right")
            });
            var i = t(document.body).data("padding-right");
            t(document.body).removeData("padding-right"),
            document.body.style.paddingRight = i || ""
        }
        ,
        n._getScrollbarWidth = function() {
            var e = document.createElement("div");
            e.className = "modal-scrollbar-measure",
            document.body.appendChild(e);
            var t = e.getBoundingClientRect().width - e.clientWidth;
            return document.body.removeChild(e),
            t
        }
        ,
        e._jQueryInterface = function(n, i) {
            return this.each(function() {
                var r = t(this).data(at)
                  , s = o({}, ut, {}, t(this).data(), {}, "object" == typeof n && n ? n : {});
                if (r || (r = new e(this,s),
                t(this).data(at, r)),
                "string" == typeof n) {
                    if (void 0 === r[n])
                        throw new TypeError('No method named "' + n + '"');
                    r[n](i)
                } else
                    s.show && r.show(i)
            })
        }
        ,
        i(e, null, [{
            key: "VERSION",
            get: function() {
                return "4.4.1"
            }
        }, {
            key: "Default",
            get: function() {
                return ut
            }
        }]),
        e
    }();
    t(document).on(ht.CLICK_DATA_API, '[data-toggle="modal"]', function(e) {
        var n, i = this, r = a.getSelectorFromElement(this);
        r && (n = document.querySelector(r));
        var s = t(n).data(at) ? "toggle" : o({}, t(n).data(), {}, t(this).data());
        "A" !== this.tagName && "AREA" !== this.tagName || e.preventDefault();
        var l = t(n).one(ht.SHOW, function(e) {
            e.isDefaultPrevented() || l.one(ht.HIDDEN, function() {
                t(i).is(":visible") && i.focus()
            })
        });
        bt._jQueryInterface.call(t(n), s, this)
    }),
    t.fn[st] = bt._jQueryInterface,
    t.fn[st].Constructor = bt,
    t.fn[st].noConflict = function() {
        return t.fn[st] = ct,
        bt._jQueryInterface
    }
    ;
    var Et = ["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"]
      , wt = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:\/?#]*(?:[\/?#]|$))/gi
      , Ct = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+\/]+=*$/i;
    function Tt(e, t, n) {
        if (0 === e.length)
            return e;
        if (n && "function" == typeof n)
            return n(e);
        for (var i = (new window.DOMParser).parseFromString(e, "text/html"), r = Object.keys(t), o = [].slice.call(i.body.querySelectorAll("*")), s = function(e) {
            var n = o[e]
              , i = n.nodeName.toLowerCase();
            if (-1 === r.indexOf(n.nodeName.toLowerCase()))
                return n.parentNode.removeChild(n),
                "continue";
            var s = [].slice.call(n.attributes)
              , a = [].concat(t["*"] || [], t[i] || []);
            s.forEach(function(e) {
                !function(e, t) {
                    var n = e.nodeName.toLowerCase();
                    if (-1 !== t.indexOf(n))
                        return -1 === Et.indexOf(n) || Boolean(e.nodeValue.match(wt) || e.nodeValue.match(Ct));
                    for (var i = t.filter(function(e) {
                        return e instanceof RegExp
                    }), r = 0, o = i.length; r < o; r++)
                        if (n.match(i[r]))
                            return !0;
                    return !1
                }(e, a) && n.removeAttribute(e.nodeName)
            })
        }, a = 0, l = o.length; a < l; a++)
            s(a);
        return i.body.innerHTML
    }
    var xt = "tooltip"
      , St = "bs.tooltip"
      , Dt = "." + St
      , At = t.fn[xt]
      , Nt = "bs-tooltip"
      , It = new RegExp("(^|\\s)" + Nt + "\\S+","g")
      , kt = ["sanitize", "whiteList", "sanitizeFn"]
      , Ot = {
        animation: "boolean",
        template: "string",
        title: "(string|element|function)",
        trigger: "string",
        delay: "(number|object)",
        html: "boolean",
        selector: "(string|boolean)",
        placement: "(string|function)",
        offset: "(number|string|function)",
        container: "(string|element|boolean)",
        fallbackPlacement: "(string|array)",
        boundary: "(string|element)",
        sanitize: "boolean",
        sanitizeFn: "(null|function)",
        whiteList: "object",
        popperConfig: "(null|object)"
    }
      , Lt = {
        AUTO: "auto",
        TOP: "top",
        RIGHT: "right",
        BOTTOM: "bottom",
        LEFT: "left"
    }
      , Pt = {
        animation: !0,
        template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        selector: !1,
        placement: "top",
        offset: 0,
        container: !1,
        fallbackPlacement: "flip",
        boundary: "scrollParent",
        sanitize: !0,
        sanitizeFn: null,
        whiteList: {
            "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
            a: ["target", "href", "title", "rel"],
            area: [],
            b: [],
            br: [],
            col: [],
            code: [],
            div: [],
            em: [],
            hr: [],
            h1: [],
            h2: [],
            h3: [],
            h4: [],
            h5: [],
            h6: [],
            i: [],
            img: ["src", "alt", "title", "width", "height"],
            li: [],
            ol: [],
            p: [],
            pre: [],
            s: [],
            small: [],
            span: [],
            sub: [],
            sup: [],
            strong: [],
            u: [],
            ul: []
        },
        popperConfig: null
    }
      , jt = "show"
      , Ht = {
        HIDE: "hide" + Dt,
        HIDDEN: "hidden" + Dt,
        SHOW: "show" + Dt,
        SHOWN: "shown" + Dt,
        INSERTED: "inserted" + Dt,
        CLICK: "click" + Dt,
        FOCUSIN: "focusin" + Dt,
        FOCUSOUT: "focusout" + Dt,
        MOUSEENTER: "mouseenter" + Dt,
        MOUSELEAVE: "mouseleave" + Dt
    }
      , Rt = "fade"
      , Mt = "show"
      , qt = "hover"
      , Ft = "focus"
      , Wt = function() {
        function e(e, t) {
            if (void 0 === Ue)
                throw new TypeError("Bootstrap's tooltips require Popper.js (https://popper.js.org/)");
            this._isEnabled = !0,
            this._timeout = 0,
            this._hoverState = "",
            this._activeTrigger = {},
            this._popper = null,
            this.element = e,
            this.config = this._getConfig(t),
            this.tip = null,
            this._setListeners()
        }
        var n = e.prototype;
        return n.enable = function() {
            this._isEnabled = !0
        }
        ,
        n.disable = function() {
            this._isEnabled = !1
        }
        ,
        n.toggleEnabled = function() {
            this._isEnabled = !this._isEnabled
        }
        ,
        n.toggle = function(e) {
            if (this._isEnabled)
                if (e) {
                    var n = this.constructor.DATA_KEY
                      , i = t(e.currentTarget).data(n);
                    i || (i = new this.constructor(e.currentTarget,this._getDelegateConfig()),
                    t(e.currentTarget).data(n, i)),
                    i._activeTrigger.click = !i._activeTrigger.click,
                    i._isWithActiveTrigger() ? i._enter(null, i) : i._leave(null, i)
                } else {
                    if (t(this.getTipElement()).hasClass(Mt))
                        return void this._leave(null, this);
                    this._enter(null, this)
                }
        }
        ,
        n.dispose = function() {
            clearTimeout(this._timeout),
            t.removeData(this.element, this.constructor.DATA_KEY),
            t(this.element).off(this.constructor.EVENT_KEY),
            t(this.element).closest(".modal").off("hide.bs.modal", this._hideModalHandler),
            this.tip && t(this.tip).remove(),
            this._isEnabled = null,
            this._timeout = null,
            this._hoverState = null,
            this._activeTrigger = null,
            this._popper && this._popper.destroy(),
            this._popper = null,
            this.element = null,
            this.config = null,
            this.tip = null
        }
        ,
        n.show = function() {
            var e = this;
            if ("none" === t(this.element).css("display"))
                throw new Error("Please use show on visible elements");
            var n = t.Event(this.constructor.Event.SHOW);
            if (this.isWithContent() && this._isEnabled) {
                t(this.element).trigger(n);
                var i = a.findShadowRoot(this.element)
                  , r = t.contains(null !== i ? i : this.element.ownerDocument.documentElement, this.element);
                if (n.isDefaultPrevented() || !r)
                    return;
                var o = this.getTipElement()
                  , s = a.getUID(this.constructor.NAME);
                o.setAttribute("id", s),
                this.element.setAttribute("aria-describedby", s),
                this.setContent(),
                this.config.animation && t(o).addClass(Rt);
                var l = "function" == typeof this.config.placement ? this.config.placement.call(this, o, this.element) : this.config.placement
                  , c = this._getAttachment(l);
                this.addAttachmentClass(c);
                var u = this._getContainer();
                t(o).data(this.constructor.DATA_KEY, this),
                t.contains(this.element.ownerDocument.documentElement, this.tip) || t(o).appendTo(u),
                t(this.element).trigger(this.constructor.Event.INSERTED),
                this._popper = new Ue(this.element,o,this._getPopperConfig(c)),
                t(o).addClass(Mt),
                "ontouchstart"in document.documentElement && t(document.body).children().on("mouseover", null, t.noop);
                var f = function() {
                    e.config.animation && e._fixTransition();
                    var n = e._hoverState;
                    e._hoverState = null,
                    t(e.element).trigger(e.constructor.Event.SHOWN),
                    "out" === n && e._leave(null, e)
                };
                if (t(this.tip).hasClass(Rt)) {
                    var h = a.getTransitionDurationFromElement(this.tip);
                    t(this.tip).one(a.TRANSITION_END, f).emulateTransitionEnd(h)
                } else
                    f()
            }
        }
        ,
        n.hide = function(e) {
            function n() {
                i._hoverState !== jt && r.parentNode && r.parentNode.removeChild(r),
                i._cleanTipClass(),
                i.element.removeAttribute("aria-describedby"),
                t(i.element).trigger(i.constructor.Event.HIDDEN),
                null !== i._popper && i._popper.destroy(),
                e && e()
            }
            var i = this
              , r = this.getTipElement()
              , o = t.Event(this.constructor.Event.HIDE);
            if (t(this.element).trigger(o),
            !o.isDefaultPrevented()) {
                if (t(r).removeClass(Mt),
                "ontouchstart"in document.documentElement && t(document.body).children().off("mouseover", null, t.noop),
                this._activeTrigger.click = !1,
                this._activeTrigger[Ft] = !1,
                this._activeTrigger[qt] = !1,
                t(this.tip).hasClass(Rt)) {
                    var s = a.getTransitionDurationFromElement(r);
                    t(r).one(a.TRANSITION_END, n).emulateTransitionEnd(s)
                } else
                    n();
                this._hoverState = ""
            }
        }
        ,
        n.update = function() {
            null !== this._popper && this._popper.scheduleUpdate()
        }
        ,
        n.isWithContent = function() {
            return Boolean(this.getTitle())
        }
        ,
        n.addAttachmentClass = function(e) {
            t(this.getTipElement()).addClass(Nt + "-" + e)
        }
        ,
        n.getTipElement = function() {
            return this.tip = this.tip || t(this.config.template)[0],
            this.tip
        }
        ,
        n.setContent = function() {
            var e = this.getTipElement();
            this.setElementContent(t(e.querySelectorAll(".tooltip-inner")), this.getTitle()),
            t(e).removeClass(Rt + " " + Mt)
        }
        ,
        n.setElementContent = function(e, n) {
            "object" != typeof n || !n.nodeType && !n.jquery ? this.config.html ? (this.config.sanitize && (n = Tt(n, this.config.whiteList, this.config.sanitizeFn)),
            e.html(n)) : e.text(n) : this.config.html ? t(n).parent().is(e) || e.empty().append(n) : e.text(t(n).text())
        }
        ,
        n.getTitle = function() {
            var e = this.element.getAttribute("data-original-title");
            return e || ("function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title)
        }
        ,
        n._getPopperConfig = function(e) {
            var t = this;
            return o({}, {
                placement: e,
                modifiers: {
                    offset: this._getOffset(),
                    flip: {
                        behavior: this.config.fallbackPlacement
                    },
                    arrow: {
                        element: ".arrow"
                    },
                    preventOverflow: {
                        boundariesElement: this.config.boundary
                    }
                },
                onCreate: function(e) {
                    e.originalPlacement !== e.placement && t._handlePopperPlacementChange(e)
                },
                onUpdate: function(e) {
                    return t._handlePopperPlacementChange(e)
                }
            }, {}, this.config.popperConfig)
        }
        ,
        n._getOffset = function() {
            var e = this
              , t = {};
            return "function" == typeof this.config.offset ? t.fn = function(t) {
                return t.offsets = o({}, t.offsets, {}, e.config.offset(t.offsets, e.element) || {}),
                t
            }
            : t.offset = this.config.offset,
            t
        }
        ,
        n._getContainer = function() {
            return !1 === this.config.container ? document.body : a.isElement(this.config.container) ? t(this.config.container) : t(document).find(this.config.container)
        }
        ,
        n._getAttachment = function(e) {
            return Lt[e.toUpperCase()]
        }
        ,
        n._setListeners = function() {
            var e = this;
            this.config.trigger.split(" ").forEach(function(n) {
                if ("click" === n)
                    t(e.element).on(e.constructor.Event.CLICK, e.config.selector, function(t) {
                        return e.toggle(t)
                    });
                else if ("manual" !== n) {
                    var i = n === qt ? e.constructor.Event.MOUSEENTER : e.constructor.Event.FOCUSIN
                      , r = n === qt ? e.constructor.Event.MOUSELEAVE : e.constructor.Event.FOCUSOUT;
                    t(e.element).on(i, e.config.selector, function(t) {
                        return e._enter(t)
                    }).on(r, e.config.selector, function(t) {
                        return e._leave(t)
                    })
                }
            }),
            this._hideModalHandler = function() {
                e.element && e.hide()
            }
            ,
            t(this.element).closest(".modal").on("hide.bs.modal", this._hideModalHandler),
            this.config.selector ? this.config = o({}, this.config, {
                trigger: "manual",
                selector: ""
            }) : this._fixTitle()
        }
        ,
        n._fixTitle = function() {
            var e = typeof this.element.getAttribute("data-original-title");
            !this.element.getAttribute("title") && "string" == e || (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""),
            this.element.setAttribute("title", ""))
        }
        ,
        n._enter = function(e, n) {
            var i = this.constructor.DATA_KEY;
            (n = n || t(e.currentTarget).data(i)) || (n = new this.constructor(e.currentTarget,this._getDelegateConfig()),
            t(e.currentTarget).data(i, n)),
            e && (n._activeTrigger["focusin" === e.type ? Ft : qt] = !0),
            t(n.getTipElement()).hasClass(Mt) || n._hoverState === jt ? n._hoverState = jt : (clearTimeout(n._timeout),
            n._hoverState = jt,
            n.config.delay && n.config.delay.show ? n._timeout = setTimeout(function() {
                n._hoverState === jt && n.show()
            }, n.config.delay.show) : n.show())
        }
        ,
        n._leave = function(e, n) {
            var i = this.constructor.DATA_KEY;
            (n = n || t(e.currentTarget).data(i)) || (n = new this.constructor(e.currentTarget,this._getDelegateConfig()),
            t(e.currentTarget).data(i, n)),
            e && (n._activeTrigger["focusout" === e.type ? Ft : qt] = !1),
            n._isWithActiveTrigger() || (clearTimeout(n._timeout),
            n._hoverState = "out",
            n.config.delay && n.config.delay.hide ? n._timeout = setTimeout(function() {
                "out" === n._hoverState && n.hide()
            }, n.config.delay.hide) : n.hide())
        }
        ,
        n._isWithActiveTrigger = function() {
            for (var e in this._activeTrigger)
                if (this._activeTrigger[e])
                    return !0;
            return !1
        }
        ,
        n._getConfig = function(e) {
            var n = t(this.element).data();
            return Object.keys(n).forEach(function(e) {
                -1 !== kt.indexOf(e) && delete n[e]
            }),
            "number" == typeof (e = o({}, this.constructor.Default, {}, n, {}, "object" == typeof e && e ? e : {})).delay && (e.delay = {
                show: e.delay,
                hide: e.delay
            }),
            "number" == typeof e.title && (e.title = e.title.toString()),
            "number" == typeof e.content && (e.content = e.content.toString()),
            a.typeCheckConfig(xt, e, this.constructor.DefaultType),
            e.sanitize && (e.template = Tt(e.template, e.whiteList, e.sanitizeFn)),
            e
        }
        ,
        n._getDelegateConfig = function() {
            var e = {};
            if (this.config)
                for (var t in this.config)
                    this.constructor.Default[t] !== this.config[t] && (e[t] = this.config[t]);
            return e
        }
        ,
        n._cleanTipClass = function() {
            var e = t(this.getTipElement())
              , n = e.attr("class").match(It);
            null !== n && n.length && e.removeClass(n.join(""))
        }
        ,
        n._handlePopperPlacementChange = function(e) {
            var t = e.instance;
            this.tip = t.popper,
            this._cleanTipClass(),
            this.addAttachmentClass(this._getAttachment(e.placement))
        }
        ,
        n._fixTransition = function() {
            var e = this.getTipElement()
              , n = this.config.animation;
            null === e.getAttribute("x-placement") && (t(e).removeClass(Rt),
            this.config.animation = !1,
            this.hide(),
            this.show(),
            this.config.animation = n)
        }
        ,
        e._jQueryInterface = function(n) {
            return this.each(function() {
                var i = t(this).data(St)
                  , r = "object" == typeof n && n;
                if ((i || !/dispose|hide/.test(n)) && (i || (i = new e(this,r),
                t(this).data(St, i)),
                "string" == typeof n)) {
                    if (void 0 === i[n])
                        throw new TypeError('No method named "' + n + '"');
                    i[n]()
                }
            })
        }
        ,
        i(e, null, [{
            key: "VERSION",
            get: function() {
                return "4.4.1"
            }
        }, {
            key: "Default",
            get: function() {
                return Pt
            }
        }, {
            key: "NAME",
            get: function() {
                return xt
            }
        }, {
            key: "DATA_KEY",
            get: function() {
                return St
            }
        }, {
            key: "Event",
            get: function() {
                return Ht
            }
        }, {
            key: "EVENT_KEY",
            get: function() {
                return Dt
            }
        }, {
            key: "DefaultType",
            get: function() {
                return Ot
            }
        }]),
        e
    }();
    t.fn[xt] = Wt._jQueryInterface,
    t.fn[xt].Constructor = Wt,
    t.fn[xt].noConflict = function() {
        return t.fn[xt] = At,
        Wt._jQueryInterface
    }
    ;
    var Bt = "popover"
      , Ut = "bs.popover"
      , Vt = "." + Ut
      , Qt = t.fn[Bt]
      , Kt = "bs-popover"
      , $t = new RegExp("(^|\\s)" + Kt + "\\S+","g")
      , zt = o({}, Wt.Default, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
    })
      , Yt = o({}, Wt.DefaultType, {
        content: "(string|element|function)"
    })
      , Xt = {
        HIDE: "hide" + Vt,
        HIDDEN: "hidden" + Vt,
        SHOW: "show" + Vt,
        SHOWN: "shown" + Vt,
        INSERTED: "inserted" + Vt,
        CLICK: "click" + Vt,
        FOCUSIN: "focusin" + Vt,
        FOCUSOUT: "focusout" + Vt,
        MOUSEENTER: "mouseenter" + Vt,
        MOUSELEAVE: "mouseleave" + Vt
    }
      , Gt = function(e) {
        function n() {
            return e.apply(this, arguments) || this
        }
        !function(e, t) {
            e.prototype = Object.create(t.prototype),
            (e.prototype.constructor = e).__proto__ = t
        }(n, e);
        var r = n.prototype;
        return r.isWithContent = function() {
            return this.getTitle() || this._getContent()
        }
        ,
        r.addAttachmentClass = function(e) {
            t(this.getTipElement()).addClass(Kt + "-" + e)
        }
        ,
        r.getTipElement = function() {
            return this.tip = this.tip || t(this.config.template)[0],
            this.tip
        }
        ,
        r.setContent = function() {
            var e = t(this.getTipElement());
            this.setElementContent(e.find(".popover-header"), this.getTitle());
            var n = this._getContent();
            "function" == typeof n && (n = n.call(this.element)),
            this.setElementContent(e.find(".popover-body"), n),
            e.removeClass("fade show")
        }
        ,
        r._getContent = function() {
            return this.element.getAttribute("data-content") || this.config.content
        }
        ,
        r._cleanTipClass = function() {
            var e = t(this.getTipElement())
              , n = e.attr("class").match($t);
            null !== n && 0 < n.length && e.removeClass(n.join(""))
        }
        ,
        n._jQueryInterface = function(e) {
            return this.each(function() {
                var i = t(this).data(Ut)
                  , r = "object" == typeof e ? e : null;
                if ((i || !/dispose|hide/.test(e)) && (i || (i = new n(this,r),
                t(this).data(Ut, i)),
                "string" == typeof e)) {
                    if (void 0 === i[e])
                        throw new TypeError('No method named "' + e + '"');
                    i[e]()
                }
            })
        }
        ,
        i(n, null, [{
            key: "VERSION",
            get: function() {
                return "4.4.1"
            }
        }, {
            key: "Default",
            get: function() {
                return zt
            }
        }, {
            key: "NAME",
            get: function() {
                return Bt
            }
        }, {
            key: "DATA_KEY",
            get: function() {
                return Ut
            }
        }, {
            key: "Event",
            get: function() {
                return Xt
            }
        }, {
            key: "EVENT_KEY",
            get: function() {
                return Vt
            }
        }, {
            key: "DefaultType",
            get: function() {
                return Yt
            }
        }]),
        n
    }(Wt);
    t.fn[Bt] = Gt._jQueryInterface,
    t.fn[Bt].Constructor = Gt,
    t.fn[Bt].noConflict = function() {
        return t.fn[Bt] = Qt,
        Gt._jQueryInterface
    }
    ;
    var Jt = "scrollspy"
      , Zt = "bs.scrollspy"
      , en = "." + Zt
      , tn = t.fn[Jt]
      , nn = {
        offset: 10,
        method: "auto",
        target: ""
    }
      , rn = {
        offset: "number",
        method: "string",
        target: "(string|element)"
    }
      , on = {
        ACTIVATE: "activate" + en,
        SCROLL: "scroll" + en,
        LOAD_DATA_API: "load" + en + ".data-api"
    }
      , sn = "active"
      , an = ".nav, .list-group"
      , ln = ".nav-link"
      , cn = ".list-group-item"
      , un = ".dropdown-item"
      , fn = "position"
      , hn = function() {
        function e(e, n) {
            var i = this;
            this._element = e,
            this._scrollElement = "BODY" === e.tagName ? window : e,
            this._config = this._getConfig(n),
            this._selector = this._config.target + " " + ln + "," + this._config.target + " " + cn + "," + this._config.target + " " + un,
            this._offsets = [],
            this._targets = [],
            this._activeTarget = null,
            this._scrollHeight = 0,
            t(this._scrollElement).on(on.SCROLL, function(e) {
                return i._process(e)
            }),
            this.refresh(),
            this._process()
        }
        var n = e.prototype;
        return n.refresh = function() {
            var e = this
              , n = this._scrollElement === this._scrollElement.window ? "offset" : fn
              , i = "auto" === this._config.method ? n : this._config.method
              , r = i === fn ? this._getScrollTop() : 0;
            this._offsets = [],
            this._targets = [],
            this._scrollHeight = this._getScrollHeight(),
            [].slice.call(document.querySelectorAll(this._selector)).map(function(e) {
                var n, o = a.getSelectorFromElement(e);
                if (o && (n = document.querySelector(o)),
                n) {
                    var s = n.getBoundingClientRect();
                    if (s.width || s.height)
                        return [t(n)[i]().top + r, o]
                }
                return null
            }).filter(function(e) {
                return e
            }).sort(function(e, t) {
                return e[0] - t[0]
            }).forEach(function(t) {
                e._offsets.push(t[0]),
                e._targets.push(t[1])
            })
        }
        ,
        n.dispose = function() {
            t.removeData(this._element, Zt),
            t(this._scrollElement).off(en),
            this._element = null,
            this._scrollElement = null,
            this._config = null,
            this._selector = null,
            this._offsets = null,
            this._targets = null,
            this._activeTarget = null,
            this._scrollHeight = null
        }
        ,
        n._getConfig = function(e) {
            if ("string" != typeof (e = o({}, nn, {}, "object" == typeof e && e ? e : {})).target) {
                var n = t(e.target).attr("id");
                n || (n = a.getUID(Jt),
                t(e.target).attr("id", n)),
                e.target = "#" + n
            }
            return a.typeCheckConfig(Jt, e, rn),
            e
        }
        ,
        n._getScrollTop = function() {
            return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop
        }
        ,
        n._getScrollHeight = function() {
            return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
        }
        ,
        n._getOffsetHeight = function() {
            return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height
        }
        ,
        n._process = function() {
            var e = this._getScrollTop() + this._config.offset
              , t = this._getScrollHeight()
              , n = this._config.offset + t - this._getOffsetHeight();
            if (this._scrollHeight !== t && this.refresh(),
            n <= e) {
                var i = this._targets[this._targets.length - 1];
                this._activeTarget !== i && this._activate(i)
            } else {
                if (this._activeTarget && e < this._offsets[0] && 0 < this._offsets[0])
                    return this._activeTarget = null,
                    void this._clear();
                for (var r = this._offsets.length; r--; )
                    this._activeTarget !== this._targets[r] && e >= this._offsets[r] && (void 0 === this._offsets[r + 1] || e < this._offsets[r + 1]) && this._activate(this._targets[r])
            }
        }
        ,
        n._activate = function(e) {
            this._activeTarget = e,
            this._clear();
            var n = this._selector.split(",").map(function(t) {
                return t + '[data-target="' + e + '"],' + t + '[href="' + e + '"]'
            })
              , i = t([].slice.call(document.querySelectorAll(n.join(","))));
            i.hasClass("dropdown-item") ? (i.closest(".dropdown").find(".dropdown-toggle").addClass(sn),
            i.addClass(sn)) : (i.addClass(sn),
            i.parents(an).prev(ln + ", " + cn).addClass(sn),
            i.parents(an).prev(".nav-item").children(ln).addClass(sn)),
            t(this._scrollElement).trigger(on.ACTIVATE, {
                relatedTarget: e
            })
        }
        ,
        n._clear = function() {
            [].slice.call(document.querySelectorAll(this._selector)).filter(function(e) {
                return e.classList.contains(sn)
            }).forEach(function(e) {
                return e.classList.remove(sn)
            })
        }
        ,
        e._jQueryInterface = function(n) {
            return this.each(function() {
                var i = t(this).data(Zt);
                if (i || (i = new e(this,"object" == typeof n && n),
                t(this).data(Zt, i)),
                "string" == typeof n) {
                    if (void 0 === i[n])
                        throw new TypeError('No method named "' + n + '"');
                    i[n]()
                }
            })
        }
        ,
        i(e, null, [{
            key: "VERSION",
            get: function() {
                return "4.4.1"
            }
        }, {
            key: "Default",
            get: function() {
                return nn
            }
        }]),
        e
    }();
    t(window).on(on.LOAD_DATA_API, function() {
        for (var e = [].slice.call(document.querySelectorAll('[data-spy="scroll"]')), n = e.length; n--; ) {
            var i = t(e[n]);
            hn._jQueryInterface.call(i, i.data())
        }
    }),
    t.fn[Jt] = hn._jQueryInterface,
    t.fn[Jt].Constructor = hn,
    t.fn[Jt].noConflict = function() {
        return t.fn[Jt] = tn,
        hn._jQueryInterface
    }
    ;
    var dn = "bs.tab"
      , pn = "." + dn
      , gn = t.fn.tab
      , mn = {
        HIDE: "hide" + pn,
        HIDDEN: "hidden" + pn,
        SHOW: "show" + pn,
        SHOWN: "shown" + pn,
        CLICK_DATA_API: "click" + pn + ".data-api"
    }
      , vn = "active"
      , yn = ".active"
      , _n = "> li > .active"
      , bn = function() {
        function e(e) {
            this._element = e
        }
        var n = e.prototype;
        return n.show = function() {
            var e = this;
            if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && t(this._element).hasClass(vn) || t(this._element).hasClass("disabled"))) {
                var n, i, r = t(this._element).closest(".nav, .list-group")[0], o = a.getSelectorFromElement(this._element);
                if (r) {
                    var s = "UL" === r.nodeName || "OL" === r.nodeName ? _n : yn;
                    i = (i = t.makeArray(t(r).find(s)))[i.length - 1]
                }
                var l = t.Event(mn.HIDE, {
                    relatedTarget: this._element
                })
                  , c = t.Event(mn.SHOW, {
                    relatedTarget: i
                });
                if (i && t(i).trigger(l),
                t(this._element).trigger(c),
                !c.isDefaultPrevented() && !l.isDefaultPrevented()) {
                    o && (n = document.querySelector(o)),
                    this._activate(this._element, r);
                    var u = function() {
                        var n = t.Event(mn.HIDDEN, {
                            relatedTarget: e._element
                        })
                          , r = t.Event(mn.SHOWN, {
                            relatedTarget: i
                        });
                        t(i).trigger(n),
                        t(e._element).trigger(r)
                    };
                    n ? this._activate(n, n.parentNode, u) : u()
                }
            }
        }
        ,
        n.dispose = function() {
            t.removeData(this._element, dn),
            this._element = null
        }
        ,
        n._activate = function(e, n, i) {
            function r() {
                return o._transitionComplete(e, s, i)
            }
            var o = this
              , s = (!n || "UL" !== n.nodeName && "OL" !== n.nodeName ? t(n).children(yn) : t(n).find(_n))[0]
              , l = i && s && t(s).hasClass("fade");
            if (s && l) {
                var c = a.getTransitionDurationFromElement(s);
                t(s).removeClass("show").one(a.TRANSITION_END, r).emulateTransitionEnd(c)
            } else
                r()
        }
        ,
        n._transitionComplete = function(e, n, i) {
            if (n) {
                t(n).removeClass(vn);
                var r = t(n.parentNode).find("> .dropdown-menu .active")[0];
                r && t(r).removeClass(vn),
                "tab" === n.getAttribute("role") && n.setAttribute("aria-selected", !1)
            }
            if (t(e).addClass(vn),
            "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !0),
            a.reflow(e),
            e.classList.contains("fade") && e.classList.add("show"),
            e.parentNode && t(e.parentNode).hasClass("dropdown-menu")) {
                var o = t(e).closest(".dropdown")[0];
                if (o) {
                    var s = [].slice.call(o.querySelectorAll(".dropdown-toggle"));
                    t(s).addClass(vn)
                }
                e.setAttribute("aria-expanded", !0)
            }
            i && i()
        }
        ,
        e._jQueryInterface = function(n) {
            return this.each(function() {
                var i = t(this)
                  , r = i.data(dn);
                if (r || (r = new e(this),
                i.data(dn, r)),
                "string" == typeof n) {
                    if (void 0 === r[n])
                        throw new TypeError('No method named "' + n + '"');
                    r[n]()
                }
            })
        }
        ,
        i(e, null, [{
            key: "VERSION",
            get: function() {
                return "4.4.1"
            }
        }]),
        e
    }();
    t(document).on(mn.CLICK_DATA_API, '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]', function(e) {
        e.preventDefault(),
        bn._jQueryInterface.call(t(this), "show")
    }),
    t.fn.tab = bn._jQueryInterface,
    t.fn.tab.Constructor = bn,
    t.fn.tab.noConflict = function() {
        return t.fn.tab = gn,
        bn._jQueryInterface
    }
    ;
    var En = "toast"
      , wn = "bs.toast"
      , Cn = "." + wn
      , Tn = t.fn[En]
      , xn = {
        CLICK_DISMISS: "click.dismiss" + Cn,
        HIDE: "hide" + Cn,
        HIDDEN: "hidden" + Cn,
        SHOW: "show" + Cn,
        SHOWN: "shown" + Cn
    }
      , Sn = "hide"
      , Dn = "show"
      , An = "showing"
      , Nn = {
        animation: "boolean",
        autohide: "boolean",
        delay: "number"
    }
      , In = {
        animation: !0,
        autohide: !0,
        delay: 500
    }
      , kn = function() {
        function e(e, t) {
            this._element = e,
            this._config = this._getConfig(t),
            this._timeout = null,
            this._setListeners()
        }
        var n = e.prototype;
        return n.show = function() {
            var e = this
              , n = t.Event(xn.SHOW);
            if (t(this._element).trigger(n),
            !n.isDefaultPrevented()) {
                this._config.animation && this._element.classList.add("fade");
                var i = function() {
                    e._element.classList.remove(An),
                    e._element.classList.add(Dn),
                    t(e._element).trigger(xn.SHOWN),
                    e._config.autohide && (e._timeout = setTimeout(function() {
                        e.hide()
                    }, e._config.delay))
                };
                if (this._element.classList.remove(Sn),
                a.reflow(this._element),
                this._element.classList.add(An),
                this._config.animation) {
                    var r = a.getTransitionDurationFromElement(this._element);
                    t(this._element).one(a.TRANSITION_END, i).emulateTransitionEnd(r)
                } else
                    i()
            }
        }
        ,
        n.hide = function() {
            if (this._element.classList.contains(Dn)) {
                var e = t.Event(xn.HIDE);
                t(this._element).trigger(e),
                e.isDefaultPrevented() || this._close()
            }
        }
        ,
        n.dispose = function() {
            clearTimeout(this._timeout),
            this._timeout = null,
            this._element.classList.contains(Dn) && this._element.classList.remove(Dn),
            t(this._element).off(xn.CLICK_DISMISS),
            t.removeData(this._element, wn),
            this._element = null,
            this._config = null
        }
        ,
        n._getConfig = function(e) {
            return e = o({}, In, {}, t(this._element).data(), {}, "object" == typeof e && e ? e : {}),
            a.typeCheckConfig(En, e, this.constructor.DefaultType),
            e
        }
        ,
        n._setListeners = function() {
            var e = this;
            t(this._element).on(xn.CLICK_DISMISS, '[data-dismiss="toast"]', function() {
                return e.hide()
            })
        }
        ,
        n._close = function() {
            function e() {
                n._element.classList.add(Sn),
                t(n._element).trigger(xn.HIDDEN)
            }
            var n = this;
            if (this._element.classList.remove(Dn),
            this._config.animation) {
                var i = a.getTransitionDurationFromElement(this._element);
                t(this._element).one(a.TRANSITION_END, e).emulateTransitionEnd(i)
            } else
                e()
        }
        ,
        e._jQueryInterface = function(n) {
            return this.each(function() {
                var i = t(this)
                  , r = i.data(wn);
                if (r || (r = new e(this,"object" == typeof n && n),
                i.data(wn, r)),
                "string" == typeof n) {
                    if (void 0 === r[n])
                        throw new TypeError('No method named "' + n + '"');
                    r[n](this)
                }
            })
        }
        ,
        i(e, null, [{
            key: "VERSION",
            get: function() {
                return "4.4.1"
            }
        }, {
            key: "DefaultType",
            get: function() {
                return Nn
            }
        }, {
            key: "Default",
            get: function() {
                return In
            }
        }]),
        e
    }();
    t.fn[En] = kn._jQueryInterface,
    t.fn[En].Constructor = kn,
    t.fn[En].noConflict = function() {
        return t.fn[En] = Tn,
        kn._jQueryInterface
    }
    ,
    e.Alert = d,
    e.Button = T,
    e.Carousel = q,
    e.Collapse = J,
    e.Dropdown = ot,
    e.Modal = bt,
    e.Popover = Gt,
    e.Scrollspy = hn,
    e.Tab = bn,
    e.Toast = kn,
    e.Tooltip = Wt,
    e.Util = a,
    Object.defineProperty(e, "__esModule", {
        value: !0
    })
}),
$(document).ready(function() {
    console.log("ready!")
});