import React,{Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {fetchPosts} from './detail_action.js';
import DateTool from 'utilspath/date-format.js';
import Cube from '../animation/cube.jsx';
import './detail.less';

@withRouter
@connect(state => {
	return {
		detailData:state.Detail.detailData,
		isFetching: state.Detail.isFetching
	}
},{fetchPosts})
export default class Detail extends Component{
	constructor(props){
		super(props);
	}

	//在第一次渲染后调用，只在客户端
	componentDidMount(){
		let params = this.props.match.params;
		this.props.fetchPosts('http://qqweb.top/API/BlogApi/Detail',{id:params.id});
	}

	createMarkup(html) {
		//方便测试，图片路径补全
		html = html.replace(/\/UploadFile\/contentImg\//g,'http://qqweb.top/UploadFile/contentImg/');
		return {__html: html};
	}

	render(){
		const {detailData,isFetching} = this.props

		return (
			<div className = "detailbox">
				{
					detailData &&
					<div className = "contentarea" >
						<div className = "title">
							<div className = "text">{detailData.DetailContent.Title}</div>
							<div className = "option">写于 {DateTool.changeDateFormat(detailData.DetailContent.CreateTime)} | 分类于 {detailData.DetailContent.SortName}</div>
						</div>
						<div className = "content" dangerouslySetInnerHTML={this.createMarkup(detailData.DetailContent.Content)}></div>
						<div className = "tag">
							<span className = "mr6">我的标签: </span>
							{
								detailData.DetailContent.Tag.replace(/^;+|;+$/g,'').split(';').map((item,index) => {
									return <span key = {index} className = "text">{item}</span>
								})
							}
						</div>
						<div className = "uptime">
							修改于 {DateTool.format(detailData.DetailContent.UpdateTime,'yyyy年MM月dd日 hh:mm:ss')}
						</div>
					</div>
				}
				{
					isFetching && <Cube />
				}
			</div>)
	}
}