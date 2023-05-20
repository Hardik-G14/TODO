import { useState } from "react";
import Expense from "./components/Expenses/Expense";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
    // {
    //     id: 'e1',
    //     title: 'Toilet Paper',
    //     amount: 94.12,
    //     date: new Date(2020, 7, 14),
    // },
    // {
    //     id: 'e2',
    //     title: 'New TV',
    //     amount: 799.49,
    //     date: new Date(2021, 2, 12)
    // },
    // {
    //     id: 'e3',
    //     title: 'Car Insurance',
    //     amount: 294.67,
    //     date: new Date(2021, 2, 28),
    // }
];

const App = () => {
    const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
    console.log(expenses);
    const enteredExpenseData = (getdata) => {
        console.log(getdata);
        setExpenses((prevState) => {
            return ([getdata, ...prevState]);
        });
    };

    return (
        <div>
            <NewExpense onSaveExpense={enteredExpenseData} />
            <Expense items={expenses} />
        </div>
    );
}

export default App;
