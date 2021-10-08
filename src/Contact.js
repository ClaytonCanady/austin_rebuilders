import React, { Component } from 'react';

class Contact extends Component {
	render() {
		return (
			<div>
				<h2>Hours</h2>
				<p className='bold'>MONDAY - FRIDAY</p>
				<p>8:00 AM - 5:00 PM</p>
				<p className='bold'>SATURDAY (Summer Only* Memorial Day - Labor Day)</p>
				<p>8:30 AM - 12:00 PM</p>
				<p className='bold'>SUNDAY CLOSED</p>
				<footer>
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
