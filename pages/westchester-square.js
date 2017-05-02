import React from 'react'
import Link from 'next/link'
import Page from '../components/Page'

export default () => (
	<Page title='Westchester Square'>
		<div className='westchester-square'>
			<h1>Westchester Square</h1>
			<style>{`
			.westchester-square {
				display: flex;
				flex-direction: row;
			}
		`}</style>
		</div>
	</Page>
)
