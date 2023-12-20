/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./assets/js/EventHandler.js":
/*!***********************************!*\
  !*** ./assets/js/EventHandler.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ EventHandler)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var EventHandler = /*#__PURE__*/function () {
  function EventHandler() {
    var settings = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    _classCallCheck(this, EventHandler);
    this.events = {};
  }
  _createClass(EventHandler, [{
    key: "on",
    value: function on(event, callback) {
      if (this.events[event] || true) {
        this.events[event] = [];
      }
      this.events[event].push(callback);
    }
  }, {
    key: "emit",
    value: function emit(event, params) {
      if (event in this.events) {
        var _iterator = _createForOfIteratorHelper(this.events[event]),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var callback = _step.value;
            callback(params);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }
    }
  }]);
  return EventHandler;
}();


/***/ }),

/***/ "./assets/js/ListSwitcher.js":
/*!***********************************!*\
  !*** ./assets/js/ListSwitcher.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ListSwitcher)
/* harmony export */ });
/* harmony import */ var _EventHandler_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EventHandler.js */ "./assets/js/EventHandler.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var ListSwitcher = /*#__PURE__*/function (_EventHandler) {
  _inherits(ListSwitcher, _EventHandler);
  var _super = _createSuper(ListSwitcher);
  function ListSwitcher(element) {
    var _this;
    _classCallCheck(this, ListSwitcher);
    _this = _super.call(this);
    _this.year = element.querySelector("[data-year]");
    _this.previous = element.querySelector("[data-previous]");
    [_this.year, _this.previous].forEach(function (e) {
      return _this.addListeners(e);
    });
    return _this;
  }
  _createClass(ListSwitcher, [{
    key: "addListeners",
    value: function addListeners(element) {
      var _this2 = this;
      element.addEventListener("change", function (e) {
        return _this2["switch"](e);
      });
    }
  }, {
    key: "switch",
    value: function _switch() {
      var year = this.year.value;
      var previous = this.previous.value;
      this.emit("switch", [year, previous]);
    }
  }]);
  return ListSwitcher;
}(_EventHandler_js__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./assets/js/Renderer.js":
/*!*******************************!*\
  !*** ./assets/js/Renderer.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Renderer)
/* harmony export */ });
/* harmony import */ var _EventHandler_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EventHandler.js */ "./assets/js/EventHandler.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var Renderer = /*#__PURE__*/function (_EventHandler) {
  _inherits(Renderer, _EventHandler);
  var _super = _createSuper(Renderer);
  function Renderer() {
    _classCallCheck(this, Renderer);
    return _super.apply(this, arguments);
  }
  _createClass(Renderer, [{
    key: "getElement",
    value: function getElement(htmlString) {
      var div = document.createElement("div");
      div.innerHTML = htmlString.trim();
      return div.children.length > 1 ? div.children : div.firstChild;
    }
  }, {
    key: "getItem",
    value: function getItem(item) {
      var position = item.position,
        title = item.title,
        artist = item.artist,
        change = item.change,
        changeLabel = item.changeLabel,
        image = item.image,
        isNew = item["new"];
      var changeClass = change < 0 ? "is-negative" : "is-positive";
      changeClass = change === 0 ? "is-neutral" : changeClass;
      var newLabel = isNew ? '<span class="label">Nieuw</span>' : "";
      var html = "\n\t\t<li data-id=\"".concat(position, "\">\n\t\t\t\n\t\t\t<article class='list-entry'>\n\t\t\t\n\t\t\t\t<span>\n\t\t\t\t\t<strong>\n\t\t\t\t\t\t").concat(position, "\n\t\t\t\t\t</strong>\n\t\t\t\t</span>\n\t\t\t\t\n\t\t\t\t<header>\n\t\t\t\t\t\n\t\t\t\t\t<picture data-play>\n\t\t\t\t\t\t<img src='").concat(image, "' loading=\"lazy\">\n\t\t\t\t\t</picture>\n\t\t\t\t\t\n\t\t\t\t</header>\n\t\t\t\t\n\t\t\t\t<section>\n\t\t\t\t\n\t\t\t\t\t<h2>\n\t\t\t\t\t\t").concat(title, "\n\t\t\t\t\t</h2>\n\t\t\t\t\t\n\t\t\t\t\t<h3>\n\t\t\t\t\t\t").concat(artist, "\n\t\t\t\t\t</h3>\n\t\t\t\t\t\n\t\t\t\t</section>\n\t\t\t\t\n\t\t\t\t<footer>\n\t\t\t\t\t").concat(newLabel, "\n\t\t\t\t\n\t\t\t\t\t<span class=\"label ").concat(changeClass, "\" data-change=\"").concat(change, "\" >\n\t\t\t\t\t\t").concat(changeLabel, "\n\t\t\t\t\t</span>\n\t\t\t\t</footer>\n\t\t\t\t\n\t\t\t</article>\n\t\t</li>\n\t\t");
      var element = this.getElement(html);
      return element;
    }
  }, {
    key: "getItems",
    value: function getItems(list) {
      var _this = this;
      var elements = list.map(function (item) {
        return _this.getItem(item);
      });
      console.log(elements);
      return elements;
    }
  }, {
    key: "getList",
    value: function getList(list) {
      return this.getItems(list);
    }
  }, {
    key: "getSorter",
    value: function getSorter(sorter) {
      var name = sorter.name,
        label = sorter.label;
      return "\n\t\t\t<button class='sorter' data-sort='".concat(name, "'>\n\t\t\t\t").concat(label, "\n\t\t\t\t<i class='asc fa fa-caret-up'></i>\n\t\t\t\t<i class='desc fa fa-caret-down'></i>\n\t\t\t\t<i class='icon fa fa-sort'></i>\n\t\t\t</button>\n\t\t");
    }
  }, {
    key: "getSorters",
    value: function getSorters(sorters) {
      var _this2 = this;
      return sorters.map(function (sorter) {
        return _this2.getSorter(sorter);
      });
    }
  }, {
    key: "getFilters",
    value: function getFilters(filters) {
      return this.getElement("\n\t\t\t<div class='sorters'>\n\t\t\t\t<span>Sorteer: </span>\n\t\t\t\t".concat(this.getSorters(filters.sort).join(""), "\n\t\t\t</div>\n\t\t"));
    }
  }, {
    key: "getYearSelector",
    value: function getYearSelector(lists, year) {
      var yearSelect = this.getSelect("data-year", lists, year);
      var previousSelect = this.getSelect("data-previous", _objectSpread(_objectSpread({}, lists), {}, {
        previous: null
      }), "previous");
      return [yearSelect, previousSelect];
    }
  }, {
    key: "getSelect",
    value: function getSelect(key, lists) {
      var year = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var years = Object.keys(lists);
      years = years.map(function (name) {
        var selected = year == name ? "selected" : "";
        return "<option value='".concat(name, "' ").concat(selected, ">").concat(name, "</option> ");
      });
      return this.getElement("\n\t\t\t<select ".concat(key, ">\n\t\t\t\t").concat(years.join(""), "\n\t\t\t</select>\n\t\t"));
    }
  }]);
  return Renderer;
}(_EventHandler_js__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./assets/js/Sanitizer.js":
/*!********************************!*\
  !*** ./assets/js/Sanitizer.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Sanitizer)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var Sanitizer = /*#__PURE__*/function () {
  function Sanitizer() {
    _classCallCheck(this, Sanitizer);
  }
  _createClass(Sanitizer, [{
    key: "downSizeImage",
    value: function downSizeImage(url) {
      var newSize = "w_100,h_100";
      var items = url.split("/");
      items = items.map(function (e) {
        if (e.startsWith("w_")) {
          return newSize;
        }
        return e;
      });
      var newUrl = items.join("/");
      return newUrl;
    }
  }, {
    key: "sanitizeItem",
    value: function sanitizeItem(year, item) {
      var _track$coverUrl;
      var position = item.position,
        track = item.track;
      var previous = position.previous > 0 ? position.previous : 2000;
      var change = previous - position.current;
      var changeLabel = change > 0 ? "+".concat(change) : change;
      changeLabel = change === 0 ? "\u2014" : changeLabel;
      var isNew = position.previous === 0;
      return {
        id: item.id,
        time: item.broadcastUnixTime,
        position: position.current,
        previousPosition: previous,
        "new": isNew,
        year: year,
        change: change,
        changeLabel: changeLabel,
        artist: track.artist,
        title: track.title,
        image: this.downSizeImage((_track$coverUrl = track.coverUrl) !== null && _track$coverUrl !== void 0 ? _track$coverUrl : "https://www.nporadio2.nl/images/unknown_track_m.webp")
      };
    }
  }, {
    key: "sanitizeList",
    value: function sanitizeList(year, list) {
      var _this = this;
      return list.map(function (e) {
        return _this.sanitizeItem(year, e);
      });
    }
  }, {
    key: "sanitize",
    value: function sanitize(lists) {
      var _this2 = this;
      return Object.fromEntries(Object.entries(lists).map(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
          key = _ref2[0],
          value = _ref2[1];
        key = parseInt(key);
        return [key, _this2.sanitizeList(key, value)];
      }));
    }

    /**
     * Takes the list and compares the current position of each enty with the previous position.
     * @param {*} list
     * @param {*} olderList
     */
  }, {
    key: "compare",
    value: function compare() {
      var list = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var olderList = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      var newList = list.map(function (item) {
        var olderItem = olderList.find(function (e) {
          return e.id === item.id;
        });
        if (olderItem) {
          item.previousPosition = olderItem.position;
          item.change = olderItem.position - item.position;
          item.changeLabel = item.change > 0 ? "+".concat(item.change) : item.change;
          item.changeLabel = item.change === 0 ? "\u2014" : item.changeLabel;
          item["new"] = olderItem.position === 0;
        }
        return item;
      });
      return newList;
    }
  }]);
  return Sanitizer;
}();


/***/ }),

/***/ "./assets/js/SortListener.js":
/*!***********************************!*\
  !*** ./assets/js/SortListener.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SortListener)
/* harmony export */ });
/* harmony import */ var _EventHandler_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EventHandler.js */ "./assets/js/EventHandler.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var SortListener = /*#__PURE__*/function (_EventHandler) {
  _inherits(SortListener, _EventHandler);
  var _super = _createSuper(SortListener);
  function SortListener(element) {
    var _this;
    _classCallCheck(this, SortListener);
    _this = _super.call(this);
    _this.sorters = element.querySelectorAll("[data-sort]");
    var _iterator = _createForOfIteratorHelper(_this.sorters),
      _step;
    try {
      var _loop = function _loop() {
        var sorter = _step.value;
        sorter.addEventListener("click", function (e) {
          return _this.sort(sorter);
        });
      };
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        _loop();
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    return _this;
  }
  _createClass(SortListener, [{
    key: "resetSort",
    value: function resetSort() {
      var _iterator2 = _createForOfIteratorHelper(this.sorters),
        _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var sorter = _step2.value;
          sorter.sorted = false;
          sorter.classList.remove("is-sorted");
          sorter.classList.remove("is-asc");
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    }
  }, {
    key: "sort",
    value: function sort(element) {
      var _element$sorted;
      var sort = element.dataset.sort;
      if (this.lastSort !== sort) this.resetSort();
      element.classList.add("is-sorted");
      var asc = (_element$sorted = element.sorted) !== null && _element$sorted !== void 0 ? _element$sorted : false;
      element.sorted = !asc;
      element.classList[asc ? "add" : "remove"]("is-asc");
      this.emit("sort", {
        sort: sort,
        asc: asc
      });
      this.lastSort = sort;
    }
  }]);
  return SortListener;
}(_EventHandler_js__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./assets/js/Sorter.js":
/*!*****************************!*\
  !*** ./assets/js/Sorter.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Sorter)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var Sorter = /*#__PURE__*/function () {
  function Sorter() {
    _classCallCheck(this, Sorter);
  }
  _createClass(Sorter, [{
    key: "find",
    value: function find(list, keys) {
      var result = list;
      var _iterator = _createForOfIteratorHelper(keys),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var key = _step.value;
          if (result && result[key]) {
            result = result[key];
          } else {
            return false;
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      return result;
    }
  }, {
    key: "sortBy",
    value: function sortBy(list, keys) {
      var _this = this;
      var asc = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      asc = asc ? 1 : -1;
      list = _toConsumableArray(list);
      list.sort(function (a, b) {
        return _this.find(a, keys) > _this.find(b, keys) ? -1 * asc : 1 * asc;
      });
      return list;
    }
  }]);
  return Sorter;
}();


/***/ }),

/***/ "./assets/js/Statistics.js":
/*!*********************************!*\
  !*** ./assets/js/Statistics.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Statistics)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var Statistics = /*#__PURE__*/function () {
  function Statistics() {
    _classCallCheck(this, Statistics);
  }
  _createClass(Statistics, [{
    key: "sortBy",
    value: function sortBy(list, keys) {
      var asc = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      return list.sort(function (a, b) {
        var _iterator = _createForOfIteratorHelper(keys),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var key = _step.value;
            var aValue = Array.isArray(a[key]) ? a[key].length : a[key];
            var bValue = Array.isArray(b[key]) ? b[key].length : b[key];
            if (aValue < bValue) return -1;
            if (aValue > bValue) return 1;
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
        return 0;
      });
    }
  }, {
    key: "groupBy",
    value: function groupBy(list, keys) {
      var _keys;
      var keyFn = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function (e) {
        return e;
      };
      keys = (_keys = keys) !== null && _keys !== void 0 && _keys.length ? keys : [keys];
      var newList = [];
      var _iterator2 = _createForOfIteratorHelper(list),
        _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var _newList;
          var item = _step2.value;
          var newKeys = [];
          var _iterator3 = _createForOfIteratorHelper(keys),
            _step3;
          try {
            for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
              var key = _step3.value;
              newKeys.push(item[key] || "other");
            }
          } catch (err) {
            _iterator3.e(err);
          } finally {
            _iterator3.f();
          }
          var newKey = keyFn(newKeys.join(" - "));
          newList[newKey] = ((_newList = newList) === null || _newList === void 0 ? void 0 : _newList[newKey]) || [];
          newList[newKey].push(item);
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
      newList = Object.entries(newList).map(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
          key = _ref2[0],
          entries = _ref2[1];
        return {
          key: key,
          entries: entries,
          count: entries.length
        };
      });
      return newList;
    }
  }, {
    key: "getAveragePosition",
    value: function getAveragePosition(list) {
      var total = list.reduce(function (a, i) {
        return a += i.position;
      }, 0);
      return total / list.length;
    }
  }, {
    key: "sanitizeSongKey",
    value: function sanitizeSongKey(key) {
      // remov everything between ()
      key = key.replace(/\(.*\)/g, "");

      // replace & with en
      key = key.replace(/&/g, "en");

      // remove punctuation
      key = key.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()\?]/g, "");

      // lowercase
      key = key.toLowerCase().trim();
      return key;
    }
  }, {
    key: "getList",
    value: function getList(list) {
      var groupedByArtist = this.groupBy(list, "artist");
      var _iterator4 = _createForOfIteratorHelper(groupedByArtist),
        _step4;
      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
          var artist = _step4.value;
          artist.averagePosition = this.getAveragePosition(artist.entries);
        }
      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }
      this.sortBy(groupedByArtist, ["entries", "key"]);
      var all = {
        groupedByArtist: groupedByArtist
      };
      return all;
    }
  }, {
    key: "getSong",
    value: function getSong(list) {
      var averagePosition = list.reduce(function (a, e) {
        return a += e.position;
      }, 0) / list.length;
      return {
        averagePosition: averagePosition
      };
    }
  }, {
    key: "getSongs",
    value: function getSongs(list) {
      var _this = this;
      var songs = this.groupBy(list, ["artist", "title"], function (e) {
        return _this.sanitizeSongKey(e);
      });
      // songs = this.sortBy(songs, ["entries", "key"]);
      var _iterator5 = _createForOfIteratorHelper(songs),
        _step5;
      try {
        for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
          var song = _step5.value;
          var songStats = this.getSong(song.entries);
          for (var _i = 0, _Object$entries = Object.entries(songStats); _i < _Object$entries.length; _i++) {
            var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
              key = _Object$entries$_i[0],
              stat = _Object$entries$_i[1];
            song[key] = stat;
          }
        }
      } catch (err) {
        _iterator5.e(err);
      } finally {
        _iterator5.f();
      }
      songs = this.sortBy(songs, ["averagePosition", "count"]);
      return songs;
    }
  }, {
    key: "getAll",
    value: function getAll(lists) {
      console.log(lists);
      var all = _toConsumableArray(Object.values(lists).flat());
      var years = {};
      for (var _i2 = 0, _Object$entries2 = Object.entries(lists); _i2 < _Object$entries2.length; _i2++) {
        var _Object$entries2$_i = _slicedToArray(_Object$entries2[_i2], 2),
          key = _Object$entries2$_i[0],
          value = _Object$entries2$_i[1];
        years[key] = this.getList(value);
      }
      var songs = this.getSongs(all);
      var allList = songs.map(function (e, index) {
        var firstEntry = e.entries[0];
        var position = index + 1;
        return _objectSpread(_objectSpread({}, firstEntry), {}, {
          averagePosition: e.averagePosition,
          position: position,
          change: 0,
          previousPosition: position,
          changeLabel: Math.floor(e.averagePosition),
          "new": false,
          entries: e.entries
        });
      });
      return {
        years: years,
        songs: songs,
        all: allList
      };
    }
  }]);
  return Statistics;
}();


/***/ }),

/***/ "./assets/js/main.js":
/*!***************************!*\
  !*** ./assets/js/main.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Renderer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Renderer.js */ "./assets/js/Renderer.js");
/* harmony import */ var _Sorter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Sorter.js */ "./assets/js/Sorter.js");
/* harmony import */ var _Sanitizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Sanitizer.js */ "./assets/js/Sanitizer.js");
/* harmony import */ var _Statistics_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Statistics.js */ "./assets/js/Statistics.js");
/* harmony import */ var _SortListener_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SortListener.js */ "./assets/js/SortListener.js");
/* harmony import */ var _ListSwitcher_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ListSwitcher.js */ "./assets/js/ListSwitcher.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }




// import Spotify from "./Spotify.js";


var Top2000Filter = /*#__PURE__*/function () {
  function Top2000Filter(root, years) {
    var _this = this;
    _classCallCheck(this, Top2000Filter);
    this.root = root;
    this.renderer = new _Renderer_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
    this.sorter = new _Sorter_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
    this.sanitizer = new _Sanitizer_js__WEBPACK_IMPORTED_MODULE_2__["default"]();
    this.statistics = new _Statistics_js__WEBPACK_IMPORTED_MODULE_3__["default"]();
    // this.spotify = new Spotify();

    this.filters = {
      sort: [{
        name: "title",
        label: "title"
      }, {
        name: "position",
        label: "position"
      }, {
        name: "artist",
        label: "artist"
      }, {
        name: "change",
        label: "change"
      }]
    };
    this.lists = this.sanitizer.sanitize(years);
    this.sortType = false;
    this.sortOrder = false;
    this.activeList = Object.keys(this.lists).sort().at(-1);
    var stats = this.statistics.getAll(this.lists);
    this.lists["all"] = stats.all;
    console.log(stats);

    // render
    this.renderBase(root);
    var listRoot = this.renderList(this.activeList, this.getList());
    var yearSelectorRoot = this.renderYearSelection(this.lists, this.activeList);
    var filterRoot = this.renderFilters(this.filters);
    this.sortListener = new _SortListener_js__WEBPACK_IMPORTED_MODULE_4__["default"](filterRoot);
    this.sortListener.on("sort", function (_ref) {
      var sort = _ref.sort,
        asc = _ref.asc;
      _this.sortType = sort;
      _this.sortOrder = asc;
      _this.renderList(_this.activeList);
    });
    this.listSwitcher = new _ListSwitcher_js__WEBPACK_IMPORTED_MODULE_5__["default"](yearSelectorRoot);
    this.listSwitcher.on("switch", function (_ref2) {
      var _ref3 = _slicedToArray(_ref2, 2),
        year = _ref3[0],
        compareYear = _ref3[1];
      _this.activeList = year;
      _this.renderList(_this.activeList, _this.getList(), compareYear, _this.getList(compareYear));
    });
    this.renderer.on("song-click", function (item) {
      var artist = item.artist,
        track = item.track;
      // this.Spotify.getSong(artist, track);
    });
  }
  _createClass(Top2000Filter, [{
    key: "getList",
    value: function getList() {
      var _this$lists$year;
      var year = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      year = year || this.activeList;
      return (_this$lists$year = this.lists[year]) !== null && _this$lists$year !== void 0 ? _this$lists$year : false;
    }
  }, {
    key: "renderBase",
    value: function renderBase(root) {
      this.filterRoot = document.createElement("header");
      this.listWrapper = document.createElement("section");
      this.listRoot = document.createElement("ul");
      this.listRoot.classList.add("list");
      this.listWrapper.append(this.listRoot);
      root.append(this.filterRoot, this.listWrapper);
    }
  }, {
    key: "renderList",
    value: function renderList(year) {
      var _this$listRoot;
      var list = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var compareYear = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var compare = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
      console.log({
        year: year,
        list: list,
        compareYear: compareYear,
        compare: compare
      });
      if (list === false) list = this.getList();
      if (this.sortType) {
        list = this.sorter.sortBy(list, [this.sortType], this.sortOrder);
      }
      if (year === this.renderedList && compare === this.comparedList) {
        var ids = list.map(function (e) {
          return e.position;
        });
        this.reorderListCSS(this.listRoot, ids);
        // this.reorderListHTML(this.listRoot, ids);
        return this.listRoot;
      }
      if (compare !== false) {
        list = this.sanitizer.compare(list, compare);
      }
      var items = this.renderer.getList(list, compare);
      this.setupEvents(items, list);
      this.listRoot.innerHTML = "";
      (_this$listRoot = this.listRoot).append.apply(_this$listRoot, _toConsumableArray(items));
      this.renderedList = year;
      this.comparedList = compareYear;
      return this.listRoot;
    }
  }, {
    key: "play",
    value: function () {
      var _play = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(item) {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              // let song = await this.spotify.getSong(item.artist, item.track);
              console.log(song);
            case 1:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }));
      function play(_x) {
        return _play.apply(this, arguments);
      }
      return play;
    }()
  }, {
    key: "setupEvents",
    value: function setupEvents(elements, list) {
      var _this2 = this;
      var _loop = function _loop() {
        var item = list[i];
        var element = elements[i];
        var play = element.querySelector("[data-play]");
        play.addEventListener("click", function (e) {
          return _this2.play(item);
        });
      };
      for (var i in elements) {
        _loop();
      }
    }
  }, {
    key: "reorderListCSS",
    value: function reorderListCSS(root, list) {
      var children = _toConsumableArray(root.children);
      var _iterator = _createForOfIteratorHelper(children),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var child = _step.value;
          var id = parseInt(child.dataset.id);
          var order = list.indexOf(id);
          child.style.order = order;
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  }, {
    key: "reorderListHTML",
    value: function reorderListHTML(root, list) {
      var children = _toConsumableArray(root.children);
      children.sort(function (a, b) {
        var idA = parseInt(a.dataset.id);
        var idB = parseInt(b.dataset.id);
        return list.indexOf(idA) - list.indexOf(idB);
      });
      children.forEach(function (child) {
        root.appendChild(child);
      });
    }
  }, {
    key: "renderFilters",
    value: function renderFilters(filters) {
      var html = this.renderer.getFilters(filters);
      this.filterRoot.append(html);
      return this.filterRoot;
    }
  }, {
    key: "renderYearSelection",
    value: function renderYearSelection(lists, year) {
      var _this$filterRoot;
      var html = this.renderer.getYearSelector(lists, year);
      (_this$filterRoot = this.filterRoot).append.apply(_this$filterRoot, _toConsumableArray(html));
      return this.filterRoot;
    }
  }]);
  return Top2000Filter;
}(); // -------------------------------------
// BOOSTRAP
// -------------------------------------
var years = {
  2023: "https://www.nporadio2.nl/api/charts/top-2000-van-2023-12-25",
  2022: "https://www.nporadio2.nl/api/charts/top-2000-van-2022-12-25",
  2021: "https://www.nporadio2.nl/api/charts/top-2000-van-2021-12-25",
  2020: "https://www.nporadio2.nl/api/charts/top-2000-van-2020-12-25",
  2019: "https://www.nporadio2.nl/api/charts/top-2000-van-2019-12-25",
  2018: "https://www.nporadio2.nl/api/charts/top-2000-van-2018-12-25",
  2017: "https://www.nporadio2.nl/api/charts/top-2000-van-2017-12-25",
  2016: "https://www.nporadio2.nl/api/charts/top-2000-van-2016-12-25",
  2015: "https://www.nporadio2.nl/api/charts/top-2000-van-2015-12-25",
  2014: "https://www.nporadio2.nl/api/charts/top-2000-van-2014-12-25",
  2013: "https://www.nporadio2.nl/api/charts/top-2000-van-2013-12-25",
  2012: "https://www.nporadio2.nl/api/charts/top-2000-van-2012-12-25",
  2011: "https://www.nporadio2.nl/api/charts/top-2000-van-2011-12-25",
  2010: "https://www.nporadio2.nl/api/charts/top-2000-van-2010-12-25",
  2009: "https://www.nporadio2.nl/api/charts/top-2000-van-2009-12-25",
  2008: "https://www.nporadio2.nl/api/charts/top-2000-van-2008-12-25",
  2007: "https://www.nporadio2.nl/api/charts/top-2000-van-2007-12-25",
  2006: "https://www.nporadio2.nl/api/charts/top-2000-van-2006-12-25",
  2005: "https://www.nporadio2.nl/api/charts/top-2000-van-2005-12-25",
  2004: "https://www.nporadio2.nl/api/charts/top-2000-van-2004-12-25",
  2003: "https://www.nporadio2.nl/api/charts/top-2000-van-2003-12-25",
  2002: "https://www.nporadio2.nl/api/charts/top-2000-van-2002-12-25",
  2001: "https://www.nporadio2.nl/api/charts/top-2000-van-2001-12-25",
  2000: "https://www.nporadio2.nl/api/charts/top-2000-van-2000-12-25"
};

// fetch a year
var fetchYear = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(url) {
    var data, json;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return fetch(url);
        case 2:
          data = _context2.sent;
          // get the json; fallback to false
          try {
            json = data.json();
          } catch (e) {
            json = false;
          }
          return _context2.abrupt("return", json);
        case 5:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return function fetchYear(_x2) {
    return _ref4.apply(this, arguments);
  };
}();

// fetch a list of years
var fetchYears = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(years) {
    var yearsData;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return Promise.all(Object.entries(years).map( /*#__PURE__*/function () {
            var _ref7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(_ref6) {
              var _ref8, year, url, data;
              return _regeneratorRuntime().wrap(function _callee3$(_context3) {
                while (1) switch (_context3.prev = _context3.next) {
                  case 0:
                    _ref8 = _slicedToArray(_ref6, 2), year = _ref8[0], url = _ref8[1];
                    _context3.next = 3;
                    return fetchYear(url);
                  case 3:
                    data = _context3.sent;
                    if (!((data === null || data === void 0 ? void 0 : data.positions) === undefined)) {
                      _context3.next = 6;
                      break;
                    }
                    return _context3.abrupt("return", false);
                  case 6:
                    return _context3.abrupt("return", [year, data.positions]);
                  case 7:
                  case "end":
                    return _context3.stop();
                }
              }, _callee3);
            }));
            return function (_x4) {
              return _ref7.apply(this, arguments);
            };
          }()));
        case 2:
          yearsData = _context4.sent;
          // filter out falsy values
          yearsData = yearsData.filter(function (e) {
            return e !== false;
          });

          // convert entries to an object
          yearsData = Object.fromEntries(yearsData);

          // initialize
          return _context4.abrupt("return", yearsData);
        case 6:
        case "end":
          return _context4.stop();
      }
    }, _callee4);
  }));
  return function fetchYears(_x3) {
    return _ref5.apply(this, arguments);
  };
}();

// bootstrap the app
_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
  var data, root;
  return _regeneratorRuntime().wrap(function _callee5$(_context5) {
    while (1) switch (_context5.prev = _context5.next) {
      case 0:
        _context5.next = 2;
        return fetchYears(years);
      case 2:
        data = _context5.sent;
        // initialize the app
        root = document.querySelector(".root");
        new Top2000Filter(root, data);

        // hide the loader
        document.body.classList.add("loaded");
      case 6:
      case "end":
        return _context5.stop();
    }
  }, _callee5);
}))();

/***/ }),

/***/ "./assets/scss/main.scss":
/*!*******************************!*\
  !*** ./assets/scss/main.scss ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/build/js/main": 0,
/******/ 			"build/css/main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkshortcuts"] = self["webpackChunkshortcuts"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["build/css/main"], () => (__webpack_require__("./assets/js/main.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["build/css/main"], () => (__webpack_require__("./assets/scss/main.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=main.js.map