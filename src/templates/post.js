/**
* Internal dependencies
*/
import React from 'react';
import PropType from 'prop-types';
import Helmet from 'react-helmet';
import { graphql, Link } from 'gatsby';

/**
 * Project dependencies
 */
import Layout from '../components/layout';

const PostTemplate = (props) => {

	const { data: { wordpressPost: post } } = props;

	return (
		<Layout>

			<Helmet
				title={ post.title }
				meta={ [
					{ name: 'description', content: post.excerpt },
				] }
				bodyAttributes={{
			        class: 'single-post'
			    }}
			/>

			<article>

				<div className="row">
					<div className="single-post-entry col-md-9 col-sm-12">
						<Link to="/blog/" className="back-link"><span className="back-arrow">&#8592;</span> Go Back</Link>

						<div className="entry-meta">
							<h2 className="entry-title">{ post.title }</h2>
							<span className={ post.categories && post.categories.map( category => `category ${ category.slug }`) }>{ post.categories && post.categories.map( category => `${ category.name }`) }</span>&#183;
							<span className="date">{ post.date }</span>
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
	wordpressPost( id: { eq: $id } ) {
		title
		content
		date( formatString: "DD MMM YYYY" )
		categories {
			id
			name
			slug
		}
		slug
	}
}
`;
