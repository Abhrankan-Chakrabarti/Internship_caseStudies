import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

import { createSessionSlice } from "./slices/sessionSlice";
import type { SessionSlice } from "./slices/sessionSlice";

import { createHistorySlice } from "./slices/historySlice";
import type { HistorySlice } from "./slices/historySlice";

import { createCollaboratorsSlice } from "./slices/collaboratorsSlice";
import type { CollaboratorsSlice } from "./slices/collaboratorsSlice";

type AppStore = SessionSlice & HistorySlice & CollaboratorsSlice;

// Each slice factory is just a plain function returning its slice object.
// We spread them together into AppStore.
const storeCreator = (set: any, get: any, api: any): AppStore => ({
  ...createSessionSlice(set, get, api),
  ...createHistorySlice(set, get, api),
  ...createCollaboratorsSlice(set, get, api),
});

export const useAppStore = create<AppStore>()(
  devtools(
    persist(immer(storeCreator), {
      name: "app-session",
      version: 2,
      // Persist only userId and token (not expiresAt). role is added via migration.
      partialize: (state) => ({
        userId: state.userId,
        token: state.token,
      }),
      migrate: (persisted, version) => {
        // Add role default in v2 if missing
        if (version < 2) {
          return { role: "user", ...(persisted as object) } as AppStore;
        }
        const next = persisted as Partial<AppStore>;
        if (!("role" in next)) next.role = "user";
        return next as AppStore;
      },
    })
  )
);
