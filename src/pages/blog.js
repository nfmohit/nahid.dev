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

const Blog = () => (

	<StaticQuery
		query=
			{ graphql`
				query BlogAllPostQuery {
					allWordpressPost(sort: { fields: [date], order:DESC }) {
						edges {
							node {
								date(formatString: "DD MMM YYYY")
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
				<Helmet
					bodyAttributes={{
				        class: 'blog'
				    }}
				/>
				<div className="container">
					<div className="page-intro">
						<h2>Blog</h2>
						<h6>Writings where I share insights and opinions</h6>
					</div>
					{ data.allWordpressPost.edges.map( ( { node } ) => (
						<div className="entry-body">
							<span className={ node.categories && node.categories.map( category => `category ${ category.slug }`) }>{ node.categories && node.categories.map( category => `${ category.name } `) }</span>
							<h3 className="entry-title"><Link to={ `/blog/${ node.slug }` } dangerouslySetInnerHTML={ { __html: node.title } } /></h3>
							<span className="entry-excerpt"><div dangerouslySetInnerHTML={ { __html: node.excerpt } } /></span>
							<span className="date">{ node.date }</span>
						</div>
					) ) }
				</div>
			</Layout>)
		}
	/>
);

export default Blog;
