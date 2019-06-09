/**
* Internal dependencies
*/
import React from 'react';
import PropType from 'prop-types';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';

/**
 * Project dependencies
 */
import Layout from '../components/layout';

const ProjectTemplate = (props) => {

	const { data: { wordpressWpProject: post } } = props;

	return (
		<Layout>

			<Helmet
				title={ post.title }
				meta={ [
					{ name: 'description', content: post.excerpt },
				] }
				bodyAttributes={{
			        class: 'single-project'
			    }}
			/>

			<article>
				<div className="row">
					<div className="single-project-sidebar col-md-3">
						<img className="project-image" src="" alt="" />
						<a className="github-link btn btn-primary" href={ post.project_custom_fields.project_links_metabox_github_url }><i className="fab fa-github"></i> View on GitHub</a>
						<a className="wporg-link btn btn-primary" href={ post.project_custom_fields.project_links_metabox_wporg_url }><i className="fab fa-wordpress"></i> View on WordPress</a>
					</div>

					<div className="col-md-9 entry-content">
						<h2 className="entry-title" dangerouslySetInnerHTML={ { __html: post.title } } />
						<div dangerouslySetInnerHTML={ { __html: post.content } } />
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
		slug
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
`;
