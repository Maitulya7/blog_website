import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, IconButton, Menu, MenuItem, Stack } from '@mui/material';
import { AccountCircle, ExitToApp, Create } from '@mui/icons-material';
import axios from 'axios';
import backgroundImage from '../images/navbar-bg.jpg'; // Importing the image

const Navbar = () => {
    const isLoggedIn = localStorage.getItem('access-token') !== null;
    const [anchorEl, setAnchorEl] = useState(null);
    const [name, setName] = useState('');

    useEffect(() => {
        const token = localStorage.getItem("access-token");
        if (isLoggedIn) {
            axios.get("http://localhost:5000/api/users/userInfo", {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }).then(response => {
                setName(response.data.username);
                console.log(name)
            }).catch(error => {
                console.error('Error fetching user information:', error);
            });
        }
    }, [isLoggedIn]);

    const handleMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const handleLogout = () => {
        localStorage.clear();
        window.location.href = '/login';
    };

    return (
        <div style={{ position: 'relative', height: '65px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div style={{ position: 'absolute', top: '0', left: '0', right: '0', bottom: '0', backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover' }}></div>
            <AppBar color='secondary' position="absolute" sx={{ backgroundColor: 'transparent', color: 'white', width: '100%' }}>
                <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography variant="h6" component="div">
                        <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>
                            Interstellar Insights
                        </Link>
                    </Typography>
                    <div>
                        {isLoggedIn ? (
                            <>
                                <IconButton
                                    size="large"
                                    edge="end"
                                    color="inherit"
                                    aria-label="user menu"
                                    onClick={handleMenuOpen}
                                >
                                    <Stack direction='row' spacing={2} style={{ alignItems: "center" }}>
                                        <Typography variant='h6'>{name}</Typography>
                                        <AccountCircle sx={{ marginLeft: "10px" }} />
                                    </Stack>
                                </IconButton>
                                <Menu
                                    id="user-menu"
                                    anchorEl={anchorEl}
                                    open={Boolean(anchorEl)}
                                    onClose={handleMenuClose}
                                    anchorOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    keepMounted
                                >
                                    <MenuItem onClick={handleMenuClose} component={Link} to="/create-blog">
                                        <Create style={{ marginRight: '8px' }} />
                                        Create Blog
                                    </MenuItem>
                                    <MenuItem onClick={handleLogout}>
                                        <ExitToApp style={{ marginRight: '8px' }} />
                                        Logout
                                    </MenuItem>
                                </Menu>
                            </>
                        ) : (
                            <>
                                <Button color="inherit" component={Link} to="/login">Login</Button>
                                <Button color="inherit" component={Link} to="/register">Register</Button>
                            </>
                        )}
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default Navbar;
