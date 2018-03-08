import React, { Component } from 'react';

// Semantic UI React Components
import { Card } from 'semantic-ui-react';

// Database

// Styles
import '../styles/App.css';

class Icebreaker extends Component {
  render() {
    return (
      <div>
        <Card>
          {this.props.icebreaker}
        </Card>
      </div>
    )
  }
}

export default Icebreaker;
