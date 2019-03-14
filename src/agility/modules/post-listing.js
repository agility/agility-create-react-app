import React, { Component } from 'react';



class PostListing extends Component {
    constructor(props) {
        super(props);

    }

    componentDidMount() {

    }

    render() {    
        
        return (
            <section>
                <h3>From the Post Listing Module:</h3>
                <pre>{JSON.stringify(this.props, null, 2)}</pre>
            </section>
        );
    }
}

export default PostListing;
