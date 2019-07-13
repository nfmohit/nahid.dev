/**
* Internal dependencies
*/
import React from 'react'
import Helmet from 'react-helmet'

/**
 * Project dependencies
 */
import Layout from '../components/layout'
import SEO from '../components/seo'

const NotFoundPage = () => (

	<Layout>
		<Helmet
			bodyAttributes={{
				class: '404-page'
			}}
		/>
		<SEO title="404: Not found" />
		<h1>NOT FOUND</h1>
		<p>You just hit a route that doesn&#39;t exist... the sadness.</p>
	</Layout>

)

export default NotFoundPage;
