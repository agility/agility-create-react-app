import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './GlobalHeader.css'

class GlobalHeader extends Component {
  constructor(props) {
    super(props)
    this.state = {
      contentItem: null,
      sitemap: null
    }
  }
  componentDidMount = () => {
    const api = this.props.agility.client;

    api.getContentItem({
      contentID: 21,
      languageCode: this.props.agility.config.languageCode
    })
    .then(contentItem => {
      this.setState({contentItem: contentItem});
    })
    .catch(error => {
      console.error(error);
    })

    api.getSitemapNested({
      channelName: this.props.agility.config.channelName,
      languageCode: this.props.agility.config.languageCode
    })
    .then(sitemap => {
      console.log('nested sitemap', sitemap)
      this.setState({ sitemap: sitemap })
    })
    .catch(error => {
      console.error(error);
    })
  }

  renderHeader = () => {
    if(this.state.contentItem != null) {
      return <label>{this.state.contentItem.fields.siteName}</label>
    }
  }

  renderLinks = () => {
    if(this.state.sitemap != null) {
      
      let links = [];
      this.state.sitemap.forEach(node => {
        links.push(<li key={node.pageID}><Link to={node.path}>{node.menuText}</Link></li>)
      })
      return links;
    }
  }

  render() {    
    return (
        <header className="header">
          <div className="container">
            {this.renderHeader()}
            <ul>
              {this.renderLinks()}
            </ul>
          </div>
        </header>
    );
  }
}

export default GlobalHeader;
