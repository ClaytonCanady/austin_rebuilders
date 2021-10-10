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
							<Card.Title>Hydraulic Hose Repair and Replacement</Card.Title>
							<Card.Img variant='top' src={hydraulicHose} />
							<Card.Text>
								<br />
								We now offer hydraulic hose repair using all Gates equipment and
								hoses!
							</Card.Text>
						</Card.Body>
					</Card>
					<Card className='card'>
						<Card.Body>
							<Card.Title>New A/C Hoses</Card.Title>
							<Card.Img variant='top' src={newACHose} />
							<Card.Text>
								<br />
								We carry popular New GM, Ford and Import air conditioning hose
								assemblies in stock.
							</Card.Text>
						</Card.Body>
					</Card>

					<Card className='card'>
						<Card.Body>
							<Card.Title>Rebuilt A/C Hoses</Card.Title>
							<Card.Img variant='top' src={rebuiltHose} />
							<Card.Text>
								<br />
								We can rebuild old hose assemblies with new fittings, new
								rubber, hydraulic crimps, valve cores and o-rings.
							</Card.Text>
						</Card.Body>
					</Card>

					<Card className='card'>
						<Card.Body>
							<Card.Title>Condenser Repair</Card.Title>
							<Card.Img variant='top' src={damagedCondenser} />

							<Card.Text>
								<br />
								Have a "holy" condenser? Bring it in for a pressure test and/or
								repair. MOST holes can be repaired so the condenser will not
								leak freon. Let us take a look!
							</Card.Text>
						</Card.Body>
					</Card>

					<Card className='card'>
						<Card.Body>
							<Card.Title>COMPRESSORS NEW & REBUILT</Card.Title>

							<Card.Text>
								<li>A/C Delco</li>
								<li>Visteon</li>
								<li>Motorcraft</li>
								<li>Nippondenso</li>
								<li>APCO</li>
								<li>Delphi</li>
								<li>Sanden</li>
								<li>Seltec</li>
								<li>Frigette</li>
								<li>Omega</li>
								<li>UAC</li>
								<li>Global Parts Dist.</li>
							</Card.Text>
						</Card.Body>
					</Card>

					<Card className='card'>
						<Card.Body>
							<Card.Title>CLUTCH ASSEMBLIES</Card.Title>

							<Card.Text>
								<li>Warner Electric</li>
								<li>Ogura</li>
								<li>Motorcraft</li>
								<li>A/C Delco</li>
								<li>Sanden</li>
								<li>Seltec</li>
							</Card.Text>
						</Card.Body>
					</Card>
					<Card className='card'>
						<Card.Body>
							<Card.Title>CONDENSERS</Card.Title>

							<Card.Text>
								<li>A/C Delco</li>
								<li>Motorcraft</li>
								<li>Visteon</li>
								<li>Modine</li>
								<li>G-Dan Industries</li>
								<li>Valeo</li>
							</Card.Text>
						</Card.Body>
					</Card>
					<Card className='card'>
						<Card.Body>
							<Card.Title>Everything Else!</Card.Title>

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
				</div>
			</div>
		);
	}
}

export default Products;
