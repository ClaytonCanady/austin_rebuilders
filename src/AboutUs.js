import React, { Component } from 'react';

class AboutUs extends Component {
	render() {
		return (
			<div>
				<br/>
				<div className='text'>
					<h2>Your One Stop Shop For All Hose and A/C Needs.</h2>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Leo a
						diam sollicitudin tempor id eu. In pellentesque massa placerat duis.
						Quam vulputate dignissim suspendisse in est ante in. Nulla aliquet
						enim tortor at auctor urna nunc id cursus. Orci nulla pellentesque
						dignissim enim sit. Eu feugiat pretium nibh ipsum consequat. Semper
						quis lectus nulla at volutpat diam ut venenatis. Elementum nibh
						tellus molestie nunc non blandit massa enim nec. Egestas congue
						quisque egestas diam in arcu cursus euismod. At urna condimentum
						mattis pellentesque id nibh tortor id. Odio facilisis mauris sit
						amet. Quisque egestas diam in arcu cursus euismod quis viverra. Nec
						ullamcorper sit amet risus nullam eget. Eget lorem dolor sed viverra
						ipsum nunc aliquet bibendum. Duis at tellus at urna. Mauris cursus
						mattis molestie a iaculis. Scelerisque eleifend donec pretium
						vulputate sapien nec.
					</p>
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
