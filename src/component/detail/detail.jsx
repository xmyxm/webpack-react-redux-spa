import indexcss from './detail.less';
import ReactDOM from 'react-dom';
import React,{Component} from 'react';
import share from 'social-share.js/src/js/social-share.js';
import shareStyle from 'social-share.js/src/css/share.scss';
import *as action from '../../redux/action/fetch-action.js';
import {connect} from 'react-redux';

class Detail extends Component{
	constructor(props){
		super(props);
	}
	
	shouldComponentUpdate(nextProps, nextState){
		console.log('状态改变');
		return true;
	}

	//在第一次渲染后调用，只在客户端
	componentDidMount(){
		console.log('输出分享组件暴露api : ' + typeof window.socialShare);
		this.props.fetchPosts('http://qqweb.top/API/BlogApi/Detail',{ID:55});
	}

	render(){
		const {children} = this.props;
		return (
			 <div className = "detailbox">
			 	<div className = "title">
					<div className = "text">sublime相关插件及其快捷键记录</div>
					<div className = "option">写于 2017-07-15 | 分类于 编程</div>
			 	</div>
			 	<div className = "content">
					一站式页面调试、抓包工具。远程调试任何手机浏览器页面，任何手机移动端webview（如：微信，HybirdApp等）。支持HTTP/HTTPS，无需USB连接设备。

					特性

					1、页面调试＋抓包
					2、操作简单，无需USB连接设备
					3、支持HTTPS。
					4、spy-debugger内部集成了weinre、node-mitmproxy、AnyProxy
					5、自动忽略原生App发起的https请求，只拦截webview发起的https请求。对使用了SSL pinning技术的原生App不造成任何影响
					6、可以配合其它代理工具一起使用(默认使用AnyProxy) (设置外部代理)
					安装使用

					1、安装
					// Windows 下
					npm install spy-debugger -g
					// Mac 下
					sudo npm install spy-debugger -g
					2、命令行输入spy-debugger，浏览器自动打开地址或按命令行提示用浏览器打开地址
					3、打开wifi，连接到电脑同一个网络下的wifi，并将命令行中提示内容设置到HTTP代理上
					Android设置代理步骤：设置 - WLAN - 长按选中网络 - 修改网络 - 高级 - 代理设置 - 手动
					iOS设置代理步骤：设置 - 无线局域网 - 选中网络 - HTTP代理手动
					4、手机安装证书(手机首次调试需要安装证书，已安装了证书的手机无需重复安装)
					5、用手机浏览器或微信浏览器访问你要调试的页面
					高级设置

					自定义端口(默认9888)
					spy-debugger -p 8888
					设置外部代理（默认使用AnyProxy）
					spy-debugger -e http://127.0.0.1:8888
					注：spy-debugger内置AnyProxy提供抓包功能，但是也可通过设置外部代理和其它抓包代理工具一起使用，如：Charles、Fiddler
					设置页面内容为可编辑模式(默认是false)
					spy-debugger -w true
					注：内部实现原理：在需要调试的页面内注入代码：document.body.contentEditable=true。暂不支持使用了iscroll框架的页面。
					是否允许weinre监控iframe加载的页面（默认是false）
					spy-debugger -i true
					是否只拦截浏览器发起的https请求（默认是true）
					spy-debugger -b false
					是否允许HTTP缓存(默认是false)
					spy-debugger -c true
					使用示例
			 	</div>
			 	<div className = "tag">
				 	<span className = "text">快捷键</span>
	 				<span className = "text">sublime</span>
	 				<span className = "text">插件</span>
	 				<span className = "text">调试</span>
			 	</div>
			 	<div className = "share-component" data-mobile-sites="weibo,qq,qzone,tencent"></div>
			 	<div className = "comment">
					<textarea placeholder = "内容 ~ ~ ~"></textarea>
					<div>评论</div>
			 	</div>
			 </div>
	    )
	}
} 


export default connect(
	state=> {
		return {fetchData:state.fetchData}
	}
	,action)(Detail);































