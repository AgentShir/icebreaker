import React, { Component } from 'react';

// Database
import base from '../base';

// Semantic UI React Components
import { Container, Form, Button } from 'semantic-ui-react';

// trim - trims string whitespace
import trim from 'trim';

class IcebreakerForm extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.onKeyup = this.onKeyup.bind(this);
    this.state = {
      icebreaker: ''
    }
  }

  onChange(e){
    this.setState({
      icebreaker: e.target.value
    })
  }

  onKeyup(e){
    if(e.keyCode === 13 && trim(e.target.value) !== ''){
      e.preventDefault();
      var newIcebreaker = base.database().ref('/icebreakers');
      newIcebreaker.push({
        icebreaker: trim(e.target.value)
      })
      this.setState({
        icebreaker: ''
      })
    }
  }

  render() {
    return (
      <Container style={{ padding: '1.5em'}}>
        <Form size='small'>
          <Form.Field style={{ width: '50%'}}>
            <Form.Input placeholder="Type Icebreaker Here" type="text" onChange={this.onChange} onKeyUp={this.onKeyup} value={this.state.icebreaker} />
          </Form.Field>
          <Button size='mini' basic color='blue' input type='submit'>
          Submit
          </Button>
        </Form>
      </Container>
    )
  }
}

export default IcebreakerForm;
