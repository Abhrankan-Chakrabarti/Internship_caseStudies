// src/LessonHub.tsx
import React from "react";
import { NavLink } from "react-router-dom";
import { lessons } from "./lessonsRegistry";

const LessonHub: React.FC = () => {
  return (
    <div>
      <h2>Lessons</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {lessons.map((lesson) => (
          <li key={lesson.path} style={{ marginBottom: "0.5rem" }}>
            <NavLink
              to={lesson.path}
              style={({ isActive }) => ({
                fontWeight: isActive ? "bold" : "normal",
                color: isActive ? "green" : "blue",
                textDecoration: "none",
              })}
            >
              {lesson.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LessonHub;
