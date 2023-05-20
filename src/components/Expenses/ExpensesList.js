import React from 'react'
import "./ExpensesList.css"
import ExpenseItem from "./ExpenseItem"

const ExpensesList = (props) => {

    if (props.items.length === 0) {
        return <p className="expenses-list__fallback">No Items Found</p>;
    }

    return (
        <ul className="expenses-list">
            {props.items.map((currItem) =>
                <ExpenseItem
                    key={currItem.id}
                    title={currItem.title}
                    amount={currItem.amount}
                    date={currItem.date}
                />
            )}
        </ul>

    )
}

export default ExpensesList