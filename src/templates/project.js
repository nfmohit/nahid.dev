/**
* Internal dependencies
*/
import React from 'react'
import PropType from 'prop-types'
import Helmet from 'react-helmet'
import Img from 'gatsby-image'
import { graphql, Link } from 'gatsby'

/**
 * Project dependencies
 */
import Layout from '../components/layout'
import SEO from '../components/seo'

const ProjectTemplate = (props) => {

	const { data: { wordpressWpProject: post } } = props;

	const seodesc = post.excerpt.replace( /<[^>]+>/g, '' );

	return (
		<Layout>

			<Helmet
				bodyAttributes={{
			        class: 'single-project'
			    }}
			/>

			<SEO
				title={ post.title }
				description = { seodesc }
			/>

			<article>
				<Link to="/projects/" className="back-link"><span className="back-arrow">&#8592;</span> Go Back</Link>
				<div className="row">
					<div className="single-project-sidebar col-md-3">
						{ post.featured_media && (
							<Img
								src={ post.featured_media.localFile.childImageSharp.sizes.src }
								sizes={ post.featured_media.localFile.childImageSharp.sizes }
								className="project-image"
								alt={ post.title }
							/>
						) }
							{ post.project_custom_fields.project_links_metabox_github_url ? 
								(
									<a className="github-link btn btn-primary" href={ post.project_custom_fields.project_links_metabox_github_url } target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i> View on GitHub</a>
								) : (
									``
								)
							}
							{ post.project_custom_fields.project_links_metabox_wporg_url ? 
								(
									<a className="wporg-link btn btn-primary" href={ post.project_custom_fields.project_links_metabox_wporg_url } target="_blank" rel="noopener noreferrer"><i className="fab fa-wordpress"></i> View on WordPress</a>
								) : (
									``
								)
							}
							{ post.project_custom_fields.project_links_metabox_website_url ? 
								(
									<a className="website-link btn btn-primary" href={ post.project_custom_fields.project_links_metabox_website_url } target="_blank" rel="noopener noreferrer"><i className="fas fa-globe"></i> Visit Website</a>
								) : (
									``
								)
							}
					</div>

					<div className="col-md-9 single-project-entry">
						<h2 className="entry-title" dangerouslySetInnerHTML={ { __html: post.title } } />
						<span className={ post.categories && post.categories.map( category => `category ${ category.slug }`) }>{ post.categories && post.categories.map( category => `${ category.name }`) }</span>
						<ul className="nav nav-tabs project-content-nav">
							<li className="nav-item">
								<a className="nav-link active" data-toggle="tab" href="#info">Info</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" data-toggle="tab" href="#usage">Usage</a>
							</li>
						</ul>
						<div className="tab-content">
  							<div className="tab-pane fade show active" id="info" role="tabpanel" aria-labelledby="info-tab">
								<div className="entry-content" dangerouslySetInnerHTML={ { __html: post.content } } />
  							</div>
  							<div className="tab-pane fade show" id="usage" role="tabpanel" aria-labelledby="usage-tab">
								<div className="entry-content" dangerouslySetInnerHTML={ { __html: post.project_custom_fields.project_usage_metabox_usage_text } } />
  							</div>
						</div>
					</div>
				</div>
			</article>

		</Layout>
	);
};

ProjectTemplate.propTypes = {
	data: PropType.shape( {} ).isRequired,
};
export default ProjectTemplate;

export const pageQuery = graphql`
query($id: String!) {
	wordpressWpProject( id: { eq: $id } ) {
		title
		content
		excerpt
		slug
		categories {
			id
			name
			slug
		}
		project_custom_fields {
			project_links_metabox_github_url
			project_links_metabox_wp_org_url
			project_links_metabox_website_url
			project_usage_metabox_usage_text
		}
		featured_media {
			localFile {
				childImageSharp {
					id
					sizes( maxWidth: 800 ) {
						...GatsbyImageSharpSizes
					}
				}
			}
		}
	}
}
`;
