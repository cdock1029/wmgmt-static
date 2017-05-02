import React from 'react'
import Link from 'next/link'
import Page from '../components/Page'

export default () => (
	<Page title='Newton Commons'>
		<div className='newton-commons'>
			<h1>Newton Commons</h1>
			<style>{`
				.newton-commons {
					display: flex;
					flex-direction: row;
				}
			`}</style>
		</div>
	</Page>
)
