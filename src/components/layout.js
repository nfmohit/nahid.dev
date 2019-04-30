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
				<footer>
					<div className="container">
						<div className="row">
							<div className="col-md-8">
								© {new Date().getFullYear()}, Built with
								{` `}
								<a href="https://www.gatsbyjs.org">Gatsby</a>,
								Proudly powered by
								{` `}
								<a href="https://wordpress.org">WordPress</a>
							</div>
							<div className="col-md-4 social-links">
								<a href="https://github.com/nfmohit-wpmudev" target="_blank" rel="noopener noreferrer">
									<i className="fab fa-github"></i>
								</a>
								<a href="https://profiles.wordpress.org/nfmohit/" target="_blank" rel="noopener noreferrer">
									<i className="fab fa-wordpress"></i>
								</a>
								<a href="https://linked.com/in/nfmohit/" target="_blank" rel="noopener noreferrer">
									<i className="fab fa-linkedin-in"></i>
								</a>
								<a href="https://twitter.com/nfmohit/" target="_blank" rel="noopener noreferrer">
									<i className="fab fa-twitter"></i>
								</a>
								<a href="https://www.instagram.com/nfmohit/" target="_blank" rel="noopener noreferrer">
									<i className="fab fa-instagram"></i>
								</a>
								<a href="https://facebook.com/nfmohit/" target="_blank" rel="noopener noreferrer">
									<i className="fab fa-facebook-f"></i>
								</a>
								<a href="mailto:hello@nfmohit.pro" target="_blank" rel="noopener noreferrer">
									<i className="far fa-envelope"></i>
								</a>
							</div>
						</div>
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
