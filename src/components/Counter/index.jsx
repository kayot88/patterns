import React from 'react';

import './index.css';

class Counter extends React.Component {
  state = {
    count: this.props.count || 0
  };

  isControled = () => this.props.count !== undefined;

  chooseState = () => {
    return this.isControled() ? this.props : this.state;
  };

  changeValue = value => {
    if (this.isControled()) {
      return this.props.onChange(this.chooseState().count + value);
    } else {
      this.setState(state => {
        return { count: this.state.count + value };
      });
    }
  };

  increment = () => this.changeValue(1);
  decrement = () => this.changeValue(-1);

  render() {
    return (
      <div className="counter">
        <button onClick={this.decrement}>-</button>
        <span>{this.chooseState().count}</span>
        <button onClick={this.increment}>+</button>
      </div>
    );
  }
}

export default Counter;
