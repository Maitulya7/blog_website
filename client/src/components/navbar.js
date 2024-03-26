import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, IconButton, Menu, MenuItem } from '@mui/material';
import { AccountCircle, ExitToApp, Create } from '@mui/icons-material';

const Navbar = () => {
    const isLoggedIn = localStorage.getItem('access-token') !== null;
    const [anchorEl, setAnchorEl] = useState(null);

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
        <AppBar position="static">
            <Toolbar sx={{ display: 'flex',width:"100%", justifyContent: 'space-between' }}>
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
                                <AccountCircle />
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
    );
};

export default Navbar;
