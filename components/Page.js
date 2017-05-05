import React from 'react'
import Head from 'next/head'
import Header from '../components/header'
import Footer from '../components/footer'

export default class Page extends React.Component {

	render() {
		const { children, title } = this.props
		console.log('render Page')
		return (
			<div className='grid'>
				<Head>
					<title>{title}</title>
					<meta charSet='utf-8'/>
					<meta name='viewport' content='initial-scale=1.0, width=device-width'/>
					<link rel='stylesheet' href='https://necolas.github.io/normalize.css/latest/normalize.css'/>
				</Head>
				<section className='header'>
					<Header/>
				</section>
				<div className='content'>
					{children}
				</div>
				<footer className='footer'>
					<Footer/>
				</footer>
				<style jsx global>{`
					:root {
						--gutter-size: 5%;
						/* --wm-green: #004D40; */
						--wm-green: #0E5630;
						--copy-font: Georgia,"Times New Roman",Times,serif;
					}
					html, body, body > div:first-child, #__next, #__next > div:first-child {
						width: 100%; height: 100%;
					}
					html { font-size: calc(1em + 0.6vw); box-sizing: border-box; }
					*, *:before, *:after { box-sizing: inherit; }
					body {
						margin: 0;
						padding: 0;
						/* font-family: -apple-system,BlinkMacSystemFont,Roboto,"Segoe UI","Helvetica Neue",sans-serif; */
						font-family: Futura;
						-webkit-font-smoothing: antialiased;
						overflow-y: scroll; /* has to be scroll, not auto */
						-webkit-overflow-scrolling: touch;
						/* background: url('/static/img/bkd_nature.jpg');
						background-size: cover; */
						background-color: var(--wm-green);
					}
					.grid {
						display: grid;
						height: 100%;
						overflow-x: hidden;
						grid-template-columns: var(--gutter-size) 1fr var(--gutter-size);
						grid-template-rows: auto 1fr auto;
						grid-template-areas: 	"header header header"
																	"..... content ....."
																	"footer footer footer";
					}
					.content {
						grid-area: content;
						background: #EED7B7;
					}
					.header {
						grid-area: header;
						color: #fff;
						background: var(--wm-green);
					}
					.footer {
						grid-area: footer;
						color: #fff;
						background-color: var(--wm-green);
					}
					.copy {
						font-family: var(--copy-font);
						line-height: 1.4em;
					}
					img {
						border: 1px solid #ccc;
						border-radius: 5px;
						margin: 0.5em 0;
					}
				`}</style>
			</div>
		)
	}

}
