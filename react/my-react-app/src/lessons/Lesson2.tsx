// src/lessons/Lesson2.tsx
import React from "react";
import BudgetTracker from "../components/BudgetTracker";

const Lesson2: React.FC = () => {
  return (
    <div>
      <h2>Lesson 2: Budget Tracker</h2>
      <BudgetTracker
        conversionRates={{ USD: 1, EUR: 1.1, GBP: 1.3 }}
        selectedCurrency="USD"
      />
    </div>
  );
};

export default Lesson2;
