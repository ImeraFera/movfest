/* eslint-disable no-useless-catch */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getAllMovies, getMovieById } from "../../services/appService";

const appInitialState = {
    isLoading: false,
    movies: null,
    error: null,
    status: 'idle',
    totalPages: 1,
    movie: null,
};

export const getMovies = createAsyncThunk(
    'app/getAllMovies', async (pageNumber) => {
        try {
            const response = await getAllMovies(pageNumber);
            const data = {
                movies: [],
                totalPages: response.data.totalPages,
            };
            response.data.content.forEach(movie => {
                const movieYear = movie.title.split('(')[1].substring(0, 4)
                movie.title = movie.title.split('(')[0].trimEnd();
                movie.genres = movie.genres.split('|');
                // console.log(movie.genres);
                movie = {
                    ...movie,
                    year: movieYear,
                }
                data.movies.push(movie);
            });

            return data;
        } catch (error) {
            throw new Error(error.message);
        }
    }
);

export const getMovieWithId = createAsyncThunk(
    'app/getMovieById', async (movieId) => {
        try {
            const response = await getMovieById(movieId);
            const genres = response.data.genres.split('|');
            response.data.genres = genres;
            return response.data;
        } catch (error) {
            console.log(error)
            throw new Error(error.message);
        }
    }
);

export const getCommentsWithMovieId = createAsyncThunk(
    'app/getCommentsWithMovieId',
    async (movieId) => {
        try {

            // const response = await ;
        } catch (error) {
            console.log(error)
        }
    }
)

export const appSlice = createSlice({
    name: 'app',
    initialState: appInitialState,
    reducers: {
        setIsLoading: (state, action) => {
            state.isLoading = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getMovies.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(getMovies.fulfilled, (state, { payload }) => {
                state.status = 'succeeded';
                state.movies = payload.movies;
                state.totalPages = payload.totalPages;

            })
            .addCase(getMovies.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error?.message || "Bir hata oluştu";
            })
            .addCase(getMovieWithId.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(getMovieWithId.fulfilled, (state, { payload }) => {
                state.status = 'succeeded';
                state.movie = payload;

            })
            .addCase(getMovieWithId.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error?.message || "Bir hata oluştu";
            })
    }
});

export const { setIsLoading } = appSlice.actions;

export default appSlice.reducer;
