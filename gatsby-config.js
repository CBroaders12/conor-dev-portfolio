require('dotenv').config();

module.exports = {
	siteMetadata: {
		siteUrl: 'https://www.yourdomain.tld',
		title: 'Conor Dev Portfolio',
	},
	plugins: [
		{
			resolve: 'gatsby-source-contentful',
			options: {
				accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
				spaceId: '6i4nt0aquy0a',
			},
		},
		{
			resolve: 'gatsby-theme-material-ui',
		},
		`gatsby-transformer-remark`,
	],
};
