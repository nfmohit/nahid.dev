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

const ProjectsPage = () => (

	<Layout>

		<Helmet
			bodyAttributes={{
		        class: 'projects'
		    }}
		/>

		<SEO title="Projects" keywords={ [ `gatsby`, `application`, `react` ] } />

	</Layout>

)

export default ProjectsPage;
