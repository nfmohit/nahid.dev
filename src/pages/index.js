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

const IndexPage = () => (

	<Layout>

		<Helmet
			bodyAttributes={{
		        class: 'home'
		    }}
		/>

		<SEO title="Home" keywords={ [ `gatsby`, `application`, `react` ] } />

		<section id="intro">

			<p>Hi, my name is</p>
			<h1>Nahid Ferdous Mohit</h1>
			<ol start="0">
				<li>web interface developer</li>
				<li>WordPress sorcerer</li>
				<li>a proud WPMUDEVian</li>
				<li>WordPress contributor</li>
				<li>foss enthusiast</li>
			</ol>

		</section>
	</Layout>

)

export default IndexPage;
