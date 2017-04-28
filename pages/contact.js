import React from 'react'
import Link from 'next/link'

export default () => (
	<div className='contact'>
		<h1>Contact Us</h1>
		<p>Westchester Apartments: <span>330-799-5758</span></p>
		<p>MAP</p>
		<style>{`
			.contact {
				display: flex;
				flex-direction: row;
			}
		`}</style>
	</div>
)
