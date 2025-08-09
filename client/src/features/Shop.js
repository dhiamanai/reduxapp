import { createSlice } from '@reduxjs/toolkit';

export const cart = createSlice({
    name: 'cart',
    initialState: {
        value: [],
        totalprice: 0,
        // Removed items property
    }, 

    reducers: {
        setCartValue:  (state, action) => {
            const { id, quantity, totalPrice } = action.payload;
            
            // Vérifier si le produit est déjà dans le panier
            const existingItem = state.value.find(item => item.id === id);
            
            if (existingItem) {
                existingItem.quantity += quantity;
                existingItem.totalPrice += totalPrice;
            } else {
                state.value.push(action.payload);
            }

            // Mettre à jour le prix total et le nombre d'articles
            state.totalprice += totalPrice;
        },
        removeProduct: (state, action) => {
            const productId = action.payload;
            const productIndex = state.value.findIndex(item => item.id === productId);
            
            if (productIndex !== -1) {
                const product = state.value[productIndex];
                state.totalprice -= product.totalPrice;
                state.value.splice(productIndex, 1);
            }
        },
    },
});

export const { setCartValue, reduceQuantity, removeProduct } = cart.actions;
export default cart.reducer;
