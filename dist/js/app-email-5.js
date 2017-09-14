webpackJsonp([5],{

/***/ 290:
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

__webpack_require__(299);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Me = function (_Component) {
	_inherits(Me, _Component);

	function Me(props) {
		_classCallCheck(this, Me);

		return _possibleConstructorReturn(this, (Me.__proto__ || Object.getPrototypeOf(Me)).call(this, props));
	}

	_createClass(Me, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				{ className: 'linkbox' },
				_react2.default.createElement(
					'ul',
					null,
					_react2.default.createElement(
						'li',
						{ className: 'item' },
						_react2.default.createElement(
							'div',
							{ className: 'icon' },
							_react2.default.createElement('div', { className: 'github' }),
							_react2.default.createElement(
								'span',
								{ className: 'text' },
								'github'
							)
						),
						_react2.default.createElement(
							'a',
							{ className: 'site', href: 'https://github.com/xmyxm' },
							'https://github.com/xmyxm'
						)
					),
					_react2.default.createElement(
						'li',
						{ className: 'item' },
						_react2.default.createElement(
							'div',
							{ className: 'icon' },
							_react2.default.createElement('div', { className: 'qq' }),
							_react2.default.createElement(
								'span',
								{ className: 'text' },
								'\u90AE\u7BB1'
							)
						),
						_react2.default.createElement(
							'a',
							{ className: 'site', href: 'https://github.com/xmyxm' },
							'myco_xmy@qq.com'
						)
					)
				)
			);
		}
	}]);

	return Me;
}(_react.Component);

exports.default = Me;

/***/ }),

/***/ 299:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

});
//# sourceMappingURL=app-email-5.js.map