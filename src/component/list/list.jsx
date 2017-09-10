import indexcss from './list.less';
import ReactDOM from 'react-dom';
import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import *as action from '../../redux/action/fetch-action.js';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class List extends Component{
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
	    		let data = nextProps.fetchData.Json.Data;
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

            if (document.body.scrollTop + window.innerHeight + 150 > document.body.scrollHeight) {
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
									<Link to={'/detail/' + item.ID} className = "title">{item.Title}</Link>
									<div className = "tag">Tag:{item.Tag}</div>
									<p className = "content">{item.Tag}</p>
									<div className = "information">
										<span className = "time">{item.UpdateTime}</span>
										<span className = "author">晨曦沐枫</span>
									</div>
								</li>
					})
				}	
				</ul>
				{
					this.imgLoading ?  <div className="loader">
											<div className = "pacman">
												<div></div>
												<div></div>
												<div></div>
												<div></div>
												<div></div>
											</div>
					 					</div>
					 				:   <div className = "bottominfo" >--- 我是有底线的 ---</div>
				}
			</div>
	    )
	}
} 



export default connect(
	state=> {
		return {fetchData:state.fetchData}
	}
	,action)(List);



























