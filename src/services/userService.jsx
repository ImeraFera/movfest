import { axiosConfig } from '../config/Axios';
import { auth } from '../config/Firebase';
import { AUTH_API_URL } from '../config/CONFIG';

export const getUserDetails = async () => {
    try {
        const user = await axiosConfig.get('https://jsonplaceholder.typicode.com/users/1')
        return user.data;
    } catch (error) {
        console.log(error);
    }
}

