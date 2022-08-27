import { getAllWordsCount } from "../../../lib/api-calls/supabase/all-words";
import { SetMaxRange } from "../../../lib/zustand-store/usestore-max-range";
import { FetchWordsList } from "../../../lib/zustand-store/usestore-words";
import {
  initialRangeFrom,
  initialRangeTo,
} from "../../WordsList/WordsList.helpers";

export const resetWordsList = async (
  fetchAllWordsList: FetchWordsList,
  setMaxRange: SetMaxRange,
) => {
  try {
    await fetchAllWordsList(initialRangeFrom, initialRangeTo);

    const { count: allWordsCount } = await getAllWordsCount();
    if (allWordsCount) setMaxRange(allWordsCount);
  } catch (error) {
    throw new Error();
  }
};

export const getErrorText = (errorType: WordSearchError) => {
  if (errorType === "input-too-short")
    return "Veuillez entrer plus de 2 caractères.";
  if (errorType === "too-many-results")
    return "Trop de résultats. Veuillez affiner votre recherche.";
  if (errorType === "no-result")
    return "Aucun mot ne correspond à votre recherche.";
  return null;
};

export const isInputTooShort = (input: string) => {
  return input.length < 3;
};

export type WordSearchError =
  | "too-many-results"
  | "no-result"
  | "input-too-short"
  | null;
