import React, { useState } from 'react';

const Counter = () => {

    const [count, setCounter] = useState(0);
   

    const handleIncrement = () => {
        setCounter(count + 1)
    };
   
    const handleDecrement = () => {
        setCounter(count - 1)
    };


  return (
    
    <div>Counter
        <button onClick={handleIncrement}>+</button>
        {count}
        <button onClick={handleDecrement}>-</button>
    </div>
    
  )
}

export default Counter;

//increment and decrenent