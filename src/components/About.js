import React, { Component } from 'react';

// Semantic UI React Components
import { Container, Header, List } from 'semantic-ui-react';

class About extends Component {
  render() {
    return (
      <Container style={{ padding: '1.5em'}}>
        <Container textAlign='center'>
          <Container text textAlign='justified'>
            <Header color='blue' as='h2' textAlign='center' dividing>
              About Icebreaker
            </Header>
              <p>I wish that I could introduce myself using something other than a title...</p>
              <p>As a recent bootcamp grad, I have made the rounds of the local tech MeetUps, introducing myself and getting to know the other developers in the city.  But, I got tired of the basic introductions...</p>
              <p>Hi, my name is... and my stack is...</p>
              <p>Enter, Icebreaker</p>
              <p>At the moment, Icebreaker has a handful of icebreakers... short questions designed to dig a little deeper into a person.  What are their hobbies?  What do they like?</p>
            <Header color='blue' as='h2' textAlign='center' dividing>
              Tech Specs
            </Header>
              <p>React, Firebase</p>
            <Header color='blue' as='h2' textAlign='center' dividing>
              Future Features
            </Header>
              <p>Here are a few features that I hope to eventually add to the app:</p>
              <List>
                <List.Item>
                  <List.Icon name='snowflake outline' />
                    <List.Content>Icebreaker Categories</List.Content>
                </List.Item>
                <List.Item>
                  <List.Icon name='snowflake outline' />
                    <List.Content>Group Specific Icebreakers: A group can enter their own icebreakers to use.</List.Content>
                </List.Item>
                <List.Item>
                  <List.Icon name='snowflake outline' />
                    <List.Content>Random: Click a button to get a random icebreaker.</List.Content>
                </List.Item>
              </List>
          </Container>
        </Container>
      </Container>
    )
  }
}

export default About;
