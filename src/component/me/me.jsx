import indexcss from './me.less';
import ReactDOM from 'react-dom';
import React,{Component} from 'react';

export default class Me extends Component{
	constructor(props){
		super(props);
	}
	render(){
		return (
			 <div className = "mebox" >
				<div className = "name">晨曦沐枫</div>
				<div className = "content">
魔都漂泊码农一枚，平常热衷于分享探讨一些新技术，喜欢挑战又不忘初心，所以写了这么一个站点和大家分享交流，主要分享还是前端技术为主，也有记录工作经验和生活感悟。
由于个人水平有限，所以博客中的文章难免有错误或者不正确的地方，欢迎在文章下方留言，楼主看到会及时改正。
博客是我利用空闲时间维护的一个小项目，如有异常或者报错（一般异常都hold住了，手动微笑），欢迎留言或者邮件，楼主尽早修正。
				</div>
			 </div>
	    )
	}
} 
































