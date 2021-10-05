import React, { Component } from 'react';
import denso from './images/Denso.png';
import atco from './images/atco.png';
import contenental from './images/contenental.png';
import sanden from './images/Sanden.png';
import spal from './images/spal.png';
import valeo from './images/valeo.png';
class Home extends Component {
	render() {
		return (
			<div>
				<div className='logos'>
					<img src={denso} alt='denso' />
					<img src={atco} alt='atco' />
					<img src={contenental} alt='continental' />
					<img src={sanden} alt='sanden' />
					<img src={spal} alt='spal' />
					<img src={valeo} alt='valeo' />
				</div>

				<br></br>
				<h2>Let Us Be Your Hose Hero!</h2>
				<br></br>
				<p>
					Don't let the name fool you - LARGE selection of NEW A/C components
					available in house; compressors, clutch assemblies, accumulators,
					driers, expansion valves, orifice tubes, liquid lines, evaporators,
					cendensers, oil, seals, freon, and any tool you should need to get the
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
