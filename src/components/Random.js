import React, { Component } from 'react';

// Database
import base from '../base';

// Semantic UI React Components
import { Button, Container } from 'semantic-ui-react';

// Lodash
import sample from 'lodash/sample';

// Redux is a possible solution.  Will try when I have more time.


class Random extends Component {

  constructor(props) {
    super(props);
    this.state = {
      icebreakers: null
    }
    // Connect to firebase
    this.breakerRef = base.database().ref('/icebreakers').limitToFirst(1);
  }

  componentDidMount() {
    var icebreaker = this.breakerRef.on('value', snapshot => {
      console.log(snapshot.val(), 'Look! A thing!');
    })
    return icebreaker;
  }

  testEvent(event) {
      console.log('A thing is happening!');
    }

  render() {
    const { icebreakers } = this.state;
    return (
      <Container style={{ padding: '1.5em'}} textAlign='center'>
        <Button basic color='blue' onClick={this.testEvent}>
          Click Here To Get A Random Icebreaker
        </Button>
          <Container>
            <div>
              <h4>Random icebreaker here</h4>
            </div>
          </Container>
      </Container>
    )
  }
}

export default Random;
