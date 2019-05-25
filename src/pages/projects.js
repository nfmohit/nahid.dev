/**
* Internal dependencies
*/
import React from 'react';
import { StaticQuery, graphql, Link } from 'gatsby';

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
				<div className="container">
					<div className="row">
						{ data.allWordpressWpProjects.edges.map( ( { node } ) => (
							<div key={ node.slug } className="grid col-sm-6">
								<div className="entry-body">
									<span className="cat">{ node.categories && node.categories.map( category => `${ category.name }, `) }</span>
									<h3><Link to={ `/projects/${ node.slug }` } dangerouslySetInnerHTML={ { __html: node.title } } /></h3>
									<p dangerouslySetInnerHTML={ { __html: node.excerpt } } />
									<div className="read-more-date">
										<span className="date">{ node.date }</span>
									</div>
								</div>
							</div>
						) ) }
					</div>
				</div>
			</Layout>)
		}
	/>
);

export default Projects;
