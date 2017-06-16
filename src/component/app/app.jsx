import appcss from './app.css';
import ReactDOM from 'react-dom';
import React,{Component} from 'react';

class Comment extends Component{
	constructor(props){
		super(props);
	}
	render(){
		const {children} = this.props;
		return (
			<div className="commentbox" >
				<header>我是叶头</header>
				{children}
			</div>
	    )
	}
} 
































