// src/components/TagList.tsx
import React from "react";

interface TagListProps {
  tags: string[];
  filter: string;
}

const TagList: React.FC<TagListProps> = ({ tags, filter }) => {
  console.log("Rendering TagList");

  const filtered = React.useMemo(() => {
    return tags.filter((tag) => tag.toLowerCase().includes(filter.toLowerCase()));
  }, [tags, filter]);

  return (
    <ul>
      {filtered.map((tag, idx) => (
        <li key={idx}>{tag}</li>
      ))}
    </ul>
  );
};

// Wrapped in React.memo to avoid re-renders unless props change
export default React.memo(TagList);
