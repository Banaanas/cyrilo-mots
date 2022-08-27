import { supabaseClient } from "@supabase/auth-helpers-nextjs";

import { Word } from "../../../types/types";
import { getWordsWithDefinitions } from "../wiktionary/words-with-definition";

// Fetch all Words from Supabase
export const getAllWords = async (rangeFrom: number, rangeTo: number) => {
  const {
    data: words,
    error,
    count,
  } = await supabaseClient
    .from<Word>("words")
    .select("*")
    .range(rangeFrom, rangeTo)
    .order("id", { ascending: true });

  return { words, error, count };
};

// Get Words table total count
export const getAllWordsCount = async () => {
  const { count } = await supabaseClient
    .from<Word>("words")
    .select("*", { count: "exact" });

  return { count };
};

// Return WordsSearchList with DEFINITIONS
export const getAllWordsList = async (rangeFrom: number, rangeTo: number) => {
  // Get Words with Supabase
  const { words, error } = await getAllWords(rangeFrom, rangeTo);
  if (error) throw new Error();

  if (!words) return error;

  // Get Wiktionary definition for each word and add it in the Word object
  const wordsWithDefs = await getWordsWithDefinitions(words);
  return wordsWithDefs;
};
