
export default () => {
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
