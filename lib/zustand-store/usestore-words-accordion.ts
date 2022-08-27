import create from "zustand";

export const useStoreWordsAccordionLoading = create<State>((set) => ({
  wordsAccordionState: "normal",
  // Set Words Accordion state
  setWordsAccordionState: (wordsAccordionState) => set({ wordsAccordionState }),
}));

interface State {
  wordsAccordionState: WordAccordionState;
  setWordsAccordionState: (wordAccordionState: WordAccordionState) => void;
}

export type WordAccordionState = "normal" | "loading" | "not-rendered";
