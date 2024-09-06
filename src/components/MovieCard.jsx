import React from 'react'
import { Avatar, Badge, Box, Button, Typography } from '@mui/material'
import '../css/MovieCard.css'
import { MdAccessTimeFilled } from "react-icons/md";
import { MdGrade } from "react-icons/md";

function MovieCard() {
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
                    <img src="/img/1.png" alt="" />
                </Box>
                <Box className='flip-card-back'>
                    <Typography className='title' variant='h5'>
                        Avengers End Game
                    </Typography>
                    <p>
                        2021
                    </p>
                    <p>
                        Dublaj - Altyazı
                    </p>


                </Box>
            </Box>
        </Box>
    )
}
export default MovieCard