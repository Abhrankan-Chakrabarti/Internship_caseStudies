// src/lessons/Lesson4.tsx
import React from "react";
import NotificationList from "../components/NotificationList";
import useNotificationStore from "../store/notificationStore";

const Lesson4: React.FC = () => {
  const addNotification = useNotificationStore((s) => s.addNotification);

  return (
    <div>
      <h2>Lesson 4: Notifications with Zustand</h2>
      <div style={{ marginBottom: "1rem" }}>
        <button
          onClick={() =>
            addNotification({
              id: Date.now().toString(),
              message: "This is an info message",
              type: "info",
            })
          }
        >
          Add Info Notification
        </button>
        <button
          onClick={() =>
            addNotification({
              id: Date.now().toString(),
              message: "Something went wrong!",
              type: "error",
            })
          }
          style={{ marginLeft: "0.5rem" }}
        >
          Add Error Notification
        </button>
        <button
          onClick={() =>
            addNotification({
              id: Date.now().toString(),
              message: "Operation successful!",
              type: "success",
            })
          }
          style={{ marginLeft: "0.5rem" }}
        >
          Add Success Notification
        </button>
      </div>
      <NotificationList />
    </div>
  );
};

export default Lesson4;
