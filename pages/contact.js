import React from 'react'
import Page from '../components/Page'

const maybe =
	'https://maps.googleapis.com/maps/api/staticmap?center%3D41.05%2C-80.813132%26zoom%3D10%26size%3D600x400%26style%3Dfeature%3Aroad.arterial%7Cvisibility%3Aoff%26markers%3D40.8847745%2C-80.7393949%26markers%3D41.1006321%2C-80.7690698%26markers%3D41.1789883%2C-80.7641812%26markers%3D41.1904406%2C-80.9911556&key=AIzaSyCoMLt0HIQyoanE5lEUe2cHIR4Rp9TNlvA'
const signedUrl =
	'https://maps.googleapis.com/maps/api/staticmap?center%3D41.05%2C-80.813132%26zoom%3D10%26size%3D600x400%26style%3Dfeature%3Aroad.arterial%7Cvisibility%3Aoff%26markers%3D40.8847745%2C-80.7393949%26markers%3D41.1006321%2C-80.7690698%26markers%3D41.1789883%2C-80.7641812%26markers%3D41.1904406%2C-80.9911556&key=AIzaSyCoMLt0HIQyoanE5lEUe2cHIR4Rp9TNlvA&signature=7PKhRVep_gww3pMc112EJDC2Fnw='
const MAPS_URL =
	'maps/api/staticmap?center=41.05,-80.813132&zoom=10&size=600x400&style=feature:road.arterial|visibility:off&markers=40.8847745,-80.7393949&markers=41.1006321,-80.7690698&markers=41.1789883,-80.7641812&markers=41.1904406,-80.9911556&key=AIzaSyCoMLt0HIQyoanE5lEUe2cHIR4Rp9TNlvA'
export default () => (
	<Page title="Contact Us to Schedule Apartment Tour">
		<div className="contact">
			<h3>Contact Us</h3>
			<table>
				<tbody>
					<tr>
						<td className="address-wrap">
							<address>
								<span className="name">Columbiana Manor</span>
								<br />
								<span className="street">337 W Salem St</span>
								<br />
								<span className="city-state-zip">Columbiana, OH 44408</span>
								<br />
							</address>
						</td>
						<td className="phone-wrap">
							<a href="tel:+13304829323">(330) 482-9323</a>
						</td>
					</tr>
					<tr>
						<td className="address-wrap">
							<address>
								<span className="name">Newton Village</span>
								<br />
								<span className="street">571 Ridge Rd</span>
								<br />
								<span className="city-state-zip">Newton Falls, OH 44444</span>
								<br />
							</address>
						</td>
						<td className="phone-wrap">
							<a href="tel:+13308727308">(330) 872-7308</a>
						</td>
					</tr>
					<tr>
						<td className="address-wrap">
							<address>
								<span className="name">Niles Executive</span>
								<br />
								<span className="street">925 Youngstown Warren Rd</span>
								<br />
								<span className="city-state-zip">Niles, OH 44446</span>
								<br />
							</address>
						</td>
						<td className="phone-wrap">
							<a href="tel:+13306520609">(330) 652-0609</a>
						</td>
					</tr>
					<tr>
						<td className="address-wrap">
							<address>
								<span className="name">Westchester</span>
								<br />
								<span className="street">4815 Westchester Dr</span>
								<br />
								<span className="city-state-zip">Austintown, OH 44515</span>
								<br />
							</address>
						</td>
						<td className="phone-wrap">
							<a href="tel:+13307995758">(330) 799-5758</a>
						</td>
					</tr>
				</tbody>
			</table>
			<img src={signedUrl} />
		</div>
		<style jsx>{`
			.contact {
				display: flex;
				flex-direction: column;
				align-items: center;
				margin: auto;
				padding: 1em;
				width: 100%;
			}
			img {
				max-width: 100%;
			}
			table {
				width: 100%;
				max-width: 25em;
			}
			td.address-wrap {
				text-align: left;
				padding: 0.5em 0;
			}
			td.phone-wrap {
				white-space: nowrap;
				text-align: right;
			}
			td address {
				font-style: normal;
			}
			td address > .name {
				font-size: 0.9em;
			}
			td address > .street,
			td address > .city-state-zip {
				font-size: 0.7em;
				font-family: -apple-system, BlinkMacSystemFont, Roboto, 'Segoe UI',
					'Helvetica Neue', sans-serif;
			}
			td.phone-wrap a {
				max-width: 100%;
				text-decoration: none;
				border-radius: 0.4em;
				border: 2px solid var(--wm-green);
				color: var(--wm-green);
				text-align: center;
				padding: 0.5em 0.7em;
				font-size: 0.8em;
			}
		`}</style>
	</Page>
)
