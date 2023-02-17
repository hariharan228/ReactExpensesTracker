import React, { useState } from 'react'

import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const expenses = [];
  const [expenseData, setExpenseData] = useState(expenses)
  const addNewExpenseHandler = (expense) =>{
    setExpenseData((prevState) => {
      return([expense, ...prevState])
    })
  }
  return (
    <div>
      <NewExpense onAddNewExpense = {addNewExpenseHandler}/>
      <Expenses items = {expenseData}></Expenses>
    </div>
  );
}

export default App;
