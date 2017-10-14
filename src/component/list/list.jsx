import ReactDOM from 'react-dom';
import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import *as action from 'action/fetch-action.js';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import DateTool from 'utils/date-format.js';
import Eat from '../animation/eat.jsx';
import './list.less';

@connect(state => {return {fetchData:state.fetchData}},action)
export default class List extends Component{
	constructor(props){
		super(props);
		this.page = 1;
		this.imgLoading = true;
		this.dataloading = false;
		this.totalCount = 0;
		this.bloglist = [];
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
				if(data && data.TotalCount){
					this.totalCount = data.TotalCount;
					if(data.PageIndex * data.PageSize >= data.TotalCount){
						this.imgLoading = false;
					}else{
						++this.page;
						this.imgLoading = true;
					}
					if(data.BlogWorkList && data.BlogWorkList.length){
						this.bloglist = this.bloglist.concat(data.BlogWorkList);
						return true;
					}
				}
    		}
    	}
    	return false;
	}

	componentWillUnmount() {
		window.onscroll = null;
	}

    componentDidMount(){
    	let _self = this;
		window.onscroll = (e) => { 
            if (!_self.imgLoading || _self.dataloading) return;
            	let alltop = (document.body.scrollTop || document.documentElement.scrollTop) + window.innerHeight + 150;
            if (alltop > document.body.scrollHeight) {
                _self.pullBlogData();
            }
        }
        _self.pullBlogData();
    }

	pullBlogData(){
		this.props.fetchPosts('http://qqweb.top/API/BlogApi/WorkList',{PageIndex:this.page,PageSize:10});
	}

	render(){
		return (
			<div className = "listbox">
				<ul className = "list" >
				{
					(this.bloglist.length > 0) && this.bloglist.map(item => {
						return 	<li key = {item.ID} className = "item" >
									<Link to={'/detail/' + item.ID} className = "clickarea">
										<div className = "contenthead">
											<div className = "title">{item.Title}</div>
											<div className = "tag">分类:{item.SortName}</div>
										</div>
										<p className = "content">{item.Content}</p>
										<div className = "information">
											<span className = "time">浏览:{item.PageViewTotal}</span>
											<span className = "author">{DateTool.ChangeDateFormat(item.UpdateTime)}</span>
										</div>
									</Link>
								</li>
					})
				}	
				</ul>
				{
					this.imgLoading ?  <Eat/> : <div className = "bottominfo" >--- 我是有底线的 ---</div>
				}
			</div>
	    )
	}
} 






























