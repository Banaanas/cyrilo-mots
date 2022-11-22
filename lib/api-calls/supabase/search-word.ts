import { Word } from "../../../types/types";
import { getWordsWithDefinitions } from "../wiktionary/words-with-definition";
import { supabaseClient } from "./supabase-client";

// Fetch FILTERED Word(s) from Supabase
export const getSearchedWords = async (
  searchedString: string,
  rangeFrom: number,
  rangeTo: number,
) => {
  const {
    data: words,
    error,
    count,
  } = await supabaseClient
    .from("words")
    .select("*", { count: "exact" })
    .ilike("word", `%${searchedString}%`)
    .range(rangeFrom, rangeTo)
    .order("id", { ascending: true });

  return { words, error, count };
};

// Return SEARCHED WordsSearchList with DEFINITIONS
export const getSearchedWordsList = async (
  searchedString: string,
  rangeFrom: number,
  rangeTo: number,
) => {
  // Get UNREAD Words with Supabase
  const { words, error } = await getSearchedWords(
    searchedString,
    rangeFrom,
    rangeTo,
  );
  if (error) throw new Error();

  if (!words) return error;

  // Get Wiktionary definition for each word and add it in the Word object
  const wordsWithDefs = await getWordsWithDefinitions(words as Array<Word>);
  return wordsWithDefs;
};
