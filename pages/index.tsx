import { withPageAuth } from "@supabase/auth-helpers-nextjs";
import { GetServerSideProps } from "next";
import Head from "next/head";

import StyledPageMain from "../Components/StyledComponents/StyledPageMain";
import WordsList from "../Components/WordsList/WordsList";
import { getUnreadWordsCount } from "../lib/api-calls/supabase/unread-words";
import { useStoreMaxRange } from "../lib/zustand-store/usestore-max-range";
import SEO from "../SEO/seo-data";

const HomePage = ({ maxRange }: { maxRange: number }) => {
  // Store maxRange in store
  const setMaxRange = useStoreMaxRange((state) => state.setMaxRange);
  setMaxRange(maxRange);

  return (
    <>
      <Head>
        <title>{SEO.allWords.title}</title>
      </Head>
      <StyledPageMain justifyContent="start">
        <WordsList listType="unread-words-only" />
      </StyledPageMain>
    </>
  );
};

export default HomePage;

export const getServerSideProps: GetServerSideProps = withPageAuth({
  redirectTo: "/login",
  async getServerSideProps() {
    // Get max range in getServerSideProps to avoid flash content from WordsSeachListPagination, which needs a maxRange prop
    const { count: maxRange } = await getUnreadWordsCount();

    return { props: { maxRange } };
  },
});
