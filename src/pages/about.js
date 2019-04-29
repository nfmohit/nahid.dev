/**
* Internal dependencies
*/
import React from "react"
import Helmet from 'react-helmet';

/**
 * Project dependencies
 */
import Layout from "../components/layout"
import SEO from "../components/seo"

/**
 * Images
 */
import avatar from "./../images/avatar.jpg"

const IndexPage = () => (

	<Layout>

		<Helmet
			bodyAttributes={{
		        class: 'about'
		    }}
		/>

		<SEO title="About" keywords={ [ `gatsby`, `application`, `react` ] } />

		<div className="vcard">
			<div className="row">
				<div className="col-md-3 avatar">
					<img src={ avatar } alt="Avatar" />
				</div>
				<div className="col-md-5 identity">
					<h1>Nahid Ferdous Mohit</h1>
				</div>
				<div className="col-md-4 info">
					<span>born</span>
					<p>28<sup>th</sup> April, 1999</p>
					<span>education</span>
					<p>high school (2017) <sup>*</sup>dropout<sup>*</sup></p>
					<span>work</span>
					<p>tech support engineer @ <a href="https://premium.wpmudev.org" target="_blank" rel="noopener noreferrer">WPMU DEV</a></p>
					<span>location</span>
					<p>Dhaka, Bangladesh</p>
				</div>
			</div>
		</div>

	</Layout>

)

export default IndexPage;
