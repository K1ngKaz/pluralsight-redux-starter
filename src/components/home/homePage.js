"use strict";

import React from 'react';
import { Router, Link } from 'react-router';

class Home extends React.Component{
	render () {
		return (
			<div className="jumbotron">
				<h1>Pluralsight Administration</h1>
				<p>React, React Router, and Flux for ultra-responsive web apps.</p>
				<Link to="about" className="btn btn-primary btn-lrg">Learn More</Link>
			</div>
		);
	}
}

export default Home;
