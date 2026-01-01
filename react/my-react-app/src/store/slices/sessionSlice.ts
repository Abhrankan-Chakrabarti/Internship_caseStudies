// src/store/slices/sessionSlice.ts
export type Role = "admin" | "user";

export interface SessionSlice {
  userId: string | null;
  token: string | null;
  expiresAt: number | null;
  role: Role;
  setSession: (payload: { userId: string; token: string; expiresAt: number; role?: Role }) => void;
  clearSession: () => void;
}

// Just a function that returns the slice object
export const createSessionSlice = (set: any, _get: any, _api: any): SessionSlice => ({
  userId: null,
  token: null,
  expiresAt: null,
  role: "user",
  setSession: ({ userId, token, expiresAt, role }) =>
    set((draft: SessionSlice) => {
      draft.userId = userId;
      draft.token = token;
      draft.expiresAt = expiresAt;
      draft.role = role ?? "user";
    }),
  clearSession: () =>
    set((draft: SessionSlice) => {
      draft.userId = null;
      draft.token = null;
      draft.expiresAt = null;
      draft.role = "user";
    }),
});
