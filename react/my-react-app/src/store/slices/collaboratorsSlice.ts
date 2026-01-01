// src/store/slices/collaboratorsSlice.ts
import type { StateCreator } from "zustand";

export interface Collaborator {
  id: string;
  name: string;
  email?: string;
}

export interface CollaboratorsSlice {
  collaborators: Collaborator[];
  setCollaborators: (list: Collaborator[]) => void;
  clearCollaborators: () => void;
}

export const createCollaboratorsSlice: StateCreator<
  CollaboratorsSlice,
  [["zustand/immer", never]],
  [],
  CollaboratorsSlice
> = (set) => ({
  collaborators: [],
  setCollaborators: (list) =>
    set((draft) => {
      draft.collaborators = list;
    }),
  clearCollaborators: () =>
    set((draft) => {
      draft.collaborators = [];
    }),
});
