import React, { Component } from 'react';

// Components
import Dashboard from './Dashboard.js';
import Top from './Top.js';

// Database
import base from '../base';

import '../styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Top />
        <Dashboard />
      </div>
    );
  }
}

export default App;
