import React, { Component } from 'react';
import '../styles/App.css';

// Semantic UI React Components
import { Header } from 'semantic-ui-react';

class TopHeader extends Component {
  render() {
    return (
      <div>
       <Header textAlign='center' color='blue' size='huge' style={{ padding: '0.5em' }}>
        {this.props.title}
       </Header>
     </div>
    )
  }
}
 export default TopHeader;
