import React, { Component } from 'react';

class AboutUs extends Component {
	render() {
		return (
			<div>
				<br/>
				<div className='text'>
					<h2>Your One Stop Shop For All Hose and A/C Needs.</h2>
			
				</div>
				<div className='reviews text'>
					<h3>Customer Reviews</h3>
					<div className='review'>
						<p>
							"Perfect example of old-school family business with expertise and
							craftsmanship that can never be replicated by corporate shops. Mr.
							Fowlkes custom crafted a power steering line for my 1968 Ford
							within an hour, and it looks better than anything else under the
							hood. It's perfectly routed, no leaks and maybe last another 52
							years. Spot-on service, superb craftsmanship and super-nice
							people."
							<br />
							<strong>- Victor A.</strong>
							<br />
							6/06/2021
						</p>
					</div>
					<div className='review'>
						{' '}
						<p>
							"I have an old classic car with an old classic AC system. My
							mechanic told me not to go on line and shop these replacement
							parts around, go the SOURCE at Austin Rebuilders. They rebuild my
							old compressor too and I'm trying to keep this vehicle as original
							as possible. They managed to replace and repair my used parts,
							pressure test the hoses and even did a custom weld of an aluminum
							hose that needed to be extended. I'm back in my 77 El Camino with
							cool comfort again. Rick and his family run and own this shop and
							you feel like a friend there and not a number. You might even get
							to meet the family mascot, a friendly little Yorkie named CUJO
							(I'm just kidding about the name but it's a KILLER :) This place
							has been around for a long time and I for one appreciate their
							knowledge, experience and friendly treatment. I saved a TON of
							money and more importantly did business with someone local."
							<br />
							<strong>- Ron U.</strong>
							<br />
							9/26/2018
						</p>
					</div>
					<div className='review'>
						{' '}
						<p>
							"When the auto repair shop that I work at needs AC parts we always
							try to use these guys. They sell quality parts and stand behind
							what they sell. The one time that we had a problem with something
							they sold us, they took care of us quick, fast, and in a hurry at
							no cost. Friendly on the phones and pleasant in person. You
							couldn't ask for anything more."
							<br />
							<strong>- Jeffery C.</strong>
							<br />
							6/18/2009
						</p>
					</div>
				</div>
			</div>
		);
	}
}

export default AboutUs;
