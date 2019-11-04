import React from 'react';

import Counter from './components/Counter';

export default class App extends React.Component {
  render() {
    return (
      <Counter className='counter'
        render={({className, counterProps }) => (
          <div className={className}>
            <button onClick={counterProps.decrement}>-</button>
            <span>{counterProps.count}</span>
            <button onClick={counterProps.increment}>+</button>
          </div>
        )}
      />
    );
  }
}
