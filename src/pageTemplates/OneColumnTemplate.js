import React, { Component } from 'react';
import { ContentZone } from '../agility-react'


class OneColumnTemplate extends Component {
    render() {    
        return (
        <div>
            <h2>The page template (One Column Template)</h2>
            <ContentZone name='main' {...this.props} />
        </div>
        );
    }
}

export default OneColumnTemplate;
