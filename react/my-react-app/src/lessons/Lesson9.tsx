// src/lessons/Lesson9.tsx
import React, { Suspense, useState } from "react";
import ErrorBoundary from "../components/ErrorBoundary";

const ProfileSettings = React.lazy(() => import("../components/ProfileSettings"));
const AdminPanel = React.lazy(() => import("../components/AdminPanel"));

const Lesson9: React.FC = () => {
  const [showSettings, setShowSettings] = useState(false);

  return (
    <div>
      <h2>Lesson 9: Lazy Loading & Code Splitting</h2>

      <button onClick={() => setShowSettings(true)}>Settings</button>

      {showSettings && (
        <ErrorBoundary>
          <Suspense fallback={<div>Loading Profile Settings...</div>}>
            <ProfileSettings />
          </Suspense>
        </ErrorBoundary>
      )}

      <hr />

      <h3>Admin Route Example</h3>
      <p>
        Navigate to <code>/admin</code> to lazy‑load the AdminPanel component.
      </p>
    </div>
  );
};

export default Lesson9;
