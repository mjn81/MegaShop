import {createSlice} from "@reduxjs/toolkit";

const initialState = { cart:[] , total:0 }

const CartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        addToCart:(state, action)=>{
            const product = action.payload.prod;
            const q = action.payload.quantity;
            const fId = state.cart.findIndex(p => p.id === product.id);
            if(fId === -1){
                state.cart.push(product);
            }
            else{
                state.cart[fId].amount+= q;
            }
            state.total+= q*product.tPrice ;
            console.log(state.cart); // development mode
        },
        removeFromCart:(state , action) =>{
            const product = action.payload.prod;
            const q = action.payload.quantity;
            const fId = state.cart.findIndex(p => p.id === product.id);
            if(fId === -1){
                console.log("ERROR : YOU ARE REMOVING STH THAT DOESNT EXIST") // ensuring check
            }
            else{
                if(state.cart[fId].amount > q){
                    state.cart[fId].amount-=q;
                }else{
                    const r = state.splice(fId , 1);
                    console.log(r) // dev mode
                }
            }
        }
    }
});

export const cartActions = CartSlice.actions;
export default CartSlice;