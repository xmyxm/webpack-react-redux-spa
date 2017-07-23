webpackJsonp([1],{

/***/ 277:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _home = __webpack_require__(280);

var _home2 = _interopRequireDefault(_home);

var _reactDom = __webpack_require__(112);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _react = __webpack_require__(7);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(113);

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
				{ className: 'home' },
				_react2.default.createElement(
					'div',
					{ className: 'top' },
					_react2.default.createElement(
						'div',
						{ id: 'logo' },
						_react2.default.createElement(
							'span',
							{ className: 'image' },
							_react2.default.createElement('img', { src: '../../icons/avatar.jpg', alt: '' })
						),
						_react2.default.createElement(
							'h1',
							{ id: 'title' },
							'Jane Doe'
						),
						_react2.default.createElement(
							'p',
							null,
							'Hyperspace Engineer'
						)
					),
					_react2.default.createElement(
						'nav',
						{ id: 'nav' },
						_react2.default.createElement(
							'ul',
							null,
							_react2.default.createElement(
								'li',
								null,
								_react2.default.createElement(
									'a',
									{ href: '#top', id: 'top-link', className: 'skel-layers-ignoreHref' },
									_react2.default.createElement(
										'span',
										{ className: 'icon fa-home' },
										'Intro'
									)
								)
							),
							_react2.default.createElement(
								'li',
								null,
								_react2.default.createElement(
									'a',
									{ href: '#portfolio', id: 'portfolio-link', className: 'skel-layers-ignoreHref' },
									_react2.default.createElement(
										'span',
										{ className: 'icon fa-th' },
										'Portfolio'
									)
								)
							),
							_react2.default.createElement(
								'li',
								null,
								_react2.default.createElement(
									'a',
									{ href: '#about', id: 'about-link', className: 'skel-layers-ignoreHref' },
									_react2.default.createElement(
										'span',
										{ className: 'icon fa-user' },
										'About Me'
									)
								)
							),
							_react2.default.createElement(
								'li',
								null,
								_react2.default.createElement(
									'a',
									{ href: '#contact', id: 'contact-link', className: 'skel-layers-ignoreHref active' },
									_react2.default.createElement(
										'span',
										{ className: 'icon fa-envelope' },
										'Contact'
									)
								)
							)
						)
					)
				),
				_react2.default.createElement(
					'div',
					{ className: 'bottom' },
					_react2.default.createElement(
						'ul',
						{ className: 'icons' },
						_react2.default.createElement(
							'li',
							null,
							_react2.default.createElement(
								'a',
								{ href: '#', className: 'icon fa-twitter' },
								_react2.default.createElement(
									'span',
									{ className: 'label' },
									'Twitter'
								)
							)
						),
						_react2.default.createElement(
							'li',
							null,
							_react2.default.createElement(
								'a',
								{ href: '#', className: 'icon fa-facebook' },
								_react2.default.createElement(
									'span',
									{ className: 'label' },
									'Facebook'
								)
							)
						),
						_react2.default.createElement(
							'li',
							null,
							_react2.default.createElement(
								'a',
								{ href: '#', className: 'icon fa-github' },
								_react2.default.createElement(
									'span',
									{ className: 'label' },
									'Github'
								)
							)
						),
						_react2.default.createElement(
							'li',
							null,
							_react2.default.createElement(
								'a',
								{ href: '#', className: 'icon fa-dribbble' },
								_react2.default.createElement(
									'span',
									{ className: 'label' },
									'Dribbble'
								)
							)
						),
						_react2.default.createElement(
							'li',
							null,
							_react2.default.createElement(
								'a',
								{ href: '#', className: 'icon fa-envelope' },
								_react2.default.createElement(
									'span',
									{ className: 'label' },
									'Email'
								)
							)
						)
					)
				)
			);
		}
	}]);

	return Home;
}(_react.Component);

exports.default = Home;

/***/ }),

/***/ 280:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

});