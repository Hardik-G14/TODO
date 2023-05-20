import { useState } from "react";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import "./Expense.css";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expense = (props) => {
    const [filteredYear, setFilteredYear] = useState('2022');

    const enteredFilter = (selectedYear) => {
        setFilteredYear(selectedYear);
    }

    const newArr = props.items.filter((ele) => {
        return ele.date.getFullYear().toString() === filteredYear;
    })

    return (
        <li>
            <Card className="expenses">
                <ExpensesFilter selected={filteredYear} onFilterChange={enteredFilter} />
                <ExpensesChart expenses={newArr} />
                <ExpensesList items={newArr} />
            </Card>
        </li>
    );
}

export default Expense; 