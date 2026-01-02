// src/lessonsRegistry.ts
import Lesson1 from "./lessons/Lesson1";
import Lesson2 from "./lessons/Lesson2";
import Lesson3 from "./lessons/Lesson3";
import Lesson4 from "./lessons/Lesson4";
import Lesson5 from "./lessons/Lesson5";
import Lesson6 from "./lessons/Lesson6";
import Lesson7 from "./lessons/Lesson7";
import Lesson8 from "./lessons/Lesson8"; // 👈 new import

export interface Lesson {
  path: string;
  title: string;
  component: React.FC;
}

export const lessons: Lesson[] = [
  { path: "/lesson1", title: "Lesson 1: Portfolio Dashboard", component: Lesson1 },
  { path: "/lesson2", title: "Lesson 2: Budget Tracker", component: Lesson2 },
  { path: "/lesson3/*", title: "Lesson 3: Doctor–Patient Details", component: Lesson3 },
  { path: "/lesson4", title: "Lesson 4: Notifications with Zustand", component: Lesson4 },
  { path: "/lesson5", title: "Lesson 5: Testing & Debugging", component: Lesson5 },
  { path: "/lesson6", title: "Lesson 6: Notifications Slice", component: Lesson6 },
  { path: "/lesson7", title: "Lesson 7: Persisted Session & Collaborators", component: Lesson7 },
  { path: "/lesson8", title: "Lesson 8: Memoization Challenge", component: Lesson8 }, // 👈 new entry
];
