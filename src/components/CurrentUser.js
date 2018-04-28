import React from 'react';
import PropTypes from 'prop-types';
import IcebreakerForm from './IcebreakerForm.js';

// Semantic UI React Components
import { Image, Header } from 'semantic-ui-react';

// Styles
import '../styles/App.css';

const CurrentUser = ({ user }) => {
  return (
    <Header as='h3'>
        <Image circular src={ user.photoURL } alt={ user.displayName } />
              { user.displayName } is logged in.
        <Header color='blue' as='h1' textAlign='center'>Input Icebreaker</Header>
        <IcebreakerForm />
    </Header>
  )
}

CurrentUser.propTypes = {
  user: PropTypes.shape({
    displayName: PropTypes.string,
    email: PropTypes.string.isRequired,
    photoURL: PropTypes.string,
    uid: PropTypes.string.isRequired
  })
};

export default CurrentUser;
