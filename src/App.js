import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'

import './App.css';

//The Agility Router
import { PageRouter } from './agility-react'

//Shared Components
import GlobalHeader from './GlobalHeader'

class App extends Component {

  render() {    
    return (
      <div className="App">
        <GlobalHeader agility={this.props.agility}/>
        <main className="main">
          <Switch>
            <Route path="*" render={() => <PageRouter agility={this.props.agility} />} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
