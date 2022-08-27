import { Word } from "../../../types/types";
import { getWiktionaryDefinitions } from "./get-wiktionary-definitions";

// Add Definition to all words list for each one of them
export const getWordsWithDefinitions = async (words: Array<Word>) => {
  const wordsWithDefs = await Promise.all(
    words.map(async (word) => {
      const wordDefs = await getWiktionaryDefinitions(word.word);

      return { ...word, wiktionaryDefinitions: wordDefs };
    }),
  );

  return wordsWithDefs;
};
