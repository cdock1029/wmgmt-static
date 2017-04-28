import React from 'react'
import Link from 'next/link'

export default class Header extends React.Component {

	state = {
		showProperties: false,
	}
	handleToggleShowProperties = () => {
		this.setState(prev => ({ showProperties: !prev.showProperties }))
	}
	render() {
		const { showProperties } = this.state
		return (
			<div>
				<div className='bar-wrapper'>
					<section className='brand'>
						<Link href='/'><a>Waldon MGMT</a></Link>
					</section>
					<section className='arrow-wrapper' onClick={this.handleToggleShowProperties}>
						<span>Properties</span>
						<div className={`menu-arrow${showProperties ? ' toggled' : ''}`}>
							<svg style={{ fill: 'inherit' }} width='27px' height='14px' viewBox='0 0 27 14' version='1.1' data-reactid='16'>
								<g id='Page-1' stroke='none' strokeWidth='1' fillRule='evenodd' data-reactid='17'>
									<polygon id='Arrow' fillRule='nonzero' points='13.4999996 13.9214282 0.6 1.17499997 1.82857139 0.1 13.4999996 11.7714282 25.1714278 0.1 26.3999992 1.17499997' data-reactid='18'/>
								</g>
							</svg>
						</div>
					</section>
				</div>
				{showProperties &&
					<div className='properties-dropdown'>
						<Link href='/columbiana-manor'><a>columbiana manor</a></Link>
						<Link href='/newton-commons'><a>newton commons</a></Link>
						<Link href='/newton-village'><a>newton village</a></Link>
						<Link href='/niles-executive'><a>niles executive</a></Link>
						<Link href='/westchester-commons'><a>westchester commons</a></Link>
						<Link href='/westchester-executive'><a>westchester executive</a></Link>
						<Link href='/westchester-square'><a>westchester square</a></Link>
						<hr/>
						<Link href='/contact'><a>Contact</a></Link>
						<span>Map</span>
					</div>
				}
				<style jsx>{`
					.bar-wrapper {
						display: flex;
						justify-content: space-between;
						align-items: center;
						/* margin: 0 4%; */
						padding: 1em 4%;
						border-bottom: 1px solid rgba(0,0,0,0.1);
					}
					.brand {
						font-weight: bold;
					}
					.properties-dropdown {
						min-height: 100vh;
						width: 100%;
						display: flex;
						flex-direction: column;
						align-items: stretch;
						text-align: center;
						padding: 1em;
					}
					hr {
						width: 5em;
						border: none;
						border-bottom: 1px solid #777a;
					}
					a {
						color: #000;
						text-decoration: none;
						text-transform: uppercase;
					}
					.properties-dropdown a {
						padding: 0.8em 0;
						display: block;
					}
					.properties-dropdown {font-size: 1.1rem;  }
					@media (min-width: 450px) {
						.properties-dropdown { font-size: 1.5rem; }
					}
					.arrow-wrapper {
						cursor: pointer;
					}
					.menu-arrow {
						display: inline-block;
						margin-left: 1em;
						transition: transform 0.2s ease;
					}
					.menu-arrow.toggled {
						transform: rotate(180deg);
					}
				`}</style>
			</div>
		)
	}
}
