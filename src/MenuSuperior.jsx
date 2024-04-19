import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import './MenuSuperior.css'

function MenuSuperior() {
    return (
        <Box sx={{ flexGrow: 1 }} >
            <AppBar position="static" >
                <Toolbar className='menu'>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        ☄️Encontrando Asteróides
                    </Typography>
                    <div className='botoes' style={{width:'50%'}}>
                        <Link to="/">
                            <Button className='btn' style={{ color: 'white' }}>Página Inicial</Button>
                        </Link>
                        <Link to="/sobre-mim">
                            <Button className='btn' style={{ color: 'white' }}>Sobre mim</Button>
                        </Link>
                    </div>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default MenuSuperior