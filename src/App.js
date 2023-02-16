// import logo from './logo.svg';
import React,{useState} from "react";
import "./App.css";
import Expense from "./components/Expense/Expense";
import NewExpense from "./components/NewExpense/NewExpense";
const static_expense = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
  {
    id: "31231231",
    title: "test",
    amount: 45,
    date: new Date(2022, 0, 26)
  }
];
function App() {
  const [expenses, setExpenses] = useState(static_expense);
  const addExpenseHandler = (expense) => {
    console.log(expense)
    setExpenses((prevExpenses) => {
      return [...prevExpenses,expense]
    });
    
    // setExpenses([...expenses,expense]);
    console.log(expenses,'in appjs')
  }
  return (
    <div>
      <NewExpense addExpense={addExpenseHandler} />
      <Expense items={expenses} />
    </div>
  );
}

export default App;
