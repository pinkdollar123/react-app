import { useState } from 'react';

export default function SimpleChat() {
  const [to, setTo] = useState('Cryo');
  const [message, setMessage] = useState('Hello');

  function handleSubmit(e) {
    e.preventDefault();
    setTimeout(() => {
      alert(`You said ${message} to ${to}`);
    }, 1000);

  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        To:{' '}
        <select
          value={to}
          onChange={e => setTo(e.target.value)}>
          <option value="Cryo">Cryo</option>
          <option value="Bob">Bob</option>
        </select>
      </label>
      <textarea
        placeholder="Message"
        value={message}
        onChange={e => setMessage(e.target.value)}
      />
      <button type="submit">Send</button>
    </form>
  );
}

    // setTimeout(function,delay)

    // setTimeout(() => {
    //     alert(`You said ${message} to ${to}`);
        
    //     // Condition
    //     if (condition) {
    //       // Code to execute if condition is true
    //       console.log("Condition is true.");
    //     } else {
    //       // Code to execute if condition is false
    //       console.log("Condition is false.");
    //     }
    //   }, 5000);


    
      