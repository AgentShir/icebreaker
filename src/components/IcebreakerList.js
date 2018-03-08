import React, { Component } from 'react';
import _ from 'lodash';

// Components
import Icebreaker from './Icebreaker.js';

// Styles
import '../styles/App.css';
import { Card } from 'semantic-ui-react';

class IcebreakerList extends Component {
  render() {
    return (
      <Card>
        <Card.Content>
          <Icebreaker>
            Tester
          </Icebreaker>
        </Card.Content>
      </Card>
    )
  }
}

export default IcebreakerList;
