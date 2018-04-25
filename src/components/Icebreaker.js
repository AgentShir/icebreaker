import React, { Component } from 'react';

// Semantic UI React Components
import { Card } from 'semantic-ui-react';

// Styles
import '../styles/App.css';

class Icebreaker extends Component {
  render() {
    return (
      <Card>
        {this.props.icebreaker}
      </Card>
    )
  }
}

export default Icebreaker;
