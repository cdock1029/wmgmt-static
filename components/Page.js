import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Header from '../components/header'
import Footer from '../components/footer'

export default class Page extends React.Component {

	render() {
		const { children, title } = this.props
		return (
			<div className='grid'>
				<Head>
					<title>{title}</title>
					<meta charSet='utf-8'/>
					<meta name='viewport' content='initial-scale=1.0, width=device-width'/>
					<style>{`
						html, body, body > div:first-child, #__next, #__next > div:first-child {
							width: 100%; height: 100%;
						}
						html { font-size: 18px; box-sizing: border-box; }
						*, *:before, *:after { box-sizing: inherit; }
						body {
							margin: 0;
							padding: 0;
							font-family: -apple-system,BlinkMacSystemFont,Roboto,"Segoe UI","Helvetica Neue",sans-serif;
							font-family: Futura;
							-webkit-font-smoothing: antialiased;
						}
					`}</style>
				</Head>
				<section className='header'>
					<Header/>
				</section>
				<div className='content grid-item'>
					{children}
				</div>
				<footer className='footer grid-item'>
					<Footer/>
				</footer>
				<style jsx global>{`
					.grid {
						display: grid;
						height: 100%;
						overflow-x: hidden;
						grid-template-columns: 4% 1fr 4%;
						grid-template-rows: auto 1fr auto;
						grid-template-areas: 	"header header header"
																	"..... content ....."
																	"footer footer footer";
					}
					.content {
						grid-area: content;
						border-left: 1px solid blue;
						border-right: 1px solid blue;
					}
					@media (min-width: 450px) {
						.grid {
							grid-template-columns: 4% 1fr 1fr 1fr 4%;
							grid-template-areas: 	"header header header header header"
																		"..... content content content ....."
																		"footer footer footer footer footer";
						}
					}
					.header {
						grid-area: header;
					}
					.footer {
						grid-area: footer;
					}
				`}</style>
			</div>
		)
	}

}
