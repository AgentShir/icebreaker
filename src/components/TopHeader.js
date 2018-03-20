import React, { Component } from 'react';
import '../styles/App.css';

// Semantic UI React Components
import { Header, Segment } from 'semantic-ui-react';

class TopHeader extends Component {
  render() {
    return (
      <Segment>
       <Header textAlign='center' color='blue' size='huge'>
        {this.props.title}
       </Header>
      </Segment>
    )
  }
}
 export default TopHeader;
