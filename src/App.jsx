import React from 'react';
import Tabs from './components/Tabs/index';

export default class App extends React.Component {
  render() {
    return (
      <Tabs>
        <Tabs.Tab title="Tab 1">
          L1orem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus
          omnis, quasi nisi architecto harum fugit dolorem delectus commodi
          quidem porro?
        </Tabs.Tab>
        <Tabs.Tab title="Tab 2">
         2 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus
          omnis, quasi nisi architecto harum fugit dolorem delectus commodi
          quidem porro?
        </Tabs.Tab>
        <Tabs.Tab title="Tab 3">
         3 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus
          omnis, quasi nisi architecto harum fugit dolorem delectus commodi
          quidem porro?
        </Tabs.Tab>
      </Tabs>
    );
  }
}
