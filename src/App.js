import React, { Component } from 'react';
import './App.css';

//The Agility Fetch API Client
import agility from '@agility/content-fetch'

//The Agility Router
import { PageRouter } from './agility-react'

//Our Agility Modules
import RichTextArea from './modules/RichTextArea'
import PostListing from './modules/PostListing'

//Our Agility PageTemplates
import OneColumnTemplate from './pageTemplates/OneColumnTemplate'

//Shared Components
import GlobalHeader from './GlobalHeader'

class App extends Component {
  constructor(props) {
    super(props)

    this.agilityApiClient = agility.getApi({
      instanceID: '1234-1234', //Set your instanceID here
      accessToken: 'fEpTcRnWO3EahHbojDCeY3PwGwAzpw2gveDuPn2l0nuqFbQYVcWrQ+a3/DHcWgCgn7UL2tgbSOS0AqrEOiXkTg==', //Set your access token here
    })

    this.agilityPageRouterConfig = {
      apiClient: this.agilityApiClient,
      languageCode: 'en-us',
      channelName: 'website',
      moduleComponents: {
        RichTextArea,
        PostListing
      },
      pageTemplateComponents: {
        OneColumnTemplate
      },
      onPageRoutingError: (errorMsg, error) => {
        console.error(errorMsg, error);
      },
      onPageNotFound: (errorMsg) => {
        console.warn(errorMsg);
      }
    }

  }

  render() {    
    return (
      <div className="App">
        <GlobalHeader apiClient={this.agilityApiClient} contentReferenceName='GlobalHeader' />
        <main>
          <PageRouter {...this.agilityPageRouterConfig} />
        </main>
      </div>
    );
  }
}

export default App;
