import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

function renderDOM() {
    ReactDOM.render(
        <React.StrictMode>
            <App/>
        </React.StrictMode>,
        document.getElementById('root'),
    );
}

renderDOM();