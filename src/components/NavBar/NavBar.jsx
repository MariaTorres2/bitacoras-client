import React from 'react';
import Avatar from '@mui/material/Avatar';
import { deepOrange } from "@mui/material/colors";
import { Box } from '@mui/material'; // Corrige importaciones
import "./NavBar.css";
import Logo from './assets/Logo.png'; // Importa correctamente la imagen

const NavBar = () => {
    return (
        <div id="Header">
            <Box display="flex" alignItems="center">
                <img src={Logo} id="logo" alt="Logo de Bótanica Viva" />
                <h1>Bótanica Viva</h1>
                <a href="Pweb_React/src/Pages/HomePage/LogedHomePage/LogedHomePage.jsx">¿Quienes Somos?</a>
                <a href="#">Servicios</a>
                <a href="#">Explorar</a>
                <Avatar sx={{ bgcolor: deepOrange[500] }} variant="square">N</Avatar>
            </Box>
        </div>
    );
};

export default NavBar;
