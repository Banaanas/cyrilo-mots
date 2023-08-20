import styled from "@emotion/styled";
import { useEffect } from "react";

import { useMaxRangeStore } from "../../lib/zustand-store/useMaxRangeStore";
import { useStoreWordsAccordionLoading } from "../../lib/zustand-store/useWordsAccordionStore";
import { useWordsSearchStore } from "../../lib/zustand-store/useWordsSearchStore";
import { useWordsStore } from "../../lib/zustand-store/useWordsStore";
import appTheme from "../../styles/appTheme";
import WordsSearch from "../WordSearch/WordsSearch";
import WordsAccordion from "./WordsAccordion";
import {
  getPagesCount,
  getPagination,
  initialRangeFrom,
  initialRangeTo,
} from "./WordsList.helpers";
import WordsListPagination from "./WordsListPagination";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  row-gap: 24px;
  width: 100%;
  height: 100%;
  flex-grow: 1;
  margin-top: 12px;

  @media ${appTheme.queries.tabletAndUp} {
    margin-top: 48px;
  }
`;

const WordsList = ({ listType }: WordsListProps) => {
  const searchedString = useWordsSearchStore((state) => state.searchedString);
  const fetchSearchedWordsList = useWordsStore(
    (state) => state.fetchSearchedWordsList,
  );
  const fetchAllWordsList = useWordsStore((state) => state.fetchAllWordsList);
  const fetchUnreadWordsList = useWordsStore(
    (state) => state.fetchUnreadWordsList,
  );

  const maxRange = useMaxRangeStore((state) => state.maxRange);

  const pagesCount = getPagesCount(maxRange);

  const setWordsAccordionState = useStoreWordsAccordionLoading(
    (state) => state.setWordsAccordionState,
  );

  // Fetch wordsList - All Words | Unread Words Only
  const fetchAsyncData = async (fromRange: number, toRange: number) => {
    try {
      setWordsAccordionState("loading");

      if (searchedString)
        await fetchSearchedWordsList(searchedString, fromRange, toRange);

      if (listType === "all-words" && !searchedString)
        await fetchAllWordsList(fromRange, toRange);

      // Search Bar does NOT appear on unread-words-only WordsList
      if (listType === "unread-words-only")
        await fetchUnreadWordsList(fromRange, toRange);

      setWordsAccordionState("normal");
    } catch (error) {
      throw new Error();
    }
  };

  // Function for WordsSearchListPagination Pagination Component
  // Runs when click on Pagination Links / Page Change
  const onPageChange = async ({
    selected: currentPage,
  }: {
    selected: number;
  }) => {
    // Get Pagination / Range
    const rangeObject = getPagination(currentPage, maxRange);
    if (!rangeObject) return;
    const { rangeFrom, rangeTo } = rangeObject;

    try {
      // Fetch wordsList
      await fetchAsyncData(rangeFrom, rangeTo);
    } catch (error) {
      throw new Error();
    }
  };

  useEffect(() => {
    // eslint-disable-next-line no-void
    void fetchAsyncData(initialRangeFrom, initialRangeTo);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      {listType === "all-words" ? <WordsSearch /> : null}
      <WordsListPagination onPageChange={onPageChange} pageCount={pagesCount} />
      <WordsAccordion />
    </Container>
  );
};

export default WordsList;

interface WordsListProps {
  listType: "all-words" | "unread-words-only";
}
