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
			<p>I am a web interface developer, WordPress sorcerer, a proud WPMUDEVian, WordPress contributor, foss enthusiast.</p>

		</section>
	</Layout>

)

export default IndexPage;
