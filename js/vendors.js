/*!
 * ScrollTrigger 3.11.4
 * https://greensock.com
 *
 * @license Copyright 2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */
!(function (e, t) {
  "object" == typeof exports && "undefined" != typeof module
    ? t(exports)
    : "function" == typeof define && define.amd
    ? define(["exports"], t)
    : t(((e = e || self).window = e.window || {}));
})(this, function (e) {
  "use strict";
  function t(e, t) {
    for (var i = 0; i < t.length; i++) {
      var s = t[i];
      (s.enumerable = s.enumerable || !1),
        (s.configurable = !0),
        "value" in s && (s.writable = !0),
        Object.defineProperty(e, s.key, s);
    }
  }
  function i() {
    return (
      g ||
      ("undefined" != typeof window &&
        (g = window.gsap) &&
        g.registerPlugin &&
        g)
    );
  }
  function s(e, t) {
    return ~F.indexOf(e) && F[F.indexOf(e) + 1][t];
  }
  function n(e) {
    return !!~E.indexOf(e);
  }
  function r(e, t, i, s, n) {
    return e.addEventListener(t, i, { passive: !s, capture: !!n });
  }
  function a(e, t, i, s) {
    return e.removeEventListener(t, i, !!s);
  }
  function o() {
    return (_ && _.isPressed) || P.cache++;
  }
  function l(e, t) {
    function i(s) {
      if (s || 0 === s) {
        k && (y.history.scrollRestoration = "manual");
        var n = _ && _.isPressed;
        (s = i.v = Math.round(s) || (_ && _.iOS ? 1 : 0)),
          e(s),
          (i.cacheID = P.cache),
          n && O("ss", s);
      } else (t || P.cache !== i.cacheID || O("ref")) && ((i.cacheID = P.cache), (i.v = e()));
      return i.v + i.offset;
    }
    return (i.offset = 0), e && i;
  }
  function u(e) {
    return (
      g.utils.toArray(e)[0] ||
      ("string" == typeof e && !1 !== g.config().nullTargetWarn
        ? console.warn("Element not found:", e)
        : null)
    );
  }
  function c(e, t) {
    var i = t.s,
      r = t.sc;
    n(e) && (e = b.scrollingElement || w);
    var a = P.indexOf(e),
      u = r === N.sc ? 1 : 2;
    ~a || (a = P.push(e) - 1), P[a + u] || e.addEventListener("scroll", o);
    var c = P[a + u],
      d =
        c ||
        (P[a + u] =
          l(s(e, i), !0) ||
          (n(e)
            ? r
            : l(function (t) {
                return arguments.length ? (e[i] = t) : e[i];
              })));
    return (
      (d.target = e),
      c || (d.smooth = "smooth" === g.getProperty(e, "scrollBehavior")),
      d
    );
  }
  function d(e, t, i) {
    function s(e, t) {
      var s = $();
      t || l < s - a
        ? ((r = n), (n = e), (o = a), (a = s))
        : i
        ? (n += e)
        : (n = r + ((e - r) / (s - o)) * (a - o));
    }
    var n = e,
      r = e,
      a = $(),
      o = a,
      l = t || 50,
      u = Math.max(500, 3 * l);
    return {
      update: s,
      reset: function () {
        (r = n = i ? 0 : n), (o = a = 0);
      },
      getVelocity: function (e) {
        var t = o,
          l = r,
          c = $();
        return (
          (!e && 0 !== e) || e === n || s(e),
          a === o || u < c - o
            ? 0
            : ((n + (i ? l : -l)) / ((i ? c : a) - t)) * 1e3
        );
      },
    };
  }
  function p(e, t) {
    return (
      t && !e._gsapAllow && e.preventDefault(),
      e.changedTouches ? e.changedTouches[0] : e
    );
  }
  function h(e) {
    var t = Math.max.apply(Math, e),
      i = Math.min.apply(Math, e);
    return Math.abs(t) >= Math.abs(i) ? t : i;
  }
  function f() {
    (T = g.core.globals().ScrollTrigger) &&
      T.core &&
      (function () {
        var e = T.core,
          t = e.bridge || {},
          i = e._scrollers,
          s = e._proxies;
        i.push.apply(i, P),
          s.push.apply(s, F),
          (P = i),
          (F = s),
          (O = function (e, i) {
            return t[e](i);
          });
      })();
  }
  function m(e) {
    return (
      (g = e || i()) &&
        "undefined" != typeof document &&
        document.body &&
        ((y = window),
        (w = (b = document).documentElement),
        (D = b.body),
        (E = [y, b, w, D]),
        g.utils.clamp,
        (M = g.core.context || function () {}),
        (C = "onpointerenter" in D ? "pointer" : "mouse"),
        (x = B.isTouch =
          y.matchMedia &&
          y.matchMedia("(hover: none), (pointer: coarse)").matches
            ? 1
            : "ontouchstart" in y ||
              0 < navigator.maxTouchPoints ||
              0 < navigator.msMaxTouchPoints
            ? 2
            : 0),
        (S = B.eventTypes =
          (
            "ontouchstart" in w
              ? "touchstart,touchmove,touchcancel,touchend"
              : "onpointerdown" in w
              ? "pointerdown,pointermove,pointercancel,pointerup"
              : "mousedown,mousemove,mouseup,mouseup"
          ).split(",")),
        setTimeout(function () {
          return (k = 0);
        }, 500),
        f(),
        (v = 1)),
      v
    );
  }
  var g,
    v,
    y,
    b,
    w,
    D,
    x,
    C,
    T,
    E,
    _,
    S,
    M,
    k = 1,
    A = [],
    P = [],
    F = [],
    $ = Date.now,
    O = function (e, t) {
      return t;
    },
    L = "scrollLeft",
    I = "scrollTop",
    z = {
      s: L,
      p: "left",
      p2: "Left",
      os: "right",
      os2: "Right",
      d: "width",
      d2: "Width",
      a: "x",
      sc: l(function (e) {
        return arguments.length
          ? y.scrollTo(e, N.sc())
          : y.pageXOffset || b[L] || w[L] || D[L] || 0;
      }),
    },
    N = {
      s: I,
      p: "top",
      p2: "Top",
      os: "bottom",
      os2: "Bottom",
      d: "height",
      d2: "Height",
      a: "y",
      op: z,
      sc: l(function (e) {
        return arguments.length
          ? y.scrollTo(z.sc(), e)
          : y.pageYOffset || b[I] || w[I] || D[I] || 0;
      }),
    };
  (z.op = N), (P.cache = 0);
  var B =
    ((R.prototype.init = function (e) {
      v || m(g) || console.warn("Please gsap.registerPlugin(Observer)"),
        T || f();
      var t = e.tolerance,
        i = e.dragMinimum,
        s = e.type,
        l = e.target,
        E = e.lineHeight,
        k = e.debounce,
        P = e.preventDefault,
        F = e.onStop,
        O = e.onStopDelay,
        L = e.ignore,
        I = e.wheelSpeed,
        B = e.event,
        R = e.onDragStart,
        H = e.onDragEnd,
        W = e.onDrag,
        j = e.onPress,
        Y = e.onRelease,
        X = e.onRight,
        q = e.onLeft,
        V = e.onUp,
        G = e.onDown,
        U = e.onChangeX,
        K = e.onChangeY,
        Q = e.onChange,
        J = e.onToggleX,
        Z = e.onToggleY,
        ee = e.onHover,
        te = e.onHoverEnd,
        ie = e.onMove,
        se = e.ignoreCheck,
        ne = e.isNormalizer,
        re = e.onGestureStart,
        ae = e.onGestureEnd,
        oe = e.onWheel,
        le = e.onEnable,
        ue = e.onDisable,
        ce = e.onClick,
        de = e.scrollSpeed,
        pe = e.capture,
        he = e.allowClicks,
        fe = e.lockAxis,
        me = e.onLockAxis;
      function ge() {
        return (Ke = $());
      }
      function ve(e, t) {
        return (
          ((Ne.event = e) && L && ~L.indexOf(e.target)) ||
          (t && Xe && "touch" !== e.pointerType) ||
          (se && se(e, t))
        );
      }
      function ye() {
        var e = (Ne.deltaX = h(Ge)),
          i = (Ne.deltaY = h(Ue)),
          s = Math.abs(e) >= t,
          n = Math.abs(i) >= t;
        Q && (s || n) && Q(Ne, e, i, Ge, Ue),
          s &&
            (X && 0 < Ne.deltaX && X(Ne),
            q && Ne.deltaX < 0 && q(Ne),
            U && U(Ne),
            J && Ne.deltaX < 0 != Be < 0 && J(Ne),
            (Be = Ne.deltaX),
            (Ge[0] = Ge[1] = Ge[2] = 0)),
          n &&
            (G && 0 < Ne.deltaY && G(Ne),
            V && Ne.deltaY < 0 && V(Ne),
            K && K(Ne),
            Z && Ne.deltaY < 0 != Re < 0 && Z(Ne),
            (Re = Ne.deltaY),
            (Ue[0] = Ue[1] = Ue[2] = 0)),
          (Oe || $e) && (ie && ie(Ne), $e && (W(Ne), ($e = !1)), (Oe = !1)),
          Ie && !(Ie = !1) && me && me(Ne),
          Le && (oe(Ne), (Le = !1)),
          (Pe = 0);
      }
      function be(e, t, i) {
        (Ge[i] += e),
          (Ue[i] += t),
          Ne._vx.update(e),
          Ne._vy.update(t),
          k ? (Pe = Pe || requestAnimationFrame(ye)) : ye();
      }
      function we(e, t) {
        fe &&
          !ze &&
          ((Ne.axis = ze = Math.abs(e) > Math.abs(t) ? "x" : "y"), (Ie = !0)),
          "y" !== ze && ((Ge[2] += e), Ne._vx.update(e, !0)),
          "x" !== ze && ((Ue[2] += t), Ne._vy.update(t, !0)),
          k ? (Pe = Pe || requestAnimationFrame(ye)) : ye();
      }
      function De(e) {
        if (!ve(e, 1)) {
          var t = (e = p(e, P)).clientX,
            s = e.clientY,
            n = t - Ne.x,
            r = s - Ne.y,
            a = Ne.isDragging;
          (Ne.x = t),
            (Ne.y = s),
            (a ||
              Math.abs(Ne.startX - t) >= i ||
              Math.abs(Ne.startY - s) >= i) &&
              (W && ($e = !0),
              a || (Ne.isDragging = !0),
              we(n, r),
              a || (R && R(Ne)));
        }
      }
      function xe(e) {
        if (!ve(e, 1)) {
          a(ne ? l : Ve, S[1], De, !0);
          var t = !isNaN(Ne.y - Ne.startY),
            i =
              Ne.isDragging &&
              (3 < Math.abs(Ne.x - Ne.startX) ||
                3 < Math.abs(Ne.y - Ne.startY)),
            s = p(e);
          !i &&
            t &&
            (Ne._vx.reset(),
            Ne._vy.reset(),
            P &&
              he &&
              g.delayedCall(0.08, function () {
                if (300 < $() - Ke && !e.defaultPrevented)
                  if (e.target.click) e.target.click();
                  else if (Ve.createEvent) {
                    var t = Ve.createEvent("MouseEvents");
                    t.initMouseEvent(
                      "click",
                      !0,
                      !0,
                      y,
                      1,
                      s.screenX,
                      s.screenY,
                      s.clientX,
                      s.clientY,
                      !1,
                      !1,
                      !1,
                      !1,
                      0,
                      null
                    ),
                      e.target.dispatchEvent(t);
                  }
              })),
            (Ne.isDragging = Ne.isGesturing = Ne.isPressed = !1),
            F && !ne && Fe.restart(!0),
            H && i && H(Ne),
            Y && Y(Ne, i);
        }
      }
      function Ce(e) {
        return (
          e.touches &&
          1 < e.touches.length &&
          (Ne.isGesturing = !0) &&
          re(e, Ne.isDragging)
        );
      }
      function Te() {
        return (Ne.isGesturing = !1) || ae(Ne);
      }
      function Ee(e) {
        if (!ve(e)) {
          var t = He(),
            i = We();
          be((t - je) * de, (i - Ye) * de, 1),
            (je = t),
            (Ye = i),
            F && Fe.restart(!0);
        }
      }
      function _e(e) {
        if (!ve(e)) {
          (e = p(e, P)), oe && (Le = !0);
          var t =
            (1 === e.deltaMode ? E : 2 === e.deltaMode ? y.innerHeight : 1) * I;
          be(e.deltaX * t, e.deltaY * t, 0), F && !ne && Fe.restart(!0);
        }
      }
      function Se(e) {
        if (!ve(e)) {
          var t = e.clientX,
            i = e.clientY,
            s = t - Ne.x,
            n = i - Ne.y;
          (Ne.x = t), (Ne.y = i), (Oe = !0), (s || n) && we(s, n);
        }
      }
      function Me(e) {
        (Ne.event = e), ee(Ne);
      }
      function ke(e) {
        (Ne.event = e), te(Ne);
      }
      function Ae(e) {
        return ve(e) || (p(e, P) && ce(Ne));
      }
      (this.target = l = u(l) || w),
        (this.vars = e),
        (L = L && g.utils.toArray(L)),
        (t = t || 1e-9),
        (i = i || 0),
        (I = I || 1),
        (de = de || 1),
        (s = s || "wheel,touch,pointer"),
        (k = !1 !== k),
        (E = E || parseFloat(y.getComputedStyle(D).lineHeight) || 22);
      var Pe,
        Fe,
        $e,
        Oe,
        Le,
        Ie,
        ze,
        Ne = this,
        Be = 0,
        Re = 0,
        He = c(l, z),
        We = c(l, N),
        je = He(),
        Ye = We(),
        Xe =
          ~s.indexOf("touch") &&
          !~s.indexOf("pointer") &&
          "pointerdown" === S[0],
        qe = n(l),
        Ve = l.ownerDocument || b,
        Ge = [0, 0, 0],
        Ue = [0, 0, 0],
        Ke = 0,
        Qe = (Ne.onPress = function (e) {
          ve(e, 1) ||
            ((Ne.axis = ze = null),
            Fe.pause(),
            (Ne.isPressed = !0),
            (e = p(e)),
            (Be = Re = 0),
            (Ne.startX = Ne.x = e.clientX),
            (Ne.startY = Ne.y = e.clientY),
            Ne._vx.reset(),
            Ne._vy.reset(),
            r(ne ? l : Ve, S[1], De, P, !0),
            (Ne.deltaX = Ne.deltaY = 0),
            j && j(Ne));
        });
      (Fe = Ne._dc =
        g
          .delayedCall(O || 0.25, function () {
            Ne._vx.reset(), Ne._vy.reset(), Fe.pause(), F && F(Ne);
          })
          .pause()),
        (Ne.deltaX = Ne.deltaY = 0),
        (Ne._vx = d(0, 50, !0)),
        (Ne._vy = d(0, 50, !0)),
        (Ne.scrollX = He),
        (Ne.scrollY = We),
        (Ne.isDragging = Ne.isGesturing = Ne.isPressed = !1),
        M(this),
        (Ne.enable = function (e) {
          return (
            Ne.isEnabled ||
              (r(qe ? Ve : l, "scroll", o),
              0 <= s.indexOf("scroll") && r(qe ? Ve : l, "scroll", Ee, P, pe),
              0 <= s.indexOf("wheel") && r(l, "wheel", _e, P, pe),
              ((0 <= s.indexOf("touch") && x) || 0 <= s.indexOf("pointer")) &&
                (r(l, S[0], Qe, P, pe),
                r(Ve, S[2], xe),
                r(Ve, S[3], xe),
                he && r(l, "click", ge, !1, !0),
                ce && r(l, "click", Ae),
                re && r(Ve, "gesturestart", Ce),
                ae && r(Ve, "gestureend", Te),
                ee && r(l, C + "enter", Me),
                te && r(l, C + "leave", ke),
                ie && r(l, C + "move", Se)),
              (Ne.isEnabled = !0),
              e && e.type && Qe(e),
              le && le(Ne)),
            Ne
          );
        }),
        (Ne.disable = function () {
          Ne.isEnabled &&
            (A.filter(function (e) {
              return e !== Ne && n(e.target);
            }).length || a(qe ? Ve : l, "scroll", o),
            Ne.isPressed &&
              (Ne._vx.reset(), Ne._vy.reset(), a(ne ? l : Ve, S[1], De, !0)),
            a(qe ? Ve : l, "scroll", Ee, pe),
            a(l, "wheel", _e, pe),
            a(l, S[0], Qe, pe),
            a(Ve, S[2], xe),
            a(Ve, S[3], xe),
            a(l, "click", ge, !0),
            a(l, "click", Ae),
            a(Ve, "gesturestart", Ce),
            a(Ve, "gestureend", Te),
            a(l, C + "enter", Me),
            a(l, C + "leave", ke),
            a(l, C + "move", Se),
            (Ne.isEnabled = Ne.isPressed = Ne.isDragging = !1),
            ue && ue(Ne));
        }),
        (Ne.kill = Ne.revert =
          function () {
            Ne.disable();
            var e = A.indexOf(Ne);
            0 <= e && A.splice(e, 1), _ === Ne && (_ = 0);
          }),
        A.push(Ne),
        ne && n(l) && (_ = Ne),
        Ne.enable(B);
    }),
    (function (e, i, s) {
      i && t(e.prototype, i), s && t(e, s);
    })(R, [
      {
        key: "velocityX",
        get: function () {
          return this._vx.getVelocity();
        },
      },
      {
        key: "velocityY",
        get: function () {
          return this._vy.getVelocity();
        },
      },
    ]),
    R);
  function R(e) {
    this.init(e);
  }
  function H() {
    return (Re = 1);
  }
  function W() {
    return (Re = 0);
  }
  function j(e) {
    return e;
  }
  function Y(e) {
    return Math.round(1e5 * e) / 1e5 || 0;
  }
  function X() {
    return "undefined" != typeof window;
  }
  function q() {
    return Se || (X() && (Se = window.gsap) && Se.registerPlugin && Se);
  }
  function V(e) {
    return !!~$e.indexOf(e);
  }
  function G(e) {
    return (
      s(e, "getBoundingClientRect") ||
      (V(e)
        ? function () {
            return (Xt.width = ke.innerWidth), (Xt.height = ke.innerHeight), Xt;
          }
        : function () {
            return Et(e);
          })
    );
  }
  function U(e, t) {
    var i = t.s,
      n = t.d2,
      r = t.d,
      a = t.a;
    return (i = "scroll" + n) && (a = s(e, i))
      ? a() - G(e)()[r]
      : V(e)
      ? (Pe[i] || Fe[i]) -
        (ke["inner" + n] || Pe["client" + n] || Fe["client" + n])
      : e[i] - e["offset" + n];
  }
  function K(e, t) {
    for (var i = 0; i < Xe.length; i += 3)
      (t && !~t.indexOf(Xe[i + 1])) || e(Xe[i], Xe[i + 1], Xe[i + 2]);
  }
  function Q(e) {
    return "string" == typeof e;
  }
  function J(e) {
    return "function" == typeof e;
  }
  function Z(e) {
    return "number" == typeof e;
  }
  function ee(e) {
    return "object" == typeof e;
  }
  function te(e, t, i) {
    return e && e.progress(t ? 0 : 1) && i && e.pause();
  }
  function ie(e, t) {
    if (e.enabled) {
      var i = t(e);
      i && i.totalTime && (e.callbackAnimation = i);
    }
  }
  function se(e) {
    return ke.getComputedStyle(e);
  }
  function ne(e, t) {
    for (var i in t) i in e || (e[i] = t[i]);
    return e;
  }
  function re(e, t) {
    var i = t.d2;
    return e["offset" + i] || e["client" + i] || 0;
  }
  function ae(e) {
    var t,
      i = [],
      s = e.labels,
      n = e.duration();
    for (t in s) i.push(s[t] / n);
    return i;
  }
  function oe(e) {
    var t = Se.utils.snap(e),
      i =
        Array.isArray(e) &&
        e.slice(0).sort(function (e, t) {
          return e - t;
        });
    return i
      ? function (e, s, n) {
          var r;
          if ((void 0 === n && (n = 0.001), !s)) return t(e);
          if (0 < s) {
            for (e -= n, r = 0; r < i.length; r++) if (i[r] >= e) return i[r];
            return i[r - 1];
          }
          for (r = i.length, e += n; r--; ) if (i[r] <= e) return i[r];
          return i[0];
        }
      : function (i, s, n) {
          void 0 === n && (n = 0.001);
          var r = t(i);
          return !s || Math.abs(r - i) < n || r - i < 0 == s < 0
            ? r
            : t(s < 0 ? i - e : i + e);
        };
  }
  function le(e, t, i, s) {
    return i.split(",").forEach(function (i) {
      return e(t, i, s);
    });
  }
  function ue(e, t, i, s, n) {
    return e.addEventListener(t, i, { passive: !s, capture: !!n });
  }
  function ce(e, t, i, s) {
    return e.removeEventListener(t, i, !!s);
  }
  function de(e, t, i) {
    return i && i.wheelHandler && e(t, "wheel", i);
  }
  function pe(e, t) {
    if (Q(e)) {
      var i = e.indexOf("="),
        s = ~i ? (e.charAt(i - 1) + 1) * parseFloat(e.substr(i + 1)) : 0;
      ~i && (e.indexOf("%") > i && (s *= t / 100), (e = e.substr(0, i - 1))),
        (e =
          s +
          (e in Mt
            ? Mt[e] * t
            : ~e.indexOf("%")
            ? (parseFloat(e) * t) / 100
            : parseFloat(e) || 0));
    }
    return e;
  }
  function he(e, t, i, n, r, a, o, l) {
    var u = r.startColor,
      c = r.endColor,
      d = r.fontSize,
      p = r.indent,
      h = r.fontWeight,
      f = Ae.createElement("div"),
      m = V(i) || "fixed" === s(i, "pinType"),
      g = -1 !== e.indexOf("scroller"),
      v = m ? Fe : i,
      y = -1 !== e.indexOf("start"),
      b = y ? u : c,
      w =
        "border-color:" +
        b +
        ";font-size:" +
        d +
        ";color:" +
        b +
        ";font-weight:" +
        h +
        ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
    return (
      (w += "position:" + ((g || l) && m ? "fixed;" : "absolute;")),
      (!g && !l && m) ||
        (w += (n === N ? ht : ft) + ":" + (a + parseFloat(p)) + "px;"),
      o &&
        (w +=
          "box-sizing:border-box;text-align:left;width:" +
          o.offsetWidth +
          "px;"),
      (f._isStart = y),
      f.setAttribute("class", "gsap-marker-" + e + (t ? " marker-" + t : "")),
      (f.style.cssText = w),
      (f.innerText = t || 0 === t ? e + "-" + t : e),
      v.children[0] ? v.insertBefore(f, v.children[0]) : v.appendChild(f),
      (f._offset = f["offset" + n.op.d2]),
      kt(f, 0, n, y),
      f
    );
  }
  function fe() {
    return 34 < lt() - ct && (st = st || requestAnimationFrame(Rt));
  }
  function me() {
    (Ue && Ue.isPressed && !(Ue.startX > Fe.clientWidth)) ||
      (P.cache++,
      Ue ? (st = st || requestAnimationFrame(Rt)) : Rt(),
      ct || Ot("scrollStart"),
      (ct = lt()));
  }
  function ge() {
    (Je = ke.innerWidth), (Qe = ke.innerHeight);
  }
  function ve() {
    P.cache++,
      Be ||
        Ge ||
        Ae.fullscreenElement ||
        Ae.webkitFullscreenElement ||
        (Ke &&
          Je === ke.innerWidth &&
          !(Math.abs(ke.innerHeight - Qe) > 0.25 * ke.innerHeight)) ||
        Oe.restart(!0);
  }
  function ye() {
    return ce(Vt, "scrollEnd", ye) || zt(!0);
  }
  function be(e) {
    for (var t = 0; t < Lt.length; t += 5)
      (!e || (Lt[t + 4] && Lt[t + 4].query === e)) &&
        ((Lt[t].style.cssText = Lt[t + 1]),
        Lt[t].getBBox && Lt[t].setAttribute("transform", Lt[t + 2] || ""),
        (Lt[t + 3].uncache = 1));
  }
  function we(e, t) {
    var i;
    for (We = 0; We < At.length; We++)
      !(i = At[We]) ||
        (t && i._ctx !== t) ||
        (e ? i.kill(1) : i.revert(!0, !0));
    t && be(t), t || Ot("revert");
  }
  function De(e, t) {
    P.cache++,
      (!t && nt) ||
        P.forEach(function (e) {
          return J(e) && e.cacheID++ && (e.rec = 0);
        }),
      Q(e) && (ke.history.scrollRestoration = tt = e);
  }
  function xe(e, t, i, s) {
    if (!e._gsap.swappedIn) {
      for (var n, r = Ht.length, a = t.style, o = e.style; r--; )
        a[(n = Ht[r])] = i[n];
      (a.position = "absolute" === i.position ? "absolute" : "relative"),
        "inline" === i.display && (a.display = "inline-block"),
        (o[ft] = o[ht] = "auto"),
        (a.flexBasis = i.flexBasis || "auto"),
        (a.overflow = "visible"),
        (a.boxSizing = "border-box"),
        (a[mt] = re(e, z) + Tt),
        (a[gt] = re(e, N) + Tt),
        (a[Dt] = o[xt] = o.top = o.left = "0"),
        Yt(s),
        (o[mt] = o.maxWidth = i[mt]),
        (o[gt] = o.maxHeight = i[gt]),
        (o[Dt] = i[Dt]),
        e.parentNode !== t &&
          (e.parentNode.insertBefore(t, e), t.appendChild(e)),
        (e._gsap.swappedIn = !0);
    }
  }
  function Ce(e) {
    for (var t = Wt.length, i = e.style, s = [], n = 0; n < t; n++)
      s.push(Wt[n], i[Wt[n]]);
    return (s.t = e), s;
  }
  function Te(e, t, i, s, n, r, a, o, l, c, d, p, h) {
    J(e) && (e = e(o)),
      Q(e) &&
        "max" === e.substr(0, 3) &&
        (e = p + ("=" === e.charAt(4) ? pe("0" + e.substr(3), i) : 0));
    var f,
      m,
      g,
      v = h ? h.time() : 0;
    if ((h && h.seek(0), Z(e))) a && kt(a, i, s, !0);
    else {
      J(t) && (t = t(o));
      var y,
        b,
        w,
        D,
        x = (e || "0").split(" ");
      (g = u(t) || Fe),
        ((y = Et(g) || {}) && (y.left || y.top)) ||
          "none" !== se(g).display ||
          ((D = g.style.display),
          (g.style.display = "block"),
          (y = Et(g)),
          D ? (g.style.display = D) : g.style.removeProperty("display")),
        (b = pe(x[0], y[s.d])),
        (w = pe(x[1] || "0", i)),
        (e = y[s.p] - l[s.p] - c + b + n - w),
        a && kt(a, w, s, i - w < 20 || (a._isStart && 20 < w)),
        (i -= i - w);
    }
    if (r) {
      var C = e + i,
        T = r._isStart;
      (f = "scroll" + s.d2),
        kt(
          r,
          C,
          s,
          (T && 20 < C) ||
            (!T && (d ? Math.max(Fe[f], Pe[f]) : r.parentNode[f]) <= C + 1)
        ),
        d &&
          ((l = Et(a)),
          d && (r.style[s.op.p] = l[s.op.p] - s.op.m - r._offset + Tt));
    }
    return (
      h &&
        g &&
        ((f = Et(g)),
        h.seek(p),
        (m = Et(g)),
        (h._caScrollDist = f[s.p] - m[s.p]),
        (e = (e / h._caScrollDist) * p)),
      h && h.seek(v),
      h ? e : Math.round(e)
    );
  }
  function Ee(e, t, i, s) {
    if (e.parentNode !== t) {
      var n,
        r,
        a = e.style;
      if (t === Fe) {
        for (n in ((e._stOrig = a.cssText), (r = se(e))))
          +n ||
            qt.test(n) ||
            !r[n] ||
            "string" != typeof a[n] ||
            "0" === n ||
            (a[n] = r[n]);
        (a.top = i), (a.left = s);
      } else a.cssText = e._stOrig;
      (Se.core.getCache(e).uncache = 1), t.appendChild(e);
    }
  }
  function _e(e, t) {
    function i(t, o, l, u, c) {
      var d = i.tween,
        p = o.onComplete;
      return (
        (l = l || r()),
        (c = (u && c) || 0),
        (u = u || t - l),
        d && d.kill(),
        (s = Math.round(l)),
        (o[a] = t),
        ((o.modifiers = {})[a] = function (e) {
          return (
            (e = Math.round(r())) !== s &&
            e !== n &&
            3 < Math.abs(e - s) &&
            3 < Math.abs(e - n)
              ? (d.kill(), (i.tween = 0))
              : (e = l + u * d.ratio + c * d.ratio * d.ratio),
            (n = s),
            (s = Math.round(e))
          );
        }),
        (o.onUpdate = function () {
          P.cache++, Rt();
        }),
        (o.onComplete = function () {
          (i.tween = 0), p && p.call(d);
        }),
        (d = i.tween = Se.to(e, o))
      );
    }
    var s,
      n,
      r = c(e, t),
      a = "_scroll" + t.p2;
    return (
      ((e[a] = r).wheelHandler = function () {
        return i.tween && i.tween.kill() && (i.tween = 0);
      }),
      ue(e, "wheel", r.wheelHandler),
      i
    );
  }
  (B.version = "3.11.4"),
    (B.create = function (e) {
      return new B(e);
    }),
    (B.register = m),
    (B.getAll = function () {
      return A.slice();
    }),
    (B.getById = function (e) {
      return A.filter(function (t) {
        return t.vars.id === e;
      })[0];
    }),
    i() && g.registerPlugin(B);
  var Se,
    Me,
    ke,
    Ae,
    Pe,
    Fe,
    $e,
    Oe,
    Le,
    Ie,
    ze,
    Ne,
    Be,
    Re,
    He,
    We,
    je,
    Ye,
    Xe,
    qe,
    Ve,
    Ge,
    Ue,
    Ke,
    Qe,
    Je,
    Ze,
    et,
    tt,
    it,
    st,
    nt,
    rt,
    at,
    ot = 1,
    lt = Date.now,
    ut = lt(),
    ct = 0,
    dt = 0,
    pt = Math.abs,
    ht = "right",
    ft = "bottom",
    mt = "width",
    gt = "height",
    vt = "Right",
    yt = "Left",
    bt = "Top",
    wt = "Bottom",
    Dt = "padding",
    xt = "margin",
    Ct = "Width",
    Tt = "px",
    Et = function (e, t) {
      var i =
          t &&
          "matrix(1, 0, 0, 1, 0, 0)" !== se(e)[He] &&
          Se.to(e, {
            x: 0,
            y: 0,
            xPercent: 0,
            yPercent: 0,
            rotation: 0,
            rotationX: 0,
            rotationY: 0,
            scale: 1,
            skewX: 0,
            skewY: 0,
          }).progress(1),
        s = e.getBoundingClientRect();
      return i && i.progress(0).kill(), s;
    },
    _t = {
      startColor: "green",
      endColor: "red",
      indent: 0,
      fontSize: "16px",
      fontWeight: "normal",
    },
    St = { toggleActions: "play", anticipatePin: 0 },
    Mt = { top: 0, left: 0, center: 0.5, bottom: 1, right: 1 },
    kt = function (e, t, i, s) {
      var n = { display: "block" },
        r = i[s ? "os2" : "p2"],
        a = i[s ? "p2" : "os2"];
      (e._isFlipped = s),
        (n[i.a + "Percent"] = s ? -100 : 0),
        (n[i.a] = s ? "1px" : 0),
        (n["border" + r + Ct] = 1),
        (n["border" + a + Ct] = 0),
        (n[i.p] = t + "px"),
        Se.set(e, n);
    },
    At = [],
    Pt = {},
    Ft = {},
    $t = [],
    Ot = function (e) {
      return (
        (Ft[e] &&
          Ft[e].map(function (e) {
            return e();
          })) ||
        $t
      );
    },
    Lt = [],
    It = 0,
    zt = function (e, t) {
      if (!ct || e) {
        (nt = Vt.isRefreshing = !0),
          P.forEach(function (e) {
            return J(e) && e.cacheID++ && (e.rec = e());
          });
        var i = Ot("refreshInit");
        qe && Vt.sort(),
          t || we(),
          P.forEach(function (e) {
            J(e) &&
              (e.smooth && (e.target.style.scrollBehavior = "auto"), e(0));
          }),
          At.slice(0).forEach(function (e) {
            return e.refresh();
          }),
          At.forEach(function (e, t) {
            if (e._subPinOffset && e.pin) {
              var i = e.vars.horizontal ? "offsetWidth" : "offsetHeight",
                s = e.pin[i];
              e.revert(!0, 1),
                e.adjustPinSpacing(e.pin[i] - s),
                e.revert(!1, 1);
            }
          }),
          At.forEach(function (e) {
            return (
              "max" === e.vars.end &&
              e.setPositions(
                e.start,
                Math.max(e.start + 1, U(e.scroller, e._dir))
              )
            );
          }),
          i.forEach(function (e) {
            return e && e.render && e.render(-1);
          }),
          P.forEach(function (e) {
            J(e) &&
              (e.smooth &&
                requestAnimationFrame(function () {
                  return (e.target.style.scrollBehavior = "smooth");
                }),
              e.rec && e(e.rec));
          }),
          De(tt, 1),
          Oe.pause(),
          It++,
          Rt(2),
          At.forEach(function (e) {
            return J(e.vars.onRefresh) && e.vars.onRefresh(e);
          }),
          (nt = Vt.isRefreshing = !1),
          Ot("refresh");
      } else ue(Vt, "scrollEnd", ye);
    },
    Nt = 0,
    Bt = 1,
    Rt = function (e) {
      if (!nt || 2 === e) {
        (Vt.isUpdating = !0), at && at.update(0);
        var t = At.length,
          i = lt(),
          s = 50 <= i - ut,
          n = t && At[0].scroll();
        if (
          ((Bt = n < Nt ? -1 : 1),
          (Nt = n),
          s &&
            (ct && !Re && 200 < i - ct && ((ct = 0), Ot("scrollEnd")),
            (ze = ut),
            (ut = i)),
          Bt < 0)
        ) {
          for (We = t; 0 < We--; ) At[We] && At[We].update(0, s);
          Bt = 1;
        } else for (We = 0; We < t; We++) At[We] && At[We].update(0, s);
        Vt.isUpdating = !1;
      }
      st = 0;
    },
    Ht = [
      "left",
      "top",
      ft,
      ht,
      xt + wt,
      xt + vt,
      xt + bt,
      xt + yt,
      "display",
      "flexShrink",
      "float",
      "zIndex",
      "gridColumnStart",
      "gridColumnEnd",
      "gridRowStart",
      "gridRowEnd",
      "gridArea",
      "justifySelf",
      "alignSelf",
      "placeSelf",
      "order",
    ],
    Wt = Ht.concat([
      mt,
      gt,
      "boxSizing",
      "max" + Ct,
      "maxHeight",
      "position",
      xt,
      Dt,
      Dt + bt,
      Dt + vt,
      Dt + wt,
      Dt + yt,
    ]),
    jt = /([A-Z])/g,
    Yt = function (e) {
      if (e) {
        var t,
          i,
          s = e.t.style,
          n = e.length,
          r = 0;
        for ((e.t._gsap || Se.core.getCache(e.t)).uncache = 1; r < n; r += 2)
          (i = e[r + 1]),
            (t = e[r]),
            i
              ? (s[t] = i)
              : s[t] && s.removeProperty(t.replace(jt, "-$1").toLowerCase());
      }
    },
    Xt = { left: 0, top: 0 },
    qt = /(webkit|moz|length|cssText|inset)/i,
    Vt =
      ((Gt.prototype.init = function (e, t) {
        if (
          ((this.progress = this.start = 0), this.vars && this.kill(!0, !0), dt)
        ) {
          var i,
            n,
            r,
            a,
            o,
            l,
            d,
            p,
            h,
            f,
            m,
            g,
            v,
            y,
            b,
            w,
            D,
            x,
            C,
            T,
            E,
            _,
            S,
            M,
            k,
            A,
            $,
            O,
            L,
            I,
            B,
            R,
            H,
            W,
            X,
            q,
            K,
            le,
            de,
            fe = (e = ne(Q(e) || Z(e) || e.nodeType ? { trigger: e } : e, St))
              .onUpdate,
            ge = e.toggleClass,
            be = e.id,
            we = e.onToggle,
            De = e.onRefresh,
            Me = e.scrub,
            $e = e.trigger,
            Oe = e.pin,
            Ne = e.pinSpacing,
            He = e.invalidateOnRefresh,
            je = e.anticipatePin,
            Ye = e.onScrubComplete,
            Xe = e.onSnapComplete,
            Ge = e.once,
            Ue = e.snap,
            Ke = e.pinReparent,
            Qe = e.pinSpacer,
            Je = e.containerAnimation,
            Ze = e.fastScrollEnd,
            tt = e.preventOverlaps,
            st =
              e.horizontal || (e.containerAnimation && !1 !== e.horizontal)
                ? z
                : N,
            ut = !Me && 0 !== Me,
            ht = u(e.scroller || ke),
            ft = Se.core.getCache(ht),
            Mt = V(ht),
            kt =
              "fixed" ===
              ("pinType" in e
                ? e.pinType
                : s(ht, "pinType") || (Mt && "fixed")),
            Ft = [e.onEnter, e.onLeave, e.onEnterBack, e.onLeaveBack],
            $t = ut && e.toggleActions.split(" "),
            Ot = "markers" in e ? e.markers : St.markers,
            Lt = Mt ? 0 : parseFloat(se(ht)["border" + st.p2 + Ct]) || 0,
            Nt = this,
            Rt =
              e.onRefreshInit &&
              function () {
                return e.onRefreshInit(Nt);
              },
            Ht = (function (e, t, i) {
              var n = i.d,
                r = i.d2,
                a = i.a;
              return (a = s(e, "getBoundingClientRect"))
                ? function () {
                    return a()[n];
                  }
                : function () {
                    return (t ? ke["inner" + r] : e["client" + r]) || 0;
                  };
            })(ht, Mt, st),
            Wt = (function (e, t) {
              return !t || ~F.indexOf(e)
                ? G(e)
                : function () {
                    return Xt;
                  };
            })(ht, Mt),
            jt = 0,
            qt = 0,
            Vt = c(ht, st);
          if (
            (et(Nt),
            (Nt._dir = st),
            (je *= 45),
            (Nt.scroller = ht),
            (Nt.scroll = Je ? Je.time.bind(Je) : Vt),
            (a = Vt()),
            (Nt.vars = e),
            (t = t || e.animation),
            "refreshPriority" in e &&
              ((qe = 1), -9999 === e.refreshPriority && (at = Nt)),
            (ft.tweenScroll = ft.tweenScroll || {
              top: _e(ht, N),
              left: _e(ht, z),
            }),
            (Nt.tweenTo = i = ft.tweenScroll[st.p]),
            (Nt.scrubDuration = function (e) {
              (R = Z(e) && e)
                ? B
                  ? B.duration(e)
                  : (B = Se.to(t, {
                      ease: "expo",
                      totalProgress: "+=0.001",
                      duration: R,
                      paused: !0,
                      onComplete: function () {
                        return Ye && Ye(Nt);
                      },
                    }))
                : (B && B.progress(1).kill(), (B = 0));
            }),
            t &&
              ((t.vars.lazy = !1),
              t._initted ||
                (!1 !== t.vars.immediateRender &&
                  !1 !== e.immediateRender &&
                  t.duration() &&
                  t.render(0, !0, !0)),
              (Nt.animation = t.pause()),
              (t.scrollTrigger = Nt).scrubDuration(Me),
              (L = 0),
              (be = be || t.vars.id)),
            At.push(Nt),
            Ue &&
              ((ee(Ue) && !Ue.push) || (Ue = { snapTo: Ue }),
              "scrollBehavior" in Fe.style &&
                Se.set(Mt ? [Fe, Pe] : ht, { scrollBehavior: "auto" }),
              P.forEach(function (e) {
                return (
                  J(e) &&
                  e.target === (Mt ? Ae.scrollingElement || Pe : ht) &&
                  (e.smooth = !1)
                );
              }),
              (r = J(Ue.snapTo)
                ? Ue.snapTo
                : "labels" === Ue.snapTo
                ? (function (e) {
                    return function (t) {
                      return Se.utils.snap(ae(e), t);
                    };
                  })(t)
                : "labelsDirectional" === Ue.snapTo
                ? (function (e) {
                    return function (t, i) {
                      return oe(ae(e))(t, i.direction);
                    };
                  })(t)
                : !1 !== Ue.directional
                ? function (e, t) {
                    return oe(Ue.snapTo)(e, lt() - qt < 500 ? 0 : t.direction);
                  }
                : Se.utils.snap(Ue.snapTo)),
              (H = ee((H = Ue.duration || { min: 0.1, max: 2 }))
                ? Ie(H.min, H.max)
                : Ie(H, H)),
              (W = Se.delayedCall(Ue.delay || R / 2 || 0.1, function () {
                var e = Vt(),
                  s = lt() - qt < 500,
                  n = i.tween;
                if (
                  !(s || Math.abs(Nt.getVelocity()) < 10) ||
                  n ||
                  Re ||
                  jt === e
                )
                  Nt.isActive && jt !== e && W.restart(!0);
                else {
                  var a = (e - l) / v,
                    o = t && !ut ? t.totalProgress() : a,
                    u = s ? 0 : ((o - I) / (lt() - ze)) * 1e3 || 0,
                    c = Se.utils.clamp(-a, 1 - a, (pt(u / 2) * u) / 0.185),
                    p = a + (!1 === Ue.inertia ? 0 : c),
                    h = Ie(0, 1, r(p, Nt)),
                    f = Math.round(l + h * v),
                    m = Ue.onStart,
                    g = Ue.onInterrupt,
                    y = Ue.onComplete;
                  if (e <= d && l <= e && f !== e) {
                    if (n && !n._initted && n.data <= pt(f - e)) return;
                    !1 === Ue.inertia && (c = h - a),
                      i(
                        f,
                        {
                          duration: H(
                            pt(
                              (0.185 * Math.max(pt(p - o), pt(h - o))) /
                                u /
                                0.05 || 0
                            )
                          ),
                          ease: Ue.ease || "power3",
                          data: pt(f - e),
                          onInterrupt: function () {
                            return W.restart(!0) && g && g(Nt);
                          },
                          onComplete: function () {
                            Nt.update(),
                              (jt = Vt()),
                              (L = I =
                                t && !ut ? t.totalProgress() : Nt.progress),
                              Xe && Xe(Nt),
                              y && y(Nt);
                          },
                        },
                        e,
                        c * v,
                        f - e - c * v
                      ),
                      m && m(Nt, i.tween);
                  }
                }
              }).pause())),
            be && (Pt[be] = Nt),
            (de =
              (de =
                ($e = Nt.trigger = u($e || Oe)) &&
                $e._gsap &&
                $e._gsap.stRevert) && de(Nt)),
            (Oe = !0 === Oe ? $e : u(Oe)),
            Q(ge) && (ge = { targets: $e, className: ge }),
            Oe &&
              (!1 === Ne ||
                Ne === xt ||
                (Ne =
                  !(
                    !Ne &&
                    Oe.parentNode &&
                    Oe.parentNode.style &&
                    "flex" === se(Oe.parentNode).display
                  ) && Dt),
              (Nt.pin = Oe),
              (n = Se.core.getCache(Oe)).spacer
                ? (y = n.pinState)
                : (Qe &&
                    ((Qe = u(Qe)) &&
                      !Qe.nodeType &&
                      (Qe = Qe.current || Qe.nativeElement),
                    (n.spacerIsNative = !!Qe),
                    Qe && (n.spacerState = Ce(Qe))),
                  (n.spacer = D = Qe || Ae.createElement("div")),
                  D.classList.add("pin-spacer"),
                  be && D.classList.add("pin-spacer-" + be),
                  (n.pinState = y = Ce(Oe))),
              !1 !== e.force3D && Se.set(Oe, { force3D: !0 }),
              (Nt.spacer = D = n.spacer),
              (O = se(Oe)),
              (S = O[Ne + st.os2]),
              (C = Se.getProperty(Oe)),
              (T = Se.quickSetter(Oe, st.a, Tt)),
              xe(Oe, D, O),
              (w = Ce(Oe))),
            Ot)
          ) {
            (g = ee(Ot) ? ne(Ot, _t) : _t),
              (f = he("scroller-start", be, ht, st, g, 0)),
              (m = he("scroller-end", be, ht, st, g, 0, f)),
              (x = f["offset" + st.op.d2]);
            var Ut = u(s(ht, "content") || ht);
            (p = this.markerStart = he("start", be, Ut, st, g, x, 0, Je)),
              (h = this.markerEnd = he("end", be, Ut, st, g, x, 0, Je)),
              Je && (le = Se.quickSetter([p, h], st.a, Tt)),
              kt ||
                (F.length && !0 === s(ht, "fixedMarkers")) ||
                ((function (e) {
                  var t = se(e).position;
                  e.style.position =
                    "absolute" === t || "fixed" === t ? t : "relative";
                })(Mt ? Fe : ht),
                Se.set([f, m], { force3D: !0 }),
                (k = Se.quickSetter(f, st.a, Tt)),
                ($ = Se.quickSetter(m, st.a, Tt)));
          }
          if (Je) {
            var Kt = Je.vars.onUpdate,
              Qt = Je.vars.onUpdateParams;
            Je.eventCallback("onUpdate", function () {
              Nt.update(0, 0, 1), Kt && Kt.apply(Qt || []);
            });
          }
          (Nt.previous = function () {
            return At[At.indexOf(Nt) - 1];
          }),
            (Nt.next = function () {
              return At[At.indexOf(Nt) + 1];
            }),
            (Nt.revert = function (e, i) {
              if (!i) return Nt.kill(!0);
              var s = !1 !== e || !Nt.enabled,
                n = Be;
              s !== Nt.isReverted &&
                (s &&
                  ((q = Math.max(Vt(), Nt.scroll.rec || 0)),
                  (X = Nt.progress),
                  (K = t && t.progress())),
                p &&
                  [p, h, f, m].forEach(function (e) {
                    return (e.style.display = s ? "none" : "block");
                  }),
                s && ((Be = 1), Nt.update(s)),
                !Oe ||
                  (Ke && Nt.isActive) ||
                  (s
                    ? (function (e, t, i) {
                        Yt(i);
                        var s = e._gsap;
                        if (s.spacerIsNative) Yt(s.spacerState);
                        else if (e._gsap.swappedIn) {
                          var n = t.parentNode;
                          n && (n.insertBefore(e, t), n.removeChild(t));
                        }
                        e._gsap.swappedIn = !1;
                      })(Oe, D, y)
                    : xe(Oe, D, se(Oe), M)),
                s || Nt.update(s),
                (Be = n),
                (Nt.isReverted = s));
            }),
            (Nt.refresh = function (s, n) {
              if ((!Be && Nt.enabled) || n)
                if (Oe && s && ct) ue(Gt, "scrollEnd", ye);
                else {
                  !nt && Rt && Rt(Nt),
                    (Be = 1),
                    (qt = lt()),
                    i.tween && (i.tween.kill(), (i.tween = 0)),
                    B && B.pause(),
                    He && t && t.revert({ kill: !1 }).invalidate(),
                    Nt.isReverted || Nt.revert(!0, !0),
                    (Nt._subPinOffset = !1);
                  for (
                    var r,
                      g,
                      x,
                      T,
                      S,
                      k,
                      P,
                      F,
                      $,
                      O,
                      L,
                      I = Ht(),
                      R = Wt(),
                      H = Je ? Je.duration() : U(ht, st),
                      j = 0,
                      Y = 0,
                      V = e.end,
                      G = e.endTrigger || $e,
                      ee =
                        e.start ||
                        (0 !== e.start && $e ? (Oe ? "0 0" : "0 100%") : 0),
                      te = (Nt.pinnedContainer =
                        e.pinnedContainer && u(e.pinnedContainer)),
                      ie = ($e && Math.max(0, At.indexOf(Nt))) || 0,
                      ne = ie;
                    ne--;

                  )
                    (k = At[ne]).end || k.refresh(0, 1) || (Be = 1),
                      !(P = k.pin) ||
                        (P !== $e && P !== Oe) ||
                        k.isReverted ||
                        ((O = O || []).unshift(k), k.revert(!0, !0)),
                      k !== At[ne] && (ie--, ne--);
                  for (
                    J(ee) && (ee = ee(Nt)),
                      l =
                        Te(ee, $e, I, st, Vt(), p, f, Nt, R, Lt, kt, H, Je) ||
                        (Oe ? -0.001 : 0),
                      J(V) && (V = V(Nt)),
                      Q(V) &&
                        !V.indexOf("+=") &&
                        (~V.indexOf(" ")
                          ? (V = (Q(ee) ? ee.split(" ")[0] : "") + V)
                          : ((j = pe(V.substr(2), I)),
                            (V = Q(ee) ? ee : l + j),
                            (G = $e))),
                      d =
                        Math.max(
                          l,
                          Te(
                            V || (G ? "100% 0" : H),
                            G,
                            I,
                            st,
                            Vt() + j,
                            h,
                            m,
                            Nt,
                            R,
                            Lt,
                            kt,
                            H,
                            Je
                          )
                        ) || -0.001,
                      v = d - l || ((l -= 0.01) && 0.001),
                      j = 0,
                      ne = ie;
                    ne--;

                  )
                    (P = (k = At[ne]).pin) &&
                      k.start - k._pinPush <= l &&
                      !Je &&
                      0 < k.end &&
                      ((r = k.end - k.start),
                      ((P === $e && k.start - k._pinPush < l) || P === te) &&
                        !Z(ee) &&
                        (j += r * (1 - k.progress)),
                      P === Oe && (Y += r));
                  if (
                    ((l += j),
                    (d += j),
                    (Nt._pinPush = Y),
                    p &&
                      j &&
                      (((r = {})[st.a] = "+=" + j),
                      te && (r[st.p] = "-=" + Vt()),
                      Se.set([p, h], r)),
                    Oe)
                  )
                    (r = se(Oe)),
                      (T = st === N),
                      (x = Vt()),
                      (E = parseFloat(C(st.a)) + Y),
                      !H &&
                        1 < d &&
                        ((L = {
                          style: (L = (Mt ? Ae.scrollingElement || Pe : ht)
                            .style),
                          value: L["overflow" + st.a.toUpperCase()],
                        })["overflow" + st.a.toUpperCase()] = "scroll"),
                      xe(Oe, D, r),
                      (w = Ce(Oe)),
                      (g = Et(Oe, !0)),
                      (F = kt && c(ht, T ? z : N)()),
                      Ne &&
                        (((M = [Ne + st.os2, v + Y + Tt]).t = D),
                        (ne = Ne === Dt ? re(Oe, st) + v + Y : 0) &&
                          M.push(st.d, ne + Tt),
                        Yt(M),
                        te &&
                          At.forEach(function (e) {
                            e.pin === te &&
                              !1 !== e.vars.pinSpacing &&
                              (e._subPinOffset = !0);
                          }),
                        kt && Vt(q)),
                      kt &&
                        (((S = {
                          top: g.top + (T ? x - l : F) + Tt,
                          left: g.left + (T ? F : x - l) + Tt,
                          boxSizing: "border-box",
                          position: "fixed",
                        })[mt] = S.maxWidth =
                          Math.ceil(g.width) + Tt),
                        (S[gt] = S.maxHeight = Math.ceil(g.height) + Tt),
                        (S[xt] =
                          S[xt + bt] =
                          S[xt + vt] =
                          S[xt + wt] =
                          S[xt + yt] =
                            "0"),
                        (S[Dt] = r[Dt]),
                        (S[Dt + bt] = r[Dt + bt]),
                        (S[Dt + vt] = r[Dt + vt]),
                        (S[Dt + wt] = r[Dt + wt]),
                        (S[Dt + yt] = r[Dt + yt]),
                        (b = (function (e, t, i) {
                          for (
                            var s, n = [], r = e.length, a = i ? 8 : 0;
                            a < r;
                            a += 2
                          )
                            (s = e[a]), n.push(s, s in t ? t[s] : e[a + 1]);
                          return (n.t = e.t), n;
                        })(y, S, Ke)),
                        nt && Vt(0)),
                      t
                        ? (($ = t._initted),
                          Ve(1),
                          t.render(t.duration(), !0, !0),
                          (_ = C(st.a) - E + v + Y),
                          (A = 1 < Math.abs(v - _)),
                          kt && A && b.splice(b.length - 2, 2),
                          t.render(0, !0, !0),
                          $ || t.invalidate(!0),
                          t.parent || t.totalTime(t.totalTime()),
                          Ve(0))
                        : (_ = v),
                      L &&
                        (L.value
                          ? (L.style["overflow" + st.a.toUpperCase()] = L.value)
                          : L.style.removeProperty("overflow-" + st.a));
                  else if ($e && Vt() && !Je)
                    for (g = $e.parentNode; g && g !== Fe; )
                      g._pinOffset &&
                        ((l -= g._pinOffset), (d -= g._pinOffset)),
                        (g = g.parentNode);
                  O &&
                    O.forEach(function (e) {
                      return e.revert(!1, !0);
                    }),
                    (Nt.start = l),
                    (Nt.end = d),
                    (a = o = nt ? q : Vt()),
                    Je || nt || (a < q && Vt(q), (Nt.scroll.rec = 0)),
                    Nt.revert(!1, !0),
                    W &&
                      ((jt = -1), Nt.isActive && Vt(l + v * X), W.restart(!0)),
                    (Be = 0),
                    t &&
                      ut &&
                      (t._initted || K) &&
                      t.progress() !== K &&
                      t.progress(K, !0).render(t.time(), !0, !0),
                    (X === Nt.progress && !Je) ||
                      (t && !ut && t.totalProgress(X, !0),
                      (Nt.progress = (a - l) / v === X ? 0 : X)),
                    Oe && Ne && (D._pinOffset = Math.round(Nt.progress * _)),
                    De && !nt && De(Nt);
                }
            }),
            (Nt.getVelocity = function () {
              return ((Vt() - o) / (lt() - ze)) * 1e3 || 0;
            }),
            (Nt.endAnimation = function () {
              te(Nt.callbackAnimation),
                t &&
                  (B
                    ? B.progress(1)
                    : t.paused()
                    ? ut || te(t, Nt.direction < 0, 1)
                    : te(t, t.reversed()));
            }),
            (Nt.labelToScroll = function (e) {
              return (
                (t &&
                  t.labels &&
                  (l || Nt.refresh() || l) +
                    (t.labels[e] / t.duration()) * v) ||
                0
              );
            }),
            (Nt.getTrailing = function (e) {
              var t = At.indexOf(Nt),
                i =
                  0 < Nt.direction ? At.slice(0, t).reverse() : At.slice(t + 1);
              return (
                Q(e)
                  ? i.filter(function (t) {
                      return t.vars.preventOverlaps === e;
                    })
                  : i
              ).filter(function (e) {
                return 0 < Nt.direction ? e.end <= l : e.start >= d;
              });
            }),
            (Nt.update = function (e, s, n) {
              if (!Je || n || e) {
                var r,
                  u,
                  c,
                  p,
                  h,
                  m,
                  g,
                  y = nt ? q : Nt.scroll(),
                  x = e ? 0 : (y - l) / v,
                  C = x < 0 ? 0 : 1 < x ? 1 : x || 0,
                  M = Nt.progress;
                if (
                  (s &&
                    ((o = a),
                    (a = Je ? Vt() : y),
                    Ue && ((I = L), (L = t && !ut ? t.totalProgress() : C))),
                  je &&
                    !C &&
                    Oe &&
                    !Be &&
                    !ot &&
                    ct &&
                    l < y + ((y - o) / (lt() - ze)) * je &&
                    (C = 1e-4),
                  C !== M && Nt.enabled)
                ) {
                  if (
                    ((p =
                      (h =
                        (r = Nt.isActive = !!C && C < 1) != (!!M && M < 1)) ||
                      !!C != !!M),
                    (Nt.direction = M < C ? 1 : -1),
                    (Nt.progress = C),
                    p &&
                      !Be &&
                      ((u = C && !M ? 0 : 1 === C ? 1 : 1 === M ? 2 : 3),
                      ut &&
                        ((c =
                          (!h && "none" !== $t[u + 1] && $t[u + 1]) || $t[u]),
                        (g =
                          t && ("complete" === c || "reset" === c || c in t)))),
                    tt &&
                      (h || g) &&
                      (g || Me || !t) &&
                      (J(tt)
                        ? tt(Nt)
                        : Nt.getTrailing(tt).forEach(function (e) {
                            return e.endAnimation();
                          })),
                    ut ||
                      (!B || Be || ot
                        ? t && t.totalProgress(C, !!Be)
                        : (B._dp._time - B._start !== B._time &&
                            B.render(B._dp._time - B._start),
                          B.resetTo
                            ? B.resetTo("totalProgress", C, t._tTime / t._tDur)
                            : ((B.vars.totalProgress = C),
                              B.invalidate().restart()))),
                    Oe)
                  )
                    if ((e && Ne && (D.style[Ne + st.os2] = S), kt)) {
                      if (p) {
                        if (
                          ((m = !e && M < C && y < d + 1 && y + 1 >= U(ht, st)),
                          Ke)
                        )
                          if (e || (!r && !m)) Ee(Oe, D);
                          else {
                            var P = Et(Oe, !0),
                              F = y - l;
                            Ee(
                              Oe,
                              Fe,
                              P.top + (st === N ? F : 0) + Tt,
                              P.left + (st === N ? 0 : F) + Tt
                            );
                          }
                        Yt(r || m ? b : w),
                          (A && C < 1 && r) || T(E + (1 !== C || m ? 0 : _));
                      }
                    } else T(Y(E + _ * C));
                  !Ue || i.tween || Be || ot || W.restart(!0),
                    ge &&
                      (h || (Ge && C && (C < 1 || !it))) &&
                      Le(ge.targets).forEach(function (e) {
                        return e.classList[r || Ge ? "add" : "remove"](
                          ge.className
                        );
                      }),
                    !fe || ut || e || fe(Nt),
                    p && !Be
                      ? (ut &&
                          (g &&
                            ("complete" === c
                              ? t.pause().totalProgress(1)
                              : "reset" === c
                              ? t.restart(!0).pause()
                              : "restart" === c
                              ? t.restart(!0)
                              : t[c]()),
                          fe && fe(Nt)),
                        (!h && it) ||
                          (we && h && ie(Nt, we),
                          Ft[u] && ie(Nt, Ft[u]),
                          Ge && (1 === C ? Nt.kill(!1, 1) : (Ft[u] = 0)),
                          h || (Ft[(u = 1 === C ? 1 : 3)] && ie(Nt, Ft[u]))),
                        Ze &&
                          !r &&
                          Math.abs(Nt.getVelocity()) > (Z(Ze) ? Ze : 2500) &&
                          (te(Nt.callbackAnimation),
                          B
                            ? B.progress(1)
                            : te(t, "reverse" === c ? 1 : !C, 1)))
                      : ut && fe && !Be && fe(Nt);
                }
                if ($) {
                  var O = Je
                    ? (y / Je.duration()) * (Je._caScrollDist || 0)
                    : y;
                  k(O + (f._isFlipped ? 1 : 0)), $(O);
                }
                le && le((-y / Je.duration()) * (Je._caScrollDist || 0));
              }
            }),
            (Nt.enable = function (e, t) {
              Nt.enabled ||
                ((Nt.enabled = !0),
                ue(ht, "resize", ve),
                ue(Mt ? Ae : ht, "scroll", me),
                Rt && ue(Gt, "refreshInit", Rt),
                !1 !== e && ((Nt.progress = X = 0), (a = o = jt = Vt())),
                !1 !== t && Nt.refresh());
            }),
            (Nt.getTween = function (e) {
              return e && i ? i.tween : B;
            }),
            (Nt.setPositions = function (e, t) {
              Oe &&
                ((E += e - l),
                (_ += t - e - v),
                Ne === Dt && Nt.adjustPinSpacing(t - e - v)),
                (Nt.start = l = e),
                (Nt.end = d = t),
                (v = t - e),
                Nt.update();
            }),
            (Nt.adjustPinSpacing = function (e) {
              if (M) {
                var t = M.indexOf(st.d) + 1;
                (M[t] = parseFloat(M[t]) + e + Tt),
                  (M[1] = parseFloat(M[1]) + e + Tt),
                  Yt(M);
              }
            }),
            (Nt.disable = function (e, t) {
              if (
                Nt.enabled &&
                (!1 !== e && Nt.revert(!0, !0),
                (Nt.enabled = Nt.isActive = !1),
                t || (B && B.pause()),
                (q = 0),
                n && (n.uncache = 1),
                Rt && ce(Gt, "refreshInit", Rt),
                W && (W.pause(), i.tween && i.tween.kill() && (i.tween = 0)),
                !Mt)
              ) {
                for (var s = At.length; s--; )
                  if (At[s].scroller === ht && At[s] !== Nt) return;
                ce(ht, "resize", ve), ce(ht, "scroll", me);
              }
            }),
            (Nt.kill = function (i, s) {
              Nt.disable(i, s), B && !s && B.kill(), be && delete Pt[be];
              var r = At.indexOf(Nt);
              0 <= r && At.splice(r, 1),
                r === We && 0 < Bt && We--,
                (r = 0),
                At.forEach(function (e) {
                  return e.scroller === Nt.scroller && (r = 1);
                }),
                r || nt || (Nt.scroll.rec = 0),
                t &&
                  ((t.scrollTrigger = null),
                  i && t.revert({ kill: !1 }),
                  s || t.kill()),
                p &&
                  [p, h, f, m].forEach(function (e) {
                    return e.parentNode && e.parentNode.removeChild(e);
                  }),
                at === Nt && (at = 0),
                Oe &&
                  (n && (n.uncache = 1),
                  (r = 0),
                  At.forEach(function (e) {
                    return e.pin === Oe && r++;
                  }),
                  r || (n.spacer = 0)),
                e.onKill && e.onKill(Nt);
            }),
            Nt.enable(!1, !1),
            de && de(Nt),
            t && t.add && !v
              ? Se.delayedCall(0.01, function () {
                  return l || d || Nt.refresh();
                }) &&
                (v = 0.01) &&
                (l = d = 0)
              : Nt.refresh(),
            Oe &&
              (function () {
                if (rt !== It) {
                  var e = (rt = It);
                  requestAnimationFrame(function () {
                    return e === It && zt(!0);
                  });
                }
              })();
        } else this.update = this.refresh = this.kill = j;
      }),
      (Gt.register = function (e) {
        return (
          Me ||
            ((Se = e || q()), X() && window.document && Gt.enable(), (Me = dt)),
          Me
        );
      }),
      (Gt.defaults = function (e) {
        if (e) for (var t in e) St[t] = e[t];
        return St;
      }),
      (Gt.disable = function (e, t) {
        (dt = 0),
          At.forEach(function (i) {
            return i[t ? "kill" : "disable"](e);
          }),
          ce(ke, "wheel", me),
          ce(Ae, "scroll", me),
          clearInterval(Ne),
          ce(Ae, "touchcancel", j),
          ce(Fe, "touchstart", j),
          le(ce, Ae, "pointerdown,touchstart,mousedown", H),
          le(ce, Ae, "pointerup,touchend,mouseup", W),
          Oe.kill(),
          K(ce);
        for (var i = 0; i < P.length; i += 3)
          de(ce, P[i], P[i + 1]), de(ce, P[i], P[i + 2]);
      }),
      (Gt.enable = function () {
        if (
          ((ke = window),
          (Ae = document),
          (Pe = Ae.documentElement),
          (Fe = Ae.body),
          Se &&
            ((Le = Se.utils.toArray),
            (Ie = Se.utils.clamp),
            (et = Se.core.context || j),
            (Ve = Se.core.suppressOverwrites || j),
            (tt = ke.history.scrollRestoration || "auto"),
            Se.core.globals("ScrollTrigger", Gt),
            Fe))
        ) {
          (dt = 1),
            B.register(Se),
            (Gt.isTouch = B.isTouch),
            (Ze =
              B.isTouch && /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent)),
            ue(ke, "wheel", me),
            ($e = [ke, Ae, Pe, Fe]),
            Se.matchMedia
              ? ((Gt.matchMedia = function (e) {
                  var t,
                    i = Se.matchMedia();
                  for (t in e) i.add(t, e[t]);
                  return i;
                }),
                Se.addEventListener("matchMediaInit", function () {
                  return we();
                }),
                Se.addEventListener("matchMediaRevert", function () {
                  return be();
                }),
                Se.addEventListener("matchMedia", function () {
                  zt(0, 1), Ot("matchMedia");
                }),
                Se.matchMedia("(orientation: portrait)", function () {
                  return ge(), ge;
                }))
              : console.warn("Requires GSAP 3.11.0 or later"),
            ge(),
            ue(Ae, "scroll", me);
          var e,
            t,
            i = Fe.style,
            s = i.borderTopStyle,
            n = Se.core.Animation.prototype;
          for (
            n.revert ||
              Object.defineProperty(n, "revert", {
                value: function () {
                  return this.time(-0.01, !0);
                },
              }),
              i.borderTopStyle = "solid",
              e = Et(Fe),
              N.m = Math.round(e.top + N.sc()) || 0,
              z.m = Math.round(e.left + z.sc()) || 0,
              s ? (i.borderTopStyle = s) : i.removeProperty("border-top-style"),
              Ne = setInterval(fe, 250),
              Se.delayedCall(0.5, function () {
                return (ot = 0);
              }),
              ue(Ae, "touchcancel", j),
              ue(Fe, "touchstart", j),
              le(ue, Ae, "pointerdown,touchstart,mousedown", H),
              le(ue, Ae, "pointerup,touchend,mouseup", W),
              He = Se.utils.checkPrefix("transform"),
              Wt.push(He),
              Me = lt(),
              Oe = Se.delayedCall(0.2, zt).pause(),
              Xe = [
                Ae,
                "visibilitychange",
                function () {
                  var e = ke.innerWidth,
                    t = ke.innerHeight;
                  Ae.hidden
                    ? ((je = e), (Ye = t))
                    : (je === e && Ye === t) || ve();
                },
                Ae,
                "DOMContentLoaded",
                zt,
                ke,
                "load",
                zt,
                ke,
                "resize",
                ve,
              ],
              K(ue),
              At.forEach(function (e) {
                return e.enable(0, 1);
              }),
              t = 0;
            t < P.length;
            t += 3
          )
            de(ce, P[t], P[t + 1]), de(ce, P[t], P[t + 2]);
        }
      }),
      (Gt.config = function (e) {
        "limitCallbacks" in e && (it = !!e.limitCallbacks);
        var t = e.syncInterval;
        (t && clearInterval(Ne)) || ((Ne = t) && setInterval(fe, t)),
          "ignoreMobileResize" in e &&
            (Ke = 1 === Gt.isTouch && e.ignoreMobileResize),
          "autoRefreshEvents" in e &&
            (K(ce) || K(ue, e.autoRefreshEvents || "none"),
            (Ge = -1 === (e.autoRefreshEvents + "").indexOf("resize")));
      }),
      (Gt.scrollerProxy = function (e, t) {
        var i = u(e),
          s = P.indexOf(i),
          n = V(i);
        ~s && P.splice(s, n ? 6 : 2),
          t && (n ? F.unshift(ke, t, Fe, t, Pe, t) : F.unshift(i, t));
      }),
      (Gt.clearMatchMedia = function (e) {
        At.forEach(function (t) {
          return t._ctx && t._ctx.query === e && t._ctx.kill(!0, !0);
        });
      }),
      (Gt.isInViewport = function (e, t, i) {
        var s = (Q(e) ? u(e) : e).getBoundingClientRect(),
          n = s[i ? mt : gt] * t || 0;
        return i
          ? 0 < s.right - n && s.left + n < ke.innerWidth
          : 0 < s.bottom - n && s.top + n < ke.innerHeight;
      }),
      (Gt.positionInViewport = function (e, t, i) {
        Q(e) && (e = u(e));
        var s = e.getBoundingClientRect(),
          n = s[i ? mt : gt],
          r =
            null == t
              ? n / 2
              : t in Mt
              ? Mt[t] * n
              : ~t.indexOf("%")
              ? (parseFloat(t) * n) / 100
              : parseFloat(t) || 0;
        return i ? (s.left + r) / ke.innerWidth : (s.top + r) / ke.innerHeight;
      }),
      (Gt.killAll = function (e) {
        if (
          (At.slice(0).forEach(function (e) {
            return "ScrollSmoother" !== e.vars.id && e.kill();
          }),
          !0 !== e)
        ) {
          var t = Ft.killAll || [];
          (Ft = {}),
            t.forEach(function (e) {
              return e();
            });
        }
      }),
      Gt);
  function Gt(e, t) {
    Me ||
      Gt.register(Se) ||
      console.warn("Please gsap.registerPlugin(ScrollTrigger)"),
      this.init(e, t);
  }
  function Ut(e, t, i, s) {
    return (
      s < t ? e(s) : t < 0 && e(0),
      s < i ? (s - t) / (i - t) : i < 0 ? t / (t - i) : 1
    );
  }
  function Kt(e, t) {
    !0 === t
      ? e.style.removeProperty("touch-action")
      : (e.style.touchAction =
          !0 === t
            ? "auto"
            : t
            ? "pan-" + t + (B.isTouch ? " pinch-zoom" : "")
            : "none"),
      e === Pe && Kt(Fe, t);
  }
  function Qt(e) {
    var t,
      i = e.event,
      s = e.target,
      n = e.axis,
      r = (i.changedTouches ? i.changedTouches[0] : i).target,
      a = r._gsap || Se.core.getCache(r),
      o = lt();
    if (!a._isScrollT || 2e3 < o - a._isScrollT) {
      for (
        ;
        r &&
        r !== Fe &&
        ((r.scrollHeight <= r.clientHeight && r.scrollWidth <= r.clientWidth) ||
          (!ei[(t = se(r)).overflowY] && !ei[t.overflowX]));

      )
        r = r.parentNode;
      (a._isScroll =
        r &&
        r !== s &&
        !V(r) &&
        (ei[(t = se(r)).overflowY] || ei[t.overflowX])),
        (a._isScrollT = o);
    }
    (!a._isScroll && "x" !== n) || (i.stopPropagation(), (i._gsapAllow = !0));
  }
  function Jt(e, t, i, s) {
    return B.create({
      target: e,
      capture: !0,
      debounce: !1,
      lockAxis: !0,
      type: t,
      onWheel: (s = s && Qt),
      onPress: s,
      onDrag: s,
      onScroll: s,
      onEnable: function () {
        return i && ue(Ae, B.eventTypes[0], ii, !1, !0);
      },
      onDisable: function () {
        return ce(Ae, B.eventTypes[0], ii, !0);
      },
    });
  }
  (Vt.version = "3.11.4"),
    (Vt.saveStyles = function (e) {
      return e
        ? Le(e).forEach(function (e) {
            if (e && e.style) {
              var t = Lt.indexOf(e);
              0 <= t && Lt.splice(t, 5),
                Lt.push(
                  e,
                  e.style.cssText,
                  e.getBBox && e.getAttribute("transform"),
                  Se.core.getCache(e),
                  et()
                );
            }
          })
        : Lt;
    }),
    (Vt.revert = function (e, t) {
      return we(!e, t);
    }),
    (Vt.create = function (e, t) {
      return new Vt(e, t);
    }),
    (Vt.refresh = function (e) {
      return e ? ve() : (Me || Vt.register()) && zt(!0);
    }),
    (Vt.update = function (e) {
      return ++P.cache && Rt(!0 === e ? 2 : 0);
    }),
    (Vt.clearScrollMemory = De),
    (Vt.maxScroll = function (e, t) {
      return U(e, t ? z : N);
    }),
    (Vt.getScrollFunc = function (e, t) {
      return c(u(e), t ? z : N);
    }),
    (Vt.getById = function (e) {
      return Pt[e];
    }),
    (Vt.getAll = function () {
      return At.filter(function (e) {
        return "ScrollSmoother" !== e.vars.id;
      });
    }),
    (Vt.isScrolling = function () {
      return !!ct;
    }),
    (Vt.snapDirectional = oe),
    (Vt.addEventListener = function (e, t) {
      var i = Ft[e] || (Ft[e] = []);
      ~i.indexOf(t) || i.push(t);
    }),
    (Vt.removeEventListener = function (e, t) {
      var i = Ft[e],
        s = i && i.indexOf(t);
      0 <= s && i.splice(s, 1);
    }),
    (Vt.batch = function (e, t) {
      function i(e, t) {
        var i = [],
          s = [],
          n = Se.delayedCall(a, function () {
            t(i, s), (i = []), (s = []);
          }).pause();
        return function (e) {
          i.length || n.restart(!0),
            i.push(e.trigger),
            s.push(e),
            o <= i.length && n.progress(1);
        };
      }
      var s,
        n = [],
        r = {},
        a = t.interval || 0.016,
        o = t.batchMax || 1e9;
      for (s in t)
        r[s] =
          "on" === s.substr(0, 2) && J(t[s]) && "onRefreshInit" !== s
            ? i(0, t[s])
            : t[s];
      return (
        J(o) &&
          ((o = o()),
          ue(Vt, "refresh", function () {
            return (o = t.batchMax());
          })),
        Le(e).forEach(function (e) {
          var t = {};
          for (s in r) t[s] = r[s];
          (t.trigger = e), n.push(Vt.create(t));
        }),
        n
      );
    });
  var Zt,
    ei = { auto: 1, scroll: 1 },
    ti = /(input|label|select|textarea)/i,
    ii = function (e) {
      var t = ti.test(e.target.tagName);
      (t || Zt) && ((e._gsapAllow = !0), (Zt = t));
    };
  (Vt.sort = function (e) {
    return At.sort(
      e ||
        function (e, t) {
          return (
            -1e6 * (e.vars.refreshPriority || 0) +
            e.start -
            (t.start + -1e6 * (t.vars.refreshPriority || 0))
          );
        }
    );
  }),
    (Vt.observe = function (e) {
      return new B(e);
    }),
    (Vt.normalizeScroll = function (e) {
      if (void 0 === e) return Ue;
      if (!0 === e && Ue) return Ue.enable();
      if (!1 === e) return Ue && Ue.kill();
      var t =
        e instanceof B
          ? e
          : (function (e) {
              function t() {
                return (l = !1);
              }
              function i() {
                (a = U(y, N)),
                  (A = Ie(Ze ? 1 : 0, a)),
                  m && (k = Ie(0, U(y, z))),
                  (o = It);
              }
              function s() {
                (D._gsap.y = Y(parseFloat(D._gsap.y) + x.offset) + "px"),
                  (D.style.transform =
                    "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
                    parseFloat(D._gsap.y) +
                    ", 0, 1)"),
                  (x.offset = x.cacheID = 0);
              }
              function n() {
                i(),
                  d.isActive() &&
                    d.vars.scrollY > a &&
                    (x() > a ? d.progress(1) && x(a) : d.resetTo("scrollY", a));
              }
              ee(e) || (e = {}),
                (e.preventDefault = e.isNormalizer = e.allowClicks = !0),
                e.type || (e.type = "wheel,touch"),
                (e.debounce = !!e.debounce),
                (e.id = e.id || "normalizer");
              var r,
                a,
                o,
                l,
                d,
                p,
                h,
                f,
                m = e.normalizeScrollX,
                g = e.momentum,
                v = e.allowNestedScroll,
                y = u(e.target) || Pe,
                b = Se.core.globals().ScrollSmoother,
                w = b && b.get(),
                D =
                  Ze &&
                  ((e.content && u(e.content)) ||
                    (w && !1 !== e.content && !w.smooth() && w.content())),
                x = c(y, N),
                C = c(y, z),
                T = 1,
                E =
                  (B.isTouch && ke.visualViewport
                    ? ke.visualViewport.scale * ke.visualViewport.width
                    : ke.outerWidth) / ke.innerWidth,
                _ = 0,
                S = J(g)
                  ? function () {
                      return g(r);
                    }
                  : function () {
                      return g || 2.8;
                    },
                M = Jt(y, e.type, !0, v),
                k = j,
                A = j;
              return (
                D && Se.set(D, { y: "+=0" }),
                (e.ignoreCheck = function (e) {
                  return (
                    (Ze &&
                      "touchmove" === e.type &&
                      (function () {
                        if (l) {
                          requestAnimationFrame(t);
                          var e = Y(r.deltaY / 2),
                            i = A(x.v - e);
                          if (D && i !== x.v + x.offset) {
                            x.offset = i - x.v;
                            var n = Y(
                              (parseFloat(D && D._gsap.y) || 0) - x.offset
                            );
                            (D.style.transform =
                              "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
                              n +
                              ", 0, 1)"),
                              (D._gsap.y = n + "px"),
                              (x.cacheID = P.cache),
                              Rt();
                          }
                          return !0;
                        }
                        x.offset && s(), (l = !0);
                      })()) ||
                    (1.05 < T && "touchstart" !== e.type) ||
                    r.isGesturing ||
                    (e.touches && 1 < e.touches.length)
                  );
                }),
                (e.onPress = function () {
                  var e = T;
                  (T = Y(
                    ((ke.visualViewport && ke.visualViewport.scale) || 1) / E
                  )),
                    d.pause(),
                    e !== T && Kt(y, 1.01 < T || (!m && "x")),
                    (p = C()),
                    (h = x()),
                    i(),
                    (o = It);
                }),
                (e.onRelease = e.onGestureStart =
                  function (e, t) {
                    if ((x.offset && s(), t)) {
                      P.cache++;
                      var i,
                        r,
                        o = S();
                      m &&
                        ((r = (i = C()) + (0.05 * o * -e.velocityX) / 0.227),
                        (o *= Ut(C, i, r, U(y, z))),
                        (d.vars.scrollX = k(r))),
                        (r = (i = x()) + (0.05 * o * -e.velocityY) / 0.227),
                        (o *= Ut(x, i, r, U(y, N))),
                        (d.vars.scrollY = A(r)),
                        d.invalidate().duration(o).play(0.01),
                        ((Ze && d.vars.scrollY >= a) || a - 1 <= i) &&
                          Se.to({}, { onUpdate: n, duration: o });
                    } else f.restart(!0);
                  }),
                (e.onWheel = function () {
                  d._ts && d.pause(), 1e3 < lt() - _ && ((o = 0), (_ = lt()));
                }),
                (e.onChange = function (e, t, n, r, a) {
                  if (
                    (It !== o && i(),
                    t &&
                      m &&
                      C(k(r[2] === t ? p + (e.startX - e.x) : C() + t - r[1])),
                    n)
                  ) {
                    x.offset && s();
                    var l = a[2] === n,
                      u = l ? h + e.startY - e.y : x() + n - a[1],
                      c = A(u);
                    l && u !== c && (h += c - u), x(c);
                  }
                  (n || t) && Rt();
                }),
                (e.onEnable = function () {
                  Kt(y, !m && "x"),
                    Vt.addEventListener("refresh", n),
                    ue(ke, "resize", n),
                    x.smooth &&
                      ((x.target.style.scrollBehavior = "auto"),
                      (x.smooth = C.smooth = !1)),
                    M.enable();
                }),
                (e.onDisable = function () {
                  Kt(y, !0),
                    ce(ke, "resize", n),
                    Vt.removeEventListener("refresh", n),
                    M.kill();
                }),
                (e.lockAxis = !1 !== e.lockAxis),
                ((r = new B(e)).iOS = Ze) && !x() && x(1),
                Ze && Se.ticker.add(j),
                (f = r._dc),
                (d = Se.to(r, {
                  ease: "power4",
                  paused: !0,
                  scrollX: m ? "+=0.1" : "+=0",
                  scrollY: "+=0.1",
                  onComplete: f.vars.onComplete,
                })),
                r
              );
            })(e);
      return (
        Ue && Ue.target === t.target && Ue.kill(), V(t.target) && (Ue = t), t
      );
    }),
    (Vt.core = {
      _getVelocityProp: d,
      _inputObserver: Jt,
      _scrollers: P,
      _proxies: F,
      bridge: {
        ss: function () {
          ct || Ot("scrollStart"), (ct = lt());
        },
        ref: function () {
          return Be;
        },
      },
    }),
    q() && Se.registerPlugin(Vt),
    (e.ScrollTrigger = Vt),
    (e.default = Vt),
    "undefined" == typeof window || window !== e
      ? Object.defineProperty(e, "__esModule", { value: !0 })
      : delete e.default;
}),
  (function (e, t) {
    "object" == typeof exports && "undefined" != typeof module
      ? t(exports)
      : "function" == typeof define && define.amd
      ? define(["exports"], t)
      : t(((e = e || self).window = e.window || {}));
  })(this, function (e) {
    "use strict";
    var t =
      /([\uD800-\uDBFF][\uDC00-\uDFFF](?:[\u200D\uFE0F][\uD800-\uDBFF][\uDC00-\uDFFF]){2,}|\uD83D\uDC69(?:\u200D(?:(?:\uD83D\uDC69\u200D)?\uD83D\uDC67|(?:\uD83D\uDC69\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]\uFE0F|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC6F\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3C-\uDD3E\uDDD6-\uDDDF])\u200D[\u2640\u2642]\uFE0F|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDF4\uD83C\uDDF2|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uFE0F\u200D[\u2640\u2642]|(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642])\uFE0F|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\uD83D\uDC69\u200D[\u2695\u2696\u2708]|\uD83D\uDC68(?:(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708]))\uFE0F|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83D\uDC69\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69]))|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|[#\*0-9]\uFE0F\u20E3|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67)\uDB40\uDC7F|\uD83D\uDC68(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]))|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270A-\u270D]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC70\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDCAA\uDD74\uDD7A\uDD90\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD36\uDDD1-\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\u200D(?:(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC69\uDC6E\uDC70-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD26\uDD30-\uDD39\uDD3D\uDD3E\uDDD1-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])?|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDEEB\uDEEC\uDEF4-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267B\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])\uFE0F)/;
    function i(e) {
      (m = document),
        (g = window),
        (y =
          y ||
          e ||
          g.gsap ||
          console.warn("Please gsap.registerPlugin(SplitText)")) &&
          ((w = y.utils.toArray),
          (b = y.core.context || function () {}),
          (v = 1));
    }
    function s(e) {
      return g.getComputedStyle(e);
    }
    function n(e) {
      return "absolute" === e.position || !0 === e.absolute;
    }
    function r(e, t) {
      for (var i, s = t.length; -1 < --s; )
        if (((i = t[s]), e.substr(0, i.length) === i)) return i.length;
    }
    function a(e, t) {
      void 0 === e && (e = "");
      var i = ~e.indexOf("++"),
        s = 1;
      return (
        i && (e = e.split("++").join("")),
        function () {
          return (
            "<" +
            t +
            " style='position:relative;display:inline-block;'" +
            (e ? " class='" + e + (i ? s++ : "") + "'>" : ">")
          );
        }
      );
    }
    function o(e, t, i) {
      var s = e.nodeType;
      if (1 === s || 9 === s || 11 === s)
        for (e = e.firstChild; e; e = e.nextSibling) o(e, t, i);
      else (3 !== s && 4 !== s) || (e.nodeValue = e.nodeValue.split(t).join(i));
    }
    function l(e, t) {
      for (var i = t.length; -1 < --i; ) e.push(t[i]);
    }
    function u(e, t, i) {
      for (var s; e && e !== t; ) {
        if ((s = e._next || e.nextSibling))
          return s.textContent.charAt(0) === i;
        e = e.parentNode || e._parent;
      }
    }
    function c(e) {
      var t,
        i,
        s = w(e.childNodes),
        n = s.length;
      for (t = 0; t < n; t++)
        (i = s[t])._isSplit
          ? c(i)
          : t && i.previousSibling && 3 === i.previousSibling.nodeType
          ? ((i.previousSibling.nodeValue +=
              3 === i.nodeType ? i.nodeValue : i.firstChild.nodeValue),
            e.removeChild(i))
          : 3 !== i.nodeType &&
            (e.insertBefore(i.firstChild, i), e.removeChild(i));
    }
    function d(e, t) {
      return parseFloat(t[e]) || 0;
    }
    function p(e, t, i, r, a, p, h) {
      var f,
        g,
        v,
        y,
        b,
        w,
        D,
        x,
        C,
        T,
        E,
        _,
        S = s(e),
        M = d("paddingLeft", S),
        k = -999,
        A = d("borderBottomWidth", S) + d("borderTopWidth", S),
        P = d("borderLeftWidth", S) + d("borderRightWidth", S),
        F = d("paddingTop", S) + d("paddingBottom", S),
        $ = d("paddingLeft", S) + d("paddingRight", S),
        O = d("fontSize", S) * (t.lineThreshold || 0.2),
        L = S.textAlign,
        I = [],
        z = [],
        N = [],
        B = t.wordDelimiter || " ",
        R = t.tag ? t.tag : t.span ? "span" : "div",
        H = t.type || t.split || "chars,words,lines",
        W = a && ~H.indexOf("lines") ? [] : null,
        j = ~H.indexOf("words"),
        Y = ~H.indexOf("chars"),
        X = n(t),
        q = t.linesClass,
        V = ~(q || "").indexOf("++"),
        G = [],
        U = "flex" === S.display,
        K = e.style.display;
      for (
        V && (q = q.split("++").join("")),
          U && (e.style.display = "block"),
          v = (g = e.getElementsByTagName("*")).length,
          b = [],
          f = 0;
        f < v;
        f++
      )
        b[f] = g[f];
      if (W || X)
        for (f = 0; f < v; f++)
          ((w = (y = b[f]).parentNode === e) || X || (Y && !j)) &&
            ((_ = y.offsetTop),
            W &&
              w &&
              Math.abs(_ - k) > O &&
              ("BR" !== y.nodeName || 0 === f) &&
              ((D = []), W.push(D), (k = _)),
            X &&
              ((y._x = y.offsetLeft),
              (y._y = _),
              (y._w = y.offsetWidth),
              (y._h = y.offsetHeight)),
            W &&
              (((y._isSplit && w) ||
                (!Y && w) ||
                (j && w) ||
                (!j &&
                  y.parentNode.parentNode === e &&
                  !y.parentNode._isSplit)) &&
                (D.push(y), (y._x -= M), u(y, e, B) && (y._wordEnd = !0)),
              "BR" === y.nodeName &&
                ((y.nextSibling && "BR" === y.nextSibling.nodeName) ||
                  0 === f) &&
                W.push([])));
      for (f = 0; f < v; f++)
        if (((w = (y = b[f]).parentNode === e), "BR" !== y.nodeName))
          if (
            (X &&
              ((C = y.style),
              j || w || ((y._x += y.parentNode._x), (y._y += y.parentNode._y)),
              (C.left = y._x + "px"),
              (C.top = y._y + "px"),
              (C.position = "absolute"),
              (C.display = "block"),
              (C.width = y._w + 1 + "px"),
              (C.height = y._h + "px")),
            !j && Y)
          )
            if (y._isSplit)
              for (
                y._next = g = y.nextSibling, y.parentNode.appendChild(y);
                g && 3 === g.nodeType && " " === g.textContent;

              )
                (y._next = g.nextSibling),
                  y.parentNode.appendChild(g),
                  (g = g.nextSibling);
            else
              y.parentNode._isSplit
                ? ((y._parent = y.parentNode),
                  !y.previousSibling &&
                    y.firstChild &&
                    (y.firstChild._isFirst = !0),
                  y.nextSibling &&
                    " " === y.nextSibling.textContent &&
                    !y.nextSibling.nextSibling &&
                    G.push(y.nextSibling),
                  (y._next =
                    y.nextSibling && y.nextSibling._isFirst
                      ? null
                      : y.nextSibling),
                  y.parentNode.removeChild(y),
                  b.splice(f--, 1),
                  v--)
                : w ||
                  ((_ = !y.nextSibling && u(y.parentNode, e, B)),
                  y.parentNode._parent && y.parentNode._parent.appendChild(y),
                  _ && y.parentNode.appendChild(m.createTextNode(" ")),
                  "span" === R && (y.style.display = "inline"),
                  I.push(y));
          else
            y.parentNode._isSplit && !y._isSplit && "" !== y.innerHTML
              ? z.push(y)
              : Y &&
                !y._isSplit &&
                ("span" === R && (y.style.display = "inline"), I.push(y));
        else
          W || X
            ? (y.parentNode && y.parentNode.removeChild(y),
              b.splice(f--, 1),
              v--)
            : j || e.appendChild(y);
      for (f = G.length; -1 < --f; ) G[f].parentNode.removeChild(G[f]);
      if (W) {
        for (
          X &&
            ((T = m.createElement(R)),
            e.appendChild(T),
            (E = T.offsetWidth + "px"),
            (_ = T.offsetParent === e ? 0 : e.offsetLeft),
            e.removeChild(T)),
            C = e.style.cssText,
            e.style.cssText = "display:none;";
          e.firstChild;

        )
          e.removeChild(e.firstChild);
        for (x = " " === B && (!X || (!j && !Y)), f = 0; f < W.length; f++) {
          for (
            D = W[f],
              (T = m.createElement(R)).style.cssText =
                "display:block;text-align:" +
                L +
                ";position:" +
                (X ? "absolute;" : "relative;"),
              q && (T.className = q + (V ? f + 1 : "")),
              N.push(T),
              v = D.length,
              g = 0;
            g < v;
            g++
          )
            "BR" !== D[g].nodeName &&
              ((y = D[g]),
              T.appendChild(y),
              x && y._wordEnd && T.appendChild(m.createTextNode(" ")),
              X &&
                (0 === g &&
                  ((T.style.top = y._y + "px"), (T.style.left = M + _ + "px")),
                (y.style.top = "0px"),
                _ && (y.style.left = y._x - _ + "px")));
          0 === v
            ? (T.innerHTML = "&nbsp;")
            : j || Y || (c(T), o(T, String.fromCharCode(160), " ")),
            X && ((T.style.width = E), (T.style.height = y._h + "px")),
            e.appendChild(T);
        }
        e.style.cssText = C;
      }
      X &&
        (h > e.clientHeight &&
          ((e.style.height = h - F + "px"),
          e.clientHeight < h && (e.style.height = h + A + "px")),
        p > e.clientWidth &&
          ((e.style.width = p - $ + "px"),
          e.clientWidth < p && (e.style.width = p + P + "px"))),
        U && (K ? (e.style.display = K) : e.style.removeProperty("display")),
        l(i, I),
        j && l(r, z),
        l(a, N);
    }
    function h(e, i, s, a) {
      var l,
        u,
        c,
        d,
        p,
        h,
        f,
        g,
        v = i.tag ? i.tag : i.span ? "span" : "div",
        y = ~(i.type || i.split || "chars,words,lines").indexOf("chars"),
        b = n(i),
        w = i.wordDelimiter || " ",
        D = " " !== w ? "" : b ? "&#173; " : " ",
        T = "</" + v + ">",
        E = 1,
        _ = i.specialChars
          ? "function" == typeof i.specialChars
            ? i.specialChars
            : r
          : null,
        S = m.createElement("div"),
        M = e.parentNode;
      for (
        M.insertBefore(S, e),
          S.textContent = e.nodeValue,
          M.removeChild(e),
          f =
            -1 !==
            (l = (function e(t) {
              var i = t.nodeType,
                s = "";
              if (1 === i || 9 === i || 11 === i) {
                if ("string" == typeof t.textContent) return t.textContent;
                for (t = t.firstChild; t; t = t.nextSibling) s += e(t);
              } else if (3 === i || 4 === i) return t.nodeValue;
              return s;
            })((e = S))).indexOf("<"),
          !1 !== i.reduceWhiteSpace && (l = l.replace(C, " ").replace(x, "")),
          f && (l = l.split("<").join("{{LT}}")),
          p = l.length,
          u = (" " === l.charAt(0) ? D : "") + s(),
          c = 0;
        c < p;
        c++
      )
        if (((h = l.charAt(c)), _ && (g = _(l.substr(c), i.specialChars))))
          (h = l.substr(c, g || 1)),
            (u += y && " " !== h ? a() + h + "</" + v + ">" : h),
            (c += g - 1);
        else if (h === w && l.charAt(c - 1) !== w && c) {
          for (u += E ? T : "", E = 0; l.charAt(c + 1) === w; ) (u += D), c++;
          c === p - 1
            ? (u += D)
            : ")" !== l.charAt(c + 1) && ((u += D + s()), (E = 1));
        } else
          "{" === h && "{{LT}}" === l.substr(c, 6)
            ? ((u += y ? a() + "{{LT}}</" + v + ">" : "{{LT}}"), (c += 5))
            : (55296 <= h.charCodeAt(0) && h.charCodeAt(0) <= 56319) ||
              (65024 <= l.charCodeAt(c + 1) && l.charCodeAt(c + 1) <= 65039)
            ? ((d = ((l.substr(c, 12).split(t) || [])[1] || "").length || 2),
              (u +=
                y && " " !== h
                  ? a() + l.substr(c, d) + "</" + v + ">"
                  : l.substr(c, d)),
              (c += d - 1))
            : (u += y && " " !== h ? a() + h + "</" + v + ">" : h);
      (e.outerHTML = u + (E ? T : "")), f && o(M, "{{LT}}", "<");
    }
    function f(e, t, i, r) {
      var a,
        o,
        l = w(e.childNodes),
        u = l.length,
        c = n(t);
      if (3 !== e.nodeType || 1 < u) {
        for (t.absolute = !1, a = 0; a < u; a++)
          ((o = l[a])._next = o._isFirst = o._parent = o._wordEnd = null),
            (3 === o.nodeType && !/\S+/.test(o.nodeValue)) ||
              (c &&
                3 !== o.nodeType &&
                "inline" === s(o).display &&
                ((o.style.display = "inline-block"),
                (o.style.position = "relative")),
              (o._isSplit = !0),
              f(o, t, i, r));
        return (t.absolute = c), void (e._isSplit = !0);
      }
      h(e, t, i, r);
    }
    var m,
      g,
      v,
      y,
      b,
      w,
      D,
      x = /(?:\r|\n|\t\t)/g,
      C = /(?:\s\s+)/g,
      T =
        (((D = E.prototype).split = function (e) {
          this.isSplit && this.revert(),
            (this.vars = e = e || this.vars),
            (this._originals.length =
              this.chars.length =
              this.words.length =
              this.lines.length =
                0);
          for (
            var t,
              i,
              s,
              n = this.elements.length,
              r = e.tag ? e.tag : e.span ? "span" : "div",
              o = a(e.wordsClass, r),
              l = a(e.charsClass, r);
            -1 < --n;

          )
            (s = this.elements[n]),
              (this._originals[n] = s.innerHTML),
              (t = s.clientHeight),
              (i = s.clientWidth),
              f(s, e, o, l),
              p(s, e, this.chars, this.words, this.lines, i, t);
          return (
            this.chars.reverse(),
            this.words.reverse(),
            this.lines.reverse(),
            (this.isSplit = !0),
            this
          );
        }),
        (D.revert = function () {
          var e = this._originals;
          if (!e) throw "revert() call wasn't scoped properly.";
          return (
            this.elements.forEach(function (t, i) {
              return (t.innerHTML = e[i]);
            }),
            (this.chars = []),
            (this.words = []),
            (this.lines = []),
            (this.isSplit = !1),
            this
          );
        }),
        (E.create = function (e, t) {
          return new E(e, t);
        }),
        E);
    function E(e, t) {
      v || i(),
        (this.elements = w(e)),
        (this.chars = []),
        (this.words = []),
        (this.lines = []),
        (this._originals = []),
        (this.vars = t || {}),
        b(this),
        this.split(t);
    }
    (T.version = "3.11.4"),
      (T.register = i),
      (e.SplitText = T),
      (e.default = T),
      "undefined" == typeof window || window !== e
        ? Object.defineProperty(e, "__esModule", { value: !0 })
        : delete e.default;
  }),
  (function (e, t) {
    "object" == typeof exports && "undefined" != typeof module
      ? (module.exports = t())
      : "function" == typeof define && define.amd
      ? define(t)
      : ((e =
          "undefined" != typeof globalThis ? globalThis : e || self).Atropos =
          t());
  })(this, function () {
    "use strict";
    function e() {
      return (e =
        Object.assign ||
        function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var i = arguments[t];
            for (var s in i)
              Object.prototype.hasOwnProperty.call(i, s) && (e[s] = i[s]);
          }
          return e;
        }).apply(this, arguments);
    }
    var t = function (e, t) {
        return e.querySelector(t);
      },
      i = function (e) {
        void 0 === e && (e = {});
        var t = {};
        return (
          Object.keys(e).forEach(function (i) {
            void 0 !== e[i] && (t[i] = e[i]);
          }),
          t
        );
      };
    return function (s) {
      void 0 === s && (s = {});
      var n,
        r,
        a,
        o,
        l,
        u,
        c,
        d,
        p,
        h,
        f,
        m = s,
        g = m.el,
        v = m.eventsEl,
        y = {
          __atropos__: !0,
          params: e(
            {
              alwaysActive: !1,
              activeOffset: 50,
              shadowOffset: 50,
              shadowScale: 1,
              duration: 300,
              rotate: !0,
              rotateTouch: !0,
              rotateXMax: 15,
              rotateYMax: 15,
              rotateXInvert: !1,
              rotateYInvert: !1,
              stretchX: 0,
              stretchY: 0,
              stretchZ: 0,
              commonOrigin: !0,
              shadow: !0,
              highlight: !0,
              onEnter: null,
              onLeave: null,
              onRotate: null,
            },
            i(s || {})
          ),
          destroyed: !1,
          isActive: !1,
        },
        b = y.params,
        w = [];
      !(function e() {
        f = requestAnimationFrame(function () {
          w.forEach(function (e) {
            if ("function" == typeof e) e();
            else {
              var t = e.element,
                i = e.prop,
                s = e.value;
              t.style[i] = s;
            }
          }),
            w.splice(0, w.length),
            e();
        });
      })();
      var D,
        x = function (e, t) {
          w.push({ element: e, prop: "transitionDuration", value: t });
        },
        C = function (e, t) {
          w.push({ element: e, prop: "transitionTimingFunction", value: t });
        },
        T = function (e, t) {
          w.push({ element: e, prop: "transform", value: t });
        },
        E = function (e, t) {
          w.push({ element: e, prop: "opacity", value: t });
        },
        _ = function (e, t, i, s) {
          return e.addEventListener(t, i, s);
        },
        S = function (e, t, i, s) {
          return e.removeEventListener(t, i, s);
        },
        M = function (e) {
          var t = e.rotateXPercentage,
            i = void 0 === t ? 0 : t,
            s = e.rotateYPercentage,
            n = void 0 === s ? 0 : s,
            r = e.duration,
            a = e.opacityOnly,
            o = e.easeOut;
          (function (e, t) {
            return e.querySelectorAll(
              "[data-atropos-offset], [data-atropos-opacity]"
            );
          })(g).forEach(function (e) {
            x(e, r), C(e, o ? "ease-out" : "");
            var t = (function (e) {
              if (
                e.dataset.atroposOpacity &&
                "string" == typeof e.dataset.atroposOpacity
              )
                return e.dataset.atroposOpacity.split(";").map(function (e) {
                  return parseFloat(e);
                });
            })(e);
            if (0 === i && 0 === n)
              a || T(e, "translate3d(0, 0, 0)"), t && E(e, t[0]);
            else {
              var s = parseFloat(e.dataset.atroposOffset) / 100;
              if (
                (Number.isNaN(s) ||
                  a ||
                  T(e, "translate3d(" + -n * -s + "%, " + i * -s + "%, 0)"),
                t)
              ) {
                var l = t[0],
                  u = t[1],
                  c = Math.max(Math.abs(i), Math.abs(n));
                E(e, l + ((u - l) * c) / 100);
              }
            }
          });
        },
        k = function (e, t) {
          var i = g !== v;
          if (
            (o || (o = g.getBoundingClientRect()),
            i && !l && (l = v.getBoundingClientRect()),
            void 0 === e && void 0 === t)
          ) {
            var s = i ? l : o;
            (e = s.left + s.width / 2), (t = s.top + s.height / 2);
          }
          var r,
            a = 0,
            u = 0,
            d = o,
            p = d.top,
            h = d.left,
            f = d.width,
            m = d.height;
          if (i) {
            var y = l,
              D = y.top,
              _ = y.left,
              S = y.width,
              k = y.height,
              A = f / 2 + (h - _),
              P = m / 2 + (p - D),
              F = e - _,
              $ = t - D;
            (u = ((b.rotateYMax * (F - A)) / (S - f / 2)) * -1),
              (a = (b.rotateXMax * ($ - P)) / (k - m / 2)),
              (r = e - h + "px " + (t - p) + "px");
          } else {
            var O = f / 2,
              L = m / 2,
              I = e - h,
              z = t - p;
            (u = ((b.rotateYMax * (I - O)) / (f / 2)) * -1),
              (a = (b.rotateXMax * (z - L)) / (m / 2));
          }
          (a = Math.min(Math.max(-a, -b.rotateXMax), b.rotateXMax)),
            b.rotateXInvert && (a = -a),
            (u = Math.min(Math.max(-u, -b.rotateYMax), b.rotateYMax)),
            b.rotateYInvert && (u = -u);
          var N,
            B,
            R = (a / b.rotateXMax) * 100,
            H = (u / b.rotateYMax) * 100,
            W = (i ? (H / 100) * b.stretchX : 0) * (b.rotateYInvert ? -1 : 1),
            j = (i ? (R / 100) * b.stretchY : 0) * (b.rotateXInvert ? -1 : 1),
            Y = i ? (Math.max(Math.abs(R), Math.abs(H)) / 100) * b.stretchZ : 0;
          T(
            n,
            "translate3d(" +
              W +
              "%, " +
              -j +
              "%, " +
              -Y +
              "px) rotateX(" +
              a +
              "deg) rotateY(" +
              u +
              "deg)"
          ),
            r &&
              b.commonOrigin &&
              ((N = n),
              (B = r),
              w.push({ element: N, prop: "transformOrigin", value: B })),
            c &&
              (x(c, b.duration + "ms"),
              C(c, "ease-out"),
              T(c, "translate3d(" + 0.25 * -H + "%, " + 0.25 * R + "%, 0)"),
              E(c, Math.max(Math.abs(R), Math.abs(H)) / 100)),
            M({
              rotateXPercentage: R,
              rotateYPercentage: H,
              duration: b.duration + "ms",
              easeOut: !0,
            }),
            "function" == typeof b.onRotate && b.onRotate(a, u);
        },
        A = function () {
          w.push(function () {
            return g.classList.add("atropos-active");
          }),
            x(n, b.duration + "ms"),
            C(n, "ease-out"),
            T(r, "translate3d(0,0, " + b.activeOffset + "px)"),
            x(r, b.duration + "ms"),
            C(r, "ease-out"),
            u && (x(u, b.duration + "ms"), C(u, "ease-out")),
            (y.isActive = !0);
        },
        P = function (e) {
          if (
            ((d = void 0),
            !(
              ("pointerdown" === e.type && "mouse" === e.pointerType) ||
              ("pointerenter" === e.type && "mouse" !== e.pointerType)
            ))
          ) {
            if (
              ("pointerdown" === e.type && e.preventDefault(),
              (p = e.clientX),
              (h = e.clientY),
              b.alwaysActive)
            )
              return (o = void 0), void (l = void 0);
            A(), "function" == typeof b.onEnter && b.onEnter();
          }
        },
        F = function (e) {
          !1 === d && e.cancelable && e.preventDefault();
        },
        $ = function (e) {
          if (b.rotate && y.isActive) {
            if ("mouse" !== e.pointerType) {
              if (!b.rotateTouch) return;
              e.preventDefault();
            }
            var t = e.clientX,
              i = e.clientY,
              s = t - p,
              n = i - h;
            if (
              "string" == typeof b.rotateTouch &&
              (0 !== s || 0 !== n) &&
              void 0 === d
            ) {
              if (s * s + n * n >= 25) {
                var r = (180 * Math.atan2(Math.abs(n), Math.abs(s))) / Math.PI;
                d = "scroll-y" === b.rotateTouch ? r > 45 : 90 - r > 45;
              }
              !1 === d &&
                (g.classList.add("atropos-rotate-touch"),
                e.cancelable && e.preventDefault());
            }
            ("mouse" !== e.pointerType && d) || k(t, i);
          }
        },
        O = function (e) {
          if (
            ((o = void 0),
            (l = void 0),
            y.isActive &&
              !(
                (e && "pointerup" === e.type && "mouse" === e.pointerType) ||
                (e && "pointerleave" === e.type && "mouse" !== e.pointerType)
              ))
          ) {
            if (
              ("string" == typeof b.rotateTouch &&
                d &&
                g.classList.remove("atropos-rotate-touch"),
              b.alwaysActive)
            )
              return (
                k(),
                "function" == typeof b.onRotate && b.onRotate(0, 0),
                void ("function" == typeof b.onLeave && b.onLeave())
              );
            w.push(function () {
              return g.classList.remove("atropos-active");
            }),
              x(r, b.duration + "ms"),
              C(r, ""),
              T(r, "translate3d(0,0, 0px)"),
              u && (x(u, b.duration + "ms"), C(u, "")),
              c &&
                (x(c, b.duration + "ms"),
                C(c, ""),
                T(c, "translate3d(0, 0, 0)"),
                E(c, 0)),
              x(n, b.duration + "ms"),
              C(n, ""),
              T(n, "translate3d(0,0,0) rotateX(0deg) rotateY(0deg)"),
              M({ duration: b.duration + "ms" }),
              (y.isActive = !1),
              "function" == typeof b.onRotate && b.onRotate(0, 0),
              "function" == typeof b.onLeave && b.onLeave();
          }
        },
        L = function (e) {
          var t = e.target;
          !v.contains(t) && t !== v && y.isActive && O();
        };
      return (
        (y.destroy = function () {
          (y.destroyed = !0),
            cancelAnimationFrame(f),
            S(document, "click", L),
            S(v, "pointerdown", P),
            S(v, "pointerenter", P),
            S(v, "pointermove", $),
            S(v, "touchmove", F),
            S(v, "pointerleave", O),
            S(v, "pointerup", O),
            S(v, "lostpointercapture", O),
            delete g.__atropos__;
        }),
        "string" == typeof g && (g = t(document, g)),
        g &&
          (g.__atropos__ ||
            (void 0 !== v
              ? "string" == typeof v && (v = t(document, v))
              : (v = g),
            Object.assign(y, { el: g }),
            (n = t(g, ".atropos-rotate")),
            (r = t(g, ".atropos-scale")),
            (a = t(g, ".atropos-inner")),
            (g.__atropos__ = y))),
        g &&
          v &&
          (b.shadow &&
            ((u = t(g, ".atropos-shadow")) ||
              ((u = document.createElement("span")).classList.add(
                "atropos-shadow"
              ),
              (D = !0)),
            T(
              u,
              "translate3d(0,0,-" +
                b.shadowOffset +
                "px) scale(" +
                b.shadowScale +
                ")"
            ),
            D && n.appendChild(u)),
          b.highlight &&
            (function () {
              var e;
              (c = t(g, ".atropos-highlight")) ||
                ((c = document.createElement("span")).classList.add(
                  "atropos-highlight"
                ),
                (e = !0)),
                T(c, "translate3d(0,0,0)"),
                e && a.appendChild(c);
            })(),
          b.rotateTouch &&
            ("string" == typeof b.rotateTouch
              ? g.classList.add("atropos-rotate-touch-" + b.rotateTouch)
              : g.classList.add("atropos-rotate-touch")),
          t(g, "[data-atropos-opacity]") && M({ opacityOnly: !0 }),
          _(document, "click", L),
          _(v, "pointerdown", P),
          _(v, "pointerenter", P),
          _(v, "pointermove", $),
          _(v, "touchmove", F),
          _(v, "pointerleave", O),
          _(v, "pointerup", O),
          _(v, "lostpointercapture", O),
          b.alwaysActive && (A(), k())),
        y
      );
    };
  }),
  (function (e, t) {
    "object" == typeof exports && "undefined" != typeof module
      ? (module.exports = t())
      : "function" == typeof define && define.amd
      ? define(t)
      : ((e || self).autosize = t());
  })(this, function () {
    var e,
      t,
      i =
        "function" == typeof Map
          ? new Map()
          : ((e = []),
            (t = []),
            {
              has: function (t) {
                return e.indexOf(t) > -1;
              },
              get: function (i) {
                return t[e.indexOf(i)];
              },
              set: function (i, s) {
                -1 === e.indexOf(i) && (e.push(i), t.push(s));
              },
              delete: function (i) {
                var s = e.indexOf(i);
                s > -1 && (e.splice(s, 1), t.splice(s, 1));
              },
            }),
      s = function (e) {
        return new Event(e, { bubbles: !0 });
      };
    try {
      new Event("test");
    } catch (e) {
      s = function (e) {
        var t = document.createEvent("Event");
        return t.initEvent(e, !0, !1), t;
      };
    }
    function n(e) {
      var t = i.get(e);
      t && t.destroy();
    }
    function r(e) {
      var t = i.get(e);
      t && t.update();
    }
    var a = null;
    return (
      "undefined" == typeof window ||
      "function" != typeof window.getComputedStyle
        ? (((a = function (e) {
            return e;
          }).destroy = function (e) {
            return e;
          }),
          (a.update = function (e) {
            return e;
          }))
        : (((a = function (e, t) {
            return (
              e &&
                Array.prototype.forEach.call(e.length ? e : [e], function (e) {
                  return (function (e) {
                    if (
                      e &&
                      e.nodeName &&
                      "TEXTAREA" === e.nodeName &&
                      !i.has(e)
                    ) {
                      var t,
                        n = null,
                        r = null,
                        a = null,
                        o = function () {
                          e.clientWidth !== r && d();
                        },
                        l = function (t) {
                          window.removeEventListener("resize", o, !1),
                            e.removeEventListener("input", d, !1),
                            e.removeEventListener("keyup", d, !1),
                            e.removeEventListener("autosize:destroy", l, !1),
                            e.removeEventListener("autosize:update", d, !1),
                            Object.keys(t).forEach(function (i) {
                              e.style[i] = t[i];
                            }),
                            i.delete(e);
                        }.bind(e, {
                          height: e.style.height,
                          resize: e.style.resize,
                          overflowY: e.style.overflowY,
                          overflowX: e.style.overflowX,
                          wordWrap: e.style.wordWrap,
                        });
                      e.addEventListener("autosize:destroy", l, !1),
                        "onpropertychange" in e &&
                          "oninput" in e &&
                          e.addEventListener("keyup", d, !1),
                        window.addEventListener("resize", o, !1),
                        e.addEventListener("input", d, !1),
                        e.addEventListener("autosize:update", d, !1),
                        (e.style.overflowX = "hidden"),
                        (e.style.wordWrap = "break-word"),
                        i.set(e, { destroy: l, update: d }),
                        "vertical" ===
                        (t = window.getComputedStyle(e, null)).resize
                          ? (e.style.resize = "none")
                          : "both" === t.resize &&
                            (e.style.resize = "horizontal"),
                        (n =
                          "content-box" === t.boxSizing
                            ? -(
                                parseFloat(t.paddingTop) +
                                parseFloat(t.paddingBottom)
                              )
                            : parseFloat(t.borderTopWidth) +
                              parseFloat(t.borderBottomWidth)),
                        isNaN(n) && (n = 0),
                        d();
                    }
                    function u(t) {
                      var i = e.style.width;
                      (e.style.width = "0px"),
                        (e.style.width = i),
                        (e.style.overflowY = t);
                    }
                    function c() {
                      if (0 !== e.scrollHeight) {
                        var t = (function (e) {
                          for (
                            var t = [];
                            e &&
                            e.parentNode &&
                            e.parentNode instanceof Element;

                          )
                            e.parentNode.scrollTop &&
                              ((e.parentNode.style.scrollBehavior = "auto"),
                              t.push([e.parentNode, e.parentNode.scrollTop])),
                              (e = e.parentNode);
                          return function () {
                            return t.forEach(function (e) {
                              var t = e[0];
                              (t.scrollTop = e[1]),
                                (t.style.scrollBehavior = null);
                            });
                          };
                        })(e);
                        (e.style.height = ""),
                          (e.style.height = e.scrollHeight + n + "px"),
                          (r = e.clientWidth),
                          t();
                      }
                    }
                    function d() {
                      c();
                      var t = Math.round(parseFloat(e.style.height)),
                        i = window.getComputedStyle(e, null),
                        n =
                          "content-box" === i.boxSizing
                            ? Math.round(parseFloat(i.height))
                            : e.offsetHeight;
                      if (
                        (n < t
                          ? "hidden" === i.overflowY &&
                            (u("scroll"),
                            c(),
                            (n =
                              "content-box" === i.boxSizing
                                ? Math.round(
                                    parseFloat(
                                      window.getComputedStyle(e, null).height
                                    )
                                  )
                                : e.offsetHeight))
                          : "hidden" !== i.overflowY &&
                            (u("hidden"),
                            c(),
                            (n =
                              "content-box" === i.boxSizing
                                ? Math.round(
                                    parseFloat(
                                      window.getComputedStyle(e, null).height
                                    )
                                  )
                                : e.offsetHeight)),
                        a !== n)
                      ) {
                        a = n;
                        var r = s("autosize:resized");
                        try {
                          e.dispatchEvent(r);
                        } catch (e) {}
                      }
                    }
                  })(e);
                }),
              e
            );
          }).destroy = function (e) {
            return e && Array.prototype.forEach.call(e.length ? e : [e], n), e;
          }),
          (a.update = function (e) {
            return e && Array.prototype.forEach.call(e.length ? e : [e], r), e;
          })),
      a
    );
  }),
  (function (e, t) {
    if ("object" == typeof exports && "object" == typeof module)
      module.exports = t();
    else if ("function" == typeof define && define.amd) define([], t);
    else {
      var i = t();
      for (var s in i) ("object" == typeof exports ? exports : e)[s] = i[s];
    }
  })(window, function () {
    return (function (e) {
      var t = {};
      function i(s) {
        if (t[s]) return t[s].exports;
        var n = (t[s] = { i: s, l: !1, exports: {} });
        return e[s].call(n.exports, n, n.exports, i), (n.l = !0), n.exports;
      }
      return (
        (i.m = e),
        (i.c = t),
        (i.d = function (e, t, s) {
          i.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: s });
        }),
        (i.r = function (e) {
          "undefined" != typeof Symbol &&
            Symbol.toStringTag &&
            Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
            Object.defineProperty(e, "__esModule", { value: !0 });
        }),
        (i.t = function (e, t) {
          if ((1 & t && (e = i(e)), 8 & t)) return e;
          if (4 & t && "object" == typeof e && e && e.__esModule) return e;
          var s = Object.create(null);
          if (
            (i.r(s),
            Object.defineProperty(s, "default", { enumerable: !0, value: e }),
            2 & t && "string" != typeof e)
          )
            for (var n in e)
              i.d(
                s,
                n,
                function (t) {
                  return e[t];
                }.bind(null, n)
              );
          return s;
        }),
        (i.n = function (e) {
          var t =
            e && e.__esModule
              ? function () {
                  return e.default;
                }
              : function () {
                  return e;
                };
          return i.d(t, "a", t), t;
        }),
        (i.o = function (e, t) {
          return Object.prototype.hasOwnProperty.call(e, t);
        }),
        (i.p = ""),
        i((i.s = 0))
      );
    })([
      function (e, t, i) {
        "use strict";
        i.r(t);
        var s,
          n = "fslightbox-",
          r = "".concat(n, "styles"),
          a = "".concat(n, "cursor-grabbing"),
          o = "".concat(n, "full-dimension"),
          l = "".concat(n, "flex-centered"),
          u = "".concat(n, "open"),
          c = "".concat(n, "transform-transition"),
          d = "".concat(n, "absoluted"),
          p = "".concat(n, "slide-btn"),
          h = "".concat(p, "-container"),
          f = "".concat(n, "fade-in"),
          m = "".concat(n, "fade-out"),
          g = f + "-strong",
          v = m + "-strong",
          y = "".concat(n, "opacity-"),
          b = "".concat(y, "1"),
          w = "".concat(n, "source");
        function D(e) {
          return (D =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                })(e);
        }
        function x(e) {
          var t,
            i = e.props,
            s = 0,
            n = {};
          (this.getSourceTypeFromLocalStorageByUrl = function (e) {
            return t[e] ? t[e] : r(e);
          }),
            (this.handleReceivedSourceTypeForUrl = function (e, i) {
              if (
                !1 === n[i] &&
                (s--, "invalid" !== e ? (n[i] = e) : delete n[i], 0 === s)
              ) {
                !(function (e, t) {
                  for (var i in t) e[i] = t[i];
                })(t, n);
                try {
                  localStorage.setItem("fslightbox-types", JSON.stringify(t));
                } catch (e) {}
              }
            });
          var r = function (e) {
            s++, (n[e] = !1);
          };
          if (i.disableLocalStorage)
            (this.getSourceTypeFromLocalStorageByUrl = function () {}),
              (this.handleReceivedSourceTypeForUrl = function () {});
          else {
            try {
              t = JSON.parse(localStorage.getItem("fslightbox-types"));
            } catch (e) {}
            t || ((t = {}), (this.getSourceTypeFromLocalStorageByUrl = r));
          }
        }
        function C(e, t, i, s) {
          var n = e.data,
            r = e.elements.sources,
            a = i / s,
            o = 0;
          this.adjustSize = function () {
            if ((o = n.maxSourceWidth / a) < n.maxSourceHeight)
              return i < n.maxSourceWidth && (o = s), l();
            (o = s > n.maxSourceHeight ? n.maxSourceHeight : s), l();
          };
          var l = function () {
            (r[t].style.width = o * a + "px"), (r[t].style.height = o + "px");
          };
        }
        function T(e, t) {
          var i = this,
            s = e.collections.sourceSizers,
            n = e.elements,
            r = n.sourceAnimationWrappers,
            a = n.sourceMainWrappers,
            o = n.sources,
            l = e.resolve;
          function u(e, i) {
            (s[t] = l(C, [t, e, i])), s[t].adjustSize();
          }
          this.runActions = function (e, s) {
            o[t].classList.add(b),
              r[t].classList.add(g),
              a[t].removeChild(a[t].firstChild),
              u(e, s),
              (i.runActions = u);
          };
        }
        function E(e, t) {
          var i,
            s = this,
            n = e.elements.sources,
            r = e.props,
            a = (0, e.resolve)(T, [t]);
          (this.handleImageLoad = function (e) {
            var t = e.target,
              i = t.naturalWidth,
              s = t.naturalHeight;
            a.runActions(i, s);
          }),
            (this.handleVideoLoad = function (e) {
              var t = e.target,
                s = t.videoWidth,
                n = t.videoHeight;
              (i = !0), a.runActions(s, n);
            }),
            (this.handleNotMetaDatedVideoLoad = function () {
              i || s.handleYoutubeLoad();
            }),
            (this.handleYoutubeLoad = function () {
              var e = 1920,
                t = 1080;
              r.maxYoutubeDimensions &&
                ((e = r.maxYoutubeDimensions.width),
                (t = r.maxYoutubeDimensions.height)),
                a.runActions(e, t);
            }),
            (this.handleCustomLoad = function () {
              setTimeout(function () {
                var e = n[t];
                a.runActions(e.offsetWidth, e.offsetHeight);
              });
            });
        }
        function _(e, t, i) {
          var s = e.elements.sources,
            n = e.props.customClasses,
            r = n[t] ? n[t] : "";
          s[t].className = i + " " + r;
        }
        function S(e, t) {
          var i = e.elements.sources,
            s = e.props.customAttributes;
          for (var n in s[t]) i[t].setAttribute(n, s[t][n]);
        }
        function M(e, t) {
          var i = e.collections.sourceLoadHandlers,
            s = e.elements,
            n = s.sources,
            r = s.sourceAnimationWrappers,
            a = e.props.sources;
          (n[t] = document.createElement("img")),
            _(e, t, w),
            (n[t].src = a[t]),
            (n[t].onload = i[t].handleImageLoad),
            S(e, t),
            r[t].appendChild(n[t]);
        }
        function k(e, t) {
          var i = e.collections.sourceLoadHandlers,
            s = e.elements,
            n = s.sources,
            r = s.sourceAnimationWrappers,
            a = e.props,
            o = a.sources,
            l = a.videosPosters;
          (n[t] = document.createElement("video")),
            _(e, t, w),
            (n[t].src = o[t]),
            (n[t].onloadedmetadata = function (e) {
              i[t].handleVideoLoad(e);
            }),
            (n[t].controls = !0),
            S(e, t),
            l[t] && (n[t].poster = l[t]);
          var u = document.createElement("source");
          (u.src = o[t]),
            n[t].appendChild(u),
            setTimeout(i[t].handleNotMetaDatedVideoLoad, 3e3),
            r[t].appendChild(n[t]);
        }
        function A(e, t) {
          var i = e.collections.sourceLoadHandlers,
            s = e.elements,
            r = s.sources,
            a = s.sourceAnimationWrappers,
            o = e.props.sources;
          (r[t] = document.createElement("iframe")),
            _(e, t, "".concat(w, " ").concat(n, "youtube-iframe"));
          var l = o[t],
            u = l.split("?")[1];
          (r[t].src = "https://www.youtube.com/embed/"
            .concat(
              l.match(
                /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/
              )[2],
              "?"
            )
            .concat(u || "")),
            (r[t].allowFullscreen = !0),
            S(e, t),
            a[t].appendChild(r[t]),
            i[t].handleYoutubeLoad();
        }
        function P(e, t) {
          var i = e.collections.sourceLoadHandlers,
            s = e.elements,
            n = s.sources,
            r = s.sourceAnimationWrappers,
            a = e.props.sources;
          (n[t] = a[t]),
            _(e, t, "".concat(n[t].className, " ").concat(w)),
            r[t].appendChild(n[t]),
            i[t].handleCustomLoad();
        }
        function F(e, t) {
          var i = e.elements,
            s = i.sources,
            r = i.sourceAnimationWrappers,
            a = i.sourceMainWrappers;
          e.props.sources,
            (s[t] = document.createElement("div")),
            (s[t].className = "".concat(n, "invalid-file-wrapper ").concat(l)),
            (s[t].innerHTML = "Invalid source"),
            r[t].classList.add(g),
            r[t].appendChild(s[t]),
            a[t].removeChild(a[t].firstChild);
        }
        function $(e) {
          var t = e.collections,
            i = t.sourceLoadHandlers,
            s = t.sourcesRenderFunctions,
            n = e.core.sourceDisplayFacade,
            r = e.resolve;
          this.runActionsForSourceTypeAndIndex = function (t, a) {
            var o;
            switch (("invalid" !== t && (i[a] = r(E, [a])), t)) {
              case "image":
                o = M;
                break;
              case "video":
                o = k;
                break;
              case "youtube":
                o = A;
                break;
              case "custom":
                o = P;
                break;
              default:
                o = F;
            }
            (s[a] = function () {
              return o(e, a);
            }),
              n.displaySourcesWhichShouldBeDisplayed();
          };
        }
        function O() {
          var e,
            t,
            i,
            s = function (e) {
              var t = document.createElement("a");
              return (
                (t.href = e),
                "www.youtube.com" === t.hostname || "youtu.be" === t.hostname
              );
            },
            n = function (e) {
              return e.slice(0, e.indexOf("/"));
            };
          function r() {
            if (4 !== i.readyState) {
              if (2 === i.readyState) {
                var e;
                switch (n(i.getResponseHeader("content-type"))) {
                  case "image":
                    e = "image";
                    break;
                  case "video":
                    e = "video";
                    break;
                  default:
                    e = "invalid";
                }
                (i.onreadystatechange = null), i.abort(), t(e);
              }
            } else t("invalid");
          }
          (this.setUrlToCheck = function (t) {
            e = t;
          }),
            (this.getSourceType = function (n) {
              if (s(e)) return n("youtube");
              (t = n),
                ((i = new XMLHttpRequest()).onreadystatechange = r),
                i.open("GET", e, !0),
                i.send();
            });
        }
        function L(e, t, i) {
          var s = e.props,
            n = s.types,
            r = s.type,
            a = s.sources,
            o = e.resolve;
          (this.getTypeSetByClientForIndex = function (e) {
            var t;
            return n && n[e] ? (t = n[e]) : r && (t = r), t;
          }),
            (this.retrieveTypeWithXhrForIndex = function (e) {
              var s = o(O);
              s.setUrlToCheck(a[e]),
                s.getSourceType(function (s) {
                  t.handleReceivedSourceTypeForUrl(s, a[e]),
                    i.runActionsForSourceTypeAndIndex(s, e);
                });
            });
        }
        function I(e, t) {
          var i = e.componentsServices.hideSourceLoaderIfNotYetCollection,
            s = e.elements,
            n = s.sourceWrappersContainer,
            r = s.sourceMainWrappers;
          (r[t] = document.createElement("div")),
            (r[t].className = "".concat(d, " ").concat(o, " ").concat(l)),
            (r[t].innerHTML =
              '<div class="fslightbox-loader"><div></div><div></div><div></div><div></div></div>');
          var a = r[t].firstChild;
          (i[t] = function () {
            r[t].contains(a) && r[t].removeChild(a);
          }),
            n.appendChild(r[t]),
            (function (e, t) {
              var i = e.elements,
                s = i.sourceMainWrappers,
                n = i.sourceAnimationWrappers;
              (n[t] = document.createElement("div")), s[t].appendChild(n[t]);
            })(e, t);
        }
        function z(e, t, i, s) {
          var r = document.createElementNS("http://www.w3.org/2000/svg", "svg");
          r.setAttributeNS(null, "width", t),
            r.setAttributeNS(null, "height", t),
            r.setAttributeNS(null, "viewBox", i);
          var a = document.createElementNS(
            "http://www.w3.org/2000/svg",
            "path"
          );
          return (
            a.setAttributeNS(null, "class", "".concat(n, "svg-path")),
            a.setAttributeNS(null, "d", s),
            r.appendChild(a),
            e.appendChild(r),
            r
          );
        }
        function N(e, t) {
          var i = document.createElement("div");
          return (
            (i.className = "".concat(n, "toolbar-button ").concat(l)),
            (i.title = t),
            e.appendChild(i),
            i
          );
        }
        function B(e) {
          var t = e.props.sources,
            i = e.elements.container,
            s = document.createElement("div");
          (s.className = "".concat(n, "nav")),
            i.appendChild(s),
            (function (e, t) {
              var i = document.createElement("div");
              (i.className = "".concat(n, "toolbar")),
                t.appendChild(i),
                (function (e, t) {
                  var i = e.componentsServices,
                    s = e.data,
                    n = e.fs,
                    r =
                      "M4.5 11H3v4h4v-1.5H4.5V11zM3 7h1.5V4.5H7V3H3v4zm10.5 6.5H11V15h4v-4h-1.5v2.5zM11 3v1.5h2.5V7H15V3h-4z",
                    a = N(t);
                  a.title = "Enter fullscreen";
                  var o = z(a, "20px", "0 0 18 18", r);
                  (i.ofs = function () {
                    (s.ifs = !0),
                      (a.title = "Exit fullscreen"),
                      o.setAttributeNS(null, "width", "24px"),
                      o.setAttributeNS(null, "height", "24px"),
                      o.setAttributeNS(null, "viewBox", "0 0 950 1024"),
                      o.firstChild.setAttributeNS(
                        null,
                        "d",
                        "M682 342h128v84h-212v-212h84v128zM598 810v-212h212v84h-128v128h-84zM342 342v-128h84v212h-212v-84h128zM214 682v-84h212v212h-84v-128h-128z"
                      );
                  }),
                    (i.xfs = function () {
                      (s.ifs = !1),
                        (a.title = "Enter fullscreen"),
                        o.setAttributeNS(null, "width", "20px"),
                        o.setAttributeNS(null, "height", "20px"),
                        o.setAttributeNS(null, "viewBox", "0 0 18 18"),
                        o.firstChild.setAttributeNS(null, "d", r);
                    }),
                    (a.onclick = n.t);
                })(e, i),
                (function (e, t) {
                  var i = N(t, "Close");
                  (i.onclick = e.core.lightboxCloser.closeLightbox),
                    z(
                      i,
                      "20px",
                      "0 0 24 24",
                      "M 4.7070312 3.2929688 L 3.2929688 4.7070312 L 10.585938 12 L 3.2929688 19.292969 L 4.7070312 20.707031 L 12 13.414062 L 19.292969 20.707031 L 20.707031 19.292969 L 13.414062 12 L 20.707031 4.7070312 L 19.292969 3.2929688 L 12 10.585938 L 4.7070312 3.2929688 z"
                    );
                })(e, i);
            })(e, s),
            t.length > 1 &&
              (function (e, t) {
                var i = e.componentsServices,
                  s = e.props.sources,
                  r = (e.stageIndexes, document.createElement("div"));
                r.className = "".concat(n, "slide-number-container");
                var a = document.createElement("div");
                a.className = l;
                var o = document.createElement("span");
                i.setSlideNumber = function (e) {
                  return (o.innerHTML = e);
                };
                var u = document.createElement("span");
                u.className = "".concat(n, "slash");
                var c = document.createElement("div");
                (c.innerHTML = s.length),
                  r.appendChild(a),
                  a.appendChild(o),
                  a.appendChild(u),
                  a.appendChild(c),
                  t.appendChild(r),
                  setTimeout(function () {
                    a.offsetWidth > 55 &&
                      (r.style.justifyContent = "flex-start");
                  });
              })(e, s);
        }
        function R(e, t) {
          var i = this,
            s = e.elements.sourceMainWrappers,
            n = e.props,
            r = 0;
          (this.byValue = function (e) {
            return (r = e), i;
          }),
            (this.negative = function () {
              a(-o());
            }),
            (this.zero = function () {
              a(0);
            }),
            (this.positive = function () {
              a(o());
            });
          var a = function (e) {
              (s[t].style.transform = "translateX(".concat(e + r, "px)")),
                (r = 0);
            },
            o = function () {
              return (1 + n.slideDistance) * innerWidth;
            };
        }
        function H(e, t, i, s) {
          var n = e.elements.container,
            r = i.charAt(0).toUpperCase() + i.slice(1),
            a = document.createElement("div");
          (a.className = "".concat(h, " ").concat(h, "-").concat(i)),
            (a.title = "".concat(r, " slide")),
            (a.onclick = t),
            (function (e, t) {
              var i = document.createElement("div");
              (i.className = "".concat(p, " ").concat(l)),
                z(i, "20px", "0 0 20 20", t),
                e.appendChild(i);
            })(a, s),
            n.appendChild(a);
        }
        function W(e, t) {
          var i = e.classList;
          i.contains(t) && i.remove(t);
        }
        function j(e) {
          var t = this,
            i = e.core,
            s = i.eventsDispatcher,
            n = i.globalEventsController,
            r = i.scrollbarRecompensor,
            a = e.data,
            o = e.elements,
            l = e.fs,
            c = e.props,
            d = e.sourcePointerProps;
          (this.isLightboxFadingOut = !1),
            (this.runActions = function () {
              (t.isLightboxFadingOut = !0),
                o.container.classList.add(v),
                n.removeListeners(),
                c.exitFullscreenOnClose && a.ifs && l.x(),
                setTimeout(function () {
                  (t.isLightboxFadingOut = !1),
                    (d.isPointering = !1),
                    o.container.classList.remove(v),
                    document.documentElement.classList.remove(u),
                    r.removeRecompense(),
                    document.body.removeChild(o.container),
                    s.dispatch("onClose");
                }, 270);
            });
        }
        function Y(e) {
          var t = e.core,
            i = t.lightboxCloser,
            s = t.slideChangeFacade,
            n = e.fs;
          this.listener = function (e) {
            switch (e.key) {
              case "Escape":
                i.closeLightbox();
                break;
              case "ArrowLeft":
                s.changeToPrevious();
                break;
              case "ArrowRight":
                s.changeToNext();
                break;
              case "F11":
                e.preventDefault(), n.t();
            }
          };
        }
        function X(e) {
          var t = e.collections.sourceMainWrappersTransformers,
            i = e.elements,
            s = e.sourcePointerProps,
            n = e.stageIndexes;
          function r(e, i) {
            t[e].byValue(s.swipedX)[i]();
          }
          this.runActionsForEvent = function (e) {
            var t, o, l;
            i.container.contains(i.slideSwipingHoverer) ||
              i.container.appendChild(i.slideSwipingHoverer),
              (t = i.container),
              (o = a),
              (l = t.classList).contains(o) || l.add(o),
              (s.swipedX = e.screenX - s.downScreenX),
              r(n.current, "zero"),
              void 0 !== n.previous && s.swipedX > 0
                ? r(n.previous, "negative")
                : void 0 !== n.next && s.swipedX < 0 && r(n.next, "positive");
          };
        }
        function q(e) {
          var t = e.props.sources,
            i = e.resolve,
            s = e.sourcePointerProps,
            n = i(X);
          1 === t.length
            ? (this.listener = function () {
                s.swipedX = 1;
              })
            : (this.listener = function (e) {
                s.isPointering && n.runActionsForEvent(e);
              });
        }
        function V(e) {
          var t = e.collections.sourceMainWrappersTransformers,
            i = e.core.slideIndexChanger,
            s = e.elements.sourceMainWrappers,
            n = e.stageIndexes;
          (this.runPositiveSwipedXActions = function () {
            void 0 === n.previous || (r("positive"), i.changeTo(n.previous)),
              r("zero");
          }),
            (this.runNegativeSwipedXActions = function () {
              void 0 === n.next || (r("negative"), i.changeTo(n.next)),
                r("zero");
            });
          var r = function (e) {
            s[n.current].classList.add(c), t[n.current][e]();
          };
        }
        function G(e, t) {
          e.contains(t) && e.removeChild(t);
        }
        function U(e) {
          var t = e.core.lightboxCloser,
            i = e.elements,
            s = e.resolve,
            n = e.sourcePointerProps,
            r = s(V);
          (this.runNoSwipeActions = function () {
            G(i.container, i.slideSwipingHoverer),
              n.isSourceDownEventTarget || t.closeLightbox(),
              (n.isPointering = !1);
          }),
            (this.runActions = function () {
              n.swipedX > 0
                ? r.runPositiveSwipedXActions()
                : r.runNegativeSwipedXActions(),
                G(i.container, i.slideSwipingHoverer),
                i.container.classList.remove(a),
                (n.isPointering = !1);
            });
        }
        function K(e) {
          var t = e.resolve,
            i = e.sourcePointerProps,
            s = t(U);
          this.listener = function () {
            i.isPointering &&
              (i.swipedX ? s.runActions() : s.runNoSwipeActions());
          };
        }
        function Q(e) {
          var t, i, s;
          (i = (t = e).core.classFacade),
            (s = t.elements),
            (i.removeFromEachElementClassIfContains = function (e, t) {
              for (var i = 0; i < s[e].length; i++) W(s[e][i], t);
            }),
            (function (e) {
              var t = e.core.eventsDispatcher,
                i = e.props;
              t.dispatch = function (e) {
                i[e] && i[e]();
              };
            })(e),
            (function (e) {
              var t = e.componentsServices,
                i = e.data,
                s = e.fs,
                n = [
                  "fullscreenchange",
                  "webkitfullscreenchange",
                  "mozfullscreenchange",
                  "MSFullscreenChange",
                ];
              function r(e) {
                for (var t = 0; t < n.length; t++) document[e](n[t], a);
              }
              function a() {
                document.fullscreenElement ||
                document.webkitIsFullScreen ||
                document.mozFullScreen ||
                document.msFullscreenElement
                  ? t.ofs()
                  : t.xfs();
              }
              (s.o = function () {
                t.ofs();
                var e = document.documentElement;
                e.requestFullscreen
                  ? e.requestFullscreen()
                  : e.mozRequestFullScreen
                  ? e.mozRequestFullScreen()
                  : e.webkitRequestFullscreen
                  ? e.webkitRequestFullscreen()
                  : e.msRequestFullscreen && e.msRequestFullscreen();
              }),
                (s.x = function () {
                  t.xfs(),
                    document.exitFullscreen
                      ? document.exitFullscreen()
                      : document.mozCancelFullScreen
                      ? document.mozCancelFullScreen()
                      : document.webkitExitFullscreen
                      ? document.webkitExitFullscreen()
                      : document.msExitFullscreen &&
                        document.msExitFullscreen();
                }),
                (s.t = function () {
                  i.ifs ? s.x() : s.o();
                }),
                (s.l = function () {
                  r("addEventListener");
                }),
                (s.q = function () {
                  r("removeEventListener");
                });
            })(e),
            (function (e) {
              var t = e.core,
                i = t.globalEventsController,
                s = t.windowResizeActioner,
                n = e.fs,
                r = e.resolve,
                a = r(Y),
                o = r(q),
                l = r(K);
              (i.attachListeners = function () {
                document.addEventListener("pointermove", o.listener),
                  document.addEventListener("pointerup", l.listener),
                  addEventListener("resize", s.runActions),
                  document.addEventListener("keydown", a.listener),
                  n.l();
              }),
                (i.removeListeners = function () {
                  document.removeEventListener("pointermove", o.listener),
                    document.removeEventListener("pointerup", l.listener),
                    removeEventListener("resize", s.runActions),
                    document.removeEventListener("keydown", a.listener),
                    n.q();
                });
            })(e),
            (function (e) {
              var t = e.core.lightboxCloser,
                i = (0, e.resolve)(j);
              t.closeLightbox = function () {
                i.isLightboxFadingOut || i.runActions();
              };
            })(e),
            Z(e),
            (function (e) {
              var t = e.data,
                i = e.core.scrollbarRecompensor;
              function s() {
                document.body.offsetHeight > innerHeight &&
                  (document.body.style.marginRight = t.scrollbarWidth + "px");
              }
              (i.addRecompense = function () {
                "complete" === document.readyState
                  ? s()
                  : addEventListener("load", function () {
                      s(), (i.addRecompense = s);
                    });
              }),
                (i.removeRecompense = function () {
                  document.body.style.removeProperty("margin-right");
                });
            })(e),
            (function (e) {
              var t = e.core,
                i = t.slideChangeFacade,
                s = t.slideIndexChanger,
                n = t.stageManager;
              e.props.sources.length > 1
                ? ((i.changeToPrevious = function () {
                    s.jumpTo(n.getPreviousSlideIndex());
                  }),
                  (i.changeToNext = function () {
                    s.jumpTo(n.getNextSlideIndex());
                  }))
                : ((i.changeToPrevious = function () {}),
                  (i.changeToNext = function () {}));
            })(e),
            (function (e) {
              var t,
                i,
                s = e.collections.sourceMainWrappersTransformers,
                n = e.componentsServices,
                r = e.core,
                a = r.classFacade,
                o = r.slideIndexChanger,
                l = r.sourceDisplayFacade,
                u = r.stageManager,
                d = e.elements.sourceAnimationWrappers,
                p = e.stageIndexes,
                h =
                  ((t = function () {
                    a.removeFromEachElementClassIfContains(
                      "sourceAnimationWrappers",
                      m
                    );
                  }),
                  (i = []),
                  function () {
                    i.push(!0),
                      setTimeout(function () {
                        i.pop(), i.length || t();
                      }, 300);
                  });
              (o.changeTo = function (e) {
                (p.current = e),
                  u.updateStageIndexes(),
                  n.setSlideNumber(e + 1),
                  l.displaySourcesWhichShouldBeDisplayed();
              }),
                (o.jumpTo = function (e) {
                  var t = p.current;
                  o.changeTo(e),
                    a.removeFromEachElementClassIfContains(
                      "sourceMainWrappers",
                      c
                    ),
                    W(d[t], g),
                    W(d[t], f),
                    d[t].classList.add(m),
                    W(d[e], g),
                    W(d[e], m),
                    d[e].classList.add(f),
                    h(),
                    s[e].zero(),
                    setTimeout(function () {
                      t !== p.current && s[t].negative();
                    }, 270);
                });
            })(e),
            (function (e) {
              var t = e.core,
                i = t.classFacade,
                s = t.sourcesPointerDown,
                n = e.elements.sources,
                r = e.sourcePointerProps,
                a = e.stageIndexes;
              s.listener = function (e) {
                "VIDEO" !== e.target.tagName && e.preventDefault(),
                  (r.isPointering = !0),
                  (r.downScreenX = e.screenX),
                  (r.swipedX = 0);
                var t = n[a.current];
                t && t.contains(e.target)
                  ? (r.isSourceDownEventTarget = !0)
                  : (r.isSourceDownEventTarget = !1),
                  i.removeFromEachElementClassIfContains(
                    "sourceMainWrappers",
                    c
                  );
              };
            })(e),
            (function (e) {
              var t = e.collections.sourcesRenderFunctions,
                i = e.core.sourceDisplayFacade,
                s = e.props,
                n = e.stageIndexes;
              function r(e) {
                t[e] && (t[e](), delete t[e]);
              }
              i.displaySourcesWhichShouldBeDisplayed = function () {
                if (s.loadOnlyCurrentSource) r(n.current);
                else for (var e in n) r(n[e]);
              };
            })(e),
            (function (e) {
              var t = e.stageIndexes,
                i = e.core.stageManager,
                s = e.props.sources.length - 1;
              (i.getPreviousSlideIndex = function () {
                return 0 === t.current ? s : t.current - 1;
              }),
                (i.getNextSlideIndex = function () {
                  return t.current === s ? 0 : t.current + 1;
                }),
                (i.updateStageIndexes =
                  0 === s
                    ? function () {}
                    : 1 === s
                    ? function () {
                        0 === t.current
                          ? ((t.next = 1), delete t.previous)
                          : ((t.previous = 0), delete t.next);
                      }
                    : function () {
                        (t.previous = i.getPreviousSlideIndex()),
                          (t.next = i.getNextSlideIndex());
                      }),
                (i.isSourceInStage =
                  s <= 2
                    ? function () {
                        return !0;
                      }
                    : function (e) {
                        var i = t.current;
                        if ((0 === i && e === s) || (i === s && 0 === e))
                          return !0;
                        var n = i - e;
                        return -1 === n || 0 === n || 1 === n;
                      });
            })(e),
            (function (e) {
              var t = e.collections,
                i = t.sourceMainWrappersTransformers,
                s = t.sourceSizers,
                n = e.core.windowResizeActioner,
                r = e.data,
                a = e.elements.sourceMainWrappers,
                o = e.props,
                l = e.stageIndexes;
              n.runActions = function () {
                innerWidth < 992
                  ? (r.maxSourceWidth = innerWidth)
                  : (r.maxSourceWidth = 0.9 * innerWidth),
                  (r.maxSourceHeight = 0.9 * innerHeight);
                for (var e = 0; e < o.sources.length; e++)
                  W(a[e], c),
                    e !== l.current && i[e].negative(),
                    s[e] && s[e].adjustSize();
              };
            })(e);
        }
        function J(e) {
          var t = e.core.eventsDispatcher,
            i = e.data,
            s = e.elements,
            r = e.props.sources;
          (i.isInitialized = !0),
            (i.scrollbarWidth = (function () {
              var e = document.createElement("div"),
                t = e.style,
                i = document.createElement("div");
              (t.visibility = "hidden"),
                (t.width = "100px"),
                (t.msOverflowStyle = "scrollbar"),
                (t.overflow = "scroll"),
                (i.style.width = "100%"),
                document.body.appendChild(e);
              var s = e.offsetWidth;
              return e.appendChild(i), s - i.offsetWidth;
            })()),
            (function (e) {
              for (
                var t = e.collections.sourceMainWrappersTransformers,
                  i = e.props.sources,
                  s = e.resolve,
                  n = 0;
                n < i.length;
                n++
              )
                t[n] = s(R, [n]);
            })(e),
            Q(e),
            (s.container = document.createElement("div")),
            (s.container.className = ""
              .concat(n, "container ")
              .concat(o, " ")
              .concat(g)),
            (function (e) {
              var t = e.elements;
              (t.slideSwipingHoverer = document.createElement("div")),
                (t.slideSwipingHoverer.className = ""
                  .concat(n, "slide-swiping-hoverer ")
                  .concat(o, " ")
                  .concat(d));
            })(e),
            B(e),
            (function (e) {
              var t = e.core.sourcesPointerDown,
                i = e.elements,
                s = e.props.sources,
                n = document.createElement("div");
              (n.className = "".concat(d, " ").concat(o)),
                i.container.appendChild(n),
                n.addEventListener("pointerdown", t.listener),
                (i.sourceWrappersContainer = n);
              for (var r = 0; r < s.length; r++) I(e, r);
            })(e),
            r.length > 1 &&
              (function (e) {
                var t = e.core.slideChangeFacade;
                H(
                  e,
                  t.changeToPrevious,
                  "previous",
                  "M18.271,9.212H3.615l4.184-4.184c0.306-0.306,0.306-0.801,0-1.107c-0.306-0.306-0.801-0.306-1.107,0L1.21,9.403C1.194,9.417,1.174,9.421,1.158,9.437c-0.181,0.181-0.242,0.425-0.209,0.66c0.005,0.038,0.012,0.071,0.022,0.109c0.028,0.098,0.075,0.188,0.142,0.271c0.021,0.026,0.021,0.061,0.045,0.085c0.015,0.016,0.034,0.02,0.05,0.033l5.484,5.483c0.306,0.307,0.801,0.307,1.107,0c0.306-0.305,0.306-0.801,0-1.105l-4.184-4.185h14.656c0.436,0,0.788-0.353,0.788-0.788S18.707,9.212,18.271,9.212z"
                ),
                  H(
                    e,
                    t.changeToNext,
                    "next",
                    "M1.729,9.212h14.656l-4.184-4.184c-0.307-0.306-0.307-0.801,0-1.107c0.305-0.306,0.801-0.306,1.106,0l5.481,5.482c0.018,0.014,0.037,0.019,0.053,0.034c0.181,0.181,0.242,0.425,0.209,0.66c-0.004,0.038-0.012,0.071-0.021,0.109c-0.028,0.098-0.075,0.188-0.143,0.271c-0.021,0.026-0.021,0.061-0.045,0.085c-0.015,0.016-0.034,0.02-0.051,0.033l-5.483,5.483c-0.306,0.307-0.802,0.307-1.106,0c-0.307-0.305-0.307-0.801,0-1.105l4.184-4.185H1.729c-0.436,0-0.788-0.353-0.788-0.788S1.293,9.212,1.729,9.212z"
                  );
              })(e),
            (function (e) {
              for (
                var t = e.props.sources,
                  i = e.resolve,
                  s = i(x),
                  n = i($),
                  r = i(L, [s, n]),
                  a = 0;
                a < t.length;
                a++
              )
                if ("string" == typeof t[a]) {
                  var o = r.getTypeSetByClientForIndex(a);
                  if (o) n.runActionsForSourceTypeAndIndex(o, a);
                  else {
                    var l = s.getSourceTypeFromLocalStorageByUrl(t[a]);
                    l
                      ? n.runActionsForSourceTypeAndIndex(l, a)
                      : r.retrieveTypeWithXhrForIndex(a);
                  }
                } else n.runActionsForSourceTypeAndIndex("custom", a);
            })(e),
            t.dispatch("onInit");
        }
        function Z(e) {
          var t = e.collections.sourceMainWrappersTransformers,
            i = e.componentsServices,
            s = e.core,
            n = s.eventsDispatcher,
            r = s.lightboxOpener,
            a = s.globalEventsController,
            o = s.scrollbarRecompensor,
            l = s.sourceDisplayFacade,
            c = s.stageManager,
            d = s.windowResizeActioner,
            p = e.data,
            h = e.elements,
            f = e.stageIndexes;
          r.open = function () {
            var s =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : 0;
            (f.current = s),
              p.isInitialized ? n.dispatch("onShow") : J(e),
              c.updateStageIndexes(),
              l.displaySourcesWhichShouldBeDisplayed(),
              i.setSlideNumber(s + 1),
              document.body.appendChild(h.container),
              document.documentElement.classList.add(u),
              o.addRecompense(),
              a.attachListeners(),
              d.runActions(),
              t[f.current].zero(),
              n.dispatch("onOpen");
          };
        }
        function ee(e, t, i) {
          return (ee = te()
            ? Reflect.construct.bind()
            : function (e, t, i) {
                var s = [null];
                s.push.apply(s, t);
                var n = new (Function.bind.apply(e, s))();
                return i && ie(n, i.prototype), n;
              }).apply(null, arguments);
        }
        function te() {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        }
        function ie(e, t) {
          return (ie = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (e, t) {
                return (e.__proto__ = t), e;
              })(e, t);
        }
        function se(e) {
          return (
            (function (e) {
              if (Array.isArray(e)) return ne(e);
            })(e) ||
            (function (e) {
              if (
                ("undefined" != typeof Symbol && null != e[Symbol.iterator]) ||
                null != e["@@iterator"]
              )
                return Array.from(e);
            })(e) ||
            (function (e, t) {
              if (e) {
                if ("string" == typeof e) return ne(e, t);
                var i = Object.prototype.toString.call(e).slice(8, -1);
                return (
                  "Object" === i && e.constructor && (i = e.constructor.name),
                  "Map" === i || "Set" === i
                    ? Array.from(e)
                    : "Arguments" === i ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)
                    ? ne(e, t)
                    : void 0
                );
              }
            })(e) ||
            (function () {
              throw new TypeError(
                "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
              );
            })()
          );
        }
        function ne(e, t) {
          (null == t || t > e.length) && (t = e.length);
          for (var i = 0, s = new Array(t); i < t; i++) s[i] = e[i];
          return s;
        }
        function re() {
          for (
            var e = document.getElementsByTagName("a"),
              t = function (t) {
                if (!e[t].hasAttribute("data-fslightbox")) return "continue";
                var i = e[t].getAttribute("data-fslightbox"),
                  s = e[t].hasAttribute("data-href")
                    ? e[t].getAttribute("data-href")
                    : e[t].getAttribute("href");
                fsLightboxInstances[i] ||
                  (fsLightboxInstances[i] = new FsLightbox());
                var n = null;
                "#" === s.charAt(0)
                  ? (n = document
                      .getElementById(s.substring(1))
                      .cloneNode(!0)).removeAttribute("id")
                  : (n = s),
                  fsLightboxInstances[i].props.sources.push(n),
                  fsLightboxInstances[i].elements.a.push(e[t]);
                var r = fsLightboxInstances[i].props.sources.length - 1;
                (e[t].onclick = function (e) {
                  e.preventDefault(), fsLightboxInstances[i].open(r);
                }),
                  d("types", "data-type"),
                  d("videosPosters", "data-video-poster"),
                  d("customClasses", "data-class"),
                  d("customClasses", "data-custom-class");
                for (
                  var a = [
                      "href",
                      "data-fslightbox",
                      "data-href",
                      "data-type",
                      "data-video-poster",
                      "data-class",
                      "data-custom-class",
                    ],
                    o = e[t].attributes,
                    l = fsLightboxInstances[i].props.customAttributes,
                    u = 0;
                  u < o.length;
                  u++
                )
                  if (
                    -1 === a.indexOf(o[u].name) &&
                    "data-" === o[u].name.substr(0, 5)
                  ) {
                    l[r] || (l[r] = {});
                    var c = o[u].name.substr(5);
                    l[r][c] = o[u].value;
                  }
                function d(s, n) {
                  e[t].hasAttribute(n) &&
                    (fsLightboxInstances[i].props[s][r] = e[t].getAttribute(n));
                }
              },
              i = 0;
            i < e.length;
            i++
          )
            t(i);
          var s = Object.keys(fsLightboxInstances);
          window.fsLightbox = fsLightboxInstances[s[s.length - 1]];
        }
        "object" ===
          ("undefined" == typeof document ? "undefined" : D(document)) &&
          (((s = document.createElement("style")).className = r),
          s.appendChild(
            document.createTextNode(
              ".fslightbox-absoluted{position:absolute;top:0;left:0}.fslightbox-fade-in{animation:fslightbox-fade-in .3s cubic-bezier(0,0,.7,1)}.fslightbox-fade-out{animation:fslightbox-fade-out .3s ease}.fslightbox-fade-in-strong{animation:fslightbox-fade-in-strong .3s cubic-bezier(0,0,.7,1)}.fslightbox-fade-out-strong{animation:fslightbox-fade-out-strong .3s ease}@keyframes fslightbox-fade-in{from{opacity:.65}to{opacity:1}}@keyframes fslightbox-fade-out{from{opacity:.35}to{opacity:0}}@keyframes fslightbox-fade-in-strong{from{opacity:.3}to{opacity:1}}@keyframes fslightbox-fade-out-strong{from{opacity:1}to{opacity:0}}.fslightbox-cursor-grabbing{cursor:grabbing}.fslightbox-full-dimension{width:100%;height:100%}.fslightbox-open{overflow:hidden;height:100%}.fslightbox-flex-centered{display:flex;justify-content:center;align-items:center}.fslightbox-opacity-0{opacity:0!important}.fslightbox-opacity-1{opacity:1!important}.fslightbox-scrollbarfix{padding-right:17px}.fslightbox-transform-transition{transition:transform .3s}.fslightbox-container{font-family:Arial,sans-serif;position:fixed;top:0;left:0;background:linear-gradient(rgba(30,30,30,.9),#000 1810%);touch-action:pinch-zoom;z-index:1000000000;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-tap-highlight-color:transparent}.fslightbox-container *{box-sizing:border-box}.fslightbox-svg-path{transition:fill .15s ease;fill:#ddd}.fslightbox-nav{height:45px;width:100%;position:absolute;top:0;left:0}.fslightbox-slide-number-container{display:flex;justify-content:center;align-items:center;position:relative;height:100%;font-size:15px;color:#d7d7d7;z-index:0;max-width:55px;text-align:left}.fslightbox-slide-number-container .fslightbox-flex-centered{height:100%}.fslightbox-slash{display:block;margin:0 5px;width:1px;height:12px;transform:rotate(15deg);background:#fff}.fslightbox-toolbar{position:absolute;z-index:3;right:0;top:0;height:100%;display:flex;background:rgba(35,35,35,.65)}.fslightbox-toolbar-button{height:100%;width:45px;cursor:pointer}.fslightbox-toolbar-button:hover .fslightbox-svg-path{fill:#fff}.fslightbox-slide-btn-container{display:flex;align-items:center;padding:12px 12px 12px 6px;position:absolute;top:50%;cursor:pointer;z-index:3;transform:translateY(-50%)}@media (min-width:476px){.fslightbox-slide-btn-container{padding:22px 22px 22px 6px}}@media (min-width:768px){.fslightbox-slide-btn-container{padding:30px 30px 30px 6px}}.fslightbox-slide-btn-container:hover .fslightbox-svg-path{fill:#f1f1f1}.fslightbox-slide-btn{padding:9px;font-size:26px;background:rgba(35,35,35,.65)}@media (min-width:768px){.fslightbox-slide-btn{padding:10px}}@media (min-width:1600px){.fslightbox-slide-btn{padding:11px}}.fslightbox-slide-btn-container-previous{left:0}@media (max-width:475.99px){.fslightbox-slide-btn-container-previous{padding-left:3px}}.fslightbox-slide-btn-container-next{right:0;padding-left:12px;padding-right:3px}@media (min-width:476px){.fslightbox-slide-btn-container-next{padding-left:22px}}@media (min-width:768px){.fslightbox-slide-btn-container-next{padding-left:30px}}@media (min-width:476px){.fslightbox-slide-btn-container-next{padding-right:6px}}.fslightbox-down-event-detector{position:absolute;z-index:1}.fslightbox-slide-swiping-hoverer{z-index:4}.fslightbox-invalid-file-wrapper{font-size:22px;color:#eaebeb;margin:auto}.fslightbox-video{object-fit:cover}.fslightbox-youtube-iframe{border:0}.fslightbox-loader{display:block;margin:auto;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:67px;height:67px}.fslightbox-loader div{box-sizing:border-box;display:block;position:absolute;width:54px;height:54px;margin:6px;border:5px solid;border-color:#999 transparent transparent transparent;border-radius:50%;animation:fslightbox-loader 1.2s cubic-bezier(.5,0,.5,1) infinite}.fslightbox-loader div:nth-child(1){animation-delay:-.45s}.fslightbox-loader div:nth-child(2){animation-delay:-.3s}.fslightbox-loader div:nth-child(3){animation-delay:-.15s}@keyframes fslightbox-loader{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}.fslightbox-source{position:relative;z-index:2;opacity:0}"
            )
          ),
          document.head.appendChild(s)),
          (window.FsLightbox = function () {
            var e = this;
            (this.props = {
              sources: [],
              customAttributes: [],
              customClasses: [],
              types: [],
              videosPosters: [],
              slideDistance: 0.3,
            }),
              (this.data = {
                isInitialized: !1,
                isFullscreenOpen: !1,
                maxSourceWidth: 0,
                maxSourceHeight: 0,
                scrollbarWidth: 0,
              }),
              (this.sourcePointerProps = {
                downScreenX: null,
                isPointering: !1,
                isSourceDownEventTarget: !1,
                swipedX: 0,
              }),
              (this.stageIndexes = {}),
              (this.elements = {
                a: [],
                container: null,
                slideSwipingHoverer: null,
                sourceWrappersContainer: null,
                sources: [],
                sourceMainWrappers: [],
                sourceAnimationWrappers: [],
              }),
              (this.componentsServices = {
                enterFullscreen: null,
                exitFullscreen: null,
                hideSourceLoaderIfNotYetCollection: [],
                setSlideNumber: function () {},
              }),
              (this.resolve = function (t) {
                var i =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : [];
                return i.unshift(e), ee(t, se(i));
              }),
              (this.collections = {
                sourceMainWrappersTransformers: [],
                sourceLoadHandlers: [],
                sourcesRenderFunctions: [],
                sourceSizers: [],
              }),
              (this.core = {
                classFacade: {},
                eventsDispatcher: {},
                globalEventsController: {},
                lightboxCloser: {},
                lightboxOpener: {},
                lightboxUpdater: {},
                scrollbarRecompensor: {},
                slideChangeFacade: {},
                slideIndexChanger: {},
                sourcesPointerDown: {},
                sourceDisplayFacade: {},
                stageManager: {},
                windowResizeActioner: {},
              }),
              (this.fs = {}),
              Z(this),
              (this.open = function (t) {
                return e.core.lightboxOpener.open(t);
              }),
              (this.close = function () {
                return e.core.lightboxCloser.closeLightbox();
              });
          }),
          (window.fsLightboxInstances = {}),
          re(),
          (window.refreshFsLightbox = function () {
            for (var e in fsLightboxInstances) {
              var t = fsLightboxInstances[e].props;
              (fsLightboxInstances[e] = new FsLightbox()),
                (fsLightboxInstances[e].props = t),
                (fsLightboxInstances[e].props.sources = []),
                (fsLightboxInstances[e].elements.a = []);
            }
            re();
          });
      },
    ]);
  }),
  (function (e, t) {
    "object" == typeof exports && "undefined" != typeof module
      ? t(exports)
      : "function" == typeof define && define.amd
      ? define(["exports"], t)
      : t(((e = e || self).window = e.window || {}));
  })(this, function (e) {
    "use strict";
    function t(e, t) {
      (e.prototype = Object.create(t.prototype)),
        ((e.prototype.constructor = e).__proto__ = t);
    }
    function i(e) {
      if (void 0 === e)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return e;
    }
    function s(e) {
      return "string" == typeof e;
    }
    function n(e) {
      return "function" == typeof e;
    }
    function r(e) {
      return "number" == typeof e;
    }
    function a(e) {
      return void 0 === e;
    }
    function o(e) {
      return "object" == typeof e;
    }
    function l(e) {
      return !1 !== e;
    }
    function u() {
      return "undefined" != typeof window;
    }
    function c(e) {
      return n(e) || s(e);
    }
    function d(e) {
      return (Te = xt(e, ct)) && Ii;
    }
    function p(e, t) {
      return console.warn(
        "Invalid property",
        e,
        "set to",
        t,
        "Missing plugin? gsap.registerPlugin()"
      );
    }
    function h(e, t) {
      return !t && console.warn(e);
    }
    function f(e, t) {
      return (e && (ct[e] = t) && Te && (Te[e] = t)) || ct;
    }
    function m() {
      return 0;
    }
    function g(e) {
      var t,
        i,
        s = e[0];
      if ((o(s) || n(s) || (e = [e]), !(t = (s._gsap || {}).harness))) {
        for (i = wt.length; i-- && !wt[i].targetTest(s); );
        t = wt[i];
      }
      for (i = e.length; i--; )
        (e[i] && (e[i]._gsap || (e[i]._gsap = new qt(e[i], t)))) ||
          e.splice(i, 1);
      return e;
    }
    function v(e) {
      return e._gsap || g(kt(e))[0]._gsap;
    }
    function y(e, t, i) {
      return (i = e[t]) && n(i)
        ? e[t]()
        : (a(i) && e.getAttribute && e.getAttribute(t)) || i;
    }
    function b(e, t) {
      return (e = e.split(",")).forEach(t) || e;
    }
    function w(e) {
      return Math.round(1e5 * e) / 1e5 || 0;
    }
    function D(e) {
      return Math.round(1e7 * e) / 1e7 || 0;
    }
    function x(e, t) {
      var i = t.charAt(0),
        s = parseFloat(t.substr(2));
      return (
        (e = parseFloat(e)),
        "+" === i ? e + s : "-" === i ? e - s : "*" === i ? e * s : e / s
      );
    }
    function C(e, t) {
      for (var i = t.length, s = 0; e.indexOf(t[s]) < 0 && ++s < i; );
      return s < i;
    }
    function T() {
      var e,
        t,
        i = mt.length,
        s = mt.slice(0);
      for (gt = {}, e = mt.length = 0; e < i; e++)
        (t = s[e]) &&
          t._lazy &&
          (t.render(t._lazy[0], t._lazy[1], !0)._lazy = 0);
    }
    function E(e, t, i, s) {
      mt.length && !ye && T(),
        e.render(t, i, s || (ye && t < 0 && (e._initted || e._startAt))),
        mt.length && !ye && T();
    }
    function _(e) {
      var t = parseFloat(e);
      return (t || 0 === t) && (e + "").match(lt).length < 2
        ? t
        : s(e)
        ? e.trim()
        : e;
    }
    function S(e) {
      return e;
    }
    function M(e, t) {
      for (var i in t) i in e || (e[i] = t[i]);
      return e;
    }
    function k(e, t) {
      for (var i in t)
        "__proto__" !== i &&
          "constructor" !== i &&
          "prototype" !== i &&
          (e[i] = o(t[i]) ? k(e[i] || (e[i] = {}), t[i]) : t[i]);
      return e;
    }
    function A(e, t) {
      var i,
        s = {};
      for (i in e) i in t || (s[i] = e[i]);
      return s;
    }
    function P(e) {
      var t = e.parent || we,
        i = e.keyframes
          ? (function (e) {
              return function (t, i) {
                for (var s in i)
                  s in t ||
                    ("duration" === s && e) ||
                    "ease" === s ||
                    (t[s] = i[s]);
              };
            })(it(e.keyframes))
          : M;
      if (l(e.inherit))
        for (; t; ) i(e, t.vars.defaults), (t = t.parent || t._dp);
      return e;
    }
    function F(e, t, i, s, n) {
      void 0 === i && (i = "_first"), void 0 === s && (s = "_last");
      var r,
        a = e[s];
      if (n) for (r = t[n]; a && a[n] > r; ) a = a._prev;
      return (
        a
          ? ((t._next = a._next), (a._next = t))
          : ((t._next = e[i]), (e[i] = t)),
        t._next ? (t._next._prev = t) : (e[s] = t),
        (t._prev = a),
        (t.parent = t._dp = e),
        t
      );
    }
    function $(e, t, i, s) {
      void 0 === i && (i = "_first"), void 0 === s && (s = "_last");
      var n = t._prev,
        r = t._next;
      n ? (n._next = r) : e[i] === t && (e[i] = r),
        r ? (r._prev = n) : e[s] === t && (e[s] = n),
        (t._next = t._prev = t.parent = null);
    }
    function O(e, t) {
      !e.parent || (t && !e.parent.autoRemoveChildren) || e.parent.remove(e),
        (e._act = 0);
    }
    function L(e, t) {
      if (e && (!t || t._end > e._dur || t._start < 0))
        for (var i = e; i; ) (i._dirty = 1), (i = i.parent);
      return e;
    }
    function I(e, t, i, s) {
      return (
        e._startAt &&
        (ye
          ? e._startAt.revert(pt)
          : (e.vars.immediateRender && !e.vars.autoRevert) ||
            e._startAt.render(t, !0, s))
      );
    }
    function z(e) {
      return e._repeat ? Ct(e._tTime, (e = e.duration() + e._rDelay)) * e : 0;
    }
    function N(e, t) {
      return (
        (e - t._start) * t._ts +
        (0 <= t._ts ? 0 : t._dirty ? t.totalDuration() : t._tDur)
      );
    }
    function B(e) {
      return (e._end = D(
        e._start + (e._tDur / Math.abs(e._ts || e._rts || Ge) || 0)
      ));
    }
    function R(e, t) {
      var i = e._dp;
      return (
        i &&
          i.smoothChildTiming &&
          e._ts &&
          ((e._start = D(
            i._time -
              (0 < e._ts
                ? t / e._ts
                : ((e._dirty ? e.totalDuration() : e._tDur) - t) / -e._ts)
          )),
          B(e),
          i._dirty || L(i, e)),
        e
      );
    }
    function H(e, t) {
      var i;
      if (
        ((t._time || (t._initted && !t._dur)) &&
          ((i = N(e.rawTime(), t)),
          (!t._dur || St(0, t.totalDuration(), i) - t._tTime > Ge) &&
            t.render(i, !0)),
        L(e, t)._dp && e._initted && e._time >= e._dur && e._ts)
      ) {
        if (e._dur < e.duration())
          for (i = e; i._dp; )
            0 <= i.rawTime() && i.totalTime(i._tTime), (i = i._dp);
        e._zTime = -Ge;
      }
    }
    function W(e, t, i, s) {
      return (
        t.parent && O(t),
        (t._start = D(
          (r(i) ? i : i || e !== we ? _t(e, i, t) : e._time) + t._delay
        )),
        (t._end = D(
          t._start + (t.totalDuration() / Math.abs(t.timeScale()) || 0)
        )),
        F(e, t, "_first", "_last", e._sort ? "_start" : 0),
        Tt(t) || (e._recent = t),
        s || H(e, t),
        e._ts < 0 && R(e, e._tTime),
        e
      );
    }
    function j(e, t) {
      return (
        (ct.ScrollTrigger || p("scrollTrigger", t)) &&
        ct.ScrollTrigger.create(t, e)
      );
    }
    function Y(e, t, i, s, n) {
      return (
        ti(e, t, n),
        e._initted
          ? !i &&
            e._pt &&
            !ye &&
            ((e._dur && !1 !== e.vars.lazy) || (!e._dur && e.vars.lazy)) &&
            _e !== It.frame
            ? (mt.push(e), (e._lazy = [n, s]), 1)
            : void 0
          : 1
      );
    }
    function X(e, t, i, s) {
      var n = e._repeat,
        r = D(t) || 0,
        a = e._tTime / e._tDur;
      return (
        a && !s && (e._time *= r / e._dur),
        (e._dur = r),
        (e._tDur = n ? (n < 0 ? 1e10 : D(r * (n + 1) + e._rDelay * n)) : r),
        0 < a && !s && R(e, (e._tTime = e._tDur * a)),
        e.parent && B(e),
        i || L(e.parent, e),
        e
      );
    }
    function q(e) {
      return e instanceof Ut ? L(e) : X(e, e._dur);
    }
    function V(e, t, i) {
      var s,
        n,
        a = r(t[1]),
        o = (a ? 2 : 1) + (e < 2 ? 0 : 1),
        u = t[o];
      if ((a && (u.duration = t[1]), (u.parent = i), e)) {
        for (s = u, n = i; n && !("immediateRender" in s); )
          (s = n.vars.defaults || {}), (n = l(n.vars.inherit) && n.parent);
        (u.immediateRender = l(s.immediateRender)),
          e < 2 ? (u.runBackwards = 1) : (u.startAt = t[o - 1]);
      }
      return new ri(t[0], u, t[1 + o]);
    }
    function G(e, t) {
      return e || 0 === e ? t(e) : t;
    }
    function U(e, t) {
      return s(e) && (t = ut.exec(e)) ? t[1] : "";
    }
    function K(e, t) {
      return (
        e &&
        o(e) &&
        "length" in e &&
        ((!t && !e.length) || (e.length - 1 in e && o(e[0]))) &&
        !e.nodeType &&
        e !== De
      );
    }
    function Q(e) {
      return (
        (e = kt(e)[0] || h("Invalid scope") || {}),
        function (t) {
          var i = e.current || e.nativeElement || e;
          return kt(
            t,
            i.querySelectorAll
              ? i
              : i === e
              ? h("Invalid scope") || Ce.createElement("div")
              : e
          );
        }
      );
    }
    function J(e) {
      return e.sort(function () {
        return 0.5 - Math.random();
      });
    }
    function Z(e) {
      if (n(e)) return e;
      var t = o(e) ? e : { each: e },
        i = Wt(t.ease),
        r = t.from || 0,
        a = parseFloat(t.base) || 0,
        l = {},
        u = 0 < r && r < 1,
        c = isNaN(r) || u,
        d = t.axis,
        p = r,
        h = r;
      return (
        s(r)
          ? (p = h = { center: 0.5, edges: 0.5, end: 1 }[r] || 0)
          : !u && c && ((p = r[0]), (h = r[1])),
        function (e, s, n) {
          var o,
            u,
            f,
            m,
            g,
            v,
            y,
            b,
            w,
            x = (n || t).length,
            C = l[x];
          if (!C) {
            if (!(w = "auto" === t.grid ? 0 : (t.grid || [1, Ve])[1])) {
              for (
                y = -Ve;
                y < (y = n[w++].getBoundingClientRect().left) && w < x;

              );
              w--;
            }
            for (
              C = l[x] = [],
                o = c ? Math.min(w, x) * p - 0.5 : r % w,
                u = w === Ve ? 0 : c ? (x * h) / w - 0.5 : (r / w) | 0,
                b = Ve,
                v = y = 0;
              v < x;
              v++
            )
              (f = (v % w) - o),
                (m = u - ((v / w) | 0)),
                (C[v] = g =
                  d ? Math.abs("y" === d ? m : f) : Je(f * f + m * m)),
                y < g && (y = g),
                g < b && (b = g);
            "random" === r && J(C),
              (C.max = y - b),
              (C.min = b),
              (C.v = x =
                (parseFloat(t.amount) ||
                  parseFloat(t.each) *
                    (x < w
                      ? x - 1
                      : d
                      ? "y" === d
                        ? x / w
                        : w
                      : Math.max(w, x / w)) ||
                  0) * ("edges" === r ? -1 : 1)),
              (C.b = x < 0 ? a - x : a),
              (C.u = U(t.amount || t.each) || 0),
              (i = i && x < 0 ? Ht(i) : i);
          }
          return (
            (x = (C[e] - C.min) / C.max || 0),
            D(C.b + (i ? i(x) : x) * C.v) + C.u
          );
        }
      );
    }
    function ee(e) {
      var t = Math.pow(10, ((e + "").split(".")[1] || "").length);
      return function (i) {
        var s = D(Math.round(parseFloat(i) / e) * e * t);
        return (s - (s % 1)) / t + (r(i) ? 0 : U(i));
      };
    }
    function te(e, t) {
      var i,
        s,
        a = it(e);
      return (
        !a &&
          o(e) &&
          ((i = a = e.radius || Ve),
          e.values
            ? ((e = kt(e.values)), (s = !r(e[0])) && (i *= i))
            : (e = ee(e.increment))),
        G(
          t,
          a
            ? n(e)
              ? function (t) {
                  return (s = e(t)), Math.abs(s - t) <= i ? s : t;
                }
              : function (t) {
                  for (
                    var n,
                      a,
                      o = parseFloat(s ? t.x : t),
                      l = parseFloat(s ? t.y : 0),
                      u = Ve,
                      c = 0,
                      d = e.length;
                    d--;

                  )
                    (n = s
                      ? (n = e[d].x - o) * n + (a = e[d].y - l) * a
                      : Math.abs(e[d] - o)) < u && ((u = n), (c = d));
                  return (
                    (c = !i || u <= i ? e[c] : t),
                    s || c === t || r(t) ? c : c + U(t)
                  );
                }
            : ee(e)
        )
      );
    }
    function ie(e, t, i, s) {
      return G(it(e) ? !t : !0 === i ? !!(i = 0) : !s, function () {
        return it(e)
          ? e[~~(Math.random() * e.length)]
          : (i = i || 1e-5) &&
              (s = i < 1 ? Math.pow(10, (i + "").length - 2) : 1) &&
              Math.floor(
                Math.round(
                  (e - i / 2 + Math.random() * (t - e + 0.99 * i)) / i
                ) *
                  i *
                  s
              ) / s;
      });
    }
    function se(e, t, i) {
      return G(i, function (i) {
        return e[~~t(i)];
      });
    }
    function ne(e) {
      for (var t, i, s, n, r = 0, a = ""; ~(t = e.indexOf("random(", r)); )
        (s = e.indexOf(")", t)),
          (n = "[" === e.charAt(t + 7)),
          (i = e.substr(t + 7, s - t - 7).match(n ? lt : st)),
          (a +=
            e.substr(r, t - r) +
            ie(n ? i : +i[0], n ? 0 : +i[1], +i[2] || 1e-5)),
          (r = s + 1);
      return a + e.substr(r, e.length - r);
    }
    function re(e, t, i) {
      var s,
        n,
        r,
        a = e.labels,
        o = Ve;
      for (s in a)
        (n = a[s] - t) < 0 == !!i &&
          n &&
          o > (n = Math.abs(n)) &&
          ((r = s), (o = n));
      return r;
    }
    function ae(e) {
      return (
        O(e),
        e.scrollTrigger && e.scrollTrigger.kill(!!ye),
        e.progress() < 1 && Pt(e, "onInterrupt"),
        e
      );
    }
    function oe(e, t, i) {
      return (
        ((6 * (e += e < 0 ? 1 : 1 < e ? -1 : 0) < 1
          ? t + (i - t) * e * 6
          : e < 0.5
          ? i
          : 3 * e < 2
          ? t + (i - t) * (2 / 3 - e) * 6
          : t) *
          Ft +
          0.5) |
        0
      );
    }
    function le(e, t, i) {
      var s,
        n,
        a,
        o,
        l,
        u,
        c,
        d,
        p,
        h,
        f = e ? (r(e) ? [e >> 16, (e >> 8) & Ft, e & Ft] : 0) : $t.black;
      if (!f) {
        if (("," === e.substr(-1) && (e = e.substr(0, e.length - 1)), $t[e]))
          f = $t[e];
        else if ("#" === e.charAt(0)) {
          if (
            (e.length < 6 &&
              (e =
                "#" +
                (s = e.charAt(1)) +
                s +
                (n = e.charAt(2)) +
                n +
                (a = e.charAt(3)) +
                a +
                (5 === e.length ? e.charAt(4) + e.charAt(4) : "")),
            9 === e.length)
          )
            return [
              (f = parseInt(e.substr(1, 6), 16)) >> 16,
              (f >> 8) & Ft,
              f & Ft,
              parseInt(e.substr(7), 16) / 255,
            ];
          f = [(e = parseInt(e.substr(1), 16)) >> 16, (e >> 8) & Ft, e & Ft];
        } else if ("hsl" === e.substr(0, 3))
          if (((f = h = e.match(st)), t)) {
            if (~e.indexOf("="))
              return (f = e.match(nt)), i && f.length < 4 && (f[3] = 1), f;
          } else
            (o = (+f[0] % 360) / 360),
              (l = f[1] / 100),
              (s =
                2 * (u = f[2] / 100) -
                (n = u <= 0.5 ? u * (l + 1) : u + l - u * l)),
              3 < f.length && (f[3] *= 1),
              (f[0] = oe(o + 1 / 3, s, n)),
              (f[1] = oe(o, s, n)),
              (f[2] = oe(o - 1 / 3, s, n));
        else f = e.match(st) || $t.transparent;
        f = f.map(Number);
      }
      return (
        t &&
          !h &&
          ((s = f[0] / Ft),
          (n = f[1] / Ft),
          (a = f[2] / Ft),
          (u = ((c = Math.max(s, n, a)) + (d = Math.min(s, n, a))) / 2),
          c === d
            ? (o = l = 0)
            : ((p = c - d),
              (l = 0.5 < u ? p / (2 - c - d) : p / (c + d)),
              (o =
                c === s
                  ? (n - a) / p + (n < a ? 6 : 0)
                  : c === n
                  ? (a - s) / p + 2
                  : (s - n) / p + 4),
              (o *= 60)),
          (f[0] = ~~(o + 0.5)),
          (f[1] = ~~(100 * l + 0.5)),
          (f[2] = ~~(100 * u + 0.5))),
        i && f.length < 4 && (f[3] = 1),
        f
      );
    }
    function ue(e) {
      var t = [],
        i = [],
        s = -1;
      return (
        e.split(Ot).forEach(function (e) {
          var n = e.match(rt) || [];
          t.push.apply(t, n), i.push((s += n.length + 1));
        }),
        (t.c = i),
        t
      );
    }
    function ce(e, t, i) {
      var s,
        n,
        r,
        a,
        o = "",
        l = (e + o).match(Ot),
        u = t ? "hsla(" : "rgba(",
        c = 0;
      if (!l) return e;
      if (
        ((l = l.map(function (e) {
          return (
            (e = le(e, t, 1)) &&
            u +
              (t
                ? e[0] + "," + e[1] + "%," + e[2] + "%," + e[3]
                : e.join(",")) +
              ")"
          );
        })),
        i && ((r = ue(e)), (s = i.c).join(o) !== r.c.join(o)))
      )
        for (a = (n = e.replace(Ot, "1").split(rt)).length - 1; c < a; c++)
          o +=
            n[c] +
            (~s.indexOf(c)
              ? l.shift() || u + "0,0,0,0)"
              : (r.length ? r : l.length ? l : i).shift());
      if (!n)
        for (a = (n = e.split(Ot)).length - 1; c < a; c++) o += n[c] + l[c];
      return o + n[a];
    }
    function de(e) {
      var t,
        i = e.join(" ");
      if (((Ot.lastIndex = 0), Ot.test(i)))
        return (
          (t = Lt.test(i)),
          (e[1] = ce(e[1], t)),
          (e[0] = ce(e[0], t, ue(e[1]))),
          !0
        );
    }
    function pe(e, t) {
      for (var i, s = e._first; s; )
        s instanceof Ut
          ? pe(s, t)
          : !s.vars.yoyoEase ||
            (s._yoyo && s._repeat) ||
            s._yoyo === t ||
            (s.timeline
              ? pe(s.timeline, t)
              : ((i = s._ease),
                (s._ease = s._yEase),
                (s._yEase = i),
                (s._yoyo = t))),
          (s = s._next);
    }
    function he(e, t, i, s) {
      void 0 === i &&
        (i = function (e) {
          return 1 - t(1 - e);
        }),
        void 0 === s &&
          (s = function (e) {
            return e < 0.5 ? t(2 * e) / 2 : 1 - t(2 * (1 - e)) / 2;
          });
      var n,
        r = { easeIn: t, easeOut: i, easeInOut: s };
      return (
        b(e, function (e) {
          for (var t in ((Nt[e] = ct[e] = r),
          (Nt[(n = e.toLowerCase())] = i),
          r))
            Nt[
              n + ("easeIn" === t ? ".in" : "easeOut" === t ? ".out" : ".inOut")
            ] = Nt[e + "." + t] = r[t];
        }),
        r
      );
    }
    function fe(e) {
      return function (t) {
        return t < 0.5 ? (1 - e(1 - 2 * t)) / 2 : 0.5 + e(2 * (t - 0.5)) / 2;
      };
    }
    function me(e, t, i) {
      function s(e) {
        return 1 === e ? 1 : n * Math.pow(2, -10 * e) * et((e - a) * r) + 1;
      }
      var n = 1 <= t ? t : 1,
        r = (i || (e ? 0.3 : 0.45)) / (t < 1 ? t : 1),
        a = (r / Ue) * (Math.asin(1 / n) || 0),
        o =
          "out" === e
            ? s
            : "in" === e
            ? function (e) {
                return 1 - s(1 - e);
              }
            : fe(s);
      return (
        (r = Ue / r),
        (o.config = function (t, i) {
          return me(e, t, i);
        }),
        o
      );
    }
    function ge(e, t) {
      function i(e) {
        return e ? --e * e * ((t + 1) * e + t) + 1 : 0;
      }
      void 0 === t && (t = 1.70158);
      var s =
        "out" === e
          ? i
          : "in" === e
          ? function (e) {
              return 1 - i(1 - e);
            }
          : fe(i);
      return (
        (s.config = function (t) {
          return ge(e, t);
        }),
        s
      );
    }
    var ve,
      ye,
      be,
      we,
      De,
      xe,
      Ce,
      Te,
      Ee,
      _e,
      Se,
      Me,
      ke,
      Ae,
      Pe,
      Fe,
      $e,
      Oe,
      Le,
      Ie,
      ze,
      Ne,
      Be,
      Re,
      He,
      We,
      je,
      Ye,
      Xe = {
        autoSleep: 120,
        force3D: "auto",
        nullTargetWarn: 1,
        units: { lineHeight: "" },
      },
      qe = { duration: 0.5, overwrite: !1, delay: 0 },
      Ve = 1e8,
      Ge = 1 / Ve,
      Ue = 2 * Math.PI,
      Ke = Ue / 4,
      Qe = 0,
      Je = Math.sqrt,
      Ze = Math.cos,
      et = Math.sin,
      tt =
        ("function" == typeof ArrayBuffer && ArrayBuffer.isView) ||
        function () {},
      it = Array.isArray,
      st = /(?:-?\.?\d|\.)+/gi,
      nt = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
      rt = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
      at = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
      ot = /[+-]=-?[.\d]+/,
      lt = /[^,'"\[\]\s]+/gi,
      ut = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
      ct = {},
      dt = { suppressEvents: !0, isStart: !0, kill: !1 },
      pt = { suppressEvents: !0, kill: !1 },
      ht = { suppressEvents: !0 },
      ft = {},
      mt = [],
      gt = {},
      vt = {},
      yt = {},
      bt = 30,
      wt = [],
      Dt = "",
      xt = function (e, t) {
        for (var i in t) e[i] = t[i];
        return e;
      },
      Ct = function (e, t) {
        var i = Math.floor((e /= t));
        return e && i === e ? i - 1 : i;
      },
      Tt = function (e) {
        var t = e.data;
        return "isFromStart" === t || "isStart" === t;
      },
      Et = { _start: 0, endTime: m, totalDuration: m },
      _t = function e(t, i, n) {
        var r,
          a,
          o,
          l = t.labels,
          u = t._recent || Et,
          c = t.duration() >= Ve ? u.endTime(!1) : t._dur;
        return s(i) && (isNaN(i) || i in l)
          ? ((a = i.charAt(0)),
            (o = "%" === i.substr(-1)),
            (r = i.indexOf("=")),
            "<" === a || ">" === a
              ? (0 <= r && (i = i.replace(/=/, "")),
                ("<" === a ? u._start : u.endTime(0 <= u._repeat)) +
                  (parseFloat(i.substr(1)) || 0) *
                    (o ? (r < 0 ? u : n).totalDuration() / 100 : 1))
              : r < 0
              ? (i in l || (l[i] = c), l[i])
              : ((a = parseFloat(i.charAt(r - 1) + i.substr(r + 1))),
                o && n && (a = (a / 100) * (it(n) ? n[0] : n).totalDuration()),
                1 < r ? e(t, i.substr(0, r - 1), n) + a : c + a))
          : null == i
          ? c
          : +i;
      },
      St = function (e, t, i) {
        return i < e ? e : t < i ? t : i;
      },
      Mt = [].slice,
      kt = function (e, t, i) {
        return be && !t && be.selector
          ? be.selector(e)
          : !s(e) || i || (!xe && zt())
          ? it(e)
            ? (function (e, t, i) {
                return (
                  void 0 === i && (i = []),
                  e.forEach(function (e) {
                    return (s(e) && !t) || K(e, 1)
                      ? i.push.apply(i, kt(e))
                      : i.push(e);
                  }) || i
                );
              })(e, i)
            : K(e)
            ? Mt.call(e, 0)
            : e
            ? [e]
            : []
          : Mt.call((t || Ce).querySelectorAll(e), 0);
      },
      At = function (e, t, i, s, n) {
        var r = t - e,
          a = s - i;
        return G(n, function (t) {
          return i + (((t - e) / r) * a || 0);
        });
      },
      Pt = function (e, t, i) {
        var s,
          n,
          r,
          a = e.vars,
          o = a[t],
          l = be,
          u = e._ctx;
        if (o)
          return (
            (s = a[t + "Params"]),
            (n = a.callbackScope || e),
            i && mt.length && T(),
            u && (be = u),
            (r = s ? o.apply(n, s) : o.call(n)),
            (be = l),
            r
          );
      },
      Ft = 255,
      $t = {
        aqua: [0, Ft, Ft],
        lime: [0, Ft, 0],
        silver: [192, 192, 192],
        black: [0, 0, 0],
        maroon: [128, 0, 0],
        teal: [0, 128, 128],
        blue: [0, 0, Ft],
        navy: [0, 0, 128],
        white: [Ft, Ft, Ft],
        olive: [128, 128, 0],
        yellow: [Ft, Ft, 0],
        orange: [Ft, 165, 0],
        gray: [128, 128, 128],
        purple: [128, 0, 128],
        green: [0, 128, 0],
        red: [Ft, 0, 0],
        pink: [Ft, 192, 203],
        cyan: [0, Ft, Ft],
        transparent: [Ft, Ft, Ft, 0],
      },
      Ot = (function () {
        var e,
          t =
            "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b";
        for (e in $t) t += "|" + e + "\\b";
        return new RegExp(t + ")", "gi");
      })(),
      Lt = /hsl[a]?\(/,
      It =
        ((Le = Date.now),
        (Ie = 500),
        (ze = 33),
        (Ne = Le()),
        (Be = Ne),
        (He = Re = 1e3 / 240),
        (Fe = {
          time: 0,
          frame: 0,
          tick: function () {
            jt(!0);
          },
          deltaRatio: function (e) {
            return $e / (1e3 / (e || 60));
          },
          wake: function () {
            Ee &&
              (!xe &&
                u() &&
                ((De = xe = window),
                (Ce = De.document || {}),
                (ct.gsap = Ii),
                (De.gsapVersions || (De.gsapVersions = [])).push(Ii.version),
                d(Te || De.GreenSockGlobals || (!De.gsap && De) || {}),
                (Pe = De.requestAnimationFrame)),
              ke && Fe.sleep(),
              (Ae =
                Pe ||
                function (e) {
                  return setTimeout(e, (He - 1e3 * Fe.time + 1) | 0);
                }),
              (Me = 1),
              jt(2));
          },
          sleep: function () {
            (Pe ? De.cancelAnimationFrame : clearTimeout)(ke),
              (Me = 0),
              (Ae = m);
          },
          lagSmoothing: function (e, t) {
            (Ie = e || 1 / 0), (ze = Math.min(t || 33, Ie));
          },
          fps: function (e) {
            (Re = 1e3 / (e || 240)), (He = 1e3 * Fe.time + Re);
          },
          add: function (e, t, i) {
            var s = t
              ? function (t, i, n, r) {
                  e(t, i, n, r), Fe.remove(s);
                }
              : e;
            return Fe.remove(e), We[i ? "unshift" : "push"](s), zt(), s;
          },
          remove: function (e, t) {
            ~(t = We.indexOf(e)) && We.splice(t, 1) && t <= Oe && Oe--;
          },
          _listeners: (We = []),
        })),
      zt = function () {
        return !Me && It.wake();
      },
      Nt = {},
      Bt = /^[\d.\-M][\d.\-,\s]/,
      Rt = /["']/g,
      Ht = function (e) {
        return function (t) {
          return 1 - e(1 - t);
        };
      },
      Wt = function (e, t) {
        return (
          (e &&
            (n(e)
              ? e
              : Nt[e] ||
                (function (e) {
                  var t = (e + "").split("("),
                    i = Nt[t[0]];
                  return i && 1 < t.length && i.config
                    ? i.config.apply(
                        null,
                        ~e.indexOf("{")
                          ? [
                              (function (e) {
                                for (
                                  var t,
                                    i,
                                    s,
                                    n = {},
                                    r = e.substr(1, e.length - 3).split(":"),
                                    a = r[0],
                                    o = 1,
                                    l = r.length;
                                  o < l;
                                  o++
                                )
                                  (i = r[o]),
                                    (t =
                                      o !== l - 1
                                        ? i.lastIndexOf(",")
                                        : i.length),
                                    (s = i.substr(0, t)),
                                    (n[a] = isNaN(s)
                                      ? s.replace(Rt, "").trim()
                                      : +s),
                                    (a = i.substr(t + 1).trim());
                                return n;
                              })(t[1]),
                            ]
                          : (function (e) {
                              var t = e.indexOf("(") + 1,
                                i = e.indexOf(")"),
                                s = e.indexOf("(", t);
                              return e.substring(
                                t,
                                ~s && s < i ? e.indexOf(")", i + 1) : i
                              );
                            })(e)
                              .split(",")
                              .map(_)
                      )
                    : Nt._CE && Bt.test(e)
                    ? Nt._CE("", e)
                    : i;
                })(e))) ||
          t
        );
      };
    function jt(e) {
      var t,
        i,
        s,
        n,
        r = Le() - Be,
        a = !0 === e;
      if (
        (Ie < r && (Ne += r - ze),
        (0 < (t = (s = (Be += r) - Ne) - He) || a) &&
          ((n = ++Fe.frame),
          ($e = s - 1e3 * Fe.time),
          (Fe.time = s /= 1e3),
          (He += t + (Re <= t ? 4 : Re - t)),
          (i = 1)),
        a || (ke = Ae(jt)),
        i)
      )
        for (Oe = 0; Oe < We.length; Oe++) We[Oe](s, $e, n, e);
    }
    function Yt(e) {
      return e < Ye
        ? je * e * e
        : e < 0.7272727272727273
        ? je * Math.pow(e - 1.5 / 2.75, 2) + 0.75
        : e < 0.9090909090909092
        ? je * (e -= 2.25 / 2.75) * e + 0.9375
        : je * Math.pow(e - 2.625 / 2.75, 2) + 0.984375;
    }
    b("Linear,Quad,Cubic,Quart,Quint,Strong", function (e, t) {
      var i = t < 5 ? t + 1 : t;
      he(
        e + ",Power" + (i - 1),
        t
          ? function (e) {
              return Math.pow(e, i);
            }
          : function (e) {
              return e;
            },
        function (e) {
          return 1 - Math.pow(1 - e, i);
        },
        function (e) {
          return e < 0.5
            ? Math.pow(2 * e, i) / 2
            : 1 - Math.pow(2 * (1 - e), i) / 2;
        }
      );
    }),
      (Nt.Linear.easeNone = Nt.none = Nt.Linear.easeIn),
      he("Elastic", me("in"), me("out"), me()),
      (je = 7.5625),
      (Ye = 1 / 2.75),
      he(
        "Bounce",
        function (e) {
          return 1 - Yt(1 - e);
        },
        Yt
      ),
      he("Expo", function (e) {
        return e ? Math.pow(2, 10 * (e - 1)) : 0;
      }),
      he("Circ", function (e) {
        return -(Je(1 - e * e) - 1);
      }),
      he("Sine", function (e) {
        return 1 === e ? 1 : 1 - Ze(e * Ke);
      }),
      he("Back", ge("in"), ge("out"), ge()),
      (Nt.SteppedEase =
        Nt.steps =
        ct.SteppedEase =
          {
            config: function (e, t) {
              void 0 === e && (e = 1);
              var i = 1 / e,
                s = e + (t ? 0 : 1),
                n = t ? 1 : 0;
              return function (e) {
                return (((s * St(0, 0.99999999, e)) | 0) + n) * i;
              };
            },
          }),
      (qe.ease = Nt["quad.out"]),
      b(
        "onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",
        function (e) {
          return (Dt += e + "," + e + "Params,");
        }
      );
    var Xt,
      qt = function (e, t) {
        (this.id = Qe++),
          ((e._gsap = this).target = e),
          (this.harness = t),
          (this.get = t ? t.get : y),
          (this.set = t ? t.getSetter : di);
      },
      Vt =
        (((Xt = Gt.prototype).delay = function (e) {
          return e || 0 === e
            ? (this.parent &&
                this.parent.smoothChildTiming &&
                this.startTime(this._start + e - this._delay),
              (this._delay = e),
              this)
            : this._delay;
        }),
        (Xt.duration = function (e) {
          return arguments.length
            ? this.totalDuration(
                0 < this._repeat ? e + (e + this._rDelay) * this._repeat : e
              )
            : this.totalDuration() && this._dur;
        }),
        (Xt.totalDuration = function (e) {
          return arguments.length
            ? ((this._dirty = 0),
              X(
                this,
                this._repeat < 0
                  ? e
                  : (e - this._repeat * this._rDelay) / (this._repeat + 1)
              ))
            : this._tDur;
        }),
        (Xt.totalTime = function (e, t) {
          if ((zt(), !arguments.length)) return this._tTime;
          var i = this._dp;
          if (i && i.smoothChildTiming && this._ts) {
            for (R(this, e), !i._dp || i.parent || H(i, this); i && i.parent; )
              i.parent._time !==
                i._start +
                  (0 <= i._ts
                    ? i._tTime / i._ts
                    : (i.totalDuration() - i._tTime) / -i._ts) &&
                i.totalTime(i._tTime, !0),
                (i = i.parent);
            !this.parent &&
              this._dp.autoRemoveChildren &&
              ((0 < this._ts && e < this._tDur) ||
                (this._ts < 0 && 0 < e) ||
                (!this._tDur && !e)) &&
              W(this._dp, this, this._start - this._delay);
          }
          return (
            (this._tTime !== e ||
              (!this._dur && !t) ||
              (this._initted && Math.abs(this._zTime) === Ge) ||
              (!e && !this._initted && (this.add || this._ptLookup))) &&
              (this._ts || (this._pTime = e), E(this, e, t)),
            this
          );
        }),
        (Xt.time = function (e, t) {
          return arguments.length
            ? this.totalTime(
                Math.min(this.totalDuration(), e + z(this)) %
                  (this._dur + this._rDelay) || (e ? this._dur : 0),
                t
              )
            : this._time;
        }),
        (Xt.totalProgress = function (e, t) {
          return arguments.length
            ? this.totalTime(this.totalDuration() * e, t)
            : this.totalDuration()
            ? Math.min(1, this._tTime / this._tDur)
            : this.ratio;
        }),
        (Xt.progress = function (e, t) {
          return arguments.length
            ? this.totalTime(
                this.duration() *
                  (!this._yoyo || 1 & this.iteration() ? e : 1 - e) +
                  z(this),
                t
              )
            : this.duration()
            ? Math.min(1, this._time / this._dur)
            : this.ratio;
        }),
        (Xt.iteration = function (e, t) {
          var i = this.duration() + this._rDelay;
          return arguments.length
            ? this.totalTime(this._time + (e - 1) * i, t)
            : this._repeat
            ? Ct(this._tTime, i) + 1
            : 1;
        }),
        (Xt.timeScale = function (e) {
          if (!arguments.length) return this._rts === -Ge ? 0 : this._rts;
          if (this._rts === e) return this;
          var t =
            this.parent && this._ts ? N(this.parent._time, this) : this._tTime;
          return (
            (this._rts = +e || 0),
            (this._ts = this._ps || e === -Ge ? 0 : this._rts),
            this.totalTime(St(-this._delay, this._tDur, t), !0),
            B(this),
            (function (e) {
              for (var t = e.parent; t && t.parent; )
                (t._dirty = 1), t.totalDuration(), (t = t.parent);
              return e;
            })(this)
          );
        }),
        (Xt.paused = function (e) {
          return arguments.length
            ? (this._ps !== e &&
                ((this._ps = e)
                  ? ((this._pTime =
                      this._tTime || Math.max(-this._delay, this.rawTime())),
                    (this._ts = this._act = 0))
                  : (zt(),
                    (this._ts = this._rts),
                    this.totalTime(
                      this.parent && !this.parent.smoothChildTiming
                        ? this.rawTime()
                        : this._tTime || this._pTime,
                      1 === this.progress() &&
                        Math.abs(this._zTime) !== Ge &&
                        (this._tTime -= Ge)
                    ))),
              this)
            : this._ps;
        }),
        (Xt.startTime = function (e) {
          if (arguments.length) {
            this._start = e;
            var t = this.parent || this._dp;
            return (
              !t || (!t._sort && this.parent) || W(t, this, e - this._delay),
              this
            );
          }
          return this._start;
        }),
        (Xt.endTime = function (e) {
          return (
            this._start +
            (l(e) ? this.totalDuration() : this.duration()) /
              Math.abs(this._ts || 1)
          );
        }),
        (Xt.rawTime = function (e) {
          var t = this.parent || this._dp;
          return t
            ? e &&
              (!this._ts ||
                (this._repeat && this._time && this.totalProgress() < 1))
              ? this._tTime % (this._dur + this._rDelay)
              : this._ts
              ? N(t.rawTime(e), this)
              : this._tTime
            : this._tTime;
        }),
        (Xt.revert = function (e) {
          void 0 === e && (e = ht);
          var t = ye;
          return (
            (ye = e),
            (this._initted || this._startAt) &&
              (this.timeline && this.timeline.revert(e),
              this.totalTime(-0.01, e.suppressEvents)),
            "nested" !== this.data && !1 !== e.kill && this.kill(),
            (ye = t),
            this
          );
        }),
        (Xt.globalTime = function (e) {
          for (var t = this, i = arguments.length ? e : t.rawTime(); t; )
            (i = t._start + i / (t._ts || 1)), (t = t._dp);
          return !this.parent && this._sat
            ? this._sat.vars.immediateRender
              ? -1
              : this._sat.globalTime(e)
            : i;
        }),
        (Xt.repeat = function (e) {
          return arguments.length
            ? ((this._repeat = e === 1 / 0 ? -2 : e), q(this))
            : -2 === this._repeat
            ? 1 / 0
            : this._repeat;
        }),
        (Xt.repeatDelay = function (e) {
          if (arguments.length) {
            var t = this._time;
            return (this._rDelay = e), q(this), t ? this.time(t) : this;
          }
          return this._rDelay;
        }),
        (Xt.yoyo = function (e) {
          return arguments.length ? ((this._yoyo = e), this) : this._yoyo;
        }),
        (Xt.seek = function (e, t) {
          return this.totalTime(_t(this, e), l(t));
        }),
        (Xt.restart = function (e, t) {
          return this.play().totalTime(e ? -this._delay : 0, l(t));
        }),
        (Xt.play = function (e, t) {
          return null != e && this.seek(e, t), this.reversed(!1).paused(!1);
        }),
        (Xt.reverse = function (e, t) {
          return (
            null != e && this.seek(e || this.totalDuration(), t),
            this.reversed(!0).paused(!1)
          );
        }),
        (Xt.pause = function (e, t) {
          return null != e && this.seek(e, t), this.paused(!0);
        }),
        (Xt.resume = function () {
          return this.paused(!1);
        }),
        (Xt.reversed = function (e) {
          return arguments.length
            ? (!!e !== this.reversed() &&
                this.timeScale(-this._rts || (e ? -Ge : 0)),
              this)
            : this._rts < 0;
        }),
        (Xt.invalidate = function () {
          return (this._initted = this._act = 0), (this._zTime = -Ge), this;
        }),
        (Xt.isActive = function () {
          var e,
            t = this.parent || this._dp,
            i = this._start;
          return !(
            t &&
            !(
              this._ts &&
              this._initted &&
              t.isActive() &&
              (e = t.rawTime(!0)) >= i &&
              e < this.endTime(!0) - Ge
            )
          );
        }),
        (Xt.eventCallback = function (e, t, i) {
          var s = this.vars;
          return 1 < arguments.length
            ? (t
                ? ((s[e] = t),
                  i && (s[e + "Params"] = i),
                  "onUpdate" === e && (this._onUpdate = t))
                : delete s[e],
              this)
            : s[e];
        }),
        (Xt.then = function (e) {
          var t = this;
          return new Promise(function (i) {
            function s() {
              var e = t.then;
              (t.then = null),
                n(r) && (r = r(t)) && (r.then || r === t) && (t.then = e),
                i(r),
                (t.then = e);
            }
            var r = n(e) ? e : S;
            (t._initted && 1 === t.totalProgress() && 0 <= t._ts) ||
            (!t._tTime && t._ts < 0)
              ? s()
              : (t._prom = s);
          });
        }),
        (Xt.kill = function () {
          ae(this);
        }),
        Gt);
    function Gt(e) {
      (this.vars = e),
        (this._delay = +e.delay || 0),
        (this._repeat = e.repeat === 1 / 0 ? -2 : e.repeat || 0) &&
          ((this._rDelay = e.repeatDelay || 0),
          (this._yoyo = !!e.yoyo || !!e.yoyoEase)),
        (this._ts = 1),
        X(this, +e.duration, 1, 1),
        (this.data = e.data),
        be && (this._ctx = be).data.push(this),
        Me || It.wake();
    }
    M(Vt.prototype, {
      _time: 0,
      _start: 0,
      _end: 0,
      _tTime: 0,
      _tDur: 0,
      _dirty: 0,
      _repeat: 0,
      _yoyo: !1,
      parent: null,
      _initted: !1,
      _rDelay: 0,
      _ts: 1,
      _dp: 0,
      ratio: 0,
      _zTime: -Ge,
      _prom: 0,
      _ps: !1,
      _rts: 1,
    });
    var Ut = (function (e) {
      function a(t, s) {
        var n;
        return (
          void 0 === t && (t = {}),
          ((n = e.call(this, t) || this).labels = {}),
          (n.smoothChildTiming = !!t.smoothChildTiming),
          (n.autoRemoveChildren = !!t.autoRemoveChildren),
          (n._sort = l(t.sortChildren)),
          we && W(t.parent || we, i(n), s),
          t.reversed && n.reverse(),
          t.paused && n.paused(!0),
          t.scrollTrigger && j(i(n), t.scrollTrigger),
          n
        );
      }
      t(a, e);
      var o = a.prototype;
      return (
        (o.to = function (e, t, i) {
          return V(0, arguments, this), this;
        }),
        (o.from = function (e, t, i) {
          return V(1, arguments, this), this;
        }),
        (o.fromTo = function (e, t, i, s) {
          return V(2, arguments, this), this;
        }),
        (o.set = function (e, t, i) {
          return (
            (t.duration = 0),
            (t.parent = this),
            P(t).repeatDelay || (t.repeat = 0),
            (t.immediateRender = !!t.immediateRender),
            new ri(e, t, _t(this, i), 1),
            this
          );
        }),
        (o.call = function (e, t, i) {
          return W(this, ri.delayedCall(0, e, t), i);
        }),
        (o.staggerTo = function (e, t, i, s, n, r, a) {
          return (
            (i.duration = t),
            (i.stagger = i.stagger || s),
            (i.onComplete = r),
            (i.onCompleteParams = a),
            (i.parent = this),
            new ri(e, i, _t(this, n)),
            this
          );
        }),
        (o.staggerFrom = function (e, t, i, s, n, r, a) {
          return (
            (i.runBackwards = 1),
            (P(i).immediateRender = l(i.immediateRender)),
            this.staggerTo(e, t, i, s, n, r, a)
          );
        }),
        (o.staggerFromTo = function (e, t, i, s, n, r, a, o) {
          return (
            (s.startAt = i),
            (P(s).immediateRender = l(s.immediateRender)),
            this.staggerTo(e, t, s, n, r, a, o)
          );
        }),
        (o.render = function (e, t, i) {
          var s,
            n,
            r,
            a,
            o,
            l,
            u,
            c,
            d,
            p,
            h,
            f,
            m = this._time,
            g = this._dirty ? this.totalDuration() : this._tDur,
            v = this._dur,
            y = e <= 0 ? 0 : D(e),
            b = this._zTime < 0 != e < 0 && (this._initted || !v);
          if (
            (this !== we && g < y && 0 <= e && (y = g),
            y !== this._tTime || i || b)
          ) {
            if (
              (m !== this._time &&
                v &&
                ((y += this._time - m), (e += this._time - m)),
              (s = y),
              (d = this._start),
              (l = !(c = this._ts)),
              b && (v || (m = this._zTime), (!e && t) || (this._zTime = e)),
              this._repeat)
            ) {
              if (
                ((h = this._yoyo),
                (o = v + this._rDelay),
                this._repeat < -1 && e < 0)
              )
                return this.totalTime(100 * o + e, t, i);
              if (
                ((s = D(y % o)),
                y === g
                  ? ((a = this._repeat), (s = v))
                  : ((a = ~~(y / o)) && a === y / o && ((s = v), a--),
                    v < s && (s = v)),
                (p = Ct(this._tTime, o)),
                !m && this._tTime && p !== a && (p = a),
                h && 1 & a && ((s = v - s), (f = 1)),
                a !== p && !this._lock)
              ) {
                var w = h && 1 & p,
                  x = w === (h && 1 & a);
                if (
                  (a < p && (w = !w),
                  (m = w ? 0 : v),
                  (this._lock = 1),
                  (this.render(m || (f ? 0 : D(a * o)), t, !v)._lock = 0),
                  (this._tTime = y),
                  !t && this.parent && Pt(this, "onRepeat"),
                  this.vars.repeatRefresh &&
                    !f &&
                    (this.invalidate()._lock = 1),
                  (m && m !== this._time) ||
                    l != !this._ts ||
                    (this.vars.onRepeat && !this.parent && !this._act))
                )
                  return this;
                if (
                  ((v = this._dur),
                  (g = this._tDur),
                  x &&
                    ((this._lock = 2),
                    (m = w ? v : -1e-4),
                    this.render(m, !0),
                    this.vars.repeatRefresh && !f && this.invalidate()),
                  (this._lock = 0),
                  !this._ts && !l)
                )
                  return this;
                pe(this, f);
              }
            }
            if (
              (this._hasPause &&
                !this._forcing &&
                this._lock < 2 &&
                (u = (function (e, t, i) {
                  var s;
                  if (t < i)
                    for (s = e._first; s && s._start <= i; ) {
                      if ("isPause" === s.data && s._start > t) return s;
                      s = s._next;
                    }
                  else
                    for (s = e._last; s && s._start >= i; ) {
                      if ("isPause" === s.data && s._start < t) return s;
                      s = s._prev;
                    }
                })(this, D(m), D(s))) &&
                (y -= s - (s = u._start)),
              (this._tTime = y),
              (this._time = s),
              (this._act = !c),
              this._initted ||
                ((this._onUpdate = this.vars.onUpdate),
                (this._initted = 1),
                (this._zTime = e),
                (m = 0)),
              !m && s && !t && (Pt(this, "onStart"), this._tTime !== y))
            )
              return this;
            if (m <= s && 0 <= e)
              for (n = this._first; n; ) {
                if (
                  ((r = n._next), (n._act || s >= n._start) && n._ts && u !== n)
                ) {
                  if (n.parent !== this) return this.render(e, t, i);
                  if (
                    (n.render(
                      0 < n._ts
                        ? (s - n._start) * n._ts
                        : (n._dirty ? n.totalDuration() : n._tDur) +
                            (s - n._start) * n._ts,
                      t,
                      i
                    ),
                    s !== this._time || (!this._ts && !l))
                  ) {
                    (u = 0), r && (y += this._zTime = -Ge);
                    break;
                  }
                }
                n = r;
              }
            else {
              n = this._last;
              for (var C = e < 0 ? e : s; n; ) {
                if (
                  ((r = n._prev), (n._act || C <= n._end) && n._ts && u !== n)
                ) {
                  if (n.parent !== this) return this.render(e, t, i);
                  if (
                    (n.render(
                      0 < n._ts
                        ? (C - n._start) * n._ts
                        : (n._dirty ? n.totalDuration() : n._tDur) +
                            (C - n._start) * n._ts,
                      t,
                      i || (ye && (n._initted || n._startAt))
                    ),
                    s !== this._time || (!this._ts && !l))
                  ) {
                    (u = 0), r && (y += this._zTime = C ? -Ge : Ge);
                    break;
                  }
                }
                n = r;
              }
            }
            if (
              u &&
              !t &&
              (this.pause(),
              (u.render(m <= s ? 0 : -Ge)._zTime = m <= s ? 1 : -1),
              this._ts)
            )
              return (this._start = d), B(this), this.render(e, t, i);
            this._onUpdate && !t && Pt(this, "onUpdate", !0),
              ((y === g && this._tTime >= this.totalDuration()) || (!y && m)) &&
                ((d !== this._start && Math.abs(c) === Math.abs(this._ts)) ||
                  this._lock ||
                  ((!e && v) ||
                    !((y === g && 0 < this._ts) || (!y && this._ts < 0)) ||
                    O(this, 1),
                  t ||
                    (e < 0 && !m) ||
                    (!y && !m && g) ||
                    (Pt(
                      this,
                      y === g && 0 <= e ? "onComplete" : "onReverseComplete",
                      !0
                    ),
                    !this._prom ||
                      (y < g && 0 < this.timeScale()) ||
                      this._prom())));
          }
          return this;
        }),
        (o.add = function (e, t) {
          var i = this;
          if ((r(t) || (t = _t(this, t, e)), !(e instanceof Vt))) {
            if (it(e))
              return (
                e.forEach(function (e) {
                  return i.add(e, t);
                }),
                this
              );
            if (s(e)) return this.addLabel(e, t);
            if (!n(e)) return this;
            e = ri.delayedCall(0, e);
          }
          return this !== e ? W(this, e, t) : this;
        }),
        (o.getChildren = function (e, t, i, s) {
          void 0 === e && (e = !0),
            void 0 === t && (t = !0),
            void 0 === i && (i = !0),
            void 0 === s && (s = -Ve);
          for (var n = [], r = this._first; r; )
            r._start >= s &&
              (r instanceof ri
                ? t && n.push(r)
                : (i && n.push(r),
                  e && n.push.apply(n, r.getChildren(!0, t, i)))),
              (r = r._next);
          return n;
        }),
        (o.getById = function (e) {
          for (var t = this.getChildren(1, 1, 1), i = t.length; i--; )
            if (t[i].vars.id === e) return t[i];
        }),
        (o.remove = function (e) {
          return s(e)
            ? this.removeLabel(e)
            : n(e)
            ? this.killTweensOf(e)
            : ($(this, e),
              e === this._recent && (this._recent = this._last),
              L(this));
        }),
        (o.totalTime = function (t, i) {
          return arguments.length
            ? ((this._forcing = 1),
              !this._dp &&
                this._ts &&
                (this._start = D(
                  It.time -
                    (0 < this._ts
                      ? t / this._ts
                      : (this.totalDuration() - t) / -this._ts)
                )),
              e.prototype.totalTime.call(this, t, i),
              (this._forcing = 0),
              this)
            : this._tTime;
        }),
        (o.addLabel = function (e, t) {
          return (this.labels[e] = _t(this, t)), this;
        }),
        (o.removeLabel = function (e) {
          return delete this.labels[e], this;
        }),
        (o.addPause = function (e, t, i) {
          var s = ri.delayedCall(0, t || m, i);
          return (
            (s.data = "isPause"), (this._hasPause = 1), W(this, s, _t(this, e))
          );
        }),
        (o.removePause = function (e) {
          var t = this._first;
          for (e = _t(this, e); t; )
            t._start === e && "isPause" === t.data && O(t), (t = t._next);
        }),
        (o.killTweensOf = function (e, t, i) {
          for (var s = this.getTweensOf(e, i), n = s.length; n--; )
            Jt !== s[n] && s[n].kill(e, t);
          return this;
        }),
        (o.getTweensOf = function (e, t) {
          for (var i, s = [], n = kt(e), a = this._first, o = r(t); a; )
            a instanceof ri
              ? C(a._targets, n) &&
                (o
                  ? (!Jt || (a._initted && a._ts)) &&
                    a.globalTime(0) <= t &&
                    a.globalTime(a.totalDuration()) > t
                  : !t || a.isActive()) &&
                s.push(a)
              : (i = a.getTweensOf(n, t)).length && s.push.apply(s, i),
              (a = a._next);
          return s;
        }),
        (o.tweenTo = function (e, t) {
          t = t || {};
          var i,
            s = this,
            n = _t(s, e),
            r = t.startAt,
            a = t.onStart,
            o = t.onStartParams,
            l = t.immediateRender,
            u = ri.to(
              s,
              M(
                {
                  ease: t.ease || "none",
                  lazy: !1,
                  immediateRender: !1,
                  time: n,
                  overwrite: "auto",
                  duration:
                    t.duration ||
                    Math.abs(
                      (n - (r && "time" in r ? r.time : s._time)) /
                        s.timeScale()
                    ) ||
                    Ge,
                  onStart: function () {
                    if ((s.pause(), !i)) {
                      var e =
                        t.duration ||
                        Math.abs(
                          (n - (r && "time" in r ? r.time : s._time)) /
                            s.timeScale()
                        );
                      u._dur !== e && X(u, e, 0, 1).render(u._time, !0, !0),
                        (i = 1);
                    }
                    a && a.apply(u, o || []);
                  },
                },
                t
              )
            );
          return l ? u.render(0) : u;
        }),
        (o.tweenFromTo = function (e, t, i) {
          return this.tweenTo(t, M({ startAt: { time: _t(this, e) } }, i));
        }),
        (o.recent = function () {
          return this._recent;
        }),
        (o.nextLabel = function (e) {
          return void 0 === e && (e = this._time), re(this, _t(this, e));
        }),
        (o.previousLabel = function (e) {
          return void 0 === e && (e = this._time), re(this, _t(this, e), 1);
        }),
        (o.currentLabel = function (e) {
          return arguments.length
            ? this.seek(e, !0)
            : this.previousLabel(this._time + Ge);
        }),
        (o.shiftChildren = function (e, t, i) {
          void 0 === i && (i = 0);
          for (var s, n = this._first, r = this.labels; n; )
            n._start >= i && ((n._start += e), (n._end += e)), (n = n._next);
          if (t) for (s in r) r[s] >= i && (r[s] += e);
          return L(this);
        }),
        (o.invalidate = function (t) {
          var i = this._first;
          for (this._lock = 0; i; ) i.invalidate(t), (i = i._next);
          return e.prototype.invalidate.call(this, t);
        }),
        (o.clear = function (e) {
          void 0 === e && (e = !0);
          for (var t, i = this._first; i; )
            (t = i._next), this.remove(i), (i = t);
          return (
            this._dp && (this._time = this._tTime = this._pTime = 0),
            e && (this.labels = {}),
            L(this)
          );
        }),
        (o.totalDuration = function (e) {
          var t,
            i,
            s,
            n = 0,
            r = this,
            a = r._last,
            o = Ve;
          if (arguments.length)
            return r.timeScale(
              (r._repeat < 0 ? r.duration() : r.totalDuration()) /
                (r.reversed() ? -e : e)
            );
          if (r._dirty) {
            for (s = r.parent; a; )
              (t = a._prev),
                a._dirty && a.totalDuration(),
                o < (i = a._start) && r._sort && a._ts && !r._lock
                  ? ((r._lock = 1), (W(r, a, i - a._delay, 1)._lock = 0))
                  : (o = i),
                i < 0 &&
                  a._ts &&
                  ((n -= i),
                  ((!s && !r._dp) || (s && s.smoothChildTiming)) &&
                    ((r._start += i / r._ts), (r._time -= i), (r._tTime -= i)),
                  r.shiftChildren(-i, !1, -1 / 0),
                  (o = 0)),
                a._end > n && a._ts && (n = a._end),
                (a = t);
            X(r, r === we && r._time > n ? r._time : n, 1, 1), (r._dirty = 0);
          }
          return r._tDur;
        }),
        (a.updateRoot = function (e) {
          if ((we._ts && (E(we, N(e, we)), (_e = It.frame)), It.frame >= bt)) {
            bt += Xe.autoSleep || 120;
            var t = we._first;
            if ((!t || !t._ts) && Xe.autoSleep && It._listeners.length < 2) {
              for (; t && !t._ts; ) t = t._next;
              t || It.sleep();
            }
          }
        }),
        a
      );
    })(Vt);
    function Kt(e, t, i, r, a, l) {
      var u, c, d, p;
      if (
        vt[e] &&
        !1 !==
          (u = new vt[e]()).init(
            a,
            u.rawVars
              ? t[e]
              : (function (e, t, i, r, a) {
                  if (
                    (n(e) && (e = ii(e, a, t, i, r)),
                    !o(e) || (e.style && e.nodeType) || it(e) || tt(e))
                  )
                    return s(e) ? ii(e, a, t, i, r) : e;
                  var l,
                    u = {};
                  for (l in e) u[l] = ii(e[l], a, t, i, r);
                  return u;
                })(t[e], r, a, l, i),
            i,
            r,
            l
          ) &&
        ((i._pt = c = new bi(i._pt, a, e, 0, 1, u.render, u, 0, u.priority)),
        i !== Se)
      )
        for (d = i._ptLookup[i._targets.indexOf(a)], p = u._props.length; p--; )
          d[u._props[p]] = c;
      return u;
    }
    function Qt(e, t, i, s) {
      var n,
        r,
        a = t.ease || s || "power1.inOut";
      if (it(t))
        (r = i[e] || (i[e] = [])),
          t.forEach(function (e, i) {
            return r.push({ t: (i / (t.length - 1)) * 100, v: e, e: a });
          });
      else
        for (n in t)
          (r = i[n] || (i[n] = [])),
            "ease" === n || r.push({ t: parseFloat(e), v: t[n], e: a });
    }
    M(Ut.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 });
    var Jt,
      Zt,
      ei = function (e, t, i, r, a, o, l, u, c, d) {
        n(r) && (r = r(a || 0, e, o));
        var h,
          f = e[t],
          m =
            "get" !== i
              ? i
              : n(f)
              ? c
                ? e[
                    t.indexOf("set") || !n(e["get" + t.substr(3)])
                      ? t
                      : "get" + t.substr(3)
                  ](c)
                : e[t]()
              : f,
          g = n(f) ? (c ? ci : ui) : li;
        if (
          (s(r) &&
            (~r.indexOf("random(") && (r = ne(r)),
            "=" === r.charAt(1) &&
              ((!(h = x(m, r) + (U(m) || 0)) && 0 !== h) || (r = h))),
          !d || m !== r || Zt)
        )
          return isNaN(m * r) || "" === r
            ? (f || t in e || p(t, r),
              function (e, t, i, s, n, r, a) {
                var o,
                  l,
                  u,
                  c,
                  d,
                  p,
                  h,
                  f,
                  m = new bi(this._pt, e, t, 0, 1, fi, null, n),
                  g = 0,
                  v = 0;
                for (
                  m.b = i,
                    m.e = s,
                    i += "",
                    (h = ~(s += "").indexOf("random(")) && (s = ne(s)),
                    r && (r((f = [i, s]), e, t), (i = f[0]), (s = f[1])),
                    l = i.match(at) || [];
                  (o = at.exec(s));

                )
                  (c = o[0]),
                    (d = s.substring(g, o.index)),
                    u ? (u = (u + 1) % 5) : "rgba(" === d.substr(-5) && (u = 1),
                    c !== l[v++] &&
                      ((p = parseFloat(l[v - 1]) || 0),
                      (m._pt = {
                        _next: m._pt,
                        p: d || 1 === v ? d : ",",
                        s: p,
                        c:
                          "=" === c.charAt(1) ? x(p, c) - p : parseFloat(c) - p,
                        m: u && u < 4 ? Math.round : 0,
                      }),
                      (g = at.lastIndex));
                return (
                  (m.c = g < s.length ? s.substring(g, s.length) : ""),
                  (m.fp = a),
                  (ot.test(s) || h) && (m.e = 0),
                  (this._pt = m)
                );
              }.call(this, e, t, m, r, g, u || Xe.stringFilter, c))
            : ((h = new bi(
                this._pt,
                e,
                t,
                +m || 0,
                r - (m || 0),
                "boolean" == typeof f ? hi : pi,
                0,
                g
              )),
              c && (h.fp = c),
              l && h.modifier(l, this, e),
              (this._pt = h));
      },
      ti = function e(t, i, s) {
        var n,
          r,
          a,
          o,
          u,
          c,
          d,
          p,
          h,
          f,
          m,
          y,
          b,
          w = t.vars,
          D = w.ease,
          x = w.startAt,
          C = w.immediateRender,
          E = w.lazy,
          _ = w.onUpdate,
          S = w.onUpdateParams,
          k = w.callbackScope,
          P = w.runBackwards,
          F = w.yoyoEase,
          $ = w.keyframes,
          L = w.autoRevert,
          I = t._dur,
          z = t._startAt,
          N = t._targets,
          B = t.parent,
          R = B && "nested" === B.data ? B.vars.targets : N,
          H = "auto" === t._overwrite && !ve,
          W = t.timeline;
        if (
          (!W || ($ && D) || (D = "none"),
          (t._ease = Wt(D, qe.ease)),
          (t._yEase = F ? Ht(Wt(!0 === F ? D : F, qe.ease)) : 0),
          F &&
            t._yoyo &&
            !t._repeat &&
            ((F = t._yEase), (t._yEase = t._ease), (t._ease = F)),
          (t._from = !W && !!w.runBackwards),
          !W || ($ && !w.stagger))
        ) {
          if (
            ((y = (p = N[0] ? v(N[0]).harness : 0) && w[p.prop]),
            (n = A(w, ft)),
            z &&
              (z._zTime < 0 && z.progress(1),
              i < 0 && P && C && !L
                ? z.render(-1, !0)
                : z.revert(P && I ? pt : dt),
              (z._lazy = 0)),
            x)
          ) {
            if (
              (O(
                (t._startAt = ri.set(
                  N,
                  M(
                    {
                      data: "isStart",
                      overwrite: !1,
                      parent: B,
                      immediateRender: !0,
                      lazy: !z && l(E),
                      startAt: null,
                      delay: 0,
                      onUpdate: _,
                      onUpdateParams: S,
                      callbackScope: k,
                      stagger: 0,
                    },
                    x
                  )
                ))
              ),
              (t._startAt._dp = 0),
              (t._startAt._sat = t),
              i < 0 && (ye || (!C && !L)) && t._startAt.revert(pt),
              C && I && i <= 0 && s <= 0)
            )
              return void (i && (t._zTime = i));
          } else if (P && I && !z)
            if (
              (i && (C = !1),
              (a = M(
                {
                  overwrite: !1,
                  data: "isFromStart",
                  lazy: C && !z && l(E),
                  immediateRender: C,
                  stagger: 0,
                  parent: B,
                },
                n
              )),
              y && (a[p.prop] = y),
              O((t._startAt = ri.set(N, a))),
              (t._startAt._dp = 0),
              (t._startAt._sat = t),
              i < 0 && (ye ? t._startAt.revert(pt) : t._startAt.render(-1, !0)),
              (t._zTime = i),
              C)
            ) {
              if (!i) return;
            } else e(t._startAt, Ge, Ge);
          for (
            t._pt = t._ptCache = 0, E = (I && l(E)) || (E && !I), r = 0;
            r < N.length;
            r++
          ) {
            if (
              ((d = (u = N[r])._gsap || g(N)[r]._gsap),
              (t._ptLookup[r] = f = {}),
              gt[d.id] && mt.length && T(),
              (m = R === N ? r : R.indexOf(u)),
              p &&
                !1 !== (h = new p()).init(u, y || n, t, m, R) &&
                ((t._pt = o =
                  new bi(t._pt, u, h.name, 0, 1, h.render, h, 0, h.priority)),
                h._props.forEach(function (e) {
                  f[e] = o;
                }),
                h.priority && (c = 1)),
              !p || y)
            )
              for (a in n)
                vt[a] && (h = Kt(a, n, t, m, u, R))
                  ? h.priority && (c = 1)
                  : (f[a] = o =
                      ei.call(t, u, a, "get", n[a], m, R, 0, w.stringFilter));
            t._op && t._op[r] && t.kill(u, t._op[r]),
              H &&
                t._pt &&
                ((Jt = t),
                we.killTweensOf(u, f, t.globalTime(i)),
                (b = !t.parent),
                (Jt = 0)),
              t._pt && E && (gt[d.id] = 1);
          }
          c && yi(t), t._onInit && t._onInit(t);
        }
        (t._onUpdate = _),
          (t._initted = (!t._op || t._pt) && !b),
          $ && i <= 0 && W.render(Ve, !0, !0);
      },
      ii = function (e, t, i, r, a) {
        return n(e)
          ? e.call(t, i, r, a)
          : s(e) && ~e.indexOf("random(")
          ? ne(e)
          : e;
      },
      si = Dt + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
      ni = {};
    b(si + ",id,stagger,delay,duration,paused,scrollTrigger", function (e) {
      return (ni[e] = 1);
    });
    var ri = (function (e) {
      function n(t, s, n, a) {
        var u;
        "number" == typeof s && ((n.duration = s), (s = n), (n = null));
        var d,
          p,
          f,
          m,
          v,
          y,
          b,
          w,
          x = (u = e.call(this, a ? s : P(s)) || this).vars,
          C = x.duration,
          T = x.delay,
          E = x.immediateRender,
          _ = x.stagger,
          S = x.overwrite,
          k = x.keyframes,
          F = x.defaults,
          $ = x.scrollTrigger,
          O = x.yoyoEase,
          L = s.parent || we,
          I = (it(t) || tt(t) ? r(t[0]) : "length" in s) ? [t] : kt(t);
        if (
          ((u._targets = I.length
            ? g(I)
            : h(
                "GSAP target " + t + " not found. https://greensock.com",
                !Xe.nullTargetWarn
              ) || []),
          (u._ptLookup = []),
          (u._overwrite = S),
          k || _ || c(C) || c(T))
        ) {
          if (
            ((s = u.vars),
            (d = u.timeline =
              new Ut({
                data: "nested",
                defaults: F || {},
                targets: L && "nested" === L.data ? L.vars.targets : I,
              })).kill(),
            (d.parent = d._dp = i(u)),
            (d._start = 0),
            _ || c(C) || c(T))
          ) {
            if (((m = I.length), (b = _ && Z(_)), o(_)))
              for (v in _) ~si.indexOf(v) && ((w = w || {})[v] = _[v]);
            for (p = 0; p < m; p++)
              ((f = A(s, ni)).stagger = 0),
                O && (f.yoyoEase = O),
                w && xt(f, w),
                (y = I[p]),
                (f.duration = +ii(C, i(u), p, y, I)),
                (f.delay = (+ii(T, i(u), p, y, I) || 0) - u._delay),
                !_ &&
                  1 === m &&
                  f.delay &&
                  ((u._delay = T = f.delay), (u._start += T), (f.delay = 0)),
                d.to(y, f, b ? b(p, y, I) : 0),
                (d._ease = Nt.none);
            d.duration() ? (C = T = 0) : (u.timeline = 0);
          } else if (k) {
            P(M(d.vars.defaults, { ease: "none" })),
              (d._ease = Wt(k.ease || s.ease || "none"));
            var z,
              N,
              B,
              R = 0;
            if (it(k))
              k.forEach(function (e) {
                return d.to(I, e, ">");
              }),
                d.duration();
            else {
              for (v in ((f = {}), k))
                "ease" === v || "easeEach" === v || Qt(v, k[v], f, k.easeEach);
              for (v in f)
                for (
                  z = f[v].sort(function (e, t) {
                    return e.t - t.t;
                  }),
                    p = R = 0;
                  p < z.length;
                  p++
                )
                  ((B = {
                    ease: (N = z[p]).e,
                    duration: ((N.t - (p ? z[p - 1].t : 0)) / 100) * C,
                  })[v] = N.v),
                    d.to(I, B, R),
                    (R += B.duration);
              d.duration() < C && d.to({}, { duration: C - d.duration() });
            }
          }
          C || u.duration((C = d.duration()));
        } else u.timeline = 0;
        return (
          !0 !== S || ve || ((Jt = i(u)), we.killTweensOf(I), (Jt = 0)),
          W(L, i(u), n),
          s.reversed && u.reverse(),
          s.paused && u.paused(!0),
          (E ||
            (!C &&
              !k &&
              u._start === D(L._time) &&
              l(E) &&
              (function e(t) {
                return !t || (t._ts && e(t.parent));
              })(i(u)) &&
              "nested" !== L.data)) &&
            ((u._tTime = -Ge), u.render(Math.max(0, -T) || 0)),
          $ && j(i(u), $),
          u
        );
      }
      t(n, e);
      var a = n.prototype;
      return (
        (a.render = function (e, t, i) {
          var s,
            n,
            r,
            a,
            o,
            l,
            u,
            c,
            d,
            p = this._time,
            h = this._tDur,
            f = this._dur,
            m = e < 0,
            g = h - Ge < e && !m ? h : e < Ge ? 0 : e;
          if (f) {
            if (
              g !== this._tTime ||
              !e ||
              i ||
              (!this._initted && this._tTime) ||
              (this._startAt && this._zTime < 0 != m)
            ) {
              if (((s = g), (c = this.timeline), this._repeat)) {
                if (((a = f + this._rDelay), this._repeat < -1 && m))
                  return this.totalTime(100 * a + e, t, i);
                if (
                  ((s = D(g % a)),
                  g === h
                    ? ((r = this._repeat), (s = f))
                    : ((r = ~~(g / a)) && r === g / a && ((s = f), r--),
                      f < s && (s = f)),
                  (l = this._yoyo && 1 & r) && ((d = this._yEase), (s = f - s)),
                  (o = Ct(this._tTime, a)),
                  s === p && !i && this._initted)
                )
                  return (this._tTime = g), this;
                r !== o &&
                  (c && this._yEase && pe(c, l),
                  !this.vars.repeatRefresh ||
                    l ||
                    this._lock ||
                    ((this._lock = i = 1),
                    (this.render(D(a * r), !0).invalidate()._lock = 0)));
              }
              if (!this._initted) {
                if (Y(this, m ? e : s, i, t, g)) return (this._tTime = 0), this;
                if (p !== this._time) return this;
                if (f !== this._dur) return this.render(e, t, i);
              }
              if (
                ((this._tTime = g),
                (this._time = s),
                !this._act && this._ts && ((this._act = 1), (this._lazy = 0)),
                (this.ratio = u = (d || this._ease)(s / f)),
                this._from && (this.ratio = u = 1 - u),
                s && !p && !t && (Pt(this, "onStart"), this._tTime !== g))
              )
                return this;
              for (n = this._pt; n; ) n.r(u, n.d), (n = n._next);
              (c &&
                c.render(
                  e < 0 ? e : !s && l ? -Ge : c._dur * c._ease(s / this._dur),
                  t,
                  i
                )) ||
                (this._startAt && (this._zTime = e)),
                this._onUpdate &&
                  !t &&
                  (m && I(this, e, 0, i), Pt(this, "onUpdate")),
                this._repeat &&
                  r !== o &&
                  this.vars.onRepeat &&
                  !t &&
                  this.parent &&
                  Pt(this, "onRepeat"),
                (g !== this._tDur && g) ||
                  this._tTime !== g ||
                  (m && !this._onUpdate && I(this, e, 0, !0),
                  (!e && f) ||
                    !(
                      (g === this._tDur && 0 < this._ts) ||
                      (!g && this._ts < 0)
                    ) ||
                    O(this, 1),
                  t ||
                    (m && !p) ||
                    !(g || p || l) ||
                    (Pt(this, g === h ? "onComplete" : "onReverseComplete", !0),
                    !this._prom ||
                      (g < h && 0 < this.timeScale()) ||
                      this._prom()));
            }
          } else
            !(function (e, t, i, s) {
              var n,
                r,
                a,
                o = e.ratio,
                l =
                  t < 0 ||
                  (!t &&
                    ((!e._start &&
                      (function e(t) {
                        var i = t.parent;
                        return (
                          i &&
                          i._ts &&
                          i._initted &&
                          !i._lock &&
                          (i.rawTime() < 0 || e(i))
                        );
                      })(e) &&
                      (e._initted || !Tt(e))) ||
                      ((e._ts < 0 || e._dp._ts < 0) && !Tt(e))))
                    ? 0
                    : 1,
                u = e._rDelay,
                c = 0;
              if (
                (u &&
                  e._repeat &&
                  ((c = St(0, e._tDur, t)),
                  (r = Ct(c, u)),
                  e._yoyo && 1 & r && (l = 1 - l),
                  r !== Ct(e._tTime, u) &&
                    ((o = 1 - l),
                    e.vars.repeatRefresh && e._initted && e.invalidate())),
                l !== o || ye || s || e._zTime === Ge || (!t && e._zTime))
              ) {
                if (!e._initted && Y(e, t, s, i, c)) return;
                for (
                  a = e._zTime,
                    e._zTime = t || (i ? Ge : 0),
                    i = i || (t && !a),
                    e.ratio = l,
                    e._from && (l = 1 - l),
                    e._time = 0,
                    e._tTime = c,
                    n = e._pt;
                  n;

                )
                  n.r(l, n.d), (n = n._next);
                t < 0 && I(e, t, 0, !0),
                  e._onUpdate && !i && Pt(e, "onUpdate"),
                  c && e._repeat && !i && e.parent && Pt(e, "onRepeat"),
                  (t >= e._tDur || t < 0) &&
                    e.ratio === l &&
                    (l && O(e, 1),
                    i ||
                      ye ||
                      (Pt(e, l ? "onComplete" : "onReverseComplete", !0),
                      e._prom && e._prom()));
              } else e._zTime || (e._zTime = t);
            })(this, e, t, i);
          return this;
        }),
        (a.targets = function () {
          return this._targets;
        }),
        (a.invalidate = function (t) {
          return (
            (t && this.vars.runBackwards) || (this._startAt = 0),
            (this._pt =
              this._op =
              this._onUpdate =
              this._lazy =
              this.ratio =
                0),
            (this._ptLookup = []),
            this.timeline && this.timeline.invalidate(t),
            e.prototype.invalidate.call(this, t)
          );
        }),
        (a.resetTo = function (e, t, i, s) {
          Me || It.wake(), this._ts || this.play();
          var n = Math.min(
            this._dur,
            (this._dp._time - this._start) * this._ts
          );
          return (
            this._initted || ti(this, n),
            (function (e, t, i, s, n, r, a) {
              var o,
                l,
                u,
                c,
                d = ((e._pt && e._ptCache) || (e._ptCache = {}))[t];
              if (!d)
                for (
                  d = e._ptCache[t] = [],
                    u = e._ptLookup,
                    c = e._targets.length;
                  c--;

                ) {
                  if ((o = u[c][t]) && o.d && o.d._pt)
                    for (o = o.d._pt; o && o.p !== t && o.fp !== t; )
                      o = o._next;
                  if (!o)
                    return (Zt = 1), (e.vars[t] = "+=0"), ti(e, a), (Zt = 0), 1;
                  d.push(o);
                }
              for (c = d.length; c--; )
                ((o = (l = d[c])._pt || l).s =
                  (!s && 0 !== s) || n ? o.s + (s || 0) + r * o.c : s),
                  (o.c = i - o.s),
                  l.e && (l.e = w(i) + U(l.e)),
                  l.b && (l.b = o.s + U(l.b));
            })(this, e, t, i, s, this._ease(n / this._dur), n)
              ? this.resetTo(e, t, i, s)
              : (R(this, 0),
                this.parent ||
                  F(
                    this._dp,
                    this,
                    "_first",
                    "_last",
                    this._dp._sort ? "_start" : 0
                  ),
                this.render(0))
          );
        }),
        (a.kill = function (e, t) {
          if ((void 0 === t && (t = "all"), !(e || (t && "all" !== t))))
            return (this._lazy = this._pt = 0), this.parent ? ae(this) : this;
          if (this.timeline) {
            var i = this.timeline.totalDuration();
            return (
              this.timeline.killTweensOf(e, t, Jt && !0 !== Jt.vars.overwrite)
                ._first || ae(this),
              this.parent &&
                i !== this.timeline.totalDuration() &&
                X(this, (this._dur * this.timeline._tDur) / i, 0, 1),
              this
            );
          }
          var n,
            r,
            a,
            o,
            l,
            u,
            c,
            d = this._targets,
            p = e ? kt(e) : d,
            h = this._ptLookup,
            f = this._pt;
          if (
            (!t || "all" === t) &&
            (function (e, t) {
              for (
                var i = e.length, s = i === t.length;
                s && i-- && e[i] === t[i];

              );
              return i < 0;
            })(d, p)
          )
            return "all" === t && (this._pt = 0), ae(this);
          for (
            n = this._op = this._op || [],
              "all" !== t &&
                (s(t) &&
                  ((l = {}),
                  b(t, function (e) {
                    return (l[e] = 1);
                  }),
                  (t = l)),
                (t = (function (e, t) {
                  var i,
                    s,
                    n,
                    r,
                    a = e[0] ? v(e[0]).harness : 0,
                    o = a && a.aliases;
                  if (!o) return t;
                  for (s in ((i = xt({}, t)), o))
                    if ((s in i))
                      for (n = (r = o[s].split(",")).length; n--; )
                        i[r[n]] = i[s];
                  return i;
                })(d, t))),
              c = d.length;
            c--;

          )
            if (~p.indexOf(d[c]))
              for (l in ((r = h[c]),
              "all" === t
                ? ((n[c] = t), (o = r), (a = {}))
                : ((a = n[c] = n[c] || {}), (o = t)),
              o))
                (u = r && r[l]) &&
                  (("kill" in u.d && !0 !== u.d.kill(l)) || $(this, u, "_pt"),
                  delete r[l]),
                  "all" !== a && (a[l] = 1);
          return this._initted && !this._pt && f && ae(this), this;
        }),
        (n.to = function (e, t, i) {
          return new n(e, t, i);
        }),
        (n.from = function (e, t) {
          return V(1, arguments);
        }),
        (n.delayedCall = function (e, t, i, s) {
          return new n(t, 0, {
            immediateRender: !1,
            lazy: !1,
            overwrite: !1,
            delay: e,
            onComplete: t,
            onReverseComplete: t,
            onCompleteParams: i,
            onReverseCompleteParams: i,
            callbackScope: s,
          });
        }),
        (n.fromTo = function (e, t, i) {
          return V(2, arguments);
        }),
        (n.set = function (e, t) {
          return (t.duration = 0), t.repeatDelay || (t.repeat = 0), new n(e, t);
        }),
        (n.killTweensOf = function (e, t, i) {
          return we.killTweensOf(e, t, i);
        }),
        n
      );
    })(Vt);
    function ai(e, t, i) {
      return e.setAttribute(t, i);
    }
    function oi(e, t, i, s) {
      s.mSet(e, t, s.m.call(s.tween, i, s.mt), s);
    }
    M(ri.prototype, {
      _targets: [],
      _lazy: 0,
      _startAt: 0,
      _op: 0,
      _onInit: 0,
    }),
      b("staggerTo,staggerFrom,staggerFromTo", function (e) {
        ri[e] = function () {
          var t = new Ut(),
            i = Mt.call(arguments, 0);
          return (
            i.splice("staggerFromTo" === e ? 5 : 4, 0, 0), t[e].apply(t, i)
          );
        };
      });
    var li = function (e, t, i) {
        return (e[t] = i);
      },
      ui = function (e, t, i) {
        return e[t](i);
      },
      ci = function (e, t, i, s) {
        return e[t](s.fp, i);
      },
      di = function (e, t) {
        return n(e[t]) ? ui : a(e[t]) && e.setAttribute ? ai : li;
      },
      pi = function (e, t) {
        return t.set(t.t, t.p, Math.round(1e6 * (t.s + t.c * e)) / 1e6, t);
      },
      hi = function (e, t) {
        return t.set(t.t, t.p, !!(t.s + t.c * e), t);
      },
      fi = function (e, t) {
        var i = t._pt,
          s = "";
        if (!e && t.b) s = t.b;
        else if (1 === e && t.e) s = t.e;
        else {
          for (; i; )
            (s =
              i.p +
              (i.m
                ? i.m(i.s + i.c * e)
                : Math.round(1e4 * (i.s + i.c * e)) / 1e4) +
              s),
              (i = i._next);
          s += t.c;
        }
        t.set(t.t, t.p, s, t);
      },
      mi = function (e, t) {
        for (var i = t._pt; i; ) i.r(e, i.d), (i = i._next);
      },
      gi = function (e, t, i, s) {
        for (var n, r = this._pt; r; )
          (n = r._next), r.p === s && r.modifier(e, t, i), (r = n);
      },
      vi = function (e) {
        for (var t, i, s = this._pt; s; )
          (i = s._next),
            (s.p === e && !s.op) || s.op === e
              ? $(this, s, "_pt")
              : s.dep || (t = 1),
            (s = i);
        return !t;
      },
      yi = function (e) {
        for (var t, i, s, n, r = e._pt; r; ) {
          for (t = r._next, i = s; i && i.pr > r.pr; ) i = i._next;
          (r._prev = i ? i._prev : n) ? (r._prev._next = r) : (s = r),
            (r._next = i) ? (i._prev = r) : (n = r),
            (r = t);
        }
        e._pt = s;
      },
      bi =
        ((wi.prototype.modifier = function (e, t, i) {
          (this.mSet = this.mSet || this.set),
            (this.set = oi),
            (this.m = e),
            (this.mt = i),
            (this.tween = t);
        }),
        wi);
    function wi(e, t, i, s, n, r, a, o, l) {
      (this.t = t),
        (this.s = s),
        (this.c = n),
        (this.p = i),
        (this.r = r || pi),
        (this.d = a || this),
        (this.set = o || li),
        (this.pr = l || 0),
        (this._next = e) && (e._prev = this);
    }
    function Di(e) {
      return (Ei[e] || _i).map(function (e) {
        return e();
      });
    }
    function xi() {
      var e = Date.now(),
        t = [];
      2 < e - Si &&
        (Di("matchMediaInit"),
        Ti.forEach(function (e) {
          var i,
            s,
            n,
            r,
            a = e.queries,
            o = e.conditions;
          for (s in a)
            (i = De.matchMedia(a[s]).matches) && (n = 1),
              i !== o[s] && ((o[s] = i), (r = 1));
          r && (e.revert(), n && t.push(e));
        }),
        Di("matchMediaRevert"),
        t.forEach(function (e) {
          return e.onMatch(e);
        }),
        (Si = e),
        Di("matchMedia"));
    }
    b(
      Dt +
        "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",
      function (e) {
        return (ft[e] = 1);
      }
    ),
      (ct.TweenMax = ct.TweenLite = ri),
      (ct.TimelineLite = ct.TimelineMax = Ut),
      (we = new Ut({
        sortChildren: !1,
        defaults: qe,
        autoRemoveChildren: !0,
        id: "root",
        smoothChildTiming: !0,
      })),
      (Xe.stringFilter = de);
    var Ci,
      Ti = [],
      Ei = {},
      _i = [],
      Si = 0,
      Mi =
        (((Ci = ki.prototype).add = function (e, t, i) {
          function s() {
            var e,
              s = be,
              a = r.selector;
            return (
              s && s !== r && s.data.push(r),
              i && (r.selector = Q(i)),
              (be = r),
              n((e = t.apply(r, arguments))) && r._r.push(e),
              (be = s),
              (r.selector = a),
              (r.isReverted = !1),
              e
            );
          }
          n(e) && ((i = t), (t = e), (e = n));
          var r = this;
          return (r.last = s), e === n ? s(r) : e ? (r[e] = s) : s;
        }),
        (Ci.ignore = function (e) {
          var t = be;
          (be = null), e(this), (be = t);
        }),
        (Ci.getTweens = function () {
          var e = [];
          return (
            this.data.forEach(function (t) {
              return t instanceof ki
                ? e.push.apply(e, t.getTweens())
                : t instanceof ri &&
                    !(t.parent && "nested" === t.parent.data) &&
                    e.push(t);
            }),
            e
          );
        }),
        (Ci.clear = function () {
          this._r.length = this.data.length = 0;
        }),
        (Ci.kill = function (e, t) {
          var i = this;
          if (e) {
            var s = this.getTweens();
            this.data.forEach(function (e) {
              "isFlip" === e.data &&
                (e.revert(),
                e.getChildren(!0, !0, !1).forEach(function (e) {
                  return s.splice(s.indexOf(e), 1);
                }));
            }),
              s
                .map(function (e) {
                  return { g: e.globalTime(0), t: e };
                })
                .sort(function (e, t) {
                  return t.g - e.g || -1;
                })
                .forEach(function (t) {
                  return t.t.revert(e);
                }),
              this.data.forEach(function (t) {
                return !(t instanceof Vt) && t.revert && t.revert(e);
              }),
              this._r.forEach(function (t) {
                return t(e, i);
              }),
              (this.isReverted = !0);
          } else
            this.data.forEach(function (e) {
              return e.kill && e.kill();
            });
          if ((this.clear(), t)) {
            var n = Ti.indexOf(this);
            ~n && Ti.splice(n, 1);
          }
        }),
        (Ci.revert = function (e) {
          this.kill(e || {});
        }),
        ki);
    function ki(e, t) {
      (this.selector = t && Q(t)),
        (this.data = []),
        (this._r = []),
        (this.isReverted = !1),
        e && this.add(e);
    }
    var Ai,
      Pi =
        (((Ai = Fi.prototype).add = function (e, t, i) {
          o(e) || (e = { matches: e });
          var s,
            n,
            r,
            a = new Mi(0, i || this.scope),
            l = (a.conditions = {});
          for (n in (this.contexts.push(a),
          (t = a.add("onMatch", t)),
          (a.queries = e)))
            "all" === n
              ? (r = 1)
              : (s = De.matchMedia(e[n])) &&
                (Ti.indexOf(a) < 0 && Ti.push(a),
                (l[n] = s.matches) && (r = 1),
                s.addListener
                  ? s.addListener(xi)
                  : s.addEventListener("change", xi));
          return r && t(a), this;
        }),
        (Ai.revert = function (e) {
          this.kill(e || {});
        }),
        (Ai.kill = function (e) {
          this.contexts.forEach(function (t) {
            return t.kill(e, !0);
          });
        }),
        Fi);
    function Fi(e) {
      (this.contexts = []), (this.scope = e);
    }
    var $i = {
      registerPlugin: function () {
        for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++)
          t[i] = arguments[i];
        t.forEach(function (e) {
          return (function (e) {
            var t = (e = (!e.name && e.default) || e).name,
              i = n(e),
              s =
                t && !i && e.init
                  ? function () {
                      this._props = [];
                    }
                  : e,
              r = {
                init: m,
                render: mi,
                add: ei,
                kill: vi,
                modifier: gi,
                rawVars: 0,
              },
              a = {
                targetTest: 0,
                get: 0,
                getSetter: di,
                aliases: {},
                register: 0,
              };
            if ((zt(), e !== s)) {
              if (vt[t]) return;
              M(s, M(A(e, r), a)),
                xt(s.prototype, xt(r, A(e, a))),
                (vt[(s.prop = t)] = s),
                e.targetTest && (wt.push(s), (ft[t] = 1)),
                (t =
                  ("css" === t
                    ? "CSS"
                    : t.charAt(0).toUpperCase() + t.substr(1)) + "Plugin");
            }
            f(t, s), e.register && e.register(Ii, s, bi);
          })(e);
        });
      },
      timeline: function (e) {
        return new Ut(e);
      },
      getTweensOf: function (e, t) {
        return we.getTweensOf(e, t);
      },
      getProperty: function (e, t, i, n) {
        s(e) && (e = kt(e)[0]);
        var r = v(e || {}).get,
          a = i ? S : _;
        return (
          "native" === i && (i = ""),
          e
            ? t
              ? a(((vt[t] && vt[t].get) || r)(e, t, i, n))
              : function (t, i, s) {
                  return a(((vt[t] && vt[t].get) || r)(e, t, i, s));
                }
            : e
        );
      },
      quickSetter: function (e, t, i) {
        if (1 < (e = kt(e)).length) {
          var s = e.map(function (e) {
              return Ii.quickSetter(e, t, i);
            }),
            n = s.length;
          return function (e) {
            for (var t = n; t--; ) s[t](e);
          };
        }
        e = e[0] || {};
        var r = vt[t],
          a = v(e),
          o = (a.harness && (a.harness.aliases || {})[t]) || t,
          l = r
            ? function (t) {
                var s = new r();
                (Se._pt = 0),
                  s.init(e, i ? t + i : t, Se, 0, [e]),
                  s.render(1, s),
                  Se._pt && mi(1, Se);
              }
            : a.set(e, o);
        return r
          ? l
          : function (t) {
              return l(e, o, i ? t + i : t, a, 1);
            };
      },
      quickTo: function (e, t, i) {
        function s(e, i, s) {
          return r.resetTo(t, e, i, s);
        }
        var n,
          r = Ii.to(
            e,
            xt((((n = {})[t] = "+=0.1"), (n.paused = !0), n), i || {})
          );
        return (s.tween = r), s;
      },
      isTweening: function (e) {
        return 0 < we.getTweensOf(e, !0).length;
      },
      defaults: function (e) {
        return e && e.ease && (e.ease = Wt(e.ease, qe.ease)), k(qe, e || {});
      },
      config: function (e) {
        return k(Xe, e || {});
      },
      registerEffect: function (e) {
        var t = e.name,
          i = e.effect,
          s = e.plugins,
          n = e.defaults,
          r = e.extendTimeline;
        (s || "").split(",").forEach(function (e) {
          return (
            e && !vt[e] && !ct[e] && h(t + " effect requires " + e + " plugin.")
          );
        }),
          (yt[t] = function (e, t, s) {
            return i(kt(e), M(t || {}, n), s);
          }),
          r &&
            (Ut.prototype[t] = function (e, i, s) {
              return this.add(yt[t](e, o(i) ? i : (s = i) && {}, this), s);
            });
      },
      registerEase: function (e, t) {
        Nt[e] = Wt(t);
      },
      parseEase: function (e, t) {
        return arguments.length ? Wt(e, t) : Nt;
      },
      getById: function (e) {
        return we.getById(e);
      },
      exportRoot: function (e, t) {
        void 0 === e && (e = {});
        var i,
          s,
          n = new Ut(e);
        for (
          n.smoothChildTiming = l(e.smoothChildTiming),
            we.remove(n),
            n._dp = 0,
            n._time = n._tTime = we._time,
            i = we._first;
          i;

        )
          (s = i._next),
            (!t &&
              !i._dur &&
              i instanceof ri &&
              i.vars.onComplete === i._targets[0]) ||
              W(n, i, i._start - i._delay),
            (i = s);
        return W(we, n, 0), n;
      },
      context: function (e, t) {
        return e ? new Mi(e, t) : be;
      },
      matchMedia: function (e) {
        return new Pi(e);
      },
      matchMediaRefresh: function () {
        return (
          Ti.forEach(function (e) {
            var t,
              i,
              s = e.conditions;
            for (i in s) s[i] && ((s[i] = !1), (t = 1));
            t && e.revert();
          }) || xi()
        );
      },
      addEventListener: function (e, t) {
        var i = Ei[e] || (Ei[e] = []);
        ~i.indexOf(t) || i.push(t);
      },
      removeEventListener: function (e, t) {
        var i = Ei[e],
          s = i && i.indexOf(t);
        0 <= s && i.splice(s, 1);
      },
      utils: {
        wrap: function e(t, i, s) {
          var n = i - t;
          return it(t)
            ? se(t, e(0, t.length), i)
            : G(s, function (e) {
                return ((n + ((e - t) % n)) % n) + t;
              });
        },
        wrapYoyo: function e(t, i, s) {
          var n = i - t,
            r = 2 * n;
          return it(t)
            ? se(t, e(0, t.length - 1), i)
            : G(s, function (e) {
                return t + (n < (e = (r + ((e - t) % r)) % r || 0) ? r - e : e);
              });
        },
        distribute: Z,
        random: ie,
        snap: te,
        normalize: function (e, t, i) {
          return At(e, t, 0, 1, i);
        },
        getUnit: U,
        clamp: function (e, t, i) {
          return G(i, function (i) {
            return St(e, t, i);
          });
        },
        splitColor: le,
        toArray: kt,
        selector: Q,
        mapRange: At,
        pipe: function () {
          for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++)
            t[i] = arguments[i];
          return function (e) {
            return t.reduce(function (e, t) {
              return t(e);
            }, e);
          };
        },
        unitize: function (e, t) {
          return function (i) {
            return e(parseFloat(i)) + (t || U(i));
          };
        },
        interpolate: function e(t, i, n, r) {
          var a = isNaN(t + i)
            ? 0
            : function (e) {
                return (1 - e) * t + e * i;
              };
          if (!a) {
            var o,
              l,
              u,
              c,
              d,
              p = s(t),
              h = {};
            if ((!0 === n && (r = 1) && (n = null), p))
              (t = { p: t }), (i = { p: i });
            else if (it(t) && !it(i)) {
              for (u = [], c = t.length, d = c - 2, l = 1; l < c; l++)
                u.push(e(t[l - 1], t[l]));
              c--,
                (a = function (e) {
                  e *= c;
                  var t = Math.min(d, ~~e);
                  return u[t](e - t);
                }),
                (n = i);
            } else r || (t = xt(it(t) ? [] : {}, t));
            if (!u) {
              for (o in i) ei.call(h, t, o, "get", i[o]);
              a = function (e) {
                return mi(e, h) || (p ? t.p : t);
              };
            }
          }
          return G(n, a);
        },
        shuffle: J,
      },
      install: d,
      effects: yt,
      ticker: It,
      updateRoot: Ut.updateRoot,
      plugins: vt,
      globalTimeline: we,
      core: {
        PropTween: bi,
        globals: f,
        Tween: ri,
        Timeline: Ut,
        Animation: Vt,
        getCache: v,
        _removeLinkedListItem: $,
        reverting: function () {
          return ye;
        },
        context: function (e) {
          return e && be && (be.data.push(e), (e._ctx = be)), be;
        },
        suppressOverwrites: function (e) {
          return (ve = e);
        },
      },
    };
    function Oi(e, t) {
      for (var i = e._pt; i && i.p !== t && i.op !== t && i.fp !== t; )
        i = i._next;
      return i;
    }
    function Li(e, t) {
      return {
        name: e,
        rawVars: 1,
        init: function (e, i, n) {
          n._onInit = function (e) {
            var n, r;
            if (
              (s(i) &&
                ((n = {}),
                b(i, function (e) {
                  return (n[e] = 1);
                }),
                (i = n)),
              t)
            ) {
              for (r in ((n = {}), i)) n[r] = t(i[r]);
              i = n;
            }
            !(function (e, t) {
              var i,
                s,
                n,
                r = e._targets;
              for (i in t)
                for (s = r.length; s--; )
                  (n = (n = e._ptLookup[s][i]) && n.d) &&
                    (n._pt && (n = Oi(n, i)),
                    n && n.modifier && n.modifier(t[i], e, r[s], i));
            })(e, i);
          };
        },
      };
    }
    b("to,from,fromTo,delayedCall,set,killTweensOf", function (e) {
      return ($i[e] = ri[e]);
    }),
      It.add(Ut.updateRoot),
      (Se = $i.to({}, { duration: 0 }));
    var Ii =
      $i.registerPlugin(
        {
          name: "attr",
          init: function (e, t, i, s, n) {
            var r, a, o;
            for (r in ((this.tween = i), t))
              (o = e.getAttribute(r) || ""),
                ((a = this.add(
                  e,
                  "setAttribute",
                  (o || 0) + "",
                  t[r],
                  s,
                  n,
                  0,
                  0,
                  r
                )).op = r),
                (a.b = o),
                this._props.push(r);
          },
          render: function (e, t) {
            for (var i = t._pt; i; )
              ye ? i.set(i.t, i.p, i.b, i) : i.r(e, i.d), (i = i._next);
          },
        },
        {
          name: "endArray",
          init: function (e, t) {
            for (var i = t.length; i--; )
              this.add(e, i, e[i] || 0, t[i], 0, 0, 0, 0, 0, 1);
          },
        },
        Li("roundProps", ee),
        Li("modifiers"),
        Li("snap", te)
      ) || $i;
    function zi(e, t) {
      return t.set(t.t, t.p, Math.round(1e4 * (t.s + t.c * e)) / 1e4 + t.u, t);
    }
    function Ni(e, t) {
      return t.set(
        t.t,
        t.p,
        1 === e ? t.e : Math.round(1e4 * (t.s + t.c * e)) / 1e4 + t.u,
        t
      );
    }
    function Bi(e, t) {
      return t.set(
        t.t,
        t.p,
        e ? Math.round(1e4 * (t.s + t.c * e)) / 1e4 + t.u : t.b,
        t
      );
    }
    function Ri(e, t) {
      var i = t.s + t.c * e;
      t.set(t.t, t.p, ~~(i + (i < 0 ? -0.5 : 0.5)) + t.u, t);
    }
    function Hi(e, t) {
      return t.set(t.t, t.p, e ? t.e : t.b, t);
    }
    function Wi(e, t) {
      return t.set(t.t, t.p, 1 !== e ? t.b : t.e, t);
    }
    function ji(e, t, i) {
      return (e.style[t] = i);
    }
    function Yi(e, t, i) {
      return e.style.setProperty(t, i);
    }
    function Xi(e, t, i) {
      return (e._gsap[t] = i);
    }
    function qi(e, t, i) {
      return (e._gsap.scaleX = e._gsap.scaleY = i);
    }
    function Vi(e, t, i, s, n) {
      var r = e._gsap;
      (r.scaleX = r.scaleY = i), r.renderTransform(n, r);
    }
    function Gi(e, t, i, s, n) {
      var r = e._gsap;
      (r[t] = i), r.renderTransform(n, r);
    }
    function Ui(e, t) {
      var i = this,
        s = this.target,
        n = s.style;
      if (e in qs) {
        if (
          ((this.tfm = this.tfm || {}),
          "transform" !== e &&
            (~(e = Zs[e] || e).indexOf(",")
              ? e.split(",").forEach(function (e) {
                  return (i.tfm[e] = on(s, e));
                })
              : (this.tfm[e] = s._gsap.x ? s._gsap[e] : on(s, e))),
          0 <= this.props.indexOf(en))
        )
          return;
        s._gsap.svg &&
          ((this.svgo = s.getAttribute("data-svg-origin")),
          this.props.push(tn, t, "")),
          (e = en);
      }
      (n || t) && this.props.push(e, t, n[e]);
    }
    function Ki(e) {
      e.translate &&
        (e.removeProperty("translate"),
        e.removeProperty("scale"),
        e.removeProperty("rotate"));
    }
    function Qi() {
      var e,
        t,
        i = this.props,
        s = this.target,
        n = s.style,
        r = s._gsap;
      for (e = 0; e < i.length; e += 3)
        i[e + 1]
          ? (s[i[e]] = i[e + 2])
          : i[e + 2]
          ? (n[i[e]] = i[e + 2])
          : n.removeProperty(i[e].replace(Ks, "-$1").toLowerCase());
      if (this.tfm) {
        for (t in this.tfm) r[t] = this.tfm[t];
        r.svg &&
          (r.renderTransform(),
          s.setAttribute("data-svg-origin", this.svgo || "")),
          !(e = _s()) || e.isStart || n[en] || (Ki(n), (r.uncache = 1));
      }
    }
    function Ji(e, t) {
      var i = { target: e, props: [], revert: Qi, save: Ui };
      return (
        t &&
          t.split(",").forEach(function (e) {
            return i.save(e);
          }),
        i
      );
    }
    function Zi(e, t) {
      var i = Ds.createElementNS
        ? Ds.createElementNS(
            (t || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"),
            e
          )
        : Ds.createElement(e);
      return i.style ? i : Ds.createElement(e);
    }
    function es(e, t, i) {
      var s = getComputedStyle(e);
      return (
        s[t] ||
        s.getPropertyValue(t.replace(Ks, "-$1").toLowerCase()) ||
        s.getPropertyValue(t) ||
        (!i && es(e, nn(t) || t, 1)) ||
        ""
      );
    }
    function ts() {
      "undefined" != typeof window &&
        window.document &&
        ((ws = window),
        (Ds = ws.document),
        (xs = Ds.documentElement),
        (Ts = Zi("div") || { style: {} }),
        Zi("div"),
        (en = nn(en)),
        (tn = en + "Origin"),
        (Ts.style.cssText =
          "border-width:0;line-height:0;position:absolute;padding:0"),
        (Ss = !!nn("perspective")),
        (_s = Ii.core.reverting),
        (Cs = 1));
    }
    function is(e) {
      var t,
        i = Zi(
          "svg",
          (this.ownerSVGElement &&
            this.ownerSVGElement.getAttribute("xmlns")) ||
            "http://www.w3.org/2000/svg"
        ),
        s = this.parentNode,
        n = this.nextSibling,
        r = this.style.cssText;
      if (
        (xs.appendChild(i),
        i.appendChild(this),
        (this.style.display = "block"),
        e)
      )
        try {
          (t = this.getBBox()),
            (this._gsapBBox = this.getBBox),
            (this.getBBox = is);
        } catch (e) {}
      else this._gsapBBox && (t = this._gsapBBox());
      return (
        s && (n ? s.insertBefore(this, n) : s.appendChild(this)),
        xs.removeChild(i),
        (this.style.cssText = r),
        t
      );
    }
    function ss(e, t) {
      for (var i = t.length; i--; )
        if (e.hasAttribute(t[i])) return e.getAttribute(t[i]);
    }
    function ns(e) {
      var t;
      try {
        t = e.getBBox();
      } catch (i) {
        t = is.call(e, !0);
      }
      return (
        (t && (t.width || t.height)) ||
          e.getBBox === is ||
          (t = is.call(e, !0)),
        !t || t.width || t.x || t.y
          ? t
          : {
              x: +ss(e, ["x", "cx", "x1"]) || 0,
              y: +ss(e, ["y", "cy", "y1"]) || 0,
              width: 0,
              height: 0,
            }
      );
    }
    function rs(e) {
      return !(!e.getCTM || (e.parentNode && !e.ownerSVGElement) || !ns(e));
    }
    function as(e, t) {
      if (t) {
        var i = e.style;
        t in qs && t !== tn && (t = en),
          i.removeProperty
            ? (("ms" !== t.substr(0, 2) && "webkit" !== t.substr(0, 6)) ||
                (t = "-" + t),
              i.removeProperty(t.replace(Ks, "-$1").toLowerCase()))
            : i.removeAttribute(t);
      }
    }
    function os(e, t, i, s, n, r) {
      var a = new bi(e._pt, t, i, 0, 1, r ? Wi : Hi);
      return ((e._pt = a).b = s), (a.e = n), e._props.push(i), a;
    }
    function ls(e, t, i, s) {
      var n,
        r,
        a,
        o,
        l = parseFloat(i) || 0,
        u = (i + "").trim().substr((l + "").length) || "px",
        c = Ts.style,
        d = Qs.test(t),
        p = "svg" === e.tagName.toLowerCase(),
        h = (p ? "client" : "offset") + (d ? "Width" : "Height"),
        f = "px" === s,
        m = "%" === s;
      return s === u || !l || rn[s] || rn[u]
        ? l
        : ("px" === u || f || (l = ls(e, t, i, "px")),
          (o = e.getCTM && rs(e)),
          (!m && "%" !== u) || (!qs[t] && !~t.indexOf("adius"))
            ? ((c[d ? "width" : "height"] = 100 + (f ? u : s)),
              (r =
                ~t.indexOf("adius") || ("em" === s && e.appendChild && !p)
                  ? e
                  : e.parentNode),
              o && (r = (e.ownerSVGElement || {}).parentNode),
              (r && r !== Ds && r.appendChild) || (r = Ds.body),
              (a = r._gsap) &&
              m &&
              a.width &&
              d &&
              a.time === It.time &&
              !a.uncache
                ? w((l / a.width) * 100)
                : ((!m && "%" !== u) ||
                    an[es(r, "display")] ||
                    (c.position = es(e, "position")),
                  r === e && (c.position = "static"),
                  r.appendChild(Ts),
                  (n = Ts[h]),
                  r.removeChild(Ts),
                  (c.position = "absolute"),
                  d && m && (((a = v(r)).time = It.time), (a.width = r[h])),
                  w(f ? (n * l) / 100 : n && l ? (100 / n) * l : 0)))
            : ((n = o ? e.getBBox()[d ? "width" : "height"] : e[h]),
              w(m ? (l / n) * 100 : (l / 100) * n)));
    }
    function us(e, t, i, s) {
      if (!i || "none" === i) {
        var n = nn(t, e, 1),
          r = n && es(e, n, 1);
        r && r !== i
          ? ((t = n), (i = r))
          : "borderColor" === t && (i = es(e, "borderTopColor"));
      }
      var a,
        o,
        l,
        u,
        c,
        d,
        p,
        h,
        f,
        m,
        g,
        v = new bi(this._pt, e.style, t, 0, 1, fi),
        y = 0,
        b = 0;
      if (
        ((v.b = i),
        (v.e = s),
        (i += ""),
        "auto" == (s += "") &&
          ((e.style[t] = s), (s = es(e, t) || s), (e.style[t] = i)),
        de((a = [i, s])),
        (s = a[1]),
        (l = (i = a[0]).match(rt) || []),
        (s.match(rt) || []).length)
      ) {
        for (; (o = rt.exec(s)); )
          (p = o[0]),
            (f = s.substring(y, o.index)),
            c
              ? (c = (c + 1) % 5)
              : ("rgba(" !== f.substr(-5) && "hsla(" !== f.substr(-5)) ||
                (c = 1),
            p !== (d = l[b++] || "") &&
              ((u = parseFloat(d) || 0),
              (g = d.substr((u + "").length)),
              "=" === p.charAt(1) && (p = x(u, p) + g),
              (h = parseFloat(p)),
              (m = p.substr((h + "").length)),
              (y = rt.lastIndex - m.length),
              m ||
                ((m = m || Xe.units[t] || g),
                y === s.length && ((s += m), (v.e += m))),
              g !== m && (u = ls(e, t, d, m) || 0),
              (v._pt = {
                _next: v._pt,
                p: f || 1 === b ? f : ",",
                s: u,
                c: h - u,
                m: (c && c < 4) || "zIndex" === t ? Math.round : 0,
              }));
        v.c = y < s.length ? s.substring(y, s.length) : "";
      } else v.r = "display" === t && "none" === s ? Wi : Hi;
      return ot.test(s) && (v.e = 0), (this._pt = v);
    }
    function cs(e) {
      var t = e.split(" "),
        i = t[0],
        s = t[1] || "50%";
      return (
        ("top" !== i && "bottom" !== i && "left" !== s && "right" !== s) ||
          ((e = i), (i = s), (s = e)),
        (t[0] = ln[i] || i),
        (t[1] = ln[s] || s),
        t.join(" ")
      );
    }
    function ds(e, t) {
      if (t.tween && t.tween._time === t.tween._dur) {
        var i,
          s,
          n,
          r = t.t,
          a = r.style,
          o = t.u,
          l = r._gsap;
        if ("all" === o || !0 === o) (a.cssText = ""), (s = 1);
        else
          for (n = (o = o.split(",")).length; -1 < --n; )
            (i = o[n]),
              qs[i] && ((s = 1), (i = "transformOrigin" === i ? tn : en)),
              as(r, i);
        s &&
          (as(r, en),
          l &&
            (l.svg && r.removeAttribute("transform"),
            pn(r, 1),
            (l.uncache = 1),
            Ki(a)));
      }
    }
    function ps(e) {
      return "matrix(1, 0, 0, 1, 0, 0)" === e || "none" === e || !e;
    }
    function hs(e) {
      var t = es(e, en);
      return ps(t) ? cn : t.substr(7).match(nt).map(w);
    }
    function fs(e, t) {
      var i,
        s,
        n,
        r,
        a = e._gsap || v(e),
        o = e.style,
        l = hs(e);
      return a.svg && e.getAttribute("transform")
        ? "1,0,0,1,0,0" ===
          (l = [
            (n = e.transform.baseVal.consolidate().matrix).a,
            n.b,
            n.c,
            n.d,
            n.e,
            n.f,
          ]).join(",")
          ? cn
          : l
        : (l !== cn ||
            e.offsetParent ||
            e === xs ||
            a.svg ||
            ((n = o.display),
            (o.display = "block"),
            ((i = e.parentNode) && e.offsetParent) ||
              ((r = 1), (s = e.nextElementSibling), xs.appendChild(e)),
            (l = hs(e)),
            n ? (o.display = n) : as(e, "display"),
            r &&
              (s
                ? i.insertBefore(e, s)
                : i
                ? i.appendChild(e)
                : xs.removeChild(e))),
          t && 6 < l.length ? [l[0], l[1], l[4], l[5], l[12], l[13]] : l);
    }
    function ms(e, t, i, s, n, r) {
      var a,
        o,
        l,
        u = e._gsap,
        c = n || fs(e, !0),
        d = u.xOrigin || 0,
        p = u.yOrigin || 0,
        h = u.xOffset || 0,
        f = u.yOffset || 0,
        m = c[0],
        g = c[1],
        v = c[2],
        y = c[3],
        b = c[4],
        w = c[5],
        D = t.split(" "),
        x = parseFloat(D[0]) || 0,
        C = parseFloat(D[1]) || 0;
      i
        ? c !== cn &&
          (o = m * y - g * v) &&
          ((l = x * (-g / o) + C * (m / o) - (m * w - g * b) / o),
          (x = x * (y / o) + C * (-v / o) + (v * w - y * b) / o),
          (C = l))
        : ((x = (a = ns(e)).x + (~D[0].indexOf("%") ? (x / 100) * a.width : x)),
          (C =
            a.y + (~(D[1] || D[0]).indexOf("%") ? (C / 100) * a.height : C))),
        s || (!1 !== s && u.smooth)
          ? ((b = x - d),
            (w = C - p),
            (u.xOffset = h + (b * m + w * v) - b),
            (u.yOffset = f + (b * g + w * y) - w))
          : (u.xOffset = u.yOffset = 0),
        (u.xOrigin = x),
        (u.yOrigin = C),
        (u.smooth = !!s),
        (u.origin = t),
        (u.originIsAbsolute = !!i),
        (e.style[tn] = "0px 0px"),
        r &&
          (os(r, u, "xOrigin", d, x),
          os(r, u, "yOrigin", p, C),
          os(r, u, "xOffset", h, u.xOffset),
          os(r, u, "yOffset", f, u.yOffset)),
        e.setAttribute("data-svg-origin", x + " " + C);
    }
    function gs(e, t, i) {
      var s = U(t);
      return w(parseFloat(t) + parseFloat(ls(e, "x", i + "px", s))) + s;
    }
    function vs(e, t, i, n, r) {
      var a,
        o,
        l = 360,
        u = s(r),
        c = parseFloat(r) * (u && ~r.indexOf("rad") ? Vs : 1) - n,
        d = n + c + "deg";
      return (
        u &&
          ("short" === (a = r.split("_")[1]) &&
            (c %= l) != c % 180 &&
            (c += c < 0 ? l : -l),
          "cw" === a && c < 0
            ? (c = ((c + 36e9) % l) - ~~(c / l) * l)
            : "ccw" === a && 0 < c && (c = ((c - 36e9) % l) - ~~(c / l) * l)),
        (e._pt = o = new bi(e._pt, t, i, n, c, Ni)),
        (o.e = d),
        (o.u = "deg"),
        e._props.push(i),
        o
      );
    }
    function ys(e, t) {
      for (var i in t) e[i] = t[i];
      return e;
    }
    function bs(e, t, i) {
      var s,
        n,
        r,
        a,
        o,
        l,
        u,
        c = ys({}, i._gsap),
        d = i.style;
      for (n in (c.svg
        ? ((r = i.getAttribute("transform")),
          i.setAttribute("transform", ""),
          (d[en] = t),
          (s = pn(i, 1)),
          as(i, en),
          i.setAttribute("transform", r))
        : ((r = getComputedStyle(i)[en]),
          (d[en] = t),
          (s = pn(i, 1)),
          (d[en] = r)),
      qs))
        (r = c[n]) !== (a = s[n]) &&
          "perspective,force3D,transformOrigin,svgOrigin".indexOf(n) < 0 &&
          ((o = U(r) !== (u = U(a)) ? ls(i, n, r, u) : parseFloat(r)),
          (l = parseFloat(a)),
          (e._pt = new bi(e._pt, s, n, o, l - o, zi)),
          (e._pt.u = u || 0),
          e._props.push(n));
      ys(s, c);
    }
    (ri.version = Ut.version = Ii.version = "3.11.4"), (Ee = 1), u() && zt();
    var ws,
      Ds,
      xs,
      Cs,
      Ts,
      Es,
      _s,
      Ss,
      Ms = Nt.Power0,
      ks = Nt.Power1,
      As = Nt.Power2,
      Ps = Nt.Power3,
      Fs = Nt.Power4,
      $s = Nt.Linear,
      Os = Nt.Quad,
      Ls = Nt.Cubic,
      Is = Nt.Quart,
      zs = Nt.Quint,
      Ns = Nt.Strong,
      Bs = Nt.Elastic,
      Rs = Nt.Back,
      Hs = Nt.SteppedEase,
      Ws = Nt.Bounce,
      js = Nt.Sine,
      Ys = Nt.Expo,
      Xs = Nt.Circ,
      qs = {},
      Vs = 180 / Math.PI,
      Gs = Math.PI / 180,
      Us = Math.atan2,
      Ks = /([A-Z])/g,
      Qs = /(left|right|width|margin|padding|x)/i,
      Js = /[\s,\(]\S/,
      Zs = {
        autoAlpha: "opacity,visibility",
        scale: "scaleX,scaleY",
        alpha: "opacity",
      },
      en = "transform",
      tn = en + "Origin",
      sn = "O,Moz,ms,Ms,Webkit".split(","),
      nn = function (e, t, i) {
        var s = (t || Ts).style,
          n = 5;
        if (e in s && !i) return e;
        for (
          e = e.charAt(0).toUpperCase() + e.substr(1);
          n-- && !(sn[n] + e in s);

        );
        return n < 0 ? null : (3 === n ? "ms" : 0 <= n ? sn[n] : "") + e;
      },
      rn = { deg: 1, rad: 1, turn: 1 },
      an = { grid: 1, flex: 1 },
      on = function (e, t, i, s) {
        var n;
        return (
          Cs || ts(),
          t in Zs &&
            "transform" !== t &&
            ~(t = Zs[t]).indexOf(",") &&
            (t = t.split(",")[0]),
          qs[t] && "transform" !== t
            ? ((n = pn(e, s)),
              (n =
                "transformOrigin" !== t
                  ? n[t]
                  : n.svg
                  ? n.origin
                  : hn(es(e, tn)) + " " + n.zOrigin + "px"))
            : ((n = e.style[t]) &&
                "auto" !== n &&
                !s &&
                !~(n + "").indexOf("calc(")) ||
              (n =
                (un[t] && un[t](e, t, i)) ||
                es(e, t) ||
                y(e, t) ||
                ("opacity" === t ? 1 : 0)),
          i && !~(n + "").trim().indexOf(" ") ? ls(e, t, n, i) + i : n
        );
      },
      ln = {
        top: "0%",
        bottom: "100%",
        left: "0%",
        right: "100%",
        center: "50%",
      },
      un = {
        clearProps: function (e, t, i, s, n) {
          if ("isFromStart" !== n.data) {
            var r = (e._pt = new bi(e._pt, t, i, 0, 0, ds));
            return (r.u = s), (r.pr = -10), (r.tween = n), e._props.push(i), 1;
          }
        },
      },
      cn = [1, 0, 0, 1, 0, 0],
      dn = {},
      pn = function (e, t) {
        var i = e._gsap || new qt(e);
        if ("x" in i && !t && !i.uncache) return i;
        var s,
          n,
          r,
          a,
          o,
          l,
          u,
          c,
          d,
          p,
          h,
          f,
          m,
          g,
          v,
          y,
          b,
          D,
          x,
          C,
          T,
          E,
          _,
          S,
          M,
          k,
          A,
          P,
          F,
          $,
          O,
          L,
          I = e.style,
          z = i.scaleX < 0,
          N = "deg",
          B = getComputedStyle(e),
          R = es(e, tn) || "0";
        return (
          (s = n = r = l = u = c = d = p = h = 0),
          (a = o = 1),
          (i.svg = !(!e.getCTM || !rs(e))),
          B.translate &&
            (("none" === B.translate &&
              "none" === B.scale &&
              "none" === B.rotate) ||
              (I[en] =
                ("none" !== B.translate
                  ? "translate3d(" +
                    (B.translate + " 0 0").split(" ").slice(0, 3).join(", ") +
                    ") "
                  : "") +
                ("none" !== B.rotate ? "rotate(" + B.rotate + ") " : "") +
                ("none" !== B.scale
                  ? "scale(" + B.scale.split(" ").join(",") + ") "
                  : "") +
                ("none" !== B[en] ? B[en] : "")),
            (I.scale = I.rotate = I.translate = "none")),
          (g = fs(e, i.svg)),
          i.svg &&
            ((S = i.uncache
              ? ((M = e.getBBox()),
                (R = i.xOrigin - M.x + "px " + (i.yOrigin - M.y) + "px"),
                "")
              : !t && e.getAttribute("data-svg-origin")),
            ms(e, S || R, !!S || i.originIsAbsolute, !1 !== i.smooth, g)),
          (f = i.xOrigin || 0),
          (m = i.yOrigin || 0),
          g !== cn &&
            ((D = g[0]),
            (x = g[1]),
            (C = g[2]),
            (T = g[3]),
            (s = E = g[4]),
            (n = _ = g[5]),
            6 === g.length
              ? ((a = Math.sqrt(D * D + x * x)),
                (o = Math.sqrt(T * T + C * C)),
                (l = D || x ? Us(x, D) * Vs : 0),
                (d = C || T ? Us(C, T) * Vs + l : 0) &&
                  (o *= Math.abs(Math.cos(d * Gs))),
                i.svg &&
                  ((s -= f - (f * D + m * C)), (n -= m - (f * x + m * T))))
              : ((L = g[6]),
                ($ = g[7]),
                (A = g[8]),
                (P = g[9]),
                (F = g[10]),
                (O = g[11]),
                (s = g[12]),
                (n = g[13]),
                (r = g[14]),
                (u = (v = Us(L, F)) * Vs),
                v &&
                  ((S = E * (y = Math.cos(-v)) + A * (b = Math.sin(-v))),
                  (M = _ * y + P * b),
                  (k = L * y + F * b),
                  (A = E * -b + A * y),
                  (P = _ * -b + P * y),
                  (F = L * -b + F * y),
                  (O = $ * -b + O * y),
                  (E = S),
                  (_ = M),
                  (L = k)),
                (c = (v = Us(-C, F)) * Vs),
                v &&
                  ((y = Math.cos(-v)),
                  (O = T * (b = Math.sin(-v)) + O * y),
                  (D = S = D * y - A * b),
                  (x = M = x * y - P * b),
                  (C = k = C * y - F * b)),
                (l = (v = Us(x, D)) * Vs),
                v &&
                  ((S = D * (y = Math.cos(v)) + x * (b = Math.sin(v))),
                  (M = E * y + _ * b),
                  (x = x * y - D * b),
                  (_ = _ * y - E * b),
                  (D = S),
                  (E = M)),
                u &&
                  359.9 < Math.abs(u) + Math.abs(l) &&
                  ((u = l = 0), (c = 180 - c)),
                (a = w(Math.sqrt(D * D + x * x + C * C))),
                (o = w(Math.sqrt(_ * _ + L * L))),
                (v = Us(E, _)),
                (d = 2e-4 < Math.abs(v) ? v * Vs : 0),
                (h = O ? 1 / (O < 0 ? -O : O) : 0)),
            i.svg &&
              ((S = e.getAttribute("transform")),
              (i.forceCSS = e.setAttribute("transform", "") || !ps(es(e, en))),
              S && e.setAttribute("transform", S))),
          90 < Math.abs(d) &&
            Math.abs(d) < 270 &&
            (z
              ? ((a *= -1),
                (d += l <= 0 ? 180 : -180),
                (l += l <= 0 ? 180 : -180))
              : ((o *= -1), (d += d <= 0 ? 180 : -180))),
          (t = t || i.uncache),
          (i.x =
            s -
            ((i.xPercent =
              s &&
              ((!t && i.xPercent) ||
                (Math.round(e.offsetWidth / 2) === Math.round(-s) ? -50 : 0)))
              ? (e.offsetWidth * i.xPercent) / 100
              : 0) +
            "px"),
          (i.y =
            n -
            ((i.yPercent =
              n &&
              ((!t && i.yPercent) ||
                (Math.round(e.offsetHeight / 2) === Math.round(-n) ? -50 : 0)))
              ? (e.offsetHeight * i.yPercent) / 100
              : 0) +
            "px"),
          (i.z = r + "px"),
          (i.scaleX = w(a)),
          (i.scaleY = w(o)),
          (i.rotation = w(l) + N),
          (i.rotationX = w(u) + N),
          (i.rotationY = w(c) + N),
          (i.skewX = d + N),
          (i.skewY = p + N),
          (i.transformPerspective = h + "px"),
          (i.zOrigin = parseFloat(R.split(" ")[2]) || 0) && (I[tn] = hn(R)),
          (i.xOffset = i.yOffset = 0),
          (i.force3D = Xe.force3D),
          (i.renderTransform = i.svg ? bn : Ss ? yn : fn),
          (i.uncache = 0),
          i
        );
      },
      hn = function (e) {
        return (e = e.split(" "))[0] + " " + e[1];
      },
      fn = function (e, t) {
        (t.z = "0px"),
          (t.rotationY = t.rotationX = "0deg"),
          (t.force3D = 0),
          yn(e, t);
      },
      mn = "0deg",
      gn = "0px",
      vn = ") ",
      yn = function (e, t) {
        var i = t || this,
          s = i.xPercent,
          n = i.yPercent,
          r = i.x,
          a = i.y,
          o = i.z,
          l = i.rotation,
          u = i.rotationY,
          c = i.rotationX,
          d = i.skewX,
          p = i.skewY,
          h = i.scaleX,
          f = i.scaleY,
          m = i.transformPerspective,
          g = i.force3D,
          v = i.target,
          y = i.zOrigin,
          b = "",
          w = ("auto" === g && e && 1 !== e) || !0 === g;
        if (y && (c !== mn || u !== mn)) {
          var D,
            x = parseFloat(u) * Gs,
            C = Math.sin(x),
            T = Math.cos(x);
          (x = parseFloat(c) * Gs),
            (r = gs(v, r, C * (D = Math.cos(x)) * -y)),
            (a = gs(v, a, -Math.sin(x) * -y)),
            (o = gs(v, o, T * D * -y + y));
        }
        m !== gn && (b += "perspective(" + m + vn),
          (s || n) && (b += "translate(" + s + "%, " + n + "%) "),
          (!w && r === gn && a === gn && o === gn) ||
            (b +=
              o !== gn || w
                ? "translate3d(" + r + ", " + a + ", " + o + ") "
                : "translate(" + r + ", " + a + vn),
          l !== mn && (b += "rotate(" + l + vn),
          u !== mn && (b += "rotateY(" + u + vn),
          c !== mn && (b += "rotateX(" + c + vn),
          (d === mn && p === mn) || (b += "skew(" + d + ", " + p + vn),
          (1 === h && 1 === f) || (b += "scale(" + h + ", " + f + vn),
          (v.style[en] = b || "translate(0, 0)");
      },
      bn = function (e, t) {
        var i,
          s,
          n,
          r,
          a,
          o = t || this,
          l = o.xPercent,
          u = o.yPercent,
          c = o.x,
          d = o.y,
          p = o.rotation,
          h = o.skewX,
          f = o.skewY,
          m = o.scaleX,
          g = o.scaleY,
          v = o.target,
          y = o.xOrigin,
          b = o.yOrigin,
          D = o.xOffset,
          x = o.yOffset,
          C = o.forceCSS,
          T = parseFloat(c),
          E = parseFloat(d);
        (p = parseFloat(p)),
          (h = parseFloat(h)),
          (f = parseFloat(f)) && ((h += f = parseFloat(f)), (p += f)),
          p || h
            ? ((p *= Gs),
              (h *= Gs),
              (i = Math.cos(p) * m),
              (s = Math.sin(p) * m),
              (n = Math.sin(p - h) * -g),
              (r = Math.cos(p - h) * g),
              h &&
                ((f *= Gs),
                (a = Math.tan(h - f)),
                (n *= a = Math.sqrt(1 + a * a)),
                (r *= a),
                f &&
                  ((a = Math.tan(f)),
                  (i *= a = Math.sqrt(1 + a * a)),
                  (s *= a))),
              (i = w(i)),
              (s = w(s)),
              (n = w(n)),
              (r = w(r)))
            : ((i = m), (r = g), (s = n = 0)),
          ((T && !~(c + "").indexOf("px")) ||
            (E && !~(d + "").indexOf("px"))) &&
            ((T = ls(v, "x", c, "px")), (E = ls(v, "y", d, "px"))),
          (y || b || D || x) &&
            ((T = w(T + y - (y * i + b * n) + D)),
            (E = w(E + b - (y * s + b * r) + x))),
          (l || u) &&
            ((T = w(T + (l / 100) * (a = v.getBBox()).width)),
            (E = w(E + (u / 100) * a.height))),
          (a =
            "matrix(" +
            i +
            "," +
            s +
            "," +
            n +
            "," +
            r +
            "," +
            T +
            "," +
            E +
            ")"),
          v.setAttribute("transform", a),
          C && (v.style[en] = a);
      };
    b("padding,margin,Width,Radius", function (e, t) {
      var i = "Right",
        s = "Bottom",
        n = "Left",
        r = (
          t < 3 ? ["Top", i, s, n] : ["Top" + n, "Top" + i, s + i, s + n]
        ).map(function (i) {
          return t < 2 ? e + i : "border" + i + e;
        });
      un[1 < t ? "border" + e : e] = function (e, t, i, s, n) {
        var a, o;
        if (arguments.length < 4)
          return (
            (a = r.map(function (t) {
              return on(e, t, i);
            })),
            5 === (o = a.join(" ")).split(a[0]).length ? a[0] : o
          );
        (a = (s + "").split(" ")),
          (o = {}),
          r.forEach(function (e, t) {
            return (o[e] = a[t] = a[t] || a[((t - 1) / 2) | 0]);
          }),
          e.init(t, o, n);
      };
    });
    var wn,
      Dn,
      xn = {
        name: "css",
        register: ts,
        targetTest: function (e) {
          return e.style && e.nodeType;
        },
        init: function (e, t, i, n, r) {
          var a,
            o,
            l,
            u,
            c,
            d,
            h,
            f,
            m,
            g,
            v,
            y,
            b,
            w,
            D,
            C,
            T = this._props,
            E = e.style,
            _ = i.vars.startAt;
          for (h in (Cs || ts(),
          (this.styles = this.styles || Ji(e)),
          (C = this.styles.props),
          (this.tween = i),
          t))
            if (
              "autoRound" !== h &&
              ((o = t[h]), !vt[h] || !Kt(h, t, i, n, e, r))
            )
              if (
                ((c = typeof o),
                (d = un[h]),
                "function" === c && (c = typeof (o = o.call(i, n, e, r))),
                "string" === c && ~o.indexOf("random(") && (o = ne(o)),
                d)
              )
                d(this, e, h, o, i) && (D = 1);
              else if ("--" === h.substr(0, 2))
                (a = (getComputedStyle(e).getPropertyValue(h) + "").trim()),
                  (o += ""),
                  (Ot.lastIndex = 0),
                  Ot.test(a) || ((f = U(a)), (m = U(o))),
                  m ? f !== m && (a = ls(e, h, a, m) + m) : f && (o += f),
                  this.add(E, "setProperty", a, o, n, r, 0, 0, h),
                  T.push(h),
                  C.push(h, 0, E[h]);
              else if ("undefined" !== c) {
                if (
                  (_ && h in _
                    ? (s(
                        (a =
                          "function" == typeof _[h]
                            ? _[h].call(i, n, e, r)
                            : _[h])
                      ) &&
                        ~a.indexOf("random(") &&
                        (a = ne(a)),
                      U(a + "") || (a += Xe.units[h] || U(on(e, h)) || ""),
                      "=" === (a + "").charAt(1) && (a = on(e, h)))
                    : (a = on(e, h)),
                  (u = parseFloat(a)),
                  (g =
                    "string" === c && "=" === o.charAt(1) && o.substr(0, 2)) &&
                    (o = o.substr(2)),
                  (l = parseFloat(o)),
                  h in Zs &&
                    ("autoAlpha" === h &&
                      (1 === u &&
                        "hidden" === on(e, "visibility") &&
                        l &&
                        (u = 0),
                      C.push("visibility", 0, E.visibility),
                      os(
                        this,
                        E,
                        "visibility",
                        u ? "inherit" : "hidden",
                        l ? "inherit" : "hidden",
                        !l
                      )),
                    "scale" !== h &&
                      "transform" !== h &&
                      ~(h = Zs[h]).indexOf(",") &&
                      (h = h.split(",")[0])),
                  (v = h in qs))
                )
                  if (
                    (this.styles.save(h),
                    y ||
                      (((b = e._gsap).renderTransform && !t.parseTransform) ||
                        pn(e, t.parseTransform),
                      (w = !1 !== t.smoothOrigin && b.smooth),
                      ((y = this._pt =
                        new bi(
                          this._pt,
                          E,
                          en,
                          0,
                          1,
                          b.renderTransform,
                          b,
                          0,
                          -1
                        )).dep = 1)),
                    "scale" === h)
                  )
                    (this._pt = new bi(
                      this._pt,
                      b,
                      "scaleY",
                      b.scaleY,
                      (g ? x(b.scaleY, g + l) : l) - b.scaleY || 0,
                      zi
                    )),
                      (this._pt.u = 0),
                      T.push("scaleY", h),
                      (h += "X");
                  else {
                    if ("transformOrigin" === h) {
                      C.push(tn, 0, E[tn]),
                        (o = cs(o)),
                        b.svg
                          ? ms(e, o, 0, w, 0, this)
                          : ((m = parseFloat(o.split(" ")[2]) || 0) !==
                              b.zOrigin && os(this, b, "zOrigin", b.zOrigin, m),
                            os(this, E, h, hn(a), hn(o)));
                      continue;
                    }
                    if ("svgOrigin" === h) {
                      ms(e, o, 1, w, 0, this);
                      continue;
                    }
                    if (h in dn) {
                      vs(this, b, h, u, g ? x(u, g + o) : o);
                      continue;
                    }
                    if ("smoothOrigin" === h) {
                      os(this, b, "smooth", b.smooth, o);
                      continue;
                    }
                    if ("force3D" === h) {
                      b[h] = o;
                      continue;
                    }
                    if ("transform" === h) {
                      bs(this, o, e);
                      continue;
                    }
                  }
                else h in E || (h = nn(h) || h);
                if (
                  v ||
                  ((l || 0 === l) && (u || 0 === u) && !Js.test(o) && h in E)
                )
                  (l = l || 0),
                    (f = (a + "").substr((u + "").length)) !==
                      (m = U(o) || (h in Xe.units ? Xe.units[h] : f)) &&
                      (u = ls(e, h, a, m)),
                    (this._pt = new bi(
                      this._pt,
                      v ? b : E,
                      h,
                      u,
                      (g ? x(u, g + l) : l) - u,
                      v || ("px" !== m && "zIndex" !== h) || !1 === t.autoRound
                        ? zi
                        : Ri
                    )),
                    (this._pt.u = m || 0),
                    f !== m &&
                      "%" !== m &&
                      ((this._pt.b = a), (this._pt.r = Bi));
                else if (h in E) us.call(this, e, h, a, g ? g + o : o);
                else if (h in e) this.add(e, h, a || e[h], g ? g + o : o, n, r);
                else if ("parseTransform" !== h) {
                  p(h, o);
                  continue;
                }
                v || (h in E ? C.push(h, 0, E[h]) : C.push(h, 1, a || e[h])),
                  T.push(h);
              }
          D && yi(this);
        },
        render: function (e, t) {
          if (t.tween._time || !_s())
            for (var i = t._pt; i; ) i.r(e, i.d), (i = i._next);
          else t.styles.revert();
        },
        get: on,
        aliases: Zs,
        getSetter: function (e, t, i) {
          var s = Zs[t];
          return (
            s && s.indexOf(",") < 0 && (t = s),
            t in qs && t !== tn && (e._gsap.x || on(e, "x"))
              ? i && Es === i
                ? "scale" === t
                  ? qi
                  : Xi
                : (Es = i || {}) && ("scale" === t ? Vi : Gi)
              : e.style && !a(e.style[t])
              ? ji
              : ~t.indexOf("-")
              ? Yi
              : di(e, t)
          );
        },
        core: { _removeProperty: as, _getMatrix: fs },
      };
    (Ii.utils.checkPrefix = nn),
      (Ii.core.getStyleSaver = Ji),
      (Dn = b(
        "x,y,z,scale,scaleX,scaleY,xPercent,yPercent" +
          "," +
          (wn = "rotation,rotationX,rotationY,skewX,skewY") +
          ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective",
        function (e) {
          qs[e] = 1;
        }
      )),
      b(wn, function (e) {
        (Xe.units[e] = "deg"), (dn[e] = 1);
      }),
      (Zs[Dn[13]] = "x,y,z,scale,scaleX,scaleY,xPercent,yPercent," + wn),
      b(
        "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY",
        function (e) {
          var t = e.split(":");
          Zs[t[1]] = Dn[t[0]];
        }
      ),
      b(
        "x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",
        function (e) {
          Xe.units[e] = "px";
        }
      ),
      Ii.registerPlugin(xn);
    var Cn = Ii.registerPlugin(xn) || Ii,
      Tn = Cn.core.Tween;
    (e.Back = Rs),
      (e.Bounce = Ws),
      (e.CSSPlugin = xn),
      (e.Circ = Xs),
      (e.Cubic = Ls),
      (e.Elastic = Bs),
      (e.Expo = Ys),
      (e.Linear = $s),
      (e.Power0 = Ms),
      (e.Power1 = ks),
      (e.Power2 = As),
      (e.Power3 = Ps),
      (e.Power4 = Fs),
      (e.Quad = Os),
      (e.Quart = Is),
      (e.Quint = zs),
      (e.Sine = js),
      (e.SteppedEase = Hs),
      (e.Strong = Ns),
      (e.TimelineLite = Ut),
      (e.TimelineMax = Ut),
      (e.TweenLite = ri),
      (e.TweenMax = Tn),
      (e.default = Cn),
      (e.gsap = Cn),
      "undefined" == typeof window || window !== e
        ? Object.defineProperty(e, "__esModule", { value: !0 })
        : delete e.default;
  }),
  (function (e, t) {
    "object" == typeof exports && "undefined" != typeof module
      ? (module.exports = t())
      : "function" == typeof define && define.amd
      ? define(t)
      : ((e || self).Lenis = t());
  })(this, function () {
    function e(e, t) {
      for (var i = 0; i < t.length; i++) {
        var s = t[i];
        (s.enumerable = s.enumerable || !1),
          (s.configurable = !0),
          "value" in s && (s.writable = !0),
          Object.defineProperty(e, s.key, s);
      }
    }
    function t(t, i, s) {
      return (
        i && e(t.prototype, i),
        s && e(t, s),
        Object.defineProperty(t, "prototype", { writable: !1 }),
        t
      );
    }
    function i() {
      return (
        (i = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var i = arguments[t];
                for (var s in i)
                  Object.prototype.hasOwnProperty.call(i, s) && (e[s] = i[s]);
              }
              return e;
            }),
        i.apply(this, arguments)
      );
    }
    function s(e, t) {
      return (
        (s = Object.setPrototypeOf
          ? Object.setPrototypeOf.bind()
          : function (e, t) {
              return (e.__proto__ = t), e;
            }),
        s(e, t)
      );
    }
    function n() {}
    n.prototype = {
      on: function (e, t, i) {
        var s = this.e || (this.e = {});
        return (s[e] || (s[e] = [])).push({ fn: t, ctx: i }), this;
      },
      once: function (e, t, i) {
        var s = this;
        function n() {
          s.off(e, n), t.apply(i, arguments);
        }
        return (n._ = t), this.on(e, n, i);
      },
      emit: function (e) {
        for (
          var t = [].slice.call(arguments, 1),
            i = ((this.e || (this.e = {}))[e] || []).slice(),
            s = 0,
            n = i.length;
          s < n;
          s++
        )
          i[s].fn.apply(i[s].ctx, t);
        return this;
      },
      off: function (e, t) {
        var i = this.e || (this.e = {}),
          s = i[e],
          n = [];
        if (s && t)
          for (var r = 0, a = s.length; r < a; r++)
            s[r].fn !== t && s[r].fn._ !== t && n.push(s[r]);
        return n.length ? (i[e] = n) : delete i[e], this;
      },
    };
    var r = n;
    (n.TinyEmitter = r),
      "undefined" != typeof globalThis
        ? globalThis
        : "undefined" != typeof window
        ? window
        : "undefined" != typeof global
        ? global
        : "undefined" != typeof self && self;
    var a = (function (e) {
      var t = { exports: {} };
      return (
        (function (e, t) {
          e.exports = (function () {
            var e = 0;
            function t(t) {
              return "__private_" + e++ + "_" + t;
            }
            function i(e, t) {
              if (!Object.prototype.hasOwnProperty.call(e, t))
                throw new TypeError(
                  "attempted to use private field on non-instance"
                );
              return e;
            }
            function s() {}
            s.prototype = {
              on: function (e, t, i) {
                var s = this.e || (this.e = {});
                return (s[e] || (s[e] = [])).push({ fn: t, ctx: i }), this;
              },
              once: function (e, t, i) {
                var s = this;
                function n() {
                  s.off(e, n), t.apply(i, arguments);
                }
                return (n._ = t), this.on(e, n, i);
              },
              emit: function (e) {
                for (
                  var t = [].slice.call(arguments, 1),
                    i = ((this.e || (this.e = {}))[e] || []).slice(),
                    s = 0,
                    n = i.length;
                  s < n;
                  s++
                )
                  i[s].fn.apply(i[s].ctx, t);
                return this;
              },
              off: function (e, t) {
                var i = this.e || (this.e = {}),
                  s = i[e],
                  n = [];
                if (s && t)
                  for (var r = 0, a = s.length; r < a; r++)
                    s[r].fn !== t && s[r].fn._ !== t && n.push(s[r]);
                return n.length ? (i[e] = n) : delete i[e], this;
              },
            };
            var n = s;
            n.TinyEmitter = s;
            var r,
              a = "virtualscroll",
              o = t("options"),
              l = t("el"),
              u = t("emitter"),
              c = t("event"),
              d = t("touchStart"),
              p = t("bodyTouchAction");
            return (function () {
              function e(e) {
                var t = this;
                Object.defineProperty(this, o, { writable: !0, value: void 0 }),
                  Object.defineProperty(this, l, {
                    writable: !0,
                    value: void 0,
                  }),
                  Object.defineProperty(this, u, {
                    writable: !0,
                    value: void 0,
                  }),
                  Object.defineProperty(this, c, {
                    writable: !0,
                    value: void 0,
                  }),
                  Object.defineProperty(this, d, {
                    writable: !0,
                    value: void 0,
                  }),
                  Object.defineProperty(this, p, {
                    writable: !0,
                    value: void 0,
                  }),
                  (this._onWheel = function (e) {
                    var s = i(t, o)[o],
                      n = i(t, c)[c];
                    (n.deltaX = e.wheelDeltaX || -1 * e.deltaX),
                      (n.deltaY = e.wheelDeltaY || -1 * e.deltaY),
                      r.isFirefox &&
                        1 === e.deltaMode &&
                        ((n.deltaX *= s.firefoxMultiplier),
                        (n.deltaY *= s.firefoxMultiplier)),
                      (n.deltaX *= s.mouseMultiplier),
                      (n.deltaY *= s.mouseMultiplier),
                      t._notify(e);
                  }),
                  (this._onMouseWheel = function (e) {
                    var s = i(t, c)[c];
                    (s.deltaX = e.wheelDeltaX ? e.wheelDeltaX : 0),
                      (s.deltaY = e.wheelDeltaY ? e.wheelDeltaY : e.wheelDelta),
                      t._notify(e);
                  }),
                  (this._onTouchStart = function (e) {
                    var s = e.targetTouches ? e.targetTouches[0] : e;
                    (i(t, d)[d].x = s.pageX), (i(t, d)[d].y = s.pageY);
                  }),
                  (this._onTouchMove = function (e) {
                    var s = i(t, o)[o];
                    s.preventTouch &&
                      !e.target.classList.contains(s.unpreventTouchClass) &&
                      e.preventDefault();
                    var n = i(t, c)[c],
                      r = e.targetTouches ? e.targetTouches[0] : e;
                    (n.deltaX = (r.pageX - i(t, d)[d].x) * s.touchMultiplier),
                      (n.deltaY = (r.pageY - i(t, d)[d].y) * s.touchMultiplier),
                      (i(t, d)[d].x = r.pageX),
                      (i(t, d)[d].y = r.pageY),
                      t._notify(e);
                  }),
                  (this._onKeyDown = function (e) {
                    var s = i(t, c)[c];
                    s.deltaX = s.deltaY = 0;
                    var n = window.innerHeight - 40;
                    switch (e.keyCode) {
                      case 37:
                      case 38:
                        s.deltaY = i(t, o)[o].keyStep;
                        break;
                      case 39:
                      case 40:
                        s.deltaY = -i(t, o)[o].keyStep;
                        break;
                      case 32:
                        s.deltaY = n * (e.shiftKey ? 1 : -1);
                        break;
                      default:
                        return;
                    }
                    t._notify(e);
                  }),
                  (i(this, l)[l] = window),
                  e && e.el && ((i(this, l)[l] = e.el), delete e.el),
                  r ||
                    (r = {
                      hasWheelEvent: "onwheel" in document,
                      hasMouseWheelEvent: "onmousewheel" in document,
                      hasTouch: "ontouchstart" in document,
                      hasTouchWin:
                        navigator.msMaxTouchPoints &&
                        navigator.msMaxTouchPoints > 1,
                      hasPointer: !!window.navigator.msPointerEnabled,
                      hasKeyDown: "onkeydown" in document,
                      isFirefox: navigator.userAgent.indexOf("Firefox") > -1,
                    }),
                  (i(this, o)[o] = Object.assign(
                    {
                      mouseMultiplier: 1,
                      touchMultiplier: 2,
                      firefoxMultiplier: 15,
                      keyStep: 120,
                      preventTouch: !1,
                      unpreventTouchClass: "vs-touchmove-allowed",
                      useKeyboard: !0,
                      useTouch: !0,
                    },
                    e
                  )),
                  (i(this, u)[u] = new n()),
                  (i(this, c)[c] = { y: 0, x: 0, deltaX: 0, deltaY: 0 }),
                  (i(this, d)[d] = { x: null, y: null }),
                  (i(this, p)[p] = null),
                  void 0 !== i(this, o)[o].passive &&
                    (this.listenerOptions = { passive: i(this, o)[o].passive });
              }
              var t = e.prototype;
              return (
                (t._notify = function (e) {
                  var t = i(this, c)[c];
                  (t.x += t.deltaX),
                    (t.y += t.deltaY),
                    i(this, u)[u].emit(a, {
                      x: t.x,
                      y: t.y,
                      deltaX: t.deltaX,
                      deltaY: t.deltaY,
                      originalEvent: e,
                    });
                }),
                (t._bind = function () {
                  r.hasWheelEvent &&
                    i(this, l)[l].addEventListener(
                      "wheel",
                      this._onWheel,
                      this.listenerOptions
                    ),
                    r.hasMouseWheelEvent &&
                      i(this, l)[l].addEventListener(
                        "mousewheel",
                        this._onMouseWheel,
                        this.listenerOptions
                      ),
                    r.hasTouch &&
                      i(this, o)[o].useTouch &&
                      (i(this, l)[l].addEventListener(
                        "touchstart",
                        this._onTouchStart,
                        this.listenerOptions
                      ),
                      i(this, l)[l].addEventListener(
                        "touchmove",
                        this._onTouchMove,
                        this.listenerOptions
                      )),
                    r.hasPointer &&
                      r.hasTouchWin &&
                      ((i(this, p)[p] = document.body.style.msTouchAction),
                      (document.body.style.msTouchAction = "none"),
                      i(this, l)[l].addEventListener(
                        "MSPointerDown",
                        this._onTouchStart,
                        !0
                      ),
                      i(this, l)[l].addEventListener(
                        "MSPointerMove",
                        this._onTouchMove,
                        !0
                      )),
                    r.hasKeyDown &&
                      i(this, o)[o].useKeyboard &&
                      document.addEventListener("keydown", this._onKeyDown);
                }),
                (t._unbind = function () {
                  r.hasWheelEvent &&
                    i(this, l)[l].removeEventListener("wheel", this._onWheel),
                    r.hasMouseWheelEvent &&
                      i(this, l)[l].removeEventListener(
                        "mousewheel",
                        this._onMouseWheel
                      ),
                    r.hasTouch &&
                      (i(this, l)[l].removeEventListener(
                        "touchstart",
                        this._onTouchStart
                      ),
                      i(this, l)[l].removeEventListener(
                        "touchmove",
                        this._onTouchMove
                      )),
                    r.hasPointer &&
                      r.hasTouchWin &&
                      ((document.body.style.msTouchAction = i(this, p)[p]),
                      i(this, l)[l].removeEventListener(
                        "MSPointerDown",
                        this._onTouchStart,
                        !0
                      ),
                      i(this, l)[l].removeEventListener(
                        "MSPointerMove",
                        this._onTouchMove,
                        !0
                      )),
                    r.hasKeyDown &&
                      i(this, o)[o].useKeyboard &&
                      document.removeEventListener("keydown", this._onKeyDown);
                }),
                (t.on = function (e, t) {
                  i(this, u)[u].on(a, e, t);
                  var s = i(this, u)[u].e;
                  s && s[a] && 1 === s[a].length && this._bind();
                }),
                (t.off = function (e, t) {
                  i(this, u)[u].off(a, e, t);
                  var s = i(this, u)[u].e;
                  (!s[a] || s[a].length <= 0) && this._unbind();
                }),
                (t.destroy = function () {
                  i(this, u)[u].off(), this._unbind();
                }),
                e
              );
            })();
          })();
        })(t),
        t.exports
      );
    })();
    function o(e, t) {
      var i = e % t;
      return ((t > 0 && i < 0) || (t < 0 && i > 0)) && (i += t), i;
    }
    var l = ["duration", "easing"],
      u = (function () {
        function e() {}
        var s = e.prototype;
        return (
          (s.to = function (e, t) {
            var s = this,
              n = void 0 === t ? {} : t,
              r = n.duration,
              a = void 0 === r ? 1 : r,
              o = n.easing,
              u =
                void 0 === o
                  ? function (e) {
                      return e;
                    }
                  : o,
              c = (function (e, t) {
                if (null == e) return {};
                var i,
                  s,
                  n = {},
                  r = Object.keys(e);
                for (s = 0; s < r.length; s++)
                  t.indexOf((i = r[s])) >= 0 || (n[i] = e[i]);
                return n;
              })(n, l);
            (this.target = e),
              (this.fromKeys = i({}, c)),
              (this.toKeys = i({}, c)),
              (this.keys = Object.keys(i({}, c))),
              this.keys.forEach(function (t) {
                s.fromKeys[t] = e[t];
              }),
              (this.duration = a),
              (this.easing = u),
              (this.currentTime = 0),
              (this.isRunning = !0);
          }),
          (s.stop = function () {
            this.isRunning = !1;
          }),
          (s.raf = function (e) {
            var t = this;
            if (this.isRunning) {
              this.currentTime = Math.min(this.currentTime + e, this.duration);
              var i = this.progress >= 1 ? 1 : this.easing(this.progress);
              this.keys.forEach(function (e) {
                var s = t.fromKeys[e];
                t.target[e] = s + (t.toKeys[e] - s) * i;
              }),
                1 === i && this.stop();
            }
          }),
          t(e, [
            {
              key: "progress",
              get: function () {
                return this.currentTime / this.duration;
              },
            },
          ]),
          e
        );
      })();
    return (function (e) {
      var i, n;
      function r(t) {
        var i,
          s,
          n,
          r,
          o = void 0 === t ? {} : t,
          l = o.duration,
          c = void 0 === l ? 1.2 : l,
          d = o.easing,
          p =
            void 0 === d
              ? function (e) {
                  return Math.min(1, 1.001 - Math.pow(2, -10 * e));
                }
              : d,
          h = o.smooth,
          f = void 0 === h || h,
          m = o.mouseMultiplier,
          g = void 0 === m ? 1 : m,
          v = o.smoothTouch,
          y = void 0 !== v && v,
          b = o.touchMultiplier,
          w = void 0 === b ? 2 : b,
          D = o.direction,
          x = void 0 === D ? "vertical" : D,
          C = o.gestureDirection,
          T = void 0 === C ? "vertical" : C,
          E = o.infinite,
          _ = void 0 !== E && E,
          S = o.wrapper,
          M = void 0 === S ? window : S,
          k = o.content,
          A = void 0 === k ? document.body : k;
        ((r = e.call(this) || this).onWindowResize = function () {
          (r.wrapperWidth = window.innerWidth),
            (r.wrapperHeight = window.innerHeight);
        }),
          (r.onWrapperResize = function (e) {
            var t = e[0];
            if (t) {
              var i = t.contentRect;
              (r.wrapperWidth = i.width), (r.wrapperHeight = i.height);
            }
          }),
          (r.onContentResize = function (e) {
            var t = e[0];
            if (t) {
              var i = t.contentRect;
              (r.contentWidth = i.width), (r.contentHeight = i.height);
            }
          }),
          (r.onVirtualScroll = function (e) {
            var t = e.deltaY,
              i = e.deltaX,
              s = e.originalEvent;
            if (
              !(
                ("vertical" === r.gestureDirection && 0 === t) ||
                ("horizontal" === r.gestureDirection && 0 === i)
              )
            ) {
              var n = !!s.composedPath().find(function (e) {
                return e.hasAttribute && e.hasAttribute("data-lenis-prevent");
              });
              s.ctrlKey ||
                n ||
                ((r.smooth = s.changedTouches
                  ? r.smoothTouch
                  : r.options.smooth),
                r.stopped
                  ? s.preventDefault()
                  : r.smooth &&
                    4 !== s.buttons &&
                    (r.smooth && s.preventDefault(),
                    (r.targetScroll -=
                      "both" === r.gestureDirection
                        ? i + t
                        : "horizontal" === r.gestureDirection
                        ? i
                        : t),
                    r.scrollTo(r.targetScroll)));
            }
          }),
          (r.onScroll = function (e) {
            (r.isScrolling && r.smooth) ||
              ((r.targetScroll =
                r.scroll =
                r.lastScroll =
                  r.wrapperNode[r.scrollProperty]),
              r.notify());
          }),
          (window.lenisVersion = "0.2.28"),
          (r.options = {
            duration: c,
            easing: p,
            smooth: f,
            mouseMultiplier: g,
            smoothTouch: y,
            touchMultiplier: w,
            direction: x,
            gestureDirection: T,
            infinite: _,
            wrapper: M,
            content: A,
          }),
          (r.duration = c),
          (r.easing = p),
          (r.smooth = f),
          (r.mouseMultiplier = g),
          (r.smoothTouch = y),
          (r.touchMultiplier = w),
          (r.direction = x),
          (r.gestureDirection = T),
          (r.infinite = _),
          (r.wrapperNode = M),
          (r.contentNode = A),
          r.wrapperNode.addEventListener("scroll", r.onScroll),
          r.wrapperNode === window
            ? (r.wrapperNode.addEventListener("resize", r.onWindowResize),
              r.onWindowResize())
            : ((r.wrapperHeight = r.wrapperNode.offsetHeight),
              (r.wrapperWidth = r.wrapperNode.offsetWidth),
              (r.wrapperObserver = new ResizeObserver(r.onWrapperResize)),
              r.wrapperObserver.observe(r.wrapperNode)),
          (r.contentHeight = r.contentNode.offsetHeight),
          (r.contentWidth = r.contentNode.offsetWidth),
          (r.contentObserver = new ResizeObserver(r.onContentResize)),
          r.contentObserver.observe(r.contentNode),
          (r.targetScroll =
            r.scroll =
            r.lastScroll =
              r.wrapperNode[r.scrollProperty]),
          (r.animate = new u());
        var P =
          (null == (i = navigator) || null == (s = i.userAgentData)
            ? void 0
            : s.platform) ||
          (null == (n = navigator) ? void 0 : n.platform) ||
          "unknown";
        return (
          (r.virtualScroll = new a({
            el: r.wrapperNode,
            firefoxMultiplier: 50,
            mouseMultiplier:
              r.mouseMultiplier *
              (P.includes("Win") || P.includes("Linux") ? 0.84 : 0.4),
            touchMultiplier: r.touchMultiplier,
            passive: !1,
            useKeyboard: !1,
            useTouch: !0,
          })),
          r.virtualScroll.on(r.onVirtualScroll),
          r
        );
      }
      (n = e),
        ((i = r).prototype = Object.create(n.prototype)),
        (i.prototype.constructor = i),
        s(i, n);
      var l = r.prototype;
      return (
        (l.start = function () {
          var e = this.wrapperNode;
          this.wrapperNode === window && (e = document.documentElement),
            e.classList.remove("lenis-stopped"),
            (this.stopped = !1);
        }),
        (l.stop = function () {
          var e = this.wrapperNode;
          this.wrapperNode === window && (e = document.documentElement),
            e.classList.add("lenis-stopped"),
            (this.stopped = !0),
            this.animate.stop();
        }),
        (l.destroy = function () {
          var e;
          this.wrapperNode === window &&
            this.wrapperNode.removeEventListener("resize", this.onWindowResize),
            this.wrapperNode.removeEventListener("scroll", this.onScroll),
            this.virtualScroll.destroy(),
            null == (e = this.wrapperObserver) || e.disconnect(),
            this.contentObserver.disconnect();
        }),
        (l.raf = function (e) {
          var t = e - (this.now || 0);
          (this.now = e),
            !this.stopped &&
              this.smooth &&
              ((this.lastScroll = this.scroll),
              this.animate.raf(0.001 * t),
              this.scroll === this.targetScroll &&
                (this.lastScroll = this.scroll),
              this.isScrolling && (this.setScroll(this.scroll), this.notify()),
              (this.isScrolling = this.scroll !== this.targetScroll));
        }),
        (l.setScroll = function (e) {
          var t = this.infinite ? o(e, this.limit) : e;
          "horizontal" === this.direction
            ? this.wrapperNode.scrollTo(t, 0)
            : this.wrapperNode.scrollTo(0, t);
        }),
        (l.notify = function () {
          var e = this.infinite ? o(this.scroll, this.limit) : this.scroll;
          this.emit("scroll", {
            scroll: e,
            limit: this.limit,
            velocity: this.velocity,
            direction: 0 === this.velocity ? 0 : this.velocity > 0 ? 1 : -1,
            progress: e / this.limit,
          });
        }),
        (l.scrollTo = function (e, t) {
          var i = void 0 === t ? {} : t,
            s = i.offset,
            n = void 0 === s ? 0 : s,
            r = i.immediate,
            a = void 0 !== r && r,
            o = i.duration,
            l = void 0 === o ? this.duration : o,
            u = i.easing,
            c = void 0 === u ? this.easing : u;
          if (null != e && !this.stopped) {
            var d;
            if ("number" == typeof e) d = e;
            else if ("top" === e || "#top" === e) d = 0;
            else if ("bottom" === e) d = this.limit;
            else {
              var p;
              if ("string" == typeof e) p = document.querySelector(e);
              else {
                if (null == e || !e.nodeType) return;
                p = e;
              }
              if (!p) return;
              var h = 0;
              if (this.wrapperNode !== window) {
                var f = this.wrapperNode.getBoundingClientRect();
                h = "horizontal" === this.direction ? f.left : f.top;
              }
              var m = p.getBoundingClientRect();
              d =
                ("horizontal" === this.direction ? m.left : m.top) +
                this.scroll -
                h;
            }
            (d += n),
              (this.targetScroll = this.infinite
                ? d
                : Math.max(0, Math.min(d, this.limit))),
              !this.smooth || a
                ? (this.animate.stop(),
                  (this.scroll = this.lastScroll = this.targetScroll),
                  this.setScroll(this.targetScroll))
                : this.animate.to(this, {
                    duration: l,
                    easing: c,
                    scroll: this.targetScroll,
                  });
          }
        }),
        t(r, [
          {
            key: "scrollProperty",
            get: function () {
              return this.wrapperNode === window
                ? "horizontal" === this.direction
                  ? "scrollX"
                  : "scrollY"
                : "horizontal" === this.direction
                ? "scrollLeft"
                : "scrollTop";
            },
          },
          {
            key: "limit",
            get: function () {
              return "horizontal" === this.direction
                ? this.contentWidth - this.wrapperWidth
                : this.contentHeight - this.wrapperHeight;
            },
          },
          {
            key: "velocity",
            get: function () {
              return this.scroll - this.lastScroll;
            },
          },
        ]),
        r
      );
    })(r);
  }),
  "object" == typeof navigator &&
    (function (e, t) {
      "object" == typeof exports && "undefined" != typeof module
        ? (module.exports = t())
        : "function" == typeof define && define.amd
        ? define("Plyr", t)
        : ((e =
            "undefined" != typeof globalThis ? globalThis : e || self).Plyr =
            t());
    })(this, function () {
      "use strict";
      function e(e, t, i) {
        return (
          (t = (function (e) {
            var t = (function (e, t) {
              if ("object" != typeof e || null === e) return e;
              var i = e[Symbol.toPrimitive];
              if (void 0 !== i) {
                var s = i.call(e, t);
                if ("object" != typeof s) return s;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value."
                );
              }
              return String(e);
            })(e, "string");
            return "symbol" == typeof t ? t : String(t);
          })(t)) in e
            ? Object.defineProperty(e, t, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = i),
          e
        );
      }
      function t(e, t) {
        for (var i = 0; i < t.length; i++) {
          var s = t[i];
          (s.enumerable = s.enumerable || !1),
            (s.configurable = !0),
            "value" in s && (s.writable = !0),
            Object.defineProperty(e, s.key, s);
        }
      }
      function i(e, t, i) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = i),
          e
        );
      }
      function s(e, t) {
        var i = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var s = Object.getOwnPropertySymbols(e);
          t &&
            (s = s.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            i.push.apply(i, s);
        }
        return i;
      }
      function n(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? s(Object(n), !0).forEach(function (t) {
                i(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : s(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var r = { addCSS: !0, thumbWidth: 15, watch: !0 },
        a = function (e) {
          return null != e ? e.constructor : null;
        },
        o = function (e, t) {
          return !!(e && t && e instanceof t);
        },
        l = function (e) {
          return null == e;
        },
        u = function (e) {
          return a(e) === Object;
        },
        c = function (e) {
          return a(e) === String;
        },
        d = function (e) {
          return Array.isArray(e);
        },
        p = function (e) {
          return o(e, NodeList);
        },
        h = {
          nullOrUndefined: l,
          object: u,
          number: function (e) {
            return a(e) === Number && !Number.isNaN(e);
          },
          string: c,
          boolean: function (e) {
            return a(e) === Boolean;
          },
          function: function (e) {
            return a(e) === Function;
          },
          array: d,
          nodeList: p,
          element: function (e) {
            return o(e, Element);
          },
          event: function (e) {
            return o(e, Event);
          },
          empty: function (e) {
            return (
              l(e) ||
              ((c(e) || d(e) || p(e)) && !e.length) ||
              (u(e) && !Object.keys(e).length)
            );
          },
        };
      var f = (function () {
        function e(t, i) {
          (function (e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, e),
            h.element(t)
              ? (this.element = t)
              : h.string(t) && (this.element = document.querySelector(t)),
            h.element(this.element) &&
              h.empty(this.element.rangeTouch) &&
              ((this.config = n({}, r, {}, i)), this.init());
        }
        return (
          (function (e, i, s) {
            i && t(e.prototype, i), s && t(e, s);
          })(
            e,
            [
              {
                key: "init",
                value: function () {
                  e.enabled &&
                    (this.config.addCSS &&
                      ((this.element.style.userSelect = "none"),
                      (this.element.style.webKitUserSelect = "none"),
                      (this.element.style.touchAction = "manipulation")),
                    this.listeners(!0),
                    (this.element.rangeTouch = this));
                },
              },
              {
                key: "destroy",
                value: function () {
                  e.enabled &&
                    (this.config.addCSS &&
                      ((this.element.style.userSelect = ""),
                      (this.element.style.webKitUserSelect = ""),
                      (this.element.style.touchAction = "")),
                    this.listeners(!1),
                    (this.element.rangeTouch = null));
                },
              },
              {
                key: "listeners",
                value: function (e) {
                  var t = this,
                    i = e ? "addEventListener" : "removeEventListener";
                  ["touchstart", "touchmove", "touchend"].forEach(function (e) {
                    t.element[i](
                      e,
                      function (e) {
                        return t.set(e);
                      },
                      !1
                    );
                  });
                },
              },
              {
                key: "get",
                value: function (t) {
                  if (!e.enabled || !h.event(t)) return null;
                  var i,
                    s = t.target,
                    n = t.changedTouches[0],
                    r = parseFloat(s.getAttribute("min")) || 0,
                    a = parseFloat(s.getAttribute("max")) || 100,
                    o = parseFloat(s.getAttribute("step")) || 1,
                    l = s.getBoundingClientRect(),
                    u = ((100 / l.width) * (this.config.thumbWidth / 2)) / 100;
                  return (
                    0 > (i = (100 / l.width) * (n.clientX - l.left))
                      ? (i = 0)
                      : 100 < i && (i = 100),
                    50 > i
                      ? (i -= (100 - 2 * i) * u)
                      : 50 < i && (i += 2 * (i - 50) * u),
                    r +
                      (function (e, t) {
                        if (1 > t) {
                          var i = (function (e) {
                            var t = ""
                              .concat(e)
                              .match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
                            return t
                              ? Math.max(
                                  0,
                                  (t[1] ? t[1].length : 0) - (t[2] ? +t[2] : 0)
                                )
                              : 0;
                          })(t);
                          return parseFloat(e.toFixed(i));
                        }
                        return Math.round(e / t) * t;
                      })((i / 100) * (a - r), o)
                  );
                },
              },
              {
                key: "set",
                value: function (t) {
                  e.enabled &&
                    h.event(t) &&
                    !t.target.disabled &&
                    (t.preventDefault(),
                    (t.target.value = this.get(t)),
                    (function (e, t) {
                      if (e && t) {
                        var i = new Event(t, { bubbles: !0 });
                        e.dispatchEvent(i);
                      }
                    })(t.target, "touchend" === t.type ? "change" : "input"));
                },
              },
            ],
            [
              {
                key: "setup",
                value: function (t) {
                  var i =
                      1 < arguments.length && void 0 !== arguments[1]
                        ? arguments[1]
                        : {},
                    s = null;
                  if (
                    (h.empty(t) || h.string(t)
                      ? (s = Array.from(
                          document.querySelectorAll(
                            h.string(t) ? t : 'input[type="range"]'
                          )
                        ))
                      : h.element(t)
                      ? (s = [t])
                      : h.nodeList(t)
                      ? (s = Array.from(t))
                      : h.array(t) && (s = t.filter(h.element)),
                    h.empty(s))
                  )
                    return null;
                  var a = n({}, r, {}, i);
                  if (h.string(t) && a.watch) {
                    var o = new MutationObserver(function (i) {
                      Array.from(i).forEach(function (i) {
                        Array.from(i.addedNodes).forEach(function (i) {
                          h.element(i) &&
                            (function (e, t) {
                              return function () {
                                return Array.from(
                                  document.querySelectorAll(t)
                                ).includes(this);
                              }.call(e, t);
                            })(i, t) &&
                            new e(i, a);
                        });
                      });
                    });
                    o.observe(document.body, { childList: !0, subtree: !0 });
                  }
                  return s.map(function (t) {
                    return new e(t, i);
                  });
                },
              },
              {
                key: "enabled",
                get: function () {
                  return "ontouchstart" in document.documentElement;
                },
              },
            ]
          ),
          e
        );
      })();
      const m = (e) => (null != e ? e.constructor : null),
        g = (e, t) => Boolean(e && t && e instanceof t),
        v = (e) => null == e,
        y = (e) => m(e) === Object,
        b = (e) => m(e) === String,
        w = (e) => "function" == typeof e,
        D = (e) => Array.isArray(e),
        x = (e) => g(e, NodeList),
        C = (e) =>
          v(e) ||
          ((b(e) || D(e) || x(e)) && !e.length) ||
          (y(e) && !Object.keys(e).length);
      var T = v,
        E = y,
        _ = (e) => m(e) === Number && !Number.isNaN(e),
        S = b,
        M = (e) => m(e) === Boolean,
        k = w,
        A = D,
        P = x,
        F = (e) =>
          null !== e &&
          "object" == typeof e &&
          1 === e.nodeType &&
          "object" == typeof e.style &&
          "object" == typeof e.ownerDocument,
        $ = (e) => g(e, Event),
        O = (e) => g(e, KeyboardEvent),
        L = (e) => g(e, TextTrack) || (!v(e) && b(e.kind)),
        I = (e) => g(e, Promise) && w(e.then),
        z = (e) => {
          if (g(e, window.URL)) return !0;
          if (!b(e)) return !1;
          let t = e;
          (e.startsWith("http://") && e.startsWith("https://")) ||
            (t = `http://${e}`);
          try {
            return !C(new URL(t).hostname);
          } catch (e) {
            return !1;
          }
        },
        N = C;
      const B = (() => {
        const e = document.createElement("span"),
          t = {
            WebkitTransition: "webkitTransitionEnd",
            MozTransition: "transitionend",
            OTransition: "oTransitionEnd otransitionend",
            transition: "transitionend",
          },
          i = Object.keys(t).find((t) => void 0 !== e.style[t]);
        return !!S(i) && t[i];
      })();
      function R(e, t) {
        setTimeout(() => {
          try {
            (e.hidden = !0), e.offsetHeight, (e.hidden = !1);
          } catch (e) {}
        }, t);
      }
      var H = {
        isIE: Boolean(window.document.documentMode),
        isEdge: /Edge/g.test(navigator.userAgent),
        isWebKit:
          "WebkitAppearance" in document.documentElement.style &&
          !/Edge/g.test(navigator.userAgent),
        isIPhone:
          /iPhone|iPod/gi.test(navigator.userAgent) &&
          navigator.maxTouchPoints > 1,
        isIPadOS:
          "MacIntel" === navigator.platform && navigator.maxTouchPoints > 1,
        isIos:
          /iPad|iPhone|iPod/gi.test(navigator.userAgent) &&
          navigator.maxTouchPoints > 1,
      };
      function W(e, t) {
        return t.split(".").reduce((e, t) => e && e[t], e);
      }
      function j(e = {}, ...t) {
        if (!t.length) return e;
        const i = t.shift();
        return E(i)
          ? (Object.keys(i).forEach((t) => {
              E(i[t])
                ? (Object.keys(e).includes(t) || Object.assign(e, { [t]: {} }),
                  j(e[t], i[t]))
                : Object.assign(e, { [t]: i[t] });
            }),
            j(e, ...t))
          : e;
      }
      function Y(e, t) {
        const i = e.length ? e : [e];
        Array.from(i)
          .reverse()
          .forEach((e, i) => {
            const s = i > 0 ? t.cloneNode(!0) : t,
              n = e.parentNode,
              r = e.nextSibling;
            s.appendChild(e), r ? n.insertBefore(s, r) : n.appendChild(s);
          });
      }
      function X(e, t) {
        F(e) &&
          !N(t) &&
          Object.entries(t)
            .filter(([, e]) => !T(e))
            .forEach(([t, i]) => e.setAttribute(t, i));
      }
      function q(e, t, i) {
        const s = document.createElement(e);
        return E(t) && X(s, t), S(i) && (s.innerText = i), s;
      }
      function V(e, t, i, s) {
        F(t) && t.appendChild(q(e, i, s));
      }
      function G(e) {
        P(e) || A(e)
          ? Array.from(e).forEach(G)
          : F(e) && F(e.parentNode) && e.parentNode.removeChild(e);
      }
      function U(e) {
        if (!F(e)) return;
        let { length: t } = e.childNodes;
        for (; t > 0; ) e.removeChild(e.lastChild), (t -= 1);
      }
      function K(e, t) {
        return F(t) && F(t.parentNode) && F(e)
          ? (t.parentNode.replaceChild(e, t), e)
          : null;
      }
      function Q(e, t) {
        if (!S(e) || N(e)) return {};
        const i = {},
          s = j({}, t);
        return (
          e.split(",").forEach((e) => {
            const t = e.trim(),
              n = t.replace(".", ""),
              r = t.replace(/[[\]]/g, "").split("="),
              [a] = r,
              o = r.length > 1 ? r[1].replace(/["']/g, "") : "";
            switch (t.charAt(0)) {
              case ".":
                S(s.class) ? (i.class = `${s.class} ${n}`) : (i.class = n);
                break;
              case "#":
                i.id = t.replace("#", "");
                break;
              case "[":
                i[a] = o;
            }
          }),
          j(s, i)
        );
      }
      function J(e, t) {
        if (!F(e)) return;
        let i = t;
        M(i) || (i = !e.hidden), (e.hidden = i);
      }
      function Z(e, t, i) {
        if (P(e)) return Array.from(e).map((e) => Z(e, t, i));
        if (F(e)) {
          let s = "toggle";
          return (
            void 0 !== i && (s = i ? "add" : "remove"),
            e.classList[s](t),
            e.classList.contains(t)
          );
        }
        return !1;
      }
      function ee(e, t) {
        return F(e) && e.classList.contains(t);
      }
      function te(e, t) {
        const { prototype: i } = Element;
        return (
          i.matches ||
          i.webkitMatchesSelector ||
          i.mozMatchesSelector ||
          i.msMatchesSelector ||
          function () {
            return Array.from(document.querySelectorAll(t)).includes(this);
          }
        ).call(e, t);
      }
      function ie(e) {
        return this.elements.container.querySelectorAll(e);
      }
      function se(e) {
        return this.elements.container.querySelector(e);
      }
      function ne(e = null, t = !1) {
        F(e) && e.focus({ preventScroll: !0, focusVisible: t });
      }
      const re = {
          "audio/ogg": "vorbis",
          "audio/wav": "1",
          "video/webm": "vp8, vorbis",
          "video/mp4": "avc1.42E01E, mp4a.40.2",
          "video/ogg": "theora",
        },
        ae = {
          audio: "canPlayType" in document.createElement("audio"),
          video: "canPlayType" in document.createElement("video"),
          check(e, t) {
            const i = ae[e] || "html5" !== t;
            return { api: i, ui: i && ae.rangeInput };
          },
          pip: !(
            H.isIPhone ||
            (!k(q("video").webkitSetPresentationMode) &&
              (!document.pictureInPictureEnabled ||
                q("video").disablePictureInPicture))
          ),
          airplay: k(window.WebKitPlaybackTargetAvailabilityEvent),
          playsinline: "playsInline" in document.createElement("video"),
          mime(e) {
            if (N(e)) return !1;
            const [t] = e.split("/");
            let i = e;
            if (!this.isHTML5 || t !== this.type) return !1;
            Object.keys(re).includes(i) && (i += `; codecs="${re[e]}"`);
            try {
              return Boolean(i && this.media.canPlayType(i).replace(/no/, ""));
            } catch (e) {
              return !1;
            }
          },
          textTracks: "textTracks" in document.createElement("video"),
          rangeInput: (() => {
            const e = document.createElement("input");
            return (e.type = "range"), "range" === e.type;
          })(),
          touch: "ontouchstart" in document.documentElement,
          transitions: !1 !== B,
          reducedMotion:
            "matchMedia" in window &&
            window.matchMedia("(prefers-reduced-motion)").matches,
        },
        oe = (() => {
          let e = !1;
          try {
            const t = Object.defineProperty({}, "passive", {
              get: () => ((e = !0), null),
            });
            window.addEventListener("test", null, t),
              window.removeEventListener("test", null, t);
          } catch (e) {}
          return e;
        })();
      function le(e, t, i, s = !1, n = !0, r = !1) {
        if (!e || !("addEventListener" in e) || N(t) || !k(i)) return;
        const a = t.split(" ");
        let o = r;
        oe && (o = { passive: n, capture: r }),
          a.forEach((t) => {
            this &&
              this.eventListeners &&
              s &&
              this.eventListeners.push({
                element: e,
                type: t,
                callback: i,
                options: o,
              }),
              e[s ? "addEventListener" : "removeEventListener"](t, i, o);
          });
      }
      function ue(e, t = "", i, s = !0, n = !1) {
        le.call(this, e, t, i, !0, s, n);
      }
      function ce(e, t = "", i, s = !0, n = !1) {
        le.call(this, e, t, i, !1, s, n);
      }
      function de(e, t = "", i, s = !0, n = !1) {
        const r = (...a) => {
          ce(e, t, r, s, n), i.apply(this, a);
        };
        le.call(this, e, t, r, !0, s, n);
      }
      function pe(e, t = "", i = !1, s = {}) {
        if (!F(e) || N(t)) return;
        const n = new CustomEvent(t, {
          bubbles: i,
          detail: { ...s, plyr: this },
        });
        e.dispatchEvent(n);
      }
      function he() {
        this &&
          this.eventListeners &&
          (this.eventListeners.forEach((e) => {
            const { element: t, type: i, callback: s, options: n } = e;
            t.removeEventListener(i, s, n);
          }),
          (this.eventListeners = []));
      }
      function fe() {
        return new Promise((e) =>
          this.ready
            ? setTimeout(e, 0)
            : ue.call(this, this.elements.container, "ready", e)
        ).then(() => {});
      }
      function me(e) {
        I(e) && e.then(null, () => {});
      }
      function ge(e) {
        return A(e) ? e.filter((t, i) => e.indexOf(t) === i) : e;
      }
      function ve(e, t) {
        return A(e) && e.length
          ? e.reduce((e, i) => (Math.abs(i - t) < Math.abs(e - t) ? i : e))
          : null;
      }
      function ye(e) {
        return !(!window || !window.CSS) && window.CSS.supports(e);
      }
      const be = [
        [1, 1],
        [4, 3],
        [3, 4],
        [5, 4],
        [4, 5],
        [3, 2],
        [2, 3],
        [16, 10],
        [10, 16],
        [16, 9],
        [9, 16],
        [21, 9],
        [9, 21],
        [32, 9],
        [9, 32],
      ].reduce((e, [t, i]) => ({ ...e, [t / i]: [t, i] }), {});
      function we(e) {
        return (
          !!(A(e) || (S(e) && e.includes(":"))) &&
          (A(e) ? e : e.split(":")).map(Number).every(_)
        );
      }
      function De(e) {
        if (!A(e) || !e.every(_)) return null;
        const [t, i] = e,
          s = (e, t) => (0 === t ? e : s(t, e % t)),
          n = s(t, i);
        return [t / n, i / n];
      }
      function xe(e) {
        const t = (e) => (we(e) ? e.split(":").map(Number) : null);
        let i = t(e);
        if (
          (null === i && (i = t(this.config.ratio)),
          null === i &&
            !N(this.embed) &&
            A(this.embed.ratio) &&
            ({ ratio: i } = this.embed),
          null === i && this.isHTML5)
        ) {
          const { videoWidth: e, videoHeight: t } = this.media;
          i = [e, t];
        }
        return De(i);
      }
      function Ce(e) {
        if (!this.isVideo) return {};
        const { wrapper: t } = this.elements,
          i = xe.call(this, e);
        if (!A(i)) return {};
        const [s, n] = De(i),
          r = (100 / s) * n;
        if (
          (ye(`aspect-ratio: ${s}/${n}`)
            ? (t.style.aspectRatio = `${s}/${n}`)
            : (t.style.paddingBottom = `${r}%`),
          this.isVimeo && !this.config.vimeo.premium && this.supported.ui)
        ) {
          const e =
              (100 / this.media.offsetWidth) *
              parseInt(window.getComputedStyle(this.media).paddingBottom, 10),
            i = (e - r) / (e / 50);
          this.fullscreen.active
            ? (t.style.paddingBottom = null)
            : (this.media.style.transform = `translateY(-${i}%)`);
        } else this.isHTML5 && t.classList.add(this.config.classNames.videoFixedRatio);
        return { padding: r, ratio: i };
      }
      function Te(e, t, i = 0.05) {
        const s = e / t,
          n = ve(Object.keys(be), s);
        return Math.abs(n - s) <= i ? be[n] : [e, t];
      }
      const Ee = {
        getSources() {
          return this.isHTML5
            ? Array.from(this.media.querySelectorAll("source")).filter((e) => {
                const t = e.getAttribute("type");
                return !!N(t) || ae.mime.call(this, t);
              })
            : [];
        },
        getQualityOptions() {
          return this.config.quality.forced
            ? this.config.quality.options
            : Ee.getSources
                .call(this)
                .map((e) => Number(e.getAttribute("size")))
                .filter(Boolean);
        },
        setup() {
          if (!this.isHTML5) return;
          const e = this;
          (e.options.speed = e.config.speed.options),
            N(this.config.ratio) || Ce.call(e),
            Object.defineProperty(e.media, "quality", {
              get() {
                const t = Ee.getSources
                  .call(e)
                  .find((t) => t.getAttribute("src") === e.source);
                return t && Number(t.getAttribute("size"));
              },
              set(t) {
                if (e.quality !== t) {
                  if (e.config.quality.forced && k(e.config.quality.onChange))
                    e.config.quality.onChange(t);
                  else {
                    const i = Ee.getSources
                      .call(e)
                      .find((e) => Number(e.getAttribute("size")) === t);
                    if (!i) return;
                    const {
                      currentTime: s,
                      paused: n,
                      preload: r,
                      readyState: a,
                      playbackRate: o,
                    } = e.media;
                    (e.media.src = i.getAttribute("src")),
                      ("none" !== r || a) &&
                        (e.once("loadedmetadata", () => {
                          (e.speed = o), (e.currentTime = s), n || me(e.play());
                        }),
                        e.media.load());
                  }
                  pe.call(e, e.media, "qualitychange", !1, { quality: t });
                }
              },
            });
        },
        cancelRequests() {
          this.isHTML5 &&
            (G(Ee.getSources.call(this)),
            this.media.setAttribute("src", this.config.blankVideo),
            this.media.load(),
            this.debug.log("Cancelled network requests"));
        },
      };
      function _e(e, ...t) {
        return N(e)
          ? e
          : e.toString().replace(/{(\d+)}/g, (e, i) => t[i].toString());
      }
      const Se = (e = "", t = "", i = "") =>
          e.replace(
            new RegExp(
              t.toString().replace(/([.*+?^=!:${}()|[\]/\\])/g, "\\$1"),
              "g"
            ),
            i.toString()
          ),
        Me = (e = "") =>
          e
            .toString()
            .replace(
              /\w\S*/g,
              (e) => e.charAt(0).toUpperCase() + e.slice(1).toLowerCase()
            );
      function ke(e) {
        const t = document.createElement("div");
        return t.appendChild(e), t.innerHTML;
      }
      const Ae = {
          pip: "PIP",
          airplay: "AirPlay",
          html5: "HTML5",
          vimeo: "Vimeo",
          youtube: "YouTube",
        },
        Pe = {
          get(e = "", t = {}) {
            if (N(e) || N(t)) return "";
            let i = W(t.i18n, e);
            if (N(i)) return Object.keys(Ae).includes(e) ? Ae[e] : "";
            const s = { "{seektime}": t.seekTime, "{title}": t.title };
            return (
              Object.entries(s).forEach(([e, t]) => {
                i = Se(i, e, t);
              }),
              i
            );
          },
        };
      class Fe {
        constructor(t) {
          e(this, "get", (e) => {
            if (!Fe.supported || !this.enabled) return null;
            const t = window.localStorage.getItem(this.key);
            if (N(t)) return null;
            const i = JSON.parse(t);
            return S(e) && e.length ? i[e] : i;
          }),
            e(this, "set", (e) => {
              if (!Fe.supported || !this.enabled) return;
              if (!E(e)) return;
              let t = this.get();
              N(t) && (t = {}), j(t, e);
              try {
                window.localStorage.setItem(this.key, JSON.stringify(t));
              } catch (e) {}
            }),
            (this.enabled = t.config.storage.enabled),
            (this.key = t.config.storage.key);
        }
        static get supported() {
          try {
            if (!("localStorage" in window)) return !1;
            const e = "___test";
            return (
              window.localStorage.setItem(e, e),
              window.localStorage.removeItem(e),
              !0
            );
          } catch (e) {
            return !1;
          }
        }
      }
      function $e(e, t = "text") {
        return new Promise((i, s) => {
          try {
            const s = new XMLHttpRequest();
            if (!("withCredentials" in s)) return;
            s.addEventListener("load", () => {
              if ("text" === t)
                try {
                  i(JSON.parse(s.responseText));
                } catch (e) {
                  i(s.responseText);
                }
              else i(s.response);
            }),
              s.addEventListener("error", () => {
                throw new Error(s.status);
              }),
              s.open("GET", e, !0),
              (s.responseType = t),
              s.send();
          } catch (e) {
            s(e);
          }
        });
      }
      function Oe(e, t) {
        if (!S(e)) return;
        const i = "cache",
          s = S(t);
        let n = !1;
        const r = () => null !== document.getElementById(t),
          a = (e, t) => {
            (e.innerHTML = t),
              (s && r()) ||
                document.body.insertAdjacentElement("afterbegin", e);
          };
        if (!s || !r()) {
          const r = Fe.supported,
            o = document.createElement("div");
          if ((o.setAttribute("hidden", ""), s && o.setAttribute("id", t), r)) {
            const e = window.localStorage.getItem(`${i}-${t}`);
            if (((n = null !== e), n)) {
              const t = JSON.parse(e);
              a(o, t.content);
            }
          }
          $e(e)
            .then((e) => {
              if (!N(e)) {
                if (r)
                  try {
                    window.localStorage.setItem(
                      `${i}-${t}`,
                      JSON.stringify({ content: e })
                    );
                  } catch (e) {}
                a(o, e);
              }
            })
            .catch(() => {});
        }
      }
      const Le = (e) => Math.trunc((e / 60 / 60) % 60, 10);
      function Ie(e = 0, t = !1, i = !1) {
        if (!_(e)) return Ie(void 0, t, i);
        const s = (e) => `0${e}`.slice(-2);
        let n = Le(e);
        const r = ((e) => Math.trunc((e / 60) % 60, 10))(e),
          a = ((e) => Math.trunc(e % 60, 10))(e);
        return (
          (n = t || n > 0 ? `${n}:` : ""),
          `${i && e > 0 ? "-" : ""}${n}${s(r)}:${s(a)}`
        );
      }
      const ze = {
        getIconUrl() {
          const e = new URL(this.config.iconUrl, window.location),
            t = window.location.host
              ? window.location.host
              : window.top.location.host,
            i = e.host !== t || (H.isIE && !window.svg4everybody);
          return { url: this.config.iconUrl, cors: i };
        },
        findElements() {
          try {
            return (
              (this.elements.controls = se.call(
                this,
                this.config.selectors.controls.wrapper
              )),
              (this.elements.buttons = {
                play: ie.call(this, this.config.selectors.buttons.play),
                pause: se.call(this, this.config.selectors.buttons.pause),
                restart: se.call(this, this.config.selectors.buttons.restart),
                rewind: se.call(this, this.config.selectors.buttons.rewind),
                fastForward: se.call(
                  this,
                  this.config.selectors.buttons.fastForward
                ),
                mute: se.call(this, this.config.selectors.buttons.mute),
                pip: se.call(this, this.config.selectors.buttons.pip),
                airplay: se.call(this, this.config.selectors.buttons.airplay),
                settings: se.call(this, this.config.selectors.buttons.settings),
                captions: se.call(this, this.config.selectors.buttons.captions),
                fullscreen: se.call(
                  this,
                  this.config.selectors.buttons.fullscreen
                ),
              }),
              (this.elements.progress = se.call(
                this,
                this.config.selectors.progress
              )),
              (this.elements.inputs = {
                seek: se.call(this, this.config.selectors.inputs.seek),
                volume: se.call(this, this.config.selectors.inputs.volume),
              }),
              (this.elements.display = {
                buffer: se.call(this, this.config.selectors.display.buffer),
                currentTime: se.call(
                  this,
                  this.config.selectors.display.currentTime
                ),
                duration: se.call(this, this.config.selectors.display.duration),
              }),
              F(this.elements.progress) &&
                (this.elements.display.seekTooltip =
                  this.elements.progress.querySelector(
                    `.${this.config.classNames.tooltip}`
                  )),
              !0
            );
          } catch (e) {
            return (
              this.debug.warn(
                "It looks like there is a problem with your custom controls HTML",
                e
              ),
              this.toggleNativeControls(!0),
              !1
            );
          }
        },
        createIcon(e, t) {
          const i = "http://www.w3.org/2000/svg",
            s = ze.getIconUrl.call(this),
            n = `${s.cors ? "" : s.url}#${this.config.iconPrefix}`,
            r = document.createElementNS(i, "svg");
          X(r, j(t, { "aria-hidden": "true", focusable: "false" }));
          const a = document.createElementNS(i, "use"),
            o = `${n}-${e}`;
          return (
            "href" in a &&
              a.setAttributeNS("http://www.w3.org/1999/xlink", "href", o),
            a.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", o),
            r.appendChild(a),
            r
          );
        },
        createLabel(e, t = {}) {
          const i = Pe.get(e, this.config);
          return q(
            "span",
            {
              ...t,
              class: [t.class, this.config.classNames.hidden]
                .filter(Boolean)
                .join(" "),
            },
            i
          );
        },
        createBadge(e) {
          if (N(e)) return null;
          const t = q("span", { class: this.config.classNames.menu.value });
          return (
            t.appendChild(
              q("span", { class: this.config.classNames.menu.badge }, e)
            ),
            t
          );
        },
        createButton(e, t) {
          const i = j({}, t);
          let s = (function (e = "") {
            let t = e.toString();
            return (
              (t = (function (e = "") {
                let t = e.toString();
                return (
                  (t = Se(t, "-", " ")),
                  (t = Se(t, "_", " ")),
                  (t = Me(t)),
                  Se(t, " ", "")
                );
              })(t)),
              t.charAt(0).toLowerCase() + t.slice(1)
            );
          })(e);
          const n = {
            element: "button",
            toggle: !1,
            label: null,
            icon: null,
            labelPressed: null,
            iconPressed: null,
          };
          switch (
            (["element", "icon", "label"].forEach((e) => {
              Object.keys(i).includes(e) && ((n[e] = i[e]), delete i[e]);
            }),
            "button" !== n.element ||
              Object.keys(i).includes("type") ||
              (i.type = "button"),
            Object.keys(i).includes("class")
              ? i.class
                  .split(" ")
                  .some((e) => e === this.config.classNames.control) ||
                j(i, { class: `${i.class} ${this.config.classNames.control}` })
              : (i.class = this.config.classNames.control),
            e)
          ) {
            case "play":
              (n.toggle = !0),
                (n.label = "play"),
                (n.labelPressed = "pause"),
                (n.icon = "play"),
                (n.iconPressed = "pause");
              break;
            case "mute":
              (n.toggle = !0),
                (n.label = "mute"),
                (n.labelPressed = "unmute"),
                (n.icon = "volume"),
                (n.iconPressed = "muted");
              break;
            case "captions":
              (n.toggle = !0),
                (n.label = "enableCaptions"),
                (n.labelPressed = "disableCaptions"),
                (n.icon = "captions-off"),
                (n.iconPressed = "captions-on");
              break;
            case "fullscreen":
              (n.toggle = !0),
                (n.label = "enterFullscreen"),
                (n.labelPressed = "exitFullscreen"),
                (n.icon = "enter-fullscreen"),
                (n.iconPressed = "exit-fullscreen");
              break;
            case "play-large":
              (i.class += ` ${this.config.classNames.control}--overlaid`),
                (s = "play"),
                (n.label = "play"),
                (n.icon = "play");
              break;
            default:
              N(n.label) && (n.label = s), N(n.icon) && (n.icon = e);
          }
          const r = q(n.element);
          return (
            n.toggle
              ? (r.appendChild(
                  ze.createIcon.call(this, n.iconPressed, {
                    class: "icon--pressed",
                  })
                ),
                r.appendChild(
                  ze.createIcon.call(this, n.icon, {
                    class: "icon--not-pressed",
                  })
                ),
                r.appendChild(
                  ze.createLabel.call(this, n.labelPressed, {
                    class: "label--pressed",
                  })
                ),
                r.appendChild(
                  ze.createLabel.call(this, n.label, {
                    class: "label--not-pressed",
                  })
                ))
              : (r.appendChild(ze.createIcon.call(this, n.icon)),
                r.appendChild(ze.createLabel.call(this, n.label))),
            j(i, Q(this.config.selectors.buttons[s], i)),
            X(r, i),
            "play" === s
              ? (A(this.elements.buttons[s]) || (this.elements.buttons[s] = []),
                this.elements.buttons[s].push(r))
              : (this.elements.buttons[s] = r),
            r
          );
        },
        createRange(e, t) {
          const i = q(
            "input",
            j(
              Q(this.config.selectors.inputs[e]),
              {
                type: "range",
                min: 0,
                max: 100,
                step: 0.01,
                value: 0,
                autocomplete: "off",
                role: "slider",
                "aria-label": Pe.get(e, this.config),
                "aria-valuemin": 0,
                "aria-valuemax": 100,
                "aria-valuenow": 0,
              },
              t
            )
          );
          return (
            (this.elements.inputs[e] = i),
            ze.updateRangeFill.call(this, i),
            f.setup(i),
            i
          );
        },
        createProgress(e, t) {
          const i = q(
            "progress",
            j(
              Q(this.config.selectors.display[e]),
              {
                min: 0,
                max: 100,
                value: 0,
                role: "progressbar",
                "aria-hidden": !0,
              },
              t
            )
          );
          if ("volume" !== e) {
            i.appendChild(q("span", null, "0"));
            const t = { played: "played", buffer: "buffered" }[e],
              s = t ? Pe.get(t, this.config) : "";
            i.innerText = `% ${s.toLowerCase()}`;
          }
          return (this.elements.display[e] = i), i;
        },
        createTime(e, t) {
          const i = Q(this.config.selectors.display[e], t),
            s = q(
              "div",
              j(i, {
                class: `${i.class ? i.class : ""} ${
                  this.config.classNames.display.time
                } `.trim(),
                "aria-label": Pe.get(e, this.config),
                role: "timer",
              }),
              "00:00"
            );
          return (this.elements.display[e] = s), s;
        },
        bindMenuItemShortcuts(e, t) {
          ue.call(
            this,
            e,
            "keydown keyup",
            (i) => {
              if (![" ", "ArrowUp", "ArrowDown", "ArrowRight"].includes(i.key))
                return;
              if (
                (i.preventDefault(), i.stopPropagation(), "keydown" === i.type)
              )
                return;
              const s = te(e, '[role="menuitemradio"]');
              if (!s && [" ", "ArrowRight"].includes(i.key))
                ze.showMenuPanel.call(this, t, !0);
              else {
                let t;
                " " !== i.key &&
                  ("ArrowDown" === i.key || (s && "ArrowRight" === i.key)
                    ? ((t = e.nextElementSibling),
                      F(t) || (t = e.parentNode.firstElementChild))
                    : ((t = e.previousElementSibling),
                      F(t) || (t = e.parentNode.lastElementChild)),
                  ne.call(this, t, !0));
              }
            },
            !1
          ),
            ue.call(this, e, "keyup", (e) => {
              "Return" === e.key && ze.focusFirstMenuItem.call(this, null, !0);
            });
        },
        createMenuItem({
          value: e,
          list: t,
          type: i,
          title: s,
          badge: n = null,
          checked: r = !1,
        }) {
          const a = Q(this.config.selectors.inputs[i]),
            o = q(
              "button",
              j(a, {
                type: "button",
                role: "menuitemradio",
                class: `${this.config.classNames.control} ${
                  a.class ? a.class : ""
                }`.trim(),
                "aria-checked": r,
                value: e,
              })
            ),
            l = q("span");
          (l.innerHTML = s),
            F(n) && l.appendChild(n),
            o.appendChild(l),
            Object.defineProperty(o, "checked", {
              enumerable: !0,
              get: () => "true" === o.getAttribute("aria-checked"),
              set(e) {
                e &&
                  Array.from(o.parentNode.children)
                    .filter((e) => te(e, '[role="menuitemradio"]'))
                    .forEach((e) => e.setAttribute("aria-checked", "false")),
                  o.setAttribute("aria-checked", e ? "true" : "false");
              },
            }),
            this.listeners.bind(
              o,
              "click keyup",
              (t) => {
                if (!O(t) || " " === t.key) {
                  switch (
                    (t.preventDefault(),
                    t.stopPropagation(),
                    (o.checked = !0),
                    i)
                  ) {
                    case "language":
                      this.currentTrack = Number(e);
                      break;
                    case "quality":
                      this.quality = e;
                      break;
                    case "speed":
                      this.speed = parseFloat(e);
                  }
                  ze.showMenuPanel.call(this, "home", O(t));
                }
              },
              i,
              !1
            ),
            ze.bindMenuItemShortcuts.call(this, o, i),
            t.appendChild(o);
        },
        formatTime(e = 0, t = !1) {
          return _(e) ? Ie(e, Le(this.duration) > 0, t) : e;
        },
        updateTimeDisplay(e = null, t = 0, i = !1) {
          F(e) && _(t) && (e.innerText = ze.formatTime(t, i));
        },
        updateVolume() {
          this.supported.ui &&
            (F(this.elements.inputs.volume) &&
              ze.setRange.call(
                this,
                this.elements.inputs.volume,
                this.muted ? 0 : this.volume
              ),
            F(this.elements.buttons.mute) &&
              (this.elements.buttons.mute.pressed =
                this.muted || 0 === this.volume));
        },
        setRange(e, t = 0) {
          F(e) && ((e.value = t), ze.updateRangeFill.call(this, e));
        },
        updateProgress(e) {
          if (!this.supported.ui || !$(e)) return;
          let t = 0;
          const i = (e, t) => {
            const i = _(t) ? t : 0,
              s = F(e) ? e : this.elements.display.buffer;
            if (F(s)) {
              s.value = i;
              const e = s.getElementsByTagName("span")[0];
              F(e) && (e.childNodes[0].nodeValue = i);
            }
          };
          if (e)
            switch (e.type) {
              case "timeupdate":
              case "seeking":
              case "seeked":
                (s = this.currentTime),
                  (n = this.duration),
                  (t =
                    0 === s || 0 === n || Number.isNaN(s) || Number.isNaN(n)
                      ? 0
                      : ((s / n) * 100).toFixed(2)),
                  "timeupdate" === e.type &&
                    ze.setRange.call(this, this.elements.inputs.seek, t);
                break;
              case "playing":
              case "progress":
                i(this.elements.display.buffer, 100 * this.buffered);
            }
          var s, n;
        },
        updateRangeFill(e) {
          const t = $(e) ? e.target : e;
          if (F(t) && "range" === t.getAttribute("type")) {
            if (te(t, this.config.selectors.inputs.seek)) {
              t.setAttribute("aria-valuenow", this.currentTime);
              const e = ze.formatTime(this.currentTime),
                i = ze.formatTime(this.duration),
                s = Pe.get("seekLabel", this.config);
              t.setAttribute(
                "aria-valuetext",
                s.replace("{currentTime}", e).replace("{duration}", i)
              );
            } else if (te(t, this.config.selectors.inputs.volume)) {
              const e = 100 * t.value;
              t.setAttribute("aria-valuenow", e),
                t.setAttribute("aria-valuetext", `${e.toFixed(1)}%`);
            } else t.setAttribute("aria-valuenow", t.value);
            (H.isWebKit || H.isIPadOS) &&
              t.style.setProperty("--value", (t.value / t.max) * 100 + "%");
          }
        },
        updateSeekTooltip(e) {
          var t, i;
          if (
            !this.config.tooltips.seek ||
            !F(this.elements.inputs.seek) ||
            !F(this.elements.display.seekTooltip) ||
            0 === this.duration
          )
            return;
          const s = this.elements.display.seekTooltip,
            n = `${this.config.classNames.tooltip}--visible`,
            r = (e) => Z(s, n, e);
          if (this.touch) return void r(!1);
          let a = 0;
          const o = this.elements.progress.getBoundingClientRect();
          if ($(e)) a = (100 / o.width) * (e.pageX - o.left);
          else {
            if (!ee(s, n)) return;
            a = parseFloat(s.style.left, 10);
          }
          a < 0 ? (a = 0) : a > 100 && (a = 100);
          const l = (this.duration / 100) * a;
          s.innerText = ze.formatTime(l);
          const u =
            null === (t = this.config.markers) ||
            void 0 === t ||
            null === (i = t.points) ||
            void 0 === i
              ? void 0
              : i.find(({ time: e }) => e === Math.round(l));
          u && s.insertAdjacentHTML("afterbegin", `${u.label}<br>`),
            (s.style.left = `${a}%`),
            $(e) &&
              ["mouseenter", "mouseleave"].includes(e.type) &&
              r("mouseenter" === e.type);
        },
        timeUpdate(e) {
          const t =
            !F(this.elements.display.duration) && this.config.invertTime;
          ze.updateTimeDisplay.call(
            this,
            this.elements.display.currentTime,
            t ? this.duration - this.currentTime : this.currentTime,
            t
          ),
            (e && "timeupdate" === e.type && this.media.seeking) ||
              ze.updateProgress.call(this, e);
        },
        durationUpdate() {
          if (
            !this.supported.ui ||
            (!this.config.invertTime && this.currentTime)
          )
            return;
          if (this.duration >= 2 ** 32)
            return (
              J(this.elements.display.currentTime, !0),
              void J(this.elements.progress, !0)
            );
          F(this.elements.inputs.seek) &&
            this.elements.inputs.seek.setAttribute(
              "aria-valuemax",
              this.duration
            );
          const e = F(this.elements.display.duration);
          !e &&
            this.config.displayDuration &&
            this.paused &&
            ze.updateTimeDisplay.call(
              this,
              this.elements.display.currentTime,
              this.duration
            ),
            e &&
              ze.updateTimeDisplay.call(
                this,
                this.elements.display.duration,
                this.duration
              ),
            this.config.markers.enabled && ze.setMarkers.call(this),
            ze.updateSeekTooltip.call(this);
        },
        toggleMenuButton(e, t) {
          J(this.elements.settings.buttons[e], !t);
        },
        updateSetting(e, t, i) {
          const s = this.elements.settings.panels[e];
          let n = null,
            r = t;
          if ("captions" === e) n = this.currentTrack;
          else {
            if (
              ((n = N(i) ? this[e] : i),
              N(n) && (n = this.config[e].default),
              !N(this.options[e]) && !this.options[e].includes(n))
            )
              return void this.debug.warn(
                `Unsupported value of '${n}' for ${e}`
              );
            if (!this.config[e].options.includes(n))
              return void this.debug.warn(`Disabled value of '${n}' for ${e}`);
          }
          if ((F(r) || (r = s && s.querySelector('[role="menu"]')), !F(r)))
            return;
          this.elements.settings.buttons[e].querySelector(
            `.${this.config.classNames.menu.value}`
          ).innerHTML = ze.getLabel.call(this, e, n);
          const a = r && r.querySelector(`[value="${n}"]`);
          F(a) && (a.checked = !0);
        },
        getLabel(e, t) {
          switch (e) {
            case "speed":
              return 1 === t ? Pe.get("normal", this.config) : `${t}&times;`;
            case "quality":
              if (_(t)) {
                const e = Pe.get(`qualityLabel.${t}`, this.config);
                return e.length ? e : `${t}p`;
              }
              return Me(t);
            case "captions":
              return Re.getLabel.call(this);
            default:
              return null;
          }
        },
        setQualityMenu(e) {
          if (!F(this.elements.settings.panels.quality)) return;
          const t = "quality",
            i =
              this.elements.settings.panels.quality.querySelector(
                '[role="menu"]'
              );
          A(e) &&
            (this.options.quality = ge(e).filter((e) =>
              this.config.quality.options.includes(e)
            ));
          const s = !N(this.options.quality) && this.options.quality.length > 1;
          if (
            (ze.toggleMenuButton.call(this, t, s),
            U(i),
            ze.checkMenu.call(this),
            !s)
          )
            return;
          const n = (e) => {
            const t = Pe.get(`qualityBadge.${e}`, this.config);
            return t.length ? ze.createBadge.call(this, t) : null;
          };
          this.options.quality
            .sort((e, t) => {
              const i = this.config.quality.options;
              return i.indexOf(e) > i.indexOf(t) ? 1 : -1;
            })
            .forEach((e) => {
              ze.createMenuItem.call(this, {
                value: e,
                list: i,
                type: t,
                title: ze.getLabel.call(this, "quality", e),
                badge: n(e),
              });
            }),
            ze.updateSetting.call(this, t, i);
        },
        setCaptionsMenu() {
          if (!F(this.elements.settings.panels.captions)) return;
          const e = "captions",
            t =
              this.elements.settings.panels.captions.querySelector(
                '[role="menu"]'
              ),
            i = Re.getTracks.call(this),
            s = Boolean(i.length);
          if (
            (ze.toggleMenuButton.call(this, e, s),
            U(t),
            ze.checkMenu.call(this),
            !s)
          )
            return;
          const n = i.map((e, i) => ({
            value: i,
            checked: this.captions.toggled && this.currentTrack === i,
            title: Re.getLabel.call(this, e),
            badge:
              e.language && ze.createBadge.call(this, e.language.toUpperCase()),
            list: t,
            type: "language",
          }));
          n.unshift({
            value: -1,
            checked: !this.captions.toggled,
            title: Pe.get("disabled", this.config),
            list: t,
            type: "language",
          }),
            n.forEach(ze.createMenuItem.bind(this)),
            ze.updateSetting.call(this, e, t);
        },
        setSpeedMenu() {
          if (!F(this.elements.settings.panels.speed)) return;
          const e = "speed",
            t =
              this.elements.settings.panels.speed.querySelector(
                '[role="menu"]'
              );
          this.options.speed = this.options.speed.filter(
            (e) => e >= this.minimumSpeed && e <= this.maximumSpeed
          );
          const i = !N(this.options.speed) && this.options.speed.length > 1;
          ze.toggleMenuButton.call(this, e, i),
            U(t),
            ze.checkMenu.call(this),
            i &&
              (this.options.speed.forEach((i) => {
                ze.createMenuItem.call(this, {
                  value: i,
                  list: t,
                  type: e,
                  title: ze.getLabel.call(this, "speed", i),
                });
              }),
              ze.updateSetting.call(this, e, t));
        },
        checkMenu() {
          const { buttons: e } = this.elements.settings,
            t = !N(e) && Object.values(e).some((e) => !e.hidden);
          J(this.elements.settings.menu, !t);
        },
        focusFirstMenuItem(e, t = !1) {
          if (this.elements.settings.popup.hidden) return;
          let i = e;
          F(i) ||
            (i = Object.values(this.elements.settings.panels).find(
              (e) => !e.hidden
            ));
          const s = i.querySelector('[role^="menuitem"]');
          ne.call(this, s, t);
        },
        toggleMenu(e) {
          const { popup: t } = this.elements.settings,
            i = this.elements.buttons.settings;
          if (!F(t) || !F(i)) return;
          const { hidden: s } = t;
          let n = s;
          if (M(e)) n = e;
          else if (O(e) && "Escape" === e.key) n = !1;
          else if ($(e)) {
            const s = k(e.composedPath) ? e.composedPath()[0] : e.target,
              r = t.contains(s);
            if (r || (!r && e.target !== i && n)) return;
          }
          i.setAttribute("aria-expanded", n),
            J(t, !n),
            Z(this.elements.container, this.config.classNames.menu.open, n),
            n && O(e)
              ? ze.focusFirstMenuItem.call(this, null, !0)
              : n || s || ne.call(this, i, O(e));
        },
        getMenuSize(e) {
          const t = e.cloneNode(!0);
          (t.style.position = "absolute"),
            (t.style.opacity = 0),
            t.removeAttribute("hidden"),
            e.parentNode.appendChild(t);
          const i = t.scrollWidth,
            s = t.scrollHeight;
          return G(t), { width: i, height: s };
        },
        showMenuPanel(e = "", t = !1) {
          const i = this.elements.container.querySelector(
            `#plyr-settings-${this.id}-${e}`
          );
          if (!F(i)) return;
          const s = i.parentNode,
            n = Array.from(s.children).find((e) => !e.hidden);
          if (ae.transitions && !ae.reducedMotion) {
            (s.style.width = `${n.scrollWidth}px`),
              (s.style.height = `${n.scrollHeight}px`);
            const e = ze.getMenuSize.call(this, i),
              t = (e) => {
                e.target === s &&
                  ["width", "height"].includes(e.propertyName) &&
                  ((s.style.width = ""),
                  (s.style.height = ""),
                  ce.call(this, s, B, t));
              };
            ue.call(this, s, B, t),
              (s.style.width = `${e.width}px`),
              (s.style.height = `${e.height}px`);
          }
          J(n, !0), J(i, !1), ze.focusFirstMenuItem.call(this, i, t);
        },
        setDownloadUrl() {
          const e = this.elements.buttons.download;
          F(e) && e.setAttribute("href", this.download);
        },
        create(e) {
          const {
            bindMenuItemShortcuts: t,
            createButton: i,
            createProgress: s,
            createRange: n,
            createTime: r,
            setQualityMenu: a,
            setSpeedMenu: o,
            showMenuPanel: l,
          } = ze;
          (this.elements.controls = null),
            A(this.config.controls) &&
              this.config.controls.includes("play-large") &&
              this.elements.container.appendChild(i.call(this, "play-large"));
          const u = q("div", Q(this.config.selectors.controls.wrapper));
          this.elements.controls = u;
          const c = { class: "plyr__controls__item" };
          return (
            ge(A(this.config.controls) ? this.config.controls : []).forEach(
              (a) => {
                if (
                  ("restart" === a && u.appendChild(i.call(this, "restart", c)),
                  "rewind" === a && u.appendChild(i.call(this, "rewind", c)),
                  "play" === a && u.appendChild(i.call(this, "play", c)),
                  "fast-forward" === a &&
                    u.appendChild(i.call(this, "fast-forward", c)),
                  "progress" === a)
                ) {
                  const t = q("div", {
                      class: `${c.class} plyr__progress__container`,
                    }),
                    i = q("div", Q(this.config.selectors.progress));
                  if (
                    (i.appendChild(
                      n.call(this, "seek", { id: `plyr-seek-${e.id}` })
                    ),
                    i.appendChild(s.call(this, "buffer")),
                    this.config.tooltips.seek)
                  ) {
                    const e = q(
                      "span",
                      { class: this.config.classNames.tooltip },
                      "00:00"
                    );
                    i.appendChild(e), (this.elements.display.seekTooltip = e);
                  }
                  (this.elements.progress = i),
                    t.appendChild(this.elements.progress),
                    u.appendChild(t);
                }
                if (
                  ("current-time" === a &&
                    u.appendChild(r.call(this, "currentTime", c)),
                  "duration" === a &&
                    u.appendChild(r.call(this, "duration", c)),
                  "mute" === a || "volume" === a)
                ) {
                  let { volume: t } = this.elements;
                  if (
                    ((F(t) && u.contains(t)) ||
                      ((t = q(
                        "div",
                        j({}, c, { class: `${c.class} plyr__volume`.trim() })
                      )),
                      (this.elements.volume = t),
                      u.appendChild(t)),
                    "mute" === a && t.appendChild(i.call(this, "mute")),
                    "volume" === a && !H.isIos && !H.isIPadOS)
                  ) {
                    const i = { max: 1, step: 0.05, value: this.config.volume };
                    t.appendChild(
                      n.call(
                        this,
                        "volume",
                        j(i, { id: `plyr-volume-${e.id}` })
                      )
                    );
                  }
                }
                if (
                  ("captions" === a &&
                    u.appendChild(i.call(this, "captions", c)),
                  "settings" === a && !N(this.config.settings))
                ) {
                  const s = q(
                    "div",
                    j({}, c, {
                      class: `${c.class} plyr__menu`.trim(),
                      hidden: "",
                    })
                  );
                  s.appendChild(
                    i.call(this, "settings", {
                      "aria-haspopup": !0,
                      "aria-controls": `plyr-settings-${e.id}`,
                      "aria-expanded": !1,
                    })
                  );
                  const n = q("div", {
                      class: "plyr__menu__container",
                      id: `plyr-settings-${e.id}`,
                      hidden: "",
                    }),
                    r = q("div"),
                    a = q("div", { id: `plyr-settings-${e.id}-home` }),
                    o = q("div", { role: "menu" });
                  a.appendChild(o),
                    r.appendChild(a),
                    (this.elements.settings.panels.home = a),
                    this.config.settings.forEach((i) => {
                      const s = q(
                        "button",
                        j(Q(this.config.selectors.buttons.settings), {
                          type: "button",
                          class: `${this.config.classNames.control} ${this.config.classNames.control}--forward`,
                          role: "menuitem",
                          "aria-haspopup": !0,
                          hidden: "",
                        })
                      );
                      t.call(this, s, i),
                        ue.call(this, s, "click", () => {
                          l.call(this, i, !1);
                        });
                      const n = q("span", null, Pe.get(i, this.config)),
                        a = q("span", {
                          class: this.config.classNames.menu.value,
                        });
                      (a.innerHTML = e[i]),
                        n.appendChild(a),
                        s.appendChild(n),
                        o.appendChild(s);
                      const u = q("div", {
                          id: `plyr-settings-${e.id}-${i}`,
                          hidden: "",
                        }),
                        c = q("button", {
                          type: "button",
                          class: `${this.config.classNames.control} ${this.config.classNames.control}--back`,
                        });
                      c.appendChild(
                        q("span", { "aria-hidden": !0 }, Pe.get(i, this.config))
                      ),
                        c.appendChild(
                          q(
                            "span",
                            { class: this.config.classNames.hidden },
                            Pe.get("menuBack", this.config)
                          )
                        ),
                        ue.call(
                          this,
                          u,
                          "keydown",
                          (e) => {
                            "ArrowLeft" === e.key &&
                              (e.preventDefault(),
                              e.stopPropagation(),
                              l.call(this, "home", !0));
                          },
                          !1
                        ),
                        ue.call(this, c, "click", () => {
                          l.call(this, "home", !1);
                        }),
                        u.appendChild(c),
                        u.appendChild(q("div", { role: "menu" })),
                        r.appendChild(u),
                        (this.elements.settings.buttons[i] = s),
                        (this.elements.settings.panels[i] = u);
                    }),
                    n.appendChild(r),
                    s.appendChild(n),
                    u.appendChild(s),
                    (this.elements.settings.popup = n),
                    (this.elements.settings.menu = s);
                }
                if (
                  ("pip" === a &&
                    ae.pip &&
                    u.appendChild(i.call(this, "pip", c)),
                  "airplay" === a &&
                    ae.airplay &&
                    u.appendChild(i.call(this, "airplay", c)),
                  "download" === a)
                ) {
                  const e = j({}, c, {
                    element: "a",
                    href: this.download,
                    target: "_blank",
                  });
                  this.isHTML5 && (e.download = "");
                  const { download: t } = this.config.urls;
                  !z(t) &&
                    this.isEmbed &&
                    j(e, {
                      icon: `logo-${this.provider}`,
                      label: this.provider,
                    }),
                    u.appendChild(i.call(this, "download", e));
                }
                "fullscreen" === a &&
                  u.appendChild(i.call(this, "fullscreen", c));
              }
            ),
            this.isHTML5 && a.call(this, Ee.getQualityOptions.call(this)),
            o.call(this),
            u
          );
        },
        inject() {
          if (this.config.loadSprite) {
            const e = ze.getIconUrl.call(this);
            e.cors && Oe(e.url, "sprite-plyr");
          }
          this.id = Math.floor(1e4 * Math.random());
          let e = null;
          this.elements.controls = null;
          const t = {
            id: this.id,
            seektime: this.config.seekTime,
            title: this.config.title,
          };
          let i,
            s = !0;
          if (
            (k(this.config.controls) &&
              (this.config.controls = this.config.controls.call(this, t)),
            this.config.controls || (this.config.controls = []),
            F(this.config.controls) || S(this.config.controls)
              ? (e = this.config.controls)
              : ((e = ze.create.call(this, {
                  id: this.id,
                  seektime: this.config.seekTime,
                  speed: this.speed,
                  quality: this.quality,
                  captions: Re.getLabel.call(this),
                })),
                (s = !1)),
            s &&
              S(this.config.controls) &&
              (e = ((e) => {
                let i = e;
                return (
                  Object.entries(t).forEach(([e, t]) => {
                    i = Se(i, `{${e}}`, t);
                  }),
                  i
                );
              })(e)),
            S(this.config.selectors.controls.container) &&
              (i = document.querySelector(
                this.config.selectors.controls.container
              )),
            F(i) || (i = this.elements.container),
            i[F(e) ? "insertAdjacentElement" : "insertAdjacentHTML"](
              "afterbegin",
              e
            ),
            F(this.elements.controls) || ze.findElements.call(this),
            !N(this.elements.buttons))
          ) {
            const e = (e) => {
              const t = this.config.classNames.controlPressed;
              e.setAttribute("aria-pressed", "false"),
                Object.defineProperty(e, "pressed", {
                  configurable: !0,
                  enumerable: !0,
                  get: () => ee(e, t),
                  set(i = !1) {
                    Z(e, t, i),
                      e.setAttribute("aria-pressed", i ? "true" : "false");
                  },
                });
            };
            Object.values(this.elements.buttons)
              .filter(Boolean)
              .forEach((t) => {
                A(t) || P(t) ? Array.from(t).filter(Boolean).forEach(e) : e(t);
              });
          }
          if ((H.isEdge && R(i), this.config.tooltips.controls)) {
            const { classNames: e, selectors: t } = this.config,
              i = `${t.controls.wrapper} ${t.labels} .${e.hidden}`,
              s = ie.call(this, i);
            Array.from(s).forEach((e) => {
              Z(e, this.config.classNames.hidden, !1),
                Z(e, this.config.classNames.tooltip, !0);
            });
          }
        },
        setMediaMetadata() {
          try {
            "mediaSession" in navigator &&
              (navigator.mediaSession.metadata = new window.MediaMetadata({
                title: this.config.mediaMetadata.title,
                artist: this.config.mediaMetadata.artist,
                album: this.config.mediaMetadata.album,
                artwork: this.config.mediaMetadata.artwork,
              }));
          } catch (e) {}
        },
        setMarkers() {
          var e, t;
          if (!this.duration || this.elements.markers) return;
          const i =
            null === (e = this.config.markers) ||
            void 0 === e ||
            null === (t = e.points) ||
            void 0 === t
              ? void 0
              : t.filter(({ time: e }) => e > 0 && e < this.duration);
          if (null == i || !i.length) return;
          const s = document.createDocumentFragment(),
            n = document.createDocumentFragment();
          let r = null;
          const a = `${this.config.classNames.tooltip}--visible`,
            o = (e) => Z(r, a, e);
          i.forEach((e) => {
            const t = q("span", { class: this.config.classNames.marker }, ""),
              i = (e.time / this.duration) * 100 + "%";
            r &&
              (t.addEventListener("mouseenter", () => {
                e.label || ((r.style.left = i), (r.innerHTML = e.label), o(!0));
              }),
              t.addEventListener("mouseleave", () => {
                o(!1);
              })),
              t.addEventListener("click", () => {
                this.currentTime = e.time;
              }),
              (t.style.left = i),
              n.appendChild(t);
          }),
            s.appendChild(n),
            this.config.tooltips.seek ||
              ((r = q("span", { class: this.config.classNames.tooltip }, "")),
              s.appendChild(r)),
            (this.elements.markers = { points: n, tip: r }),
            this.elements.progress.appendChild(s);
        },
      };
      function Ne(e, t = !0) {
        let i = e;
        if (t) {
          const e = document.createElement("a");
          (e.href = i), (i = e.href);
        }
        try {
          return new URL(i);
        } catch (e) {
          return null;
        }
      }
      function Be(e) {
        const t = new URLSearchParams();
        return (
          E(e) &&
            Object.entries(e).forEach(([e, i]) => {
              t.set(e, i);
            }),
          t
        );
      }
      const Re = {
          setup() {
            if (!this.supported.ui) return;
            if (
              !this.isVideo ||
              this.isYouTube ||
              (this.isHTML5 && !ae.textTracks)
            )
              return void (
                A(this.config.controls) &&
                this.config.controls.includes("settings") &&
                this.config.settings.includes("captions") &&
                ze.setCaptionsMenu.call(this)
              );
            var e, t;
            if (
              (F(this.elements.captions) ||
                ((this.elements.captions = q(
                  "div",
                  Q(this.config.selectors.captions)
                )),
                this.elements.captions.setAttribute("dir", "auto"),
                (e = this.elements.captions),
                (t = this.elements.wrapper),
                F(e) && F(t) && t.parentNode.insertBefore(e, t.nextSibling)),
              H.isIE && window.URL)
            ) {
              const e = this.media.querySelectorAll("track");
              Array.from(e).forEach((e) => {
                const t = e.getAttribute("src"),
                  i = Ne(t);
                null !== i &&
                  i.hostname !== window.location.href.hostname &&
                  ["http:", "https:"].includes(i.protocol) &&
                  $e(t, "blob")
                    .then((t) => {
                      e.setAttribute("src", window.URL.createObjectURL(t));
                    })
                    .catch(() => {
                      G(e);
                    });
              });
            }
            const i = ge(
              (
                navigator.languages || [
                  navigator.language || navigator.userLanguage || "en",
                ]
              ).map((e) => e.split("-")[0])
            );
            let s = (
              this.storage.get("language") ||
              this.config.captions.language ||
              "auto"
            ).toLowerCase();
            "auto" === s && ([s] = i);
            let n = this.storage.get("captions");
            if (
              (M(n) || ({ active: n } = this.config.captions),
              Object.assign(this.captions, {
                toggled: !1,
                active: n,
                language: s,
                languages: i,
              }),
              this.isHTML5)
            ) {
              const e = this.config.captions.update
                ? "addtrack removetrack"
                : "removetrack";
              ue.call(this, this.media.textTracks, e, Re.update.bind(this));
            }
            setTimeout(Re.update.bind(this), 0);
          },
          update() {
            const e = Re.getTracks.call(this, !0),
              {
                active: t,
                language: i,
                meta: s,
                currentTrackNode: n,
              } = this.captions,
              r = Boolean(e.find((e) => e.language === i));
            this.isHTML5 &&
              this.isVideo &&
              e
                .filter((e) => !s.get(e))
                .forEach((e) => {
                  this.debug.log("Track added", e),
                    s.set(e, { default: "showing" === e.mode }),
                    "showing" === e.mode && (e.mode = "hidden"),
                    ue.call(this, e, "cuechange", () =>
                      Re.updateCues.call(this)
                    );
                }),
              ((r && this.language !== i) || !e.includes(n)) &&
                (Re.setLanguage.call(this, i), Re.toggle.call(this, t && r)),
              this.elements &&
                Z(
                  this.elements.container,
                  this.config.classNames.captions.enabled,
                  !N(e)
                ),
              A(this.config.controls) &&
                this.config.controls.includes("settings") &&
                this.config.settings.includes("captions") &&
                ze.setCaptionsMenu.call(this);
          },
          toggle(e, t = !0) {
            if (!this.supported.ui) return;
            const { toggled: i } = this.captions,
              s = this.config.classNames.captions.active,
              n = T(e) ? !i : e;
            if (n !== i) {
              if (
                (t ||
                  ((this.captions.active = n),
                  this.storage.set({ captions: n })),
                !this.language && n && !t)
              ) {
                const e = Re.getTracks.call(this),
                  t = Re.findTrack.call(
                    this,
                    [this.captions.language, ...this.captions.languages],
                    !0
                  );
                return (
                  (this.captions.language = t.language),
                  void Re.set.call(this, e.indexOf(t))
                );
              }
              this.elements.buttons.captions &&
                (this.elements.buttons.captions.pressed = n),
                Z(this.elements.container, s, n),
                (this.captions.toggled = n),
                ze.updateSetting.call(this, "captions"),
                pe.call(
                  this,
                  this.media,
                  n ? "captionsenabled" : "captionsdisabled"
                );
            }
            setTimeout(() => {
              n &&
                this.captions.toggled &&
                (this.captions.currentTrackNode.mode = "hidden");
            });
          },
          set(e, t = !0) {
            const i = Re.getTracks.call(this);
            if (-1 !== e)
              if (_(e))
                if (e in i) {
                  if (this.captions.currentTrack !== e) {
                    this.captions.currentTrack = e;
                    const s = i[e],
                      { language: n } = s || {};
                    (this.captions.currentTrackNode = s),
                      ze.updateSetting.call(this, "captions"),
                      t ||
                        ((this.captions.language = n),
                        this.storage.set({ language: n })),
                      this.isVimeo && this.embed.enableTextTrack(n),
                      pe.call(this, this.media, "languagechange");
                  }
                  Re.toggle.call(this, !0, t),
                    this.isHTML5 && this.isVideo && Re.updateCues.call(this);
                } else this.debug.warn("Track not found", e);
              else this.debug.warn("Invalid caption argument", e);
            else Re.toggle.call(this, !1, t);
          },
          setLanguage(e, t = !0) {
            if (!S(e))
              return void this.debug.warn("Invalid language argument", e);
            const i = e.toLowerCase();
            this.captions.language = i;
            const s = Re.getTracks.call(this),
              n = Re.findTrack.call(this, [i]);
            Re.set.call(this, s.indexOf(n), t);
          },
          getTracks(e = !1) {
            return Array.from((this.media || {}).textTracks || [])
              .filter((t) => !this.isHTML5 || e || this.captions.meta.has(t))
              .filter((e) => ["captions", "subtitles"].includes(e.kind));
          },
          findTrack(e, t = !1) {
            const i = Re.getTracks.call(this),
              s = (e) => Number((this.captions.meta.get(e) || {}).default),
              n = Array.from(i).sort((e, t) => s(t) - s(e));
            let r;
            return (
              e.every((e) => ((r = n.find((t) => t.language === e)), !r)),
              r || (t ? n[0] : void 0)
            );
          },
          getCurrentTrack() {
            return Re.getTracks.call(this)[this.currentTrack];
          },
          getLabel(e) {
            let t = e;
            return (
              !L(t) &&
                ae.textTracks &&
                this.captions.toggled &&
                (t = Re.getCurrentTrack.call(this)),
              L(t)
                ? N(t.label)
                  ? N(t.language)
                    ? Pe.get("enabled", this.config)
                    : e.language.toUpperCase()
                  : t.label
                : Pe.get("disabled", this.config)
            );
          },
          updateCues(e) {
            if (!this.supported.ui) return;
            if (!F(this.elements.captions))
              return void this.debug.warn("No captions element to render to");
            if (!T(e) && !Array.isArray(e))
              return void this.debug.warn("updateCues: Invalid input", e);
            let t = e;
            if (!t) {
              const e = Re.getCurrentTrack.call(this);
              t = Array.from((e || {}).activeCues || [])
                .map((e) => e.getCueAsHTML())
                .map(ke);
            }
            const i = t.map((e) => e.trim()).join("\n");
            if (i !== this.elements.captions.innerHTML) {
              U(this.elements.captions);
              const e = q("span", Q(this.config.selectors.caption));
              (e.innerHTML = i),
                this.elements.captions.appendChild(e),
                pe.call(this, this.media, "cuechange");
            }
          },
        },
        He = {
          enabled: !0,
          title: "",
          debug: !1,
          autoplay: !1,
          autopause: !0,
          playsinline: !0,
          seekTime: 10,
          volume: 1,
          muted: !1,
          duration: null,
          displayDuration: !0,
          invertTime: !0,
          toggleInvert: !0,
          ratio: null,
          clickToPlay: !0,
          hideControls: !0,
          resetOnEnd: !1,
          disableContextMenu: !0,
          loadSprite: !0,
          iconPrefix: "plyr",
          iconUrl: "https://cdn.plyr.io/3.7.8/plyr.svg",
          blankVideo: "https://cdn.plyr.io/static/blank.mp4",
          quality: {
            default: 576,
            options: [4320, 2880, 2160, 1440, 1080, 720, 576, 480, 360, 240],
            forced: !1,
            onChange: null,
          },
          loop: { active: !1 },
          speed: {
            selected: 1,
            options: [0.5, 0.75, 1, 1.25, 1.5, 1.75, 2, 4],
          },
          keyboard: { focused: !0, global: !1 },
          tooltips: { controls: !1, seek: !0 },
          captions: { active: !1, language: "auto", update: !1 },
          fullscreen: { enabled: !0, fallback: !0, iosNative: !1 },
          storage: { enabled: !0, key: "plyr" },
          controls: [
            "play-large",
            "play",
            "progress",
            "current-time",
            "mute",
            "volume",
            "captions",
            "settings",
            "pip",
            "airplay",
            "fullscreen",
          ],
          settings: ["captions", "quality", "speed"],
          i18n: {
            restart: "Restart",
            rewind: "Rewind {seektime}s",
            play: "Play",
            pause: "Pause",
            fastForward: "Forward {seektime}s",
            seek: "Seek",
            seekLabel: "{currentTime} of {duration}",
            played: "Played",
            buffered: "Buffered",
            currentTime: "Current time",
            duration: "Duration",
            volume: "Volume",
            mute: "Mute",
            unmute: "Unmute",
            enableCaptions: "Enable captions",
            disableCaptions: "Disable captions",
            download: "Download",
            enterFullscreen: "Enter fullscreen",
            exitFullscreen: "Exit fullscreen",
            frameTitle: "Player for {title}",
            captions: "Captions",
            settings: "Settings",
            pip: "PIP",
            menuBack: "Go back to previous menu",
            speed: "Speed",
            normal: "Normal",
            quality: "Quality",
            loop: "Loop",
            start: "Start",
            end: "End",
            all: "All",
            reset: "Reset",
            disabled: "Disabled",
            enabled: "Enabled",
            advertisement: "Ad",
            qualityBadge: {
              2160: "4K",
              1440: "HD",
              1080: "HD",
              720: "HD",
              576: "SD",
              480: "SD",
            },
          },
          urls: {
            download: null,
            vimeo: {
              sdk: "https://player.vimeo.com/api/player.js",
              iframe: "https://player.vimeo.com/video/{0}?{1}",
              api: "https://vimeo.com/api/oembed.json?url={0}",
            },
            youtube: {
              sdk: "https://www.youtube.com/iframe_api",
              api: "https://noembed.com/embed?url=https://www.youtube.com/watch?v={0}",
            },
            googleIMA: {
              sdk: "https://imasdk.googleapis.com/js/sdkloader/ima3.js",
            },
          },
          listeners: {
            seek: null,
            play: null,
            pause: null,
            restart: null,
            rewind: null,
            fastForward: null,
            mute: null,
            volume: null,
            captions: null,
            download: null,
            fullscreen: null,
            pip: null,
            airplay: null,
            speed: null,
            quality: null,
            loop: null,
            language: null,
          },
          events: [
            "ended",
            "progress",
            "stalled",
            "playing",
            "waiting",
            "canplay",
            "canplaythrough",
            "loadstart",
            "loadeddata",
            "loadedmetadata",
            "timeupdate",
            "volumechange",
            "play",
            "pause",
            "error",
            "seeking",
            "seeked",
            "emptied",
            "ratechange",
            "cuechange",
            "download",
            "enterfullscreen",
            "exitfullscreen",
            "captionsenabled",
            "captionsdisabled",
            "languagechange",
            "controlshidden",
            "controlsshown",
            "ready",
            "statechange",
            "qualitychange",
            "adsloaded",
            "adscontentpause",
            "adscontentresume",
            "adstarted",
            "adsmidpoint",
            "adscomplete",
            "adsallcomplete",
            "adsimpression",
            "adsclick",
          ],
          selectors: {
            editable: "input, textarea, select, [contenteditable]",
            container: ".plyr",
            controls: { container: null, wrapper: ".plyr__controls" },
            labels: "[data-plyr]",
            buttons: {
              play: '[data-plyr="play"]',
              pause: '[data-plyr="pause"]',
              restart: '[data-plyr="restart"]',
              rewind: '[data-plyr="rewind"]',
              fastForward: '[data-plyr="fast-forward"]',
              mute: '[data-plyr="mute"]',
              captions: '[data-plyr="captions"]',
              download: '[data-plyr="download"]',
              fullscreen: '[data-plyr="fullscreen"]',
              pip: '[data-plyr="pip"]',
              airplay: '[data-plyr="airplay"]',
              settings: '[data-plyr="settings"]',
              loop: '[data-plyr="loop"]',
            },
            inputs: {
              seek: '[data-plyr="seek"]',
              volume: '[data-plyr="volume"]',
              speed: '[data-plyr="speed"]',
              language: '[data-plyr="language"]',
              quality: '[data-plyr="quality"]',
            },
            display: {
              currentTime: ".plyr__time--current",
              duration: ".plyr__time--duration",
              buffer: ".plyr__progress__buffer",
              loop: ".plyr__progress__loop",
              volume: ".plyr__volume--display",
            },
            progress: ".plyr__progress",
            captions: ".plyr__captions",
            caption: ".plyr__caption",
          },
          classNames: {
            type: "plyr--{0}",
            provider: "plyr--{0}",
            video: "plyr__video-wrapper",
            embed: "plyr__video-embed",
            videoFixedRatio: "plyr__video-wrapper--fixed-ratio",
            embedContainer: "plyr__video-embed__container",
            poster: "plyr__poster",
            posterEnabled: "plyr__poster-enabled",
            ads: "plyr__ads",
            control: "plyr__control",
            controlPressed: "plyr__control--pressed",
            playing: "plyr--playing",
            paused: "plyr--paused",
            stopped: "plyr--stopped",
            loading: "plyr--loading",
            hover: "plyr--hover",
            tooltip: "plyr__tooltip",
            cues: "plyr__cues",
            marker: "plyr__progress__marker",
            hidden: "plyr__sr-only",
            hideControls: "plyr--hide-controls",
            isTouch: "plyr--is-touch",
            uiSupported: "plyr--full-ui",
            noTransition: "plyr--no-transition",
            display: { time: "plyr__time" },
            menu: {
              value: "plyr__menu__value",
              badge: "plyr__badge",
              open: "plyr--menu-open",
            },
            captions: {
              enabled: "plyr--captions-enabled",
              active: "plyr--captions-active",
            },
            fullscreen: {
              enabled: "plyr--fullscreen-enabled",
              fallback: "plyr--fullscreen-fallback",
            },
            pip: {
              supported: "plyr--pip-supported",
              active: "plyr--pip-active",
            },
            airplay: {
              supported: "plyr--airplay-supported",
              active: "plyr--airplay-active",
            },
            previewThumbnails: {
              thumbContainer: "plyr__preview-thumb",
              thumbContainerShown: "plyr__preview-thumb--is-shown",
              imageContainer: "plyr__preview-thumb__image-container",
              timeContainer: "plyr__preview-thumb__time-container",
              scrubbingContainer: "plyr__preview-scrubbing",
              scrubbingContainerShown: "plyr__preview-scrubbing--is-shown",
            },
          },
          attributes: {
            embed: {
              provider: "data-plyr-provider",
              id: "data-plyr-embed-id",
              hash: "data-plyr-embed-hash",
            },
          },
          ads: { enabled: !1, publisherId: "", tagUrl: "" },
          previewThumbnails: { enabled: !1, src: "" },
          vimeo: {
            byline: !1,
            portrait: !1,
            title: !1,
            speed: !0,
            transparent: !1,
            customControls: !0,
            referrerPolicy: null,
            premium: !1,
          },
          youtube: {
            rel: 0,
            showinfo: 0,
            iv_load_policy: 3,
            modestbranding: 1,
            customControls: !0,
            noCookie: !1,
          },
          mediaMetadata: { title: "", artist: "", album: "", artwork: [] },
          markers: { enabled: !1, points: [] },
        },
        We = "picture-in-picture",
        je = { html5: "html5", youtube: "youtube", vimeo: "vimeo" },
        Ye = "video",
        Xe = () => {};
      class qe {
        constructor(e = !1) {
          (this.enabled = window.console && e),
            this.enabled && this.log("Debugging enabled");
        }
        get log() {
          return this.enabled
            ? Function.prototype.bind.call(console.log, console)
            : Xe;
        }
        get warn() {
          return this.enabled
            ? Function.prototype.bind.call(console.warn, console)
            : Xe;
        }
        get error() {
          return this.enabled
            ? Function.prototype.bind.call(console.error, console)
            : Xe;
        }
      }
      class Ve {
        constructor(t) {
          e(this, "onChange", () => {
            if (!this.supported) return;
            const e = this.player.elements.buttons.fullscreen;
            F(e) && (e.pressed = this.active);
            const t =
              this.target === this.player.media
                ? this.target
                : this.player.elements.container;
            pe.call(
              this.player,
              t,
              this.active ? "enterfullscreen" : "exitfullscreen",
              !0
            );
          }),
            e(this, "toggleFallback", (e = !1) => {
              if (
                (e
                  ? (this.scrollPosition = {
                      x: window.scrollX ?? 0,
                      y: window.scrollY ?? 0,
                    })
                  : window.scrollTo(
                      this.scrollPosition.x,
                      this.scrollPosition.y
                    ),
                (document.body.style.overflow = e ? "hidden" : ""),
                Z(
                  this.target,
                  this.player.config.classNames.fullscreen.fallback,
                  e
                ),
                H.isIos)
              ) {
                let t = document.head.querySelector('meta[name="viewport"]');
                const i = "viewport-fit=cover";
                t ||
                  ((t = document.createElement("meta")),
                  t.setAttribute("name", "viewport"));
                const s = S(t.content) && t.content.includes(i);
                e
                  ? ((this.cleanupViewport = !s), s || (t.content += `,${i}`))
                  : this.cleanupViewport &&
                    (t.content = t.content
                      .split(",")
                      .filter((e) => e.trim() !== i)
                      .join(","));
              }
              this.onChange();
            }),
            e(this, "trapFocus", (e) => {
              if (H.isIos || H.isIPadOS || !this.active || "Tab" !== e.key)
                return;
              const t = document.activeElement,
                i = ie.call(
                  this.player,
                  "a[href], button:not(:disabled), input:not(:disabled), [tabindex]"
                ),
                [s] = i,
                n = i[i.length - 1];
              t !== n || e.shiftKey
                ? t === s && e.shiftKey && (n.focus(), e.preventDefault())
                : (s.focus(), e.preventDefault());
            }),
            e(this, "update", () => {
              if (this.supported) {
                let e;
                (e = this.forceFallback
                  ? "Fallback (forced)"
                  : Ve.nativeSupported
                  ? "Native"
                  : "Fallback"),
                  this.player.debug.log(`${e} fullscreen enabled`);
              } else
                this.player.debug.log(
                  "Fullscreen not supported and fallback disabled"
                );
              Z(
                this.player.elements.container,
                this.player.config.classNames.fullscreen.enabled,
                this.supported
              );
            }),
            e(this, "enter", () => {
              this.supported &&
                (H.isIos && this.player.config.fullscreen.iosNative
                  ? this.player.isVimeo
                    ? this.player.embed.requestFullscreen()
                    : this.target.webkitEnterFullscreen()
                  : !Ve.nativeSupported || this.forceFallback
                  ? this.toggleFallback(!0)
                  : this.prefix
                  ? N(this.prefix) ||
                    this.target[`${this.prefix}Request${this.property}`]()
                  : this.target.requestFullscreen({ navigationUI: "hide" }));
            }),
            e(this, "exit", () => {
              if (this.supported)
                if (H.isIos && this.player.config.fullscreen.iosNative)
                  this.player.isVimeo
                    ? this.player.embed.exitFullscreen()
                    : this.target.webkitEnterFullscreen(),
                    me(this.player.play());
                else if (!Ve.nativeSupported || this.forceFallback)
                  this.toggleFallback(!1);
                else if (this.prefix) {
                  if (!N(this.prefix)) {
                    const e = "moz" === this.prefix ? "Cancel" : "Exit";
                    document[`${this.prefix}${e}${this.property}`]();
                  }
                } else
                  (document.cancelFullScreen || document.exitFullscreen).call(
                    document
                  );
            }),
            e(this, "toggle", () => {
              this.active ? this.exit() : this.enter();
            }),
            (this.player = t),
            (this.prefix = Ve.prefix),
            (this.property = Ve.property),
            (this.scrollPosition = { x: 0, y: 0 }),
            (this.forceFallback = "force" === t.config.fullscreen.fallback),
            (this.player.elements.fullscreen =
              t.config.fullscreen.container &&
              (function (e, t) {
                const { prototype: i } = Element;
                return (
                  i.closest ||
                  function () {
                    let e = this;
                    do {
                      if (te.matches(e, t)) return e;
                      e = e.parentElement || e.parentNode;
                    } while (null !== e && 1 === e.nodeType);
                    return null;
                  }
                ).call(e, t);
              })(
                this.player.elements.container,
                t.config.fullscreen.container
              )),
            ue.call(
              this.player,
              document,
              "ms" === this.prefix
                ? "MSFullscreenChange"
                : `${this.prefix}fullscreenchange`,
              () => {
                this.onChange();
              }
            ),
            ue.call(
              this.player,
              this.player.elements.container,
              "dblclick",
              (e) => {
                (F(this.player.elements.controls) &&
                  this.player.elements.controls.contains(e.target)) ||
                  this.player.listeners.proxy(e, this.toggle, "fullscreen");
              }
            ),
            ue.call(this, this.player.elements.container, "keydown", (e) =>
              this.trapFocus(e)
            ),
            this.update();
        }
        static get nativeSupported() {
          return !!(
            document.fullscreenEnabled ||
            document.webkitFullscreenEnabled ||
            document.mozFullScreenEnabled ||
            document.msFullscreenEnabled
          );
        }
        get useNative() {
          return Ve.nativeSupported && !this.forceFallback;
        }
        static get prefix() {
          if (k(document.exitFullscreen)) return "";
          let e = "";
          return (
            ["webkit", "moz", "ms"].some(
              (t) =>
                !(
                  (!k(document[`${t}ExitFullscreen`]) &&
                    !k(document[`${t}CancelFullScreen`])) ||
                  ((e = t), 0)
                )
            ),
            e
          );
        }
        static get property() {
          return "moz" === this.prefix ? "FullScreen" : "Fullscreen";
        }
        get supported() {
          return [
            this.player.config.fullscreen.enabled,
            this.player.isVideo,
            Ve.nativeSupported || this.player.config.fullscreen.fallback,
            !this.player.isYouTube ||
              Ve.nativeSupported ||
              !H.isIos ||
              (this.player.config.playsinline &&
                !this.player.config.fullscreen.iosNative),
          ].every(Boolean);
        }
        get active() {
          if (!this.supported) return !1;
          if (!Ve.nativeSupported || this.forceFallback)
            return ee(
              this.target,
              this.player.config.classNames.fullscreen.fallback
            );
          const e = this.prefix
            ? this.target.getRootNode()[`${this.prefix}${this.property}Element`]
            : this.target.getRootNode().fullscreenElement;
          return e && e.shadowRoot
            ? e === this.target.getRootNode().host
            : e === this.target;
        }
        get target() {
          return H.isIos && this.player.config.fullscreen.iosNative
            ? this.player.media
            : this.player.elements.fullscreen ?? this.player.elements.container;
        }
      }
      function Ge(e, t = 1) {
        return new Promise((i, s) => {
          const n = new Image(),
            r = () => {
              delete n.onload,
                delete n.onerror,
                (n.naturalWidth >= t ? i : s)(n);
            };
          Object.assign(n, { onload: r, onerror: r, src: e });
        });
      }
      const Ue = {
        addStyleHook() {
          Z(
            this.elements.container,
            this.config.selectors.container.replace(".", ""),
            !0
          ),
            Z(
              this.elements.container,
              this.config.classNames.uiSupported,
              this.supported.ui
            );
        },
        toggleNativeControls(e = !1) {
          e && this.isHTML5
            ? this.media.setAttribute("controls", "")
            : this.media.removeAttribute("controls");
        },
        build() {
          if ((this.listeners.media(), !this.supported.ui))
            return (
              this.debug.warn(
                `Basic support only for ${this.provider} ${this.type}`
              ),
              void Ue.toggleNativeControls.call(this, !0)
            );
          F(this.elements.controls) ||
            (ze.inject.call(this), this.listeners.controls()),
            Ue.toggleNativeControls.call(this),
            this.isHTML5 && Re.setup.call(this),
            (this.volume = null),
            (this.muted = null),
            (this.loop = null),
            (this.quality = null),
            (this.speed = null),
            ze.updateVolume.call(this),
            ze.timeUpdate.call(this),
            ze.durationUpdate.call(this),
            Ue.checkPlaying.call(this),
            Z(
              this.elements.container,
              this.config.classNames.pip.supported,
              ae.pip && this.isHTML5 && this.isVideo
            ),
            Z(
              this.elements.container,
              this.config.classNames.airplay.supported,
              ae.airplay && this.isHTML5
            ),
            Z(
              this.elements.container,
              this.config.classNames.isTouch,
              this.touch
            ),
            (this.ready = !0),
            setTimeout(() => {
              pe.call(this, this.media, "ready");
            }, 0),
            Ue.setTitle.call(this),
            this.poster &&
              Ue.setPoster.call(this, this.poster, !1).catch(() => {}),
            this.config.duration && ze.durationUpdate.call(this),
            this.config.mediaMetadata && ze.setMediaMetadata.call(this);
        },
        setTitle() {
          let e = Pe.get("play", this.config);
          if (
            (S(this.config.title) &&
              !N(this.config.title) &&
              (e += `, ${this.config.title}`),
            Array.from(this.elements.buttons.play || []).forEach((t) => {
              t.setAttribute("aria-label", e);
            }),
            this.isEmbed)
          ) {
            const e = se.call(this, "iframe");
            if (!F(e)) return;
            const t = N(this.config.title) ? "video" : this.config.title,
              i = Pe.get("frameTitle", this.config);
            e.setAttribute("title", i.replace("{title}", t));
          }
        },
        togglePoster(e) {
          Z(this.elements.container, this.config.classNames.posterEnabled, e);
        },
        setPoster(e, t = !0) {
          return t && this.poster
            ? Promise.reject(new Error("Poster already set"))
            : (this.media.setAttribute("data-poster", e),
              this.elements.poster.removeAttribute("hidden"),
              fe
                .call(this)
                .then(() => Ge(e))
                .catch((t) => {
                  throw (
                    (e === this.poster && Ue.togglePoster.call(this, !1), t)
                  );
                })
                .then(() => {
                  if (e !== this.poster)
                    throw new Error(
                      "setPoster cancelled by later call to setPoster"
                    );
                })
                .then(
                  () => (
                    Object.assign(this.elements.poster.style, {
                      backgroundImage: `url('${e}')`,
                      backgroundSize: "",
                    }),
                    Ue.togglePoster.call(this, !0),
                    e
                  )
                ));
        },
        checkPlaying(e) {
          Z(
            this.elements.container,
            this.config.classNames.playing,
            this.playing
          ),
            Z(
              this.elements.container,
              this.config.classNames.paused,
              this.paused
            ),
            Z(
              this.elements.container,
              this.config.classNames.stopped,
              this.stopped
            ),
            Array.from(this.elements.buttons.play || []).forEach((e) => {
              Object.assign(e, { pressed: this.playing }),
                e.setAttribute(
                  "aria-label",
                  Pe.get(this.playing ? "pause" : "play", this.config)
                );
            }),
            ($(e) && "timeupdate" === e.type) || Ue.toggleControls.call(this);
        },
        checkLoading(e) {
          (this.loading = ["stalled", "waiting"].includes(e.type)),
            clearTimeout(this.timers.loading),
            (this.timers.loading = setTimeout(
              () => {
                Z(
                  this.elements.container,
                  this.config.classNames.loading,
                  this.loading
                ),
                  Ue.toggleControls.call(this);
              },
              this.loading ? 250 : 0
            ));
        },
        toggleControls(e) {
          const { controls: t } = this.elements;
          if (t && this.config.hideControls) {
            const i = this.touch && this.lastSeekTime + 2e3 > Date.now();
            this.toggleControls(
              Boolean(
                e || this.loading || this.paused || t.pressed || t.hover || i
              )
            );
          }
        },
        migrateStyles() {
          Object.values({ ...this.media.style })
            .filter((e) => !N(e) && S(e) && e.startsWith("--plyr"))
            .forEach((e) => {
              this.elements.container.style.setProperty(
                e,
                this.media.style.getPropertyValue(e)
              ),
                this.media.style.removeProperty(e);
            }),
            N(this.media.style) && this.media.removeAttribute("style");
        },
      };
      class Ke {
        constructor(t) {
          e(this, "firstTouch", () => {
            const { player: e } = this,
              { elements: t } = e;
            (e.touch = !0), Z(t.container, e.config.classNames.isTouch, !0);
          }),
            e(this, "global", (e = !0) => {
              const { player: t } = this;
              t.config.keyboard.global &&
                le.call(t, window, "keydown keyup", this.handleKey, e, !1),
                le.call(t, document.body, "click", this.toggleMenu, e),
                de.call(t, document.body, "touchstart", this.firstTouch);
            }),
            e(this, "container", () => {
              const { player: e } = this,
                { config: t, elements: i, timers: s } = e;
              !t.keyboard.global &&
                t.keyboard.focused &&
                ue.call(e, i.container, "keydown keyup", this.handleKey, !1),
                ue.call(
                  e,
                  i.container,
                  "mousemove mouseleave touchstart touchmove enterfullscreen exitfullscreen",
                  (t) => {
                    const { controls: n } = i;
                    n &&
                      "enterfullscreen" === t.type &&
                      ((n.pressed = !1), (n.hover = !1));
                    let r = 0;
                    ["touchstart", "touchmove", "mousemove"].includes(t.type) &&
                      (Ue.toggleControls.call(e, !0),
                      (r = e.touch ? 3e3 : 2e3)),
                      clearTimeout(s.controls),
                      (s.controls = setTimeout(
                        () => Ue.toggleControls.call(e, !1),
                        r
                      ));
                  }
                );
              const n = () => {
                  if (!e.isVimeo || e.config.vimeo.premium) return;
                  const t = i.wrapper,
                    { active: s } = e.fullscreen,
                    [n, r] = xe.call(e),
                    a = ye(`aspect-ratio: ${n} / ${r}`);
                  if (!s)
                    return void (a
                      ? ((t.style.width = null), (t.style.height = null))
                      : ((t.style.maxWidth = null), (t.style.margin = null)));
                  const [o, l] = [
                      Math.max(
                        document.documentElement.clientWidth || 0,
                        window.innerWidth || 0
                      ),
                      Math.max(
                        document.documentElement.clientHeight || 0,
                        window.innerHeight || 0
                      ),
                    ],
                    u = o / l > n / r;
                  a
                    ? ((t.style.width = u ? "auto" : "100%"),
                      (t.style.height = u ? "100%" : "auto"))
                    : ((t.style.maxWidth = u ? (l / r) * n + "px" : null),
                      (t.style.margin = u ? "0 auto" : null));
                },
                r = () => {
                  clearTimeout(s.resized), (s.resized = setTimeout(n, 50));
                };
              ue.call(e, i.container, "enterfullscreen exitfullscreen", (t) => {
                const { target: s } = e.fullscreen;
                s === i.container &&
                  ((!e.isEmbed && N(e.config.ratio)) ||
                    (n(),
                    ("enterfullscreen" === t.type ? ue : ce).call(
                      e,
                      window,
                      "resize",
                      r
                    )));
              });
            }),
            e(this, "media", () => {
              const { player: e } = this,
                { elements: t } = e;
              if (
                (ue.call(e, e.media, "timeupdate seeking seeked", (t) =>
                  ze.timeUpdate.call(e, t)
                ),
                ue.call(
                  e,
                  e.media,
                  "durationchange loadeddata loadedmetadata",
                  (t) => ze.durationUpdate.call(e, t)
                ),
                ue.call(e, e.media, "ended", () => {
                  e.isHTML5 &&
                    e.isVideo &&
                    e.config.resetOnEnd &&
                    (e.restart(), e.pause());
                }),
                ue.call(e, e.media, "progress playing seeking seeked", (t) =>
                  ze.updateProgress.call(e, t)
                ),
                ue.call(e, e.media, "volumechange", (t) =>
                  ze.updateVolume.call(e, t)
                ),
                ue.call(
                  e,
                  e.media,
                  "playing play pause ended emptied timeupdate",
                  (t) => Ue.checkPlaying.call(e, t)
                ),
                ue.call(e, e.media, "waiting canplay seeked playing", (t) =>
                  Ue.checkLoading.call(e, t)
                ),
                e.supported.ui && e.config.clickToPlay && !e.isAudio)
              ) {
                const i = se.call(e, `.${e.config.classNames.video}`);
                if (!F(i)) return;
                ue.call(e, t.container, "click", (s) => {
                  ([t.container, i].includes(s.target) ||
                    i.contains(s.target)) &&
                    ((e.touch && e.config.hideControls) ||
                      (e.ended
                        ? (this.proxy(s, e.restart, "restart"),
                          this.proxy(
                            s,
                            () => {
                              me(e.play());
                            },
                            "play"
                          ))
                        : this.proxy(
                            s,
                            () => {
                              me(e.togglePlay());
                            },
                            "play"
                          )));
                });
              }
              e.supported.ui &&
                e.config.disableContextMenu &&
                ue.call(
                  e,
                  t.wrapper,
                  "contextmenu",
                  (e) => {
                    e.preventDefault();
                  },
                  !1
                ),
                ue.call(e, e.media, "volumechange", () => {
                  e.storage.set({ volume: e.volume, muted: e.muted });
                }),
                ue.call(e, e.media, "ratechange", () => {
                  ze.updateSetting.call(e, "speed"),
                    e.storage.set({ speed: e.speed });
                }),
                ue.call(e, e.media, "qualitychange", (t) => {
                  ze.updateSetting.call(e, "quality", null, t.detail.quality);
                }),
                ue.call(e, e.media, "ready qualitychange", () => {
                  ze.setDownloadUrl.call(e);
                });
              const i = e.config.events.concat(["keyup", "keydown"]).join(" ");
              ue.call(e, e.media, i, (i) => {
                let { detail: s = {} } = i;
                "error" === i.type && (s = e.media.error),
                  pe.call(e, t.container, i.type, !0, s);
              });
            }),
            e(this, "proxy", (e, t, i) => {
              const { player: s } = this,
                n = s.config.listeners[i];
              let r = !0;
              k(n) && (r = n.call(s, e)), !1 !== r && k(t) && t.call(s, e);
            }),
            e(this, "bind", (e, t, i, s, n = !0) => {
              const { player: r } = this,
                a = r.config.listeners[s],
                o = k(a);
              ue.call(r, e, t, (e) => this.proxy(e, i, s), n && !o);
            }),
            e(this, "controls", () => {
              const { player: e } = this,
                { elements: t } = e,
                i = H.isIE ? "change" : "input";
              if (
                (t.buttons.play &&
                  Array.from(t.buttons.play).forEach((t) => {
                    this.bind(
                      t,
                      "click",
                      () => {
                        me(e.togglePlay());
                      },
                      "play"
                    );
                  }),
                this.bind(t.buttons.restart, "click", e.restart, "restart"),
                this.bind(
                  t.buttons.rewind,
                  "click",
                  () => {
                    (e.lastSeekTime = Date.now()), e.rewind();
                  },
                  "rewind"
                ),
                this.bind(
                  t.buttons.fastForward,
                  "click",
                  () => {
                    (e.lastSeekTime = Date.now()), e.forward();
                  },
                  "fastForward"
                ),
                this.bind(
                  t.buttons.mute,
                  "click",
                  () => {
                    e.muted = !e.muted;
                  },
                  "mute"
                ),
                this.bind(t.buttons.captions, "click", () =>
                  e.toggleCaptions()
                ),
                this.bind(
                  t.buttons.download,
                  "click",
                  () => {
                    pe.call(e, e.media, "download");
                  },
                  "download"
                ),
                this.bind(
                  t.buttons.fullscreen,
                  "click",
                  () => {
                    e.fullscreen.toggle();
                  },
                  "fullscreen"
                ),
                this.bind(
                  t.buttons.pip,
                  "click",
                  () => {
                    e.pip = "toggle";
                  },
                  "pip"
                ),
                this.bind(t.buttons.airplay, "click", e.airplay, "airplay"),
                this.bind(
                  t.buttons.settings,
                  "click",
                  (t) => {
                    t.stopPropagation(),
                      t.preventDefault(),
                      ze.toggleMenu.call(e, t);
                  },
                  null,
                  !1
                ),
                this.bind(
                  t.buttons.settings,
                  "keyup",
                  (t) => {
                    [" ", "Enter"].includes(t.key) &&
                      ("Enter" !== t.key
                        ? (t.preventDefault(),
                          t.stopPropagation(),
                          ze.toggleMenu.call(e, t))
                        : ze.focusFirstMenuItem.call(e, null, !0));
                  },
                  null,
                  !1
                ),
                this.bind(t.settings.menu, "keydown", (t) => {
                  "Escape" === t.key && ze.toggleMenu.call(e, t);
                }),
                this.bind(t.inputs.seek, "mousedown mousemove", (e) => {
                  const i = t.progress.getBoundingClientRect(),
                    s = (100 / i.width) * (e.pageX - i.left);
                  e.currentTarget.setAttribute("seek-value", s);
                }),
                this.bind(
                  t.inputs.seek,
                  "mousedown mouseup keydown keyup touchstart touchend",
                  (t) => {
                    const i = t.currentTarget,
                      s = "play-on-seeked";
                    if (O(t) && !["ArrowLeft", "ArrowRight"].includes(t.key))
                      return;
                    e.lastSeekTime = Date.now();
                    const n = i.hasAttribute(s),
                      r = ["mouseup", "touchend", "keyup"].includes(t.type);
                    n && r
                      ? (i.removeAttribute(s), me(e.play()))
                      : !r && e.playing && (i.setAttribute(s, ""), e.pause());
                  }
                ),
                H.isIos)
              ) {
                const t = ie.call(e, 'input[type="range"]');
                Array.from(t).forEach((e) =>
                  this.bind(e, i, (e) => R(e.target))
                );
              }
              this.bind(
                t.inputs.seek,
                i,
                (t) => {
                  const i = t.currentTarget;
                  let s = i.getAttribute("seek-value");
                  N(s) && (s = i.value),
                    i.removeAttribute("seek-value"),
                    (e.currentTime = (s / i.max) * e.duration);
                },
                "seek"
              ),
                this.bind(t.progress, "mouseenter mouseleave mousemove", (t) =>
                  ze.updateSeekTooltip.call(e, t)
                ),
                this.bind(t.progress, "mousemove touchmove", (t) => {
                  const { previewThumbnails: i } = e;
                  i && i.loaded && i.startMove(t);
                }),
                this.bind(t.progress, "mouseleave touchend click", () => {
                  const { previewThumbnails: t } = e;
                  t && t.loaded && t.endMove(!1, !0);
                }),
                this.bind(t.progress, "mousedown touchstart", (t) => {
                  const { previewThumbnails: i } = e;
                  i && i.loaded && i.startScrubbing(t);
                }),
                this.bind(t.progress, "mouseup touchend", (t) => {
                  const { previewThumbnails: i } = e;
                  i && i.loaded && i.endScrubbing(t);
                }),
                H.isWebKit &&
                  Array.from(ie.call(e, 'input[type="range"]')).forEach((t) => {
                    this.bind(t, "input", (t) =>
                      ze.updateRangeFill.call(e, t.target)
                    );
                  }),
                e.config.toggleInvert &&
                  !F(t.display.duration) &&
                  this.bind(t.display.currentTime, "click", () => {
                    0 !== e.currentTime &&
                      ((e.config.invertTime = !e.config.invertTime),
                      ze.timeUpdate.call(e));
                  }),
                this.bind(
                  t.inputs.volume,
                  i,
                  (t) => {
                    e.volume = t.target.value;
                  },
                  "volume"
                ),
                this.bind(t.controls, "mouseenter mouseleave", (i) => {
                  t.controls.hover = !e.touch && "mouseenter" === i.type;
                }),
                t.fullscreen &&
                  Array.from(t.fullscreen.children)
                    .filter((e) => !e.contains(t.container))
                    .forEach((i) => {
                      this.bind(i, "mouseenter mouseleave", (i) => {
                        t.controls &&
                          (t.controls.hover =
                            !e.touch && "mouseenter" === i.type);
                      });
                    }),
                this.bind(
                  t.controls,
                  "mousedown mouseup touchstart touchend touchcancel",
                  (e) => {
                    t.controls.pressed = ["mousedown", "touchstart"].includes(
                      e.type
                    );
                  }
                ),
                this.bind(t.controls, "focusin", () => {
                  const { config: i, timers: s } = e;
                  Z(t.controls, i.classNames.noTransition, !0),
                    Ue.toggleControls.call(e, !0),
                    setTimeout(() => {
                      Z(t.controls, i.classNames.noTransition, !1);
                    }, 0);
                  const n = this.touch ? 3e3 : 4e3;
                  clearTimeout(s.controls),
                    (s.controls = setTimeout(
                      () => Ue.toggleControls.call(e, !1),
                      n
                    ));
                }),
                this.bind(
                  t.inputs.volume,
                  "wheel",
                  (t) => {
                    const i = t.webkitDirectionInvertedFromDevice,
                      [s, n] = [t.deltaX, -t.deltaY].map((e) => (i ? -e : e)),
                      r = Math.sign(Math.abs(s) > Math.abs(n) ? s : n);
                    e.increaseVolume(r / 50);
                    const { volume: a } = e.media;
                    ((1 === r && a < 1) || (-1 === r && a > 0)) &&
                      t.preventDefault();
                  },
                  "volume",
                  !1
                );
            }),
            (this.player = t),
            (this.lastKey = null),
            (this.focusTimer = null),
            (this.lastKeyDown = null),
            (this.handleKey = this.handleKey.bind(this)),
            (this.toggleMenu = this.toggleMenu.bind(this)),
            (this.firstTouch = this.firstTouch.bind(this));
        }
        handleKey(e) {
          const { player: t } = this,
            { elements: i } = t,
            {
              key: s,
              type: n,
              altKey: r,
              ctrlKey: a,
              metaKey: o,
              shiftKey: l,
            } = e,
            u = "keydown" === n,
            c = u && s === this.lastKey;
          var d;
          if (!(r || a || o || l) && s)
            if (u) {
              const n = document.activeElement;
              if (F(n)) {
                const { editable: s } = t.config.selectors,
                  { seek: r } = i.inputs;
                if (n !== r && te(n, s)) return;
                if (" " === e.key && te(n, 'button, [role^="menuitem"]'))
                  return;
              }
              switch (
                ([
                  " ",
                  "ArrowLeft",
                  "ArrowUp",
                  "ArrowRight",
                  "ArrowDown",
                  "0",
                  "1",
                  "2",
                  "3",
                  "4",
                  "5",
                  "6",
                  "7",
                  "8",
                  "9",
                  "c",
                  "f",
                  "k",
                  "l",
                  "m",
                ].includes(s) && (e.preventDefault(), e.stopPropagation()),
                s)
              ) {
                case "0":
                case "1":
                case "2":
                case "3":
                case "4":
                case "5":
                case "6":
                case "7":
                case "8":
                case "9":
                  c ||
                    ((d = parseInt(s, 10)),
                    (t.currentTime = (t.duration / 10) * d));
                  break;
                case " ":
                case "k":
                  c || me(t.togglePlay());
                  break;
                case "ArrowUp":
                  t.increaseVolume(0.1);
                  break;
                case "ArrowDown":
                  t.decreaseVolume(0.1);
                  break;
                case "m":
                  c || (t.muted = !t.muted);
                  break;
                case "ArrowRight":
                  t.forward();
                  break;
                case "ArrowLeft":
                  t.rewind();
                  break;
                case "f":
                  t.fullscreen.toggle();
                  break;
                case "c":
                  c || t.toggleCaptions();
                  break;
                case "l":
                  t.loop = !t.loop;
              }
              "Escape" === s &&
                !t.fullscreen.usingNative &&
                t.fullscreen.active &&
                t.fullscreen.toggle(),
                (this.lastKey = s);
            } else this.lastKey = null;
        }
        toggleMenu(e) {
          ze.toggleMenu.call(this.player, e);
        }
      }
      "undefined" != typeof globalThis
        ? globalThis
        : "undefined" != typeof window
        ? window
        : "undefined" != typeof global
        ? global
        : "undefined" != typeof self && self;
      var Qe = (function (e, t) {
        return (
          (function (e, t) {
            e.exports = (function () {
              var e = function () {},
                t = {},
                i = {},
                s = {};
              function n(e, t) {
                e = e.push ? e : [e];
                var n,
                  r,
                  a,
                  o = [],
                  l = e.length,
                  u = l;
                for (
                  n = function (e, i) {
                    i.length && o.push(e), --u || t(o);
                  };
                  l--;

                )
                  (r = e[l]),
                    (a = i[r]) ? n(r, a) : (s[r] = s[r] || []).push(n);
              }
              function r(e, t) {
                if (e) {
                  var n = s[e];
                  if (((i[e] = t), n))
                    for (; n.length; ) n[0](e, t), n.splice(0, 1);
                }
              }
              function a(t, i) {
                t.call && (t = { success: t }),
                  i.length ? (t.error || e)(i) : (t.success || e)(t);
              }
              function o(t, i, s, n) {
                var r,
                  a,
                  l = document,
                  u = s.async,
                  c = (s.numRetries || 0) + 1,
                  d = s.before || e,
                  p = t.replace(/[\?|#].*$/, ""),
                  h = t.replace(/^(css|img)!/, "");
                (n = n || 0),
                  /(^css!|\.css$)/.test(p)
                    ? (((a = l.createElement("link")).rel = "stylesheet"),
                      (a.href = h),
                      (r = "hideFocus" in a) &&
                        a.relList &&
                        ((r = 0), (a.rel = "preload"), (a.as = "style")))
                    : /(^img!|\.(png|gif|jpg|svg|webp)$)/.test(p)
                    ? ((a = l.createElement("img")).src = h)
                    : (((a = l.createElement("script")).src = t),
                      (a.async = void 0 === u || u)),
                  (a.onload =
                    a.onerror =
                    a.onbeforeload =
                      function (e) {
                        var l = e.type[0];
                        if (r)
                          try {
                            a.sheet.cssText.length || (l = "e");
                          } catch (e) {
                            18 != e.code && (l = "e");
                          }
                        if ("e" == l) {
                          if ((n += 1) < c) return o(t, i, s, n);
                        } else if ("preload" == a.rel && "style" == a.as)
                          return (a.rel = "stylesheet");
                        i(t, l, e.defaultPrevented);
                      }),
                  !1 !== d(t, a) && l.head.appendChild(a);
              }
              function l(e, t, i) {
                var s,
                  n,
                  r = (e = e.push ? e : [e]).length,
                  a = r,
                  l = [];
                for (
                  s = function (e, i, s) {
                    if (("e" == i && l.push(e), "b" == i)) {
                      if (!s) return;
                      l.push(e);
                    }
                    --r || t(l);
                  },
                    n = 0;
                  n < a;
                  n++
                )
                  o(e[n], s, i);
              }
              function u(e, i, s) {
                var n, o;
                if ((i && i.trim && (n = i), (o = (n ? s : i) || {}), n)) {
                  if (n in t) throw "LoadJS";
                  t[n] = !0;
                }
                function u(t, i) {
                  l(
                    e,
                    function (e) {
                      a(o, e), t && a({ success: t, error: i }, e), r(n, e);
                    },
                    o
                  );
                }
                if (o.returnPromise) return new Promise(u);
                u();
              }
              return (
                (u.ready = function (e, t) {
                  return (
                    n(e, function (e) {
                      a(t, e);
                    }),
                    u
                  );
                }),
                (u.done = function (e) {
                  r(e, []);
                }),
                (u.reset = function () {
                  (t = {}), (i = {}), (s = {});
                }),
                (u.isDefined = function (e) {
                  return e in t;
                }),
                u
              );
            })();
          })((t = { exports: {} })),
          t.exports
        );
      })();
      function Je(e) {
        return new Promise((t, i) => {
          Qe(e, { success: t, error: i });
        });
      }
      function Ze(e) {
        e && !this.embed.hasPlayed && (this.embed.hasPlayed = !0),
          this.media.paused === e &&
            ((this.media.paused = !e),
            pe.call(this, this.media, e ? "play" : "pause"));
      }
      const et = {
        setup() {
          const e = this;
          Z(e.elements.wrapper, e.config.classNames.embed, !0),
            (e.options.speed = e.config.speed.options),
            Ce.call(e),
            E(window.Vimeo)
              ? et.ready.call(e)
              : Je(e.config.urls.vimeo.sdk)
                  .then(() => {
                    et.ready.call(e);
                  })
                  .catch((t) => {
                    e.debug.warn("Vimeo SDK (player.js) failed to load", t);
                  });
        },
        ready() {
          const e = this,
            t = e.config.vimeo,
            { premium: i, referrerPolicy: s, ...n } = t;
          let r = e.media.getAttribute("src"),
            a = "";
          N(r)
            ? ((r = e.media.getAttribute(e.config.attributes.embed.id)),
              (a = e.media.getAttribute(e.config.attributes.embed.hash)))
            : (a = (function (e) {
                const t = e.match(
                  /^.*(vimeo.com\/|video\/)(\d+)(\?.*&*h=|\/)+([\d,a-f]+)/
                );
                return t && 5 === t.length ? t[4] : null;
              })(r));
          const o = a ? { h: a } : {};
          i && Object.assign(n, { controls: !1, sidedock: !1 });
          const l = Be({
              loop: e.config.loop.active,
              autoplay: e.autoplay,
              muted: e.muted,
              gesture: "media",
              playsinline: e.config.playsinline,
              ...o,
              ...n,
            }),
            u = N((c = r))
              ? null
              : _(Number(c))
              ? c
              : c.match(/^.*(vimeo.com\/|video\/)(\d+).*/)
              ? RegExp.$2
              : c;
          var c;
          const d = q("iframe"),
            p = _e(e.config.urls.vimeo.iframe, u, l);
          if (
            (d.setAttribute("src", p),
            d.setAttribute("allowfullscreen", ""),
            d.setAttribute(
              "allow",
              [
                "autoplay",
                "fullscreen",
                "picture-in-picture",
                "encrypted-media",
                "accelerometer",
                "gyroscope",
              ].join("; ")
            ),
            N(s) || d.setAttribute("referrerPolicy", s),
            i || !t.customControls)
          )
            d.setAttribute("data-poster", e.poster), (e.media = K(d, e.media));
          else {
            const t = q("div", {
              class: e.config.classNames.embedContainer,
              "data-poster": e.poster,
            });
            t.appendChild(d), (e.media = K(t, e.media));
          }
          t.customControls ||
            $e(_e(e.config.urls.vimeo.api, p)).then((t) => {
              !N(t) &&
                t.thumbnail_url &&
                Ue.setPoster.call(e, t.thumbnail_url).catch(() => {});
            }),
            (e.embed = new window.Vimeo.Player(d, {
              autopause: e.config.autopause,
              muted: e.muted,
            })),
            (e.media.paused = !0),
            (e.media.currentTime = 0),
            e.supported.ui && e.embed.disableTextTrack(),
            (e.media.play = () => (Ze.call(e, !0), e.embed.play())),
            (e.media.pause = () => (Ze.call(e, !1), e.embed.pause())),
            (e.media.stop = () => {
              e.pause(), (e.currentTime = 0);
            });
          let { currentTime: h } = e.media;
          Object.defineProperty(e.media, "currentTime", {
            get: () => h,
            set(t) {
              const { embed: i, media: s, paused: n, volume: r } = e,
                a = n && !i.hasPlayed;
              (s.seeking = !0),
                pe.call(e, s, "seeking"),
                Promise.resolve(a && i.setVolume(0))
                  .then(() => i.setCurrentTime(t))
                  .then(() => a && i.pause())
                  .then(() => a && i.setVolume(r))
                  .catch(() => {});
            },
          });
          let f = e.config.speed.selected;
          Object.defineProperty(e.media, "playbackRate", {
            get: () => f,
            set(t) {
              e.embed
                .setPlaybackRate(t)
                .then(() => {
                  (f = t), pe.call(e, e.media, "ratechange");
                })
                .catch(() => {
                  e.options.speed = [1];
                });
            },
          });
          let { volume: m } = e.config;
          Object.defineProperty(e.media, "volume", {
            get: () => m,
            set(t) {
              e.embed.setVolume(t).then(() => {
                (m = t), pe.call(e, e.media, "volumechange");
              });
            },
          });
          let { muted: g } = e.config;
          Object.defineProperty(e.media, "muted", {
            get: () => g,
            set(t) {
              const i = !!M(t) && t;
              e.embed.setMuted(!!i || e.config.muted).then(() => {
                (g = i), pe.call(e, e.media, "volumechange");
              });
            },
          });
          let v,
            { loop: y } = e.config;
          Object.defineProperty(e.media, "loop", {
            get: () => y,
            set(t) {
              const i = M(t) ? t : e.config.loop.active;
              e.embed.setLoop(i).then(() => {
                y = i;
              });
            },
          }),
            e.embed
              .getVideoUrl()
              .then((t) => {
                (v = t), ze.setDownloadUrl.call(e);
              })
              .catch((e) => {
                this.debug.warn(e);
              }),
            Object.defineProperty(e.media, "currentSrc", { get: () => v }),
            Object.defineProperty(e.media, "ended", {
              get: () => e.currentTime === e.duration,
            }),
            Promise.all([
              e.embed.getVideoWidth(),
              e.embed.getVideoHeight(),
            ]).then((t) => {
              const [i, s] = t;
              (e.embed.ratio = Te(i, s)), Ce.call(this);
            }),
            e.embed.setAutopause(e.config.autopause).then((t) => {
              e.config.autopause = t;
            }),
            e.embed.getVideoTitle().then((t) => {
              (e.config.title = t), Ue.setTitle.call(this);
            }),
            e.embed.getCurrentTime().then((t) => {
              (h = t), pe.call(e, e.media, "timeupdate");
            }),
            e.embed.getDuration().then((t) => {
              (e.media.duration = t), pe.call(e, e.media, "durationchange");
            }),
            e.embed.getTextTracks().then((t) => {
              (e.media.textTracks = t), Re.setup.call(e);
            }),
            e.embed.on("cuechange", ({ cues: t = [] }) => {
              const i = t.map((e) =>
                (function (e) {
                  const t = document.createDocumentFragment(),
                    i = document.createElement("div");
                  return (
                    t.appendChild(i), (i.innerHTML = e), t.firstChild.innerText
                  );
                })(e.text)
              );
              Re.updateCues.call(e, i);
            }),
            e.embed.on("loaded", () => {
              e.embed.getPaused().then((t) => {
                Ze.call(e, !t), t || pe.call(e, e.media, "playing");
              }),
                F(e.embed.element) &&
                  e.supported.ui &&
                  e.embed.element.setAttribute("tabindex", -1);
            }),
            e.embed.on("bufferstart", () => {
              pe.call(e, e.media, "waiting");
            }),
            e.embed.on("bufferend", () => {
              pe.call(e, e.media, "playing");
            }),
            e.embed.on("play", () => {
              Ze.call(e, !0), pe.call(e, e.media, "playing");
            }),
            e.embed.on("pause", () => {
              Ze.call(e, !1);
            }),
            e.embed.on("timeupdate", (t) => {
              (e.media.seeking = !1),
                (h = t.seconds),
                pe.call(e, e.media, "timeupdate");
            }),
            e.embed.on("progress", (t) => {
              (e.media.buffered = t.percent),
                pe.call(e, e.media, "progress"),
                1 === parseInt(t.percent, 10) &&
                  pe.call(e, e.media, "canplaythrough"),
                e.embed.getDuration().then((t) => {
                  t !== e.media.duration &&
                    ((e.media.duration = t),
                    pe.call(e, e.media, "durationchange"));
                });
            }),
            e.embed.on("seeked", () => {
              (e.media.seeking = !1), pe.call(e, e.media, "seeked");
            }),
            e.embed.on("ended", () => {
              (e.media.paused = !0), pe.call(e, e.media, "ended");
            }),
            e.embed.on("error", (t) => {
              (e.media.error = t), pe.call(e, e.media, "error");
            }),
            t.customControls && setTimeout(() => Ue.build.call(e), 0);
        },
      };
      function tt(e) {
        e && !this.embed.hasPlayed && (this.embed.hasPlayed = !0),
          this.media.paused === e &&
            ((this.media.paused = !e),
            pe.call(this, this.media, e ? "play" : "pause"));
      }
      function it(e) {
        return e.noCookie
          ? "https://www.youtube-nocookie.com"
          : "http:" === window.location.protocol
          ? "http://www.youtube.com"
          : void 0;
      }
      const st = {
          setup() {
            if (
              (Z(this.elements.wrapper, this.config.classNames.embed, !0),
              E(window.YT) && k(window.YT.Player))
            )
              st.ready.call(this);
            else {
              const e = window.onYouTubeIframeAPIReady;
              (window.onYouTubeIframeAPIReady = () => {
                k(e) && e(), st.ready.call(this);
              }),
                Je(this.config.urls.youtube.sdk).catch((e) => {
                  this.debug.warn("YouTube API failed to load", e);
                });
            }
          },
          getTitle(e) {
            $e(_e(this.config.urls.youtube.api, e))
              .then((e) => {
                if (E(e)) {
                  const { title: t, height: i, width: s } = e;
                  (this.config.title = t),
                    Ue.setTitle.call(this),
                    (this.embed.ratio = Te(s, i));
                }
                Ce.call(this);
              })
              .catch(() => {
                Ce.call(this);
              });
          },
          ready() {
            const e = this,
              t = e.config.youtube,
              i = e.media && e.media.getAttribute("id");
            if (!N(i) && i.startsWith("youtube-")) return;
            let s = e.media.getAttribute("src");
            N(s) && (s = e.media.getAttribute(this.config.attributes.embed.id));
            const n = N((r = s))
              ? null
              : r.match(
                  /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/
                )
              ? RegExp.$2
              : r;
            var r;
            const a = q("div", {
              id: `${e.provider}-${Math.floor(1e4 * Math.random())}`,
              "data-poster": t.customControls ? e.poster : void 0,
            });
            if (((e.media = K(a, e.media)), t.customControls)) {
              const t = (e) => `https://i.ytimg.com/vi/${n}/${e}default.jpg`;
              Ge(t("maxres"), 121)
                .catch(() => Ge(t("sd"), 121))
                .catch(() => Ge(t("hq")))
                .then((t) => Ue.setPoster.call(e, t.src))
                .then((t) => {
                  t.includes("maxres") ||
                    (e.elements.poster.style.backgroundSize = "cover");
                })
                .catch(() => {});
            }
            e.embed = new window.YT.Player(e.media, {
              videoId: n,
              host: it(t),
              playerVars: j(
                {},
                {
                  autoplay: e.config.autoplay ? 1 : 0,
                  hl: e.config.hl,
                  controls: e.supported.ui && t.customControls ? 0 : 1,
                  disablekb: 1,
                  playsinline:
                    e.config.playsinline && !e.config.fullscreen.iosNative
                      ? 1
                      : 0,
                  cc_load_policy: e.captions.active ? 1 : 0,
                  cc_lang_pref: e.config.captions.language,
                  widget_referrer: window ? window.location.href : null,
                },
                t
              ),
              events: {
                onError(t) {
                  if (!e.media.error) {
                    const i = t.data,
                      s =
                        {
                          2: "The request contains an invalid parameter value. For example, this error occurs if you specify a video ID that does not have 11 characters, or if the video ID contains invalid characters, such as exclamation points or asterisks.",
                          5: "The requested content cannot be played in an HTML5 player or another error related to the HTML5 player has occurred.",
                          100: "The video requested was not found. This error occurs when a video has been removed (for any reason) or has been marked as private.",
                          101: "The owner of the requested video does not allow it to be played in embedded players.",
                          150: "The owner of the requested video does not allow it to be played in embedded players.",
                        }[i] || "An unknown error occurred";
                    (e.media.error = { code: i, message: s }),
                      pe.call(e, e.media, "error");
                  }
                },
                onPlaybackRateChange(t) {
                  const i = t.target;
                  (e.media.playbackRate = i.getPlaybackRate()),
                    pe.call(e, e.media, "ratechange");
                },
                onReady(i) {
                  if (k(e.media.play)) return;
                  const s = i.target;
                  st.getTitle.call(e, n),
                    (e.media.play = () => {
                      tt.call(e, !0), s.playVideo();
                    }),
                    (e.media.pause = () => {
                      tt.call(e, !1), s.pauseVideo();
                    }),
                    (e.media.stop = () => {
                      s.stopVideo();
                    }),
                    (e.media.duration = s.getDuration()),
                    (e.media.paused = !0),
                    (e.media.currentTime = 0),
                    Object.defineProperty(e.media, "currentTime", {
                      get: () => Number(s.getCurrentTime()),
                      set(t) {
                        e.paused && !e.embed.hasPlayed && e.embed.mute(),
                          (e.media.seeking = !0),
                          pe.call(e, e.media, "seeking"),
                          s.seekTo(t);
                      },
                    }),
                    Object.defineProperty(e.media, "playbackRate", {
                      get: () => s.getPlaybackRate(),
                      set(e) {
                        s.setPlaybackRate(e);
                      },
                    });
                  let { volume: r } = e.config;
                  Object.defineProperty(e.media, "volume", {
                    get: () => r,
                    set(t) {
                      (r = t),
                        s.setVolume(100 * r),
                        pe.call(e, e.media, "volumechange");
                    },
                  });
                  let { muted: a } = e.config;
                  Object.defineProperty(e.media, "muted", {
                    get: () => a,
                    set(t) {
                      const i = M(t) ? t : a;
                      (a = i),
                        s[i ? "mute" : "unMute"](),
                        s.setVolume(100 * r),
                        pe.call(e, e.media, "volumechange");
                    },
                  }),
                    Object.defineProperty(e.media, "currentSrc", {
                      get: () => s.getVideoUrl(),
                    }),
                    Object.defineProperty(e.media, "ended", {
                      get: () => e.currentTime === e.duration,
                    });
                  const o = s.getAvailablePlaybackRates();
                  (e.options.speed = o.filter((t) =>
                    e.config.speed.options.includes(t)
                  )),
                    e.supported.ui &&
                      t.customControls &&
                      e.media.setAttribute("tabindex", -1),
                    pe.call(e, e.media, "timeupdate"),
                    pe.call(e, e.media, "durationchange"),
                    clearInterval(e.timers.buffering),
                    (e.timers.buffering = setInterval(() => {
                      (e.media.buffered = s.getVideoLoadedFraction()),
                        (null === e.media.lastBuffered ||
                          e.media.lastBuffered < e.media.buffered) &&
                          pe.call(e, e.media, "progress"),
                        (e.media.lastBuffered = e.media.buffered),
                        1 === e.media.buffered &&
                          (clearInterval(e.timers.buffering),
                          pe.call(e, e.media, "canplaythrough"));
                    }, 200)),
                    t.customControls && setTimeout(() => Ue.build.call(e), 50);
                },
                onStateChange(i) {
                  const s = i.target;
                  switch (
                    (clearInterval(e.timers.playing),
                    e.media.seeking &&
                      [1, 2].includes(i.data) &&
                      ((e.media.seeking = !1), pe.call(e, e.media, "seeked")),
                    i.data)
                  ) {
                    case -1:
                      pe.call(e, e.media, "timeupdate"),
                        (e.media.buffered = s.getVideoLoadedFraction()),
                        pe.call(e, e.media, "progress");
                      break;
                    case 0:
                      tt.call(e, !1),
                        e.media.loop
                          ? (s.stopVideo(), s.playVideo())
                          : pe.call(e, e.media, "ended");
                      break;
                    case 1:
                      t.customControls &&
                      !e.config.autoplay &&
                      e.media.paused &&
                      !e.embed.hasPlayed
                        ? e.media.pause()
                        : (tt.call(e, !0),
                          pe.call(e, e.media, "playing"),
                          (e.timers.playing = setInterval(() => {
                            pe.call(e, e.media, "timeupdate");
                          }, 50)),
                          e.media.duration !== s.getDuration() &&
                            ((e.media.duration = s.getDuration()),
                            pe.call(e, e.media, "durationchange")));
                      break;
                    case 2:
                      e.muted || e.embed.unMute(), tt.call(e, !1);
                      break;
                    case 3:
                      pe.call(e, e.media, "waiting");
                  }
                  pe.call(e, e.elements.container, "statechange", !1, {
                    code: i.data,
                  });
                },
              },
            });
          },
        },
        nt = {
          setup() {
            this.media
              ? (Z(
                  this.elements.container,
                  this.config.classNames.type.replace("{0}", this.type),
                  !0
                ),
                Z(
                  this.elements.container,
                  this.config.classNames.provider.replace("{0}", this.provider),
                  !0
                ),
                this.isEmbed &&
                  Z(
                    this.elements.container,
                    this.config.classNames.type.replace("{0}", "video"),
                    !0
                  ),
                this.isVideo &&
                  ((this.elements.wrapper = q("div", {
                    class: this.config.classNames.video,
                  })),
                  Y(this.media, this.elements.wrapper),
                  (this.elements.poster = q("div", {
                    class: this.config.classNames.poster,
                  })),
                  this.elements.wrapper.appendChild(this.elements.poster)),
                this.isHTML5
                  ? Ee.setup.call(this)
                  : this.isYouTube
                  ? st.setup.call(this)
                  : this.isVimeo && et.setup.call(this))
              : this.debug.warn("No media element found!");
          },
        };
      class rt {
        constructor(t) {
          e(this, "load", () => {
            this.enabled &&
              (E(window.google) && E(window.google.ima)
                ? this.ready()
                : Je(this.player.config.urls.googleIMA.sdk)
                    .then(() => {
                      this.ready();
                    })
                    .catch(() => {
                      this.trigger(
                        "error",
                        new Error("Google IMA SDK failed to load")
                      );
                    }));
          }),
            e(this, "ready", () => {
              var e;
              this.enabled ||
                ((e = this).manager && e.manager.destroy(),
                e.elements.displayContainer &&
                  e.elements.displayContainer.destroy(),
                e.elements.container.remove()),
                this.startSafetyTimer(12e3, "ready()"),
                this.managerPromise.then(() => {
                  this.clearSafetyTimer("onAdsManagerLoaded()");
                }),
                this.listeners(),
                this.setupIMA();
            }),
            e(this, "setupIMA", () => {
              (this.elements.container = q("div", {
                class: this.player.config.classNames.ads,
              })),
                this.player.elements.container.appendChild(
                  this.elements.container
                ),
                google.ima.settings.setVpaidMode(
                  google.ima.ImaSdkSettings.VpaidMode.ENABLED
                ),
                google.ima.settings.setLocale(this.player.config.ads.language),
                google.ima.settings.setDisableCustomPlaybackForIOS10Plus(
                  this.player.config.playsinline
                ),
                (this.elements.displayContainer =
                  new google.ima.AdDisplayContainer(
                    this.elements.container,
                    this.player.media
                  )),
                (this.loader = new google.ima.AdsLoader(
                  this.elements.displayContainer
                )),
                this.loader.addEventListener(
                  google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED,
                  (e) => this.onAdsManagerLoaded(e),
                  !1
                ),
                this.loader.addEventListener(
                  google.ima.AdErrorEvent.Type.AD_ERROR,
                  (e) => this.onAdError(e),
                  !1
                ),
                this.requestAds();
            }),
            e(this, "requestAds", () => {
              const { container: e } = this.player.elements;
              try {
                const t = new google.ima.AdsRequest();
                (t.adTagUrl = this.tagUrl),
                  (t.linearAdSlotWidth = e.offsetWidth),
                  (t.linearAdSlotHeight = e.offsetHeight),
                  (t.nonLinearAdSlotWidth = e.offsetWidth),
                  (t.nonLinearAdSlotHeight = e.offsetHeight),
                  (t.forceNonLinearFullSlot = !1),
                  t.setAdWillPlayMuted(!this.player.muted),
                  this.loader.requestAds(t);
              } catch (e) {
                this.onAdError(e);
              }
            }),
            e(this, "pollCountdown", (e = !1) => {
              if (!e)
                return (
                  clearInterval(this.countdownTimer),
                  void this.elements.container.removeAttribute(
                    "data-badge-text"
                  )
                );
              this.countdownTimer = setInterval(() => {
                const e = Ie(Math.max(this.manager.getRemainingTime(), 0)),
                  t = `${Pe.get("advertisement", this.player.config)} - ${e}`;
                this.elements.container.setAttribute("data-badge-text", t);
              }, 100);
            }),
            e(this, "onAdsManagerLoaded", (e) => {
              if (!this.enabled) return;
              const t = new google.ima.AdsRenderingSettings();
              (t.restoreCustomPlaybackStateOnAdBreakComplete = !0),
                (t.enablePreloading = !0),
                (this.manager = e.getAdsManager(this.player, t)),
                (this.cuePoints = this.manager.getCuePoints()),
                this.manager.addEventListener(
                  google.ima.AdErrorEvent.Type.AD_ERROR,
                  (e) => this.onAdError(e)
                ),
                Object.keys(google.ima.AdEvent.Type).forEach((e) => {
                  this.manager.addEventListener(
                    google.ima.AdEvent.Type[e],
                    (e) => this.onAdEvent(e)
                  );
                }),
                this.trigger("loaded");
            }),
            e(this, "addCuePoints", () => {
              N(this.cuePoints) ||
                this.cuePoints.forEach((e) => {
                  if (0 !== e && -1 !== e && e < this.player.duration) {
                    const t = this.player.elements.progress;
                    if (F(t)) {
                      const i = (100 / this.player.duration) * e,
                        s = q("span", {
                          class: this.player.config.classNames.cues,
                        });
                      (s.style.left = `${i.toString()}%`), t.appendChild(s);
                    }
                  }
                });
            }),
            e(this, "onAdEvent", (e) => {
              const { container: t } = this.player.elements,
                i = e.getAd(),
                s = e.getAdData();
              switch (
                (((e) => {
                  pe.call(
                    this.player,
                    this.player.media,
                    `ads${e.replace(/_/g, "").toLowerCase()}`
                  );
                })(e.type),
                e.type)
              ) {
                case google.ima.AdEvent.Type.LOADED:
                  this.trigger("loaded"),
                    this.pollCountdown(!0),
                    i.isLinear() ||
                      ((i.width = t.offsetWidth), (i.height = t.offsetHeight));
                  break;
                case google.ima.AdEvent.Type.STARTED:
                  this.manager.setVolume(this.player.volume);
                  break;
                case google.ima.AdEvent.Type.ALL_ADS_COMPLETED:
                  this.player.ended
                    ? this.loadAds()
                    : this.loader.contentComplete();
                  break;
                case google.ima.AdEvent.Type.CONTENT_PAUSE_REQUESTED:
                  this.pauseContent();
                  break;
                case google.ima.AdEvent.Type.CONTENT_RESUME_REQUESTED:
                  this.pollCountdown(), this.resumeContent();
                  break;
                case google.ima.AdEvent.Type.LOG:
                  s.adError &&
                    this.player.debug.warn(
                      `Non-fatal ad error: ${s.adError.getMessage()}`
                    );
              }
            }),
            e(this, "onAdError", (e) => {
              this.cancel(), this.player.debug.warn("Ads error", e);
            }),
            e(this, "listeners", () => {
              const { container: e } = this.player.elements;
              let t;
              this.player.on("canplay", () => {
                this.addCuePoints();
              }),
                this.player.on("ended", () => {
                  this.loader.contentComplete();
                }),
                this.player.on("timeupdate", () => {
                  t = this.player.currentTime;
                }),
                this.player.on("seeked", () => {
                  const e = this.player.currentTime;
                  N(this.cuePoints) ||
                    this.cuePoints.forEach((i, s) => {
                      t < i &&
                        i < e &&
                        (this.manager.discardAdBreak(),
                        this.cuePoints.splice(s, 1));
                    });
                }),
                window.addEventListener("resize", () => {
                  this.manager &&
                    this.manager.resize(
                      e.offsetWidth,
                      e.offsetHeight,
                      google.ima.ViewMode.NORMAL
                    );
                });
            }),
            e(this, "play", () => {
              const { container: e } = this.player.elements;
              this.managerPromise || this.resumeContent(),
                this.managerPromise
                  .then(() => {
                    this.manager.setVolume(this.player.volume),
                      this.elements.displayContainer.initialize();
                    try {
                      this.initialized ||
                        (this.manager.init(
                          e.offsetWidth,
                          e.offsetHeight,
                          google.ima.ViewMode.NORMAL
                        ),
                        this.manager.start()),
                        (this.initialized = !0);
                    } catch (e) {
                      this.onAdError(e);
                    }
                  })
                  .catch(() => {});
            }),
            e(this, "resumeContent", () => {
              (this.elements.container.style.zIndex = ""),
                (this.playing = !1),
                me(this.player.media.play());
            }),
            e(this, "pauseContent", () => {
              (this.elements.container.style.zIndex = 3),
                (this.playing = !0),
                this.player.media.pause();
            }),
            e(this, "cancel", () => {
              this.initialized && this.resumeContent(),
                this.trigger("error"),
                this.loadAds();
            }),
            e(this, "loadAds", () => {
              this.managerPromise
                .then(() => {
                  this.manager && this.manager.destroy(),
                    (this.managerPromise = new Promise((e) => {
                      this.on("loaded", e), this.player.debug.log(this.manager);
                    })),
                    (this.initialized = !1),
                    this.requestAds();
                })
                .catch(() => {});
            }),
            e(this, "trigger", (e, ...t) => {
              const i = this.events[e];
              A(i) &&
                i.forEach((e) => {
                  k(e) && e.apply(this, t);
                });
            }),
            e(
              this,
              "on",
              (e, t) => (
                A(this.events[e]) || (this.events[e] = []),
                this.events[e].push(t),
                this
              )
            ),
            e(this, "startSafetyTimer", (e, t) => {
              this.player.debug.log(`Safety timer invoked from: ${t}`),
                (this.safetyTimer = setTimeout(() => {
                  this.cancel(), this.clearSafetyTimer("startSafetyTimer()");
                }, e));
            }),
            e(this, "clearSafetyTimer", (e) => {
              T(this.safetyTimer) ||
                (this.player.debug.log(`Safety timer cleared from: ${e}`),
                clearTimeout(this.safetyTimer),
                (this.safetyTimer = null));
            }),
            (this.player = t),
            (this.config = t.config.ads),
            (this.playing = !1),
            (this.initialized = !1),
            (this.elements = { container: null, displayContainer: null }),
            (this.manager = null),
            (this.loader = null),
            (this.cuePoints = null),
            (this.events = {}),
            (this.safetyTimer = null),
            (this.countdownTimer = null),
            (this.managerPromise = new Promise((e, t) => {
              this.on("loaded", e), this.on("error", t);
            })),
            this.load();
        }
        get enabled() {
          const { config: e } = this;
          return (
            this.player.isHTML5 &&
            this.player.isVideo &&
            e.enabled &&
            (!N(e.publisherId) || z(e.tagUrl))
          );
        }
        get tagUrl() {
          const { config: e } = this;
          return z(e.tagUrl)
            ? e.tagUrl
            : `https://go.aniview.com/api/adserver6/vast/?${Be({
                AV_PUBLISHERID: "58c25bb0073ef448b1087ad6",
                AV_CHANNELID: "5a0458dc28a06145e4519d21",
                AV_URL: window.location.hostname,
                cb: Date.now(),
                AV_WIDTH: 640,
                AV_HEIGHT: 480,
                AV_CDIM2: e.publisherId,
              })}`;
        }
      }
      function at(e = 0, t = 0, i = 255) {
        return Math.min(Math.max(e, t), i);
      }
      const ot = (e) => {
          const t = [];
          return (
            e.split(/\r\n\r\n|\n\n|\r\r/).forEach((e) => {
              const i = {};
              e.split(/\r\n|\n|\r/).forEach((e) => {
                if (_(i.startTime)) {
                  if (!N(e.trim()) && N(i.text)) {
                    const t = e.trim().split("#xywh=");
                    ([i.text] = t),
                      t[1] && ([i.x, i.y, i.w, i.h] = t[1].split(","));
                  }
                } else {
                  const t = e.match(
                    /([0-9]{2})?:?([0-9]{2}):([0-9]{2}).([0-9]{2,3})( ?--> ?)([0-9]{2})?:?([0-9]{2}):([0-9]{2}).([0-9]{2,3})/
                  );
                  t &&
                    ((i.startTime =
                      60 * Number(t[1] || 0) * 60 +
                      60 * Number(t[2]) +
                      Number(t[3]) +
                      Number(`0.${t[4]}`)),
                    (i.endTime =
                      60 * Number(t[6] || 0) * 60 +
                      60 * Number(t[7]) +
                      Number(t[8]) +
                      Number(`0.${t[9]}`)));
                }
              }),
                i.text && t.push(i);
            }),
            t
          );
        },
        lt = (e, t) => {
          const i = {};
          return (
            e > t.width / t.height
              ? ((i.width = t.width), (i.height = (1 / e) * t.width))
              : ((i.height = t.height), (i.width = e * t.height)),
            i
          );
        };
      class ut {
        constructor(t) {
          e(this, "load", () => {
            this.player.elements.display.seekTooltip &&
              (this.player.elements.display.seekTooltip.hidden = this.enabled),
              this.enabled &&
                this.getThumbnails().then(() => {
                  this.enabled &&
                    (this.render(),
                    this.determineContainerAutoSizing(),
                    this.listeners(),
                    (this.loaded = !0));
                });
          }),
            e(
              this,
              "getThumbnails",
              () =>
                new Promise((e) => {
                  const { src: t } = this.player.config.previewThumbnails;
                  if (N(t))
                    throw new Error(
                      "Missing previewThumbnails.src config attribute"
                    );
                  const i = () => {
                    this.thumbnails.sort((e, t) => e.height - t.height),
                      this.player.debug.log(
                        "Preview thumbnails",
                        this.thumbnails
                      ),
                      e();
                  };
                  if (k(t))
                    t((e) => {
                      (this.thumbnails = e), i();
                    });
                  else {
                    const e = (S(t) ? [t] : t).map((e) => this.getThumbnail(e));
                    Promise.all(e).then(i);
                  }
                })
            ),
            e(
              this,
              "getThumbnail",
              (e) =>
                new Promise((t) => {
                  $e(e).then((i) => {
                    const s = { frames: ot(i), height: null, urlPrefix: "" };
                    s.frames[0].text.startsWith("/") ||
                      s.frames[0].text.startsWith("http://") ||
                      s.frames[0].text.startsWith("https://") ||
                      (s.urlPrefix = e.substring(0, e.lastIndexOf("/") + 1));
                    const n = new Image();
                    (n.onload = () => {
                      (s.height = n.naturalHeight),
                        (s.width = n.naturalWidth),
                        this.thumbnails.push(s),
                        t();
                    }),
                      (n.src = s.urlPrefix + s.frames[0].text);
                  });
                })
            ),
            e(this, "startMove", (e) => {
              if (
                this.loaded &&
                $(e) &&
                ["touchmove", "mousemove"].includes(e.type) &&
                this.player.media.duration
              ) {
                if ("touchmove" === e.type)
                  this.seekTime =
                    this.player.media.duration *
                    (this.player.elements.inputs.seek.value / 100);
                else {
                  var t, i;
                  const s =
                      this.player.elements.progress.getBoundingClientRect(),
                    n = (100 / s.width) * (e.pageX - s.left);
                  (this.seekTime = this.player.media.duration * (n / 100)),
                    this.seekTime < 0 && (this.seekTime = 0),
                    this.seekTime > this.player.media.duration - 1 &&
                      (this.seekTime = this.player.media.duration - 1),
                    (this.mousePosX = e.pageX),
                    (this.elements.thumb.time.innerText = Ie(this.seekTime));
                  const r =
                    null === (t = this.player.config.markers) ||
                    void 0 === t ||
                    null === (i = t.points) ||
                    void 0 === i
                      ? void 0
                      : i.find(
                          ({ time: e }) => e === Math.round(this.seekTime)
                        );
                  r &&
                    this.elements.thumb.time.insertAdjacentHTML(
                      "afterbegin",
                      `${r.label}<br>`
                    );
                }
                this.showImageAtCurrentTime();
              }
            }),
            e(this, "endMove", () => {
              this.toggleThumbContainer(!1, !0);
            }),
            e(this, "startScrubbing", (e) => {
              (T(e.button) || !1 === e.button || 0 === e.button) &&
                ((this.mouseDown = !0),
                this.player.media.duration &&
                  (this.toggleScrubbingContainer(!0),
                  this.toggleThumbContainer(!1, !0),
                  this.showImageAtCurrentTime()));
            }),
            e(this, "endScrubbing", () => {
              (this.mouseDown = !1),
                Math.ceil(this.lastTime) ===
                Math.ceil(this.player.media.currentTime)
                  ? this.toggleScrubbingContainer(!1)
                  : de.call(
                      this.player,
                      this.player.media,
                      "timeupdate",
                      () => {
                        this.mouseDown || this.toggleScrubbingContainer(!1);
                      }
                    );
            }),
            e(this, "listeners", () => {
              this.player.on("play", () => {
                this.toggleThumbContainer(!1, !0);
              }),
                this.player.on("seeked", () => {
                  this.toggleThumbContainer(!1);
                }),
                this.player.on("timeupdate", () => {
                  this.lastTime = this.player.media.currentTime;
                });
            }),
            e(this, "render", () => {
              (this.elements.thumb.container = q("div", {
                class:
                  this.player.config.classNames.previewThumbnails
                    .thumbContainer,
              })),
                (this.elements.thumb.imageContainer = q("div", {
                  class:
                    this.player.config.classNames.previewThumbnails
                      .imageContainer,
                })),
                this.elements.thumb.container.appendChild(
                  this.elements.thumb.imageContainer
                );
              const e = q("div", {
                class:
                  this.player.config.classNames.previewThumbnails.timeContainer,
              });
              (this.elements.thumb.time = q("span", {}, "00:00")),
                e.appendChild(this.elements.thumb.time),
                this.elements.thumb.imageContainer.appendChild(e),
                F(this.player.elements.progress) &&
                  this.player.elements.progress.appendChild(
                    this.elements.thumb.container
                  ),
                (this.elements.scrubbing.container = q("div", {
                  class:
                    this.player.config.classNames.previewThumbnails
                      .scrubbingContainer,
                })),
                this.player.elements.wrapper.appendChild(
                  this.elements.scrubbing.container
                );
            }),
            e(this, "destroy", () => {
              this.elements.thumb.container &&
                this.elements.thumb.container.remove(),
                this.elements.scrubbing.container &&
                  this.elements.scrubbing.container.remove();
            }),
            e(this, "showImageAtCurrentTime", () => {
              this.mouseDown
                ? this.setScrubbingContainerSize()
                : this.setThumbContainerSizeAndPos();
              const e = this.thumbnails[0].frames.findIndex(
                  (e) =>
                    this.seekTime >= e.startTime && this.seekTime <= e.endTime
                ),
                t = e >= 0;
              let i = 0;
              this.mouseDown || this.toggleThumbContainer(t),
                t &&
                  (this.thumbnails.forEach((t, s) => {
                    this.loadedImages.includes(t.frames[e].text) && (i = s);
                  }),
                  e !== this.showingThumb &&
                    ((this.showingThumb = e), this.loadImage(i)));
            }),
            e(this, "loadImage", (e = 0) => {
              const t = this.showingThumb,
                i = this.thumbnails[e],
                { urlPrefix: s } = i,
                n = i.frames[t],
                r = i.frames[t].text,
                a = s + r;
              if (
                this.currentImageElement &&
                this.currentImageElement.dataset.filename === r
              )
                this.showImage(this.currentImageElement, n, e, t, r, !1),
                  (this.currentImageElement.dataset.index = t),
                  this.removeOldImages(this.currentImageElement);
              else {
                this.loadingImage &&
                  this.usingSprites &&
                  (this.loadingImage.onload = null);
                const i = new Image();
                (i.src = a),
                  (i.dataset.index = t),
                  (i.dataset.filename = r),
                  (this.showingThumbFilename = r),
                  this.player.debug.log(`Loading image: ${a}`),
                  (i.onload = () => this.showImage(i, n, e, t, r, !0)),
                  (this.loadingImage = i),
                  this.removeOldImages(i);
              }
            }),
            e(this, "showImage", (e, t, i, s, n, r = !0) => {
              this.player.debug.log(
                `Showing thumb: ${n}. num: ${s}. qual: ${i}. newimg: ${r}`
              ),
                this.setImageSizeAndOffset(e, t),
                r &&
                  (this.currentImageContainer.appendChild(e),
                  (this.currentImageElement = e),
                  this.loadedImages.includes(n) || this.loadedImages.push(n)),
                this.preloadNearby(s, !0)
                  .then(this.preloadNearby(s, !1))
                  .then(this.getHigherQuality(i, e, t, n));
            }),
            e(this, "removeOldImages", (e) => {
              Array.from(this.currentImageContainer.children).forEach((t) => {
                if ("img" !== t.tagName.toLowerCase()) return;
                const i = this.usingSprites ? 500 : 1e3;
                if (
                  t.dataset.index !== e.dataset.index &&
                  !t.dataset.deleting
                ) {
                  t.dataset.deleting = !0;
                  const { currentImageContainer: e } = this;
                  setTimeout(() => {
                    e.removeChild(t),
                      this.player.debug.log(
                        `Removing thumb: ${t.dataset.filename}`
                      );
                  }, i);
                }
              });
            }),
            e(
              this,
              "preloadNearby",
              (e, t = !0) =>
                new Promise((i) => {
                  setTimeout(() => {
                    const s = this.thumbnails[0].frames[e].text;
                    if (this.showingThumbFilename === s) {
                      let n;
                      n = t
                        ? this.thumbnails[0].frames.slice(e)
                        : this.thumbnails[0].frames.slice(0, e).reverse();
                      let r = !1;
                      n.forEach((e) => {
                        const t = e.text;
                        if (t !== s && !this.loadedImages.includes(t)) {
                          (r = !0),
                            this.player.debug.log(
                              `Preloading thumb filename: ${t}`
                            );
                          const { urlPrefix: e } = this.thumbnails[0],
                            s = e + t,
                            n = new Image();
                          (n.src = s),
                            (n.onload = () => {
                              this.player.debug.log(
                                `Preloaded thumb filename: ${t}`
                              ),
                                this.loadedImages.includes(t) ||
                                  this.loadedImages.push(t),
                                i();
                            });
                        }
                      }),
                        r || i();
                    }
                  }, 300);
                })
            ),
            e(this, "getHigherQuality", (e, t, i, s) => {
              if (e < this.thumbnails.length - 1) {
                let n = t.naturalHeight;
                this.usingSprites && (n = i.h),
                  n < this.thumbContainerHeight &&
                    setTimeout(() => {
                      this.showingThumbFilename === s &&
                        (this.player.debug.log(
                          `Showing higher quality thumb for: ${s}`
                        ),
                        this.loadImage(e + 1));
                    }, 300);
              }
            }),
            e(this, "toggleThumbContainer", (e = !1, t = !1) => {
              const i =
                this.player.config.classNames.previewThumbnails
                  .thumbContainerShown;
              this.elements.thumb.container.classList.toggle(i, e),
                !e &&
                  t &&
                  ((this.showingThumb = null),
                  (this.showingThumbFilename = null));
            }),
            e(this, "toggleScrubbingContainer", (e = !1) => {
              const t =
                this.player.config.classNames.previewThumbnails
                  .scrubbingContainerShown;
              this.elements.scrubbing.container.classList.toggle(t, e),
                e ||
                  ((this.showingThumb = null),
                  (this.showingThumbFilename = null));
            }),
            e(this, "determineContainerAutoSizing", () => {
              (this.elements.thumb.imageContainer.clientHeight > 20 ||
                this.elements.thumb.imageContainer.clientWidth > 20) &&
                (this.sizeSpecifiedInCSS = !0);
            }),
            e(this, "setThumbContainerSizeAndPos", () => {
              const { imageContainer: e } = this.elements.thumb;
              if (this.sizeSpecifiedInCSS) {
                if (e.clientHeight > 20 && e.clientWidth < 20) {
                  const t = Math.floor(e.clientHeight * this.thumbAspectRatio);
                  e.style.width = `${t}px`;
                } else if (e.clientHeight < 20 && e.clientWidth > 20) {
                  const t = Math.floor(e.clientWidth / this.thumbAspectRatio);
                  e.style.height = `${t}px`;
                }
              } else {
                const t = Math.floor(
                  this.thumbContainerHeight * this.thumbAspectRatio
                );
                (e.style.height = `${this.thumbContainerHeight}px`),
                  (e.style.width = `${t}px`);
              }
              this.setThumbContainerPos();
            }),
            e(this, "setThumbContainerPos", () => {
              const e = this.player.elements.progress.getBoundingClientRect(),
                t = this.player.elements.container.getBoundingClientRect(),
                { container: i } = this.elements.thumb,
                s = t.left - e.left + 10,
                n = t.right - e.left - i.clientWidth - 10,
                r = this.mousePosX - e.left - i.clientWidth / 2,
                a = at(r, s, n);
              (i.style.left = `${a}px`),
                i.style.setProperty("--preview-arrow-offset", r - a + "px");
            }),
            e(this, "setScrubbingContainerSize", () => {
              const { width: e, height: t } = lt(this.thumbAspectRatio, {
                width: this.player.media.clientWidth,
                height: this.player.media.clientHeight,
              });
              (this.elements.scrubbing.container.style.width = `${e}px`),
                (this.elements.scrubbing.container.style.height = `${t}px`);
            }),
            e(this, "setImageSizeAndOffset", (e, t) => {
              if (!this.usingSprites) return;
              const i = this.thumbContainerHeight / t.h;
              (e.style.height = e.naturalHeight * i + "px"),
                (e.style.width = e.naturalWidth * i + "px"),
                (e.style.left = `-${t.x * i}px`),
                (e.style.top = `-${t.y * i}px`);
            }),
            (this.player = t),
            (this.thumbnails = []),
            (this.loaded = !1),
            (this.lastMouseMoveTime = Date.now()),
            (this.mouseDown = !1),
            (this.loadedImages = []),
            (this.elements = { thumb: {}, scrubbing: {} }),
            this.load();
        }
        get enabled() {
          return (
            this.player.isHTML5 &&
            this.player.isVideo &&
            this.player.config.previewThumbnails.enabled
          );
        }
        get currentImageContainer() {
          return this.mouseDown
            ? this.elements.scrubbing.container
            : this.elements.thumb.imageContainer;
        }
        get usingSprites() {
          return Object.keys(this.thumbnails[0].frames[0]).includes("w");
        }
        get thumbAspectRatio() {
          return this.usingSprites
            ? this.thumbnails[0].frames[0].w / this.thumbnails[0].frames[0].h
            : this.thumbnails[0].width / this.thumbnails[0].height;
        }
        get thumbContainerHeight() {
          if (this.mouseDown) {
            const { height: e } = lt(this.thumbAspectRatio, {
              width: this.player.media.clientWidth,
              height: this.player.media.clientHeight,
            });
            return e;
          }
          return this.sizeSpecifiedInCSS
            ? this.elements.thumb.imageContainer.clientHeight
            : Math.floor(
                this.player.media.clientWidth / this.thumbAspectRatio / 4
              );
        }
        get currentImageElement() {
          return this.mouseDown
            ? this.currentScrubbingImageElement
            : this.currentThumbnailImageElement;
        }
        set currentImageElement(e) {
          this.mouseDown
            ? (this.currentScrubbingImageElement = e)
            : (this.currentThumbnailImageElement = e);
        }
      }
      const ct = {
        insertElements(e, t) {
          S(t)
            ? V(e, this.media, { src: t })
            : A(t) &&
              t.forEach((t) => {
                V(e, this.media, t);
              });
        },
        change(e) {
          W(e, "sources.length")
            ? (Ee.cancelRequests.call(this),
              this.destroy.call(
                this,
                () => {
                  (this.options.quality = []),
                    G(this.media),
                    (this.media = null),
                    F(this.elements.container) &&
                      this.elements.container.removeAttribute("class");
                  const { sources: t, type: i } = e,
                    [{ provider: s = je.html5, src: n }] = t,
                    r = "html5" === s ? i : "div",
                    a = "html5" === s ? {} : { src: n };
                  Object.assign(this, {
                    provider: s,
                    type: i,
                    supported: ae.check(i, s, this.config.playsinline),
                    media: q(r, a),
                  }),
                    this.elements.container.appendChild(this.media),
                    M(e.autoplay) && (this.config.autoplay = e.autoplay),
                    this.isHTML5 &&
                      (this.config.crossorigin &&
                        this.media.setAttribute("crossorigin", ""),
                      this.config.autoplay &&
                        this.media.setAttribute("autoplay", ""),
                      N(e.poster) || (this.poster = e.poster),
                      this.config.loop.active &&
                        this.media.setAttribute("loop", ""),
                      this.config.muted && this.media.setAttribute("muted", ""),
                      this.config.playsinline &&
                        this.media.setAttribute("playsinline", "")),
                    Ue.addStyleHook.call(this),
                    this.isHTML5 && ct.insertElements.call(this, "source", t),
                    (this.config.title = e.title),
                    nt.setup.call(this),
                    this.isHTML5 &&
                      Object.keys(e).includes("tracks") &&
                      ct.insertElements.call(this, "track", e.tracks),
                    (this.isHTML5 || (this.isEmbed && !this.supported.ui)) &&
                      Ue.build.call(this),
                    this.isHTML5 && this.media.load(),
                    N(e.previewThumbnails) ||
                      (Object.assign(
                        this.config.previewThumbnails,
                        e.previewThumbnails
                      ),
                      this.previewThumbnails &&
                        this.previewThumbnails.loaded &&
                        (this.previewThumbnails.destroy(),
                        (this.previewThumbnails = null)),
                      this.config.previewThumbnails.enabled &&
                        (this.previewThumbnails = new ut(this))),
                    this.fullscreen.update();
                },
                !0
              ))
            : this.debug.warn("Invalid source format");
        },
      };
      class dt {
        constructor(t, i) {
          if (
            (e(this, "play", () =>
              k(this.media.play)
                ? (this.ads &&
                    this.ads.enabled &&
                    this.ads.managerPromise
                      .then(() => this.ads.play())
                      .catch(() => me(this.media.play())),
                  this.media.play())
                : null
            ),
            e(this, "pause", () =>
              this.playing && k(this.media.pause) ? this.media.pause() : null
            ),
            e(this, "togglePlay", (e) =>
              (M(e) ? e : !this.playing) ? this.play() : this.pause()
            ),
            e(this, "stop", () => {
              this.isHTML5
                ? (this.pause(), this.restart())
                : k(this.media.stop) && this.media.stop();
            }),
            e(this, "restart", () => {
              this.currentTime = 0;
            }),
            e(this, "rewind", (e) => {
              this.currentTime -= _(e) ? e : this.config.seekTime;
            }),
            e(this, "forward", (e) => {
              this.currentTime += _(e) ? e : this.config.seekTime;
            }),
            e(this, "increaseVolume", (e) => {
              const t = this.media.muted ? 0 : this.volume;
              this.volume = t + (_(e) ? e : 0);
            }),
            e(this, "decreaseVolume", (e) => {
              this.increaseVolume(-e);
            }),
            e(this, "airplay", () => {
              ae.airplay && this.media.webkitShowPlaybackTargetPicker();
            }),
            e(this, "toggleControls", (e) => {
              if (this.supported.ui && !this.isAudio) {
                const t = ee(
                    this.elements.container,
                    this.config.classNames.hideControls
                  ),
                  i = void 0 === e ? void 0 : !e,
                  s = Z(
                    this.elements.container,
                    this.config.classNames.hideControls,
                    i
                  );
                if (
                  (s &&
                    A(this.config.controls) &&
                    this.config.controls.includes("settings") &&
                    !N(this.config.settings) &&
                    ze.toggleMenu.call(this, !1),
                  s !== t)
                ) {
                  const e = s ? "controlshidden" : "controlsshown";
                  pe.call(this, this.media, e);
                }
                return !s;
              }
              return !1;
            }),
            e(this, "on", (e, t) => {
              ue.call(this, this.elements.container, e, t);
            }),
            e(this, "once", (e, t) => {
              de.call(this, this.elements.container, e, t);
            }),
            e(this, "off", (e, t) => {
              ce(this.elements.container, e, t);
            }),
            e(this, "destroy", (e, t = !1) => {
              if (!this.ready) return;
              const i = () => {
                (document.body.style.overflow = ""),
                  (this.embed = null),
                  t
                    ? (Object.keys(this.elements).length &&
                        (G(this.elements.buttons.play),
                        G(this.elements.captions),
                        G(this.elements.controls),
                        G(this.elements.wrapper),
                        (this.elements.buttons.play = null),
                        (this.elements.captions = null),
                        (this.elements.controls = null),
                        (this.elements.wrapper = null)),
                      k(e) && e())
                    : (he.call(this),
                      Ee.cancelRequests.call(this),
                      K(this.elements.original, this.elements.container),
                      pe.call(this, this.elements.original, "destroyed", !0),
                      k(e) && e.call(this.elements.original),
                      (this.ready = !1),
                      setTimeout(() => {
                        (this.elements = null), (this.media = null);
                      }, 200));
              };
              this.stop(),
                clearTimeout(this.timers.loading),
                clearTimeout(this.timers.controls),
                clearTimeout(this.timers.resized),
                this.isHTML5
                  ? (Ue.toggleNativeControls.call(this, !0), i())
                  : this.isYouTube
                  ? (clearInterval(this.timers.buffering),
                    clearInterval(this.timers.playing),
                    null !== this.embed &&
                      k(this.embed.destroy) &&
                      this.embed.destroy(),
                    i())
                  : this.isVimeo &&
                    (null !== this.embed && this.embed.unload().then(i),
                    setTimeout(i, 200));
            }),
            e(this, "supports", (e) => ae.mime.call(this, e)),
            (this.timers = {}),
            (this.ready = !1),
            (this.loading = !1),
            (this.failed = !1),
            (this.touch = ae.touch),
            (this.media = t),
            S(this.media) &&
              (this.media = document.querySelectorAll(this.media)),
            ((window.jQuery && this.media instanceof jQuery) ||
              P(this.media) ||
              A(this.media)) &&
              (this.media = this.media[0]),
            (this.config = j(
              {},
              He,
              dt.defaults,
              i || {},
              (() => {
                try {
                  return JSON.parse(
                    this.media.getAttribute("data-plyr-config")
                  );
                } catch (e) {
                  return {};
                }
              })()
            )),
            (this.elements = {
              container: null,
              fullscreen: null,
              captions: null,
              buttons: {},
              display: {},
              progress: {},
              inputs: {},
              settings: { popup: null, menu: null, panels: {}, buttons: {} },
            }),
            (this.captions = {
              active: null,
              currentTrack: -1,
              meta: new WeakMap(),
            }),
            (this.fullscreen = { active: !1 }),
            (this.options = { speed: [], quality: [] }),
            (this.debug = new qe(this.config.debug)),
            this.debug.log("Config", this.config),
            this.debug.log("Support", ae),
            T(this.media) || !F(this.media))
          )
            return void this.debug.error(
              "Setup failed: no suitable element passed"
            );
          if (this.media.plyr)
            return void this.debug.warn("Target already setup");
          if (!this.config.enabled)
            return void this.debug.error("Setup failed: disabled by config");
          if (!ae.check().api)
            return void this.debug.error("Setup failed: no support");
          const s = this.media.cloneNode(!0);
          (s.autoplay = !1), (this.elements.original = s);
          const n = this.media.tagName.toLowerCase();
          let r = null,
            a = null;
          switch (n) {
            case "div":
              if (((r = this.media.querySelector("iframe")), F(r))) {
                if (
                  ((a = Ne(r.getAttribute("src"))),
                  (this.provider = (function (e) {
                    return /^(https?:\/\/)?(www\.)?(youtube\.com|youtube-nocookie\.com|youtu\.?be)\/.+$/.test(
                      e
                    )
                      ? je.youtube
                      : /^https?:\/\/player.vimeo.com\/video\/\d{0,9}(?=\b|\/)/.test(
                          e
                        )
                      ? je.vimeo
                      : null;
                  })(a.toString())),
                  (this.elements.container = this.media),
                  (this.media = r),
                  (this.elements.container.className = ""),
                  a.search.length)
                ) {
                  const e = ["1", "true"];
                  e.includes(a.searchParams.get("autoplay")) &&
                    (this.config.autoplay = !0),
                    e.includes(a.searchParams.get("loop")) &&
                      (this.config.loop.active = !0),
                    this.isYouTube
                      ? ((this.config.playsinline = e.includes(
                          a.searchParams.get("playsinline")
                        )),
                        (this.config.youtube.hl = a.searchParams.get("hl")))
                      : (this.config.playsinline = !0);
                }
              } else (this.provider = this.media.getAttribute(this.config.attributes.embed.provider)), this.media.removeAttribute(this.config.attributes.embed.provider);
              if (
                N(this.provider) ||
                !Object.values(je).includes(this.provider)
              )
                return void this.debug.error("Setup failed: Invalid provider");
              this.type = Ye;
              break;
            case "video":
            case "audio":
              (this.type = n),
                (this.provider = je.html5),
                this.media.hasAttribute("crossorigin") &&
                  (this.config.crossorigin = !0),
                this.media.hasAttribute("autoplay") &&
                  (this.config.autoplay = !0),
                (this.media.hasAttribute("playsinline") ||
                  this.media.hasAttribute("webkit-playsinline")) &&
                  (this.config.playsinline = !0),
                this.media.hasAttribute("muted") && (this.config.muted = !0),
                this.media.hasAttribute("loop") &&
                  (this.config.loop.active = !0);
              break;
            default:
              return void this.debug.error("Setup failed: unsupported type");
          }
          (this.supported = ae.check(this.type, this.provider)),
            this.supported.api
              ? ((this.eventListeners = []),
                (this.listeners = new Ke(this)),
                (this.storage = new Fe(this)),
                (this.media.plyr = this),
                F(this.elements.container) ||
                  ((this.elements.container = q("div")),
                  Y(this.media, this.elements.container)),
                Ue.migrateStyles.call(this),
                Ue.addStyleHook.call(this),
                nt.setup.call(this),
                this.config.debug &&
                  ue.call(
                    this,
                    this.elements.container,
                    this.config.events.join(" "),
                    (e) => {
                      this.debug.log(`event: ${e.type}`);
                    }
                  ),
                (this.fullscreen = new Ve(this)),
                (this.isHTML5 || (this.isEmbed && !this.supported.ui)) &&
                  Ue.build.call(this),
                this.listeners.container(),
                this.listeners.global(),
                this.config.ads.enabled && (this.ads = new rt(this)),
                this.isHTML5 &&
                  this.config.autoplay &&
                  this.once("canplay", () => me(this.play())),
                (this.lastSeekTime = 0),
                this.config.previewThumbnails.enabled &&
                  (this.previewThumbnails = new ut(this)))
              : this.debug.error("Setup failed: no support");
        }
        get isHTML5() {
          return this.provider === je.html5;
        }
        get isEmbed() {
          return this.isYouTube || this.isVimeo;
        }
        get isYouTube() {
          return this.provider === je.youtube;
        }
        get isVimeo() {
          return this.provider === je.vimeo;
        }
        get isVideo() {
          return this.type === Ye;
        }
        get isAudio() {
          return "audio" === this.type;
        }
        get playing() {
          return Boolean(this.ready && !this.paused && !this.ended);
        }
        get paused() {
          return Boolean(this.media.paused);
        }
        get stopped() {
          return Boolean(this.paused && 0 === this.currentTime);
        }
        get ended() {
          return Boolean(this.media.ended);
        }
        set currentTime(e) {
          if (!this.duration) return;
          const t = _(e) && e > 0;
          (this.media.currentTime = t ? Math.min(e, this.duration) : 0),
            this.debug.log(`Seeking to ${this.currentTime} seconds`);
        }
        get currentTime() {
          return Number(this.media.currentTime);
        }
        get buffered() {
          const { buffered: e } = this.media;
          return _(e)
            ? e
            : e && e.length && this.duration > 0
            ? e.end(0) / this.duration
            : 0;
        }
        get seeking() {
          return Boolean(this.media.seeking);
        }
        get duration() {
          const e = parseFloat(this.config.duration),
            t = (this.media || {}).duration,
            i = _(t) && t !== 1 / 0 ? t : 0;
          return e || i;
        }
        set volume(e) {
          let t = e;
          S(t) && (t = Number(t)),
            _(t) || (t = this.storage.get("volume")),
            _(t) || ({ volume: t } = this.config),
            t > 1 && (t = 1),
            t < 0 && (t = 0),
            (this.config.volume = t),
            (this.media.volume = t),
            !N(e) && this.muted && t > 0 && (this.muted = !1);
        }
        get volume() {
          return Number(this.media.volume);
        }
        set muted(e) {
          let t = e;
          M(t) || (t = this.storage.get("muted")),
            M(t) || (t = this.config.muted),
            (this.config.muted = t),
            (this.media.muted = t);
        }
        get muted() {
          return Boolean(this.media.muted);
        }
        get hasAudio() {
          return (
            !this.isHTML5 ||
            !!this.isAudio ||
            Boolean(this.media.mozHasAudio) ||
            Boolean(this.media.webkitAudioDecodedByteCount) ||
            Boolean(this.media.audioTracks && this.media.audioTracks.length)
          );
        }
        set speed(e) {
          let t = null;
          _(e) && (t = e),
            _(t) || (t = this.storage.get("speed")),
            _(t) || (t = this.config.speed.selected);
          const { minimumSpeed: i, maximumSpeed: s } = this;
          (t = at(t, i, s)),
            (this.config.speed.selected = t),
            setTimeout(() => {
              this.media && (this.media.playbackRate = t);
            }, 0);
        }
        get speed() {
          return Number(this.media.playbackRate);
        }
        get minimumSpeed() {
          return this.isYouTube
            ? Math.min(...this.options.speed)
            : this.isVimeo
            ? 0.5
            : 0.0625;
        }
        get maximumSpeed() {
          return this.isYouTube
            ? Math.max(...this.options.speed)
            : this.isVimeo
            ? 2
            : 16;
        }
        set quality(e) {
          const t = this.config.quality,
            i = this.options.quality;
          if (!i.length) return;
          let s = [
              !N(e) && Number(e),
              this.storage.get("quality"),
              t.selected,
              t.default,
            ].find(_),
            n = !0;
          if (!i.includes(s)) {
            const e = ve(i, s);
            this.debug.warn(
              `Unsupported quality option: ${s}, using ${e} instead`
            ),
              (s = e),
              (n = !1);
          }
          (t.selected = s),
            (this.media.quality = s),
            n && this.storage.set({ quality: s });
        }
        get quality() {
          return this.media.quality;
        }
        set loop(e) {
          const t = M(e) ? e : this.config.loop.active;
          (this.config.loop.active = t), (this.media.loop = t);
        }
        get loop() {
          return Boolean(this.media.loop);
        }
        set source(e) {
          ct.change.call(this, e);
        }
        get source() {
          return this.media.currentSrc;
        }
        get download() {
          const { download: e } = this.config.urls;
          return z(e) ? e : this.source;
        }
        set download(e) {
          z(e) &&
            ((this.config.urls.download = e), ze.setDownloadUrl.call(this));
        }
        set poster(e) {
          this.isVideo
            ? Ue.setPoster.call(this, e, !1).catch(() => {})
            : this.debug.warn("Poster can only be set for video");
        }
        get poster() {
          return this.isVideo
            ? this.media.getAttribute("poster") ||
                this.media.getAttribute("data-poster")
            : null;
        }
        get ratio() {
          if (!this.isVideo) return null;
          const e = De(xe.call(this));
          return A(e) ? e.join(":") : e;
        }
        set ratio(e) {
          this.isVideo
            ? S(e) && we(e)
              ? ((this.config.ratio = De(e)), Ce.call(this))
              : this.debug.error(`Invalid aspect ratio specified (${e})`)
            : this.debug.warn("Aspect ratio can only be set for video");
        }
        set autoplay(e) {
          this.config.autoplay = M(e) ? e : this.config.autoplay;
        }
        get autoplay() {
          return Boolean(this.config.autoplay);
        }
        toggleCaptions(e) {
          Re.toggle.call(this, e, !1);
        }
        set currentTrack(e) {
          Re.set.call(this, e, !1), Re.setup.call(this);
        }
        get currentTrack() {
          const { toggled: e, currentTrack: t } = this.captions;
          return e ? t : -1;
        }
        set language(e) {
          Re.setLanguage.call(this, e, !1);
        }
        get language() {
          return (Re.getCurrentTrack.call(this) || {}).language;
        }
        set pip(e) {
          if (!ae.pip) return;
          const t = M(e) ? e : !this.pip;
          k(this.media.webkitSetPresentationMode) &&
            this.media.webkitSetPresentationMode(t ? We : "inline"),
            k(this.media.requestPictureInPicture) &&
              (!this.pip && t
                ? this.media.requestPictureInPicture()
                : this.pip && !t && document.exitPictureInPicture());
        }
        get pip() {
          return ae.pip
            ? N(this.media.webkitPresentationMode)
              ? this.media === document.pictureInPictureElement
              : this.media.webkitPresentationMode === We
            : null;
        }
        setPreviewThumbnails(e) {
          this.previewThumbnails &&
            this.previewThumbnails.loaded &&
            (this.previewThumbnails.destroy(), (this.previewThumbnails = null)),
            Object.assign(this.config.previewThumbnails, e),
            this.config.previewThumbnails.enabled &&
              (this.previewThumbnails = new ut(this));
        }
        static supported(e, t) {
          return ae.check(e, t);
        }
        static loadSprite(e, t) {
          return Oe(e, t);
        }
        static setup(e, t = {}) {
          let i = null;
          return (
            S(e)
              ? (i = Array.from(document.querySelectorAll(e)))
              : P(e)
              ? (i = Array.from(e))
              : A(e) && (i = e.filter(F)),
            N(i) ? null : i.map((e) => new dt(e, t))
          );
        }
      }
      var pt;
      return (dt.defaults = ((pt = He), JSON.parse(JSON.stringify(pt)))), dt;
    }),
  (function (e, t) {
    "object" == typeof exports && "undefined" != typeof module
      ? (module.exports = t())
      : "function" == typeof define && define.amd
      ? define(t)
      : ((e =
          "undefined" != typeof globalThis ? globalThis : e || self).Swiper =
          t());
  })(this, function () {
    "use strict";
    function e(e) {
      return (
        null !== e &&
        "object" == typeof e &&
        "constructor" in e &&
        e.constructor === Object
      );
    }
    function t(i, s) {
      void 0 === i && (i = {}),
        void 0 === s && (s = {}),
        Object.keys(s).forEach((n) => {
          void 0 === i[n]
            ? (i[n] = s[n])
            : e(s[n]) &&
              e(i[n]) &&
              Object.keys(s[n]).length > 0 &&
              t(i[n], s[n]);
        });
    }
    const i = {
      body: {},
      addEventListener() {},
      removeEventListener() {},
      activeElement: { blur() {}, nodeName: "" },
      querySelector: () => null,
      querySelectorAll: () => [],
      getElementById: () => null,
      createEvent: () => ({ initEvent() {} }),
      createElement: () => ({
        children: [],
        childNodes: [],
        style: {},
        setAttribute() {},
        getElementsByTagName: () => [],
      }),
      createElementNS: () => ({}),
      importNode: () => null,
      location: {
        hash: "",
        host: "",
        hostname: "",
        href: "",
        origin: "",
        pathname: "",
        protocol: "",
        search: "",
      },
    };
    function s() {
      const e = "undefined" != typeof document ? document : {};
      return t(e, i), e;
    }
    const n = {
      document: i,
      navigator: { userAgent: "" },
      location: {
        hash: "",
        host: "",
        hostname: "",
        href: "",
        origin: "",
        pathname: "",
        protocol: "",
        search: "",
      },
      history: { replaceState() {}, pushState() {}, go() {}, back() {} },
      CustomEvent: function () {
        return this;
      },
      addEventListener() {},
      removeEventListener() {},
      getComputedStyle: () => ({ getPropertyValue: () => "" }),
      Image() {},
      Date() {},
      screen: {},
      setTimeout() {},
      clearTimeout() {},
      matchMedia: () => ({}),
      requestAnimationFrame: (e) =>
        "undefined" == typeof setTimeout ? (e(), null) : setTimeout(e, 0),
      cancelAnimationFrame(e) {
        "undefined" != typeof setTimeout && clearTimeout(e);
      },
    };
    function r() {
      const e = "undefined" != typeof window ? window : {};
      return t(e, n), e;
    }
    class a extends Array {
      constructor(e) {
        "number" == typeof e
          ? super(e)
          : (super(...(e || [])),
            (function (e) {
              const t = e.__proto__;
              Object.defineProperty(e, "__proto__", {
                get: () => t,
                set(e) {
                  t.__proto__ = e;
                },
              });
            })(this));
      }
    }
    function o(e) {
      void 0 === e && (e = []);
      const t = [];
      return (
        e.forEach((e) => {
          Array.isArray(e) ? t.push(...o(e)) : t.push(e);
        }),
        t
      );
    }
    function l(e, t) {
      return Array.prototype.filter.call(e, t);
    }
    function u(e, t) {
      const i = r(),
        n = s();
      let o = [];
      if (!t && e instanceof a) return e;
      if (!e) return new a(o);
      if ("string" == typeof e) {
        const i = e.trim();
        if (i.indexOf("<") >= 0 && i.indexOf(">") >= 0) {
          let e = "div";
          0 === i.indexOf("<li") && (e = "ul"),
            0 === i.indexOf("<tr") && (e = "tbody"),
            (0 !== i.indexOf("<td") && 0 !== i.indexOf("<th")) || (e = "tr"),
            0 === i.indexOf("<tbody") && (e = "table"),
            0 === i.indexOf("<option") && (e = "select");
          const t = n.createElement(e);
          t.innerHTML = i;
          for (let e = 0; e < t.childNodes.length; e += 1)
            o.push(t.childNodes[e]);
        } else
          o = (function (e, t) {
            if ("string" != typeof e) return [e];
            const i = [],
              s = t.querySelectorAll(e);
            for (let e = 0; e < s.length; e += 1) i.push(s[e]);
            return i;
          })(e.trim(), t || n);
      } else if (e.nodeType || e === i || e === n) o.push(e);
      else if (Array.isArray(e)) {
        if (e instanceof a) return e;
        o = e;
      }
      return new a(
        (function (e) {
          const t = [];
          for (let i = 0; i < e.length; i += 1)
            -1 === t.indexOf(e[i]) && t.push(e[i]);
          return t;
        })(o)
      );
    }
    u.fn = a.prototype;
    const c = {
      addClass: function () {
        for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++)
          t[i] = arguments[i];
        const s = o(t.map((e) => e.split(" ")));
        return (
          this.forEach((e) => {
            e.classList.add(...s);
          }),
          this
        );
      },
      removeClass: function () {
        for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++)
          t[i] = arguments[i];
        const s = o(t.map((e) => e.split(" ")));
        return (
          this.forEach((e) => {
            e.classList.remove(...s);
          }),
          this
        );
      },
      hasClass: function () {
        for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++)
          t[i] = arguments[i];
        const s = o(t.map((e) => e.split(" ")));
        return (
          l(this, (e) => s.filter((t) => e.classList.contains(t)).length > 0)
            .length > 0
        );
      },
      toggleClass: function () {
        for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++)
          t[i] = arguments[i];
        const s = o(t.map((e) => e.split(" ")));
        this.forEach((e) => {
          s.forEach((t) => {
            e.classList.toggle(t);
          });
        });
      },
      attr: function (e, t) {
        if (1 === arguments.length && "string" == typeof e)
          return this[0] ? this[0].getAttribute(e) : void 0;
        for (let i = 0; i < this.length; i += 1)
          if (2 === arguments.length) this[i].setAttribute(e, t);
          else
            for (const t in e)
              (this[i][t] = e[t]), this[i].setAttribute(t, e[t]);
        return this;
      },
      removeAttr: function (e) {
        for (let t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
        return this;
      },
      transform: function (e) {
        for (let t = 0; t < this.length; t += 1) this[t].style.transform = e;
        return this;
      },
      transition: function (e) {
        for (let t = 0; t < this.length; t += 1)
          this[t].style.transitionDuration =
            "string" != typeof e ? `${e}ms` : e;
        return this;
      },
      on: function () {
        for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++)
          t[i] = arguments[i];
        let [s, n, r, a] = t;
        function o(e) {
          const t = e.target;
          if (!t) return;
          const i = e.target.dom7EventData || [];
          if ((i.indexOf(e) < 0 && i.unshift(e), u(t).is(n))) r.apply(t, i);
          else {
            const e = u(t).parents();
            for (let t = 0; t < e.length; t += 1)
              u(e[t]).is(n) && r.apply(e[t], i);
          }
        }
        function l(e) {
          const t = (e && e.target && e.target.dom7EventData) || [];
          t.indexOf(e) < 0 && t.unshift(e), r.apply(this, t);
        }
        "function" == typeof t[1] && (([s, r, a] = t), (n = void 0)),
          a || (a = !1);
        const c = s.split(" ");
        let d;
        for (let e = 0; e < this.length; e += 1) {
          const t = this[e];
          if (n)
            for (d = 0; d < c.length; d += 1) {
              const e = c[d];
              t.dom7LiveListeners || (t.dom7LiveListeners = {}),
                t.dom7LiveListeners[e] || (t.dom7LiveListeners[e] = []),
                t.dom7LiveListeners[e].push({ listener: r, proxyListener: o }),
                t.addEventListener(e, o, a);
            }
          else
            for (d = 0; d < c.length; d += 1) {
              const e = c[d];
              t.dom7Listeners || (t.dom7Listeners = {}),
                t.dom7Listeners[e] || (t.dom7Listeners[e] = []),
                t.dom7Listeners[e].push({ listener: r, proxyListener: l }),
                t.addEventListener(e, l, a);
            }
        }
        return this;
      },
      off: function () {
        for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++)
          t[i] = arguments[i];
        let [s, n, r, a] = t;
        "function" == typeof t[1] && (([s, r, a] = t), (n = void 0)),
          a || (a = !1);
        const o = s.split(" ");
        for (let e = 0; e < o.length; e += 1) {
          const t = o[e];
          for (let e = 0; e < this.length; e += 1) {
            const i = this[e];
            let s;
            if (
              (!n && i.dom7Listeners
                ? (s = i.dom7Listeners[t])
                : n && i.dom7LiveListeners && (s = i.dom7LiveListeners[t]),
              s && s.length)
            )
              for (let e = s.length - 1; e >= 0; e -= 1) {
                const n = s[e];
                (r && n.listener === r) ||
                (r &&
                  n.listener &&
                  n.listener.dom7proxy &&
                  n.listener.dom7proxy === r)
                  ? (i.removeEventListener(t, n.proxyListener, a),
                    s.splice(e, 1))
                  : r ||
                    (i.removeEventListener(t, n.proxyListener, a),
                    s.splice(e, 1));
              }
          }
        }
        return this;
      },
      trigger: function () {
        const e = r();
        for (var t = arguments.length, i = new Array(t), s = 0; s < t; s++)
          i[s] = arguments[s];
        const n = i[0].split(" "),
          a = i[1];
        for (let t = 0; t < n.length; t += 1) {
          const s = n[t];
          for (let t = 0; t < this.length; t += 1) {
            const n = this[t];
            if (e.CustomEvent) {
              const t = new e.CustomEvent(s, {
                detail: a,
                bubbles: !0,
                cancelable: !0,
              });
              (n.dom7EventData = i.filter((e, t) => t > 0)),
                n.dispatchEvent(t),
                (n.dom7EventData = []),
                delete n.dom7EventData;
            }
          }
        }
        return this;
      },
      transitionEnd: function (e) {
        const t = this;
        return (
          e &&
            t.on("transitionend", function i(s) {
              s.target === this && (e.call(this, s), t.off("transitionend", i));
            }),
          this
        );
      },
      outerWidth: function (e) {
        if (this.length > 0) {
          if (e) {
            const e = this.styles();
            return (
              this[0].offsetWidth +
              parseFloat(e.getPropertyValue("margin-right")) +
              parseFloat(e.getPropertyValue("margin-left"))
            );
          }
          return this[0].offsetWidth;
        }
        return null;
      },
      outerHeight: function (e) {
        if (this.length > 0) {
          if (e) {
            const e = this.styles();
            return (
              this[0].offsetHeight +
              parseFloat(e.getPropertyValue("margin-top")) +
              parseFloat(e.getPropertyValue("margin-bottom"))
            );
          }
          return this[0].offsetHeight;
        }
        return null;
      },
      styles: function () {
        const e = r();
        return this[0] ? e.getComputedStyle(this[0], null) : {};
      },
      offset: function () {
        if (this.length > 0) {
          const e = r(),
            t = s(),
            i = this[0],
            n = i.getBoundingClientRect(),
            a = t.body,
            o = i.clientTop || a.clientTop || 0,
            l = i.clientLeft || a.clientLeft || 0,
            u = i === e ? e.scrollY : i.scrollTop,
            c = i === e ? e.scrollX : i.scrollLeft;
          return { top: n.top + u - o, left: n.left + c - l };
        }
        return null;
      },
      css: function (e, t) {
        const i = r();
        let s;
        if (1 === arguments.length) {
          if ("string" != typeof e) {
            for (s = 0; s < this.length; s += 1)
              for (const t in e) this[s].style[t] = e[t];
            return this;
          }
          if (this[0])
            return i.getComputedStyle(this[0], null).getPropertyValue(e);
        }
        if (2 === arguments.length && "string" == typeof e) {
          for (s = 0; s < this.length; s += 1) this[s].style[e] = t;
          return this;
        }
        return this;
      },
      each: function (e) {
        return e
          ? (this.forEach((t, i) => {
              e.apply(t, [t, i]);
            }),
            this)
          : this;
      },
      html: function (e) {
        if (void 0 === e) return this[0] ? this[0].innerHTML : null;
        for (let t = 0; t < this.length; t += 1) this[t].innerHTML = e;
        return this;
      },
      text: function (e) {
        if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;
        for (let t = 0; t < this.length; t += 1) this[t].textContent = e;
        return this;
      },
      is: function (e) {
        const t = r(),
          i = s(),
          n = this[0];
        let o, l;
        if (!n || void 0 === e) return !1;
        if ("string" == typeof e) {
          if (n.matches) return n.matches(e);
          if (n.webkitMatchesSelector) return n.webkitMatchesSelector(e);
          if (n.msMatchesSelector) return n.msMatchesSelector(e);
          for (o = u(e), l = 0; l < o.length; l += 1) if (o[l] === n) return !0;
          return !1;
        }
        if (e === i) return n === i;
        if (e === t) return n === t;
        if (e.nodeType || e instanceof a) {
          for (o = e.nodeType ? [e] : e, l = 0; l < o.length; l += 1)
            if (o[l] === n) return !0;
          return !1;
        }
        return !1;
      },
      index: function () {
        let e,
          t = this[0];
        if (t) {
          for (e = 0; null !== (t = t.previousSibling); )
            1 === t.nodeType && (e += 1);
          return e;
        }
      },
      eq: function (e) {
        if (void 0 === e) return this;
        const t = this.length;
        if (e > t - 1) return u([]);
        if (e < 0) {
          const i = t + e;
          return u(i < 0 ? [] : [this[i]]);
        }
        return u([this[e]]);
      },
      append: function () {
        let e;
        const t = s();
        for (let i = 0; i < arguments.length; i += 1) {
          e = i < 0 || arguments.length <= i ? void 0 : arguments[i];
          for (let i = 0; i < this.length; i += 1)
            if ("string" == typeof e) {
              const s = t.createElement("div");
              for (s.innerHTML = e; s.firstChild; )
                this[i].appendChild(s.firstChild);
            } else if (e instanceof a)
              for (let t = 0; t < e.length; t += 1) this[i].appendChild(e[t]);
            else this[i].appendChild(e);
        }
        return this;
      },
      prepend: function (e) {
        const t = s();
        let i, n;
        for (i = 0; i < this.length; i += 1)
          if ("string" == typeof e) {
            const s = t.createElement("div");
            for (s.innerHTML = e, n = s.childNodes.length - 1; n >= 0; n -= 1)
              this[i].insertBefore(s.childNodes[n], this[i].childNodes[0]);
          } else if (e instanceof a)
            for (n = 0; n < e.length; n += 1)
              this[i].insertBefore(e[n], this[i].childNodes[0]);
          else this[i].insertBefore(e, this[i].childNodes[0]);
        return this;
      },
      next: function (e) {
        return this.length > 0
          ? e
            ? this[0].nextElementSibling && u(this[0].nextElementSibling).is(e)
              ? u([this[0].nextElementSibling])
              : u([])
            : this[0].nextElementSibling
            ? u([this[0].nextElementSibling])
            : u([])
          : u([]);
      },
      nextAll: function (e) {
        const t = [];
        let i = this[0];
        if (!i) return u([]);
        for (; i.nextElementSibling; ) {
          const s = i.nextElementSibling;
          e ? u(s).is(e) && t.push(s) : t.push(s), (i = s);
        }
        return u(t);
      },
      prev: function (e) {
        if (this.length > 0) {
          const t = this[0];
          return e
            ? t.previousElementSibling && u(t.previousElementSibling).is(e)
              ? u([t.previousElementSibling])
              : u([])
            : t.previousElementSibling
            ? u([t.previousElementSibling])
            : u([]);
        }
        return u([]);
      },
      prevAll: function (e) {
        const t = [];
        let i = this[0];
        if (!i) return u([]);
        for (; i.previousElementSibling; ) {
          const s = i.previousElementSibling;
          e ? u(s).is(e) && t.push(s) : t.push(s), (i = s);
        }
        return u(t);
      },
      parent: function (e) {
        const t = [];
        for (let i = 0; i < this.length; i += 1)
          null !== this[i].parentNode &&
            (e
              ? u(this[i].parentNode).is(e) && t.push(this[i].parentNode)
              : t.push(this[i].parentNode));
        return u(t);
      },
      parents: function (e) {
        const t = [];
        for (let i = 0; i < this.length; i += 1) {
          let s = this[i].parentNode;
          for (; s; )
            e ? u(s).is(e) && t.push(s) : t.push(s), (s = s.parentNode);
        }
        return u(t);
      },
      closest: function (e) {
        let t = this;
        return void 0 === e ? u([]) : (t.is(e) || (t = t.parents(e).eq(0)), t);
      },
      find: function (e) {
        const t = [];
        for (let i = 0; i < this.length; i += 1) {
          const s = this[i].querySelectorAll(e);
          for (let e = 0; e < s.length; e += 1) t.push(s[e]);
        }
        return u(t);
      },
      children: function (e) {
        const t = [];
        for (let i = 0; i < this.length; i += 1) {
          const s = this[i].children;
          for (let i = 0; i < s.length; i += 1)
            (e && !u(s[i]).is(e)) || t.push(s[i]);
        }
        return u(t);
      },
      filter: function (e) {
        return u(l(this, e));
      },
      remove: function () {
        for (let e = 0; e < this.length; e += 1)
          this[e].parentNode && this[e].parentNode.removeChild(this[e]);
        return this;
      },
    };
    function d(e, t) {
      return void 0 === t && (t = 0), setTimeout(e, t);
    }
    function p() {
      return Date.now();
    }
    function h(e, t) {
      void 0 === t && (t = "x");
      const i = r();
      let s, n, a;
      const o = (function (e) {
        const t = r();
        let i;
        return (
          t.getComputedStyle && (i = t.getComputedStyle(e, null)),
          !i && e.currentStyle && (i = e.currentStyle),
          i || (i = e.style),
          i
        );
      })(e);
      return (
        i.WebKitCSSMatrix
          ? ((n = o.transform || o.webkitTransform),
            n.split(",").length > 6 &&
              (n = n
                .split(", ")
                .map((e) => e.replace(",", "."))
                .join(", ")),
            (a = new i.WebKitCSSMatrix("none" === n ? "" : n)))
          : ((a =
              o.MozTransform ||
              o.OTransform ||
              o.MsTransform ||
              o.msTransform ||
              o.transform ||
              o
                .getPropertyValue("transform")
                .replace("translate(", "matrix(1, 0, 0, 1,")),
            (s = a.toString().split(","))),
        "x" === t &&
          (n = i.WebKitCSSMatrix
            ? a.m41
            : 16 === s.length
            ? parseFloat(s[12])
            : parseFloat(s[4])),
        "y" === t &&
          (n = i.WebKitCSSMatrix
            ? a.m42
            : 16 === s.length
            ? parseFloat(s[13])
            : parseFloat(s[5])),
        n || 0
      );
    }
    function f(e) {
      return (
        "object" == typeof e &&
        null !== e &&
        e.constructor &&
        "Object" === Object.prototype.toString.call(e).slice(8, -1)
      );
    }
    function m(e) {
      return "undefined" != typeof window && void 0 !== window.HTMLElement
        ? e instanceof HTMLElement
        : e && (1 === e.nodeType || 11 === e.nodeType);
    }
    function g() {
      const e = Object(arguments.length <= 0 ? void 0 : arguments[0]),
        t = ["__proto__", "constructor", "prototype"];
      for (let i = 1; i < arguments.length; i += 1) {
        const s = i < 0 || arguments.length <= i ? void 0 : arguments[i];
        if (null != s && !m(s)) {
          const i = Object.keys(Object(s)).filter((e) => t.indexOf(e) < 0);
          for (let t = 0, n = i.length; t < n; t += 1) {
            const n = i[t],
              r = Object.getOwnPropertyDescriptor(s, n);
            void 0 !== r &&
              r.enumerable &&
              (f(e[n]) && f(s[n])
                ? s[n].__swiper__
                  ? (e[n] = s[n])
                  : g(e[n], s[n])
                : !f(e[n]) && f(s[n])
                ? ((e[n] = {}), s[n].__swiper__ ? (e[n] = s[n]) : g(e[n], s[n]))
                : (e[n] = s[n]));
          }
        }
      }
      return e;
    }
    function v(e, t, i) {
      e.style.setProperty(t, i);
    }
    function y(e) {
      let { swiper: t, targetPosition: i, side: s } = e;
      const n = r(),
        a = -t.translate;
      let o,
        l = null;
      const u = t.params.speed;
      (t.wrapperEl.style.scrollSnapType = "none"),
        n.cancelAnimationFrame(t.cssModeFrameID);
      const c = i > a ? "next" : "prev",
        d = (e, t) => ("next" === c && e >= t) || ("prev" === c && e <= t),
        p = () => {
          (o = new Date().getTime()), null === l && (l = o);
          const e = Math.max(Math.min((o - l) / u, 1), 0),
            r = 0.5 - Math.cos(e * Math.PI) / 2;
          let c = a + r * (i - a);
          if ((d(c, i) && (c = i), t.wrapperEl.scrollTo({ [s]: c }), d(c, i)))
            return (
              (t.wrapperEl.style.overflow = "hidden"),
              (t.wrapperEl.style.scrollSnapType = ""),
              setTimeout(() => {
                (t.wrapperEl.style.overflow = ""),
                  t.wrapperEl.scrollTo({ [s]: c });
              }),
              void n.cancelAnimationFrame(t.cssModeFrameID)
            );
          t.cssModeFrameID = n.requestAnimationFrame(p);
        };
      p();
    }
    let b, w, D;
    function x() {
      return (
        b ||
          (b = (function () {
            const e = r(),
              t = s();
            return {
              smoothScroll:
                t.documentElement &&
                "scrollBehavior" in t.documentElement.style,
              touch: !!(
                "ontouchstart" in e ||
                (e.DocumentTouch && t instanceof e.DocumentTouch)
              ),
              passiveListener: (function () {
                let t = !1;
                try {
                  const i = Object.defineProperty({}, "passive", {
                    get() {
                      t = !0;
                    },
                  });
                  e.addEventListener("testPassiveListener", null, i);
                } catch (e) {}
                return t;
              })(),
              gestures: "ongesturestart" in e,
            };
          })()),
        b
      );
    }
    function C(e) {
      return (
        void 0 === e && (e = {}),
        w ||
          (w = (function (e) {
            let { userAgent: t } = void 0 === e ? {} : e;
            const i = x(),
              s = r(),
              n = s.navigator.platform,
              a = t || s.navigator.userAgent,
              o = { ios: !1, android: !1 },
              l = s.screen.width,
              u = s.screen.height,
              c = a.match(/(Android);?[\s\/]+([\d.]+)?/);
            let d = a.match(/(iPad).*OS\s([\d_]+)/);
            const p = a.match(/(iPod)(.*OS\s([\d_]+))?/),
              h = !d && a.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
              f = "Win32" === n;
            let m = "MacIntel" === n;
            return (
              !d &&
                m &&
                i.touch &&
                [
                  "1024x1366",
                  "1366x1024",
                  "834x1194",
                  "1194x834",
                  "834x1112",
                  "1112x834",
                  "768x1024",
                  "1024x768",
                  "820x1180",
                  "1180x820",
                  "810x1080",
                  "1080x810",
                ].indexOf(`${l}x${u}`) >= 0 &&
                ((d = a.match(/(Version)\/([\d.]+)/)),
                d || (d = [0, 1, "13_0_0"]),
                (m = !1)),
              c && !f && ((o.os = "android"), (o.android = !0)),
              (d || h || p) && ((o.os = "ios"), (o.ios = !0)),
              o
            );
          })(e)),
        w
      );
    }
    function T() {
      return (
        D ||
          (D = (function () {
            const e = r();
            return {
              isSafari: (function () {
                const t = e.navigator.userAgent.toLowerCase();
                return (
                  t.indexOf("safari") >= 0 &&
                  t.indexOf("chrome") < 0 &&
                  t.indexOf("android") < 0
                );
              })(),
              isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
                e.navigator.userAgent
              ),
            };
          })()),
        D
      );
    }
    Object.keys(c).forEach((e) => {
      Object.defineProperty(u.fn, e, { value: c[e], writable: !0 });
    });
    var E = {
        on(e, t, i) {
          const s = this;
          if (!s.eventsListeners || s.destroyed) return s;
          if ("function" != typeof t) return s;
          const n = i ? "unshift" : "push";
          return (
            e.split(" ").forEach((e) => {
              s.eventsListeners[e] || (s.eventsListeners[e] = []),
                s.eventsListeners[e][n](t);
            }),
            s
          );
        },
        once(e, t, i) {
          const s = this;
          if (!s.eventsListeners || s.destroyed) return s;
          if ("function" != typeof t) return s;
          function n() {
            s.off(e, n), n.__emitterProxy && delete n.__emitterProxy;
            for (var i = arguments.length, r = new Array(i), a = 0; a < i; a++)
              r[a] = arguments[a];
            t.apply(s, r);
          }
          return (n.__emitterProxy = t), s.on(e, n, i);
        },
        onAny(e, t) {
          const i = this;
          if (!i.eventsListeners || i.destroyed) return i;
          if ("function" != typeof e) return i;
          const s = t ? "unshift" : "push";
          return (
            i.eventsAnyListeners.indexOf(e) < 0 && i.eventsAnyListeners[s](e), i
          );
        },
        offAny(e) {
          const t = this;
          if (!t.eventsListeners || t.destroyed) return t;
          if (!t.eventsAnyListeners) return t;
          const i = t.eventsAnyListeners.indexOf(e);
          return i >= 0 && t.eventsAnyListeners.splice(i, 1), t;
        },
        off(e, t) {
          const i = this;
          return !i.eventsListeners || i.destroyed
            ? i
            : i.eventsListeners
            ? (e.split(" ").forEach((e) => {
                void 0 === t
                  ? (i.eventsListeners[e] = [])
                  : i.eventsListeners[e] &&
                    i.eventsListeners[e].forEach((s, n) => {
                      (s === t ||
                        (s.__emitterProxy && s.__emitterProxy === t)) &&
                        i.eventsListeners[e].splice(n, 1);
                    });
              }),
              i)
            : i;
        },
        emit() {
          const e = this;
          if (!e.eventsListeners || e.destroyed) return e;
          if (!e.eventsListeners) return e;
          let t, i, s;
          for (var n = arguments.length, r = new Array(n), a = 0; a < n; a++)
            r[a] = arguments[a];
          return (
            "string" == typeof r[0] || Array.isArray(r[0])
              ? ((t = r[0]), (i = r.slice(1, r.length)), (s = e))
              : ((t = r[0].events), (i = r[0].data), (s = r[0].context || e)),
            i.unshift(s),
            (Array.isArray(t) ? t : t.split(" ")).forEach((t) => {
              e.eventsAnyListeners &&
                e.eventsAnyListeners.length &&
                e.eventsAnyListeners.forEach((e) => {
                  e.apply(s, [t, ...i]);
                }),
                e.eventsListeners &&
                  e.eventsListeners[t] &&
                  e.eventsListeners[t].forEach((e) => {
                    e.apply(s, i);
                  });
            }),
            e
          );
        },
      },
      _ = {
        updateSize: function () {
          const e = this;
          let t, i;
          const s = e.$el;
          (t =
            void 0 !== e.params.width && null !== e.params.width
              ? e.params.width
              : s[0].clientWidth),
            (i =
              void 0 !== e.params.height && null !== e.params.height
                ? e.params.height
                : s[0].clientHeight),
            (0 === t && e.isHorizontal()) ||
              (0 === i && e.isVertical()) ||
              ((t =
                t -
                parseInt(s.css("padding-left") || 0, 10) -
                parseInt(s.css("padding-right") || 0, 10)),
              (i =
                i -
                parseInt(s.css("padding-top") || 0, 10) -
                parseInt(s.css("padding-bottom") || 0, 10)),
              Number.isNaN(t) && (t = 0),
              Number.isNaN(i) && (i = 0),
              Object.assign(e, {
                width: t,
                height: i,
                size: e.isHorizontal() ? t : i,
              }));
        },
        updateSlides: function () {
          const e = this;
          function t(t) {
            return e.isHorizontal()
              ? t
              : {
                  width: "height",
                  "margin-top": "margin-left",
                  "margin-bottom ": "margin-right",
                  "margin-left": "margin-top",
                  "margin-right": "margin-bottom",
                  "padding-left": "padding-top",
                  "padding-right": "padding-bottom",
                  marginRight: "marginBottom",
                }[t];
          }
          function i(e, i) {
            return parseFloat(e.getPropertyValue(t(i)) || 0);
          }
          const s = e.params,
            { $wrapperEl: n, size: r, rtlTranslate: a, wrongRTL: o } = e,
            l = e.virtual && s.virtual.enabled,
            u = l ? e.virtual.slides.length : e.slides.length,
            c = n.children(`.${e.params.slideClass}`),
            d = l ? e.virtual.slides.length : c.length;
          let p = [];
          const h = [],
            f = [];
          let m = s.slidesOffsetBefore;
          "function" == typeof m && (m = s.slidesOffsetBefore.call(e));
          let g = s.slidesOffsetAfter;
          "function" == typeof g && (g = s.slidesOffsetAfter.call(e));
          const y = e.snapGrid.length,
            b = e.slidesGrid.length;
          let w = s.spaceBetween,
            D = -m,
            x = 0,
            C = 0;
          if (void 0 === r) return;
          "string" == typeof w &&
            w.indexOf("%") >= 0 &&
            (w = (parseFloat(w.replace("%", "")) / 100) * r),
            (e.virtualSize = -w),
            a
              ? c.css({ marginLeft: "", marginBottom: "", marginTop: "" })
              : c.css({ marginRight: "", marginBottom: "", marginTop: "" }),
            s.centeredSlides &&
              s.cssMode &&
              (v(e.wrapperEl, "--swiper-centered-offset-before", ""),
              v(e.wrapperEl, "--swiper-centered-offset-after", ""));
          const T = s.grid && s.grid.rows > 1 && e.grid;
          let E;
          T && e.grid.initSlides(d);
          const _ =
            "auto" === s.slidesPerView &&
            s.breakpoints &&
            Object.keys(s.breakpoints).filter(
              (e) => void 0 !== s.breakpoints[e].slidesPerView
            ).length > 0;
          for (let n = 0; n < d; n += 1) {
            E = 0;
            const a = c.eq(n);
            if (
              (T && e.grid.updateSlide(n, a, d, t), "none" !== a.css("display"))
            ) {
              if ("auto" === s.slidesPerView) {
                _ && (c[n].style[t("width")] = "");
                const r = getComputedStyle(a[0]),
                  o = a[0].style.transform,
                  l = a[0].style.webkitTransform;
                if (
                  (o && (a[0].style.transform = "none"),
                  l && (a[0].style.webkitTransform = "none"),
                  s.roundLengths)
                )
                  E = e.isHorizontal() ? a.outerWidth(!0) : a.outerHeight(!0);
                else {
                  const e = i(r, "width"),
                    t = i(r, "padding-left"),
                    s = i(r, "padding-right"),
                    n = i(r, "margin-left"),
                    o = i(r, "margin-right"),
                    l = r.getPropertyValue("box-sizing");
                  if (l && "border-box" === l) E = e + n + o;
                  else {
                    const { clientWidth: i, offsetWidth: r } = a[0];
                    E = e + t + s + n + o + (r - i);
                  }
                }
                o && (a[0].style.transform = o),
                  l && (a[0].style.webkitTransform = l),
                  s.roundLengths && (E = Math.floor(E));
              } else
                (E = (r - (s.slidesPerView - 1) * w) / s.slidesPerView),
                  s.roundLengths && (E = Math.floor(E)),
                  c[n] && (c[n].style[t("width")] = `${E}px`);
              c[n] && (c[n].swiperSlideSize = E),
                f.push(E),
                s.centeredSlides
                  ? ((D = D + E / 2 + x / 2 + w),
                    0 === x && 0 !== n && (D = D - r / 2 - w),
                    0 === n && (D = D - r / 2 - w),
                    Math.abs(D) < 0.001 && (D = 0),
                    s.roundLengths && (D = Math.floor(D)),
                    C % s.slidesPerGroup == 0 && p.push(D),
                    h.push(D))
                  : (s.roundLengths && (D = Math.floor(D)),
                    (C - Math.min(e.params.slidesPerGroupSkip, C)) %
                      e.params.slidesPerGroup ==
                      0 && p.push(D),
                    h.push(D),
                    (D = D + E + w)),
                (e.virtualSize += E + w),
                (x = E),
                (C += 1);
            }
          }
          if (
            ((e.virtualSize = Math.max(e.virtualSize, r) + g),
            a &&
              o &&
              ("slide" === s.effect || "coverflow" === s.effect) &&
              n.css({ width: `${e.virtualSize + s.spaceBetween}px` }),
            s.setWrapperSize &&
              n.css({ [t("width")]: `${e.virtualSize + s.spaceBetween}px` }),
            T && e.grid.updateWrapperSize(E, p, t),
            !s.centeredSlides)
          ) {
            const t = [];
            for (let i = 0; i < p.length; i += 1) {
              let n = p[i];
              s.roundLengths && (n = Math.floor(n)),
                p[i] <= e.virtualSize - r && t.push(n);
            }
            (p = t),
              Math.floor(e.virtualSize - r) - Math.floor(p[p.length - 1]) > 1 &&
                p.push(e.virtualSize - r);
          }
          if ((0 === p.length && (p = [0]), 0 !== s.spaceBetween)) {
            const i = e.isHorizontal() && a ? "marginLeft" : t("marginRight");
            c.filter((e, t) => !s.cssMode || t !== c.length - 1).css({
              [i]: `${w}px`,
            });
          }
          if (s.centeredSlides && s.centeredSlidesBounds) {
            let e = 0;
            f.forEach((t) => {
              e += t + (s.spaceBetween ? s.spaceBetween : 0);
            }),
              (e -= s.spaceBetween);
            const t = e - r;
            p = p.map((e) => (e < 0 ? -m : e > t ? t + g : e));
          }
          if (s.centerInsufficientSlides) {
            let e = 0;
            if (
              (f.forEach((t) => {
                e += t + (s.spaceBetween ? s.spaceBetween : 0);
              }),
              (e -= s.spaceBetween),
              e < r)
            ) {
              const t = (r - e) / 2;
              p.forEach((e, i) => {
                p[i] = e - t;
              }),
                h.forEach((e, i) => {
                  h[i] = e + t;
                });
            }
          }
          if (
            (Object.assign(e, {
              slides: c,
              snapGrid: p,
              slidesGrid: h,
              slidesSizesGrid: f,
            }),
            s.centeredSlides && s.cssMode && !s.centeredSlidesBounds)
          ) {
            v(e.wrapperEl, "--swiper-centered-offset-before", -p[0] + "px"),
              v(
                e.wrapperEl,
                "--swiper-centered-offset-after",
                e.size / 2 - f[f.length - 1] / 2 + "px"
              );
            const t = -e.snapGrid[0],
              i = -e.slidesGrid[0];
            (e.snapGrid = e.snapGrid.map((e) => e + t)),
              (e.slidesGrid = e.slidesGrid.map((e) => e + i));
          }
          if (
            (d !== u && e.emit("slidesLengthChange"),
            p.length !== y &&
              (e.params.watchOverflow && e.checkOverflow(),
              e.emit("snapGridLengthChange")),
            h.length !== b && e.emit("slidesGridLengthChange"),
            s.watchSlidesProgress && e.updateSlidesOffset(),
            !(l || s.cssMode || ("slide" !== s.effect && "fade" !== s.effect)))
          ) {
            const t = `${s.containerModifierClass}backface-hidden`,
              i = e.$el.hasClass(t);
            d <= s.maxBackfaceHiddenSlides
              ? i || e.$el.addClass(t)
              : i && e.$el.removeClass(t);
          }
        },
        updateAutoHeight: function (e) {
          const t = this,
            i = [],
            s = t.virtual && t.params.virtual.enabled;
          let n,
            r = 0;
          "number" == typeof e
            ? t.setTransition(e)
            : !0 === e && t.setTransition(t.params.speed);
          const a = (e) =>
            s
              ? t.slides.filter(
                  (t) =>
                    parseInt(t.getAttribute("data-swiper-slide-index"), 10) ===
                    e
                )[0]
              : t.slides.eq(e)[0];
          if ("auto" !== t.params.slidesPerView && t.params.slidesPerView > 1)
            if (t.params.centeredSlides)
              (t.visibleSlides || u([])).each((e) => {
                i.push(e);
              });
            else
              for (n = 0; n < Math.ceil(t.params.slidesPerView); n += 1) {
                const e = t.activeIndex + n;
                if (e > t.slides.length && !s) break;
                i.push(a(e));
              }
          else i.push(a(t.activeIndex));
          for (n = 0; n < i.length; n += 1)
            if (void 0 !== i[n]) {
              const e = i[n].offsetHeight;
              r = e > r ? e : r;
            }
          (r || 0 === r) && t.$wrapperEl.css("height", `${r}px`);
        },
        updateSlidesOffset: function () {
          const e = this,
            t = e.slides;
          for (let i = 0; i < t.length; i += 1)
            t[i].swiperSlideOffset = e.isHorizontal()
              ? t[i].offsetLeft
              : t[i].offsetTop;
        },
        updateSlidesProgress: function (e) {
          void 0 === e && (e = (this && this.translate) || 0);
          const t = this,
            i = t.params,
            { slides: s, rtlTranslate: n, snapGrid: r } = t;
          if (0 === s.length) return;
          void 0 === s[0].swiperSlideOffset && t.updateSlidesOffset();
          let a = -e;
          n && (a = e),
            s.removeClass(i.slideVisibleClass),
            (t.visibleSlidesIndexes = []),
            (t.visibleSlides = []);
          for (let e = 0; e < s.length; e += 1) {
            const o = s[e];
            let l = o.swiperSlideOffset;
            i.cssMode && i.centeredSlides && (l -= s[0].swiperSlideOffset);
            const u =
                (a + (i.centeredSlides ? t.minTranslate() : 0) - l) /
                (o.swiperSlideSize + i.spaceBetween),
              c =
                (a - r[0] + (i.centeredSlides ? t.minTranslate() : 0) - l) /
                (o.swiperSlideSize + i.spaceBetween),
              d = -(a - l),
              p = d + t.slidesSizesGrid[e];
            ((d >= 0 && d < t.size - 1) ||
              (p > 1 && p <= t.size) ||
              (d <= 0 && p >= t.size)) &&
              (t.visibleSlides.push(o),
              t.visibleSlidesIndexes.push(e),
              s.eq(e).addClass(i.slideVisibleClass)),
              (o.progress = n ? -u : u),
              (o.originalProgress = n ? -c : c);
          }
          t.visibleSlides = u(t.visibleSlides);
        },
        updateProgress: function (e) {
          const t = this;
          if (void 0 === e) {
            const i = t.rtlTranslate ? -1 : 1;
            e = (t && t.translate && t.translate * i) || 0;
          }
          const i = t.params,
            s = t.maxTranslate() - t.minTranslate();
          let { progress: n, isBeginning: r, isEnd: a } = t;
          const o = r,
            l = a;
          0 === s
            ? ((n = 0), (r = !0), (a = !0))
            : ((n = (e - t.minTranslate()) / s), (r = n <= 0), (a = n >= 1)),
            Object.assign(t, { progress: n, isBeginning: r, isEnd: a }),
            (i.watchSlidesProgress || (i.centeredSlides && i.autoHeight)) &&
              t.updateSlidesProgress(e),
            r && !o && t.emit("reachBeginning toEdge"),
            a && !l && t.emit("reachEnd toEdge"),
            ((o && !r) || (l && !a)) && t.emit("fromEdge"),
            t.emit("progress", n);
        },
        updateSlidesClasses: function () {
          const e = this,
            {
              slides: t,
              params: i,
              $wrapperEl: s,
              activeIndex: n,
              realIndex: r,
            } = e,
            a = e.virtual && i.virtual.enabled;
          let o;
          t.removeClass(
            `${i.slideActiveClass} ${i.slideNextClass} ${i.slidePrevClass} ${i.slideDuplicateActiveClass} ${i.slideDuplicateNextClass} ${i.slideDuplicatePrevClass}`
          ),
            (o = a
              ? e.$wrapperEl.find(
                  `.${i.slideClass}[data-swiper-slide-index="${n}"]`
                )
              : t.eq(n)),
            o.addClass(i.slideActiveClass),
            i.loop &&
              (o.hasClass(i.slideDuplicateClass)
                ? s
                    .children(
                      `.${i.slideClass}:not(.${i.slideDuplicateClass})[data-swiper-slide-index="${r}"]`
                    )
                    .addClass(i.slideDuplicateActiveClass)
                : s
                    .children(
                      `.${i.slideClass}.${i.slideDuplicateClass}[data-swiper-slide-index="${r}"]`
                    )
                    .addClass(i.slideDuplicateActiveClass));
          let l = o
            .nextAll(`.${i.slideClass}`)
            .eq(0)
            .addClass(i.slideNextClass);
          i.loop &&
            0 === l.length &&
            ((l = t.eq(0)), l.addClass(i.slideNextClass));
          let u = o
            .prevAll(`.${i.slideClass}`)
            .eq(0)
            .addClass(i.slidePrevClass);
          i.loop &&
            0 === u.length &&
            ((u = t.eq(-1)), u.addClass(i.slidePrevClass)),
            i.loop &&
              (l.hasClass(i.slideDuplicateClass)
                ? s
                    .children(
                      `.${i.slideClass}:not(.${
                        i.slideDuplicateClass
                      })[data-swiper-slide-index="${l.attr(
                        "data-swiper-slide-index"
                      )}"]`
                    )
                    .addClass(i.slideDuplicateNextClass)
                : s
                    .children(
                      `.${i.slideClass}.${
                        i.slideDuplicateClass
                      }[data-swiper-slide-index="${l.attr(
                        "data-swiper-slide-index"
                      )}"]`
                    )
                    .addClass(i.slideDuplicateNextClass),
              u.hasClass(i.slideDuplicateClass)
                ? s
                    .children(
                      `.${i.slideClass}:not(.${
                        i.slideDuplicateClass
                      })[data-swiper-slide-index="${u.attr(
                        "data-swiper-slide-index"
                      )}"]`
                    )
                    .addClass(i.slideDuplicatePrevClass)
                : s
                    .children(
                      `.${i.slideClass}.${
                        i.slideDuplicateClass
                      }[data-swiper-slide-index="${u.attr(
                        "data-swiper-slide-index"
                      )}"]`
                    )
                    .addClass(i.slideDuplicatePrevClass)),
            e.emitSlidesClasses();
        },
        updateActiveIndex: function (e) {
          const t = this,
            i = t.rtlTranslate ? t.translate : -t.translate,
            {
              slidesGrid: s,
              snapGrid: n,
              params: r,
              activeIndex: a,
              realIndex: o,
              snapIndex: l,
            } = t;
          let u,
            c = e;
          if (void 0 === c) {
            for (let e = 0; e < s.length; e += 1)
              void 0 !== s[e + 1]
                ? i >= s[e] && i < s[e + 1] - (s[e + 1] - s[e]) / 2
                  ? (c = e)
                  : i >= s[e] && i < s[e + 1] && (c = e + 1)
                : i >= s[e] && (c = e);
            r.normalizeSlideIndex && (c < 0 || void 0 === c) && (c = 0);
          }
          if (n.indexOf(i) >= 0) u = n.indexOf(i);
          else {
            const e = Math.min(r.slidesPerGroupSkip, c);
            u = e + Math.floor((c - e) / r.slidesPerGroup);
          }
          if ((u >= n.length && (u = n.length - 1), c === a))
            return void (
              u !== l && ((t.snapIndex = u), t.emit("snapIndexChange"))
            );
          const d = parseInt(
            t.slides.eq(c).attr("data-swiper-slide-index") || c,
            10
          );
          Object.assign(t, {
            snapIndex: u,
            realIndex: d,
            previousIndex: a,
            activeIndex: c,
          }),
            t.emit("activeIndexChange"),
            t.emit("snapIndexChange"),
            o !== d && t.emit("realIndexChange"),
            (t.initialized || t.params.runCallbacksOnInit) &&
              t.emit("slideChange");
        },
        updateClickedSlide: function (e) {
          const t = this,
            i = t.params,
            s = u(e).closest(`.${i.slideClass}`)[0];
          let n,
            r = !1;
          if (s)
            for (let e = 0; e < t.slides.length; e += 1)
              if (t.slides[e] === s) {
                (r = !0), (n = e);
                break;
              }
          if (!s || !r)
            return (t.clickedSlide = void 0), void (t.clickedIndex = void 0);
          (t.clickedSlide = s),
            t.virtual && t.params.virtual.enabled
              ? (t.clickedIndex = parseInt(
                  u(s).attr("data-swiper-slide-index"),
                  10
                ))
              : (t.clickedIndex = n),
            i.slideToClickedSlide &&
              void 0 !== t.clickedIndex &&
              t.clickedIndex !== t.activeIndex &&
              t.slideToClickedSlide();
        },
      },
      S = {
        getTranslate: function (e) {
          void 0 === e && (e = this.isHorizontal() ? "x" : "y");
          const {
            params: t,
            rtlTranslate: i,
            translate: s,
            $wrapperEl: n,
          } = this;
          if (t.virtualTranslate) return i ? -s : s;
          if (t.cssMode) return s;
          let r = h(n[0], e);
          return i && (r = -r), r || 0;
        },
        setTranslate: function (e, t) {
          const i = this,
            {
              rtlTranslate: s,
              params: n,
              $wrapperEl: r,
              wrapperEl: a,
              progress: o,
            } = i;
          let l,
            u = 0,
            c = 0;
          i.isHorizontal() ? (u = s ? -e : e) : (c = e),
            n.roundLengths && ((u = Math.floor(u)), (c = Math.floor(c))),
            n.cssMode
              ? (a[i.isHorizontal() ? "scrollLeft" : "scrollTop"] =
                  i.isHorizontal() ? -u : -c)
              : n.virtualTranslate ||
                r.transform(`translate3d(${u}px, ${c}px, 0px)`),
            (i.previousTranslate = i.translate),
            (i.translate = i.isHorizontal() ? u : c);
          const d = i.maxTranslate() - i.minTranslate();
          (l = 0 === d ? 0 : (e - i.minTranslate()) / d),
            l !== o && i.updateProgress(e),
            i.emit("setTranslate", i.translate, t);
        },
        minTranslate: function () {
          return -this.snapGrid[0];
        },
        maxTranslate: function () {
          return -this.snapGrid[this.snapGrid.length - 1];
        },
        translateTo: function (e, t, i, s, n) {
          void 0 === e && (e = 0),
            void 0 === t && (t = this.params.speed),
            void 0 === i && (i = !0),
            void 0 === s && (s = !0);
          const r = this,
            { params: a, wrapperEl: o } = r;
          if (r.animating && a.preventInteractionOnTransition) return !1;
          const l = r.minTranslate(),
            u = r.maxTranslate();
          let c;
          if (
            ((c = s && e > l ? l : s && e < u ? u : e),
            r.updateProgress(c),
            a.cssMode)
          ) {
            const e = r.isHorizontal();
            if (0 === t) o[e ? "scrollLeft" : "scrollTop"] = -c;
            else {
              if (!r.support.smoothScroll)
                return (
                  y({
                    swiper: r,
                    targetPosition: -c,
                    side: e ? "left" : "top",
                  }),
                  !0
                );
              o.scrollTo({ [e ? "left" : "top"]: -c, behavior: "smooth" });
            }
            return !0;
          }
          return (
            0 === t
              ? (r.setTransition(0),
                r.setTranslate(c),
                i &&
                  (r.emit("beforeTransitionStart", t, n),
                  r.emit("transitionEnd")))
              : (r.setTransition(t),
                r.setTranslate(c),
                i &&
                  (r.emit("beforeTransitionStart", t, n),
                  r.emit("transitionStart")),
                r.animating ||
                  ((r.animating = !0),
                  r.onTranslateToWrapperTransitionEnd ||
                    (r.onTranslateToWrapperTransitionEnd = function (e) {
                      r &&
                        !r.destroyed &&
                        e.target === this &&
                        (r.$wrapperEl[0].removeEventListener(
                          "transitionend",
                          r.onTranslateToWrapperTransitionEnd
                        ),
                        r.$wrapperEl[0].removeEventListener(
                          "webkitTransitionEnd",
                          r.onTranslateToWrapperTransitionEnd
                        ),
                        (r.onTranslateToWrapperTransitionEnd = null),
                        delete r.onTranslateToWrapperTransitionEnd,
                        i && r.emit("transitionEnd"));
                    }),
                  r.$wrapperEl[0].addEventListener(
                    "transitionend",
                    r.onTranslateToWrapperTransitionEnd
                  ),
                  r.$wrapperEl[0].addEventListener(
                    "webkitTransitionEnd",
                    r.onTranslateToWrapperTransitionEnd
                  ))),
            !0
          );
        },
      };
    function M(e) {
      let { swiper: t, runCallbacks: i, direction: s, step: n } = e;
      const { activeIndex: r, previousIndex: a } = t;
      let o = s;
      if (
        (o || (o = r > a ? "next" : r < a ? "prev" : "reset"),
        t.emit(`transition${n}`),
        i && r !== a)
      ) {
        if ("reset" === o) return void t.emit(`slideResetTransition${n}`);
        t.emit(`slideChangeTransition${n}`),
          "next" === o
            ? t.emit(`slideNextTransition${n}`)
            : t.emit(`slidePrevTransition${n}`);
      }
    }
    var k = {
        slideTo: function (e, t, i, s, n) {
          if (
            (void 0 === e && (e = 0),
            void 0 === t && (t = this.params.speed),
            void 0 === i && (i = !0),
            "number" != typeof e && "string" != typeof e)
          )
            throw new Error(
              `The 'index' argument cannot have type other than 'number' or 'string'. [${typeof e}] given.`
            );
          if ("string" == typeof e) {
            const t = parseInt(e, 10);
            if (!isFinite(t))
              throw new Error(
                `The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`
              );
            e = t;
          }
          const r = this;
          let a = e;
          a < 0 && (a = 0);
          const {
            params: o,
            snapGrid: l,
            slidesGrid: u,
            previousIndex: c,
            activeIndex: d,
            rtlTranslate: p,
            wrapperEl: h,
            enabled: f,
          } = r;
          if (
            (r.animating && o.preventInteractionOnTransition) ||
            (!f && !s && !n)
          )
            return !1;
          const m = Math.min(r.params.slidesPerGroupSkip, a);
          let g = m + Math.floor((a - m) / r.params.slidesPerGroup);
          g >= l.length && (g = l.length - 1);
          const v = -l[g];
          if (o.normalizeSlideIndex)
            for (let e = 0; e < u.length; e += 1) {
              const t = -Math.floor(100 * v),
                i = Math.floor(100 * u[e]),
                s = Math.floor(100 * u[e + 1]);
              void 0 !== u[e + 1]
                ? t >= i && t < s - (s - i) / 2
                  ? (a = e)
                  : t >= i && t < s && (a = e + 1)
                : t >= i && (a = e);
            }
          if (r.initialized && a !== d) {
            if (!r.allowSlideNext && v < r.translate && v < r.minTranslate())
              return !1;
            if (
              !r.allowSlidePrev &&
              v > r.translate &&
              v > r.maxTranslate() &&
              (d || 0) !== a
            )
              return !1;
          }
          let b;
          if (
            (a !== (c || 0) && i && r.emit("beforeSlideChangeStart"),
            r.updateProgress(v),
            (b = a > d ? "next" : a < d ? "prev" : "reset"),
            (p && -v === r.translate) || (!p && v === r.translate))
          )
            return (
              r.updateActiveIndex(a),
              o.autoHeight && r.updateAutoHeight(),
              r.updateSlidesClasses(),
              "slide" !== o.effect && r.setTranslate(v),
              "reset" !== b && (r.transitionStart(i, b), r.transitionEnd(i, b)),
              !1
            );
          if (o.cssMode) {
            const e = r.isHorizontal(),
              i = p ? v : -v;
            if (0 === t) {
              const t = r.virtual && r.params.virtual.enabled;
              t &&
                ((r.wrapperEl.style.scrollSnapType = "none"),
                (r._immediateVirtual = !0)),
                (h[e ? "scrollLeft" : "scrollTop"] = i),
                t &&
                  requestAnimationFrame(() => {
                    (r.wrapperEl.style.scrollSnapType = ""),
                      (r._swiperImmediateVirtual = !1);
                  });
            } else {
              if (!r.support.smoothScroll)
                return (
                  y({ swiper: r, targetPosition: i, side: e ? "left" : "top" }),
                  !0
                );
              h.scrollTo({ [e ? "left" : "top"]: i, behavior: "smooth" });
            }
            return !0;
          }
          return (
            r.setTransition(t),
            r.setTranslate(v),
            r.updateActiveIndex(a),
            r.updateSlidesClasses(),
            r.emit("beforeTransitionStart", t, s),
            r.transitionStart(i, b),
            0 === t
              ? r.transitionEnd(i, b)
              : r.animating ||
                ((r.animating = !0),
                r.onSlideToWrapperTransitionEnd ||
                  (r.onSlideToWrapperTransitionEnd = function (e) {
                    r &&
                      !r.destroyed &&
                      e.target === this &&
                      (r.$wrapperEl[0].removeEventListener(
                        "transitionend",
                        r.onSlideToWrapperTransitionEnd
                      ),
                      r.$wrapperEl[0].removeEventListener(
                        "webkitTransitionEnd",
                        r.onSlideToWrapperTransitionEnd
                      ),
                      (r.onSlideToWrapperTransitionEnd = null),
                      delete r.onSlideToWrapperTransitionEnd,
                      r.transitionEnd(i, b));
                  }),
                r.$wrapperEl[0].addEventListener(
                  "transitionend",
                  r.onSlideToWrapperTransitionEnd
                ),
                r.$wrapperEl[0].addEventListener(
                  "webkitTransitionEnd",
                  r.onSlideToWrapperTransitionEnd
                )),
            !0
          );
        },
        slideToLoop: function (e, t, i, s) {
          if (
            (void 0 === e && (e = 0),
            void 0 === t && (t = this.params.speed),
            void 0 === i && (i = !0),
            "string" == typeof e)
          ) {
            const t = parseInt(e, 10);
            if (!isFinite(t))
              throw new Error(
                `The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`
              );
            e = t;
          }
          const n = this;
          let r = e;
          return n.params.loop && (r += n.loopedSlides), n.slideTo(r, t, i, s);
        },
        slideNext: function (e, t, i) {
          void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
          const s = this,
            { animating: n, enabled: r, params: a } = s;
          if (!r) return s;
          let o = a.slidesPerGroup;
          "auto" === a.slidesPerView &&
            1 === a.slidesPerGroup &&
            a.slidesPerGroupAuto &&
            (o = Math.max(s.slidesPerViewDynamic("current", !0), 1));
          const l = s.activeIndex < a.slidesPerGroupSkip ? 1 : o;
          if (a.loop) {
            if (n && a.loopPreventsSlide) return !1;
            s.loopFix(), (s._clientLeft = s.$wrapperEl[0].clientLeft);
          }
          return a.rewind && s.isEnd
            ? s.slideTo(0, e, t, i)
            : s.slideTo(s.activeIndex + l, e, t, i);
        },
        slidePrev: function (e, t, i) {
          void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
          const s = this,
            {
              params: n,
              animating: r,
              snapGrid: a,
              slidesGrid: o,
              rtlTranslate: l,
              enabled: u,
            } = s;
          if (!u) return s;
          if (n.loop) {
            if (r && n.loopPreventsSlide) return !1;
            s.loopFix(), (s._clientLeft = s.$wrapperEl[0].clientLeft);
          }
          function c(e) {
            return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
          }
          const d = c(l ? s.translate : -s.translate),
            p = a.map((e) => c(e));
          let h = a[p.indexOf(d) - 1];
          if (void 0 === h && n.cssMode) {
            let e;
            a.forEach((t, i) => {
              d >= t && (e = i);
            }),
              void 0 !== e && (h = a[e > 0 ? e - 1 : e]);
          }
          let f = 0;
          if (
            (void 0 !== h &&
              ((f = o.indexOf(h)),
              f < 0 && (f = s.activeIndex - 1),
              "auto" === n.slidesPerView &&
                1 === n.slidesPerGroup &&
                n.slidesPerGroupAuto &&
                ((f = f - s.slidesPerViewDynamic("previous", !0) + 1),
                (f = Math.max(f, 0)))),
            n.rewind && s.isBeginning)
          ) {
            const n =
              s.params.virtual && s.params.virtual.enabled && s.virtual
                ? s.virtual.slides.length - 1
                : s.slides.length - 1;
            return s.slideTo(n, e, t, i);
          }
          return s.slideTo(f, e, t, i);
        },
        slideReset: function (e, t, i) {
          return (
            void 0 === e && (e = this.params.speed),
            void 0 === t && (t = !0),
            this.slideTo(this.activeIndex, e, t, i)
          );
        },
        slideToClosest: function (e, t, i, s) {
          void 0 === e && (e = this.params.speed),
            void 0 === t && (t = !0),
            void 0 === s && (s = 0.5);
          const n = this;
          let r = n.activeIndex;
          const a = Math.min(n.params.slidesPerGroupSkip, r),
            o = a + Math.floor((r - a) / n.params.slidesPerGroup),
            l = n.rtlTranslate ? n.translate : -n.translate;
          if (l >= n.snapGrid[o]) {
            const e = n.snapGrid[o];
            l - e > (n.snapGrid[o + 1] - e) * s &&
              (r += n.params.slidesPerGroup);
          } else {
            const e = n.snapGrid[o - 1];
            l - e <= (n.snapGrid[o] - e) * s && (r -= n.params.slidesPerGroup);
          }
          return (
            (r = Math.max(r, 0)),
            (r = Math.min(r, n.slidesGrid.length - 1)),
            n.slideTo(r, e, t, i)
          );
        },
        slideToClickedSlide: function () {
          const e = this,
            { params: t, $wrapperEl: i } = e,
            s =
              "auto" === t.slidesPerView
                ? e.slidesPerViewDynamic()
                : t.slidesPerView;
          let n,
            r = e.clickedIndex;
          if (t.loop) {
            if (e.animating) return;
            (n = parseInt(
              u(e.clickedSlide).attr("data-swiper-slide-index"),
              10
            )),
              t.centeredSlides
                ? r < e.loopedSlides - s / 2 ||
                  r > e.slides.length - e.loopedSlides + s / 2
                  ? (e.loopFix(),
                    (r = i
                      .children(
                        `.${t.slideClass}[data-swiper-slide-index="${n}"]:not(.${t.slideDuplicateClass})`
                      )
                      .eq(0)
                      .index()),
                    d(() => {
                      e.slideTo(r);
                    }))
                  : e.slideTo(r)
                : r > e.slides.length - s
                ? (e.loopFix(),
                  (r = i
                    .children(
                      `.${t.slideClass}[data-swiper-slide-index="${n}"]:not(.${t.slideDuplicateClass})`
                    )
                    .eq(0)
                    .index()),
                  d(() => {
                    e.slideTo(r);
                  }))
                : e.slideTo(r);
          } else e.slideTo(r);
        },
      },
      A = {
        loopCreate: function () {
          const e = this,
            t = s(),
            { params: i, $wrapperEl: n } = e,
            r = n.children().length > 0 ? u(n.children()[0].parentNode) : n;
          r.children(`.${i.slideClass}.${i.slideDuplicateClass}`).remove();
          let a = r.children(`.${i.slideClass}`);
          if (i.loopFillGroupWithBlank) {
            const e = i.slidesPerGroup - (a.length % i.slidesPerGroup);
            if (e !== i.slidesPerGroup) {
              for (let s = 0; s < e; s += 1) {
                const e = u(t.createElement("div")).addClass(
                  `${i.slideClass} ${i.slideBlankClass}`
                );
                r.append(e);
              }
              a = r.children(`.${i.slideClass}`);
            }
          }
          "auto" !== i.slidesPerView ||
            i.loopedSlides ||
            (i.loopedSlides = a.length),
            (e.loopedSlides = Math.ceil(
              parseFloat(i.loopedSlides || i.slidesPerView, 10)
            )),
            (e.loopedSlides += i.loopAdditionalSlides),
            e.loopedSlides > a.length &&
              e.params.loopedSlidesLimit &&
              (e.loopedSlides = a.length);
          const o = [],
            l = [];
          a.each((e, t) => {
            u(e).attr("data-swiper-slide-index", t);
          });
          for (let t = 0; t < e.loopedSlides; t += 1) {
            const e = t - Math.floor(t / a.length) * a.length;
            l.push(a.eq(e)[0]), o.unshift(a.eq(a.length - e - 1)[0]);
          }
          for (let e = 0; e < l.length; e += 1)
            r.append(u(l[e].cloneNode(!0)).addClass(i.slideDuplicateClass));
          for (let e = o.length - 1; e >= 0; e -= 1)
            r.prepend(u(o[e].cloneNode(!0)).addClass(i.slideDuplicateClass));
        },
        loopFix: function () {
          const e = this;
          e.emit("beforeLoopFix");
          const {
            activeIndex: t,
            slides: i,
            loopedSlides: s,
            allowSlidePrev: n,
            allowSlideNext: r,
            snapGrid: a,
            rtlTranslate: o,
          } = e;
          let l;
          (e.allowSlidePrev = !0), (e.allowSlideNext = !0);
          const u = -a[t] - e.getTranslate();
          t < s
            ? ((l = i.length - 3 * s + t),
              (l += s),
              e.slideTo(l, 0, !1, !0) &&
                0 !== u &&
                e.setTranslate((o ? -e.translate : e.translate) - u))
            : t >= i.length - s &&
              ((l = -i.length + t + s),
              (l += s),
              e.slideTo(l, 0, !1, !0) &&
                0 !== u &&
                e.setTranslate((o ? -e.translate : e.translate) - u)),
            (e.allowSlidePrev = n),
            (e.allowSlideNext = r),
            e.emit("loopFix");
        },
        loopDestroy: function () {
          const { $wrapperEl: e, params: t, slides: i } = this;
          e
            .children(
              `.${t.slideClass}.${t.slideDuplicateClass},.${t.slideClass}.${t.slideBlankClass}`
            )
            .remove(),
            i.removeAttr("data-swiper-slide-index");
        },
      };
    function P(e) {
      const t = this,
        i = s(),
        n = r(),
        a = t.touchEventsData,
        { params: o, touches: l, enabled: c } = t;
      if (!c) return;
      if (t.animating && o.preventInteractionOnTransition) return;
      !t.animating && o.cssMode && o.loop && t.loopFix();
      let d = e;
      d.originalEvent && (d = d.originalEvent);
      let h = u(d.target);
      if ("wrapper" === o.touchEventsTarget && !h.closest(t.wrapperEl).length)
        return;
      if (
        ((a.isTouchEvent = "touchstart" === d.type),
        !a.isTouchEvent && "which" in d && 3 === d.which)
      )
        return;
      if (!a.isTouchEvent && "button" in d && d.button > 0) return;
      if (a.isTouched && a.isMoved) return;
      const f = !!o.noSwipingClass && "" !== o.noSwipingClass,
        m = e.composedPath ? e.composedPath() : e.path;
      f && d.target && d.target.shadowRoot && m && (h = u(m[0]));
      const g = o.noSwipingSelector
          ? o.noSwipingSelector
          : `.${o.noSwipingClass}`,
        v = !(!d.target || !d.target.shadowRoot);
      if (
        o.noSwiping &&
        (v
          ? (function (e, t) {
              return (
                void 0 === t && (t = this),
                (function t(i) {
                  if (!i || i === s() || i === r()) return null;
                  i.assignedSlot && (i = i.assignedSlot);
                  const n = i.closest(e);
                  return n || i.getRootNode
                    ? n || t(i.getRootNode().host)
                    : null;
                })(t)
              );
            })(g, h[0])
          : h.closest(g)[0])
      )
        return void (t.allowClick = !0);
      if (o.swipeHandler && !h.closest(o.swipeHandler)[0]) return;
      (l.currentX =
        "touchstart" === d.type ? d.targetTouches[0].pageX : d.pageX),
        (l.currentY =
          "touchstart" === d.type ? d.targetTouches[0].pageY : d.pageY);
      const y = l.currentX,
        b = l.currentY,
        w = o.edgeSwipeDetection || o.iOSEdgeSwipeDetection,
        D = o.edgeSwipeThreshold || o.iOSEdgeSwipeThreshold;
      if (w && (y <= D || y >= n.innerWidth - D)) {
        if ("prevent" !== w) return;
        e.preventDefault();
      }
      if (
        (Object.assign(a, {
          isTouched: !0,
          isMoved: !1,
          allowTouchCallbacks: !0,
          isScrolling: void 0,
          startMoving: void 0,
        }),
        (l.startX = y),
        (l.startY = b),
        (a.touchStartTime = p()),
        (t.allowClick = !0),
        t.updateSize(),
        (t.swipeDirection = void 0),
        o.threshold > 0 && (a.allowThresholdMove = !1),
        "touchstart" !== d.type)
      ) {
        let e = !0;
        h.is(a.focusableElements) &&
          ((e = !1), "SELECT" === h[0].nodeName && (a.isTouched = !1)),
          i.activeElement &&
            u(i.activeElement).is(a.focusableElements) &&
            i.activeElement !== h[0] &&
            i.activeElement.blur();
        const s = e && t.allowTouchMove && o.touchStartPreventDefault;
        (!o.touchStartForcePreventDefault && !s) ||
          h[0].isContentEditable ||
          d.preventDefault();
      }
      t.params.freeMode &&
        t.params.freeMode.enabled &&
        t.freeMode &&
        t.animating &&
        !o.cssMode &&
        t.freeMode.onTouchStart(),
        t.emit("touchStart", d);
    }
    function F(e) {
      const t = s(),
        i = this,
        n = i.touchEventsData,
        { params: r, touches: a, rtlTranslate: o, enabled: l } = i;
      if (!l) return;
      let c = e;
      if ((c.originalEvent && (c = c.originalEvent), !n.isTouched))
        return void (
          n.startMoving &&
          n.isScrolling &&
          i.emit("touchMoveOpposite", c)
        );
      if (n.isTouchEvent && "touchmove" !== c.type) return;
      const d =
          "touchmove" === c.type &&
          c.targetTouches &&
          (c.targetTouches[0] || c.changedTouches[0]),
        h = "touchmove" === c.type ? d.pageX : c.pageX,
        f = "touchmove" === c.type ? d.pageY : c.pageY;
      if (c.preventedByNestedSwiper) return (a.startX = h), void (a.startY = f);
      if (!i.allowTouchMove)
        return (
          u(c.target).is(n.focusableElements) || (i.allowClick = !1),
          void (
            n.isTouched &&
            (Object.assign(a, {
              startX: h,
              startY: f,
              currentX: h,
              currentY: f,
            }),
            (n.touchStartTime = p()))
          )
        );
      if (n.isTouchEvent && r.touchReleaseOnEdges && !r.loop)
        if (i.isVertical()) {
          if (
            (f < a.startY && i.translate <= i.maxTranslate()) ||
            (f > a.startY && i.translate >= i.minTranslate())
          )
            return (n.isTouched = !1), void (n.isMoved = !1);
        } else if (
          (h < a.startX && i.translate <= i.maxTranslate()) ||
          (h > a.startX && i.translate >= i.minTranslate())
        )
          return;
      if (
        n.isTouchEvent &&
        t.activeElement &&
        c.target === t.activeElement &&
        u(c.target).is(n.focusableElements)
      )
        return (n.isMoved = !0), void (i.allowClick = !1);
      if (
        (n.allowTouchCallbacks && i.emit("touchMove", c),
        c.targetTouches && c.targetTouches.length > 1)
      )
        return;
      (a.currentX = h), (a.currentY = f);
      const m = a.currentX - a.startX,
        g = a.currentY - a.startY;
      if (i.params.threshold && Math.sqrt(m ** 2 + g ** 2) < i.params.threshold)
        return;
      if (void 0 === n.isScrolling) {
        let e;
        (i.isHorizontal() && a.currentY === a.startY) ||
        (i.isVertical() && a.currentX === a.startX)
          ? (n.isScrolling = !1)
          : m * m + g * g >= 25 &&
            ((e = (180 * Math.atan2(Math.abs(g), Math.abs(m))) / Math.PI),
            (n.isScrolling = i.isHorizontal()
              ? e > r.touchAngle
              : 90 - e > r.touchAngle));
      }
      if (
        (n.isScrolling && i.emit("touchMoveOpposite", c),
        void 0 === n.startMoving &&
          ((a.currentX === a.startX && a.currentY === a.startY) ||
            (n.startMoving = !0)),
        n.isScrolling)
      )
        return void (n.isTouched = !1);
      if (!n.startMoving) return;
      (i.allowClick = !1),
        !r.cssMode && c.cancelable && c.preventDefault(),
        r.touchMoveStopPropagation && !r.nested && c.stopPropagation(),
        n.isMoved ||
          (r.loop && !r.cssMode && i.loopFix(),
          (n.startTranslate = i.getTranslate()),
          i.setTransition(0),
          i.animating &&
            i.$wrapperEl.trigger("webkitTransitionEnd transitionend"),
          (n.allowMomentumBounce = !1),
          !r.grabCursor ||
            (!0 !== i.allowSlideNext && !0 !== i.allowSlidePrev) ||
            i.setGrabCursor(!0),
          i.emit("sliderFirstMove", c)),
        i.emit("sliderMove", c),
        (n.isMoved = !0);
      let v = i.isHorizontal() ? m : g;
      (a.diff = v),
        (v *= r.touchRatio),
        o && (v = -v),
        (i.swipeDirection = v > 0 ? "prev" : "next"),
        (n.currentTranslate = v + n.startTranslate);
      let y = !0,
        b = r.resistanceRatio;
      if (
        (r.touchReleaseOnEdges && (b = 0),
        v > 0 && n.currentTranslate > i.minTranslate()
          ? ((y = !1),
            r.resistance &&
              (n.currentTranslate =
                i.minTranslate() -
                1 +
                (-i.minTranslate() + n.startTranslate + v) ** b))
          : v < 0 &&
            n.currentTranslate < i.maxTranslate() &&
            ((y = !1),
            r.resistance &&
              (n.currentTranslate =
                i.maxTranslate() +
                1 -
                (i.maxTranslate() - n.startTranslate - v) ** b)),
        y && (c.preventedByNestedSwiper = !0),
        !i.allowSlideNext &&
          "next" === i.swipeDirection &&
          n.currentTranslate < n.startTranslate &&
          (n.currentTranslate = n.startTranslate),
        !i.allowSlidePrev &&
          "prev" === i.swipeDirection &&
          n.currentTranslate > n.startTranslate &&
          (n.currentTranslate = n.startTranslate),
        i.allowSlidePrev ||
          i.allowSlideNext ||
          (n.currentTranslate = n.startTranslate),
        r.threshold > 0)
      ) {
        if (!(Math.abs(v) > r.threshold || n.allowThresholdMove))
          return void (n.currentTranslate = n.startTranslate);
        if (!n.allowThresholdMove)
          return (
            (n.allowThresholdMove = !0),
            (a.startX = a.currentX),
            (a.startY = a.currentY),
            (n.currentTranslate = n.startTranslate),
            void (a.diff = i.isHorizontal()
              ? a.currentX - a.startX
              : a.currentY - a.startY)
          );
      }
      r.followFinger &&
        !r.cssMode &&
        (((r.freeMode && r.freeMode.enabled && i.freeMode) ||
          r.watchSlidesProgress) &&
          (i.updateActiveIndex(), i.updateSlidesClasses()),
        i.params.freeMode &&
          r.freeMode.enabled &&
          i.freeMode &&
          i.freeMode.onTouchMove(),
        i.updateProgress(n.currentTranslate),
        i.setTranslate(n.currentTranslate));
    }
    function $(e) {
      const t = this,
        i = t.touchEventsData,
        {
          params: s,
          touches: n,
          rtlTranslate: r,
          slidesGrid: a,
          enabled: o,
        } = t;
      if (!o) return;
      let l = e;
      if (
        (l.originalEvent && (l = l.originalEvent),
        i.allowTouchCallbacks && t.emit("touchEnd", l),
        (i.allowTouchCallbacks = !1),
        !i.isTouched)
      )
        return (
          i.isMoved && s.grabCursor && t.setGrabCursor(!1),
          (i.isMoved = !1),
          void (i.startMoving = !1)
        );
      s.grabCursor &&
        i.isMoved &&
        i.isTouched &&
        (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) &&
        t.setGrabCursor(!1);
      const u = p(),
        c = u - i.touchStartTime;
      if (t.allowClick) {
        const e = l.path || (l.composedPath && l.composedPath());
        t.updateClickedSlide((e && e[0]) || l.target),
          t.emit("tap click", l),
          c < 300 &&
            u - i.lastClickTime < 300 &&
            t.emit("doubleTap doubleClick", l);
      }
      if (
        ((i.lastClickTime = p()),
        d(() => {
          t.destroyed || (t.allowClick = !0);
        }),
        !i.isTouched ||
          !i.isMoved ||
          !t.swipeDirection ||
          0 === n.diff ||
          i.currentTranslate === i.startTranslate)
      )
        return (i.isTouched = !1), (i.isMoved = !1), void (i.startMoving = !1);
      let h;
      if (
        ((i.isTouched = !1),
        (i.isMoved = !1),
        (i.startMoving = !1),
        (h = s.followFinger
          ? r
            ? t.translate
            : -t.translate
          : -i.currentTranslate),
        s.cssMode)
      )
        return;
      if (t.params.freeMode && s.freeMode.enabled)
        return void t.freeMode.onTouchEnd({ currentPos: h });
      let f = 0,
        m = t.slidesSizesGrid[0];
      for (
        let e = 0;
        e < a.length;
        e += e < s.slidesPerGroupSkip ? 1 : s.slidesPerGroup
      ) {
        const t = e < s.slidesPerGroupSkip - 1 ? 1 : s.slidesPerGroup;
        void 0 !== a[e + t]
          ? h >= a[e] && h < a[e + t] && ((f = e), (m = a[e + t] - a[e]))
          : h >= a[e] && ((f = e), (m = a[a.length - 1] - a[a.length - 2]));
      }
      let g = null,
        v = null;
      s.rewind &&
        (t.isBeginning
          ? (v =
              t.params.virtual && t.params.virtual.enabled && t.virtual
                ? t.virtual.slides.length - 1
                : t.slides.length - 1)
          : t.isEnd && (g = 0));
      const y = (h - a[f]) / m,
        b = f < s.slidesPerGroupSkip - 1 ? 1 : s.slidesPerGroup;
      if (c > s.longSwipesMs) {
        if (!s.longSwipes) return void t.slideTo(t.activeIndex);
        "next" === t.swipeDirection &&
          (y >= s.longSwipesRatio
            ? t.slideTo(s.rewind && t.isEnd ? g : f + b)
            : t.slideTo(f)),
          "prev" === t.swipeDirection &&
            (y > 1 - s.longSwipesRatio
              ? t.slideTo(f + b)
              : null !== v && y < 0 && Math.abs(y) > s.longSwipesRatio
              ? t.slideTo(v)
              : t.slideTo(f));
      } else {
        if (!s.shortSwipes) return void t.slideTo(t.activeIndex);
        !t.navigation ||
        (l.target !== t.navigation.nextEl && l.target !== t.navigation.prevEl)
          ? ("next" === t.swipeDirection && t.slideTo(null !== g ? g : f + b),
            "prev" === t.swipeDirection && t.slideTo(null !== v ? v : f))
          : l.target === t.navigation.nextEl
          ? t.slideTo(f + b)
          : t.slideTo(f);
      }
    }
    function O() {
      const e = this,
        { params: t, el: i } = e;
      if (i && 0 === i.offsetWidth) return;
      t.breakpoints && e.setBreakpoint();
      const { allowSlideNext: s, allowSlidePrev: n, snapGrid: r } = e;
      (e.allowSlideNext = !0),
        (e.allowSlidePrev = !0),
        e.updateSize(),
        e.updateSlides(),
        e.updateSlidesClasses(),
        ("auto" === t.slidesPerView || t.slidesPerView > 1) &&
        e.isEnd &&
        !e.isBeginning &&
        !e.params.centeredSlides
          ? e.slideTo(e.slides.length - 1, 0, !1, !0)
          : e.slideTo(e.activeIndex, 0, !1, !0),
        e.autoplay &&
          e.autoplay.running &&
          e.autoplay.paused &&
          e.autoplay.run(),
        (e.allowSlidePrev = n),
        (e.allowSlideNext = s),
        e.params.watchOverflow && r !== e.snapGrid && e.checkOverflow();
    }
    function L(e) {
      const t = this;
      t.enabled &&
        (t.allowClick ||
          (t.params.preventClicks && e.preventDefault(),
          t.params.preventClicksPropagation &&
            t.animating &&
            (e.stopPropagation(), e.stopImmediatePropagation())));
    }
    function I() {
      const e = this,
        { wrapperEl: t, rtlTranslate: i, enabled: s } = e;
      if (!s) return;
      let n;
      (e.previousTranslate = e.translate),
        e.isHorizontal()
          ? (e.translate = -t.scrollLeft)
          : (e.translate = -t.scrollTop),
        0 === e.translate && (e.translate = 0),
        e.updateActiveIndex(),
        e.updateSlidesClasses();
      const r = e.maxTranslate() - e.minTranslate();
      (n = 0 === r ? 0 : (e.translate - e.minTranslate()) / r),
        n !== e.progress && e.updateProgress(i ? -e.translate : e.translate),
        e.emit("setTranslate", e.translate, !1);
    }
    let z = !1;
    function N() {}
    const B = (e, t) => {
      const i = s(),
        {
          params: n,
          touchEvents: r,
          el: a,
          wrapperEl: o,
          device: l,
          support: u,
        } = e,
        c = !!n.nested,
        d = "on" === t ? "addEventListener" : "removeEventListener",
        p = t;
      if (u.touch) {
        const t = !(
          "touchstart" !== r.start ||
          !u.passiveListener ||
          !n.passiveListeners
        ) && { passive: !0, capture: !1 };
        a[d](r.start, e.onTouchStart, t),
          a[d](
            r.move,
            e.onTouchMove,
            u.passiveListener ? { passive: !1, capture: c } : c
          ),
          a[d](r.end, e.onTouchEnd, t),
          r.cancel && a[d](r.cancel, e.onTouchEnd, t);
      } else
        a[d](r.start, e.onTouchStart, !1),
          i[d](r.move, e.onTouchMove, c),
          i[d](r.end, e.onTouchEnd, !1);
      (n.preventClicks || n.preventClicksPropagation) &&
        a[d]("click", e.onClick, !0),
        n.cssMode && o[d]("scroll", e.onScroll),
        n.updateOnWindowResize
          ? e[p](
              l.ios || l.android
                ? "resize orientationchange observerUpdate"
                : "resize observerUpdate",
              O,
              !0
            )
          : e[p]("observerUpdate", O, !0);
    };
    var R = {
      attachEvents: function () {
        const e = this,
          t = s(),
          { params: i, support: n } = e;
        (e.onTouchStart = P.bind(e)),
          (e.onTouchMove = F.bind(e)),
          (e.onTouchEnd = $.bind(e)),
          i.cssMode && (e.onScroll = I.bind(e)),
          (e.onClick = L.bind(e)),
          n.touch && !z && (t.addEventListener("touchstart", N), (z = !0)),
          B(e, "on");
      },
      detachEvents: function () {
        B(this, "off");
      },
    };
    const H = (e, t) => e.grid && t.grid && t.grid.rows > 1;
    var W = {
        addClasses: function () {
          const e = this,
            {
              classNames: t,
              params: i,
              rtl: s,
              $el: n,
              device: r,
              support: a,
            } = e,
            o = (function (e, t) {
              const i = [];
              return (
                e.forEach((e) => {
                  "object" == typeof e
                    ? Object.keys(e).forEach((s) => {
                        e[s] && i.push(t + s);
                      })
                    : "string" == typeof e && i.push(t + e);
                }),
                i
              );
            })(
              [
                "initialized",
                i.direction,
                { "pointer-events": !a.touch },
                { "free-mode": e.params.freeMode && i.freeMode.enabled },
                { autoheight: i.autoHeight },
                { rtl: s },
                { grid: i.grid && i.grid.rows > 1 },
                {
                  "grid-column":
                    i.grid && i.grid.rows > 1 && "column" === i.grid.fill,
                },
                { android: r.android },
                { ios: r.ios },
                { "css-mode": i.cssMode },
                { centered: i.cssMode && i.centeredSlides },
                { "watch-progress": i.watchSlidesProgress },
              ],
              i.containerModifierClass
            );
          t.push(...o), n.addClass([...t].join(" ")), e.emitContainerClasses();
        },
        removeClasses: function () {
          const { $el: e, classNames: t } = this;
          e.removeClass(t.join(" ")), this.emitContainerClasses();
        },
      },
      j = {
        init: !0,
        direction: "horizontal",
        touchEventsTarget: "wrapper",
        initialSlide: 0,
        speed: 300,
        cssMode: !1,
        updateOnWindowResize: !0,
        resizeObserver: !0,
        nested: !1,
        createElements: !1,
        enabled: !0,
        focusableElements:
          "input, select, option, textarea, button, video, label",
        width: null,
        height: null,
        preventInteractionOnTransition: !1,
        userAgent: null,
        url: null,
        edgeSwipeDetection: !1,
        edgeSwipeThreshold: 20,
        autoHeight: !1,
        setWrapperSize: !1,
        virtualTranslate: !1,
        effect: "slide",
        breakpoints: void 0,
        breakpointsBase: "window",
        spaceBetween: 0,
        slidesPerView: 1,
        slidesPerGroup: 1,
        slidesPerGroupSkip: 0,
        slidesPerGroupAuto: !1,
        centeredSlides: !1,
        centeredSlidesBounds: !1,
        slidesOffsetBefore: 0,
        slidesOffsetAfter: 0,
        normalizeSlideIndex: !0,
        centerInsufficientSlides: !1,
        watchOverflow: !0,
        roundLengths: !1,
        touchRatio: 1,
        touchAngle: 45,
        simulateTouch: !0,
        shortSwipes: !0,
        longSwipes: !0,
        longSwipesRatio: 0.5,
        longSwipesMs: 300,
        followFinger: !0,
        allowTouchMove: !0,
        threshold: 0,
        touchMoveStopPropagation: !1,
        touchStartPreventDefault: !0,
        touchStartForcePreventDefault: !1,
        touchReleaseOnEdges: !1,
        uniqueNavElements: !0,
        resistance: !0,
        resistanceRatio: 0.85,
        watchSlidesProgress: !1,
        grabCursor: !1,
        preventClicks: !0,
        preventClicksPropagation: !0,
        slideToClickedSlide: !1,
        preloadImages: !0,
        updateOnImagesReady: !0,
        loop: !1,
        loopAdditionalSlides: 0,
        loopedSlides: null,
        loopedSlidesLimit: !0,
        loopFillGroupWithBlank: !1,
        loopPreventsSlide: !0,
        rewind: !1,
        allowSlidePrev: !0,
        allowSlideNext: !0,
        swipeHandler: null,
        noSwiping: !0,
        noSwipingClass: "swiper-no-swiping",
        noSwipingSelector: null,
        passiveListeners: !0,
        maxBackfaceHiddenSlides: 10,
        containerModifierClass: "swiper-",
        slideClass: "swiper-slide",
        slideBlankClass: "swiper-slide-invisible-blank",
        slideActiveClass: "swiper-slide-active",
        slideDuplicateActiveClass: "swiper-slide-duplicate-active",
        slideVisibleClass: "swiper-slide-visible",
        slideDuplicateClass: "swiper-slide-duplicate",
        slideNextClass: "swiper-slide-next",
        slideDuplicateNextClass: "swiper-slide-duplicate-next",
        slidePrevClass: "swiper-slide-prev",
        slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
        wrapperClass: "swiper-wrapper",
        runCallbacksOnInit: !0,
        _emitClasses: !1,
      };
    function Y(e, t) {
      return function (i) {
        void 0 === i && (i = {});
        const s = Object.keys(i)[0],
          n = i[s];
        "object" == typeof n && null !== n
          ? (["navigation", "pagination", "scrollbar"].indexOf(s) >= 0 &&
              !0 === e[s] &&
              (e[s] = { auto: !0 }),
            s in e && "enabled" in n
              ? (!0 === e[s] && (e[s] = { enabled: !0 }),
                "object" != typeof e[s] ||
                  "enabled" in e[s] ||
                  (e[s].enabled = !0),
                e[s] || (e[s] = { enabled: !1 }),
                g(t, i))
              : g(t, i))
          : g(t, i);
      };
    }
    const X = {
        eventsEmitter: E,
        update: _,
        translate: S,
        transition: {
          setTransition: function (e, t) {
            const i = this;
            i.params.cssMode || i.$wrapperEl.transition(e),
              i.emit("setTransition", e, t);
          },
          transitionStart: function (e, t) {
            void 0 === e && (e = !0);
            const i = this,
              { params: s } = i;
            s.cssMode ||
              (s.autoHeight && i.updateAutoHeight(),
              M({ swiper: i, runCallbacks: e, direction: t, step: "Start" }));
          },
          transitionEnd: function (e, t) {
            void 0 === e && (e = !0);
            const i = this,
              { params: s } = i;
            (i.animating = !1),
              s.cssMode ||
                (i.setTransition(0),
                M({ swiper: i, runCallbacks: e, direction: t, step: "End" }));
          },
        },
        slide: k,
        loop: A,
        grabCursor: {
          setGrabCursor: function (e) {
            const t = this;
            if (
              t.support.touch ||
              !t.params.simulateTouch ||
              (t.params.watchOverflow && t.isLocked) ||
              t.params.cssMode
            )
              return;
            const i =
              "container" === t.params.touchEventsTarget ? t.el : t.wrapperEl;
            (i.style.cursor = "move"),
              (i.style.cursor = e ? "grabbing" : "grab");
          },
          unsetGrabCursor: function () {
            const e = this;
            e.support.touch ||
              (e.params.watchOverflow && e.isLocked) ||
              e.params.cssMode ||
              (e[
                "container" === e.params.touchEventsTarget ? "el" : "wrapperEl"
              ].style.cursor = "");
          },
        },
        events: R,
        breakpoints: {
          setBreakpoint: function () {
            const e = this,
              {
                activeIndex: t,
                initialized: i,
                loopedSlides: s = 0,
                params: n,
                $el: r,
              } = e,
              a = n.breakpoints;
            if (!a || (a && 0 === Object.keys(a).length)) return;
            const o = e.getBreakpoint(a, e.params.breakpointsBase, e.el);
            if (!o || e.currentBreakpoint === o) return;
            const l = (o in a ? a[o] : void 0) || e.originalParams,
              u = H(e, n),
              c = H(e, l),
              d = n.enabled;
            u && !c
              ? (r.removeClass(
                  `${n.containerModifierClass}grid ${n.containerModifierClass}grid-column`
                ),
                e.emitContainerClasses())
              : !u &&
                c &&
                (r.addClass(`${n.containerModifierClass}grid`),
                ((l.grid.fill && "column" === l.grid.fill) ||
                  (!l.grid.fill && "column" === n.grid.fill)) &&
                  r.addClass(`${n.containerModifierClass}grid-column`),
                e.emitContainerClasses()),
              ["navigation", "pagination", "scrollbar"].forEach((t) => {
                const i = n[t] && n[t].enabled,
                  s = l[t] && l[t].enabled;
                i && !s && e[t].disable(), !i && s && e[t].enable();
              });
            const p = l.direction && l.direction !== n.direction,
              h = n.loop && (l.slidesPerView !== n.slidesPerView || p);
            p && i && e.changeDirection(), g(e.params, l);
            const f = e.params.enabled;
            Object.assign(e, {
              allowTouchMove: e.params.allowTouchMove,
              allowSlideNext: e.params.allowSlideNext,
              allowSlidePrev: e.params.allowSlidePrev,
            }),
              d && !f ? e.disable() : !d && f && e.enable(),
              (e.currentBreakpoint = o),
              e.emit("_beforeBreakpoint", l),
              h &&
                i &&
                (e.loopDestroy(),
                e.loopCreate(),
                e.updateSlides(),
                e.slideTo(t - s + e.loopedSlides, 0, !1)),
              e.emit("breakpoint", l);
          },
          getBreakpoint: function (e, t, i) {
            if (
              (void 0 === t && (t = "window"), !e || ("container" === t && !i))
            )
              return;
            let s = !1;
            const n = r(),
              a = "window" === t ? n.innerHeight : i.clientHeight,
              o = Object.keys(e).map((e) => {
                if ("string" == typeof e && 0 === e.indexOf("@")) {
                  const t = parseFloat(e.substr(1));
                  return { value: a * t, point: e };
                }
                return { value: e, point: e };
              });
            o.sort((e, t) => parseInt(e.value, 10) - parseInt(t.value, 10));
            for (let e = 0; e < o.length; e += 1) {
              const { point: r, value: a } = o[e];
              "window" === t
                ? n.matchMedia(`(min-width: ${a}px)`).matches && (s = r)
                : a <= i.clientWidth && (s = r);
            }
            return s || "max";
          },
        },
        checkOverflow: {
          checkOverflow: function () {
            const e = this,
              { isLocked: t, params: i } = e,
              { slidesOffsetBefore: s } = i;
            if (s) {
              const t = e.slides.length - 1,
                i = e.slidesGrid[t] + e.slidesSizesGrid[t] + 2 * s;
              e.isLocked = e.size > i;
            } else e.isLocked = 1 === e.snapGrid.length;
            !0 === i.allowSlideNext && (e.allowSlideNext = !e.isLocked),
              !0 === i.allowSlidePrev && (e.allowSlidePrev = !e.isLocked),
              t && t !== e.isLocked && (e.isEnd = !1),
              t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock");
          },
        },
        classes: W,
        images: {
          loadImage: function (e, t, i, s, n, a) {
            const o = r();
            let l;
            function c() {
              a && a();
            }
            u(e).parent("picture")[0] || (e.complete && n)
              ? c()
              : t
              ? ((l = new o.Image()),
                (l.onload = c),
                (l.onerror = c),
                s && (l.sizes = s),
                i && (l.srcset = i),
                t && (l.src = t))
              : c();
          },
          preloadImages: function () {
            const e = this;
            function t() {
              null != e &&
                e &&
                !e.destroyed &&
                (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1),
                e.imagesLoaded === e.imagesToLoad.length &&
                  (e.params.updateOnImagesReady && e.update(),
                  e.emit("imagesReady")));
            }
            e.imagesToLoad = e.$el.find("img");
            for (let i = 0; i < e.imagesToLoad.length; i += 1) {
              const s = e.imagesToLoad[i];
              e.loadImage(
                s,
                s.currentSrc || s.getAttribute("src"),
                s.srcset || s.getAttribute("srcset"),
                s.sizes || s.getAttribute("sizes"),
                !0,
                t
              );
            }
          },
        },
      },
      q = {};
    class V {
      constructor() {
        let e, t;
        for (var i = arguments.length, s = new Array(i), n = 0; n < i; n++)
          s[n] = arguments[n];
        if (
          (1 === s.length &&
          s[0].constructor &&
          "Object" === Object.prototype.toString.call(s[0]).slice(8, -1)
            ? (t = s[0])
            : ([e, t] = s),
          t || (t = {}),
          (t = g({}, t)),
          e && !t.el && (t.el = e),
          t.el && u(t.el).length > 1)
        ) {
          const e = [];
          return (
            u(t.el).each((i) => {
              const s = g({}, t, { el: i });
              e.push(new V(s));
            }),
            e
          );
        }
        const r = this;
        (r.__swiper__ = !0),
          (r.support = x()),
          (r.device = C({ userAgent: t.userAgent })),
          (r.browser = T()),
          (r.eventsListeners = {}),
          (r.eventsAnyListeners = []),
          (r.modules = [...r.__modules__]),
          t.modules && Array.isArray(t.modules) && r.modules.push(...t.modules);
        const a = {};
        r.modules.forEach((e) => {
          e({
            swiper: r,
            extendParams: Y(t, a),
            on: r.on.bind(r),
            once: r.once.bind(r),
            off: r.off.bind(r),
            emit: r.emit.bind(r),
          });
        });
        const o = g({}, j, a);
        return (
          (r.params = g({}, o, q, t)),
          (r.originalParams = g({}, r.params)),
          (r.passedParams = g({}, t)),
          r.params &&
            r.params.on &&
            Object.keys(r.params.on).forEach((e) => {
              r.on(e, r.params.on[e]);
            }),
          r.params && r.params.onAny && r.onAny(r.params.onAny),
          (r.$ = u),
          Object.assign(r, {
            enabled: r.params.enabled,
            el: e,
            classNames: [],
            slides: u(),
            slidesGrid: [],
            snapGrid: [],
            slidesSizesGrid: [],
            isHorizontal: () => "horizontal" === r.params.direction,
            isVertical: () => "vertical" === r.params.direction,
            activeIndex: 0,
            realIndex: 0,
            isBeginning: !0,
            isEnd: !1,
            translate: 0,
            previousTranslate: 0,
            progress: 0,
            velocity: 0,
            animating: !1,
            allowSlideNext: r.params.allowSlideNext,
            allowSlidePrev: r.params.allowSlidePrev,
            touchEvents: (function () {
              const e = ["touchstart", "touchmove", "touchend", "touchcancel"],
                t = ["pointerdown", "pointermove", "pointerup"];
              return (
                (r.touchEventsTouch = {
                  start: e[0],
                  move: e[1],
                  end: e[2],
                  cancel: e[3],
                }),
                (r.touchEventsDesktop = { start: t[0], move: t[1], end: t[2] }),
                r.support.touch || !r.params.simulateTouch
                  ? r.touchEventsTouch
                  : r.touchEventsDesktop
              );
            })(),
            touchEventsData: {
              isTouched: void 0,
              isMoved: void 0,
              allowTouchCallbacks: void 0,
              touchStartTime: void 0,
              isScrolling: void 0,
              currentTranslate: void 0,
              startTranslate: void 0,
              allowThresholdMove: void 0,
              focusableElements: r.params.focusableElements,
              lastClickTime: p(),
              clickTimeout: void 0,
              velocities: [],
              allowMomentumBounce: void 0,
              isTouchEvent: void 0,
              startMoving: void 0,
            },
            allowClick: !0,
            allowTouchMove: r.params.allowTouchMove,
            touches: {
              startX: 0,
              startY: 0,
              currentX: 0,
              currentY: 0,
              diff: 0,
            },
            imagesToLoad: [],
            imagesLoaded: 0,
          }),
          r.emit("_swiper"),
          r.params.init && r.init(),
          r
        );
      }
      enable() {
        const e = this;
        e.enabled ||
          ((e.enabled = !0),
          e.params.grabCursor && e.setGrabCursor(),
          e.emit("enable"));
      }
      disable() {
        const e = this;
        e.enabled &&
          ((e.enabled = !1),
          e.params.grabCursor && e.unsetGrabCursor(),
          e.emit("disable"));
      }
      setProgress(e, t) {
        const i = this;
        e = Math.min(Math.max(e, 0), 1);
        const s = i.minTranslate(),
          n = (i.maxTranslate() - s) * e + s;
        i.translateTo(n, void 0 === t ? 0 : t),
          i.updateActiveIndex(),
          i.updateSlidesClasses();
      }
      emitContainerClasses() {
        const e = this;
        if (!e.params._emitClasses || !e.el) return;
        const t = e.el.className
          .split(" ")
          .filter(
            (t) =>
              0 === t.indexOf("swiper") ||
              0 === t.indexOf(e.params.containerModifierClass)
          );
        e.emit("_containerClasses", t.join(" "));
      }
      getSlideClasses(e) {
        const t = this;
        return t.destroyed
          ? ""
          : e.className
              .split(" ")
              .filter(
                (e) =>
                  0 === e.indexOf("swiper-slide") ||
                  0 === e.indexOf(t.params.slideClass)
              )
              .join(" ");
      }
      emitSlidesClasses() {
        const e = this;
        if (!e.params._emitClasses || !e.el) return;
        const t = [];
        e.slides.each((i) => {
          const s = e.getSlideClasses(i);
          t.push({ slideEl: i, classNames: s }), e.emit("_slideClass", i, s);
        }),
          e.emit("_slideClasses", t);
      }
      slidesPerViewDynamic(e, t) {
        void 0 === e && (e = "current"), void 0 === t && (t = !1);
        const {
          params: i,
          slides: s,
          slidesGrid: n,
          slidesSizesGrid: r,
          size: a,
          activeIndex: o,
        } = this;
        let l = 1;
        if (i.centeredSlides) {
          let e,
            t = s[o].swiperSlideSize;
          for (let i = o + 1; i < s.length; i += 1)
            s[i] &&
              !e &&
              ((t += s[i].swiperSlideSize), (l += 1), t > a && (e = !0));
          for (let i = o - 1; i >= 0; i -= 1)
            s[i] &&
              !e &&
              ((t += s[i].swiperSlideSize), (l += 1), t > a && (e = !0));
        } else if ("current" === e)
          for (let e = o + 1; e < s.length; e += 1)
            (t ? n[e] + r[e] - n[o] < a : n[e] - n[o] < a) && (l += 1);
        else for (let e = o - 1; e >= 0; e -= 1) n[o] - n[e] < a && (l += 1);
        return l;
      }
      update() {
        const e = this;
        if (!e || e.destroyed) return;
        const { snapGrid: t, params: i } = e;
        function s() {
          const t = e.rtlTranslate ? -1 * e.translate : e.translate,
            i = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
          e.setTranslate(i), e.updateActiveIndex(), e.updateSlidesClasses();
        }
        let n;
        i.breakpoints && e.setBreakpoint(),
          e.updateSize(),
          e.updateSlides(),
          e.updateProgress(),
          e.updateSlidesClasses(),
          e.params.freeMode && e.params.freeMode.enabled
            ? (s(), e.params.autoHeight && e.updateAutoHeight())
            : ((n =
                ("auto" === e.params.slidesPerView ||
                  e.params.slidesPerView > 1) &&
                e.isEnd &&
                !e.params.centeredSlides
                  ? e.slideTo(e.slides.length - 1, 0, !1, !0)
                  : e.slideTo(e.activeIndex, 0, !1, !0)),
              n || s()),
          i.watchOverflow && t !== e.snapGrid && e.checkOverflow(),
          e.emit("update");
      }
      changeDirection(e, t) {
        void 0 === t && (t = !0);
        const i = this,
          s = i.params.direction;
        return (
          e || (e = "horizontal" === s ? "vertical" : "horizontal"),
          e === s ||
            ("horizontal" !== e && "vertical" !== e) ||
            (i.$el
              .removeClass(`${i.params.containerModifierClass}${s}`)
              .addClass(`${i.params.containerModifierClass}${e}`),
            i.emitContainerClasses(),
            (i.params.direction = e),
            i.slides.each((t) => {
              "vertical" === e ? (t.style.width = "") : (t.style.height = "");
            }),
            i.emit("changeDirection"),
            t && i.update()),
          i
        );
      }
      changeLanguageDirection(e) {
        const t = this;
        (t.rtl && "rtl" === e) ||
          (!t.rtl && "ltr" === e) ||
          ((t.rtl = "rtl" === e),
          (t.rtlTranslate = "horizontal" === t.params.direction && t.rtl),
          t.rtl
            ? (t.$el.addClass(`${t.params.containerModifierClass}rtl`),
              (t.el.dir = "rtl"))
            : (t.$el.removeClass(`${t.params.containerModifierClass}rtl`),
              (t.el.dir = "ltr")),
          t.update());
      }
      mount(e) {
        const t = this;
        if (t.mounted) return !0;
        const i = u(e || t.params.el);
        if (!(e = i[0])) return !1;
        e.swiper = t;
        const n = () =>
          `.${(t.params.wrapperClass || "").trim().split(" ").join(".")}`;
        let r = (() => {
          if (e && e.shadowRoot && e.shadowRoot.querySelector) {
            const t = u(e.shadowRoot.querySelector(n()));
            return (t.children = (e) => i.children(e)), t;
          }
          return i.children ? i.children(n()) : u(i).children(n());
        })();
        if (0 === r.length && t.params.createElements) {
          const e = s().createElement("div");
          (r = u(e)),
            (e.className = t.params.wrapperClass),
            i.append(e),
            i.children(`.${t.params.slideClass}`).each((e) => {
              r.append(e);
            });
        }
        return (
          Object.assign(t, {
            $el: i,
            el: e,
            $wrapperEl: r,
            wrapperEl: r[0],
            mounted: !0,
            rtl: "rtl" === e.dir.toLowerCase() || "rtl" === i.css("direction"),
            rtlTranslate:
              "horizontal" === t.params.direction &&
              ("rtl" === e.dir.toLowerCase() || "rtl" === i.css("direction")),
            wrongRTL: "-webkit-box" === r.css("display"),
          }),
          !0
        );
      }
      init(e) {
        const t = this;
        return (
          t.initialized ||
            !1 === t.mount(e) ||
            (t.emit("beforeInit"),
            t.params.breakpoints && t.setBreakpoint(),
            t.addClasses(),
            t.params.loop && t.loopCreate(),
            t.updateSize(),
            t.updateSlides(),
            t.params.watchOverflow && t.checkOverflow(),
            t.params.grabCursor && t.enabled && t.setGrabCursor(),
            t.params.preloadImages && t.preloadImages(),
            t.params.loop
              ? t.slideTo(
                  t.params.initialSlide + t.loopedSlides,
                  0,
                  t.params.runCallbacksOnInit,
                  !1,
                  !0
                )
              : t.slideTo(
                  t.params.initialSlide,
                  0,
                  t.params.runCallbacksOnInit,
                  !1,
                  !0
                ),
            t.attachEvents(),
            (t.initialized = !0),
            t.emit("init"),
            t.emit("afterInit")),
          t
        );
      }
      destroy(e, t) {
        void 0 === e && (e = !0), void 0 === t && (t = !0);
        const i = this,
          { params: s, $el: n, $wrapperEl: r, slides: a } = i;
        return (
          void 0 === i.params ||
            i.destroyed ||
            (i.emit("beforeDestroy"),
            (i.initialized = !1),
            i.detachEvents(),
            s.loop && i.loopDestroy(),
            t &&
              (i.removeClasses(),
              n.removeAttr("style"),
              r.removeAttr("style"),
              a &&
                a.length &&
                a
                  .removeClass(
                    [
                      s.slideVisibleClass,
                      s.slideActiveClass,
                      s.slideNextClass,
                      s.slidePrevClass,
                    ].join(" ")
                  )
                  .removeAttr("style")
                  .removeAttr("data-swiper-slide-index")),
            i.emit("destroy"),
            Object.keys(i.eventsListeners).forEach((e) => {
              i.off(e);
            }),
            !1 !== e &&
              ((i.$el[0].swiper = null),
              (function (e) {
                const t = e;
                Object.keys(t).forEach((e) => {
                  try {
                    t[e] = null;
                  } catch (e) {}
                  try {
                    delete t[e];
                  } catch (e) {}
                });
              })(i)),
            (i.destroyed = !0)),
          null
        );
      }
      static extendDefaults(e) {
        g(q, e);
      }
      static get extendedDefaults() {
        return q;
      }
      static get defaults() {
        return j;
      }
      static installModule(e) {
        V.prototype.__modules__ || (V.prototype.__modules__ = []);
        const t = V.prototype.__modules__;
        "function" == typeof e && t.indexOf(e) < 0 && t.push(e);
      }
      static use(e) {
        return Array.isArray(e)
          ? (e.forEach((e) => V.installModule(e)), V)
          : (V.installModule(e), V);
      }
    }
    function G(e, t, i, n) {
      const r = s();
      return (
        e.params.createElements &&
          Object.keys(n).forEach((s) => {
            if (!i[s] && !0 === i.auto) {
              let a = e.$el.children(`.${n[s]}`)[0];
              a ||
                ((a = r.createElement("div")),
                (a.className = n[s]),
                e.$el.append(a)),
                (i[s] = a),
                (t[s] = a);
            }
          }),
        i
      );
    }
    function U(e) {
      return (
        void 0 === e && (e = ""),
        `.${e
          .trim()
          .replace(/([\.:!\/])/g, "\\$1")
          .replace(/ /g, ".")}`
      );
    }
    function K(e) {
      const t = this,
        { $wrapperEl: i, params: s } = t;
      if ((s.loop && t.loopDestroy(), "object" == typeof e && "length" in e))
        for (let t = 0; t < e.length; t += 1) e[t] && i.append(e[t]);
      else i.append(e);
      s.loop && t.loopCreate(), s.observer || t.update();
    }
    function Q(e) {
      const t = this,
        { params: i, $wrapperEl: s, activeIndex: n } = t;
      i.loop && t.loopDestroy();
      let r = n + 1;
      if ("object" == typeof e && "length" in e) {
        for (let t = 0; t < e.length; t += 1) e[t] && s.prepend(e[t]);
        r = n + e.length;
      } else s.prepend(e);
      i.loop && t.loopCreate(), i.observer || t.update(), t.slideTo(r, 0, !1);
    }
    function J(e, t) {
      const i = this,
        { $wrapperEl: s, params: n, activeIndex: r } = i;
      let a = r;
      n.loop &&
        ((a -= i.loopedSlides),
        i.loopDestroy(),
        (i.slides = s.children(`.${n.slideClass}`)));
      const o = i.slides.length;
      if (e <= 0) return void i.prependSlide(t);
      if (e >= o) return void i.appendSlide(t);
      let l = a > e ? a + 1 : a;
      const u = [];
      for (let t = o - 1; t >= e; t -= 1) {
        const e = i.slides.eq(t);
        e.remove(), u.unshift(e);
      }
      if ("object" == typeof t && "length" in t) {
        for (let e = 0; e < t.length; e += 1) t[e] && s.append(t[e]);
        l = a > e ? a + t.length : a;
      } else s.append(t);
      for (let e = 0; e < u.length; e += 1) s.append(u[e]);
      n.loop && i.loopCreate(),
        n.observer || i.update(),
        n.loop ? i.slideTo(l + i.loopedSlides, 0, !1) : i.slideTo(l, 0, !1);
    }
    function Z(e) {
      const t = this,
        { params: i, $wrapperEl: s, activeIndex: n } = t;
      let r = n;
      i.loop &&
        ((r -= t.loopedSlides),
        t.loopDestroy(),
        (t.slides = s.children(`.${i.slideClass}`)));
      let a,
        o = r;
      if ("object" == typeof e && "length" in e) {
        for (let i = 0; i < e.length; i += 1)
          (a = e[i]), t.slides[a] && t.slides.eq(a).remove(), a < o && (o -= 1);
        o = Math.max(o, 0);
      } else (a = e), t.slides[a] && t.slides.eq(a).remove(), a < o && (o -= 1), (o = Math.max(o, 0));
      i.loop && t.loopCreate(),
        i.observer || t.update(),
        i.loop ? t.slideTo(o + t.loopedSlides, 0, !1) : t.slideTo(o, 0, !1);
    }
    function ee() {
      const e = this,
        t = [];
      for (let i = 0; i < e.slides.length; i += 1) t.push(i);
      e.removeSlide(t);
    }
    function te(e) {
      const {
        effect: t,
        swiper: i,
        on: s,
        setTranslate: n,
        setTransition: r,
        overwriteParams: a,
        perspective: o,
        recreateShadows: l,
        getEffectParams: u,
      } = e;
      let c;
      s("beforeInit", () => {
        if (i.params.effect !== t) return;
        i.classNames.push(`${i.params.containerModifierClass}${t}`),
          o && o() && i.classNames.push(`${i.params.containerModifierClass}3d`);
        const e = a ? a() : {};
        Object.assign(i.params, e), Object.assign(i.originalParams, e);
      }),
        s("setTranslate", () => {
          i.params.effect === t && n();
        }),
        s("setTransition", (e, s) => {
          i.params.effect === t && r(s);
        }),
        s("transitionEnd", () => {
          if (i.params.effect === t && l) {
            if (!u || !u().slideShadows) return;
            i.slides.each((e) => {
              i.$(e)
                .find(
                  ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
                )
                .remove();
            }),
              l();
          }
        }),
        s("virtualUpdate", () => {
          i.params.effect === t &&
            (i.slides.length || (c = !0),
            requestAnimationFrame(() => {
              c && i.slides && i.slides.length && (n(), (c = !1));
            }));
        });
    }
    function ie(e, t) {
      return e.transformEl
        ? t.find(e.transformEl).css({
            "backface-visibility": "hidden",
            "-webkit-backface-visibility": "hidden",
          })
        : t;
    }
    function se(e) {
      let { swiper: t, duration: i, transformEl: s, allSlides: n } = e;
      const { slides: r, activeIndex: a, $wrapperEl: o } = t;
      if (t.params.virtualTranslate && 0 !== i) {
        let e,
          i = !1;
        (e = n ? (s ? r.find(s) : r) : s ? r.eq(a).find(s) : r.eq(a)),
          e.transitionEnd(() => {
            if (i) return;
            if (!t || t.destroyed) return;
            (i = !0), (t.animating = !1);
            const e = ["webkitTransitionEnd", "transitionend"];
            for (let t = 0; t < e.length; t += 1) o.trigger(e[t]);
          });
      }
    }
    function ne(e, t, i) {
      const s = "swiper-slide-shadow" + (i ? `-${i}` : ""),
        n = e.transformEl ? t.find(e.transformEl) : t;
      let r = n.children(`.${s}`);
      return (
        r.length ||
          ((r = u(
            `<div class="swiper-slide-shadow${i ? `-${i}` : ""}"></div>`
          )),
          n.append(r)),
        r
      );
    }
    Object.keys(X).forEach((e) => {
      Object.keys(X[e]).forEach((t) => {
        V.prototype[t] = X[e][t];
      });
    }),
      V.use([
        function (e) {
          let { swiper: t, on: i, emit: s } = e;
          const n = r();
          let a = null,
            o = null;
          const l = () => {
              t &&
                !t.destroyed &&
                t.initialized &&
                (s("beforeResize"), s("resize"));
            },
            u = () => {
              t && !t.destroyed && t.initialized && s("orientationchange");
            };
          i("init", () => {
            t.params.resizeObserver && void 0 !== n.ResizeObserver
              ? t &&
                !t.destroyed &&
                t.initialized &&
                ((a = new ResizeObserver((e) => {
                  o = n.requestAnimationFrame(() => {
                    const { width: i, height: s } = t;
                    let n = i,
                      r = s;
                    e.forEach((e) => {
                      let { contentBoxSize: i, contentRect: s, target: a } = e;
                      (a && a !== t.el) ||
                        ((n = s ? s.width : (i[0] || i).inlineSize),
                        (r = s ? s.height : (i[0] || i).blockSize));
                    }),
                      (n === i && r === s) || l();
                  });
                })),
                a.observe(t.el))
              : (n.addEventListener("resize", l),
                n.addEventListener("orientationchange", u));
          }),
            i("destroy", () => {
              o && n.cancelAnimationFrame(o),
                a && a.unobserve && t.el && (a.unobserve(t.el), (a = null)),
                n.removeEventListener("resize", l),
                n.removeEventListener("orientationchange", u);
            });
        },
        function (e) {
          let { swiper: t, extendParams: i, on: s, emit: n } = e;
          const a = [],
            o = r(),
            l = function (e, t) {
              void 0 === t && (t = {});
              const i = new (o.MutationObserver || o.WebkitMutationObserver)(
                (e) => {
                  if (1 === e.length) return void n("observerUpdate", e[0]);
                  const t = function () {
                    n("observerUpdate", e[0]);
                  };
                  o.requestAnimationFrame
                    ? o.requestAnimationFrame(t)
                    : o.setTimeout(t, 0);
                }
              );
              i.observe(e, {
                attributes: void 0 === t.attributes || t.attributes,
                childList: void 0 === t.childList || t.childList,
                characterData: void 0 === t.characterData || t.characterData,
              }),
                a.push(i);
            };
          i({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
            s("init", () => {
              if (t.params.observer) {
                if (t.params.observeParents) {
                  const e = t.$el.parents();
                  for (let t = 0; t < e.length; t += 1) l(e[t]);
                }
                l(t.$el[0], { childList: t.params.observeSlideChildren }),
                  l(t.$wrapperEl[0], { attributes: !1 });
              }
            }),
            s("destroy", () => {
              a.forEach((e) => {
                e.disconnect();
              }),
                a.splice(0, a.length);
            });
        },
      ]);
    const re = [
      function (e) {
        let t,
          { swiper: i, extendParams: s, on: n, emit: r } = e;
        function a(e, t) {
          const s = i.params.virtual;
          if (s.cache && i.virtual.cache[t]) return i.virtual.cache[t];
          const n = s.renderSlide
            ? u(s.renderSlide.call(i, e, t))
            : u(
                `<div class="${i.params.slideClass}" data-swiper-slide-index="${t}">${e}</div>`
              );
          return (
            n.attr("data-swiper-slide-index") ||
              n.attr("data-swiper-slide-index", t),
            s.cache && (i.virtual.cache[t] = n),
            n
          );
        }
        function o(e) {
          const {
              slidesPerView: t,
              slidesPerGroup: s,
              centeredSlides: n,
            } = i.params,
            { addSlidesBefore: o, addSlidesAfter: l } = i.params.virtual,
            { from: u, to: c, slides: d, slidesGrid: p, offset: h } = i.virtual;
          i.params.cssMode || i.updateActiveIndex();
          const f = i.activeIndex || 0;
          let m, g, v;
          (m = i.rtlTranslate ? "right" : i.isHorizontal() ? "left" : "top"),
            n
              ? ((g = Math.floor(t / 2) + s + l),
                (v = Math.floor(t / 2) + s + o))
              : ((g = t + (s - 1) + l), (v = s + o));
          const y = Math.max((f || 0) - v, 0),
            b = Math.min((f || 0) + g, d.length - 1),
            w = (i.slidesGrid[y] || 0) - (i.slidesGrid[0] || 0);
          function D() {
            i.updateSlides(),
              i.updateProgress(),
              i.updateSlidesClasses(),
              i.lazy && i.params.lazy.enabled && i.lazy.load(),
              r("virtualUpdate");
          }
          if (
            (Object.assign(i.virtual, {
              from: y,
              to: b,
              offset: w,
              slidesGrid: i.slidesGrid,
            }),
            u === y && c === b && !e)
          )
            return (
              i.slidesGrid !== p && w !== h && i.slides.css(m, `${w}px`),
              i.updateProgress(),
              void r("virtualUpdate")
            );
          if (i.params.virtual.renderExternal)
            return (
              i.params.virtual.renderExternal.call(i, {
                offset: w,
                from: y,
                to: b,
                slides: (function () {
                  const e = [];
                  for (let t = y; t <= b; t += 1) e.push(d[t]);
                  return e;
                })(),
              }),
              void (i.params.virtual.renderExternalUpdate
                ? D()
                : r("virtualUpdate"))
            );
          const x = [],
            C = [];
          if (e) i.$wrapperEl.find(`.${i.params.slideClass}`).remove();
          else
            for (let e = u; e <= c; e += 1)
              (e < y || e > b) &&
                i.$wrapperEl
                  .find(
                    `.${i.params.slideClass}[data-swiper-slide-index="${e}"]`
                  )
                  .remove();
          for (let t = 0; t < d.length; t += 1)
            t >= y &&
              t <= b &&
              (void 0 === c || e
                ? C.push(t)
                : (t > c && C.push(t), t < u && x.push(t)));
          C.forEach((e) => {
            i.$wrapperEl.append(a(d[e], e));
          }),
            x
              .sort((e, t) => t - e)
              .forEach((e) => {
                i.$wrapperEl.prepend(a(d[e], e));
              }),
            i.$wrapperEl.children(".swiper-slide").css(m, `${w}px`),
            D();
        }
        s({
          virtual: {
            enabled: !1,
            slides: [],
            cache: !0,
            renderSlide: null,
            renderExternal: null,
            renderExternalUpdate: !0,
            addSlidesBefore: 0,
            addSlidesAfter: 0,
          },
        }),
          (i.virtual = {
            cache: {},
            from: void 0,
            to: void 0,
            slides: [],
            offset: 0,
            slidesGrid: [],
          }),
          n("beforeInit", () => {
            i.params.virtual.enabled &&
              ((i.virtual.slides = i.params.virtual.slides),
              i.classNames.push(`${i.params.containerModifierClass}virtual`),
              (i.params.watchSlidesProgress = !0),
              (i.originalParams.watchSlidesProgress = !0),
              i.params.initialSlide || o());
          }),
          n("setTranslate", () => {
            i.params.virtual.enabled &&
              (i.params.cssMode && !i._immediateVirtual
                ? (clearTimeout(t),
                  (t = setTimeout(() => {
                    o();
                  }, 100)))
                : o());
          }),
          n("init update resize", () => {
            i.params.virtual.enabled &&
              i.params.cssMode &&
              v(i.wrapperEl, "--swiper-virtual-size", `${i.virtualSize}px`);
          }),
          Object.assign(i.virtual, {
            appendSlide: function (e) {
              if ("object" == typeof e && "length" in e)
                for (let t = 0; t < e.length; t += 1)
                  e[t] && i.virtual.slides.push(e[t]);
              else i.virtual.slides.push(e);
              o(!0);
            },
            prependSlide: function (e) {
              const t = i.activeIndex;
              let s = t + 1,
                n = 1;
              if (Array.isArray(e)) {
                for (let t = 0; t < e.length; t += 1)
                  e[t] && i.virtual.slides.unshift(e[t]);
                (s = t + e.length), (n = e.length);
              } else i.virtual.slides.unshift(e);
              if (i.params.virtual.cache) {
                const e = i.virtual.cache,
                  t = {};
                Object.keys(e).forEach((i) => {
                  const s = e[i],
                    r = s.attr("data-swiper-slide-index");
                  r && s.attr("data-swiper-slide-index", parseInt(r, 10) + n),
                    (t[parseInt(i, 10) + n] = s);
                }),
                  (i.virtual.cache = t);
              }
              o(!0), i.slideTo(s, 0);
            },
            removeSlide: function (e) {
              if (null == e) return;
              let t = i.activeIndex;
              if (Array.isArray(e))
                for (let s = e.length - 1; s >= 0; s -= 1)
                  i.virtual.slides.splice(e[s], 1),
                    i.params.virtual.cache && delete i.virtual.cache[e[s]],
                    e[s] < t && (t -= 1),
                    (t = Math.max(t, 0));
              else
                i.virtual.slides.splice(e, 1),
                  i.params.virtual.cache && delete i.virtual.cache[e],
                  e < t && (t -= 1),
                  (t = Math.max(t, 0));
              o(!0), i.slideTo(t, 0);
            },
            removeAllSlides: function () {
              (i.virtual.slides = []),
                i.params.virtual.cache && (i.virtual.cache = {}),
                o(!0),
                i.slideTo(0, 0);
            },
            update: o,
          });
      },
      function (e) {
        let { swiper: t, extendParams: i, on: n, emit: a } = e;
        const o = s(),
          l = r();
        function c(e) {
          if (!t.enabled) return;
          const { rtlTranslate: i } = t;
          let s = e;
          s.originalEvent && (s = s.originalEvent);
          const n = s.keyCode || s.charCode,
            r = t.params.keyboard.pageUpDown,
            u = r && 33 === n,
            c = r && 34 === n,
            d = 37 === n,
            p = 39 === n,
            h = 38 === n,
            f = 40 === n;
          if (
            !t.allowSlideNext &&
            ((t.isHorizontal() && p) || (t.isVertical() && f) || c)
          )
            return !1;
          if (
            !t.allowSlidePrev &&
            ((t.isHorizontal() && d) || (t.isVertical() && h) || u)
          )
            return !1;
          if (
            !(
              s.shiftKey ||
              s.altKey ||
              s.ctrlKey ||
              s.metaKey ||
              (o.activeElement &&
                o.activeElement.nodeName &&
                ("input" === o.activeElement.nodeName.toLowerCase() ||
                  "textarea" === o.activeElement.nodeName.toLowerCase()))
            )
          ) {
            if (
              t.params.keyboard.onlyInViewport &&
              (u || c || d || p || h || f)
            ) {
              let e = !1;
              if (
                t.$el.parents(`.${t.params.slideClass}`).length > 0 &&
                0 === t.$el.parents(`.${t.params.slideActiveClass}`).length
              )
                return;
              const s = t.$el,
                n = s[0].clientWidth,
                r = s[0].clientHeight,
                a = l.innerWidth,
                o = l.innerHeight,
                u = t.$el.offset();
              i && (u.left -= t.$el[0].scrollLeft);
              const c = [
                [u.left, u.top],
                [u.left + n, u.top],
                [u.left, u.top + r],
                [u.left + n, u.top + r],
              ];
              for (let t = 0; t < c.length; t += 1) {
                const i = c[t];
                if (i[0] >= 0 && i[0] <= a && i[1] >= 0 && i[1] <= o) {
                  if (0 === i[0] && 0 === i[1]) continue;
                  e = !0;
                }
              }
              if (!e) return;
            }
            t.isHorizontal()
              ? ((u || c || d || p) &&
                  (s.preventDefault
                    ? s.preventDefault()
                    : (s.returnValue = !1)),
                (((c || p) && !i) || ((u || d) && i)) && t.slideNext(),
                (((u || d) && !i) || ((c || p) && i)) && t.slidePrev())
              : ((u || c || h || f) &&
                  (s.preventDefault
                    ? s.preventDefault()
                    : (s.returnValue = !1)),
                (c || f) && t.slideNext(),
                (u || h) && t.slidePrev()),
              a("keyPress", n);
          }
        }
        function d() {
          t.keyboard.enabled ||
            (u(o).on("keydown", c), (t.keyboard.enabled = !0));
        }
        function p() {
          t.keyboard.enabled &&
            (u(o).off("keydown", c), (t.keyboard.enabled = !1));
        }
        (t.keyboard = { enabled: !1 }),
          i({ keyboard: { enabled: !1, onlyInViewport: !0, pageUpDown: !0 } }),
          n("init", () => {
            t.params.keyboard.enabled && d();
          }),
          n("destroy", () => {
            t.keyboard.enabled && p();
          }),
          Object.assign(t.keyboard, { enable: d, disable: p });
      },
      function (e) {
        let { swiper: t, extendParams: i, on: s, emit: n } = e;
        const a = r();
        let o;
        i({
          mousewheel: {
            enabled: !1,
            releaseOnEdges: !1,
            invert: !1,
            forceToAxis: !1,
            sensitivity: 1,
            eventsTarget: "container",
            thresholdDelta: null,
            thresholdTime: null,
          },
        }),
          (t.mousewheel = { enabled: !1 });
        let l,
          c = p();
        const h = [];
        function f() {
          t.enabled && (t.mouseEntered = !0);
        }
        function m() {
          t.enabled && (t.mouseEntered = !1);
        }
        function g(e) {
          return !(
            (t.params.mousewheel.thresholdDelta &&
              e.delta < t.params.mousewheel.thresholdDelta) ||
            (t.params.mousewheel.thresholdTime &&
              p() - c < t.params.mousewheel.thresholdTime) ||
            (!(e.delta >= 6 && p() - c < 60) &&
              (e.direction < 0
                ? (t.isEnd && !t.params.loop) ||
                  t.animating ||
                  (t.slideNext(), n("scroll", e.raw))
                : (t.isBeginning && !t.params.loop) ||
                  t.animating ||
                  (t.slidePrev(), n("scroll", e.raw)),
              (c = new a.Date().getTime()),
              1))
          );
        }
        function v(e) {
          let i = e,
            s = !0;
          if (!t.enabled) return;
          const r = t.params.mousewheel;
          t.params.cssMode && i.preventDefault();
          let a = t.$el;
          if (
            ("container" !== t.params.mousewheel.eventsTarget &&
              (a = u(t.params.mousewheel.eventsTarget)),
            !t.mouseEntered && !a[0].contains(i.target) && !r.releaseOnEdges)
          )
            return !0;
          i.originalEvent && (i = i.originalEvent);
          let c = 0;
          const f = t.rtlTranslate ? -1 : 1,
            m = (function (e) {
              let t = 0,
                i = 0,
                s = 0,
                n = 0;
              return (
                "detail" in e && (i = e.detail),
                "wheelDelta" in e && (i = -e.wheelDelta / 120),
                "wheelDeltaY" in e && (i = -e.wheelDeltaY / 120),
                "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120),
                "axis" in e &&
                  e.axis === e.HORIZONTAL_AXIS &&
                  ((t = i), (i = 0)),
                (s = 10 * t),
                (n = 10 * i),
                "deltaY" in e && (n = e.deltaY),
                "deltaX" in e && (s = e.deltaX),
                e.shiftKey && !s && ((s = n), (n = 0)),
                (s || n) &&
                  e.deltaMode &&
                  (1 === e.deltaMode
                    ? ((s *= 40), (n *= 40))
                    : ((s *= 800), (n *= 800))),
                s && !t && (t = s < 1 ? -1 : 1),
                n && !i && (i = n < 1 ? -1 : 1),
                { spinX: t, spinY: i, pixelX: s, pixelY: n }
              );
            })(i);
          if (r.forceToAxis)
            if (t.isHorizontal()) {
              if (!(Math.abs(m.pixelX) > Math.abs(m.pixelY))) return !0;
              c = -m.pixelX * f;
            } else {
              if (!(Math.abs(m.pixelY) > Math.abs(m.pixelX))) return !0;
              c = -m.pixelY;
            }
          else
            c =
              Math.abs(m.pixelX) > Math.abs(m.pixelY)
                ? -m.pixelX * f
                : -m.pixelY;
          if (0 === c) return !0;
          r.invert && (c = -c);
          let v = t.getTranslate() + c * r.sensitivity;
          if (
            (v >= t.minTranslate() && (v = t.minTranslate()),
            v <= t.maxTranslate() && (v = t.maxTranslate()),
            (s =
              !!t.params.loop ||
              !(v === t.minTranslate() || v === t.maxTranslate())),
            s && t.params.nested && i.stopPropagation(),
            t.params.freeMode && t.params.freeMode.enabled)
          ) {
            const e = {
                time: p(),
                delta: Math.abs(c),
                direction: Math.sign(c),
              },
              s =
                l &&
                e.time < l.time + 500 &&
                e.delta <= l.delta &&
                e.direction === l.direction;
            if (!s) {
              (l = void 0), t.params.loop && t.loopFix();
              let a = t.getTranslate() + c * r.sensitivity;
              const u = t.isBeginning,
                p = t.isEnd;
              if (
                (a >= t.minTranslate() && (a = t.minTranslate()),
                a <= t.maxTranslate() && (a = t.maxTranslate()),
                t.setTransition(0),
                t.setTranslate(a),
                t.updateProgress(),
                t.updateActiveIndex(),
                t.updateSlidesClasses(),
                ((!u && t.isBeginning) || (!p && t.isEnd)) &&
                  t.updateSlidesClasses(),
                t.params.freeMode.sticky)
              ) {
                clearTimeout(o), (o = void 0), h.length >= 15 && h.shift();
                const i = h.length ? h[h.length - 1] : void 0,
                  s = h[0];
                if (
                  (h.push(e),
                  i && (e.delta > i.delta || e.direction !== i.direction))
                )
                  h.splice(0);
                else if (
                  h.length >= 15 &&
                  e.time - s.time < 500 &&
                  s.delta - e.delta >= 1 &&
                  e.delta <= 6
                ) {
                  const i = c > 0 ? 0.8 : 0.2;
                  (l = e),
                    h.splice(0),
                    (o = d(() => {
                      t.slideToClosest(t.params.speed, !0, void 0, i);
                    }, 0));
                }
                o ||
                  (o = d(() => {
                    (l = e),
                      h.splice(0),
                      t.slideToClosest(t.params.speed, !0, void 0, 0.5);
                  }, 500));
              }
              if (
                (s || n("scroll", i),
                t.params.autoplay &&
                  t.params.autoplayDisableOnInteraction &&
                  t.autoplay.stop(),
                a === t.minTranslate() || a === t.maxTranslate())
              )
                return !0;
            }
          } else {
            const i = {
              time: p(),
              delta: Math.abs(c),
              direction: Math.sign(c),
              raw: e,
            };
            h.length >= 2 && h.shift();
            const s = h.length ? h[h.length - 1] : void 0;
            if (
              (h.push(i),
              s
                ? (i.direction !== s.direction ||
                    i.delta > s.delta ||
                    i.time > s.time + 150) &&
                  g(i)
                : g(i),
              (function (e) {
                const i = t.params.mousewheel;
                if (e.direction < 0) {
                  if (t.isEnd && !t.params.loop && i.releaseOnEdges) return !0;
                } else if (t.isBeginning && !t.params.loop && i.releaseOnEdges)
                  return !0;
                return !1;
              })(i))
            )
              return !0;
          }
          return (
            i.preventDefault ? i.preventDefault() : (i.returnValue = !1), !1
          );
        }
        function y(e) {
          let i = t.$el;
          "container" !== t.params.mousewheel.eventsTarget &&
            (i = u(t.params.mousewheel.eventsTarget)),
            i[e]("mouseenter", f),
            i[e]("mouseleave", m),
            i[e]("wheel", v);
        }
        function b() {
          return t.params.cssMode
            ? (t.wrapperEl.removeEventListener("wheel", v), !0)
            : !t.mousewheel.enabled &&
                (y("on"), (t.mousewheel.enabled = !0), !0);
        }
        function w() {
          return t.params.cssMode
            ? (t.wrapperEl.addEventListener(event, v), !0)
            : !!t.mousewheel.enabled &&
                (y("off"), (t.mousewheel.enabled = !1), !0);
        }
        s("init", () => {
          !t.params.mousewheel.enabled && t.params.cssMode && w(),
            t.params.mousewheel.enabled && b();
        }),
          s("destroy", () => {
            t.params.cssMode && b(), t.mousewheel.enabled && w();
          }),
          Object.assign(t.mousewheel, { enable: b, disable: w });
      },
      function (e) {
        let { swiper: t, extendParams: i, on: s, emit: n } = e;
        function r(e) {
          let i;
          return (
            e &&
              ((i = u(e)),
              t.params.uniqueNavElements &&
                "string" == typeof e &&
                i.length > 1 &&
                1 === t.$el.find(e).length &&
                (i = t.$el.find(e))),
            i
          );
        }
        function a(e, i) {
          const s = t.params.navigation;
          e &&
            e.length > 0 &&
            (e[i ? "addClass" : "removeClass"](s.disabledClass),
            e[0] && "BUTTON" === e[0].tagName && (e[0].disabled = i),
            t.params.watchOverflow &&
              t.enabled &&
              e[t.isLocked ? "addClass" : "removeClass"](s.lockClass));
        }
        function o() {
          if (t.params.loop) return;
          const { $nextEl: e, $prevEl: i } = t.navigation;
          a(i, t.isBeginning && !t.params.rewind),
            a(e, t.isEnd && !t.params.rewind);
        }
        function l(e) {
          e.preventDefault(),
            (!t.isBeginning || t.params.loop || t.params.rewind) &&
              (t.slidePrev(), n("navigationPrev"));
        }
        function c(e) {
          e.preventDefault(),
            (!t.isEnd || t.params.loop || t.params.rewind) &&
              (t.slideNext(), n("navigationNext"));
        }
        function d() {
          const e = t.params.navigation;
          if (
            ((t.params.navigation = G(
              t,
              t.originalParams.navigation,
              t.params.navigation,
              { nextEl: "swiper-button-next", prevEl: "swiper-button-prev" }
            )),
            !e.nextEl && !e.prevEl)
          )
            return;
          const i = r(e.nextEl),
            s = r(e.prevEl);
          i && i.length > 0 && i.on("click", c),
            s && s.length > 0 && s.on("click", l),
            Object.assign(t.navigation, {
              $nextEl: i,
              nextEl: i && i[0],
              $prevEl: s,
              prevEl: s && s[0],
            }),
            t.enabled ||
              (i && i.addClass(e.lockClass), s && s.addClass(e.lockClass));
        }
        function p() {
          const { $nextEl: e, $prevEl: i } = t.navigation;
          e &&
            e.length &&
            (e.off("click", c),
            e.removeClass(t.params.navigation.disabledClass)),
            i &&
              i.length &&
              (i.off("click", l),
              i.removeClass(t.params.navigation.disabledClass));
        }
        i({
          navigation: {
            nextEl: null,
            prevEl: null,
            hideOnClick: !1,
            disabledClass: "swiper-button-disabled",
            hiddenClass: "swiper-button-hidden",
            lockClass: "swiper-button-lock",
            navigationDisabledClass: "swiper-navigation-disabled",
          },
        }),
          (t.navigation = {
            nextEl: null,
            $nextEl: null,
            prevEl: null,
            $prevEl: null,
          }),
          s("init", () => {
            !1 === t.params.navigation.enabled ? h() : (d(), o());
          }),
          s("toEdge fromEdge lock unlock", () => {
            o();
          }),
          s("destroy", () => {
            p();
          }),
          s("enable disable", () => {
            const { $nextEl: e, $prevEl: i } = t.navigation;
            e &&
              e[t.enabled ? "removeClass" : "addClass"](
                t.params.navigation.lockClass
              ),
              i &&
                i[t.enabled ? "removeClass" : "addClass"](
                  t.params.navigation.lockClass
                );
          }),
          s("click", (e, i) => {
            const { $nextEl: s, $prevEl: r } = t.navigation,
              a = i.target;
            if (t.params.navigation.hideOnClick && !u(a).is(r) && !u(a).is(s)) {
              if (
                t.pagination &&
                t.params.pagination &&
                t.params.pagination.clickable &&
                (t.pagination.el === a || t.pagination.el.contains(a))
              )
                return;
              let e;
              s
                ? (e = s.hasClass(t.params.navigation.hiddenClass))
                : r && (e = r.hasClass(t.params.navigation.hiddenClass)),
                n(!0 === e ? "navigationShow" : "navigationHide"),
                s && s.toggleClass(t.params.navigation.hiddenClass),
                r && r.toggleClass(t.params.navigation.hiddenClass);
            }
          });
        const h = () => {
          t.$el.addClass(t.params.navigation.navigationDisabledClass), p();
        };
        Object.assign(t.navigation, {
          enable: () => {
            t.$el.removeClass(t.params.navigation.navigationDisabledClass),
              d(),
              o();
          },
          disable: h,
          update: o,
          init: d,
          destroy: p,
        });
      },
      function (e) {
        let { swiper: t, extendParams: i, on: s, emit: n } = e;
        const r = "swiper-pagination";
        let a;
        i({
          pagination: {
            el: null,
            bulletElement: "span",
            clickable: !1,
            hideOnClick: !1,
            renderBullet: null,
            renderProgressbar: null,
            renderFraction: null,
            renderCustom: null,
            progressbarOpposite: !1,
            type: "bullets",
            dynamicBullets: !1,
            dynamicMainBullets: 1,
            formatFractionCurrent: (e) => e,
            formatFractionTotal: (e) => e,
            bulletClass: `${r}-bullet`,
            bulletActiveClass: `${r}-bullet-active`,
            modifierClass: `${r}-`,
            currentClass: `${r}-current`,
            totalClass: `${r}-total`,
            hiddenClass: `${r}-hidden`,
            progressbarFillClass: `${r}-progressbar-fill`,
            progressbarOppositeClass: `${r}-progressbar-opposite`,
            clickableClass: `${r}-clickable`,
            lockClass: `${r}-lock`,
            horizontalClass: `${r}-horizontal`,
            verticalClass: `${r}-vertical`,
            paginationDisabledClass: `${r}-disabled`,
          },
        }),
          (t.pagination = { el: null, $el: null, bullets: [] });
        let o = 0;
        function l() {
          return (
            !t.params.pagination.el ||
            !t.pagination.el ||
            !t.pagination.$el ||
            0 === t.pagination.$el.length
          );
        }
        function c(e, i) {
          const { bulletActiveClass: s } = t.params.pagination;
          e[i]().addClass(`${s}-${i}`)[i]().addClass(`${s}-${i}-${i}`);
        }
        function d() {
          const e = t.rtl,
            i = t.params.pagination;
          if (l()) return;
          const s =
              t.virtual && t.params.virtual.enabled
                ? t.virtual.slides.length
                : t.slides.length,
            r = t.pagination.$el;
          let d;
          const p = t.params.loop
            ? Math.ceil((s - 2 * t.loopedSlides) / t.params.slidesPerGroup)
            : t.snapGrid.length;
          if (
            (t.params.loop
              ? ((d = Math.ceil(
                  (t.activeIndex - t.loopedSlides) / t.params.slidesPerGroup
                )),
                d > s - 1 - 2 * t.loopedSlides && (d -= s - 2 * t.loopedSlides),
                d > p - 1 && (d -= p),
                d < 0 && "bullets" !== t.params.paginationType && (d = p + d))
              : (d = void 0 !== t.snapIndex ? t.snapIndex : t.activeIndex || 0),
            "bullets" === i.type &&
              t.pagination.bullets &&
              t.pagination.bullets.length > 0)
          ) {
            const s = t.pagination.bullets;
            let n, l, p;
            if (
              (i.dynamicBullets &&
                ((a = s
                  .eq(0)
                  [t.isHorizontal() ? "outerWidth" : "outerHeight"](!0)),
                r.css(
                  t.isHorizontal() ? "width" : "height",
                  a * (i.dynamicMainBullets + 4) + "px"
                ),
                i.dynamicMainBullets > 1 &&
                  void 0 !== t.previousIndex &&
                  ((o += d - (t.previousIndex - t.loopedSlides || 0)),
                  o > i.dynamicMainBullets - 1
                    ? (o = i.dynamicMainBullets - 1)
                    : o < 0 && (o = 0)),
                (n = Math.max(d - o, 0)),
                (l = n + (Math.min(s.length, i.dynamicMainBullets) - 1)),
                (p = (l + n) / 2)),
              s.removeClass(
                ["", "-next", "-next-next", "-prev", "-prev-prev", "-main"]
                  .map((e) => `${i.bulletActiveClass}${e}`)
                  .join(" ")
              ),
              r.length > 1)
            )
              s.each((e) => {
                const t = u(e),
                  s = t.index();
                s === d && t.addClass(i.bulletActiveClass),
                  i.dynamicBullets &&
                    (s >= n &&
                      s <= l &&
                      t.addClass(`${i.bulletActiveClass}-main`),
                    s === n && c(t, "prev"),
                    s === l && c(t, "next"));
              });
            else {
              const e = s.eq(d),
                r = e.index();
              if ((e.addClass(i.bulletActiveClass), i.dynamicBullets)) {
                const e = s.eq(n),
                  a = s.eq(l);
                for (let e = n; e <= l; e += 1)
                  s.eq(e).addClass(`${i.bulletActiveClass}-main`);
                if (t.params.loop)
                  if (r >= s.length) {
                    for (let e = i.dynamicMainBullets; e >= 0; e -= 1)
                      s.eq(s.length - e).addClass(
                        `${i.bulletActiveClass}-main`
                      );
                    s.eq(s.length - i.dynamicMainBullets - 1).addClass(
                      `${i.bulletActiveClass}-prev`
                    );
                  } else c(e, "prev"), c(a, "next");
                else c(e, "prev"), c(a, "next");
              }
            }
            if (i.dynamicBullets) {
              const n = Math.min(s.length, i.dynamicMainBullets + 4),
                r = (a * n - a) / 2 - p * a,
                o = e ? "right" : "left";
              s.css(t.isHorizontal() ? o : "top", `${r}px`);
            }
          }
          if (
            ("fraction" === i.type &&
              (r.find(U(i.currentClass)).text(i.formatFractionCurrent(d + 1)),
              r.find(U(i.totalClass)).text(i.formatFractionTotal(p))),
            "progressbar" === i.type)
          ) {
            let e;
            e = i.progressbarOpposite
              ? t.isHorizontal()
                ? "vertical"
                : "horizontal"
              : t.isHorizontal()
              ? "horizontal"
              : "vertical";
            const s = (d + 1) / p;
            let n = 1,
              a = 1;
            "horizontal" === e ? (n = s) : (a = s),
              r
                .find(U(i.progressbarFillClass))
                .transform(`translate3d(0,0,0) scaleX(${n}) scaleY(${a})`)
                .transition(t.params.speed);
          }
          "custom" === i.type && i.renderCustom
            ? (r.html(i.renderCustom(t, d + 1, p)), n("paginationRender", r[0]))
            : n("paginationUpdate", r[0]),
            t.params.watchOverflow &&
              t.enabled &&
              r[t.isLocked ? "addClass" : "removeClass"](i.lockClass);
        }
        function p() {
          const e = t.params.pagination;
          if (l()) return;
          const i =
              t.virtual && t.params.virtual.enabled
                ? t.virtual.slides.length
                : t.slides.length,
            s = t.pagination.$el;
          let r = "";
          if ("bullets" === e.type) {
            let n = t.params.loop
              ? Math.ceil((i - 2 * t.loopedSlides) / t.params.slidesPerGroup)
              : t.snapGrid.length;
            t.params.freeMode &&
              t.params.freeMode.enabled &&
              !t.params.loop &&
              n > i &&
              (n = i);
            for (let i = 0; i < n; i += 1)
              e.renderBullet
                ? (r += e.renderBullet.call(t, i, e.bulletClass))
                : (r += `<${e.bulletElement} class="${e.bulletClass}"></${e.bulletElement}>`);
            s.html(r), (t.pagination.bullets = s.find(U(e.bulletClass)));
          }
          "fraction" === e.type &&
            ((r = e.renderFraction
              ? e.renderFraction.call(t, e.currentClass, e.totalClass)
              : `<span class="${e.currentClass}"></span> / <span class="${e.totalClass}"></span>`),
            s.html(r)),
            "progressbar" === e.type &&
              ((r = e.renderProgressbar
                ? e.renderProgressbar.call(t, e.progressbarFillClass)
                : `<span class="${e.progressbarFillClass}"></span>`),
              s.html(r)),
            "custom" !== e.type && n("paginationRender", t.pagination.$el[0]);
        }
        function h() {
          t.params.pagination = G(
            t,
            t.originalParams.pagination,
            t.params.pagination,
            { el: "swiper-pagination" }
          );
          const e = t.params.pagination;
          if (!e.el) return;
          let i = u(e.el);
          0 !== i.length &&
            (t.params.uniqueNavElements &&
              "string" == typeof e.el &&
              i.length > 1 &&
              ((i = t.$el.find(e.el)),
              i.length > 1 &&
                (i = i.filter((e) => u(e).parents(".swiper")[0] === t.el))),
            "bullets" === e.type && e.clickable && i.addClass(e.clickableClass),
            i.addClass(e.modifierClass + e.type),
            i.addClass(t.isHorizontal() ? e.horizontalClass : e.verticalClass),
            "bullets" === e.type &&
              e.dynamicBullets &&
              (i.addClass(`${e.modifierClass}${e.type}-dynamic`),
              (o = 0),
              e.dynamicMainBullets < 1 && (e.dynamicMainBullets = 1)),
            "progressbar" === e.type &&
              e.progressbarOpposite &&
              i.addClass(e.progressbarOppositeClass),
            e.clickable &&
              i.on("click", U(e.bulletClass), function (e) {
                e.preventDefault();
                let i = u(this).index() * t.params.slidesPerGroup;
                t.params.loop && (i += t.loopedSlides), t.slideTo(i);
              }),
            Object.assign(t.pagination, { $el: i, el: i[0] }),
            t.enabled || i.addClass(e.lockClass));
        }
        function f() {
          const e = t.params.pagination;
          if (l()) return;
          const i = t.pagination.$el;
          i.removeClass(e.hiddenClass),
            i.removeClass(e.modifierClass + e.type),
            i.removeClass(
              t.isHorizontal() ? e.horizontalClass : e.verticalClass
            ),
            t.pagination.bullets &&
              t.pagination.bullets.removeClass &&
              t.pagination.bullets.removeClass(e.bulletActiveClass),
            e.clickable && i.off("click", U(e.bulletClass));
        }
        s("init", () => {
          !1 === t.params.pagination.enabled ? m() : (h(), p(), d());
        }),
          s("activeIndexChange", () => {
            (t.params.loop || void 0 === t.snapIndex) && d();
          }),
          s("snapIndexChange", () => {
            t.params.loop || d();
          }),
          s("slidesLengthChange", () => {
            t.params.loop && (p(), d());
          }),
          s("snapGridLengthChange", () => {
            t.params.loop || (p(), d());
          }),
          s("destroy", () => {
            f();
          }),
          s("enable disable", () => {
            const { $el: e } = t.pagination;
            e &&
              e[t.enabled ? "removeClass" : "addClass"](
                t.params.pagination.lockClass
              );
          }),
          s("lock unlock", () => {
            d();
          }),
          s("click", (e, i) => {
            const s = i.target,
              { $el: r } = t.pagination;
            if (
              t.params.pagination.el &&
              t.params.pagination.hideOnClick &&
              r &&
              r.length > 0 &&
              !u(s).hasClass(t.params.pagination.bulletClass)
            ) {
              if (
                t.navigation &&
                ((t.navigation.nextEl && s === t.navigation.nextEl) ||
                  (t.navigation.prevEl && s === t.navigation.prevEl))
              )
                return;
              const e = r.hasClass(t.params.pagination.hiddenClass);
              n(!0 === e ? "paginationShow" : "paginationHide"),
                r.toggleClass(t.params.pagination.hiddenClass);
            }
          });
        const m = () => {
          t.$el.addClass(t.params.pagination.paginationDisabledClass),
            t.pagination.$el &&
              t.pagination.$el.addClass(
                t.params.pagination.paginationDisabledClass
              ),
            f();
        };
        Object.assign(t.pagination, {
          enable: () => {
            t.$el.removeClass(t.params.pagination.paginationDisabledClass),
              t.pagination.$el &&
                t.pagination.$el.removeClass(
                  t.params.pagination.paginationDisabledClass
                ),
              h(),
              p(),
              d();
          },
          disable: m,
          render: p,
          update: d,
          init: h,
          destroy: f,
        });
      },
      function (e) {
        let { swiper: t, extendParams: i, on: n, emit: r } = e;
        const a = s();
        let o,
          l,
          c,
          p,
          h = !1,
          f = null,
          m = null;
        function g() {
          if (!t.params.scrollbar.el || !t.scrollbar.el) return;
          const { scrollbar: e, rtlTranslate: i, progress: s } = t,
            { $dragEl: n, $el: r } = e,
            a = t.params.scrollbar;
          let o = l,
            u = (c - l) * s;
          i
            ? ((u = -u),
              u > 0 ? ((o = l - u), (u = 0)) : -u + l > c && (o = c + u))
            : u < 0
            ? ((o = l + u), (u = 0))
            : u + l > c && (o = c - u),
            t.isHorizontal()
              ? (n.transform(`translate3d(${u}px, 0, 0)`),
                (n[0].style.width = `${o}px`))
              : (n.transform(`translate3d(0px, ${u}px, 0)`),
                (n[0].style.height = `${o}px`)),
            a.hide &&
              (clearTimeout(f),
              (r[0].style.opacity = 1),
              (f = setTimeout(() => {
                (r[0].style.opacity = 0), r.transition(400);
              }, 1e3)));
        }
        function v() {
          if (!t.params.scrollbar.el || !t.scrollbar.el) return;
          const { scrollbar: e } = t,
            { $dragEl: i, $el: s } = e;
          (i[0].style.width = ""),
            (i[0].style.height = ""),
            (c = t.isHorizontal() ? s[0].offsetWidth : s[0].offsetHeight),
            (p =
              t.size /
              (t.virtualSize +
                t.params.slidesOffsetBefore -
                (t.params.centeredSlides ? t.snapGrid[0] : 0))),
            (l =
              "auto" === t.params.scrollbar.dragSize
                ? c * p
                : parseInt(t.params.scrollbar.dragSize, 10)),
            t.isHorizontal()
              ? (i[0].style.width = `${l}px`)
              : (i[0].style.height = `${l}px`),
            (s[0].style.display = p >= 1 ? "none" : ""),
            t.params.scrollbar.hide && (s[0].style.opacity = 0),
            t.params.watchOverflow &&
              t.enabled &&
              e.$el[t.isLocked ? "addClass" : "removeClass"](
                t.params.scrollbar.lockClass
              );
        }
        function y(e) {
          return t.isHorizontal()
            ? "touchstart" === e.type || "touchmove" === e.type
              ? e.targetTouches[0].clientX
              : e.clientX
            : "touchstart" === e.type || "touchmove" === e.type
            ? e.targetTouches[0].clientY
            : e.clientY;
        }
        function b(e) {
          const { scrollbar: i, rtlTranslate: s } = t,
            { $el: n } = i;
          let r;
          (r =
            (y(e) -
              n.offset()[t.isHorizontal() ? "left" : "top"] -
              (null !== o ? o : l / 2)) /
            (c - l)),
            (r = Math.max(Math.min(r, 1), 0)),
            s && (r = 1 - r);
          const a =
            t.minTranslate() + (t.maxTranslate() - t.minTranslate()) * r;
          t.updateProgress(a),
            t.setTranslate(a),
            t.updateActiveIndex(),
            t.updateSlidesClasses();
        }
        function w(e) {
          const i = t.params.scrollbar,
            { scrollbar: s, $wrapperEl: n } = t,
            { $el: a, $dragEl: l } = s;
          (h = !0),
            (o =
              e.target === l[0] || e.target === l
                ? y(e) -
                  e.target.getBoundingClientRect()[
                    t.isHorizontal() ? "left" : "top"
                  ]
                : null),
            e.preventDefault(),
            e.stopPropagation(),
            n.transition(100),
            l.transition(100),
            b(e),
            clearTimeout(m),
            a.transition(0),
            i.hide && a.css("opacity", 1),
            t.params.cssMode && t.$wrapperEl.css("scroll-snap-type", "none"),
            r("scrollbarDragStart", e);
        }
        function D(e) {
          const { scrollbar: i, $wrapperEl: s } = t,
            { $el: n, $dragEl: a } = i;
          h &&
            (e.preventDefault ? e.preventDefault() : (e.returnValue = !1),
            b(e),
            s.transition(0),
            n.transition(0),
            a.transition(0),
            r("scrollbarDragMove", e));
        }
        function x(e) {
          const i = t.params.scrollbar,
            { scrollbar: s, $wrapperEl: n } = t,
            { $el: a } = s;
          h &&
            ((h = !1),
            t.params.cssMode &&
              (t.$wrapperEl.css("scroll-snap-type", ""), n.transition("")),
            i.hide &&
              (clearTimeout(m),
              (m = d(() => {
                a.css("opacity", 0), a.transition(400);
              }, 1e3))),
            r("scrollbarDragEnd", e),
            i.snapOnRelease && t.slideToClosest());
        }
        function C(e) {
          const {
              scrollbar: i,
              touchEventsTouch: s,
              touchEventsDesktop: n,
              params: r,
              support: o,
            } = t,
            l = i.$el;
          if (!l) return;
          const u = l[0],
            c = !(!o.passiveListener || !r.passiveListeners) && {
              passive: !1,
              capture: !1,
            },
            d = !(!o.passiveListener || !r.passiveListeners) && {
              passive: !0,
              capture: !1,
            };
          if (!u) return;
          const p = "on" === e ? "addEventListener" : "removeEventListener";
          o.touch
            ? (u[p](s.start, w, c), u[p](s.move, D, c), u[p](s.end, x, d))
            : (u[p](n.start, w, c), a[p](n.move, D, c), a[p](n.end, x, d));
        }
        function T() {
          const { scrollbar: e, $el: i } = t;
          t.params.scrollbar = G(
            t,
            t.originalParams.scrollbar,
            t.params.scrollbar,
            { el: "swiper-scrollbar" }
          );
          const s = t.params.scrollbar;
          if (!s.el) return;
          let n = u(s.el);
          t.params.uniqueNavElements &&
            "string" == typeof s.el &&
            n.length > 1 &&
            1 === i.find(s.el).length &&
            (n = i.find(s.el)),
            n.addClass(t.isHorizontal() ? s.horizontalClass : s.verticalClass);
          let r = n.find(`.${t.params.scrollbar.dragClass}`);
          0 === r.length &&
            ((r = u(`<div class="${t.params.scrollbar.dragClass}"></div>`)),
            n.append(r)),
            Object.assign(e, { $el: n, el: n[0], $dragEl: r, dragEl: r[0] }),
            s.draggable && t.params.scrollbar.el && t.scrollbar.el && C("on"),
            n &&
              n[t.enabled ? "removeClass" : "addClass"](
                t.params.scrollbar.lockClass
              );
        }
        function E() {
          const e = t.params.scrollbar,
            i = t.scrollbar.$el;
          i &&
            i.removeClass(
              t.isHorizontal() ? e.horizontalClass : e.verticalClass
            ),
            t.params.scrollbar.el && t.scrollbar.el && C("off");
        }
        i({
          scrollbar: {
            el: null,
            dragSize: "auto",
            hide: !1,
            draggable: !1,
            snapOnRelease: !0,
            lockClass: "swiper-scrollbar-lock",
            dragClass: "swiper-scrollbar-drag",
            scrollbarDisabledClass: "swiper-scrollbar-disabled",
            horizontalClass: "swiper-scrollbar-horizontal",
            verticalClass: "swiper-scrollbar-vertical",
          },
        }),
          (t.scrollbar = { el: null, dragEl: null, $el: null, $dragEl: null }),
          n("init", () => {
            !1 === t.params.scrollbar.enabled ? _() : (T(), v(), g());
          }),
          n("update resize observerUpdate lock unlock", () => {
            v();
          }),
          n("setTranslate", () => {
            g();
          }),
          n("setTransition", (e, i) => {
            !(function (e) {
              t.params.scrollbar.el &&
                t.scrollbar.el &&
                t.scrollbar.$dragEl.transition(e);
            })(i);
          }),
          n("enable disable", () => {
            const { $el: e } = t.scrollbar;
            e &&
              e[t.enabled ? "removeClass" : "addClass"](
                t.params.scrollbar.lockClass
              );
          }),
          n("destroy", () => {
            E();
          });
        const _ = () => {
          t.$el.addClass(t.params.scrollbar.scrollbarDisabledClass),
            t.scrollbar.$el &&
              t.scrollbar.$el.addClass(
                t.params.scrollbar.scrollbarDisabledClass
              ),
            E();
        };
        Object.assign(t.scrollbar, {
          enable: () => {
            t.$el.removeClass(t.params.scrollbar.scrollbarDisabledClass),
              t.scrollbar.$el &&
                t.scrollbar.$el.removeClass(
                  t.params.scrollbar.scrollbarDisabledClass
                ),
              T(),
              v(),
              g();
          },
          disable: _,
          updateSize: v,
          setTranslate: g,
          init: T,
          destroy: E,
        });
      },
      function (e) {
        let { swiper: t, extendParams: i, on: s } = e;
        i({ parallax: { enabled: !1 } });
        const n = (e, i) => {
            const { rtl: s } = t,
              n = u(e),
              r = s ? -1 : 1,
              a = n.attr("data-swiper-parallax") || "0";
            let o = n.attr("data-swiper-parallax-x"),
              l = n.attr("data-swiper-parallax-y");
            const c = n.attr("data-swiper-parallax-scale"),
              d = n.attr("data-swiper-parallax-opacity");
            if (
              (o || l
                ? ((o = o || "0"), (l = l || "0"))
                : t.isHorizontal()
                ? ((o = a), (l = "0"))
                : ((l = a), (o = "0")),
              (o =
                o.indexOf("%") >= 0
                  ? parseInt(o, 10) * i * r + "%"
                  : o * i * r + "px"),
              (l =
                l.indexOf("%") >= 0 ? parseInt(l, 10) * i + "%" : l * i + "px"),
              null != d)
            ) {
              const e = d - (d - 1) * (1 - Math.abs(i));
              n[0].style.opacity = e;
            }
            if (null == c) n.transform(`translate3d(${o}, ${l}, 0px)`);
            else {
              const e = c - (c - 1) * (1 - Math.abs(i));
              n.transform(`translate3d(${o}, ${l}, 0px) scale(${e})`);
            }
          },
          r = () => {
            const { $el: e, slides: i, progress: s, snapGrid: r } = t;
            e
              .children(
                "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]"
              )
              .each((e) => {
                n(e, s);
              }),
              i.each((e, i) => {
                let a = e.progress;
                t.params.slidesPerGroup > 1 &&
                  "auto" !== t.params.slidesPerView &&
                  (a += Math.ceil(i / 2) - s * (r.length - 1)),
                  (a = Math.min(Math.max(a, -1), 1)),
                  u(e)
                    .find(
                      "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]"
                    )
                    .each((e) => {
                      n(e, a);
                    });
              });
          };
        s("beforeInit", () => {
          t.params.parallax.enabled &&
            ((t.params.watchSlidesProgress = !0),
            (t.originalParams.watchSlidesProgress = !0));
        }),
          s("init", () => {
            t.params.parallax.enabled && r();
          }),
          s("setTranslate", () => {
            t.params.parallax.enabled && r();
          }),
          s("setTransition", (e, i) => {
            t.params.parallax.enabled &&
              (function (e) {
                void 0 === e && (e = t.params.speed);
                const { $el: i } = t;
                i.find(
                  "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]"
                ).each((t) => {
                  const i = u(t);
                  let s =
                    parseInt(i.attr("data-swiper-parallax-duration"), 10) || e;
                  0 === e && (s = 0), i.transition(s);
                });
              })(i);
          });
      },
      function (e) {
        let { swiper: t, extendParams: i, on: s, emit: n } = e;
        const a = r();
        i({
          zoom: {
            enabled: !1,
            maxRatio: 3,
            minRatio: 1,
            toggle: !0,
            containerClass: "swiper-zoom-container",
            zoomedSlideClass: "swiper-slide-zoomed",
          },
        }),
          (t.zoom = { enabled: !1 });
        let o,
          l,
          c,
          d = 1,
          p = !1;
        const f = {
            $slideEl: void 0,
            slideWidth: void 0,
            slideHeight: void 0,
            $imageEl: void 0,
            $imageWrapEl: void 0,
            maxRatio: 3,
          },
          m = {
            isTouched: void 0,
            isMoved: void 0,
            currentX: void 0,
            currentY: void 0,
            minX: void 0,
            minY: void 0,
            maxX: void 0,
            maxY: void 0,
            width: void 0,
            height: void 0,
            startX: void 0,
            startY: void 0,
            touchesStart: {},
            touchesCurrent: {},
          },
          g = {
            x: void 0,
            y: void 0,
            prevPositionX: void 0,
            prevPositionY: void 0,
            prevTime: void 0,
          };
        let v = 1;
        function y(e) {
          if (e.targetTouches.length < 2) return 1;
          const t = e.targetTouches[0].pageX,
            i = e.targetTouches[0].pageY,
            s = e.targetTouches[1].pageX,
            n = e.targetTouches[1].pageY;
          return Math.sqrt((s - t) ** 2 + (n - i) ** 2);
        }
        function b(e) {
          const i = t.support,
            s = t.params.zoom;
          if (((l = !1), (c = !1), !i.gestures)) {
            if (
              "touchstart" !== e.type ||
              ("touchstart" === e.type && e.targetTouches.length < 2)
            )
              return;
            (l = !0), (f.scaleStart = y(e));
          }
          (f.$slideEl && f.$slideEl.length) ||
          ((f.$slideEl = u(e.target).closest(`.${t.params.slideClass}`)),
          0 === f.$slideEl.length && (f.$slideEl = t.slides.eq(t.activeIndex)),
          (f.$imageEl = f.$slideEl
            .find(`.${s.containerClass}`)
            .eq(0)
            .find("picture, img, svg, canvas, .swiper-zoom-target")
            .eq(0)),
          (f.$imageWrapEl = f.$imageEl.parent(`.${s.containerClass}`)),
          (f.maxRatio = f.$imageWrapEl.attr("data-swiper-zoom") || s.maxRatio),
          0 !== f.$imageWrapEl.length)
            ? (f.$imageEl && f.$imageEl.transition(0), (p = !0))
            : (f.$imageEl = void 0);
        }
        function w(e) {
          const i = t.support,
            s = t.params.zoom,
            n = t.zoom;
          if (!i.gestures) {
            if (
              "touchmove" !== e.type ||
              ("touchmove" === e.type && e.targetTouches.length < 2)
            )
              return;
            (c = !0), (f.scaleMove = y(e));
          }
          f.$imageEl && 0 !== f.$imageEl.length
            ? (i.gestures
                ? (n.scale = e.scale * d)
                : (n.scale = (f.scaleMove / f.scaleStart) * d),
              n.scale > f.maxRatio &&
                (n.scale = f.maxRatio - 1 + (n.scale - f.maxRatio + 1) ** 0.5),
              n.scale < s.minRatio &&
                (n.scale = s.minRatio + 1 - (s.minRatio - n.scale + 1) ** 0.5),
              f.$imageEl.transform(`translate3d(0,0,0) scale(${n.scale})`))
            : "gesturechange" === e.type && b(e);
        }
        function D(e) {
          const i = t.device,
            s = t.support,
            n = t.params.zoom,
            r = t.zoom;
          if (!s.gestures) {
            if (!l || !c) return;
            if (
              "touchend" !== e.type ||
              ("touchend" === e.type &&
                e.changedTouches.length < 2 &&
                !i.android)
            )
              return;
            (l = !1), (c = !1);
          }
          f.$imageEl &&
            0 !== f.$imageEl.length &&
            ((r.scale = Math.max(Math.min(r.scale, f.maxRatio), n.minRatio)),
            f.$imageEl
              .transition(t.params.speed)
              .transform(`translate3d(0,0,0) scale(${r.scale})`),
            (d = r.scale),
            (p = !1),
            1 === r.scale && (f.$slideEl = void 0));
        }
        function x(e) {
          const i = t.zoom;
          if (!f.$imageEl || 0 === f.$imageEl.length) return;
          if (((t.allowClick = !1), !m.isTouched || !f.$slideEl)) return;
          m.isMoved ||
            ((m.width = f.$imageEl[0].offsetWidth),
            (m.height = f.$imageEl[0].offsetHeight),
            (m.startX = h(f.$imageWrapEl[0], "x") || 0),
            (m.startY = h(f.$imageWrapEl[0], "y") || 0),
            (f.slideWidth = f.$slideEl[0].offsetWidth),
            (f.slideHeight = f.$slideEl[0].offsetHeight),
            f.$imageWrapEl.transition(0));
          const s = m.width * i.scale,
            n = m.height * i.scale;
          if (!(s < f.slideWidth && n < f.slideHeight)) {
            if (
              ((m.minX = Math.min(f.slideWidth / 2 - s / 2, 0)),
              (m.maxX = -m.minX),
              (m.minY = Math.min(f.slideHeight / 2 - n / 2, 0)),
              (m.maxY = -m.minY),
              (m.touchesCurrent.x =
                "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX),
              (m.touchesCurrent.y =
                "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY),
              !m.isMoved && !p)
            ) {
              if (
                t.isHorizontal() &&
                ((Math.floor(m.minX) === Math.floor(m.startX) &&
                  m.touchesCurrent.x < m.touchesStart.x) ||
                  (Math.floor(m.maxX) === Math.floor(m.startX) &&
                    m.touchesCurrent.x > m.touchesStart.x))
              )
                return void (m.isTouched = !1);
              if (
                !t.isHorizontal() &&
                ((Math.floor(m.minY) === Math.floor(m.startY) &&
                  m.touchesCurrent.y < m.touchesStart.y) ||
                  (Math.floor(m.maxY) === Math.floor(m.startY) &&
                    m.touchesCurrent.y > m.touchesStart.y))
              )
                return void (m.isTouched = !1);
            }
            e.cancelable && e.preventDefault(),
              e.stopPropagation(),
              (m.isMoved = !0),
              (m.currentX = m.touchesCurrent.x - m.touchesStart.x + m.startX),
              (m.currentY = m.touchesCurrent.y - m.touchesStart.y + m.startY),
              m.currentX < m.minX &&
                (m.currentX = m.minX + 1 - (m.minX - m.currentX + 1) ** 0.8),
              m.currentX > m.maxX &&
                (m.currentX = m.maxX - 1 + (m.currentX - m.maxX + 1) ** 0.8),
              m.currentY < m.minY &&
                (m.currentY = m.minY + 1 - (m.minY - m.currentY + 1) ** 0.8),
              m.currentY > m.maxY &&
                (m.currentY = m.maxY - 1 + (m.currentY - m.maxY + 1) ** 0.8),
              g.prevPositionX || (g.prevPositionX = m.touchesCurrent.x),
              g.prevPositionY || (g.prevPositionY = m.touchesCurrent.y),
              g.prevTime || (g.prevTime = Date.now()),
              (g.x =
                (m.touchesCurrent.x - g.prevPositionX) /
                (Date.now() - g.prevTime) /
                2),
              (g.y =
                (m.touchesCurrent.y - g.prevPositionY) /
                (Date.now() - g.prevTime) /
                2),
              Math.abs(m.touchesCurrent.x - g.prevPositionX) < 2 && (g.x = 0),
              Math.abs(m.touchesCurrent.y - g.prevPositionY) < 2 && (g.y = 0),
              (g.prevPositionX = m.touchesCurrent.x),
              (g.prevPositionY = m.touchesCurrent.y),
              (g.prevTime = Date.now()),
              f.$imageWrapEl.transform(
                `translate3d(${m.currentX}px, ${m.currentY}px,0)`
              );
          }
        }
        function C() {
          const e = t.zoom;
          f.$slideEl &&
            t.previousIndex !== t.activeIndex &&
            (f.$imageEl && f.$imageEl.transform("translate3d(0,0,0) scale(1)"),
            f.$imageWrapEl && f.$imageWrapEl.transform("translate3d(0,0,0)"),
            (e.scale = 1),
            (d = 1),
            (f.$slideEl = void 0),
            (f.$imageEl = void 0),
            (f.$imageWrapEl = void 0));
        }
        function T(e) {
          const i = t.zoom,
            s = t.params.zoom;
          if (
            (f.$slideEl ||
              (e &&
                e.target &&
                (f.$slideEl = u(e.target).closest(`.${t.params.slideClass}`)),
              f.$slideEl ||
                (t.params.virtual && t.params.virtual.enabled && t.virtual
                  ? (f.$slideEl = t.$wrapperEl.children(
                      `.${t.params.slideActiveClass}`
                    ))
                  : (f.$slideEl = t.slides.eq(t.activeIndex))),
              (f.$imageEl = f.$slideEl
                .find(`.${s.containerClass}`)
                .eq(0)
                .find("picture, img, svg, canvas, .swiper-zoom-target")
                .eq(0)),
              (f.$imageWrapEl = f.$imageEl.parent(`.${s.containerClass}`))),
            !f.$imageEl ||
              0 === f.$imageEl.length ||
              !f.$imageWrapEl ||
              0 === f.$imageWrapEl.length)
          )
            return;
          let n, r, o, l, c, p, h, g, v, y, b, w, D, x, C, T, E, _;
          t.params.cssMode &&
            ((t.wrapperEl.style.overflow = "hidden"),
            (t.wrapperEl.style.touchAction = "none")),
            f.$slideEl.addClass(`${s.zoomedSlideClass}`),
            void 0 === m.touchesStart.x && e
              ? ((n =
                  "touchend" === e.type ? e.changedTouches[0].pageX : e.pageX),
                (r =
                  "touchend" === e.type ? e.changedTouches[0].pageY : e.pageY))
              : ((n = m.touchesStart.x), (r = m.touchesStart.y)),
            (i.scale = f.$imageWrapEl.attr("data-swiper-zoom") || s.maxRatio),
            (d = f.$imageWrapEl.attr("data-swiper-zoom") || s.maxRatio),
            e
              ? ((E = f.$slideEl[0].offsetWidth),
                (_ = f.$slideEl[0].offsetHeight),
                (o = f.$slideEl.offset().left + a.scrollX),
                (l = f.$slideEl.offset().top + a.scrollY),
                (c = o + E / 2 - n),
                (p = l + _ / 2 - r),
                (v = f.$imageEl[0].offsetWidth),
                (y = f.$imageEl[0].offsetHeight),
                (b = v * i.scale),
                (w = y * i.scale),
                (D = Math.min(E / 2 - b / 2, 0)),
                (x = Math.min(_ / 2 - w / 2, 0)),
                (C = -D),
                (T = -x),
                (h = c * i.scale),
                (g = p * i.scale),
                h < D && (h = D),
                h > C && (h = C),
                g < x && (g = x),
                g > T && (g = T))
              : ((h = 0), (g = 0)),
            f.$imageWrapEl
              .transition(300)
              .transform(`translate3d(${h}px, ${g}px,0)`),
            f.$imageEl
              .transition(300)
              .transform(`translate3d(0,0,0) scale(${i.scale})`);
        }
        function E() {
          const e = t.zoom,
            i = t.params.zoom;
          f.$slideEl ||
            (t.params.virtual && t.params.virtual.enabled && t.virtual
              ? (f.$slideEl = t.$wrapperEl.children(
                  `.${t.params.slideActiveClass}`
                ))
              : (f.$slideEl = t.slides.eq(t.activeIndex)),
            (f.$imageEl = f.$slideEl
              .find(`.${i.containerClass}`)
              .eq(0)
              .find("picture, img, svg, canvas, .swiper-zoom-target")
              .eq(0)),
            (f.$imageWrapEl = f.$imageEl.parent(`.${i.containerClass}`))),
            f.$imageEl &&
              0 !== f.$imageEl.length &&
              f.$imageWrapEl &&
              0 !== f.$imageWrapEl.length &&
              (t.params.cssMode &&
                ((t.wrapperEl.style.overflow = ""),
                (t.wrapperEl.style.touchAction = "")),
              (e.scale = 1),
              (d = 1),
              f.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"),
              f.$imageEl
                .transition(300)
                .transform("translate3d(0,0,0) scale(1)"),
              f.$slideEl.removeClass(`${i.zoomedSlideClass}`),
              (f.$slideEl = void 0));
        }
        function _(e) {
          const i = t.zoom;
          i.scale && 1 !== i.scale ? E() : T(e);
        }
        function S() {
          const e = t.support;
          return {
            passiveListener: !(
              "touchstart" !== t.touchEvents.start ||
              !e.passiveListener ||
              !t.params.passiveListeners
            ) && { passive: !0, capture: !1 },
            activeListenerWithCapture: !e.passiveListener || {
              passive: !1,
              capture: !0,
            },
          };
        }
        function M() {
          return `.${t.params.slideClass}`;
        }
        function k(e) {
          const { passiveListener: i } = S(),
            s = M();
          t.$wrapperEl[e]("gesturestart", s, b, i),
            t.$wrapperEl[e]("gesturechange", s, w, i),
            t.$wrapperEl[e]("gestureend", s, D, i);
        }
        function A() {
          o || ((o = !0), k("on"));
        }
        function P() {
          o && ((o = !1), k("off"));
        }
        function F() {
          const e = t.zoom;
          if (e.enabled) return;
          e.enabled = !0;
          const i = t.support,
            { passiveListener: s, activeListenerWithCapture: n } = S(),
            r = M();
          i.gestures
            ? (t.$wrapperEl.on(t.touchEvents.start, A, s),
              t.$wrapperEl.on(t.touchEvents.end, P, s))
            : "touchstart" === t.touchEvents.start &&
              (t.$wrapperEl.on(t.touchEvents.start, r, b, s),
              t.$wrapperEl.on(t.touchEvents.move, r, w, n),
              t.$wrapperEl.on(t.touchEvents.end, r, D, s),
              t.touchEvents.cancel &&
                t.$wrapperEl.on(t.touchEvents.cancel, r, D, s)),
            t.$wrapperEl.on(
              t.touchEvents.move,
              `.${t.params.zoom.containerClass}`,
              x,
              n
            );
        }
        function $() {
          const e = t.zoom;
          if (!e.enabled) return;
          const i = t.support;
          e.enabled = !1;
          const { passiveListener: s, activeListenerWithCapture: n } = S(),
            r = M();
          i.gestures
            ? (t.$wrapperEl.off(t.touchEvents.start, A, s),
              t.$wrapperEl.off(t.touchEvents.end, P, s))
            : "touchstart" === t.touchEvents.start &&
              (t.$wrapperEl.off(t.touchEvents.start, r, b, s),
              t.$wrapperEl.off(t.touchEvents.move, r, w, n),
              t.$wrapperEl.off(t.touchEvents.end, r, D, s),
              t.touchEvents.cancel &&
                t.$wrapperEl.off(t.touchEvents.cancel, r, D, s)),
            t.$wrapperEl.off(
              t.touchEvents.move,
              `.${t.params.zoom.containerClass}`,
              x,
              n
            );
        }
        Object.defineProperty(t.zoom, "scale", {
          get: () => v,
          set(e) {
            if (v !== e) {
              const t = f.$imageEl ? f.$imageEl[0] : void 0,
                i = f.$slideEl ? f.$slideEl[0] : void 0;
              n("zoomChange", e, t, i);
            }
            v = e;
          },
        }),
          s("init", () => {
            t.params.zoom.enabled && F();
          }),
          s("destroy", () => {
            $();
          }),
          s("touchStart", (e, i) => {
            t.zoom.enabled &&
              (function (e) {
                const i = t.device;
                f.$imageEl &&
                  0 !== f.$imageEl.length &&
                  (m.isTouched ||
                    (i.android && e.cancelable && e.preventDefault(),
                    (m.isTouched = !0),
                    (m.touchesStart.x =
                      "touchstart" === e.type
                        ? e.targetTouches[0].pageX
                        : e.pageX),
                    (m.touchesStart.y =
                      "touchstart" === e.type
                        ? e.targetTouches[0].pageY
                        : e.pageY)));
              })(i);
          }),
          s("touchEnd", (e, i) => {
            t.zoom.enabled &&
              (function () {
                const e = t.zoom;
                if (!f.$imageEl || 0 === f.$imageEl.length) return;
                if (!m.isTouched || !m.isMoved)
                  return (m.isTouched = !1), void (m.isMoved = !1);
                (m.isTouched = !1), (m.isMoved = !1);
                let i = 300,
                  s = 300;
                const n = g.x * i,
                  r = m.currentX + n,
                  a = g.y * s,
                  o = m.currentY + a;
                0 !== g.x && (i = Math.abs((r - m.currentX) / g.x)),
                  0 !== g.y && (s = Math.abs((o - m.currentY) / g.y));
                const l = Math.max(i, s);
                (m.currentX = r), (m.currentY = o);
                const u = m.width * e.scale,
                  c = m.height * e.scale;
                (m.minX = Math.min(f.slideWidth / 2 - u / 2, 0)),
                  (m.maxX = -m.minX),
                  (m.minY = Math.min(f.slideHeight / 2 - c / 2, 0)),
                  (m.maxY = -m.minY),
                  (m.currentX = Math.max(Math.min(m.currentX, m.maxX), m.minX)),
                  (m.currentY = Math.max(Math.min(m.currentY, m.maxY), m.minY)),
                  f.$imageWrapEl
                    .transition(l)
                    .transform(
                      `translate3d(${m.currentX}px, ${m.currentY}px,0)`
                    );
              })();
          }),
          s("doubleTap", (e, i) => {
            !t.animating &&
              t.params.zoom.enabled &&
              t.zoom.enabled &&
              t.params.zoom.toggle &&
              _(i);
          }),
          s("transitionEnd", () => {
            t.zoom.enabled && t.params.zoom.enabled && C();
          }),
          s("slideChange", () => {
            t.zoom.enabled && t.params.zoom.enabled && t.params.cssMode && C();
          }),
          Object.assign(t.zoom, {
            enable: F,
            disable: $,
            in: T,
            out: E,
            toggle: _,
          });
      },
      function (e) {
        let { swiper: t, extendParams: i, on: s, emit: n } = e;
        i({
          lazy: {
            checkInView: !1,
            enabled: !1,
            loadPrevNext: !1,
            loadPrevNextAmount: 1,
            loadOnTransitionStart: !1,
            scrollingElement: "",
            elementClass: "swiper-lazy",
            loadingClass: "swiper-lazy-loading",
            loadedClass: "swiper-lazy-loaded",
            preloaderClass: "swiper-lazy-preloader",
          },
        }),
          (t.lazy = {});
        let a = !1,
          o = !1;
        function l(e, i) {
          void 0 === i && (i = !0);
          const s = t.params.lazy;
          if (void 0 === e) return;
          if (0 === t.slides.length) return;
          const r =
              t.virtual && t.params.virtual.enabled
                ? t.$wrapperEl.children(
                    `.${t.params.slideClass}[data-swiper-slide-index="${e}"]`
                  )
                : t.slides.eq(e),
            a = r.find(
              `.${s.elementClass}:not(.${s.loadedClass}):not(.${s.loadingClass})`
            );
          !r.hasClass(s.elementClass) ||
            r.hasClass(s.loadedClass) ||
            r.hasClass(s.loadingClass) ||
            a.push(r[0]),
            0 !== a.length &&
              a.each((e) => {
                const a = u(e);
                a.addClass(s.loadingClass);
                const o = a.attr("data-background"),
                  c = a.attr("data-src"),
                  d = a.attr("data-srcset"),
                  p = a.attr("data-sizes"),
                  h = a.parent("picture");
                t.loadImage(a[0], c || o, d, p, !1, () => {
                  if (null != t && t && (!t || t.params) && !t.destroyed) {
                    if (
                      (o
                        ? (a.css("background-image", `url("${o}")`),
                          a.removeAttr("data-background"))
                        : (d &&
                            (a.attr("srcset", d), a.removeAttr("data-srcset")),
                          p && (a.attr("sizes", p), a.removeAttr("data-sizes")),
                          h.length &&
                            h.children("source").each((e) => {
                              const t = u(e);
                              t.attr("data-srcset") &&
                                (t.attr("srcset", t.attr("data-srcset")),
                                t.removeAttr("data-srcset"));
                            }),
                          c && (a.attr("src", c), a.removeAttr("data-src"))),
                      a.addClass(s.loadedClass).removeClass(s.loadingClass),
                      r.find(`.${s.preloaderClass}`).remove(),
                      t.params.loop && i)
                    ) {
                      const e = r.attr("data-swiper-slide-index");
                      r.hasClass(t.params.slideDuplicateClass)
                        ? l(
                            t.$wrapperEl
                              .children(
                                `[data-swiper-slide-index="${e}"]:not(.${t.params.slideDuplicateClass})`
                              )
                              .index(),
                            !1
                          )
                        : l(
                            t.$wrapperEl
                              .children(
                                `.${t.params.slideDuplicateClass}[data-swiper-slide-index="${e}"]`
                              )
                              .index(),
                            !1
                          );
                    }
                    n("lazyImageReady", r[0], a[0]),
                      t.params.autoHeight && t.updateAutoHeight();
                  }
                }),
                  n("lazyImageLoad", r[0], a[0]);
              });
        }
        function c() {
          const { $wrapperEl: e, params: i, slides: s, activeIndex: n } = t,
            r = t.virtual && i.virtual.enabled,
            a = i.lazy;
          let c = i.slidesPerView;
          function d(t) {
            if (r) {
              if (
                e.children(`.${i.slideClass}[data-swiper-slide-index="${t}"]`)
                  .length
              )
                return !0;
            } else if (s[t]) return !0;
            return !1;
          }
          function p(e) {
            return r ? u(e).attr("data-swiper-slide-index") : u(e).index();
          }
          if (
            ("auto" === c && (c = 0),
            o || (o = !0),
            t.params.watchSlidesProgress)
          )
            e.children(`.${i.slideVisibleClass}`).each((e) => {
              l(r ? u(e).attr("data-swiper-slide-index") : u(e).index());
            });
          else if (c > 1) for (let e = n; e < n + c; e += 1) d(e) && l(e);
          else l(n);
          if (a.loadPrevNext)
            if (c > 1 || (a.loadPrevNextAmount && a.loadPrevNextAmount > 1)) {
              const e = a.loadPrevNextAmount,
                t = Math.ceil(c),
                i = Math.min(n + t + Math.max(e, t), s.length),
                r = Math.max(n - Math.max(t, e), 0);
              for (let e = n + t; e < i; e += 1) d(e) && l(e);
              for (let e = r; e < n; e += 1) d(e) && l(e);
            } else {
              const t = e.children(`.${i.slideNextClass}`);
              t.length > 0 && l(p(t));
              const s = e.children(`.${i.slidePrevClass}`);
              s.length > 0 && l(p(s));
            }
        }
        function d() {
          const e = r();
          if (!t || t.destroyed) return;
          const i = t.params.lazy.scrollingElement
              ? u(t.params.lazy.scrollingElement)
              : u(e),
            s = i[0] === e,
            n = s ? e.innerWidth : i[0].offsetWidth,
            o = s ? e.innerHeight : i[0].offsetHeight,
            l = t.$el.offset(),
            { rtlTranslate: p } = t;
          let h = !1;
          p && (l.left -= t.$el[0].scrollLeft);
          const f = [
            [l.left, l.top],
            [l.left + t.width, l.top],
            [l.left, l.top + t.height],
            [l.left + t.width, l.top + t.height],
          ];
          for (let e = 0; e < f.length; e += 1) {
            const t = f[e];
            if (t[0] >= 0 && t[0] <= n && t[1] >= 0 && t[1] <= o) {
              if (0 === t[0] && 0 === t[1]) continue;
              h = !0;
            }
          }
          const m = !(
            "touchstart" !== t.touchEvents.start ||
            !t.support.passiveListener ||
            !t.params.passiveListeners
          ) && { passive: !0, capture: !1 };
          h
            ? (c(), i.off("scroll", d, m))
            : a || ((a = !0), i.on("scroll", d, m));
        }
        s("beforeInit", () => {
          t.params.lazy.enabled &&
            t.params.preloadImages &&
            (t.params.preloadImages = !1);
        }),
          s("init", () => {
            t.params.lazy.enabled && (t.params.lazy.checkInView ? d() : c());
          }),
          s("scroll", () => {
            t.params.freeMode &&
              t.params.freeMode.enabled &&
              !t.params.freeMode.sticky &&
              c();
          }),
          s("scrollbarDragMove resize _freeModeNoMomentumRelease", () => {
            t.params.lazy.enabled && (t.params.lazy.checkInView ? d() : c());
          }),
          s("transitionStart", () => {
            t.params.lazy.enabled &&
              (t.params.lazy.loadOnTransitionStart ||
                (!t.params.lazy.loadOnTransitionStart && !o)) &&
              (t.params.lazy.checkInView ? d() : c());
          }),
          s("transitionEnd", () => {
            t.params.lazy.enabled &&
              !t.params.lazy.loadOnTransitionStart &&
              (t.params.lazy.checkInView ? d() : c());
          }),
          s("slideChange", () => {
            const {
              lazy: e,
              cssMode: i,
              watchSlidesProgress: s,
              touchReleaseOnEdges: n,
              resistanceRatio: r,
            } = t.params;
            e.enabled && (i || (s && (n || 0 === r))) && c();
          }),
          s("destroy", () => {
            t.$el &&
              t.$el
                .find(`.${t.params.lazy.loadingClass}`)
                .removeClass(t.params.lazy.loadingClass);
          }),
          Object.assign(t.lazy, { load: c, loadInSlide: l });
      },
      function (e) {
        let { swiper: t, extendParams: i, on: s } = e;
        function n(e, t) {
          const i = (function () {
            let e, t, i;
            return (s, n) => {
              for (t = -1, e = s.length; e - t > 1; )
                (i = (e + t) >> 1), s[i] <= n ? (t = i) : (e = i);
              return e;
            };
          })();
          let s, n;
          return (
            (this.x = e),
            (this.y = t),
            (this.lastIndex = e.length - 1),
            (this.interpolate = function (e) {
              return e
                ? ((n = i(this.x, e)),
                  (s = n - 1),
                  ((e - this.x[s]) * (this.y[n] - this.y[s])) /
                    (this.x[n] - this.x[s]) +
                    this.y[s])
                : 0;
            }),
            this
          );
        }
        function r() {
          t.controller.control &&
            t.controller.spline &&
            ((t.controller.spline = void 0), delete t.controller.spline);
        }
        i({ controller: { control: void 0, inverse: !1, by: "slide" } }),
          (t.controller = { control: void 0 }),
          s("beforeInit", () => {
            t.controller.control = t.params.controller.control;
          }),
          s("update", () => {
            r();
          }),
          s("resize", () => {
            r();
          }),
          s("observerUpdate", () => {
            r();
          }),
          s("setTranslate", (e, i, s) => {
            t.controller.control && t.controller.setTranslate(i, s);
          }),
          s("setTransition", (e, i, s) => {
            t.controller.control && t.controller.setTransition(i, s);
          }),
          Object.assign(t.controller, {
            setTranslate: function (e, i) {
              const s = t.controller.control;
              let r, a;
              const o = t.constructor;
              function l(e) {
                const i = t.rtlTranslate ? -t.translate : t.translate;
                "slide" === t.params.controller.by &&
                  ((function (e) {
                    t.controller.spline ||
                      (t.controller.spline = t.params.loop
                        ? new n(t.slidesGrid, e.slidesGrid)
                        : new n(t.snapGrid, e.snapGrid));
                  })(e),
                  (a = -t.controller.spline.interpolate(-i))),
                  (a && "container" !== t.params.controller.by) ||
                    ((r =
                      (e.maxTranslate() - e.minTranslate()) /
                      (t.maxTranslate() - t.minTranslate())),
                    (a = (i - t.minTranslate()) * r + e.minTranslate())),
                  t.params.controller.inverse && (a = e.maxTranslate() - a),
                  e.updateProgress(a),
                  e.setTranslate(a, t),
                  e.updateActiveIndex(),
                  e.updateSlidesClasses();
              }
              if (Array.isArray(s))
                for (let e = 0; e < s.length; e += 1)
                  s[e] !== i && s[e] instanceof o && l(s[e]);
              else s instanceof o && i !== s && l(s);
            },
            setTransition: function (e, i) {
              const s = t.constructor,
                n = t.controller.control;
              let r;
              function a(i) {
                i.setTransition(e, t),
                  0 !== e &&
                    (i.transitionStart(),
                    i.params.autoHeight &&
                      d(() => {
                        i.updateAutoHeight();
                      }),
                    i.$wrapperEl.transitionEnd(() => {
                      n &&
                        (i.params.loop &&
                          "slide" === t.params.controller.by &&
                          i.loopFix(),
                        i.transitionEnd());
                    }));
              }
              if (Array.isArray(n))
                for (r = 0; r < n.length; r += 1)
                  n[r] !== i && n[r] instanceof s && a(n[r]);
              else n instanceof s && i !== n && a(n);
            },
          });
      },
      function (e) {
        let { swiper: t, extendParams: i, on: s } = e;
        i({
          a11y: {
            enabled: !0,
            notificationClass: "swiper-notification",
            prevSlideMessage: "Previous slide",
            nextSlideMessage: "Next slide",
            firstSlideMessage: "This is the first slide",
            lastSlideMessage: "This is the last slide",
            paginationBulletMessage: "Go to slide {{index}}",
            slideLabelMessage: "{{index}} / {{slidesLength}}",
            containerMessage: null,
            containerRoleDescriptionMessage: null,
            itemRoleDescriptionMessage: null,
            slideRole: "group",
            id: null,
          },
        }),
          (t.a11y = { clicked: !1 });
        let n = null;
        function r(e) {
          const t = n;
          0 !== t.length && (t.html(""), t.html(e));
        }
        function a(e) {
          e.attr("tabIndex", "0");
        }
        function o(e) {
          e.attr("tabIndex", "-1");
        }
        function l(e, t) {
          e.attr("role", t);
        }
        function c(e, t) {
          e.attr("aria-roledescription", t);
        }
        function d(e, t) {
          e.attr("aria-label", t);
        }
        function p(e) {
          e.attr("aria-disabled", !0);
        }
        function h(e) {
          e.attr("aria-disabled", !1);
        }
        function f(e) {
          if (13 !== e.keyCode && 32 !== e.keyCode) return;
          const i = t.params.a11y,
            s = u(e.target);
          t.navigation &&
            t.navigation.$nextEl &&
            s.is(t.navigation.$nextEl) &&
            ((t.isEnd && !t.params.loop) || t.slideNext(),
            t.isEnd ? r(i.lastSlideMessage) : r(i.nextSlideMessage)),
            t.navigation &&
              t.navigation.$prevEl &&
              s.is(t.navigation.$prevEl) &&
              ((t.isBeginning && !t.params.loop) || t.slidePrev(),
              t.isBeginning ? r(i.firstSlideMessage) : r(i.prevSlideMessage)),
            t.pagination &&
              s.is(U(t.params.pagination.bulletClass)) &&
              s[0].click();
        }
        function m() {
          return (
            t.pagination && t.pagination.bullets && t.pagination.bullets.length
          );
        }
        function g() {
          return m() && t.params.pagination.clickable;
        }
        const v = (e, t, i) => {
            a(e),
              "BUTTON" !== e[0].tagName && (l(e, "button"), e.on("keydown", f)),
              d(e, i),
              (function (e, t) {
                e.attr("aria-controls", t);
              })(e, t);
          },
          y = () => {
            t.a11y.clicked = !0;
          },
          b = () => {
            requestAnimationFrame(() => {
              requestAnimationFrame(() => {
                t.destroyed || (t.a11y.clicked = !1);
              });
            });
          },
          w = (e) => {
            if (t.a11y.clicked) return;
            const i = e.target.closest(`.${t.params.slideClass}`);
            if (!i || !t.slides.includes(i)) return;
            const s = t.slides.indexOf(i) === t.activeIndex,
              n =
                t.params.watchSlidesProgress &&
                t.visibleSlides &&
                t.visibleSlides.includes(i);
            s ||
              n ||
              (e.sourceCapabilities && e.sourceCapabilities.firesTouchEvents) ||
              (t.isHorizontal() ? (t.el.scrollLeft = 0) : (t.el.scrollTop = 0),
              t.slideTo(t.slides.indexOf(i), 0));
          },
          D = () => {
            const e = t.params.a11y;
            e.itemRoleDescriptionMessage &&
              c(u(t.slides), e.itemRoleDescriptionMessage),
              e.slideRole && l(u(t.slides), e.slideRole);
            const i = t.params.loop
              ? t.slides.filter(
                  (e) => !e.classList.contains(t.params.slideDuplicateClass)
                ).length
              : t.slides.length;
            e.slideLabelMessage &&
              t.slides.each((s, n) => {
                const r = u(s),
                  a = t.params.loop
                    ? parseInt(r.attr("data-swiper-slide-index"), 10)
                    : n;
                d(
                  r,
                  e.slideLabelMessage
                    .replace(/\{\{index\}\}/, a + 1)
                    .replace(/\{\{slidesLength\}\}/, i)
                );
              });
          };
        s("beforeInit", () => {
          n = u(
            `<span class="${t.params.a11y.notificationClass}" aria-live="assertive" aria-atomic="true"></span>`
          );
        }),
          s("afterInit", () => {
            t.params.a11y.enabled &&
              (() => {
                const e = t.params.a11y;
                t.$el.append(n);
                const i = t.$el;
                e.containerRoleDescriptionMessage &&
                  c(i, e.containerRoleDescriptionMessage),
                  e.containerMessage && d(i, e.containerMessage);
                const s = t.$wrapperEl,
                  r =
                    e.id ||
                    s.attr("id") ||
                    `swiper-wrapper-${
                      ((a = 16),
                      void 0 === a && (a = 16),
                      "x"
                        .repeat(a)
                        .replace(/x/g, () =>
                          Math.round(16 * Math.random()).toString(16)
                        ))
                    }`;
                var a;
                const o =
                  t.params.autoplay && t.params.autoplay.enabled
                    ? "off"
                    : "polite";
                var l;
                let u, p;
                (l = r),
                  s.attr("id", l),
                  (function (e, t) {
                    e.attr("aria-live", t);
                  })(s, o),
                  D(),
                  t.navigation &&
                    t.navigation.$nextEl &&
                    (u = t.navigation.$nextEl),
                  t.navigation &&
                    t.navigation.$prevEl &&
                    (p = t.navigation.$prevEl),
                  u && u.length && v(u, r, e.nextSlideMessage),
                  p && p.length && v(p, r, e.prevSlideMessage),
                  g() &&
                    t.pagination.$el.on(
                      "keydown",
                      U(t.params.pagination.bulletClass),
                      f
                    ),
                  t.$el.on("focus", w, !0),
                  t.$el.on("pointerdown", y, !0),
                  t.$el.on("pointerup", b, !0);
              })();
          }),
          s(
            "slidesLengthChange snapGridLengthChange slidesGridLengthChange",
            () => {
              t.params.a11y.enabled && D();
            }
          ),
          s("fromEdge toEdge afterInit lock unlock", () => {
            t.params.a11y.enabled &&
              (function () {
                if (t.params.loop || t.params.rewind || !t.navigation) return;
                const { $nextEl: e, $prevEl: i } = t.navigation;
                i &&
                  i.length > 0 &&
                  (t.isBeginning ? (p(i), o(i)) : (h(i), a(i))),
                  e && e.length > 0 && (t.isEnd ? (p(e), o(e)) : (h(e), a(e)));
              })();
          }),
          s("paginationUpdate", () => {
            t.params.a11y.enabled &&
              (function () {
                const e = t.params.a11y;
                m() &&
                  t.pagination.bullets.each((i) => {
                    const s = u(i);
                    t.params.pagination.clickable &&
                      (a(s),
                      t.params.pagination.renderBullet ||
                        (l(s, "button"),
                        d(
                          s,
                          e.paginationBulletMessage.replace(
                            /\{\{index\}\}/,
                            s.index() + 1
                          )
                        ))),
                      s.is(`.${t.params.pagination.bulletActiveClass}`)
                        ? s.attr("aria-current", "true")
                        : s.removeAttr("aria-current");
                  });
              })();
          }),
          s("destroy", () => {
            t.params.a11y.enabled &&
              (function () {
                let e, i;
                n && n.length > 0 && n.remove(),
                  t.navigation &&
                    t.navigation.$nextEl &&
                    (e = t.navigation.$nextEl),
                  t.navigation &&
                    t.navigation.$prevEl &&
                    (i = t.navigation.$prevEl),
                  e && e.off("keydown", f),
                  i && i.off("keydown", f),
                  g() &&
                    t.pagination.$el.off(
                      "keydown",
                      U(t.params.pagination.bulletClass),
                      f
                    ),
                  t.$el.off("focus", w, !0),
                  t.$el.off("pointerdown", y, !0),
                  t.$el.off("pointerup", b, !0);
              })();
          });
      },
      function (e) {
        let { swiper: t, extendParams: i, on: s } = e;
        i({
          history: {
            enabled: !1,
            root: "",
            replaceState: !1,
            key: "slides",
            keepQuery: !1,
          },
        });
        let n = !1,
          a = {};
        const o = (e) =>
            e
              .toString()
              .replace(/\s+/g, "-")
              .replace(/[^\w-]+/g, "")
              .replace(/--+/g, "-")
              .replace(/^-+/, "")
              .replace(/-+$/, ""),
          l = (e) => {
            const t = r();
            let i;
            i = e ? new URL(e) : t.location;
            const s = i.pathname
                .slice(1)
                .split("/")
                .filter((e) => "" !== e),
              n = s.length;
            return { key: s[n - 2], value: s[n - 1] };
          },
          u = (e, i) => {
            const s = r();
            if (!n || !t.params.history.enabled) return;
            let a;
            a = t.params.url ? new URL(t.params.url) : s.location;
            const l = t.slides.eq(i);
            let u = o(l.attr("data-history"));
            if (t.params.history.root.length > 0) {
              let i = t.params.history.root;
              "/" === i[i.length - 1] && (i = i.slice(0, i.length - 1)),
                (u = `${i}/${e}/${u}`);
            } else a.pathname.includes(e) || (u = `${e}/${u}`);
            t.params.history.keepQuery && (u += a.search);
            const c = s.history.state;
            (c && c.value === u) ||
              (t.params.history.replaceState
                ? s.history.replaceState({ value: u }, null, u)
                : s.history.pushState({ value: u }, null, u));
          },
          c = (e, i, s) => {
            if (i)
              for (let n = 0, r = t.slides.length; n < r; n += 1) {
                const r = t.slides.eq(n);
                if (
                  o(r.attr("data-history")) === i &&
                  !r.hasClass(t.params.slideDuplicateClass)
                ) {
                  const i = r.index();
                  t.slideTo(i, e, s);
                }
              }
            else t.slideTo(0, e, s);
          },
          d = () => {
            (a = l(t.params.url)), c(t.params.speed, a.value, !1);
          };
        s("init", () => {
          t.params.history.enabled &&
            (() => {
              const e = r();
              if (t.params.history) {
                if (!e.history || !e.history.pushState)
                  return (
                    (t.params.history.enabled = !1),
                    void (t.params.hashNavigation.enabled = !0)
                  );
                (n = !0),
                  (a = l(t.params.url)),
                  (a.key || a.value) &&
                    (c(0, a.value, t.params.runCallbacksOnInit),
                    t.params.history.replaceState ||
                      e.addEventListener("popstate", d));
              }
            })();
        }),
          s("destroy", () => {
            t.params.history.enabled &&
              (() => {
                const e = r();
                t.params.history.replaceState ||
                  e.removeEventListener("popstate", d);
              })();
          }),
          s("transitionEnd _freeModeNoMomentumRelease", () => {
            n && u(t.params.history.key, t.activeIndex);
          }),
          s("slideChange", () => {
            n && t.params.cssMode && u(t.params.history.key, t.activeIndex);
          });
      },
      function (e) {
        let { swiper: t, extendParams: i, emit: n, on: a } = e,
          o = !1;
        const l = s(),
          c = r();
        i({
          hashNavigation: { enabled: !1, replaceState: !1, watchState: !1 },
        });
        const d = () => {
            n("hashChange");
            const e = l.location.hash.replace("#", "");
            if (e !== t.slides.eq(t.activeIndex).attr("data-hash")) {
              const i = t.$wrapperEl
                .children(`.${t.params.slideClass}[data-hash="${e}"]`)
                .index();
              if (void 0 === i) return;
              t.slideTo(i);
            }
          },
          p = () => {
            if (o && t.params.hashNavigation.enabled)
              if (
                t.params.hashNavigation.replaceState &&
                c.history &&
                c.history.replaceState
              )
                c.history.replaceState(
                  null,
                  null,
                  `#${t.slides.eq(t.activeIndex).attr("data-hash")}` || ""
                ),
                  n("hashSet");
              else {
                const e = t.slides.eq(t.activeIndex),
                  i = e.attr("data-hash") || e.attr("data-history");
                (l.location.hash = i || ""), n("hashSet");
              }
          };
        a("init", () => {
          t.params.hashNavigation.enabled &&
            (() => {
              if (
                !t.params.hashNavigation.enabled ||
                (t.params.history && t.params.history.enabled)
              )
                return;
              o = !0;
              const e = l.location.hash.replace("#", "");
              if (e) {
                const i = 0;
                for (let s = 0, n = t.slides.length; s < n; s += 1) {
                  const n = t.slides.eq(s);
                  if (
                    (n.attr("data-hash") || n.attr("data-history")) === e &&
                    !n.hasClass(t.params.slideDuplicateClass)
                  ) {
                    const e = n.index();
                    t.slideTo(e, i, t.params.runCallbacksOnInit, !0);
                  }
                }
              }
              t.params.hashNavigation.watchState && u(c).on("hashchange", d);
            })();
        }),
          a("destroy", () => {
            t.params.hashNavigation.enabled &&
              t.params.hashNavigation.watchState &&
              u(c).off("hashchange", d);
          }),
          a("transitionEnd _freeModeNoMomentumRelease", () => {
            o && p();
          }),
          a("slideChange", () => {
            o && t.params.cssMode && p();
          });
      },
      function (e) {
        let t,
          { swiper: i, extendParams: n, on: r, emit: a } = e;
        function o() {
          if (!i.size)
            return (i.autoplay.running = !1), void (i.autoplay.paused = !1);
          const e = i.slides.eq(i.activeIndex);
          let s = i.params.autoplay.delay;
          e.attr("data-swiper-autoplay") &&
            (s = e.attr("data-swiper-autoplay") || i.params.autoplay.delay),
            clearTimeout(t),
            (t = d(() => {
              let e;
              i.params.autoplay.reverseDirection
                ? i.params.loop
                  ? (i.loopFix(),
                    (e = i.slidePrev(i.params.speed, !0, !0)),
                    a("autoplay"))
                  : i.isBeginning
                  ? i.params.autoplay.stopOnLastSlide
                    ? u()
                    : ((e = i.slideTo(
                        i.slides.length - 1,
                        i.params.speed,
                        !0,
                        !0
                      )),
                      a("autoplay"))
                  : ((e = i.slidePrev(i.params.speed, !0, !0)), a("autoplay"))
                : i.params.loop
                ? (i.loopFix(),
                  (e = i.slideNext(i.params.speed, !0, !0)),
                  a("autoplay"))
                : i.isEnd
                ? i.params.autoplay.stopOnLastSlide
                  ? u()
                  : ((e = i.slideTo(0, i.params.speed, !0, !0)), a("autoplay"))
                : ((e = i.slideNext(i.params.speed, !0, !0)), a("autoplay")),
                ((i.params.cssMode && i.autoplay.running) || !1 === e) && o();
            }, s));
        }
        function l() {
          return (
            void 0 === t &&
            !i.autoplay.running &&
            ((i.autoplay.running = !0), a("autoplayStart"), o(), !0)
          );
        }
        function u() {
          return (
            !!i.autoplay.running &&
            void 0 !== t &&
            (t && (clearTimeout(t), (t = void 0)),
            (i.autoplay.running = !1),
            a("autoplayStop"),
            !0)
          );
        }
        function c(e) {
          i.autoplay.running &&
            (i.autoplay.paused ||
              (t && clearTimeout(t),
              (i.autoplay.paused = !0),
              0 !== e && i.params.autoplay.waitForTransition
                ? ["transitionend", "webkitTransitionEnd"].forEach((e) => {
                    i.$wrapperEl[0].addEventListener(e, h);
                  })
                : ((i.autoplay.paused = !1), o())));
        }
        function p() {
          const e = s();
          "hidden" === e.visibilityState && i.autoplay.running && c(),
            "visible" === e.visibilityState &&
              i.autoplay.paused &&
              (o(), (i.autoplay.paused = !1));
        }
        function h(e) {
          i &&
            !i.destroyed &&
            i.$wrapperEl &&
            e.target === i.$wrapperEl[0] &&
            (["transitionend", "webkitTransitionEnd"].forEach((e) => {
              i.$wrapperEl[0].removeEventListener(e, h);
            }),
            (i.autoplay.paused = !1),
            i.autoplay.running ? o() : u());
        }
        function f() {
          i.params.autoplay.disableOnInteraction
            ? u()
            : (a("autoplayPause"), c()),
            ["transitionend", "webkitTransitionEnd"].forEach((e) => {
              i.$wrapperEl[0].removeEventListener(e, h);
            });
        }
        function m() {
          i.params.autoplay.disableOnInteraction ||
            ((i.autoplay.paused = !1), a("autoplayResume"), o());
        }
        (i.autoplay = { running: !1, paused: !1 }),
          n({
            autoplay: {
              enabled: !1,
              delay: 3e3,
              waitForTransition: !0,
              disableOnInteraction: !0,
              stopOnLastSlide: !1,
              reverseDirection: !1,
              pauseOnMouseEnter: !1,
            },
          }),
          r("init", () => {
            i.params.autoplay.enabled &&
              (l(),
              s().addEventListener("visibilitychange", p),
              i.params.autoplay.pauseOnMouseEnter &&
                (i.$el.on("mouseenter", f), i.$el.on("mouseleave", m)));
          }),
          r("beforeTransitionStart", (e, t, s) => {
            i.autoplay.running &&
              (s || !i.params.autoplay.disableOnInteraction
                ? i.autoplay.pause(t)
                : u());
          }),
          r("sliderFirstMove", () => {
            i.autoplay.running &&
              (i.params.autoplay.disableOnInteraction ? u() : c());
          }),
          r("touchEnd", () => {
            i.params.cssMode &&
              i.autoplay.paused &&
              !i.params.autoplay.disableOnInteraction &&
              o();
          }),
          r("destroy", () => {
            i.$el.off("mouseenter", f),
              i.$el.off("mouseleave", m),
              i.autoplay.running && u(),
              s().removeEventListener("visibilitychange", p);
          }),
          Object.assign(i.autoplay, { pause: c, run: o, start: l, stop: u });
      },
      function (e) {
        let { swiper: t, extendParams: i, on: s } = e;
        i({
          thumbs: {
            swiper: null,
            multipleActiveThumbs: !0,
            autoScrollOffset: 0,
            slideThumbActiveClass: "swiper-slide-thumb-active",
            thumbsContainerClass: "swiper-thumbs",
          },
        });
        let n = !1,
          r = !1;
        function a() {
          const e = t.thumbs.swiper;
          if (!e || e.destroyed) return;
          const i = e.clickedIndex,
            s = e.clickedSlide;
          if (s && u(s).hasClass(t.params.thumbs.slideThumbActiveClass)) return;
          if (null == i) return;
          let n;
          if (
            ((n = e.params.loop
              ? parseInt(u(e.clickedSlide).attr("data-swiper-slide-index"), 10)
              : i),
            t.params.loop)
          ) {
            let e = t.activeIndex;
            t.slides.eq(e).hasClass(t.params.slideDuplicateClass) &&
              (t.loopFix(),
              (t._clientLeft = t.$wrapperEl[0].clientLeft),
              (e = t.activeIndex));
            const i = t.slides
                .eq(e)
                .prevAll(`[data-swiper-slide-index="${n}"]`)
                .eq(0)
                .index(),
              s = t.slides
                .eq(e)
                .nextAll(`[data-swiper-slide-index="${n}"]`)
                .eq(0)
                .index();
            n = void 0 === i ? s : void 0 === s ? i : s - e < e - i ? s : i;
          }
          t.slideTo(n);
        }
        function o() {
          const { thumbs: e } = t.params;
          if (n) return !1;
          n = !0;
          const i = t.constructor;
          if (e.swiper instanceof i)
            (t.thumbs.swiper = e.swiper),
              Object.assign(t.thumbs.swiper.originalParams, {
                watchSlidesProgress: !0,
                slideToClickedSlide: !1,
              }),
              Object.assign(t.thumbs.swiper.params, {
                watchSlidesProgress: !0,
                slideToClickedSlide: !1,
              });
          else if (f(e.swiper)) {
            const s = Object.assign({}, e.swiper);
            Object.assign(s, {
              watchSlidesProgress: !0,
              slideToClickedSlide: !1,
            }),
              (t.thumbs.swiper = new i(s)),
              (r = !0);
          }
          return (
            t.thumbs.swiper.$el.addClass(t.params.thumbs.thumbsContainerClass),
            t.thumbs.swiper.on("tap", a),
            !0
          );
        }
        function l(e) {
          const i = t.thumbs.swiper;
          if (!i || i.destroyed) return;
          const s =
            "auto" === i.params.slidesPerView
              ? i.slidesPerViewDynamic()
              : i.params.slidesPerView;
          let n = 1;
          const r = t.params.thumbs.slideThumbActiveClass;
          if (
            (t.params.slidesPerView > 1 &&
              !t.params.centeredSlides &&
              (n = t.params.slidesPerView),
            t.params.thumbs.multipleActiveThumbs || (n = 1),
            (n = Math.floor(n)),
            i.slides.removeClass(r),
            i.params.loop || (i.params.virtual && i.params.virtual.enabled))
          )
            for (let e = 0; e < n; e += 1)
              i.$wrapperEl
                .children(`[data-swiper-slide-index="${t.realIndex + e}"]`)
                .addClass(r);
          else
            for (let e = 0; e < n; e += 1)
              i.slides.eq(t.realIndex + e).addClass(r);
          const a = t.params.thumbs.autoScrollOffset,
            o = a && !i.params.loop;
          if (t.realIndex !== i.realIndex || o) {
            let n,
              r,
              l = i.activeIndex;
            if (i.params.loop) {
              i.slides.eq(l).hasClass(i.params.slideDuplicateClass) &&
                (i.loopFix(),
                (i._clientLeft = i.$wrapperEl[0].clientLeft),
                (l = i.activeIndex));
              const e = i.slides
                  .eq(l)
                  .prevAll(`[data-swiper-slide-index="${t.realIndex}"]`)
                  .eq(0)
                  .index(),
                s = i.slides
                  .eq(l)
                  .nextAll(`[data-swiper-slide-index="${t.realIndex}"]`)
                  .eq(0)
                  .index();
              (n =
                void 0 === e
                  ? s
                  : void 0 === s
                  ? e
                  : s - l == l - e
                  ? i.params.slidesPerGroup > 1
                    ? s
                    : l
                  : s - l < l - e
                  ? s
                  : e),
                (r = t.activeIndex > t.previousIndex ? "next" : "prev");
            } else
              (n = t.realIndex), (r = n > t.previousIndex ? "next" : "prev");
            o && (n += "next" === r ? a : -1 * a),
              i.visibleSlidesIndexes &&
                i.visibleSlidesIndexes.indexOf(n) < 0 &&
                (i.params.centeredSlides
                  ? (n =
                      n > l
                        ? n - Math.floor(s / 2) + 1
                        : n + Math.floor(s / 2) - 1)
                  : n > l && i.params.slidesPerGroup,
                i.slideTo(n, e ? 0 : void 0));
          }
        }
        (t.thumbs = { swiper: null }),
          s("beforeInit", () => {
            const { thumbs: e } = t.params;
            e && e.swiper && (o(), l(!0));
          }),
          s("slideChange update resize observerUpdate", () => {
            l();
          }),
          s("setTransition", (e, i) => {
            const s = t.thumbs.swiper;
            s && !s.destroyed && s.setTransition(i);
          }),
          s("beforeDestroy", () => {
            const e = t.thumbs.swiper;
            e && !e.destroyed && r && e.destroy();
          }),
          Object.assign(t.thumbs, { init: o, update: l });
      },
      function (e) {
        let { swiper: t, extendParams: i, emit: s, once: n } = e;
        i({
          freeMode: {
            enabled: !1,
            momentum: !0,
            momentumRatio: 1,
            momentumBounce: !0,
            momentumBounceRatio: 1,
            momentumVelocityRatio: 1,
            sticky: !1,
            minimumVelocity: 0.02,
          },
        }),
          Object.assign(t, {
            freeMode: {
              onTouchStart: function () {
                const e = t.getTranslate();
                t.setTranslate(e),
                  t.setTransition(0),
                  (t.touchEventsData.velocities.length = 0),
                  t.freeMode.onTouchEnd({
                    currentPos: t.rtl ? t.translate : -t.translate,
                  });
              },
              onTouchMove: function () {
                const { touchEventsData: e, touches: i } = t;
                0 === e.velocities.length &&
                  e.velocities.push({
                    position: i[t.isHorizontal() ? "startX" : "startY"],
                    time: e.touchStartTime,
                  }),
                  e.velocities.push({
                    position: i[t.isHorizontal() ? "currentX" : "currentY"],
                    time: p(),
                  });
              },
              onTouchEnd: function (e) {
                let { currentPos: i } = e;
                const {
                    params: r,
                    $wrapperEl: a,
                    rtlTranslate: o,
                    snapGrid: l,
                    touchEventsData: u,
                  } = t,
                  c = p() - u.touchStartTime;
                if (i < -t.minTranslate()) t.slideTo(t.activeIndex);
                else if (i > -t.maxTranslate())
                  t.slides.length < l.length
                    ? t.slideTo(l.length - 1)
                    : t.slideTo(t.slides.length - 1);
                else {
                  if (r.freeMode.momentum) {
                    if (u.velocities.length > 1) {
                      const e = u.velocities.pop(),
                        i = u.velocities.pop(),
                        s = e.position - i.position,
                        n = e.time - i.time;
                      (t.velocity = s / n),
                        (t.velocity /= 2),
                        Math.abs(t.velocity) < r.freeMode.minimumVelocity &&
                          (t.velocity = 0),
                        (n > 150 || p() - e.time > 300) && (t.velocity = 0);
                    } else t.velocity = 0;
                    (t.velocity *= r.freeMode.momentumVelocityRatio),
                      (u.velocities.length = 0);
                    let e = 1e3 * r.freeMode.momentumRatio;
                    const i = t.velocity * e;
                    let c = t.translate + i;
                    o && (c = -c);
                    let d,
                      h = !1;
                    const f =
                      20 *
                      Math.abs(t.velocity) *
                      r.freeMode.momentumBounceRatio;
                    let m;
                    if (c < t.maxTranslate())
                      r.freeMode.momentumBounce
                        ? (c + t.maxTranslate() < -f &&
                            (c = t.maxTranslate() - f),
                          (d = t.maxTranslate()),
                          (h = !0),
                          (u.allowMomentumBounce = !0))
                        : (c = t.maxTranslate()),
                        r.loop && r.centeredSlides && (m = !0);
                    else if (c > t.minTranslate())
                      r.freeMode.momentumBounce
                        ? (c - t.minTranslate() > f &&
                            (c = t.minTranslate() + f),
                          (d = t.minTranslate()),
                          (h = !0),
                          (u.allowMomentumBounce = !0))
                        : (c = t.minTranslate()),
                        r.loop && r.centeredSlides && (m = !0);
                    else if (r.freeMode.sticky) {
                      let e;
                      for (let t = 0; t < l.length; t += 1)
                        if (l[t] > -c) {
                          e = t;
                          break;
                        }
                      (c =
                        Math.abs(l[e] - c) < Math.abs(l[e - 1] - c) ||
                        "next" === t.swipeDirection
                          ? l[e]
                          : l[e - 1]),
                        (c = -c);
                    }
                    if (
                      (m &&
                        n("transitionEnd", () => {
                          t.loopFix();
                        }),
                      0 !== t.velocity)
                    ) {
                      if (
                        ((e = o
                          ? Math.abs((-c - t.translate) / t.velocity)
                          : Math.abs((c - t.translate) / t.velocity)),
                        r.freeMode.sticky)
                      ) {
                        const i = Math.abs((o ? -c : c) - t.translate),
                          s = t.slidesSizesGrid[t.activeIndex];
                        e =
                          i < s
                            ? r.speed
                            : i < 2 * s
                            ? 1.5 * r.speed
                            : 2.5 * r.speed;
                      }
                    } else if (r.freeMode.sticky)
                      return void t.slideToClosest();
                    r.freeMode.momentumBounce && h
                      ? (t.updateProgress(d),
                        t.setTransition(e),
                        t.setTranslate(c),
                        t.transitionStart(!0, t.swipeDirection),
                        (t.animating = !0),
                        a.transitionEnd(() => {
                          t &&
                            !t.destroyed &&
                            u.allowMomentumBounce &&
                            (s("momentumBounce"),
                            t.setTransition(r.speed),
                            setTimeout(() => {
                              t.setTranslate(d),
                                a.transitionEnd(() => {
                                  t && !t.destroyed && t.transitionEnd();
                                });
                            }, 0));
                        }))
                      : t.velocity
                      ? (s("_freeModeNoMomentumRelease"),
                        t.updateProgress(c),
                        t.setTransition(e),
                        t.setTranslate(c),
                        t.transitionStart(!0, t.swipeDirection),
                        t.animating ||
                          ((t.animating = !0),
                          a.transitionEnd(() => {
                            t && !t.destroyed && t.transitionEnd();
                          })))
                      : t.updateProgress(c),
                      t.updateActiveIndex(),
                      t.updateSlidesClasses();
                  } else {
                    if (r.freeMode.sticky) return void t.slideToClosest();
                    r.freeMode && s("_freeModeNoMomentumRelease");
                  }
                  (!r.freeMode.momentum || c >= r.longSwipesMs) &&
                    (t.updateProgress(),
                    t.updateActiveIndex(),
                    t.updateSlidesClasses());
                }
              },
            },
          });
      },
      function (e) {
        let t,
          i,
          s,
          { swiper: n, extendParams: r } = e;
        r({ grid: { rows: 1, fill: "column" } }),
          (n.grid = {
            initSlides: (e) => {
              const { slidesPerView: r } = n.params,
                { rows: a, fill: o } = n.params.grid;
              (i = t / a),
                (s = Math.floor(e / a)),
                (t = Math.floor(e / a) === e / a ? e : Math.ceil(e / a) * a),
                "auto" !== r && "row" === o && (t = Math.max(t, r * a));
            },
            updateSlide: (e, r, a, o) => {
              const { slidesPerGroup: l, spaceBetween: u } = n.params,
                { rows: c, fill: d } = n.params.grid;
              let p, h, f;
              if ("row" === d && l > 1) {
                const i = Math.floor(e / (l * c)),
                  s = e - c * l * i,
                  n = 0 === i ? l : Math.min(Math.ceil((a - i * c * l) / c), l);
                (f = Math.floor(s / n)),
                  (h = s - f * n + i * l),
                  (p = h + (f * t) / c),
                  r.css({ "-webkit-order": p, order: p });
              } else
                "column" === d
                  ? ((h = Math.floor(e / c)),
                    (f = e - h * c),
                    (h > s || (h === s && f === c - 1)) &&
                      ((f += 1), f >= c && ((f = 0), (h += 1))))
                  : ((f = Math.floor(e / i)), (h = e - f * i));
              r.css(o("margin-top"), 0 !== f ? u && `${u}px` : "");
            },
            updateWrapperSize: (e, i, s) => {
              const {
                  spaceBetween: r,
                  centeredSlides: a,
                  roundLengths: o,
                } = n.params,
                { rows: l } = n.params.grid;
              if (
                ((n.virtualSize = (e + r) * t),
                (n.virtualSize = Math.ceil(n.virtualSize / l) - r),
                n.$wrapperEl.css({ [s("width")]: `${n.virtualSize + r}px` }),
                a)
              ) {
                i.splice(0, i.length);
                const e = [];
                for (let t = 0; t < i.length; t += 1) {
                  let s = i[t];
                  o && (s = Math.floor(s)),
                    i[t] < n.virtualSize + i[0] && e.push(s);
                }
                i.push(...e);
              }
            },
          });
      },
      function (e) {
        let { swiper: t } = e;
        Object.assign(t, {
          appendSlide: K.bind(t),
          prependSlide: Q.bind(t),
          addSlide: J.bind(t),
          removeSlide: Z.bind(t),
          removeAllSlides: ee.bind(t),
        });
      },
      function (e) {
        let { swiper: t, extendParams: i, on: s } = e;
        i({ fadeEffect: { crossFade: !1, transformEl: null } }),
          te({
            effect: "fade",
            swiper: t,
            on: s,
            setTranslate: () => {
              const { slides: e } = t,
                i = t.params.fadeEffect;
              for (let s = 0; s < e.length; s += 1) {
                const e = t.slides.eq(s);
                let n = -e[0].swiperSlideOffset;
                t.params.virtualTranslate || (n -= t.translate);
                let r = 0;
                t.isHorizontal() || ((r = n), (n = 0));
                const a = t.params.fadeEffect.crossFade
                  ? Math.max(1 - Math.abs(e[0].progress), 0)
                  : 1 + Math.min(Math.max(e[0].progress, -1), 0);
                ie(i, e)
                  .css({ opacity: a })
                  .transform(`translate3d(${n}px, ${r}px, 0px)`);
              }
            },
            setTransition: (e) => {
              const { transformEl: i } = t.params.fadeEffect;
              (i ? t.slides.find(i) : t.slides).transition(e),
                se({ swiper: t, duration: e, transformEl: i, allSlides: !0 });
            },
            overwriteParams: () => ({
              slidesPerView: 1,
              slidesPerGroup: 1,
              watchSlidesProgress: !0,
              spaceBetween: 0,
              virtualTranslate: !t.params.cssMode,
            }),
          });
      },
      function (e) {
        let { swiper: t, extendParams: i, on: s } = e;
        i({
          cubeEffect: {
            slideShadows: !0,
            shadow: !0,
            shadowOffset: 20,
            shadowScale: 0.94,
          },
        });
        const n = (e, t, i) => {
          let s = i
              ? e.find(".swiper-slide-shadow-left")
              : e.find(".swiper-slide-shadow-top"),
            n = i
              ? e.find(".swiper-slide-shadow-right")
              : e.find(".swiper-slide-shadow-bottom");
          0 === s.length &&
            ((s = u(
              `<div class="swiper-slide-shadow-${i ? "left" : "top"}"></div>`
            )),
            e.append(s)),
            0 === n.length &&
              ((n = u(
                `<div class="swiper-slide-shadow-${
                  i ? "right" : "bottom"
                }"></div>`
              )),
              e.append(n)),
            s.length && (s[0].style.opacity = Math.max(-t, 0)),
            n.length && (n[0].style.opacity = Math.max(t, 0));
        };
        te({
          effect: "cube",
          swiper: t,
          on: s,
          setTranslate: () => {
            const {
                $el: e,
                $wrapperEl: i,
                slides: s,
                width: r,
                height: a,
                rtlTranslate: o,
                size: l,
                browser: c,
              } = t,
              d = t.params.cubeEffect,
              p = t.isHorizontal(),
              h = t.virtual && t.params.virtual.enabled;
            let f,
              m = 0;
            d.shadow &&
              (p
                ? ((f = i.find(".swiper-cube-shadow")),
                  0 === f.length &&
                    ((f = u('<div class="swiper-cube-shadow"></div>')),
                    i.append(f)),
                  f.css({ height: `${r}px` }))
                : ((f = e.find(".swiper-cube-shadow")),
                  0 === f.length &&
                    ((f = u('<div class="swiper-cube-shadow"></div>')),
                    e.append(f))));
            for (let e = 0; e < s.length; e += 1) {
              const t = s.eq(e);
              let i = e;
              h && (i = parseInt(t.attr("data-swiper-slide-index"), 10));
              let r = 90 * i,
                a = Math.floor(r / 360);
              o && ((r = -r), (a = Math.floor(-r / 360)));
              const u = Math.max(Math.min(t[0].progress, 1), -1);
              let c = 0,
                f = 0,
                g = 0;
              i % 4 == 0
                ? ((c = 4 * -a * l), (g = 0))
                : (i - 1) % 4 == 0
                ? ((c = 0), (g = 4 * -a * l))
                : (i - 2) % 4 == 0
                ? ((c = l + 4 * a * l), (g = l))
                : (i - 3) % 4 == 0 && ((c = -l), (g = 3 * l + 4 * l * a)),
                o && (c = -c),
                p || ((f = c), (c = 0));
              const v = `rotateX(${p ? 0 : -r}deg) rotateY(${
                p ? r : 0
              }deg) translate3d(${c}px, ${f}px, ${g}px)`;
              u <= 1 &&
                u > -1 &&
                ((m = 90 * i + 90 * u), o && (m = 90 * -i - 90 * u)),
                t.transform(v),
                d.slideShadows && n(t, u, p);
            }
            if (
              (i.css({
                "-webkit-transform-origin": `50% 50% -${l / 2}px`,
                "transform-origin": `50% 50% -${l / 2}px`,
              }),
              d.shadow)
            )
              if (p)
                f.transform(
                  `translate3d(0px, ${r / 2 + d.shadowOffset}px, ${
                    -r / 2
                  }px) rotateX(90deg) rotateZ(0deg) scale(${d.shadowScale})`
                );
              else {
                const e = Math.abs(m) - 90 * Math.floor(Math.abs(m) / 90),
                  t =
                    1.5 -
                    (Math.sin((2 * e * Math.PI) / 360) / 2 +
                      Math.cos((2 * e * Math.PI) / 360) / 2),
                  i = d.shadowScale,
                  s = d.shadowScale / t,
                  n = d.shadowOffset;
                f.transform(
                  `scale3d(${i}, 1, ${s}) translate3d(0px, ${a / 2 + n}px, ${
                    -a / 2 / s
                  }px) rotateX(-90deg)`
                );
              }
            const g = c.isSafari || c.isWebView ? -l / 2 : 0;
            i.transform(
              `translate3d(0px,0,${g}px) rotateX(${
                t.isHorizontal() ? 0 : m
              }deg) rotateY(${t.isHorizontal() ? -m : 0}deg)`
            ),
              i[0].style.setProperty("--swiper-cube-translate-z", `${g}px`);
          },
          setTransition: (e) => {
            const { $el: i, slides: s } = t;
            s
              .transition(e)
              .find(
                ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
              )
              .transition(e),
              t.params.cubeEffect.shadow &&
                !t.isHorizontal() &&
                i.find(".swiper-cube-shadow").transition(e);
          },
          recreateShadows: () => {
            const e = t.isHorizontal();
            t.slides.each((t) => {
              const i = Math.max(Math.min(t.progress, 1), -1);
              n(u(t), i, e);
            });
          },
          getEffectParams: () => t.params.cubeEffect,
          perspective: () => !0,
          overwriteParams: () => ({
            slidesPerView: 1,
            slidesPerGroup: 1,
            watchSlidesProgress: !0,
            resistanceRatio: 0,
            spaceBetween: 0,
            centeredSlides: !1,
            virtualTranslate: !0,
          }),
        });
      },
      function (e) {
        let { swiper: t, extendParams: i, on: s } = e;
        i({
          flipEffect: {
            slideShadows: !0,
            limitRotation: !0,
            transformEl: null,
          },
        });
        const n = (e, i, s) => {
          let n = t.isHorizontal()
              ? e.find(".swiper-slide-shadow-left")
              : e.find(".swiper-slide-shadow-top"),
            r = t.isHorizontal()
              ? e.find(".swiper-slide-shadow-right")
              : e.find(".swiper-slide-shadow-bottom");
          0 === n.length && (n = ne(s, e, t.isHorizontal() ? "left" : "top")),
            0 === r.length &&
              (r = ne(s, e, t.isHorizontal() ? "right" : "bottom")),
            n.length && (n[0].style.opacity = Math.max(-i, 0)),
            r.length && (r[0].style.opacity = Math.max(i, 0));
        };
        te({
          effect: "flip",
          swiper: t,
          on: s,
          setTranslate: () => {
            const { slides: e, rtlTranslate: i } = t,
              s = t.params.flipEffect;
            for (let r = 0; r < e.length; r += 1) {
              const a = e.eq(r);
              let o = a[0].progress;
              t.params.flipEffect.limitRotation &&
                (o = Math.max(Math.min(a[0].progress, 1), -1));
              const l = a[0].swiperSlideOffset;
              let u = -180 * o,
                c = 0,
                d = t.params.cssMode ? -l - t.translate : -l,
                p = 0;
              t.isHorizontal()
                ? i && (u = -u)
                : ((p = d), (d = 0), (c = -u), (u = 0)),
                (a[0].style.zIndex = -Math.abs(Math.round(o)) + e.length),
                s.slideShadows && n(a, o, s);
              const h = `translate3d(${d}px, ${p}px, 0px) rotateX(${c}deg) rotateY(${u}deg)`;
              ie(s, a).transform(h);
            }
          },
          setTransition: (e) => {
            const { transformEl: i } = t.params.flipEffect;
            (i ? t.slides.find(i) : t.slides)
              .transition(e)
              .find(
                ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
              )
              .transition(e),
              se({ swiper: t, duration: e, transformEl: i });
          },
          recreateShadows: () => {
            const e = t.params.flipEffect;
            t.slides.each((i) => {
              const s = u(i);
              let r = s[0].progress;
              t.params.flipEffect.limitRotation &&
                (r = Math.max(Math.min(i.progress, 1), -1)),
                n(s, r, e);
            });
          },
          getEffectParams: () => t.params.flipEffect,
          perspective: () => !0,
          overwriteParams: () => ({
            slidesPerView: 1,
            slidesPerGroup: 1,
            watchSlidesProgress: !0,
            spaceBetween: 0,
            virtualTranslate: !t.params.cssMode,
          }),
        });
      },
      function (e) {
        let { swiper: t, extendParams: i, on: s } = e;
        i({
          coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            scale: 1,
            modifier: 1,
            slideShadows: !0,
            transformEl: null,
          },
        }),
          te({
            effect: "coverflow",
            swiper: t,
            on: s,
            setTranslate: () => {
              const { width: e, height: i, slides: s, slidesSizesGrid: n } = t,
                r = t.params.coverflowEffect,
                a = t.isHorizontal(),
                o = t.translate,
                l = a ? e / 2 - o : i / 2 - o,
                u = a ? r.rotate : -r.rotate,
                c = r.depth;
              for (let e = 0, t = s.length; e < t; e += 1) {
                const t = s.eq(e),
                  i = n[e],
                  o = (l - t[0].swiperSlideOffset - i / 2) / i,
                  d =
                    "function" == typeof r.modifier
                      ? r.modifier(o)
                      : o * r.modifier;
                let p = a ? u * d : 0,
                  h = a ? 0 : u * d,
                  f = -c * Math.abs(d),
                  m = r.stretch;
                "string" == typeof m &&
                  -1 !== m.indexOf("%") &&
                  (m = (parseFloat(r.stretch) / 100) * i);
                let g = a ? 0 : m * d,
                  v = a ? m * d : 0,
                  y = 1 - (1 - r.scale) * Math.abs(d);
                Math.abs(v) < 0.001 && (v = 0),
                  Math.abs(g) < 0.001 && (g = 0),
                  Math.abs(f) < 0.001 && (f = 0),
                  Math.abs(p) < 0.001 && (p = 0),
                  Math.abs(h) < 0.001 && (h = 0),
                  Math.abs(y) < 0.001 && (y = 0);
                const b = `translate3d(${v}px,${g}px,${f}px)  rotateX(${h}deg) rotateY(${p}deg) scale(${y})`;
                if (
                  (ie(r, t).transform(b),
                  (t[0].style.zIndex = 1 - Math.abs(Math.round(d))),
                  r.slideShadows)
                ) {
                  let e = a
                      ? t.find(".swiper-slide-shadow-left")
                      : t.find(".swiper-slide-shadow-top"),
                    i = a
                      ? t.find(".swiper-slide-shadow-right")
                      : t.find(".swiper-slide-shadow-bottom");
                  0 === e.length && (e = ne(r, t, a ? "left" : "top")),
                    0 === i.length && (i = ne(r, t, a ? "right" : "bottom")),
                    e.length && (e[0].style.opacity = d > 0 ? d : 0),
                    i.length && (i[0].style.opacity = -d > 0 ? -d : 0);
                }
              }
            },
            setTransition: (e) => {
              const { transformEl: i } = t.params.coverflowEffect;
              (i ? t.slides.find(i) : t.slides)
                .transition(e)
                .find(
                  ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
                )
                .transition(e);
            },
            perspective: () => !0,
            overwriteParams: () => ({ watchSlidesProgress: !0 }),
          });
      },
      function (e) {
        let { swiper: t, extendParams: i, on: s } = e;
        i({
          creativeEffect: {
            transformEl: null,
            limitProgress: 1,
            shadowPerProgress: !1,
            progressMultiplier: 1,
            perspective: !0,
            prev: {
              translate: [0, 0, 0],
              rotate: [0, 0, 0],
              opacity: 1,
              scale: 1,
            },
            next: {
              translate: [0, 0, 0],
              rotate: [0, 0, 0],
              opacity: 1,
              scale: 1,
            },
          },
        });
        const n = (e) => ("string" == typeof e ? e : `${e}px`);
        te({
          effect: "creative",
          swiper: t,
          on: s,
          setTranslate: () => {
            const { slides: e, $wrapperEl: i, slidesSizesGrid: s } = t,
              r = t.params.creativeEffect,
              { progressMultiplier: a } = r,
              o = t.params.centeredSlides;
            if (o) {
              const e = s[0] / 2 - t.params.slidesOffsetBefore || 0;
              i.transform(`translateX(calc(50% - ${e}px))`);
            }
            for (let i = 0; i < e.length; i += 1) {
              const s = e.eq(i),
                l = s[0].progress,
                u = Math.min(
                  Math.max(s[0].progress, -r.limitProgress),
                  r.limitProgress
                );
              let c = u;
              o ||
                (c = Math.min(
                  Math.max(s[0].originalProgress, -r.limitProgress),
                  r.limitProgress
                ));
              const d = s[0].swiperSlideOffset,
                p = [t.params.cssMode ? -d - t.translate : -d, 0, 0],
                h = [0, 0, 0];
              let f = !1;
              t.isHorizontal() || ((p[1] = p[0]), (p[0] = 0));
              let m = {
                translate: [0, 0, 0],
                rotate: [0, 0, 0],
                scale: 1,
                opacity: 1,
              };
              u < 0
                ? ((m = r.next), (f = !0))
                : u > 0 && ((m = r.prev), (f = !0)),
                p.forEach((e, t) => {
                  p[t] = `calc(${e}px + (${n(m.translate[t])} * ${Math.abs(
                    u * a
                  )}))`;
                }),
                h.forEach((e, t) => {
                  h[t] = m.rotate[t] * Math.abs(u * a);
                }),
                (s[0].style.zIndex = -Math.abs(Math.round(l)) + e.length);
              const g = p.join(", "),
                v = `rotateX(${h[0]}deg) rotateY(${h[1]}deg) rotateZ(${h[2]}deg)`,
                y =
                  c < 0
                    ? `scale(${1 + (1 - m.scale) * c * a})`
                    : `scale(${1 - (1 - m.scale) * c * a})`,
                b =
                  c < 0
                    ? 1 + (1 - m.opacity) * c * a
                    : 1 - (1 - m.opacity) * c * a,
                w = `translate3d(${g}) ${v} ${y}`;
              if ((f && m.shadow) || !f) {
                let e = s.children(".swiper-slide-shadow");
                if ((0 === e.length && m.shadow && (e = ne(r, s)), e.length)) {
                  const t = r.shadowPerProgress ? u * (1 / r.limitProgress) : u;
                  e[0].style.opacity = Math.min(Math.max(Math.abs(t), 0), 1);
                }
              }
              const D = ie(r, s);
              D.transform(w).css({ opacity: b }),
                m.origin && D.css("transform-origin", m.origin);
            }
          },
          setTransition: (e) => {
            const { transformEl: i } = t.params.creativeEffect;
            (i ? t.slides.find(i) : t.slides)
              .transition(e)
              .find(".swiper-slide-shadow")
              .transition(e),
              se({ swiper: t, duration: e, transformEl: i, allSlides: !0 });
          },
          perspective: () => t.params.creativeEffect.perspective,
          overwriteParams: () => ({
            watchSlidesProgress: !0,
            virtualTranslate: !t.params.cssMode,
          }),
        });
      },
      function (e) {
        let { swiper: t, extendParams: i, on: s } = e;
        i({
          cardsEffect: {
            slideShadows: !0,
            transformEl: null,
            rotate: !0,
            perSlideRotate: 2,
            perSlideOffset: 8,
          },
        }),
          te({
            effect: "cards",
            swiper: t,
            on: s,
            setTranslate: () => {
              const { slides: e, activeIndex: i } = t,
                s = t.params.cardsEffect,
                { startTranslate: n, isTouched: r } = t.touchEventsData,
                a = t.translate;
              for (let o = 0; o < e.length; o += 1) {
                const l = e.eq(o),
                  u = l[0].progress,
                  c = Math.min(Math.max(u, -4), 4);
                let d = l[0].swiperSlideOffset;
                t.params.centeredSlides &&
                  !t.params.cssMode &&
                  t.$wrapperEl.transform(`translateX(${t.minTranslate()}px)`),
                  t.params.centeredSlides &&
                    t.params.cssMode &&
                    (d -= e[0].swiperSlideOffset);
                let p = t.params.cssMode ? -d - t.translate : -d,
                  h = 0;
                const f = -100 * Math.abs(c);
                let m = 1,
                  g = -s.perSlideRotate * c,
                  v = s.perSlideOffset - 0.75 * Math.abs(c);
                const y =
                    t.virtual && t.params.virtual.enabled
                      ? t.virtual.from + o
                      : o,
                  b =
                    (y === i || y === i - 1) &&
                    c > 0 &&
                    c < 1 &&
                    (r || t.params.cssMode) &&
                    a < n,
                  w =
                    (y === i || y === i + 1) &&
                    c < 0 &&
                    c > -1 &&
                    (r || t.params.cssMode) &&
                    a > n;
                if (b || w) {
                  const e = (1 - Math.abs((Math.abs(c) - 0.5) / 0.5)) ** 0.5;
                  (g += -28 * c * e),
                    (m += -0.5 * e),
                    (v += 96 * e),
                    (h = -25 * e * Math.abs(c) + "%");
                }
                if (
                  ((p =
                    c < 0
                      ? `calc(${p}px + (${v * Math.abs(c)}%))`
                      : c > 0
                      ? `calc(${p}px + (-${v * Math.abs(c)}%))`
                      : `${p}px`),
                  !t.isHorizontal())
                ) {
                  const e = h;
                  (h = p), (p = e);
                }
                const D =
                    c < 0 ? "" + (1 + (1 - m) * c) : "" + (1 - (1 - m) * c),
                  x = `\n        translate3d(${p}, ${h}, ${f}px)\n        rotateZ(${
                    s.rotate ? g : 0
                  }deg)\n        scale(${D})\n      `;
                if (s.slideShadows) {
                  let e = l.find(".swiper-slide-shadow");
                  0 === e.length && (e = ne(s, l)),
                    e.length &&
                      (e[0].style.opacity = Math.min(
                        Math.max((Math.abs(c) - 0.5) / 0.5, 0),
                        1
                      ));
                }
                (l[0].style.zIndex = -Math.abs(Math.round(u)) + e.length),
                  ie(s, l).transform(x);
              }
            },
            setTransition: (e) => {
              const { transformEl: i } = t.params.cardsEffect;
              (i ? t.slides.find(i) : t.slides)
                .transition(e)
                .find(".swiper-slide-shadow")
                .transition(e),
                se({ swiper: t, duration: e, transformEl: i });
            },
            perspective: () => !0,
            overwriteParams: () => ({
              watchSlidesProgress: !0,
              virtualTranslate: !t.params.cssMode,
            }),
          });
      },
    ];
    return V.use(re), V;
  });
