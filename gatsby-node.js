/**
* Internal dependencies
*/
const _ = require( 'lodash' );
const Promise = require( 'bluebird' );
const path = require( 'path' );
const slash = require( 'slash' );

/**
* Implement the Gatsby API “createPages”
*
* Will create pages for Wordpress pages (route : /{slug})
* Will create pages for Wordpress posts (route : /post/{slug})
*/

exports.createPages = ( {
	graphql,
	actions,
} ) => {

	const {
		createPage,
	} = actions;

	return new Promise( ( resolve, reject ) => {

		/* Posts ( WordPress Native ) */
		graphql(
			`
			{
				allWordpressPost {
					edges {
						node {
							id
							slug
							status
							template
							format
						}
					}
				}
			}
			`,

		).then( ( result ) => {

			if ( result.errors ) {
				console.log( result.errors );
				reject( result.errors );
			}
			const postTemplate = path.resolve('./src/templates/post.js');

			_.each( result.data.allWordpressPost.edges, ( edge ) => {

				createPage( {
					path: `/blog/${ edge.node.slug }`,
					component: slash( postTemplate ),
					context: {
						id: edge.node.id,
					},
				} );
			} );
			resolve();
		} );

	} );
};
