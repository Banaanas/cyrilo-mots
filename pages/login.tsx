import { createServerSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { GetServerSidePropsContext } from "next";
import Head from "next/head";
import React from "react";

import LoginSection from "../Components/_Pages/LoginPage/LoginSection";
import StyledPageMain from "../Components/StyledComponents/StyledPageMain";
import { navLinks } from "../data/navlinks";
import SEO from "../SEO/seo-data";

const LoginPage = () => {
  return (
    <>
      <Head>
        <title>{SEO.login.title}</title>
      </Head>
      <StyledPageMain justifyContent="center">
        <LoginSection />
      </StyledPageMain>
    </>
  );
};

export default LoginPage;

export const getServerSideProps = async (
  context: GetServerSidePropsContext,
) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const supabase = createServerSupabaseClient(context);
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (session) {
    return {
      redirect: {
        destination: navLinks.home.href,
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};
