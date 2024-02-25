import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import {Link} from "react-router-dom";

const NavBar = ({ setShowCharacters }) => {
    return (
        <AppBar position="static" color="transparent" elevation={0}>
            <Toolbar>
                <Button component={Link} color="inherit" onClick={() => setShowCharacters(true)} to={"/"}>
                    Personnages</Button>
                <Button component={Link} color="inherit" onClick={() => setShowCharacters(false)} to={"/"}>
                    Compétences</Button>
            </Toolbar>
        </AppBar>
    );
};

export default NavBar;
