import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
    const [userInput, setUserInput] = useState({
        enteredTitle: "",
        enteredAmount: "",
        enteredDate: ""
    });

    const clickHandler = () => {
        props.onParity();
    }

    const titleChangeHandler = (event) => {
        setUserInput((prevState) => {
            return ({
                ...prevState,
                enteredTitle: event.target.value
            });
        });
    }

    const amountChangeHandler = (event) => {
        setUserInput((prevState) => {
            return ({
                ...prevState,
                enteredAmount: event.target.value
            });
        });
    }

    const dateChangeHandler = (event) => {
        setUserInput((prevState) => {
            return ({
                ...prevState,
                enteredDate: event.target.value
            });
        });
    }

    const submitHandler = (event) => {
        event.preventDefault();
        const expenseData = {
            title: userInput.enteredTitle,
            amount: +userInput.enteredAmount,
            date: new Date(userInput.enteredDate)   //date contains date in gmt format
            // date: userInput.enteredDate  //date contains string now
        };
        // console.log(expenseData);
        props.onSaveExpenseData(expenseData);
        setUserInput(
            { ...userInput, enteredAmount: "", enteredDate: "", enteredTitle: "" }
        );
    };

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" placeholder="Title" required value={userInput.enteredTitle} onChange={titleChangeHandler} />
                </div>

                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01" required value={userInput.enteredAmount} onChange={amountChangeHandler} />
                </div>

                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" min="2019-01-01" max="2022-12-31" required value={userInput.enteredDate} onChange={dateChangeHandler} />
                </div>
            </div>
            <div className="new-expense__actions">
                <button onClick={clickHandler}>Cancel</button>
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
}

export default ExpenseForm;