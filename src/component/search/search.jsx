import indexcss from './search.less';
import ReactDOM from 'react-dom';
import React,{Component} from 'react';
import {Link} from 'react-router-dom';

export default class Home extends Component{
	constructor(props){
		super(props);
	}

	render(){
		return (
			<div className = "searchbox">
				<div className = "head" >
					<div className = "searchtext" >搜索更懂你！</div>
					<div className="searchinfo">
						<input type = "text" name="keyname" className="keytext" value="" />
						<i className = "so" ></i>
						<i className = "del" ></i>
						<div className = "searchbtn" >搜索</div>
					</div>
				</div>
			</div>
	    )
	}
} 


