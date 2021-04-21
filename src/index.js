import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import state from './redux/state';
import {BrowserRouter as Router} from "react-router-dom";

ReactDOM.render(
    <React.StrictMode>

        <Router>
            <App state={state} />
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
);
