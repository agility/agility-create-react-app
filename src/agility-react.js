import React, { Component } from 'react';

class PageRouter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page: null,
            pageInSitemap: null,
            loading: true,
            isError: false,
            isPageNotFound: false,
            errorMessage: null,
            path: document.location.pathname
        }
        this.sitemap = null;
    }

    //required when using the react-router-dom, since it thinks each page is the same component/content, we need todo some logic here
    static getDerivedStateFromProps(nextProps, prevState){
        if(prevState.path !== document.location.pathname){
            return {
                page: null,
                pageInSitemap: null,
                loading: true,
                isError: false,
                isPageNotFound: false,
                errorMessage: null,
                path: document.location.pathname
            }
         }
         else return null;
     }
     
     componentDidUpdate(prevProps, prevState) {
        //did the path change? If so, we need to re-route
        if(prevState.path !== document.location.pathname){
            this.setState({
                page: null,
                pageInSitemap: null,
                loading: true,
                isError: false,
                isPageNotFound: false,
                errorMessage: null,
                path: document.location.pathname
            });
            this.routePage()
        }
     }

    componentDidMount() {
        this.routePage();
    }

    getSitemap(api) {
        if(this.sitemap != null) {
            return Promise.resolve(this.sitemap);
        } else {
            const promise =  api.getSitemapFlat({
                channelName: this.props.agility.config.channelName,
                languageCode: this.props.agility.config.languageCode
            });
            promise.then(sitemap => {
                console.log(sitemap);
                this.sitemap = sitemap;
            })
            return promise;
        }
    }

    routePage() {
        const api = this.props.agility.client;

        //only get the sitemap once ;)
        this.getSitemap(api)
        .then(sitemap =>  {
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
                    languageCode: this.props.agility.config.languageCode
                })
                .then(page =>  {
                    this.setPage(page, pageInSitemap);
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

    setPage = (page, pageInSitemap) => {
        console.log('page item', page);
        this.setState({
                        page: page,
                        pageInSitemap: pageInSitemap,
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
            pageInSitemap: null,
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
            pageInSitemap: null,
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
            const AgilityPageTemplateComponentToRender = this.props.agility.config.pageTemplateComponents[pageTemplateName];
            return <AgilityPageTemplateComponentToRender page={this.state.page} pageInSitemap={this.state.pageInSitemap} agility={this.props.agility} />
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
        
        if(modulesForThisContentZone === undefined) {
            console.error(`Cannot render modules for zone "${contentZoneName}". This does not appear to be a valid content zone for this page template.`)
            return;
        }

        modulesForThisContentZone.forEach(moduleItem => {
            const ModuleComponentToRender = this.props.agility.config.moduleComponents[moduleItem.module];
            if(ModuleComponentToRender) {
                const propsToModule = {
                    item: moduleItem.item,
                    pageInSitemap: this.props.pageInSitemap,
                    agility: this.props.agility
                }
                modules.push(<ModuleComponentToRender key={moduleItem.item.contentID} {...propsToModule} />)
            } else {
                console.error(`No react component found for the module "${moduleItem.module}". Cannot render module.`);
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

