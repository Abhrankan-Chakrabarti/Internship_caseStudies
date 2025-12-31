// src/store/notificationStore.ts
import { create } from "zustand";

export interface Notification {
  id: string;
  message: string;
  type: "info" | "error" | "success";
  read: boolean;
}

interface NotificationStore {
  notifications: Notification[];
  addNotification: (n: Omit<Notification, "read">) => void;
  markAsRead: (id: string) => void;
  clearNotifications: () => void;
}

const useNotificationStore = create<NotificationStore>((set) => ({
  notifications: [],
  addNotification: (n) =>
    set((state) => ({
      notifications: [...state.notifications, { ...n, read: false }],
    })),
  markAsRead: (id) =>
    set((state) => ({
      notifications: state.notifications.map((notif) =>
        notif.id === id ? { ...notif, read: true } : notif
      ),
    })),
  clearNotifications: () => set({ notifications: [] }),
}));

export default useNotificationStore;
