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
import Footer from "./footer"

/*
 * Import Assets
 */
import './../../node_modules/@fortawesome/fontawesome-free/css/all.css';
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
				<Footer/>
			</>
		) }
	/>

)

Layout.propTypes = {
	children: PropTypes.node.isRequired,
}

export default Layout;
