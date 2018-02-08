import React, { Component, Fragment } from 'react';

// Styling components
import { Button, Container, Header } from 'semantic-ui-react';

class Icebreaker extends Component {

  getRandomIcebreaker = event => {
    console.log('clicking')
  }

  render() {
    return (
      <div>
        <Container>
          <Fragment>
            <Header as='h1'>Icebreaker</Header>
              <Button basic color='violet' onClick={this.getRandomIcebreaker}>
                Get an icebreaker!
            </Button>
          </Fragment>
        </Container>
      </div>
    )
  }
}

export default Icebreaker;
