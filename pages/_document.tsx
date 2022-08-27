import { Head, Html, Main, NextScript } from "next/document";

const Document = () => {
  /* <Html/> default lang="en" attribute has been removed.
   * Next.js automatically add the lang attribute to the <html> tag. */
  return (
    <Html>
      <Head>
        <meta charSet="utf-8" />
        {/* Fonts Preload */}
        <link
          rel="preload"
          href="/fonts/Montserrat.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/OpenSans-Regular.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        {/* Favicon */}
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/assets/favicons/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/assets/favicons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/assets/favicons/favicon-16x16.png"
        />
        <link
          rel="mask-icon"
          href="/assets/favicons/safari-pinned-tab.svg"
          color="#5bbad5"
        />
        <link rel="manifest" href="/assets/favicons/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#cddae9" />
        <meta name="theme-color" content="#cddae9" />
        <link rel="manifest" href="/assets/favicons/site.webmanifest" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
