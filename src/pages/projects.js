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
								<h4 className="entry-title"><Link to={ `/projects/${ node.slug }` } dangerouslySetInnerHTML={ { __html: node.title } } /></h4>
							</div>
						</div>
					) ) }
				</div>
			</Layout>)
		}
	/>
);

export default Projects;
