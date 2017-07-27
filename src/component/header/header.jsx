import indexcss from './header.less';
import ReactDOM from 'react-dom';
import React,{Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

export default class Home extends Component{
	constructor(props){
		super(props);
		this.state = {showmenu:false};
	}

	showhome(){

		this.setState({showmenu:!this.state.showmenu});
	}

	render(){
		return (
			<div onClick = {this.showhome.bind(this)} className = "header">
				<header className = "topbtn">
					<div className = "backicon" >主页</div>
					<div className = "tile" >test</div>
					<div className = "blogicon"></div>
				</header>
				<div className = {this.state.showmenu ? "classify show" : "classify"}>
						<div className = "userinfo">
							<div className = "usericon"></div>
							<div className = "usercontent">
								<p className = "name">晨曦沐枫</p>
								<p className = "detail">前端工程师</p>
							</div>
						</div>
						<nav className = "nav">
							<ul>
								<li className = "item">
									<div className = "iconbase homegray" ></div>
									<Link to="/list" className = "name" >主页</Link>
								</li>
								<li className = "item">
									<div className = "iconbase bloggray" ></div>
									<Link to="/list" className = "name" >博客</Link>
								</li>
								<li className = "item">
									<div className = "iconbase usergray" ></div>
									<Link to="/list" className = "name" >关于</Link>
								</li>
								<li className = "item">
									<div className = "iconbase emailgray" ></div>
									<Link to="/list" className = "name" >联系</Link>
								</li>
							</ul>
						</nav>
				</div>
			</div>
	    )
	}
} 

































