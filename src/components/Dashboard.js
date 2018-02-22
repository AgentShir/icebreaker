import React, { Component, Fragment } from 'react';

// Styles
import { Container, Header, Grid, Image, Segment } from 'semantic-ui-react';

// Components
import Icebreaker from './Icebreaker.js';

class Dashboard extends Component {
  render() {
    return (
      <div className="App">
      <Container>
        <Fragment>
            <Container>
              <Grid columns={3} divided>
                <Grid.Row>
                  <Grid.Column>
                      <Icebreaker />
                  </Grid.Column>
                  <Grid.Column>
                    <Header as='h4'>Sample Icebreaker</Header>
                  </Grid.Column>
                  <Grid.Column>
                    <Segment compact color='violet'>
                      Other segment test
                    </Segment>
                  </Grid.Column>
                </Grid.Row>

                <Grid.Row>
                  <Grid.Column>
                    1 Sample Icebreaker
                  </Grid.Column>
                  <Grid.Column>
                    2 Sample Icebreaker
                  </Grid.Column>
                  <Grid.Column>
                    3 Sample Icebreaker
                  </Grid.Column>
                </Grid.Row>
            </Grid>
          </Container>
        </Fragment>
      </Container>
      </div>
    )
  }
}

export default Dashboard;
