import ReactDOM from 'react-dom';
import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {fetchPosts} from './search_action.js';
import DateTool from 'utils/date-format.js';
import Eat from '../animation/eat.jsx';
import './search.less';

@connect(state => {return {
	searchData:state.Search.searchData,
	isFetching: state.Search.isFetching,
	dataMore: state.Search.dataMore
}},{fetchPosts})
export default class Search extends Component{
	constructor(props){
		super(props)
		this.dataUrl = 'http://qqweb.top/API/BlogApi/Query'
	}

	shouldComponentUpdate(nextProps, nextState){
    	return true
	}

	componentWillUnmount() {
		window.onscroll = null
	}

    componentDidMount(){
    	let _self = this;
		window.onscroll = (e) => { 
            if (!_self.props.dataMore || _self.props.isFetching) return;
            let alltop = (document.body.scrollTop || document.documentElement.scrollTop) + window.innerHeight + 150;
            if (alltop > document.body.scrollHeight) {
            	console.log(Date.now())
                _self.pullBlogData({PageIndex : ++_self.props.searchData.PageIndex,key : this.refs.keyname.value});
            }
        }
        _self.pullBlogData({PageIndex: 1, key: ''})
    }

	pullBlogData(param){
		this.props.fetchPosts(this.dataUrl, param)
	}

	Query(){
		this.searchValue = this.refs.keyname.value
		this.pullBlogData({PageIndex: 1, key: this.refs.keyname.value})
	}

	userChange(e){
		if(this.refs.keyname.value != this.searchValue)this.Query()
	}

	userKeyup(e){
		if(e.keyCode === 13)this.Query();
	}

	render(){
		const {searchData, isFetching, dataMore} = this.props

		return (
			<div className = "searchbox">
				<div className = "head" >
					<div className = "searchtext" >搜索更懂你！</div>
					<div className="searchinfo">
						<input type = "text" name="keyname" onKeyUp = {this.userKeyup.bind(this)} onChange = {this.userChange.bind(this)} className="keytext" ref = "keyname" />
						<i className = "so" ></i>
						<i className = "del" ></i>
						<div className = "searchbtn" onClick = {this.Query.bind(this)} >搜索</div>
					</div>
				</div>
				<div className = "listbox">
					<ul className = "list" >
					{
						(searchData && searchData.BlogWorkList && searchData.BlogWorkList.length > 0) && 
							searchData.BlogWorkList.map(item => {
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
						dataMore ?  <Eat/> : <div className = "bottominfo" >--- 我是有底线的 ---</div>
					}
				</div>
			</div>
	    )
	}
} 






