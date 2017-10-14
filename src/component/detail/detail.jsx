import ReactDOM from 'react-dom';
import React,{Component} from 'react';
import share from 'social-share.js/src/js/social-share.js';
import shareStyle from 'social-share.js/src/css/share.scss';
import *as action from 'action/fetch-action.js';
import {connect} from 'react-redux';
import DateTool from 'utils/date-format.js';
import Cube from '../animation/cube.jsx';
import './detail.less';

@connect(state => {return {fetchData:state.fetchData}},action)
export default class Detail extends Component{
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
		//console.log('输出分享组件暴露api : ' + typeof window.socialShare);
		let id = (window.location.hash || window.location.pathname).replace(/\D/g,'');
		this.props.fetchPosts('http://qqweb.top/API/BlogApi/Detail',{id:id});
	}

	createMarkup(html) {
		//方便测试，图片路径补全
		html = html.replace(/\/UploadFile\/contentImg\//g,'http://qqweb.top/UploadFile/contentImg/');
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
							<div className = "option">写于 {DateTool.ChangeDateFormat(this.data.DetailContent.CreateTime)} | 分类于 {this.data.DetailContent.SortName}</div>
				 		</div>
					 	<div className = "content" dangerouslySetInnerHTML={this.createMarkup(this.data.DetailContent.Content)}></div>
					 	<div className = "tag">
					 		<span className = "mr6">我的标签: </span>
						 	{
						 		this.data.DetailContent.Tag.replace(/^;+|;+$/g,"").split(";").map((item,index) => {
						 			return <span key = {index} className = "text">{item}</span>
						 		})
						 	}
					 	</div>
					 	<div className = "uptime">
					 		修改于 {DateTool.Format(this.data.DetailContent.UpdateTime,"yyyy年MM月dd日 hh:mm:ss")}
					 	</div>
					</div>
				}
				{
					!this.data && <Cube />
				}
			 </div>
	    )
	}
} 









/*			 	<div className = "share-component" data-mobile-sites="weibo,qq,qzone,tencent"></div>
			 	<div className = "comment">
			 		<div className = "inputarea">
			 			<input className = "username" type="text" placeholder = "昵称" />
			 			<textarea className = "inputtext" placeholder = "内容 ~ ~ ~"></textarea>
			 		</div>
					<div className = "commentbtn" >评论</div>
			 	</div>*/
























