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
* Will create pages for Wordpress posts (route : /{slug})
* Will create pages for Wordpress projects (route : /{slug})
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
					        title
					        content
					        excerpt
					        date
							modified
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

		/* Pages ( WordPress Native ) */
		graphql(
			`
			{
				allWordpressPage {
					edges {
						node {
							id
					        title
					        content
					        excerpt
					        date
					        modified
					        slug
					        status
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
			const pageTemplate = path.resolve('./src/templates/page.js');

			_.each( result.data.allWordpressPage.edges, ( edge ) => {

				createPage( {
					path: edge.node.slug,
					component: slash( pageTemplate ),
					context: {
						id: edge.node.id,
					},
				} );
			} );
			resolve();
		} );

		/* Projects ( Custom Post Type ) */
		graphql(
			`
			{
				allWordpressWpProject {
					edges {
						node {
							id
					        slug
					        title
					        content
							excerpt
							menu_order
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
			const postTemplate = path.resolve('./src/templates/project.js');

			_.each( result.data.allWordpressWpProject.edges, ( edge ) => {

				createPage( {
					path: `/project/${ edge.node.slug }`,
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

/**
* Prevent bootstrap from conflicting during build process
*/

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === "build-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /bootstrap/,
            use: loaders.null(),
          },
        ],
      },
    })
  }
}
