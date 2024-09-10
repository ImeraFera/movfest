import { axiosConfig } from '../config/Axios';
import { auth } from '../config/Firebase';

export const getUserDetails = async () => {
    try {
        const user = auth.currentUser;
        return user;
    } catch (error) {
        console.log(error);
    }
}
