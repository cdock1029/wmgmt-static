import React from 'react'
import Page from '../components/Page'

export default class Index extends React.Component {

	render() {
		return (
			<Page title='Properties'>
				<div className='index'>
					<figure>
						<h4>Westchester Square</h4>
						<img src='/static/img/westchester/square_thumb.jpg'/>
						<figcaption>Austintown, OH</figcaption>
					</figure>
					<figure>
						<h4>Westchester Executive</h4>
						<img src='/static/img/westchester/executive_thumb.jpg'/>
						<figcaption>Austintown, OH</figcaption>
					</figure>
					<figure>
						<h4>Westchester Commons</h4>
						<img src='/static/img/westchester/commons_thumb.jpg'/>
						<figcaption>Austintown, OH</figcaption>
					</figure>
					<div className='copy-wrapper'>
						<p className='copy'>For 40+ years, Waldon Management has provided experienced rental apartment services for singles, executives, seniors and families up to four people. Our seven apartment centers are situated in natural country settings close to freeway access, close to shopping, dining and banks.</p>
					</div>
					<figure>
						<h4>Columbiana Manor</h4>
						<img src='/static/img/columbiana/thumb.jpg'/>
						<figcaption>Columbiana, OH</figcaption>
					</figure>
					<figure>
						<h4>Niles Executive</h4>
						<img src='/static/img/niles/thumb.jpg'/>
						<figcaption>Niles, OH</figcaption>
					</figure>
					<figure>
						<h4>Newton Village</h4>
						<img src='/static/img/newtonfalls/village_thumb.jpg'/>
						<figcaption>Newton Falls, OH</figcaption>
					</figure>
					<figure>
						<h4>Newton Commons</h4>
						<img src='/static/img/newtonfalls/commons_thumb.jpg'/>
						<figcaption>Newton Falls, OH</figcaption>
					</figure>
					<div className='copy-wrapper'>
						<p className='copy'>We offer a wide variety of apartments including furnished and unfurnished, studio and one to two bedroom apartments with floor plans including efficiencies and handicap accessible units. Our friendly staff will help you find the perfect place to call home in one of our 1500 apartments located in the Youngstown/Warren metropolitan area.</p>
					</div>
				</div>
				<style jsx>{`
					.index {
						display: flex;
						flex-direction: row;
						justify-content: space-around;
						flex-wrap: wrap;
						padding: 0.5em;
					}
					p { padding: 0 0.5em; max-width: 42em; margin-left: auto; margin-right: auto; }
					.copy-wrapper { width: 100%; margin: 1em 0 0 0; }
					figure { margin: 0.5em; }
					figcaption { font-size: 0.8em; }
					img { max-width: 100%; margin: auto; }
					@media (max-width: 500px) {
						figure {
							width: 100%;
						}
						img { width: 100%; }
					}
				`}</style>
			</Page>
		)
	}
}
