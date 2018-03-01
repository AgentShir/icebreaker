import React, { Component } from 'react';

// Semantic UI React Components
import { Card } from 'semantic-ui-react';

// Database
import { app, base } from '../base.js';

// Styles
import '../styles/App.css';

class Icebreaker extends Component {
  constructor(props) {
    super(props)
    this.state = {
      icebreaker: ''
    }
  }

  showIcebreaker

  componentWillMount() {
    this.icebreakerRef = base.syncState('icebreakers', {
      context: this,
      state: 'icebreakers'
    });
  }

  componentWillUnmount() {
    base.removeBinding(this.icebreakerRef);
  }

  render() {
    return (
      <div>
        <Card.Group />
      </div>
    )
  }
}

export default Icebreaker;
