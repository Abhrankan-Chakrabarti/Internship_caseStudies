// src/components/AdminPage.tsx
import React from "react";

// Custom debounce implementation (no external dependency)
function debounce<F extends (...args: any[]) => void>(fn: F, delay: number) {
  let timer: ReturnType<typeof setTimeout>;
  return (...args: Parameters<F>) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}

const AdminPage: React.FC = () => {
  const handleSearch = debounce(() => {
    console.log("Searching...");
  }, 300);

  return (
    <div>
      <h3>Admin Page (Lazy Loaded)</h3>
      <p>This page is code-split and only loaded when needed.</p>
      <button onClick={handleSearch}>Simulate Search</button>
    </div>
  );
};

export default AdminPage;
