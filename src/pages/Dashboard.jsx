import React, { useState } from 'react';
import { Paper, Box, Typography, Container, Card, CardContent, CardActions, Button, Stack, Pagination } from '@mui/material';
import Grid from '@mui/material/Grid2';
import RandomMoviesCarousel from '../components/RandomMoviesCarousel';
import MovieCard from '../components/MovieCard';

function Dashboard() {

    return (

        <>
            <Box m={2}>
                <Typography variant='h4'>Bugün Ne İzlesem ?</Typography>
            </Box>
            {/* <RandomMoviesCarousel></RandomMoviesCarousel> */}
            <Grid container border={3} spacing={2}  >
                <Grid container border={2} maxWidth={'xl'} >
                    <Grid border={1} size={12}>
                        <Box m={2}>
                            <Typography variant='h4'>Yeni Filmler</Typography>
                        </Box>
                    </Grid>


                    {/* <Grid size={12} >
                       
                        <Stack direction={'row'} flexWrap={'wrap'} justifyContent={'center'}   >
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
                            <Grid size={{ lg: 3, md: 4, sm: 6, xs: 12, }} >
                                <MovieCard></MovieCard>
                            </Grid>
                            <Grid size={{ lg: 3, md: 4, sm: 6, xs: 12, }} >
                                <MovieCard></MovieCard>
                            </Grid>
                        </Stack>
                        <Stack alignItems={'center'}>
                            <Pagination count={12} size='large' color="primary" />
                        </Stack>
                    </Grid> */}

                </Grid>
                <Grid container border={2} maxWidth={'xl'}>
                    <Grid size={12}>
                        <Box>
                            aslşdm
                        </Box>
                    </Grid>
                </Grid>
            </Grid>

        </>

    );
}

export default Dashboard;
