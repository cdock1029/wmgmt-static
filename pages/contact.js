import React from 'react'
import Page from '../components/Page'

export default () => (
	<Page title='Contact Us to Schedule Apt. Tour'>
		<div className='contact'>
			<h3>Contact Us</h3>
			<div className='row'>
				<div>
					<address>
						<span className='name'>Columbiana Manor</span><br/>
						<span className='street'>337 W Salem Street</span><br/>
						<span className='city-state-zip'>Columbiana, OH 44408</span><br/>
					</address>
				</div>
				<a href='tel:+13304829323'>(330) 482-9323</a>
			</div>
			<div className='row'>
				<div>
					<address>
						<span className='name'>Newton Village</span><br/>
						<span className='street'>571 Ridge Road</span><br/>
						<span className='city-state-zip'>Newton Falls, OH 44444</span><br/>
					</address>
				</div>
				<a href='tel:+13308727308'>(330) 872-7308</a>
			</div>
			<div className='row'>
				<div>
					<address>
						<span className='name'>Niles Executive</span><br/>
						<span className='street'>925 Youngstown Warren Road</span><br/>
						<span className='city-state-zip'>Niles, OH 44446</span><br/>
					</address>
				</div>
				<a href='tel:+13306520609'>(330) 652-0609</a>
			</div>
			<div className='row'>
				<div>
					<address>
						<span className='name'>Westchester</span><br/>
						<span className='street'>4815 Westchester Drive</span><br/>
						<span className='city-state-zip'>Austintown, OH 44515</span><br/>
					</address>
				</div>
				<a href='tel:+13307995758'>(330) 799-5758</a>
			</div>
			<img src='https://maps.googleapis.com/maps/api/staticmap?key=AIzaSyDKoMf5e_-R8DZE1S1RD-tVAHUYt68wJzI&center=41.05%2c%20-80.813132&zoom=10&size=600x400&style=feature:road.arterial|visibility:off&markers=40.8847745,-80.7393949&markers=41.1006321,-80.7690698&markers=41.1789883,-80.7641812&markers=41.1904406,-80.9911556'/>
		</div>
		<style jsx>{`
			.contact {
				display: flex;
				flex-direction: column;
				align-items: center;
				max-width: 30em;
				margin: auto;
				padding: 1em;
			}
			img { max-width: 100%; }
			.row {
				display: flex;
				flex-direction: row;
				justify-content: space-around;
				align-items: center;
				width: 100%;
				font-size: 0.9rem;
			}
			.row > * {
				/* width: 50%; */
				max-width: 10em;
				margin: 0.5em 0;
				/* text-align: center; */
			}
			.row > div { padding: 0.5em 0em; }
			.row > a {
				/* box-shadow: 0 3px 4px 0 rgba(0,0,0,0.14), 0 3px 3px -2px rgba(0,0,0,0.12), 0 1px 8px 0 rgba(0,0,0,0.2); */
				text-decoration: none;
				border-radius: 0.4em;
				border: 2px solid var(--wm-green);
				color: var(--wm-green);
				text-align: center;
				padding: 0.5em 0.8em;
			}
			address {
				font-style: normal;
			}
			address > .street, address > .city-state-zip {
				font-size: 0.8em;
				font-family: -apple-system,BlinkMacSystemFont,Roboto,"Segoe UI","Helvetica Neue",sans-serif;
			}
		`}</style>
	</Page>
)
