// src/lessonsRegistry.ts
import Lesson1 from "./lessons/Lesson1";
import Lesson2 from "./lessons/Lesson2";

export interface Lesson {
  path: string;
  title: string;
  component: React.FC;
}

export const lessons: Lesson[] = [
  { path: "/lesson1", title: "Lesson 1: Portfolio Dashboard", component: Lesson1 },
  { path: "/lesson2", title: "Lesson 2: Budget Tracker", component: Lesson2 },
];
