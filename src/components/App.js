import React, { Component } from 'react';

// Components
import TopHeader from './TopHeader.js';

// Database
import base from '../base';

// Styles
import '../styles/App.css';

// Semantic UI React Components
import { Button, Container, Grid, Card, Form, Input } from 'semantic-ui-react';

class App extends Component {

  getIcebreaker = event => {
    console.log('submit')
  }

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
  addMessage(e){
    e.preventDefault();
    base.database().ref('messages').push( this.inputEl.value );
    this.inputEl.value = '';
  }
  render() {
    return (
      <Container textAlign='center'>
        <TopHeader title="Icebreaker" />
          <Form size='small' onSubmit={this.addMessage.bind(this)}>
            <Input type="text" ref={ el => this.inputEl = el }/><br />
            <Button size='mini' basic color='violet' input type="submit">
              Submit
            </Button>
          </Form>
                  <Grid columns={3} centered padded='vertically'>
                    <Grid.Row>
                    {
                      this.state.messages.map( message =>
                        <Grid.Column>
                          <Card.Group centered>
                            <Card color='violet'>
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

export default App;
