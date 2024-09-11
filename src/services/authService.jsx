import { createUserWithEmailAndPassword, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from '../config/Firebase';
import { getErrorMessage } from "../errors/ErrorCodes";


export const signUp = async (email, password) => {
    try {
        const user = (await createUserWithEmailAndPassword(auth, email, password)).user;
        await sendEmailVerification(user);


    } catch (error) {
        console.log(error)
        const message = getErrorMessage(error.code);
        throw new Error(message);
    }
}

export const signIn = async (email, password) => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const tokenId = await userCredential.user.getIdToken();
        sessionStorage.setItem('movfest_token', tokenId)
        return tokenId;

    } catch (error) {
        const message = getErrorMessage(error.code);
        throw new Error(message);
    }

}

export const _signOut = async () => {
    try {
        await signOut(auth);
        sessionStorage.removeItem('movfest_token')

    } catch (error) {
        const message = getErrorMessage(error.code);
        throw new Error(message);
    }

}
export const getToken = () => {
    const token = sessionStorage.getItem('movfest_token');
    return token || null;
};


