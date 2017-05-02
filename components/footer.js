import Router from 'next/router'

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
			<h5>Address</h5>
			<p>{content || 'TODO FIX'}</p>
			<style jsx>{`
				.footer {
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: center;
					padding: 1em;
					color: #fff;
					background-color: darkgreen;
				}
			`}</style>
		</div>
	)
}
