import { getCollection, getEntry } from "astro:content";

export const publishedPosts = getCollection(
  "blog",
  ({ data }) => !data.draft
).then((posts) =>
  posts.sort((a, b) => b.data.date.getTime() - a.data.date.getTime())
);

export const latestPublishedPostSlug = publishedPosts.then(
  (posts) => posts[0].slug
);

export const latestPublishedPost = getEntry(
  "blog",
  await latestPublishedPostSlug
);
