import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import products from './features/ProductSlice';
import shop from './features/Shop';


const store = configureStore({
    reducer:{
        products,
        shop
    }
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    
    <Provider store={store}>
        <App />
    </Provider>

);

