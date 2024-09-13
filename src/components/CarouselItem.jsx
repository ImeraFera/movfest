import React from 'react'
import MovieCard from './MovieCard'
import { Link } from '@mui/material';

function CarouselItem(prop) {
    const { title, year, genres, id } = prop.movie;
    return (
        <>
            <Link color='white' underline='none' href={'/filmler/' + id}>
                <MovieCard title={title} year={year} genres={genres} id={id} ></MovieCard>
            </Link>
        </>
    )
}

export default CarouselItem