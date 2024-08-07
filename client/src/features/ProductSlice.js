import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


export const getProducts = createAsyncThunk('products/getProducts', 
    async () => {
        const response = await axios.get('http://localhost:3001/getdata');
        return  response.data;
    });

export const insertProducts = createAsyncThunk('products/insertProducts', 
    async (productData, thunkAPI) => {
        const { rejectWithValue } = thunkAPI;
        try {
            await axios.post('http://localhost:3001/create', productData)
                .then(() => console.log('product added to db'));
            return productData;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    });


export const updateProduct = createAsyncThunk('products/updateProduct', 
    async (data, thunkAPI) => {
        const { rejectWithValue } = thunkAPI;
        try {
            await axios.put('http://localhost:3001/update', data)
                .then(() => console.log('product updated'));
            return data;
        } catch (error) {
            return rejectWithValue('erreur ',error.message);
        }
    });

export const deleteProduct = createAsyncThunk('products/deleteproduct',
    async (id, thunkAPI) => {
        const { rejectWithValue } = thunkAPI;
        try {
            await axios.delete(`http://localhost:3001/delete/${id}`)
                .then(() => console.log('product deleted'));
        } catch (error) {
            return rejectWithValue('erreur ',error.message);
        }
    });

export const productSlice = createSlice({
    name: 'products',
    initialState: {
        value: null,
        loading: true,
        error: null
    },
    extraReducers: (builder) => {
        //getProducts
        builder.addCase(getProducts.pending, (state) => {
            state.loading = true;
        }),

        builder.addCase(getProducts.fulfilled, (state, action) => {
            state.value = action.payload;
            state.loading = false;
        }),

        builder.addCase(getProducts.rejected, (state) => {
            state.loading = false;
        });

        //insertProducts
        builder.addCase(insertProducts.pending, () => {
        }),

        builder.addCase(insertProducts.fulfilled, (state) => {
            // state.value.push(action.payload);
            // console.log('fulfilled', action.payload);
            state.loading = false;
        }),

        builder.addCase(insertProducts.rejected, (state) => {
            console.log('rejected thunk');
            state.loading = false;
        });

        //updateProduct
        builder.addCase(updateProduct.pending, () => {
        }),

        builder.addCase(updateProduct.fulfilled, (state, action) => {
            console.log('up product redx', action.payload);
            state.value.map((product) => {
                const id = product.id;
                return id == action.payload.id ? action.payload : product; 
                // if(product.id === action.payload.id) {
                //     product.title = action.payload.title;
                // }
            });
        }),

        builder.addCase(updateProduct.rejected, () => {
            console.log('rejected');
        });

        //deleteProduct
        builder.addCase(deleteProduct.pending, () => {
        });

        builder.addCase(deleteProduct.fulfilled, (state, action) => {
            state.value = state.value.filter((product) => product.id !== action.payload);
        });

        builder.addCase(deleteProduct.rejected, () => {
            console.log('rejected request');
        });

    }

});

export default productSlice.reducer;