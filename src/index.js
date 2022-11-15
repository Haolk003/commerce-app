import ReactDOM from 'react-dom/client';
import React from 'react';
import {Provider} from 'react-redux'
import {BrowserRouter} from 'react-router-dom';
import App from './App';
import './index.css';
import store from './store/store';
const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(
<React.StrictMode>
    <BrowserRouter >
    <Provider  store={store}>
        <App />
    </Provider >
    </BrowserRouter>
</React.StrictMode>);