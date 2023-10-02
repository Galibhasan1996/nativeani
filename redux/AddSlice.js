import { createSlice } from '@reduxjs/toolkit'


export const AddSlice = createSlice({
    name: 'AddSlice',
    initialState: {
        data: []
    },
    reducers: {
        Addtcart: (state, action) => {
            state.data = + 1;
        },
        removetocart: (state, action) => {
            state.data = -1;
        }

    }

})


export const { Addtcart, removetocart } = AddSlice.actions

export default AddSlice.reducer
