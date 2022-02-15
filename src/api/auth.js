import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut} from "firebase/auth";

import { auth } from "../firebase-config";

export const register = async (email , password) => {
    try{
        const user = await createUserWithEmailAndPassword(auth , email , password);
    } catch(error){
        console.log(error.message);
    }
}

export const login = async (email , password) => {
    try{
        const user = await signInWithEmailAndPassword(auth , email , password); 
    } catch(error){
        console.log(error.message);
    }
}

export const logout = async () => {
    await signOut(auth);
}
