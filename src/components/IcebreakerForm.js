import React, { Component } from 'react';

// Database
import base from '../base';

// Semantic UI React Components
import { Container, Form, Button } from 'semantic-ui-react';

class IcebreakerForm extends Component {
  constructor(props) {
    super(props);
    this.state = { messages: [] }
  }

  addMessage(e){
    e.preventDefault();
    base.database().ref('messages').push( this.inputEl.value );
    this.inputEl.value = '';
  }

  render() {
    return (
      <Container>
        <Form size='small' onSubmit={this.addMessage.bind(this)}>
          <Form.Field>
            <input placeholder="Type Icebreaker Here" type="text" ref={ el => this.inputEl = el } />
          </Form.Field>
          <Button size='mini' basic color='violet' input type='submit'>
          Submit
          </Button>
        </Form>
      </Container>
    )
  }
}

export default IcebreakerForm;
