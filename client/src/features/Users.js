import { createSlice } from '@reduxjs/toolkit';

export const UserSlice = createSlice({
    name: 'users',
    initialState: { 
    },
    reducers: {
        addUser: (state, action ) => {
            state.value.push(action.payload);
        },
        deleteUser: (state, action ) => {
            state.value = state.value.filter((user) => user.id !== action.payload.id);
        },
        updateUser: (state, action ) => {
            state.value.map((user) => {
                if(user.id === action.payload.id) {
                    user.name = action.payload.name;
                }
            });
        }
    },

});

export const { addUser, deleteUser, updateUser } = UserSlice.actions;
export default UserSlice.reducer;