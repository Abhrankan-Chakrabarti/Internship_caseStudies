// src/components/BudgetTracker.tsx
import React, { useReducer } from "react";

export interface IncomeEntry {
  id: string;
  amount: number;
  currency: "USD" | "EUR" | "GBP";
  source: string;
}

export interface ExpenseEntry {
  id: string;
  amount: number;
  currency: "USD" | "EUR" | "GBP";
  category: string;
}

interface BudgetTrackerProps {
  conversionRates: {
    [currency in "USD" | "EUR" | "GBP"]: number;
  };
  selectedCurrency: "USD" | "EUR" | "GBP";
}

interface BudgetState {
  incomes: IncomeEntry[];
  expenses: ExpenseEntry[];
}

type Action =
  | { type: "addIncome"; payload: IncomeEntry }
  | { type: "addExpense"; payload: ExpenseEntry };

const reducer = (state: BudgetState, action: Action): BudgetState => {
  switch (action.type) {
    case "addIncome":
      return { ...state, incomes: [...state.incomes, action.payload] };
    case "addExpense":
      return { ...state, expenses: [...state.expenses, action.payload] };
    default:
      return state;
  }
};

const calculateBalance = (
  state: BudgetState,
  conversionRates: BudgetTrackerProps["conversionRates"],
  selectedCurrency: BudgetTrackerProps["selectedCurrency"]
): number => {
  const incomeTotal = state.incomes.reduce(
    (sum, i) => sum + i.amount * conversionRates[i.currency],
    0
  );
  const expenseTotal = state.expenses.reduce(
    (sum, e) => sum + e.amount * conversionRates[e.currency],
    0
  );
  return incomeTotal - expenseTotal;
};

const BudgetTracker: React.FC<BudgetTrackerProps> = ({
  conversionRates,
  selectedCurrency,
}) => {
  const [state, dispatch] = useReducer(reducer, {
    incomes: [],
    expenses: [],
  });

  const balance = calculateBalance(state, conversionRates, selectedCurrency);

  const addExpense = (expense: ExpenseEntry) => {
    const newBalance =
      balance - expense.amount * conversionRates[expense.currency];
    if (newBalance < 0) {
      alert("Balance cannot go negative!");
      return;
    }
    dispatch({ type: "addExpense", payload: expense });
  };

  return (
    <div>
      <h2>Budget Tracker</h2>
      <p>
        Net Balance ({selectedCurrency}): {balance.toFixed(2)}
      </p>

      <button
        onClick={() =>
          dispatch({
            type: "addIncome",
            payload: {
              id: Date.now().toString(),
              amount: 100,
              currency: "USD",
              source: "Salary",
            },
          })
        }
      >
        Add Income (100 USD)
      </button>

      <button
        onClick={() =>
          addExpense({
            id: Date.now().toString(),
            amount: 50,
            currency: "EUR",
            category: "Food",
          })
        }
      >
        Add Expense (50 EUR)
      </button>
    </div>
  );
};

export default BudgetTracker;
