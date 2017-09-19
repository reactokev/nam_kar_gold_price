import React from 'react';
import logo1 from './logo1.png';
import './styles.css';

export class Header extends React.Component {
	render() {
		return (
			<div id="header" >
			   <img id="logo" src={logo1} alt="logo1" />
          	   <h1 id="h1">Nammma Karavali Gold Rate</h1>
        	</div>
			);
	}
}