webpackJsonp([0],{

/***/ 289:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _reactDom = __webpack_require__(39);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _react = __webpack_require__(6);

var _react2 = _interopRequireDefault(_react);

var _socialShare = __webpack_require__(307);

var _socialShare2 = _interopRequireDefault(_socialShare);

var _share = __webpack_require__(306);

var _share2 = _interopRequireDefault(_share);

var _fetchAction = __webpack_require__(67);

var action = _interopRequireWildcard(_fetchAction);

var _reactRedux = __webpack_require__(68);

var _dateFormat = __webpack_require__(295);

var _dateFormat2 = _interopRequireDefault(_dateFormat);

var _cube = __webpack_require__(298);

var _cube2 = _interopRequireDefault(_cube);

__webpack_require__(300);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Detail = (_dec = (0, _reactRedux.connect)(function (state) {
	return { fetchData: state.fetchData };
}, action), _dec(_class = function (_Component) {
	_inherits(Detail, _Component);

	function Detail(props) {
		_classCallCheck(this, Detail);

		var _this = _possibleConstructorReturn(this, (Detail.__proto__ || Object.getPrototypeOf(Detail)).call(this, props));

		_this.dataloading = true;
		return _this;
	}

	_createClass(Detail, [{
		key: 'shouldComponentUpdate',
		value: function shouldComponentUpdate(nextProps, nextState) {
			if (nextProps.fetchData) {
				if (nextProps.fetchData.isFetching) {
					this.dataloading = true;
					return false;
				}
				this.dataloading = false;
				if (nextProps.fetchData.Json) {
					var data = nextProps.fetchData.Json;
					if (data && data.BlogID > 0) {
						this.data = data;
					}
				}
			}
			return true;
		}

		//在第一次渲染后调用，只在客户端

	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {
			console.log('输出分享组件暴露api : ' + _typeof(window.socialShare));
			this.props.fetchPosts('http://qqweb.top/API/BlogApi/Detail', { id: window.location.pathname.replace(/\/detail\//img, '') });
		}
	}, {
		key: 'createMarkup',
		value: function createMarkup(html) {
			//方便测试，图片路径补全
			html = html.replace(/\/UploadFile\/contentImg\//g, 'http://qqweb.top/UploadFile/contentImg/');
			return { __html: html };
		}
	}, {
		key: 'render',
		value: function render() {

			return _react2.default.createElement(
				'div',
				{ className: 'detailbox' },
				this.data && _react2.default.createElement(
					'div',
					{ className: 'contentarea' },
					_react2.default.createElement(
						'div',
						{ className: 'title' },
						_react2.default.createElement(
							'div',
							{ className: 'text' },
							this.data.DetailContent.Title
						),
						_react2.default.createElement(
							'div',
							{ className: 'option' },
							'\u5199\u4E8E ',
							_dateFormat2.default.ChangeDateFormat(this.data.DetailContent.CreateTime),
							' | \u5206\u7C7B\u4E8E ',
							this.data.DetailContent.SortName
						)
					),
					_react2.default.createElement('div', { className: 'content', dangerouslySetInnerHTML: this.createMarkup(this.data.DetailContent.Content) }),
					_react2.default.createElement(
						'div',
						{ className: 'tag' },
						_react2.default.createElement(
							'span',
							{ className: 'mr6' },
							'\u6211\u7684\u6807\u7B7E: '
						),
						this.data.DetailContent.Tag.replace(/^;+|;+$/g, "").split(";").map(function (item, index) {
							return _react2.default.createElement(
								'span',
								{ key: index, className: 'text' },
								item
							);
						})
					),
					_react2.default.createElement(
						'div',
						{ className: 'uptime' },
						'\u4FEE\u6539\u4E8E ',
						_dateFormat2.default.Format(this.data.DetailContent.UpdateTime, "yyyy年MM月dd日 hh:mm:ss")
					)
				),
				!this.data && _react2.default.createElement(_cube2.default, null)
			);
		}
	}]);

	return Detail;
}(_react.Component)) || _class);

/*			 	<div className = "share-component" data-mobile-sites="weibo,qq,qzone,tencent"></div>
			 	<div className = "comment">
			 		<div className = "inputarea">
			 			<input className = "username" type="text" placeholder = "昵称" />
			 			<textarea className = "inputtext" placeholder = "内容 ~ ~ ~"></textarea>
			 		</div>
					<div className = "commentbtn" >评论</div>
			 	</div>*/

exports.default = Detail;

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

/***/ 298:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = Square;

var _reactDom = __webpack_require__(39);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _react = __webpack_require__(6);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(299);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Square() {
	return _react2.default.createElement(
		'div',
		{ className: 'Cube panelLoad' },
		_react2.default.createElement(
			'div',
			{ className: 'cube-face cube-face-front' },
			'Na'
		),
		_react2.default.createElement(
			'div',
			{ className: 'cube-face cube-face-back' },
			'O2'
		),
		_react2.default.createElement(
			'div',
			{ className: 'cube-face cube-face-left' },
			'Mg'
		),
		_react2.default.createElement(
			'div',
			{ className: 'cube-face cube-face-right' },
			'Ca'
		),
		_react2.default.createElement(
			'div',
			{ className: 'cube-face cube-face-bottom' },
			'H2'
		),
		_react2.default.createElement(
			'div',
			{ className: 'cube-face cube-face-top' },
			'C'
		)
	);
}

/***/ }),

/***/ 299:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 300:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 306:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 307:
/***/ (function(module, exports) {

/**
 * social-share.js
 *
 * @author  52cik <fe.52cik@gmail.com>
 * @license MIT
 *
 * @example
 * <pre>
 * socialShare('.share-components');
 *
 * // or
 *
 * socialShare('.share-bar', {
 *     sites: ['qzone', 'qq', 'weibo','wechat'],
 *     // ...
 * });
 * </pre>
 */
;(function (window, document, undefined) {

    // Initialize a variables.

    var Array$indexOf = Array.prototype.indexOf;
    var Object$assign = Object.assign;

    var runningInWeChat = /MicroMessenger/i.test(navigator.userAgent);
    var isMobileScreen = document.documentElement.clientWidth <= 768;

    var image = (document.images[0] || 0).src || '';
    var site = getMetaContentByName('site') || getMetaContentByName('Site') || document.title;
    var title = getMetaContentByName('title') || getMetaContentByName('Title') || document.title;
    var description = getMetaContentByName('description') || getMetaContentByName('Description') || '';

    var defaults = {
        url: location.href,
        origin: location.origin,
        source: site,
        title: title,
        description: description,
        image: image,
        imageSelector: undefined,

        weiboKey: '',

        wechatQrcodeTitle: '微信扫一扫：分享',
        wechatQrcodeHelper: '<p>微信里点“发现”，扫一下</p><p>二维码便可将本文分享至朋友圈。</p>',
        wechatQrcodeSize: 100,

        sites: ['weibo', 'qq', 'wechat', 'tencent', 'douban', 'qzone', 'linkedin', 'diandian', 'facebook', 'twitter', 'google'],
        mobileSites: [],
        disabled: [],
        initialized: false
    };

    var templates = {
        qzone: 'http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url={{URL}}&title={{TITLE}}&desc={{DESCRIPTION}}&summary={{SUMMARY}}&site={{SOURCE}}',
        qq: 'http://connect.qq.com/widget/shareqq/index.html?url={{URL}}&title={{TITLE}}&source={{SOURCE}}&desc={{DESCRIPTION}}&pics={{IMAGE}}',
        tencent: 'http://share.v.t.qq.com/index.php?c=share&a=index&title={{TITLE}}&url={{URL}}&pic={{IMAGE}}',
        weibo: 'http://service.weibo.com/share/share.php?url={{URL}}&title={{TITLE}}&pic={{IMAGE}}&appkey={{WEIBOKEY}}',
        wechat: 'javascript:',
        douban: 'http://shuo.douban.com/!service/share?href={{URL}}&name={{TITLE}}&text={{DESCRIPTION}}&image={{IMAGE}}&starid=0&aid=0&style=11',
        diandian: 'http://www.diandian.com/share?lo={{URL}}&ti={{TITLE}}&type=link',
        linkedin: 'http://www.linkedin.com/shareArticle?mini=true&ro=true&title={{TITLE}}&url={{URL}}&summary={{SUMMARY}}&source={{SOURCE}}&armin=armin',
        facebook: 'https://www.facebook.com/sharer/sharer.php?u={{URL}}',
        twitter: 'https://twitter.com/intent/tweet?text={{TITLE}}&url={{URL}}&via={{ORIGIN}}',
        google: 'https://plus.google.com/share?url={{URL}}'
    };


    /**
     * Expose API to the global
     *
     * @param  {String|Element} elem
     * @param  {Object} options
     */
    window.socialShare = function (elem, options) {
        elem = typeof elem === 'string' ? querySelectorAlls(elem) : elem;

        if (elem.length === undefined) {
            elem = [elem];
        }

        each(elem, function (el) {
            if (!el.initialized) {
                share(el, options);
            }
        });
    };

    // Domready after initialization
    alReady(function () {
        socialShare('.social-share, .share-component');
    });


    /**
     * Initialize a share bar.
     *
     * @param {Object}        $options globals (optional).
     *
     * @return {Void}
     */
    function share(elem, options) {
        var data = mixin({}, defaults, options || {}, dataset(elem));

        if (data.imageSelector) {
            data.image = querySelectorAlls(data.imageSelector).map(function(item) {
                return item.src;
            }).join('||');
        }

        addClass(elem, 'share-component social-share');
        createIcons(elem, data);
        createWechat(elem, data);

        elem.initialized = true;
    }


    /**
     * Create site icons
     *
     * @param {Element} elem
     * @param {Object} data
     */
    function createIcons(elem, data) {
        var sites = getSites(data);
        var isPrepend = data.mode == 'prepend';

        each(isPrepend ? sites.reverse() : sites, function (name) {
            var url = makeUrl(name, data);
            var link = data.initialized ? getElementsByClassName(elem, 'icon-' + name) : createElementByString('<a class="social-share-icon icon-' + name + '"></a>');

            if (!link.length) {
                return true;
            }

            link[0].href = url;

            if (name === 'wechat') {
                link[0].tabindex = -1;
            } else {
                link[0].target = '_blank';
            }

            if (!data.initialized) {
                isPrepend ? elem.insertBefore(link[0], elem.firstChild) : elem.appendChild(link[0]);
            }
        });
    }


    /**
     * Create the wechat icon and QRCode.
     *
     * @param {Element} elem
     * @param {Object} data
     */
    function createWechat (elem, data) {
        var wechat = getElementsByClassName(elem, 'icon-wechat', 'a');

        if (wechat.length === 0) {
            return false;
        }

        var elems = createElementByString('<div class="wechat-qrcode"><h4>' + data.wechatQrcodeTitle + '</h4><div class="qrcode"></div><div class="help">' + data.wechatQrcodeHelper + '</div></div>');
        var qrcode = getElementsByClassName(elems[0], 'qrcode', 'div');

        wechat[0].appendChild(elems[0]);
        new QRCode(qrcode[0], {text: data.url, width: data.wechatQrcodeSize, height: data.wechatQrcodeSize});
    }


    /**
     * Get available site lists.
     *
     * @param {Object} data
     *
     * @returns {Array}
     */
    function getSites(data) {
        if (!data['mobileSites'].length) {
            data['mobileSites'] = data['sites'];
        }

        var sites = (isMobileScreen ? data['mobileSites'] : data['sites']).slice(0);
        var disabled = data['disabled'];

        if (typeof sites == 'string') {
            sites = sites.split(/\s*,\s*/);
        }
        if (typeof disabled == 'string') {
            disabled = disabled.split(/\s*,\s*/);
        }

        if (runningInWeChat) {
            disabled.push('wechat');
        }

        // Remove elements
        disabled.length && each(disabled, function (it) {
            sites.splice(inArray(it, sites), 1);
        });

        return sites;
    }


    /**
     * Build the url of icon.
     *
     * @param {String} name
     * @param {Object} data
     *
     * @returns {String}
     */
    function makeUrl(name, data) {
        data['summary'] = data['description'];

        return templates[name].replace(/\{\{(\w)(\w*)\}\}/g, function (m, fix, key) {
            var nameKey = name + fix + key.toLowerCase();
            key = (fix + key).toLowerCase();

            return encodeURIComponent((data[nameKey] === undefined ? data[key] : data[nameKey]) || '');
        });
    }


    /**
     * Supports querySelectorAll, jQuery, Zepto and simple selector.
     *
     * @param str
     *
     * @returns {*}
     */
    function querySelectorAlls(str) {
        return (document.querySelectorAll || window.jQuery || window.Zepto || selector).call(document, str);
    }


    /**
     * Simple selector.
     *
     * @param {String} str #ID or .CLASS
     *
     * @returns {Array}
     */
    function selector(str) {
        var elems = [];

        each(str.split(/\s*,\s*/), function(s) {
            var m = s.match(/([#.])(\w+)/);
            if (m === null) {
                throw Error('Supports only simple single #ID or .CLASS selector.');
            }

            if (m[1]) {
                var elem = document.getElementById(m[2]);

                if (elem) {
                    elems.push(elem);
                }
            }

            elems = elems.concat(getElementsByClassName(str));
        });

        return elems;
    }


    /**
     * Add the classNames for element.
     *
     * @param {Element} elem
     * @param {String} value
     */
    function addClass(elem, value) {
        if (value && typeof value === "string") {
            var classNames = (elem.className + ' ' + value).split(/\s+/);
            var setClass = ' ';

            each(classNames, function (className) {
                if (setClass.indexOf(' ' + className + ' ') < 0) {
                    setClass += className + ' ';
                }
            });

            elem.className = setClass.slice(1, -1);
        }
    }


    /**
     * Get meta element content value
     *
     * @param {String} name
     *
     * @returns {String|*}
     */
    function getMetaContentByName(name) {
        return (document.getElementsByName(name)[0] || 0).content;
    }


    /**
     * Get elements By className for IE8-
     *
     * @param {Element} elem element
     * @param {String} name className
     * @param {String} tag tagName
     *
     * @returns {HTMLCollection|Array}
     */
    function getElementsByClassName(elem, name, tag) {
        if (elem.getElementsByClassName) {
            return elem.getElementsByClassName(name);
        }

        var elements = [];
        var elems = elem.getElementsByTagName(tag || '*');
        name = ' ' + name + ' ';

        each(elems, function (elem) {
            if ((' ' + (elem.className || '') + ' ').indexOf(name) >= 0) {
                elements.push(elem);
            }
        });

        return elements;
    }


    /**
     * Create element by string.
     *
     * @param {String} str
     *
     * @returns {NodeList}
     */
    function createElementByString(str) {
        var div = document.createElement('div');
        div.innerHTML = str;

        return div.childNodes;
    }


    /**
     * Merge objects.
     *
     * @returns {Object}
     */
    function mixin() {
        var args = arguments;

        if (Object$assign) {
            return Object$assign.apply(null, args);
        }

        var target = {};

        each(args, function (it) {
            each(it, function (v, k) {
                target[k] = v;
            });
        });

        return args[0] = target;
    }


    /**
     * Get dataset object.
     *
     * @param {Element} elem
     *
     * @returns {Object}
     */
    function dataset(elem) {
        if (elem.dataset) {
            return elem.dataset;
        }

        var target = {};

        if (elem.hasAttributes()) {
            each(elem.attributes, function (attr) {
                var name = attr.name;
                if (name.indexOf('data-') !== 0) {
                    return true;
                }

                name = name.replace(/^data-/i, '')
                    .replace(/-(\w)/g, function (all, letter) {
                        return letter.toUpperCase();
                    });

                target[name] = attr.value;
            });

            return target;
        }

        return {};
    }


    /**
     * found element in the array.
     *
     * @param {Array|Object} elem
     * @param {Array} arr
     * @param {Number} i
     *
     * @returns {Number}
     */
    function inArray(elem, arr, i) {
        var len;

        if (arr) {
            if (Array$indexOf) {
                return Array$indexOf.call(arr, elem, i);
            }

            len = arr.length;
            i = i ? i < 0 ? Math.max(0, len + i) : i : 0;

            for (; i < len; i++) {
                // Skip accessing in sparse arrays
                if (i in arr && arr[i] === elem) {
                    return i;
                }
            }
        }

        return -1;
    }


    /**
     * Simple each.
     *
     * @param {Array|Object} obj
     * @param {Function} callback
     *
     * @returns {*}
     */
    function each(obj, callback) {
        var length = obj.length;

        if (length === undefined) {
            for (var name in obj) {
                if (obj.hasOwnProperty(name)) {
                    if (callback.call(obj[name], obj[name], name) === false) {
                        break;
                    }
                }
            }
        } else {
            for (var i = 0; i < length; i++) {
                if (callback.call(obj[i], obj[i], i) === false) {
                    break;
                }
            }
        }
    }


    /**
     * Dom ready.
     *
     * @param {Function} fn
     *
     * @link https://github.com/jed/alReady.js
     */
    function alReady ( fn ) {
        var add = 'addEventListener';
        var pre = document[ add ] ? '' : 'on';

        ~document.readyState.indexOf( 'm' ) ? fn() :
            'load DOMContentLoaded readystatechange'.replace( /\w+/g, function( type, i ) {
                ( i ? document : window )
                    [ pre ? 'attachEvent' : add ]
                (
                    pre + type,
                    function(){ if ( fn ) if ( i < 6 || ~document.readyState.indexOf( 'm' ) ) fn(), fn = 0 },
                    !1
                )
            })
    }
})(window, document);


/***/ })

});
//# sourceMappingURL=app-detail-0.js.map