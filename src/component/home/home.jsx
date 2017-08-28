import indexcss from './home.less';
import ReactDOM from 'react-dom';
import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import *as action from '../../redux/action/fetch-action.js';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class Home extends Component{
	constructor(props){
		super(props);
	}

	shouldComponentUpdate(nextProps, nextState){
		console.log('状态改变');
		return true;
	}

	componentDidMount(){
		console.log(this.props);
		//this.props.fetchPosts('http://qqweb.top/BlogApi/WorkList',{PageIndex:1,PageSize:10});
		this.props.fetchPosts('https://m.dianping.com/other/dish/nearestshopapi?dishname=%E7%9F%B3%E9%94%85%E9%B1%BC&lat=31.217388399999997&lng=121.4158023&cityid=1',{});
	}

	render(){
		return (
			<div className = "homebox">
				<ul className = "list" >
					<li className = "item" >
						<Link to="/detail/1" className = "title">sublime相关插件及其快捷键记录</Link>
						<p className = "content">
							快捷键：
							1：在Sublime Text中，按下Ctrl+Shift+P调出命令面板;
							2：输入install 调出 Install Package 选项并回车;
							3：输入pretty，并在列表中选择HTML-CSS-JS Prettify后回车即可安装（格式化 javascript、css、html）
						</p>
						<div className = "information">
							<span className = "time">2017-07-31</span>
							<span className = "author">晨曦沐枫</span>
						</div>
					</li>
					<li className = "item" >
						<Link to="/detail/2" className = "title">您的安全性偏好设置仅允许安装来自 App Store 和被认可的开发者的应用</Link>
						<p className = "content">
							快捷键：
							1：在Sublime Text中，按下Ctrl+Shift+P调出命令面板;
							2：输入install 调出 Install Package 选项并回车;
							3：输入pretty，并在列表中选择HTML-CSS-JS Prettify后回车即可安装（格式化 javascript、css、html）
						</p>
						<div className = "information">
							<span className = "time">2017-07-31</span>
							<span className = "author">晨曦沐枫</span>
						</div>
					</li>
					<li className = "item" >
						<Link to="/detail/3" className = "title">node升级到8.0.0在vscode启动js执行文件报错</Link>
						<p className = "content">
							快捷键：
							1：在Sublime Text中，按下Ctrl+Shift+P调出命令面板;
							2：输入install 调出 Install Package 选项并回车;
							3：输入pretty，并在列表中选择HTML-CSS-JS Prettify后回车即可安装（格式化 javascript、css、html）
						</p>
						<div className = "information">
							<span className = "time">2017-07-31</span>
							<span className = "author">晨曦沐枫</span>
						</div>
					</li>
					<li className = "item" >
						<Link to="/detail/4" className = "title">node 版本升级切换 和 npm 版本升级 mac和windows环境</Link>
						<p className = "content">
							快捷键：
							1：在Sublime Text中，按下Ctrl+Shift+P调出命令面板;
							2：输入install 调出 Install Package 选项并回车;
							3：输入pretty，并在列表中选择HTML-CSS-JS Prettify后回车即可安装（格式化 javascript、css、html）
						</p>
						<div className = "information">
							<span className = "time">2017-07-31</span>
							<span className = "author">晨曦沐枫</span>
						</div>
					</li>
					<li className = "item" >
						<Link to="/detail/5" className = "title">还在通过伪类来写1px边框吗，那也许换个方案</Link>
						<p className = "content">
							快捷键：
							1：在Sublime Text中，按下Ctrl+Shift+P调出命令面板;
							2：输入install 调出 Install Package 选项并回车;
							3：输入pretty，并在列表中选择HTML-CSS-JS Prettify后回车即可安装（格式化 javascript、css、html）
						</p>
						<div className = "information">
							<span className = "time">2017-07-31</span>
							<span className = "author">晨曦沐枫</span>
						</div>
					</li>
					<li className = "item" >
						<Link to="/detail/6" className = "title">webkit-tap-highlight-color 解决点击可点击元素的灰色背景，如按钮</Link>
						<p className = "content">
							快捷键：
							1：在Sublime Text中，按下Ctrl+Shift+P调出命令面板;
							2：输入install 调出 Install Package 选项并回车;
							3：输入pretty，并在列表中选择HTML-CSS-JS Prettify后回车即可安装（格式化 javascript、css、html）
						</p>
						<div className = "information">
							<span className = "time">2017-07-31</span>
							<span className = "author">晨曦沐枫</span>
						</div>
					</li>
				</ul>
			</div>
	    )
	}
} 

export default connect(
	state=> {
		return {fetchData:state.fetchData}
	}
	,action)(Home);


