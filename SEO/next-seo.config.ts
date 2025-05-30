import { DefaultSeoProps } from "next-seo";

/* Default SEO - All Pages */
/* Each Page has its own personalized SEO at the Head Component */

export const DefaultSEO: DefaultSeoProps = {
  // All pages are NOT indexed
  dangerouslySetAllPagesToNoIndex: true,
};
