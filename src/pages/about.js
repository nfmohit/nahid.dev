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

const AboutPage = () => (

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
					<div className="social-links">
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
				<div className="col-md-4 info">
					<span>born</span>
					<p>28<sup>th</sup> April, 1999</p>
					<span>education</span>
					<p>high school (2017) <sup>*</sup>dropout<sup>*</sup></p>
					<span>work</span>
					<p>tech support engineer @ <a href="https://premium.wpmudev.org" target="_blank" rel="noopener noreferrer" className="inline-link">WPMU DEV</a></p>
					<span>location</span>
					<p>Dhaka, Bangladesh</p>
				</div>
			</div>
		</div>

		<div className="biography">
			<h2>About Nahid</h2>
			<p>Nahid is a 20 years old software developer located in Dhaka, Bangladesh. He is currently working as a tech support engineer at <a href="https://premium.wpmudev.org/" className="inline-link" target="_blank" rel="noopener noreferrer">WPMU DEV</a>, one of the leading WordPress development companies.
			</p>
		</div>

	</Layout>

)

export default AboutPage;
