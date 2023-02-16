import WPAPI from 'wpapi';
process.env.NODE_TLS_REJECT_UNAUTHORIZED = import.meta.env.NODE_TLS_REJECT_UNAUTHORIZED || 1;
export const WP_HOST = import.meta.env.WP_HOST;
export const WP_USERNAME = import.meta.env.WP_USERNAME;
export const WP_PASSWORD = import.meta.env.WP_PASSWORD;
export const WP_JSON = WP_HOST + '/wp-json';
export const WP_JSON_CORE = WP_JSON + '/wp/v2';
export const astroWp = new WPAPI({ endpoint: WP_JSON, username: WP_USERNAME, password: WP_PASSWORD });
astroWp.menu = astroWp.registerRoute('astrowp/v1', '/menu/(?P<id>)');

export const wpapi = astroWp;
export const getPosts = async () => {
	return await fetch(WP_JSON_CORE + '/posts');
};
export const getPostBySlug = async (slug) => {
	return await fetch(WP_JSON_CORE + '/posts?slug=' + slug);
};
