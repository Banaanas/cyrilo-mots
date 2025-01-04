import { createPagesServerClient } from "@supabase/auth-helpers-nextjs";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import Head from "next/head";

import { StyledPageMain } from "../Components/StyledComponents/StyledPageMain";
import { WordsList } from "../Components/WordsList/WordsList";
import { navLinks } from "../data/navlinks";
import { getAllWordsCount } from "../lib/api-calls/supabase/all-words";
import { useMaxRangeStore } from "../lib/zustand-store/useMaxRangeStore";
import { SEO } from "../SEO/seo-data";

const AllWordsPage = ({ maxRange }: { maxRange: number }) => {
  // Store maxRange in store
  const setMaxRange = useMaxRangeStore((state) => state.setMaxRange);
  setMaxRange(maxRange);

  return (
    <>
      <Head>
        <title>{SEO.allWords.title}</title>
      </Head>
      <StyledPageMain justifyContent="start">
        <WordsList listType="all-words" />
      </StyledPageMain>
    </>
  );
};

export default AllWordsPage;

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext,
) => {
  // Create authenticated Supabase Client
  const supabase = createPagesServerClient(context);
  // Check if we have a session
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session)
    return {
      redirect: {
        destination: navLinks.login.href,
        permanent: false,
      },
    };

  // Max Range for ALL WORDS
  const { count: maxRange } = await getAllWordsCount();
  return { props: { maxRange } };
};
