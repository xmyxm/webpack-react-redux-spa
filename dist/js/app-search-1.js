webpackJsonp([1],{

/***/ 294:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _reactDom = __webpack_require__(39);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _react = __webpack_require__(6);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(69);

var _fetchAction = __webpack_require__(67);

var action = _interopRequireWildcard(_fetchAction);

var _reactRedux = __webpack_require__(68);

var _dateFormat = __webpack_require__(295);

var _dateFormat2 = _interopRequireDefault(_dateFormat);

var _eat = __webpack_require__(296);

var _eat2 = _interopRequireDefault(_eat);

__webpack_require__(305);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Search = (_dec = (0, _reactRedux.connect)(function (state) {
	return { fetchData: state.fetchData };
}, action), _dec(_class = function (_Component) {
	_inherits(Search, _Component);

	function Search(props) {
		_classCallCheck(this, Search);

		var _this = _possibleConstructorReturn(this, (Search.__proto__ || Object.getPrototypeOf(Search)).call(this, props));

		_this.page = 1;
		_this.imgLoading = false;
		_this.dataloading = false;
		_this.totalCount = 0;
		_this.bloglist = [];
		return _this;
	}

	_createClass(Search, [{
		key: 'shouldComponentUpdate',
		value: function shouldComponentUpdate(nextProps, nextState) {
			if (nextProps.fetchData) {
				if (nextProps.fetchData.isFetching) {
					this.dataloading = true;
					return false;
				}
				this.dataloading = false;
				if (nextProps.fetchData.Json) {
					//debugger
					var data = nextProps.fetchData.Json;
					if (data && data.PageIndex == 1) {
						this.bloglist.length = 0;
					}
					if (data && data.TotalCount) {
						this.totalCount = data.TotalCount;
						if (data.PageIndex * data.PageSize >= data.TotalCount) {
							this.imgLoading = false;
						} else {
							++this.page;
							this.imgLoading = true;
						}
						if (data.BlogWorkList && data.BlogWorkList.length) {
							this.bloglist = this.bloglist.concat(data.BlogWorkList);
							return true;
						}
					}
					return true;
				}
			}
			return false;
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			window.onscroll = null;
		}
	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {
			var _self = this;
			window.onscroll = function (e) {
				if (!_self.imgLoading || _self.dataloading) return;

				if (document.body.scrollTop + window.innerHeight + 150 > document.body.scrollHeight) {
					_self.pullBlogData();
				}
			};
			_self.pullBlogData();
		}
	}, {
		key: 'pullBlogData',
		value: function pullBlogData() {
			this.props.fetchPosts('http://qqweb.top/API/BlogApi/Query', { PageIndex: this.page, key: this.searchValue || '' });
		}
	}, {
		key: 'Query',
		value: function Query() {
			this.page = 1;
			this.searchValue = this.refs.keyname.value;
			this.pullBlogData();
		}
	}, {
		key: 'userChange',
		value: function userChange(e) {
			if (this.refs.keyname.value != this.searchValue) this.Query();
		}
	}, {
		key: 'userKeyup',
		value: function userKeyup(e) {
			if (e.keyCode === 13) this.Query();
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				{ className: 'searchbox' },
				_react2.default.createElement(
					'div',
					{ className: 'head' },
					_react2.default.createElement(
						'div',
						{ className: 'searchtext' },
						'\u641C\u7D22\u66F4\u61C2\u4F60\uFF01'
					),
					_react2.default.createElement(
						'div',
						{ className: 'searchinfo' },
						_react2.default.createElement('input', { type: 'text', name: 'keyname', onKeyUp: this.userKeyup.bind(this), onChange: this.userChange.bind(this), className: 'keytext', ref: 'keyname' }),
						_react2.default.createElement('i', { className: 'so' }),
						_react2.default.createElement('i', { className: 'del' }),
						_react2.default.createElement(
							'div',
							{ className: 'searchbtn', onClick: this.Query.bind(this) },
							'\u641C\u7D22'
						)
					)
				),
				_react2.default.createElement(
					'div',
					{ className: 'listbox' },
					_react2.default.createElement(
						'ul',
						{ className: 'list' },
						this.bloglist.length > 0 && this.bloglist.map(function (item) {
							return _react2.default.createElement(
								'li',
								{ key: item.ID, className: 'item' },
								_react2.default.createElement(
									_reactRouterDom.Link,
									{ to: '/detail/' + item.ID, className: 'clickarea' },
									_react2.default.createElement(
										'div',
										{ className: 'contenthead' },
										_react2.default.createElement(
											'div',
											{ className: 'title' },
											item.Title
										),
										_react2.default.createElement(
											'div',
											{ className: 'tag' },
											'\u5206\u7C7B:',
											item.SortName
										)
									),
									_react2.default.createElement(
										'p',
										{ className: 'content' },
										item.Content
									),
									_react2.default.createElement(
										'div',
										{ className: 'information' },
										_react2.default.createElement(
											'span',
											{ className: 'time' },
											'\u6D4F\u89C8:',
											item.PageViewTotal
										),
										_react2.default.createElement(
											'span',
											{ className: 'author' },
											_dateFormat2.default.ChangeDateFormat(item.UpdateTime)
										)
									)
								)
							);
						})
					),
					this.imgLoading ? _react2.default.createElement(_eat2.default, null) : _react2.default.createElement(
						'div',
						{ className: 'bottominfo' },
						'--- \u6211\u662F\u6709\u5E95\u7EBF\u7684 ---'
					)
				)
			);
		}
	}]);

	return Search;
}(_react.Component)) || _class);
exports.default = Search;

/***/ }),

/***/ 295:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = {
	ChangeDateFormat: function ChangeDateFormat(cellval) {
		var date = new Date(parseInt(cellval.replace("/Date(", "").replace(")/", ""), 10));
		var month = date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
		var currentDate = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
		return date.getFullYear() + "-" + month + "-" + currentDate;
	},
	ConvertDate: function ConvertDate(jsondate) {
		var date = new Date(parseInt(jsondate.replace("/Date(", "").replace(")/", ""), 10));
		return date;
	},
	Format: function Format(time, rule) {
		//console.log(date.Format("yyyy年MM月dd日 hh:mm:ss.S")); //输出: 2016年04月01日 10:41:08.133
		//console.log(date.Format("yyyy-MM-dd hh:mm:ss")); //输出: 2016-04-01 10:41:08
		//console.log(date.Format("yy-MM-dd hh:mm:ss")); //输出: 16-04-01 10:41:08
		//console.log(date.Format("yy-M-d hh:mm:ss")); //输出: 16-4-1 10:41:08
		var date = new Date(parseInt(time.replace("/Date(", "").replace(")/", ""), 10));
		var o = {
			"y+": date.getFullYear(),
			"M+": date.getMonth() + 1, //月份
			"d+": date.getDate(), //日
			"h+": date.getHours(), //小时
			"m+": date.getMinutes(), //分
			"s+": date.getSeconds(), //秒
			"q+": Math.floor((date.getMonth() + 3) / 3), //季度
			"S+": date.getMilliseconds //毫秒
			() };
		for (var k in o) {
			if (new RegExp("(" + k + ")").test(rule)) {
				if (k == "y+") {
					rule = rule.replace(RegExp.$1, ("" + o[k]).substr(4 - RegExp.$1.length));
				} else if (k == "S+") {
					var lens = RegExp.$1.length;
					lens = lens == 1 ? 3 : lens;
					rule = rule.replace(RegExp.$1, ("00" + o[k]).substr(("" + o[k]).length - 1, lens));
				} else {
					rule = rule.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
				}
			}
		}
		return rule;
	}
};

/***/ }),

/***/ 296:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = Square;

var _react = __webpack_require__(6);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(297);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Square() {
    return _react2.default.createElement(
        'div',
        { className: 'loader' },
        _react2.default.createElement(
            'div',
            { className: 'pacman' },
            _react2.default.createElement('div', null),
            _react2.default.createElement('div', null),
            _react2.default.createElement('div', null),
            _react2.default.createElement('div', null),
            _react2.default.createElement('div', null)
        )
    );
}

/***/ }),

/***/ 297:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 305:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

});
//# sourceMappingURL=app-search-1.js.map