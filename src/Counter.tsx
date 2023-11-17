import React, { useState } from 'react'

import { useAppSelector, useAppDispatch } from './hooks'

import { decrement, resetCounter, incrementByAmount } from './counterSlice'

export default function Counter() {
    // The `state` arg is correctly typed as `RootState` already
    const count = useAppSelector((state) => state.counter.value)
    const dispatch = useAppDispatch()

    return(
        <div>
            <span>{ count }</span>
            <br/>
            <button onClick={(e) => dispatch(incrementByAmount(2)) }>Increment</button>
            <br/>
            <button onClick={(e) => dispatch(decrement()) }>Decrement</button>
            <br/>
            <button onClick={(e) => dispatch(resetCounter()) }>Reset</button>
        </div>
    )
}