import indexcss from './header.less';
import ReactDOM from 'react-dom';
import React,{Component} from 'react';
import {connect} from 'react-redux';

export default class Home extends Component{
	constructor(props){
		super(props);
		this.state = {openStatus:'menu show'};
	}

	showhome(){
		this.setState({openStatus:'menu'});
	}

	render(){
		return (
			<div onClick = {this.showhome.bind(this)} className={this.state.openStatus}>
				<header className = "header">
					<div className = "backicon" >主页</div>
					<div className = "tile" >博客</div>
					<div className = "blogicon"></div>
				</header>
				<div className = "classify">
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
									<a href="#top" id="top-link" className = "name" >
										<span className="icon fa-home">主页</span>
									</a>
								</li>
								<li className = "item">
									<div className = "iconbase bloggray" ></div>
									<a href="#portfolio" id="portfolio-link" className = "name" >
										<span className="icon fa-th">博客</span>
									</a>
								</li>
								<li className = "item">
									<div className = "iconbase usergray" ></div>
									<a href="#about" id="about-link" className = "name" >
										<span className="icon fa-user">关于</span>
									</a>
								</li>
								<li className = "item">
									<div className = "iconbase emailgray" ></div>
									<a href="#contact" id="contact-link" className = "name active" >
										<span className="icon fa-envelope">联系</span>
									</a>
								</li>
							</ul>
						</nav>
				</div>
			</div>
	    )
	}
} 

































