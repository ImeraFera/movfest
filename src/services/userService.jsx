import { axiosConfig } from '../config/Axios';
import { auth } from '../config/Firebase';
import { AUTH_API_URL, DB_URL } from '../config/CONFIG';

export const getUserDetails = async (localId) => {
    try {
        const response = await axiosConfig.get(DB_URL + '/api/users/' + localId);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

