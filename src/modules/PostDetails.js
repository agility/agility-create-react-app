import React, { Component } from 'react';
import { getApi } from '../agility-react'
import agilityConfig from '../agility.config'

import './PostDetails.css'

class PostDetails extends Component {
    constructor(props) {
        super(props)
        this.state = {
            post: null
        }
    }
    componentDidMount() {
        const api = getApi();
        api.getContentItem({
            contentID: this.props.pageInSitemap.contentID,
            languageCode: agilityConfig.languageCode
        })
        .then(post => {
            console.log('dynamicPost', post)
            this.setState({post: post})
        })
        .catch(error => {
            console.log(error);
        })
    }
    renderPostContent(html) {
        return {__html: html };
    }
    renderPost() {
        let post = null;
        if(this.state.post != null) {
            
            post = (
                <div className="post">
                    <h1>{this.state.post.fields.title}</h1>
                    {this.state.post.fields.image &&
                        <img src={this.state.post.fields.image.url + '?w=860'} alt={this.state.post.fields.image.label} />
                    }
                    <div className="post-content" dangerouslySetInnerHTML={this.renderPostContent(this.state.post.fields.details)}></div>
                </div>);
            
        }
        return post;
    }
    render() {
        return (
            <section className="post-details">
                <div className="container">
                    {this.renderPost()}
                </div>
            </section>
        );
    }
}

export default PostDetails;
