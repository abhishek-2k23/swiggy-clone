import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name : "cart",
    initialState : {
        items : [],
    },
    reducers : {
    addItem : (state,action) => {return {...state,items : [...state.items,action.payload]}},
    removeItem : (state, action) => { state.items = state.items.filter((item) => item.id == action.payload)},
    },
})

//export the actions
export const {addItem, removeItem} = cartSlice.actions;

//export default the cartSlice reducers
export default cartSlice.reducer;