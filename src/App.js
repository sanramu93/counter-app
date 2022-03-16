import React, { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  const increment = () => setCount((prevCount) => prevCount + 1);
  const decrement = () => setCount((prevCount) => prevCount - 1);

  return (
    <main className="main">
      <button className="btn btn--decrement" onClick={decrement}>
        -
      </button>
      <p className="number">{count}</p>
      <button className="btn btn--increment" onClick={increment}>
        +
      </button>
    </main>
  );
}
