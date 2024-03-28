var wh = Object.defineProperty;
var Th = (e, t, n) => t in e ? wh(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var fr = (e, t, n) => (Th(e, typeof t != "symbol" ? t + "" : t, n), n), ks = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
};
var S = (e, t, n) => (ks(e, t, "read from private field"), n ? n.call(e) : t.get(e)), ve = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, ce = (e, t, n, r) => (ks(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n);
var li = (e, t, n, r) => ({
  set _(i) {
    ce(e, t, i, n);
  },
  get _() {
    return S(e, t, r);
  }
}), _e = (e, t, n) => (ks(e, t, "access private method"), n);
import * as v from "react";
import At, { useRef as bi, useCallback as Ch, useContext as Yi, useLayoutEffect as Sh, useEffect as cd, createContext as ud, forwardRef as Rh, Children as Ph, isValidElement as gi, cloneElement as xi, createElement as $h, useState as _h } from "react";
import * as kh from "react-dom";
import ci from "react-dom";
function dd(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: Nh } = Object.prototype, { getPrototypeOf: qa } = Object, Gi = /* @__PURE__ */ ((e) => (t) => {
  const n = Nh.call(t);
  return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), vn = (e) => (e = e.toLowerCase(), (t) => Gi(t) === e), Qi = (e) => (t) => typeof t === e, { isArray: qr } = Array, go = Qi("undefined");
function Ih(e) {
  return e !== null && !go(e) && e.constructor !== null && !go(e.constructor) && Ht(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const fd = vn("ArrayBuffer");
function Ah(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && fd(e.buffer), t;
}
const jh = Qi("string"), Ht = Qi("function"), pd = Qi("number"), Xi = (e) => e !== null && typeof e == "object", Mh = (e) => e === !0 || e === !1, Ei = (e) => {
  if (Gi(e) !== "object")
    return !1;
  const t = qa(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}, Dh = vn("Date"), Fh = vn("File"), Lh = vn("Blob"), Bh = vn("FileList"), Vh = (e) => Xi(e) && Ht(e.pipe), Uh = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || Ht(e.append) && ((t = Gi(e)) === "formdata" || // detect form-data instance
  t === "object" && Ht(e.toString) && e.toString() === "[object FormData]"));
}, zh = vn("URLSearchParams"), Wh = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Wo(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let r, i;
  if (typeof e != "object" && (e = [e]), qr(e))
    for (r = 0, i = e.length; r < i; r++)
      t.call(null, e[r], r, e);
  else {
    const s = n ? Object.getOwnPropertyNames(e) : Object.keys(e), a = s.length;
    let l;
    for (r = 0; r < a; r++)
      l = s[r], t.call(null, e[l], l, e);
  }
}
function hd(e, t) {
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length, i;
  for (; r-- > 0; )
    if (i = n[r], t === i.toLowerCase())
      return i;
  return null;
}
const md = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, yd = (e) => !go(e) && e !== md;
function ra() {
  const { caseless: e } = yd(this) && this || {}, t = {}, n = (r, i) => {
    const s = e && hd(t, i) || i;
    Ei(t[s]) && Ei(r) ? t[s] = ra(t[s], r) : Ei(r) ? t[s] = ra({}, r) : qr(r) ? t[s] = r.slice() : t[s] = r;
  };
  for (let r = 0, i = arguments.length; r < i; r++)
    arguments[r] && Wo(arguments[r], n);
  return t;
}
const qh = (e, t, n, { allOwnKeys: r } = {}) => (Wo(t, (i, s) => {
  n && Ht(i) ? e[s] = dd(i, n) : e[s] = i;
}, { allOwnKeys: r }), e), Hh = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), Kh = (e, t, n, r) => {
  e.prototype = Object.create(t.prototype, r), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), n && Object.assign(e.prototype, n);
}, Yh = (e, t, n, r) => {
  let i, s, a;
  const l = {};
  if (t = t || {}, e == null)
    return t;
  do {
    for (i = Object.getOwnPropertyNames(e), s = i.length; s-- > 0; )
      a = i[s], (!r || r(a, e, t)) && !l[a] && (t[a] = e[a], l[a] = !0);
    e = n !== !1 && qa(e);
  } while (e && (!n || n(e, t)) && e !== Object.prototype);
  return t;
}, Gh = (e, t, n) => {
  e = String(e), (n === void 0 || n > e.length) && (n = e.length), n -= t.length;
  const r = e.indexOf(t, n);
  return r !== -1 && r === n;
}, Qh = (e) => {
  if (!e)
    return null;
  if (qr(e))
    return e;
  let t = e.length;
  if (!pd(t))
    return null;
  const n = new Array(t);
  for (; t-- > 0; )
    n[t] = e[t];
  return n;
}, Xh = /* @__PURE__ */ ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && qa(Uint8Array)), Jh = (e, t) => {
  const r = (e && e[Symbol.iterator]).call(e);
  let i;
  for (; (i = r.next()) && !i.done; ) {
    const s = i.value;
    t.call(e, s[0], s[1]);
  }
}, Zh = (e, t) => {
  let n;
  const r = [];
  for (; (n = e.exec(t)) !== null; )
    r.push(n);
  return r;
}, em = vn("HTMLFormElement"), tm = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(n, r, i) {
    return r.toUpperCase() + i;
  }
), Yl = (({ hasOwnProperty: e }) => (t, n) => e.call(t, n))(Object.prototype), nm = vn("RegExp"), bd = (e, t) => {
  const n = Object.getOwnPropertyDescriptors(e), r = {};
  Wo(n, (i, s) => {
    let a;
    (a = t(i, s, e)) !== !1 && (r[s] = a || i);
  }), Object.defineProperties(e, r);
}, rm = (e) => {
  bd(e, (t, n) => {
    if (Ht(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
      return !1;
    const r = e[n];
    if (Ht(r)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + n + "'");
      });
    }
  });
}, om = (e, t) => {
  const n = {}, r = (i) => {
    i.forEach((s) => {
      n[s] = !0;
    });
  };
  return qr(e) ? r(e) : r(String(e).split(t)), n;
}, im = () => {
}, sm = (e, t) => (e = +e, Number.isFinite(e) ? e : t), Ns = "abcdefghijklmnopqrstuvwxyz", Gl = "0123456789", vd = {
  DIGIT: Gl,
  ALPHA: Ns,
  ALPHA_DIGIT: Ns + Ns.toUpperCase() + Gl
}, am = (e = 16, t = vd.ALPHA_DIGIT) => {
  let n = "";
  const { length: r } = t;
  for (; e--; )
    n += t[Math.random() * r | 0];
  return n;
};
function lm(e) {
  return !!(e && Ht(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator]);
}
const cm = (e) => {
  const t = new Array(10), n = (r, i) => {
    if (Xi(r)) {
      if (t.indexOf(r) >= 0)
        return;
      if (!("toJSON" in r)) {
        t[i] = r;
        const s = qr(r) ? [] : {};
        return Wo(r, (a, l) => {
          const c = n(a, i + 1);
          !go(c) && (s[l] = c);
        }), t[i] = void 0, s;
      }
    }
    return r;
  };
  return n(e, 0);
}, um = vn("AsyncFunction"), dm = (e) => e && (Xi(e) || Ht(e)) && Ht(e.then) && Ht(e.catch), F = {
  isArray: qr,
  isArrayBuffer: fd,
  isBuffer: Ih,
  isFormData: Uh,
  isArrayBufferView: Ah,
  isString: jh,
  isNumber: pd,
  isBoolean: Mh,
  isObject: Xi,
  isPlainObject: Ei,
  isUndefined: go,
  isDate: Dh,
  isFile: Fh,
  isBlob: Lh,
  isRegExp: nm,
  isFunction: Ht,
  isStream: Vh,
  isURLSearchParams: zh,
  isTypedArray: Xh,
  isFileList: Bh,
  forEach: Wo,
  merge: ra,
  extend: qh,
  trim: Wh,
  stripBOM: Hh,
  inherits: Kh,
  toFlatObject: Yh,
  kindOf: Gi,
  kindOfTest: vn,
  endsWith: Gh,
  toArray: Qh,
  forEachEntry: Jh,
  matchAll: Zh,
  isHTMLForm: em,
  hasOwnProperty: Yl,
  hasOwnProp: Yl,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: bd,
  freezeMethods: rm,
  toObjectSet: om,
  toCamelCase: tm,
  noop: im,
  toFiniteNumber: sm,
  findKey: hd,
  global: md,
  isContextDefined: yd,
  ALPHABET: vd,
  generateString: am,
  isSpecCompliantForm: lm,
  toJSONObject: cm,
  isAsyncFn: um,
  isThenable: dm
};
function ke(e, t, n, r, i) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), n && (this.config = n), r && (this.request = r), i && (this.response = i);
}
F.inherits(ke, Error, {
  toJSON: function() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: F.toJSONObject(this.config),
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    };
  }
});
const gd = ke.prototype, xd = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL"
  // eslint-disable-next-line func-names
].forEach((e) => {
  xd[e] = { value: e };
});
Object.defineProperties(ke, xd);
Object.defineProperty(gd, "isAxiosError", { value: !0 });
ke.from = (e, t, n, r, i, s) => {
  const a = Object.create(gd);
  return F.toFlatObject(e, a, function(c) {
    return c !== Error.prototype;
  }, (l) => l !== "isAxiosError"), ke.call(a, e.message, t, n, r, i), a.cause = e, a.name = e.name, s && Object.assign(a, s), a;
};
const fm = null;
function oa(e) {
  return F.isPlainObject(e) || F.isArray(e);
}
function Ed(e) {
  return F.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function Ql(e, t, n) {
  return e ? e.concat(t).map(function(i, s) {
    return i = Ed(i), !n && s ? "[" + i + "]" : i;
  }).join(n ? "." : "") : t;
}
function pm(e) {
  return F.isArray(e) && !e.some(oa);
}
const hm = F.toFlatObject(F, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function Ji(e, t, n) {
  if (!F.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), n = F.toFlatObject(n, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(h, m) {
    return !F.isUndefined(m[h]);
  });
  const r = n.metaTokens, i = n.visitor || d, s = n.dots, a = n.indexes, c = (n.Blob || typeof Blob < "u" && Blob) && F.isSpecCompliantForm(t);
  if (!F.isFunction(i))
    throw new TypeError("visitor must be a function");
  function u(y) {
    if (y === null)
      return "";
    if (F.isDate(y))
      return y.toISOString();
    if (!c && F.isBlob(y))
      throw new ke("Blob is not supported. Use a Buffer instead.");
    return F.isArrayBuffer(y) || F.isTypedArray(y) ? c && typeof Blob == "function" ? new Blob([y]) : Buffer.from(y) : y;
  }
  function d(y, h, m) {
    let g = y;
    if (y && !m && typeof y == "object") {
      if (F.endsWith(h, "{}"))
        h = r ? h : h.slice(0, -2), y = JSON.stringify(y);
      else if (F.isArray(y) && pm(y) || (F.isFileList(y) || F.endsWith(h, "[]")) && (g = F.toArray(y)))
        return h = Ed(h), g.forEach(function(E, O) {
          !(F.isUndefined(E) || E === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            a === !0 ? Ql([h], O, s) : a === null ? h : h + "[]",
            u(E)
          );
        }), !1;
    }
    return oa(y) ? !0 : (t.append(Ql(m, h, s), u(y)), !1);
  }
  const f = [], p = Object.assign(hm, {
    defaultVisitor: d,
    convertValue: u,
    isVisitable: oa
  });
  function b(y, h) {
    if (!F.isUndefined(y)) {
      if (f.indexOf(y) !== -1)
        throw Error("Circular reference detected in " + h.join("."));
      f.push(y), F.forEach(y, function(g, C) {
        (!(F.isUndefined(g) || g === null) && i.call(
          t,
          g,
          F.isString(C) ? C.trim() : C,
          h,
          p
        )) === !0 && b(g, h ? h.concat(C) : [C]);
      }), f.pop();
    }
  }
  if (!F.isObject(e))
    throw new TypeError("data must be an object");
  return b(e), t;
}
function Xl(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function(r) {
    return t[r];
  });
}
function Ha(e, t) {
  this._pairs = [], e && Ji(e, this, t);
}
const Od = Ha.prototype;
Od.append = function(t, n) {
  this._pairs.push([t, n]);
};
Od.toString = function(t) {
  const n = t ? function(r) {
    return t.call(this, r, Xl);
  } : Xl;
  return this._pairs.map(function(i) {
    return n(i[0]) + "=" + n(i[1]);
  }, "").join("&");
};
function mm(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function wd(e, t, n) {
  if (!t)
    return e;
  const r = n && n.encode || mm, i = n && n.serialize;
  let s;
  if (i ? s = i(t, n) : s = F.isURLSearchParams(t) ? t.toString() : new Ha(t, n).toString(r), s) {
    const a = e.indexOf("#");
    a !== -1 && (e = e.slice(0, a)), e += (e.indexOf("?") === -1 ? "?" : "&") + s;
  }
  return e;
}
class Jl {
  constructor() {
    this.handlers = [];
  }
  /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */
  use(t, n, r) {
    return this.handlers.push({
      fulfilled: t,
      rejected: n,
      synchronous: r ? r.synchronous : !1,
      runWhen: r ? r.runWhen : null
    }), this.handlers.length - 1;
  }
  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
   */
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
  }
  /**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */
  clear() {
    this.handlers && (this.handlers = []);
  }
  /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */
  forEach(t) {
    F.forEach(this.handlers, function(r) {
      r !== null && t(r);
    });
  }
}
const Td = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, ym = typeof URLSearchParams < "u" ? URLSearchParams : Ha, bm = typeof FormData < "u" ? FormData : null, vm = typeof Blob < "u" ? Blob : null, gm = {
  isBrowser: !0,
  classes: {
    URLSearchParams: ym,
    FormData: bm,
    Blob: vm
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, Cd = typeof window < "u" && typeof document < "u", xm = ((e) => Cd && ["ReactNative", "NativeScript", "NS"].indexOf(e) < 0)(typeof navigator < "u" && navigator.product), Em = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", Om = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: Cd,
  hasStandardBrowserEnv: xm,
  hasStandardBrowserWebWorkerEnv: Em
}, Symbol.toStringTag, { value: "Module" })), pn = {
  ...Om,
  ...gm
};
function wm(e, t) {
  return Ji(e, new pn.classes.URLSearchParams(), Object.assign({
    visitor: function(n, r, i, s) {
      return pn.isNode && F.isBuffer(n) ? (this.append(r, n.toString("base64")), !1) : s.defaultVisitor.apply(this, arguments);
    }
  }, t));
}
function Tm(e) {
  return F.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function Cm(e) {
  const t = {}, n = Object.keys(e);
  let r;
  const i = n.length;
  let s;
  for (r = 0; r < i; r++)
    s = n[r], t[s] = e[s];
  return t;
}
function Sd(e) {
  function t(n, r, i, s) {
    let a = n[s++];
    if (a === "__proto__")
      return !0;
    const l = Number.isFinite(+a), c = s >= n.length;
    return a = !a && F.isArray(i) ? i.length : a, c ? (F.hasOwnProp(i, a) ? i[a] = [i[a], r] : i[a] = r, !l) : ((!i[a] || !F.isObject(i[a])) && (i[a] = []), t(n, r, i[a], s) && F.isArray(i[a]) && (i[a] = Cm(i[a])), !l);
  }
  if (F.isFormData(e) && F.isFunction(e.entries)) {
    const n = {};
    return F.forEachEntry(e, (r, i) => {
      t(Tm(r), i, n, 0);
    }), n;
  }
  return null;
}
function Sm(e, t, n) {
  if (F.isString(e))
    try {
      return (t || JSON.parse)(e), F.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError")
        throw r;
    }
  return (n || JSON.stringify)(e);
}
const Ka = {
  transitional: Td,
  adapter: ["xhr", "http"],
  transformRequest: [function(t, n) {
    const r = n.getContentType() || "", i = r.indexOf("application/json") > -1, s = F.isObject(t);
    if (s && F.isHTMLForm(t) && (t = new FormData(t)), F.isFormData(t))
      return i ? JSON.stringify(Sd(t)) : t;
    if (F.isArrayBuffer(t) || F.isBuffer(t) || F.isStream(t) || F.isFile(t) || F.isBlob(t))
      return t;
    if (F.isArrayBufferView(t))
      return t.buffer;
    if (F.isURLSearchParams(t))
      return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let l;
    if (s) {
      if (r.indexOf("application/x-www-form-urlencoded") > -1)
        return wm(t, this.formSerializer).toString();
      if ((l = F.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
        const c = this.env && this.env.FormData;
        return Ji(
          l ? { "files[]": t } : t,
          c && new c(),
          this.formSerializer
        );
      }
    }
    return s || i ? (n.setContentType("application/json", !1), Sm(t)) : t;
  }],
  transformResponse: [function(t) {
    const n = this.transitional || Ka.transitional, r = n && n.forcedJSONParsing, i = this.responseType === "json";
    if (t && F.isString(t) && (r && !this.responseType || i)) {
      const a = !(n && n.silentJSONParsing) && i;
      try {
        return JSON.parse(t);
      } catch (l) {
        if (a)
          throw l.name === "SyntaxError" ? ke.from(l, ke.ERR_BAD_RESPONSE, this, null, this.response) : l;
      }
    }
    return t;
  }],
  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: pn.classes.FormData,
    Blob: pn.classes.Blob
  },
  validateStatus: function(t) {
    return t >= 200 && t < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0
    }
  }
};
F.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  Ka.headers[e] = {};
});
const Ya = Ka, Rm = F.toObjectSet([
  "age",
  "authorization",
  "content-length",
  "content-type",
  "etag",
  "expires",
  "from",
  "host",
  "if-modified-since",
  "if-unmodified-since",
  "last-modified",
  "location",
  "max-forwards",
  "proxy-authorization",
  "referer",
  "retry-after",
  "user-agent"
]), Pm = (e) => {
  const t = {};
  let n, r, i;
  return e && e.split(`
`).forEach(function(a) {
    i = a.indexOf(":"), n = a.substring(0, i).trim().toLowerCase(), r = a.substring(i + 1).trim(), !(!n || t[n] && Rm[n]) && (n === "set-cookie" ? t[n] ? t[n].push(r) : t[n] = [r] : t[n] = t[n] ? t[n] + ", " + r : r);
  }), t;
}, Zl = Symbol("internals");
function ro(e) {
  return e && String(e).trim().toLowerCase();
}
function Oi(e) {
  return e === !1 || e == null ? e : F.isArray(e) ? e.map(Oi) : String(e);
}
function $m(e) {
  const t = /* @__PURE__ */ Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; r = n.exec(e); )
    t[r[1]] = r[2];
  return t;
}
const _m = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function Is(e, t, n, r, i) {
  if (F.isFunction(r))
    return r.call(this, t, n);
  if (i && (t = n), !!F.isString(t)) {
    if (F.isString(r))
      return t.indexOf(r) !== -1;
    if (F.isRegExp(r))
      return r.test(t);
  }
}
function km(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function Nm(e, t) {
  const n = F.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(e, r + n, {
      value: function(i, s, a) {
        return this[r].call(this, t, i, s, a);
      },
      configurable: !0
    });
  });
}
class Zi {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const i = this;
    function s(l, c, u) {
      const d = ro(c);
      if (!d)
        throw new Error("header name must be a non-empty string");
      const f = F.findKey(i, d);
      (!f || i[f] === void 0 || u === !0 || u === void 0 && i[f] !== !1) && (i[f || c] = Oi(l));
    }
    const a = (l, c) => F.forEach(l, (u, d) => s(u, d, c));
    return F.isPlainObject(t) || t instanceof this.constructor ? a(t, n) : F.isString(t) && (t = t.trim()) && !_m(t) ? a(Pm(t), n) : t != null && s(n, t, r), this;
  }
  get(t, n) {
    if (t = ro(t), t) {
      const r = F.findKey(this, t);
      if (r) {
        const i = this[r];
        if (!n)
          return i;
        if (n === !0)
          return $m(i);
        if (F.isFunction(n))
          return n.call(this, i, r);
        if (F.isRegExp(n))
          return n.exec(i);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (t = ro(t), t) {
      const r = F.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || Is(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let i = !1;
    function s(a) {
      if (a = ro(a), a) {
        const l = F.findKey(r, a);
        l && (!n || Is(r, r[l], l, n)) && (delete r[l], i = !0);
      }
    }
    return F.isArray(t) ? t.forEach(s) : s(t), i;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length, i = !1;
    for (; r--; ) {
      const s = n[r];
      (!t || Is(this, this[s], s, t, !0)) && (delete this[s], i = !0);
    }
    return i;
  }
  normalize(t) {
    const n = this, r = {};
    return F.forEach(this, (i, s) => {
      const a = F.findKey(r, s);
      if (a) {
        n[a] = Oi(i), delete n[s];
        return;
      }
      const l = t ? km(s) : String(s).trim();
      l !== s && delete n[s], n[l] = Oi(i), r[l] = !0;
    }), this;
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const n = /* @__PURE__ */ Object.create(null);
    return F.forEach(this, (r, i) => {
      r != null && r !== !1 && (n[i] = t && F.isArray(r) ? r.join(", ") : r);
    }), n;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, n]) => t + ": " + n).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...n) {
    const r = new this(t);
    return n.forEach((i) => r.set(i)), r;
  }
  static accessor(t) {
    const r = (this[Zl] = this[Zl] = {
      accessors: {}
    }).accessors, i = this.prototype;
    function s(a) {
      const l = ro(a);
      r[l] || (Nm(i, a), r[l] = !0);
    }
    return F.isArray(t) ? t.forEach(s) : s(t), this;
  }
}
Zi.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
F.reduceDescriptors(Zi.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(r) {
      this[n] = r;
    }
  };
});
F.freezeMethods(Zi);
const wn = Zi;
function As(e, t) {
  const n = this || Ya, r = t || n, i = wn.from(r.headers);
  let s = r.data;
  return F.forEach(e, function(l) {
    s = l.call(n, s, i.normalize(), t ? t.status : void 0);
  }), i.normalize(), s;
}
function Rd(e) {
  return !!(e && e.__CANCEL__);
}
function qo(e, t, n) {
  ke.call(this, e ?? "canceled", ke.ERR_CANCELED, t, n), this.name = "CanceledError";
}
F.inherits(qo, ke, {
  __CANCEL__: !0
});
function Im(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status) ? e(n) : t(new ke(
    "Request failed with status code " + n.status,
    [ke.ERR_BAD_REQUEST, ke.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],
    n.config,
    n.request,
    n
  ));
}
const Am = pn.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(e, t, n, r, i, s) {
      const a = [e + "=" + encodeURIComponent(t)];
      F.isNumber(n) && a.push("expires=" + new Date(n).toGMTString()), F.isString(r) && a.push("path=" + r), F.isString(i) && a.push("domain=" + i), s === !0 && a.push("secure"), document.cookie = a.join("; ");
    },
    read(e) {
      const t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
      return t ? decodeURIComponent(t[3]) : null;
    },
    remove(e) {
      this.write(e, "", Date.now() - 864e5);
    }
  }
) : (
  // Non-standard browser env (web workers, react-native) lack needed support.
  {
    write() {
    },
    read() {
      return null;
    },
    remove() {
    }
  }
);
function jm(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function Mm(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function Pd(e, t) {
  return e && !jm(t) ? Mm(e, t) : t;
}
const Dm = pn.hasStandardBrowserEnv ? (
  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  function() {
    const t = /(msie|trident)/i.test(navigator.userAgent), n = document.createElement("a");
    let r;
    function i(s) {
      let a = s;
      return t && (n.setAttribute("href", a), a = n.href), n.setAttribute("href", a), {
        href: n.href,
        protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
        host: n.host,
        search: n.search ? n.search.replace(/^\?/, "") : "",
        hash: n.hash ? n.hash.replace(/^#/, "") : "",
        hostname: n.hostname,
        port: n.port,
        pathname: n.pathname.charAt(0) === "/" ? n.pathname : "/" + n.pathname
      };
    }
    return r = i(window.location.href), function(a) {
      const l = F.isString(a) ? i(a) : a;
      return l.protocol === r.protocol && l.host === r.host;
    };
  }()
) : (
  // Non standard browser envs (web workers, react-native) lack needed support.
  /* @__PURE__ */ function() {
    return function() {
      return !0;
    };
  }()
);
function Fm(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function Lm(e, t) {
  e = e || 10;
  const n = new Array(e), r = new Array(e);
  let i = 0, s = 0, a;
  return t = t !== void 0 ? t : 1e3, function(c) {
    const u = Date.now(), d = r[s];
    a || (a = u), n[i] = c, r[i] = u;
    let f = s, p = 0;
    for (; f !== i; )
      p += n[f++], f = f % e;
    if (i = (i + 1) % e, i === s && (s = (s + 1) % e), u - a < t)
      return;
    const b = d && u - d;
    return b ? Math.round(p * 1e3 / b) : void 0;
  };
}
function ec(e, t) {
  let n = 0;
  const r = Lm(50, 250);
  return (i) => {
    const s = i.loaded, a = i.lengthComputable ? i.total : void 0, l = s - n, c = r(l), u = s <= a;
    n = s;
    const d = {
      loaded: s,
      total: a,
      progress: a ? s / a : void 0,
      bytes: l,
      rate: c || void 0,
      estimated: c && a && u ? (a - s) / c : void 0,
      event: i
    };
    d[t ? "download" : "upload"] = !0, e(d);
  };
}
const Bm = typeof XMLHttpRequest < "u", Vm = Bm && function(e) {
  return new Promise(function(n, r) {
    let i = e.data;
    const s = wn.from(e.headers).normalize();
    let { responseType: a, withXSRFToken: l } = e, c;
    function u() {
      e.cancelToken && e.cancelToken.unsubscribe(c), e.signal && e.signal.removeEventListener("abort", c);
    }
    let d;
    if (F.isFormData(i)) {
      if (pn.hasStandardBrowserEnv || pn.hasStandardBrowserWebWorkerEnv)
        s.setContentType(!1);
      else if ((d = s.getContentType()) !== !1) {
        const [h, ...m] = d ? d.split(";").map((g) => g.trim()).filter(Boolean) : [];
        s.setContentType([h || "multipart/form-data", ...m].join("; "));
      }
    }
    let f = new XMLHttpRequest();
    if (e.auth) {
      const h = e.auth.username || "", m = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : "";
      s.set("Authorization", "Basic " + btoa(h + ":" + m));
    }
    const p = Pd(e.baseURL, e.url);
    f.open(e.method.toUpperCase(), wd(p, e.params, e.paramsSerializer), !0), f.timeout = e.timeout;
    function b() {
      if (!f)
        return;
      const h = wn.from(
        "getAllResponseHeaders" in f && f.getAllResponseHeaders()
      ), g = {
        data: !a || a === "text" || a === "json" ? f.responseText : f.response,
        status: f.status,
        statusText: f.statusText,
        headers: h,
        config: e,
        request: f
      };
      Im(function(E) {
        n(E), u();
      }, function(E) {
        r(E), u();
      }, g), f = null;
    }
    if ("onloadend" in f ? f.onloadend = b : f.onreadystatechange = function() {
      !f || f.readyState !== 4 || f.status === 0 && !(f.responseURL && f.responseURL.indexOf("file:") === 0) || setTimeout(b);
    }, f.onabort = function() {
      f && (r(new ke("Request aborted", ke.ECONNABORTED, e, f)), f = null);
    }, f.onerror = function() {
      r(new ke("Network Error", ke.ERR_NETWORK, e, f)), f = null;
    }, f.ontimeout = function() {
      let m = e.timeout ? "timeout of " + e.timeout + "ms exceeded" : "timeout exceeded";
      const g = e.transitional || Td;
      e.timeoutErrorMessage && (m = e.timeoutErrorMessage), r(new ke(
        m,
        g.clarifyTimeoutError ? ke.ETIMEDOUT : ke.ECONNABORTED,
        e,
        f
      )), f = null;
    }, pn.hasStandardBrowserEnv && (l && F.isFunction(l) && (l = l(e)), l || l !== !1 && Dm(p))) {
      const h = e.xsrfHeaderName && e.xsrfCookieName && Am.read(e.xsrfCookieName);
      h && s.set(e.xsrfHeaderName, h);
    }
    i === void 0 && s.setContentType(null), "setRequestHeader" in f && F.forEach(s.toJSON(), function(m, g) {
      f.setRequestHeader(g, m);
    }), F.isUndefined(e.withCredentials) || (f.withCredentials = !!e.withCredentials), a && a !== "json" && (f.responseType = e.responseType), typeof e.onDownloadProgress == "function" && f.addEventListener("progress", ec(e.onDownloadProgress, !0)), typeof e.onUploadProgress == "function" && f.upload && f.upload.addEventListener("progress", ec(e.onUploadProgress)), (e.cancelToken || e.signal) && (c = (h) => {
      f && (r(!h || h.type ? new qo(null, e, f) : h), f.abort(), f = null);
    }, e.cancelToken && e.cancelToken.subscribe(c), e.signal && (e.signal.aborted ? c() : e.signal.addEventListener("abort", c)));
    const y = Fm(p);
    if (y && pn.protocols.indexOf(y) === -1) {
      r(new ke("Unsupported protocol " + y + ":", ke.ERR_BAD_REQUEST, e));
      return;
    }
    f.send(i || null);
  });
}, ia = {
  http: fm,
  xhr: Vm
};
F.forEach(ia, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const tc = (e) => `- ${e}`, Um = (e) => F.isFunction(e) || e === null || e === !1, $d = {
  getAdapter: (e) => {
    e = F.isArray(e) ? e : [e];
    const { length: t } = e;
    let n, r;
    const i = {};
    for (let s = 0; s < t; s++) {
      n = e[s];
      let a;
      if (r = n, !Um(n) && (r = ia[(a = String(n)).toLowerCase()], r === void 0))
        throw new ke(`Unknown adapter '${a}'`);
      if (r)
        break;
      i[a || "#" + s] = r;
    }
    if (!r) {
      const s = Object.entries(i).map(
        ([l, c]) => `adapter ${l} ` + (c === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let a = t ? s.length > 1 ? `since :
` + s.map(tc).join(`
`) : " " + tc(s[0]) : "as no adapter specified";
      throw new ke(
        "There is no suitable adapter to dispatch the request " + a,
        "ERR_NOT_SUPPORT"
      );
    }
    return r;
  },
  adapters: ia
};
function js(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new qo(null, e);
}
function nc(e) {
  return js(e), e.headers = wn.from(e.headers), e.data = As.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), $d.getAdapter(e.adapter || Ya.adapter)(e).then(function(r) {
    return js(e), r.data = As.call(
      e,
      e.transformResponse,
      r
    ), r.headers = wn.from(r.headers), r;
  }, function(r) {
    return Rd(r) || (js(e), r && r.response && (r.response.data = As.call(
      e,
      e.transformResponse,
      r.response
    ), r.response.headers = wn.from(r.response.headers))), Promise.reject(r);
  });
}
const rc = (e) => e instanceof wn ? { ...e } : e;
function Dr(e, t) {
  t = t || {};
  const n = {};
  function r(u, d, f) {
    return F.isPlainObject(u) && F.isPlainObject(d) ? F.merge.call({ caseless: f }, u, d) : F.isPlainObject(d) ? F.merge({}, d) : F.isArray(d) ? d.slice() : d;
  }
  function i(u, d, f) {
    if (F.isUndefined(d)) {
      if (!F.isUndefined(u))
        return r(void 0, u, f);
    } else
      return r(u, d, f);
  }
  function s(u, d) {
    if (!F.isUndefined(d))
      return r(void 0, d);
  }
  function a(u, d) {
    if (F.isUndefined(d)) {
      if (!F.isUndefined(u))
        return r(void 0, u);
    } else
      return r(void 0, d);
  }
  function l(u, d, f) {
    if (f in t)
      return r(u, d);
    if (f in e)
      return r(void 0, u);
  }
  const c = {
    url: s,
    method: s,
    data: s,
    baseURL: a,
    transformRequest: a,
    transformResponse: a,
    paramsSerializer: a,
    timeout: a,
    timeoutMessage: a,
    withCredentials: a,
    withXSRFToken: a,
    adapter: a,
    responseType: a,
    xsrfCookieName: a,
    xsrfHeaderName: a,
    onUploadProgress: a,
    onDownloadProgress: a,
    decompress: a,
    maxContentLength: a,
    maxBodyLength: a,
    beforeRedirect: a,
    transport: a,
    httpAgent: a,
    httpsAgent: a,
    cancelToken: a,
    socketPath: a,
    responseEncoding: a,
    validateStatus: l,
    headers: (u, d) => i(rc(u), rc(d), !0)
  };
  return F.forEach(Object.keys(Object.assign({}, e, t)), function(d) {
    const f = c[d] || i, p = f(e[d], t[d], d);
    F.isUndefined(p) && f !== l || (n[d] = p);
  }), n;
}
const _d = "1.6.8", Ga = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  Ga[e] = function(r) {
    return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const oc = {};
Ga.transitional = function(t, n, r) {
  function i(s, a) {
    return "[Axios v" + _d + "] Transitional option '" + s + "'" + a + (r ? ". " + r : "");
  }
  return (s, a, l) => {
    if (t === !1)
      throw new ke(
        i(a, " has been removed" + (n ? " in " + n : "")),
        ke.ERR_DEPRECATED
      );
    return n && !oc[a] && (oc[a] = !0, console.warn(
      i(
        a,
        " has been deprecated since v" + n + " and will be removed in the near future"
      )
    )), t ? t(s, a, l) : !0;
  };
};
function zm(e, t, n) {
  if (typeof e != "object")
    throw new ke("options must be an object", ke.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let i = r.length;
  for (; i-- > 0; ) {
    const s = r[i], a = t[s];
    if (a) {
      const l = e[s], c = l === void 0 || a(l, s, e);
      if (c !== !0)
        throw new ke("option " + s + " must be " + c, ke.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0)
      throw new ke("Unknown option " + s, ke.ERR_BAD_OPTION);
  }
}
const sa = {
  assertOptions: zm,
  validators: Ga
}, kn = sa.validators;
class Ii {
  constructor(t) {
    this.defaults = t, this.interceptors = {
      request: new Jl(),
      response: new Jl()
    };
  }
  /**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */
  async request(t, n) {
    try {
      return await this._request(t, n);
    } catch (r) {
      if (r instanceof Error) {
        let i;
        Error.captureStackTrace ? Error.captureStackTrace(i = {}) : i = new Error();
        const s = i.stack ? i.stack.replace(/^.+\n/, "") : "";
        r.stack ? s && !String(r.stack).endsWith(s.replace(/^.+\n.+\n/, "")) && (r.stack += `
` + s) : r.stack = s;
      }
      throw r;
    }
  }
  _request(t, n) {
    typeof t == "string" ? (n = n || {}, n.url = t) : n = t || {}, n = Dr(this.defaults, n);
    const { transitional: r, paramsSerializer: i, headers: s } = n;
    r !== void 0 && sa.assertOptions(r, {
      silentJSONParsing: kn.transitional(kn.boolean),
      forcedJSONParsing: kn.transitional(kn.boolean),
      clarifyTimeoutError: kn.transitional(kn.boolean)
    }, !1), i != null && (F.isFunction(i) ? n.paramsSerializer = {
      serialize: i
    } : sa.assertOptions(i, {
      encode: kn.function,
      serialize: kn.function
    }, !0)), n.method = (n.method || this.defaults.method || "get").toLowerCase();
    let a = s && F.merge(
      s.common,
      s[n.method]
    );
    s && F.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (y) => {
        delete s[y];
      }
    ), n.headers = wn.concat(a, s);
    const l = [];
    let c = !0;
    this.interceptors.request.forEach(function(h) {
      typeof h.runWhen == "function" && h.runWhen(n) === !1 || (c = c && h.synchronous, l.unshift(h.fulfilled, h.rejected));
    });
    const u = [];
    this.interceptors.response.forEach(function(h) {
      u.push(h.fulfilled, h.rejected);
    });
    let d, f = 0, p;
    if (!c) {
      const y = [nc.bind(this), void 0];
      for (y.unshift.apply(y, l), y.push.apply(y, u), p = y.length, d = Promise.resolve(n); f < p; )
        d = d.then(y[f++], y[f++]);
      return d;
    }
    p = l.length;
    let b = n;
    for (f = 0; f < p; ) {
      const y = l[f++], h = l[f++];
      try {
        b = y(b);
      } catch (m) {
        h.call(this, m);
        break;
      }
    }
    try {
      d = nc.call(this, b);
    } catch (y) {
      return Promise.reject(y);
    }
    for (f = 0, p = u.length; f < p; )
      d = d.then(u[f++], u[f++]);
    return d;
  }
  getUri(t) {
    t = Dr(this.defaults, t);
    const n = Pd(t.baseURL, t.url);
    return wd(n, t.params, t.paramsSerializer);
  }
}
F.forEach(["delete", "get", "head", "options"], function(t) {
  Ii.prototype[t] = function(n, r) {
    return this.request(Dr(r || {}, {
      method: t,
      url: n,
      data: (r || {}).data
    }));
  };
});
F.forEach(["post", "put", "patch"], function(t) {
  function n(r) {
    return function(s, a, l) {
      return this.request(Dr(l || {}, {
        method: t,
        headers: r ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: s,
        data: a
      }));
    };
  }
  Ii.prototype[t] = n(), Ii.prototype[t + "Form"] = n(!0);
});
const wi = Ii;
class Qa {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let n;
    this.promise = new Promise(function(s) {
      n = s;
    });
    const r = this;
    this.promise.then((i) => {
      if (!r._listeners)
        return;
      let s = r._listeners.length;
      for (; s-- > 0; )
        r._listeners[s](i);
      r._listeners = null;
    }), this.promise.then = (i) => {
      let s;
      const a = new Promise((l) => {
        r.subscribe(l), s = l;
      }).then(i);
      return a.cancel = function() {
        r.unsubscribe(s);
      }, a;
    }, t(function(s, a, l) {
      r.reason || (r.reason = new qo(s, a, l), n(r.reason));
    });
  }
  /**
   * Throws a `CanceledError` if cancellation has been requested.
   */
  throwIfRequested() {
    if (this.reason)
      throw this.reason;
  }
  /**
   * Subscribe to the cancel signal
   */
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : this._listeners = [t];
  }
  /**
   * Unsubscribe from the cancel signal
   */
  unsubscribe(t) {
    if (!this._listeners)
      return;
    const n = this._listeners.indexOf(t);
    n !== -1 && this._listeners.splice(n, 1);
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let t;
    return {
      token: new Qa(function(i) {
        t = i;
      }),
      cancel: t
    };
  }
}
const Wm = Qa;
function qm(e) {
  return function(n) {
    return e.apply(null, n);
  };
}
function Hm(e) {
  return F.isObject(e) && e.isAxiosError === !0;
}
const aa = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511
};
Object.entries(aa).forEach(([e, t]) => {
  aa[t] = e;
});
const Km = aa;
function kd(e) {
  const t = new wi(e), n = dd(wi.prototype.request, t);
  return F.extend(n, wi.prototype, t, { allOwnKeys: !0 }), F.extend(n, t, null, { allOwnKeys: !0 }), n.create = function(i) {
    return kd(Dr(e, i));
  }, n;
}
const lt = kd(Ya);
lt.Axios = wi;
lt.CanceledError = qo;
lt.CancelToken = Wm;
lt.isCancel = Rd;
lt.VERSION = _d;
lt.toFormData = Ji;
lt.AxiosError = ke;
lt.Cancel = lt.CanceledError;
lt.all = function(t) {
  return Promise.all(t);
};
lt.spread = qm;
lt.isAxiosError = Hm;
lt.mergeConfig = Dr;
lt.AxiosHeaders = wn;
lt.formToJSON = (e) => Sd(F.isHTMLForm(e) ? new FormData(e) : e);
lt.getAdapter = $d.getAdapter;
lt.HttpStatusCode = Km;
lt.default = lt;
var la = function(e, t) {
  return la = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, r) {
    n.__proto__ = r;
  } || function(n, r) {
    for (var i in r)
      Object.prototype.hasOwnProperty.call(r, i) && (n[i] = r[i]);
  }, la(e, t);
};
function Ho(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
  la(e, t);
  function n() {
    this.constructor = e;
  }
  e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
}
function ca(e) {
  var t = typeof Symbol == "function" && Symbol.iterator, n = t && e[t], r = 0;
  if (n)
    return n.call(e);
  if (e && typeof e.length == "number")
    return {
      next: function() {
        return e && r >= e.length && (e = void 0), { value: e && e[r++], done: !e };
      }
    };
  throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function ua(e, t) {
  var n = typeof Symbol == "function" && e[Symbol.iterator];
  if (!n)
    return e;
  var r = n.call(e), i, s = [], a;
  try {
    for (; (t === void 0 || t-- > 0) && !(i = r.next()).done; )
      s.push(i.value);
  } catch (l) {
    a = { error: l };
  } finally {
    try {
      i && !i.done && (n = r.return) && n.call(r);
    } finally {
      if (a)
        throw a.error;
    }
  }
  return s;
}
function da(e, t, n) {
  if (n || arguments.length === 2)
    for (var r = 0, i = t.length, s; r < i; r++)
      (s || !(r in t)) && (s || (s = Array.prototype.slice.call(t, 0, r)), s[r] = t[r]);
  return e.concat(s || Array.prototype.slice.call(t));
}
function Tn(e) {
  return typeof e == "function";
}
function Nd(e) {
  var t = function(r) {
    Error.call(r), r.stack = new Error().stack;
  }, n = e(t);
  return n.prototype = Object.create(Error.prototype), n.prototype.constructor = n, n;
}
var Ms = Nd(function(e) {
  return function(n) {
    e(this), this.message = n ? n.length + ` errors occurred during unsubscription:
` + n.map(function(r, i) {
      return i + 1 + ") " + r.toString();
    }).join(`
  `) : "", this.name = "UnsubscriptionError", this.errors = n;
  };
});
function fa(e, t) {
  if (e) {
    var n = e.indexOf(t);
    0 <= n && e.splice(n, 1);
  }
}
var es = function() {
  function e(t) {
    this.initialTeardown = t, this.closed = !1, this._parentage = null, this._finalizers = null;
  }
  return e.prototype.unsubscribe = function() {
    var t, n, r, i, s;
    if (!this.closed) {
      this.closed = !0;
      var a = this._parentage;
      if (a)
        if (this._parentage = null, Array.isArray(a))
          try {
            for (var l = ca(a), c = l.next(); !c.done; c = l.next()) {
              var u = c.value;
              u.remove(this);
            }
          } catch (h) {
            t = { error: h };
          } finally {
            try {
              c && !c.done && (n = l.return) && n.call(l);
            } finally {
              if (t)
                throw t.error;
            }
          }
        else
          a.remove(this);
      var d = this.initialTeardown;
      if (Tn(d))
        try {
          d();
        } catch (h) {
          s = h instanceof Ms ? h.errors : [h];
        }
      var f = this._finalizers;
      if (f) {
        this._finalizers = null;
        try {
          for (var p = ca(f), b = p.next(); !b.done; b = p.next()) {
            var y = b.value;
            try {
              ic(y);
            } catch (h) {
              s = s ?? [], h instanceof Ms ? s = da(da([], ua(s)), ua(h.errors)) : s.push(h);
            }
          }
        } catch (h) {
          r = { error: h };
        } finally {
          try {
            b && !b.done && (i = p.return) && i.call(p);
          } finally {
            if (r)
              throw r.error;
          }
        }
      }
      if (s)
        throw new Ms(s);
    }
  }, e.prototype.add = function(t) {
    var n;
    if (t && t !== this)
      if (this.closed)
        ic(t);
      else {
        if (t instanceof e) {
          if (t.closed || t._hasParent(this))
            return;
          t._addParent(this);
        }
        (this._finalizers = (n = this._finalizers) !== null && n !== void 0 ? n : []).push(t);
      }
  }, e.prototype._hasParent = function(t) {
    var n = this._parentage;
    return n === t || Array.isArray(n) && n.includes(t);
  }, e.prototype._addParent = function(t) {
    var n = this._parentage;
    this._parentage = Array.isArray(n) ? (n.push(t), n) : n ? [n, t] : t;
  }, e.prototype._removeParent = function(t) {
    var n = this._parentage;
    n === t ? this._parentage = null : Array.isArray(n) && fa(n, t);
  }, e.prototype.remove = function(t) {
    var n = this._finalizers;
    n && fa(n, t), t instanceof e && t._removeParent(this);
  }, e.EMPTY = function() {
    var t = new e();
    return t.closed = !0, t;
  }(), e;
}(), Id = es.EMPTY;
function Ad(e) {
  return e instanceof es || e && "closed" in e && Tn(e.remove) && Tn(e.add) && Tn(e.unsubscribe);
}
function ic(e) {
  Tn(e) ? e() : e.unsubscribe();
}
var jd = {
  onUnhandledError: null,
  onStoppedNotification: null,
  Promise: void 0,
  useDeprecatedSynchronousErrorHandling: !1,
  useDeprecatedNextContext: !1
}, Md = {
  setTimeout: function(e, t) {
    for (var n = [], r = 2; r < arguments.length; r++)
      n[r - 2] = arguments[r];
    return setTimeout.apply(void 0, da([e, t], ua(n)));
  },
  clearTimeout: function(e) {
    var t = Md.delegate;
    return ((t == null ? void 0 : t.clearTimeout) || clearTimeout)(e);
  },
  delegate: void 0
};
function Ym(e) {
  Md.setTimeout(function() {
    throw e;
  });
}
function sc() {
}
function Ti(e) {
  e();
}
var Dd = function(e) {
  Ho(t, e);
  function t(n) {
    var r = e.call(this) || this;
    return r.isStopped = !1, n ? (r.destination = n, Ad(n) && n.add(r)) : r.destination = Jm, r;
  }
  return t.create = function(n, r, i) {
    return new pa(n, r, i);
  }, t.prototype.next = function(n) {
    this.isStopped || this._next(n);
  }, t.prototype.error = function(n) {
    this.isStopped || (this.isStopped = !0, this._error(n));
  }, t.prototype.complete = function() {
    this.isStopped || (this.isStopped = !0, this._complete());
  }, t.prototype.unsubscribe = function() {
    this.closed || (this.isStopped = !0, e.prototype.unsubscribe.call(this), this.destination = null);
  }, t.prototype._next = function(n) {
    this.destination.next(n);
  }, t.prototype._error = function(n) {
    try {
      this.destination.error(n);
    } finally {
      this.unsubscribe();
    }
  }, t.prototype._complete = function() {
    try {
      this.destination.complete();
    } finally {
      this.unsubscribe();
    }
  }, t;
}(es), Gm = Function.prototype.bind;
function Ds(e, t) {
  return Gm.call(e, t);
}
var Qm = function() {
  function e(t) {
    this.partialObserver = t;
  }
  return e.prototype.next = function(t) {
    var n = this.partialObserver;
    if (n.next)
      try {
        n.next(t);
      } catch (r) {
        ui(r);
      }
  }, e.prototype.error = function(t) {
    var n = this.partialObserver;
    if (n.error)
      try {
        n.error(t);
      } catch (r) {
        ui(r);
      }
    else
      ui(t);
  }, e.prototype.complete = function() {
    var t = this.partialObserver;
    if (t.complete)
      try {
        t.complete();
      } catch (n) {
        ui(n);
      }
  }, e;
}(), pa = function(e) {
  Ho(t, e);
  function t(n, r, i) {
    var s = e.call(this) || this, a;
    if (Tn(n) || !n)
      a = {
        next: n ?? void 0,
        error: r ?? void 0,
        complete: i ?? void 0
      };
    else {
      var l;
      s && jd.useDeprecatedNextContext ? (l = Object.create(n), l.unsubscribe = function() {
        return s.unsubscribe();
      }, a = {
        next: n.next && Ds(n.next, l),
        error: n.error && Ds(n.error, l),
        complete: n.complete && Ds(n.complete, l)
      }) : a = n;
    }
    return s.destination = new Qm(a), s;
  }
  return t;
}(Dd);
function ui(e) {
  Ym(e);
}
function Xm(e) {
  throw e;
}
var Jm = {
  closed: !0,
  next: sc,
  error: Xm,
  complete: sc
}, Zm = function() {
  return typeof Symbol == "function" && Symbol.observable || "@@observable";
}();
function ey(e) {
  return e;
}
function ty(e) {
  return e.length === 0 ? ey : e.length === 1 ? e[0] : function(n) {
    return e.reduce(function(r, i) {
      return i(r);
    }, n);
  };
}
var ac = function() {
  function e(t) {
    t && (this._subscribe = t);
  }
  return e.prototype.lift = function(t) {
    var n = new e();
    return n.source = this, n.operator = t, n;
  }, e.prototype.subscribe = function(t, n, r) {
    var i = this, s = ry(t) ? t : new pa(t, n, r);
    return Ti(function() {
      var a = i, l = a.operator, c = a.source;
      s.add(l ? l.call(s, c) : c ? i._subscribe(s) : i._trySubscribe(s));
    }), s;
  }, e.prototype._trySubscribe = function(t) {
    try {
      return this._subscribe(t);
    } catch (n) {
      t.error(n);
    }
  }, e.prototype.forEach = function(t, n) {
    var r = this;
    return n = lc(n), new n(function(i, s) {
      var a = new pa({
        next: function(l) {
          try {
            t(l);
          } catch (c) {
            s(c), a.unsubscribe();
          }
        },
        error: s,
        complete: i
      });
      r.subscribe(a);
    });
  }, e.prototype._subscribe = function(t) {
    var n;
    return (n = this.source) === null || n === void 0 ? void 0 : n.subscribe(t);
  }, e.prototype[Zm] = function() {
    return this;
  }, e.prototype.pipe = function() {
    for (var t = [], n = 0; n < arguments.length; n++)
      t[n] = arguments[n];
    return ty(t)(this);
  }, e.prototype.toPromise = function(t) {
    var n = this;
    return t = lc(t), new t(function(r, i) {
      var s;
      n.subscribe(function(a) {
        return s = a;
      }, function(a) {
        return i(a);
      }, function() {
        return r(s);
      });
    });
  }, e.create = function(t) {
    return new e(t);
  }, e;
}();
function lc(e) {
  var t;
  return (t = e ?? jd.Promise) !== null && t !== void 0 ? t : Promise;
}
function ny(e) {
  return e && Tn(e.next) && Tn(e.error) && Tn(e.complete);
}
function ry(e) {
  return e && e instanceof Dd || ny(e) && Ad(e);
}
var oy = Nd(function(e) {
  return function() {
    e(this), this.name = "ObjectUnsubscribedError", this.message = "object unsubscribed";
  };
}), Fd = function(e) {
  Ho(t, e);
  function t() {
    var n = e.call(this) || this;
    return n.closed = !1, n.currentObservers = null, n.observers = [], n.isStopped = !1, n.hasError = !1, n.thrownError = null, n;
  }
  return t.prototype.lift = function(n) {
    var r = new cc(this, this);
    return r.operator = n, r;
  }, t.prototype._throwIfClosed = function() {
    if (this.closed)
      throw new oy();
  }, t.prototype.next = function(n) {
    var r = this;
    Ti(function() {
      var i, s;
      if (r._throwIfClosed(), !r.isStopped) {
        r.currentObservers || (r.currentObservers = Array.from(r.observers));
        try {
          for (var a = ca(r.currentObservers), l = a.next(); !l.done; l = a.next()) {
            var c = l.value;
            c.next(n);
          }
        } catch (u) {
          i = { error: u };
        } finally {
          try {
            l && !l.done && (s = a.return) && s.call(a);
          } finally {
            if (i)
              throw i.error;
          }
        }
      }
    });
  }, t.prototype.error = function(n) {
    var r = this;
    Ti(function() {
      if (r._throwIfClosed(), !r.isStopped) {
        r.hasError = r.isStopped = !0, r.thrownError = n;
        for (var i = r.observers; i.length; )
          i.shift().error(n);
      }
    });
  }, t.prototype.complete = function() {
    var n = this;
    Ti(function() {
      if (n._throwIfClosed(), !n.isStopped) {
        n.isStopped = !0;
        for (var r = n.observers; r.length; )
          r.shift().complete();
      }
    });
  }, t.prototype.unsubscribe = function() {
    this.isStopped = this.closed = !0, this.observers = this.currentObservers = null;
  }, Object.defineProperty(t.prototype, "observed", {
    get: function() {
      var n;
      return ((n = this.observers) === null || n === void 0 ? void 0 : n.length) > 0;
    },
    enumerable: !1,
    configurable: !0
  }), t.prototype._trySubscribe = function(n) {
    return this._throwIfClosed(), e.prototype._trySubscribe.call(this, n);
  }, t.prototype._subscribe = function(n) {
    return this._throwIfClosed(), this._checkFinalizedStatuses(n), this._innerSubscribe(n);
  }, t.prototype._innerSubscribe = function(n) {
    var r = this, i = this, s = i.hasError, a = i.isStopped, l = i.observers;
    return s || a ? Id : (this.currentObservers = null, l.push(n), new es(function() {
      r.currentObservers = null, fa(l, n);
    }));
  }, t.prototype._checkFinalizedStatuses = function(n) {
    var r = this, i = r.hasError, s = r.thrownError, a = r.isStopped;
    i ? n.error(s) : a && n.complete();
  }, t.prototype.asObservable = function() {
    var n = new ac();
    return n.source = this, n;
  }, t.create = function(n, r) {
    return new cc(n, r);
  }, t;
}(ac), cc = function(e) {
  Ho(t, e);
  function t(n, r) {
    var i = e.call(this) || this;
    return i.destination = n, i.source = r, i;
  }
  return t.prototype.next = function(n) {
    var r, i;
    (i = (r = this.destination) === null || r === void 0 ? void 0 : r.next) === null || i === void 0 || i.call(r, n);
  }, t.prototype.error = function(n) {
    var r, i;
    (i = (r = this.destination) === null || r === void 0 ? void 0 : r.error) === null || i === void 0 || i.call(r, n);
  }, t.prototype.complete = function() {
    var n, r;
    (r = (n = this.destination) === null || n === void 0 ? void 0 : n.complete) === null || r === void 0 || r.call(n);
  }, t.prototype._subscribe = function(n) {
    var r, i;
    return (i = (r = this.source) === null || r === void 0 ? void 0 : r.subscribe(n)) !== null && i !== void 0 ? i : Id;
  }, t;
}(Fd), iy = function(e) {
  Ho(t, e);
  function t(n) {
    var r = e.call(this) || this;
    return r._value = n, r;
  }
  return Object.defineProperty(t.prototype, "value", {
    get: function() {
      return this.getValue();
    },
    enumerable: !1,
    configurable: !0
  }), t.prototype._subscribe = function(n) {
    var r = e.prototype._subscribe.call(this, n);
    return !r.closed && n.next(this._value), r;
  }, t.prototype.getValue = function() {
    var n = this, r = n.hasError, i = n.thrownError, s = n._value;
    if (r)
      throw i;
    return this._throwIfClosed(), s;
  }, t.prototype.next = function(n) {
    e.prototype.next.call(this, this._value = n);
  }, t;
}(Fd), Ld = /* @__PURE__ */ ((e) => (e.Navigation = "navigation", e.Service = "service", e.Staff = "staff", e.Customer = "customer", e.Client = "client", e.Application = "application", e))(Ld || {}), Bd = /* @__PURE__ */ ((e) => (e.Redirection = "redirection", e.Initialized = "initialized", e))(Bd || {});
class uc {
  constructor(t = {}) {
    fr(this, "baseURL");
    fr(this, "token");
    fr(this, "defaultHotkey");
    fr(this, "onOpenDialog");
    fr(this, "event");
    this.defaultHotkey = "ctrl+k", t && this.setOptions(t), this.event = new iy({
      entityType: "application",
      type: "initialized"
      /* Initialized */
    }), this.onOpenDialog = () => new Promise((n) => n(null));
  }
  setBaseUrl(t) {
    this.baseURL = t;
  }
  setToken(t) {
    this.token = t;
  }
  setOptions(t) {
    this.baseURL = t == null ? void 0 : t.baseURL, this.token = t == null ? void 0 : t.token;
  }
  broadcast(t) {
    this.event.next(t);
  }
  subscribe(t) {
    return this.event.subscribe(t);
  }
  onOpen(t) {
    this.onOpenDialog = t;
  }
  isReady() {
    return this.token !== void 0 && this.baseURL !== void 0;
  }
  setDefaultHotkey(t) {
    this.defaultHotkey = t;
  }
  getOptions() {
    return {
      baseURL: this.baseURL,
      token: this.token,
      defaultHotkey: this.defaultHotkey
    };
  }
}
const dc = {
  register: () => {
    window.YocaleFinder = window.YocaleFinder || uc;
  },
  getInstance: () => (window.YocaleFinder || (window.YocaleFinder = new uc()), window.YocaleFinder)
}, Ko = {
  ...dc,
  axios: () => {
    const { baseURL: e, token: t } = dc.getInstance().getOptions();
    return lt.create({
      baseURL: e,
      headers: {
        Authorization: t
      }
    });
  }
};
function sy(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function Pn(e) {
  if (e.__esModule)
    return e;
  var t = e.default;
  if (typeof t == "function") {
    var n = function r() {
      return this instanceof r ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments);
    };
    n.prototype = t.prototype;
  } else
    n = {};
  return Object.defineProperty(n, "__esModule", { value: !0 }), Object.keys(e).forEach(function(r) {
    var i = Object.getOwnPropertyDescriptor(e, r);
    Object.defineProperty(n, r, i.get ? i : {
      enumerable: !0,
      get: function() {
        return e[r];
      }
    });
  }), n;
}
var ha = { exports: {} }, oo = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var fc;
function ay() {
  if (fc)
    return oo;
  fc = 1;
  var e = At, t = Symbol.for("react.element"), n = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, i = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, s = { key: !0, ref: !0, __self: !0, __source: !0 };
  function a(l, c, u) {
    var d, f = {}, p = null, b = null;
    u !== void 0 && (p = "" + u), c.key !== void 0 && (p = "" + c.key), c.ref !== void 0 && (b = c.ref);
    for (d in c)
      r.call(c, d) && !s.hasOwnProperty(d) && (f[d] = c[d]);
    if (l && l.defaultProps)
      for (d in c = l.defaultProps, c)
        f[d] === void 0 && (f[d] = c[d]);
    return { $$typeof: t, type: l, key: p, ref: b, props: f, _owner: i.current };
  }
  return oo.Fragment = n, oo.jsx = a, oo.jsxs = a, oo;
}
var io = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var pc;
function ly() {
  return pc || (pc = 1, process.env.NODE_ENV !== "production" && function() {
    var e = At, t = Symbol.for("react.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), l = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), b = Symbol.for("react.offscreen"), y = Symbol.iterator, h = "@@iterator";
    function m(T) {
      if (T === null || typeof T != "object")
        return null;
      var q = y && T[y] || T[h];
      return typeof q == "function" ? q : null;
    }
    var g = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function C(T) {
      {
        for (var q = arguments.length, ee = new Array(q > 1 ? q - 1 : 0), Ee = 1; Ee < q; Ee++)
          ee[Ee - 1] = arguments[Ee];
        E("error", T, ee);
      }
    }
    function E(T, q, ee) {
      {
        var Ee = g.ReactDebugCurrentFrame, _ = Ee.getStackAddendum();
        _ !== "" && (q += "%s", ee = ee.concat([_]));
        var $ = ee.map(function(V) {
          return String(V);
        });
        $.unshift("Warning: " + q), Function.prototype.apply.call(console[T], console, $);
      }
    }
    var O = !1, x = !1, P = !1, R = !1, N = !1, A;
    A = Symbol.for("react.module.reference");
    function L(T) {
      return !!(typeof T == "string" || typeof T == "function" || T === r || T === s || N || T === i || T === u || T === d || R || T === b || O || x || P || typeof T == "object" && T !== null && (T.$$typeof === p || T.$$typeof === f || T.$$typeof === a || T.$$typeof === l || T.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      T.$$typeof === A || T.getModuleId !== void 0));
    }
    function K(T, q, ee) {
      var Ee = T.displayName;
      if (Ee)
        return Ee;
      var _ = q.displayName || q.name || "";
      return _ !== "" ? ee + "(" + _ + ")" : ee;
    }
    function B(T) {
      return T.displayName || "Context";
    }
    function U(T) {
      if (T == null)
        return null;
      if (typeof T.tag == "number" && C("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof T == "function")
        return T.displayName || T.name || null;
      if (typeof T == "string")
        return T;
      switch (T) {
        case r:
          return "Fragment";
        case n:
          return "Portal";
        case s:
          return "Profiler";
        case i:
          return "StrictMode";
        case u:
          return "Suspense";
        case d:
          return "SuspenseList";
      }
      if (typeof T == "object")
        switch (T.$$typeof) {
          case l:
            var q = T;
            return B(q) + ".Consumer";
          case a:
            var ee = T;
            return B(ee._context) + ".Provider";
          case c:
            return K(T, T.render, "ForwardRef");
          case f:
            var Ee = T.displayName || null;
            return Ee !== null ? Ee : U(T.type) || "Memo";
          case p: {
            var _ = T, $ = _._payload, V = _._init;
            try {
              return U(V($));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var z = Object.assign, Y = 0, M, G, W, le, I, X, se;
    function oe() {
    }
    oe.__reactDisabledLog = !0;
    function H() {
      {
        if (Y === 0) {
          M = console.log, G = console.info, W = console.warn, le = console.error, I = console.group, X = console.groupCollapsed, se = console.groupEnd;
          var T = {
            configurable: !0,
            enumerable: !0,
            value: oe,
            writable: !0
          };
          Object.defineProperties(console, {
            info: T,
            log: T,
            warn: T,
            error: T,
            group: T,
            groupCollapsed: T,
            groupEnd: T
          });
        }
        Y++;
      }
    }
    function Z() {
      {
        if (Y--, Y === 0) {
          var T = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: z({}, T, {
              value: M
            }),
            info: z({}, T, {
              value: G
            }),
            warn: z({}, T, {
              value: W
            }),
            error: z({}, T, {
              value: le
            }),
            group: z({}, T, {
              value: I
            }),
            groupCollapsed: z({}, T, {
              value: X
            }),
            groupEnd: z({}, T, {
              value: se
            })
          });
        }
        Y < 0 && C("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var te = g.ReactCurrentDispatcher, ue;
    function J(T, q, ee) {
      {
        if (ue === void 0)
          try {
            throw Error();
          } catch (_) {
            var Ee = _.stack.trim().match(/\n( *(at )?)/);
            ue = Ee && Ee[1] || "";
          }
        return `
` + ue + T;
      }
    }
    var ie = !1, he;
    {
      var me = typeof WeakMap == "function" ? WeakMap : Map;
      he = new me();
    }
    function D(T, q) {
      if (!T || ie)
        return "";
      {
        var ee = he.get(T);
        if (ee !== void 0)
          return ee;
      }
      var Ee;
      ie = !0;
      var _ = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var $;
      $ = te.current, te.current = null, H();
      try {
        if (q) {
          var V = function() {
            throw Error();
          };
          if (Object.defineProperty(V.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(V, []);
            } catch (En) {
              Ee = En;
            }
            Reflect.construct(T, [], V);
          } else {
            try {
              V.call();
            } catch (En) {
              Ee = En;
            }
            T.call(V.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (En) {
            Ee = En;
          }
          T();
        }
      } catch (En) {
        if (En && Ee && typeof En.stack == "string") {
          for (var j = En.stack.split(`
`), pe = Ee.stack.split(`
`), ge = j.length - 1, Se = pe.length - 1; ge >= 1 && Se >= 0 && j[ge] !== pe[Se]; )
            Se--;
          for (; ge >= 1 && Se >= 0; ge--, Se--)
            if (j[ge] !== pe[Se]) {
              if (ge !== 1 || Se !== 1)
                do
                  if (ge--, Se--, Se < 0 || j[ge] !== pe[Se]) {
                    var Ye = `
` + j[ge].replace(" at new ", " at ");
                    return T.displayName && Ye.includes("<anonymous>") && (Ye = Ye.replace("<anonymous>", T.displayName)), typeof T == "function" && he.set(T, Ye), Ye;
                  }
                while (ge >= 1 && Se >= 0);
              break;
            }
        }
      } finally {
        ie = !1, te.current = $, Z(), Error.prepareStackTrace = _;
      }
      var Zt = T ? T.displayName || T.name : "", Kl = Zt ? J(Zt) : "";
      return typeof T == "function" && he.set(T, Kl), Kl;
    }
    function ye(T, q, ee) {
      return D(T, !1);
    }
    function Q(T) {
      var q = T.prototype;
      return !!(q && q.isReactComponent);
    }
    function be(T, q, ee) {
      if (T == null)
        return "";
      if (typeof T == "function")
        return D(T, Q(T));
      if (typeof T == "string")
        return J(T);
      switch (T) {
        case u:
          return J("Suspense");
        case d:
          return J("SuspenseList");
      }
      if (typeof T == "object")
        switch (T.$$typeof) {
          case c:
            return ye(T.render);
          case f:
            return be(T.type, q, ee);
          case p: {
            var Ee = T, _ = Ee._payload, $ = Ee._init;
            try {
              return be($(_), q, ee);
            } catch {
            }
          }
        }
      return "";
    }
    var ne = Object.prototype.hasOwnProperty, Xe = {}, Te = g.ReactDebugCurrentFrame;
    function We(T) {
      if (T) {
        var q = T._owner, ee = be(T.type, T._source, q ? q.type : null);
        Te.setExtraStackFrame(ee);
      } else
        Te.setExtraStackFrame(null);
    }
    function Ve(T, q, ee, Ee, _) {
      {
        var $ = Function.call.bind(ne);
        for (var V in T)
          if ($(T, V)) {
            var j = void 0;
            try {
              if (typeof T[V] != "function") {
                var pe = Error((Ee || "React class") + ": " + ee + " type `" + V + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof T[V] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw pe.name = "Invariant Violation", pe;
              }
              j = T[V](q, V, Ee, ee, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (ge) {
              j = ge;
            }
            j && !(j instanceof Error) && (We(_), C("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", Ee || "React class", ee, V, typeof j), We(null)), j instanceof Error && !(j.message in Xe) && (Xe[j.message] = !0, We(_), C("Failed %s type: %s", ee, j.message), We(null));
          }
      }
    }
    var Pe = Array.isArray;
    function He(T) {
      return Pe(T);
    }
    function qe(T) {
      {
        var q = typeof Symbol == "function" && Symbol.toStringTag, ee = q && T[Symbol.toStringTag] || T.constructor.name || "Object";
        return ee;
      }
    }
    function $e(T) {
      try {
        return Ze(T), !1;
      } catch {
        return !0;
      }
    }
    function Ze(T) {
      return "" + T;
    }
    function ut(T) {
      if ($e(T))
        return C("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", qe(T)), Ze(T);
    }
    var et = g.ReactCurrentOwner, we = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, re, Qe, xt;
    xt = {};
    function Et(T) {
      if (ne.call(T, "ref")) {
        var q = Object.getOwnPropertyDescriptor(T, "ref").get;
        if (q && q.isReactWarning)
          return !1;
      }
      return T.ref !== void 0;
    }
    function Ft(T) {
      if (ne.call(T, "key")) {
        var q = Object.getOwnPropertyDescriptor(T, "key").get;
        if (q && q.isReactWarning)
          return !1;
      }
      return T.key !== void 0;
    }
    function fe(T, q) {
      if (typeof T.ref == "string" && et.current && q && et.current.stateNode !== q) {
        var ee = U(et.current.type);
        xt[ee] || (C('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', U(et.current.type), T.ref), xt[ee] = !0);
      }
    }
    function Ce(T, q) {
      {
        var ee = function() {
          re || (re = !0, C("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", q));
        };
        ee.isReactWarning = !0, Object.defineProperty(T, "key", {
          get: ee,
          configurable: !0
        });
      }
    }
    function Ke(T, q) {
      {
        var ee = function() {
          Qe || (Qe = !0, C("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", q));
        };
        ee.isReactWarning = !0, Object.defineProperty(T, "ref", {
          get: ee,
          configurable: !0
        });
      }
    }
    var Tt = function(T, q, ee, Ee, _, $, V) {
      var j = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: T,
        key: q,
        ref: ee,
        props: V,
        // Record the component responsible for creating this element.
        _owner: $
      };
      return j._store = {}, Object.defineProperty(j._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(j, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Ee
      }), Object.defineProperty(j, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: _
      }), Object.freeze && (Object.freeze(j.props), Object.freeze(j)), j;
    };
    function _n(T, q, ee, Ee, _) {
      {
        var $, V = {}, j = null, pe = null;
        ee !== void 0 && (ut(ee), j = "" + ee), Ft(q) && (ut(q.key), j = "" + q.key), Et(q) && (pe = q.ref, fe(q, _));
        for ($ in q)
          ne.call(q, $) && !we.hasOwnProperty($) && (V[$] = q[$]);
        if (T && T.defaultProps) {
          var ge = T.defaultProps;
          for ($ in ge)
            V[$] === void 0 && (V[$] = ge[$]);
        }
        if (j || pe) {
          var Se = typeof T == "function" ? T.displayName || T.name || "Unknown" : T;
          j && Ce(V, Se), pe && Ke(V, Se);
        }
        return Tt(T, j, pe, _, Ee, et.current, V);
      }
    }
    var bt = g.ReactCurrentOwner, Lt = g.ReactDebugCurrentFrame;
    function pt(T) {
      if (T) {
        var q = T._owner, ee = be(T.type, T._source, q ? q.type : null);
        Lt.setExtraStackFrame(ee);
      } else
        Lt.setExtraStackFrame(null);
    }
    var sn;
    sn = !1;
    function Jt(T) {
      return typeof T == "object" && T !== null && T.$$typeof === t;
    }
    function Kn() {
      {
        if (bt.current) {
          var T = U(bt.current.type);
          if (T)
            return `

Check the render method of \`` + T + "`.";
        }
        return "";
      }
    }
    function dr(T) {
      {
        if (T !== void 0) {
          var q = T.fileName.replace(/^.*[\\\/]/, ""), ee = T.lineNumber;
          return `

Check your code at ` + q + ":" + ee + ".";
        }
        return "";
      }
    }
    var Yn = {};
    function Jr(T) {
      {
        var q = Kn();
        if (!q) {
          var ee = typeof T == "string" ? T : T.displayName || T.name;
          ee && (q = `

Check the top-level render call using <` + ee + ">.");
        }
        return q;
      }
    }
    function Zr(T, q) {
      {
        if (!T._store || T._store.validated || T.key != null)
          return;
        T._store.validated = !0;
        var ee = Jr(q);
        if (Yn[ee])
          return;
        Yn[ee] = !0;
        var Ee = "";
        T && T._owner && T._owner !== bt.current && (Ee = " It was passed a child from " + U(T._owner.type) + "."), pt(T), C('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', ee, Ee), pt(null);
      }
    }
    function xn(T, q) {
      {
        if (typeof T != "object")
          return;
        if (He(T))
          for (var ee = 0; ee < T.length; ee++) {
            var Ee = T[ee];
            Jt(Ee) && Zr(Ee, q);
          }
        else if (Jt(T))
          T._store && (T._store.validated = !0);
        else if (T) {
          var _ = m(T);
          if (typeof _ == "function" && _ !== T.entries)
            for (var $ = _.call(T), V; !(V = $.next()).done; )
              Jt(V.value) && Zr(V.value, q);
        }
      }
    }
    function dt(T) {
      {
        var q = T.type;
        if (q == null || typeof q == "string")
          return;
        var ee;
        if (typeof q == "function")
          ee = q.propTypes;
        else if (typeof q == "object" && (q.$$typeof === c || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        q.$$typeof === f))
          ee = q.propTypes;
        else
          return;
        if (ee) {
          var Ee = U(q);
          Ve(ee, T.props, "prop", Ee, T);
        } else if (q.PropTypes !== void 0 && !sn) {
          sn = !0;
          var _ = U(q);
          C("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", _ || "Unknown");
        }
        typeof q.getDefaultProps == "function" && !q.getDefaultProps.isReactClassApproved && C("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function it(T) {
      {
        for (var q = Object.keys(T.props), ee = 0; ee < q.length; ee++) {
          var Ee = q[ee];
          if (Ee !== "children" && Ee !== "key") {
            pt(T), C("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", Ee), pt(null);
            break;
          }
        }
        T.ref !== null && (pt(T), C("Invalid attribute `ref` supplied to `React.Fragment`."), pt(null));
      }
    }
    function Ct(T, q, ee, Ee, _, $) {
      {
        var V = L(T);
        if (!V) {
          var j = "";
          (T === void 0 || typeof T == "object" && T !== null && Object.keys(T).length === 0) && (j += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var pe = dr(_);
          pe ? j += pe : j += Kn();
          var ge;
          T === null ? ge = "null" : He(T) ? ge = "array" : T !== void 0 && T.$$typeof === t ? (ge = "<" + (U(T.type) || "Unknown") + " />", j = " Did you accidentally export a JSX literal instead of a component?") : ge = typeof T, C("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", ge, j);
        }
        var Se = _n(T, q, ee, _, $);
        if (Se == null)
          return Se;
        if (V) {
          var Ye = q.children;
          if (Ye !== void 0)
            if (Ee)
              if (He(Ye)) {
                for (var Zt = 0; Zt < Ye.length; Zt++)
                  xn(Ye[Zt], T);
                Object.freeze && Object.freeze(Ye);
              } else
                C("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              xn(Ye, T);
        }
        return T === r ? it(Se) : dt(Se), Se;
      }
    }
    function ai(T, q, ee) {
      return Ct(T, q, ee, !0);
    }
    function eo(T, q, ee) {
      return Ct(T, q, ee, !1);
    }
    var to = eo, no = ai;
    io.Fragment = r, io.jsx = to, io.jsxs = no;
  }()), io;
}
process.env.NODE_ENV === "production" ? ha.exports = ay() : ha.exports = ly();
var k = ha.exports, Yo = class {
  constructor() {
    this.listeners = /* @__PURE__ */ new Set(), this.subscribe = this.subscribe.bind(this);
  }
  subscribe(e) {
    return this.listeners.add(e), this.onSubscribe(), () => {
      this.listeners.delete(e), this.onUnsubscribe();
    };
  }
  hasListeners() {
    return this.listeners.size > 0;
  }
  onSubscribe() {
  }
  onUnsubscribe() {
  }
}, Fr = typeof window > "u" || "Deno" in globalThis;
function Ut() {
}
function cy(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function ma(e) {
  return typeof e == "number" && e >= 0 && e !== 1 / 0;
}
function Vd(e, t) {
  return Math.max(e + (t || 0) - Date.now(), 0);
}
function hc(e, t) {
  const {
    type: n = "all",
    exact: r,
    fetchStatus: i,
    predicate: s,
    queryKey: a,
    stale: l
  } = e;
  if (a) {
    if (r) {
      if (t.queryHash !== Xa(a, t.options))
        return !1;
    } else if (!Eo(t.queryKey, a))
      return !1;
  }
  if (n !== "all") {
    const c = t.isActive();
    if (n === "active" && !c || n === "inactive" && c)
      return !1;
  }
  return !(typeof l == "boolean" && t.isStale() !== l || i && i !== t.state.fetchStatus || s && !s(t));
}
function mc(e, t) {
  const { exact: n, status: r, predicate: i, mutationKey: s } = e;
  if (s) {
    if (!t.options.mutationKey)
      return !1;
    if (n) {
      if (xo(t.options.mutationKey) !== xo(s))
        return !1;
    } else if (!Eo(t.options.mutationKey, s))
      return !1;
  }
  return !(r && t.state.status !== r || i && !i(t));
}
function Xa(e, t) {
  return ((t == null ? void 0 : t.queryKeyHashFn) || xo)(e);
}
function xo(e) {
  return JSON.stringify(
    e,
    (t, n) => ba(n) ? Object.keys(n).sort().reduce((r, i) => (r[i] = n[i], r), {}) : n
  );
}
function Eo(e, t) {
  return e === t ? !0 : typeof e != typeof t ? !1 : e && t && typeof e == "object" && typeof t == "object" ? !Object.keys(t).some((n) => !Eo(e[n], t[n])) : !1;
}
function Ud(e, t) {
  if (e === t)
    return e;
  const n = yc(e) && yc(t);
  if (n || ba(e) && ba(t)) {
    const r = n ? e : Object.keys(e), i = r.length, s = n ? t : Object.keys(t), a = s.length, l = n ? [] : {};
    let c = 0;
    for (let u = 0; u < a; u++) {
      const d = n ? u : s[u];
      !n && e[d] === void 0 && t[d] === void 0 && r.includes(d) ? (l[d] = void 0, c++) : (l[d] = Ud(e[d], t[d]), l[d] === e[d] && e[d] !== void 0 && c++);
    }
    return i === a && c === i ? e : l;
  }
  return t;
}
function ya(e, t) {
  if (!t || Object.keys(e).length !== Object.keys(t).length)
    return !1;
  for (const n in e)
    if (e[n] !== t[n])
      return !1;
  return !0;
}
function yc(e) {
  return Array.isArray(e) && e.length === Object.keys(e).length;
}
function ba(e) {
  if (!bc(e))
    return !1;
  const t = e.constructor;
  if (t === void 0)
    return !0;
  const n = t.prototype;
  return !(!bc(n) || !n.hasOwnProperty("isPrototypeOf"));
}
function bc(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function uy(e) {
  return new Promise((t) => {
    setTimeout(t, e);
  });
}
function va(e, t, n) {
  return typeof n.structuralSharing == "function" ? n.structuralSharing(e, t) : n.structuralSharing !== !1 ? Ud(e, t) : t;
}
function dy(e, t, n = 0) {
  const r = [...e, t];
  return n && r.length > n ? r.slice(1) : r;
}
function fy(e, t, n = 0) {
  const r = [t, ...e];
  return n && r.length > n ? r.slice(0, -1) : r;
}
var Oo = Symbol(), Jn, Mn, wr, ed, py = (ed = class extends Yo {
  constructor() {
    super();
    ve(this, Jn, void 0);
    ve(this, Mn, void 0);
    ve(this, wr, void 0);
    ce(this, wr, (t) => {
      if (!Fr && window.addEventListener) {
        const n = () => t();
        return window.addEventListener("visibilitychange", n, !1), () => {
          window.removeEventListener("visibilitychange", n);
        };
      }
    });
  }
  onSubscribe() {
    S(this, Mn) || this.setEventListener(S(this, wr));
  }
  onUnsubscribe() {
    var t;
    this.hasListeners() || ((t = S(this, Mn)) == null || t.call(this), ce(this, Mn, void 0));
  }
  setEventListener(t) {
    var n;
    ce(this, wr, t), (n = S(this, Mn)) == null || n.call(this), ce(this, Mn, t((r) => {
      typeof r == "boolean" ? this.setFocused(r) : this.onFocus();
    }));
  }
  setFocused(t) {
    S(this, Jn) !== t && (ce(this, Jn, t), this.onFocus());
  }
  onFocus() {
    const t = this.isFocused();
    this.listeners.forEach((n) => {
      n(t);
    });
  }
  isFocused() {
    var t;
    return typeof S(this, Jn) == "boolean" ? S(this, Jn) : ((t = globalThis.document) == null ? void 0 : t.visibilityState) !== "hidden";
  }
}, Jn = new WeakMap(), Mn = new WeakMap(), wr = new WeakMap(), ed), Ja = new py(), Tr, Dn, Cr, td, hy = (td = class extends Yo {
  constructor() {
    super();
    ve(this, Tr, !0);
    ve(this, Dn, void 0);
    ve(this, Cr, void 0);
    ce(this, Cr, (t) => {
      if (!Fr && window.addEventListener) {
        const n = () => t(!0), r = () => t(!1);
        return window.addEventListener("online", n, !1), window.addEventListener("offline", r, !1), () => {
          window.removeEventListener("online", n), window.removeEventListener("offline", r);
        };
      }
    });
  }
  onSubscribe() {
    S(this, Dn) || this.setEventListener(S(this, Cr));
  }
  onUnsubscribe() {
    var t;
    this.hasListeners() || ((t = S(this, Dn)) == null || t.call(this), ce(this, Dn, void 0));
  }
  setEventListener(t) {
    var n;
    ce(this, Cr, t), (n = S(this, Dn)) == null || n.call(this), ce(this, Dn, t(this.setOnline.bind(this)));
  }
  setOnline(t) {
    S(this, Tr) !== t && (ce(this, Tr, t), this.listeners.forEach((r) => {
      r(t);
    }));
  }
  isOnline() {
    return S(this, Tr);
  }
}, Tr = new WeakMap(), Dn = new WeakMap(), Cr = new WeakMap(), td), Ai = new hy();
function my(e) {
  return Math.min(1e3 * 2 ** e, 3e4);
}
function Za(e) {
  return (e ?? "online") === "online" ? Ai.isOnline() : !0;
}
var zd = class {
  constructor(e) {
    this.revert = e == null ? void 0 : e.revert, this.silent = e == null ? void 0 : e.silent;
  }
};
function Fs(e) {
  return e instanceof zd;
}
function Wd(e) {
  let t = !1, n = 0, r = !1, i, s, a;
  const l = new Promise((m, g) => {
    s = m, a = g;
  }), c = (m) => {
    var g;
    r || (b(new zd(m)), (g = e.abort) == null || g.call(e));
  }, u = () => {
    t = !0;
  }, d = () => {
    t = !1;
  }, f = () => !Ja.isFocused() || e.networkMode !== "always" && !Ai.isOnline(), p = (m) => {
    var g;
    r || (r = !0, (g = e.onSuccess) == null || g.call(e, m), i == null || i(), s(m));
  }, b = (m) => {
    var g;
    r || (r = !0, (g = e.onError) == null || g.call(e, m), i == null || i(), a(m));
  }, y = () => new Promise((m) => {
    var g;
    i = (C) => {
      const E = r || !f();
      return E && m(C), E;
    }, (g = e.onPause) == null || g.call(e);
  }).then(() => {
    var m;
    i = void 0, r || (m = e.onContinue) == null || m.call(e);
  }), h = () => {
    if (r)
      return;
    let m;
    try {
      m = e.fn();
    } catch (g) {
      m = Promise.reject(g);
    }
    Promise.resolve(m).then(p).catch((g) => {
      var P;
      if (r)
        return;
      const C = e.retry ?? (Fr ? 0 : 3), E = e.retryDelay ?? my, O = typeof E == "function" ? E(n, g) : E, x = C === !0 || typeof C == "number" && n < C || typeof C == "function" && C(n, g);
      if (t || !x) {
        b(g);
        return;
      }
      n++, (P = e.onFail) == null || P.call(e, n, g), uy(O).then(() => {
        if (f())
          return y();
      }).then(() => {
        t ? b(g) : h();
      });
    });
  };
  return Za(e.networkMode) ? h() : y().then(h), {
    promise: l,
    cancel: c,
    continue: () => (i == null ? void 0 : i()) ? l : Promise.resolve(),
    cancelRetry: u,
    continueRetry: d
  };
}
function yy() {
  let e = [], t = 0, n = (p) => {
    p();
  }, r = (p) => {
    p();
  }, i = (p) => setTimeout(p, 0);
  const s = (p) => {
    i = p;
  }, a = (p) => {
    let b;
    t++;
    try {
      b = p();
    } finally {
      t--, t || u();
    }
    return b;
  }, l = (p) => {
    t ? e.push(p) : i(() => {
      n(p);
    });
  }, c = (p) => (...b) => {
    l(() => {
      p(...b);
    });
  }, u = () => {
    const p = e;
    e = [], p.length && i(() => {
      r(() => {
        p.forEach((b) => {
          n(b);
        });
      });
    });
  };
  return {
    batch: a,
    batchCalls: c,
    schedule: l,
    setNotifyFunction: (p) => {
      n = p;
    },
    setBatchNotifyFunction: (p) => {
      r = p;
    },
    setScheduler: s
  };
}
var yt = yy(), Zn, nd, qd = (nd = class {
  constructor() {
    ve(this, Zn, void 0);
  }
  destroy() {
    this.clearGcTimeout();
  }
  scheduleGc() {
    this.clearGcTimeout(), ma(this.gcTime) && ce(this, Zn, setTimeout(() => {
      this.optionalRemove();
    }, this.gcTime));
  }
  updateGcTime(e) {
    this.gcTime = Math.max(
      this.gcTime || 0,
      e ?? (Fr ? 1 / 0 : 5 * 60 * 1e3)
    );
  }
  clearGcTimeout() {
    S(this, Zn) && (clearTimeout(S(this, Zn)), ce(this, Zn, void 0));
  }
}, Zn = new WeakMap(), nd), Sr, Rr, Bt, Ot, ft, No, er, en, On, rd, by = (rd = class extends qd {
  constructor(t) {
    super();
    ve(this, en);
    ve(this, Sr, void 0);
    ve(this, Rr, void 0);
    ve(this, Bt, void 0);
    ve(this, Ot, void 0);
    ve(this, ft, void 0);
    ve(this, No, void 0);
    ve(this, er, void 0);
    ce(this, er, !1), ce(this, No, t.defaultOptions), this.setOptions(t.options), ce(this, ft, []), ce(this, Bt, t.cache), this.queryKey = t.queryKey, this.queryHash = t.queryHash, ce(this, Sr, t.state || vy(this.options)), this.state = S(this, Sr), this.scheduleGc();
  }
  get meta() {
    return this.options.meta;
  }
  setOptions(t) {
    this.options = { ...S(this, No), ...t }, this.updateGcTime(this.options.gcTime);
  }
  optionalRemove() {
    !S(this, ft).length && this.state.fetchStatus === "idle" && S(this, Bt).remove(this);
  }
  setData(t, n) {
    const r = va(this.state.data, t, this.options);
    return _e(this, en, On).call(this, {
      data: r,
      type: "success",
      dataUpdatedAt: n == null ? void 0 : n.updatedAt,
      manual: n == null ? void 0 : n.manual
    }), r;
  }
  setState(t, n) {
    _e(this, en, On).call(this, { type: "setState", state: t, setStateOptions: n });
  }
  cancel(t) {
    var r, i;
    const n = (r = S(this, Ot)) == null ? void 0 : r.promise;
    return (i = S(this, Ot)) == null || i.cancel(t), n ? n.then(Ut).catch(Ut) : Promise.resolve();
  }
  destroy() {
    super.destroy(), this.cancel({ silent: !0 });
  }
  reset() {
    this.destroy(), this.setState(S(this, Sr));
  }
  isActive() {
    return S(this, ft).some(
      (t) => t.options.enabled !== !1
    );
  }
  isDisabled() {
    return this.getObserversCount() > 0 && !this.isActive();
  }
  isStale() {
    return this.state.isInvalidated ? !0 : this.getObserversCount() > 0 ? S(this, ft).some(
      (t) => t.getCurrentResult().isStale
    ) : this.state.data === void 0;
  }
  isStaleByTime(t = 0) {
    return this.state.isInvalidated || this.state.data === void 0 || !Vd(this.state.dataUpdatedAt, t);
  }
  onFocus() {
    var n;
    const t = S(this, ft).find((r) => r.shouldFetchOnWindowFocus());
    t == null || t.refetch({ cancelRefetch: !1 }), (n = S(this, Ot)) == null || n.continue();
  }
  onOnline() {
    var n;
    const t = S(this, ft).find((r) => r.shouldFetchOnReconnect());
    t == null || t.refetch({ cancelRefetch: !1 }), (n = S(this, Ot)) == null || n.continue();
  }
  addObserver(t) {
    S(this, ft).includes(t) || (S(this, ft).push(t), this.clearGcTimeout(), S(this, Bt).notify({ type: "observerAdded", query: this, observer: t }));
  }
  removeObserver(t) {
    S(this, ft).includes(t) && (ce(this, ft, S(this, ft).filter((n) => n !== t)), S(this, ft).length || (S(this, Ot) && (S(this, er) ? S(this, Ot).cancel({ revert: !0 }) : S(this, Ot).cancelRetry()), this.scheduleGc()), S(this, Bt).notify({ type: "observerRemoved", query: this, observer: t }));
  }
  getObserversCount() {
    return S(this, ft).length;
  }
  invalidate() {
    this.state.isInvalidated || _e(this, en, On).call(this, { type: "invalidate" });
  }
  fetch(t, n) {
    var u, d, f;
    if (this.state.fetchStatus !== "idle") {
      if (this.state.data !== void 0 && (n != null && n.cancelRefetch))
        this.cancel({ silent: !0 });
      else if (S(this, Ot))
        return S(this, Ot).continueRetry(), S(this, Ot).promise;
    }
    if (t && this.setOptions(t), !this.options.queryFn) {
      const p = S(this, ft).find((b) => b.options.queryFn);
      p && this.setOptions(p.options);
    }
    process.env.NODE_ENV !== "production" && (Array.isArray(this.options.queryKey) || console.error(
      "As of v4, queryKey needs to be an Array. If you are using a string like 'repoData', please change it to an Array, e.g. ['repoData']"
    ));
    const r = new AbortController(), i = {
      queryKey: this.queryKey,
      meta: this.meta
    }, s = (p) => {
      Object.defineProperty(p, "signal", {
        enumerable: !0,
        get: () => (ce(this, er, !0), r.signal)
      });
    };
    s(i);
    const a = () => (process.env.NODE_ENV !== "production" && this.options.queryFn === Oo && console.error(
      `Attempted to invoke queryFn when set to skipToken. This is likely a configuration error. Query hash: '${this.options.queryHash}'`
    ), !this.options.queryFn || this.options.queryFn === Oo ? Promise.reject(
      new Error(`Missing queryFn: '${this.options.queryHash}'`)
    ) : (ce(this, er, !1), this.options.persister ? this.options.persister(
      this.options.queryFn,
      i,
      this
    ) : this.options.queryFn(
      i
    ))), l = {
      fetchOptions: n,
      options: this.options,
      queryKey: this.queryKey,
      state: this.state,
      fetchFn: a
    };
    s(l), (u = this.options.behavior) == null || u.onFetch(
      l,
      this
    ), ce(this, Rr, this.state), (this.state.fetchStatus === "idle" || this.state.fetchMeta !== ((d = l.fetchOptions) == null ? void 0 : d.meta)) && _e(this, en, On).call(this, { type: "fetch", meta: (f = l.fetchOptions) == null ? void 0 : f.meta });
    const c = (p) => {
      var b, y, h, m;
      Fs(p) && p.silent || _e(this, en, On).call(this, {
        type: "error",
        error: p
      }), Fs(p) || ((y = (b = S(this, Bt).config).onError) == null || y.call(
        b,
        p,
        this
      ), (m = (h = S(this, Bt).config).onSettled) == null || m.call(
        h,
        this.state.data,
        p,
        this
      )), this.isFetchingOptimistic || this.scheduleGc(), this.isFetchingOptimistic = !1;
    };
    return ce(this, Ot, Wd({
      fn: l.fetchFn,
      abort: r.abort.bind(r),
      onSuccess: (p) => {
        var b, y, h, m;
        if (p === void 0) {
          process.env.NODE_ENV !== "production" && console.error(
            `Query data cannot be undefined. Please make sure to return a value other than undefined from your query function. Affected query key: ${this.queryHash}`
          ), c(new Error(`${this.queryHash} data is undefined`));
          return;
        }
        this.setData(p), (y = (b = S(this, Bt).config).onSuccess) == null || y.call(b, p, this), (m = (h = S(this, Bt).config).onSettled) == null || m.call(
          h,
          p,
          this.state.error,
          this
        ), this.isFetchingOptimistic || this.scheduleGc(), this.isFetchingOptimistic = !1;
      },
      onError: c,
      onFail: (p, b) => {
        _e(this, en, On).call(this, { type: "failed", failureCount: p, error: b });
      },
      onPause: () => {
        _e(this, en, On).call(this, { type: "pause" });
      },
      onContinue: () => {
        _e(this, en, On).call(this, { type: "continue" });
      },
      retry: l.options.retry,
      retryDelay: l.options.retryDelay,
      networkMode: l.options.networkMode
    })), S(this, Ot).promise;
  }
}, Sr = new WeakMap(), Rr = new WeakMap(), Bt = new WeakMap(), Ot = new WeakMap(), ft = new WeakMap(), No = new WeakMap(), er = new WeakMap(), en = new WeakSet(), On = function(t) {
  const n = (r) => {
    switch (t.type) {
      case "failed":
        return {
          ...r,
          fetchFailureCount: t.failureCount,
          fetchFailureReason: t.error
        };
      case "pause":
        return {
          ...r,
          fetchStatus: "paused"
        };
      case "continue":
        return {
          ...r,
          fetchStatus: "fetching"
        };
      case "fetch":
        return {
          ...r,
          ...Hd(r.data, this.options),
          fetchMeta: t.meta ?? null
        };
      case "success":
        return {
          ...r,
          data: t.data,
          dataUpdateCount: r.dataUpdateCount + 1,
          dataUpdatedAt: t.dataUpdatedAt ?? Date.now(),
          error: null,
          isInvalidated: !1,
          status: "success",
          ...!t.manual && {
            fetchStatus: "idle",
            fetchFailureCount: 0,
            fetchFailureReason: null
          }
        };
      case "error":
        const i = t.error;
        return Fs(i) && i.revert && S(this, Rr) ? { ...S(this, Rr), fetchStatus: "idle" } : {
          ...r,
          error: i,
          errorUpdateCount: r.errorUpdateCount + 1,
          errorUpdatedAt: Date.now(),
          fetchFailureCount: r.fetchFailureCount + 1,
          fetchFailureReason: i,
          fetchStatus: "idle",
          status: "error"
        };
      case "invalidate":
        return {
          ...r,
          isInvalidated: !0
        };
      case "setState":
        return {
          ...r,
          ...t.state
        };
    }
  };
  this.state = n(this.state), yt.batch(() => {
    S(this, ft).forEach((r) => {
      r.onQueryUpdate();
    }), S(this, Bt).notify({ query: this, type: "updated", action: t });
  });
}, rd);
function Hd(e, t) {
  return {
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchStatus: Za(t.networkMode) ? "fetching" : "paused",
    ...e === void 0 && {
      error: null,
      status: "pending"
    }
  };
}
function vy(e) {
  const t = typeof e.initialData == "function" ? e.initialData() : e.initialData, n = t !== void 0, r = n ? typeof e.initialDataUpdatedAt == "function" ? e.initialDataUpdatedAt() : e.initialDataUpdatedAt : 0;
  return {
    data: t,
    dataUpdateCount: 0,
    dataUpdatedAt: n ? r ?? Date.now() : 0,
    error: null,
    errorUpdateCount: 0,
    errorUpdatedAt: 0,
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchMeta: null,
    isInvalidated: !1,
    status: n ? "success" : "pending",
    fetchStatus: "idle"
  };
}
var ln, od, gy = (od = class extends Yo {
  constructor(t = {}) {
    super();
    ve(this, ln, void 0);
    this.config = t, ce(this, ln, /* @__PURE__ */ new Map());
  }
  build(t, n, r) {
    const i = n.queryKey, s = n.queryHash ?? Xa(i, n);
    let a = this.get(s);
    return a || (a = new by({
      cache: this,
      queryKey: i,
      queryHash: s,
      options: t.defaultQueryOptions(n),
      state: r,
      defaultOptions: t.getQueryDefaults(i)
    }), this.add(a)), a;
  }
  add(t) {
    S(this, ln).has(t.queryHash) || (S(this, ln).set(t.queryHash, t), this.notify({
      type: "added",
      query: t
    }));
  }
  remove(t) {
    const n = S(this, ln).get(t.queryHash);
    n && (t.destroy(), n === t && S(this, ln).delete(t.queryHash), this.notify({ type: "removed", query: t }));
  }
  clear() {
    yt.batch(() => {
      this.getAll().forEach((t) => {
        this.remove(t);
      });
    });
  }
  get(t) {
    return S(this, ln).get(t);
  }
  getAll() {
    return [...S(this, ln).values()];
  }
  find(t) {
    const n = { exact: !0, ...t };
    return this.getAll().find(
      (r) => hc(n, r)
    );
  }
  findAll(t = {}) {
    const n = this.getAll();
    return Object.keys(t).length > 0 ? n.filter((r) => hc(t, r)) : n;
  }
  notify(t) {
    yt.batch(() => {
      this.listeners.forEach((n) => {
        n(t);
      });
    });
  }
  onFocus() {
    yt.batch(() => {
      this.getAll().forEach((t) => {
        t.onFocus();
      });
    });
  }
  onOnline() {
    yt.batch(() => {
      this.getAll().forEach((t) => {
        t.onOnline();
      });
    });
  }
}, ln = new WeakMap(), od), cn, Io, _t, Pr, un, In, id, xy = (id = class extends qd {
  constructor(t) {
    super();
    ve(this, un);
    ve(this, cn, void 0);
    ve(this, Io, void 0);
    ve(this, _t, void 0);
    ve(this, Pr, void 0);
    this.mutationId = t.mutationId, ce(this, Io, t.defaultOptions), ce(this, _t, t.mutationCache), ce(this, cn, []), this.state = t.state || Ey(), this.setOptions(t.options), this.scheduleGc();
  }
  setOptions(t) {
    this.options = { ...S(this, Io), ...t }, this.updateGcTime(this.options.gcTime);
  }
  get meta() {
    return this.options.meta;
  }
  addObserver(t) {
    S(this, cn).includes(t) || (S(this, cn).push(t), this.clearGcTimeout(), S(this, _t).notify({
      type: "observerAdded",
      mutation: this,
      observer: t
    }));
  }
  removeObserver(t) {
    ce(this, cn, S(this, cn).filter((n) => n !== t)), this.scheduleGc(), S(this, _t).notify({
      type: "observerRemoved",
      mutation: this,
      observer: t
    });
  }
  optionalRemove() {
    S(this, cn).length || (this.state.status === "pending" ? this.scheduleGc() : S(this, _t).remove(this));
  }
  continue() {
    var t;
    return ((t = S(this, Pr)) == null ? void 0 : t.continue()) ?? // continuing a mutation assumes that variables are set, mutation must have been dehydrated before
    this.execute(this.state.variables);
  }
  async execute(t) {
    var i, s, a, l, c, u, d, f, p, b, y, h, m, g, C, E, O, x, P, R;
    const n = () => (ce(this, Pr, Wd({
      fn: () => this.options.mutationFn ? this.options.mutationFn(t) : Promise.reject(new Error("No mutationFn found")),
      onFail: (N, A) => {
        _e(this, un, In).call(this, { type: "failed", failureCount: N, error: A });
      },
      onPause: () => {
        _e(this, un, In).call(this, { type: "pause" });
      },
      onContinue: () => {
        _e(this, un, In).call(this, { type: "continue" });
      },
      retry: this.options.retry ?? 0,
      retryDelay: this.options.retryDelay,
      networkMode: this.options.networkMode
    })), S(this, Pr).promise), r = this.state.status === "pending";
    try {
      if (!r) {
        _e(this, un, In).call(this, { type: "pending", variables: t }), await ((s = (i = S(this, _t).config).onMutate) == null ? void 0 : s.call(
          i,
          t,
          this
        ));
        const A = await ((l = (a = this.options).onMutate) == null ? void 0 : l.call(a, t));
        A !== this.state.context && _e(this, un, In).call(this, {
          type: "pending",
          context: A,
          variables: t
        });
      }
      const N = await n();
      return await ((u = (c = S(this, _t).config).onSuccess) == null ? void 0 : u.call(
        c,
        N,
        t,
        this.state.context,
        this
      )), await ((f = (d = this.options).onSuccess) == null ? void 0 : f.call(d, N, t, this.state.context)), await ((b = (p = S(this, _t).config).onSettled) == null ? void 0 : b.call(
        p,
        N,
        null,
        this.state.variables,
        this.state.context,
        this
      )), await ((h = (y = this.options).onSettled) == null ? void 0 : h.call(y, N, null, t, this.state.context)), _e(this, un, In).call(this, { type: "success", data: N }), N;
    } catch (N) {
      try {
        throw await ((g = (m = S(this, _t).config).onError) == null ? void 0 : g.call(
          m,
          N,
          t,
          this.state.context,
          this
        )), await ((E = (C = this.options).onError) == null ? void 0 : E.call(
          C,
          N,
          t,
          this.state.context
        )), await ((x = (O = S(this, _t).config).onSettled) == null ? void 0 : x.call(
          O,
          void 0,
          N,
          this.state.variables,
          this.state.context,
          this
        )), await ((R = (P = this.options).onSettled) == null ? void 0 : R.call(
          P,
          void 0,
          N,
          t,
          this.state.context
        )), N;
      } finally {
        _e(this, un, In).call(this, { type: "error", error: N });
      }
    }
  }
}, cn = new WeakMap(), Io = new WeakMap(), _t = new WeakMap(), Pr = new WeakMap(), un = new WeakSet(), In = function(t) {
  const n = (r) => {
    switch (t.type) {
      case "failed":
        return {
          ...r,
          failureCount: t.failureCount,
          failureReason: t.error
        };
      case "pause":
        return {
          ...r,
          isPaused: !0
        };
      case "continue":
        return {
          ...r,
          isPaused: !1
        };
      case "pending":
        return {
          ...r,
          context: t.context,
          data: void 0,
          failureCount: 0,
          failureReason: null,
          error: null,
          isPaused: !Za(this.options.networkMode),
          status: "pending",
          variables: t.variables,
          submittedAt: Date.now()
        };
      case "success":
        return {
          ...r,
          data: t.data,
          failureCount: 0,
          failureReason: null,
          error: null,
          status: "success",
          isPaused: !1
        };
      case "error":
        return {
          ...r,
          data: void 0,
          error: t.error,
          failureCount: r.failureCount + 1,
          failureReason: t.error,
          isPaused: !1,
          status: "error"
        };
    }
  };
  this.state = n(this.state), yt.batch(() => {
    S(this, cn).forEach((r) => {
      r.onMutationUpdate(t);
    }), S(this, _t).notify({
      mutation: this,
      type: "updated",
      action: t
    });
  });
}, id);
function Ey() {
  return {
    context: void 0,
    data: void 0,
    error: null,
    failureCount: 0,
    failureReason: null,
    isPaused: !1,
    status: "idle",
    variables: void 0,
    submittedAt: 0
  };
}
var Vt, Ao, tr, sd, Oy = (sd = class extends Yo {
  constructor(t = {}) {
    super();
    ve(this, Vt, void 0);
    ve(this, Ao, void 0);
    ve(this, tr, void 0);
    this.config = t, ce(this, Vt, []), ce(this, Ao, 0);
  }
  build(t, n, r) {
    const i = new xy({
      mutationCache: this,
      mutationId: ++li(this, Ao)._,
      options: t.defaultMutationOptions(n),
      state: r
    });
    return this.add(i), i;
  }
  add(t) {
    S(this, Vt).push(t), this.notify({ type: "added", mutation: t });
  }
  remove(t) {
    ce(this, Vt, S(this, Vt).filter((n) => n !== t)), this.notify({ type: "removed", mutation: t });
  }
  clear() {
    yt.batch(() => {
      S(this, Vt).forEach((t) => {
        this.remove(t);
      });
    });
  }
  getAll() {
    return S(this, Vt);
  }
  find(t) {
    const n = { exact: !0, ...t };
    return S(this, Vt).find(
      (r) => mc(n, r)
    );
  }
  findAll(t = {}) {
    return S(this, Vt).filter(
      (n) => mc(t, n)
    );
  }
  notify(t) {
    yt.batch(() => {
      this.listeners.forEach((n) => {
        n(t);
      });
    });
  }
  resumePausedMutations() {
    return ce(this, tr, (S(this, tr) ?? Promise.resolve()).then(() => {
      const t = S(this, Vt).filter((n) => n.state.isPaused);
      return yt.batch(
        () => t.reduce(
          (n, r) => n.then(() => r.continue().catch(Ut)),
          Promise.resolve()
        )
      );
    }).then(() => {
      ce(this, tr, void 0);
    })), S(this, tr);
  }
}, Vt = new WeakMap(), Ao = new WeakMap(), tr = new WeakMap(), sd);
function wy(e) {
  return {
    onFetch: (t, n) => {
      const r = async () => {
        var y, h, m, g, C;
        const i = t.options, s = (m = (h = (y = t.fetchOptions) == null ? void 0 : y.meta) == null ? void 0 : h.fetchMore) == null ? void 0 : m.direction, a = ((g = t.state.data) == null ? void 0 : g.pages) || [], l = ((C = t.state.data) == null ? void 0 : C.pageParams) || [], c = { pages: [], pageParams: [] };
        let u = !1;
        const d = (E) => {
          Object.defineProperty(E, "signal", {
            enumerable: !0,
            get: () => (t.signal.aborted ? u = !0 : t.signal.addEventListener("abort", () => {
              u = !0;
            }), t.signal)
          });
        }, f = t.options.queryFn && t.options.queryFn !== Oo ? t.options.queryFn : () => (process.env.NODE_ENV !== "production" && t.options.queryFn === Oo && console.error(
          `Attempted to invoke queryFn when set to skipToken. This is likely a configuration error. Query hash: '${t.options.queryHash}'`
        ), Promise.reject(
          new Error(`Missing queryFn: '${t.options.queryHash}'`)
        )), p = async (E, O, x) => {
          if (u)
            return Promise.reject();
          if (O == null && E.pages.length)
            return Promise.resolve(E);
          const P = {
            queryKey: t.queryKey,
            pageParam: O,
            direction: x ? "backward" : "forward",
            meta: t.options.meta
          };
          d(P);
          const R = await f(
            P
          ), { maxPages: N } = t.options, A = x ? fy : dy;
          return {
            pages: A(E.pages, R, N),
            pageParams: A(E.pageParams, O, N)
          };
        };
        let b;
        if (s && a.length) {
          const E = s === "backward", O = E ? Ty : vc, x = {
            pages: a,
            pageParams: l
          }, P = O(i, x);
          b = await p(x, P, E);
        } else {
          b = await p(
            c,
            l[0] ?? i.initialPageParam
          );
          const E = e ?? a.length;
          for (let O = 1; O < E; O++) {
            const x = vc(i, b);
            b = await p(b, x);
          }
        }
        return b;
      };
      t.options.persister ? t.fetchFn = () => {
        var i, s;
        return (s = (i = t.options).persister) == null ? void 0 : s.call(
          i,
          r,
          {
            queryKey: t.queryKey,
            meta: t.options.meta,
            signal: t.signal
          },
          n
        );
      } : t.fetchFn = r;
    }
  };
}
function vc(e, { pages: t, pageParams: n }) {
  const r = t.length - 1;
  return e.getNextPageParam(
    t[r],
    t,
    n[r],
    n
  );
}
function Ty(e, { pages: t, pageParams: n }) {
  var r;
  return (r = e.getPreviousPageParam) == null ? void 0 : r.call(
    e,
    t[0],
    t,
    n[0],
    n
  );
}
var st, Fn, Ln, $r, _r, Bn, kr, Nr, ad, Cy = (ad = class {
  constructor(e = {}) {
    ve(this, st, void 0);
    ve(this, Fn, void 0);
    ve(this, Ln, void 0);
    ve(this, $r, void 0);
    ve(this, _r, void 0);
    ve(this, Bn, void 0);
    ve(this, kr, void 0);
    ve(this, Nr, void 0);
    ce(this, st, e.queryCache || new gy()), ce(this, Fn, e.mutationCache || new Oy()), ce(this, Ln, e.defaultOptions || {}), ce(this, $r, /* @__PURE__ */ new Map()), ce(this, _r, /* @__PURE__ */ new Map()), ce(this, Bn, 0);
  }
  mount() {
    li(this, Bn)._++, S(this, Bn) === 1 && (ce(this, kr, Ja.subscribe(async (e) => {
      e && (await this.resumePausedMutations(), S(this, st).onFocus());
    })), ce(this, Nr, Ai.subscribe(async (e) => {
      e && (await this.resumePausedMutations(), S(this, st).onOnline());
    })));
  }
  unmount() {
    var e, t;
    li(this, Bn)._--, S(this, Bn) === 0 && ((e = S(this, kr)) == null || e.call(this), ce(this, kr, void 0), (t = S(this, Nr)) == null || t.call(this), ce(this, Nr, void 0));
  }
  isFetching(e) {
    return S(this, st).findAll({ ...e, fetchStatus: "fetching" }).length;
  }
  isMutating(e) {
    return S(this, Fn).findAll({ ...e, status: "pending" }).length;
  }
  getQueryData(e) {
    var n;
    const t = this.defaultQueryOptions({ queryKey: e });
    return (n = S(this, st).get(t.queryHash)) == null ? void 0 : n.state.data;
  }
  ensureQueryData(e) {
    const t = this.getQueryData(e.queryKey);
    if (t === void 0)
      return this.fetchQuery(e);
    {
      const n = this.defaultQueryOptions(e), r = S(this, st).build(this, n);
      return e.revalidateIfStale && r.isStaleByTime(n.staleTime) && this.prefetchQuery(n), Promise.resolve(t);
    }
  }
  getQueriesData(e) {
    return this.getQueryCache().findAll(e).map(({ queryKey: t, state: n }) => {
      const r = n.data;
      return [t, r];
    });
  }
  setQueryData(e, t, n) {
    const r = this.defaultQueryOptions({ queryKey: e }), i = S(this, st).get(
      r.queryHash
    ), s = i == null ? void 0 : i.state.data, a = cy(t, s);
    if (a !== void 0)
      return S(this, st).build(this, r).setData(a, { ...n, manual: !0 });
  }
  setQueriesData(e, t, n) {
    return yt.batch(
      () => this.getQueryCache().findAll(e).map(({ queryKey: r }) => [
        r,
        this.setQueryData(r, t, n)
      ])
    );
  }
  getQueryState(e) {
    var n;
    const t = this.defaultQueryOptions({ queryKey: e });
    return (n = S(this, st).get(t.queryHash)) == null ? void 0 : n.state;
  }
  removeQueries(e) {
    const t = S(this, st);
    yt.batch(() => {
      t.findAll(e).forEach((n) => {
        t.remove(n);
      });
    });
  }
  resetQueries(e, t) {
    const n = S(this, st), r = {
      type: "active",
      ...e
    };
    return yt.batch(() => (n.findAll(e).forEach((i) => {
      i.reset();
    }), this.refetchQueries(r, t)));
  }
  cancelQueries(e = {}, t = {}) {
    const n = { revert: !0, ...t }, r = yt.batch(
      () => S(this, st).findAll(e).map((i) => i.cancel(n))
    );
    return Promise.all(r).then(Ut).catch(Ut);
  }
  invalidateQueries(e = {}, t = {}) {
    return yt.batch(() => {
      if (S(this, st).findAll(e).forEach((r) => {
        r.invalidate();
      }), e.refetchType === "none")
        return Promise.resolve();
      const n = {
        ...e,
        type: e.refetchType ?? e.type ?? "active"
      };
      return this.refetchQueries(n, t);
    });
  }
  refetchQueries(e = {}, t) {
    const n = {
      ...t,
      cancelRefetch: (t == null ? void 0 : t.cancelRefetch) ?? !0
    }, r = yt.batch(
      () => S(this, st).findAll(e).filter((i) => !i.isDisabled()).map((i) => {
        let s = i.fetch(void 0, n);
        return n.throwOnError || (s = s.catch(Ut)), i.state.fetchStatus === "paused" ? Promise.resolve() : s;
      })
    );
    return Promise.all(r).then(Ut);
  }
  fetchQuery(e) {
    const t = this.defaultQueryOptions(e);
    t.retry === void 0 && (t.retry = !1);
    const n = S(this, st).build(this, t);
    return n.isStaleByTime(t.staleTime) ? n.fetch(t) : Promise.resolve(n.state.data);
  }
  prefetchQuery(e) {
    return this.fetchQuery(e).then(Ut).catch(Ut);
  }
  fetchInfiniteQuery(e) {
    return e.behavior = wy(e.pages), this.fetchQuery(e);
  }
  prefetchInfiniteQuery(e) {
    return this.fetchInfiniteQuery(e).then(Ut).catch(Ut);
  }
  resumePausedMutations() {
    return Ai.isOnline() ? S(this, Fn).resumePausedMutations() : Promise.resolve();
  }
  getQueryCache() {
    return S(this, st);
  }
  getMutationCache() {
    return S(this, Fn);
  }
  getDefaultOptions() {
    return S(this, Ln);
  }
  setDefaultOptions(e) {
    ce(this, Ln, e);
  }
  setQueryDefaults(e, t) {
    S(this, $r).set(xo(e), {
      queryKey: e,
      defaultOptions: t
    });
  }
  getQueryDefaults(e) {
    const t = [...S(this, $r).values()];
    let n = {};
    return t.forEach((r) => {
      Eo(e, r.queryKey) && (n = { ...n, ...r.defaultOptions });
    }), n;
  }
  setMutationDefaults(e, t) {
    S(this, _r).set(xo(e), {
      mutationKey: e,
      defaultOptions: t
    });
  }
  getMutationDefaults(e) {
    const t = [...S(this, _r).values()];
    let n = {};
    return t.forEach((r) => {
      Eo(e, r.mutationKey) && (n = { ...n, ...r.defaultOptions });
    }), n;
  }
  defaultQueryOptions(e) {
    if (e._defaulted)
      return e;
    const t = {
      ...S(this, Ln).queries,
      ...this.getQueryDefaults(e.queryKey),
      ...e,
      _defaulted: !0
    };
    return t.queryHash || (t.queryHash = Xa(
      t.queryKey,
      t
    )), t.refetchOnReconnect === void 0 && (t.refetchOnReconnect = t.networkMode !== "always"), t.throwOnError === void 0 && (t.throwOnError = !!t.suspense), !t.networkMode && t.persister && (t.networkMode = "offlineFirst"), t.enabled !== !0 && t.queryFn === Oo && (t.enabled = !1), t;
  }
  defaultMutationOptions(e) {
    return e != null && e._defaulted ? e : {
      ...S(this, Ln).mutations,
      ...(e == null ? void 0 : e.mutationKey) && this.getMutationDefaults(e.mutationKey),
      ...e,
      _defaulted: !0
    };
  }
  clear() {
    S(this, st).clear(), S(this, Fn).clear();
  }
}, st = new WeakMap(), Fn = new WeakMap(), Ln = new WeakMap(), $r = new WeakMap(), _r = new WeakMap(), Bn = new WeakMap(), kr = new WeakMap(), Nr = new WeakMap(), ad), St, Ge, jo, wt, nr, Ir, dn, Mo, Ar, jr, rr, or, Vn, Mr, ir, fo, Do, ga, Fo, xa, Lo, Ea, Bo, Oa, Vo, wa, Uo, Ta, zo, Ca, Ki, Kd, ld, Sy = (ld = class extends Yo {
  constructor(t, n) {
    super();
    ve(this, ir);
    ve(this, Do);
    ve(this, Fo);
    ve(this, Lo);
    ve(this, Bo);
    ve(this, Vo);
    ve(this, Uo);
    ve(this, zo);
    ve(this, Ki);
    ve(this, St, void 0);
    ve(this, Ge, void 0);
    ve(this, jo, void 0);
    ve(this, wt, void 0);
    ve(this, nr, void 0);
    ve(this, Ir, void 0);
    ve(this, dn, void 0);
    ve(this, Mo, void 0);
    ve(this, Ar, void 0);
    // This property keeps track of the last query with defined data.
    // It will be used to pass the previous data and query to the placeholder function between renders.
    ve(this, jr, void 0);
    ve(this, rr, void 0);
    ve(this, or, void 0);
    ve(this, Vn, void 0);
    ve(this, Mr, /* @__PURE__ */ new Set());
    this.options = n, ce(this, St, t), ce(this, dn, null), this.bindMethods(), this.setOptions(n);
  }
  bindMethods() {
    this.refetch = this.refetch.bind(this);
  }
  onSubscribe() {
    this.listeners.size === 1 && (S(this, Ge).addObserver(this), gc(S(this, Ge), this.options) ? _e(this, ir, fo).call(this) : this.updateResult(), _e(this, Bo, Oa).call(this));
  }
  onUnsubscribe() {
    this.hasListeners() || this.destroy();
  }
  shouldFetchOnReconnect() {
    return Sa(
      S(this, Ge),
      this.options,
      this.options.refetchOnReconnect
    );
  }
  shouldFetchOnWindowFocus() {
    return Sa(
      S(this, Ge),
      this.options,
      this.options.refetchOnWindowFocus
    );
  }
  destroy() {
    this.listeners = /* @__PURE__ */ new Set(), _e(this, Vo, wa).call(this), _e(this, Uo, Ta).call(this), S(this, Ge).removeObserver(this);
  }
  setOptions(t, n) {
    const r = this.options, i = S(this, Ge);
    if (this.options = S(this, St).defaultQueryOptions(t), this.options.enabled !== void 0 && typeof this.options.enabled != "boolean")
      throw new Error("Expected enabled to be a boolean");
    _e(this, zo, Ca).call(this), S(this, Ge).setOptions(this.options), r._defaulted && !ya(this.options, r) && S(this, St).getQueryCache().notify({
      type: "observerOptionsUpdated",
      query: S(this, Ge),
      observer: this
    });
    const s = this.hasListeners();
    s && xc(
      S(this, Ge),
      i,
      this.options,
      r
    ) && _e(this, ir, fo).call(this), this.updateResult(n), s && (S(this, Ge) !== i || this.options.enabled !== r.enabled || this.options.staleTime !== r.staleTime) && _e(this, Do, ga).call(this);
    const a = _e(this, Fo, xa).call(this);
    s && (S(this, Ge) !== i || this.options.enabled !== r.enabled || a !== S(this, Vn)) && _e(this, Lo, Ea).call(this, a);
  }
  getOptimisticResult(t) {
    const n = S(this, St).getQueryCache().build(S(this, St), t), r = this.createResult(n, t);
    return Py(this, r) && (ce(this, wt, r), ce(this, Ir, this.options), ce(this, nr, S(this, Ge).state)), r;
  }
  getCurrentResult() {
    return S(this, wt);
  }
  trackResult(t, n) {
    const r = {};
    return Object.keys(t).forEach((i) => {
      Object.defineProperty(r, i, {
        configurable: !1,
        enumerable: !0,
        get: () => (this.trackProp(i), n == null || n(i), t[i])
      });
    }), r;
  }
  trackProp(t) {
    S(this, Mr).add(t);
  }
  getCurrentQuery() {
    return S(this, Ge);
  }
  refetch({ ...t } = {}) {
    return this.fetch({
      ...t
    });
  }
  fetchOptimistic(t) {
    const n = S(this, St).defaultQueryOptions(t), r = S(this, St).getQueryCache().build(S(this, St), n);
    return r.isFetchingOptimistic = !0, r.fetch().then(() => this.createResult(r, n));
  }
  fetch(t) {
    return _e(this, ir, fo).call(this, {
      ...t,
      cancelRefetch: t.cancelRefetch ?? !0
    }).then(() => (this.updateResult(), S(this, wt)));
  }
  createResult(t, n) {
    var R;
    const r = S(this, Ge), i = this.options, s = S(this, wt), a = S(this, nr), l = S(this, Ir), u = t !== r ? t.state : S(this, jo), { state: d } = t;
    let f = { ...d }, p = !1, b;
    if (n._optimisticResults) {
      const N = this.hasListeners(), A = !N && gc(t, n), L = N && xc(t, r, n, i);
      (A || L) && (f = {
        ...f,
        ...Hd(d.data, t.options)
      }), n._optimisticResults === "isRestoring" && (f.fetchStatus = "idle");
    }
    let { error: y, errorUpdatedAt: h, status: m } = f;
    if (n.select && f.data !== void 0)
      if (s && f.data === (a == null ? void 0 : a.data) && n.select === S(this, Mo))
        b = S(this, Ar);
      else
        try {
          ce(this, Mo, n.select), b = n.select(f.data), b = va(s == null ? void 0 : s.data, b, n), ce(this, Ar, b), ce(this, dn, null);
        } catch (N) {
          ce(this, dn, N);
        }
    else
      b = f.data;
    if (n.placeholderData !== void 0 && b === void 0 && m === "pending") {
      let N;
      if (s != null && s.isPlaceholderData && n.placeholderData === (l == null ? void 0 : l.placeholderData))
        N = s.data;
      else if (N = typeof n.placeholderData == "function" ? n.placeholderData(
        (R = S(this, jr)) == null ? void 0 : R.state.data,
        S(this, jr)
      ) : n.placeholderData, n.select && N !== void 0)
        try {
          N = n.select(N), ce(this, dn, null);
        } catch (A) {
          ce(this, dn, A);
        }
      N !== void 0 && (m = "success", b = va(
        s == null ? void 0 : s.data,
        N,
        n
      ), p = !0);
    }
    S(this, dn) && (y = S(this, dn), b = S(this, Ar), h = Date.now(), m = "error");
    const g = f.fetchStatus === "fetching", C = m === "pending", E = m === "error", O = C && g, x = b !== void 0;
    return {
      status: m,
      fetchStatus: f.fetchStatus,
      isPending: C,
      isSuccess: m === "success",
      isError: E,
      isInitialLoading: O,
      isLoading: O,
      data: b,
      dataUpdatedAt: f.dataUpdatedAt,
      error: y,
      errorUpdatedAt: h,
      failureCount: f.fetchFailureCount,
      failureReason: f.fetchFailureReason,
      errorUpdateCount: f.errorUpdateCount,
      isFetched: f.dataUpdateCount > 0 || f.errorUpdateCount > 0,
      isFetchedAfterMount: f.dataUpdateCount > u.dataUpdateCount || f.errorUpdateCount > u.errorUpdateCount,
      isFetching: g,
      isRefetching: g && !C,
      isLoadingError: E && !x,
      isPaused: f.fetchStatus === "paused",
      isPlaceholderData: p,
      isRefetchError: E && x,
      isStale: el(t, n),
      refetch: this.refetch
    };
  }
  updateResult(t) {
    const n = S(this, wt), r = this.createResult(S(this, Ge), this.options);
    if (ce(this, nr, S(this, Ge).state), ce(this, Ir, this.options), S(this, nr).data !== void 0 && ce(this, jr, S(this, Ge)), ya(r, n))
      return;
    ce(this, wt, r);
    const i = {}, s = () => {
      if (!n)
        return !0;
      const { notifyOnChangeProps: a } = this.options, l = typeof a == "function" ? a() : a;
      if (l === "all" || !l && !S(this, Mr).size)
        return !0;
      const c = new Set(
        l ?? S(this, Mr)
      );
      return this.options.throwOnError && c.add("error"), Object.keys(S(this, wt)).some((u) => {
        const d = u;
        return S(this, wt)[d] !== n[d] && c.has(d);
      });
    };
    (t == null ? void 0 : t.listeners) !== !1 && s() && (i.listeners = !0), _e(this, Ki, Kd).call(this, { ...i, ...t });
  }
  onQueryUpdate() {
    this.updateResult(), this.hasListeners() && _e(this, Bo, Oa).call(this);
  }
}, St = new WeakMap(), Ge = new WeakMap(), jo = new WeakMap(), wt = new WeakMap(), nr = new WeakMap(), Ir = new WeakMap(), dn = new WeakMap(), Mo = new WeakMap(), Ar = new WeakMap(), jr = new WeakMap(), rr = new WeakMap(), or = new WeakMap(), Vn = new WeakMap(), Mr = new WeakMap(), ir = new WeakSet(), fo = function(t) {
  _e(this, zo, Ca).call(this);
  let n = S(this, Ge).fetch(
    this.options,
    t
  );
  return t != null && t.throwOnError || (n = n.catch(Ut)), n;
}, Do = new WeakSet(), ga = function() {
  if (_e(this, Vo, wa).call(this), Fr || S(this, wt).isStale || !ma(this.options.staleTime))
    return;
  const n = Vd(
    S(this, wt).dataUpdatedAt,
    this.options.staleTime
  ) + 1;
  ce(this, rr, setTimeout(() => {
    S(this, wt).isStale || this.updateResult();
  }, n));
}, Fo = new WeakSet(), xa = function() {
  return (typeof this.options.refetchInterval == "function" ? this.options.refetchInterval(S(this, Ge)) : this.options.refetchInterval) ?? !1;
}, Lo = new WeakSet(), Ea = function(t) {
  _e(this, Uo, Ta).call(this), ce(this, Vn, t), !(Fr || this.options.enabled === !1 || !ma(S(this, Vn)) || S(this, Vn) === 0) && ce(this, or, setInterval(() => {
    (this.options.refetchIntervalInBackground || Ja.isFocused()) && _e(this, ir, fo).call(this);
  }, S(this, Vn)));
}, Bo = new WeakSet(), Oa = function() {
  _e(this, Do, ga).call(this), _e(this, Lo, Ea).call(this, _e(this, Fo, xa).call(this));
}, Vo = new WeakSet(), wa = function() {
  S(this, rr) && (clearTimeout(S(this, rr)), ce(this, rr, void 0));
}, Uo = new WeakSet(), Ta = function() {
  S(this, or) && (clearInterval(S(this, or)), ce(this, or, void 0));
}, zo = new WeakSet(), Ca = function() {
  const t = S(this, St).getQueryCache().build(S(this, St), this.options);
  if (t === S(this, Ge))
    return;
  const n = S(this, Ge);
  ce(this, Ge, t), ce(this, jo, t.state), this.hasListeners() && (n == null || n.removeObserver(this), t.addObserver(this));
}, Ki = new WeakSet(), Kd = function(t) {
  yt.batch(() => {
    t.listeners && this.listeners.forEach((n) => {
      n(S(this, wt));
    }), S(this, St).getQueryCache().notify({
      query: S(this, Ge),
      type: "observerResultsUpdated"
    });
  });
}, ld);
function Ry(e, t) {
  return t.enabled !== !1 && e.state.data === void 0 && !(e.state.status === "error" && t.retryOnMount === !1);
}
function gc(e, t) {
  return Ry(e, t) || e.state.data !== void 0 && Sa(e, t, t.refetchOnMount);
}
function Sa(e, t, n) {
  if (t.enabled !== !1) {
    const r = typeof n == "function" ? n(e) : n;
    return r === "always" || r !== !1 && el(e, t);
  }
  return !1;
}
function xc(e, t, n, r) {
  return (e !== t || r.enabled === !1) && (!n.suspense || e.state.status !== "error") && el(e, n);
}
function el(e, t) {
  return t.enabled !== !1 && e.isStaleByTime(t.staleTime);
}
function Py(e, t) {
  return !ya(e.getCurrentResult(), t);
}
var Yd = v.createContext(
  void 0
), $y = (e) => {
  const t = v.useContext(Yd);
  if (e)
    return e;
  if (!t)
    throw new Error("No QueryClient set, use QueryClientProvider to set one");
  return t;
}, _y = ({
  client: e,
  children: t
}) => (v.useEffect(() => (e.mount(), () => {
  e.unmount();
}), [e]), /* @__PURE__ */ k.jsx(Yd.Provider, { value: e, children: t })), Gd = v.createContext(!1), ky = () => v.useContext(Gd);
Gd.Provider;
function Ny() {
  let e = !1;
  return {
    clearReset: () => {
      e = !1;
    },
    reset: () => {
      e = !0;
    },
    isReset: () => e
  };
}
var Iy = v.createContext(Ny()), Ay = () => v.useContext(Iy);
function jy(e, t) {
  return typeof e == "function" ? e(...t) : !!e;
}
var My = (e, t) => {
  (e.suspense || e.throwOnError) && (t.isReset() || (e.retryOnMount = !1));
}, Dy = (e) => {
  v.useEffect(() => {
    e.clearReset();
  }, [e]);
}, Fy = ({
  result: e,
  errorResetBoundary: t,
  throwOnError: n,
  query: r
}) => e.isError && !t.isReset() && !e.isFetching && r && jy(n, [e.error, r]), Ly = (e) => {
  e.suspense && typeof e.staleTime != "number" && (e.staleTime = 1e3);
}, By = (e, t) => (e == null ? void 0 : e.suspense) && t.isPending, Vy = (e, t, n) => t.fetchOptimistic(e).catch(() => {
  n.clearReset();
});
function Uy(e, t, n) {
  if (process.env.NODE_ENV !== "production" && (typeof e != "object" || Array.isArray(e)))
    throw new Error(
      'Bad argument type. Starting with v5, only the "Object" form is allowed when calling query related functions. Please use the error stack to find the culprit call. More info here: https://tanstack.com/query/latest/docs/react/guides/migrating-to-v5#supports-a-single-signature-one-object'
    );
  const r = $y(n), i = ky(), s = Ay(), a = r.defaultQueryOptions(e);
  a._optimisticResults = i ? "isRestoring" : "optimistic", Ly(a), My(a, s), Dy(s);
  const [l] = v.useState(
    () => new t(
      r,
      a
    )
  ), c = l.getOptimisticResult(a);
  if (v.useSyncExternalStore(
    v.useCallback(
      (u) => {
        const d = i ? () => {
        } : l.subscribe(yt.batchCalls(u));
        return l.updateResult(), d;
      },
      [l, i]
    ),
    () => l.getCurrentResult(),
    () => l.getCurrentResult()
  ), v.useEffect(() => {
    l.setOptions(a, { listeners: !1 });
  }, [a, l]), By(a, c))
    throw Vy(a, l, s);
  if (Fy({
    result: c,
    errorResetBoundary: s,
    throwOnError: a.throwOnError,
    query: r.getQueryCache().get(a.queryHash)
  }))
    throw c.error;
  return a.notifyOnChangeProps ? c : l.trackResult(c);
}
function zy(e, t) {
  return Uy(e, Sy, t);
}
function Ra() {
  return Ra = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Ra.apply(this, arguments);
}
var Qd = ["shift", "alt", "meta", "mod", "ctrl"], Wy = {
  esc: "escape",
  return: "enter",
  ".": "period",
  ",": "comma",
  "-": "slash",
  " ": "space",
  "`": "backquote",
  "#": "backslash",
  "+": "bracketright",
  ShiftLeft: "shift",
  ShiftRight: "shift",
  AltLeft: "alt",
  AltRight: "alt",
  MetaLeft: "meta",
  MetaRight: "meta",
  OSLeft: "meta",
  OSRight: "meta",
  ControlLeft: "ctrl",
  ControlRight: "ctrl"
};
function Un(e) {
  return (Wy[e] || e).trim().toLowerCase().replace(/key|digit|numpad|arrow/, "");
}
function qy(e) {
  return Qd.includes(e);
}
function Ls(e, t) {
  return t === void 0 && (t = ","), e.split(t);
}
function Bs(e, t, n) {
  t === void 0 && (t = "+");
  var r = e.toLocaleLowerCase().split(t).map(function(a) {
    return Un(a);
  }), i = {
    alt: r.includes("alt"),
    ctrl: r.includes("ctrl") || r.includes("control"),
    shift: r.includes("shift"),
    meta: r.includes("meta"),
    mod: r.includes("mod")
  }, s = r.filter(function(a) {
    return !Qd.includes(a);
  });
  return Ra({}, i, {
    keys: s,
    description: n
  });
}
(function() {
  typeof document < "u" && (document.addEventListener("keydown", function(e) {
    e.key !== void 0 && Xd([Un(e.key), Un(e.code)]);
  }), document.addEventListener("keyup", function(e) {
    e.key !== void 0 && Jd([Un(e.key), Un(e.code)]);
  })), typeof window < "u" && window.addEventListener("blur", function() {
    zn.clear();
  });
})();
var zn = /* @__PURE__ */ new Set();
function tl(e) {
  return Array.isArray(e);
}
function Hy(e, t) {
  t === void 0 && (t = ",");
  var n = tl(e) ? e : e.split(t);
  return n.every(function(r) {
    return zn.has(r.trim().toLowerCase());
  });
}
function Xd(e) {
  var t = Array.isArray(e) ? e : [e];
  zn.has("meta") && zn.forEach(function(n) {
    return !qy(n) && zn.delete(n.toLowerCase());
  }), t.forEach(function(n) {
    return zn.add(n.toLowerCase());
  });
}
function Jd(e) {
  var t = Array.isArray(e) ? e : [e];
  e === "meta" ? zn.clear() : t.forEach(function(n) {
    return zn.delete(n.toLowerCase());
  });
}
function Ky(e, t, n) {
  (typeof n == "function" && n(e, t) || n === !0) && e.preventDefault();
}
function Yy(e, t, n) {
  return typeof n == "function" ? n(e, t) : n === !0 || n === void 0;
}
function Gy(e) {
  return Zd(e, ["input", "textarea", "select"]);
}
function Zd(e, t) {
  var n = e.target;
  t === void 0 && (t = !1);
  var r = n && n.tagName;
  return tl(t) ? !!(r && t && t.some(function(i) {
    return i.toLowerCase() === r.toLowerCase();
  })) : !!(r && t && t === !0);
}
function Qy(e, t) {
  return e.length === 0 && t ? (console.warn('A hotkey has the "scopes" option set, however no active scopes were found. If you want to use the global scopes feature, you need to wrap your app in a <HotkeysProvider>'), !0) : t ? e.some(function(n) {
    return t.includes(n);
  }) || e.includes("*") : !0;
}
var Xy = function(t, n, r) {
  r === void 0 && (r = !1);
  var i = n.alt, s = n.meta, a = n.mod, l = n.shift, c = n.ctrl, u = n.keys, d = t.key, f = t.code, p = t.ctrlKey, b = t.metaKey, y = t.shiftKey, h = t.altKey, m = Un(f), g = d.toLowerCase();
  if (!(u != null && u.includes(m)) && !(u != null && u.includes(g)) && !["ctrl", "control", "unknown", "meta", "alt", "shift", "os"].includes(m))
    return !1;
  if (!r) {
    if (i === !h && g !== "alt" || l === !y && g !== "shift")
      return !1;
    if (a) {
      if (!b && !p)
        return !1;
    } else if (s === !b && g !== "meta" && g !== "os" || c === !p && g !== "ctrl" && g !== "control")
      return !1;
  }
  return u && u.length === 1 && (u.includes(g) || u.includes(m)) ? !0 : u ? Hy(u) : !u;
}, Jy = /* @__PURE__ */ ud(void 0), Zy = function() {
  return Yi(Jy);
};
function ef(e, t) {
  return e && t && typeof e == "object" && typeof t == "object" ? Object.keys(e).length === Object.keys(t).length && //@ts-ignore
  Object.keys(e).reduce(function(n, r) {
    return n && ef(e[r], t[r]);
  }, !0) : e === t;
}
var eb = /* @__PURE__ */ ud({
  hotkeys: [],
  enabledScopes: [],
  toggleScope: function() {
  },
  enableScope: function() {
  },
  disableScope: function() {
  }
}), tb = function() {
  return Yi(eb);
};
function nb(e) {
  var t = bi(void 0);
  return ef(t.current, e) || (t.current = e), t.current;
}
var Ec = function(t) {
  t.stopPropagation(), t.preventDefault(), t.stopImmediatePropagation();
}, rb = typeof window < "u" ? Sh : cd;
function ob(e, t, n, r) {
  var i = bi(null), s = bi(!1), a = n instanceof Array ? r instanceof Array ? void 0 : r : n, l = tl(e) ? e.join(a == null ? void 0 : a.splitKey) : e, c = n instanceof Array ? n : r instanceof Array ? r : void 0, u = Ch(t, c ?? []), d = bi(u);
  c ? d.current = u : d.current = t;
  var f = nb(a), p = tb(), b = p.enabledScopes, y = Zy();
  return rb(function() {
    if (!((f == null ? void 0 : f.enabled) === !1 || !Qy(b, f == null ? void 0 : f.scopes))) {
      var h = function(O, x) {
        var P;
        if (x === void 0 && (x = !1), !(Gy(O) && !Zd(O, f == null ? void 0 : f.enableOnFormTags))) {
          if (i.current !== null) {
            var R = i.current.getRootNode();
            if ((R instanceof Document || R instanceof ShadowRoot) && R.activeElement !== i.current && !i.current.contains(R.activeElement)) {
              Ec(O);
              return;
            }
          }
          (P = O.target) != null && P.isContentEditable && !(f != null && f.enableOnContentEditable) || Ls(l, f == null ? void 0 : f.splitKey).forEach(function(N) {
            var A, L = Bs(N, f == null ? void 0 : f.combinationKey);
            if (Xy(O, L, f == null ? void 0 : f.ignoreModifiers) || (A = L.keys) != null && A.includes("*")) {
              if (f != null && f.ignoreEventWhen != null && f.ignoreEventWhen(O) || x && s.current)
                return;
              if (Ky(O, L, f == null ? void 0 : f.preventDefault), !Yy(O, L, f == null ? void 0 : f.enabled)) {
                Ec(O);
                return;
              }
              d.current(O, L), x || (s.current = !0);
            }
          });
        }
      }, m = function(O) {
        O.key !== void 0 && (Xd(Un(O.code)), ((f == null ? void 0 : f.keydown) === void 0 && (f == null ? void 0 : f.keyup) !== !0 || f != null && f.keydown) && h(O));
      }, g = function(O) {
        O.key !== void 0 && (Jd(Un(O.code)), s.current = !1, f != null && f.keyup && h(O, !0));
      }, C = i.current || (a == null ? void 0 : a.document) || document;
      return C.addEventListener("keyup", g), C.addEventListener("keydown", m), y && Ls(l, f == null ? void 0 : f.splitKey).forEach(function(E) {
        return y.addHotkey(Bs(E, f == null ? void 0 : f.combinationKey, f == null ? void 0 : f.description));
      }), function() {
        C.removeEventListener("keyup", g), C.removeEventListener("keydown", m), y && Ls(l, f == null ? void 0 : f.splitKey).forEach(function(E) {
          return y.removeHotkey(Bs(E, f == null ? void 0 : f.combinationKey, f == null ? void 0 : f.description));
        });
      };
    }
  }, [l, f, b]), i;
}
const ib = {
  clients: {
    all: ["clients"]
  }
}, sb = async (e = "/v4/clients?limit=100", t) => Ko.axios().get(e, t).then(({ data: n }) => n), ab = (e) => zy({
  queryKey: ib.clients.all,
  queryFn: () => sb(),
  ...e.options
}), lb = {
  black: "#000",
  white: "#fff"
}, wo = lb, cb = {
  50: "#ffebee",
  100: "#ffcdd2",
  200: "#ef9a9a",
  300: "#e57373",
  400: "#ef5350",
  500: "#f44336",
  600: "#e53935",
  700: "#d32f2f",
  800: "#c62828",
  900: "#b71c1c",
  A100: "#ff8a80",
  A200: "#ff5252",
  A400: "#ff1744",
  A700: "#d50000"
}, pr = cb, ub = {
  50: "#f3e5f5",
  100: "#e1bee7",
  200: "#ce93d8",
  300: "#ba68c8",
  400: "#ab47bc",
  500: "#9c27b0",
  600: "#8e24aa",
  700: "#7b1fa2",
  800: "#6a1b9a",
  900: "#4a148c",
  A100: "#ea80fc",
  A200: "#e040fb",
  A400: "#d500f9",
  A700: "#aa00ff"
}, hr = ub, db = {
  50: "#e3f2fd",
  100: "#bbdefb",
  200: "#90caf9",
  300: "#64b5f6",
  400: "#42a5f5",
  500: "#2196f3",
  600: "#1e88e5",
  700: "#1976d2",
  800: "#1565c0",
  900: "#0d47a1",
  A100: "#82b1ff",
  A200: "#448aff",
  A400: "#2979ff",
  A700: "#2962ff"
}, mr = db, fb = {
  50: "#e1f5fe",
  100: "#b3e5fc",
  200: "#81d4fa",
  300: "#4fc3f7",
  400: "#29b6f6",
  500: "#03a9f4",
  600: "#039be5",
  700: "#0288d1",
  800: "#0277bd",
  900: "#01579b",
  A100: "#80d8ff",
  A200: "#40c4ff",
  A400: "#00b0ff",
  A700: "#0091ea"
}, yr = fb, pb = {
  50: "#e8f5e9",
  100: "#c8e6c9",
  200: "#a5d6a7",
  300: "#81c784",
  400: "#66bb6a",
  500: "#4caf50",
  600: "#43a047",
  700: "#388e3c",
  800: "#2e7d32",
  900: "#1b5e20",
  A100: "#b9f6ca",
  A200: "#69f0ae",
  A400: "#00e676",
  A700: "#00c853"
}, br = pb, hb = {
  50: "#fff3e0",
  100: "#ffe0b2",
  200: "#ffcc80",
  300: "#ffb74d",
  400: "#ffa726",
  500: "#ff9800",
  600: "#fb8c00",
  700: "#f57c00",
  800: "#ef6c00",
  900: "#e65100",
  A100: "#ffd180",
  A200: "#ffab40",
  A400: "#ff9100",
  A700: "#ff6d00"
}, so = hb, mb = {
  50: "#fafafa",
  100: "#f5f5f5",
  200: "#eeeeee",
  300: "#e0e0e0",
  400: "#bdbdbd",
  500: "#9e9e9e",
  600: "#757575",
  700: "#616161",
  800: "#424242",
  900: "#212121",
  A100: "#f5f5f5",
  A200: "#eeeeee",
  A400: "#bdbdbd",
  A700: "#616161"
}, yb = mb;
function ar(e) {
  let t = "https://mui.com/production-error/?code=" + e;
  for (let n = 1; n < arguments.length; n += 1)
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified MUI error #" + e + "; visit " + t + " for the full message.";
}
const bb = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ar
}, Symbol.toStringTag, { value: "Module" })), Go = "$$material";
function w() {
  return w = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, w.apply(this, arguments);
}
function xe(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), i, s;
  for (s = 0; s < r.length; s++)
    i = r[s], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function tf(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(n) {
    return t[n] === void 0 && (t[n] = e(n)), t[n];
  };
}
var vb = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, gb = /* @__PURE__ */ tf(
  function(e) {
    return vb.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
);
function xb(e) {
  if (e.sheet)
    return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e)
      return document.styleSheets[t];
}
function Eb(e) {
  var t = document.createElement("style");
  return t.setAttribute("data-emotion", e.key), e.nonce !== void 0 && t.setAttribute("nonce", e.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t;
}
var Ob = /* @__PURE__ */ function() {
  function e(n) {
    var r = this;
    this._insertTag = function(i) {
      var s;
      r.tags.length === 0 ? r.insertionPoint ? s = r.insertionPoint.nextSibling : r.prepend ? s = r.container.firstChild : s = r.before : s = r.tags[r.tags.length - 1].nextSibling, r.container.insertBefore(i, s), r.tags.push(i);
    }, this.isSpeedy = n.speedy === void 0 ? process.env.NODE_ENV === "production" : n.speedy, this.tags = [], this.ctr = 0, this.nonce = n.nonce, this.key = n.key, this.container = n.container, this.prepend = n.prepend, this.insertionPoint = n.insertionPoint, this.before = null;
  }
  var t = e.prototype;
  return t.hydrate = function(r) {
    r.forEach(this._insertTag);
  }, t.insert = function(r) {
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(Eb(this));
    var i = this.tags[this.tags.length - 1];
    if (process.env.NODE_ENV !== "production") {
      var s = r.charCodeAt(0) === 64 && r.charCodeAt(1) === 105;
      s && this._alreadyInsertedOrderInsensitiveRule && console.error(`You're attempting to insert the following rule:
` + r + "\n\n`@import` rules must be before all other types of rules in a stylesheet but other rules have already been inserted. Please ensure that `@import` rules are before all other rules."), this._alreadyInsertedOrderInsensitiveRule = this._alreadyInsertedOrderInsensitiveRule || !s;
    }
    if (this.isSpeedy) {
      var a = xb(i);
      try {
        a.insertRule(r, a.cssRules.length);
      } catch (l) {
        process.env.NODE_ENV !== "production" && !/:(-moz-placeholder|-moz-focus-inner|-moz-focusring|-ms-input-placeholder|-moz-read-write|-moz-read-only|-ms-clear|-ms-expand|-ms-reveal){/.test(r) && console.error('There was a problem inserting the following rule: "' + r + '"', l);
      }
    } else
      i.appendChild(document.createTextNode(r));
    this.ctr++;
  }, t.flush = function() {
    this.tags.forEach(function(r) {
      return r.parentNode && r.parentNode.removeChild(r);
    }), this.tags = [], this.ctr = 0, process.env.NODE_ENV !== "production" && (this._alreadyInsertedOrderInsensitiveRule = !1);
  }, e;
}(), vt = "-ms-", ji = "-moz-", Ie = "-webkit-", nl = "comm", rl = "rule", ol = "decl", wb = "@import", nf = "@keyframes", Tb = "@layer", Cb = Math.abs, ts = String.fromCharCode, Sb = Object.assign;
function Rb(e, t) {
  return mt(e, 0) ^ 45 ? (((t << 2 ^ mt(e, 0)) << 2 ^ mt(e, 1)) << 2 ^ mt(e, 2)) << 2 ^ mt(e, 3) : 0;
}
function rf(e) {
  return e.trim();
}
function Pb(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function Ae(e, t, n) {
  return e.replace(t, n);
}
function Pa(e, t) {
  return e.indexOf(t);
}
function mt(e, t) {
  return e.charCodeAt(t) | 0;
}
function To(e, t, n) {
  return e.slice(t, n);
}
function fn(e) {
  return e.length;
}
function il(e) {
  return e.length;
}
function di(e, t) {
  return t.push(e), e;
}
function $b(e, t) {
  return e.map(t).join("");
}
var ns = 1, Lr = 1, of = 0, $t = 0, at = 0, Hr = "";
function rs(e, t, n, r, i, s, a) {
  return { value: e, root: t, parent: n, type: r, props: i, children: s, line: ns, column: Lr, length: a, return: "" };
}
function ao(e, t) {
  return Sb(rs("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function _b() {
  return at;
}
function kb() {
  return at = $t > 0 ? mt(Hr, --$t) : 0, Lr--, at === 10 && (Lr = 1, ns--), at;
}
function jt() {
  return at = $t < of ? mt(Hr, $t++) : 0, Lr++, at === 10 && (Lr = 1, ns++), at;
}
function hn() {
  return mt(Hr, $t);
}
function Ci() {
  return $t;
}
function Qo(e, t) {
  return To(Hr, e, t);
}
function Co(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function sf(e) {
  return ns = Lr = 1, of = fn(Hr = e), $t = 0, [];
}
function af(e) {
  return Hr = "", e;
}
function Si(e) {
  return rf(Qo($t - 1, $a(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function Nb(e) {
  for (; (at = hn()) && at < 33; )
    jt();
  return Co(e) > 2 || Co(at) > 3 ? "" : " ";
}
function Ib(e, t) {
  for (; --t && jt() && !(at < 48 || at > 102 || at > 57 && at < 65 || at > 70 && at < 97); )
    ;
  return Qo(e, Ci() + (t < 6 && hn() == 32 && jt() == 32));
}
function $a(e) {
  for (; jt(); )
    switch (at) {
      case e:
        return $t;
      case 34:
      case 39:
        e !== 34 && e !== 39 && $a(at);
        break;
      case 40:
        e === 41 && $a(e);
        break;
      case 92:
        jt();
        break;
    }
  return $t;
}
function Ab(e, t) {
  for (; jt() && e + at !== 57; )
    if (e + at === 84 && hn() === 47)
      break;
  return "/*" + Qo(t, $t - 1) + "*" + ts(e === 47 ? e : jt());
}
function jb(e) {
  for (; !Co(hn()); )
    jt();
  return Qo(e, $t);
}
function Mb(e) {
  return af(Ri("", null, null, null, [""], e = sf(e), 0, [0], e));
}
function Ri(e, t, n, r, i, s, a, l, c) {
  for (var u = 0, d = 0, f = a, p = 0, b = 0, y = 0, h = 1, m = 1, g = 1, C = 0, E = "", O = i, x = s, P = r, R = E; m; )
    switch (y = C, C = jt()) {
      case 40:
        if (y != 108 && mt(R, f - 1) == 58) {
          Pa(R += Ae(Si(C), "&", "&\f"), "&\f") != -1 && (g = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        R += Si(C);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        R += Nb(y);
        break;
      case 92:
        R += Ib(Ci() - 1, 7);
        continue;
      case 47:
        switch (hn()) {
          case 42:
          case 47:
            di(Db(Ab(jt(), Ci()), t, n), c);
            break;
          default:
            R += "/";
        }
        break;
      case 123 * h:
        l[u++] = fn(R) * g;
      case 125 * h:
      case 59:
      case 0:
        switch (C) {
          case 0:
          case 125:
            m = 0;
          case 59 + d:
            g == -1 && (R = Ae(R, /\f/g, "")), b > 0 && fn(R) - f && di(b > 32 ? wc(R + ";", r, n, f - 1) : wc(Ae(R, " ", "") + ";", r, n, f - 2), c);
            break;
          case 59:
            R += ";";
          default:
            if (di(P = Oc(R, t, n, u, d, i, l, E, O = [], x = [], f), s), C === 123)
              if (d === 0)
                Ri(R, t, P, P, O, s, f, l, x);
              else
                switch (p === 99 && mt(R, 3) === 110 ? 100 : p) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Ri(e, P, P, r && di(Oc(e, P, P, 0, 0, i, l, E, i, O = [], f), x), i, x, f, l, r ? O : x);
                    break;
                  default:
                    Ri(R, P, P, P, [""], x, 0, l, x);
                }
        }
        u = d = b = 0, h = g = 1, E = R = "", f = a;
        break;
      case 58:
        f = 1 + fn(R), b = y;
      default:
        if (h < 1) {
          if (C == 123)
            --h;
          else if (C == 125 && h++ == 0 && kb() == 125)
            continue;
        }
        switch (R += ts(C), C * h) {
          case 38:
            g = d > 0 ? 1 : (R += "\f", -1);
            break;
          case 44:
            l[u++] = (fn(R) - 1) * g, g = 1;
            break;
          case 64:
            hn() === 45 && (R += Si(jt())), p = hn(), d = f = fn(E = R += jb(Ci())), C++;
            break;
          case 45:
            y === 45 && fn(R) == 2 && (h = 0);
        }
    }
  return s;
}
function Oc(e, t, n, r, i, s, a, l, c, u, d) {
  for (var f = i - 1, p = i === 0 ? s : [""], b = il(p), y = 0, h = 0, m = 0; y < r; ++y)
    for (var g = 0, C = To(e, f + 1, f = Cb(h = a[y])), E = e; g < b; ++g)
      (E = rf(h > 0 ? p[g] + " " + C : Ae(C, /&\f/g, p[g]))) && (c[m++] = E);
  return rs(e, t, n, i === 0 ? rl : l, c, u, d);
}
function Db(e, t, n) {
  return rs(e, t, n, nl, ts(_b()), To(e, 2, -2), 0);
}
function wc(e, t, n, r) {
  return rs(e, t, n, ol, To(e, 0, r), To(e, r + 1, -1), r);
}
function xr(e, t) {
  for (var n = "", r = il(e), i = 0; i < r; i++)
    n += t(e[i], i, e, t) || "";
  return n;
}
function Fb(e, t, n, r) {
  switch (e.type) {
    case Tb:
      if (e.children.length)
        break;
    case wb:
    case ol:
      return e.return = e.return || e.value;
    case nl:
      return "";
    case nf:
      return e.return = e.value + "{" + xr(e.children, r) + "}";
    case rl:
      e.value = e.props.join(",");
  }
  return fn(n = xr(e.children, r)) ? e.return = e.value + "{" + n + "}" : "";
}
function Lb(e) {
  var t = il(e);
  return function(n, r, i, s) {
    for (var a = "", l = 0; l < t; l++)
      a += e[l](n, r, i, s) || "";
    return a;
  };
}
function Bb(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
var Vb = function(t, n, r) {
  for (var i = 0, s = 0; i = s, s = hn(), i === 38 && s === 12 && (n[r] = 1), !Co(s); )
    jt();
  return Qo(t, $t);
}, Ub = function(t, n) {
  var r = -1, i = 44;
  do
    switch (Co(i)) {
      case 0:
        i === 38 && hn() === 12 && (n[r] = 1), t[r] += Vb($t - 1, n, r);
        break;
      case 2:
        t[r] += Si(i);
        break;
      case 4:
        if (i === 44) {
          t[++r] = hn() === 58 ? "&\f" : "", n[r] = t[r].length;
          break;
        }
      default:
        t[r] += ts(i);
    }
  while (i = jt());
  return t;
}, zb = function(t, n) {
  return af(Ub(sf(t), n));
}, Tc = /* @__PURE__ */ new WeakMap(), Wb = function(t) {
  if (!(t.type !== "rule" || !t.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  t.length < 1)) {
    for (var n = t.value, r = t.parent, i = t.column === r.column && t.line === r.line; r.type !== "rule"; )
      if (r = r.parent, !r)
        return;
    if (!(t.props.length === 1 && n.charCodeAt(0) !== 58 && !Tc.get(r)) && !i) {
      Tc.set(t, !0);
      for (var s = [], a = zb(n, s), l = r.props, c = 0, u = 0; c < a.length; c++)
        for (var d = 0; d < l.length; d++, u++)
          t.props[u] = s[c] ? a[c].replace(/&\f/g, l[d]) : l[d] + " " + a[c];
    }
  }
}, qb = function(t) {
  if (t.type === "decl") {
    var n = t.value;
    // charcode for l
    n.charCodeAt(0) === 108 && // charcode for b
    n.charCodeAt(2) === 98 && (t.return = "", t.value = "");
  }
}, Hb = "emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason", Kb = function(t) {
  return t.type === "comm" && t.children.indexOf(Hb) > -1;
}, Yb = function(t) {
  return function(n, r, i) {
    if (!(n.type !== "rule" || t.compat)) {
      var s = n.value.match(/(:first|:nth|:nth-last)-child/g);
      if (s) {
        for (var a = !!n.parent, l = a ? n.parent.children : (
          // global rule at the root level
          i
        ), c = l.length - 1; c >= 0; c--) {
          var u = l[c];
          if (u.line < n.line)
            break;
          if (u.column < n.column) {
            if (Kb(u))
              return;
            break;
          }
        }
        s.forEach(function(d) {
          console.error('The pseudo class "' + d + '" is potentially unsafe when doing server-side rendering. Try changing it to "' + d.split("-child")[0] + '-of-type".');
        });
      }
    }
  };
}, lf = function(t) {
  return t.type.charCodeAt(1) === 105 && t.type.charCodeAt(0) === 64;
}, Gb = function(t, n) {
  for (var r = t - 1; r >= 0; r--)
    if (!lf(n[r]))
      return !0;
  return !1;
}, Cc = function(t) {
  t.type = "", t.value = "", t.return = "", t.children = "", t.props = "";
}, Qb = function(t, n, r) {
  lf(t) && (t.parent ? (console.error("`@import` rules can't be nested inside other rules. Please move it to the top level and put it before regular rules. Keep in mind that they can only be used within global styles."), Cc(t)) : Gb(n, r) && (console.error("`@import` rules can't be after other rules. Please put your `@import` rules before your other rules."), Cc(t)));
};
function cf(e, t) {
  switch (Rb(e, t)) {
    case 5103:
      return Ie + "print-" + e + e;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return Ie + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return Ie + e + ji + e + vt + e + e;
    case 6828:
    case 4268:
      return Ie + e + vt + e + e;
    case 6165:
      return Ie + e + vt + "flex-" + e + e;
    case 5187:
      return Ie + e + Ae(e, /(\w+).+(:[^]+)/, Ie + "box-$1$2" + vt + "flex-$1$2") + e;
    case 5443:
      return Ie + e + vt + "flex-item-" + Ae(e, /flex-|-self/, "") + e;
    case 4675:
      return Ie + e + vt + "flex-line-pack" + Ae(e, /align-content|flex-|-self/, "") + e;
    case 5548:
      return Ie + e + vt + Ae(e, "shrink", "negative") + e;
    case 5292:
      return Ie + e + vt + Ae(e, "basis", "preferred-size") + e;
    case 6060:
      return Ie + "box-" + Ae(e, "-grow", "") + Ie + e + vt + Ae(e, "grow", "positive") + e;
    case 4554:
      return Ie + Ae(e, /([^-])(transform)/g, "$1" + Ie + "$2") + e;
    case 6187:
      return Ae(Ae(Ae(e, /(zoom-|grab)/, Ie + "$1"), /(image-set)/, Ie + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return Ae(e, /(image-set\([^]*)/, Ie + "$1$`$1");
    case 4968:
      return Ae(Ae(e, /(.+:)(flex-)?(.*)/, Ie + "box-pack:$3" + vt + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + Ie + e + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return Ae(e, /(.+)-inline(.+)/, Ie + "$1$2") + e;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (fn(e) - 1 - t > 6)
        switch (mt(e, t + 1)) {
          case 109:
            if (mt(e, t + 4) !== 45)
              break;
          case 102:
            return Ae(e, /(.+:)(.+)-([^]+)/, "$1" + Ie + "$2-$3$1" + ji + (mt(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
          case 115:
            return ~Pa(e, "stretch") ? cf(Ae(e, "stretch", "fill-available"), t) + e : e;
        }
      break;
    case 4949:
      if (mt(e, t + 1) !== 115)
        break;
    case 6444:
      switch (mt(e, fn(e) - 3 - (~Pa(e, "!important") && 10))) {
        case 107:
          return Ae(e, ":", ":" + Ie) + e;
        case 101:
          return Ae(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + Ie + (mt(e, 14) === 45 ? "inline-" : "") + "box$3$1" + Ie + "$2$3$1" + vt + "$2box$3") + e;
      }
      break;
    case 5936:
      switch (mt(e, t + 11)) {
        case 114:
          return Ie + e + vt + Ae(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return Ie + e + vt + Ae(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return Ie + e + vt + Ae(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return Ie + e + vt + e + e;
  }
  return e;
}
var Xb = function(t, n, r, i) {
  if (t.length > -1 && !t.return)
    switch (t.type) {
      case ol:
        t.return = cf(t.value, t.length);
        break;
      case nf:
        return xr([ao(t, {
          value: Ae(t.value, "@", "@" + Ie)
        })], i);
      case rl:
        if (t.length)
          return $b(t.props, function(s) {
            switch (Pb(s, /(::plac\w+|:read-\w+)/)) {
              case ":read-only":
              case ":read-write":
                return xr([ao(t, {
                  props: [Ae(s, /:(read-\w+)/, ":" + ji + "$1")]
                })], i);
              case "::placeholder":
                return xr([ao(t, {
                  props: [Ae(s, /:(plac\w+)/, ":" + Ie + "input-$1")]
                }), ao(t, {
                  props: [Ae(s, /:(plac\w+)/, ":" + ji + "$1")]
                }), ao(t, {
                  props: [Ae(s, /:(plac\w+)/, vt + "input-$1")]
                })], i);
            }
            return "";
          });
    }
}, Jb = [Xb], uf = function(t) {
  var n = t.key;
  if (process.env.NODE_ENV !== "production" && !n)
    throw new Error(`You have to configure \`key\` for your cache. Please make sure it's unique (and not equal to 'css') as it's used for linking styles to your cache.
If multiple caches share the same key they might "fight" for each other's style elements.`);
  if (n === "css") {
    var r = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(r, function(h) {
      var m = h.getAttribute("data-emotion");
      m.indexOf(" ") !== -1 && (document.head.appendChild(h), h.setAttribute("data-s", ""));
    });
  }
  var i = t.stylisPlugins || Jb;
  if (process.env.NODE_ENV !== "production" && /[^a-z-]/.test(n))
    throw new Error('Emotion key must only contain lower case alphabetical characters and - but "' + n + '" was passed');
  var s = {}, a, l = [];
  a = t.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + n + ' "]'),
    function(h) {
      for (var m = h.getAttribute("data-emotion").split(" "), g = 1; g < m.length; g++)
        s[m[g]] = !0;
      l.push(h);
    }
  );
  var c, u = [Wb, qb];
  process.env.NODE_ENV !== "production" && u.push(Yb({
    get compat() {
      return y.compat;
    }
  }), Qb);
  {
    var d, f = [Fb, process.env.NODE_ENV !== "production" ? function(h) {
      h.root || (h.return ? d.insert(h.return) : h.value && h.type !== nl && d.insert(h.value + "{}"));
    } : Bb(function(h) {
      d.insert(h);
    })], p = Lb(u.concat(i, f)), b = function(m) {
      return xr(Mb(m), p);
    };
    c = function(m, g, C, E) {
      d = C, process.env.NODE_ENV !== "production" && g.map !== void 0 && (d = {
        insert: function(x) {
          C.insert(x + g.map);
        }
      }), b(m ? m + "{" + g.styles + "}" : g.styles), E && (y.inserted[g.name] = !0);
    };
  }
  var y = {
    key: n,
    sheet: new Ob({
      key: n,
      container: a,
      nonce: t.nonce,
      speedy: t.speedy,
      prepend: t.prepend,
      insertionPoint: t.insertionPoint
    }),
    nonce: t.nonce,
    inserted: s,
    registered: {},
    insert: c
  };
  return y.sheet.hydrate(l), y;
}, fi = { exports: {} }, je = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Sc;
function Zb() {
  if (Sc)
    return je;
  Sc = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, l = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, f = e ? Symbol.for("react.suspense") : 60113, p = e ? Symbol.for("react.suspense_list") : 60120, b = e ? Symbol.for("react.memo") : 60115, y = e ? Symbol.for("react.lazy") : 60116, h = e ? Symbol.for("react.block") : 60121, m = e ? Symbol.for("react.fundamental") : 60117, g = e ? Symbol.for("react.responder") : 60118, C = e ? Symbol.for("react.scope") : 60119;
  function E(x) {
    if (typeof x == "object" && x !== null) {
      var P = x.$$typeof;
      switch (P) {
        case t:
          switch (x = x.type, x) {
            case c:
            case u:
            case r:
            case s:
            case i:
            case f:
              return x;
            default:
              switch (x = x && x.$$typeof, x) {
                case l:
                case d:
                case y:
                case b:
                case a:
                  return x;
                default:
                  return P;
              }
          }
        case n:
          return P;
      }
    }
  }
  function O(x) {
    return E(x) === u;
  }
  return je.AsyncMode = c, je.ConcurrentMode = u, je.ContextConsumer = l, je.ContextProvider = a, je.Element = t, je.ForwardRef = d, je.Fragment = r, je.Lazy = y, je.Memo = b, je.Portal = n, je.Profiler = s, je.StrictMode = i, je.Suspense = f, je.isAsyncMode = function(x) {
    return O(x) || E(x) === c;
  }, je.isConcurrentMode = O, je.isContextConsumer = function(x) {
    return E(x) === l;
  }, je.isContextProvider = function(x) {
    return E(x) === a;
  }, je.isElement = function(x) {
    return typeof x == "object" && x !== null && x.$$typeof === t;
  }, je.isForwardRef = function(x) {
    return E(x) === d;
  }, je.isFragment = function(x) {
    return E(x) === r;
  }, je.isLazy = function(x) {
    return E(x) === y;
  }, je.isMemo = function(x) {
    return E(x) === b;
  }, je.isPortal = function(x) {
    return E(x) === n;
  }, je.isProfiler = function(x) {
    return E(x) === s;
  }, je.isStrictMode = function(x) {
    return E(x) === i;
  }, je.isSuspense = function(x) {
    return E(x) === f;
  }, je.isValidElementType = function(x) {
    return typeof x == "string" || typeof x == "function" || x === r || x === u || x === s || x === i || x === f || x === p || typeof x == "object" && x !== null && (x.$$typeof === y || x.$$typeof === b || x.$$typeof === a || x.$$typeof === l || x.$$typeof === d || x.$$typeof === m || x.$$typeof === g || x.$$typeof === C || x.$$typeof === h);
  }, je.typeOf = E, je;
}
var Me = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Rc;
function ev() {
  return Rc || (Rc = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, l = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, f = e ? Symbol.for("react.suspense") : 60113, p = e ? Symbol.for("react.suspense_list") : 60120, b = e ? Symbol.for("react.memo") : 60115, y = e ? Symbol.for("react.lazy") : 60116, h = e ? Symbol.for("react.block") : 60121, m = e ? Symbol.for("react.fundamental") : 60117, g = e ? Symbol.for("react.responder") : 60118, C = e ? Symbol.for("react.scope") : 60119;
    function E(D) {
      return typeof D == "string" || typeof D == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      D === r || D === u || D === s || D === i || D === f || D === p || typeof D == "object" && D !== null && (D.$$typeof === y || D.$$typeof === b || D.$$typeof === a || D.$$typeof === l || D.$$typeof === d || D.$$typeof === m || D.$$typeof === g || D.$$typeof === C || D.$$typeof === h);
    }
    function O(D) {
      if (typeof D == "object" && D !== null) {
        var ye = D.$$typeof;
        switch (ye) {
          case t:
            var Q = D.type;
            switch (Q) {
              case c:
              case u:
              case r:
              case s:
              case i:
              case f:
                return Q;
              default:
                var be = Q && Q.$$typeof;
                switch (be) {
                  case l:
                  case d:
                  case y:
                  case b:
                  case a:
                    return be;
                  default:
                    return ye;
                }
            }
          case n:
            return ye;
        }
      }
    }
    var x = c, P = u, R = l, N = a, A = t, L = d, K = r, B = y, U = b, z = n, Y = s, M = i, G = f, W = !1;
    function le(D) {
      return W || (W = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), I(D) || O(D) === c;
    }
    function I(D) {
      return O(D) === u;
    }
    function X(D) {
      return O(D) === l;
    }
    function se(D) {
      return O(D) === a;
    }
    function oe(D) {
      return typeof D == "object" && D !== null && D.$$typeof === t;
    }
    function H(D) {
      return O(D) === d;
    }
    function Z(D) {
      return O(D) === r;
    }
    function te(D) {
      return O(D) === y;
    }
    function ue(D) {
      return O(D) === b;
    }
    function J(D) {
      return O(D) === n;
    }
    function ie(D) {
      return O(D) === s;
    }
    function he(D) {
      return O(D) === i;
    }
    function me(D) {
      return O(D) === f;
    }
    Me.AsyncMode = x, Me.ConcurrentMode = P, Me.ContextConsumer = R, Me.ContextProvider = N, Me.Element = A, Me.ForwardRef = L, Me.Fragment = K, Me.Lazy = B, Me.Memo = U, Me.Portal = z, Me.Profiler = Y, Me.StrictMode = M, Me.Suspense = G, Me.isAsyncMode = le, Me.isConcurrentMode = I, Me.isContextConsumer = X, Me.isContextProvider = se, Me.isElement = oe, Me.isForwardRef = H, Me.isFragment = Z, Me.isLazy = te, Me.isMemo = ue, Me.isPortal = J, Me.isProfiler = ie, Me.isStrictMode = he, Me.isSuspense = me, Me.isValidElementType = E, Me.typeOf = O;
  }()), Me;
}
var Pc;
function sl() {
  return Pc || (Pc = 1, process.env.NODE_ENV === "production" ? fi.exports = Zb() : fi.exports = ev()), fi.exports;
}
var df = sl(), tv = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, nv = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, ff = {};
ff[df.ForwardRef] = tv;
ff[df.Memo] = nv;
var rv = !0;
function al(e, t, n) {
  var r = "";
  return n.split(" ").forEach(function(i) {
    e[i] !== void 0 ? t.push(e[i] + ";") : r += i + " ";
  }), r;
}
var os = function(t, n, r) {
  var i = t.key + "-" + n.name;
  // we only need to add the styles to the registered cache if the
  // class name could be used further down
  // the tree but if it's a string tag, we know it won't
  // so we don't have to add it to registered cache.
  // this improves memory usage since we can avoid storing the whole style string
  (r === !1 || // we need to always store it if we're in compat mode and
  // in node since emotion-server relies on whether a style is in
  // the registered cache to know whether a style is global or not
  // also, note that this check will be dead code eliminated in the browser
  rv === !1) && t.registered[i] === void 0 && (t.registered[i] = n.styles);
}, is = function(t, n, r) {
  os(t, n, r);
  var i = t.key + "-" + n.name;
  if (t.inserted[n.name] === void 0) {
    var s = n;
    do
      t.insert(n === s ? "." + i : "", s, t.sheet, !0), s = s.next;
    while (s !== void 0);
  }
};
function ov(e) {
  for (var t = 0, n, r = 0, i = e.length; i >= 4; ++r, i -= 4)
    n = e.charCodeAt(r) & 255 | (e.charCodeAt(++r) & 255) << 8 | (e.charCodeAt(++r) & 255) << 16 | (e.charCodeAt(++r) & 255) << 24, n = /* Math.imul(k, m): */
    (n & 65535) * 1540483477 + ((n >>> 16) * 59797 << 16), n ^= /* k >>> r: */
    n >>> 24, t = /* Math.imul(k, m): */
    (n & 65535) * 1540483477 + ((n >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  switch (i) {
    case 3:
      t ^= (e.charCodeAt(r + 2) & 255) << 16;
    case 2:
      t ^= (e.charCodeAt(r + 1) & 255) << 8;
    case 1:
      t ^= e.charCodeAt(r) & 255, t = /* Math.imul(h, m): */
      (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  }
  return t ^= t >>> 13, t = /* Math.imul(h, m): */
  (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16), ((t ^ t >>> 15) >>> 0).toString(36);
}
var iv = {
  animationIterationCount: 1,
  aspectRatio: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
}, $c = `You have illegal escape sequence in your template literal, most likely inside content's property value.
Because you write your CSS inside a JavaScript string you actually have to do double escaping, so for example "content: '\\00d7';" should become "content: '\\\\00d7';".
You can read more about this here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences`, sv = "You have passed in falsy value as style object's key (can happen when in example you pass unexported component as computed key).", av = /[A-Z]|^ms/g, pf = /_EMO_([^_]+?)_([^]*?)_EMO_/g, ll = function(t) {
  return t.charCodeAt(1) === 45;
}, _c = function(t) {
  return t != null && typeof t != "boolean";
}, Vs = /* @__PURE__ */ tf(function(e) {
  return ll(e) ? e : e.replace(av, "-$&").toLowerCase();
}), Mi = function(t, n) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof n == "string")
        return n.replace(pf, function(r, i, s) {
          return tn = {
            name: i,
            styles: s,
            next: tn
          }, i;
        });
  }
  return iv[t] !== 1 && !ll(t) && typeof n == "number" && n !== 0 ? n + "px" : n;
};
if (process.env.NODE_ENV !== "production") {
  var lv = /(var|attr|counters?|url|element|(((repeating-)?(linear|radial))|conic)-gradient)\(|(no-)?(open|close)-quote/, cv = ["normal", "none", "initial", "inherit", "unset"], uv = Mi, dv = /^-ms-/, fv = /-(.)/g, kc = {};
  Mi = function(t, n) {
    if (t === "content" && (typeof n != "string" || cv.indexOf(n) === -1 && !lv.test(n) && (n.charAt(0) !== n.charAt(n.length - 1) || n.charAt(0) !== '"' && n.charAt(0) !== "'")))
      throw new Error("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"" + n + "\"'`");
    var r = uv(t, n);
    return r !== "" && !ll(t) && t.indexOf("-") !== -1 && kc[t] === void 0 && (kc[t] = !0, console.error("Using kebab-case for css properties in objects is not supported. Did you mean " + t.replace(dv, "ms-").replace(fv, function(i, s) {
      return s.toUpperCase();
    }) + "?")), r;
  };
}
var hf = "Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";
function So(e, t, n) {
  if (n == null)
    return "";
  if (n.__emotion_styles !== void 0) {
    if (process.env.NODE_ENV !== "production" && n.toString() === "NO_COMPONENT_SELECTOR")
      throw new Error(hf);
    return n;
  }
  switch (typeof n) {
    case "boolean":
      return "";
    case "object": {
      if (n.anim === 1)
        return tn = {
          name: n.name,
          styles: n.styles,
          next: tn
        }, n.name;
      if (n.styles !== void 0) {
        var r = n.next;
        if (r !== void 0)
          for (; r !== void 0; )
            tn = {
              name: r.name,
              styles: r.styles,
              next: tn
            }, r = r.next;
        var i = n.styles + ";";
        return process.env.NODE_ENV !== "production" && n.map !== void 0 && (i += n.map), i;
      }
      return pv(e, t, n);
    }
    case "function": {
      if (e !== void 0) {
        var s = tn, a = n(e);
        return tn = s, So(e, t, a);
      } else
        process.env.NODE_ENV !== "production" && console.error("Functions that are interpolated in css calls will be stringified.\nIf you want to have a css call based on props, create a function that returns a css call like this\nlet dynamicStyle = (props) => css`color: ${props.color}`\nIt can be called directly with props or interpolated in a styled call like this\nlet SomeComponent = styled('div')`${dynamicStyle}`");
      break;
    }
    case "string":
      if (process.env.NODE_ENV !== "production") {
        var l = [], c = n.replace(pf, function(d, f, p) {
          var b = "animation" + l.length;
          return l.push("const " + b + " = keyframes`" + p.replace(/^@keyframes animation-\w+/, "") + "`"), "${" + b + "}";
        });
        l.length && console.error("`keyframes` output got interpolated into plain string, please wrap it with `css`.\n\nInstead of doing this:\n\n" + [].concat(l, ["`" + c + "`"]).join(`
`) + `

You should wrap it with \`css\` like this:

` + ("css`" + c + "`"));
      }
      break;
  }
  if (t == null)
    return n;
  var u = t[n];
  return u !== void 0 ? u : n;
}
function pv(e, t, n) {
  var r = "";
  if (Array.isArray(n))
    for (var i = 0; i < n.length; i++)
      r += So(e, t, n[i]) + ";";
  else
    for (var s in n) {
      var a = n[s];
      if (typeof a != "object")
        t != null && t[a] !== void 0 ? r += s + "{" + t[a] + "}" : _c(a) && (r += Vs(s) + ":" + Mi(s, a) + ";");
      else {
        if (s === "NO_COMPONENT_SELECTOR" && process.env.NODE_ENV !== "production")
          throw new Error(hf);
        if (Array.isArray(a) && typeof a[0] == "string" && (t == null || t[a[0]] === void 0))
          for (var l = 0; l < a.length; l++)
            _c(a[l]) && (r += Vs(s) + ":" + Mi(s, a[l]) + ";");
        else {
          var c = So(e, t, a);
          switch (s) {
            case "animation":
            case "animationName": {
              r += Vs(s) + ":" + c + ";";
              break;
            }
            default:
              process.env.NODE_ENV !== "production" && s === "undefined" && console.error(sv), r += s + "{" + c + "}";
          }
        }
      }
    }
  return r;
}
var Nc = /label:\s*([^\s;\n{]+)\s*(;|$)/g, mf;
process.env.NODE_ENV !== "production" && (mf = /\/\*#\ssourceMappingURL=data:application\/json;\S+\s+\*\//g);
var tn, Br = function(t, n, r) {
  if (t.length === 1 && typeof t[0] == "object" && t[0] !== null && t[0].styles !== void 0)
    return t[0];
  var i = !0, s = "";
  tn = void 0;
  var a = t[0];
  a == null || a.raw === void 0 ? (i = !1, s += So(r, n, a)) : (process.env.NODE_ENV !== "production" && a[0] === void 0 && console.error($c), s += a[0]);
  for (var l = 1; l < t.length; l++)
    s += So(r, n, t[l]), i && (process.env.NODE_ENV !== "production" && a[l] === void 0 && console.error($c), s += a[l]);
  var c;
  process.env.NODE_ENV !== "production" && (s = s.replace(mf, function(p) {
    return c = p, "";
  })), Nc.lastIndex = 0;
  for (var u = "", d; (d = Nc.exec(s)) !== null; )
    u += "-" + // $FlowFixMe we know it's not null
    d[1];
  var f = ov(s) + u;
  return process.env.NODE_ENV !== "production" ? {
    name: f,
    styles: s,
    map: c,
    next: tn,
    toString: function() {
      return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
    }
  } : {
    name: f,
    styles: s,
    next: tn
  };
}, hv = function(t) {
  return t();
}, yf = v.useInsertionEffect ? v.useInsertionEffect : !1, cl = yf || hv, Ic = yf || v.useLayoutEffect, mv = {}.hasOwnProperty, ul = /* @__PURE__ */ v.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ uf({
    key: "css"
  }) : null
);
process.env.NODE_ENV !== "production" && (ul.displayName = "EmotionCacheContext");
var yv = ul.Provider, ss = function(t) {
  return /* @__PURE__ */ Rh(function(n, r) {
    var i = Yi(ul);
    return t(n, i, r);
  });
}, ur = /* @__PURE__ */ v.createContext({});
process.env.NODE_ENV !== "production" && (ur.displayName = "EmotionThemeContext");
var Ac = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", jc = "__EMOTION_LABEL_PLEASE_DO_NOT_USE__", bv = function(t) {
  var n = t.cache, r = t.serialized, i = t.isStringTag;
  return os(n, r, i), cl(function() {
    return is(n, r, i);
  }), null;
}, vv = /* @__PURE__ */ ss(function(e, t, n) {
  var r = e.css;
  typeof r == "string" && t.registered[r] !== void 0 && (r = t.registered[r]);
  var i = e[Ac], s = [r], a = "";
  typeof e.className == "string" ? a = al(t.registered, s, e.className) : e.className != null && (a = e.className + " ");
  var l = Br(s, void 0, v.useContext(ur));
  if (process.env.NODE_ENV !== "production" && l.name.indexOf("-") === -1) {
    var c = e[jc];
    c && (l = Br([l, "label:" + c + ";"]));
  }
  a += t.key + "-" + l.name;
  var u = {};
  for (var d in e)
    mv.call(e, d) && d !== "css" && d !== Ac && (process.env.NODE_ENV === "production" || d !== jc) && (u[d] = e[d]);
  return u.ref = n, u.className = a, /* @__PURE__ */ v.createElement(v.Fragment, null, /* @__PURE__ */ v.createElement(bv, {
    cache: t,
    serialized: l,
    isStringTag: typeof i == "string"
  }), /* @__PURE__ */ v.createElement(i, u));
});
process.env.NODE_ENV !== "production" && (vv.displayName = "EmotionCssPropInternal");
var gv = {
  name: "@emotion/react",
  version: "11.11.4",
  main: "dist/emotion-react.cjs.js",
  module: "dist/emotion-react.esm.js",
  browser: {
    "./dist/emotion-react.esm.js": "./dist/emotion-react.browser.esm.js"
  },
  exports: {
    ".": {
      module: {
        worker: "./dist/emotion-react.worker.esm.js",
        browser: "./dist/emotion-react.browser.esm.js",
        default: "./dist/emotion-react.esm.js"
      },
      import: "./dist/emotion-react.cjs.mjs",
      default: "./dist/emotion-react.cjs.js"
    },
    "./jsx-runtime": {
      module: {
        worker: "./jsx-runtime/dist/emotion-react-jsx-runtime.worker.esm.js",
        browser: "./jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js",
        default: "./jsx-runtime/dist/emotion-react-jsx-runtime.esm.js"
      },
      import: "./jsx-runtime/dist/emotion-react-jsx-runtime.cjs.mjs",
      default: "./jsx-runtime/dist/emotion-react-jsx-runtime.cjs.js"
    },
    "./_isolated-hnrs": {
      module: {
        worker: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.worker.esm.js",
        browser: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.browser.esm.js",
        default: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.esm.js"
      },
      import: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.cjs.mjs",
      default: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.cjs.js"
    },
    "./jsx-dev-runtime": {
      module: {
        worker: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.worker.esm.js",
        browser: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.browser.esm.js",
        default: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.esm.js"
      },
      import: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.cjs.mjs",
      default: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.cjs.js"
    },
    "./package.json": "./package.json",
    "./types/css-prop": "./types/css-prop.d.ts",
    "./macro": {
      types: {
        import: "./macro.d.mts",
        default: "./macro.d.ts"
      },
      default: "./macro.js"
    }
  },
  types: "types/index.d.ts",
  files: [
    "src",
    "dist",
    "jsx-runtime",
    "jsx-dev-runtime",
    "_isolated-hnrs",
    "types/*.d.ts",
    "macro.*"
  ],
  sideEffects: !1,
  author: "Emotion Contributors",
  license: "MIT",
  scripts: {
    "test:typescript": "dtslint types"
  },
  dependencies: {
    "@babel/runtime": "^7.18.3",
    "@emotion/babel-plugin": "^11.11.0",
    "@emotion/cache": "^11.11.0",
    "@emotion/serialize": "^1.1.3",
    "@emotion/use-insertion-effect-with-fallbacks": "^1.0.1",
    "@emotion/utils": "^1.2.1",
    "@emotion/weak-memoize": "^0.3.1",
    "hoist-non-react-statics": "^3.3.1"
  },
  peerDependencies: {
    react: ">=16.8.0"
  },
  peerDependenciesMeta: {
    "@types/react": {
      optional: !0
    }
  },
  devDependencies: {
    "@definitelytyped/dtslint": "0.0.112",
    "@emotion/css": "11.11.2",
    "@emotion/css-prettifier": "1.1.3",
    "@emotion/server": "11.11.0",
    "@emotion/styled": "11.11.0",
    "html-tag-names": "^1.1.2",
    react: "16.14.0",
    "svg-tag-names": "^1.1.1",
    typescript: "^4.5.5"
  },
  repository: "https://github.com/emotion-js/emotion/tree/main/packages/react",
  publishConfig: {
    access: "public"
  },
  "umd:main": "dist/emotion-react.umd.min.js",
  preconstruct: {
    entrypoints: [
      "./index.js",
      "./jsx-runtime.js",
      "./jsx-dev-runtime.js",
      "./_isolated-hnrs.js"
    ],
    umdName: "emotionReact",
    exports: {
      envConditions: [
        "browser",
        "worker"
      ],
      extra: {
        "./types/css-prop": "./types/css-prop.d.ts",
        "./macro": {
          types: {
            import: "./macro.d.mts",
            default: "./macro.d.ts"
          },
          default: "./macro.js"
        }
      }
    }
  }
}, Mc = !1, bf = /* @__PURE__ */ ss(function(e, t) {
  process.env.NODE_ENV !== "production" && !Mc && // check for className as well since the user is
  // probably using the custom createElement which
  // means it will be turned into a className prop
  // $FlowFixMe I don't really want to add it to the type since it shouldn't be used
  (e.className || e.css) && (console.error("It looks like you're using the css prop on Global, did you mean to use the styles prop instead?"), Mc = !0);
  var n = e.styles, r = Br([n], void 0, v.useContext(ur)), i = v.useRef();
  return Ic(function() {
    var s = t.key + "-global", a = new t.sheet.constructor({
      key: s,
      nonce: t.sheet.nonce,
      container: t.sheet.container,
      speedy: t.sheet.isSpeedy
    }), l = !1, c = document.querySelector('style[data-emotion="' + s + " " + r.name + '"]');
    return t.sheet.tags.length && (a.before = t.sheet.tags[0]), c !== null && (l = !0, c.setAttribute("data-emotion", s), a.hydrate([c])), i.current = [a, l], function() {
      a.flush();
    };
  }, [t]), Ic(function() {
    var s = i.current, a = s[0], l = s[1];
    if (l) {
      s[1] = !1;
      return;
    }
    if (r.next !== void 0 && is(t, r.next, !0), a.tags.length) {
      var c = a.tags[a.tags.length - 1].nextElementSibling;
      a.before = c, a.flush();
    }
    t.insert("", r, a, !1);
  }, [t, r.name]), null;
});
process.env.NODE_ENV !== "production" && (bf.displayName = "EmotionGlobal");
function as() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return Br(t);
}
var Kr = function() {
  var t = as.apply(void 0, arguments), n = "animation-" + t.name;
  return {
    name: n,
    styles: "@keyframes " + n + "{" + t.styles + "}",
    anim: 1,
    toString: function() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    }
  };
}, xv = function e(t) {
  for (var n = t.length, r = 0, i = ""; r < n; r++) {
    var s = t[r];
    if (s != null) {
      var a = void 0;
      switch (typeof s) {
        case "boolean":
          break;
        case "object": {
          if (Array.isArray(s))
            a = e(s);
          else {
            process.env.NODE_ENV !== "production" && s.styles !== void 0 && s.name !== void 0 && console.error("You have passed styles created with `css` from `@emotion/react` package to the `cx`.\n`cx` is meant to compose class names (strings) so you should convert those styles to a class name by passing them to the `css` received from <ClassNames/> component."), a = "";
            for (var l in s)
              s[l] && l && (a && (a += " "), a += l);
          }
          break;
        }
        default:
          a = s;
      }
      a && (i && (i += " "), i += a);
    }
  }
  return i;
};
function Ev(e, t, n) {
  var r = [], i = al(e, r, n);
  return r.length < 2 ? n : i + t(r);
}
var Ov = function(t) {
  var n = t.cache, r = t.serializedArr;
  return cl(function() {
    for (var i = 0; i < r.length; i++)
      is(n, r[i], !1);
  }), null;
}, wv = /* @__PURE__ */ ss(function(e, t) {
  var n = !1, r = [], i = function() {
    if (n && process.env.NODE_ENV !== "production")
      throw new Error("css can only be used during render");
    for (var u = arguments.length, d = new Array(u), f = 0; f < u; f++)
      d[f] = arguments[f];
    var p = Br(d, t.registered);
    return r.push(p), os(t, p, !1), t.key + "-" + p.name;
  }, s = function() {
    if (n && process.env.NODE_ENV !== "production")
      throw new Error("cx can only be used during render");
    for (var u = arguments.length, d = new Array(u), f = 0; f < u; f++)
      d[f] = arguments[f];
    return Ev(t.registered, i, xv(d));
  }, a = {
    css: i,
    cx: s,
    theme: v.useContext(ur)
  }, l = e.children(a);
  return n = !0, /* @__PURE__ */ v.createElement(v.Fragment, null, /* @__PURE__ */ v.createElement(Ov, {
    cache: t,
    serializedArr: r
  }), l);
});
process.env.NODE_ENV !== "production" && (wv.displayName = "EmotionClassNames");
if (process.env.NODE_ENV !== "production") {
  var Dc = !0, Tv = typeof jest < "u" || typeof vi < "u";
  if (Dc && !Tv) {
    var Fc = (
      // $FlowIgnore
      typeof globalThis < "u" ? globalThis : Dc ? window : global
    ), Lc = "__EMOTION_REACT_" + gv.version.split(".")[0] + "__";
    Fc[Lc] && console.warn("You are loading @emotion/react when it is already loaded. Running multiple instances may cause problems. This can happen if multiple versions are used, or if multiple builds of the same version are used."), Fc[Lc] = !0;
  }
}
var Cv = gb, Sv = function(t) {
  return t !== "theme";
}, Bc = function(t) {
  return typeof t == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  t.charCodeAt(0) > 96 ? Cv : Sv;
}, Vc = function(t, n, r) {
  var i;
  if (n) {
    var s = n.shouldForwardProp;
    i = t.__emotion_forwardProp && s ? function(a) {
      return t.__emotion_forwardProp(a) && s(a);
    } : s;
  }
  return typeof i != "function" && r && (i = t.__emotion_forwardProp), i;
}, Uc = `You have illegal escape sequence in your template literal, most likely inside content's property value.
Because you write your CSS inside a JavaScript string you actually have to do double escaping, so for example "content: '\\00d7';" should become "content: '\\\\00d7';".
You can read more about this here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences`, Rv = function(t) {
  var n = t.cache, r = t.serialized, i = t.isStringTag;
  return os(n, r, i), cl(function() {
    return is(n, r, i);
  }), null;
}, Pv = function e(t, n) {
  if (process.env.NODE_ENV !== "production" && t === void 0)
    throw new Error(`You are trying to create a styled element with an undefined component.
You may have forgotten to import it.`);
  var r = t.__emotion_real === t, i = r && t.__emotion_base || t, s, a;
  n !== void 0 && (s = n.label, a = n.target);
  var l = Vc(t, n, r), c = l || Bc(i), u = !c("as");
  return function() {
    var d = arguments, f = r && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
    if (s !== void 0 && f.push("label:" + s + ";"), d[0] == null || d[0].raw === void 0)
      f.push.apply(f, d);
    else {
      process.env.NODE_ENV !== "production" && d[0][0] === void 0 && console.error(Uc), f.push(d[0][0]);
      for (var p = d.length, b = 1; b < p; b++)
        process.env.NODE_ENV !== "production" && d[0][b] === void 0 && console.error(Uc), f.push(d[b], d[0][b]);
    }
    var y = ss(function(h, m, g) {
      var C = u && h.as || i, E = "", O = [], x = h;
      if (h.theme == null) {
        x = {};
        for (var P in h)
          x[P] = h[P];
        x.theme = v.useContext(ur);
      }
      typeof h.className == "string" ? E = al(m.registered, O, h.className) : h.className != null && (E = h.className + " ");
      var R = Br(f.concat(O), m.registered, x);
      E += m.key + "-" + R.name, a !== void 0 && (E += " " + a);
      var N = u && l === void 0 ? Bc(C) : c, A = {};
      for (var L in h)
        u && L === "as" || // $FlowFixMe
        N(L) && (A[L] = h[L]);
      return A.className = E, A.ref = g, /* @__PURE__ */ v.createElement(v.Fragment, null, /* @__PURE__ */ v.createElement(Rv, {
        cache: m,
        serialized: R,
        isStringTag: typeof C == "string"
      }), /* @__PURE__ */ v.createElement(C, A));
    });
    return y.displayName = s !== void 0 ? s : "Styled(" + (typeof i == "string" ? i : i.displayName || i.name || "Component") + ")", y.defaultProps = t.defaultProps, y.__emotion_real = y, y.__emotion_base = i, y.__emotion_styles = f, y.__emotion_forwardProp = l, Object.defineProperty(y, "toString", {
      value: function() {
        return a === void 0 && process.env.NODE_ENV !== "production" ? "NO_COMPONENT_SELECTOR" : "." + a;
      }
    }), y.withComponent = function(h, m) {
      return e(h, w({}, n, m, {
        shouldForwardProp: Vc(y, m, !0)
      })).apply(void 0, f);
    }, y;
  };
}, $v = [
  "a",
  "abbr",
  "address",
  "area",
  "article",
  "aside",
  "audio",
  "b",
  "base",
  "bdi",
  "bdo",
  "big",
  "blockquote",
  "body",
  "br",
  "button",
  "canvas",
  "caption",
  "cite",
  "code",
  "col",
  "colgroup",
  "data",
  "datalist",
  "dd",
  "del",
  "details",
  "dfn",
  "dialog",
  "div",
  "dl",
  "dt",
  "em",
  "embed",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hgroup",
  "hr",
  "html",
  "i",
  "iframe",
  "img",
  "input",
  "ins",
  "kbd",
  "keygen",
  "label",
  "legend",
  "li",
  "link",
  "main",
  "map",
  "mark",
  "marquee",
  "menu",
  "menuitem",
  "meta",
  "meter",
  "nav",
  "noscript",
  "object",
  "ol",
  "optgroup",
  "option",
  "output",
  "p",
  "param",
  "picture",
  "pre",
  "progress",
  "q",
  "rp",
  "rt",
  "ruby",
  "s",
  "samp",
  "script",
  "section",
  "select",
  "small",
  "source",
  "span",
  "strong",
  "style",
  "sub",
  "summary",
  "sup",
  "table",
  "tbody",
  "td",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "time",
  "title",
  "tr",
  "track",
  "u",
  "ul",
  "var",
  "video",
  "wbr",
  // SVG
  "circle",
  "clipPath",
  "defs",
  "ellipse",
  "foreignObject",
  "g",
  "image",
  "line",
  "linearGradient",
  "mask",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "radialGradient",
  "rect",
  "stop",
  "svg",
  "text",
  "tspan"
], _a = Pv.bind();
$v.forEach(function(e) {
  _a[e] = _a(e);
});
var ka = { exports: {} };
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var Us, zc;
function _v() {
  if (zc)
    return Us;
  zc = 1;
  var e = Object.getOwnPropertySymbols, t = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
  function r(s) {
    if (s == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(s);
  }
  function i() {
    try {
      if (!Object.assign)
        return !1;
      var s = new String("abc");
      if (s[5] = "de", Object.getOwnPropertyNames(s)[0] === "5")
        return !1;
      for (var a = {}, l = 0; l < 10; l++)
        a["_" + String.fromCharCode(l)] = l;
      var c = Object.getOwnPropertyNames(a).map(function(d) {
        return a[d];
      });
      if (c.join("") !== "0123456789")
        return !1;
      var u = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(d) {
        u[d] = d;
      }), Object.keys(Object.assign({}, u)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return Us = i() ? Object.assign : function(s, a) {
    for (var l, c = r(s), u, d = 1; d < arguments.length; d++) {
      l = Object(arguments[d]);
      for (var f in l)
        t.call(l, f) && (c[f] = l[f]);
      if (e) {
        u = e(l);
        for (var p = 0; p < u.length; p++)
          n.call(l, u[p]) && (c[u[p]] = l[u[p]]);
      }
    }
    return c;
  }, Us;
}
var zs, Wc;
function dl() {
  if (Wc)
    return zs;
  Wc = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return zs = e, zs;
}
var Ws, qc;
function vf() {
  return qc || (qc = 1, Ws = Function.call.bind(Object.prototype.hasOwnProperty)), Ws;
}
var qs, Hc;
function kv() {
  if (Hc)
    return qs;
  Hc = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = dl(), n = {}, r = vf();
    e = function(s) {
      var a = "Warning: " + s;
      typeof console < "u" && console.error(a);
      try {
        throw new Error(a);
      } catch {
      }
    };
  }
  function i(s, a, l, c, u) {
    if (process.env.NODE_ENV !== "production") {
      for (var d in s)
        if (r(s, d)) {
          var f;
          try {
            if (typeof s[d] != "function") {
              var p = Error(
                (c || "React class") + ": " + l + " type `" + d + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof s[d] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw p.name = "Invariant Violation", p;
            }
            f = s[d](a, d, c, l, null, t);
          } catch (y) {
            f = y;
          }
          if (f && !(f instanceof Error) && e(
            (c || "React class") + ": type specification of " + l + " `" + d + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof f + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), f instanceof Error && !(f.message in n)) {
            n[f.message] = !0;
            var b = u ? u() : "";
            e(
              "Failed " + l + " type: " + f.message + (b ?? "")
            );
          }
        }
    }
  }
  return i.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (n = {});
  }, qs = i, qs;
}
var Hs, Kc;
function Nv() {
  if (Kc)
    return Hs;
  Kc = 1;
  var e = sl(), t = _v(), n = dl(), r = vf(), i = kv(), s = function() {
  };
  process.env.NODE_ENV !== "production" && (s = function(l) {
    var c = "Warning: " + l;
    typeof console < "u" && console.error(c);
    try {
      throw new Error(c);
    } catch {
    }
  });
  function a() {
    return null;
  }
  return Hs = function(l, c) {
    var u = typeof Symbol == "function" && Symbol.iterator, d = "@@iterator";
    function f(I) {
      var X = I && (u && I[u] || I[d]);
      if (typeof X == "function")
        return X;
    }
    var p = "<<anonymous>>", b = {
      array: g("array"),
      bigint: g("bigint"),
      bool: g("boolean"),
      func: g("function"),
      number: g("number"),
      object: g("object"),
      string: g("string"),
      symbol: g("symbol"),
      any: C(),
      arrayOf: E,
      element: O(),
      elementType: x(),
      instanceOf: P,
      node: L(),
      objectOf: N,
      oneOf: R,
      oneOfType: A,
      shape: B,
      exact: U
    };
    function y(I, X) {
      return I === X ? I !== 0 || 1 / I === 1 / X : I !== I && X !== X;
    }
    function h(I, X) {
      this.message = I, this.data = X && typeof X == "object" ? X : {}, this.stack = "";
    }
    h.prototype = Error.prototype;
    function m(I) {
      if (process.env.NODE_ENV !== "production")
        var X = {}, se = 0;
      function oe(Z, te, ue, J, ie, he, me) {
        if (J = J || p, he = he || ue, me !== n) {
          if (c) {
            var D = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw D.name = "Invariant Violation", D;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var ye = J + ":" + ue;
            !X[ye] && // Avoid spamming the console because they are often not actionable except for lib authors
            se < 3 && (s(
              "You are manually calling a React.PropTypes validation function for the `" + he + "` prop on `" + J + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), X[ye] = !0, se++);
          }
        }
        return te[ue] == null ? Z ? te[ue] === null ? new h("The " + ie + " `" + he + "` is marked as required " + ("in `" + J + "`, but its value is `null`.")) : new h("The " + ie + " `" + he + "` is marked as required in " + ("`" + J + "`, but its value is `undefined`.")) : null : I(te, ue, J, ie, he);
      }
      var H = oe.bind(null, !1);
      return H.isRequired = oe.bind(null, !0), H;
    }
    function g(I) {
      function X(se, oe, H, Z, te, ue) {
        var J = se[oe], ie = M(J);
        if (ie !== I) {
          var he = G(J);
          return new h(
            "Invalid " + Z + " `" + te + "` of type " + ("`" + he + "` supplied to `" + H + "`, expected ") + ("`" + I + "`."),
            { expectedType: I }
          );
        }
        return null;
      }
      return m(X);
    }
    function C() {
      return m(a);
    }
    function E(I) {
      function X(se, oe, H, Z, te) {
        if (typeof I != "function")
          return new h("Property `" + te + "` of component `" + H + "` has invalid PropType notation inside arrayOf.");
        var ue = se[oe];
        if (!Array.isArray(ue)) {
          var J = M(ue);
          return new h("Invalid " + Z + " `" + te + "` of type " + ("`" + J + "` supplied to `" + H + "`, expected an array."));
        }
        for (var ie = 0; ie < ue.length; ie++) {
          var he = I(ue, ie, H, Z, te + "[" + ie + "]", n);
          if (he instanceof Error)
            return he;
        }
        return null;
      }
      return m(X);
    }
    function O() {
      function I(X, se, oe, H, Z) {
        var te = X[se];
        if (!l(te)) {
          var ue = M(te);
          return new h("Invalid " + H + " `" + Z + "` of type " + ("`" + ue + "` supplied to `" + oe + "`, expected a single ReactElement."));
        }
        return null;
      }
      return m(I);
    }
    function x() {
      function I(X, se, oe, H, Z) {
        var te = X[se];
        if (!e.isValidElementType(te)) {
          var ue = M(te);
          return new h("Invalid " + H + " `" + Z + "` of type " + ("`" + ue + "` supplied to `" + oe + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return m(I);
    }
    function P(I) {
      function X(se, oe, H, Z, te) {
        if (!(se[oe] instanceof I)) {
          var ue = I.name || p, J = le(se[oe]);
          return new h("Invalid " + Z + " `" + te + "` of type " + ("`" + J + "` supplied to `" + H + "`, expected ") + ("instance of `" + ue + "`."));
        }
        return null;
      }
      return m(X);
    }
    function R(I) {
      if (!Array.isArray(I))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? s(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : s("Invalid argument supplied to oneOf, expected an array.")), a;
      function X(se, oe, H, Z, te) {
        for (var ue = se[oe], J = 0; J < I.length; J++)
          if (y(ue, I[J]))
            return null;
        var ie = JSON.stringify(I, function(me, D) {
          var ye = G(D);
          return ye === "symbol" ? String(D) : D;
        });
        return new h("Invalid " + Z + " `" + te + "` of value `" + String(ue) + "` " + ("supplied to `" + H + "`, expected one of " + ie + "."));
      }
      return m(X);
    }
    function N(I) {
      function X(se, oe, H, Z, te) {
        if (typeof I != "function")
          return new h("Property `" + te + "` of component `" + H + "` has invalid PropType notation inside objectOf.");
        var ue = se[oe], J = M(ue);
        if (J !== "object")
          return new h("Invalid " + Z + " `" + te + "` of type " + ("`" + J + "` supplied to `" + H + "`, expected an object."));
        for (var ie in ue)
          if (r(ue, ie)) {
            var he = I(ue, ie, H, Z, te + "." + ie, n);
            if (he instanceof Error)
              return he;
          }
        return null;
      }
      return m(X);
    }
    function A(I) {
      if (!Array.isArray(I))
        return process.env.NODE_ENV !== "production" && s("Invalid argument supplied to oneOfType, expected an instance of array."), a;
      for (var X = 0; X < I.length; X++) {
        var se = I[X];
        if (typeof se != "function")
          return s(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + W(se) + " at index " + X + "."
          ), a;
      }
      function oe(H, Z, te, ue, J) {
        for (var ie = [], he = 0; he < I.length; he++) {
          var me = I[he], D = me(H, Z, te, ue, J, n);
          if (D == null)
            return null;
          D.data && r(D.data, "expectedType") && ie.push(D.data.expectedType);
        }
        var ye = ie.length > 0 ? ", expected one of type [" + ie.join(", ") + "]" : "";
        return new h("Invalid " + ue + " `" + J + "` supplied to " + ("`" + te + "`" + ye + "."));
      }
      return m(oe);
    }
    function L() {
      function I(X, se, oe, H, Z) {
        return z(X[se]) ? null : new h("Invalid " + H + " `" + Z + "` supplied to " + ("`" + oe + "`, expected a ReactNode."));
      }
      return m(I);
    }
    function K(I, X, se, oe, H) {
      return new h(
        (I || "React class") + ": " + X + " type `" + se + "." + oe + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + H + "`."
      );
    }
    function B(I) {
      function X(se, oe, H, Z, te) {
        var ue = se[oe], J = M(ue);
        if (J !== "object")
          return new h("Invalid " + Z + " `" + te + "` of type `" + J + "` " + ("supplied to `" + H + "`, expected `object`."));
        for (var ie in I) {
          var he = I[ie];
          if (typeof he != "function")
            return K(H, Z, te, ie, G(he));
          var me = he(ue, ie, H, Z, te + "." + ie, n);
          if (me)
            return me;
        }
        return null;
      }
      return m(X);
    }
    function U(I) {
      function X(se, oe, H, Z, te) {
        var ue = se[oe], J = M(ue);
        if (J !== "object")
          return new h("Invalid " + Z + " `" + te + "` of type `" + J + "` " + ("supplied to `" + H + "`, expected `object`."));
        var ie = t({}, se[oe], I);
        for (var he in ie) {
          var me = I[he];
          if (r(I, he) && typeof me != "function")
            return K(H, Z, te, he, G(me));
          if (!me)
            return new h(
              "Invalid " + Z + " `" + te + "` key `" + he + "` supplied to `" + H + "`.\nBad object: " + JSON.stringify(se[oe], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(I), null, "  ")
            );
          var D = me(ue, he, H, Z, te + "." + he, n);
          if (D)
            return D;
        }
        return null;
      }
      return m(X);
    }
    function z(I) {
      switch (typeof I) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !I;
        case "object":
          if (Array.isArray(I))
            return I.every(z);
          if (I === null || l(I))
            return !0;
          var X = f(I);
          if (X) {
            var se = X.call(I), oe;
            if (X !== I.entries) {
              for (; !(oe = se.next()).done; )
                if (!z(oe.value))
                  return !1;
            } else
              for (; !(oe = se.next()).done; ) {
                var H = oe.value;
                if (H && !z(H[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function Y(I, X) {
      return I === "symbol" ? !0 : X ? X["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && X instanceof Symbol : !1;
    }
    function M(I) {
      var X = typeof I;
      return Array.isArray(I) ? "array" : I instanceof RegExp ? "object" : Y(X, I) ? "symbol" : X;
    }
    function G(I) {
      if (typeof I > "u" || I === null)
        return "" + I;
      var X = M(I);
      if (X === "object") {
        if (I instanceof Date)
          return "date";
        if (I instanceof RegExp)
          return "regexp";
      }
      return X;
    }
    function W(I) {
      var X = G(I);
      switch (X) {
        case "array":
        case "object":
          return "an " + X;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + X;
        default:
          return X;
      }
    }
    function le(I) {
      return !I.constructor || !I.constructor.name ? p : I.constructor.name;
    }
    return b.checkPropTypes = i, b.resetWarningCache = i.resetWarningCache, b.PropTypes = b, b;
  }, Hs;
}
var Ks, Yc;
function Iv() {
  if (Yc)
    return Ks;
  Yc = 1;
  var e = dl();
  function t() {
  }
  function n() {
  }
  return n.resetWarningCache = t, Ks = function() {
    function r(a, l, c, u, d, f) {
      if (f !== e) {
        var p = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw p.name = "Invariant Violation", p;
      }
    }
    r.isRequired = r;
    function i() {
      return r;
    }
    var s = {
      array: r,
      bigint: r,
      bool: r,
      func: r,
      number: r,
      object: r,
      string: r,
      symbol: r,
      any: r,
      arrayOf: i,
      element: r,
      elementType: r,
      instanceOf: i,
      node: r,
      objectOf: i,
      oneOf: i,
      oneOfType: i,
      shape: i,
      exact: i,
      checkPropTypes: n,
      resetWarningCache: t
    };
    return s.PropTypes = s, s;
  }, Ks;
}
if (process.env.NODE_ENV !== "production") {
  var Av = sl(), jv = !0;
  ka.exports = Nv()(Av.isElement, jv);
} else
  ka.exports = Iv()();
var Mv = ka.exports;
const o = /* @__PURE__ */ sy(Mv);
let Na;
typeof document == "object" && (Na = uf({
  key: "css",
  prepend: !0
}));
function gf(e) {
  const {
    injectFirst: t,
    children: n
  } = e;
  return t && Na ? /* @__PURE__ */ k.jsx(yv, {
    value: Na,
    children: n
  }) : n;
}
process.env.NODE_ENV !== "production" && (gf.propTypes = {
  /**
   * Your component tree.
   */
  children: o.node,
  /**
   * By default, the styles are injected last in the <head> element of the page.
   * As a result, they gain more specificity than any other style sheet.
   * If you want to override MUI's styles, set this prop.
   */
  injectFirst: o.bool
});
function Dv(e) {
  return e == null || Object.keys(e).length === 0;
}
function fl(e) {
  const {
    styles: t,
    defaultTheme: n = {}
  } = e, r = typeof t == "function" ? (i) => t(Dv(i) ? n : i) : t;
  return /* @__PURE__ */ k.jsx(bf, {
    styles: r
  });
}
process.env.NODE_ENV !== "production" && (fl.propTypes = {
  defaultTheme: o.object,
  styles: o.oneOfType([o.array, o.string, o.object, o.func])
});
/**
 * @mui/styled-engine v5.15.14
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function xf(e, t) {
  const n = _a(e, t);
  return process.env.NODE_ENV !== "production" ? (...r) => {
    const i = typeof e == "string" ? `"${e}"` : "component";
    return r.length === 0 ? console.error([`MUI: Seems like you called \`styled(${i})()\` without a \`style\` argument.`, 'You must provide a `styles` argument: `styled("div")(styleYouForgotToPass)`.'].join(`
`)) : r.some((s) => s === void 0) && console.error(`MUI: the styled(${i})(...args) API requires all its args to be defined.`), n(...r);
  } : n;
}
const Fv = (e, t) => {
  Array.isArray(e.__emotion_styles) && (e.__emotion_styles = t(e.__emotion_styles));
}, Lv = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  GlobalStyles: fl,
  StyledEngineProvider: gf,
  ThemeContext: ur,
  css: as,
  default: xf,
  internal_processStyles: Fv,
  keyframes: Kr
}, Symbol.toStringTag, { value: "Module" }));
function An(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function Ef(e) {
  if (!An(e))
    return e;
  const t = {};
  return Object.keys(e).forEach((n) => {
    t[n] = Ef(e[n]);
  }), t;
}
function Mt(e, t, n = {
  clone: !0
}) {
  const r = n.clone ? w({}, e) : e;
  return An(e) && An(t) && Object.keys(t).forEach((i) => {
    i !== "__proto__" && (An(t[i]) && i in e && An(e[i]) ? r[i] = Mt(e[i], t[i], n) : n.clone ? r[i] = An(t[i]) ? Ef(t[i]) : t[i] : r[i] = t[i]);
  }), r;
}
const Bv = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Mt,
  isPlainObject: An
}, Symbol.toStringTag, { value: "Module" })), Vv = ["values", "unit", "step"], Uv = (e) => {
  const t = Object.keys(e).map((n) => ({
    key: n,
    val: e[n]
  })) || [];
  return t.sort((n, r) => n.val - r.val), t.reduce((n, r) => w({}, n, {
    [r.key]: r.val
  }), {});
};
function Of(e) {
  const {
    // The breakpoint **start** at this value.
    // For instance with the first breakpoint xs: [xs, sm).
    values: t = {
      xs: 0,
      // phone
      sm: 600,
      // tablet
      md: 900,
      // small laptop
      lg: 1200,
      // desktop
      xl: 1536
      // large screen
    },
    unit: n = "px",
    step: r = 5
  } = e, i = xe(e, Vv), s = Uv(t), a = Object.keys(s);
  function l(p) {
    return `@media (min-width:${typeof t[p] == "number" ? t[p] : p}${n})`;
  }
  function c(p) {
    return `@media (max-width:${(typeof t[p] == "number" ? t[p] : p) - r / 100}${n})`;
  }
  function u(p, b) {
    const y = a.indexOf(b);
    return `@media (min-width:${typeof t[p] == "number" ? t[p] : p}${n}) and (max-width:${(y !== -1 && typeof t[a[y]] == "number" ? t[a[y]] : b) - r / 100}${n})`;
  }
  function d(p) {
    return a.indexOf(p) + 1 < a.length ? u(p, a[a.indexOf(p) + 1]) : l(p);
  }
  function f(p) {
    const b = a.indexOf(p);
    return b === 0 ? l(a[1]) : b === a.length - 1 ? c(a[b]) : u(p, a[a.indexOf(p) + 1]).replace("@media", "@media not all and");
  }
  return w({
    keys: a,
    values: s,
    up: l,
    down: c,
    between: u,
    only: d,
    not: f,
    unit: n
  }, i);
}
const zv = {
  borderRadius: 4
}, Wv = zv, qv = process.env.NODE_ENV !== "production" ? o.oneOfType([o.number, o.string, o.object, o.array]) : {}, qn = qv;
function ho(e, t) {
  return t ? Mt(e, t, {
    clone: !1
    // No need to clone deep, it's way faster.
  }) : e;
}
const pl = {
  xs: 0,
  // phone
  sm: 600,
  // tablet
  md: 900,
  // small laptop
  lg: 1200,
  // desktop
  xl: 1536
  // large screen
}, Gc = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: (e) => `@media (min-width:${pl[e]}px)`
};
function Cn(e, t, n) {
  const r = e.theme || {};
  if (Array.isArray(t)) {
    const s = r.breakpoints || Gc;
    return t.reduce((a, l, c) => (a[s.up(s.keys[c])] = n(t[c]), a), {});
  }
  if (typeof t == "object") {
    const s = r.breakpoints || Gc;
    return Object.keys(t).reduce((a, l) => {
      if (Object.keys(s.values || pl).indexOf(l) !== -1) {
        const c = s.up(l);
        a[c] = n(t[l], l);
      } else {
        const c = l;
        a[c] = t[c];
      }
      return a;
    }, {});
  }
  return n(t);
}
function Hv(e = {}) {
  var t;
  return ((t = e.keys) == null ? void 0 : t.reduce((r, i) => {
    const s = e.up(i);
    return r[s] = {}, r;
  }, {})) || {};
}
function Kv(e, t) {
  return e.reduce((n, r) => {
    const i = n[r];
    return (!i || Object.keys(i).length === 0) && delete n[r], n;
  }, t);
}
function ae(e) {
  if (typeof e != "string")
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `capitalize(string)` expects a string argument." : ar(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
const Yv = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ae
}, Symbol.toStringTag, { value: "Module" }));
function ls(e, t, n = !0) {
  if (!t || typeof t != "string")
    return null;
  if (e && e.vars && n) {
    const r = `vars.${t}`.split(".").reduce((i, s) => i && i[s] ? i[s] : null, e);
    if (r != null)
      return r;
  }
  return t.split(".").reduce((r, i) => r && r[i] != null ? r[i] : null, e);
}
function Di(e, t, n, r = n) {
  let i;
  return typeof e == "function" ? i = e(n) : Array.isArray(e) ? i = e[n] || r : i = ls(e, n) || r, t && (i = t(i, r, e)), i;
}
function rt(e) {
  const {
    prop: t,
    cssProperty: n = e.prop,
    themeKey: r,
    transform: i
  } = e, s = (a) => {
    if (a[t] == null)
      return null;
    const l = a[t], c = a.theme, u = ls(c, r) || {};
    return Cn(a, l, (f) => {
      let p = Di(u, i, f);
      return f === p && typeof f == "string" && (p = Di(u, i, `${t}${f === "default" ? "" : ae(f)}`, f)), n === !1 ? p : {
        [n]: p
      };
    });
  };
  return s.propTypes = process.env.NODE_ENV !== "production" ? {
    [t]: qn
  } : {}, s.filterProps = [t], s;
}
function Gv(e) {
  const t = {};
  return (n) => (t[n] === void 0 && (t[n] = e(n)), t[n]);
}
const Qv = {
  m: "margin",
  p: "padding"
}, Xv = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, Qc = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, Jv = Gv((e) => {
  if (e.length > 2)
    if (Qc[e])
      e = Qc[e];
    else
      return [e];
  const [t, n] = e.split(""), r = Qv[t], i = Xv[n] || "";
  return Array.isArray(i) ? i.map((s) => r + s) : [r + i];
}), cs = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], us = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"], Zv = [...cs, ...us];
function Xo(e, t, n, r) {
  var i;
  const s = (i = ls(e, t, !1)) != null ? i : n;
  return typeof s == "number" ? (a) => typeof a == "string" ? a : (process.env.NODE_ENV !== "production" && typeof a != "number" && console.error(`MUI: Expected ${r} argument to be a number or a string, got ${a}.`), s * a) : Array.isArray(s) ? (a) => typeof a == "string" ? a : (process.env.NODE_ENV !== "production" && (Number.isInteger(a) ? a > s.length - 1 && console.error([`MUI: The value provided (${a}) overflows.`, `The supported values are: ${JSON.stringify(s)}.`, `${a} > ${s.length - 1}, you need to add the missing values.`].join(`
`)) : console.error([`MUI: The \`theme.${t}\` array type cannot be combined with non integer values.You should either use an integer value that can be used as index, or define the \`theme.${t}\` as a number.`].join(`
`))), s[a]) : typeof s == "function" ? s : (process.env.NODE_ENV !== "production" && console.error([`MUI: The \`theme.${t}\` value (${s}) is invalid.`, "It should be a number, an array or a function."].join(`
`)), () => {
  });
}
function wf(e) {
  return Xo(e, "spacing", 8, "spacing");
}
function Jo(e, t) {
  if (typeof t == "string" || t == null)
    return t;
  const n = Math.abs(t), r = e(n);
  return t >= 0 ? r : typeof r == "number" ? -r : `-${r}`;
}
function eg(e, t) {
  return (n) => e.reduce((r, i) => (r[i] = Jo(t, n), r), {});
}
function tg(e, t, n, r) {
  if (t.indexOf(n) === -1)
    return null;
  const i = Jv(n), s = eg(i, r), a = e[n];
  return Cn(e, a, s);
}
function Tf(e, t) {
  const n = wf(e.theme);
  return Object.keys(e).map((r) => tg(e, t, r, n)).reduce(ho, {});
}
function tt(e) {
  return Tf(e, cs);
}
tt.propTypes = process.env.NODE_ENV !== "production" ? cs.reduce((e, t) => (e[t] = qn, e), {}) : {};
tt.filterProps = cs;
function nt(e) {
  return Tf(e, us);
}
nt.propTypes = process.env.NODE_ENV !== "production" ? us.reduce((e, t) => (e[t] = qn, e), {}) : {};
nt.filterProps = us;
process.env.NODE_ENV !== "production" && Zv.reduce((e, t) => (e[t] = qn, e), {});
function ng(e = 8) {
  if (e.mui)
    return e;
  const t = wf({
    spacing: e
  }), n = (...r) => (process.env.NODE_ENV !== "production" && (r.length <= 4 || console.error(`MUI: Too many arguments provided, expected between 0 and 4, got ${r.length}`)), (r.length === 0 ? [1] : r).map((s) => {
    const a = t(s);
    return typeof a == "number" ? `${a}px` : a;
  }).join(" "));
  return n.mui = !0, n;
}
function ds(...e) {
  const t = e.reduce((r, i) => (i.filterProps.forEach((s) => {
    r[s] = i;
  }), r), {}), n = (r) => Object.keys(r).reduce((i, s) => t[s] ? ho(i, t[s](r)) : i, {});
  return n.propTypes = process.env.NODE_ENV !== "production" ? e.reduce((r, i) => Object.assign(r, i.propTypes), {}) : {}, n.filterProps = e.reduce((r, i) => r.concat(i.filterProps), []), n;
}
function qt(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
function Xt(e, t) {
  return rt({
    prop: e,
    themeKey: "borders",
    transform: t
  });
}
const rg = Xt("border", qt), og = Xt("borderTop", qt), ig = Xt("borderRight", qt), sg = Xt("borderBottom", qt), ag = Xt("borderLeft", qt), lg = Xt("borderColor"), cg = Xt("borderTopColor"), ug = Xt("borderRightColor"), dg = Xt("borderBottomColor"), fg = Xt("borderLeftColor"), pg = Xt("outline", qt), hg = Xt("outlineColor"), fs = (e) => {
  if (e.borderRadius !== void 0 && e.borderRadius !== null) {
    const t = Xo(e.theme, "shape.borderRadius", 4, "borderRadius"), n = (r) => ({
      borderRadius: Jo(t, r)
    });
    return Cn(e, e.borderRadius, n);
  }
  return null;
};
fs.propTypes = process.env.NODE_ENV !== "production" ? {
  borderRadius: qn
} : {};
fs.filterProps = ["borderRadius"];
ds(rg, og, ig, sg, ag, lg, cg, ug, dg, fg, fs, pg, hg);
const ps = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = Xo(e.theme, "spacing", 8, "gap"), n = (r) => ({
      gap: Jo(t, r)
    });
    return Cn(e, e.gap, n);
  }
  return null;
};
ps.propTypes = process.env.NODE_ENV !== "production" ? {
  gap: qn
} : {};
ps.filterProps = ["gap"];
const hs = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = Xo(e.theme, "spacing", 8, "columnGap"), n = (r) => ({
      columnGap: Jo(t, r)
    });
    return Cn(e, e.columnGap, n);
  }
  return null;
};
hs.propTypes = process.env.NODE_ENV !== "production" ? {
  columnGap: qn
} : {};
hs.filterProps = ["columnGap"];
const ms = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = Xo(e.theme, "spacing", 8, "rowGap"), n = (r) => ({
      rowGap: Jo(t, r)
    });
    return Cn(e, e.rowGap, n);
  }
  return null;
};
ms.propTypes = process.env.NODE_ENV !== "production" ? {
  rowGap: qn
} : {};
ms.filterProps = ["rowGap"];
const mg = rt({
  prop: "gridColumn"
}), yg = rt({
  prop: "gridRow"
}), bg = rt({
  prop: "gridAutoFlow"
}), vg = rt({
  prop: "gridAutoColumns"
}), gg = rt({
  prop: "gridAutoRows"
}), xg = rt({
  prop: "gridTemplateColumns"
}), Eg = rt({
  prop: "gridTemplateRows"
}), Og = rt({
  prop: "gridTemplateAreas"
}), wg = rt({
  prop: "gridArea"
});
ds(ps, hs, ms, mg, yg, bg, vg, gg, xg, Eg, Og, wg);
function Er(e, t) {
  return t === "grey" ? t : e;
}
const Tg = rt({
  prop: "color",
  themeKey: "palette",
  transform: Er
}), Cg = rt({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: Er
}), Sg = rt({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: Er
});
ds(Tg, Cg, Sg);
function It(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const Rg = rt({
  prop: "width",
  transform: It
}), hl = (e) => {
  if (e.maxWidth !== void 0 && e.maxWidth !== null) {
    const t = (n) => {
      var r, i;
      const s = ((r = e.theme) == null || (r = r.breakpoints) == null || (r = r.values) == null ? void 0 : r[n]) || pl[n];
      return s ? ((i = e.theme) == null || (i = i.breakpoints) == null ? void 0 : i.unit) !== "px" ? {
        maxWidth: `${s}${e.theme.breakpoints.unit}`
      } : {
        maxWidth: s
      } : {
        maxWidth: It(n)
      };
    };
    return Cn(e, e.maxWidth, t);
  }
  return null;
};
hl.filterProps = ["maxWidth"];
const Pg = rt({
  prop: "minWidth",
  transform: It
}), $g = rt({
  prop: "height",
  transform: It
}), _g = rt({
  prop: "maxHeight",
  transform: It
}), kg = rt({
  prop: "minHeight",
  transform: It
});
rt({
  prop: "size",
  cssProperty: "width",
  transform: It
});
rt({
  prop: "size",
  cssProperty: "height",
  transform: It
});
const Ng = rt({
  prop: "boxSizing"
});
ds(Rg, hl, Pg, $g, _g, kg, Ng);
const Ig = {
  // borders
  border: {
    themeKey: "borders",
    transform: qt
  },
  borderTop: {
    themeKey: "borders",
    transform: qt
  },
  borderRight: {
    themeKey: "borders",
    transform: qt
  },
  borderBottom: {
    themeKey: "borders",
    transform: qt
  },
  borderLeft: {
    themeKey: "borders",
    transform: qt
  },
  borderColor: {
    themeKey: "palette"
  },
  borderTopColor: {
    themeKey: "palette"
  },
  borderRightColor: {
    themeKey: "palette"
  },
  borderBottomColor: {
    themeKey: "palette"
  },
  borderLeftColor: {
    themeKey: "palette"
  },
  outline: {
    themeKey: "borders",
    transform: qt
  },
  outlineColor: {
    themeKey: "palette"
  },
  borderRadius: {
    themeKey: "shape.borderRadius",
    style: fs
  },
  // palette
  color: {
    themeKey: "palette",
    transform: Er
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: Er
  },
  backgroundColor: {
    themeKey: "palette",
    transform: Er
  },
  // spacing
  p: {
    style: nt
  },
  pt: {
    style: nt
  },
  pr: {
    style: nt
  },
  pb: {
    style: nt
  },
  pl: {
    style: nt
  },
  px: {
    style: nt
  },
  py: {
    style: nt
  },
  padding: {
    style: nt
  },
  paddingTop: {
    style: nt
  },
  paddingRight: {
    style: nt
  },
  paddingBottom: {
    style: nt
  },
  paddingLeft: {
    style: nt
  },
  paddingX: {
    style: nt
  },
  paddingY: {
    style: nt
  },
  paddingInline: {
    style: nt
  },
  paddingInlineStart: {
    style: nt
  },
  paddingInlineEnd: {
    style: nt
  },
  paddingBlock: {
    style: nt
  },
  paddingBlockStart: {
    style: nt
  },
  paddingBlockEnd: {
    style: nt
  },
  m: {
    style: tt
  },
  mt: {
    style: tt
  },
  mr: {
    style: tt
  },
  mb: {
    style: tt
  },
  ml: {
    style: tt
  },
  mx: {
    style: tt
  },
  my: {
    style: tt
  },
  margin: {
    style: tt
  },
  marginTop: {
    style: tt
  },
  marginRight: {
    style: tt
  },
  marginBottom: {
    style: tt
  },
  marginLeft: {
    style: tt
  },
  marginX: {
    style: tt
  },
  marginY: {
    style: tt
  },
  marginInline: {
    style: tt
  },
  marginInlineStart: {
    style: tt
  },
  marginInlineEnd: {
    style: tt
  },
  marginBlock: {
    style: tt
  },
  marginBlockStart: {
    style: tt
  },
  marginBlockEnd: {
    style: tt
  },
  // display
  displayPrint: {
    cssProperty: !1,
    transform: (e) => ({
      "@media print": {
        display: e
      }
    })
  },
  display: {},
  overflow: {},
  textOverflow: {},
  visibility: {},
  whiteSpace: {},
  // flexbox
  flexBasis: {},
  flexDirection: {},
  flexWrap: {},
  justifyContent: {},
  alignItems: {},
  alignContent: {},
  order: {},
  flex: {},
  flexGrow: {},
  flexShrink: {},
  alignSelf: {},
  justifyItems: {},
  justifySelf: {},
  // grid
  gap: {
    style: ps
  },
  rowGap: {
    style: ms
  },
  columnGap: {
    style: hs
  },
  gridColumn: {},
  gridRow: {},
  gridAutoFlow: {},
  gridAutoColumns: {},
  gridAutoRows: {},
  gridTemplateColumns: {},
  gridTemplateRows: {},
  gridTemplateAreas: {},
  gridArea: {},
  // positions
  position: {},
  zIndex: {
    themeKey: "zIndex"
  },
  top: {},
  right: {},
  bottom: {},
  left: {},
  // shadows
  boxShadow: {
    themeKey: "shadows"
  },
  // sizing
  width: {
    transform: It
  },
  maxWidth: {
    style: hl
  },
  minWidth: {
    transform: It
  },
  height: {
    transform: It
  },
  maxHeight: {
    transform: It
  },
  minHeight: {
    transform: It
  },
  boxSizing: {},
  // typography
  fontFamily: {
    themeKey: "typography"
  },
  fontSize: {
    themeKey: "typography"
  },
  fontStyle: {
    themeKey: "typography"
  },
  fontWeight: {
    themeKey: "typography"
  },
  letterSpacing: {},
  textTransform: {},
  lineHeight: {},
  textAlign: {},
  typography: {
    cssProperty: !1,
    themeKey: "typography"
  }
}, Zo = Ig;
function Ag(...e) {
  const t = e.reduce((r, i) => r.concat(Object.keys(i)), []), n = new Set(t);
  return e.every((r) => n.size === Object.keys(r).length);
}
function jg(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Cf() {
  function e(n, r, i, s) {
    const a = {
      [n]: r,
      theme: i
    }, l = s[n];
    if (!l)
      return {
        [n]: r
      };
    const {
      cssProperty: c = n,
      themeKey: u,
      transform: d,
      style: f
    } = l;
    if (r == null)
      return null;
    if (u === "typography" && r === "inherit")
      return {
        [n]: r
      };
    const p = ls(i, u) || {};
    return f ? f(a) : Cn(a, r, (y) => {
      let h = Di(p, d, y);
      return y === h && typeof y == "string" && (h = Di(p, d, `${n}${y === "default" ? "" : ae(y)}`, y)), c === !1 ? h : {
        [c]: h
      };
    });
  }
  function t(n) {
    var r;
    const {
      sx: i,
      theme: s = {}
    } = n || {};
    if (!i)
      return null;
    const a = (r = s.unstable_sxConfig) != null ? r : Zo;
    function l(c) {
      let u = c;
      if (typeof c == "function")
        u = c(s);
      else if (typeof c != "object")
        return c;
      if (!u)
        return null;
      const d = Hv(s.breakpoints), f = Object.keys(d);
      let p = d;
      return Object.keys(u).forEach((b) => {
        const y = jg(u[b], s);
        if (y != null)
          if (typeof y == "object")
            if (a[b])
              p = ho(p, e(b, y, s, a));
            else {
              const h = Cn({
                theme: s
              }, y, (m) => ({
                [b]: m
              }));
              Ag(h, y) ? p[b] = t({
                sx: y,
                theme: s
              }) : p = ho(p, h);
            }
          else
            p = ho(p, e(b, y, s, a));
      }), Kv(f, p);
    }
    return Array.isArray(i) ? i.map(l) : l(i);
  }
  return t;
}
const ei = Cf();
ei.filterProps = ["sx"];
function Sf(e, t) {
  const n = this;
  return n.vars && typeof n.getColorSchemeSelector == "function" ? {
    [n.getColorSchemeSelector(e).replace(/(\[[^\]]+\])/, "*:where($1)")]: t
  } : n.palette.mode === e ? t : {};
}
const Mg = ["breakpoints", "palette", "spacing", "shape"];
function ml(e = {}, ...t) {
  const {
    breakpoints: n = {},
    palette: r = {},
    spacing: i,
    shape: s = {}
  } = e, a = xe(e, Mg), l = Of(n), c = ng(i);
  let u = Mt({
    breakpoints: l,
    direction: "ltr",
    components: {},
    // Inject component definitions.
    palette: w({
      mode: "light"
    }, r),
    spacing: c,
    shape: w({}, Wv, s)
  }, a);
  return u.applyStyles = Sf, u = t.reduce((d, f) => Mt(d, f), u), u.unstable_sxConfig = w({}, Zo, a == null ? void 0 : a.unstable_sxConfig), u.unstable_sx = function(f) {
    return ei({
      sx: f,
      theme: this
    });
  }, u;
}
const Dg = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ml,
  private_createBreakpoints: Of,
  unstable_applyStyles: Sf
}, Symbol.toStringTag, { value: "Module" }));
function Fg(e) {
  return Object.keys(e).length === 0;
}
function Rf(e = null) {
  const t = v.useContext(ur);
  return !t || Fg(t) ? e : t;
}
const Lg = ml();
function ys(e = Lg) {
  return Rf(e);
}
function Pf({
  styles: e,
  themeId: t,
  defaultTheme: n = {}
}) {
  const r = ys(n), i = typeof e == "function" ? e(t && r[t] || r) : e;
  return /* @__PURE__ */ k.jsx(fl, {
    styles: i
  });
}
process.env.NODE_ENV !== "production" && (Pf.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * @ignore
   */
  defaultTheme: o.object,
  /**
   * @ignore
   */
  styles: o.oneOfType([o.array, o.func, o.number, o.object, o.string, o.bool]),
  /**
   * @ignore
   */
  themeId: o.string
});
const Bg = ["sx"], Vg = (e) => {
  var t, n;
  const r = {
    systemProps: {},
    otherProps: {}
  }, i = (t = e == null || (n = e.theme) == null ? void 0 : n.unstable_sxConfig) != null ? t : Zo;
  return Object.keys(e).forEach((s) => {
    i[s] ? r.systemProps[s] = e[s] : r.otherProps[s] = e[s];
  }), r;
};
function yl(e) {
  const {
    sx: t
  } = e, n = xe(e, Bg), {
    systemProps: r,
    otherProps: i
  } = Vg(n);
  let s;
  return Array.isArray(t) ? s = [r, ...t] : typeof t == "function" ? s = (...a) => {
    const l = t(...a);
    return An(l) ? w({}, r, l) : r;
  } : s = w({}, r, t), w({}, i, {
    sx: s
  });
}
const Ug = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ei,
  extendSxProp: yl,
  unstable_createStyleFunctionSx: Cf,
  unstable_defaultSxConfig: Zo
}, Symbol.toStringTag, { value: "Module" })), Xc = (e) => e, zg = () => {
  let e = Xc;
  return {
    configure(t) {
      e = t;
    },
    generate(t) {
      return e(t);
    },
    reset() {
      e = Xc;
    }
  };
}, Wg = zg(), bl = Wg;
function $f(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number")
    r += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var i = e.length;
      for (t = 0; t < i; t++)
        e[t] && (n = $f(e[t])) && (r && (r += " "), r += n);
    } else
      for (n in e)
        e[n] && (r && (r += " "), r += n);
  return r;
}
function Oe() {
  for (var e, t, n = 0, r = "", i = arguments.length; n < i; n++)
    (e = arguments[n]) && (t = $f(e)) && (r && (r += " "), r += t);
  return r;
}
const qg = ["className", "component"];
function Hg(e = {}) {
  const {
    themeId: t,
    defaultTheme: n,
    defaultClassName: r = "MuiBox-root",
    generateClassName: i
  } = e, s = xf("div", {
    shouldForwardProp: (l) => l !== "theme" && l !== "sx" && l !== "as"
  })(ei);
  return /* @__PURE__ */ v.forwardRef(function(c, u) {
    const d = ys(n), f = yl(c), {
      className: p,
      component: b = "div"
    } = f, y = xe(f, qg);
    return /* @__PURE__ */ k.jsx(s, w({
      as: b,
      ref: u,
      className: Oe(p, i ? i(r) : r),
      theme: t && d[t] || d
    }, y));
  });
}
const _f = {
  active: "active",
  checked: "checked",
  completed: "completed",
  disabled: "disabled",
  error: "error",
  expanded: "expanded",
  focused: "focused",
  focusVisible: "focusVisible",
  open: "open",
  readOnly: "readOnly",
  required: "required",
  selected: "selected"
};
function Le(e, t, n = "Mui") {
  const r = _f[t];
  return r ? `${n}-${r}` : `${bl.generate(e)}-${t}`;
}
function Be(e, t, n = "Mui") {
  const r = {};
  return t.forEach((i) => {
    r[i] = Le(e, i, n);
  }), r;
}
var Ia = { exports: {} }, De = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Jc;
function Kg() {
  if (Jc)
    return De;
  Jc = 1;
  var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), a = Symbol.for("react.context"), l = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), b = Symbol.for("react.offscreen"), y;
  y = Symbol.for("react.module.reference");
  function h(m) {
    if (typeof m == "object" && m !== null) {
      var g = m.$$typeof;
      switch (g) {
        case e:
          switch (m = m.type, m) {
            case n:
            case i:
            case r:
            case u:
            case d:
              return m;
            default:
              switch (m = m && m.$$typeof, m) {
                case l:
                case a:
                case c:
                case p:
                case f:
                case s:
                  return m;
                default:
                  return g;
              }
          }
        case t:
          return g;
      }
    }
  }
  return De.ContextConsumer = a, De.ContextProvider = s, De.Element = e, De.ForwardRef = c, De.Fragment = n, De.Lazy = p, De.Memo = f, De.Portal = t, De.Profiler = i, De.StrictMode = r, De.Suspense = u, De.SuspenseList = d, De.isAsyncMode = function() {
    return !1;
  }, De.isConcurrentMode = function() {
    return !1;
  }, De.isContextConsumer = function(m) {
    return h(m) === a;
  }, De.isContextProvider = function(m) {
    return h(m) === s;
  }, De.isElement = function(m) {
    return typeof m == "object" && m !== null && m.$$typeof === e;
  }, De.isForwardRef = function(m) {
    return h(m) === c;
  }, De.isFragment = function(m) {
    return h(m) === n;
  }, De.isLazy = function(m) {
    return h(m) === p;
  }, De.isMemo = function(m) {
    return h(m) === f;
  }, De.isPortal = function(m) {
    return h(m) === t;
  }, De.isProfiler = function(m) {
    return h(m) === i;
  }, De.isStrictMode = function(m) {
    return h(m) === r;
  }, De.isSuspense = function(m) {
    return h(m) === u;
  }, De.isSuspenseList = function(m) {
    return h(m) === d;
  }, De.isValidElementType = function(m) {
    return typeof m == "string" || typeof m == "function" || m === n || m === i || m === r || m === u || m === d || m === b || typeof m == "object" && m !== null && (m.$$typeof === p || m.$$typeof === f || m.$$typeof === s || m.$$typeof === a || m.$$typeof === c || m.$$typeof === y || m.getModuleId !== void 0);
  }, De.typeOf = h, De;
}
var Fe = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Zc;
function Yg() {
  return Zc || (Zc = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), a = Symbol.for("react.context"), l = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), b = Symbol.for("react.offscreen"), y = !1, h = !1, m = !1, g = !1, C = !1, E;
    E = Symbol.for("react.module.reference");
    function O(Q) {
      return !!(typeof Q == "string" || typeof Q == "function" || Q === n || Q === i || C || Q === r || Q === u || Q === d || g || Q === b || y || h || m || typeof Q == "object" && Q !== null && (Q.$$typeof === p || Q.$$typeof === f || Q.$$typeof === s || Q.$$typeof === a || Q.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      Q.$$typeof === E || Q.getModuleId !== void 0));
    }
    function x(Q) {
      if (typeof Q == "object" && Q !== null) {
        var be = Q.$$typeof;
        switch (be) {
          case e:
            var ne = Q.type;
            switch (ne) {
              case n:
              case i:
              case r:
              case u:
              case d:
                return ne;
              default:
                var Xe = ne && ne.$$typeof;
                switch (Xe) {
                  case l:
                  case a:
                  case c:
                  case p:
                  case f:
                  case s:
                    return Xe;
                  default:
                    return be;
                }
            }
          case t:
            return be;
        }
      }
    }
    var P = a, R = s, N = e, A = c, L = n, K = p, B = f, U = t, z = i, Y = r, M = u, G = d, W = !1, le = !1;
    function I(Q) {
      return W || (W = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function X(Q) {
      return le || (le = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function se(Q) {
      return x(Q) === a;
    }
    function oe(Q) {
      return x(Q) === s;
    }
    function H(Q) {
      return typeof Q == "object" && Q !== null && Q.$$typeof === e;
    }
    function Z(Q) {
      return x(Q) === c;
    }
    function te(Q) {
      return x(Q) === n;
    }
    function ue(Q) {
      return x(Q) === p;
    }
    function J(Q) {
      return x(Q) === f;
    }
    function ie(Q) {
      return x(Q) === t;
    }
    function he(Q) {
      return x(Q) === i;
    }
    function me(Q) {
      return x(Q) === r;
    }
    function D(Q) {
      return x(Q) === u;
    }
    function ye(Q) {
      return x(Q) === d;
    }
    Fe.ContextConsumer = P, Fe.ContextProvider = R, Fe.Element = N, Fe.ForwardRef = A, Fe.Fragment = L, Fe.Lazy = K, Fe.Memo = B, Fe.Portal = U, Fe.Profiler = z, Fe.StrictMode = Y, Fe.Suspense = M, Fe.SuspenseList = G, Fe.isAsyncMode = I, Fe.isConcurrentMode = X, Fe.isContextConsumer = se, Fe.isContextProvider = oe, Fe.isElement = H, Fe.isForwardRef = Z, Fe.isFragment = te, Fe.isLazy = ue, Fe.isMemo = J, Fe.isPortal = ie, Fe.isProfiler = he, Fe.isStrictMode = me, Fe.isSuspense = D, Fe.isSuspenseList = ye, Fe.isValidElementType = O, Fe.typeOf = x;
  }()), Fe;
}
process.env.NODE_ENV === "production" ? Ia.exports = Kg() : Ia.exports = Yg();
var Ro = Ia.exports;
const Gg = /^\s*function(?:\s|\s*\/\*.*\*\/\s*)+([^(\s/]*)\s*/;
function kf(e) {
  const t = `${e}`.match(Gg);
  return t && t[1] || "";
}
function Nf(e, t = "") {
  return e.displayName || e.name || kf(e) || t;
}
function eu(e, t, n) {
  const r = Nf(t);
  return e.displayName || (r !== "" ? `${n}(${r})` : n);
}
function Qg(e) {
  if (e != null) {
    if (typeof e == "string")
      return e;
    if (typeof e == "function")
      return Nf(e, "Component");
    if (typeof e == "object")
      switch (e.$$typeof) {
        case Ro.ForwardRef:
          return eu(e, e.render, "ForwardRef");
        case Ro.Memo:
          return eu(e, e.type, "memo");
        default:
          return;
      }
  }
}
const Xg = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Qg,
  getFunctionName: kf
}, Symbol.toStringTag, { value: "Module" }));
function If(e, t) {
  const n = w({}, t);
  return Object.keys(e).forEach((r) => {
    if (r.toString().match(/^(components|slots)$/))
      n[r] = w({}, e[r], n[r]);
    else if (r.toString().match(/^(componentsProps|slotProps)$/)) {
      const i = e[r] || {}, s = t[r];
      n[r] = {}, !s || !Object.keys(s) ? n[r] = i : !i || !Object.keys(i) ? n[r] = s : (n[r] = w({}, s), Object.keys(i).forEach((a) => {
        n[r][a] = If(i[a], s[a]);
      }));
    } else
      n[r] === void 0 && (n[r] = e[r]);
  }), n;
}
function Af(e) {
  const {
    theme: t,
    name: n,
    props: r
  } = e;
  return !t || !t.components || !t.components[n] || !t.components[n].defaultProps ? r : If(t.components[n].defaultProps, r);
}
function Jg({
  props: e,
  name: t,
  defaultTheme: n,
  themeId: r
}) {
  let i = ys(n);
  return r && (i = i[r] || i), Af({
    theme: i,
    name: t,
    props: e
  });
}
const rn = typeof window < "u" ? v.useLayoutEffect : v.useEffect;
function Zg(e, t, n, r, i) {
  const [s, a] = v.useState(() => i && n ? n(e).matches : r ? r(e).matches : t);
  return rn(() => {
    let l = !0;
    if (!n)
      return;
    const c = n(e), u = () => {
      l && a(c.matches);
    };
    return u(), c.addListener(u), () => {
      l = !1, c.removeListener(u);
    };
  }, [e, n]), s;
}
const jf = v.useSyncExternalStore;
function e0(e, t, n, r, i) {
  const s = v.useCallback(() => t, [t]), a = v.useMemo(() => {
    if (i && n)
      return () => n(e).matches;
    if (r !== null) {
      const {
        matches: d
      } = r(e);
      return () => d;
    }
    return s;
  }, [s, e, r, i, n]), [l, c] = v.useMemo(() => {
    if (n === null)
      return [s, () => () => {
      }];
    const d = n(e);
    return [() => d.matches, (f) => (d.addListener(f), () => {
      d.removeListener(f);
    })];
  }, [s, n, e]);
  return jf(c, l, a);
}
function t0(e, t = {}) {
  const n = Rf(), r = typeof window < "u" && typeof window.matchMedia < "u", {
    defaultMatches: i = !1,
    matchMedia: s = r ? window.matchMedia : null,
    ssrMatchMedia: a = null,
    noSsr: l = !1
  } = Af({
    name: "MuiUseMediaQuery",
    props: t,
    theme: n
  });
  process.env.NODE_ENV !== "production" && typeof e == "function" && n === null && console.error(["MUI: The `query` argument provided is invalid.", "You are providing a function without a theme in the context.", "One of the parent elements needs to use a ThemeProvider."].join(`
`));
  let c = typeof e == "function" ? e(n) : e;
  c = c.replace(/^@media( ?)/m, "");
  const d = (jf !== void 0 ? e0 : Zg)(c, i, s, a, l);
  return process.env.NODE_ENV !== "production" && v.useDebugValue({
    query: c,
    match: d
  }), d;
}
function n0(e, t = Number.MIN_SAFE_INTEGER, n = Number.MAX_SAFE_INTEGER) {
  return Math.max(t, Math.min(e, n));
}
const r0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: n0
}, Symbol.toStringTag, { value: "Module" }));
function yn(e, t) {
  return process.env.NODE_ENV === "production" ? () => null : function(...r) {
    return e(...r) || t(...r);
  };
}
function o0(e) {
  const {
    prototype: t = {}
  } = e;
  return !!t.isReactComponent;
}
function Mf(e, t, n, r, i) {
  const s = e[t], a = i || t;
  if (s == null || // When server-side rendering React doesn't warn either.
  // This is not an accurate check for SSR.
  // This is only in place for Emotion compat.
  // TODO: Revisit once https://github.com/facebook/react/issues/20047 is resolved.
  typeof window > "u")
    return null;
  let l;
  const c = s.type;
  return typeof c == "function" && !o0(c) && (l = "Did you accidentally use a plain function component for an element instead?"), l !== void 0 ? new Error(`Invalid ${r} \`${a}\` supplied to \`${n}\`. Expected an element that can hold a ref. ${l} For more information see https://mui.com/r/caveat-with-refs-guide`) : null;
}
const Df = yn(o.element, Mf);
Df.isRequired = yn(o.element.isRequired, Mf);
const bs = Df;
function i0(e) {
  const {
    prototype: t = {}
  } = e;
  return !!t.isReactComponent;
}
function s0(e, t, n, r, i) {
  const s = e[t], a = i || t;
  if (s == null || // When server-side rendering React doesn't warn either.
  // This is not an accurate check for SSR.
  // This is only in place for emotion compat.
  // TODO: Revisit once https://github.com/facebook/react/issues/20047 is resolved.
  typeof window > "u")
    return null;
  let l;
  return typeof s == "function" && !i0(s) && (l = "Did you accidentally provide a plain function component instead?"), l !== void 0 ? new Error(`Invalid ${r} \`${a}\` supplied to \`${n}\`. Expected an element type that can hold a ref. ${l} For more information see https://mui.com/r/caveat-with-refs-guide`) : null;
}
const vl = yn(o.elementType, s0), a0 = "exact-prop: ​";
function Ff(e) {
  return process.env.NODE_ENV === "production" ? e : w({}, e, {
    [a0]: (t) => {
      const n = Object.keys(t).filter((r) => !e.hasOwnProperty(r));
      return n.length > 0 ? new Error(`The following props are not supported: ${n.map((r) => `\`${r}\``).join(", ")}. Please remove them.`) : null;
    }
  });
}
function Sn(e, t, n, r, i) {
  if (process.env.NODE_ENV === "production")
    return null;
  const s = e[t], a = i || t;
  return s == null ? null : s && s.nodeType !== 1 ? new Error(`Invalid ${r} \`${a}\` supplied to \`${n}\`. Expected an HTMLElement.`) : null;
}
const l0 = o.oneOfType([o.func, o.object]), on = l0;
function Aa(...e) {
  return e.reduce((t, n) => n == null ? t : function(...i) {
    t.apply(this, i), n.apply(this, i);
  }, () => {
  });
}
function gl(e, t = 166) {
  let n;
  function r(...i) {
    const s = () => {
      e.apply(this, i);
    };
    clearTimeout(n), n = setTimeout(s, t);
  }
  return r.clear = () => {
    clearTimeout(n);
  }, r;
}
function c0(e, t) {
  return process.env.NODE_ENV === "production" ? () => null : (n, r, i, s, a) => {
    const l = i || "<<anonymous>>", c = a || r;
    return typeof n[r] < "u" ? new Error(`The ${s} \`${c}\` of \`${l}\` is deprecated. ${t}`) : null;
  };
}
function Pi(e, t) {
  var n, r;
  return /* @__PURE__ */ v.isValidElement(e) && t.indexOf(
    // For server components `muiName` is avaialble in element.type._payload.value.muiName
    // relevant info - https://github.com/facebook/react/blob/2807d781a08db8e9873687fccc25c0f12b4fb3d4/packages/react/src/ReactLazy.js#L45
    // eslint-disable-next-line no-underscore-dangle
    (n = e.type.muiName) != null ? n : (r = e.type) == null || (r = r._payload) == null || (r = r.value) == null ? void 0 : r.muiName
  ) !== -1;
}
function gt(e) {
  return e && e.ownerDocument || document;
}
function Wn(e) {
  return gt(e).defaultView || window;
}
function u0(e, t) {
  if (process.env.NODE_ENV === "production")
    return () => null;
  const n = t ? w({}, t.propTypes) : null;
  return (i) => (s, a, l, c, u, ...d) => {
    const f = u || a, p = n == null ? void 0 : n[f];
    if (p) {
      const b = p(s, a, l, c, u, ...d);
      if (b)
        return b;
    }
    return typeof s[a] < "u" && !s[i] ? new Error(`The prop \`${f}\` of \`${e}\` can only be used together with the \`${i}\` prop.`) : null;
  };
}
function Po(e, t) {
  typeof e == "function" ? e(t) : e && (e.current = t);
}
let tu = 0;
function d0(e) {
  const [t, n] = v.useState(e), r = e || t;
  return v.useEffect(() => {
    t == null && (tu += 1, n(`mui-${tu}`));
  }, [t]), r;
}
const nu = v.useId;
function ti(e) {
  if (nu !== void 0) {
    const t = nu();
    return e ?? t;
  }
  return d0(e);
}
function Lf(e, t, n, r, i) {
  if (process.env.NODE_ENV === "production")
    return null;
  const s = i || t;
  return typeof e[t] < "u" ? new Error(`The prop \`${s}\` is not supported. Please remove it.`) : null;
}
function Or({
  controlled: e,
  default: t,
  name: n,
  state: r = "value"
}) {
  const {
    current: i
  } = v.useRef(e !== void 0), [s, a] = v.useState(t), l = i ? e : s;
  if (process.env.NODE_ENV !== "production") {
    v.useEffect(() => {
      i !== (e !== void 0) && console.error([`MUI: A component is changing the ${i ? "" : "un"}controlled ${r} state of ${n} to be ${i ? "un" : ""}controlled.`, "Elements should not switch from uncontrolled to controlled (or vice versa).", `Decide between using a controlled or uncontrolled ${n} element for the lifetime of the component.`, "The nature of the state is determined during the first render. It's considered controlled if the value is not `undefined`.", "More info: https://fb.me/react-controlled-components"].join(`
`));
    }, [r, n, e]);
    const {
      current: u
    } = v.useRef(t);
    v.useEffect(() => {
      !i && u !== t && console.error([`MUI: A component is changing the default ${r} state of an uncontrolled ${n} after being initialized. To suppress this warning opt to use a controlled ${n}.`].join(`
`));
    }, [JSON.stringify(t)]);
  }
  const c = v.useCallback((u) => {
    i || a(u);
  }, []);
  return [l, c];
}
function nn(e) {
  const t = v.useRef(e);
  return rn(() => {
    t.current = e;
  }), v.useRef((...n) => (
    // @ts-expect-error hide `this`
    (0, t.current)(...n)
  )).current;
}
function ct(...e) {
  return v.useMemo(() => e.every((t) => t == null) ? null : (t) => {
    e.forEach((n) => {
      Po(n, t);
    });
  }, e);
}
const ru = {};
function f0(e, t) {
  const n = v.useRef(ru);
  return n.current === ru && (n.current = e(t)), n;
}
const p0 = [];
function h0(e) {
  v.useEffect(e, p0);
}
class vs {
  constructor() {
    this.currentId = null, this.clear = () => {
      this.currentId !== null && (clearTimeout(this.currentId), this.currentId = null);
    }, this.disposeEffect = () => this.clear;
  }
  static create() {
    return new vs();
  }
  /**
   * Executes `fn` after `delay`, clearing any previously scheduled call.
   */
  start(t, n) {
    this.clear(), this.currentId = setTimeout(() => {
      this.currentId = null, n();
    }, t);
  }
}
function Bf() {
  const e = f0(vs.create).current;
  return h0(e.disposeEffect), e;
}
let gs = !0, ja = !1;
const m0 = new vs(), y0 = {
  text: !0,
  search: !0,
  url: !0,
  tel: !0,
  email: !0,
  password: !0,
  number: !0,
  date: !0,
  month: !0,
  week: !0,
  time: !0,
  datetime: !0,
  "datetime-local": !0
};
function b0(e) {
  const {
    type: t,
    tagName: n
  } = e;
  return !!(n === "INPUT" && y0[t] && !e.readOnly || n === "TEXTAREA" && !e.readOnly || e.isContentEditable);
}
function v0(e) {
  e.metaKey || e.altKey || e.ctrlKey || (gs = !0);
}
function Ys() {
  gs = !1;
}
function g0() {
  this.visibilityState === "hidden" && ja && (gs = !0);
}
function x0(e) {
  e.addEventListener("keydown", v0, !0), e.addEventListener("mousedown", Ys, !0), e.addEventListener("pointerdown", Ys, !0), e.addEventListener("touchstart", Ys, !0), e.addEventListener("visibilitychange", g0, !0);
}
function E0(e) {
  const {
    target: t
  } = e;
  try {
    return t.matches(":focus-visible");
  } catch {
  }
  return gs || b0(t);
}
function Vf() {
  const e = v.useCallback((i) => {
    i != null && x0(i.ownerDocument);
  }, []), t = v.useRef(!1);
  function n() {
    return t.current ? (ja = !0, m0.start(100, () => {
      ja = !1;
    }), t.current = !1, !0) : !1;
  }
  function r(i) {
    return E0(i) ? (t.current = !0, !0) : !1;
  }
  return {
    isFocusVisibleRef: t,
    onFocus: r,
    onBlur: n,
    ref: e
  };
}
function Uf(e) {
  const t = e.documentElement.clientWidth;
  return Math.abs(window.innerWidth - t);
}
const O0 = (e) => {
  const t = v.useRef({});
  return v.useEffect(() => {
    t.current = e;
  }), t.current;
};
function w0(e) {
  const t = typeof e;
  switch (t) {
    case "number":
      return Number.isNaN(e) ? "NaN" : Number.isFinite(e) ? e !== Math.floor(e) ? "float" : "number" : "Infinity";
    case "object":
      return e === null ? "null" : e.constructor.name;
    default:
      return t;
  }
}
function T0(e) {
  return typeof e == "number" && isFinite(e) && Math.floor(e) === e;
}
const C0 = Number.isInteger || T0;
function zf(e, t, n, r) {
  const i = e[t];
  if (i == null || !C0(i)) {
    const s = w0(i);
    return new RangeError(`Invalid ${r} \`${t}\` of type \`${s}\` supplied to \`${n}\`, expected \`integer\`.`);
  }
  return null;
}
function Wf(e, t, ...n) {
  return e[t] === void 0 ? null : zf(e, t, ...n);
}
function Ma() {
  return null;
}
Wf.isRequired = zf;
Ma.isRequired = Ma;
const xl = process.env.NODE_ENV === "production" ? Ma : Wf;
function Ue(e, t, n = void 0) {
  const r = {};
  return Object.keys(e).forEach(
    // `Object.keys(slots)` can't be wider than `T` because we infer `T` from `slots`.
    // @ts-expect-error https://github.com/microsoft/TypeScript/pull/12253#issuecomment-263132208
    (i) => {
      r[i] = e[i].reduce((s, a) => {
        if (a) {
          const l = t(a);
          l !== "" && s.push(l), n && n[a] && s.push(n[a]);
        }
        return s;
      }, []).join(" ");
    }
  ), r;
}
const S0 = /* @__PURE__ */ v.createContext();
process.env.NODE_ENV !== "production" && (o.node, o.bool);
const R0 = () => {
  const e = v.useContext(S0);
  return e ?? !1;
};
function P0(e, t) {
  return w({
    toolbar: {
      minHeight: 56,
      [e.up("xs")]: {
        "@media (orientation: landscape)": {
          minHeight: 48
        }
      },
      [e.up("sm")]: {
        minHeight: 64
      }
    }
  }, t);
}
var ot = {}, qf = { exports: {} };
(function(e) {
  function t(n) {
    return n && n.__esModule ? n : {
      default: n
    };
  }
  e.exports = t, e.exports.__esModule = !0, e.exports.default = e.exports;
})(qf);
var xs = qf.exports;
const $0 = /* @__PURE__ */ Pn(bb), _0 = /* @__PURE__ */ Pn(r0);
var Hf = xs;
Object.defineProperty(ot, "__esModule", {
  value: !0
});
var ht = ot.alpha = Qf;
ot.blend = U0;
ot.colorChannel = void 0;
var k0 = ot.darken = Ol;
ot.decomposeColor = Yt;
ot.emphasize = V0;
var ou = ot.getContrastRatio = D0;
ot.getLuminance = Fi;
ot.hexToRgb = Kf;
ot.hslToRgb = Gf;
var N0 = ot.lighten = wl;
ot.private_safeAlpha = F0;
ot.private_safeColorChannel = void 0;
ot.private_safeDarken = L0;
ot.private_safeEmphasize = Xf;
ot.private_safeLighten = B0;
ot.recomposeColor = Yr;
ot.rgbToHex = M0;
var iu = Hf($0), I0 = Hf(_0);
function El(e, t = 0, n = 1) {
  return process.env.NODE_ENV !== "production" && (e < t || e > n) && console.error(`MUI: The value provided ${e} is out of range [${t}, ${n}].`), (0, I0.default)(e, t, n);
}
function Kf(e) {
  e = e.slice(1);
  const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let n = e.match(t);
  return n && n[0].length === 1 && (n = n.map((r) => r + r)), n ? `rgb${n.length === 4 ? "a" : ""}(${n.map((r, i) => i < 3 ? parseInt(r, 16) : Math.round(parseInt(r, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function A0(e) {
  const t = e.toString(16);
  return t.length === 1 ? `0${t}` : t;
}
function Yt(e) {
  if (e.type)
    return e;
  if (e.charAt(0) === "#")
    return Yt(Kf(e));
  const t = e.indexOf("("), n = e.substring(0, t);
  if (["rgb", "rgba", "hsl", "hsla", "color"].indexOf(n) === -1)
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: Unsupported \`${e}\` color.
The following formats are supported: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().` : (0, iu.default)(9, e));
  let r = e.substring(t + 1, e.length - 1), i;
  if (n === "color") {
    if (r = r.split(" "), i = r.shift(), r.length === 4 && r[3].charAt(0) === "/" && (r[3] = r[3].slice(1)), ["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].indexOf(i) === -1)
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: unsupported \`${i}\` color space.
The following color spaces are supported: srgb, display-p3, a98-rgb, prophoto-rgb, rec-2020.` : (0, iu.default)(10, i));
  } else
    r = r.split(",");
  return r = r.map((s) => parseFloat(s)), {
    type: n,
    values: r,
    colorSpace: i
  };
}
const Yf = (e) => {
  const t = Yt(e);
  return t.values.slice(0, 3).map((n, r) => t.type.indexOf("hsl") !== -1 && r !== 0 ? `${n}%` : n).join(" ");
};
ot.colorChannel = Yf;
const j0 = (e, t) => {
  try {
    return Yf(e);
  } catch {
    return t && process.env.NODE_ENV !== "production" && console.warn(t), e;
  }
};
ot.private_safeColorChannel = j0;
function Yr(e) {
  const {
    type: t,
    colorSpace: n
  } = e;
  let {
    values: r
  } = e;
  return t.indexOf("rgb") !== -1 ? r = r.map((i, s) => s < 3 ? parseInt(i, 10) : i) : t.indexOf("hsl") !== -1 && (r[1] = `${r[1]}%`, r[2] = `${r[2]}%`), t.indexOf("color") !== -1 ? r = `${n} ${r.join(" ")}` : r = `${r.join(", ")}`, `${t}(${r})`;
}
function M0(e) {
  if (e.indexOf("#") === 0)
    return e;
  const {
    values: t
  } = Yt(e);
  return `#${t.map((n, r) => A0(r === 3 ? Math.round(255 * n) : n)).join("")}`;
}
function Gf(e) {
  e = Yt(e);
  const {
    values: t
  } = e, n = t[0], r = t[1] / 100, i = t[2] / 100, s = r * Math.min(i, 1 - i), a = (u, d = (u + n / 30) % 12) => i - s * Math.max(Math.min(d - 3, 9 - d, 1), -1);
  let l = "rgb";
  const c = [Math.round(a(0) * 255), Math.round(a(8) * 255), Math.round(a(4) * 255)];
  return e.type === "hsla" && (l += "a", c.push(t[3])), Yr({
    type: l,
    values: c
  });
}
function Fi(e) {
  e = Yt(e);
  let t = e.type === "hsl" || e.type === "hsla" ? Yt(Gf(e)).values : e.values;
  return t = t.map((n) => (e.type !== "color" && (n /= 255), n <= 0.03928 ? n / 12.92 : ((n + 0.055) / 1.055) ** 2.4)), Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3));
}
function D0(e, t) {
  const n = Fi(e), r = Fi(t);
  return (Math.max(n, r) + 0.05) / (Math.min(n, r) + 0.05);
}
function Qf(e, t) {
  return e = Yt(e), t = El(t), (e.type === "rgb" || e.type === "hsl") && (e.type += "a"), e.type === "color" ? e.values[3] = `/${t}` : e.values[3] = t, Yr(e);
}
function F0(e, t, n) {
  try {
    return Qf(e, t);
  } catch {
    return n && process.env.NODE_ENV !== "production" && console.warn(n), e;
  }
}
function Ol(e, t) {
  if (e = Yt(e), t = El(t), e.type.indexOf("hsl") !== -1)
    e.values[2] *= 1 - t;
  else if (e.type.indexOf("rgb") !== -1 || e.type.indexOf("color") !== -1)
    for (let n = 0; n < 3; n += 1)
      e.values[n] *= 1 - t;
  return Yr(e);
}
function L0(e, t, n) {
  try {
    return Ol(e, t);
  } catch {
    return n && process.env.NODE_ENV !== "production" && console.warn(n), e;
  }
}
function wl(e, t) {
  if (e = Yt(e), t = El(t), e.type.indexOf("hsl") !== -1)
    e.values[2] += (100 - e.values[2]) * t;
  else if (e.type.indexOf("rgb") !== -1)
    for (let n = 0; n < 3; n += 1)
      e.values[n] += (255 - e.values[n]) * t;
  else if (e.type.indexOf("color") !== -1)
    for (let n = 0; n < 3; n += 1)
      e.values[n] += (1 - e.values[n]) * t;
  return Yr(e);
}
function B0(e, t, n) {
  try {
    return wl(e, t);
  } catch {
    return n && process.env.NODE_ENV !== "production" && console.warn(n), e;
  }
}
function V0(e, t = 0.15) {
  return Fi(e) > 0.5 ? Ol(e, t) : wl(e, t);
}
function Xf(e, t, n) {
  try {
    return Xf(e, t);
  } catch {
    return n && process.env.NODE_ENV !== "production" && console.warn(n), e;
  }
}
function U0(e, t, n, r = 1) {
  const i = (c, u) => Math.round((c ** (1 / r) * (1 - n) + u ** (1 / r) * n) ** r), s = Yt(e), a = Yt(t), l = [i(s.values[0], a.values[0]), i(s.values[1], a.values[1]), i(s.values[2], a.values[2])];
  return Yr({
    type: "rgb",
    values: l
  });
}
const z0 = ["mode", "contrastThreshold", "tonalOffset"], su = {
  // The colors used to style the text.
  text: {
    // The most important text.
    primary: "rgba(0, 0, 0, 0.87)",
    // Secondary text.
    secondary: "rgba(0, 0, 0, 0.6)",
    // Disabled text have even lower visual prominence.
    disabled: "rgba(0, 0, 0, 0.38)"
  },
  // The color used to divide different elements.
  divider: "rgba(0, 0, 0, 0.12)",
  // The background colors used to style the surfaces.
  // Consistency between these values is important.
  background: {
    paper: wo.white,
    default: wo.white
  },
  // The colors used to style the action elements.
  action: {
    // The color of an active action like an icon button.
    active: "rgba(0, 0, 0, 0.54)",
    // The color of an hovered action.
    hover: "rgba(0, 0, 0, 0.04)",
    hoverOpacity: 0.04,
    // The color of a selected action.
    selected: "rgba(0, 0, 0, 0.08)",
    selectedOpacity: 0.08,
    // The color of a disabled action.
    disabled: "rgba(0, 0, 0, 0.26)",
    // The background color of a disabled action.
    disabledBackground: "rgba(0, 0, 0, 0.12)",
    disabledOpacity: 0.38,
    focus: "rgba(0, 0, 0, 0.12)",
    focusOpacity: 0.12,
    activatedOpacity: 0.12
  }
}, Gs = {
  text: {
    primary: wo.white,
    secondary: "rgba(255, 255, 255, 0.7)",
    disabled: "rgba(255, 255, 255, 0.5)",
    icon: "rgba(255, 255, 255, 0.5)"
  },
  divider: "rgba(255, 255, 255, 0.12)",
  background: {
    paper: "#121212",
    default: "#121212"
  },
  action: {
    active: wo.white,
    hover: "rgba(255, 255, 255, 0.08)",
    hoverOpacity: 0.08,
    selected: "rgba(255, 255, 255, 0.16)",
    selectedOpacity: 0.16,
    disabled: "rgba(255, 255, 255, 0.3)",
    disabledBackground: "rgba(255, 255, 255, 0.12)",
    disabledOpacity: 0.38,
    focus: "rgba(255, 255, 255, 0.12)",
    focusOpacity: 0.12,
    activatedOpacity: 0.24
  }
};
function au(e, t, n, r) {
  const i = r.light || r, s = r.dark || r * 1.5;
  e[t] || (e.hasOwnProperty(n) ? e[t] = e[n] : t === "light" ? e.light = N0(e.main, i) : t === "dark" && (e.dark = k0(e.main, s)));
}
function W0(e = "light") {
  return e === "dark" ? {
    main: mr[200],
    light: mr[50],
    dark: mr[400]
  } : {
    main: mr[700],
    light: mr[400],
    dark: mr[800]
  };
}
function q0(e = "light") {
  return e === "dark" ? {
    main: hr[200],
    light: hr[50],
    dark: hr[400]
  } : {
    main: hr[500],
    light: hr[300],
    dark: hr[700]
  };
}
function H0(e = "light") {
  return e === "dark" ? {
    main: pr[500],
    light: pr[300],
    dark: pr[700]
  } : {
    main: pr[700],
    light: pr[400],
    dark: pr[800]
  };
}
function K0(e = "light") {
  return e === "dark" ? {
    main: yr[400],
    light: yr[300],
    dark: yr[700]
  } : {
    main: yr[700],
    light: yr[500],
    dark: yr[900]
  };
}
function Y0(e = "light") {
  return e === "dark" ? {
    main: br[400],
    light: br[300],
    dark: br[700]
  } : {
    main: br[800],
    light: br[500],
    dark: br[900]
  };
}
function G0(e = "light") {
  return e === "dark" ? {
    main: so[400],
    light: so[300],
    dark: so[700]
  } : {
    main: "#ed6c02",
    // closest to orange[800] that pass 3:1.
    light: so[500],
    dark: so[900]
  };
}
function Q0(e) {
  const {
    mode: t = "light",
    contrastThreshold: n = 3,
    tonalOffset: r = 0.2
  } = e, i = xe(e, z0), s = e.primary || W0(t), a = e.secondary || q0(t), l = e.error || H0(t), c = e.info || K0(t), u = e.success || Y0(t), d = e.warning || G0(t);
  function f(h) {
    const m = ou(h, Gs.text.primary) >= n ? Gs.text.primary : su.text.primary;
    if (process.env.NODE_ENV !== "production") {
      const g = ou(h, m);
      g < 3 && console.error([`MUI: The contrast ratio of ${g}:1 for ${m} on ${h}`, "falls below the WCAG recommended absolute minimum contrast ratio of 3:1.", "https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast"].join(`
`));
    }
    return m;
  }
  const p = ({
    color: h,
    name: m,
    mainShade: g = 500,
    lightShade: C = 300,
    darkShade: E = 700
  }) => {
    if (h = w({}, h), !h.main && h[g] && (h.main = h[g]), !h.hasOwnProperty("main"))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${m ? ` (${m})` : ""} provided to augmentColor(color) is invalid.
The color object needs to have a \`main\` property or a \`${g}\` property.` : ar(11, m ? ` (${m})` : "", g));
    if (typeof h.main != "string")
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${m ? ` (${m})` : ""} provided to augmentColor(color) is invalid.
\`color.main\` should be a string, but \`${JSON.stringify(h.main)}\` was provided instead.

Did you intend to use one of the following approaches?

import { green } from "@mui/material/colors";

const theme1 = createTheme({ palette: {
  primary: green,
} });

const theme2 = createTheme({ palette: {
  primary: { main: green[500] },
} });` : ar(12, m ? ` (${m})` : "", JSON.stringify(h.main)));
    return au(h, "light", C, r), au(h, "dark", E, r), h.contrastText || (h.contrastText = f(h.main)), h;
  }, b = {
    dark: Gs,
    light: su
  };
  return process.env.NODE_ENV !== "production" && (b[t] || console.error(`MUI: The palette mode \`${t}\` is not supported.`)), Mt(w({
    // A collection of common colors.
    common: w({}, wo),
    // prevent mutable object.
    // The palette mode, can be light or dark.
    mode: t,
    // The colors used to represent primary interface elements for a user.
    primary: p({
      color: s,
      name: "primary"
    }),
    // The colors used to represent secondary interface elements for a user.
    secondary: p({
      color: a,
      name: "secondary",
      mainShade: "A400",
      lightShade: "A200",
      darkShade: "A700"
    }),
    // The colors used to represent interface elements that the user should be made aware of.
    error: p({
      color: l,
      name: "error"
    }),
    // The colors used to represent potentially dangerous actions or important messages.
    warning: p({
      color: d,
      name: "warning"
    }),
    // The colors used to present information to the user that is neutral and not necessarily important.
    info: p({
      color: c,
      name: "info"
    }),
    // The colors used to indicate the successful completion of an action that user triggered.
    success: p({
      color: u,
      name: "success"
    }),
    // The grey colors.
    grey: yb,
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: n,
    // Takes a background color and returns the text color that maximizes the contrast.
    getContrastText: f,
    // Generate a rich color object.
    augmentColor: p,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: r
  }, b[t]), i);
}
const X0 = ["fontFamily", "fontSize", "fontWeightLight", "fontWeightRegular", "fontWeightMedium", "fontWeightBold", "htmlFontSize", "allVariants", "pxToRem"];
function J0(e) {
  return Math.round(e * 1e5) / 1e5;
}
const lu = {
  textTransform: "uppercase"
}, cu = '"Roboto", "Helvetica", "Arial", sans-serif';
function Z0(e, t) {
  const n = typeof t == "function" ? t(e) : t, {
    fontFamily: r = cu,
    // The default font size of the Material Specification.
    fontSize: i = 14,
    // px
    fontWeightLight: s = 300,
    fontWeightRegular: a = 400,
    fontWeightMedium: l = 500,
    fontWeightBold: c = 700,
    // Tell MUI what's the font-size on the html element.
    // 16px is the default font-size used by browsers.
    htmlFontSize: u = 16,
    // Apply the CSS properties to all the variants.
    allVariants: d,
    pxToRem: f
  } = n, p = xe(n, X0);
  process.env.NODE_ENV !== "production" && (typeof i != "number" && console.error("MUI: `fontSize` is required to be a number."), typeof u != "number" && console.error("MUI: `htmlFontSize` is required to be a number."));
  const b = i / 14, y = f || ((g) => `${g / u * b}rem`), h = (g, C, E, O, x) => w({
    fontFamily: r,
    fontWeight: g,
    fontSize: y(C),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight: E
  }, r === cu ? {
    letterSpacing: `${J0(O / C)}em`
  } : {}, x, d), m = {
    h1: h(s, 96, 1.167, -1.5),
    h2: h(s, 60, 1.2, -0.5),
    h3: h(a, 48, 1.167, 0),
    h4: h(a, 34, 1.235, 0.25),
    h5: h(a, 24, 1.334, 0),
    h6: h(l, 20, 1.6, 0.15),
    subtitle1: h(a, 16, 1.75, 0.15),
    subtitle2: h(l, 14, 1.57, 0.1),
    body1: h(a, 16, 1.5, 0.15),
    body2: h(a, 14, 1.43, 0.15),
    button: h(l, 14, 1.75, 0.4, lu),
    caption: h(a, 12, 1.66, 0.4),
    overline: h(a, 12, 2.66, 1, lu),
    // TODO v6: Remove handling of 'inherit' variant from the theme as it is already handled in Material UI's Typography component. Also, remember to remove the associated types.
    inherit: {
      fontFamily: "inherit",
      fontWeight: "inherit",
      fontSize: "inherit",
      lineHeight: "inherit",
      letterSpacing: "inherit"
    }
  };
  return Mt(w({
    htmlFontSize: u,
    pxToRem: y,
    fontFamily: r,
    fontSize: i,
    fontWeightLight: s,
    fontWeightRegular: a,
    fontWeightMedium: l,
    fontWeightBold: c
  }, m), p, {
    clone: !1
    // No need to clone deep
  });
}
const ex = 0.2, tx = 0.14, nx = 0.12;
function Je(...e) {
  return [`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${ex})`, `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${tx})`, `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${nx})`].join(",");
}
const rx = ["none", Je(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), Je(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), Je(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), Je(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), Je(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), Je(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), Je(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), Je(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), Je(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), Je(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), Je(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), Je(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), Je(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), Je(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), Je(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), Je(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), Je(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), Je(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), Je(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), Je(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), Je(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), Je(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), Je(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), Je(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], ox = ["duration", "easing", "delay"], ix = {
  // This is the most common easing curve.
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}, sx = {
  shortest: 150,
  shorter: 200,
  short: 250,
  // most basic recommended timing
  standard: 300,
  // this is to be used in complex animations
  complex: 375,
  // recommended when something is entering screen
  enteringScreen: 225,
  // recommended when something is leaving screen
  leavingScreen: 195
};
function uu(e) {
  return `${Math.round(e)}ms`;
}
function ax(e) {
  if (!e)
    return 0;
  const t = e / 36;
  return Math.round((4 + 15 * t ** 0.25 + t / 5) * 10);
}
function lx(e) {
  const t = w({}, ix, e.easing), n = w({}, sx, e.duration);
  return w({
    getAutoHeightDuration: ax,
    create: (i = ["all"], s = {}) => {
      const {
        duration: a = n.standard,
        easing: l = t.easeInOut,
        delay: c = 0
      } = s, u = xe(s, ox);
      if (process.env.NODE_ENV !== "production") {
        const d = (p) => typeof p == "string", f = (p) => !isNaN(parseFloat(p));
        !d(i) && !Array.isArray(i) && console.error('MUI: Argument "props" must be a string or Array.'), !f(a) && !d(a) && console.error(`MUI: Argument "duration" must be a number or a string but found ${a}.`), d(l) || console.error('MUI: Argument "easing" must be a string.'), !f(c) && !d(c) && console.error('MUI: Argument "delay" must be a number or a string.'), typeof s != "object" && console.error(["MUI: Secong argument of transition.create must be an object.", "Arguments should be either `create('prop1', options)` or `create(['prop1', 'prop2'], options)`"].join(`
`)), Object.keys(u).length !== 0 && console.error(`MUI: Unrecognized argument(s) [${Object.keys(u).join(",")}].`);
      }
      return (Array.isArray(i) ? i : [i]).map((d) => `${d} ${typeof a == "string" ? a : uu(a)} ${l} ${typeof c == "string" ? c : uu(c)}`).join(",");
    }
  }, e, {
    easing: t,
    duration: n
  });
}
const cx = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
}, ux = cx, dx = ["breakpoints", "mixins", "spacing", "palette", "transitions", "typography", "shape"];
function Jf(e = {}, ...t) {
  const {
    mixins: n = {},
    palette: r = {},
    transitions: i = {},
    typography: s = {}
  } = e, a = xe(e, dx);
  if (e.vars)
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `vars` is a private field used for CSS variables support.\nPlease use another name." : ar(18));
  const l = Q0(r), c = ml(e);
  let u = Mt(c, {
    mixins: P0(c.breakpoints, n),
    palette: l,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: rx.slice(),
    typography: Z0(l, s),
    transitions: lx(i),
    zIndex: w({}, ux)
  });
  if (u = Mt(u, a), u = t.reduce((d, f) => Mt(d, f), u), process.env.NODE_ENV !== "production") {
    const d = ["active", "checked", "completed", "disabled", "error", "expanded", "focused", "focusVisible", "required", "selected"], f = (p, b) => {
      let y;
      for (y in p) {
        const h = p[y];
        if (d.indexOf(y) !== -1 && Object.keys(h).length > 0) {
          if (process.env.NODE_ENV !== "production") {
            const m = Le("", y);
            console.error([`MUI: The \`${b}\` component increases the CSS specificity of the \`${y}\` internal state.`, "You can not override it like this: ", JSON.stringify(p, null, 2), "", `Instead, you need to use the '&.${m}' syntax:`, JSON.stringify({
              root: {
                [`&.${m}`]: h
              }
            }, null, 2), "", "https://mui.com/r/state-classes-guide"].join(`
`));
          }
          p[y] = {};
        }
      }
    };
    Object.keys(u.components).forEach((p) => {
      const b = u.components[p].styleOverrides;
      b && p.indexOf("Mui") === 0 && f(b, p);
    });
  }
  return u.unstable_sxConfig = w({}, Zo, a == null ? void 0 : a.unstable_sxConfig), u.unstable_sx = function(f) {
    return ei({
      sx: f,
      theme: this
    });
  }, u;
}
const fx = Jf(), Es = fx;
function ni() {
  const e = ys(Es);
  return process.env.NODE_ENV !== "production" && v.useDebugValue(e), e[Go] || e;
}
function ze({
  props: e,
  name: t
}) {
  return Jg({
    props: e,
    name: t,
    defaultTheme: Es,
    themeId: Go
  });
}
var ri = {}, Qs = { exports: {} }, du;
function px() {
  return du || (du = 1, function(e) {
    function t() {
      return e.exports = t = Object.assign ? Object.assign.bind() : function(n) {
        for (var r = 1; r < arguments.length; r++) {
          var i = arguments[r];
          for (var s in i)
            Object.prototype.hasOwnProperty.call(i, s) && (n[s] = i[s]);
        }
        return n;
      }, e.exports.__esModule = !0, e.exports.default = e.exports, t.apply(this, arguments);
    }
    e.exports = t, e.exports.__esModule = !0, e.exports.default = e.exports;
  }(Qs)), Qs.exports;
}
var Xs = { exports: {} }, fu;
function hx() {
  return fu || (fu = 1, function(e) {
    function t(n, r) {
      if (n == null)
        return {};
      var i = {}, s = Object.keys(n), a, l;
      for (l = 0; l < s.length; l++)
        a = s[l], !(r.indexOf(a) >= 0) && (i[a] = n[a]);
      return i;
    }
    e.exports = t, e.exports.__esModule = !0, e.exports.default = e.exports;
  }(Xs)), Xs.exports;
}
const Zf = /* @__PURE__ */ Pn(Lv), mx = /* @__PURE__ */ Pn(Bv), yx = /* @__PURE__ */ Pn(Yv), bx = /* @__PURE__ */ Pn(Xg), vx = /* @__PURE__ */ Pn(Dg), gx = /* @__PURE__ */ Pn(Ug);
var Gr = xs;
Object.defineProperty(ri, "__esModule", {
  value: !0
});
var xx = ri.default = Ax;
ri.shouldForwardProp = $i;
ri.systemDefaultTheme = void 0;
var zt = Gr(px()), Da = Gr(hx()), pu = $x(Zf), Ex = mx, Ox = Gr(yx), wx = Gr(bx), Tx = Gr(vx), Cx = Gr(gx);
const Sx = ["ownerState"], Rx = ["variants"], Px = ["name", "slot", "skipVariantsResolver", "skipSx", "overridesResolver"];
function ep(e) {
  if (typeof WeakMap != "function")
    return null;
  var t = /* @__PURE__ */ new WeakMap(), n = /* @__PURE__ */ new WeakMap();
  return (ep = function(r) {
    return r ? n : t;
  })(e);
}
function $x(e, t) {
  if (!t && e && e.__esModule)
    return e;
  if (e === null || typeof e != "object" && typeof e != "function")
    return { default: e };
  var n = ep(t);
  if (n && n.has(e))
    return n.get(e);
  var r = { __proto__: null }, i = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var s in e)
    if (s !== "default" && Object.prototype.hasOwnProperty.call(e, s)) {
      var a = i ? Object.getOwnPropertyDescriptor(e, s) : null;
      a && (a.get || a.set) ? Object.defineProperty(r, s, a) : r[s] = e[s];
    }
  return r.default = e, n && n.set(e, r), r;
}
function _x(e) {
  return Object.keys(e).length === 0;
}
function kx(e) {
  return typeof e == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  e.charCodeAt(0) > 96;
}
function $i(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const Nx = ri.systemDefaultTheme = (0, Tx.default)(), hu = (e) => e && e.charAt(0).toLowerCase() + e.slice(1);
function pi({
  defaultTheme: e,
  theme: t,
  themeId: n
}) {
  return _x(t) ? e : t[n] || t;
}
function Ix(e) {
  return e ? (t, n) => n[e] : null;
}
function _i(e, t) {
  let {
    ownerState: n
  } = t, r = (0, Da.default)(t, Sx);
  const i = typeof e == "function" ? e((0, zt.default)({
    ownerState: n
  }, r)) : e;
  if (Array.isArray(i))
    return i.flatMap((s) => _i(s, (0, zt.default)({
      ownerState: n
    }, r)));
  if (i && typeof i == "object" && Array.isArray(i.variants)) {
    const {
      variants: s = []
    } = i;
    let l = (0, Da.default)(i, Rx);
    return s.forEach((c) => {
      let u = !0;
      typeof c.props == "function" ? u = c.props((0, zt.default)({
        ownerState: n
      }, r, n)) : Object.keys(c.props).forEach((d) => {
        (n == null ? void 0 : n[d]) !== c.props[d] && r[d] !== c.props[d] && (u = !1);
      }), u && (Array.isArray(l) || (l = [l]), l.push(typeof c.style == "function" ? c.style((0, zt.default)({
        ownerState: n
      }, r, n)) : c.style));
    }), l;
  }
  return i;
}
function Ax(e = {}) {
  const {
    themeId: t,
    defaultTheme: n = Nx,
    rootShouldForwardProp: r = $i,
    slotShouldForwardProp: i = $i
  } = e, s = (a) => (0, Cx.default)((0, zt.default)({}, a, {
    theme: pi((0, zt.default)({}, a, {
      defaultTheme: n,
      themeId: t
    }))
  }));
  return s.__mui_systemSx = !0, (a, l = {}) => {
    (0, pu.internal_processStyles)(a, (x) => x.filter((P) => !(P != null && P.__mui_systemSx)));
    const {
      name: c,
      slot: u,
      skipVariantsResolver: d,
      skipSx: f,
      // TODO v6: remove `lowercaseFirstLetter()` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      overridesResolver: p = Ix(hu(u))
    } = l, b = (0, Da.default)(l, Px), y = d !== void 0 ? d : (
      // TODO v6: remove `Root` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      u && u !== "Root" && u !== "root" || !1
    ), h = f || !1;
    let m;
    process.env.NODE_ENV !== "production" && c && (m = `${c}-${hu(u || "Root")}`);
    let g = $i;
    u === "Root" || u === "root" ? g = r : u ? g = i : kx(a) && (g = void 0);
    const C = (0, pu.default)(a, (0, zt.default)({
      shouldForwardProp: g,
      label: m
    }, b)), E = (x) => typeof x == "function" && x.__emotion_real !== x || (0, Ex.isPlainObject)(x) ? (P) => _i(x, (0, zt.default)({}, P, {
      theme: pi({
        theme: P.theme,
        defaultTheme: n,
        themeId: t
      })
    })) : x, O = (x, ...P) => {
      let R = E(x);
      const N = P ? P.map(E) : [];
      c && p && N.push((K) => {
        const B = pi((0, zt.default)({}, K, {
          defaultTheme: n,
          themeId: t
        }));
        if (!B.components || !B.components[c] || !B.components[c].styleOverrides)
          return null;
        const U = B.components[c].styleOverrides, z = {};
        return Object.entries(U).forEach(([Y, M]) => {
          z[Y] = _i(M, (0, zt.default)({}, K, {
            theme: B
          }));
        }), p(K, z);
      }), c && !y && N.push((K) => {
        var B;
        const U = pi((0, zt.default)({}, K, {
          defaultTheme: n,
          themeId: t
        })), z = U == null || (B = U.components) == null || (B = B[c]) == null ? void 0 : B.variants;
        return _i({
          variants: z
        }, (0, zt.default)({}, K, {
          theme: U
        }));
      }), h || N.push(s);
      const A = N.length - P.length;
      if (Array.isArray(x) && A > 0) {
        const K = new Array(A).fill("");
        R = [...x, ...K], R.raw = [...x.raw, ...K];
      }
      const L = C(R, ...N);
      if (process.env.NODE_ENV !== "production") {
        let K;
        c && (K = `${c}${(0, Ox.default)(u || "")}`), K === void 0 && (K = `Styled(${(0, wx.default)(a)})`), L.displayName = K;
      }
      return a.muiName && (L.muiName = a.muiName), L;
    };
    return C.withConfig && (O.withConfig = C.withConfig), O;
  };
}
function tp(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const jx = (e) => tp(e) && e !== "classes", gn = jx, de = xx({
  themeId: Go,
  defaultTheme: Es,
  rootShouldForwardProp: gn
}), mu = (e) => {
  let t;
  return e < 1 ? t = 5.11916 * e ** 2 : t = 4.5 * Math.log(e + 1) + 2, (t / 100).toFixed(2);
};
function Mx(e) {
  return Le("MuiSvgIcon", e);
}
Be("MuiSvgIcon", ["root", "colorPrimary", "colorSecondary", "colorAction", "colorError", "colorDisabled", "fontSizeInherit", "fontSizeSmall", "fontSizeMedium", "fontSizeLarge"]);
const Dx = ["children", "className", "color", "component", "fontSize", "htmlColor", "inheritViewBox", "titleAccess", "viewBox"], Fx = (e) => {
  const {
    color: t,
    fontSize: n,
    classes: r
  } = e, i = {
    root: ["root", t !== "inherit" && `color${ae(t)}`, `fontSize${ae(n)}`]
  };
  return Ue(i, Mx, r);
}, Lx = de("svg", {
  name: "MuiSvgIcon",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.color !== "inherit" && t[`color${ae(n.color)}`], t[`fontSize${ae(n.fontSize)}`]];
  }
})(({
  theme: e,
  ownerState: t
}) => {
  var n, r, i, s, a, l, c, u, d, f, p, b, y;
  return {
    userSelect: "none",
    width: "1em",
    height: "1em",
    display: "inline-block",
    // the <svg> will define the property that has `currentColor`
    // for example heroicons uses fill="none" and stroke="currentColor"
    fill: t.hasSvgAsChild ? void 0 : "currentColor",
    flexShrink: 0,
    transition: (n = e.transitions) == null || (r = n.create) == null ? void 0 : r.call(n, "fill", {
      duration: (i = e.transitions) == null || (i = i.duration) == null ? void 0 : i.shorter
    }),
    fontSize: {
      inherit: "inherit",
      small: ((s = e.typography) == null || (a = s.pxToRem) == null ? void 0 : a.call(s, 20)) || "1.25rem",
      medium: ((l = e.typography) == null || (c = l.pxToRem) == null ? void 0 : c.call(l, 24)) || "1.5rem",
      large: ((u = e.typography) == null || (d = u.pxToRem) == null ? void 0 : d.call(u, 35)) || "2.1875rem"
    }[t.fontSize],
    // TODO v5 deprecate, v6 remove for sx
    color: (f = (p = (e.vars || e).palette) == null || (p = p[t.color]) == null ? void 0 : p.main) != null ? f : {
      action: (b = (e.vars || e).palette) == null || (b = b.action) == null ? void 0 : b.active,
      disabled: (y = (e.vars || e).palette) == null || (y = y.action) == null ? void 0 : y.disabled,
      inherit: void 0
    }[t.color]
  };
}), Li = /* @__PURE__ */ v.forwardRef(function(t, n) {
  const r = ze({
    props: t,
    name: "MuiSvgIcon"
  }), {
    children: i,
    className: s,
    color: a = "inherit",
    component: l = "svg",
    fontSize: c = "medium",
    htmlColor: u,
    inheritViewBox: d = !1,
    titleAccess: f,
    viewBox: p = "0 0 24 24"
  } = r, b = xe(r, Dx), y = /* @__PURE__ */ v.isValidElement(i) && i.type === "svg", h = w({}, r, {
    color: a,
    component: l,
    fontSize: c,
    instanceFontSize: t.fontSize,
    inheritViewBox: d,
    viewBox: p,
    hasSvgAsChild: y
  }), m = {};
  d || (m.viewBox = p);
  const g = Fx(h);
  return /* @__PURE__ */ k.jsxs(Lx, w({
    as: l,
    className: Oe(g.root, s),
    focusable: "false",
    color: u,
    "aria-hidden": f ? void 0 : !0,
    role: f ? "img" : void 0,
    ref: n
  }, m, b, y && i.props, {
    ownerState: h,
    children: [y ? i.props.children : i, f ? /* @__PURE__ */ k.jsx("title", {
      children: f
    }) : null]
  }));
});
process.env.NODE_ENV !== "production" && (Li.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Node passed into the SVG element.
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * You can use the `htmlColor` prop to apply a color attribute to the SVG element.
   * @default 'inherit'
   */
  color: o.oneOfType([o.oneOf(["inherit", "action", "disabled", "primary", "secondary", "error", "info", "success", "warning"]), o.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: o.elementType,
  /**
   * The fontSize applied to the icon. Defaults to 24px, but can be configure to inherit font size.
   * @default 'medium'
   */
  fontSize: o.oneOfType([o.oneOf(["inherit", "large", "medium", "small"]), o.string]),
  /**
   * Applies a color attribute to the SVG element.
   */
  htmlColor: o.string,
  /**
   * If `true`, the root node will inherit the custom `component`'s viewBox and the `viewBox`
   * prop will be ignored.
   * Useful when you want to reference a custom `component` and have `SvgIcon` pass that
   * `component`'s viewBox to the root node.
   * @default false
   */
  inheritViewBox: o.bool,
  /**
   * The shape-rendering attribute. The behavior of the different options is described on the
   * [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/shape-rendering).
   * If you are having issues with blurry icons you should investigate this prop.
   */
  shapeRendering: o.string,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * Provides a human-readable title for the element that contains it.
   * https://www.w3.org/TR/SVG-access/#Equivalent
   */
  titleAccess: o.string,
  /**
   * Allows you to redefine what the coordinates without units mean inside an SVG element.
   * For example, if the SVG element is 500 (width) by 200 (height),
   * and you pass viewBox="0 0 50 20",
   * this means that the coordinates inside the SVG will go from the top left corner (0,0)
   * to bottom right (50,20) and each unit will be worth 10px.
   * @default '0 0 24 24'
   */
  viewBox: o.string
});
Li.muiName = "SvgIcon";
function Os(e, t) {
  function n(r, i) {
    return /* @__PURE__ */ k.jsx(Li, w({
      "data-testid": `${t}Icon`,
      ref: i
    }, r, {
      children: e
    }));
  }
  return process.env.NODE_ENV !== "production" && (n.displayName = `${t}Icon`), n.muiName = Li.muiName, /* @__PURE__ */ v.memo(/* @__PURE__ */ v.forwardRef(n));
}
const Bx = {
  configure: (e) => {
    process.env.NODE_ENV !== "production" && console.warn(["MUI: `ClassNameGenerator` import from `@mui/material/utils` is outdated and might cause unexpected issues.", "", "You should use `import { unstable_ClassNameGenerator } from '@mui/material/className'` instead", "", "The detail of the issue: https://github.com/mui/material-ui/issues/30011#issuecomment-1024993401", "", "The updated documentation: https://mui.com/guides/classname-generator/"].join(`
`)), bl.configure(e);
  }
}, Vx = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  capitalize: ae,
  createChainedFunction: Aa,
  createSvgIcon: Os,
  debounce: gl,
  deprecatedPropType: c0,
  isMuiElement: Pi,
  ownerDocument: gt,
  ownerWindow: Wn,
  requirePropFactory: u0,
  setRef: Po,
  unstable_ClassNameGenerator: Bx,
  unstable_useEnhancedEffect: rn,
  unstable_useId: ti,
  unsupportedProp: Lf,
  useControlled: Or,
  useEventCallback: nn,
  useForkRef: ct,
  useIsFocusVisible: Vf
}, Symbol.toStringTag, { value: "Module" }));
function Ux(e) {
  return ze;
}
function Fa(e, t) {
  return Fa = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, i) {
    return r.__proto__ = i, r;
  }, Fa(e, t);
}
function np(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, Fa(e, t);
}
const yu = {
  disabled: !1
};
var zx = process.env.NODE_ENV !== "production" ? o.oneOfType([o.number, o.shape({
  enter: o.number,
  exit: o.number,
  appear: o.number
}).isRequired]) : null;
process.env.NODE_ENV !== "production" && o.oneOfType([o.string, o.shape({
  enter: o.string,
  exit: o.string,
  active: o.string
}), o.shape({
  enter: o.string,
  enterDone: o.string,
  enterActive: o.string,
  exit: o.string,
  exitDone: o.string,
  exitActive: o.string
})]);
const Bi = At.createContext(null);
var Wx = function(t) {
  return t.scrollTop;
}, po = "unmounted", Gn = "exited", Qn = "entering", gr = "entered", La = "exiting", $n = /* @__PURE__ */ function(e) {
  np(t, e);
  function t(r, i) {
    var s;
    s = e.call(this, r, i) || this;
    var a = i, l = a && !a.isMounting ? r.enter : r.appear, c;
    return s.appearStatus = null, r.in ? l ? (c = Gn, s.appearStatus = Qn) : c = gr : r.unmountOnExit || r.mountOnEnter ? c = po : c = Gn, s.state = {
      status: c
    }, s.nextCallback = null, s;
  }
  t.getDerivedStateFromProps = function(i, s) {
    var a = i.in;
    return a && s.status === po ? {
      status: Gn
    } : null;
  };
  var n = t.prototype;
  return n.componentDidMount = function() {
    this.updateStatus(!0, this.appearStatus);
  }, n.componentDidUpdate = function(i) {
    var s = null;
    if (i !== this.props) {
      var a = this.state.status;
      this.props.in ? a !== Qn && a !== gr && (s = Qn) : (a === Qn || a === gr) && (s = La);
    }
    this.updateStatus(!1, s);
  }, n.componentWillUnmount = function() {
    this.cancelNextCallback();
  }, n.getTimeouts = function() {
    var i = this.props.timeout, s, a, l;
    return s = a = l = i, i != null && typeof i != "number" && (s = i.exit, a = i.enter, l = i.appear !== void 0 ? i.appear : a), {
      exit: s,
      enter: a,
      appear: l
    };
  }, n.updateStatus = function(i, s) {
    if (i === void 0 && (i = !1), s !== null)
      if (this.cancelNextCallback(), s === Qn) {
        if (this.props.unmountOnExit || this.props.mountOnEnter) {
          var a = this.props.nodeRef ? this.props.nodeRef.current : ci.findDOMNode(this);
          a && Wx(a);
        }
        this.performEnter(i);
      } else
        this.performExit();
    else
      this.props.unmountOnExit && this.state.status === Gn && this.setState({
        status: po
      });
  }, n.performEnter = function(i) {
    var s = this, a = this.props.enter, l = this.context ? this.context.isMounting : i, c = this.props.nodeRef ? [l] : [ci.findDOMNode(this), l], u = c[0], d = c[1], f = this.getTimeouts(), p = l ? f.appear : f.enter;
    if (!i && !a || yu.disabled) {
      this.safeSetState({
        status: gr
      }, function() {
        s.props.onEntered(u);
      });
      return;
    }
    this.props.onEnter(u, d), this.safeSetState({
      status: Qn
    }, function() {
      s.props.onEntering(u, d), s.onTransitionEnd(p, function() {
        s.safeSetState({
          status: gr
        }, function() {
          s.props.onEntered(u, d);
        });
      });
    });
  }, n.performExit = function() {
    var i = this, s = this.props.exit, a = this.getTimeouts(), l = this.props.nodeRef ? void 0 : ci.findDOMNode(this);
    if (!s || yu.disabled) {
      this.safeSetState({
        status: Gn
      }, function() {
        i.props.onExited(l);
      });
      return;
    }
    this.props.onExit(l), this.safeSetState({
      status: La
    }, function() {
      i.props.onExiting(l), i.onTransitionEnd(a.exit, function() {
        i.safeSetState({
          status: Gn
        }, function() {
          i.props.onExited(l);
        });
      });
    });
  }, n.cancelNextCallback = function() {
    this.nextCallback !== null && (this.nextCallback.cancel(), this.nextCallback = null);
  }, n.safeSetState = function(i, s) {
    s = this.setNextCallback(s), this.setState(i, s);
  }, n.setNextCallback = function(i) {
    var s = this, a = !0;
    return this.nextCallback = function(l) {
      a && (a = !1, s.nextCallback = null, i(l));
    }, this.nextCallback.cancel = function() {
      a = !1;
    }, this.nextCallback;
  }, n.onTransitionEnd = function(i, s) {
    this.setNextCallback(s);
    var a = this.props.nodeRef ? this.props.nodeRef.current : ci.findDOMNode(this), l = i == null && !this.props.addEndListener;
    if (!a || l) {
      setTimeout(this.nextCallback, 0);
      return;
    }
    if (this.props.addEndListener) {
      var c = this.props.nodeRef ? [this.nextCallback] : [a, this.nextCallback], u = c[0], d = c[1];
      this.props.addEndListener(u, d);
    }
    i != null && setTimeout(this.nextCallback, i);
  }, n.render = function() {
    var i = this.state.status;
    if (i === po)
      return null;
    var s = this.props, a = s.children;
    s.in, s.mountOnEnter, s.unmountOnExit, s.appear, s.enter, s.exit, s.timeout, s.addEndListener, s.onEnter, s.onEntering, s.onEntered, s.onExit, s.onExiting, s.onExited, s.nodeRef;
    var l = xe(s, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);
    return (
      // allows for nested Transitions
      /* @__PURE__ */ At.createElement(Bi.Provider, {
        value: null
      }, typeof a == "function" ? a(i, l) : At.cloneElement(At.Children.only(a), l))
    );
  }, t;
}(At.Component);
$n.contextType = Bi;
$n.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * A React reference to DOM element that need to transition:
   * https://stackoverflow.com/a/51127130/4671932
   *
   *   - When `nodeRef` prop is used, `node` is not passed to callback functions
   *      (e.g. `onEnter`) because user already has direct access to the node.
   *   - When changing `key` prop of `Transition` in a `TransitionGroup` a new
   *     `nodeRef` need to be provided to `Transition` with changed `key` prop
   *     (see
   *     [test/CSSTransition-test.js](https://github.com/reactjs/react-transition-group/blob/13435f897b3ab71f6e19d724f145596f5910581c/test/CSSTransition-test.js#L362-L437)).
   */
  nodeRef: o.shape({
    current: typeof Element > "u" ? o.any : function(e, t, n, r, i, s) {
      var a = e[t];
      return o.instanceOf(a && "ownerDocument" in a ? a.ownerDocument.defaultView.Element : Element)(e, t, n, r, i, s);
    }
  }),
  /**
   * A `function` child can be used instead of a React element. This function is
   * called with the current transition status (`'entering'`, `'entered'`,
   * `'exiting'`, `'exited'`), which can be used to apply context
   * specific props to a component.
   *
   * ```jsx
   * <Transition in={this.state.in} timeout={150}>
   *   {state => (
   *     <MyComponent className={`fade fade-${state}`} />
   *   )}
   * </Transition>
   * ```
   */
  children: o.oneOfType([o.func.isRequired, o.element.isRequired]).isRequired,
  /**
   * Show the component; triggers the enter or exit states
   */
  in: o.bool,
  /**
   * By default the child component is mounted immediately along with
   * the parent `Transition` component. If you want to "lazy mount" the component on the
   * first `in={true}` you can set `mountOnEnter`. After the first enter transition the component will stay
   * mounted, even on "exited", unless you also specify `unmountOnExit`.
   */
  mountOnEnter: o.bool,
  /**
   * By default the child component stays mounted after it reaches the `'exited'` state.
   * Set `unmountOnExit` if you'd prefer to unmount the component after it finishes exiting.
   */
  unmountOnExit: o.bool,
  /**
   * By default the child component does not perform the enter transition when
   * it first mounts, regardless of the value of `in`. If you want this
   * behavior, set both `appear` and `in` to `true`.
   *
   * > **Note**: there are no special appear states like `appearing`/`appeared`, this prop
   * > only adds an additional enter transition. However, in the
   * > `<CSSTransition>` component that first enter transition does result in
   * > additional `.appear-*` classes, that way you can choose to style it
   * > differently.
   */
  appear: o.bool,
  /**
   * Enable or disable enter transitions.
   */
  enter: o.bool,
  /**
   * Enable or disable exit transitions.
   */
  exit: o.bool,
  /**
   * The duration of the transition, in milliseconds.
   * Required unless `addEndListener` is provided.
   *
   * You may specify a single timeout for all transitions:
   *
   * ```jsx
   * timeout={500}
   * ```
   *
   * or individually:
   *
   * ```jsx
   * timeout={{
   *  appear: 500,
   *  enter: 300,
   *  exit: 500,
   * }}
   * ```
   *
   * - `appear` defaults to the value of `enter`
   * - `enter` defaults to `0`
   * - `exit` defaults to `0`
   *
   * @type {number | { enter?: number, exit?: number, appear?: number }}
   */
  timeout: function(t) {
    var n = zx;
    t.addEndListener || (n = n.isRequired);
    for (var r = arguments.length, i = new Array(r > 1 ? r - 1 : 0), s = 1; s < r; s++)
      i[s - 1] = arguments[s];
    return n.apply(void 0, [t].concat(i));
  },
  /**
   * Add a custom transition end trigger. Called with the transitioning
   * DOM node and a `done` callback. Allows for more fine grained transition end
   * logic. Timeouts are still used as a fallback if provided.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * ```jsx
   * addEndListener={(node, done) => {
   *   // use the css transitionend event to mark the finish of a transition
   *   node.addEventListener('transitionend', done, false);
   * }}
   * ```
   */
  addEndListener: o.func,
  /**
   * Callback fired before the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEnter: o.func,
  /**
   * Callback fired after the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntering: o.func,
  /**
   * Callback fired after the "entered" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEntered: o.func,
  /**
   * Callback fired before the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExit: o.func,
  /**
   * Callback fired after the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExiting: o.func,
  /**
   * Callback fired after the "exited" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExited: o.func
} : {};
function vr() {
}
$n.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: vr,
  onEntering: vr,
  onEntered: vr,
  onExit: vr,
  onExiting: vr,
  onExited: vr
};
$n.UNMOUNTED = po;
$n.EXITED = Gn;
$n.ENTERING = Qn;
$n.ENTERED = gr;
$n.EXITING = La;
const rp = $n;
function qx(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Tl(e, t) {
  var n = function(s) {
    return t && gi(s) ? t(s) : s;
  }, r = /* @__PURE__ */ Object.create(null);
  return e && Ph.map(e, function(i) {
    return i;
  }).forEach(function(i) {
    r[i.key] = n(i);
  }), r;
}
function Hx(e, t) {
  e = e || {}, t = t || {};
  function n(d) {
    return d in t ? t[d] : e[d];
  }
  var r = /* @__PURE__ */ Object.create(null), i = [];
  for (var s in e)
    s in t ? i.length && (r[s] = i, i = []) : i.push(s);
  var a, l = {};
  for (var c in t) {
    if (r[c])
      for (a = 0; a < r[c].length; a++) {
        var u = r[c][a];
        l[r[c][a]] = n(u);
      }
    l[c] = n(c);
  }
  for (a = 0; a < i.length; a++)
    l[i[a]] = n(i[a]);
  return l;
}
function Xn(e, t, n) {
  return n[t] != null ? n[t] : e.props[t];
}
function Kx(e, t) {
  return Tl(e.children, function(n) {
    return xi(n, {
      onExited: t.bind(null, n),
      in: !0,
      appear: Xn(n, "appear", e),
      enter: Xn(n, "enter", e),
      exit: Xn(n, "exit", e)
    });
  });
}
function Yx(e, t, n) {
  var r = Tl(e.children), i = Hx(t, r);
  return Object.keys(i).forEach(function(s) {
    var a = i[s];
    if (gi(a)) {
      var l = s in t, c = s in r, u = t[s], d = gi(u) && !u.props.in;
      c && (!l || d) ? i[s] = xi(a, {
        onExited: n.bind(null, a),
        in: !0,
        exit: Xn(a, "exit", e),
        enter: Xn(a, "enter", e)
      }) : !c && l && !d ? i[s] = xi(a, {
        in: !1
      }) : c && l && gi(u) && (i[s] = xi(a, {
        onExited: n.bind(null, a),
        in: u.props.in,
        exit: Xn(a, "exit", e),
        enter: Xn(a, "enter", e)
      }));
    }
  }), i;
}
var Gx = Object.values || function(e) {
  return Object.keys(e).map(function(t) {
    return e[t];
  });
}, Qx = {
  component: "div",
  childFactory: function(t) {
    return t;
  }
}, Cl = /* @__PURE__ */ function(e) {
  np(t, e);
  function t(r, i) {
    var s;
    s = e.call(this, r, i) || this;
    var a = s.handleExited.bind(qx(s));
    return s.state = {
      contextValue: {
        isMounting: !0
      },
      handleExited: a,
      firstRender: !0
    }, s;
  }
  var n = t.prototype;
  return n.componentDidMount = function() {
    this.mounted = !0, this.setState({
      contextValue: {
        isMounting: !1
      }
    });
  }, n.componentWillUnmount = function() {
    this.mounted = !1;
  }, t.getDerivedStateFromProps = function(i, s) {
    var a = s.children, l = s.handleExited, c = s.firstRender;
    return {
      children: c ? Kx(i, l) : Yx(i, a, l),
      firstRender: !1
    };
  }, n.handleExited = function(i, s) {
    var a = Tl(this.props.children);
    i.key in a || (i.props.onExited && i.props.onExited(s), this.mounted && this.setState(function(l) {
      var c = w({}, l.children);
      return delete c[i.key], {
        children: c
      };
    }));
  }, n.render = function() {
    var i = this.props, s = i.component, a = i.childFactory, l = xe(i, ["component", "childFactory"]), c = this.state.contextValue, u = Gx(this.state.children).map(a);
    return delete l.appear, delete l.enter, delete l.exit, s === null ? /* @__PURE__ */ At.createElement(Bi.Provider, {
      value: c
    }, u) : /* @__PURE__ */ At.createElement(Bi.Provider, {
      value: c
    }, /* @__PURE__ */ At.createElement(s, l, u));
  }, t;
}(At.Component);
Cl.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * `<TransitionGroup>` renders a `<div>` by default. You can change this
   * behavior by providing a `component` prop.
   * If you use React v16+ and would like to avoid a wrapping `<div>` element
   * you can pass in `component={null}`. This is useful if the wrapping div
   * borks your css styles.
   */
  component: o.any,
  /**
   * A set of `<Transition>` components, that are toggled `in` and out as they
   * leave. the `<TransitionGroup>` will inject specific transition props, so
   * remember to spread them through if you are wrapping the `<Transition>` as
   * with our `<Fade>` example.
   *
   * While this component is meant for multiple `Transition` or `CSSTransition`
   * children, sometimes you may want to have a single transition child with
   * content that you want to be transitioned out and in when you change it
   * (e.g. routes, images etc.) In that case you can change the `key` prop of
   * the transition child as you change its content, this will cause
   * `TransitionGroup` to transition the child out and back in.
   */
  children: o.node,
  /**
   * A convenience prop that enables or disables appear animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  appear: o.bool,
  /**
   * A convenience prop that enables or disables enter animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  enter: o.bool,
  /**
   * A convenience prop that enables or disables exit animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  exit: o.bool,
  /**
   * You may need to apply reactive updates to a child as it is exiting.
   * This is generally done by using `cloneElement` however in the case of an exiting
   * child the element has already been removed and not accessible to the consumer.
   *
   * If you do need to update a child as it leaves you can provide a `childFactory`
   * to wrap every child, even the ones that are leaving.
   *
   * @type Function(child: ReactElement) -> ReactElement
   */
  childFactory: o.func
} : {};
Cl.defaultProps = Qx;
const Xx = Cl, op = (e) => e.scrollTop;
function Vi(e, t) {
  var n, r;
  const {
    timeout: i,
    easing: s,
    style: a = {}
  } = e;
  return {
    duration: (n = a.transitionDuration) != null ? n : typeof i == "number" ? i : i[t.mode] || 0,
    easing: (r = a.transitionTimingFunction) != null ? r : typeof s == "object" ? s[t.mode] : s,
    delay: a.transitionDelay
  };
}
function Jx(e) {
  return Le("MuiPaper", e);
}
Be("MuiPaper", ["root", "rounded", "outlined", "elevation", "elevation0", "elevation1", "elevation2", "elevation3", "elevation4", "elevation5", "elevation6", "elevation7", "elevation8", "elevation9", "elevation10", "elevation11", "elevation12", "elevation13", "elevation14", "elevation15", "elevation16", "elevation17", "elevation18", "elevation19", "elevation20", "elevation21", "elevation22", "elevation23", "elevation24"]);
const Zx = ["className", "component", "elevation", "square", "variant"], eE = (e) => {
  const {
    square: t,
    elevation: n,
    variant: r,
    classes: i
  } = e, s = {
    root: ["root", r, !t && "rounded", r === "elevation" && `elevation${n}`]
  };
  return Ue(s, Jx, i);
}, tE = de("div", {
  name: "MuiPaper",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[n.variant], !n.square && t.rounded, n.variant === "elevation" && t[`elevation${n.elevation}`]];
  }
})(({
  theme: e,
  ownerState: t
}) => {
  var n;
  return w({
    backgroundColor: (e.vars || e).palette.background.paper,
    color: (e.vars || e).palette.text.primary,
    transition: e.transitions.create("box-shadow")
  }, !t.square && {
    borderRadius: e.shape.borderRadius
  }, t.variant === "outlined" && {
    border: `1px solid ${(e.vars || e).palette.divider}`
  }, t.variant === "elevation" && w({
    boxShadow: (e.vars || e).shadows[t.elevation]
  }, !e.vars && e.palette.mode === "dark" && {
    backgroundImage: `linear-gradient(${ht("#fff", mu(t.elevation))}, ${ht("#fff", mu(t.elevation))})`
  }, e.vars && {
    backgroundImage: (n = e.vars.overlays) == null ? void 0 : n[t.elevation]
  }));
}), ip = /* @__PURE__ */ v.forwardRef(function(t, n) {
  const r = ze({
    props: t,
    name: "MuiPaper"
  }), {
    className: i,
    component: s = "div",
    elevation: a = 1,
    square: l = !1,
    variant: c = "elevation"
  } = r, u = xe(r, Zx), d = w({}, r, {
    component: s,
    elevation: a,
    square: l,
    variant: c
  }), f = eE(d);
  return process.env.NODE_ENV !== "production" && ni().shadows[a] === void 0 && console.error([`MUI: The elevation provided <Paper elevation={${a}}> is not available in the theme.`, `Please make sure that \`theme.shadows[${a}]\` is defined.`].join(`
`)), /* @__PURE__ */ k.jsx(tE, w({
    as: s,
    ownerState: d,
    className: Oe(f.root, i),
    ref: n
  }, u));
});
process.env.NODE_ENV !== "production" && (ip.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: o.elementType,
  /**
   * Shadow depth, corresponds to `dp` in the spec.
   * It accepts values between 0 and 24 inclusive.
   * @default 1
   */
  elevation: yn(xl, (e) => {
    const {
      elevation: t,
      variant: n
    } = e;
    return t > 0 && n === "outlined" ? new Error(`MUI: Combining \`elevation={${t}}\` with \`variant="${n}"\` has no effect. Either use \`elevation={0}\` or use a different \`variant\`.`) : null;
  }),
  /**
   * If `true`, rounded corners are disabled.
   * @default false
   */
  square: o.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * The variant to use.
   * @default 'elevation'
   */
  variant: o.oneOfType([o.oneOf(["elevation", "outlined"]), o.string])
});
const oi = ip;
function Ui(e) {
  return typeof e == "string";
}
function nE(e, t, n) {
  return e === void 0 || Ui(e) ? t : w({}, t, {
    ownerState: w({}, t.ownerState, n)
  });
}
const rE = {
  disableDefaultClasses: !1
}, sp = /* @__PURE__ */ v.createContext(rE);
process.env.NODE_ENV !== "production" && (sp.displayName = "ClassNameConfiguratorContext");
function oE(e) {
  const {
    disableDefaultClasses: t
  } = v.useContext(sp);
  return (n) => t ? "" : e(n);
}
function ap(e, t = []) {
  if (e === void 0)
    return {};
  const n = {};
  return Object.keys(e).filter((r) => r.match(/^on[A-Z]/) && typeof e[r] == "function" && !t.includes(r)).forEach((r) => {
    n[r] = e[r];
  }), n;
}
function iE(e, t, n) {
  return typeof e == "function" ? e(t, n) : e;
}
function bu(e) {
  if (e === void 0)
    return {};
  const t = {};
  return Object.keys(e).filter((n) => !(n.match(/^on[A-Z]/) && typeof e[n] == "function")).forEach((n) => {
    t[n] = e[n];
  }), t;
}
function sE(e) {
  const {
    getSlotProps: t,
    additionalProps: n,
    externalSlotProps: r,
    externalForwardedProps: i,
    className: s
  } = e;
  if (!t) {
    const b = Oe(n == null ? void 0 : n.className, s, i == null ? void 0 : i.className, r == null ? void 0 : r.className), y = w({}, n == null ? void 0 : n.style, i == null ? void 0 : i.style, r == null ? void 0 : r.style), h = w({}, n, i, r);
    return b.length > 0 && (h.className = b), Object.keys(y).length > 0 && (h.style = y), {
      props: h,
      internalRef: void 0
    };
  }
  const a = ap(w({}, i, r)), l = bu(r), c = bu(i), u = t(a), d = Oe(u == null ? void 0 : u.className, n == null ? void 0 : n.className, s, i == null ? void 0 : i.className, r == null ? void 0 : r.className), f = w({}, u == null ? void 0 : u.style, n == null ? void 0 : n.style, i == null ? void 0 : i.style, r == null ? void 0 : r.style), p = w({}, u, n, c, l);
  return d.length > 0 && (p.className = d), Object.keys(f).length > 0 && (p.style = f), {
    props: p,
    internalRef: u.ref
  };
}
const aE = ["elementType", "externalSlotProps", "ownerState", "skipResolvingSlotProps"];
function lr(e) {
  var t;
  const {
    elementType: n,
    externalSlotProps: r,
    ownerState: i,
    skipResolvingSlotProps: s = !1
  } = e, a = xe(e, aE), l = s ? {} : iE(r, i), {
    props: c,
    internalRef: u
  } = sE(w({}, a, {
    externalSlotProps: l
  })), d = ct(u, l == null ? void 0 : l.ref, (t = e.additionalProps) == null ? void 0 : t.ref);
  return nE(n, w({}, c, {
    ref: d
  }), i);
}
function lp(e) {
  const {
    className: t,
    classes: n,
    pulsate: r = !1,
    rippleX: i,
    rippleY: s,
    rippleSize: a,
    in: l,
    onExited: c,
    timeout: u
  } = e, [d, f] = v.useState(!1), p = Oe(t, n.ripple, n.rippleVisible, r && n.ripplePulsate), b = {
    width: a,
    height: a,
    top: -(a / 2) + s,
    left: -(a / 2) + i
  }, y = Oe(n.child, d && n.childLeaving, r && n.childPulsate);
  return !l && !d && f(!0), v.useEffect(() => {
    if (!l && c != null) {
      const h = setTimeout(c, u);
      return () => {
        clearTimeout(h);
      };
    }
  }, [c, l, u]), /* @__PURE__ */ k.jsx("span", {
    className: p,
    style: b,
    children: /* @__PURE__ */ k.jsx("span", {
      className: y
    })
  });
}
process.env.NODE_ENV !== "production" && (lp.propTypes = {
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object.isRequired,
  className: o.string,
  /**
   * @ignore - injected from TransitionGroup
   */
  in: o.bool,
  /**
   * @ignore - injected from TransitionGroup
   */
  onExited: o.func,
  /**
   * If `true`, the ripple pulsates, typically indicating the keyboard focus state of an element.
   */
  pulsate: o.bool,
  /**
   * Diameter of the ripple.
   */
  rippleSize: o.number,
  /**
   * Horizontal position of the ripple center.
   */
  rippleX: o.number,
  /**
   * Vertical position of the ripple center.
   */
  rippleY: o.number,
  /**
   * exit delay
   */
  timeout: o.number.isRequired
});
const Wt = Be("MuiTouchRipple", ["root", "ripple", "rippleVisible", "ripplePulsate", "child", "childLeaving", "childPulsate"]), lE = ["center", "classes", "className"];
let ws = (e) => e, vu, gu, xu, Eu;
const Ba = 550, cE = 80, uE = Kr(vu || (vu = ws`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)), dE = Kr(gu || (gu = ws`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)), fE = Kr(xu || (xu = ws`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)), pE = de("span", {
  name: "MuiTouchRipple",
  slot: "Root"
})({
  overflow: "hidden",
  pointerEvents: "none",
  position: "absolute",
  zIndex: 0,
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  borderRadius: "inherit"
}), hE = de(lp, {
  name: "MuiTouchRipple",
  slot: "Ripple"
})(Eu || (Eu = ws`
  opacity: 0;
  position: absolute;

  &.${0} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  &.${0} {
    animation-duration: ${0}ms;
  }

  & .${0} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${0} {
    opacity: 0;
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  & .${0} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${0};
    animation-duration: 2500ms;
    animation-timing-function: ${0};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`), Wt.rippleVisible, uE, Ba, ({
  theme: e
}) => e.transitions.easing.easeInOut, Wt.ripplePulsate, ({
  theme: e
}) => e.transitions.duration.shorter, Wt.child, Wt.childLeaving, dE, Ba, ({
  theme: e
}) => e.transitions.easing.easeInOut, Wt.childPulsate, fE, ({
  theme: e
}) => e.transitions.easing.easeInOut), cp = /* @__PURE__ */ v.forwardRef(function(t, n) {
  const r = ze({
    props: t,
    name: "MuiTouchRipple"
  }), {
    center: i = !1,
    classes: s = {},
    className: a
  } = r, l = xe(r, lE), [c, u] = v.useState([]), d = v.useRef(0), f = v.useRef(null);
  v.useEffect(() => {
    f.current && (f.current(), f.current = null);
  }, [c]);
  const p = v.useRef(!1), b = Bf(), y = v.useRef(null), h = v.useRef(null), m = v.useCallback((O) => {
    const {
      pulsate: x,
      rippleX: P,
      rippleY: R,
      rippleSize: N,
      cb: A
    } = O;
    u((L) => [...L, /* @__PURE__ */ k.jsx(hE, {
      classes: {
        ripple: Oe(s.ripple, Wt.ripple),
        rippleVisible: Oe(s.rippleVisible, Wt.rippleVisible),
        ripplePulsate: Oe(s.ripplePulsate, Wt.ripplePulsate),
        child: Oe(s.child, Wt.child),
        childLeaving: Oe(s.childLeaving, Wt.childLeaving),
        childPulsate: Oe(s.childPulsate, Wt.childPulsate)
      },
      timeout: Ba,
      pulsate: x,
      rippleX: P,
      rippleY: R,
      rippleSize: N
    }, d.current)]), d.current += 1, f.current = A;
  }, [s]), g = v.useCallback((O = {}, x = {}, P = () => {
  }) => {
    const {
      pulsate: R = !1,
      center: N = i || x.pulsate,
      fakeElement: A = !1
      // For test purposes
    } = x;
    if ((O == null ? void 0 : O.type) === "mousedown" && p.current) {
      p.current = !1;
      return;
    }
    (O == null ? void 0 : O.type) === "touchstart" && (p.current = !0);
    const L = A ? null : h.current, K = L ? L.getBoundingClientRect() : {
      width: 0,
      height: 0,
      left: 0,
      top: 0
    };
    let B, U, z;
    if (N || O === void 0 || O.clientX === 0 && O.clientY === 0 || !O.clientX && !O.touches)
      B = Math.round(K.width / 2), U = Math.round(K.height / 2);
    else {
      const {
        clientX: Y,
        clientY: M
      } = O.touches && O.touches.length > 0 ? O.touches[0] : O;
      B = Math.round(Y - K.left), U = Math.round(M - K.top);
    }
    if (N)
      z = Math.sqrt((2 * K.width ** 2 + K.height ** 2) / 3), z % 2 === 0 && (z += 1);
    else {
      const Y = Math.max(Math.abs((L ? L.clientWidth : 0) - B), B) * 2 + 2, M = Math.max(Math.abs((L ? L.clientHeight : 0) - U), U) * 2 + 2;
      z = Math.sqrt(Y ** 2 + M ** 2);
    }
    O != null && O.touches ? y.current === null && (y.current = () => {
      m({
        pulsate: R,
        rippleX: B,
        rippleY: U,
        rippleSize: z,
        cb: P
      });
    }, b.start(cE, () => {
      y.current && (y.current(), y.current = null);
    })) : m({
      pulsate: R,
      rippleX: B,
      rippleY: U,
      rippleSize: z,
      cb: P
    });
  }, [i, m, b]), C = v.useCallback(() => {
    g({}, {
      pulsate: !0
    });
  }, [g]), E = v.useCallback((O, x) => {
    if (b.clear(), (O == null ? void 0 : O.type) === "touchend" && y.current) {
      y.current(), y.current = null, b.start(0, () => {
        E(O, x);
      });
      return;
    }
    y.current = null, u((P) => P.length > 0 ? P.slice(1) : P), f.current = x;
  }, [b]);
  return v.useImperativeHandle(n, () => ({
    pulsate: C,
    start: g,
    stop: E
  }), [C, g, E]), /* @__PURE__ */ k.jsx(pE, w({
    className: Oe(Wt.root, s.root, a),
    ref: h
  }, l, {
    children: /* @__PURE__ */ k.jsx(Xx, {
      component: null,
      exit: !0,
      children: c
    })
  }));
});
process.env.NODE_ENV !== "production" && (cp.propTypes = {
  /**
   * If `true`, the ripple starts at the center of the component
   * rather than at the point of interaction.
   */
  center: o.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string
});
const mE = cp;
function yE(e) {
  return Le("MuiButtonBase", e);
}
const bE = Be("MuiButtonBase", ["root", "disabled", "focusVisible"]), vE = ["action", "centerRipple", "children", "className", "component", "disabled", "disableRipple", "disableTouchRipple", "focusRipple", "focusVisibleClassName", "LinkComponent", "onBlur", "onClick", "onContextMenu", "onDragLeave", "onFocus", "onFocusVisible", "onKeyDown", "onKeyUp", "onMouseDown", "onMouseLeave", "onMouseUp", "onTouchEnd", "onTouchMove", "onTouchStart", "tabIndex", "TouchRippleProps", "touchRippleRef", "type"], gE = (e) => {
  const {
    disabled: t,
    focusVisible: n,
    focusVisibleClassName: r,
    classes: i
  } = e, a = Ue({
    root: ["root", t && "disabled", n && "focusVisible"]
  }, yE, i);
  return n && r && (a.root += ` ${r}`), a;
}, xE = de("button", {
  name: "MuiButtonBase",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  boxSizing: "border-box",
  WebkitTapHighlightColor: "transparent",
  backgroundColor: "transparent",
  // Reset default value
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0,
  border: 0,
  margin: 0,
  // Remove the margin in Safari
  borderRadius: 0,
  padding: 0,
  // Remove the padding in Firefox
  cursor: "pointer",
  userSelect: "none",
  verticalAlign: "middle",
  MozAppearance: "none",
  // Reset
  WebkitAppearance: "none",
  // Reset
  textDecoration: "none",
  // So we take precedent over the style of a native <a /> element.
  color: "inherit",
  "&::-moz-focus-inner": {
    borderStyle: "none"
    // Remove Firefox dotted outline.
  },
  [`&.${bE.disabled}`]: {
    pointerEvents: "none",
    // Disable link interactions
    cursor: "default"
  },
  "@media print": {
    colorAdjust: "exact"
  }
}), up = /* @__PURE__ */ v.forwardRef(function(t, n) {
  const r = ze({
    props: t,
    name: "MuiButtonBase"
  }), {
    action: i,
    centerRipple: s = !1,
    children: a,
    className: l,
    component: c = "button",
    disabled: u = !1,
    disableRipple: d = !1,
    disableTouchRipple: f = !1,
    focusRipple: p = !1,
    LinkComponent: b = "a",
    onBlur: y,
    onClick: h,
    onContextMenu: m,
    onDragLeave: g,
    onFocus: C,
    onFocusVisible: E,
    onKeyDown: O,
    onKeyUp: x,
    onMouseDown: P,
    onMouseLeave: R,
    onMouseUp: N,
    onTouchEnd: A,
    onTouchMove: L,
    onTouchStart: K,
    tabIndex: B = 0,
    TouchRippleProps: U,
    touchRippleRef: z,
    type: Y
  } = r, M = xe(r, vE), G = v.useRef(null), W = v.useRef(null), le = ct(W, z), {
    isFocusVisibleRef: I,
    onFocus: X,
    onBlur: se,
    ref: oe
  } = Vf(), [H, Z] = v.useState(!1);
  u && H && Z(!1), v.useImperativeHandle(i, () => ({
    focusVisible: () => {
      Z(!0), G.current.focus();
    }
  }), []);
  const [te, ue] = v.useState(!1);
  v.useEffect(() => {
    ue(!0);
  }, []);
  const J = te && !d && !u;
  v.useEffect(() => {
    H && p && !d && te && W.current.pulsate();
  }, [d, p, H, te]);
  function ie(re, Qe, xt = f) {
    return nn((Et) => (Qe && Qe(Et), !xt && W.current && W.current[re](Et), !0));
  }
  const he = ie("start", P), me = ie("stop", m), D = ie("stop", g), ye = ie("stop", N), Q = ie("stop", (re) => {
    H && re.preventDefault(), R && R(re);
  }), be = ie("start", K), ne = ie("stop", A), Xe = ie("stop", L), Te = ie("stop", (re) => {
    se(re), I.current === !1 && Z(!1), y && y(re);
  }, !1), We = nn((re) => {
    G.current || (G.current = re.currentTarget), X(re), I.current === !0 && (Z(!0), E && E(re)), C && C(re);
  }), Ve = () => {
    const re = G.current;
    return c && c !== "button" && !(re.tagName === "A" && re.href);
  }, Pe = v.useRef(!1), He = nn((re) => {
    p && !Pe.current && H && W.current && re.key === " " && (Pe.current = !0, W.current.stop(re, () => {
      W.current.start(re);
    })), re.target === re.currentTarget && Ve() && re.key === " " && re.preventDefault(), O && O(re), re.target === re.currentTarget && Ve() && re.key === "Enter" && !u && (re.preventDefault(), h && h(re));
  }), qe = nn((re) => {
    p && re.key === " " && W.current && H && !re.defaultPrevented && (Pe.current = !1, W.current.stop(re, () => {
      W.current.pulsate(re);
    })), x && x(re), h && re.target === re.currentTarget && Ve() && re.key === " " && !re.defaultPrevented && h(re);
  });
  let $e = c;
  $e === "button" && (M.href || M.to) && ($e = b);
  const Ze = {};
  $e === "button" ? (Ze.type = Y === void 0 ? "button" : Y, Ze.disabled = u) : (!M.href && !M.to && (Ze.role = "button"), u && (Ze["aria-disabled"] = u));
  const ut = ct(n, oe, G);
  process.env.NODE_ENV !== "production" && v.useEffect(() => {
    J && !W.current && console.error(["MUI: The `component` prop provided to ButtonBase is invalid.", "Please make sure the children prop is rendered in this custom component."].join(`
`));
  }, [J]);
  const et = w({}, r, {
    centerRipple: s,
    component: c,
    disabled: u,
    disableRipple: d,
    disableTouchRipple: f,
    focusRipple: p,
    tabIndex: B,
    focusVisible: H
  }), we = gE(et);
  return /* @__PURE__ */ k.jsxs(xE, w({
    as: $e,
    className: Oe(we.root, l),
    ownerState: et,
    onBlur: Te,
    onClick: h,
    onContextMenu: me,
    onFocus: We,
    onKeyDown: He,
    onKeyUp: qe,
    onMouseDown: he,
    onMouseLeave: Q,
    onMouseUp: ye,
    onDragLeave: D,
    onTouchEnd: ne,
    onTouchMove: Xe,
    onTouchStart: be,
    ref: ut,
    tabIndex: u ? -1 : B,
    type: Y
  }, Ze, M, {
    children: [a, J ? (
      /* TouchRipple is only needed client-side, x2 boost on the server. */
      /* @__PURE__ */ k.jsx(mE, w({
        ref: le,
        center: s
      }, U))
    ) : null]
  }));
});
process.env.NODE_ENV !== "production" && (up.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A ref for imperative actions.
   * It currently only supports `focusVisible()` action.
   */
  action: on,
  /**
   * If `true`, the ripples are centered.
   * They won't start at the cursor interaction position.
   * @default false
   */
  centerRipple: o.bool,
  /**
   * The content of the component.
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: vl,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: o.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: o.bool,
  /**
   * If `true`, the touch ripple effect is disabled.
   * @default false
   */
  disableTouchRipple: o.bool,
  /**
   * If `true`, the base button will have a keyboard focus ripple.
   * @default false
   */
  focusRipple: o.bool,
  /**
   * This prop can help identify which element has keyboard focus.
   * The class name will be applied when the element gains the focus through keyboard interaction.
   * It's a polyfill for the [CSS :focus-visible selector](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo).
   * The rationale for using this feature [is explained here](https://github.com/WICG/focus-visible/blob/HEAD/explainer.md).
   * A [polyfill can be used](https://github.com/WICG/focus-visible) to apply a `focus-visible` class to other components
   * if needed.
   */
  focusVisibleClassName: o.string,
  /**
   * @ignore
   */
  href: o.any,
  /**
   * The component used to render a link when the `href` prop is provided.
   * @default 'a'
   */
  LinkComponent: o.elementType,
  /**
   * @ignore
   */
  onBlur: o.func,
  /**
   * @ignore
   */
  onClick: o.func,
  /**
   * @ignore
   */
  onContextMenu: o.func,
  /**
   * @ignore
   */
  onDragLeave: o.func,
  /**
   * @ignore
   */
  onFocus: o.func,
  /**
   * Callback fired when the component is focused with a keyboard.
   * We trigger a `onFocus` callback too.
   */
  onFocusVisible: o.func,
  /**
   * @ignore
   */
  onKeyDown: o.func,
  /**
   * @ignore
   */
  onKeyUp: o.func,
  /**
   * @ignore
   */
  onMouseDown: o.func,
  /**
   * @ignore
   */
  onMouseLeave: o.func,
  /**
   * @ignore
   */
  onMouseUp: o.func,
  /**
   * @ignore
   */
  onTouchEnd: o.func,
  /**
   * @ignore
   */
  onTouchMove: o.func,
  /**
   * @ignore
   */
  onTouchStart: o.func,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * @default 0
   */
  tabIndex: o.number,
  /**
   * Props applied to the `TouchRipple` element.
   */
  TouchRippleProps: o.object,
  /**
   * A ref that points to the `TouchRipple` element.
   */
  touchRippleRef: o.oneOfType([o.func, o.shape({
    current: o.shape({
      pulsate: o.func.isRequired,
      start: o.func.isRequired,
      stop: o.func.isRequired
    })
  })]),
  /**
   * @ignore
   */
  type: o.oneOfType([o.oneOf(["button", "reset", "submit"]), o.string])
});
const Va = up;
function EE(e) {
  return Le("MuiIconButton", e);
}
const OE = Be("MuiIconButton", ["root", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorError", "colorInfo", "colorSuccess", "colorWarning", "edgeStart", "edgeEnd", "sizeSmall", "sizeMedium", "sizeLarge"]), wE = ["edge", "children", "className", "color", "disabled", "disableFocusRipple", "size"], TE = (e) => {
  const {
    classes: t,
    disabled: n,
    color: r,
    edge: i,
    size: s
  } = e, a = {
    root: ["root", n && "disabled", r !== "default" && `color${ae(r)}`, i && `edge${ae(i)}`, `size${ae(s)}`]
  };
  return Ue(a, EE, t);
}, CE = de(Va, {
  name: "MuiIconButton",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.color !== "default" && t[`color${ae(n.color)}`], n.edge && t[`edge${ae(n.edge)}`], t[`size${ae(n.size)}`]];
  }
})(({
  theme: e,
  ownerState: t
}) => w({
  textAlign: "center",
  flex: "0 0 auto",
  fontSize: e.typography.pxToRem(24),
  padding: 8,
  borderRadius: "50%",
  overflow: "visible",
  // Explicitly set the default value to solve a bug on IE11.
  color: (e.vars || e).palette.action.active,
  transition: e.transitions.create("background-color", {
    duration: e.transitions.duration.shortest
  })
}, !t.disableRipple && {
  "&:hover": {
    backgroundColor: e.vars ? `rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})` : ht(e.palette.action.active, e.palette.action.hoverOpacity),
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      backgroundColor: "transparent"
    }
  }
}, t.edge === "start" && {
  marginLeft: t.size === "small" ? -3 : -12
}, t.edge === "end" && {
  marginRight: t.size === "small" ? -3 : -12
}), ({
  theme: e,
  ownerState: t
}) => {
  var n;
  const r = (n = (e.vars || e).palette) == null ? void 0 : n[t.color];
  return w({}, t.color === "inherit" && {
    color: "inherit"
  }, t.color !== "inherit" && t.color !== "default" && w({
    color: r == null ? void 0 : r.main
  }, !t.disableRipple && {
    "&:hover": w({}, r && {
      backgroundColor: e.vars ? `rgba(${r.mainChannel} / ${e.vars.palette.action.hoverOpacity})` : ht(r.main, e.palette.action.hoverOpacity)
    }, {
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: "transparent"
      }
    })
  }), t.size === "small" && {
    padding: 5,
    fontSize: e.typography.pxToRem(18)
  }, t.size === "large" && {
    padding: 12,
    fontSize: e.typography.pxToRem(28)
  }, {
    [`&.${OE.disabled}`]: {
      backgroundColor: "transparent",
      color: (e.vars || e).palette.action.disabled
    }
  });
}), dp = /* @__PURE__ */ v.forwardRef(function(t, n) {
  const r = ze({
    props: t,
    name: "MuiIconButton"
  }), {
    edge: i = !1,
    children: s,
    className: a,
    color: l = "default",
    disabled: c = !1,
    disableFocusRipple: u = !1,
    size: d = "medium"
  } = r, f = xe(r, wE), p = w({}, r, {
    edge: i,
    color: l,
    disabled: c,
    disableFocusRipple: u,
    size: d
  }), b = TE(p);
  return /* @__PURE__ */ k.jsx(CE, w({
    className: Oe(b.root, a),
    centerRipple: !0,
    focusRipple: !u,
    disabled: c,
    ref: n
  }, f, {
    ownerState: p,
    children: s
  }));
});
process.env.NODE_ENV !== "production" && (dp.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The icon to display.
   */
  children: yn(o.node, (e) => v.Children.toArray(e.children).some((n) => /* @__PURE__ */ v.isValidElement(n) && n.props.onClick) ? new Error(["MUI: You are providing an onClick event listener to a child of a button element.", "Prefer applying it to the IconButton directly.", "This guarantees that the whole <button> will be responsive to click events."].join(`
`)) : null),
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'default'
   */
  color: o.oneOfType([o.oneOf(["inherit", "default", "primary", "secondary", "error", "info", "success", "warning"]), o.string]),
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: o.bool,
  /**
   * If `true`, the  keyboard focus ripple is disabled.
   * @default false
   */
  disableFocusRipple: o.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: o.bool,
  /**
   * If given, uses a negative margin to counteract the padding on one
   * side (this is often helpful for aligning the left or right
   * side of the icon with content above or below, without ruining the border
   * size and shape).
   * @default false
   */
  edge: o.oneOf(["end", "start", !1]),
  /**
   * The size of the component.
   * `small` is equivalent to the dense button styling.
   * @default 'medium'
   */
  size: o.oneOfType([o.oneOf(["small", "medium", "large"]), o.string]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object])
});
const fp = dp, SE = Os(/* @__PURE__ */ k.jsx("path", {
  d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
}), "Close");
function RE(e) {
  return Le("MuiTypography", e);
}
Be("MuiTypography", ["root", "h1", "h2", "h3", "h4", "h5", "h6", "subtitle1", "subtitle2", "body1", "body2", "inherit", "button", "caption", "overline", "alignLeft", "alignRight", "alignCenter", "alignJustify", "noWrap", "gutterBottom", "paragraph"]);
const PE = ["align", "className", "component", "gutterBottom", "noWrap", "paragraph", "variant", "variantMapping"], $E = (e) => {
  const {
    align: t,
    gutterBottom: n,
    noWrap: r,
    paragraph: i,
    variant: s,
    classes: a
  } = e, l = {
    root: ["root", s, e.align !== "inherit" && `align${ae(t)}`, n && "gutterBottom", r && "noWrap", i && "paragraph"]
  };
  return Ue(l, RE, a);
}, _E = de("span", {
  name: "MuiTypography",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.variant && t[n.variant], n.align !== "inherit" && t[`align${ae(n.align)}`], n.noWrap && t.noWrap, n.gutterBottom && t.gutterBottom, n.paragraph && t.paragraph];
  }
})(({
  theme: e,
  ownerState: t
}) => w({
  margin: 0
}, t.variant === "inherit" && {
  // Some elements, like <button> on Chrome have default font that doesn't inherit, reset this.
  font: "inherit"
}, t.variant !== "inherit" && e.typography[t.variant], t.align !== "inherit" && {
  textAlign: t.align
}, t.noWrap && {
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap"
}, t.gutterBottom && {
  marginBottom: "0.35em"
}, t.paragraph && {
  marginBottom: 16
})), Ou = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  subtitle1: "h6",
  subtitle2: "h6",
  body1: "p",
  body2: "p",
  inherit: "p"
}, kE = {
  primary: "primary.main",
  textPrimary: "text.primary",
  secondary: "secondary.main",
  textSecondary: "text.secondary",
  error: "error.main"
}, NE = (e) => kE[e] || e, pp = /* @__PURE__ */ v.forwardRef(function(t, n) {
  const r = ze({
    props: t,
    name: "MuiTypography"
  }), i = NE(r.color), s = yl(w({}, r, {
    color: i
  })), {
    align: a = "inherit",
    className: l,
    component: c,
    gutterBottom: u = !1,
    noWrap: d = !1,
    paragraph: f = !1,
    variant: p = "body1",
    variantMapping: b = Ou
  } = s, y = xe(s, PE), h = w({}, s, {
    align: a,
    color: i,
    className: l,
    component: c,
    gutterBottom: u,
    noWrap: d,
    paragraph: f,
    variant: p,
    variantMapping: b
  }), m = c || (f ? "p" : b[p] || Ou[p]) || "span", g = $E(h);
  return /* @__PURE__ */ k.jsx(_E, w({
    as: m,
    ref: n,
    ownerState: h,
    className: Oe(g.root, l)
  }, y));
});
process.env.NODE_ENV !== "production" && (pp.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Set the text-align on the component.
   * @default 'inherit'
   */
  align: o.oneOf(["center", "inherit", "justify", "left", "right"]),
  /**
   * The content of the component.
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: o.elementType,
  /**
   * If `true`, the text will have a bottom margin.
   * @default false
   */
  gutterBottom: o.bool,
  /**
   * If `true`, the text will not wrap, but instead will truncate with a text overflow ellipsis.
   *
   * Note that text overflow can only happen with block or inline-block level elements
   * (the element needs to have a width in order to overflow).
   * @default false
   */
  noWrap: o.bool,
  /**
   * If `true`, the element will be a paragraph element.
   * @default false
   */
  paragraph: o.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * Applies the theme typography styles.
   * @default 'body1'
   */
  variant: o.oneOfType([o.oneOf(["body1", "body2", "button", "caption", "h1", "h2", "h3", "h4", "h5", "h6", "inherit", "overline", "subtitle1", "subtitle2"]), o.string]),
  /**
   * The component maps the variant prop to a range of different HTML element types.
   * For instance, subtitle1 to `<h6>`.
   * If you wish to change that mapping, you can provide your own.
   * Alternatively, you can use the `component` prop.
   * @default {
   *   h1: 'h1',
   *   h2: 'h2',
   *   h3: 'h3',
   *   h4: 'h4',
   *   h5: 'h5',
   *   h6: 'h6',
   *   subtitle1: 'h6',
   *   subtitle2: 'h6',
   *   body1: 'p',
   *   body2: 'p',
   *   inherit: 'p',
   * }
   */
  variantMapping: o.object
});
const Sl = pp, hp = "base";
function IE(e) {
  return `${hp}--${e}`;
}
function AE(e, t) {
  return `${hp}-${e}-${t}`;
}
function mp(e, t) {
  const n = _f[t];
  return n ? IE(n) : AE(e, t);
}
function jE(e, t) {
  const n = {};
  return t.forEach((r) => {
    n[r] = mp(e, r);
  }), n;
}
const ME = ["input", "select", "textarea", "a[href]", "button", "[tabindex]", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable="false"])'].join(",");
function DE(e) {
  const t = parseInt(e.getAttribute("tabindex") || "", 10);
  return Number.isNaN(t) ? e.contentEditable === "true" || (e.nodeName === "AUDIO" || e.nodeName === "VIDEO" || e.nodeName === "DETAILS") && e.getAttribute("tabindex") === null ? 0 : e.tabIndex : t;
}
function FE(e) {
  if (e.tagName !== "INPUT" || e.type !== "radio" || !e.name)
    return !1;
  const t = (r) => e.ownerDocument.querySelector(`input[type="radio"]${r}`);
  let n = t(`[name="${e.name}"]:checked`);
  return n || (n = t(`[name="${e.name}"]`)), n !== e;
}
function LE(e) {
  return !(e.disabled || e.tagName === "INPUT" && e.type === "hidden" || FE(e));
}
function BE(e) {
  const t = [], n = [];
  return Array.from(e.querySelectorAll(ME)).forEach((r, i) => {
    const s = DE(r);
    s === -1 || !LE(r) || (s === 0 ? t.push(r) : n.push({
      documentOrder: i,
      tabIndex: s,
      node: r
    }));
  }), n.sort((r, i) => r.tabIndex === i.tabIndex ? r.documentOrder - i.documentOrder : r.tabIndex - i.tabIndex).map((r) => r.node).concat(t);
}
function VE() {
  return !0;
}
function zi(e) {
  const {
    children: t,
    disableAutoFocus: n = !1,
    disableEnforceFocus: r = !1,
    disableRestoreFocus: i = !1,
    getTabbable: s = BE,
    isEnabled: a = VE,
    open: l
  } = e, c = v.useRef(!1), u = v.useRef(null), d = v.useRef(null), f = v.useRef(null), p = v.useRef(null), b = v.useRef(!1), y = v.useRef(null), h = ct(t.ref, y), m = v.useRef(null);
  v.useEffect(() => {
    !l || !y.current || (b.current = !n);
  }, [n, l]), v.useEffect(() => {
    if (!l || !y.current)
      return;
    const E = gt(y.current);
    return y.current.contains(E.activeElement) || (y.current.hasAttribute("tabIndex") || (process.env.NODE_ENV !== "production" && console.error(["MUI: The modal content node does not accept focus.", 'For the benefit of assistive technologies, the tabIndex of the node is being set to "-1".'].join(`
`)), y.current.setAttribute("tabIndex", "-1")), b.current && y.current.focus()), () => {
      i || (f.current && f.current.focus && (c.current = !0, f.current.focus()), f.current = null);
    };
  }, [l]), v.useEffect(() => {
    if (!l || !y.current)
      return;
    const E = gt(y.current), O = (R) => {
      m.current = R, !(r || !a() || R.key !== "Tab") && E.activeElement === y.current && R.shiftKey && (c.current = !0, d.current && d.current.focus());
    }, x = () => {
      const R = y.current;
      if (R === null)
        return;
      if (!E.hasFocus() || !a() || c.current) {
        c.current = !1;
        return;
      }
      if (R.contains(E.activeElement) || r && E.activeElement !== u.current && E.activeElement !== d.current)
        return;
      if (E.activeElement !== p.current)
        p.current = null;
      else if (p.current !== null)
        return;
      if (!b.current)
        return;
      let N = [];
      if ((E.activeElement === u.current || E.activeElement === d.current) && (N = s(y.current)), N.length > 0) {
        var A, L;
        const K = !!((A = m.current) != null && A.shiftKey && ((L = m.current) == null ? void 0 : L.key) === "Tab"), B = N[0], U = N[N.length - 1];
        typeof B != "string" && typeof U != "string" && (K ? U.focus() : B.focus());
      } else
        R.focus();
    };
    E.addEventListener("focusin", x), E.addEventListener("keydown", O, !0);
    const P = setInterval(() => {
      E.activeElement && E.activeElement.tagName === "BODY" && x();
    }, 50);
    return () => {
      clearInterval(P), E.removeEventListener("focusin", x), E.removeEventListener("keydown", O, !0);
    };
  }, [n, r, i, a, l, s]);
  const g = (E) => {
    f.current === null && (f.current = E.relatedTarget), b.current = !0, p.current = E.target;
    const O = t.props.onFocus;
    O && O(E);
  }, C = (E) => {
    f.current === null && (f.current = E.relatedTarget), b.current = !0;
  };
  return /* @__PURE__ */ k.jsxs(v.Fragment, {
    children: [/* @__PURE__ */ k.jsx("div", {
      tabIndex: l ? 0 : -1,
      onFocus: C,
      ref: u,
      "data-testid": "sentinelStart"
    }), /* @__PURE__ */ v.cloneElement(t, {
      ref: h,
      onFocus: g
    }), /* @__PURE__ */ k.jsx("div", {
      tabIndex: l ? 0 : -1,
      onFocus: C,
      ref: d,
      "data-testid": "sentinelEnd"
    })]
  });
}
process.env.NODE_ENV !== "production" && (zi.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A single child content element.
   */
  children: bs,
  /**
   * If `true`, the focus trap will not automatically shift focus to itself when it opens, and
   * replace it to the last focused element when it closes.
   * This also works correctly with any focus trap children that have the `disableAutoFocus` prop.
   *
   * Generally this should never be set to `true` as it makes the focus trap less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableAutoFocus: o.bool,
  /**
   * If `true`, the focus trap will not prevent focus from leaving the focus trap while open.
   *
   * Generally this should never be set to `true` as it makes the focus trap less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableEnforceFocus: o.bool,
  /**
   * If `true`, the focus trap will not restore focus to previously focused element once
   * focus trap is hidden or unmounted.
   * @default false
   */
  disableRestoreFocus: o.bool,
  /**
   * Returns an array of ordered tabbable nodes (i.e. in tab order) within the root.
   * For instance, you can provide the "tabbable" npm dependency.
   * @param {HTMLElement} root
   */
  getTabbable: o.func,
  /**
   * This prop extends the `open` prop.
   * It allows to toggle the open state without having to wait for a rerender when changing the `open` prop.
   * This prop should be memoized.
   * It can be used to support multiple focus trap mounted at the same time.
   * @default function defaultIsEnabled(): boolean {
   *   return true;
   * }
   */
  isEnabled: o.func,
  /**
   * If `true`, focus is locked.
   */
  open: o.bool.isRequired
});
process.env.NODE_ENV !== "production" && (zi.propTypes = Ff(zi.propTypes));
function UE(e) {
  return typeof e == "function" ? e() : e;
}
const $o = /* @__PURE__ */ v.forwardRef(function(t, n) {
  const {
    children: r,
    container: i,
    disablePortal: s = !1
  } = t, [a, l] = v.useState(null), c = ct(/* @__PURE__ */ v.isValidElement(r) ? r.ref : null, n);
  if (rn(() => {
    s || l(UE(i) || document.body);
  }, [i, s]), rn(() => {
    if (a && !s)
      return Po(n, a), () => {
        Po(n, null);
      };
  }, [n, a, s]), s) {
    if (/* @__PURE__ */ v.isValidElement(r)) {
      const u = {
        ref: c
      };
      return /* @__PURE__ */ v.cloneElement(r, u);
    }
    return /* @__PURE__ */ k.jsx(v.Fragment, {
      children: r
    });
  }
  return /* @__PURE__ */ k.jsx(v.Fragment, {
    children: a && /* @__PURE__ */ kh.createPortal(r, a)
  });
});
process.env.NODE_ENV !== "production" && ($o.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The children to render into the `container`.
   */
  children: o.node,
  /**
   * An HTML element or function that returns one.
   * The `container` will have the portal children appended to it.
   *
   * You can also provide a callback, which is called in a React layout effect.
   * This lets you set the container from a ref, and also makes server-side rendering possible.
   *
   * By default, it uses the body of the top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: o.oneOfType([Sn, o.func]),
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: o.bool
});
process.env.NODE_ENV !== "production" && ($o.propTypes = Ff($o.propTypes));
function zE(e) {
  const t = gt(e);
  return t.body === e ? Wn(e).innerWidth > t.documentElement.clientWidth : e.scrollHeight > e.clientHeight;
}
function mo(e, t) {
  t ? e.setAttribute("aria-hidden", "true") : e.removeAttribute("aria-hidden");
}
function wu(e) {
  return parseInt(Wn(e).getComputedStyle(e).paddingRight, 10) || 0;
}
function WE(e) {
  const n = ["TEMPLATE", "SCRIPT", "STYLE", "LINK", "MAP", "META", "NOSCRIPT", "PICTURE", "COL", "COLGROUP", "PARAM", "SLOT", "SOURCE", "TRACK"].indexOf(e.tagName) !== -1, r = e.tagName === "INPUT" && e.getAttribute("type") === "hidden";
  return n || r;
}
function Tu(e, t, n, r, i) {
  const s = [t, n, ...r];
  [].forEach.call(e.children, (a) => {
    const l = s.indexOf(a) === -1, c = !WE(a);
    l && c && mo(a, i);
  });
}
function Js(e, t) {
  let n = -1;
  return e.some((r, i) => t(r) ? (n = i, !0) : !1), n;
}
function qE(e, t) {
  const n = [], r = e.container;
  if (!t.disableScrollLock) {
    if (zE(r)) {
      const a = Uf(gt(r));
      n.push({
        value: r.style.paddingRight,
        property: "padding-right",
        el: r
      }), r.style.paddingRight = `${wu(r) + a}px`;
      const l = gt(r).querySelectorAll(".mui-fixed");
      [].forEach.call(l, (c) => {
        n.push({
          value: c.style.paddingRight,
          property: "padding-right",
          el: c
        }), c.style.paddingRight = `${wu(c) + a}px`;
      });
    }
    let s;
    if (r.parentNode instanceof DocumentFragment)
      s = gt(r).body;
    else {
      const a = r.parentElement, l = Wn(r);
      s = (a == null ? void 0 : a.nodeName) === "HTML" && l.getComputedStyle(a).overflowY === "scroll" ? a : r;
    }
    n.push({
      value: s.style.overflow,
      property: "overflow",
      el: s
    }, {
      value: s.style.overflowX,
      property: "overflow-x",
      el: s
    }, {
      value: s.style.overflowY,
      property: "overflow-y",
      el: s
    }), s.style.overflow = "hidden";
  }
  return () => {
    n.forEach(({
      value: s,
      el: a,
      property: l
    }) => {
      s ? a.style.setProperty(l, s) : a.style.removeProperty(l);
    });
  };
}
function HE(e) {
  const t = [];
  return [].forEach.call(e.children, (n) => {
    n.getAttribute("aria-hidden") === "true" && t.push(n);
  }), t;
}
class KE {
  constructor() {
    this.containers = void 0, this.modals = void 0, this.modals = [], this.containers = [];
  }
  add(t, n) {
    let r = this.modals.indexOf(t);
    if (r !== -1)
      return r;
    r = this.modals.length, this.modals.push(t), t.modalRef && mo(t.modalRef, !1);
    const i = HE(n);
    Tu(n, t.mount, t.modalRef, i, !0);
    const s = Js(this.containers, (a) => a.container === n);
    return s !== -1 ? (this.containers[s].modals.push(t), r) : (this.containers.push({
      modals: [t],
      container: n,
      restore: null,
      hiddenSiblings: i
    }), r);
  }
  mount(t, n) {
    const r = Js(this.containers, (s) => s.modals.indexOf(t) !== -1), i = this.containers[r];
    i.restore || (i.restore = qE(i, n));
  }
  remove(t, n = !0) {
    const r = this.modals.indexOf(t);
    if (r === -1)
      return r;
    const i = Js(this.containers, (a) => a.modals.indexOf(t) !== -1), s = this.containers[i];
    if (s.modals.splice(s.modals.indexOf(t), 1), this.modals.splice(r, 1), s.modals.length === 0)
      s.restore && s.restore(), t.modalRef && mo(t.modalRef, n), Tu(s.container, t.mount, t.modalRef, s.hiddenSiblings, !1), this.containers.splice(i, 1);
    else {
      const a = s.modals[s.modals.length - 1];
      a.modalRef && mo(a.modalRef, !1);
    }
    return r;
  }
  isTopModal(t) {
    return this.modals.length > 0 && this.modals[this.modals.length - 1] === t;
  }
}
function YE(e) {
  return typeof e == "function" ? e() : e;
}
function GE(e) {
  return e ? e.props.hasOwnProperty("in") : !1;
}
const QE = new KE();
function XE(e) {
  const {
    container: t,
    disableEscapeKeyDown: n = !1,
    disableScrollLock: r = !1,
    // @ts-ignore internal logic - Base UI supports the manager as a prop too
    manager: i = QE,
    closeAfterTransition: s = !1,
    onTransitionEnter: a,
    onTransitionExited: l,
    children: c,
    onClose: u,
    open: d,
    rootRef: f
  } = e, p = v.useRef({}), b = v.useRef(null), y = v.useRef(null), h = ct(y, f), [m, g] = v.useState(!d), C = GE(c);
  let E = !0;
  (e["aria-hidden"] === "false" || e["aria-hidden"] === !1) && (E = !1);
  const O = () => gt(b.current), x = () => (p.current.modalRef = y.current, p.current.mount = b.current, p.current), P = () => {
    i.mount(x(), {
      disableScrollLock: r
    }), y.current && (y.current.scrollTop = 0);
  }, R = nn(() => {
    const M = YE(t) || O().body;
    i.add(x(), M), y.current && P();
  }), N = v.useCallback(() => i.isTopModal(x()), [i]), A = nn((M) => {
    b.current = M, M && (d && N() ? P() : y.current && mo(y.current, E));
  }), L = v.useCallback(() => {
    i.remove(x(), E);
  }, [E, i]);
  v.useEffect(() => () => {
    L();
  }, [L]), v.useEffect(() => {
    d ? R() : (!C || !s) && L();
  }, [d, L, C, s, R]);
  const K = (M) => (G) => {
    var W;
    (W = M.onKeyDown) == null || W.call(M, G), !(G.key !== "Escape" || G.which === 229 || // Wait until IME is settled.
    !N()) && (n || (G.stopPropagation(), u && u(G, "escapeKeyDown")));
  }, B = (M) => (G) => {
    var W;
    (W = M.onClick) == null || W.call(M, G), G.target === G.currentTarget && u && u(G, "backdropClick");
  };
  return {
    getRootProps: (M = {}) => {
      const G = ap(e);
      delete G.onTransitionEnter, delete G.onTransitionExited;
      const W = w({}, G, M);
      return w({
        role: "presentation"
      }, W, {
        onKeyDown: K(W),
        ref: h
      });
    },
    getBackdropProps: (M = {}) => {
      const G = M;
      return w({
        "aria-hidden": !0
      }, G, {
        onClick: B(G),
        open: d
      });
    },
    getTransitionProps: () => {
      const M = () => {
        g(!1), a && a();
      }, G = () => {
        g(!0), l && l(), s && L();
      };
      return {
        onEnter: Aa(M, c == null ? void 0 : c.props.onEnter),
        onExited: Aa(G, c == null ? void 0 : c.props.onExited)
      };
    },
    rootRef: h,
    portalRef: A,
    isTopModal: N,
    exited: m,
    hasTransition: C
  };
}
var Rt = "top", Gt = "bottom", Qt = "right", Pt = "left", Rl = "auto", ii = [Rt, Gt, Qt, Pt], Vr = "start", _o = "end", JE = "clippingParents", yp = "viewport", lo = "popper", ZE = "reference", Cu = /* @__PURE__ */ ii.reduce(function(e, t) {
  return e.concat([t + "-" + Vr, t + "-" + _o]);
}, []), bp = /* @__PURE__ */ [].concat(ii, [Rl]).reduce(function(e, t) {
  return e.concat([t, t + "-" + Vr, t + "-" + _o]);
}, []), eO = "beforeRead", tO = "read", nO = "afterRead", rO = "beforeMain", oO = "main", iO = "afterMain", sO = "beforeWrite", aO = "write", lO = "afterWrite", cO = [eO, tO, nO, rO, oO, iO, sO, aO, lO];
function bn(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function Dt(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function cr(e) {
  var t = Dt(e).Element;
  return e instanceof t || e instanceof Element;
}
function Kt(e) {
  var t = Dt(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function Pl(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = Dt(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function uO(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(n) {
    var r = t.styles[n] || {}, i = t.attributes[n] || {}, s = t.elements[n];
    !Kt(s) || !bn(s) || (Object.assign(s.style, r), Object.keys(i).forEach(function(a) {
      var l = i[a];
      l === !1 ? s.removeAttribute(a) : s.setAttribute(a, l === !0 ? "" : l);
    }));
  });
}
function dO(e) {
  var t = e.state, n = {
    popper: {
      position: t.options.strategy,
      left: "0",
      top: "0",
      margin: "0"
    },
    arrow: {
      position: "absolute"
    },
    reference: {}
  };
  return Object.assign(t.elements.popper.style, n.popper), t.styles = n, t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow), function() {
    Object.keys(t.elements).forEach(function(r) {
      var i = t.elements[r], s = t.attributes[r] || {}, a = Object.keys(t.styles.hasOwnProperty(r) ? t.styles[r] : n[r]), l = a.reduce(function(c, u) {
        return c[u] = "", c;
      }, {});
      !Kt(i) || !bn(i) || (Object.assign(i.style, l), Object.keys(s).forEach(function(c) {
        i.removeAttribute(c);
      }));
    });
  };
}
const fO = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: uO,
  effect: dO,
  requires: ["computeStyles"]
};
function mn(e) {
  return e.split("-")[0];
}
var sr = Math.max, Wi = Math.min, Ur = Math.round;
function Ua() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function vp() {
  return !/^((?!chrome|android).)*safari/i.test(Ua());
}
function zr(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  var r = e.getBoundingClientRect(), i = 1, s = 1;
  t && Kt(e) && (i = e.offsetWidth > 0 && Ur(r.width) / e.offsetWidth || 1, s = e.offsetHeight > 0 && Ur(r.height) / e.offsetHeight || 1);
  var a = cr(e) ? Dt(e) : window, l = a.visualViewport, c = !vp() && n, u = (r.left + (c && l ? l.offsetLeft : 0)) / i, d = (r.top + (c && l ? l.offsetTop : 0)) / s, f = r.width / i, p = r.height / s;
  return {
    width: f,
    height: p,
    top: d,
    right: u + f,
    bottom: d + p,
    left: u,
    x: u,
    y: d
  };
}
function $l(e) {
  var t = zr(e), n = e.offsetWidth, r = e.offsetHeight;
  return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - r) <= 1 && (r = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: n,
    height: r
  };
}
function gp(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (n && Pl(n)) {
    var r = t;
    do {
      if (r && e.isSameNode(r))
        return !0;
      r = r.parentNode || r.host;
    } while (r);
  }
  return !1;
}
function Rn(e) {
  return Dt(e).getComputedStyle(e);
}
function pO(e) {
  return ["table", "td", "th"].indexOf(bn(e)) >= 0;
}
function Hn(e) {
  return ((cr(e) ? e.ownerDocument : (
    // $FlowFixMe[prop-missing]
    e.document
  )) || window.document).documentElement;
}
function Ts(e) {
  return bn(e) === "html" ? e : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    e.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    e.parentNode || // DOM Element detected
    (Pl(e) ? e.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    Hn(e)
  );
}
function Su(e) {
  return !Kt(e) || // https://github.com/popperjs/popper-core/issues/837
  Rn(e).position === "fixed" ? null : e.offsetParent;
}
function hO(e) {
  var t = /firefox/i.test(Ua()), n = /Trident/i.test(Ua());
  if (n && Kt(e)) {
    var r = Rn(e);
    if (r.position === "fixed")
      return null;
  }
  var i = Ts(e);
  for (Pl(i) && (i = i.host); Kt(i) && ["html", "body"].indexOf(bn(i)) < 0; ) {
    var s = Rn(i);
    if (s.transform !== "none" || s.perspective !== "none" || s.contain === "paint" || ["transform", "perspective"].indexOf(s.willChange) !== -1 || t && s.willChange === "filter" || t && s.filter && s.filter !== "none")
      return i;
    i = i.parentNode;
  }
  return null;
}
function si(e) {
  for (var t = Dt(e), n = Su(e); n && pO(n) && Rn(n).position === "static"; )
    n = Su(n);
  return n && (bn(n) === "html" || bn(n) === "body" && Rn(n).position === "static") ? t : n || hO(e) || t;
}
function _l(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function yo(e, t, n) {
  return sr(e, Wi(t, n));
}
function mO(e, t, n) {
  var r = yo(e, t, n);
  return r > n ? n : r;
}
function xp() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function Ep(e) {
  return Object.assign({}, xp(), e);
}
function Op(e, t) {
  return t.reduce(function(n, r) {
    return n[r] = e, n;
  }, {});
}
var yO = function(t, n) {
  return t = typeof t == "function" ? t(Object.assign({}, n.rects, {
    placement: n.placement
  })) : t, Ep(typeof t != "number" ? t : Op(t, ii));
};
function bO(e) {
  var t, n = e.state, r = e.name, i = e.options, s = n.elements.arrow, a = n.modifiersData.popperOffsets, l = mn(n.placement), c = _l(l), u = [Pt, Qt].indexOf(l) >= 0, d = u ? "height" : "width";
  if (!(!s || !a)) {
    var f = yO(i.padding, n), p = $l(s), b = c === "y" ? Rt : Pt, y = c === "y" ? Gt : Qt, h = n.rects.reference[d] + n.rects.reference[c] - a[c] - n.rects.popper[d], m = a[c] - n.rects.reference[c], g = si(s), C = g ? c === "y" ? g.clientHeight || 0 : g.clientWidth || 0 : 0, E = h / 2 - m / 2, O = f[b], x = C - p[d] - f[y], P = C / 2 - p[d] / 2 + E, R = yo(O, P, x), N = c;
    n.modifiersData[r] = (t = {}, t[N] = R, t.centerOffset = R - P, t);
  }
}
function vO(e) {
  var t = e.state, n = e.options, r = n.element, i = r === void 0 ? "[data-popper-arrow]" : r;
  i != null && (typeof i == "string" && (i = t.elements.popper.querySelector(i), !i) || gp(t.elements.popper, i) && (t.elements.arrow = i));
}
const gO = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: bO,
  effect: vO,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function Wr(e) {
  return e.split("-")[1];
}
var xO = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function EO(e, t) {
  var n = e.x, r = e.y, i = t.devicePixelRatio || 1;
  return {
    x: Ur(n * i) / i || 0,
    y: Ur(r * i) / i || 0
  };
}
function Ru(e) {
  var t, n = e.popper, r = e.popperRect, i = e.placement, s = e.variation, a = e.offsets, l = e.position, c = e.gpuAcceleration, u = e.adaptive, d = e.roundOffsets, f = e.isFixed, p = a.x, b = p === void 0 ? 0 : p, y = a.y, h = y === void 0 ? 0 : y, m = typeof d == "function" ? d({
    x: b,
    y: h
  }) : {
    x: b,
    y: h
  };
  b = m.x, h = m.y;
  var g = a.hasOwnProperty("x"), C = a.hasOwnProperty("y"), E = Pt, O = Rt, x = window;
  if (u) {
    var P = si(n), R = "clientHeight", N = "clientWidth";
    if (P === Dt(n) && (P = Hn(n), Rn(P).position !== "static" && l === "absolute" && (R = "scrollHeight", N = "scrollWidth")), P = P, i === Rt || (i === Pt || i === Qt) && s === _o) {
      O = Gt;
      var A = f && P === x && x.visualViewport ? x.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        P[R]
      );
      h -= A - r.height, h *= c ? 1 : -1;
    }
    if (i === Pt || (i === Rt || i === Gt) && s === _o) {
      E = Qt;
      var L = f && P === x && x.visualViewport ? x.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        P[N]
      );
      b -= L - r.width, b *= c ? 1 : -1;
    }
  }
  var K = Object.assign({
    position: l
  }, u && xO), B = d === !0 ? EO({
    x: b,
    y: h
  }, Dt(n)) : {
    x: b,
    y: h
  };
  if (b = B.x, h = B.y, c) {
    var U;
    return Object.assign({}, K, (U = {}, U[O] = C ? "0" : "", U[E] = g ? "0" : "", U.transform = (x.devicePixelRatio || 1) <= 1 ? "translate(" + b + "px, " + h + "px)" : "translate3d(" + b + "px, " + h + "px, 0)", U));
  }
  return Object.assign({}, K, (t = {}, t[O] = C ? h + "px" : "", t[E] = g ? b + "px" : "", t.transform = "", t));
}
function OO(e) {
  var t = e.state, n = e.options, r = n.gpuAcceleration, i = r === void 0 ? !0 : r, s = n.adaptive, a = s === void 0 ? !0 : s, l = n.roundOffsets, c = l === void 0 ? !0 : l, u = {
    placement: mn(t.placement),
    variation: Wr(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: i,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, Ru(Object.assign({}, u, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: a,
    roundOffsets: c
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, Ru(Object.assign({}, u, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: c
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
const wO = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: OO,
  data: {}
};
var hi = {
  passive: !0
};
function TO(e) {
  var t = e.state, n = e.instance, r = e.options, i = r.scroll, s = i === void 0 ? !0 : i, a = r.resize, l = a === void 0 ? !0 : a, c = Dt(t.elements.popper), u = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return s && u.forEach(function(d) {
    d.addEventListener("scroll", n.update, hi);
  }), l && c.addEventListener("resize", n.update, hi), function() {
    s && u.forEach(function(d) {
      d.removeEventListener("scroll", n.update, hi);
    }), l && c.removeEventListener("resize", n.update, hi);
  };
}
const CO = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: TO,
  data: {}
};
var SO = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function ki(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return SO[t];
  });
}
var RO = {
  start: "end",
  end: "start"
};
function Pu(e) {
  return e.replace(/start|end/g, function(t) {
    return RO[t];
  });
}
function kl(e) {
  var t = Dt(e), n = t.pageXOffset, r = t.pageYOffset;
  return {
    scrollLeft: n,
    scrollTop: r
  };
}
function Nl(e) {
  return zr(Hn(e)).left + kl(e).scrollLeft;
}
function PO(e, t) {
  var n = Dt(e), r = Hn(e), i = n.visualViewport, s = r.clientWidth, a = r.clientHeight, l = 0, c = 0;
  if (i) {
    s = i.width, a = i.height;
    var u = vp();
    (u || !u && t === "fixed") && (l = i.offsetLeft, c = i.offsetTop);
  }
  return {
    width: s,
    height: a,
    x: l + Nl(e),
    y: c
  };
}
function $O(e) {
  var t, n = Hn(e), r = kl(e), i = (t = e.ownerDocument) == null ? void 0 : t.body, s = sr(n.scrollWidth, n.clientWidth, i ? i.scrollWidth : 0, i ? i.clientWidth : 0), a = sr(n.scrollHeight, n.clientHeight, i ? i.scrollHeight : 0, i ? i.clientHeight : 0), l = -r.scrollLeft + Nl(e), c = -r.scrollTop;
  return Rn(i || n).direction === "rtl" && (l += sr(n.clientWidth, i ? i.clientWidth : 0) - s), {
    width: s,
    height: a,
    x: l,
    y: c
  };
}
function Il(e) {
  var t = Rn(e), n = t.overflow, r = t.overflowX, i = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + i + r);
}
function wp(e) {
  return ["html", "body", "#document"].indexOf(bn(e)) >= 0 ? e.ownerDocument.body : Kt(e) && Il(e) ? e : wp(Ts(e));
}
function bo(e, t) {
  var n;
  t === void 0 && (t = []);
  var r = wp(e), i = r === ((n = e.ownerDocument) == null ? void 0 : n.body), s = Dt(r), a = i ? [s].concat(s.visualViewport || [], Il(r) ? r : []) : r, l = t.concat(a);
  return i ? l : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    l.concat(bo(Ts(a)))
  );
}
function za(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function _O(e, t) {
  var n = zr(e, !1, t === "fixed");
  return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
}
function $u(e, t, n) {
  return t === yp ? za(PO(e, n)) : cr(t) ? _O(t, n) : za($O(Hn(e)));
}
function kO(e) {
  var t = bo(Ts(e)), n = ["absolute", "fixed"].indexOf(Rn(e).position) >= 0, r = n && Kt(e) ? si(e) : e;
  return cr(r) ? t.filter(function(i) {
    return cr(i) && gp(i, r) && bn(i) !== "body";
  }) : [];
}
function NO(e, t, n, r) {
  var i = t === "clippingParents" ? kO(e) : [].concat(t), s = [].concat(i, [n]), a = s[0], l = s.reduce(function(c, u) {
    var d = $u(e, u, r);
    return c.top = sr(d.top, c.top), c.right = Wi(d.right, c.right), c.bottom = Wi(d.bottom, c.bottom), c.left = sr(d.left, c.left), c;
  }, $u(e, a, r));
  return l.width = l.right - l.left, l.height = l.bottom - l.top, l.x = l.left, l.y = l.top, l;
}
function Tp(e) {
  var t = e.reference, n = e.element, r = e.placement, i = r ? mn(r) : null, s = r ? Wr(r) : null, a = t.x + t.width / 2 - n.width / 2, l = t.y + t.height / 2 - n.height / 2, c;
  switch (i) {
    case Rt:
      c = {
        x: a,
        y: t.y - n.height
      };
      break;
    case Gt:
      c = {
        x: a,
        y: t.y + t.height
      };
      break;
    case Qt:
      c = {
        x: t.x + t.width,
        y: l
      };
      break;
    case Pt:
      c = {
        x: t.x - n.width,
        y: l
      };
      break;
    default:
      c = {
        x: t.x,
        y: t.y
      };
  }
  var u = i ? _l(i) : null;
  if (u != null) {
    var d = u === "y" ? "height" : "width";
    switch (s) {
      case Vr:
        c[u] = c[u] - (t[d] / 2 - n[d] / 2);
        break;
      case _o:
        c[u] = c[u] + (t[d] / 2 - n[d] / 2);
        break;
    }
  }
  return c;
}
function ko(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, i = r === void 0 ? e.placement : r, s = n.strategy, a = s === void 0 ? e.strategy : s, l = n.boundary, c = l === void 0 ? JE : l, u = n.rootBoundary, d = u === void 0 ? yp : u, f = n.elementContext, p = f === void 0 ? lo : f, b = n.altBoundary, y = b === void 0 ? !1 : b, h = n.padding, m = h === void 0 ? 0 : h, g = Ep(typeof m != "number" ? m : Op(m, ii)), C = p === lo ? ZE : lo, E = e.rects.popper, O = e.elements[y ? C : p], x = NO(cr(O) ? O : O.contextElement || Hn(e.elements.popper), c, d, a), P = zr(e.elements.reference), R = Tp({
    reference: P,
    element: E,
    strategy: "absolute",
    placement: i
  }), N = za(Object.assign({}, E, R)), A = p === lo ? N : P, L = {
    top: x.top - A.top + g.top,
    bottom: A.bottom - x.bottom + g.bottom,
    left: x.left - A.left + g.left,
    right: A.right - x.right + g.right
  }, K = e.modifiersData.offset;
  if (p === lo && K) {
    var B = K[i];
    Object.keys(L).forEach(function(U) {
      var z = [Qt, Gt].indexOf(U) >= 0 ? 1 : -1, Y = [Rt, Gt].indexOf(U) >= 0 ? "y" : "x";
      L[U] += B[Y] * z;
    });
  }
  return L;
}
function IO(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, i = n.boundary, s = n.rootBoundary, a = n.padding, l = n.flipVariations, c = n.allowedAutoPlacements, u = c === void 0 ? bp : c, d = Wr(r), f = d ? l ? Cu : Cu.filter(function(y) {
    return Wr(y) === d;
  }) : ii, p = f.filter(function(y) {
    return u.indexOf(y) >= 0;
  });
  p.length === 0 && (p = f);
  var b = p.reduce(function(y, h) {
    return y[h] = ko(e, {
      placement: h,
      boundary: i,
      rootBoundary: s,
      padding: a
    })[mn(h)], y;
  }, {});
  return Object.keys(b).sort(function(y, h) {
    return b[y] - b[h];
  });
}
function AO(e) {
  if (mn(e) === Rl)
    return [];
  var t = ki(e);
  return [Pu(e), t, Pu(t)];
}
function jO(e) {
  var t = e.state, n = e.options, r = e.name;
  if (!t.modifiersData[r]._skip) {
    for (var i = n.mainAxis, s = i === void 0 ? !0 : i, a = n.altAxis, l = a === void 0 ? !0 : a, c = n.fallbackPlacements, u = n.padding, d = n.boundary, f = n.rootBoundary, p = n.altBoundary, b = n.flipVariations, y = b === void 0 ? !0 : b, h = n.allowedAutoPlacements, m = t.options.placement, g = mn(m), C = g === m, E = c || (C || !y ? [ki(m)] : AO(m)), O = [m].concat(E).reduce(function(H, Z) {
      return H.concat(mn(Z) === Rl ? IO(t, {
        placement: Z,
        boundary: d,
        rootBoundary: f,
        padding: u,
        flipVariations: y,
        allowedAutoPlacements: h
      }) : Z);
    }, []), x = t.rects.reference, P = t.rects.popper, R = /* @__PURE__ */ new Map(), N = !0, A = O[0], L = 0; L < O.length; L++) {
      var K = O[L], B = mn(K), U = Wr(K) === Vr, z = [Rt, Gt].indexOf(B) >= 0, Y = z ? "width" : "height", M = ko(t, {
        placement: K,
        boundary: d,
        rootBoundary: f,
        altBoundary: p,
        padding: u
      }), G = z ? U ? Qt : Pt : U ? Gt : Rt;
      x[Y] > P[Y] && (G = ki(G));
      var W = ki(G), le = [];
      if (s && le.push(M[B] <= 0), l && le.push(M[G] <= 0, M[W] <= 0), le.every(function(H) {
        return H;
      })) {
        A = K, N = !1;
        break;
      }
      R.set(K, le);
    }
    if (N)
      for (var I = y ? 3 : 1, X = function(Z) {
        var te = O.find(function(ue) {
          var J = R.get(ue);
          if (J)
            return J.slice(0, Z).every(function(ie) {
              return ie;
            });
        });
        if (te)
          return A = te, "break";
      }, se = I; se > 0; se--) {
        var oe = X(se);
        if (oe === "break")
          break;
      }
    t.placement !== A && (t.modifiersData[r]._skip = !0, t.placement = A, t.reset = !0);
  }
}
const MO = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: jO,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function _u(e, t, n) {
  return n === void 0 && (n = {
    x: 0,
    y: 0
  }), {
    top: e.top - t.height - n.y,
    right: e.right - t.width + n.x,
    bottom: e.bottom - t.height + n.y,
    left: e.left - t.width - n.x
  };
}
function ku(e) {
  return [Rt, Qt, Gt, Pt].some(function(t) {
    return e[t] >= 0;
  });
}
function DO(e) {
  var t = e.state, n = e.name, r = t.rects.reference, i = t.rects.popper, s = t.modifiersData.preventOverflow, a = ko(t, {
    elementContext: "reference"
  }), l = ko(t, {
    altBoundary: !0
  }), c = _u(a, r), u = _u(l, i, s), d = ku(c), f = ku(u);
  t.modifiersData[n] = {
    referenceClippingOffsets: c,
    popperEscapeOffsets: u,
    isReferenceHidden: d,
    hasPopperEscaped: f
  }, t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-reference-hidden": d,
    "data-popper-escaped": f
  });
}
const FO = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: DO
};
function LO(e, t, n) {
  var r = mn(e), i = [Pt, Rt].indexOf(r) >= 0 ? -1 : 1, s = typeof n == "function" ? n(Object.assign({}, t, {
    placement: e
  })) : n, a = s[0], l = s[1];
  return a = a || 0, l = (l || 0) * i, [Pt, Qt].indexOf(r) >= 0 ? {
    x: l,
    y: a
  } : {
    x: a,
    y: l
  };
}
function BO(e) {
  var t = e.state, n = e.options, r = e.name, i = n.offset, s = i === void 0 ? [0, 0] : i, a = bp.reduce(function(d, f) {
    return d[f] = LO(f, t.rects, s), d;
  }, {}), l = a[t.placement], c = l.x, u = l.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += c, t.modifiersData.popperOffsets.y += u), t.modifiersData[r] = a;
}
const VO = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: BO
};
function UO(e) {
  var t = e.state, n = e.name;
  t.modifiersData[n] = Tp({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: "absolute",
    placement: t.placement
  });
}
const zO = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: UO,
  data: {}
};
function WO(e) {
  return e === "x" ? "y" : "x";
}
function qO(e) {
  var t = e.state, n = e.options, r = e.name, i = n.mainAxis, s = i === void 0 ? !0 : i, a = n.altAxis, l = a === void 0 ? !1 : a, c = n.boundary, u = n.rootBoundary, d = n.altBoundary, f = n.padding, p = n.tether, b = p === void 0 ? !0 : p, y = n.tetherOffset, h = y === void 0 ? 0 : y, m = ko(t, {
    boundary: c,
    rootBoundary: u,
    padding: f,
    altBoundary: d
  }), g = mn(t.placement), C = Wr(t.placement), E = !C, O = _l(g), x = WO(O), P = t.modifiersData.popperOffsets, R = t.rects.reference, N = t.rects.popper, A = typeof h == "function" ? h(Object.assign({}, t.rects, {
    placement: t.placement
  })) : h, L = typeof A == "number" ? {
    mainAxis: A,
    altAxis: A
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, A), K = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, B = {
    x: 0,
    y: 0
  };
  if (P) {
    if (s) {
      var U, z = O === "y" ? Rt : Pt, Y = O === "y" ? Gt : Qt, M = O === "y" ? "height" : "width", G = P[O], W = G + m[z], le = G - m[Y], I = b ? -N[M] / 2 : 0, X = C === Vr ? R[M] : N[M], se = C === Vr ? -N[M] : -R[M], oe = t.elements.arrow, H = b && oe ? $l(oe) : {
        width: 0,
        height: 0
      }, Z = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : xp(), te = Z[z], ue = Z[Y], J = yo(0, R[M], H[M]), ie = E ? R[M] / 2 - I - J - te - L.mainAxis : X - J - te - L.mainAxis, he = E ? -R[M] / 2 + I + J + ue + L.mainAxis : se + J + ue + L.mainAxis, me = t.elements.arrow && si(t.elements.arrow), D = me ? O === "y" ? me.clientTop || 0 : me.clientLeft || 0 : 0, ye = (U = K == null ? void 0 : K[O]) != null ? U : 0, Q = G + ie - ye - D, be = G + he - ye, ne = yo(b ? Wi(W, Q) : W, G, b ? sr(le, be) : le);
      P[O] = ne, B[O] = ne - G;
    }
    if (l) {
      var Xe, Te = O === "x" ? Rt : Pt, We = O === "x" ? Gt : Qt, Ve = P[x], Pe = x === "y" ? "height" : "width", He = Ve + m[Te], qe = Ve - m[We], $e = [Rt, Pt].indexOf(g) !== -1, Ze = (Xe = K == null ? void 0 : K[x]) != null ? Xe : 0, ut = $e ? He : Ve - R[Pe] - N[Pe] - Ze + L.altAxis, et = $e ? Ve + R[Pe] + N[Pe] - Ze - L.altAxis : qe, we = b && $e ? mO(ut, Ve, et) : yo(b ? ut : He, Ve, b ? et : qe);
      P[x] = we, B[x] = we - Ve;
    }
    t.modifiersData[r] = B;
  }
}
const HO = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: qO,
  requiresIfExists: ["offset"]
};
function KO(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function YO(e) {
  return e === Dt(e) || !Kt(e) ? kl(e) : KO(e);
}
function GO(e) {
  var t = e.getBoundingClientRect(), n = Ur(t.width) / e.offsetWidth || 1, r = Ur(t.height) / e.offsetHeight || 1;
  return n !== 1 || r !== 1;
}
function QO(e, t, n) {
  n === void 0 && (n = !1);
  var r = Kt(t), i = Kt(t) && GO(t), s = Hn(t), a = zr(e, i, n), l = {
    scrollLeft: 0,
    scrollTop: 0
  }, c = {
    x: 0,
    y: 0
  };
  return (r || !r && !n) && ((bn(t) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  Il(s)) && (l = YO(t)), Kt(t) ? (c = zr(t, !0), c.x += t.clientLeft, c.y += t.clientTop) : s && (c.x = Nl(s))), {
    x: a.left + l.scrollLeft - c.x,
    y: a.top + l.scrollTop - c.y,
    width: a.width,
    height: a.height
  };
}
function XO(e) {
  var t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Set(), r = [];
  e.forEach(function(s) {
    t.set(s.name, s);
  });
  function i(s) {
    n.add(s.name);
    var a = [].concat(s.requires || [], s.requiresIfExists || []);
    a.forEach(function(l) {
      if (!n.has(l)) {
        var c = t.get(l);
        c && i(c);
      }
    }), r.push(s);
  }
  return e.forEach(function(s) {
    n.has(s.name) || i(s);
  }), r;
}
function JO(e) {
  var t = XO(e);
  return cO.reduce(function(n, r) {
    return n.concat(t.filter(function(i) {
      return i.phase === r;
    }));
  }, []);
}
function ZO(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(n) {
      Promise.resolve().then(function() {
        t = void 0, n(e());
      });
    })), t;
  };
}
function ew(e) {
  var t = e.reduce(function(n, r) {
    var i = n[r.name];
    return n[r.name] = i ? Object.assign({}, i, r, {
      options: Object.assign({}, i.options, r.options),
      data: Object.assign({}, i.data, r.data)
    }) : r, n;
  }, {});
  return Object.keys(t).map(function(n) {
    return t[n];
  });
}
var Nu = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function Iu() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return !t.some(function(r) {
    return !(r && typeof r.getBoundingClientRect == "function");
  });
}
function tw(e) {
  e === void 0 && (e = {});
  var t = e, n = t.defaultModifiers, r = n === void 0 ? [] : n, i = t.defaultOptions, s = i === void 0 ? Nu : i;
  return function(l, c, u) {
    u === void 0 && (u = s);
    var d = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, Nu, s),
      modifiersData: {},
      elements: {
        reference: l,
        popper: c
      },
      attributes: {},
      styles: {}
    }, f = [], p = !1, b = {
      state: d,
      setOptions: function(g) {
        var C = typeof g == "function" ? g(d.options) : g;
        h(), d.options = Object.assign({}, s, d.options, C), d.scrollParents = {
          reference: cr(l) ? bo(l) : l.contextElement ? bo(l.contextElement) : [],
          popper: bo(c)
        };
        var E = JO(ew([].concat(r, d.options.modifiers)));
        return d.orderedModifiers = E.filter(function(O) {
          return O.enabled;
        }), y(), b.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!p) {
          var g = d.elements, C = g.reference, E = g.popper;
          if (Iu(C, E)) {
            d.rects = {
              reference: QO(C, si(E), d.options.strategy === "fixed"),
              popper: $l(E)
            }, d.reset = !1, d.placement = d.options.placement, d.orderedModifiers.forEach(function(L) {
              return d.modifiersData[L.name] = Object.assign({}, L.data);
            });
            for (var O = 0; O < d.orderedModifiers.length; O++) {
              if (d.reset === !0) {
                d.reset = !1, O = -1;
                continue;
              }
              var x = d.orderedModifiers[O], P = x.fn, R = x.options, N = R === void 0 ? {} : R, A = x.name;
              typeof P == "function" && (d = P({
                state: d,
                options: N,
                name: A,
                instance: b
              }) || d);
            }
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: ZO(function() {
        return new Promise(function(m) {
          b.forceUpdate(), m(d);
        });
      }),
      destroy: function() {
        h(), p = !0;
      }
    };
    if (!Iu(l, c))
      return b;
    b.setOptions(u).then(function(m) {
      !p && u.onFirstUpdate && u.onFirstUpdate(m);
    });
    function y() {
      d.orderedModifiers.forEach(function(m) {
        var g = m.name, C = m.options, E = C === void 0 ? {} : C, O = m.effect;
        if (typeof O == "function") {
          var x = O({
            state: d,
            name: g,
            instance: b,
            options: E
          }), P = function() {
          };
          f.push(x || P);
        }
      });
    }
    function h() {
      f.forEach(function(m) {
        return m();
      }), f = [];
    }
    return b;
  };
}
var nw = [CO, zO, wO, fO, VO, MO, HO, gO, FO], rw = /* @__PURE__ */ tw({
  defaultModifiers: nw
});
const Cp = "Popper";
function ow(e) {
  return mp(Cp, e);
}
jE(Cp, ["root"]);
const iw = ["anchorEl", "children", "direction", "disablePortal", "modifiers", "open", "placement", "popperOptions", "popperRef", "slotProps", "slots", "TransitionProps", "ownerState"], sw = ["anchorEl", "children", "container", "direction", "disablePortal", "keepMounted", "modifiers", "open", "placement", "popperOptions", "popperRef", "style", "transition", "slotProps", "slots"];
function aw(e, t) {
  if (t === "ltr")
    return e;
  switch (e) {
    case "bottom-end":
      return "bottom-start";
    case "bottom-start":
      return "bottom-end";
    case "top-end":
      return "top-start";
    case "top-start":
      return "top-end";
    default:
      return e;
  }
}
function qi(e) {
  return typeof e == "function" ? e() : e;
}
function Cs(e) {
  return e.nodeType !== void 0;
}
function lw(e) {
  return !Cs(e);
}
const cw = () => Ue({
  root: ["root"]
}, oE(ow)), uw = {}, dw = /* @__PURE__ */ v.forwardRef(function(t, n) {
  var r;
  const {
    anchorEl: i,
    children: s,
    direction: a,
    disablePortal: l,
    modifiers: c,
    open: u,
    placement: d,
    popperOptions: f,
    popperRef: p,
    slotProps: b = {},
    slots: y = {},
    TransitionProps: h
    // @ts-ignore internal logic
    // prevent from spreading to DOM, it can come from the parent component e.g. Select.
  } = t, m = xe(t, iw), g = v.useRef(null), C = ct(g, n), E = v.useRef(null), O = ct(E, p), x = v.useRef(O);
  rn(() => {
    x.current = O;
  }, [O]), v.useImperativeHandle(p, () => E.current, []);
  const P = aw(d, a), [R, N] = v.useState(P), [A, L] = v.useState(qi(i));
  v.useEffect(() => {
    E.current && E.current.forceUpdate();
  }), v.useEffect(() => {
    i && L(qi(i));
  }, [i]), rn(() => {
    if (!A || !u)
      return;
    const Y = (W) => {
      N(W.placement);
    };
    if (process.env.NODE_ENV !== "production" && A && Cs(A) && A.nodeType === 1) {
      const W = A.getBoundingClientRect();
      process.env.NODE_ENV !== "test" && W.top === 0 && W.left === 0 && W.right === 0 && W.bottom === 0 && console.warn(["MUI: The `anchorEl` prop provided to the component is invalid.", "The anchor element should be part of the document layout.", "Make sure the element is present in the document or that it's not display none."].join(`
`));
    }
    let M = [{
      name: "preventOverflow",
      options: {
        altBoundary: l
      }
    }, {
      name: "flip",
      options: {
        altBoundary: l
      }
    }, {
      name: "onUpdate",
      enabled: !0,
      phase: "afterWrite",
      fn: ({
        state: W
      }) => {
        Y(W);
      }
    }];
    c != null && (M = M.concat(c)), f && f.modifiers != null && (M = M.concat(f.modifiers));
    const G = rw(A, g.current, w({
      placement: P
    }, f, {
      modifiers: M
    }));
    return x.current(G), () => {
      G.destroy(), x.current(null);
    };
  }, [A, l, c, u, f, P]);
  const K = {
    placement: R
  };
  h !== null && (K.TransitionProps = h);
  const B = cw(), U = (r = y.root) != null ? r : "div", z = lr({
    elementType: U,
    externalSlotProps: b.root,
    externalForwardedProps: m,
    additionalProps: {
      role: "tooltip",
      ref: C
    },
    ownerState: t,
    className: B.root
  });
  return /* @__PURE__ */ k.jsx(U, w({}, z, {
    children: typeof s == "function" ? s(K) : s
  }));
}), Sp = /* @__PURE__ */ v.forwardRef(function(t, n) {
  const {
    anchorEl: r,
    children: i,
    container: s,
    direction: a = "ltr",
    disablePortal: l = !1,
    keepMounted: c = !1,
    modifiers: u,
    open: d,
    placement: f = "bottom",
    popperOptions: p = uw,
    popperRef: b,
    style: y,
    transition: h = !1,
    slotProps: m = {},
    slots: g = {}
  } = t, C = xe(t, sw), [E, O] = v.useState(!0), x = () => {
    O(!1);
  }, P = () => {
    O(!0);
  };
  if (!c && !d && (!h || E))
    return null;
  let R;
  if (s)
    R = s;
  else if (r) {
    const L = qi(r);
    R = L && Cs(L) ? gt(L).body : gt(null).body;
  }
  const N = !d && c && (!h || E) ? "none" : void 0, A = h ? {
    in: d,
    onEnter: x,
    onExited: P
  } : void 0;
  return /* @__PURE__ */ k.jsx($o, {
    disablePortal: l,
    container: R,
    children: /* @__PURE__ */ k.jsx(dw, w({
      anchorEl: r,
      direction: a,
      disablePortal: l,
      modifiers: u,
      ref: n,
      open: h ? !E : d,
      placement: f,
      popperOptions: p,
      popperRef: b,
      slotProps: m,
      slots: g
    }, C, {
      style: w({
        // Prevents scroll issue, waiting for Popper.js to add this style once initiated.
        position: "fixed",
        // Fix Popper.js display issue
        top: 0,
        left: 0,
        display: N
      }, y),
      TransitionProps: A,
      children: i
    }))
  });
});
process.env.NODE_ENV !== "production" && (Sp.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * An HTML element, [virtualElement](https://popper.js.org/docs/v2/virtual-elements/),
   * or a function that returns either.
   * It's used to set the position of the popper.
   * The return value will passed as the reference object of the Popper instance.
   */
  anchorEl: yn(o.oneOfType([Sn, o.object, o.func]), (e) => {
    if (e.open) {
      const t = qi(e.anchorEl);
      if (t && Cs(t) && t.nodeType === 1) {
        const n = t.getBoundingClientRect();
        if (process.env.NODE_ENV !== "test" && n.top === 0 && n.left === 0 && n.right === 0 && n.bottom === 0)
          return new Error(["MUI: The `anchorEl` prop provided to the component is invalid.", "The anchor element should be part of the document layout.", "Make sure the element is present in the document or that it's not display none."].join(`
`));
      } else if (!t || typeof t.getBoundingClientRect != "function" || lw(t) && t.contextElement != null && t.contextElement.nodeType !== 1)
        return new Error(["MUI: The `anchorEl` prop provided to the component is invalid.", "It should be an HTML element instance or a virtualElement ", "(https://popper.js.org/docs/v2/virtual-elements/)."].join(`
`));
    }
    return null;
  }),
  /**
   * Popper render function or node.
   */
  children: o.oneOfType([o.node, o.func]),
  /**
   * An HTML element or function that returns one.
   * The `container` will have the portal children appended to it.
   *
   * You can also provide a callback, which is called in a React layout effect.
   * This lets you set the container from a ref, and also makes server-side rendering possible.
   *
   * By default, it uses the body of the top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: o.oneOfType([Sn, o.func]),
  /**
   * Direction of the text.
   * @default 'ltr'
   */
  direction: o.oneOf(["ltr", "rtl"]),
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: o.bool,
  /**
   * Always keep the children in the DOM.
   * This prop can be useful in SEO situation or
   * when you want to maximize the responsiveness of the Popper.
   * @default false
   */
  keepMounted: o.bool,
  /**
   * Popper.js is based on a "plugin-like" architecture,
   * most of its features are fully encapsulated "modifiers".
   *
   * A modifier is a function that is called each time Popper.js needs to
   * compute the position of the popper.
   * For this reason, modifiers should be very performant to avoid bottlenecks.
   * To learn how to create a modifier, [read the modifiers documentation](https://popper.js.org/docs/v2/modifiers/).
   */
  modifiers: o.arrayOf(o.shape({
    data: o.object,
    effect: o.func,
    enabled: o.bool,
    fn: o.func,
    name: o.any,
    options: o.object,
    phase: o.oneOf(["afterMain", "afterRead", "afterWrite", "beforeMain", "beforeRead", "beforeWrite", "main", "read", "write"]),
    requires: o.arrayOf(o.string),
    requiresIfExists: o.arrayOf(o.string)
  })),
  /**
   * If `true`, the component is shown.
   */
  open: o.bool.isRequired,
  /**
   * Popper placement.
   * @default 'bottom'
   */
  placement: o.oneOf(["auto-end", "auto-start", "auto", "bottom-end", "bottom-start", "bottom", "left-end", "left-start", "left", "right-end", "right-start", "right", "top-end", "top-start", "top"]),
  /**
   * Options provided to the [`Popper.js`](https://popper.js.org/docs/v2/constructors/#options) instance.
   * @default {}
   */
  popperOptions: o.shape({
    modifiers: o.array,
    onFirstUpdate: o.func,
    placement: o.oneOf(["auto-end", "auto-start", "auto", "bottom-end", "bottom-start", "bottom", "left-end", "left-start", "left", "right-end", "right-start", "right", "top-end", "top-start", "top"]),
    strategy: o.oneOf(["absolute", "fixed"])
  }),
  /**
   * A ref that points to the used popper instance.
   */
  popperRef: on,
  /**
   * The props used for each slot inside the Popper.
   * @default {}
   */
  slotProps: o.shape({
    root: o.oneOfType([o.func, o.object])
  }),
  /**
   * The components used for each slot inside the Popper.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slots: o.shape({
    root: o.elementType
  }),
  /**
   * Help supporting a react-transition-group/Transition component.
   * @default false
   */
  transition: o.bool
});
const fw = ["onChange", "maxRows", "minRows", "style", "value"];
function mi(e) {
  return parseInt(e, 10) || 0;
}
const pw = {
  shadow: {
    // Visibility needed to hide the extra text area on iPads
    visibility: "hidden",
    // Remove from the content flow
    position: "absolute",
    // Ignore the scrollbar width
    overflow: "hidden",
    height: 0,
    top: 0,
    left: 0,
    // Create a new layer, increase the isolation of the computed values
    transform: "translateZ(0)"
  }
};
function hw(e) {
  return e == null || Object.keys(e).length === 0 || e.outerHeightStyle === 0 && !e.overflowing;
}
const Rp = /* @__PURE__ */ v.forwardRef(function(t, n) {
  const {
    onChange: r,
    maxRows: i,
    minRows: s = 1,
    style: a,
    value: l
  } = t, c = xe(t, fw), {
    current: u
  } = v.useRef(l != null), d = v.useRef(null), f = ct(n, d), p = v.useRef(null), b = v.useCallback(() => {
    const m = d.current, C = Wn(m).getComputedStyle(m);
    if (C.width === "0px")
      return {
        outerHeightStyle: 0,
        overflowing: !1
      };
    const E = p.current;
    E.style.width = C.width, E.value = m.value || t.placeholder || "x", E.value.slice(-1) === `
` && (E.value += " ");
    const O = C.boxSizing, x = mi(C.paddingBottom) + mi(C.paddingTop), P = mi(C.borderBottomWidth) + mi(C.borderTopWidth), R = E.scrollHeight;
    E.value = "x";
    const N = E.scrollHeight;
    let A = R;
    s && (A = Math.max(Number(s) * N, A)), i && (A = Math.min(Number(i) * N, A)), A = Math.max(A, N);
    const L = A + (O === "border-box" ? x + P : 0), K = Math.abs(A - R) <= 1;
    return {
      outerHeightStyle: L,
      overflowing: K
    };
  }, [i, s, t.placeholder]), y = v.useCallback(() => {
    const m = b();
    if (hw(m))
      return;
    const g = d.current;
    g.style.height = `${m.outerHeightStyle}px`, g.style.overflow = m.overflowing ? "hidden" : "";
  }, [b]);
  rn(() => {
    const m = () => {
      y();
    };
    let g;
    const C = () => {
      cancelAnimationFrame(g), g = requestAnimationFrame(() => {
        m();
      });
    }, E = gl(m), O = d.current, x = Wn(O);
    x.addEventListener("resize", E);
    let P;
    return typeof ResizeObserver < "u" && (P = new ResizeObserver(process.env.NODE_ENV === "test" ? C : m), P.observe(O)), () => {
      E.clear(), cancelAnimationFrame(g), x.removeEventListener("resize", E), P && P.disconnect();
    };
  }, [b, y]), rn(() => {
    y();
  });
  const h = (m) => {
    u || y(), r && r(m);
  };
  return /* @__PURE__ */ k.jsxs(v.Fragment, {
    children: [/* @__PURE__ */ k.jsx("textarea", w({
      value: l,
      onChange: h,
      ref: f,
      rows: s,
      style: a
    }, c)), /* @__PURE__ */ k.jsx("textarea", {
      "aria-hidden": !0,
      className: t.className,
      readOnly: !0,
      ref: p,
      tabIndex: -1,
      style: w({}, pw.shadow, a, {
        paddingTop: 0,
        paddingBottom: 0
      })
    })]
  });
});
process.env.NODE_ENV !== "production" && (Rp.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * @ignore
   */
  className: o.string,
  /**
   * Maximum number of rows to display.
   */
  maxRows: o.oneOfType([o.number, o.string]),
  /**
   * Minimum number of rows to display.
   * @default 1
   */
  minRows: o.oneOfType([o.number, o.string]),
  /**
   * @ignore
   */
  onChange: o.func,
  /**
   * @ignore
   */
  placeholder: o.string,
  /**
   * @ignore
   */
  style: o.object,
  /**
   * @ignore
   */
  value: o.oneOfType([o.arrayOf(o.string), o.number, o.string])
});
function Au(e) {
  return typeof e.normalize < "u" ? e.normalize("NFD").replace(/[\u0300-\u036f]/g, "") : e;
}
function mw(e = {}) {
  const {
    ignoreAccents: t = !0,
    ignoreCase: n = !0,
    limit: r,
    matchFrom: i = "any",
    stringify: s,
    trim: a = !1
  } = e;
  return (l, {
    inputValue: c,
    getOptionLabel: u
  }) => {
    let d = a ? c.trim() : c;
    n && (d = d.toLowerCase()), t && (d = Au(d));
    const f = d ? l.filter((p) => {
      let b = (s || u)(p);
      return n && (b = b.toLowerCase()), t && (b = Au(b)), i === "start" ? b.indexOf(d) === 0 : b.indexOf(d) > -1;
    }) : l;
    return typeof r == "number" ? f.slice(0, r) : f;
  };
}
function yi(e, t) {
  for (let n = 0; n < e.length; n += 1)
    if (t(e[n]))
      return n;
  return -1;
}
const yw = mw(), ju = 5, bw = (e) => {
  var t;
  return e.current !== null && ((t = e.current.parentElement) == null ? void 0 : t.contains(document.activeElement));
};
function vw(e) {
  const {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    unstable_isActiveElementInListbox: t = bw,
    // eslint-disable-next-line @typescript-eslint/naming-convention
    unstable_classNamePrefix: n = "Mui",
    autoComplete: r = !1,
    autoHighlight: i = !1,
    autoSelect: s = !1,
    blurOnSelect: a = !1,
    clearOnBlur: l = !e.freeSolo,
    clearOnEscape: c = !1,
    componentName: u = "useAutocomplete",
    defaultValue: d = e.multiple ? [] : null,
    disableClearable: f = !1,
    disableCloseOnSelect: p = !1,
    disabled: b,
    disabledItemsFocusable: y = !1,
    disableListWrap: h = !1,
    filterOptions: m = yw,
    filterSelectedOptions: g = !1,
    freeSolo: C = !1,
    getOptionDisabled: E,
    getOptionKey: O,
    getOptionLabel: x = (_) => {
      var $;
      return ($ = _.label) != null ? $ : _;
    },
    groupBy: P,
    handleHomeEndKeys: R = !e.freeSolo,
    id: N,
    includeInputInList: A = !1,
    inputValue: L,
    isOptionEqualToValue: K = (_, $) => _ === $,
    multiple: B = !1,
    onChange: U,
    onClose: z,
    onHighlightChange: Y,
    onInputChange: M,
    onOpen: G,
    open: W,
    openOnFocus: le = !1,
    options: I,
    readOnly: X = !1,
    selectOnFocus: se = !e.freeSolo,
    value: oe
  } = e, H = ti(N);
  let Z = x;
  Z = (_) => {
    const $ = x(_);
    if (typeof $ != "string") {
      if (process.env.NODE_ENV !== "production") {
        const V = $ === void 0 ? "undefined" : `${typeof $} (${$})`;
        console.error(`MUI: The \`getOptionLabel\` method of ${u} returned ${V} instead of a string for ${JSON.stringify(_)}.`);
      }
      return String($);
    }
    return $;
  };
  const te = v.useRef(!1), ue = v.useRef(!0), J = v.useRef(null), ie = v.useRef(null), [he, me] = v.useState(null), [D, ye] = v.useState(-1), Q = i ? 0 : -1, be = v.useRef(Q), [ne, Xe] = Or({
    controlled: oe,
    default: d,
    name: u
  }), [Te, We] = Or({
    controlled: L,
    default: "",
    name: u,
    state: "inputValue"
  }), [Ve, Pe] = v.useState(!1), He = v.useCallback((_, $) => {
    if (!(B ? ne.length < $.length : $ !== null) && !l)
      return;
    let j;
    if (B)
      j = "";
    else if ($ == null)
      j = "";
    else {
      const pe = Z($);
      j = typeof pe == "string" ? pe : "";
    }
    Te !== j && (We(j), M && M(_, j, "reset"));
  }, [Z, Te, B, M, We, l, ne]), [qe, $e] = Or({
    controlled: W,
    default: !1,
    name: u,
    state: "open"
  }), [Ze, ut] = v.useState(!0), et = !B && ne != null && Te === Z(ne), we = qe && !X, re = we ? m(
    I.filter((_) => !(g && (B ? ne : [ne]).some(($) => $ !== null && K(_, $)))),
    // we use the empty string to manipulate `filterOptions` to not filter any options
    // i.e. the filter predicate always returns true
    {
      inputValue: et && Ze ? "" : Te,
      getOptionLabel: Z
    }
  ) : [], Qe = O0({
    filteredOptions: re,
    value: ne,
    inputValue: Te
  });
  v.useEffect(() => {
    const _ = ne !== Qe.value;
    Ve && !_ || C && !_ || He(null, ne);
  }, [ne, He, Ve, Qe.value, C]);
  const xt = qe && re.length > 0 && !X;
  if (process.env.NODE_ENV !== "production" && ne !== null && !C && I.length > 0) {
    const _ = (B ? ne : [ne]).filter(($) => !I.some((V) => K(V, $)));
    _.length > 0 && console.warn([`MUI: The value provided to ${u} is invalid.`, `None of the options match with \`${_.length > 1 ? JSON.stringify(_) : JSON.stringify(_[0])}\`.`, "You can use the `isOptionEqualToValue` prop to customize the equality test."].join(`
`));
  }
  const Et = nn((_) => {
    _ === -1 ? J.current.focus() : he.querySelector(`[data-tag-index="${_}"]`).focus();
  });
  v.useEffect(() => {
    B && D > ne.length - 1 && (ye(-1), Et(-1));
  }, [ne, B, D, Et]);
  function Ft(_, $) {
    if (!ie.current || _ < 0 || _ >= re.length)
      return -1;
    let V = _;
    for (; ; ) {
      const j = ie.current.querySelector(`[data-option-index="${V}"]`), pe = y ? !1 : !j || j.disabled || j.getAttribute("aria-disabled") === "true";
      if (j && j.hasAttribute("tabindex") && !pe)
        return V;
      if ($ === "next" ? V = (V + 1) % re.length : V = (V - 1 + re.length) % re.length, V === _)
        return -1;
    }
  }
  const fe = nn(({
    event: _,
    index: $,
    reason: V = "auto"
  }) => {
    if (be.current = $, $ === -1 ? J.current.removeAttribute("aria-activedescendant") : J.current.setAttribute("aria-activedescendant", `${H}-option-${$}`), Y && Y(_, $ === -1 ? null : re[$], V), !ie.current)
      return;
    const j = ie.current.querySelector(`[role="option"].${n}-focused`);
    j && (j.classList.remove(`${n}-focused`), j.classList.remove(`${n}-focusVisible`));
    let pe = ie.current;
    if (ie.current.getAttribute("role") !== "listbox" && (pe = ie.current.parentElement.querySelector('[role="listbox"]')), !pe)
      return;
    if ($ === -1) {
      pe.scrollTop = 0;
      return;
    }
    const ge = ie.current.querySelector(`[data-option-index="${$}"]`);
    if (ge && (ge.classList.add(`${n}-focused`), V === "keyboard" && ge.classList.add(`${n}-focusVisible`), pe.scrollHeight > pe.clientHeight && V !== "mouse" && V !== "touch")) {
      const Se = ge, Ye = pe.clientHeight + pe.scrollTop, Zt = Se.offsetTop + Se.offsetHeight;
      Zt > Ye ? pe.scrollTop = Zt - pe.clientHeight : Se.offsetTop - Se.offsetHeight * (P ? 1.3 : 0) < pe.scrollTop && (pe.scrollTop = Se.offsetTop - Se.offsetHeight * (P ? 1.3 : 0));
    }
  }), Ce = nn(({
    event: _,
    diff: $,
    direction: V = "next",
    reason: j = "auto"
  }) => {
    if (!we)
      return;
    const ge = Ft((() => {
      const Se = re.length - 1;
      if ($ === "reset")
        return Q;
      if ($ === "start")
        return 0;
      if ($ === "end")
        return Se;
      const Ye = be.current + $;
      return Ye < 0 ? Ye === -1 && A ? -1 : h && be.current !== -1 || Math.abs($) > 1 ? 0 : Se : Ye > Se ? Ye === Se + 1 && A ? -1 : h || Math.abs($) > 1 ? Se : 0 : Ye;
    })(), V);
    if (fe({
      index: ge,
      reason: j,
      event: _
    }), r && $ !== "reset")
      if (ge === -1)
        J.current.value = Te;
      else {
        const Se = Z(re[ge]);
        J.current.value = Se, Se.toLowerCase().indexOf(Te.toLowerCase()) === 0 && Te.length > 0 && J.current.setSelectionRange(Te.length, Se.length);
      }
  }), Ke = () => {
    const _ = ($, V) => {
      const j = $ ? Z($) : "", pe = V ? Z(V) : "";
      return j === pe;
    };
    if (be.current !== -1 && Qe.filteredOptions && Qe.filteredOptions.length !== re.length && Qe.inputValue === Te && (B ? ne.length === Qe.value.length && Qe.value.every(($, V) => Z(ne[V]) === Z($)) : _(Qe.value, ne))) {
      const $ = Qe.filteredOptions[be.current];
      if ($)
        return yi(re, (V) => Z(V) === Z($));
    }
    return -1;
  }, Tt = v.useCallback(() => {
    if (!we)
      return;
    const _ = Ke();
    if (_ !== -1) {
      be.current = _;
      return;
    }
    const $ = B ? ne[0] : ne;
    if (re.length === 0 || $ == null) {
      Ce({
        diff: "reset"
      });
      return;
    }
    if (ie.current) {
      if ($ != null) {
        const V = re[be.current];
        if (B && V && yi(ne, (pe) => K(V, pe)) !== -1)
          return;
        const j = yi(re, (pe) => K(pe, $));
        j === -1 ? Ce({
          diff: "reset"
        }) : fe({
          index: j
        });
        return;
      }
      if (be.current >= re.length - 1) {
        fe({
          index: re.length - 1
        });
        return;
      }
      fe({
        index: be.current
      });
    }
  }, [
    // Only sync the highlighted index when the option switch between empty and not
    re.length,
    // Don't sync the highlighted index with the value when multiple
    // eslint-disable-next-line react-hooks/exhaustive-deps
    B ? !1 : ne,
    g,
    Ce,
    fe,
    we,
    Te,
    B
  ]), _n = nn((_) => {
    Po(ie, _), _ && Tt();
  });
  process.env.NODE_ENV !== "production" && v.useEffect(() => {
    (!J.current || J.current.nodeName !== "INPUT") && (J.current && J.current.nodeName === "TEXTAREA" ? console.warn([`A textarea element was provided to ${u} where input was expected.`, "This is not a supported scenario but it may work under certain conditions.", "A textarea keyboard navigation may conflict with Autocomplete controls (for example enter and arrow keys).", "Make sure to test keyboard navigation and add custom event handlers if necessary."].join(`
`)) : console.error([`MUI: Unable to find the input element. It was resolved to ${J.current} while an HTMLInputElement was expected.`, `Instead, ${u} expects an input element.`, "", u === "useAutocomplete" ? "Make sure you have bound getInputProps correctly and that the normal ref/effect resolutions order is guaranteed." : "Make sure you have customized the input component correctly."].join(`
`)));
  }, [u]), v.useEffect(() => {
    Tt();
  }, [Tt]);
  const bt = (_) => {
    qe || ($e(!0), ut(!0), G && G(_));
  }, Lt = (_, $) => {
    qe && ($e(!1), z && z(_, $));
  }, pt = (_, $, V, j) => {
    if (B) {
      if (ne.length === $.length && ne.every((pe, ge) => pe === $[ge]))
        return;
    } else if (ne === $)
      return;
    U && U(_, $, V, j), Xe($);
  }, sn = v.useRef(!1), Jt = (_, $, V = "selectOption", j = "options") => {
    let pe = V, ge = $;
    if (B) {
      if (ge = Array.isArray(ne) ? ne.slice() : [], process.env.NODE_ENV !== "production") {
        const Ye = ge.filter((Zt) => K($, Zt));
        Ye.length > 1 && console.error([`MUI: The \`isOptionEqualToValue\` method of ${u} does not handle the arguments correctly.`, `The component expects a single value to match a given option but found ${Ye.length} matches.`].join(`
`));
      }
      const Se = yi(ge, (Ye) => K($, Ye));
      Se === -1 ? ge.push($) : j !== "freeSolo" && (ge.splice(Se, 1), pe = "removeOption");
    }
    He(_, ge), pt(_, ge, pe, {
      option: $
    }), !p && (!_ || !_.ctrlKey && !_.metaKey) && Lt(_, pe), (a === !0 || a === "touch" && sn.current || a === "mouse" && !sn.current) && J.current.blur();
  };
  function Kn(_, $) {
    if (_ === -1)
      return -1;
    let V = _;
    for (; ; ) {
      if ($ === "next" && V === ne.length || $ === "previous" && V === -1)
        return -1;
      const j = he.querySelector(`[data-tag-index="${V}"]`);
      if (!j || !j.hasAttribute("tabindex") || j.disabled || j.getAttribute("aria-disabled") === "true")
        V += $ === "next" ? 1 : -1;
      else
        return V;
    }
  }
  const dr = (_, $) => {
    if (!B)
      return;
    Te === "" && Lt(_, "toggleInput");
    let V = D;
    D === -1 ? Te === "" && $ === "previous" && (V = ne.length - 1) : (V += $ === "next" ? 1 : -1, V < 0 && (V = 0), V === ne.length && (V = -1)), V = Kn(V, $), ye(V), Et(V);
  }, Yn = (_) => {
    te.current = !0, We(""), M && M(_, "", "clear"), pt(_, B ? [] : null, "clear");
  }, Jr = (_) => ($) => {
    if (_.onKeyDown && _.onKeyDown($), !$.defaultMuiPrevented && (D !== -1 && ["ArrowLeft", "ArrowRight"].indexOf($.key) === -1 && (ye(-1), Et(-1)), $.which !== 229))
      switch ($.key) {
        case "Home":
          we && R && ($.preventDefault(), Ce({
            diff: "start",
            direction: "next",
            reason: "keyboard",
            event: $
          }));
          break;
        case "End":
          we && R && ($.preventDefault(), Ce({
            diff: "end",
            direction: "previous",
            reason: "keyboard",
            event: $
          }));
          break;
        case "PageUp":
          $.preventDefault(), Ce({
            diff: -ju,
            direction: "previous",
            reason: "keyboard",
            event: $
          }), bt($);
          break;
        case "PageDown":
          $.preventDefault(), Ce({
            diff: ju,
            direction: "next",
            reason: "keyboard",
            event: $
          }), bt($);
          break;
        case "ArrowDown":
          $.preventDefault(), Ce({
            diff: 1,
            direction: "next",
            reason: "keyboard",
            event: $
          }), bt($);
          break;
        case "ArrowUp":
          $.preventDefault(), Ce({
            diff: -1,
            direction: "previous",
            reason: "keyboard",
            event: $
          }), bt($);
          break;
        case "ArrowLeft":
          dr($, "previous");
          break;
        case "ArrowRight":
          dr($, "next");
          break;
        case "Enter":
          if (be.current !== -1 && we) {
            const V = re[be.current], j = E ? E(V) : !1;
            if ($.preventDefault(), j)
              return;
            Jt($, V, "selectOption"), r && J.current.setSelectionRange(J.current.value.length, J.current.value.length);
          } else
            C && Te !== "" && et === !1 && (B && $.preventDefault(), Jt($, Te, "createOption", "freeSolo"));
          break;
        case "Escape":
          we ? ($.preventDefault(), $.stopPropagation(), Lt($, "escape")) : c && (Te !== "" || B && ne.length > 0) && ($.preventDefault(), $.stopPropagation(), Yn($));
          break;
        case "Backspace":
          if (B && !X && Te === "" && ne.length > 0) {
            const V = D === -1 ? ne.length - 1 : D, j = ne.slice();
            j.splice(V, 1), pt($, j, "removeOption", {
              option: ne[V]
            });
          }
          break;
        case "Delete":
          if (B && !X && Te === "" && ne.length > 0 && D !== -1) {
            const V = D, j = ne.slice();
            j.splice(V, 1), pt($, j, "removeOption", {
              option: ne[V]
            });
          }
          break;
      }
  }, Zr = (_) => {
    Pe(!0), le && !te.current && bt(_);
  }, xn = (_) => {
    if (t(ie)) {
      J.current.focus();
      return;
    }
    Pe(!1), ue.current = !0, te.current = !1, s && be.current !== -1 && we ? Jt(_, re[be.current], "blur") : s && C && Te !== "" ? Jt(_, Te, "blur", "freeSolo") : l && He(_, ne), Lt(_, "blur");
  }, dt = (_) => {
    const $ = _.target.value;
    Te !== $ && (We($), ut(!1), M && M(_, $, "input")), $ === "" ? !f && !B && pt(_, null, "clear") : bt(_);
  }, it = (_) => {
    const $ = Number(_.currentTarget.getAttribute("data-option-index"));
    be.current !== $ && fe({
      event: _,
      index: $,
      reason: "mouse"
    });
  }, Ct = (_) => {
    fe({
      event: _,
      index: Number(_.currentTarget.getAttribute("data-option-index")),
      reason: "touch"
    }), sn.current = !0;
  }, ai = (_) => {
    const $ = Number(_.currentTarget.getAttribute("data-option-index"));
    Jt(_, re[$], "selectOption"), sn.current = !1;
  }, eo = (_) => ($) => {
    const V = ne.slice();
    V.splice(_, 1), pt($, V, "removeOption", {
      option: ne[_]
    });
  }, to = (_) => {
    qe ? Lt(_, "toggleInput") : bt(_);
  }, no = (_) => {
    _.currentTarget.contains(_.target) && _.target.getAttribute("id") !== H && _.preventDefault();
  }, T = (_) => {
    _.currentTarget.contains(_.target) && (J.current.focus(), se && ue.current && J.current.selectionEnd - J.current.selectionStart === 0 && J.current.select(), ue.current = !1);
  }, q = (_) => {
    !b && (Te === "" || !qe) && to(_);
  };
  let ee = C && Te.length > 0;
  ee = ee || (B ? ne.length > 0 : ne !== null);
  let Ee = re;
  if (P) {
    const _ = /* @__PURE__ */ new Map();
    let $ = !1;
    Ee = re.reduce((V, j, pe) => {
      const ge = P(j);
      return V.length > 0 && V[V.length - 1].group === ge ? V[V.length - 1].options.push(j) : (process.env.NODE_ENV !== "production" && (_.get(ge) && !$ && (console.warn(`MUI: The options provided combined with the \`groupBy\` method of ${u} returns duplicated headers.`, "You can solve the issue by sorting the options with the output of `groupBy`."), $ = !0), _.set(ge, !0)), V.push({
        key: pe,
        index: pe,
        group: ge,
        options: [j]
      })), V;
    }, []);
  }
  return b && Ve && xn(), {
    getRootProps: (_ = {}) => w({
      "aria-owns": xt ? `${H}-listbox` : null
    }, _, {
      onKeyDown: Jr(_),
      onMouseDown: no,
      onClick: T
    }),
    getInputLabelProps: () => ({
      id: `${H}-label`,
      htmlFor: H
    }),
    getInputProps: () => ({
      id: H,
      value: Te,
      onBlur: xn,
      onFocus: Zr,
      onChange: dt,
      onMouseDown: q,
      // if open then this is handled imperatively so don't let react override
      // only have an opinion about this when closed
      "aria-activedescendant": we ? "" : null,
      "aria-autocomplete": r ? "both" : "list",
      "aria-controls": xt ? `${H}-listbox` : void 0,
      "aria-expanded": xt,
      // Disable browser's suggestion that might overlap with the popup.
      // Handle autocomplete but not autofill.
      autoComplete: "off",
      ref: J,
      autoCapitalize: "none",
      spellCheck: "false",
      role: "combobox",
      disabled: b
    }),
    getClearProps: () => ({
      tabIndex: -1,
      type: "button",
      onClick: Yn
    }),
    getPopupIndicatorProps: () => ({
      tabIndex: -1,
      type: "button",
      onClick: to
    }),
    getTagProps: ({
      index: _
    }) => w({
      key: _,
      "data-tag-index": _,
      tabIndex: -1
    }, !X && {
      onDelete: eo(_)
    }),
    getListboxProps: () => ({
      role: "listbox",
      id: `${H}-listbox`,
      "aria-labelledby": `${H}-label`,
      ref: _n,
      onMouseDown: (_) => {
        _.preventDefault();
      }
    }),
    getOptionProps: ({
      index: _,
      option: $
    }) => {
      var V;
      const j = (B ? ne : [ne]).some((ge) => ge != null && K($, ge)), pe = E ? E($) : !1;
      return {
        key: (V = O == null ? void 0 : O($)) != null ? V : Z($),
        tabIndex: -1,
        role: "option",
        id: `${H}-option-${_}`,
        onMouseMove: it,
        onClick: ai,
        onTouchStart: Ct,
        "data-option-index": _,
        "aria-disabled": pe,
        "aria-selected": j
      };
    },
    id: H,
    inputValue: Te,
    value: ne,
    dirty: ee,
    expanded: we && he,
    popupOpen: we,
    focused: Ve || D !== -1,
    anchorEl: he,
    setAnchorEl: me,
    focusedTag: D,
    groupedOptions: Ee
  };
}
var Al = {};
Object.defineProperty(Al, "__esModule", {
  value: !0
});
var Pp = Al.default = void 0, gw = Ew(At), xw = Zf;
function $p(e) {
  if (typeof WeakMap != "function")
    return null;
  var t = /* @__PURE__ */ new WeakMap(), n = /* @__PURE__ */ new WeakMap();
  return ($p = function(r) {
    return r ? n : t;
  })(e);
}
function Ew(e, t) {
  if (!t && e && e.__esModule)
    return e;
  if (e === null || typeof e != "object" && typeof e != "function")
    return { default: e };
  var n = $p(t);
  if (n && n.has(e))
    return n.get(e);
  var r = { __proto__: null }, i = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var s in e)
    if (s !== "default" && Object.prototype.hasOwnProperty.call(e, s)) {
      var a = i ? Object.getOwnPropertyDescriptor(e, s) : null;
      a && (a.get || a.set) ? Object.defineProperty(r, s, a) : r[s] = e[s];
    }
  return r.default = e, n && n.set(e, r), r;
}
function Ow(e) {
  return Object.keys(e).length === 0;
}
function ww(e = null) {
  const t = gw.useContext(xw.ThemeContext);
  return !t || Ow(t) ? e : t;
}
Pp = Al.default = ww;
const Tw = ["anchorEl", "component", "components", "componentsProps", "container", "disablePortal", "keepMounted", "modifiers", "open", "placement", "popperOptions", "popperRef", "transition", "slots", "slotProps"], Cw = de(Sp, {
  name: "MuiPopper",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({}), _p = /* @__PURE__ */ v.forwardRef(function(t, n) {
  var r;
  const i = Pp(), s = ze({
    props: t,
    name: "MuiPopper"
  }), {
    anchorEl: a,
    component: l,
    components: c,
    componentsProps: u,
    container: d,
    disablePortal: f,
    keepMounted: p,
    modifiers: b,
    open: y,
    placement: h,
    popperOptions: m,
    popperRef: g,
    transition: C,
    slots: E,
    slotProps: O
  } = s, x = xe(s, Tw), P = (r = E == null ? void 0 : E.root) != null ? r : c == null ? void 0 : c.Root, R = w({
    anchorEl: a,
    container: d,
    disablePortal: f,
    keepMounted: p,
    modifiers: b,
    open: y,
    placement: h,
    popperOptions: m,
    popperRef: g,
    transition: C
  }, x);
  return /* @__PURE__ */ k.jsx(Cw, w({
    as: l,
    direction: i == null ? void 0 : i.direction,
    slots: {
      root: P
    },
    slotProps: O ?? u
  }, R, {
    ref: n
  }));
});
process.env.NODE_ENV !== "production" && (_p.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * An HTML element, [virtualElement](https://popper.js.org/docs/v2/virtual-elements/),
   * or a function that returns either.
   * It's used to set the position of the popper.
   * The return value will passed as the reference object of the Popper instance.
   */
  anchorEl: o.oneOfType([Sn, o.object, o.func]),
  /**
   * Popper render function or node.
   */
  children: o.oneOfType([o.node, o.func]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: o.elementType,
  /**
   * The components used for each slot inside the Popper.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  components: o.shape({
    Root: o.elementType
  }),
  /**
   * The props used for each slot inside the Popper.
   * @default {}
   */
  componentsProps: o.shape({
    root: o.oneOfType([o.func, o.object])
  }),
  /**
   * An HTML element or function that returns one.
   * The `container` will have the portal children appended to it.
   *
   * You can also provide a callback, which is called in a React layout effect.
   * This lets you set the container from a ref, and also makes server-side rendering possible.
   *
   * By default, it uses the body of the top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: o.oneOfType([Sn, o.func]),
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: o.bool,
  /**
   * Always keep the children in the DOM.
   * This prop can be useful in SEO situation or
   * when you want to maximize the responsiveness of the Popper.
   * @default false
   */
  keepMounted: o.bool,
  /**
   * Popper.js is based on a "plugin-like" architecture,
   * most of its features are fully encapsulated "modifiers".
   *
   * A modifier is a function that is called each time Popper.js needs to
   * compute the position of the popper.
   * For this reason, modifiers should be very performant to avoid bottlenecks.
   * To learn how to create a modifier, [read the modifiers documentation](https://popper.js.org/docs/v2/modifiers/).
   */
  modifiers: o.arrayOf(o.shape({
    data: o.object,
    effect: o.func,
    enabled: o.bool,
    fn: o.func,
    name: o.any,
    options: o.object,
    phase: o.oneOf(["afterMain", "afterRead", "afterWrite", "beforeMain", "beforeRead", "beforeWrite", "main", "read", "write"]),
    requires: o.arrayOf(o.string),
    requiresIfExists: o.arrayOf(o.string)
  })),
  /**
   * If `true`, the component is shown.
   */
  open: o.bool.isRequired,
  /**
   * Popper placement.
   * @default 'bottom'
   */
  placement: o.oneOf(["auto-end", "auto-start", "auto", "bottom-end", "bottom-start", "bottom", "left-end", "left-start", "left", "right-end", "right-start", "right", "top-end", "top-start", "top"]),
  /**
   * Options provided to the [`Popper.js`](https://popper.js.org/docs/v2/constructors/#options) instance.
   * @default {}
   */
  popperOptions: o.shape({
    modifiers: o.array,
    onFirstUpdate: o.func,
    placement: o.oneOf(["auto-end", "auto-start", "auto", "bottom-end", "bottom-start", "bottom", "left-end", "left-start", "left", "right-end", "right-start", "right", "top-end", "top-start", "top"]),
    strategy: o.oneOf(["absolute", "fixed"])
  }),
  /**
   * A ref that points to the used popper instance.
   */
  popperRef: on,
  /**
   * The props used for each slot inside the Popper.
   * @default {}
   */
  slotProps: o.shape({
    root: o.oneOfType([o.func, o.object])
  }),
  /**
   * The components used for each slot inside the Popper.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slots: o.shape({
    root: o.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * Help supporting a react-transition-group/Transition component.
   * @default false
   */
  transition: o.bool
});
const kp = _p;
function Sw(e) {
  return Le("MuiListSubheader", e);
}
Be("MuiListSubheader", ["root", "colorPrimary", "colorInherit", "gutters", "inset", "sticky"]);
const Rw = ["className", "color", "component", "disableGutters", "disableSticky", "inset"], Pw = (e) => {
  const {
    classes: t,
    color: n,
    disableGutters: r,
    inset: i,
    disableSticky: s
  } = e, a = {
    root: ["root", n !== "default" && `color${ae(n)}`, !r && "gutters", i && "inset", !s && "sticky"]
  };
  return Ue(a, Sw, t);
}, $w = de("li", {
  name: "MuiListSubheader",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.color !== "default" && t[`color${ae(n.color)}`], !n.disableGutters && t.gutters, n.inset && t.inset, !n.disableSticky && t.sticky];
  }
})(({
  theme: e,
  ownerState: t
}) => w({
  boxSizing: "border-box",
  lineHeight: "48px",
  listStyle: "none",
  color: (e.vars || e).palette.text.secondary,
  fontFamily: e.typography.fontFamily,
  fontWeight: e.typography.fontWeightMedium,
  fontSize: e.typography.pxToRem(14)
}, t.color === "primary" && {
  color: (e.vars || e).palette.primary.main
}, t.color === "inherit" && {
  color: "inherit"
}, !t.disableGutters && {
  paddingLeft: 16,
  paddingRight: 16
}, t.inset && {
  paddingLeft: 72
}, !t.disableSticky && {
  position: "sticky",
  top: 0,
  zIndex: 1,
  backgroundColor: (e.vars || e).palette.background.paper
})), jl = /* @__PURE__ */ v.forwardRef(function(t, n) {
  const r = ze({
    props: t,
    name: "MuiListSubheader"
  }), {
    className: i,
    color: s = "default",
    component: a = "li",
    disableGutters: l = !1,
    disableSticky: c = !1,
    inset: u = !1
  } = r, d = xe(r, Rw), f = w({}, r, {
    color: s,
    component: a,
    disableGutters: l,
    disableSticky: c,
    inset: u
  }), p = Pw(f);
  return /* @__PURE__ */ k.jsx($w, w({
    as: a,
    className: Oe(p.root, i),
    ref: n,
    ownerState: f
  }, d));
});
jl.muiSkipListHighlight = !0;
process.env.NODE_ENV !== "production" && (jl.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   * @default 'default'
   */
  color: o.oneOf(["default", "inherit", "primary"]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: o.elementType,
  /**
   * If `true`, the List Subheader will not have gutters.
   * @default false
   */
  disableGutters: o.bool,
  /**
   * If `true`, the List Subheader will not stick to the top during scroll.
   * @default false
   */
  disableSticky: o.bool,
  /**
   * If `true`, the List Subheader is indented.
   * @default false
   */
  inset: o.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object])
});
const _w = jl, kw = Os(/* @__PURE__ */ k.jsx("path", {
  d: "M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"
}), "Cancel");
function Nw(e) {
  return Le("MuiChip", e);
}
const Iw = Be("MuiChip", ["root", "sizeSmall", "sizeMedium", "colorError", "colorInfo", "colorPrimary", "colorSecondary", "colorSuccess", "colorWarning", "disabled", "clickable", "clickableColorPrimary", "clickableColorSecondary", "deletable", "deletableColorPrimary", "deletableColorSecondary", "outlined", "filled", "outlinedPrimary", "outlinedSecondary", "filledPrimary", "filledSecondary", "avatar", "avatarSmall", "avatarMedium", "avatarColorPrimary", "avatarColorSecondary", "icon", "iconSmall", "iconMedium", "iconColorPrimary", "iconColorSecondary", "label", "labelSmall", "labelMedium", "deleteIcon", "deleteIconSmall", "deleteIconMedium", "deleteIconColorPrimary", "deleteIconColorSecondary", "deleteIconOutlinedColorPrimary", "deleteIconOutlinedColorSecondary", "deleteIconFilledColorPrimary", "deleteIconFilledColorSecondary", "focusVisible"]), Ne = Iw, Aw = ["avatar", "className", "clickable", "color", "component", "deleteIcon", "disabled", "icon", "label", "onClick", "onDelete", "onKeyDown", "onKeyUp", "size", "variant", "tabIndex", "skipFocusWhenDisabled"], jw = (e) => {
  const {
    classes: t,
    disabled: n,
    size: r,
    color: i,
    iconColor: s,
    onDelete: a,
    clickable: l,
    variant: c
  } = e, u = {
    root: ["root", c, n && "disabled", `size${ae(r)}`, `color${ae(i)}`, l && "clickable", l && `clickableColor${ae(i)}`, a && "deletable", a && `deletableColor${ae(i)}`, `${c}${ae(i)}`],
    label: ["label", `label${ae(r)}`],
    avatar: ["avatar", `avatar${ae(r)}`, `avatarColor${ae(i)}`],
    icon: ["icon", `icon${ae(r)}`, `iconColor${ae(s)}`],
    deleteIcon: ["deleteIcon", `deleteIcon${ae(r)}`, `deleteIconColor${ae(i)}`, `deleteIcon${ae(c)}Color${ae(i)}`]
  };
  return Ue(u, Nw, t);
}, Mw = de("div", {
  name: "MuiChip",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e, {
      color: r,
      iconColor: i,
      clickable: s,
      onDelete: a,
      size: l,
      variant: c
    } = n;
    return [{
      [`& .${Ne.avatar}`]: t.avatar
    }, {
      [`& .${Ne.avatar}`]: t[`avatar${ae(l)}`]
    }, {
      [`& .${Ne.avatar}`]: t[`avatarColor${ae(r)}`]
    }, {
      [`& .${Ne.icon}`]: t.icon
    }, {
      [`& .${Ne.icon}`]: t[`icon${ae(l)}`]
    }, {
      [`& .${Ne.icon}`]: t[`iconColor${ae(i)}`]
    }, {
      [`& .${Ne.deleteIcon}`]: t.deleteIcon
    }, {
      [`& .${Ne.deleteIcon}`]: t[`deleteIcon${ae(l)}`]
    }, {
      [`& .${Ne.deleteIcon}`]: t[`deleteIconColor${ae(r)}`]
    }, {
      [`& .${Ne.deleteIcon}`]: t[`deleteIcon${ae(c)}Color${ae(r)}`]
    }, t.root, t[`size${ae(l)}`], t[`color${ae(r)}`], s && t.clickable, s && r !== "default" && t[`clickableColor${ae(r)})`], a && t.deletable, a && r !== "default" && t[`deletableColor${ae(r)}`], t[c], t[`${c}${ae(r)}`]];
  }
})(({
  theme: e,
  ownerState: t
}) => {
  const n = e.palette.mode === "light" ? e.palette.grey[700] : e.palette.grey[300];
  return w({
    maxWidth: "100%",
    fontFamily: e.typography.fontFamily,
    fontSize: e.typography.pxToRem(13),
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    height: 32,
    color: (e.vars || e).palette.text.primary,
    backgroundColor: (e.vars || e).palette.action.selected,
    borderRadius: 32 / 2,
    whiteSpace: "nowrap",
    transition: e.transitions.create(["background-color", "box-shadow"]),
    // reset cursor explicitly in case ButtonBase is used
    cursor: "unset",
    // We disable the focus ring for mouse, touch and keyboard users.
    outline: 0,
    textDecoration: "none",
    border: 0,
    // Remove `button` border
    padding: 0,
    // Remove `button` padding
    verticalAlign: "middle",
    boxSizing: "border-box",
    [`&.${Ne.disabled}`]: {
      opacity: (e.vars || e).palette.action.disabledOpacity,
      pointerEvents: "none"
    },
    [`& .${Ne.avatar}`]: {
      marginLeft: 5,
      marginRight: -6,
      width: 24,
      height: 24,
      color: e.vars ? e.vars.palette.Chip.defaultAvatarColor : n,
      fontSize: e.typography.pxToRem(12)
    },
    [`& .${Ne.avatarColorPrimary}`]: {
      color: (e.vars || e).palette.primary.contrastText,
      backgroundColor: (e.vars || e).palette.primary.dark
    },
    [`& .${Ne.avatarColorSecondary}`]: {
      color: (e.vars || e).palette.secondary.contrastText,
      backgroundColor: (e.vars || e).palette.secondary.dark
    },
    [`& .${Ne.avatarSmall}`]: {
      marginLeft: 4,
      marginRight: -4,
      width: 18,
      height: 18,
      fontSize: e.typography.pxToRem(10)
    },
    [`& .${Ne.icon}`]: w({
      marginLeft: 5,
      marginRight: -6
    }, t.size === "small" && {
      fontSize: 18,
      marginLeft: 4,
      marginRight: -4
    }, t.iconColor === t.color && w({
      color: e.vars ? e.vars.palette.Chip.defaultIconColor : n
    }, t.color !== "default" && {
      color: "inherit"
    })),
    [`& .${Ne.deleteIcon}`]: w({
      WebkitTapHighlightColor: "transparent",
      color: e.vars ? `rgba(${e.vars.palette.text.primaryChannel} / 0.26)` : ht(e.palette.text.primary, 0.26),
      fontSize: 22,
      cursor: "pointer",
      margin: "0 5px 0 -6px",
      "&:hover": {
        color: e.vars ? `rgba(${e.vars.palette.text.primaryChannel} / 0.4)` : ht(e.palette.text.primary, 0.4)
      }
    }, t.size === "small" && {
      fontSize: 16,
      marginRight: 4,
      marginLeft: -4
    }, t.color !== "default" && {
      color: e.vars ? `rgba(${e.vars.palette[t.color].contrastTextChannel} / 0.7)` : ht(e.palette[t.color].contrastText, 0.7),
      "&:hover, &:active": {
        color: (e.vars || e).palette[t.color].contrastText
      }
    })
  }, t.size === "small" && {
    height: 24
  }, t.color !== "default" && {
    backgroundColor: (e.vars || e).palette[t.color].main,
    color: (e.vars || e).palette[t.color].contrastText
  }, t.onDelete && {
    [`&.${Ne.focusVisible}`]: {
      backgroundColor: e.vars ? `rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))` : ht(e.palette.action.selected, e.palette.action.selectedOpacity + e.palette.action.focusOpacity)
    }
  }, t.onDelete && t.color !== "default" && {
    [`&.${Ne.focusVisible}`]: {
      backgroundColor: (e.vars || e).palette[t.color].dark
    }
  });
}, ({
  theme: e,
  ownerState: t
}) => w({}, t.clickable && {
  userSelect: "none",
  WebkitTapHighlightColor: "transparent",
  cursor: "pointer",
  "&:hover": {
    backgroundColor: e.vars ? `rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))` : ht(e.palette.action.selected, e.palette.action.selectedOpacity + e.palette.action.hoverOpacity)
  },
  [`&.${Ne.focusVisible}`]: {
    backgroundColor: e.vars ? `rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))` : ht(e.palette.action.selected, e.palette.action.selectedOpacity + e.palette.action.focusOpacity)
  },
  "&:active": {
    boxShadow: (e.vars || e).shadows[1]
  }
}, t.clickable && t.color !== "default" && {
  [`&:hover, &.${Ne.focusVisible}`]: {
    backgroundColor: (e.vars || e).palette[t.color].dark
  }
}), ({
  theme: e,
  ownerState: t
}) => w({}, t.variant === "outlined" && {
  backgroundColor: "transparent",
  border: e.vars ? `1px solid ${e.vars.palette.Chip.defaultBorder}` : `1px solid ${e.palette.mode === "light" ? e.palette.grey[400] : e.palette.grey[700]}`,
  [`&.${Ne.clickable}:hover`]: {
    backgroundColor: (e.vars || e).palette.action.hover
  },
  [`&.${Ne.focusVisible}`]: {
    backgroundColor: (e.vars || e).palette.action.focus
  },
  [`& .${Ne.avatar}`]: {
    marginLeft: 4
  },
  [`& .${Ne.avatarSmall}`]: {
    marginLeft: 2
  },
  [`& .${Ne.icon}`]: {
    marginLeft: 4
  },
  [`& .${Ne.iconSmall}`]: {
    marginLeft: 2
  },
  [`& .${Ne.deleteIcon}`]: {
    marginRight: 5
  },
  [`& .${Ne.deleteIconSmall}`]: {
    marginRight: 3
  }
}, t.variant === "outlined" && t.color !== "default" && {
  color: (e.vars || e).palette[t.color].main,
  border: `1px solid ${e.vars ? `rgba(${e.vars.palette[t.color].mainChannel} / 0.7)` : ht(e.palette[t.color].main, 0.7)}`,
  [`&.${Ne.clickable}:hover`]: {
    backgroundColor: e.vars ? `rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : ht(e.palette[t.color].main, e.palette.action.hoverOpacity)
  },
  [`&.${Ne.focusVisible}`]: {
    backgroundColor: e.vars ? `rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.focusOpacity})` : ht(e.palette[t.color].main, e.palette.action.focusOpacity)
  },
  [`& .${Ne.deleteIcon}`]: {
    color: e.vars ? `rgba(${e.vars.palette[t.color].mainChannel} / 0.7)` : ht(e.palette[t.color].main, 0.7),
    "&:hover, &:active": {
      color: (e.vars || e).palette[t.color].main
    }
  }
})), Dw = de("span", {
  name: "MuiChip",
  slot: "Label",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e, {
      size: r
    } = n;
    return [t.label, t[`label${ae(r)}`]];
  }
})(({
  ownerState: e
}) => w({
  overflow: "hidden",
  textOverflow: "ellipsis",
  paddingLeft: 12,
  paddingRight: 12,
  whiteSpace: "nowrap"
}, e.variant === "outlined" && {
  paddingLeft: 11,
  paddingRight: 11
}, e.size === "small" && {
  paddingLeft: 8,
  paddingRight: 8
}, e.size === "small" && e.variant === "outlined" && {
  paddingLeft: 7,
  paddingRight: 7
}));
function Mu(e) {
  return e.key === "Backspace" || e.key === "Delete";
}
const Np = /* @__PURE__ */ v.forwardRef(function(t, n) {
  const r = ze({
    props: t,
    name: "MuiChip"
  }), {
    avatar: i,
    className: s,
    clickable: a,
    color: l = "default",
    component: c,
    deleteIcon: u,
    disabled: d = !1,
    icon: f,
    label: p,
    onClick: b,
    onDelete: y,
    onKeyDown: h,
    onKeyUp: m,
    size: g = "medium",
    variant: C = "filled",
    tabIndex: E,
    skipFocusWhenDisabled: O = !1
    // TODO v6: Rename to `focusableWhenDisabled`.
  } = r, x = xe(r, Aw), P = v.useRef(null), R = ct(P, n), N = (le) => {
    le.stopPropagation(), y && y(le);
  }, A = (le) => {
    le.currentTarget === le.target && Mu(le) && le.preventDefault(), h && h(le);
  }, L = (le) => {
    le.currentTarget === le.target && (y && Mu(le) ? y(le) : le.key === "Escape" && P.current && P.current.blur()), m && m(le);
  }, K = a !== !1 && b ? !0 : a, B = K || y ? Va : c || "div", U = w({}, r, {
    component: B,
    disabled: d,
    size: g,
    color: l,
    iconColor: /* @__PURE__ */ v.isValidElement(f) && f.props.color || l,
    onDelete: !!y,
    clickable: K,
    variant: C
  }), z = jw(U), Y = B === Va ? w({
    component: c || "div",
    focusVisibleClassName: z.focusVisible
  }, y && {
    disableRipple: !0
  }) : {};
  let M = null;
  y && (M = u && /* @__PURE__ */ v.isValidElement(u) ? /* @__PURE__ */ v.cloneElement(u, {
    className: Oe(u.props.className, z.deleteIcon),
    onClick: N
  }) : /* @__PURE__ */ k.jsx(kw, {
    className: Oe(z.deleteIcon),
    onClick: N
  }));
  let G = null;
  i && /* @__PURE__ */ v.isValidElement(i) && (G = /* @__PURE__ */ v.cloneElement(i, {
    className: Oe(z.avatar, i.props.className)
  }));
  let W = null;
  return f && /* @__PURE__ */ v.isValidElement(f) && (W = /* @__PURE__ */ v.cloneElement(f, {
    className: Oe(z.icon, f.props.className)
  })), process.env.NODE_ENV !== "production" && G && W && console.error("MUI: The Chip component can not handle the avatar and the icon prop at the same time. Pick one."), /* @__PURE__ */ k.jsxs(Mw, w({
    as: B,
    className: Oe(z.root, s),
    disabled: K && d ? !0 : void 0,
    onClick: b,
    onKeyDown: A,
    onKeyUp: L,
    ref: R,
    tabIndex: O && d ? -1 : E,
    ownerState: U
  }, Y, x, {
    children: [G || W, /* @__PURE__ */ k.jsx(Dw, {
      className: Oe(z.label),
      ownerState: U,
      children: p
    }), M]
  }));
});
process.env.NODE_ENV !== "production" && (Np.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The Avatar element to display.
   */
  avatar: o.element,
  /**
   * This prop isn't supported.
   * Use the `component` prop if you need to change the children structure.
   */
  children: Lf,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * If `true`, the chip will appear clickable, and will raise when pressed,
   * even if the onClick prop is not defined.
   * If `false`, the chip will not appear clickable, even if onClick prop is defined.
   * This can be used, for example,
   * along with the component prop to indicate an anchor Chip is clickable.
   * Note: this controls the UI and does not affect the onClick event.
   */
  clickable: o.bool,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'default'
   */
  color: o.oneOfType([o.oneOf(["default", "primary", "secondary", "error", "info", "success", "warning"]), o.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: o.elementType,
  /**
   * Override the default delete icon element. Shown only if `onDelete` is set.
   */
  deleteIcon: o.element,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: o.bool,
  /**
   * Icon element.
   */
  icon: o.element,
  /**
   * The content of the component.
   */
  label: o.node,
  /**
   * @ignore
   */
  onClick: o.func,
  /**
   * Callback fired when the delete icon is clicked.
   * If set, the delete icon will be shown.
   */
  onDelete: o.func,
  /**
   * @ignore
   */
  onKeyDown: o.func,
  /**
   * @ignore
   */
  onKeyUp: o.func,
  /**
   * The size of the component.
   * @default 'medium'
   */
  size: o.oneOfType([o.oneOf(["medium", "small"]), o.string]),
  /**
   * If `true`, allows the disabled chip to escape focus.
   * If `false`, allows the disabled chip to receive focus.
   * @default false
   */
  skipFocusWhenDisabled: o.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * @ignore
   */
  tabIndex: o.number,
  /**
   * The variant to use.
   * @default 'filled'
   */
  variant: o.oneOfType([o.oneOf(["filled", "outlined"]), o.string])
});
const Fw = Np;
function Qr({
  props: e,
  states: t,
  muiFormControl: n
}) {
  return t.reduce((r, i) => (r[i] = e[i], n && typeof e[i] > "u" && (r[i] = n[i]), r), {});
}
const Ip = /* @__PURE__ */ v.createContext(void 0);
process.env.NODE_ENV !== "production" && (Ip.displayName = "FormControlContext");
const Ml = Ip;
function Xr() {
  return v.useContext(Ml);
}
function Ap(e) {
  return /* @__PURE__ */ k.jsx(Pf, w({}, e, {
    defaultTheme: Es,
    themeId: Go
  }));
}
process.env.NODE_ENV !== "production" && (Ap.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The styles you want to apply globally.
   */
  styles: o.oneOfType([o.array, o.func, o.number, o.object, o.string, o.bool])
});
function Du(e) {
  return e != null && !(Array.isArray(e) && e.length === 0);
}
function Hi(e, t = !1) {
  return e && (Du(e.value) && e.value !== "" || t && Du(e.defaultValue) && e.defaultValue !== "");
}
function Lw(e) {
  return e.startAdornment;
}
function Bw(e) {
  return Le("MuiInputBase", e);
}
const Vw = Be("MuiInputBase", ["root", "formControl", "focused", "disabled", "adornedStart", "adornedEnd", "error", "sizeSmall", "multiline", "colorSecondary", "fullWidth", "hiddenLabel", "readOnly", "input", "inputSizeSmall", "inputMultiline", "inputTypeSearch", "inputAdornedStart", "inputAdornedEnd", "inputHiddenLabel"]), kt = Vw, Uw = ["aria-describedby", "autoComplete", "autoFocus", "className", "color", "components", "componentsProps", "defaultValue", "disabled", "disableInjectingGlobalStyles", "endAdornment", "error", "fullWidth", "id", "inputComponent", "inputProps", "inputRef", "margin", "maxRows", "minRows", "multiline", "name", "onBlur", "onChange", "onClick", "onFocus", "onKeyDown", "onKeyUp", "placeholder", "readOnly", "renderSuffix", "rows", "size", "slotProps", "slots", "startAdornment", "type", "value"], Ss = (e, t) => {
  const {
    ownerState: n
  } = e;
  return [t.root, n.formControl && t.formControl, n.startAdornment && t.adornedStart, n.endAdornment && t.adornedEnd, n.error && t.error, n.size === "small" && t.sizeSmall, n.multiline && t.multiline, n.color && t[`color${ae(n.color)}`], n.fullWidth && t.fullWidth, n.hiddenLabel && t.hiddenLabel];
}, Rs = (e, t) => {
  const {
    ownerState: n
  } = e;
  return [t.input, n.size === "small" && t.inputSizeSmall, n.multiline && t.inputMultiline, n.type === "search" && t.inputTypeSearch, n.startAdornment && t.inputAdornedStart, n.endAdornment && t.inputAdornedEnd, n.hiddenLabel && t.inputHiddenLabel];
}, zw = (e) => {
  const {
    classes: t,
    color: n,
    disabled: r,
    error: i,
    endAdornment: s,
    focused: a,
    formControl: l,
    fullWidth: c,
    hiddenLabel: u,
    multiline: d,
    readOnly: f,
    size: p,
    startAdornment: b,
    type: y
  } = e, h = {
    root: ["root", `color${ae(n)}`, r && "disabled", i && "error", c && "fullWidth", a && "focused", l && "formControl", p && p !== "medium" && `size${ae(p)}`, d && "multiline", b && "adornedStart", s && "adornedEnd", u && "hiddenLabel", f && "readOnly"],
    input: ["input", r && "disabled", y === "search" && "inputTypeSearch", d && "inputMultiline", p === "small" && "inputSizeSmall", u && "inputHiddenLabel", b && "inputAdornedStart", s && "inputAdornedEnd", f && "readOnly"]
  };
  return Ue(h, Bw, t);
}, Ps = de("div", {
  name: "MuiInputBase",
  slot: "Root",
  overridesResolver: Ss
})(({
  theme: e,
  ownerState: t
}) => w({}, e.typography.body1, {
  color: (e.vars || e).palette.text.primary,
  lineHeight: "1.4375em",
  // 23px
  boxSizing: "border-box",
  // Prevent padding issue with fullWidth.
  position: "relative",
  cursor: "text",
  display: "inline-flex",
  alignItems: "center",
  [`&.${kt.disabled}`]: {
    color: (e.vars || e).palette.text.disabled,
    cursor: "default"
  }
}, t.multiline && w({
  padding: "4px 0 5px"
}, t.size === "small" && {
  paddingTop: 1
}), t.fullWidth && {
  width: "100%"
})), $s = de("input", {
  name: "MuiInputBase",
  slot: "Input",
  overridesResolver: Rs
})(({
  theme: e,
  ownerState: t
}) => {
  const n = e.palette.mode === "light", r = w({
    color: "currentColor"
  }, e.vars ? {
    opacity: e.vars.opacity.inputPlaceholder
  } : {
    opacity: n ? 0.42 : 0.5
  }, {
    transition: e.transitions.create("opacity", {
      duration: e.transitions.duration.shorter
    })
  }), i = {
    opacity: "0 !important"
  }, s = e.vars ? {
    opacity: e.vars.opacity.inputPlaceholder
  } : {
    opacity: n ? 0.42 : 0.5
  };
  return w({
    font: "inherit",
    letterSpacing: "inherit",
    color: "currentColor",
    padding: "4px 0 5px",
    border: 0,
    boxSizing: "content-box",
    background: "none",
    height: "1.4375em",
    // Reset 23pxthe native input line-height
    margin: 0,
    // Reset for Safari
    WebkitTapHighlightColor: "transparent",
    display: "block",
    // Make the flex item shrink with Firefox
    minWidth: 0,
    width: "100%",
    // Fix IE11 width issue
    animationName: "mui-auto-fill-cancel",
    animationDuration: "10ms",
    "&::-webkit-input-placeholder": r,
    "&::-moz-placeholder": r,
    // Firefox 19+
    "&:-ms-input-placeholder": r,
    // IE11
    "&::-ms-input-placeholder": r,
    // Edge
    "&:focus": {
      outline: 0
    },
    // Reset Firefox invalid required input style
    "&:invalid": {
      boxShadow: "none"
    },
    "&::-webkit-search-decoration": {
      // Remove the padding when type=search.
      WebkitAppearance: "none"
    },
    // Show and hide the placeholder logic
    [`label[data-shrink=false] + .${kt.formControl} &`]: {
      "&::-webkit-input-placeholder": i,
      "&::-moz-placeholder": i,
      // Firefox 19+
      "&:-ms-input-placeholder": i,
      // IE11
      "&::-ms-input-placeholder": i,
      // Edge
      "&:focus::-webkit-input-placeholder": s,
      "&:focus::-moz-placeholder": s,
      // Firefox 19+
      "&:focus:-ms-input-placeholder": s,
      // IE11
      "&:focus::-ms-input-placeholder": s
      // Edge
    },
    [`&.${kt.disabled}`]: {
      opacity: 1,
      // Reset iOS opacity
      WebkitTextFillColor: (e.vars || e).palette.text.disabled
      // Fix opacity Safari bug
    },
    "&:-webkit-autofill": {
      animationDuration: "5000s",
      animationName: "mui-auto-fill"
    }
  }, t.size === "small" && {
    paddingTop: 1
  }, t.multiline && {
    height: "auto",
    resize: "none",
    padding: 0,
    paddingTop: 0
  }, t.type === "search" && {
    // Improve type search style.
    MozAppearance: "textfield"
  });
}), Ww = /* @__PURE__ */ k.jsx(Ap, {
  styles: {
    "@keyframes mui-auto-fill": {
      from: {
        display: "block"
      }
    },
    "@keyframes mui-auto-fill-cancel": {
      from: {
        display: "block"
      }
    }
  }
}), jp = /* @__PURE__ */ v.forwardRef(function(t, n) {
  var r;
  const i = ze({
    props: t,
    name: "MuiInputBase"
  }), {
    "aria-describedby": s,
    autoComplete: a,
    autoFocus: l,
    className: c,
    components: u = {},
    componentsProps: d = {},
    defaultValue: f,
    disabled: p,
    disableInjectingGlobalStyles: b,
    endAdornment: y,
    fullWidth: h = !1,
    id: m,
    inputComponent: g = "input",
    inputProps: C = {},
    inputRef: E,
    maxRows: O,
    minRows: x,
    multiline: P = !1,
    name: R,
    onBlur: N,
    onChange: A,
    onClick: L,
    onFocus: K,
    onKeyDown: B,
    onKeyUp: U,
    placeholder: z,
    readOnly: Y,
    renderSuffix: M,
    rows: G,
    slotProps: W = {},
    slots: le = {},
    startAdornment: I,
    type: X = "text",
    value: se
  } = i, oe = xe(i, Uw), H = C.value != null ? C.value : se, {
    current: Z
  } = v.useRef(H != null), te = v.useRef(), ue = v.useCallback((we) => {
    process.env.NODE_ENV !== "production" && we && we.nodeName !== "INPUT" && !we.focus && console.error(["MUI: You have provided a `inputComponent` to the input component", "that does not correctly handle the `ref` prop.", "Make sure the `ref` prop is called with a HTMLInputElement."].join(`
`));
  }, []), J = ct(te, E, C.ref, ue), [ie, he] = v.useState(!1), me = Xr();
  process.env.NODE_ENV !== "production" && v.useEffect(() => {
    if (me)
      return me.registerEffect();
  }, [me]);
  const D = Qr({
    props: i,
    muiFormControl: me,
    states: ["color", "disabled", "error", "hiddenLabel", "size", "required", "filled"]
  });
  D.focused = me ? me.focused : ie, v.useEffect(() => {
    !me && p && ie && (he(!1), N && N());
  }, [me, p, ie, N]);
  const ye = me && me.onFilled, Q = me && me.onEmpty, be = v.useCallback((we) => {
    Hi(we) ? ye && ye() : Q && Q();
  }, [ye, Q]);
  rn(() => {
    Z && be({
      value: H
    });
  }, [H, be, Z]);
  const ne = (we) => {
    if (D.disabled) {
      we.stopPropagation();
      return;
    }
    K && K(we), C.onFocus && C.onFocus(we), me && me.onFocus ? me.onFocus(we) : he(!0);
  }, Xe = (we) => {
    N && N(we), C.onBlur && C.onBlur(we), me && me.onBlur ? me.onBlur(we) : he(!1);
  }, Te = (we, ...re) => {
    if (!Z) {
      const Qe = we.target || te.current;
      if (Qe == null)
        throw new Error(process.env.NODE_ENV !== "production" ? "MUI: Expected valid input target. Did you use a custom `inputComponent` and forget to forward refs? See https://mui.com/r/input-component-ref-interface for more info." : ar(1));
      be({
        value: Qe.value
      });
    }
    C.onChange && C.onChange(we, ...re), A && A(we, ...re);
  };
  v.useEffect(() => {
    be(te.current);
  }, []);
  const We = (we) => {
    te.current && we.currentTarget === we.target && te.current.focus(), L && L(we);
  };
  let Ve = g, Pe = C;
  P && Ve === "input" && (G ? (process.env.NODE_ENV !== "production" && (x || O) && console.warn("MUI: You can not use the `minRows` or `maxRows` props when the input `rows` prop is set."), Pe = w({
    type: void 0,
    minRows: G,
    maxRows: G
  }, Pe)) : Pe = w({
    type: void 0,
    maxRows: O,
    minRows: x
  }, Pe), Ve = Rp);
  const He = (we) => {
    be(we.animationName === "mui-auto-fill-cancel" ? te.current : {
      value: "x"
    });
  };
  v.useEffect(() => {
    me && me.setAdornedStart(!!I);
  }, [me, I]);
  const qe = w({}, i, {
    color: D.color || "primary",
    disabled: D.disabled,
    endAdornment: y,
    error: D.error,
    focused: D.focused,
    formControl: me,
    fullWidth: h,
    hiddenLabel: D.hiddenLabel,
    multiline: P,
    size: D.size,
    startAdornment: I,
    type: X
  }), $e = zw(qe), Ze = le.root || u.Root || Ps, ut = W.root || d.root || {}, et = le.input || u.Input || $s;
  return Pe = w({}, Pe, (r = W.input) != null ? r : d.input), /* @__PURE__ */ k.jsxs(v.Fragment, {
    children: [!b && Ww, /* @__PURE__ */ k.jsxs(Ze, w({}, ut, !Ui(Ze) && {
      ownerState: w({}, qe, ut.ownerState)
    }, {
      ref: n,
      onClick: We
    }, oe, {
      className: Oe($e.root, ut.className, c, Y && "MuiInputBase-readOnly"),
      children: [I, /* @__PURE__ */ k.jsx(Ml.Provider, {
        value: null,
        children: /* @__PURE__ */ k.jsx(et, w({
          ownerState: qe,
          "aria-invalid": D.error,
          "aria-describedby": s,
          autoComplete: a,
          autoFocus: l,
          defaultValue: f,
          disabled: D.disabled,
          id: m,
          onAnimationStart: He,
          name: R,
          placeholder: z,
          readOnly: Y,
          required: D.required,
          rows: G,
          value: H,
          onKeyDown: B,
          onKeyUp: U,
          type: X
        }, Pe, !Ui(et) && {
          as: Ve,
          ownerState: w({}, qe, Pe.ownerState)
        }, {
          ref: J,
          className: Oe($e.input, Pe.className, Y && "MuiInputBase-readOnly"),
          onBlur: Xe,
          onChange: Te,
          onFocus: ne
        }))
      }), y, M ? M(w({}, D, {
        startAdornment: I
      })) : null]
    }))]
  });
});
process.env.NODE_ENV !== "production" && (jp.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * @ignore
   */
  "aria-describedby": o.string,
  /**
   * This prop helps users to fill forms faster, especially on mobile devices.
   * The name can be confusing, as it's more like an autofill.
   * You can learn more about it [following the specification](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill).
   */
  autoComplete: o.string,
  /**
   * If `true`, the `input` element is focused during the first mount.
   */
  autoFocus: o.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * The prop defaults to the value (`'primary'`) inherited from the parent FormControl component.
   */
  color: o.oneOfType([o.oneOf(["primary", "secondary", "error", "info", "success", "warning"]), o.string]),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `slots` prop.
   * It's recommended to use the `slots` prop instead.
   *
   * @default {}
   */
  components: o.shape({
    Input: o.elementType,
    Root: o.elementType
  }),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * This prop is an alias for the `slotProps` prop.
   * It's recommended to use the `slotProps` prop instead, as `componentsProps` will be deprecated in the future.
   *
   * @default {}
   */
  componentsProps: o.shape({
    input: o.object,
    root: o.object
  }),
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: o.any,
  /**
   * If `true`, the component is disabled.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  disabled: o.bool,
  /**
   * If `true`, GlobalStyles for the auto-fill keyframes will not be injected/removed on mount/unmount. Make sure to inject them at the top of your application.
   * This option is intended to help with boosting the initial rendering performance if you are loading a big amount of Input components at once.
   * @default false
   */
  disableInjectingGlobalStyles: o.bool,
  /**
   * End `InputAdornment` for this component.
   */
  endAdornment: o.node,
  /**
   * If `true`, the `input` will indicate an error.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  error: o.bool,
  /**
   * If `true`, the `input` will take up the full width of its container.
   * @default false
   */
  fullWidth: o.bool,
  /**
   * The id of the `input` element.
   */
  id: o.string,
  /**
   * The component used for the `input` element.
   * Either a string to use a HTML element or a component.
   * @default 'input'
   */
  inputComponent: vl,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   * @default {}
   */
  inputProps: o.object,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: on,
  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   * The prop defaults to the value (`'none'`) inherited from the parent FormControl component.
   */
  margin: o.oneOf(["dense", "none"]),
  /**
   * Maximum number of rows to display when multiline option is set to true.
   */
  maxRows: o.oneOfType([o.number, o.string]),
  /**
   * Minimum number of rows to display when multiline option is set to true.
   */
  minRows: o.oneOfType([o.number, o.string]),
  /**
   * If `true`, a [TextareaAutosize](/material-ui/react-textarea-autosize/) element is rendered.
   * @default false
   */
  multiline: o.bool,
  /**
   * Name attribute of the `input` element.
   */
  name: o.string,
  /**
   * Callback fired when the `input` is blurred.
   *
   * Notice that the first argument (event) might be undefined.
   */
  onBlur: o.func,
  /**
   * Callback fired when the value is changed.
   *
   * @param {React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: o.func,
  /**
   * @ignore
   */
  onClick: o.func,
  /**
   * @ignore
   */
  onFocus: o.func,
  /**
   * Callback fired when the `input` doesn't satisfy its constraints.
   */
  onInvalid: o.func,
  /**
   * @ignore
   */
  onKeyDown: o.func,
  /**
   * @ignore
   */
  onKeyUp: o.func,
  /**
   * The short hint displayed in the `input` before the user enters a value.
   */
  placeholder: o.string,
  /**
   * It prevents the user from changing the value of the field
   * (not from interacting with the field).
   */
  readOnly: o.bool,
  /**
   * @ignore
   */
  renderSuffix: o.func,
  /**
   * If `true`, the `input` element is required.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  required: o.bool,
  /**
   * Number of rows to display when multiline option is set to true.
   */
  rows: o.oneOfType([o.number, o.string]),
  /**
   * The size of the component.
   */
  size: o.oneOfType([o.oneOf(["medium", "small"]), o.string]),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * This prop is an alias for the `componentsProps` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slotProps: o.shape({
    input: o.object,
    root: o.object
  }),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `components` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slots: o.shape({
    input: o.elementType,
    root: o.elementType
  }),
  /**
   * Start `InputAdornment` for this component.
   */
  startAdornment: o.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * Type of the `input` element. It should be [a valid HTML5 input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types).
   * @default 'text'
   */
  type: o.string,
  /**
   * The value of the `input` element, required for a controlled component.
   */
  value: o.any
});
const Dl = jp;
function qw(e) {
  return Le("MuiInput", e);
}
const jn = w({}, kt, Be("MuiInput", ["root", "underline", "input"]));
function Hw(e) {
  return Le("MuiOutlinedInput", e);
}
const Kw = w({}, kt, Be("MuiOutlinedInput", ["root", "notchedOutline", "input"])), an = Kw;
function Yw(e) {
  return Le("MuiFilledInput", e);
}
const Gw = w({}, kt, Be("MuiFilledInput", ["root", "underline", "input"])), Nt = Gw, Mp = Os(/* @__PURE__ */ k.jsx("path", {
  d: "M7 10l5 5 5-5z"
}), "ArrowDropDown");
function Qw(e) {
  return Le("MuiAutocomplete", e);
}
const Re = Be("MuiAutocomplete", ["root", "expanded", "fullWidth", "focused", "focusVisible", "tag", "tagSizeSmall", "tagSizeMedium", "hasPopupIcon", "hasClearIcon", "inputRoot", "input", "inputFocused", "endAdornment", "clearIndicator", "popupIndicator", "popupIndicatorOpen", "popper", "popperDisablePortal", "paper", "listbox", "loading", "noOptions", "option", "groupLabel", "groupUl"]);
var Fu, Lu;
const Xw = ["autoComplete", "autoHighlight", "autoSelect", "blurOnSelect", "ChipProps", "className", "clearIcon", "clearOnBlur", "clearOnEscape", "clearText", "closeText", "componentsProps", "defaultValue", "disableClearable", "disableCloseOnSelect", "disabled", "disabledItemsFocusable", "disableListWrap", "disablePortal", "filterOptions", "filterSelectedOptions", "forcePopupIcon", "freeSolo", "fullWidth", "getLimitTagsText", "getOptionDisabled", "getOptionKey", "getOptionLabel", "isOptionEqualToValue", "groupBy", "handleHomeEndKeys", "id", "includeInputInList", "inputValue", "limitTags", "ListboxComponent", "ListboxProps", "loading", "loadingText", "multiple", "noOptionsText", "onChange", "onClose", "onHighlightChange", "onInputChange", "onOpen", "open", "openOnFocus", "openText", "options", "PaperComponent", "PopperComponent", "popupIcon", "readOnly", "renderGroup", "renderInput", "renderOption", "renderTags", "selectOnFocus", "size", "slotProps", "value"], Jw = ["ref"], Zw = Ux(), eT = (e) => {
  const {
    classes: t,
    disablePortal: n,
    expanded: r,
    focused: i,
    fullWidth: s,
    hasClearIcon: a,
    hasPopupIcon: l,
    inputFocused: c,
    popupOpen: u,
    size: d
  } = e, f = {
    root: ["root", r && "expanded", i && "focused", s && "fullWidth", a && "hasClearIcon", l && "hasPopupIcon"],
    inputRoot: ["inputRoot"],
    input: ["input", c && "inputFocused"],
    tag: ["tag", `tagSize${ae(d)}`],
    endAdornment: ["endAdornment"],
    clearIndicator: ["clearIndicator"],
    popupIndicator: ["popupIndicator", u && "popupIndicatorOpen"],
    popper: ["popper", n && "popperDisablePortal"],
    paper: ["paper"],
    listbox: ["listbox"],
    loading: ["loading"],
    noOptions: ["noOptions"],
    option: ["option"],
    groupLabel: ["groupLabel"],
    groupUl: ["groupUl"]
  };
  return Ue(f, Qw, t);
}, tT = de("div", {
  name: "MuiAutocomplete",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e, {
      fullWidth: r,
      hasClearIcon: i,
      hasPopupIcon: s,
      inputFocused: a,
      size: l
    } = n;
    return [{
      [`& .${Re.tag}`]: t.tag
    }, {
      [`& .${Re.tag}`]: t[`tagSize${ae(l)}`]
    }, {
      [`& .${Re.inputRoot}`]: t.inputRoot
    }, {
      [`& .${Re.input}`]: t.input
    }, {
      [`& .${Re.input}`]: a && t.inputFocused
    }, t.root, r && t.fullWidth, s && t.hasPopupIcon, i && t.hasClearIcon];
  }
})({
  [`&.${Re.focused} .${Re.clearIndicator}`]: {
    visibility: "visible"
  },
  /* Avoid double tap issue on iOS */
  "@media (pointer: fine)": {
    [`&:hover .${Re.clearIndicator}`]: {
      visibility: "visible"
    }
  },
  [`& .${Re.tag}`]: {
    margin: 3,
    maxWidth: "calc(100% - 6px)"
  },
  [`& .${Re.inputRoot}`]: {
    flexWrap: "wrap",
    [`.${Re.hasPopupIcon}&, .${Re.hasClearIcon}&`]: {
      paddingRight: 30
    },
    [`.${Re.hasPopupIcon}.${Re.hasClearIcon}&`]: {
      paddingRight: 56
    },
    [`& .${Re.input}`]: {
      width: 0,
      minWidth: 30
    }
  },
  [`& .${jn.root}`]: {
    paddingBottom: 1,
    "& .MuiInput-input": {
      padding: "4px 4px 4px 0px"
    }
  },
  [`& .${jn.root}.${kt.sizeSmall}`]: {
    [`& .${jn.input}`]: {
      padding: "2px 4px 3px 0"
    }
  },
  [`& .${an.root}`]: {
    padding: 9,
    [`.${Re.hasPopupIcon}&, .${Re.hasClearIcon}&`]: {
      paddingRight: 39
    },
    [`.${Re.hasPopupIcon}.${Re.hasClearIcon}&`]: {
      paddingRight: 65
    },
    [`& .${Re.input}`]: {
      padding: "7.5px 4px 7.5px 5px"
    },
    [`& .${Re.endAdornment}`]: {
      right: 9
    }
  },
  [`& .${an.root}.${kt.sizeSmall}`]: {
    // Don't specify paddingRight, as it overrides the default value set when there is only
    // one of the popup or clear icon as the specificity is equal so the latter one wins
    paddingTop: 6,
    paddingBottom: 6,
    paddingLeft: 6,
    [`& .${Re.input}`]: {
      padding: "2.5px 4px 2.5px 8px"
    }
  },
  [`& .${Nt.root}`]: {
    paddingTop: 19,
    paddingLeft: 8,
    [`.${Re.hasPopupIcon}&, .${Re.hasClearIcon}&`]: {
      paddingRight: 39
    },
    [`.${Re.hasPopupIcon}.${Re.hasClearIcon}&`]: {
      paddingRight: 65
    },
    [`& .${Nt.input}`]: {
      padding: "7px 4px"
    },
    [`& .${Re.endAdornment}`]: {
      right: 9
    }
  },
  [`& .${Nt.root}.${kt.sizeSmall}`]: {
    paddingBottom: 1,
    [`& .${Nt.input}`]: {
      padding: "2.5px 4px"
    }
  },
  [`& .${kt.hiddenLabel}`]: {
    paddingTop: 8
  },
  [`& .${Nt.root}.${kt.hiddenLabel}`]: {
    paddingTop: 0,
    paddingBottom: 0,
    [`& .${Re.input}`]: {
      paddingTop: 16,
      paddingBottom: 17
    }
  },
  [`& .${Nt.root}.${kt.hiddenLabel}.${kt.sizeSmall}`]: {
    [`& .${Re.input}`]: {
      paddingTop: 8,
      paddingBottom: 9
    }
  },
  [`& .${Re.input}`]: {
    flexGrow: 1,
    textOverflow: "ellipsis",
    opacity: 0
  },
  variants: [{
    props: {
      fullWidth: !0
    },
    style: {
      width: "100%"
    }
  }, {
    props: {
      size: "small"
    },
    style: {
      [`& .${Re.tag}`]: {
        margin: 2,
        maxWidth: "calc(100% - 4px)"
      }
    }
  }, {
    props: {
      inputFocused: !0
    },
    style: {
      [`& .${Re.input}`]: {
        opacity: 1
      }
    }
  }]
}), nT = de("div", {
  name: "MuiAutocomplete",
  slot: "EndAdornment",
  overridesResolver: (e, t) => t.endAdornment
})({
  // We use a position absolute to support wrapping tags.
  position: "absolute",
  right: 0,
  top: "50%",
  transform: "translate(0, -50%)"
}), rT = de(fp, {
  name: "MuiAutocomplete",
  slot: "ClearIndicator",
  overridesResolver: (e, t) => t.clearIndicator
})({
  marginRight: -2,
  padding: 4,
  visibility: "hidden"
}), oT = de(fp, {
  name: "MuiAutocomplete",
  slot: "PopupIndicator",
  overridesResolver: ({
    ownerState: e
  }, t) => w({}, t.popupIndicator, e.popupOpen && t.popupIndicatorOpen)
})({
  padding: 2,
  marginRight: -2,
  variants: [{
    props: {
      popupOpen: !0
    },
    style: {
      transform: "rotate(180deg)"
    }
  }]
}), iT = de(kp, {
  name: "MuiAutocomplete",
  slot: "Popper",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [{
      [`& .${Re.option}`]: t.option
    }, t.popper, n.disablePortal && t.popperDisablePortal];
  }
})(({
  theme: e
}) => ({
  zIndex: (e.vars || e).zIndex.modal,
  variants: [{
    props: {
      disablePortal: !0
    },
    style: {
      position: "absolute"
    }
  }]
})), sT = de(oi, {
  name: "MuiAutocomplete",
  slot: "Paper",
  overridesResolver: (e, t) => t.paper
})(({
  theme: e
}) => w({}, e.typography.body1, {
  overflow: "auto"
})), aT = de("div", {
  name: "MuiAutocomplete",
  slot: "Loading",
  overridesResolver: (e, t) => t.loading
})(({
  theme: e
}) => ({
  color: (e.vars || e).palette.text.secondary,
  padding: "14px 16px"
})), lT = de("div", {
  name: "MuiAutocomplete",
  slot: "NoOptions",
  overridesResolver: (e, t) => t.noOptions
})(({
  theme: e
}) => ({
  color: (e.vars || e).palette.text.secondary,
  padding: "14px 16px"
})), cT = de("div", {
  name: "MuiAutocomplete",
  slot: "Listbox",
  overridesResolver: (e, t) => t.listbox
})(({
  theme: e
}) => ({
  listStyle: "none",
  margin: 0,
  padding: "8px 0",
  maxHeight: "40vh",
  overflow: "auto",
  position: "relative",
  [`& .${Re.option}`]: {
    minHeight: 48,
    display: "flex",
    overflow: "hidden",
    justifyContent: "flex-start",
    alignItems: "center",
    cursor: "pointer",
    paddingTop: 6,
    boxSizing: "border-box",
    outline: "0",
    WebkitTapHighlightColor: "transparent",
    paddingBottom: 6,
    paddingLeft: 16,
    paddingRight: 16,
    [e.breakpoints.up("sm")]: {
      minHeight: "auto"
    },
    [`&.${Re.focused}`]: {
      backgroundColor: (e.vars || e).palette.action.hover,
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: "transparent"
      }
    },
    '&[aria-disabled="true"]': {
      opacity: (e.vars || e).palette.action.disabledOpacity,
      pointerEvents: "none"
    },
    [`&.${Re.focusVisible}`]: {
      backgroundColor: (e.vars || e).palette.action.focus
    },
    '&[aria-selected="true"]': {
      backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})` : ht(e.palette.primary.main, e.palette.action.selectedOpacity),
      [`&.${Re.focused}`]: {
        backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))` : ht(e.palette.primary.main, e.palette.action.selectedOpacity + e.palette.action.hoverOpacity),
        // Reset on touch devices, it doesn't add specificity
        "@media (hover: none)": {
          backgroundColor: (e.vars || e).palette.action.selected
        }
      },
      [`&.${Re.focusVisible}`]: {
        backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))` : ht(e.palette.primary.main, e.palette.action.selectedOpacity + e.palette.action.focusOpacity)
      }
    }
  }
})), uT = de(_w, {
  name: "MuiAutocomplete",
  slot: "GroupLabel",
  overridesResolver: (e, t) => t.groupLabel
})(({
  theme: e
}) => ({
  backgroundColor: (e.vars || e).palette.background.paper,
  top: -8
})), dT = de("ul", {
  name: "MuiAutocomplete",
  slot: "GroupUl",
  overridesResolver: (e, t) => t.groupUl
})({
  padding: 0,
  [`& .${Re.option}`]: {
    paddingLeft: 24
  }
}), Dp = /* @__PURE__ */ v.forwardRef(function(t, n) {
  var r, i, s, a;
  const l = Zw({
    props: t,
    name: "MuiAutocomplete"
  }), {
    autoComplete: c = !1,
    autoHighlight: u = !1,
    autoSelect: d = !1,
    blurOnSelect: f = !1,
    ChipProps: p,
    className: b,
    clearIcon: y = Fu || (Fu = /* @__PURE__ */ k.jsx(SE, {
      fontSize: "small"
    })),
    clearOnBlur: h = !l.freeSolo,
    clearOnEscape: m = !1,
    clearText: g = "Clear",
    closeText: C = "Close",
    componentsProps: E = {},
    defaultValue: O = l.multiple ? [] : null,
    disableClearable: x = !1,
    disableCloseOnSelect: P = !1,
    disabled: R = !1,
    disabledItemsFocusable: N = !1,
    disableListWrap: A = !1,
    disablePortal: L = !1,
    filterSelectedOptions: K = !1,
    forcePopupIcon: B = "auto",
    freeSolo: U = !1,
    fullWidth: z = !1,
    getLimitTagsText: Y = (j) => `+${j}`,
    getOptionLabel: M,
    groupBy: G,
    handleHomeEndKeys: W = !l.freeSolo,
    includeInputInList: le = !1,
    limitTags: I = -1,
    ListboxComponent: X = "ul",
    ListboxProps: se,
    loading: oe = !1,
    loadingText: H = "Loading…",
    multiple: Z = !1,
    noOptionsText: te = "No options",
    openOnFocus: ue = !1,
    openText: J = "Open",
    PaperComponent: ie = oi,
    PopperComponent: he = kp,
    popupIcon: me = Lu || (Lu = /* @__PURE__ */ k.jsx(Mp, {})),
    readOnly: D = !1,
    renderGroup: ye,
    renderInput: Q,
    renderOption: be,
    renderTags: ne,
    selectOnFocus: Xe = !l.freeSolo,
    size: Te = "medium",
    slotProps: We = {}
  } = l, Ve = xe(l, Xw), {
    getRootProps: Pe,
    getInputProps: He,
    getInputLabelProps: qe,
    getPopupIndicatorProps: $e,
    getClearProps: Ze,
    getTagProps: ut,
    getListboxProps: et,
    getOptionProps: we,
    value: re,
    dirty: Qe,
    expanded: xt,
    id: Et,
    popupOpen: Ft,
    focused: fe,
    focusedTag: Ce,
    anchorEl: Ke,
    setAnchorEl: Tt,
    inputValue: _n,
    groupedOptions: bt
  } = vw(w({}, l, {
    componentName: "Autocomplete"
  })), Lt = !x && !R && Qe && !D, pt = (!U || B === !0) && B !== !1, {
    onMouseDown: sn
  } = He(), {
    ref: Jt
  } = se ?? {}, Kn = et(), {
    ref: dr
  } = Kn, Yn = xe(Kn, Jw), Jr = ct(dr, Jt), xn = M || ((j) => {
    var pe;
    return (pe = j.label) != null ? pe : j;
  }), dt = w({}, l, {
    disablePortal: L,
    expanded: xt,
    focused: fe,
    fullWidth: z,
    getOptionLabel: xn,
    hasClearIcon: Lt,
    hasPopupIcon: pt,
    inputFocused: Ce === -1,
    popupOpen: Ft,
    size: Te
  }), it = eT(dt);
  let Ct;
  if (Z && re.length > 0) {
    const j = (pe) => w({
      className: it.tag,
      disabled: R
    }, ut(pe));
    ne ? Ct = ne(re, j, dt) : Ct = re.map((pe, ge) => /* @__PURE__ */ k.jsx(Fw, w({
      label: xn(pe),
      size: Te
    }, j({
      index: ge
    }), p)));
  }
  if (I > -1 && Array.isArray(Ct)) {
    const j = Ct.length - I;
    !fe && j > 0 && (Ct = Ct.splice(0, I), Ct.push(/* @__PURE__ */ k.jsx("span", {
      className: it.tag,
      children: Y(j)
    }, Ct.length)));
  }
  const eo = ye || ((j) => /* @__PURE__ */ k.jsxs("li", {
    children: [/* @__PURE__ */ k.jsx(uT, {
      className: it.groupLabel,
      ownerState: dt,
      component: "div",
      children: j.group
    }), /* @__PURE__ */ k.jsx(dT, {
      className: it.groupUl,
      ownerState: dt,
      children: j.children
    })]
  }, j.key)), no = be || ((j, pe) => /* @__PURE__ */ $h("li", w({}, j, {
    key: j.key
  }), xn(pe))), T = (j, pe) => {
    const ge = we({
      option: j,
      index: pe
    });
    return no(w({}, ge, {
      className: it.option
    }), j, {
      selected: ge["aria-selected"],
      index: pe,
      inputValue: _n
    }, dt);
  }, q = (r = We.clearIndicator) != null ? r : E.clearIndicator, ee = (i = We.paper) != null ? i : E.paper, Ee = (s = We.popper) != null ? s : E.popper, _ = (a = We.popupIndicator) != null ? a : E.popupIndicator, $ = (j) => /* @__PURE__ */ k.jsx(iT, w({
    as: he,
    disablePortal: L,
    style: {
      width: Ke ? Ke.clientWidth : null
    },
    ownerState: dt,
    role: "presentation",
    anchorEl: Ke,
    open: Ft
  }, Ee, {
    className: Oe(it.popper, Ee == null ? void 0 : Ee.className),
    children: /* @__PURE__ */ k.jsx(sT, w({
      ownerState: dt,
      as: ie
    }, ee, {
      className: Oe(it.paper, ee == null ? void 0 : ee.className),
      children: j
    }))
  }));
  let V = null;
  return !oe && bt.length > 0 ? V = $(/* @__PURE__ */ k.jsx(cT, w({
    as: X,
    className: it.listbox,
    ownerState: dt
  }, Yn, se, {
    ref: Jr,
    children: bt.map((j, pe) => G ? eo({
      key: j.key,
      group: j.group,
      children: j.options.map((ge, Se) => T(ge, j.index + Se))
    }) : T(j, pe))
  }))) : oe && bt.length === 0 ? V = $(/* @__PURE__ */ k.jsx(aT, {
    className: it.loading,
    ownerState: dt,
    children: H
  })) : bt.length === 0 && !U && !oe && (V = $(/* @__PURE__ */ k.jsx(lT, {
    className: it.noOptions,
    ownerState: dt,
    role: "presentation",
    onMouseDown: (j) => {
      j.preventDefault();
    },
    children: te
  }))), /* @__PURE__ */ k.jsxs(v.Fragment, {
    children: [/* @__PURE__ */ k.jsx(tT, w({
      ref: n,
      className: Oe(it.root, b),
      ownerState: dt
    }, Pe(Ve), {
      children: Q({
        id: Et,
        disabled: R,
        fullWidth: !0,
        size: Te === "small" ? "small" : void 0,
        InputLabelProps: qe(),
        InputProps: w({
          ref: Tt,
          className: it.inputRoot,
          startAdornment: Ct,
          onClick: (j) => {
            j.target === j.currentTarget && sn(j);
          }
        }, (Lt || pt) && {
          endAdornment: /* @__PURE__ */ k.jsxs(nT, {
            className: it.endAdornment,
            ownerState: dt,
            children: [Lt ? /* @__PURE__ */ k.jsx(rT, w({}, Ze(), {
              "aria-label": g,
              title: g,
              ownerState: dt
            }, q, {
              className: Oe(it.clearIndicator, q == null ? void 0 : q.className),
              children: y
            })) : null, pt ? /* @__PURE__ */ k.jsx(oT, w({}, $e(), {
              disabled: R,
              "aria-label": Ft ? C : J,
              title: Ft ? C : J,
              ownerState: dt
            }, _, {
              className: Oe(it.popupIndicator, _ == null ? void 0 : _.className),
              children: me
            })) : null]
          })
        }),
        inputProps: w({
          className: it.input,
          disabled: R,
          readOnly: D
        }, He())
      })
    })), Ke ? V : null]
  });
});
process.env.NODE_ENV !== "production" && (Dp.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * If `true`, the portion of the selected suggestion that the user hasn't typed,
   * known as the completion string, appears inline after the input cursor in the textbox.
   * The inline completion string is visually highlighted and has a selected state.
   * @default false
   */
  autoComplete: o.bool,
  /**
   * If `true`, the first option is automatically highlighted.
   * @default false
   */
  autoHighlight: o.bool,
  /**
   * If `true`, the selected option becomes the value of the input
   * when the Autocomplete loses focus unless the user chooses
   * a different option or changes the character string in the input.
   *
   * When using the `freeSolo` mode, the typed value will be the input value
   * if the Autocomplete loses focus without highlighting an option.
   * @default false
   */
  autoSelect: o.bool,
  /**
   * Control if the input should be blurred when an option is selected:
   *
   * - `false` the input is not blurred.
   * - `true` the input is always blurred.
   * - `touch` the input is blurred after a touch event.
   * - `mouse` the input is blurred after a mouse event.
   * @default false
   */
  blurOnSelect: o.oneOfType([o.oneOf(["mouse", "touch"]), o.bool]),
  /**
   * Props applied to the [`Chip`](/material-ui/api/chip/) element.
   */
  ChipProps: o.object,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * The icon to display in place of the default clear icon.
   * @default <ClearIcon fontSize="small" />
   */
  clearIcon: o.node,
  /**
   * If `true`, the input's text is cleared on blur if no value is selected.
   *
   * Set it to `true` if you want to help the user enter a new value.
   * Set it to `false` if you want to help the user resume their search.
   * @default !props.freeSolo
   */
  clearOnBlur: o.bool,
  /**
   * If `true`, clear all values when the user presses escape and the popup is closed.
   * @default false
   */
  clearOnEscape: o.bool,
  /**
   * Override the default text for the *clear* icon button.
   *
   * For localization purposes, you can use the provided [translations](/material-ui/guides/localization/).
   * @default 'Clear'
   */
  clearText: o.string,
  /**
   * Override the default text for the *close popup* icon button.
   *
   * For localization purposes, you can use the provided [translations](/material-ui/guides/localization/).
   * @default 'Close'
   */
  closeText: o.string,
  /**
   * The props used for each slot inside.
   * @default {}
   */
  componentsProps: o.shape({
    clearIndicator: o.object,
    paper: o.object,
    popper: o.object,
    popupIndicator: o.object
  }),
  /**
   * The default value. Use when the component is not controlled.
   * @default props.multiple ? [] : null
   */
  defaultValue: yn(o.any, (e) => e.multiple && e.defaultValue !== void 0 && !Array.isArray(e.defaultValue) ? new Error(["MUI: The Autocomplete expects the `defaultValue` prop to be an array when `multiple={true}` or undefined.", `However, ${e.defaultValue} was provided.`].join(`
`)) : null),
  /**
   * If `true`, the input can't be cleared.
   * @default false
   */
  disableClearable: o.bool,
  /**
   * If `true`, the popup won't close when a value is selected.
   * @default false
   */
  disableCloseOnSelect: o.bool,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: o.bool,
  /**
   * If `true`, will allow focus on disabled items.
   * @default false
   */
  disabledItemsFocusable: o.bool,
  /**
   * If `true`, the list box in the popup will not wrap focus.
   * @default false
   */
  disableListWrap: o.bool,
  /**
   * If `true`, the `Popper` content will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: o.bool,
  /**
   * A function that determines the filtered options to be rendered on search.
   *
   * @default createFilterOptions()
   * @param {Value[]} options The options to render.
   * @param {object} state The state of the component.
   * @returns {Value[]}
   */
  filterOptions: o.func,
  /**
   * If `true`, hide the selected options from the list box.
   * @default false
   */
  filterSelectedOptions: o.bool,
  /**
   * Force the visibility display of the popup icon.
   * @default 'auto'
   */
  forcePopupIcon: o.oneOfType([o.oneOf(["auto"]), o.bool]),
  /**
   * If `true`, the Autocomplete is free solo, meaning that the user input is not bound to provided options.
   * @default false
   */
  freeSolo: o.bool,
  /**
   * If `true`, the input will take up the full width of its container.
   * @default false
   */
  fullWidth: o.bool,
  /**
   * The label to display when the tags are truncated (`limitTags`).
   *
   * @param {number} more The number of truncated tags.
   * @returns {ReactNode}
   * @default (more) => `+${more}`
   */
  getLimitTagsText: o.func,
  /**
   * Used to determine the disabled state for a given option.
   *
   * @param {Value} option The option to test.
   * @returns {boolean}
   */
  getOptionDisabled: o.func,
  /**
   * Used to determine the key for a given option.
   * This can be useful when the labels of options are not unique (since labels are used as keys by default).
   *
   * @param {Value} option The option to get the key for.
   * @returns {string | number}
   */
  getOptionKey: o.func,
  /**
   * Used to determine the string value for a given option.
   * It's used to fill the input (and the list box options if `renderOption` is not provided).
   *
   * If used in free solo mode, it must accept both the type of the options and a string.
   *
   * @param {Value} option
   * @returns {string}
   * @default (option) => option.label ?? option
   */
  getOptionLabel: o.func,
  /**
   * If provided, the options will be grouped under the returned string.
   * The groupBy value is also used as the text for group headings when `renderGroup` is not provided.
   *
   * @param {Value} options The options to group.
   * @returns {string}
   */
  groupBy: o.func,
  /**
   * If `true`, the component handles the "Home" and "End" keys when the popup is open.
   * It should move focus to the first option and last option, respectively.
   * @default !props.freeSolo
   */
  handleHomeEndKeys: o.bool,
  /**
   * This prop is used to help implement the accessibility logic.
   * If you don't provide an id it will fall back to a randomly generated one.
   */
  id: o.string,
  /**
   * If `true`, the highlight can move to the input.
   * @default false
   */
  includeInputInList: o.bool,
  /**
   * The input value.
   */
  inputValue: o.string,
  /**
   * Used to determine if the option represents the given value.
   * Uses strict equality by default.
   * ⚠️ Both arguments need to be handled, an option can only match with one value.
   *
   * @param {Value} option The option to test.
   * @param {Value} value The value to test against.
   * @returns {boolean}
   */
  isOptionEqualToValue: o.func,
  /**
   * The maximum number of tags that will be visible when not focused.
   * Set `-1` to disable the limit.
   * @default -1
   */
  limitTags: xl,
  /**
   * The component used to render the listbox.
   * @default 'ul'
   */
  ListboxComponent: o.elementType,
  /**
   * Props applied to the Listbox element.
   */
  ListboxProps: o.object,
  /**
   * If `true`, the component is in a loading state.
   * This shows the `loadingText` in place of suggestions (only if there are no suggestions to show, for example `options` are empty).
   * @default false
   */
  loading: o.bool,
  /**
   * Text to display when in a loading state.
   *
   * For localization purposes, you can use the provided [translations](/material-ui/guides/localization/).
   * @default 'Loading…'
   */
  loadingText: o.node,
  /**
   * If `true`, `value` must be an array and the menu will support multiple selections.
   * @default false
   */
  multiple: o.bool,
  /**
   * Text to display when there are no options.
   *
   * For localization purposes, you can use the provided [translations](/material-ui/guides/localization/).
   * @default 'No options'
   */
  noOptionsText: o.node,
  /**
   * Callback fired when the value changes.
   *
   * @param {React.SyntheticEvent} event The event source of the callback.
   * @param {Value|Value[]} value The new value of the component.
   * @param {string} reason One of "createOption", "selectOption", "removeOption", "blur" or "clear".
   * @param {string} [details]
   */
  onChange: o.func,
  /**
   * Callback fired when the popup requests to be closed.
   * Use in controlled mode (see open).
   *
   * @param {React.SyntheticEvent} event The event source of the callback.
   * @param {string} reason Can be: `"toggleInput"`, `"escape"`, `"selectOption"`, `"removeOption"`, `"blur"`.
   */
  onClose: o.func,
  /**
   * Callback fired when the highlight option changes.
   *
   * @param {React.SyntheticEvent} event The event source of the callback.
   * @param {Value} option The highlighted option.
   * @param {string} reason Can be: `"keyboard"`, `"auto"`, `"mouse"`, `"touch"`.
   */
  onHighlightChange: o.func,
  /**
   * Callback fired when the input value changes.
   *
   * @param {React.SyntheticEvent} event The event source of the callback.
   * @param {string} value The new value of the text input.
   * @param {string} reason Can be: `"input"` (user input), `"reset"` (programmatic change), `"clear"`.
   */
  onInputChange: o.func,
  /**
   * @ignore
   */
  onKeyDown: o.func,
  /**
   * Callback fired when the popup requests to be opened.
   * Use in controlled mode (see open).
   *
   * @param {React.SyntheticEvent} event The event source of the callback.
   */
  onOpen: o.func,
  /**
   * If `true`, the component is shown.
   */
  open: o.bool,
  /**
   * If `true`, the popup will open on input focus.
   * @default false
   */
  openOnFocus: o.bool,
  /**
   * Override the default text for the *open popup* icon button.
   *
   * For localization purposes, you can use the provided [translations](/material-ui/guides/localization/).
   * @default 'Open'
   */
  openText: o.string,
  /**
   * Array of options.
   */
  options: o.array.isRequired,
  /**
   * The component used to render the body of the popup.
   * @default Paper
   */
  PaperComponent: o.elementType,
  /**
   * The component used to position the popup.
   * @default Popper
   */
  PopperComponent: o.elementType,
  /**
   * The icon to display in place of the default popup icon.
   * @default <ArrowDropDownIcon />
   */
  popupIcon: o.node,
  /**
   * If `true`, the component becomes readonly. It is also supported for multiple tags where the tag cannot be deleted.
   * @default false
   */
  readOnly: o.bool,
  /**
   * Render the group.
   *
   * @param {AutocompleteRenderGroupParams} params The group to render.
   * @returns {ReactNode}
   */
  renderGroup: o.func,
  /**
   * Render the input.
   *
   * @param {object} params
   * @returns {ReactNode}
   */
  renderInput: o.func.isRequired,
  /**
   * Render the option, use `getOptionLabel` by default.
   *
   * @param {object} props The props to apply on the li element.
   * @param {Value} option The option to render.
   * @param {object} state The state of each option.
   * @param {object} ownerState The state of the Autocomplete component.
   * @returns {ReactNode}
   */
  renderOption: o.func,
  /**
   * Render the selected value.
   *
   * @param {Value[]} value The `value` provided to the component.
   * @param {function} getTagProps A tag props getter.
   * @param {object} ownerState The state of the Autocomplete component.
   * @returns {ReactNode}
   */
  renderTags: o.func,
  /**
   * If `true`, the input's text is selected on focus.
   * It helps the user clear the selected value.
   * @default !props.freeSolo
   */
  selectOnFocus: o.bool,
  /**
   * The size of the component.
   * @default 'medium'
   */
  size: o.oneOfType([o.oneOf(["small", "medium"]), o.string]),
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: o.shape({
    clearIndicator: o.object,
    paper: o.object,
    popper: o.object,
    popupIndicator: o.object
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * The value of the autocomplete.
   *
   * The value must have reference equality with the option in order to be selected.
   * You can customize the equality behavior with the `isOptionEqualToValue` prop.
   */
  value: yn(o.any, (e) => e.multiple && e.value !== void 0 && !Array.isArray(e.value) ? new Error(["MUI: The Autocomplete expects the `value` prop to be an array when `multiple={true}` or undefined.", `However, ${e.value} was provided.`].join(`
`)) : null)
});
const fT = Dp, pT = ["addEndListener", "appear", "children", "easing", "in", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "style", "timeout", "TransitionComponent"], hT = {
  entering: {
    opacity: 1
  },
  entered: {
    opacity: 1
  }
}, Fp = /* @__PURE__ */ v.forwardRef(function(t, n) {
  const r = ni(), i = {
    enter: r.transitions.duration.enteringScreen,
    exit: r.transitions.duration.leavingScreen
  }, {
    addEndListener: s,
    appear: a = !0,
    children: l,
    easing: c,
    in: u,
    onEnter: d,
    onEntered: f,
    onEntering: p,
    onExit: b,
    onExited: y,
    onExiting: h,
    style: m,
    timeout: g = i,
    // eslint-disable-next-line react/prop-types
    TransitionComponent: C = rp
  } = t, E = xe(t, pT), O = v.useRef(null), x = ct(O, l.ref, n), P = (z) => (Y) => {
    if (z) {
      const M = O.current;
      Y === void 0 ? z(M) : z(M, Y);
    }
  }, R = P(p), N = P((z, Y) => {
    op(z);
    const M = Vi({
      style: m,
      timeout: g,
      easing: c
    }, {
      mode: "enter"
    });
    z.style.webkitTransition = r.transitions.create("opacity", M), z.style.transition = r.transitions.create("opacity", M), d && d(z, Y);
  }), A = P(f), L = P(h), K = P((z) => {
    const Y = Vi({
      style: m,
      timeout: g,
      easing: c
    }, {
      mode: "exit"
    });
    z.style.webkitTransition = r.transitions.create("opacity", Y), z.style.transition = r.transitions.create("opacity", Y), b && b(z);
  }), B = P(y), U = (z) => {
    s && s(O.current, z);
  };
  return /* @__PURE__ */ k.jsx(C, w({
    appear: a,
    in: u,
    nodeRef: O,
    onEnter: N,
    onEntered: A,
    onEntering: R,
    onExit: K,
    onExited: B,
    onExiting: L,
    addEndListener: U,
    timeout: g
  }, E, {
    children: (z, Y) => /* @__PURE__ */ v.cloneElement(l, w({
      style: w({
        opacity: 0,
        visibility: z === "exited" && !u ? "hidden" : void 0
      }, hT[z], m, l.props.style),
      ref: x
    }, Y))
  }));
});
process.env.NODE_ENV !== "production" && (Fp.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Add a custom transition end trigger. Called with the transitioning DOM
   * node and a done callback. Allows for more fine grained transition end
   * logic. Note: Timeouts are still used as a fallback if provided.
   */
  addEndListener: o.func,
  /**
   * Perform the enter transition when it first mounts if `in` is also `true`.
   * Set this to `false` to disable this behavior.
   * @default true
   */
  appear: o.bool,
  /**
   * A single child content element.
   */
  children: bs.isRequired,
  /**
   * The transition timing function.
   * You may specify a single easing or a object containing enter and exit values.
   */
  easing: o.oneOfType([o.shape({
    enter: o.string,
    exit: o.string
  }), o.string]),
  /**
   * If `true`, the component will transition in.
   */
  in: o.bool,
  /**
   * @ignore
   */
  onEnter: o.func,
  /**
   * @ignore
   */
  onEntered: o.func,
  /**
   * @ignore
   */
  onEntering: o.func,
  /**
   * @ignore
   */
  onExit: o.func,
  /**
   * @ignore
   */
  onExited: o.func,
  /**
   * @ignore
   */
  onExiting: o.func,
  /**
   * @ignore
   */
  style: o.object,
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   * @default {
   *   enter: theme.transitions.duration.enteringScreen,
   *   exit: theme.transitions.duration.leavingScreen,
   * }
   */
  timeout: o.oneOfType([o.number, o.shape({
    appear: o.number,
    enter: o.number,
    exit: o.number
  })])
});
const Lp = Fp;
function mT(e) {
  return Le("MuiBackdrop", e);
}
Be("MuiBackdrop", ["root", "invisible"]);
const yT = ["children", "className", "component", "components", "componentsProps", "invisible", "open", "slotProps", "slots", "TransitionComponent", "transitionDuration"], bT = (e) => {
  const {
    classes: t,
    invisible: n
  } = e;
  return Ue({
    root: ["root", n && "invisible"]
  }, mT, t);
}, vT = de("div", {
  name: "MuiBackdrop",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.invisible && t.invisible];
  }
})(({
  ownerState: e
}) => w({
  position: "fixed",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  right: 0,
  bottom: 0,
  top: 0,
  left: 0,
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  WebkitTapHighlightColor: "transparent"
}, e.invisible && {
  backgroundColor: "transparent"
})), Bp = /* @__PURE__ */ v.forwardRef(function(t, n) {
  var r, i, s;
  const a = ze({
    props: t,
    name: "MuiBackdrop"
  }), {
    children: l,
    className: c,
    component: u = "div",
    components: d = {},
    componentsProps: f = {},
    invisible: p = !1,
    open: b,
    slotProps: y = {},
    slots: h = {},
    TransitionComponent: m = Lp,
    transitionDuration: g
  } = a, C = xe(a, yT), E = w({}, a, {
    component: u,
    invisible: p
  }), O = bT(E), x = (r = y.root) != null ? r : f.root;
  return /* @__PURE__ */ k.jsx(m, w({
    in: b,
    timeout: g
  }, C, {
    children: /* @__PURE__ */ k.jsx(vT, w({
      "aria-hidden": !0
    }, x, {
      as: (i = (s = h.root) != null ? s : d.Root) != null ? i : u,
      className: Oe(O.root, c, x == null ? void 0 : x.className),
      ownerState: w({}, E, x == null ? void 0 : x.ownerState),
      classes: O,
      ref: n,
      children: l
    }))
  }));
});
process.env.NODE_ENV !== "production" && (Bp.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: o.elementType,
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `slots` prop.
   * It's recommended to use the `slots` prop instead.
   *
   * @default {}
   */
  components: o.shape({
    Root: o.elementType
  }),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * This prop is an alias for the `slotProps` prop.
   * It's recommended to use the `slotProps` prop instead, as `componentsProps` will be deprecated in the future.
   *
   * @default {}
   */
  componentsProps: o.shape({
    root: o.object
  }),
  /**
   * If `true`, the backdrop is invisible.
   * It can be used when rendering a popover or a custom select component.
   * @default false
   */
  invisible: o.bool,
  /**
   * If `true`, the component is shown.
   */
  open: o.bool.isRequired,
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * This prop is an alias for the `componentsProps` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slotProps: o.shape({
    root: o.object
  }),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `components` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slots: o.shape({
    root: o.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * The component used for the transition.
   * [Follow this guide](/material-ui/transitions/#transitioncomponent-prop) to learn more about the requirements for this component.
   * @default Fade
   */
  TransitionComponent: o.elementType,
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   */
  transitionDuration: o.oneOfType([o.number, o.shape({
    appear: o.number,
    enter: o.number,
    exit: o.number
  })])
});
const Vp = Bp, gT = Be("MuiBox", ["root"]), xT = gT, ET = Jf(), Up = Hg({
  themeId: Go,
  defaultTheme: ET,
  defaultClassName: xT.root,
  generateClassName: bl.generate
});
process.env.NODE_ENV !== "production" && (Up.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * @ignore
   */
  children: o.node,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: o.elementType,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object])
});
const OT = Up;
function wT(e) {
  return Le("MuiCircularProgress", e);
}
Be("MuiCircularProgress", ["root", "determinate", "indeterminate", "colorPrimary", "colorSecondary", "svg", "circle", "circleDeterminate", "circleIndeterminate", "circleDisableShrink"]);
const TT = ["className", "color", "disableShrink", "size", "style", "thickness", "value", "variant"];
let _s = (e) => e, Bu, Vu, Uu, zu;
const Nn = 44, CT = Kr(Bu || (Bu = _s`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`)), ST = Kr(Vu || (Vu = _s`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -125px;
  }
`)), RT = (e) => {
  const {
    classes: t,
    variant: n,
    color: r,
    disableShrink: i
  } = e, s = {
    root: ["root", n, `color${ae(r)}`],
    svg: ["svg"],
    circle: ["circle", `circle${ae(n)}`, i && "circleDisableShrink"]
  };
  return Ue(s, wT, t);
}, PT = de("span", {
  name: "MuiCircularProgress",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[n.variant], t[`color${ae(n.color)}`]];
  }
})(({
  ownerState: e,
  theme: t
}) => w({
  display: "inline-block"
}, e.variant === "determinate" && {
  transition: t.transitions.create("transform")
}, e.color !== "inherit" && {
  color: (t.vars || t).palette[e.color].main
}), ({
  ownerState: e
}) => e.variant === "indeterminate" && as(Uu || (Uu = _s`
      animation: ${0} 1.4s linear infinite;
    `), CT)), $T = de("svg", {
  name: "MuiCircularProgress",
  slot: "Svg",
  overridesResolver: (e, t) => t.svg
})({
  display: "block"
  // Keeps the progress centered
}), _T = de("circle", {
  name: "MuiCircularProgress",
  slot: "Circle",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.circle, t[`circle${ae(n.variant)}`], n.disableShrink && t.circleDisableShrink];
  }
})(({
  ownerState: e,
  theme: t
}) => w({
  stroke: "currentColor"
}, e.variant === "determinate" && {
  transition: t.transitions.create("stroke-dashoffset")
}, e.variant === "indeterminate" && {
  // Some default value that looks fine waiting for the animation to kicks in.
  strokeDasharray: "80px, 200px",
  strokeDashoffset: 0
  // Add the unit to fix a Edge 16 and below bug.
}), ({
  ownerState: e
}) => e.variant === "indeterminate" && !e.disableShrink && as(zu || (zu = _s`
      animation: ${0} 1.4s ease-in-out infinite;
    `), ST)), zp = /* @__PURE__ */ v.forwardRef(function(t, n) {
  const r = ze({
    props: t,
    name: "MuiCircularProgress"
  }), {
    className: i,
    color: s = "primary",
    disableShrink: a = !1,
    size: l = 40,
    style: c,
    thickness: u = 3.6,
    value: d = 0,
    variant: f = "indeterminate"
  } = r, p = xe(r, TT), b = w({}, r, {
    color: s,
    disableShrink: a,
    size: l,
    thickness: u,
    value: d,
    variant: f
  }), y = RT(b), h = {}, m = {}, g = {};
  if (f === "determinate") {
    const C = 2 * Math.PI * ((Nn - u) / 2);
    h.strokeDasharray = C.toFixed(3), g["aria-valuenow"] = Math.round(d), h.strokeDashoffset = `${((100 - d) / 100 * C).toFixed(3)}px`, m.transform = "rotate(-90deg)";
  }
  return /* @__PURE__ */ k.jsx(PT, w({
    className: Oe(y.root, i),
    style: w({
      width: l,
      height: l
    }, m, c),
    ownerState: b,
    ref: n,
    role: "progressbar"
  }, g, p, {
    children: /* @__PURE__ */ k.jsx($T, {
      className: y.svg,
      ownerState: b,
      viewBox: `${Nn / 2} ${Nn / 2} ${Nn} ${Nn}`,
      children: /* @__PURE__ */ k.jsx(_T, {
        className: y.circle,
        style: h,
        ownerState: b,
        cx: Nn,
        cy: Nn,
        r: (Nn - u) / 2,
        fill: "none",
        strokeWidth: u
      })
    })
  }));
});
process.env.NODE_ENV !== "production" && (zp.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'primary'
   */
  color: o.oneOfType([o.oneOf(["inherit", "primary", "secondary", "error", "info", "success", "warning"]), o.string]),
  /**
   * If `true`, the shrink animation is disabled.
   * This only works if variant is `indeterminate`.
   * @default false
   */
  disableShrink: yn(o.bool, (e) => e.disableShrink && e.variant && e.variant !== "indeterminate" ? new Error("MUI: You have provided the `disableShrink` prop with a variant other than `indeterminate`. This will have no effect.") : null),
  /**
   * The size of the component.
   * If using a number, the pixel unit is assumed.
   * If using a string, you need to provide the CSS unit, for example '3rem'.
   * @default 40
   */
  size: o.oneOfType([o.number, o.string]),
  /**
   * @ignore
   */
  style: o.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * The thickness of the circle.
   * @default 3.6
   */
  thickness: o.number,
  /**
   * The value of the progress indicator for the determinate variant.
   * Value between 0 and 100.
   * @default 0
   */
  value: o.number,
  /**
   * The variant to use.
   * Use indeterminate when there is no progress value.
   * @default 'indeterminate'
   */
  variant: o.oneOf(["determinate", "indeterminate"])
});
const kT = zp;
function NT(e) {
  return Le("MuiModal", e);
}
Be("MuiModal", ["root", "hidden", "backdrop"]);
const IT = ["BackdropComponent", "BackdropProps", "classes", "className", "closeAfterTransition", "children", "container", "component", "components", "componentsProps", "disableAutoFocus", "disableEnforceFocus", "disableEscapeKeyDown", "disablePortal", "disableRestoreFocus", "disableScrollLock", "hideBackdrop", "keepMounted", "onBackdropClick", "onClose", "onTransitionEnter", "onTransitionExited", "open", "slotProps", "slots", "theme"], AT = (e) => {
  const {
    open: t,
    exited: n,
    classes: r
  } = e;
  return Ue({
    root: ["root", !t && n && "hidden"],
    backdrop: ["backdrop"]
  }, NT, r);
}, jT = de("div", {
  name: "MuiModal",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, !n.open && n.exited && t.hidden];
  }
})(({
  theme: e,
  ownerState: t
}) => w({
  position: "fixed",
  zIndex: (e.vars || e).zIndex.modal,
  right: 0,
  bottom: 0,
  top: 0,
  left: 0
}, !t.open && t.exited && {
  visibility: "hidden"
})), MT = de(Vp, {
  name: "MuiModal",
  slot: "Backdrop",
  overridesResolver: (e, t) => t.backdrop
})({
  zIndex: -1
}), Wp = /* @__PURE__ */ v.forwardRef(function(t, n) {
  var r, i, s, a, l, c;
  const u = ze({
    name: "MuiModal",
    props: t
  }), {
    BackdropComponent: d = MT,
    BackdropProps: f,
    className: p,
    closeAfterTransition: b = !1,
    children: y,
    container: h,
    component: m,
    components: g = {},
    componentsProps: C = {},
    disableAutoFocus: E = !1,
    disableEnforceFocus: O = !1,
    disableEscapeKeyDown: x = !1,
    disablePortal: P = !1,
    disableRestoreFocus: R = !1,
    disableScrollLock: N = !1,
    hideBackdrop: A = !1,
    keepMounted: L = !1,
    onBackdropClick: K,
    open: B,
    slotProps: U,
    slots: z
    // eslint-disable-next-line react/prop-types
  } = u, Y = xe(u, IT), M = w({}, u, {
    closeAfterTransition: b,
    disableAutoFocus: E,
    disableEnforceFocus: O,
    disableEscapeKeyDown: x,
    disablePortal: P,
    disableRestoreFocus: R,
    disableScrollLock: N,
    hideBackdrop: A,
    keepMounted: L
  }), {
    getRootProps: G,
    getBackdropProps: W,
    getTransitionProps: le,
    portalRef: I,
    isTopModal: X,
    exited: se,
    hasTransition: oe
  } = XE(w({}, M, {
    rootRef: n
  })), H = w({}, M, {
    exited: se
  }), Z = AT(H), te = {};
  if (y.props.tabIndex === void 0 && (te.tabIndex = "-1"), oe) {
    const {
      onEnter: ye,
      onExited: Q
    } = le();
    te.onEnter = ye, te.onExited = Q;
  }
  const ue = (r = (i = z == null ? void 0 : z.root) != null ? i : g.Root) != null ? r : jT, J = (s = (a = z == null ? void 0 : z.backdrop) != null ? a : g.Backdrop) != null ? s : d, ie = (l = U == null ? void 0 : U.root) != null ? l : C.root, he = (c = U == null ? void 0 : U.backdrop) != null ? c : C.backdrop, me = lr({
    elementType: ue,
    externalSlotProps: ie,
    externalForwardedProps: Y,
    getSlotProps: G,
    additionalProps: {
      ref: n,
      as: m
    },
    ownerState: H,
    className: Oe(p, ie == null ? void 0 : ie.className, Z == null ? void 0 : Z.root, !H.open && H.exited && (Z == null ? void 0 : Z.hidden))
  }), D = lr({
    elementType: J,
    externalSlotProps: he,
    additionalProps: f,
    getSlotProps: (ye) => W(w({}, ye, {
      onClick: (Q) => {
        K && K(Q), ye != null && ye.onClick && ye.onClick(Q);
      }
    })),
    className: Oe(he == null ? void 0 : he.className, f == null ? void 0 : f.className, Z == null ? void 0 : Z.backdrop),
    ownerState: H
  });
  return !L && !B && (!oe || se) ? null : /* @__PURE__ */ k.jsx($o, {
    ref: I,
    container: h,
    disablePortal: P,
    children: /* @__PURE__ */ k.jsxs(ue, w({}, me, {
      children: [!A && d ? /* @__PURE__ */ k.jsx(J, w({}, D)) : null, /* @__PURE__ */ k.jsx(zi, {
        disableEnforceFocus: O,
        disableAutoFocus: E,
        disableRestoreFocus: R,
        isEnabled: X,
        open: B,
        children: /* @__PURE__ */ v.cloneElement(y, te)
      })]
    }))
  });
});
process.env.NODE_ENV !== "production" && (Wp.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A backdrop component. This prop enables custom backdrop rendering.
   * @deprecated Use `slots.backdrop` instead. While this prop currently works, it will be removed in the next major version.
   * Use the `slots.backdrop` prop to make your application ready for the next version of Material UI.
   * @default styled(Backdrop, {
   *   name: 'MuiModal',
   *   slot: 'Backdrop',
   *   overridesResolver: (props, styles) => {
   *     return styles.backdrop;
   *   },
   * })({
   *   zIndex: -1,
   * })
   */
  BackdropComponent: o.elementType,
  /**
   * Props applied to the [`Backdrop`](/material-ui/api/backdrop/) element.
   * @deprecated Use `slotProps.backdrop` instead.
   */
  BackdropProps: o.object,
  /**
   * A single child content element.
   */
  children: bs.isRequired,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * When set to true the Modal waits until a nested Transition is completed before closing.
   * @default false
   */
  closeAfterTransition: o.bool,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: o.elementType,
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `slots` prop.
   * It's recommended to use the `slots` prop instead.
   *
   * @default {}
   */
  components: o.shape({
    Backdrop: o.elementType,
    Root: o.elementType
  }),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * This prop is an alias for the `slotProps` prop.
   * It's recommended to use the `slotProps` prop instead, as `componentsProps` will be deprecated in the future.
   *
   * @default {}
   */
  componentsProps: o.shape({
    backdrop: o.oneOfType([o.func, o.object]),
    root: o.oneOfType([o.func, o.object])
  }),
  /**
   * An HTML element or function that returns one.
   * The `container` will have the portal children appended to it.
   *
   * You can also provide a callback, which is called in a React layout effect.
   * This lets you set the container from a ref, and also makes server-side rendering possible.
   *
   * By default, it uses the body of the top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: o.oneOfType([Sn, o.func]),
  /**
   * If `true`, the modal will not automatically shift focus to itself when it opens, and
   * replace it to the last focused element when it closes.
   * This also works correctly with any modal children that have the `disableAutoFocus` prop.
   *
   * Generally this should never be set to `true` as it makes the modal less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableAutoFocus: o.bool,
  /**
   * If `true`, the modal will not prevent focus from leaving the modal while open.
   *
   * Generally this should never be set to `true` as it makes the modal less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableEnforceFocus: o.bool,
  /**
   * If `true`, hitting escape will not fire the `onClose` callback.
   * @default false
   */
  disableEscapeKeyDown: o.bool,
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: o.bool,
  /**
   * If `true`, the modal will not restore focus to previously focused element once
   * modal is hidden or unmounted.
   * @default false
   */
  disableRestoreFocus: o.bool,
  /**
   * Disable the scroll lock behavior.
   * @default false
   */
  disableScrollLock: o.bool,
  /**
   * If `true`, the backdrop is not rendered.
   * @default false
   */
  hideBackdrop: o.bool,
  /**
   * Always keep the children in the DOM.
   * This prop can be useful in SEO situation or
   * when you want to maximize the responsiveness of the Modal.
   * @default false
   */
  keepMounted: o.bool,
  /**
   * Callback fired when the backdrop is clicked.
   * @deprecated Use the `onClose` prop with the `reason` argument to handle the `backdropClick` events.
   */
  onBackdropClick: o.func,
  /**
   * Callback fired when the component requests to be closed.
   * The `reason` parameter can optionally be used to control the response to `onClose`.
   *
   * @param {object} event The event source of the callback.
   * @param {string} reason Can be: `"escapeKeyDown"`, `"backdropClick"`.
   */
  onClose: o.func,
  /**
   * A function called when a transition enters.
   */
  onTransitionEnter: o.func,
  /**
   * A function called when a transition has exited.
   */
  onTransitionExited: o.func,
  /**
   * If `true`, the component is shown.
   */
  open: o.bool.isRequired,
  /**
   * The props used for each slot inside the Modal.
   * @default {}
   */
  slotProps: o.shape({
    backdrop: o.oneOfType([o.func, o.object]),
    root: o.oneOfType([o.func, o.object])
  }),
  /**
   * The components used for each slot inside the Modal.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slots: o.shape({
    backdrop: o.elementType,
    root: o.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object])
});
const qp = Wp;
function DT(e) {
  return Le("MuiDialog", e);
}
const FT = Be("MuiDialog", ["root", "scrollPaper", "scrollBody", "container", "paper", "paperScrollPaper", "paperScrollBody", "paperWidthFalse", "paperWidthXs", "paperWidthSm", "paperWidthMd", "paperWidthLg", "paperWidthXl", "paperFullWidth", "paperFullScreen"]), Zs = FT, Hp = /* @__PURE__ */ v.createContext({});
process.env.NODE_ENV !== "production" && (Hp.displayName = "DialogContext");
const Kp = Hp, LT = ["aria-describedby", "aria-labelledby", "BackdropComponent", "BackdropProps", "children", "className", "disableEscapeKeyDown", "fullScreen", "fullWidth", "maxWidth", "onBackdropClick", "onClose", "open", "PaperComponent", "PaperProps", "scroll", "TransitionComponent", "transitionDuration", "TransitionProps"], BT = de(Vp, {
  name: "MuiDialog",
  slot: "Backdrop",
  overrides: (e, t) => t.backdrop
})({
  // Improve scrollable dialog support.
  zIndex: -1
}), VT = (e) => {
  const {
    classes: t,
    scroll: n,
    maxWidth: r,
    fullWidth: i,
    fullScreen: s
  } = e, a = {
    root: ["root"],
    container: ["container", `scroll${ae(n)}`],
    paper: ["paper", `paperScroll${ae(n)}`, `paperWidth${ae(String(r))}`, i && "paperFullWidth", s && "paperFullScreen"]
  };
  return Ue(a, DT, t);
}, UT = de(qp, {
  name: "MuiDialog",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({
  "@media print": {
    // Use !important to override the Modal inline-style.
    position: "absolute !important"
  }
}), zT = de("div", {
  name: "MuiDialog",
  slot: "Container",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.container, t[`scroll${ae(n.scroll)}`]];
  }
})(({
  ownerState: e
}) => w({
  height: "100%",
  "@media print": {
    height: "auto"
  },
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0
}, e.scroll === "paper" && {
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
}, e.scroll === "body" && {
  overflowY: "auto",
  overflowX: "hidden",
  textAlign: "center",
  "&::after": {
    content: '""',
    display: "inline-block",
    verticalAlign: "middle",
    height: "100%",
    width: "0"
  }
})), WT = de(oi, {
  name: "MuiDialog",
  slot: "Paper",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.paper, t[`scrollPaper${ae(n.scroll)}`], t[`paperWidth${ae(String(n.maxWidth))}`], n.fullWidth && t.paperFullWidth, n.fullScreen && t.paperFullScreen];
  }
})(({
  theme: e,
  ownerState: t
}) => w({
  margin: 32,
  position: "relative",
  overflowY: "auto",
  // Fix IE11 issue, to remove at some point.
  "@media print": {
    overflowY: "visible",
    boxShadow: "none"
  }
}, t.scroll === "paper" && {
  display: "flex",
  flexDirection: "column",
  maxHeight: "calc(100% - 64px)"
}, t.scroll === "body" && {
  display: "inline-block",
  verticalAlign: "middle",
  textAlign: "left"
  // 'initial' doesn't work on IE11
}, !t.maxWidth && {
  maxWidth: "calc(100% - 64px)"
}, t.maxWidth === "xs" && {
  maxWidth: e.breakpoints.unit === "px" ? Math.max(e.breakpoints.values.xs, 444) : `max(${e.breakpoints.values.xs}${e.breakpoints.unit}, 444px)`,
  [`&.${Zs.paperScrollBody}`]: {
    [e.breakpoints.down(Math.max(e.breakpoints.values.xs, 444) + 32 * 2)]: {
      maxWidth: "calc(100% - 64px)"
    }
  }
}, t.maxWidth && t.maxWidth !== "xs" && {
  maxWidth: `${e.breakpoints.values[t.maxWidth]}${e.breakpoints.unit}`,
  [`&.${Zs.paperScrollBody}`]: {
    [e.breakpoints.down(e.breakpoints.values[t.maxWidth] + 32 * 2)]: {
      maxWidth: "calc(100% - 64px)"
    }
  }
}, t.fullWidth && {
  width: "calc(100% - 64px)"
}, t.fullScreen && {
  margin: 0,
  width: "100%",
  maxWidth: "100%",
  height: "100%",
  maxHeight: "none",
  borderRadius: 0,
  [`&.${Zs.paperScrollBody}`]: {
    margin: 0,
    maxWidth: "100%"
  }
})), Yp = /* @__PURE__ */ v.forwardRef(function(t, n) {
  const r = ze({
    props: t,
    name: "MuiDialog"
  }), i = ni(), s = {
    enter: i.transitions.duration.enteringScreen,
    exit: i.transitions.duration.leavingScreen
  }, {
    "aria-describedby": a,
    "aria-labelledby": l,
    BackdropComponent: c,
    BackdropProps: u,
    children: d,
    className: f,
    disableEscapeKeyDown: p = !1,
    fullScreen: b = !1,
    fullWidth: y = !1,
    maxWidth: h = "sm",
    onBackdropClick: m,
    onClose: g,
    open: C,
    PaperComponent: E = oi,
    PaperProps: O = {},
    scroll: x = "paper",
    TransitionComponent: P = Lp,
    transitionDuration: R = s,
    TransitionProps: N
  } = r, A = xe(r, LT), L = w({}, r, {
    disableEscapeKeyDown: p,
    fullScreen: b,
    fullWidth: y,
    maxWidth: h,
    scroll: x
  }), K = VT(L), B = v.useRef(), U = (G) => {
    B.current = G.target === G.currentTarget;
  }, z = (G) => {
    B.current && (B.current = null, m && m(G), g && g(G, "backdropClick"));
  }, Y = ti(l), M = v.useMemo(() => ({
    titleId: Y
  }), [Y]);
  return /* @__PURE__ */ k.jsx(UT, w({
    className: Oe(K.root, f),
    closeAfterTransition: !0,
    components: {
      Backdrop: BT
    },
    componentsProps: {
      backdrop: w({
        transitionDuration: R,
        as: c
      }, u)
    },
    disableEscapeKeyDown: p,
    onClose: g,
    open: C,
    ref: n,
    onClick: z,
    ownerState: L
  }, A, {
    children: /* @__PURE__ */ k.jsx(P, w({
      appear: !0,
      in: C,
      timeout: R,
      role: "presentation"
    }, N, {
      children: /* @__PURE__ */ k.jsx(zT, {
        className: Oe(K.container),
        onMouseDown: U,
        ownerState: L,
        children: /* @__PURE__ */ k.jsx(WT, w({
          as: E,
          elevation: 24,
          role: "dialog",
          "aria-describedby": a,
          "aria-labelledby": Y
        }, O, {
          className: Oe(K.paper, O.className),
          ownerState: L,
          children: /* @__PURE__ */ k.jsx(Kp.Provider, {
            value: M,
            children: d
          })
        }))
      })
    }))
  }));
});
process.env.NODE_ENV !== "production" && (Yp.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The id(s) of the element(s) that describe the dialog.
   */
  "aria-describedby": o.string,
  /**
   * The id(s) of the element(s) that label the dialog.
   */
  "aria-labelledby": o.string,
  /**
   * A backdrop component. This prop enables custom backdrop rendering.
   * @deprecated Use `slots.backdrop` instead. While this prop currently works, it will be removed in the next major version.
   * Use the `slots.backdrop` prop to make your application ready for the next version of Material UI.
   * @default styled(Backdrop, {
   *   name: 'MuiModal',
   *   slot: 'Backdrop',
   *   overridesResolver: (props, styles) => {
   *     return styles.backdrop;
   *   },
   * })({
   *   zIndex: -1,
   * })
   */
  BackdropComponent: o.elementType,
  /**
   * @ignore
   */
  BackdropProps: o.object,
  /**
   * Dialog children, usually the included sub-components.
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * If `true`, hitting escape will not fire the `onClose` callback.
   * @default false
   */
  disableEscapeKeyDown: o.bool,
  /**
   * If `true`, the dialog is full-screen.
   * @default false
   */
  fullScreen: o.bool,
  /**
   * If `true`, the dialog stretches to `maxWidth`.
   *
   * Notice that the dialog width grow is limited by the default margin.
   * @default false
   */
  fullWidth: o.bool,
  /**
   * Determine the max-width of the dialog.
   * The dialog width grows with the size of the screen.
   * Set to `false` to disable `maxWidth`.
   * @default 'sm'
   */
  maxWidth: o.oneOfType([o.oneOf(["xs", "sm", "md", "lg", "xl", !1]), o.string]),
  /**
   * Callback fired when the backdrop is clicked.
   * @deprecated Use the `onClose` prop with the `reason` argument to handle the `backdropClick` events.
   */
  onBackdropClick: o.func,
  /**
   * Callback fired when the component requests to be closed.
   *
   * @param {object} event The event source of the callback.
   * @param {string} reason Can be: `"escapeKeyDown"`, `"backdropClick"`.
   */
  onClose: o.func,
  /**
   * If `true`, the component is shown.
   */
  open: o.bool.isRequired,
  /**
   * The component used to render the body of the dialog.
   * @default Paper
   */
  PaperComponent: o.elementType,
  /**
   * Props applied to the [`Paper`](/material-ui/api/paper/) element.
   * @default {}
   */
  PaperProps: o.object,
  /**
   * Determine the container for scrolling the dialog.
   * @default 'paper'
   */
  scroll: o.oneOf(["body", "paper"]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * The component used for the transition.
   * [Follow this guide](/material-ui/transitions/#transitioncomponent-prop) to learn more about the requirements for this component.
   * @default Fade
   */
  TransitionComponent: o.elementType,
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   * @default {
   *   enter: theme.transitions.duration.enteringScreen,
   *   exit: theme.transitions.duration.leavingScreen,
   * }
   */
  transitionDuration: o.oneOfType([o.number, o.shape({
    appear: o.number,
    enter: o.number,
    exit: o.number
  })]),
  /**
   * Props applied to the transition element.
   * By default, the element is based on this [`Transition`](https://reactcommunity.org/react-transition-group/transition/) component.
   */
  TransitionProps: o.object
});
const qT = Yp;
function HT(e) {
  return Le("MuiDialogContent", e);
}
Be("MuiDialogContent", ["root", "dividers"]);
function KT(e) {
  return Le("MuiDialogTitle", e);
}
const YT = Be("MuiDialogTitle", ["root"]), GT = YT, QT = ["className", "dividers"], XT = (e) => {
  const {
    classes: t,
    dividers: n
  } = e;
  return Ue({
    root: ["root", n && "dividers"]
  }, HT, t);
}, JT = de("div", {
  name: "MuiDialogContent",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.dividers && t.dividers];
  }
})(({
  theme: e,
  ownerState: t
}) => w({
  flex: "1 1 auto",
  // Add iOS momentum scrolling for iOS < 13.0
  WebkitOverflowScrolling: "touch",
  overflowY: "auto",
  padding: "20px 24px"
}, t.dividers ? {
  padding: "16px 24px",
  borderTop: `1px solid ${(e.vars || e).palette.divider}`,
  borderBottom: `1px solid ${(e.vars || e).palette.divider}`
} : {
  [`.${GT.root} + &`]: {
    paddingTop: 0
  }
})), Gp = /* @__PURE__ */ v.forwardRef(function(t, n) {
  const r = ze({
    props: t,
    name: "MuiDialogContent"
  }), {
    className: i,
    dividers: s = !1
  } = r, a = xe(r, QT), l = w({}, r, {
    dividers: s
  }), c = XT(l);
  return /* @__PURE__ */ k.jsx(JT, w({
    className: Oe(c.root, i),
    ownerState: l,
    ref: n
  }, a));
});
process.env.NODE_ENV !== "production" && (Gp.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * Display the top and bottom dividers.
   * @default false
   */
  dividers: o.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object])
});
const ZT = Gp, eC = ["className", "id"], tC = (e) => {
  const {
    classes: t
  } = e;
  return Ue({
    root: ["root"]
  }, KT, t);
}, nC = de(Sl, {
  name: "MuiDialogTitle",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({
  padding: "16px 24px",
  flex: "0 0 auto"
}), Qp = /* @__PURE__ */ v.forwardRef(function(t, n) {
  const r = ze({
    props: t,
    name: "MuiDialogTitle"
  }), {
    className: i,
    id: s
  } = r, a = xe(r, eC), l = r, c = tC(l), {
    titleId: u = s
  } = v.useContext(Kp);
  return /* @__PURE__ */ k.jsx(nC, w({
    component: "h2",
    className: Oe(c.root, i),
    ownerState: l,
    ref: n,
    variant: "h6",
    id: s ?? u
  }, a));
});
process.env.NODE_ENV !== "production" && (Qp.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * @ignore
   */
  id: o.string,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object])
});
const rC = Qp, oC = ["disableUnderline", "components", "componentsProps", "fullWidth", "hiddenLabel", "inputComponent", "multiline", "slotProps", "slots", "type"], iC = (e) => {
  const {
    classes: t,
    disableUnderline: n
  } = e, i = Ue({
    root: ["root", !n && "underline"],
    input: ["input"]
  }, Yw, t);
  return w({}, t, i);
}, sC = de(Ps, {
  shouldForwardProp: (e) => gn(e) || e === "classes",
  name: "MuiFilledInput",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [...Ss(e, t), !n.disableUnderline && t.underline];
  }
})(({
  theme: e,
  ownerState: t
}) => {
  var n;
  const r = e.palette.mode === "light", i = r ? "rgba(0, 0, 0, 0.42)" : "rgba(255, 255, 255, 0.7)", s = r ? "rgba(0, 0, 0, 0.06)" : "rgba(255, 255, 255, 0.09)", a = r ? "rgba(0, 0, 0, 0.09)" : "rgba(255, 255, 255, 0.13)", l = r ? "rgba(0, 0, 0, 0.12)" : "rgba(255, 255, 255, 0.12)";
  return w({
    position: "relative",
    backgroundColor: e.vars ? e.vars.palette.FilledInput.bg : s,
    borderTopLeftRadius: (e.vars || e).shape.borderRadius,
    borderTopRightRadius: (e.vars || e).shape.borderRadius,
    transition: e.transitions.create("background-color", {
      duration: e.transitions.duration.shorter,
      easing: e.transitions.easing.easeOut
    }),
    "&:hover": {
      backgroundColor: e.vars ? e.vars.palette.FilledInput.hoverBg : a,
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: e.vars ? e.vars.palette.FilledInput.bg : s
      }
    },
    [`&.${Nt.focused}`]: {
      backgroundColor: e.vars ? e.vars.palette.FilledInput.bg : s
    },
    [`&.${Nt.disabled}`]: {
      backgroundColor: e.vars ? e.vars.palette.FilledInput.disabledBg : l
    }
  }, !t.disableUnderline && {
    "&::after": {
      borderBottom: `2px solid ${(n = (e.vars || e).palette[t.color || "primary"]) == null ? void 0 : n.main}`,
      left: 0,
      bottom: 0,
      // Doing the other way around crash on IE11 "''" https://github.com/cssinjs/jss/issues/242
      content: '""',
      position: "absolute",
      right: 0,
      transform: "scaleX(0)",
      transition: e.transitions.create("transform", {
        duration: e.transitions.duration.shorter,
        easing: e.transitions.easing.easeOut
      }),
      pointerEvents: "none"
      // Transparent to the hover style.
    },
    [`&.${Nt.focused}:after`]: {
      // translateX(0) is a workaround for Safari transform scale bug
      // See https://github.com/mui/material-ui/issues/31766
      transform: "scaleX(1) translateX(0)"
    },
    [`&.${Nt.error}`]: {
      "&::before, &::after": {
        borderBottomColor: (e.vars || e).palette.error.main
      }
    },
    "&::before": {
      borderBottom: `1px solid ${e.vars ? `rgba(${e.vars.palette.common.onBackgroundChannel} / ${e.vars.opacity.inputUnderline})` : i}`,
      left: 0,
      bottom: 0,
      // Doing the other way around crash on IE11 "''" https://github.com/cssinjs/jss/issues/242
      content: '"\\00a0"',
      position: "absolute",
      right: 0,
      transition: e.transitions.create("border-bottom-color", {
        duration: e.transitions.duration.shorter
      }),
      pointerEvents: "none"
      // Transparent to the hover style.
    },
    [`&:hover:not(.${Nt.disabled}, .${Nt.error}):before`]: {
      borderBottom: `1px solid ${(e.vars || e).palette.text.primary}`
    },
    [`&.${Nt.disabled}:before`]: {
      borderBottomStyle: "dotted"
    }
  }, t.startAdornment && {
    paddingLeft: 12
  }, t.endAdornment && {
    paddingRight: 12
  }, t.multiline && w({
    padding: "25px 12px 8px"
  }, t.size === "small" && {
    paddingTop: 21,
    paddingBottom: 4
  }, t.hiddenLabel && {
    paddingTop: 16,
    paddingBottom: 17
  }, t.hiddenLabel && t.size === "small" && {
    paddingTop: 8,
    paddingBottom: 9
  }));
}), aC = de($s, {
  name: "MuiFilledInput",
  slot: "Input",
  overridesResolver: Rs
})(({
  theme: e,
  ownerState: t
}) => w({
  paddingTop: 25,
  paddingRight: 12,
  paddingBottom: 8,
  paddingLeft: 12
}, !e.vars && {
  "&:-webkit-autofill": {
    WebkitBoxShadow: e.palette.mode === "light" ? null : "0 0 0 100px #266798 inset",
    WebkitTextFillColor: e.palette.mode === "light" ? null : "#fff",
    caretColor: e.palette.mode === "light" ? null : "#fff",
    borderTopLeftRadius: "inherit",
    borderTopRightRadius: "inherit"
  }
}, e.vars && {
  "&:-webkit-autofill": {
    borderTopLeftRadius: "inherit",
    borderTopRightRadius: "inherit"
  },
  [e.getColorSchemeSelector("dark")]: {
    "&:-webkit-autofill": {
      WebkitBoxShadow: "0 0 0 100px #266798 inset",
      WebkitTextFillColor: "#fff",
      caretColor: "#fff"
    }
  }
}, t.size === "small" && {
  paddingTop: 21,
  paddingBottom: 4
}, t.hiddenLabel && {
  paddingTop: 16,
  paddingBottom: 17
}, t.startAdornment && {
  paddingLeft: 0
}, t.endAdornment && {
  paddingRight: 0
}, t.hiddenLabel && t.size === "small" && {
  paddingTop: 8,
  paddingBottom: 9
}, t.multiline && {
  paddingTop: 0,
  paddingBottom: 0,
  paddingLeft: 0,
  paddingRight: 0
})), Fl = /* @__PURE__ */ v.forwardRef(function(t, n) {
  var r, i, s, a;
  const l = ze({
    props: t,
    name: "MuiFilledInput"
  }), {
    components: c = {},
    componentsProps: u,
    fullWidth: d = !1,
    // declare here to prevent spreading to DOM
    inputComponent: f = "input",
    multiline: p = !1,
    slotProps: b,
    slots: y = {},
    type: h = "text"
  } = l, m = xe(l, oC), g = w({}, l, {
    fullWidth: d,
    inputComponent: f,
    multiline: p,
    type: h
  }), C = iC(l), E = {
    root: {
      ownerState: g
    },
    input: {
      ownerState: g
    }
  }, O = b ?? u ? Mt(E, b ?? u) : E, x = (r = (i = y.root) != null ? i : c.Root) != null ? r : sC, P = (s = (a = y.input) != null ? a : c.Input) != null ? s : aC;
  return /* @__PURE__ */ k.jsx(Dl, w({
    slots: {
      root: x,
      input: P
    },
    componentsProps: O,
    fullWidth: d,
    inputComponent: f,
    multiline: p,
    ref: n,
    type: h
  }, m, {
    classes: C
  }));
});
process.env.NODE_ENV !== "production" && (Fl.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * This prop helps users to fill forms faster, especially on mobile devices.
   * The name can be confusing, as it's more like an autofill.
   * You can learn more about it [following the specification](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill).
   */
  autoComplete: o.string,
  /**
   * If `true`, the `input` element is focused during the first mount.
   */
  autoFocus: o.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * The prop defaults to the value (`'primary'`) inherited from the parent FormControl component.
   */
  color: o.oneOfType([o.oneOf(["primary", "secondary"]), o.string]),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `slots` prop.
   * It's recommended to use the `slots` prop instead.
   *
   * @default {}
   */
  components: o.shape({
    Input: o.elementType,
    Root: o.elementType
  }),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * This prop is an alias for the `slotProps` prop.
   * It's recommended to use the `slotProps` prop instead, as `componentsProps` will be deprecated in the future.
   *
   * @default {}
   */
  componentsProps: o.shape({
    input: o.object,
    root: o.object
  }),
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: o.any,
  /**
   * If `true`, the component is disabled.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  disabled: o.bool,
  /**
   * If `true`, the input will not have an underline.
   */
  disableUnderline: o.bool,
  /**
   * End `InputAdornment` for this component.
   */
  endAdornment: o.node,
  /**
   * If `true`, the `input` will indicate an error.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  error: o.bool,
  /**
   * If `true`, the `input` will take up the full width of its container.
   * @default false
   */
  fullWidth: o.bool,
  /**
   * If `true`, the label is hidden.
   * This is used to increase density for a `FilledInput`.
   * Be sure to add `aria-label` to the `input` element.
   * @default false
   */
  hiddenLabel: o.bool,
  /**
   * The id of the `input` element.
   */
  id: o.string,
  /**
   * The component used for the `input` element.
   * Either a string to use a HTML element or a component.
   * @default 'input'
   */
  inputComponent: o.elementType,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   * @default {}
   */
  inputProps: o.object,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: on,
  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   * The prop defaults to the value (`'none'`) inherited from the parent FormControl component.
   */
  margin: o.oneOf(["dense", "none"]),
  /**
   * Maximum number of rows to display when multiline option is set to true.
   */
  maxRows: o.oneOfType([o.number, o.string]),
  /**
   * Minimum number of rows to display when multiline option is set to true.
   */
  minRows: o.oneOfType([o.number, o.string]),
  /**
   * If `true`, a [TextareaAutosize](/material-ui/react-textarea-autosize/) element is rendered.
   * @default false
   */
  multiline: o.bool,
  /**
   * Name attribute of the `input` element.
   */
  name: o.string,
  /**
   * Callback fired when the value is changed.
   *
   * @param {React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: o.func,
  /**
   * The short hint displayed in the `input` before the user enters a value.
   */
  placeholder: o.string,
  /**
   * It prevents the user from changing the value of the field
   * (not from interacting with the field).
   */
  readOnly: o.bool,
  /**
   * If `true`, the `input` element is required.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  required: o.bool,
  /**
   * Number of rows to display when multiline option is set to true.
   */
  rows: o.oneOfType([o.number, o.string]),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * This prop is an alias for the `componentsProps` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slotProps: o.shape({
    input: o.object,
    root: o.object
  }),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `components` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slots: o.shape({
    input: o.elementType,
    root: o.elementType
  }),
  /**
   * Start `InputAdornment` for this component.
   */
  startAdornment: o.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * Type of the `input` element. It should be [a valid HTML5 input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types).
   * @default 'text'
   */
  type: o.string,
  /**
   * The value of the `input` element, required for a controlled component.
   */
  value: o.any
});
Fl.muiName = "Input";
const Xp = Fl;
function lC(e) {
  return Le("MuiFormControl", e);
}
Be("MuiFormControl", ["root", "marginNone", "marginNormal", "marginDense", "fullWidth", "disabled"]);
const cC = ["children", "className", "color", "component", "disabled", "error", "focused", "fullWidth", "hiddenLabel", "margin", "required", "size", "variant"], uC = (e) => {
  const {
    classes: t,
    margin: n,
    fullWidth: r
  } = e, i = {
    root: ["root", n !== "none" && `margin${ae(n)}`, r && "fullWidth"]
  };
  return Ue(i, lC, t);
}, dC = de("div", {
  name: "MuiFormControl",
  slot: "Root",
  overridesResolver: ({
    ownerState: e
  }, t) => w({}, t.root, t[`margin${ae(e.margin)}`], e.fullWidth && t.fullWidth)
})(({
  ownerState: e
}) => w({
  display: "inline-flex",
  flexDirection: "column",
  position: "relative",
  // Reset fieldset default style.
  minWidth: 0,
  padding: 0,
  margin: 0,
  border: 0,
  verticalAlign: "top"
}, e.margin === "normal" && {
  marginTop: 16,
  marginBottom: 8
}, e.margin === "dense" && {
  marginTop: 8,
  marginBottom: 4
}, e.fullWidth && {
  width: "100%"
})), Jp = /* @__PURE__ */ v.forwardRef(function(t, n) {
  const r = ze({
    props: t,
    name: "MuiFormControl"
  }), {
    children: i,
    className: s,
    color: a = "primary",
    component: l = "div",
    disabled: c = !1,
    error: u = !1,
    focused: d,
    fullWidth: f = !1,
    hiddenLabel: p = !1,
    margin: b = "none",
    required: y = !1,
    size: h = "medium",
    variant: m = "outlined"
  } = r, g = xe(r, cC), C = w({}, r, {
    color: a,
    component: l,
    disabled: c,
    error: u,
    fullWidth: f,
    hiddenLabel: p,
    margin: b,
    required: y,
    size: h,
    variant: m
  }), E = uC(C), [O, x] = v.useState(() => {
    let U = !1;
    return i && v.Children.forEach(i, (z) => {
      if (!Pi(z, ["Input", "Select"]))
        return;
      const Y = Pi(z, ["Select"]) ? z.props.input : z;
      Y && Lw(Y.props) && (U = !0);
    }), U;
  }), [P, R] = v.useState(() => {
    let U = !1;
    return i && v.Children.forEach(i, (z) => {
      Pi(z, ["Input", "Select"]) && (Hi(z.props, !0) || Hi(z.props.inputProps, !0)) && (U = !0);
    }), U;
  }), [N, A] = v.useState(!1);
  c && N && A(!1);
  const L = d !== void 0 && !c ? d : N;
  let K;
  if (process.env.NODE_ENV !== "production") {
    const U = v.useRef(!1);
    K = () => (U.current && console.error(["MUI: There are multiple `InputBase` components inside a FormControl.", "This creates visual inconsistencies, only use one `InputBase`."].join(`
`)), U.current = !0, () => {
      U.current = !1;
    });
  }
  const B = v.useMemo(() => ({
    adornedStart: O,
    setAdornedStart: x,
    color: a,
    disabled: c,
    error: u,
    filled: P,
    focused: L,
    fullWidth: f,
    hiddenLabel: p,
    size: h,
    onBlur: () => {
      A(!1);
    },
    onEmpty: () => {
      R(!1);
    },
    onFilled: () => {
      R(!0);
    },
    onFocus: () => {
      A(!0);
    },
    registerEffect: K,
    required: y,
    variant: m
  }), [O, a, c, u, P, L, f, p, K, y, h, m]);
  return /* @__PURE__ */ k.jsx(Ml.Provider, {
    value: B,
    children: /* @__PURE__ */ k.jsx(dC, w({
      as: l,
      ownerState: C,
      className: Oe(E.root, s),
      ref: n
    }, g, {
      children: i
    }))
  });
});
process.env.NODE_ENV !== "production" && (Jp.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'primary'
   */
  color: o.oneOfType([o.oneOf(["primary", "secondary", "error", "info", "success", "warning"]), o.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: o.elementType,
  /**
   * If `true`, the label, input and helper text should be displayed in a disabled state.
   * @default false
   */
  disabled: o.bool,
  /**
   * If `true`, the label is displayed in an error state.
   * @default false
   */
  error: o.bool,
  /**
   * If `true`, the component is displayed in focused state.
   */
  focused: o.bool,
  /**
   * If `true`, the component will take up the full width of its container.
   * @default false
   */
  fullWidth: o.bool,
  /**
   * If `true`, the label is hidden.
   * This is used to increase density for a `FilledInput`.
   * Be sure to add `aria-label` to the `input` element.
   * @default false
   */
  hiddenLabel: o.bool,
  /**
   * If `dense` or `normal`, will adjust vertical spacing of this and contained components.
   * @default 'none'
   */
  margin: o.oneOf(["dense", "none", "normal"]),
  /**
   * If `true`, the label will indicate that the `input` is required.
   * @default false
   */
  required: o.bool,
  /**
   * The size of the component.
   * @default 'medium'
   */
  size: o.oneOfType([o.oneOf(["medium", "small"]), o.string]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * The variant to use.
   * @default 'outlined'
   */
  variant: o.oneOf(["filled", "outlined", "standard"])
});
const fC = Jp;
function pC(e) {
  return Le("MuiFormHelperText", e);
}
const hC = Be("MuiFormHelperText", ["root", "error", "disabled", "sizeSmall", "sizeMedium", "contained", "focused", "filled", "required"]), Wu = hC;
var qu;
const mC = ["children", "className", "component", "disabled", "error", "filled", "focused", "margin", "required", "variant"], yC = (e) => {
  const {
    classes: t,
    contained: n,
    size: r,
    disabled: i,
    error: s,
    filled: a,
    focused: l,
    required: c
  } = e, u = {
    root: ["root", i && "disabled", s && "error", r && `size${ae(r)}`, n && "contained", l && "focused", a && "filled", c && "required"]
  };
  return Ue(u, pC, t);
}, bC = de("p", {
  name: "MuiFormHelperText",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.size && t[`size${ae(n.size)}`], n.contained && t.contained, n.filled && t.filled];
  }
})(({
  theme: e,
  ownerState: t
}) => w({
  color: (e.vars || e).palette.text.secondary
}, e.typography.caption, {
  textAlign: "left",
  marginTop: 3,
  marginRight: 0,
  marginBottom: 0,
  marginLeft: 0,
  [`&.${Wu.disabled}`]: {
    color: (e.vars || e).palette.text.disabled
  },
  [`&.${Wu.error}`]: {
    color: (e.vars || e).palette.error.main
  }
}, t.size === "small" && {
  marginTop: 4
}, t.contained && {
  marginLeft: 14,
  marginRight: 14
})), Zp = /* @__PURE__ */ v.forwardRef(function(t, n) {
  const r = ze({
    props: t,
    name: "MuiFormHelperText"
  }), {
    children: i,
    className: s,
    component: a = "p"
  } = r, l = xe(r, mC), c = Xr(), u = Qr({
    props: r,
    muiFormControl: c,
    states: ["variant", "size", "disabled", "error", "filled", "focused", "required"]
  }), d = w({}, r, {
    component: a,
    contained: u.variant === "filled" || u.variant === "outlined",
    variant: u.variant,
    size: u.size,
    disabled: u.disabled,
    error: u.error,
    filled: u.filled,
    focused: u.focused,
    required: u.required
  }), f = yC(d);
  return /* @__PURE__ */ k.jsx(bC, w({
    as: a,
    ownerState: d,
    className: Oe(f.root, s),
    ref: n
  }, l, {
    children: i === " " ? (
      // notranslate needed while Google Translate will not fix zero-width space issue
      qu || (qu = /* @__PURE__ */ k.jsx("span", {
        className: "notranslate",
        children: "​"
      }))
    ) : i
  }));
});
process.env.NODE_ENV !== "production" && (Zp.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   *
   * If `' '` is provided, the component reserves one line height for displaying a future message.
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: o.elementType,
  /**
   * If `true`, the helper text should be displayed in a disabled state.
   */
  disabled: o.bool,
  /**
   * If `true`, helper text should be displayed in an error state.
   */
  error: o.bool,
  /**
   * If `true`, the helper text should use filled classes key.
   */
  filled: o.bool,
  /**
   * If `true`, the helper text should use focused classes key.
   */
  focused: o.bool,
  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   */
  margin: o.oneOf(["dense"]),
  /**
   * If `true`, the helper text should use required classes key.
   */
  required: o.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * The variant to use.
   */
  variant: o.oneOfType([o.oneOf(["filled", "outlined", "standard"]), o.string])
});
const vC = Zp;
function gC(e) {
  return Le("MuiFormLabel", e);
}
const xC = Be("MuiFormLabel", ["root", "colorSecondary", "focused", "disabled", "error", "filled", "required", "asterisk"]), vo = xC, EC = ["children", "className", "color", "component", "disabled", "error", "filled", "focused", "required"], OC = (e) => {
  const {
    classes: t,
    color: n,
    focused: r,
    disabled: i,
    error: s,
    filled: a,
    required: l
  } = e, c = {
    root: ["root", `color${ae(n)}`, i && "disabled", s && "error", a && "filled", r && "focused", l && "required"],
    asterisk: ["asterisk", s && "error"]
  };
  return Ue(c, gC, t);
}, wC = de("label", {
  name: "MuiFormLabel",
  slot: "Root",
  overridesResolver: ({
    ownerState: e
  }, t) => w({}, t.root, e.color === "secondary" && t.colorSecondary, e.filled && t.filled)
})(({
  theme: e,
  ownerState: t
}) => w({
  color: (e.vars || e).palette.text.secondary
}, e.typography.body1, {
  lineHeight: "1.4375em",
  padding: 0,
  position: "relative",
  [`&.${vo.focused}`]: {
    color: (e.vars || e).palette[t.color].main
  },
  [`&.${vo.disabled}`]: {
    color: (e.vars || e).palette.text.disabled
  },
  [`&.${vo.error}`]: {
    color: (e.vars || e).palette.error.main
  }
})), TC = de("span", {
  name: "MuiFormLabel",
  slot: "Asterisk",
  overridesResolver: (e, t) => t.asterisk
})(({
  theme: e
}) => ({
  [`&.${vo.error}`]: {
    color: (e.vars || e).palette.error.main
  }
})), eh = /* @__PURE__ */ v.forwardRef(function(t, n) {
  const r = ze({
    props: t,
    name: "MuiFormLabel"
  }), {
    children: i,
    className: s,
    component: a = "label"
  } = r, l = xe(r, EC), c = Xr(), u = Qr({
    props: r,
    muiFormControl: c,
    states: ["color", "required", "focused", "disabled", "error", "filled"]
  }), d = w({}, r, {
    color: u.color || "primary",
    component: a,
    disabled: u.disabled,
    error: u.error,
    filled: u.filled,
    focused: u.focused,
    required: u.required
  }), f = OC(d);
  return /* @__PURE__ */ k.jsxs(wC, w({
    as: a,
    ownerState: d,
    className: Oe(f.root, s),
    ref: n
  }, l, {
    children: [i, u.required && /* @__PURE__ */ k.jsxs(TC, {
      ownerState: d,
      "aria-hidden": !0,
      className: f.asterisk,
      children: [" ", "*"]
    })]
  }));
});
process.env.NODE_ENV !== "production" && (eh.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   */
  color: o.oneOfType([o.oneOf(["error", "info", "primary", "secondary", "success", "warning"]), o.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: o.elementType,
  /**
   * If `true`, the label should be displayed in a disabled state.
   */
  disabled: o.bool,
  /**
   * If `true`, the label is displayed in an error state.
   */
  error: o.bool,
  /**
   * If `true`, the label should use filled classes key.
   */
  filled: o.bool,
  /**
   * If `true`, the input of this label is focused (used by `FormGroup` components).
   */
  focused: o.bool,
  /**
   * If `true`, the label will indicate that the `input` is required.
   */
  required: o.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object])
});
const CC = eh, SC = ["addEndListener", "appear", "children", "easing", "in", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "style", "timeout", "TransitionComponent"];
function Wa(e) {
  return `scale(${e}, ${e ** 2})`;
}
const RC = {
  entering: {
    opacity: 1,
    transform: Wa(1)
  },
  entered: {
    opacity: 1,
    transform: "none"
  }
}, ea = typeof navigator < "u" && /^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent) && /(os |version\/)15(.|_)4/i.test(navigator.userAgent), Ll = /* @__PURE__ */ v.forwardRef(function(t, n) {
  const {
    addEndListener: r,
    appear: i = !0,
    children: s,
    easing: a,
    in: l,
    onEnter: c,
    onEntered: u,
    onEntering: d,
    onExit: f,
    onExited: p,
    onExiting: b,
    style: y,
    timeout: h = "auto",
    // eslint-disable-next-line react/prop-types
    TransitionComponent: m = rp
  } = t, g = xe(t, SC), C = Bf(), E = v.useRef(), O = ni(), x = v.useRef(null), P = ct(x, s.ref, n), R = (Y) => (M) => {
    if (Y) {
      const G = x.current;
      M === void 0 ? Y(G) : Y(G, M);
    }
  }, N = R(d), A = R((Y, M) => {
    op(Y);
    const {
      duration: G,
      delay: W,
      easing: le
    } = Vi({
      style: y,
      timeout: h,
      easing: a
    }, {
      mode: "enter"
    });
    let I;
    h === "auto" ? (I = O.transitions.getAutoHeightDuration(Y.clientHeight), E.current = I) : I = G, Y.style.transition = [O.transitions.create("opacity", {
      duration: I,
      delay: W
    }), O.transitions.create("transform", {
      duration: ea ? I : I * 0.666,
      delay: W,
      easing: le
    })].join(","), c && c(Y, M);
  }), L = R(u), K = R(b), B = R((Y) => {
    const {
      duration: M,
      delay: G,
      easing: W
    } = Vi({
      style: y,
      timeout: h,
      easing: a
    }, {
      mode: "exit"
    });
    let le;
    h === "auto" ? (le = O.transitions.getAutoHeightDuration(Y.clientHeight), E.current = le) : le = M, Y.style.transition = [O.transitions.create("opacity", {
      duration: le,
      delay: G
    }), O.transitions.create("transform", {
      duration: ea ? le : le * 0.666,
      delay: ea ? G : G || le * 0.333,
      easing: W
    })].join(","), Y.style.opacity = 0, Y.style.transform = Wa(0.75), f && f(Y);
  }), U = R(p), z = (Y) => {
    h === "auto" && C.start(E.current || 0, Y), r && r(x.current, Y);
  };
  return /* @__PURE__ */ k.jsx(m, w({
    appear: i,
    in: l,
    nodeRef: x,
    onEnter: A,
    onEntered: L,
    onEntering: N,
    onExit: B,
    onExited: U,
    onExiting: K,
    addEndListener: z,
    timeout: h === "auto" ? null : h
  }, g, {
    children: (Y, M) => /* @__PURE__ */ v.cloneElement(s, w({
      style: w({
        opacity: 0,
        transform: Wa(0.75),
        visibility: Y === "exited" && !l ? "hidden" : void 0
      }, RC[Y], y, s.props.style),
      ref: P
    }, M))
  }));
});
process.env.NODE_ENV !== "production" && (Ll.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Add a custom transition end trigger. Called with the transitioning DOM
   * node and a done callback. Allows for more fine grained transition end
   * logic. Note: Timeouts are still used as a fallback if provided.
   */
  addEndListener: o.func,
  /**
   * Perform the enter transition when it first mounts if `in` is also `true`.
   * Set this to `false` to disable this behavior.
   * @default true
   */
  appear: o.bool,
  /**
   * A single child content element.
   */
  children: bs.isRequired,
  /**
   * The transition timing function.
   * You may specify a single easing or a object containing enter and exit values.
   */
  easing: o.oneOfType([o.shape({
    enter: o.string,
    exit: o.string
  }), o.string]),
  /**
   * If `true`, the component will transition in.
   */
  in: o.bool,
  /**
   * @ignore
   */
  onEnter: o.func,
  /**
   * @ignore
   */
  onEntered: o.func,
  /**
   * @ignore
   */
  onEntering: o.func,
  /**
   * @ignore
   */
  onExit: o.func,
  /**
   * @ignore
   */
  onExited: o.func,
  /**
   * @ignore
   */
  onExiting: o.func,
  /**
   * @ignore
   */
  style: o.object,
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   *
   * Set to 'auto' to automatically calculate transition time based on height.
   * @default 'auto'
   */
  timeout: o.oneOfType([o.oneOf(["auto"]), o.number, o.shape({
    appear: o.number,
    enter: o.number,
    exit: o.number
  })])
});
Ll.muiSupportAuto = !0;
const PC = Ll, $C = ["disableUnderline", "components", "componentsProps", "fullWidth", "inputComponent", "multiline", "slotProps", "slots", "type"], _C = (e) => {
  const {
    classes: t,
    disableUnderline: n
  } = e, i = Ue({
    root: ["root", !n && "underline"],
    input: ["input"]
  }, qw, t);
  return w({}, t, i);
}, kC = de(Ps, {
  shouldForwardProp: (e) => gn(e) || e === "classes",
  name: "MuiInput",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [...Ss(e, t), !n.disableUnderline && t.underline];
  }
})(({
  theme: e,
  ownerState: t
}) => {
  let r = e.palette.mode === "light" ? "rgba(0, 0, 0, 0.42)" : "rgba(255, 255, 255, 0.7)";
  return e.vars && (r = `rgba(${e.vars.palette.common.onBackgroundChannel} / ${e.vars.opacity.inputUnderline})`), w({
    position: "relative"
  }, t.formControl && {
    "label + &": {
      marginTop: 16
    }
  }, !t.disableUnderline && {
    "&::after": {
      borderBottom: `2px solid ${(e.vars || e).palette[t.color].main}`,
      left: 0,
      bottom: 0,
      // Doing the other way around crash on IE11 "''" https://github.com/cssinjs/jss/issues/242
      content: '""',
      position: "absolute",
      right: 0,
      transform: "scaleX(0)",
      transition: e.transitions.create("transform", {
        duration: e.transitions.duration.shorter,
        easing: e.transitions.easing.easeOut
      }),
      pointerEvents: "none"
      // Transparent to the hover style.
    },
    [`&.${jn.focused}:after`]: {
      // translateX(0) is a workaround for Safari transform scale bug
      // See https://github.com/mui/material-ui/issues/31766
      transform: "scaleX(1) translateX(0)"
    },
    [`&.${jn.error}`]: {
      "&::before, &::after": {
        borderBottomColor: (e.vars || e).palette.error.main
      }
    },
    "&::before": {
      borderBottom: `1px solid ${r}`,
      left: 0,
      bottom: 0,
      // Doing the other way around crash on IE11 "''" https://github.com/cssinjs/jss/issues/242
      content: '"\\00a0"',
      position: "absolute",
      right: 0,
      transition: e.transitions.create("border-bottom-color", {
        duration: e.transitions.duration.shorter
      }),
      pointerEvents: "none"
      // Transparent to the hover style.
    },
    [`&:hover:not(.${jn.disabled}, .${jn.error}):before`]: {
      borderBottom: `2px solid ${(e.vars || e).palette.text.primary}`,
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        borderBottom: `1px solid ${r}`
      }
    },
    [`&.${jn.disabled}:before`]: {
      borderBottomStyle: "dotted"
    }
  });
}), NC = de($s, {
  name: "MuiInput",
  slot: "Input",
  overridesResolver: Rs
})({}), Bl = /* @__PURE__ */ v.forwardRef(function(t, n) {
  var r, i, s, a;
  const l = ze({
    props: t,
    name: "MuiInput"
  }), {
    disableUnderline: c,
    components: u = {},
    componentsProps: d,
    fullWidth: f = !1,
    inputComponent: p = "input",
    multiline: b = !1,
    slotProps: y,
    slots: h = {},
    type: m = "text"
  } = l, g = xe(l, $C), C = _C(l), O = {
    root: {
      ownerState: {
        disableUnderline: c
      }
    }
  }, x = y ?? d ? Mt(y ?? d, O) : O, P = (r = (i = h.root) != null ? i : u.Root) != null ? r : kC, R = (s = (a = h.input) != null ? a : u.Input) != null ? s : NC;
  return /* @__PURE__ */ k.jsx(Dl, w({
    slots: {
      root: P,
      input: R
    },
    slotProps: x,
    fullWidth: f,
    inputComponent: p,
    multiline: b,
    ref: n,
    type: m
  }, g, {
    classes: C
  }));
});
process.env.NODE_ENV !== "production" && (Bl.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * This prop helps users to fill forms faster, especially on mobile devices.
   * The name can be confusing, as it's more like an autofill.
   * You can learn more about it [following the specification](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill).
   */
  autoComplete: o.string,
  /**
   * If `true`, the `input` element is focused during the first mount.
   */
  autoFocus: o.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * The prop defaults to the value (`'primary'`) inherited from the parent FormControl component.
   */
  color: o.oneOfType([o.oneOf(["primary", "secondary"]), o.string]),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `slots` prop.
   * It's recommended to use the `slots` prop instead.
   *
   * @default {}
   */
  components: o.shape({
    Input: o.elementType,
    Root: o.elementType
  }),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * This prop is an alias for the `slotProps` prop.
   * It's recommended to use the `slotProps` prop instead, as `componentsProps` will be deprecated in the future.
   *
   * @default {}
   */
  componentsProps: o.shape({
    input: o.object,
    root: o.object
  }),
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: o.any,
  /**
   * If `true`, the component is disabled.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  disabled: o.bool,
  /**
   * If `true`, the `input` will not have an underline.
   */
  disableUnderline: o.bool,
  /**
   * End `InputAdornment` for this component.
   */
  endAdornment: o.node,
  /**
   * If `true`, the `input` will indicate an error.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  error: o.bool,
  /**
   * If `true`, the `input` will take up the full width of its container.
   * @default false
   */
  fullWidth: o.bool,
  /**
   * The id of the `input` element.
   */
  id: o.string,
  /**
   * The component used for the `input` element.
   * Either a string to use a HTML element or a component.
   * @default 'input'
   */
  inputComponent: o.elementType,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   * @default {}
   */
  inputProps: o.object,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: on,
  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   * The prop defaults to the value (`'none'`) inherited from the parent FormControl component.
   */
  margin: o.oneOf(["dense", "none"]),
  /**
   * Maximum number of rows to display when multiline option is set to true.
   */
  maxRows: o.oneOfType([o.number, o.string]),
  /**
   * Minimum number of rows to display when multiline option is set to true.
   */
  minRows: o.oneOfType([o.number, o.string]),
  /**
   * If `true`, a [TextareaAutosize](/material-ui/react-textarea-autosize/) element is rendered.
   * @default false
   */
  multiline: o.bool,
  /**
   * Name attribute of the `input` element.
   */
  name: o.string,
  /**
   * Callback fired when the value is changed.
   *
   * @param {React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: o.func,
  /**
   * The short hint displayed in the `input` before the user enters a value.
   */
  placeholder: o.string,
  /**
   * It prevents the user from changing the value of the field
   * (not from interacting with the field).
   */
  readOnly: o.bool,
  /**
   * If `true`, the `input` element is required.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  required: o.bool,
  /**
   * Number of rows to display when multiline option is set to true.
   */
  rows: o.oneOfType([o.number, o.string]),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * This prop is an alias for the `componentsProps` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slotProps: o.shape({
    input: o.object,
    root: o.object
  }),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `components` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slots: o.shape({
    input: o.elementType,
    root: o.elementType
  }),
  /**
   * Start `InputAdornment` for this component.
   */
  startAdornment: o.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * Type of the `input` element. It should be [a valid HTML5 input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types).
   * @default 'text'
   */
  type: o.string,
  /**
   * The value of the `input` element, required for a controlled component.
   */
  value: o.any
});
Bl.muiName = "Input";
const th = Bl;
function IC(e) {
  return Le("MuiInputLabel", e);
}
Be("MuiInputLabel", ["root", "focused", "disabled", "error", "required", "asterisk", "formControl", "sizeSmall", "shrink", "animated", "standard", "filled", "outlined"]);
const AC = ["disableAnimation", "margin", "shrink", "variant", "className"], jC = (e) => {
  const {
    classes: t,
    formControl: n,
    size: r,
    shrink: i,
    disableAnimation: s,
    variant: a,
    required: l
  } = e, c = {
    root: ["root", n && "formControl", !s && "animated", i && "shrink", r && r !== "normal" && `size${ae(r)}`, a],
    asterisk: [l && "asterisk"]
  }, u = Ue(c, IC, t);
  return w({}, t, u);
}, MC = de(CC, {
  shouldForwardProp: (e) => gn(e) || e === "classes",
  name: "MuiInputLabel",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [{
      [`& .${vo.asterisk}`]: t.asterisk
    }, t.root, n.formControl && t.formControl, n.size === "small" && t.sizeSmall, n.shrink && t.shrink, !n.disableAnimation && t.animated, n.focused && t.focused, t[n.variant]];
  }
})(({
  theme: e,
  ownerState: t
}) => w({
  display: "block",
  transformOrigin: "top left",
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
  maxWidth: "100%"
}, t.formControl && {
  position: "absolute",
  left: 0,
  top: 0,
  // slight alteration to spec spacing to match visual spec result
  transform: "translate(0, 20px) scale(1)"
}, t.size === "small" && {
  // Compensation for the `Input.inputSizeSmall` style.
  transform: "translate(0, 17px) scale(1)"
}, t.shrink && {
  transform: "translate(0, -1.5px) scale(0.75)",
  transformOrigin: "top left",
  maxWidth: "133%"
}, !t.disableAnimation && {
  transition: e.transitions.create(["color", "transform", "max-width"], {
    duration: e.transitions.duration.shorter,
    easing: e.transitions.easing.easeOut
  })
}, t.variant === "filled" && w({
  // Chrome's autofill feature gives the input field a yellow background.
  // Since the input field is behind the label in the HTML tree,
  // the input field is drawn last and hides the label with an opaque background color.
  // zIndex: 1 will raise the label above opaque background-colors of input.
  zIndex: 1,
  pointerEvents: "none",
  transform: "translate(12px, 16px) scale(1)",
  maxWidth: "calc(100% - 24px)"
}, t.size === "small" && {
  transform: "translate(12px, 13px) scale(1)"
}, t.shrink && w({
  userSelect: "none",
  pointerEvents: "auto",
  transform: "translate(12px, 7px) scale(0.75)",
  maxWidth: "calc(133% - 24px)"
}, t.size === "small" && {
  transform: "translate(12px, 4px) scale(0.75)"
})), t.variant === "outlined" && w({
  // see comment above on filled.zIndex
  zIndex: 1,
  pointerEvents: "none",
  transform: "translate(14px, 16px) scale(1)",
  maxWidth: "calc(100% - 24px)"
}, t.size === "small" && {
  transform: "translate(14px, 9px) scale(1)"
}, t.shrink && {
  userSelect: "none",
  pointerEvents: "auto",
  // Theoretically, we should have (8+5)*2/0.75 = 34px
  // but it feels a better when it bleeds a bit on the left, so 32px.
  maxWidth: "calc(133% - 32px)",
  transform: "translate(14px, -9px) scale(0.75)"
}))), nh = /* @__PURE__ */ v.forwardRef(function(t, n) {
  const r = ze({
    name: "MuiInputLabel",
    props: t
  }), {
    disableAnimation: i = !1,
    shrink: s,
    className: a
  } = r, l = xe(r, AC), c = Xr();
  let u = s;
  typeof u > "u" && c && (u = c.filled || c.focused || c.adornedStart);
  const d = Qr({
    props: r,
    muiFormControl: c,
    states: ["size", "variant", "required", "focused"]
  }), f = w({}, r, {
    disableAnimation: i,
    formControl: c,
    shrink: u,
    size: d.size,
    variant: d.variant,
    required: d.required,
    focused: d.focused
  }), p = jC(f);
  return /* @__PURE__ */ k.jsx(MC, w({
    "data-shrink": u,
    ownerState: f,
    ref: n,
    className: Oe(p.root, a)
  }, l, {
    classes: p
  }));
});
process.env.NODE_ENV !== "production" && (nh.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   */
  color: o.oneOfType([o.oneOf(["error", "info", "primary", "secondary", "success", "warning"]), o.string]),
  /**
   * If `true`, the transition animation is disabled.
   * @default false
   */
  disableAnimation: o.bool,
  /**
   * If `true`, the component is disabled.
   */
  disabled: o.bool,
  /**
   * If `true`, the label is displayed in an error state.
   */
  error: o.bool,
  /**
   * If `true`, the `input` of this label is focused.
   */
  focused: o.bool,
  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   */
  margin: o.oneOf(["dense"]),
  /**
   * if `true`, the label will indicate that the `input` is required.
   */
  required: o.bool,
  /**
   * If `true`, the label is shrunk.
   */
  shrink: o.bool,
  /**
   * The size of the component.
   * @default 'normal'
   */
  size: o.oneOfType([o.oneOf(["normal", "small"]), o.string]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * The variant to use.
   */
  variant: o.oneOf(["filled", "outlined", "standard"])
});
const DC = nh, rh = /* @__PURE__ */ v.createContext({});
process.env.NODE_ENV !== "production" && (rh.displayName = "ListContext");
const FC = rh;
function LC(e) {
  return Le("MuiList", e);
}
Be("MuiList", ["root", "padding", "dense", "subheader"]);
const BC = ["children", "className", "component", "dense", "disablePadding", "subheader"], VC = (e) => {
  const {
    classes: t,
    disablePadding: n,
    dense: r,
    subheader: i
  } = e;
  return Ue({
    root: ["root", !n && "padding", r && "dense", i && "subheader"]
  }, LC, t);
}, UC = de("ul", {
  name: "MuiList",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, !n.disablePadding && t.padding, n.dense && t.dense, n.subheader && t.subheader];
  }
})(({
  ownerState: e
}) => w({
  listStyle: "none",
  margin: 0,
  padding: 0,
  position: "relative"
}, !e.disablePadding && {
  paddingTop: 8,
  paddingBottom: 8
}, e.subheader && {
  paddingTop: 0
})), oh = /* @__PURE__ */ v.forwardRef(function(t, n) {
  const r = ze({
    props: t,
    name: "MuiList"
  }), {
    children: i,
    className: s,
    component: a = "ul",
    dense: l = !1,
    disablePadding: c = !1,
    subheader: u
  } = r, d = xe(r, BC), f = v.useMemo(() => ({
    dense: l
  }), [l]), p = w({}, r, {
    component: a,
    dense: l,
    disablePadding: c
  }), b = VC(p);
  return /* @__PURE__ */ k.jsx(FC.Provider, {
    value: f,
    children: /* @__PURE__ */ k.jsxs(UC, w({
      as: a,
      className: Oe(b.root, s),
      ref: n,
      ownerState: p
    }, d, {
      children: [u, i]
    }))
  });
});
process.env.NODE_ENV !== "production" && (oh.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: o.elementType,
  /**
   * If `true`, compact vertical padding designed for keyboard and mouse input is used for
   * the list and list items.
   * The prop is available to descendant components as the `dense` context.
   * @default false
   */
  dense: o.bool,
  /**
   * If `true`, vertical padding is removed from the list.
   * @default false
   */
  disablePadding: o.bool,
  /**
   * The content of the subheader, normally `ListSubheader`.
   */
  subheader: o.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object])
});
const zC = oh, WC = ["actions", "autoFocus", "autoFocusItem", "children", "className", "disabledItemsFocusable", "disableListWrap", "onKeyDown", "variant"];
function ta(e, t, n) {
  return e === t ? e.firstChild : t && t.nextElementSibling ? t.nextElementSibling : n ? null : e.firstChild;
}
function Hu(e, t, n) {
  return e === t ? n ? e.firstChild : e.lastChild : t && t.previousElementSibling ? t.previousElementSibling : n ? null : e.lastChild;
}
function ih(e, t) {
  if (t === void 0)
    return !0;
  let n = e.innerText;
  return n === void 0 && (n = e.textContent), n = n.trim().toLowerCase(), n.length === 0 ? !1 : t.repeating ? n[0] === t.keys[0] : n.indexOf(t.keys.join("")) === 0;
}
function co(e, t, n, r, i, s) {
  let a = !1, l = i(e, t, t ? n : !1);
  for (; l; ) {
    if (l === e.firstChild) {
      if (a)
        return !1;
      a = !0;
    }
    const c = r ? !1 : l.disabled || l.getAttribute("aria-disabled") === "true";
    if (!l.hasAttribute("tabindex") || !ih(l, s) || c)
      l = i(e, l, n);
    else
      return l.focus(), !0;
  }
  return !1;
}
const sh = /* @__PURE__ */ v.forwardRef(function(t, n) {
  const {
    // private
    // eslint-disable-next-line react/prop-types
    actions: r,
    autoFocus: i = !1,
    autoFocusItem: s = !1,
    children: a,
    className: l,
    disabledItemsFocusable: c = !1,
    disableListWrap: u = !1,
    onKeyDown: d,
    variant: f = "selectedMenu"
  } = t, p = xe(t, WC), b = v.useRef(null), y = v.useRef({
    keys: [],
    repeating: !0,
    previousKeyMatched: !0,
    lastTime: null
  });
  rn(() => {
    i && b.current.focus();
  }, [i]), v.useImperativeHandle(r, () => ({
    adjustStyleForScrollbar: (E, {
      direction: O
    }) => {
      const x = !b.current.style.width;
      if (E.clientHeight < b.current.clientHeight && x) {
        const P = `${Uf(gt(E))}px`;
        b.current.style[O === "rtl" ? "paddingLeft" : "paddingRight"] = P, b.current.style.width = `calc(100% + ${P})`;
      }
      return b.current;
    }
  }), []);
  const h = (E) => {
    const O = b.current, x = E.key, P = gt(O).activeElement;
    if (x === "ArrowDown")
      E.preventDefault(), co(O, P, u, c, ta);
    else if (x === "ArrowUp")
      E.preventDefault(), co(O, P, u, c, Hu);
    else if (x === "Home")
      E.preventDefault(), co(O, null, u, c, ta);
    else if (x === "End")
      E.preventDefault(), co(O, null, u, c, Hu);
    else if (x.length === 1) {
      const R = y.current, N = x.toLowerCase(), A = performance.now();
      R.keys.length > 0 && (A - R.lastTime > 500 ? (R.keys = [], R.repeating = !0, R.previousKeyMatched = !0) : R.repeating && N !== R.keys[0] && (R.repeating = !1)), R.lastTime = A, R.keys.push(N);
      const L = P && !R.repeating && ih(P, R);
      R.previousKeyMatched && (L || co(O, P, !1, c, ta, R)) ? E.preventDefault() : R.previousKeyMatched = !1;
    }
    d && d(E);
  }, m = ct(b, n);
  let g = -1;
  v.Children.forEach(a, (E, O) => {
    if (!/* @__PURE__ */ v.isValidElement(E)) {
      g === O && (g += 1, g >= a.length && (g = -1));
      return;
    }
    process.env.NODE_ENV !== "production" && Ro.isFragment(E) && console.error(["MUI: The Menu component doesn't accept a Fragment as a child.", "Consider providing an array instead."].join(`
`)), E.props.disabled || (f === "selectedMenu" && E.props.selected || g === -1) && (g = O), g === O && (E.props.disabled || E.props.muiSkipListHighlight || E.type.muiSkipListHighlight) && (g += 1, g >= a.length && (g = -1));
  });
  const C = v.Children.map(a, (E, O) => {
    if (O === g) {
      const x = {};
      return s && (x.autoFocus = !0), E.props.tabIndex === void 0 && f === "selectedMenu" && (x.tabIndex = 0), /* @__PURE__ */ v.cloneElement(E, x);
    }
    return E;
  });
  return /* @__PURE__ */ k.jsx(zC, w({
    role: "menu",
    ref: m,
    className: l,
    onKeyDown: h,
    tabIndex: i ? 0 : -1
  }, p, {
    children: C
  }));
});
process.env.NODE_ENV !== "production" && (sh.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * If `true`, will focus the `[role="menu"]` container and move into tab order.
   * @default false
   */
  autoFocus: o.bool,
  /**
   * If `true`, will focus the first menuitem if `variant="menu"` or selected item
   * if `variant="selectedMenu"`.
   * @default false
   */
  autoFocusItem: o.bool,
  /**
   * MenuList contents, normally `MenuItem`s.
   */
  children: o.node,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * If `true`, will allow focus on disabled items.
   * @default false
   */
  disabledItemsFocusable: o.bool,
  /**
   * If `true`, the menu items will not wrap focus.
   * @default false
   */
  disableListWrap: o.bool,
  /**
   * @ignore
   */
  onKeyDown: o.func,
  /**
   * The variant to use. Use `menu` to prevent selected items from impacting the initial focus
   * and the vertical alignment relative to the anchor element.
   * @default 'selectedMenu'
   */
  variant: o.oneOf(["menu", "selectedMenu"])
});
const qC = sh;
function HC(e) {
  return Le("MuiPopover", e);
}
Be("MuiPopover", ["root", "paper"]);
const KC = ["onEntering"], YC = ["action", "anchorEl", "anchorOrigin", "anchorPosition", "anchorReference", "children", "className", "container", "elevation", "marginThreshold", "open", "PaperProps", "slots", "slotProps", "transformOrigin", "TransitionComponent", "transitionDuration", "TransitionProps", "disableScrollLock"], GC = ["slotProps"];
function Ku(e, t) {
  let n = 0;
  return typeof t == "number" ? n = t : t === "center" ? n = e.height / 2 : t === "bottom" && (n = e.height), n;
}
function Yu(e, t) {
  let n = 0;
  return typeof t == "number" ? n = t : t === "center" ? n = e.width / 2 : t === "right" && (n = e.width), n;
}
function Gu(e) {
  return [e.horizontal, e.vertical].map((t) => typeof t == "number" ? `${t}px` : t).join(" ");
}
function Ni(e) {
  return typeof e == "function" ? e() : e;
}
const QC = (e) => {
  const {
    classes: t
  } = e;
  return Ue({
    root: ["root"],
    paper: ["paper"]
  }, HC, t);
}, XC = de(qp, {
  name: "MuiPopover",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({}), ah = de(oi, {
  name: "MuiPopover",
  slot: "Paper",
  overridesResolver: (e, t) => t.paper
})({
  position: "absolute",
  overflowY: "auto",
  overflowX: "hidden",
  // So we see the popover when it's empty.
  // It's most likely on issue on userland.
  minWidth: 16,
  minHeight: 16,
  maxWidth: "calc(100% - 32px)",
  maxHeight: "calc(100% - 32px)",
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0
}), lh = /* @__PURE__ */ v.forwardRef(function(t, n) {
  var r, i, s;
  const a = ze({
    props: t,
    name: "MuiPopover"
  }), {
    action: l,
    anchorEl: c,
    anchorOrigin: u = {
      vertical: "top",
      horizontal: "left"
    },
    anchorPosition: d,
    anchorReference: f = "anchorEl",
    children: p,
    className: b,
    container: y,
    elevation: h = 8,
    marginThreshold: m = 16,
    open: g,
    PaperProps: C = {},
    slots: E,
    slotProps: O,
    transformOrigin: x = {
      vertical: "top",
      horizontal: "left"
    },
    TransitionComponent: P = PC,
    transitionDuration: R = "auto",
    TransitionProps: {
      onEntering: N
    } = {},
    disableScrollLock: A = !1
  } = a, L = xe(a.TransitionProps, KC), K = xe(a, YC), B = (r = O == null ? void 0 : O.paper) != null ? r : C, U = v.useRef(), z = ct(U, B.ref), Y = w({}, a, {
    anchorOrigin: u,
    anchorReference: f,
    elevation: h,
    marginThreshold: m,
    externalPaperSlotProps: B,
    transformOrigin: x,
    TransitionComponent: P,
    transitionDuration: R,
    TransitionProps: L
  }), M = QC(Y), G = v.useCallback(() => {
    if (f === "anchorPosition")
      return process.env.NODE_ENV !== "production" && (d || console.error('MUI: You need to provide a `anchorPosition` prop when using <Popover anchorReference="anchorPosition" />.')), d;
    const ye = Ni(c), Q = ye && ye.nodeType === 1 ? ye : gt(U.current).body, be = Q.getBoundingClientRect();
    if (process.env.NODE_ENV !== "production") {
      const ne = Q.getBoundingClientRect();
      process.env.NODE_ENV !== "test" && ne.top === 0 && ne.left === 0 && ne.right === 0 && ne.bottom === 0 && console.warn(["MUI: The `anchorEl` prop provided to the component is invalid.", "The anchor element should be part of the document layout.", "Make sure the element is present in the document or that it's not display none."].join(`
`));
    }
    return {
      top: be.top + Ku(be, u.vertical),
      left: be.left + Yu(be, u.horizontal)
    };
  }, [c, u.horizontal, u.vertical, d, f]), W = v.useCallback((ye) => ({
    vertical: Ku(ye, x.vertical),
    horizontal: Yu(ye, x.horizontal)
  }), [x.horizontal, x.vertical]), le = v.useCallback((ye) => {
    const Q = {
      width: ye.offsetWidth,
      height: ye.offsetHeight
    }, be = W(Q);
    if (f === "none")
      return {
        top: null,
        left: null,
        transformOrigin: Gu(be)
      };
    const ne = G();
    let Xe = ne.top - be.vertical, Te = ne.left - be.horizontal;
    const We = Xe + Q.height, Ve = Te + Q.width, Pe = Wn(Ni(c)), He = Pe.innerHeight - m, qe = Pe.innerWidth - m;
    if (m !== null && Xe < m) {
      const $e = Xe - m;
      Xe -= $e, be.vertical += $e;
    } else if (m !== null && We > He) {
      const $e = We - He;
      Xe -= $e, be.vertical += $e;
    }
    if (process.env.NODE_ENV !== "production" && Q.height > He && Q.height && He && console.error(["MUI: The popover component is too tall.", `Some part of it can not be seen on the screen (${Q.height - He}px).`, "Please consider adding a `max-height` to improve the user-experience."].join(`
`)), m !== null && Te < m) {
      const $e = Te - m;
      Te -= $e, be.horizontal += $e;
    } else if (Ve > qe) {
      const $e = Ve - qe;
      Te -= $e, be.horizontal += $e;
    }
    return {
      top: `${Math.round(Xe)}px`,
      left: `${Math.round(Te)}px`,
      transformOrigin: Gu(be)
    };
  }, [c, f, G, W, m]), [I, X] = v.useState(g), se = v.useCallback(() => {
    const ye = U.current;
    if (!ye)
      return;
    const Q = le(ye);
    Q.top !== null && (ye.style.top = Q.top), Q.left !== null && (ye.style.left = Q.left), ye.style.transformOrigin = Q.transformOrigin, X(!0);
  }, [le]);
  v.useEffect(() => (A && window.addEventListener("scroll", se), () => window.removeEventListener("scroll", se)), [c, A, se]);
  const oe = (ye, Q) => {
    N && N(ye, Q), se();
  }, H = () => {
    X(!1);
  };
  v.useEffect(() => {
    g && se();
  }), v.useImperativeHandle(l, () => g ? {
    updatePosition: () => {
      se();
    }
  } : null, [g, se]), v.useEffect(() => {
    if (!g)
      return;
    const ye = gl(() => {
      se();
    }), Q = Wn(c);
    return Q.addEventListener("resize", ye), () => {
      ye.clear(), Q.removeEventListener("resize", ye);
    };
  }, [c, g, se]);
  let Z = R;
  R === "auto" && !P.muiSupportAuto && (Z = void 0);
  const te = y || (c ? gt(Ni(c)).body : void 0), ue = (i = E == null ? void 0 : E.root) != null ? i : XC, J = (s = E == null ? void 0 : E.paper) != null ? s : ah, ie = lr({
    elementType: J,
    externalSlotProps: w({}, B, {
      style: I ? B.style : w({}, B.style, {
        opacity: 0
      })
    }),
    additionalProps: {
      elevation: h,
      ref: z
    },
    ownerState: Y,
    className: Oe(M.paper, B == null ? void 0 : B.className)
  }), he = lr({
    elementType: ue,
    externalSlotProps: (O == null ? void 0 : O.root) || {},
    externalForwardedProps: K,
    additionalProps: {
      ref: n,
      slotProps: {
        backdrop: {
          invisible: !0
        }
      },
      container: te,
      open: g
    },
    ownerState: Y,
    className: Oe(M.root, b)
  }), {
    slotProps: me
  } = he, D = xe(he, GC);
  return /* @__PURE__ */ k.jsx(ue, w({}, D, !Ui(ue) && {
    slotProps: me,
    disableScrollLock: A
  }, {
    children: /* @__PURE__ */ k.jsx(P, w({
      appear: !0,
      in: g,
      onEntering: oe,
      onExited: H,
      timeout: Z
    }, L, {
      children: /* @__PURE__ */ k.jsx(J, w({}, ie, {
        children: p
      }))
    }))
  }));
});
process.env.NODE_ENV !== "production" && (lh.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A ref for imperative actions.
   * It currently only supports updatePosition() action.
   */
  action: on,
  /**
   * An HTML element, [PopoverVirtualElement](/material-ui/react-popover/#virtual-element),
   * or a function that returns either.
   * It's used to set the position of the popover.
   */
  anchorEl: yn(o.oneOfType([Sn, o.func]), (e) => {
    if (e.open && (!e.anchorReference || e.anchorReference === "anchorEl")) {
      const t = Ni(e.anchorEl);
      if (t && t.nodeType === 1) {
        const n = t.getBoundingClientRect();
        if (process.env.NODE_ENV !== "test" && n.top === 0 && n.left === 0 && n.right === 0 && n.bottom === 0)
          return new Error(["MUI: The `anchorEl` prop provided to the component is invalid.", "The anchor element should be part of the document layout.", "Make sure the element is present in the document or that it's not display none."].join(`
`));
      } else
        return new Error(["MUI: The `anchorEl` prop provided to the component is invalid.", `It should be an Element or PopoverVirtualElement instance but it's \`${t}\` instead.`].join(`
`));
    }
    return null;
  }),
  /**
   * This is the point on the anchor where the popover's
   * `anchorEl` will attach to. This is not used when the
   * anchorReference is 'anchorPosition'.
   *
   * Options:
   * vertical: [top, center, bottom];
   * horizontal: [left, center, right].
   * @default {
   *   vertical: 'top',
   *   horizontal: 'left',
   * }
   */
  anchorOrigin: o.shape({
    horizontal: o.oneOfType([o.oneOf(["center", "left", "right"]), o.number]).isRequired,
    vertical: o.oneOfType([o.oneOf(["bottom", "center", "top"]), o.number]).isRequired
  }),
  /**
   * This is the position that may be used to set the position of the popover.
   * The coordinates are relative to the application's client area.
   */
  anchorPosition: o.shape({
    left: o.number.isRequired,
    top: o.number.isRequired
  }),
  /**
   * This determines which anchor prop to refer to when setting
   * the position of the popover.
   * @default 'anchorEl'
   */
  anchorReference: o.oneOf(["anchorEl", "anchorPosition", "none"]),
  /**
   * The content of the component.
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * An HTML element, component instance, or function that returns either.
   * The `container` will passed to the Modal component.
   *
   * By default, it uses the body of the anchorEl's top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: o.oneOfType([Sn, o.func]),
  /**
   * Disable the scroll lock behavior.
   * @default false
   */
  disableScrollLock: o.bool,
  /**
   * The elevation of the popover.
   * @default 8
   */
  elevation: xl,
  /**
   * Specifies how close to the edge of the window the popover can appear.
   * If null, the popover will not be constrained by the window.
   * @default 16
   */
  marginThreshold: o.number,
  /**
   * Callback fired when the component requests to be closed.
   * The `reason` parameter can optionally be used to control the response to `onClose`.
   */
  onClose: o.func,
  /**
   * If `true`, the component is shown.
   */
  open: o.bool.isRequired,
  /**
   * Props applied to the [`Paper`](/material-ui/api/paper/) element.
   *
   * This prop is an alias for `slotProps.paper` and will be overriden by it if both are used.
   * @deprecated Use `slotProps.paper` instead.
   *
   * @default {}
   */
  PaperProps: o.shape({
    component: vl
  }),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * @default {}
   */
  slotProps: o.shape({
    paper: o.oneOfType([o.func, o.object]),
    root: o.oneOfType([o.func, o.object])
  }),
  /**
   * The components used for each slot inside.
   *
   * @default {}
   */
  slots: o.shape({
    paper: o.elementType,
    root: o.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * This is the point on the popover which
   * will attach to the anchor's origin.
   *
   * Options:
   * vertical: [top, center, bottom, x(px)];
   * horizontal: [left, center, right, x(px)].
   * @default {
   *   vertical: 'top',
   *   horizontal: 'left',
   * }
   */
  transformOrigin: o.shape({
    horizontal: o.oneOfType([o.oneOf(["center", "left", "right"]), o.number]).isRequired,
    vertical: o.oneOfType([o.oneOf(["bottom", "center", "top"]), o.number]).isRequired
  }),
  /**
   * The component used for the transition.
   * [Follow this guide](/material-ui/transitions/#transitioncomponent-prop) to learn more about the requirements for this component.
   * @default Grow
   */
  TransitionComponent: o.elementType,
  /**
   * Set to 'auto' to automatically calculate transition time based on height.
   * @default 'auto'
   */
  transitionDuration: o.oneOfType([o.oneOf(["auto"]), o.number, o.shape({
    appear: o.number,
    enter: o.number,
    exit: o.number
  })]),
  /**
   * Props applied to the transition element.
   * By default, the element is based on this [`Transition`](https://reactcommunity.org/react-transition-group/transition/) component.
   * @default {}
   */
  TransitionProps: o.object
});
const JC = lh;
function ZC(e) {
  return Le("MuiMenu", e);
}
Be("MuiMenu", ["root", "paper", "list"]);
const e1 = ["onEntering"], t1 = ["autoFocus", "children", "className", "disableAutoFocusItem", "MenuListProps", "onClose", "open", "PaperProps", "PopoverClasses", "transitionDuration", "TransitionProps", "variant", "slots", "slotProps"], n1 = {
  vertical: "top",
  horizontal: "right"
}, r1 = {
  vertical: "top",
  horizontal: "left"
}, o1 = (e) => {
  const {
    classes: t
  } = e;
  return Ue({
    root: ["root"],
    paper: ["paper"],
    list: ["list"]
  }, ZC, t);
}, i1 = de(JC, {
  shouldForwardProp: (e) => gn(e) || e === "classes",
  name: "MuiMenu",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({}), s1 = de(ah, {
  name: "MuiMenu",
  slot: "Paper",
  overridesResolver: (e, t) => t.paper
})({
  // specZ: The maximum height of a simple menu should be one or more rows less than the view
  // height. This ensures a tappable area outside of the simple menu with which to dismiss
  // the menu.
  maxHeight: "calc(100% - 96px)",
  // Add iOS momentum scrolling for iOS < 13.0
  WebkitOverflowScrolling: "touch"
}), a1 = de(qC, {
  name: "MuiMenu",
  slot: "List",
  overridesResolver: (e, t) => t.list
})({
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0
}), ch = /* @__PURE__ */ v.forwardRef(function(t, n) {
  var r, i;
  const s = ze({
    props: t,
    name: "MuiMenu"
  }), {
    autoFocus: a = !0,
    children: l,
    className: c,
    disableAutoFocusItem: u = !1,
    MenuListProps: d = {},
    onClose: f,
    open: p,
    PaperProps: b = {},
    PopoverClasses: y,
    transitionDuration: h = "auto",
    TransitionProps: {
      onEntering: m
    } = {},
    variant: g = "selectedMenu",
    slots: C = {},
    slotProps: E = {}
  } = s, O = xe(s.TransitionProps, e1), x = xe(s, t1), P = R0(), R = w({}, s, {
    autoFocus: a,
    disableAutoFocusItem: u,
    MenuListProps: d,
    onEntering: m,
    PaperProps: b,
    transitionDuration: h,
    TransitionProps: O,
    variant: g
  }), N = o1(R), A = a && !u && p, L = v.useRef(null), K = (W, le) => {
    L.current && L.current.adjustStyleForScrollbar(W, {
      direction: P ? "rtl" : "ltr"
    }), m && m(W, le);
  }, B = (W) => {
    W.key === "Tab" && (W.preventDefault(), f && f(W, "tabKeyDown"));
  };
  let U = -1;
  v.Children.map(l, (W, le) => {
    /* @__PURE__ */ v.isValidElement(W) && (process.env.NODE_ENV !== "production" && Ro.isFragment(W) && console.error(["MUI: The Menu component doesn't accept a Fragment as a child.", "Consider providing an array instead."].join(`
`)), W.props.disabled || (g === "selectedMenu" && W.props.selected || U === -1) && (U = le));
  });
  const z = (r = C.paper) != null ? r : s1, Y = (i = E.paper) != null ? i : b, M = lr({
    elementType: C.root,
    externalSlotProps: E.root,
    ownerState: R,
    className: [N.root, c]
  }), G = lr({
    elementType: z,
    externalSlotProps: Y,
    ownerState: R,
    className: N.paper
  });
  return /* @__PURE__ */ k.jsx(i1, w({
    onClose: f,
    anchorOrigin: {
      vertical: "bottom",
      horizontal: P ? "right" : "left"
    },
    transformOrigin: P ? n1 : r1,
    slots: {
      paper: z,
      root: C.root
    },
    slotProps: {
      root: M,
      paper: G
    },
    open: p,
    ref: n,
    transitionDuration: h,
    TransitionProps: w({
      onEntering: K
    }, O),
    ownerState: R
  }, x, {
    classes: y,
    children: /* @__PURE__ */ k.jsx(a1, w({
      onKeyDown: B,
      actions: L,
      autoFocus: a && (U === -1 || u),
      autoFocusItem: A,
      variant: g
    }, d, {
      className: Oe(N.list, d.className),
      children: l
    }))
  }));
});
process.env.NODE_ENV !== "production" && (ch.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * An HTML element, or a function that returns one.
   * It's used to set the position of the menu.
   */
  anchorEl: o.oneOfType([Sn, o.func]),
  /**
   * If `true` (Default) will focus the `[role="menu"]` if no focusable child is found. Disabled
   * children are not focusable. If you set this prop to `false` focus will be placed
   * on the parent modal container. This has severe accessibility implications
   * and should only be considered if you manage focus otherwise.
   * @default true
   */
  autoFocus: o.bool,
  /**
   * Menu contents, normally `MenuItem`s.
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * When opening the menu will not focus the active item but the `[role="menu"]`
   * unless `autoFocus` is also set to `false`. Not using the default means not
   * following WAI-ARIA authoring practices. Please be considerate about possible
   * accessibility implications.
   * @default false
   */
  disableAutoFocusItem: o.bool,
  /**
   * Props applied to the [`MenuList`](/material-ui/api/menu-list/) element.
   * @default {}
   */
  MenuListProps: o.object,
  /**
   * Callback fired when the component requests to be closed.
   *
   * @param {object} event The event source of the callback.
   * @param {string} reason Can be: `"escapeKeyDown"`, `"backdropClick"`, `"tabKeyDown"`.
   */
  onClose: o.func,
  /**
   * If `true`, the component is shown.
   */
  open: o.bool.isRequired,
  /**
   * @ignore
   */
  PaperProps: o.object,
  /**
   * `classes` prop applied to the [`Popover`](/material-ui/api/popover/) element.
   */
  PopoverClasses: o.object,
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * @default {}
   */
  slotProps: o.shape({
    paper: o.oneOfType([o.func, o.object]),
    root: o.oneOfType([o.func, o.object])
  }),
  /**
   * The components used for each slot inside.
   *
   * @default {}
   */
  slots: o.shape({
    paper: o.elementType,
    root: o.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * The length of the transition in `ms`, or 'auto'
   * @default 'auto'
   */
  transitionDuration: o.oneOfType([o.oneOf(["auto"]), o.number, o.shape({
    appear: o.number,
    enter: o.number,
    exit: o.number
  })]),
  /**
   * Props applied to the transition element.
   * By default, the element is based on this [`Transition`](https://reactcommunity.org/react-transition-group/transition/) component.
   * @default {}
   */
  TransitionProps: o.object,
  /**
   * The variant to use. Use `menu` to prevent selected items from impacting the initial focus.
   * @default 'selectedMenu'
   */
  variant: o.oneOf(["menu", "selectedMenu"])
});
const l1 = ch;
function c1(e) {
  return Le("MuiNativeSelect", e);
}
const u1 = Be("MuiNativeSelect", ["root", "select", "multiple", "filled", "outlined", "standard", "disabled", "icon", "iconOpen", "iconFilled", "iconOutlined", "iconStandard", "nativeInput", "error"]), Vl = u1, d1 = ["className", "disabled", "error", "IconComponent", "inputRef", "variant"], f1 = (e) => {
  const {
    classes: t,
    variant: n,
    disabled: r,
    multiple: i,
    open: s,
    error: a
  } = e, l = {
    select: ["select", n, r && "disabled", i && "multiple", a && "error"],
    icon: ["icon", `icon${ae(n)}`, s && "iconOpen", r && "disabled"]
  };
  return Ue(l, c1, t);
}, uh = ({
  ownerState: e,
  theme: t
}) => w({
  MozAppearance: "none",
  // Reset
  WebkitAppearance: "none",
  // Reset
  // When interacting quickly, the text can end up selected.
  // Native select can't be selected either.
  userSelect: "none",
  borderRadius: 0,
  // Reset
  cursor: "pointer",
  "&:focus": w({}, t.vars ? {
    backgroundColor: `rgba(${t.vars.palette.common.onBackgroundChannel} / 0.05)`
  } : {
    backgroundColor: t.palette.mode === "light" ? "rgba(0, 0, 0, 0.05)" : "rgba(255, 255, 255, 0.05)"
  }, {
    borderRadius: 0
    // Reset Chrome style
  }),
  // Remove IE11 arrow
  "&::-ms-expand": {
    display: "none"
  },
  [`&.${Vl.disabled}`]: {
    cursor: "default"
  },
  "&[multiple]": {
    height: "auto"
  },
  "&:not([multiple]) option, &:not([multiple]) optgroup": {
    backgroundColor: (t.vars || t).palette.background.paper
  },
  // Bump specificity to allow extending custom inputs
  "&&&": {
    paddingRight: 24,
    minWidth: 16
    // So it doesn't collapse.
  }
}, e.variant === "filled" && {
  "&&&": {
    paddingRight: 32
  }
}, e.variant === "outlined" && {
  borderRadius: (t.vars || t).shape.borderRadius,
  "&:focus": {
    borderRadius: (t.vars || t).shape.borderRadius
    // Reset the reset for Chrome style
  },
  "&&&": {
    paddingRight: 32
  }
}), p1 = de("select", {
  name: "MuiNativeSelect",
  slot: "Select",
  shouldForwardProp: gn,
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.select, t[n.variant], n.error && t.error, {
      [`&.${Vl.multiple}`]: t.multiple
    }];
  }
})(uh), dh = ({
  ownerState: e,
  theme: t
}) => w({
  // We use a position absolute over a flexbox in order to forward the pointer events
  // to the input and to support wrapping tags..
  position: "absolute",
  right: 0,
  top: "calc(50% - .5em)",
  // Center vertically, height is 1em
  pointerEvents: "none",
  // Don't block pointer events on the select under the icon.
  color: (t.vars || t).palette.action.active,
  [`&.${Vl.disabled}`]: {
    color: (t.vars || t).palette.action.disabled
  }
}, e.open && {
  transform: "rotate(180deg)"
}, e.variant === "filled" && {
  right: 7
}, e.variant === "outlined" && {
  right: 7
}), h1 = de("svg", {
  name: "MuiNativeSelect",
  slot: "Icon",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.icon, n.variant && t[`icon${ae(n.variant)}`], n.open && t.iconOpen];
  }
})(dh), fh = /* @__PURE__ */ v.forwardRef(function(t, n) {
  const {
    className: r,
    disabled: i,
    error: s,
    IconComponent: a,
    inputRef: l,
    variant: c = "standard"
  } = t, u = xe(t, d1), d = w({}, t, {
    disabled: i,
    variant: c,
    error: s
  }), f = f1(d);
  return /* @__PURE__ */ k.jsxs(v.Fragment, {
    children: [/* @__PURE__ */ k.jsx(p1, w({
      ownerState: d,
      className: Oe(f.select, r),
      disabled: i,
      ref: l || n
    }, u)), t.multiple ? null : /* @__PURE__ */ k.jsx(h1, {
      as: a,
      ownerState: d,
      className: f.icon
    })]
  });
});
process.env.NODE_ENV !== "production" && (fh.propTypes = {
  /**
   * The option elements to populate the select with.
   * Can be some `<option>` elements.
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * The CSS class name of the select element.
   */
  className: o.string,
  /**
   * If `true`, the select is disabled.
   */
  disabled: o.bool,
  /**
   * If `true`, the `select input` will indicate an error.
   */
  error: o.bool,
  /**
   * The icon that displays the arrow.
   */
  IconComponent: o.elementType.isRequired,
  /**
   * Use that prop to pass a ref to the native select element.
   * @deprecated
   */
  inputRef: on,
  /**
   * @ignore
   */
  multiple: o.bool,
  /**
   * Name attribute of the `select` or hidden `input` element.
   */
  name: o.string,
  /**
   * Callback fired when a menu item is selected.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: o.func,
  /**
   * The input value.
   */
  value: o.any,
  /**
   * The variant to use.
   */
  variant: o.oneOf(["standard", "outlined", "filled"])
});
const m1 = fh;
var Qu;
const y1 = ["children", "classes", "className", "label", "notched"], b1 = de("fieldset", {
  shouldForwardProp: gn
})({
  textAlign: "left",
  position: "absolute",
  bottom: 0,
  right: 0,
  top: -5,
  left: 0,
  margin: 0,
  padding: "0 8px",
  pointerEvents: "none",
  borderRadius: "inherit",
  borderStyle: "solid",
  borderWidth: 1,
  overflow: "hidden",
  minWidth: "0%"
}), v1 = de("legend", {
  shouldForwardProp: gn
})(({
  ownerState: e,
  theme: t
}) => w({
  float: "unset",
  // Fix conflict with bootstrap
  width: "auto",
  // Fix conflict with bootstrap
  overflow: "hidden"
}, !e.withLabel && {
  padding: 0,
  lineHeight: "11px",
  // sync with `height` in `legend` styles
  transition: t.transitions.create("width", {
    duration: 150,
    easing: t.transitions.easing.easeOut
  })
}, e.withLabel && w({
  display: "block",
  // Fix conflict with normalize.css and sanitize.css
  padding: 0,
  height: 11,
  // sync with `lineHeight` in `legend` styles
  fontSize: "0.75em",
  visibility: "hidden",
  maxWidth: 0.01,
  transition: t.transitions.create("max-width", {
    duration: 50,
    easing: t.transitions.easing.easeOut
  }),
  whiteSpace: "nowrap",
  "& > span": {
    paddingLeft: 5,
    paddingRight: 5,
    display: "inline-block",
    opacity: 0,
    visibility: "visible"
  }
}, e.notched && {
  maxWidth: "100%",
  transition: t.transitions.create("max-width", {
    duration: 100,
    easing: t.transitions.easing.easeOut,
    delay: 50
  })
})));
function ph(e) {
  const {
    className: t,
    label: n,
    notched: r
  } = e, i = xe(e, y1), s = n != null && n !== "", a = w({}, e, {
    notched: r,
    withLabel: s
  });
  return /* @__PURE__ */ k.jsx(b1, w({
    "aria-hidden": !0,
    className: t,
    ownerState: a
  }, i, {
    children: /* @__PURE__ */ k.jsx(v1, {
      ownerState: a,
      children: s ? /* @__PURE__ */ k.jsx("span", {
        children: n
      }) : (
        // notranslate needed while Google Translate will not fix zero-width space issue
        Qu || (Qu = /* @__PURE__ */ k.jsx("span", {
          className: "notranslate",
          children: "​"
        }))
      )
    })
  }));
}
process.env.NODE_ENV !== "production" && (ph.propTypes = {
  /**
   * The content of the component.
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * The label.
   */
  label: o.node,
  /**
   * If `true`, the outline is notched to accommodate the label.
   */
  notched: o.bool.isRequired,
  /**
   * @ignore
   */
  style: o.object
});
const g1 = ["components", "fullWidth", "inputComponent", "label", "multiline", "notched", "slots", "type"], x1 = (e) => {
  const {
    classes: t
  } = e, r = Ue({
    root: ["root"],
    notchedOutline: ["notchedOutline"],
    input: ["input"]
  }, Hw, t);
  return w({}, t, r);
}, E1 = de(Ps, {
  shouldForwardProp: (e) => gn(e) || e === "classes",
  name: "MuiOutlinedInput",
  slot: "Root",
  overridesResolver: Ss
})(({
  theme: e,
  ownerState: t
}) => {
  const n = e.palette.mode === "light" ? "rgba(0, 0, 0, 0.23)" : "rgba(255, 255, 255, 0.23)";
  return w({
    position: "relative",
    borderRadius: (e.vars || e).shape.borderRadius,
    [`&:hover .${an.notchedOutline}`]: {
      borderColor: (e.vars || e).palette.text.primary
    },
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      [`&:hover .${an.notchedOutline}`]: {
        borderColor: e.vars ? `rgba(${e.vars.palette.common.onBackgroundChannel} / 0.23)` : n
      }
    },
    [`&.${an.focused} .${an.notchedOutline}`]: {
      borderColor: (e.vars || e).palette[t.color].main,
      borderWidth: 2
    },
    [`&.${an.error} .${an.notchedOutline}`]: {
      borderColor: (e.vars || e).palette.error.main
    },
    [`&.${an.disabled} .${an.notchedOutline}`]: {
      borderColor: (e.vars || e).palette.action.disabled
    }
  }, t.startAdornment && {
    paddingLeft: 14
  }, t.endAdornment && {
    paddingRight: 14
  }, t.multiline && w({
    padding: "16.5px 14px"
  }, t.size === "small" && {
    padding: "8.5px 14px"
  }));
}), O1 = de(ph, {
  name: "MuiOutlinedInput",
  slot: "NotchedOutline",
  overridesResolver: (e, t) => t.notchedOutline
})(({
  theme: e
}) => {
  const t = e.palette.mode === "light" ? "rgba(0, 0, 0, 0.23)" : "rgba(255, 255, 255, 0.23)";
  return {
    borderColor: e.vars ? `rgba(${e.vars.palette.common.onBackgroundChannel} / 0.23)` : t
  };
}), w1 = de($s, {
  name: "MuiOutlinedInput",
  slot: "Input",
  overridesResolver: Rs
})(({
  theme: e,
  ownerState: t
}) => w({
  padding: "16.5px 14px"
}, !e.vars && {
  "&:-webkit-autofill": {
    WebkitBoxShadow: e.palette.mode === "light" ? null : "0 0 0 100px #266798 inset",
    WebkitTextFillColor: e.palette.mode === "light" ? null : "#fff",
    caretColor: e.palette.mode === "light" ? null : "#fff",
    borderRadius: "inherit"
  }
}, e.vars && {
  "&:-webkit-autofill": {
    borderRadius: "inherit"
  },
  [e.getColorSchemeSelector("dark")]: {
    "&:-webkit-autofill": {
      WebkitBoxShadow: "0 0 0 100px #266798 inset",
      WebkitTextFillColor: "#fff",
      caretColor: "#fff"
    }
  }
}, t.size === "small" && {
  padding: "8.5px 14px"
}, t.multiline && {
  padding: 0
}, t.startAdornment && {
  paddingLeft: 0
}, t.endAdornment && {
  paddingRight: 0
})), Ul = /* @__PURE__ */ v.forwardRef(function(t, n) {
  var r, i, s, a, l;
  const c = ze({
    props: t,
    name: "MuiOutlinedInput"
  }), {
    components: u = {},
    fullWidth: d = !1,
    inputComponent: f = "input",
    label: p,
    multiline: b = !1,
    notched: y,
    slots: h = {},
    type: m = "text"
  } = c, g = xe(c, g1), C = x1(c), E = Xr(), O = Qr({
    props: c,
    muiFormControl: E,
    states: ["color", "disabled", "error", "focused", "hiddenLabel", "size", "required"]
  }), x = w({}, c, {
    color: O.color || "primary",
    disabled: O.disabled,
    error: O.error,
    focused: O.focused,
    formControl: E,
    fullWidth: d,
    hiddenLabel: O.hiddenLabel,
    multiline: b,
    size: O.size,
    type: m
  }), P = (r = (i = h.root) != null ? i : u.Root) != null ? r : E1, R = (s = (a = h.input) != null ? a : u.Input) != null ? s : w1;
  return /* @__PURE__ */ k.jsx(Dl, w({
    slots: {
      root: P,
      input: R
    },
    renderSuffix: (N) => /* @__PURE__ */ k.jsx(O1, {
      ownerState: x,
      className: C.notchedOutline,
      label: p != null && p !== "" && O.required ? l || (l = /* @__PURE__ */ k.jsxs(v.Fragment, {
        children: [p, " ", "*"]
      })) : p,
      notched: typeof y < "u" ? y : !!(N.startAdornment || N.filled || N.focused)
    }),
    fullWidth: d,
    inputComponent: f,
    multiline: b,
    ref: n,
    type: m
  }, g, {
    classes: w({}, C, {
      notchedOutline: null
    })
  }));
});
process.env.NODE_ENV !== "production" && (Ul.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * This prop helps users to fill forms faster, especially on mobile devices.
   * The name can be confusing, as it's more like an autofill.
   * You can learn more about it [following the specification](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill).
   */
  autoComplete: o.string,
  /**
   * If `true`, the `input` element is focused during the first mount.
   */
  autoFocus: o.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * The prop defaults to the value (`'primary'`) inherited from the parent FormControl component.
   */
  color: o.oneOfType([o.oneOf(["primary", "secondary"]), o.string]),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `slots` prop.
   * It's recommended to use the `slots` prop instead.
   *
   * @default {}
   */
  components: o.shape({
    Input: o.elementType,
    Root: o.elementType
  }),
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: o.any,
  /**
   * If `true`, the component is disabled.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  disabled: o.bool,
  /**
   * End `InputAdornment` for this component.
   */
  endAdornment: o.node,
  /**
   * If `true`, the `input` will indicate an error.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  error: o.bool,
  /**
   * If `true`, the `input` will take up the full width of its container.
   * @default false
   */
  fullWidth: o.bool,
  /**
   * The id of the `input` element.
   */
  id: o.string,
  /**
   * The component used for the `input` element.
   * Either a string to use a HTML element or a component.
   * @default 'input'
   */
  inputComponent: o.elementType,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   * @default {}
   */
  inputProps: o.object,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: on,
  /**
   * The label of the `input`. It is only used for layout. The actual labelling
   * is handled by `InputLabel`.
   */
  label: o.node,
  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   * The prop defaults to the value (`'none'`) inherited from the parent FormControl component.
   */
  margin: o.oneOf(["dense", "none"]),
  /**
   * Maximum number of rows to display when multiline option is set to true.
   */
  maxRows: o.oneOfType([o.number, o.string]),
  /**
   * Minimum number of rows to display when multiline option is set to true.
   */
  minRows: o.oneOfType([o.number, o.string]),
  /**
   * If `true`, a [TextareaAutosize](/material-ui/react-textarea-autosize/) element is rendered.
   * @default false
   */
  multiline: o.bool,
  /**
   * Name attribute of the `input` element.
   */
  name: o.string,
  /**
   * If `true`, the outline is notched to accommodate the label.
   */
  notched: o.bool,
  /**
   * Callback fired when the value is changed.
   *
   * @param {React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: o.func,
  /**
   * The short hint displayed in the `input` before the user enters a value.
   */
  placeholder: o.string,
  /**
   * It prevents the user from changing the value of the field
   * (not from interacting with the field).
   */
  readOnly: o.bool,
  /**
   * If `true`, the `input` element is required.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  required: o.bool,
  /**
   * Number of rows to display when multiline option is set to true.
   */
  rows: o.oneOfType([o.number, o.string]),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `components` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slots: o.shape({
    input: o.elementType,
    root: o.elementType
  }),
  /**
   * Start `InputAdornment` for this component.
   */
  startAdornment: o.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * Type of the `input` element. It should be [a valid HTML5 input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types).
   * @default 'text'
   */
  type: o.string,
  /**
   * The value of the `input` element, required for a controlled component.
   */
  value: o.any
});
Ul.muiName = "Input";
const hh = Ul;
function T1(e) {
  return Le("MuiSelect", e);
}
const uo = Be("MuiSelect", ["root", "select", "multiple", "filled", "outlined", "standard", "disabled", "focused", "icon", "iconOpen", "iconFilled", "iconOutlined", "iconStandard", "nativeInput", "error"]);
var Xu;
const C1 = ["aria-describedby", "aria-label", "autoFocus", "autoWidth", "children", "className", "defaultOpen", "defaultValue", "disabled", "displayEmpty", "error", "IconComponent", "inputRef", "labelId", "MenuProps", "multiple", "name", "onBlur", "onChange", "onClose", "onFocus", "onOpen", "open", "readOnly", "renderValue", "SelectDisplayProps", "tabIndex", "type", "value", "variant"], S1 = de("div", {
  name: "MuiSelect",
  slot: "Select",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [
      // Win specificity over the input base
      {
        [`&.${uo.select}`]: t.select
      },
      {
        [`&.${uo.select}`]: t[n.variant]
      },
      {
        [`&.${uo.error}`]: t.error
      },
      {
        [`&.${uo.multiple}`]: t.multiple
      }
    ];
  }
})(uh, {
  // Win specificity over the input base
  [`&.${uo.select}`]: {
    height: "auto",
    // Resets for multiple select with chips
    minHeight: "1.4375em",
    // Required for select\text-field height consistency
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: "hidden"
  }
}), R1 = de("svg", {
  name: "MuiSelect",
  slot: "Icon",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.icon, n.variant && t[`icon${ae(n.variant)}`], n.open && t.iconOpen];
  }
})(dh), P1 = de("input", {
  shouldForwardProp: (e) => tp(e) && e !== "classes",
  name: "MuiSelect",
  slot: "NativeInput",
  overridesResolver: (e, t) => t.nativeInput
})({
  bottom: 0,
  left: 0,
  position: "absolute",
  opacity: 0,
  pointerEvents: "none",
  width: "100%",
  boxSizing: "border-box"
});
function Ju(e, t) {
  return typeof t == "object" && t !== null ? e === t : String(e) === String(t);
}
function $1(e) {
  return e == null || typeof e == "string" && !e.trim();
}
const _1 = (e) => {
  const {
    classes: t,
    variant: n,
    disabled: r,
    multiple: i,
    open: s,
    error: a
  } = e, l = {
    select: ["select", n, r && "disabled", i && "multiple", a && "error"],
    icon: ["icon", `icon${ae(n)}`, s && "iconOpen", r && "disabled"],
    nativeInput: ["nativeInput"]
  };
  return Ue(l, T1, t);
}, mh = /* @__PURE__ */ v.forwardRef(function(t, n) {
  var r;
  const {
    "aria-describedby": i,
    "aria-label": s,
    autoFocus: a,
    autoWidth: l,
    children: c,
    className: u,
    defaultOpen: d,
    defaultValue: f,
    disabled: p,
    displayEmpty: b,
    error: y = !1,
    IconComponent: h,
    inputRef: m,
    labelId: g,
    MenuProps: C = {},
    multiple: E,
    name: O,
    onBlur: x,
    onChange: P,
    onClose: R,
    onFocus: N,
    onOpen: A,
    open: L,
    readOnly: K,
    renderValue: B,
    SelectDisplayProps: U = {},
    tabIndex: z,
    value: Y,
    variant: M = "standard"
  } = t, G = xe(t, C1), [W, le] = Or({
    controlled: Y,
    default: f,
    name: "Select"
  }), [I, X] = Or({
    controlled: L,
    default: d,
    name: "Select"
  }), se = v.useRef(null), oe = v.useRef(null), [H, Z] = v.useState(null), {
    current: te
  } = v.useRef(L != null), [ue, J] = v.useState(), ie = ct(n, m), he = v.useCallback((fe) => {
    oe.current = fe, fe && Z(fe);
  }, []), me = H == null ? void 0 : H.parentNode;
  v.useImperativeHandle(ie, () => ({
    focus: () => {
      oe.current.focus();
    },
    node: se.current,
    value: W
  }), [W]), v.useEffect(() => {
    d && I && H && !te && (J(l ? null : me.clientWidth), oe.current.focus());
  }, [H, l]), v.useEffect(() => {
    a && oe.current.focus();
  }, [a]), v.useEffect(() => {
    if (!g)
      return;
    const fe = gt(oe.current).getElementById(g);
    if (fe) {
      const Ce = () => {
        getSelection().isCollapsed && oe.current.focus();
      };
      return fe.addEventListener("click", Ce), () => {
        fe.removeEventListener("click", Ce);
      };
    }
  }, [g]);
  const D = (fe, Ce) => {
    fe ? A && A(Ce) : R && R(Ce), te || (J(l ? null : me.clientWidth), X(fe));
  }, ye = (fe) => {
    fe.button === 0 && (fe.preventDefault(), oe.current.focus(), D(!0, fe));
  }, Q = (fe) => {
    D(!1, fe);
  }, be = v.Children.toArray(c), ne = (fe) => {
    const Ce = be.find((Ke) => Ke.props.value === fe.target.value);
    Ce !== void 0 && (le(Ce.props.value), P && P(fe, Ce));
  }, Xe = (fe) => (Ce) => {
    let Ke;
    if (Ce.currentTarget.hasAttribute("tabindex")) {
      if (E) {
        Ke = Array.isArray(W) ? W.slice() : [];
        const Tt = W.indexOf(fe.props.value);
        Tt === -1 ? Ke.push(fe.props.value) : Ke.splice(Tt, 1);
      } else
        Ke = fe.props.value;
      if (fe.props.onClick && fe.props.onClick(Ce), W !== Ke && (le(Ke), P)) {
        const Tt = Ce.nativeEvent || Ce, _n = new Tt.constructor(Tt.type, Tt);
        Object.defineProperty(_n, "target", {
          writable: !0,
          value: {
            value: Ke,
            name: O
          }
        }), P(_n, fe);
      }
      E || D(!1, Ce);
    }
  }, Te = (fe) => {
    K || [
      " ",
      "ArrowUp",
      "ArrowDown",
      // The native select doesn't respond to enter on macOS, but it's recommended by
      // https://www.w3.org/WAI/ARIA/apg/patterns/combobox/examples/combobox-select-only/
      "Enter"
    ].indexOf(fe.key) !== -1 && (fe.preventDefault(), D(!0, fe));
  }, We = H !== null && I, Ve = (fe) => {
    !We && x && (Object.defineProperty(fe, "target", {
      writable: !0,
      value: {
        value: W,
        name: O
      }
    }), x(fe));
  };
  delete G["aria-invalid"];
  let Pe, He;
  const qe = [];
  let $e = !1, Ze = !1;
  (Hi({
    value: W
  }) || b) && (B ? Pe = B(W) : $e = !0);
  const ut = be.map((fe) => {
    if (!/* @__PURE__ */ v.isValidElement(fe))
      return null;
    process.env.NODE_ENV !== "production" && Ro.isFragment(fe) && console.error(["MUI: The Select component doesn't accept a Fragment as a child.", "Consider providing an array instead."].join(`
`));
    let Ce;
    if (E) {
      if (!Array.isArray(W))
        throw new Error(process.env.NODE_ENV !== "production" ? "MUI: The `value` prop must be an array when using the `Select` component with `multiple`." : ar(2));
      Ce = W.some((Ke) => Ju(Ke, fe.props.value)), Ce && $e && qe.push(fe.props.children);
    } else
      Ce = Ju(W, fe.props.value), Ce && $e && (He = fe.props.children);
    return Ce && (Ze = !0), /* @__PURE__ */ v.cloneElement(fe, {
      "aria-selected": Ce ? "true" : "false",
      onClick: Xe(fe),
      onKeyUp: (Ke) => {
        Ke.key === " " && Ke.preventDefault(), fe.props.onKeyUp && fe.props.onKeyUp(Ke);
      },
      role: "option",
      selected: Ce,
      value: void 0,
      // The value is most likely not a valid HTML attribute.
      "data-value": fe.props.value
      // Instead, we provide it as a data attribute.
    });
  });
  process.env.NODE_ENV !== "production" && v.useEffect(() => {
    if (!Ze && !E && W !== "") {
      const fe = be.map((Ce) => Ce.props.value);
      console.warn([`MUI: You have provided an out-of-range value \`${W}\` for the select ${O ? `(name="${O}") ` : ""}component.`, "Consider providing a value that matches one of the available options or ''.", `The available values are ${fe.filter((Ce) => Ce != null).map((Ce) => `\`${Ce}\``).join(", ") || '""'}.`].join(`
`));
    }
  }, [Ze, be, E, O, W]), $e && (E ? qe.length === 0 ? Pe = null : Pe = qe.reduce((fe, Ce, Ke) => (fe.push(Ce), Ke < qe.length - 1 && fe.push(", "), fe), []) : Pe = He);
  let et = ue;
  !l && te && H && (et = me.clientWidth);
  let we;
  typeof z < "u" ? we = z : we = p ? null : 0;
  const re = U.id || (O ? `mui-component-select-${O}` : void 0), Qe = w({}, t, {
    variant: M,
    value: W,
    open: We,
    error: y
  }), xt = _1(Qe), Et = w({}, C.PaperProps, (r = C.slotProps) == null ? void 0 : r.paper), Ft = ti();
  return /* @__PURE__ */ k.jsxs(v.Fragment, {
    children: [/* @__PURE__ */ k.jsx(S1, w({
      ref: he,
      tabIndex: we,
      role: "combobox",
      "aria-controls": Ft,
      "aria-disabled": p ? "true" : void 0,
      "aria-expanded": We ? "true" : "false",
      "aria-haspopup": "listbox",
      "aria-label": s,
      "aria-labelledby": [g, re].filter(Boolean).join(" ") || void 0,
      "aria-describedby": i,
      onKeyDown: Te,
      onMouseDown: p || K ? null : ye,
      onBlur: Ve,
      onFocus: N
    }, U, {
      ownerState: Qe,
      className: Oe(U.className, xt.select, u),
      id: re,
      children: $1(Pe) ? (
        // notranslate needed while Google Translate will not fix zero-width space issue
        Xu || (Xu = /* @__PURE__ */ k.jsx("span", {
          className: "notranslate",
          children: "​"
        }))
      ) : Pe
    })), /* @__PURE__ */ k.jsx(P1, w({
      "aria-invalid": y,
      value: Array.isArray(W) ? W.join(",") : W,
      name: O,
      ref: se,
      "aria-hidden": !0,
      onChange: ne,
      tabIndex: -1,
      disabled: p,
      className: xt.nativeInput,
      autoFocus: a,
      ownerState: Qe
    }, G)), /* @__PURE__ */ k.jsx(R1, {
      as: h,
      className: xt.icon,
      ownerState: Qe
    }), /* @__PURE__ */ k.jsx(l1, w({
      id: `menu-${O || ""}`,
      anchorEl: me,
      open: We,
      onClose: Q,
      anchorOrigin: {
        vertical: "bottom",
        horizontal: "center"
      },
      transformOrigin: {
        vertical: "top",
        horizontal: "center"
      }
    }, C, {
      MenuListProps: w({
        "aria-labelledby": g,
        role: "listbox",
        "aria-multiselectable": E ? "true" : void 0,
        disableListWrap: !0,
        id: Ft
      }, C.MenuListProps),
      slotProps: w({}, C.slotProps, {
        paper: w({}, Et, {
          style: w({
            minWidth: et
          }, Et != null ? Et.style : null)
        })
      }),
      children: ut
    }))]
  });
});
process.env.NODE_ENV !== "production" && (mh.propTypes = {
  /**
   * @ignore
   */
  "aria-describedby": o.string,
  /**
   * @ignore
   */
  "aria-label": o.string,
  /**
   * @ignore
   */
  autoFocus: o.bool,
  /**
   * If `true`, the width of the popover will automatically be set according to the items inside the
   * menu, otherwise it will be at least the width of the select input.
   */
  autoWidth: o.bool,
  /**
   * The option elements to populate the select with.
   * Can be some `<MenuItem>` elements.
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * The CSS class name of the select element.
   */
  className: o.string,
  /**
   * If `true`, the component is toggled on mount. Use when the component open state is not controlled.
   * You can only use it when the `native` prop is `false` (default).
   */
  defaultOpen: o.bool,
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: o.any,
  /**
   * If `true`, the select is disabled.
   */
  disabled: o.bool,
  /**
   * If `true`, the selected item is displayed even if its value is empty.
   */
  displayEmpty: o.bool,
  /**
   * If `true`, the `select input` will indicate an error.
   */
  error: o.bool,
  /**
   * The icon that displays the arrow.
   */
  IconComponent: o.elementType.isRequired,
  /**
   * Imperative handle implementing `{ value: T, node: HTMLElement, focus(): void }`
   * Equivalent to `ref`
   */
  inputRef: on,
  /**
   * The ID of an element that acts as an additional label. The Select will
   * be labelled by the additional label and the selected value.
   */
  labelId: o.string,
  /**
   * Props applied to the [`Menu`](/material-ui/api/menu/) element.
   */
  MenuProps: o.object,
  /**
   * If `true`, `value` must be an array and the menu will support multiple selections.
   */
  multiple: o.bool,
  /**
   * Name attribute of the `select` or hidden `input` element.
   */
  name: o.string,
  /**
   * @ignore
   */
  onBlur: o.func,
  /**
   * Callback fired when a menu item is selected.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (any).
   * @param {object} [child] The react element that was selected.
   */
  onChange: o.func,
  /**
   * Callback fired when the component requests to be closed.
   * Use in controlled mode (see open).
   *
   * @param {object} event The event source of the callback.
   */
  onClose: o.func,
  /**
   * @ignore
   */
  onFocus: o.func,
  /**
   * Callback fired when the component requests to be opened.
   * Use in controlled mode (see open).
   *
   * @param {object} event The event source of the callback.
   */
  onOpen: o.func,
  /**
   * If `true`, the component is shown.
   */
  open: o.bool,
  /**
   * @ignore
   */
  readOnly: o.bool,
  /**
   * Render the selected value.
   *
   * @param {any} value The `value` provided to the component.
   * @returns {ReactNode}
   */
  renderValue: o.func,
  /**
   * Props applied to the clickable div element.
   */
  SelectDisplayProps: o.object,
  /**
   * @ignore
   */
  tabIndex: o.oneOfType([o.number, o.string]),
  /**
   * @ignore
   */
  type: o.any,
  /**
   * The input value.
   */
  value: o.any,
  /**
   * The variant to use.
   */
  variant: o.oneOf(["standard", "outlined", "filled"])
});
const k1 = mh, N1 = ["autoWidth", "children", "classes", "className", "defaultOpen", "displayEmpty", "IconComponent", "id", "input", "inputProps", "label", "labelId", "MenuProps", "multiple", "native", "onClose", "onOpen", "open", "renderValue", "SelectDisplayProps", "variant"], I1 = ["root"], A1 = (e) => {
  const {
    classes: t
  } = e;
  return t;
}, zl = {
  name: "MuiSelect",
  overridesResolver: (e, t) => t.root,
  shouldForwardProp: (e) => gn(e) && e !== "variant",
  slot: "Root"
}, j1 = de(th, zl)(""), M1 = de(hh, zl)(""), D1 = de(Xp, zl)(""), Wl = /* @__PURE__ */ v.forwardRef(function(t, n) {
  const r = ze({
    name: "MuiSelect",
    props: t
  }), {
    autoWidth: i = !1,
    children: s,
    classes: a = {},
    className: l,
    defaultOpen: c = !1,
    displayEmpty: u = !1,
    IconComponent: d = Mp,
    id: f,
    input: p,
    inputProps: b,
    label: y,
    labelId: h,
    MenuProps: m,
    multiple: g = !1,
    native: C = !1,
    onClose: E,
    onOpen: O,
    open: x,
    renderValue: P,
    SelectDisplayProps: R,
    variant: N = "outlined"
  } = r, A = xe(r, N1), L = C ? m1 : k1, K = Xr(), B = Qr({
    props: r,
    muiFormControl: K,
    states: ["variant", "error"]
  }), U = B.variant || N, z = w({}, r, {
    variant: U,
    classes: a
  }), Y = A1(z), M = xe(Y, I1), G = p || {
    standard: /* @__PURE__ */ k.jsx(j1, {
      ownerState: z
    }),
    outlined: /* @__PURE__ */ k.jsx(M1, {
      label: y,
      ownerState: z
    }),
    filled: /* @__PURE__ */ k.jsx(D1, {
      ownerState: z
    })
  }[U], W = ct(n, G.ref);
  return /* @__PURE__ */ k.jsx(v.Fragment, {
    children: /* @__PURE__ */ v.cloneElement(G, w({
      // Most of the logic is implemented in `SelectInput`.
      // The `Select` component is a simple API wrapper to expose something better to play with.
      inputComponent: L,
      inputProps: w({
        children: s,
        error: B.error,
        IconComponent: d,
        variant: U,
        type: void 0,
        // We render a select. We can ignore the type provided by the `Input`.
        multiple: g
      }, C ? {
        id: f
      } : {
        autoWidth: i,
        defaultOpen: c,
        displayEmpty: u,
        labelId: h,
        MenuProps: m,
        onClose: E,
        onOpen: O,
        open: x,
        renderValue: P,
        SelectDisplayProps: w({
          id: f
        }, R)
      }, b, {
        classes: b ? Mt(M, b.classes) : M
      }, p ? p.props.inputProps : {})
    }, (g && C || u) && U === "outlined" ? {
      notched: !0
    } : {}, {
      ref: W,
      className: Oe(G.props.className, l, Y.root)
    }, !p && {
      variant: U
    }, A))
  });
});
process.env.NODE_ENV !== "production" && (Wl.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * If `true`, the width of the popover will automatically be set according to the items inside the
   * menu, otherwise it will be at least the width of the select input.
   * @default false
   */
  autoWidth: o.bool,
  /**
   * The option elements to populate the select with.
   * Can be some `MenuItem` when `native` is false and `option` when `native` is true.
   *
   * ⚠️The `MenuItem` elements **must** be direct descendants when `native` is false.
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   * @default {}
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * If `true`, the component is initially open. Use when the component open state is not controlled (i.e. the `open` prop is not defined).
   * You can only use it when the `native` prop is `false` (default).
   * @default false
   */
  defaultOpen: o.bool,
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: o.any,
  /**
   * If `true`, a value is displayed even if no items are selected.
   *
   * In order to display a meaningful value, a function can be passed to the `renderValue` prop which
   * returns the value to be displayed when no items are selected.
   *
   * ⚠️ When using this prop, make sure the label doesn't overlap with the empty displayed value.
   * The label should either be hidden or forced to a shrunk state.
   * @default false
   */
  displayEmpty: o.bool,
  /**
   * The icon that displays the arrow.
   * @default ArrowDropDownIcon
   */
  IconComponent: o.elementType,
  /**
   * The `id` of the wrapper element or the `select` element when `native`.
   */
  id: o.string,
  /**
   * An `Input` element; does not have to be a material-ui specific `Input`.
   */
  input: o.element,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   * When `native` is `true`, the attributes are applied on the `select` element.
   */
  inputProps: o.object,
  /**
   * See [OutlinedInput#label](/material-ui/api/outlined-input/#props)
   */
  label: o.node,
  /**
   * The ID of an element that acts as an additional label. The Select will
   * be labelled by the additional label and the selected value.
   */
  labelId: o.string,
  /**
   * Props applied to the [`Menu`](/material-ui/api/menu/) element.
   */
  MenuProps: o.object,
  /**
   * If `true`, `value` must be an array and the menu will support multiple selections.
   * @default false
   */
  multiple: o.bool,
  /**
   * If `true`, the component uses a native `select` element.
   * @default false
   */
  native: o.bool,
  /**
   * Callback fired when a menu item is selected.
   *
   * @param {SelectChangeEvent<Value>} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (any).
   * **Warning**: This is a generic event, not a change event, unless the change event is caused by browser autofill.
   * @param {object} [child] The react element that was selected when `native` is `false` (default).
   */
  onChange: o.func,
  /**
   * Callback fired when the component requests to be closed.
   * Use it in either controlled (see the `open` prop), or uncontrolled mode (to detect when the Select collapses).
   *
   * @param {object} event The event source of the callback.
   */
  onClose: o.func,
  /**
   * Callback fired when the component requests to be opened.
   * Use it in either controlled (see the `open` prop), or uncontrolled mode (to detect when the Select expands).
   *
   * @param {object} event The event source of the callback.
   */
  onOpen: o.func,
  /**
   * If `true`, the component is shown.
   * You can only use it when the `native` prop is `false` (default).
   */
  open: o.bool,
  /**
   * Render the selected value.
   * You can only use it when the `native` prop is `false` (default).
   *
   * @param {any} value The `value` provided to the component.
   * @returns {ReactNode}
   */
  renderValue: o.func,
  /**
   * Props applied to the clickable div element.
   */
  SelectDisplayProps: o.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * The `input` value. Providing an empty string will select no options.
   * Set to an empty string `''` if you don't want any of the available options to be selected.
   *
   * If the value is an object it must have reference equality with the option in order to be selected.
   * If the value is not an object, the string representation must match with the string representation of the option in order to be selected.
   */
  value: o.oneOfType([o.oneOf([""]), o.any]),
  /**
   * The variant to use.
   * @default 'outlined'
   */
  variant: o.oneOf(["filled", "outlined", "standard"])
});
Wl.muiName = "Select";
const F1 = Wl;
function L1(e) {
  return Le("MuiTextField", e);
}
Be("MuiTextField", ["root"]);
const B1 = ["autoComplete", "autoFocus", "children", "className", "color", "defaultValue", "disabled", "error", "FormHelperTextProps", "fullWidth", "helperText", "id", "InputLabelProps", "inputProps", "InputProps", "inputRef", "label", "maxRows", "minRows", "multiline", "name", "onBlur", "onChange", "onFocus", "placeholder", "required", "rows", "select", "SelectProps", "type", "value", "variant"], V1 = {
  standard: th,
  filled: Xp,
  outlined: hh
}, U1 = (e) => {
  const {
    classes: t
  } = e;
  return Ue({
    root: ["root"]
  }, L1, t);
}, z1 = de(fC, {
  name: "MuiTextField",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({}), yh = /* @__PURE__ */ v.forwardRef(function(t, n) {
  const r = ze({
    props: t,
    name: "MuiTextField"
  }), {
    autoComplete: i,
    autoFocus: s = !1,
    children: a,
    className: l,
    color: c = "primary",
    defaultValue: u,
    disabled: d = !1,
    error: f = !1,
    FormHelperTextProps: p,
    fullWidth: b = !1,
    helperText: y,
    id: h,
    InputLabelProps: m,
    inputProps: g,
    InputProps: C,
    inputRef: E,
    label: O,
    maxRows: x,
    minRows: P,
    multiline: R = !1,
    name: N,
    onBlur: A,
    onChange: L,
    onFocus: K,
    placeholder: B,
    required: U = !1,
    rows: z,
    select: Y = !1,
    SelectProps: M,
    type: G,
    value: W,
    variant: le = "outlined"
  } = r, I = xe(r, B1), X = w({}, r, {
    autoFocus: s,
    color: c,
    disabled: d,
    error: f,
    fullWidth: b,
    multiline: R,
    required: U,
    select: Y,
    variant: le
  }), se = U1(X);
  process.env.NODE_ENV !== "production" && Y && !a && console.error("MUI: `children` must be passed when using the `TextField` component with `select`.");
  const oe = {};
  le === "outlined" && (m && typeof m.shrink < "u" && (oe.notched = m.shrink), oe.label = O), Y && ((!M || !M.native) && (oe.id = void 0), oe["aria-describedby"] = void 0);
  const H = ti(h), Z = y && H ? `${H}-helper-text` : void 0, te = O && H ? `${H}-label` : void 0, ue = V1[le], J = /* @__PURE__ */ k.jsx(ue, w({
    "aria-describedby": Z,
    autoComplete: i,
    autoFocus: s,
    defaultValue: u,
    fullWidth: b,
    multiline: R,
    name: N,
    rows: z,
    maxRows: x,
    minRows: P,
    type: G,
    value: W,
    id: H,
    inputRef: E,
    onBlur: A,
    onChange: L,
    onFocus: K,
    placeholder: B,
    inputProps: g
  }, oe, C));
  return /* @__PURE__ */ k.jsxs(z1, w({
    className: Oe(se.root, l),
    disabled: d,
    error: f,
    fullWidth: b,
    ref: n,
    required: U,
    color: c,
    variant: le,
    ownerState: X
  }, I, {
    children: [O != null && O !== "" && /* @__PURE__ */ k.jsx(DC, w({
      htmlFor: H,
      id: te
    }, m, {
      children: O
    })), Y ? /* @__PURE__ */ k.jsx(F1, w({
      "aria-describedby": Z,
      id: H,
      labelId: te,
      value: W,
      input: J
    }, M, {
      children: a
    })) : J, y && /* @__PURE__ */ k.jsx(vC, w({
      id: Z
    }, p, {
      children: y
    }))]
  }));
});
process.env.NODE_ENV !== "production" && (yh.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * This prop helps users to fill forms faster, especially on mobile devices.
   * The name can be confusing, as it's more like an autofill.
   * You can learn more about it [following the specification](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill).
   */
  autoComplete: o.string,
  /**
   * If `true`, the `input` element is focused during the first mount.
   * @default false
   */
  autoFocus: o.bool,
  /**
   * @ignore
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'primary'
   */
  color: o.oneOfType([o.oneOf(["primary", "secondary", "error", "info", "success", "warning"]), o.string]),
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: o.any,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: o.bool,
  /**
   * If `true`, the label is displayed in an error state.
   * @default false
   */
  error: o.bool,
  /**
   * Props applied to the [`FormHelperText`](/material-ui/api/form-helper-text/) element.
   */
  FormHelperTextProps: o.object,
  /**
   * If `true`, the input will take up the full width of its container.
   * @default false
   */
  fullWidth: o.bool,
  /**
   * The helper text content.
   */
  helperText: o.node,
  /**
   * The id of the `input` element.
   * Use this prop to make `label` and `helperText` accessible for screen readers.
   */
  id: o.string,
  /**
   * Props applied to the [`InputLabel`](/material-ui/api/input-label/) element.
   * Pointer events like `onClick` are enabled if and only if `shrink` is `true`.
   */
  InputLabelProps: o.object,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   */
  inputProps: o.object,
  /**
   * Props applied to the Input element.
   * It will be a [`FilledInput`](/material-ui/api/filled-input/),
   * [`OutlinedInput`](/material-ui/api/outlined-input/) or [`Input`](/material-ui/api/input/)
   * component depending on the `variant` prop value.
   */
  InputProps: o.object,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: on,
  /**
   * The label content.
   */
  label: o.node,
  /**
   * If `dense` or `normal`, will adjust vertical spacing of this and contained components.
   * @default 'none'
   */
  margin: o.oneOf(["dense", "none", "normal"]),
  /**
   * Maximum number of rows to display when multiline option is set to true.
   */
  maxRows: o.oneOfType([o.number, o.string]),
  /**
   * Minimum number of rows to display when multiline option is set to true.
   */
  minRows: o.oneOfType([o.number, o.string]),
  /**
   * If `true`, a `textarea` element is rendered instead of an input.
   * @default false
   */
  multiline: o.bool,
  /**
   * Name attribute of the `input` element.
   */
  name: o.string,
  /**
   * @ignore
   */
  onBlur: o.func,
  /**
   * Callback fired when the value is changed.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: o.func,
  /**
   * @ignore
   */
  onFocus: o.func,
  /**
   * The short hint displayed in the `input` before the user enters a value.
   */
  placeholder: o.string,
  /**
   * If `true`, the label is displayed as required and the `input` element is required.
   * @default false
   */
  required: o.bool,
  /**
   * Number of rows to display when multiline option is set to true.
   */
  rows: o.oneOfType([o.number, o.string]),
  /**
   * Render a [`Select`](/material-ui/api/select/) element while passing the Input element to `Select` as `input` parameter.
   * If this option is set you must pass the options of the select as children.
   * @default false
   */
  select: o.bool,
  /**
   * Props applied to the [`Select`](/material-ui/api/select/) element.
   */
  SelectProps: o.object,
  /**
   * The size of the component.
   */
  size: o.oneOfType([o.oneOf(["medium", "small"]), o.string]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * Type of the `input` element. It should be [a valid HTML5 input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types).
   */
  type: o.string,
  /**
   * The value of the `input` element, required for a controlled component.
   */
  value: o.any,
  /**
   * The variant to use.
   * @default 'outlined'
   */
  variant: o.oneOf(["filled", "outlined", "standard"])
});
const W1 = yh;
var ql = {}, na = {};
const q1 = /* @__PURE__ */ Pn(Vx);
var Zu;
function bh() {
  return Zu || (Zu = 1, function(e) {
    "use client";
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), Object.defineProperty(e, "default", {
      enumerable: !0,
      get: function() {
        return t.createSvgIcon;
      }
    });
    var t = q1;
  }(na)), na;
}
var H1 = xs;
Object.defineProperty(ql, "__esModule", {
  value: !0
});
var vh = ql.default = void 0, K1 = H1(bh()), Y1 = k;
vh = ql.default = (0, K1.default)(/* @__PURE__ */ (0, Y1.jsx)("path", {
  d: "M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14"
}), "Search");
var Hl = {}, G1 = xs;
Object.defineProperty(Hl, "__esModule", {
  value: !0
});
var gh = Hl.default = void 0, Q1 = G1(bh()), X1 = k;
gh = Hl.default = (0, Q1.default)(/* @__PURE__ */ (0, X1.jsx)("path", {
  d: "M12 1 3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5zm7 10c0 4.52-2.98 8.69-7 9.93-4.02-1.24-7-5.41-7-9.93V6.3l7-3.11 7 3.11zm-11.59.59L6 13l4 4 8-8-1.41-1.42L10 14.17z"
}), "VerifiedUserOutlined");
const J1 = (e) => {
  var i;
  const { data: t, isLoading: n } = ab({}), r = ((i = t == null ? void 0 : t.data) == null ? void 0 : i.items) || [];
  return /* @__PURE__ */ k.jsx(
    fT,
    {
      options: r,
      getOptionLabel: (s) => `${s.clientId}`,
      sx: { minWidth: { xs: "auto", sm: 400 } },
      onChange: (s, a) => {
        var l;
        Ko.getInstance().broadcast({
          type: Bd.Redirection,
          entityType: Ld.Client,
          data: a
        }), (l = e == null ? void 0 : e.onSelect) == null || l.call(e, a);
      },
      renderInput: (s) => /* @__PURE__ */ k.jsx(
        W1,
        {
          ...s,
          placeholder: "Type to search ...",
          InputProps: {
            ...s.InputProps,
            startAdornment: n ? /* @__PURE__ */ k.jsx(kT, { size: "sm" }) : /* @__PURE__ */ k.jsx(vh, {})
          }
        }
      ),
      loading: n,
      renderOption: (s, a) => /* @__PURE__ */ k.jsxs(OT, { component: "li", sx: { display: "flex", justifyContent: "center", alignItems: "flex-start" }, ...s, children: [
        /* @__PURE__ */ k.jsx(gh, {}),
        /* @__PURE__ */ k.jsx(Sl, { sx: { ml: 2 }, variant: "body2", children: `${a == null ? void 0 : a.firstName} ${a == null ? void 0 : a.lastName}` })
      ] })
    }
  );
}, xh = At.createContext({}), Z1 = () => Yi(xh), eS = (e = {}) => {
  var c;
  const [t, n] = _h(!1), { globalConfig: r } = Z1(), { hotKey: i = (c = r == null ? void 0 : r.getOptions()) == null ? void 0 : c.defaultHotkey } = e;
  ob(i, async () => {
    var u;
    try {
      await ((u = r == null ? void 0 : r.onOpenDialog) == null ? void 0 : u.call(r)), n(!0);
    } catch (d) {
      console.log(d);
    }
  });
  const { breakpoints: s } = ni(), a = t0(s.down("sm")), l = () => {
    n(!1);
  };
  return /* @__PURE__ */ k.jsxs(qT, { fullScreen: a, maxWidth: "md", ...e, open: t, onClose: l, children: [
    /* @__PURE__ */ k.jsx(rC, { children: /* @__PURE__ */ k.jsx(Sl, { children: "Search" }) }),
    /* @__PURE__ */ k.jsx(ZT, { children: /* @__PURE__ */ k.jsx(J1, { onSelect: l }) })
  ] });
}, Eh = (e) => {
  cd(() => {
    var n, r;
    const t = (r = (n = Ko.getInstance()) == null ? void 0 : n.subscribe) == null ? void 0 : r.call(n, (...i) => {
      e == null || e(...i);
    });
    return () => {
      var i;
      (i = t == null ? void 0 : t.unsubscribe) == null || i.call(t);
    };
  });
}, iS = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Eh
}, Symbol.toStringTag, { value: "Module" })), Oh = (e) => {
  const { onEventPublished: t } = e;
  return Eh(t), /* @__PURE__ */ k.jsx(
    xh.Provider,
    {
      value: {
        globalConfig: Ko.getInstance()
      },
      children: e.children
    }
  );
}, sS = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Oh
}, Symbol.toStringTag, { value: "Module" })), tS = new Cy(), aS = () => Ko.getInstance().isReady() && /* @__PURE__ */ k.jsx(Oh, { children: /* @__PURE__ */ k.jsx(_y, { client: tS, children: /* @__PURE__ */ k.jsx(eS, {}) }) });
export {
  uc as Application,
  Ld as ApplicationEntity,
  Bd as ApplicationEventType,
  aS as YocaleFinder,
  Ko as YocaleFinderGlobalConfig,
  sS as YocaleFinderProvider,
  iS as useYocaleFinderEvent
};
//# sourceMappingURL=index.es.js.map
