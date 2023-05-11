import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../context/AppContext';
import '../App.css';

const Currency = () => {
    const { dispatch, currency } = useContext(AppContext);
    const [currencyLabel, setCurrencyLabel] = useState("")

    const currencyArr = {
        '$': '$ Dollar',
        '£': '£ Pound',
        '€': '€ Euro',
        '₹': '₹ Rupee',
    }

    // After mount, set Currency Label
    useEffect(() => {
        setCurrencyLabel("Currency (" + currencyArr[currency] + ")")
    }, [])

    // Change event of the currency dropdown list
    const changeCurrency = (e) => {
        setCurrencyLabel("Currency (" + e.target.name + ")")
        dispatch({
            type: 'CHG_CURRENCY',
            payload: e.target.id,
        })

    }


    return (
        <div className="dropdown">
            <label className='form-select alert alert-success dropbtn' htmlFor="Currency">{currencyLabel}</label>
            <div className="dropdown-content">
                {Object.keys(currencyArr).map((key) => {
                    return (
                        <a key={key} id={key} name={currencyArr[key]} onClick={(e) => changeCurrency(e)}>{currencyArr[key]}</a>
                    )
                })}
            </div>
        </div>
    );
};

export default Currency;