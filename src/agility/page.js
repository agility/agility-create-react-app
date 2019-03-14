import React, { Component } from 'react';

import aglFetch from '@agility/content-fetch'
import * as AgilityPageTemplates from './dependancies/pageTemplates'

class Page extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page: null
        }
    }

    componentDidMount() {
    

        var api = aglFetch.getApi({
            instanceID: '1234-1234',
            accessToken: 'fEpTcRnWO3EahHbojDCeY3PwGwAzpw2gveDuPn2l0nuqFbQYVcWrQ+a3/DHcWgCgn7UL2tgbSOS0AqrEOiXkTg==',
            languageCode: 'en-us'
        })

        
        //Get Sitemap Flat
        api.getSitemapFlat({
            channelID: 1
        })
        .then(sitemap =>  {
            console.log(sitemap);

            const path = document.location.pathname;

            const pageInSitemap = sitemap[path];

            if(pageInSitemap) {
                console.log('page in sitemap found :)', pageInSitemap);

                //GET PAGE
                api.getPage({
                    pageID: pageInSitemap.pageID
                })
                .then(page =>  {
                    console.log('page item', page);
                    this.setState({page: page});
                })
                .catch(function() {

                });

            } else {
                console.error('page NOT found in sitemap :(')
            }

        })
        .catch(function(error) {
            console.log(error);
        });
    
    }

    renderTemplate = () => {
        if(this.state.page != null) {

            return <AgilityPageTemplates.OneColumnTemplate page={this.state.page} />
        }
    }

    render() {    
        const renderTemplate = this.renderTemplate();

        return (
            <div>
                {renderTemplate}
            </div>
        );
    }
}

export default Page;
