import React, { Component } from 'react';
import './PreviewBar.css'

class PreviewBar extends Component {

  clearPreviewMode() {
    window.location.href = "?AgilityPreview=0";
  }

  render() {
    const api = this.props.agility.client;
    if (api.config.isPreview === true) {
      return (<div id="agility-preview-bar" title="You are currently in Preview Mode.">Preview Mode <span id="agility-clear-preview" onClick={this.clearPreviewMode} title="Clear preview mode">X</span></div>)
    } else {
      return null;
    }
  }
}

export default PreviewBar;
