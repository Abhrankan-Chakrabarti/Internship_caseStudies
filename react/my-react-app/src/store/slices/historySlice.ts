// src/store/slices/historySlice.ts
import type { StateCreator } from "zustand";

export interface HistoryEntry {
  noteId: string;
  action: string;
  timestamp: number;
}

export interface HistorySlice {
  history: HistoryEntry[];
  addHistoryEntry: (entry: HistoryEntry) => void;
  clearHistory: () => void;
}

export const createHistorySlice: StateCreator<
  HistorySlice,
  [["zustand/immer", never]],
  [],
  HistorySlice
> = (set) => ({
  history: [],
  addHistoryEntry: (entry) =>
    set((draft) => {
      draft.history.push(entry);
    }),
  clearHistory: () =>
    set((draft) => {
      draft.history = [];
    }),
});
