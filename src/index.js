import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import "core-js/stable";
import AgilityApp from './AgilityApp';
import { BrowserRouter } from 'react-router-dom'

ReactDOM.render((
    <BrowserRouter>
        <AgilityApp />
    </BrowserRouter>
), document.getElementById('root'));
