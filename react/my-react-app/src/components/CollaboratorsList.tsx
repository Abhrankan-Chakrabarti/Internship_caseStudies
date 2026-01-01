// src/components/CollaboratorsList.tsx
import React from "react";
import { useAppStore } from "../store/sessionStore";
import { useCollaboratorsQuery } from "../queries/useCollaboratorsQuery";

const CollaboratorsList: React.FC = () => {
  const collaborators = useAppStore((s) => s.collaborators);
  const { isLoading, isError, refetch } = useCollaboratorsQuery();

  return (
    <div>
      <h3>Collaborators</h3>
      {isLoading && <p>Loading collaborators...</p>}
      {isError && <p>Failed to load collaborators.</p>}
      {collaborators.length === 0 && !isLoading ? (
        <p>No collaborators found.</p>
      ) : (
        <ul>
          {collaborators.map((c) => (
            <li key={c.id}>
              <strong>{c.name}</strong>
              {c.email ? ` — ${c.email}` : ""}
            </li>
          ))}
        </ul>
      )}
      <button onClick={() => refetch()} style={{ marginTop: "0.5rem" }}>
        Refresh
      </button>
    </div>
  );
};

export default CollaboratorsList;
