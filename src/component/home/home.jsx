import indexcss from './home.less';
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
					<div className = "homeicon"></div>
				</header>
				<div className = "classify">
						<div className = "userinfo">
							<div className = "icon"></div>
							<div className = "info">
								<p className = "name">Jane Doe</p>
								<p className = "detail">Hyperspace Engineer</p>
							</div>
						</div>
						<nav className = "nav">
							<ul>
								<li>
									<a href="#top" id="top-link" className = "name" >
										<span className="icon fa-home">Intro</span>
									</a>
								</li>
								<li>
									<a href="#portfolio" id="portfolio-link" className = "name" >
										<span className="icon fa-th">Portfolio</span>
									</a>
								</li>
								<li>
									<a href="#about" id="about-link" className = "name" >
										<span className="icon fa-user">About Me</span>
									</a>
								</li>
								<li>
									<a href="#contact" id="contact-link" className = "name active" >
										<span className="icon fa-envelope">Contact</span>
									</a>
								</li>
							</ul>
						</nav>
				</div>

				<div className="bottom">
						<ul className="icons">
							<li>
								<a href="#" className="icon fa-twitter" >
									<span className="label">Twitter</span>
								</a>
							</li>
							<li>
								<a href="#" className="icon fa-facebook" >
									<span className="label">Facebook</span>
								</a>
							</li>
							<li>
								<a href="#" className="icon fa-github" >
									<span className="label">Github</span>
								</a>
							</li>
							<li>
								<a href="#" className="icon fa-dribbble" >
									<span className="label">Dribbble</span>
								</a>
							</li>
							<li>
								<a href="#" className="icon fa-envelope" >
									<span className="label">Email</span>
								</a>
							</li>
						</ul>
				</div>
			</div>
	    )
	}
} 

































