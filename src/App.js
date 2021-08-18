import React, { Component } from 'react';
import './App.css';
import { Route, Link } from 'react-router-dom';
import Home from './Home';
import AboutUs from './AboutUs';
import Contact from './Contact';
import Products from './Products';
class App extends Component {
	render() {
		return (
			<div>
				<div className='App'>
					<div className='sidebar'>
						<h1 className={'title'}>Austin Rebuilders</h1>

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

					<main>
						<Route path='/' exact component={Home} />
						<Route path='/about-us' component={AboutUs} />
						<Route path='/contact' component={Contact} />
						<Route path='/products-services' component={Products} />
					</main>
					<footer className={'fixed-bottom'}>
						<p>
							Austin Rebuilders, Inc. <br />
							505 West Oltorf Street * Austin, TX 78704 <br /> 512-448-0884 *
							512-448-0218 <br />
							512-441-2780 Fax <br />
							info@austinrebuildersinc.com
						</p>
					</footer>
				</div>
			</div>
		);
	}
}

export default App;
