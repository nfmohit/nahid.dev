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

				<header>
					<h1 dangerouslySetInnerHTML={ { __html: post.title } } />
				</header>

				<div className="content-holder">
					<div className="content-body">
						<p dangerouslySetInnerHTML={ { __html: post.content } } />
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
	}
}
`;
