import React from 'react';

import './index.css';

class Counter extends React.Component {
  state = {
    count: 0
  };

  increment = () => this.setState(state => ({ count: state.count + 1 }));
  decrement = () => this.setState(state => ({ count: state.count - 1 }));

  render() {
    return this.props.render({
      count: this.state.count,
      increment: this.increment,
      decrement: this.decrement
    });
  }
}

export default Counter;
