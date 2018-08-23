import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import TopNav from './common/TopNav';
import HomePage from './home/Home';
import MessageForm from './messages/MessageForm';
import MessagesIndex from './messages/MessagesIndex';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <TopNav />
          <div className='container'>
            <Switch>
              <Route exact path='/' component={HomePage} />
              <Route exact path='/contactUs' component={MessageForm} />
              <Route exact path='/messageHistory' component={MessagesIndex} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
