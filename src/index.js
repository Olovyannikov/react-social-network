import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';

const state = {
    posts: [
        {
            src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxLkbtTa0kfmKizxJgqECQLdlt_xq1R2jEQQ&usqp=CAU',
            alt: 'avatarka',
            message: 'LOVE IT!',
            id: Math.floor(Math.random() * 100),
            name: 'Dima',
            likes: 12
        },
        {
            src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToxtcl-1iO_yF8nszUob_EssatZo8c_aZbuwiH_IxKpHXL3iUI03IRkfkUfX0GPwpzsHg&usqp=CAU',
            alt: 'second avatarka',
            message: 'YO!',
            id: Math.floor(Math.random() * 100),
            name: 'Aang',
            likes: 121
        }
    ],

}

ReactDOM.render(
    <React.StrictMode>
        <App posts={state.posts}/>
    </React.StrictMode>,
    document.getElementById('root')
);
