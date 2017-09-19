import React from 'react';

export default class Date extends React.Component {
	render() {
		 var date = new window.Date();
  		 var a = date.toString().split(" ");
		console.log(date);
		return (
			<div>
				<p id="date">{a[0]}, {date.getDate()} {a[1]} {date.getFullYear()}</p>
			</div>
			);
	}
}