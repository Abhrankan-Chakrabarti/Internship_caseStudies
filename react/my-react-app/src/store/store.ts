// src/store/store.ts
import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import type { StateCreator } from "zustand";

import { createUserSlice } from "./slices/userSlice";
import type { UserSlice } from "./slices/userSlice";

import { createFileSlice } from "./slices/fileSlice";
import type { FileSlice } from "./slices/fileSlice";

import { createCommentSlice } from "./slices/commentSlice";
import type { CommentSlice } from "./slices/commentSlice";

import { createNotificationsSlice } from "./slices/notificationsSlice";
import type { NotificationsSlice } from "./slices/notificationsSlice";

type DesignHubStore = UserSlice & FileSlice & CommentSlice & NotificationsSlice;

// Explicitly type the StateCreator with the middleware mutators:
// - 'zustand/devtools' then 'zustand/persist'
const storeCreator: StateCreator<
  DesignHubStore,
  [["zustand/devtools", never], ["zustand/persist", unknown]],
  [],
  DesignHubStore
> = (set, get, store) => ({
  ...createUserSlice(set, get, store),
  ...createFileSlice(set, get, store),
  ...createCommentSlice(set, get, store),
  ...createNotificationsSlice(set, get, store),
});

export const useDesignHubStore = create<DesignHubStore>()(
  devtools(
    persist(storeCreator, { name: "designhub-store" })
  )
);
