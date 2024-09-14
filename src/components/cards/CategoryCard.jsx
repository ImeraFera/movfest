import { Box, Grid2, Link, Typography } from '@mui/material'
import React from 'react'

function CategoryCard(props) {
    const { title, link, id } = props;
    return (

        <Grid2 size={3} >
            <Box className="card">
                <Link underline='none' className="card1" href={link}>
                    <Typography variant='h3'>{title}</Typography>
                    <Box className="go-corner" >
                        <Box className="go-arrow">
                            →
                        </Box>
                    </Box>
                </Link>
            </Box>
        </Grid2>)
}


export default CategoryCard