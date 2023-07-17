import React, { useState } from 'react'



function Button() {
    const [isClicked, setIsClicked] = useState(false);
    const [count, setCount] = useState(0);

    const handleClick = () => {
        if (isClicked) {
            document.body.style.backgroundColor = "";
            document.body.style.color = "";
            setCount(count +1);
        } else {
        document.body.style.backgroundColor = "black";
            document.body.style.color = "white";
            setCount(count + 1);
        }
        setIsClicked(!isClicked);
    };

  return (
    <button className='btn btn-primary' onClick={handleClick}>{isClicked ? "Reset" : "Click Me"} You've clicked me {count} times</button>
  )
};

export default Button