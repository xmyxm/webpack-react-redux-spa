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
		this.dataloading = true;
	}
	
	shouldComponentUpdate(nextProps, nextState){
		if(nextProps.fetchData){
    		if(nextProps.fetchData.isFetching) {
    			this.dataloading = true;
    			return false;
    		}
    		this.dataloading = false;
    		if(nextProps.fetchData.Json){
	    		let data = nextProps.fetchData.Json;
				if(data && data.BlogID > 0){
					this.data = data;
				}
    		}
    	}
    	return true;
	}

	//在第一次渲染后调用，只在客户端
	componentDidMount(){
		//debugger
		console.log('输出分享组件暴露api : ' + typeof window.socialShare);
		this.props.fetchPosts('http://qqweb.top/API/BlogApi/Detail',{id:window.location.pathname.replace(/\/detail\//img,'')});
	}

	createMarkup(html) {
	  return {__html: html};
	}

	render(){
		
		return (
			 <div className = "detailbox">
				{
					this.data &&
					<div className = "contentarea" >
						<div className = "title">
							<div className = "text">{this.data.DetailContent.Title}</div>
							<div className = "option">写于 {this.data.DetailContent.CreateTime} | 分类于 {this.data.DetailContent.SortName}</div>
				 		</div>
					 	<div className = "content" dangerouslySetInnerHTML={this.createMarkup(this.data.DetailContent.Content)}></div>
					 	<div className = "tag">
					 		我的标签: 
						 	{
						 		this.data.DetailContent.Tag.replace(/^;+|;+$/g,"").split(";").map((item,index) => {
						 			return <span key = {index} className = "text">{item}</span>
						 		})
						 	}
					 	</div>
					</div>
				}
			 	<div className = "share-component" data-mobile-sites="weibo,qq,qzone,tencent"></div>
			 	<div className = "comment">
			 		<div className = "inputarea">
			 			<input className = "username" type="text" placeholder = "昵称" />
			 			<textarea className = "inputtext" placeholder = "内容 ~ ~ ~"></textarea>
			 		</div>
					<div className = "commentbtn" >评论</div>
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































