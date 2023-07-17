import React, { useState } from 'react'

const greeting = {
    greet: "Welcome!",
    chat: "Want to connect with me?",
  };

const today = new Date();


function formatDate(date){
  return new Intl.DateTimeFormat('en-US',{weekday: 'long'}).format(date);
}



function Greetings() {
  const [isGreet, setIsGreet] = useState(false);

  function handleGreetMe(){
    let name = prompt("What's your name?");
    if(isGreet){
      window.alert(`${greeting.greet} sayo ${name} ${greeting.chat}`);
    }
    setIsGreet(!isGreet);
  }
  
  return (
    <>{greeting.greet} The day today is {formatDate(today)}
    <button onClick={handleGreetMe}>
      {isGreet ? 'Thanks for Greeting' : 'Greet'}
    </button>
    </>
  )
}

export default Greetings