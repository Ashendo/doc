import Pe from "react";
var B = {}, la = {
  get exports() {
    return B;
  },
  set exports(v) {
    B = v;
  }
}, Y = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var _e;
function da() {
  if (_e)
    return Y;
  _e = 1;
  var v = Pe, O = Symbol.for("react.element"), z = Symbol.for("react.fragment"), _ = Object.prototype.hasOwnProperty, L = v.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, F = { key: !0, ref: !0, __self: !0, __source: !0 };
  function R(j, u, E) {
    var f, w = {}, A = null, U = null;
    E !== void 0 && (A = "" + E), u.key !== void 0 && (A = "" + u.key), u.ref !== void 0 && (U = u.ref);
    for (f in u)
      _.call(u, f) && !F.hasOwnProperty(f) && (w[f] = u[f]);
    if (j && j.defaultProps)
      for (f in u = j.defaultProps, u)
        w[f] === void 0 && (w[f] = u[f]);
    return { $$typeof: O, type: j, key: A, ref: U, props: w, _owner: L.current };
  }
  return Y.Fragment = z, Y.jsx = R, Y.jsxs = R, Y;
}
var D = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ee;
function ha() {
  return Ee || (Ee = 1, process.env.NODE_ENV !== "production" && function() {
    var v = Pe, O = Symbol.for("react.element"), z = Symbol.for("react.portal"), _ = Symbol.for("react.fragment"), L = Symbol.for("react.strict_mode"), F = Symbol.for("react.profiler"), R = Symbol.for("react.provider"), j = Symbol.for("react.context"), u = Symbol.for("react.forward_ref"), E = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), w = Symbol.for("react.memo"), A = Symbol.for("react.lazy"), U = Symbol.for("react.offscreen"), ee = Symbol.iterator, Se = "@@iterator";
    function Ie(o) {
      if (o === null || typeof o != "object")
        return null;
      var s = ee && o[ee] || o[Se];
      return typeof s == "function" ? s : null;
    }
    var P = v.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function m(o) {
      {
        for (var s = arguments.length, i = new Array(s > 1 ? s - 1 : 0), t = 1; t < s; t++)
          i[t - 1] = arguments[t];
        Oe("error", o, i);
      }
    }
    function Oe(o, s, i) {
      {
        var t = P.ReactDebugCurrentFrame, l = t.getStackAddendum();
        l !== "" && (s += "%s", i = i.concat([l]));
        var d = i.map(function(c) {
          return String(c);
        });
        d.unshift("Warning: " + s), Function.prototype.apply.call(console[o], console, d);
      }
    }
    var Re = !1, ke = !1, Ce = !1, Ye = !1, De = !1, ae;
    ae = Symbol.for("react.module.reference");
    function Le(o) {
      return !!(typeof o == "string" || typeof o == "function" || o === _ || o === F || De || o === L || o === E || o === f || Ye || o === U || Re || ke || Ce || typeof o == "object" && o !== null && (o.$$typeof === A || o.$$typeof === w || o.$$typeof === R || o.$$typeof === j || o.$$typeof === u || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      o.$$typeof === ae || o.getModuleId !== void 0));
    }
    function Fe(o, s, i) {
      var t = o.displayName;
      if (t)
        return t;
      var l = s.displayName || s.name || "";
      return l !== "" ? i + "(" + l + ")" : i;
    }
    function ne(o) {
      return o.displayName || "Context";
    }
    function N(o) {
      if (o == null)
        return null;
      if (typeof o.tag == "number" && m("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof o == "function")
        return o.displayName || o.name || null;
      if (typeof o == "string")
        return o;
      switch (o) {
        case _:
          return "Fragment";
        case z:
          return "Portal";
        case F:
          return "Profiler";
        case L:
          return "StrictMode";
        case E:
          return "Suspense";
        case f:
          return "SuspenseList";
      }
      if (typeof o == "object")
        switch (o.$$typeof) {
          case j:
            var s = o;
            return ne(s) + ".Consumer";
          case R:
            var i = o;
            return ne(i._context) + ".Provider";
          case u:
            return Fe(o, o.render, "ForwardRef");
          case w:
            var t = o.displayName || null;
            return t !== null ? t : N(o.type) || "Memo";
          case A: {
            var l = o, d = l._payload, c = l._init;
            try {
              return N(c(d));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var T = Object.assign, k = 0, oe, se, ie, te, re, ce, le;
    function de() {
    }
    de.__reactDisabledLog = !0;
    function Ue() {
      {
        if (k === 0) {
          oe = console.log, se = console.info, ie = console.warn, te = console.error, re = console.group, ce = console.groupCollapsed, le = console.groupEnd;
          var o = {
            configurable: !0,
            enumerable: !0,
            value: de,
            writable: !0
          };
          Object.defineProperties(console, {
            info: o,
            log: o,
            warn: o,
            error: o,
            group: o,
            groupCollapsed: o,
            groupEnd: o
          });
        }
        k++;
      }
    }
    function We() {
      {
        if (k--, k === 0) {
          var o = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: T({}, o, {
              value: oe
            }),
            info: T({}, o, {
              value: se
            }),
            warn: T({}, o, {
              value: ie
            }),
            error: T({}, o, {
              value: te
            }),
            group: T({}, o, {
              value: re
            }),
            groupCollapsed: T({}, o, {
              value: ce
            }),
            groupEnd: T({}, o, {
              value: le
            })
          });
        }
        k < 0 && m("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var q = P.ReactCurrentDispatcher, V;
    function W(o, s, i) {
      {
        if (V === void 0)
          try {
            throw Error();
          } catch (l) {
            var t = l.stack.trim().match(/\n( *(at )?)/);
            V = t && t[1] || "";
          }
        return `
` + V + o;
      }
    }
    var $ = !1, x;
    {
      var xe = typeof WeakMap == "function" ? WeakMap : Map;
      x = new xe();
    }
    function he(o, s) {
      if (!o || $)
        return "";
      {
        var i = x.get(o);
        if (i !== void 0)
          return i;
      }
      var t;
      $ = !0;
      var l = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var d;
      d = q.current, q.current = null, Ue();
      try {
        if (s) {
          var c = function() {
            throw Error();
          };
          if (Object.defineProperty(c.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(c, []);
            } catch (b) {
              t = b;
            }
            Reflect.construct(o, [], c);
          } else {
            try {
              c.call();
            } catch (b) {
              t = b;
            }
            o.call(c.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (b) {
            t = b;
          }
          o();
        }
      } catch (b) {
        if (b && t && typeof b.stack == "string") {
          for (var r = b.stack.split(`
`), y = t.stack.split(`
`), h = r.length - 1, p = y.length - 1; h >= 1 && p >= 0 && r[h] !== y[p]; )
            p--;
          for (; h >= 1 && p >= 0; h--, p--)
            if (r[h] !== y[p]) {
              if (h !== 1 || p !== 1)
                do
                  if (h--, p--, p < 0 || r[h] !== y[p]) {
                    var g = `
` + r[h].replace(" at new ", " at ");
                    return o.displayName && g.includes("<anonymous>") && (g = g.replace("<anonymous>", o.displayName)), typeof o == "function" && x.set(o, g), g;
                  }
                while (h >= 1 && p >= 0);
              break;
            }
        }
      } finally {
        $ = !1, q.current = d, We(), Error.prepareStackTrace = l;
      }
      var I = o ? o.displayName || o.name : "", Te = I ? W(I) : "";
      return typeof o == "function" && x.set(o, Te), Te;
    }
    function He(o, s, i) {
      return he(o, !1);
    }
    function Me(o) {
      var s = o.prototype;
      return !!(s && s.isReactComponent);
    }
    function H(o, s, i) {
      if (o == null)
        return "";
      if (typeof o == "function")
        return he(o, Me(o));
      if (typeof o == "string")
        return W(o);
      switch (o) {
        case E:
          return W("Suspense");
        case f:
          return W("SuspenseList");
      }
      if (typeof o == "object")
        switch (o.$$typeof) {
          case u:
            return He(o.render);
          case w:
            return H(o.type, s, i);
          case A: {
            var t = o, l = t._payload, d = t._init;
            try {
              return H(d(l), s, i);
            } catch {
            }
          }
        }
      return "";
    }
    var M = Object.prototype.hasOwnProperty, pe = {}, ue = P.ReactDebugCurrentFrame;
    function G(o) {
      if (o) {
        var s = o._owner, i = H(o.type, o._source, s ? s.type : null);
        ue.setExtraStackFrame(i);
      } else
        ue.setExtraStackFrame(null);
    }
    function Ge(o, s, i, t, l) {
      {
        var d = Function.call.bind(M);
        for (var c in o)
          if (d(o, c)) {
            var r = void 0;
            try {
              if (typeof o[c] != "function") {
                var y = Error((t || "React class") + ": " + i + " type `" + c + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof o[c] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw y.name = "Invariant Violation", y;
              }
              r = o[c](s, c, t, i, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (h) {
              r = h;
            }
            r && !(r instanceof Error) && (G(l), m("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", t || "React class", i, c, typeof r), G(null)), r instanceof Error && !(r.message in pe) && (pe[r.message] = !0, G(l), m("Failed %s type: %s", i, r.message), G(null));
          }
      }
    }
    var Be = Array.isArray;
    function K(o) {
      return Be(o);
    }
    function ze(o) {
      {
        var s = typeof Symbol == "function" && Symbol.toStringTag, i = s && o[Symbol.toStringTag] || o.constructor.name || "Object";
        return i;
      }
    }
    function qe(o) {
      try {
        return me(o), !1;
      } catch {
        return !0;
      }
    }
    function me(o) {
      return "" + o;
    }
    function ye(o) {
      if (qe(o))
        return m("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", ze(o)), me(o);
    }
    var C = P.ReactCurrentOwner, Ve = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, fe, ge, X;
    X = {};
    function $e(o) {
      if (M.call(o, "ref")) {
        var s = Object.getOwnPropertyDescriptor(o, "ref").get;
        if (s && s.isReactWarning)
          return !1;
      }
      return o.ref !== void 0;
    }
    function Ke(o) {
      if (M.call(o, "key")) {
        var s = Object.getOwnPropertyDescriptor(o, "key").get;
        if (s && s.isReactWarning)
          return !1;
      }
      return o.key !== void 0;
    }
    function Xe(o, s) {
      if (typeof o.ref == "string" && C.current && s && C.current.stateNode !== s) {
        var i = N(C.current.type);
        X[i] || (m('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', N(C.current.type), o.ref), X[i] = !0);
      }
    }
    function Je(o, s) {
      {
        var i = function() {
          fe || (fe = !0, m("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", s));
        };
        i.isReactWarning = !0, Object.defineProperty(o, "key", {
          get: i,
          configurable: !0
        });
      }
    }
    function Qe(o, s) {
      {
        var i = function() {
          ge || (ge = !0, m("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", s));
        };
        i.isReactWarning = !0, Object.defineProperty(o, "ref", {
          get: i,
          configurable: !0
        });
      }
    }
    var Ze = function(o, s, i, t, l, d, c) {
      var r = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: O,
        // Built-in properties that belong on the element
        type: o,
        key: s,
        ref: i,
        props: c,
        // Record the component responsible for creating this element.
        _owner: d
      };
      return r._store = {}, Object.defineProperty(r._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(r, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: t
      }), Object.defineProperty(r, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: l
      }), Object.freeze && (Object.freeze(r.props), Object.freeze(r)), r;
    };
    function ea(o, s, i, t, l) {
      {
        var d, c = {}, r = null, y = null;
        i !== void 0 && (ye(i), r = "" + i), Ke(s) && (ye(s.key), r = "" + s.key), $e(s) && (y = s.ref, Xe(s, l));
        for (d in s)
          M.call(s, d) && !Ve.hasOwnProperty(d) && (c[d] = s[d]);
        if (o && o.defaultProps) {
          var h = o.defaultProps;
          for (d in h)
            c[d] === void 0 && (c[d] = h[d]);
        }
        if (r || y) {
          var p = typeof o == "function" ? o.displayName || o.name || "Unknown" : o;
          r && Je(c, p), y && Qe(c, p);
        }
        return Ze(o, r, y, l, t, C.current, c);
      }
    }
    var J = P.ReactCurrentOwner, ve = P.ReactDebugCurrentFrame;
    function S(o) {
      if (o) {
        var s = o._owner, i = H(o.type, o._source, s ? s.type : null);
        ve.setExtraStackFrame(i);
      } else
        ve.setExtraStackFrame(null);
    }
    var Q;
    Q = !1;
    function Z(o) {
      return typeof o == "object" && o !== null && o.$$typeof === O;
    }
    function we() {
      {
        if (J.current) {
          var o = N(J.current.type);
          if (o)
            return `

Check the render method of \`` + o + "`.";
        }
        return "";
      }
    }
    function aa(o) {
      {
        if (o !== void 0) {
          var s = o.fileName.replace(/^.*[\\\/]/, ""), i = o.lineNumber;
          return `

Check your code at ` + s + ":" + i + ".";
        }
        return "";
      }
    }
    var Ne = {};
    function na(o) {
      {
        var s = we();
        if (!s) {
          var i = typeof o == "string" ? o : o.displayName || o.name;
          i && (s = `

Check the top-level render call using <` + i + ">.");
        }
        return s;
      }
    }
    function be(o, s) {
      {
        if (!o._store || o._store.validated || o.key != null)
          return;
        o._store.validated = !0;
        var i = na(s);
        if (Ne[i])
          return;
        Ne[i] = !0;
        var t = "";
        o && o._owner && o._owner !== J.current && (t = " It was passed a child from " + N(o._owner.type) + "."), S(o), m('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', i, t), S(null);
      }
    }
    function je(o, s) {
      {
        if (typeof o != "object")
          return;
        if (K(o))
          for (var i = 0; i < o.length; i++) {
            var t = o[i];
            Z(t) && be(t, s);
          }
        else if (Z(o))
          o._store && (o._store.validated = !0);
        else if (o) {
          var l = Ie(o);
          if (typeof l == "function" && l !== o.entries)
            for (var d = l.call(o), c; !(c = d.next()).done; )
              Z(c.value) && be(c.value, s);
        }
      }
    }
    function oa(o) {
      {
        var s = o.type;
        if (s == null || typeof s == "string")
          return;
        var i;
        if (typeof s == "function")
          i = s.propTypes;
        else if (typeof s == "object" && (s.$$typeof === u || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        s.$$typeof === w))
          i = s.propTypes;
        else
          return;
        if (i) {
          var t = N(s);
          Ge(i, o.props, "prop", t, o);
        } else if (s.PropTypes !== void 0 && !Q) {
          Q = !0;
          var l = N(s);
          m("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", l || "Unknown");
        }
        typeof s.getDefaultProps == "function" && !s.getDefaultProps.isReactClassApproved && m("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function sa(o) {
      {
        for (var s = Object.keys(o.props), i = 0; i < s.length; i++) {
          var t = s[i];
          if (t !== "children" && t !== "key") {
            S(o), m("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", t), S(null);
            break;
          }
        }
        o.ref !== null && (S(o), m("Invalid attribute `ref` supplied to `React.Fragment`."), S(null));
      }
    }
    function Ae(o, s, i, t, l, d) {
      {
        var c = Le(o);
        if (!c) {
          var r = "";
          (o === void 0 || typeof o == "object" && o !== null && Object.keys(o).length === 0) && (r += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var y = aa(l);
          y ? r += y : r += we();
          var h;
          o === null ? h = "null" : K(o) ? h = "array" : o !== void 0 && o.$$typeof === O ? (h = "<" + (N(o.type) || "Unknown") + " />", r = " Did you accidentally export a JSX literal instead of a component?") : h = typeof o, m("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", h, r);
        }
        var p = ea(o, s, i, l, d);
        if (p == null)
          return p;
        if (c) {
          var g = s.children;
          if (g !== void 0)
            if (t)
              if (K(g)) {
                for (var I = 0; I < g.length; I++)
                  je(g[I], o);
                Object.freeze && Object.freeze(g);
              } else
                m("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              je(g, o);
        }
        return o === _ ? sa(p) : oa(p), p;
      }
    }
    function ia(o, s, i) {
      return Ae(o, s, i, !0);
    }
    function ta(o, s, i) {
      return Ae(o, s, i, !1);
    }
    var ra = ta, ca = ia;
    D.Fragment = _, D.jsx = ra, D.jsxs = ca;
  }()), D;
}
(function(v) {
  process.env.NODE_ENV === "production" ? v.exports = da() : v.exports = ha();
})(la);
const a = B.jsx, n = B.jsxs, pa = "_c159_1wvay_1", ua = "_c73_1wvay_19", ma = "_c41_1wvay_37", ya = "_c78_1wvay_55", fa = "_c51_1wvay_73", ga = "_c163_1wvay_91", va = "_c85_1wvay_109", wa = "_c91_1wvay_127", Na = "_c112_1wvay_145", ba = "_c76_1wvay_163", ja = "_c162_1wvay_181", Aa = "_c70_1wvay_199", Ta = "_c94_1wvay_217", _a = "_c99_1wvay_235", Ea = "_c126_1wvay_253", Pa = "_c35_1wvay_271", Sa = "_c100_1wvay_289", Ia = "_c98_1wvay_307", Oa = "_c96_1wvay_325", Ra = "_c13_1wvay_343", ka = "_c18_1wvay_361", Ca = "_c55_1wvay_379", Ya = "_c7_1wvay_19", Da = "_c148_1wvay_415", La = "_c81_1wvay_433", Fa = "_c101_1wvay_451", Ua = "_c72_1wvay_469", Wa = "_c28_1wvay_487", xa = "_c150_1wvay_505", Ha = "_c19_1wvay_523", Ma = "_c95_1wvay_541", Ga = "_c20_1wvay_559", Ba = "_c0_1wvay_577", za = "_c56_1wvay_595", qa = "_c21_1wvay_613", Va = "_c57_1wvay_631", $a = "_c89_1wvay_649", Ka = "_c123_1wvay_667", Xa = "_c122_1wvay_685", Ja = "_c63_1wvay_703", Qa = "_c17_1wvay_721", Za = "_c149_1wvay_739", en = "_c158_1wvay_757", an = "_c30_1wvay_775", nn = "_c5_1wvay_73", on = "_c141_1wvay_811", sn = "_c93_1wvay_829", tn = "_c4_1wvay_37", rn = "_c69_1wvay_865", cn = "_c39_1wvay_883", ln = "_c6_1wvay_703", dn = "_c67_1wvay_919", hn = "_c65_1wvay_937", pn = "_c110_1wvay_955", un = "_c140_1wvay_973", mn = "_c66_1wvay_991", yn = "_c26_1wvay_1009", fn = "_c42_1wvay_1027", gn = "_c115_1wvay_1045", vn = "_c125_1wvay_1063", wn = "_c145_1wvay_1081", Nn = "_c16_1wvay_91", bn = "_c74_1wvay_1117", jn = "_c88_1wvay_1135", An = "_c75_1wvay_1153", Tn = "_c104_1wvay_1171", _n = "_c48_1wvay_1189", En = "_c10_1wvay_289", Pn = "_c64_1wvay_1225", Sn = "_c134_1wvay_1243", In = "_c43_1wvay_1261", On = "_c113_1wvay_1279", Rn = "_c138_1wvay_1297", kn = "_c153_1wvay_1315", Cn = "_c2_1wvay_487", Yn = "_c114_1wvay_1351", Dn = "_c157_1wvay_1369", Ln = "_c136_1wvay_1387", Fn = "_c82_1wvay_1405", Un = "_c49_1wvay_1423", Wn = "_c38_1wvay_1441", xn = "_c97_1wvay_1459", Hn = "_c160_1wvay_1477", Mn = "_c68_1wvay_1495", Gn = "_c120_1wvay_1513", Bn = "_c87_1wvay_1531", zn = "_c32_1wvay_1549", qn = "_c135_1wvay_1567", Vn = "_c44_1wvay_1585", $n = "_c12_1wvay_253", Kn = "_c62_1wvay_1621", Xn = "_c29_1wvay_1639", Jn = "_c37_1wvay_1657", Qn = "_c22_1wvay_1675", Zn = "_c53_1wvay_1693", eo = "_c92_1wvay_1711", ao = "_c84_1wvay_1729", no = "_c15_1wvay_1", oo = "_c86_1wvay_1765", so = "_c50_1wvay_1783", io = "_c60_1wvay_1801", to = "_c144_1wvay_1819", ro = "_c71_1wvay_1837", co = "_c27_1wvay_1855", lo = "_c155_1wvay_1873", ho = "_c31_1wvay_1891", po = "_c59_1wvay_1909", uo = "_c156_1wvay_1927", mo = "_c128_1wvay_1945", yo = "_c116_1wvay_1961", fo = "_c137_1wvay_1977", go = "_c103_1wvay_1993", vo = "_c133_1wvay_2009", wo = "_c161_1wvay_2025", No = "_c46_1wvay_2041", bo = "_c164_1wvay_2057", jo = "_c151_1wvay_2073", Ao = "_c143_1wvay_2089", To = "_c79_1wvay_2105", _o = "_c105_1wvay_2121", Eo = "_c77_1wvay_2137", Po = "_c121_1wvay_2153", So = "_c131_1wvay_2169", Io = "_c129_1wvay_2185", Oo = "_c109_1wvay_2201", Ro = "_c142_1wvay_2217", ko = "_c154_1wvay_2233", Co = "_c152_1wvay_2249", Yo = "_c165_1wvay_2265", Do = "_c106_1wvay_2281", Lo = "_c147_1wvay_2297", Fo = "_c146_1wvay_2313", Uo = "_c108_1wvay_2329", Wo = "_c117_1wvay_2345", xo = "_c124_1wvay_2361", Ho = "_c34_1wvay_2377", Mo = "_c139_1wvay_2393", Go = "_c47_1wvay_2409", Bo = "_c107_1wvay_2425", zo = "_c118_1wvay_2441", qo = "_c132_1wvay_2457", Vo = "_c127_1wvay_2473", $o = "_c83_1wvay_2489", Ko = "_c9_1wvay_127", Xo = "_c119_1wvay_2517", Jo = "_c8_1wvay_109", Qo = "_c3_1wvay_271", Zo = "_c80_1wvay_2559", es = "_c40_1wvay_2573", as = "_c45_1wvay_2587", ns = "_c36_1wvay_2601", os = "_c90_1wvay_2615", ss = "_c11_1wvay_145", is = "_c23_1wvay_2643", ts = "_c58_1wvay_2657", rs = "_c33_1wvay_2671", cs = "_c54_1wvay_2685", ls = "_c1_1wvay_1", ds = "_c52_1wvay_2713", hs = "_c61_1wvay_2727", ps = "_c24_1wvay_2741", us = "_c130_1wvay_2755", ms = "_c111_1wvay_2769", ys = "_c25_1wvay_2783", fs = "_c14_1wvay_415", gs = "_c102_1wvay_2807", vs = "_title_1wvay_2813", ws = "_subtitle_1wvay_2839", Ns = "_p_1wvay_2865", bs = "_li_1wvay_2877", js = "_h1_1wvay_2887", As = "_h2_1wvay_2913", Ts = "_h3_1wvay_2939", _s = "_h4_1wvay_2965", Es = "_h5_1wvay_2991", Ps = "_h6_1wvay_3017", Ss = "_ol_1wvay_3045", Is = "_table_1wvay_3053", Os = "_td_1wvay_3053", Rs = "_th_1wvay_3055", e = {
  c159: pa,
  c73: ua,
  c41: ma,
  c78: ya,
  c51: fa,
  c163: ga,
  c85: va,
  c91: wa,
  c112: Na,
  c76: ba,
  c162: ja,
  c70: Aa,
  c94: Ta,
  c99: _a,
  c126: Ea,
  c35: Pa,
  c100: Sa,
  c98: Ia,
  c96: Oa,
  c13: Ra,
  c18: ka,
  c55: Ca,
  c7: Ya,
  c148: Da,
  c81: La,
  c101: Fa,
  c72: Ua,
  c28: Wa,
  c150: xa,
  c19: Ha,
  c95: Ma,
  c20: Ga,
  c0: Ba,
  c56: za,
  c21: qa,
  c57: Va,
  c89: $a,
  c123: Ka,
  c122: Xa,
  c63: Ja,
  c17: Qa,
  c149: Za,
  c158: en,
  c30: an,
  c5: nn,
  c141: on,
  c93: sn,
  c4: tn,
  c69: rn,
  c39: cn,
  c6: ln,
  c67: dn,
  c65: hn,
  c110: pn,
  c140: un,
  c66: mn,
  c26: yn,
  c42: fn,
  c115: gn,
  c125: vn,
  c145: wn,
  c16: Nn,
  c74: bn,
  c88: jn,
  c75: An,
  c104: Tn,
  c48: _n,
  c10: En,
  c64: Pn,
  c134: Sn,
  c43: In,
  c113: On,
  c138: Rn,
  c153: kn,
  c2: Cn,
  c114: Yn,
  c157: Dn,
  c136: Ln,
  c82: Fn,
  c49: Un,
  c38: Wn,
  c97: xn,
  c160: Hn,
  c68: Mn,
  c120: Gn,
  c87: Bn,
  c32: zn,
  c135: qn,
  c44: Vn,
  c12: $n,
  c62: Kn,
  c29: Xn,
  c37: Jn,
  c22: Qn,
  c53: Zn,
  c92: eo,
  c84: ao,
  c15: no,
  c86: oo,
  c50: so,
  c60: io,
  c144: to,
  c71: ro,
  c27: co,
  c155: lo,
  c31: ho,
  c59: po,
  c156: uo,
  c128: mo,
  c116: yo,
  c137: fo,
  c103: go,
  c133: vo,
  c161: wo,
  c46: No,
  c164: bo,
  c151: jo,
  c143: Ao,
  c79: To,
  c105: _o,
  c77: Eo,
  c121: Po,
  c131: So,
  c129: Io,
  c109: Oo,
  c142: Ro,
  c154: ko,
  c152: Co,
  c165: Yo,
  c106: Do,
  c147: Lo,
  c146: Fo,
  c108: Uo,
  c117: Wo,
  c124: xo,
  c34: Ho,
  c139: Mo,
  c47: Go,
  c107: Bo,
  c118: zo,
  c132: qo,
  c127: Vo,
  c83: $o,
  c9: Ko,
  c119: Xo,
  c8: Jo,
  c3: Qo,
  c80: Zo,
  c40: es,
  c45: as,
  c36: ns,
  c90: os,
  c11: ss,
  c23: is,
  c58: ts,
  c33: rs,
  c54: cs,
  c1: ls,
  c52: ds,
  c61: hs,
  c24: ps,
  c130: us,
  c111: ms,
  c25: ys,
  c14: fs,
  c102: gs,
  title: vs,
  subtitle: ws,
  p: Ns,
  li: bs,
  h1: js,
  h2: As,
  h3: Ts,
  h4: _s,
  h5: Es,
  h6: Ps,
  ol: Ss,
  table: Is,
  td: Os,
  th: Rs
}, Cs = (v) => /* @__PURE__ */ n("section", { children: [
  /* @__PURE__ */ a("p", { className: [e.p, e.c24].join(" "), children: /* @__PURE__ */ n("span", { className: [e.span, e.c160].join(" "), children: [
    "Ashendo Privacy Policy",
    " "
  ] }) }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c134].join(" "), children: /* @__PURE__ */ a("span", { className: [e.span, e.c2].join(" "), children: "Welcome to Ashendo, a service provided by Ashendo Group. Capitalized terms used in  this Privacy Policy that are not specifically defined shall have the meanings given to the  applicable capitalized terms in the Ashendo Terms of Use." }) }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c151].join(" "), children: /* @__PURE__ */ a("span", { className: [e.span, e.c2].join(" "), children: "Your privacy is important to us. This Privacy Policy explains how we collect, store, use,  disclose and otherwise process your personal data when you use Ashendo.africa and  Ashendo.com (together, the “Website”), our mobile and desktop apps (the “Apps”) and  all related sites, players, widgets, tools, data, software, APIs and other services  provided by Ashendo (the “Services”). This Privacy Policy applies to any Website, Apps,  or Services by Ashendo that refers to this Privacy Policy, i.e. by linking to it." }) }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c30].join(" "), children: /* @__PURE__ */ a("span", { className: [e.span, e.c6].join(" "), children: "This Privacy Policy explains the following, amongst other things: • Who Controls Your Data" }) }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c83].join(" "), children: /* @__PURE__ */ n("span", { className: [e.span, e.c6].join(" "), children: [
    "• Legal Basis for Data Processing",
    " "
  ] }) }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c8].join(" "), children: /* @__PURE__ */ n("span", { className: [e.span, e.c6].join(" "), children: [
    "• Personal Data We Collect",
    " "
  ] }) }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c8].join(" "), children: /* @__PURE__ */ n("span", { className: [e.span, e.c6].join(" "), children: [
    "• Personal Data You Provide",
    " "
  ] }) }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c8].join(" "), children: /* @__PURE__ */ n("span", { className: [e.span, e.c6].join(" "), children: [
    "• Personal Data We Collect Automatically",
    " "
  ] }) }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c8].join(" "), children: /* @__PURE__ */ n("span", { className: [e.span, e.c6].join(" "), children: [
    "• Personal Data We Obtain From Third Parties",
    " "
  ] }) }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c8].join(" "), children: /* @__PURE__ */ n("span", { className: [e.span, e.c6].join(" "), children: [
    "• How We Use Your Personal Data",
    " "
  ] }) }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c8].join(" "), children: /* @__PURE__ */ n("span", { className: [e.span, e.c6].join(" "), children: [
    "• How We Share Your Personal Data",
    " "
  ] }) }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c8].join(" "), children: /* @__PURE__ */ n("span", { className: [e.span, e.c6].join(" "), children: [
    "• Cookies and Similar Technology",
    " "
  ] }) }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c8].join(" "), children: /* @__PURE__ */ n("span", { className: [e.span, e.c6].join(" "), children: [
    "• Information Security",
    " "
  ] }) }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c8].join(" "), children: /* @__PURE__ */ n("span", { className: [e.span, e.c6].join(" "), children: [
    "• International Data Transfers",
    " "
  ] }) }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c8].join(" "), children: /* @__PURE__ */ n("span", { className: [e.span, e.c6].join(" "), children: [
    "• Children",
    " "
  ] }) }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c8].join(" "), children: /* @__PURE__ */ n("span", { className: [e.span, e.c6].join(" "), children: [
    "• Our Activity On Social Networks",
    " "
  ] }) }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c8].join(" "), children: /* @__PURE__ */ n("span", { className: [e.span, e.c6].join(" "), children: [
    "• Your Choices and Controls",
    " "
  ] }) }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c8].join(" "), children: /* @__PURE__ */ n("span", { className: [e.span, e.c6].join(" "), children: [
    "• Exercising Your RSA Privacy Rights",
    " "
  ] }) }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c8].join(" "), children: /* @__PURE__ */ a("span", { className: [e.span, e.c6].join(" "), children: "• Contact Information" }) }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c24].join(" "), children: /* @__PURE__ */ n("span", { className: [e.span, e.c6].join(" "), children: [
    "• Changes to this Privacy Policy",
    " "
  ] }) }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c155].join(" "), children: /* @__PURE__ */ a("span", { className: [e.span, e.c2].join(" "), children: "Information relating to our use of cookies and similar technologies is set out in our  Cookie Policy, which forms part of the Privacy Policy. When we refer to the Privacy  Policy, we are referring to the Privacy Policy and Cookie Policy." }) }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c10].join(" "), children: /* @__PURE__ */ a("span", { className: [e.span, e.c2].join(" "), children: "Please take some time to read this Privacy Policy, along with our Terms of Use, in order  to ensure you understand and are comfortable with our use and disclosure of your  personal data." }) }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c18].join(" "), children: /* @__PURE__ */ a("span", { className: [e.span, e.c2].join(" "), children: "Please note that this Privacy Policy only applies to the Website, Apps and Services  (together, the “Platform”). When using the Platform, you may find links to other  websites, apps and services, or tools that enable you to share information with other  websites, apps and services. Ashendo is not responsible for the privacy practices of  these other websites, apps and services and we recommend that you review the privacy  policies of each of these websites, apps or services before connecting your Ashendo  account or sharing any personal data." }) }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c85].join(" "), children: /* @__PURE__ */ a("span", { className: [e.span, e.c2].join(" "), children: "If you do not agree to any of the provisions of this Privacy Policy, you should not use the  Platform. If you have any questions or concerns about this Privacy Policy, you can  contact us through the Help Center or at contact@ashendo.africa." }) }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c44].join(" "), children: /* @__PURE__ */ a("span", { className: [e.span, e.c2].join(" "), children: "Ashendo is committed to putting its users first and believes you should know what  personal data we collect about you, why we collect it, and how we use and share it.  That’s why we’ve designed this Privacy Policy to give you simple, clear, and actionable  information about our privacy and data protection practices." }) }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c68].join(" "), children: /* @__PURE__ */ a("span", { className: [e.span, e.c2].join(" "), children: "We believe users should also have meaningful choices over the personal data we  collect, use and share as described in this Privacy Policy, your Settings and the Help  Center. We encourage you to take full advantage of these tools." }) }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c130].join(" "), children: /* @__PURE__ */ n("span", { className: [e.span, e.c15].join(" "), children: [
    "Who Controls Your Data",
    " "
  ] }) }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c132].join(" "), children: /* @__PURE__ */ a("span", { className: [e.span, e.c2].join(" "), children: "With regard to data processing within the framework of Ashendo’s internal  administration and joint procedures through centralized systems, Ashendo Group. The  joint processes particularly pertain to the operation and use of joint databases, platforms  and IT systems. With respect to the joint processes, Ashendo determines the purposes  and means of processing. Ashendo determines how the respective tasks and  responsibilities of the processing of personal data are structured and who fulfils which  data protection obligations. In particular, it is determined how an appropriate level of  security and how your rights as a data subject can be ensured, how the information  duties under data protection law can be jointly fulfilled and how potential data protection  incidents can be monitored." }) }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c92].join(" "), children: /* @__PURE__ */ a("span", { className: [e.span, e.c2].join(" "), children: "We may share your data within our corporate group of companies that are related by  common ownership or control (“Ashendo Group”) and the data of our users may be  processed by Ashendo Group.  " }) }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c90].join(" "), children: /* @__PURE__ */ a("span", { className: [e.span, e.c2].join(" "), children: 'Ashendo provides statistics and insights about the performance of a particular sound  recording and its underlying composition uploaded to the Platform (“Track”). These  statistics and insights are provided to any person (including Creators) or entity owning  or controlling a Track (“Rightsholders”) and include information about how fans interact  with their Tracks on the Platform to make Rightsholders better understand their fanbase  ("Rightsholder Insights"). Rightsholder Insights are processed in joint controllership  between Ashendo Group.  ' }) }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c40].join(" "), children: /* @__PURE__ */ n("span", { className: [e.span, e.c15].join(" "), children: [
    "Legal Basis for Data Processing",
    " "
  ] }) }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c59].join(" "), children: /* @__PURE__ */ a("span", { className: [e.span, e.c2].join(" "), children: "The collection and processing of your data is governed by the law applicable to your  respective Data Controller, as outlined above." }) }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c51].join(" "), children: /* @__PURE__ */ a("span", { className: [e.span, e.c2].join(" "), children: "With that being said, Ashendo follows South Africa law to ensure adequate protection of  your personal data. Data collection and processing may be based on your consent,  contractual purposes or, in exceptional cases, for legitimate purposes, which we weigh  against your data protection interests. We have specified the legal bases for individual  data processing activities in more detail below." }) }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c119].join(" "), children: /* @__PURE__ */ a("span", { className: [e.span, e.c2].join(" "), children: "We may also use our user’s personal data if:" }) }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c163].join(" "), children: /* @__PURE__ */ a("span", { className: [e.span, e.c2].join(" "), children: "• Processing is necessary to fulfil a legal obligation to which the person responsible is  subject;" }) }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c87].join(" "), children: /* @__PURE__ */ a("span", { className: [e.span, e.c2].join(" "), children: "• Processing is necessary to protect the vital interests of the data subject or another  natural person; or" }) }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c102, e.c133].join(" "), children: /* @__PURE__ */ a("span", { className: [e.span, e.c2].join(" "), children: "• Processing is necessary for the performance of a task that is in the public interest or  takes place in the exercise of official authority that has been assigned to the person  responsible." }) }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c54].join(" "), children: /* @__PURE__ */ n("span", { className: [e.span, e.c15].join(" "), children: [
    "Personal Data We Collect",
    " "
  ] }) }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c5].join(" "), children: /* @__PURE__ */ a("span", { className: [e.span, e.c2].join(" "), children: "Any personal data we collect falls into one of three general categories: • Personal data you provide to us," }) }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c23].join(" "), children: /* @__PURE__ */ n("span", { className: [e.span, e.c2].join(" "), children: [
    "• Personal data we collect automatically,",
    " "
  ] }) }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c1].join(" "), children: /* @__PURE__ */ a("span", { className: [e.span, e.c2].join(" "), children: "• Personal data we obtain from third parties." }) }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c61].join(" "), children: /* @__PURE__ */ n("span", { className: [e.span, e.c15].join(" "), children: [
    "Personal Data You Provide",
    " "
  ] }) }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c101].join(" "), children: /* @__PURE__ */ a("span", { className: [e.span, e.c2].join(" "), children: "We ask for and collect the below personal data when you use the Platform. This  personal data is necessary for the adequate performance of the platform, to meet the  requirements of the contract present between you and us and to comply with our  obligations thereunder." }) }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c110].join(" "), children: /* @__PURE__ */ a("span", { className: [e.span, e.c2].join(" "), children: "You don’t need to register for a Ashendo account in order to visit or use our Platform.  However, certain Services require that you register for an account and, by doing so, you  will need to provide us with certain personal data:" }) }),
  /* @__PURE__ */ n("p", { className: [e.p, e.c49].join(" "), children: [
    /* @__PURE__ */ a("span", { className: [e.span, e.c2].join(" "), children: "• " }),
    /* @__PURE__ */ n("span", { className: [e.span, e.c12].join(" "), children: [
      "Account Information",
      " "
    ] }),
    /* @__PURE__ */ a("span", { className: [e.span, e.c2].join(" "), children: "- When you register with any kind of Ashendo account, you will  need to provide your email address (except when you sign-up with Facebook, Google or  Apple and don’t give your permission to share it with Ashendo), your age, a username  (which may be your real name or a pseudonym) and a password." })
  ] }),
  /* @__PURE__ */ n("p", { className: [e.p, e.c16].join(" "), children: [
    /* @__PURE__ */ a("span", { className: [e.span, e.c2].join(" "), children: "• " }),
    /* @__PURE__ */ n("span", { className: [e.span, e.c12].join(" "), children: [
      "Profile Information",
      " "
    ] }),
    /* @__PURE__ */ a("span", { className: [e.span, e.c2].join(" "), children: "- you may choose, at your discretion, to provide additional personal  data for your public profile on Ashendo – for example:" })
  ] }),
  /* @__PURE__ */ n("p", { className: [e.p, e.c52].join(" "), children: [
    /* @__PURE__ */ a("span", { className: [e.span, e.c2].join(" "), children: "• " }),
    /* @__PURE__ */ n("span", { className: [e.span, e.c12].join(" "), children: [
      "your real name",
      " "
    ] })
  ] }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c1].join(" "), children: /* @__PURE__ */ n("span", { className: [e.span, e.c12].join(" "), children: [
    "• your gender",
    " "
  ] }) }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c1].join(" "), children: /* @__PURE__ */ n("span", { className: [e.span, e.c12].join(" "), children: [
    "• the city and country in which you live",
    " "
  ] }) }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c1].join(" "), children: /* @__PURE__ */ a("span", { className: [e.span, e.c12].join(" "), children: "• a profile picture, profile header image or avatar" }) }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c140].join(" "), children: /* @__PURE__ */ a("span", { className: [e.span, e.c2].join(" "), children: "• any content associated with your Track uploads (all audio (including podcasts), text,  pictures, graphics, comments, and other content, data or information that you upload,  including your compositions, metadata, song names, composer names, creators’  names, performers’ names, group names, producers’ names, album artworks and your  name, image, likeness and biographical information) (“Materials”)." }) }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c20].join(" "), children: /* @__PURE__ */ a("span", { className: [e.span, e.c2].join(" "), children: "• information about how you categorize yourself with respect to your Materials (for  example, whether you are a musician, a label or some other category of creator)" }) }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c52].join(" "), children: /* @__PURE__ */ a("span", { className: [e.span, e.c2].join(" "), children: "• details of your other websites and social media profiles, including links to those pages" }) }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c112].join(" "), children: /* @__PURE__ */ a("span", { className: [e.span, e.c2].join(" "), children: "• any personally identifiable data from your Tracks or respective meta-data will be  published on your profile page in accordance with our Terms of Use. This personal data  will be publicly accessible and may be viewed by anyone accessing the Website, or  using our API or other Services. Please be aware that a profile picture is mandatory  when you request profile verification via your Settings in the “Account” tab." }) }),
  /* @__PURE__ */ n("p", { className: [e.p, e.c28].join(" "), children: [
    /* @__PURE__ */ a("span", { className: [e.span, e.c2].join(" "), children: "• " }),
    /* @__PURE__ */ n("span", { className: [e.span, e.c12].join(" "), children: [
      "Subscriptions",
      " "
    ] }),
    /* @__PURE__ */ a("span", { className: [e.span, e.c2].join(" "), children: "- If you purchase a Subscription, you must provide your real name,  billing address, and payment verification information. Please be aware that we only get  payment verification information and no further details of your payment, as outlined in  the respective section of this Privacy Policy. Any use of such personal data is for  contractual purposes." })
  ] }),
  /* @__PURE__ */ n("p", { className: [e.p, e.c91].join(" "), children: [
    /* @__PURE__ */ a("span", { className: [e.span, e.c2].join(" "), children: "• " }),
    /* @__PURE__ */ n("span", { className: [e.span, e.c12].join(" "), children: [
      "Ashendo Direct",
      " "
    ] }),
    /* @__PURE__ */ a("span", { className: [e.span, e.c2].join(" "), children: "- In the event you use the services of Ashendo Direct, you must  provide your real name, payment information and personal data necessary to operate  and maintain your monetization and/or distribution with Ashendo Direct (e.g. content  identification information such ISRC codes)." })
  ] }),
  /* @__PURE__ */ n("p", { className: [e.p, e.c120].join(" "), children: [
    /* @__PURE__ */ a("span", { className: [e.span, e.c2].join(" "), children: "• " }),
    /* @__PURE__ */ n("span", { className: [e.span, e.c12].join(" "), children: [
      "Music Publishing",
      " "
    ] }),
    /* @__PURE__ */ a("span", { className: [e.span, e.c2].join(" "), children: "- In the event you use the services of music publishing  administration, you must provide your real name, payment information and personal  data necessary to operate and maintain your music publishing administration (e.g.  publisher, sub-publisher information as well as performance rights and or mechanical  rights organization information and content identification data, such as interested party  Information (IPI) numbers, ISRC numbers)." })
  ] }),
  /* @__PURE__ */ n("p", { className: [e.p, e.c65].join(" "), children: [
    /* @__PURE__ */ a("span", { className: [e.span, e.c2].join(" "), children: "• " }),
    /* @__PURE__ */ n("span", { className: [e.span, e.c12].join(" "), children: [
      "Communications",
      " "
    ] }),
    /* @__PURE__ */ a("span", { className: [e.span, e.c2].join(" "), children: "- When you communicate with Ashendo by email or through the  Platform, or use the Platform to communicate with other users, we collect personal data  about your communication and any personal data you choose to provide based on  contractual purposes." })
  ] }),
  /* @__PURE__ */ n("p", { className: [e.p, e.c37].join(" "), children: [
    /* @__PURE__ */ a("span", { className: [e.span, e.c2].join(" "), children: "• " }),
    /* @__PURE__ */ n("span", { className: [e.span, e.c12].join(" "), children: [
      "Survey Information",
      " "
    ] }),
    /* @__PURE__ */ a("span", { className: [e.span, e.c2].join(" "), children: "- If you participate in any survey, you may provide certain personal  data as part of your response, unless you respond anonymously. The personal data you  provided is only processed based on your consent." })
  ] }),
  /* @__PURE__ */ n("p", { className: [e.p, e.c102, e.c103].join(" "), children: [
    /* @__PURE__ */ a("span", { className: [e.span, e.c2].join(" "), children: "• " }),
    /* @__PURE__ */ n("span", { className: [e.span, e.c12].join(" "), children: [
      "Information You Post",
      " "
    ] }),
    /* @__PURE__ */ a("span", { className: [e.span, e.c2].join(" "), children: "- You may provide personal data when you upload Tracks to the  Platform, when you post comments, or when you contribute to community discussions.  This is based on your own choice, and in accordance with our Terms of Use, we may  use such data for contractual purposes." })
  ] }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c45].join(" "), children: /* @__PURE__ */ a("span", { className: [e.span, e.c2].join(" "), children: "• Information Provided For Tax or Financial Reasons" }) }),
  /* @__PURE__ */ n("p", { className: [e.p, e.c102, e.c146].join(" "), children: [
    /* @__PURE__ */ a("span", { className: [e.span, e.c2].join(" "), children: "• " }),
    /* @__PURE__ */ a("span", { className: [e.span, e.c12].join(" "), children: "Tax ID/VAT " }),
    /* @__PURE__ */ a("span", { className: [e.span, e.c2].join(" "), children: "- We also collect your tax ID or VAT number if applicable. If you join  Ashendo Direct as a business, this personal data is required to enable proper tax  accounting purposes." })
  ] }),
  /* @__PURE__ */ n("p", { className: [e.p, e.c99].join(" "), children: [
    /* @__PURE__ */ a("span", { className: [e.span, e.c2].join(" "), children: "• " }),
    /* @__PURE__ */ n("span", { className: [e.span, e.c12].join(" "), children: [
      "Other Tax Payee Information",
      " "
    ] }),
    /* @__PURE__ */ a("span", { className: [e.span, e.c2].join(" "), children: "- If you are located in the South Africa, we will collect  certain personal data and certifications from you, which enables us to report eligible  payouts to the Internal Revenue Service." })
  ] }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c54].join(" "), children: /* @__PURE__ */ a("span", { className: [e.span, e.c15].join(" "), children: "Personal Data We Collect Automatically" }) }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c77].join(" "), children: /* @__PURE__ */ a("span", { className: [e.span, e.c2].join(" "), children: "There is certain personal data that we collect automatically as the result of your use of  the Platform, subject to the choices you make in your Settings, or through the use of  cookies and other web analytics services as described in our Cookie Policy. This  personal data generally includes:" }) }),
  /* @__PURE__ */ n("p", { className: [e.p, e.c102, e.c127].join(" "), children: [
    /* @__PURE__ */ a("span", { className: [e.span, e.c2].join(" "), children: "• " }),
    /* @__PURE__ */ n("span", { className: [e.span, e.c12].join(" "), children: [
      "Usage Information",
      " "
    ] }),
    /* @__PURE__ */ a("span", { className: [e.span, e.c2].join(" "), children: "- We collect personal data about your interactions with the  Platform, including the pages that you visit and links you click on, streaming, offline  listening or downloading Tracks, uploading or recording Tracks, connecting your  Facebook, Google or Apple account, sharing a Track with another user, following or  unfollowing another user, posting a comment, performing a search, the time, frequency  and duration of your visits to the Platform, and whether you interact with email  messages, for example, if you opened, clicked on, or forwarded the email message.  This use of your personal data is based solely on contractual purposes should you have  accepted our Terms of Use. If you have not registered on Ashendo, the use of this  personal data is based on our legitimate interest. Please be aware that we need such  usage data as we are under contractual obligation to track use of content by our content  providers." })
  ] }),
  /* @__PURE__ */ n("p", { className: [e.p, e.c102, e.c137].join(" "), children: [
    /* @__PURE__ */ a("span", { className: [e.span, e.c2].join(" "), children: "• " }),
    /* @__PURE__ */ a("span", { className: [e.span, e.c12].join(" "), children: "Log Data " }),
    /* @__PURE__ */ a("span", { className: [e.span, e.c2].join(" "), children: "– We automatically collect log information when you use the Platform, even if  you have not registered for an account or logged in. That personal data includes,  among other things: details about how you’ve used the Platform (including links to third  party sites or services), Internet Protocol (IP) address, access times, your browser type  and operating system, device information, device event information (e.g., crashes,  browser type), and the page you’ve viewed or engaged with before or after using the  Platform. This personal data is essential for our service and is therefore either based on  contractual purposes or on legitimate interest if no contract exists. Please be aware that  we need log data as we are under contractual obligation to track use of content by our  content providers." })
  ] }),
  /* @__PURE__ */ n("p", { className: [e.p, e.c43].join(" "), children: [
    /* @__PURE__ */ a("span", { className: [e.span, e.c2].join(" "), children: "• " }),
    /* @__PURE__ */ a("span", { className: [e.span, e.c12].join(" "), children: "Cookies " }),
    /* @__PURE__ */ a("span", { className: [e.span, e.c2].join(" "), children: "– We use cookies and other similar technologies, such as pixels, local  storage, and mobile device identifiers and may also allow our business partners to use  these tracking technologies on the Platform, or engage others to track your behavior on  our behalf. Type, number and function of cookies can vary depending on your individual  selection. For more information on our use of these technologies, see our Cookie  Policy." })
  ] }),
  /* @__PURE__ */ n("p", { className: [e.p, e.c69].join(" "), children: [
    /* @__PURE__ */ a("span", { className: [e.span, e.c2].join(" "), children: "• " }),
    /* @__PURE__ */ n("span", { className: [e.span, e.c12].join(" "), children: [
      "Location Data",
      " "
    ] }),
    /* @__PURE__ */ a("span", { className: [e.span, e.c2].join(" "), children: "– When you use certain features of the Platform, we may collect  personal data about your general location. Physical locations collected through our  Platform are associated with non-personally identifiable data including but not limited to  device type, browser type, operating system. We use such personal data to deliver  personalized location-based services or content. In some instances, you may be  permitted to allow or deny such use of your device’s location, but if you choose to deny" })
  ] }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c104].join(" "), children: /* @__PURE__ */ a("span", { className: [e.span, e.c2].join(" "), children: "such use, we may not be able to provide you with the applicable personalized services  or content. We use this personal data to provide you with location-based services (such  as advertising and personalized content). Most mobile devices allow you to control or  disable the use of location services for applications in the device’s settings. Such use of  personal data is based on your consent, either within our Platform or within your device  where you provided your consent when prompted." }) }),
  /* @__PURE__ */ n("p", { className: [e.p, e.c125].join(" "), children: [
    /* @__PURE__ */ a("span", { className: [e.span, e.c2].join(" "), children: "• " }),
    /* @__PURE__ */ n("span", { className: [e.span, e.c12].join(" "), children: [
      "Device Information",
      " "
    ] }),
    /* @__PURE__ */ a("span", { className: [e.span, e.c2].join(" "), children: "– We collect personal data from and about the devices you use,  including how you interact with the Platform and information about the device itself,  such as the hardware model, operating system, IP addresses, cookie information,  device settings, mobile carrier information, mobile device and advertising identifiers,  apps installed, browser type, language, battery level and time zone. This information  allows us to recognize and associate your activity, and provide personalized content  and advertising, consistently across all of your devices. Such use of personal data is  based on your consent given either within our Platform or within your device." })
  ] }),
  /* @__PURE__ */ n("p", { className: [e.p, e.c144].join(" "), children: [
    /* @__PURE__ */ a("span", { className: [e.span, e.c2].join(" "), children: "• " }),
    /* @__PURE__ */ n("span", { className: [e.span, e.c12].join(" "), children: [
      "Software Development Kits (“SDK”)",
      " "
    ] }),
    /* @__PURE__ */ a("span", { className: [e.span, e.c2].join(" "), children: "- We may use third parties including our business  partners and service providers who use mobile SDKs to collect personal data and  information related to how mobile devices interact with the Platform. An SDK is  computer code that app developers can include in their apps to enable ads to be shown,  personal data to be collected and related services and functionality to be implemented.  We may use this technology, for instance, to analyze how you interact with Materials  and advertisements and to enable analytics or other features through mobile devices.  However, such use will be based on your consent." })
  ] }),
  /* @__PURE__ */ n("p", { className: [e.p, e.c102, e.c147].join(" "), children: [
    /* @__PURE__ */ a("span", { className: [e.span, e.c2].join(" "), children: "• " }),
    /* @__PURE__ */ n("span", { className: [e.span, e.c12].join(" "), children: [
      "Ashendo Widget",
      " "
    ] }),
    /* @__PURE__ */ a("span", { className: [e.span, e.c2].join(" "), children: "- Other websites may integrate Ashendo widgets; when you visit a  website with a Ashendo widget embedded, we may receive certain personal data,  including personal data about the website you visited. Ashendo and the widget may be  able to recognize you in order to retrieve your library of content, and in some cases the  widget may be used to show personalized content. We know when you interact with a  widget, and websites containing the widgets may receive this information as well. Such  use is subject to the privacy policy of the third party website or app that has integrated a  Ashendo widget." })
  ] }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c54].join(" "), children: /* @__PURE__ */ n("span", { className: [e.span, e.c15].join(" "), children: [
    "Personal Data We Obtain From Third Parties",
    " "
  ] }) }),
  /* @__PURE__ */ n("p", { className: [e.p, e.c156].join(" "), children: [
    /* @__PURE__ */ a("span", { className: [e.span, e.c2].join(" "), children: "• " }),
    /* @__PURE__ */ n("span", { className: [e.span, e.c12].join(" "), children: [
      "Single-Sign Ons",
      " "
    ] }),
    /* @__PURE__ */ a("span", { className: [e.span, e.c2].join(" "), children: "– If you sign up for Ashendo through a third party application such as  Facebook, Google or Apple, you authorize us to collect your authentication information,  such as your username and encrypted access credentials, and other personal data  available through the third party application account, including the following personal  data:" })
  ] }),
  /* @__PURE__ */ n("p", { className: [e.p, e.c19].join(" "), children: [
    /* @__PURE__ */ a("span", { className: [e.span, e.c2].join(" "), children: "• " }),
    /* @__PURE__ */ n("span", { className: [e.span, e.c12].join(" "), children: [
      "Facebook Connect",
      " "
    ] }),
    /* @__PURE__ */ a("span", { className: [e.span, e.c2].join(" "), children: `– If you have a Facebook profile, you can register on our website  to create a user account or to register using the "Facebook Connect" social plugin run  by the Facebook social network, which is operated by Facebook, Inc., 1 Hacker Way,  Menlo Park, CA 94025, USA ("Facebook"), using what is known as Single Sign-On  technology. You can recognize the "Facebook Connect" social plugins on our website  by the blue button with the Facebook logo and the inscription "Register with Facebook"  or "Connect with Facebook" or "Log in with Facebook" or "Sign in with Facebook".  When you visit a page of our website that contains a social plugin, your browser makes  a direct connection to the Facebook servers. The content of the plugin is transferred  from Facebook directly to your browser, which then embeds it into the website. Through  the integrated plugin, Facebook receives the information that your browser has  accessed the corresponding page of our website, even if you do not have a Facebook  profile or are not currently logged in to Facebook. This information (including your IP  address) is transmitted by your browser directly to a Facebook server in the US and  stored there. These data processing operations are carried out on the basis of  Facebook's legitimate interest in the displaying of personalized advertising on the basis  of browsing behavior. By using the "Facebook Connect" button on our website, you can  also log in or register on our website using your Facebook user data. Depending on  your personal data protection settings on Facebook, we will only receive general  information that is publicly accessible and stored in your profile when you use  Facebook’s "Facebook Connect" button if you give your express consent prior to the  registration process on the basis of a corresponding notification on the exchange of  data with Facebook. This information includes your user ID, name, profile picture, age  and gender. We would like to point out that with your consent or in case of changes to  Facebook's privacy policy and terms of use, your profile pictures, your friends' user IDs  and friends list may be transferred if these have been marked as "public" in your  Facebook privacy settings. Apart from connecting your Facebook account with your  Ashendo account for the purposes of registration and signing in, you may provide,  based on your free choice (i.e. with your expressed consent) further personal data from  your Facebook profile with Facebook Connect to enrich your use and enjoyment of our  Platform. This especially applies to your likes and/or usage, listening and viewing  behavior as well as your friends within Facebook. In case you decide to share this  information with us, we will display relevant artists, playlists and such to you for your  liking. We will store and process the personal data transmitted by Facebook to create a  user account with the necessary personal data, provided you have approved this on  Facebook. Conversely, based on your consent, personal data (e.g. on your surfing or  purchasing behavior) may be transferred from us to your Facebook profile. Please see  Facebook's privacy policies for the purpose and scope of data collection and the further  processing and use of data by Facebook, as well as your rights and settings options for  protecting your privacy. If you do not wish Facebook to associate any data collected via` })
  ] }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c98].join(" "), children: /* @__PURE__ */ a("span", { className: [e.span, e.c2].join(" "), children: "our website with your Facebook profile, you should log out of Facebook before you visit  our website. You can also completely avoid loading the Facebook plugin with add-ons  for your browser." }) }),
  /* @__PURE__ */ n("p", { className: [e.p, e.c102, e.c109].join(" "), children: [
    /* @__PURE__ */ a("span", { className: [e.span, e.c2].join(" "), children: "• " }),
    /* @__PURE__ */ a("span", { className: [e.span, e.c12].join(" "), children: "Google " }),
    /* @__PURE__ */ a("span", { className: [e.span, e.c2].join(" "), children: "– You can sign up and log in to Ashendo using your Google account. When  you sign up using Google, Google will ask your permission to share certain information  from your Google account with Ashendo. This includes your Google email address,  birthdate (optional), gender (optional), and avatar (optional). This information is  collected by Google and is provided to us under the terms of Google’s privacy policy.  You can regulate the information that we receive from Google using your Google activity  controls. If you signed up using Google by mistake, you can delete your account from  the Account page within your Settings at any time, or you can contact us via the Help  Center." })
  ] }),
  /* @__PURE__ */ n("p", { className: [e.p, e.c17].join(" "), children: [
    /* @__PURE__ */ a("span", { className: [e.span, e.c2].join(" "), children: "• " }),
    /* @__PURE__ */ a("span", { className: [e.span, e.c12].join(" "), children: "Apple " }),
    /* @__PURE__ */ a("span", { className: [e.span, e.c2].join(" "), children: "- You may also sign up and log in to Ashendo using your Apple-ID. When you  sign up using your Apple-ID, Apple will ask your permission to share certain information  from your Apple account with Ashendo. This includes your Apple email address,  birthdate (optional), gender (optional), and avatar (optional). This information is  collected by Apple and is provided to us under the terms of Apple’s privacy policy. You  can regulate the information that we receive from Apple using your Apple-ID settings. If  you signed up using Apple by mistake, you can delete your account from the Account  page within your Settings at any time, or you can contact us via the Help Center." })
  ] }),
  /* @__PURE__ */ n("p", { className: [e.p, e.c102, e.c121].join(" "), children: [
    /* @__PURE__ */ a("span", { className: [e.span, e.c2].join(" "), children: "• " }),
    /* @__PURE__ */ n("span", { className: [e.span, e.c12].join(" "), children: [
      "Service Providers and Business Partners",
      " "
    ] }),
    /* @__PURE__ */ a("span", { className: [e.span, e.c2].join(" "), children: "– We may also receive personal data about  you from our service providers and business partners, including companies that assist  with payment processing, analytics, advertising, marketing, data processing and  management (e.g. to measure ad quality and responses to ads, and to display ads that  are more likely to be relevant to you, including for Ashendo products) account  management, hosting, customer and technical support, content moderation, and other  services which we use to personalize your Ashendo experience. We explain in more  detail why and how we use this personal data below." })
  ] }),
  /* @__PURE__ */ n("p", { className: [e.p, e.c102, e.c106].join(" "), children: [
    /* @__PURE__ */ a("span", { className: [e.span, e.c2].join(" "), children: "• " }),
    /* @__PURE__ */ a("span", { className: [e.span, e.c12].join(" "), children: "Android IDs " }),
    /* @__PURE__ */ a("span", { className: [e.span, e.c2].join(" "), children: "- We collect your Google Android’s Advertising ID (“AAID”). You can reset  these numbers through the settings of your device’s operating system (we do not  control this). Such identifiers will only be used for further analysis subject to your  consent." })
  ] }),
  /* @__PURE__ */ n("p", { className: [e.p, e.c88].join(" "), children: [
    /* @__PURE__ */ a("span", { className: [e.span, e.c2].join(" "), children: "• " }),
    /* @__PURE__ */ a("span", { className: [e.span, e.c12].join(" "), children: "Apple IDs " }),
    /* @__PURE__ */ a("span", { className: [e.span, e.c2].join(" "), children: "- We collect your Apple Identifier for Advertising (“IDFA”). You can reset  these numbers through the settings of your device’s operating system (we do not  control this). Such identifiers will only be used for further analysis subject to your  consent." })
  ] }),
  /* @__PURE__ */ n("p", { className: [e.p, e.c102, e.c128].join(" "), children: [
    /* @__PURE__ */ a("span", { className: [e.span, e.c2].join(" "), children: "• " }),
    /* @__PURE__ */ n("span", { className: [e.span, e.c12].join(" "), children: [
      "Cross App Tracking on Apple Devices",
      " "
    ] }),
    /* @__PURE__ */ a("span", { className: [e.span, e.c2].join(" "), children: "- Starting with iOS 14.5, iPadOS 14.5, and tvOS  14.5, we will need to receive your permission through the AppTrackingTransparency  framework to access and track you through your device’s advertising identifier (see  above “IDFA”). Tracking refers to the act of linking user or device data collected from  our app with user or device data collected from other companies’ apps, websites, or  offline properties for targeted advertising or advertising measurement purposes.  Tracking also refers to sharing user or device data with data brokers. The use of such  tracking is subject to your consent and therefore may only be exercised by us with such  consent. Apple allows the ID for Vendors (IDFV) to be used for analytics across apps  from the same content provider (us). The IDFV may not be combined with other data to  track a user across apps and websites owned by other companies unless we have been  granted permission to track by you. For further information on how we use the  SKAdNetwork for attribution tracking please refer to the documentation that Apple  provides here." })
  ] }),
  /* @__PURE__ */ n("p", { className: [e.p, e.c64].join(" "), children: [
    /* @__PURE__ */ a("span", { className: [e.span, e.c2].join(" "), children: "• " }),
    /* @__PURE__ */ n("span", { className: [e.span, e.c12].join(" "), children: [
      "Payment Processing In the Apple App and Google Play Store",
      " "
    ] }),
    /* @__PURE__ */ a("span", { className: [e.span, e.c2].join(" "), children: "- Payment processing  services within the relevant Apps and App Stores enable Ashendo to process  payments. Ashendo does not process or store credit card details, and uses only the  information necessary to execute the transaction with the financial intermediaries  handling the transaction. Even though we never have access to raw unencrypted card  details of a card holder, some of these services may also enable the sending of timed  messages to you, such as emails containing invoices or notifications concerning your  payment." })
  ] }),
  /* @__PURE__ */ n("p", { className: [e.p, e.c50].join(" "), children: [
    /* @__PURE__ */ a("span", { className: [e.span, e.c2].join(" "), children: "• " }),
    /* @__PURE__ */ n("span", { className: [e.span, e.c12].join(" "), children: [
      "External Payment Providers",
      " "
    ] }),
    /* @__PURE__ */ a("span", { className: [e.span, e.c2].join(" "), children: "- The payment provider you use for your payment is  solely responsible for the payment. Please refer to the terms of service and privacy  policy of your payment provider for further information." })
  ] }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c9].join(" "), children: /* @__PURE__ */ n("span", { className: [e.span, e.c15].join(" "), children: [
    "How We Use Your Personal Data",
    " "
  ] }) }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c159].join(" "), children: /* @__PURE__ */ a("span", { className: [e.span, e.c2].join(" "), children: "We use the personal data we collect from you for a range of different business purposes  according to different legal bases of processing and subject to the choices you make in  your Settings. We do this with the help of automated systems and decision making.  Please be aware that when we refer to automated decision making, we will not use any  profiling that produces legal effects concerning you or, similarly, significantly affects you.  Automated decisions are concerned with content that may be more relevant for you  than other content. We use your personal data to:" }) }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c42].join(" "), children: /* @__PURE__ */ a("span", { className: [e.span, e.c2].join(" "), children: "• Provide, Improve, and Develop the Platform - We process your personal data primarily  for the adequate performance of our contract with you (e.g. Terms of Use). We may  also process your personal data in light of our legitimate interest in improving the  Platform and giving our users the best experience. We do this to:" }) }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c77, e.c102].join(" "), children: /* @__PURE__ */ a("span", { className: [e.span, e.c2].join(" "), children: "• Operate and maintain your Ashendo account, and to provide you with access to and  use of the Platform. Your email address and password are used to identify you when  you log into the Platform. Your device-IDs are used to ensure that you are in control of  the devices that have access to your Subscription." }) }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c145].join(" "), children: /* @__PURE__ */ a("span", { className: [e.span, e.c2].join(" "), children: "• Identify you as the creator of the Tracks that you upload, the comments that you post  and/or the other contributions that you make to the Platform." }) }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c71].join(" "), children: /* @__PURE__ */ a("span", { className: [e.span, e.c2].join(" "), children: "• Provide creators with stats and insights about users’ listening behavior of their Tracks,  (i.e. streaming and downloading their Tracks or following their profiles)." }) }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c102, e.c131].join(" "), children: /* @__PURE__ */ a("span", { className: [e.span, e.c2].join(" "), children: "• Conduct surveys and research, test features in development, and analyze the  information we have to evaluate and improve products and services, develop new  features, and conduct audits and troubleshooting activities." }) }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c27].join(" "), children: /* @__PURE__ */ a("span", { className: [e.span, e.c2].join(" "), children: "• If purchasing a Subscription, to process your account subscription and renewals and  to collect your payment with the use of payment verification information." }) }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c66].join(" "), children: /* @__PURE__ */ a("span", { className: [e.span, e.c2].join(" "), children: "• Send you service updates and notifications about your account, unless you opt out  from such notifications." }) }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c107].join(" "), children: /* @__PURE__ */ a("span", { className: [e.span, e.c2].join(" "), children: "• Respond to you about any comment or enquiry you have submitted. • Enable age restrictions." }) }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c102, e.c142].join(" "), children: /* @__PURE__ */ a("span", { className: [e.span, e.c2].join(" "), children: "• Maintain a Safe and Secure Environment - We also process your personal data in light  of our legitimate interest in improving the security of the Platform (including the security  of your personal data) in order to give our users the best experience, and where it is  necessary for the adequate performance of our contract with you (e.g. Terms of Use).  This includes:" }) }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c158].join(" "), children: /* @__PURE__ */ a("span", { className: [e.span, e.c2].join(" "), children: "• The detection and prevention of fraud, spam, abuse, security incidents, and other  suspicious activity." }) }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c72].join(" "), children: /* @__PURE__ */ a("span", { className: [e.span, e.c2].join(" "), children: "• The verification and authentication of your identity to prevent unauthorized or illegal  activity." }) }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c46].join(" "), children: /* @__PURE__ */ a("span", { className: [e.span, e.c2].join(" "), children: "• The enhancement of the safety and security of our products and services. • The conducting of security investigations and risk assessments." }) }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c126].join(" "), children: /* @__PURE__ */ a("span", { className: [e.span, e.c2].join(" "), children: "• The prevention or action against activities that are, or may be, in breach of our Terms  of Use, Community Guidelines or applicable law." }) }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c45].join(" "), children: /* @__PURE__ */ a("span", { className: [e.span, e.c2].join(" "), children: "• The ability to provide you with customer and technical support." }) }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c41].join(" "), children: /* @__PURE__ */ a("span", { className: [e.span, e.c2].join(" "), children: "• Personalize Content, Advertising and Marketing - We process your personal data in  this case based on your consent. You can revisit your choices in your settings or in our  cookie consent tool. This includes:" }) }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c74].join(" "), children: /* @__PURE__ */ a("span", { className: [e.span, e.c2].join(" "), children: "• To improve your experience on the Platform by providing personalized content,  recommendations, and features." }) }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c113].join(" "), children: /* @__PURE__ */ a("span", { className: [e.span, e.c2].join(" "), children: "• To customize the content and measure performance of any email, push notification, or  in-app message we may send to you." }) }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c138].join(" "), children: /* @__PURE__ */ a("span", { className: [e.span, e.c2].join(" "), children: "• To administer sweepstakes, contests, or other promotional activities or events  sponsored or managed by Ashendo or its partners." }) }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c81].join(" "), children: /* @__PURE__ */ a("span", { className: [e.span, e.c2].join(" "), children: "• To deliver targeted marketing for Ashendo products on and off the Platform and  measure the success of those campaigns. When seeing our ads on third party websites  or apps, we or third party services we engage with for this purpose may collect personal  data. This personal data includes the information that your browser or mobile app  makes available when seeing the ad (e.g IP address, referral URL, browser details,  timestamp of request). For example, if a click on our ad converted to an actual purchase  of a subscription." }) }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c55].join(" "), children: /* @__PURE__ */ a("span", { className: [e.span, e.c2].join(" "), children: "• To help us select which ads to show you on behalf of advertisers, as ads are more  effective when they are shown to people who are likely to be interested in the product or  service advertised. This includes personal data you choose to provide to us (e.g. age  and gender) and make available to us when you interact with the Platform (e.g. by  listening, liking or creating playlists), as well as device information and general location  data. We may also display ads based on the page you’re on or Materials you have  recently viewed, searched, or listened to. This allows us to show you ads that will likely  be more relevant and interesting to you." }) }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c97].join(" "), children: /* @__PURE__ */ a("span", { className: [e.span, e.c2].join(" "), children: "• To collect certain personal data such as cookie data and device information, if we  engage with third party services such as ad-networks and exchanges that enable us to  show you targeted ads. That personal data is used to sync or match users to segments  and serve targeted advertising, based on device activity, inferred interests, and general  location information." }) }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c63].join(" "), children: /* @__PURE__ */ a("span", { className: [e.span, e.c2].join(" "), children: "• To combine personal data that we collect about you with personal data from business  partners and use it to serve more relevant advertising." }) }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c93].join(" "), children: /* @__PURE__ */ a("span", { className: [e.span, e.c2].join(" "), children: "• Combine information we collect about you with information from business partners and  use it to serve more relevant advertising." }) }),
  /* @__PURE__ */ n("p", { className: [e.p, e.c143].join(" "), children: [
    /* @__PURE__ */ a("span", { className: [e.span, e.c2].join(" "), children: "• " }),
    /* @__PURE__ */ a("span", { className: [e.span, e.c12].join(" "), children: "Newsletters " }),
    /* @__PURE__ */ a("span", { className: [e.span, e.c2].join(" "), children: "- If you register on our website to receive our newsletter, we collect your  email address and your name and save this information together with the date of" })
  ] }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c26].join(" "), children: /* @__PURE__ */ a("span", { className: [e.span, e.c2].join(" "), children: "registration and your IP address. You will then receive an email in which you must  confirm your decision to subscribe to the newsletter (double opt-in). If you do not  confirm your newsletter subscription within 72 hours, it will automatically expire and the  personal data will not be processed for sending the newsletter. We will send the  newsletter directly using our own system (Braze).Your personal data will not be passed  on to third parties or processors. In the case that you do not confirm your subscription  within 72 hours, we will delete the personal data that you provided. After successful  confirmation, we will save your personal data until you withdraw your consent  (unsubscribe from the newsletter) and for technical reasons beyond this for a maximum  of 21 days. This processing is based on your consent. By unsubscribing from the  newsletter, you can withdraw your consent at any time with future effect." }) }),
  /* @__PURE__ */ n("p", { className: [e.p, e.c102, e.c164].join(" "), children: [
    /* @__PURE__ */ a("span", { className: [e.span, e.c2].join(" "), children: "• " }),
    /* @__PURE__ */ n("span", { className: [e.span, e.c12].join(" "), children: [
      "Market Research Studies",
      " "
    ] }),
    /* @__PURE__ */ a("span", { className: [e.span, e.c2].join(" "), children: "- Based on our legitimate interest, from time to time we will  ask you to participate in market research studies and surveys or to do research studies  based on anonymized and/or pseudonymized data. There is no obligation to participate  in our studies. In the case that you do participate, it will be based on the consent you  provide when answering the survey. We deem that the use of anonymized and/or  pseudonymized data is covered by our legitimate interest as we will only use such  analysis to further improve our research and Platform for the benefit of understanding  your needs and enhancing your experience. We will only use the data you provide when  answering the market study for other reasons, such as customized product  recommendations or notifications based on your consent which you provide ahead of  your participation in the market study." })
  ] }),
  /* @__PURE__ */ n("p", { className: [e.p, e.c32].join(" "), children: [
    /* @__PURE__ */ a("span", { className: [e.span, e.c2].join(" "), children: "• " }),
    /* @__PURE__ */ n("span", { className: [e.span, e.c12].join(" "), children: [
      "Operate and Maintain Ashendo Direct Monetization",
      " "
    ] }),
    /* @__PURE__ */ a("span", { className: [e.span, e.c2].join(" "), children: "- In the event you use the services  of Ashendo Direct, we use the personal data provided by you to operate and maintain  your monetization and/or distribution with Ashendo Direct. The personal data will be  used to calculate the eligible revenue to be paid out to you and affect the payments into  your PayPal account or any other accepted payment provider." })
  ] }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c9].join(" "), children: /* @__PURE__ */ n("span", { className: [e.span, e.c15].join(" "), children: [
    "How We Share Your Personal Data",
    " "
  ] }) }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c149].join(" "), children: /* @__PURE__ */ a("span", { className: [e.span, e.c2].join(" "), children: "This section describes how the personal data collected or generated through your use  of the Platform may be shared by you or by us." }) }),
  /* @__PURE__ */ n("p", { className: [e.p, e.c136].join(" "), children: [
    /* @__PURE__ */ a("span", { className: [e.span, e.c2].join(" "), children: "• " }),
    /* @__PURE__ */ n("span", { className: [e.span, e.c12].join(" "), children: [
      "Through Your Profile",
      " "
    ] }),
    /* @__PURE__ */ a("span", { className: [e.span, e.c2].join(" "), children: "– Any personal data in your public profile (other than your email  address) will be accessible by other users of the Platform, who may view your profile  information, listen to and comment on any of your public Tracks, add themselves to your  list of followers, and send you messages. Artist profile owners will be able to see in their  statistics that you have listened to the Tracks they uploaded along with a ranking of who  listened to their Tracks the most. They will also be able to see how many times you  have listened to any of their Tracks, and that you are following them. This is to allow" })
  ] }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c122].join(" "), children: /* @__PURE__ */ a("span", { className: [e.span, e.c2].join(" "), children: "creators to track the popularity of their Tracks. Similarly, if you comment on any Tracks  on the Platform, your comments will be available to all users of the Platform together  with your profile name and picture. More information is available in the Ashendo Fan  Insights document here." }) }),
  /* @__PURE__ */ n("p", { className: [e.p, e.c102, e.c118].join(" "), children: [
    /* @__PURE__ */ a("span", { className: [e.span, e.c2].join(" "), children: "• " }),
    /* @__PURE__ */ n("span", { className: [e.span, e.c12].join(" "), children: [
      "Service Providers",
      " "
    ] }),
    /* @__PURE__ */ a("span", { className: [e.span, e.c2].join(" "), children: "– We use a variety of service providers to provide services to us or  to our users on our behalf. These service providers have access to your personal data  solely to perform these tasks on our behalf, and are contractually bound to implement  appropriate organizational and technical security measures to protect against  unauthorized disclosure of personal data, and only to process personal data in  accordance with our instructions and to the extent necessary to provide their services to  us. We need to share your personal data in order to ensure the adequate performance  of our contract with you. For instance, we work closely with service providers in the area  of customer service (i.e. help center, content moderation), with technical service  providers (e.g. running computer centers) or music service providers (i.e. rights  administration) and payment service providers. These service providers may generally  only process your personal data on our behalf under special conditions. When using  such service providers, we guarantee an adequate level of data protection and will use  any contractual and actual safeguards to comply with respective regulations." })
  ] }),
  /* @__PURE__ */ n("p", { className: [e.p, e.c48].join(" "), children: [
    /* @__PURE__ */ a("span", { className: [e.span, e.c2].join(" "), children: "• " }),
    /* @__PURE__ */ n("span", { className: [e.span, e.c12].join(" "), children: [
      "Rightsholders",
      " "
    ] }),
    /* @__PURE__ */ a("span", { className: [e.span, e.c2].join(" "), children: "- The Platform allows you to listen to a variety of Tracks, including  licensed streaming content. We share personal data with rightsholders that license  Tracks to us to help them understand how the Tracks that they provide are performing,  including insights about general or individual user listening trends and preferences; this  can possibly include your public profile details as well as basic usage data (for example  interactions with Tracks). We share this personal data based on our legitimate interest,  as our contracts with these rightsholders state that they will be granted these insights.  Their interest prevails over your legitimate interest in the safekeeping of your public  profile information and basic usage data." })
  ] }),
  /* @__PURE__ */ n("p", { className: [e.p, e.c35].join(" "), children: [
    /* @__PURE__ */ a("span", { className: [e.span, e.c2].join(" "), children: "• " }),
    /* @__PURE__ */ n("span", { className: [e.span, e.c12].join(" "), children: [
      "Collecting Societies",
      " "
    ] }),
    /* @__PURE__ */ a("span", { className: [e.span, e.c2].join(" "), children: "- Due to legal obligations, we are obliged in many countries  around the world to transmit pseudonymized or anonymized usage data to collecting  societies." })
  ] }),
  /* @__PURE__ */ n("p", { className: [e.p, e.c39].join(" "), children: [
    /* @__PURE__ */ a("span", { className: [e.span, e.c2].join(" "), children: "• " }),
    /* @__PURE__ */ a("span", { className: [e.span, e.c12].join(" "), children: "Advertising " }),
    /* @__PURE__ */ a("span", { className: [e.span, e.c2].join(" "), children: "– We share the personal data collected about you, in hashed, aggregated,  or de-identified forms with advertisers and advertising service providers and business  partners in order to serve ads based on interests of respective segments and to  measure the reach and effectiveness of those ads, including whether a user took an  action(e.g. purchased a product). We may also share cookie data and device identifiers  with service providers for data matching purposes, in order to improve ad targeting.  Please be aware that where such personal data of yours is identifiable, we will only use  it with your consent." })
  ] }),
  /* @__PURE__ */ n("p", { className: [e.p, e.c102, e.c161].join(" "), children: [
    /* @__PURE__ */ a("span", { className: [e.span, e.c2].join(" "), children: "• " }),
    /* @__PURE__ */ a("span", { className: [e.span, e.c12].join(" "), children: "Social Media " }),
    /* @__PURE__ */ a("span", { className: [e.span, e.c2].join(" "), children: "– We may share your email address (in hashed form, so that it does not  identify you) with Facebook in order to target you with ads for Ashendo products on  Facebook and on third party websites and this is only permissible with your explicit  consent. We also allow Facebook and other social media platforms to collect personal  data through cookies and similar technologies like pixels in order to serve ads for  Ashendo on those third party websites and apps and drive users to our Platform. In  order to measure the effectiveness of and optimize these marketing campaigns, these  technologies track activity taken across devices after a user sees a Ashendo ad, in  order to determine performance metrics like sign ups, visits to the Platform, and  purchases. Any questions regarding how these social media platform service providers  process your personal data should be directed to them." })
  ] }),
  /* @__PURE__ */ n("p", { className: [e.p, e.c89].join(" "), children: [
    /* @__PURE__ */ a("span", { className: [e.span, e.c2].join(" "), children: "• " }),
    /* @__PURE__ */ n("span", { className: [e.span, e.c12].join(" "), children: [
      "Aggregated Data",
      " "
    ] }),
    /* @__PURE__ */ a("span", { className: [e.span, e.c2].join(" "), children: "– We may also share aggregated and anonymized personal data  (personal data about our users that we render in such a way that it no longer identifies  or references an individual user) and other pseudonymized personal data for regulatory  compliance, industry and market analysis, demographic profiling, marketing and  advertising, and other business purposes." })
  ] }),
  /* @__PURE__ */ n("p", { className: [e.p, e.c70].join(" "), children: [
    /* @__PURE__ */ a("span", { className: [e.span, e.c2].join(" "), children: "• " }),
    /* @__PURE__ */ n("span", { className: [e.span, e.c12].join(" "), children: [
      "API Integrations",
      " "
    ] }),
    /* @__PURE__ */ a("span", { className: [e.span, e.c2].join(" "), children: "– Ashendo has an open application-programming interface (API),  which enables application developers to integrate elements of the Platform into other  apps. Some of these developers may be located outside of South Africa but will always,  if user data is concerned, sign a Data Processing Addendum and accordingly (where  applicable) South African Standard Contract Clauses. Any personal data you choose to  make public on the Platform, including your public profile information and any public  Tracks, may be accessible to these developers, subject to our API Terms of Use.  Please bear this in mind when deciding what information to publish on your profile. For  information on how to limit the information that is available through the API, please see  the Your Choices and Controls section below." })
  ] }),
  /* @__PURE__ */ n("p", { className: [e.p, e.c86].join(" "), children: [
    /* @__PURE__ */ a("span", { className: [e.span, e.c2].join(" "), children: "• " }),
    /* @__PURE__ */ n("span", { className: [e.span, e.c12].join(" "), children: [
      "Third Party Applications",
      " "
    ] }),
    /* @__PURE__ */ a("span", { className: [e.span, e.c2].join(" "), children: "– If you choose to connect your Ashendo account to other  apps or social networks such as Facebook, you may be sharing certain personal data  with these apps or networks. Materials that you share with social media networks will  appear on your timeline (or similar functions) as well as in news feeds that may be  viewed by the public or by certain followers, subject to the terms and conditions of such  social media networks. In the case of connected apps, you will need to provide the app  developer with full access to your Ashendo account in order to upload and download  Tracks, or comment on, favorite, or repost Tracks from within the app. This means  sharing your public information, plus access to your private Tracks. Ashendo is not  responsible for these other apps or networks, so please make sure you only connect  your account with apps or services that you trust. For information on how to control the  personal data that you share, and how to disconnect your account from these apps,  please see the Your Choices and Controls section below. If you do not want this" })
  ] }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c115].join(" "), children: /* @__PURE__ */ a("span", { className: [e.span, e.c2].join(" "), children: "information shared with such social media networks or other Third Party Applications,  please change your Ashendo Settings on our Platform or in those networks." }) }),
  /* @__PURE__ */ n("p", { className: [e.p, e.c102, e.c108].join(" "), children: [
    /* @__PURE__ */ a("span", { className: [e.span, e.c2].join(" "), children: "• " }),
    /* @__PURE__ */ n("span", { className: [e.span, e.c12].join(" "), children: [
      "Use of Your Name and Other User Identifiers in Sharing Links",
      " "
    ] }),
    /* @__PURE__ */ a("span", { className: [e.span, e.c2].join(" "), children: "- When sharing  personal data from our platform on other platforms, especially social media platforms  like Facebook or Instagram, we may use your pseudonymized data. If a user clicks on  your shared link and is lead to our platform, the user will be presented with a banner  telling the user that you (in this context, your profile name will be displayed) are using  Ashendo and/or that you shared this link, and the user will then be asked if they want to  follow you. Such use by us is considered a legitimate interest as it enriches our user  experience and the way our users connect with each other. As we assume that you  share links responsibly with people whom you want to interact with, we also assume  that your interest in the safekeeping of your personal data is not affected, especially  since we only use pseudonymized data within the link itself. Please be aware that your  shared link may be shared further by other parties." })
  ] }),
  /* @__PURE__ */ n("p", { className: [e.p, e.c78].join(" "), children: [
    /* @__PURE__ */ a("span", { className: [e.span, e.c2].join(" "), children: "• " }),
    /* @__PURE__ */ n("span", { className: [e.span, e.c12].join(" "), children: [
      "Compliance with Laws",
      " "
    ] }),
    /* @__PURE__ */ a("span", { className: [e.span, e.c2].join(" "), children: "– We may disclose your personal data to courts, law  enforcement agencies, and governmental authorities (i) to comply with our legal  obligations, (ii) to comply with legal process and to respond to claims asserted against  Ashendo, (iii) to respond to verified requests relating to a criminal investigation or  alleged or suspected illegal activity or any other activity that may expose us, you, or any  other of our users to legal liability, (iv) to enforce and administer our Terms of Use and  other agreements with users, or (v) to protect the rights, property or personal safety of  Ashendo, its employees, and members of the public." })
  ] }),
  /* @__PURE__ */ n("p", { className: [e.p, e.c148].join(" "), children: [
    /* @__PURE__ */ a("span", { className: [e.span, e.c2].join(" "), children: "• " }),
    /* @__PURE__ */ n("span", { className: [e.span, e.c12].join(" "), children: [
      "Protecting our Rights",
      " "
    ] }),
    /* @__PURE__ */ a("span", { className: [e.span, e.c2].join(" "), children: "– We may disclose your personal data if we feel it is necessary  in order to protect or defend our legitimate rights and interests, or those of our users,  employees, directors, officers, or shareholders, and/or to ensure the safety and security  of the Platform and/or the Ashendo community." })
  ] }),
  /* @__PURE__ */ n("p", { className: [e.p, e.c162].join(" "), children: [
    /* @__PURE__ */ a("span", { className: [e.span, e.c2].join(" "), children: "• " }),
    /* @__PURE__ */ n("span", { className: [e.span, e.c12].join(" "), children: [
      "Change of Control",
      " "
    ] }),
    /* @__PURE__ */ a("span", { className: [e.span, e.c2].join(" "), children: "– We may also share your personal data as part of a sale, merger  or change in control of Ashendo, or in preparation for any of these events. Any other  entity that buys us or part of our business will have the right to continue to use your  personal data, but only in the manner set out in this Privacy Policy." })
  ] }),
  /* @__PURE__ */ n("p", { className: [e.p, e.c100].join(" "), children: [
    /* @__PURE__ */ a("span", { className: [e.span, e.c2].join(" "), children: "• " }),
    /* @__PURE__ */ n("span", { className: [e.span, e.c12].join(" "), children: [
      "Targeted Communications & Advertising",
      " "
    ] }),
    /* @__PURE__ */ a("span", { className: [e.span, e.c2].join(" "), children: "- Any such consent will be gained through  our cookie consent tool or via your settings in your account." })
  ] }),
  /* @__PURE__ */ n("p", { className: [e.p, e.c102, e.c117].join(" "), children: [
    /* @__PURE__ */ a("span", { className: [e.span, e.c2].join(" "), children: "• " }),
    /* @__PURE__ */ n("span", { className: [e.span, e.c12].join(" "), children: [
      "Ashendo Direct",
      " "
    ] }),
    /* @__PURE__ */ a("span", { className: [e.span, e.c2].join(" "), children: "- In the event you choose to grant other users access to your Ashendo  Direct account, or in the event you set up our Split Pay feature, some personal data,  such as your name and email address, will be available to those users. Additionally, if  you use SC Planner, your SC Planner profile will be visible to other users in the" })
  ] }),
  /* @__PURE__ */ n("p", { className: [e.p, e.c67].join(" "), children: [
    /* @__PURE__ */ a("span", { className: [e.span, e.c2].join(" "), children: "“Leaderboard” section of the App, unless you elect to make your profile invisible in your  settings" }),
    /* @__PURE__ */ a("span", { className: [e.span, e.c82].join(" "), children: ". " })
  ] }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c25].join(" "), children: /* @__PURE__ */ n("span", { className: [e.span, e.c15].join(" "), children: [
    "Cookies and Similar Technology",
    " "
  ] }) }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c114].join(" "), children: /* @__PURE__ */ a("span", { className: [e.span, e.c2].join(" "), children: "As further described in our Cookie Policy we use cookies and similar technologies (e.g.  pixels, local storage, and device identifiers) to recognize you and/or your device(s) on  and off the Platform, and across devices. To the extent allowed by your settings or your  device, we also allow third parties to use cookies as described in our Cookie Policy in  order to track user behaviour on and off the Platform in order to show you ads based on  your interests and preferences. You can control cookies through your browser and other  tools as described in the Cookie Policy." }) }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c150].join(" "), children: /* @__PURE__ */ a("span", { className: [e.span, e.c2].join(" "), children: "Please be aware any use of cookies is subject to your consent, except for technical  storage or access for transmitting communication, or as strictly necessary to provide a  service which was explicitly requested by a user." }) }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c165].join(" "), children: /* @__PURE__ */ a("span", { className: [e.span, e.c2].join(" "), children: "You will find information regarding the use of cookies from specific third parties when  making the choice of cookies you want to allow within our cookie consent tool. Further  information is provided in your account settings under “advertising”, where you may as  well toggle your choices after your first decision." }) }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c36].join(" "), children: /* @__PURE__ */ n("span", { className: [e.span, e.c15].join(" "), children: [
    "Information Security",
    " "
  ] }) }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c73].join(" "), children: /* @__PURE__ */ a("span", { className: [e.span, e.c2].join(" "), children: "Ashendo maintains appropriate technical, administrative, and physical safeguards that  are designed to prevent unauthorized access, use or disclosure of personal data we  collect or store and to ensure a level of security appropriate to the risk of varying  likelihood and severity for the rights and freedoms of natural persons that may be  involved with our processing operations. We regularly monitor our systems for possible  vulnerabilities and attacks. However, it is not possible to guarantee the security of  personal data transmitted over the Internet. You use the Platform and provide us with  personal data at your own discretion and risk." }) }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c36].join(" "), children: /* @__PURE__ */ n("span", { className: [e.span, e.c15].join(" "), children: [
    "International Data Transfers",
    " "
  ] }) }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c152].join(" "), children: /* @__PURE__ */ a("span", { className: [e.span, e.c2].join(" "), children: "Ashendo operates globally and may share your personal data internally within the  Ashendo Group and third parties for the purposes described in this Privacy Policy.  Personal data collected within South African may, for example, be transferred to  countries outside of South Africa for the purposes as described in this Privacy Policy.  We utilize appropriate to ensure the lawful transfer of your personal data outside of  South Africa. Alternatively, you can request these documents from us using the contact  details given below." }) }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c58].join(" "), children: /* @__PURE__ */ a("span", { className: [e.span, e.c15].join(" "), children: "Children " }) }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c141].join(" "), children: /* @__PURE__ */ a("span", { className: [e.span, e.c2].join(" "), children: "Ashendo is not intended for use by children. Anyone under the age of 16 in South Africa  and UK, or 13 in the United States and the rest of the world, is not permitted to use the  Platform and must not attempt to register an account or submit any personal data to us.  We do not knowingly collect any personal data from any person who is under the age of  16 or 13, as the case may be, or allow them to register an account. If it comes to our  attention that we have collected personal data from a person under the age of 16 or 13,  as applicable, we will delete this personal data as quickly as possible.  " }) }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c80].join(" "), children: /* @__PURE__ */ n("span", { className: [e.span, e.c15].join(" "), children: [
    "Our Activity On Social Networks",
    " "
  ] }) }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c34].join(" "), children: /* @__PURE__ */ a("span", { className: [e.span, e.c2].join(" "), children: "To allow us to communicate with you on third party social networks and inform you  about our services, we run pages on third party social networks. If you visit our pages  on any of these third party social media pages, we and the provider of the third party  social media network are joint controllers regarding the processing operations thereby  triggered, which concern personal data. We are not the original provider of these pages,  but only use them within the scope of the options offered to us by the respective  providers." }) }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c157].join(" "), children: /* @__PURE__ */ a("span", { className: [e.span, e.c2].join(" "), children: "For our South African based users, we would like to point out that your personal data  may also be processed outside of South Africa. Use of these networks may therefore  involve data protection risks for you since the protection of your rights may be difficult,  e.g. your right to information, erasure, objection, etc. Processing on social networks  frequently takes place directly for advertising purposes or for the analysis of user  behaviour by network providers, and we have no control over this. If the provider  creates user profiles, cookies are often used or user behaviour may be assigned directly  to your own member profile on the respective social network (if you are logged in)." }) }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c22].join(" "), children: /* @__PURE__ */ a("span", { className: [e.span, e.c2].join(" "), children: "The processing operations of personal data described are carried out on the basis of  our legitimate interests and the legitimate interests of the respective provider in order to  communicate with you in a timely manner or to inform you about our services. If you get  asked to grant your consent to the respective providers to process your personal data  as a user, your consent is the legal basis for this processing." }) }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c62].join(" "), children: /* @__PURE__ */ a("span", { className: [e.span, e.c2].join(" "), children: "Since we have no access to these providers’ databases, we would like to point out that  you would be best situated to exercise your rights (e.g. to information, rectification,  erasure, etc.) directly with the respective provider. More information on the processing  of your personal data on social networks and your options for exercising your right to  object or your right of revocation (opt out) is listed below for each of the social network  providers we use:" }) }),
  /* @__PURE__ */ n("p", { className: [e.p, e.c31].join(" "), children: [
    /* @__PURE__ */ a("span", { className: [e.span, e.c2].join(" "), children: "• " }),
    /* @__PURE__ */ a("span", { className: [e.span, e.c12].join(" "), children: "Facebook " }),
    /* @__PURE__ */ a("span", { className: [e.span, e.c2].join(" "), children: "- Meta Platforms Ireland Ltd, 4 Grand Canal Square, Grand Canal  Harbour, Dublin 2, Ireland" })
  ] }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c52].join(" "), children: /* @__PURE__ */ n("span", { className: [e.span, e.c2].join(" "), children: [
    "• Privacy Notice (Data Policy)",
    " "
  ] }) }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c1].join(" "), children: /* @__PURE__ */ n("span", { className: [e.span, e.c2].join(" "), children: [
    "• Opt-Out and Advertising Settings",
    " "
  ] }) }),
  /* @__PURE__ */ n("p", { className: [e.p, e.c53].join(" "), children: [
    /* @__PURE__ */ a("span", { className: [e.span, e.c2].join(" "), children: "• " }),
    /* @__PURE__ */ a("span", { className: [e.span, e.c12].join(" "), children: "Instagram " }),
    /* @__PURE__ */ a("span", { className: [e.span, e.c2].join(" "), children: "- Meta Platforms Ireland Ltd, 4 Grand Canal Square, Grand Canal  Harbour, Dublin 2, Ireland" })
  ] }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c52].join(" "), children: /* @__PURE__ */ n("span", { className: [e.span, e.c2].join(" "), children: [
    "• Privacy Notice (Data Policy)",
    " "
  ] }) }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c1].join(" "), children: /* @__PURE__ */ n("span", { className: [e.span, e.c2].join(" "), children: [
    "• Opt-Out and Advertising Settings",
    " "
  ] }) }),
  /* @__PURE__ */ n("p", { className: [e.p, e.c153].join(" "), children: [
    /* @__PURE__ */ a("span", { className: [e.span, e.c2].join(" "), children: "• " }),
    /* @__PURE__ */ a("span", { className: [e.span, e.c12].join(" "), children: "Twitter " }),
    /* @__PURE__ */ a("span", { className: [e.span, e.c2].join(" "), children: "- Twitter International Company, One Cumberland Place, Fenian Street,  Dublin 2, D02 AX07, Ireland" })
  ] }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c52].join(" "), children: /* @__PURE__ */ n("span", { className: [e.span, e.c2].join(" "), children: [
    "• Privacy Notice",
    " "
  ] }) }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c1].join(" "), children: /* @__PURE__ */ n("span", { className: [e.span, e.c2].join(" "), children: [
    "• Information About Your Data",
    " "
  ] }) }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c1].join(" "), children: /* @__PURE__ */ n("span", { className: [e.span, e.c2].join(" "), children: [
    "• Opt-Out and Advertising Settings",
    " "
  ] }) }),
  /* @__PURE__ */ n("p", { className: [e.p, e.c47].join(" "), children: [
    /* @__PURE__ */ a("span", { className: [e.span, e.c2].join(" "), children: "• " }),
    /* @__PURE__ */ a("span", { className: [e.span, e.c12].join(" "), children: "LinkedIn " }),
    /* @__PURE__ */ a("span", { className: [e.span, e.c2].join(" "), children: "- LinkedIn Ireland Unlimited Company, Wilton Place, Dublin 2, Ireland • Privacy Notice" })
  ] }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c23].join(" "), children: /* @__PURE__ */ n("span", { className: [e.span, e.c2].join(" "), children: [
    "• Opt-Out and Advertising Settings",
    " "
  ] }) }),
  /* @__PURE__ */ n("p", { className: [e.p, e.c29].join(" "), children: [
    /* @__PURE__ */ a("span", { className: [e.span, e.c2].join(" "), children: "• " }),
    /* @__PURE__ */ a("span", { className: [e.span, e.c12].join(" "), children: "TikTok " }),
    /* @__PURE__ */ a("span", { className: [e.span, e.c2].join(" "), children: "- TikTok Technology Limited, 10 Earlsfort Terrace, Dublin, D02 T380,  Ireland. For Great Britain: TikTok Information Technologies UK Limited, WeWork, 125  Kingsway, London, WC2B 6NH, England" })
  ] }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c45].join(" "), children: /* @__PURE__ */ n("span", { className: [e.span, e.c2].join(" "), children: [
    "• Privacy Notice",
    " "
  ] }) }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c1].join(" "), children: /* @__PURE__ */ n("span", { className: [e.span, e.c2].join(" "), children: [
    "• Opt-Out and Advertising Settings",
    " "
  ] }) }),
  /* @__PURE__ */ n("p", { className: [e.p, e.c57].join(" "), children: [
    /* @__PURE__ */ a("span", { className: [e.span, e.c2].join(" "), children: "• " }),
    /* @__PURE__ */ a("span", { className: [e.span, e.c12].join(" "), children: "Snapchat " }),
    /* @__PURE__ */ a("span", { className: [e.span, e.c2].join(" "), children: "- Snap Inc., 2772 Donald Douglas Loop North Santa Monica, CA  90405, USA. For Europe: Snap Group Limited, 77 Shaftesbury Avenue, London, W1D  5DU, United Kingdom" })
  ] }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c45].join(" "), children: /* @__PURE__ */ n("span", { className: [e.span, e.c2].join(" "), children: [
    "• Privacy Notice",
    " "
  ] }) }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c1].join(" "), children: /* @__PURE__ */ n("span", { className: [e.span, e.c2].join(" "), children: [
    "• Opt-Out and Advertising Settings",
    " "
  ] }) }),
  /* @__PURE__ */ n("p", { className: [e.p, e.c75].join(" "), children: [
    /* @__PURE__ */ a("span", { className: [e.span, e.c2].join(" "), children: "• " }),
    /* @__PURE__ */ a("span", { className: [e.span, e.c12].join(" "), children: "Twitch " }),
    /* @__PURE__ */ a("span", { className: [e.span, e.c2].join(" "), children: "- Twitch Interactive, Inc., 225 Bush Street, 6th Floor, San Francisco, CA  94104, USA" })
  ] }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c3].join(" "), children: /* @__PURE__ */ n("span", { className: [e.span, e.c2].join(" "), children: [
    "• Privacy Notice",
    " "
  ] }) }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c1].join(" "), children: /* @__PURE__ */ n("span", { className: [e.span, e.c2].join(" "), children: [
    "• Security",
    " "
  ] }) }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c33].join(" "), children: /* @__PURE__ */ n("span", { className: [e.span, e.c15].join(" "), children: [
    "Your Choices and Controls",
    " "
  ] }) }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c123].join(" "), children: /* @__PURE__ */ a("span", { className: [e.span, e.c2].join(" "), children: "We do our best to give you as much choice as possible regarding the amount of  personal data you provide to us, and the control you have over that personal data." }) }),
  /* @__PURE__ */ n("p", { className: [e.p, e.c76].join(" "), children: [
    /* @__PURE__ */ a("span", { className: [e.span, e.c2].join(" "), children: "• " }),
    /* @__PURE__ */ n("span", { className: [e.span, e.c12].join(" "), children: [
      "Managing Ashendo Settings",
      " "
    ] }),
    /* @__PURE__ */ a("span", { className: [e.span, e.c2].join(" "), children: "- If you register an account, you may manage the content  and personal data you share when you use Ashendo through your account Settings,  including for the features explained below. You are solely responsible for keeping your  Settings up-to-date." })
  ] }),
  /* @__PURE__ */ n("p", { className: [e.p, e.c91].join(" "), children: [
    /* @__PURE__ */ a("span", { className: [e.span, e.c2].join(" "), children: "• " }),
    /* @__PURE__ */ a("span", { className: [e.span, e.c12].join(" "), children: "Email & Device Notificatio" }),
    /* @__PURE__ */ a("span", { className: [e.span, e.c2].join(" "), children: "ns – You can adjust your Settings in the “Notification” tab to  disable email and device notifications (other than important service updates and  essential notifications about the Platform or your account). All commercial emails and  newsletters also allow you to unsubscribe at any time." })
  ] }),
  /* @__PURE__ */ n("p", { className: [e.p, e.c102, e.c154].join(" "), children: [
    /* @__PURE__ */ a("span", { className: [e.span, e.c2].join(" "), children: "• " }),
    /* @__PURE__ */ a("span", { className: [e.span, e.c12].join(" "), children: "Analytics " }),
    /* @__PURE__ */ a("span", { className: [e.span, e.c2].join(" "), children: "– To control whether we collect analytics and usage information, including  through cookies and similar technologies, you can adjust your Settings in the “Privacy”  tab (“Cookie Manager”)." })
  ] }),
  /* @__PURE__ */ n("p", { className: [e.p, e.c95].join(" "), children: [
    /* @__PURE__ */ a("span", { className: [e.span, e.c2].join(" "), children: "• " }),
    /* @__PURE__ */ a("span", { className: [e.span, e.c12].join(" "), children: "Marketing " }),
    /* @__PURE__ */ a("span", { className: [e.span, e.c2].join(" "), children: "– If you do not want to receive personalized ads, offers or other marketing  messages for Ashendo products or services, you can adjust your Settings in the  “Privacy” tab (choose Communications in Your “Cookie Manager”)." })
  ] }),
  /* @__PURE__ */ n("p", { className: [e.p, e.c102, e.c124].join(" "), children: [
    /* @__PURE__ */ a("span", { className: [e.span, e.c2].join(" "), children: "• " }),
    /* @__PURE__ */ a("span", { className: [e.span, e.c12].join(" "), children: "Advertising " }),
    /* @__PURE__ */ a("span", { className: [e.span, e.c2].join(" "), children: "– If you do not want Ashendo to deliver “interest based” or personalized  ads for third party products, you can adjust your Settings in the “Advertising” tab. Please  note, however, that even if you opt out of personalized ads, you may still see ads, but  they will likely not be as relevant or useful to you." })
  ] }),
  /* @__PURE__ */ n("p", { className: [e.p, e.c38].join(" "), children: [
    /* @__PURE__ */ a("span", { className: [e.span, e.c2].join(" "), children: "• " }),
    /* @__PURE__ */ n("span", { className: [e.span, e.c12].join(" "), children: [
      "Material Sharing",
      " "
    ] }),
    /* @__PURE__ */ a("span", { className: [e.span, e.c2].join(" "), children: "– It’s not possible to make your account entirely private. However,  you do have the option to make all of your Tracks, playlists and other uploads private.  This means that no one will be able to access and listen to your Tracks without your  explicit permission. You can learn more about these settings here." })
  ] }),
  /* @__PURE__ */ n("p", { className: [e.p, e.c4].join(" "), children: [
    /* @__PURE__ */ a("span", { className: [e.span, e.c2].join(" "), children: "• " }),
    /* @__PURE__ */ n("span", { className: [e.span, e.c12].join(" "), children: [
      "Third Party Apps",
      " "
    ] }),
    /* @__PURE__ */ a("span", { className: [e.span, e.c2].join(" "), children: "– If you have chosen to connect your account to a third-party  application, like Facebook or Google, you can disable permission for the app by  adjusting your Settings in the “Account” tab." })
  ] }),
  /* @__PURE__ */ n("p", { className: [e.p, e.c56].join(" "), children: [
    /* @__PURE__ */ a("span", { className: [e.span, e.c2].join(" "), children: "• " }),
    /* @__PURE__ */ n("span", { className: [e.span, e.c12].join(" "), children: [
      "Third Party Developers",
      " "
    ] }),
    /* @__PURE__ */ a("span", { className: [e.span, e.c2].join(" "), children: "– Ashendo has an open API, which allows third party  developers to build some really cool apps as an extension of the Platform. If you would  prefer that your Tracks are not made available to third party app developers, you can" })
  ] }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c79].join(" "), children: /* @__PURE__ */ a("span", { className: [e.span, e.c2].join(" "), children: "disable API access within the sound page for each of the Tracks that you upload. Click  on the pencil icon below the waveform player, and navigate to the “Permissions” tab  and uncheck the “enable app playback” box. Please note that your public profile  information will still be accessible, but this does not include anything that is not publicly  available on the Platform." }) }),
  /* @__PURE__ */ n("p", { className: [e.p, e.c0].join(" "), children: [
    /* @__PURE__ */ a("span", { className: [e.span, e.c2].join(" "), children: "• " }),
    /* @__PURE__ */ n("span", { className: [e.span, e.c12].join(" "), children: [
      "Deleting Your Ashendo Account",
      " "
    ] }),
    /* @__PURE__ */ a("span", { className: [e.span, e.c2].join(" "), children: "– If you have an account and would like to delete it,  you may do so by adjusting your Settings in the account tab. If you delete your account,  all personal data associated with your account (except for backup copies), including the  Tracks that you have uploaded and the usage data associated with those Tracks, will be  deleted and may not be recoverable. We therefore advise you to copy or backup all  Materials uploaded to your account before deletion. Even if you delete your account, it  is possible that your personal data may still show up in some internet search results for  a short while afterwards, if the search engine maintains a temporary cache of web  pages. Search engines’ caching processes are outside of Ashendo’s control and  therefore we cannot be responsible for any personal data that remains cached by  search engines after that personal data has been removed from the Platform. Please  note that deleting any Ashendo Apps, or any third party apps to which your account is  connected, will not delete your account. Similarly, if you delete a third party app that is  connected to your account over our API, this will not necessarily delete all personal data  about your activity on the Platform from within that third party app. You will need to refer  to the app provider’s terms of use and privacy policy to find out how to delete personal  data about your activity on the Platform from that third party app." })
  ] }),
  /* @__PURE__ */ n("p", { className: [e.p, e.c84].join(" "), children: [
    /* @__PURE__ */ a("span", { className: [e.span, e.c2].join(" "), children: "• " }),
    /* @__PURE__ */ n("span", { className: [e.span, e.c12].join(" "), children: [
      "Messages From Other Users",
      " "
    ] }),
    /* @__PURE__ */ a("span", { className: [e.span, e.c2].join(" "), children: "- If you do not want to receive messages from users you  don’t follow, you can adjust your settings in the “Privacy” tab. If you want to block users,  you will have to do so on their respective profiles. Any blocked user will be shown in  your settings in the “Privacy” tab." })
  ] }),
  /* @__PURE__ */ n("p", { className: [e.p, e.c102, e.c139].join(" "), children: [
    /* @__PURE__ */ a("span", { className: [e.span, e.c2].join(" "), children: "• " }),
    /* @__PURE__ */ n("span", { className: [e.span, e.c12].join(" "), children: [
      "Managing Device Settings",
      " "
    ] }),
    /* @__PURE__ */ a("span", { className: [e.span, e.c2].join(" "), children: "- On your mobile device, disable the “Allow Apps to  Request to Track” setting in your iOS phone’s settings, or enable the setting to “Opt out  of Ads Personalization” in your Android phone’s settings. To opt-out of location tracking  when using our Apps, you can use the settings of your device. You can disable mobile  analytics and bug reporting through these same settings as well." })
  ] }),
  /* @__PURE__ */ n("p", { className: [e.p, e.c102, e.c105].join(" "), children: [
    /* @__PURE__ */ a("span", { className: [e.span, e.c2].join(" "), children: "• " }),
    /* @__PURE__ */ n("span", { className: [e.span, e.c12].join(" "), children: [
      "Managing Browser Settings",
      " "
    ] }),
    /* @__PURE__ */ a("span", { className: [e.span, e.c2].join(" "), children: "- You may also control cookies in your browser settings.  You can modify your settings in most web browsers to accept or deny cookies or to  request your permission each time a site attempts to set a cookie. You can also  manually delete previously stored cookies at any time. Please note that if you choose to  block cookies, doing so may impair the Platform or prevent certain elements of it from  functioning." })
  ] }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c61].join(" "), children: /* @__PURE__ */ n("span", { className: [e.span, e.c15].join(" "), children: [
    "Exercising Your RSA Privacy Rights",
    " "
  ] }) }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c21].join(" "), children: /* @__PURE__ */ a("span", { className: [e.span, e.c2].join(" "), children: "If you are a user residing in the South Africa, you may exercise any of the rights  described in this section through the Help Center Please note that we may ask you to  verify your identity before taking further action on your request." }) }),
  /* @__PURE__ */ n("p", { className: [e.p, e.c13].join(" "), children: [
    /* @__PURE__ */ a("span", { className: [e.span, e.c2].join(" "), children: "• " }),
    /* @__PURE__ */ n("span", { className: [e.span, e.c12].join(" "), children: [
      "Data Access and Portability",
      " "
    ] }),
    /* @__PURE__ */ a("span", { className: [e.span, e.c2].join(" "), children: "- You may be entitled to request copies of your personal  data held by us. While a lot of the personal data you provide to us can be accessed in  your account settings, you may also be entitled to request copies of personal data you  have provided to us in machine-readable format." })
  ] }),
  /* @__PURE__ */ n("p", { className: [e.p, e.c37].join(" "), children: [
    /* @__PURE__ */ a("span", { className: [e.span, e.c2].join(" "), children: "• " }),
    /* @__PURE__ */ n("span", { className: [e.span, e.c12].join(" "), children: [
      "Change or Correct Data",
      " "
    ] }),
    /* @__PURE__ */ a("span", { className: [e.span, e.c2].join(" "), children: "- Where you cannot update personal data yourself through an  account, you have the right to ask us to correct, change, update or rectify your personal  data." })
  ] }),
  /* @__PURE__ */ n("p", { className: [e.p, e.c102, e.c116].join(" "), children: [
    /* @__PURE__ */ a("span", { className: [e.span, e.c2].join(" "), children: "• " }),
    /* @__PURE__ */ n("span", { className: [e.span, e.c12].join(" "), children: [
      "Data Retention and Deletion",
      " "
    ] }),
    /* @__PURE__ */ a("span", { className: [e.span, e.c2].join(" "), children: "- We generally retain personal data for as long as is  necessary to provide services to you under your account, i.e. as long as your contract is  ongoing and for the sake of legal obligations, for 3 years following the end of the year in  which your contract was canceled - or, for as long as is necessary to provide the  Platform to you as an unregistered user. You have the right to ask us to delete all or  some of the personal data we hold about you. If you have an account, you can also  delete your account through the Settings at any time as described below. We may need  to retain some of your personal data even after you have closed your account if  reasonably necessary to comply with our legal obligations (e.g. under applicable tax or  commercial law or to prevent fraud and abuse and maintain and enhance security).  Afterwards, we delete the personal data immediately, unless we need the personal data  until the expiry of the statutory period of limitation for the purpose of providing evidence  for civil law claims or because of statutory storage obligations (e.g. for accounting  reasons)." })
  ] }),
  /* @__PURE__ */ n("p", { className: [e.p, e.c102, e.c129].join(" "), children: [
    /* @__PURE__ */ a("span", { className: [e.span, e.c2].join(" "), children: "• " }),
    /* @__PURE__ */ n("span", { className: [e.span, e.c12].join(" "), children: [
      "Objection to Processing",
      " "
    ] }),
    /* @__PURE__ */ a("span", { className: [e.span, e.c2].join(" "), children: "- You have the right to object to processing your personal  data on grounds relating to your particular situation at any time (in particular, where we  don’t have to process the personal data to meet a contractual or other legal  requirement, or where we are using the personal data on the basis of our legitimate  interests). If you object to such processing, Ashendo will no longer process your  personal data for these purposes unless we can demonstrate compelling legitimate  grounds for such processing or such processing is required for the establishment,  exercise or defense of legal claims or obligations. Where your personal data is  processed for direct marketing purposes, you have the right to object to such  processing of your personal data at any time and ask Ashendo to cease processing  your data for these direct marketing purposes. However, please be aware that any  objection to processing will not necessarily have an impact on the personal data" })
  ] }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c96].join(" "), children: /* @__PURE__ */ a("span", { className: [e.span, e.c2].join(" "), children: "processing before such objection was made, thus such processing will generally be  deemed as permissible and will be subject to the usual retention and deletion periods." }) }),
  /* @__PURE__ */ n("p", { className: [e.p, e.c94].join(" "), children: [
    /* @__PURE__ */ a("span", { className: [e.span, e.c2].join(" "), children: "• " }),
    /* @__PURE__ */ n("span", { className: [e.span, e.c12].join(" "), children: [
      "Restriction of Processing",
      " "
    ] }),
    /* @__PURE__ */ a("span", { className: [e.span, e.c2].join(" "), children: "- You have the right to restrict the processing of your  personal data where one of the following applies: your personal data is not accurate  anymore; the processing is unlawful and instead of erasing the personal data you  request the restriction of use; the personal data is no longer needed by us but required  by you for the establishment, exercise or defense of legal claims; you have objected to  the use and the decision on the legitimate grounds for objection is pending." })
  ] }),
  /* @__PURE__ */ n("p", { className: [e.p, e.c89].join(" "), children: [
    /* @__PURE__ */ a("span", { className: [e.span, e.c2].join(" "), children: "• " }),
    /* @__PURE__ */ n("span", { className: [e.span, e.c12].join(" "), children: [
      "Withdrawing Consent",
      " "
    ] }),
    /* @__PURE__ */ a("span", { className: [e.span, e.c2].join(" "), children: "- Where you provide consent to the processing of your personal  data by Ashendo, you may withdraw your consent at any time by changing your account  Settings or by sending a communication to Ashendo specifying the specific consent you  are withdrawing. Please note that the withdrawal of your consent does not affect the  lawfulness of any processing activities based on such consent before its withdrawal." })
  ] }),
  /* @__PURE__ */ n("p", { className: [e.p, e.c7].join(" "), children: [
    /* @__PURE__ */ a("span", { className: [e.span, e.c2].join(" "), children: "• " }),
    /* @__PURE__ */ n("span", { className: [e.span, e.c12].join(" "), children: [
      "Lodging Complaints",
      " "
    ] }),
    /* @__PURE__ */ a("span", { className: [e.span, e.c2].join(" "), children: "- You have the right to lodge complaints about the data  processing activities carried out by Ashendo before a competent data protection  authority.  " })
  ] }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c11].join(" "), children: /* @__PURE__ */ n("span", { className: [e.span, e.c15].join(" "), children: [
    "Contact Information",
    " "
  ] }) }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c135].join(" "), children: /* @__PURE__ */ a("span", { className: [e.span, e.c2].join(" "), children: "If you have questions or complaints about this Privacy Policy or our practices, please  contact our Data Protection Officer by email at contact@Ashendo.africa or write to our  Data Protection Officer at Ashendo Group. Wit-Elshout Ave, Heuweloord, Centurion,  Pretoria, Gauteng, 0157." }) }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c11].join(" "), children: /* @__PURE__ */ n("span", { className: [e.span, e.c15].join(" "), children: [
    "Changes to this Privacy Policy",
    " "
  ] }) }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c60].join(" "), children: /* @__PURE__ */ a("span", { className: [e.span, e.c2].join(" "), children: "We may update this Privacy Policy from time to time at our sole discretion. If we make  changes to this Privacy Policy, we will post the revised Privacy Policy on the Platform  and update the “Last Amended” date below. Please be sure to periodically check this  page to ensure that you are aware of any changes to this Privacy Policy. Any material  changes to this Privacy Policy will be communicated to registered users by a notification  to their account and/or by posting a notice of the change on the Website. Your  continued access to or use of the Platform after the effective date of such changes will  be subject to the revised Privacy Policy." }) }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c111].join(" "), children: /* @__PURE__ */ a("span", { className: [e.span, e.c2].join(" "), children: "Last Amended: December 12, 2022" }) })
] }), Ys = (v) => /* @__PURE__ */ n("section", { className: e.main, children: [
  /* @__PURE__ */ a("p", { className: [e.p, e.c182].join(" "), children: /* @__PURE__ */ n("span", { className: [e.span, e.c13].join(" "), children: [
    "Ashendo Terms of Use",
    " "
  ] }) }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c12].join(" "), children: /* @__PURE__ */ n("span", { className: [e.span, e.c0].join(" "), children: [
    'Welcome to Ashendo®, a service provided by Ashendo Group ("Ashendo", "we", "our",  or "us").',
    " "
  ] }) }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c146].join(" "), children: /* @__PURE__ */ n("span", { className: [e.span, e.c0].join(" "), children: [
    'These Terms of Use govern your use of Ashendo.africa and Ashendo.com (together,  the "Website"), our mobile and desktop apps (our "Apps") and all related players,  widgets, tools, features, applications, data, software, APIs (which may also be subject to  separate API Terms of Use) and other services provided by Ashendo (the "Services").',
    " "
  ] }) }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c97].join(" "), children: /* @__PURE__ */ a("span", { className: [e.span, e.c0].join(" "), children: 'These Terms of Use, together with our Community Guidelines and any other terms  specifically referred to in any of those documents, all of which are incorporated by  reference into these Terms of Use, constitute a legally binding contract (the  "Agreement"), between you and Ashendo in relation to your use of the Website, Apps  and Services (together, the "Platform").' }) }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c177].join(" "), children: /* @__PURE__ */ n("span", { className: [e.span, e.c0].join(" "), children: [
    "Please also be sure to review our Privacy Policy and Cookies Policy for more  information on how we collect and use data relating to the use and performance of the  Platform, as well as our responsibilities and your rights in relation to any processing of  your personal data.",
    " "
  ] }) }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c166].join(" "), children: /* @__PURE__ */ n("span", { className: [e.span, e.c4].join(" "), children: [
    "These Terms of Use consist of the following sections:",
    " "
  ] }) }),
  /* @__PURE__ */ n("p", { className: [e.p, e.c88].join(" "), children: [
    /* @__PURE__ */ a("span", { className: [e.span, e.c0].join(" "), children: "• " }),
    /* @__PURE__ */ n("span", { className: [e.span, e.c4].join(" "), children: [
      "Acceptance of Terms of Use",
      " "
    ] }),
    /* @__PURE__ */ n("span", { className: [e.span, e.c0].join(" "), children: [
      "- Basically, by using Ashendo® you accept our Terms  of Use and Community Guidelines and agree to abide by them.",
      " "
    ] })
  ] }),
  /* @__PURE__ */ n("p", { className: [e.p, e.c39].join(" "), children: [
    /* @__PURE__ */ a("span", { className: [e.span, e.c0].join(" "), children: "• " }),
    /* @__PURE__ */ n("span", { className: [e.span, e.c4].join(" "), children: [
      "Changes to Terms of Use",
      " "
    ] }),
    /* @__PURE__ */ n("span", { className: [e.span, e.c0].join(" "), children: [
      "- This section explains that our terms of Use may change  from time to time.",
      " "
    ] })
  ] }),
  /* @__PURE__ */ n("p", { className: [e.p, e.c50].join(" "), children: [
    /* @__PURE__ */ a("span", { className: [e.span, e.c0].join(" "), children: "• " }),
    /* @__PURE__ */ n("span", { className: [e.span, e.c4].join(" "), children: [
      "Description of the Platform",
      " "
    ] }),
    /* @__PURE__ */ n("span", { className: [e.span, e.c0].join(" "), children: [
      "- This provides a general description of the Platform, its  features and functionality.",
      " "
    ] })
  ] }),
  /* @__PURE__ */ n("p", { className: [e.p, e.c157].join(" "), children: [
    /* @__PURE__ */ a("span", { className: [e.span, e.c0].join(" "), children: "• " }),
    /* @__PURE__ */ n("span", { className: [e.span, e.c4].join(" "), children: [
      "Your Ashendo account",
      " "
    ] }),
    /* @__PURE__ */ n("span", { className: [e.span, e.c0].join(" "), children: [
      "- This section explains your responsibilities should you  choose to register for a Ashendo® account.",
      " "
    ] })
  ] }),
  /* @__PURE__ */ n("p", { className: [e.p, e.c39].join(" "), children: [
    /* @__PURE__ */ a("span", { className: [e.span, e.c0].join(" "), children: "• " }),
    /* @__PURE__ */ n("span", { className: [e.span, e.c4].join(" "), children: [
      "Your Use of the platform",
      " "
    ] }),
    /* @__PURE__ */ a("span", { className: [e.span, e.c0].join(" "), children: "- This section sets out your right to use the Platform, and  the conditions that apply to your use of the Platform." })
  ] }),
  /* @__PURE__ */ n("p", { className: [e.p, e.c26].join(" "), children: [
    /* @__PURE__ */ a("span", { className: [e.span, e.c0].join(" "), children: "• " }),
    /* @__PURE__ */ a("span", { className: [e.span, e.c4].join(" "), children: "Your content " }),
    /* @__PURE__ */ n("span", { className: [e.span, e.c0].join(" "), children: [
      "- This section deals with ownership of your content, and includes your  agreement not to upload anything that infringes on anyone else’s rights.",
      " "
    ] })
  ] }),
  /* @__PURE__ */ n("p", { className: [e.p, e.c110].join(" "), children: [
    /* @__PURE__ */ a("span", { className: [e.span, e.c0].join(" "), children: "• " }),
    /* @__PURE__ */ n("span", { className: [e.span, e.c4].join(" "), children: [
      "Grant of license",
      " "
    ] }),
    /* @__PURE__ */ a("span", { className: [e.span, e.c0].join(" "), children: "- This section explains how your content will be used on Ashendo®  and the permissions that you grant by uploading your content - for example, the right for  other users to listen to your sounds." })
  ] }),
  /* @__PURE__ */ n("p", { className: [e.p, e.c124].join(" "), children: [
    /* @__PURE__ */ a("span", { className: [e.span, e.c0].join(" "), children: "• " }),
    /* @__PURE__ */ n("span", { className: [e.span, e.c4].join(" "), children: [
      "Representations and warranties",
      " "
    ] }),
    /* @__PURE__ */ n("span", { className: [e.span, e.c0].join(" "), children: [
      "- This section includes important promises and  guarantees that you give when uploading content to Ashendo® - in particular, your  promise that everything you upload and share is owned by you and won’t infringe  anyone else’s rights.",
      " "
    ] })
  ] }),
  /* @__PURE__ */ n("p", { className: [e.p, e.c134].join(" "), children: [
    /* @__PURE__ */ a("span", { className: [e.span, e.c0].join(" "), children: "• " }),
    /* @__PURE__ */ n("span", { className: [e.span, e.c4].join(" "), children: [
      "Liability for content",
      " "
    ] }),
    /* @__PURE__ */ n("span", { className: [e.span, e.c0].join(" "), children: [
      "- This section explains that Ashendo is a hosting service and that  its users are solely liable for material that they upload to Ashendo®.",
      " "
    ] })
  ] }),
  /* @__PURE__ */ n("p", { className: [e.p, e.c53].join(" "), children: [
    /* @__PURE__ */ a("span", { className: [e.span, e.c0].join(" "), children: "• " }),
    /* @__PURE__ */ n("span", { className: [e.span, e.c4].join(" "), children: [
      "Reporting infringements",
      " "
    ] }),
    /* @__PURE__ */ n("span", { className: [e.span, e.c0].join(" "), children: [
      "- This section explains how to notify us of any content on  Ashendo® that you believe infringes your copyright or any other intellectual property  right, or that is unlawful, abusive, defamatory or otherwise contrary to our Terms of Use  or Community Guidelines. You can find further information on reporting copyright  infringement on our Copyright Information pages.",
      " "
    ] })
  ] }),
  /* @__PURE__ */ n("p", { className: [e.p, e.c128].join(" "), children: [
    /* @__PURE__ */ a("span", { className: [e.span, e.c0].join(" "), children: "• " }),
    /* @__PURE__ */ n("span", { className: [e.span, e.c4].join(" "), children: [
      "Third party websites and services",
      " "
    ] }),
    /* @__PURE__ */ n("span", { className: [e.span, e.c0].join(" "), children: [
      "- Through Ashendo® you may have access to  other websites and services. This section explains that these are separate third party  services that are not under the control of Ashendo.",
      " "
    ] })
  ] }),
  /* @__PURE__ */ n("p", { className: [e.p, e.c5].join(" "), children: [
    /* @__PURE__ */ a("span", { className: [e.span, e.c0].join(" "), children: "• " }),
    /* @__PURE__ */ n("span", { className: [e.span, e.c4].join(" "), children: [
      "Blocking and removal of content",
      " "
    ] }),
    /* @__PURE__ */ n("span", { className: [e.span, e.c0].join(" "), children: [
      "- This section makes it clear that Ashendo may  block or remove content from the Platform.",
      " "
    ] })
  ] }),
  /* @__PURE__ */ n("p", { className: [e.p, e.c173].join(" "), children: [
    /* @__PURE__ */ a("span", { className: [e.span, e.c0].join(" "), children: "• " }),
    /* @__PURE__ */ n("span", { className: [e.span, e.c4].join(" "), children: [
      "Repeat infringers",
      " "
    ] }),
    /* @__PURE__ */ n("span", { className: [e.span, e.c0].join(" "), children: [
      "- Users who repeatedly infringe third party rights or breach our  Terms of Use or Community Guidelines risk having their Ashendo® accounts  suspended or terminated, as explained in this section.",
      " "
    ] })
  ] }),
  /* @__PURE__ */ n("p", { className: [e.p, e.c35].join(" "), children: [
    /* @__PURE__ */ a("span", { className: [e.span, e.c0].join(" "), children: "• " }),
    /* @__PURE__ */ a("span", { className: [e.span, e.c4].join(" "), children: "Disclaimer " }),
    /* @__PURE__ */ n("span", { className: [e.span, e.c0].join(" "), children: [
      "- This section explains that Ashendo® cannot give any guarantees that the  Platform will always be available – sometimes even a platform as awesome as ours will  have a few problems.",
      " "
    ] })
  ] }),
  /* @__PURE__ */ n("p", { className: [e.p, e.c101].join(" "), children: [
    /* @__PURE__ */ a("span", { className: [e.span, e.c0].join(" "), children: "• " }),
    /* @__PURE__ */ n("span", { className: [e.span, e.c4].join(" "), children: [
      "Limitation of liability",
      " "
    ] }),
    /* @__PURE__ */ n("span", { className: [e.span, e.c0].join(" "), children: [
      "- This section explains some of those things that Ashendo will  not be liable for. Please make sure you read and understand this section.",
      " "
    ] })
  ] }),
  /* @__PURE__ */ n("p", { className: [e.p, e.c155].join(" "), children: [
    /* @__PURE__ */ a("span", { className: [e.span, e.c0].join(" "), children: "• " }),
    /* @__PURE__ */ n("span", { className: [e.span, e.c4].join(" "), children: [
      "Indemnification",
      " "
    ] }),
    /* @__PURE__ */ n("span", { className: [e.span, e.c0].join(" "), children: [
      "- If you use the Platform in a way that results in damage to us, you  will need to take responsibility for that.",
      " "
    ] })
  ] }),
  /* @__PURE__ */ n("p", { className: [e.p, e.c47].join(" "), children: [
    /* @__PURE__ */ a("span", { className: [e.span, e.c0].join(" "), children: "• " }),
    /* @__PURE__ */ n("span", { className: [e.span, e.c4].join(" "), children: [
      "Data protection, privacy and cookies",
      " "
    ] }),
    /* @__PURE__ */ a("span", { className: [e.span, e.c0].join(" "), children: "- It is really important to us that you  understand how we use your personal information. All information is collected, stored  and used in accordance with our Privacy Policy, so please make sure that you read and  understand that policy. Like most other websites, we also use cookies to help us  analyze how people use Ashendo, so that we can keep improving our service. Our use  of cookies is explained in our Cookies Policy." })
  ] }),
  /* @__PURE__ */ n("p", { className: [e.p, e.c108].join(" "), children: [
    /* @__PURE__ */ a("span", { className: [e.span, e.c0].join(" "), children: "• " }),
    /* @__PURE__ */ a("span", { className: [e.span, e.c4].join(" "), children: "Meetups " }),
    /* @__PURE__ */ n("span", { className: [e.span, e.c0].join(" "), children: [
      '- This section deals with Ashendo® meetups and explains that these are not  "official" Ashendo events, so we cannot be responsible for anything that happens at  meetups.',
      " "
    ] })
  ] }),
  /* @__PURE__ */ n("p", { className: [e.p, e.c110].join(" "), children: [
    /* @__PURE__ */ a("span", { className: [e.span, e.c0].join(" "), children: "• " }),
    /* @__PURE__ */ n("span", { className: [e.span, e.c4].join(" "), children: [
      "Competitions and other promotions",
      " "
    ] }),
    /* @__PURE__ */ n("span", { className: [e.span, e.c0].join(" "), children: [
      "- This section deals with competitions, contests  and sweepstakes on Ashendo®. These are not run by Ashendo, and therefore we  cannot be responsible for them. If you want to run your own competition on Ashendo,  make sure you read and understand our Competition Terms.",
      " "
    ] })
  ] }),
  /* @__PURE__ */ n("p", { className: [e.p, e.c79].join(" "), children: [
    /* @__PURE__ */ a("span", { className: [e.span, e.c0].join(" "), children: "• " }),
    /* @__PURE__ */ n("span", { className: [e.span, e.c4].join(" "), children: [
      "Use of Ashendo players and widget",
      " "
    ] }),
    /* @__PURE__ */ n("span", { className: [e.span, e.c0].join(" "), children: [
      "- This section includes a few restrictions on how  you can use our players and widgets – basically, don’t try to use our players to create a  new music or audio streaming service.",
      " "
    ] })
  ] }),
  /* @__PURE__ */ n("p", { className: [e.p, e.c127].join(" "), children: [
    /* @__PURE__ */ a("span", { className: [e.span, e.c0].join(" "), children: "• " }),
    /* @__PURE__ */ n("span", { className: [e.span, e.c4].join(" "), children: [
      "Subscriptions and gift codes",
      " "
    ] }),
    /* @__PURE__ */ n("span", { className: [e.span, e.c0].join(" "), children: [
      '- This section links you to information explaining how  to purchase "Pro" and "Next Pro" plans and "Ashendo Go" subscriptions as well as gift  codes and how you can cancel your purchases in certain circumstances.',
      " "
    ] })
  ] }),
  /* @__PURE__ */ n("p", { className: [e.p, e.c18].join(" "), children: [
    /* @__PURE__ */ a("span", { className: [e.span, e.c0].join(" "), children: "• " }),
    /* @__PURE__ */ a("span", { className: [e.span, e.c4].join(" "), children: "Changes to the Platform, accounts and pricing" }),
    /* @__PURE__ */ n("span", { className: [e.span, e.c0].join(" "), children: [
      "- From time to time, we may need  to make some changes to Ashendo®. This section explains your rights in this situation.",
      " "
    ] })
  ] }),
  /* @__PURE__ */ n("p", { className: [e.p, e.c143].join(" "), children: [
    /* @__PURE__ */ a("span", { className: [e.span, e.c0].join(" "), children: "• " }),
    /* @__PURE__ */ a("span", { className: [e.span, e.c4].join(" "), children: "Termination " }),
    /* @__PURE__ */ n("span", { className: [e.span, e.c0].join(" "), children: [
      "- This section explains how you can terminate your Ashendo® account,  and the grounds on which we can terminate your use of Ashendo®.",
      " "
    ] })
  ] }),
  /* @__PURE__ */ n("p", { className: [e.p, e.c195].join(" "), children: [
    /* @__PURE__ */ a("span", { className: [e.span, e.c0].join(" "), children: "• " }),
    /* @__PURE__ */ n("span", { className: [e.span, e.c4].join(" "), children: [
      "Assignment to third parties",
      " "
    ] }),
    /* @__PURE__ */ n("span", { className: [e.span, e.c0].join(" "), children: [
      "- This section deals with Ashendo’s right to transfer this  agreement to someone else.",
      " "
    ] })
  ] }),
  /* @__PURE__ */ n("p", { className: [e.p, e.c172].join(" "), children: [
    /* @__PURE__ */ a("span", { className: [e.span, e.c0].join(" "), children: "• " }),
    /* @__PURE__ */ a("span", { className: [e.span, e.c4].join(" "), children: "Severability " }),
    /* @__PURE__ */ n("span", { className: [e.span, e.c0].join(" "), children: [
      "- This is a standard legal provision, which says that any term that is not valid will be removed from the agreement without affecting the validity of the rest of the  agreement.",
      " "
    ] })
  ] }),
  /* @__PURE__ */ n("p", { className: [e.p, e.c187].join(" "), children: [
    /* @__PURE__ */ a("span", { className: [e.span, e.c0].join(" "), children: "• " }),
    /* @__PURE__ */ n("span", { className: [e.span, e.c4].join(" "), children: [
      "Entire agreement",
      " "
    ] }),
    /* @__PURE__ */ n("span", { className: [e.span, e.c0].join(" "), children: [
      "- Your use of Ashendo® is governed by these Terms of Use, our  Privacy Policy, Cookies Policy and Community Guidelines. Any changes need to be  made in writing.",
      " "
    ] })
  ] }),
  /* @__PURE__ */ n("p", { className: [e.p, e.c194].join(" "), children: [
    /* @__PURE__ */ a("span", { className: [e.span, e.c0].join(" "), children: "• " }),
    /* @__PURE__ */ n("span", { className: [e.span, e.c4].join(" "), children: [
      "Third party rights",
      " "
    ] }),
    /* @__PURE__ */ n("span", { className: [e.span, e.c0].join(" "), children: [
      "- These Terms of Use apply to the relationship between you and  Ashendo only.",
      " "
    ] })
  ] }),
  /* @__PURE__ */ n("p", { className: [e.p, e.c189].join(" "), children: [
    /* @__PURE__ */ a("span", { className: [e.span, e.c0].join(" "), children: "• " }),
    /* @__PURE__ */ n("span", { className: [e.span, e.c4].join(" "), children: [
      "Applicable law and jurisdiction",
      " "
    ] }),
    /* @__PURE__ */ n("span", { className: [e.span, e.c0].join(" "), children: [
      "- All of our documents are generally governed by  German law.",
      " "
    ] })
  ] }),
  /* @__PURE__ */ n("p", { className: [e.p, e.c168].join(" "), children: [
    /* @__PURE__ */ a("span", { className: [e.span, e.c0].join(" "), children: "• " }),
    /* @__PURE__ */ a("span", { className: [e.span, e.c4].join(" "), children: "Disclosures " }),
    /* @__PURE__ */ n("span", { className: [e.span, e.c0].join(" "), children: [
      "- This section provides information about Ashendo, including how to  contact us.",
      " "
    ] })
  ] }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c37].join(" "), children: /* @__PURE__ */ a("span", { className: [e.span, e.c3].join(" "), children: "Acceptance of Terms of Use" }) }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c144].join(" "), children: /* @__PURE__ */ a("span", { className: [e.span, e.c0].join(" "), children: "Please read these Terms of Use, Privacy Policy, Cookies Policy and Community  Guidelines, very carefully. If you do not agree to any of the provisions set out in those  documents, you should not use the Website, Apps or any of the Services. By accessing  or using the Platform, registering an account, or by viewing, accessing, streaming,  uploading or downloading any information or content from or to the Platform, you  represent and warrant that you have read and understood the Terms of Use and  Community Guidelines, will abide by them, and that you are either 18 years of age or  more, or the applicable age of majority in your jurisdiction, or if you are under 18 years  of age or the age of majority in your jurisdiction, you are 16 years of age or more if you  reside in the South Africa or anywhere else." }) }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c17].join(" "), children: /* @__PURE__ */ n("span", { className: [e.span, e.c3].join(" "), children: [
    "Changes to Terms of Use",
    " "
  ] }) }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c19].join(" "), children: /* @__PURE__ */ n("span", { className: [e.span, e.c0].join(" "), children: [
    "We reserve the right to change, alter, replace or otherwise modify these Terms of Use  at any time, for example to address legal or regulatory changes or changes to features  or functionality made available through the Platform, at our discretion. The date of last  modification is stated at the end of these Terms of Use. It is your responsibility to check  this page from time to time for updates.",
    " "
  ] }) }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c46].join(" "), children: /* @__PURE__ */ a("span", { className: [e.span, e.c0].join(" "), children: "When we make any material changes to these Terms of Use, we will provide you with  prominent notice under the circumstances, including for example displaying a notice  within the Platform and/or by sending you an email to the email address that you have  provided us or a message to your Ashendo account, and the revised Terms of Use will  become effective two (2) weeks after such notification." }) }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c119].join(" "), children: /* @__PURE__ */ n("span", { className: [e.span, e.c0].join(" "), children: [
    "You will have no obligation to continue using the Platform following any such  notification, but if you do not terminate your account as described in the Termination  section below during such two (2) week period, your continued use of the Platform after  the end of that two (2) week period will constitute your acceptance of the revised Terms  of Use.",
    " "
  ] }) }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c1].join(" "), children: /* @__PURE__ */ n("span", { className: [e.span, e.c3].join(" "), children: [
    "Description of the Platform",
    " "
  ] }) }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c152].join(" "), children: /* @__PURE__ */ n("span", { className: [e.span, e.c0].join(" "), children: [
    'The Platform is a hosting service. Registered users of the Platform may submit, upload  and post audio, text, photos, pictures, graphics and other content, data or information  ("Content"), which will be stored by Ashendo at the direction of such registered users,  and may be shared and distributed by such registered users, and other users of the  Platform, using the tools and features provided as part of the Platform and accessible  via the Website, Apps and elsewhere. The Platform also enables registered users to  interact with one another and to contribute to discussions, and enables any user of the  Website, Apps or certain Services (who may or may not be registered users of the',
    " "
  ] }) }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c20].join(" "), children: /* @__PURE__ */ n("span", { className: [e.span, e.c0].join(" "), children: [
    "Platform) to view, listen to and share Content uploaded and made available by  registered users.",
    " "
  ] }) }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c94].join(" "), children: /* @__PURE__ */ n("span", { className: [e.span, e.c0].join(" "), children: [
    "The Platform also includes social and interactive features that enable users to engage  with and learn from the Ashendo community in order to build a following and ensure you  get the content that interests you most. For example, users who upload content to  Ashendo will gain access to our creator stats feature, which provides creators with  insights into how the content they upload fares among users, including which users are  top listeners and downloaders of such content.",
    " "
  ] }) }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c174].join(" "), children: /* @__PURE__ */ a("span", { className: [e.span, e.c0].join(" "), children: "Some features of our Platform are only available to registered users who subscribe to a  certain Service (see Subscriptions and Gift Codes below). Ashendo however remains  free for users that choose not to subscribe to such Services. In order to make the  Platform available for free and provide you with personally relevant features, we serve  tailored ads on the Platform on behalf of third party advertisers. To that end, we use  information that you make available to us when you interact with the Platform to inform  the nature of the ads we show you and provide you with a customized experience. More  information on how we use data to show you personalized ads is described in our  Privacy Policy." }) }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c149].join(" "), children: /* @__PURE__ */ n("span", { className: [e.span, e.c0].join(" "), children: [
    "We may, from time to time, release new tools and resources on the Website, release  new versions of our Apps, or introduce other services and/or features for the Platform.  Any new services and features will be subject to these Terms of Use as well as any  additional terms and conditions that we may release for those specific services or  features.",
    " "
  ] }) }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c37].join(" "), children: /* @__PURE__ */ n("span", { className: [e.span, e.c3].join(" "), children: [
    "Your Ashendo account",
    " "
  ] }) }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c151].join(" "), children: /* @__PURE__ */ n("span", { className: [e.span, e.c0].join(" "), children: [
    "You are not obliged to register to use the Platform. However, access to the Apps and  certain Services is only available to registered users. As an example, our website,  Ashendo Africa, enables registered users, who upload and make available their Content  to other users, to receive instant feedback on the performance of their tracks,  communicate with their listeners, and manage their Content anytime.",
    " "
  ] }) }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c57].join(" "), children: /* @__PURE__ */ n("span", { className: [e.span, e.c0].join(" "), children: [
    "In order for you to engage with other Ashendo listeners and creators, we enable you to  create and personalize a public profile on Ashendo. To enable you to do that, you must  provide us with the information you want to display on such profile.",
    " "
  ] }) }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c105].join(" "), children: /* @__PURE__ */ a("span", { className: [e.span, e.c0].join(" "), children: "In order to help you to navigate and discover content on the Platform that interests you,  as a registered user you will also receive auto-generated personalized  recommendations of other content that might appeal to you, based on your listening  habits." }) }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c170].join(" "), children: /* @__PURE__ */ n("span", { className: [e.span, e.c0].join(" "), children: [
    "When you register to use the Platform, you will provide us with your email address, and will choose a username and password for your account. You must ensure that the email  address that you provide is, and remains, valid. Your email address and any other  information you chose to provide about yourself will be treated in accordance with our  Privacy Policy.",
    " "
  ] }) }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c42].join(" "), children: /* @__PURE__ */ n("span", { className: [e.span, e.c0].join(" "), children: [
    "You are solely responsible for maintaining the confidentiality and security of your  username and password, and you will remain responsible for all use of your username  and password, and all activity emanating from your account, whether or not such activity  was authorized by you.",
    " "
  ] }) }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c130].join(" "), children: /* @__PURE__ */ n("span", { className: [e.span, e.c0].join(" "), children: [
    "If your username or password is lost or stolen, or if you believe that your account has  been accessed by unauthorized third parties, you are advised to notify Ashendo in  writing, and should change your password at the earliest possible opportunity.",
    " "
  ] }) }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c162].join(" "), children: /* @__PURE__ */ a("span", { className: [e.span, e.c0].join(" "), children: "We reserve the right to disallow, cancel, remove or reassign certain usernames and  permalinks in appropriate circumstances, as determined by us in our sole discretion,  and may, with or without prior notice, suspend or terminate your account if activities  occur on that account which, in our sole discretion, would or might constitute a violation  of these Terms of Use or our Community Guidelines, or an infringement or violation of  the rights of any third party, or of any applicable laws or regulations." }) }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c148].join(" "), children: /* @__PURE__ */ n("span", { className: [e.span, e.c0].join(" "), children: [
    "You may terminate your account at any time as described in the Termination section  below.",
    " "
  ] }) }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c135].join(" "), children: /* @__PURE__ */ n("span", { className: [e.span, e.c3].join(" "), children: [
    "Your use of the Platform",
    " "
  ] }) }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c87].join(" "), children: /* @__PURE__ */ a("span", { className: [e.span, e.c0].join(" "), children: 'Subject to your strict compliance with these Terms of Use and our Community  Guidelines at any and all times during your use of the Platform, Ashendo grants you a  limited, personal, non-exclusive, revocable, non-assignable and non-transferable right  and license to use the Platform in order to view Content uploaded and posted to the  Website, to listen to audio Content streamed from the Platform or offline and to share  and download audio Content using the features of the Platform where the appropriate  functionality has been enabled by the user who uploaded the relevant Content (the  "Uploader"), and subject to the territorial availability of that feature and audio Content.' }) }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c107].join(" "), children: /* @__PURE__ */ a("span", { className: [e.span, e.c0].join(" "), children: "In addition, if you register to use the Platform, and subject to your strict compliance with  these Terms of Use and our Community Guidelines at any and all times during your use  of the Platform, Ashendo grants you a limited, personal, non-exclusive, revocable, non assignable and non-transferable right and license to:" }) }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c178].join(" "), children: /* @__PURE__ */ n("span", { className: [e.span, e.c0].join(" "), children: [
    "(i) submit, upload or post Content to and keep such Content available on the Platform  strictly as permitted in accordance with these Terms of Use and any other applicable  terms posted on the Website from time to time;",
    " "
  ] }) }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c98].join(" "), children: /* @__PURE__ */ n("span", { className: [e.span, e.c0].join(" "), children: [
    "(ii) participate in the community areas and communicate with other members of the  Ashendo® community strictly in accordance with these Terms of Use and our  Community Guidelines; and",
    " "
  ] }) }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c106].join(" "), children: /* @__PURE__ */ n("span", { className: [e.span, e.c0].join(" "), children: [
    "(iii) use Apps and other Services provided as part of the Platform strictly as permitted in  accordance with these Terms of Use and any other terms applicable to those Apps or  Services from time to time.",
    " "
  ] }) }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c142].join(" "), children: /* @__PURE__ */ n("span", { className: [e.span, e.c0].join(" "), children: [
    "The above licenses are conditional upon your strict compliance with these Terms of Use  and our Community Guidelines at any and all times during your use of the Platform,  including, without limitation, the following:",
    " "
  ] }) }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c7].join(" "), children: /* @__PURE__ */ n("span", { className: [e.span, e.c0].join(" "), children: [
    "(i) You must not copy, rip or capture, or attempt to copy, rip or capture, any audio  Content from the Platform or any part of the Platform, other than by means of download  or store for offline listening in circumstances where the relevant Uploader has elected to  permit downloads or offline listening of the relevant item of Content.",
    " "
  ] }) }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c80].join(" "), children: /* @__PURE__ */ n("span", { className: [e.span, e.c0].join(" "), children: [
    "(ii) You must not adapt, copy, republish, make available or otherwise communicate to  the public, display, perform, transfer, share, distribute or otherwise use or exploit any  Content on or from the Platform at any and all times, except (i) where such Content is  Your Content at any and all times during your use of the applicable Content, or (ii) as  permitted under these Terms of Use, and within the parameters set by the Uploader (for  example, under the terms of Creative Commons licenses selected by the Uploader).",
    " "
  ] }) }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c186].join(" "), children: /* @__PURE__ */ n("span", { className: [e.span, e.c0].join(" "), children: [
    "(iii) You must not use any Content (other than Your Content) in any way that is designed  to create a separate content service or that replicates any part of the Platform offering.",
    " "
  ] }) }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c90].join(" "), children: /* @__PURE__ */ n("span", { className: [e.span, e.c0].join(" "), children: [
    "(iv) You must not employ scraping or similar techniques to aggregate, repurpose,  republish or otherwise make use of any Content.",
    " "
  ] }) }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c164].join(" "), children: /* @__PURE__ */ a("span", { className: [e.span, e.c0].join(" "), children: "(v) You must not employ any techniques or make use of any services, automated or  otherwise, designed to misrepresent the popularity of Your Content on the Platform, or  to misrepresent your activity on the Platform, including without limitation by the use of  bots, botnets, scripts, apps, plugins, extensions or other automated means to register  accounts, log in, add followers to your account, play Content, follow or unfollow other  users, send messages, post comments, or otherwise to act on your behalf, particularly  where such activity occurs in a multiple or repetitive fashion. You must not offer or  promote the availability of any such techniques or services to any other users of the  Platform." }) }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c140].join(" "), children: /* @__PURE__ */ n("span", { className: [e.span, e.c0].join(" "), children: [
    "(vi) You must not alter or remove, or attempt to alter or remove, any trademark,  copyright or other proprietary or legal notices contained in, or appearing on, the  Platform or any Content appearing on the Platform (other than Your Content).",
    " "
  ] }) }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c82].join(" "), children: /* @__PURE__ */ n("span", { className: [e.span, e.c0].join(" "), children: [
    "(vii) You must not, and must not permit any third party to, copy or adapt the object code  of the Website or any of the Apps or Services, or reverse engineer, reverse assemble,  decompile, modify or attempt to discover any source or object code of any part of the  Platform, or circumvent or attempt to circumvent or copy any copy protection  mechanism or territorial restrictions or access any rights management information  pertaining to Content other than Your Content.",
    " "
  ] }) }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c65].join(" "), children: /* @__PURE__ */ n("span", { className: [e.span, e.c0].join(" "), children: [
    "(viii) You must not use the Platform to upload, post, store, transmit, display, copy,  distribute, promote, make available, continue to make available or otherwise  communicate to the public:",
    " "
  ] }) }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c175].join(" "), children: /* @__PURE__ */ n("span", { className: [e.span, e.c0].join(" "), children: [
    "• any Content that is abusive, libellous, defamatory, pornographic or obscene, that  promotes or incites violence, terrorism, illegal acts, or hatred on the grounds of race,  ethnicity, cultural identity, religious belief, disability, gender, identity or sexual  orientation, or is otherwise objectionable in Ashendo’s reasonable discretion;",
    " "
  ] }) }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c16].join(" "), children: /* @__PURE__ */ n("span", { className: [e.span, e.c0].join(" "), children: [
    "• any information, Content or other material that violates, plagiarizes, misappropriates or  infringes the rights of third parties including, without limitation, copyright, trademark  rights, rights of privacy or publicity, confidential information or any other right; or",
    " "
  ] }) }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c138].join(" "), children: /* @__PURE__ */ a("span", { className: [e.span, e.c0].join(" "), children: "• any Content that violates, breaches or is contrary to any law, rule, regulation, court  order or is otherwise is illegal or unlawful in Ashendo’s reasonable opinion;" }) }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c188].join(" "), children: /* @__PURE__ */ n("span", { className: [e.span, e.c0].join(" "), children: [
    "• any material of any kind that contains any virus, Trojan horse, spyware, adware,  malware, bot, time bomb, worm, or other harmful or malicious component, which or  might overburden, impair or disrupt the Platform or servers or networks forming part of,  or connected to, the Platform, or which does or might restrict or inhibit any other user's  use and enjoyment of the Platform; or",
    " "
  ] }) }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c181].join(" "), children: /* @__PURE__ */ n("span", { className: [e.span, e.c0].join(" "), children: [
    "• any unsolicited or unauthorized advertising, promotional messages, spam or any other  form of solicitation.",
    " "
  ] }) }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c131].join(" "), children: /* @__PURE__ */ n("span", { className: [e.span, e.c0].join(" "), children: [
    "(ix) You must not commit or engage in, or encourage, induce, solicit or promote, any  conduct that would constitute a criminal offense, give rise to civil liability or otherwise  violate any law or regulation.",
    " "
  ] }) }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c29].join(" "), children: /* @__PURE__ */ a("span", { className: [e.span, e.c0].join(" "), children: "(x) You must not rent, sell or lease access to the Platform, or any Content on the  Platform, although this shall not prevent you from including links from Your Content to  any legitimate online download store from where any item of Your Content may be  purchased." }) }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c33].join(" "), children: /* @__PURE__ */ a("span", { className: [e.span, e.c0].join(" "), children: "(xi) You must not deliberately impersonate any person or entity or otherwise  misrepresent your affiliation with a person or entity, for example, by registering an  account in the name of another person or company, or sending messages or making  comments using the name of another person." }) }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c92].join(" "), children: /* @__PURE__ */ n("span", { className: [e.span, e.c0].join(" "), children: [
    "(xii) You must not stalk, exploit, threaten, abuse or otherwise harass another user, or  any Ashendo employee.",
    " "
  ] }) }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c112].join(" "), children: /* @__PURE__ */ n("span", { className: [e.span, e.c0].join(" "), children: [
    "(xiii) You must not use or attempt to use another person's account, password, or other  information, unless you have express permission from that other person.",
    " "
  ] }) }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c28].join(" "), children: /* @__PURE__ */ n("span", { className: [e.span, e.c0].join(" "), children: [
    "(xiv) You must not sell or transfer, or offer to sell or transfer, any Ashendo account to  any third party without the prior written approval of Ashendo.",
    " "
  ] }) }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c83].join(" "), children: /* @__PURE__ */ n("span", { className: [e.span, e.c0].join(" "), children: [
    "(xv) You must not collect or attempt to collect personal data, or any other kind of  information about other users, including without limitation, through spidering or any form  of scraping.",
    " "
  ] }) }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c10].join(" "), children: /* @__PURE__ */ n("span", { className: [e.span, e.c0].join(" "), children: [
    "(xvi) You must not violate, circumvent or attempt to violate or circumvent any data  security measures employed by Ashendo or any Uploader; access or attempt to access  data or materials which are not intended for your use; log into, or attempt to log into, a  server or account which you are not authorized to access; attempt to scan or test the  vulnerability of Ashendo’s servers, system or network or attempt to breach Ashendo’s  data security or authentication procedures; attempt to interfere with the Website or the  Services by any means including, without limitation, hacking Ashendo’s servers or  systems, submitting a virus, overloading, mail-bombing or crashing. Without limitation to  any other rights or remedies of Ashendo under these Terms of Use, Ashendo reserves  the right to investigate any situation that appears to involve any of the above, and may  report such matters to, and co-operate with, appropriate law enforcement authorities in  prosecuting any users who have participated in any such violations.",
    " "
  ] }) }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c184].join(" "), children: /* @__PURE__ */ n("span", { className: [e.span, e.c0].join(" "), children: [
    "You agree to comply with the above conditions at any and all times during your use of  the Platform, and acknowledge and agree that Ashendo has the right, in its sole  discretion, to terminate your account or take such other action as we see fit if you  breach any of the above conditions or any of the other terms of these Terms of Use.  This may include taking court action and/or reporting offending users to the relevant  authorities.",
    " "
  ] }) }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c37].join(" "), children: /* @__PURE__ */ a("span", { className: [e.span, e.c3].join(" "), children: "Your content " }) }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c91].join(" "), children: /* @__PURE__ */ n("span", { className: [e.span, e.c0].join(" "), children: [
    "Any and all audio, text, photos, pictures, graphics, and other content, data or  information that you upload, store, transmit, submit, exchange or make available to or",
    " "
  ] }) }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c171].join(" "), children: /* @__PURE__ */ n("span", { className: [e.span, e.c0].join(" "), children: [
    'via the Platform (hereinafter "Your Content") is generated, owned and controlled solely  by you, and not by Ashendo.',
    " "
  ] }) }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c103].join(" "), children: /* @__PURE__ */ n("span", { className: [e.span, e.c0].join(" "), children: [
    "Ashendo does not claim any ownership rights in Your Content, and you hereby  expressly acknowledge and agree that Your Content remains your sole responsibility.",
    " "
  ] }) }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c48].join(" "), children: /* @__PURE__ */ n("span", { className: [e.span, e.c0].join(" "), children: [
    "Without prejudice to the conditions set forth in Your Use of the Platform you must not  upload, store, distribute, send, transmit, display, perform, make available, continue to  make available or otherwise communicate to the public any Content to which you do not  hold the necessary rights. In particular, any unauthorized use of copyright protected  works within Your Content (including by way of reproduction, distribution, modification,  adaptation, public display, public performance, preparation of derivative works, making  available or otherwise communicating to the public via the Platform), independent of  whether it is or becomes unauthorized at a later point, may constitute an infringement of  third party rights and is strictly prohibited. Any such infringements may result in  termination of your access to the Platform as described in the Repeat Infringers section  below, and may also result in civil litigation or criminal prosecution by or on behalf of the  relevant rightsholder.",
    " "
  ] }) }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c125].join(" "), children: /* @__PURE__ */ a("span", { className: [e.span, e.c0].join(" "), children: "Not all unauthorized uses of copyright protected works constitute an infringement. Users  in the European Union can use copyright protected works under certain exceptions or  limitations to copyright, namely quotation, criticism, review, use for the purpose of  caricature, parody or pastiche." }) }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c74].join(" "), children: /* @__PURE__ */ n("span", { className: [e.span, e.c0].join(" "), children: [
    "We may, from time to time, invite or provide you with means to provide feedback  regarding the Platform, and in such circumstances, any feedback you provide will be  deemed non-confidential and Ashendo shall have the right, but not the obligation, to use  such feedback on an unrestricted basis.",
    " "
  ] }) }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c60].join(" "), children: /* @__PURE__ */ n("span", { className: [e.span, e.c3].join(" "), children: [
    "Grant of license",
    " "
  ] }) }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c14].join(" "), children: /* @__PURE__ */ a("span", { className: [e.span, e.c0].join(" "), children: "By uploading or posting Your Content to the Platform, you initiate an automated process  to transcode any audio Content and direct Ashendo to store Your Content on our  servers, from where you may control and authorize the use, ways of reproduction,  transmission, distribution, public display, public performance, making available  (including whether users will be permitted to listen to your Content offline) and other  communication to the public of Your Content on the Platform and elsewhere using the  Services. To the extent it is necessary in order for Ashendo to provide you with any of  the aforementioned hosting services, to undertake any of the tasks set forth in these  Terms of Use, including the distribution of advertising or other promotional material on  our Platform and/or to enable your use of the Platform, you hereby grant such licenses  to Ashendo on a limited, worldwide, non-exclusive, royalty-free and fully paid basis." }) }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c116].join(" "), children: /* @__PURE__ */ n("span", { className: [e.span, e.c0].join(" "), children: [
    'By uploading Your Content to the Platform, you also grant a limited, worldwide, non exclusive, royalty-free, fully paid up, license to other users of the Platform, and to  operators and users of any other websites, apps and/or platforms to which Your Content  has been shared or embedded using the Services ("Linked Services"), to use, copy,  listen to offline, repost, transmit or otherwise distribute, publicly display, publicly  perform, adapt, prepare derivative works of, compile, make available and otherwise  communicate to the public, Your Content utilizing the features of the Platform from time  to time, and within the parameters set by you using the Services. You can limit and  restrict the availability of certain of Your Content to other users of the Platform, and to  users of Linked Services, at any time using the permissions tab in the track edit section  for each sound you upload, subject to the provisions of the Disclaimer section below.  Notwithstanding the foregoing, nothing in these Terms of Use grants any rights to any  other user of the Platform with respect to any proprietary name, logo, trademark or  service mark uploaded by you as part of Your Content (for example, your profile picture)  ("Marks"), other than the right to reproduce, publicly display, make available and  otherwise communicate to the public those Marks, automatically and without alteration,  as part of the act of reposting sounds with which you have associated those Marks.',
    " "
  ] }) }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c62].join(" "), children: /* @__PURE__ */ n("span", { className: [e.span, e.c0].join(" "), children: [
    "The licenses granted in this section are granted separately with respect to each item of  Your Content that you upload to the Platform. Licenses with respect to audio Content,  and any images or text within your account, will (subject to the following paragraph of  these Terms of Use) terminate automatically when you remove such Content from your  account. Licenses with respect to comments or other contributions that you make on the  Platform will be perpetual and irrevocable, and will continue notwithstanding any  termination of your account.",
    " "
  ] }) }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c52].join(" "), children: /* @__PURE__ */ n("span", { className: [e.span, e.c0].join(" "), children: [
    "Removal of audio Content from your account will automatically result in the deletion of  the relevant files from Ashendo’s systems and servers. However, notwithstanding the  foregoing, you hereby acknowledge and agree that once Your Content is distributed to a  Linked Service, Ashendo is not obligated to ensure the deletion of Your Content from  any servers or systems operated by the operators of any Linked Service, or to require  that any user of the Platform or any Linked Service deletes any item of Your Content.  Furthermore, if you authorize any of Your Content to be available for offline listening,  after deletion of an item of Your Content or removal from the ability for other users to  listen to the applicable Content offline, the applicable Content may still be temporarily  available to other users of the Platform who saved the applicable Content for offline  listening on their devices, but no longer than 30 days from the time of deletion.",
    " "
  ] }) }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c150].join(" "), children: /* @__PURE__ */ n("span", { className: [e.span, e.c0].join(" "), children: [
    "Any Content other than Your Content is the property of the relevant Uploader, and is or  may be subject to copyright, trademark rights or other intellectual property or proprietary  rights. Such Content may not be downloaded, reproduced, distributed, transmitted, re uploaded, republished, displayed, sold, licensed, made available or otherwise",
    " "
  ] }) }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c132].join(" "), children: /* @__PURE__ */ n("span", { className: [e.span, e.c0].join(" "), children: [
    "communicated to the public or exploited for any purposes except via the features of the  Platform from time to time and within the parameters set by the Uploader on the  Platform or with the express written consent of the Uploader. Where you repost another  user’s Content, or include another user’s Content in a playlist or station or where you  listen to another user’s Content offline, you acquire no ownership rights whatsoever in  that Content. Subject to the rights expressly granted in this section, all rights in Content  are reserved to the relevant Uploader.",
    " "
  ] }) }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c9].join(" "), children: /* @__PURE__ */ n("span", { className: [e.span, e.c3].join(" "), children: [
    "Representations and warranties",
    " "
  ] }) }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c34].join(" "), children: /* @__PURE__ */ n("span", { className: [e.span, e.c0].join(" "), children: [
    "You hereby represent and warrant to Ashendo as follows: (i) Your Content, and each  and every part thereof, is an original work by you, or you have obtained all rights,  licenses, consents and permissions necessary in order to use at any and all times  during any applicable use, and (if and where relevant) to authorize Ashendo to use,  Your Content pursuant to these Terms of Use, including, without limitation, the right to  upload, reproduce, store, transmit, distribute, share, publicly display, publicly perform,  make available (including for listening offline) and otherwise communicate to the public  Your Content, and each and every part thereof, on, through or via the Platform, any and  all Services and any Linked Services.",
    " "
  ] }) }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c126].join(" "), children: /* @__PURE__ */ n("span", { className: [e.span, e.c0].join(" "), children: [
    "(ii) Your Content and the availability thereof on the Platform does not and will not  infringe or violate the rights of any third party, including, without limitation, any  intellectual property rights, performers’ rights, rights of privacy or publicity, or rights in  confidential information.",
    " "
  ] }) }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c118].join(" "), children: /* @__PURE__ */ n("span", { className: [e.span, e.c0].join(" "), children: [
    "(iii) You have obtained any and all necessary consents, permissions and/or releases  from any and all persons appearing in Your Content in order to include their name,  voice, performance or likeness in Your Content and to publish the same on the Platform  and via any Linked Services.",
    " "
  ] }) }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c193].join(" "), children: /* @__PURE__ */ n("span", { className: [e.span, e.c0].join(" "), children: [
    "(iv) Your Content, including any comments that you may post on the Website, is not and  will not be unlawful, abusive, libellous, defamatory, pornographic or obscene, and will  not promote or incite violence, terrorism, illegal acts, or hatred on the grounds of race,  ethnicity, cultural identity, religious belief, disability, gender, identity or sexual  orientation.",
    " "
  ] }) }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c32].join(" "), children: /* @__PURE__ */ n("span", { className: [e.span, e.c0].join(" "), children: [
    "(v) Your Content does not and will not create any liability on the part of Ashendo, its  subsidiaries, affiliates, successors, and assigns, and their respective employees,  agents, directors, officers and/or shareholders. Ashendo reserves the right to remove  Your Content, suspend or terminate your access to the Platform and/or pursue all legal  remedies if we believe that any of Your Content breaches any of the foregoing",
    " "
  ] }) }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c85].join(" "), children: /* @__PURE__ */ n("span", { className: [e.span, e.c0].join(" "), children: [
    "representations or warranties, or otherwise infringes another person's rights or violates  any law, rule or regulation.",
    " "
  ] }) }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c61].join(" "), children: /* @__PURE__ */ n("span", { className: [e.span, e.c3].join(" "), children: [
    "Liability for content",
    " "
  ] }) }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c158].join(" "), children: /* @__PURE__ */ n("span", { className: [e.span, e.c0].join(" "), children: [
    "You hereby acknowledge and agree that Ashendo (i) stores content and other  information at the direction, request and with the authorization of its users, (ii) acts  merely as a passive conduit and/or host for the uploading, storage and distribution of  such content, and (iii) plays no active role and gives no assistance in the presentation or  use of the content. You are solely responsible for all of Your Content that you upload,  post or distribute to, on or through the Platform, and to the extent permissible by law,  Ashendo excludes all liability with respect to all content (including Your Content) and the  activities of its users with respect thereto.",
    " "
  ] }) }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c137].join(" "), children: /* @__PURE__ */ n("span", { className: [e.span, e.c0].join(" "), children: [
    "You hereby acknowledge and agree that Ashendo cannot and does not review the  content created or uploaded by its users, and neither Ashendo nor its subsidiaries,  affiliates, successors, assigns, employees, agents, directors, officers and shareholders  has any obligation, and may, but does not undertake or assume any duty to, monitor the  Platform for content that is inappropriate, that does or might infringe any third party  rights, or has otherwise been uploaded in breach of these Terms of Use or applicable  law.",
    " "
  ] }) }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c71].join(" "), children: /* @__PURE__ */ n("span", { className: [e.span, e.c0].join(" "), children: [
    "Ashendo and its subsidiaries, affiliates, successors, assigns, employees, agents,  directors, officers and shareholders hereby exclude, to the fullest extent permitted by  law, any and all liability which may arise from any content uploaded to the Platform by  users, including, but not limited to, any claims for infringement of intellectual property  rights, rights of privacy or publicity rights, any claims relating to publication of abusive,  defamatory, pornographic, or obscene material, or any claims relating to the  completeness, accuracy, currency or reliability of any information provided by users of  the Platform. By using the Platform, you irrevocably waive the right to assert any claim  with respect to any of the foregoing against Ashendo or any of its subsidiaries, affiliates,  successors, assigns, employees, agents, directors, officers or shareholders.",
    " "
  ] }) }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c9].join(" "), children: /* @__PURE__ */ n("span", { className: [e.span, e.c3].join(" "), children: [
    "Reporting infringements",
    " "
  ] }) }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c23].join(" "), children: /* @__PURE__ */ n("span", { className: [e.span, e.c0].join(" "), children: [
    "If you discover any content on the Platform that you believe infringes your copyright,  please report this to us using any of the methods outlined on our Copyright Information  pages.",
    " "
  ] }) }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c8].join(" "), children: /* @__PURE__ */ a("span", { className: [e.span, e.c0].join(" "), children: "If you would prefer to send us your own written notification, please make sure that you  include the following information:" }) }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c95].join(" "), children: /* @__PURE__ */ n("span", { className: [e.span, e.c0].join(" "), children: [
    "• a statement that you have identified Content on Ashendo® that infringes your  copyright or the copyright of a third party on whose behalf you are entitled to act;",
    " "
  ] }) }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c139].join(" "), children: /* @__PURE__ */ a("span", { className: [e.span, e.c0].join(" "), children: "• a description of the copyright work(s) that you claim have been infringed;" }) }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c102].join(" "), children: /* @__PURE__ */ n("span", { className: [e.span, e.c0].join(" "), children: [
    "• a description of the Content that you claim is infringing and the Ashendo URL(s) where  such Content can be located;",
    " "
  ] }) }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c56].join(" "), children: /* @__PURE__ */ n("span", { className: [e.span, e.c0].join(" "), children: [
    "• your full name, address and telephone number, a valid email address on which you  can be contacted, and your Ashendo® user name if you have one;",
    " "
  ] }) }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c66].join(" "), children: /* @__PURE__ */ n("span", { className: [e.span, e.c0].join(" "), children: [
    "• a statement by you that you have a good faith belief that the disputed use of the  material is not authorized by the copyright owner, its agent, or the law; and",
    " "
  ] }) }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c156].join(" "), children: /* @__PURE__ */ n("span", { className: [e.span, e.c0].join(" "), children: [
    "• a statement by you that the information in your notice is accurate and that you are  authorized to act on behalf of the owner of the exclusive right that is allegedly infringed;",
    " "
  ] }) }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c145].join(" "), children: /* @__PURE__ */ n("span", { className: [e.span, e.c0].join(" "), children: [
    "In addition, if you wish for your notice to be considered as a notice pursuant to the  South Africa Digital Copyright Act, please also include the following:",
    " "
  ] }) }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c2].join(" "), children: /* @__PURE__ */ n("span", { className: [e.span, e.c0].join(" "), children: [
    "• with respect to your statement that you are authorized to act on behalf of the owner of  the exclusive right that is allegedly infringed, confirmation that such statement is made  under penalty of perjury; and",
    " "
  ] }) }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c67].join(" "), children: /* @__PURE__ */ n("span", { className: [e.span, e.c0].join(" "), children: [
    "• your electronic or physical signature (which may be a scanned copy).",
    " "
  ] }) }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c93].join(" "), children: /* @__PURE__ */ n("span", { className: [e.span, e.c0].join(" "), children: [
    "Your notice should be sent to us by email to copyright@Ashendo.com and/or by mail to  the following address:",
    " "
  ] }) }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c133].join(" "), children: /* @__PURE__ */ a("span", { className: [e.span, e.c0].join(" "), children: "Ashendo Group. Wit-Elshout Ave, Heuweloord, Centurion, Pretoria, Gauteng, 0157.  " }) }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c161].join(" "), children: /* @__PURE__ */ n("span", { className: [e.span, e.c0].join(" "), children: [
    "If you wish for your notice to be considered as a notice pursuant to the South Africa  Digital Copyright Act, your notice should be sent to Ashendo’s designated copyright  agent by email to copyrightagent@Ashendo.com and/or by mail to the following  address:",
    " "
  ] }) }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c27].join(" "), children: /* @__PURE__ */ a("span", { className: [e.span, e.c0].join(" "), children: "The foregoing process applies to copyright only. If you discover any Content that you  believe to be in violation of your trademark rights, please report this to us by email at  legal@Ashendo.com. In all other cases, if you discover Content that infringes or violates  any of your other rights, which you believe is defamatory, pornographic, obscene, racist  or otherwise liable to cause widespread offense, or which constitutes impersonation,  abuse, spam or otherwise violates these Terms of Use, our Community Guidelines or  applicable law, please report this to us at legal [at] Ashendo.africa." }) }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c37].join(" "), children: /* @__PURE__ */ a("span", { className: [e.span, e.c3].join(" "), children: "Third party websites and services" }) }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c21].join(" "), children: /* @__PURE__ */ n("span", { className: [e.span, e.c0].join(" "), children: [
    'The Platform may provide you with access to third party websites, databases, networks,  servers, information, software, programs, systems, directories, applications, products or  services, including without limitation, linked services (hereinafter "External Services").',
    " "
  ] }) }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c86].join(" "), children: /* @__PURE__ */ n("span", { className: [e.span, e.c0].join(" "), children: [
    "Ashendo does not have or maintain any control over External Services, and is not and  cannot be responsible for their content, operation or use. By linking or otherwise  providing access to any External Services, Ashendo does not give any representation,  warranty or endorsement, express or implied, with respect to the legality, accuracy,  quality or authenticity of content, information or services provided by such External  Services.",
    " "
  ] }) }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c159].join(" "), children: /* @__PURE__ */ n("span", { className: [e.span, e.c0].join(" "), children: [
    "External Services may have their own terms of use and/or privacy policy, and may have  different practices and requirements to those operated by Ashendo with respect to the  Platform. You are solely responsible for reviewing any terms of use, privacy policy or  other terms governing your use of these External Services, which you use at your own  risk. You are advised to make reasonable enquiries and investigations before entering  into any transaction, financial or otherwise, and whether online or offline, with any third  party related to any External Services.",
    " "
  ] }) }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c9].join(" "), children: /* @__PURE__ */ n("span", { className: [e.span, e.c3].join(" "), children: [
    "External services",
    " "
  ] }) }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c68].join(" "), children: /* @__PURE__ */ n("span", { className: [e.span, e.c0].join(" "), children: [
    "You are solely responsible for taking the precautions necessary to protect yourself from  fraud when using External Services, and to protect your computer systems from viruses,  worms, Trojan horses, and other harmful or destructive content and material that may  be included on or may emanate from any External Services.",
    " "
  ] }) }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c153].join(" "), children: /* @__PURE__ */ n("span", { className: [e.span, e.c0].join(" "), children: [
    "Ashendo disclaims any and all responsibility or liability for any harm resulting from your  use of External Services, and you hereby irrevocably waive any claim against Ashendo  with respect to the content or operation of any External Services.",
    " "
  ] }) }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c117].join(" "), children: /* @__PURE__ */ n("span", { className: [e.span, e.c3].join(" "), children: [
    "Blocking and removal of content",
    " "
  ] }) }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c190].join(" "), children: /* @__PURE__ */ n("span", { className: [e.span, e.c0].join(" "), children: [
    "Notwithstanding the fact that Ashendo has no legal obligation to monitor the content on  the Platform, Ashendo reserves the right to block, remove or delete any content at any  time, and to limit or restrict access to any content, for any reason and without liability,  including without limitation, if we have reason to believe that such content does or might  infringe the rights of any third party, has been uploaded or posted in breach of these  Terms of Use, our Community Guidelines or applicable law, or is otherwise  unacceptable to Ashendo.",
    " "
  ] }) }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c25].join(" "), children: /* @__PURE__ */ n("span", { className: [e.span, e.c0].join(" "), children: [
    "Please also note that individual Uploaders have control over the audio content that they  store in their account from time to time, and may remove any or all audio content or",
    " "
  ] }) }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c114].join(" "), children: /* @__PURE__ */ n("span", { className: [e.span, e.c0].join(" "), children: [
    "other content without notice. You have no right of continued access to any particular  item of content and Ashendo shall have no liability in the event that you are unable to  access an item of content due to its removal from the Platform, whether by Ashendo or  the relevant uploader.",
    " "
  ] }) }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c160].join(" "), children: /* @__PURE__ */ n("span", { className: [e.span, e.c3].join(" "), children: [
    "Repeat infringers",
    " "
  ] }) }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c113].join(" "), children: /* @__PURE__ */ n("span", { className: [e.span, e.c0].join(" "), children: [
    "Ashendo will suspend or terminate your access to the Platform if Ashendo determines,  in its reasonable discretion, that you have repeatedly breached these Terms of Use or  our Community Guidelines.",
    " "
  ] }) }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c120].join(" "), children: /* @__PURE__ */ n("span", { className: [e.span, e.c0].join(" "), children: [
    "If we receive a valid notification from a third party in accordance with our reporting processes or applicable law that any of Your Content infringes the copyright or other  rights of such third party, or if we believe that your behavior violates our Community  Guidelines, we will send you a written warning to this effect. Any user that receives  more than two of these warnings is liable to have their access to the Platform  terminated forthwith.",
    " "
  ] }) }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c147].join(" "), children: /* @__PURE__ */ n("span", { className: [e.span, e.c0].join(" "), children: [
    "We will also suspend or terminate your account without warning if ordered to do so by a  court, and/or in other appropriate circumstances, as determined by Ashendo at its  discretion. Please note we do not offer refunds to Subscription account holders whose  accounts are terminated as a result of repeated infringement or any violation of these  Terms of Use or our Community Guidelines.",
    " "
  ] }) }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c1].join(" "), children: /* @__PURE__ */ a("span", { className: [e.span, e.c3].join(" "), children: "Disclaimer " }) }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c163].join(" "), children: /* @__PURE__ */ n("span", { className: [e.span, e.c0].join(" "), children: [
    'THE PLATFORM, INCLUDING, WITHOUT LIMITATION, THE WEBSITE, THE APPS  AND ALL CONTENT AND SERVICES ACCESSED THROUGH OR VIA THE  WEBSITE, THE APPS, THE SERVICES OR OTHERWISE, ARE PROVIDED "AS IS",  "AS AVAILABLE", AND "WITH ALL FAULTS".',
    " "
  ] }) }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c6].join(" "), children: /* @__PURE__ */ a("span", { className: [e.span, e.c0].join(" "), children: "WHILST ASHENDO USES REASONABLE ENDEAVORS TO CORRECT ANY  ERRORS OR OMISSIONS IN THE PLATFORM AS SOON AS PRACTICABLE ONCE  THEY HAVE BEEN BROUGHT TO ASHENDO’S ATTENTION, ASHENDO MAKES NO  PROMISES, GUARANTEES, REPRESENTATIONS OR WARRANTIES OF ANY KIND  WHATSOEVER (EXPRESS OR IMPLIED) REGARDING THE WEBSITE, THE APPS,  THE SERVICES OR ANY PART OR PARTS THEREOF, ANY CONTENT, OR ANY  LINKED SERVICES OR OTHER EXTERNAL SERVICES. ASHENDO DOES NOT  WARRANT THAT YOUR USE OF THE PLATFORM WILL BE UNINTERRUPTED,  TIMELY, SECURE OR ERROR-FREE, THAT DEFECTS WILL BE CORRECTED, OR  THAT THE PLATFORM OR ANY PART OR PARTS THEREOF, THE CONTENT, OR  THE SERVERS ON WHICH THE PLATFORM OPERATES ARE OR WILL BE FREE" }) }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c132].join(" "), children: /* @__PURE__ */ n("span", { className: [e.span, e.c0].join(" "), children: [
    "OF VIRUSES OR OTHER HARMFUL COMPONENTS. ASHENDO DOES NOT  WARRANT THAT ANY TRANSMISSION OF CONTENT UPLOADED TO THE  PLATFORM WILL BE SECURE OR THAT ANY ELEMENTS OF THE PLATFORM  DESIGNED TO PREVENT UNAUTHORIZED ACCESS, SHARING OR DOWNLOAD  OF CONTENT WILL BE EFFECTIVE IN ANY AND ALL CASES, AND DOES NOT  WARRANT THAT YOUR USE OF THE PLATFORM IS LAWFUL IN ANY PARTICULAR  JURISDICTION.",
    " "
  ] }) }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c136].join(" "), children: /* @__PURE__ */ n("span", { className: [e.span, e.c0].join(" "), children: [
    "ASHENDO AND ITS SUBSIDIARIES, AFFILIATES, SUCCESSORS, AND ASSIGNS,  AND THEIR RESPECTIVE EMPLOYEES, AGENTS, DIRECTORS, OFFICERS AND  SHAREHOLDERS, SPECIFICALLY DISCLAIM ALL OF THE FOREGOING  WARRANTIES AND ANY OTHER WARRANTIES NOT EXPRESSLY SET OUT  HEREIN TO THE FULLEST EXTENT PERMITTED BY LAW, INCLUDING WITHOUT  LIMITATION ANY EXPRESS OR IMPLIED WARRANTIES REGARDING NON",
    " "
  ] }) }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c183].join(" "), children: /* @__PURE__ */ n("span", { className: [e.span, e.c0].join(" "), children: [
    "INFRINGEMENT, MERCHANTABILITY AND FITNESS FOR A PARTICULAR  PURPOSE.",
    " "
  ] }) }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c44].join(" "), children: /* @__PURE__ */ n("span", { className: [e.span, e.c0].join(" "), children: [
    "WHERE THE LAW OF ANY JURISDICTION LIMITS OR PROHIBITS THE  DISCLAIMER OF IMPLIED OR OTHER WARRANTIES AS SET OUT ABOVE, THE  ABOVE DISCLAIMERS SHALL NOT APPLY TO THE EXTENT THAT THE LAW OF  SUCH JURISDICTION APPLIES TO THIS AGREEMENT.",
    " "
  ] }) }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c121].join(" "), children: /* @__PURE__ */ n("span", { className: [e.span, e.c3].join(" "), children: [
    "Limitation of Liability",
    " "
  ] }) }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c22].join(" "), children: /* @__PURE__ */ n("span", { className: [e.span, e.c0].join(" "), children: [
    "IN NO EVENT SHALL ASHENDO’S AGGREGATE LIABILITY TO YOU UNDER THIS AGREEMENT EXCEED THE GREATER OF 1600 RAND OR THE AMOUNTS (IF ANY)  PAID BY YOU TO ASHENDO DURING THE PREVIOUS TWELVE (12) MONTHS FOR  THE SERVICES GIVING RISE TO THE CLAIM.",
    " "
  ] }) }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c179].join(" "), children: /* @__PURE__ */ n("span", { className: [e.span, e.c0].join(" "), children: [
    "ASHENDO AND ITS SUBSIDIARIES, AFFILIATES, SUCCESSORS, AND ASSIGNS,  AND THEIR RESPECTIVE EMPLOYEES, AGENTS, DIRECTORS, OFFICERS AND  SHAREHOLDERS, SHALL HAVE NO LIABILITY FOR:",
    " "
  ] }) }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c59].join(" "), children: /* @__PURE__ */ n("span", { className: [e.span, e.c0].join(" "), children: [
    "1. ANY LOSS OR DAMAGE ARISING FROM:",
    " "
  ] }) }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c38].join(" "), children: /* @__PURE__ */ n("span", { className: [e.span, e.c0].join(" "), children: [
    "(A) YOUR INABILITY TO ACCESS OR USE THE PLATFORM OR ANY PART OR  PARTS THEREOF, OR TO ACCESS ANY CONTENT OR ANY EXTERNAL SERVICES  VIA THE PLATFORM;",
    " "
  ] }) }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c24].join(" "), children: /* @__PURE__ */ a("span", { className: [e.span, e.c0].join(" "), children: "(B) ANY CHANGES THAT ASHENDO MAY MAKE TO THE PLATFORM OR ANY  PART THEREOF, OR ANY TEMPORARY OR PERMANENT SUSPENSION OR  CESSATION OF ACCESS TO THE PLATFORM OR ANY CONTENT IN OR FROM  ANY OR ALL TERRITORIES;" }) }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c109].join(" "), children: /* @__PURE__ */ n("span", { className: [e.span, e.c0].join(" "), children: [
    "(C) ANY ACTION TAKEN AGAINST YOU BY THIRD PARTY RIGHTSHOLDERS WITH  RESPECT TO ANY ALLEGED INFRINGEMENT OF SUCH THIRD PARTY’S RIGHTS  RELATING TO YOUR CONTENT OR YOUR USE OF THE PLATFORM, OR ANY  ACTION TAKEN AS PART OF AN INVESTIGATION BY ASHENDO OR ANY  RELEVANT LAW ENFORCEMENT AUTHORITY REGARDING YOUR USE OF THE  PLATFORM;",
    " "
  ] }) }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c176].join(" "), children: /* @__PURE__ */ n("span", { className: [e.span, e.c0].join(" "), children: [
    "(D) ANY ERRORS OR OMISSIONS IN THE PLATFORM’S TECHNICAL OPERATION,  OR FROM ANY INACCURACY OR DEFECT IN ANY CONTENT OR ANY  INFORMATION RELATING TO CONTENT;",
    " "
  ] }) }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c54].join(" "), children: /* @__PURE__ */ n("span", { className: [e.span, e.c0].join(" "), children: [
    "(E) YOUR FAILURE TO PROVIDE ASHENDO WITH ACCURATE OR COMPLETE  INFORMATION, OR YOUR FAILURE TO KEEP YOUR USERNAME OR PASSWORD  SUITABLY CONFIDENTIAL;",
    " "
  ] }) }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c72].join(" "), children: /* @__PURE__ */ n("span", { className: [e.span, e.c0].join(" "), children: [
    "(F) ANY MISCONDUCT BY OTHER USERS OR THIRD PARTIES USING THE  PLATFORM, ESPECIALLY IN BREACH OF THE AGREEMENT;",
    " "
  ] }) }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c165].join(" "), children: /* @__PURE__ */ n("span", { className: [e.span, e.c0].join(" "), children: [
    "2. ANY LOSS OR DAMAGE TO ANY COMPUTER HARDWARE OR SOFTWARE,  ANY LOSS OF DATA (INCLUDING YOUR CONTENT), OR ANY LOSS OR DAMAGE  FROM ANY SECURITY BREACH; AND/OR",
    " "
  ] }) }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c43].join(" "), children: /* @__PURE__ */ n("span", { className: [e.span, e.c0].join(" "), children: [
    "3. ANY LOSS OF PROFITS, OR ANY LOSS YOU SUFFER WHICH IS NOT A  FORESEEABLE CONSEQUENCE OF ASHENDO BREACHING THESE TERMS OF  USE. LOSSES ARE FORESEEABLE WHERE THEY COULD BE CONTEMPLATED  BY YOU AND ASHENDO AT THE TIME YOU AGREE TO THESE TERMS OF USE,  AND THEREFORE DO NOT INCLUDE ANY INDIRECT LOSSES, SUCH AS LOSS OF  OPPORTUNITY.",
    " "
  ] }) }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c45].join(" "), children: /* @__PURE__ */ n("span", { className: [e.span, e.c0].join(" "), children: [
    "ANY CLAIM OR CAUSE OF ACTION ARISING OUT OF OR RELATED TO YOUR USE  OF THE PLATFORM MUST BE NOTIFIED TO ASHENDO AS SOON AS POSSIBLE.",
    " "
  ] }) }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c154].join(" "), children: /* @__PURE__ */ n("span", { className: [e.span, e.c0].join(" "), children: [
    "APPLICABLE LAW MAY NOT ALLOW THE LIMITATION OR EXCLUSION OF  LIABILITY FOR INCIDENTAL OR CONSEQUENTIAL DAMAGES, SO THE ABOVE  LIMITATIONS OR EXCLUSIONS MAY NOT APPLY TO YOU. IN SUCH CASES, YOU  ACKNOWLEDGE AND AGREE THAT SUCH LIMITATIONS AND EXCLUSIONS  REFLECT A REASONABLE AND FAIR ALLOCATION OF RISK BETWEEN YOU AND  ASHENDO AND ARE FUNDAMENTAL ELEMENTS OF THE BARGAIN BETWEEN  YOU AND ASHENDO, AND THAT ASHENDO’S LIABILITY WILL BE LIMITED TO THE  MAXIMUM EXTENT PERMITTED BY LAW.",
    " "
  ] }) }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c58].join(" "), children: /* @__PURE__ */ n("span", { className: [e.span, e.c0].join(" "), children: [
    "NOTHING IN THESE TERMS OF USE LIMITS OR EXCLUDES THE LIABILITY OF  ASHENDO, ITS SUBSIDIARIES, SUCCESSORS, ASSIGNS, OR THEIR RESPECTIVE",
    " "
  ] }) }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c55].join(" "), children: /* @__PURE__ */ n("span", { className: [e.span, e.c0].join(" "), children: [
    "EMPLOYEES, AGENTS, DIRECTORS, OFFICERS AND/OR SHAREHOLDERS: (I)  FOR ANY DEATH OR PERSONAL INJURY CAUSED BY ITS OR THEIR  NEGLIGENCE, (II) FOR ANY FORM OF FRAUD OR DECEIT, (III) FOR ANY  DAMAGES CAUSED WILFULLY OR BY GROSS NEGLIGENCE, OR (IV) FOR ANY  FORM OF LIABILITY WHICH CANNOT BE LIMITED OR EXCLUDED BY LAW.",
    " "
  ] }) }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c9].join(" "), children: /* @__PURE__ */ n("span", { className: [e.span, e.c3].join(" "), children: [
    "Indemnification",
    " "
  ] }) }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c36].join(" "), children: /* @__PURE__ */ n("span", { className: [e.span, e.c0].join(" "), children: [
    "You hereby agree to indemnify, defend and hold harmless Ashendo, its successors,  assigns, affiliates, agents, directors, officers, employees and shareholders from and  against any and all claims, obligations, damages, losses, expenses, and costs,  including reasonable attorneys' fees, resulting from:",
    " "
  ] }) }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c40].join(" "), children: /* @__PURE__ */ n("span", { className: [e.span, e.c0].join(" "), children: [
    "(i) any violation by you of these Terms of Use or our Community Guidelines;",
    " "
  ] }) }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c122].join(" "), children: /* @__PURE__ */ n("span", { className: [e.span, e.c0].join(" "), children: [
    "(ii) any third party claim of infringement of copyright or other intellectual property rights  or invasion of privacy arising from the hosting of Your Content on the Platform, and/or  your making available thereof to other users of the Platform, and/or the actual use of  Your Content by other users of the Platform or Linked Services in accordance with  these Terms of Use and the parameters set by you with respect to the distribution and  sharing of Your Content;",
    " "
  ] }) }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c49].join(" "), children: /* @__PURE__ */ n("span", { className: [e.span, e.c0].join(" "), children: [
    "(iii) any activity related to your account, be it by you or by any other person accessing  your account with or without your consent unless such activity was caused by the act or  default of Ashendo.",
    " "
  ] }) }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c1].join(" "), children: /* @__PURE__ */ n("span", { className: [e.span, e.c3].join(" "), children: [
    "Data protection, privacy and cookies",
    " "
  ] }) }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c31].join(" "), children: /* @__PURE__ */ n("span", { className: [e.span, e.c0].join(" "), children: [
    "All personal data that you provide to us in connection with your use of the Platform is  collected, stored, used, disclosed and otherwise processed by Ashendo in accordance  with our Privacy Policy. In addition, in common with most online services, we use  cookies to help us understand how people are using the Platform, so that we can  continue to improve the service we offer. Our use of cookies, and how to disable  cookies, is explained in our Cookies Policy.",
    " "
  ] }) }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c117].join(" "), children: /* @__PURE__ */ a("span", { className: [e.span, e.c3].join(" "), children: "Meetups " }) }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c89].join(" "), children: /* @__PURE__ */ n("span", { className: [e.span, e.c0].join(" "), children: [
    'Ashendo has an active community of users, many of whom organize and attend face-to face meetings at venues all over the world ("Meetups"). While Ashendo is generally  supportive of Meetups and may provide branded promotional materials to help  organizers promote their Meetups, Ashendo does not sponsor, oversee or in any way  control such Meetups. You hereby acknowledge and agree that your attendance and',
    " "
  ] }) }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c75].join(" "), children: /* @__PURE__ */ n("span", { className: [e.span, e.c0].join(" "), children: [
    "participation in any Meetups is entirely at your own risk and Ashendo does not bear any  responsibility or liability for the actions of any Ashendo users or any third parties who  organize, attend or are otherwise involved in any Meetups.",
    " "
  ] }) }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c17].join(" "), children: /* @__PURE__ */ n("span", { className: [e.span, e.c3].join(" "), children: [
    "Competitions and other promotions",
    " "
  ] }) }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c69].join(" "), children: /* @__PURE__ */ n("span", { className: [e.span, e.c0].join(" "), children: [
    'From time to time, some Ashendo® users may promote competitions, promotions, prize  draws and other similar opportunities on the Platform ("Third Party Competitions").  Ashendo is not the sponsor or promoter of these Third Party Competitions, and does  not bear any responsibility or liability for the actions or inactions of any third parties who  organize, administer or are otherwise involved in any promotion of these Third Party  Competitions. If you wish to participate in any of these Third Party Competitions, it is  your responsibility to read the terms and conditions applicable to the relevant Third  Party Competition and to ensure that you understand the rules and any eligibility  requirements, and are lawfully able to participate in such Third Party Competitions in  your country of residence.',
    " "
  ] }) }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c15].join(" "), children: /* @__PURE__ */ n("span", { className: [e.span, e.c0].join(" "), children: [
    "If you wish to run your own Third Party Competition on the Platform, you are free to do  so provided you comply with our Competition Terms, which are available here.",
    " "
  ] }) }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c61].join(" "), children: /* @__PURE__ */ n("span", { className: [e.span, e.c3].join(" "), children: [
    "Use of Ashendo players and widget",
    " "
  ] }) }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c192].join(" "), children: /* @__PURE__ */ a("span", { className: [e.span, e.c0].join(" "), children: 'The Platform includes access to customizable players ("Players"), and an embeddable  version of the Ashendo waveform player ("Widget") for incorporation into users’ own  sites, third party sites or social media profiles, whether or not a Linked Service. This  functionality is provided to enable Uploaders to put their Content wherever they wish,  and to enable other users of the Platform to share and distribute Content within the  parameters set by the Uploader.' }) }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c51].join(" "), children: /* @__PURE__ */ a("span", { className: [e.span, e.c0].join(" "), children: "You may not, without the prior written consent of Ashendo, use the Players or the  Widget in such a way that you aggregate Content from the Platform into a separate  destination that replicates substantially the offering of the Website, or comprises a  content service of which Content from the Platform forms a material part. Similarly, you  may not, without the prior written consent of Ashendo, use the Players or the Widget to  embed Content into any website or other destination dedicated to a particular artist  (except where the relevant Content is Your Content and you are the person or are  authorized to represent the person to whom the site or destination is dedicated), or to a  particular genre. You may not use the Players or Widget in any way that suggests that  Ashendo or any artist, audio creator or other third party endorses or supports your  website, or your use of the Players or Widget. The foregoing shall apply whether such  use is commercial or non-commercial." }) }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c30].join(" "), children: /* @__PURE__ */ n("span", { className: [e.span, e.c0].join(" "), children: [
    "Ashendo reserves the right to block your use of the Players and the Widget at any time  and for any reason at its sole discretion.",
    " "
  ] }) }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c129].join(" "), children: /* @__PURE__ */ n("span", { className: [e.span, e.c3].join(" "), children: [
    "Subscriptions and gift codes",
    " "
  ] }) }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c41].join(" "), children: /* @__PURE__ */ n("span", { className: [e.span, e.c0].join(" "), children: [
    "Certain features of the Platform are only available to registered users who subscribe the  platform.",
    " "
  ] }) }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c11].join(" "), children: /* @__PURE__ */ n("span", { className: [e.span, e.c0].join(" "), children: [
    "The subscription to an Ashendo Accounts and gift codes related to Ashendo Accounts  is subject to additional terms, which you will find here. In addition, the purchase of  subscriptions for Ashendo Go is subject to additional terms, which you will find here.",
    " "
  ] }) }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c70].join(" "), children: /* @__PURE__ */ n("span", { className: [e.span, e.c0].join(" "), children: [
    "The Ashendo Account Terms include, amongst other things, terms relating to payment,  the conclusion, renewal and cancellation of your Subscription, including your right of  cancellation during the first 14 days of your Subscription, and certain technical usage  limitations.",
    " "
  ] }) }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c185].join(" "), children: /* @__PURE__ */ n("span", { className: [e.span, e.c0].join(" "), children: [
    "The Ashendo Account Terms are applicable to Ashendo Account users in addition to  these general Terms of Use when they purchase a Subscription. Ashendo reserves the  right to limit the availability of Ashendo subscriptions to specific jurisdictions as may be  determined by Ashendo in its sole discretion from time to time.",
    " "
  ] }) }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c17].join(" "), children: /* @__PURE__ */ n("span", { className: [e.span, e.c3].join(" "), children: [
    "Changes to the Platform, accounts and pricing",
    " "
  ] }) }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c123].join(" "), children: /* @__PURE__ */ n("span", { className: [e.span, e.c0].join(" "), children: [
    "Ashendo reserves the right at any time and for any reason to suspend, discontinue,  terminate or cease providing access to the Platform or any part thereof, temporarily or  permanently, and whether in its entirety or with respect to individual territories only. In  the case of any temporary or permanent suspension, discontinuation, termination or  cessation of access, Ashendo shall use its reasonable endeavors to notify registered  users of such decision in advance.",
    " "
  ] }) }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c180].join(" "), children: /* @__PURE__ */ n("span", { className: [e.span, e.c0].join(" "), children: [
    "You hereby agree that Ashendo and its subsidiaries, affiliates, successors, assigns,  employees, agents, directors, officers and shareholders shall not be liable to you or to  any third party for any changes or modifications to the Website, Apps and/or any  Services that Ashendo may wish to make from time to time, or for any decision to  suspend, discontinue or terminate the Website, the Services or any part or parts  thereof, or your possibility to use or access the same from or within any territory or  territories.",
    " "
  ] }) }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c78].join(" "), children: /* @__PURE__ */ n("span", { className: [e.span, e.c0].join(" "), children: [
    "Ashendo may change the features of any type of account, may withdraw or, or introduce  new features, products or types of account at any time and for any reason, and may  change the prices charged for any of its Subscriptions from time to time. In the event of  any increase in the price or material reduction in the features of any Subscription which",
    " "
  ] }) }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c167].join(" "), children: /* @__PURE__ */ n("span", { className: [e.span, e.c0].join(" "), children: [
    "you have purchased, such change(s) will be communicated to you and will only take  effect with respect to any subsequent renewal of your subscription. In all other cases,  where Ashendo proposes to make changes to any type of Subscription you have  purchased, and these changes are material and to your disadvantage, Ashendo will  notify you of the proposed changes by sending a message to your Ashendo® account  and/or an email to the then current email address that we have for your account, at least  six (6) weeks in advance. You will have no obligation to continue using the Platform  following any such notification, but if you do not terminate your account as described in  the Termination section below during such six (6) week period, your continued use of  your account after the end of that six (6) week period will constitute your acceptance of  the changes to your Subscription.",
    " "
  ] }) }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c37].join(" "), children: /* @__PURE__ */ a("span", { className: [e.span, e.c3].join(" "), children: "Termination " }) }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c96].join(" "), children: /* @__PURE__ */ n("span", { className: [e.span, e.c0].join(" "), children: [
    "You may terminate this Agreement at any time by sending notice in writing to Ashendo  at 6 Wit-Elshout Ave, Heuweloord, Centurion, Pretoria, Gauteng, 0157 confirming such  termination, by removing all of Your Content from your account, or by deleting your  account and thereafter by ceasing to use the Platform. If you have a Subscription, and  terminate this Agreement before the end of such Subscription, we are unable to offer  any refund for any unexpired period of your Subscription.",
    " "
  ] }) }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c84].join(" "), children: /* @__PURE__ */ a("span", { className: [e.span, e.c0].join(" "), children: "Ashendo may suspend your access to the Platform and/or terminate this Agreement at  any time if (i) you are deemed to be a Repeat Infringer as described above; (ii) you are  in breach of any of the material provision of these Terms of Use or our Community  Guidelines, including without limitation, the provisions of the following sections: Your  Use of the Platform, Your Content, Grant of Licence , and Your Representations and  Warranties; (iii) Ashendo elects at its discretion to cease providing access to the  Platform in the jurisdiction where you reside or from where you are attempting to access  the Platform, or (iv) in other reasonable circumstances as determined by Ashendo at its  discretion. If you have a Subscription and your account is suspended or terminated by  Ashendo pursuant to (i) or (ii) above, you will not be entitled to any refund for any  unexpired period of your subscription. If your account is terminated pursuant to (iii) or  (iv), refunds may be payable at the reasonable discretion of Ashendo." }) }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c191].join(" "), children: /* @__PURE__ */ a("span", { className: [e.span, e.c0].join(" "), children: "Once your account has been terminated, any and all Content residing in your account,  or pertaining to activity from your account (for example, data relating to the distribution  or consumption of your sounds), will be irretrievably deleted by Ashendo, except to the  extent that we are obliged or permitted to retain such content, data or information for a  certain period of time in accordance with applicable laws and regulations and/or to  protect our legitimate business interests. You are advised to save or back up any  material that you have uploaded to your account before terminating your account, as" }) }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c64].join(" "), children: /* @__PURE__ */ n("span", { className: [e.span, e.c0].join(" "), children: [
    "Ashendo assumes no liability for any material that is irretrievably deleted following any  termination of your account. Ashendo is not able to provide you with any .csv or other  similar file of data relating to activity associated with your account, whether before or  after termination or cancellation. This data is provided and is accessible only for viewing  via your account page on the Website for as long as your account is active.",
    " "
  ] }) }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c76].join(" "), children: /* @__PURE__ */ n("span", { className: [e.span, e.c0].join(" "), children: [
    "If you access the Platform via any of our Apps or via any third party app connected to  your account, deleting that app will not delete your account. If you wish to delete your  account, you will need to do so from the Account page within your Settings on the  Website. The provisions of these Terms of Use that are intended by their nature to  survive the termination or cancellation of this Agreement will survive the termination of  this Agreement, including, but not limited to, those Sections entitled Your Ashendo  Account, Your Content, Grant of License , Representations and Warranties, Liability for  Content, Disclaimer, Limitation of Liability, Indemnification, Termination and Right of  Cancellation, Assignment to Third Parties, Severability, Entire Agreement, and  Applicable Law and Jurisdiction, respectively.",
    " "
  ] }) }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c37].join(" "), children: /* @__PURE__ */ n("span", { className: [e.span, e.c3].join(" "), children: [
    "Assignment to third parties",
    " "
  ] }) }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c141].join(" "), children: /* @__PURE__ */ n("span", { className: [e.span, e.c0].join(" "), children: [
    "Ashendo may assign its rights and (where permissible by law) its obligations under this  Agreement, in whole or in part, to any third party at any time without notice, including  without limitation, to any person or entity acquiring all or substantially all of the assets or  business of Ashendo. You may not assign this Agreement or the rights and duties  hereunder, in whole or in part, to any third party without the prior written consent of  Ashendo.",
    " "
  ] }) }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c60].join(" "), children: /* @__PURE__ */ a("span", { className: [e.span, e.c3].join(" "), children: "Severability " }) }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c111].join(" "), children: /* @__PURE__ */ a("span", { className: [e.span, e.c0].join(" "), children: "Should one or more provisions of these Terms of Use be found to be unlawful, void or  unenforceable, such provision(s) shall be deemed severable and will not affect the  validity and/or enforceability of the remaining provisions of the Terms of Use, which will  remain in full force and effect." }) }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c9].join(" "), children: /* @__PURE__ */ n("span", { className: [e.span, e.c3].join(" "), children: [
    "Entire agreement",
    " "
  ] }) }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c77].join(" "), children: /* @__PURE__ */ a("span", { className: [e.span, e.c0].join(" "), children: "These Terms of Use, together with the Community Guidelines, constitute the entire  agreement between you and Ashendo with respect to your use of the Platform (other  than any use of Ashendo’s APIs which may also be subject to separate [API Terms of  Use]), and supersede any prior agreement between you and Ashendo. Any  modifications to this Agreement must be made in writing." }) }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c63].join(" "), children: /* @__PURE__ */ n("span", { className: [e.span, e.c3].join(" "), children: [
    "Third party rights",
    " "
  ] }) }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c73].join(" "), children: /* @__PURE__ */ n("span", { className: [e.span, e.c0].join(" "), children: [
    "These Terms of Use are not intended to give rights to anyone except you and Ashendo.  This does not affect our right to transfer our rights or obligations to a third party as  described in the Assignment to Third Parties section.",
    " "
  ] }) }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c37].join(" "), children: /* @__PURE__ */ n("span", { className: [e.span, e.c3].join(" "), children: [
    "Applicable law and jurisdiction",
    " "
  ] }) }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c99].join(" "), children: /* @__PURE__ */ n("span", { className: [e.span, e.c0].join(" "), children: [
    "Except where otherwise required by the mandatory law of the South Africa",
    " "
  ] }) }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c196].join(" "), children: /* @__PURE__ */ n("span", { className: [e.span, e.c0].join(" "), children: [
    "(i) this Agreement is subject to the laws of the Republic of South Africa, excluding the  UN Convention on Contracts for the International Sale of Goods (CISG) and excluding  the principles of conflict of laws (international private law); and",
    " "
  ] }) }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c115].join(" "), children: /* @__PURE__ */ n("span", { className: [e.span, e.c0].join(" "), children: [
    "(ii) you hereby agree, and Ashendo agrees, to submit to the exclusive jurisdiction of the  courts in South Africa for resolution of any dispute, action or proceeding arising in  connection with this Agreement.",
    " "
  ] }) }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c169].join(" "), children: /* @__PURE__ */ n("span", { className: [e.span, e.c0].join(" "), children: [
    "The foregoing provisions of this Applicable Law and Jurisdiction section do not apply to  any claim in which Ashendo seeks equitable relief of any kind. You acknowledge that, in  the event of a breach of this Agreement by Ashendo or any third party, the damage or  harm, if any, caused to you will not entitle you to seek injunctive or other equitable relief  against Ashendo, including with respect to Your Content, and your only remedy shall be  for monetary damages, subject to the limitations of liability set forth in these Terms of  Use.",
    " "
  ] }) }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c1].join(" "), children: /* @__PURE__ */ a("span", { className: [e.span, e.c3].join(" "), children: "Disclosures " }) }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c81].join(" "), children: /* @__PURE__ */ a("span", { className: [e.span, e.c0].join(" "), children: "The services hereunder are offered by Ashendo Group, a company incorporated under  the laws of South Africa and with its main place of business at Wit-Elshout Ave,  Heuweloord, Centurion, Pretoria, Gauteng, 0157. You may contact us by sending  correspondence to the foregoing address or by emailing us at contact@ashendo.africa.  " }) }),
  /* @__PURE__ */ a("p", { className: [e.p, e.c100].join(" "), children: /* @__PURE__ */ a("span", { className: [e.span, e.c0].join(" "), children: "Last Amended: December 12, 2022" }) })
] });
export {
  Cs as PrivacyPolicy,
  Ys as TermsOfService
};
