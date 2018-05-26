import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import App from './components/App';

import Index from './pages/index';
import sobre from './pages/sobre';

import './index.css';

ReactDOM.render(
    <Router>
        <App>
            <Route exact path="/" component={Index} />
            <Route exact path="/sobre" component={sobre} />
        </App>
    </Router>,
    document.getElementById('root')
);
