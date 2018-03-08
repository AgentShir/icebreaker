import React, { Component } from 'react';

// Semantic UI React Components
import { Header, Segment } from 'semantic-ui-react';

class TopHeader extends Component {
  render() {
    return (
      <Segment>
       <Header textAlign='center' color='violet' size='huge'>
        {this.props.title}
       </Header>
      </Segment>
    )
  }
}
 export default TopHeader;
