// src/lessons/Lesson6.tsx
import React from "react";
import { useDesignHubStore } from "../store/store";
import NotificationsPanel from "../components/NotificationsPanel";

const Lesson6: React.FC = () => {
  const addNotification = useDesignHubStore((s) => s.addNotification);

  return (
    <div>
      <h2>Lesson 6: Notifications Slice</h2>
      <div style={{ marginBottom: "1rem" }}>
        <button
          onClick={() =>
            addNotification({ id: Date.now().toString(), message: "Info message" })
          }
        >
          Add Info
        </button>
        <button
          onClick={() =>
            addNotification({ id: Date.now().toString(), message: "Error occurred!" })
          }
          style={{ marginLeft: "0.5rem" }}
        >
          Add Error
        </button>
        <button
          onClick={() =>
            addNotification({ id: Date.now().toString(), message: "Success!" })
          }
          style={{ marginLeft: "0.5rem" }}
        >
          Add Success
        </button>
      </div>
      <NotificationsPanel />
    </div>
  );
};

export default Lesson6;
