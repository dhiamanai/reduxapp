import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import products from './features/ProductSlice';
import shop from './features/Shop';


// Hydrate cart state from localStorage on app start
const preloadedCart = (() => {
  try {
    const raw = localStorage.getItem('cart');
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
})();

const preloadedTotalPrice = preloadedCart.reduce((sum, item) => {
  const quantity = typeof item.quantity === 'number' ? item.quantity : 0;
  const unitPrice = typeof item.price === 'number' ? item.price : 0;
  const lineTotal = typeof item.totalPrice === 'number' ? item.totalPrice : unitPrice * quantity;
  return sum + lineTotal;
}, 0);

const store = configureStore({
  reducer: {
    products,
    shop,
  },
  preloadedState: {
    shop: {
      value: preloadedCart,
      totalprice: preloadedTotalPrice,
    },
  },
});

// Persist cart changes to localStorage
store.subscribe(() => {
  const state = store.getState();
  try {
    localStorage.setItem('cart', JSON.stringify(state.shop.value));
  } catch {}
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    
    <Provider store={store}>
        <App />
    </Provider>

);

