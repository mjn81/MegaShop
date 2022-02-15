import {createSlice} from "@reduxjs/toolkit";

// TODO: implementation of status for further development
const initialState = {loggedIn: false, token: ''}

const AuthSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action) => {
            state.loggedIn = true;
            state.token = action.payload.token;
            // TODO: firebase implementation
        },
        logout: (state) => {
            state.loggedIn = false;
            state.token = '';
            // TODO: firebase implementation
        }
    }
})

export const authActions = AuthSlice.actions;
export default AuthSlice;

