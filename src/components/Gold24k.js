import React from 'react';

export class Gold24k extends React.Component {
	render() {
		return (
			<div>
				<p><span className="h3">24 Karat Gold price in Rs/10gm </span><span className="display-4"><b>{}  &#8377;{this.props.data[1]}</b></span></p>
			</div>
			);
	}
}