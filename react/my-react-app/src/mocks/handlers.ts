// src/mocks/handlers.ts
import { http, HttpResponse } from "msw";
import type { Collaborator } from "../store/slices/collaboratorsSlice";

export const handlers = [
  http.get("/api/collaborators", () => {
    const mockData: Collaborator[] = [
      { id: "1", name: "Alice", email: "alice@example.com" },
      { id: "2", name: "Bob", email: "bob@example.com" },
      { id: "3", name: "Charlie", email: "charlie@example.com" },
    ];
    return HttpResponse.json(mockData);
  }),
];
