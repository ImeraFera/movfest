import { AppBar, Box, Button, IconButton, Stack, Toolbar, Typography, Link, Menu, MenuItem, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Navbar() {
    const navigate = useNavigate();
    const [anchorEl, setAnchorEl] = useState(null);

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
                            color='primary'
                            sx={{ marginLeft: 2 }}
                            onClick={handleMenuOpen}
                        >
                            Hesabım
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
                    <MenuItem sx={{
                        '&:hover': {
                            color: '#ff4081',
                        },
                    }} onClick={handleMenuClose}>Profile</MenuItem>
                    <MenuItem sx={{
                        '&:hover': {
                            color: '#ff4081',
                        },
                    }} onClick={handleMenuClose}>My account</MenuItem>
                    <MenuItem sx={{
                        '&:hover': {
                            color: '#ff4081',
                        },
                    }} onClick={handleMenuClose}>Logout</MenuItem>
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
                            <ListItem button>
                                <ListItemText primary="Filmler" />
                            </ListItem>
                            <ListItem button>
                                <ListItemText primary="Kategoriler" />
                            </ListItem>
                            <ListItem button>
                                <ListItemText primary="Popüler" />
                            </ListItem>
                            <ListItem button>
                                <ListItemText primary="Yeniler" />
                            </ListItem>
                            <ListItem button>
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
