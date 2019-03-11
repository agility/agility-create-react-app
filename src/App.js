import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import agility from 'agility-js-sdk'

class App extends Component {
  componentDidMount() {
    
    var api = agility.getApi({
      instanceID: '1234-1234',
      accessToken: 'fEpTcRnWO3EahHbojDCeY3PwGwAzpw2gveDuPn2l0nuqFbQYVcWrQ+a3/DHcWgCgn7UL2tgbSOS0AqrEOiXkTg==',
      languageCode: 'en-us'
    })

    api.getSitemapFlat()
      .then(function(response) {
        console.log(response);
      })
      .catch(function(response) {
          console.log(response);
      });

      api.getSitemapNested()
      .then(function(response) {
        console.log(response);
      })
      .catch(function(response) {
          console.log(response);
      });

      api.getContentItem(22)
      .then(function(response) {
        console.log(response);
      })
      .catch(function(response) {
          console.log(response);
      });

      api.getContentList("posts")
      .then(function(response) {
        console.log(response);
      })
      .catch(function(response) {
          console.log(response);
      });

      api.getPage(1)
      .then(function(response) {
        console.log(response);
      })
      .catch(function(response) {
          console.log(response);
      });

      
  }
  render() {    

    return (
      <div className="App">
        <header className="App-header">
          <h1>This is the header</h1>
        </header>
        <main>
          <h2>This is the main content</h2>
        </main>
      </div>
    );
  }
}

export default App;
