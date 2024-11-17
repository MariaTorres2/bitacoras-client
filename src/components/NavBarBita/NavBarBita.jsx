import React from 'react'
import { Button } from '@mui/material'
import { Link } from 'react-router-dom'

import "../NavBarBita/NavBarBita.css"

const NavBarBita = () => {
    return (

        <aside>
            <img src="src/assets/Logo.png" id="logo" alt="" />
            <h2>Botánica Viva</h2>

            <Link to={'/SelectedBita'}>
                <Button variant='outlined' className='xd'>Editar Bitacora</Button>
            </Link>
            <Link to=''>
                <Button variant='outlined' className='xd'>Eliminar Bitacora</Button>
            </Link>
            <Link to='/BitSamples'>
                <Button variant='outlined' className='xd'>Subir muestreo</Button>
            </Link>

            <div id='flowers'></div>
        </aside>
    )
}

export default NavBarBita
