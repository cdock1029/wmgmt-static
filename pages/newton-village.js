import React from 'react'
import Link from 'next/link'
import Page from '../components/Page'

export default () => (
	<Page title='Newton Village'>
		<div className='newton-village'>
			<h1>Newton Village</h1>
			<style>{`
			.newton-village {
				display: flex;
				flex-direction: row;
			}
		`}</style>
		</div>
	</Page>
)
