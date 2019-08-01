import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'

import './App.css';

//The Agility Router
import { PageRouter } from './agility-react'

//Shared Components
import PreviewBar from './PreviewBar'
import GlobalHeader from './GlobalHeader'

class App extends Component {
  componentDidMount() {

  }

  render() {
    return (
      <div className="App">
        <PreviewBar agility={this.props.agility} />
        <GlobalHeader agility={this.props.agility} />
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
