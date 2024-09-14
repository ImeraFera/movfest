/* eslint-disable no-useless-catch */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getAllMovies, getMovieById, getAllGenres, getMoviesByCategory } from "../../services/appService";

const appInitialState = {
    isLoading: false,
    movies: null,
    error: null,
    status: 'idle',
    totalPages: 1,
    movie: null,
    currentPage: 1,
    genres: null,
    moviesByCategory: null,
};

export const getMoviesWithCategory = createAsyncThunk(
    'app/getMoviesWithCategory',
    async ({ genreId, pageNumber }) => {
        console.log(genreId)
        try {
            const data = await getMoviesByCategory(genreId, pageNumber);
            const totalPages = data.total_pages;
            const result = {
                totalPages,
                moviesByCategory: data.results,
                currentPage: pageNumber,
            }
            return result;
        } catch (error) {
            console.log(error);
        }
    }
)

export const getMovies = createAsyncThunk(
    'app/getMovies', async (pageNumber) => {
        try {
            const data = await getAllMovies(pageNumber);
            const totalPages = data.total_pages;
            console.log(data.results)
            const result = {
                totalPages,
                movies: data.results,
                currentPage: pageNumber,
            }

            return result;
        } catch (error) {
            throw new Error(error.message);
        }
    }
);

export const getGenres = createAsyncThunk(
    'app/getGenres', async () => {
        try {
            const data = await getAllGenres();
            return data;
        } catch (error) {
            throw new Error(error.message);
        }
    }
)

export const getMovieWithId = createAsyncThunk(
    'app/getMovieWithId', async (movieId) => {
        try {

            const response = await getMovieById(movieId);
            return response;

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
            .addCase(getGenres.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(getGenres.fulfilled, (state, { payload }) => {
                state.status = 'succeeded';
                state.genres = payload.genres;
            })
            .addCase(getGenres.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error?.message || "Bir hata oluştu";
            })
            .addCase(getMovies.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(getMovies.fulfilled, (state, { payload }) => {
                state.status = 'succeeded';
                state.movies = payload.movies;
                state.totalPages = payload.totalPages;
                state.currentPage = payload.currentPage;
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
            .addCase(getMoviesWithCategory.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(getMoviesWithCategory.fulfilled, (state, { payload }) => {
                state.status = 'succeeded';
                state.moviesByCategory = payload.moviesByCategory;
                state.totalPages = payload.totalPages;

            })
            .addCase(getMoviesWithCategory.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error?.message || "Bir hata oluştu";
            })
    }
});

export const { setIsLoading } = appSlice.actions;

export default appSlice.reducer;
