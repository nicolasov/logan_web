! function e(t, i, n) {
    function r(s, a) {
        if (!i[s]) {
            if (!t[s]) {
                var l = "function" == typeof require && require;
                if (!a && l) return l(s, !0);
                if (o) return o(s, !0);
                var u = new Error("Cannot find module '" + s + "'");
                throw u.code = "MODULE_NOT_FOUND", u
            }
            var d = i[s] = {
                exports: {}
            };
            t[s][0].call(d.exports, function(e) {
                var i = t[s][1][e];
                return r(i ? i : e)
            }, d, d.exports, e, t, i, n)
        }
        return i[s].exports
    }
    for (var o = "function" == typeof require && require, s = 0; s < n.length; s++) r(n[s]);
    return r
}({
    1: [function(e, t, i) {
        ! function(e, i) {
            "use strict";
            "object" == typeof t && "object" == typeof t.exports ? t.exports = e.document ? i(e, !0) : function(e) {
                if (!e.document) throw new Error("jQuery requires a window with a document");
                return i(e)
            } : i(e)
        }("undefined" != typeof window ? window : this, function(e, t) {
            "use strict";

            function i(e, t) {
                t = t || te;
                var i = t.createElement("script");
                i.text = e, t.head.appendChild(i).parentNode.removeChild(i)
            }

            function n(e) {
                var t = !!e && "length" in e && e.length,
                    i = he.type(e);
                return "function" !== i && !he.isWindow(e) && ("array" === i || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
            }

            function r(e, t, i) {
                return he.isFunction(t) ? he.grep(e, function(e, n) {
                    return !!t.call(e, n, e) !== i
                }) : t.nodeType ? he.grep(e, function(e) {
                    return e === t !== i
                }) : "string" != typeof t ? he.grep(e, function(e) {
                    return se.call(t, e) > -1 !== i
                }) : Ce.test(t) ? he.filter(t, e, i) : (t = he.filter(t, e), he.grep(e, function(e) {
                    return se.call(t, e) > -1 !== i && 1 === e.nodeType
                }))
            }

            function o(e, t) {
                for (;
                    (e = e[t]) && 1 !== e.nodeType;);
                return e
            }

            function s(e) {
                var t = {};
                return he.each(e.match(Fe) || [], function(e, i) {
                    t[i] = !0
                }), t
            }

            function a(e) {
                return e
            }

            function l(e) {
                throw e
            }

            function u(e, t, i) {
                var n;
                try {
                    e && he.isFunction(n = e.promise) ? n.call(e).done(t).fail(i) : e && he.isFunction(n = e.then) ? n.call(e, t, i) : t.call(void 0, e)
                } catch (e) {
                    i.call(void 0, e)
                }
            }

            function d() {
                te.removeEventListener("DOMContentLoaded", d), e.removeEventListener("load", d), he.ready()
            }

            function c() {
                this.expando = he.expando + c.uid++
            }

            function p(e) {
                return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : Me.test(e) ? JSON.parse(e) : e)
            }

            function f(e, t, i) {
                var n;
                if (void 0 === i && 1 === e.nodeType)
                    if (n = "data-" + t.replace(He, "-$&").toLowerCase(), i = e.getAttribute(n), "string" == typeof i) {
                        try {
                            i = p(i)
                        } catch (e) {}
                        qe.set(e, t, i)
                    } else i = void 0;
                return i
            }

            function h(e, t, i, n) {
                var r, o = 1,
                    s = 20,
                    a = n ? function() {
                        return n.cur()
                    } : function() {
                        return he.css(e, t, "")
                    },
                    l = a(),
                    u = i && i[3] || (he.cssNumber[t] ? "" : "px"),
                    d = (he.cssNumber[t] || "px" !== u && +l) && Ie.exec(he.css(e, t));
                if (d && d[3] !== u) {
                    u = u || d[3], i = i || [], d = +l || 1;
                    do o = o || ".5", d /= o, he.style(e, t, d + u); while (o !== (o = a() / l) && 1 !== o && --s)
                }
                return i && (d = +d || +l || 0, r = i[1] ? d + (i[1] + 1) * i[2] : +i[2], n && (n.unit = u, n.start = d, n.end = r)), r
            }

            function v(e) {
                var t, i = e.ownerDocument,
                    n = e.nodeName,
                    r = Ve[n];
                return r ? r : (t = i.body.appendChild(i.createElement(n)), r = he.css(t, "display"), t.parentNode.removeChild(t), "none" === r && (r = "block"), Ve[n] = r, r)
            }

            function g(e, t) {
                for (var i, n, r = [], o = 0, s = e.length; o < s; o++) n = e[o], n.style && (i = n.style.display, t ? ("none" === i && (r[o] = Ne.get(n, "display") || null, r[o] || (n.style.display = "")), "" === n.style.display && Re(n) && (r[o] = v(n))) : "none" !== i && (r[o] = "none", Ne.set(n, "display", i)));
                for (o = 0; o < s; o++) null != r[o] && (e[o].style.display = r[o]);
                return e
            }

            function m(e, t) {
                var i;
                return i = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && he.nodeName(e, t) ? he.merge([e], i) : i
            }

            function y(e, t) {
                for (var i = 0, n = e.length; i < n; i++) Ne.set(e[i], "globalEval", !t || Ne.get(t[i], "globalEval"))
            }

            function w(e, t, i, n, r) {
                for (var o, s, a, l, u, d, c = t.createDocumentFragment(), p = [], f = 0, h = e.length; f < h; f++)
                    if (o = e[f], o || 0 === o)
                        if ("object" === he.type(o)) he.merge(p, o.nodeType ? [o] : o);
                        else if (Ge.test(o)) {
                    for (s = s || c.appendChild(t.createElement("div")), a = (Be.exec(o) || ["", ""])[1].toLowerCase(), l = Ye[a] || Ye._default, s.innerHTML = l[1] + he.htmlPrefilter(o) + l[2], d = l[0]; d--;) s = s.lastChild;
                    he.merge(p, s.childNodes), s = c.firstChild, s.textContent = ""
                } else p.push(t.createTextNode(o));
                for (c.textContent = "", f = 0; o = p[f++];)
                    if (n && he.inArray(o, n) > -1) r && r.push(o);
                    else if (u = he.contains(o.ownerDocument, o), s = m(c.appendChild(o), "script"), u && y(s), i)
                    for (d = 0; o = s[d++];) Xe.test(o.type || "") && i.push(o);
                return c
            }

            function b() {
                return !0
            }

            function T() {
                return !1
            }

            function x() {
                try {
                    return te.activeElement
                } catch (e) {}
            }

            function k(e, t, i, n, r, o) {
                var s, a;
                if ("object" == typeof t) {
                    "string" != typeof i && (n = n || i, i = void 0);
                    for (a in t) k(e, a, i, n, t[a], o);
                    return e
                }
                if (null == n && null == r ? (r = i, n = i = void 0) : null == r && ("string" == typeof i ? (r = n, n = void 0) : (r = n, n = i, i = void 0)), r === !1) r = T;
                else if (!r) return e;
                return 1 === o && (s = r, r = function(e) {
                    return he().off(e), s.apply(this, arguments)
                }, r.guid = s.guid || (s.guid = he.guid++)), e.each(function() {
                    he.event.add(this, t, r, n, i)
                })
            }

            function C(e, t) {
                return he.nodeName(e, "table") && he.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e : e
            }

            function S(e) {
                return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
            }

            function $(e) {
                var t = nt.exec(e.type);
                return t ? e.type = t[1] : e.removeAttribute("type"), e
            }

            function E(e, t) {
                var i, n, r, o, s, a, l, u;
                if (1 === t.nodeType) {
                    if (Ne.hasData(e) && (o = Ne.access(e), s = Ne.set(t, o), u = o.events)) {
                        delete s.handle, s.events = {};
                        for (r in u)
                            for (i = 0, n = u[r].length; i < n; i++) he.event.add(t, r, u[r][i])
                    }
                    qe.hasData(e) && (a = qe.access(e), l = he.extend({}, a), qe.set(t, l))
                }
            }

            function A(e, t) {
                var i = t.nodeName.toLowerCase();
                "input" === i && Ue.test(e.type) ? t.checked = e.checked : "input" !== i && "textarea" !== i || (t.defaultValue = e.defaultValue)
            }

            function _(e, t, n, r) {
                t = re.apply([], t);
                var o, s, a, l, u, d, c = 0,
                    p = e.length,
                    f = p - 1,
                    h = t[0],
                    v = he.isFunction(h);
                if (v || p > 1 && "string" == typeof h && !pe.checkClone && it.test(h)) return e.each(function(i) {
                    var o = e.eq(i);
                    v && (t[0] = h.call(this, i, o.html())), _(o, t, n, r)
                });
                if (p && (o = w(t, e[0].ownerDocument, !1, e, r), s = o.firstChild, 1 === o.childNodes.length && (o = s), s || r)) {
                    for (a = he.map(m(o, "script"), S), l = a.length; c < p; c++) u = o, c !== f && (u = he.clone(u, !0, !0), l && he.merge(a, m(u, "script"))), n.call(e[c], u, c);
                    if (l)
                        for (d = a[a.length - 1].ownerDocument, he.map(a, $), c = 0; c < l; c++) u = a[c], Xe.test(u.type || "") && !Ne.access(u, "globalEval") && he.contains(d, u) && (u.src ? he._evalUrl && he._evalUrl(u.src) : i(u.textContent.replace(rt, ""), d))
                }
                return e
            }

            function F(e, t, i) {
                for (var n, r = t ? he.filter(t, e) : e, o = 0; null != (n = r[o]); o++) i || 1 !== n.nodeType || he.cleanData(m(n)), n.parentNode && (i && he.contains(n.ownerDocument, n) && y(m(n, "script")), n.parentNode.removeChild(n));
                return e
            }

            function D(e, t, i) {
                var n, r, o, s, a = e.style;
                return i = i || at(e), i && (s = i.getPropertyValue(t) || i[t], "" !== s || he.contains(e.ownerDocument, e) || (s = he.style(e, t)), !pe.pixelMarginRight() && st.test(s) && ot.test(t) && (n = a.width, r = a.minWidth, o = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = i.width, a.width = n, a.minWidth = r, a.maxWidth = o)), void 0 !== s ? s + "" : s
            }

            function O(e, t) {
                return {
                    get: function() {
                        return e() ? void delete this.get : (this.get = t).apply(this, arguments)
                    }
                }
            }

            function j(e) {
                if (e in pt) return e;
                for (var t = e[0].toUpperCase() + e.slice(1), i = ct.length; i--;)
                    if (e = ct[i] + t, e in pt) return e
            }

            function P(e, t, i) {
                var n = Ie.exec(t);
                return n ? Math.max(0, n[2] - (i || 0)) + (n[3] || "px") : t
            }

            function N(e, t, i, n, r) {
                var o, s = 0;
                for (o = i === (n ? "border" : "content") ? 4 : "width" === t ? 1 : 0; o < 4; o += 2) "margin" === i && (s += he.css(e, i + ze[o], !0, r)), n ? ("content" === i && (s -= he.css(e, "padding" + ze[o], !0, r)), "margin" !== i && (s -= he.css(e, "border" + ze[o] + "Width", !0, r))) : (s += he.css(e, "padding" + ze[o], !0, r), "padding" !== i && (s += he.css(e, "border" + ze[o] + "Width", !0, r)));
                return s
            }

            function q(e, t, i) {
                var n, r = !0,
                    o = at(e),
                    s = "border-box" === he.css(e, "boxSizing", !1, o);
                if (e.getClientRects().length && (n = e.getBoundingClientRect()[t]), n <= 0 || null == n) {
                    if (n = D(e, t, o), (n < 0 || null == n) && (n = e.style[t]), st.test(n)) return n;
                    r = s && (pe.boxSizingReliable() || n === e.style[t]), n = parseFloat(n) || 0
                }
                return n + N(e, t, i || (s ? "border" : "content"), r, o) + "px"
            }

            function M(e, t, i, n, r) {
                return new M.prototype.init(e, t, i, n, r)
            }

            function H() {
                ht && (e.requestAnimationFrame(H), he.fx.tick())
            }

            function L() {
                return e.setTimeout(function() {
                    ft = void 0
                }), ft = he.now()
            }

            function I(e, t) {
                var i, n = 0,
                    r = {
                        height: e
                    };
                for (t = t ? 1 : 0; n < 4; n += 2 - t) i = ze[n], r["margin" + i] = r["padding" + i] = e;
                return t && (r.opacity = r.width = e), r
            }

            function z(e, t, i) {
                for (var n, r = (V.tweeners[t] || []).concat(V.tweeners["*"]), o = 0, s = r.length; o < s; o++)
                    if (n = r[o].call(i, t, e)) return n
            }

            function R(e, t, i) {
                var n, r, o, s, a, l, u, d, c = "width" in t || "height" in t,
                    p = this,
                    f = {},
                    h = e.style,
                    v = e.nodeType && Re(e),
                    m = Ne.get(e, "fxshow");
                i.queue || (s = he._queueHooks(e, "fx"), null == s.unqueued && (s.unqueued = 0, a = s.empty.fire, s.empty.fire = function() {
                    s.unqueued || a()
                }), s.unqueued++, p.always(function() {
                    p.always(function() {
                        s.unqueued--, he.queue(e, "fx").length || s.empty.fire()
                    })
                }));
                for (n in t)
                    if (r = t[n], vt.test(r)) {
                        if (delete t[n], o = o || "toggle" === r, r === (v ? "hide" : "show")) {
                            if ("show" !== r || !m || void 0 === m[n]) continue;
                            v = !0
                        }
                        f[n] = m && m[n] || he.style(e, n)
                    }
                if (l = !he.isEmptyObject(t), l || !he.isEmptyObject(f)) {
                    c && 1 === e.nodeType && (i.overflow = [h.overflow, h.overflowX, h.overflowY], u = m && m.display, null == u && (u = Ne.get(e, "display")), d = he.css(e, "display"), "none" === d && (u ? d = u : (g([e], !0), u = e.style.display || u, d = he.css(e, "display"), g([e]))), ("inline" === d || "inline-block" === d && null != u) && "none" === he.css(e, "float") && (l || (p.done(function() {
                        h.display = u
                    }), null == u && (d = h.display, u = "none" === d ? "" : d)), h.display = "inline-block")), i.overflow && (h.overflow = "hidden", p.always(function() {
                        h.overflow = i.overflow[0], h.overflowX = i.overflow[1], h.overflowY = i.overflow[2]
                    })), l = !1;
                    for (n in f) l || (m ? "hidden" in m && (v = m.hidden) : m = Ne.access(e, "fxshow", {
                        display: u
                    }), o && (m.hidden = !v), v && g([e], !0), p.done(function() {
                        v || g([e]), Ne.remove(e, "fxshow");
                        for (n in f) he.style(e, n, f[n])
                    })), l = z(v ? m[n] : 0, n, p), n in m || (m[n] = l.start, v && (l.end = l.start, l.start = 0))
                }
            }

            function W(e, t) {
                var i, n, r, o, s;
                for (i in e)
                    if (n = he.camelCase(i), r = t[n], o = e[i], he.isArray(o) && (r = o[1], o = e[i] = o[0]), i !== n && (e[n] = o, delete e[i]), s = he.cssHooks[n], s && "expand" in s) {
                        o = s.expand(o), delete e[n];
                        for (i in o) i in e || (e[i] = o[i], t[i] = r)
                    } else t[n] = r
            }

            function V(e, t, i) {
                var n, r, o = 0,
                    s = V.prefilters.length,
                    a = he.Deferred().always(function() {
                        delete l.elem
                    }),
                    l = function() {
                        if (r) return !1;
                        for (var t = ft || L(), i = Math.max(0, u.startTime + u.duration - t), n = i / u.duration || 0, o = 1 - n, s = 0, l = u.tweens.length; s < l; s++) u.tweens[s].run(o);
                        return a.notifyWith(e, [u, o, i]), o < 1 && l ? i : (a.resolveWith(e, [u]), !1)
                    },
                    u = a.promise({
                        elem: e,
                        props: he.extend({}, t),
                        opts: he.extend(!0, {
                            specialEasing: {},
                            easing: he.easing._default
                        }, i),
                        originalProperties: t,
                        originalOptions: i,
                        startTime: ft || L(),
                        duration: i.duration,
                        tweens: [],
                        createTween: function(t, i) {
                            var n = he.Tween(e, u.opts, t, i, u.opts.specialEasing[t] || u.opts.easing);
                            return u.tweens.push(n), n
                        },
                        stop: function(t) {
                            var i = 0,
                                n = t ? u.tweens.length : 0;
                            if (r) return this;
                            for (r = !0; i < n; i++) u.tweens[i].run(1);
                            return t ? (a.notifyWith(e, [u, 1, 0]), a.resolveWith(e, [u, t])) : a.rejectWith(e, [u, t]), this
                        }
                    }),
                    d = u.props;
                for (W(d, u.opts.specialEasing); o < s; o++)
                    if (n = V.prefilters[o].call(u, e, d, u.opts)) return he.isFunction(n.stop) && (he._queueHooks(u.elem, u.opts.queue).stop = he.proxy(n.stop, n)), n;
                return he.map(d, z, u), he.isFunction(u.opts.start) && u.opts.start.call(e, u), he.fx.timer(he.extend(l, {
                    elem: e,
                    anim: u,
                    queue: u.opts.queue
                })), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
            }

            function U(e) {
                var t = e.match(Fe) || [];
                return t.join(" ")
            }

            function B(e) {
                return e.getAttribute && e.getAttribute("class") || ""
            }

            function X(e, t, i, n) {
                var r;
                if (he.isArray(t)) he.each(t, function(t, r) {
                    i || $t.test(e) ? n(e, r) : X(e + "[" + ("object" == typeof r && null != r ? t : "") + "]", r, i, n)
                });
                else if (i || "object" !== he.type(t)) n(e, t);
                else
                    for (r in t) X(e + "[" + r + "]", t[r], i, n)
            }

            function Y(e) {
                return function(t, i) {
                    "string" != typeof t && (i = t, t = "*");
                    var n, r = 0,
                        o = t.toLowerCase().match(Fe) || [];
                    if (he.isFunction(i))
                        for (; n = o[r++];) "+" === n[0] ? (n = n.slice(1) || "*", (e[n] = e[n] || []).unshift(i)) : (e[n] = e[n] || []).push(i)
                }
            }

            function G(e, t, i, n) {
                function r(a) {
                    var l;
                    return o[a] = !0, he.each(e[a] || [], function(e, a) {
                        var u = a(t, i, n);
                        return "string" != typeof u || s || o[u] ? s ? !(l = u) : void 0 : (t.dataTypes.unshift(u), r(u), !1)
                    }), l
                }
                var o = {},
                    s = e === Ht;
                return r(t.dataTypes[0]) || !o["*"] && r("*")
            }

            function J(e, t) {
                var i, n, r = he.ajaxSettings.flatOptions || {};
                for (i in t) void 0 !== t[i] && ((r[i] ? e : n || (n = {}))[i] = t[i]);
                return n && he.extend(!0, e, n), e
            }

            function Q(e, t, i) {
                for (var n, r, o, s, a = e.contents, l = e.dataTypes;
                    "*" === l[0];) l.shift(), void 0 === n && (n = e.mimeType || t.getResponseHeader("Content-Type"));
                if (n)
                    for (r in a)
                        if (a[r] && a[r].test(n)) {
                            l.unshift(r);
                            break
                        }
                if (l[0] in i) o = l[0];
                else {
                    for (r in i) {
                        if (!l[0] || e.converters[r + " " + l[0]]) {
                            o = r;
                            break
                        }
                        s || (s = r)
                    }
                    o = o || s
                }
                if (o) return o !== l[0] && l.unshift(o), i[o]
            }

            function K(e, t, i, n) {
                var r, o, s, a, l, u = {},
                    d = e.dataTypes.slice();
                if (d[1])
                    for (s in e.converters) u[s.toLowerCase()] = e.converters[s];
                for (o = d.shift(); o;)
                    if (e.responseFields[o] && (i[e.responseFields[o]] = t), !l && n && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = o, o = d.shift())
                        if ("*" === o) o = l;
                        else if ("*" !== l && l !== o) {
                    if (s = u[l + " " + o] || u["* " + o], !s)
                        for (r in u)
                            if (a = r.split(" "), a[1] === o && (s = u[l + " " + a[0]] || u["* " + a[0]])) {
                                s === !0 ? s = u[r] : u[r] !== !0 && (o = a[0], d.unshift(a[1]));
                                break
                            }
                    if (s !== !0)
                        if (s && e.throws) t = s(t);
                        else try {
                            t = s(t)
                        } catch (e) {
                            return {
                                state: "parsererror",
                                error: s ? e : "No conversion from " + l + " to " + o
                            }
                        }
                }
                return {
                    state: "success",
                    data: t
                }
            }

            function Z(e) {
                return he.isWindow(e) ? e : 9 === e.nodeType && e.defaultView
            }
            var ee = [],
                te = e.document,
                ie = Object.getPrototypeOf,
                ne = ee.slice,
                re = ee.concat,
                oe = ee.push,
                se = ee.indexOf,
                ae = {},
                le = ae.toString,
                ue = ae.hasOwnProperty,
                de = ue.toString,
                ce = de.call(Object),
                pe = {},
                fe = "3.1.1",
                he = function(e, t) {
                    return new he.fn.init(e, t)
                },
                ve = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
                ge = /^-ms-/,
                me = /-([a-z])/g,
                ye = function(e, t) {
                    return t.toUpperCase()
                };
            he.fn = he.prototype = {
                jquery: fe,
                constructor: he,
                length: 0,
                toArray: function() {
                    return ne.call(this)
                },
                get: function(e) {
                    return null == e ? ne.call(this) : e < 0 ? this[e + this.length] : this[e]
                },
                pushStack: function(e) {
                    var t = he.merge(this.constructor(), e);
                    return t.prevObject = this, t
                },
                each: function(e) {
                    return he.each(this, e)
                },
                map: function(e) {
                    return this.pushStack(he.map(this, function(t, i) {
                        return e.call(t, i, t)
                    }))
                },
                slice: function() {
                    return this.pushStack(ne.apply(this, arguments))
                },
                first: function() {
                    return this.eq(0)
                },
                last: function() {
                    return this.eq(-1)
                },
                eq: function(e) {
                    var t = this.length,
                        i = +e + (e < 0 ? t : 0);
                    return this.pushStack(i >= 0 && i < t ? [this[i]] : [])
                },
                end: function() {
                    return this.prevObject || this.constructor()
                },
                push: oe,
                sort: ee.sort,
                splice: ee.splice
            }, he.extend = he.fn.extend = function() {
                var e, t, i, n, r, o, s = arguments[0] || {},
                    a = 1,
                    l = arguments.length,
                    u = !1;
                for ("boolean" == typeof s && (u = s, s = arguments[a] || {}, a++), "object" == typeof s || he.isFunction(s) || (s = {}), a === l && (s = this, a--); a < l; a++)
                    if (null != (e = arguments[a]))
                        for (t in e) i = s[t], n = e[t], s !== n && (u && n && (he.isPlainObject(n) || (r = he.isArray(n))) ? (r ? (r = !1, o = i && he.isArray(i) ? i : []) : o = i && he.isPlainObject(i) ? i : {}, s[t] = he.extend(u, o, n)) : void 0 !== n && (s[t] = n));
                return s
            }, he.extend({
                expando: "jQuery" + (fe + Math.random()).replace(/\D/g, ""),
                isReady: !0,
                error: function(e) {
                    throw new Error(e)
                },
                noop: function() {},
                isFunction: function(e) {
                    return "function" === he.type(e)
                },
                isArray: Array.isArray,
                isWindow: function(e) {
                    return null != e && e === e.window
                },
                isNumeric: function(e) {
                    var t = he.type(e);
                    return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
                },
                isPlainObject: function(e) {
                    var t, i;
                    return !(!e || "[object Object]" !== le.call(e)) && (!(t = ie(e)) || (i = ue.call(t, "constructor") && t.constructor, "function" == typeof i && de.call(i) === ce))
                },
                isEmptyObject: function(e) {
                    var t;
                    for (t in e) return !1;
                    return !0
                },
                type: function(e) {
                    return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? ae[le.call(e)] || "object" : typeof e
                },
                globalEval: function(e) {
                    i(e)
                },
                camelCase: function(e) {
                    return e.replace(ge, "ms-").replace(me, ye)
                },
                nodeName: function(e, t) {
                    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
                },
                each: function(e, t) {
                    var i, r = 0;
                    if (n(e))
                        for (i = e.length; r < i && t.call(e[r], r, e[r]) !== !1; r++);
                    else
                        for (r in e)
                            if (t.call(e[r], r, e[r]) === !1) break; return e
                },
                trim: function(e) {
                    return null == e ? "" : (e + "").replace(ve, "")
                },
                makeArray: function(e, t) {
                    var i = t || [];
                    return null != e && (n(Object(e)) ? he.merge(i, "string" == typeof e ? [e] : e) : oe.call(i, e)), i
                },
                inArray: function(e, t, i) {
                    return null == t ? -1 : se.call(t, e, i)
                },
                merge: function(e, t) {
                    for (var i = +t.length, n = 0, r = e.length; n < i; n++) e[r++] = t[n];
                    return e.length = r, e
                },
                grep: function(e, t, i) {
                    for (var n, r = [], o = 0, s = e.length, a = !i; o < s; o++) n = !t(e[o], o), n !== a && r.push(e[o]);
                    return r
                },
                map: function(e, t, i) {
                    var r, o, s = 0,
                        a = [];
                    if (n(e))
                        for (r = e.length; s < r; s++) o = t(e[s], s, i), null != o && a.push(o);
                    else
                        for (s in e) o = t(e[s], s, i), null != o && a.push(o);
                    return re.apply([], a)
                },
                guid: 1,
                proxy: function(e, t) {
                    var i, n, r;
                    if ("string" == typeof t && (i = e[t], t = e, e = i), he.isFunction(e)) return n = ne.call(arguments, 2), r = function() {
                        return e.apply(t || this, n.concat(ne.call(arguments)))
                    }, r.guid = e.guid = e.guid || he.guid++, r
                },
                now: Date.now,
                support: pe
            }), "function" == typeof Symbol && (he.fn[Symbol.iterator] = ee[Symbol.iterator]), he.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
                ae["[object " + t + "]"] = t.toLowerCase()
            });
            var we = function(e) {
                function t(e, t, i, n) {
                    var r, o, s, a, l, u, d, p = t && t.ownerDocument,
                        h = t ? t.nodeType : 9;
                    if (i = i || [], "string" != typeof e || !e || 1 !== h && 9 !== h && 11 !== h) return i;
                    if (!n && ((t ? t.ownerDocument || t : z) !== j && O(t), t = t || j, N)) {
                        if (11 !== h && (l = me.exec(e)))
                            if (r = l[1]) {
                                if (9 === h) {
                                    if (!(s = t.getElementById(r))) return i;
                                    if (s.id === r) return i.push(s), i
                                } else if (p && (s = p.getElementById(r)) && L(t, s) && s.id === r) return i.push(s), i
                            } else {
                                if (l[2]) return K.apply(i, t.getElementsByTagName(e)), i;
                                if ((r = l[3]) && x.getElementsByClassName && t.getElementsByClassName) return K.apply(i, t.getElementsByClassName(r)), i
                            }
                        if (x.qsa && !B[e + " "] && (!q || !q.test(e))) {
                            if (1 !== h) p = t, d = e;
                            else if ("object" !== t.nodeName.toLowerCase()) {
                                for ((a = t.getAttribute("id")) ? a = a.replace(Te, xe) : t.setAttribute("id", a = I), u = $(e), o = u.length; o--;) u[o] = "#" + a + " " + f(u[o]);
                                d = u.join(","), p = ye.test(e) && c(t.parentNode) || t
                            }
                            if (d) try {
                                return K.apply(i, p.querySelectorAll(d)), i
                            } catch (e) {} finally {
                                a === I && t.removeAttribute("id")
                            }
                        }
                    }
                    return A(e.replace(ae, "$1"), t, i, n)
                }

                function i() {
                    function e(i, n) {
                        return t.push(i + " ") > k.cacheLength && delete e[t.shift()], e[i + " "] = n
                    }
                    var t = [];
                    return e
                }

                function n(e) {
                    return e[I] = !0, e
                }

                function r(e) {
                    var t = j.createElement("fieldset");
                    try {
                        return !!e(t)
                    } catch (e) {
                        return !1
                    } finally {
                        t.parentNode && t.parentNode.removeChild(t), t = null
                    }
                }

                function o(e, t) {
                    for (var i = e.split("|"), n = i.length; n--;) k.attrHandle[i[n]] = t
                }

                function s(e, t) {
                    var i = t && e,
                        n = i && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
                    if (n) return n;
                    if (i)
                        for (; i = i.nextSibling;)
                            if (i === t) return -1;
                    return e ? 1 : -1
                }

                function a(e) {
                    return function(t) {
                        var i = t.nodeName.toLowerCase();
                        return "input" === i && t.type === e
                    }
                }

                function l(e) {
                    return function(t) {
                        var i = t.nodeName.toLowerCase();
                        return ("input" === i || "button" === i) && t.type === e
                    }
                }

                function u(e) {
                    return function(t) {
                        return "form" in t ? t.parentNode && t.disabled === !1 ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && Ce(t) === e : t.disabled === e : "label" in t && t.disabled === e
                    }
                }

                function d(e) {
                    return n(function(t) {
                        return t = +t, n(function(i, n) {
                            for (var r, o = e([], i.length, t), s = o.length; s--;) i[r = o[s]] && (i[r] = !(n[r] = i[r]))
                        })
                    })
                }

                function c(e) {
                    return e && "undefined" != typeof e.getElementsByTagName && e
                }

                function p() {}

                function f(e) {
                    for (var t = 0, i = e.length, n = ""; t < i; t++) n += e[t].value;
                    return n
                }

                function h(e, t, i) {
                    var n = t.dir,
                        r = t.next,
                        o = r || n,
                        s = i && "parentNode" === o,
                        a = W++;
                    return t.first ? function(t, i, r) {
                        for (; t = t[n];)
                            if (1 === t.nodeType || s) return e(t, i, r);
                        return !1
                    } : function(t, i, l) {
                        var u, d, c, p = [R, a];
                        if (l) {
                            for (; t = t[n];)
                                if ((1 === t.nodeType || s) && e(t, i, l)) return !0
                        } else
                            for (; t = t[n];)
                                if (1 === t.nodeType || s)
                                    if (c = t[I] || (t[I] = {}), d = c[t.uniqueID] || (c[t.uniqueID] = {}), r && r === t.nodeName.toLowerCase()) t = t[n] || t;
                                    else {
                                        if ((u = d[o]) && u[0] === R && u[1] === a) return p[2] = u[2];
                                        if (d[o] = p, p[2] = e(t, i, l)) return !0
                                    } return !1
                    }
                }

                function v(e) {
                    return e.length > 1 ? function(t, i, n) {
                        for (var r = e.length; r--;)
                            if (!e[r](t, i, n)) return !1;
                        return !0
                    } : e[0]
                }

                function g(e, i, n) {
                    for (var r = 0, o = i.length; r < o; r++) t(e, i[r], n);
                    return n
                }

                function m(e, t, i, n, r) {
                    for (var o, s = [], a = 0, l = e.length, u = null != t; a < l; a++)(o = e[a]) && (i && !i(o, n, r) || (s.push(o), u && t.push(a)));
                    return s
                }

                function y(e, t, i, r, o, s) {
                    return r && !r[I] && (r = y(r)), o && !o[I] && (o = y(o, s)), n(function(n, s, a, l) {
                        var u, d, c, p = [],
                            f = [],
                            h = s.length,
                            v = n || g(t || "*", a.nodeType ? [a] : a, []),
                            y = !e || !n && t ? v : m(v, p, e, a, l),
                            w = i ? o || (n ? e : h || r) ? [] : s : y;
                        if (i && i(y, w, a, l), r)
                            for (u = m(w, f), r(u, [], a, l), d = u.length; d--;)(c = u[d]) && (w[f[d]] = !(y[f[d]] = c));
                        if (n) {
                            if (o || e) {
                                if (o) {
                                    for (u = [], d = w.length; d--;)(c = w[d]) && u.push(y[d] = c);
                                    o(null, w = [], u, l)
                                }
                                for (d = w.length; d--;)(c = w[d]) && (u = o ? ee(n, c) : p[d]) > -1 && (n[u] = !(s[u] = c))
                            }
                        } else w = m(w === s ? w.splice(h, w.length) : w), o ? o(null, s, w, l) : K.apply(s, w)
                    })
                }

                function w(e) {
                    for (var t, i, n, r = e.length, o = k.relative[e[0].type], s = o || k.relative[" "], a = o ? 1 : 0, l = h(function(e) {
                            return e === t
                        }, s, !0), u = h(function(e) {
                            return ee(t, e) > -1
                        }, s, !0), d = [function(e, i, n) {
                            var r = !o && (n || i !== _) || ((t = i).nodeType ? l(e, i, n) : u(e, i, n));
                            return t = null, r
                        }]; a < r; a++)
                        if (i = k.relative[e[a].type]) d = [h(v(d), i)];
                        else {
                            if (i = k.filter[e[a].type].apply(null, e[a].matches), i[I]) {
                                for (n = ++a; n < r && !k.relative[e[n].type]; n++);
                                return y(a > 1 && v(d), a > 1 && f(e.slice(0, a - 1).concat({
                                    value: " " === e[a - 2].type ? "*" : ""
                                })).replace(ae, "$1"), i, a < n && w(e.slice(a, n)), n < r && w(e = e.slice(n)), n < r && f(e))
                            }
                            d.push(i)
                        }
                    return v(d)
                }

                function b(e, i) {
                    var r = i.length > 0,
                        o = e.length > 0,
                        s = function(n, s, a, l, u) {
                            var d, c, p, f = 0,
                                h = "0",
                                v = n && [],
                                g = [],
                                y = _,
                                w = n || o && k.find.TAG("*", u),
                                b = R += null == y ? 1 : Math.random() || .1,
                                T = w.length;
                            for (u && (_ = s === j || s || u); h !== T && null != (d = w[h]); h++) {
                                if (o && d) {
                                    for (c = 0, s || d.ownerDocument === j || (O(d), a = !N); p = e[c++];)
                                        if (p(d, s || j, a)) {
                                            l.push(d);
                                            break
                                        }
                                    u && (R = b)
                                }
                                r && ((d = !p && d) && f--, n && v.push(d))
                            }
                            if (f += h, r && h !== f) {
                                for (c = 0; p = i[c++];) p(v, g, s, a);
                                if (n) {
                                    if (f > 0)
                                        for (; h--;) v[h] || g[h] || (g[h] = J.call(l));
                                    g = m(g)
                                }
                                K.apply(l, g), u && !n && g.length > 0 && f + i.length > 1 && t.uniqueSort(l)
                            }
                            return u && (R = b, _ = y), v
                        };
                    return r ? n(s) : s
                }
                var T, x, k, C, S, $, E, A, _, F, D, O, j, P, N, q, M, H, L, I = "sizzle" + 1 * new Date,
                    z = e.document,
                    R = 0,
                    W = 0,
                    V = i(),
                    U = i(),
                    B = i(),
                    X = function(e, t) {
                        return e === t && (D = !0), 0
                    },
                    Y = {}.hasOwnProperty,
                    G = [],
                    J = G.pop,
                    Q = G.push,
                    K = G.push,
                    Z = G.slice,
                    ee = function(e, t) {
                        for (var i = 0, n = e.length; i < n; i++)
                            if (e[i] === t) return i;
                        return -1
                    },
                    te = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                    ie = "[\\x20\\t\\r\\n\\f]",
                    ne = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
                    re = "\\[" + ie + "*(" + ne + ")(?:" + ie + "*([*^$|!~]?=)" + ie + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + ne + "))|)" + ie + "*\\]",
                    oe = ":(" + ne + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + re + ")*)|.*)\\)|)",
                    se = new RegExp(ie + "+", "g"),
                    ae = new RegExp("^" + ie + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ie + "+$", "g"),
                    le = new RegExp("^" + ie + "*," + ie + "*"),
                    ue = new RegExp("^" + ie + "*([>+~]|" + ie + ")" + ie + "*"),
                    de = new RegExp("=" + ie + "*([^\\]'\"]*?)" + ie + "*\\]", "g"),
                    ce = new RegExp(oe),
                    pe = new RegExp("^" + ne + "$"),
                    fe = {
                        ID: new RegExp("^#(" + ne + ")"),
                        CLASS: new RegExp("^\\.(" + ne + ")"),
                        TAG: new RegExp("^(" + ne + "|[*])"),
                        ATTR: new RegExp("^" + re),
                        PSEUDO: new RegExp("^" + oe),
                        CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ie + "*(even|odd|(([+-]|)(\\d*)n|)" + ie + "*(?:([+-]|)" + ie + "*(\\d+)|))" + ie + "*\\)|)", "i"),
                        bool: new RegExp("^(?:" + te + ")$", "i"),
                        needsContext: new RegExp("^" + ie + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ie + "*((?:-\\d)?\\d*)" + ie + "*\\)|)(?=[^-]|$)", "i")
                    },
                    he = /^(?:input|select|textarea|button)$/i,
                    ve = /^h\d$/i,
                    ge = /^[^{]+\{\s*\[native \w/,
                    me = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                    ye = /[+~]/,
                    we = new RegExp("\\\\([\\da-f]{1,6}" + ie + "?|(" + ie + ")|.)", "ig"),
                    be = function(e, t, i) {
                        var n = "0x" + t - 65536;
                        return n !== n || i ? t : n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320)
                    },
                    Te = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
                    xe = function(e, t) {
                        return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
                    },
                    ke = function() {
                        O()
                    },
                    Ce = h(function(e) {
                        return e.disabled === !0 && ("form" in e || "label" in e)
                    }, {
                        dir: "parentNode",
                        next: "legend"
                    });
                try {
                    K.apply(G = Z.call(z.childNodes), z.childNodes), G[z.childNodes.length].nodeType
                } catch (e) {
                    K = {
                        apply: G.length ? function(e, t) {
                            Q.apply(e, Z.call(t))
                        } : function(e, t) {
                            for (var i = e.length, n = 0; e[i++] = t[n++];);
                            e.length = i - 1
                        }
                    }
                }
                x = t.support = {}, S = t.isXML = function(e) {
                    var t = e && (e.ownerDocument || e).documentElement;
                    return !!t && "HTML" !== t.nodeName
                }, O = t.setDocument = function(e) {
                    var t, i, n = e ? e.ownerDocument || e : z;
                    return n !== j && 9 === n.nodeType && n.documentElement ? (j = n, P = j.documentElement, N = !S(j), z !== j && (i = j.defaultView) && i.top !== i && (i.addEventListener ? i.addEventListener("unload", ke, !1) : i.attachEvent && i.attachEvent("onunload", ke)), x.attributes = r(function(e) {
                        return e.className = "i", !e.getAttribute("className")
                    }), x.getElementsByTagName = r(function(e) {
                        return e.appendChild(j.createComment("")), !e.getElementsByTagName("*").length
                    }), x.getElementsByClassName = ge.test(j.getElementsByClassName), x.getById = r(function(e) {
                        return P.appendChild(e).id = I, !j.getElementsByName || !j.getElementsByName(I).length
                    }), x.getById ? (k.filter.ID = function(e) {
                        var t = e.replace(we, be);
                        return function(e) {
                            return e.getAttribute("id") === t
                        }
                    }, k.find.ID = function(e, t) {
                        if ("undefined" != typeof t.getElementById && N) {
                            var i = t.getElementById(e);
                            return i ? [i] : []
                        }
                    }) : (k.filter.ID = function(e) {
                        var t = e.replace(we, be);
                        return function(e) {
                            var i = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                            return i && i.value === t
                        }
                    }, k.find.ID = function(e, t) {
                        if ("undefined" != typeof t.getElementById && N) {
                            var i, n, r, o = t.getElementById(e);
                            if (o) {
                                if (i = o.getAttributeNode("id"), i && i.value === e) return [o];
                                for (r = t.getElementsByName(e), n = 0; o = r[n++];)
                                    if (i = o.getAttributeNode("id"), i && i.value === e) return [o]
                            }
                            return []
                        }
                    }), k.find.TAG = x.getElementsByTagName ? function(e, t) {
                        return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : x.qsa ? t.querySelectorAll(e) : void 0
                    } : function(e, t) {
                        var i, n = [],
                            r = 0,
                            o = t.getElementsByTagName(e);
                        if ("*" === e) {
                            for (; i = o[r++];) 1 === i.nodeType && n.push(i);
                            return n
                        }
                        return o
                    }, k.find.CLASS = x.getElementsByClassName && function(e, t) {
                        if ("undefined" != typeof t.getElementsByClassName && N) return t.getElementsByClassName(e)
                    }, M = [], q = [], (x.qsa = ge.test(j.querySelectorAll)) && (r(function(e) {
                        P.appendChild(e).innerHTML = "<a id='" + I + "'></a><select id='" + I + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + ie + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || q.push("\\[" + ie + "*(?:value|" + te + ")"), e.querySelectorAll("[id~=" + I + "-]").length || q.push("~="), e.querySelectorAll(":checked").length || q.push(":checked"), e.querySelectorAll("a#" + I + "+*").length || q.push(".#.+[+~]")
                    }), r(function(e) {
                        e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                        var t = j.createElement("input");
                        t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && q.push("name" + ie + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && q.push(":enabled", ":disabled"), P.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && q.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), q.push(",.*:")
                    })), (x.matchesSelector = ge.test(H = P.matches || P.webkitMatchesSelector || P.mozMatchesSelector || P.oMatchesSelector || P.msMatchesSelector)) && r(function(e) {
                        x.disconnectedMatch = H.call(e, "*"), H.call(e, "[s!='']:x"), M.push("!=", oe)
                    }), q = q.length && new RegExp(q.join("|")), M = M.length && new RegExp(M.join("|")), t = ge.test(P.compareDocumentPosition), L = t || ge.test(P.contains) ? function(e, t) {
                        var i = 9 === e.nodeType ? e.documentElement : e,
                            n = t && t.parentNode;
                        return e === n || !(!n || 1 !== n.nodeType || !(i.contains ? i.contains(n) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(n)))
                    } : function(e, t) {
                        if (t)
                            for (; t = t.parentNode;)
                                if (t === e) return !0;
                        return !1
                    }, X = t ? function(e, t) {
                        if (e === t) return D = !0, 0;
                        var i = !e.compareDocumentPosition - !t.compareDocumentPosition;
                        return i ? i : (i = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & i || !x.sortDetached && t.compareDocumentPosition(e) === i ? e === j || e.ownerDocument === z && L(z, e) ? -1 : t === j || t.ownerDocument === z && L(z, t) ? 1 : F ? ee(F, e) - ee(F, t) : 0 : 4 & i ? -1 : 1)
                    } : function(e, t) {
                        if (e === t) return D = !0, 0;
                        var i, n = 0,
                            r = e.parentNode,
                            o = t.parentNode,
                            a = [e],
                            l = [t];
                        if (!r || !o) return e === j ? -1 : t === j ? 1 : r ? -1 : o ? 1 : F ? ee(F, e) - ee(F, t) : 0;
                        if (r === o) return s(e, t);
                        for (i = e; i = i.parentNode;) a.unshift(i);
                        for (i = t; i = i.parentNode;) l.unshift(i);
                        for (; a[n] === l[n];) n++;
                        return n ? s(a[n], l[n]) : a[n] === z ? -1 : l[n] === z ? 1 : 0
                    }, j) : j
                }, t.matches = function(e, i) {
                    return t(e, null, null, i)
                }, t.matchesSelector = function(e, i) {
                    if ((e.ownerDocument || e) !== j && O(e), i = i.replace(de, "='$1']"), x.matchesSelector && N && !B[i + " "] && (!M || !M.test(i)) && (!q || !q.test(i))) try {
                        var n = H.call(e, i);
                        if (n || x.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n
                    } catch (e) {}
                    return t(i, j, null, [e]).length > 0
                }, t.contains = function(e, t) {
                    return (e.ownerDocument || e) !== j && O(e), L(e, t)
                }, t.attr = function(e, t) {
                    (e.ownerDocument || e) !== j && O(e);
                    var i = k.attrHandle[t.toLowerCase()],
                        n = i && Y.call(k.attrHandle, t.toLowerCase()) ? i(e, t, !N) : void 0;
                    return void 0 !== n ? n : x.attributes || !N ? e.getAttribute(t) : (n = e.getAttributeNode(t)) && n.specified ? n.value : null
                }, t.escape = function(e) {
                    return (e + "").replace(Te, xe)
                }, t.error = function(e) {
                    throw new Error("Syntax error, unrecognized expression: " + e)
                }, t.uniqueSort = function(e) {
                    var t, i = [],
                        n = 0,
                        r = 0;
                    if (D = !x.detectDuplicates, F = !x.sortStable && e.slice(0), e.sort(X), D) {
                        for (; t = e[r++];) t === e[r] && (n = i.push(r));
                        for (; n--;) e.splice(i[n], 1)
                    }
                    return F = null, e
                }, C = t.getText = function(e) {
                    var t, i = "",
                        n = 0,
                        r = e.nodeType;
                    if (r) {
                        if (1 === r || 9 === r || 11 === r) {
                            if ("string" == typeof e.textContent) return e.textContent;
                            for (e = e.firstChild; e; e = e.nextSibling) i += C(e)
                        } else if (3 === r || 4 === r) return e.nodeValue
                    } else
                        for (; t = e[n++];) i += C(t);
                    return i
                }, k = t.selectors = {
                    cacheLength: 50,
                    createPseudo: n,
                    match: fe,
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
                            return e[1] = e[1].replace(we, be), e[3] = (e[3] || e[4] || e[5] || "").replace(we, be), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                        },
                        CHILD: function(e) {
                            return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
                        },
                        PSEUDO: function(e) {
                            var t, i = !e[6] && e[2];
                            return fe.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : i && ce.test(i) && (t = $(i, !0)) && (t = i.indexOf(")", i.length - t) - i.length) && (e[0] = e[0].slice(0, t), e[2] = i.slice(0, t)), e.slice(0, 3))
                        }
                    },
                    filter: {
                        TAG: function(e) {
                            var t = e.replace(we, be).toLowerCase();
                            return "*" === e ? function() {
                                return !0
                            } : function(e) {
                                return e.nodeName && e.nodeName.toLowerCase() === t
                            }
                        },
                        CLASS: function(e) {
                            var t = V[e + " "];
                            return t || (t = new RegExp("(^|" + ie + ")" + e + "(" + ie + "|$)")) && V(e, function(e) {
                                return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                            })
                        },
                        ATTR: function(e, i, n) {
                            return function(r) {
                                var o = t.attr(r, e);
                                return null == o ? "!=" === i : !i || (o += "", "=" === i ? o === n : "!=" === i ? o !== n : "^=" === i ? n && 0 === o.indexOf(n) : "*=" === i ? n && o.indexOf(n) > -1 : "$=" === i ? n && o.slice(-n.length) === n : "~=" === i ? (" " + o.replace(se, " ") + " ").indexOf(n) > -1 : "|=" === i && (o === n || o.slice(0, n.length + 1) === n + "-"))
                            }
                        },
                        CHILD: function(e, t, i, n, r) {
                            var o = "nth" !== e.slice(0, 3),
                                s = "last" !== e.slice(-4),
                                a = "of-type" === t;
                            return 1 === n && 0 === r ? function(e) {
                                return !!e.parentNode
                            } : function(t, i, l) {
                                var u, d, c, p, f, h, v = o !== s ? "nextSibling" : "previousSibling",
                                    g = t.parentNode,
                                    m = a && t.nodeName.toLowerCase(),
                                    y = !l && !a,
                                    w = !1;
                                if (g) {
                                    if (o) {
                                        for (; v;) {
                                            for (p = t; p = p[v];)
                                                if (a ? p.nodeName.toLowerCase() === m : 1 === p.nodeType) return !1;
                                            h = v = "only" === e && !h && "nextSibling"
                                        }
                                        return !0
                                    }
                                    if (h = [s ? g.firstChild : g.lastChild], s && y) {
                                        for (p = g, c = p[I] || (p[I] = {}), d = c[p.uniqueID] || (c[p.uniqueID] = {}), u = d[e] || [], f = u[0] === R && u[1], w = f && u[2], p = f && g.childNodes[f]; p = ++f && p && p[v] || (w = f = 0) || h.pop();)
                                            if (1 === p.nodeType && ++w && p === t) {
                                                d[e] = [R, f, w];
                                                break
                                            }
                                    } else if (y && (p = t, c = p[I] || (p[I] = {}), d = c[p.uniqueID] || (c[p.uniqueID] = {}), u = d[e] || [], f = u[0] === R && u[1], w = f), w === !1)
                                        for (;
                                            (p = ++f && p && p[v] || (w = f = 0) || h.pop()) && ((a ? p.nodeName.toLowerCase() !== m : 1 !== p.nodeType) || !++w || (y && (c = p[I] || (p[I] = {}), d = c[p.uniqueID] || (c[p.uniqueID] = {}), d[e] = [R, w]), p !== t)););
                                    return w -= r, w === n || w % n === 0 && w / n >= 0
                                }
                            }
                        },
                        PSEUDO: function(e, i) {
                            var r, o = k.pseudos[e] || k.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                            return o[I] ? o(i) : o.length > 1 ? (r = [e, e, "", i], k.setFilters.hasOwnProperty(e.toLowerCase()) ? n(function(e, t) {
                                for (var n, r = o(e, i), s = r.length; s--;) n = ee(e, r[s]), e[n] = !(t[n] = r[s])
                            }) : function(e) {
                                return o(e, 0, r)
                            }) : o
                        }
                    },
                    pseudos: {
                        not: n(function(e) {
                            var t = [],
                                i = [],
                                r = E(e.replace(ae, "$1"));
                            return r[I] ? n(function(e, t, i, n) {
                                for (var o, s = r(e, null, n, []), a = e.length; a--;)(o = s[a]) && (e[a] = !(t[a] = o))
                            }) : function(e, n, o) {
                                return t[0] = e, r(t, null, o, i), t[0] = null, !i.pop()
                            }
                        }),
                        has: n(function(e) {
                            return function(i) {
                                return t(e, i).length > 0
                            }
                        }),
                        contains: n(function(e) {
                            return e = e.replace(we, be),
                                function(t) {
                                    return (t.textContent || t.innerText || C(t)).indexOf(e) > -1
                                }
                        }),
                        lang: n(function(e) {
                            return pe.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(we, be).toLowerCase(),
                                function(t) {
                                    var i;
                                    do
                                        if (i = N ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return i = i.toLowerCase(), i === e || 0 === i.indexOf(e + "-");
                                    while ((t = t.parentNode) && 1 === t.nodeType);
                                    return !1
                                }
                        }),
                        target: function(t) {
                            var i = e.location && e.location.hash;
                            return i && i.slice(1) === t.id
                        },
                        root: function(e) {
                            return e === P
                        },
                        focus: function(e) {
                            return e === j.activeElement && (!j.hasFocus || j.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                        },
                        enabled: u(!1),
                        disabled: u(!0),
                        checked: function(e) {
                            var t = e.nodeName.toLowerCase();
                            return "input" === t && !!e.checked || "option" === t && !!e.selected
                        },
                        selected: function(e) {
                            return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                        },
                        empty: function(e) {
                            for (e = e.firstChild; e; e = e.nextSibling)
                                if (e.nodeType < 6) return !1;
                            return !0
                        },
                        parent: function(e) {
                            return !k.pseudos.empty(e)
                        },
                        header: function(e) {
                            return ve.test(e.nodeName)
                        },
                        input: function(e) {
                            return he.test(e.nodeName)
                        },
                        button: function(e) {
                            var t = e.nodeName.toLowerCase();
                            return "input" === t && "button" === e.type || "button" === t
                        },
                        text: function(e) {
                            var t;
                            return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                        },
                        first: d(function() {
                            return [0]
                        }),
                        last: d(function(e, t) {
                            return [t - 1]
                        }),
                        eq: d(function(e, t, i) {
                            return [i < 0 ? i + t : i]
                        }),
                        even: d(function(e, t) {
                            for (var i = 0; i < t; i += 2) e.push(i);
                            return e
                        }),
                        odd: d(function(e, t) {
                            for (var i = 1; i < t; i += 2) e.push(i);
                            return e
                        }),
                        lt: d(function(e, t, i) {
                            for (var n = i < 0 ? i + t : i; --n >= 0;) e.push(n);
                            return e
                        }),
                        gt: d(function(e, t, i) {
                            for (var n = i < 0 ? i + t : i; ++n < t;) e.push(n);
                            return e
                        })
                    }
                }, k.pseudos.nth = k.pseudos.eq;
                for (T in {
                        radio: !0,
                        checkbox: !0,
                        file: !0,
                        password: !0,
                        image: !0
                    }) k.pseudos[T] = a(T);
                for (T in {
                        submit: !0,
                        reset: !0
                    }) k.pseudos[T] = l(T);
                return p.prototype = k.filters = k.pseudos, k.setFilters = new p, $ = t.tokenize = function(e, i) {
                    var n, r, o, s, a, l, u, d = U[e + " "];
                    if (d) return i ? 0 : d.slice(0);
                    for (a = e, l = [], u = k.preFilter; a;) {
                        n && !(r = le.exec(a)) || (r && (a = a.slice(r[0].length) || a), l.push(o = [])), n = !1, (r = ue.exec(a)) && (n = r.shift(), o.push({
                            value: n,
                            type: r[0].replace(ae, " ")
                        }), a = a.slice(n.length));
                        for (s in k.filter) !(r = fe[s].exec(a)) || u[s] && !(r = u[s](r)) || (n = r.shift(), o.push({
                            value: n,
                            type: s,
                            matches: r
                        }), a = a.slice(n.length));
                        if (!n) break
                    }
                    return i ? a.length : a ? t.error(e) : U(e, l).slice(0)
                }, E = t.compile = function(e, t) {
                    var i, n = [],
                        r = [],
                        o = B[e + " "];
                    if (!o) {
                        for (t || (t = $(e)), i = t.length; i--;) o = w(t[i]), o[I] ? n.push(o) : r.push(o);
                        o = B(e, b(r, n)), o.selector = e
                    }
                    return o
                }, A = t.select = function(e, t, i, n) {
                    var r, o, s, a, l, u = "function" == typeof e && e,
                        d = !n && $(e = u.selector || e);
                    if (i = i || [], 1 === d.length) {
                        if (o = d[0] = d[0].slice(0), o.length > 2 && "ID" === (s = o[0]).type && 9 === t.nodeType && N && k.relative[o[1].type]) {
                            if (t = (k.find.ID(s.matches[0].replace(we, be), t) || [])[0], !t) return i;
                            u && (t = t.parentNode), e = e.slice(o.shift().value.length)
                        }
                        for (r = fe.needsContext.test(e) ? 0 : o.length; r-- && (s = o[r], !k.relative[a = s.type]);)
                            if ((l = k.find[a]) && (n = l(s.matches[0].replace(we, be), ye.test(o[0].type) && c(t.parentNode) || t))) {
                                if (o.splice(r, 1), e = n.length && f(o), !e) return K.apply(i, n), i;
                                break
                            }
                    }
                    return (u || E(e, d))(n, t, !N, i, !t || ye.test(e) && c(t.parentNode) || t), i
                }, x.sortStable = I.split("").sort(X).join("") === I, x.detectDuplicates = !!D, O(), x.sortDetached = r(function(e) {
                    return 1 & e.compareDocumentPosition(j.createElement("fieldset"))
                }), r(function(e) {
                    return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
                }) || o("type|href|height|width", function(e, t, i) {
                    if (!i) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
                }), x.attributes && r(function(e) {
                    return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
                }) || o("value", function(e, t, i) {
                    if (!i && "input" === e.nodeName.toLowerCase()) return e.defaultValue
                }), r(function(e) {
                    return null == e.getAttribute("disabled")
                }) || o(te, function(e, t, i) {
                    var n;
                    if (!i) return e[t] === !0 ? t.toLowerCase() : (n = e.getAttributeNode(t)) && n.specified ? n.value : null
                }), t
            }(e);
            he.find = we, he.expr = we.selectors, he.expr[":"] = he.expr.pseudos, he.uniqueSort = he.unique = we.uniqueSort, he.text = we.getText, he.isXMLDoc = we.isXML, he.contains = we.contains, he.escapeSelector = we.escape;
            var be = function(e, t, i) {
                    for (var n = [], r = void 0 !== i;
                        (e = e[t]) && 9 !== e.nodeType;)
                        if (1 === e.nodeType) {
                            if (r && he(e).is(i)) break;
                            n.push(e)
                        }
                    return n
                },
                Te = function(e, t) {
                    for (var i = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && i.push(e);
                    return i
                },
                xe = he.expr.match.needsContext,
                ke = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,
                Ce = /^.[^:#\[\.,]*$/;
            he.filter = function(e, t, i) {
                var n = t[0];
                return i && (e = ":not(" + e + ")"), 1 === t.length && 1 === n.nodeType ? he.find.matchesSelector(n, e) ? [n] : [] : he.find.matches(e, he.grep(t, function(e) {
                    return 1 === e.nodeType
                }))
            }, he.fn.extend({
                find: function(e) {
                    var t, i, n = this.length,
                        r = this;
                    if ("string" != typeof e) return this.pushStack(he(e).filter(function() {
                        for (t = 0; t < n; t++)
                            if (he.contains(r[t], this)) return !0
                    }));
                    for (i = this.pushStack([]), t = 0; t < n; t++) he.find(e, r[t], i);
                    return n > 1 ? he.uniqueSort(i) : i
                },
                filter: function(e) {
                    return this.pushStack(r(this, e || [], !1))
                },
                not: function(e) {
                    return this.pushStack(r(this, e || [], !0))
                },
                is: function(e) {
                    return !!r(this, "string" == typeof e && xe.test(e) ? he(e) : e || [], !1).length
                }
            });
            var Se, $e = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
                Ee = he.fn.init = function(e, t, i) {
                    var n, r;
                    if (!e) return this;
                    if (i = i || Se, "string" == typeof e) {
                        if (n = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : $e.exec(e), !n || !n[1] && t) return !t || t.jquery ? (t || i).find(e) : this.constructor(t).find(e);
                        if (n[1]) {
                            if (t = t instanceof he ? t[0] : t, he.merge(this, he.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : te, !0)), ke.test(n[1]) && he.isPlainObject(t))
                                for (n in t) he.isFunction(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
                            return this
                        }
                        return r = te.getElementById(n[2]), r && (this[0] = r, this.length = 1), this
                    }
                    return e.nodeType ? (this[0] = e, this.length = 1, this) : he.isFunction(e) ? void 0 !== i.ready ? i.ready(e) : e(he) : he.makeArray(e, this)
                };
            Ee.prototype = he.fn, Se = he(te);
            var Ae = /^(?:parents|prev(?:Until|All))/,
                _e = {
                    children: !0,
                    contents: !0,
                    next: !0,
                    prev: !0
                };
            he.fn.extend({
                has: function(e) {
                    var t = he(e, this),
                        i = t.length;
                    return this.filter(function() {
                        for (var e = 0; e < i; e++)
                            if (he.contains(this, t[e])) return !0
                    })
                },
                closest: function(e, t) {
                    var i, n = 0,
                        r = this.length,
                        o = [],
                        s = "string" != typeof e && he(e);
                    if (!xe.test(e))
                        for (; n < r; n++)
                            for (i = this[n]; i && i !== t; i = i.parentNode)
                                if (i.nodeType < 11 && (s ? s.index(i) > -1 : 1 === i.nodeType && he.find.matchesSelector(i, e))) {
                                    o.push(i);
                                    break
                                }
                    return this.pushStack(o.length > 1 ? he.uniqueSort(o) : o)
                },
                index: function(e) {
                    return e ? "string" == typeof e ? se.call(he(e), this[0]) : se.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
                },
                add: function(e, t) {
                    return this.pushStack(he.uniqueSort(he.merge(this.get(), he(e, t))))
                },
                addBack: function(e) {
                    return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
                }
            }), he.each({
                parent: function(e) {
                    var t = e.parentNode;
                    return t && 11 !== t.nodeType ? t : null
                },
                parents: function(e) {
                    return be(e, "parentNode")
                },
                parentsUntil: function(e, t, i) {
                    return be(e, "parentNode", i)
                },
                next: function(e) {
                    return o(e, "nextSibling")
                },
                prev: function(e) {
                    return o(e, "previousSibling")
                },
                nextAll: function(e) {
                    return be(e, "nextSibling")
                },
                prevAll: function(e) {
                    return be(e, "previousSibling")
                },
                nextUntil: function(e, t, i) {
                    return be(e, "nextSibling", i)
                },
                prevUntil: function(e, t, i) {
                    return be(e, "previousSibling", i)
                },
                siblings: function(e) {
                    return Te((e.parentNode || {}).firstChild, e)
                },
                children: function(e) {
                    return Te(e.firstChild)
                },
                contents: function(e) {
                    return e.contentDocument || he.merge([], e.childNodes)
                }
            }, function(e, t) {
                he.fn[e] = function(i, n) {
                    var r = he.map(this, t, i);
                    return "Until" !== e.slice(-5) && (n = i), n && "string" == typeof n && (r = he.filter(n, r)), this.length > 1 && (_e[e] || he.uniqueSort(r), Ae.test(e) && r.reverse()), this.pushStack(r)
                }
            });
            var Fe = /[^\x20\t\r\n\f]+/g;
            he.Callbacks = function(e) {
                e = "string" == typeof e ? s(e) : he.extend({}, e);
                var t, i, n, r, o = [],
                    a = [],
                    l = -1,
                    u = function() {
                        for (r = e.once, n = t = !0; a.length; l = -1)
                            for (i = a.shift(); ++l < o.length;) o[l].apply(i[0], i[1]) === !1 && e.stopOnFalse && (l = o.length, i = !1);
                        e.memory || (i = !1), t = !1, r && (o = i ? [] : "")
                    },
                    d = {
                        add: function() {
                            return o && (i && !t && (l = o.length - 1, a.push(i)), function t(i) {
                                he.each(i, function(i, n) {
                                    he.isFunction(n) ? e.unique && d.has(n) || o.push(n) : n && n.length && "string" !== he.type(n) && t(n)
                                })
                            }(arguments), i && !t && u()), this
                        },
                        remove: function() {
                            return he.each(arguments, function(e, t) {
                                for (var i;
                                    (i = he.inArray(t, o, i)) > -1;) o.splice(i, 1), i <= l && l--
                            }), this
                        },
                        has: function(e) {
                            return e ? he.inArray(e, o) > -1 : o.length > 0
                        },
                        empty: function() {
                            return o && (o = []), this
                        },
                        disable: function() {
                            return r = a = [], o = i = "", this
                        },
                        disabled: function() {
                            return !o
                        },
                        lock: function() {
                            return r = a = [], i || t || (o = i = ""), this
                        },
                        locked: function() {
                            return !!r
                        },
                        fireWith: function(e, i) {
                            return r || (i = i || [], i = [e, i.slice ? i.slice() : i], a.push(i), t || u()), this
                        },
                        fire: function() {
                            return d.fireWith(this, arguments), this
                        },
                        fired: function() {
                            return !!n
                        }
                    };
                return d
            }, he.extend({
                Deferred: function(t) {
                    var i = [
                            ["notify", "progress", he.Callbacks("memory"), he.Callbacks("memory"), 2],
                            ["resolve", "done", he.Callbacks("once memory"), he.Callbacks("once memory"), 0, "resolved"],
                            ["reject", "fail", he.Callbacks("once memory"), he.Callbacks("once memory"), 1, "rejected"]
                        ],
                        n = "pending",
                        r = {
                            state: function() {
                                return n
                            },
                            always: function() {
                                return o.done(arguments).fail(arguments), this
                            },
                            catch: function(e) {
                                return r.then(null, e)
                            },
                            pipe: function() {
                                var e = arguments;
                                return he.Deferred(function(t) {
                                    he.each(i, function(i, n) {
                                        var r = he.isFunction(e[n[4]]) && e[n[4]];
                                        o[n[1]](function() {
                                            var e = r && r.apply(this, arguments);
                                            e && he.isFunction(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[n[0] + "With"](this, r ? [e] : arguments)
                                        })
                                    }), e = null
                                }).promise()
                            },
                            then: function(t, n, r) {
                                function o(t, i, n, r) {
                                    return function() {
                                        var u = this,
                                            d = arguments,
                                            c = function() {
                                                var e, c;
                                                if (!(t < s)) {
                                                    if (e = n.apply(u, d), e === i.promise()) throw new TypeError("Thenable self-resolution");
                                                    c = e && ("object" == typeof e || "function" == typeof e) && e.then, he.isFunction(c) ? r ? c.call(e, o(s, i, a, r), o(s, i, l, r)) : (s++, c.call(e, o(s, i, a, r), o(s, i, l, r), o(s, i, a, i.notifyWith))) : (n !== a && (u = void 0, d = [e]), (r || i.resolveWith)(u, d))
                                                }
                                            },
                                            p = r ? c : function() {
                                                try {
                                                    c()
                                                } catch (e) {
                                                    he.Deferred.exceptionHook && he.Deferred.exceptionHook(e, p.stackTrace), t + 1 >= s && (n !== l && (u = void 0, d = [e]), i.rejectWith(u, d))
                                                }
                                            };
                                        t ? p() : (he.Deferred.getStackHook && (p.stackTrace = he.Deferred.getStackHook()), e.setTimeout(p))
                                    }
                                }
                                var s = 0;
                                return he.Deferred(function(e) {
                                    i[0][3].add(o(0, e, he.isFunction(r) ? r : a, e.notifyWith)), i[1][3].add(o(0, e, he.isFunction(t) ? t : a)), i[2][3].add(o(0, e, he.isFunction(n) ? n : l))
                                }).promise()
                            },
                            promise: function(e) {
                                return null != e ? he.extend(e, r) : r
                            }
                        },
                        o = {};
                    return he.each(i, function(e, t) {
                        var s = t[2],
                            a = t[5];
                        r[t[1]] = s.add, a && s.add(function() {
                            n = a
                        }, i[3 - e][2].disable, i[0][2].lock), s.add(t[3].fire), o[t[0]] = function() {
                            return o[t[0] + "With"](this === o ? void 0 : this, arguments), this
                        }, o[t[0] + "With"] = s.fireWith
                    }), r.promise(o), t && t.call(o, o), o
                },
                when: function(e) {
                    var t = arguments.length,
                        i = t,
                        n = Array(i),
                        r = ne.call(arguments),
                        o = he.Deferred(),
                        s = function(e) {
                            return function(i) {
                                n[e] = this, r[e] = arguments.length > 1 ? ne.call(arguments) : i, --t || o.resolveWith(n, r)
                            }
                        };
                    if (t <= 1 && (u(e, o.done(s(i)).resolve, o.reject), "pending" === o.state() || he.isFunction(r[i] && r[i].then))) return o.then();
                    for (; i--;) u(r[i], s(i), o.reject);
                    return o.promise()
                }
            });
            var De = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
            he.Deferred.exceptionHook = function(t, i) {
                e.console && e.console.warn && t && De.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, i)
            }, he.readyException = function(t) {
                e.setTimeout(function() {
                    throw t
                })
            };
            var Oe = he.Deferred();
            he.fn.ready = function(e) {
                return Oe.then(e).catch(function(e) {
                    he.readyException(e)
                }), this
            }, he.extend({
                isReady: !1,
                readyWait: 1,
                holdReady: function(e) {
                    e ? he.readyWait++ : he.ready(!0)
                },
                ready: function(e) {
                    (e === !0 ? --he.readyWait : he.isReady) || (he.isReady = !0, e !== !0 && --he.readyWait > 0 || Oe.resolveWith(te, [he]))
                }
            }), he.ready.then = Oe.then, "complete" === te.readyState || "loading" !== te.readyState && !te.documentElement.doScroll ? e.setTimeout(he.ready) : (te.addEventListener("DOMContentLoaded", d), e.addEventListener("load", d));
            var je = function(e, t, i, n, r, o, s) {
                    var a = 0,
                        l = e.length,
                        u = null == i;
                    if ("object" === he.type(i)) {
                        r = !0;
                        for (a in i) je(e, t, a, i[a], !0, o, s)
                    } else if (void 0 !== n && (r = !0, he.isFunction(n) || (s = !0), u && (s ? (t.call(e, n), t = null) : (u = t, t = function(e, t, i) {
                            return u.call(he(e), i)
                        })), t))
                        for (; a < l; a++) t(e[a], i, s ? n : n.call(e[a], a, t(e[a], i)));
                    return r ? e : u ? t.call(e) : l ? t(e[0], i) : o
                },
                Pe = function(e) {
                    return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
                };
            c.uid = 1, c.prototype = {
                cache: function(e) {
                    var t = e[this.expando];
                    return t || (t = {}, Pe(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                        value: t,
                        configurable: !0
                    }))), t
                },
                set: function(e, t, i) {
                    var n, r = this.cache(e);
                    if ("string" == typeof t) r[he.camelCase(t)] = i;
                    else
                        for (n in t) r[he.camelCase(n)] = t[n];
                    return r
                },
                get: function(e, t) {
                    return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][he.camelCase(t)]
                },
                access: function(e, t, i) {
                    return void 0 === t || t && "string" == typeof t && void 0 === i ? this.get(e, t) : (this.set(e, t, i), void 0 !== i ? i : t)
                },
                remove: function(e, t) {
                    var i, n = e[this.expando];
                    if (void 0 !== n) {
                        if (void 0 !== t) {
                            he.isArray(t) ? t = t.map(he.camelCase) : (t = he.camelCase(t), t = t in n ? [t] : t.match(Fe) || []), i = t.length;
                            for (; i--;) delete n[t[i]]
                        }(void 0 === t || he.isEmptyObject(n)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
                    }
                },
                hasData: function(e) {
                    var t = e[this.expando];
                    return void 0 !== t && !he.isEmptyObject(t)
                }
            };
            var Ne = new c,
                qe = new c,
                Me = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
                He = /[A-Z]/g;
            he.extend({
                hasData: function(e) {
                    return qe.hasData(e) || Ne.hasData(e)
                },
                data: function(e, t, i) {
                    return qe.access(e, t, i)
                },
                removeData: function(e, t) {
                    qe.remove(e, t)
                },
                _data: function(e, t, i) {
                    return Ne.access(e, t, i)
                },
                _removeData: function(e, t) {
                    Ne.remove(e, t)
                }
            }), he.fn.extend({
                data: function(e, t) {
                    var i, n, r, o = this[0],
                        s = o && o.attributes;
                    if (void 0 === e) {
                        if (this.length && (r = qe.get(o), 1 === o.nodeType && !Ne.get(o, "hasDataAttrs"))) {
                            for (i = s.length; i--;) s[i] && (n = s[i].name, 0 === n.indexOf("data-") && (n = he.camelCase(n.slice(5)), f(o, n, r[n])));
                            Ne.set(o, "hasDataAttrs", !0)
                        }
                        return r
                    }
                    return "object" == typeof e ? this.each(function() {
                        qe.set(this, e)
                    }) : je(this, function(t) {
                        var i;
                        if (o && void 0 === t) {
                            if (i = qe.get(o, e), void 0 !== i) return i;
                            if (i = f(o, e), void 0 !== i) return i
                        } else this.each(function() {
                            qe.set(this, e, t)
                        })
                    }, null, t, arguments.length > 1, null, !0)
                },
                removeData: function(e) {
                    return this.each(function() {
                        qe.remove(this, e)
                    })
                }
            }), he.extend({
                queue: function(e, t, i) {
                    var n;
                    if (e) return t = (t || "fx") + "queue", n = Ne.get(e, t), i && (!n || he.isArray(i) ? n = Ne.access(e, t, he.makeArray(i)) : n.push(i)), n || []
                },
                dequeue: function(e, t) {
                    t = t || "fx";
                    var i = he.queue(e, t),
                        n = i.length,
                        r = i.shift(),
                        o = he._queueHooks(e, t),
                        s = function() {
                            he.dequeue(e, t)
                        };
                    "inprogress" === r && (r = i.shift(), n--), r && ("fx" === t && i.unshift("inprogress"), delete o.stop, r.call(e, s, o)), !n && o && o.empty.fire()
                },
                _queueHooks: function(e, t) {
                    var i = t + "queueHooks";
                    return Ne.get(e, i) || Ne.access(e, i, {
                        empty: he.Callbacks("once memory").add(function() {
                            Ne.remove(e, [t + "queue", i])
                        })
                    })
                }
            }), he.fn.extend({
                queue: function(e, t) {
                    var i = 2;
                    return "string" != typeof e && (t = e, e = "fx", i--), arguments.length < i ? he.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                        var i = he.queue(this, e, t);
                        he._queueHooks(this, e), "fx" === e && "inprogress" !== i[0] && he.dequeue(this, e)
                    })
                },
                dequeue: function(e) {
                    return this.each(function() {
                        he.dequeue(this, e)
                    })
                },
                clearQueue: function(e) {
                    return this.queue(e || "fx", [])
                },
                promise: function(e, t) {
                    var i, n = 1,
                        r = he.Deferred(),
                        o = this,
                        s = this.length,
                        a = function() {
                            --n || r.resolveWith(o, [o])
                        };
                    for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; s--;) i = Ne.get(o[s], e + "queueHooks"), i && i.empty && (n++, i.empty.add(a));
                    return a(), r.promise(t)
                }
            });
            var Le = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
                Ie = new RegExp("^(?:([+-])=|)(" + Le + ")([a-z%]*)$", "i"),
                ze = ["Top", "Right", "Bottom", "Left"],
                Re = function(e, t) {
                    return e = t || e, "none" === e.style.display || "" === e.style.display && he.contains(e.ownerDocument, e) && "none" === he.css(e, "display")
                },
                We = function(e, t, i, n) {
                    var r, o, s = {};
                    for (o in t) s[o] = e.style[o], e.style[o] = t[o];
                    r = i.apply(e, n || []);
                    for (o in t) e.style[o] = s[o];
                    return r
                },
                Ve = {};
            he.fn.extend({
                show: function() {
                    return g(this, !0)
                },
                hide: function() {
                    return g(this)
                },
                toggle: function(e) {
                    return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                        Re(this) ? he(this).show() : he(this).hide()
                    })
                }
            });
            var Ue = /^(?:checkbox|radio)$/i,
                Be = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
                Xe = /^$|\/(?:java|ecma)script/i,
                Ye = {
                    option: [1, "<select multiple='multiple'>", "</select>"],
                    thead: [1, "<table>", "</table>"],
                    col: [2, "<table><colgroup>", "</colgroup></table>"],
                    tr: [2, "<table><tbody>", "</tbody></table>"],
                    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                    _default: [0, "", ""]
                };
            Ye.optgroup = Ye.option, Ye.tbody = Ye.tfoot = Ye.colgroup = Ye.caption = Ye.thead, Ye.th = Ye.td;
            var Ge = /<|&#?\w+;/;
            ! function() {
                var e = te.createDocumentFragment(),
                    t = e.appendChild(te.createElement("div")),
                    i = te.createElement("input");
                i.setAttribute("type", "radio"), i.setAttribute("checked", "checked"), i.setAttribute("name", "t"), t.appendChild(i), pe.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, t.innerHTML = "<textarea>x</textarea>", pe.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue
            }();
            var Je = te.documentElement,
                Qe = /^key/,
                Ke = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
                Ze = /^([^.]*)(?:\.(.+)|)/;
            he.event = {
                global: {},
                add: function(e, t, i, n, r) {
                    var o, s, a, l, u, d, c, p, f, h, v, g = Ne.get(e);
                    if (g)
                        for (i.handler && (o = i, i = o.handler, r = o.selector), r && he.find.matchesSelector(Je, r), i.guid || (i.guid = he.guid++), (l = g.events) || (l = g.events = {}), (s = g.handle) || (s = g.handle = function(t) {
                                return "undefined" != typeof he && he.event.triggered !== t.type ? he.event.dispatch.apply(e, arguments) : void 0
                            }), t = (t || "").match(Fe) || [""], u = t.length; u--;) a = Ze.exec(t[u]) || [], f = v = a[1], h = (a[2] || "").split(".").sort(), f && (c = he.event.special[f] || {}, f = (r ? c.delegateType : c.bindType) || f, c = he.event.special[f] || {}, d = he.extend({
                            type: f,
                            origType: v,
                            data: n,
                            handler: i,
                            guid: i.guid,
                            selector: r,
                            needsContext: r && he.expr.match.needsContext.test(r),
                            namespace: h.join(".")
                        }, o), (p = l[f]) || (p = l[f] = [], p.delegateCount = 0, c.setup && c.setup.call(e, n, h, s) !== !1 || e.addEventListener && e.addEventListener(f, s)), c.add && (c.add.call(e, d), d.handler.guid || (d.handler.guid = i.guid)), r ? p.splice(p.delegateCount++, 0, d) : p.push(d), he.event.global[f] = !0)
                },
                remove: function(e, t, i, n, r) {
                    var o, s, a, l, u, d, c, p, f, h, v, g = Ne.hasData(e) && Ne.get(e);
                    if (g && (l = g.events)) {
                        for (t = (t || "").match(Fe) || [""], u = t.length; u--;)
                            if (a = Ze.exec(t[u]) || [], f = v = a[1], h = (a[2] || "").split(".").sort(), f) {
                                for (c = he.event.special[f] || {}, f = (n ? c.delegateType : c.bindType) || f, p = l[f] || [], a = a[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = o = p.length; o--;) d = p[o], !r && v !== d.origType || i && i.guid !== d.guid || a && !a.test(d.namespace) || n && n !== d.selector && ("**" !== n || !d.selector) || (p.splice(o, 1), d.selector && p.delegateCount--, c.remove && c.remove.call(e, d));
                                s && !p.length && (c.teardown && c.teardown.call(e, h, g.handle) !== !1 || he.removeEvent(e, f, g.handle), delete l[f])
                            } else
                                for (f in l) he.event.remove(e, f + t[u], i, n, !0);
                        he.isEmptyObject(l) && Ne.remove(e, "handle events")
                    }
                },
                dispatch: function(e) {
                    var t, i, n, r, o, s, a = he.event.fix(e),
                        l = new Array(arguments.length),
                        u = (Ne.get(this, "events") || {})[a.type] || [],
                        d = he.event.special[a.type] || {};
                    for (l[0] = a, t = 1; t < arguments.length; t++) l[t] = arguments[t];
                    if (a.delegateTarget = this, !d.preDispatch || d.preDispatch.call(this, a) !== !1) {
                        for (s = he.event.handlers.call(this, a, u), t = 0;
                            (r = s[t++]) && !a.isPropagationStopped();)
                            for (a.currentTarget = r.elem, i = 0;
                                (o = r.handlers[i++]) && !a.isImmediatePropagationStopped();) a.rnamespace && !a.rnamespace.test(o.namespace) || (a.handleObj = o, a.data = o.data, n = ((he.event.special[o.origType] || {}).handle || o.handler).apply(r.elem, l), void 0 !== n && (a.result = n) === !1 && (a.preventDefault(), a.stopPropagation()));
                        return d.postDispatch && d.postDispatch.call(this, a), a.result
                    }
                },
                handlers: function(e, t) {
                    var i, n, r, o, s, a = [],
                        l = t.delegateCount,
                        u = e.target;
                    if (l && u.nodeType && !("click" === e.type && e.button >= 1))
                        for (; u !== this; u = u.parentNode || this)
                            if (1 === u.nodeType && ("click" !== e.type || u.disabled !== !0)) {
                                for (o = [], s = {}, i = 0; i < l; i++) n = t[i], r = n.selector + " ", void 0 === s[r] && (s[r] = n.needsContext ? he(r, this).index(u) > -1 : he.find(r, this, null, [u]).length), s[r] && o.push(n);
                                o.length && a.push({
                                    elem: u,
                                    handlers: o
                                })
                            }
                    return u = this, l < t.length && a.push({
                        elem: u,
                        handlers: t.slice(l)
                    }), a
                },
                addProp: function(e, t) {
                    Object.defineProperty(he.Event.prototype, e, {
                        enumerable: !0,
                        configurable: !0,
                        get: he.isFunction(t) ? function() {
                            if (this.originalEvent) return t(this.originalEvent)
                        } : function() {
                            if (this.originalEvent) return this.originalEvent[e]
                        },
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
                    return e[he.expando] ? e : new he.Event(e)
                },
                special: {
                    load: {
                        noBubble: !0
                    },
                    focus: {
                        trigger: function() {
                            if (this !== x() && this.focus) return this.focus(), !1
                        },
                        delegateType: "focusin"
                    },
                    blur: {
                        trigger: function() {
                            if (this === x() && this.blur) return this.blur(), !1
                        },
                        delegateType: "focusout"
                    },
                    click: {
                        trigger: function() {
                            if ("checkbox" === this.type && this.click && he.nodeName(this, "input")) return this.click(), !1
                        },
                        _default: function(e) {
                            return he.nodeName(e.target, "a")
                        }
                    },
                    beforeunload: {
                        postDispatch: function(e) {
                            void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                        }
                    }
                }
            }, he.removeEvent = function(e, t, i) {
                e.removeEventListener && e.removeEventListener(t, i)
            }, he.Event = function(e, t) {
                return this instanceof he.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.returnValue === !1 ? b : T, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && he.extend(this, t), this.timeStamp = e && e.timeStamp || he.now(), void(this[he.expando] = !0)) : new he.Event(e, t)
            }, he.Event.prototype = {
                constructor: he.Event,
                isDefaultPrevented: T,
                isPropagationStopped: T,
                isImmediatePropagationStopped: T,
                isSimulated: !1,
                preventDefault: function() {
                    var e = this.originalEvent;
                    this.isDefaultPrevented = b, e && !this.isSimulated && e.preventDefault()
                },
                stopPropagation: function() {
                    var e = this.originalEvent;
                    this.isPropagationStopped = b, e && !this.isSimulated && e.stopPropagation()
                },
                stopImmediatePropagation: function() {
                    var e = this.originalEvent;
                    this.isImmediatePropagationStopped = b, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
                }
            }, he.each({
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
                    return null == e.which && Qe.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && Ke.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
                }
            }, he.event.addProp), he.each({
                mouseenter: "mouseover",
                mouseleave: "mouseout",
                pointerenter: "pointerover",
                pointerleave: "pointerout"
            }, function(e, t) {
                he.event.special[e] = {
                    delegateType: t,
                    bindType: t,
                    handle: function(e) {
                        var i, n = this,
                            r = e.relatedTarget,
                            o = e.handleObj;
                        return r && (r === n || he.contains(n, r)) || (e.type = o.origType, i = o.handler.apply(this, arguments), e.type = t), i
                    }
                }
            }), he.fn.extend({
                on: function(e, t, i, n) {
                    return k(this, e, t, i, n)
                },
                one: function(e, t, i, n) {
                    return k(this, e, t, i, n, 1)
                },
                off: function(e, t, i) {
                    var n, r;
                    if (e && e.preventDefault && e.handleObj) return n = e.handleObj, he(e.delegateTarget).off(n.namespace ? n.origType + "." + n.namespace : n.origType, n.selector, n.handler), this;
                    if ("object" == typeof e) {
                        for (r in e) this.off(r, t, e[r]);
                        return this
                    }
                    return t !== !1 && "function" != typeof t || (i = t, t = void 0), i === !1 && (i = T), this.each(function() {
                        he.event.remove(this, e, i, t)
                    })
                }
            });
            var et = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
                tt = /<script|<style|<link/i,
                it = /checked\s*(?:[^=]|=\s*.checked.)/i,
                nt = /^true\/(.*)/,
                rt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
            he.extend({
                htmlPrefilter: function(e) {
                    return e.replace(et, "<$1></$2>")
                },
                clone: function(e, t, i) {
                    var n, r, o, s, a = e.cloneNode(!0),
                        l = he.contains(e.ownerDocument, e);
                    if (!(pe.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || he.isXMLDoc(e)))
                        for (s = m(a), o = m(e), n = 0, r = o.length; n < r; n++) A(o[n], s[n]);
                    if (t)
                        if (i)
                            for (o = o || m(e), s = s || m(a), n = 0, r = o.length; n < r; n++) E(o[n], s[n]);
                        else E(e, a);
                    return s = m(a, "script"), s.length > 0 && y(s, !l && m(e, "script")), a
                },
                cleanData: function(e) {
                    for (var t, i, n, r = he.event.special, o = 0; void 0 !== (i = e[o]); o++)
                        if (Pe(i)) {
                            if (t = i[Ne.expando]) {
                                if (t.events)
                                    for (n in t.events) r[n] ? he.event.remove(i, n) : he.removeEvent(i, n, t.handle);
                                i[Ne.expando] = void 0
                            }
                            i[qe.expando] && (i[qe.expando] = void 0)
                        }
                }
            }), he.fn.extend({
                detach: function(e) {
                    return F(this, e, !0)
                },
                remove: function(e) {
                    return F(this, e)
                },
                text: function(e) {
                    return je(this, function(e) {
                        return void 0 === e ? he.text(this) : this.empty().each(function() {
                            1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                        })
                    }, null, e, arguments.length)
                },
                append: function() {
                    return _(this, arguments, function(e) {
                        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                            var t = C(this, e);
                            t.appendChild(e)
                        }
                    })
                },
                prepend: function() {
                    return _(this, arguments, function(e) {
                        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                            var t = C(this, e);
                            t.insertBefore(e, t.firstChild)
                        }
                    })
                },
                before: function() {
                    return _(this, arguments, function(e) {
                        this.parentNode && this.parentNode.insertBefore(e, this)
                    })
                },
                after: function() {
                    return _(this, arguments, function(e) {
                        this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
                    })
                },
                empty: function() {
                    for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (he.cleanData(m(e, !1)), e.textContent = "");
                    return this
                },
                clone: function(e, t) {
                    return e = null != e && e, t = null == t ? e : t, this.map(function() {
                        return he.clone(this, e, t)
                    })
                },
                html: function(e) {
                    return je(this, function(e) {
                        var t = this[0] || {},
                            i = 0,
                            n = this.length;
                        if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                        if ("string" == typeof e && !tt.test(e) && !Ye[(Be.exec(e) || ["", ""])[1].toLowerCase()]) {
                            e = he.htmlPrefilter(e);
                            try {
                                for (; i < n; i++) t = this[i] || {}, 1 === t.nodeType && (he.cleanData(m(t, !1)), t.innerHTML = e);
                                t = 0
                            } catch (e) {}
                        }
                        t && this.empty().append(e)
                    }, null, e, arguments.length)
                },
                replaceWith: function() {
                    var e = [];
                    return _(this, arguments, function(t) {
                        var i = this.parentNode;
                        he.inArray(this, e) < 0 && (he.cleanData(m(this)), i && i.replaceChild(t, this))
                    }, e)
                }
            }), he.each({
                appendTo: "append",
                prependTo: "prepend",
                insertBefore: "before",
                insertAfter: "after",
                replaceAll: "replaceWith"
            }, function(e, t) {
                he.fn[e] = function(e) {
                    for (var i, n = [], r = he(e), o = r.length - 1, s = 0; s <= o; s++) i = s === o ? this : this.clone(!0), he(r[s])[t](i), oe.apply(n, i.get());
                    return this.pushStack(n)
                }
            });
            var ot = /^margin/,
                st = new RegExp("^(" + Le + ")(?!px)[a-z%]+$", "i"),
                at = function(t) {
                    var i = t.ownerDocument.defaultView;
                    return i && i.opener || (i = e), i.getComputedStyle(t)
                };
            ! function() {
                function t() {
                    if (a) {
                        a.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", a.innerHTML = "", Je.appendChild(s);
                        var t = e.getComputedStyle(a);
                        i = "1%" !== t.top, o = "2px" === t.marginLeft, n = "4px" === t.width, a.style.marginRight = "50%", r = "4px" === t.marginRight, Je.removeChild(s), a = null
                    }
                }
                var i, n, r, o, s = te.createElement("div"),
                    a = te.createElement("div");
                a.style && (a.style.backgroundClip = "content-box", a.cloneNode(!0).style.backgroundClip = "", pe.clearCloneStyle = "content-box" === a.style.backgroundClip, s.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", s.appendChild(a), he.extend(pe, {
                    pixelPosition: function() {
                        return t(), i
                    },
                    boxSizingReliable: function() {
                        return t(), n
                    },
                    pixelMarginRight: function() {
                        return t(), r
                    },
                    reliableMarginLeft: function() {
                        return t(), o
                    }
                }))
            }();
            var lt = /^(none|table(?!-c[ea]).+)/,
                ut = {
                    position: "absolute",
                    visibility: "hidden",
                    display: "block"
                },
                dt = {
                    letterSpacing: "0",
                    fontWeight: "400"
                },
                ct = ["Webkit", "Moz", "ms"],
                pt = te.createElement("div").style;
            he.extend({
                cssHooks: {
                    opacity: {
                        get: function(e, t) {
                            if (t) {
                                var i = D(e, "opacity");
                                return "" === i ? "1" : i
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
                    lineHeight: !0,
                    opacity: !0,
                    order: !0,
                    orphans: !0,
                    widows: !0,
                    zIndex: !0,
                    zoom: !0
                },
                cssProps: {
                    float: "cssFloat"
                },
                style: function(e, t, i, n) {
                    if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                        var r, o, s, a = he.camelCase(t),
                            l = e.style;
                        return t = he.cssProps[a] || (he.cssProps[a] = j(a) || a), s = he.cssHooks[t] || he.cssHooks[a], void 0 === i ? s && "get" in s && void 0 !== (r = s.get(e, !1, n)) ? r : l[t] : (o = typeof i, "string" === o && (r = Ie.exec(i)) && r[1] && (i = h(e, t, r), o = "number"), null != i && i === i && ("number" === o && (i += r && r[3] || (he.cssNumber[a] ? "" : "px")), pe.clearCloneStyle || "" !== i || 0 !== t.indexOf("background") || (l[t] = "inherit"), s && "set" in s && void 0 === (i = s.set(e, i, n)) || (l[t] = i)), void 0)
                    }
                },
                css: function(e, t, i, n) {
                    var r, o, s, a = he.camelCase(t);
                    return t = he.cssProps[a] || (he.cssProps[a] = j(a) || a), s = he.cssHooks[t] || he.cssHooks[a], s && "get" in s && (r = s.get(e, !0, i)), void 0 === r && (r = D(e, t, n)), "normal" === r && t in dt && (r = dt[t]), "" === i || i ? (o = parseFloat(r), i === !0 || isFinite(o) ? o || 0 : r) : r
                }
            }), he.each(["height", "width"], function(e, t) {
                he.cssHooks[t] = {
                    get: function(e, i, n) {
                        if (i) return !lt.test(he.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? q(e, t, n) : We(e, ut, function() {
                            return q(e, t, n)
                        })
                    },
                    set: function(e, i, n) {
                        var r, o = n && at(e),
                            s = n && N(e, t, n, "border-box" === he.css(e, "boxSizing", !1, o), o);
                        return s && (r = Ie.exec(i)) && "px" !== (r[3] || "px") && (e.style[t] = i, i = he.css(e, t)), P(e, i, s)
                    }
                }
            }), he.cssHooks.marginLeft = O(pe.reliableMarginLeft, function(e, t) {
                if (t) return (parseFloat(D(e, "marginLeft")) || e.getBoundingClientRect().left - We(e, {
                    marginLeft: 0
                }, function() {
                    return e.getBoundingClientRect().left
                })) + "px"
            }), he.each({
                margin: "",
                padding: "",
                border: "Width"
            }, function(e, t) {
                he.cssHooks[e + t] = {
                    expand: function(i) {
                        for (var n = 0, r = {}, o = "string" == typeof i ? i.split(" ") : [i]; n < 4; n++) r[e + ze[n] + t] = o[n] || o[n - 2] || o[0];
                        return r
                    }
                }, ot.test(e) || (he.cssHooks[e + t].set = P)
            }), he.fn.extend({
                css: function(e, t) {
                    return je(this, function(e, t, i) {
                        var n, r, o = {},
                            s = 0;
                        if (he.isArray(t)) {
                            for (n = at(e), r = t.length; s < r; s++) o[t[s]] = he.css(e, t[s], !1, n);
                            return o
                        }
                        return void 0 !== i ? he.style(e, t, i) : he.css(e, t)
                    }, e, t, arguments.length > 1)
                }
            }), he.Tween = M, M.prototype = {
                constructor: M,
                init: function(e, t, i, n, r, o) {
                    this.elem = e, this.prop = i, this.easing = r || he.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = n, this.unit = o || (he.cssNumber[i] ? "" : "px")
                },
                cur: function() {
                    var e = M.propHooks[this.prop];
                    return e && e.get ? e.get(this) : M.propHooks._default.get(this)
                },
                run: function(e) {
                    var t, i = M.propHooks[this.prop];
                    return this.options.duration ? this.pos = t = he.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), i && i.set ? i.set(this) : M.propHooks._default.set(this), this
                }
            }, M.prototype.init.prototype = M.prototype, M.propHooks = {
                _default: {
                    get: function(e) {
                        var t;
                        return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = he.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0)
                    },
                    set: function(e) {
                        he.fx.step[e.prop] ? he.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[he.cssProps[e.prop]] && !he.cssHooks[e.prop] ? e.elem[e.prop] = e.now : he.style(e.elem, e.prop, e.now + e.unit)
                    }
                }
            }, M.propHooks.scrollTop = M.propHooks.scrollLeft = {
                set: function(e) {
                    e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
                }
            }, he.easing = {
                linear: function(e) {
                    return e
                },
                swing: function(e) {
                    return .5 - Math.cos(e * Math.PI) / 2
                },
                _default: "swing"
            }, he.fx = M.prototype.init, he.fx.step = {};
            var ft, ht, vt = /^(?:toggle|show|hide)$/,
                gt = /queueHooks$/;
            he.Animation = he.extend(V, {
                    tweeners: {
                        "*": [function(e, t) {
                            var i = this.createTween(e, t);
                            return h(i.elem, e, Ie.exec(t), i), i
                        }]
                    },
                    tweener: function(e, t) {
                        he.isFunction(e) ? (t = e, e = ["*"]) : e = e.match(Fe);
                        for (var i, n = 0, r = e.length; n < r; n++) i = e[n], V.tweeners[i] = V.tweeners[i] || [], V.tweeners[i].unshift(t)
                    },
                    prefilters: [R],
                    prefilter: function(e, t) {
                        t ? V.prefilters.unshift(e) : V.prefilters.push(e)
                    }
                }), he.speed = function(e, t, i) {
                    var n = e && "object" == typeof e ? he.extend({}, e) : {
                        complete: i || !i && t || he.isFunction(e) && e,
                        duration: e,
                        easing: i && t || t && !he.isFunction(t) && t
                    };
                    return he.fx.off || te.hidden ? n.duration = 0 : "number" != typeof n.duration && (n.duration in he.fx.speeds ? n.duration = he.fx.speeds[n.duration] : n.duration = he.fx.speeds._default), null != n.queue && n.queue !== !0 || (n.queue = "fx"), n.old = n.complete, n.complete = function() {
                        he.isFunction(n.old) && n.old.call(this), n.queue && he.dequeue(this, n.queue)
                    }, n
                }, he.fn.extend({
                    fadeTo: function(e, t, i, n) {
                        return this.filter(Re).css("opacity", 0).show().end().animate({
                            opacity: t
                        }, e, i, n)
                    },
                    animate: function(e, t, i, n) {
                        var r = he.isEmptyObject(e),
                            o = he.speed(t, i, n),
                            s = function() {
                                var t = V(this, he.extend({}, e), o);
                                (r || Ne.get(this, "finish")) && t.stop(!0)
                            };
                        return s.finish = s, r || o.queue === !1 ? this.each(s) : this.queue(o.queue, s)
                    },
                    stop: function(e, t, i) {
                        var n = function(e) {
                            var t = e.stop;
                            delete e.stop, t(i)
                        };
                        return "string" != typeof e && (i = t, t = e, e = void 0), t && e !== !1 && this.queue(e || "fx", []), this.each(function() {
                            var t = !0,
                                r = null != e && e + "queueHooks",
                                o = he.timers,
                                s = Ne.get(this);
                            if (r) s[r] && s[r].stop && n(s[r]);
                            else
                                for (r in s) s[r] && s[r].stop && gt.test(r) && n(s[r]);
                            for (r = o.length; r--;) o[r].elem !== this || null != e && o[r].queue !== e || (o[r].anim.stop(i), t = !1, o.splice(r, 1));
                            !t && i || he.dequeue(this, e)
                        })
                    },
                    finish: function(e) {
                        return e !== !1 && (e = e || "fx"), this.each(function() {
                            var t, i = Ne.get(this),
                                n = i[e + "queue"],
                                r = i[e + "queueHooks"],
                                o = he.timers,
                                s = n ? n.length : 0;
                            for (i.finish = !0, he.queue(this, e, []), r && r.stop && r.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                            for (t = 0; t < s; t++) n[t] && n[t].finish && n[t].finish.call(this);
                            delete i.finish
                        })
                    }
                }), he.each(["toggle", "show", "hide"], function(e, t) {
                    var i = he.fn[t];
                    he.fn[t] = function(e, n, r) {
                        return null == e || "boolean" == typeof e ? i.apply(this, arguments) : this.animate(I(t, !0), e, n, r)
                    }
                }), he.each({
                    slideDown: I("show"),
                    slideUp: I("hide"),
                    slideToggle: I("toggle"),
                    fadeIn: {
                        opacity: "show"
                    },
                    fadeOut: {
                        opacity: "hide"
                    },
                    fadeToggle: {
                        opacity: "toggle"
                    }
                }, function(e, t) {
                    he.fn[e] = function(e, i, n) {
                        return this.animate(t, e, i, n)
                    }
                }), he.timers = [], he.fx.tick = function() {
                    var e, t = 0,
                        i = he.timers;
                    for (ft = he.now(); t < i.length; t++) e = i[t], e() || i[t] !== e || i.splice(t--, 1);
                    i.length || he.fx.stop(), ft = void 0
                }, he.fx.timer = function(e) {
                    he.timers.push(e), e() ? he.fx.start() : he.timers.pop()
                }, he.fx.interval = 13, he.fx.start = function() {
                    ht || (ht = e.requestAnimationFrame ? e.requestAnimationFrame(H) : e.setInterval(he.fx.tick, he.fx.interval))
                }, he.fx.stop = function() {
                    e.cancelAnimationFrame ? e.cancelAnimationFrame(ht) : e.clearInterval(ht), ht = null
                }, he.fx.speeds = {
                    slow: 600,
                    fast: 200,
                    _default: 400
                }, he.fn.delay = function(t, i) {
                    return t = he.fx ? he.fx.speeds[t] || t : t, i = i || "fx", this.queue(i, function(i, n) {
                        var r = e.setTimeout(i, t);
                        n.stop = function() {
                            e.clearTimeout(r)
                        }
                    })
                },
                function() {
                    var e = te.createElement("input"),
                        t = te.createElement("select"),
                        i = t.appendChild(te.createElement("option"));
                    e.type = "checkbox", pe.checkOn = "" !== e.value, pe.optSelected = i.selected, e = te.createElement("input"), e.value = "t", e.type = "radio", pe.radioValue = "t" === e.value
                }();
            var mt, yt = he.expr.attrHandle;
            he.fn.extend({
                attr: function(e, t) {
                    return je(this, he.attr, e, t, arguments.length > 1)
                },
                removeAttr: function(e) {
                    return this.each(function() {
                        he.removeAttr(this, e)
                    })
                }
            }), he.extend({
                attr: function(e, t, i) {
                    var n, r, o = e.nodeType;
                    if (3 !== o && 8 !== o && 2 !== o) return "undefined" == typeof e.getAttribute ? he.prop(e, t, i) : (1 === o && he.isXMLDoc(e) || (r = he.attrHooks[t.toLowerCase()] || (he.expr.match.bool.test(t) ? mt : void 0)), void 0 !== i ? null === i ? void he.removeAttr(e, t) : r && "set" in r && void 0 !== (n = r.set(e, i, t)) ? n : (e.setAttribute(t, i + ""), i) : r && "get" in r && null !== (n = r.get(e, t)) ? n : (n = he.find.attr(e, t), null == n ? void 0 : n))
                },
                attrHooks: {
                    type: {
                        set: function(e, t) {
                            if (!pe.radioValue && "radio" === t && he.nodeName(e, "input")) {
                                var i = e.value;
                                return e.setAttribute("type", t), i && (e.value = i), t
                            }
                        }
                    }
                },
                removeAttr: function(e, t) {
                    var i, n = 0,
                        r = t && t.match(Fe);
                    if (r && 1 === e.nodeType)
                        for (; i = r[n++];) e.removeAttribute(i)
                }
            }), mt = {
                set: function(e, t, i) {
                    return t === !1 ? he.removeAttr(e, i) : e.setAttribute(i, i), i
                }
            }, he.each(he.expr.match.bool.source.match(/\w+/g), function(e, t) {
                var i = yt[t] || he.find.attr;
                yt[t] = function(e, t, n) {
                    var r, o, s = t.toLowerCase();
                    return n || (o = yt[s], yt[s] = r, r = null != i(e, t, n) ? s : null, yt[s] = o), r
                }
            });
            var wt = /^(?:input|select|textarea|button)$/i,
                bt = /^(?:a|area)$/i;
            he.fn.extend({
                prop: function(e, t) {
                    return je(this, he.prop, e, t, arguments.length > 1)
                },
                removeProp: function(e) {
                    return this.each(function() {
                        delete this[he.propFix[e] || e]
                    })
                }
            }), he.extend({
                prop: function(e, t, i) {
                    var n, r, o = e.nodeType;
                    if (3 !== o && 8 !== o && 2 !== o) return 1 === o && he.isXMLDoc(e) || (t = he.propFix[t] || t, r = he.propHooks[t]), void 0 !== i ? r && "set" in r && void 0 !== (n = r.set(e, i, t)) ? n : e[t] = i : r && "get" in r && null !== (n = r.get(e, t)) ? n : e[t]
                },
                propHooks: {
                    tabIndex: {
                        get: function(e) {
                            var t = he.find.attr(e, "tabindex");
                            return t ? parseInt(t, 10) : wt.test(e.nodeName) || bt.test(e.nodeName) && e.href ? 0 : -1
                        }
                    }
                },
                propFix: {
                    for: "htmlFor",
                    class: "className"
                }
            }), pe.optSelected || (he.propHooks.selected = {
                get: function(e) {
                    var t = e.parentNode;
                    return t && t.parentNode && t.parentNode.selectedIndex, null
                },
                set: function(e) {
                    var t = e.parentNode;
                    t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
                }
            }), he.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
                he.propFix[this.toLowerCase()] = this
            }), he.fn.extend({
                addClass: function(e) {
                    var t, i, n, r, o, s, a, l = 0;
                    if (he.isFunction(e)) return this.each(function(t) {
                        he(this).addClass(e.call(this, t, B(this)))
                    });
                    if ("string" == typeof e && e)
                        for (t = e.match(Fe) || []; i = this[l++];)
                            if (r = B(i), n = 1 === i.nodeType && " " + U(r) + " ") {
                                for (s = 0; o = t[s++];) n.indexOf(" " + o + " ") < 0 && (n += o + " ");
                                a = U(n), r !== a && i.setAttribute("class", a)
                            }
                    return this
                },
                removeClass: function(e) {
                    var t, i, n, r, o, s, a, l = 0;
                    if (he.isFunction(e)) return this.each(function(t) {
                        he(this).removeClass(e.call(this, t, B(this)))
                    });
                    if (!arguments.length) return this.attr("class", "");
                    if ("string" == typeof e && e)
                        for (t = e.match(Fe) || []; i = this[l++];)
                            if (r = B(i), n = 1 === i.nodeType && " " + U(r) + " ") {
                                for (s = 0; o = t[s++];)
                                    for (; n.indexOf(" " + o + " ") > -1;) n = n.replace(" " + o + " ", " ");
                                a = U(n), r !== a && i.setAttribute("class", a)
                            }
                    return this
                },
                toggleClass: function(e, t) {
                    var i = typeof e;
                    return "boolean" == typeof t && "string" === i ? t ? this.addClass(e) : this.removeClass(e) : he.isFunction(e) ? this.each(function(i) {
                        he(this).toggleClass(e.call(this, i, B(this), t), t)
                    }) : this.each(function() {
                        var t, n, r, o;
                        if ("string" === i)
                            for (n = 0, r = he(this), o = e.match(Fe) || []; t = o[n++];) r.hasClass(t) ? r.removeClass(t) : r.addClass(t);
                        else void 0 !== e && "boolean" !== i || (t = B(this), t && Ne.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || e === !1 ? "" : Ne.get(this, "__className__") || ""))
                    })
                },
                hasClass: function(e) {
                    var t, i, n = 0;
                    for (t = " " + e + " "; i = this[n++];)
                        if (1 === i.nodeType && (" " + U(B(i)) + " ").indexOf(t) > -1) return !0;
                    return !1
                }
            });
            var Tt = /\r/g;
            he.fn.extend({
                val: function(e) {
                    var t, i, n, r = this[0]; {
                        if (arguments.length) return n = he.isFunction(e), this.each(function(i) {
                            var r;
                            1 === this.nodeType && (r = n ? e.call(this, i, he(this).val()) : e, null == r ? r = "" : "number" == typeof r ? r += "" : he.isArray(r) && (r = he.map(r, function(e) {
                                return null == e ? "" : e + ""
                            })), t = he.valHooks[this.type] || he.valHooks[this.nodeName.toLowerCase()], t && "set" in t && void 0 !== t.set(this, r, "value") || (this.value = r))
                        });
                        if (r) return t = he.valHooks[r.type] || he.valHooks[r.nodeName.toLowerCase()], t && "get" in t && void 0 !== (i = t.get(r, "value")) ? i : (i = r.value, "string" == typeof i ? i.replace(Tt, "") : null == i ? "" : i)
                    }
                }
            }), he.extend({
                valHooks: {
                    option: {
                        get: function(e) {
                            var t = he.find.attr(e, "value");
                            return null != t ? t : U(he.text(e))
                        }
                    },
                    select: {
                        get: function(e) {
                            var t, i, n, r = e.options,
                                o = e.selectedIndex,
                                s = "select-one" === e.type,
                                a = s ? null : [],
                                l = s ? o + 1 : r.length;
                            for (n = o < 0 ? l : s ? o : 0; n < l; n++)
                                if (i = r[n], (i.selected || n === o) && !i.disabled && (!i.parentNode.disabled || !he.nodeName(i.parentNode, "optgroup"))) {
                                    if (t = he(i).val(), s) return t;
                                    a.push(t)
                                }
                            return a
                        },
                        set: function(e, t) {
                            for (var i, n, r = e.options, o = he.makeArray(t), s = r.length; s--;) n = r[s], (n.selected = he.inArray(he.valHooks.option.get(n), o) > -1) && (i = !0);
                            return i || (e.selectedIndex = -1), o
                        }
                    }
                }
            }), he.each(["radio", "checkbox"], function() {
                he.valHooks[this] = {
                    set: function(e, t) {
                        if (he.isArray(t)) return e.checked = he.inArray(he(e).val(), t) > -1
                    }
                }, pe.checkOn || (he.valHooks[this].get = function(e) {
                    return null === e.getAttribute("value") ? "on" : e.value
                })
            });
            var xt = /^(?:focusinfocus|focusoutblur)$/;
            he.extend(he.event, {
                trigger: function(t, i, n, r) {
                    var o, s, a, l, u, d, c, p = [n || te],
                        f = ue.call(t, "type") ? t.type : t,
                        h = ue.call(t, "namespace") ? t.namespace.split(".") : [];
                    if (s = a = n = n || te, 3 !== n.nodeType && 8 !== n.nodeType && !xt.test(f + he.event.triggered) && (f.indexOf(".") > -1 && (h = f.split("."), f = h.shift(), h.sort()), u = f.indexOf(":") < 0 && "on" + f, t = t[he.expando] ? t : new he.Event(f, "object" == typeof t && t), t.isTrigger = r ? 2 : 3, t.namespace = h.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = n), i = null == i ? [t] : he.makeArray(i, [t]), c = he.event.special[f] || {}, r || !c.trigger || c.trigger.apply(n, i) !== !1)) {
                        if (!r && !c.noBubble && !he.isWindow(n)) {
                            for (l = c.delegateType || f, xt.test(l + f) || (s = s.parentNode); s; s = s.parentNode) p.push(s), a = s;
                            a === (n.ownerDocument || te) && p.push(a.defaultView || a.parentWindow || e)
                        }
                        for (o = 0;
                            (s = p[o++]) && !t.isPropagationStopped();) t.type = o > 1 ? l : c.bindType || f, d = (Ne.get(s, "events") || {})[t.type] && Ne.get(s, "handle"), d && d.apply(s, i), d = u && s[u], d && d.apply && Pe(s) && (t.result = d.apply(s, i), t.result === !1 && t.preventDefault());
                        return t.type = f, r || t.isDefaultPrevented() || c._default && c._default.apply(p.pop(), i) !== !1 || !Pe(n) || u && he.isFunction(n[f]) && !he.isWindow(n) && (a = n[u], a && (n[u] = null), he.event.triggered = f, n[f](), he.event.triggered = void 0, a && (n[u] = a)), t.result
                    }
                },
                simulate: function(e, t, i) {
                    var n = he.extend(new he.Event, i, {
                        type: e,
                        isSimulated: !0
                    });
                    he.event.trigger(n, null, t)
                }
            }), he.fn.extend({
                trigger: function(e, t) {
                    return this.each(function() {
                        he.event.trigger(e, t, this)
                    })
                },
                triggerHandler: function(e, t) {
                    var i = this[0];
                    if (i) return he.event.trigger(e, t, i, !0)
                }
            }), he.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, t) {
                he.fn[t] = function(e, i) {
                    return arguments.length > 0 ? this.on(t, null, e, i) : this.trigger(t)
                }
            }), he.fn.extend({
                hover: function(e, t) {
                    return this.mouseenter(e).mouseleave(t || e)
                }
            }), pe.focusin = "onfocusin" in e, pe.focusin || he.each({
                focus: "focusin",
                blur: "focusout"
            }, function(e, t) {
                var i = function(e) {
                    he.event.simulate(t, e.target, he.event.fix(e))
                };
                he.event.special[t] = {
                    setup: function() {
                        var n = this.ownerDocument || this,
                            r = Ne.access(n, t);
                        r || n.addEventListener(e, i, !0), Ne.access(n, t, (r || 0) + 1)
                    },
                    teardown: function() {
                        var n = this.ownerDocument || this,
                            r = Ne.access(n, t) - 1;
                        r ? Ne.access(n, t, r) : (n.removeEventListener(e, i, !0), Ne.remove(n, t))
                    }
                }
            });
            var kt = e.location,
                Ct = he.now(),
                St = /\?/;
            he.parseXML = function(t) {
                var i;
                if (!t || "string" != typeof t) return null;
                try {
                    i = (new e.DOMParser).parseFromString(t, "text/xml")
                } catch (e) {
                    i = void 0
                }
                return i && !i.getElementsByTagName("parsererror").length || he.error("Invalid XML: " + t), i
            };
            var $t = /\[\]$/,
                Et = /\r?\n/g,
                At = /^(?:submit|button|image|reset|file)$/i,
                _t = /^(?:input|select|textarea|keygen)/i;
            he.param = function(e, t) {
                var i, n = [],
                    r = function(e, t) {
                        var i = he.isFunction(t) ? t() : t;
                        n[n.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == i ? "" : i)
                    };
                if (he.isArray(e) || e.jquery && !he.isPlainObject(e)) he.each(e, function() {
                    r(this.name, this.value)
                });
                else
                    for (i in e) X(i, e[i], t, r);
                return n.join("&")
            }, he.fn.extend({
                serialize: function() {
                    return he.param(this.serializeArray())
                },
                serializeArray: function() {
                    return this.map(function() {
                        var e = he.prop(this, "elements");
                        return e ? he.makeArray(e) : this
                    }).filter(function() {
                        var e = this.type;
                        return this.name && !he(this).is(":disabled") && _t.test(this.nodeName) && !At.test(e) && (this.checked || !Ue.test(e))
                    }).map(function(e, t) {
                        var i = he(this).val();
                        return null == i ? null : he.isArray(i) ? he.map(i, function(e) {
                            return {
                                name: t.name,
                                value: e.replace(Et, "\r\n")
                            }
                        }) : {
                            name: t.name,
                            value: i.replace(Et, "\r\n")
                        }
                    }).get()
                }
            });
            var Ft = /%20/g,
                Dt = /#.*$/,
                Ot = /([?&])_=[^&]*/,
                jt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
                Pt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
                Nt = /^(?:GET|HEAD)$/,
                qt = /^\/\//,
                Mt = {},
                Ht = {},
                Lt = "*/".concat("*"),
                It = te.createElement("a");
            It.href = kt.href, he.extend({
                active: 0,
                lastModified: {},
                etag: {},
                ajaxSettings: {
                    url: kt.href,
                    type: "GET",
                    isLocal: Pt.test(kt.protocol),
                    global: !0,
                    processData: !0,
                    async: !0,
                    contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                    accepts: {
                        "*": Lt,
                        text: "text/plain",
                        html: "text/html",
                        xml: "application/xml, text/xml",
                        json: "application/json, text/javascript"
                    },
                    contents: {
                        xml: /\bxml\b/,
                        html: /\bhtml/,
                        json: /\bjson\b/
                    },
                    responseFields: {
                        xml: "responseXML",
                        text: "responseText",
                        json: "responseJSON"
                    },
                    converters: {
                        "* text": String,
                        "text html": !0,
                        "text json": JSON.parse,
                        "text xml": he.parseXML
                    },
                    flatOptions: {
                        url: !0,
                        context: !0
                    }
                },
                ajaxSetup: function(e, t) {
                    return t ? J(J(e, he.ajaxSettings), t) : J(he.ajaxSettings, e)
                },
                ajaxPrefilter: Y(Mt),
                ajaxTransport: Y(Ht),
                ajax: function(t, i) {
                    function n(t, i, n, a) {
                        var u, p, f, b, T, x = i;
                        d || (d = !0, l && e.clearTimeout(l), r = void 0, s = a || "", k.readyState = t > 0 ? 4 : 0, u = t >= 200 && t < 300 || 304 === t, n && (b = Q(h, k, n)), b = K(h, b, k, u), u ? (h.ifModified && (T = k.getResponseHeader("Last-Modified"), T && (he.lastModified[o] = T), T = k.getResponseHeader("etag"), T && (he.etag[o] = T)), 204 === t || "HEAD" === h.type ? x = "nocontent" : 304 === t ? x = "notmodified" : (x = b.state, p = b.data, f = b.error, u = !f)) : (f = x, !t && x || (x = "error", t < 0 && (t = 0))), k.status = t, k.statusText = (i || x) + "", u ? m.resolveWith(v, [p, x, k]) : m.rejectWith(v, [k, x, f]), k.statusCode(w), w = void 0, c && g.trigger(u ? "ajaxSuccess" : "ajaxError", [k, h, u ? p : f]), y.fireWith(v, [k, x]), c && (g.trigger("ajaxComplete", [k, h]), --he.active || he.event.trigger("ajaxStop")))
                    }
                    "object" == typeof t && (i = t, t = void 0), i = i || {};
                    var r, o, s, a, l, u, d, c, p, f, h = he.ajaxSetup({}, i),
                        v = h.context || h,
                        g = h.context && (v.nodeType || v.jquery) ? he(v) : he.event,
                        m = he.Deferred(),
                        y = he.Callbacks("once memory"),
                        w = h.statusCode || {},
                        b = {},
                        T = {},
                        x = "canceled",
                        k = {
                            readyState: 0,
                            getResponseHeader: function(e) {
                                var t;
                                if (d) {
                                    if (!a)
                                        for (a = {}; t = jt.exec(s);) a[t[1].toLowerCase()] = t[2];
                                    t = a[e.toLowerCase()]
                                }
                                return null == t ? null : t
                            },
                            getAllResponseHeaders: function() {
                                return d ? s : null
                            },
                            setRequestHeader: function(e, t) {
                                return null == d && (e = T[e.toLowerCase()] = T[e.toLowerCase()] || e, b[e] = t), this
                            },
                            overrideMimeType: function(e) {
                                return null == d && (h.mimeType = e), this
                            },
                            statusCode: function(e) {
                                var t;
                                if (e)
                                    if (d) k.always(e[k.status]);
                                    else
                                        for (t in e) w[t] = [w[t], e[t]];
                                return this
                            },
                            abort: function(e) {
                                var t = e || x;
                                return r && r.abort(t), n(0, t), this
                            }
                        };
                    if (m.promise(k), h.url = ((t || h.url || kt.href) + "").replace(qt, kt.protocol + "//"), h.type = i.method || i.type || h.method || h.type, h.dataTypes = (h.dataType || "*").toLowerCase().match(Fe) || [""], null == h.crossDomain) {
                        u = te.createElement("a");
                        try {
                            u.href = h.url, u.href = u.href, h.crossDomain = It.protocol + "//" + It.host != u.protocol + "//" + u.host
                        } catch (e) {
                            h.crossDomain = !0
                        }
                    }
                    if (h.data && h.processData && "string" != typeof h.data && (h.data = he.param(h.data, h.traditional)), G(Mt, h, i, k), d) return k;
                    c = he.event && h.global, c && 0 === he.active++ && he.event.trigger("ajaxStart"), h.type = h.type.toUpperCase(), h.hasContent = !Nt.test(h.type), o = h.url.replace(Dt, ""), h.hasContent ? h.data && h.processData && 0 === (h.contentType || "").indexOf("application/x-www-form-urlencoded") && (h.data = h.data.replace(Ft, "+")) : (f = h.url.slice(o.length), h.data && (o += (St.test(o) ? "&" : "?") + h.data, delete h.data), h.cache === !1 && (o = o.replace(Ot, "$1"), f = (St.test(o) ? "&" : "?") + "_=" + Ct++ + f), h.url = o + f), h.ifModified && (he.lastModified[o] && k.setRequestHeader("If-Modified-Since", he.lastModified[o]), he.etag[o] && k.setRequestHeader("If-None-Match", he.etag[o])), (h.data && h.hasContent && h.contentType !== !1 || i.contentType) && k.setRequestHeader("Content-Type", h.contentType), k.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + Lt + "; q=0.01" : "") : h.accepts["*"]);
                    for (p in h.headers) k.setRequestHeader(p, h.headers[p]);
                    if (h.beforeSend && (h.beforeSend.call(v, k, h) === !1 || d)) return k.abort();
                    if (x = "abort", y.add(h.complete), k.done(h.success), k.fail(h.error), r = G(Ht, h, i, k)) {
                        if (k.readyState = 1, c && g.trigger("ajaxSend", [k, h]), d) return k;
                        h.async && h.timeout > 0 && (l = e.setTimeout(function() {
                            k.abort("timeout")
                        }, h.timeout));
                        try {
                            d = !1, r.send(b, n)
                        } catch (e) {
                            if (d) throw e;
                            n(-1, e)
                        }
                    } else n(-1, "No Transport");
                    return k
                },
                getJSON: function(e, t, i) {
                    return he.get(e, t, i, "json")
                },
                getScript: function(e, t) {
                    return he.get(e, void 0, t, "script")
                }
            }), he.each(["get", "post"], function(e, t) {
                he[t] = function(e, i, n, r) {
                    return he.isFunction(i) && (r = r || n, n = i, i = void 0), he.ajax(he.extend({
                        url: e,
                        type: t,
                        dataType: r,
                        data: i,
                        success: n
                    }, he.isPlainObject(e) && e))
                }
            }), he._evalUrl = function(e) {
                return he.ajax({
                    url: e,
                    type: "GET",
                    dataType: "script",
                    cache: !0,
                    async: !1,
                    global: !1,
                    throws: !0
                })
            }, he.fn.extend({
                wrapAll: function(e) {
                    var t;
                    return this[0] && (he.isFunction(e) && (e = e.call(this[0])), t = he(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                        for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                        return e
                    }).append(this)), this
                },
                wrapInner: function(e) {
                    return he.isFunction(e) ? this.each(function(t) {
                        he(this).wrapInner(e.call(this, t))
                    }) : this.each(function() {
                        var t = he(this),
                            i = t.contents();
                        i.length ? i.wrapAll(e) : t.append(e)
                    })
                },
                wrap: function(e) {
                    var t = he.isFunction(e);
                    return this.each(function(i) {
                        he(this).wrapAll(t ? e.call(this, i) : e)
                    })
                },
                unwrap: function(e) {
                    return this.parent(e).not("body").each(function() {
                        he(this).replaceWith(this.childNodes)
                    }), this
                }
            }), he.expr.pseudos.hidden = function(e) {
                return !he.expr.pseudos.visible(e)
            }, he.expr.pseudos.visible = function(e) {
                return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
            }, he.ajaxSettings.xhr = function() {
                try {
                    return new e.XMLHttpRequest
                } catch (e) {}
            };
            var zt = {
                    0: 200,
                    1223: 204
                },
                Rt = he.ajaxSettings.xhr();
            pe.cors = !!Rt && "withCredentials" in Rt, pe.ajax = Rt = !!Rt, he.ajaxTransport(function(t) {
                var i, n;
                if (pe.cors || Rt && !t.crossDomain) return {
                    send: function(r, o) {
                        var s, a = t.xhr();
                        if (a.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                            for (s in t.xhrFields) a[s] = t.xhrFields[s];
                        t.mimeType && a.overrideMimeType && a.overrideMimeType(t.mimeType), t.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest");
                        for (s in r) a.setRequestHeader(s, r[s]);
                        i = function(e) {
                            return function() {
                                i && (i = n = a.onload = a.onerror = a.onabort = a.onreadystatechange = null, "abort" === e ? a.abort() : "error" === e ? "number" != typeof a.status ? o(0, "error") : o(a.status, a.statusText) : o(zt[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? {
                                    binary: a.response
                                } : {
                                    text: a.responseText
                                }, a.getAllResponseHeaders()))
                            }
                        }, a.onload = i(), n = a.onerror = i("error"), void 0 !== a.onabort ? a.onabort = n : a.onreadystatechange = function() {
                            4 === a.readyState && e.setTimeout(function() {
                                i && n()
                            })
                        }, i = i("abort");
                        try {
                            a.send(t.hasContent && t.data || null)
                        } catch (e) {
                            if (i) throw e
                        }
                    },
                    abort: function() {
                        i && i()
                    }
                }
            }), he.ajaxPrefilter(function(e) {
                e.crossDomain && (e.contents.script = !1)
            }), he.ajaxSetup({
                accepts: {
                    script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
                },
                contents: {
                    script: /\b(?:java|ecma)script\b/
                },
                converters: {
                    "text script": function(e) {
                        return he.globalEval(e), e
                    }
                }
            }), he.ajaxPrefilter("script", function(e) {
                void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
            }), he.ajaxTransport("script", function(e) {
                if (e.crossDomain) {
                    var t, i;
                    return {
                        send: function(n, r) {
                            t = he("<script>").prop({
                                charset: e.scriptCharset,
                                src: e.url
                            }).on("load error", i = function(e) {
                                t.remove(), i = null, e && r("error" === e.type ? 404 : 200, e.type)
                            }), te.head.appendChild(t[0])
                        },
                        abort: function() {
                            i && i()
                        }
                    }
                }
            });
            var Wt = [],
                Vt = /(=)\?(?=&|$)|\?\?/;
            he.ajaxSetup({
                jsonp: "callback",
                jsonpCallback: function() {
                    var e = Wt.pop() || he.expando + "_" + Ct++;
                    return this[e] = !0, e
                }
            }), he.ajaxPrefilter("json jsonp", function(t, i, n) {
                var r, o, s, a = t.jsonp !== !1 && (Vt.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Vt.test(t.data) && "data");
                if (a || "jsonp" === t.dataTypes[0]) return r = t.jsonpCallback = he.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, a ? t[a] = t[a].replace(Vt, "$1" + r) : t.jsonp !== !1 && (t.url += (St.test(t.url) ? "&" : "?") + t.jsonp + "=" + r), t.converters["script json"] = function() {
                    return s || he.error(r + " was not called"), s[0]
                }, t.dataTypes[0] = "json", o = e[r], e[r] = function() {
                    s = arguments
                }, n.always(function() {
                    void 0 === o ? he(e).removeProp(r) : e[r] = o, t[r] && (t.jsonpCallback = i.jsonpCallback, Wt.push(r)), s && he.isFunction(o) && o(s[0]), s = o = void 0
                }), "script"
            }), pe.createHTMLDocument = function() {
                var e = te.implementation.createHTMLDocument("").body;
                return e.innerHTML = "<form></form><form></form>", 2 === e.childNodes.length
            }(), he.parseHTML = function(e, t, i) {
                if ("string" != typeof e) return [];
                "boolean" == typeof t && (i = t, t = !1);
                var n, r, o;
                return t || (pe.createHTMLDocument ? (t = te.implementation.createHTMLDocument(""), n = t.createElement("base"), n.href = te.location.href, t.head.appendChild(n)) : t = te), r = ke.exec(e), o = !i && [], r ? [t.createElement(r[1])] : (r = w([e], t, o), o && o.length && he(o).remove(), he.merge([], r.childNodes))
            }, he.fn.load = function(e, t, i) {
                var n, r, o, s = this,
                    a = e.indexOf(" ");
                return a > -1 && (n = U(e.slice(a)), e = e.slice(0, a)), he.isFunction(t) ? (i = t, t = void 0) : t && "object" == typeof t && (r = "POST"), s.length > 0 && he.ajax({
                    url: e,
                    type: r || "GET",
                    dataType: "html",
                    data: t
                }).done(function(e) {
                    o = arguments, s.html(n ? he("<div>").append(he.parseHTML(e)).find(n) : e)
                }).always(i && function(e, t) {
                    s.each(function() {
                        i.apply(this, o || [e.responseText, t, e])
                    })
                }), this
            }, he.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
                he.fn[t] = function(e) {
                    return this.on(t, e)
                }
            }), he.expr.pseudos.animated = function(e) {
                return he.grep(he.timers, function(t) {
                    return e === t.elem
                }).length
            }, he.offset = {
                setOffset: function(e, t, i) {
                    var n, r, o, s, a, l, u, d = he.css(e, "position"),
                        c = he(e),
                        p = {};
                    "static" === d && (e.style.position = "relative"), a = c.offset(), o = he.css(e, "top"), l = he.css(e, "left"), u = ("absolute" === d || "fixed" === d) && (o + l).indexOf("auto") > -1, u ? (n = c.position(), s = n.top, r = n.left) : (s = parseFloat(o) || 0, r = parseFloat(l) || 0), he.isFunction(t) && (t = t.call(e, i, he.extend({}, a))), null != t.top && (p.top = t.top - a.top + s), null != t.left && (p.left = t.left - a.left + r), "using" in t ? t.using.call(e, p) : c.css(p)
                }
            }, he.fn.extend({
                offset: function(e) {
                    if (arguments.length) return void 0 === e ? this : this.each(function(t) {
                        he.offset.setOffset(this, e, t)
                    });
                    var t, i, n, r, o = this[0];
                    if (o) return o.getClientRects().length ? (n = o.getBoundingClientRect(), n.width || n.height ? (r = o.ownerDocument, i = Z(r), t = r.documentElement, {
                        top: n.top + i.pageYOffset - t.clientTop,
                        left: n.left + i.pageXOffset - t.clientLeft
                    }) : n) : {
                        top: 0,
                        left: 0
                    }
                },
                position: function() {
                    if (this[0]) {
                        var e, t, i = this[0],
                            n = {
                                top: 0,
                                left: 0
                            };
                        return "fixed" === he.css(i, "position") ? t = i.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), he.nodeName(e[0], "html") || (n = e.offset()), n = {
                            top: n.top + he.css(e[0], "borderTopWidth", !0),
                            left: n.left + he.css(e[0], "borderLeftWidth", !0)
                        }), {
                            top: t.top - n.top - he.css(i, "marginTop", !0),
                            left: t.left - n.left - he.css(i, "marginLeft", !0)
                        }
                    }
                },
                offsetParent: function() {
                    return this.map(function() {
                        for (var e = this.offsetParent; e && "static" === he.css(e, "position");) e = e.offsetParent;
                        return e || Je
                    })
                }
            }), he.each({
                scrollLeft: "pageXOffset",
                scrollTop: "pageYOffset"
            }, function(e, t) {
                var i = "pageYOffset" === t;
                he.fn[e] = function(n) {
                    return je(this, function(e, n, r) {
                        var o = Z(e);
                        return void 0 === r ? o ? o[t] : e[n] : void(o ? o.scrollTo(i ? o.pageXOffset : r, i ? r : o.pageYOffset) : e[n] = r)
                    }, e, n, arguments.length)
                }
            }), he.each(["top", "left"], function(e, t) {
                he.cssHooks[t] = O(pe.pixelPosition, function(e, i) {
                    if (i) return i = D(e, t), st.test(i) ? he(e).position()[t] + "px" : i
                })
            }), he.each({
                Height: "height",
                Width: "width"
            }, function(e, t) {
                he.each({
                    padding: "inner" + e,
                    content: t,
                    "": "outer" + e
                }, function(i, n) {
                    he.fn[n] = function(r, o) {
                        var s = arguments.length && (i || "boolean" != typeof r),
                            a = i || (r === !0 || o === !0 ? "margin" : "border");
                        return je(this, function(t, i, r) {
                            var o;
                            return he.isWindow(t) ? 0 === n.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement, Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === r ? he.css(t, i, a) : he.style(t, i, r, a)
                        }, t, s ? r : void 0, s)
                    }
                })
            }), he.fn.extend({
                bind: function(e, t, i) {
                    return this.on(e, null, t, i)
                },
                unbind: function(e, t) {
                    return this.off(e, null, t)
                },
                delegate: function(e, t, i, n) {
                    return this.on(t, e, i, n)
                },
                undelegate: function(e, t, i) {
                    return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", i)
                }
            }), he.parseJSON = JSON.parse, "function" == typeof define && define.amd && define("jquery", [], function() {
                return he
            });
            var Ut = e.jQuery,
                Bt = e.$;
            return he.noConflict = function(t) {
                return e.$ === he && (e.$ = Bt), t && e.jQuery === he && (e.jQuery = Ut), he
            }, t || (e.jQuery = e.$ = he), he
        })
    }, {}],
    2: [function(e, t, i) {
        (function(n) {
            function r(e) {
                if (Array.isArray(e)) {
                    for (var t = 0, i = Array(e.length); t < e.length; t++) i[t] = e[t];
                    return i
                }
                return Array.from(e)
            }
            var o = Array.prototype.slice,
                s = function() {
                    function e(e, t) {
                        var i = [],
                            n = !0,
                            r = !1,
                            o = void 0;
                        try {
                            for (var s, a = e[Symbol.iterator](); !(n = (s = a.next()).done) && (i.push(s.value), !t || i.length !== t); n = !0);
                        } catch (e) {
                            r = !0, o = e
                        } finally {
                            try {
                                !n && a.return && a.return()
                            } finally {
                                if (r) throw o
                            }
                        }
                        return i
                    }
                    return function(t, i) {
                        if (Array.isArray(t)) return t;
                        if (Symbol.iterator in Object(t)) return e(t, i);
                        throw new TypeError("Invalid attempt to destructure non-iterable instance")
                    }
                }(),
                a = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var i = arguments[t];
                        for (var n in i) Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n])
                    }
                    return e
                };
            ! function(n, r) {
                "object" == typeof i && "undefined" != typeof t ? t.exports = r(e("jquery")) : "function" == typeof define && define.amd ? define(["jquery"], r) : n.parsley = r(n.jQuery)
            }(this, function(e) {
                "use strict";

                function t(e, t) {
                    return e.parsleyAdaptedCallback || (e.parsleyAdaptedCallback = function() {
                        var i = Array.prototype.slice.call(arguments, 0);
                        i.unshift(this), e.apply(t || M, i)
                    }), e.parsleyAdaptedCallback
                }

                function i(e) {
                    return 0 === e.lastIndexOf(L, 0) ? e.substr(L.length) : e
                }

                function l() {
                    var t = this,
                        i = window || n;
                    a(this, {
                        isNativeEvent: function(e) {
                            return e.originalEvent && e.originalEvent.isTrusted !== !1
                        },
                        fakeInputEvent: function(i) {
                            t.isNativeEvent(i) && e(i.target).trigger("input")
                        },
                        misbehaves: function(i) {
                            t.isNativeEvent(i) && (t.behavesOk(i), e(document).on("change.inputevent", i.data.selector, t.fakeInputEvent), t.fakeInputEvent(i))
                        },
                        behavesOk: function(i) {
                            t.isNativeEvent(i) && e(document).off("input.inputevent", i.data.selector, t.behavesOk).off("change.inputevent", i.data.selector, t.misbehaves)
                        },
                        install: function() {
                            if (!i.inputEventPatched) {
                                i.inputEventPatched = "0.0.3";
                                for (var n = ["select", 'input[type="checkbox"]', 'input[type="radio"]', 'input[type="file"]'], r = 0; r < n.length; r++) {
                                    var o = n[r];
                                    e(document).on("input.inputevent", o, {
                                        selector: o
                                    }, t.behavesOk).on("change.inputevent", o, {
                                        selector: o
                                    }, t.misbehaves)
                                }
                            }
                        },
                        uninstall: function() {
                            delete i.inputEventPatched, e(document).off(".inputevent")
                        }
                    })
                }
                var u = 1,
                    d = {},
                    c = {
                        attr: function(e, t, i) {
                            var n, r, o, s = new RegExp("^" + t, "i");
                            if ("undefined" == typeof i) i = {};
                            else
                                for (n in i) i.hasOwnProperty(n) && delete i[n];
                            if (!e) return i;
                            for (o = e.attributes, n = o.length; n--;) r = o[n], r && r.specified && s.test(r.name) && (i[this.camelize(r.name.slice(t.length))] = this.deserializeValue(r.value));
                            return i
                        },
                        checkAttr: function(e, t, i) {
                            return e.hasAttribute(t + i)
                        },
                        setAttr: function(e, t, i, n) {
                            e.setAttribute(this.dasherize(t + i), String(n))
                        },
                        getType: function(e) {
                            return e.getAttribute("type") || "text"
                        },
                        generateID: function() {
                            return "" + u++
                        },
                        deserializeValue: function(e) {
                            var t;
                            try {
                                return e ? "true" == e || "false" != e && ("null" == e ? null : isNaN(t = Number(e)) ? /^[\[\{]/.test(e) ? JSON.parse(e) : e : t) : e
                            } catch (t) {
                                return e
                            }
                        },
                        camelize: function(e) {
                            return e.replace(/-+(.)?/g, function(e, t) {
                                return t ? t.toUpperCase() : ""
                            })
                        },
                        dasherize: function(e) {
                            return e.replace(/::/g, "/").replace(/([A-Z]+)([A-Z][a-z])/g, "$1_$2").replace(/([a-z\d])([A-Z])/g, "$1_$2").replace(/_/g, "-").toLowerCase()
                        },
                        warn: function() {
                            var e;
                            window.console && "function" == typeof window.console.warn && (e = window.console).warn.apply(e, arguments)
                        },
                        warnOnce: function(e) {
                            d[e] || (d[e] = !0, this.warn.apply(this, arguments))
                        },
                        _resetWarnings: function() {
                            d = {}
                        },
                        trimString: function(e) {
                            return e.replace(/^\s+|\s+$/g, "")
                        },
                        parse: {
                            date: function e(t) {
                                var i = t.match(/^(\d{4,})-(\d\d)-(\d\d)$/);
                                if (!i) return null;
                                var n = i.map(function(e) {
                                        return parseInt(e, 10)
                                    }),
                                    r = s(n, 4),
                                    o = (r[0], r[1]),
                                    a = r[2],
                                    l = r[3],
                                    e = new Date(o, a - 1, l);
                                return e.getFullYear() !== o || e.getMonth() + 1 !== a || e.getDate() !== l ? null : e
                            },
                            string: function(e) {
                                return e
                            },
                            integer: function(e) {
                                return isNaN(e) ? null : parseInt(e, 10)
                            },
                            number: function(e) {
                                if (isNaN(e)) throw null;
                                return parseFloat(e)
                            },
                            boolean: function(e) {
                                return !/^\s*false\s*$/i.test(e)
                            },
                            object: function(e) {
                                return c.deserializeValue(e)
                            },
                            regexp: function(e) {
                                var t = "";
                                return /^\/.*\/(?:[gimy]*)$/.test(e) ? (t = e.replace(/.*\/([gimy]*)$/, "$1"), e = e.replace(new RegExp("^/(.*?)/" + t + "$"), "$1")) : e = "^" + e + "$", new RegExp(e, t)
                            }
                        },
                        parseRequirement: function(e, t) {
                            var i = this.parse[e || "string"];
                            if (!i) throw 'Unknown requirement specification: "' + e + '"';
                            var n = i(t);
                            if (null === n) throw "Requirement is not a " + e + ': "' + t + '"';
                            return n
                        },
                        namespaceEvents: function(t, i) {
                            return t = this.trimString(t || "").split(/\s+/), t[0] ? e.map(t, function(e) {
                                return e + "." + i
                            }).join(" ") : ""
                        },
                        difference: function(t, i) {
                            var n = [];
                            return e.each(t, function(e, t) {
                                i.indexOf(t) == -1 && n.push(t)
                            }), n
                        },
                        all: function(t) {
                            return e.when.apply(e, r(t).concat([42, 42]))
                        },
                        objectCreate: Object.create || function() {
                            var e = function() {};
                            return function(t) {
                                if (arguments.length > 1) throw Error("Second argument not supported");
                                if ("object" != typeof t) throw TypeError("Argument must be an object");
                                e.prototype = t;
                                var i = new e;
                                return e.prototype = null, i
                            }
                        }(),
                        _SubmitSelector: 'input[type="submit"], button:submit'
                    },
                    p = {
                        namespace: "data-parsley-",
                        inputs: "input, textarea, select",
                        excluded: "input[type=button], input[type=submit], input[type=reset], input[type=hidden]",
                        priorityEnabled: !0,
                        multiple: null,
                        group: null,
                        uiEnabled: !0,
                        validationThreshold: 3,
                        focus: "first",
                        trigger: !1,
                        triggerAfterFailure: "input",
                        errorClass: "parsley-error",
                        successClass: "parsley-success",
                        classHandler: function(e) {},
                        errorsContainer: function(e) {},
                        errorsWrapper: '<ul class="parsley-errors-list"></ul>',
                        errorTemplate: "<li></li>"
                    },
                    f = function() {
                        this.__id__ = c.generateID()
                    };
                f.prototype = {
                    asyncSupport: !0,
                    _pipeAccordingToValidationResult: function() {
                        var t = this,
                            i = function() {
                                var i = e.Deferred();
                                return !0 !== t.validationResult && i.reject(), i.resolve().promise()
                            };
                        return [i, i]
                    },
                    actualizeOptions: function() {
                        return c.attr(this.element, this.options.namespace, this.domOptions), this.parent && this.parent.actualizeOptions && this.parent.actualizeOptions(), this
                    },
                    _resetOptions: function(e) {
                        this.domOptions = c.objectCreate(this.parent.options), this.options = c.objectCreate(this.domOptions);
                        for (var t in e) e.hasOwnProperty(t) && (this.options[t] = e[t]);
                        this.actualizeOptions()
                    },
                    _listeners: null,
                    on: function(e, t) {
                        this._listeners = this._listeners || {};
                        var i = this._listeners[e] = this._listeners[e] || [];
                        return i.push(t), this
                    },
                    subscribe: function(t, i) {
                        e.listenTo(this, t.toLowerCase(), i)
                    },
                    off: function(e, t) {
                        var i = this._listeners && this._listeners[e];
                        if (i)
                            if (t)
                                for (var n = i.length; n--;) i[n] === t && i.splice(n, 1);
                            else delete this._listeners[e];
                        return this
                    },
                    unsubscribe: function(t, i) {
                        e.unsubscribeTo(this, t.toLowerCase())
                    },
                    trigger: function(e, t, i) {
                        t = t || this;
                        var n, r = this._listeners && this._listeners[e];
                        if (r)
                            for (var o = r.length; o--;)
                                if (n = r[o].call(t, t, i), n === !1) return n;
                        return !this.parent || this.parent.trigger(e, t, i)
                    },
                    asyncIsValid: function(e, t) {
                        return c.warnOnce("asyncIsValid is deprecated; please use whenValid instead"), this.whenValid({
                            group: e,
                            force: t
                        })
                    },
                    _findRelated: function() {
                        return this.options.multiple ? e(this.parent.element.querySelectorAll("[" + this.options.namespace + 'multiple="' + this.options.multiple + '"]')) : this.$element
                    }
                };
                var h = function(e, t) {
                        var i = e.match(/^\s*\[(.*)\]\s*$/);
                        if (!i) throw 'Requirement is not an array: "' + e + '"';
                        var n = i[1].split(",").map(c.trimString);
                        if (n.length !== t) throw "Requirement has " + n.length + " values when " + t + " are needed";
                        return n
                    },
                    v = function(e, t, i) {
                        var n = null,
                            r = {};
                        for (var o in e)
                            if (o) {
                                var s = i(o);
                                "string" == typeof s && (s = c.parseRequirement(e[o], s)), r[o] = s
                            } else n = c.parseRequirement(e[o], t);
                        return [n, r]
                    },
                    g = function(t) {
                        e.extend(!0, this, t)
                    };
                g.prototype = {
                    validate: function(e, t) {
                        if (this.fn) return arguments.length > 3 && (t = [].slice.call(arguments, 1, -1)), this.fn(e, t);
                        if (Array.isArray(e)) {
                            if (!this.validateMultiple) throw "Validator `" + this.name + "` does not handle multiple values";
                            return this.validateMultiple.apply(this, arguments)
                        }
                        var i = arguments[arguments.length - 1];
                        if (this.validateDate && i._isDateInput()) return arguments[0] = c.parse.date(arguments[0]), null !== arguments[0] && this.validateDate.apply(this, arguments);
                        if (this.validateNumber) return !isNaN(e) && (arguments[0] = parseFloat(arguments[0]), this.validateNumber.apply(this, arguments));
                        if (this.validateString) return this.validateString.apply(this, arguments);
                        throw "Validator `" + this.name + "` only handles multiple values"
                    },
                    parseRequirements: function(t, i) {
                        if ("string" != typeof t) return Array.isArray(t) ? t : [t];
                        var n = this.requirementType;
                        if (Array.isArray(n)) {
                            for (var r = h(t, n.length), o = 0; o < r.length; o++) r[o] = c.parseRequirement(n[o], r[o]);
                            return r
                        }
                        return e.isPlainObject(n) ? v(n, t, i) : [c.parseRequirement(n, t)]
                    },
                    requirementType: "string",
                    priority: 2
                };
                var m = function(e, t) {
                        this.__class__ = "ValidatorRegistry", this.locale = "en", this.init(e || {}, t || {})
                    },
                    y = {
                        email: /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i,
                        number: /^-?(\d*\.)?\d+(e[-+]?\d+)?$/i,
                        integer: /^-?\d+$/,
                        digits: /^\d+$/,
                        alphanum: /^\w+$/i,
                        date: {
                            test: function(e) {
                                return null !== c.parse.date(e)
                            }
                        },
                        url: new RegExp("^(?:(?:https?|ftp)://)?(?:\\S+(?::\\S*)?@)?(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))(?::\\d{2,5})?(?:/\\S*)?$", "i")
                    };
                y.range = y.number;
                var w = function(e) {
                        var t = ("" + e).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
                        return t ? Math.max(0, (t[1] ? t[1].length : 0) - (t[2] ? +t[2] : 0)) : 0
                    },
                    b = function(e, t) {
                        return t.map(c.parse[e])
                    },
                    T = function(e, t) {
                        return function(i) {
                            for (var n = arguments.length, o = Array(n > 1 ? n - 1 : 0), s = 1; s < n; s++) o[s - 1] = arguments[s];
                            return o.pop(), t.apply(void 0, [i].concat(r(b(e, o))))
                        }
                    },
                    x = function(e) {
                        return {
                            validateDate: T("date", e),
                            validateNumber: T("number", e),
                            requirementType: e.length <= 2 ? "string" : ["string", "string"],
                            priority: 30
                        }
                    };
                m.prototype = {
                    init: function(e, t) {
                        this.catalog = t, this.validators = a({}, this.validators);
                        for (var i in e) this.addValidator(i, e[i].fn, e[i].priority);
                        window.Parsley.trigger("parsley:validator:init")
                    },
                    setLocale: function(e) {
                        if ("undefined" == typeof this.catalog[e]) throw new Error(e + " is not available in the catalog");
                        return this.locale = e, this
                    },
                    addCatalog: function(e, t, i) {
                        return "object" == typeof t && (this.catalog[e] = t), !0 === i ? this.setLocale(e) : this
                    },
                    addMessage: function(e, t, i) {
                        return "undefined" == typeof this.catalog[e] && (this.catalog[e] = {}), this.catalog[e][t] = i, this
                    },
                    addMessages: function(e, t) {
                        for (var i in t) this.addMessage(e, i, t[i]);
                        return this
                    },
                    addValidator: function(e, t, i) {
                        if (this.validators[e]) c.warn('Validator "' + e + '" is already defined.');
                        else if (p.hasOwnProperty(e)) return void c.warn('"' + e + '" is a restricted keyword and is not a valid validator name.');
                        return this._setValidator.apply(this, arguments)
                    },
                    hasValidator: function(e) {
                        return !!this.validators[e]
                    },
                    updateValidator: function(e, t, i) {
                        return this.validators[e] ? this._setValidator.apply(this, arguments) : (c.warn('Validator "' + e + '" is not already defined.'), this.addValidator.apply(this, arguments))
                    },
                    removeValidator: function(e) {
                        return this.validators[e] || c.warn('Validator "' + e + '" is not defined.'), delete this.validators[e], this
                    },
                    _setValidator: function(e, t, i) {
                        "object" != typeof t && (t = {
                            fn: t,
                            priority: i
                        }), t.validate || (t = new g(t)), this.validators[e] = t;
                        for (var n in t.messages || {}) this.addMessage(n, e, t.messages[n]);
                        return this
                    },
                    getErrorMessage: function(e) {
                        var t;
                        if ("type" === e.name) {
                            var i = this.catalog[this.locale][e.name] || {};
                            t = i[e.requirements]
                        } else t = this.formatMessage(this.catalog[this.locale][e.name], e.requirements);
                        return t || this.catalog[this.locale].defaultMessage || this.catalog.en.defaultMessage
                    },
                    formatMessage: function(e, t) {
                        if ("object" == typeof t) {
                            for (var i in t) e = this.formatMessage(e, t[i]);
                            return e
                        }
                        return "string" == typeof e ? e.replace(/%s/i, t) : ""
                    },
                    validators: {
                        notblank: {
                            validateString: function(e) {
                                return /\S/.test(e)
                            },
                            priority: 2
                        },
                        required: {
                            validateMultiple: function(e) {
                                return e.length > 0
                            },
                            validateString: function(e) {
                                return /\S/.test(e)
                            },
                            priority: 512
                        },
                        type: {
                            validateString: function(e, t) {
                                var i = arguments.length <= 2 || void 0 === arguments[2] ? {} : arguments[2],
                                    n = i.step,
                                    r = void 0 === n ? "any" : n,
                                    o = i.base,
                                    s = void 0 === o ? 0 : o,
                                    a = y[t];
                                if (!a) throw new Error("validator type `" + t + "` is not supported");
                                if (!a.test(e)) return !1;
                                if ("number" === t && !/^any$/i.test(r || "")) {
                                    var l = Number(e),
                                        u = Math.max(w(r), w(s));
                                    if (w(l) > u) return !1;
                                    var d = function(e) {
                                        return Math.round(e * Math.pow(10, u))
                                    };
                                    if ((d(l) - d(s)) % d(r) != 0) return !1
                                }
                                return !0
                            },
                            requirementType: {
                                "": "string",
                                step: "string",
                                base: "number"
                            },
                            priority: 256
                        },
                        pattern: {
                            validateString: function(e, t) {
                                return t.test(e)
                            },
                            requirementType: "regexp",
                            priority: 64
                        },
                        minlength: {
                            validateString: function(e, t) {
                                return e.length >= t
                            },
                            requirementType: "integer",
                            priority: 30
                        },
                        maxlength: {
                            validateString: function(e, t) {
                                return e.length <= t
                            },
                            requirementType: "integer",
                            priority: 30
                        },
                        length: {
                            validateString: function(e, t, i) {
                                return e.length >= t && e.length <= i
                            },
                            requirementType: ["integer", "integer"],
                            priority: 30
                        },
                        mincheck: {
                            validateMultiple: function(e, t) {
                                return e.length >= t
                            },
                            requirementType: "integer",
                            priority: 30
                        },
                        maxcheck: {
                            validateMultiple: function(e, t) {
                                return e.length <= t
                            },
                            requirementType: "integer",
                            priority: 30
                        },
                        check: {
                            validateMultiple: function(e, t, i) {
                                return e.length >= t && e.length <= i
                            },
                            requirementType: ["integer", "integer"],
                            priority: 30
                        },
                        min: x(function(e, t) {
                            return e >= t
                        }),
                        max: x(function(e, t) {
                            return e <= t
                        }),
                        range: x(function(e, t, i) {
                            return e >= t && e <= i
                        }),
                        equalto: {
                            validateString: function(t, i) {
                                var n = e(i);
                                return n.length ? t === n.val() : t === i
                            },
                            priority: 256
                        }
                    }
                };
                var k = {},
                    C = function e(t, i, n) {
                        for (var r = [], o = [], s = 0; s < t.length; s++) {
                            for (var a = !1, l = 0; l < i.length; l++)
                                if (t[s].assert.name === i[l].assert.name) {
                                    a = !0;
                                    break
                                }
                            a ? o.push(t[s]) : r.push(t[s])
                        }
                        return {
                            kept: o,
                            added: r,
                            removed: n ? [] : e(i, t, !0).added
                        }
                    };
                k.Form = {
                    _actualizeTriggers: function() {
                        var e = this;
                        this.$element.on("submit.Parsley", function(t) {
                            e.onSubmitValidate(t)
                        }), this.$element.on("click.Parsley", c._SubmitSelector, function(t) {
                            e.onSubmitButton(t)
                        }), !1 !== this.options.uiEnabled && this.element.setAttribute("novalidate", "")
                    },
                    focus: function() {
                        if (this._focusedField = null, !0 === this.validationResult || "none" === this.options.focus) return null;
                        for (var e = 0; e < this.fields.length; e++) {
                            var t = this.fields[e];
                            if (!0 !== t.validationResult && t.validationResult.length > 0 && "undefined" == typeof t.options.noFocus && (this._focusedField = t.$element, "first" === this.options.focus)) break
                        }
                        return null === this._focusedField ? null : this._focusedField.focus()
                    },
                    _destroyUI: function() {
                        this.$element.off(".Parsley")
                    }
                }, k.Field = {
                    _reflowUI: function() {
                        if (this._buildUI(), this._ui) {
                            var e = C(this.validationResult, this._ui.lastValidationResult);
                            this._ui.lastValidationResult = this.validationResult, this._manageStatusClass(), this._manageErrorsMessages(e), this._actualizeTriggers(), !e.kept.length && !e.added.length || this._failedOnce || (this._failedOnce = !0, this._actualizeTriggers())
                        }
                    },
                    getErrorsMessages: function() {
                        if (!0 === this.validationResult) return [];
                        for (var e = [], t = 0; t < this.validationResult.length; t++) e.push(this.validationResult[t].errorMessage || this._getErrorMessage(this.validationResult[t].assert));
                        return e
                    },
                    addError: function(e) {
                        var t = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1],
                            i = t.message,
                            n = t.assert,
                            r = t.updateClass,
                            o = void 0 === r || r;
                        this._buildUI(), this._addError(e, {
                            message: i,
                            assert: n
                        }), o && this._errorClass()
                    },
                    updateError: function(e) {
                        var t = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1],
                            i = t.message,
                            n = t.assert,
                            r = t.updateClass,
                            o = void 0 === r || r;
                        this._buildUI(), this._updateError(e, {
                            message: i,
                            assert: n
                        }), o && this._errorClass()
                    },
                    removeError: function(e) {
                        var t = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1],
                            i = t.updateClass,
                            n = void 0 === i || i;
                        this._buildUI(), this._removeError(e), n && this._manageStatusClass()
                    },
                    _manageStatusClass: function() {
                        this.hasConstraints() && this.needsValidation() && !0 === this.validationResult ? this._successClass() : this.validationResult.length > 0 ? this._errorClass() : this._resetClass()
                    },
                    _manageErrorsMessages: function(t) {
                        if ("undefined" == typeof this.options.errorsMessagesDisabled) {
                            if ("undefined" != typeof this.options.errorMessage) return t.added.length || t.kept.length ? (this._insertErrorWrapper(), 0 === this._ui.$errorsWrapper.find(".parsley-custom-error-message").length && this._ui.$errorsWrapper.append(e(this.options.errorTemplate).addClass("parsley-custom-error-message")), this._ui.$errorsWrapper.addClass("filled").find(".parsley-custom-error-message").html(this.options.errorMessage)) : this._ui.$errorsWrapper.removeClass("filled").find(".parsley-custom-error-message").remove();
                            for (var i = 0; i < t.removed.length; i++) this._removeError(t.removed[i].assert.name);
                            for (i = 0; i < t.added.length; i++) this._addError(t.added[i].assert.name, {
                                message: t.added[i].errorMessage,
                                assert: t.added[i].assert
                            });
                            for (i = 0; i < t.kept.length; i++) this._updateError(t.kept[i].assert.name, {
                                message: t.kept[i].errorMessage,
                                assert: t.kept[i].assert
                            })
                        }
                    },
                    _addError: function(t, i) {
                        var n = i.message,
                            r = i.assert;
                        this._insertErrorWrapper(), this._ui.$errorsWrapper.addClass("filled").append(e(this.options.errorTemplate).addClass("parsley-" + t).html(n || this._getErrorMessage(r)))
                    },
                    _updateError: function(e, t) {
                        var i = t.message,
                            n = t.assert;
                        this._ui.$errorsWrapper.addClass("filled").find(".parsley-" + e).html(i || this._getErrorMessage(n))
                    },
                    _removeError: function(e) {
                        this._ui.$errorsWrapper.removeClass("filled").find(".parsley-" + e).remove()
                    },
                    _getErrorMessage: function(e) {
                        var t = e.name + "Message";
                        return "undefined" != typeof this.options[t] ? window.Parsley.formatMessage(this.options[t], e.requirements) : window.Parsley.getErrorMessage(e)
                    },
                    _buildUI: function() {
                        if (!this._ui && !1 !== this.options.uiEnabled) {
                            var t = {};
                            this.element.setAttribute(this.options.namespace + "id", this.__id__), t.$errorClassHandler = this._manageClassHandler(), t.errorsWrapperId = "parsley-id-" + (this.options.multiple ? "multiple-" + this.options.multiple : this.__id__), t.$errorsWrapper = e(this.options.errorsWrapper).attr("id", t.errorsWrapperId), t.lastValidationResult = [], t.validationInformationVisible = !1, this._ui = t
                        }
                    },
                    _manageClassHandler: function() {
                        if ("string" == typeof this.options.classHandler && e(this.options.classHandler).length) return e(this.options.classHandler);
                        var t = this.options.classHandler;
                        if ("string" == typeof this.options.classHandler && "function" == typeof window[this.options.classHandler] && (t = window[this.options.classHandler]), "function" == typeof t) {
                            var i = t.call(this, this);
                            if ("undefined" != typeof i && i.length) return i
                        } else {
                            if ("object" == typeof t && t instanceof jQuery && t.length) return t;
                            t && c.warn("The class handler `" + t + "` does not exist in DOM nor as a global JS function")
                        }
                        return this._inputHolder()
                    },
                    _inputHolder: function() {
                        return this.options.multiple && "SELECT" !== this.element.nodeName ? this.$element.parent() : this.$element
                    },
                    _insertErrorWrapper: function() {
                        var t = this.options.errorsContainer;
                        if (0 !== this._ui.$errorsWrapper.parent().length) return this._ui.$errorsWrapper.parent();
                        if ("string" == typeof t) {
                            if (e(t).length) return e(t).append(this._ui.$errorsWrapper);
                            "function" == typeof window[t] ? t = window[t] : c.warn("The errors container `" + t + "` does not exist in DOM nor as a global JS function")
                        }
                        return "function" == typeof t && (t = t.call(this, this)), "object" == typeof t && t.length ? t.append(this._ui.$errorsWrapper) : this._inputHolder().after(this._ui.$errorsWrapper)
                    },
                    _actualizeTriggers: function() {
                        var e, t = this,
                            i = this._findRelated();
                        i.off(".Parsley"), this._failedOnce ? i.on(c.namespaceEvents(this.options.triggerAfterFailure, "Parsley"), function() {
                            t._validateIfNeeded()
                        }) : (e = c.namespaceEvents(this.options.trigger, "Parsley")) && i.on(e, function(e) {
                            t._validateIfNeeded(e)
                        })
                    },
                    _validateIfNeeded: function(e) {
                        var t = this;
                        e && /key|input/.test(e.type) && (!this._ui || !this._ui.validationInformationVisible) && this.getValue().length <= this.options.validationThreshold || (this.options.debounce ? (window.clearTimeout(this._debounced), this._debounced = window.setTimeout(function() {
                            return t.validate()
                        }, this.options.debounce)) : this.validate())
                    },
                    _resetUI: function() {
                        this._failedOnce = !1, this._actualizeTriggers(), "undefined" != typeof this._ui && (this._ui.$errorsWrapper.removeClass("filled").children().remove(), this._resetClass(), this._ui.lastValidationResult = [], this._ui.validationInformationVisible = !1)
                    },
                    _destroyUI: function() {
                        this._resetUI(), "undefined" != typeof this._ui && this._ui.$errorsWrapper.remove(), delete this._ui
                    },
                    _successClass: function() {
                        this._ui.validationInformationVisible = !0, this._ui.$errorClassHandler.removeClass(this.options.errorClass).addClass(this.options.successClass)
                    },
                    _errorClass: function() {
                        this._ui.validationInformationVisible = !0, this._ui.$errorClassHandler.removeClass(this.options.successClass).addClass(this.options.errorClass)
                    },
                    _resetClass: function() {
                        this._ui.$errorClassHandler.removeClass(this.options.successClass).removeClass(this.options.errorClass)
                    }
                };
                var S = function(t, i, n) {
                        this.__class__ = "Form", this.element = t, this.$element = e(t), this.domOptions = i, this.options = n, this.parent = window.Parsley, this.fields = [], this.validationResult = null
                    },
                    $ = {
                        pending: null,
                        resolved: !0,
                        rejected: !1
                    };
                S.prototype = {
                    onSubmitValidate: function(e) {
                        var t = this;
                        if (!0 !== e.parsley) {
                            var i = this._submitSource || this.$element.find(c._SubmitSelector)[0];
                            if (this._submitSource = null, this.$element.find(".parsley-synthetic-submit-button").prop("disabled", !0), !i || null === i.getAttribute("formnovalidate")) {
                                window.Parsley._remoteCache = {};
                                var n = this.whenValidate({
                                    event: e
                                });
                                "resolved" === n.state() && !1 !== this._trigger("submit") || (e.stopImmediatePropagation(), e.preventDefault(), "pending" === n.state() && n.done(function() {
                                    t._submit(i)
                                }))
                            }
                        }
                    },
                    onSubmitButton: function(e) {
                        this._submitSource = e.currentTarget
                    },
                    _submit: function(t) {
                        if (!1 !== this._trigger("submit")) {
                            if (t) {
                                var i = this.$element.find(".parsley-synthetic-submit-button").prop("disabled", !1);
                                0 === i.length && (i = e('<input class="parsley-synthetic-submit-button" type="hidden">').appendTo(this.$element)), i.attr({
                                    name: t.getAttribute("name"),
                                    value: t.getAttribute("value")
                                })
                            }
                            this.$element.trigger(a(e.Event("submit"), {
                                parsley: !0
                            }))
                        }
                    },
                    validate: function(t) {
                        if (arguments.length >= 1 && !e.isPlainObject(t)) {
                            c.warnOnce("Calling validate on a parsley form without passing arguments as an object is deprecated.");
                            var i = o.call(arguments),
                                n = i[0],
                                r = i[1],
                                s = i[2];
                            t = {
                                group: n,
                                force: r,
                                event: s
                            }
                        }
                        return $[this.whenValidate(t).state()]
                    },
                    whenValidate: function() {
                        var t, i = this,
                            n = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0],
                            o = n.group,
                            s = n.force,
                            l = n.event;
                        this.submitEvent = l, l && (this.submitEvent = a({}, l, {
                            preventDefault: function() {
                                c.warnOnce("Using `this.submitEvent.preventDefault()` is deprecated; instead, call `this.validationResult = false`"), i.validationResult = !1
                            }
                        })), this.validationResult = !0, this._trigger("validate"), this._refreshFields();
                        var u = this._withoutReactualizingFormOptions(function() {
                            return e.map(i.fields, function(e) {
                                return e.whenValidate({
                                    force: s,
                                    group: o
                                })
                            })
                        });
                        return (t = c.all(u).done(function() {
                            i._trigger("success")
                        }).fail(function() {
                            i.validationResult = !1, i.focus(), i._trigger("error")
                        }).always(function() {
                            i._trigger("validated")
                        })).pipe.apply(t, r(this._pipeAccordingToValidationResult()))
                    },
                    isValid: function(t) {
                        if (arguments.length >= 1 && !e.isPlainObject(t)) {
                            c.warnOnce("Calling isValid on a parsley form without passing arguments as an object is deprecated.");
                            var i = o.call(arguments),
                                n = i[0],
                                r = i[1];
                            t = {
                                group: n,
                                force: r
                            }
                        }
                        return $[this.whenValid(t).state()]
                    },
                    whenValid: function() {
                        var t = this,
                            i = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0],
                            n = i.group,
                            r = i.force;
                        this._refreshFields();
                        var o = this._withoutReactualizingFormOptions(function() {
                            return e.map(t.fields, function(e) {
                                return e.whenValid({
                                    group: n,
                                    force: r
                                })
                            })
                        });
                        return c.all(o)
                    },
                    refresh: function() {
                        return this._refreshFields(), this
                    },
                    reset: function() {
                        for (var e = 0; e < this.fields.length; e++) this.fields[e].reset();
                        this._trigger("reset")
                    },
                    destroy: function() {
                        this._destroyUI();
                        for (var e = 0; e < this.fields.length; e++) this.fields[e].destroy();
                        this.$element.removeData("Parsley"), this._trigger("destroy")
                    },
                    _refreshFields: function() {
                        return this.actualizeOptions()._bindFields()
                    },
                    _bindFields: function() {
                        var t = this,
                            i = this.fields;
                        return this.fields = [], this.fieldsMappedById = {}, this._withoutReactualizingFormOptions(function() {
                            t.$element.find(t.options.inputs).not(t.options.excluded).each(function(e, i) {
                                var n = new window.Parsley.Factory(i, {}, t);
                                if (("Field" === n.__class__ || "FieldMultiple" === n.__class__) && !0 !== n.options.excluded) {
                                    var r = n.__class__ + "-" + n.__id__;
                                    "undefined" == typeof t.fieldsMappedById[r] && (t.fieldsMappedById[r] = n, t.fields.push(n))
                                }
                            }), e.each(c.difference(i, t.fields), function(e, t) {
                                t.reset()
                            })
                        }), this
                    },
                    _withoutReactualizingFormOptions: function(e) {
                        var t = this.actualizeOptions;
                        this.actualizeOptions = function() {
                            return this
                        };
                        var i = e();
                        return this.actualizeOptions = t, i
                    },
                    _trigger: function(e) {
                        return this.trigger("form:" + e)
                    }
                };
                var E = function(e, t, i, n, r) {
                        var o = window.Parsley._validatorRegistry.validators[t],
                            s = new g(o);
                        n = n || e.options[t + "Priority"] || s.priority, r = !0 === r, a(this, {
                            validator: s,
                            name: t,
                            requirements: i,
                            priority: n,
                            isDomConstraint: r
                        }), this._parseRequirements(e.options)
                    },
                    A = function(e) {
                        var t = e[0].toUpperCase();
                        return t + e.slice(1)
                    };
                E.prototype = {
                    validate: function(e, t) {
                        var i;
                        return (i = this.validator).validate.apply(i, [e].concat(r(this.requirementList), [t]))
                    },
                    _parseRequirements: function(e) {
                        var t = this;
                        this.requirementList = this.validator.parseRequirements(this.requirements, function(i) {
                            return e[t.name + A(i)]
                        })
                    }
                };
                var _ = function(t, i, n, r) {
                        this.__class__ = "Field", this.element = t, this.$element = e(t), "undefined" != typeof r && (this.parent = r), this.options = n, this.domOptions = i, this.constraints = [], this.constraintsByName = {}, this.validationResult = !0, this._bindConstraints()
                    },
                    F = {
                        pending: null,
                        resolved: !0,
                        rejected: !1
                    };
                _.prototype = {
                    validate: function(t) {
                        arguments.length >= 1 && !e.isPlainObject(t) && (c.warnOnce("Calling validate on a parsley field without passing arguments as an object is deprecated."), t = {
                            options: t
                        });
                        var i = this.whenValidate(t);
                        if (!i) return !0;
                        switch (i.state()) {
                            case "pending":
                                return null;
                            case "resolved":
                                return !0;
                            case "rejected":
                                return this.validationResult
                        }
                    },
                    whenValidate: function() {
                        var e, t = this,
                            i = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0],
                            n = i.force,
                            o = i.group;
                        if (this.refresh(), !o || this._isInGroup(o)) return this.value = this.getValue(), this._trigger("validate"), (e = this.whenValid({
                            force: n,
                            value: this.value,
                            _refreshed: !0
                        }).always(function() {
                            t._reflowUI()
                        }).done(function() {
                            t._trigger("success")
                        }).fail(function() {
                            t._trigger("error")
                        }).always(function() {
                            t._trigger("validated")
                        })).pipe.apply(e, r(this._pipeAccordingToValidationResult()))
                    },
                    hasConstraints: function() {
                        return 0 !== this.constraints.length
                    },
                    needsValidation: function(e) {
                        return "undefined" == typeof e && (e = this.getValue()), !(!e.length && !this._isRequired() && "undefined" == typeof this.options.validateIfEmpty)
                    },
                    _isInGroup: function(t) {
                        return Array.isArray(this.options.group) ? -1 !== e.inArray(t, this.options.group) : this.options.group === t
                    },
                    isValid: function(t) {
                        if (arguments.length >= 1 && !e.isPlainObject(t)) {
                            c.warnOnce("Calling isValid on a parsley field without passing arguments as an object is deprecated.");
                            var i = o.call(arguments),
                                n = i[0],
                                r = i[1];
                            t = {
                                force: n,
                                value: r
                            }
                        }
                        var s = this.whenValid(t);
                        return !s || F[s.state()]
                    },
                    whenValid: function() {
                        var t = this,
                            i = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0],
                            n = i.force,
                            r = void 0 !== n && n,
                            o = i.value,
                            s = i.group,
                            a = i._refreshed;
                        if (a || this.refresh(), !s || this._isInGroup(s)) {
                            if (this.validationResult = !0, !this.hasConstraints()) return e.when();
                            if ("undefined" != typeof o && null !== o || (o = this.getValue()), !this.needsValidation(o) && !0 !== r) return e.when();
                            var l = this._getGroupedConstraints(),
                                u = [];
                            return e.each(l, function(i, n) {
                                var r = c.all(e.map(n, function(e) {
                                    return t._validateConstraint(o, e)
                                }));
                                if (u.push(r), "rejected" === r.state()) return !1
                            }), c.all(u)
                        }
                    },
                    _validateConstraint: function(t, i) {
                        var n = this,
                            r = i.validate(t, this);
                        return !1 === r && (r = e.Deferred().reject()), c.all([r]).fail(function(e) {
                            n.validationResult instanceof Array || (n.validationResult = []), n.validationResult.push({
                                assert: i,
                                errorMessage: "string" == typeof e && e
                            })
                        })
                    },
                    getValue: function() {
                        var e;
                        return e = "function" == typeof this.options.value ? this.options.value(this) : "undefined" != typeof this.options.value ? this.options.value : this.$element.val(), "undefined" == typeof e || null === e ? "" : this._handleWhitespace(e)
                    },
                    reset: function() {
                        return this._resetUI(), this._trigger("reset")
                    },
                    destroy: function() {
                        this._destroyUI(), this.$element.removeData("Parsley"), this.$element.removeData("FieldMultiple"), this._trigger("destroy")
                    },
                    refresh: function() {
                        return this._refreshConstraints(), this
                    },
                    _refreshConstraints: function() {
                        return this.actualizeOptions()._bindConstraints()
                    },
                    refreshConstraints: function() {
                        return c.warnOnce("Parsley's refreshConstraints is deprecated. Please use refresh"), this.refresh()
                    },
                    addConstraint: function(e, t, i, n) {
                        if (window.Parsley._validatorRegistry.validators[e]) {
                            var r = new E(this, e, t, i, n);
                            "undefined" !== this.constraintsByName[r.name] && this.removeConstraint(r.name), this.constraints.push(r), this.constraintsByName[r.name] = r
                        }
                        return this
                    },
                    removeConstraint: function(e) {
                        for (var t = 0; t < this.constraints.length; t++)
                            if (e === this.constraints[t].name) {
                                this.constraints.splice(t, 1);
                                break
                            }
                        return delete this.constraintsByName[e], this
                    },
                    updateConstraint: function(e, t, i) {
                        return this.removeConstraint(e).addConstraint(e, t, i)
                    },
                    _bindConstraints: function() {
                        for (var e = [], t = {}, i = 0; i < this.constraints.length; i++) !1 === this.constraints[i].isDomConstraint && (e.push(this.constraints[i]), t[this.constraints[i].name] = this.constraints[i]);
                        this.constraints = e, this.constraintsByName = t;
                        for (var n in this.options) this.addConstraint(n, this.options[n], void 0, !0);
                        return this._bindHtml5Constraints()
                    },
                    _bindHtml5Constraints: function() {
                        null !== this.element.getAttribute("required") && this.addConstraint("required", !0, void 0, !0), null !== this.element.getAttribute("pattern") && this.addConstraint("pattern", this.element.getAttribute("pattern"), void 0, !0);
                        var e = this.element.getAttribute("min"),
                            t = this.element.getAttribute("max");
                        null !== e && null !== t ? this.addConstraint("range", [e, t], void 0, !0) : null !== e ? this.addConstraint("min", e, void 0, !0) : null !== t && this.addConstraint("max", t, void 0, !0), null !== this.element.getAttribute("minlength") && null !== this.element.getAttribute("maxlength") ? this.addConstraint("length", [this.element.getAttribute("minlength"), this.element.getAttribute("maxlength")], void 0, !0) : null !== this.element.getAttribute("minlength") ? this.addConstraint("minlength", this.element.getAttribute("minlength"), void 0, !0) : null !== this.element.getAttribute("maxlength") && this.addConstraint("maxlength", this.element.getAttribute("maxlength"), void 0, !0);
                        var i = c.getType(this.element);
                        return "number" === i ? this.addConstraint("type", ["number", {
                            step: this.element.getAttribute("step") || "1",
                            base: e || this.element.getAttribute("value")
                        }], void 0, !0) : /^(email|url|range|date)$/i.test(i) ? this.addConstraint("type", i, void 0, !0) : this
                    },
                    _isRequired: function() {
                        return "undefined" != typeof this.constraintsByName.required && !1 !== this.constraintsByName.required.requirements
                    },
                    _trigger: function(e) {
                        return this.trigger("field:" + e)
                    },
                    _handleWhitespace: function(e) {
                        return !0 === this.options.trimValue && c.warnOnce('data-parsley-trim-value="true" is deprecated, please use data-parsley-whitespace="trim"'), "squish" === this.options.whitespace && (e = e.replace(/\s{2,}/g, " ")), "trim" !== this.options.whitespace && "squish" !== this.options.whitespace && !0 !== this.options.trimValue || (e = c.trimString(e)), e
                    },
                    _isDateInput: function() {
                        var e = this.constraintsByName.type;
                        return e && "date" === e.requirements
                    },
                    _getGroupedConstraints: function() {
                        if (!1 === this.options.priorityEnabled) return [this.constraints];
                        for (var e = [], t = {}, i = 0; i < this.constraints.length; i++) {
                            var n = this.constraints[i].priority;
                            t[n] || e.push(t[n] = []), t[n].push(this.constraints[i])
                        }
                        return e.sort(function(e, t) {
                            return t[0].priority - e[0].priority
                        }), e
                    }
                };
                var D = _,
                    O = function() {
                        this.__class__ = "FieldMultiple"
                    };
                O.prototype = {
                    addElement: function(e) {
                        return this.$elements.push(e), this
                    },
                    _refreshConstraints: function() {
                        var t;
                        if (this.constraints = [], "SELECT" === this.element.nodeName) return this.actualizeOptions()._bindConstraints(), this;
                        for (var i = 0; i < this.$elements.length; i++)
                            if (e("html").has(this.$elements[i]).length) {
                                t = this.$elements[i].data("FieldMultiple")._refreshConstraints().constraints;
                                for (var n = 0; n < t.length; n++) this.addConstraint(t[n].name, t[n].requirements, t[n].priority, t[n].isDomConstraint)
                            } else this.$elements.splice(i, 1);
                        return this
                    },
                    getValue: function() {
                        if ("function" == typeof this.options.value) return this.options.value(this);
                        if ("undefined" != typeof this.options.value) return this.options.value;
                        if ("INPUT" === this.element.nodeName) {
                            var t = c.getType(this.element);
                            if ("radio" === t) return this._findRelated().filter(":checked").val() || "";
                            if ("checkbox" === t) {
                                var i = [];
                                return this._findRelated().filter(":checked").each(function() {
                                    i.push(e(this).val())
                                }), i
                            }
                        }
                        return "SELECT" === this.element.nodeName && null === this.$element.val() ? [] : this.$element.val()
                    },
                    _init: function() {
                        return this.$elements = [this.$element], this
                    }
                };
                var j = function(t, i, n) {
                    this.element = t, this.$element = e(t);
                    var r = this.$element.data("Parsley");
                    if (r) return "undefined" != typeof n && r.parent === window.Parsley && (r.parent = n, r._resetOptions(r.options)), "object" == typeof i && a(r.options, i), r;
                    if (!this.$element.length) throw new Error("You must bind Parsley on an existing element.");
                    if ("undefined" != typeof n && "Form" !== n.__class__) throw new Error("Parent instance must be a Form instance");
                    return this.parent = n || window.Parsley, this.init(i)
                };
                j.prototype = {
                    init: function(e) {
                        return this.__class__ = "Parsley", this.__version__ = "2.8.0", this.__id__ = c.generateID(), this._resetOptions(e), "FORM" === this.element.nodeName || c.checkAttr(this.element, this.options.namespace, "validate") && !this.$element.is(this.options.inputs) ? this.bind("parsleyForm") : this.isMultiple() ? this.handleMultiple() : this.bind("parsleyField")
                    },
                    isMultiple: function() {
                        var e = c.getType(this.element);
                        return "radio" === e || "checkbox" === e || "SELECT" === this.element.nodeName && null !== this.element.getAttribute("multiple")
                    },
                    handleMultiple: function() {
                        var t, i, n = this;
                        if (this.options.multiple = this.options.multiple || (t = this.element.getAttribute("name")) || this.element.getAttribute("id"), "SELECT" === this.element.nodeName && null !== this.element.getAttribute("multiple")) return this.options.multiple = this.options.multiple || this.__id__, this.bind("parsleyFieldMultiple");
                        if (!this.options.multiple) return c.warn("To be bound by Parsley, a radio, a checkbox and a multiple select input must have either a name or a multiple option.", this.$element), this;
                        this.options.multiple = this.options.multiple.replace(/(:|\.|\[|\]|\{|\}|\$)/g, ""), t && e('input[name="' + t + '"]').each(function(e, t) {
                            var i = c.getType(t);
                            "radio" !== i && "checkbox" !== i || t.setAttribute(n.options.namespace + "multiple", n.options.multiple)
                        });
                        for (var r = this._findRelated(), o = 0; o < r.length; o++)
                            if (i = e(r.get(o)).data("Parsley"), "undefined" != typeof i) {
                                this.$element.data("FieldMultiple") || i.addElement(this.$element);
                                break
                            }
                        return this.bind("parsleyField", !0), i || this.bind("parsleyFieldMultiple")
                    },
                    bind: function(t, i) {
                        var n;
                        switch (t) {
                            case "parsleyForm":
                                n = e.extend(new S(this.element, this.domOptions, this.options), new f, window.ParsleyExtend)._bindFields();
                                break;
                            case "parsleyField":
                                n = e.extend(new D(this.element, this.domOptions, this.options, this.parent), new f, window.ParsleyExtend);
                                break;
                            case "parsleyFieldMultiple":
                                n = e.extend(new D(this.element, this.domOptions, this.options, this.parent), new O, new f, window.ParsleyExtend)._init();
                                break;
                            default:
                                throw new Error(t + "is not a supported Parsley type")
                        }
                        return this.options.multiple && c.setAttr(this.element, this.options.namespace, "multiple", this.options.multiple), "undefined" != typeof i ? (this.$element.data("FieldMultiple", n), n) : (this.$element.data("Parsley", n), n._actualizeTriggers(), n._trigger("init"), n)
                    }
                };
                var P = e.fn.jquery.split(".");
                if (parseInt(P[0]) <= 1 && parseInt(P[1]) < 8) throw "The loaded version of jQuery is too old. Please upgrade to 1.8.x or better.";
                P.forEach || c.warn("Parsley requires ES5 to run properly. Please include https://github.com/es-shims/es5-shim");
                var N = a(new f, {
                    element: document,
                    $element: e(document),
                    actualizeOptions: null,
                    _resetOptions: null,
                    Factory: j,
                    version: "2.8.0"
                });
                a(D.prototype, k.Field, f.prototype), a(S.prototype, k.Form, f.prototype), a(j.prototype, f.prototype), e.fn.parsley = e.fn.psly = function(t) {
                    if (this.length > 1) {
                        var i = [];
                        return this.each(function() {
                            i.push(e(this).parsley(t))
                        }), i
                    }
                    if (0 != this.length) return new j(this[0], t)
                }, "undefined" == typeof window.ParsleyExtend && (window.ParsleyExtend = {}), N.options = a(c.objectCreate(p), window.ParsleyConfig), window.ParsleyConfig = N.options, window.Parsley = window.psly = N, N.Utils = c, window.ParsleyUtils = {}, e.each(c, function(e, t) {
                    "function" == typeof t && (window.ParsleyUtils[e] = function() {
                        return c.warnOnce("Accessing `window.ParsleyUtils` is deprecated. Use `window.Parsley.Utils` instead."), c[e].apply(c, arguments)
                    })
                });
                var q = window.Parsley._validatorRegistry = new m(window.ParsleyConfig.validators, window.ParsleyConfig.i18n);
                window.ParsleyValidator = {}, e.each("setLocale addCatalog addMessage addMessages getErrorMessage formatMessage addValidator updateValidator removeValidator hasValidator".split(" "), function(e, t) {
                    window.Parsley[t] = function() {
                        return q[t].apply(q, arguments)
                    }, window.ParsleyValidator[t] = function() {
                        var e;
                        return c.warnOnce("Accessing the method '" + t + "' through Validator is deprecated. Simply call 'window.Parsley." + t + "(...)'"), (e = window.Parsley)[t].apply(e, arguments)
                    }
                }), window.Parsley.UI = k, window.ParsleyUI = {
                    removeError: function(e, t, i) {
                        var n = !0 !== i;
                        return c.warnOnce("Accessing UI is deprecated. Call 'removeError' on the instance directly. Please comment in issue 1073 as to your need to call this method."), e.removeError(t, {
                            updateClass: n
                        })
                    },
                    getErrorsMessages: function(e) {
                        return c.warnOnce("Accessing UI is deprecated. Call 'getErrorsMessages' on the instance directly."), e.getErrorsMessages()
                    }
                }, e.each("addError updateError".split(" "), function(e, t) {
                    window.ParsleyUI[t] = function(e, i, n, r, o) {
                        var s = !0 !== o;
                        return c.warnOnce("Accessing UI is deprecated. Call '" + t + "' on the instance directly. Please comment in issue 1073 as to your need to call this method."), e[t](i, {
                            message: n,
                            assert: r,
                            updateClass: s
                        })
                    }
                }), !1 !== window.ParsleyConfig.autoBind && e(function() {
                    e("[data-parsley-validate]").length && e("[data-parsley-validate]").parsley()
                });
                var M = e({}),
                    H = function() {
                        c.warnOnce("Parsley's pubsub module is deprecated; use the 'on' and 'off' methods on parsley instances or window.Parsley")
                    },
                    L = "parsley:";
                e.listen = function(e, n) {
                    var r;
                    if (H(), "object" == typeof arguments[1] && "function" == typeof arguments[2] && (r = arguments[1], n = arguments[2]), "function" != typeof n) throw new Error("Wrong parameters");
                    window.Parsley.on(i(e), t(n, r))
                }, e.listenTo = function(e, n, r) {
                    if (H(), !(e instanceof D || e instanceof S)) throw new Error("Must give Parsley instance");
                    if ("string" != typeof n || "function" != typeof r) throw new Error("Wrong parameters");
                    e.on(i(n), t(r))
                }, e.unsubscribe = function(e, t) {
                    if (H(), "string" != typeof e || "function" != typeof t) throw new Error("Wrong arguments");
                    window.Parsley.off(i(e), t.parsleyAdaptedCallback)
                }, e.unsubscribeTo = function(e, t) {
                    if (H(), !(e instanceof D || e instanceof S)) throw new Error("Must give Parsley instance");
                    e.off(i(t))
                }, e.unsubscribeAll = function(t) {
                    H(), window.Parsley.off(i(t)), e("form,input,textarea,select").each(function() {
                        var n = e(this).data("Parsley");
                        n && n.off(i(t))
                    })
                }, e.emit = function(e, t) {
                    var n;
                    H();
                    var o = t instanceof D || t instanceof S,
                        s = Array.prototype.slice.call(arguments, o ? 2 : 1);
                    s.unshift(i(e)), o || (t = window.Parsley), (n = t).trigger.apply(n, r(s))
                };
                e.extend(!0, N, {
                    asyncValidators: {
                        default: {
                            fn: function(e) {
                                return e.status >= 200 && e.status < 300
                            },
                            url: !1
                        },
                        reverse: {
                            fn: function(e) {
                                return e.status < 200 || e.status >= 300
                            },
                            url: !1
                        }
                    },
                    addAsyncValidator: function(e, t, i, n) {
                        return N.asyncValidators[e] = {
                            fn: t,
                            url: i || !1,
                            options: n || {}
                        }, this
                    }
                }), N.addValidator("remote", {
                    requirementType: {
                        "": "string",
                        validator: "string",
                        reverse: "boolean",
                        options: "object"
                    },
                    validateString: function(t, i, n, r) {
                        var o, s, a = {},
                            l = n.validator || (!0 === n.reverse ? "reverse" : "default");
                        if ("undefined" == typeof N.asyncValidators[l]) throw new Error("Calling an undefined async validator: `" + l + "`");
                        i = N.asyncValidators[l].url || i, i.indexOf("{value}") > -1 ? i = i.replace("{value}", encodeURIComponent(t)) : a[r.element.getAttribute("name") || r.element.getAttribute("id")] = t;
                        var u = e.extend(!0, n.options || {}, N.asyncValidators[l].options);
                        o = e.extend(!0, {}, {
                            url: i,
                            data: a,
                            type: "GET"
                        }, u), r.trigger("field:ajaxoptions", r, o), s = e.param(o), "undefined" == typeof N._remoteCache && (N._remoteCache = {});
                        var d = N._remoteCache[s] = N._remoteCache[s] || e.ajax(o),
                            c = function() {
                                var t = N.asyncValidators[l].fn.call(r, d, i, n);
                                return t || (t = e.Deferred().reject()), e.when(t)
                            };
                        return d.then(c, c)
                    },
                    priority: -1
                }), N.on("form:submit", function() {
                    N._remoteCache = {}
                }), f.prototype.addAsyncValidator = function() {
                    return c.warnOnce("Accessing the method `addAsyncValidator` through an instance is deprecated. Simply call `Parsley.addAsyncValidator(...)`"), N.addAsyncValidator.apply(N, arguments)
                }, N.addMessages("en", {
                    defaultMessage: "This value seems to be invalid.",
                    type: {
                        email: "This value should be a valid email.",
                        url: "This value should be a valid url.",
                        number: "This value should be a valid number.",
                        integer: "This value should be a valid integer.",
                        digits: "This value should be digits.",
                        alphanum: "This value should be alphanumeric."
                    },
                    notblank: "This value should not be blank.",
                    required: "This value is required.",
                    pattern: "This value seems to be invalid.",
                    min: "This value should be greater than or equal to %s.",
                    max: "This value should be lower than or equal to %s.",
                    range: "This value should be between %s and %s.",
                    minlength: "This value is too short. It should have %s characters or more.",
                    maxlength: "This value is too long. It should have %s characters or fewer.",
                    length: "This value length is invalid. It should be between %s and %s characters long.",
                    mincheck: "You must select at least %s choices.",
                    maxcheck: "You must select %s choices or fewer.",
                    check: "You must select between %s and %s choices.",
                    equalto: "This value should be the same."
                }), N.setLocale("en");
                var I = new l;
                I.install();
                var z = N;
                return z
            })
        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {
        jquery: 1
    }],
    3: [function(e, t, i) {
        (function(n) {
            $ = n.$ = e("jquery");
            var r = e;
            (function(e, t, n) {
                ! function(n) {
                    "use strict";
                    "function" == typeof t && t.amd ? t(["jquery"], n) : "undefined" != typeof i ? e.exports = n(r("jquery")) : n(jQuery)
                }(function(e) {
                    "use strict";
                    var t = window.Slick || {};
                    t = function() {
                        function t(t, n) {
                            var r, o = this;
                            o.defaults = {
                                accessibility: !0,
                                adaptiveHeight: !1,
                                appendArrows: e(t),
                                appendDots: e(t),
                                arrows: !0,
                                asNavFor: null,
                                prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
                                nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
                                autoplay: !1,
                                autoplaySpeed: 3e3,
                                centerMode: !1,
                                centerPadding: "50px",
                                cssEase: "ease",
                                customPaging: function(t, i) {
                                    return e('<button type="button" />').text(i + 1)
                                },
                                dots: !1,
                                dotsClass: "slick-dots",
                                draggable: !0,
                                easing: "linear",
                                edgeFriction: .35,
                                fade: !1,
                                focusOnSelect: !1,
                                infinite: !0,
                                initialSlide: 0,
                                lazyLoad: "ondemand",
                                mobileFirst: !1,
                                pauseOnHover: !0,
                                pauseOnFocus: !0,
                                pauseOnDotsHover: !1,
                                respondTo: "window",
                                responsive: null,
                                rows: 1,
                                rtl: !1,
                                slide: "",
                                slidesPerRow: 1,
                                slidesToShow: 1,
                                slidesToScroll: 1,
                                speed: 500,
                                swipe: !0,
                                swipeToSlide: !1,
                                touchMove: !0,
                                touchThreshold: 5,
                                useCSS: !0,
                                useTransform: !0,
                                variableWidth: !1,
                                vertical: !1,
                                verticalSwiping: !1,
                                waitForAnimate: !0,
                                zIndex: 1e3
                            }, o.initials = {
                                animating: !1,
                                dragging: !1,
                                autoPlayTimer: null,
                                currentDirection: 0,
                                currentLeft: null,
                                currentSlide: 0,
                                direction: 1,
                                $dots: null,
                                listWidth: null,
                                listHeight: null,
                                loadIndex: 0,
                                $nextArrow: null,
                                $prevArrow: null,
                                scrolling: !1,
                                slideCount: null,
                                slideWidth: null,
                                $slideTrack: null,
                                $slides: null,
                                sliding: !1,
                                slideOffset: 0,
                                swipeLeft: null,
                                swiping: !1,
                                $list: null,
                                touchObject: {},
                                transformsEnabled: !1,
                                unslicked: !1
                            }, e.extend(o, o.initials), o.activeBreakpoint = null, o.animType = null, o.animProp = null, o.breakpoints = [], o.breakpointSettings = [], o.cssTransitions = !1, o.focussed = !1, o.interrupted = !1, o.hidden = "hidden", o.paused = !0, o.positionProp = null, o.respondTo = null, o.rowCount = 1, o.shouldClick = !0, o.$slider = e(t), o.$slidesCache = null, o.transformType = null, o.transitionType = null, o.visibilityChange = "visibilitychange", o.windowWidth = 0, o.windowTimer = null, r = e(t).data("slick") || {}, o.options = e.extend({}, o.defaults, n, r), o.currentSlide = o.options.initialSlide, o.originalSettings = o.options, "undefined" != typeof document.mozHidden ? (o.hidden = "mozHidden", o.visibilityChange = "mozvisibilitychange") : "undefined" != typeof document.webkitHidden && (o.hidden = "webkitHidden", o.visibilityChange = "webkitvisibilitychange"), o.autoPlay = e.proxy(o.autoPlay, o), o.autoPlayClear = e.proxy(o.autoPlayClear, o), o.autoPlayIterator = e.proxy(o.autoPlayIterator, o), o.changeSlide = e.proxy(o.changeSlide, o), o.clickHandler = e.proxy(o.clickHandler, o), o.selectHandler = e.proxy(o.selectHandler, o), o.setPosition = e.proxy(o.setPosition, o), o.swipeHandler = e.proxy(o.swipeHandler, o), o.dragHandler = e.proxy(o.dragHandler, o), o.keyHandler = e.proxy(o.keyHandler, o), o.instanceUid = i++, o.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, o.registerBreakpoints(), o.init(!0)
                        }
                        var i = 0;
                        return t
                    }(), t.prototype.activateADA = function() {
                        var e = this;
                        e.$slideTrack.find(".slick-active").attr({
                            "aria-hidden": "false"
                        }).find("a, input, button, select").attr({
                            tabindex: "0"
                        })
                    }, t.prototype.addSlide = t.prototype.slickAdd = function(t, i, n) {
                        var r = this;
                        if ("boolean" == typeof i) n = i, i = null;
                        else if (i < 0 || i >= r.slideCount) return !1;
                        r.unload(), "number" == typeof i ? 0 === i && 0 === r.$slides.length ? e(t).appendTo(r.$slideTrack) : n ? e(t).insertBefore(r.$slides.eq(i)) : e(t).insertAfter(r.$slides.eq(i)) : n === !0 ? e(t).prependTo(r.$slideTrack) : e(t).appendTo(r.$slideTrack), r.$slides = r.$slideTrack.children(this.options.slide), r.$slideTrack.children(this.options.slide).detach(), r.$slideTrack.append(r.$slides), r.$slides.each(function(t, i) {
                            e(i).attr("data-slick-index", t)
                        }), r.$slidesCache = r.$slides, r.reinit()
                    }, t.prototype.animateHeight = function() {
                        var e = this;
                        if (1 === e.options.slidesToShow && e.options.adaptiveHeight === !0 && e.options.vertical === !1) {
                            var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
                            e.$list.animate({
                                height: t
                            }, e.options.speed)
                        }
                    }, t.prototype.animateSlide = function(t, i) {
                        var n = {},
                            r = this;
                        r.animateHeight(), r.options.rtl === !0 && r.options.vertical === !1 && (t = -t), r.transformsEnabled === !1 ? r.options.vertical === !1 ? r.$slideTrack.animate({
                            left: t
                        }, r.options.speed, r.options.easing, i) : r.$slideTrack.animate({
                            top: t
                        }, r.options.speed, r.options.easing, i) : r.cssTransitions === !1 ? (r.options.rtl === !0 && (r.currentLeft = -r.currentLeft), e({
                            animStart: r.currentLeft
                        }).animate({
                            animStart: t
                        }, {
                            duration: r.options.speed,
                            easing: r.options.easing,
                            step: function(e) {
                                e = Math.ceil(e), r.options.vertical === !1 ? (n[r.animType] = "translate(" + e + "px, 0px)", r.$slideTrack.css(n)) : (n[r.animType] = "translate(0px," + e + "px)", r.$slideTrack.css(n))
                            },
                            complete: function() {
                                i && i.call()
                            }
                        })) : (r.applyTransition(), t = Math.ceil(t), r.options.vertical === !1 ? n[r.animType] = "translate3d(" + t + "px, 0px, 0px)" : n[r.animType] = "translate3d(0px," + t + "px, 0px)", r.$slideTrack.css(n), i && setTimeout(function() {
                            r.disableTransition(), i.call()
                        }, r.options.speed))
                    }, t.prototype.getNavTarget = function() {
                        var t = this,
                            i = t.options.asNavFor;
                        return i && null !== i && (i = e(i).not(t.$slider)), i
                    }, t.prototype.asNavFor = function(t) {
                        var i = this,
                            n = i.getNavTarget();
                        null !== n && "object" == typeof n && n.each(function() {
                            var i = e(this).slick("getSlick");
                            i.unslicked || i.slideHandler(t, !0)
                        })
                    }, t.prototype.applyTransition = function(e) {
                        var t = this,
                            i = {};
                        t.options.fade === !1 ? i[t.transitionType] = t.transformType + " " + t.options.speed + "ms " + t.options.cssEase : i[t.transitionType] = "opacity " + t.options.speed + "ms " + t.options.cssEase, t.options.fade === !1 ? t.$slideTrack.css(i) : t.$slides.eq(e).css(i)
                    }, t.prototype.autoPlay = function() {
                        var e = this;
                        e.autoPlayClear(), e.slideCount > e.options.slidesToShow && (e.autoPlayTimer = setInterval(e.autoPlayIterator, e.options.autoplaySpeed))
                    }, t.prototype.autoPlayClear = function() {
                        var e = this;
                        e.autoPlayTimer && clearInterval(e.autoPlayTimer)
                    }, t.prototype.autoPlayIterator = function() {
                        var e = this,
                            t = e.currentSlide + e.options.slidesToScroll;
                        e.paused || e.interrupted || e.focussed || (e.options.infinite === !1 && (1 === e.direction && e.currentSlide + 1 === e.slideCount - 1 ? e.direction = 0 : 0 === e.direction && (t = e.currentSlide - e.options.slidesToScroll, e.currentSlide - 1 === 0 && (e.direction = 1))), e.slideHandler(t))
                    }, t.prototype.buildArrows = function() {
                        var t = this;
                        t.options.arrows === !0 && (t.$prevArrow = e(t.options.prevArrow).addClass("slick-arrow"), t.$nextArrow = e(t.options.nextArrow).addClass("slick-arrow"), t.slideCount > t.options.slidesToShow ? (t.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), t.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.prependTo(t.options.appendArrows), t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.appendTo(t.options.appendArrows), t.options.infinite !== !0 && t.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : t.$prevArrow.add(t.$nextArrow).addClass("slick-hidden").attr({
                            "aria-disabled": "true",
                            tabindex: "-1"
                        }))
                    }, t.prototype.buildDots = function() {
                        var t, i, n = this;
                        if (n.options.dots === !0) {
                            for (n.$slider.addClass("slick-dotted"), i = e("<ul />").addClass(n.options.dotsClass), t = 0; t <= n.getDotCount(); t += 1) i.append(e("<li />").append(n.options.customPaging.call(this, n, t)));
                            n.$dots = i.appendTo(n.options.appendDots), n.$dots.find("li").first().addClass("slick-active")
                        }
                    }, t.prototype.buildOut = function() {
                        var t = this;
                        t.$slides = t.$slider.children(t.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), t.slideCount = t.$slides.length, t.$slides.each(function(t, i) {
                            e(i).attr("data-slick-index", t).data("originalStyling", e(i).attr("style") || "")
                        }), t.$slider.addClass("slick-slider"), t.$slideTrack = 0 === t.slideCount ? e('<div class="slick-track"/>').appendTo(t.$slider) : t.$slides.wrapAll('<div class="slick-track"/>').parent(), t.$list = t.$slideTrack.wrap('<div class="slick-list"/>').parent(), t.$slideTrack.css("opacity", 0), t.options.centerMode !== !0 && t.options.swipeToSlide !== !0 || (t.options.slidesToScroll = 1), e("img[data-lazy]", t.$slider).not("[src]").addClass("slick-loading"), t.setupInfinite(), t.buildArrows(), t.buildDots(), t.updateDots(), t.setSlideClasses("number" == typeof t.currentSlide ? t.currentSlide : 0), t.options.draggable === !0 && t.$list.addClass("draggable")
                    }, t.prototype.buildRows = function() {
                        var e, t, i, n, r, o, s, a = this;
                        if (n = document.createDocumentFragment(), o = a.$slider.children(), a.options.rows > 1) {
                            for (s = a.options.slidesPerRow * a.options.rows, r = Math.ceil(o.length / s), e = 0; e < r; e++) {
                                var l = document.createElement("div");
                                for (t = 0; t < a.options.rows; t++) {
                                    var u = document.createElement("div");
                                    for (i = 0; i < a.options.slidesPerRow; i++) {
                                        var d = e * s + (t * a.options.slidesPerRow + i);
                                        o.get(d) && u.appendChild(o.get(d))
                                    }
                                    l.appendChild(u)
                                }
                                n.appendChild(l)
                            }
                            a.$slider.empty().append(n), a.$slider.children().children().children().css({
                                width: 100 / a.options.slidesPerRow + "%",
                                display: "inline-block"
                            })
                        }
                    }, t.prototype.checkResponsive = function(t, i) {
                        var n, r, o, s = this,
                            a = !1,
                            l = s.$slider.width(),
                            u = window.innerWidth || e(window).width();
                        if ("window" === s.respondTo ? o = u : "slider" === s.respondTo ? o = l : "min" === s.respondTo && (o = Math.min(u, l)), s.options.responsive && s.options.responsive.length && null !== s.options.responsive) {
                            r = null;
                            for (n in s.breakpoints) s.breakpoints.hasOwnProperty(n) && (s.originalSettings.mobileFirst === !1 ? o < s.breakpoints[n] && (r = s.breakpoints[n]) : o > s.breakpoints[n] && (r = s.breakpoints[n]));
                            null !== r ? null !== s.activeBreakpoint ? (r !== s.activeBreakpoint || i) && (s.activeBreakpoint = r, "unslick" === s.breakpointSettings[r] ? s.unslick(r) : (s.options = e.extend({}, s.originalSettings, s.breakpointSettings[r]), t === !0 && (s.currentSlide = s.options.initialSlide), s.refresh(t)), a = r) : (s.activeBreakpoint = r, "unslick" === s.breakpointSettings[r] ? s.unslick(r) : (s.options = e.extend({}, s.originalSettings, s.breakpointSettings[r]), t === !0 && (s.currentSlide = s.options.initialSlide), s.refresh(t)), a = r) : null !== s.activeBreakpoint && (s.activeBreakpoint = null, s.options = s.originalSettings, t === !0 && (s.currentSlide = s.options.initialSlide), s.refresh(t), a = r), t || a === !1 || s.$slider.trigger("breakpoint", [s, a])
                        }
                    }, t.prototype.changeSlide = function(t, i) {
                        var n, r, o, s = this,
                            a = e(t.currentTarget);
                        switch (a.is("a") && t.preventDefault(), a.is("li") || (a = a.closest("li")), o = s.slideCount % s.options.slidesToScroll !== 0, n = o ? 0 : (s.slideCount - s.currentSlide) % s.options.slidesToScroll, t.data.message) {
                            case "previous":
                                r = 0 === n ? s.options.slidesToScroll : s.options.slidesToShow - n, s.slideCount > s.options.slidesToShow && s.slideHandler(s.currentSlide - r, !1, i);
                                break;
                            case "next":
                                r = 0 === n ? s.options.slidesToScroll : n, s.slideCount > s.options.slidesToShow && s.slideHandler(s.currentSlide + r, !1, i);
                                break;
                            case "index":
                                var l = 0 === t.data.index ? 0 : t.data.index || a.index() * s.options.slidesToScroll;
                                s.slideHandler(s.checkNavigable(l), !1, i), a.children().trigger("focus");
                                break;
                            default:
                                return
                        }
                    }, t.prototype.checkNavigable = function(e) {
                        var t, i, n = this;
                        if (t = n.getNavigableIndexes(), i = 0, e > t[t.length - 1]) e = t[t.length - 1];
                        else
                            for (var r in t) {
                                if (e < t[r]) {
                                    e = i;
                                    break
                                }
                                i = t[r]
                            }
                        return e
                    }, t.prototype.cleanUpEvents = function() {
                        var t = this;
                        t.options.dots && null !== t.$dots && (e("li", t.$dots).off("click.slick", t.changeSlide).off("mouseenter.slick", e.proxy(t.interrupt, t, !0)).off("mouseleave.slick", e.proxy(t.interrupt, t, !1)), t.options.accessibility === !0 && t.$dots.off("keydown.slick", t.keyHandler)), t.$slider.off("focus.slick blur.slick"), t.options.arrows === !0 && t.slideCount > t.options.slidesToShow && (t.$prevArrow && t.$prevArrow.off("click.slick", t.changeSlide), t.$nextArrow && t.$nextArrow.off("click.slick", t.changeSlide), t.options.accessibility === !0 && (t.$prevArrow.off("keydown.slick", t.keyHandler), t.$nextArrow.off("keydown.slick", t.keyHandler))), t.$list.off("touchstart.slick mousedown.slick", t.swipeHandler), t.$list.off("touchmove.slick mousemove.slick", t.swipeHandler), t.$list.off("touchend.slick mouseup.slick", t.swipeHandler), t.$list.off("touchcancel.slick mouseleave.slick", t.swipeHandler), t.$list.off("click.slick", t.clickHandler), e(document).off(t.visibilityChange, t.visibility), t.cleanUpSlideEvents(), t.options.accessibility === !0 && t.$list.off("keydown.slick", t.keyHandler), t.options.focusOnSelect === !0 && e(t.$slideTrack).children().off("click.slick", t.selectHandler), e(window).off("orientationchange.slick.slick-" + t.instanceUid, t.orientationChange), e(window).off("resize.slick.slick-" + t.instanceUid, t.resize), e("[draggable!=true]", t.$slideTrack).off("dragstart", t.preventDefault), e(window).off("load.slick.slick-" + t.instanceUid, t.setPosition)
                    }, t.prototype.cleanUpSlideEvents = function() {
                        var t = this;
                        t.$list.off("mouseenter.slick", e.proxy(t.interrupt, t, !0)), t.$list.off("mouseleave.slick", e.proxy(t.interrupt, t, !1))
                    }, t.prototype.cleanUpRows = function() {
                        var e, t = this;
                        t.options.rows > 1 && (e = t.$slides.children().children(), e.removeAttr("style"), t.$slider.empty().append(e))
                    }, t.prototype.clickHandler = function(e) {
                        var t = this;
                        t.shouldClick === !1 && (e.stopImmediatePropagation(), e.stopPropagation(), e.preventDefault())
                    }, t.prototype.destroy = function(t) {
                        var i = this;
                        i.autoPlayClear(), i.touchObject = {}, i.cleanUpEvents(), e(".slick-cloned", i.$slider).detach(), i.$dots && i.$dots.remove(), i.$prevArrow && i.$prevArrow.length && (i.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), i.htmlExpr.test(i.options.prevArrow) && i.$prevArrow.remove()), i.$nextArrow && i.$nextArrow.length && (i.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), i.htmlExpr.test(i.options.nextArrow) && i.$nextArrow.remove()), i.$slides && (i.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function() {
                            e(this).attr("style", e(this).data("originalStyling"))
                        }), i.$slideTrack.children(this.options.slide).detach(), i.$slideTrack.detach(), i.$list.detach(), i.$slider.append(i.$slides)), i.cleanUpRows(), i.$slider.removeClass("slick-slider"), i.$slider.removeClass("slick-initialized"), i.$slider.removeClass("slick-dotted"), i.unslicked = !0, t || i.$slider.trigger("destroy", [i])
                    }, t.prototype.disableTransition = function(e) {
                        var t = this,
                            i = {};
                        i[t.transitionType] = "", t.options.fade === !1 ? t.$slideTrack.css(i) : t.$slides.eq(e).css(i)
                    }, t.prototype.fadeSlide = function(e, t) {
                        var i = this;
                        i.cssTransitions === !1 ? (i.$slides.eq(e).css({
                            zIndex: i.options.zIndex
                        }), i.$slides.eq(e).animate({
                            opacity: 1
                        }, i.options.speed, i.options.easing, t)) : (i.applyTransition(e), i.$slides.eq(e).css({
                            opacity: 1,
                            zIndex: i.options.zIndex
                        }), t && setTimeout(function() {
                            i.disableTransition(e), t.call()
                        }, i.options.speed))
                    }, t.prototype.fadeSlideOut = function(e) {
                        var t = this;
                        t.cssTransitions === !1 ? t.$slides.eq(e).animate({
                            opacity: 0,
                            zIndex: t.options.zIndex - 2
                        }, t.options.speed, t.options.easing) : (t.applyTransition(e), t.$slides.eq(e).css({
                            opacity: 0,
                            zIndex: t.options.zIndex - 2
                        }))
                    }, t.prototype.filterSlides = t.prototype.slickFilter = function(e) {
                        var t = this;
                        null !== e && (t.$slidesCache = t.$slides, t.unload(), t.$slideTrack.children(this.options.slide).detach(), t.$slidesCache.filter(e).appendTo(t.$slideTrack), t.reinit())
                    }, t.prototype.focusHandler = function() {
                        var t = this;
                        t.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*", function(i) {
                            i.stopImmediatePropagation();
                            var n = e(this);
                            setTimeout(function() {
                                t.options.pauseOnFocus && (t.focussed = n.is(":focus"), t.autoPlay())
                            }, 0)
                        })
                    }, t.prototype.getCurrent = t.prototype.slickCurrentSlide = function() {
                        var e = this;
                        return e.currentSlide
                    }, t.prototype.getDotCount = function() {
                        var e = this,
                            t = 0,
                            i = 0,
                            n = 0;
                        if (e.options.infinite === !0)
                            if (e.slideCount <= e.options.slidesToShow) ++n;
                            else
                                for (; t < e.slideCount;) ++n, t = i + e.options.slidesToScroll, i += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
                        else if (e.options.centerMode === !0) n = e.slideCount;
                        else if (e.options.asNavFor)
                            for (; t < e.slideCount;) ++n, t = i + e.options.slidesToScroll, i += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
                        else n = 1 + Math.ceil((e.slideCount - e.options.slidesToShow) / e.options.slidesToScroll);
                        return n - 1
                    }, t.prototype.getLeft = function(e) {
                        var t, i, n, r = this,
                            o = 0;
                        return r.slideOffset = 0, i = r.$slides.first().outerHeight(!0), r.options.infinite === !0 ? (r.slideCount > r.options.slidesToShow && (r.slideOffset = r.slideWidth * r.options.slidesToShow * -1, o = i * r.options.slidesToShow * -1), r.slideCount % r.options.slidesToScroll !== 0 && e + r.options.slidesToScroll > r.slideCount && r.slideCount > r.options.slidesToShow && (e > r.slideCount ? (r.slideOffset = (r.options.slidesToShow - (e - r.slideCount)) * r.slideWidth * -1, o = (r.options.slidesToShow - (e - r.slideCount)) * i * -1) : (r.slideOffset = r.slideCount % r.options.slidesToScroll * r.slideWidth * -1, o = r.slideCount % r.options.slidesToScroll * i * -1))) : e + r.options.slidesToShow > r.slideCount && (r.slideOffset = (e + r.options.slidesToShow - r.slideCount) * r.slideWidth, o = (e + r.options.slidesToShow - r.slideCount) * i), r.slideCount <= r.options.slidesToShow && (r.slideOffset = 0, o = 0), r.options.centerMode === !0 && r.slideCount <= r.options.slidesToShow ? r.slideOffset = r.slideWidth * Math.floor(r.options.slidesToShow) / 2 - r.slideWidth * r.slideCount / 2 : r.options.centerMode === !0 && r.options.infinite === !0 ? r.slideOffset += r.slideWidth * Math.floor(r.options.slidesToShow / 2) - r.slideWidth : r.options.centerMode === !0 && (r.slideOffset = 0, r.slideOffset += r.slideWidth * Math.floor(r.options.slidesToShow / 2)), t = r.options.vertical === !1 ? e * r.slideWidth * -1 + r.slideOffset : e * i * -1 + o, r.options.variableWidth === !0 && (n = r.slideCount <= r.options.slidesToShow || r.options.infinite === !1 ? r.$slideTrack.children(".slick-slide").eq(e) : r.$slideTrack.children(".slick-slide").eq(e + r.options.slidesToShow), t = r.options.rtl === !0 ? n[0] ? (r.$slideTrack.width() - n[0].offsetLeft - n.width()) * -1 : 0 : n[0] ? n[0].offsetLeft * -1 : 0, r.options.centerMode === !0 && (n = r.slideCount <= r.options.slidesToShow || r.options.infinite === !1 ? r.$slideTrack.children(".slick-slide").eq(e) : r.$slideTrack.children(".slick-slide").eq(e + r.options.slidesToShow + 1), t = r.options.rtl === !0 ? n[0] ? (r.$slideTrack.width() - n[0].offsetLeft - n.width()) * -1 : 0 : n[0] ? n[0].offsetLeft * -1 : 0, t += (r.$list.width() - n.outerWidth()) / 2)), t
                    }, t.prototype.getOption = t.prototype.slickGetOption = function(e) {
                        var t = this;
                        return t.options[e]
                    }, t.prototype.getNavigableIndexes = function() {
                        var e, t = this,
                            i = 0,
                            n = 0,
                            r = [];
                        for (t.options.infinite === !1 ? e = t.slideCount : (i = t.options.slidesToScroll * -1, n = t.options.slidesToScroll * -1, e = 2 * t.slideCount); i < e;) r.push(i), i = n + t.options.slidesToScroll, n += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow;
                        return r
                    }, t.prototype.getSlick = function() {
                        return this
                    }, t.prototype.getSlideCount = function() {
                        var t, i, n, r = this;
                        return n = r.options.centerMode === !0 ? r.slideWidth * Math.floor(r.options.slidesToShow / 2) : 0, r.options.swipeToSlide === !0 ? (r.$slideTrack.find(".slick-slide").each(function(t, o) {
                            if (o.offsetLeft - n + e(o).outerWidth() / 2 > r.swipeLeft * -1) return i = o, !1
                        }), t = Math.abs(e(i).attr("data-slick-index") - r.currentSlide) || 1) : r.options.slidesToScroll
                    }, t.prototype.goTo = t.prototype.slickGoTo = function(e, t) {
                        var i = this;
                        i.changeSlide({
                            data: {
                                message: "index",
                                index: parseInt(e)
                            }
                        }, t)
                    }, t.prototype.init = function(t) {
                        var i = this;
                        e(i.$slider).hasClass("slick-initialized") || (e(i.$slider).addClass("slick-initialized"), i.buildRows(), i.buildOut(), i.setProps(), i.startLoad(), i.loadSlider(), i.initializeEvents(), i.updateArrows(), i.updateDots(), i.checkResponsive(!0), i.focusHandler()), t && i.$slider.trigger("init", [i]), i.options.accessibility === !0 && i.initADA(), i.options.autoplay && (i.paused = !1, i.autoPlay())
                    }, t.prototype.initADA = function() {
                        var t = this,
                            i = Math.ceil(t.slideCount / t.options.slidesToShow),
                            n = t.getNavigableIndexes().filter(function(e) {
                                return e >= 0 && e < t.slideCount
                            });
                        t.$slides.add(t.$slideTrack.find(".slick-cloned")).attr({
                            "aria-hidden": "true",
                            tabindex: "-1"
                        }).find("a, input, button, select").attr({
                            tabindex: "-1"
                        }), null !== t.$dots && (t.$slides.not(t.$slideTrack.find(".slick-cloned")).each(function(i) {
                            var r = n.indexOf(i);
                            e(this).attr({
                                role: "tabpanel",
                                id: "slick-slide" + t.instanceUid + i,
                                tabindex: -1
                            }), r !== -1 && e(this).attr({
                                "aria-describedby": "slick-slide-control" + t.instanceUid + r
                            })
                        }), t.$dots.attr("role", "tablist").find("li").each(function(r) {
                            var o = n[r];
                            e(this).attr({
                                role: "presentation"
                            }), e(this).find("button").first().attr({
                                role: "tab",
                                id: "slick-slide-control" + t.instanceUid + r,
                                "aria-controls": "slick-slide" + t.instanceUid + o,
                                "aria-label": r + 1 + " of " + i,
                                "aria-selected": null,
                                tabindex: "-1"
                            })
                        }).eq(t.currentSlide).find("button").attr({
                            "aria-selected": "true",
                            tabindex: "0"
                        }).end());
                        for (var r = t.currentSlide, o = r + t.options.slidesToShow; r < o; r++) t.$slides.eq(r).attr("tabindex", 0);
                        t.activateADA()
                    }, t.prototype.initArrowEvents = function() {
                        var e = this;
                        e.options.arrows === !0 && e.slideCount > e.options.slidesToShow && (e.$prevArrow.off("click.slick").on("click.slick", {
                            message: "previous"
                        }, e.changeSlide), e.$nextArrow.off("click.slick").on("click.slick", {
                            message: "next"
                        }, e.changeSlide), e.options.accessibility === !0 && (e.$prevArrow.on("keydown.slick", e.keyHandler), e.$nextArrow.on("keydown.slick", e.keyHandler)))
                    }, t.prototype.initDotEvents = function() {
                        var t = this;
                        t.options.dots === !0 && (e("li", t.$dots).on("click.slick", {
                            message: "index"
                        }, t.changeSlide), t.options.accessibility === !0 && t.$dots.on("keydown.slick", t.keyHandler)), t.options.dots === !0 && t.options.pauseOnDotsHover === !0 && e("li", t.$dots).on("mouseenter.slick", e.proxy(t.interrupt, t, !0)).on("mouseleave.slick", e.proxy(t.interrupt, t, !1))
                    }, t.prototype.initSlideEvents = function() {
                        var t = this;
                        t.options.pauseOnHover && (t.$list.on("mouseenter.slick", e.proxy(t.interrupt, t, !0)), t.$list.on("mouseleave.slick", e.proxy(t.interrupt, t, !1)))
                    }, t.prototype.initializeEvents = function() {
                        var t = this;
                        t.initArrowEvents(), t.initDotEvents(), t.initSlideEvents(), t.$list.on("touchstart.slick mousedown.slick", {
                            action: "start"
                        }, t.swipeHandler), t.$list.on("touchmove.slick mousemove.slick", {
                            action: "move"
                        }, t.swipeHandler), t.$list.on("touchend.slick mouseup.slick", {
                            action: "end"
                        }, t.swipeHandler), t.$list.on("touchcancel.slick mouseleave.slick", {
                            action: "end"
                        }, t.swipeHandler), t.$list.on("click.slick", t.clickHandler), e(document).on(t.visibilityChange, e.proxy(t.visibility, t)), t.options.accessibility === !0 && t.$list.on("keydown.slick", t.keyHandler), t.options.focusOnSelect === !0 && e(t.$slideTrack).children().on("click.slick", t.selectHandler), e(window).on("orientationchange.slick.slick-" + t.instanceUid, e.proxy(t.orientationChange, t)), e(window).on("resize.slick.slick-" + t.instanceUid, e.proxy(t.resize, t)), e("[draggable!=true]", t.$slideTrack).on("dragstart", t.preventDefault), e(window).on("load.slick.slick-" + t.instanceUid, t.setPosition), e(t.setPosition)
                    }, t.prototype.initUI = function() {
                        var e = this;
                        e.options.arrows === !0 && e.slideCount > e.options.slidesToShow && (e.$prevArrow.show(), e.$nextArrow.show()), e.options.dots === !0 && e.slideCount > e.options.slidesToShow && e.$dots.show()
                    }, t.prototype.keyHandler = function(e) {
                        var t = this;
                        e.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === e.keyCode && t.options.accessibility === !0 ? t.changeSlide({
                            data: {
                                message: t.options.rtl === !0 ? "next" : "previous"
                            }
                        }) : 39 === e.keyCode && t.options.accessibility === !0 && t.changeSlide({
                            data: {
                                message: t.options.rtl === !0 ? "previous" : "next"
                            }
                        }))
                    }, t.prototype.lazyLoad = function() {
                        function t(t) {
                            e("img[data-lazy]", t).each(function() {
                                var t = e(this),
                                    i = e(this).attr("data-lazy"),
                                    n = e(this).attr("data-srcset"),
                                    r = e(this).attr("data-sizes") || s.$slider.attr("data-sizes"),
                                    o = document.createElement("img");
                                o.onload = function() {
                                    t.animate({
                                        opacity: 0
                                    }, 100, function() {
                                        n && (t.attr("srcset", n), r && t.attr("sizes", r)), t.attr("src", i).animate({
                                            opacity: 1
                                        }, 200, function() {
                                            t.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading")
                                        }), s.$slider.trigger("lazyLoaded", [s, t, i])
                                    })
                                }, o.onerror = function() {
                                    t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), s.$slider.trigger("lazyLoadError", [s, t, i])
                                }, o.src = i
                            })
                        }
                        var i, n, r, o, s = this;
                        if (s.options.centerMode === !0 ? s.options.infinite === !0 ? (r = s.currentSlide + (s.options.slidesToShow / 2 + 1), o = r + s.options.slidesToShow + 2) : (r = Math.max(0, s.currentSlide - (s.options.slidesToShow / 2 + 1)), o = 2 + (s.options.slidesToShow / 2 + 1) + s.currentSlide) : (r = s.options.infinite ? s.options.slidesToShow + s.currentSlide : s.currentSlide, o = Math.ceil(r + s.options.slidesToShow), s.options.fade === !0 && (r > 0 && r--, o <= s.slideCount && o++)), i = s.$slider.find(".slick-slide").slice(r, o), "anticipated" === s.options.lazyLoad)
                            for (var a = r - 1, l = o, u = s.$slider.find(".slick-slide"), d = 0; d < s.options.slidesToScroll; d++) a < 0 && (a = s.slideCount - 1), i = i.add(u.eq(a)), i = i.add(u.eq(l)), a--, l++;
                        t(i), s.slideCount <= s.options.slidesToShow ? (n = s.$slider.find(".slick-slide"), t(n)) : s.currentSlide >= s.slideCount - s.options.slidesToShow ? (n = s.$slider.find(".slick-cloned").slice(0, s.options.slidesToShow), t(n)) : 0 === s.currentSlide && (n = s.$slider.find(".slick-cloned").slice(s.options.slidesToShow * -1), t(n))
                    }, t.prototype.loadSlider = function() {
                        var e = this;
                        e.setPosition(), e.$slideTrack.css({
                            opacity: 1
                        }), e.$slider.removeClass("slick-loading"), e.initUI(), "progressive" === e.options.lazyLoad && e.progressiveLazyLoad()
                    }, t.prototype.next = t.prototype.slickNext = function() {
                        var e = this;
                        e.changeSlide({
                            data: {
                                message: "next"
                            }
                        })
                    }, t.prototype.orientationChange = function() {
                        var e = this;
                        e.checkResponsive(), e.setPosition()
                    }, t.prototype.pause = t.prototype.slickPause = function() {
                        var e = this;
                        e.autoPlayClear(), e.paused = !0
                    }, t.prototype.play = t.prototype.slickPlay = function() {
                        var e = this;
                        e.autoPlay(), e.options.autoplay = !0, e.paused = !1, e.focussed = !1, e.interrupted = !1
                    }, t.prototype.postSlide = function(t) {
                        var i = this;
                        if (!i.unslicked && (i.$slider.trigger("afterChange", [i, t]), i.animating = !1, i.slideCount > i.options.slidesToShow && i.setPosition(), i.swipeLeft = null, i.options.autoplay && i.autoPlay(), i.options.accessibility === !0 && (i.initADA(), !i.options.autoplay))) {
                            var n = e(i.$slides.get(i.currentSlide));
                            n.attr("tabindex", 0).focus()
                        }
                    }, t.prototype.prev = t.prototype.slickPrev = function() {
                        var e = this;
                        e.changeSlide({
                            data: {
                                message: "previous"
                            }
                        })
                    }, t.prototype.preventDefault = function(e) {
                        e.preventDefault()
                    }, t.prototype.progressiveLazyLoad = function(t) {
                        t = t || 1;
                        var i, n, r, o, s, a = this,
                            l = e("img[data-lazy]", a.$slider);
                        l.length ? (i = l.first(), n = i.attr("data-lazy"), r = i.attr("data-srcset"), o = i.attr("data-sizes") || a.$slider.attr("data-sizes"), s = document.createElement("img"), s.onload = function() {
                            r && (i.attr("srcset", r), o && i.attr("sizes", o)), i.attr("src", n).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"), a.options.adaptiveHeight === !0 && a.setPosition(), a.$slider.trigger("lazyLoaded", [a, i, n]), a.progressiveLazyLoad()
                        }, s.onerror = function() {
                            t < 3 ? setTimeout(function() {
                                a.progressiveLazyLoad(t + 1)
                            }, 500) : (i.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), a.$slider.trigger("lazyLoadError", [a, i, n]), a.progressiveLazyLoad())
                        }, s.src = n) : a.$slider.trigger("allImagesLoaded", [a])
                    }, t.prototype.refresh = function(t) {
                        var i, n, r = this;
                        n = r.slideCount - r.options.slidesToShow, !r.options.infinite && r.currentSlide > n && (r.currentSlide = n), r.slideCount <= r.options.slidesToShow && (r.currentSlide = 0), i = r.currentSlide, r.destroy(!0), e.extend(r, r.initials, {
                            currentSlide: i
                        }), r.init(), t || r.changeSlide({
                            data: {
                                message: "index",
                                index: i
                            }
                        }, !1)
                    }, t.prototype.registerBreakpoints = function() {
                        var t, i, n, r = this,
                            o = r.options.responsive || null;
                        if ("array" === e.type(o) && o.length) {
                            r.respondTo = r.options.respondTo || "window";
                            for (t in o)
                                if (n = r.breakpoints.length - 1, o.hasOwnProperty(t)) {
                                    for (i = o[t].breakpoint; n >= 0;) r.breakpoints[n] && r.breakpoints[n] === i && r.breakpoints.splice(n, 1), n--;
                                    r.breakpoints.push(i), r.breakpointSettings[i] = o[t].settings
                                }
                            r.breakpoints.sort(function(e, t) {
                                return r.options.mobileFirst ? e - t : t - e
                            })
                        }
                    }, t.prototype.reinit = function() {
                        var t = this;
                        t.$slides = t.$slideTrack.children(t.options.slide).addClass("slick-slide"), t.slideCount = t.$slides.length, t.currentSlide >= t.slideCount && 0 !== t.currentSlide && (t.currentSlide = t.currentSlide - t.options.slidesToScroll), t.slideCount <= t.options.slidesToShow && (t.currentSlide = 0), t.registerBreakpoints(), t.setProps(), t.setupInfinite(), t.buildArrows(), t.updateArrows(), t.initArrowEvents(), t.buildDots(), t.updateDots(), t.initDotEvents(), t.cleanUpSlideEvents(), t.initSlideEvents(), t.checkResponsive(!1, !0), t.options.focusOnSelect === !0 && e(t.$slideTrack).children().on("click.slick", t.selectHandler), t.setSlideClasses("number" == typeof t.currentSlide ? t.currentSlide : 0), t.setPosition(), t.focusHandler(), t.paused = !t.options.autoplay, t.autoPlay(), t.$slider.trigger("reInit", [t])
                    }, t.prototype.resize = function() {
                        var t = this;
                        e(window).width() !== t.windowWidth && (clearTimeout(t.windowDelay), t.windowDelay = window.setTimeout(function() {
                            t.windowWidth = e(window).width(), t.checkResponsive(), t.unslicked || t.setPosition()
                        }, 50))
                    }, t.prototype.removeSlide = t.prototype.slickRemove = function(e, t, i) {
                        var n = this;
                        return "boolean" == typeof e ? (t = e, e = t === !0 ? 0 : n.slideCount - 1) : e = t === !0 ? --e : e, !(n.slideCount < 1 || e < 0 || e > n.slideCount - 1) && (n.unload(), i === !0 ? n.$slideTrack.children().remove() : n.$slideTrack.children(this.options.slide).eq(e).remove(), n.$slides = n.$slideTrack.children(this.options.slide), n.$slideTrack.children(this.options.slide).detach(), n.$slideTrack.append(n.$slides), n.$slidesCache = n.$slides, void n.reinit())
                    }, t.prototype.setCSS = function(e) {
                        var t, i, n = this,
                            r = {};
                        n.options.rtl === !0 && (e = -e), t = "left" == n.positionProp ? Math.ceil(e) + "px" : "0px", i = "top" == n.positionProp ? Math.ceil(e) + "px" : "0px", r[n.positionProp] = e, n.transformsEnabled === !1 ? n.$slideTrack.css(r) : (r = {}, n.cssTransitions === !1 ? (r[n.animType] = "translate(" + t + ", " + i + ")", n.$slideTrack.css(r)) : (r[n.animType] = "translate3d(" + t + ", " + i + ", 0px)", n.$slideTrack.css(r)))
                    }, t.prototype.setDimensions = function() {
                        var e = this;
                        e.options.vertical === !1 ? e.options.centerMode === !0 && e.$list.css({
                            padding: "0px " + e.options.centerPadding
                        }) : (e.$list.height(e.$slides.first().outerHeight(!0) * e.options.slidesToShow), e.options.centerMode === !0 && e.$list.css({
                            padding: e.options.centerPadding + " 0px"
                        })), e.listWidth = e.$list.width(), e.listHeight = e.$list.height(), e.options.vertical === !1 && e.options.variableWidth === !1 ? (e.slideWidth = Math.ceil(e.listWidth / e.options.slidesToShow), e.$slideTrack.width(Math.ceil(e.slideWidth * e.$slideTrack.children(".slick-slide").length))) : e.options.variableWidth === !0 ? e.$slideTrack.width(5e3 * e.slideCount) : (e.slideWidth = Math.ceil(e.listWidth), e.$slideTrack.height(Math.ceil(e.$slides.first().outerHeight(!0) * e.$slideTrack.children(".slick-slide").length)));
                        var t = e.$slides.first().outerWidth(!0) - e.$slides.first().width();
                        e.options.variableWidth === !1 && e.$slideTrack.children(".slick-slide").width(e.slideWidth - t)
                    }, t.prototype.setFade = function() {
                        var t, i = this;
                        i.$slides.each(function(n, r) {
                            t = i.slideWidth * n * -1, i.options.rtl === !0 ? e(r).css({
                                position: "relative",
                                right: t,
                                top: 0,
                                zIndex: i.options.zIndex - 2,
                                opacity: 0
                            }) : e(r).css({
                                position: "relative",
                                left: t,
                                top: 0,
                                zIndex: i.options.zIndex - 2,
                                opacity: 0
                            })
                        }), i.$slides.eq(i.currentSlide).css({
                            zIndex: i.options.zIndex - 1,
                            opacity: 1
                        })
                    }, t.prototype.setHeight = function() {
                        var e = this;
                        if (1 === e.options.slidesToShow && e.options.adaptiveHeight === !0 && e.options.vertical === !1) {
                            var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
                            e.$list.css("height", t)
                        }
                    }, t.prototype.setOption = t.prototype.slickSetOption = function() {
                        var t, i, n, r, o, s = this,
                            a = !1;
                        if ("object" === e.type(arguments[0]) ? (n = arguments[0], a = arguments[1], o = "multiple") : "string" === e.type(arguments[0]) && (n = arguments[0], r = arguments[1], a = arguments[2], "responsive" === arguments[0] && "array" === e.type(arguments[1]) ? o = "responsive" : "undefined" != typeof arguments[1] && (o = "single")), "single" === o) s.options[n] = r;
                        else if ("multiple" === o) e.each(n, function(e, t) {
                            s.options[e] = t
                        });
                        else if ("responsive" === o)
                            for (i in r)
                                if ("array" !== e.type(s.options.responsive)) s.options.responsive = [r[i]];
                                else {
                                    for (t = s.options.responsive.length - 1; t >= 0;) s.options.responsive[t].breakpoint === r[i].breakpoint && s.options.responsive.splice(t, 1), t--;
                                    s.options.responsive.push(r[i])
                                }
                        a && (s.unload(), s.reinit())
                    }, t.prototype.setPosition = function() {
                        var e = this;
                        e.setDimensions(), e.setHeight(), e.options.fade === !1 ? e.setCSS(e.getLeft(e.currentSlide)) : e.setFade(), e.$slider.trigger("setPosition", [e])
                    }, t.prototype.setProps = function() {
                        var e = this,
                            t = document.body.style;
                        e.positionProp = e.options.vertical === !0 ? "top" : "left", "top" === e.positionProp ? e.$slider.addClass("slick-vertical") : e.$slider.removeClass("slick-vertical"), void 0 === t.WebkitTransition && void 0 === t.MozTransition && void 0 === t.msTransition || e.options.useCSS === !0 && (e.cssTransitions = !0), e.options.fade && ("number" == typeof e.options.zIndex ? e.options.zIndex < 3 && (e.options.zIndex = 3) : e.options.zIndex = e.defaults.zIndex), void 0 !== t.OTransform && (e.animType = "OTransform", e.transformType = "-o-transform", e.transitionType = "OTransition", void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (e.animType = !1)), void 0 !== t.MozTransform && (e.animType = "MozTransform", e.transformType = "-moz-transform", e.transitionType = "MozTransition", void 0 === t.perspectiveProperty && void 0 === t.MozPerspective && (e.animType = !1)), void 0 !== t.webkitTransform && (e.animType = "webkitTransform", e.transformType = "-webkit-transform", e.transitionType = "webkitTransition", void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (e.animType = !1)), void 0 !== t.msTransform && (e.animType = "msTransform", e.transformType = "-ms-transform", e.transitionType = "msTransition", void 0 === t.msTransform && (e.animType = !1)), void 0 !== t.transform && e.animType !== !1 && (e.animType = "transform", e.transformType = "transform", e.transitionType = "transition"), e.transformsEnabled = e.options.useTransform && null !== e.animType && e.animType !== !1
                    }, t.prototype.setSlideClasses = function(e) {
                        var t, i, n, r, o = this;
                        i = o.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), o.$slides.eq(e).addClass("slick-current"), o.options.centerMode === !0 ? (t = Math.floor(o.options.slidesToShow / 2), o.options.infinite === !0 && (e >= t && e <= o.slideCount - 1 - t ? o.$slides.slice(e - t, e + t + 1).addClass("slick-active").attr("aria-hidden", "false") : (n = o.options.slidesToShow + e, i.slice(n - t + 1, n + t + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === e ? i.eq(i.length - 1 - o.options.slidesToShow).addClass("slick-center") : e === o.slideCount - 1 && i.eq(o.options.slidesToShow).addClass("slick-center")), o.$slides.eq(e).addClass("slick-center")) : e >= 0 && e <= o.slideCount - o.options.slidesToShow ? o.$slides.slice(e, e + o.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : i.length <= o.options.slidesToShow ? i.addClass("slick-active").attr("aria-hidden", "false") : (r = o.slideCount % o.options.slidesToShow, n = o.options.infinite === !0 ? o.options.slidesToShow + e : e, o.options.slidesToShow == o.options.slidesToScroll && o.slideCount - e < o.options.slidesToShow ? i.slice(n - (o.options.slidesToShow - r), n + r).addClass("slick-active").attr("aria-hidden", "false") : i.slice(n, n + o.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false")), "ondemand" !== o.options.lazyLoad && "anticipated" !== o.options.lazyLoad || o.lazyLoad()
                    }, t.prototype.setupInfinite = function() {
                        var t, i, n, r = this;
                        if (r.options.fade === !0 && (r.options.centerMode = !1), r.options.infinite === !0 && r.options.fade === !1 && (i = null, r.slideCount > r.options.slidesToShow)) {
                            for (n = r.options.centerMode === !0 ? r.options.slidesToShow + 1 : r.options.slidesToShow, t = r.slideCount; t > r.slideCount - n; t -= 1) i = t - 1, e(r.$slides[i]).clone(!0).attr("id", "").attr("data-slick-index", i - r.slideCount).prependTo(r.$slideTrack).addClass("slick-cloned");
                            for (t = 0; t < n + r.slideCount; t += 1) i = t, e(r.$slides[i]).clone(!0).attr("id", "").attr("data-slick-index", i + r.slideCount).appendTo(r.$slideTrack).addClass("slick-cloned");
                            r.$slideTrack.find(".slick-cloned").find("[id]").each(function() {
                                e(this).attr("id", "")
                            })
                        }
                    }, t.prototype.interrupt = function(e) {
                        var t = this;
                        e || t.autoPlay(), t.interrupted = e
                    }, t.prototype.selectHandler = function(t) {
                        var i = this,
                            n = e(t.target).is(".slick-slide") ? e(t.target) : e(t.target).parents(".slick-slide"),
                            r = parseInt(n.attr("data-slick-index"));
                        return r || (r = 0), i.slideCount <= i.options.slidesToShow ? void i.slideHandler(r, !1, !0) : void i.slideHandler(r)
                    }, t.prototype.slideHandler = function(e, t, i) {
                        var n, r, o, s, a, l = null,
                            u = this;
                        if (t = t || !1, !(u.animating === !0 && u.options.waitForAnimate === !0 || u.options.fade === !0 && u.currentSlide === e)) return t === !1 && u.asNavFor(e), n = e, l = u.getLeft(n), s = u.getLeft(u.currentSlide), u.currentLeft = null === u.swipeLeft ? s : u.swipeLeft, u.options.infinite === !1 && u.options.centerMode === !1 && (e < 0 || e > u.getDotCount() * u.options.slidesToScroll) ? void(u.options.fade === !1 && (n = u.currentSlide, i !== !0 ? u.animateSlide(s, function() {
                            u.postSlide(n)
                        }) : u.postSlide(n))) : u.options.infinite === !1 && u.options.centerMode === !0 && (e < 0 || e > u.slideCount - u.options.slidesToScroll) ? void(u.options.fade === !1 && (n = u.currentSlide, i !== !0 ? u.animateSlide(s, function() {
                            u.postSlide(n)
                        }) : u.postSlide(n))) : (u.options.autoplay && clearInterval(u.autoPlayTimer), r = n < 0 ? u.slideCount % u.options.slidesToScroll !== 0 ? u.slideCount - u.slideCount % u.options.slidesToScroll : u.slideCount + n : n >= u.slideCount ? u.slideCount % u.options.slidesToScroll !== 0 ? 0 : n - u.slideCount : n, u.animating = !0, u.$slider.trigger("beforeChange", [u, u.currentSlide, r]), o = u.currentSlide, u.currentSlide = r, u.setSlideClasses(u.currentSlide), u.options.asNavFor && (a = u.getNavTarget(), a = a.slick("getSlick"), a.slideCount <= a.options.slidesToShow && a.setSlideClasses(u.currentSlide)), u.updateDots(), u.updateArrows(), u.options.fade === !0 ? (i !== !0 ? (u.fadeSlideOut(o), u.fadeSlide(r, function() {
                            u.postSlide(r)
                        })) : u.postSlide(r), void u.animateHeight()) : void(i !== !0 ? u.animateSlide(l, function() {
                            u.postSlide(r)
                        }) : u.postSlide(r)))
                    }, t.prototype.startLoad = function() {
                        var e = this;
                        e.options.arrows === !0 && e.slideCount > e.options.slidesToShow && (e.$prevArrow.hide(), e.$nextArrow.hide()), e.options.dots === !0 && e.slideCount > e.options.slidesToShow && e.$dots.hide(), e.$slider.addClass("slick-loading")
                    }, t.prototype.swipeDirection = function() {
                        var e, t, i, n, r = this;
                        return e = r.touchObject.startX - r.touchObject.curX, t = r.touchObject.startY - r.touchObject.curY, i = Math.atan2(t, e), n = Math.round(180 * i / Math.PI), n < 0 && (n = 360 - Math.abs(n)), n <= 45 && n >= 0 ? r.options.rtl === !1 ? "left" : "right" : n <= 360 && n >= 315 ? r.options.rtl === !1 ? "left" : "right" : n >= 135 && n <= 225 ? r.options.rtl === !1 ? "right" : "left" : r.options.verticalSwiping === !0 ? n >= 35 && n <= 135 ? "down" : "up" : "vertical"
                    }, t.prototype.swipeEnd = function(e) {
                        var t, i, n = this;
                        if (n.dragging = !1, n.swiping = !1, n.scrolling) return n.scrolling = !1, !1;
                        if (n.interrupted = !1, n.shouldClick = !(n.touchObject.swipeLength > 10), void 0 === n.touchObject.curX) return !1;
                        if (n.touchObject.edgeHit === !0 && n.$slider.trigger("edge", [n, n.swipeDirection()]), n.touchObject.swipeLength >= n.touchObject.minSwipe) {
                            switch (i = n.swipeDirection()) {
                                case "left":
                                case "down":
                                    t = n.options.swipeToSlide ? n.checkNavigable(n.currentSlide + n.getSlideCount()) : n.currentSlide + n.getSlideCount(), n.currentDirection = 0;
                                    break;
                                case "right":
                                case "up":
                                    t = n.options.swipeToSlide ? n.checkNavigable(n.currentSlide - n.getSlideCount()) : n.currentSlide - n.getSlideCount(), n.currentDirection = 1
                            }
                            "vertical" != i && (n.slideHandler(t), n.touchObject = {}, n.$slider.trigger("swipe", [n, i]))
                        } else n.touchObject.startX !== n.touchObject.curX && (n.slideHandler(n.currentSlide), n.touchObject = {})
                    }, t.prototype.swipeHandler = function(e) {
                        var t = this;
                        if (!(t.options.swipe === !1 || "ontouchend" in document && t.options.swipe === !1 || t.options.draggable === !1 && e.type.indexOf("mouse") !== -1)) switch (t.touchObject.fingerCount = e.originalEvent && void 0 !== e.originalEvent.touches ? e.originalEvent.touches.length : 1, t.touchObject.minSwipe = t.listWidth / t.options.touchThreshold, t.options.verticalSwiping === !0 && (t.touchObject.minSwipe = t.listHeight / t.options.touchThreshold), e.data.action) {
                            case "start":
                                t.swipeStart(e);
                                break;
                            case "move":
                                t.swipeMove(e);
                                break;
                            case "end":
                                t.swipeEnd(e)
                        }
                    }, t.prototype.swipeMove = function(e) {
                        var t, i, n, r, o, s, a = this;
                        return o = void 0 !== e.originalEvent ? e.originalEvent.touches : null, !(!a.dragging || a.scrolling || o && 1 !== o.length) && (t = a.getLeft(a.currentSlide), a.touchObject.curX = void 0 !== o ? o[0].pageX : e.clientX, a.touchObject.curY = void 0 !== o ? o[0].pageY : e.clientY, a.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(a.touchObject.curX - a.touchObject.startX, 2))), s = Math.round(Math.sqrt(Math.pow(a.touchObject.curY - a.touchObject.startY, 2))), !a.options.verticalSwiping && !a.swiping && s > 4 ? (a.scrolling = !0, !1) : (a.options.verticalSwiping === !0 && (a.touchObject.swipeLength = s), i = a.swipeDirection(), void 0 !== e.originalEvent && a.touchObject.swipeLength > 4 && (a.swiping = !0, e.preventDefault()), r = (a.options.rtl === !1 ? 1 : -1) * (a.touchObject.curX > a.touchObject.startX ? 1 : -1), a.options.verticalSwiping === !0 && (r = a.touchObject.curY > a.touchObject.startY ? 1 : -1), n = a.touchObject.swipeLength, a.touchObject.edgeHit = !1, a.options.infinite === !1 && (0 === a.currentSlide && "right" === i || a.currentSlide >= a.getDotCount() && "left" === i) && (n = a.touchObject.swipeLength * a.options.edgeFriction, a.touchObject.edgeHit = !0), a.options.vertical === !1 ? a.swipeLeft = t + n * r : a.swipeLeft = t + n * (a.$list.height() / a.listWidth) * r, a.options.verticalSwiping === !0 && (a.swipeLeft = t + n * r), a.options.fade !== !0 && a.options.touchMove !== !1 && (a.animating === !0 ? (a.swipeLeft = null, !1) : void a.setCSS(a.swipeLeft))))
                    }, t.prototype.swipeStart = function(e) {
                        var t, i = this;
                        return i.interrupted = !0, 1 !== i.touchObject.fingerCount || i.slideCount <= i.options.slidesToShow ? (i.touchObject = {}, !1) : (void 0 !== e.originalEvent && void 0 !== e.originalEvent.touches && (t = e.originalEvent.touches[0]), i.touchObject.startX = i.touchObject.curX = void 0 !== t ? t.pageX : e.clientX, i.touchObject.startY = i.touchObject.curY = void 0 !== t ? t.pageY : e.clientY, void(i.dragging = !0))
                    }, t.prototype.unfilterSlides = t.prototype.slickUnfilter = function() {
                        var e = this;
                        null !== e.$slidesCache && (e.unload(), e.$slideTrack.children(this.options.slide).detach(), e.$slidesCache.appendTo(e.$slideTrack), e.reinit())
                    }, t.prototype.unload = function() {
                        var t = this;
                        e(".slick-cloned", t.$slider).remove(), t.$dots && t.$dots.remove(), t.$prevArrow && t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.remove(), t.$nextArrow && t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.remove(), t.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
                    }, t.prototype.unslick = function(e) {
                        var t = this;
                        t.$slider.trigger("unslick", [t, e]), t.destroy()
                    }, t.prototype.updateArrows = function() {
                        var e, t = this;
                        e = Math.floor(t.options.slidesToShow / 2), t.options.arrows === !0 && t.slideCount > t.options.slidesToShow && !t.options.infinite && (t.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), t.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === t.currentSlide ? (t.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), t.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : t.currentSlide >= t.slideCount - t.options.slidesToShow && t.options.centerMode === !1 ? (t.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), t.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : t.currentSlide >= t.slideCount - 1 && t.options.centerMode === !0 && (t.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), t.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
                    }, t.prototype.updateDots = function() {
                        var e = this;
                        null !== e.$dots && (e.$dots.find("li").removeClass("slick-active").end(), e.$dots.find("li").eq(Math.floor(e.currentSlide / e.options.slidesToScroll)).addClass("slick-active"))
                    }, t.prototype.visibility = function() {
                        var e = this;
                        e.options.autoplay && (document[e.hidden] ? e.interrupted = !0 : e.interrupted = !1)
                    }, e.fn.slick = function() {
                        var e, i, n = this,
                            r = arguments[0],
                            o = Array.prototype.slice.call(arguments, 1),
                            s = n.length;
                        for (e = 0; e < s; e++)
                            if ("object" == typeof r || "undefined" == typeof r ? n[e].slick = new t(n[e], r) : i = n[e].slick[r].apply(n[e].slick, o), "undefined" != typeof i) return i;
                        return n
                    }
                })
            }).call(n, t, void 0, void 0)
        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {
        jquery: 1
    }],
    4: [function(e, t, i) {
        (function(i) {
            $ = i.$ = e("jquery");
            (function(e, t, i) {
                (function() {
                    var e, t, i, n, r, o = function(e, t) {
                            return function() {
                                return e.apply(t, arguments)
                            }
                        },
                        s = [].indexOf || function(e) {
                            for (var t = 0, i = this.length; t < i; t++)
                                if (t in this && this[t] === e) return t;
                            return -1
                        };
                    t = function() {
                        function e() {}
                        return e.prototype.extend = function(e, t) {
                            var i, n;
                            for (i in t) n = t[i], null == e[i] && (e[i] = n);
                            return e
                        }, e.prototype.isMobile = function(e) {
                            return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(e)
                        }, e.prototype.createEvent = function(e, t, i, n) {
                            var r;
                            return null == t && (t = !1), null == i && (i = !1), null == n && (n = null), null != document.createEvent ? (r = document.createEvent("CustomEvent"), r.initCustomEvent(e, t, i, n)) : null != document.createEventObject ? (r = document.createEventObject(), r.eventType = e) : r.eventName = e, r
                        }, e.prototype.emitEvent = function(e, t) {
                            return null != e.dispatchEvent ? e.dispatchEvent(t) : t in (null != e) ? e[t]() : "on" + t in (null != e) ? e["on" + t]() : void 0
                        }, e.prototype.addEvent = function(e, t, i) {
                            return null != e.addEventListener ? e.addEventListener(t, i, !1) : null != e.attachEvent ? e.attachEvent("on" + t, i) : e[t] = i
                        }, e.prototype.removeEvent = function(e, t, i) {
                            return null != e.removeEventListener ? e.removeEventListener(t, i, !1) : null != e.detachEvent ? e.detachEvent("on" + t, i) : delete e[t]
                        }, e.prototype.innerHeight = function() {
                            return "innerHeight" in window ? window.innerHeight : document.documentElement.clientHeight
                        }, e
                    }(), i = this.WeakMap || this.MozWeakMap || (i = function() {
                        function e() {
                            this.keys = [], this.values = []
                        }
                        return e.prototype.get = function(e) {
                            var t, i, n, r, o;
                            for (o = this.keys, t = n = 0, r = o.length; n < r; t = ++n)
                                if (i = o[t], i === e) return this.values[t]
                        }, e.prototype.set = function(e, t) {
                            var i, n, r, o, s;
                            for (s = this.keys, i = r = 0, o = s.length; r < o; i = ++r)
                                if (n = s[i], n === e) return void(this.values[i] = t);
                            return this.keys.push(e), this.values.push(t)
                        }, e
                    }()), e = this.MutationObserver || this.WebkitMutationObserver || this.MozMutationObserver || (e = function() {
                        function e() {
                            "undefined" != typeof console && null !== console && console.warn("MutationObserver is not supported by your browser."), "undefined" != typeof console && null !== console && console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content.")
                        }
                        return e.notSupported = !0, e.prototype.observe = function() {}, e
                    }()), n = this.getComputedStyle || function(e, t) {
                        return this.getPropertyValue = function(t) {
                            var i;
                            return "float" === t && (t = "styleFloat"), r.test(t) && t.replace(r, function(e, t) {
                                return t.toUpperCase()
                            }), (null != (i = e.currentStyle) ? i[t] : void 0) || null
                        }, this
                    }, r = /(\-([a-z]){1})/g, this.WOW = function() {
                        function r(e) {
                            null == e && (e = {}), this.scrollCallback = o(this.scrollCallback, this), this.scrollHandler = o(this.scrollHandler, this), this.resetAnimation = o(this.resetAnimation, this), this.start = o(this.start, this), this.scrolled = !0, this.config = this.util().extend(e, this.defaults), null != e.scrollContainer && (this.config.scrollContainer = document.querySelector(e.scrollContainer)), this.animationNameCache = new i, this.wowEvent = this.util().createEvent(this.config.boxClass)
                        }
                        return r.prototype.defaults = {
                            boxClass: "wow",
                            animateClass: "animated",
                            offset: 0,
                            mobile: !0,
                            live: !0,
                            callback: null,
                            scrollContainer: null
                        }, r.prototype.init = function() {
                            var e;
                            return this.element = window.document.documentElement, "interactive" === (e = document.readyState) || "complete" === e ? this.start() : this.util().addEvent(document, "DOMContentLoaded", this.start), this.finished = []
                        }, r.prototype.start = function() {
                            var t, i, n, r;
                            if (this.stopped = !1, this.boxes = function() {
                                    var e, i, n, r;
                                    for (n = this.element.querySelectorAll("." + this.config.boxClass), r = [], e = 0, i = n.length; e < i; e++) t = n[e], r.push(t);
                                    return r
                                }.call(this), this.all = function() {
                                    var e, i, n, r;
                                    for (n = this.boxes, r = [], e = 0, i = n.length; e < i; e++) t = n[e], r.push(t);
                                    return r
                                }.call(this), this.boxes.length)
                                if (this.disabled()) this.resetStyle();
                                else
                                    for (r = this.boxes, i = 0, n = r.length; i < n; i++) t = r[i], this.applyStyle(t, !0);
                            if (this.disabled() || (this.util().addEvent(this.config.scrollContainer || window, "scroll", this.scrollHandler), this.util().addEvent(window, "resize", this.scrollHandler), this.interval = setInterval(this.scrollCallback, 50)), this.config.live) return new e(function(e) {
                                return function(t) {
                                    var i, n, r, o, s;
                                    for (s = [], i = 0, n = t.length; i < n; i++) o = t[i], s.push(function() {
                                        var e, t, i, n;
                                        for (i = o.addedNodes || [], n = [], e = 0, t = i.length; e < t; e++) r = i[e], n.push(this.doSync(r));
                                        return n
                                    }.call(e));
                                    return s
                                }
                            }(this)).observe(document.body, {
                                childList: !0,
                                subtree: !0
                            })
                        }, r.prototype.stop = function() {
                            if (this.stopped = !0, this.util().removeEvent(this.config.scrollContainer || window, "scroll", this.scrollHandler), this.util().removeEvent(window, "resize", this.scrollHandler), null != this.interval) return clearInterval(this.interval)
                        }, r.prototype.sync = function(t) {
                            if (e.notSupported) return this.doSync(this.element)
                        }, r.prototype.doSync = function(e) {
                            var t, i, n, r, o;
                            if (null == e && (e = this.element), 1 === e.nodeType) {
                                for (e = e.parentNode || e, r = e.querySelectorAll("." + this.config.boxClass), o = [], i = 0, n = r.length; i < n; i++) t = r[i], s.call(this.all, t) < 0 ? (this.boxes.push(t), this.all.push(t), this.stopped || this.disabled() ? this.resetStyle() : this.applyStyle(t, !0), o.push(this.scrolled = !0)) : o.push(void 0);
                                return o
                            }
                        }, r.prototype.show = function(e) {
                            return this.applyStyle(e), e.className = e.className + " " + this.config.animateClass, null != this.config.callback && this.config.callback(e), this.util().emitEvent(e, this.wowEvent), this.util().addEvent(e, "animationend", this.resetAnimation), this.util().addEvent(e, "oanimationend", this.resetAnimation), this.util().addEvent(e, "webkitAnimationEnd", this.resetAnimation), this.util().addEvent(e, "MSAnimationEnd", this.resetAnimation), e
                        }, r.prototype.applyStyle = function(e, t) {
                            var i, n, r;
                            return n = e.getAttribute("data-wow-duration"), i = e.getAttribute("data-wow-delay"), r = e.getAttribute("data-wow-iteration"), this.animate(function(o) {
                                return function() {
                                    return o.customStyle(e, t, n, i, r)
                                }
                            }(this))
                        }, r.prototype.animate = function() {
                            return "requestAnimationFrame" in window ? function(e) {
                                return window.requestAnimationFrame(e)
                            } : function(e) {
                                return e()
                            }
                        }(), r.prototype.resetStyle = function() {
                            var e, t, i, n, r;
                            for (n = this.boxes, r = [], t = 0, i = n.length; t < i; t++) e = n[t], r.push(e.style.visibility = "visible");
                            return r
                        }, r.prototype.resetAnimation = function(e) {
                            var t;
                            if (e.type.toLowerCase().indexOf("animationend") >= 0) return t = e.target || e.srcElement, t.className = t.className.replace(this.config.animateClass, "").trim()
                        }, r.prototype.customStyle = function(e, t, i, n, r) {
                            return t && this.cacheAnimationName(e), e.style.visibility = t ? "hidden" : "visible", i && this.vendorSet(e.style, {
                                animationDuration: i
                            }), n && this.vendorSet(e.style, {
                                animationDelay: n
                            }), r && this.vendorSet(e.style, {
                                animationIterationCount: r
                            }), this.vendorSet(e.style, {
                                animationName: t ? "none" : this.cachedAnimationName(e)
                            }), e
                        }, r.prototype.vendors = ["moz", "webkit"], r.prototype.vendorSet = function(e, t) {
                            var i, n, r, o;
                            n = [];
                            for (i in t) r = t[i], e["" + i] = r, n.push(function() {
                                var t, n, s, a;
                                for (s = this.vendors, a = [], t = 0, n = s.length; t < n; t++) o = s[t], a.push(e["" + o + i.charAt(0).toUpperCase() + i.substr(1)] = r);
                                return a
                            }.call(this));
                            return n
                        }, r.prototype.vendorCSS = function(e, t) {
                            var i, r, o, s, a, l;
                            for (a = n(e), s = a.getPropertyCSSValue(t), o = this.vendors, i = 0, r = o.length; i < r; i++) l = o[i], s = s || a.getPropertyCSSValue("-" + l + "-" + t);
                            return s
                        }, r.prototype.animationName = function(e) {
                            var t;
                            try {
                                t = this.vendorCSS(e, "animation-name").cssText
                            } catch (i) {
                                t = n(e).getPropertyValue("animation-name")
                            }
                            return "none" === t ? "" : t
                        }, r.prototype.cacheAnimationName = function(e) {
                            return this.animationNameCache.set(e, this.animationName(e))
                        }, r.prototype.cachedAnimationName = function(e) {
                            return this.animationNameCache.get(e)
                        }, r.prototype.scrollHandler = function() {
                            return this.scrolled = !0
                        }, r.prototype.scrollCallback = function() {
                            var e;
                            if (this.scrolled && (this.scrolled = !1, this.boxes = function() {
                                    var t, i, n, r;
                                    for (n = this.boxes, r = [], t = 0, i = n.length; t < i; t++) e = n[t], e && (this.isVisible(e) ? this.show(e) : r.push(e));
                                    return r
                                }.call(this), !this.boxes.length && !this.config.live)) return this.stop()
                        }, r.prototype.offsetTop = function(e) {
                            for (var t; void 0 === e.offsetTop;) e = e.parentNode;
                            for (t = e.offsetTop; e = e.offsetParent;) t += e.offsetTop;
                            return t
                        }, r.prototype.isVisible = function(e) {
                            var t, i, n, r, o;
                            return i = e.getAttribute("data-wow-offset") || this.config.offset, o = this.config.scrollContainer && this.config.scrollContainer.scrollTop || window.pageYOffset, r = o + Math.min(this.element.clientHeight, this.util().innerHeight()) - i, n = this.offsetTop(e), t = n + e.clientHeight, n <= r && t >= o
                        }, r.prototype.util = function() {
                            return null != this._util ? this._util : this._util = new t
                        }, r.prototype.disabled = function() {
                            return !this.config.mobile && this.util().isMobile(navigator.userAgent)
                        }, r
                    }()
                }).call(this)
            }).call(i, t, void 0, void 0)
        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {
        jquery: 1
    }],
    5: [function(e, t, i) {
        "use strict";
        var n = e("jquery");
        e("wowjs");
        var r = new WOW({
            boxClass: "wow",
            animateClass: "animated",
            offset: 100,
            mobile: !0,
            live: !0
        });
        r.init();
        var o = 0;
        if (n(".map").length) var s = n(".map-mask"),
            a = s.height(),
            l = s.offset().top - s.height(),
            u = n(".experiences"),
            d = u.offset().top;
        n(document).ready(function() {
            l = s.offset().top - s.height(), d = u.offset().top
        }), n(document).on("scroll", function() {
            var e = n(document).scrollTop();
            n(".map").length && (e > l && e < d ? (n(".map").removeClass("hide"), e > l + a ? n(".header").addClass("hide") : n(".header").removeClass("hide")) : (n(".map").addClass("hide"), n(".header").removeClass("hide"))), o = e
        }), n(".menu-toggle").on("click tap", function() {
            n(".nav").toggleClass("active"), n(this).toggleClass("active"), n(window).width() < 768 && n("body").toggleClass("w-banners")
        }), n("[data-section-to]").on("click tap", function(e) {
            e.preventDefault();
            var t = n(this).data("section-to"),
                i = n('[data-section="' + t + '"]');
            n("html, body").animate({
                scrollTop: i.offset().top
            }, 600)
        }), e("slick-carousel");
        var c = n(".publishers-slider").slick({
            infinite: !0,
            speed: 300,
            slidesToShow: 1,
            appendArrows: n(".publishers-slider-arrows")
        });
        n(".publishers-list-item").on("click tap", function() {
            n(this).addClass("active high"), n(this).find(".publishers-list-item-wrapper").addClass("active"), n(".publishers-list").addClass("active"), n(".publishers-slider").addClass("active"), n(".publishers-slider-arrows").addClass("active"), n(".publishers-slider-close").addClass("active"), c.slick("slickGoTo", parseInt(n(this).data("number")))
        }), n(".publishers-slider-close").on("click tap", function() {
            n(".publishers-list-item").removeClass("active"), n(".publishers-list").removeClass("active"), n(".publishers-slider").removeClass("active"), n(".publishers-slider-arrows").removeClass("active"), n(".publishers-slider-close").removeClass("active"), setTimeout(function() {
                n(".publishers-list-item").removeClass("high")
            }, 500)
        });
        var p = (n(".quotes-list-slider.media-slider").slick({
                infinite: !0,
                speed: 300,
                slidesToShow: 1,
                appendArrows: n(".media-slider.quotes-list-slider-arrows")
            }), n(".quotes-list-slider.quotes-slider").slick({
                infinite: !0,
                speed: 300,
                slidesToShow: 1,
                appendArrows: n(".quotes-slider.quotes-list-slider-arrows")
            }), n(".banners-cellphone-slider-wrapper.yellow .banners-cellphone-list").slick({
                infinite: !0,
                speed: 300,
                slidesToShow: 4,
                slidesToScroll: 1,
                vertical: !0,
                verticalSwiping: !0,
                appendArrows: n(".banners-cellphone-slider-wrapper.yellow"),
                responsive: [{
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 6
                    }
                }]
            }), n(".banners-cellphone-slider-wrapper.black .banners-cellphone-list").slick({
                infinite: !0,
                speed: 300,
                slidesToShow: 4,
                slidesToScroll: 1,
                vertical: !0,
                verticalSwiping: !0,
                appendArrows: n(".banners-cellphone-slider-wrapper.black"),
                responsive: [{
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 6
                    }
                }]
            }), n(".banners-cellphone-slider-wrapper.red .banners-cellphone-list").slick({
                infinite: !0,
                speed: 300,
                slidesToShow: 4,
                slidesToScroll: 1,
                vertical: !0,
                verticalSwiping: !0,
                appendArrows: n(".banners-cellphone-slider-wrapper.red"),
                responsive: [{
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 6
                    }
                }]
            }), n(".banners-cellphone-slider-wrapper.blue .banners-cellphone-list").slick({
                infinite: !0,
                speed: 300,
                slidesToShow: 4,
                slidesToScroll: 1,
                vertical: !0,
                verticalSwiping: !0,
                appendArrows: n(".banners-cellphone-slider-wrapper.blue"),
                responsive: [{
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 6
                    }
                }]
            }), n(".banners-slider").slick({
                infinite: !0,
                speed: 300,
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: !0
            })),
            f = function(e, t) {
                var i = {
                        clickUrl: "",
                        expandDirection: "undefined",
                        preferredClickThroughWindow: "new",
                        clickEvent: "advertiser",
                        externalAdServer: "Custom",
                        tagVersion: "4"
                    },
                    n = document.createElement("script");
                n.id = i.scriptId = "celtra-script-" + (window.celtraScriptIndex = (window.celtraScriptIndex || 0) + 1), i.clientTimestamp = new Date / 1e3, i.clientTimeZoneOffsetInMinutes = (new Date).getTimezoneOffset(), i.hostPageLoadId = window.celtraHostPageLoadId = window.celtraHostPageLoadId || (Math.random() + "").slice(2);
                var r = ("https:" == window.location.protocol ? "https" : "http") + "://ads.celtra.com/" + t + "/web.js?";
                for (var o in i) r += "&" + encodeURIComponent(o) + "=" + encodeURIComponent(i[o]);
                n.src = r, e.parentNode.insertBefore(n, e.nextSibling)
            };
        window.bannerScriptExec = f, n(".banners-cellphone-item").on("click tap", function() {
            var e = n(this).data("banner-id");
            n("body").append('<div class="celtra-ad-v3">A<img src="data:image/png,celtra" style="display: none" onerror="window.bannerScriptExec(this,\'' + e + "')\"/></div>")
        }), n(".banners-list-item").on("click tap", function() {
            var e = n(this).data("banner-slider-index");
            n(".banners").addClass("active"), n(".banners-media").addClass("active"), n(window).width() < 768 && n("body").toggleClass("w-banners"), p.slick("slickGoTo", parseInt(e))
        }), n(".banners-media-close").on("click tap", function() {
            n(".banners-media").removeClass("active"), n(".banners").removeClass("active"), n("body").removeClass("w-banners")
        }), n(".map-filters-item").on("click tap", function() {
            n(this).toggleClass("active");
            var e = n(this).data("filter"),
                t = n(this).data("filter-number");
            n('[data-words="' + e + '"]').toggleClass("active"), n('[data-filter-number="' + t + '"]').toggleClass("hide")
        }), n(".svg-map > g").each(function() {
            n(this).attr("data-filter-number", Math.floor(4 * Math.random()) + 1), n(this).attr("style", "animation-delay:" + Math.floor(10 * Math.random()) + "10ms")
        });
        var h = [{
            featureType: "all",
            elementType: "labels",
            stylers: [{
                visibility: "off"
            }]
        }, {
            featureType: "administrative",
            elementType: "labels.text.fill",
            stylers: [{
                color: "#444444"
            }]
        }, {
            featureType: "administrative.country",
            elementType: "geometry.fill",
            stylers: [{
                saturation: "-7"
            }]
        }, {
            featureType: "administrative.country",
            elementType: "geometry.stroke",
            stylers: [{
                color: "#ffcccc"
            }]
        }, {
            featureType: "administrative.country",
            elementType: "labels",
            stylers: [{
                visibility: "off"
            }]
        }, {
            featureType: "administrative.province",
            elementType: "geometry.stroke",
            stylers: [{
                color: "#ffcccc"
            }]
        }, {
            featureType: "administrative.province",
            elementType: "labels",
            stylers: [{
                visibility: "off"
            }]
        }, {
            featureType: "administrative.locality",
            elementType: "labels",
            stylers: [{
                visibility: "off"
            }]
        }, {
            featureType: "administrative.neighborhood",
            elementType: "labels",
            stylers: [{
                visibility: "off"
            }]
        }, {
            featureType: "administrative.land_parcel",
            elementType: "geometry.fill",
            stylers: [{
                color: "#ff0000"
            }]
        }, {
            featureType: "administrative.land_parcel",
            elementType: "labels",
            stylers: [{
                visibility: "off"
            }]
        }, {
            featureType: "landscape",
            elementType: "all",
            stylers: [{
                color: "#f2f2f2"
            }]
        }, {
            featureType: "landscape",
            elementType: "geometry.fill",
            stylers: [{
                color: "#ffebe9"
            }]
        }, {
            featureType: "landscape",
            elementType: "labels",
            stylers: [{
                visibility: "off"
            }]
        }, {
            featureType: "landscape.man_made",
            elementType: "geometry.fill",
            stylers: [{
                lightness: "0"
            }]
        }, {
            featureType: "poi",
            elementType: "all",
            stylers: [{
                visibility: "off"
            }]
        }, {
            featureType: "poi",
            elementType: "labels",
            stylers: [{
                visibility: "off"
            }]
        }, {
            featureType: "road",
            elementType: "all",
            stylers: [{
                saturation: -100
            }, {
                lightness: 45
            }]
        }, {
            featureType: "road",
            elementType: "labels",
            stylers: [{
                visibility: "off"
            }]
        }, {
            featureType: "road.highway",
            elementType: "all",
            stylers: [{
                visibility: "simplified"
            }]
        }, {
            featureType: "road.highway",
            elementType: "geometry.fill",
            stylers: [{
                color: "#ffd9d9"
            }]
        }, {
            featureType: "road.arterial",
            elementType: "geometry.fill",
            stylers: [{
                color: "#ffd9d9"
            }]
        }, {
            featureType: "road.arterial",
            elementType: "labels.icon",
            stylers: [{
                visibility: "off"
            }]
        }, {
            featureType: "transit",
            elementType: "all",
            stylers: [{
                visibility: "off"
            }]
        }, {
            featureType: "transit",
            elementType: "labels",
            stylers: [{
                visibility: "off"
            }]
        }, {
            featureType: "water",
            elementType: "all",
            stylers: [{
                color: "#d5d5d5"
            }, {
                visibility: "on"
            }]
        }, {
            featureType: "water",
            elementType: "geometry.fill",
            stylers: [{
                color: "#ffd7d7"
            }]
        }];
        window.initMap = function() {
            var e = new google.maps.Map(document.getElementById("map"), {
                zoom: 16,
                disableDefaultUI: !0,
                mapTypeControl: !1
            });
            if (e.setOptions({
                    styles: h
                }), navigator.geolocation) {
                var t = {
                    lat: -23.60722,
                    lng: -46.68806
                };
                e.setCenter(t), navigator.geolocation.getCurrentPosition(function(t) {
                    var i = {
                        lat: t.coords.latitude,
                        lng: t.coords.longitude
                    };
                    e.setCenter(i);
                    var r = "https://maps.googleapis.com/maps/api/geocode/json?latlng=" + i.lat + "," + i.lng + "&key=AIzaSyCyFHuXrJetzujrDX63nUqcfFTBcu9YoMU";
                    n.getJSON(r, function(e) {
                        if ("OK" == e.status) {
                            for (var t = e.results[0], i = "", r = "", o = "", s = 0, a = t.address_components.length; s < a; s++) {
                                var l = t.address_components[s];
                                l.types.indexOf("administrative_area_level_1") >= 0 && (r = l.short_name), l.types.indexOf("sublocality_level_1") >= 0 && (i = l.long_name), l.types.indexOf("country") >= 0 && (o = l.long_name)
                            }
                            n("#neighborhood").html(i), n("#state").html(r), n("#country").html(o)
                        }
                    });
                    var o = "http://api.openweathermap.org/data/2.5/weather?lat=" + i.lat + "&lon=" + i.lng + "&appid=e2f4720a724e820e64586889db9a99a3&units=metric";
                    n.getJSON(o, function(e) {
                        n("#weather").html(e.main.temp.toFixed(0))
                    })
                })
            }
        }, setInterval(function() {
            var e = (new Date).toLocaleTimeString("en-US", {
                hour: "numeric",
                minute: "numeric"
            });
            n("#timer").html(e)
        }, 1e3), e("parsleyjs"), n("#contact-form").parsley({
            trigger: "keydown"
        }), n("#contact-form").on("submit", function() {
            n(".footer-form-loading").addClass("active");
            var e = n(".footer-form-select").val().toLowerCase(),
                t = "";
            switch (e) {
                case "a publisher":
                    t = "lkosaka@loganmedia.mobi";
                    break;
                case "an advertiser":
                    t = "iquintana@loganmedia.mobi";
                    break;
                case "a developer":
                    t = "sreingold@loganmedia.mobi";
                    break;
                case "other":
                    t = "contact@loganmedia.mobi";
                    break;
                default:
                    t = "contact@loganmedia.mobi"
            }
            return n.ajax({
                url: "https://formspree.io/" + t,
                data: n("#contact-form").serialize(),
                dataType: "json",
                type: "post"
            }).done(function() {
                n(".footer-form-loading").removeClass("active"), n(".footer-form-success").addClass("active")
            }), !1
        })
    }, {
        jquery: 1,
        parsleyjs: 2,
        "slick-carousel": 3,
        wowjs: 4
    }]
}, {}, [5]);
//# sourceMappingURL=main.js.map