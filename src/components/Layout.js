import React, { Component } from 'react';

// Semantic UI React Components
import { Container } from 'semantic-ui-react';

// Components
import Top from './Top.js';
import Footer from './Footer.js';

class Layout extends Component {
  render() {
    return (
      <div>
        <Container>
          <Top />
          {this.props.children}
          <Footer />
        </Container>
      </div>
    )
  }
}

export default Layout;
