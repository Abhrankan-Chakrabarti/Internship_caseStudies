// src/store/slices/fileSlice.ts
import type { StateCreator } from "zustand";

export interface File {
  id: string;
  name: string;
  content: string;
}

export interface FileSlice {
  files: File[];
  addFile: (file: File) => void;
  updateFile: (id: string, content: string) => void;
}

export const createFileSlice: StateCreator<FileSlice, [], [], FileSlice> = (set) => ({
  files: [],
  addFile: (file) =>
    set((state) => ({
      files: [...state.files, file],
    })),
  updateFile: (id, content) =>
    set((state) => ({
      files: state.files.map((f) =>
        f.id === id ? { ...f, content } : f
      ),
    })),
});
