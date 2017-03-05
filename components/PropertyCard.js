import React from 'react'

export default class PropertyCard extends React.Component {

	render() {
		const { name, img } = this.props
		return (
			<div className='propety-card'>
				<img width='200px' height='175px' src='static/img/999197_657235440962430_1319110174_n.jpg' />
				<h3>{name}</h3>
				<style jsx>{`
					.property-card {
						display: flex;
						flex-direction: row;
						justify-content: space-between;
						padding: 0.5rem;
					}
					img {
						border-radius: var(--border-radius);
						border: 1px solid var(--border-color);
					}
				`}</style>
			</div>
		)
	}

}
