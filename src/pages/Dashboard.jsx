import React, { useEffect, useState } from 'react';
import { Paper, Box, Typography, Container, Card, CardContent, CardActions, Button, Stack, Pagination, Link, CircularProgress } from '@mui/material';
import Grid from '@mui/material/Grid2';
import RandomMoviesCarousel from '../components/RandomMoviesCarousel';
import MovieCard from '../components/MovieCard';
import { motion } from 'framer-motion'
import { useDispatch, useSelector } from 'react-redux';
import { getMovies, setIsLoading } from '../redux/slices/appSlice';
function Dashboard() {
    const dispatch = useDispatch();
    // const isLoading = useSelector(({ app }) => app.isLoading);
    const [pageNumber, setPageNumber] = useState(1);

    const fetchMovies = async (pageNumber) => {
        dispatch(setIsLoading(true));
        try {
            const res = await dispatch(getMovies(pageNumber));
        } catch (error) {
            console.log(error.message);
        }
        finally {
            dispatch(setIsLoading(false));
        }
    };

    const handlePageChange = (event, value) => {
        setPageNumber(value);
    };

    useEffect(() => {
        fetchMovies(pageNumber - 1);
    }, [pageNumber]);

    const movies = useSelector(({ app }) => app.movies);
    const totalPages = useSelector(({ app }) => app.totalPages);

    return (

        <motion.div
            animate={{ y: [100, 0], opacity: [0, 0.5, 1] }}
            transition={{ duration: 0.5 }}
        >

            <Box m={2}>
                <Typography variant='h4'>Bugün Ne İzlesem ?</Typography>
            </Box>
            {movies && (
                <RandomMoviesCarousel movies={movies}></RandomMoviesCarousel>
            )}
            <Grid container spacing={2}  >
                <Grid bgcolor={'#303030'} size={{ lg: 9, md: 9, sm: 9, xs: 12 }} >
                    <Box m={2}>
                        <Typography variant='h4'>Yeni Filmler</Typography>
                    </Box>
                    <Stack direction={'row'} flexWrap={'wrap'} justifyContent={'center'}   >


                        <>
                            {
                                movies && movies.map((movie) => {
                                    return (
                                        <Grid key={movie.id} size={{ lg: 3, md: 4, sm: 6, xs: 12, }} >
                                            <Link
                                                color='white'
                                                underline='none'
                                                href={'/filmler/' + movie.id}
                                            >
                                                <MovieCard title={movie.title} year={movie.year} id={movie.id} genres={movie.genres}></MovieCard>
                                            </Link>
                                        </Grid>
                                    )
                                })
                            }

                        </>


                    </Stack>
                    {/*  Pagination */}
                    <Stack my={2} alignItems={'center'}>
                        <Pagination count={totalPages} onChange={handlePageChange} page={pageNumber} size='large' color="primary" />
                    </Stack>
                </Grid >
                {/* sütun 2 */}
                <Grid bgcolor={'#303030'} size={{ lg: 3, md: 3, sm: 3, xs: 12, }
                } >
                    <Box m={2} >
                        <Typography variant='h4'>Trend Filmler</Typography>
                    </Box>
                    <Stack direction={'row'} flexWrap={'wrap'} justifyContent={'center'}   >

                        {
                            movies && movies.map((movie, index) => {
                                if (index < 3)
                                    return (

                                        <Grid size={12} key={movie.id}>
                                            <Link underline='none' color='white' href={'/filmler/' + movie.id}>
                                                <MovieCard title={movie.title} year={movie.year} poster={movie.poster} genres={movie.genres} id={movie.id} ></MovieCard>
                                            </Link>
                                        </Grid>
                                    )
                            })
                        }

                    </Stack>
                </Grid >
            </Grid >

        </motion.div >

    );
}

export default Dashboard;
