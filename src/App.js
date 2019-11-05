import React from 'react';
import './index.css';
import Counter from './components/Counter';

export default class App extends React.Component {
  state = {
    count: 0
  };

  render() {
    return (
      <React.Fragment>
        <Counter
          count={this.state.count}
          upCount={() => this.setState(state => ({ count: this.state.count + 1 }))}
          downCount={() => this.setState(state => ({ count: this.state.count - 1 }))}
        />
      </React.Fragment>
    );
  }
}
