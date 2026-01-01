// src/pages/SessionPage.tsx
import React from "react";
import { useAppStore } from "../store/sessionStore";
import CollaboratorsList from "../components/CollaboratorsList";

const SessionPage: React.FC = () => {
  const userId = useAppStore((s) => s.userId);
  const token = useAppStore((s) => s.token);
  const role = useAppStore((s) => s.role);
  const setSession = useAppStore((s) => s.setSession);
  const clearSession = useAppStore((s) => s.clearSession);

  const history = useAppStore((s) => s.history);
  const addHistoryEntry = useAppStore((s) => s.addHistoryEntry);
  const clearHistory = useAppStore((s) => s.clearHistory);

  const login = () => {
    setSession({
      userId: "u_123",
      token: "secret-token",
      expiresAt: Date.now() + 60 * 60 * 1000,
      role: "user",
    });
  };

  const addSampleHistory = () =>
    addHistoryEntry({ noteId: "n_001", action: "edited", timestamp: Date.now() });

  return (
    <div>
      <h2>User Session</h2>
      <p>User: {userId ?? "—"}</p>
      <p>Role: {role}</p>
      <p>Token: {token ? token.slice(0, 6) + "..." : "—"}</p>
      <button onClick={login}>Login</button>
      <button onClick={clearSession} style={{ marginLeft: "0.5rem" }}>
        Logout
      </button>

      <hr style={{ margin: "1rem 0" }} />
      <h2>Note History</h2>
      <button onClick={addSampleHistory}>Add sample entry</button>
      <button onClick={clearHistory} style={{ marginLeft: "0.5rem" }}>
        Clear history
      </button>
      <ul style={{ marginTop: "0.5rem" }}>
        {history.map((h, i) => (
          <li key={i}>
            [{new Date(h.timestamp).toLocaleTimeString()}] {h.noteId} — {h.action}
          </li>
        ))}
      </ul>

      <hr style={{ margin: "1rem 0" }} />
      <CollaboratorsList />
    </div>
  );
};

export default SessionPage;
