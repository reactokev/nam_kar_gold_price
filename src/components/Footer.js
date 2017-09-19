import React from 'react';
import Capture from './Capture.PNG';

export class Footer extends React.Component {
	render() {
		return (
			<div>
			 <p className="footer">Sponsored by</p>
               <img src={Capture} alt="gold" />
			</div>
			);
	}
}