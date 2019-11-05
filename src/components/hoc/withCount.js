import React from 'react';

const withCount = Component => {
  return class WithCount extends React.Component {
    state = {
      count: 0
    };
    static getDerivedStateFromProps(nextProps, prevState) {
      if (nextProps.count !== prevState.count) {
        return { count: nextProps.count };
      } else return null;
    }
    render() {
      return <Component {...this.props} />;
    }
  };
};

export default withCount;
