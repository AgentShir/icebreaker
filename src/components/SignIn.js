import React, { Component } from 'react';

// Semantic UI React Components
import { Container, Header, Form, Button, Icon } from 'semantic-ui-react';

// Styles
import '../styles/App.css';

// Authentication Methods
import { auth, googleAuthProvider, facebookAuthProvider } from '../base';

class SignIn extends Component {
  render() {
    return (
        <Container style={{ padding: '1.5em'}}>
          <Container align='center' style={{ width: '40%'}}>
            <Header color='blue' as='h1' textAlign='center'>Sign In Here</Header>
              <Form>
                <Button color='blue' type='submit' onClick={() => auth.signInWithPopup(googleAuthProvider)}>
                  <Icon name='google' />
                    Google Sign In
                </Button>
                <Button color='blue' type='submit' onClick={() => auth.signInWithPopup(facebookAuthProvider)}>
                  <Icon name='facebook f' />
                  Facebook Sign In
                </Button>
              </Form>
          </Container>
        </Container>
    )
  }
}

export default SignIn;
