import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import {state} from './redux/state';

ReactDOM.render(
    <React.StrictMode>
        <App
            posts={state.posts}
            messages={state.messages}
            profile={state.profile}
        />
    </React.StrictMode>,
    document.getElementById('root')
);
