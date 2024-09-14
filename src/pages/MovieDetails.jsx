import { Box, Button, Card, CardContent, Checkbox, Chip, FormControlLabel, Link, List, ListItem, Stack, TextField, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import React, { useEffect } from 'react';
import ReactPlayer from 'react-player';
import '../css/MovieDetails.css'
import { motion } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import { getMovieWithId, setIsLoading } from '../redux/slices/appSlice';
import { useParams } from 'react-router-dom';

function MovieDetails() {
    const dispatch = useDispatch();
    const { movieId } = useParams();


    useEffect(() => {
        dispatch(getMovieWithId(movieId));
    }, [movieId])

    const movie = useSelector(({ app }) => app.movie);
    console.log(movie)
    return (

        <motion.div
            animate={{ y: [100, 0], opacity: [0, 0.5, 1] }}
            transition={{ duration: 0.5 }}
        >
            <Grid container spacing={2} >
                <Grid mt={0} mb={0} size={12} display={'flex'} bgcolor={'#303030'} justifyContent={'space-between'} px={5} py={2}>

                    <Box>
                        <Typography variant='h4'>{movie?.title}</Typography>
                        <Typography variant='h6'>{movie?.tagline}</Typography>

                    </Box>

                    <Box display={'flex'} flexDirection={'row'}  >
                        <Box display={'flex'} bgcolor={'#404040'} p={1} borderRadius={'1em'} justifyContent={'center'} alignItems={'center'}>
                            <Typography variant='body1'>IMDB 3.9</Typography>
                        </Box>
                        <Box bgcolor={'#404040'} p={1} ml={1} borderRadius={'1em'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
                            <Typography variant='body1'>{movie?.runtime} Dk</Typography>
                        </Box>
                    </Box>

                </Grid>
                <Grid mb={0} mt={0} sx={{ backgroundColor: '#303030' }} p={2} size={{ xs: 12, sm: 12, lg: 3, md: 6 }} display="flex" justifyContent="center">
                    <img src={'https://image.tmdb.org/t/p/w500' + movie?.poster_path} alt="Movie Poster" style={{ maxWidth: '100%', }} />
                </Grid>

                <Grid mt={0} mb={0} sx={{ backgroundColor: '#303030' }} size={{ xs: 12, sm: 12, lg: 9, md: 6 }} display="flex" flexDirection="column" padding={2} justifyContent={'space-between'} >

                    <Box bgcolor={'#404040'} borderRadius={'1em'} mb={2} display={'flex'} alignItems={'center'}>
                        <List>
                            <ListItem>
                                <Box>
                                    <Typography variant='body1' >Orijinal Adı: {movie?.original_title}</Typography>
                                </Box>
                            </ListItem>
                            <ListItem>
                                <Box>
                                    <Typography variant='body1' >Website: <Link href={movie?.homepage}>{movie?.homepage}</Link></Typography>
                                </Box>
                            </ListItem>
                            <ListItem>
                                <Box>
                                    <Typography variant='body1' >Yapım:

                                        {
                                            movie?.production_companies.map((company) => {
                                                return (
                                                    <Chip sx={{ p: 0, ml: 1 }} key={company.id} size='small' label={company.name} color='primary' />
                                                )

                                            })
                                        }
                                    </Typography>
                                </Box>
                            </ListItem>
                            <ListItem>
                                <Typography variant='body1' >Kategori(ler):

                                    {movie?.genres.map(
                                        (genre) => (
                                            <>
                                                <Link key={genre.id} href={'/kategoriler/' + genre.id}>
                                                    <Chip
                                                        sx={{ p: 0, ml: 1 }} clickable={true} size='small' label={genre.name} color='primary'
                                                    >
                                                    </Chip>
                                                </Link>
                                            </>

                                        ))}

                                </Typography>
                            </ListItem>
                        </List>
                    </Box>

                    <Box sx={{ flex: 1, overflowY: 'auto', maxHeight: '30vh', }}>
                        <Typography variant="body1">
                            {movie?.overview}
                        </Typography>
                    </Box>
                </Grid>

                <Grid mt={0} mb={0} size={{ xs: 12, lg: 8, md: 12 }} offset={{ lg: 2 }} display="flex" sx={{ backgroundColor: '#303030', p: 2, }}>
                    <Box
                        sx={{
                            position: 'relative',
                            width: '100%',
                            aspectRatio: 16 / 9,
                            backgroundColor: '#000',
                        }}
                    >
                        <ReactPlayer
                            url='https://www.youtube.com/watch?v=LXb3EKWsInQ'
                            width='100%'
                            height='100%'
                            controls
                            style={{
                                position: 'absolute',
                                top: 0,
                                left: 0
                            }}
                        />
                    </Box>
                </Grid>

                <Grid size={{ lg: 3, md: 4, sm: 5, xs: 12 }} mt={0} mb={0} display="flex" justifyContent="center" alignItems={'center'} bgcolor={'#303030'} p={1}>
                    <Box display="flex" flexDirection={'column'} alignItems={'center'} >
                        <Box display={'flex'} py={1}>
                            <TextField fullWidth label='İsim' variant='standard' color='primary'>
                            </TextField>
                        </Box>
                        <Box display={'flex'} py={1}>
                            <TextField fullWidth label='E-mail' variant='standard' color='primary'>
                            </TextField>
                        </Box>
                        <Box display={'flex'} py={1}>
                            <TextField fullWidth multiline rows={3} label='Yorum' variant='standard' color='primary'>
                            </TextField>
                        </Box>
                        <Box display={'flex'} py={1}>
                            <FormControlLabel control={<Checkbox />} label="Spoiler İçeriyor" />
                        </Box>
                        <Box display={'flex'} py={1}>
                            <Button variant='outlined' >Gönder</Button>
                        </Box>
                    </Box>
                </Grid>


                {/* Comments column */}
                <Grid mt={0} mb={0} size={{ lg: 9, md: 8, sm: 7, xs: 12 }} bgcolor={'#303030'} py={2} >
                    <Box px={5} py={1}>
                        <Typography variant='h5'>Yorumlar</Typography>
                    </Box>
                    <hr style={{ maxWidth: '90%' }} />
                    <Box sx={{ flex: 1, overflowY: 'auto', maxHeight: '35vh', mb: 2 }}>
                        <Stack direction={'row'} flexWrap={'wrap'} justifyContent={'center'} align  >
                            <Grid size={10} m={2} mt={1} >
                                <Card sx={{ bgcolor: '#404040', color: 'white', borderRadius: '1em' }}>
                                    <CardContent>
                                        <Box flexDirection={'row'} display={'flex'} justifyContent={'space-between'}>
                                            <Typography gutterBottom color='#97156C'>
                                                Ahmet Furkan Sayan
                                            </Typography>
                                            <Typography variant='body1'>12.02.2023</Typography>
                                        </Box>
                                        <Typography variant="body2">
                                            well meaning and kindly.
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid size={10} m={2} mt={1} >
                                <Card sx={{ bgcolor: '#404040', color: 'white', borderRadius: '1em' }}>
                                    <CardContent>
                                        <Box flexDirection={'row'} display={'flex'} justifyContent={'space-between'}>
                                            <Typography gutterBottom color='#97156C'>
                                                Ahmet Furkan Sayan
                                            </Typography>
                                            <Typography variant='body1'>12.02.2023</Typography>
                                        </Box>
                                        <Typography variant="body2">
                                            well meaning and kindly.
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid size={10} m={2} mt={1} >
                                <Card sx={{ bgcolor: '#404040', color: 'white', borderRadius: '1em' }}>
                                    <CardContent>
                                        <Box flexDirection={'row'} display={'flex'} justifyContent={'space-between'}>
                                            <Typography gutterBottom color='#97156C'>
                                                Ahmet Furkan Sayan
                                            </Typography>
                                            <Typography variant='body1'>12.02.2023</Typography>
                                        </Box>
                                        <Typography variant="body2">
                                            well meaning and kindly.
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        </Stack>
                    </Box>
                </Grid>

            </Grid >
        </motion.div>

    );
}

export default MovieDetails;
