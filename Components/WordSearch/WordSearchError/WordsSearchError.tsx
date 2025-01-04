import { SearchErrorText } from "../WordsSearch.styles";
import { getErrorText, WordSearchError } from "./WordSearchError.helpers";

export const WordsSearchError = ({ searchError }: WordSearchErrorTextProps) => {
  const errorText = getErrorText(searchError);

  if (!searchError) return null;

  return <SearchErrorText>{errorText}</SearchErrorText>;
};

interface WordSearchErrorTextProps {
  searchError: WordSearchError;
}
