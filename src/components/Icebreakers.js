import React, { Component } from 'react';

// Components
import Icebreaker from './Icebreaker.js';

// Semantic UI React Components
import { Card } from 'semantic-ui-react';

// Lodash
import { map } from 'lodash/map';

class Icebreakers extends Component {
  render() {
    const { messages } = this.props;
    return (
      <Card.Content>
        { map (icebreakers, (icebreakers, key) => <Icebreaker key={key} {...icebreakers}/> ) }
      </Card.Content>
    )
  }
}

export default Icebreakers;
