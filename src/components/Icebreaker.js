import React, { Component } from 'react';

// Styling components
import { Header, Card } from 'semantic-ui-react';

const items = [
  {
    header: 'Icebreaker 1',
    description: 'What is your favorite color?',
  },
  {
    header: 'Icebreaker 2',
    description: 'What is your favorite animal?',
  },
  {
    header: 'Icebreaker 3',
    description: 'What is your favorite season?',
  }
]


class Icebreaker extends Component {
  render() {
    return (
      <div>
        <Card.Group items={items} />
      </div>
    )
  }
}

export default Icebreaker;
