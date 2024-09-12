import React from 'react'
import Grid from '@mui/material/Grid2'
import { Box, Card, CardActionArea, CardContent, CardMedia, Link, Stack, Typography } from '@mui/material'
import CategoryCard from '../components/cards/CategoryCard'
import '../css/Categories.css'
import { motion } from 'framer-motion'

function Categories() {
    return (
        <motion.div
            animate={{ y: [100, 0], opacity: [0, 0.5, 1] }}
            transition={{ duration: 0.5 }}
        >
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
        </motion.div>

    )
}

export default Categories