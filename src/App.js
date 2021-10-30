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
						<div className='title'>
							<h3>AUSTIN REBUILDERS A/C PARTS & HOSES, INC.</h3>
							<h5>AUTOMOTIVE - HEAVY DUTY - FARM</h5>
						</div>

						<nav>
							<Link to='/'>
								<button>Home</button>
							</Link>

							<Link to='/about-us'>
								<button>About</button>
							</Link>

							<Link to='/products-services'>
								<button>Products</button>
							</Link>

							<Link to='/contact'>
								<button>Contact</button>
							</Link>
						</nav>
					</div>

					<main className='main'>
						<Route path='/' exact component={Home} />
						<Route path='/about-us' component={AboutUs} />
						<Route path='/contact' component={Contact} />
						<Route path='/products-services' component={Products} />
					</main>
					<footer>
						<strong>
							Austin Rebuilders A/C Parts & Hoses <br />
							Automotive - Heavy Duty - Farm
							<br />
							505 West Oltorf Street * Austin, TX 78704 <br /> 512-448-0884{' '}
							<br />
							Fax 866-771-2367
							<br />
							j@aracparts.com
						</strong>
					</footer>
				</div>
			</div>
		);
	}
}

export default App;
