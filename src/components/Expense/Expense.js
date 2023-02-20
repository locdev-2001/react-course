import React, { useState } from "react";
import "./Expense.css";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import { ExpenseList } from "./ExpenseList";
import { ExpenseChart } from "./ExpenseChart";
const Expense = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  const filterExpense = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });
  return (
    <>

      <Card className="expense">
        <ExpenseChart expenses={ filterExpense} />
          <ExpenseFilter
            selected={filteredYear}
            onChangeFilter={filterChangeHandler}
          />
          <ExpenseList filterExpense={filterExpense} />
        </Card>
    </>
  );
};
export default Expense;
