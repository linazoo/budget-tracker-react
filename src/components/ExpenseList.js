import React, { useContext } from "react";
import ExpenseItem from "./ExpenseItem";
import { v4 as uuidv4 } from "uuid";
import { AppContext } from "../context/AppContext";

const ExpenseList = () => {
  const { expenses } = useContext(AppContext);

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
