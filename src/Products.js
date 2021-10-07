import React, { Component } from 'react';
import newACHose from './images/newACHose.jpeg';
import rebuiltHose from './images/rebuiltHose.jpeg';
import damagedCondenser from './images/damagedCondenser.jpeg';
import hydraulicHose from './images/hydraulicHose.jpeg';
class Products extends Component {
	render() {
		return (
			<div>
				<h2>Products and Services</h2>
				<br />
				<div className='products'>
					<div className='product'>
						<h3>Hydraulic Hose Repair and Replacement</h3>
						<img src={hydraulicHose} alt='rebuilt ac hose' />
						<p>
							We now offer hydraulic hose repair using all Gates equipment and
							hoses!
						</p>
					</div>
					<div className='product'>
						<h3>New A/C Hoses</h3>
						<img src={newACHose} alt='new ac hose' />
						<p>
							We carry popular New GM, Ford and Import air conditioning hose
							assemblies in stock.
						</p>
					</div>
					<div className='product'>
						<h3>Rebuilt A/C Hoses</h3>
						<img src={rebuiltHose} alt='rebuilt ac hose' />
						<p>
							With such a wide variety of vehicle applications, in most cases
							new hoses are not available. We can rebuild old hose assemblies
							with new fittings, new rubber, hydraulic crimps, valve cores and
							o-rings.
						</p>
					</div>
					<div className='product'>
						<h3>Condenser Repair</h3>
						<img src={damagedCondenser} alt='rebuilt ac hose' />
						<p>
							Have a "holy" condenser? Bring it in for a pressure test and/or
							repair. MOST holes can be repaired so the condenser will not leak
							freon. Let us take a look!
						</p>
					</div>
					<div className='product'>
						<h3>COMPRESSORS NEW & REBUILT</h3>
						<p>
							A/C Delco, Visteon, Motorcraft, Nippondenso, APCO, Delphi, Sanden,
							Seltec, Frigette, Omega, UAC, Global Parts Dist., AUSTIN'S PREMIER
							COMPRESSOR REBUILDER
						</p>
					</div>
					<div className='product'>
						<h3>CLUTCH ASSEMBLIES - Some models sold separately</h3>
						<p>Warner Electric, Ogura, Motorcraft, A/C Delco, Sanden, Seltec</p>
					</div>
					<div className='product'>
						<h3>CONDENSERS</h3>
						<p>
							A/C Delco, Motorcraft, Visteon, Modine, G-Dan Industries, Valeo
						</p>
					</div>
					<div className='product'>
						<h3>Everything Else!</h3>
						<ul>
							<li>Freon</li>
							<li>Oil (Mineral, Ester, Pag 46-100-150, ICE-32)</li>
							<li>Flush</li>
							<li>Blower Motors</li>
							<li>Relays/Switches</li>
							<li>Fans</li>
							<li>O-Rings & Gaskets</li>
							<li>Tools and Equipment</li>
						</ul>
					</div>
				</div>
			</div>
		);
	}
}

export default Products;
