!(function (t) {
  var e = {};
  function r(n) {
    if (e[n]) return e[n].exports;
    var o = (e[n] = { i: n, l: !1, exports: {} });
    return t[n].call(o.exports, o, o.exports, r), (o.l = !0), o.exports;
  }
  (r.m = t),
    (r.c = e),
    (r.d = function (t, e, n) {
      r.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: n });
    }),
    (r.r = function (t) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    (r.t = function (t, e) {
      if ((1 & e && (t = r(t)), 8 & e)) return t;
      if (4 & e && "object" == typeof t && t && t.__esModule) return t;
      var n = Object.create(null);
      if (
        (r.r(n),
        Object.defineProperty(n, "default", { enumerable: !0, value: t }),
        2 & e && "string" != typeof t)
      )
        for (var o in t)
          r.d(
            n,
            o,
            function (e) {
              return t[e];
            }.bind(null, o)
          );
      return n;
    }),
    (r.n = function (t) {
      var e =
        t && t.__esModule
          ? function () {
              return t.default;
            }
          : function () {
              return t;
            };
      return r.d(e, "a", e), e;
    }),
    (r.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (r.p = "/"),
    r((r.s = 26));
})([
  function (t, e, r) {
    t.exports = r(6);
  },
  function (t, e) {
    function r(t, e, r, n, o, i, a) {
      try {
        var s = t[i](a),
          u = s.value;
      } catch (t) {
        return void r(t);
      }
      s.done ? e(u) : Promise.resolve(u).then(n, o);
    }
    (t.exports = function (t) {
      return function () {
        var e = this,
          n = arguments;
        return new Promise(function (o, i) {
          var a = t.apply(e, n);
          function s(t) {
            r(a, o, i, s, u, "next", t);
          }
          function u(t) {
            r(a, o, i, s, u, "throw", t);
          }
          s(void 0);
        });
      };
    }),
      (t.exports.default = t.exports),
      (t.exports.__esModule = !0);
  },
  function (t, e, r) {
    "use strict";
    function n(t) {
      return (n =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                "function" == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? "symbol"
                : typeof t;
            })(t);
    }
    t.exports = function (t) {
      return null !== t && "object" === n(t);
    };
  },
  function (t, e, r) {
    "use strict";
    var n =
        (this && this.__awaiter) ||
        function (t, e, r, n) {
          return new (r || (r = Promise))(function (o, i) {
            function a(t) {
              try {
                u(n.next(t));
              } catch (t) {
                i(t);
              }
            }
            function s(t) {
              try {
                u(n.throw(t));
              } catch (t) {
                i(t);
              }
            }
            function u(t) {
              var e;
              t.done
                ? o(t.value)
                : ((e = t.value),
                  e instanceof r
                    ? e
                    : new r(function (t) {
                        t(e);
                      })).then(a, s);
            }
            u((n = n.apply(t, e || [])).next());
          });
        },
      o =
        (this && this.__generator) ||
        function (t, e) {
          var r,
            n,
            o,
            i,
            a = {
              label: 0,
              sent: function () {
                if (1 & o[0]) throw o[1];
                return o[1];
              },
              trys: [],
              ops: [],
            };
          return (
            (i = { next: s(0), throw: s(1), return: s(2) }),
            "function" == typeof Symbol &&
              (i[Symbol.iterator] = function () {
                return this;
              }),
            i
          );
          function s(i) {
            return function (s) {
              return (function (i) {
                if (r) throw new TypeError("Generator is already executing.");
                for (; a; )
                  try {
                    if (
                      ((r = 1),
                      n &&
                        (o =
                          2 & i[0]
                            ? n.return
                            : i[0]
                            ? n.throw || ((o = n.return) && o.call(n), 0)
                            : n.next) &&
                        !(o = o.call(n, i[1])).done)
                    )
                      return o;
                    switch (((n = 0), o && (i = [2 & i[0], o.value]), i[0])) {
                      case 0:
                      case 1:
                        o = i;
                        break;
                      case 4:
                        return a.label++, { value: i[1], done: !1 };
                      case 5:
                        a.label++, (n = i[1]), (i = [0]);
                        continue;
                      case 7:
                        (i = a.ops.pop()), a.trys.pop();
                        continue;
                      default:
                        if (
                          !((o = a.trys),
                          (o = o.length > 0 && o[o.length - 1]) ||
                            (6 !== i[0] && 2 !== i[0]))
                        ) {
                          a = 0;
                          continue;
                        }
                        if (
                          3 === i[0] &&
                          (!o || (i[1] > o[0] && i[1] < o[3]))
                        ) {
                          a.label = i[1];
                          break;
                        }
                        if (6 === i[0] && a.label < o[1]) {
                          (a.label = o[1]), (o = i);
                          break;
                        }
                        if (o && a.label < o[2]) {
                          (a.label = o[2]), a.ops.push(i);
                          break;
                        }
                        o[2] && a.ops.pop(), a.trys.pop();
                        continue;
                    }
                    i = e.call(t, a);
                  } catch (t) {
                    (i = [6, t]), (n = 0);
                  } finally {
                    r = o = 0;
                  }
                if (5 & i[0]) throw i[1];
                return { value: i[0] ? i[1] : void 0, done: !0 };
              })([i, s]);
            };
          }
        };
    Object.defineProperty(e, "__esModule", { value: !0 });
    var i = r(7),
      a = r(14),
      s = {
        default: "static-web.likeevideo.com",
        bigolive: "static-web.bigolive.tv",
        likee: "static-web.likee.com",
        "likee-india": "static-web.hzmk.site",
        "likee-india-backup": "static-web.ukyuh.tech",
        likeevideo: "static-web.likeevideo.com",
        hello: "static-web.520hello.com",
        yiqi: "static-web.521yiqi.com",
        ppx: "static-web.ppx520.com",
        cm: "static-web.youxishequ.net",
        helloyo: "static-web.hello.fun",
        "helloyo-backup": "static-web.helloyo.sg",
        imo: "static-web.imoim.net",
        bigopay: "static-web.bigopay.sg",
      };
    function u(t) {
      return "string" == typeof t ? t : !0 === t && a.getCurrentLocale();
    }
    function c(t) {
      var e = t.domain || s[t.bizType || "default"] || s.default,
        r = !1;
      try {
        "undefined" != typeof window &&
          window.PEAR_INIT_INFO &&
          window.PEAR_INIT_INFO.config &&
          window.PEAR_INIT_INFO.config[e] &&
          window.PEAR_INIT_INFO.replace &&
          ((e = window.PEAR_INIT_INFO.config[e]), (r = !0));
      } catch (t) {
        console.log(t);
      }
      return r ? e : "https://" + e;
    }
    function l(t, e, r, n) {
      var o =
        n ||
        (function (t) {
          try {
            var e = new RegExp("(^|&)" + t + "=([^&]*)(&|$)"),
              r = window.location.search.substr(1).match(e);
            return null != r ? unescape(r[2]) : null;
          } catch (t) {
            return null;
          }
        })("pear_env");
      return "preview" === o
        ? "https://pear-config.bigo.sg/config/preview/" + e
        : "gray" === o
        ? t +
          "/as/common-static/pear/prod/gray-" +
          e +
          (r ? "-" + r : "") +
          ".json?t=" +
          Date.now()
        : t +
          "/as/common-static/pear/prod/" +
          e +
          (r ? "-" + r : "") +
          ".json?t=" +
          Date.now();
    }
    var f = (function () {
      function t(t) {
        (this.lang = u(t.lang)),
          (this.domain = c(t)),
          (this.pearEnv = t.pearEnv);
      }
      return (
        (t.fetch = function (t) {
          return n(this, void 0, void 0, function () {
            var e, r, n, a;
            return o(this, function (o) {
              switch (o.label) {
                case 0:
                  return (
                    (e = u(t.lang)),
                    (r = c(t)),
                    (n = l(r, t.id, e, t.pearEnv)),
                    [4, i.get(n)]
                  );
                case 1:
                  return "text/plain" === (a = o.sent()).type
                    ? [2, JSON.parse(a.text)]
                    : [2, a.body];
              }
            });
          });
        }),
        (t.prototype.fetch = function (t) {
          return n(this, void 0, void 0, function () {
            var e, r, n, a;
            return o(this, function (o) {
              switch (o.label) {
                case 0:
                  return (
                    (e = void 0 !== t.lang ? u(t.lang) : this.lang),
                    (r = this.domain),
                    (t.domain || t.bizType) && (r = c(t)),
                    (n = l(r, t.id, e, t.pearEnv || this.pearEnv)),
                    [4, i.get(n)]
                  );
                case 1:
                  return "text/plain" === (a = o.sent()).type
                    ? [2, JSON.parse(a.text)]
                    : [2, a.body];
              }
            });
          });
        }),
        t
      );
    })();
    e.default = f;
  },
  function (module, __webpack_exports__, __webpack_require__) {
    "use strict";
    __webpack_require__.d(__webpack_exports__, "b", function () {
      return getURL;
    }),
      __webpack_require__.d(__webpack_exports__, "a", function () {
        return getCurrentLng;
      }),
      __webpack_require__.d(__webpack_exports__, "c", function () {
        return initVideo;
      }),
      __webpack_require__.d(__webpack_exports__, "d", function () {
        return moniterScroll;
      });
    var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ =
        __webpack_require__(1),
      _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default =
        __webpack_require__.n(
          _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__
        ),
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ =
        __webpack_require__(0),
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default =
        __webpack_require__.n(
          _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__
        ),
      _bigo_pear_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3),
      _bigo_pear_fetch__WEBPACK_IMPORTED_MODULE_2___default =
        __webpack_require__.n(_bigo_pear_fetch__WEBPACK_IMPORTED_MODULE_2__);
    function getURL(t) {
      var e = new RegExp("(^|&)" + t + "=([^&]*)(&|$)"),
        r = decodeURI(window.location.search).substr(1).match(e);
      return null != r ? r[2] : null;
    }
    function getCurrentLng() {
      return localStorage.getItem("currentLng") || "EN";
    }
    function checkIsTestEnv() {
      return /test|\:\d+/.test(window.location.origin);
    }
    var isTestEnv = checkIsTestEnv();
    function initI18n() {
      return _initI18n.apply(this, arguments);
    }
    function _initI18n() {
      return (_initI18n =
        _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()(
          _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(
            function t() {
              var e, r, n, o, i, a, s, u;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(
                function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (
                          (e = localStorage.getItem("currentLng") || "EN"),
                          (r =
                            new _bigo_pear_fetch__WEBPACK_IMPORTED_MODULE_2___default.a(
                              {
                                bizType: "likee",
                                pearEnv: isTestEnv ? "gray" : "",
                              }
                            )),
                          (t.next = 4),
                          r.fetch({ id: 10000000089 })
                        );
                      case 4:
                        for (a in ((n = t.sent),
                        (o = n[e]),
                        (window.lngConf = o),
                        (i = function (t) {
                          "lang006" === t
                            ? o[t].split(",").map(function (e, r) {
                                $('[enKey="'.concat(t + r, '"]')).html(e);
                              })
                            : $('[enKey="'.concat(t, '"]')).html(o[t]);
                        }),
                        o))
                          i(a);
                        "EN" === e
                          ? $(".imitationSelect").val("English")
                          : ((s = $("#EN")),
                            (u = $("#CN")),
                            s.text("简体中文").attr("id", "CN"),
                            u.text("English").attr("id", "EN"),
                            $(".imitationSelect").val("简体中文")),
                          $("body").show();
                      case 11:
                      case "end":
                        return t.stop();
                    }
                },
                t
              );
            }
          )
        )).apply(this, arguments);
    }
    function setCurrentLng() {
      var t =
        arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "EN";
      localStorage.setItem("currentLng", t), location.reload();
    }
    function initVideo() {
      videojs("my-player", {}, function () {
        videojs.log("Your player is ready!"),
          this.play(),
          this.on("ended", function () {
            videojs.log("Awww...over so soon?!");
          });
      });
    }
    function moniterScroll(targetEle, offset) {
      if (0 === $(targetEle).length) return !1;
      var targetEleTop = $(targetEle).offset().top,
        currentTop = eval(targetEleTop + offset),
        scrollTop = $(window).scrollTop(),
        winHeight = $(window).height();
      return scrollTop + winHeight > currentTop;
    }
    function initSection6Animation() {
      lottie.loadAnimation({
        container: $(".sixth-content-lottie")[0],
        renderer: "svg",
        loop: !1,
        autoplay: !0,
        path: "https://static-web.likee.com/as/common-static/ads-home/sixthPage.json",
      });
    }
    (window.moniterScroll = moniterScroll),
      $(
        _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()(
          _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(
            function t() {
              var e;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(
                function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (t.next = 2), initI18n();
                      case 2:
                        $("#EN").on("click", function () {
                          setCurrentLng("EN");
                        }),
                          $("#CN").on("click", function () {
                            setCurrentLng("CN");
                          }),
                          (e = { isPage6Scrolled: !1 }),
                          $(window).scroll(function () {
                            moniterScroll(".sixth-section", 100) &&
                              !e.isPage6Scrolled &&
                              ((e.isPage6Scrolled = !0),
                              initSection6Animation());
                          }),
                          $(".selectBox .inputCase").on("click", function () {
                            var t = $(this).parent().find(".selectUl");
                            t.is(":hidden")
                              ? $(this)
                                  .find(".fa-caret-down")
                                  .addClass("rotate")
                              : $(this)
                                  .find(".fa-caret-down")
                                  .removeClass("rotate"),
                              t.slideToggle("fast", "linear"),
                              event.stopPropagation
                                ? event.stopPropagation()
                                : window.event &&
                                  (window.event.cancelBubble = !0);
                          }),
                          $(".selectUl li").click(function (t) {
                            $(this)
                              .addClass("actived_li")
                              .siblings()
                              .removeClass("actived_li"),
                              setCurrentLng($(this).attr("oliId"));
                          }),
                          $(document).click(function (t) {
                            $(".selectUl").hide(),
                              $(this)
                                .find(".fa-caret-down")
                                .removeClass("rotate");
                          }),
                          $("#tabs li").on("click", function (t, e) {
                            $(this)
                              .addClass("show")
                              .siblings()
                              .removeClass("show"),
                              $(this)
                                .parents()
                                .find(".tab-box .tab-item")
                                .eq($(this).index())
                                .addClass("show")
                                .siblings()
                                .removeClass("show");
                          }),
                          $(".nav-tree").click(function (t) {
                            var e = $(this).find(".icon-arrow");
                            e
                              .parent()
                              .siblings(".nav-item-sub-wrapper")
                              .slideToggle("fast", "linear"),
                              e.hasClass("down")
                                ? (e.removeClass("down"), e.addClass("up"))
                                : (e.removeClass("up"), e.addClass("down"));
                          }),
                          $(".nav-mask").click(function (t) {
                            t.currentTarget === t.target &&
                              ($(".nav-mask").hide(),
                              $(".nav-slide").css({ right: "-320px" }),
                              $(".nav-slide .icon-arrow")
                                .removeClass("up")
                                .addClass("down"),
                              $(".nav-slide .icon-arrow")
                                .siblings(".nav-item-sub-wrapper")
                                .hide());
                          }),
                          $(".nav-mobile-button").click(function (t) {
                            $(".nav-mask").toggle(),
                              $(".nav-slide").animate({ right: "0px" }, 300);
                          });
                      case 11:
                      case "end":
                        return t.stop();
                    }
                },
                t
              );
            }
          )
        )
      );
  },
  function (t, e, r) {},
  function (t, e, r) {
    var n = (function (t) {
      "use strict";
      var e = Object.prototype,
        r = e.hasOwnProperty,
        n = "function" == typeof Symbol ? Symbol : {},
        o = n.iterator || "@@iterator",
        i = n.asyncIterator || "@@asyncIterator",
        a = n.toStringTag || "@@toStringTag";
      function s(t, e, r) {
        return (
          Object.defineProperty(t, e, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          }),
          t[e]
        );
      }
      try {
        s({}, "");
      } catch (t) {
        s = function (t, e, r) {
          return (t[e] = r);
        };
      }
      function u(t, e, r, n) {
        var o = e && e.prototype instanceof f ? e : f,
          i = Object.create(o.prototype),
          a = new x(n || []);
        return (
          (i._invoke = (function (t, e, r) {
            var n = "suspendedStart";
            return function (o, i) {
              if ("executing" === n)
                throw new Error("Generator is already running");
              if ("completed" === n) {
                if ("throw" === o) throw i;
                return T();
              }
              for (r.method = o, r.arg = i; ; ) {
                var a = r.delegate;
                if (a) {
                  var s = b(a, r);
                  if (s) {
                    if (s === l) continue;
                    return s;
                  }
                }
                if ("next" === r.method) r.sent = r._sent = r.arg;
                else if ("throw" === r.method) {
                  if ("suspendedStart" === n) throw ((n = "completed"), r.arg);
                  r.dispatchException(r.arg);
                } else "return" === r.method && r.abrupt("return", r.arg);
                n = "executing";
                var u = c(t, e, r);
                if ("normal" === u.type) {
                  if (
                    ((n = r.done ? "completed" : "suspendedYield"), u.arg === l)
                  )
                    continue;
                  return { value: u.arg, done: r.done };
                }
                "throw" === u.type &&
                  ((n = "completed"), (r.method = "throw"), (r.arg = u.arg));
              }
            };
          })(t, r, a)),
          i
        );
      }
      function c(t, e, r) {
        try {
          return { type: "normal", arg: t.call(e, r) };
        } catch (t) {
          return { type: "throw", arg: t };
        }
      }
      t.wrap = u;
      var l = {};
      function f() {}
      function p() {}
      function h() {}
      var d = {};
      d[o] = function () {
        return this;
      };
      var y = Object.getPrototypeOf,
        _ = y && y(y(O([])));
      _ && _ !== e && r.call(_, o) && (d = _);
      var v = (h.prototype = f.prototype = Object.create(d));
      function g(t) {
        ["next", "throw", "return"].forEach(function (e) {
          s(t, e, function (t) {
            return this._invoke(e, t);
          });
        });
      }
      function m(t, e) {
        var n;
        this._invoke = function (o, i) {
          function a() {
            return new e(function (n, a) {
              !(function n(o, i, a, s) {
                var u = c(t[o], t, i);
                if ("throw" !== u.type) {
                  var l = u.arg,
                    f = l.value;
                  return f && "object" == typeof f && r.call(f, "__await")
                    ? e.resolve(f.__await).then(
                        function (t) {
                          n("next", t, a, s);
                        },
                        function (t) {
                          n("throw", t, a, s);
                        }
                      )
                    : e.resolve(f).then(
                        function (t) {
                          (l.value = t), a(l);
                        },
                        function (t) {
                          return n("throw", t, a, s);
                        }
                      );
                }
                s(u.arg);
              })(o, i, n, a);
            });
          }
          return (n = n ? n.then(a, a) : a());
        };
      }
      function b(t, e) {
        var r = t.iterator[e.method];
        if (void 0 === r) {
          if (((e.delegate = null), "throw" === e.method)) {
            if (
              t.iterator.return &&
              ((e.method = "return"),
              (e.arg = void 0),
              b(t, e),
              "throw" === e.method)
            )
              return l;
            (e.method = "throw"),
              (e.arg = new TypeError(
                "The iterator does not provide a 'throw' method"
              ));
          }
          return l;
        }
        var n = c(r, t.iterator, e.arg);
        if ("throw" === n.type)
          return (e.method = "throw"), (e.arg = n.arg), (e.delegate = null), l;
        var o = n.arg;
        return o
          ? o.done
            ? ((e[t.resultName] = o.value),
              (e.next = t.nextLoc),
              "return" !== e.method && ((e.method = "next"), (e.arg = void 0)),
              (e.delegate = null),
              l)
            : o
          : ((e.method = "throw"),
            (e.arg = new TypeError("iterator result is not an object")),
            (e.delegate = null),
            l);
      }
      function w(t) {
        var e = { tryLoc: t[0] };
        1 in t && (e.catchLoc = t[1]),
          2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
          this.tryEntries.push(e);
      }
      function E(t) {
        var e = t.completion || {};
        (e.type = "normal"), delete e.arg, (t.completion = e);
      }
      function x(t) {
        (this.tryEntries = [{ tryLoc: "root" }]),
          t.forEach(w, this),
          this.reset(!0);
      }
      function O(t) {
        if (t) {
          var e = t[o];
          if (e) return e.call(t);
          if ("function" == typeof t.next) return t;
          if (!isNaN(t.length)) {
            var n = -1,
              i = function e() {
                for (; ++n < t.length; )
                  if (r.call(t, n)) return (e.value = t[n]), (e.done = !1), e;
                return (e.value = void 0), (e.done = !0), e;
              };
            return (i.next = i);
          }
        }
        return { next: T };
      }
      function T() {
        return { value: void 0, done: !0 };
      }
      return (
        (p.prototype = v.constructor = h),
        (h.constructor = p),
        (p.displayName = s(h, a, "GeneratorFunction")),
        (t.isGeneratorFunction = function (t) {
          var e = "function" == typeof t && t.constructor;
          return (
            !!e &&
            (e === p || "GeneratorFunction" === (e.displayName || e.name))
          );
        }),
        (t.mark = function (t) {
          return (
            Object.setPrototypeOf
              ? Object.setPrototypeOf(t, h)
              : ((t.__proto__ = h), s(t, a, "GeneratorFunction")),
            (t.prototype = Object.create(v)),
            t
          );
        }),
        (t.awrap = function (t) {
          return { __await: t };
        }),
        g(m.prototype),
        (m.prototype[i] = function () {
          return this;
        }),
        (t.AsyncIterator = m),
        (t.async = function (e, r, n, o, i) {
          void 0 === i && (i = Promise);
          var a = new m(u(e, r, n, o), i);
          return t.isGeneratorFunction(r)
            ? a
            : a.next().then(function (t) {
                return t.done ? t.value : a.next();
              });
        }),
        g(v),
        s(v, a, "Generator"),
        (v[o] = function () {
          return this;
        }),
        (v.toString = function () {
          return "[object Generator]";
        }),
        (t.keys = function (t) {
          var e = [];
          for (var r in t) e.push(r);
          return (
            e.reverse(),
            function r() {
              for (; e.length; ) {
                var n = e.pop();
                if (n in t) return (r.value = n), (r.done = !1), r;
              }
              return (r.done = !0), r;
            }
          );
        }),
        (t.values = O),
        (x.prototype = {
          constructor: x,
          reset: function (t) {
            if (
              ((this.prev = 0),
              (this.next = 0),
              (this.sent = this._sent = void 0),
              (this.done = !1),
              (this.delegate = null),
              (this.method = "next"),
              (this.arg = void 0),
              this.tryEntries.forEach(E),
              !t)
            )
              for (var e in this)
                "t" === e.charAt(0) &&
                  r.call(this, e) &&
                  !isNaN(+e.slice(1)) &&
                  (this[e] = void 0);
          },
          stop: function () {
            this.done = !0;
            var t = this.tryEntries[0].completion;
            if ("throw" === t.type) throw t.arg;
            return this.rval;
          },
          dispatchException: function (t) {
            if (this.done) throw t;
            var e = this;
            function n(r, n) {
              return (
                (a.type = "throw"),
                (a.arg = t),
                (e.next = r),
                n && ((e.method = "next"), (e.arg = void 0)),
                !!n
              );
            }
            for (var o = this.tryEntries.length - 1; o >= 0; --o) {
              var i = this.tryEntries[o],
                a = i.completion;
              if ("root" === i.tryLoc) return n("end");
              if (i.tryLoc <= this.prev) {
                var s = r.call(i, "catchLoc"),
                  u = r.call(i, "finallyLoc");
                if (s && u) {
                  if (this.prev < i.catchLoc) return n(i.catchLoc, !0);
                  if (this.prev < i.finallyLoc) return n(i.finallyLoc);
                } else if (s) {
                  if (this.prev < i.catchLoc) return n(i.catchLoc, !0);
                } else {
                  if (!u)
                    throw new Error("try statement without catch or finally");
                  if (this.prev < i.finallyLoc) return n(i.finallyLoc);
                }
              }
            }
          },
          abrupt: function (t, e) {
            for (var n = this.tryEntries.length - 1; n >= 0; --n) {
              var o = this.tryEntries[n];
              if (
                o.tryLoc <= this.prev &&
                r.call(o, "finallyLoc") &&
                this.prev < o.finallyLoc
              ) {
                var i = o;
                break;
              }
            }
            i &&
              ("break" === t || "continue" === t) &&
              i.tryLoc <= e &&
              e <= i.finallyLoc &&
              (i = null);
            var a = i ? i.completion : {};
            return (
              (a.type = t),
              (a.arg = e),
              i
                ? ((this.method = "next"), (this.next = i.finallyLoc), l)
                : this.complete(a)
            );
          },
          complete: function (t, e) {
            if ("throw" === t.type) throw t.arg;
            return (
              "break" === t.type || "continue" === t.type
                ? (this.next = t.arg)
                : "return" === t.type
                ? ((this.rval = this.arg = t.arg),
                  (this.method = "return"),
                  (this.next = "end"))
                : "normal" === t.type && e && (this.next = e),
              l
            );
          },
          finish: function (t) {
            for (var e = this.tryEntries.length - 1; e >= 0; --e) {
              var r = this.tryEntries[e];
              if (r.finallyLoc === t)
                return this.complete(r.completion, r.afterLoc), E(r), l;
            }
          },
          catch: function (t) {
            for (var e = this.tryEntries.length - 1; e >= 0; --e) {
              var r = this.tryEntries[e];
              if (r.tryLoc === t) {
                var n = r.completion;
                if ("throw" === n.type) {
                  var o = n.arg;
                  E(r);
                }
                return o;
              }
            }
            throw new Error("illegal catch attempt");
          },
          delegateYield: function (t, e, r) {
            return (
              (this.delegate = { iterator: O(t), resultName: e, nextLoc: r }),
              "next" === this.method && (this.arg = void 0),
              l
            );
          },
        }),
        t
      );
    })(t.exports);
    try {
      regeneratorRuntime = n;
    } catch (t) {
      Function("r", "regeneratorRuntime = r")(n);
    }
  },
  function (t, e, r) {
    "use strict";
    function n(t) {
      return (n =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                "function" == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? "symbol"
                : typeof t;
            })(t);
    }
    var o;
    "undefined" != typeof window
      ? (o = window)
      : "undefined" == typeof self
      ? (console.warn(
          "Using browser-only version of superagent in non-browser environment"
        ),
        (o = void 0))
      : (o = self);
    var i = r(8),
      a = r(9),
      s = r(10),
      u = r(2),
      c = r(11),
      l = r(13);
    function f() {}
    t.exports = function (t, r) {
      return "function" == typeof r
        ? new e.Request("GET", t).end(r)
        : 1 === arguments.length
        ? new e.Request("GET", t)
        : new e.Request(t, r);
    };
    var p = (e = t.exports);
    (e.Request = m),
      (p.getXHR = function () {
        if (
          o.XMLHttpRequest &&
          (!o.location || "file:" !== o.location.protocol || !o.ActiveXObject)
        )
          return new XMLHttpRequest();
        try {
          return new ActiveXObject("Microsoft.XMLHTTP");
        } catch (t) {}
        try {
          return new ActiveXObject("Msxml2.XMLHTTP.6.0");
        } catch (t) {}
        try {
          return new ActiveXObject("Msxml2.XMLHTTP.3.0");
        } catch (t) {}
        try {
          return new ActiveXObject("Msxml2.XMLHTTP");
        } catch (t) {}
        throw new Error(
          "Browser-only version of superagent could not find XHR"
        );
      });
    var h = "".trim
      ? function (t) {
          return t.trim();
        }
      : function (t) {
          return t.replace(/(^\s*|\s*$)/g, "");
        };
    function d(t) {
      if (!u(t)) return t;
      var e = [];
      for (var r in t)
        Object.prototype.hasOwnProperty.call(t, r) && y(e, r, t[r]);
      return e.join("&");
    }
    function y(t, e, r) {
      if (void 0 !== r)
        if (null !== r)
          if (Array.isArray(r))
            r.forEach(function (r) {
              y(t, e, r);
            });
          else if (u(r))
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) &&
                y(t, "".concat(e, "[").concat(n, "]"), r[n]);
          else t.push(encodeURI(e) + "=" + encodeURIComponent(r));
        else t.push(encodeURI(e));
    }
    function _(t) {
      for (var e, r, n = {}, o = t.split("&"), i = 0, a = o.length; i < a; ++i)
        -1 === (r = (e = o[i]).indexOf("="))
          ? (n[decodeURIComponent(e)] = "")
          : (n[decodeURIComponent(e.slice(0, r))] = decodeURIComponent(
              e.slice(r + 1)
            ));
      return n;
    }
    function v(t) {
      return /[/+]json($|[^-\w])/.test(t);
    }
    function g(t) {
      (this.req = t),
        (this.xhr = this.req.xhr),
        (this.text =
          ("HEAD" !== this.req.method &&
            ("" === this.xhr.responseType ||
              "text" === this.xhr.responseType)) ||
          void 0 === this.xhr.responseType
            ? this.xhr.responseText
            : null),
        (this.statusText = this.req.xhr.statusText);
      var e = this.xhr.status;
      1223 === e && (e = 204),
        this._setStatusProperties(e),
        (this.headers = (function (t) {
          for (
            var e, r, n, o, i = t.split(/\r?\n/), a = {}, s = 0, u = i.length;
            s < u;
            ++s
          )
            -1 !== (e = (r = i[s]).indexOf(":")) &&
              ((n = r.slice(0, e).toLowerCase()),
              (o = h(r.slice(e + 1))),
              (a[n] = o));
          return a;
        })(this.xhr.getAllResponseHeaders())),
        (this.header = this.headers),
        (this.header["content-type"] =
          this.xhr.getResponseHeader("content-type")),
        this._setHeaderProperties(this.header),
        null === this.text && t._responseType
          ? (this.body = this.xhr.response)
          : (this.body =
              "HEAD" === this.req.method
                ? null
                : this._parseBody(this.text ? this.text : this.xhr.response));
    }
    function m(t, e) {
      var r = this;
      (this._query = this._query || []),
        (this.method = t),
        (this.url = e),
        (this.header = {}),
        (this._header = {}),
        this.on("end", function () {
          var t,
            e = null,
            n = null;
          try {
            n = new g(r);
          } catch (t) {
            return (
              ((e = new Error("Parser is unable to parse the response")).parse =
                !0),
              (e.original = t),
              r.xhr
                ? ((e.rawResponse =
                    void 0 === r.xhr.responseType
                      ? r.xhr.responseText
                      : r.xhr.response),
                  (e.status = r.xhr.status ? r.xhr.status : null),
                  (e.statusCode = e.status))
                : ((e.rawResponse = null), (e.status = null)),
              r.callback(e)
            );
          }
          r.emit("response", n);
          try {
            r._isResponseOK(n) ||
              (t = new Error(
                n.statusText || n.text || "Unsuccessful HTTP response"
              ));
          } catch (e) {
            t = e;
          }
          t
            ? ((t.original = e),
              (t.response = n),
              (t.status = n.status),
              r.callback(t, n))
            : r.callback(null, n);
        });
    }
    function b(t, e, r) {
      var n = p("DELETE", t);
      return (
        "function" == typeof e && ((r = e), (e = null)),
        e && n.send(e),
        r && n.end(r),
        n
      );
    }
    (p.serializeObject = d),
      (p.parseString = _),
      (p.types = {
        html: "text/html",
        json: "application/json",
        xml: "text/xml",
        urlencoded: "application/x-www-form-urlencoded",
        form: "application/x-www-form-urlencoded",
        "form-data": "application/x-www-form-urlencoded",
      }),
      (p.serialize = {
        "application/x-www-form-urlencoded": d,
        "application/json": a,
      }),
      (p.parse = {
        "application/x-www-form-urlencoded": _,
        "application/json": JSON.parse,
      }),
      c(g.prototype),
      (g.prototype._parseBody = function (t) {
        var e = p.parse[this.type];
        return this.req._parser
          ? this.req._parser(this, t)
          : (!e && v(this.type) && (e = p.parse["application/json"]),
            e && t && (t.length > 0 || t instanceof Object) ? e(t) : null);
      }),
      (g.prototype.toError = function () {
        var t = this.req,
          e = t.method,
          r = t.url,
          n = "cannot ".concat(e, " ").concat(r, " (").concat(this.status, ")"),
          o = new Error(n);
        return (o.status = this.status), (o.method = e), (o.url = r), o;
      }),
      (p.Response = g),
      i(m.prototype),
      s(m.prototype),
      (m.prototype.type = function (t) {
        return this.set("Content-Type", p.types[t] || t), this;
      }),
      (m.prototype.accept = function (t) {
        return this.set("Accept", p.types[t] || t), this;
      }),
      (m.prototype.auth = function (t, e, r) {
        1 === arguments.length && (e = ""),
          "object" === n(e) && null !== e && ((r = e), (e = "")),
          r || (r = { type: "function" == typeof btoa ? "basic" : "auto" });
        var o = function (t) {
          if ("function" == typeof btoa) return btoa(t);
          throw new Error("Cannot use basic auth, btoa is not a function");
        };
        return this._auth(t, e, r, o);
      }),
      (m.prototype.query = function (t) {
        return (
          "string" != typeof t && (t = d(t)), t && this._query.push(t), this
        );
      }),
      (m.prototype.attach = function (t, e, r) {
        if (e) {
          if (this._data)
            throw new Error("superagent can't mix .send() and .attach()");
          this._getFormData().append(t, e, r || e.name);
        }
        return this;
      }),
      (m.prototype._getFormData = function () {
        return (
          this._formData || (this._formData = new o.FormData()), this._formData
        );
      }),
      (m.prototype.callback = function (t, e) {
        if (this._shouldRetry(t, e)) return this._retry();
        var r = this._callback;
        this.clearTimeout(),
          t &&
            (this._maxRetries && (t.retries = this._retries - 1),
            this.emit("error", t)),
          r(t, e);
      }),
      (m.prototype.crossDomainError = function () {
        var t = new Error(
          "Request has been terminated\nPossible causes: the network is offline, Origin is not allowed by Access-Control-Allow-Origin, the page is being unloaded, etc."
        );
        (t.crossDomain = !0),
          (t.status = this.status),
          (t.method = this.method),
          (t.url = this.url),
          this.callback(t);
      }),
      (m.prototype.agent = function () {
        return (
          console.warn(
            "This is not supported in browser version of superagent"
          ),
          this
        );
      }),
      (m.prototype.ca = m.prototype.agent),
      (m.prototype.buffer = m.prototype.ca),
      (m.prototype.write = function () {
        throw new Error(
          "Streaming is not supported in browser version of superagent"
        );
      }),
      (m.prototype.pipe = m.prototype.write),
      (m.prototype._isHost = function (t) {
        return (
          t &&
          "object" === n(t) &&
          !Array.isArray(t) &&
          "[object Object]" !== Object.prototype.toString.call(t)
        );
      }),
      (m.prototype.end = function (t) {
        this._endCalled &&
          console.warn(
            "Warning: .end() was called twice. This is not supported in superagent"
          ),
          (this._endCalled = !0),
          (this._callback = t || f),
          this._finalizeQueryString(),
          this._end();
      }),
      (m.prototype._setUploadTimeout = function () {
        var t = this;
        this._uploadTimeout &&
          !this._uploadTimeoutTimer &&
          (this._uploadTimeoutTimer = setTimeout(function () {
            t._timeoutError(
              "Upload timeout of ",
              t._uploadTimeout,
              "ETIMEDOUT"
            );
          }, this._uploadTimeout));
      }),
      (m.prototype._end = function () {
        if (this._aborted)
          return this.callback(
            new Error(
              "The request has been aborted even before .end() was called"
            )
          );
        var t = this;
        this.xhr = p.getXHR();
        var e = this.xhr,
          r = this._formData || this._data;
        this._setTimeouts(),
          (e.onreadystatechange = function () {
            var r = e.readyState;
            if (
              (r >= 2 &&
                t._responseTimeoutTimer &&
                clearTimeout(t._responseTimeoutTimer),
              4 === r)
            ) {
              var n;
              try {
                n = e.status;
              } catch (t) {
                n = 0;
              }
              if (!n) {
                if (t.timedout || t._aborted) return;
                return t.crossDomainError();
              }
              t.emit("end");
            }
          });
        var n = function (e, r) {
          r.total > 0 &&
            ((r.percent = (r.loaded / r.total) * 100),
            100 === r.percent && clearTimeout(t._uploadTimeoutTimer)),
            (r.direction = e),
            t.emit("progress", r);
        };
        if (this.hasListeners("progress"))
          try {
            e.addEventListener("progress", n.bind(null, "download")),
              e.upload &&
                e.upload.addEventListener("progress", n.bind(null, "upload"));
          } catch (t) {}
        e.upload && this._setUploadTimeout();
        try {
          this.username && this.password
            ? e.open(this.method, this.url, !0, this.username, this.password)
            : e.open(this.method, this.url, !0);
        } catch (t) {
          return this.callback(t);
        }
        if (
          (this._withCredentials && (e.withCredentials = !0),
          !this._formData &&
            "GET" !== this.method &&
            "HEAD" !== this.method &&
            "string" != typeof r &&
            !this._isHost(r))
        ) {
          var o = this._header["content-type"],
            i = this._serializer || p.serialize[o ? o.split(";")[0] : ""];
          !i && v(o) && (i = p.serialize["application/json"]), i && (r = i(r));
        }
        for (var a in this.header)
          null !== this.header[a] &&
            Object.prototype.hasOwnProperty.call(this.header, a) &&
            e.setRequestHeader(a, this.header[a]);
        this._responseType && (e.responseType = this._responseType),
          this.emit("request", this),
          e.send(void 0 === r ? null : r);
      }),
      (p.agent = function () {
        return new l();
      }),
      ["GET", "POST", "OPTIONS", "PATCH", "PUT", "DELETE"].forEach(function (
        t
      ) {
        l.prototype[t.toLowerCase()] = function (e, r) {
          var n = new p.Request(t, e);
          return this._setDefaults(n), r && n.end(r), n;
        };
      }),
      (l.prototype.del = l.prototype.delete),
      (p.get = function (t, e, r) {
        var n = p("GET", t);
        return (
          "function" == typeof e && ((r = e), (e = null)),
          e && n.query(e),
          r && n.end(r),
          n
        );
      }),
      (p.head = function (t, e, r) {
        var n = p("HEAD", t);
        return (
          "function" == typeof e && ((r = e), (e = null)),
          e && n.query(e),
          r && n.end(r),
          n
        );
      }),
      (p.options = function (t, e, r) {
        var n = p("OPTIONS", t);
        return (
          "function" == typeof e && ((r = e), (e = null)),
          e && n.send(e),
          r && n.end(r),
          n
        );
      }),
      (p.del = b),
      (p.delete = b),
      (p.patch = function (t, e, r) {
        var n = p("PATCH", t);
        return (
          "function" == typeof e && ((r = e), (e = null)),
          e && n.send(e),
          r && n.end(r),
          n
        );
      }),
      (p.post = function (t, e, r) {
        var n = p("POST", t);
        return (
          "function" == typeof e && ((r = e), (e = null)),
          e && n.send(e),
          r && n.end(r),
          n
        );
      }),
      (p.put = function (t, e, r) {
        var n = p("PUT", t);
        return (
          "function" == typeof e && ((r = e), (e = null)),
          e && n.send(e),
          r && n.end(r),
          n
        );
      });
  },
  function (t, e, r) {
    function n(t) {
      if (t)
        return (function (t) {
          for (var e in n.prototype) t[e] = n.prototype[e];
          return t;
        })(t);
    }
    (t.exports = n),
      (n.prototype.on = n.prototype.addEventListener =
        function (t, e) {
          return (
            (this._callbacks = this._callbacks || {}),
            (this._callbacks["$" + t] = this._callbacks["$" + t] || []).push(e),
            this
          );
        }),
      (n.prototype.once = function (t, e) {
        function r() {
          this.off(t, r), e.apply(this, arguments);
        }
        return (r.fn = e), this.on(t, r), this;
      }),
      (n.prototype.off =
        n.prototype.removeListener =
        n.prototype.removeAllListeners =
        n.prototype.removeEventListener =
          function (t, e) {
            if (
              ((this._callbacks = this._callbacks || {}), 0 == arguments.length)
            )
              return (this._callbacks = {}), this;
            var r,
              n = this._callbacks["$" + t];
            if (!n) return this;
            if (1 == arguments.length)
              return delete this._callbacks["$" + t], this;
            for (var o = 0; o < n.length; o++)
              if ((r = n[o]) === e || r.fn === e) {
                n.splice(o, 1);
                break;
              }
            return 0 === n.length && delete this._callbacks["$" + t], this;
          }),
      (n.prototype.emit = function (t) {
        this._callbacks = this._callbacks || {};
        for (
          var e = new Array(arguments.length - 1),
            r = this._callbacks["$" + t],
            n = 1;
          n < arguments.length;
          n++
        )
          e[n - 1] = arguments[n];
        if (r) {
          n = 0;
          for (var o = (r = r.slice(0)).length; n < o; ++n) r[n].apply(this, e);
        }
        return this;
      }),
      (n.prototype.listeners = function (t) {
        return (
          (this._callbacks = this._callbacks || {}),
          this._callbacks["$" + t] || []
        );
      }),
      (n.prototype.hasListeners = function (t) {
        return !!this.listeners(t).length;
      });
  },
  function (t, e) {
    (t.exports = o), (o.default = o), (o.stable = a), (o.stableStringify = a);
    var r = [],
      n = [];
    function o(t, e, o) {
      var i;
      for (
        !(function t(e, o, i, a) {
          var s;
          if ("object" == typeof e && null !== e) {
            for (s = 0; s < i.length; s++)
              if (i[s] === e) {
                var u = Object.getOwnPropertyDescriptor(a, o);
                return void (void 0 !== u.get
                  ? u.configurable
                    ? (Object.defineProperty(a, o, { value: "[Circular]" }),
                      r.push([a, o, e, u]))
                    : n.push([e, o])
                  : ((a[o] = "[Circular]"), r.push([a, o, e])));
              }
            if ((i.push(e), Array.isArray(e)))
              for (s = 0; s < e.length; s++) t(e[s], s, i, e);
            else {
              var c = Object.keys(e);
              for (s = 0; s < c.length; s++) {
                var l = c[s];
                t(e[l], l, i, e);
              }
            }
            i.pop();
          }
        })(t, "", [], void 0),
          i =
            0 === n.length
              ? JSON.stringify(t, e, o)
              : JSON.stringify(t, s(e), o);
        0 !== r.length;

      ) {
        var a = r.pop();
        4 === a.length
          ? Object.defineProperty(a[0], a[1], a[3])
          : (a[0][a[1]] = a[2]);
      }
      return i;
    }
    function i(t, e) {
      return t < e ? -1 : t > e ? 1 : 0;
    }
    function a(t, e, o) {
      var a,
        u =
          (function t(e, o, a, s) {
            var u;
            if ("object" == typeof e && null !== e) {
              for (u = 0; u < a.length; u++)
                if (a[u] === e) {
                  var c = Object.getOwnPropertyDescriptor(s, o);
                  return void (void 0 !== c.get
                    ? c.configurable
                      ? (Object.defineProperty(s, o, { value: "[Circular]" }),
                        r.push([s, o, e, c]))
                      : n.push([e, o])
                    : ((s[o] = "[Circular]"), r.push([s, o, e])));
                }
              if ("function" == typeof e.toJSON) return;
              if ((a.push(e), Array.isArray(e)))
                for (u = 0; u < e.length; u++) t(e[u], u, a, e);
              else {
                var l = {},
                  f = Object.keys(e).sort(i);
                for (u = 0; u < f.length; u++) {
                  var p = f[u];
                  t(e[p], p, a, e), (l[p] = e[p]);
                }
                if (void 0 === s) return l;
                r.push([s, o, e]), (s[o] = l);
              }
              a.pop();
            }
          })(t, "", [], void 0) || t;
      for (
        a =
          0 === n.length ? JSON.stringify(u, e, o) : JSON.stringify(u, s(e), o);
        0 !== r.length;

      ) {
        var c = r.pop();
        4 === c.length
          ? Object.defineProperty(c[0], c[1], c[3])
          : (c[0][c[1]] = c[2]);
      }
      return a;
    }
    function s(t) {
      return (
        (t =
          void 0 !== t
            ? t
            : function (t, e) {
                return e;
              }),
        function (e, r) {
          if (n.length > 0)
            for (var o = 0; o < n.length; o++) {
              var i = n[o];
              if (i[1] === e && i[0] === r) {
                (r = "[Circular]"), n.splice(o, 1);
                break;
              }
            }
          return t.call(this, e, r);
        }
      );
    }
  },
  function (t, e, r) {
    "use strict";
    function n(t) {
      return (n =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                "function" == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? "symbol"
                : typeof t;
            })(t);
    }
    var o = r(2);
    function i(t) {
      if (t)
        return (function (t) {
          for (var e in i.prototype)
            Object.prototype.hasOwnProperty.call(i.prototype, e) &&
              (t[e] = i.prototype[e]);
          return t;
        })(t);
    }
    (t.exports = i),
      (i.prototype.clearTimeout = function () {
        return (
          clearTimeout(this._timer),
          clearTimeout(this._responseTimeoutTimer),
          clearTimeout(this._uploadTimeoutTimer),
          delete this._timer,
          delete this._responseTimeoutTimer,
          delete this._uploadTimeoutTimer,
          this
        );
      }),
      (i.prototype.parse = function (t) {
        return (this._parser = t), this;
      }),
      (i.prototype.responseType = function (t) {
        return (this._responseType = t), this;
      }),
      (i.prototype.serialize = function (t) {
        return (this._serializer = t), this;
      }),
      (i.prototype.timeout = function (t) {
        if (!t || "object" !== n(t))
          return (
            (this._timeout = t),
            (this._responseTimeout = 0),
            (this._uploadTimeout = 0),
            this
          );
        for (var e in t)
          if (Object.prototype.hasOwnProperty.call(t, e))
            switch (e) {
              case "deadline":
                this._timeout = t.deadline;
                break;
              case "response":
                this._responseTimeout = t.response;
                break;
              case "upload":
                this._uploadTimeout = t.upload;
                break;
              default:
                console.warn("Unknown timeout option", e);
            }
        return this;
      }),
      (i.prototype.retry = function (t, e) {
        return (
          (0 !== arguments.length && !0 !== t) || (t = 1),
          t <= 0 && (t = 0),
          (this._maxRetries = t),
          (this._retries = 0),
          (this._retryCallback = e),
          this
        );
      });
    var a = ["ECONNRESET", "ETIMEDOUT", "EADDRINFO", "ESOCKETTIMEDOUT"];
    (i.prototype._shouldRetry = function (t, e) {
      if (!this._maxRetries || this._retries++ >= this._maxRetries) return !1;
      if (this._retryCallback)
        try {
          var r = this._retryCallback(t, e);
          if (!0 === r) return !0;
          if (!1 === r) return !1;
        } catch (t) {
          console.error(t);
        }
      if (e && e.status && e.status >= 500 && 501 !== e.status) return !0;
      if (t) {
        if (t.code && a.includes(t.code)) return !0;
        if (t.timeout && "ECONNABORTED" === t.code) return !0;
        if (t.crossDomain) return !0;
      }
      return !1;
    }),
      (i.prototype._retry = function () {
        return (
          this.clearTimeout(),
          this.req && ((this.req = null), (this.req = this.request())),
          (this._aborted = !1),
          (this.timedout = !1),
          (this.timedoutError = null),
          this._end()
        );
      }),
      (i.prototype.then = function (t, e) {
        var r = this;
        if (!this._fullfilledPromise) {
          var n = this;
          this._endCalled &&
            console.warn(
              "Warning: superagent request was sent twice, because both .end() and .then() were called. Never call .end() if you use promises"
            ),
            (this._fullfilledPromise = new Promise(function (t, e) {
              n.on("abort", function () {
                if (!(r._maxRetries && r._maxRetries > r._retries))
                  if (r.timedout && r.timedoutError) e(r.timedoutError);
                  else {
                    var t = new Error("Aborted");
                    (t.code = "ABORTED"),
                      (t.status = r.status),
                      (t.method = r.method),
                      (t.url = r.url),
                      e(t);
                  }
              }),
                n.end(function (r, n) {
                  r ? e(r) : t(n);
                });
            }));
        }
        return this._fullfilledPromise.then(t, e);
      }),
      (i.prototype.catch = function (t) {
        return this.then(void 0, t);
      }),
      (i.prototype.use = function (t) {
        return t(this), this;
      }),
      (i.prototype.ok = function (t) {
        if ("function" != typeof t) throw new Error("Callback required");
        return (this._okCallback = t), this;
      }),
      (i.prototype._isResponseOK = function (t) {
        return (
          !!t &&
          (this._okCallback
            ? this._okCallback(t)
            : t.status >= 200 && t.status < 300)
        );
      }),
      (i.prototype.get = function (t) {
        return this._header[t.toLowerCase()];
      }),
      (i.prototype.getHeader = i.prototype.get),
      (i.prototype.set = function (t, e) {
        if (o(t)) {
          for (var r in t)
            Object.prototype.hasOwnProperty.call(t, r) && this.set(r, t[r]);
          return this;
        }
        return (this._header[t.toLowerCase()] = e), (this.header[t] = e), this;
      }),
      (i.prototype.unset = function (t) {
        return (
          delete this._header[t.toLowerCase()], delete this.header[t], this
        );
      }),
      (i.prototype.field = function (t, e) {
        if (null == t)
          throw new Error(".field(name, val) name can not be empty");
        if (this._data)
          throw new Error(
            ".field() can't be used if .send() is used. Please use only .send() or only .field() & .attach()"
          );
        if (o(t)) {
          for (var r in t)
            Object.prototype.hasOwnProperty.call(t, r) && this.field(r, t[r]);
          return this;
        }
        if (Array.isArray(e)) {
          for (var n in e)
            Object.prototype.hasOwnProperty.call(e, n) && this.field(t, e[n]);
          return this;
        }
        if (null == e)
          throw new Error(".field(name, val) val can not be empty");
        return (
          "boolean" == typeof e && (e = String(e)),
          this._getFormData().append(t, e),
          this
        );
      }),
      (i.prototype.abort = function () {
        return (
          this._aborted ||
            ((this._aborted = !0),
            this.xhr && this.xhr.abort(),
            this.req && this.req.abort(),
            this.clearTimeout(),
            this.emit("abort")),
          this
        );
      }),
      (i.prototype._auth = function (t, e, r, n) {
        switch (r.type) {
          case "basic":
            this.set(
              "Authorization",
              "Basic ".concat(n("".concat(t, ":").concat(e)))
            );
            break;
          case "auto":
            (this.username = t), (this.password = e);
            break;
          case "bearer":
            this.set("Authorization", "Bearer ".concat(t));
        }
        return this;
      }),
      (i.prototype.withCredentials = function (t) {
        return void 0 === t && (t = !0), (this._withCredentials = t), this;
      }),
      (i.prototype.redirects = function (t) {
        return (this._maxRedirects = t), this;
      }),
      (i.prototype.maxResponseSize = function (t) {
        if ("number" != typeof t) throw new TypeError("Invalid argument");
        return (this._maxResponseSize = t), this;
      }),
      (i.prototype.toJSON = function () {
        return {
          method: this.method,
          url: this.url,
          data: this._data,
          headers: this._header,
        };
      }),
      (i.prototype.send = function (t) {
        var e = o(t),
          r = this._header["content-type"];
        if (this._formData)
          throw new Error(
            ".send() can't be used if .attach() or .field() is used. Please use only .send() or only .field() & .attach()"
          );
        if (e && !this._data)
          Array.isArray(t)
            ? (this._data = [])
            : this._isHost(t) || (this._data = {});
        else if (t && this._data && this._isHost(this._data))
          throw new Error("Can't merge these send calls");
        if (e && o(this._data))
          for (var n in t)
            Object.prototype.hasOwnProperty.call(t, n) &&
              (this._data[n] = t[n]);
        else
          "string" == typeof t
            ? (r || this.type("form"),
              (r = this._header["content-type"]),
              (this._data =
                "application/x-www-form-urlencoded" === r
                  ? this._data
                    ? "".concat(this._data, "&").concat(t)
                    : t
                  : (this._data || "") + t))
            : (this._data = t);
        return !e || this._isHost(t) || r || this.type("json"), this;
      }),
      (i.prototype.sortQuery = function (t) {
        return (this._sort = void 0 === t || t), this;
      }),
      (i.prototype._finalizeQueryString = function () {
        var t = this._query.join("&");
        if (
          (t && (this.url += (this.url.includes("?") ? "&" : "?") + t),
          (this._query.length = 0),
          this._sort)
        ) {
          var e = this.url.indexOf("?");
          if (e >= 0) {
            var r = this.url.slice(e + 1).split("&");
            "function" == typeof this._sort ? r.sort(this._sort) : r.sort(),
              (this.url = this.url.slice(0, e) + "?" + r.join("&"));
          }
        }
      }),
      (i.prototype._appendQueryString = function () {
        console.warn("Unsupported");
      }),
      (i.prototype._timeoutError = function (t, e, r) {
        if (!this._aborted) {
          var n = new Error("".concat(t + e, "ms exceeded"));
          (n.timeout = e),
            (n.code = "ECONNABORTED"),
            (n.errno = r),
            (this.timedout = !0),
            (this.timedoutError = n),
            this.abort(),
            this.callback(n);
        }
      }),
      (i.prototype._setTimeouts = function () {
        var t = this;
        this._timeout &&
          !this._timer &&
          (this._timer = setTimeout(function () {
            t._timeoutError("Timeout of ", t._timeout, "ETIME");
          }, this._timeout)),
          this._responseTimeout &&
            !this._responseTimeoutTimer &&
            (this._responseTimeoutTimer = setTimeout(function () {
              t._timeoutError(
                "Response timeout of ",
                t._responseTimeout,
                "ETIMEDOUT"
              );
            }, this._responseTimeout));
      });
  },
  function (t, e, r) {
    "use strict";
    var n = r(12);
    function o(t) {
      if (t)
        return (function (t) {
          for (var e in o.prototype)
            Object.prototype.hasOwnProperty.call(o.prototype, e) &&
              (t[e] = o.prototype[e]);
          return t;
        })(t);
    }
    (t.exports = o),
      (o.prototype.get = function (t) {
        return this.header[t.toLowerCase()];
      }),
      (o.prototype._setHeaderProperties = function (t) {
        var e = t["content-type"] || "";
        this.type = n.type(e);
        var r = n.params(e);
        for (var o in r)
          Object.prototype.hasOwnProperty.call(r, o) && (this[o] = r[o]);
        this.links = {};
        try {
          t.link && (this.links = n.parseLinks(t.link));
        } catch (t) {}
      }),
      (o.prototype._setStatusProperties = function (t) {
        var e = (t / 100) | 0;
        (this.statusCode = t),
          (this.status = this.statusCode),
          (this.statusType = e),
          (this.info = 1 === e),
          (this.ok = 2 === e),
          (this.redirect = 3 === e),
          (this.clientError = 4 === e),
          (this.serverError = 5 === e),
          (this.error = (4 === e || 5 === e) && this.toError()),
          (this.created = 201 === t),
          (this.accepted = 202 === t),
          (this.noContent = 204 === t),
          (this.badRequest = 400 === t),
          (this.unauthorized = 401 === t),
          (this.notAcceptable = 406 === t),
          (this.forbidden = 403 === t),
          (this.notFound = 404 === t),
          (this.unprocessableEntity = 422 === t);
      });
  },
  function (t, e, r) {
    "use strict";
    (e.type = function (t) {
      return t.split(/ *; */).shift();
    }),
      (e.params = function (t) {
        return t.split(/ *; */).reduce(function (t, e) {
          var r = e.split(/ *= */),
            n = r.shift(),
            o = r.shift();
          return n && o && (t[n] = o), t;
        }, {});
      }),
      (e.parseLinks = function (t) {
        return t.split(/ *, */).reduce(function (t, e) {
          var r = e.split(/ *; */),
            n = r[0].slice(1, -1);
          return (t[r[1].split(/ *= */)[1].slice(1, -1)] = n), t;
        }, {});
      }),
      (e.cleanHeader = function (t, e) {
        return (
          delete t["content-type"],
          delete t["content-length"],
          delete t["transfer-encoding"],
          delete t.host,
          e && (delete t.authorization, delete t.cookie),
          t
        );
      });
  },
  function (t, e, r) {
    "use strict";
    function n(t) {
      return (
        (function (t) {
          if (Array.isArray(t)) return o(t);
        })(t) ||
        (function (t) {
          if ("undefined" != typeof Symbol && Symbol.iterator in Object(t))
            return Array.from(t);
        })(t) ||
        (function (t, e) {
          if (!t) return;
          if ("string" == typeof t) return o(t, e);
          var r = Object.prototype.toString.call(t).slice(8, -1);
          "Object" === r && t.constructor && (r = t.constructor.name);
          if ("Map" === r || "Set" === r) return Array.from(t);
          if (
            "Arguments" === r ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
          )
            return o(t, e);
        })(t) ||
        (function () {
          throw new TypeError(
            "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        })()
      );
    }
    function o(t, e) {
      (null == e || e > t.length) && (e = t.length);
      for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
      return n;
    }
    function i() {
      this._defaults = [];
    }
    [
      "use",
      "on",
      "once",
      "set",
      "query",
      "type",
      "accept",
      "auth",
      "withCredentials",
      "sortQuery",
      "retry",
      "ok",
      "redirects",
      "timeout",
      "buffer",
      "serialize",
      "parse",
      "ca",
      "key",
      "pfx",
      "cert",
      "disableTLSCerts",
    ].forEach(function (t) {
      i.prototype[t] = function () {
        for (var e = arguments.length, r = new Array(e), n = 0; n < e; n++)
          r[n] = arguments[n];
        return this._defaults.push({ fn: t, args: r }), this;
      };
    }),
      (i.prototype._setDefaults = function (t) {
        this._defaults.forEach(function (e) {
          t[e.fn].apply(t, n(e.args));
        });
      }),
      (t.exports = i);
  },
  function (t, e, r) {
    !(function (t) {
      "use strict";
      function e(t) {
        return (e =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function r(t, e) {
        return t((e = { exports: {} }), e.exports), e.exports;
      }
      var n = r(function (t) {
          var e = (t.exports =
            "undefined" != typeof window && window.Math == Math
              ? window
              : "undefined" != typeof self && self.Math == Math
              ? self
              : Function("return this")());
          "number" == typeof __g && (__g = e);
        }),
        o = r(function (t) {
          var e = (t.exports = { version: "2.6.11" });
          "number" == typeof __e && (__e = e);
        }),
        i =
          (o.version,
          function (t) {
            return "object" == typeof t ? null !== t : "function" == typeof t;
          }),
        a = function (t) {
          if (!i(t)) throw TypeError(t + " is not an object!");
          return t;
        },
        s = function (t) {
          try {
            return !!t();
          } catch (t) {
            return !0;
          }
        },
        u = !s(function () {
          return (
            7 !=
            Object.defineProperty({}, "a", {
              get: function () {
                return 7;
              },
            }).a
          );
        }),
        c = n.document,
        l = i(c) && i(c.createElement),
        f =
          !u &&
          !s(function () {
            return (
              7 !=
              Object.defineProperty(
                ((t = "div"), l ? c.createElement(t) : {}),
                "a",
                {
                  get: function () {
                    return 7;
                  },
                }
              ).a
            );
            var t;
          }),
        p = function (t, e) {
          if (!i(t)) return t;
          var r, n;
          if (e && "function" == typeof (r = t.toString) && !i((n = r.call(t))))
            return n;
          if ("function" == typeof (r = t.valueOf) && !i((n = r.call(t))))
            return n;
          if (
            !e &&
            "function" == typeof (r = t.toString) &&
            !i((n = r.call(t)))
          )
            return n;
          throw TypeError("Can't convert object to primitive value");
        },
        h = Object.defineProperty,
        d = {
          f: u
            ? Object.defineProperty
            : function (t, e, r) {
                if ((a(t), (e = p(e, !0)), a(r), f))
                  try {
                    return h(t, e, r);
                  } catch (t) {}
                if ("get" in r || "set" in r)
                  throw TypeError("Accessors not supported!");
                return "value" in r && (t[e] = r.value), t;
              },
        },
        y = function (t, e) {
          return {
            enumerable: !(1 & t),
            configurable: !(2 & t),
            writable: !(4 & t),
            value: e,
          };
        },
        _ = u
          ? function (t, e, r) {
              return d.f(t, e, y(1, r));
            }
          : function (t, e, r) {
              return (t[e] = r), t;
            },
        v = {}.hasOwnProperty,
        g = function (t, e) {
          return v.call(t, e);
        },
        m = 0,
        b = Math.random(),
        w = function (t) {
          return "Symbol(".concat(
            void 0 === t ? "" : t,
            ")_",
            (++m + b).toString(36)
          );
        },
        E = r(function (t) {
          var e = n["__core-js_shared__"] || (n["__core-js_shared__"] = {});
          (t.exports = function (t, r) {
            return e[t] || (e[t] = void 0 !== r ? r : {});
          })("versions", []).push({
            version: o.version,
            mode: "global",
            copyright: "© 2019 Denis Pushkarev (zloirock.ru)",
          });
        }),
        x = E("native-function-to-string", Function.toString),
        O = r(function (t) {
          var e = w("src"),
            r = ("" + x).split("toString");
          (o.inspectSource = function (t) {
            return x.call(t);
          }),
            (t.exports = function (t, o, i, a) {
              var s = "function" == typeof i;
              s && (g(i, "name") || _(i, "name", o)),
                t[o] !== i &&
                  (s &&
                    (g(i, e) || _(i, e, t[o] ? "" + t[o] : r.join(String(o)))),
                  t === n
                    ? (t[o] = i)
                    : a
                    ? t[o]
                      ? (t[o] = i)
                      : _(t, o, i)
                    : (delete t[o], _(t, o, i)));
            })(Function.prototype, "toString", function () {
              return ("function" == typeof this && this[e]) || x.call(this);
            });
        }),
        T = function (t) {
          if ("function" != typeof t)
            throw TypeError(t + " is not a function!");
          return t;
        },
        k = function (t, e, r) {
          if ((T(t), void 0 === e)) return t;
          switch (r) {
            case 1:
              return function (r) {
                return t.call(e, r);
              };
            case 2:
              return function (r, n) {
                return t.call(e, r, n);
              };
            case 3:
              return function (r, n, o) {
                return t.call(e, r, n, o);
              };
          }
          return function () {
            return t.apply(e, arguments);
          };
        },
        j = function (t, e, r) {
          var i,
            a,
            s,
            u,
            c = t & j.F,
            l = t & j.G,
            f = t & j.S,
            p = t & j.P,
            h = t & j.B,
            d = l ? n : f ? n[e] || (n[e] = {}) : (n[e] || {}).prototype,
            y = l ? o : o[e] || (o[e] = {}),
            v = y.prototype || (y.prototype = {});
          for (i in (l && (r = e), r))
            (s = ((a = !c && d && void 0 !== d[i]) ? d : r)[i]),
              (u =
                h && a
                  ? k(s, n)
                  : p && "function" == typeof s
                  ? k(Function.call, s)
                  : s),
              d && O(d, i, s, t & j.U),
              y[i] != s && _(y, i, u),
              p && v[i] != s && (v[i] = s);
        };
      (n.core = o),
        (j.F = 1),
        (j.G = 2),
        (j.S = 4),
        (j.P = 8),
        (j.B = 16),
        (j.W = 32),
        (j.U = 64),
        (j.R = 128);
      var S,
        P = j,
        C = {}.toString,
        A = function (t) {
          return C.call(t).slice(8, -1);
        },
        L = Object("z").propertyIsEnumerable(0)
          ? Object
          : function (t) {
              return "String" == A(t) ? t.split("") : Object(t);
            },
        R = function (t) {
          if (null == t) throw TypeError("Can't call method on  " + t);
          return t;
        },
        I = function (t) {
          return L(R(t));
        },
        M = Math.ceil,
        D = Math.floor,
        $ = function (t) {
          return isNaN((t = +t)) ? 0 : (t > 0 ? D : M)(t);
        },
        N = Math.min,
        q = function (t) {
          return t > 0 ? N($(t), 9007199254740991) : 0;
        },
        U = Math.max,
        z = Math.min,
        B = function (t) {
          return function (e, r, n) {
            var o,
              i = I(e),
              a = q(i.length),
              s = (function (t, e) {
                return (t = $(t)) < 0 ? U(t + e, 0) : z(t, e);
              })(n, a);
            if (t && r != r) {
              for (; a > s; ) if ((o = i[s++]) != o) return !0;
            } else
              for (; a > s; s++)
                if ((t || s in i) && i[s] === r) return t || s || 0;
            return !t && -1;
          };
        },
        H = E("keys"),
        F = B(!1),
        K = H[(S = "IE_PROTO")] || (H[S] = w(S)),
        W = function (t, e) {
          var r,
            n = I(t),
            o = 0,
            i = [];
          for (r in n) r != K && g(n, r) && i.push(r);
          for (; e.length > o; ) g(n, (r = e[o++])) && (~F(i, r) || i.push(r));
          return i;
        },
        G =
          "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(
            ","
          ),
        X =
          Object.keys ||
          function (t) {
            return W(t, G);
          },
        J = { f: Object.getOwnPropertySymbols },
        Q = { f: {}.propertyIsEnumerable },
        Y = function (t) {
          return Object(R(t));
        },
        V = Object.assign,
        Z =
          !V ||
          s(function () {
            var t = {},
              e = {},
              r = Symbol(),
              n = "abcdefghijklmnopqrst";
            return (
              (t[r] = 7),
              n.split("").forEach(function (t) {
                e[t] = t;
              }),
              7 != V({}, t)[r] || Object.keys(V({}, e)).join("") != n
            );
          })
            ? function (t, e) {
                for (
                  var r = Y(t), n = arguments.length, o = 1, i = J.f, a = Q.f;
                  n > o;

                )
                  for (
                    var s,
                      c = L(arguments[o++]),
                      l = i ? X(c).concat(i(c)) : X(c),
                      f = l.length,
                      p = 0;
                    f > p;

                  )
                    (s = l[p++]), (u && !a.call(c, s)) || (r[s] = c[s]);
                return r;
              }
            : V;
      P(P.S + P.F, "Object", { assign: Z });
      var tt =
          Array.isArray ||
          function (t) {
            return "Array" == A(t);
          },
        et = r(function (t) {
          var e = E("wks"),
            r = n.Symbol,
            o = "function" == typeof r;
          (t.exports = function (t) {
            return e[t] || (e[t] = (o && r[t]) || (o ? r : w)("Symbol." + t));
          }).store = e;
        }),
        rt = et("species"),
        nt = function (t, e) {
          return new ((function (t) {
            var e;
            return (
              tt(t) &&
                ("function" != typeof (e = t.constructor) ||
                  (e !== Array && !tt(e.prototype)) ||
                  (e = void 0),
                i(e) && null === (e = e[rt]) && (e = void 0)),
              void 0 === e ? Array : e
            );
          })(t))(e);
        },
        ot = function (t, e) {
          var r = 1 == t,
            n = 2 == t,
            o = 3 == t,
            i = 4 == t,
            a = 6 == t,
            s = 5 == t || a,
            u = e || nt;
          return function (e, c, l) {
            for (
              var f,
                p,
                h = Y(e),
                d = L(h),
                y = k(c, l, 3),
                _ = q(d.length),
                v = 0,
                g = r ? u(e, _) : n ? u(e, 0) : void 0;
              _ > v;
              v++
            )
              if ((s || v in d) && ((p = y((f = d[v]), v, h)), t))
                if (r) g[v] = p;
                else if (p)
                  switch (t) {
                    case 3:
                      return !0;
                    case 5:
                      return f;
                    case 6:
                      return v;
                    case 2:
                      g.push(f);
                  }
                else if (i) return !1;
            return a ? -1 : o || i ? i : g;
          };
        },
        it = et("unscopables"),
        at = Array.prototype;
      null == at[it] && _(at, it, {});
      var st = function (t) {
          at[it][t] = !0;
        },
        ut = ot(5),
        ct = !0;
      "find" in [] &&
        Array(1).find(function () {
          ct = !1;
        }),
        P(P.P + P.F * ct, "Array", {
          find: function (t) {
            return ut(this, t, arguments.length > 1 ? arguments[1] : void 0);
          },
        }),
        st("find"),
        (function (t, e) {
          var r = (o.Object || {})[t] || Object[t],
            n = {};
          (n[t] = e(r)),
            P(
              P.S +
                P.F *
                  s(function () {
                    r(1);
                  }),
              "Object",
              n
            );
        })("keys", function () {
          return function (t) {
            return X(Y(t));
          };
        });
      var lt = et("match"),
        ft = function (t) {
          var e;
          return i(t) && (void 0 !== (e = t[lt]) ? !!e : "RegExp" == A(t));
        },
        pt = function (t, e, r) {
          if (ft(e)) throw TypeError("String#" + r + " doesn't accept regex!");
          return String(R(t));
        },
        ht = et("match");
      P(
        P.P +
          P.F *
            (function (t) {
              var e = /./;
              try {
                "/./"[t](e);
              } catch (r) {
                try {
                  return (e[ht] = !1), !"/./"[t](e);
                } catch (t) {}
              }
              return !0;
            })("includes"),
        "String",
        {
          includes: function (t) {
            return !!~pt(this, t, "includes").indexOf(
              t,
              arguments.length > 1 ? arguments[1] : void 0
            );
          },
        }
      );
      var dt = B(!0);
      P(P.P, "Array", {
        includes: function (t) {
          return dt(this, t, arguments.length > 1 ? arguments[1] : void 0);
        },
      }),
        st("includes");
      var yt,
        _t,
        vt = ot(1);
      P(
        P.P +
          P.F *
            ((_t = !0),
            !(
              (yt = [].map) &&
              s(function () {
                _t ? yt.call(null, function () {}, 1) : yt.call(null);
              })
            )),
        "Array",
        {
          map: function (t) {
            return vt(this, t, arguments[1]);
          },
        }
      );
      var gt,
        mt = et("species"),
        bt =
          ((gt = !0),
          function (t, e) {
            var r,
              n,
              o = String(R(t)),
              i = $(e),
              a = o.length;
            return i < 0 || i >= a
              ? gt
                ? ""
                : void 0
              : (r = o.charCodeAt(i)) < 55296 ||
                r > 56319 ||
                i + 1 === a ||
                (n = o.charCodeAt(i + 1)) < 56320 ||
                n > 57343
              ? gt
                ? o.charAt(i)
                : r
              : gt
              ? o.slice(i, i + 2)
              : n - 56320 + ((r - 55296) << 10) + 65536;
          }),
        wt = function (t, e, r) {
          return e + (r ? bt(t, e).length : 1);
        },
        Et = et("toStringTag"),
        xt =
          "Arguments" ==
          A(
            (function () {
              return arguments;
            })()
          ),
        Ot = function (t) {
          var e, r, n;
          return void 0 === t
            ? "Undefined"
            : null === t
            ? "Null"
            : "string" ==
              typeof (r = (function (t, e) {
                try {
                  return t[e];
                } catch (t) {}
              })((e = Object(t)), Et))
            ? r
            : xt
            ? A(e)
            : "Object" == (n = A(e)) && "function" == typeof e.callee
            ? "Arguments"
            : n;
        },
        Tt = RegExp.prototype.exec,
        kt = function (t, e) {
          var r = t.exec;
          if ("function" == typeof r) {
            var n = r.call(t, e);
            if ("object" != typeof n)
              throw new TypeError(
                "RegExp exec method returned something other than an Object or null"
              );
            return n;
          }
          if ("RegExp" !== Ot(t))
            throw new TypeError("RegExp#exec called on incompatible receiver");
          return Tt.call(t, e);
        },
        jt = function () {
          var t = a(this),
            e = "";
          return (
            t.global && (e += "g"),
            t.ignoreCase && (e += "i"),
            t.multiline && (e += "m"),
            t.unicode && (e += "u"),
            t.sticky && (e += "y"),
            e
          );
        },
        St = RegExp.prototype.exec,
        Pt = String.prototype.replace,
        Ct = St,
        At = (function () {
          var t = /a/,
            e = /b*/g;
          return (
            St.call(t, "a"),
            St.call(e, "a"),
            0 !== t.lastIndex || 0 !== e.lastIndex
          );
        })(),
        Lt = void 0 !== /()??/.exec("")[1];
      (At || Lt) &&
        (Ct = function (t) {
          var e,
            r,
            n,
            o,
            i = this;
          return (
            Lt && (r = new RegExp("^" + i.source + "$(?!\\s)", jt.call(i))),
            At && (e = i.lastIndex),
            (n = St.call(i, t)),
            At && n && (i.lastIndex = i.global ? n.index + n[0].length : e),
            Lt &&
              n &&
              n.length > 1 &&
              Pt.call(n[0], r, function () {
                for (o = 1; o < arguments.length - 2; o++)
                  void 0 === arguments[o] && (n[o] = void 0);
              }),
            n
          );
        });
      var Rt = Ct;
      P({ target: "RegExp", proto: !0, forced: Rt !== /./.exec }, { exec: Rt });
      var It = et("species"),
        Mt = !s(function () {
          var t = /./;
          return (
            (t.exec = function () {
              var t = [];
              return (t.groups = { a: "7" }), t;
            }),
            "7" !== "".replace(t, "$<a>")
          );
        }),
        Dt = (function () {
          var t = /(?:)/,
            e = t.exec;
          t.exec = function () {
            return e.apply(this, arguments);
          };
          var r = "ab".split(t);
          return 2 === r.length && "a" === r[0] && "b" === r[1];
        })(),
        $t = function (t, e, r) {
          var n = et(t),
            o = !s(function () {
              var e = {};
              return (
                (e[n] = function () {
                  return 7;
                }),
                7 != ""[t](e)
              );
            }),
            i = o
              ? !s(function () {
                  var e = !1,
                    r = /a/;
                  return (
                    (r.exec = function () {
                      return (e = !0), null;
                    }),
                    "split" === t &&
                      ((r.constructor = {}),
                      (r.constructor[It] = function () {
                        return r;
                      })),
                    r[n](""),
                    !e
                  );
                })
              : void 0;
          if (!o || !i || ("replace" === t && !Mt) || ("split" === t && !Dt)) {
            var a = /./[n],
              u = r(R, n, ""[t], function (t, e, r, n, i) {
                return e.exec === Rt
                  ? o && !i
                    ? { done: !0, value: a.call(e, r, n) }
                    : { done: !0, value: t.call(r, e, n) }
                  : { done: !1 };
              }),
              c = u[0],
              l = u[1];
            O(String.prototype, t, c),
              _(
                RegExp.prototype,
                n,
                2 == e
                  ? function (t, e) {
                      return l.call(t, this, e);
                    }
                  : function (t) {
                      return l.call(t, this);
                    }
              );
          }
        },
        Nt = Math.min,
        qt = [].push,
        Ut = "length",
        zt = !s(function () {
          RegExp(4294967295, "y");
        });
      $t("split", 2, function (t, e, r, n) {
        var o;
        return (
          (o =
            "c" == "abbc".split(/(b)*/)[1] ||
            4 != "test".split(/(?:)/, -1)[Ut] ||
            2 != "ab".split(/(?:ab)*/)[Ut] ||
            4 != ".".split(/(.?)(.?)/)[Ut] ||
            ".".split(/()()/)[Ut] > 1 ||
            "".split(/.?/)[Ut]
              ? function (t, e) {
                  var n = String(this);
                  if (void 0 === t && 0 === e) return [];
                  if (!ft(t)) return r.call(n, t, e);
                  for (
                    var o,
                      i,
                      a,
                      s = [],
                      u =
                        (t.ignoreCase ? "i" : "") +
                        (t.multiline ? "m" : "") +
                        (t.unicode ? "u" : "") +
                        (t.sticky ? "y" : ""),
                      c = 0,
                      l = void 0 === e ? 4294967295 : e >>> 0,
                      f = new RegExp(t.source, u + "g");
                    (o = Rt.call(f, n)) &&
                    !(
                      (i = f.lastIndex) > c &&
                      (s.push(n.slice(c, o.index)),
                      o[Ut] > 1 && o.index < n[Ut] && qt.apply(s, o.slice(1)),
                      (a = o[0][Ut]),
                      (c = i),
                      s[Ut] >= l)
                    );

                  )
                    f.lastIndex === o.index && f.lastIndex++;
                  return (
                    c === n[Ut]
                      ? (!a && f.test("")) || s.push("")
                      : s.push(n.slice(c)),
                    s[Ut] > l ? s.slice(0, l) : s
                  );
                }
              : "0".split(void 0, 0)[Ut]
              ? function (t, e) {
                  return void 0 === t && 0 === e ? [] : r.call(this, t, e);
                }
              : r),
          [
            function (r, n) {
              var i = t(this),
                a = null == r ? void 0 : r[e];
              return void 0 !== a ? a.call(r, i, n) : o.call(String(i), r, n);
            },
            function (t, e) {
              var i = n(o, t, this, e, o !== r);
              if (i.done) return i.value;
              var s = a(t),
                u = String(this),
                c = (function (t, e) {
                  var r,
                    n = a(t).constructor;
                  return void 0 === n || null == (r = a(n)[mt]) ? e : T(r);
                })(s, RegExp),
                l = s.unicode,
                f =
                  (s.ignoreCase ? "i" : "") +
                  (s.multiline ? "m" : "") +
                  (s.unicode ? "u" : "") +
                  (zt ? "y" : "g"),
                p = new c(zt ? s : "^(?:" + s.source + ")", f),
                h = void 0 === e ? 4294967295 : e >>> 0;
              if (0 === h) return [];
              if (0 === u.length) return null === kt(p, u) ? [u] : [];
              for (var d = 0, y = 0, _ = []; y < u.length; ) {
                p.lastIndex = zt ? y : 0;
                var v,
                  g = kt(p, zt ? u : u.slice(y));
                if (
                  null === g ||
                  (v = Nt(q(p.lastIndex + (zt ? 0 : y)), u.length)) === d
                )
                  y = wt(u, y, l);
                else {
                  if ((_.push(u.slice(d, y)), _.length === h)) return _;
                  for (var m = 1; m <= g.length - 1; m++)
                    if ((_.push(g[m]), _.length === h)) return _;
                  y = d = v;
                }
              }
              return _.push(u.slice(d)), _;
            },
          ]
        );
      });
      var Bt = Object.getOwnPropertyDescriptor,
        Ht = {
          f: u
            ? Bt
            : function (t, e) {
                if (((t = I(t)), (e = p(e, !0)), f))
                  try {
                    return Bt(t, e);
                  } catch (t) {}
                if (g(t, e)) return y(!Q.f.call(t, e), t[e]);
              },
        },
        Ft = function (t, e) {
          if ((a(t), !i(e) && null !== e))
            throw TypeError(e + ": can't set as prototype!");
        },
        Kt =
          Object.setPrototypeOf ||
          ("__proto__" in {}
            ? (function (t, e, r) {
                try {
                  (r = k(
                    Function.call,
                    Ht.f(Object.prototype, "__proto__").set,
                    2
                  ))(t, []),
                    (e = !(t instanceof Array));
                } catch (t) {
                  e = !0;
                }
                return function (t, n) {
                  return Ft(t, n), e ? (t.__proto__ = n) : r(t, n), t;
                };
              })({}, !1)
            : void 0),
        Wt = G.concat("length", "prototype"),
        Gt = {
          f:
            Object.getOwnPropertyNames ||
            function (t) {
              return W(t, Wt);
            },
        },
        Xt = et("species"),
        Jt = d.f,
        Qt = Gt.f,
        Yt = n.RegExp,
        Vt = Yt,
        Zt = Yt.prototype,
        te = /a/g,
        ee = /a/g,
        re = new Yt(te) !== te;
      if (
        u &&
        (!re ||
          s(function () {
            return (
              (ee[et("match")] = !1),
              Yt(te) != te || Yt(ee) == ee || "/a/i" != Yt(te, "i")
            );
          }))
      ) {
        Yt = function (t, e) {
          var r,
            n,
            o,
            a,
            s = this instanceof Yt,
            u = ft(t),
            c = void 0 === e;
          return !s && u && t.constructor === Yt && c
            ? t
            : ((r = re
                ? new Vt(u && !c ? t.source : t, e)
                : Vt(
                    (u = t instanceof Yt) ? t.source : t,
                    u && c ? jt.call(t) : e
                  )),
              (n = Yt),
              (a = (s ? this : Zt).constructor) !== n &&
                "function" == typeof a &&
                (o = a.prototype) !== n.prototype &&
                i(o) &&
                Kt &&
                Kt(r, o),
              r);
        };
        for (
          var ne = function (t) {
              (t in Yt) ||
                Jt(Yt, t, {
                  configurable: !0,
                  get: function () {
                    return Vt[t];
                  },
                  set: function (e) {
                    Vt[t] = e;
                  },
                });
            },
            oe = Qt(Vt),
            ie = 0;
          oe.length > ie;

        )
          ne(oe[ie++]);
        (Zt.constructor = Yt), (Yt.prototype = Zt), O(n, "RegExp", Yt);
      }
      !(function (t) {
        var e = n[t];
        u &&
          e &&
          !e[Xt] &&
          d.f(e, Xt, {
            configurable: !0,
            get: function () {
              return this;
            },
          });
      })("RegExp");
      var ae = Math.max,
        se = Math.min,
        ue = Math.floor,
        ce = /\$([$&`']|\d\d?|<[^>]*>)/g,
        le = /\$([$&`']|\d\d?)/g;
      $t("replace", 2, function (t, e, r, n) {
        return [
          function (n, o) {
            var i = t(this),
              a = null == n ? void 0 : n[e];
            return void 0 !== a ? a.call(n, i, o) : r.call(String(i), n, o);
          },
          function (t, e) {
            var i = n(r, t, this, e);
            if (i.done) return i.value;
            var s = a(t),
              u = String(this),
              c = "function" == typeof e;
            c || (e = String(e));
            var l = s.global;
            if (l) {
              var f = s.unicode;
              s.lastIndex = 0;
            }
            for (var p = []; ; ) {
              var h = kt(s, u);
              if (null === h) break;
              if ((p.push(h), !l)) break;
              "" === String(h[0]) && (s.lastIndex = wt(u, q(s.lastIndex), f));
            }
            for (var d, y = "", _ = 0, v = 0; v < p.length; v++) {
              h = p[v];
              for (
                var g = String(h[0]),
                  m = ae(se($(h.index), u.length), 0),
                  b = [],
                  w = 1;
                w < h.length;
                w++
              )
                b.push(void 0 === (d = h[w]) ? d : String(d));
              var E = h.groups;
              if (c) {
                var x = [g].concat(b, m, u);
                void 0 !== E && x.push(E);
                var O = String(e.apply(void 0, x));
              } else O = o(g, u, m, b, E, e);
              m >= _ && ((y += u.slice(_, m) + O), (_ = m + g.length));
            }
            return y + u.slice(_);
          },
        ];
        function o(t, e, n, o, i, a) {
          var s = n + t.length,
            u = o.length,
            c = le;
          return (
            void 0 !== i && ((i = Y(i)), (c = ce)),
            r.call(a, c, function (r, a) {
              var c;
              switch (a.charAt(0)) {
                case "$":
                  return "$";
                case "&":
                  return t;
                case "`":
                  return e.slice(0, n);
                case "'":
                  return e.slice(s);
                case "<":
                  c = i[a.slice(1, -1)];
                  break;
                default:
                  var l = +a;
                  if (0 === l) return r;
                  if (l > u) {
                    var f = ue(l / 10);
                    return 0 === f
                      ? r
                      : f <= u
                      ? void 0 === o[f - 1]
                        ? a.charAt(1)
                        : o[f - 1] + a.charAt(1)
                      : r;
                  }
                  c = o[l - 1];
              }
              return void 0 === c ? "" : c;
            })
          );
        }
      });
      var fe = {};
      (fe[et("toStringTag")] = "z"),
        fe + "" != "[object z]" &&
          O(
            Object.prototype,
            "toString",
            function () {
              return "[object " + Ot(this) + "]";
            },
            !0
          );
      var pe = {
        cn: "cn,zh,zh-hans,zh-cn,zh-hans-cn,zh-sg,zh-hans-sg",
        tw: "tw,zh-hant,zh-hk,zh-mo,zh-tw,zh-hant-hk,zh-hant-mo,zh-hant-tw",
        en: "en",
        th: "th",
        vi: "vn,vi",
        ru: "ru",
        id: "id",
        ko: "ko",
        hi: "in,hi",
        ar: "ar",
        af: "af",
        tr: "tr",
        es: "es",
        ms: "ms,my",
        pt: "pt",
        ja: "ja,jp",
        ur: "ur",
        de: "de",
        ne: "ne",
        bn: "bn",
        gu: "gu",
        kn: "kn",
        mr: "mr",
        pa: "pa",
        ta: "ta",
        te: "te",
        fil: "fil,tl",
        it: "it",
        uk: "uk",
        be: "be",
        kk: "kk",
        fa: "fa",
        da: "da",
        ml: "ml",
        or: "or",
        as: "as",
        ka: "ka",
        sa: "sa",
        uz: "uz",
        hne: "hne",
        jv: "jv",
        raj: "raj",
        km: "km,kh,khm",
        fr: "fr,fra,fre",
        si: "si,sin",
        pl: "pl,pol",
        ro: "ro",
        mm: "mm",
        se: "se,smj-se,sma-se,sv-se",
        nl: "nl,fy-nl",
      };
      (t.codeToCountryISO3166 = {
        cn: "CN",
        tw: "TW",
        en: "US",
        th: "TH",
        vi: "VN",
        es: "BR",
        ru: "RU",
        id: "ID",
        ko: "KR",
        hi: "IN",
        ar: "EG",
        af: "ZA",
        tr: "TR",
        ms: "MY",
        pt: "BR",
        ja: "JP",
        de: "DE",
        ne: "NP",
        bn: "BD",
      }),
        (t.codeToLocaleISO639 = { cn: "zh", tw: "zh" }),
        (t.compareWithLangMap = function (t) {
          if (
            ((e = "Array"),
            (r = t),
            Object.prototype.toString.call(r) !== "[object ".concat(e, "]"))
          )
            return (
              console.log("compareWithLangMap: localeArr is not array return"),
              null
            );
          var e,
            r,
            n = Object.keys(pe),
            o = [];
          return (
            t.forEach(function (t) {
              n.includes(t) || o.push(t);
            }),
            o.length &&
              console.log(
                "compareWithLangMap: Cannot find ".concat(o, " in langMap")
              ),
            o
          );
        }),
        (t.getCurrentLocale = function (t) {
          var r = {
              urlLangKey: "lang",
              defaultLocale: "en",
              langMap: pe,
              url: window.location.href,
              navigator: window.navigator,
            },
            n = Object.assign({}, r, t);
          if (n.navigator && "object" !== e(n.navigator))
            return (
              console.log("i18n getCurrentLocale: navigator is undefined"), null
            );
          var o =
              (function (t, e) {
                var r = new RegExp("[?&]".concat(e, "(=([^&#]*)|&|#|$)")).exec(
                  t
                );
                return r && r[2]
                  ? decodeURIComponent(r[2].replace(/\+/g, " "))
                  : "";
              })(n.url, n.urlLangKey) ||
              n.navigator.language ||
              n.navigator.userLanguage,
            i = "";
          if (
            o &&
            ((o = o.toLowerCase()),
            !(i = Object.keys(n.langMap).find(function (t) {
              return n.langMap[t]
                .split(",")
                .map(function (t) {
                  return t.trim();
                })
                .includes(o);
            })))
          ) {
            var a = o.split("-")[0];
            i = Object.keys(n.langMap).find(function (t) {
              return n.langMap[t].split(",").indexOf(a) > -1;
            });
          }
          return (
            i ||
              console.log(
                "Cannot find language in lang map, set default locale ".concat(
                  n.defaultLocale
                )
              ),
            i || n.defaultLocale
          );
        }),
        (t.langMap = pe),
        Object.defineProperty(t, "__esModule", { value: !0 });
    })(e);
  },
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  function (t, e, r) {
    "use strict";
    r.r(e);
    r(5), r(27), r(4);
  },
  function (t, e, r) {},
]);
