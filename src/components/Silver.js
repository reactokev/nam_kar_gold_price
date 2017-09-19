import React from 'react';

export class Silver extends React.Component {
	render() {
		return (
			<div>
			 <p><span className="h3">Silver price in Rs/Kilogram</span><span  className="display-4"><b>{} &#8377;{this.props.data[1]}</b></span></p>
			</div>
			);
	}
}