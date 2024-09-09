import React from 'react'
import { Box, Container, Paper, Typography } from '@mui/material'
import Grid from '@mui/material/Grid2'
import { Link } from 'react-router-dom'
function Footer() {
    return (
        <Box
            component="footer"
            sx={{
                bgcolor: 'background.dark',
                py: 3,
                px: 2,
                mt: 'auto',
            }}
        >
            <hr />
            <Container maxWidth="lg">
                <Grid container spacing={4} justifyContent="center">
                    <Grid item xs={12} sm={4} textAlign="center">
                        <Typography variant="h6" gutterBottom>
                            Şirket
                        </Typography>
                        <ul style={{ listStyleType: 'none', padding: 0 }}>
                            <li>
                                <Link href="#" color="inherit">Hakkımızda</Link>
                            </li>
                            <li>
                                <Link href="#" color="inherit">İletişim</Link>
                            </li>
                            <li>
                                <Link href="#" color="inherit">Hizmetler</Link>
                            </li>
                        </ul>
                    </Grid>
                    <Grid item xs={12} sm={4} textAlign="center">
                        <Typography variant="h6" gutterBottom>
                            Sosyal Medya
                        </Typography>
                        <ul style={{ listStyleType: 'none', padding: 0 }}>
                            <li>
                                <Link href="#" color="inherit">Facebook</Link>
                            </li>
                            <li>
                                <Link href="#" color="inherit">Twitter</Link>
                            </li>
                            <li>
                                <Link href="#" color="inherit">Instagram</Link>
                            </li>
                        </ul>
                    </Grid>
                    <Grid item xs={12} sm={4} textAlign="center">
                        <Typography variant="h6" gutterBottom>
                            İletişim Bilgileri
                        </Typography>
                        <Typography variant="body1">
                            Adres: Örnek Mah. No:1, İstanbul
                        </Typography>
                        <Typography variant="body1">
                            Telefon: (123) 456-7890
                        </Typography>
                        <Typography variant="body1">
                            E-posta: info@example.com
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}

export default Footer