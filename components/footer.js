import Router from 'next/router'

const locations = {
	'/': { name: '', street: '', cityStateZip: '' },
	'/westchester-commons': { name: 'Westchester Commons Apts.', street: '', cityStateZip: '' },
	'/westchester-executive': { name: 'Westchester Executive Apts.', street: '', cityStateZip: '' },
	'/westchester-square': { name: 'Westchester Square Apts.', street: '', cityStateZip: '' },
}

export default props => {
	let content
	// switch (Router.pathname) {
	// 	case '/':
	// 		content = 'Index'
	// 		break
	// 	case '/contact':
	// 		content = 'Contact'
	// 		break
	// 	case '/columbiana-manor':
	// 		content = 'Columbiana Manor'
	// 		break
	// 	default:
	// 		content = 'TODO: add case in footer.js'
	// 		break
	// }
	console.log('footer props', props)
	return (
		<div className='footer'>
			<address>
				<span className='company-name'>Waldon Management Corp.</span><br/>
				111 Westchester Drive<br/>
				Austintown, OH 44515<br/>
				USA
			</address>
			<style jsx>{`
				.footer {
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: center;
					padding: 1em;

				}
				address {
					font-size: 0.7em;
					margin: 1em 0;
					font-style: normal;
					font-family: -apple-system,BlinkMacSystemFont,Roboto,"Segoe UI","Helvetica Neue",sans-serif;
				}
				.company-name {
					font-family: Futura,-apple-system,BlinkMacSystemFont,Roboto,"Segoe UI","Helvetica Neue",sans-serif;
					font-weight: bold;
					line-height: 1.8em;
				}
			`}</style>
		</div>
	)
}
