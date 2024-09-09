import React from 'react'
import Grid from '@mui/material/Grid2'
import { Box, Card, CardActionArea, CardContent, CardMedia, Link, Stack, Typography } from '@mui/material'
import CategoryCard from '../components/cards/CategoryCard'
import '../css/Categories.css'

function Categories() {
    return (
        <Grid container spacing={2} p={5}>
            <Grid bgcolor={'#303030'} size={12} mt={0} mb={0}>
                <Stack direction={'row'} flexWrap={'wrap'} justifyContent={'center'} alignItems={'center'}>
                    <CategoryCard props={{ title: 'Aksiyon', link: '/kategoriler/aksiyon' }}></CategoryCard>
                    <CategoryCard props={{ title: 'Korku', link: '/kategoriler/aksiyon' }}></CategoryCard>
                    <CategoryCard props={{ title: 'Dram', link: '/kategoriler/aksiyon' }}></CategoryCard>
                    <CategoryCard props={{ title: 'Animasyon', link: '/kategoriler/aksiyon' }}></CategoryCard>
                    <CategoryCard props={{ title: 'Animasyon', link: '/kategoriler/aksiyon' }}></CategoryCard>
                    <CategoryCard props={{ title: 'Animasyon', link: '/kategoriler/aksiyon' }}></CategoryCard>
                    <CategoryCard props={{ title: 'Animasyon', link: '/kategoriler/aksiyon' }}></CategoryCard>
                    <CategoryCard props={{ title: 'Animasyon', link: '/kategoriler/aksiyon' }}></CategoryCard>

                </Stack>
            </Grid>
        </Grid>
    )
}

export default Categories