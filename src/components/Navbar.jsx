import { AppBar, Box, Button, IconButton, Stack, Toolbar, Typography, Link, Menu, MenuItem, Drawer, List, ListItem, ListItemText, Avatar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { notify } from '../utils/toastMessage'
import { getErrorMessage } from '../errors/ErrorCodes'
import { logout } from '../redux/slices/authSlice';

function Navbar() {

    const navigate = useNavigate();
    const [anchorEl, setAnchorEl] = useState(null);
    const dispatch = useDispatch();
    const userToken = useSelector((state) => state.auth.userToken)

    const handleMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const [open, setOpen] = useState(false);

    const toggleDrawer = (open) => (event) => {
        setOpen(open);
    };

    const goto = (path) => {
        handleMenuClose();
        navigate(path)
    }

    const handleSignOut = async () => {
        try {
            dispatch(logout())
            notify('Başarıyla çıkış yaptınız!', 'success')

            return goto('/');
        } catch (error) {
            notify(error.message, 'error')
        }

    }

    return (
        <AppBar position="static" sx={{ padding: 1, }} color='transparent'>
            <Toolbar >
                {/* Menu Icon for Mobile */}
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ display: { xs: 'block', md: 'none' }, mr: 2 }}
                    onClick={toggleDrawer(true)}
                >
                    <MenuIcon />
                </IconButton>
                <Box flexDirection={'row'} flex={1} justifyContent={'space-between'} display={'flex'}>

                    <Box display={'flex'}>
                        <Typography variant="h5" >
                            <Link color="inherit" href="/" underline="none">
                                Movfest
                            </Link>
                        </Typography>
                    </Box>
                    <Box display={'flex'}>
                        <Stack
                            direction="row"
                            justifyContent={'center'} alignItems={'center'}
                            display={{ xs: 'none', md: 'flex' }}
                        >
                            <Button color='inherit' onClick={() => navigate('/filmler')}>Filmler</Button>
                            <Button color='inherit' onClick={() => navigate('/kategoriler')}>Kategoriler</Button>
                            <Button color='inherit' onClick={() => navigate('/iletisim')}>İletişim</Button>
                        </Stack>
                    </Box>
                    <Box>
                        <Button
                            variant="outlined"
                            color="primary"
                            sx={{
                                marginLeft: 2,
                                minWidth: 'auto',
                                width: 40, // Avatar boyutuyla uyumlu genişlik
                                height: 40, // Avatar boyutuyla uyumlu yükseklik
                                '&:hover': {
                                    backgroundColor: 'action.hover',
                                },
                            }}
                            onClick={handleMenuOpen}
                        >
                            <Avatar
                                variant="circular"
                                sx={{
                                    width: 36,
                                    height: 36,
                                }}
                            />
                        </Button>
                    </Box>
                </Box>

                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={handleMenuClose}
                    sx={{
                        '& .MuiPaper-root': {
                            backgroundColor: '#202020',
                            color: 'white',
                        },
                    }}
                >

                    {(userToken ? (
                        <Box>
                            <MenuItem
                                sx={{
                                    '&:hover': {
                                        color: '#ff4081',
                                    },
                                }}
                                onClick={() => goto('/profilim')}
                            >
                                Profilim
                            </MenuItem>
                            <MenuItem
                                sx={{
                                    '&:hover': {
                                        color: '#ff4081',
                                    },
                                }}
                                onClick={handleSignOut}
                            >
                                Çıkış Yap
                            </MenuItem>
                        </Box>
                    ) : (
                        <Box>
                            <MenuItem
                                sx={{
                                    '&:hover': {
                                        color: '#ff4081',
                                    },
                                }}
                                onClick={() => goto('/giris')}
                            >
                                Giriş Yap
                            </MenuItem>
                            <MenuItem
                                sx={{
                                    '&:hover': {
                                        color: '#ff4081',
                                    },
                                }}
                                onClick={() => navigate('/kayit')}
                            >
                                Kayıt Ol
                            </MenuItem>
                        </Box>
                    ))}


                </Menu>

                <Drawer
                    anchor="left"
                    open={open}
                    onClose={toggleDrawer(false)}
                    sx={{ display: { xs: 'block', md: 'none' } }}
                >
                    <Box
                        sx={{ width: 250 }}
                        role="presentation"
                        onClick={toggleDrawer(false)}
                        onKeyDown={toggleDrawer(false)}
                    >
                        <List>
                            <ListItem button onClick={() => navigate('/filmler')}>
                                <ListItemText primary="Filmler" />
                            </ListItem>
                            <ListItem button onClick={() => navigate('/kategoriler')}>
                                <ListItemText primary="Kategoriler" />
                            </ListItem>
                            <ListItem button onClick={() => navigate('/populer')}>
                                <ListItemText primary="Popüler" />
                            </ListItem>
                            <ListItem button onClick={() => navigate('/yeniler')}>
                                <ListItemText primary="Yeniler" />
                            </ListItem>
                            <ListItem button onClick={() => navigate('/iletisim')}>
                                <ListItemText primary="İletişim" />
                            </ListItem>
                        </List>

                    </Box>
                </Drawer>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar;
