import React from 'react'
import ExpenseItem from './ExpenseItem'
import './ExpensesList.css'

const ExpensesList = (props) => {
    
    const expenseArr = []
    if (props.items.length === 0) {
        return (
            <h2 className='expenses-list__fallback'>No expenses found</h2>
        )
    }
    let display = [];
    let ctr = 0
    let total = 0
    for(let expense of props.items){
        display.push(<ExpenseItem
                        key={expense.id}
                        selectedYear={props.filteredYr}
                        selectedMonth={props.filteredMt}
                        title={expense.title}
                        amount={expense.amount}
                        date={expense.date} />)
        ctr+=1
        expenseArr.push(expense.amount)
    }
    if(ctr === props.items.length){
        total = expenseArr.reduce((a,b)=>a+b,0)
    }
    
    return (
        <div>
            <p style={{color:"white"}}>Total Expenses: {total}</p>
            <ul className='expenses-list'>
                {
                    display.map(d => {
                        return d
                    })
                }
            </ul>
        </div>
    )

}

export default ExpensesList