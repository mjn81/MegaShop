import {createSlice} from "@reduxjs/toolkit";

const initialState = { cart:[] , total:0 }

const CartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        addToCart:(state, action)=>{
            state.cart.push(action.payload.prod);
            state.total+=action.payload.quantity;
        },
        removeFromCart:(state , action) =>{

        }
    }
})