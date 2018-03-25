import React, { Component } from 'react';

// Semantic UI React Components
import { Segment, Icon } from 'semantic-ui-react';

import '../styles/App.css';

class Footer extends Component {
  render() {
    return (
      <Segment inverted color='blue' textAlign='right'
      style={{ padding: '1 em' }}>
        <Icon name='facebook square' size='big' disabled />
        <Icon name='github square' size='big' disabled />
        <Icon name='linkedin square' size='big' disabled />
        <Icon name='youtube' size='big' disabled />
        <Icon name='instagram' size='big' disabled />
        <Icon name='wordpress' size='big' disabled />
      </Segment>
    )
  }
}

export default Footer;
