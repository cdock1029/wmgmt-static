import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

export default class Page extends React.Component {

	render() {
		const { children, title } = this.props
		return (
			<div>
				<Head>
					<title>{title}</title>
					<meta charSet='utf-8' />
					<meta name='viewport' content='initial-scale=1.0, width=device-width' />
					<style>{`
						:root {
							--bg-color: #ddd;
							--txt-color: #333;
							--nav-bg-color: #fff;
							--nav-txt-color: #333;
							--border-color: #aaa;
							--border-radius: 0.5rem;
						}
						html, body, #__next, #__next > div { width: 100%; height: 100%; }
						html { font-size: 100%; background-color: var(--bg-color); color: var(--txt-color); }
						h1 { font-size: 1.em; }
						h1,h2,h3,h4,h5,h6 { font-weight: 500; }
						@media screen and (min-width: 400px) {
							html { font-size: calc(100% + 6 * (100vw - 400px) / 800); }
						}
						@media screen and (min-width: 1200px) {
							html { font-size: 137.5%; }
						}
						body {
							margin: 0;
							font-family: /*"AvenirNext-Regular",*/
								-apple-system,
								BlinkMacSystemFont,
								"Segoe UI",
								Roboto,
								"Helvetica Neue",
								sans-serif;
								-webkit-font-smoothing: subpixel-antialiased;
								-moz-osx-font-smoothing: grayscale;
								text-rendering: optimizeLegibility;
						}
					`}</style>
				</Head>
				<nav className='page-nav'>
					<Link href='/'><a className='nav-item'>Home</a></Link>
					<Link href='/contact'><a className='nav-item'>Contact Us</a></Link>
				</nav>
				{children}
				<style jsx global>{`
					.container {
						display: flex;
						flex-direction: column;
						justify-content: start;
						padding: 1em;
					}
					.row {
						display: flex;
						flex-direction: row;
						justify-content: space-around;
						margin: 0.5em 0 0.5em 0;
					}
					.page-nav {
						display: flex;
						flex-direction: row;
						justify-content: center;
						padding: 1em 0 1em 0;
						background-color: var(--nav-bg-color);
						border-bottom: 1px solid var(--border-color);
					}
					.nav-item {
						color: var(--nav-txt-color);
						text-decoration: none;
						text-transform: uppercase;
						font-size: 1rem;
						font-weight: 500;
						margin: 0 1em 0 1em;
					}
					.nav-item:hover {
						filter: brightness(250%);
						-webkit-filter: brightness(250%);
					}
				`}</style>
			</div>
		)
	}

}
