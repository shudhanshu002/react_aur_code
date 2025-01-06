import React, { useState } from "react";

function App() {
  const [counter, setCounter] = useState([]);

  const addValue = () => {
    setCounter((prev) => [...prev, (prev[prev.length - 1] || 0) + 1]);
  };

  const decreaseValue = () => {
    setCounter((prev) => prev.slice(0, -1));
  };

  // Format the counter array
  const formattedCounter = counter.map((value) => `(${value})`).join(" - ");

  return (
    <div>
      <h1>Chai aur React</h1>
      <h2>Counter value: {formattedCounter}</h2>

      <button onClick={addValue}>ADD value</button>

      <button onClick={decreaseValue}>DECREASE value</button>

      <p>Footer: {formattedCounter}</p>
    </div>
  );
}

export default App;
