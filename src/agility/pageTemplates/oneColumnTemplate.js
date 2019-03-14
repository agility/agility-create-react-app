import React, { Component } from 'react';
import ConentZone from '../contentZone'


class OneColumnTemplate extends Component {
    constructor(props) {
        super(props);

    }

    componentDidMount() {}

    render() {    

        return (
        <div>
            <h2>The page template (One Column Template)</h2>
            <ConentZone modules={this.props.page.zones.main} />
        </div>
        );
    }
}

export default OneColumnTemplate;
