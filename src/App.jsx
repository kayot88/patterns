import React from 'react';

import Counter from './components/Counter';

export default class App extends React.Component {
  render() {
    return (
      <Counter
        render={({ count, increment, decrement }) => (
          <div className="counter">
            <button onClick={decrement}>-</button>
            <span>{count}</span>
            <button onClick={increment}>+</button>
          </div>
        )}
      />
    );
  }
}
