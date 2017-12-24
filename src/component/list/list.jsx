import ReactDOM from 'react-dom';
import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import {fetchPosts} from './list_action.js';
import {connect} from 'react-redux';
import DateTool from 'utils/date-format.js';
import Eat from '../animation/eat.jsx';
import './list.less';

@connect(state => {return {
	listData: state.List.listData,
	isFetching: state.List.isFetching,
	dataMore: state.List.dataMore
}},{fetchPosts})
export default class List extends Component{
	constructor(props){
		super(props)
	}

	shouldComponentUpdate(nextProps, nextState){
    	return true
	}

	componentWillUnmount() {
		window.onscroll = null;
	}

    componentDidMount(){
    	let _url = 'http://qqweb.top/API/BlogApi/WorkList'
    	let _self = this
		window.onscroll = (e) => { 
            if (!_self.props.dataMore || _self.props.isFetching) return
            	let alltop = (document.body.scrollTop || document.documentElement.scrollTop) + window.innerHeight + 150
            console.log(alltop + ' : ' + document.body.scrollHeight)
            if (alltop > document.body.scrollHeight) {
                _self.props.fetchPosts(_url,{PageSize:10})
            }
        }
        _self.props.fetchPosts(_url,{PageIndex: 1,PageSize:10})
    }

	render(){
		const {listData, isFetching, dataMore} = this.props

		return (
			<div className = "listbox">
				<ul className = "list" >
				{
					(listData && listData.BlogWorkList && listData.BlogWorkList.length > 0) && 
						listData.BlogWorkList.map(item => {
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
	    )
	}
} 






























