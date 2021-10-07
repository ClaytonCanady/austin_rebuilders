import React, { Component } from 'react';
import newACHose from './images/newACHose.jpeg';
import rebuiltHose from './images/rebuiltHose.jpeg';
import damagedCondenser from './images/damagedCondenser.jpeg';
class Products extends Component {
	render() {
		return (
			<div>
				<h2>Products and Services</h2>
				<br />
				<div className='products'>
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
				</div>
			</div>
		);
	}
}

export default Products;
