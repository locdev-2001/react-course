import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [showNewExpense, setShowNewExpense] = useState(false);
  const showNewExpenseHandler = () => {
    setShowNewExpense(true);
  };
  
    const cancelNewExpenseHandler = () => {
      setShowNewExpense(false);
    };
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      id: Math.random().toString(),
      ...enteredExpenseData,
    };
    console.log(expenseData);
    props.addExpense(expenseData);
    setShowNewExpense(false);
  };
  return (
    <div className="new-expense">
      {showNewExpense === true ? (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
            cancelNewExpenseHandler={cancelNewExpenseHandler}
        />
      ) : (
        <button onClick={showNewExpenseHandler}> Add new expense</button>
      )}
    </div>
  );
};
export default NewExpense;
