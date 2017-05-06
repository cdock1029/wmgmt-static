
export default () => {
	return (
		<div className='footer'>
			<address>
				<span className='company-name'>Waldon Management Corp.</span><br/>
				111 Westchester Drive<br/>
				Austintown, OH 44515<br/>
				<a href='tel:+13307927688'>(330) 792-7688</a>
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
					/* margin: 1em 0; */
					font-style: normal;
					font-family: -apple-system,BlinkMacSystemFont,Roboto,"Segoe UI","Helvetica Neue",sans-serif;
				}
				address a {
					text-decoration: none;
					color: inherit;
					line-height: 1.7em;
				}
				.company-name {
					font-family: Futura,-apple-system,BlinkMacSystemFont,Roboto,"Segoe UI","Helvetica Neue",sans-serif;
					font-weight: bold;
					line-height: 1.7em;
				}
			`}</style>
		</div>
	)
}
