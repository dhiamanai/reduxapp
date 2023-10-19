import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getProducts = createAsyncThunk('products/getProducts',  async () => {
    const res = await fetch('http://localhost:4000/posts');
    const resp = await res.json();
    return await resp;
});

export const insertProducts = createAsyncThunk('products/insertProducts', 
    async (productData, thunkAPI) => {
        const { rejectWithValue } = thunkAPI;
        try {
            const res = await fetch('http://localhost:4000/posts', {
                method: 'POST',
                body: JSON.stringify(productData),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8'
                }
            }); 

            const data = await res.json();
            return data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    });

export const updateProduct = createAsyncThunk('products/updateProduct', 
    async (data, thunkAPI) => {
        const { rejectWithValue } = thunkAPI;
        try {
            console.log('<<< data ', data.title, '<<<id', data.id);
            const id = data.id;
            const res = await fetch(`http://localhost:4000/posts/${id}`, {
                method: 'PUT',
                body: JSON.stringify(data),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8'
                }
            });
            const upres = await res.json();
            return upres;
        } catch (error) {
            return rejectWithValue('erreur ',error.message);
        }
    });

export const deleteProduct = createAsyncThunk('products/deleteproduct',
    async (id, thunkAPI) => {
        const { rejectWithValue } = thunkAPI;
        try {
            console.log('<<< product deleted ');
        
            await fetch(`http://localhost:4000/posts/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-type': 'application/json; charset=UTF-8'
                }
            });

            return id;
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

        builder.addCase(insertProducts.fulfilled, (state, action) => {
            state.value.push(action.payload);
            console.log('fulfilled', state.value);
        }),

        builder.addCase(insertProducts.rejected, (state) => {
            console.log('rejected thunk');
            state.loading = false;
        });

        //updateProduct
        builder.addCase(updateProduct.pending, () => {
        }),

        builder.addCase(updateProduct.fulfilled, (state, action) => {
            console.log(action.payload);
            state.value.map((product) => {
                if(product.id === action.payload.id) {
                    product.title = action.payload.title;
                }
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

    }

});

export default productSlice.reducer;