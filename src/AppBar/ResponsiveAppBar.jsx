import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import { getAuth } from 'firebase/auth';
import { app } from "../firebase";
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';

import './responsive-app-bar.css';

export const ResponsiveAppBar = ({ user }) => {
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const auth = getAuth(app);

    const handleOpenUserMenu = (event) => setAnchorElUser(event.currentTarget);;
    const handleCloseUserMenu = () => setAnchorElUser(null);
    const onClickLogOut = () => auth.signOut();

    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters className='app-bar__logo-wrapper'>
                    <div className='app-bar__logo'>
                        <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            href="/"
                            sx={{
                                mr: 2,
                                display: { xs: 'none', md: 'flex' },
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            LOGO
                        </Typography>
                    </div>

                    <div className='app-bar__logo'>
                        <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
                        <Typography
                            variant="h5"
                            noWrap
                            component="a"
                            href=""
                            sx={{
                                mr: 2,
                                display: { xs: 'flex', md: 'none' },
                                flexGrow: 1,
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            LOGO
                        </Typography>
                    </div>


                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Log Out">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <Box sx={{display: {xs: 'none', md: 'flex'}}}>
                                <span className='app-bar__user-name'>{user.displayName}</span><span className='app-bar__user-email'>({user.email})</span>
                                </Box>
                                <Avatar alt={user.displayName} src={user.photoURL} />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            <MenuItem key="Log Out" onClick={handleCloseUserMenu}>
                                <Typography textAlign="center" onClick={onClickLogOut}>Log Out</Typography>
                            </MenuItem>
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};


// import React, { useState } from 'react';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import Menu from '@mui/material/Menu';
// import Container from '@mui/material/Container';
// import Avatar from '@mui/material/Avatar';
// import Tooltip from '@mui/material/Tooltip';
// import MenuItem from '@mui/material/MenuItem';
// import AdbIcon from '@mui/icons-material/Adb';


// export const ResponsiveAppBar = ({ user }) => {
//     const [anchorElUser, setAnchorElUser] = useState(null);

