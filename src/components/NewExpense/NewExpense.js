import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";


const NewExpense = (props) => {
    const [prev, setPrev] = useState(0);
    const changeHandler = () => {
        setPrev(1);
    }

    const changeParity = () => {
        setPrev(0);
    }

    const saveExpenseDataHandler = (enterExpenseData) => {
        const expenseData = {
            ...enterExpenseData,
            id: Math.random()
        }
        props.onSaveExpense(expenseData);
        setPrev(0);
    }

    let toShow = <button onClick={changeHandler}>Add New Expense</button>;

    if (prev === 1) {
        toShow = <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onParity={changeParity} />;
    }

    return <div className="new-expense">
        {toShow}
    </div>
}

export default NewExpense;