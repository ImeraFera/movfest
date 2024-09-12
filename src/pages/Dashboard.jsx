import React, { useEffect, useState } from 'react';
import { Paper, Box, Typography, Container, Card, CardContent, CardActions, Button, Stack, Pagination, Link } from '@mui/material';
import Grid from '@mui/material/Grid2';
import RandomMoviesCarousel from '../components/RandomMoviesCarousel';
import MovieCard from '../components/MovieCard';
import { motion } from 'framer-motion'
function Dashboard() {

    return (

        <motion.div
            animate={{ y: [100, 0], opacity: [0, 0.5, 1] }}
            transition={{ duration: 0.5 }}
        >

            <Box m={2}>
                <Typography variant='h4'>Bugün Ne İzlesem ?</Typography>
            </Box>
            <RandomMoviesCarousel></RandomMoviesCarousel>
            {/* sütun 2 */}
            <Grid container spacing={2}  >
                <Grid bgcolor={'#303030'} size={{ lg: 9, md: 9, sm: 9, xs: 12 }} >
                    <Box m={2}>
                        <Typography variant='h4'>Yeni Filmler</Typography>
                    </Box>
                    <Stack direction={'row'} flexWrap={'wrap'} justifyContent={'center'}   >

                        <Grid size={{ lg: 3, md: 4, sm: 6, xs: 12, }} >
                            <Link color='white' underline='none' href='/filmler/1'>
                                <MovieCard></MovieCard>
                            </Link>
                        </Grid>
                        <Grid size={{ lg: 3, md: 4, sm: 6, xs: 12, }} >
                            <MovieCard></MovieCard>
                        </Grid>
                        <Grid size={{ lg: 3, md: 4, sm: 6, xs: 12, }} >
                            <MovieCard></MovieCard>
                        </Grid>
                        <Grid size={{ lg: 3, md: 4, sm: 6, xs: 12, }} >
                            <MovieCard></MovieCard>
                        </Grid>
                        <Grid size={{ lg: 3, md: 4, sm: 6, xs: 12, }} >
                            <MovieCard></MovieCard>
                        </Grid>
                        <Grid size={{ lg: 3, md: 4, sm: 6, xs: 12, }} >
                            <MovieCard></MovieCard>
                        </Grid>
                        <Grid size={{ lg: 3, md: 4, sm: 6, xs: 12, }} >
                            <MovieCard></MovieCard>
                        </Grid>
                        <Grid size={{ lg: 3, md: 4, sm: 6, xs: 12, }} >
                            <MovieCard></MovieCard>
                        </Grid>
                        <Grid size={{ lg: 3, md: 4, sm: 6, xs: 12, }} >
                            <MovieCard></MovieCard>
                        </Grid>
                        <Grid size={{ lg: 3, md: 4, sm: 6, xs: 12, }} >
                            <MovieCard></MovieCard>
                        </Grid>
                        <Grid size={{ lg: 3, md: 4, sm: 6, xs: 12, }} >
                            <MovieCard></MovieCard>
                        </Grid>
                    </Stack>
                    <Stack my={2} alignItems={'center'}>
                        <Pagination count={12} size='large' color="primary" />
                    </Stack>
                </Grid >
                {/* sütun 2 */}
                <Grid bgcolor={'#303030'} size={{ lg: 3, md: 3, sm: 3, xs: 12, }
                } >
                    <Box m={2} >
                        <Typography variant='h4'>Trend Filmler</Typography>
                    </Box>
                    <Stack direction={'row'} flexWrap={'wrap'} justifyContent={'center'}   >
                        <Grid size={12}>
                            <MovieCard></MovieCard>
                        </Grid>
                    </Stack>
                </Grid >
            </Grid >

        </motion.div >

    );
}

export default Dashboard;
