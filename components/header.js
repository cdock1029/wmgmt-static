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
					<section>
						<Link href='/contact'><a>Contact Us</a></Link>
					</section>
					{/* <section className='arrow-wrapper' onClick={this.handleToggleShowProperties}>
						<span>Properties</span>
						<div className={`menu-arrow${showProperties ? ' toggled' : ''}`}>
							<svg style={{ fill: 'inherit' }} width='27px' height='14px' viewBox='0 0 27 14' version='1.1'>
								<g id='Page-1' stroke='none' strokeWidth='1' fillRule='evenodd'>
									<polygon id='Arrow' fillRule='nonzero' points='13.4999996 13.9214282 0.6 1.17499997 1.82857139 0.1 13.4999996 11.7714282 25.1714278 0.1 26.3999992 1.17499997'/>
								</g>
							</svg>
						</div>
					</section> */}
				</div>
				{showProperties &&
					<div className='properties-dropdown'>
						<Link prefetch href='/properties'><a>properties</a></Link>
						<hr/>
						<Link prefetch href='/contact'><a>contact</a></Link>
					</div>
				}
				<style jsx>{`
					.bar-wrapper {
						display: flex;
						justify-content: space-between;
						align-items: center;
						/* margin: 0 4%; */
						padding: 1em var(--gutter-size);
						/* border-bottom: 1px solid rgba(0,0,0,0.1); */
						 border-bottom: 1px solid rgba(0,0,0,0.5);
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
						color: inherit;
						text-decoration: none;
						text-transform: uppercase;
					}
					.properties-dropdown a {
						padding: 0.8em 0;
						display: block;
					}
					.properties-dropdown {font-size: 1.1em;  }

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
