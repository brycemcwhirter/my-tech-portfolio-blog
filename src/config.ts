// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = "Bryce McWhirter Tech Portfolio";
export const SITE_DESCRIPTION =
  "My Tech Portfolio and Blog";
export const TWITTER_HANDLE = "@iamnotontwitter";
export const MY_NAME = "Bryce McWhirter";

// setup in astro.config.mjs
const BASE_URL = new URL(import.meta.env.SITE);
export const SITE_URL = BASE_URL.origin;
