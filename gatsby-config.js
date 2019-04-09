const profile = require('./src/assets/utils/profile');
const pathPrefix = profile.pathPrefix === '/' ? '' : profile.pathPrefix;

module.exports = {
	pathPrefix: profile.path,
	siteMetadata: {
		title: profile.title,
		description: profile.description,
		author: profile.author,
		copyright: profile.copyright
	},
	plugins: [
		`gatsby-plugin-react-helmet`,
		`gatsby-plugin-resolve-src`,
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		{
			/* Images */
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/assets/images`
			}
		},
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: profile.title,
				short_name: profile.titleAlt,
				start_url: profile.pathPrefix,
				background_color: profile.bgColor,
				theme_color: profile.themeColor,
				display: `minimal-ui`,
				icon: profile.favicon
			}
		}
	]
};
