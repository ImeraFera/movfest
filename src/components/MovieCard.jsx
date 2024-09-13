import React from 'react'
import { Avatar, Badge, Box, Button, Stack, Typography } from '@mui/material'
import '../css/MovieCard.css'
import { MdAccessTimeFilled } from "react-icons/md";
import { MdGrade } from "react-icons/md";
import Chip from '@mui/material/Chip';

function MovieCard(prop) {
    const { id, title, genres, year } = prop;
    return (
        <Box className='flip-card'>
            <Box className='flip-card-inner'>
                <Box className='flip-card-front'>
                    <Box className='row'>
                        <Box className='imdb-point'>
                            <MdGrade />
                            <label htmlFor="">7.2</label>
                        </Box>
                        <Box className='film-runtime'>
                            <MdAccessTimeFilled />
                            <label htmlFor="">72 dk</label>
                        </Box>
                    </Box>
                    <img src={'https://picsum.photos/id/' + id + '/200/300'} alt="" />
                </Box>
                <Box className='flip-card-back'>
                    <Typography p={1} className='title' variant='h5'>
                        {title}
                    </Typography>
                    <p>
                        {year}
                    </p>
                    <Stack px={1} direction={'row'} justifyContent={'space-around'} flexWrap={'wrap'}>
                        {genres.map((genre, index) => (
                            <Box key={index} p={0.5}>
                                <Chip label={genre} color='primary' ></Chip>
                            </Box>
                        ))}
                    </Stack>
                </Box>
            </Box>
        </Box>
    )
}
export default MovieCard