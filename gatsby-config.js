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
				name: `nahid-ferdous-mohit`,
				short_name: `nahid`,
				start_url: `/`,
				background_color: `#000000`,
				theme_color: `#5651ff`,
				display: `minimal-ui`,
				icon: `src/images/favicon.png`,
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
				auth: {
					htaccess_user: process.env.HTACCESS_USER,
					htaccess_pass: process.env.HTACCESS_PASS,
					htaccess_sendImmediately: false,
				},
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
					"**/project",
				],
			},
		},
		`gatsby-plugin-sass`,
	],
}
