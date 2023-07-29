import rss from "@astrojs/rss";
import { SITE_TITLE, SITE_DESCRIPTION, SITE_URL } from "../config";
import { publishedPosts } from "../lib/blog";

export const get = async () => {
  const posts = await publishedPosts;
  let baseUrl = SITE_URL;
  // removing trailing slash if found
  // https://example.com/ => https://example.com
  baseUrl = baseUrl.replace(/\/+$/g, "");

  const rssItems = posts.map(({ slug, data}) => {
    const title = data.title;
    const pubDate = data.date;
    const description = data.description;
    const link = `${baseUrl}/blog/${slug}`;

    return {
      title,
      pubDate,
      description,
      link,
    };
  });

  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: baseUrl,
    items: rssItems,
  });
};
