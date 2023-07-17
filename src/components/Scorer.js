import React from 'react'
import { useState } from 'react'



function Scorer() {
    const [score, setScore] = useState(0);

    function increment(){
        setScore(s => + 1);
    }
    
  return (
   <>
    <button className='btn btn-primary' onClick={() => 
    {
        increment();
        alert("You've clicked 1 score");
    }
      }>+1</button>
    <button className='btn btn-primary' onClick={() => 
    {
        increment();
        increment(); 
        alert("You've clicked 2 score");
    }}>+2</button>
    <button className='btn btn-primary' onClick={() => 
        {
            increment();
            increment();
            increment();
            alert("You've clicked 3 score");
        }}>+3</button>
        <h1>Score: {score}</h1>
   </>
  )
}

export default Scorer