import { create } from "zustand";

import { WordsWithDefList } from "../../types/types";
import { getAllWordsList } from "../api-calls/supabase/all-words";
import { getSearchedWordsList } from "../api-calls/supabase/search-word";
import { getUnreadWordsList } from "../api-calls/supabase/unread-words";

export const useWordsStore = create<State>((set, get) => ({
  wordsList: [],

  // Fetch and Set ALL Words List
  fetchAllWordsList: async (rangeFrom, rangeTo) => {
    try {
      const words = await getAllWordsList(rangeFrom, rangeTo);
      if (!words) return undefined;
      // Set wordsList in Zustand store
      set({ wordsList: words });
      return words;
    } catch {
      throw new Error();
    }
  },

  // Fetch and Set UNREAD Words List
  fetchUnreadWordsList: async (rangeFrom, rangeTo) => {
    try {
      const words = await getUnreadWordsList(rangeFrom, rangeTo);
      if (!words) return undefined;
      // Set wordsList in Zustand store
      set({ wordsList: words });
      return words;
    } catch {
      throw new Error();
    }
  },

  // Fetch and Set SEARCHED Words List
  fetchSearchedWordsList: async (searchedString, rangeFrom, rangeTo) => {
    try {
      const words = await getSearchedWordsList(
        searchedString,
        rangeFrom,
        rangeTo,
      );
      if (!words) return undefined;
      // Set wordsList in Zustand store
      set({ wordsList: words });
      return words;
    } catch {
      throw new Error();
    }
  },

  // Set WordsSearchList
  setWordsList: (wordsList) => set({ wordsList }),

  // Toggle Words's isRead property
  toggleIsWordRead: (wordID) => {
    // Get WordsSearchList from Zustand store
    const { wordsList } = get();

    // Toggle the word which corresponds to the ID in the wordsList Zustand store value
    set({
      wordsList: wordsList.map((word) =>
        word.id === wordID ? { ...word, isRead: !word.isRead } : word,
      ),
    });
  },
}));

interface State {
  wordsList: WordsWithDefList;
  fetchAllWordsList: FetchWordsList;
  fetchUnreadWordsList: FetchWordsList;
  fetchSearchedWordsList: FetchSearchedWordsList;
  setWordsList: (wordsList: WordsWithDefList) => void;
  toggleIsWordRead: (wordID: number) => void;
}

export type FetchWordsList = (
  rangeFrom: number,
  rangeTo: number,
) => Promise<never[] | undefined | WordsWithDefList>;

export type FetchSearchedWordsList = (
  searchedString: string,
  rangeFrom: number,
  rangeTo: number,
) => Promise<never[] | undefined | WordsWithDefList>;
