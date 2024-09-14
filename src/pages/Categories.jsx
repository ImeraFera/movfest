import React, { useEffect } from 'react'
import Grid from '@mui/material/Grid2'
import { Box, Card, CardActionArea, CardContent, CardMedia, Link, Stack, Typography } from '@mui/material'
import CategoryCard from '../components/cards/CategoryCard'
import '../css/Categories.css'
import { motion } from 'framer-motion'
import { useDispatch, useSelector } from 'react-redux'
import { getGenres } from '../redux/slices/appSlice'

function Categories() {

    const dispatch = useDispatch();
    const genreList = useSelector(({ app }) => app.genres)
    useEffect(() => {
        dispatch(getGenres());
    }, [dispatch])

    console.log(genreList)

    return (
        <motion.div
            animate={{ y: [100, 0], opacity: [0, 0.5, 1] }}
            transition={{ duration: 0.5 }}
        >
            <Grid container spacing={2} p={5}>
                <Grid bgcolor={'#303030'} size={12} mt={0} mb={0}>
                    <Stack direction={'row'} flexWrap={'wrap'} justifyContent={'center'} alignItems={'center'}>
                        {
                            genreList?.map((genre) => (
                                <CategoryCard key={genre.id} title={genre.name} id={genre.id} link={'/kategoriler/' + genre.id}></CategoryCard>
                            ))
                        }
                    </Stack>
                </Grid>
            </Grid>
        </motion.div>

    )
}

export default Categories