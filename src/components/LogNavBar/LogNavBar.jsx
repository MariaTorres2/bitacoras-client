import React from 'react'
import { Button } from '@mui/material'
import { Link } from 'react-router-dom'

import '../LogNavBar/LogNavBar.css'
const LogNavBar = () => {
    return (
        <aside>
            <img src="src/assets/Logo.png" id="logo" alt="" />
            <h2>Botánica Viva</h2>

            <Link to={'/AddBit'}>
                <Button variant='outlined' className='xd'>Agregar Bitacora</Button>
            </Link>
            <Link to='/Filtred'>
                <Button variant='outlined' className='xd'>Filtrar</Button>
            </Link>
            <Link to='/SearchPage'>
                <Button variant='outlined' className='xd'>Buscar</Button>
            </Link>
            <Link to='/'>
                <Button variant='outlined' className='xd'>Salir</Button>
            </Link>

            <div id='flowers'></div>
        </aside>
    )
}

export default LogNavBar
