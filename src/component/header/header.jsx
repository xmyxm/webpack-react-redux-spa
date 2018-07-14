import React,{Component} from 'react';
import {withRouter, Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {fetchPosts} from './header_action.js';
import './header.less';

@withRouter
@connect(state => {
	return {
		headerData:state.Header.headerData
	}
},{fetchPosts})
export default class Header extends Component{
	constructor(props){
		super(props);
		this.state = {showmenu:false};
	}

	componentDidMount(){
		//debugger
		this.props.fetchPosts('http://qqweb.top/API/BlogApi/AdminUser');
	}

	showhome(){
		this.setState({showmenu:!this.state.showmenu});
	}

	gotoSearch(){
		if(this.state.showmenu){
			this.showhome();
		}
		if(this.props.history.location.pathname != '/search'){
			setTimeout(() => {
				this.props.history.push('/search')
			},100);
		}
	}

	render(){
		const {headerData} = this.props
		if(!headerData){
			return null
		}
		return (
			<div className = "header" >
				<header className = "topbtn" >
					<div className = "menuicon" onClick = {this.showhome.bind(this)} ></div>
					<div className = "blogicon" onClick = {this.showhome.bind(this)}  ></div>
					<div className = "searchicon" onClick = {this.gotoSearch.bind(this)}  ></div>
				</header>
				<div onClick = {this.showhome.bind(this)} className = {this.state.showmenu ? 'classify show' : 'classify'}>
					<div className = "userinfo">
						<div className = "usericon">
							<img className = "imgfile" src = {'http://qqweb.top' + headerData.AvatarUrl} />
						</div>
						<div className = "usercontent">
							<p className = "name">{headerData.NickName ? headerData.NickName : '晨曦沐枫'}</p>
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
			</div>)
	}
}
