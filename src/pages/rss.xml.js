import rss from '@astrojs/rss';

import { SITE, BLOG } from '~/config.mjs';
import { wpapi } from '~/apis/wp-core/posts';

export const get = async () => {
	if (BLOG.disabled) {
		return new Response(null, {
			status: 404,
			statusText: 'Not found',
		});
	}

	const posts = await wpapi.posts();
	// console.log("posts ", posts[0])
	return rss({
		title: `${SITE.name}’s Blog`,
		description: SITE.description,
		site: import.meta.env.SITE,

		items: posts.map((post) => ({
			link: "/post/"+post.slug,
			title: post.title.rendered,
			description: post.content.rendered,
			pubDate: post.date,
		})),
	});
};
