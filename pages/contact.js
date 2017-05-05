import React from 'react'
import Link from 'next/link'
import Page from '../components/Page'

export default () => (
	<Page title='Contact'>
		<div className='contact'>
			<h3>Contact Us</h3>
			<div className='row'>
				<span>Columbiana Manor</span>
				<a href='tel:+13304829323'>(330) 482-9323</a>
			</div>
			<div className='row'>
				<span>Newton Village</span>
				<a href='tel:+13308727308'>(330) 872-7308</a>
			</div>
			<div className='row'>
				<span>Niles Executive</span>
				<a href='tel:+13306520609'>(330) 652-0609</a>
			</div>
			<div className='row'>
				<span>Westchester</span>
				<a href='tel:+13307995758'>(330) 799-5758</a>
			</div>
			<div className='row'>
				<span>Corporate Office</span>
				<a href='tel:+13307927688'>(330) 792-7688</a>
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
				align-items: baseline;
				width: 100%;
				font-size: 0.9rem;
			}
			.row > * {
				width: 50%;
				max-width: 10em;
				margin: 0.5em 0;
				/* text-align: center; */
			}
			.row > span { padding: 0.5em 0em; }
			.row > a {
				/* box-shadow: 0 3px 4px 0 rgba(0,0,0,0.14), 0 3px 3px -2px rgba(0,0,0,0.12), 0 1px 8px 0 rgba(0,0,0,0.2); */
				text-decoration: none;
				border-radius: 0.4em;
				border: 2px solid var(--wm-green);
				color: var(--wm-green);
				text-align: center;
				padding: 0.5em 1em;
			}
		`}</style>
	</Page>
)
