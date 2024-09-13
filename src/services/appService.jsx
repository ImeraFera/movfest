import { axiosConfig } from '../config/Axios';
import { DB_URL } from '../config/CONFIG';

export const getAllMovies = async (pageNumber) => {
    const size = 12;
    try {
        const response = await axiosConfig.get(`${DB_URL}/api/movies?page=${pageNumber}&size=${size}`);
        return response;

    } catch (error) {
        console.log(error)
        throw error;

    }


}

export const getMovieById = async (movieId) => {

    try {

        const response = await axiosConfig.get(`${DB_URL}/api/movies/${movieId}`)
        return response;

    } catch (error) {
        console.log(error)
        throw error;
    }
}