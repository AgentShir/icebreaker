import React, { Component, Fragment } from 'react';

// Semantic UI React Components
import { Container, Header, Grid, Segment } from 'semantic-ui-react';

// Styles
import '../styles/App.css';

// Components
import IcebreakerList from './IcebreakerList.js';

class Dashboard extends Component {
  render() {
    return (
      <div className="App">
      <Container>
        <Fragment>
            <Container>
              <Grid columns={3}>
                <Grid.Row>
                  <Grid.Column>
                      Tester Thing
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
