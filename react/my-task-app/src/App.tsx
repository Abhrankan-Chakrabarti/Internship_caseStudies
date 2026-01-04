import { useReducer, useState } from "react";
import "./App.css";

interface Task {
  id: number;
  title: string;
  completed: boolean;
}

interface State {
  tasks: Task[];
}

type Action =
  | { type: "ADD_TASK"; payload: string }
  | { type: "TOGGLE_TASK"; payload: number }
  | { type: "DELETE_TASK"; payload: number };

const initialState: State = {
  tasks: [],
};

function tasksReducer(state: State, action: Action): State {
  switch (action.type) {
    case "ADD_TASK":
      return {
        ...state,
        tasks: [
          ...state.tasks,
          {
            id: Date.now(),
            title: action.payload,
            completed: false,
          },
        ],
      };

    case "TOGGLE_TASK":
      return {
        tasks: state.tasks.map((task) =>
          task.id === action.payload
            ? { ...task, completed: !task.completed }
            : task
        ),
      };

    case "DELETE_TASK":
      return {
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };

    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(tasksReducer, initialState);
  const [taskTitle, setTaskTitle] = useState("");

  const handleAddTask = () => {
    if (!taskTitle.trim()) return;
    dispatch({ type: "ADD_TASK", payload: taskTitle });
    setTaskTitle("");
  };

  return (
    <div className="App">
      <h1>Task Manager</h1>

      <div className="input-row">
        <input
          type="text"
          value={taskTitle}
          onChange={(e) => setTaskTitle(e.target.value)}
          placeholder="Enter a task"
        />
        <button onClick={handleAddTask}>Add Task</button>
      </div>

      <ul>
        {state.tasks.map((task) => (
          <li key={task.id} className={task.completed ? "completed" : ""}>
            <span
              onClick={() =>
                dispatch({ type: "TOGGLE_TASK", payload: task.id })
              }
            >
              {task.title}
            </span>
            <button
              className="delete-btn"
              onClick={() => dispatch({ type: "DELETE_TASK", payload: task.id })}
            >
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
