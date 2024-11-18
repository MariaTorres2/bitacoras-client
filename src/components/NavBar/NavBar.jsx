import React from 'react'
import Avatar from '@mui/material/Avatar'
import { deepOrange } from "@mui/material/colors";
import { Box, Grid2 } from '@mui/material';
import "./NavBar.css"

const NavBar = () => {
return (
    <div id="Header">
        <Grid2 container spacing={8}/>
            <img src="https://i.ibb.co/RPCnpvL/logopage.png" id="logo" alt="" />
            <h1>Bótanica Viva</h1>
    </div>
    )
}

export default NavBar
