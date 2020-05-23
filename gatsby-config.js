module.exports = {
	siteMetadata: {
		siteUrl: `https://nahid.dev`,
		title: `Nahid Ferdous Mohit`,
		description: `21-year-old self-taught software developer`,
		author: `@nfmohit`
	},

	plugins: [
		`gatsby-plugin-react-helmet`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${ __dirname }/src/images`
			}
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
				icon: `src/images/gatsby-icon.png`
			}
		},
		`gatsby-plugin-sass`
	]
};
