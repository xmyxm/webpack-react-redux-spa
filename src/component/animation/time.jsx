import React from 'react';
import './time.less';

export default function Time(){
	return (
		<div className= "flipClock">
			<div className= "flipUnitContainer">
				<div className= "upperCard">
					<span>16</span>
				</div>
				<div className= "lowerCard">
					<span>15</span>
				</div>
				<div className= "flipCard first fold">
					<span>15</span>
				</div>
				<div className= "flipCard second unfold">
					<span>16</span>
				</div>
			</div>
			<div className= "flipUnitContainer">
				<div className= "upperCard">
					<span>00</span>
				</div>
				<div className= "lowerCard">
					<span>59</span>
				</div>
				<div className= "flipCard first unfold">
					<span>00</span>
				</div>
				<div className= "flipCard second fold">
					<span>59</span>
				</div>
			</div>
			<div className= "flipUnitContainer">
				<div className= "upperCard">
					<span>29</span>
				</div>
				<div className= "lowerCard">
					<span>28</span>
				</div>
				<div className= "flipCard first fold">
					<span>28</span>
				</div>
				<div className= "flipCard second unfold">
					<span>29</span>
				</div>
			</div>
		</div>)
}