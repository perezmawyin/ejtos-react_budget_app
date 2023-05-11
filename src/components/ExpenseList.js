import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import ExpenseItem from "./ExpenseItem";
import '../App.css';

const ExpenseList = () => {
    const {expenses} = useContext(AppContext)

    return (
        <table>
            <thead>
                <tr>
                    <th scope="col">Department</th>
                    <th scope="col">Allocated Budget</th>
                    <th className="centered" scope="col">Increase by 10</th>
                    <th className="centered" scope="col">Decrease by 10</th>
                    <th className="centered" scope="col">Delete</th>
                </tr>
            </thead>
            <tbody>
                {expenses.map((expense) => {
                    return <ExpenseItem id={expense.id} key={expense.id} name={expense.name} cost={expense.cost} />
                })}
            </tbody>
        </table>
    )
}

export default ExpenseList
