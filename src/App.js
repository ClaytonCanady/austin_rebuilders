import React, { Component } from 'react';
import './App.css';
import { Route, Link } from 'react-router-dom';
import Home from './Home';
import AboutUs from './AboutUs';
import Contact from './Contact';
class App extends Component {
	render() {
		return (
			<div>
				<div className='App'>
					<div className='sidebar'>
						<h2>Austin Rebuilders</h2>
						<nav>
							<Link to='/'>
								<p>Home</p>
							</Link>
							<Link to='/about-us'>
								<p>About Us</p>
							</Link>
							<Link to='/contact'>
								<p>Contact</p>
							</Link>
						</nav>
					</div>

					<main>
						<Route path='/' exact component={Home} />
						<Route path='/about-us' component={AboutUs} />
						<Route path='/contact' component={Contact} />
					</main>
				</div>
			</div>
		);
	}
}

export default App;
