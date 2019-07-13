/**
* Internal dependencies
*/
import React from 'react'
import PropType from 'prop-types'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import jQuery from 'jquery'

/**
 * Project dependencies
 */
import Layout from '../components/layout'
import SEO from '../components/seo'

const PostTemplate = (props) => {

	const { data: { wordpressPage: post } } = props;

	const seodesc = jQuery( post.excerpt ).text();

	return (
		<Layout>

			<Helmet
				bodyAttributes={{
			        class: 'single-post single-page'
			    }}
			/>

			<SEO
				title={ post.title }
				description = { seodesc }
			/>

			<article>

				<div className="row">
					<div className="single-post-entry col-md-9 col-sm-12">

						<div className="entry-meta">
							<h2 className="entry-title">{ post.title }</h2>
						</div>

						<div className="entry-content" dangerouslySetInnerHTML={ { __html: post.content } } />
					</div>
				</div>

			</article>

		</Layout>
	);
};

PostTemplate.propTypes = {
	data: PropType.shape( {} ).isRequired,
};
export default PostTemplate;

export const pageQuery = graphql`
query($id: String!) {
	wordpressPage( id: { eq: $id } ) {
		title
		content
		excerpt
		slug
	}
}
`;
