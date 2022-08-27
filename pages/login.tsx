import { useUser } from "@supabase/auth-helpers-react";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";

import LoginSection from "../Components/_Pages/LoginPage/LoginSection";
import Loader from "../Components/Common/Loader";
import StyledPageMain from "../Components/StyledComponents/StyledPageMain";
import { navLinks } from "../data/navlinks";
import SEO from "../SEO/seo-data";

// https://github.com/supabase/supabase/discussions/6731#discussioncomment-2731060
// For Magic Link, it's NOT possible to get user's JWT on SSR after the user has signed in using the magic link
// That's why, client side authentication is used here

const LoginPage = () => {
  const router = useRouter();

  const { user, isLoading } = useUser();

  if (user) {
    // eslint-disable-next-line no-void
    void router.push(navLinks.home.href);
  }

  // LoginForm
  if (!isLoading && !user) {
    return (
      <>
        <Head>
          <title>{SEO.login.title}</title>
        </Head>
        <StyledPageMain justifyContent="space-between">
          <LoginSection />
        </StyledPageMain>
      </>
    );
  }

  // Loader
  return (
    <>
      <Head>
        <title>{SEO.login.title}</title>
      </Head>
      <StyledPageMain justifyContent="center">
        <Loader />
      </StyledPageMain>
    </>
  );
};

export default LoginPage;

// https://github.com/supabase/supabase/discussions/6731#discussioncomment-2731060
// For Magic Link, it's NOT possible to get user's JWT on SSR after the user has signed in using the magic link
// That's why, client side authentication is used here
