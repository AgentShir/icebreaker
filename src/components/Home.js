import React, { Component } from 'react';

// Components
import TopHeader from './TopHeader.js';

// Database
import base from '../base';

// Semantic UI React Components
import { Container, Grid, Card  } from 'semantic-ui-react';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { messages: [] };
  }

  componentWillMount(){
    let messagesRef = base.database().ref('messages').orderByKey().limitToLast(100);
    messagesRef.on('child_added', snapshot => {
      let message = { text: snapshot.val(), id: snapshot.key };
      this.setState({ messages: [message].concat(this.state.messages) });
    })
  }

  render() {
    return (
      <Container textAlign='center'>
          <TopHeader title="Icebreaker" />
            <Grid stackable columns={3} centered padded='vertically'>
              <Grid.Row>
                {
                  this.state.messages.map( message =>
                    <Grid.Column>
                      <Card.Group centered  style={{ padding: '0.8em'}}>
                        <Card color='blue'>
                          <Card.Content key={message.id}>
                            {message.text}
                          </Card.Content>
                        </Card>
                      </Card.Group>
                    </Grid.Column>
                           )
                      }
              </Grid.Row>
            </Grid>
          </Container>
      );
    }
  }

export default Home;
