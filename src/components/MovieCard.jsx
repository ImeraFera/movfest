import React, { useEffect, useState } from 'react';
import { Avatar, Badge, Box, Button, Stack, Typography } from '@mui/material';
import '../css/MovieCard.css';
import { MdAccessTimeFilled } from "react-icons/md";
import { MdGrade } from "react-icons/md";
import Chip from '@mui/material/Chip';
import { useSelector } from 'react-redux';

function MovieCard(prop) {
    const { id, title, genres, year, poster, overview } = prop;
    const genreList = useSelector(({ app }) => app.genres);
    const [genreFilter, setGenreFilter] = useState([]);

    useEffect(() => {
        if (genreList && genres) {
            const filteredGenres = genreList.filter(genre => genres.includes(genre.id));
            setGenreFilter(filteredGenres);
        }
    }, [genreList, genres]);

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
                    <img src={'https://image.tmdb.org/t/p/w500' + poster} alt="" />
                </Box>
                <Box className='flip-card-back'>
                    <Typography p={1} className='title' variant='h5'>
                        {title}
                    </Typography>
                    <p>
                        {year}
                    </p>
                    <Stack px={1} direction={'row'} justifyContent={'space-around'} flexWrap={'wrap'}>
                        {genreFilter && genreFilter?.map((genre, index) => (
                            <Box key={index} p={0.5}>
                                <Chip label={genre.name} color='primary' />
                            </Box>
                        ))}
                    </Stack>
                </Box>
            </Box>
        </Box>
    )
}
export default MovieCard;
