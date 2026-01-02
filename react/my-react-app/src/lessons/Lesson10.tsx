// src/lessons/Lesson10.tsx
import React, { Suspense, useState } from "react";
import ErrorBoundary from "../components/ErrorBoundary";

// Lazy load AdminPage to demonstrate code splitting
const AdminPage = React.lazy(() => import("../components/AdminPage"));

const Lesson10: React.FC = () => {
  const [showAdmin, setShowAdmin] = useState(false);

  return (
    <div>
      <h2>Lesson 10: Bundle Analysis & Optimization</h2>
      <p>
        This lesson demonstrates bundle analysis, selective imports, TypeScript config tweaks,
        and code splitting.
      </p>

      <button onClick={() => setShowAdmin(true)}>Load Admin Page</button>

      {showAdmin && (
        <ErrorBoundary>
          <Suspense fallback={<div>Loading Admin Page...</div>}>
            <AdminPage />
          </Suspense>
        </ErrorBoundary>
      )}
    </div>
  );
};

export default Lesson10;
