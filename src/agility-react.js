import React, { Component } from 'react';

class PageRouter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page: null,
            loading: true,
            isError: false,
            isPageNotFound: false,
            errorMessage: null
        }
    }

    componentDidMount() {
        //Get Sitemap Flat
        const api = this.props.apiClient;

        api.getSitemapFlat({
            channelName: this.props.channelName,
            languageCode: this.props.languageCode
        })
        .then(sitemap =>  {
            console.log(sitemap);
            const path = document.location.pathname;
            let pageInSitemap = sitemap[path];

            if(path === '/') {
                let firstPagePathInSitemap = Object.keys(sitemap)[0];
                pageInSitemap = sitemap[firstPagePathInSitemap];
            }

            if(pageInSitemap) {
                console.log('page in sitemap found :)', pageInSitemap);

                //GET PAGE
                api.getPage({
                    pageID: pageInSitemap.pageID,
                    languageCode: this.props.languageCode
                })
                .then(page =>  {
                    this.setPage(page);
                })
                .catch(error => {
                    //Throw error
                    this.handleError('error getting page item', error);
                });

            } else {
                //Could not find page
               this.pageNotFound();
            }

        })
        .catch(error => {
            //Throw error
            this.handleError('error getting sitemap :(', error);
        });
    
    }

    setPage = (page) => {
        console.log('page item', page);
        this.setState({
                        page: page,
                        loading: false,
                        isError: false,
                        isPageNotFound:false,
                        errorMessage: null
                    });
    }

    handleError = (msg, error) => {
        console.error(error);
        this.setState({
            page: null,
            loading: false,
            isError: true,
            isPageNotFound:false,
            errorMessage: msg
        });
        if(this.props.onPageRoutingError && typeof(this.props.onPageRoutingError) === 'function') {
            this.props.onPageRoutingError(msg, error);
        }
    }

    pageNotFound = () => {
        this.setState({
            page: null,
            loading: false,
            isError: false,
            isPageNotFound:true, 
            errorMessage: 'page NOT found in sitemap :('
        });
        if(this.props.onPageNotFound && typeof(this.props.onPageNotFound) === 'function') {
            this.props.onPageNotFound(this.state.errorMessage);
        }
    }

    renderTemplate = () => {

        if(this.state.page != null) {
            //HACK: need a proper reference name for page templates
            const pageTemplateName = this.state.page.templateName.replace(/[^0-9a-zA-Z]/g, '')
            const AgilityPageTemplateComponentToRender = this.props.pageTemplateComponents[pageTemplateName];
            return <AgilityPageTemplateComponentToRender page={this.state.page} moduleComponents={this.props.moduleComponents} />
        }
    }

    render() {    
        const renderPageTemplate = this.renderTemplate();

        return (
            <div>
                {renderPageTemplate}
            </div>
        );
    }
}

class ContentZone extends Component {

    componentDidMount() {}

    renderModules = () => {
        let modules = []
        
        const contentZoneName = this.props.name;
        const modulesForThisContentZone = this.props.page.zones[contentZoneName];

        modulesForThisContentZone.forEach(moduleItem => {
            const ModuleComponentToRender = this.props.moduleComponents[moduleItem.module];
            if(ModuleComponentToRender) {
                modules.push(<ModuleComponentToRender key={moduleItem.item.contentID} {...moduleItem.item} />)
            } else {
                console.error('No react component found for ' + moduleItem.module);
            }
        })

        return modules;
    }
    
    render() {    
        const renderModules = this.renderModules();

        return (
            <div>
                {renderModules}
            </div>
        );
    }
}

export {
    PageRouter,
    ContentZone
}

