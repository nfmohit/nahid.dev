/**
* Internal dependencies
*/
import React from "react"

const Footer = () => (

    <footer>
		<div className="container">
			<div className="row">
				<div className="col-md-9">
					© {new Date().getFullYear()} Nahid Ferdous Mohit. <br/>
					Built with
					{` `}
					<a href="https://www.gatsbyjs.org" className="inline-link">Gatsby</a> ( <a href="https://reactjs.org/" className="inline-link">ReactJS</a> ),
					proudly powered by
					{` `}
					<a href="https://wordpress.org" className="inline-link">WordPress</a>,
					hosted in
					{` `}
					<a href="https://www.netlify.com/" className="inline-link">Netlify</a>.
				</div>
				<div className="col-md-3 social-links">
					<a href="https://github.com/nfmohit-wpmudev" target="_blank" rel="noopener noreferrer">
						<i className="fab fa-github"></i>
					</a>
					<a href="https://profiles.wordpress.org/nfmohit/" target="_blank" rel="noopener noreferrer">
						<i className="fab fa-wordpress"></i>
					</a>
					<a href="https://www.linkedin.com/in/nfmohit/" target="_blank" rel="noopener noreferrer">
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
					<a href="mailto:hello@nahid.dev" target="_blank" rel="noopener noreferrer">
						<i className="far fa-envelope"></i>
					</a>
				</div>
			</div>
		</div>
	</footer>
)

export default Footer;
