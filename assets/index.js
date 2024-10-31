var vi = (e, i) => () => (i || e((i = { exports: {} }).exports, i), i.exports);
var Fr = vi((ci, ls) => {
  (function () {
    const i = document.createElement("link").relList;
    if (i && i.supports && i.supports("modulepreload")) return;
    for (const a of document.querySelectorAll('link[rel="modulepreload"]'))
      n(a);
    new MutationObserver((a) => {
      for (const r of a)
        if (r.type === "childList")
          for (const p of r.addedNodes)
            p.tagName === "LINK" && p.rel === "modulepreload" && n(p);
    }).observe(document, { childList: !0, subtree: !0 });
    function s(a) {
      const r = {};
      return (
        a.integrity && (r.integrity = a.integrity),
        a.referrerPolicy && (r.referrerPolicy = a.referrerPolicy),
        a.crossOrigin === "use-credentials"
          ? (r.credentials = "include")
          : a.crossOrigin === "anonymous"
          ? (r.credentials = "omit")
          : (r.credentials = "same-origin"),
        r
      );
    }
    function n(a) {
      if (a.ep) return;
      a.ep = !0;
      const r = s(a);
      fetch(a.href, r);
    }
  })();
  (function (e, i) {
    typeof ci == "object" && typeof ls < "u"
      ? (ls.exports = i())
      : typeof define == "function" && define.amd
      ? define(i)
      : ((e = typeof globalThis < "u" ? globalThis : e || self).Swiper = i());
  })(void 0, function () {
    function e(t) {
      return (
        t !== null &&
        typeof t == "object" &&
        "constructor" in t &&
        t.constructor === Object
      );
    }
    function i(t = {}, o = {}) {
      Object.keys(o).forEach((l) => {
        t[l] === void 0
          ? (t[l] = o[l])
          : e(o[l]) && e(t[l]) && Object.keys(o[l]).length > 0 && i(t[l], o[l]);
      });
    }
    const s = {
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
    function n() {
      const t = typeof document < "u" ? document : {};
      return i(t, s), t;
    }
    const a = {
      document: s,
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
      requestAnimationFrame: (t) =>
        typeof setTimeout > "u" ? (t(), null) : setTimeout(t, 0),
      cancelAnimationFrame(t) {
        typeof setTimeout < "u" && clearTimeout(t);
      },
    };
    function r() {
      const t = typeof window < "u" ? window : {};
      return i(t, a), t;
    }
    class p extends Array {
      constructor(o) {
        super(...(o || [])),
          (function (l) {
            const d = l.__proto__;
            Object.defineProperty(l, "__proto__", {
              get: () => d,
              set(u) {
                d.__proto__ = u;
              },
            });
          })(this);
      }
    }
    function b(t = []) {
      const o = [];
      return (
        t.forEach((l) => {
          Array.isArray(l) ? o.push(...b(l)) : o.push(l);
        }),
        o
      );
    }
    function w(t, o) {
      return Array.prototype.filter.call(t, o);
    }
    function f(t, o) {
      const l = r(),
        d = n();
      let u = [];
      if (!o && t instanceof p) return t;
      if (!t) return new p(u);
      if (typeof t == "string") {
        const c = t.trim();
        if (c.indexOf("<") >= 0 && c.indexOf(">") >= 0) {
          let v = "div";
          c.indexOf("<li") === 0 && (v = "ul"),
            c.indexOf("<tr") === 0 && (v = "tbody"),
            (c.indexOf("<td") !== 0 && c.indexOf("<th") !== 0) || (v = "tr"),
            c.indexOf("<tbody") === 0 && (v = "table"),
            c.indexOf("<option") === 0 && (v = "select");
          const y = d.createElement(v);
          y.innerHTML = c;
          for (let g = 0; g < y.childNodes.length; g += 1)
            u.push(y.childNodes[g]);
        } else
          u = (function (v, y) {
            if (typeof v != "string") return [v];
            const g = [],
              T = y.querySelectorAll(v);
            for (let h = 0; h < T.length; h += 1) g.push(T[h]);
            return g;
          })(t.trim(), o || d);
      } else if (t.nodeType || t === l || t === d) u.push(t);
      else if (Array.isArray(t)) {
        if (t instanceof p) return t;
        u = t;
      }
      return new p(
        (function (c) {
          const v = [];
          for (let y = 0; y < c.length; y += 1)
            v.indexOf(c[y]) === -1 && v.push(c[y]);
          return v;
        })(u)
      );
    }
    f.fn = p.prototype;
    const $ = {
      addClass: function (...t) {
        const o = b(t.map((l) => l.split(" ")));
        return (
          this.forEach((l) => {
            l.classList.add(...o);
          }),
          this
        );
      },
      removeClass: function (...t) {
        const o = b(t.map((l) => l.split(" ")));
        return (
          this.forEach((l) => {
            l.classList.remove(...o);
          }),
          this
        );
      },
      hasClass: function (...t) {
        const o = b(t.map((l) => l.split(" ")));
        return (
          w(this, (l) => o.filter((d) => l.classList.contains(d)).length > 0)
            .length > 0
        );
      },
      toggleClass: function (...t) {
        const o = b(t.map((l) => l.split(" ")));
        this.forEach((l) => {
          o.forEach((d) => {
            l.classList.toggle(d);
          });
        });
      },
      attr: function (t, o) {
        if (arguments.length === 1 && typeof t == "string")
          return this[0] ? this[0].getAttribute(t) : void 0;
        for (let l = 0; l < this.length; l += 1)
          if (arguments.length === 2) this[l].setAttribute(t, o);
          else
            for (const d in t)
              (this[l][d] = t[d]), this[l].setAttribute(d, t[d]);
        return this;
      },
      removeAttr: function (t) {
        for (let o = 0; o < this.length; o += 1) this[o].removeAttribute(t);
        return this;
      },
      transform: function (t) {
        for (let o = 0; o < this.length; o += 1) this[o].style.transform = t;
        return this;
      },
      transition: function (t) {
        for (let o = 0; o < this.length; o += 1)
          this[o].style.transitionDuration =
            typeof t != "string" ? `${t}ms` : t;
        return this;
      },
      on: function (...t) {
        let [o, l, d, u] = t;
        function c(T) {
          const h = T.target;
          if (!h) return;
          const m = T.target.dom7EventData || [];
          if ((m.indexOf(T) < 0 && m.unshift(T), f(h).is(l))) d.apply(h, m);
          else {
            const S = f(h).parents();
            for (let E = 0; E < S.length; E += 1)
              f(S[E]).is(l) && d.apply(S[E], m);
          }
        }
        function v(T) {
          const h = (T && T.target && T.target.dom7EventData) || [];
          h.indexOf(T) < 0 && h.unshift(T), d.apply(this, h);
        }
        typeof t[1] == "function" && (([o, d, u] = t), (l = void 0)),
          u || (u = !1);
        const y = o.split(" ");
        let g;
        for (let T = 0; T < this.length; T += 1) {
          const h = this[T];
          if (l)
            for (g = 0; g < y.length; g += 1) {
              const m = y[g];
              h.dom7LiveListeners || (h.dom7LiveListeners = {}),
                h.dom7LiveListeners[m] || (h.dom7LiveListeners[m] = []),
                h.dom7LiveListeners[m].push({ listener: d, proxyListener: c }),
                h.addEventListener(m, c, u);
            }
          else
            for (g = 0; g < y.length; g += 1) {
              const m = y[g];
              h.dom7Listeners || (h.dom7Listeners = {}),
                h.dom7Listeners[m] || (h.dom7Listeners[m] = []),
                h.dom7Listeners[m].push({ listener: d, proxyListener: v }),
                h.addEventListener(m, v, u);
            }
        }
        return this;
      },
      off: function (...t) {
        let [o, l, d, u] = t;
        typeof t[1] == "function" && (([o, d, u] = t), (l = void 0)),
          u || (u = !1);
        const c = o.split(" ");
        for (let v = 0; v < c.length; v += 1) {
          const y = c[v];
          for (let g = 0; g < this.length; g += 1) {
            const T = this[g];
            let h;
            if (
              (!l && T.dom7Listeners
                ? (h = T.dom7Listeners[y])
                : l && T.dom7LiveListeners && (h = T.dom7LiveListeners[y]),
              h && h.length)
            )
              for (let m = h.length - 1; m >= 0; m -= 1) {
                const S = h[m];
                (d && S.listener === d) ||
                (d &&
                  S.listener &&
                  S.listener.dom7proxy &&
                  S.listener.dom7proxy === d)
                  ? (T.removeEventListener(y, S.proxyListener, u),
                    h.splice(m, 1))
                  : d ||
                    (T.removeEventListener(y, S.proxyListener, u),
                    h.splice(m, 1));
              }
          }
        }
        return this;
      },
      trigger: function (...t) {
        const o = r(),
          l = t[0].split(" "),
          d = t[1];
        for (let u = 0; u < l.length; u += 1) {
          const c = l[u];
          for (let v = 0; v < this.length; v += 1) {
            const y = this[v];
            if (o.CustomEvent) {
              const g = new o.CustomEvent(c, {
                detail: d,
                bubbles: !0,
                cancelable: !0,
              });
              (y.dom7EventData = t.filter((T, h) => h > 0)),
                y.dispatchEvent(g),
                (y.dom7EventData = []),
                delete y.dom7EventData;
            }
          }
        }
        return this;
      },
      transitionEnd: function (t) {
        const o = this;
        return (
          t &&
            o.on("transitionend", function l(d) {
              d.target === this && (t.call(this, d), o.off("transitionend", l));
            }),
          this
        );
      },
      outerWidth: function (t) {
        if (this.length > 0) {
          if (t) {
            const o = this.styles();
            return (
              this[0].offsetWidth +
              parseFloat(o.getPropertyValue("margin-right")) +
              parseFloat(o.getPropertyValue("margin-left"))
            );
          }
          return this[0].offsetWidth;
        }
        return null;
      },
      outerHeight: function (t) {
        if (this.length > 0) {
          if (t) {
            const o = this.styles();
            return (
              this[0].offsetHeight +
              parseFloat(o.getPropertyValue("margin-top")) +
              parseFloat(o.getPropertyValue("margin-bottom"))
            );
          }
          return this[0].offsetHeight;
        }
        return null;
      },
      styles: function () {
        const t = r();
        return this[0] ? t.getComputedStyle(this[0], null) : {};
      },
      offset: function () {
        if (this.length > 0) {
          const t = r(),
            o = n(),
            l = this[0],
            d = l.getBoundingClientRect(),
            u = o.body,
            c = l.clientTop || u.clientTop || 0,
            v = l.clientLeft || u.clientLeft || 0,
            y = l === t ? t.scrollY : l.scrollTop,
            g = l === t ? t.scrollX : l.scrollLeft;
          return { top: d.top + y - c, left: d.left + g - v };
        }
        return null;
      },
      css: function (t, o) {
        const l = r();
        let d;
        if (arguments.length === 1) {
          if (typeof t != "string") {
            for (d = 0; d < this.length; d += 1)
              for (const u in t) this[d].style[u] = t[u];
            return this;
          }
          if (this[0])
            return l.getComputedStyle(this[0], null).getPropertyValue(t);
        }
        if (arguments.length === 2 && typeof t == "string") {
          for (d = 0; d < this.length; d += 1) this[d].style[t] = o;
          return this;
        }
        return this;
      },
      each: function (t) {
        return t
          ? (this.forEach((o, l) => {
              t.apply(o, [o, l]);
            }),
            this)
          : this;
      },
      html: function (t) {
        if (t === void 0) return this[0] ? this[0].innerHTML : null;
        for (let o = 0; o < this.length; o += 1) this[o].innerHTML = t;
        return this;
      },
      text: function (t) {
        if (t === void 0) return this[0] ? this[0].textContent.trim() : null;
        for (let o = 0; o < this.length; o += 1) this[o].textContent = t;
        return this;
      },
      is: function (t) {
        const o = r(),
          l = n(),
          d = this[0];
        let u, c;
        if (!d || t === void 0) return !1;
        if (typeof t == "string") {
          if (d.matches) return d.matches(t);
          if (d.webkitMatchesSelector) return d.webkitMatchesSelector(t);
          if (d.msMatchesSelector) return d.msMatchesSelector(t);
          for (u = f(t), c = 0; c < u.length; c += 1) if (u[c] === d) return !0;
          return !1;
        }
        if (t === l) return d === l;
        if (t === o) return d === o;
        if (t.nodeType || t instanceof p) {
          for (u = t.nodeType ? [t] : t, c = 0; c < u.length; c += 1)
            if (u[c] === d) return !0;
          return !1;
        }
        return !1;
      },
      index: function () {
        let t,
          o = this[0];
        if (o) {
          for (t = 0; (o = o.previousSibling) !== null; )
            o.nodeType === 1 && (t += 1);
          return t;
        }
      },
      eq: function (t) {
        if (t === void 0) return this;
        const o = this.length;
        if (t > o - 1) return f([]);
        if (t < 0) {
          const l = o + t;
          return f(l < 0 ? [] : [this[l]]);
        }
        return f([this[t]]);
      },
      append: function (...t) {
        let o;
        const l = n();
        for (let d = 0; d < t.length; d += 1) {
          o = t[d];
          for (let u = 0; u < this.length; u += 1)
            if (typeof o == "string") {
              const c = l.createElement("div");
              for (c.innerHTML = o; c.firstChild; )
                this[u].appendChild(c.firstChild);
            } else if (o instanceof p)
              for (let c = 0; c < o.length; c += 1) this[u].appendChild(o[c]);
            else this[u].appendChild(o);
        }
        return this;
      },
      prepend: function (t) {
        const o = n();
        let l, d;
        for (l = 0; l < this.length; l += 1)
          if (typeof t == "string") {
            const u = o.createElement("div");
            for (u.innerHTML = t, d = u.childNodes.length - 1; d >= 0; d -= 1)
              this[l].insertBefore(u.childNodes[d], this[l].childNodes[0]);
          } else if (t instanceof p)
            for (d = 0; d < t.length; d += 1)
              this[l].insertBefore(t[d], this[l].childNodes[0]);
          else this[l].insertBefore(t, this[l].childNodes[0]);
        return this;
      },
      next: function (t) {
        return this.length > 0
          ? t
            ? this[0].nextElementSibling && f(this[0].nextElementSibling).is(t)
              ? f([this[0].nextElementSibling])
              : f([])
            : this[0].nextElementSibling
            ? f([this[0].nextElementSibling])
            : f([])
          : f([]);
      },
      nextAll: function (t) {
        const o = [];
        let l = this[0];
        if (!l) return f([]);
        for (; l.nextElementSibling; ) {
          const d = l.nextElementSibling;
          t ? f(d).is(t) && o.push(d) : o.push(d), (l = d);
        }
        return f(o);
      },
      prev: function (t) {
        if (this.length > 0) {
          const o = this[0];
          return t
            ? o.previousElementSibling && f(o.previousElementSibling).is(t)
              ? f([o.previousElementSibling])
              : f([])
            : o.previousElementSibling
            ? f([o.previousElementSibling])
            : f([]);
        }
        return f([]);
      },
      prevAll: function (t) {
        const o = [];
        let l = this[0];
        if (!l) return f([]);
        for (; l.previousElementSibling; ) {
          const d = l.previousElementSibling;
          t ? f(d).is(t) && o.push(d) : o.push(d), (l = d);
        }
        return f(o);
      },
      parent: function (t) {
        const o = [];
        for (let l = 0; l < this.length; l += 1)
          this[l].parentNode !== null &&
            (t
              ? f(this[l].parentNode).is(t) && o.push(this[l].parentNode)
              : o.push(this[l].parentNode));
        return f(o);
      },
      parents: function (t) {
        const o = [];
        for (let l = 0; l < this.length; l += 1) {
          let d = this[l].parentNode;
          for (; d; )
            t ? f(d).is(t) && o.push(d) : o.push(d), (d = d.parentNode);
        }
        return f(o);
      },
      closest: function (t) {
        let o = this;
        return t === void 0 ? f([]) : (o.is(t) || (o = o.parents(t).eq(0)), o);
      },
      find: function (t) {
        const o = [];
        for (let l = 0; l < this.length; l += 1) {
          const d = this[l].querySelectorAll(t);
          for (let u = 0; u < d.length; u += 1) o.push(d[u]);
        }
        return f(o);
      },
      children: function (t) {
        const o = [];
        for (let l = 0; l < this.length; l += 1) {
          const d = this[l].children;
          for (let u = 0; u < d.length; u += 1)
            (t && !f(d[u]).is(t)) || o.push(d[u]);
        }
        return f(o);
      },
      filter: function (t) {
        return f(w(this, t));
      },
      remove: function () {
        for (let t = 0; t < this.length; t += 1)
          this[t].parentNode && this[t].parentNode.removeChild(this[t]);
        return this;
      },
    };
    function A(t, o = 0) {
      return setTimeout(t, o);
    }
    function M() {
      return Date.now();
    }
    function z(t, o = "x") {
      const l = r();
      let d, u, c;
      const v = (function (y) {
        const g = r();
        let T;
        return (
          g.getComputedStyle && (T = g.getComputedStyle(y, null)),
          !T && y.currentStyle && (T = y.currentStyle),
          T || (T = y.style),
          T
        );
      })(t);
      return (
        l.WebKitCSSMatrix
          ? ((u = v.transform || v.webkitTransform),
            u.split(",").length > 6 &&
              (u = u
                .split(", ")
                .map((y) => y.replace(",", "."))
                .join(", ")),
            (c = new l.WebKitCSSMatrix(u === "none" ? "" : u)))
          : ((c =
              v.MozTransform ||
              v.OTransform ||
              v.MsTransform ||
              v.msTransform ||
              v.transform ||
              v
                .getPropertyValue("transform")
                .replace("translate(", "matrix(1, 0, 0, 1,")),
            (d = c.toString().split(","))),
        o === "x" &&
          (u = l.WebKitCSSMatrix
            ? c.m41
            : d.length === 16
            ? parseFloat(d[12])
            : parseFloat(d[4])),
        o === "y" &&
          (u = l.WebKitCSSMatrix
            ? c.m42
            : d.length === 16
            ? parseFloat(d[13])
            : parseFloat(d[5])),
        u || 0
      );
    }
    function H(t) {
      return (
        typeof t == "object" &&
        t !== null &&
        t.constructor &&
        Object.prototype.toString.call(t).slice(8, -1) === "Object"
      );
    }
    function L(...t) {
      const o = Object(t[0]),
        l = ["__proto__", "constructor", "prototype"];
      for (let u = 1; u < t.length; u += 1) {
        const c = t[u];
        if (
          c != null &&
          ((d = c),
          !(typeof window < "u" && window.HTMLElement !== void 0
            ? d instanceof HTMLElement
            : d && (d.nodeType === 1 || d.nodeType === 11)))
        ) {
          const v = Object.keys(Object(c)).filter((y) => l.indexOf(y) < 0);
          for (let y = 0, g = v.length; y < g; y += 1) {
            const T = v[y],
              h = Object.getOwnPropertyDescriptor(c, T);
            h !== void 0 &&
              h.enumerable &&
              (H(o[T]) && H(c[T])
                ? c[T].__swiper__
                  ? (o[T] = c[T])
                  : L(o[T], c[T])
                : !H(o[T]) && H(c[T])
                ? ((o[T] = {}), c[T].__swiper__ ? (o[T] = c[T]) : L(o[T], c[T]))
                : (o[T] = c[T]));
          }
        }
      }
      var d;
      return o;
    }
    function I(t, o, l) {
      t.style.setProperty(o, l);
    }
    function B({ swiper: t, targetPosition: o, side: l }) {
      const d = r(),
        u = -t.translate;
      let c,
        v = null;
      const y = t.params.speed;
      (t.wrapperEl.style.scrollSnapType = "none"),
        d.cancelAnimationFrame(t.cssModeFrameID);
      const g = o > u ? "next" : "prev",
        T = (m, S) => (g === "next" && m >= S) || (g === "prev" && m <= S),
        h = () => {
          (c = new Date().getTime()), v === null && (v = c);
          const m = Math.max(Math.min((c - v) / y, 1), 0),
            S = 0.5 - Math.cos(m * Math.PI) / 2;
          let E = u + S * (o - u);
          if ((T(E, o) && (E = o), t.wrapperEl.scrollTo({ [l]: E }), T(E, o)))
            return (
              (t.wrapperEl.style.overflow = "hidden"),
              (t.wrapperEl.style.scrollSnapType = ""),
              setTimeout(() => {
                (t.wrapperEl.style.overflow = ""),
                  t.wrapperEl.scrollTo({ [l]: E });
              }),
              void d.cancelAnimationFrame(t.cssModeFrameID)
            );
          t.cssModeFrameID = d.requestAnimationFrame(h);
        };
      h();
    }
    let O, R, J;
    function te() {
      return (
        O ||
          (O = (function () {
            const t = r(),
              o = n();
            return {
              smoothScroll:
                o.documentElement &&
                "scrollBehavior" in o.documentElement.style,
              touch: !!(
                "ontouchstart" in t ||
                (t.DocumentTouch && o instanceof t.DocumentTouch)
              ),
              passiveListener: (function () {
                let l = !1;
                try {
                  const d = Object.defineProperty({}, "passive", {
                    get() {
                      l = !0;
                    },
                  });
                  t.addEventListener("testPassiveListener", null, d);
                } catch {}
                return l;
              })(),
              gestures: "ongesturestart" in t,
            };
          })()),
        O
      );
    }
    function ce(t = {}) {
      return (
        R ||
          (R = (function ({ userAgent: o } = {}) {
            const l = te(),
              d = r(),
              u = d.navigator.platform,
              c = o || d.navigator.userAgent,
              v = { ios: !1, android: !1 },
              y = d.screen.width,
              g = d.screen.height,
              T = c.match(/(Android);?[\s\/]+([\d.]+)?/);
            let h = c.match(/(iPad).*OS\s([\d_]+)/);
            const m = c.match(/(iPod)(.*OS\s([\d_]+))?/),
              S = !h && c.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
              E = u === "Win32";
            let x = u === "MacIntel";
            return (
              !h &&
                x &&
                l.touch &&
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
                ].indexOf(`${y}x${g}`) >= 0 &&
                ((h = c.match(/(Version)\/([\d.]+)/)),
                h || (h = [0, 1, "13_0_0"]),
                (x = !1)),
              T && !E && ((v.os = "android"), (v.android = !0)),
              (h || S || m) && ((v.os = "ios"), (v.ios = !0)),
              v
            );
          })(t)),
        R
      );
    }
    function be() {
      return (
        J ||
          (J = (function () {
            const t = r();
            return {
              isSafari: (function () {
                const o = t.navigator.userAgent.toLowerCase();
                return (
                  o.indexOf("safari") >= 0 &&
                  o.indexOf("chrome") < 0 &&
                  o.indexOf("android") < 0
                );
              })(),
              isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
                t.navigator.userAgent
              ),
            };
          })()),
        J
      );
    }
    Object.keys($).forEach((t) => {
      Object.defineProperty(f.fn, t, { value: $[t], writable: !0 });
    });
    var fe = {
      on(t, o, l) {
        const d = this;
        if (typeof o != "function") return d;
        const u = l ? "unshift" : "push";
        return (
          t.split(" ").forEach((c) => {
            d.eventsListeners[c] || (d.eventsListeners[c] = []),
              d.eventsListeners[c][u](o);
          }),
          d
        );
      },
      once(t, o, l) {
        const d = this;
        if (typeof o != "function") return d;
        function u(...c) {
          d.off(t, u),
            u.__emitterProxy && delete u.__emitterProxy,
            o.apply(d, c);
        }
        return (u.__emitterProxy = o), d.on(t, u, l);
      },
      onAny(t, o) {
        const l = this;
        if (typeof t != "function") return l;
        const d = o ? "unshift" : "push";
        return (
          l.eventsAnyListeners.indexOf(t) < 0 && l.eventsAnyListeners[d](t), l
        );
      },
      offAny(t) {
        const o = this;
        if (!o.eventsAnyListeners) return o;
        const l = o.eventsAnyListeners.indexOf(t);
        return l >= 0 && o.eventsAnyListeners.splice(l, 1), o;
      },
      off(t, o) {
        const l = this;
        return (
          l.eventsListeners &&
            t.split(" ").forEach((d) => {
              o === void 0
                ? (l.eventsListeners[d] = [])
                : l.eventsListeners[d] &&
                  l.eventsListeners[d].forEach((u, c) => {
                    (u === o || (u.__emitterProxy && u.__emitterProxy === o)) &&
                      l.eventsListeners[d].splice(c, 1);
                  });
            }),
          l
        );
      },
      emit(...t) {
        const o = this;
        if (!o.eventsListeners) return o;
        let l, d, u;
        return (
          typeof t[0] == "string" || Array.isArray(t[0])
            ? ((l = t[0]), (d = t.slice(1, t.length)), (u = o))
            : ((l = t[0].events), (d = t[0].data), (u = t[0].context || o)),
          d.unshift(u),
          (Array.isArray(l) ? l : l.split(" ")).forEach((c) => {
            o.eventsAnyListeners &&
              o.eventsAnyListeners.length &&
              o.eventsAnyListeners.forEach((v) => {
                v.apply(u, [c, ...d]);
              }),
              o.eventsListeners &&
                o.eventsListeners[c] &&
                o.eventsListeners[c].forEach((v) => {
                  v.apply(u, d);
                });
          }),
          o
        );
      },
    };
    function Se({ swiper: t, runCallbacks: o, direction: l, step: d }) {
      const { activeIndex: u, previousIndex: c } = t;
      let v = l;
      if (
        (v || (v = u > c ? "next" : u < c ? "prev" : "reset"),
        t.emit(`transition${d}`),
        o && u !== c)
      ) {
        if (v === "reset") return void t.emit(`slideResetTransition${d}`);
        t.emit(`slideChangeTransition${d}`),
          v === "next"
            ? t.emit(`slideNextTransition${d}`)
            : t.emit(`slidePrevTransition${d}`);
      }
    }
    function ne(t) {
      const o = this,
        l = n(),
        d = r(),
        u = o.touchEventsData,
        { params: c, touches: v, enabled: y } = o;
      if (!y || (o.animating && c.preventInteractionOnTransition)) return;
      !o.animating && c.cssMode && c.loop && o.loopFix();
      let g = t;
      g.originalEvent && (g = g.originalEvent);
      let T = f(g.target);
      if (
        (c.touchEventsTarget === "wrapper" && !T.closest(o.wrapperEl).length) ||
        ((u.isTouchEvent = g.type === "touchstart"),
        !u.isTouchEvent && "which" in g && g.which === 3) ||
        (!u.isTouchEvent && "button" in g && g.button > 0) ||
        (u.isTouched && u.isMoved)
      )
        return;
      c.noSwipingClass &&
        c.noSwipingClass !== "" &&
        g.target &&
        g.target.shadowRoot &&
        t.path &&
        t.path[0] &&
        (T = f(t.path[0]));
      const h = c.noSwipingSelector
          ? c.noSwipingSelector
          : `.${c.noSwipingClass}`,
        m = !(!g.target || !g.target.shadowRoot);
      if (
        c.noSwiping &&
        (m
          ? (function (D, P = this) {
              return (function _(N) {
                return N && N !== n() && N !== r()
                  ? (N.assignedSlot && (N = N.assignedSlot),
                    N.closest(D) || _(N.getRootNode().host))
                  : null;
              })(P);
            })(h, g.target)
          : T.closest(h)[0])
      )
        return void (o.allowClick = !0);
      if (c.swipeHandler && !T.closest(c.swipeHandler)[0]) return;
      (v.currentX =
        g.type === "touchstart" ? g.targetTouches[0].pageX : g.pageX),
        (v.currentY =
          g.type === "touchstart" ? g.targetTouches[0].pageY : g.pageY);
      const S = v.currentX,
        E = v.currentY,
        x = c.edgeSwipeDetection || c.iOSEdgeSwipeDetection,
        k = c.edgeSwipeThreshold || c.iOSEdgeSwipeThreshold;
      if (x && (S <= k || S >= d.innerWidth - k)) {
        if (x !== "prevent") return;
        t.preventDefault();
      }
      if (
        (Object.assign(u, {
          isTouched: !0,
          isMoved: !1,
          allowTouchCallbacks: !0,
          isScrolling: void 0,
          startMoving: void 0,
        }),
        (v.startX = S),
        (v.startY = E),
        (u.touchStartTime = M()),
        (o.allowClick = !0),
        o.updateSize(),
        (o.swipeDirection = void 0),
        c.threshold > 0 && (u.allowThresholdMove = !1),
        g.type !== "touchstart")
      ) {
        let D = !0;
        T.is(u.focusableElements) && (D = !1),
          l.activeElement &&
            f(l.activeElement).is(u.focusableElements) &&
            l.activeElement !== T[0] &&
            l.activeElement.blur();
        const P = D && o.allowTouchMove && c.touchStartPreventDefault;
        (!c.touchStartForcePreventDefault && !P) ||
          T[0].isContentEditable ||
          g.preventDefault();
      }
      o.emit("touchStart", g);
    }
    function oe(t) {
      const o = n(),
        l = this,
        d = l.touchEventsData,
        { params: u, touches: c, rtlTranslate: v, enabled: y } = l;
      if (!y) return;
      let g = t;
      if ((g.originalEvent && (g = g.originalEvent), !d.isTouched))
        return void (
          d.startMoving &&
          d.isScrolling &&
          l.emit("touchMoveOpposite", g)
        );
      if (d.isTouchEvent && g.type !== "touchmove") return;
      const T =
          g.type === "touchmove" &&
          g.targetTouches &&
          (g.targetTouches[0] || g.changedTouches[0]),
        h = g.type === "touchmove" ? T.pageX : g.pageX,
        m = g.type === "touchmove" ? T.pageY : g.pageY;
      if (g.preventedByNestedSwiper) return (c.startX = h), void (c.startY = m);
      if (!l.allowTouchMove)
        return (
          (l.allowClick = !1),
          void (
            d.isTouched &&
            (Object.assign(c, {
              startX: h,
              startY: m,
              currentX: h,
              currentY: m,
            }),
            (d.touchStartTime = M()))
          )
        );
      if (d.isTouchEvent && u.touchReleaseOnEdges && !u.loop) {
        if (l.isVertical()) {
          if (
            (m < c.startY && l.translate <= l.maxTranslate()) ||
            (m > c.startY && l.translate >= l.minTranslate())
          )
            return (d.isTouched = !1), void (d.isMoved = !1);
        } else if (
          (h < c.startX && l.translate <= l.maxTranslate()) ||
          (h > c.startX && l.translate >= l.minTranslate())
        )
          return;
      }
      if (
        d.isTouchEvent &&
        o.activeElement &&
        g.target === o.activeElement &&
        f(g.target).is(d.focusableElements)
      )
        return (d.isMoved = !0), void (l.allowClick = !1);
      if (
        (d.allowTouchCallbacks && l.emit("touchMove", g),
        g.targetTouches && g.targetTouches.length > 1)
      )
        return;
      (c.currentX = h), (c.currentY = m);
      const S = c.currentX - c.startX,
        E = c.currentY - c.startY;
      if (l.params.threshold && Math.sqrt(S ** 2 + E ** 2) < l.params.threshold)
        return;
      if (d.isScrolling === void 0) {
        let P;
        (l.isHorizontal() && c.currentY === c.startY) ||
        (l.isVertical() && c.currentX === c.startX)
          ? (d.isScrolling = !1)
          : S * S + E * E >= 25 &&
            ((P = (180 * Math.atan2(Math.abs(E), Math.abs(S))) / Math.PI),
            (d.isScrolling = l.isHorizontal()
              ? P > u.touchAngle
              : 90 - P > u.touchAngle));
      }
      if (
        (d.isScrolling && l.emit("touchMoveOpposite", g),
        d.startMoving === void 0 &&
          ((c.currentX === c.startX && c.currentY === c.startY) ||
            (d.startMoving = !0)),
        d.isScrolling)
      )
        return void (d.isTouched = !1);
      if (!d.startMoving) return;
      (l.allowClick = !1),
        !u.cssMode && g.cancelable && g.preventDefault(),
        u.touchMoveStopPropagation && !u.nested && g.stopPropagation(),
        d.isMoved ||
          (u.loop && !u.cssMode && l.loopFix(),
          (d.startTranslate = l.getTranslate()),
          l.setTransition(0),
          l.animating &&
            l.$wrapperEl.trigger("webkitTransitionEnd transitionend"),
          (d.allowMomentumBounce = !1),
          !u.grabCursor ||
            (l.allowSlideNext !== !0 && l.allowSlidePrev !== !0) ||
            l.setGrabCursor(!0),
          l.emit("sliderFirstMove", g)),
        l.emit("sliderMove", g),
        (d.isMoved = !0);
      let x = l.isHorizontal() ? S : E;
      (c.diff = x),
        (x *= u.touchRatio),
        v && (x = -x),
        (l.swipeDirection = x > 0 ? "prev" : "next"),
        (d.currentTranslate = x + d.startTranslate);
      let k = !0,
        D = u.resistanceRatio;
      if (
        (u.touchReleaseOnEdges && (D = 0),
        x > 0 && d.currentTranslate > l.minTranslate()
          ? ((k = !1),
            u.resistance &&
              (d.currentTranslate =
                l.minTranslate() -
                1 +
                (-l.minTranslate() + d.startTranslate + x) ** D))
          : x < 0 &&
            d.currentTranslate < l.maxTranslate() &&
            ((k = !1),
            u.resistance &&
              (d.currentTranslate =
                l.maxTranslate() +
                1 -
                (l.maxTranslate() - d.startTranslate - x) ** D)),
        k && (g.preventedByNestedSwiper = !0),
        !l.allowSlideNext &&
          l.swipeDirection === "next" &&
          d.currentTranslate < d.startTranslate &&
          (d.currentTranslate = d.startTranslate),
        !l.allowSlidePrev &&
          l.swipeDirection === "prev" &&
          d.currentTranslate > d.startTranslate &&
          (d.currentTranslate = d.startTranslate),
        l.allowSlidePrev ||
          l.allowSlideNext ||
          (d.currentTranslate = d.startTranslate),
        u.threshold > 0)
      ) {
        if (!(Math.abs(x) > u.threshold || d.allowThresholdMove))
          return void (d.currentTranslate = d.startTranslate);
        if (!d.allowThresholdMove)
          return (
            (d.allowThresholdMove = !0),
            (c.startX = c.currentX),
            (c.startY = c.currentY),
            (d.currentTranslate = d.startTranslate),
            void (c.diff = l.isHorizontal()
              ? c.currentX - c.startX
              : c.currentY - c.startY)
          );
      }
      u.followFinger &&
        !u.cssMode &&
        (((u.freeMode && u.freeMode.enabled && l.freeMode) ||
          u.watchSlidesProgress) &&
          (l.updateActiveIndex(), l.updateSlidesClasses()),
        l.params.freeMode &&
          u.freeMode.enabled &&
          l.freeMode &&
          l.freeMode.onTouchMove(),
        l.updateProgress(d.currentTranslate),
        l.setTranslate(d.currentTranslate));
    }
    function he(t) {
      const o = this,
        l = o.touchEventsData,
        {
          params: d,
          touches: u,
          rtlTranslate: c,
          slidesGrid: v,
          enabled: y,
        } = o;
      if (!y) return;
      let g = t;
      if (
        (g.originalEvent && (g = g.originalEvent),
        l.allowTouchCallbacks && o.emit("touchEnd", g),
        (l.allowTouchCallbacks = !1),
        !l.isTouched)
      )
        return (
          l.isMoved && d.grabCursor && o.setGrabCursor(!1),
          (l.isMoved = !1),
          void (l.startMoving = !1)
        );
      d.grabCursor &&
        l.isMoved &&
        l.isTouched &&
        (o.allowSlideNext === !0 || o.allowSlidePrev === !0) &&
        o.setGrabCursor(!1);
      const T = M(),
        h = T - l.touchStartTime;
      if (
        (o.allowClick &&
          (o.updateClickedSlide(g),
          o.emit("tap click", g),
          h < 300 &&
            T - l.lastClickTime < 300 &&
            o.emit("doubleTap doubleClick", g)),
        (l.lastClickTime = M()),
        A(() => {
          o.destroyed || (o.allowClick = !0);
        }),
        !l.isTouched ||
          !l.isMoved ||
          !o.swipeDirection ||
          u.diff === 0 ||
          l.currentTranslate === l.startTranslate)
      )
        return (l.isTouched = !1), (l.isMoved = !1), void (l.startMoving = !1);
      let m;
      if (
        ((l.isTouched = !1),
        (l.isMoved = !1),
        (l.startMoving = !1),
        (m = d.followFinger
          ? c
            ? o.translate
            : -o.translate
          : -l.currentTranslate),
        d.cssMode)
      )
        return;
      if (o.params.freeMode && d.freeMode.enabled)
        return void o.freeMode.onTouchEnd({ currentPos: m });
      let S = 0,
        E = o.slidesSizesGrid[0];
      for (
        let D = 0;
        D < v.length;
        D += D < d.slidesPerGroupSkip ? 1 : d.slidesPerGroup
      ) {
        const P = D < d.slidesPerGroupSkip - 1 ? 1 : d.slidesPerGroup;
        v[D + P] !== void 0
          ? m >= v[D] && m < v[D + P] && ((S = D), (E = v[D + P] - v[D]))
          : m >= v[D] && ((S = D), (E = v[v.length - 1] - v[v.length - 2]));
      }
      const x = (m - v[S]) / E,
        k = S < d.slidesPerGroupSkip - 1 ? 1 : d.slidesPerGroup;
      if (h > d.longSwipesMs) {
        if (!d.longSwipes) return void o.slideTo(o.activeIndex);
        o.swipeDirection === "next" &&
          (x >= d.longSwipesRatio ? o.slideTo(S + k) : o.slideTo(S)),
          o.swipeDirection === "prev" &&
            (x > 1 - d.longSwipesRatio ? o.slideTo(S + k) : o.slideTo(S));
      } else {
        if (!d.shortSwipes) return void o.slideTo(o.activeIndex);
        o.navigation &&
        (g.target === o.navigation.nextEl || g.target === o.navigation.prevEl)
          ? g.target === o.navigation.nextEl
            ? o.slideTo(S + k)
            : o.slideTo(S)
          : (o.swipeDirection === "next" && o.slideTo(S + k),
            o.swipeDirection === "prev" && o.slideTo(S));
      }
    }
    function Ee() {
      const t = this,
        { params: o, el: l } = t;
      if (l && l.offsetWidth === 0) return;
      o.breakpoints && t.setBreakpoint();
      const { allowSlideNext: d, allowSlidePrev: u, snapGrid: c } = t;
      (t.allowSlideNext = !0),
        (t.allowSlidePrev = !0),
        t.updateSize(),
        t.updateSlides(),
        t.updateSlidesClasses(),
        (o.slidesPerView === "auto" || o.slidesPerView > 1) &&
        t.isEnd &&
        !t.isBeginning &&
        !t.params.centeredSlides
          ? t.slideTo(t.slides.length - 1, 0, !1, !0)
          : t.slideTo(t.activeIndex, 0, !1, !0),
        t.autoplay &&
          t.autoplay.running &&
          t.autoplay.paused &&
          t.autoplay.run(),
        (t.allowSlidePrev = u),
        (t.allowSlideNext = d),
        t.params.watchOverflow && c !== t.snapGrid && t.checkOverflow();
    }
    function et(t) {
      const o = this;
      o.enabled &&
        (o.allowClick ||
          (o.params.preventClicks && t.preventDefault(),
          o.params.preventClicksPropagation &&
            o.animating &&
            (t.stopPropagation(), t.stopImmediatePropagation())));
    }
    function bt() {
      const t = this,
        { wrapperEl: o, rtlTranslate: l, enabled: d } = t;
      if (!d) return;
      let u;
      (t.previousTranslate = t.translate),
        t.isHorizontal()
          ? (t.translate = -o.scrollLeft)
          : (t.translate = -o.scrollTop),
        t.translate === -0 && (t.translate = 0),
        t.updateActiveIndex(),
        t.updateSlidesClasses();
      const c = t.maxTranslate() - t.minTranslate();
      (u = c === 0 ? 0 : (t.translate - t.minTranslate()) / c),
        u !== t.progress && t.updateProgress(l ? -t.translate : t.translate),
        t.emit("setTranslate", t.translate, !1);
    }
    let yt = !1;
    function _t() {}
    const tt = (t, o) => {
        const l = n(),
          {
            params: d,
            touchEvents: u,
            el: c,
            wrapperEl: v,
            device: y,
            support: g,
          } = t,
          T = !!d.nested,
          h = o === "on" ? "addEventListener" : "removeEventListener",
          m = o;
        if (g.touch) {
          const S = !(
            u.start !== "touchstart" ||
            !g.passiveListener ||
            !d.passiveListeners
          ) && { passive: !0, capture: !1 };
          c[h](u.start, t.onTouchStart, S),
            c[h](
              u.move,
              t.onTouchMove,
              g.passiveListener ? { passive: !1, capture: T } : T
            ),
            c[h](u.end, t.onTouchEnd, S),
            u.cancel && c[h](u.cancel, t.onTouchEnd, S);
        } else
          c[h](u.start, t.onTouchStart, !1),
            l[h](u.move, t.onTouchMove, T),
            l[h](u.end, t.onTouchEnd, !1);
        (d.preventClicks || d.preventClicksPropagation) &&
          c[h]("click", t.onClick, !0),
          d.cssMode && v[h]("scroll", t.onScroll),
          d.updateOnWindowResize
            ? t[m](
                y.ios || y.android
                  ? "resize orientationchange observerUpdate"
                  : "resize observerUpdate",
                Ee,
                !0
              )
            : t[m]("observerUpdate", Ee, !0);
      },
      st = (t, o) => t.grid && o.grid && o.grid.rows > 1;
    var it = {
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
      loopFillGroupWithBlank: !1,
      loopPreventsSlide: !0,
      allowSlidePrev: !0,
      allowSlideNext: !0,
      swipeHandler: null,
      noSwiping: !0,
      noSwipingClass: "swiper-no-swiping",
      noSwipingSelector: null,
      passiveListeners: !0,
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
    function Dt(t, o) {
      return function (l = {}) {
        const d = Object.keys(l)[0],
          u = l[d];
        typeof u == "object" && u !== null
          ? (["navigation", "pagination", "scrollbar"].indexOf(d) >= 0 &&
              t[d] === !0 &&
              (t[d] = { auto: !0 }),
            d in t &&
              "enabled" in u &&
              (t[d] === !0 && (t[d] = { enabled: !0 }),
              typeof t[d] != "object" ||
                "enabled" in t[d] ||
                (t[d].enabled = !0),
              t[d] || (t[d] = { enabled: !1 })),
            L(o, l))
          : L(o, l);
      };
    }
    const nt = {
        eventsEmitter: fe,
        update: {
          updateSize: function () {
            const t = this;
            let o, l;
            const d = t.$el;
            (o =
              t.params.width !== void 0 && t.params.width !== null
                ? t.params.width
                : d[0].clientWidth),
              (l =
                t.params.height !== void 0 && t.params.height !== null
                  ? t.params.height
                  : d[0].clientHeight),
              (o === 0 && t.isHorizontal()) ||
                (l === 0 && t.isVertical()) ||
                ((o =
                  o -
                  parseInt(d.css("padding-left") || 0, 10) -
                  parseInt(d.css("padding-right") || 0, 10)),
                (l =
                  l -
                  parseInt(d.css("padding-top") || 0, 10) -
                  parseInt(d.css("padding-bottom") || 0, 10)),
                Number.isNaN(o) && (o = 0),
                Number.isNaN(l) && (l = 0),
                Object.assign(t, {
                  width: o,
                  height: l,
                  size: t.isHorizontal() ? o : l,
                }));
          },
          updateSlides: function () {
            const t = this;
            function o(q) {
              return t.isHorizontal()
                ? q
                : {
                    width: "height",
                    "margin-top": "margin-left",
                    "margin-bottom ": "margin-right",
                    "margin-left": "margin-top",
                    "margin-right": "margin-bottom",
                    "padding-left": "padding-top",
                    "padding-right": "padding-bottom",
                    marginRight: "marginBottom",
                  }[q];
            }
            function l(q, G) {
              return parseFloat(q.getPropertyValue(o(G)) || 0);
            }
            const d = t.params,
              { $wrapperEl: u, size: c, rtlTranslate: v, wrongRTL: y } = t,
              g = t.virtual && d.virtual.enabled,
              T = g ? t.virtual.slides.length : t.slides.length,
              h = u.children(`.${t.params.slideClass}`),
              m = g ? t.virtual.slides.length : h.length;
            let S = [];
            const E = [],
              x = [];
            let k = d.slidesOffsetBefore;
            typeof k == "function" && (k = d.slidesOffsetBefore.call(t));
            let D = d.slidesOffsetAfter;
            typeof D == "function" && (D = d.slidesOffsetAfter.call(t));
            const P = t.snapGrid.length,
              _ = t.slidesGrid.length;
            let N = d.spaceBetween,
              F = -k,
              Y = 0,
              j = 0;
            if (c === void 0) return;
            typeof N == "string" &&
              N.indexOf("%") >= 0 &&
              (N = (parseFloat(N.replace("%", "")) / 100) * c),
              (t.virtualSize = -N),
              v
                ? h.css({ marginLeft: "", marginBottom: "", marginTop: "" })
                : h.css({ marginRight: "", marginBottom: "", marginTop: "" }),
              d.centeredSlides &&
                d.cssMode &&
                (I(t.wrapperEl, "--swiper-centered-offset-before", ""),
                I(t.wrapperEl, "--swiper-centered-offset-after", ""));
            const W = d.grid && d.grid.rows > 1 && t.grid;
            let X;
            W && t.grid.initSlides(m);
            const V =
              d.slidesPerView === "auto" &&
              d.breakpoints &&
              Object.keys(d.breakpoints).filter(
                (q) => d.breakpoints[q].slidesPerView !== void 0
              ).length > 0;
            for (let q = 0; q < m; q += 1) {
              X = 0;
              const G = h.eq(q);
              if (
                (W && t.grid.updateSlide(q, G, m, o),
                G.css("display") !== "none")
              ) {
                if (d.slidesPerView === "auto") {
                  V && (h[q].style[o("width")] = "");
                  const Z = getComputedStyle(G[0]),
                    ae = G[0].style.transform,
                    U = G[0].style.webkitTransform;
                  if (
                    (ae && (G[0].style.transform = "none"),
                    U && (G[0].style.webkitTransform = "none"),
                    d.roundLengths)
                  )
                    X = t.isHorizontal() ? G.outerWidth(!0) : G.outerHeight(!0);
                  else {
                    const ie = l(Z, "width"),
                      se = l(Z, "padding-left"),
                      de = l(Z, "padding-right"),
                      ge = l(Z, "margin-left"),
                      Ge = l(Z, "margin-right"),
                      Be = Z.getPropertyValue("box-sizing");
                    if (Be && Be === "border-box") X = ie + ge + Ge;
                    else {
                      const { clientWidth: Qe, offsetWidth: Fe } = G[0];
                      X = ie + se + de + ge + Ge + (Fe - Qe);
                    }
                  }
                  ae && (G[0].style.transform = ae),
                    U && (G[0].style.webkitTransform = U),
                    d.roundLengths && (X = Math.floor(X));
                } else
                  (X = (c - (d.slidesPerView - 1) * N) / d.slidesPerView),
                    d.roundLengths && (X = Math.floor(X)),
                    h[q] && (h[q].style[o("width")] = `${X}px`);
                h[q] && (h[q].swiperSlideSize = X),
                  x.push(X),
                  d.centeredSlides
                    ? ((F = F + X / 2 + Y / 2 + N),
                      Y === 0 && q !== 0 && (F = F - c / 2 - N),
                      q === 0 && (F = F - c / 2 - N),
                      Math.abs(F) < 0.001 && (F = 0),
                      d.roundLengths && (F = Math.floor(F)),
                      j % d.slidesPerGroup == 0 && S.push(F),
                      E.push(F))
                    : (d.roundLengths && (F = Math.floor(F)),
                      (j - Math.min(t.params.slidesPerGroupSkip, j)) %
                        t.params.slidesPerGroup ==
                        0 && S.push(F),
                      E.push(F),
                      (F = F + X + N)),
                  (t.virtualSize += X + N),
                  (Y = X),
                  (j += 1);
              }
            }
            if (
              ((t.virtualSize = Math.max(t.virtualSize, c) + D),
              v &&
                y &&
                (d.effect === "slide" || d.effect === "coverflow") &&
                u.css({ width: `${t.virtualSize + d.spaceBetween}px` }),
              d.setWrapperSize &&
                u.css({ [o("width")]: `${t.virtualSize + d.spaceBetween}px` }),
              W && t.grid.updateWrapperSize(X, S, o),
              !d.centeredSlides)
            ) {
              const q = [];
              for (let G = 0; G < S.length; G += 1) {
                let Z = S[G];
                d.roundLengths && (Z = Math.floor(Z)),
                  S[G] <= t.virtualSize - c && q.push(Z);
              }
              (S = q),
                Math.floor(t.virtualSize - c) - Math.floor(S[S.length - 1]) >
                  1 && S.push(t.virtualSize - c);
            }
            if ((S.length === 0 && (S = [0]), d.spaceBetween !== 0)) {
              const q = t.isHorizontal() && v ? "marginLeft" : o("marginRight");
              h.filter((G, Z) => !d.cssMode || Z !== h.length - 1).css({
                [q]: `${N}px`,
              });
            }
            if (d.centeredSlides && d.centeredSlidesBounds) {
              let q = 0;
              x.forEach((Z) => {
                q += Z + (d.spaceBetween ? d.spaceBetween : 0);
              }),
                (q -= d.spaceBetween);
              const G = q - c;
              S = S.map((Z) => (Z < 0 ? -k : Z > G ? G + D : Z));
            }
            if (d.centerInsufficientSlides) {
              let q = 0;
              if (
                (x.forEach((G) => {
                  q += G + (d.spaceBetween ? d.spaceBetween : 0);
                }),
                (q -= d.spaceBetween),
                q < c)
              ) {
                const G = (c - q) / 2;
                S.forEach((Z, ae) => {
                  S[ae] = Z - G;
                }),
                  E.forEach((Z, ae) => {
                    E[ae] = Z + G;
                  });
              }
            }
            if (
              (Object.assign(t, {
                slides: h,
                snapGrid: S,
                slidesGrid: E,
                slidesSizesGrid: x,
              }),
              d.centeredSlides && d.cssMode && !d.centeredSlidesBounds)
            ) {
              I(t.wrapperEl, "--swiper-centered-offset-before", -S[0] + "px"),
                I(
                  t.wrapperEl,
                  "--swiper-centered-offset-after",
                  t.size / 2 - x[x.length - 1] / 2 + "px"
                );
              const q = -t.snapGrid[0],
                G = -t.slidesGrid[0];
              (t.snapGrid = t.snapGrid.map((Z) => Z + q)),
                (t.slidesGrid = t.slidesGrid.map((Z) => Z + G));
            }
            m !== T && t.emit("slidesLengthChange"),
              S.length !== P &&
                (t.params.watchOverflow && t.checkOverflow(),
                t.emit("snapGridLengthChange")),
              E.length !== _ && t.emit("slidesGridLengthChange"),
              d.watchSlidesProgress && t.updateSlidesOffset();
          },
          updateAutoHeight: function (t) {
            const o = this,
              l = [],
              d = o.virtual && o.params.virtual.enabled;
            let u,
              c = 0;
            typeof t == "number"
              ? o.setTransition(t)
              : t === !0 && o.setTransition(o.params.speed);
            const v = (y) =>
              d
                ? o.slides.filter(
                    (g) =>
                      parseInt(
                        g.getAttribute("data-swiper-slide-index"),
                        10
                      ) === y
                  )[0]
                : o.slides.eq(y)[0];
            if (o.params.slidesPerView !== "auto" && o.params.slidesPerView > 1)
              if (o.params.centeredSlides)
                o.visibleSlides.each((y) => {
                  l.push(y);
                });
              else
                for (u = 0; u < Math.ceil(o.params.slidesPerView); u += 1) {
                  const y = o.activeIndex + u;
                  if (y > o.slides.length && !d) break;
                  l.push(v(y));
                }
            else l.push(v(o.activeIndex));
            for (u = 0; u < l.length; u += 1)
              if (l[u] !== void 0) {
                const y = l[u].offsetHeight;
                c = y > c ? y : c;
              }
            c && o.$wrapperEl.css("height", `${c}px`);
          },
          updateSlidesOffset: function () {
            const t = this,
              o = t.slides;
            for (let l = 0; l < o.length; l += 1)
              o[l].swiperSlideOffset = t.isHorizontal()
                ? o[l].offsetLeft
                : o[l].offsetTop;
          },
          updateSlidesProgress: function (t = (this && this.translate) || 0) {
            const o = this,
              l = o.params,
              { slides: d, rtlTranslate: u } = o;
            if (d.length === 0) return;
            d[0].swiperSlideOffset === void 0 && o.updateSlidesOffset();
            let c = -t;
            u && (c = t),
              d.removeClass(l.slideVisibleClass),
              (o.visibleSlidesIndexes = []),
              (o.visibleSlides = []);
            for (let v = 0; v < d.length; v += 1) {
              const y = d[v];
              let g = y.swiperSlideOffset;
              l.cssMode && l.centeredSlides && (g -= d[0].swiperSlideOffset);
              const T =
                  (c + (l.centeredSlides ? o.minTranslate() : 0) - g) /
                  (y.swiperSlideSize + l.spaceBetween),
                h = -(c - g),
                m = h + o.slidesSizesGrid[v];
              ((h >= 0 && h < o.size - 1) ||
                (m > 1 && m <= o.size) ||
                (h <= 0 && m >= o.size)) &&
                (o.visibleSlides.push(y),
                o.visibleSlidesIndexes.push(v),
                d.eq(v).addClass(l.slideVisibleClass)),
                (y.progress = u ? -T : T);
            }
            o.visibleSlides = f(o.visibleSlides);
          },
          updateProgress: function (t) {
            const o = this;
            if (t === void 0) {
              const T = o.rtlTranslate ? -1 : 1;
              t = (o && o.translate && o.translate * T) || 0;
            }
            const l = o.params,
              d = o.maxTranslate() - o.minTranslate();
            let { progress: u, isBeginning: c, isEnd: v } = o;
            const y = c,
              g = v;
            d === 0
              ? ((u = 0), (c = !0), (v = !0))
              : ((u = (t - o.minTranslate()) / d), (c = u <= 0), (v = u >= 1)),
              Object.assign(o, { progress: u, isBeginning: c, isEnd: v }),
              (l.watchSlidesProgress || (l.centeredSlides && l.autoHeight)) &&
                o.updateSlidesProgress(t),
              c && !y && o.emit("reachBeginning toEdge"),
              v && !g && o.emit("reachEnd toEdge"),
              ((y && !c) || (g && !v)) && o.emit("fromEdge"),
              o.emit("progress", u);
          },
          updateSlidesClasses: function () {
            const t = this,
              {
                slides: o,
                params: l,
                $wrapperEl: d,
                activeIndex: u,
                realIndex: c,
              } = t,
              v = t.virtual && l.virtual.enabled;
            let y;
            o.removeClass(
              `${l.slideActiveClass} ${l.slideNextClass} ${l.slidePrevClass} ${l.slideDuplicateActiveClass} ${l.slideDuplicateNextClass} ${l.slideDuplicatePrevClass}`
            ),
              (y = v
                ? t.$wrapperEl.find(
                    `.${l.slideClass}[data-swiper-slide-index="${u}"]`
                  )
                : o.eq(u)),
              y.addClass(l.slideActiveClass),
              l.loop &&
                (y.hasClass(l.slideDuplicateClass)
                  ? d
                      .children(
                        `.${l.slideClass}:not(.${l.slideDuplicateClass})[data-swiper-slide-index="${c}"]`
                      )
                      .addClass(l.slideDuplicateActiveClass)
                  : d
                      .children(
                        `.${l.slideClass}.${l.slideDuplicateClass}[data-swiper-slide-index="${c}"]`
                      )
                      .addClass(l.slideDuplicateActiveClass));
            let g = y
              .nextAll(`.${l.slideClass}`)
              .eq(0)
              .addClass(l.slideNextClass);
            l.loop &&
              g.length === 0 &&
              ((g = o.eq(0)), g.addClass(l.slideNextClass));
            let T = y
              .prevAll(`.${l.slideClass}`)
              .eq(0)
              .addClass(l.slidePrevClass);
            l.loop &&
              T.length === 0 &&
              ((T = o.eq(-1)), T.addClass(l.slidePrevClass)),
              l.loop &&
                (g.hasClass(l.slideDuplicateClass)
                  ? d
                      .children(
                        `.${l.slideClass}:not(.${
                          l.slideDuplicateClass
                        })[data-swiper-slide-index="${g.attr(
                          "data-swiper-slide-index"
                        )}"]`
                      )
                      .addClass(l.slideDuplicateNextClass)
                  : d
                      .children(
                        `.${l.slideClass}.${
                          l.slideDuplicateClass
                        }[data-swiper-slide-index="${g.attr(
                          "data-swiper-slide-index"
                        )}"]`
                      )
                      .addClass(l.slideDuplicateNextClass),
                T.hasClass(l.slideDuplicateClass)
                  ? d
                      .children(
                        `.${l.slideClass}:not(.${
                          l.slideDuplicateClass
                        })[data-swiper-slide-index="${T.attr(
                          "data-swiper-slide-index"
                        )}"]`
                      )
                      .addClass(l.slideDuplicatePrevClass)
                  : d
                      .children(
                        `.${l.slideClass}.${
                          l.slideDuplicateClass
                        }[data-swiper-slide-index="${T.attr(
                          "data-swiper-slide-index"
                        )}"]`
                      )
                      .addClass(l.slideDuplicatePrevClass)),
              t.emitSlidesClasses();
          },
          updateActiveIndex: function (t) {
            const o = this,
              l = o.rtlTranslate ? o.translate : -o.translate,
              {
                slidesGrid: d,
                snapGrid: u,
                params: c,
                activeIndex: v,
                realIndex: y,
                snapIndex: g,
              } = o;
            let T,
              h = t;
            if (h === void 0) {
              for (let S = 0; S < d.length; S += 1)
                d[S + 1] !== void 0
                  ? l >= d[S] && l < d[S + 1] - (d[S + 1] - d[S]) / 2
                    ? (h = S)
                    : l >= d[S] && l < d[S + 1] && (h = S + 1)
                  : l >= d[S] && (h = S);
              c.normalizeSlideIndex && (h < 0 || h === void 0) && (h = 0);
            }
            if (u.indexOf(l) >= 0) T = u.indexOf(l);
            else {
              const S = Math.min(c.slidesPerGroupSkip, h);
              T = S + Math.floor((h - S) / c.slidesPerGroup);
            }
            if ((T >= u.length && (T = u.length - 1), h === v))
              return void (
                T !== g && ((o.snapIndex = T), o.emit("snapIndexChange"))
              );
            const m = parseInt(
              o.slides.eq(h).attr("data-swiper-slide-index") || h,
              10
            );
            Object.assign(o, {
              snapIndex: T,
              realIndex: m,
              previousIndex: v,
              activeIndex: h,
            }),
              o.emit("activeIndexChange"),
              o.emit("snapIndexChange"),
              y !== m && o.emit("realIndexChange"),
              (o.initialized || o.params.runCallbacksOnInit) &&
                o.emit("slideChange");
          },
          updateClickedSlide: function (t) {
            const o = this,
              l = o.params,
              d = f(t.target).closest(`.${l.slideClass}`)[0];
            let u,
              c = !1;
            if (d) {
              for (let v = 0; v < o.slides.length; v += 1)
                if (o.slides[v] === d) {
                  (c = !0), (u = v);
                  break;
                }
            }
            if (!d || !c)
              return (o.clickedSlide = void 0), void (o.clickedIndex = void 0);
            (o.clickedSlide = d),
              o.virtual && o.params.virtual.enabled
                ? (o.clickedIndex = parseInt(
                    f(d).attr("data-swiper-slide-index"),
                    10
                  ))
                : (o.clickedIndex = u),
              l.slideToClickedSlide &&
                o.clickedIndex !== void 0 &&
                o.clickedIndex !== o.activeIndex &&
                o.slideToClickedSlide();
          },
        },
        translate: {
          getTranslate: function (t = this.isHorizontal() ? "x" : "y") {
            const {
              params: o,
              rtlTranslate: l,
              translate: d,
              $wrapperEl: u,
            } = this;
            if (o.virtualTranslate) return l ? -d : d;
            if (o.cssMode) return d;
            let c = z(u[0], t);
            return l && (c = -c), c || 0;
          },
          setTranslate: function (t, o) {
            const l = this,
              {
                rtlTranslate: d,
                params: u,
                $wrapperEl: c,
                wrapperEl: v,
                progress: y,
              } = l;
            let g,
              T = 0,
              h = 0;
            l.isHorizontal() ? (T = d ? -t : t) : (h = t),
              u.roundLengths && ((T = Math.floor(T)), (h = Math.floor(h))),
              u.cssMode
                ? (v[l.isHorizontal() ? "scrollLeft" : "scrollTop"] =
                    l.isHorizontal() ? -T : -h)
                : u.virtualTranslate ||
                  c.transform(`translate3d(${T}px, ${h}px, 0px)`),
              (l.previousTranslate = l.translate),
              (l.translate = l.isHorizontal() ? T : h);
            const m = l.maxTranslate() - l.minTranslate();
            (g = m === 0 ? 0 : (t - l.minTranslate()) / m),
              g !== y && l.updateProgress(t),
              l.emit("setTranslate", l.translate, o);
          },
          minTranslate: function () {
            return -this.snapGrid[0];
          },
          maxTranslate: function () {
            return -this.snapGrid[this.snapGrid.length - 1];
          },
          translateTo: function (
            t = 0,
            o = this.params.speed,
            l = !0,
            d = !0,
            u
          ) {
            const c = this,
              { params: v, wrapperEl: y } = c;
            if (c.animating && v.preventInteractionOnTransition) return !1;
            const g = c.minTranslate(),
              T = c.maxTranslate();
            let h;
            if (
              ((h = d && t > g ? g : d && t < T ? T : t),
              c.updateProgress(h),
              v.cssMode)
            ) {
              const m = c.isHorizontal();
              if (o === 0) y[m ? "scrollLeft" : "scrollTop"] = -h;
              else {
                if (!c.support.smoothScroll)
                  return (
                    B({
                      swiper: c,
                      targetPosition: -h,
                      side: m ? "left" : "top",
                    }),
                    !0
                  );
                y.scrollTo({ [m ? "left" : "top"]: -h, behavior: "smooth" });
              }
              return !0;
            }
            return (
              o === 0
                ? (c.setTransition(0),
                  c.setTranslate(h),
                  l &&
                    (c.emit("beforeTransitionStart", o, u),
                    c.emit("transitionEnd")))
                : (c.setTransition(o),
                  c.setTranslate(h),
                  l &&
                    (c.emit("beforeTransitionStart", o, u),
                    c.emit("transitionStart")),
                  c.animating ||
                    ((c.animating = !0),
                    c.onTranslateToWrapperTransitionEnd ||
                      (c.onTranslateToWrapperTransitionEnd = function (m) {
                        c &&
                          !c.destroyed &&
                          m.target === this &&
                          (c.$wrapperEl[0].removeEventListener(
                            "transitionend",
                            c.onTranslateToWrapperTransitionEnd
                          ),
                          c.$wrapperEl[0].removeEventListener(
                            "webkitTransitionEnd",
                            c.onTranslateToWrapperTransitionEnd
                          ),
                          (c.onTranslateToWrapperTransitionEnd = null),
                          delete c.onTranslateToWrapperTransitionEnd,
                          l && c.emit("transitionEnd"));
                      }),
                    c.$wrapperEl[0].addEventListener(
                      "transitionend",
                      c.onTranslateToWrapperTransitionEnd
                    ),
                    c.$wrapperEl[0].addEventListener(
                      "webkitTransitionEnd",
                      c.onTranslateToWrapperTransitionEnd
                    ))),
              !0
            );
          },
        },
        transition: {
          setTransition: function (t, o) {
            const l = this;
            l.params.cssMode || l.$wrapperEl.transition(t),
              l.emit("setTransition", t, o);
          },
          transitionStart: function (t = !0, o) {
            const l = this,
              { params: d } = l;
            d.cssMode ||
              (d.autoHeight && l.updateAutoHeight(),
              Se({ swiper: l, runCallbacks: t, direction: o, step: "Start" }));
          },
          transitionEnd: function (t = !0, o) {
            const l = this,
              { params: d } = l;
            (l.animating = !1),
              d.cssMode ||
                (l.setTransition(0),
                Se({ swiper: l, runCallbacks: t, direction: o, step: "End" }));
          },
        },
        slide: {
          slideTo: function (t = 0, o = this.params.speed, l = !0, d, u) {
            if (typeof t != "number" && typeof t != "string")
              throw new Error(
                `The 'index' argument cannot have type other than 'number' or 'string'. [${typeof t}] given.`
              );
            if (typeof t == "string") {
              const N = parseInt(t, 10);
              if (!isFinite(N))
                throw new Error(
                  `The passed-in 'index' (string) couldn't be converted to 'number'. [${t}] given.`
                );
              t = N;
            }
            const c = this;
            let v = t;
            v < 0 && (v = 0);
            const {
              params: y,
              snapGrid: g,
              slidesGrid: T,
              previousIndex: h,
              activeIndex: m,
              rtlTranslate: S,
              wrapperEl: E,
              enabled: x,
            } = c;
            if (
              (c.animating && y.preventInteractionOnTransition) ||
              (!x && !d && !u)
            )
              return !1;
            const k = Math.min(c.params.slidesPerGroupSkip, v);
            let D = k + Math.floor((v - k) / c.params.slidesPerGroup);
            D >= g.length && (D = g.length - 1),
              (m || y.initialSlide || 0) === (h || 0) &&
                l &&
                c.emit("beforeSlideChangeStart");
            const P = -g[D];
            if ((c.updateProgress(P), y.normalizeSlideIndex))
              for (let N = 0; N < T.length; N += 1) {
                const F = -Math.floor(100 * P),
                  Y = Math.floor(100 * T[N]),
                  j = Math.floor(100 * T[N + 1]);
                T[N + 1] !== void 0
                  ? F >= Y && F < j - (j - Y) / 2
                    ? (v = N)
                    : F >= Y && F < j && (v = N + 1)
                  : F >= Y && (v = N);
              }
            if (
              c.initialized &&
              v !== m &&
              ((!c.allowSlideNext && P < c.translate && P < c.minTranslate()) ||
                (!c.allowSlidePrev &&
                  P > c.translate &&
                  P > c.maxTranslate() &&
                  (m || 0) !== v))
            )
              return !1;
            let _;
            if (
              ((_ = v > m ? "next" : v < m ? "prev" : "reset"),
              (S && -P === c.translate) || (!S && P === c.translate))
            )
              return (
                c.updateActiveIndex(v),
                y.autoHeight && c.updateAutoHeight(),
                c.updateSlidesClasses(),
                y.effect !== "slide" && c.setTranslate(P),
                _ !== "reset" &&
                  (c.transitionStart(l, _), c.transitionEnd(l, _)),
                !1
              );
            if (y.cssMode) {
              const N = c.isHorizontal(),
                F = S ? P : -P;
              if (o === 0) {
                const Y = c.virtual && c.params.virtual.enabled;
                Y && (c.wrapperEl.style.scrollSnapType = "none"),
                  (E[N ? "scrollLeft" : "scrollTop"] = F),
                  Y &&
                    requestAnimationFrame(() => {
                      c.wrapperEl.style.scrollSnapType = "";
                    });
              } else {
                if (!c.support.smoothScroll)
                  return (
                    B({
                      swiper: c,
                      targetPosition: F,
                      side: N ? "left" : "top",
                    }),
                    !0
                  );
                E.scrollTo({ [N ? "left" : "top"]: F, behavior: "smooth" });
              }
              return !0;
            }
            return (
              o === 0
                ? (c.setTransition(0),
                  c.setTranslate(P),
                  c.updateActiveIndex(v),
                  c.updateSlidesClasses(),
                  c.emit("beforeTransitionStart", o, d),
                  c.transitionStart(l, _),
                  c.transitionEnd(l, _))
                : (c.setTransition(o),
                  c.setTranslate(P),
                  c.updateActiveIndex(v),
                  c.updateSlidesClasses(),
                  c.emit("beforeTransitionStart", o, d),
                  c.transitionStart(l, _),
                  c.animating ||
                    ((c.animating = !0),
                    c.onSlideToWrapperTransitionEnd ||
                      (c.onSlideToWrapperTransitionEnd = function (N) {
                        c &&
                          !c.destroyed &&
                          N.target === this &&
                          (c.$wrapperEl[0].removeEventListener(
                            "transitionend",
                            c.onSlideToWrapperTransitionEnd
                          ),
                          c.$wrapperEl[0].removeEventListener(
                            "webkitTransitionEnd",
                            c.onSlideToWrapperTransitionEnd
                          ),
                          (c.onSlideToWrapperTransitionEnd = null),
                          delete c.onSlideToWrapperTransitionEnd,
                          c.transitionEnd(l, _));
                      }),
                    c.$wrapperEl[0].addEventListener(
                      "transitionend",
                      c.onSlideToWrapperTransitionEnd
                    ),
                    c.$wrapperEl[0].addEventListener(
                      "webkitTransitionEnd",
                      c.onSlideToWrapperTransitionEnd
                    ))),
              !0
            );
          },
          slideToLoop: function (t = 0, o = this.params.speed, l = !0, d) {
            const u = this;
            let c = t;
            return (
              u.params.loop && (c += u.loopedSlides), u.slideTo(c, o, l, d)
            );
          },
          slideNext: function (t = this.params.speed, o = !0, l) {
            const d = this,
              { animating: u, enabled: c, params: v } = d;
            if (!c) return d;
            let y = v.slidesPerGroup;
            v.slidesPerView === "auto" &&
              v.slidesPerGroup === 1 &&
              v.slidesPerGroupAuto &&
              (y = Math.max(d.slidesPerViewDynamic("current", !0), 1));
            const g = d.activeIndex < v.slidesPerGroupSkip ? 1 : y;
            if (v.loop) {
              if (u && v.loopPreventsSlide) return !1;
              d.loopFix(), (d._clientLeft = d.$wrapperEl[0].clientLeft);
            }
            return d.slideTo(d.activeIndex + g, t, o, l);
          },
          slidePrev: function (t = this.params.speed, o = !0, l) {
            const d = this,
              {
                params: u,
                animating: c,
                snapGrid: v,
                slidesGrid: y,
                rtlTranslate: g,
                enabled: T,
              } = d;
            if (!T) return d;
            if (u.loop) {
              if (c && u.loopPreventsSlide) return !1;
              d.loopFix(), (d._clientLeft = d.$wrapperEl[0].clientLeft);
            }
            function h(k) {
              return k < 0 ? -Math.floor(Math.abs(k)) : Math.floor(k);
            }
            const m = h(g ? d.translate : -d.translate),
              S = v.map((k) => h(k));
            let E = v[S.indexOf(m) - 1];
            if (E === void 0 && u.cssMode) {
              let k;
              v.forEach((D, P) => {
                m >= D && (k = P);
              }),
                k !== void 0 && (E = v[k > 0 ? k - 1 : k]);
            }
            let x = 0;
            return (
              E !== void 0 &&
                ((x = y.indexOf(E)),
                x < 0 && (x = d.activeIndex - 1),
                u.slidesPerView === "auto" &&
                  u.slidesPerGroup === 1 &&
                  u.slidesPerGroupAuto &&
                  ((x = x - d.slidesPerViewDynamic("previous", !0) + 1),
                  (x = Math.max(x, 0)))),
              d.slideTo(x, t, o, l)
            );
          },
          slideReset: function (t = this.params.speed, o = !0, l) {
            return this.slideTo(this.activeIndex, t, o, l);
          },
          slideToClosest: function (t = this.params.speed, o = !0, l, d = 0.5) {
            const u = this;
            let c = u.activeIndex;
            const v = Math.min(u.params.slidesPerGroupSkip, c),
              y = v + Math.floor((c - v) / u.params.slidesPerGroup),
              g = u.rtlTranslate ? u.translate : -u.translate;
            if (g >= u.snapGrid[y]) {
              const T = u.snapGrid[y];
              g - T > (u.snapGrid[y + 1] - T) * d &&
                (c += u.params.slidesPerGroup);
            } else {
              const T = u.snapGrid[y - 1];
              g - T <= (u.snapGrid[y] - T) * d &&
                (c -= u.params.slidesPerGroup);
            }
            return (
              (c = Math.max(c, 0)),
              (c = Math.min(c, u.slidesGrid.length - 1)),
              u.slideTo(c, t, o, l)
            );
          },
          slideToClickedSlide: function () {
            const t = this,
              { params: o, $wrapperEl: l } = t,
              d =
                o.slidesPerView === "auto"
                  ? t.slidesPerViewDynamic()
                  : o.slidesPerView;
            let u,
              c = t.clickedIndex;
            if (o.loop) {
              if (t.animating) return;
              (u = parseInt(
                f(t.clickedSlide).attr("data-swiper-slide-index"),
                10
              )),
                o.centeredSlides
                  ? c < t.loopedSlides - d / 2 ||
                    c > t.slides.length - t.loopedSlides + d / 2
                    ? (t.loopFix(),
                      (c = l
                        .children(
                          `.${o.slideClass}[data-swiper-slide-index="${u}"]:not(.${o.slideDuplicateClass})`
                        )
                        .eq(0)
                        .index()),
                      A(() => {
                        t.slideTo(c);
                      }))
                    : t.slideTo(c)
                  : c > t.slides.length - d
                  ? (t.loopFix(),
                    (c = l
                      .children(
                        `.${o.slideClass}[data-swiper-slide-index="${u}"]:not(.${o.slideDuplicateClass})`
                      )
                      .eq(0)
                      .index()),
                    A(() => {
                      t.slideTo(c);
                    }))
                  : t.slideTo(c);
            } else t.slideTo(c);
          },
        },
        loop: {
          loopCreate: function () {
            const t = this,
              o = n(),
              { params: l, $wrapperEl: d } = t;
            d.children(`.${l.slideClass}.${l.slideDuplicateClass}`).remove();
            let u = d.children(`.${l.slideClass}`);
            if (l.loopFillGroupWithBlank) {
              const y = l.slidesPerGroup - (u.length % l.slidesPerGroup);
              if (y !== l.slidesPerGroup) {
                for (let g = 0; g < y; g += 1) {
                  const T = f(o.createElement("div")).addClass(
                    `${l.slideClass} ${l.slideBlankClass}`
                  );
                  d.append(T);
                }
                u = d.children(`.${l.slideClass}`);
              }
            }
            l.slidesPerView !== "auto" ||
              l.loopedSlides ||
              (l.loopedSlides = u.length),
              (t.loopedSlides = Math.ceil(
                parseFloat(l.loopedSlides || l.slidesPerView, 10)
              )),
              (t.loopedSlides += l.loopAdditionalSlides),
              t.loopedSlides > u.length && (t.loopedSlides = u.length);
            const c = [],
              v = [];
            u.each((y, g) => {
              const T = f(y);
              g < t.loopedSlides && v.push(y),
                g < u.length && g >= u.length - t.loopedSlides && c.push(y),
                T.attr("data-swiper-slide-index", g);
            });
            for (let y = 0; y < v.length; y += 1)
              d.append(f(v[y].cloneNode(!0)).addClass(l.slideDuplicateClass));
            for (let y = c.length - 1; y >= 0; y -= 1)
              d.prepend(f(c[y].cloneNode(!0)).addClass(l.slideDuplicateClass));
          },
          loopFix: function () {
            const t = this;
            t.emit("beforeLoopFix");
            const {
              activeIndex: o,
              slides: l,
              loopedSlides: d,
              allowSlidePrev: u,
              allowSlideNext: c,
              snapGrid: v,
              rtlTranslate: y,
            } = t;
            let g;
            (t.allowSlidePrev = !0), (t.allowSlideNext = !0);
            const T = -v[o] - t.getTranslate();
            o < d
              ? ((g = l.length - 3 * d + o),
                (g += d),
                t.slideTo(g, 0, !1, !0) &&
                  T !== 0 &&
                  t.setTranslate((y ? -t.translate : t.translate) - T))
              : o >= l.length - d &&
                ((g = -l.length + o + d),
                (g += d),
                t.slideTo(g, 0, !1, !0) &&
                  T !== 0 &&
                  t.setTranslate((y ? -t.translate : t.translate) - T)),
              (t.allowSlidePrev = u),
              (t.allowSlideNext = c),
              t.emit("loopFix");
          },
          loopDestroy: function () {
            const { $wrapperEl: t, params: o, slides: l } = this;
            t
              .children(
                `.${o.slideClass}.${o.slideDuplicateClass},.${o.slideClass}.${o.slideBlankClass}`
              )
              .remove(),
              l.removeAttr("data-swiper-slide-index");
          },
        },
        grabCursor: {
          setGrabCursor: function (t) {
            const o = this;
            if (
              o.support.touch ||
              !o.params.simulateTouch ||
              (o.params.watchOverflow && o.isLocked) ||
              o.params.cssMode
            )
              return;
            const l =
              o.params.touchEventsTarget === "container" ? o.el : o.wrapperEl;
            (l.style.cursor = "move"),
              (l.style.cursor = t ? "-webkit-grabbing" : "-webkit-grab"),
              (l.style.cursor = t ? "-moz-grabbin" : "-moz-grab"),
              (l.style.cursor = t ? "grabbing" : "grab");
          },
          unsetGrabCursor: function () {
            const t = this;
            t.support.touch ||
              (t.params.watchOverflow && t.isLocked) ||
              t.params.cssMode ||
              (t[
                t.params.touchEventsTarget === "container" ? "el" : "wrapperEl"
              ].style.cursor = "");
          },
        },
        events: {
          attachEvents: function () {
            const t = this,
              o = n(),
              { params: l, support: d } = t;
            (t.onTouchStart = ne.bind(t)),
              (t.onTouchMove = oe.bind(t)),
              (t.onTouchEnd = he.bind(t)),
              l.cssMode && (t.onScroll = bt.bind(t)),
              (t.onClick = et.bind(t)),
              d.touch &&
                !yt &&
                (o.addEventListener("touchstart", _t), (yt = !0)),
              tt(t, "on");
          },
          detachEvents: function () {
            tt(this, "off");
          },
        },
        breakpoints: {
          setBreakpoint: function () {
            const t = this,
              {
                activeIndex: o,
                initialized: l,
                loopedSlides: d = 0,
                params: u,
                $el: c,
              } = t,
              v = u.breakpoints;
            if (!v || (v && Object.keys(v).length === 0)) return;
            const y = t.getBreakpoint(v, t.params.breakpointsBase, t.el);
            if (!y || t.currentBreakpoint === y) return;
            const g = (y in v ? v[y] : void 0) || t.originalParams,
              T = st(t, u),
              h = st(t, g),
              m = u.enabled;
            T && !h
              ? (c.removeClass(
                  `${u.containerModifierClass}grid ${u.containerModifierClass}grid-column`
                ),
                t.emitContainerClasses())
              : !T &&
                h &&
                (c.addClass(`${u.containerModifierClass}grid`),
                ((g.grid.fill && g.grid.fill === "column") ||
                  (!g.grid.fill && u.grid.fill === "column")) &&
                  c.addClass(`${u.containerModifierClass}grid-column`),
                t.emitContainerClasses());
            const S = g.direction && g.direction !== u.direction,
              E = u.loop && (g.slidesPerView !== u.slidesPerView || S);
            S && l && t.changeDirection(), L(t.params, g);
            const x = t.params.enabled;
            Object.assign(t, {
              allowTouchMove: t.params.allowTouchMove,
              allowSlideNext: t.params.allowSlideNext,
              allowSlidePrev: t.params.allowSlidePrev,
            }),
              m && !x ? t.disable() : !m && x && t.enable(),
              (t.currentBreakpoint = y),
              t.emit("_beforeBreakpoint", g),
              E &&
                l &&
                (t.loopDestroy(),
                t.loopCreate(),
                t.updateSlides(),
                t.slideTo(o - d + t.loopedSlides, 0, !1)),
              t.emit("breakpoint", g);
          },
          getBreakpoint: function (t, o = "window", l) {
            if (!t || (o === "container" && !l)) return;
            let d = !1;
            const u = r(),
              c = o === "window" ? u.innerHeight : l.clientHeight,
              v = Object.keys(t).map((y) => {
                if (typeof y == "string" && y.indexOf("@") === 0) {
                  const g = parseFloat(y.substr(1));
                  return { value: c * g, point: y };
                }
                return { value: y, point: y };
              });
            v.sort((y, g) => parseInt(y.value, 10) - parseInt(g.value, 10));
            for (let y = 0; y < v.length; y += 1) {
              const { point: g, value: T } = v[y];
              o === "window"
                ? u.matchMedia(`(min-width: ${T}px)`).matches && (d = g)
                : T <= l.clientWidth && (d = g);
            }
            return d || "max";
          },
        },
        checkOverflow: {
          checkOverflow: function () {
            const t = this,
              { isLocked: o, params: l } = t,
              { slidesOffsetBefore: d } = l;
            if (d) {
              const u = t.slides.length - 1,
                c = t.slidesGrid[u] + t.slidesSizesGrid[u] + 2 * d;
              t.isLocked = t.size > c;
            } else t.isLocked = t.snapGrid.length === 1;
            l.allowSlideNext === !0 && (t.allowSlideNext = !t.isLocked),
              l.allowSlidePrev === !0 && (t.allowSlidePrev = !t.isLocked),
              o && o !== t.isLocked && (t.isEnd = !1),
              o !== t.isLocked && t.emit(t.isLocked ? "lock" : "unlock");
          },
        },
        classes: {
          addClasses: function () {
            const t = this,
              {
                classNames: o,
                params: l,
                rtl: d,
                $el: u,
                device: c,
                support: v,
              } = t,
              y = (function (g, T) {
                const h = [];
                return (
                  g.forEach((m) => {
                    typeof m == "object"
                      ? Object.keys(m).forEach((S) => {
                          m[S] && h.push(T + S);
                        })
                      : typeof m == "string" && h.push(T + m);
                  }),
                  h
                );
              })(
                [
                  "initialized",
                  l.direction,
                  { "pointer-events": !v.touch },
                  { "free-mode": t.params.freeMode && l.freeMode.enabled },
                  { autoheight: l.autoHeight },
                  { rtl: d },
                  { grid: l.grid && l.grid.rows > 1 },
                  {
                    "grid-column":
                      l.grid && l.grid.rows > 1 && l.grid.fill === "column",
                  },
                  { android: c.android },
                  { ios: c.ios },
                  { "css-mode": l.cssMode },
                  { centered: l.cssMode && l.centeredSlides },
                ],
                l.containerModifierClass
              );
            o.push(...y),
              u.addClass([...o].join(" ")),
              t.emitContainerClasses();
          },
          removeClasses: function () {
            const { $el: t, classNames: o } = this;
            t.removeClass(o.join(" ")), this.emitContainerClasses();
          },
        },
        images: {
          loadImage: function (t, o, l, d, u, c) {
            const v = r();
            let y;
            function g() {
              c && c();
            }
            f(t).parent("picture")[0] || (t.complete && u)
              ? g()
              : o
              ? ((y = new v.Image()),
                (y.onload = g),
                (y.onerror = g),
                d && (y.sizes = d),
                l && (y.srcset = l),
                o && (y.src = o))
              : g();
          },
          preloadImages: function () {
            const t = this;
            function o() {
              t != null &&
                t &&
                !t.destroyed &&
                (t.imagesLoaded !== void 0 && (t.imagesLoaded += 1),
                t.imagesLoaded === t.imagesToLoad.length &&
                  (t.params.updateOnImagesReady && t.update(),
                  t.emit("imagesReady")));
            }
            t.imagesToLoad = t.$el.find("img");
            for (let l = 0; l < t.imagesToLoad.length; l += 1) {
              const d = t.imagesToLoad[l];
              t.loadImage(
                d,
                d.currentSrc || d.getAttribute("src"),
                d.srcset || d.getAttribute("srcset"),
                d.sizes || d.getAttribute("sizes"),
                !0,
                o
              );
            }
          },
        },
      },
      qt = {};
    class Le {
      constructor(...o) {
        let l, d;
        if (
          (o.length === 1 &&
          o[0].constructor &&
          Object.prototype.toString.call(o[0]).slice(8, -1) === "Object"
            ? (d = o[0])
            : ([l, d] = o),
          d || (d = {}),
          (d = L({}, d)),
          l && !d.el && (d.el = l),
          d.el && f(d.el).length > 1)
        ) {
          const y = [];
          return (
            f(d.el).each((g) => {
              const T = L({}, d, { el: g });
              y.push(new Le(T));
            }),
            y
          );
        }
        const u = this;
        (u.__swiper__ = !0),
          (u.support = te()),
          (u.device = ce({ userAgent: d.userAgent })),
          (u.browser = be()),
          (u.eventsListeners = {}),
          (u.eventsAnyListeners = []),
          (u.modules = [...u.__modules__]),
          d.modules && Array.isArray(d.modules) && u.modules.push(...d.modules);
        const c = {};
        u.modules.forEach((y) => {
          y({
            swiper: u,
            extendParams: Dt(d, c),
            on: u.on.bind(u),
            once: u.once.bind(u),
            off: u.off.bind(u),
            emit: u.emit.bind(u),
          });
        });
        const v = L({}, it, c);
        return (
          (u.params = L({}, v, qt, d)),
          (u.originalParams = L({}, u.params)),
          (u.passedParams = L({}, d)),
          u.params &&
            u.params.on &&
            Object.keys(u.params.on).forEach((y) => {
              u.on(y, u.params.on[y]);
            }),
          u.params && u.params.onAny && u.onAny(u.params.onAny),
          (u.$ = f),
          Object.assign(u, {
            enabled: u.params.enabled,
            el: l,
            classNames: [],
            slides: f(),
            slidesGrid: [],
            snapGrid: [],
            slidesSizesGrid: [],
            isHorizontal: () => u.params.direction === "horizontal",
            isVertical: () => u.params.direction === "vertical",
            activeIndex: 0,
            realIndex: 0,
            isBeginning: !0,
            isEnd: !1,
            translate: 0,
            previousTranslate: 0,
            progress: 0,
            velocity: 0,
            animating: !1,
            allowSlideNext: u.params.allowSlideNext,
            allowSlidePrev: u.params.allowSlidePrev,
            touchEvents: (function () {
              const y = ["touchstart", "touchmove", "touchend", "touchcancel"],
                g = ["pointerdown", "pointermove", "pointerup"];
              return (
                (u.touchEventsTouch = {
                  start: y[0],
                  move: y[1],
                  end: y[2],
                  cancel: y[3],
                }),
                (u.touchEventsDesktop = { start: g[0], move: g[1], end: g[2] }),
                u.support.touch || !u.params.simulateTouch
                  ? u.touchEventsTouch
                  : u.touchEventsDesktop
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
              focusableElements: u.params.focusableElements,
              lastClickTime: M(),
              clickTimeout: void 0,
              velocities: [],
              allowMomentumBounce: void 0,
              isTouchEvent: void 0,
              startMoving: void 0,
            },
            allowClick: !0,
            allowTouchMove: u.params.allowTouchMove,
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
          u.emit("_swiper"),
          u.params.init && u.init(),
          u
        );
      }
      enable() {
        const o = this;
        o.enabled ||
          ((o.enabled = !0),
          o.params.grabCursor && o.setGrabCursor(),
          o.emit("enable"));
      }
      disable() {
        const o = this;
        o.enabled &&
          ((o.enabled = !1),
          o.params.grabCursor && o.unsetGrabCursor(),
          o.emit("disable"));
      }
      setProgress(o, l) {
        const d = this;
        o = Math.min(Math.max(o, 0), 1);
        const u = d.minTranslate(),
          c = (d.maxTranslate() - u) * o + u;
        d.translateTo(c, l === void 0 ? 0 : l),
          d.updateActiveIndex(),
          d.updateSlidesClasses();
      }
      emitContainerClasses() {
        const o = this;
        if (!o.params._emitClasses || !o.el) return;
        const l = o.el.className
          .split(" ")
          .filter(
            (d) =>
              d.indexOf("swiper") === 0 ||
              d.indexOf(o.params.containerModifierClass) === 0
          );
        o.emit("_containerClasses", l.join(" "));
      }
      getSlideClasses(o) {
        const l = this;
        return o.className
          .split(" ")
          .filter(
            (d) =>
              d.indexOf("swiper-slide") === 0 ||
              d.indexOf(l.params.slideClass) === 0
          )
          .join(" ");
      }
      emitSlidesClasses() {
        const o = this;
        if (!o.params._emitClasses || !o.el) return;
        const l = [];
        o.slides.each((d) => {
          const u = o.getSlideClasses(d);
          l.push({ slideEl: d, classNames: u }), o.emit("_slideClass", d, u);
        }),
          o.emit("_slideClasses", l);
      }
      slidesPerViewDynamic(o = "current", l = !1) {
        const {
          params: d,
          slides: u,
          slidesGrid: c,
          slidesSizesGrid: v,
          size: y,
          activeIndex: g,
        } = this;
        let T = 1;
        if (d.centeredSlides) {
          let h,
            m = u[g].swiperSlideSize;
          for (let S = g + 1; S < u.length; S += 1)
            u[S] &&
              !h &&
              ((m += u[S].swiperSlideSize), (T += 1), m > y && (h = !0));
          for (let S = g - 1; S >= 0; S -= 1)
            u[S] &&
              !h &&
              ((m += u[S].swiperSlideSize), (T += 1), m > y && (h = !0));
        } else if (o === "current")
          for (let h = g + 1; h < u.length; h += 1)
            (l ? c[h] + v[h] - c[g] < y : c[h] - c[g] < y) && (T += 1);
        else for (let h = g - 1; h >= 0; h -= 1) c[g] - c[h] < y && (T += 1);
        return T;
      }
      update() {
        const o = this;
        if (!o || o.destroyed) return;
        const { snapGrid: l, params: d } = o;
        function u() {
          const v = o.rtlTranslate ? -1 * o.translate : o.translate,
            y = Math.min(Math.max(v, o.maxTranslate()), o.minTranslate());
          o.setTranslate(y), o.updateActiveIndex(), o.updateSlidesClasses();
        }
        let c;
        d.breakpoints && o.setBreakpoint(),
          o.updateSize(),
          o.updateSlides(),
          o.updateProgress(),
          o.updateSlidesClasses(),
          o.params.freeMode && o.params.freeMode.enabled
            ? (u(), o.params.autoHeight && o.updateAutoHeight())
            : ((c =
                (o.params.slidesPerView === "auto" ||
                  o.params.slidesPerView > 1) &&
                o.isEnd &&
                !o.params.centeredSlides
                  ? o.slideTo(o.slides.length - 1, 0, !1, !0)
                  : o.slideTo(o.activeIndex, 0, !1, !0)),
              c || u()),
          d.watchOverflow && l !== o.snapGrid && o.checkOverflow(),
          o.emit("update");
      }
      changeDirection(o, l = !0) {
        const d = this,
          u = d.params.direction;
        return (
          o || (o = u === "horizontal" ? "vertical" : "horizontal"),
          o === u ||
            (o !== "horizontal" && o !== "vertical") ||
            (d.$el
              .removeClass(`${d.params.containerModifierClass}${u}`)
              .addClass(`${d.params.containerModifierClass}${o}`),
            d.emitContainerClasses(),
            (d.params.direction = o),
            d.slides.each((c) => {
              o === "vertical" ? (c.style.width = "") : (c.style.height = "");
            }),
            d.emit("changeDirection"),
            l && d.update()),
          d
        );
      }
      mount(o) {
        const l = this;
        if (l.mounted) return !0;
        const d = f(o || l.params.el);
        if (!(o = d[0])) return !1;
        o.swiper = l;
        const u = () =>
          `.${(l.params.wrapperClass || "").trim().split(" ").join(".")}`;
        let c = (() => {
          if (o && o.shadowRoot && o.shadowRoot.querySelector) {
            const v = f(o.shadowRoot.querySelector(u()));
            return (v.children = (y) => d.children(y)), v;
          }
          return d.children(u());
        })();
        if (c.length === 0 && l.params.createElements) {
          const v = n().createElement("div");
          (c = f(v)),
            (v.className = l.params.wrapperClass),
            d.append(v),
            d.children(`.${l.params.slideClass}`).each((y) => {
              c.append(y);
            });
        }
        return (
          Object.assign(l, {
            $el: d,
            el: o,
            $wrapperEl: c,
            wrapperEl: c[0],
            mounted: !0,
            rtl: o.dir.toLowerCase() === "rtl" || d.css("direction") === "rtl",
            rtlTranslate:
              l.params.direction === "horizontal" &&
              (o.dir.toLowerCase() === "rtl" || d.css("direction") === "rtl"),
            wrongRTL: c.css("display") === "-webkit-box",
          }),
          !0
        );
      }
      init(o) {
        const l = this;
        return (
          l.initialized ||
            l.mount(o) === !1 ||
            (l.emit("beforeInit"),
            l.params.breakpoints && l.setBreakpoint(),
            l.addClasses(),
            l.params.loop && l.loopCreate(),
            l.updateSize(),
            l.updateSlides(),
            l.params.watchOverflow && l.checkOverflow(),
            l.params.grabCursor && l.enabled && l.setGrabCursor(),
            l.params.preloadImages && l.preloadImages(),
            l.params.loop
              ? l.slideTo(
                  l.params.initialSlide + l.loopedSlides,
                  0,
                  l.params.runCallbacksOnInit,
                  !1,
                  !0
                )
              : l.slideTo(
                  l.params.initialSlide,
                  0,
                  l.params.runCallbacksOnInit,
                  !1,
                  !0
                ),
            l.attachEvents(),
            (l.initialized = !0),
            l.emit("init"),
            l.emit("afterInit")),
          l
        );
      }
      destroy(o = !0, l = !0) {
        const d = this,
          { params: u, $el: c, $wrapperEl: v, slides: y } = d;
        return (
          d.params === void 0 ||
            d.destroyed ||
            (d.emit("beforeDestroy"),
            (d.initialized = !1),
            d.detachEvents(),
            u.loop && d.loopDestroy(),
            l &&
              (d.removeClasses(),
              c.removeAttr("style"),
              v.removeAttr("style"),
              y &&
                y.length &&
                y
                  .removeClass(
                    [
                      u.slideVisibleClass,
                      u.slideActiveClass,
                      u.slideNextClass,
                      u.slidePrevClass,
                    ].join(" ")
                  )
                  .removeAttr("style")
                  .removeAttr("data-swiper-slide-index")),
            d.emit("destroy"),
            Object.keys(d.eventsListeners).forEach((g) => {
              d.off(g);
            }),
            o !== !1 &&
              ((d.$el[0].swiper = null),
              (function (g) {
                const T = g;
                Object.keys(T).forEach((h) => {
                  try {
                    T[h] = null;
                  } catch {}
                  try {
                    delete T[h];
                  } catch {}
                });
              })(d)),
            (d.destroyed = !0)),
          null
        );
      }
      static extendDefaults(o) {
        L(qt, o);
      }
      static get extendedDefaults() {
        return qt;
      }
      static get defaults() {
        return it;
      }
      static installModule(o) {
        Le.prototype.__modules__ || (Le.prototype.__modules__ = []);
        const l = Le.prototype.__modules__;
        typeof o == "function" && l.indexOf(o) < 0 && l.push(o);
      }
      static use(o) {
        return Array.isArray(o)
          ? (o.forEach((l) => Le.installModule(l)), Le)
          : (Le.installModule(o), Le);
      }
    }
    function Ht(t, o, l, d) {
      const u = n();
      return (
        t.params.createElements &&
          Object.keys(d).forEach((c) => {
            if (!l[c] && l.auto === !0) {
              let v = t.$el.children(`.${d[c]}`)[0];
              v ||
                ((v = u.createElement("div")),
                (v.className = d[c]),
                t.$el.append(v)),
                (l[c] = v),
                (o[c] = v);
            }
          }),
        l
      );
    }
    function Ne(t = "") {
      return `.${t
        .trim()
        .replace(/([\.:!\/])/g, "\\$1")
        .replace(/ /g, ".")}`;
    }
    function ui(t) {
      const o = this,
        { $wrapperEl: l, params: d } = o;
      if ((d.loop && o.loopDestroy(), typeof t == "object" && "length" in t))
        for (let u = 0; u < t.length; u += 1) t[u] && l.append(t[u]);
      else l.append(t);
      d.loop && o.loopCreate(), d.observer || o.update();
    }
    function pi(t) {
      const o = this,
        { params: l, $wrapperEl: d, activeIndex: u } = o;
      l.loop && o.loopDestroy();
      let c = u + 1;
      if (typeof t == "object" && "length" in t) {
        for (let v = 0; v < t.length; v += 1) t[v] && d.prepend(t[v]);
        c = u + t.length;
      } else d.prepend(t);
      l.loop && o.loopCreate(), l.observer || o.update(), o.slideTo(c, 0, !1);
    }
    function hi(t, o) {
      const l = this,
        { $wrapperEl: d, params: u, activeIndex: c } = l;
      let v = c;
      u.loop &&
        ((v -= l.loopedSlides),
        l.loopDestroy(),
        (l.slides = d.children(`.${u.slideClass}`)));
      const y = l.slides.length;
      if (t <= 0) return void l.prependSlide(o);
      if (t >= y) return void l.appendSlide(o);
      let g = v > t ? v + 1 : v;
      const T = [];
      for (let h = y - 1; h >= t; h -= 1) {
        const m = l.slides.eq(h);
        m.remove(), T.unshift(m);
      }
      if (typeof o == "object" && "length" in o) {
        for (let h = 0; h < o.length; h += 1) o[h] && d.append(o[h]);
        g = v > t ? v + o.length : v;
      } else d.append(o);
      for (let h = 0; h < T.length; h += 1) d.append(T[h]);
      u.loop && l.loopCreate(),
        u.observer || l.update(),
        u.loop ? l.slideTo(g + l.loopedSlides, 0, !1) : l.slideTo(g, 0, !1);
    }
    function mi(t) {
      const o = this,
        { params: l, $wrapperEl: d, activeIndex: u } = o;
      let c = u;
      l.loop &&
        ((c -= o.loopedSlides),
        o.loopDestroy(),
        (o.slides = d.children(`.${l.slideClass}`)));
      let v,
        y = c;
      if (typeof t == "object" && "length" in t) {
        for (let g = 0; g < t.length; g += 1)
          (v = t[g]), o.slides[v] && o.slides.eq(v).remove(), v < y && (y -= 1);
        y = Math.max(y, 0);
      } else (v = t), o.slides[v] && o.slides.eq(v).remove(), v < y && (y -= 1), (y = Math.max(y, 0));
      l.loop && o.loopCreate(),
        l.observer || o.update(),
        l.loop ? o.slideTo(y + o.loopedSlides, 0, !1) : o.slideTo(y, 0, !1);
    }
    function fi() {
      const t = this,
        o = [];
      for (let l = 0; l < t.slides.length; l += 1) o.push(l);
      t.removeSlide(o);
    }
    function Ue(t) {
      const {
        effect: o,
        swiper: l,
        on: d,
        setTranslate: u,
        setTransition: c,
        overwriteParams: v,
        perspective: y,
      } = t;
      d("beforeInit", () => {
        if (l.params.effect !== o) return;
        l.classNames.push(`${l.params.containerModifierClass}${o}`),
          y && y() && l.classNames.push(`${l.params.containerModifierClass}3d`);
        const g = v ? v() : {};
        Object.assign(l.params, g), Object.assign(l.originalParams, g);
      }),
        d("setTranslate", () => {
          l.params.effect === o && u();
        }),
        d("setTransition", (g, T) => {
          l.params.effect === o && c(T);
        });
    }
    function at(t, o) {
      return t.transformEl
        ? o.find(t.transformEl).css({
            "backface-visibility": "hidden",
            "-webkit-backface-visibility": "hidden",
          })
        : o;
    }
    function wt({ swiper: t, duration: o, transformEl: l, allSlides: d }) {
      const { slides: u, activeIndex: c, $wrapperEl: v } = t;
      if (t.params.virtualTranslate && o !== 0) {
        let y,
          g = !1;
        (y = d ? (l ? u.find(l) : u) : l ? u.eq(c).find(l) : u.eq(c)),
          y.transitionEnd(() => {
            if (g || !t || t.destroyed) return;
            (g = !0), (t.animating = !1);
            const T = ["webkitTransitionEnd", "transitionend"];
            for (let h = 0; h < T.length; h += 1) v.trigger(T[h]);
          });
      }
    }
    function Ke(t, o, l) {
      const d = "swiper-slide-shadow" + (l ? `-${l}` : ""),
        u = t.transformEl ? o.find(t.transformEl) : o;
      let c = u.children(`.${d}`);
      return (
        c.length ||
          ((c = f(
            `<div class="swiper-slide-shadow${l ? `-${l}` : ""}"></div>`
          )),
          u.append(c)),
        c
      );
    }
    Object.keys(nt).forEach((t) => {
      Object.keys(nt[t]).forEach((o) => {
        Le.prototype[o] = nt[t][o];
      });
    }),
      Le.use([
        function ({ swiper: t, on: o, emit: l }) {
          const d = r();
          let u = null;
          const c = () => {
              t &&
                !t.destroyed &&
                t.initialized &&
                (l("beforeResize"), l("resize"));
            },
            v = () => {
              t && !t.destroyed && t.initialized && l("orientationchange");
            };
          o("init", () => {
            t.params.resizeObserver && d.ResizeObserver !== void 0
              ? t &&
                !t.destroyed &&
                t.initialized &&
                ((u = new ResizeObserver((y) => {
                  const { width: g, height: T } = t;
                  let h = g,
                    m = T;
                  y.forEach(
                    ({ contentBoxSize: S, contentRect: E, target: x }) => {
                      (x && x !== t.el) ||
                        ((h = E ? E.width : (S[0] || S).inlineSize),
                        (m = E ? E.height : (S[0] || S).blockSize));
                    }
                  ),
                    (h === g && m === T) || c();
                })),
                u.observe(t.el))
              : (d.addEventListener("resize", c),
                d.addEventListener("orientationchange", v));
          }),
            o("destroy", () => {
              u && u.unobserve && t.el && (u.unobserve(t.el), (u = null)),
                d.removeEventListener("resize", c),
                d.removeEventListener("orientationchange", v);
            });
        },
        function ({ swiper: t, extendParams: o, on: l, emit: d }) {
          const u = [],
            c = r(),
            v = (y, g = {}) => {
              const T = new (c.MutationObserver || c.WebkitMutationObserver)(
                (h) => {
                  if (h.length === 1) return void d("observerUpdate", h[0]);
                  const m = function () {
                    d("observerUpdate", h[0]);
                  };
                  c.requestAnimationFrame
                    ? c.requestAnimationFrame(m)
                    : c.setTimeout(m, 0);
                }
              );
              T.observe(y, {
                attributes: g.attributes === void 0 || g.attributes,
                childList: g.childList === void 0 || g.childList,
                characterData: g.characterData === void 0 || g.characterData,
              }),
                u.push(T);
            };
          o({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
            l("init", () => {
              if (t.params.observer) {
                if (t.params.observeParents) {
                  const y = t.$el.parents();
                  for (let g = 0; g < y.length; g += 1) v(y[g]);
                }
                v(t.$el[0], { childList: t.params.observeSlideChildren }),
                  v(t.$wrapperEl[0], { attributes: !1 });
              }
            }),
            l("destroy", () => {
              u.forEach((y) => {
                y.disconnect();
              }),
                u.splice(0, u.length);
            });
        },
      ]);
    const gi = [
      function ({ swiper: t, extendParams: o, on: l }) {
        function d(c, v) {
          const y = t.params.virtual;
          if (y.cache && t.virtual.cache[v]) return t.virtual.cache[v];
          const g = y.renderSlide
            ? f(y.renderSlide.call(t, c, v))
            : f(
                `<div class="${t.params.slideClass}" data-swiper-slide-index="${v}">${c}</div>`
              );
          return (
            g.attr("data-swiper-slide-index") ||
              g.attr("data-swiper-slide-index", v),
            y.cache && (t.virtual.cache[v] = g),
            g
          );
        }
        function u(c) {
          const {
              slidesPerView: v,
              slidesPerGroup: y,
              centeredSlides: g,
            } = t.params,
            { addSlidesBefore: T, addSlidesAfter: h } = t.params.virtual,
            { from: m, to: S, slides: E, slidesGrid: x, offset: k } = t.virtual;
          t.updateActiveIndex();
          const D = t.activeIndex || 0;
          let P, _, N;
          (P = t.rtlTranslate ? "right" : t.isHorizontal() ? "left" : "top"),
            g
              ? ((_ = Math.floor(v / 2) + y + h),
                (N = Math.floor(v / 2) + y + T))
              : ((_ = v + (y - 1) + h), (N = y + T));
          const F = Math.max((D || 0) - N, 0),
            Y = Math.min((D || 0) + _, E.length - 1),
            j = (t.slidesGrid[F] || 0) - (t.slidesGrid[0] || 0);
          function W() {
            t.updateSlides(),
              t.updateProgress(),
              t.updateSlidesClasses(),
              t.lazy && t.params.lazy.enabled && t.lazy.load();
          }
          if (
            (Object.assign(t.virtual, {
              from: F,
              to: Y,
              offset: j,
              slidesGrid: t.slidesGrid,
            }),
            m === F && S === Y && !c)
          )
            return (
              t.slidesGrid !== x && j !== k && t.slides.css(P, `${j}px`),
              void t.updateProgress()
            );
          if (t.params.virtual.renderExternal)
            return (
              t.params.virtual.renderExternal.call(t, {
                offset: j,
                from: F,
                to: Y,
                slides: (function () {
                  const q = [];
                  for (let G = F; G <= Y; G += 1) q.push(E[G]);
                  return q;
                })(),
              }),
              void (t.params.virtual.renderExternalUpdate && W())
            );
          const X = [],
            V = [];
          if (c) t.$wrapperEl.find(`.${t.params.slideClass}`).remove();
          else
            for (let q = m; q <= S; q += 1)
              (q < F || q > Y) &&
                t.$wrapperEl
                  .find(
                    `.${t.params.slideClass}[data-swiper-slide-index="${q}"]`
                  )
                  .remove();
          for (let q = 0; q < E.length; q += 1)
            q >= F &&
              q <= Y &&
              (S === void 0 || c
                ? V.push(q)
                : (q > S && V.push(q), q < m && X.push(q)));
          V.forEach((q) => {
            t.$wrapperEl.append(d(E[q], q));
          }),
            X.sort((q, G) => G - q).forEach((q) => {
              t.$wrapperEl.prepend(d(E[q], q));
            }),
            t.$wrapperEl.children(".swiper-slide").css(P, `${j}px`),
            W();
        }
        o({
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
          (t.virtual = {
            cache: {},
            from: void 0,
            to: void 0,
            slides: [],
            offset: 0,
            slidesGrid: [],
          }),
          l("beforeInit", () => {
            t.params.virtual.enabled &&
              ((t.virtual.slides = t.params.virtual.slides),
              t.classNames.push(`${t.params.containerModifierClass}virtual`),
              (t.params.watchSlidesProgress = !0),
              (t.originalParams.watchSlidesProgress = !0),
              t.params.initialSlide || u());
          }),
          l("setTranslate", () => {
            t.params.virtual.enabled && u();
          }),
          l("init update resize", () => {
            t.params.virtual.enabled &&
              t.params.cssMode &&
              I(t.wrapperEl, "--swiper-virtual-size", `${t.virtualSize}px`);
          }),
          Object.assign(t.virtual, {
            appendSlide: function (c) {
              if (typeof c == "object" && "length" in c)
                for (let v = 0; v < c.length; v += 1)
                  c[v] && t.virtual.slides.push(c[v]);
              else t.virtual.slides.push(c);
              u(!0);
            },
            prependSlide: function (c) {
              const v = t.activeIndex;
              let y = v + 1,
                g = 1;
              if (Array.isArray(c)) {
                for (let T = 0; T < c.length; T += 1)
                  c[T] && t.virtual.slides.unshift(c[T]);
                (y = v + c.length), (g = c.length);
              } else t.virtual.slides.unshift(c);
              if (t.params.virtual.cache) {
                const T = t.virtual.cache,
                  h = {};
                Object.keys(T).forEach((m) => {
                  const S = T[m],
                    E = S.attr("data-swiper-slide-index");
                  E && S.attr("data-swiper-slide-index", parseInt(E, 10) + 1),
                    (h[parseInt(m, 10) + g] = S);
                }),
                  (t.virtual.cache = h);
              }
              u(!0), t.slideTo(y, 0);
            },
            removeSlide: function (c) {
              if (c == null) return;
              let v = t.activeIndex;
              if (Array.isArray(c))
                for (let y = c.length - 1; y >= 0; y -= 1)
                  t.virtual.slides.splice(c[y], 1),
                    t.params.virtual.cache && delete t.virtual.cache[c[y]],
                    c[y] < v && (v -= 1),
                    (v = Math.max(v, 0));
              else
                t.virtual.slides.splice(c, 1),
                  t.params.virtual.cache && delete t.virtual.cache[c],
                  c < v && (v -= 1),
                  (v = Math.max(v, 0));
              u(!0), t.slideTo(v, 0);
            },
            removeAllSlides: function () {
              (t.virtual.slides = []),
                t.params.virtual.cache && (t.virtual.cache = {}),
                u(!0),
                t.slideTo(0, 0);
            },
            update: u,
          });
      },
      function ({ swiper: t, extendParams: o, on: l, emit: d }) {
        const u = n(),
          c = r();
        function v(T) {
          if (!t.enabled) return;
          const { rtlTranslate: h } = t;
          let m = T;
          m.originalEvent && (m = m.originalEvent);
          const S = m.keyCode || m.charCode,
            E = t.params.keyboard.pageUpDown,
            x = E && S === 33,
            k = E && S === 34,
            D = S === 37,
            P = S === 39,
            _ = S === 38,
            N = S === 40;
          if (
            (!t.allowSlideNext &&
              ((t.isHorizontal() && P) || (t.isVertical() && N) || k)) ||
            (!t.allowSlidePrev &&
              ((t.isHorizontal() && D) || (t.isVertical() && _) || x))
          )
            return !1;
          if (
            !(
              m.shiftKey ||
              m.altKey ||
              m.ctrlKey ||
              m.metaKey ||
              (u.activeElement &&
                u.activeElement.nodeName &&
                (u.activeElement.nodeName.toLowerCase() === "input" ||
                  u.activeElement.nodeName.toLowerCase() === "textarea"))
            )
          ) {
            if (
              t.params.keyboard.onlyInViewport &&
              (x || k || D || P || _ || N)
            ) {
              let F = !1;
              if (
                t.$el.parents(`.${t.params.slideClass}`).length > 0 &&
                t.$el.parents(`.${t.params.slideActiveClass}`).length === 0
              )
                return;
              const Y = t.$el,
                j = Y[0].clientWidth,
                W = Y[0].clientHeight,
                X = c.innerWidth,
                V = c.innerHeight,
                q = t.$el.offset();
              h && (q.left -= t.$el[0].scrollLeft);
              const G = [
                [q.left, q.top],
                [q.left + j, q.top],
                [q.left, q.top + W],
                [q.left + j, q.top + W],
              ];
              for (let Z = 0; Z < G.length; Z += 1) {
                const ae = G[Z];
                if (ae[0] >= 0 && ae[0] <= X && ae[1] >= 0 && ae[1] <= V) {
                  if (ae[0] === 0 && ae[1] === 0) continue;
                  F = !0;
                }
              }
              if (!F) return;
            }
            t.isHorizontal()
              ? ((x || k || D || P) &&
                  (m.preventDefault
                    ? m.preventDefault()
                    : (m.returnValue = !1)),
                (((k || P) && !h) || ((x || D) && h)) && t.slideNext(),
                (((x || D) && !h) || ((k || P) && h)) && t.slidePrev())
              : ((x || k || _ || N) &&
                  (m.preventDefault
                    ? m.preventDefault()
                    : (m.returnValue = !1)),
                (k || N) && t.slideNext(),
                (x || _) && t.slidePrev()),
              d("keyPress", S);
          }
        }
        function y() {
          t.keyboard.enabled ||
            (f(u).on("keydown", v), (t.keyboard.enabled = !0));
        }
        function g() {
          t.keyboard.enabled &&
            (f(u).off("keydown", v), (t.keyboard.enabled = !1));
        }
        (t.keyboard = { enabled: !1 }),
          o({ keyboard: { enabled: !1, onlyInViewport: !0, pageUpDown: !0 } }),
          l("init", () => {
            t.params.keyboard.enabled && y();
          }),
          l("destroy", () => {
            t.keyboard.enabled && g();
          }),
          Object.assign(t.keyboard, { enable: y, disable: g });
      },
      function ({ swiper: t, extendParams: o, on: l, emit: d }) {
        const u = r();
        let c;
        o({
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
        let v,
          y = M();
        const g = [];
        function T() {
          t.enabled && (t.mouseEntered = !0);
        }
        function h() {
          t.enabled && (t.mouseEntered = !1);
        }
        function m(D) {
          return (
            !(
              t.params.mousewheel.thresholdDelta &&
              D.delta < t.params.mousewheel.thresholdDelta
            ) &&
            !(
              t.params.mousewheel.thresholdTime &&
              M() - y < t.params.mousewheel.thresholdTime
            ) &&
            ((D.delta >= 6 && M() - y < 60) ||
              (D.direction < 0
                ? (t.isEnd && !t.params.loop) ||
                  t.animating ||
                  (t.slideNext(), d("scroll", D.raw))
                : (t.isBeginning && !t.params.loop) ||
                  t.animating ||
                  (t.slidePrev(), d("scroll", D.raw)),
              (y = new u.Date().getTime()),
              !1))
          );
        }
        function S(D) {
          let P = D,
            _ = !0;
          if (!t.enabled) return;
          const N = t.params.mousewheel;
          t.params.cssMode && P.preventDefault();
          let F = t.$el;
          if (
            (t.params.mousewheel.eventsTarget !== "container" &&
              (F = f(t.params.mousewheel.eventsTarget)),
            !t.mouseEntered && !F[0].contains(P.target) && !N.releaseOnEdges)
          )
            return !0;
          P.originalEvent && (P = P.originalEvent);
          let Y = 0;
          const j = t.rtlTranslate ? -1 : 1,
            W = (function (V) {
              let q = 0,
                G = 0,
                Z = 0,
                ae = 0;
              return (
                "detail" in V && (G = V.detail),
                "wheelDelta" in V && (G = -V.wheelDelta / 120),
                "wheelDeltaY" in V && (G = -V.wheelDeltaY / 120),
                "wheelDeltaX" in V && (q = -V.wheelDeltaX / 120),
                "axis" in V &&
                  V.axis === V.HORIZONTAL_AXIS &&
                  ((q = G), (G = 0)),
                (Z = 10 * q),
                (ae = 10 * G),
                "deltaY" in V && (ae = V.deltaY),
                "deltaX" in V && (Z = V.deltaX),
                V.shiftKey && !Z && ((Z = ae), (ae = 0)),
                (Z || ae) &&
                  V.deltaMode &&
                  (V.deltaMode === 1
                    ? ((Z *= 40), (ae *= 40))
                    : ((Z *= 800), (ae *= 800))),
                Z && !q && (q = Z < 1 ? -1 : 1),
                ae && !G && (G = ae < 1 ? -1 : 1),
                { spinX: q, spinY: G, pixelX: Z, pixelY: ae }
              );
            })(P);
          if (N.forceToAxis)
            if (t.isHorizontal()) {
              if (!(Math.abs(W.pixelX) > Math.abs(W.pixelY))) return !0;
              Y = -W.pixelX * j;
            } else {
              if (!(Math.abs(W.pixelY) > Math.abs(W.pixelX))) return !0;
              Y = -W.pixelY;
            }
          else
            Y =
              Math.abs(W.pixelX) > Math.abs(W.pixelY)
                ? -W.pixelX * j
                : -W.pixelY;
          if (Y === 0) return !0;
          N.invert && (Y = -Y);
          let X = t.getTranslate() + Y * N.sensitivity;
          if (
            (X >= t.minTranslate() && (X = t.minTranslate()),
            X <= t.maxTranslate() && (X = t.maxTranslate()),
            (_ =
              !!t.params.loop ||
              !(X === t.minTranslate() || X === t.maxTranslate())),
            _ && t.params.nested && P.stopPropagation(),
            t.params.freeMode && t.params.freeMode.enabled)
          ) {
            const V = {
                time: M(),
                delta: Math.abs(Y),
                direction: Math.sign(Y),
              },
              q =
                v &&
                V.time < v.time + 500 &&
                V.delta <= v.delta &&
                V.direction === v.direction;
            if (!q) {
              (v = void 0), t.params.loop && t.loopFix();
              let G = t.getTranslate() + Y * N.sensitivity;
              const Z = t.isBeginning,
                ae = t.isEnd;
              if (
                (G >= t.minTranslate() && (G = t.minTranslate()),
                G <= t.maxTranslate() && (G = t.maxTranslate()),
                t.setTransition(0),
                t.setTranslate(G),
                t.updateProgress(),
                t.updateActiveIndex(),
                t.updateSlidesClasses(),
                ((!Z && t.isBeginning) || (!ae && t.isEnd)) &&
                  t.updateSlidesClasses(),
                t.params.freeMode.sticky)
              ) {
                clearTimeout(c), (c = void 0), g.length >= 15 && g.shift();
                const U = g.length ? g[g.length - 1] : void 0,
                  ie = g[0];
                if (
                  (g.push(V),
                  U && (V.delta > U.delta || V.direction !== U.direction))
                )
                  g.splice(0);
                else if (
                  g.length >= 15 &&
                  V.time - ie.time < 500 &&
                  ie.delta - V.delta >= 1 &&
                  V.delta <= 6
                ) {
                  const se = Y > 0 ? 0.8 : 0.2;
                  (v = V),
                    g.splice(0),
                    (c = A(() => {
                      t.slideToClosest(t.params.speed, !0, void 0, se);
                    }, 0));
                }
                c ||
                  (c = A(() => {
                    (v = V),
                      g.splice(0),
                      t.slideToClosest(t.params.speed, !0, void 0, 0.5);
                  }, 500));
              }
              if (
                (q || d("scroll", P),
                t.params.autoplay &&
                  t.params.autoplayDisableOnInteraction &&
                  t.autoplay.stop(),
                G === t.minTranslate() || G === t.maxTranslate())
              )
                return !0;
            }
          } else {
            const V = {
              time: M(),
              delta: Math.abs(Y),
              direction: Math.sign(Y),
              raw: D,
            };
            g.length >= 2 && g.shift();
            const q = g.length ? g[g.length - 1] : void 0;
            if (
              (g.push(V),
              q
                ? (V.direction !== q.direction ||
                    V.delta > q.delta ||
                    V.time > q.time + 150) &&
                  m(V)
                : m(V),
              (function (G) {
                const Z = t.params.mousewheel;
                if (G.direction < 0) {
                  if (t.isEnd && !t.params.loop && Z.releaseOnEdges) return !0;
                } else if (t.isBeginning && !t.params.loop && Z.releaseOnEdges)
                  return !0;
                return !1;
              })(V))
            )
              return !0;
          }
          return (
            P.preventDefault ? P.preventDefault() : (P.returnValue = !1), !1
          );
        }
        function E(D) {
          let P = t.$el;
          t.params.mousewheel.eventsTarget !== "container" &&
            (P = f(t.params.mousewheel.eventsTarget)),
            P[D]("mouseenter", T),
            P[D]("mouseleave", h),
            P[D]("wheel", S);
        }
        function x() {
          return t.params.cssMode
            ? (t.wrapperEl.removeEventListener("wheel", S), !0)
            : !t.mousewheel.enabled &&
                (E("on"), (t.mousewheel.enabled = !0), !0);
        }
        function k() {
          return t.params.cssMode
            ? (t.wrapperEl.addEventListener(event, S), !0)
            : !!t.mousewheel.enabled &&
                (E("off"), (t.mousewheel.enabled = !1), !0);
        }
        l("init", () => {
          !t.params.mousewheel.enabled && t.params.cssMode && k(),
            t.params.mousewheel.enabled && x();
        }),
          l("destroy", () => {
            t.params.cssMode && x(), t.mousewheel.enabled && k();
          }),
          Object.assign(t.mousewheel, { enable: x, disable: k });
      },
      function ({ swiper: t, extendParams: o, on: l, emit: d }) {
        function u(m) {
          let S;
          return (
            m &&
              ((S = f(m)),
              t.params.uniqueNavElements &&
                typeof m == "string" &&
                S.length > 1 &&
                t.$el.find(m).length === 1 &&
                (S = t.$el.find(m))),
            S
          );
        }
        function c(m, S) {
          const E = t.params.navigation;
          m &&
            m.length > 0 &&
            (m[S ? "addClass" : "removeClass"](E.disabledClass),
            m[0] && m[0].tagName === "BUTTON" && (m[0].disabled = S),
            t.params.watchOverflow &&
              t.enabled &&
              m[t.isLocked ? "addClass" : "removeClass"](E.lockClass));
        }
        function v() {
          if (t.params.loop) return;
          const { $nextEl: m, $prevEl: S } = t.navigation;
          c(S, t.isBeginning), c(m, t.isEnd);
        }
        function y(m) {
          m.preventDefault(),
            (t.isBeginning && !t.params.loop) || t.slidePrev();
        }
        function g(m) {
          m.preventDefault(), (t.isEnd && !t.params.loop) || t.slideNext();
        }
        function T() {
          const m = t.params.navigation;
          if (
            ((t.params.navigation = Ht(
              t,
              t.originalParams.navigation,
              t.params.navigation,
              { nextEl: "swiper-button-next", prevEl: "swiper-button-prev" }
            )),
            !m.nextEl && !m.prevEl)
          )
            return;
          const S = u(m.nextEl),
            E = u(m.prevEl);
          S && S.length > 0 && S.on("click", g),
            E && E.length > 0 && E.on("click", y),
            Object.assign(t.navigation, {
              $nextEl: S,
              nextEl: S && S[0],
              $prevEl: E,
              prevEl: E && E[0],
            }),
            t.enabled ||
              (S && S.addClass(m.lockClass), E && E.addClass(m.lockClass));
        }
        function h() {
          const { $nextEl: m, $prevEl: S } = t.navigation;
          m &&
            m.length &&
            (m.off("click", g),
            m.removeClass(t.params.navigation.disabledClass)),
            S &&
              S.length &&
              (S.off("click", y),
              S.removeClass(t.params.navigation.disabledClass));
        }
        o({
          navigation: {
            nextEl: null,
            prevEl: null,
            hideOnClick: !1,
            disabledClass: "swiper-button-disabled",
            hiddenClass: "swiper-button-hidden",
            lockClass: "swiper-button-lock",
          },
        }),
          (t.navigation = {
            nextEl: null,
            $nextEl: null,
            prevEl: null,
            $prevEl: null,
          }),
          l("init", () => {
            T(), v();
          }),
          l("toEdge fromEdge lock unlock", () => {
            v();
          }),
          l("destroy", () => {
            h();
          }),
          l("enable disable", () => {
            const { $nextEl: m, $prevEl: S } = t.navigation;
            m &&
              m[t.enabled ? "removeClass" : "addClass"](
                t.params.navigation.lockClass
              ),
              S &&
                S[t.enabled ? "removeClass" : "addClass"](
                  t.params.navigation.lockClass
                );
          }),
          l("click", (m, S) => {
            const { $nextEl: E, $prevEl: x } = t.navigation,
              k = S.target;
            if (t.params.navigation.hideOnClick && !f(k).is(x) && !f(k).is(E)) {
              if (
                t.pagination &&
                t.params.pagination &&
                t.params.pagination.clickable &&
                (t.pagination.el === k || t.pagination.el.contains(k))
              )
                return;
              let D;
              E
                ? (D = E.hasClass(t.params.navigation.hiddenClass))
                : x && (D = x.hasClass(t.params.navigation.hiddenClass)),
                d(D === !0 ? "navigationShow" : "navigationHide"),
                E && E.toggleClass(t.params.navigation.hiddenClass),
                x && x.toggleClass(t.params.navigation.hiddenClass);
            }
          }),
          Object.assign(t.navigation, { update: v, init: T, destroy: h });
      },
      function ({ swiper: t, extendParams: o, on: l, emit: d }) {
        const u = "swiper-pagination";
        let c;
        o({
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
            formatFractionCurrent: (E) => E,
            formatFractionTotal: (E) => E,
            bulletClass: `${u}-bullet`,
            bulletActiveClass: `${u}-bullet-active`,
            modifierClass: `${u}-`,
            currentClass: `${u}-current`,
            totalClass: `${u}-total`,
            hiddenClass: `${u}-hidden`,
            progressbarFillClass: `${u}-progressbar-fill`,
            progressbarOppositeClass: `${u}-progressbar-opposite`,
            clickableClass: `${u}-clickable`,
            lockClass: `${u}-lock`,
            horizontalClass: `${u}-horizontal`,
            verticalClass: `${u}-vertical`,
          },
        }),
          (t.pagination = { el: null, $el: null, bullets: [] });
        let v = 0;
        function y() {
          return (
            !t.params.pagination.el ||
            !t.pagination.el ||
            !t.pagination.$el ||
            t.pagination.$el.length === 0
          );
        }
        function g(E, x) {
          const { bulletActiveClass: k } = t.params.pagination;
          E[x]().addClass(`${k}-${x}`)[x]().addClass(`${k}-${x}-${x}`);
        }
        function T() {
          const E = t.rtl,
            x = t.params.pagination;
          if (y()) return;
          const k =
              t.virtual && t.params.virtual.enabled
                ? t.virtual.slides.length
                : t.slides.length,
            D = t.pagination.$el;
          let P;
          const _ = t.params.loop
            ? Math.ceil((k - 2 * t.loopedSlides) / t.params.slidesPerGroup)
            : t.snapGrid.length;
          if (
            (t.params.loop
              ? ((P = Math.ceil(
                  (t.activeIndex - t.loopedSlides) / t.params.slidesPerGroup
                )),
                P > k - 1 - 2 * t.loopedSlides && (P -= k - 2 * t.loopedSlides),
                P > _ - 1 && (P -= _),
                P < 0 && t.params.paginationType !== "bullets" && (P = _ + P))
              : (P = t.snapIndex !== void 0 ? t.snapIndex : t.activeIndex || 0),
            x.type === "bullets" &&
              t.pagination.bullets &&
              t.pagination.bullets.length > 0)
          ) {
            const N = t.pagination.bullets;
            let F, Y, j;
            if (
              (x.dynamicBullets &&
                ((c = N.eq(0)[t.isHorizontal() ? "outerWidth" : "outerHeight"](
                  !0
                )),
                D.css(
                  t.isHorizontal() ? "width" : "height",
                  c * (x.dynamicMainBullets + 4) + "px"
                ),
                x.dynamicMainBullets > 1 &&
                  t.previousIndex !== void 0 &&
                  ((v += P - t.previousIndex),
                  v > x.dynamicMainBullets - 1
                    ? (v = x.dynamicMainBullets - 1)
                    : v < 0 && (v = 0)),
                (F = P - v),
                (Y = F + (Math.min(N.length, x.dynamicMainBullets) - 1)),
                (j = (Y + F) / 2)),
              N.removeClass(
                ["", "-next", "-next-next", "-prev", "-prev-prev", "-main"]
                  .map((W) => `${x.bulletActiveClass}${W}`)
                  .join(" ")
              ),
              D.length > 1)
            )
              N.each((W) => {
                const X = f(W),
                  V = X.index();
                V === P && X.addClass(x.bulletActiveClass),
                  x.dynamicBullets &&
                    (V >= F &&
                      V <= Y &&
                      X.addClass(`${x.bulletActiveClass}-main`),
                    V === F && g(X, "prev"),
                    V === Y && g(X, "next"));
              });
            else {
              const W = N.eq(P),
                X = W.index();
              if ((W.addClass(x.bulletActiveClass), x.dynamicBullets)) {
                const V = N.eq(F),
                  q = N.eq(Y);
                for (let G = F; G <= Y; G += 1)
                  N.eq(G).addClass(`${x.bulletActiveClass}-main`);
                if (t.params.loop)
                  if (X >= N.length - x.dynamicMainBullets) {
                    for (let G = x.dynamicMainBullets; G >= 0; G -= 1)
                      N.eq(N.length - G).addClass(
                        `${x.bulletActiveClass}-main`
                      );
                    N.eq(N.length - x.dynamicMainBullets - 1).addClass(
                      `${x.bulletActiveClass}-prev`
                    );
                  } else g(V, "prev"), g(q, "next");
                else g(V, "prev"), g(q, "next");
              }
            }
            if (x.dynamicBullets) {
              const W = Math.min(N.length, x.dynamicMainBullets + 4),
                X = (c * W - c) / 2 - j * c,
                V = E ? "right" : "left";
              N.css(t.isHorizontal() ? V : "top", `${X}px`);
            }
          }
          if (
            (x.type === "fraction" &&
              (D.find(Ne(x.currentClass)).text(x.formatFractionCurrent(P + 1)),
              D.find(Ne(x.totalClass)).text(x.formatFractionTotal(_))),
            x.type === "progressbar")
          ) {
            let N;
            N = x.progressbarOpposite
              ? t.isHorizontal()
                ? "vertical"
                : "horizontal"
              : t.isHorizontal()
              ? "horizontal"
              : "vertical";
            const F = (P + 1) / _;
            let Y = 1,
              j = 1;
            N === "horizontal" ? (Y = F) : (j = F),
              D.find(Ne(x.progressbarFillClass))
                .transform(`translate3d(0,0,0) scaleX(${Y}) scaleY(${j})`)
                .transition(t.params.speed);
          }
          x.type === "custom" && x.renderCustom
            ? (D.html(x.renderCustom(t, P + 1, _)), d("paginationRender", D[0]))
            : d("paginationUpdate", D[0]),
            t.params.watchOverflow &&
              t.enabled &&
              D[t.isLocked ? "addClass" : "removeClass"](x.lockClass);
        }
        function h() {
          const E = t.params.pagination;
          if (y()) return;
          const x =
              t.virtual && t.params.virtual.enabled
                ? t.virtual.slides.length
                : t.slides.length,
            k = t.pagination.$el;
          let D = "";
          if (E.type === "bullets") {
            let P = t.params.loop
              ? Math.ceil((x - 2 * t.loopedSlides) / t.params.slidesPerGroup)
              : t.snapGrid.length;
            t.params.freeMode &&
              t.params.freeMode.enabled &&
              !t.params.loop &&
              P > x &&
              (P = x);
            for (let _ = 0; _ < P; _ += 1)
              E.renderBullet
                ? (D += E.renderBullet.call(t, _, E.bulletClass))
                : (D += `<${E.bulletElement} class="${E.bulletClass}"></${E.bulletElement}>`);
            k.html(D), (t.pagination.bullets = k.find(Ne(E.bulletClass)));
          }
          E.type === "fraction" &&
            ((D = E.renderFraction
              ? E.renderFraction.call(t, E.currentClass, E.totalClass)
              : `<span class="${E.currentClass}"></span> / <span class="${E.totalClass}"></span>`),
            k.html(D)),
            E.type === "progressbar" &&
              ((D = E.renderProgressbar
                ? E.renderProgressbar.call(t, E.progressbarFillClass)
                : `<span class="${E.progressbarFillClass}"></span>`),
              k.html(D)),
            E.type !== "custom" && d("paginationRender", t.pagination.$el[0]);
        }
        function m() {
          t.params.pagination = Ht(
            t,
            t.originalParams.pagination,
            t.params.pagination,
            { el: "swiper-pagination" }
          );
          const E = t.params.pagination;
          if (!E.el) return;
          let x = f(E.el);
          x.length !== 0 &&
            (t.params.uniqueNavElements &&
              typeof E.el == "string" &&
              x.length > 1 &&
              ((x = t.$el.find(E.el)),
              x.length > 1 &&
                (x = x.filter((k) => f(k).parents(".swiper")[0] === t.el))),
            E.type === "bullets" && E.clickable && x.addClass(E.clickableClass),
            x.addClass(E.modifierClass + E.type),
            x.addClass(E.modifierClass + t.params.direction),
            E.type === "bullets" &&
              E.dynamicBullets &&
              (x.addClass(`${E.modifierClass}${E.type}-dynamic`),
              (v = 0),
              E.dynamicMainBullets < 1 && (E.dynamicMainBullets = 1)),
            E.type === "progressbar" &&
              E.progressbarOpposite &&
              x.addClass(E.progressbarOppositeClass),
            E.clickable &&
              x.on("click", Ne(E.bulletClass), function (k) {
                k.preventDefault();
                let D = f(this).index() * t.params.slidesPerGroup;
                t.params.loop && (D += t.loopedSlides), t.slideTo(D);
              }),
            Object.assign(t.pagination, { $el: x, el: x[0] }),
            t.enabled || x.addClass(E.lockClass));
        }
        function S() {
          const E = t.params.pagination;
          if (y()) return;
          const x = t.pagination.$el;
          x.removeClass(E.hiddenClass),
            x.removeClass(E.modifierClass + E.type),
            x.removeClass(E.modifierClass + t.params.direction),
            t.pagination.bullets &&
              t.pagination.bullets.removeClass &&
              t.pagination.bullets.removeClass(E.bulletActiveClass),
            E.clickable && x.off("click", Ne(E.bulletClass));
        }
        l("init", () => {
          m(), h(), T();
        }),
          l("activeIndexChange", () => {
            (t.params.loop || t.snapIndex === void 0) && T();
          }),
          l("snapIndexChange", () => {
            t.params.loop || T();
          }),
          l("slidesLengthChange", () => {
            t.params.loop && (h(), T());
          }),
          l("snapGridLengthChange", () => {
            t.params.loop || (h(), T());
          }),
          l("destroy", () => {
            S();
          }),
          l("enable disable", () => {
            const { $el: E } = t.pagination;
            E &&
              E[t.enabled ? "removeClass" : "addClass"](
                t.params.pagination.lockClass
              );
          }),
          l("lock unlock", () => {
            T();
          }),
          l("click", (E, x) => {
            const k = x.target,
              { $el: D } = t.pagination;
            if (
              t.params.pagination.el &&
              t.params.pagination.hideOnClick &&
              D.length > 0 &&
              !f(k).hasClass(t.params.pagination.bulletClass)
            ) {
              if (
                t.navigation &&
                ((t.navigation.nextEl && k === t.navigation.nextEl) ||
                  (t.navigation.prevEl && k === t.navigation.prevEl))
              )
                return;
              const P = D.hasClass(t.params.pagination.hiddenClass);
              d(P === !0 ? "paginationShow" : "paginationHide"),
                D.toggleClass(t.params.pagination.hiddenClass);
            }
          }),
          Object.assign(t.pagination, {
            render: h,
            update: T,
            init: m,
            destroy: S,
          });
      },
      function ({ swiper: t, extendParams: o, on: l, emit: d }) {
        const u = n();
        let c,
          v,
          y,
          g,
          T = !1,
          h = null,
          m = null;
        function S() {
          if (!t.params.scrollbar.el || !t.scrollbar.el) return;
          const { scrollbar: j, rtlTranslate: W, progress: X } = t,
            { $dragEl: V, $el: q } = j,
            G = t.params.scrollbar;
          let Z = v,
            ae = (y - v) * X;
          W
            ? ((ae = -ae),
              ae > 0 ? ((Z = v - ae), (ae = 0)) : -ae + v > y && (Z = y + ae))
            : ae < 0
            ? ((Z = v + ae), (ae = 0))
            : ae + v > y && (Z = y - ae),
            t.isHorizontal()
              ? (V.transform(`translate3d(${ae}px, 0, 0)`),
                (V[0].style.width = `${Z}px`))
              : (V.transform(`translate3d(0px, ${ae}px, 0)`),
                (V[0].style.height = `${Z}px`)),
            G.hide &&
              (clearTimeout(h),
              (q[0].style.opacity = 1),
              (h = setTimeout(() => {
                (q[0].style.opacity = 0), q.transition(400);
              }, 1e3)));
        }
        function E() {
          if (!t.params.scrollbar.el || !t.scrollbar.el) return;
          const { scrollbar: j } = t,
            { $dragEl: W, $el: X } = j;
          (W[0].style.width = ""),
            (W[0].style.height = ""),
            (y = t.isHorizontal() ? X[0].offsetWidth : X[0].offsetHeight),
            (g =
              t.size /
              (t.virtualSize +
                t.params.slidesOffsetBefore -
                (t.params.centeredSlides ? t.snapGrid[0] : 0))),
            (v =
              t.params.scrollbar.dragSize === "auto"
                ? y * g
                : parseInt(t.params.scrollbar.dragSize, 10)),
            t.isHorizontal()
              ? (W[0].style.width = `${v}px`)
              : (W[0].style.height = `${v}px`),
            (X[0].style.display = g >= 1 ? "none" : ""),
            t.params.scrollbar.hide && (X[0].style.opacity = 0),
            t.params.watchOverflow &&
              t.enabled &&
              j.$el[t.isLocked ? "addClass" : "removeClass"](
                t.params.scrollbar.lockClass
              );
        }
        function x(j) {
          return t.isHorizontal()
            ? j.type === "touchstart" || j.type === "touchmove"
              ? j.targetTouches[0].clientX
              : j.clientX
            : j.type === "touchstart" || j.type === "touchmove"
            ? j.targetTouches[0].clientY
            : j.clientY;
        }
        function k(j) {
          const { scrollbar: W, rtlTranslate: X } = t,
            { $el: V } = W;
          let q;
          (q =
            (x(j) -
              V.offset()[t.isHorizontal() ? "left" : "top"] -
              (c !== null ? c : v / 2)) /
            (y - v)),
            (q = Math.max(Math.min(q, 1), 0)),
            X && (q = 1 - q);
          const G =
            t.minTranslate() + (t.maxTranslate() - t.minTranslate()) * q;
          t.updateProgress(G),
            t.setTranslate(G),
            t.updateActiveIndex(),
            t.updateSlidesClasses();
        }
        function D(j) {
          const W = t.params.scrollbar,
            { scrollbar: X, $wrapperEl: V } = t,
            { $el: q, $dragEl: G } = X;
          (T = !0),
            (c =
              j.target === G[0] || j.target === G
                ? x(j) -
                  j.target.getBoundingClientRect()[
                    t.isHorizontal() ? "left" : "top"
                  ]
                : null),
            j.preventDefault(),
            j.stopPropagation(),
            V.transition(100),
            G.transition(100),
            k(j),
            clearTimeout(m),
            q.transition(0),
            W.hide && q.css("opacity", 1),
            t.params.cssMode && t.$wrapperEl.css("scroll-snap-type", "none"),
            d("scrollbarDragStart", j);
        }
        function P(j) {
          const { scrollbar: W, $wrapperEl: X } = t,
            { $el: V, $dragEl: q } = W;
          T &&
            (j.preventDefault ? j.preventDefault() : (j.returnValue = !1),
            k(j),
            X.transition(0),
            V.transition(0),
            q.transition(0),
            d("scrollbarDragMove", j));
        }
        function _(j) {
          const W = t.params.scrollbar,
            { scrollbar: X, $wrapperEl: V } = t,
            { $el: q } = X;
          T &&
            ((T = !1),
            t.params.cssMode &&
              (t.$wrapperEl.css("scroll-snap-type", ""), V.transition("")),
            W.hide &&
              (clearTimeout(m),
              (m = A(() => {
                q.css("opacity", 0), q.transition(400);
              }, 1e3))),
            d("scrollbarDragEnd", j),
            W.snapOnRelease && t.slideToClosest());
        }
        function N(j) {
          const {
              scrollbar: W,
              touchEventsTouch: X,
              touchEventsDesktop: V,
              params: q,
              support: G,
            } = t,
            Z = W.$el[0],
            ae = !(!G.passiveListener || !q.passiveListeners) && {
              passive: !1,
              capture: !1,
            },
            U = !(!G.passiveListener || !q.passiveListeners) && {
              passive: !0,
              capture: !1,
            };
          if (!Z) return;
          const ie = j === "on" ? "addEventListener" : "removeEventListener";
          G.touch
            ? (Z[ie](X.start, D, ae), Z[ie](X.move, P, ae), Z[ie](X.end, _, U))
            : (Z[ie](V.start, D, ae), u[ie](V.move, P, ae), u[ie](V.end, _, U));
        }
        function F() {
          const { scrollbar: j, $el: W } = t;
          t.params.scrollbar = Ht(
            t,
            t.originalParams.scrollbar,
            t.params.scrollbar,
            { el: "swiper-scrollbar" }
          );
          const X = t.params.scrollbar;
          if (!X.el) return;
          let V = f(X.el);
          t.params.uniqueNavElements &&
            typeof X.el == "string" &&
            V.length > 1 &&
            W.find(X.el).length === 1 &&
            (V = W.find(X.el));
          let q = V.find(`.${t.params.scrollbar.dragClass}`);
          q.length === 0 &&
            ((q = f(`<div class="${t.params.scrollbar.dragClass}"></div>`)),
            V.append(q)),
            Object.assign(j, { $el: V, el: V[0], $dragEl: q, dragEl: q[0] }),
            X.draggable && t.params.scrollbar.el && N("on"),
            V &&
              V[t.enabled ? "removeClass" : "addClass"](
                t.params.scrollbar.lockClass
              );
        }
        function Y() {
          t.params.scrollbar.el && N("off");
        }
        o({
          scrollbar: {
            el: null,
            dragSize: "auto",
            hide: !1,
            draggable: !1,
            snapOnRelease: !0,
            lockClass: "swiper-scrollbar-lock",
            dragClass: "swiper-scrollbar-drag",
          },
        }),
          (t.scrollbar = { el: null, dragEl: null, $el: null, $dragEl: null }),
          l("init", () => {
            F(), E(), S();
          }),
          l("update resize observerUpdate lock unlock", () => {
            E();
          }),
          l("setTranslate", () => {
            S();
          }),
          l("setTransition", (j, W) => {
            (function (X) {
              t.params.scrollbar.el &&
                t.scrollbar.el &&
                t.scrollbar.$dragEl.transition(X);
            })(W);
          }),
          l("enable disable", () => {
            const { $el: j } = t.scrollbar;
            j &&
              j[t.enabled ? "removeClass" : "addClass"](
                t.params.scrollbar.lockClass
              );
          }),
          l("destroy", () => {
            Y();
          }),
          Object.assign(t.scrollbar, {
            updateSize: E,
            setTranslate: S,
            init: F,
            destroy: Y,
          });
      },
      function ({ swiper: t, extendParams: o, on: l }) {
        o({ parallax: { enabled: !1 } });
        const d = (c, v) => {
            const { rtl: y } = t,
              g = f(c),
              T = y ? -1 : 1,
              h = g.attr("data-swiper-parallax") || "0";
            let m = g.attr("data-swiper-parallax-x"),
              S = g.attr("data-swiper-parallax-y");
            const E = g.attr("data-swiper-parallax-scale"),
              x = g.attr("data-swiper-parallax-opacity");
            if (
              (m || S
                ? ((m = m || "0"), (S = S || "0"))
                : t.isHorizontal()
                ? ((m = h), (S = "0"))
                : ((S = h), (m = "0")),
              (m =
                m.indexOf("%") >= 0
                  ? parseInt(m, 10) * v * T + "%"
                  : m * v * T + "px"),
              (S =
                S.indexOf("%") >= 0 ? parseInt(S, 10) * v + "%" : S * v + "px"),
              x != null)
            ) {
              const k = x - (x - 1) * (1 - Math.abs(v));
              g[0].style.opacity = k;
            }
            if (E == null) g.transform(`translate3d(${m}, ${S}, 0px)`);
            else {
              const k = E - (E - 1) * (1 - Math.abs(v));
              g.transform(`translate3d(${m}, ${S}, 0px) scale(${k})`);
            }
          },
          u = () => {
            const { $el: c, slides: v, progress: y, snapGrid: g } = t;
            c
              .children(
                "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]"
              )
              .each((T) => {
                d(T, y);
              }),
              v.each((T, h) => {
                let m = T.progress;
                t.params.slidesPerGroup > 1 &&
                  t.params.slidesPerView !== "auto" &&
                  (m += Math.ceil(h / 2) - y * (g.length - 1)),
                  (m = Math.min(Math.max(m, -1), 1)),
                  f(T)
                    .find(
                      "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]"
                    )
                    .each((S) => {
                      d(S, m);
                    });
              });
          };
        l("beforeInit", () => {
          t.params.parallax.enabled &&
            ((t.params.watchSlidesProgress = !0),
            (t.originalParams.watchSlidesProgress = !0));
        }),
          l("init", () => {
            t.params.parallax.enabled && u();
          }),
          l("setTranslate", () => {
            t.params.parallax.enabled && u();
          }),
          l("setTransition", (c, v) => {
            t.params.parallax.enabled &&
              ((y = t.params.speed) => {
                const { $el: g } = t;
                g.find(
                  "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]"
                ).each((T) => {
                  const h = f(T);
                  let m =
                    parseInt(h.attr("data-swiper-parallax-duration"), 10) || y;
                  y === 0 && (m = 0), h.transition(m);
                });
              })(v);
          });
      },
      function ({ swiper: t, extendParams: o, on: l, emit: d }) {
        const u = r();
        o({
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
        let c,
          v,
          y,
          g = 1,
          T = !1;
        const h = {
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
          S = {
            x: void 0,
            y: void 0,
            prevPositionX: void 0,
            prevPositionY: void 0,
            prevTime: void 0,
          };
        let E = 1;
        function x(U) {
          if (U.targetTouches.length < 2) return 1;
          const ie = U.targetTouches[0].pageX,
            se = U.targetTouches[0].pageY,
            de = U.targetTouches[1].pageX,
            ge = U.targetTouches[1].pageY;
          return Math.sqrt((de - ie) ** 2 + (ge - se) ** 2);
        }
        function k(U) {
          const ie = t.support,
            se = t.params.zoom;
          if (((v = !1), (y = !1), !ie.gestures)) {
            if (
              U.type !== "touchstart" ||
              (U.type === "touchstart" && U.targetTouches.length < 2)
            )
              return;
            (v = !0), (h.scaleStart = x(U));
          }
          (h.$slideEl && h.$slideEl.length) ||
          ((h.$slideEl = f(U.target).closest(`.${t.params.slideClass}`)),
          h.$slideEl.length === 0 && (h.$slideEl = t.slides.eq(t.activeIndex)),
          (h.$imageEl = h.$slideEl
            .find(`.${se.containerClass}`)
            .eq(0)
            .find("img, svg, canvas, picture, .swiper-zoom-target")),
          (h.$imageWrapEl = h.$imageEl.parent(`.${se.containerClass}`)),
          (h.maxRatio = h.$imageWrapEl.attr("data-swiper-zoom") || se.maxRatio),
          h.$imageWrapEl.length !== 0)
            ? (h.$imageEl && h.$imageEl.transition(0), (T = !0))
            : (h.$imageEl = void 0);
        }
        function D(U) {
          const ie = t.support,
            se = t.params.zoom,
            de = t.zoom;
          if (!ie.gestures) {
            if (
              U.type !== "touchmove" ||
              (U.type === "touchmove" && U.targetTouches.length < 2)
            )
              return;
            (y = !0), (h.scaleMove = x(U));
          }
          h.$imageEl && h.$imageEl.length !== 0
            ? (ie.gestures
                ? (de.scale = U.scale * g)
                : (de.scale = (h.scaleMove / h.scaleStart) * g),
              de.scale > h.maxRatio &&
                (de.scale =
                  h.maxRatio - 1 + (de.scale - h.maxRatio + 1) ** 0.5),
              de.scale < se.minRatio &&
                (de.scale =
                  se.minRatio + 1 - (se.minRatio - de.scale + 1) ** 0.5),
              h.$imageEl.transform(`translate3d(0,0,0) scale(${de.scale})`))
            : U.type === "gesturechange" && k(U);
        }
        function P(U) {
          const ie = t.device,
            se = t.support,
            de = t.params.zoom,
            ge = t.zoom;
          if (!se.gestures) {
            if (
              !v ||
              !y ||
              U.type !== "touchend" ||
              (U.type === "touchend" &&
                U.changedTouches.length < 2 &&
                !ie.android)
            )
              return;
            (v = !1), (y = !1);
          }
          h.$imageEl &&
            h.$imageEl.length !== 0 &&
            ((ge.scale = Math.max(Math.min(ge.scale, h.maxRatio), de.minRatio)),
            h.$imageEl
              .transition(t.params.speed)
              .transform(`translate3d(0,0,0) scale(${ge.scale})`),
            (g = ge.scale),
            (T = !1),
            ge.scale === 1 && (h.$slideEl = void 0));
        }
        function _(U) {
          const ie = t.zoom;
          if (
            !h.$imageEl ||
            h.$imageEl.length === 0 ||
            ((t.allowClick = !1), !m.isTouched || !h.$slideEl)
          )
            return;
          m.isMoved ||
            ((m.width = h.$imageEl[0].offsetWidth),
            (m.height = h.$imageEl[0].offsetHeight),
            (m.startX = z(h.$imageWrapEl[0], "x") || 0),
            (m.startY = z(h.$imageWrapEl[0], "y") || 0),
            (h.slideWidth = h.$slideEl[0].offsetWidth),
            (h.slideHeight = h.$slideEl[0].offsetHeight),
            h.$imageWrapEl.transition(0));
          const se = m.width * ie.scale,
            de = m.height * ie.scale;
          if (!(se < h.slideWidth && de < h.slideHeight)) {
            if (
              ((m.minX = Math.min(h.slideWidth / 2 - se / 2, 0)),
              (m.maxX = -m.minX),
              (m.minY = Math.min(h.slideHeight / 2 - de / 2, 0)),
              (m.maxY = -m.minY),
              (m.touchesCurrent.x =
                U.type === "touchmove" ? U.targetTouches[0].pageX : U.pageX),
              (m.touchesCurrent.y =
                U.type === "touchmove" ? U.targetTouches[0].pageY : U.pageY),
              !m.isMoved &&
                !T &&
                ((t.isHorizontal() &&
                  ((Math.floor(m.minX) === Math.floor(m.startX) &&
                    m.touchesCurrent.x < m.touchesStart.x) ||
                    (Math.floor(m.maxX) === Math.floor(m.startX) &&
                      m.touchesCurrent.x > m.touchesStart.x))) ||
                  (!t.isHorizontal() &&
                    ((Math.floor(m.minY) === Math.floor(m.startY) &&
                      m.touchesCurrent.y < m.touchesStart.y) ||
                      (Math.floor(m.maxY) === Math.floor(m.startY) &&
                        m.touchesCurrent.y > m.touchesStart.y)))))
            )
              return void (m.isTouched = !1);
            U.cancelable && U.preventDefault(),
              U.stopPropagation(),
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
              S.prevPositionX || (S.prevPositionX = m.touchesCurrent.x),
              S.prevPositionY || (S.prevPositionY = m.touchesCurrent.y),
              S.prevTime || (S.prevTime = Date.now()),
              (S.x =
                (m.touchesCurrent.x - S.prevPositionX) /
                (Date.now() - S.prevTime) /
                2),
              (S.y =
                (m.touchesCurrent.y - S.prevPositionY) /
                (Date.now() - S.prevTime) /
                2),
              Math.abs(m.touchesCurrent.x - S.prevPositionX) < 2 && (S.x = 0),
              Math.abs(m.touchesCurrent.y - S.prevPositionY) < 2 && (S.y = 0),
              (S.prevPositionX = m.touchesCurrent.x),
              (S.prevPositionY = m.touchesCurrent.y),
              (S.prevTime = Date.now()),
              h.$imageWrapEl.transform(
                `translate3d(${m.currentX}px, ${m.currentY}px,0)`
              );
          }
        }
        function N() {
          const U = t.zoom;
          h.$slideEl &&
            t.previousIndex !== t.activeIndex &&
            (h.$imageEl && h.$imageEl.transform("translate3d(0,0,0) scale(1)"),
            h.$imageWrapEl && h.$imageWrapEl.transform("translate3d(0,0,0)"),
            (U.scale = 1),
            (g = 1),
            (h.$slideEl = void 0),
            (h.$imageEl = void 0),
            (h.$imageWrapEl = void 0));
        }
        function F(U) {
          const ie = t.zoom,
            se = t.params.zoom;
          if (
            (h.$slideEl ||
              (U &&
                U.target &&
                (h.$slideEl = f(U.target).closest(`.${t.params.slideClass}`)),
              h.$slideEl ||
                (t.params.virtual && t.params.virtual.enabled && t.virtual
                  ? (h.$slideEl = t.$wrapperEl.children(
                      `.${t.params.slideActiveClass}`
                    ))
                  : (h.$slideEl = t.slides.eq(t.activeIndex))),
              (h.$imageEl = h.$slideEl
                .find(`.${se.containerClass}`)
                .eq(0)
                .find("img, svg, canvas, picture, .swiper-zoom-target")),
              (h.$imageWrapEl = h.$imageEl.parent(`.${se.containerClass}`))),
            !h.$imageEl ||
              h.$imageEl.length === 0 ||
              !h.$imageWrapEl ||
              h.$imageWrapEl.length === 0)
          )
            return;
          let de,
            ge,
            Ge,
            Be,
            Qe,
            Fe,
            _e,
            De,
            Tt,
            ms,
            fs,
            gs,
            St,
            Et,
            Bt,
            jt,
            Rt,
            Vt;
          t.params.cssMode &&
            ((t.wrapperEl.style.overflow = "hidden"),
            (t.wrapperEl.style.touchAction = "none")),
            h.$slideEl.addClass(`${se.zoomedSlideClass}`),
            m.touchesStart.x === void 0 && U
              ? ((de =
                  U.type === "touchend" ? U.changedTouches[0].pageX : U.pageX),
                (ge =
                  U.type === "touchend" ? U.changedTouches[0].pageY : U.pageY))
              : ((de = m.touchesStart.x), (ge = m.touchesStart.y)),
            (ie.scale = h.$imageWrapEl.attr("data-swiper-zoom") || se.maxRatio),
            (g = h.$imageWrapEl.attr("data-swiper-zoom") || se.maxRatio),
            U
              ? ((Rt = h.$slideEl[0].offsetWidth),
                (Vt = h.$slideEl[0].offsetHeight),
                (Ge = h.$slideEl.offset().left + u.scrollX),
                (Be = h.$slideEl.offset().top + u.scrollY),
                (Qe = Ge + Rt / 2 - de),
                (Fe = Be + Vt / 2 - ge),
                (Tt = h.$imageEl[0].offsetWidth),
                (ms = h.$imageEl[0].offsetHeight),
                (fs = Tt * ie.scale),
                (gs = ms * ie.scale),
                (St = Math.min(Rt / 2 - fs / 2, 0)),
                (Et = Math.min(Vt / 2 - gs / 2, 0)),
                (Bt = -St),
                (jt = -Et),
                (_e = Qe * ie.scale),
                (De = Fe * ie.scale),
                _e < St && (_e = St),
                _e > Bt && (_e = Bt),
                De < Et && (De = Et),
                De > jt && (De = jt))
              : ((_e = 0), (De = 0)),
            h.$imageWrapEl
              .transition(300)
              .transform(`translate3d(${_e}px, ${De}px,0)`),
            h.$imageEl
              .transition(300)
              .transform(`translate3d(0,0,0) scale(${ie.scale})`);
        }
        function Y() {
          const U = t.zoom,
            ie = t.params.zoom;
          h.$slideEl ||
            (t.params.virtual && t.params.virtual.enabled && t.virtual
              ? (h.$slideEl = t.$wrapperEl.children(
                  `.${t.params.slideActiveClass}`
                ))
              : (h.$slideEl = t.slides.eq(t.activeIndex)),
            (h.$imageEl = h.$slideEl
              .find(`.${ie.containerClass}`)
              .eq(0)
              .find("img, svg, canvas, picture, .swiper-zoom-target")),
            (h.$imageWrapEl = h.$imageEl.parent(`.${ie.containerClass}`))),
            h.$imageEl &&
              h.$imageEl.length !== 0 &&
              h.$imageWrapEl &&
              h.$imageWrapEl.length !== 0 &&
              (t.params.cssMode &&
                ((t.wrapperEl.style.overflow = ""),
                (t.wrapperEl.style.touchAction = "")),
              (U.scale = 1),
              (g = 1),
              h.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"),
              h.$imageEl
                .transition(300)
                .transform("translate3d(0,0,0) scale(1)"),
              h.$slideEl.removeClass(`${ie.zoomedSlideClass}`),
              (h.$slideEl = void 0));
        }
        function j(U) {
          const ie = t.zoom;
          ie.scale && ie.scale !== 1 ? Y() : F(U);
        }
        function W() {
          const U = t.support;
          return {
            passiveListener: !(
              t.touchEvents.start !== "touchstart" ||
              !U.passiveListener ||
              !t.params.passiveListeners
            ) && { passive: !0, capture: !1 },
            activeListenerWithCapture: !U.passiveListener || {
              passive: !1,
              capture: !0,
            },
          };
        }
        function X() {
          return `.${t.params.slideClass}`;
        }
        function V(U) {
          const { passiveListener: ie } = W(),
            se = X();
          t.$wrapperEl[U]("gesturestart", se, k, ie),
            t.$wrapperEl[U]("gesturechange", se, D, ie),
            t.$wrapperEl[U]("gestureend", se, P, ie);
        }
        function q() {
          c || ((c = !0), V("on"));
        }
        function G() {
          c && ((c = !1), V("off"));
        }
        function Z() {
          const U = t.zoom;
          if (U.enabled) return;
          U.enabled = !0;
          const ie = t.support,
            { passiveListener: se, activeListenerWithCapture: de } = W(),
            ge = X();
          ie.gestures
            ? (t.$wrapperEl.on(t.touchEvents.start, q, se),
              t.$wrapperEl.on(t.touchEvents.end, G, se))
            : t.touchEvents.start === "touchstart" &&
              (t.$wrapperEl.on(t.touchEvents.start, ge, k, se),
              t.$wrapperEl.on(t.touchEvents.move, ge, D, de),
              t.$wrapperEl.on(t.touchEvents.end, ge, P, se),
              t.touchEvents.cancel &&
                t.$wrapperEl.on(t.touchEvents.cancel, ge, P, se)),
            t.$wrapperEl.on(
              t.touchEvents.move,
              `.${t.params.zoom.containerClass}`,
              _,
              de
            );
        }
        function ae() {
          const U = t.zoom;
          if (!U.enabled) return;
          const ie = t.support;
          U.enabled = !1;
          const { passiveListener: se, activeListenerWithCapture: de } = W(),
            ge = X();
          ie.gestures
            ? (t.$wrapperEl.off(t.touchEvents.start, q, se),
              t.$wrapperEl.off(t.touchEvents.end, G, se))
            : t.touchEvents.start === "touchstart" &&
              (t.$wrapperEl.off(t.touchEvents.start, ge, k, se),
              t.$wrapperEl.off(t.touchEvents.move, ge, D, de),
              t.$wrapperEl.off(t.touchEvents.end, ge, P, se),
              t.touchEvents.cancel &&
                t.$wrapperEl.off(t.touchEvents.cancel, ge, P, se)),
            t.$wrapperEl.off(
              t.touchEvents.move,
              `.${t.params.zoom.containerClass}`,
              _,
              de
            );
        }
        Object.defineProperty(t.zoom, "scale", {
          get: () => E,
          set(U) {
            if (E !== U) {
              const ie = h.$imageEl ? h.$imageEl[0] : void 0,
                se = h.$slideEl ? h.$slideEl[0] : void 0;
              d("zoomChange", U, ie, se);
            }
            E = U;
          },
        }),
          l("init", () => {
            t.params.zoom.enabled && Z();
          }),
          l("destroy", () => {
            ae();
          }),
          l("touchStart", (U, ie) => {
            t.zoom.enabled &&
              (function (se) {
                const de = t.device;
                h.$imageEl &&
                  h.$imageEl.length !== 0 &&
                  (m.isTouched ||
                    (de.android && se.cancelable && se.preventDefault(),
                    (m.isTouched = !0),
                    (m.touchesStart.x =
                      se.type === "touchstart"
                        ? se.targetTouches[0].pageX
                        : se.pageX),
                    (m.touchesStart.y =
                      se.type === "touchstart"
                        ? se.targetTouches[0].pageY
                        : se.pageY)));
              })(ie);
          }),
          l("touchEnd", (U, ie) => {
            t.zoom.enabled &&
              (function () {
                const se = t.zoom;
                if (!h.$imageEl || h.$imageEl.length === 0) return;
                if (!m.isTouched || !m.isMoved)
                  return (m.isTouched = !1), void (m.isMoved = !1);
                (m.isTouched = !1), (m.isMoved = !1);
                let de = 300,
                  ge = 300;
                const Ge = S.x * de,
                  Be = m.currentX + Ge,
                  Qe = S.y * ge,
                  Fe = m.currentY + Qe;
                S.x !== 0 && (de = Math.abs((Be - m.currentX) / S.x)),
                  S.y !== 0 && (ge = Math.abs((Fe - m.currentY) / S.y));
                const _e = Math.max(de, ge);
                (m.currentX = Be), (m.currentY = Fe);
                const De = m.width * se.scale,
                  Tt = m.height * se.scale;
                (m.minX = Math.min(h.slideWidth / 2 - De / 2, 0)),
                  (m.maxX = -m.minX),
                  (m.minY = Math.min(h.slideHeight / 2 - Tt / 2, 0)),
                  (m.maxY = -m.minY),
                  (m.currentX = Math.max(Math.min(m.currentX, m.maxX), m.minX)),
                  (m.currentY = Math.max(Math.min(m.currentY, m.maxY), m.minY)),
                  h.$imageWrapEl
                    .transition(_e)
                    .transform(
                      `translate3d(${m.currentX}px, ${m.currentY}px,0)`
                    );
              })();
          }),
          l("doubleTap", (U, ie) => {
            !t.animating &&
              t.params.zoom.enabled &&
              t.zoom.enabled &&
              t.params.zoom.toggle &&
              j(ie);
          }),
          l("transitionEnd", () => {
            t.zoom.enabled && t.params.zoom.enabled && N();
          }),
          l("slideChange", () => {
            t.zoom.enabled && t.params.zoom.enabled && t.params.cssMode && N();
          }),
          Object.assign(t.zoom, {
            enable: Z,
            disable: ae,
            in: F,
            out: Y,
            toggle: j,
          });
      },
      function ({ swiper: t, extendParams: o, on: l, emit: d }) {
        o({
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
        let u = !1,
          c = !1;
        function v(T, h = !0) {
          const m = t.params.lazy;
          if (T === void 0 || t.slides.length === 0) return;
          const S =
              t.virtual && t.params.virtual.enabled
                ? t.$wrapperEl.children(
                    `.${t.params.slideClass}[data-swiper-slide-index="${T}"]`
                  )
                : t.slides.eq(T),
            E = S.find(
              `.${m.elementClass}:not(.${m.loadedClass}):not(.${m.loadingClass})`
            );
          !S.hasClass(m.elementClass) ||
            S.hasClass(m.loadedClass) ||
            S.hasClass(m.loadingClass) ||
            E.push(S[0]),
            E.length !== 0 &&
              E.each((x) => {
                const k = f(x);
                k.addClass(m.loadingClass);
                const D = k.attr("data-background"),
                  P = k.attr("data-src"),
                  _ = k.attr("data-srcset"),
                  N = k.attr("data-sizes"),
                  F = k.parent("picture");
                t.loadImage(k[0], P || D, _, N, !1, () => {
                  if (t != null && t && (!t || t.params) && !t.destroyed) {
                    if (
                      (D
                        ? (k.css("background-image", `url("${D}")`),
                          k.removeAttr("data-background"))
                        : (_ &&
                            (k.attr("srcset", _), k.removeAttr("data-srcset")),
                          N && (k.attr("sizes", N), k.removeAttr("data-sizes")),
                          F.length &&
                            F.children("source").each((Y) => {
                              const j = f(Y);
                              j.attr("data-srcset") &&
                                (j.attr("srcset", j.attr("data-srcset")),
                                j.removeAttr("data-srcset"));
                            }),
                          P && (k.attr("src", P), k.removeAttr("data-src"))),
                      k.addClass(m.loadedClass).removeClass(m.loadingClass),
                      S.find(`.${m.preloaderClass}`).remove(),
                      t.params.loop && h)
                    ) {
                      const Y = S.attr("data-swiper-slide-index");
                      S.hasClass(t.params.slideDuplicateClass)
                        ? v(
                            t.$wrapperEl
                              .children(
                                `[data-swiper-slide-index="${Y}"]:not(.${t.params.slideDuplicateClass})`
                              )
                              .index(),
                            !1
                          )
                        : v(
                            t.$wrapperEl
                              .children(
                                `.${t.params.slideDuplicateClass}[data-swiper-slide-index="${Y}"]`
                              )
                              .index(),
                            !1
                          );
                    }
                    d("lazyImageReady", S[0], k[0]),
                      t.params.autoHeight && t.updateAutoHeight();
                  }
                }),
                  d("lazyImageLoad", S[0], k[0]);
              });
        }
        function y() {
          const { $wrapperEl: T, params: h, slides: m, activeIndex: S } = t,
            E = t.virtual && h.virtual.enabled,
            x = h.lazy;
          let k = h.slidesPerView;
          function D(_) {
            if (E) {
              if (
                T.children(`.${h.slideClass}[data-swiper-slide-index="${_}"]`)
                  .length
              )
                return !0;
            } else if (m[_]) return !0;
            return !1;
          }
          function P(_) {
            return E ? f(_).attr("data-swiper-slide-index") : f(_).index();
          }
          if (
            (k === "auto" && (k = 0),
            c || (c = !0),
            t.params.watchSlidesProgress)
          )
            T.children(`.${h.slideVisibleClass}`).each((_) => {
              v(E ? f(_).attr("data-swiper-slide-index") : f(_).index());
            });
          else if (k > 1) for (let _ = S; _ < S + k; _ += 1) D(_) && v(_);
          else v(S);
          if (x.loadPrevNext)
            if (k > 1 || (x.loadPrevNextAmount && x.loadPrevNextAmount > 1)) {
              const _ = x.loadPrevNextAmount,
                N = k,
                F = Math.min(S + N + Math.max(_, N), m.length),
                Y = Math.max(S - Math.max(N, _), 0);
              for (let j = S + k; j < F; j += 1) D(j) && v(j);
              for (let j = Y; j < S; j += 1) D(j) && v(j);
            } else {
              const _ = T.children(`.${h.slideNextClass}`);
              _.length > 0 && v(P(_));
              const N = T.children(`.${h.slidePrevClass}`);
              N.length > 0 && v(P(N));
            }
        }
        function g() {
          const T = r();
          if (!t || t.destroyed) return;
          const h = t.params.lazy.scrollingElement
              ? f(t.params.lazy.scrollingElement)
              : f(T),
            m = h[0] === T,
            S = m ? T.innerWidth : h[0].offsetWidth,
            E = m ? T.innerHeight : h[0].offsetHeight,
            x = t.$el.offset(),
            { rtlTranslate: k } = t;
          let D = !1;
          k && (x.left -= t.$el[0].scrollLeft);
          const P = [
            [x.left, x.top],
            [x.left + t.width, x.top],
            [x.left, x.top + t.height],
            [x.left + t.width, x.top + t.height],
          ];
          for (let N = 0; N < P.length; N += 1) {
            const F = P[N];
            if (F[0] >= 0 && F[0] <= S && F[1] >= 0 && F[1] <= E) {
              if (F[0] === 0 && F[1] === 0) continue;
              D = !0;
            }
          }
          const _ = !(
            t.touchEvents.start !== "touchstart" ||
            !t.support.passiveListener ||
            !t.params.passiveListeners
          ) && { passive: !0, capture: !1 };
          D
            ? (y(), h.off("scroll", g, _))
            : u || ((u = !0), h.on("scroll", g, _));
        }
        l("beforeInit", () => {
          t.params.lazy.enabled &&
            t.params.preloadImages &&
            (t.params.preloadImages = !1);
        }),
          l("init", () => {
            t.params.lazy.enabled && (t.params.lazy.checkInView ? g() : y());
          }),
          l("scroll", () => {
            t.params.freeMode &&
              t.params.freeMode.enabled &&
              !t.params.freeMode.sticky &&
              y();
          }),
          l("scrollbarDragMove resize _freeModeNoMomentumRelease", () => {
            t.params.lazy.enabled && (t.params.lazy.checkInView ? g() : y());
          }),
          l("transitionStart", () => {
            t.params.lazy.enabled &&
              (t.params.lazy.loadOnTransitionStart ||
                (!t.params.lazy.loadOnTransitionStart && !c)) &&
              (t.params.lazy.checkInView ? g() : y());
          }),
          l("transitionEnd", () => {
            t.params.lazy.enabled &&
              !t.params.lazy.loadOnTransitionStart &&
              (t.params.lazy.checkInView ? g() : y());
          }),
          l("slideChange", () => {
            const {
              lazy: T,
              cssMode: h,
              watchSlidesProgress: m,
              touchReleaseOnEdges: S,
              resistanceRatio: E,
            } = t.params;
            T.enabled && (h || (m && (S || E === 0))) && y();
          }),
          Object.assign(t.lazy, { load: y, loadInSlide: v });
      },
      function ({ swiper: t, extendParams: o, on: l }) {
        function d(c, v) {
          const y = (function () {
            let h, m, S;
            return (E, x) => {
              for (m = -1, h = E.length; h - m > 1; )
                (S = (h + m) >> 1), E[S] <= x ? (m = S) : (h = S);
              return h;
            };
          })();
          let g, T;
          return (
            (this.x = c),
            (this.y = v),
            (this.lastIndex = c.length - 1),
            (this.interpolate = function (h) {
              return h
                ? ((T = y(this.x, h)),
                  (g = T - 1),
                  ((h - this.x[g]) * (this.y[T] - this.y[g])) /
                    (this.x[T] - this.x[g]) +
                    this.y[g])
                : 0;
            }),
            this
          );
        }
        function u() {
          t.controller.control &&
            t.controller.spline &&
            ((t.controller.spline = void 0), delete t.controller.spline);
        }
        o({ controller: { control: void 0, inverse: !1, by: "slide" } }),
          (t.controller = { control: void 0 }),
          l("beforeInit", () => {
            t.controller.control = t.params.controller.control;
          }),
          l("update", () => {
            u();
          }),
          l("resize", () => {
            u();
          }),
          l("observerUpdate", () => {
            u();
          }),
          l("setTranslate", (c, v, y) => {
            t.controller.control && t.controller.setTranslate(v, y);
          }),
          l("setTransition", (c, v, y) => {
            t.controller.control && t.controller.setTransition(v, y);
          }),
          Object.assign(t.controller, {
            setTranslate: function (c, v) {
              const y = t.controller.control;
              let g, T;
              const h = t.constructor;
              function m(S) {
                const E = t.rtlTranslate ? -t.translate : t.translate;
                t.params.controller.by === "slide" &&
                  ((function (x) {
                    t.controller.spline ||
                      (t.controller.spline = t.params.loop
                        ? new d(t.slidesGrid, x.slidesGrid)
                        : new d(t.snapGrid, x.snapGrid));
                  })(S),
                  (T = -t.controller.spline.interpolate(-E))),
                  (T && t.params.controller.by !== "container") ||
                    ((g =
                      (S.maxTranslate() - S.minTranslate()) /
                      (t.maxTranslate() - t.minTranslate())),
                    (T = (E - t.minTranslate()) * g + S.minTranslate())),
                  t.params.controller.inverse && (T = S.maxTranslate() - T),
                  S.updateProgress(T),
                  S.setTranslate(T, t),
                  S.updateActiveIndex(),
                  S.updateSlidesClasses();
              }
              if (Array.isArray(y))
                for (let S = 0; S < y.length; S += 1)
                  y[S] !== v && y[S] instanceof h && m(y[S]);
              else y instanceof h && v !== y && m(y);
            },
            setTransition: function (c, v) {
              const y = t.constructor,
                g = t.controller.control;
              let T;
              function h(m) {
                m.setTransition(c, t),
                  c !== 0 &&
                    (m.transitionStart(),
                    m.params.autoHeight &&
                      A(() => {
                        m.updateAutoHeight();
                      }),
                    m.$wrapperEl.transitionEnd(() => {
                      g &&
                        (m.params.loop &&
                          t.params.controller.by === "slide" &&
                          m.loopFix(),
                        m.transitionEnd());
                    }));
              }
              if (Array.isArray(g))
                for (T = 0; T < g.length; T += 1)
                  g[T] !== v && g[T] instanceof y && h(g[T]);
              else g instanceof y && v !== g && h(g);
            },
          });
      },
      function ({ swiper: t, extendParams: o, on: l }) {
        o({
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
          },
        });
        let d = null;
        function u(P) {
          const _ = d;
          _.length !== 0 && (_.html(""), _.html(P));
        }
        function c(P) {
          P.attr("tabIndex", "0");
        }
        function v(P) {
          P.attr("tabIndex", "-1");
        }
        function y(P, _) {
          P.attr("role", _);
        }
        function g(P, _) {
          P.attr("aria-roledescription", _);
        }
        function T(P, _) {
          P.attr("aria-label", _);
        }
        function h(P) {
          P.attr("aria-disabled", !0);
        }
        function m(P) {
          P.attr("aria-disabled", !1);
        }
        function S(P) {
          if (P.keyCode !== 13 && P.keyCode !== 32) return;
          const _ = t.params.a11y,
            N = f(P.target);
          t.navigation &&
            t.navigation.$nextEl &&
            N.is(t.navigation.$nextEl) &&
            ((t.isEnd && !t.params.loop) || t.slideNext(),
            t.isEnd ? u(_.lastSlideMessage) : u(_.nextSlideMessage)),
            t.navigation &&
              t.navigation.$prevEl &&
              N.is(t.navigation.$prevEl) &&
              ((t.isBeginning && !t.params.loop) || t.slidePrev(),
              t.isBeginning ? u(_.firstSlideMessage) : u(_.prevSlideMessage)),
            t.pagination &&
              N.is(Ne(t.params.pagination.bulletClass)) &&
              N[0].click();
        }
        function E() {
          if (t.params.loop || !t.navigation) return;
          const { $nextEl: P, $prevEl: _ } = t.navigation;
          _ && _.length > 0 && (t.isBeginning ? (h(_), v(_)) : (m(_), c(_))),
            P && P.length > 0 && (t.isEnd ? (h(P), v(P)) : (m(P), c(P)));
        }
        function x() {
          return (
            t.pagination &&
            t.params.pagination.clickable &&
            t.pagination.bullets &&
            t.pagination.bullets.length
          );
        }
        const k = (P, _, N) => {
          c(P),
            P[0].tagName !== "BUTTON" && (y(P, "button"), P.on("keydown", S)),
            T(P, N),
            (function (F, Y) {
              F.attr("aria-controls", Y);
            })(P, _);
        };
        function D() {
          const P = t.params.a11y;
          t.$el.append(d);
          const _ = t.$el;
          P.containerRoleDescriptionMessage &&
            g(_, P.containerRoleDescriptionMessage),
            P.containerMessage && T(_, P.containerMessage);
          const N = t.$wrapperEl,
            F =
              N.attr("id") ||
              `swiper-wrapper-${(function (q = 16) {
                return "x"
                  .repeat(q)
                  .replace(/x/g, () =>
                    Math.round(16 * Math.random()).toString(16)
                  );
              })(16)}`,
            Y =
              t.params.autoplay && t.params.autoplay.enabled ? "off" : "polite";
          var j;
          (j = F),
            N.attr("id", j),
            (function (q, G) {
              q.attr("aria-live", G);
            })(N, Y),
            P.itemRoleDescriptionMessage &&
              g(f(t.slides), P.itemRoleDescriptionMessage),
            y(f(t.slides), P.slideRole);
          const W = t.params.loop
            ? t.slides.filter(
                (q) => !q.classList.contains(t.params.slideDuplicateClass)
              ).length
            : t.slides.length;
          let X, V;
          t.slides.each((q, G) => {
            const Z = f(q),
              ae = t.params.loop
                ? parseInt(Z.attr("data-swiper-slide-index"), 10)
                : G;
            T(
              Z,
              P.slideLabelMessage
                .replace(/\{\{index\}\}/, ae + 1)
                .replace(/\{\{slidesLength\}\}/, W)
            );
          }),
            t.navigation && t.navigation.$nextEl && (X = t.navigation.$nextEl),
            t.navigation && t.navigation.$prevEl && (V = t.navigation.$prevEl),
            X && X.length && k(X, F, P.nextSlideMessage),
            V && V.length && k(V, F, P.prevSlideMessage),
            x() &&
              t.pagination.$el.on(
                "keydown",
                Ne(t.params.pagination.bulletClass),
                S
              );
        }
        l("beforeInit", () => {
          d = f(
            `<span class="${t.params.a11y.notificationClass}" aria-live="assertive" aria-atomic="true"></span>`
          );
        }),
          l("afterInit", () => {
            t.params.a11y.enabled && (D(), E());
          }),
          l("toEdge", () => {
            t.params.a11y.enabled && E();
          }),
          l("fromEdge", () => {
            t.params.a11y.enabled && E();
          }),
          l("paginationUpdate", () => {
            t.params.a11y.enabled &&
              (function () {
                const P = t.params.a11y;
                x() &&
                  t.pagination.bullets.each((_) => {
                    const N = f(_);
                    c(N),
                      t.params.pagination.renderBullet ||
                        (y(N, "button"),
                        T(
                          N,
                          P.paginationBulletMessage.replace(
                            /\{\{index\}\}/,
                            N.index() + 1
                          )
                        ));
                  });
              })();
          }),
          l("destroy", () => {
            t.params.a11y.enabled &&
              (function () {
                let P, _;
                d && d.length > 0 && d.remove(),
                  t.navigation &&
                    t.navigation.$nextEl &&
                    (P = t.navigation.$nextEl),
                  t.navigation &&
                    t.navigation.$prevEl &&
                    (_ = t.navigation.$prevEl),
                  P && P.off("keydown", S),
                  _ && _.off("keydown", S),
                  x() &&
                    t.pagination.$el.off(
                      "keydown",
                      Ne(t.params.pagination.bulletClass),
                      S
                    );
              })();
          });
      },
      function ({ swiper: t, extendParams: o, on: l }) {
        o({
          history: { enabled: !1, root: "", replaceState: !1, key: "slides" },
        });
        let d = !1,
          u = {};
        const c = (h) =>
            h
              .toString()
              .replace(/\s+/g, "-")
              .replace(/[^\w-]+/g, "")
              .replace(/--+/g, "-")
              .replace(/^-+/, "")
              .replace(/-+$/, ""),
          v = (h) => {
            const m = r();
            let S;
            S = h ? new URL(h) : m.location;
            const E = S.pathname
                .slice(1)
                .split("/")
                .filter((k) => k !== ""),
              x = E.length;
            return { key: E[x - 2], value: E[x - 1] };
          },
          y = (h, m) => {
            const S = r();
            if (!d || !t.params.history.enabled) return;
            let E;
            E = t.params.url ? new URL(t.params.url) : S.location;
            const x = t.slides.eq(m);
            let k = c(x.attr("data-history"));
            if (t.params.history.root.length > 0) {
              let P = t.params.history.root;
              P[P.length - 1] === "/" && (P = P.slice(0, P.length - 1)),
                (k = `${P}/${h}/${k}`);
            } else E.pathname.includes(h) || (k = `${h}/${k}`);
            const D = S.history.state;
            (D && D.value === k) ||
              (t.params.history.replaceState
                ? S.history.replaceState({ value: k }, null, k)
                : S.history.pushState({ value: k }, null, k));
          },
          g = (h, m, S) => {
            if (m)
              for (let E = 0, x = t.slides.length; E < x; E += 1) {
                const k = t.slides.eq(E);
                if (
                  c(k.attr("data-history")) === m &&
                  !k.hasClass(t.params.slideDuplicateClass)
                ) {
                  const D = k.index();
                  t.slideTo(D, h, S);
                }
              }
            else t.slideTo(0, h, S);
          },
          T = () => {
            (u = v(t.params.url)), g(t.params.speed, t.paths.value, !1);
          };
        l("init", () => {
          t.params.history.enabled &&
            (() => {
              const h = r();
              if (t.params.history) {
                if (!h.history || !h.history.pushState)
                  return (
                    (t.params.history.enabled = !1),
                    void (t.params.hashNavigation.enabled = !0)
                  );
                (d = !0),
                  (u = v(t.params.url)),
                  (u.key || u.value) &&
                    (g(0, u.value, t.params.runCallbacksOnInit),
                    t.params.history.replaceState ||
                      h.addEventListener("popstate", T));
              }
            })();
        }),
          l("destroy", () => {
            t.params.history.enabled &&
              (() => {
                const h = r();
                t.params.history.replaceState ||
                  h.removeEventListener("popstate", T);
              })();
          }),
          l("transitionEnd _freeModeNoMomentumRelease", () => {
            d && y(t.params.history.key, t.activeIndex);
          }),
          l("slideChange", () => {
            d && t.params.cssMode && y(t.params.history.key, t.activeIndex);
          });
      },
      function ({ swiper: t, extendParams: o, emit: l, on: d }) {
        let u = !1;
        const c = n(),
          v = r();
        o({
          hashNavigation: { enabled: !1, replaceState: !1, watchState: !1 },
        });
        const y = () => {
            l("hashChange");
            const T = c.location.hash.replace("#", "");
            if (T !== t.slides.eq(t.activeIndex).attr("data-hash")) {
              const h = t.$wrapperEl
                .children(`.${t.params.slideClass}[data-hash="${T}"]`)
                .index();
              if (h === void 0) return;
              t.slideTo(h);
            }
          },
          g = () => {
            if (u && t.params.hashNavigation.enabled)
              if (
                t.params.hashNavigation.replaceState &&
                v.history &&
                v.history.replaceState
              )
                v.history.replaceState(
                  null,
                  null,
                  `#${t.slides.eq(t.activeIndex).attr("data-hash")}` || ""
                ),
                  l("hashSet");
              else {
                const T = t.slides.eq(t.activeIndex),
                  h = T.attr("data-hash") || T.attr("data-history");
                (c.location.hash = h || ""), l("hashSet");
              }
          };
        d("init", () => {
          t.params.hashNavigation.enabled &&
            (() => {
              if (
                !t.params.hashNavigation.enabled ||
                (t.params.history && t.params.history.enabled)
              )
                return;
              u = !0;
              const T = c.location.hash.replace("#", "");
              if (T)
                for (let m = 0, S = t.slides.length; m < S; m += 1) {
                  const E = t.slides.eq(m);
                  if (
                    (E.attr("data-hash") || E.attr("data-history")) === T &&
                    !E.hasClass(t.params.slideDuplicateClass)
                  ) {
                    const x = E.index();
                    t.slideTo(x, 0, t.params.runCallbacksOnInit, !0);
                  }
                }
              t.params.hashNavigation.watchState && f(v).on("hashchange", y);
            })();
        }),
          d("destroy", () => {
            t.params.hashNavigation.enabled &&
              t.params.hashNavigation.watchState &&
              f(v).off("hashchange", y);
          }),
          d("transitionEnd _freeModeNoMomentumRelease", () => {
            u && g();
          }),
          d("slideChange", () => {
            u && t.params.cssMode && g();
          });
      },
      function ({ swiper: t, extendParams: o, on: l, emit: d }) {
        let u;
        function c() {
          const E = t.slides.eq(t.activeIndex);
          let x = t.params.autoplay.delay;
          E.attr("data-swiper-autoplay") &&
            (x = E.attr("data-swiper-autoplay") || t.params.autoplay.delay),
            clearTimeout(u),
            (u = A(() => {
              let k;
              t.params.autoplay.reverseDirection
                ? t.params.loop
                  ? (t.loopFix(),
                    (k = t.slidePrev(t.params.speed, !0, !0)),
                    d("autoplay"))
                  : t.isBeginning
                  ? t.params.autoplay.stopOnLastSlide
                    ? y()
                    : ((k = t.slideTo(
                        t.slides.length - 1,
                        t.params.speed,
                        !0,
                        !0
                      )),
                      d("autoplay"))
                  : ((k = t.slidePrev(t.params.speed, !0, !0)), d("autoplay"))
                : t.params.loop
                ? (t.loopFix(),
                  (k = t.slideNext(t.params.speed, !0, !0)),
                  d("autoplay"))
                : t.isEnd
                ? t.params.autoplay.stopOnLastSlide
                  ? y()
                  : ((k = t.slideTo(0, t.params.speed, !0, !0)), d("autoplay"))
                : ((k = t.slideNext(t.params.speed, !0, !0)), d("autoplay")),
                ((t.params.cssMode && t.autoplay.running) || k === !1) && c();
            }, x));
        }
        function v() {
          return (
            u === void 0 &&
            !t.autoplay.running &&
            ((t.autoplay.running = !0), d("autoplayStart"), c(), !0)
          );
        }
        function y() {
          return (
            !!t.autoplay.running &&
            u !== void 0 &&
            (u && (clearTimeout(u), (u = void 0)),
            (t.autoplay.running = !1),
            d("autoplayStop"),
            !0)
          );
        }
        function g(E) {
          t.autoplay.running &&
            (t.autoplay.paused ||
              (u && clearTimeout(u),
              (t.autoplay.paused = !0),
              E !== 0 && t.params.autoplay.waitForTransition
                ? ["transitionend", "webkitTransitionEnd"].forEach((x) => {
                    t.$wrapperEl[0].addEventListener(x, h);
                  })
                : ((t.autoplay.paused = !1), c())));
        }
        function T() {
          const E = n();
          E.visibilityState === "hidden" && t.autoplay.running && g(),
            E.visibilityState === "visible" &&
              t.autoplay.paused &&
              (c(), (t.autoplay.paused = !1));
        }
        function h(E) {
          t &&
            !t.destroyed &&
            t.$wrapperEl &&
            E.target === t.$wrapperEl[0] &&
            (["transitionend", "webkitTransitionEnd"].forEach((x) => {
              t.$wrapperEl[0].removeEventListener(x, h);
            }),
            (t.autoplay.paused = !1),
            t.autoplay.running ? c() : y());
        }
        function m() {
          t.params.autoplay.disableOnInteraction ? y() : g(),
            ["transitionend", "webkitTransitionEnd"].forEach((E) => {
              t.$wrapperEl[0].removeEventListener(E, h);
            });
        }
        function S() {
          t.params.autoplay.disableOnInteraction ||
            ((t.autoplay.paused = !1), c());
        }
        (t.autoplay = { running: !1, paused: !1 }),
          o({
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
          l("init", () => {
            t.params.autoplay.enabled &&
              (v(),
              n().addEventListener("visibilitychange", T),
              t.params.autoplay.pauseOnMouseEnter &&
                (t.$el.on("mouseenter", m), t.$el.on("mouseleave", S)));
          }),
          l("beforeTransitionStart", (E, x, k) => {
            t.autoplay.running &&
              (k || !t.params.autoplay.disableOnInteraction
                ? t.autoplay.pause(x)
                : y());
          }),
          l("sliderFirstMove", () => {
            t.autoplay.running &&
              (t.params.autoplay.disableOnInteraction ? y() : g());
          }),
          l("touchEnd", () => {
            t.params.cssMode &&
              t.autoplay.paused &&
              !t.params.autoplay.disableOnInteraction &&
              c();
          }),
          l("destroy", () => {
            t.$el.off("mouseenter", m),
              t.$el.off("mouseleave", S),
              t.autoplay.running && y(),
              n().removeEventListener("visibilitychange", T);
          }),
          Object.assign(t.autoplay, { pause: g, run: c, start: v, stop: y });
      },
      function ({ swiper: t, extendParams: o, on: l }) {
        o({
          thumbs: {
            swiper: null,
            multipleActiveThumbs: !0,
            autoScrollOffset: 0,
            slideThumbActiveClass: "swiper-slide-thumb-active",
            thumbsContainerClass: "swiper-thumbs",
          },
        });
        let d = !1,
          u = !1;
        function c() {
          const g = t.thumbs.swiper;
          if (!g) return;
          const T = g.clickedIndex,
            h = g.clickedSlide;
          if (
            (h && f(h).hasClass(t.params.thumbs.slideThumbActiveClass)) ||
            T == null
          )
            return;
          let m;
          if (
            ((m = g.params.loop
              ? parseInt(f(g.clickedSlide).attr("data-swiper-slide-index"), 10)
              : T),
            t.params.loop)
          ) {
            let S = t.activeIndex;
            t.slides.eq(S).hasClass(t.params.slideDuplicateClass) &&
              (t.loopFix(),
              (t._clientLeft = t.$wrapperEl[0].clientLeft),
              (S = t.activeIndex));
            const E = t.slides
                .eq(S)
                .prevAll(`[data-swiper-slide-index="${m}"]`)
                .eq(0)
                .index(),
              x = t.slides
                .eq(S)
                .nextAll(`[data-swiper-slide-index="${m}"]`)
                .eq(0)
                .index();
            m = E === void 0 ? x : x === void 0 ? E : x - S < S - E ? x : E;
          }
          t.slideTo(m);
        }
        function v() {
          const { thumbs: g } = t.params;
          if (d) return !1;
          d = !0;
          const T = t.constructor;
          if (g.swiper instanceof T)
            (t.thumbs.swiper = g.swiper),
              Object.assign(t.thumbs.swiper.originalParams, {
                watchSlidesProgress: !0,
                slideToClickedSlide: !1,
              }),
              Object.assign(t.thumbs.swiper.params, {
                watchSlidesProgress: !0,
                slideToClickedSlide: !1,
              });
          else if (H(g.swiper)) {
            const h = Object.assign({}, g.swiper);
            Object.assign(h, {
              watchSlidesProgress: !0,
              slideToClickedSlide: !1,
            }),
              (t.thumbs.swiper = new T(h)),
              (u = !0);
          }
          return (
            t.thumbs.swiper.$el.addClass(t.params.thumbs.thumbsContainerClass),
            t.thumbs.swiper.on("tap", c),
            !0
          );
        }
        function y(g) {
          const T = t.thumbs.swiper;
          if (!T) return;
          const h =
              T.params.slidesPerView === "auto"
                ? T.slidesPerViewDynamic()
                : T.params.slidesPerView,
            m = t.params.thumbs.autoScrollOffset,
            S = m && !T.params.loop;
          if (t.realIndex !== T.realIndex || S) {
            let k,
              D,
              P = T.activeIndex;
            if (T.params.loop) {
              T.slides.eq(P).hasClass(T.params.slideDuplicateClass) &&
                (T.loopFix(),
                (T._clientLeft = T.$wrapperEl[0].clientLeft),
                (P = T.activeIndex));
              const _ = T.slides
                  .eq(P)
                  .prevAll(`[data-swiper-slide-index="${t.realIndex}"]`)
                  .eq(0)
                  .index(),
                N = T.slides
                  .eq(P)
                  .nextAll(`[data-swiper-slide-index="${t.realIndex}"]`)
                  .eq(0)
                  .index();
              (k =
                _ === void 0
                  ? N
                  : N === void 0
                  ? _
                  : N - P == P - _
                  ? T.params.slidesPerGroup > 1
                    ? N
                    : P
                  : N - P < P - _
                  ? N
                  : _),
                (D = t.activeIndex > t.previousIndex ? "next" : "prev");
            } else
              (k = t.realIndex), (D = k > t.previousIndex ? "next" : "prev");
            S && (k += D === "next" ? m : -1 * m),
              T.visibleSlidesIndexes &&
                T.visibleSlidesIndexes.indexOf(k) < 0 &&
                (T.params.centeredSlides
                  ? (k =
                      k > P
                        ? k - Math.floor(h / 2) + 1
                        : k + Math.floor(h / 2) - 1)
                  : k > P && T.params.slidesPerGroup,
                T.slideTo(k, g ? 0 : void 0));
          }
          let E = 1;
          const x = t.params.thumbs.slideThumbActiveClass;
          if (
            (t.params.slidesPerView > 1 &&
              !t.params.centeredSlides &&
              (E = t.params.slidesPerView),
            t.params.thumbs.multipleActiveThumbs || (E = 1),
            (E = Math.floor(E)),
            T.slides.removeClass(x),
            T.params.loop || (T.params.virtual && T.params.virtual.enabled))
          )
            for (let k = 0; k < E; k += 1)
              T.$wrapperEl
                .children(`[data-swiper-slide-index="${t.realIndex + k}"]`)
                .addClass(x);
          else
            for (let k = 0; k < E; k += 1)
              T.slides.eq(t.realIndex + k).addClass(x);
        }
        (t.thumbs = { swiper: null }),
          l("beforeInit", () => {
            const { thumbs: g } = t.params;
            g && g.swiper && (v(), y(!0));
          }),
          l("slideChange update resize observerUpdate", () => {
            t.thumbs.swiper && y();
          }),
          l("setTransition", (g, T) => {
            const h = t.thumbs.swiper;
            h && h.setTransition(T);
          }),
          l("beforeDestroy", () => {
            const g = t.thumbs.swiper;
            g && u && g && g.destroy();
          }),
          Object.assign(t.thumbs, { init: v, update: y });
      },
      function ({ swiper: t, extendParams: o, emit: l, once: d }) {
        o({
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
              onTouchMove: function () {
                const { touchEventsData: u, touches: c } = t;
                u.velocities.length === 0 &&
                  u.velocities.push({
                    position: c[t.isHorizontal() ? "startX" : "startY"],
                    time: u.touchStartTime,
                  }),
                  u.velocities.push({
                    position: c[t.isHorizontal() ? "currentX" : "currentY"],
                    time: M(),
                  });
              },
              onTouchEnd: function ({ currentPos: u }) {
                const {
                    params: c,
                    $wrapperEl: v,
                    rtlTranslate: y,
                    snapGrid: g,
                    touchEventsData: T,
                  } = t,
                  h = M() - T.touchStartTime;
                if (u < -t.minTranslate()) t.slideTo(t.activeIndex);
                else if (u > -t.maxTranslate())
                  t.slides.length < g.length
                    ? t.slideTo(g.length - 1)
                    : t.slideTo(t.slides.length - 1);
                else {
                  if (c.freeMode.momentum) {
                    if (T.velocities.length > 1) {
                      const _ = T.velocities.pop(),
                        N = T.velocities.pop(),
                        F = _.position - N.position,
                        Y = _.time - N.time;
                      (t.velocity = F / Y),
                        (t.velocity /= 2),
                        Math.abs(t.velocity) < c.freeMode.minimumVelocity &&
                          (t.velocity = 0),
                        (Y > 150 || M() - _.time > 300) && (t.velocity = 0);
                    } else t.velocity = 0;
                    (t.velocity *= c.freeMode.momentumVelocityRatio),
                      (T.velocities.length = 0);
                    let m = 1e3 * c.freeMode.momentumRatio;
                    const S = t.velocity * m;
                    let E = t.translate + S;
                    y && (E = -E);
                    let x,
                      k = !1;
                    const D =
                      20 *
                      Math.abs(t.velocity) *
                      c.freeMode.momentumBounceRatio;
                    let P;
                    if (E < t.maxTranslate())
                      c.freeMode.momentumBounce
                        ? (E + t.maxTranslate() < -D &&
                            (E = t.maxTranslate() - D),
                          (x = t.maxTranslate()),
                          (k = !0),
                          (T.allowMomentumBounce = !0))
                        : (E = t.maxTranslate()),
                        c.loop && c.centeredSlides && (P = !0);
                    else if (E > t.minTranslate())
                      c.freeMode.momentumBounce
                        ? (E - t.minTranslate() > D &&
                            (E = t.minTranslate() + D),
                          (x = t.minTranslate()),
                          (k = !0),
                          (T.allowMomentumBounce = !0))
                        : (E = t.minTranslate()),
                        c.loop && c.centeredSlides && (P = !0);
                    else if (c.freeMode.sticky) {
                      let _;
                      for (let N = 0; N < g.length; N += 1)
                        if (g[N] > -E) {
                          _ = N;
                          break;
                        }
                      (E =
                        Math.abs(g[_] - E) < Math.abs(g[_ - 1] - E) ||
                        t.swipeDirection === "next"
                          ? g[_]
                          : g[_ - 1]),
                        (E = -E);
                    }
                    if (
                      (P &&
                        d("transitionEnd", () => {
                          t.loopFix();
                        }),
                      t.velocity !== 0)
                    ) {
                      if (
                        ((m = Math.abs(
                          y
                            ? (-E - t.translate) / t.velocity
                            : (E - t.translate) / t.velocity
                        )),
                        c.freeMode.sticky)
                      ) {
                        const _ = Math.abs((y ? -E : E) - t.translate),
                          N = t.slidesSizesGrid[t.activeIndex];
                        m =
                          _ < N
                            ? c.speed
                            : _ < 2 * N
                            ? 1.5 * c.speed
                            : 2.5 * c.speed;
                      }
                    } else if (c.freeMode.sticky)
                      return void t.slideToClosest();
                    c.freeMode.momentumBounce && k
                      ? (t.updateProgress(x),
                        t.setTransition(m),
                        t.setTranslate(E),
                        t.transitionStart(!0, t.swipeDirection),
                        (t.animating = !0),
                        v.transitionEnd(() => {
                          t &&
                            !t.destroyed &&
                            T.allowMomentumBounce &&
                            (l("momentumBounce"),
                            t.setTransition(c.speed),
                            setTimeout(() => {
                              t.setTranslate(x),
                                v.transitionEnd(() => {
                                  t && !t.destroyed && t.transitionEnd();
                                });
                            }, 0));
                        }))
                      : t.velocity
                      ? (l("_freeModeNoMomentumRelease"),
                        t.updateProgress(E),
                        t.setTransition(m),
                        t.setTranslate(E),
                        t.transitionStart(!0, t.swipeDirection),
                        t.animating ||
                          ((t.animating = !0),
                          v.transitionEnd(() => {
                            t && !t.destroyed && t.transitionEnd();
                          })))
                      : t.updateProgress(E),
                      t.updateActiveIndex(),
                      t.updateSlidesClasses();
                  } else {
                    if (c.freeMode.sticky) return void t.slideToClosest();
                    c.freeMode && l("_freeModeNoMomentumRelease");
                  }
                  (!c.freeMode.momentum || h >= c.longSwipesMs) &&
                    (t.updateProgress(),
                    t.updateActiveIndex(),
                    t.updateSlidesClasses());
                }
              },
            },
          });
      },
      function ({ swiper: t, extendParams: o }) {
        let l, d, u;
        o({ grid: { rows: 1, fill: "column" } }),
          (t.grid = {
            initSlides: (c) => {
              const { slidesPerView: v } = t.params,
                { rows: y, fill: g } = t.params.grid;
              (d = l / y),
                (u = Math.floor(c / y)),
                (l = Math.floor(c / y) === c / y ? c : Math.ceil(c / y) * y),
                v !== "auto" && g === "row" && (l = Math.max(l, v * y));
            },
            updateSlide: (c, v, y, g) => {
              const { slidesPerGroup: T, spaceBetween: h } = t.params,
                { rows: m, fill: S } = t.params.grid;
              let E, x, k;
              if (S === "row" && T > 1) {
                const D = Math.floor(c / (T * m)),
                  P = c - m * T * D,
                  _ = D === 0 ? T : Math.min(Math.ceil((y - D * m * T) / m), T);
                (k = Math.floor(P / _)),
                  (x = P - k * _ + D * T),
                  (E = x + (k * l) / m),
                  v.css({ "-webkit-order": E, order: E });
              } else
                S === "column"
                  ? ((x = Math.floor(c / m)),
                    (k = c - x * m),
                    (x > u || (x === u && k === m - 1)) &&
                      ((k += 1), k >= m && ((k = 0), (x += 1))))
                  : ((k = Math.floor(c / d)), (x = c - k * d));
              v.css(g("margin-top"), k !== 0 ? h && `${h}px` : "");
            },
            updateWrapperSize: (c, v, y) => {
              const {
                  spaceBetween: g,
                  centeredSlides: T,
                  roundLengths: h,
                } = t.params,
                { rows: m } = t.params.grid;
              if (
                ((t.virtualSize = (c + g) * l),
                (t.virtualSize = Math.ceil(t.virtualSize / m) - g),
                t.$wrapperEl.css({ [y("width")]: `${t.virtualSize + g}px` }),
                T)
              ) {
                v.splice(0, v.length);
                const S = [];
                for (let E = 0; E < v.length; E += 1) {
                  let x = v[E];
                  h && (x = Math.floor(x)),
                    v[E] < t.virtualSize + v[0] && S.push(x);
                }
                v.push(...S);
              }
            },
          });
      },
      function ({ swiper: t }) {
        Object.assign(t, {
          appendSlide: ui.bind(t),
          prependSlide: pi.bind(t),
          addSlide: hi.bind(t),
          removeSlide: mi.bind(t),
          removeAllSlides: fi.bind(t),
        });
      },
      function ({ swiper: t, extendParams: o, on: l }) {
        o({ fadeEffect: { crossFade: !1, transformEl: null } }),
          Ue({
            effect: "fade",
            swiper: t,
            on: l,
            setTranslate: () => {
              const { slides: d } = t,
                u = t.params.fadeEffect;
              for (let c = 0; c < d.length; c += 1) {
                const v = t.slides.eq(c);
                let y = -v[0].swiperSlideOffset;
                t.params.virtualTranslate || (y -= t.translate);
                let g = 0;
                t.isHorizontal() || ((g = y), (y = 0));
                const T = t.params.fadeEffect.crossFade
                  ? Math.max(1 - Math.abs(v[0].progress), 0)
                  : 1 + Math.min(Math.max(v[0].progress, -1), 0);
                at(u, v)
                  .css({ opacity: T })
                  .transform(`translate3d(${y}px, ${g}px, 0px)`);
              }
            },
            setTransition: (d) => {
              const { transformEl: u } = t.params.fadeEffect;
              (u ? t.slides.find(u) : t.slides).transition(d),
                wt({ swiper: t, duration: d, transformEl: u, allSlides: !0 });
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
      function ({ swiper: t, extendParams: o, on: l }) {
        o({
          cubeEffect: {
            slideShadows: !0,
            shadow: !0,
            shadowOffset: 20,
            shadowScale: 0.94,
          },
        }),
          Ue({
            effect: "cube",
            swiper: t,
            on: l,
            setTranslate: () => {
              const {
                  $el: d,
                  $wrapperEl: u,
                  slides: c,
                  width: v,
                  height: y,
                  rtlTranslate: g,
                  size: T,
                  browser: h,
                } = t,
                m = t.params.cubeEffect,
                S = t.isHorizontal(),
                E = t.virtual && t.params.virtual.enabled;
              let x,
                k = 0;
              m.shadow &&
                (S
                  ? ((x = u.find(".swiper-cube-shadow")),
                    x.length === 0 &&
                      ((x = f('<div class="swiper-cube-shadow"></div>')),
                      u.append(x)),
                    x.css({ height: `${v}px` }))
                  : ((x = d.find(".swiper-cube-shadow")),
                    x.length === 0 &&
                      ((x = f('<div class="swiper-cube-shadow"></div>')),
                      d.append(x))));
              for (let P = 0; P < c.length; P += 1) {
                const _ = c.eq(P);
                let N = P;
                E && (N = parseInt(_.attr("data-swiper-slide-index"), 10));
                let F = 90 * N,
                  Y = Math.floor(F / 360);
                g && ((F = -F), (Y = Math.floor(-F / 360)));
                const j = Math.max(Math.min(_[0].progress, 1), -1);
                let W = 0,
                  X = 0,
                  V = 0;
                N % 4 == 0
                  ? ((W = 4 * -Y * T), (V = 0))
                  : (N - 1) % 4 == 0
                  ? ((W = 0), (V = 4 * -Y * T))
                  : (N - 2) % 4 == 0
                  ? ((W = T + 4 * Y * T), (V = T))
                  : (N - 3) % 4 == 0 && ((W = -T), (V = 3 * T + 4 * T * Y)),
                  g && (W = -W),
                  S || ((X = W), (W = 0));
                const q = `rotateX(${S ? 0 : -F}deg) rotateY(${
                  S ? F : 0
                }deg) translate3d(${W}px, ${X}px, ${V}px)`;
                if (
                  (j <= 1 &&
                    j > -1 &&
                    ((k = 90 * N + 90 * j), g && (k = 90 * -N - 90 * j)),
                  _.transform(q),
                  m.slideShadows)
                ) {
                  let G = S
                      ? _.find(".swiper-slide-shadow-left")
                      : _.find(".swiper-slide-shadow-top"),
                    Z = S
                      ? _.find(".swiper-slide-shadow-right")
                      : _.find(".swiper-slide-shadow-bottom");
                  G.length === 0 &&
                    ((G = f(
                      `<div class="swiper-slide-shadow-${
                        S ? "left" : "top"
                      }"></div>`
                    )),
                    _.append(G)),
                    Z.length === 0 &&
                      ((Z = f(
                        `<div class="swiper-slide-shadow-${
                          S ? "right" : "bottom"
                        }"></div>`
                      )),
                      _.append(Z)),
                    G.length && (G[0].style.opacity = Math.max(-j, 0)),
                    Z.length && (Z[0].style.opacity = Math.max(j, 0));
                }
              }
              if (
                (u.css({
                  "-webkit-transform-origin": `50% 50% -${T / 2}px`,
                  "transform-origin": `50% 50% -${T / 2}px`,
                }),
                m.shadow)
              )
                if (S)
                  x.transform(
                    `translate3d(0px, ${v / 2 + m.shadowOffset}px, ${
                      -v / 2
                    }px) rotateX(90deg) rotateZ(0deg) scale(${m.shadowScale})`
                  );
                else {
                  const P = Math.abs(k) - 90 * Math.floor(Math.abs(k) / 90),
                    _ =
                      1.5 -
                      (Math.sin((2 * P * Math.PI) / 360) / 2 +
                        Math.cos((2 * P * Math.PI) / 360) / 2),
                    N = m.shadowScale,
                    F = m.shadowScale / _,
                    Y = m.shadowOffset;
                  x.transform(
                    `scale3d(${N}, 1, ${F}) translate3d(0px, ${y / 2 + Y}px, ${
                      -y / 2 / F
                    }px) rotateX(-90deg)`
                  );
                }
              const D = h.isSafari || h.isWebView ? -T / 2 : 0;
              u.transform(
                `translate3d(0px,0,${D}px) rotateX(${
                  t.isHorizontal() ? 0 : k
                }deg) rotateY(${t.isHorizontal() ? -k : 0}deg)`
              );
            },
            setTransition: (d) => {
              const { $el: u, slides: c } = t;
              c
                .transition(d)
                .find(
                  ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
                )
                .transition(d),
                t.params.cubeEffect.shadow &&
                  !t.isHorizontal() &&
                  u.find(".swiper-cube-shadow").transition(d);
            },
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
      function ({ swiper: t, extendParams: o, on: l }) {
        o({
          flipEffect: {
            slideShadows: !0,
            limitRotation: !0,
            transformEl: null,
          },
        }),
          Ue({
            effect: "flip",
            swiper: t,
            on: l,
            setTranslate: () => {
              const { slides: d, rtlTranslate: u } = t,
                c = t.params.flipEffect;
              for (let v = 0; v < d.length; v += 1) {
                const y = d.eq(v);
                let g = y[0].progress;
                t.params.flipEffect.limitRotation &&
                  (g = Math.max(Math.min(y[0].progress, 1), -1));
                const T = y[0].swiperSlideOffset;
                let h = -180 * g,
                  m = 0,
                  S = t.params.cssMode ? -T - t.translate : -T,
                  E = 0;
                if (
                  (t.isHorizontal()
                    ? u && (h = -h)
                    : ((E = S), (S = 0), (m = -h), (h = 0)),
                  (y[0].style.zIndex = -Math.abs(Math.round(g)) + d.length),
                  c.slideShadows)
                ) {
                  let k = t.isHorizontal()
                      ? y.find(".swiper-slide-shadow-left")
                      : y.find(".swiper-slide-shadow-top"),
                    D = t.isHorizontal()
                      ? y.find(".swiper-slide-shadow-right")
                      : y.find(".swiper-slide-shadow-bottom");
                  k.length === 0 &&
                    (k = Ke(c, y, t.isHorizontal() ? "left" : "top")),
                    D.length === 0 &&
                      (D = Ke(c, y, t.isHorizontal() ? "right" : "bottom")),
                    k.length && (k[0].style.opacity = Math.max(-g, 0)),
                    D.length && (D[0].style.opacity = Math.max(g, 0));
                }
                const x = `translate3d(${S}px, ${E}px, 0px) rotateX(${m}deg) rotateY(${h}deg)`;
                at(c, y).transform(x);
              }
            },
            setTransition: (d) => {
              const { transformEl: u } = t.params.flipEffect;
              (u ? t.slides.find(u) : t.slides)
                .transition(d)
                .find(
                  ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
                )
                .transition(d),
                wt({ swiper: t, duration: d, transformEl: u });
            },
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
      function ({ swiper: t, extendParams: o, on: l }) {
        o({
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
          Ue({
            effect: "coverflow",
            swiper: t,
            on: l,
            setTranslate: () => {
              const { width: d, height: u, slides: c, slidesSizesGrid: v } = t,
                y = t.params.coverflowEffect,
                g = t.isHorizontal(),
                T = t.translate,
                h = g ? d / 2 - T : u / 2 - T,
                m = g ? y.rotate : -y.rotate,
                S = y.depth;
              for (let E = 0, x = c.length; E < x; E += 1) {
                const k = c.eq(E),
                  D = v[E],
                  P = ((h - k[0].swiperSlideOffset - D / 2) / D) * y.modifier;
                let _ = g ? m * P : 0,
                  N = g ? 0 : m * P,
                  F = -S * Math.abs(P),
                  Y = y.stretch;
                typeof Y == "string" &&
                  Y.indexOf("%") !== -1 &&
                  (Y = (parseFloat(y.stretch) / 100) * D);
                let j = g ? 0 : Y * P,
                  W = g ? Y * P : 0,
                  X = 1 - (1 - y.scale) * Math.abs(P);
                Math.abs(W) < 0.001 && (W = 0),
                  Math.abs(j) < 0.001 && (j = 0),
                  Math.abs(F) < 0.001 && (F = 0),
                  Math.abs(_) < 0.001 && (_ = 0),
                  Math.abs(N) < 0.001 && (N = 0),
                  Math.abs(X) < 0.001 && (X = 0);
                const V = `translate3d(${W}px,${j}px,${F}px)  rotateX(${N}deg) rotateY(${_}deg) scale(${X})`;
                if (
                  (at(y, k).transform(V),
                  (k[0].style.zIndex = 1 - Math.abs(Math.round(P))),
                  y.slideShadows)
                ) {
                  let q = g
                      ? k.find(".swiper-slide-shadow-left")
                      : k.find(".swiper-slide-shadow-top"),
                    G = g
                      ? k.find(".swiper-slide-shadow-right")
                      : k.find(".swiper-slide-shadow-bottom");
                  q.length === 0 && (q = Ke(y, k, g ? "left" : "top")),
                    G.length === 0 && (G = Ke(y, k, g ? "right" : "bottom")),
                    q.length && (q[0].style.opacity = P > 0 ? P : 0),
                    G.length && (G[0].style.opacity = -P > 0 ? -P : 0);
                }
              }
            },
            setTransition: (d) => {
              const { transformEl: u } = t.params.coverflowEffect;
              (u ? t.slides.find(u) : t.slides)
                .transition(d)
                .find(
                  ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
                )
                .transition(d);
            },
            perspective: () => !0,
            overwriteParams: () => ({ watchSlidesProgress: !0 }),
          });
      },
      function ({ swiper: t, extendParams: o, on: l }) {
        o({
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
        const d = (u) => (typeof u == "string" ? u : `${u}px`);
        Ue({
          effect: "creative",
          swiper: t,
          on: l,
          setTranslate: () => {
            const { slides: u } = t,
              c = t.params.creativeEffect,
              { progressMultiplier: v } = c;
            for (let y = 0; y < u.length; y += 1) {
              const g = u.eq(y),
                T = g[0].progress,
                h = Math.min(
                  Math.max(g[0].progress, -c.limitProgress),
                  c.limitProgress
                ),
                m = g[0].swiperSlideOffset,
                S = [t.params.cssMode ? -m - t.translate : -m, 0, 0],
                E = [0, 0, 0];
              let x = !1;
              t.isHorizontal() || ((S[1] = S[0]), (S[0] = 0));
              let k = {
                translate: [0, 0, 0],
                rotate: [0, 0, 0],
                scale: 1,
                opacity: 1,
              };
              h < 0
                ? ((k = c.next), (x = !0))
                : h > 0 && ((k = c.prev), (x = !0)),
                S.forEach((j, W) => {
                  S[W] = `calc(${j}px + (${d(k.translate[W])} * ${Math.abs(
                    h * v
                  )}))`;
                }),
                E.forEach((j, W) => {
                  E[W] = k.rotate[W] * Math.abs(h * v);
                }),
                (g[0].style.zIndex = -Math.abs(Math.round(T)) + u.length);
              const D = S.join(", "),
                P = `rotateX(${E[0]}deg) rotateY(${E[1]}deg) rotateZ(${E[2]}deg)`,
                _ =
                  h < 0
                    ? `scale(${1 + (1 - k.scale) * h * v})`
                    : `scale(${1 - (1 - k.scale) * h * v})`,
                N =
                  h < 0
                    ? 1 + (1 - k.opacity) * h * v
                    : 1 - (1 - k.opacity) * h * v,
                F = `translate3d(${D}) ${P} ${_}`;
              if ((x && k.shadow) || !x) {
                let j = g.children(".swiper-slide-shadow");
                if ((j.length === 0 && k.shadow && (j = Ke(c, g)), j.length)) {
                  const W = c.shadowPerProgress ? h * (1 / c.limitProgress) : h;
                  j[0].style.opacity = Math.min(Math.max(Math.abs(W), 0), 1);
                }
              }
              const Y = at(c, g);
              Y.transform(F).css({ opacity: N }),
                k.origin && Y.css("transform-origin", k.origin);
            }
          },
          setTransition: (u) => {
            const { transformEl: c } = t.params.creativeEffect;
            (c ? t.slides.find(c) : t.slides)
              .transition(u)
              .find(".swiper-slide-shadow")
              .transition(u),
              wt({ swiper: t, duration: u, transformEl: c, allSlides: !0 });
          },
          perspective: () => t.params.creativeEffect.perspective,
          overwriteParams: () => ({
            watchSlidesProgress: !0,
            virtualTranslate: !t.params.cssMode,
          }),
        });
      },
      function ({ swiper: t, extendParams: o, on: l }) {
        o({ cardsEffect: { slideShadows: !0, transformEl: null } }),
          Ue({
            effect: "cards",
            swiper: t,
            on: l,
            setTranslate: () => {
              const { slides: d, activeIndex: u } = t,
                c = t.params.cardsEffect,
                { startTranslate: v, isTouched: y } = t.touchEventsData,
                g = t.translate;
              for (let T = 0; T < d.length; T += 1) {
                const h = d.eq(T),
                  m = h[0].progress,
                  S = Math.min(Math.max(m, -4), 4);
                let E = h[0].swiperSlideOffset;
                t.params.centeredSlides &&
                  !t.params.cssMode &&
                  t.$wrapperEl.transform(`translateX(${t.minTranslate()}px)`),
                  t.params.centeredSlides &&
                    t.params.cssMode &&
                    (E -= d[0].swiperSlideOffset);
                let x = t.params.cssMode ? -E - t.translate : -E,
                  k = 0;
                const D = -100 * Math.abs(S);
                let P = 1,
                  _ = -2 * S,
                  N = 8 - 0.75 * Math.abs(S);
                const F =
                    (T === u || T === u - 1) &&
                    S > 0 &&
                    S < 1 &&
                    (y || t.params.cssMode) &&
                    g < v,
                  Y =
                    (T === u || T === u + 1) &&
                    S < 0 &&
                    S > -1 &&
                    (y || t.params.cssMode) &&
                    g > v;
                if (F || Y) {
                  const W = (1 - Math.abs((Math.abs(S) - 0.5) / 0.5)) ** 0.5;
                  (_ += -28 * S * W),
                    (P += -0.5 * W),
                    (N += 96 * W),
                    (k = -25 * W * Math.abs(S) + "%");
                }
                if (
                  ((x =
                    S < 0
                      ? `calc(${x}px + (${N * Math.abs(S)}%))`
                      : S > 0
                      ? `calc(${x}px + (-${N * Math.abs(S)}%))`
                      : `${x}px`),
                  !t.isHorizontal())
                ) {
                  const W = k;
                  (k = x), (x = W);
                }
                const j = `
        translate3d(${x}, ${k}, ${D}px)
        rotateZ(${_}deg)
        scale(${S < 0 ? "" + (1 + (1 - P) * S) : "" + (1 - (1 - P) * S)})
      `;
                if (c.slideShadows) {
                  let W = h.find(".swiper-slide-shadow");
                  W.length === 0 && (W = Ke(c, h)),
                    W.length &&
                      (W[0].style.opacity = Math.min(
                        Math.max((Math.abs(S) - 0.5) / 0.5, 0),
                        1
                      ));
                }
                (h[0].style.zIndex = -Math.abs(Math.round(m)) + d.length),
                  at(c, h).transform(j);
              }
            },
            setTransition: (d) => {
              const { transformEl: u } = t.params.cardsEffect;
              (u ? t.slides.find(u) : t.slides)
                .transition(d)
                .find(".swiper-slide-shadow")
                .transition(d),
                wt({ swiper: t, duration: d, transformEl: u });
            },
            perspective: () => !0,
            overwriteParams: () => ({
              watchSlidesProgress: !0,
              virtualTranslate: !t.params.cssMode,
            }),
          });
      },
    ];
    return Le.use(gi), Le;
  });
  const bi = (e) => {
      if (e.target.closest(".but-wave")) {
        let i = e.target.closest(".but-wave"),
          s = Math.max(i.clientWidth, i.clientHeight),
          n = document.createElement("div"),
          a = i.getBoundingClientRect();
        n.classList.add("addDiv"),
          (n.style.width = n.style.height = s + "px"),
          (n.style.left = e.clientX - a.left - s / 2 + "px"),
          (n.style.top = e.clientY - a.top - s / 2 + "px"),
          i.closest(".but-wave").append(n),
          setTimeout(() => {
            n.remove();
          }, 1e3);
      }
    },
    yi = () => {
      const e = document.querySelectorAll("img.lazy"),
        i = { root: null, rootMargin: "5px", threshold: 0.1 },
        s = new IntersectionObserver((n, a) => {
          n.forEach((r) => {
            if (r.isIntersecting) {
              const p = r.target;
              (p.src = p.dataset.src),
                p.classList.remove("lazy"),
                a.unobserve(p);
            }
          });
        }, i);
      e.forEach((n) => {
        s.observe(n);
      });
    },
    wi = (e) => {
      e.addEventListener("change", function () {
        const i = document.getElementById("languageForm"),
          s = new FormData(i),
          n = new URLSearchParams(s).toString();
        history.pushState(null, "", `?${n.toString()}`),
          fetch(i.action + "?" + n)
            .then((a) => {
              if (a.ok) return a.text();
              throw new Error("Network response was not ok.");
            })
            .then((a) => {
              console.log("Success:");
            })
            .catch((a) => {
              console.error("error:", a);
            });
      });
    },
    Si = () => {
      const e = document.querySelector("header"),
        i = e.querySelector(".menu"),
        s = e.querySelector(".info"),
        n = e.querySelector(".burger"),
        a = e.querySelector(".header__body"),
        r = e.querySelector("#languageForm"),
        p = e.querySelector(".search"),
        b = document.querySelector("body"),
        w = (f) => {
          var $ = f.target.closest(".menu__link");
          [...document.querySelectorAll(".menu__link ")].forEach((A) => {
            $ == A
              ? A.classList.add("menu__link--active")
              : A.classList.remove("menu__link--active");
          });
        };
      document.addEventListener("click", function (f) {
        f.target.closest(".burger") &&
          (n.classList.contains("_is-active")
            ? (i.classList.remove("menu-active"), b.classList.remove("lock"))
            : (i.classList.add("menu-active"), b.classList.add("lock")),
          n.classList.toggle("_is-active")),
          f.target.closest(".menu__link") && w(f);
      }),
        window.innerWidth <= 1510 &&
          (i.append(s), p !== null && i.append(p), i.append(r)),
        window.addEventListener("resize", function () {
          window.innerWidth <= 1035 &&
            (i.append(s), p !== null && i.append(p), i.append(r)),
            window.innerWidth > 1035 &&
              (a.append(r), a.append(s), p !== null && a.append(p)),
            window.innerWidth >= 1510 &&
              (n.classList.remove("_is-active"),
              i.classList.remove("menu-active"));
        }),
        window.pageYOffset > 100 && e.classList.add("responciveHeader"),
        window.addEventListener("scroll", function (f) {
          window.pageYOffset > 100
            ? (e.classList.add("responciveHeader"), (i.style = "top:67px"))
            : (e.classList.remove("responciveHeader"), (i.style = "top:77px"));
        });
    };
  function vs(e) {
    return (
      e !== null &&
      typeof e == "object" &&
      "constructor" in e &&
      e.constructor === Object
    );
  }
  function os(e = {}, i = {}) {
    Object.keys(i).forEach((s) => {
      typeof e[s] > "u"
        ? (e[s] = i[s])
        : vs(i[s]) &&
          vs(e[s]) &&
          Object.keys(i[s]).length > 0 &&
          os(e[s], i[s]);
    });
  }
  const Is = {
    body: {},
    addEventListener() {},
    removeEventListener() {},
    activeElement: { blur() {}, nodeName: "" },
    querySelector() {
      return null;
    },
    querySelectorAll() {
      return [];
    },
    getElementById() {
      return null;
    },
    createEvent() {
      return { initEvent() {} };
    },
    createElement() {
      return {
        children: [],
        childNodes: [],
        style: {},
        setAttribute() {},
        getElementsByTagName() {
          return [];
        },
      };
    },
    createElementNS() {
      return {};
    },
    importNode() {
      return null;
    },
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
  function Pe() {
    const e = typeof document < "u" ? document : {};
    return os(e, Is), e;
  }
  const Ei = {
    document: Is,
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
    getComputedStyle() {
      return {
        getPropertyValue() {
          return "";
        },
      };
    },
    Image() {},
    Date() {},
    screen: {},
    setTimeout() {},
    clearTimeout() {},
    matchMedia() {
      return {};
    },
    requestAnimationFrame(e) {
      return typeof setTimeout > "u" ? (e(), null) : setTimeout(e, 0);
    },
    cancelAnimationFrame(e) {
      typeof setTimeout > "u" || clearTimeout(e);
    },
  };
  function $e() {
    const e = typeof window < "u" ? window : {};
    return os(e, Ei), e;
  }
  function Ci(e) {
    const i = e.__proto__;
    Object.defineProperty(e, "__proto__", {
      get() {
        return i;
      },
      set(s) {
        i.__proto__ = s;
      },
    });
  }
  class Re extends Array {
    constructor(i) {
      typeof i == "number" ? super(i) : (super(...(i || [])), Ci(this));
    }
  }
  function mt(e = []) {
    const i = [];
    return (
      e.forEach((s) => {
        Array.isArray(s) ? i.push(...mt(s)) : i.push(s);
      }),
      i
    );
  }
  function Os(e, i) {
    return Array.prototype.filter.call(e, i);
  }
  function xi(e) {
    const i = [];
    for (let s = 0; s < e.length; s += 1)
      i.indexOf(e[s]) === -1 && i.push(e[s]);
    return i;
  }
  function $i(e, i) {
    if (typeof e != "string") return [e];
    const s = [],
      n = i.querySelectorAll(e);
    for (let a = 0; a < n.length; a += 1) s.push(n[a]);
    return s;
  }
  function ee(e, i) {
    const s = $e(),
      n = Pe();
    let a = [];
    if (!i && e instanceof Re) return e;
    if (!e) return new Re(a);
    if (typeof e == "string") {
      const r = e.trim();
      if (r.indexOf("<") >= 0 && r.indexOf(">") >= 0) {
        let p = "div";
        r.indexOf("<li") === 0 && (p = "ul"),
          r.indexOf("<tr") === 0 && (p = "tbody"),
          (r.indexOf("<td") === 0 || r.indexOf("<th") === 0) && (p = "tr"),
          r.indexOf("<tbody") === 0 && (p = "table"),
          r.indexOf("<option") === 0 && (p = "select");
        const b = n.createElement(p);
        b.innerHTML = r;
        for (let w = 0; w < b.childNodes.length; w += 1)
          a.push(b.childNodes[w]);
      } else a = $i(e.trim(), i || n);
    } else if (e.nodeType || e === s || e === n) a.push(e);
    else if (Array.isArray(e)) {
      if (e instanceof Re) return e;
      a = e;
    }
    return new Re(xi(a));
  }
  ee.fn = Re.prototype;
  function ki(...e) {
    const i = mt(e.map((s) => s.split(" ")));
    return (
      this.forEach((s) => {
        s.classList.add(...i);
      }),
      this
    );
  }
  function Mi(...e) {
    const i = mt(e.map((s) => s.split(" ")));
    return (
      this.forEach((s) => {
        s.classList.remove(...i);
      }),
      this
    );
  }
  function Pi(...e) {
    const i = mt(e.map((s) => s.split(" ")));
    this.forEach((s) => {
      i.forEach((n) => {
        s.classList.toggle(n);
      });
    });
  }
  function Li(...e) {
    const i = mt(e.map((s) => s.split(" ")));
    return (
      Os(this, (s) => i.filter((n) => s.classList.contains(n)).length > 0)
        .length > 0
    );
  }
  function Ai(e, i) {
    if (arguments.length === 1 && typeof e == "string")
      return this[0] ? this[0].getAttribute(e) : void 0;
    for (let s = 0; s < this.length; s += 1)
      if (arguments.length === 2) this[s].setAttribute(e, i);
      else
        for (const n in e) (this[s][n] = e[n]), this[s].setAttribute(n, e[n]);
    return this;
  }
  function Ii(e) {
    for (let i = 0; i < this.length; i += 1) this[i].removeAttribute(e);
    return this;
  }
  function Oi(e) {
    for (let i = 0; i < this.length; i += 1) this[i].style.transform = e;
    return this;
  }
  function zi(e) {
    for (let i = 0; i < this.length; i += 1)
      this[i].style.transitionDuration = typeof e != "string" ? `${e}ms` : e;
    return this;
  }
  function Ni(...e) {
    let [i, s, n, a] = e;
    typeof e[1] == "function" && (([i, n, a] = e), (s = void 0)), a || (a = !1);
    function r(f) {
      const $ = f.target;
      if (!$) return;
      const A = f.target.dom7EventData || [];
      if ((A.indexOf(f) < 0 && A.unshift(f), ee($).is(s))) n.apply($, A);
      else {
        const M = ee($).parents();
        for (let z = 0; z < M.length; z += 1)
          ee(M[z]).is(s) && n.apply(M[z], A);
      }
    }
    function p(f) {
      const $ = f && f.target ? f.target.dom7EventData || [] : [];
      $.indexOf(f) < 0 && $.unshift(f), n.apply(this, $);
    }
    const b = i.split(" ");
    let w;
    for (let f = 0; f < this.length; f += 1) {
      const $ = this[f];
      if (s)
        for (w = 0; w < b.length; w += 1) {
          const A = b[w];
          $.dom7LiveListeners || ($.dom7LiveListeners = {}),
            $.dom7LiveListeners[A] || ($.dom7LiveListeners[A] = []),
            $.dom7LiveListeners[A].push({ listener: n, proxyListener: r }),
            $.addEventListener(A, r, a);
        }
      else
        for (w = 0; w < b.length; w += 1) {
          const A = b[w];
          $.dom7Listeners || ($.dom7Listeners = {}),
            $.dom7Listeners[A] || ($.dom7Listeners[A] = []),
            $.dom7Listeners[A].push({ listener: n, proxyListener: p }),
            $.addEventListener(A, p, a);
        }
    }
    return this;
  }
  function _i(...e) {
    let [i, s, n, a] = e;
    typeof e[1] == "function" && (([i, n, a] = e), (s = void 0)), a || (a = !1);
    const r = i.split(" ");
    for (let p = 0; p < r.length; p += 1) {
      const b = r[p];
      for (let w = 0; w < this.length; w += 1) {
        const f = this[w];
        let $;
        if (
          (!s && f.dom7Listeners
            ? ($ = f.dom7Listeners[b])
            : s && f.dom7LiveListeners && ($ = f.dom7LiveListeners[b]),
          $ && $.length)
        )
          for (let A = $.length - 1; A >= 0; A -= 1) {
            const M = $[A];
            (n && M.listener === n) ||
            (n &&
              M.listener &&
              M.listener.dom7proxy &&
              M.listener.dom7proxy === n)
              ? (f.removeEventListener(b, M.proxyListener, a), $.splice(A, 1))
              : n ||
                (f.removeEventListener(b, M.proxyListener, a), $.splice(A, 1));
          }
      }
    }
    return this;
  }
  function Di(...e) {
    const i = $e(),
      s = e[0].split(" "),
      n = e[1];
    for (let a = 0; a < s.length; a += 1) {
      const r = s[a];
      for (let p = 0; p < this.length; p += 1) {
        const b = this[p];
        if (i.CustomEvent) {
          const w = new i.CustomEvent(r, {
            detail: n,
            bubbles: !0,
            cancelable: !0,
          });
          (b.dom7EventData = e.filter((f, $) => $ > 0)),
            b.dispatchEvent(w),
            (b.dom7EventData = []),
            delete b.dom7EventData;
        }
      }
    }
    return this;
  }
  function qi(e) {
    const i = this;
    function s(n) {
      n.target === this && (e.call(this, n), i.off("transitionend", s));
    }
    return e && i.on("transitionend", s), this;
  }
  function Hi(e) {
    if (this.length > 0) {
      if (e) {
        const i = this.styles();
        return (
          this[0].offsetWidth +
          parseFloat(i.getPropertyValue("margin-right")) +
          parseFloat(i.getPropertyValue("margin-left"))
        );
      }
      return this[0].offsetWidth;
    }
    return null;
  }
  function Bi(e) {
    if (this.length > 0) {
      if (e) {
        const i = this.styles();
        return (
          this[0].offsetHeight +
          parseFloat(i.getPropertyValue("margin-top")) +
          parseFloat(i.getPropertyValue("margin-bottom"))
        );
      }
      return this[0].offsetHeight;
    }
    return null;
  }
  function ji() {
    if (this.length > 0) {
      const e = $e(),
        i = Pe(),
        s = this[0],
        n = s.getBoundingClientRect(),
        a = i.body,
        r = s.clientTop || a.clientTop || 0,
        p = s.clientLeft || a.clientLeft || 0,
        b = s === e ? e.scrollY : s.scrollTop,
        w = s === e ? e.scrollX : s.scrollLeft;
      return { top: n.top + b - r, left: n.left + w - p };
    }
    return null;
  }
  function Ri() {
    const e = $e();
    return this[0] ? e.getComputedStyle(this[0], null) : {};
  }
  function Vi(e, i) {
    const s = $e();
    let n;
    if (arguments.length === 1)
      if (typeof e == "string") {
        if (this[0])
          return s.getComputedStyle(this[0], null).getPropertyValue(e);
      } else {
        for (n = 0; n < this.length; n += 1)
          for (const a in e) this[n].style[a] = e[a];
        return this;
      }
    if (arguments.length === 2 && typeof e == "string") {
      for (n = 0; n < this.length; n += 1) this[n].style[e] = i;
      return this;
    }
    return this;
  }
  function Gi(e) {
    return e
      ? (this.forEach((i, s) => {
          e.apply(i, [i, s]);
        }),
        this)
      : this;
  }
  function Fi(e) {
    const i = Os(this, e);
    return ee(i);
  }
  function Wi(e) {
    if (typeof e > "u") return this[0] ? this[0].innerHTML : null;
    for (let i = 0; i < this.length; i += 1) this[i].innerHTML = e;
    return this;
  }
  function Yi(e) {
    if (typeof e > "u") return this[0] ? this[0].textContent.trim() : null;
    for (let i = 0; i < this.length; i += 1) this[i].textContent = e;
    return this;
  }
  function Xi(e) {
    const i = $e(),
      s = Pe(),
      n = this[0];
    let a, r;
    if (!n || typeof e > "u") return !1;
    if (typeof e == "string") {
      if (n.matches) return n.matches(e);
      if (n.webkitMatchesSelector) return n.webkitMatchesSelector(e);
      if (n.msMatchesSelector) return n.msMatchesSelector(e);
      for (a = ee(e), r = 0; r < a.length; r += 1) if (a[r] === n) return !0;
      return !1;
    }
    if (e === s) return n === s;
    if (e === i) return n === i;
    if (e.nodeType || e instanceof Re) {
      for (a = e.nodeType ? [e] : e, r = 0; r < a.length; r += 1)
        if (a[r] === n) return !0;
      return !1;
    }
    return !1;
  }
  function Ui() {
    let e = this[0],
      i;
    if (e) {
      for (i = 0; (e = e.previousSibling) !== null; )
        e.nodeType === 1 && (i += 1);
      return i;
    }
  }
  function Ki(e) {
    if (typeof e > "u") return this;
    const i = this.length;
    if (e > i - 1) return ee([]);
    if (e < 0) {
      const s = i + e;
      return s < 0 ? ee([]) : ee([this[s]]);
    }
    return ee([this[e]]);
  }
  function Qi(...e) {
    let i;
    const s = Pe();
    for (let n = 0; n < e.length; n += 1) {
      i = e[n];
      for (let a = 0; a < this.length; a += 1)
        if (typeof i == "string") {
          const r = s.createElement("div");
          for (r.innerHTML = i; r.firstChild; )
            this[a].appendChild(r.firstChild);
        } else if (i instanceof Re)
          for (let r = 0; r < i.length; r += 1) this[a].appendChild(i[r]);
        else this[a].appendChild(i);
    }
    return this;
  }
  function Ji(e) {
    const i = Pe();
    let s, n;
    for (s = 0; s < this.length; s += 1)
      if (typeof e == "string") {
        const a = i.createElement("div");
        for (a.innerHTML = e, n = a.childNodes.length - 1; n >= 0; n -= 1)
          this[s].insertBefore(a.childNodes[n], this[s].childNodes[0]);
      } else if (e instanceof Re)
        for (n = 0; n < e.length; n += 1)
          this[s].insertBefore(e[n], this[s].childNodes[0]);
      else this[s].insertBefore(e, this[s].childNodes[0]);
    return this;
  }
  function Zi(e) {
    return this.length > 0
      ? e
        ? this[0].nextElementSibling && ee(this[0].nextElementSibling).is(e)
          ? ee([this[0].nextElementSibling])
          : ee([])
        : this[0].nextElementSibling
        ? ee([this[0].nextElementSibling])
        : ee([])
      : ee([]);
  }
  function en(e) {
    const i = [];
    let s = this[0];
    if (!s) return ee([]);
    for (; s.nextElementSibling; ) {
      const n = s.nextElementSibling;
      e ? ee(n).is(e) && i.push(n) : i.push(n), (s = n);
    }
    return ee(i);
  }
  function tn(e) {
    if (this.length > 0) {
      const i = this[0];
      return e
        ? i.previousElementSibling && ee(i.previousElementSibling).is(e)
          ? ee([i.previousElementSibling])
          : ee([])
        : i.previousElementSibling
        ? ee([i.previousElementSibling])
        : ee([]);
    }
    return ee([]);
  }
  function sn(e) {
    const i = [];
    let s = this[0];
    if (!s) return ee([]);
    for (; s.previousElementSibling; ) {
      const n = s.previousElementSibling;
      e ? ee(n).is(e) && i.push(n) : i.push(n), (s = n);
    }
    return ee(i);
  }
  function nn(e) {
    const i = [];
    for (let s = 0; s < this.length; s += 1)
      this[s].parentNode !== null &&
        (e
          ? ee(this[s].parentNode).is(e) && i.push(this[s].parentNode)
          : i.push(this[s].parentNode));
    return ee(i);
  }
  function an(e) {
    const i = [];
    for (let s = 0; s < this.length; s += 1) {
      let n = this[s].parentNode;
      for (; n; ) e ? ee(n).is(e) && i.push(n) : i.push(n), (n = n.parentNode);
    }
    return ee(i);
  }
  function rn(e) {
    let i = this;
    return typeof e > "u" ? ee([]) : (i.is(e) || (i = i.parents(e).eq(0)), i);
  }
  function ln(e) {
    const i = [];
    for (let s = 0; s < this.length; s += 1) {
      const n = this[s].querySelectorAll(e);
      for (let a = 0; a < n.length; a += 1) i.push(n[a]);
    }
    return ee(i);
  }
  function on(e) {
    const i = [];
    for (let s = 0; s < this.length; s += 1) {
      const n = this[s].children;
      for (let a = 0; a < n.length; a += 1)
        (!e || ee(n[a]).is(e)) && i.push(n[a]);
    }
    return ee(i);
  }
  function dn() {
    for (let e = 0; e < this.length; e += 1)
      this[e].parentNode && this[e].parentNode.removeChild(this[e]);
    return this;
  }
  const bs = {
    addClass: ki,
    removeClass: Mi,
    hasClass: Li,
    toggleClass: Pi,
    attr: Ai,
    removeAttr: Ii,
    transform: Oi,
    transition: zi,
    on: Ni,
    off: _i,
    trigger: Di,
    transitionEnd: qi,
    outerWidth: Hi,
    outerHeight: Bi,
    styles: Ri,
    offset: ji,
    css: Vi,
    each: Gi,
    html: Wi,
    text: Yi,
    is: Xi,
    index: Ui,
    eq: Ki,
    append: Qi,
    prepend: Ji,
    next: Zi,
    nextAll: en,
    prev: tn,
    prevAll: sn,
    parent: nn,
    parents: an,
    closest: rn,
    find: ln,
    children: on,
    filter: Fi,
    remove: dn,
  };
  Object.keys(bs).forEach((e) => {
    Object.defineProperty(ee.fn, e, { value: bs[e], writable: !0 });
  });
  function cn(e) {
    const i = e;
    Object.keys(i).forEach((s) => {
      try {
        i[s] = null;
      } catch {}
      try {
        delete i[s];
      } catch {}
    });
  }
  function Zt(e, i = 0) {
    return setTimeout(e, i);
  }
  function dt() {
    return Date.now();
  }
  function un(e) {
    const i = $e();
    let s;
    return (
      i.getComputedStyle && (s = i.getComputedStyle(e, null)),
      !s && e.currentStyle && (s = e.currentStyle),
      s || (s = e.style),
      s
    );
  }
  function pn(e, i = "x") {
    const s = $e();
    let n, a, r;
    const p = un(e);
    return (
      s.WebKitCSSMatrix
        ? ((a = p.transform || p.webkitTransform),
          a.split(",").length > 6 &&
            (a = a
              .split(", ")
              .map((b) => b.replace(",", "."))
              .join(", ")),
          (r = new s.WebKitCSSMatrix(a === "none" ? "" : a)))
        : ((r =
            p.MozTransform ||
            p.OTransform ||
            p.MsTransform ||
            p.msTransform ||
            p.transform ||
            p
              .getPropertyValue("transform")
              .replace("translate(", "matrix(1, 0, 0, 1,")),
          (n = r.toString().split(","))),
      i === "x" &&
        (s.WebKitCSSMatrix
          ? (a = r.m41)
          : n.length === 16
          ? (a = parseFloat(n[12]))
          : (a = parseFloat(n[4]))),
      i === "y" &&
        (s.WebKitCSSMatrix
          ? (a = r.m42)
          : n.length === 16
          ? (a = parseFloat(n[13]))
          : (a = parseFloat(n[5]))),
      a || 0
    );
  }
  function Ct(e) {
    return (
      typeof e == "object" &&
      e !== null &&
      e.constructor &&
      Object.prototype.toString.call(e).slice(8, -1) === "Object"
    );
  }
  function hn(e) {
    return typeof window < "u" && typeof window.HTMLElement < "u"
      ? e instanceof HTMLElement
      : e && (e.nodeType === 1 || e.nodeType === 11);
  }
  function Ae(...e) {
    const i = Object(e[0]),
      s = ["__proto__", "constructor", "prototype"];
    for (let n = 1; n < e.length; n += 1) {
      const a = e[n];
      if (a != null && !hn(a)) {
        const r = Object.keys(Object(a)).filter((p) => s.indexOf(p) < 0);
        for (let p = 0, b = r.length; p < b; p += 1) {
          const w = r[p],
            f = Object.getOwnPropertyDescriptor(a, w);
          f !== void 0 &&
            f.enumerable &&
            (Ct(i[w]) && Ct(a[w])
              ? a[w].__swiper__
                ? (i[w] = a[w])
                : Ae(i[w], a[w])
              : !Ct(i[w]) && Ct(a[w])
              ? ((i[w] = {}), a[w].__swiper__ ? (i[w] = a[w]) : Ae(i[w], a[w]))
              : (i[w] = a[w]));
        }
      }
    }
    return i;
  }
  function xt(e, i, s) {
    e.style.setProperty(i, s);
  }
  function zs({ swiper: e, targetPosition: i, side: s }) {
    const n = $e(),
      a = -e.translate;
    let r = null,
      p;
    const b = e.params.speed;
    (e.wrapperEl.style.scrollSnapType = "none"),
      n.cancelAnimationFrame(e.cssModeFrameID);
    const w = i > a ? "next" : "prev",
      f = (A, M) => (w === "next" && A >= M) || (w === "prev" && A <= M),
      $ = () => {
        (p = new Date().getTime()), r === null && (r = p);
        const A = Math.max(Math.min((p - r) / b, 1), 0),
          M = 0.5 - Math.cos(A * Math.PI) / 2;
        let z = a + M * (i - a);
        if ((f(z, i) && (z = i), e.wrapperEl.scrollTo({ [s]: z }), f(z, i))) {
          (e.wrapperEl.style.overflow = "hidden"),
            (e.wrapperEl.style.scrollSnapType = ""),
            setTimeout(() => {
              (e.wrapperEl.style.overflow = ""),
                e.wrapperEl.scrollTo({ [s]: z });
            }),
            n.cancelAnimationFrame(e.cssModeFrameID);
          return;
        }
        e.cssModeFrameID = n.requestAnimationFrame($);
      };
    $();
  }
  let Gt;
  function mn() {
    const e = $e(),
      i = Pe();
    return {
      smoothScroll:
        i.documentElement && "scrollBehavior" in i.documentElement.style,
      touch: !!(
        "ontouchstart" in e ||
        (e.DocumentTouch && i instanceof e.DocumentTouch)
      ),
      passiveListener: (function () {
        let n = !1;
        try {
          const a = Object.defineProperty({}, "passive", {
            get() {
              n = !0;
            },
          });
          e.addEventListener("testPassiveListener", null, a);
        } catch {}
        return n;
      })(),
      gestures: (function () {
        return "ongesturestart" in e;
      })(),
    };
  }
  function Ns() {
    return Gt || (Gt = mn()), Gt;
  }
  let Ft;
  function fn({ userAgent: e } = {}) {
    const i = Ns(),
      s = $e(),
      n = s.navigator.platform,
      a = e || s.navigator.userAgent,
      r = { ios: !1, android: !1 },
      p = s.screen.width,
      b = s.screen.height,
      w = a.match(/(Android);?[\s\/]+([\d.]+)?/);
    let f = a.match(/(iPad).*OS\s([\d_]+)/);
    const $ = a.match(/(iPod)(.*OS\s([\d_]+))?/),
      A = !f && a.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
      M = n === "Win32";
    let z = n === "MacIntel";
    const H = [
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
    ];
    return (
      !f &&
        z &&
        i.touch &&
        H.indexOf(`${p}x${b}`) >= 0 &&
        ((f = a.match(/(Version)\/([\d.]+)/)),
        f || (f = [0, 1, "13_0_0"]),
        (z = !1)),
      w && !M && ((r.os = "android"), (r.android = !0)),
      (f || A || $) && ((r.os = "ios"), (r.ios = !0)),
      r
    );
  }
  function gn(e = {}) {
    return Ft || (Ft = fn(e)), Ft;
  }
  let Wt;
  function vn() {
    const e = $e();
    function i() {
      const s = e.navigator.userAgent.toLowerCase();
      return (
        s.indexOf("safari") >= 0 &&
        s.indexOf("chrome") < 0 &&
        s.indexOf("android") < 0
      );
    }
    return {
      isSafari: i(),
      isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
        e.navigator.userAgent
      ),
    };
  }
  function bn() {
    return Wt || (Wt = vn()), Wt;
  }
  function yn({ swiper: e, on: i, emit: s }) {
    const n = $e();
    let a = null,
      r = null;
    const p = () => {
        !e || e.destroyed || !e.initialized || (s("beforeResize"), s("resize"));
      },
      b = () => {
        !e ||
          e.destroyed ||
          !e.initialized ||
          ((a = new ResizeObserver(($) => {
            r = n.requestAnimationFrame(() => {
              const { width: A, height: M } = e;
              let z = A,
                H = M;
              $.forEach(({ contentBoxSize: L, contentRect: I, target: B }) => {
                (B && B !== e.el) ||
                  ((z = I ? I.width : (L[0] || L).inlineSize),
                  (H = I ? I.height : (L[0] || L).blockSize));
              }),
                (z !== A || H !== M) && p();
            });
          })),
          a.observe(e.el));
      },
      w = () => {
        r && n.cancelAnimationFrame(r),
          a && a.unobserve && e.el && (a.unobserve(e.el), (a = null));
      },
      f = () => {
        !e || e.destroyed || !e.initialized || s("orientationchange");
      };
    i("init", () => {
      if (e.params.resizeObserver && typeof n.ResizeObserver < "u") {
        b();
        return;
      }
      n.addEventListener("resize", p),
        n.addEventListener("orientationchange", f);
    }),
      i("destroy", () => {
        w(),
          n.removeEventListener("resize", p),
          n.removeEventListener("orientationchange", f);
      });
  }
  function wn({ swiper: e, extendParams: i, on: s, emit: n }) {
    const a = [],
      r = $e(),
      p = (f, $ = {}) => {
        const A = r.MutationObserver || r.WebkitMutationObserver,
          M = new A((z) => {
            if (z.length === 1) {
              n("observerUpdate", z[0]);
              return;
            }
            const H = function () {
              n("observerUpdate", z[0]);
            };
            r.requestAnimationFrame
              ? r.requestAnimationFrame(H)
              : r.setTimeout(H, 0);
          });
        M.observe(f, {
          attributes: typeof $.attributes > "u" ? !0 : $.attributes,
          childList: typeof $.childList > "u" ? !0 : $.childList,
          characterData: typeof $.characterData > "u" ? !0 : $.characterData,
        }),
          a.push(M);
      },
      b = () => {
        if (e.params.observer) {
          if (e.params.observeParents) {
            const f = e.$el.parents();
            for (let $ = 0; $ < f.length; $ += 1) p(f[$]);
          }
          p(e.$el[0], { childList: e.params.observeSlideChildren }),
            p(e.$wrapperEl[0], { attributes: !1 });
        }
      },
      w = () => {
        a.forEach((f) => {
          f.disconnect();
        }),
          a.splice(0, a.length);
      };
    i({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
      s("init", b),
      s("destroy", w);
  }
  const Tn = {
    on(e, i, s) {
      const n = this;
      if (!n.eventsListeners || n.destroyed || typeof i != "function") return n;
      const a = s ? "unshift" : "push";
      return (
        e.split(" ").forEach((r) => {
          n.eventsListeners[r] || (n.eventsListeners[r] = []),
            n.eventsListeners[r][a](i);
        }),
        n
      );
    },
    once(e, i, s) {
      const n = this;
      if (!n.eventsListeners || n.destroyed || typeof i != "function") return n;
      function a(...r) {
        n.off(e, a), a.__emitterProxy && delete a.__emitterProxy, i.apply(n, r);
      }
      return (a.__emitterProxy = i), n.on(e, a, s);
    },
    onAny(e, i) {
      const s = this;
      if (!s.eventsListeners || s.destroyed || typeof e != "function") return s;
      const n = i ? "unshift" : "push";
      return (
        s.eventsAnyListeners.indexOf(e) < 0 && s.eventsAnyListeners[n](e), s
      );
    },
    offAny(e) {
      const i = this;
      if (!i.eventsListeners || i.destroyed || !i.eventsAnyListeners) return i;
      const s = i.eventsAnyListeners.indexOf(e);
      return s >= 0 && i.eventsAnyListeners.splice(s, 1), i;
    },
    off(e, i) {
      const s = this;
      return (
        !s.eventsListeners ||
          s.destroyed ||
          !s.eventsListeners ||
          e.split(" ").forEach((n) => {
            typeof i > "u"
              ? (s.eventsListeners[n] = [])
              : s.eventsListeners[n] &&
                s.eventsListeners[n].forEach((a, r) => {
                  (a === i || (a.__emitterProxy && a.__emitterProxy === i)) &&
                    s.eventsListeners[n].splice(r, 1);
                });
          }),
        s
      );
    },
    emit(...e) {
      const i = this;
      if (!i.eventsListeners || i.destroyed || !i.eventsListeners) return i;
      let s, n, a;
      return (
        typeof e[0] == "string" || Array.isArray(e[0])
          ? ((s = e[0]), (n = e.slice(1, e.length)), (a = i))
          : ((s = e[0].events), (n = e[0].data), (a = e[0].context || i)),
        n.unshift(a),
        (Array.isArray(s) ? s : s.split(" ")).forEach((p) => {
          i.eventsAnyListeners &&
            i.eventsAnyListeners.length &&
            i.eventsAnyListeners.forEach((b) => {
              b.apply(a, [p, ...n]);
            }),
            i.eventsListeners &&
              i.eventsListeners[p] &&
              i.eventsListeners[p].forEach((b) => {
                b.apply(a, n);
              });
        }),
        i
      );
    },
  };
  function Sn() {
    const e = this;
    let i, s;
    const n = e.$el;
    typeof e.params.width < "u" && e.params.width !== null
      ? (i = e.params.width)
      : (i = n[0].clientWidth),
      typeof e.params.height < "u" && e.params.height !== null
        ? (s = e.params.height)
        : (s = n[0].clientHeight),
      !((i === 0 && e.isHorizontal()) || (s === 0 && e.isVertical())) &&
        ((i =
          i -
          parseInt(n.css("padding-left") || 0, 10) -
          parseInt(n.css("padding-right") || 0, 10)),
        (s =
          s -
          parseInt(n.css("padding-top") || 0, 10) -
          parseInt(n.css("padding-bottom") || 0, 10)),
        Number.isNaN(i) && (i = 0),
        Number.isNaN(s) && (s = 0),
        Object.assign(e, {
          width: i,
          height: s,
          size: e.isHorizontal() ? i : s,
        }));
  }
  function En() {
    const e = this;
    function i(ne) {
      return e.isHorizontal()
        ? ne
        : {
            width: "height",
            "margin-top": "margin-left",
            "margin-bottom ": "margin-right",
            "margin-left": "margin-top",
            "margin-right": "margin-bottom",
            "padding-left": "padding-top",
            "padding-right": "padding-bottom",
            marginRight: "marginBottom",
          }[ne];
    }
    function s(ne, oe) {
      return parseFloat(ne.getPropertyValue(i(oe)) || 0);
    }
    const n = e.params,
      { $wrapperEl: a, size: r, rtlTranslate: p, wrongRTL: b } = e,
      w = e.virtual && n.virtual.enabled,
      f = w ? e.virtual.slides.length : e.slides.length,
      $ = a.children(`.${e.params.slideClass}`),
      A = w ? e.virtual.slides.length : $.length;
    let M = [];
    const z = [],
      H = [];
    let L = n.slidesOffsetBefore;
    typeof L == "function" && (L = n.slidesOffsetBefore.call(e));
    let I = n.slidesOffsetAfter;
    typeof I == "function" && (I = n.slidesOffsetAfter.call(e));
    const B = e.snapGrid.length,
      O = e.slidesGrid.length;
    let R = n.spaceBetween,
      J = -L,
      te = 0,
      ce = 0;
    if (typeof r > "u") return;
    typeof R == "string" &&
      R.indexOf("%") >= 0 &&
      (R = (parseFloat(R.replace("%", "")) / 100) * r),
      (e.virtualSize = -R),
      p
        ? $.css({ marginLeft: "", marginBottom: "", marginTop: "" })
        : $.css({ marginRight: "", marginBottom: "", marginTop: "" }),
      n.centeredSlides &&
        n.cssMode &&
        (xt(e.wrapperEl, "--swiper-centered-offset-before", ""),
        xt(e.wrapperEl, "--swiper-centered-offset-after", ""));
    const be = n.grid && n.grid.rows > 1 && e.grid;
    be && e.grid.initSlides(A);
    let fe;
    const Se =
      n.slidesPerView === "auto" &&
      n.breakpoints &&
      Object.keys(n.breakpoints).filter(
        (ne) => typeof n.breakpoints[ne].slidesPerView < "u"
      ).length > 0;
    for (let ne = 0; ne < A; ne += 1) {
      fe = 0;
      const oe = $.eq(ne);
      if (
        (be && e.grid.updateSlide(ne, oe, A, i), oe.css("display") !== "none")
      ) {
        if (n.slidesPerView === "auto") {
          Se && ($[ne].style[i("width")] = "");
          const he = getComputedStyle(oe[0]),
            Ee = oe[0].style.transform,
            et = oe[0].style.webkitTransform;
          if (
            (Ee && (oe[0].style.transform = "none"),
            et && (oe[0].style.webkitTransform = "none"),
            n.roundLengths)
          )
            fe = e.isHorizontal() ? oe.outerWidth(!0) : oe.outerHeight(!0);
          else {
            const bt = s(he, "width"),
              yt = s(he, "padding-left"),
              _t = s(he, "padding-right"),
              tt = s(he, "margin-left"),
              st = s(he, "margin-right"),
              it = he.getPropertyValue("box-sizing");
            if (it && it === "border-box") fe = bt + tt + st;
            else {
              const { clientWidth: Dt, offsetWidth: nt } = oe[0];
              fe = bt + yt + _t + tt + st + (nt - Dt);
            }
          }
          Ee && (oe[0].style.transform = Ee),
            et && (oe[0].style.webkitTransform = et),
            n.roundLengths && (fe = Math.floor(fe));
        } else
          (fe = (r - (n.slidesPerView - 1) * R) / n.slidesPerView),
            n.roundLengths && (fe = Math.floor(fe)),
            $[ne] && ($[ne].style[i("width")] = `${fe}px`);
        $[ne] && ($[ne].swiperSlideSize = fe),
          H.push(fe),
          n.centeredSlides
            ? ((J = J + fe / 2 + te / 2 + R),
              te === 0 && ne !== 0 && (J = J - r / 2 - R),
              ne === 0 && (J = J - r / 2 - R),
              Math.abs(J) < 1 / 1e3 && (J = 0),
              n.roundLengths && (J = Math.floor(J)),
              ce % n.slidesPerGroup === 0 && M.push(J),
              z.push(J))
            : (n.roundLengths && (J = Math.floor(J)),
              (ce - Math.min(e.params.slidesPerGroupSkip, ce)) %
                e.params.slidesPerGroup ===
                0 && M.push(J),
              z.push(J),
              (J = J + fe + R)),
          (e.virtualSize += fe + R),
          (te = fe),
          (ce += 1);
      }
    }
    if (
      ((e.virtualSize = Math.max(e.virtualSize, r) + I),
      p &&
        b &&
        (n.effect === "slide" || n.effect === "coverflow") &&
        a.css({ width: `${e.virtualSize + n.spaceBetween}px` }),
      n.setWrapperSize &&
        a.css({ [i("width")]: `${e.virtualSize + n.spaceBetween}px` }),
      be && e.grid.updateWrapperSize(fe, M, i),
      !n.centeredSlides)
    ) {
      const ne = [];
      for (let oe = 0; oe < M.length; oe += 1) {
        let he = M[oe];
        n.roundLengths && (he = Math.floor(he)),
          M[oe] <= e.virtualSize - r && ne.push(he);
      }
      (M = ne),
        Math.floor(e.virtualSize - r) - Math.floor(M[M.length - 1]) > 1 &&
          M.push(e.virtualSize - r);
    }
    if ((M.length === 0 && (M = [0]), n.spaceBetween !== 0)) {
      const ne = e.isHorizontal() && p ? "marginLeft" : i("marginRight");
      $.filter((oe, he) => (n.cssMode ? he !== $.length - 1 : !0)).css({
        [ne]: `${R}px`,
      });
    }
    if (n.centeredSlides && n.centeredSlidesBounds) {
      let ne = 0;
      H.forEach((he) => {
        ne += he + (n.spaceBetween ? n.spaceBetween : 0);
      }),
        (ne -= n.spaceBetween);
      const oe = ne - r;
      M = M.map((he) => (he < 0 ? -L : he > oe ? oe + I : he));
    }
    if (n.centerInsufficientSlides) {
      let ne = 0;
      if (
        (H.forEach((oe) => {
          ne += oe + (n.spaceBetween ? n.spaceBetween : 0);
        }),
        (ne -= n.spaceBetween),
        ne < r)
      ) {
        const oe = (r - ne) / 2;
        M.forEach((he, Ee) => {
          M[Ee] = he - oe;
        }),
          z.forEach((he, Ee) => {
            z[Ee] = he + oe;
          });
      }
    }
    if (
      (Object.assign(e, {
        slides: $,
        snapGrid: M,
        slidesGrid: z,
        slidesSizesGrid: H,
      }),
      n.centeredSlides && n.cssMode && !n.centeredSlidesBounds)
    ) {
      xt(e.wrapperEl, "--swiper-centered-offset-before", `${-M[0]}px`),
        xt(
          e.wrapperEl,
          "--swiper-centered-offset-after",
          `${e.size / 2 - H[H.length - 1] / 2}px`
        );
      const ne = -e.snapGrid[0],
        oe = -e.slidesGrid[0];
      (e.snapGrid = e.snapGrid.map((he) => he + ne)),
        (e.slidesGrid = e.slidesGrid.map((he) => he + oe));
    }
    if (
      (A !== f && e.emit("slidesLengthChange"),
      M.length !== B &&
        (e.params.watchOverflow && e.checkOverflow(),
        e.emit("snapGridLengthChange")),
      z.length !== O && e.emit("slidesGridLengthChange"),
      n.watchSlidesProgress && e.updateSlidesOffset(),
      !w && !n.cssMode && (n.effect === "slide" || n.effect === "fade"))
    ) {
      const ne = `${n.containerModifierClass}backface-hidden`,
        oe = e.$el.hasClass(ne);
      A <= n.maxBackfaceHiddenSlides
        ? oe || e.$el.addClass(ne)
        : oe && e.$el.removeClass(ne);
    }
  }
  function Cn(e) {
    const i = this,
      s = [],
      n = i.virtual && i.params.virtual.enabled;
    let a = 0,
      r;
    typeof e == "number"
      ? i.setTransition(e)
      : e === !0 && i.setTransition(i.params.speed);
    const p = (b) =>
      n
        ? i.slides.filter(
            (w) => parseInt(w.getAttribute("data-swiper-slide-index"), 10) === b
          )[0]
        : i.slides.eq(b)[0];
    if (i.params.slidesPerView !== "auto" && i.params.slidesPerView > 1)
      if (i.params.centeredSlides)
        (i.visibleSlides || ee([])).each((b) => {
          s.push(b);
        });
      else
        for (r = 0; r < Math.ceil(i.params.slidesPerView); r += 1) {
          const b = i.activeIndex + r;
          if (b > i.slides.length && !n) break;
          s.push(p(b));
        }
    else s.push(p(i.activeIndex));
    for (r = 0; r < s.length; r += 1)
      if (typeof s[r] < "u") {
        const b = s[r].offsetHeight;
        a = b > a ? b : a;
      }
    (a || a === 0) && i.$wrapperEl.css("height", `${a}px`);
  }
  function xn() {
    const e = this,
      i = e.slides;
    for (let s = 0; s < i.length; s += 1)
      i[s].swiperSlideOffset = e.isHorizontal()
        ? i[s].offsetLeft
        : i[s].offsetTop;
  }
  function $n(e = (this && this.translate) || 0) {
    const i = this,
      s = i.params,
      { slides: n, rtlTranslate: a, snapGrid: r } = i;
    if (n.length === 0) return;
    typeof n[0].swiperSlideOffset > "u" && i.updateSlidesOffset();
    let p = -e;
    a && (p = e),
      n.removeClass(s.slideVisibleClass),
      (i.visibleSlidesIndexes = []),
      (i.visibleSlides = []);
    for (let b = 0; b < n.length; b += 1) {
      const w = n[b];
      let f = w.swiperSlideOffset;
      s.cssMode && s.centeredSlides && (f -= n[0].swiperSlideOffset);
      const $ =
          (p + (s.centeredSlides ? i.minTranslate() : 0) - f) /
          (w.swiperSlideSize + s.spaceBetween),
        A =
          (p - r[0] + (s.centeredSlides ? i.minTranslate() : 0) - f) /
          (w.swiperSlideSize + s.spaceBetween),
        M = -(p - f),
        z = M + i.slidesSizesGrid[b];
      ((M >= 0 && M < i.size - 1) ||
        (z > 1 && z <= i.size) ||
        (M <= 0 && z >= i.size)) &&
        (i.visibleSlides.push(w),
        i.visibleSlidesIndexes.push(b),
        n.eq(b).addClass(s.slideVisibleClass)),
        (w.progress = a ? -$ : $),
        (w.originalProgress = a ? -A : A);
    }
    i.visibleSlides = ee(i.visibleSlides);
  }
  function kn(e) {
    const i = this;
    if (typeof e > "u") {
      const f = i.rtlTranslate ? -1 : 1;
      e = (i && i.translate && i.translate * f) || 0;
    }
    const s = i.params,
      n = i.maxTranslate() - i.minTranslate();
    let { progress: a, isBeginning: r, isEnd: p } = i;
    const b = r,
      w = p;
    n === 0
      ? ((a = 0), (r = !0), (p = !0))
      : ((a = (e - i.minTranslate()) / n), (r = a <= 0), (p = a >= 1)),
      Object.assign(i, { progress: a, isBeginning: r, isEnd: p }),
      (s.watchSlidesProgress || (s.centeredSlides && s.autoHeight)) &&
        i.updateSlidesProgress(e),
      r && !b && i.emit("reachBeginning toEdge"),
      p && !w && i.emit("reachEnd toEdge"),
      ((b && !r) || (w && !p)) && i.emit("fromEdge"),
      i.emit("progress", a);
  }
  function Mn() {
    const e = this,
      { slides: i, params: s, $wrapperEl: n, activeIndex: a, realIndex: r } = e,
      p = e.virtual && s.virtual.enabled;
    i.removeClass(
      `${s.slideActiveClass} ${s.slideNextClass} ${s.slidePrevClass} ${s.slideDuplicateActiveClass} ${s.slideDuplicateNextClass} ${s.slideDuplicatePrevClass}`
    );
    let b;
    p
      ? (b = e.$wrapperEl.find(
          `.${s.slideClass}[data-swiper-slide-index="${a}"]`
        ))
      : (b = i.eq(a)),
      b.addClass(s.slideActiveClass),
      s.loop &&
        (b.hasClass(s.slideDuplicateClass)
          ? n
              .children(
                `.${s.slideClass}:not(.${s.slideDuplicateClass})[data-swiper-slide-index="${r}"]`
              )
              .addClass(s.slideDuplicateActiveClass)
          : n
              .children(
                `.${s.slideClass}.${s.slideDuplicateClass}[data-swiper-slide-index="${r}"]`
              )
              .addClass(s.slideDuplicateActiveClass));
    let w = b.nextAll(`.${s.slideClass}`).eq(0).addClass(s.slideNextClass);
    s.loop && w.length === 0 && ((w = i.eq(0)), w.addClass(s.slideNextClass));
    let f = b.prevAll(`.${s.slideClass}`).eq(0).addClass(s.slidePrevClass);
    s.loop && f.length === 0 && ((f = i.eq(-1)), f.addClass(s.slidePrevClass)),
      s.loop &&
        (w.hasClass(s.slideDuplicateClass)
          ? n
              .children(
                `.${s.slideClass}:not(.${
                  s.slideDuplicateClass
                })[data-swiper-slide-index="${w.attr(
                  "data-swiper-slide-index"
                )}"]`
              )
              .addClass(s.slideDuplicateNextClass)
          : n
              .children(
                `.${s.slideClass}.${
                  s.slideDuplicateClass
                }[data-swiper-slide-index="${w.attr(
                  "data-swiper-slide-index"
                )}"]`
              )
              .addClass(s.slideDuplicateNextClass),
        f.hasClass(s.slideDuplicateClass)
          ? n
              .children(
                `.${s.slideClass}:not(.${
                  s.slideDuplicateClass
                })[data-swiper-slide-index="${f.attr(
                  "data-swiper-slide-index"
                )}"]`
              )
              .addClass(s.slideDuplicatePrevClass)
          : n
              .children(
                `.${s.slideClass}.${
                  s.slideDuplicateClass
                }[data-swiper-slide-index="${f.attr(
                  "data-swiper-slide-index"
                )}"]`
              )
              .addClass(s.slideDuplicatePrevClass)),
      e.emitSlidesClasses();
  }
  function Pn(e) {
    const i = this,
      s = i.rtlTranslate ? i.translate : -i.translate,
      {
        slidesGrid: n,
        snapGrid: a,
        params: r,
        activeIndex: p,
        realIndex: b,
        snapIndex: w,
      } = i;
    let f = e,
      $;
    if (typeof f > "u") {
      for (let M = 0; M < n.length; M += 1)
        typeof n[M + 1] < "u"
          ? s >= n[M] && s < n[M + 1] - (n[M + 1] - n[M]) / 2
            ? (f = M)
            : s >= n[M] && s < n[M + 1] && (f = M + 1)
          : s >= n[M] && (f = M);
      r.normalizeSlideIndex && (f < 0 || typeof f > "u") && (f = 0);
    }
    if (a.indexOf(s) >= 0) $ = a.indexOf(s);
    else {
      const M = Math.min(r.slidesPerGroupSkip, f);
      $ = M + Math.floor((f - M) / r.slidesPerGroup);
    }
    if (($ >= a.length && ($ = a.length - 1), f === p)) {
      $ !== w && ((i.snapIndex = $), i.emit("snapIndexChange"));
      return;
    }
    const A = parseInt(i.slides.eq(f).attr("data-swiper-slide-index") || f, 10);
    Object.assign(i, {
      snapIndex: $,
      realIndex: A,
      previousIndex: p,
      activeIndex: f,
    }),
      i.emit("activeIndexChange"),
      i.emit("snapIndexChange"),
      b !== A && i.emit("realIndexChange"),
      (i.initialized || i.params.runCallbacksOnInit) && i.emit("slideChange");
  }
  function Ln(e) {
    const i = this,
      s = i.params,
      n = ee(e).closest(`.${s.slideClass}`)[0];
    let a = !1,
      r;
    if (n) {
      for (let p = 0; p < i.slides.length; p += 1)
        if (i.slides[p] === n) {
          (a = !0), (r = p);
          break;
        }
    }
    if (n && a)
      (i.clickedSlide = n),
        i.virtual && i.params.virtual.enabled
          ? (i.clickedIndex = parseInt(
              ee(n).attr("data-swiper-slide-index"),
              10
            ))
          : (i.clickedIndex = r);
    else {
      (i.clickedSlide = void 0), (i.clickedIndex = void 0);
      return;
    }
    s.slideToClickedSlide &&
      i.clickedIndex !== void 0 &&
      i.clickedIndex !== i.activeIndex &&
      i.slideToClickedSlide();
  }
  const An = {
    updateSize: Sn,
    updateSlides: En,
    updateAutoHeight: Cn,
    updateSlidesOffset: xn,
    updateSlidesProgress: $n,
    updateProgress: kn,
    updateSlidesClasses: Mn,
    updateActiveIndex: Pn,
    updateClickedSlide: Ln,
  };
  function In(e = this.isHorizontal() ? "x" : "y") {
    const i = this,
      { params: s, rtlTranslate: n, translate: a, $wrapperEl: r } = i;
    if (s.virtualTranslate) return n ? -a : a;
    if (s.cssMode) return a;
    let p = pn(r[0], e);
    return n && (p = -p), p || 0;
  }
  function On(e, i) {
    const s = this,
      {
        rtlTranslate: n,
        params: a,
        $wrapperEl: r,
        wrapperEl: p,
        progress: b,
      } = s;
    let w = 0,
      f = 0;
    const $ = 0;
    s.isHorizontal() ? (w = n ? -e : e) : (f = e),
      a.roundLengths && ((w = Math.floor(w)), (f = Math.floor(f))),
      a.cssMode
        ? (p[s.isHorizontal() ? "scrollLeft" : "scrollTop"] = s.isHorizontal()
            ? -w
            : -f)
        : a.virtualTranslate ||
          r.transform(`translate3d(${w}px, ${f}px, ${$}px)`),
      (s.previousTranslate = s.translate),
      (s.translate = s.isHorizontal() ? w : f);
    let A;
    const M = s.maxTranslate() - s.minTranslate();
    M === 0 ? (A = 0) : (A = (e - s.minTranslate()) / M),
      A !== b && s.updateProgress(e),
      s.emit("setTranslate", s.translate, i);
  }
  function zn() {
    return -this.snapGrid[0];
  }
  function Nn() {
    return -this.snapGrid[this.snapGrid.length - 1];
  }
  function _n(e = 0, i = this.params.speed, s = !0, n = !0, a) {
    const r = this,
      { params: p, wrapperEl: b } = r;
    if (r.animating && p.preventInteractionOnTransition) return !1;
    const w = r.minTranslate(),
      f = r.maxTranslate();
    let $;
    if (
      (n && e > w ? ($ = w) : n && e < f ? ($ = f) : ($ = e),
      r.updateProgress($),
      p.cssMode)
    ) {
      const A = r.isHorizontal();
      if (i === 0) b[A ? "scrollLeft" : "scrollTop"] = -$;
      else {
        if (!r.support.smoothScroll)
          return (
            zs({ swiper: r, targetPosition: -$, side: A ? "left" : "top" }), !0
          );
        b.scrollTo({ [A ? "left" : "top"]: -$, behavior: "smooth" });
      }
      return !0;
    }
    return (
      i === 0
        ? (r.setTransition(0),
          r.setTranslate($),
          s && (r.emit("beforeTransitionStart", i, a), r.emit("transitionEnd")))
        : (r.setTransition(i),
          r.setTranslate($),
          s &&
            (r.emit("beforeTransitionStart", i, a), r.emit("transitionStart")),
          r.animating ||
            ((r.animating = !0),
            r.onTranslateToWrapperTransitionEnd ||
              (r.onTranslateToWrapperTransitionEnd = function (M) {
                !r ||
                  r.destroyed ||
                  (M.target === this &&
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
                    s && r.emit("transitionEnd")));
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
  }
  const Dn = {
    getTranslate: In,
    setTranslate: On,
    minTranslate: zn,
    maxTranslate: Nn,
    translateTo: _n,
  };
  function qn(e, i) {
    const s = this;
    s.params.cssMode || s.$wrapperEl.transition(e),
      s.emit("setTransition", e, i);
  }
  function _s({ swiper: e, runCallbacks: i, direction: s, step: n }) {
    const { activeIndex: a, previousIndex: r } = e;
    let p = s;
    if (
      (p || (a > r ? (p = "next") : a < r ? (p = "prev") : (p = "reset")),
      e.emit(`transition${n}`),
      i && a !== r)
    ) {
      if (p === "reset") {
        e.emit(`slideResetTransition${n}`);
        return;
      }
      e.emit(`slideChangeTransition${n}`),
        p === "next"
          ? e.emit(`slideNextTransition${n}`)
          : e.emit(`slidePrevTransition${n}`);
    }
  }
  function Hn(e = !0, i) {
    const s = this,
      { params: n } = s;
    n.cssMode ||
      (n.autoHeight && s.updateAutoHeight(),
      _s({ swiper: s, runCallbacks: e, direction: i, step: "Start" }));
  }
  function Bn(e = !0, i) {
    const s = this,
      { params: n } = s;
    (s.animating = !1),
      !n.cssMode &&
        (s.setTransition(0),
        _s({ swiper: s, runCallbacks: e, direction: i, step: "End" }));
  }
  const jn = { setTransition: qn, transitionStart: Hn, transitionEnd: Bn };
  function Rn(e = 0, i = this.params.speed, s = !0, n, a) {
    if (typeof e != "number" && typeof e != "string")
      throw new Error(
        `The 'index' argument cannot have type other than 'number' or 'string'. [${typeof e}] given.`
      );
    if (typeof e == "string") {
      const R = parseInt(e, 10);
      if (!isFinite(R))
        throw new Error(
          `The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`
        );
      e = R;
    }
    const r = this;
    let p = e;
    p < 0 && (p = 0);
    const {
      params: b,
      snapGrid: w,
      slidesGrid: f,
      previousIndex: $,
      activeIndex: A,
      rtlTranslate: M,
      wrapperEl: z,
      enabled: H,
    } = r;
    if ((r.animating && b.preventInteractionOnTransition) || (!H && !n && !a))
      return !1;
    const L = Math.min(r.params.slidesPerGroupSkip, p);
    let I = L + Math.floor((p - L) / r.params.slidesPerGroup);
    I >= w.length && (I = w.length - 1);
    const B = -w[I];
    if (b.normalizeSlideIndex)
      for (let R = 0; R < f.length; R += 1) {
        const J = -Math.floor(B * 100),
          te = Math.floor(f[R] * 100),
          ce = Math.floor(f[R + 1] * 100);
        typeof f[R + 1] < "u"
          ? J >= te && J < ce - (ce - te) / 2
            ? (p = R)
            : J >= te && J < ce && (p = R + 1)
          : J >= te && (p = R);
      }
    if (
      r.initialized &&
      p !== A &&
      ((!r.allowSlideNext && B < r.translate && B < r.minTranslate()) ||
        (!r.allowSlidePrev &&
          B > r.translate &&
          B > r.maxTranslate() &&
          (A || 0) !== p))
    )
      return !1;
    p !== ($ || 0) && s && r.emit("beforeSlideChangeStart"),
      r.updateProgress(B);
    let O;
    if (
      (p > A ? (O = "next") : p < A ? (O = "prev") : (O = "reset"),
      (M && -B === r.translate) || (!M && B === r.translate))
    )
      return (
        r.updateActiveIndex(p),
        b.autoHeight && r.updateAutoHeight(),
        r.updateSlidesClasses(),
        b.effect !== "slide" && r.setTranslate(B),
        O !== "reset" && (r.transitionStart(s, O), r.transitionEnd(s, O)),
        !1
      );
    if (b.cssMode) {
      const R = r.isHorizontal(),
        J = M ? B : -B;
      if (i === 0) {
        const te = r.virtual && r.params.virtual.enabled;
        te &&
          ((r.wrapperEl.style.scrollSnapType = "none"),
          (r._immediateVirtual = !0)),
          (z[R ? "scrollLeft" : "scrollTop"] = J),
          te &&
            requestAnimationFrame(() => {
              (r.wrapperEl.style.scrollSnapType = ""),
                (r._swiperImmediateVirtual = !1);
            });
      } else {
        if (!r.support.smoothScroll)
          return (
            zs({ swiper: r, targetPosition: J, side: R ? "left" : "top" }), !0
          );
        z.scrollTo({ [R ? "left" : "top"]: J, behavior: "smooth" });
      }
      return !0;
    }
    return (
      r.setTransition(i),
      r.setTranslate(B),
      r.updateActiveIndex(p),
      r.updateSlidesClasses(),
      r.emit("beforeTransitionStart", i, n),
      r.transitionStart(s, O),
      i === 0
        ? r.transitionEnd(s, O)
        : r.animating ||
          ((r.animating = !0),
          r.onSlideToWrapperTransitionEnd ||
            (r.onSlideToWrapperTransitionEnd = function (J) {
              !r ||
                r.destroyed ||
                (J.target === this &&
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
                  r.transitionEnd(s, O)));
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
  }
  function Vn(e = 0, i = this.params.speed, s = !0, n) {
    if (typeof e == "string") {
      const p = parseInt(e, 10);
      if (!isFinite(p))
        throw new Error(
          `The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`
        );
      e = p;
    }
    const a = this;
    let r = e;
    return a.params.loop && (r += a.loopedSlides), a.slideTo(r, i, s, n);
  }
  function Gn(e = this.params.speed, i = !0, s) {
    const n = this,
      { animating: a, enabled: r, params: p } = n;
    if (!r) return n;
    let b = p.slidesPerGroup;
    p.slidesPerView === "auto" &&
      p.slidesPerGroup === 1 &&
      p.slidesPerGroupAuto &&
      (b = Math.max(n.slidesPerViewDynamic("current", !0), 1));
    const w = n.activeIndex < p.slidesPerGroupSkip ? 1 : b;
    if (p.loop) {
      if (a && p.loopPreventsSlide) return !1;
      n.loopFix(), (n._clientLeft = n.$wrapperEl[0].clientLeft);
    }
    return p.rewind && n.isEnd
      ? n.slideTo(0, e, i, s)
      : n.slideTo(n.activeIndex + w, e, i, s);
  }
  function Fn(e = this.params.speed, i = !0, s) {
    const n = this,
      {
        params: a,
        animating: r,
        snapGrid: p,
        slidesGrid: b,
        rtlTranslate: w,
        enabled: f,
      } = n;
    if (!f) return n;
    if (a.loop) {
      if (r && a.loopPreventsSlide) return !1;
      n.loopFix(), (n._clientLeft = n.$wrapperEl[0].clientLeft);
    }
    const $ = w ? n.translate : -n.translate;
    function A(I) {
      return I < 0 ? -Math.floor(Math.abs(I)) : Math.floor(I);
    }
    const M = A($),
      z = p.map((I) => A(I));
    let H = p[z.indexOf(M) - 1];
    if (typeof H > "u" && a.cssMode) {
      let I;
      p.forEach((B, O) => {
        M >= B && (I = O);
      }),
        typeof I < "u" && (H = p[I > 0 ? I - 1 : I]);
    }
    let L = 0;
    if (
      (typeof H < "u" &&
        ((L = b.indexOf(H)),
        L < 0 && (L = n.activeIndex - 1),
        a.slidesPerView === "auto" &&
          a.slidesPerGroup === 1 &&
          a.slidesPerGroupAuto &&
          ((L = L - n.slidesPerViewDynamic("previous", !0) + 1),
          (L = Math.max(L, 0)))),
      a.rewind && n.isBeginning)
    ) {
      const I =
        n.params.virtual && n.params.virtual.enabled && n.virtual
          ? n.virtual.slides.length - 1
          : n.slides.length - 1;
      return n.slideTo(I, e, i, s);
    }
    return n.slideTo(L, e, i, s);
  }
  function Wn(e = this.params.speed, i = !0, s) {
    const n = this;
    return n.slideTo(n.activeIndex, e, i, s);
  }
  function Yn(e = this.params.speed, i = !0, s, n = 0.5) {
    const a = this;
    let r = a.activeIndex;
    const p = Math.min(a.params.slidesPerGroupSkip, r),
      b = p + Math.floor((r - p) / a.params.slidesPerGroup),
      w = a.rtlTranslate ? a.translate : -a.translate;
    if (w >= a.snapGrid[b]) {
      const f = a.snapGrid[b],
        $ = a.snapGrid[b + 1];
      w - f > ($ - f) * n && (r += a.params.slidesPerGroup);
    } else {
      const f = a.snapGrid[b - 1],
        $ = a.snapGrid[b];
      w - f <= ($ - f) * n && (r -= a.params.slidesPerGroup);
    }
    return (
      (r = Math.max(r, 0)),
      (r = Math.min(r, a.slidesGrid.length - 1)),
      a.slideTo(r, e, i, s)
    );
  }
  function Xn() {
    const e = this,
      { params: i, $wrapperEl: s } = e,
      n =
        i.slidesPerView === "auto" ? e.slidesPerViewDynamic() : i.slidesPerView;
    let a = e.clickedIndex,
      r;
    if (i.loop) {
      if (e.animating) return;
      (r = parseInt(ee(e.clickedSlide).attr("data-swiper-slide-index"), 10)),
        i.centeredSlides
          ? a < e.loopedSlides - n / 2 ||
            a > e.slides.length - e.loopedSlides + n / 2
            ? (e.loopFix(),
              (a = s
                .children(
                  `.${i.slideClass}[data-swiper-slide-index="${r}"]:not(.${i.slideDuplicateClass})`
                )
                .eq(0)
                .index()),
              Zt(() => {
                e.slideTo(a);
              }))
            : e.slideTo(a)
          : a > e.slides.length - n
          ? (e.loopFix(),
            (a = s
              .children(
                `.${i.slideClass}[data-swiper-slide-index="${r}"]:not(.${i.slideDuplicateClass})`
              )
              .eq(0)
              .index()),
            Zt(() => {
              e.slideTo(a);
            }))
          : e.slideTo(a);
    } else e.slideTo(a);
  }
  const Un = {
    slideTo: Rn,
    slideToLoop: Vn,
    slideNext: Gn,
    slidePrev: Fn,
    slideReset: Wn,
    slideToClosest: Yn,
    slideToClickedSlide: Xn,
  };
  function Kn() {
    const e = this,
      i = Pe(),
      { params: s, $wrapperEl: n } = e,
      a = n.children().length > 0 ? ee(n.children()[0].parentNode) : n;
    a.children(`.${s.slideClass}.${s.slideDuplicateClass}`).remove();
    let r = a.children(`.${s.slideClass}`);
    if (s.loopFillGroupWithBlank) {
      const w = s.slidesPerGroup - (r.length % s.slidesPerGroup);
      if (w !== s.slidesPerGroup) {
        for (let f = 0; f < w; f += 1) {
          const $ = ee(i.createElement("div")).addClass(
            `${s.slideClass} ${s.slideBlankClass}`
          );
          a.append($);
        }
        r = a.children(`.${s.slideClass}`);
      }
    }
    s.slidesPerView === "auto" &&
      !s.loopedSlides &&
      (s.loopedSlides = r.length),
      (e.loopedSlides = Math.ceil(
        parseFloat(s.loopedSlides || s.slidesPerView, 10)
      )),
      (e.loopedSlides += s.loopAdditionalSlides),
      e.loopedSlides > r.length &&
        e.params.loopedSlidesLimit &&
        (e.loopedSlides = r.length);
    const p = [],
      b = [];
    r.each((w, f) => {
      ee(w).attr("data-swiper-slide-index", f);
    });
    for (let w = 0; w < e.loopedSlides; w += 1) {
      const f = w - Math.floor(w / r.length) * r.length;
      b.push(r.eq(f)[0]), p.unshift(r.eq(r.length - f - 1)[0]);
    }
    for (let w = 0; w < b.length; w += 1)
      a.append(ee(b[w].cloneNode(!0)).addClass(s.slideDuplicateClass));
    for (let w = p.length - 1; w >= 0; w -= 1)
      a.prepend(ee(p[w].cloneNode(!0)).addClass(s.slideDuplicateClass));
  }
  function Qn() {
    const e = this;
    e.emit("beforeLoopFix");
    const {
      activeIndex: i,
      slides: s,
      loopedSlides: n,
      allowSlidePrev: a,
      allowSlideNext: r,
      snapGrid: p,
      rtlTranslate: b,
    } = e;
    let w;
    (e.allowSlidePrev = !0), (e.allowSlideNext = !0);
    const $ = -p[i] - e.getTranslate();
    i < n
      ? ((w = s.length - n * 3 + i),
        (w += n),
        e.slideTo(w, 0, !1, !0) &&
          $ !== 0 &&
          e.setTranslate((b ? -e.translate : e.translate) - $))
      : i >= s.length - n &&
        ((w = -s.length + i + n),
        (w += n),
        e.slideTo(w, 0, !1, !0) &&
          $ !== 0 &&
          e.setTranslate((b ? -e.translate : e.translate) - $)),
      (e.allowSlidePrev = a),
      (e.allowSlideNext = r),
      e.emit("loopFix");
  }
  function Jn() {
    const e = this,
      { $wrapperEl: i, params: s, slides: n } = e;
    i
      .children(
        `.${s.slideClass}.${s.slideDuplicateClass},.${s.slideClass}.${s.slideBlankClass}`
      )
      .remove(),
      n.removeAttr("data-swiper-slide-index");
  }
  const Zn = { loopCreate: Kn, loopFix: Qn, loopDestroy: Jn };
  function ea(e) {
    const i = this;
    if (
      i.support.touch ||
      !i.params.simulateTouch ||
      (i.params.watchOverflow && i.isLocked) ||
      i.params.cssMode
    )
      return;
    const s = i.params.touchEventsTarget === "container" ? i.el : i.wrapperEl;
    (s.style.cursor = "move"), (s.style.cursor = e ? "grabbing" : "grab");
  }
  function ta() {
    const e = this;
    e.support.touch ||
      (e.params.watchOverflow && e.isLocked) ||
      e.params.cssMode ||
      (e[
        e.params.touchEventsTarget === "container" ? "el" : "wrapperEl"
      ].style.cursor = "");
  }
  const sa = { setGrabCursor: ea, unsetGrabCursor: ta };
  function ia(e, i = this) {
    function s(n) {
      if (!n || n === Pe() || n === $e()) return null;
      n.assignedSlot && (n = n.assignedSlot);
      const a = n.closest(e);
      return !a && !n.getRootNode ? null : a || s(n.getRootNode().host);
    }
    return s(i);
  }
  function na(e) {
    const i = this,
      s = Pe(),
      n = $e(),
      a = i.touchEventsData,
      { params: r, touches: p, enabled: b } = i;
    if (!b || (i.animating && r.preventInteractionOnTransition)) return;
    !i.animating && r.cssMode && r.loop && i.loopFix();
    let w = e;
    w.originalEvent && (w = w.originalEvent);
    let f = ee(w.target);
    if (
      (r.touchEventsTarget === "wrapper" && !f.closest(i.wrapperEl).length) ||
      ((a.isTouchEvent = w.type === "touchstart"),
      !a.isTouchEvent && "which" in w && w.which === 3) ||
      (!a.isTouchEvent && "button" in w && w.button > 0) ||
      (a.isTouched && a.isMoved)
    )
      return;
    const $ = !!r.noSwipingClass && r.noSwipingClass !== "",
      A = e.composedPath ? e.composedPath() : e.path;
    $ && w.target && w.target.shadowRoot && A && (f = ee(A[0]));
    const M = r.noSwipingSelector
        ? r.noSwipingSelector
        : `.${r.noSwipingClass}`,
      z = !!(w.target && w.target.shadowRoot);
    if (r.noSwiping && (z ? ia(M, f[0]) : f.closest(M)[0])) {
      i.allowClick = !0;
      return;
    }
    if (r.swipeHandler && !f.closest(r.swipeHandler)[0]) return;
    (p.currentX = w.type === "touchstart" ? w.targetTouches[0].pageX : w.pageX),
      (p.currentY =
        w.type === "touchstart" ? w.targetTouches[0].pageY : w.pageY);
    const H = p.currentX,
      L = p.currentY,
      I = r.edgeSwipeDetection || r.iOSEdgeSwipeDetection,
      B = r.edgeSwipeThreshold || r.iOSEdgeSwipeThreshold;
    if (I && (H <= B || H >= n.innerWidth - B))
      if (I === "prevent") e.preventDefault();
      else return;
    if (
      (Object.assign(a, {
        isTouched: !0,
        isMoved: !1,
        allowTouchCallbacks: !0,
        isScrolling: void 0,
        startMoving: void 0,
      }),
      (p.startX = H),
      (p.startY = L),
      (a.touchStartTime = dt()),
      (i.allowClick = !0),
      i.updateSize(),
      (i.swipeDirection = void 0),
      r.threshold > 0 && (a.allowThresholdMove = !1),
      w.type !== "touchstart")
    ) {
      let O = !0;
      f.is(a.focusableElements) &&
        ((O = !1), f[0].nodeName === "SELECT" && (a.isTouched = !1)),
        s.activeElement &&
          ee(s.activeElement).is(a.focusableElements) &&
          s.activeElement !== f[0] &&
          s.activeElement.blur();
      const R = O && i.allowTouchMove && r.touchStartPreventDefault;
      (r.touchStartForcePreventDefault || R) &&
        !f[0].isContentEditable &&
        w.preventDefault();
    }
    i.params.freeMode &&
      i.params.freeMode.enabled &&
      i.freeMode &&
      i.animating &&
      !r.cssMode &&
      i.freeMode.onTouchStart(),
      i.emit("touchStart", w);
  }
  function aa(e) {
    const i = Pe(),
      s = this,
      n = s.touchEventsData,
      { params: a, touches: r, rtlTranslate: p, enabled: b } = s;
    if (!b) return;
    let w = e;
    if ((w.originalEvent && (w = w.originalEvent), !n.isTouched)) {
      n.startMoving && n.isScrolling && s.emit("touchMoveOpposite", w);
      return;
    }
    if (n.isTouchEvent && w.type !== "touchmove") return;
    const f =
        w.type === "touchmove" &&
        w.targetTouches &&
        (w.targetTouches[0] || w.changedTouches[0]),
      $ = w.type === "touchmove" ? f.pageX : w.pageX,
      A = w.type === "touchmove" ? f.pageY : w.pageY;
    if (w.preventedByNestedSwiper) {
      (r.startX = $), (r.startY = A);
      return;
    }
    if (!s.allowTouchMove) {
      ee(w.target).is(n.focusableElements) || (s.allowClick = !1),
        n.isTouched &&
          (Object.assign(r, { startX: $, startY: A, currentX: $, currentY: A }),
          (n.touchStartTime = dt()));
      return;
    }
    if (n.isTouchEvent && a.touchReleaseOnEdges && !a.loop) {
      if (s.isVertical()) {
        if (
          (A < r.startY && s.translate <= s.maxTranslate()) ||
          (A > r.startY && s.translate >= s.minTranslate())
        ) {
          (n.isTouched = !1), (n.isMoved = !1);
          return;
        }
      } else if (
        ($ < r.startX && s.translate <= s.maxTranslate()) ||
        ($ > r.startX && s.translate >= s.minTranslate())
      )
        return;
    }
    if (
      n.isTouchEvent &&
      i.activeElement &&
      w.target === i.activeElement &&
      ee(w.target).is(n.focusableElements)
    ) {
      (n.isMoved = !0), (s.allowClick = !1);
      return;
    }
    if (
      (n.allowTouchCallbacks && s.emit("touchMove", w),
      w.targetTouches && w.targetTouches.length > 1)
    )
      return;
    (r.currentX = $), (r.currentY = A);
    const M = r.currentX - r.startX,
      z = r.currentY - r.startY;
    if (s.params.threshold && Math.sqrt(M ** 2 + z ** 2) < s.params.threshold)
      return;
    if (typeof n.isScrolling > "u") {
      let B;
      (s.isHorizontal() && r.currentY === r.startY) ||
      (s.isVertical() && r.currentX === r.startX)
        ? (n.isScrolling = !1)
        : M * M + z * z >= 25 &&
          ((B = (Math.atan2(Math.abs(z), Math.abs(M)) * 180) / Math.PI),
          (n.isScrolling = s.isHorizontal()
            ? B > a.touchAngle
            : 90 - B > a.touchAngle));
    }
    if (
      (n.isScrolling && s.emit("touchMoveOpposite", w),
      typeof n.startMoving > "u" &&
        (r.currentX !== r.startX || r.currentY !== r.startY) &&
        (n.startMoving = !0),
      n.isScrolling)
    ) {
      n.isTouched = !1;
      return;
    }
    if (!n.startMoving) return;
    (s.allowClick = !1),
      !a.cssMode && w.cancelable && w.preventDefault(),
      a.touchMoveStopPropagation && !a.nested && w.stopPropagation(),
      n.isMoved ||
        (a.loop && !a.cssMode && s.loopFix(),
        (n.startTranslate = s.getTranslate()),
        s.setTransition(0),
        s.animating &&
          s.$wrapperEl.trigger("webkitTransitionEnd transitionend"),
        (n.allowMomentumBounce = !1),
        a.grabCursor &&
          (s.allowSlideNext === !0 || s.allowSlidePrev === !0) &&
          s.setGrabCursor(!0),
        s.emit("sliderFirstMove", w)),
      s.emit("sliderMove", w),
      (n.isMoved = !0);
    let H = s.isHorizontal() ? M : z;
    (r.diff = H),
      (H *= a.touchRatio),
      p && (H = -H),
      (s.swipeDirection = H > 0 ? "prev" : "next"),
      (n.currentTranslate = H + n.startTranslate);
    let L = !0,
      I = a.resistanceRatio;
    if (
      (a.touchReleaseOnEdges && (I = 0),
      H > 0 && n.currentTranslate > s.minTranslate()
        ? ((L = !1),
          a.resistance &&
            (n.currentTranslate =
              s.minTranslate() -
              1 +
              (-s.minTranslate() + n.startTranslate + H) ** I))
        : H < 0 &&
          n.currentTranslate < s.maxTranslate() &&
          ((L = !1),
          a.resistance &&
            (n.currentTranslate =
              s.maxTranslate() +
              1 -
              (s.maxTranslate() - n.startTranslate - H) ** I)),
      L && (w.preventedByNestedSwiper = !0),
      !s.allowSlideNext &&
        s.swipeDirection === "next" &&
        n.currentTranslate < n.startTranslate &&
        (n.currentTranslate = n.startTranslate),
      !s.allowSlidePrev &&
        s.swipeDirection === "prev" &&
        n.currentTranslate > n.startTranslate &&
        (n.currentTranslate = n.startTranslate),
      !s.allowSlidePrev &&
        !s.allowSlideNext &&
        (n.currentTranslate = n.startTranslate),
      a.threshold > 0)
    )
      if (Math.abs(H) > a.threshold || n.allowThresholdMove) {
        if (!n.allowThresholdMove) {
          (n.allowThresholdMove = !0),
            (r.startX = r.currentX),
            (r.startY = r.currentY),
            (n.currentTranslate = n.startTranslate),
            (r.diff = s.isHorizontal()
              ? r.currentX - r.startX
              : r.currentY - r.startY);
          return;
        }
      } else {
        n.currentTranslate = n.startTranslate;
        return;
      }
    !a.followFinger ||
      a.cssMode ||
      (((a.freeMode && a.freeMode.enabled && s.freeMode) ||
        a.watchSlidesProgress) &&
        (s.updateActiveIndex(), s.updateSlidesClasses()),
      s.params.freeMode &&
        a.freeMode.enabled &&
        s.freeMode &&
        s.freeMode.onTouchMove(),
      s.updateProgress(n.currentTranslate),
      s.setTranslate(n.currentTranslate));
  }
  function ra(e) {
    const i = this,
      s = i.touchEventsData,
      { params: n, touches: a, rtlTranslate: r, slidesGrid: p, enabled: b } = i;
    if (!b) return;
    let w = e;
    if (
      (w.originalEvent && (w = w.originalEvent),
      s.allowTouchCallbacks && i.emit("touchEnd", w),
      (s.allowTouchCallbacks = !1),
      !s.isTouched)
    ) {
      s.isMoved && n.grabCursor && i.setGrabCursor(!1),
        (s.isMoved = !1),
        (s.startMoving = !1);
      return;
    }
    n.grabCursor &&
      s.isMoved &&
      s.isTouched &&
      (i.allowSlideNext === !0 || i.allowSlidePrev === !0) &&
      i.setGrabCursor(!1);
    const f = dt(),
      $ = f - s.touchStartTime;
    if (i.allowClick) {
      const O = w.path || (w.composedPath && w.composedPath());
      i.updateClickedSlide((O && O[0]) || w.target),
        i.emit("tap click", w),
        $ < 300 &&
          f - s.lastClickTime < 300 &&
          i.emit("doubleTap doubleClick", w);
    }
    if (
      ((s.lastClickTime = dt()),
      Zt(() => {
        i.destroyed || (i.allowClick = !0);
      }),
      !s.isTouched ||
        !s.isMoved ||
        !i.swipeDirection ||
        a.diff === 0 ||
        s.currentTranslate === s.startTranslate)
    ) {
      (s.isTouched = !1), (s.isMoved = !1), (s.startMoving = !1);
      return;
    }
    (s.isTouched = !1), (s.isMoved = !1), (s.startMoving = !1);
    let A;
    if (
      (n.followFinger
        ? (A = r ? i.translate : -i.translate)
        : (A = -s.currentTranslate),
      n.cssMode)
    )
      return;
    if (i.params.freeMode && n.freeMode.enabled) {
      i.freeMode.onTouchEnd({ currentPos: A });
      return;
    }
    let M = 0,
      z = i.slidesSizesGrid[0];
    for (
      let O = 0;
      O < p.length;
      O += O < n.slidesPerGroupSkip ? 1 : n.slidesPerGroup
    ) {
      const R = O < n.slidesPerGroupSkip - 1 ? 1 : n.slidesPerGroup;
      typeof p[O + R] < "u"
        ? A >= p[O] && A < p[O + R] && ((M = O), (z = p[O + R] - p[O]))
        : A >= p[O] && ((M = O), (z = p[p.length - 1] - p[p.length - 2]));
    }
    let H = null,
      L = null;
    n.rewind &&
      (i.isBeginning
        ? (L =
            i.params.virtual && i.params.virtual.enabled && i.virtual
              ? i.virtual.slides.length - 1
              : i.slides.length - 1)
        : i.isEnd && (H = 0));
    const I = (A - p[M]) / z,
      B = M < n.slidesPerGroupSkip - 1 ? 1 : n.slidesPerGroup;
    if ($ > n.longSwipesMs) {
      if (!n.longSwipes) {
        i.slideTo(i.activeIndex);
        return;
      }
      i.swipeDirection === "next" &&
        (I >= n.longSwipesRatio
          ? i.slideTo(n.rewind && i.isEnd ? H : M + B)
          : i.slideTo(M)),
        i.swipeDirection === "prev" &&
          (I > 1 - n.longSwipesRatio
            ? i.slideTo(M + B)
            : L !== null && I < 0 && Math.abs(I) > n.longSwipesRatio
            ? i.slideTo(L)
            : i.slideTo(M));
    } else {
      if (!n.shortSwipes) {
        i.slideTo(i.activeIndex);
        return;
      }
      i.navigation &&
      (w.target === i.navigation.nextEl || w.target === i.navigation.prevEl)
        ? w.target === i.navigation.nextEl
          ? i.slideTo(M + B)
          : i.slideTo(M)
        : (i.swipeDirection === "next" && i.slideTo(H !== null ? H : M + B),
          i.swipeDirection === "prev" && i.slideTo(L !== null ? L : M));
    }
  }
  function ys() {
    const e = this,
      { params: i, el: s } = e;
    if (s && s.offsetWidth === 0) return;
    i.breakpoints && e.setBreakpoint();
    const { allowSlideNext: n, allowSlidePrev: a, snapGrid: r } = e;
    (e.allowSlideNext = !0),
      (e.allowSlidePrev = !0),
      e.updateSize(),
      e.updateSlides(),
      e.updateSlidesClasses(),
      (i.slidesPerView === "auto" || i.slidesPerView > 1) &&
      e.isEnd &&
      !e.isBeginning &&
      !e.params.centeredSlides
        ? e.slideTo(e.slides.length - 1, 0, !1, !0)
        : e.slideTo(e.activeIndex, 0, !1, !0),
      e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.run(),
      (e.allowSlidePrev = a),
      (e.allowSlideNext = n),
      e.params.watchOverflow && r !== e.snapGrid && e.checkOverflow();
  }
  function la(e) {
    const i = this;
    i.enabled &&
      (i.allowClick ||
        (i.params.preventClicks && e.preventDefault(),
        i.params.preventClicksPropagation &&
          i.animating &&
          (e.stopPropagation(), e.stopImmediatePropagation())));
  }
  function oa() {
    const e = this,
      { wrapperEl: i, rtlTranslate: s, enabled: n } = e;
    if (!n) return;
    (e.previousTranslate = e.translate),
      e.isHorizontal()
        ? (e.translate = -i.scrollLeft)
        : (e.translate = -i.scrollTop),
      e.translate === 0 && (e.translate = 0),
      e.updateActiveIndex(),
      e.updateSlidesClasses();
    let a;
    const r = e.maxTranslate() - e.minTranslate();
    r === 0 ? (a = 0) : (a = (e.translate - e.minTranslate()) / r),
      a !== e.progress && e.updateProgress(s ? -e.translate : e.translate),
      e.emit("setTranslate", e.translate, !1);
  }
  let ws = !1;
  function da() {}
  const Ds = (e, i) => {
    const s = Pe(),
      {
        params: n,
        touchEvents: a,
        el: r,
        wrapperEl: p,
        device: b,
        support: w,
      } = e,
      f = !!n.nested,
      $ = i === "on" ? "addEventListener" : "removeEventListener",
      A = i;
    if (!w.touch)
      r[$](a.start, e.onTouchStart, !1),
        s[$](a.move, e.onTouchMove, f),
        s[$](a.end, e.onTouchEnd, !1);
    else {
      const M =
        a.start === "touchstart" && w.passiveListener && n.passiveListeners
          ? { passive: !0, capture: !1 }
          : !1;
      r[$](a.start, e.onTouchStart, M),
        r[$](
          a.move,
          e.onTouchMove,
          w.passiveListener ? { passive: !1, capture: f } : f
        ),
        r[$](a.end, e.onTouchEnd, M),
        a.cancel && r[$](a.cancel, e.onTouchEnd, M);
    }
    (n.preventClicks || n.preventClicksPropagation) &&
      r[$]("click", e.onClick, !0),
      n.cssMode && p[$]("scroll", e.onScroll),
      n.updateOnWindowResize
        ? e[A](
            b.ios || b.android
              ? "resize orientationchange observerUpdate"
              : "resize observerUpdate",
            ys,
            !0
          )
        : e[A]("observerUpdate", ys, !0);
  };
  function ca() {
    const e = this,
      i = Pe(),
      { params: s, support: n } = e;
    (e.onTouchStart = na.bind(e)),
      (e.onTouchMove = aa.bind(e)),
      (e.onTouchEnd = ra.bind(e)),
      s.cssMode && (e.onScroll = oa.bind(e)),
      (e.onClick = la.bind(e)),
      n.touch && !ws && (i.addEventListener("touchstart", da), (ws = !0)),
      Ds(e, "on");
  }
  function ua() {
    Ds(this, "off");
  }
  const pa = { attachEvents: ca, detachEvents: ua },
    Ts = (e, i) => e.grid && i.grid && i.grid.rows > 1;
  function ha() {
    const e = this,
      {
        activeIndex: i,
        initialized: s,
        loopedSlides: n = 0,
        params: a,
        $el: r,
      } = e,
      p = a.breakpoints;
    if (!p || (p && Object.keys(p).length === 0)) return;
    const b = e.getBreakpoint(p, e.params.breakpointsBase, e.el);
    if (!b || e.currentBreakpoint === b) return;
    const f = (b in p ? p[b] : void 0) || e.originalParams,
      $ = Ts(e, a),
      A = Ts(e, f),
      M = a.enabled;
    $ && !A
      ? (r.removeClass(
          `${a.containerModifierClass}grid ${a.containerModifierClass}grid-column`
        ),
        e.emitContainerClasses())
      : !$ &&
        A &&
        (r.addClass(`${a.containerModifierClass}grid`),
        ((f.grid.fill && f.grid.fill === "column") ||
          (!f.grid.fill && a.grid.fill === "column")) &&
          r.addClass(`${a.containerModifierClass}grid-column`),
        e.emitContainerClasses()),
      ["navigation", "pagination", "scrollbar"].forEach((I) => {
        const B = a[I] && a[I].enabled,
          O = f[I] && f[I].enabled;
        B && !O && e[I].disable(), !B && O && e[I].enable();
      });
    const z = f.direction && f.direction !== a.direction,
      H = a.loop && (f.slidesPerView !== a.slidesPerView || z);
    z && s && e.changeDirection(), Ae(e.params, f);
    const L = e.params.enabled;
    Object.assign(e, {
      allowTouchMove: e.params.allowTouchMove,
      allowSlideNext: e.params.allowSlideNext,
      allowSlidePrev: e.params.allowSlidePrev,
    }),
      M && !L ? e.disable() : !M && L && e.enable(),
      (e.currentBreakpoint = b),
      e.emit("_beforeBreakpoint", f),
      H &&
        s &&
        (e.loopDestroy(),
        e.loopCreate(),
        e.updateSlides(),
        e.slideTo(i - n + e.loopedSlides, 0, !1)),
      e.emit("breakpoint", f);
  }
  function ma(e, i = "window", s) {
    if (!e || (i === "container" && !s)) return;
    let n = !1;
    const a = $e(),
      r = i === "window" ? a.innerHeight : s.clientHeight,
      p = Object.keys(e).map((b) => {
        if (typeof b == "string" && b.indexOf("@") === 0) {
          const w = parseFloat(b.substr(1));
          return { value: r * w, point: b };
        }
        return { value: b, point: b };
      });
    p.sort((b, w) => parseInt(b.value, 10) - parseInt(w.value, 10));
    for (let b = 0; b < p.length; b += 1) {
      const { point: w, value: f } = p[b];
      i === "window"
        ? a.matchMedia(`(min-width: ${f}px)`).matches && (n = w)
        : f <= s.clientWidth && (n = w);
    }
    return n || "max";
  }
  const fa = { setBreakpoint: ha, getBreakpoint: ma };
  function ga(e, i) {
    const s = [];
    return (
      e.forEach((n) => {
        typeof n == "object"
          ? Object.keys(n).forEach((a) => {
              n[a] && s.push(i + a);
            })
          : typeof n == "string" && s.push(i + n);
      }),
      s
    );
  }
  function va() {
    const e = this,
      { classNames: i, params: s, rtl: n, $el: a, device: r, support: p } = e,
      b = ga(
        [
          "initialized",
          s.direction,
          { "pointer-events": !p.touch },
          { "free-mode": e.params.freeMode && s.freeMode.enabled },
          { autoheight: s.autoHeight },
          { rtl: n },
          { grid: s.grid && s.grid.rows > 1 },
          {
            "grid-column":
              s.grid && s.grid.rows > 1 && s.grid.fill === "column",
          },
          { android: r.android },
          { ios: r.ios },
          { "css-mode": s.cssMode },
          { centered: s.cssMode && s.centeredSlides },
          { "watch-progress": s.watchSlidesProgress },
        ],
        s.containerModifierClass
      );
    i.push(...b), a.addClass([...i].join(" ")), e.emitContainerClasses();
  }
  function ba() {
    const e = this,
      { $el: i, classNames: s } = e;
    i.removeClass(s.join(" ")), e.emitContainerClasses();
  }
  const ya = { addClasses: va, removeClasses: ba };
  function wa(e, i, s, n, a, r) {
    const p = $e();
    let b;
    function w() {
      r && r();
    }
    !ee(e).parent("picture")[0] && (!e.complete || !a) && i
      ? ((b = new p.Image()),
        (b.onload = w),
        (b.onerror = w),
        n && (b.sizes = n),
        s && (b.srcset = s),
        i && (b.src = i))
      : w();
  }
  function Ta() {
    const e = this;
    e.imagesToLoad = e.$el.find("img");
    function i() {
      typeof e > "u" ||
        e === null ||
        !e ||
        e.destroyed ||
        (e.imagesLoaded !== void 0 && (e.imagesLoaded += 1),
        e.imagesLoaded === e.imagesToLoad.length &&
          (e.params.updateOnImagesReady && e.update(), e.emit("imagesReady")));
    }
    for (let s = 0; s < e.imagesToLoad.length; s += 1) {
      const n = e.imagesToLoad[s];
      e.loadImage(
        n,
        n.currentSrc || n.getAttribute("src"),
        n.srcset || n.getAttribute("srcset"),
        n.sizes || n.getAttribute("sizes"),
        !0,
        i
      );
    }
  }
  const Sa = { loadImage: wa, preloadImages: Ta };
  function Ea() {
    const e = this,
      { isLocked: i, params: s } = e,
      { slidesOffsetBefore: n } = s;
    if (n) {
      const a = e.slides.length - 1,
        r = e.slidesGrid[a] + e.slidesSizesGrid[a] + n * 2;
      e.isLocked = e.size > r;
    } else e.isLocked = e.snapGrid.length === 1;
    s.allowSlideNext === !0 && (e.allowSlideNext = !e.isLocked),
      s.allowSlidePrev === !0 && (e.allowSlidePrev = !e.isLocked),
      i && i !== e.isLocked && (e.isEnd = !1),
      i !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock");
  }
  const Ca = { checkOverflow: Ea },
    Ss = {
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
  function xa(e, i) {
    return function (n = {}) {
      const a = Object.keys(n)[0],
        r = n[a];
      if (typeof r != "object" || r === null) {
        Ae(i, n);
        return;
      }
      if (
        (["navigation", "pagination", "scrollbar"].indexOf(a) >= 0 &&
          e[a] === !0 &&
          (e[a] = { auto: !0 }),
        !(a in e && "enabled" in r))
      ) {
        Ae(i, n);
        return;
      }
      e[a] === !0 && (e[a] = { enabled: !0 }),
        typeof e[a] == "object" && !("enabled" in e[a]) && (e[a].enabled = !0),
        e[a] || (e[a] = { enabled: !1 }),
        Ae(i, n);
    };
  }
  const Yt = {
      eventsEmitter: Tn,
      update: An,
      translate: Dn,
      transition: jn,
      slide: Un,
      loop: Zn,
      grabCursor: sa,
      events: pa,
      breakpoints: fa,
      checkOverflow: Ca,
      classes: ya,
      images: Sa,
    },
    Xt = {};
  class Me {
    constructor(...i) {
      let s, n;
      if (
        (i.length === 1 &&
        i[0].constructor &&
        Object.prototype.toString.call(i[0]).slice(8, -1) === "Object"
          ? (n = i[0])
          : ([s, n] = i),
        n || (n = {}),
        (n = Ae({}, n)),
        s && !n.el && (n.el = s),
        n.el && ee(n.el).length > 1)
      ) {
        const b = [];
        return (
          ee(n.el).each((w) => {
            const f = Ae({}, n, { el: w });
            b.push(new Me(f));
          }),
          b
        );
      }
      const a = this;
      (a.__swiper__ = !0),
        (a.support = Ns()),
        (a.device = gn({ userAgent: n.userAgent })),
        (a.browser = bn()),
        (a.eventsListeners = {}),
        (a.eventsAnyListeners = []),
        (a.modules = [...a.__modules__]),
        n.modules && Array.isArray(n.modules) && a.modules.push(...n.modules);
      const r = {};
      a.modules.forEach((b) => {
        b({
          swiper: a,
          extendParams: xa(n, r),
          on: a.on.bind(a),
          once: a.once.bind(a),
          off: a.off.bind(a),
          emit: a.emit.bind(a),
        });
      });
      const p = Ae({}, Ss, r);
      return (
        (a.params = Ae({}, p, Xt, n)),
        (a.originalParams = Ae({}, a.params)),
        (a.passedParams = Ae({}, n)),
        a.params &&
          a.params.on &&
          Object.keys(a.params.on).forEach((b) => {
            a.on(b, a.params.on[b]);
          }),
        a.params && a.params.onAny && a.onAny(a.params.onAny),
        (a.$ = ee),
        Object.assign(a, {
          enabled: a.params.enabled,
          el: s,
          classNames: [],
          slides: ee(),
          slidesGrid: [],
          snapGrid: [],
          slidesSizesGrid: [],
          isHorizontal() {
            return a.params.direction === "horizontal";
          },
          isVertical() {
            return a.params.direction === "vertical";
          },
          activeIndex: 0,
          realIndex: 0,
          isBeginning: !0,
          isEnd: !1,
          translate: 0,
          previousTranslate: 0,
          progress: 0,
          velocity: 0,
          animating: !1,
          allowSlideNext: a.params.allowSlideNext,
          allowSlidePrev: a.params.allowSlidePrev,
          touchEvents: (function () {
            const w = ["touchstart", "touchmove", "touchend", "touchcancel"],
              f = ["pointerdown", "pointermove", "pointerup"];
            return (
              (a.touchEventsTouch = {
                start: w[0],
                move: w[1],
                end: w[2],
                cancel: w[3],
              }),
              (a.touchEventsDesktop = { start: f[0], move: f[1], end: f[2] }),
              a.support.touch || !a.params.simulateTouch
                ? a.touchEventsTouch
                : a.touchEventsDesktop
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
            focusableElements: a.params.focusableElements,
            lastClickTime: dt(),
            clickTimeout: void 0,
            velocities: [],
            allowMomentumBounce: void 0,
            isTouchEvent: void 0,
            startMoving: void 0,
          },
          allowClick: !0,
          allowTouchMove: a.params.allowTouchMove,
          touches: { startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0 },
          imagesToLoad: [],
          imagesLoaded: 0,
        }),
        a.emit("_swiper"),
        a.params.init && a.init(),
        a
      );
    }
    enable() {
      const i = this;
      i.enabled ||
        ((i.enabled = !0),
        i.params.grabCursor && i.setGrabCursor(),
        i.emit("enable"));
    }
    disable() {
      const i = this;
      i.enabled &&
        ((i.enabled = !1),
        i.params.grabCursor && i.unsetGrabCursor(),
        i.emit("disable"));
    }
    setProgress(i, s) {
      const n = this;
      i = Math.min(Math.max(i, 0), 1);
      const a = n.minTranslate(),
        p = (n.maxTranslate() - a) * i + a;
      n.translateTo(p, typeof s > "u" ? 0 : s),
        n.updateActiveIndex(),
        n.updateSlidesClasses();
    }
    emitContainerClasses() {
      const i = this;
      if (!i.params._emitClasses || !i.el) return;
      const s = i.el.className
        .split(" ")
        .filter(
          (n) =>
            n.indexOf("swiper") === 0 ||
            n.indexOf(i.params.containerModifierClass) === 0
        );
      i.emit("_containerClasses", s.join(" "));
    }
    getSlideClasses(i) {
      const s = this;
      return s.destroyed
        ? ""
        : i.className
            .split(" ")
            .filter(
              (n) =>
                n.indexOf("swiper-slide") === 0 ||
                n.indexOf(s.params.slideClass) === 0
            )
            .join(" ");
    }
    emitSlidesClasses() {
      const i = this;
      if (!i.params._emitClasses || !i.el) return;
      const s = [];
      i.slides.each((n) => {
        const a = i.getSlideClasses(n);
        s.push({ slideEl: n, classNames: a }), i.emit("_slideClass", n, a);
      }),
        i.emit("_slideClasses", s);
    }
    slidesPerViewDynamic(i = "current", s = !1) {
      const n = this,
        {
          params: a,
          slides: r,
          slidesGrid: p,
          slidesSizesGrid: b,
          size: w,
          activeIndex: f,
        } = n;
      let $ = 1;
      if (a.centeredSlides) {
        let A = r[f].swiperSlideSize,
          M;
        for (let z = f + 1; z < r.length; z += 1)
          r[z] &&
            !M &&
            ((A += r[z].swiperSlideSize), ($ += 1), A > w && (M = !0));
        for (let z = f - 1; z >= 0; z -= 1)
          r[z] &&
            !M &&
            ((A += r[z].swiperSlideSize), ($ += 1), A > w && (M = !0));
      } else if (i === "current")
        for (let A = f + 1; A < r.length; A += 1)
          (s ? p[A] + b[A] - p[f] < w : p[A] - p[f] < w) && ($ += 1);
      else for (let A = f - 1; A >= 0; A -= 1) p[f] - p[A] < w && ($ += 1);
      return $;
    }
    update() {
      const i = this;
      if (!i || i.destroyed) return;
      const { snapGrid: s, params: n } = i;
      n.breakpoints && i.setBreakpoint(),
        i.updateSize(),
        i.updateSlides(),
        i.updateProgress(),
        i.updateSlidesClasses();
      function a() {
        const p = i.rtlTranslate ? i.translate * -1 : i.translate,
          b = Math.min(Math.max(p, i.maxTranslate()), i.minTranslate());
        i.setTranslate(b), i.updateActiveIndex(), i.updateSlidesClasses();
      }
      let r;
      i.params.freeMode && i.params.freeMode.enabled
        ? (a(), i.params.autoHeight && i.updateAutoHeight())
        : ((i.params.slidesPerView === "auto" || i.params.slidesPerView > 1) &&
          i.isEnd &&
          !i.params.centeredSlides
            ? (r = i.slideTo(i.slides.length - 1, 0, !1, !0))
            : (r = i.slideTo(i.activeIndex, 0, !1, !0)),
          r || a()),
        n.watchOverflow && s !== i.snapGrid && i.checkOverflow(),
        i.emit("update");
    }
    changeDirection(i, s = !0) {
      const n = this,
        a = n.params.direction;
      return (
        i || (i = a === "horizontal" ? "vertical" : "horizontal"),
        i === a ||
          (i !== "horizontal" && i !== "vertical") ||
          (n.$el
            .removeClass(`${n.params.containerModifierClass}${a}`)
            .addClass(`${n.params.containerModifierClass}${i}`),
          n.emitContainerClasses(),
          (n.params.direction = i),
          n.slides.each((r) => {
            i === "vertical" ? (r.style.width = "") : (r.style.height = "");
          }),
          n.emit("changeDirection"),
          s && n.update()),
        n
      );
    }
    changeLanguageDirection(i) {
      const s = this;
      (s.rtl && i === "rtl") ||
        (!s.rtl && i === "ltr") ||
        ((s.rtl = i === "rtl"),
        (s.rtlTranslate = s.params.direction === "horizontal" && s.rtl),
        s.rtl
          ? (s.$el.addClass(`${s.params.containerModifierClass}rtl`),
            (s.el.dir = "rtl"))
          : (s.$el.removeClass(`${s.params.containerModifierClass}rtl`),
            (s.el.dir = "ltr")),
        s.update());
    }
    mount(i) {
      const s = this;
      if (s.mounted) return !0;
      const n = ee(i || s.params.el);
      if (((i = n[0]), !i)) return !1;
      i.swiper = s;
      const a = () =>
        `.${(s.params.wrapperClass || "").trim().split(" ").join(".")}`;
      let p = (() => {
        if (i && i.shadowRoot && i.shadowRoot.querySelector) {
          const b = ee(i.shadowRoot.querySelector(a()));
          return (b.children = (w) => n.children(w)), b;
        }
        return n.children ? n.children(a()) : ee(n).children(a());
      })();
      if (p.length === 0 && s.params.createElements) {
        const w = Pe().createElement("div");
        (p = ee(w)),
          (w.className = s.params.wrapperClass),
          n.append(w),
          n.children(`.${s.params.slideClass}`).each((f) => {
            p.append(f);
          });
      }
      return (
        Object.assign(s, {
          $el: n,
          el: i,
          $wrapperEl: p,
          wrapperEl: p[0],
          mounted: !0,
          rtl: i.dir.toLowerCase() === "rtl" || n.css("direction") === "rtl",
          rtlTranslate:
            s.params.direction === "horizontal" &&
            (i.dir.toLowerCase() === "rtl" || n.css("direction") === "rtl"),
          wrongRTL: p.css("display") === "-webkit-box",
        }),
        !0
      );
    }
    init(i) {
      const s = this;
      return (
        s.initialized ||
          s.mount(i) === !1 ||
          (s.emit("beforeInit"),
          s.params.breakpoints && s.setBreakpoint(),
          s.addClasses(),
          s.params.loop && s.loopCreate(),
          s.updateSize(),
          s.updateSlides(),
          s.params.watchOverflow && s.checkOverflow(),
          s.params.grabCursor && s.enabled && s.setGrabCursor(),
          s.params.preloadImages && s.preloadImages(),
          s.params.loop
            ? s.slideTo(
                s.params.initialSlide + s.loopedSlides,
                0,
                s.params.runCallbacksOnInit,
                !1,
                !0
              )
            : s.slideTo(
                s.params.initialSlide,
                0,
                s.params.runCallbacksOnInit,
                !1,
                !0
              ),
          s.attachEvents(),
          (s.initialized = !0),
          s.emit("init"),
          s.emit("afterInit")),
        s
      );
    }
    destroy(i = !0, s = !0) {
      const n = this,
        { params: a, $el: r, $wrapperEl: p, slides: b } = n;
      return (
        typeof n.params > "u" ||
          n.destroyed ||
          (n.emit("beforeDestroy"),
          (n.initialized = !1),
          n.detachEvents(),
          a.loop && n.loopDestroy(),
          s &&
            (n.removeClasses(),
            r.removeAttr("style"),
            p.removeAttr("style"),
            b &&
              b.length &&
              b
                .removeClass(
                  [
                    a.slideVisibleClass,
                    a.slideActiveClass,
                    a.slideNextClass,
                    a.slidePrevClass,
                  ].join(" ")
                )
                .removeAttr("style")
                .removeAttr("data-swiper-slide-index")),
          n.emit("destroy"),
          Object.keys(n.eventsListeners).forEach((w) => {
            n.off(w);
          }),
          i !== !1 && ((n.$el[0].swiper = null), cn(n)),
          (n.destroyed = !0)),
        null
      );
    }
    static extendDefaults(i) {
      Ae(Xt, i);
    }
    static get extendedDefaults() {
      return Xt;
    }
    static get defaults() {
      return Ss;
    }
    static installModule(i) {
      Me.prototype.__modules__ || (Me.prototype.__modules__ = []);
      const s = Me.prototype.__modules__;
      typeof i == "function" && s.indexOf(i) < 0 && s.push(i);
    }
    static use(i) {
      return Array.isArray(i)
        ? (i.forEach((s) => Me.installModule(s)), Me)
        : (Me.installModule(i), Me);
    }
  }
  Object.keys(Yt).forEach((e) => {
    Object.keys(Yt[e]).forEach((i) => {
      Me.prototype[i] = Yt[e][i];
    });
  });
  Me.use([yn, wn]);
  function qs(e, i, s, n) {
    const a = Pe();
    return (
      e.params.createElements &&
        Object.keys(n).forEach((r) => {
          if (!s[r] && s.auto === !0) {
            let p = e.$el.children(`.${n[r]}`)[0];
            p ||
              ((p = a.createElement("div")),
              (p.className = n[r]),
              e.$el.append(p)),
              (s[r] = p),
              (i[r] = p);
          }
        }),
      s
    );
  }
  function Pt({ swiper: e, extendParams: i, on: s, emit: n }) {
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
      (e.navigation = {
        nextEl: null,
        $nextEl: null,
        prevEl: null,
        $prevEl: null,
      });
    function a(z) {
      let H;
      return (
        z &&
          ((H = ee(z)),
          e.params.uniqueNavElements &&
            typeof z == "string" &&
            H.length > 1 &&
            e.$el.find(z).length === 1 &&
            (H = e.$el.find(z))),
        H
      );
    }
    function r(z, H) {
      const L = e.params.navigation;
      z &&
        z.length > 0 &&
        (z[H ? "addClass" : "removeClass"](L.disabledClass),
        z[0] && z[0].tagName === "BUTTON" && (z[0].disabled = H),
        e.params.watchOverflow &&
          e.enabled &&
          z[e.isLocked ? "addClass" : "removeClass"](L.lockClass));
    }
    function p() {
      if (e.params.loop) return;
      const { $nextEl: z, $prevEl: H } = e.navigation;
      r(H, e.isBeginning && !e.params.rewind),
        r(z, e.isEnd && !e.params.rewind);
    }
    function b(z) {
      z.preventDefault(),
        !(e.isBeginning && !e.params.loop && !e.params.rewind) &&
          (e.slidePrev(), n("navigationPrev"));
    }
    function w(z) {
      z.preventDefault(),
        !(e.isEnd && !e.params.loop && !e.params.rewind) &&
          (e.slideNext(), n("navigationNext"));
    }
    function f() {
      const z = e.params.navigation;
      if (
        ((e.params.navigation = qs(
          e,
          e.originalParams.navigation,
          e.params.navigation,
          { nextEl: "swiper-button-next", prevEl: "swiper-button-prev" }
        )),
        !(z.nextEl || z.prevEl))
      )
        return;
      const H = a(z.nextEl),
        L = a(z.prevEl);
      H && H.length > 0 && H.on("click", w),
        L && L.length > 0 && L.on("click", b),
        Object.assign(e.navigation, {
          $nextEl: H,
          nextEl: H && H[0],
          $prevEl: L,
          prevEl: L && L[0],
        }),
        e.enabled ||
          (H && H.addClass(z.lockClass), L && L.addClass(z.lockClass));
    }
    function $() {
      const { $nextEl: z, $prevEl: H } = e.navigation;
      z &&
        z.length &&
        (z.off("click", w), z.removeClass(e.params.navigation.disabledClass)),
        H &&
          H.length &&
          (H.off("click", b), H.removeClass(e.params.navigation.disabledClass));
    }
    s("init", () => {
      e.params.navigation.enabled === !1 ? M() : (f(), p());
    }),
      s("toEdge fromEdge lock unlock", () => {
        p();
      }),
      s("destroy", () => {
        $();
      }),
      s("enable disable", () => {
        const { $nextEl: z, $prevEl: H } = e.navigation;
        z &&
          z[e.enabled ? "removeClass" : "addClass"](
            e.params.navigation.lockClass
          ),
          H &&
            H[e.enabled ? "removeClass" : "addClass"](
              e.params.navigation.lockClass
            );
      }),
      s("click", (z, H) => {
        const { $nextEl: L, $prevEl: I } = e.navigation,
          B = H.target;
        if (e.params.navigation.hideOnClick && !ee(B).is(I) && !ee(B).is(L)) {
          if (
            e.pagination &&
            e.params.pagination &&
            e.params.pagination.clickable &&
            (e.pagination.el === B || e.pagination.el.contains(B))
          )
            return;
          let O;
          L
            ? (O = L.hasClass(e.params.navigation.hiddenClass))
            : I && (O = I.hasClass(e.params.navigation.hiddenClass)),
            n(O === !0 ? "navigationShow" : "navigationHide"),
            L && L.toggleClass(e.params.navigation.hiddenClass),
            I && I.toggleClass(e.params.navigation.hiddenClass);
        }
      });
    const A = () => {
        e.$el.removeClass(e.params.navigation.navigationDisabledClass),
          f(),
          p();
      },
      M = () => {
        e.$el.addClass(e.params.navigation.navigationDisabledClass), $();
      };
    Object.assign(e.navigation, {
      enable: A,
      disable: M,
      update: p,
      init: f,
      destroy: $,
    });
  }
  function Je(e = "") {
    return `.${e
      .trim()
      .replace(/([\.:!\/])/g, "\\$1")
      .replace(/ /g, ".")}`;
  }
  function ct({ swiper: e, extendParams: i, on: s, emit: n }) {
    const a = "swiper-pagination";
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
        formatFractionCurrent: (L) => L,
        formatFractionTotal: (L) => L,
        bulletClass: `${a}-bullet`,
        bulletActiveClass: `${a}-bullet-active`,
        modifierClass: `${a}-`,
        currentClass: `${a}-current`,
        totalClass: `${a}-total`,
        hiddenClass: `${a}-hidden`,
        progressbarFillClass: `${a}-progressbar-fill`,
        progressbarOppositeClass: `${a}-progressbar-opposite`,
        clickableClass: `${a}-clickable`,
        lockClass: `${a}-lock`,
        horizontalClass: `${a}-horizontal`,
        verticalClass: `${a}-vertical`,
        paginationDisabledClass: `${a}-disabled`,
      },
    }),
      (e.pagination = { el: null, $el: null, bullets: [] });
    let r,
      p = 0;
    function b() {
      return (
        !e.params.pagination.el ||
        !e.pagination.el ||
        !e.pagination.$el ||
        e.pagination.$el.length === 0
      );
    }
    function w(L, I) {
      const { bulletActiveClass: B } = e.params.pagination;
      L[I]().addClass(`${B}-${I}`)[I]().addClass(`${B}-${I}-${I}`);
    }
    function f() {
      const L = e.rtl,
        I = e.params.pagination;
      if (b()) return;
      const B =
          e.virtual && e.params.virtual.enabled
            ? e.virtual.slides.length
            : e.slides.length,
        O = e.pagination.$el;
      let R;
      const J = e.params.loop
        ? Math.ceil((B - e.loopedSlides * 2) / e.params.slidesPerGroup)
        : e.snapGrid.length;
      if (
        (e.params.loop
          ? ((R = Math.ceil(
              (e.activeIndex - e.loopedSlides) / e.params.slidesPerGroup
            )),
            R > B - 1 - e.loopedSlides * 2 && (R -= B - e.loopedSlides * 2),
            R > J - 1 && (R -= J),
            R < 0 && e.params.paginationType !== "bullets" && (R = J + R))
          : typeof e.snapIndex < "u"
          ? (R = e.snapIndex)
          : (R = e.activeIndex || 0),
        I.type === "bullets" &&
          e.pagination.bullets &&
          e.pagination.bullets.length > 0)
      ) {
        const te = e.pagination.bullets;
        let ce, be, fe;
        if (
          (I.dynamicBullets &&
            ((r = te
              .eq(0)
              [e.isHorizontal() ? "outerWidth" : "outerHeight"](!0)),
            O.css(
              e.isHorizontal() ? "width" : "height",
              `${r * (I.dynamicMainBullets + 4)}px`
            ),
            I.dynamicMainBullets > 1 &&
              e.previousIndex !== void 0 &&
              ((p += R - (e.previousIndex - e.loopedSlides || 0)),
              p > I.dynamicMainBullets - 1
                ? (p = I.dynamicMainBullets - 1)
                : p < 0 && (p = 0)),
            (ce = Math.max(R - p, 0)),
            (be = ce + (Math.min(te.length, I.dynamicMainBullets) - 1)),
            (fe = (be + ce) / 2)),
          te.removeClass(
            ["", "-next", "-next-next", "-prev", "-prev-prev", "-main"]
              .map((Se) => `${I.bulletActiveClass}${Se}`)
              .join(" ")
          ),
          O.length > 1)
        )
          te.each((Se) => {
            const ne = ee(Se),
              oe = ne.index();
            oe === R && ne.addClass(I.bulletActiveClass),
              I.dynamicBullets &&
                (oe >= ce &&
                  oe <= be &&
                  ne.addClass(`${I.bulletActiveClass}-main`),
                oe === ce && w(ne, "prev"),
                oe === be && w(ne, "next"));
          });
        else {
          const Se = te.eq(R),
            ne = Se.index();
          if ((Se.addClass(I.bulletActiveClass), I.dynamicBullets)) {
            const oe = te.eq(ce),
              he = te.eq(be);
            for (let Ee = ce; Ee <= be; Ee += 1)
              te.eq(Ee).addClass(`${I.bulletActiveClass}-main`);
            if (e.params.loop)
              if (ne >= te.length) {
                for (let Ee = I.dynamicMainBullets; Ee >= 0; Ee -= 1)
                  te.eq(te.length - Ee).addClass(`${I.bulletActiveClass}-main`);
                te.eq(te.length - I.dynamicMainBullets - 1).addClass(
                  `${I.bulletActiveClass}-prev`
                );
              } else w(oe, "prev"), w(he, "next");
            else w(oe, "prev"), w(he, "next");
          }
        }
        if (I.dynamicBullets) {
          const Se = Math.min(te.length, I.dynamicMainBullets + 4),
            ne = (r * Se - r) / 2 - fe * r,
            oe = L ? "right" : "left";
          te.css(e.isHorizontal() ? oe : "top", `${ne}px`);
        }
      }
      if (
        (I.type === "fraction" &&
          (O.find(Je(I.currentClass)).text(I.formatFractionCurrent(R + 1)),
          O.find(Je(I.totalClass)).text(I.formatFractionTotal(J))),
        I.type === "progressbar")
      ) {
        let te;
        I.progressbarOpposite
          ? (te = e.isHorizontal() ? "vertical" : "horizontal")
          : (te = e.isHorizontal() ? "horizontal" : "vertical");
        const ce = (R + 1) / J;
        let be = 1,
          fe = 1;
        te === "horizontal" ? (be = ce) : (fe = ce),
          O.find(Je(I.progressbarFillClass))
            .transform(`translate3d(0,0,0) scaleX(${be}) scaleY(${fe})`)
            .transition(e.params.speed);
      }
      I.type === "custom" && I.renderCustom
        ? (O.html(I.renderCustom(e, R + 1, J)), n("paginationRender", O[0]))
        : n("paginationUpdate", O[0]),
        e.params.watchOverflow &&
          e.enabled &&
          O[e.isLocked ? "addClass" : "removeClass"](I.lockClass);
    }
    function $() {
      const L = e.params.pagination;
      if (b()) return;
      const I =
          e.virtual && e.params.virtual.enabled
            ? e.virtual.slides.length
            : e.slides.length,
        B = e.pagination.$el;
      let O = "";
      if (L.type === "bullets") {
        let R = e.params.loop
          ? Math.ceil((I - e.loopedSlides * 2) / e.params.slidesPerGroup)
          : e.snapGrid.length;
        e.params.freeMode &&
          e.params.freeMode.enabled &&
          !e.params.loop &&
          R > I &&
          (R = I);
        for (let J = 0; J < R; J += 1)
          L.renderBullet
            ? (O += L.renderBullet.call(e, J, L.bulletClass))
            : (O += `<${L.bulletElement} class="${L.bulletClass}"></${L.bulletElement}>`);
        B.html(O), (e.pagination.bullets = B.find(Je(L.bulletClass)));
      }
      L.type === "fraction" &&
        (L.renderFraction
          ? (O = L.renderFraction.call(e, L.currentClass, L.totalClass))
          : (O = `<span class="${L.currentClass}"></span> / <span class="${L.totalClass}"></span>`),
        B.html(O)),
        L.type === "progressbar" &&
          (L.renderProgressbar
            ? (O = L.renderProgressbar.call(e, L.progressbarFillClass))
            : (O = `<span class="${L.progressbarFillClass}"></span>`),
          B.html(O)),
        L.type !== "custom" && n("paginationRender", e.pagination.$el[0]);
    }
    function A() {
      e.params.pagination = qs(
        e,
        e.originalParams.pagination,
        e.params.pagination,
        { el: "swiper-pagination" }
      );
      const L = e.params.pagination;
      if (!L.el) return;
      let I = ee(L.el);
      I.length !== 0 &&
        (e.params.uniqueNavElements &&
          typeof L.el == "string" &&
          I.length > 1 &&
          ((I = e.$el.find(L.el)),
          I.length > 1 &&
            (I = I.filter((B) => ee(B).parents(".swiper")[0] === e.el))),
        L.type === "bullets" && L.clickable && I.addClass(L.clickableClass),
        I.addClass(L.modifierClass + L.type),
        I.addClass(e.isHorizontal() ? L.horizontalClass : L.verticalClass),
        L.type === "bullets" &&
          L.dynamicBullets &&
          (I.addClass(`${L.modifierClass}${L.type}-dynamic`),
          (p = 0),
          L.dynamicMainBullets < 1 && (L.dynamicMainBullets = 1)),
        L.type === "progressbar" &&
          L.progressbarOpposite &&
          I.addClass(L.progressbarOppositeClass),
        L.clickable &&
          I.on("click", Je(L.bulletClass), function (O) {
            O.preventDefault();
            let R = ee(this).index() * e.params.slidesPerGroup;
            e.params.loop && (R += e.loopedSlides), e.slideTo(R);
          }),
        Object.assign(e.pagination, { $el: I, el: I[0] }),
        e.enabled || I.addClass(L.lockClass));
    }
    function M() {
      const L = e.params.pagination;
      if (b()) return;
      const I = e.pagination.$el;
      I.removeClass(L.hiddenClass),
        I.removeClass(L.modifierClass + L.type),
        I.removeClass(e.isHorizontal() ? L.horizontalClass : L.verticalClass),
        e.pagination.bullets &&
          e.pagination.bullets.removeClass &&
          e.pagination.bullets.removeClass(L.bulletActiveClass),
        L.clickable && I.off("click", Je(L.bulletClass));
    }
    s("init", () => {
      e.params.pagination.enabled === !1 ? H() : (A(), $(), f());
    }),
      s("activeIndexChange", () => {
        (e.params.loop || typeof e.snapIndex > "u") && f();
      }),
      s("snapIndexChange", () => {
        e.params.loop || f();
      }),
      s("slidesLengthChange", () => {
        e.params.loop && ($(), f());
      }),
      s("snapGridLengthChange", () => {
        e.params.loop || ($(), f());
      }),
      s("destroy", () => {
        M();
      }),
      s("enable disable", () => {
        const { $el: L } = e.pagination;
        L &&
          L[e.enabled ? "removeClass" : "addClass"](
            e.params.pagination.lockClass
          );
      }),
      s("lock unlock", () => {
        f();
      }),
      s("click", (L, I) => {
        const B = I.target,
          { $el: O } = e.pagination;
        if (
          e.params.pagination.el &&
          e.params.pagination.hideOnClick &&
          O &&
          O.length > 0 &&
          !ee(B).hasClass(e.params.pagination.bulletClass)
        ) {
          if (
            e.navigation &&
            ((e.navigation.nextEl && B === e.navigation.nextEl) ||
              (e.navigation.prevEl && B === e.navigation.prevEl))
          )
            return;
          const R = O.hasClass(e.params.pagination.hiddenClass);
          n(R === !0 ? "paginationShow" : "paginationHide"),
            O.toggleClass(e.params.pagination.hiddenClass);
        }
      });
    const z = () => {
        e.$el.removeClass(e.params.pagination.paginationDisabledClass),
          e.pagination.$el &&
            e.pagination.$el.removeClass(
              e.params.pagination.paginationDisabledClass
            ),
          A(),
          $(),
          f();
      },
      H = () => {
        e.$el.addClass(e.params.pagination.paginationDisabledClass),
          e.pagination.$el &&
            e.pagination.$el.addClass(
              e.params.pagination.paginationDisabledClass
            ),
          M();
      };
    Object.assign(e.pagination, {
      enable: z,
      disable: H,
      render: $,
      update: f,
      init: A,
      destroy: M,
    });
  }
  const $a = () => {
    document.querySelector("#bunner-slider") &&
      new Me(".slider-bunner-js", {
        slidesPerView: 1,
        loop: "true",
        speed: 800,
        modules: [Pt, ct],
        pagination: {
          el: ".swiper-pagination",
          type: "bullets",
          clickable: !0,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: !0,
          renderBullet: function (e, i) {
            return `<div class="${i}"><p>0${e + 1}</p>
         
          </div>`;
          },
        },
        navigation: { nextEl: ".bunner-next", prevEl: ".bunner-prev" },
      });
  };
  function Q(e, i, s) {
    return (
      (i = Ma(i)) in e
        ? Object.defineProperty(e, i, {
            value: s,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (e[i] = s),
      e
    );
  }
  function ka(e, i) {
    if (typeof e != "object" || e === null) return e;
    var s = e[Symbol.toPrimitive];
    if (s !== void 0) {
      var n = s.call(e, i || "default");
      if (typeof n != "object") return n;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (i === "string" ? String : Number)(e);
  }
  function Ma(e) {
    var i = ka(e, "string");
    return typeof i == "symbol" ? i : String(i);
  }
  function Pa(e, i) {
    if (!(e instanceof i))
      throw new TypeError("Cannot call a class as a function");
  }
  function Es(e, i) {
    for (var s = 0; s < i.length; s++) {
      var n = i[s];
      (n.enumerable = n.enumerable || !1),
        (n.configurable = !0),
        "value" in n && (n.writable = !0),
        Object.defineProperty(e, n.key, n);
    }
  }
  function La(e, i, s) {
    return i && Es(e.prototype, i), s && Es(e, s), e;
  }
  function Aa(e, i, s) {
    return (
      i in e
        ? Object.defineProperty(e, i, {
            value: s,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (e[i] = s),
      e
    );
  }
  function Cs(e, i) {
    var s = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      i &&
        (n = n.filter(function (a) {
          return Object.getOwnPropertyDescriptor(e, a).enumerable;
        })),
        s.push.apply(s, n);
    }
    return s;
  }
  function xs(e) {
    for (var i = 1; i < arguments.length; i++) {
      var s = arguments[i] != null ? arguments[i] : {};
      i % 2
        ? Cs(Object(s), !0).forEach(function (n) {
            Aa(e, n, s[n]);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(s))
        : Cs(Object(s)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(s, n));
          });
    }
    return e;
  }
  var $s = { addCSS: !0, thumbWidth: 15, watch: !0 };
  function Ia(e, i) {
    return function () {
      return Array.from(document.querySelectorAll(i)).includes(this);
    }.call(e, i);
  }
  function Oa(e, i) {
    if (e && i) {
      var s = new Event(i, { bubbles: !0 });
      e.dispatchEvent(s);
    }
  }
  var ft = function (e) {
      return e != null ? e.constructor : null;
    },
    ds = function (e, i) {
      return !!(e && i && e instanceof i);
    },
    Hs = function (e) {
      return e == null;
    },
    Bs = function (e) {
      return ft(e) === Object;
    },
    za = function (e) {
      return ft(e) === Number && !Number.isNaN(e);
    },
    js = function (e) {
      return ft(e) === String;
    },
    Na = function (e) {
      return ft(e) === Boolean;
    },
    _a = function (e) {
      return ft(e) === Function;
    },
    Rs = function (e) {
      return Array.isArray(e);
    },
    Vs = function (e) {
      return ds(e, NodeList);
    },
    Da = function (e) {
      return ds(e, Element);
    },
    qa = function (e) {
      return ds(e, Event);
    },
    Ha = function (e) {
      return (
        Hs(e) ||
        ((js(e) || Rs(e) || Vs(e)) && !e.length) ||
        (Bs(e) && !Object.keys(e).length)
      );
    },
    ke = {
      nullOrUndefined: Hs,
      object: Bs,
      number: za,
      string: js,
      boolean: Na,
      function: _a,
      array: Rs,
      nodeList: Vs,
      element: Da,
      event: qa,
      empty: Ha,
    };
  function Ba(e) {
    var i = "".concat(e).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
    return i ? Math.max(0, (i[1] ? i[1].length : 0) - (i[2] ? +i[2] : 0)) : 0;
  }
  function ja(e, i) {
    if (1 > i) {
      var s = Ba(i);
      return parseFloat(e.toFixed(s));
    }
    return Math.round(e / i) * i;
  }
  var Ra = (function () {
    function e(i, s) {
      Pa(this, e),
        ke.element(i)
          ? (this.element = i)
          : ke.string(i) && (this.element = document.querySelector(i)),
        ke.element(this.element) &&
          ke.empty(this.element.rangeTouch) &&
          ((this.config = xs({}, $s, {}, s)), this.init());
    }
    return (
      La(
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
            value: function (i) {
              var s = this,
                n = i ? "addEventListener" : "removeEventListener";
              ["touchstart", "touchmove", "touchend"].forEach(function (a) {
                s.element[n](
                  a,
                  function (r) {
                    return s.set(r);
                  },
                  !1
                );
              });
            },
          },
          {
            key: "get",
            value: function (i) {
              if (!e.enabled || !ke.event(i)) return null;
              var s,
                n = i.target,
                a = i.changedTouches[0],
                r = parseFloat(n.getAttribute("min")) || 0,
                p = parseFloat(n.getAttribute("max")) || 100,
                b = parseFloat(n.getAttribute("step")) || 1,
                w = n.getBoundingClientRect(),
                f = ((100 / w.width) * (this.config.thumbWidth / 2)) / 100;
              return (
                0 > (s = (100 / w.width) * (a.clientX - w.left))
                  ? (s = 0)
                  : 100 < s && (s = 100),
                50 > s
                  ? (s -= (100 - 2 * s) * f)
                  : 50 < s && (s += 2 * (s - 50) * f),
                r + ja((s / 100) * (p - r), b)
              );
            },
          },
          {
            key: "set",
            value: function (i) {
              e.enabled &&
                ke.event(i) &&
                !i.target.disabled &&
                (i.preventDefault(),
                (i.target.value = this.get(i)),
                Oa(i.target, i.type === "touchend" ? "change" : "input"));
            },
          },
        ],
        [
          {
            key: "setup",
            value: function (i) {
              var s =
                  1 < arguments.length && arguments[1] !== void 0
                    ? arguments[1]
                    : {},
                n = null;
              if (
                (ke.empty(i) || ke.string(i)
                  ? (n = Array.from(
                      document.querySelectorAll(
                        ke.string(i) ? i : 'input[type="range"]'
                      )
                    ))
                  : ke.element(i)
                  ? (n = [i])
                  : ke.nodeList(i)
                  ? (n = Array.from(i))
                  : ke.array(i) && (n = i.filter(ke.element)),
                ke.empty(n))
              )
                return null;
              var a = xs({}, $s, {}, s);
              if (ke.string(i) && a.watch) {
                var r = new MutationObserver(function (p) {
                  Array.from(p).forEach(function (b) {
                    Array.from(b.addedNodes).forEach(function (w) {
                      ke.element(w) && Ia(w, i) && new e(w, a);
                    });
                  });
                });
                r.observe(document.body, { childList: !0, subtree: !0 });
              }
              return n.map(function (p) {
                return new e(p, s);
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
  const gt = (e) => (e != null ? e.constructor : null),
    He = (e, i) => !!(e && i && e instanceof i),
    cs = (e) => e == null,
    Gs = (e) => gt(e) === Object,
    Va = (e) => gt(e) === Number && !Number.isNaN(e),
    Ot = (e) => gt(e) === String,
    Ga = (e) => gt(e) === Boolean,
    Fs = (e) => typeof e == "function",
    Ws = (e) => Array.isArray(e),
    Fa = (e) => He(e, WeakMap),
    Ys = (e) => He(e, NodeList),
    Wa = (e) => gt(e) === Text,
    Ya = (e) => He(e, Event),
    Xa = (e) => He(e, KeyboardEvent),
    Ua = (e) => He(e, window.TextTrackCue) || He(e, window.VTTCue),
    Ka = (e) => He(e, TextTrack) || (!cs(e) && Ot(e.kind)),
    Qa = (e) => He(e, Promise) && Fs(e.then),
    Ja = (e) =>
      e !== null &&
      typeof e == "object" &&
      e.nodeType === 1 &&
      typeof e.style == "object" &&
      typeof e.ownerDocument == "object",
    Xs = (e) =>
      cs(e) ||
      ((Ot(e) || Ws(e) || Ys(e)) && !e.length) ||
      (Gs(e) && !Object.keys(e).length),
    Za = (e) => {
      if (He(e, window.URL)) return !0;
      if (!Ot(e)) return !1;
      let i = e;
      (e.startsWith("http://") && e.startsWith("https://")) ||
        (i = `http://${e}`);
      try {
        return !Xs(new URL(i).hostname);
      } catch {
        return !1;
      }
    };
  var C = {
    nullOrUndefined: cs,
    object: Gs,
    number: Va,
    string: Ot,
    boolean: Ga,
    function: Fs,
    array: Ws,
    weakMap: Fa,
    nodeList: Ys,
    element: Ja,
    textNode: Wa,
    event: Ya,
    keyboardEvent: Xa,
    cue: Ua,
    track: Ka,
    promise: Qa,
    url: Za,
    empty: Xs,
  };
  const es = (() => {
    const e = document.createElement("span"),
      i = {
        WebkitTransition: "webkitTransitionEnd",
        MozTransition: "transitionend",
        OTransition: "oTransitionEnd otransitionend",
        transition: "transitionend",
      },
      s = Object.keys(i).find((n) => e.style[n] !== void 0);
    return !!C.string(s) && i[s];
  })();
  function Us(e, i) {
    setTimeout(() => {
      try {
        (e.hidden = !0), e.offsetHeight, (e.hidden = !1);
      } catch {}
    }, i);
  }
  const er = !!window.document.documentMode,
    tr = /Edge/g.test(navigator.userAgent),
    sr =
      "WebkitAppearance" in document.documentElement.style &&
      !/Edge/g.test(navigator.userAgent),
    ir =
      /iPhone|iPod/gi.test(navigator.userAgent) && navigator.maxTouchPoints > 1,
    nr = navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1,
    ar =
      /iPad|iPhone|iPod/gi.test(navigator.userAgent) &&
      navigator.maxTouchPoints > 1;
  var xe = {
    isIE: er,
    isEdge: tr,
    isWebKit: sr,
    isIPhone: ir,
    isIPadOS: nr,
    isIos: ar,
  };
  function rr(e) {
    return JSON.parse(JSON.stringify(e));
  }
  function Ks(e, i) {
    return i.split(".").reduce((s, n) => s && s[n], e);
  }
  function ye(e = {}, ...i) {
    if (!i.length) return e;
    const s = i.shift();
    return C.object(s)
      ? (Object.keys(s).forEach((n) => {
          C.object(s[n])
            ? (Object.keys(e).includes(n) || Object.assign(e, { [n]: {} }),
              ye(e[n], s[n]))
            : Object.assign(e, { [n]: s[n] });
        }),
        ye(e, ...i))
      : e;
  }
  function Qs(e, i) {
    const s = e.length ? e : [e];
    Array.from(s)
      .reverse()
      .forEach((n, a) => {
        const r = a > 0 ? i.cloneNode(!0) : i,
          p = n.parentNode,
          b = n.nextSibling;
        r.appendChild(n), b ? p.insertBefore(r, b) : p.appendChild(r);
      });
  }
  function ts(e, i) {
    C.element(e) &&
      !C.empty(i) &&
      Object.entries(i)
        .filter(([, s]) => !C.nullOrUndefined(s))
        .forEach(([s, n]) => e.setAttribute(s, n));
  }
  function re(e, i, s) {
    const n = document.createElement(e);
    return C.object(i) && ts(n, i), C.string(s) && (n.innerText = s), n;
  }
  function lr(e, i) {
    C.element(e) && C.element(i) && i.parentNode.insertBefore(e, i.nextSibling);
  }
  function ks(e, i, s, n) {
    C.element(i) && i.appendChild(re(e, s, n));
  }
  function qe(e) {
    C.nodeList(e) || C.array(e)
      ? Array.from(e).forEach(qe)
      : C.element(e) && C.element(e.parentNode) && e.parentNode.removeChild(e);
  }
  function $t(e) {
    if (!C.element(e)) return;
    let { length: i } = e.childNodes;
    for (; i > 0; ) e.removeChild(e.lastChild), (i -= 1);
  }
  function Lt(e, i) {
    return C.element(i) && C.element(i.parentNode) && C.element(e)
      ? (i.parentNode.replaceChild(e, i), e)
      : null;
  }
  function Oe(e, i) {
    if (!C.string(e) || C.empty(e)) return {};
    const s = {},
      n = ye({}, i);
    return (
      e.split(",").forEach((a) => {
        const r = a.trim(),
          p = r.replace(".", ""),
          b = r.replace(/[[\]]/g, "").split("="),
          [w] = b,
          f = b.length > 1 ? b[1].replace(/["']/g, "") : "";
        switch (r.charAt(0)) {
          case ".":
            C.string(n.class) ? (s.class = `${n.class} ${p}`) : (s.class = p);
            break;
          case "#":
            s.id = r.replace("#", "");
            break;
          case "[":
            s[w] = f;
        }
      }),
      ye(n, s)
    );
  }
  function We(e, i) {
    if (!C.element(e)) return;
    let s = i;
    C.boolean(s) || (s = !e.hidden), (e.hidden = s);
  }
  function me(e, i, s) {
    if (C.nodeList(e)) return Array.from(e).map((n) => me(n, i, s));
    if (C.element(e)) {
      let n = "toggle";
      return (
        s !== void 0 && (n = s ? "add" : "remove"),
        e.classList[n](i),
        e.classList.contains(i)
      );
    }
    return !1;
  }
  function At(e, i) {
    return C.element(e) && e.classList.contains(i);
  }
  function Ye(e, i) {
    const { prototype: s } = Element;
    return (
      s.matches ||
      s.webkitMatchesSelector ||
      s.mozMatchesSelector ||
      s.msMatchesSelector ||
      function () {
        return Array.from(document.querySelectorAll(i)).includes(this);
      }
    ).call(e, i);
  }
  function or(e, i) {
    const { prototype: s } = Element;
    return (
      s.closest ||
      function () {
        let n = this;
        do {
          if (Ye.matches(n, i)) return n;
          n = n.parentElement || n.parentNode;
        } while (n !== null && n.nodeType === 1);
        return null;
      }
    ).call(e, i);
  }
  function ut(e) {
    return this.elements.container.querySelectorAll(e);
  }
  function Te(e) {
    return this.elements.container.querySelector(e);
  }
  function Ut(e = null, i = !1) {
    C.element(e) && e.focus({ preventScroll: !0, focusVisible: i });
  }
  const Ms = {
      "audio/ogg": "vorbis",
      "audio/wav": "1",
      "video/webm": "vp8, vorbis",
      "video/mp4": "avc1.42E01E, mp4a.40.2",
      "video/ogg": "theora",
    },
    we = {
      audio: "canPlayType" in document.createElement("audio"),
      video: "canPlayType" in document.createElement("video"),
      check(e, i) {
        const s = we[e] || i !== "html5";
        return { api: s, ui: s && we.rangeInput };
      },
      pip: !(
        xe.isIPhone ||
        (!C.function(re("video").webkitSetPresentationMode) &&
          (!document.pictureInPictureEnabled ||
            re("video").disablePictureInPicture))
      ),
      airplay: C.function(window.WebKitPlaybackTargetAvailabilityEvent),
      playsinline: "playsInline" in document.createElement("video"),
      mime(e) {
        if (C.empty(e)) return !1;
        const [i] = e.split("/");
        let s = e;
        if (!this.isHTML5 || i !== this.type) return !1;
        Object.keys(Ms).includes(s) && (s += `; codecs="${Ms[e]}"`);
        try {
          return !!(s && this.media.canPlayType(s).replace(/no/, ""));
        } catch {
          return !1;
        }
      },
      textTracks: "textTracks" in document.createElement("video"),
      rangeInput: (() => {
        const e = document.createElement("input");
        return (e.type = "range"), e.type === "range";
      })(),
      touch: "ontouchstart" in document.documentElement,
      transitions: es !== !1,
      reducedMotion:
        "matchMedia" in window &&
        window.matchMedia("(prefers-reduced-motion)").matches,
    },
    dr = (() => {
      let e = !1;
      try {
        const i = Object.defineProperty({}, "passive", {
          get: () => ((e = !0), null),
        });
        window.addEventListener("test", null, i),
          window.removeEventListener("test", null, i);
      } catch {}
      return e;
    })();
  function pt(e, i, s, n = !1, a = !0, r = !1) {
    if (!e || !("addEventListener" in e) || C.empty(i) || !C.function(s))
      return;
    const p = i.split(" ");
    let b = r;
    dr && (b = { passive: a, capture: r }),
      p.forEach((w) => {
        this &&
          this.eventListeners &&
          n &&
          this.eventListeners.push({
            element: e,
            type: w,
            callback: s,
            options: b,
          }),
          e[n ? "addEventListener" : "removeEventListener"](w, s, b);
      });
  }
  function ue(e, i = "", s, n = !0, a = !1) {
    pt.call(this, e, i, s, !0, n, a);
  }
  function zt(e, i = "", s, n = !0, a = !1) {
    pt.call(this, e, i, s, !1, n, a);
  }
  function us(e, i = "", s, n = !0, a = !1) {
    const r = (...p) => {
      zt(e, i, r, n, a), s.apply(this, p);
    };
    pt.call(this, e, i, r, !0, n, a);
  }
  function le(e, i = "", s = !1, n = {}) {
    if (!C.element(e) || C.empty(i)) return;
    const a = new CustomEvent(i, { bubbles: s, detail: { ...n, plyr: this } });
    e.dispatchEvent(a);
  }
  function cr() {
    this &&
      this.eventListeners &&
      (this.eventListeners.forEach((e) => {
        const { element: i, type: s, callback: n, options: a } = e;
        i.removeEventListener(s, n, a);
      }),
      (this.eventListeners = []));
  }
  function ur() {
    return new Promise((e) =>
      this.ready
        ? setTimeout(e, 0)
        : ue.call(this, this.elements.container, "ready", e)
    ).then(() => {});
  }
  function ze(e) {
    C.promise(e) && e.then(null, () => {});
  }
  function ss(e) {
    return C.array(e) ? e.filter((i, s) => e.indexOf(i) === s) : e;
  }
  function Js(e, i) {
    return C.array(e) && e.length
      ? e.reduce((s, n) => (Math.abs(n - i) < Math.abs(s - i) ? n : s))
      : null;
  }
  function Zs(e) {
    return !(!window || !window.CSS) && window.CSS.supports(e);
  }
  const Ps = [
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
  ].reduce((e, [i, s]) => ({ ...e, [i / s]: [i, s] }), {});
  function ei(e) {
    return C.array(e) || (C.string(e) && e.includes(":"))
      ? (C.array(e) ? e : e.split(":")).map(Number).every(C.number)
      : !1;
  }
  function It(e) {
    if (!C.array(e) || !e.every(C.number)) return null;
    const [i, s] = e,
      n = (r, p) => (p === 0 ? r : n(p, r % p)),
      a = n(i, s);
    return [i / a, s / a];
  }
  function ps(e) {
    const i = (n) => (ei(n) ? n.split(":").map(Number) : null);
    let s = i(e);
    if (
      (s === null && (s = i(this.config.ratio)),
      s === null &&
        !C.empty(this.embed) &&
        C.array(this.embed.ratio) &&
        ({ ratio: s } = this.embed),
      s === null && this.isHTML5)
    ) {
      const { videoWidth: n, videoHeight: a } = this.media;
      s = [n, a];
    }
    return It(s);
  }
  function Ze(e) {
    if (!this.isVideo) return {};
    const { wrapper: i } = this.elements,
      s = ps.call(this, e);
    if (!C.array(s)) return {};
    const [n, a] = It(s),
      r = (100 / n) * a;
    if (
      (Zs(`aspect-ratio: ${n}/${a}`)
        ? (i.style.aspectRatio = `${n}/${a}`)
        : (i.style.paddingBottom = `${r}%`),
      this.isVimeo && !this.config.vimeo.premium && this.supported.ui)
    ) {
      const p =
          (100 / this.media.offsetWidth) *
          parseInt(window.getComputedStyle(this.media).paddingBottom, 10),
        b = (p - r) / (p / 50);
      this.fullscreen.active
        ? (i.style.paddingBottom = null)
        : (this.media.style.transform = `translateY(-${b}%)`);
    } else
      this.isHTML5 && i.classList.add(this.config.classNames.videoFixedRatio);
    return { padding: r, ratio: s };
  }
  function ti(e, i, s = 0.05) {
    const n = e / i,
      a = Js(Object.keys(Ps), n);
    return Math.abs(a - n) <= s ? Ps[a] : [e, i];
  }
  function pr() {
    return [
      Math.max(
        document.documentElement.clientWidth || 0,
        window.innerWidth || 0
      ),
      Math.max(
        document.documentElement.clientHeight || 0,
        window.innerHeight || 0
      ),
    ];
  }
  const Ve = {
    getSources() {
      return this.isHTML5
        ? Array.from(this.media.querySelectorAll("source")).filter((e) => {
            const i = e.getAttribute("type");
            return !!C.empty(i) || we.mime.call(this, i);
          })
        : [];
    },
    getQualityOptions() {
      return this.config.quality.forced
        ? this.config.quality.options
        : Ve.getSources
            .call(this)
            .map((e) => Number(e.getAttribute("size")))
            .filter(Boolean);
    },
    setup() {
      if (!this.isHTML5) return;
      const e = this;
      (e.options.speed = e.config.speed.options),
        C.empty(this.config.ratio) || Ze.call(e),
        Object.defineProperty(e.media, "quality", {
          get() {
            const i = Ve.getSources
              .call(e)
              .find((s) => s.getAttribute("src") === e.source);
            return i && Number(i.getAttribute("size"));
          },
          set(i) {
            if (e.quality !== i) {
              if (
                e.config.quality.forced &&
                C.function(e.config.quality.onChange)
              )
                e.config.quality.onChange(i);
              else {
                const s = Ve.getSources
                  .call(e)
                  .find((w) => Number(w.getAttribute("size")) === i);
                if (!s) return;
                const {
                  currentTime: n,
                  paused: a,
                  preload: r,
                  readyState: p,
                  playbackRate: b,
                } = e.media;
                (e.media.src = s.getAttribute("src")),
                  (r !== "none" || p) &&
                    (e.once("loadedmetadata", () => {
                      (e.speed = b), (e.currentTime = n), a || ze(e.play());
                    }),
                    e.media.load());
              }
              le.call(e, e.media, "qualitychange", !1, { quality: i });
            }
          },
        });
    },
    cancelRequests() {
      this.isHTML5 &&
        (qe(Ve.getSources.call(this)),
        this.media.setAttribute("src", this.config.blankVideo),
        this.media.load(),
        this.debug.log("Cancelled network requests"));
    },
  };
  function hr(e) {
    return `${e}-${Math.floor(1e4 * Math.random())}`;
  }
  function is(e, ...i) {
    return C.empty(e)
      ? e
      : e.toString().replace(/{(\d+)}/g, (s, n) => i[n].toString());
  }
  function mr(e, i) {
    return e === 0 || i === 0 || Number.isNaN(e) || Number.isNaN(i)
      ? 0
      : ((e / i) * 100).toFixed(2);
  }
  const ot = (e = "", i = "", s = "") =>
      e.replace(
        new RegExp(
          i.toString().replace(/([.*+?^=!:${}()|[\]/\\])/g, "\\$1"),
          "g"
        ),
        s.toString()
      ),
    si = (e = "") =>
      e
        .toString()
        .replace(
          /\w\S*/g,
          (i) => i.charAt(0).toUpperCase() + i.slice(1).toLowerCase()
        );
  function fr(e = "") {
    let i = e.toString();
    return (
      (i = ot(i, "-", " ")), (i = ot(i, "_", " ")), (i = si(i)), ot(i, " ", "")
    );
  }
  function gr(e = "") {
    let i = e.toString();
    return (i = fr(i)), i.charAt(0).toLowerCase() + i.slice(1);
  }
  function vr(e) {
    const i = document.createDocumentFragment(),
      s = document.createElement("div");
    return i.appendChild(s), (s.innerHTML = e), i.firstChild.innerText;
  }
  function br(e) {
    const i = document.createElement("div");
    return i.appendChild(e), i.innerHTML;
  }
  const Ls = {
      pip: "PIP",
      airplay: "AirPlay",
      html5: "HTML5",
      vimeo: "Vimeo",
      youtube: "YouTube",
    },
    Ce = {
      get(e = "", i = {}) {
        if (C.empty(e) || C.empty(i)) return "";
        let s = Ks(i.i18n, e);
        if (C.empty(s)) return Object.keys(Ls).includes(e) ? Ls[e] : "";
        const n = { "{seektime}": i.seekTime, "{title}": i.title };
        return (
          Object.entries(n).forEach(([a, r]) => {
            s = ot(s, a, r);
          }),
          s
        );
      },
    };
  class ht {
    constructor(i) {
      Q(this, "get", (s) => {
        if (!ht.supported || !this.enabled) return null;
        const n = window.localStorage.getItem(this.key);
        if (C.empty(n)) return null;
        const a = JSON.parse(n);
        return C.string(s) && s.length ? a[s] : a;
      }),
        Q(this, "set", (s) => {
          if (!ht.supported || !this.enabled || !C.object(s)) return;
          let n = this.get();
          C.empty(n) && (n = {}), ye(n, s);
          try {
            window.localStorage.setItem(this.key, JSON.stringify(n));
          } catch {}
        }),
        (this.enabled = i.config.storage.enabled),
        (this.key = i.config.storage.key);
    }
    static get supported() {
      try {
        if (!("localStorage" in window)) return !1;
        const i = "___test";
        return (
          window.localStorage.setItem(i, i),
          window.localStorage.removeItem(i),
          !0
        );
      } catch {
        return !1;
      }
    }
  }
  function vt(e, i = "text") {
    return new Promise((s, n) => {
      try {
        const a = new XMLHttpRequest();
        if (!("withCredentials" in a)) return;
        a.addEventListener("load", () => {
          if (i === "text")
            try {
              s(JSON.parse(a.responseText));
            } catch {
              s(a.responseText);
            }
          else s(a.response);
        }),
          a.addEventListener("error", () => {
            throw new Error(a.status);
          }),
          a.open("GET", e, !0),
          (a.responseType = i),
          a.send();
      } catch (a) {
        n(a);
      }
    });
  }
  function ii(e, i) {
    if (!C.string(e)) return;
    const s = "cache",
      n = C.string(i);
    let a = !1;
    const r = () => document.getElementById(i) !== null,
      p = (b, w) => {
        (b.innerHTML = w),
          (n && r()) || document.body.insertAdjacentElement("afterbegin", b);
      };
    if (!n || !r()) {
      const b = ht.supported,
        w = document.createElement("div");
      if ((w.setAttribute("hidden", ""), n && w.setAttribute("id", i), b)) {
        const f = window.localStorage.getItem(`${s}-${i}`);
        if (((a = f !== null), a)) {
          const $ = JSON.parse(f);
          p(w, $.content);
        }
      }
      vt(e)
        .then((f) => {
          if (!C.empty(f)) {
            if (b)
              try {
                window.localStorage.setItem(
                  `${s}-${i}`,
                  JSON.stringify({ content: f })
                );
              } catch {}
            p(w, f);
          }
        })
        .catch(() => {});
    }
  }
  const ni = (e) => Math.trunc((e / 60 / 60) % 60, 10),
    yr = (e) => Math.trunc((e / 60) % 60, 10),
    wr = (e) => Math.trunc(e % 60, 10);
  function Nt(e = 0, i = !1, s = !1) {
    if (!C.number(e)) return Nt(void 0, i, s);
    const n = (b) => `0${b}`.slice(-2);
    let a = ni(e);
    const r = yr(e),
      p = wr(e);
    return (
      (a = i || a > 0 ? `${a}:` : ""),
      `${s && e > 0 ? "-" : ""}${a}${n(r)}:${n(p)}`
    );
  }
  const K = {
    getIconUrl() {
      const e = new URL(this.config.iconUrl, window.location),
        i = window.location.host
          ? window.location.host
          : window.top.location.host,
        s = e.host !== i || (xe.isIE && !window.svg4everybody);
      return { url: this.config.iconUrl, cors: s };
    },
    findElements() {
      try {
        return (
          (this.elements.controls = Te.call(
            this,
            this.config.selectors.controls.wrapper
          )),
          (this.elements.buttons = {
            play: ut.call(this, this.config.selectors.buttons.play),
            pause: Te.call(this, this.config.selectors.buttons.pause),
            restart: Te.call(this, this.config.selectors.buttons.restart),
            rewind: Te.call(this, this.config.selectors.buttons.rewind),
            fastForward: Te.call(
              this,
              this.config.selectors.buttons.fastForward
            ),
            mute: Te.call(this, this.config.selectors.buttons.mute),
            pip: Te.call(this, this.config.selectors.buttons.pip),
            airplay: Te.call(this, this.config.selectors.buttons.airplay),
            settings: Te.call(this, this.config.selectors.buttons.settings),
            captions: Te.call(this, this.config.selectors.buttons.captions),
            fullscreen: Te.call(this, this.config.selectors.buttons.fullscreen),
          }),
          (this.elements.progress = Te.call(
            this,
            this.config.selectors.progress
          )),
          (this.elements.inputs = {
            seek: Te.call(this, this.config.selectors.inputs.seek),
            volume: Te.call(this, this.config.selectors.inputs.volume),
          }),
          (this.elements.display = {
            buffer: Te.call(this, this.config.selectors.display.buffer),
            currentTime: Te.call(
              this,
              this.config.selectors.display.currentTime
            ),
            duration: Te.call(this, this.config.selectors.display.duration),
          }),
          C.element(this.elements.progress) &&
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
    createIcon(e, i) {
      const s = "http://www.w3.org/2000/svg",
        n = K.getIconUrl.call(this),
        a = `${n.cors ? "" : n.url}#${this.config.iconPrefix}`,
        r = document.createElementNS(s, "svg");
      ts(r, ye(i, { "aria-hidden": "true", focusable: "false" }));
      const p = document.createElementNS(s, "use"),
        b = `${a}-${e}`;
      return (
        "href" in p &&
          p.setAttributeNS("http://www.w3.org/1999/xlink", "href", b),
        p.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", b),
        r.appendChild(p),
        r
      );
    },
    createLabel(e, i = {}) {
      const s = Ce.get(e, this.config);
      return re(
        "span",
        {
          ...i,
          class: [i.class, this.config.classNames.hidden]
            .filter(Boolean)
            .join(" "),
        },
        s
      );
    },
    createBadge(e) {
      if (C.empty(e)) return null;
      const i = re("span", { class: this.config.classNames.menu.value });
      return (
        i.appendChild(
          re("span", { class: this.config.classNames.menu.badge }, e)
        ),
        i
      );
    },
    createButton(e, i) {
      const s = ye({}, i);
      let n = gr(e);
      const a = {
        element: "button",
        toggle: !1,
        label: null,
        icon: null,
        labelPressed: null,
        iconPressed: null,
      };
      switch (
        (["element", "icon", "label"].forEach((p) => {
          Object.keys(s).includes(p) && ((a[p] = s[p]), delete s[p]);
        }),
        a.element !== "button" ||
          Object.keys(s).includes("type") ||
          (s.type = "button"),
        Object.keys(s).includes("class")
          ? s.class
              .split(" ")
              .some((p) => p === this.config.classNames.control) ||
            ye(s, { class: `${s.class} ${this.config.classNames.control}` })
          : (s.class = this.config.classNames.control),
        e)
      ) {
        case "play":
          (a.toggle = !0),
            (a.label = "play"),
            (a.labelPressed = "pause"),
            (a.icon = "play"),
            (a.iconPressed = "pause");
          break;
        case "mute":
          (a.toggle = !0),
            (a.label = "mute"),
            (a.labelPressed = "unmute"),
            (a.icon = "volume"),
            (a.iconPressed = "muted");
          break;
        case "captions":
          (a.toggle = !0),
            (a.label = "enableCaptions"),
            (a.labelPressed = "disableCaptions"),
            (a.icon = "captions-off"),
            (a.iconPressed = "captions-on");
          break;
        case "fullscreen":
          (a.toggle = !0),
            (a.label = "enterFullscreen"),
            (a.labelPressed = "exitFullscreen"),
            (a.icon = "enter-fullscreen"),
            (a.iconPressed = "exit-fullscreen");
          break;
        case "play-large":
          (s.class += ` ${this.config.classNames.control}--overlaid`),
            (n = "play"),
            (a.label = "play"),
            (a.icon = "play");
          break;
        default:
          C.empty(a.label) && (a.label = n), C.empty(a.icon) && (a.icon = e);
      }
      const r = re(a.element);
      return (
        a.toggle
          ? (r.appendChild(
              K.createIcon.call(this, a.iconPressed, { class: "icon--pressed" })
            ),
            r.appendChild(
              K.createIcon.call(this, a.icon, { class: "icon--not-pressed" })
            ),
            r.appendChild(
              K.createLabel.call(this, a.labelPressed, {
                class: "label--pressed",
              })
            ),
            r.appendChild(
              K.createLabel.call(this, a.label, { class: "label--not-pressed" })
            ))
          : (r.appendChild(K.createIcon.call(this, a.icon)),
            r.appendChild(K.createLabel.call(this, a.label))),
        ye(s, Oe(this.config.selectors.buttons[n], s)),
        ts(r, s),
        n === "play"
          ? (C.array(this.elements.buttons[n]) ||
              (this.elements.buttons[n] = []),
            this.elements.buttons[n].push(r))
          : (this.elements.buttons[n] = r),
        r
      );
    },
    createRange(e, i) {
      const s = re(
        "input",
        ye(
          Oe(this.config.selectors.inputs[e]),
          {
            type: "range",
            min: 0,
            max: 100,
            step: 0.01,
            value: 0,
            autocomplete: "off",
            role: "slider",
            "aria-label": Ce.get(e, this.config),
            "aria-valuemin": 0,
            "aria-valuemax": 100,
            "aria-valuenow": 0,
          },
          i
        )
      );
      return (
        (this.elements.inputs[e] = s),
        K.updateRangeFill.call(this, s),
        Ra.setup(s),
        s
      );
    },
    createProgress(e, i) {
      const s = re(
        "progress",
        ye(
          Oe(this.config.selectors.display[e]),
          {
            min: 0,
            max: 100,
            value: 0,
            role: "progressbar",
            "aria-hidden": !0,
          },
          i
        )
      );
      if (e !== "volume") {
        s.appendChild(re("span", null, "0"));
        const n = { played: "played", buffer: "buffered" }[e],
          a = n ? Ce.get(n, this.config) : "";
        s.innerText = `% ${a.toLowerCase()}`;
      }
      return (this.elements.display[e] = s), s;
    },
    createTime(e, i) {
      const s = Oe(this.config.selectors.display[e], i),
        n = re(
          "div",
          ye(s, {
            class: `${s.class ? s.class : ""} ${
              this.config.classNames.display.time
            } `.trim(),
            "aria-label": Ce.get(e, this.config),
            role: "timer",
          }),
          "00:00"
        );
      return (this.elements.display[e] = n), n;
    },
    bindMenuItemShortcuts(e, i) {
      ue.call(
        this,
        e,
        "keydown keyup",
        (s) => {
          if (
            ![" ", "ArrowUp", "ArrowDown", "ArrowRight"].includes(s.key) ||
            (s.preventDefault(), s.stopPropagation(), s.type === "keydown")
          )
            return;
          const n = Ye(e, '[role="menuitemradio"]');
          if (!n && [" ", "ArrowRight"].includes(s.key))
            K.showMenuPanel.call(this, i, !0);
          else {
            let a;
            s.key !== " " &&
              (s.key === "ArrowDown" || (n && s.key === "ArrowRight")
                ? ((a = e.nextElementSibling),
                  C.element(a) || (a = e.parentNode.firstElementChild))
                : ((a = e.previousElementSibling),
                  C.element(a) || (a = e.parentNode.lastElementChild)),
              Ut.call(this, a, !0));
          }
        },
        !1
      ),
        ue.call(this, e, "keyup", (s) => {
          s.key === "Return" && K.focusFirstMenuItem.call(this, null, !0);
        });
    },
    createMenuItem({
      value: e,
      list: i,
      type: s,
      title: n,
      badge: a = null,
      checked: r = !1,
    }) {
      const p = Oe(this.config.selectors.inputs[s]),
        b = re(
          "button",
          ye(p, {
            type: "button",
            role: "menuitemradio",
            class: `${this.config.classNames.control} ${
              p.class ? p.class : ""
            }`.trim(),
            "aria-checked": r,
            value: e,
          })
        ),
        w = re("span");
      (w.innerHTML = n),
        C.element(a) && w.appendChild(a),
        b.appendChild(w),
        Object.defineProperty(b, "checked", {
          enumerable: !0,
          get: () => b.getAttribute("aria-checked") === "true",
          set(f) {
            f &&
              Array.from(b.parentNode.children)
                .filter(($) => Ye($, '[role="menuitemradio"]'))
                .forEach(($) => $.setAttribute("aria-checked", "false")),
              b.setAttribute("aria-checked", f ? "true" : "false");
          },
        }),
        this.listeners.bind(
          b,
          "click keyup",
          (f) => {
            if (!C.keyboardEvent(f) || f.key === " ") {
              switch (
                (f.preventDefault(), f.stopPropagation(), (b.checked = !0), s)
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
              K.showMenuPanel.call(this, "home", C.keyboardEvent(f));
            }
          },
          s,
          !1
        ),
        K.bindMenuItemShortcuts.call(this, b, s),
        i.appendChild(b);
    },
    formatTime(e = 0, i = !1) {
      return C.number(e) ? Nt(e, ni(this.duration) > 0, i) : e;
    },
    updateTimeDisplay(e = null, i = 0, s = !1) {
      C.element(e) && C.number(i) && (e.innerText = K.formatTime(i, s));
    },
    updateVolume() {
      this.supported.ui &&
        (C.element(this.elements.inputs.volume) &&
          K.setRange.call(
            this,
            this.elements.inputs.volume,
            this.muted ? 0 : this.volume
          ),
        C.element(this.elements.buttons.mute) &&
          (this.elements.buttons.mute.pressed =
            this.muted || this.volume === 0));
    },
    setRange(e, i = 0) {
      C.element(e) && ((e.value = i), K.updateRangeFill.call(this, e));
    },
    updateProgress(e) {
      if (!this.supported.ui || !C.event(e)) return;
      let i = 0;
      const s = (n, a) => {
        const r = C.number(a) ? a : 0,
          p = C.element(n) ? n : this.elements.display.buffer;
        if (C.element(p)) {
          p.value = r;
          const b = p.getElementsByTagName("span")[0];
          C.element(b) && (b.childNodes[0].nodeValue = r);
        }
      };
      if (e)
        switch (e.type) {
          case "timeupdate":
          case "seeking":
          case "seeked":
            (i = mr(this.currentTime, this.duration)),
              e.type === "timeupdate" &&
                K.setRange.call(this, this.elements.inputs.seek, i);
            break;
          case "playing":
          case "progress":
            s(this.elements.display.buffer, 100 * this.buffered);
        }
    },
    updateRangeFill(e) {
      const i = C.event(e) ? e.target : e;
      if (C.element(i) && i.getAttribute("type") === "range") {
        if (Ye(i, this.config.selectors.inputs.seek)) {
          i.setAttribute("aria-valuenow", this.currentTime);
          const s = K.formatTime(this.currentTime),
            n = K.formatTime(this.duration),
            a = Ce.get("seekLabel", this.config);
          i.setAttribute(
            "aria-valuetext",
            a.replace("{currentTime}", s).replace("{duration}", n)
          );
        } else if (Ye(i, this.config.selectors.inputs.volume)) {
          const s = 100 * i.value;
          i.setAttribute("aria-valuenow", s),
            i.setAttribute("aria-valuetext", `${s.toFixed(1)}%`);
        } else i.setAttribute("aria-valuenow", i.value);
        (xe.isWebKit || xe.isIPadOS) &&
          i.style.setProperty("--value", (i.value / i.max) * 100 + "%");
      }
    },
    updateSeekTooltip(e) {
      var i, s;
      if (
        !this.config.tooltips.seek ||
        !C.element(this.elements.inputs.seek) ||
        !C.element(this.elements.display.seekTooltip) ||
        this.duration === 0
      )
        return;
      const n = this.elements.display.seekTooltip,
        a = `${this.config.classNames.tooltip}--visible`,
        r = ($) => me(n, a, $);
      if (this.touch) return void r(!1);
      let p = 0;
      const b = this.elements.progress.getBoundingClientRect();
      if (C.event(e)) p = (100 / b.width) * (e.pageX - b.left);
      else {
        if (!At(n, a)) return;
        p = parseFloat(n.style.left, 10);
      }
      p < 0 ? (p = 0) : p > 100 && (p = 100);
      const w = (this.duration / 100) * p;
      n.innerText = K.formatTime(w);
      const f =
        (i = this.config.markers) === null ||
        i === void 0 ||
        (s = i.points) === null ||
        s === void 0
          ? void 0
          : s.find(({ time: $ }) => $ === Math.round(w));
      f && n.insertAdjacentHTML("afterbegin", `${f.label}<br>`),
        (n.style.left = `${p}%`),
        C.event(e) &&
          ["mouseenter", "mouseleave"].includes(e.type) &&
          r(e.type === "mouseenter");
    },
    timeUpdate(e) {
      const i =
        !C.element(this.elements.display.duration) && this.config.invertTime;
      K.updateTimeDisplay.call(
        this,
        this.elements.display.currentTime,
        i ? this.duration - this.currentTime : this.currentTime,
        i
      ),
        (e && e.type === "timeupdate" && this.media.seeking) ||
          K.updateProgress.call(this, e);
    },
    durationUpdate() {
      if (!this.supported.ui || (!this.config.invertTime && this.currentTime))
        return;
      if (this.duration >= 2 ** 32)
        return (
          We(this.elements.display.currentTime, !0),
          void We(this.elements.progress, !0)
        );
      C.element(this.elements.inputs.seek) &&
        this.elements.inputs.seek.setAttribute("aria-valuemax", this.duration);
      const e = C.element(this.elements.display.duration);
      !e &&
        this.config.displayDuration &&
        this.paused &&
        K.updateTimeDisplay.call(
          this,
          this.elements.display.currentTime,
          this.duration
        ),
        e &&
          K.updateTimeDisplay.call(
            this,
            this.elements.display.duration,
            this.duration
          ),
        this.config.markers.enabled && K.setMarkers.call(this),
        K.updateSeekTooltip.call(this);
    },
    toggleMenuButton(e, i) {
      We(this.elements.settings.buttons[e], !i);
    },
    updateSetting(e, i, s) {
      const n = this.elements.settings.panels[e];
      let a = null,
        r = i;
      if (e === "captions") a = this.currentTrack;
      else {
        if (
          ((a = C.empty(s) ? this[e] : s),
          C.empty(a) && (a = this.config[e].default),
          !C.empty(this.options[e]) && !this.options[e].includes(a))
        )
          return void this.debug.warn(`Unsupported value of '${a}' for ${e}`);
        if (!this.config[e].options.includes(a))
          return void this.debug.warn(`Disabled value of '${a}' for ${e}`);
      }
      if (
        (C.element(r) || (r = n && n.querySelector('[role="menu"]')),
        !C.element(r))
      )
        return;
      this.elements.settings.buttons[e].querySelector(
        `.${this.config.classNames.menu.value}`
      ).innerHTML = K.getLabel.call(this, e, a);
      const p = r && r.querySelector(`[value="${a}"]`);
      C.element(p) && (p.checked = !0);
    },
    getLabel(e, i) {
      switch (e) {
        case "speed":
          return i === 1 ? Ce.get("normal", this.config) : `${i}&times;`;
        case "quality":
          if (C.number(i)) {
            const s = Ce.get(`qualityLabel.${i}`, this.config);
            return s.length ? s : `${i}p`;
          }
          return si(i);
        case "captions":
          return pe.getLabel.call(this);
        default:
          return null;
      }
    },
    setQualityMenu(e) {
      if (!C.element(this.elements.settings.panels.quality)) return;
      const i = "quality",
        s =
          this.elements.settings.panels.quality.querySelector('[role="menu"]');
      C.array(e) &&
        (this.options.quality = ss(e).filter((r) =>
          this.config.quality.options.includes(r)
        ));
      const n =
        !C.empty(this.options.quality) && this.options.quality.length > 1;
      if (
        (K.toggleMenuButton.call(this, i, n), $t(s), K.checkMenu.call(this), !n)
      )
        return;
      const a = (r) => {
        const p = Ce.get(`qualityBadge.${r}`, this.config);
        return p.length ? K.createBadge.call(this, p) : null;
      };
      this.options.quality
        .sort((r, p) => {
          const b = this.config.quality.options;
          return b.indexOf(r) > b.indexOf(p) ? 1 : -1;
        })
        .forEach((r) => {
          K.createMenuItem.call(this, {
            value: r,
            list: s,
            type: i,
            title: K.getLabel.call(this, "quality", r),
            badge: a(r),
          });
        }),
        K.updateSetting.call(this, i, s);
    },
    setCaptionsMenu() {
      if (!C.element(this.elements.settings.panels.captions)) return;
      const e = "captions",
        i =
          this.elements.settings.panels.captions.querySelector('[role="menu"]'),
        s = pe.getTracks.call(this),
        n = !!s.length;
      if (
        (K.toggleMenuButton.call(this, e, n), $t(i), K.checkMenu.call(this), !n)
      )
        return;
      const a = s.map((r, p) => ({
        value: p,
        checked: this.captions.toggled && this.currentTrack === p,
        title: pe.getLabel.call(this, r),
        badge: r.language && K.createBadge.call(this, r.language.toUpperCase()),
        list: i,
        type: "language",
      }));
      a.unshift({
        value: -1,
        checked: !this.captions.toggled,
        title: Ce.get("disabled", this.config),
        list: i,
        type: "language",
      }),
        a.forEach(K.createMenuItem.bind(this)),
        K.updateSetting.call(this, e, i);
    },
    setSpeedMenu() {
      if (!C.element(this.elements.settings.panels.speed)) return;
      const e = "speed",
        i = this.elements.settings.panels.speed.querySelector('[role="menu"]');
      this.options.speed = this.options.speed.filter(
        (n) => n >= this.minimumSpeed && n <= this.maximumSpeed
      );
      const s = !C.empty(this.options.speed) && this.options.speed.length > 1;
      K.toggleMenuButton.call(this, e, s),
        $t(i),
        K.checkMenu.call(this),
        s &&
          (this.options.speed.forEach((n) => {
            K.createMenuItem.call(this, {
              value: n,
              list: i,
              type: e,
              title: K.getLabel.call(this, "speed", n),
            });
          }),
          K.updateSetting.call(this, e, i));
    },
    checkMenu() {
      const { buttons: e } = this.elements.settings,
        i = !C.empty(e) && Object.values(e).some((s) => !s.hidden);
      We(this.elements.settings.menu, !i);
    },
    focusFirstMenuItem(e, i = !1) {
      if (this.elements.settings.popup.hidden) return;
      let s = e;
      C.element(s) ||
        (s = Object.values(this.elements.settings.panels).find(
          (a) => !a.hidden
        ));
      const n = s.querySelector('[role^="menuitem"]');
      Ut.call(this, n, i);
    },
    toggleMenu(e) {
      const { popup: i } = this.elements.settings,
        s = this.elements.buttons.settings;
      if (!C.element(i) || !C.element(s)) return;
      const { hidden: n } = i;
      let a = n;
      if (C.boolean(e)) a = e;
      else if (C.keyboardEvent(e) && e.key === "Escape") a = !1;
      else if (C.event(e)) {
        const r = C.function(e.composedPath) ? e.composedPath()[0] : e.target,
          p = i.contains(r);
        if (p || (!p && e.target !== s && a)) return;
      }
      s.setAttribute("aria-expanded", a),
        We(i, !a),
        me(this.elements.container, this.config.classNames.menu.open, a),
        a && C.keyboardEvent(e)
          ? K.focusFirstMenuItem.call(this, null, !0)
          : a || n || Ut.call(this, s, C.keyboardEvent(e));
    },
    getMenuSize(e) {
      const i = e.cloneNode(!0);
      (i.style.position = "absolute"),
        (i.style.opacity = 0),
        i.removeAttribute("hidden"),
        e.parentNode.appendChild(i);
      const s = i.scrollWidth,
        n = i.scrollHeight;
      return qe(i), { width: s, height: n };
    },
    showMenuPanel(e = "", i = !1) {
      const s = this.elements.container.querySelector(
        `#plyr-settings-${this.id}-${e}`
      );
      if (!C.element(s)) return;
      const n = s.parentNode,
        a = Array.from(n.children).find((r) => !r.hidden);
      if (we.transitions && !we.reducedMotion) {
        (n.style.width = `${a.scrollWidth}px`),
          (n.style.height = `${a.scrollHeight}px`);
        const r = K.getMenuSize.call(this, s),
          p = (b) => {
            b.target === n &&
              ["width", "height"].includes(b.propertyName) &&
              ((n.style.width = ""),
              (n.style.height = ""),
              zt.call(this, n, es, p));
          };
        ue.call(this, n, es, p),
          (n.style.width = `${r.width}px`),
          (n.style.height = `${r.height}px`);
      }
      We(a, !0), We(s, !1), K.focusFirstMenuItem.call(this, s, i);
    },
    setDownloadUrl() {
      const e = this.elements.buttons.download;
      C.element(e) && e.setAttribute("href", this.download);
    },
    create(e) {
      const {
        bindMenuItemShortcuts: i,
        createButton: s,
        createProgress: n,
        createRange: a,
        createTime: r,
        setQualityMenu: p,
        setSpeedMenu: b,
        showMenuPanel: w,
      } = K;
      (this.elements.controls = null),
        C.array(this.config.controls) &&
          this.config.controls.includes("play-large") &&
          this.elements.container.appendChild(s.call(this, "play-large"));
      const f = re("div", Oe(this.config.selectors.controls.wrapper));
      this.elements.controls = f;
      const $ = { class: "plyr__controls__item" };
      return (
        ss(C.array(this.config.controls) ? this.config.controls : []).forEach(
          (A) => {
            if (
              (A === "restart" && f.appendChild(s.call(this, "restart", $)),
              A === "rewind" && f.appendChild(s.call(this, "rewind", $)),
              A === "play" && f.appendChild(s.call(this, "play", $)),
              A === "fast-forward" &&
                f.appendChild(s.call(this, "fast-forward", $)),
              A === "progress")
            ) {
              const M = re("div", {
                  class: `${$.class} plyr__progress__container`,
                }),
                z = re("div", Oe(this.config.selectors.progress));
              if (
                (z.appendChild(
                  a.call(this, "seek", { id: `plyr-seek-${e.id}` })
                ),
                z.appendChild(n.call(this, "buffer")),
                this.config.tooltips.seek)
              ) {
                const H = re(
                  "span",
                  { class: this.config.classNames.tooltip },
                  "00:00"
                );
                z.appendChild(H), (this.elements.display.seekTooltip = H);
              }
              (this.elements.progress = z),
                M.appendChild(this.elements.progress),
                f.appendChild(M);
            }
            if (
              (A === "current-time" &&
                f.appendChild(r.call(this, "currentTime", $)),
              A === "duration" && f.appendChild(r.call(this, "duration", $)),
              A === "mute" || A === "volume")
            ) {
              let { volume: M } = this.elements;
              if (
                ((C.element(M) && f.contains(M)) ||
                  ((M = re(
                    "div",
                    ye({}, $, { class: `${$.class} plyr__volume`.trim() })
                  )),
                  (this.elements.volume = M),
                  f.appendChild(M)),
                A === "mute" && M.appendChild(s.call(this, "mute")),
                A === "volume" && !xe.isIos && !xe.isIPadOS)
              ) {
                const z = { max: 1, step: 0.05, value: this.config.volume };
                M.appendChild(
                  a.call(this, "volume", ye(z, { id: `plyr-volume-${e.id}` }))
                );
              }
            }
            if (
              (A === "captions" && f.appendChild(s.call(this, "captions", $)),
              A === "settings" && !C.empty(this.config.settings))
            ) {
              const M = re(
                "div",
                ye({}, $, { class: `${$.class} plyr__menu`.trim(), hidden: "" })
              );
              M.appendChild(
                s.call(this, "settings", {
                  "aria-haspopup": !0,
                  "aria-controls": `plyr-settings-${e.id}`,
                  "aria-expanded": !1,
                })
              );
              const z = re("div", {
                  class: "plyr__menu__container",
                  id: `plyr-settings-${e.id}`,
                  hidden: "",
                }),
                H = re("div"),
                L = re("div", { id: `plyr-settings-${e.id}-home` }),
                I = re("div", { role: "menu" });
              L.appendChild(I),
                H.appendChild(L),
                (this.elements.settings.panels.home = L),
                this.config.settings.forEach((B) => {
                  const O = re(
                    "button",
                    ye(Oe(this.config.selectors.buttons.settings), {
                      type: "button",
                      class: `${this.config.classNames.control} ${this.config.classNames.control}--forward`,
                      role: "menuitem",
                      "aria-haspopup": !0,
                      hidden: "",
                    })
                  );
                  i.call(this, O, B),
                    ue.call(this, O, "click", () => {
                      w.call(this, B, !1);
                    });
                  const R = re("span", null, Ce.get(B, this.config)),
                    J = re("span", {
                      class: this.config.classNames.menu.value,
                    });
                  (J.innerHTML = e[B]),
                    R.appendChild(J),
                    O.appendChild(R),
                    I.appendChild(O);
                  const te = re("div", {
                      id: `plyr-settings-${e.id}-${B}`,
                      hidden: "",
                    }),
                    ce = re("button", {
                      type: "button",
                      class: `${this.config.classNames.control} ${this.config.classNames.control}--back`,
                    });
                  ce.appendChild(
                    re("span", { "aria-hidden": !0 }, Ce.get(B, this.config))
                  ),
                    ce.appendChild(
                      re(
                        "span",
                        { class: this.config.classNames.hidden },
                        Ce.get("menuBack", this.config)
                      )
                    ),
                    ue.call(
                      this,
                      te,
                      "keydown",
                      (be) => {
                        be.key === "ArrowLeft" &&
                          (be.preventDefault(),
                          be.stopPropagation(),
                          w.call(this, "home", !0));
                      },
                      !1
                    ),
                    ue.call(this, ce, "click", () => {
                      w.call(this, "home", !1);
                    }),
                    te.appendChild(ce),
                    te.appendChild(re("div", { role: "menu" })),
                    H.appendChild(te),
                    (this.elements.settings.buttons[B] = O),
                    (this.elements.settings.panels[B] = te);
                }),
                z.appendChild(H),
                M.appendChild(z),
                f.appendChild(M),
                (this.elements.settings.popup = z),
                (this.elements.settings.menu = M);
            }
            if (
              (A === "pip" && we.pip && f.appendChild(s.call(this, "pip", $)),
              A === "airplay" &&
                we.airplay &&
                f.appendChild(s.call(this, "airplay", $)),
              A === "download")
            ) {
              const M = ye({}, $, {
                element: "a",
                href: this.download,
                target: "_blank",
              });
              this.isHTML5 && (M.download = "");
              const { download: z } = this.config.urls;
              !C.url(z) &&
                this.isEmbed &&
                ye(M, { icon: `logo-${this.provider}`, label: this.provider }),
                f.appendChild(s.call(this, "download", M));
            }
            A === "fullscreen" && f.appendChild(s.call(this, "fullscreen", $));
          }
        ),
        this.isHTML5 && p.call(this, Ve.getQualityOptions.call(this)),
        b.call(this),
        f
      );
    },
    inject() {
      if (this.config.loadSprite) {
        const a = K.getIconUrl.call(this);
        a.cors && ii(a.url, "sprite-plyr");
      }
      this.id = Math.floor(1e4 * Math.random());
      let e = null;
      this.elements.controls = null;
      const i = {
        id: this.id,
        seektime: this.config.seekTime,
        title: this.config.title,
      };
      let s = !0;
      C.function(this.config.controls) &&
        (this.config.controls = this.config.controls.call(this, i)),
        this.config.controls || (this.config.controls = []),
        C.element(this.config.controls) || C.string(this.config.controls)
          ? (e = this.config.controls)
          : ((e = K.create.call(this, {
              id: this.id,
              seektime: this.config.seekTime,
              speed: this.speed,
              quality: this.quality,
              captions: pe.getLabel.call(this),
            })),
            (s = !1));
      let n;
      if (
        (s &&
          C.string(this.config.controls) &&
          (e = ((a) => {
            let r = a;
            return (
              Object.entries(i).forEach(([p, b]) => {
                r = ot(r, `{${p}}`, b);
              }),
              r
            );
          })(e)),
        C.string(this.config.selectors.controls.container) &&
          (n = document.querySelector(
            this.config.selectors.controls.container
          )),
        C.element(n) || (n = this.elements.container),
        n[C.element(e) ? "insertAdjacentElement" : "insertAdjacentHTML"](
          "afterbegin",
          e
        ),
        C.element(this.elements.controls) || K.findElements.call(this),
        !C.empty(this.elements.buttons))
      ) {
        const a = (r) => {
          const p = this.config.classNames.controlPressed;
          r.setAttribute("aria-pressed", "false"),
            Object.defineProperty(r, "pressed", {
              configurable: !0,
              enumerable: !0,
              get: () => At(r, p),
              set(b = !1) {
                me(r, p, b),
                  r.setAttribute("aria-pressed", b ? "true" : "false");
              },
            });
        };
        Object.values(this.elements.buttons)
          .filter(Boolean)
          .forEach((r) => {
            C.array(r) || C.nodeList(r)
              ? Array.from(r).filter(Boolean).forEach(a)
              : a(r);
          });
      }
      if ((xe.isEdge && Us(n), this.config.tooltips.controls)) {
        const { classNames: a, selectors: r } = this.config,
          p = `${r.controls.wrapper} ${r.labels} .${a.hidden}`,
          b = ut.call(this, p);
        Array.from(b).forEach((w) => {
          me(w, this.config.classNames.hidden, !1),
            me(w, this.config.classNames.tooltip, !0);
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
      } catch {}
    },
    setMarkers() {
      var e, i;
      if (!this.duration || this.elements.markers) return;
      const s =
        (e = this.config.markers) === null ||
        e === void 0 ||
        (i = e.points) === null ||
        i === void 0
          ? void 0
          : i.filter(({ time: w }) => w > 0 && w < this.duration);
      if (s == null || !s.length) return;
      const n = document.createDocumentFragment(),
        a = document.createDocumentFragment();
      let r = null;
      const p = `${this.config.classNames.tooltip}--visible`,
        b = (w) => me(r, p, w);
      s.forEach((w) => {
        const f = re("span", { class: this.config.classNames.marker }, ""),
          $ = (w.time / this.duration) * 100 + "%";
        r &&
          (f.addEventListener("mouseenter", () => {
            w.label || ((r.style.left = $), (r.innerHTML = w.label), b(!0));
          }),
          f.addEventListener("mouseleave", () => {
            b(!1);
          })),
          f.addEventListener("click", () => {
            this.currentTime = w.time;
          }),
          (f.style.left = $),
          a.appendChild(f);
      }),
        n.appendChild(a),
        this.config.tooltips.seek ||
          ((r = re("span", { class: this.config.classNames.tooltip }, "")),
          n.appendChild(r)),
        (this.elements.markers = { points: a, tip: r }),
        this.elements.progress.appendChild(n);
    },
  };
  function ai(e, i = !0) {
    let s = e;
    if (i) {
      const n = document.createElement("a");
      (n.href = s), (s = n.href);
    }
    try {
      return new URL(s);
    } catch {
      return null;
    }
  }
  function ri(e) {
    const i = new URLSearchParams();
    return (
      C.object(e) &&
        Object.entries(e).forEach(([s, n]) => {
          i.set(s, n);
        }),
      i
    );
  }
  const pe = {
      setup() {
        if (!this.supported.ui) return;
        if (!this.isVideo || this.isYouTube || (this.isHTML5 && !we.textTracks))
          return void (
            C.array(this.config.controls) &&
            this.config.controls.includes("settings") &&
            this.config.settings.includes("captions") &&
            K.setCaptionsMenu.call(this)
          );
        if (
          (C.element(this.elements.captions) ||
            ((this.elements.captions = re(
              "div",
              Oe(this.config.selectors.captions)
            )),
            this.elements.captions.setAttribute("dir", "auto"),
            lr(this.elements.captions, this.elements.wrapper)),
          xe.isIE && window.URL)
        ) {
          const n = this.media.querySelectorAll("track");
          Array.from(n).forEach((a) => {
            const r = a.getAttribute("src"),
              p = ai(r);
            p !== null &&
              p.hostname !== window.location.href.hostname &&
              ["http:", "https:"].includes(p.protocol) &&
              vt(r, "blob")
                .then((b) => {
                  a.setAttribute("src", window.URL.createObjectURL(b));
                })
                .catch(() => {
                  qe(a);
                });
          });
        }
        const e = ss(
          (
            navigator.languages || [
              navigator.language || navigator.userLanguage || "en",
            ]
          ).map((n) => n.split("-")[0])
        );
        let i = (
          this.storage.get("language") ||
          this.config.captions.language ||
          "auto"
        ).toLowerCase();
        i === "auto" && ([i] = e);
        let s = this.storage.get("captions");
        if (
          (C.boolean(s) || ({ active: s } = this.config.captions),
          Object.assign(this.captions, {
            toggled: !1,
            active: s,
            language: i,
            languages: e,
          }),
          this.isHTML5)
        ) {
          const n = this.config.captions.update
            ? "addtrack removetrack"
            : "removetrack";
          ue.call(this, this.media.textTracks, n, pe.update.bind(this));
        }
        setTimeout(pe.update.bind(this), 0);
      },
      update() {
        const e = pe.getTracks.call(this, !0),
          {
            active: i,
            language: s,
            meta: n,
            currentTrackNode: a,
          } = this.captions,
          r = !!e.find((p) => p.language === s);
        this.isHTML5 &&
          this.isVideo &&
          e
            .filter((p) => !n.get(p))
            .forEach((p) => {
              this.debug.log("Track added", p),
                n.set(p, { default: p.mode === "showing" }),
                p.mode === "showing" && (p.mode = "hidden"),
                ue.call(this, p, "cuechange", () => pe.updateCues.call(this));
            }),
          ((r && this.language !== s) || !e.includes(a)) &&
            (pe.setLanguage.call(this, s), pe.toggle.call(this, i && r)),
          this.elements &&
            me(
              this.elements.container,
              this.config.classNames.captions.enabled,
              !C.empty(e)
            ),
          C.array(this.config.controls) &&
            this.config.controls.includes("settings") &&
            this.config.settings.includes("captions") &&
            K.setCaptionsMenu.call(this);
      },
      toggle(e, i = !0) {
        if (!this.supported.ui) return;
        const { toggled: s } = this.captions,
          n = this.config.classNames.captions.active,
          a = C.nullOrUndefined(e) ? !s : e;
        if (a !== s) {
          if (
            (i ||
              ((this.captions.active = a), this.storage.set({ captions: a })),
            !this.language && a && !i)
          ) {
            const r = pe.getTracks.call(this),
              p = pe.findTrack.call(
                this,
                [this.captions.language, ...this.captions.languages],
                !0
              );
            return (
              (this.captions.language = p.language),
              void pe.set.call(this, r.indexOf(p))
            );
          }
          this.elements.buttons.captions &&
            (this.elements.buttons.captions.pressed = a),
            me(this.elements.container, n, a),
            (this.captions.toggled = a),
            K.updateSetting.call(this, "captions"),
            le.call(
              this,
              this.media,
              a ? "captionsenabled" : "captionsdisabled"
            );
        }
        setTimeout(() => {
          a &&
            this.captions.toggled &&
            (this.captions.currentTrackNode.mode = "hidden");
        });
      },
      set(e, i = !0) {
        const s = pe.getTracks.call(this);
        if (e !== -1)
          if (C.number(e))
            if (e in s) {
              if (this.captions.currentTrack !== e) {
                this.captions.currentTrack = e;
                const n = s[e],
                  { language: a } = n || {};
                (this.captions.currentTrackNode = n),
                  K.updateSetting.call(this, "captions"),
                  i ||
                    ((this.captions.language = a),
                    this.storage.set({ language: a })),
                  this.isVimeo && this.embed.enableTextTrack(a),
                  le.call(this, this.media, "languagechange");
              }
              pe.toggle.call(this, !0, i),
                this.isHTML5 && this.isVideo && pe.updateCues.call(this);
            } else this.debug.warn("Track not found", e);
          else this.debug.warn("Invalid caption argument", e);
        else pe.toggle.call(this, !1, i);
      },
      setLanguage(e, i = !0) {
        if (!C.string(e))
          return void this.debug.warn("Invalid language argument", e);
        const s = e.toLowerCase();
        this.captions.language = s;
        const n = pe.getTracks.call(this),
          a = pe.findTrack.call(this, [s]);
        pe.set.call(this, n.indexOf(a), i);
      },
      getTracks(e = !1) {
        return Array.from((this.media || {}).textTracks || [])
          .filter((i) => !this.isHTML5 || e || this.captions.meta.has(i))
          .filter((i) => ["captions", "subtitles"].includes(i.kind));
      },
      findTrack(e, i = !1) {
        const s = pe.getTracks.call(this),
          n = (p) => Number((this.captions.meta.get(p) || {}).default),
          a = Array.from(s).sort((p, b) => n(b) - n(p));
        let r;
        return (
          e.every((p) => ((r = a.find((b) => b.language === p)), !r)),
          r || (i ? a[0] : void 0)
        );
      },
      getCurrentTrack() {
        return pe.getTracks.call(this)[this.currentTrack];
      },
      getLabel(e) {
        let i = e;
        return (
          !C.track(i) &&
            we.textTracks &&
            this.captions.toggled &&
            (i = pe.getCurrentTrack.call(this)),
          C.track(i)
            ? C.empty(i.label)
              ? C.empty(i.language)
                ? Ce.get("enabled", this.config)
                : e.language.toUpperCase()
              : i.label
            : Ce.get("disabled", this.config)
        );
      },
      updateCues(e) {
        if (!this.supported.ui) return;
        if (!C.element(this.elements.captions))
          return void this.debug.warn("No captions element to render to");
        if (!C.nullOrUndefined(e) && !Array.isArray(e))
          return void this.debug.warn("updateCues: Invalid input", e);
        let i = e;
        if (!i) {
          const n = pe.getCurrentTrack.call(this);
          i = Array.from((n || {}).activeCues || [])
            .map((a) => a.getCueAsHTML())
            .map(br);
        }
        const s = i.map((n) => n.trim()).join(`
`);
        if (s !== this.elements.captions.innerHTML) {
          $t(this.elements.captions);
          const n = re("span", Oe(this.config.selectors.caption));
          (n.innerHTML = s),
            this.elements.captions.appendChild(n),
            le.call(this, this.media, "cuechange");
        }
      },
    },
    li = {
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
      speed: { selected: 1, options: [0.5, 0.75, 1, 1.25, 1.5, 1.75, 2, 4] },
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
        pip: { supported: "plyr--pip-supported", active: "plyr--pip-active" },
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
    Kt = { active: "picture-in-picture", inactive: "inline" },
    je = { html5: "html5", youtube: "youtube", vimeo: "vimeo" },
    Qt = { audio: "audio", video: "video" };
  function Tr(e) {
    return /^(https?:\/\/)?(www\.)?(youtube\.com|youtube-nocookie\.com|youtu\.?be)\/.+$/.test(
      e
    )
      ? je.youtube
      : /^https?:\/\/player.vimeo.com\/video\/\d{0,9}(?=\b|\/)/.test(e)
      ? je.vimeo
      : null;
  }
  const Jt = () => {};
  class Sr {
    constructor(i = !1) {
      (this.enabled = window.console && i),
        this.enabled && this.log("Debugging enabled");
    }
    get log() {
      return this.enabled
        ? Function.prototype.bind.call(console.log, console)
        : Jt;
    }
    get warn() {
      return this.enabled
        ? Function.prototype.bind.call(console.warn, console)
        : Jt;
    }
    get error() {
      return this.enabled
        ? Function.prototype.bind.call(console.error, console)
        : Jt;
    }
  }
  class Ie {
    constructor(i) {
      Q(this, "onChange", () => {
        if (!this.supported) return;
        const s = this.player.elements.buttons.fullscreen;
        C.element(s) && (s.pressed = this.active);
        const n =
          this.target === this.player.media
            ? this.target
            : this.player.elements.container;
        le.call(
          this.player,
          n,
          this.active ? "enterfullscreen" : "exitfullscreen",
          !0
        );
      }),
        Q(this, "toggleFallback", (s = !1) => {
          if (
            (s
              ? (this.scrollPosition = {
                  x: window.scrollX ?? 0,
                  y: window.scrollY ?? 0,
                })
              : window.scrollTo(this.scrollPosition.x, this.scrollPosition.y),
            (document.body.style.overflow = s ? "hidden" : ""),
            me(
              this.target,
              this.player.config.classNames.fullscreen.fallback,
              s
            ),
            xe.isIos)
          ) {
            let n = document.head.querySelector('meta[name="viewport"]');
            const a = "viewport-fit=cover";
            n ||
              ((n = document.createElement("meta")),
              n.setAttribute("name", "viewport"));
            const r = C.string(n.content) && n.content.includes(a);
            s
              ? ((this.cleanupViewport = !r), r || (n.content += `,${a}`))
              : this.cleanupViewport &&
                (n.content = n.content
                  .split(",")
                  .filter((p) => p.trim() !== a)
                  .join(","));
          }
          this.onChange();
        }),
        Q(this, "trapFocus", (s) => {
          if (xe.isIos || xe.isIPadOS || !this.active || s.key !== "Tab")
            return;
          const n = document.activeElement,
            a = ut.call(
              this.player,
              "a[href], button:not(:disabled), input:not(:disabled), [tabindex]"
            ),
            [r] = a,
            p = a[a.length - 1];
          n !== p || s.shiftKey
            ? n === r && s.shiftKey && (p.focus(), s.preventDefault())
            : (r.focus(), s.preventDefault());
        }),
        Q(this, "update", () => {
          if (this.supported) {
            let s;
            (s = this.forceFallback
              ? "Fallback (forced)"
              : Ie.nativeSupported
              ? "Native"
              : "Fallback"),
              this.player.debug.log(`${s} fullscreen enabled`);
          } else
            this.player.debug.log(
              "Fullscreen not supported and fallback disabled"
            );
          me(
            this.player.elements.container,
            this.player.config.classNames.fullscreen.enabled,
            this.supported
          );
        }),
        Q(this, "enter", () => {
          this.supported &&
            (xe.isIos && this.player.config.fullscreen.iosNative
              ? this.player.isVimeo
                ? this.player.embed.requestFullscreen()
                : this.target.webkitEnterFullscreen()
              : !Ie.nativeSupported || this.forceFallback
              ? this.toggleFallback(!0)
              : this.prefix
              ? C.empty(this.prefix) ||
                this.target[`${this.prefix}Request${this.property}`]()
              : this.target.requestFullscreen({ navigationUI: "hide" }));
        }),
        Q(this, "exit", () => {
          if (this.supported)
            if (xe.isIos && this.player.config.fullscreen.iosNative)
              this.player.isVimeo
                ? this.player.embed.exitFullscreen()
                : this.target.webkitEnterFullscreen(),
                ze(this.player.play());
            else if (!Ie.nativeSupported || this.forceFallback)
              this.toggleFallback(!1);
            else if (this.prefix) {
              if (!C.empty(this.prefix)) {
                const s = this.prefix === "moz" ? "Cancel" : "Exit";
                document[`${this.prefix}${s}${this.property}`]();
              }
            } else
              (document.cancelFullScreen || document.exitFullscreen).call(
                document
              );
        }),
        Q(this, "toggle", () => {
          this.active ? this.exit() : this.enter();
        }),
        (this.player = i),
        (this.prefix = Ie.prefix),
        (this.property = Ie.property),
        (this.scrollPosition = { x: 0, y: 0 }),
        (this.forceFallback = i.config.fullscreen.fallback === "force"),
        (this.player.elements.fullscreen =
          i.config.fullscreen.container &&
          or(this.player.elements.container, i.config.fullscreen.container)),
        ue.call(
          this.player,
          document,
          this.prefix === "ms"
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
          (s) => {
            (C.element(this.player.elements.controls) &&
              this.player.elements.controls.contains(s.target)) ||
              this.player.listeners.proxy(s, this.toggle, "fullscreen");
          }
        ),
        ue.call(this, this.player.elements.container, "keydown", (s) =>
          this.trapFocus(s)
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
      return Ie.nativeSupported && !this.forceFallback;
    }
    static get prefix() {
      if (C.function(document.exitFullscreen)) return "";
      let i = "";
      return (
        ["webkit", "moz", "ms"].some(
          (s) =>
            !(
              !C.function(document[`${s}ExitFullscreen`]) &&
              !C.function(document[`${s}CancelFullScreen`])
            ) && ((i = s), !0)
        ),
        i
      );
    }
    static get property() {
      return this.prefix === "moz" ? "FullScreen" : "Fullscreen";
    }
    get supported() {
      return [
        this.player.config.fullscreen.enabled,
        this.player.isVideo,
        Ie.nativeSupported || this.player.config.fullscreen.fallback,
        !this.player.isYouTube ||
          Ie.nativeSupported ||
          !xe.isIos ||
          (this.player.config.playsinline &&
            !this.player.config.fullscreen.iosNative),
      ].every(Boolean);
    }
    get active() {
      if (!this.supported) return !1;
      if (!Ie.nativeSupported || this.forceFallback)
        return At(
          this.target,
          this.player.config.classNames.fullscreen.fallback
        );
      const i = this.prefix
        ? this.target.getRootNode()[`${this.prefix}${this.property}Element`]
        : this.target.getRootNode().fullscreenElement;
      return i && i.shadowRoot
        ? i === this.target.getRootNode().host
        : i === this.target;
    }
    get target() {
      return xe.isIos && this.player.config.fullscreen.iosNative
        ? this.player.media
        : this.player.elements.fullscreen ?? this.player.elements.container;
    }
  }
  function kt(e, i = 1) {
    return new Promise((s, n) => {
      const a = new Image(),
        r = () => {
          delete a.onload, delete a.onerror, (a.naturalWidth >= i ? s : n)(a);
        };
      Object.assign(a, { onload: r, onerror: r, src: e });
    });
  }
  const ve = {
    addStyleHook() {
      me(
        this.elements.container,
        this.config.selectors.container.replace(".", ""),
        !0
      ),
        me(
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
          void ve.toggleNativeControls.call(this, !0)
        );
      C.element(this.elements.controls) ||
        (K.inject.call(this), this.listeners.controls()),
        ve.toggleNativeControls.call(this),
        this.isHTML5 && pe.setup.call(this),
        (this.volume = null),
        (this.muted = null),
        (this.loop = null),
        (this.quality = null),
        (this.speed = null),
        K.updateVolume.call(this),
        K.timeUpdate.call(this),
        K.durationUpdate.call(this),
        ve.checkPlaying.call(this),
        me(
          this.elements.container,
          this.config.classNames.pip.supported,
          we.pip && this.isHTML5 && this.isVideo
        ),
        me(
          this.elements.container,
          this.config.classNames.airplay.supported,
          we.airplay && this.isHTML5
        ),
        me(this.elements.container, this.config.classNames.isTouch, this.touch),
        (this.ready = !0),
        setTimeout(() => {
          le.call(this, this.media, "ready");
        }, 0),
        ve.setTitle.call(this),
        this.poster && ve.setPoster.call(this, this.poster, !1).catch(() => {}),
        this.config.duration && K.durationUpdate.call(this),
        this.config.mediaMetadata && K.setMediaMetadata.call(this);
    },
    setTitle() {
      let e = Ce.get("play", this.config);
      if (
        (C.string(this.config.title) &&
          !C.empty(this.config.title) &&
          (e += `, ${this.config.title}`),
        Array.from(this.elements.buttons.play || []).forEach((i) => {
          i.setAttribute("aria-label", e);
        }),
        this.isEmbed)
      ) {
        const i = Te.call(this, "iframe");
        if (!C.element(i)) return;
        const s = C.empty(this.config.title) ? "video" : this.config.title,
          n = Ce.get("frameTitle", this.config);
        i.setAttribute("title", n.replace("{title}", s));
      }
    },
    togglePoster(e) {
      me(this.elements.container, this.config.classNames.posterEnabled, e);
    },
    setPoster(e, i = !0) {
      return i && this.poster
        ? Promise.reject(new Error("Poster already set"))
        : (this.media.setAttribute("data-poster", e),
          this.elements.poster.removeAttribute("hidden"),
          ur
            .call(this)
            .then(() => kt(e))
            .catch((s) => {
              throw (e === this.poster && ve.togglePoster.call(this, !1), s);
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
                ve.togglePoster.call(this, !0),
                e
              )
            ));
    },
    checkPlaying(e) {
      me(this.elements.container, this.config.classNames.playing, this.playing),
        me(this.elements.container, this.config.classNames.paused, this.paused),
        me(
          this.elements.container,
          this.config.classNames.stopped,
          this.stopped
        ),
        Array.from(this.elements.buttons.play || []).forEach((i) => {
          Object.assign(i, { pressed: this.playing }),
            i.setAttribute(
              "aria-label",
              Ce.get(this.playing ? "pause" : "play", this.config)
            );
        }),
        (C.event(e) && e.type === "timeupdate") || ve.toggleControls.call(this);
    },
    checkLoading(e) {
      (this.loading = ["stalled", "waiting"].includes(e.type)),
        clearTimeout(this.timers.loading),
        (this.timers.loading = setTimeout(
          () => {
            me(
              this.elements.container,
              this.config.classNames.loading,
              this.loading
            ),
              ve.toggleControls.call(this);
          },
          this.loading ? 250 : 0
        ));
    },
    toggleControls(e) {
      const { controls: i } = this.elements;
      if (i && this.config.hideControls) {
        const s = this.touch && this.lastSeekTime + 2e3 > Date.now();
        this.toggleControls(
          !!(e || this.loading || this.paused || i.pressed || i.hover || s)
        );
      }
    },
    migrateStyles() {
      Object.values({ ...this.media.style })
        .filter((e) => !C.empty(e) && C.string(e) && e.startsWith("--plyr"))
        .forEach((e) => {
          this.elements.container.style.setProperty(
            e,
            this.media.style.getPropertyValue(e)
          ),
            this.media.style.removeProperty(e);
        }),
        C.empty(this.media.style) && this.media.removeAttribute("style");
    },
  };
  class Er {
    constructor(i) {
      Q(this, "firstTouch", () => {
        const { player: s } = this,
          { elements: n } = s;
        (s.touch = !0), me(n.container, s.config.classNames.isTouch, !0);
      }),
        Q(this, "global", (s = !0) => {
          const { player: n } = this;
          n.config.keyboard.global &&
            pt.call(n, window, "keydown keyup", this.handleKey, s, !1),
            pt.call(n, document.body, "click", this.toggleMenu, s),
            us.call(n, document.body, "touchstart", this.firstTouch);
        }),
        Q(this, "container", () => {
          const { player: s } = this,
            { config: n, elements: a, timers: r } = s;
          !n.keyboard.global &&
            n.keyboard.focused &&
            ue.call(s, a.container, "keydown keyup", this.handleKey, !1),
            ue.call(
              s,
              a.container,
              "mousemove mouseleave touchstart touchmove enterfullscreen exitfullscreen",
              (w) => {
                const { controls: f } = a;
                f &&
                  w.type === "enterfullscreen" &&
                  ((f.pressed = !1), (f.hover = !1));
                let $ = 0;
                ["touchstart", "touchmove", "mousemove"].includes(w.type) &&
                  (ve.toggleControls.call(s, !0), ($ = s.touch ? 3e3 : 2e3)),
                  clearTimeout(r.controls),
                  (r.controls = setTimeout(
                    () => ve.toggleControls.call(s, !1),
                    $
                  ));
              }
            );
          const p = () => {
              if (!s.isVimeo || s.config.vimeo.premium) return;
              const w = a.wrapper,
                { active: f } = s.fullscreen,
                [$, A] = ps.call(s),
                M = Zs(`aspect-ratio: ${$} / ${A}`);
              if (!f)
                return void (M
                  ? ((w.style.width = null), (w.style.height = null))
                  : ((w.style.maxWidth = null), (w.style.margin = null)));
              const [z, H] = pr(),
                L = z / H > $ / A;
              M
                ? ((w.style.width = L ? "auto" : "100%"),
                  (w.style.height = L ? "100%" : "auto"))
                : ((w.style.maxWidth = L ? (H / A) * $ + "px" : null),
                  (w.style.margin = L ? "0 auto" : null));
            },
            b = () => {
              clearTimeout(r.resized), (r.resized = setTimeout(p, 50));
            };
          ue.call(s, a.container, "enterfullscreen exitfullscreen", (w) => {
            const { target: f } = s.fullscreen;
            f === a.container &&
              ((!s.isEmbed && C.empty(s.config.ratio)) ||
                (p(),
                (w.type === "enterfullscreen" ? ue : zt).call(
                  s,
                  window,
                  "resize",
                  b
                )));
          });
        }),
        Q(this, "media", () => {
          const { player: s } = this,
            { elements: n } = s;
          if (
            (ue.call(s, s.media, "timeupdate seeking seeked", (r) =>
              K.timeUpdate.call(s, r)
            ),
            ue.call(
              s,
              s.media,
              "durationchange loadeddata loadedmetadata",
              (r) => K.durationUpdate.call(s, r)
            ),
            ue.call(s, s.media, "ended", () => {
              s.isHTML5 &&
                s.isVideo &&
                s.config.resetOnEnd &&
                (s.restart(), s.pause());
            }),
            ue.call(s, s.media, "progress playing seeking seeked", (r) =>
              K.updateProgress.call(s, r)
            ),
            ue.call(s, s.media, "volumechange", (r) =>
              K.updateVolume.call(s, r)
            ),
            ue.call(
              s,
              s.media,
              "playing play pause ended emptied timeupdate",
              (r) => ve.checkPlaying.call(s, r)
            ),
            ue.call(s, s.media, "waiting canplay seeked playing", (r) =>
              ve.checkLoading.call(s, r)
            ),
            s.supported.ui && s.config.clickToPlay && !s.isAudio)
          ) {
            const r = Te.call(s, `.${s.config.classNames.video}`);
            if (!C.element(r)) return;
            ue.call(s, n.container, "click", (p) => {
              ([n.container, r].includes(p.target) || r.contains(p.target)) &&
                ((s.touch && s.config.hideControls) ||
                  (s.ended
                    ? (this.proxy(p, s.restart, "restart"),
                      this.proxy(
                        p,
                        () => {
                          ze(s.play());
                        },
                        "play"
                      ))
                    : this.proxy(
                        p,
                        () => {
                          ze(s.togglePlay());
                        },
                        "play"
                      )));
            });
          }
          s.supported.ui &&
            s.config.disableContextMenu &&
            ue.call(
              s,
              n.wrapper,
              "contextmenu",
              (r) => {
                r.preventDefault();
              },
              !1
            ),
            ue.call(s, s.media, "volumechange", () => {
              s.storage.set({ volume: s.volume, muted: s.muted });
            }),
            ue.call(s, s.media, "ratechange", () => {
              K.updateSetting.call(s, "speed"),
                s.storage.set({ speed: s.speed });
            }),
            ue.call(s, s.media, "qualitychange", (r) => {
              K.updateSetting.call(s, "quality", null, r.detail.quality);
            }),
            ue.call(s, s.media, "ready qualitychange", () => {
              K.setDownloadUrl.call(s);
            });
          const a = s.config.events.concat(["keyup", "keydown"]).join(" ");
          ue.call(s, s.media, a, (r) => {
            let { detail: p = {} } = r;
            r.type === "error" && (p = s.media.error),
              le.call(s, n.container, r.type, !0, p);
          });
        }),
        Q(this, "proxy", (s, n, a) => {
          const { player: r } = this,
            p = r.config.listeners[a];
          let b = !0;
          C.function(p) && (b = p.call(r, s)),
            b !== !1 && C.function(n) && n.call(r, s);
        }),
        Q(this, "bind", (s, n, a, r, p = !0) => {
          const { player: b } = this,
            w = b.config.listeners[r],
            f = C.function(w);
          ue.call(b, s, n, ($) => this.proxy($, a, r), p && !f);
        }),
        Q(this, "controls", () => {
          const { player: s } = this,
            { elements: n } = s,
            a = xe.isIE ? "change" : "input";
          if (
            (n.buttons.play &&
              Array.from(n.buttons.play).forEach((r) => {
                this.bind(
                  r,
                  "click",
                  () => {
                    ze(s.togglePlay());
                  },
                  "play"
                );
              }),
            this.bind(n.buttons.restart, "click", s.restart, "restart"),
            this.bind(
              n.buttons.rewind,
              "click",
              () => {
                (s.lastSeekTime = Date.now()), s.rewind();
              },
              "rewind"
            ),
            this.bind(
              n.buttons.fastForward,
              "click",
              () => {
                (s.lastSeekTime = Date.now()), s.forward();
              },
              "fastForward"
            ),
            this.bind(
              n.buttons.mute,
              "click",
              () => {
                s.muted = !s.muted;
              },
              "mute"
            ),
            this.bind(n.buttons.captions, "click", () => s.toggleCaptions()),
            this.bind(
              n.buttons.download,
              "click",
              () => {
                le.call(s, s.media, "download");
              },
              "download"
            ),
            this.bind(
              n.buttons.fullscreen,
              "click",
              () => {
                s.fullscreen.toggle();
              },
              "fullscreen"
            ),
            this.bind(
              n.buttons.pip,
              "click",
              () => {
                s.pip = "toggle";
              },
              "pip"
            ),
            this.bind(n.buttons.airplay, "click", s.airplay, "airplay"),
            this.bind(
              n.buttons.settings,
              "click",
              (r) => {
                r.stopPropagation(),
                  r.preventDefault(),
                  K.toggleMenu.call(s, r);
              },
              null,
              !1
            ),
            this.bind(
              n.buttons.settings,
              "keyup",
              (r) => {
                [" ", "Enter"].includes(r.key) &&
                  (r.key !== "Enter"
                    ? (r.preventDefault(),
                      r.stopPropagation(),
                      K.toggleMenu.call(s, r))
                    : K.focusFirstMenuItem.call(s, null, !0));
              },
              null,
              !1
            ),
            this.bind(n.settings.menu, "keydown", (r) => {
              r.key === "Escape" && K.toggleMenu.call(s, r);
            }),
            this.bind(n.inputs.seek, "mousedown mousemove", (r) => {
              const p = n.progress.getBoundingClientRect(),
                b = (100 / p.width) * (r.pageX - p.left);
              r.currentTarget.setAttribute("seek-value", b);
            }),
            this.bind(
              n.inputs.seek,
              "mousedown mouseup keydown keyup touchstart touchend",
              (r) => {
                const p = r.currentTarget,
                  b = "play-on-seeked";
                if (
                  C.keyboardEvent(r) &&
                  !["ArrowLeft", "ArrowRight"].includes(r.key)
                )
                  return;
                s.lastSeekTime = Date.now();
                const w = p.hasAttribute(b),
                  f = ["mouseup", "touchend", "keyup"].includes(r.type);
                w && f
                  ? (p.removeAttribute(b), ze(s.play()))
                  : !f && s.playing && (p.setAttribute(b, ""), s.pause());
              }
            ),
            xe.isIos)
          ) {
            const r = ut.call(s, 'input[type="range"]');
            Array.from(r).forEach((p) => this.bind(p, a, (b) => Us(b.target)));
          }
          this.bind(
            n.inputs.seek,
            a,
            (r) => {
              const p = r.currentTarget;
              let b = p.getAttribute("seek-value");
              C.empty(b) && (b = p.value),
                p.removeAttribute("seek-value"),
                (s.currentTime = (b / p.max) * s.duration);
            },
            "seek"
          ),
            this.bind(n.progress, "mouseenter mouseleave mousemove", (r) =>
              K.updateSeekTooltip.call(s, r)
            ),
            this.bind(n.progress, "mousemove touchmove", (r) => {
              const { previewThumbnails: p } = s;
              p && p.loaded && p.startMove(r);
            }),
            this.bind(n.progress, "mouseleave touchend click", () => {
              const { previewThumbnails: r } = s;
              r && r.loaded && r.endMove(!1, !0);
            }),
            this.bind(n.progress, "mousedown touchstart", (r) => {
              const { previewThumbnails: p } = s;
              p && p.loaded && p.startScrubbing(r);
            }),
            this.bind(n.progress, "mouseup touchend", (r) => {
              const { previewThumbnails: p } = s;
              p && p.loaded && p.endScrubbing(r);
            }),
            xe.isWebKit &&
              Array.from(ut.call(s, 'input[type="range"]')).forEach((r) => {
                this.bind(r, "input", (p) =>
                  K.updateRangeFill.call(s, p.target)
                );
              }),
            s.config.toggleInvert &&
              !C.element(n.display.duration) &&
              this.bind(n.display.currentTime, "click", () => {
                s.currentTime !== 0 &&
                  ((s.config.invertTime = !s.config.invertTime),
                  K.timeUpdate.call(s));
              }),
            this.bind(
              n.inputs.volume,
              a,
              (r) => {
                s.volume = r.target.value;
              },
              "volume"
            ),
            this.bind(n.controls, "mouseenter mouseleave", (r) => {
              n.controls.hover = !s.touch && r.type === "mouseenter";
            }),
            n.fullscreen &&
              Array.from(n.fullscreen.children)
                .filter((r) => !r.contains(n.container))
                .forEach((r) => {
                  this.bind(r, "mouseenter mouseleave", (p) => {
                    n.controls &&
                      (n.controls.hover = !s.touch && p.type === "mouseenter");
                  });
                }),
            this.bind(
              n.controls,
              "mousedown mouseup touchstart touchend touchcancel",
              (r) => {
                n.controls.pressed = ["mousedown", "touchstart"].includes(
                  r.type
                );
              }
            ),
            this.bind(n.controls, "focusin", () => {
              const { config: r, timers: p } = s;
              me(n.controls, r.classNames.noTransition, !0),
                ve.toggleControls.call(s, !0),
                setTimeout(() => {
                  me(n.controls, r.classNames.noTransition, !1);
                }, 0);
              const b = this.touch ? 3e3 : 4e3;
              clearTimeout(p.controls),
                (p.controls = setTimeout(
                  () => ve.toggleControls.call(s, !1),
                  b
                ));
            }),
            this.bind(
              n.inputs.volume,
              "wheel",
              (r) => {
                const p = r.webkitDirectionInvertedFromDevice,
                  [b, w] = [r.deltaX, -r.deltaY].map((A) => (p ? -A : A)),
                  f = Math.sign(Math.abs(b) > Math.abs(w) ? b : w);
                s.increaseVolume(f / 50);
                const { volume: $ } = s.media;
                ((f === 1 && $ < 1) || (f === -1 && $ > 0)) &&
                  r.preventDefault();
              },
              "volume",
              !1
            );
        }),
        (this.player = i),
        (this.lastKey = null),
        (this.focusTimer = null),
        (this.lastKeyDown = null),
        (this.handleKey = this.handleKey.bind(this)),
        (this.toggleMenu = this.toggleMenu.bind(this)),
        (this.firstTouch = this.firstTouch.bind(this));
    }
    handleKey(i) {
      const { player: s } = this,
        { elements: n } = s,
        { key: a, type: r, altKey: p, ctrlKey: b, metaKey: w, shiftKey: f } = i,
        $ = r === "keydown",
        A = $ && a === this.lastKey;
      if (!(p || b || w || f) && a) {
        if ($) {
          const z = document.activeElement;
          if (C.element(z)) {
            const { editable: H } = s.config.selectors,
              { seek: L } = n.inputs;
            if (
              (z !== L && Ye(z, H)) ||
              (i.key === " " && Ye(z, 'button, [role^="menuitem"]'))
            )
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
            ].includes(a) && (i.preventDefault(), i.stopPropagation()),
            a)
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
              A ||
                ((M = parseInt(a, 10)),
                (s.currentTime = (s.duration / 10) * M));
              break;
            case " ":
            case "k":
              A || ze(s.togglePlay());
              break;
            case "ArrowUp":
              s.increaseVolume(0.1);
              break;
            case "ArrowDown":
              s.decreaseVolume(0.1);
              break;
            case "m":
              A || (s.muted = !s.muted);
              break;
            case "ArrowRight":
              s.forward();
              break;
            case "ArrowLeft":
              s.rewind();
              break;
            case "f":
              s.fullscreen.toggle();
              break;
            case "c":
              A || s.toggleCaptions();
              break;
            case "l":
              s.loop = !s.loop;
          }
          a === "Escape" &&
            !s.fullscreen.usingNative &&
            s.fullscreen.active &&
            s.fullscreen.toggle(),
            (this.lastKey = a);
        } else this.lastKey = null;
        var M;
      }
    }
    toggleMenu(i) {
      K.toggleMenu.call(this.player, i);
    }
  }
  function Cr(e, i) {
    return e((i = { exports: {} }), i.exports), i.exports;
  }
  var xr = Cr(function (e, i) {
    e.exports = (function () {
      var s = function () {},
        n = {},
        a = {},
        r = {};
      function p(M, z) {
        M = M.push ? M : [M];
        var H,
          L,
          I,
          B = [],
          O = M.length,
          R = O;
        for (
          H = function (J, te) {
            te.length && B.push(J), --R || z(B);
          };
          O--;

        )
          (L = M[O]), (I = a[L]) ? H(L, I) : (r[L] = r[L] || []).push(H);
      }
      function b(M, z) {
        if (M) {
          var H = r[M];
          if (((a[M] = z), H)) for (; H.length; ) H[0](M, z), H.splice(0, 1);
        }
      }
      function w(M, z) {
        M.call && (M = { success: M }),
          z.length ? (M.error || s)(z) : (M.success || s)(M);
      }
      function f(M, z, H, L) {
        var I,
          B,
          O = document,
          R = H.async,
          J = (H.numRetries || 0) + 1,
          te = H.before || s,
          ce = M.replace(/[\?|#].*$/, ""),
          be = M.replace(/^(css|img)!/, "");
        (L = L || 0),
          /(^css!|\.css$)/.test(ce)
            ? (((B = O.createElement("link")).rel = "stylesheet"),
              (B.href = be),
              (I = "hideFocus" in B) &&
                B.relList &&
                ((I = 0), (B.rel = "preload"), (B.as = "style")))
            : /(^img!|\.(png|gif|jpg|svg|webp)$)/.test(ce)
            ? ((B = O.createElement("img")).src = be)
            : (((B = O.createElement("script")).src = M),
              (B.async = R === void 0 || R)),
          (B.onload =
            B.onerror =
            B.onbeforeload =
              function (fe) {
                var Se = fe.type[0];
                if (I)
                  try {
                    B.sheet.cssText.length || (Se = "e");
                  } catch (ne) {
                    ne.code != 18 && (Se = "e");
                  }
                if (Se == "e") {
                  if ((L += 1) < J) return f(M, z, H, L);
                } else if (B.rel == "preload" && B.as == "style")
                  return (B.rel = "stylesheet");
                z(M, Se, fe.defaultPrevented);
              }),
          te(M, B) !== !1 && O.head.appendChild(B);
      }
      function $(M, z, H) {
        var L,
          I,
          B = (M = M.push ? M : [M]).length,
          O = B,
          R = [];
        for (
          L = function (J, te, ce) {
            if ((te == "e" && R.push(J), te == "b")) {
              if (!ce) return;
              R.push(J);
            }
            --B || z(R);
          },
            I = 0;
          I < O;
          I++
        )
          f(M[I], L, H);
      }
      function A(M, z, H) {
        var L, I;
        if ((z && z.trim && (L = z), (I = (L ? H : z) || {}), L)) {
          if (L in n) throw "LoadJS";
          n[L] = !0;
        }
        function B(O, R) {
          $(
            M,
            function (J) {
              w(I, J), O && w({ success: O, error: R }, J), b(L, J);
            },
            I
          );
        }
        if (I.returnPromise) return new Promise(B);
        B();
      }
      return (
        (A.ready = function (M, z) {
          return (
            p(M, function (H) {
              w(z, H);
            }),
            A
          );
        }),
        (A.done = function (M) {
          b(M, []);
        }),
        (A.reset = function () {
          (n = {}), (a = {}), (r = {});
        }),
        (A.isDefined = function (M) {
          return M in n;
        }),
        A
      );
    })();
  });
  function hs(e) {
    return new Promise((i, s) => {
      xr(e, { success: i, error: s });
    });
  }
  function $r(e) {
    return C.empty(e)
      ? null
      : C.number(Number(e))
      ? e
      : e.match(/^.*(vimeo.com\/|video\/)(\d+).*/)
      ? RegExp.$2
      : e;
  }
  function kr(e) {
    const i = e.match(/^.*(vimeo.com\/|video\/)(\d+)(\?.*&*h=|\/)+([\d,a-f]+)/);
    return i && i.length === 5 ? i[4] : null;
  }
  function rt(e) {
    e && !this.embed.hasPlayed && (this.embed.hasPlayed = !0),
      this.media.paused === e &&
        ((this.media.paused = !e),
        le.call(this, this.media, e ? "play" : "pause"));
  }
  const ns = {
    setup() {
      const e = this;
      me(e.elements.wrapper, e.config.classNames.embed, !0),
        (e.options.speed = e.config.speed.options),
        Ze.call(e),
        C.object(window.Vimeo)
          ? ns.ready.call(e)
          : hs(e.config.urls.vimeo.sdk)
              .then(() => {
                ns.ready.call(e);
              })
              .catch((i) => {
                e.debug.warn("Vimeo SDK (player.js) failed to load", i);
              });
    },
    ready() {
      const e = this,
        i = e.config.vimeo,
        { premium: s, referrerPolicy: n, ...a } = i;
      let r = e.media.getAttribute("src"),
        p = "";
      C.empty(r)
        ? ((r = e.media.getAttribute(e.config.attributes.embed.id)),
          (p = e.media.getAttribute(e.config.attributes.embed.hash)))
        : (p = kr(r));
      const b = p ? { h: p } : {};
      s && Object.assign(a, { controls: !1, sidedock: !1 });
      const w = ri({
          loop: e.config.loop.active,
          autoplay: e.autoplay,
          muted: e.muted,
          gesture: "media",
          playsinline: e.config.playsinline,
          ...b,
          ...a,
        }),
        f = $r(r),
        $ = re("iframe"),
        A = is(e.config.urls.vimeo.iframe, f, w);
      if (
        ($.setAttribute("src", A),
        $.setAttribute("allowfullscreen", ""),
        $.setAttribute(
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
        C.empty(n) || $.setAttribute("referrerPolicy", n),
        s || !i.customControls)
      )
        $.setAttribute("data-poster", e.poster), (e.media = Lt($, e.media));
      else {
        const O = re("div", {
          class: e.config.classNames.embedContainer,
          "data-poster": e.poster,
        });
        O.appendChild($), (e.media = Lt(O, e.media));
      }
      i.customControls ||
        vt(is(e.config.urls.vimeo.api, A)).then((O) => {
          !C.empty(O) &&
            O.thumbnail_url &&
            ve.setPoster.call(e, O.thumbnail_url).catch(() => {});
        }),
        (e.embed = new window.Vimeo.Player($, {
          autopause: e.config.autopause,
          muted: e.muted,
        })),
        (e.media.paused = !0),
        (e.media.currentTime = 0),
        e.supported.ui && e.embed.disableTextTrack(),
        (e.media.play = () => (rt.call(e, !0), e.embed.play())),
        (e.media.pause = () => (rt.call(e, !1), e.embed.pause())),
        (e.media.stop = () => {
          e.pause(), (e.currentTime = 0);
        });
      let { currentTime: M } = e.media;
      Object.defineProperty(e.media, "currentTime", {
        get: () => M,
        set(O) {
          const { embed: R, media: J, paused: te, volume: ce } = e,
            be = te && !R.hasPlayed;
          (J.seeking = !0),
            le.call(e, J, "seeking"),
            Promise.resolve(be && R.setVolume(0))
              .then(() => R.setCurrentTime(O))
              .then(() => be && R.pause())
              .then(() => be && R.setVolume(ce))
              .catch(() => {});
        },
      });
      let z = e.config.speed.selected;
      Object.defineProperty(e.media, "playbackRate", {
        get: () => z,
        set(O) {
          e.embed
            .setPlaybackRate(O)
            .then(() => {
              (z = O), le.call(e, e.media, "ratechange");
            })
            .catch(() => {
              e.options.speed = [1];
            });
        },
      });
      let { volume: H } = e.config;
      Object.defineProperty(e.media, "volume", {
        get: () => H,
        set(O) {
          e.embed.setVolume(O).then(() => {
            (H = O), le.call(e, e.media, "volumechange");
          });
        },
      });
      let { muted: L } = e.config;
      Object.defineProperty(e.media, "muted", {
        get: () => L,
        set(O) {
          const R = !!C.boolean(O) && O;
          e.embed.setMuted(!!R || e.config.muted).then(() => {
            (L = R), le.call(e, e.media, "volumechange");
          });
        },
      });
      let I,
        { loop: B } = e.config;
      Object.defineProperty(e.media, "loop", {
        get: () => B,
        set(O) {
          const R = C.boolean(O) ? O : e.config.loop.active;
          e.embed.setLoop(R).then(() => {
            B = R;
          });
        },
      }),
        e.embed
          .getVideoUrl()
          .then((O) => {
            (I = O), K.setDownloadUrl.call(e);
          })
          .catch((O) => {
            this.debug.warn(O);
          }),
        Object.defineProperty(e.media, "currentSrc", { get: () => I }),
        Object.defineProperty(e.media, "ended", {
          get: () => e.currentTime === e.duration,
        }),
        Promise.all([e.embed.getVideoWidth(), e.embed.getVideoHeight()]).then(
          (O) => {
            const [R, J] = O;
            (e.embed.ratio = ti(R, J)), Ze.call(this);
          }
        ),
        e.embed.setAutopause(e.config.autopause).then((O) => {
          e.config.autopause = O;
        }),
        e.embed.getVideoTitle().then((O) => {
          (e.config.title = O), ve.setTitle.call(this);
        }),
        e.embed.getCurrentTime().then((O) => {
          (M = O), le.call(e, e.media, "timeupdate");
        }),
        e.embed.getDuration().then((O) => {
          (e.media.duration = O), le.call(e, e.media, "durationchange");
        }),
        e.embed.getTextTracks().then((O) => {
          (e.media.textTracks = O), pe.setup.call(e);
        }),
        e.embed.on("cuechange", ({ cues: O = [] }) => {
          const R = O.map((J) => vr(J.text));
          pe.updateCues.call(e, R);
        }),
        e.embed.on("loaded", () => {
          e.embed.getPaused().then((O) => {
            rt.call(e, !O), O || le.call(e, e.media, "playing");
          }),
            C.element(e.embed.element) &&
              e.supported.ui &&
              e.embed.element.setAttribute("tabindex", -1);
        }),
        e.embed.on("bufferstart", () => {
          le.call(e, e.media, "waiting");
        }),
        e.embed.on("bufferend", () => {
          le.call(e, e.media, "playing");
        }),
        e.embed.on("play", () => {
          rt.call(e, !0), le.call(e, e.media, "playing");
        }),
        e.embed.on("pause", () => {
          rt.call(e, !1);
        }),
        e.embed.on("timeupdate", (O) => {
          (e.media.seeking = !1),
            (M = O.seconds),
            le.call(e, e.media, "timeupdate");
        }),
        e.embed.on("progress", (O) => {
          (e.media.buffered = O.percent),
            le.call(e, e.media, "progress"),
            parseInt(O.percent, 10) === 1 &&
              le.call(e, e.media, "canplaythrough"),
            e.embed.getDuration().then((R) => {
              R !== e.media.duration &&
                ((e.media.duration = R), le.call(e, e.media, "durationchange"));
            });
        }),
        e.embed.on("seeked", () => {
          (e.media.seeking = !1), le.call(e, e.media, "seeked");
        }),
        e.embed.on("ended", () => {
          (e.media.paused = !0), le.call(e, e.media, "ended");
        }),
        e.embed.on("error", (O) => {
          (e.media.error = O), le.call(e, e.media, "error");
        }),
        i.customControls && setTimeout(() => ve.build.call(e), 0);
    },
  };
  function Mr(e) {
    return C.empty(e)
      ? null
      : e.match(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/)
      ? RegExp.$2
      : e;
  }
  function lt(e) {
    e && !this.embed.hasPlayed && (this.embed.hasPlayed = !0),
      this.media.paused === e &&
        ((this.media.paused = !e),
        le.call(this, this.media, e ? "play" : "pause"));
  }
  function Pr(e) {
    return e.noCookie
      ? "https://www.youtube-nocookie.com"
      : window.location.protocol === "http:"
      ? "http://www.youtube.com"
      : void 0;
  }
  const Mt = {
      setup() {
        if (
          (me(this.elements.wrapper, this.config.classNames.embed, !0),
          C.object(window.YT) && C.function(window.YT.Player))
        )
          Mt.ready.call(this);
        else {
          const e = window.onYouTubeIframeAPIReady;
          (window.onYouTubeIframeAPIReady = () => {
            C.function(e) && e(), Mt.ready.call(this);
          }),
            hs(this.config.urls.youtube.sdk).catch((i) => {
              this.debug.warn("YouTube API failed to load", i);
            });
        }
      },
      getTitle(e) {
        vt(is(this.config.urls.youtube.api, e))
          .then((i) => {
            if (C.object(i)) {
              const { title: s, height: n, width: a } = i;
              (this.config.title = s),
                ve.setTitle.call(this),
                (this.embed.ratio = ti(a, n));
            }
            Ze.call(this);
          })
          .catch(() => {
            Ze.call(this);
          });
      },
      ready() {
        const e = this,
          i = e.config.youtube,
          s = e.media && e.media.getAttribute("id");
        if (!C.empty(s) && s.startsWith("youtube-")) return;
        let n = e.media.getAttribute("src");
        C.empty(n) &&
          (n = e.media.getAttribute(this.config.attributes.embed.id));
        const a = Mr(n),
          r = re("div", {
            id: hr(e.provider),
            "data-poster": i.customControls ? e.poster : void 0,
          });
        if (((e.media = Lt(r, e.media)), i.customControls)) {
          const p = (b) => `https://i.ytimg.com/vi/${a}/${b}default.jpg`;
          kt(p("maxres"), 121)
            .catch(() => kt(p("sd"), 121))
            .catch(() => kt(p("hq")))
            .then((b) => ve.setPoster.call(e, b.src))
            .then((b) => {
              b.includes("maxres") ||
                (e.elements.poster.style.backgroundSize = "cover");
            })
            .catch(() => {});
        }
        e.embed = new window.YT.Player(e.media, {
          videoId: a,
          host: Pr(i),
          playerVars: ye(
            {},
            {
              autoplay: e.config.autoplay ? 1 : 0,
              hl: e.config.hl,
              controls: e.supported.ui && i.customControls ? 0 : 1,
              disablekb: 1,
              playsinline:
                e.config.playsinline && !e.config.fullscreen.iosNative ? 1 : 0,
              cc_load_policy: e.captions.active ? 1 : 0,
              cc_lang_pref: e.config.captions.language,
              widget_referrer: window ? window.location.href : null,
            },
            i
          ),
          events: {
            onError(p) {
              if (!e.media.error) {
                const b = p.data,
                  w =
                    {
                      2: "The request contains an invalid parameter value. For example, this error occurs if you specify a video ID that does not have 11 characters, or if the video ID contains invalid characters, such as exclamation points or asterisks.",
                      5: "The requested content cannot be played in an HTML5 player or another error related to the HTML5 player has occurred.",
                      100: "The video requested was not found. This error occurs when a video has been removed (for any reason) or has been marked as private.",
                      101: "The owner of the requested video does not allow it to be played in embedded players.",
                      150: "The owner of the requested video does not allow it to be played in embedded players.",
                    }[b] || "An unknown error occurred";
                (e.media.error = { code: b, message: w }),
                  le.call(e, e.media, "error");
              }
            },
            onPlaybackRateChange(p) {
              const b = p.target;
              (e.media.playbackRate = b.getPlaybackRate()),
                le.call(e, e.media, "ratechange");
            },
            onReady(p) {
              if (C.function(e.media.play)) return;
              const b = p.target;
              Mt.getTitle.call(e, a),
                (e.media.play = () => {
                  lt.call(e, !0), b.playVideo();
                }),
                (e.media.pause = () => {
                  lt.call(e, !1), b.pauseVideo();
                }),
                (e.media.stop = () => {
                  b.stopVideo();
                }),
                (e.media.duration = b.getDuration()),
                (e.media.paused = !0),
                (e.media.currentTime = 0),
                Object.defineProperty(e.media, "currentTime", {
                  get: () => Number(b.getCurrentTime()),
                  set(A) {
                    e.paused && !e.embed.hasPlayed && e.embed.mute(),
                      (e.media.seeking = !0),
                      le.call(e, e.media, "seeking"),
                      b.seekTo(A);
                  },
                }),
                Object.defineProperty(e.media, "playbackRate", {
                  get: () => b.getPlaybackRate(),
                  set(A) {
                    b.setPlaybackRate(A);
                  },
                });
              let { volume: w } = e.config;
              Object.defineProperty(e.media, "volume", {
                get: () => w,
                set(A) {
                  (w = A),
                    b.setVolume(100 * w),
                    le.call(e, e.media, "volumechange");
                },
              });
              let { muted: f } = e.config;
              Object.defineProperty(e.media, "muted", {
                get: () => f,
                set(A) {
                  const M = C.boolean(A) ? A : f;
                  (f = M),
                    b[M ? "mute" : "unMute"](),
                    b.setVolume(100 * w),
                    le.call(e, e.media, "volumechange");
                },
              }),
                Object.defineProperty(e.media, "currentSrc", {
                  get: () => b.getVideoUrl(),
                }),
                Object.defineProperty(e.media, "ended", {
                  get: () => e.currentTime === e.duration,
                });
              const $ = b.getAvailablePlaybackRates();
              (e.options.speed = $.filter((A) =>
                e.config.speed.options.includes(A)
              )),
                e.supported.ui &&
                  i.customControls &&
                  e.media.setAttribute("tabindex", -1),
                le.call(e, e.media, "timeupdate"),
                le.call(e, e.media, "durationchange"),
                clearInterval(e.timers.buffering),
                (e.timers.buffering = setInterval(() => {
                  (e.media.buffered = b.getVideoLoadedFraction()),
                    (e.media.lastBuffered === null ||
                      e.media.lastBuffered < e.media.buffered) &&
                      le.call(e, e.media, "progress"),
                    (e.media.lastBuffered = e.media.buffered),
                    e.media.buffered === 1 &&
                      (clearInterval(e.timers.buffering),
                      le.call(e, e.media, "canplaythrough"));
                }, 200)),
                i.customControls && setTimeout(() => ve.build.call(e), 50);
            },
            onStateChange(p) {
              const b = p.target;
              switch (
                (clearInterval(e.timers.playing),
                e.media.seeking &&
                  [1, 2].includes(p.data) &&
                  ((e.media.seeking = !1), le.call(e, e.media, "seeked")),
                p.data)
              ) {
                case -1:
                  le.call(e, e.media, "timeupdate"),
                    (e.media.buffered = b.getVideoLoadedFraction()),
                    le.call(e, e.media, "progress");
                  break;
                case 0:
                  lt.call(e, !1),
                    e.media.loop
                      ? (b.stopVideo(), b.playVideo())
                      : le.call(e, e.media, "ended");
                  break;
                case 1:
                  i.customControls &&
                  !e.config.autoplay &&
                  e.media.paused &&
                  !e.embed.hasPlayed
                    ? e.media.pause()
                    : (lt.call(e, !0),
                      le.call(e, e.media, "playing"),
                      (e.timers.playing = setInterval(() => {
                        le.call(e, e.media, "timeupdate");
                      }, 50)),
                      e.media.duration !== b.getDuration() &&
                        ((e.media.duration = b.getDuration()),
                        le.call(e, e.media, "durationchange")));
                  break;
                case 2:
                  e.muted || e.embed.unMute(), lt.call(e, !1);
                  break;
                case 3:
                  le.call(e, e.media, "waiting");
              }
              le.call(e, e.elements.container, "statechange", !1, {
                code: p.data,
              });
            },
          },
        });
      },
    },
    oi = {
      setup() {
        this.media
          ? (me(
              this.elements.container,
              this.config.classNames.type.replace("{0}", this.type),
              !0
            ),
            me(
              this.elements.container,
              this.config.classNames.provider.replace("{0}", this.provider),
              !0
            ),
            this.isEmbed &&
              me(
                this.elements.container,
                this.config.classNames.type.replace("{0}", "video"),
                !0
              ),
            this.isVideo &&
              ((this.elements.wrapper = re("div", {
                class: this.config.classNames.video,
              })),
              Qs(this.media, this.elements.wrapper),
              (this.elements.poster = re("div", {
                class: this.config.classNames.poster,
              })),
              this.elements.wrapper.appendChild(this.elements.poster)),
            this.isHTML5
              ? Ve.setup.call(this)
              : this.isYouTube
              ? Mt.setup.call(this)
              : this.isVimeo && ns.setup.call(this))
          : this.debug.warn("No media element found!");
      },
    };
  class Lr {
    constructor(i) {
      Q(this, "load", () => {
        this.enabled &&
          (C.object(window.google) && C.object(window.google.ima)
            ? this.ready()
            : hs(this.player.config.urls.googleIMA.sdk)
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
        Q(this, "ready", () => {
          var s;
          this.enabled ||
            ((s = this).manager && s.manager.destroy(),
            s.elements.displayContainer &&
              s.elements.displayContainer.destroy(),
            s.elements.container.remove()),
            this.startSafetyTimer(12e3, "ready()"),
            this.managerPromise.then(() => {
              this.clearSafetyTimer("onAdsManagerLoaded()");
            }),
            this.listeners(),
            this.setupIMA();
        }),
        Q(this, "setupIMA", () => {
          (this.elements.container = re("div", {
            class: this.player.config.classNames.ads,
          })),
            this.player.elements.container.appendChild(this.elements.container),
            google.ima.settings.setVpaidMode(
              google.ima.ImaSdkSettings.VpaidMode.ENABLED
            ),
            google.ima.settings.setLocale(this.player.config.ads.language),
            google.ima.settings.setDisableCustomPlaybackForIOS10Plus(
              this.player.config.playsinline
            ),
            (this.elements.displayContainer = new google.ima.AdDisplayContainer(
              this.elements.container,
              this.player.media
            )),
            (this.loader = new google.ima.AdsLoader(
              this.elements.displayContainer
            )),
            this.loader.addEventListener(
              google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED,
              (s) => this.onAdsManagerLoaded(s),
              !1
            ),
            this.loader.addEventListener(
              google.ima.AdErrorEvent.Type.AD_ERROR,
              (s) => this.onAdError(s),
              !1
            ),
            this.requestAds();
        }),
        Q(this, "requestAds", () => {
          const { container: s } = this.player.elements;
          try {
            const n = new google.ima.AdsRequest();
            (n.adTagUrl = this.tagUrl),
              (n.linearAdSlotWidth = s.offsetWidth),
              (n.linearAdSlotHeight = s.offsetHeight),
              (n.nonLinearAdSlotWidth = s.offsetWidth),
              (n.nonLinearAdSlotHeight = s.offsetHeight),
              (n.forceNonLinearFullSlot = !1),
              n.setAdWillPlayMuted(!this.player.muted),
              this.loader.requestAds(n);
          } catch (n) {
            this.onAdError(n);
          }
        }),
        Q(this, "pollCountdown", (s = !1) => {
          if (!s)
            return (
              clearInterval(this.countdownTimer),
              void this.elements.container.removeAttribute("data-badge-text")
            );
          this.countdownTimer = setInterval(() => {
            const n = Nt(Math.max(this.manager.getRemainingTime(), 0)),
              a = `${Ce.get("advertisement", this.player.config)} - ${n}`;
            this.elements.container.setAttribute("data-badge-text", a);
          }, 100);
        }),
        Q(this, "onAdsManagerLoaded", (s) => {
          if (!this.enabled) return;
          const n = new google.ima.AdsRenderingSettings();
          (n.restoreCustomPlaybackStateOnAdBreakComplete = !0),
            (n.enablePreloading = !0),
            (this.manager = s.getAdsManager(this.player, n)),
            (this.cuePoints = this.manager.getCuePoints()),
            this.manager.addEventListener(
              google.ima.AdErrorEvent.Type.AD_ERROR,
              (a) => this.onAdError(a)
            ),
            Object.keys(google.ima.AdEvent.Type).forEach((a) => {
              this.manager.addEventListener(google.ima.AdEvent.Type[a], (r) =>
                this.onAdEvent(r)
              );
            }),
            this.trigger("loaded");
        }),
        Q(this, "addCuePoints", () => {
          C.empty(this.cuePoints) ||
            this.cuePoints.forEach((s) => {
              if (s !== 0 && s !== -1 && s < this.player.duration) {
                const n = this.player.elements.progress;
                if (C.element(n)) {
                  const a = (100 / this.player.duration) * s,
                    r = re("span", {
                      class: this.player.config.classNames.cues,
                    });
                  (r.style.left = `${a.toString()}%`), n.appendChild(r);
                }
              }
            });
        }),
        Q(this, "onAdEvent", (s) => {
          const { container: n } = this.player.elements,
            a = s.getAd(),
            r = s.getAdData();
          switch (
            (((p) => {
              le.call(
                this.player,
                this.player.media,
                `ads${p.replace(/_/g, "").toLowerCase()}`
              );
            })(s.type),
            s.type)
          ) {
            case google.ima.AdEvent.Type.LOADED:
              this.trigger("loaded"),
                this.pollCountdown(!0),
                a.isLinear() ||
                  ((a.width = n.offsetWidth), (a.height = n.offsetHeight));
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
              r.adError &&
                this.player.debug.warn(
                  `Non-fatal ad error: ${r.adError.getMessage()}`
                );
          }
        }),
        Q(this, "onAdError", (s) => {
          this.cancel(), this.player.debug.warn("Ads error", s);
        }),
        Q(this, "listeners", () => {
          const { container: s } = this.player.elements;
          let n;
          this.player.on("canplay", () => {
            this.addCuePoints();
          }),
            this.player.on("ended", () => {
              this.loader.contentComplete();
            }),
            this.player.on("timeupdate", () => {
              n = this.player.currentTime;
            }),
            this.player.on("seeked", () => {
              const a = this.player.currentTime;
              C.empty(this.cuePoints) ||
                this.cuePoints.forEach((r, p) => {
                  n < r &&
                    r < a &&
                    (this.manager.discardAdBreak(),
                    this.cuePoints.splice(p, 1));
                });
            }),
            window.addEventListener("resize", () => {
              this.manager &&
                this.manager.resize(
                  s.offsetWidth,
                  s.offsetHeight,
                  google.ima.ViewMode.NORMAL
                );
            });
        }),
        Q(this, "play", () => {
          const { container: s } = this.player.elements;
          this.managerPromise || this.resumeContent(),
            this.managerPromise
              .then(() => {
                this.manager.setVolume(this.player.volume),
                  this.elements.displayContainer.initialize();
                try {
                  this.initialized ||
                    (this.manager.init(
                      s.offsetWidth,
                      s.offsetHeight,
                      google.ima.ViewMode.NORMAL
                    ),
                    this.manager.start()),
                    (this.initialized = !0);
                } catch (n) {
                  this.onAdError(n);
                }
              })
              .catch(() => {});
        }),
        Q(this, "resumeContent", () => {
          (this.elements.container.style.zIndex = ""),
            (this.playing = !1),
            ze(this.player.media.play());
        }),
        Q(this, "pauseContent", () => {
          (this.elements.container.style.zIndex = 3),
            (this.playing = !0),
            this.player.media.pause();
        }),
        Q(this, "cancel", () => {
          this.initialized && this.resumeContent(),
            this.trigger("error"),
            this.loadAds();
        }),
        Q(this, "loadAds", () => {
          this.managerPromise
            .then(() => {
              this.manager && this.manager.destroy(),
                (this.managerPromise = new Promise((s) => {
                  this.on("loaded", s), this.player.debug.log(this.manager);
                })),
                (this.initialized = !1),
                this.requestAds();
            })
            .catch(() => {});
        }),
        Q(this, "trigger", (s, ...n) => {
          const a = this.events[s];
          C.array(a) &&
            a.forEach((r) => {
              C.function(r) && r.apply(this, n);
            });
        }),
        Q(
          this,
          "on",
          (s, n) => (
            C.array(this.events[s]) || (this.events[s] = []),
            this.events[s].push(n),
            this
          )
        ),
        Q(this, "startSafetyTimer", (s, n) => {
          this.player.debug.log(`Safety timer invoked from: ${n}`),
            (this.safetyTimer = setTimeout(() => {
              this.cancel(), this.clearSafetyTimer("startSafetyTimer()");
            }, s));
        }),
        Q(this, "clearSafetyTimer", (s) => {
          C.nullOrUndefined(this.safetyTimer) ||
            (this.player.debug.log(`Safety timer cleared from: ${s}`),
            clearTimeout(this.safetyTimer),
            (this.safetyTimer = null));
        }),
        (this.player = i),
        (this.config = i.config.ads),
        (this.playing = !1),
        (this.initialized = !1),
        (this.elements = { container: null, displayContainer: null }),
        (this.manager = null),
        (this.loader = null),
        (this.cuePoints = null),
        (this.events = {}),
        (this.safetyTimer = null),
        (this.countdownTimer = null),
        (this.managerPromise = new Promise((s, n) => {
          this.on("loaded", s), this.on("error", n);
        })),
        this.load();
    }
    get enabled() {
      const { config: i } = this;
      return (
        this.player.isHTML5 &&
        this.player.isVideo &&
        i.enabled &&
        (!C.empty(i.publisherId) || C.url(i.tagUrl))
      );
    }
    get tagUrl() {
      const { config: i } = this;
      return C.url(i.tagUrl)
        ? i.tagUrl
        : `https://go.aniview.com/api/adserver6/vast/?${ri({
            AV_PUBLISHERID: "58c25bb0073ef448b1087ad6",
            AV_CHANNELID: "5a0458dc28a06145e4519d21",
            AV_URL: window.location.hostname,
            cb: Date.now(),
            AV_WIDTH: 640,
            AV_HEIGHT: 480,
            AV_CDIM2: i.publisherId,
          })}`;
    }
  }
  function di(e = 0, i = 0, s = 255) {
    return Math.min(Math.max(e, i), s);
  }
  const Ar = (e) => {
      const i = [];
      return (
        e.split(/\r\n\r\n|\n\n|\r\r/).forEach((s) => {
          const n = {};
          s.split(/\r\n|\n|\r/).forEach((a) => {
            if (C.number(n.startTime)) {
              if (!C.empty(a.trim()) && C.empty(n.text)) {
                const r = a.trim().split("#xywh=");
                ([n.text] = r),
                  r[1] && ([n.x, n.y, n.w, n.h] = r[1].split(","));
              }
            } else {
              const r = a.match(
                /([0-9]{2})?:?([0-9]{2}):([0-9]{2}).([0-9]{2,3})( ?--> ?)([0-9]{2})?:?([0-9]{2}):([0-9]{2}).([0-9]{2,3})/
              );
              r &&
                ((n.startTime =
                  60 * Number(r[1] || 0) * 60 +
                  60 * Number(r[2]) +
                  Number(r[3]) +
                  +`0.${r[4]}`),
                (n.endTime =
                  60 * Number(r[6] || 0) * 60 +
                  60 * Number(r[7]) +
                  Number(r[8]) +
                  +`0.${r[9]}`));
            }
          }),
            n.text && i.push(n);
        }),
        i
      );
    },
    As = (e, i) => {
      const s = {};
      return (
        e > i.width / i.height
          ? ((s.width = i.width), (s.height = (1 / e) * i.width))
          : ((s.height = i.height), (s.width = e * i.height)),
        s
      );
    };
  class as {
    constructor(i) {
      Q(this, "load", () => {
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
        Q(
          this,
          "getThumbnails",
          () =>
            new Promise((s) => {
              const { src: n } = this.player.config.previewThumbnails;
              if (C.empty(n))
                throw new Error(
                  "Missing previewThumbnails.src config attribute"
                );
              const a = () => {
                this.thumbnails.sort((r, p) => r.height - p.height),
                  this.player.debug.log("Preview thumbnails", this.thumbnails),
                  s();
              };
              if (C.function(n))
                n((r) => {
                  (this.thumbnails = r), a();
                });
              else {
                const r = (C.string(n) ? [n] : n).map((p) =>
                  this.getThumbnail(p)
                );
                Promise.all(r).then(a);
              }
            })
        ),
        Q(
          this,
          "getThumbnail",
          (s) =>
            new Promise((n) => {
              vt(s).then((a) => {
                const r = { frames: Ar(a), height: null, urlPrefix: "" };
                r.frames[0].text.startsWith("/") ||
                  r.frames[0].text.startsWith("http://") ||
                  r.frames[0].text.startsWith("https://") ||
                  (r.urlPrefix = s.substring(0, s.lastIndexOf("/") + 1));
                const p = new Image();
                (p.onload = () => {
                  (r.height = p.naturalHeight),
                    (r.width = p.naturalWidth),
                    this.thumbnails.push(r),
                    n();
                }),
                  (p.src = r.urlPrefix + r.frames[0].text);
              });
            })
        ),
        Q(this, "startMove", (s) => {
          if (
            this.loaded &&
            C.event(s) &&
            ["touchmove", "mousemove"].includes(s.type) &&
            this.player.media.duration
          ) {
            if (s.type === "touchmove")
              this.seekTime =
                this.player.media.duration *
                (this.player.elements.inputs.seek.value / 100);
            else {
              var n, a;
              const r = this.player.elements.progress.getBoundingClientRect(),
                p = (100 / r.width) * (s.pageX - r.left);
              (this.seekTime = this.player.media.duration * (p / 100)),
                this.seekTime < 0 && (this.seekTime = 0),
                this.seekTime > this.player.media.duration - 1 &&
                  (this.seekTime = this.player.media.duration - 1),
                (this.mousePosX = s.pageX),
                (this.elements.thumb.time.innerText = Nt(this.seekTime));
              const b =
                (n = this.player.config.markers) === null ||
                n === void 0 ||
                (a = n.points) === null ||
                a === void 0
                  ? void 0
                  : a.find(({ time: w }) => w === Math.round(this.seekTime));
              b &&
                this.elements.thumb.time.insertAdjacentHTML(
                  "afterbegin",
                  `${b.label}<br>`
                );
            }
            this.showImageAtCurrentTime();
          }
        }),
        Q(this, "endMove", () => {
          this.toggleThumbContainer(!1, !0);
        }),
        Q(this, "startScrubbing", (s) => {
          (C.nullOrUndefined(s.button) || s.button === !1 || s.button === 0) &&
            ((this.mouseDown = !0),
            this.player.media.duration &&
              (this.toggleScrubbingContainer(!0),
              this.toggleThumbContainer(!1, !0),
              this.showImageAtCurrentTime()));
        }),
        Q(this, "endScrubbing", () => {
          (this.mouseDown = !1),
            Math.ceil(this.lastTime) ===
            Math.ceil(this.player.media.currentTime)
              ? this.toggleScrubbingContainer(!1)
              : us.call(this.player, this.player.media, "timeupdate", () => {
                  this.mouseDown || this.toggleScrubbingContainer(!1);
                });
        }),
        Q(this, "listeners", () => {
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
        Q(this, "render", () => {
          (this.elements.thumb.container = re("div", {
            class:
              this.player.config.classNames.previewThumbnails.thumbContainer,
          })),
            (this.elements.thumb.imageContainer = re("div", {
              class:
                this.player.config.classNames.previewThumbnails.imageContainer,
            })),
            this.elements.thumb.container.appendChild(
              this.elements.thumb.imageContainer
            );
          const s = re("div", {
            class:
              this.player.config.classNames.previewThumbnails.timeContainer,
          });
          (this.elements.thumb.time = re("span", {}, "00:00")),
            s.appendChild(this.elements.thumb.time),
            this.elements.thumb.imageContainer.appendChild(s),
            C.element(this.player.elements.progress) &&
              this.player.elements.progress.appendChild(
                this.elements.thumb.container
              ),
            (this.elements.scrubbing.container = re("div", {
              class:
                this.player.config.classNames.previewThumbnails
                  .scrubbingContainer,
            })),
            this.player.elements.wrapper.appendChild(
              this.elements.scrubbing.container
            );
        }),
        Q(this, "destroy", () => {
          this.elements.thumb.container &&
            this.elements.thumb.container.remove(),
            this.elements.scrubbing.container &&
              this.elements.scrubbing.container.remove();
        }),
        Q(this, "showImageAtCurrentTime", () => {
          this.mouseDown
            ? this.setScrubbingContainerSize()
            : this.setThumbContainerSizeAndPos();
          const s = this.thumbnails[0].frames.findIndex(
              (r) => this.seekTime >= r.startTime && this.seekTime <= r.endTime
            ),
            n = s >= 0;
          let a = 0;
          this.mouseDown || this.toggleThumbContainer(n),
            n &&
              (this.thumbnails.forEach((r, p) => {
                this.loadedImages.includes(r.frames[s].text) && (a = p);
              }),
              s !== this.showingThumb &&
                ((this.showingThumb = s), this.loadImage(a)));
        }),
        Q(this, "loadImage", (s = 0) => {
          const n = this.showingThumb,
            a = this.thumbnails[s],
            { urlPrefix: r } = a,
            p = a.frames[n],
            b = a.frames[n].text,
            w = r + b;
          if (
            this.currentImageElement &&
            this.currentImageElement.dataset.filename === b
          )
            this.showImage(this.currentImageElement, p, s, n, b, !1),
              (this.currentImageElement.dataset.index = n),
              this.removeOldImages(this.currentImageElement);
          else {
            this.loadingImage &&
              this.usingSprites &&
              (this.loadingImage.onload = null);
            const f = new Image();
            (f.src = w),
              (f.dataset.index = n),
              (f.dataset.filename = b),
              (this.showingThumbFilename = b),
              this.player.debug.log(`Loading image: ${w}`),
              (f.onload = () => this.showImage(f, p, s, n, b, !0)),
              (this.loadingImage = f),
              this.removeOldImages(f);
          }
        }),
        Q(this, "showImage", (s, n, a, r, p, b = !0) => {
          this.player.debug.log(
            `Showing thumb: ${p}. num: ${r}. qual: ${a}. newimg: ${b}`
          ),
            this.setImageSizeAndOffset(s, n),
            b &&
              (this.currentImageContainer.appendChild(s),
              (this.currentImageElement = s),
              this.loadedImages.includes(p) || this.loadedImages.push(p)),
            this.preloadNearby(r, !0)
              .then(this.preloadNearby(r, !1))
              .then(this.getHigherQuality(a, s, n, p));
        }),
        Q(this, "removeOldImages", (s) => {
          Array.from(this.currentImageContainer.children).forEach((n) => {
            if (n.tagName.toLowerCase() !== "img") return;
            const a = this.usingSprites ? 500 : 1e3;
            if (n.dataset.index !== s.dataset.index && !n.dataset.deleting) {
              n.dataset.deleting = !0;
              const { currentImageContainer: r } = this;
              setTimeout(() => {
                r.removeChild(n),
                  this.player.debug.log(
                    `Removing thumb: ${n.dataset.filename}`
                  );
              }, a);
            }
          });
        }),
        Q(
          this,
          "preloadNearby",
          (s, n = !0) =>
            new Promise((a) => {
              setTimeout(() => {
                const r = this.thumbnails[0].frames[s].text;
                if (this.showingThumbFilename === r) {
                  let p;
                  p = n
                    ? this.thumbnails[0].frames.slice(s)
                    : this.thumbnails[0].frames.slice(0, s).reverse();
                  let b = !1;
                  p.forEach((w) => {
                    const f = w.text;
                    if (f !== r && !this.loadedImages.includes(f)) {
                      (b = !0),
                        this.player.debug.log(
                          `Preloading thumb filename: ${f}`
                        );
                      const { urlPrefix: $ } = this.thumbnails[0],
                        A = $ + f,
                        M = new Image();
                      (M.src = A),
                        (M.onload = () => {
                          this.player.debug.log(
                            `Preloaded thumb filename: ${f}`
                          ),
                            this.loadedImages.includes(f) ||
                              this.loadedImages.push(f),
                            a();
                        });
                    }
                  }),
                    b || a();
                }
              }, 300);
            })
        ),
        Q(this, "getHigherQuality", (s, n, a, r) => {
          if (s < this.thumbnails.length - 1) {
            let p = n.naturalHeight;
            this.usingSprites && (p = a.h),
              p < this.thumbContainerHeight &&
                setTimeout(() => {
                  this.showingThumbFilename === r &&
                    (this.player.debug.log(
                      `Showing higher quality thumb for: ${r}`
                    ),
                    this.loadImage(s + 1));
                }, 300);
          }
        }),
        Q(this, "toggleThumbContainer", (s = !1, n = !1) => {
          const a =
            this.player.config.classNames.previewThumbnails.thumbContainerShown;
          this.elements.thumb.container.classList.toggle(a, s),
            !s &&
              n &&
              ((this.showingThumb = null), (this.showingThumbFilename = null));
        }),
        Q(this, "toggleScrubbingContainer", (s = !1) => {
          const n =
            this.player.config.classNames.previewThumbnails
              .scrubbingContainerShown;
          this.elements.scrubbing.container.classList.toggle(n, s),
            s ||
              ((this.showingThumb = null), (this.showingThumbFilename = null));
        }),
        Q(this, "determineContainerAutoSizing", () => {
          (this.elements.thumb.imageContainer.clientHeight > 20 ||
            this.elements.thumb.imageContainer.clientWidth > 20) &&
            (this.sizeSpecifiedInCSS = !0);
        }),
        Q(this, "setThumbContainerSizeAndPos", () => {
          const { imageContainer: s } = this.elements.thumb;
          if (this.sizeSpecifiedInCSS) {
            if (s.clientHeight > 20 && s.clientWidth < 20) {
              const n = Math.floor(s.clientHeight * this.thumbAspectRatio);
              s.style.width = `${n}px`;
            } else if (s.clientHeight < 20 && s.clientWidth > 20) {
              const n = Math.floor(s.clientWidth / this.thumbAspectRatio);
              s.style.height = `${n}px`;
            }
          } else {
            const n = Math.floor(
              this.thumbContainerHeight * this.thumbAspectRatio
            );
            (s.style.height = `${this.thumbContainerHeight}px`),
              (s.style.width = `${n}px`);
          }
          this.setThumbContainerPos();
        }),
        Q(this, "setThumbContainerPos", () => {
          const s = this.player.elements.progress.getBoundingClientRect(),
            n = this.player.elements.container.getBoundingClientRect(),
            { container: a } = this.elements.thumb,
            r = n.left - s.left + 10,
            p = n.right - s.left - a.clientWidth - 10,
            b = this.mousePosX - s.left - a.clientWidth / 2,
            w = di(b, r, p);
          (a.style.left = `${w}px`),
            a.style.setProperty("--preview-arrow-offset", b - w + "px");
        }),
        Q(this, "setScrubbingContainerSize", () => {
          const { width: s, height: n } = As(this.thumbAspectRatio, {
            width: this.player.media.clientWidth,
            height: this.player.media.clientHeight,
          });
          (this.elements.scrubbing.container.style.width = `${s}px`),
            (this.elements.scrubbing.container.style.height = `${n}px`);
        }),
        Q(this, "setImageSizeAndOffset", (s, n) => {
          if (!this.usingSprites) return;
          const a = this.thumbContainerHeight / n.h;
          (s.style.height = s.naturalHeight * a + "px"),
            (s.style.width = s.naturalWidth * a + "px"),
            (s.style.left = `-${n.x * a}px`),
            (s.style.top = `-${n.y * a}px`);
        }),
        (this.player = i),
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
        const { height: i } = As(this.thumbAspectRatio, {
          width: this.player.media.clientWidth,
          height: this.player.media.clientHeight,
        });
        return i;
      }
      return this.sizeSpecifiedInCSS
        ? this.elements.thumb.imageContainer.clientHeight
        : Math.floor(this.player.media.clientWidth / this.thumbAspectRatio / 4);
    }
    get currentImageElement() {
      return this.mouseDown
        ? this.currentScrubbingImageElement
        : this.currentThumbnailImageElement;
    }
    set currentImageElement(i) {
      this.mouseDown
        ? (this.currentScrubbingImageElement = i)
        : (this.currentThumbnailImageElement = i);
    }
  }
  const rs = {
    insertElements(e, i) {
      C.string(i)
        ? ks(e, this.media, { src: i })
        : C.array(i) &&
          i.forEach((s) => {
            ks(e, this.media, s);
          });
    },
    change(e) {
      Ks(e, "sources.length")
        ? (Ve.cancelRequests.call(this),
          this.destroy.call(
            this,
            () => {
              (this.options.quality = []),
                qe(this.media),
                (this.media = null),
                C.element(this.elements.container) &&
                  this.elements.container.removeAttribute("class");
              const { sources: i, type: s } = e,
                [{ provider: n = je.html5, src: a }] = i,
                r = n === "html5" ? s : "div",
                p = n === "html5" ? {} : { src: a };
              Object.assign(this, {
                provider: n,
                type: s,
                supported: we.check(s, n, this.config.playsinline),
                media: re(r, p),
              }),
                this.elements.container.appendChild(this.media),
                C.boolean(e.autoplay) && (this.config.autoplay = e.autoplay),
                this.isHTML5 &&
                  (this.config.crossorigin &&
                    this.media.setAttribute("crossorigin", ""),
                  this.config.autoplay &&
                    this.media.setAttribute("autoplay", ""),
                  C.empty(e.poster) || (this.poster = e.poster),
                  this.config.loop.active &&
                    this.media.setAttribute("loop", ""),
                  this.config.muted && this.media.setAttribute("muted", ""),
                  this.config.playsinline &&
                    this.media.setAttribute("playsinline", "")),
                ve.addStyleHook.call(this),
                this.isHTML5 && rs.insertElements.call(this, "source", i),
                (this.config.title = e.title),
                oi.setup.call(this),
                this.isHTML5 &&
                  Object.keys(e).includes("tracks") &&
                  rs.insertElements.call(this, "track", e.tracks),
                (this.isHTML5 || (this.isEmbed && !this.supported.ui)) &&
                  ve.build.call(this),
                this.isHTML5 && this.media.load(),
                C.empty(e.previewThumbnails) ||
                  (Object.assign(
                    this.config.previewThumbnails,
                    e.previewThumbnails
                  ),
                  this.previewThumbnails &&
                    this.previewThumbnails.loaded &&
                    (this.previewThumbnails.destroy(),
                    (this.previewThumbnails = null)),
                  this.config.previewThumbnails.enabled &&
                    (this.previewThumbnails = new as(this))),
                this.fullscreen.update();
            },
            !0
          ))
        : this.debug.warn("Invalid source format");
    },
  };
  class Xe {
    constructor(i, s) {
      if (
        (Q(this, "play", () =>
          C.function(this.media.play)
            ? (this.ads &&
                this.ads.enabled &&
                this.ads.managerPromise
                  .then(() => this.ads.play())
                  .catch(() => ze(this.media.play())),
              this.media.play())
            : null
        ),
        Q(this, "pause", () =>
          this.playing && C.function(this.media.pause)
            ? this.media.pause()
            : null
        ),
        Q(this, "togglePlay", (b) =>
          (C.boolean(b) ? b : !this.playing) ? this.play() : this.pause()
        ),
        Q(this, "stop", () => {
          this.isHTML5
            ? (this.pause(), this.restart())
            : C.function(this.media.stop) && this.media.stop();
        }),
        Q(this, "restart", () => {
          this.currentTime = 0;
        }),
        Q(this, "rewind", (b) => {
          this.currentTime -= C.number(b) ? b : this.config.seekTime;
        }),
        Q(this, "forward", (b) => {
          this.currentTime += C.number(b) ? b : this.config.seekTime;
        }),
        Q(this, "increaseVolume", (b) => {
          const w = this.media.muted ? 0 : this.volume;
          this.volume = w + (C.number(b) ? b : 0);
        }),
        Q(this, "decreaseVolume", (b) => {
          this.increaseVolume(-b);
        }),
        Q(this, "airplay", () => {
          we.airplay && this.media.webkitShowPlaybackTargetPicker();
        }),
        Q(this, "toggleControls", (b) => {
          if (this.supported.ui && !this.isAudio) {
            const w = At(
                this.elements.container,
                this.config.classNames.hideControls
              ),
              f = b === void 0 ? void 0 : !b,
              $ = me(
                this.elements.container,
                this.config.classNames.hideControls,
                f
              );
            if (
              ($ &&
                C.array(this.config.controls) &&
                this.config.controls.includes("settings") &&
                !C.empty(this.config.settings) &&
                K.toggleMenu.call(this, !1),
              $ !== w)
            ) {
              const A = $ ? "controlshidden" : "controlsshown";
              le.call(this, this.media, A);
            }
            return !$;
          }
          return !1;
        }),
        Q(this, "on", (b, w) => {
          ue.call(this, this.elements.container, b, w);
        }),
        Q(this, "once", (b, w) => {
          us.call(this, this.elements.container, b, w);
        }),
        Q(this, "off", (b, w) => {
          zt(this.elements.container, b, w);
        }),
        Q(this, "destroy", (b, w = !1) => {
          if (!this.ready) return;
          const f = () => {
            (document.body.style.overflow = ""),
              (this.embed = null),
              w
                ? (Object.keys(this.elements).length &&
                    (qe(this.elements.buttons.play),
                    qe(this.elements.captions),
                    qe(this.elements.controls),
                    qe(this.elements.wrapper),
                    (this.elements.buttons.play = null),
                    (this.elements.captions = null),
                    (this.elements.controls = null),
                    (this.elements.wrapper = null)),
                  C.function(b) && b())
                : (cr.call(this),
                  Ve.cancelRequests.call(this),
                  Lt(this.elements.original, this.elements.container),
                  le.call(this, this.elements.original, "destroyed", !0),
                  C.function(b) && b.call(this.elements.original),
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
              ? (ve.toggleNativeControls.call(this, !0), f())
              : this.isYouTube
              ? (clearInterval(this.timers.buffering),
                clearInterval(this.timers.playing),
                this.embed !== null &&
                  C.function(this.embed.destroy) &&
                  this.embed.destroy(),
                f())
              : this.isVimeo &&
                (this.embed !== null && this.embed.unload().then(f),
                setTimeout(f, 200));
        }),
        Q(this, "supports", (b) => we.mime.call(this, b)),
        (this.timers = {}),
        (this.ready = !1),
        (this.loading = !1),
        (this.failed = !1),
        (this.touch = we.touch),
        (this.media = i),
        C.string(this.media) &&
          (this.media = document.querySelectorAll(this.media)),
        ((window.jQuery && this.media instanceof jQuery) ||
          C.nodeList(this.media) ||
          C.array(this.media)) &&
          (this.media = this.media[0]),
        (this.config = ye(
          {},
          li,
          Xe.defaults,
          s || {},
          (() => {
            try {
              return JSON.parse(this.media.getAttribute("data-plyr-config"));
            } catch {
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
        (this.debug = new Sr(this.config.debug)),
        this.debug.log("Config", this.config),
        this.debug.log("Support", we),
        C.nullOrUndefined(this.media) || !C.element(this.media))
      )
        return void this.debug.error(
          "Setup failed: no suitable element passed"
        );
      if (this.media.plyr) return void this.debug.warn("Target already setup");
      if (!this.config.enabled)
        return void this.debug.error("Setup failed: disabled by config");
      if (!we.check().api)
        return void this.debug.error("Setup failed: no support");
      const n = this.media.cloneNode(!0);
      (n.autoplay = !1), (this.elements.original = n);
      const a = this.media.tagName.toLowerCase();
      let r = null,
        p = null;
      switch (a) {
        case "div":
          if (((r = this.media.querySelector("iframe")), C.element(r))) {
            if (
              ((p = ai(r.getAttribute("src"))),
              (this.provider = Tr(p.toString())),
              (this.elements.container = this.media),
              (this.media = r),
              (this.elements.container.className = ""),
              p.search.length)
            ) {
              const b = ["1", "true"];
              b.includes(p.searchParams.get("autoplay")) &&
                (this.config.autoplay = !0),
                b.includes(p.searchParams.get("loop")) &&
                  (this.config.loop.active = !0),
                this.isYouTube
                  ? ((this.config.playsinline = b.includes(
                      p.searchParams.get("playsinline")
                    )),
                    (this.config.youtube.hl = p.searchParams.get("hl")))
                  : (this.config.playsinline = !0);
            }
          } else
            (this.provider = this.media.getAttribute(
              this.config.attributes.embed.provider
            )),
              this.media.removeAttribute(this.config.attributes.embed.provider);
          if (
            C.empty(this.provider) ||
            !Object.values(je).includes(this.provider)
          )
            return void this.debug.error("Setup failed: Invalid provider");
          this.type = Qt.video;
          break;
        case "video":
        case "audio":
          (this.type = a),
            (this.provider = je.html5),
            this.media.hasAttribute("crossorigin") &&
              (this.config.crossorigin = !0),
            this.media.hasAttribute("autoplay") && (this.config.autoplay = !0),
            (this.media.hasAttribute("playsinline") ||
              this.media.hasAttribute("webkit-playsinline")) &&
              (this.config.playsinline = !0),
            this.media.hasAttribute("muted") && (this.config.muted = !0),
            this.media.hasAttribute("loop") && (this.config.loop.active = !0);
          break;
        default:
          return void this.debug.error("Setup failed: unsupported type");
      }
      (this.supported = we.check(this.type, this.provider)),
        this.supported.api
          ? ((this.eventListeners = []),
            (this.listeners = new Er(this)),
            (this.storage = new ht(this)),
            (this.media.plyr = this),
            C.element(this.elements.container) ||
              ((this.elements.container = re("div")),
              Qs(this.media, this.elements.container)),
            ve.migrateStyles.call(this),
            ve.addStyleHook.call(this),
            oi.setup.call(this),
            this.config.debug &&
              ue.call(
                this,
                this.elements.container,
                this.config.events.join(" "),
                (b) => {
                  this.debug.log(`event: ${b.type}`);
                }
              ),
            (this.fullscreen = new Ie(this)),
            (this.isHTML5 || (this.isEmbed && !this.supported.ui)) &&
              ve.build.call(this),
            this.listeners.container(),
            this.listeners.global(),
            this.config.ads.enabled && (this.ads = new Lr(this)),
            this.isHTML5 &&
              this.config.autoplay &&
              this.once("canplay", () => ze(this.play())),
            (this.lastSeekTime = 0),
            this.config.previewThumbnails.enabled &&
              (this.previewThumbnails = new as(this)))
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
      return this.type === Qt.video;
    }
    get isAudio() {
      return this.type === Qt.audio;
    }
    get playing() {
      return !!(this.ready && !this.paused && !this.ended);
    }
    get paused() {
      return !!this.media.paused;
    }
    get stopped() {
      return !!(this.paused && this.currentTime === 0);
    }
    get ended() {
      return !!this.media.ended;
    }
    set currentTime(i) {
      if (!this.duration) return;
      const s = C.number(i) && i > 0;
      (this.media.currentTime = s ? Math.min(i, this.duration) : 0),
        this.debug.log(`Seeking to ${this.currentTime} seconds`);
    }
    get currentTime() {
      return Number(this.media.currentTime);
    }
    get buffered() {
      const { buffered: i } = this.media;
      return C.number(i)
        ? i
        : i && i.length && this.duration > 0
        ? i.end(0) / this.duration
        : 0;
    }
    get seeking() {
      return !!this.media.seeking;
    }
    get duration() {
      const i = parseFloat(this.config.duration),
        s = (this.media || {}).duration,
        n = C.number(s) && s !== 1 / 0 ? s : 0;
      return i || n;
    }
    set volume(i) {
      let s = i;
      C.string(s) && (s = Number(s)),
        C.number(s) || (s = this.storage.get("volume")),
        C.number(s) || ({ volume: s } = this.config),
        s > 1 && (s = 1),
        s < 0 && (s = 0),
        (this.config.volume = s),
        (this.media.volume = s),
        !C.empty(i) && this.muted && s > 0 && (this.muted = !1);
    }
    get volume() {
      return Number(this.media.volume);
    }
    set muted(i) {
      let s = i;
      C.boolean(s) || (s = this.storage.get("muted")),
        C.boolean(s) || (s = this.config.muted),
        (this.config.muted = s),
        (this.media.muted = s);
    }
    get muted() {
      return !!this.media.muted;
    }
    get hasAudio() {
      return (
        !this.isHTML5 ||
        !!this.isAudio ||
        !!this.media.mozHasAudio ||
        !!this.media.webkitAudioDecodedByteCount ||
        !!(this.media.audioTracks && this.media.audioTracks.length)
      );
    }
    set speed(i) {
      let s = null;
      C.number(i) && (s = i),
        C.number(s) || (s = this.storage.get("speed")),
        C.number(s) || (s = this.config.speed.selected);
      const { minimumSpeed: n, maximumSpeed: a } = this;
      (s = di(s, n, a)),
        (this.config.speed.selected = s),
        setTimeout(() => {
          this.media && (this.media.playbackRate = s);
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
    set quality(i) {
      const s = this.config.quality,
        n = this.options.quality;
      if (!n.length) return;
      let a = [
          !C.empty(i) && Number(i),
          this.storage.get("quality"),
          s.selected,
          s.default,
        ].find(C.number),
        r = !0;
      if (!n.includes(a)) {
        const p = Js(n, a);
        this.debug.warn(`Unsupported quality option: ${a}, using ${p} instead`),
          (a = p),
          (r = !1);
      }
      (s.selected = a),
        (this.media.quality = a),
        r && this.storage.set({ quality: a });
    }
    get quality() {
      return this.media.quality;
    }
    set loop(i) {
      const s = C.boolean(i) ? i : this.config.loop.active;
      (this.config.loop.active = s), (this.media.loop = s);
    }
    get loop() {
      return !!this.media.loop;
    }
    set source(i) {
      rs.change.call(this, i);
    }
    get source() {
      return this.media.currentSrc;
    }
    get download() {
      const { download: i } = this.config.urls;
      return C.url(i) ? i : this.source;
    }
    set download(i) {
      C.url(i) &&
        ((this.config.urls.download = i), K.setDownloadUrl.call(this));
    }
    set poster(i) {
      this.isVideo
        ? ve.setPoster.call(this, i, !1).catch(() => {})
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
      const i = It(ps.call(this));
      return C.array(i) ? i.join(":") : i;
    }
    set ratio(i) {
      this.isVideo
        ? C.string(i) && ei(i)
          ? ((this.config.ratio = It(i)), Ze.call(this))
          : this.debug.error(`Invalid aspect ratio specified (${i})`)
        : this.debug.warn("Aspect ratio can only be set for video");
    }
    set autoplay(i) {
      this.config.autoplay = C.boolean(i) ? i : this.config.autoplay;
    }
    get autoplay() {
      return !!this.config.autoplay;
    }
    toggleCaptions(i) {
      pe.toggle.call(this, i, !1);
    }
    set currentTrack(i) {
      pe.set.call(this, i, !1), pe.setup.call(this);
    }
    get currentTrack() {
      const { toggled: i, currentTrack: s } = this.captions;
      return i ? s : -1;
    }
    set language(i) {
      pe.setLanguage.call(this, i, !1);
    }
    get language() {
      return (pe.getCurrentTrack.call(this) || {}).language;
    }
    set pip(i) {
      if (!we.pip) return;
      const s = C.boolean(i) ? i : !this.pip;
      C.function(this.media.webkitSetPresentationMode) &&
        this.media.webkitSetPresentationMode(s ? Kt.active : Kt.inactive),
        C.function(this.media.requestPictureInPicture) &&
          (!this.pip && s
            ? this.media.requestPictureInPicture()
            : this.pip && !s && document.exitPictureInPicture());
    }
    get pip() {
      return we.pip
        ? C.empty(this.media.webkitPresentationMode)
          ? this.media === document.pictureInPictureElement
          : this.media.webkitPresentationMode === Kt.active
        : null;
    }
    setPreviewThumbnails(i) {
      this.previewThumbnails &&
        this.previewThumbnails.loaded &&
        (this.previewThumbnails.destroy(), (this.previewThumbnails = null)),
        Object.assign(this.config.previewThumbnails, i),
        this.config.previewThumbnails.enabled &&
          (this.previewThumbnails = new as(this));
    }
    static supported(i, s) {
      return we.check(i, s);
    }
    static loadSprite(i, s) {
      return ii(i, s);
    }
    static setup(i, s = {}) {
      let n = null;
      return (
        C.string(i)
          ? (n = Array.from(document.querySelectorAll(i)))
          : C.nodeList(i)
          ? (n = Array.from(i))
          : C.array(i) && (n = i.filter(C.element)),
        C.empty(n) ? null : n.map((a) => new Xe(a, s))
      );
    }
  }
  Xe.defaults = rr(li);
  const Ir = () => {
      class e {
        constructor(n) {
          (this.popInit = n),
            (this.rel = this.popInit.getAttribute("rel")),
            (this.pop = document.querySelector(".popup-js")),
            (this.content = ""),
            (this.newPlayer = ""),
            (this.body = document.querySelector("body"));
        }
        newPlyr(n) {
          let a = `#${n}`;
          (this.newPlayer = new Xe(a)), this.newPlayer.play();
        }
        closePlyr() {
          this.newPlayer && (this.newPlayer.destroy(), (this.newPlayer = ""));
        }
        open() {
          this.pop.classList.add("_is-active"),
            this.body.classList.add("lock"),
            (this.content = this.pop.querySelector(this.rel)),
            this.content.classList.add("_is-active"),
            this.content.matches(".popup__content--plyr") &&
              ((this.linkPlyr = this.content
                .querySelector("video")
                .getAttribute("id")),
              this.linkPlyr && this.newPlyr(this.linkPlyr));
        }
        startGalary(n, a) {
          var r = this.pop.querySelector("#popupGalerySwiper");
          r.innerHTML = "";
          for (var p = 0; p < n.length; p++) {
            var b = document.createElement("li");
            b.classList.add("slider__item", "swiper-slide", "rel"),
              (b.innerHTML = ` <div class="imgs">
        <img src= "${n[p]}"> </img>
      </div>`),
              r.append(b);
          }
          mySwiperGalary.update(), mySwiperGalary.slideTo(a, 0);
        }
        start(n) {
          (this.popInit = n),
            (this.rel = this.popInit.getAttribute("rel")),
            this.body.classList.add("lock"),
            setTimeout(() => {
              this.open();
            }, 200);
        }
        static close() {
          document.querySelector("body").classList.remove("lock"),
            document.querySelector(".popup-js").classList.remove("_is-active"),
            document
              .querySelector(".popup__content._is-active")
              .classList.remove("_is-active");
        }
      }
      (() => {
        var s = new e(document.querySelector(".popups-init-js")),
          n = [];
        document.addEventListener("click", (a) => {
          a.target.closest(".popups-init-js") &&
            ((n = a.target.closest(".popups-init-js")), s.start(n)),
            (a.target == document.querySelector(".popup-overlay-js") ||
              a.target.closest(".popup-close-js")) &&
              (s.closePlyr(),
              e.close(),
              document
                .querySelector(".popup__content")
                .classList.remove("_is-active"));
        });
      })();
    },
    Or = (e) => {
      class i {
        constructor() {
          (this.tabParent = e.target.closest(".tabs-container")),
            (this.tab = e.target.closest(".tab")),
            (this.title = this.tab.querySelector(".tab-header")),
            (this.content = this.tab.querySelector(".tab-content")),
            (this.children = Array.from(this.tab.querySelectorAll(".tab"))),
            (this.nabour = Array.from(this.tab.parentNode.children).filter(
              (a) => a !== this.tab
            ));
        }
        close() {
          this.tab.classList.remove("_is-active"),
            this.children.forEach((a) => {
              a.classList.remove("_is-active");
            });
        }
        start() {
          this.tab.classList.contains("_is-active")
            ? (this.tab.classList.remove("_is-active"),
              this.children.forEach((a) => {
                a.classList.remove("_is-active");
              }))
            : (this.tab.classList.add("_is-active"),
              this.nabour.forEach((a) => {
                a.classList.remove("_is-active"),
                  Array.from(a.querySelectorAll(".tab")).forEach((r) => {
                    r.classList.remove("_is-active");
                  });
              }));
        }
      }
      if (e.target.closest(".tab-header")) {
        var s = new i();
        s.start();
      }
    },
    zr = () => {
      class e {
        constructor(n) {
          (this.Accord = n.target.closest("._accord-js")),
            (this.button = n.target.closest("._accord-nav-js button")),
            (this.nav = n.target.closest("._accord-nav-js")),
            (this.buttons = [...this.nav.querySelectorAll("button")]),
            (this.nabours = [...this.nav.querySelectorAll("button")].filter(
              (a) => a !== this.button && a.classList.contains("_is-active")
            )),
            (this.nabour = this.nabours[0]),
            (this.index = [...this.nav.querySelectorAll("button")].indexOf(
              this.button
            )),
            (this.hidden = this.Accord.querySelector("._accord-hidden-js")),
            (this.units = [
              ...this.hidden
                .querySelector("._accord-hidden-wrap")
                .querySelectorAll(":scope > li"),
            ]),
            (this.indexNabour = 0);
        }
        isOpen() {
          this.units[this.index].classList.add("_is-active"),
            this.button.classList.add("_is-active");
          const n = this.hidden.offsetHeight;
          this.hidden
            .animate(
              [
                { gridTemplateRows: "0fr", minHeight: "0px" },
                { gridTemplateRows: "1fr", minHeight: `${n}px` },
              ],
              { duration: 200, easing: "ease-in-out" }
            )
            .finished.then(() => {
              (this.hidden.style.gridTemplateRows = "1fr"),
                (this.hidden.style.minHeight = `${n}px`),
                this.hidden.classList.add("_is-active");
            });
        }
        isClose() {
          const n = this.hidden.offsetHeight;
          this.hidden
            .animate(
              [
                { gridTemplateRows: "1fr", minHeight: `${n}px` },
                { gridTemplateRows: "0fr", minHeight: "0px" },
              ],
              { duration: 200, easing: "ease-in-out" }
            )
            .finished.then(() => {
              (this.hidden.style.gridTemplateRows = "0fr"),
                (this.hidden.style.minHeight = "0px"),
                this.hidden.classList.remove("_is-active"),
                this.button.classList.remove("_is-active"),
                this.units[this.index].classList.remove("_is-active");
            });
        }
        start() {
          if (this.button.classList.contains("_is-active"))
            this.button.classList.contains("_is-active") && this.isClose();
          else if (this.nabours.length == 0) this.isOpen();
          else if (this.nabours.length > 0) {
            const n = this.hidden.offsetHeight;
            this.hidden
              .animate(
                [
                  { gridTemplateRows: "1fr", minHeight: `${n}px` },
                  { gridTemplateRows: "0fr", minHeight: "0px" },
                ],
                { duration: 200, easing: "ease-in-out" }
              )
              .finished.then(() => {
                (this.hidden.style.gridTemplateRows = "0fr"),
                  (this.hidden.style.minHeight = "0px"),
                  this.hidden.classList.remove("_is-active"),
                  this.nabour.classList.remove("_is-active"),
                  this.button.classList.add("_is-active"),
                  (this.indexNabour = this.buttons.indexOf(this.nabour)),
                  this.units[this.indexNabour].classList.remove("_is-active"),
                  this.units[this.index].classList.add("_is-active"),
                  this.isOpen();
              });
          }
        }
        static closeAll(n) {
          [...document.querySelectorAll("._accord-js")]
            .filter((p) => p !== n)
            .forEach((p) => {
              if (
                p
                  .querySelector("._accord-hidden-js")
                  .classList.contains("_is-active")
              ) {
                const b = p.querySelector("._accord-hidden-js"),
                  w = b.offsetHeight;
                b.animate(
                  [
                    { gridTemplateRows: "1fr", minHeight: `${w}px` },
                    { gridTemplateRows: "0fr", minHeight: "0px" },
                  ],
                  { duration: 200, easing: "ease-in-out" }
                ).finished.then(() => {
                  [...p.querySelectorAll("button")].forEach(($) => {
                    $.classList.remove("_is-active");
                  }),
                    [...p.querySelectorAll("._accord-hidden-wrap li")].forEach(
                      ($) => {
                        $.classList.remove("_is-active");
                      }
                    ),
                    b.classList.remove("_is-active"),
                    (b.style.gridTemplateRows = "0fr"),
                    (b.style.minHeight = "0px");
                });
              }
            });
        }
      }
      [...document.querySelectorAll("._accord-js")].length > 0 &&
        document.addEventListener("click", (s) => {
          s.target.closest("._accord-nav-js button") &&
            (e.closeAll(s.target.closest("._accord-js")), new e(s).start());
        });
    },
    Nr = () => {
      class e {
        constructor(s) {
          (this.gal = s),
            (this.allBlocks = this.gal.querySelector("._allBlocks ul")),
            (this.wrap = this.gal.querySelector("._accord-hidden-wrap")),
            (this.allItems = [...this.wrap.querySelectorAll(".galery__item")]);
        }
        start() {
          this.allBlocks &&
            (this.allBlocks,
            this.allItems.forEach((s) => {
              const n = s.cloneNode(!0);
              this.allBlocks.append(n);
            }));
        }
      }
      [...document.querySelectorAll("._accord-galery-js")].forEach((i) => {
        new e(i).start();
      });
    },
    _r = (e) => {
      const i = e.querySelector("._accord-hidden-js"),
        s = [...e.querySelectorAll("._accord-nav-js button")];
      let n = 0;
      const a = e.querySelector("._allBlocks");
      let r = null;
      const p = [...e.querySelectorAll("li")];
      var b = null,
        w = null;
      const f = document.querySelector(".swiper-gal");
      let $ = f.querySelector(".swiper-wrapper");
      const A = f.querySelector(".swiper");
      let M = "";
      (M = p.filter((H) => !H.classList.contains("_allBlocks"))),
        M.forEach((H) => {
          const L = H.innerHTML;
          a.innerHTML += L;
        });
      const z = (H) => {
        if (
          (r !== null && r.destroy(),
          ($.innerHTML = null),
          (w = [...H.querySelectorAll(".card")]),
          window.innerWidth <= 1035)
        ) {
          const I = [];
          for (let B = 0; B < w.length; B += 4) {
            const O = document.createElement("div");
            O.classList.add("swiper-slide");
            for (let R = 0; R < 4; R++) {
              const J = w[B + R];
              if (J) {
                const te = document.createElement("div");
                te.classList.add("card"),
                  (te.innerHTML = J.outerHTML),
                  O.appendChild(te);
              }
            }
            I.push(O);
          }
          $.append(...I);
        } else
          w.forEach((I) => {
            const B = document.createElement("div");
            B.classList.add("swiper-slide"),
              (B.innerHTML = I.outerHTML),
              $.append(B);
          });
        r = new Me(A, {
          slidesPerView: 1,
          spaceBetween: 7,
          breakpoints: {
            1034: { spaceBetween: 10, slidesPerView: 3 },
            1253: { spaceBetween: 30, slidesPerView: 4 },
          },
          loop: "true",
          speed: 300,
          modules: [ct, Pt],
          navigation: { nextEl: ".arrow-prev-1", prevEl: ".arrow-next-1" },
          pagination: {
            el: ".swiper-pagination-1",
            type: "bullets",
            clickable: !0,
          },
          grabCursor: !0,
        });
        function L(I, B) {
          let O = null;
          return function () {
            clearTimeout(O), (O = setTimeout(I, B));
          };
        }
        window.addEventListener(
          "resize",
          L(function () {
            if (
              (r !== null && r.destroy(),
              ($.innerHTML = null),
              window.innerWidth <= 1035)
            ) {
              const I = [];
              for (let B = 0; B < w.length; B += 4) {
                const O = document.createElement("div");
                O.classList.add("swiper-slide");
                for (let R = 0; R < 4; R++) {
                  const J = w[B + R];
                  if (J) {
                    const te = document.createElement("div");
                    te.classList.add("card"),
                      (te.innerHTML = J.outerHTML),
                      O.appendChild(te);
                  }
                }
                I.push(O);
              }
              $.append(...I);
            } else
              w.forEach((I) => {
                const B = document.createElement("div");
                B.classList.add("swiper-slide"),
                  (B.innerHTML = I.outerHTML),
                  $.append(B);
              });
            r = new Me(A, {
              slidesPerView: 1,
              spaceBetween: 7,
              breakpoints: {
                1034: { spaceBetween: 10, slidesPerView: 3 },
                1253: { spaceBetween: 30, slidesPerView: 4 },
              },
              loop: "true",
              speed: 300,
              modules: [ct, Pt],
              navigation: { nextEl: ".arrow-prev-1", prevEl: ".arrow-next-1" },
              pagination: {
                el: ".swiper-pagination-1",
                type: "bullets",
                clickable: !0,
              },
              grabCursor: !0,
            });
          }, 200)
        );
      };
      s.forEach((H) => {
        let L = s.indexOf(H);
        H.classList.contains("_is-active") &&
          (p[L].classList.add("_is-active"),
          i.classList.add("_is-active"),
          (i.style = "grid-template-rows: 1fr;"),
          z(p[L]),
          p[L].append(f));
      }),
        s.forEach((H) => {
          var L = new MutationObserver(function (I) {
            I.forEach(function (B) {
              B.target.getAttribute("class") == "_is-active" &&
                ((n = s.indexOf(H)), (b = p[n]), z(b), b.append(f));
            });
          });
          L.observe(H, {
            attributes: !0,
            characterData: !0,
            childList: !0,
            subtree: !0,
            attributeOldValue: !0,
            characterDataOldValue: !0,
          });
        });
    },
    Dr = () => {
      new Me("#feedSwip", {
        speed: 500,
        modules: [ct],
        pagination: { el: ".swiper-pagination-feed", clickable: !0 },
        breakpoints: {
          slidesPerView: 1,
          spaceBetween: 10,
          1034: { spaceBetween: 10, centeredSlides: !0, slidesPerView: 4 },
          1253: { spaceBetween: 62, centeredSlides: !0, slidesPerView: 4 },
        },
        grabCursor: !0,
        loop: !0,
        loopFillGroupWithBlank: !0,
        slideToClickedSlide: !0,
        on: {
          slideChange: function () {
            if (!window.matchMedia("(max-width: 1034px)").matches) {
              const i = this.activeIndex,
                s = this.slides,
                n = s.slice(i - 1, i + 1);
              n.forEach((a) => {
                a.classList.add("_active-slide");
              }),
                s.forEach((a) => {
                  n.includes(a) || a.classList.remove("_active-slide");
                });
            }
          },
        },
      });
    },
    qr = () => {
      document.querySelector("#cat-slider") &&
        new Me("#cat-slider", {
          loop: "true",
          speed: 500,
          modules: [Pt, ct],
          navigation: { nextEl: ".arrow-prev-1", prevEl: ".arrow-next-1" },
          pagination: { el: ".cat-pagination", clickable: !0 },
          slidesPerView: 1,
          breakpoints: {
            1034: { spaceBetween: 10, slidesPerView: 3 },
            1253: { spaceBetween: 15, slidesPerView: 4 },
          },
          grabCursor: !0,
        });
    },
    Hr = (e, i) => {
      class s {
        constructor(r, p) {
          (this.select = r),
            (this.span = this.select.querySelector(".dropdown-button span")),
            (this.input = this.select.querySelector("input"));
        }
        start() {
          event.preventDefault(),
            this.select.classList.remove("_is-filled"),
            this.select.classList.contains("_is-active")
              ? (this.select.classList.remove("_is-active"), this.stop(i))
              : this.select.classList.add("_is-active");
        }
        stop() {
          (this.span.innerText = i.target.getAttribute("data-value")),
            (this.input.value = i.target.getAttribute("data-value")),
            this.select.classList.add("_is-filled"),
            this.select.classList.remove("_check_invalid");
        }
      }
      new s(e, i).start();
    },
    Br = () => {
      if (document.querySelector("#player-1")) {
        const e = document.querySelector("#player-1");
        new Xe(e);
      }
      if (document.querySelector("#player-2")) {
        const e = document.querySelector("#player-2");
        new Xe(e);
      }
    },
    jr = () => {
      const e = document.querySelector("#send-form"),
        i = e.querySelector("#email");
      e.addEventListener("submit", (s) => {
        s.preventDefault();
        let n = !1;
        if (
          (i.value.trim()
            ? i.closest(".input-field").classList.remove("_check_invalid")
            : (i.closest(".input-field").classList.add("_check_invalid"),
              i.addEventListener("input", (a) => {
                i.closest(".input-field").classList.remove("_check_invalid");
              }),
              (n = !0)),
          !n)
        ) {
          const a = new URLSearchParams({ email: i.value.trim() });
          history.pushState(null, "", `?${a.toString()}`), (i.value = "");
          let r = document.querySelector("#success");
          r.classList.add("_is-active"),
            setTimeout(() => {
              r.classList.remove("_is-active");
            }, 2e3);
        }
      });
    },
    Rr = () => {
      const e = document.querySelector("#contacts-form"),
        i = e.querySelector("#firstname"),
        s = e.querySelector("#email"),
        n = e.querySelector("#subject"),
        a = e.querySelector("#contactstextarea");
      e.addEventListener("submit", (r) => {
        r.preventDefault();
        let p = !1;
        if (
          (i.value.trim()
            ? i.closest(".input-field").classList.remove("_check_invalid")
            : (i.closest(".input-field").classList.add("_check_invalid"),
              (p = !0),
              i.addEventListener("input", (b) => {
                i.closest(".input-field").classList.remove("_check_invalid");
              })),
          s.value.trim()
            ? s.closest(".input-field").classList.remove("_check_invalid")
            : (s.closest(".input-field").classList.add("_check_invalid"),
              s.addEventListener("input", (b) => {
                s.closest(".input-field").classList.remove("_check_invalid");
              }),
              (p = !0)),
          n.value.trim()
            ? n.closest(".input-field").classList.remove("_check_invalid")
            : (n.closest(".input-field").classList.add("_check_invalid"),
              n.addEventListener("input", (b) => {
                n.closest(".input-field").classList.remove("_check_invalid");
              }),
              (p = !0)),
          a.value.trim()
            ? a.closest(".textarea-field").classList.remove("_check_invalid")
            : (a.closest(".textarea-field").classList.add("_check_invalid"),
              a.addEventListener("input", (b) => {
                a.closest(".textarea-field ").classList.remove(
                  "_check_invalid"
                );
              }),
              (p = !0)),
          p)
        )
          setTimeout(() => {
            window.scrollTo({
              top: e.offsetTop - 100,
              left: 0,
              behavior: "smooth",
            });
          }, 200);
        else {
          const b = new URLSearchParams({
            name: i.value.trim(),
            email: s.value.trim(),
            subject: n.value.trim(),
            message: a.value.trim(),
          });
          history.pushState(null, "", `?${b.toString()}`),
            document.querySelector(".popup ").classList.remove("_is-active"),
            (i.value = ""),
            (s.value = ""),
            (n.value = ""),
            (a.value = "");
        }
      });
    },
    Vr = () => {
      const e = document.querySelector("#header-form"),
        i = e.querySelector("#firstname"),
        s = e.querySelector("#tel");
      e.addEventListener("submit", (n) => {
        n.preventDefault();
        let a;
        if (
          (i.value.trim()
            ? i.closest(".input-field").classList.remove("_check_invalid")
            : (i.closest(".input-field").classList.add("_check_invalid"),
              (a = !0),
              i.addEventListener("input", (r) => {
                i.closest(".input-field").classList.remove("_check_invalid");
              })),
          s.value.trim() ||
            (s.closest(".input-field").classList.add("_check_invalid"),
            (a = !0)),
          s.addEventListener("input", (r) => {
            const p = s.value.trim();
            /^\+?\d+$/.test(p)
              ? (s.closest(".input-field").classList.remove("_check_invalid"),
                (a = !1))
              : (s.closest(".input-field").classList.add("_check_invalid"),
                (a = !0));
          }),
          !a)
        ) {
          const r = new URLSearchParams({
            name: i.value.trim(),
            tel: s.value.trim(),
          });
          history.pushState(null, "", `?${r.toString()}`),
            (i.value = ""),
            (s.value = ""),
            document.querySelector(".popup-js").classList.remove("_is-active"),
            document
              .querySelector(".popup__content._is-active")
              .classList.remove("_is-active");
          let p = document.querySelector("#successheader");
          p.classList.add("_is-active"),
            setTimeout(() => {
              document.querySelector("body").classList.remove("lock"),
                p.classList.remove("_is-active");
            }, 2e3);
        }
      });
    },
    Gr = () => {
      let e = document.querySelector("footer"),
        i = e.querySelector(".footer__body"),
        s = [...e.querySelectorAll(".tab")],
        n = [...e.querySelectorAll(".top")],
        a = [...e.querySelectorAll(".tab-content")],
        r = [...e.querySelectorAll(".top svg")];
      const p = () => {
          i.classList.remove("tabs-container"),
            r.forEach((f) => {
              (f.style.visibility = "hidden"), (f.style.position = "absolute");
            }),
            s.forEach((f) => {
              f.classList.remove("tab");
            }),
            n.forEach((f) => {
              f.classList.remove("tab-header");
            }),
            a.forEach((f) => {
              f.classList.remove("tab-content");
            });
        },
        b = () => {
          i.classList.add("tabs-container"),
            s.forEach((f) => {
              f.classList.add("tab");
            }),
            n.forEach((f) => {
              f.classList.add("tab-header");
            }),
            r.forEach((f) => {
              f.style.visibility = "visible";
            }),
            a.forEach((f) => {
              f.classList.add("tab-content");
            });
        };
      window.innerWidth > 1253 ? p() : window.innerWidth < 1253 && b();
      let w = !1;
      window.addEventListener("resize", function () {
        window.innerWidth > 1253 && !w
          ? (p(), (w = !0))
          : window.innerWidth < 1253 && w && (b(), (w = !1));
      });
    };
  document.addEventListener("DOMContentLoaded", function () {
    if (
      (document.querySelector("header") && Si(),
      document.querySelector("video") && Br(),
      document.querySelector("img") && yi(),
      document.querySelector("#bunner-slider") && $a(),
      document.querySelector(".popups-init-js") && Ir(),
      document.querySelector(".tabs-container"))
    ) {
      let i = document.querySelectorAll(".tabs-container");
      i.forEach((s) => {
        s.addEventListener("click", (n) => {
          Or(n),
            i.forEach((a) => {
              a !== s &&
                Array.from(a.querySelectorAll(".tab")).forEach((r) => {
                  r.classList.remove("_is-active");
                });
            });
        });
      }),
        document.addEventListener("click", (s) => {
          s.target.closest(".tabs-container") ||
            Array.from(document.querySelectorAll(".tab")).forEach((n) => {
              n.classList.remove("_is-active");
            });
        });
    }
    document.querySelector("._accord-js") && zr(),
      document.querySelector("._accord-galery-js") && Nr(),
      document.querySelector(".galSlider") &&
        [...document.querySelectorAll(".galSlider")].forEach((s) => {
          _r(s);
        }),
      document.querySelector("#feed") && Dr(),
      document.querySelector("#cat-slider") && qr(),
      document.querySelector('input[name="lang"]') &&
        document.querySelectorAll('input[name="lang"]').forEach(function (i) {
          wi(i);
        }),
      document.querySelector("#send-form") && jr(),
      document.querySelector("#header-form") && Vr(),
      document.querySelector("#contacts-form") && Rr(),
      document.querySelector(".but-wave") &&
        [...document.querySelectorAll(".but-wave")].forEach((s) => {
          s.addEventListener("click", (n) => {
            bi(n);
          });
        }),
      document.querySelector("footer") && Gr();
  });
});
Fr();
