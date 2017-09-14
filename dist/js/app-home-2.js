webpackJsonp([2],{

/***/ 291:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _reactDom = __webpack_require__(39);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _react = __webpack_require__(6);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(69);

var _shanghai = __webpack_require__(308);

var _shanghai2 = _interopRequireDefault(_shanghai);

__webpack_require__(300);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Home = function (_Component) {
	_inherits(Home, _Component);

	function Home(props) {
		_classCallCheck(this, Home);

		return _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).call(this, props));
	}

	_createClass(Home, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				{ className: 'homebox' },
				_react2.default.createElement('img', { className: 'headimg', src: _shanghai2.default }),
				_react2.default.createElement(
					'h1',
					{ className: 'title' },
					'\u8FD9\u662F\u4E00\u4E2A\u5173\u4E8E\u524D\u7AEF\u6280\u672F\u5206\u4EAB\u7684\u535A\u5BA2'
				),
				_react2.default.createElement(
					'p',
					{ className: 'classes' },
					'CSS\u6837\u5F0F,Dom\u5143\u7D20'
				),
				_react2.default.createElement(
					'p',
					{ className: 'classes' },
					'JavaScript\u76F8\u5173\u77E5\u8BC6'
				),
				_react2.default.createElement(
					'p',
					{ className: 'classes' },
					'Hybrid\u4F7F\u7528'
				),
				_react2.default.createElement(
					'p',
					{ className: 'classes' },
					'Nodejs\u76F8\u5173\u6280\u672F'
				),
				_react2.default.createElement(
					'p',
					{ className: 'classes' },
					'\u6D4F\u89C8\u5668\u76F8\u5173\u6280\u672F'
				),
				_react2.default.createElement(
					'p',
					{ className: 'classes' },
					'React\u751F\u6001\u5708'
				),
				_react2.default.createElement(
					'p',
					{ className: 'classes' },
					'ES6-7\u76F8\u5173'
				),
				_react2.default.createElement(
					_reactRouterDom.Link,
					{ to: '/list', className: 'gobtn' },
					'\u9605\u89C8'
				)
			);
		}
	}]);

	return Home;
}(_react.Component);

exports.default = Home;

/***/ }),

/***/ 300:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 308:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "shanghai-9ef582088ae42b480942e89588ebf086.jpg";

/***/ })

});
//# sourceMappingURL=app-home-2.js.map