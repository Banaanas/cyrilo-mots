import create from "zustand";

export const useStoreMaxRange = create<State>((set) => ({
  maxRange: null,
  // Set maxRange
  setMaxRange: (maxRange) => set({ maxRange }),
}));

interface State {
  maxRange: number | null;
  setMaxRange: SetMaxRange;
}

export type SetMaxRange = (maxRange: number) => void;
