import React, { Component } from 'react';
import agilityConfig from './agility.config'
import agilityContentFetch from '@agility/content-fetch'
import App from './App'

class AgilityApp extends Component {
    constructor(props) {
        super(props)
        this.agility = {
            client: this.createClient(),
            config: agilityConfig,
            onPageRoutingError: this.onPageRoutingError,
            onPageNotFound: this.onPageNotFound
        }
    }
  
    createClient() {
        return agilityContentFetch.getApi({
            guid: agilityConfig.guid,
            accessToken: agilityConfig.accessToken,
            caching: agilityConfig.caching,
            //baseUrl: 'https://agility-fetch-api-dev.azurewebsites.net',
            baseUrl: 'https://james-manual-test.agilitycms.cloud'
        })
    }

    onPageRoutingError = (errorMsg, error) => {
        console.error(errorMsg, error);
      }
    
    onPageNotFound = (errorMsg) => {
        console.warn(errorMsg);
    }

    render() {    
        return (
            <App agility={this.agility} />
        );
    }
}

export default AgilityApp;
