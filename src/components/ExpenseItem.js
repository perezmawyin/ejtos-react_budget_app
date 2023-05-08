import React, { useContext } from "react"
import { TiDelete } from 'react-icons/ti';
import { AppContext } from "../context/AppContext"

const ExpenseItem = (props) => {
    const {dispatch} = useContext(AppContext)

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.name
        })
    }

    const increaseAllocation = () => {
        const expense = {
            name: props.name,
            cost: 10 /* Explicitly increase by 10 */
        }

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        })

    }

    return (
        <tr>
            <td>{props.name}</td>
            <td>£{props.cost}</td>
            <td><button onClick={event=> increaseAllocation()}>+</button></td>
            <td><TiDelete size='1.5em' onClick={handleDeleteExpense}></TiDelete></td>
        </tr>
    )
}

export default ExpenseItem