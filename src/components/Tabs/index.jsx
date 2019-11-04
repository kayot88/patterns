import React from 'react';

import './index.css';

const Tab = ({ active, title, ...props }) => {
  return (
    <a className={`tab${active ? ' active' : ' '}`} {...props}>
      {title}
    </a>
  );
};

export default class Tabs extends React.Component {
  static Tab = Tab;

  state = {
    activeTabIndex: 0
  };

  handleClick = i => {
    return this.setState({ activeTabIndex: i });
  };
  isActive = i => {
    return i === this.state.activeTabIndex;
  };

  render() {
    return (
      <React.Fragment>
        <nav className="tabs">
          {React.Children.map(this.props.children, (child, i) =>
            React.cloneElement(
              child,
              {
                active: this.isActive(i),
                onClick: () => {
                  return this.handleClick(i);
                }
              },
              child.props.title
            )
          )}
        </nav>
        {React.Children.map(this.props.children, (child, i) => {
          return this.isActive(i) && <section>{child.props.children}</section>;
        })}
      </React.Fragment>
    );
  }
}

//  Tabs;
