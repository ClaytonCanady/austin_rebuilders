import React, { Component } from 'react';
import newACHose from './images/newACHose.jpeg';
import rebuiltHose from './images/rebuiltHose.jpeg';
import damagedCondenser from './images/damagedCondenser.jpeg';
import hydraulicHose from './images/hydraulicHose.jpeg';
import { Card } from 'react-bootstrap';
class Products extends Component {
	render() {
		return (
			<div>
				<br />
				<div className='text'>
					<h2>Our Services</h2>
					<p>
						We offer a variety of services and product to cover all of your hose
						related needs.
					</p>
				</div>
				<div className='cards'>
					<Card className='card'>
						<Card.Body>
							<Card.Title>
								<strong>Hydraulic Hose Repair and Replacement</strong>
							</Card.Title>
							<Card.Img variant='top' src={hydraulicHose} />
							<Card.Text>
								We now offer hydraulic hose repair using all Gates equipment and
								hoses!
							</Card.Text>
						</Card.Body>
					</Card>
					<Card className='card'>
						<Card.Body>
							<Card.Title>
								<strong>New A/C Hoses</strong>
							</Card.Title>
							<Card.Img variant='top' src={newACHose} />
							<Card.Text>
								We carry popular New GM, Ford and Import air conditioning hose
								assemblies in stock.
							</Card.Text>
						</Card.Body>
					</Card>

					<Card className='card'>
						<Card.Body>
							<Card.Title>
								<strong>Rebuilt A/C Hoses</strong>
							</Card.Title>
							<Card.Img variant='top' src={rebuiltHose} />
							<Card.Text>
								We can rebuild old hose assemblies with new fittings, new
								rubber, hydraulic crimps, valve cores and o-rings.
							</Card.Text>
						</Card.Body>
					</Card>

					<Card className='card'>
						<Card.Body>
							<Card.Title>
								<strong>Condenser Repair</strong>
							</Card.Title>
							<Card.Img variant='top' src={damagedCondenser} />
							<Card.Text>
								Have a "holy" condenser? Bring it in for a pressure test and/or
								repair. MOST holes can be repaired so the condenser will not
								leak freon. Let us take a look!
							</Card.Text>
						</Card.Body>
					</Card>
					<Card className='card'>
						<Card.Body>
							<Card.Title>
								<strong>Everything Else!</strong>
							</Card.Title>

							<Card.Text>
								<li>Freon</li>
								<li>Oil (Mineral, Ester, Pag 46-100-150, ICE-32)</li>
								<li>Flush</li>
								<li>Blower Motors</li>
								<li>Relays/Switches</li>
								<li>Fans</li>
								<li>O-Rings & Gaskets</li>
								<li>Tools and Equipment</li>
							</Card.Text>
						</Card.Body>
					</Card>
					<Card className='card'>
						<Card.Body>
							<Card.Title>
								<strong>COMPRESSORS NEW & REBUILT</strong>
							</Card.Title>

							<Card.Text>
								A/C Delco, Visteon, Motorcraft, Nippondenso, APCO, Delphi,
								Sanden, Seltec, Frigette, Omega, UAC, Global Parts Dist.,
								AUSTIN'S PREMIER COMPRESSOR REBUILDER
							</Card.Text>
						</Card.Body>
					</Card>

					<Card className='card'>
						<Card.Body>
							<Card.Title>
								<strong>CLUTCH ASSEMBLIES</strong>
							</Card.Title>

							<Card.Text>
								Warner Electric, Ogura, Motorcraft, A/C Delco, Sanden, Seltec
							</Card.Text>
						</Card.Body>
					</Card>
					<Card className='card'>
						<Card.Body>
							<Card.Title>
								<strong>CONDENSERS</strong>
							</Card.Title>

							<Card.Text>
								A/C Delco, Motorcraft, Visteon, Modine, G-Dan Industries, Valeo
							</Card.Text>
						</Card.Body>
					</Card>
				</div>
			</div>
		);
	}
}

export default Products;
