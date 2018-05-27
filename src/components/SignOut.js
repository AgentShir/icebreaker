import React, { Component } from 'react';

// Authentication Methods
import { auth } from '../base';

// Semantic UI React Components
import { Button } from 'semantic-ui-react';

class SignOut extends Component {
  render() {
    return (
      <Button type='submit' onClick={ auth.signOut() }>Sign Out</Button>
    )
  }
}

export default SignOut;
