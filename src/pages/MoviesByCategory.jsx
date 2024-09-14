import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion';
import { Box, Link, Pagination, Stack, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getMoviesWithCategory } from '../redux/slices/appSlice';
import MovieCard from '../components/MovieCard';
function MoviesByCategory() {
    const dispatch = useDispatch()
    const [pageNumber, setPageNumber] = useState(1);
    const totalPages = useSelector(({ app }) => app.totalPages);
    const { genreId } = useParams();

    const handlePageChange = (event, value) => {
        setPageNumber(value);
    };


    useEffect(() => {

        dispatch(getMoviesWithCategory({ genreId, pageNumber }))

    }, [pageNumber]);

    const moviesByCategory = useSelector(({ app }) => app.moviesByCategory);

    console.log(moviesByCategory)
    return (
        <motion.div
            animate={{ y: [100, 0], opacity: [0, 0.5, 1] }}
            transition={{ duration: 0.5 }}
        >
            <Grid container spacing={2}  >
                <Grid bgcolor={'#303030'} size={12} >
                    <Box m={2}>
                        <Typography variant='h4'>Seçtiğin Türde Filmler</Typography>
                    </Box>
                    <Stack direction={'row'} flexWrap={'wrap'} justifyContent={'center'}   >
                        <>
                            {
                                moviesByCategory?.map((movie) => {

                                    return (
                                        <Grid key={movie.id} size={{ lg: 3, md: 4, sm: 6, xs: 12, }} >
                                            <Link
                                                color='white'
                                                underline='none'
                                                href={'/filmler/' + movie.id}
                                            >
                                                <MovieCard poster={movie.poster_path} overview={movie.overview} title={movie.title} year={movie.releases_date} id={movie.id} genres={movie.genre_ids}></MovieCard>
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

            </Grid >

        </motion.div >
    )
}

export default MoviesByCategory