import { Box, List, ListItem, TextField, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import React from 'react';
import ReactPlayer from 'react-player';
import '../css/MovieDetails.css'
function MovieDetails() {
    return (
        <Grid container spacing={2} justifyContent={'center'}>
            <Grid size={12} display={'flex'} bgcolor={'#303030'} justifyContent={'space-between'} px={5} py={2}>

                <Box>
                    <Typography variant='h4'>Avengers End Game</Typography>
                </Box>

                <Box display={'flex'} flexDirection={'row'}  >
                    <Box bgcolor={'#404040'} p={1} borderRadius={'1em'}>
                        <Typography variant='body1'>IMDB 3.9</Typography>
                    </Box>
                    <Box bgcolor={'#404040'} p={1} ml={1} borderRadius={'1em'}>
                        <Typography variant='body1'>145 Dk</Typography>
                    </Box>
                </Box>

            </Grid>
            <Grid mb={0} mt={0} sx={{ backgroundColor: '#303030' }} p={2} size={{ xs: 12, sm: 12, lg: 3, md: 6 }} display="flex" justifyContent="center">
                <img src="/img/1.png" alt="Movie Poster" style={{ maxWidth: '100%', }} />
            </Grid>

            <Grid mt={0} sx={{ backgroundColor: '#303030' }} mb={0} size={{ xs: 12, sm: 12, lg: 9, md: 6 }} display="flex" flexDirection="column" padding={2} justifyContent={'space-between'}>
                <Box sx={{ flex: 1, overflowY: 'auto', maxHeight: '40vh', mb: 2 }}>
                    <Typography variant="body1">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem a necessitatibus dolore illo natus? Perspiciatis cupiditate sapiente et illum similique nisi ipsum, libero vel. Doloribus cumque quam corporis ptate delectus ipsa minus quibusdam ab, laudantium non possimus atque aspernatur aperiam unde facilis!
                        Culpa nobis magnam laudantium harum quaerat accusamus! Explicabo enim corporis expedita quisquam consectetur ratione doloribus dolore voluptate delectus ipsa minus quibusdam ab, laudantium non possimus atque aspernatur aperiam unde facilis!
                        Culpa nobis magnam laudantium harum quaerat accusamus! Explicabo enim corporis expedita quisquam consectetur ratione doloribus dolore voluptate delectus ipsa minus quibusdam ab, laudantium non possimus atque aspernatur aperiam unde facilis!
                        Culpa nobis magnam laudantium harum quaerat accusamus! Explicabo enim corporis expedita quisquam consectetur ratione doloribus dolore voluptate delectus ipsa minus quibusdam ab, laudantium non possimus atque aspernatur aperiam unde facilis!
                        Culpa nobis magnam laudantium harum quaerat accusamus! Explicabo enim corporis expedita quisquam consectetur ratione doloribus dolore voluptate delectus ipsa minus quibusdam ab, laudantium non possimus atque aspernatur aperiam unde facilis!
                        Culpa nobis magnam laudantium harum quaerat accusamus! Explicabo enim corporis expedita quisquam consectetur ratione doloribus dolore voluptate delectus ipsa minus quibusdam ab, laudantium non possimus atque aspernatur aperiam unde facilis!
                    </Typography>
                </Box>

                <Box bgcolor={'#404040'} borderRadius={'1em'} display={'flex'} alignItems={'center'}>
                    <List>
                        <ListItem>
                            <Box>
                                <Typography variant='body1' >Yönetmen: Ahmet Furkan</Typography>
                            </Box>
                        </ListItem>
                        <ListItem>
                            <Box>
                                <Typography variant='body1' >Oyuncular: Ahmet Furkan</Typography>
                            </Box>
                        </ListItem>
                        <ListItem>
                            <Box>
                                <Typography variant='body1' >Yapım: Ahmet Furkan</Typography>
                            </Box>
                        </ListItem>
                        <ListItem>
                            <Box>
                                <Typography variant='body1' >Kategori: Ahmet Furkan</Typography>
                            </Box>
                        </ListItem>
                    </List>
                </Box>
            </Grid>

            <Grid size={{ xs: 12, lg: 8 }} display="flex" justifyContent="center" sx={{ backgroundColor: '#303030', p: 2, }}>
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

            <Grid size={12} display="flex" justifyContent="center" bgcolor={'#303030'} px={5} py={2}>
                <Box>
                    <TextField variant='standard'>

                    </TextField>
                </Box>

            </Grid>
        </Grid >
    );
}

export default MovieDetails;
