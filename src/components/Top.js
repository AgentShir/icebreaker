import React, {Component} from 'react';

// Semantic UI React Components
import { Header, Button } from 'semantic-ui-react';

// Styles
import '../styles/App.css';

class Top extends Component {

  getRandomIcebreaker = event => {
    console.log('clicking')
  }

  render() {
    return (
      <div className="App">
        <Header size='large'>
          Icebreaker
        </Header>
        <Button basic color='violet' onClick={this.getRandomIcebreaker}>
          Get an icebreaker!
      </Button>
      </div>
    )
  }
}

export default Top;
