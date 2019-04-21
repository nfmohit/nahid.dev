/**
* Layout component that queries for data
* with Gatsby's StaticQuery component
*
* See: https://www.gatsbyjs.org/docs/static-query/
*/

/*
* Internal dependencies
*/
import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

/*
* Project dependencies
*/
import Header from "./header"

/*
 * Import Assets
 */
import '../assets/sass/main.scss';
import '../assets/js/main.js';

const Layout = ( { children } ) => (

	<StaticQuery
		query=
		{ graphql`
			query SiteTitleQuery {
				site {
					siteMetadata {
						title
					}
				}
			}
		`}
		render={ data => (
			<>
				<Header siteTitle={ data.site.siteMetadata.title } />
				<main className="dark">
					<div className="container">
						{ children }
					</div>
				</main>
				<footer>
					<div className="container">
						© {new Date().getFullYear()}, Built with
						{` `}
						<a href="https://www.gatsbyjs.org">Gatsby</a>,
						Proudly powered by
						{` `}
						<a href="https://wordpress.org">WordPress</a>
					</div>
				</footer>
			</>
		) }
	/>

)

Layout.propTypes = {
	children: PropTypes.node.isRequired,
}

export default Layout;
