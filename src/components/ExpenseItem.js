import * as React from "react";
import { TiDelete } from "react-icons/ti";
import { AppContext } from "../context/AppContext";

const ExpenseItem = (props) => {
  const { dispatch } = React.useContext(AppContext);

  const handleDeleteExpense = () => {
    dispatch({
      type: "DELETE_EXPENSE",
      payload: props.id,
    });
  };
  return (
    <li
      className="list-group-item d-flex justify-content-between align-items-center"
      id={props.id}
    >
      {props.name}
      <div>
        <span className="badge rounded-pill bg-primary mr-3">
          ${props.cost}
        </span>
        <TiDelete onClick={handleDeleteExpense} size="1.5em"></TiDelete>
      </div>
    </li>
  );
};

export default ExpenseItem;
