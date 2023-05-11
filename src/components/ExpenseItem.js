import React, { useContext } from "react"
import { TiDelete } from 'react-icons/ti'
import { FaPlusCircle, FaMinusCircle } from 'react-icons/fa'
import { AppContext } from "../context/AppContext"
import '../App.css';

const ExpenseItem = (props) => {
    const { dispatch, currency } = useContext(AppContext)

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
    const decreaseAllocation = () => {
        const expense = {
            name: props.name,
            cost: 10 /* Explicitly decrease by 10 */
        }

        dispatch({
            type: 'RED_EXPENSE',
            payload: expense
        })

    }

    return (
        <tr>
            <td>{props.name}</td>
            <td>{currency}{props.cost}</td>
            <td className="centered"><FaPlusCircle className="click-icon" size='1.5em' color="green" onClick={event => increaseAllocation()}></FaPlusCircle></td>
            <td className="centered"><FaMinusCircle className="click-icon" size='1.5em' color="red" onClick={event => decreaseAllocation()}></FaMinusCircle></td>
            <td className="centered"><TiDelete className="click-icon" size='1.5em' onClick={handleDeleteExpense}></TiDelete></td>
        </tr>
    )
}

export default ExpenseItem