import React from 'react'
import Link from 'next/link'
import Page from '../components/Page'

import PropertyCard from '../components/PropertyCard'

export default class Index extends React.Component {

	render() {
		return (
			<Page title='Waldon Management'>
				<div className='index'>
					<section className='stuff'>
						<h2>stuff.. ugh.</h2>
					</section>
					<section className='stuff'>
						<h2>stuff.. ugh.</h2>
					</section>
					<section className='stuff'>
						<h2>stuff.. ugh.</h2>
					</section>
					<section className='stuff'>
						<h2>stuff.. ugh.</h2>
					</section>
					<section className='stuff'>
						<h2>stuff.. ugh.</h2>
					</section>
					<section className='stuff'>
						<h2>stuff.. ugh.</h2>
					</section>
					<section className='stuff'>
						<h2>stuff.. ugh.</h2>
					</section>
					<section className='stuff'>
						<h2>stuff.. ugh.</h2>
					</section>
				</div>
				<style jsx>{`
					/* .index {
						display: grid;
					}*/
					.stuff {
						display: flex;
						justify-content: center;
						align-items: center;
						padding: 2em;
					}
				`}</style>
			</Page>
		)
	}
}
