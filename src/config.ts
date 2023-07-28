// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = '!Bez testów';
export const SITE_DESCRIPTION =
  'Jak deploy to tylko w piątek. Jak testy to tylko na produkcji.';
export const TWITTER_HANDLE = '@BezTestow';
export const MY_NAME = '!Bez testów';

// setup in astro.config.mjs
const BASE_URL = new URL(import.meta.env.SITE);
export const SITE_URL = BASE_URL.origin;
export const DATETIME_LOCALE = 'pl-pl';
