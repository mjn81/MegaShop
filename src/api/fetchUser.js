import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";

import { authActions } from "../redux/AutheSlice";
import { auth } from "../firebase-config";

export const useFetchUser = () => {
    const dispatch = useDispatch();
    onAuthStateChanged(auth ,  currentUser => {
        if(currentUser){
            dispatch(authActions.login({email:currentUser.email , password:currentUser.password}));
        }
     
    })
}