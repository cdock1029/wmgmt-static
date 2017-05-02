import React from 'react'
import Link from 'next/link'
import Page from '../components/Page'

export default () => (
	<Page title='Contact'>
		<h5>Contact Us</h5>
		<div className='contact'>
			<div className='row'>
				<span>Columbiana Manor</span>
				<a href='tel:+13307995758'>(330) 482-9323</a>
			</div>
			<div className='row'>
				<span>Newton Village</span>
				<a href='tel:+13307995758'>(330) 872-7308</a>
			</div>
			<div className='row'>
				<span>Niles Executive</span>
				<a href='tel:+13307995758'>(330) 652-0609</a>
			</div>
			<div className='row'>
				<span>Westchester</span>
				<a href='tel:+13307995758'>(330) 799-5758</a>
			</div>
		</div>
		<style jsx>{`
			.contact {
				/* border: 2px solid darkred; */
				display: flex;
				flex-direction: column;
				align-items: center;
			}
			.row {
				display: flex;
				flex-direction: row;
				justify-content: space-around;
				align-items: baseline;
				width: 100%;
			}
			.row > * {
				width: 45%;
				padding: 1em 0;
				margin: 0.5em 0;
				text-align: center;
				/* border: 1px solid navy; */
			}
			a {
				/* box-shadow: 0 3px 4px 0 rgba(0,0,0,0.14), 0 3px 3px -2px rgba(0,0,0,0.12), 0 1px 8px 0 rgba(0,0,0,0.2); */
				text-decoration: none;
				border-radius: 0.4em;
				border: 2px solid darkgreen;
				color: darkgreen;
			}
			/*@media (min-width: 450px) {
				.contact {
					font-size: 1.2em;
				}
			}*/
		`}</style>
	</Page>
)
