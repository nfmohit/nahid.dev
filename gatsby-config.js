// Get values for .env variables
require( 'dotenv' ).config( {
	path: '.env',
} );

module.exports = {

	siteMetadata: {
		title: `Nahid Ferdous Mohit`,
		description: `WordPress Sorcerer & Web Interface Developer`,
		author: `@nfmohit`,
	},

	plugins: [
		`gatsby-plugin-react-helmet`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`,
			},
		},
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `gatsby-starter-default`,
				short_name: `starter`,
				start_url: `/`,
				background_color: `#663399`,
				theme_color: `#663399`,
				display: `minimal-ui`,
				icon: `src/images/gatsby-icon.png`,
			},
		},
		`gatsby-image`,
		`gatsby-plugin-sharp`,
		`gatsby-transformer-sharp`,
		{
			resolve: `gatsby-source-wordpress`,
			options: {
				baseUrl: process.env.SOURCE_SITE,
				protocol: 'https',
				hostingWPCOM: false,
				useACF: false,
				searchAndReplaceContentUrls: {
					sourceUrl: 'https://' + process.env.SOURCE_SITE,
					replacementUrl: 'https://nahid.dev',
				},
				includedRoutes: [
					"**/categories",
					"**/posts",
					"**/pages",
					"**/media",
					"**/tags",
					"**/taxonomies",
					"**/users",
					"**/projects",
				],
			},
		},
		`gatsby-plugin-sass`,
	],
}
