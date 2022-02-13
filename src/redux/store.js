import {configureStore} from "@reduxjs/toolkit";

import cart from "./CartSlice";

const store = configureStore({
     reducer:{
         cart:cart.reducer,
     }
})

export default store;

