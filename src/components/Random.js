import React, { Component } from 'react';

// Database
import base from '../base';

// Semantic UI React Components
import { Button, Container } from 'semantic-ui-react';

// Lodash
import sample from 'lodash/sample';


class Random extends Component {

  constructor(props) {
    super(props);
    this.state = {
      icebreaker: null
    }
    this.breakerRef = base.database().ref('/icebreakers');
  }

  componentDidMount() {
    this.breakerRef.on('value', (snapshot) => {
      this.setState({ icebreaker: snapshot.val() })
    })
  }

  onClick() {
    // Using sample function from lodash
    sample(this.breakerRef);
    console.log('A thing is happening!');
  }

  render() {
    return (
      <Container style={{ padding: '1.5em'}} textAlign='center'>
        <Button onClick={this.onClick} basic color='blue'>
          Click Here To Get A Random Icebreaker
        </Button>
        <div><h1>Things will display here</h1></div>
      </Container>
    )
  }
}

export default Random;
