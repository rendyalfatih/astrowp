export const SITE = {
	name: 'AstroWP',

	origin: 'http://localhost:3000',
	basePathname: '/',
	trailingSlash: false,

	title: 'AstroWP — Your website with Astro + Tailwind CSS',
	description: '🚀 AstroWP is a free and ready to start template to make your website using Astro and Tailwind CSS.',

	googleAnalyticsId: false, // or "G-XXXXXXXXXX",
	googleSiteVerificationId: 'orcPxI47GSa-cRvY11tUe6iGg2IO_RPvnA1q95iEM3M',
};

export const BLOG = {
	disabled: false,
	postsPerPage: 4,

	blog: {
		disabled: false,
		pathname: 'post',
	},

	page: {
		disabled: false,
		pathname: '',
	},

	category: {
		disabled: false,
		pathname: 'category',
	},

	tag: {
		disabled: false,
		pathname: 'tag',
	},
};
