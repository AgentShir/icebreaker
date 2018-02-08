import React, { Component } from 'react';

// Components
import Icebreaker from './Icebreaker.js';
import base from '../base';

import '../styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Icebreaker />
      </div>
    );
  }
}

export default App;
