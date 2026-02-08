/******/ (() => { // webpackBootstrap
/******/ 	"use strict";

;// ./src/fragmentLoader.js
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; var r = _regenerator(), e = r.m(_regeneratorRuntime), t = (Object.getPrototypeOf ? Object.getPrototypeOf(e) : e.__proto__).constructor; function n(r) { var e = "function" == typeof r && r.constructor; return !!e && (e === t || "GeneratorFunction" === (e.displayName || e.name)); } var o = { "throw": 1, "return": 2, "break": 3, "continue": 3 }; function a(r) { var e, t; return function (n) { e || (e = { stop: function stop() { return t(n.a, 2); }, "catch": function _catch() { return n.v; }, abrupt: function abrupt(r, e) { return t(n.a, o[r], e); }, delegateYield: function delegateYield(r, o, a) { return e.resultName = o, t(n.d, _regeneratorValues(r), a); }, finish: function finish(r) { return t(n.f, r); } }, t = function t(r, _t, o) { n.p = e.prev, n.n = e.next; try { return r(_t, o); } finally { e.next = n.n; } }), e.resultName && (e[e.resultName] = n.v, e.resultName = void 0), e.sent = n.v, e.next = n.n; try { return r.call(this, e); } finally { n.p = e.prev, n.n = e.next; } }; } return (_regeneratorRuntime = function _regeneratorRuntime() { return { wrap: function wrap(e, t, n, o) { return r.w(a(e), t, n, o && o.reverse()); }, isGeneratorFunction: n, mark: r.m, awrap: function awrap(r, e) { return new _OverloadYield(r, e); }, AsyncIterator: _regeneratorAsyncIterator, async: function async(r, e, t, o, u) { return (n(e) ? _regeneratorAsyncGen : _regeneratorAsync)(a(r), e, t, o, u); }, keys: _regeneratorKeys, values: _regeneratorValues }; })(); }
function _regeneratorValues(e) { if (null != e) { var t = e["function" == typeof Symbol && Symbol.iterator || "@@iterator"], r = 0; if (t) return t.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) return { next: function next() { return e && r >= e.length && (e = void 0), { value: e && e[r++], done: !e }; } }; } throw new TypeError(_typeof(e) + " is not iterable"); }
function _regeneratorKeys(e) { var n = Object(e), r = []; for (var t in n) r.unshift(t); return function e() { for (; r.length;) if ((t = r.pop()) in n) return e.value = t, e.done = !1, e; return e.done = !0, e; }; }
function _regeneratorAsync(n, e, r, t, o) { var a = _regeneratorAsyncGen(n, e, r, t, o); return a.next().then(function (n) { return n.done ? n.value : a.next(); }); }
function _regeneratorAsyncGen(r, e, t, o, n) { return new _regeneratorAsyncIterator(_regenerator().w(r, e, t, o), n || Promise); }
function _regeneratorAsyncIterator(t, e) { function n(r, o, i, f) { try { var c = t[r](o), u = c.value; return u instanceof _OverloadYield ? e.resolve(u.v).then(function (t) { n("next", t, i, f); }, function (t) { n("throw", t, i, f); }) : e.resolve(u).then(function (t) { c.value = t, i(c); }, function (t) { return n("throw", t, i, f); }); } catch (t) { f(t); } } var r; this.next || (_regeneratorDefine2(_regeneratorAsyncIterator.prototype), _regeneratorDefine2(_regeneratorAsyncIterator.prototype, "function" == typeof Symbol && Symbol.asyncIterator || "@asyncIterator", function () { return this; })), _regeneratorDefine2(this, "_invoke", function (t, o, i) { function f() { return new e(function (e, r) { n(t, i, e, r); }); } return r = r ? r.then(f, f) : f(); }, !0); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function _OverloadYield(e, d) { this.v = e, this.k = d; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function loadFragments() {
  return _loadFragments.apply(this, arguments);
}
function _loadFragments() {
  _loadFragments = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
    var fragmentElements, FetchQueue, fetchQueue, currentIndex, elements;
    return _regeneratorRuntime().wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          // Find all elements with ids starting with 'fragment-'
          fragmentElements = Array.from(document.querySelectorAll('[id^="fragment-"]'));
          FetchQueue = /*#__PURE__*/function () {
            function FetchQueue() {
              var maxConcurrent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 3;
              _classCallCheck(this, FetchQueue);
              this.queue = [];
              this.maxConcurrent = maxConcurrent;
              this.activeFetches = 0;
              this.maxRetries = 3; // Maximum number of retry attempts
              this.baseDelay = 1000; // Base delay in milliseconds (1 second)
            }
            return _createClass(FetchQueue, [{
              key: "sleep",
              value: function () {
                var _sleep = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(ms) {
                  return _regeneratorRuntime().wrap(function _callee$(_context) {
                    while (1) switch (_context.prev = _context.next) {
                      case 0:
                        return _context.abrupt("return", new Promise(function (resolve) {
                          return setTimeout(resolve, ms);
                        }));
                      case 1:
                      case "end":
                        return _context.stop();
                    }
                  }, _callee);
                }));
                function sleep(_x) {
                  return _sleep.apply(this, arguments);
                }
                return sleep;
              }()
            }, {
              key: "fetchWithRetry",
              value: function () {
                var _fetchWithRetry = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(fragmentPath) {
                  var retryCount,
                    response,
                    delay,
                    _args2 = arguments;
                  return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                    while (1) switch (_context2.prev = _context2.next) {
                      case 0:
                        retryCount = _args2.length > 1 && _args2[1] !== undefined ? _args2[1] : 0;
                        _context2.prev = 1;
                        _context2.next = 4;
                        return fetch(fragmentPath);
                      case 4:
                        response = _context2.sent;
                        if (response.ok) {
                          _context2.next = 7;
                          break;
                        }
                        throw new Error("HTTP error! status: ".concat(response.status));
                      case 7:
                        _context2.next = 9;
                        return response.text();
                      case 9:
                        return _context2.abrupt("return", _context2.sent);
                      case 12:
                        _context2.prev = 12;
                        _context2.t0 = _context2["catch"](1);
                        if (!(retryCount < this.maxRetries)) {
                          _context2.next = 20;
                          break;
                        }
                        // Exponential backoff: 1s, 2s, 4s
                        delay = this.baseDelay * Math.pow(2, retryCount);
                        console.warn("Retry ".concat(retryCount + 1, "/").concat(this.maxRetries, " for ").concat(fragmentPath, " after ").concat(delay, "ms"));
                        _context2.next = 19;
                        return this.sleep(delay);
                      case 19:
                        return _context2.abrupt("return", this.fetchWithRetry(fragmentPath, retryCount + 1));
                      case 20:
                        throw _context2.t0;
                      case 21:
                      case "end":
                        return _context2.stop();
                    }
                  }, _callee2, this, [[1, 12]]);
                }));
                function fetchWithRetry(_x2) {
                  return _fetchWithRetry.apply(this, arguments);
                }
                return fetchWithRetry;
              }()
            }, {
              key: "addFetch",
              value: function () {
                var _addFetch = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5(element) {
                  var _this = this;
                  var fragmentName, fragmentPath;
                  return _regeneratorRuntime().wrap(function _callee5$(_context5) {
                    while (1) switch (_context5.prev = _context5.next) {
                      case 0:
                        fragmentName = element.id.replace('fragment-', '');
                        fragmentPath = "fragments/".concat(fragmentName, ".html");
                        return _context5.abrupt("return", new Promise(/*#__PURE__*/function () {
                          var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4(resolve, reject) {
                            var fetchPromise;
                            return _regeneratorRuntime().wrap(function _callee4$(_context4) {
                              while (1) switch (_context4.prev = _context4.next) {
                                case 0:
                                  try {
                                    fetchPromise = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
                                      var html, temp, scripts;
                                      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
                                        while (1) switch (_context3.prev = _context3.next) {
                                          case 0:
                                            _context3.prev = 0;
                                            _context3.next = 3;
                                            return _this.fetchWithRetry(fragmentPath);
                                          case 3:
                                            html = _context3.sent;
                                            // Process the fragment
                                            temp = document.createElement('div');
                                            temp.innerHTML = html;
                                            element.innerHTML = temp.innerHTML;

                                            // Handle scripts
                                            scripts = temp.getElementsByTagName('script');
                                            Array.from(scripts).forEach(function (oldScript) {
                                              var newScript = document.createElement('script');
                                              Array.from(oldScript.attributes).forEach(function (attr) {
                                                newScript.setAttribute(attr.name, attr.value);
                                              });
                                              newScript.textContent = oldScript.textContent;
                                              oldScript.parentNode.removeChild(oldScript);
                                              document.body.appendChild(newScript);
                                            });
                                            _this.activeFetches--;
                                            resolve();
                                            _context3.next = 18;
                                            break;
                                          case 13:
                                            _context3.prev = 13;
                                            _context3.t0 = _context3["catch"](0);
                                            console.error("Failed to load fragment ".concat(fragmentPath, " after ").concat(_this.maxRetries, " retries:"), _context3.t0);
                                            _this.activeFetches--;
                                            reject(_context3.t0);
                                          case 18:
                                          case "end":
                                            return _context3.stop();
                                        }
                                      }, _callee3, null, [[0, 13]]);
                                    }))();
                                    _this.queue.push(fetchPromise);
                                    _this.activeFetches++;
                                  } catch (error) {
                                    reject(error);
                                  }
                                case 1:
                                case "end":
                                  return _context4.stop();
                              }
                            }, _callee4);
                          }));
                          return function (_x4, _x5) {
                            return _ref.apply(this, arguments);
                          };
                        }()));
                      case 3:
                      case "end":
                        return _context5.stop();
                    }
                  }, _callee5);
                }));
                function addFetch(_x3) {
                  return _addFetch.apply(this, arguments);
                }
                return addFetch;
              }()
            }, {
              key: "processNext",
              value: function () {
                var _processNext = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6(element) {
                  return _regeneratorRuntime().wrap(function _callee6$(_context6) {
                    while (1) switch (_context6.prev = _context6.next) {
                      case 0:
                        if (!(this.activeFetches < this.maxConcurrent && element)) {
                          _context6.next = 3;
                          break;
                        }
                        _context6.next = 3;
                        return this.addFetch(element);
                      case 3:
                      case "end":
                        return _context6.stop();
                    }
                  }, _callee6, this);
                }));
                function processNext(_x6) {
                  return _processNext.apply(this, arguments);
                }
                return processNext;
              }()
            }]);
          }(); // Initialize queue
          fetchQueue = new FetchQueue(3);
          currentIndex = 0;
          elements = fragmentElements; // Assuming this is defined elsewhere
          // Initial loading of first 3 elements
        case 5:
          if (!(currentIndex < elements.length && currentIndex < 3)) {
            _context7.next = 11;
            break;
          }
          _context7.next = 8;
          return fetchQueue.processNext(elements[currentIndex]);
        case 8:
          currentIndex++;
          _context7.next = 5;
          break;
        case 11:
          if (!(currentIndex < elements.length)) {
            _context7.next = 20;
            break;
          }
          _context7.next = 14;
          return Promise.race(fetchQueue.queue);
        case 14:
          // Remove completed fetch from queue
          fetchQueue.queue = fetchQueue.queue.filter(function (p) {
            return p.status === 'pending';
          });
          // Add next element to queue
          _context7.next = 17;
          return fetchQueue.processNext(elements[currentIndex]);
        case 17:
          currentIndex++;
          _context7.next = 11;
          break;
        case 20:
          _context7.next = 22;
          return Promise.all(fetchQueue.queue);
        case 22:
        case "end":
          return _context7.stop();
      }
    }, _callee7);
  }));
  return _loadFragments.apply(this, arguments);
}

;// ./src/syncHFSpacesURLHash.js
var queryArg = "section";
function syncHFSpacesURLHash() {
  // Handle explicit section requests (don't update hash automatically on load)
  var hasExplicitRequest = handleExplicitSectionRequest();

  // Set up hash change monitoring
  updateHashBasedOnHashChange();

  // Always set up scroll monitoring to update hash during scrolling
  setupScrollMonitoring();

  // If no explicit request, we don't update the hash on initial load
  // The hash will only start updating when the user scrolls
}
function handleExplicitSectionRequest() {
  // Check for section parameter in URL
  var urlParams = new URLSearchParams(window.location.search);
  var sectionId = urlParams.get(queryArg);

  // If we have an explicit section request
  if (sectionId) {
    var targetElement = document.getElementById(sectionId);
    if (targetElement) {
      // Slight delay to ensure the browser doesn't try to do its own scrolling first
      setTimeout(function () {
        targetElement.scrollIntoView();
        history.replaceState(null, null, "#".concat(sectionId));
      }, 100);
    }
    return true;
  }

  // No explicit section parameter found
  return false;
}
function setupScrollMonitoring() {
  // Variables to manage throttling
  var isScrolling = false;
  var lastKnownScrollPosition = 0;
  var initialScroll = true;

  // Add the scroll event listener
  window.addEventListener('scroll', function () {
    lastKnownScrollPosition = window.scrollY;
    if (!isScrolling) {
      window.requestAnimationFrame(function () {
        // Skip the first scroll event which might be browser's automatic scroll
        // to a hash on page load
        if (initialScroll) {
          initialScroll = false;
        } else {
          updateHashBasedOnScroll(lastKnownScrollPosition);
        }
        isScrolling = false;
      });
    }
    isScrolling = true;
  });
}

// Function to update the URL hash based on scroll position
function updateHashBasedOnScroll(scrollPosition) {
  var closestHeading = findClosestHeading(scrollPosition);

  // Update the URL hash if we found a closest element
  if (closestHeading && closestHeading.id) {
    // Only update if the hash is different to avoid unnecessary operations
    if (window.location.hash !== "#".concat(closestHeading.id)) {
      silentlyUpdateHash(closestHeading.id);
      postMessageToHFSpaces(closestHeading.id);
    }
  }
}

// Find the closest heading to the current scroll position
function findClosestHeading(scrollPosition) {
  // Get only heading elements with IDs that we want to track
  var headingsWithIds = Array.from(document.querySelectorAll('h1[id], h2[id], h3[id], h4[id], h5[id], h6[id]'));

  // Skip if there are no headings with IDs
  if (headingsWithIds.length === 0) return null;

  // Find the element closest to the middle of the viewport
  var closestHeading = null;
  var closestDistance = Infinity;
  var viewportMiddle = scrollPosition + window.innerHeight / 2;

  // Iterate through all headings to find the closest one
  headingsWithIds.forEach(function (heading) {
    var headingTop = heading.getBoundingClientRect().top + scrollPosition;
    var distance = Math.abs(headingTop - viewportMiddle);
    if (distance < closestDistance) {
      closestDistance = distance;
      closestHeading = heading;
    }
  });
  return closestHeading;
}

// Update hash without triggering scroll or other side effects
function silentlyUpdateHash(id) {
  history.replaceState(null, null, "#".concat(id));
}
function updateHashBasedOnHashChange() {
  window.addEventListener('hashchange', function () {
    var elementId = window.location.hash.slice(1);
    postMessageToHFSpaces(elementId);
  });
}
function postMessageToHFSpaces(elementId) {
  var parentOrigin = "https://huggingface.co";
  window.parent.postMessage({
    queryString: "".concat(queryArg, "=").concat(elementId)
  }, parentOrigin);
}

;// ./src/index.js
// import { plotClusters } from './clusters'


document.addEventListener("DOMContentLoaded", function () {
  console.log("DOMContentLoaded");
  loadFragments();
  init_memory_plot();
  syncHFSpacesURLHash();
}, {
  once: true
});
/******/ })()
;
//# sourceMappingURL=main.bundle.js.map