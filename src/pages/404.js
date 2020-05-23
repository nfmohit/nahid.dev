/*
 * External dependencies
 */
import React from 'react';

/*
 * Internal dependencies
 */
import Layout from '../components/layout';
import SEO from '../components/seo';

/**
 * NotFoundPage (component|page)
 *
 * Component to display the 404 page
 */
const NotFoundPage = () => (
	<Layout>
		<SEO title="404: Not found" />
		<h1>NOT FOUND</h1>
		<p>You just hit a route that doesn&#39;t exist... the sadness.</p>
	</Layout>
);

export default NotFoundPage;
