import React, { Component } from 'react';

// Semantic UI React Components
import { Button, Container } from 'semantic-ui-react';


class Random extends Component {
  render() {
    return (
      <Container style={{ padding: '1.5em'}} textAlign='center'>
        <Button basic color='blue'>
          Click Here To Get A Random Icebreaker
        </Button>
        <div>Icebreaker should display here, should be new one each time the button is clicked</div>
      </Container>
    )
  }
}

export default Random;
