import React, { Component } from 'react';

class Contact extends Component {
	render() {
		return (
			<div className='text'>
				<br/>
				<h2>Hours</h2>
				<p className='bold'>MONDAY - FRIDAY</p>
				<p>8:00 AM - 5:00 PM</p>
				<p className='bold'>SATURDAY (Summer Only* Memorial Day - Labor Day)</p>
				<p>8:30 AM - 12:00 PM</p>
				<p className='bold'>SUNDAY CLOSED</p>
				<br />
				<h2>Compressor Warranties</h2>
				<br />
				<h5>
					{' '}
					<i>
						Failure to provide work order or follow these steps when installing
						your compressor will void warranty.
					</i>
				</h5>
				<ul>
					<li>
						1: Check compressor Prior to installation for air gap in clutch.
					</li>
					<li>
						2: Check compressor for proper oil amount per OEM or manufacturer's
						recommendations.
					</li>
					<li>
						3: Must flush A/C system with proper flush and method. This includes
						new or rebuilt hoses, condensers, and/or evaporators. Never flush a
						drier, accumulator, or compressor.
					</li>
					<li>
						4: Must replace old drier/accumulator with new drier/accumulator.
					</li>
					<li>
						5: Must replace old expansion device with new expansion device.
					</li>
					<li>
						6: Check for proper airflow through cooling fins of condenser and
						radiator. Replace if needed.
					</li>
					<li>
						7: Evacuate system to deep vacuum, 29.95 in-HG, inches of vacuum
					</li>
					<li>8: Check for correct freon charge.</li>
				</ul>

				<footer className='bold'>
					Austin Rebuilders, Inc. <br />
					505 West Oltorf Street * Austin, TX 78704 <br /> 512-448-0884 *
					512-448-0218 <br />
					866-771-2367 Fax <br />
					info@austinrebuildersinc.com
				</footer>
			</div>
		);
	}
}

export default Contact;
