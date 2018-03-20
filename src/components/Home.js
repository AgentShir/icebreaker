import React, { Component } from 'react';

// Components
import TopHeader from './TopHeader.js';

// Database
import base from '../base';

// Semantic UI React Components
import { Container, Grid, Card  } from 'semantic-ui-react';

// lodash functions
import map from 'lodash/map';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      authenticated: false
    }
    this.messagesRef = base.database().ref('/messages');
  }

  componentDidMount() {
    this.messagesRef.on('value', (snapshot) => {
      console.log(snapshot.val());
    })
  }

  render() {
    const { messages } = this.state;

    return (
      <Container textAlign='center'>
          <TopHeader title="Icebreaker" />
            <Grid stackable columns={3} centered padded='vertically'>
              <Grid.Row>
                <Grid.Column>
                  <Card.Group centered  style={{ padding: '0.8em'}}>
                    <Card color='blue'>
                      { map(messages, (message, key) =>  <Card.Content key={key}>{messages.name}</Card.Content>) }
                    </Card>
                  </Card.Group>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
      );
    }
  }

export default Home;
