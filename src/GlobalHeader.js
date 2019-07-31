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

  async componentDidMount() {
    const api = this.props.agility.client;

    try {
      //get the global header
      let contentItemList = await api.getContentList({
        referenceName: "globalheader",
        languageCode: this.props.agility.config.languageCode
      });

      if (contentItemList && contentItemList.items) {
        let contentItem = contentItemList.items[0];

        this.setState({ contentItem: contentItem });
      }
    } catch (error) {
      if (console) console.error("Could not load global header item.", error);
    }


    try {
      //get the nested sitemap
      let sitemap = await api.getSitemapNested({
        channelName: this.props.agility.config.channelName,
        languageCode: this.props.agility.config.languageCode
      });

      this.setState({ sitemap: sitemap })
    } catch (error) {
      if (console) console.error("Could not load nested sitemap.", error);
    }
  }

  renderHeader = () => {
    if (this.state.contentItem != null) {
      return <label>{this.state.contentItem.fields.siteName}</label>
    }
  }

  renderLinks = () => {
    if (this.state.sitemap != null) {

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
