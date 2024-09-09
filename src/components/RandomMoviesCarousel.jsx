import React, { useState } from 'react'


import { Swiper, SwiperSlide, } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import CarouselItem from '../components/CarouselItem';
import Grid from '@mui/material/Grid2';

function RandomMoviesCarousel() {

    const [value, setValue] = useState(50);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const slides = Array.from({ length: 10 });
    return (
        <>
            <Grid container >
                <Grid size={12}>
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
                        {slides.map((_, index) => (
                            <SwiperSlide key={index}>
                                <CarouselItem />
                            </SwiperSlide>
                        ))}

                    </Swiper>
                </Grid>
            </Grid>
        </>
    )
}

export default RandomMoviesCarousel