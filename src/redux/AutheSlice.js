import {createSlice} from "@reduxjs/toolkit";

// TODO: implementation of status for further development
const initialState = {loggedIn: false, email:'' , password:''}

const AuthSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action) => {
            state.loggedIn = true;
            state.email = action.payload.email;
            state.password = action.payload.password;
        },
        logout: (state) => {
            state.loggedIn = false;
            state.email = '';
            state.password = '';
        }
    }
})

export const authActions = AuthSlice.actions;
export default AuthSlice;

