import React, { Component } from 'react';

// Components
import Top from './Top.js';

class Layout extends Component {
  render() {
    return (
      <div>
        <Top />
        {this.props.children}
      </div>
    )
  }
}

export default Layout;
