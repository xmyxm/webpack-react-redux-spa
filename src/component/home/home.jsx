import indexcss from './home.less';
import ReactDOM from 'react-dom';
import React,{Component} from 'react';
import {Link} from 'react-router-dom';

export default class Home extends Component{
	constructor(props){
		super(props);
	}

	render(){
		return (
			<div className = "homebox">
				<ul className = "list" >
					<li className = "item" >
						<Link to="/detail/1" className = "title">sublime相关插件及其快捷键记录</Link>
					</li>
					<li className = "item" >
						<Link to="/detail/2" className = "title">您的安全性偏好设置仅允许安装来自 App Store 和被认可的开发者的应用</Link>
					</li>
					<li className = "item" >
						<Link to="/detail/3" className = "title">node升级到8.0.0在vscode启动js执行文件报错</Link>
					</li>
					<li className = "item" >
						<Link to="/detail/4" className = "title">node 版本升级切换 和 npm 版本升级 mac和windows环境</Link>
					</li>
					<li className = "item" >
						<Link to="/detail/5" className = "title">还在通过伪类来写1px边框吗，那也许换个方案</Link>
					</li>
					<li className = "item" >
						<Link to="/detail/6" className = "title">webkit-tap-highlight-color 解决点击可点击元素的灰色背景，如按钮</Link>
					</li>
				</ul>
			</div>
	    )
	}
} 

































