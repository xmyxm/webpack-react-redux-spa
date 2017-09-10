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

	showhome(e){
		if(e.target.className == "searchicon" && !this.state.showmenu)return;
		this.setState({showmenu:!this.state.showmenu});
	}

	render(){
		return (
			<div className = "header" onClick = {this.showhome.bind(this)}>
				<header className = "topbtn">
					<div className = "menuicon" ></div>
					<div className = "blogicon" ></div>
					<Link to="/search" className = "searchicon" ></Link>
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
									<Link to="/home" className = "name" >主页</Link>
								</li>
								<li className = "item">
									<div className = "iconbase bloggray" ></div>
									<Link to="/list" className = "name" >博客</Link>
								</li>
								<li className = "item">
									<div className = "iconbase usergray" ></div>
									<Link to="/me" className = "name" >关于</Link>
								</li>
								<li className = "item">
									<div className = "iconbase emailgray" ></div>
									<Link to="/email" className = "name" >联系</Link>
								</li>
							</ul>
						</nav>
				</div>
			</div>
	    )
	}
} 

































