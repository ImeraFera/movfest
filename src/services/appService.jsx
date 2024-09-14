import { axiosConfig } from '../config/Axios';
import { DB_URL, TMDB_API_URL, TMDB_API_KEY } from '../config/CONFIG';

export const getAllMovies = async (pageNumber) => {
    // const size = 20;
    try {
        const response = await axiosConfig.get(TMDB_API_URL + '/movie/popular', {
            params: {
                api_key: TMDB_API_KEY,
                page: pageNumber,
                language: 'tr'
            }
        });
        return response.data;

    } catch (error) {
        console.log(error)
        throw error;

    }

}

export const getMoviesByCategory = async (genreId, pageNumber) => {

    console.log(genreId)
    try {
        const response = await axiosConfig.get(TMDB_API_URL + '/discover/movie', {
            params: {
                api_key: TMDB_API_KEY,
                with_genres: genreId,
                page: pageNumber,
                language: 'tr'
            }
        });
        console.log(response.data)
        return response.data;

    } catch (error) {
        console.log(error)
        throw error;

    }

}

export const getAllGenres = async () => {
    try {

        const response = await axiosConfig.get(TMDB_API_URL + '/genre/movie/list', {
            params: {
                api_key: TMDB_API_KEY,
                language: 'tr'
            }
        })

        return response.data;

    } catch (error) {
        console.log(error);
        throw error;
    }
}

export const getMovieById = async (movieId) => {
    try {

        const response = await axiosConfig.get(TMDB_API_URL + '/movie/' + movieId, {
            params: {
                api_key: TMDB_API_KEY,
                language: 'tr'
            }
        });
        return response.data;

    } catch (error) {
        console.log(error)
        throw error;
    }
}