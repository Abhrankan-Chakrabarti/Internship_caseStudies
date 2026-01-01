// src/components/CommentBox.tsx
import React, { useState } from "react";

interface CommentBoxProps {
  onPost: (message: string) => void;
}

const CommentBox: React.FC<CommentBoxProps> = ({ onPost }) => {
  const [value, setValue] = useState("");

  const handlePost = () => {
    if (value.trim() === "") return;
    onPost(value);
    setValue(""); // clear input after posting
  };

  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Write a comment..."
      />
      <button onClick={handlePost}>Post</button>
    </div>
  );
};

export default CommentBox;
