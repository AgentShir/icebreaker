import React, { Component } from 'react';

// Semantic UI React Components
import { Segment, Icon } from 'semantic-ui-react';

class Footer extends Component {
  render() {
    return (
      <Segment inverted color='blue' textAlign='right'
      style={{ padding: '1 em' }}>
        <Icon name='facebook square' size='big' />
        <Icon name='github square' size='big' />
        <Icon name='linkedin square' size='big' />
        <Icon name='youtube' size='big' />
        <Icon name='instagram' size='big' />
        <Icon name='wordpress' size='big' />
      </Segment>
    )
  }
}

export default Footer;
