import React, { Component } from 'react';

// Components
import Dashboard from './Dashboard.js';
import Top from './Top.js';
import IcebreakerList from './IcebreakerList.js';
import TopHeader from './TopHeader.js';

// Database
import base from '../base';

// Styles
import '../styles/App.css';

// Semantic UI React Components
import { Button } from 'semantic-ui-react';

class App extends Component {

  getIcebreaker = event => {
    console.log('submit')
  }

  constructor(props) {
    super(props);
    this.state = { messages: [] };
  }
  componentWillMount(){
    let messagesRef = base.database().ref('messages').orderByKey().limitToLast(100);
    messagesRef.on('child_added', snapshot => {
      let message = { text: snapshot.val(), id: snapshot.key };
      this.setState({ messages: [message].concat(this.state.messages) });
    })
  }
  addMessage(e){
    e.preventDefault();
    base.database().ref('messages').push( this.inputEl.value );
    this.inputEl.value = '';
  }
  render() {
    return (
      <div className="container">
        <TopHeader title="Icebreaker" />
          <Top />
          <Dashboard />
          <form onSubmit={this.addMessage.bind(this)}>
            <input type="text" ref={ el => this.inputEl = el }/>
            <Button size='mini' basic color='violet' onClick={this.getIcebreaker} input type="submit">
              Submit
            </Button>
            <ul>
            {
              this.state.messages.map( message => <li key={message.id}>{message.text}</li> )
            }
            </ul>
          </form>
      </div>
    );
  }
}

export default App;
