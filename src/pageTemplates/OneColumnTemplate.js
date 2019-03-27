import React, { Component } from 'react';
import { ContentZone } from '../agility-react'


class OneColumnTemplate extends Component {
    render() {    
        return (
        <div className="one-column-template">
            <ContentZone name='MainContentZone' {...this.props} />
        </div>
        );
    }
}

export default OneColumnTemplate;
