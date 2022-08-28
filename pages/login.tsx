import { getUser, withPageAuth } from "@supabase/auth-helpers-nextjs";
import { GetServerSideProps } from "next";
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

export const getServerSideProps: GetServerSideProps = withPageAuth({
  authRequired: false,
  async getServerSideProps(context) {
    const { user } = await getUser(context);

    if (user) {
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
  },
});
