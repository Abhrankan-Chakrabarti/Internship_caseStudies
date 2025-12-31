// src/Layout.tsx
import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import LessonHub from "./LessonHub";

const Layout: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  // Load preferences
  useEffect(() => {
    const savedSidebar = localStorage.getItem("sidebarOpen");
    const savedTheme = localStorage.getItem("darkMode");

    if (savedSidebar) setIsOpen(savedSidebar === "true");
    if (savedTheme) setDarkMode(savedTheme === "true");
  }, []);

  // Save preferences
  useEffect(() => {
    localStorage.setItem("sidebarOpen", isOpen.toString());
  }, [isOpen]);

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode.toString());
  }, [darkMode]);

  const themeStyles = {
    background: darkMode ? "#1e1e1e" : "#f4f4f4",
    color: darkMode ? "#f4f4f4" : "#1e1e1e",
  };

  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        overflow: "hidden",
        background: darkMode ? "#121212" : "#ffffff",
        color: darkMode ? "#f4f4f4" : "#000000",
      }}
    >
      {/* Sidebar */}
      <div
        style={{
          width: isOpen ? "250px" : "0px",
          ...themeStyles,
          padding: isOpen ? "1rem" : "0",
          borderRight: isOpen ? `1px solid ${darkMode ? "#444" : "#ccc"}` : "none",
          transition: "width 0.3s ease, padding 0.3s ease",
          overflow: "hidden",
        }}
      >
        {isOpen && <LessonHub />}
      </div>

      {/* Main content */}
      <div style={{ flex: 1, padding: "1rem" }}>
        <div style={{ display: "flex", gap: "1rem", marginBottom: "1rem" }}>
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? "Hide Lessons" : "Show Lessons"}
          </button>
          <button onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
