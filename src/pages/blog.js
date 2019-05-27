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

const Blog = () => (

	<StaticQuery
		query=
			{ graphql`
				query BlogAllPostQuery {
					allWordpressPost(sort: { fields: [date], order:DESC }) {
						edges {
							node {
								date(formatString: "DD, MMM YYYY")
								title
								excerpt
								author{
									name
								}
								categories {
									id
									name
								}
								featured_media{
									localFile{
										childImageSharp{
											id
											sizes( maxWidth: 1000 ) {
												...GatsbyImageSharpSizes
											}
										}
									}
								}
								slug
							}
						}
					}
				}
			`}

		render={ data => (
			<Layout>
				<SEO title="Blog" keywords={ [ `gatsby`, `application`, `react` ] } />
				<div className="container">
					<div className="row">
						<div className="blog-grids">
							{ data.allWordpressPost.edges.map( ( { node } ) => (
								<div key={ node.slug } className="grid">
									<div className="entry-body">
										<span className="cat">{ node.categories && node.categories.map( category => `${ category.name } `) }</span>
										<h3><Link to={ `/blog/${ node.slug }` } dangerouslySetInnerHTML={ { __html: node.title } } /></h3>
										<p dangerouslySetInnerHTML={ { __html: node.excerpt } } />
										<div className="read-more-date">
											<span className="date">{ node.date }</span>
										</div>
									</div>
								</div>
							) ) }
						</div>
					</div>
				</div>
			</Layout>)
		}
	/>
);

export default Blog;
