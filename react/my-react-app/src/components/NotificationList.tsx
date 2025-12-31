// src/components/NotificationList.tsx
import React from "react";
import useNotificationStore from "../store/notificationStore";

const NotificationList: React.FC = () => {
  const notifications = useNotificationStore((s) => s.notifications);
  const markAsRead = useNotificationStore((s) => s.markAsRead);
  const clearNotifications = useNotificationStore((s) => s.clearNotifications);

  const unread = notifications.filter((n) => !n.read);

  return (
    <div>
      <h2>Notifications</h2>
      {unread.length === 0 ? (
        <p>No unread notifications</p>
      ) : (
        <ul>
          {unread.map((n) => (
            <li key={n.id}>
              <strong>[{n.type}]</strong> {n.message}
              <button onClick={() => markAsRead(n.id)}>Mark as read</button>
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

export default NotificationList;
