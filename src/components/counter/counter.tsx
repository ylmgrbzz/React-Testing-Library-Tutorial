import React, { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);
  const [amount, setAmount] = useState(0);

  return (
    <div>
      <h1 data-testid="custom-element" aria-label={`Count: ${count}`}>
        {count}
      </h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <input
        type="number"
        name="amount"
        value={amount}
        onChange={(e) => {
          setAmount(parseInt(e.target.value));
        }}
      ></input>
      <button onClick={() => setCount(amount)}>Add</button>
    </div>
  );
};
