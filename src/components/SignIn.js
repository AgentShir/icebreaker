import React, { Component } from 'react';
import Admin from './Admin.js'

// Semantic UI React Components
import { Container, Header, Button, Icon } from 'semantic-ui-react';

// Styles
import '../styles/App.css';

// Authentication Methods
import { auth, googleAuthProvider } from '../base';

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null
    };
  }

  componentDidMount() {
    auth.onAuthStateChanged((currentUser) => {
      this.setState({ currentUser });
    })
  }

  render() {
    const { currentUser } = this.state;

    return (
        <Container style={{ padding: '1.5em'}}>
          <Container align='center'>
              {!currentUser && <Button color='blue' type='submit' onClick={() => auth.signInWithPopup(googleAuthProvider)}>
                <Icon name='google' />
                  Google Sign In
              </Button>}
              {currentUser && <div><Header color='blue' as='h1' textAlign='center'>Input Icebreaker Here</Header><Admin user={currentUser} /></div>}
          </Container>
        </Container>
    )
  }
}

export default SignIn;
