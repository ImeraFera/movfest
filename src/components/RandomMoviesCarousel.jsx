import React, { useState } from 'react'

import { Swiper, SwiperSlide, } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import Grid from '@mui/material/Grid2';
import { Link } from '@mui/material';
import MovieCard from './MovieCard';

function RandomMoviesCarousel(prop) {

    const { movies } = prop;

    return (
        <>
            <Grid container >
                <Grid size={12} bgcolor={'#303030'}>
                    <Swiper
                        modules={[Navigation, Autoplay]}
                        spaceBetween={5}
                        loop={true}
                        navigation
                        breakpointsBase='container'
                        breakpoints={{
                            320: {
                                slidesPerView: 1,
                                spaceBetween: 10
                            },
                            480: {
                                slidesPerView: 2,
                                spaceBetween: 15
                            },
                            640: {
                                slidesPerView: 3,
                                spaceBetween: 20
                            },
                            800: {
                                slidesPerView: 3,
                                spaceBetween: 25
                            },
                            900: {
                                slidesPerView: 4,
                                spaceBetween: 27
                            },
                            1024: {
                                slidesPerView: 5,
                                spaceBetween: 30
                            }
                        }}


                        slidesPerView={5}
                        autoplay={{ delay: 3000, disableOnInteraction: false }}
                    >
                        {movies.map((movie) => (
                            <SwiperSlide key={movie.id}>
                                <Link color='white' underline='none' href={'/filmler/' + movie.id}>
                                    <MovieCard poster={movie.poster_path} overview={movie.overview} title={movie.title} year={movie.releases_date} id={movie.id} genres={movie.genre_ids}></MovieCard>
                                </Link>
                            </SwiperSlide>
                        ))}

                    </Swiper>
                </Grid>
            </Grid>
        </>
    )
}

export default RandomMoviesCarousel