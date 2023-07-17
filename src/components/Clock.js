import React, { useState, useEffect } from 'react';

export default function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  let hours = time.getHours();
  let className;
  if (hours >= 0 && hours <= 6) {
    className = 'night';
    document.body.style.backgroundColor = 'black';
  } else {
    className = 'day';
    document.body.style.backgroundColor = 'yellow';
    document.body.style.color = "black";
  }

  return (
    <h1 className={className}>
      {time.toLocaleTimeString()}
    </h1>
  );
}
