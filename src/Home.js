import React, { Component } from 'react';

import shop3 from './images/shop3.jpeg';
import gatesHose from './images/gatesHose.png';
import rebuiltHose from './images/rebuiltHose.jpeg';
import hosesMachine from './images/hosesMachine.jpg';
import gatesTs from './images/gatesTs.jpg';
import sawRack from './images/sawRack.jpg';
import { Card, Carousel } from 'react-bootstrap';
class Home extends Component {
	render() {
		return (
			<div>
				<div className='carousel'>
					<Carousel>
					<Carousel.Item>
							<img src={shop3} alt='front of shop' />
						</Carousel.Item>
						<Carousel.Item>
							<img src={hosesMachine} alt="tubes and hose machine" />
						</Carousel.Item>
						<Carousel.Item>
							<img src={gatesTs} alt="Gate's hydralic crimper" />
						</Carousel.Item>
						<Carousel.Item>
							<img src={sawRack} alt='front of shop' />
						</Carousel.Item>
					</Carousel>
				</div>
				<br />
				<div className='text'>
					<h2>Let Us Be Your Hose Hero!</h2>

					<p>
						Don't let the name fool you - LARGE selection of NEW A/C components
						available in house; compressors, clutch assemblies, accumulators,
						driers, expansion valves, orifice tubes, liquid lines, evaporators,
						condensers, oil, seals, freon, and any tool you should need to get
						the job done! Rebuilt compressors are offered for an inexpensive
						repair. A compressor reseal can fix a leaky compressor without
						having to do a full rebuild. Hose and condenser repairs are offered
						for leaking components at a lower price than a new component.
					</p>
					<h5>Local Delivery As Well As Drop Shipping Options Are Available.</h5>
				</div>
				<br />

				<br />
				<div className='cards'>
					<Card className='homeCard' bg='light'>
						<Card.Body>
							<Card.Title>
								<strong>What's New</strong>
							</Card.Title>
							<Card.Img variant='top' src={gatesHose} />
							<Card.Text>
								We are excited to now offer repair of hydraulic hoses. We
								recommend inspecting your hoses at least every week and
								replacing them as preventative maintenance every 2 years.
								Hydraulic hose leaks can be dangerous as well as costing you
								valuable time operating your equipment.
							</Card.Text>
						</Card.Body>
					</Card>

					<Card className='homeCard' bg="light">
						<Card.Body>
							<Card.Title>
								<strong>We Specialize In Crimping All Hoses.</strong>
							</Card.Title>
							<Card.Img variant='top' src={rebuiltHose} />
							<p></p>
							<Card.Text>
								<li>A/C Hose Repair</li>
								<li>Hydraulic Hose Repair and Fittings</li>
								<li>Brake Lines</li>
								<li>Battery Cables</li>
								<li>Air Hose</li>
								<li>Pressure Washer Hoses</li>
							</Card.Text>
						</Card.Body>
					</Card>
			
			
					
				</div>
			</div>
		);
	}
}

export default Home;
