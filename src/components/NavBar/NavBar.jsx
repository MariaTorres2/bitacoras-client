import React from 'react'
import Avatar from '@mui/material/Avatar'
import { deepOrange } from "@mui/material/colors";
import { Box, Grid2 } from '@mui/material';
import "./NavBar.css"

const NavBar = () => {
return (
    <div id="Header">
        <Grid2 container spacing={8}/>
            <img src="src/assets/Logo.png" id="logo" alt="" />
            <h1>Bótanica Viva</h1>
            <a href="Pweb_React\src\Pages\HomePage\LogedHomePage\LogedHomePage.jsx">¿Quienes Somos?</a>
            <a href="">Servicios</a>
            <a href="">Explorar</a>
        <Avatar sx={{ bgcolor: deepOrange[500] }} variant='square'>N</Avatar>
    </div>
    )
}

export default NavBar
