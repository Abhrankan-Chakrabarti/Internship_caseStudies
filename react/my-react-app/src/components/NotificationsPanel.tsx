// src/components/NotificationsPanel.tsx
import React from "react";
import { useDesignHubStore } from "../store/store";
import type { Notification } from "../store/slices/notificationsSlice";

const NotificationsPanel: React.FC = () => {
  const notifications = useDesignHubStore((s) => s.notifications);
  const markAsRead = useDesignHubStore((s) => s.markAsRead);
  const clearNotifications = useDesignHubStore((s) => s.clearNotifications);

  // Explicitly type the parameter as Notification
  const unread = notifications.filter((n: Notification) => !n.read);

  return (
    <div>
      <h2>Notifications</h2>
      {unread.length === 0 ? (
        <p>No unread notifications</p>
      ) : (
        <ul>
          {unread.map((n: Notification) => (
            <li key={n.id}>
              {n.message}
              <button
                onClick={() => markAsRead(n.id)}
                style={{ marginLeft: "0.5rem" }}
              >
                Mark as read
              </button>
            </li>
          ))}
        </ul>
      )}
      {notifications.length > 0 && (
        <button
          onClick={clearNotifications}
          style={{ marginTop: "1rem", padding: "0.5rem 1rem" }}
        >
          Clear All
        </button>
      )}
    </div>
  );
};

export default NotificationsPanel;
