import React, { Component } from 'react';
import denso from './images/Denso.png';
import atco from './images/atco.png';
import contenental from './images/contenental.png';
import sanden from './images/Sanden.png';
import spal from './images/spal.png';
import valeo from './images/valeo.png';
import shop1 from './images/shop1.jpeg';
import shop2 from './images/shop2.jpeg';
import shop3 from './images/shop3.jpeg';
import gatesLogo from './images/gatesLogo.jpeg';
import { Carousel } from 'react-bootstrap';
class Home extends Component {
	render() {
		return (
			<div>
				<div className='logos'>
					<img src={denso} alt='denso' />
					<img src={contenental} alt='continental' />
					<img src={gatesLogo} alt='gates' />
					<img src={sanden} alt='sanden' />
					<img src={spal} alt='spal' />
					<img src={valeo} alt='valeo' />
					<img src={atco} alt='atco' />
				</div>

				<br></br>
				<div className='carousel'>
					<Carousel>
						<Carousel.Item>
							<img src={shop3} alt='front of shop' />
						</Carousel.Item>
						<Carousel.Item>
							<img src={shop2} alt='front of shop' />
						</Carousel.Item>
						<Carousel.Item>
							<img src={shop1} alt='front of shop' />
						</Carousel.Item>
					</Carousel>
				</div>
				<br/>

				<h2>We Specialize In Crimping All Hoses.</h2>
				<ul>
					<li>A/C Hose Repair</li>
					<li>Hydraulic Hose Repair and Fittings</li>
					<li>Brake Lines</li>
					<li>Battery Cables</li>
					<li>Air Hose</li>
					<li>Pressure Washer Hoses</li>
				</ul>
				<h2>Let Us Be Your Hose Hero!</h2>
				<br></br>
				<p>
					Don't let the name fool you - LARGE selection of NEW A/C components
					available in house; compressors, clutch assemblies, accumulators,
					driers, expansion valves, orifice tubes, liquid lines, evaporators,
					condensers, oil, seals, freon, and any tool you should need to get the
					job done! Rebuilt compressors are offered for an inexpensive repair. A
					compressor reseal can fix a leaky compressor without having to do a
					full rebuild. Hose and condenser repairs are offered for leaking
					components at a lower price than a new component.
				</p>
			</div>
		);
	}
}

export default Home;
