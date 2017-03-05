import React from 'react'
import Link from 'next/link'
import Page from '../components/Page'
import PropertyCard from '../components/PropertyCard'

export default class Index extends React.Component {

	render() {
		return (
			<Page title='Waldon Management'>
				<div className='banner'>
					<span id='title'>Waldon Management</span>
				</div>
				<div className='container'>
					<div className='row'>
						<div className='col'>
							<h2>H2: Sub heading</h2>
							<h3>H3: Another sub heading</h3>
							<h4>H4: Another sub heading</h4>
							<h5>H5: Another sub heading</h5>
							<p>An apartment community in <strong>Austintown, OH</strong></p>
						</div>
						<div className='col'>
							<h2>H2: Sub heading</h2>
							<h3>H3: Another sub heading</h3>
							<h4>H4: Another sub heading</h4>
							<h5>H5: Another sub heading</h5>
							<p>An apartment community in <strong>Austintown, OH</strong></p>
						</div>
						<div className='col'>
							<h2>H2: Sub heading</h2>
							<h3>H3: Another sub heading</h3>
							<h4>H4: Another sub heading</h4>
							<h5>H5: Another sub heading</h5>
							<p>An apartment community in <strong>Austintown, OH</strong></p>
						</div>
					</div>
					<div className='row'>
						<PropertyCard name='Newton Village' />
					</div>
				</div>
				<style jsx>{`
					.banner {
						text-align: center;
						padding-top: 2rem;
						height: 45vw;
						width: 100%;
						background-image: url("static/img/999197_657235440962430_1319110174_n.jpg");
						background-repeat: no-repeat;
						background-size: cover;
						background-position: 50% 50%;
						filter: contrast(108%) brightness(133%) saturate(193%);
					}
					#title {
						color: #fff;
						mix-blend-mode: difference;
						font-family: "Cochin-Bold";
						font-size: 2.5rem;
						font-weight: 700;
						line-height: 1.6;
						text-transform: uppercase;
					}
					.col {
						background: #eee;
						border: 1px solid var(--border-color);
						border-radius: var(--border-radius);
						padding: 1rem;
						margin: 0.5rem;
					}
				`}</style>
			</Page>
		)
	}

}
