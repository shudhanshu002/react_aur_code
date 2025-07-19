import  { useState } from "react";

function App() {
  const [counter, setCounter] = useState([]);

  const addvalue = () => {
    setCounter((prev) => [...prev, (prev[prev.length-1] || 0) + 1])
    };

  const decreaseValue = () => {
    setCounter((prev) => prev.slice(0, prev.length-1));
  };

  // Format the counter array
  const formattedCounter = counter.map((value) => `(${value})`).join(" - ");

  return (
    <div>
      <h1>Chai aur React</h1>

      <button onClick={addvalue}>ADD value</button>

      <button onClick={decreaseValue}>DECREASE value</button>

      <p>Footer: {formattedCounter}</p>
    </div>
  );
}

export default App;
