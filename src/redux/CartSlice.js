import {createSlice} from "@reduxjs/toolkit";

const initialState = { cart:[] , total:0 , quantity:0 }

const CartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        addToCart:(state, action)=>{
            const product = action.payload.prod;
            const q = action.payload.quantity;
            const price = product.price;
            const fId = state.cart.findIndex(p => p.id === product.id);
            if(fId === -1){
                state.cart.push({...product , tPrice:q * price});
            }
            else{
                state.cart[fId].amount+= q;
                state.cart[fId].tPrice+= q*price;
            }
            state.quantity+=q;
            state.total+= q*price ;
            console.log(state.cart.length); // development mode
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
                    state.quantity-=q;
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