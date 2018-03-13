import React, { Component } from 'react';

// Components
import IcebreakerForm from './IcebreakerForm.js';

// Semantic UI React Components
import { Container } from 'semantic-ui-react';

class Admin extends Component {
  render() {
    return (
      <Container>
        <IcebreakerForm />
      </Container>
    )
  }
}

export default Admin;
