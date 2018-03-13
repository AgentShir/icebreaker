import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Components
import Layout from './Layout.js';
import Home from './Home.js';
import About from './About.js';
import SignIn from './SignIn.js';
import Top from './Top.js';

// Styles
import '../styles/App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/home" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/signIn" component={SignIn} />
            <Route path="/top" component={Top} />
          </Switch>
        </Layout>
      </Router>
    )
  }

}

export default App;
