import React, { useState } from 'react'

const Counter = () => {

    const [counter, setCounter] = useState(1);

    function Increment() {
        setCounter(preValue => preValue + 1)
    }

    function Decrement() {
        setCounter(preValue => preValue - 1)
    }

    function Reset() {
        setCounter(1)
    }
  return (
    <div>
    <h1>Counter: {counter}</h1>
    <button onClick={Increment}>Increment(+)</button>
    <button onClick={Decrement}>Decrement(-)</button>
    <button onClick={Reset}>Reset(1)</button>  
    </div>
  )
}

export default Counter
