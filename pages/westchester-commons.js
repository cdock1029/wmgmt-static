import React from 'react'
import Link from 'next/link'
import Page from '../components/Page'

export default () => (
	<Page title='Westchester Commons'>
		<div className='westchester-commons'>
			<h1>Westchester Commons</h1>
			<style>{`
			.westchester-commons {
				display: flex;
				flex-direction: row;
			}
		`}</style>
		</div>
	</Page>
)
