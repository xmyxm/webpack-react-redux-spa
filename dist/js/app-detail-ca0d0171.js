webpackJsonp([0],{148:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c,s,l=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),u=a(11),d=(n(u),a(1)),f=n(d),p=a(166),m=(n(p),a(165)),h=(n(m),a(27)),g=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t.default=e,t}(h),b=a(28),w=a(154),y=n(w),v=a(157),x=n(v);a(159);var E=(c=(0,b.connect)(function(e){return{fetchData:e.fetchData}},g))(s=function(e){function t(e){r(this,t);var a=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.dataloading=!0,a}return i(t,e),l(t,[{key:"shouldComponentUpdate",value:function(e,t){if(e.fetchData){if(e.fetchData.isFetching)return this.dataloading=!0,!1;if(this.dataloading=!1,e.fetchData.Json){var a=e.fetchData.Json;a&&a.BlogID>0&&(this.data=a)}}return!0}},{key:"componentDidMount",value:function(){var e=(window.location.hash||window.location.pathname).replace(/\D/g,"");this.props.fetchPosts("http://qqweb.top/API/BlogApi/Detail",{id:e})}},{key:"createMarkup",value:function(e){return e=e.replace(/\/UploadFile\/contentImg\//g,"http://qqweb.top/UploadFile/contentImg/"),{__html:e}}},{key:"render",value:function(){return f.default.createElement("div",{className:"detailbox"},this.data&&f.default.createElement("div",{className:"contentarea"},f.default.createElement("div",{className:"title"},f.default.createElement("div",{className:"text"},this.data.DetailContent.Title),f.default.createElement("div",{className:"option"},"写于 ",y.default.ChangeDateFormat(this.data.DetailContent.CreateTime)," | 分类于 ",this.data.DetailContent.SortName)),f.default.createElement("div",{className:"content",dangerouslySetInnerHTML:this.createMarkup(this.data.DetailContent.Content)}),f.default.createElement("div",{className:"tag"},f.default.createElement("span",{className:"mr6"},"我的标签: "),this.data.DetailContent.Tag.replace(/^;+|;+$/g,"").split(";").map(function(e,t){return f.default.createElement("span",{key:t,className:"text"},e)})),f.default.createElement("div",{className:"uptime"},"修改于 ",y.default.Format(this.data.DetailContent.UpdateTime,"yyyy年MM月dd日 hh:mm:ss"))),!this.data&&f.default.createElement(x.default,null))}}]),t}(d.Component))||s;t.default=E},154:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={ChangeDateFormat:function(e){var t=new Date(parseInt(e.replace("/Date(","").replace(")/",""),10)),a=t.getMonth()+1<10?"0"+(t.getMonth()+1):t.getMonth()+1,n=t.getDate()<10?"0"+t.getDate():t.getDate();return t.getFullYear()+"-"+a+"-"+n},ConvertDate:function(e){return new Date(parseInt(e.replace("/Date(","").replace(")/",""),10))},Format:function(e,t){var a=new Date(parseInt(e.replace("/Date(","").replace(")/",""),10)),n={"y+":a.getFullYear(),"M+":a.getMonth()+1,"d+":a.getDate(),"h+":a.getHours(),"m+":a.getMinutes(),"s+":a.getSeconds(),"q+":Math.floor((a.getMonth()+3)/3),"S+":a.getMilliseconds()};for(var r in n)if(new RegExp("("+r+")").test(t))if("y+"==r)t=t.replace(RegExp.$1,(""+n[r]).substr(4-RegExp.$1.length));else if("S+"==r){var o=RegExp.$1.length;o=1==o?3:o,t=t.replace(RegExp.$1,("00"+n[r]).substr((""+n[r]).length-1,o))}else t=t.replace(RegExp.$1,1==RegExp.$1.length?n[r]:("00"+n[r]).substr((""+n[r]).length));return t}}},157:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(){return c.default.createElement("div",{className:"Cube panelLoad"},c.default.createElement("div",{className:"cube-face cube-face-front"},"Na"),c.default.createElement("div",{className:"cube-face cube-face-back"},"O2"),c.default.createElement("div",{className:"cube-face cube-face-left"},"Mg"),c.default.createElement("div",{className:"cube-face cube-face-right"},"Ca"),c.default.createElement("div",{className:"cube-face cube-face-bottom"},"H2"),c.default.createElement("div",{className:"cube-face cube-face-top"},"C"))}Object.defineProperty(t,"__esModule",{value:!0}),t.default=r;var o=a(11),i=(n(o),a(1)),c=n(i);a(158)},158:function(e,t){throw new Error("Module build failed: ModuleBuildError: Module build failed: Error: No PostCSS Config found in: /Users/chenxuanfeng/mydata/webpack-react-redux-spa/src/component/animation\n    at /Users/chenxuanfeng/mydata/webpack-react-redux-spa/node_modules/postcss-load-config/index.js:51:26\n    at <anonymous>\n    at runLoaders (/Users/chenxuanfeng/mydata/webpack-react-redux-spa/node_modules/webpack/lib/NormalModule.js:192:19)\n    at /Users/chenxuanfeng/mydata/webpack-react-redux-spa/node_modules/loader-runner/lib/LoaderRunner.js:364:11\n    at /Users/chenxuanfeng/mydata/webpack-react-redux-spa/node_modules/loader-runner/lib/LoaderRunner.js:230:18\n    at context.callback (/Users/chenxuanfeng/mydata/webpack-react-redux-spa/node_modules/loader-runner/lib/LoaderRunner.js:111:13)\n    at Promise.resolve.then.then.catch (/Users/chenxuanfeng/mydata/webpack-react-redux-spa/node_modules/postcss-loader/lib/index.js:185:71)\n    at <anonymous>")},159:function(e,t){throw new Error("Module build failed: ModuleBuildError: Module build failed: Error: No PostCSS Config found in: /Users/chenxuanfeng/mydata/webpack-react-redux-spa/src/component/detail\n    at /Users/chenxuanfeng/mydata/webpack-react-redux-spa/node_modules/postcss-load-config/index.js:51:26\n    at <anonymous>\n    at runLoaders (/Users/chenxuanfeng/mydata/webpack-react-redux-spa/node_modules/webpack/lib/NormalModule.js:192:19)\n    at /Users/chenxuanfeng/mydata/webpack-react-redux-spa/node_modules/loader-runner/lib/LoaderRunner.js:364:11\n    at /Users/chenxuanfeng/mydata/webpack-react-redux-spa/node_modules/loader-runner/lib/LoaderRunner.js:230:18\n    at context.callback (/Users/chenxuanfeng/mydata/webpack-react-redux-spa/node_modules/loader-runner/lib/LoaderRunner.js:111:13)\n    at Promise.resolve.then.then.catch (/Users/chenxuanfeng/mydata/webpack-react-redux-spa/node_modules/postcss-loader/lib/index.js:185:71)\n    at <anonymous>")},165:function(e,t){throw new Error("Module build failed: ModuleBuildError: Module build failed: Error: No PostCSS Config found in: /Users/chenxuanfeng/mydata/webpack-react-redux-spa/node_modules/social-share.js/src/css\n    at /Users/chenxuanfeng/mydata/webpack-react-redux-spa/node_modules/postcss-load-config/index.js:51:26\n    at <anonymous>\n    at runLoaders (/Users/chenxuanfeng/mydata/webpack-react-redux-spa/node_modules/webpack/lib/NormalModule.js:192:19)\n    at /Users/chenxuanfeng/mydata/webpack-react-redux-spa/node_modules/loader-runner/lib/LoaderRunner.js:364:11\n    at /Users/chenxuanfeng/mydata/webpack-react-redux-spa/node_modules/loader-runner/lib/LoaderRunner.js:230:18\n    at context.callback (/Users/chenxuanfeng/mydata/webpack-react-redux-spa/node_modules/loader-runner/lib/LoaderRunner.js:111:13)\n    at Promise.resolve.then.then.catch (/Users/chenxuanfeng/mydata/webpack-react-redux-spa/node_modules/postcss-loader/lib/index.js:185:71)\n    at <anonymous>")},166:function(e,t){!function(e,t,a){function n(e,t){var a=m({},U,t||{},h(e));a.imageSelector&&(a.image=s(a.imageSelector).map(function(e){return e.src}).join("||")),u(e,"share-component social-share"),r(e,a),o(e,a),e.initialized=!0}function r(e,t){var a=i(t),n="prepend"==t.mode;b(n?a.reverse():a,function(a){var r=c(a,t),o=t.initialized?f(e,"icon-"+a):p('<a class="social-share-icon icon-'+a+'"></a>');if(!o.length)return!0;o[0].href=r,"wechat"===a?o[0].tabindex=-1:o[0].target="_blank",t.initialized||(n?e.insertBefore(o[0],e.firstChild):e.appendChild(o[0]))})}function o(e,t){var a=f(e,"icon-wechat","a");if(0===a.length)return!1;var n=p('<div class="wechat-qrcode"><h4>'+t.wechatQrcodeTitle+'</h4><div class="qrcode"></div><div class="help">'+t.wechatQrcodeHelper+"</div></div>"),r=f(n[0],"qrcode","div");a[0].appendChild(n[0]),new QRCode(r[0],{text:t.url,width:t.wechatQrcodeSize,height:t.wechatQrcodeSize})}function i(e){e.mobileSites.length||(e.mobileSites=e.sites);var t=(x?e.mobileSites:e.sites).slice(0),a=e.disabled;return"string"==typeof t&&(t=t.split(/\s*,\s*/)),"string"==typeof a&&(a=a.split(/\s*,\s*/)),v&&a.push("wechat"),a.length&&b(a,function(e){t.splice(g(e,t),1)}),t}function c(e,t){return t.summary=t.description,C[e].replace(/\{\{(\w)(\w*)\}\}/g,function(n,r,o){var i=e+r+o.toLowerCase();return o=(r+o).toLowerCase(),encodeURIComponent((t[i]===a?t[o]:t[i])||"")})}function s(a){return(t.querySelectorAll||e.jQuery||e.Zepto||l).call(t,a)}function l(e){var a=[];return b(e.split(/\s*,\s*/),function(n){var r=n.match(/([#.])(\w+)/);if(null===r)throw Error("Supports only simple single #ID or .CLASS selector.");if(r[1]){var o=t.getElementById(r[2]);o&&a.push(o)}a=a.concat(f(e))}),a}function u(e,t){if(t&&"string"==typeof t){var a=(e.className+" "+t).split(/\s+/),n=" ";b(a,function(e){n.indexOf(" "+e+" ")<0&&(n+=e+" ")}),e.className=n.slice(1,-1)}}function d(e){return(t.getElementsByName(e)[0]||0).content}function f(e,t,a){if(e.getElementsByClassName)return e.getElementsByClassName(t);var n=[],r=e.getElementsByTagName(a||"*");return t=" "+t+" ",b(r,function(e){(" "+(e.className||"")+" ").indexOf(t)>=0&&n.push(e)}),n}function p(e){var a=t.createElement("div");return a.innerHTML=e,a.childNodes}function m(){var e=arguments;if(y)return y.apply(null,e);var t={};return b(e,function(e){b(e,function(e,a){t[a]=e})}),e[0]=t}function h(e){if(e.dataset)return e.dataset;var t={};return e.hasAttributes()?(b(e.attributes,function(e){var a=e.name;if(0!==a.indexOf("data-"))return!0;a=a.replace(/^data-/i,"").replace(/-(\w)/g,function(e,t){return t.toUpperCase()}),t[a]=e.value}),t):{}}function g(e,t,a){var n;if(t){if(w)return w.call(t,e,a);for(n=t.length,a=a?a<0?Math.max(0,n+a):a:0;a<n;a++)if(a in t&&t[a]===e)return a}return-1}function b(e,t){var n=e.length;if(n===a){for(var r in e)if(e.hasOwnProperty(r)&&!1===t.call(e[r],e[r],r))break}else for(var o=0;o<n&&!1!==t.call(e[o],e[o],o);o++);}var w=Array.prototype.indexOf,y=Object.assign,v=/MicroMessenger/i.test(navigator.userAgent),x=t.documentElement.clientWidth<=768,E=(t.images[0]||0).src||"",k=d("site")||d("Site")||t.title,M=d("title")||d("Title")||t.title,_=d("description")||d("Description")||"",U={url:location.href,origin:location.origin,source:k,title:M,description:_,image:E,imageSelector:a,weiboKey:"",wechatQrcodeTitle:"微信扫一扫：分享",wechatQrcodeHelper:"<p>微信里点“发现”，扫一下</p><p>二维码便可将本文分享至朋友圈。</p>",wechatQrcodeSize:100,sites:["weibo","qq","wechat","tencent","douban","qzone","linkedin","diandian","facebook","twitter","google"],mobileSites:[],disabled:[],initialized:!1},C={qzone:"http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url={{URL}}&title={{TITLE}}&desc={{DESCRIPTION}}&summary={{SUMMARY}}&site={{SOURCE}}",qq:"http://connect.qq.com/widget/shareqq/index.html?url={{URL}}&title={{TITLE}}&source={{SOURCE}}&desc={{DESCRIPTION}}&pics={{IMAGE}}",tencent:"http://share.v.t.qq.com/index.php?c=share&a=index&title={{TITLE}}&url={{URL}}&pic={{IMAGE}}",weibo:"http://service.weibo.com/share/share.php?url={{URL}}&title={{TITLE}}&pic={{IMAGE}}&appkey={{WEIBOKEY}}",wechat:"javascript:",douban:"http://shuo.douban.com/!service/share?href={{URL}}&name={{TITLE}}&text={{DESCRIPTION}}&image={{IMAGE}}&starid=0&aid=0&style=11",diandian:"http://www.diandian.com/share?lo={{URL}}&ti={{TITLE}}&type=link",linkedin:"http://www.linkedin.com/shareArticle?mini=true&ro=true&title={{TITLE}}&url={{URL}}&summary={{SUMMARY}}&source={{SOURCE}}&armin=armin",facebook:"https://www.facebook.com/sharer/sharer.php?u={{URL}}",twitter:"https://twitter.com/intent/tweet?text={{TITLE}}&url={{URL}}&via={{ORIGIN}}",google:"https://plus.google.com/share?url={{URL}}"};e.socialShare=function(e,t){e="string"==typeof e?s(e):e,e.length===a&&(e=[e]),b(e,function(e){e.initialized||n(e,t)})},function(a){var n="addEventListener",r=t[n]?"":"on";~t.readyState.indexOf("m")?a():"load DOMContentLoaded readystatechange".replace(/\w+/g,function(o,i){(i?t:e)[r?"attachEvent":n](r+o,function(){a&&(i<6||~t.readyState.indexOf("m"))&&(a(),a=0)},!1)})}(function(){socialShare(".social-share, .share-component")})}(window,document)}});