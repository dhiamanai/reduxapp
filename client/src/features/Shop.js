import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


export const cart = createSlice({

    name: 'cart',
    initialState: {
        value: [],
        totalprice: 0,
        items: 0
    },

    reducers: {
        setCartValue: (state, action) => {
            state.value.push(action.payload); // Met à jour la valeur avec la donnée transmise
            state.totalprice += action.payload.price;
            state.items += 1;
        },
    },
    
   
});

export const { setCartValue } = cart.actions; // Exportez l'action
export default cart.reducer;