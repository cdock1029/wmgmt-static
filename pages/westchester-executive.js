import React from 'react'
import Link from 'next/link'
import Page from '../components/Page'

export default () => (
	<Page title='Westchester Executive'>
		<div className='westchester-executive'>
			<h1>Westchester Executive</h1>
			<style>{`
			.westchester-executive {
				display: flex;
				flex-direction: row;
			}
		`}</style>
		</div>
	</Page>
)
