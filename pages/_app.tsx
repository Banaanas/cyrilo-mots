import "../styles/normalize.css"; // Next.js authorizes Normalize.css (Global CSS) to be imported ONLY from _app.js

import { supabaseClient } from "@supabase/auth-helpers-nextjs";
import { UserProvider } from "@supabase/auth-helpers-react";
import type { AppProps } from "next/app";
import { DefaultSeo } from "next-seo";
import React from "react";

import Layout from "../Components/Layout/Layout";
import DefaultSEO from "../SEO/next-seo.config";
import getReactAxe from "../utils/get-react-axe";

// Add React Axe in Development Mode

if (typeof window !== "undefined" && process.env.NODE_ENV !== "production") {
  // eslint-disable-next-line no-void
  void getReactAxe();
}

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <DefaultSeo {...DefaultSEO} />
      <UserProvider supabaseClient={supabaseClient}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </UserProvider>
    </>
  );
};

export default App;
