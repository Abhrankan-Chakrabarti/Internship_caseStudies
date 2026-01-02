// src/lessons/Lesson8.tsx
import React from "react";
import TagList from "../components/TagList";
import TagInput from "../components/TagInput";

const Lesson8: React.FC = () => {
  const [tags, setTags] = React.useState<string[]>(["React", "Zustand", "Memoization"]);
  const [filter, setFilter] = React.useState("");
  const [counter, setCounter] = React.useState(0); // unrelated state

  const handleAddTag = React.useCallback(
    (tag: string) => {
      setTags((prev) => [...prev, tag]);
    },
    [setTags]
  );

  return (
    <div>
      <h2>Lesson 8: Memoization Challenge</h2>

      <div>
        <label>
          Filter tags:
          <input
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            placeholder="Type to filter..."
          />
        </label>
      </div>

      <TagList tags={tags} filter={filter} />
      <TagInput onAddTag={handleAddTag} />

      <hr />

      <div>
        <p>Unrelated counter: {counter}</p>
        <button onClick={() => setCounter((c) => c + 1)}>Increment counter</button>
      </div>
    </div>
  );
};

export default Lesson8;
