import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
//import aglFetch from '@agility/content-fetch'

import Page from './agility/page'

class App extends Component {
  componentDidMount() {
    
    // var api = aglFetch.getApi({
    //   instanceID: '1234-1234',
    //   accessToken: 'fEpTcRnWO3EahHbojDCeY3PwGwAzpw2gveDuPn2l0nuqFbQYVcWrQ+a3/DHcWgCgn7UL2tgbSOS0AqrEOiXkTg==',
    //   languageCode: 'en-us'
    // })

    // //Get Content Item
    // api.getContentItem({
    //   contentID: 22
    // })
    // .then(function(contentItem) {
    //     console.log(contentItem);
    // })
    // .catch(function(error) {
    //     console.log(error);
    // });

    // //Get Content List
    // api.getContentList({
    //   referenceName: 'posts' 
    // })
    // .then(function(response) {
    //   console.log(response);
    // })
    // .catch(function(response) {
    //     console.log(response);
    // });

    // //Get Page
    // api.getPage({
    //     pageID: 1
    // })
    // .then(function(page) {
    //     console.log(page);
    // })
    // .catch(function(error) {
    //     console.log(error);
    // });

    // //Get Sitemap Flat
    // api.getSitemapFlat({
    //   channelID: 1
    // })
    // .then(function(sitemap) {
    //   console.log(sitemap);
    // })
    // .catch(function(error) {
    //     console.log(error);
    // });

    // //Get Sitemap Nested
    // api.getSitemapNested({
    //   channelID: 1
    // })
    // .then(function(sitemap) {
    //   console.log(sitemap);
    // })
    // .catch(function(error) {
    //     console.log(error);
    // });
  }
  render() {    

    return (
      <div className="App">
        <header className="App-header">
          <h1>This is the header</h1>
        </header>
        <main>
          <Page />
        </main>
        <footer>
          <h1>This is the footer</h1>
        </footer>
      </div>
    );
  }
}

export default App;
