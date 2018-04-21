import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Components
import Layout from './Layout.js';
import Home from './Home.js';
import About from './About.js';
import Admin from './Admin.js';
import Top from './Top.js';
import Footer from './Footer.js';
import SignIn from './SignIn.js';

// Styles
import '../styles/App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/admin" component={Admin} />
            <Route path="/signin" component={SignIn} />
            <Route path="/top" component={Top} />
            <Route path="/footer" component={Footer} />
          </Switch>
        </Layout>
      </Router>
    )
  }

}

export default App;
