import {
  getSearchedWords,
  getSearchedWordsList,
} from "../../lib/api-calls/supabase/search-word";

// Return the Search Words result and the Number of results
export const getWordsSearch = async (
  searchedString: string,
  rangeFrom: number,
  rangeTo: number,
) => {
  const searchedWordsList = await getSearchedWordsList(
    searchedString,
    rangeFrom,
    rangeTo,
  );

  const { count: searchedWordsResultsNumber } = await getSearchedWords(
    searchedString,
    rangeFrom,
    rangeTo,
  );

  return {
    searchedWordsList,
    searchedWordsResultsNumber,
  };
};
