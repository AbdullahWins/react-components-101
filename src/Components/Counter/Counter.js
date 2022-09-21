import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(69);
  const increaseCount = () => setCount(count + 1);
  const decreaseCount = () => setCount(count - 1);
  return (
    <div>
      <h2>Counter: {count} </h2>
      <button onClick={increaseCount}>Increase</button>
      <button onClick={decreaseCount}>Decrease</button>
    </div>
  );
};

export default Counter;
