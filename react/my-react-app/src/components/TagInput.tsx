// src/components/TagInput.tsx
import React from "react";

interface TagInputProps {
  onAddTag: (tag: string) => void;
}

const TagInput: React.FC<TagInputProps> = ({ onAddTag }) => {
  console.log("Rendering TagInput");
  const [value, setValue] = React.useState("");

  return (
    <div>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Enter a tag"
      />
      <button
        onClick={() => {
          if (value.trim()) {
            onAddTag(value.trim());
            setValue("");
          }
        }}
      >
        Add Tag
      </button>
    </div>
  );
};

// Only re-renders when props change
export default React.memo(TagInput);
