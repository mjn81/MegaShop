import {configureStore} from "@reduxjs/toolkit";

import cart from "./CartSlice";
import auth from "./AutheSlice";
const store = configureStore({
     reducer:{
         cart:cart.reducer,
         auth:auth.reducer
     }
})

export default store;

