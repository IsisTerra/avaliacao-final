import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import './MenuSuperior.css'
import { Link } from 'react-router-dom';

function MenuSuperior() {
    return (
        <Box sx={{ display: 'flex' }}>
            <AppBar component="nav" className='AppBar'>
                <Box sx={{ display: { xs: 'block', sm: 'flex', justifyContent: 'center' } }}>
                    <Link to="/">
                        <Button className='btn' sx={{ color: '#fff' }}>Página Inicial</Button>
                    </Link>
                    <Link to="/sobre-mim">
                        <Button className='btn' sx={{ color: '#fff' }}>Sobre mim</Button>
                    </Link>
                </Box>
            </AppBar>
        </Box>
    );
}

export default MenuSuperior