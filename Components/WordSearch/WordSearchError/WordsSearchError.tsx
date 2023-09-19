import { SearchErrorText } from "../WordsSearch.styles";
import { getErrorText, WordSearchError } from "./WordSearchError.helpers";

const WordsSearchError = ({ searchError }: WordSearchErrorTextProps) => {
  const errorText = getErrorText(searchError);

  if (!searchError) return null;

  return <SearchErrorText>{errorText}</SearchErrorText>;
};

export default WordsSearchError;

interface WordSearchErrorTextProps {
  searchError: WordSearchError;
}
