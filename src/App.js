import React, { useState } from "react";
import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Car Insurance',
    amount: 30000,
    date: new Date(2021, 2, 28),
  },

  {
    id: 'e2',
    title: 'Bike Insurance',
    amount: 80000, 
    date: new Date(2014, 12, 10),
  },

  { 
    id: 'e3',
    title: 'Life Insurance',
    amount: 30000,
    date: new Date(2021, 2, 18),
  },
  
  { 
    id:'e4',
    title: 'Wife Insurance',
    amount: 130000, 
    date: new Date(2010, 12, 2),
  },
];


const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  
  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };
   
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
