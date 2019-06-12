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
import Layout from '../components/layout'
import SEO from '../components/seo'

/**
 * Images
 */
import avatar from "./../images/avatar.jpg"

const PostTemplate = (props) => {

	const { data: { wordpressPost: post } } = props;

	const seodesc = post.excerpt.replace(/<[^>]*>?/gm, '');

	return (
		<Layout>

			<Helmet
				bodyAttributes={{
			        class: 'single-post'
			    }}
			/>

			<SEO
				title={ post.title }
				description = { seodesc }
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

						<div className="author-vcard">
							<div className="row">
								<div className="col-md-4 avatar">
									<img src={ avatar } alt="Nahid Ferdous Mohit" />
								</div>
								<div className="col-md-8 identity">
									<h3>Nahid Ferdous Mohit</h3>
									<span className="author-bio-text">Nahid is a 20 years old, self-learned software developer, currently working as a tech support engineer at <a href="https://premium.wpmudev.org/" className="inline-link" target="_blank" rel="noopener noreferrer">WPMU DEV</a>. Besides his awesome day job, he spends the rest of his leisure time in open source development.</span>
								</div>
							</div>
						</div>
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
		excerpt
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
