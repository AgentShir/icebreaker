import React, { Component } from 'react';

// Components
import TopHeader from './TopHeader.js';
import Icebreaker from './Icebreaker.js';

// Database
import base from '../base';

// Semantic UI React Components
import { Container, Grid, Card  } from 'semantic-ui-react';

// Lodash
import map from 'lodash/map';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      icebreakers: null
    }
    this.icebreakersRef = base.database().ref('/icebreakers');
  }

  componentDidMount() {
    this.icebreakersRef.on('value', (snapshot) => {
      this.setState({ icebreakers: snapshot.val()  })
    })
  }

  render() {
    const { icebreakers } = this.state;
      return (
        <Container textAlign='center'>
          <TopHeader title="Icebreaker" />
            <Grid stackable columns={3} centered padded='vertically'>
              <Grid.Row>
                <Grid.Column>
                  <Card.Group centered style={{ padding: '0.8em' }}>
                    <Card color='blue'>
                      { map(icebreakers, (icebreaker, key) => <Card.Content key={key}>{ icebreaker.icebreaker }</Card.Content>)}
                    </Card>
                  </Card.Group>
                </Grid.Column>
              </Grid.Row>
            </Grid>
        </Container>
    )
  }
}

export default Home;
