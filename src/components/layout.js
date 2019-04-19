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
 * Import Main SASS File
 */
import '../assets/sass/main.scss';

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
				<div
					style={ {
						margin: `0 auto`,
						maxWidth: 960,
						padding: `0px 1.0875rem 1.45rem`,
						paddingTop: 0,
					} }
				>
					<main>{ children }</main>
					<footer>
						© {new Date().getFullYear()}, Built with
						{` `}
						<a href="https://www.gatsbyjs.org">Gatsby</a>,
						Proudly powered by
						{` `}
						<a href="https://wordpress.org">WordPress</a>
					</footer>
				</div>
			</>
		) }
	/>

)

Layout.propTypes = {
	children: PropTypes.node.isRequired,
}

export default Layout;
