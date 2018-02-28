import React, { Component } from 'react';

// Components
import Dashboard from './Dashboard.js';
import Top from './Top.js';

// Database
import base from '../base';

// Styles
import '../styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Top /> {/* Top Component to load first */}
        <Dashboard /> {/* Dashboard Component to load after clicking button */}
      </div>
    );
  }
}

export default App;
