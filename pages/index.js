import React from 'react'
import Page from '../components/Page'

export default class Index extends React.Component {

	render() {
		return (
			<Page title='Waldon Management'>
				<div className='index'>
					<img
						width='100%'
						src='https://waldon-static-whsnzoxopv.now.sh/westchester_exec_2.JPG'/>
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
