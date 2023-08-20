import { create } from "zustand";

export const useWordsSearchStore = create<State>((set) => ({
  searchedString: "",
  // Set maxRange
  setSearchedString: (searchedString) => set({ searchedString }),
}));

interface State {
  searchedString: string;
  setSearchedString: (searchedString: string) => void;
}
