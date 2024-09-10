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
        return userCredential.user;

    } catch (error) {
        const message = getErrorMessage(error.code);
        throw new Error(message);
    }

}

export const _signOut = async () => {
    try {
        await signOut(auth);
    } catch (error) {
        const message = getErrorMessage(error.code);
        throw new Error(message);
    }

}

export const getCurrentUser = () => {
    console.log(auth.currentUser)
    return auth.currentUser;
};

export const onAuthStateChangedListener = (callback) => {
    return onAuthStateChanged(auth, callback);
};

