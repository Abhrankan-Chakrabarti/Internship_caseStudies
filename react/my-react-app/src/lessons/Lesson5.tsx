// src/lessons/Lesson5.tsx
import React from "react";
import CommentBox from "../components/CommentBox";

const Lesson5: React.FC = () => {
  const handlePost = (msg: string) => {
    alert(`Posted: ${msg}`);
  };

  return (
    <div>
      <h2>Lesson 5: Testing & Debugging</h2>
      <p>Try posting a comment below:</p>
      <CommentBox onPost={handlePost} />
    </div>
  );
};

export default Lesson5;
