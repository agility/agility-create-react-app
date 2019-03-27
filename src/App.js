import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'

import './App.css';

//The Agility Router
import { PageRouter } from './agility-react'

//Shared Components
import GlobalHeader from './GlobalHeader'

class App extends Component {

  onPageRoutingError = (errorMsg, error) => {
    console.error(errorMsg, error);
  }

  onPageNotFound = (errorMsg) => {
    console.warn(errorMsg);
  }

  render() {    
    return (
      <div className="App">
        <GlobalHeader />
        <main className="main">
          <Switch>
            <Route path="*" render={() => <PageRouter onPageRoutingError={this.onPageRoutingError} onPageNotFound={this.onPageNotFound} />} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
