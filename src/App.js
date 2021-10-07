import React, { Component } from 'react';
import './App.css';
import { Route, Link } from 'react-router-dom';
import Home from './Home';
import AboutUs from './AboutUs';
import Contact from './Contact';
import Products from './Products';
// import hoseHero from './images/hoseHero.png';
class App extends Component {
	render() {
		return (
			<div>
				<div className='App'>
					<div className='sidebar'>
						<h1 className={'title'}>AUSTIN REBUILDERS</h1>
						<h3>A/C PARTS & HOSES, INC.</h3>
						<h5>AUTOMOTIVE - HEAVY DUTY - FARM</h5>

						<nav>
							<Link to='/'>
								<p className={'link'}>Home</p>
							</Link>
							<Link to='/about-us'>
								<p className={'link'}>About Us</p>
							</Link>

							<Link to='/products-services'>
								<p className={'link'}>Products and Services</p>
							</Link>

							<Link to='/contact'>
								<p className={'link'}>Contact</p>
							</Link>
						</nav>
					</div>

					<main className='main'>
						<Route path='/' exact component={Home} />
						<Route path='/about-us' component={AboutUs} />
						<Route path='/contact' component={Contact} />
						<Route path='/products-services' component={Products} />
					</main>

				
				</div>
			</div>
		);
	}
}

export default App;
