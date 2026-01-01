// src/store/slices/notificationsSlice.ts
import type { StateCreator } from "zustand";

export interface Notification {
  id: string;
  message: string;
  read: boolean;
}

export interface NotificationsSlice {
  notifications: Notification[];
  addNotification: (n: Omit<Notification, "read">) => void;
  markAsRead: (id: string) => void;
  clearNotifications: () => void;
}

export const createNotificationsSlice: StateCreator<
  NotificationsSlice,
  [],
  [],
  NotificationsSlice
> = (set) => ({
  notifications: [],
  addNotification: (n) =>
    set((state) => ({
      notifications: [...state.notifications, { ...n, read: false }],
    })),
  markAsRead: (id) =>
    set((state) => ({
      notifications: state.notifications.map((notif: Notification) =>
        notif.id === id ? { ...notif, read: true } : notif
      ),
    })),
  clearNotifications: () => set({ notifications: [] }),
});
