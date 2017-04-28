import React from 'react'
import Link from 'next/link'
import Page from '../components/Page'

export default () => (
	<Page>
		<div className='columbiana'>
			<h1>Columbiana</h1>
		</div>
		<style>{`
		.columbiana {
			display: flex;
			flex-direction: row;
		}
	`}</style>
	</Page>
)
