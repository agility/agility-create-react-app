import React, { Component } from 'react';
import * as AgilityModules from './dependancies/modules'



class ContentZone extends Component {
    constructor(props) {
        super(props);

    }

    componentDidMount() {
        
    
    }

    renderModules = () => {
        let modules = []

        this.props.modules.forEach(function(moduleItem) {
            const ModuleComponentToRender = AgilityModules[moduleItem.module];
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

export default ContentZone;
