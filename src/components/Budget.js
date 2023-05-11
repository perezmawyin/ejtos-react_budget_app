import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const Budget = () => {
    const { budget, currency, dispatch } = useContext(AppContext)

    const handleBudgetChange = (newBudget) => {
        dispatch({
            type: 'SET_BUDGET',
            payload: newBudget
        })
    }
    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}
                <input
                    required='required'
                    type='number'
                    id='budget'
                    step='10'
                    value={budget}
                    style={{ marginLeft: '1rem', size: 10 }}
                    onChange={(event) => handleBudgetChange(event.target.value)}>
                </input>
            </span>
        </div>
    )
}

export default Budget