module.exports = {
	siteMetadata: {
		title: 'Jude Park',
		description: 'Jude Park is a UX + Inclusion Expert, Researcher of all things fair, and Graduate of Human Computer Interaction',
		siteUrl: "https://judepark.com"
	},
	plugins: [
		'gatsby-plugin-react-helmet',
		'gatsby-plugin-styled-components',
		`gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        `gatsby-plugin-layout`,
		'gatsby-image',
		{
			resolve: 'gatsby-plugin-google-analytics',
			options: {
				trackingId: "UA-60484784-4",
				// Puts tracking script in the head instead of the body
				head: true,
			},
		},
		{
			resolve: 'gatsby-transformer-remark',
			options: {
				plugins: [
					{
						resolve: 'gatsby-remark-images',
						options: {
							maxWidth: 1000,
							backgroundColor: 'transparent'
						}
					},
					`gatsby-remark-responsive-iframe`,
				],
			}
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				path: `${__dirname}/src/pages`,
				name: 'pages',
			},
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				path: `${__dirname}/src/projects`,
				name: 'projects',
			},
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				path: `${__dirname}/src/assets`,
				name: 'img',
			},
		}
	],
}