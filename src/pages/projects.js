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
					allWordpressWpProject(sort: { fields: [date], order:DESC }) {
						edges {
							node {
								title
								slug
								excerpt
								categories {
									id
									name
									slug
								}
								project_custom_fields {
									project_links_metabox_github_url
									project_links_metabox_wp_org_url
								}
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
					{ data.allWordpressWpProject.edges.map( ( { node } ) => (
						<div key={ node.slug } className="col-sm-6 project-col">
							<div className="project-entry">
								<h3 className="entry-title"><Link to={ `/project/${ node.slug }` } dangerouslySetInnerHTML={ { __html: node.title } } /></h3>
								<span className="entry-excerpt"><div dangerouslySetInnerHTML={ { __html: node.excerpt } } /></span>
								<div className="project-icons">
									<span className={ node.categories && node.categories.map( category => `category ${ category.slug }`) }>{ node.categories && node.categories.map( category => `${ category.name }`) }</span>
									{ node.project_custom_fields.project_links_metabox_github_url ? 
										(
											<a href={ node.project_custom_fields.project_links_metabox_github_url } target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
										) : (
											``
										)
									}
									{ node.project_custom_fields.project_links_metabox_wp_org_url ? 
										(
											<a href={ node.project_custom_fields.project_links_metabox_wp_org_url } target="_blank" rel="noopener noreferrer"><i className="fab fa-wordpress"></i></a>
										) : (
											``
										)
									}
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
