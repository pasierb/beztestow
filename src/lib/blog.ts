import { getCollection } from "astro:content";

export const publishedPosts = await getCollection("blog", ({ data }) => !data.draft)
    .then(posts => posts.sort((a, b) => a.data.date - b.data.date));

export const latestPublishedPost = (await publishedPosts)[0];
