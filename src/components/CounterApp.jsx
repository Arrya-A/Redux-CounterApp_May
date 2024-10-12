import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {increment, decrement, reset, incrementByAmount} from '../redux/counterSlice'
const CounterApp = () => {

    const [amount, setAmount]=useState(0)

    const { count } = useSelector(state => state.counterReducer)
    const dispatch = useDispatch()

    const handleIncrementAmount =()=>{
        if(amount){
            // dispatch action with input amount
            dispatch(incrementByAmount(amount))
        }else{
            alert("Please enter a value")
        }
    }
    return (
        <div style={{ width: '500px' }} className='border rounded p-5 text-center'>

            <h1 style={{ fontSize: '100px' }}>{count}</h1>
            <div className='d-flex justify-content-between mt-5'>
                <button onClick={() => dispatch(increment())} className='btn btn-success'>INCREMENT</button>
                <button onClick={() => dispatch(decrement())} className='btn btn-warning'>DECREMENT</button>
                <button onClick={() => dispatch(reset())} className='btn btn-danger'>RESET</button>
            </div>
            <div className='d-flex align-items-centerjustify-content-between mt-5'>
                <input onChange={e=>setAmount(e.target.value)} type="text" placeholder='Input increment amount' className='form-control' />
                <button onClick={handleIncrementAmount} className='btn btn-primary ms-3'>Increment By Amount</button>

            </div>
        </div>
    )
}

export default CounterApp