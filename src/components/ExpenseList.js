import React from "react";
import ExpenseItem from "./ExpenseItem";
import { v4 as uuidv4 } from "uuid";

const ExpenseList = () => {
  const expenses = [
    { id: 433434, name: "Shopping", cost: 50 },
    { id: 343454, name: "Holiday", cost: 50 },
    { id: 433434, name: "Transportation", cost: 50 },
    { id: 433434, name: "Fuel", cost: 50 },
    { id: 433434, name: "Child Care", cost: 50 },
  ];

  return (
    <ul className="list-group">
      {expenses.map((expense) => (
        <ExpenseItem
          key={uuidv4()}
          id={expense.id}
          name={expense.name}
          cost={expense.cost}
        />
      ))}
    </ul>
  );
};

export default ExpenseList;
