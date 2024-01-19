import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name : "cart",
    initialState : {
        items : [],
    },
    reducers : {
    addItem : (state,action) => {
        console.log(action.payload);
        if(state.items.find((item) => item.id === action.payload.id)){
            console.log("Already exist, so inc");
            const idx = state.items.findIndex((item) => item.id === action.payload.id);
            
            //update the no. of Items
            state.items[idx].NoOfItems++;
        }else{
            const item = {
                NoOfItems : action.payload.NoOfItems,
                id : action.payload.id,
                name : action.payload.name,
                price : action.payload.price || 100
            }
            state.items.push(item);
        }
    },
    removeItem : (state, action) => { 
        const idx = state.items.findIndex((item) => item.id === action.payload);
        let item = state.items[idx];
        console.log(item);
        if(item.NoOfItems > 1){
            item.NoOfItems = item.NoOfItems - 1;
            // state.items.push(item);
        }else{
            state.items = state.items.filter((item) => item.id !== action.payload);
        }
    },
    },
})

//export the actions
export const {addItem, removeItem} = cartSlice.actions;

//export default the cartSlice reducers
export default cartSlice.reducer;