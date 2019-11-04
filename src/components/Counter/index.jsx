import React from 'react';

import './index.css';

const Counter = ({ count, increment, decrement }) => {
  return (
    <div className="counter">
      <button onClick={decrement}>-</button>
      <span>{count}</span>
      <button onClick={increment}>+</button>
    </div>
  );
};

export default Counter;
