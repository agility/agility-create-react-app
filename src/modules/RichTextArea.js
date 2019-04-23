import React, { Component } from 'react';



class RichTextArea extends Component {
    componentDidMount() {

    }
    setHTML = () => {
        return {__html: this.props.item.fields.textblob};
    }
    render() {    
        const setHTML = this.setHTML();
        return (
            <section className="container">
                <h3>From Rich Text Area Module:</h3>
                <div dangerouslySetInnerHTML={setHTML}></div>
            </section>
        );
    }
}

export default RichTextArea;
