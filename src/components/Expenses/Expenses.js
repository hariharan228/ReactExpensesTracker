import React, { useState } from 'react'

import Card from "../UI/Card"
import './Expenses.css'
import ExpensesChart from './ExpensesChart'
import ExpensesFilter from "./ExpensesFilter"
import ExpensesList from './ExpensesList'

const MONTHS = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

export default function Expenses(props){
    const [filteredYear, setFilteredYear] = useState('2020')
    const [filteredMonth, setFilteredMonth] = useState('none')
    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear)
    }
    const filterMonthChangeHandler = selectedMonth => {
        setFilteredMonth(selectedMonth)
    }

    const filteredExpenses = props.items.filter(expense => {
        if(filteredMonth === 'none') return expense.date.getFullYear().toString() === filteredYear
        else {
           return expense.date.getFullYear().toString() === filteredYear && MONTHS[expense.date.getMonth()] === filteredMonth
        }
    })
    
    return(
        <div>
        <Card className = "expenses">
            <ExpensesChart expenses={filteredExpenses}></ExpensesChart>
            <ExpensesFilter selected={filteredYear} selectedMonth={filteredMonth} onChangeYear = {filterChangeHandler} onChangeMonth = {filterMonthChangeHandler}/>
            <ExpensesList items={filteredExpenses} filteredYr = {filteredYear} filteredMt = {filteredMonth}></ExpensesList>
        </Card>
        </div>
    )
}