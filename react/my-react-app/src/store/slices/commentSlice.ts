// src/store/slices/commentSlice.ts
import type { StateCreator } from "zustand";

export interface Comment {
  id: string;
  fileId: string;
  author: string;
  text: string;
}

export interface CommentSlice {
  comments: Comment[];
  addComment: (comment: Comment) => void;
  getCommentsByFile: (fileId: string) => Comment[];
}

export const createCommentSlice: StateCreator<CommentSlice, [], [], CommentSlice> = (set, get) => ({
  comments: [],
  addComment: (comment) =>
    set((state) => ({
      comments: [...state.comments, comment],
    })),
  getCommentsByFile: (fileId) =>
    get().comments.filter((c) => c.fileId === fileId),
});
