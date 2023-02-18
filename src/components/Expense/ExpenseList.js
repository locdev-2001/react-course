import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpenseList.css";
export const ExpenseList = (props) => {
//   let expenseContent = <p>Nothing in this year</p>;

  if (props.filterExpense.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expense.</h2>;
  } else {
    return (
      <ul className="expenses-list">
        {props.filterExpense.map((expense) => (
          <li>
                <ExpenseItem
                    key = {expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          </li>
        ))}
      </ul>
    );
  }
};
