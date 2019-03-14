import React, { Component } from 'react';



class RichTextArea extends Component {
    constructor(props) {
        super(props);

    }

    componentDidMount() {

    }
    setHTML = () => {
        return {__html: this.props.fields.textblob};
    }
    render() {    
        const setHTML = this.setHTML();
        return (
            <section>
                <h3>From Rich Text Area Module:</h3>
                <div dangerouslySetInnerHTML={setHTML}></div>
            </section>
        );
    }
}

export default RichTextArea;
