/**
* Internal dependencies
*/
import React from 'react';
import { StaticQuery, graphql, Link } from 'gatsby';
import Helmet from 'react-helmet';

/**
 * Project dependencies
 */
import Layout from '../components/layout';
import SEO from "../components/seo"

const Projects = () => (

	<StaticQuery
		query=
			{ graphql`
				query {
					allWordpressWpProjects(sort: { fields: [date], order:DESC }) {
						edges {
							node {
								title
								slug
							}
						}
					}
				}
			`}

		render={ data => (
			<Layout>
				<SEO title="Projects" keywords={ [ `gatsby`, `application`, `react` ] } />
				<Helmet
					bodyAttributes={{
				        class: 'projects'
				    }}
				/>
				<div className="page-intro">
					<h2>Projects</h2>
					<h6>Mentionable projects that I've worked on so far</h6>
				</div>
				<div className="row">
					{ data.allWordpressWpProjects.edges.map( ( { node } ) => (
						<div key={ node.slug } className="col-sm-6">
							<div className="project-entry">
								<h3 className="entry-title"><Link to={ `/projects/${ node.slug }` } dangerouslySetInnerHTML={ { __html: node.title } } /></h3>
								<p className="entry-excerpt">Simple introduction to this project which gives the reader an idea of what it is.</p>
								<div className="project-icons">
									<a href="https://github.com/nfmohit-wpmudev/nahid.dev" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
									<a href="https://github.com/nfmohit-wpmudev/nahid.dev" target="_blank" rel="noopener noreferrer"><i className="fab fa-wordpress"></i></a>
								</div>
							</div>
						</div>
					) ) }
				</div>
			</Layout>)
		}
	/>
);

export default Projects;
