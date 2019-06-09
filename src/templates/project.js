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
			/>

			<article>
				<div className="row">
					<div className="col-md-4">
						<img className="project-image" src="" alt="" />
						<a className="btn btn-primary" href={ post.project_custom_fields.project_links_metabox_github_url }>View on <i className="fab fa-github"></i> </a>
						<a className="btn btn-primary" href={ post.project_custom_fields.project_links_metabox_wporg_url }>View on <i className="fab fa-wordpress"></i></a>
					</div>

					<div className="col-md-8">
						<h1 dangerouslySetInnerHTML={ { __html: post.title } } />
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
