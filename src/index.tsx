// require('file-loader?name=[name].[ext]!./index.html');

import React from 'react';

import { Provider } from 'react-redux';
import store from './store';

import App from './pages/App';
import { createRoot } from 'react-dom/client';
import './locales/i18n.js';


const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container!); // createRoot(container!) if you use TypeScript
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);