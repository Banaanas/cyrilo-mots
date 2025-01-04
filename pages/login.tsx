import { createPagesServerClient } from "@supabase/auth-helpers-nextjs";
import { GetServerSidePropsContext } from "next";
import Head from "next/head";

import { LoginSection } from "../Components/_Pages/LoginPage/LoginSection";
import { StyledPageMain } from "../Components/StyledComponents/StyledPageMain";
import { navLinks } from "../data/navlinks";
import { SEO } from "../SEO/seo-data";

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
  const supabase = createPagesServerClient(context);
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
