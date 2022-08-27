import { supabaseClient } from "@supabase/auth-helpers-nextjs";

import { Word } from "../../../types/types";
import { getWordsWithDefinitions } from "../wiktionary/words-with-definition";

// Fetch all UNREAD Words from Supabase
export const getUnreadWords = async (rangeFrom: number, rangeTo: number) => {
  const {
    data: words,
    error,
    count,
  } = await supabaseClient
    .from<Word>("words")
    .select("*")
    .limit(10)
    .range(rangeFrom, rangeTo)
    .eq("isRead", false)
    .order("id", { ascending: true });

  return { words, error, count };
};

// Get UNREAD Words table total count
export const getUnreadWordsCount = async () => {
  const { count } = await supabaseClient
    .from<Word>("words")
    .select("*", { count: "exact" })
    .eq("isRead", false);
  return { count };
};

// Return UNREAD WordsSearchList with DEFINITIONS
export const getUnreadWordsList = async (
  rangeFrom: number,
  rangeTo: number,
) => {
  // Get UNREAD Words with Supabase
  const { words, error } = await getUnreadWords(rangeFrom, rangeTo);
  if (error) throw new Error();

  if (!words) return error;

  // Get Wiktionary definition for each word and add it in the Word object
  const wordsWithDefs = await getWordsWithDefinitions(words);
  return wordsWithDefs;
};
