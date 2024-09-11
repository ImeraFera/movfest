import { axiosConfig } from '../config/Axios';
import { auth } from '../config/Firebase';
import { AUTH_API_URL } from '../config/CONFIG';

export const getUserDetails = async (userToken) => {
    try {
        const response = await axiosConfig.post(AUTH_API_URL, { idToken: userToken })
        return response.data.users[0];
    } catch (error) {
        console.log(error);
    }
}

