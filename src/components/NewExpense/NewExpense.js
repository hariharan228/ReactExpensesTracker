import React, { useState } from 'react';
import './NewExpense.css'
import ExpenseForm from './ExpenseForm';

const NewExpense = (props)=>{
    const [showForm, setShowForm] = useState(false) 
    const addNewExpenseHandler = (expenseData) => {
        const expense = {
            ...expenseData,
            id: Math.random.toString()
        }

        props.onAddNewExpense(expense)
        console.log(`From New Expense : ${expense}`)

    }
    const showFormHandler = () =>{
        setShowForm(true)
    }
    const closeFormHandler = () =>{
        setShowForm(false)
    }
    return (
        <div className='new-expense'>
            {showForm ? <ExpenseForm onSaveExpenseData = {addNewExpenseHandler} onCloseForm={closeFormHandler}/> : <button onClick={showFormHandler}>Add New Expense</button>}
        </div>
    )
}

export default NewExpense;