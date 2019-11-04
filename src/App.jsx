import React from 'react';
import Counter from './components/Counter';

export default class App extends React.Component {
  sendAnalitics = () => {
    return console.log('Clicked');
  };
  render() {
    return (
      <Counter
        className="counter"
        render={({ className, getCounterProps }) => {
          const counterProps = getCounterProps({
            onClick: this.sendAnalitics,
            map: count => count * 2
          });
          return (
            <div className={className}>
              <button onClick={counterProps.decrement}>-</button>
              <span>{counterProps.count}</span>
              <button onClick={counterProps.increment}>+</button>
            </div>
          );
        }}
      />
    );
  }
}
