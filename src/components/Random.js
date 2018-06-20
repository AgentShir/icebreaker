import React, { Component } from 'react';

// Database
import base from '../base';

// Semantic UI React Components
import { Button, Container, Card } from 'semantic-ui-react';

// Lodash
import  sample  from 'lodash';


class Random extends Component {

  constructor(props) {
    super(props);
    this.state = {
      icebreakers: null
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
    var breakIce = sample(this.breakerRef, 1);
    console.log('A thing is happening!', breakIce);
  }

  render() {
    const { icebreakers } = this.state;
    return (
      <Container style={{ padding: '1.5em'}} textAlign='center'>
        <Button basic color='blue' onClick={this.onClick}>
          Click Here To Get A Random Icebreaker
        </Button>
        <Container>
          <Card color='blue'>
            <Card.Content style={{ fontSize: '1.3em' }}>
              {/* Where did I see this before? */}
              {/* { sample(icebreakers, (icebreaker, key) =>  key={key} { icebreaker.icebreaker })} */}
            </Card.Content>
          </Card>
        </Container>
      </Container>
    )
  }
}

export default Random;
