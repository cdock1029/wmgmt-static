import React from 'react'
import Page from '../components/Page'

export default class Index extends React.Component {

	render() {
		return (
			<Page title='Waldon Management'>
				<div className='copy stuff'>
					{/* <img
						width='100%'
						src='https://waldon-static-whsnzoxopv.now.sh/westchester_exec_2.JPG'/> */}
					<p>For 40+ years, Waldon Management has provided experienced rental apartment services for singles, executives, seniors and families up to four people. Our seven apartment centers are situated in natural country settings close to freeway access, close to shopping, dining and banks.</p>
					<p>We offer a wide variety of apartments including furnished and unfurnished, studio and one to two bedroom apartments with floor plans including efficiencies and handicap accessible units. Our friendly staff will help you find the perfect place to call home in one of our 1500 apartments located in the Youngstown/Warren metropolitan area.</p>
					<h4 className='call'>Call us today at <wbr/><span className='phone'>1&#8209;877&#8209;353&#8209;RENT</span></h4>
					<img src='https://maps.googleapis.com/maps/api/staticmap?key=AIzaSyDKoMf5e_-R8DZE1S1RD-tVAHUYt68wJzI&center=41.05%2c%20-80.813132&zoom=10&size=600x400&style=feature:road.arterial|visibility:off&markers=40.8847745,-80.7393949&markers=41.1006321,-80.7690698&markers=41.1789883,-80.7641812&markers=41.1904406,-80.9911556'/>
				</div>
				<style jsx>{`
					.stuff {
						display: flex;
						flex-direction: column;
						justify-content: center;
						align-items: center;
						padding: 1em;
					}
					.call {
						font-family: Futura, sans-serif;
						text-align: center;
						line-height: 1.5em;
					}
					.call .phone {
						text-decoration: underline;
					}
					img {
						max-width: 100%;
					}
				`}</style>
			</Page>
		)
	}
}
