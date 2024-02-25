import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import NavBar from './NavBar';

const Header = ({ setShowCharacters }) => {
    return (
        <>
            <AppBar position="static" color="primary">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Site de Valentin
                    </Typography>
                </Toolbar>
            </AppBar>
            <NavBar setShowCharacters={setShowCharacters} />
        </>
    );
};

export default Header;
