// require('file-loader?name=[name].[ext]!./index.html');
import React from 'react';
import App from './App';
import { createRoot } from 'react-dom/client';
import './locales/i18n.js';

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container!); // createRoot(container!) if you use TypeScript
root.render(<App />);