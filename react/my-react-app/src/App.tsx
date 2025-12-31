// src/App.tsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import { lessons } from "./lessonsRegistry";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          {lessons.map((lesson) => (
            <Route
              key={lesson.path}
              path={lesson.path}
              element={<lesson.component />}
            />
          ))}
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
