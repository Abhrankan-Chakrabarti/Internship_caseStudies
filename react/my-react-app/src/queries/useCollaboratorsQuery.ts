// src/queries/useCollaboratorsQuery.ts
import { useQuery } from "@tanstack/react-query";
import { useAppStore } from "../store/sessionStore";
import type { Collaborator } from "../store/slices/collaboratorsSlice";
import { useEffect } from "react";

async function fetchCollaborators(): Promise<Collaborator[]> {
  const res = await fetch("/api/collaborators"); // replace with your API
  if (!res.ok) throw new Error("Failed to fetch collaborators");
  return res.json();
}

export function useCollaboratorsQuery() {
  const setCollaborators = useAppStore((s) => s.setCollaborators);

  const query = useQuery<Collaborator[], Error>({
    queryKey: ["collaborators"],
    queryFn: fetchCollaborators,
    staleTime: 5 * 60 * 1000,
  });

  // React Query v5: side effects go in useEffect
  useEffect(() => {
    if (query.isSuccess && query.data) {
      setCollaborators(query.data);
    }
  }, [query.isSuccess, query.data, setCollaborators]);

  return query;
}
