type PageMeta = {
  title: string;
  description?: string;
  canonicalUrl?: string;
};

type PageOgMeta = {
  title: string; // page title
  description?: string; // page description
  type: "website";
  url?: string; // site URL
  image?: string; // preview image
  imageAlt?: string; // alt text for preview image
  imageWidth?: string; // preview image width - 1200px standard
  imageHeight?: string; // preview image height - 627px standard
};


type BlogPostOgMeta = {
  title: string; // page title
  description?: string; // page description
  type: "article";
  url?: string; // blog post url
  author?: string; // post author name
  // siteName?: string; // page title
  publishDate: string; // ISO string
  image?: string; // preview image
  imageAlt?: string; // alt text for preview image
  imageWidth?: string; // preview image width - 1200px standard
  imageHeight?: string; // preview image height - 627px standard
};



export function getPageMeta({
  title: pageTitle,
  description,
  baseUrl,
  ogImageAbsoluteUrl,
  ogImageAltText,
  ogImageWidth,
  ogImageHeight,

}: {
  title: string;
  description: string;
  baseUrl?: string;
  ogImageAbsoluteUrl?: string; // should always be absolute
  ogImageAltText?: string;
  ogImageWidth?: number;
  ogImageHeight?: number;

}): { meta: PageMeta; og: PageOgMeta;  } {
  if (!pageTitle) {
    throw Error("title is required for page SEO");
  }
  if (ogImageAbsoluteUrl) {
    ogImageAltText = !ogImageAltText
      ? `Preview image for ${pageTitle}`
      : ogImageAltText;
    // ogImageWidth = !ogImageWidth ? 1200 : ogImageWidth;
    // ogImageHeight = !ogImageHeight ? 627 : ogImageHeight;
  }

  const meta: PageMeta = { title: pageTitle, description: description };

  const og: PageOgMeta = {
    title: pageTitle,
    description: description,
    type: "website",
    url: baseUrl,
    image: ogImageAbsoluteUrl,
    imageAlt: ogImageAltText,
    imageWidth: ogImageWidth ? String(ogImageWidth) : undefined,
    imageHeight: ogImageHeight ? String(ogImageHeight) : undefined,
  };



  return {
    meta,
    og,
  };
}

export function getBlogPostMeta({
  title: pageTitle,
  description,
  canonicalUrl,
  pageUrl,
  authorName,
  publishDate,
  ogImageAbsoluteUrl,
  ogImageAltText,
  ogImageWidth,
  ogImageHeight,

}: {
  title: string;
  description: string;
  canonicalUrl?: string;
  pageUrl?: string;
  authorName?: string;
  publishDate: string;
  ogImageAbsoluteUrl?: string; // should always be absolute
  ogImageAltText?: string;
  ogImageWidth?: number;
  ogImageHeight?: number;

}): { meta: PageMeta; og: BlogPostOgMeta;  } {
  if (!pageTitle) {
    throw Error("title is required for page SEO");
  }
  if (ogImageAbsoluteUrl && !ogImageAltText) {
    ogImageAltText = `Preview image for ${pageTitle}`;
  }

  const meta: PageMeta = {
    title: pageTitle,
    description: description,
    canonicalUrl,
  };

  const og: BlogPostOgMeta = {
    title: pageTitle,
    description: description,
    type: "article",
    url: pageUrl,
    author: authorName,
    publishDate: publishDate,
    image: ogImageAbsoluteUrl,
    imageAlt: ogImageAltText,
    imageWidth: ogImageWidth ? String(ogImageWidth) : undefined,
    imageHeight: ogImageHeight ? String(ogImageHeight) : undefined,
  };


  return {
    meta,
    og,
  };
}
