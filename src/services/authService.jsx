import { createUserWithEmailAndPassword, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from '../config/Firebase';
import { getErrorMessage } from "../errors/ErrorCodes";
import { axiosConfig } from "../config/Axios";


export const signUp = async (username, email, password) => {

    try {

        const user = (await createUserWithEmailAndPassword(auth, email, password)).user;
        await sendEmailVerification(user);
        const tokenId = await user.getIdToken();
        const localId = user.uid;
        await axiosConfig.post('/api/users/save-user', { username: username, email: email, localId: localId })
        return { tokenId, localId };

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
        const localId = userCredential.user.uid;
        return { tokenId, localId };

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

export const getToken = () => {
    const token = sessionStorage.getItem('movfest_token');
    return token || null;
};


