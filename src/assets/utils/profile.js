const year = new Date().getFullYear();

const author = `Arthur Prather, Jr`;
const url = `https://aprather.net`;
const email = `apratherjr@gmail.com`;
const title = `APrather.net`;
const titleAlt = ``;
const description = `The simple gatsby starter with styled-component and flexible path.`;

module.exports = {
	pathPrefix: '/',

	/* Site info */
	title: `${title}`,
	titleAlt: `${titleAlt}`,
	description: `${description}`,
	url: `${url}`,
	email: `${email}`,
	language: 'en',
	favicon: 'src/assets/favicon/icon.png',
	logo: 'src/assets/images/logo.png',
	author: `${author}`,
	copyright: `Copyright © ${year} by, ${author} — All Rights Reserved.`,

	/* Image */
	image: 'src/assets/images/logo.png',
	imageWidth: '1024',
	imageHeight: '482',

	/* Manifest color */
	themeColor: `#949494`,
	bgColor: `#f4f4f4`,

	/* Open Graph */
	ogSiteName: 'N/A',
	ogLanguage: 'en_US',

	/* Social Media Links */
	Twitter: ``,
	Facebook: ``,
	Instagram: ``,
	LinkedIn: ``,
	Github: `https://github.com/aprather51`
};
