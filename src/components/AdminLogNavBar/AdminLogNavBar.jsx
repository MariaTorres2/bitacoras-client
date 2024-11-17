import { Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

import '../AdminLogNavBar/AdminLogNavBar.css'
const AdminLogNavBar = () => {
    return (
        <aside>
            <img src="src/assets/Logo.png" id="logo" alt="" />
            <h2>Botánica Viva</h2>

            <Link to={'/Modify'}>
                <Button className='xd'>Gestionar Usuarios</Button>
            </Link>

            <Link to={'/AddBit'}>
                <Button variant='outlined' className='xd'>Agregar Bitacora</Button>
            </Link>
            <Link to='/Filtred'>
                <Button variant='outlined' className='xd'>Filtrar</Button>
            </Link>
            <Button variant='outlined' className='xd'>Buscar</Button>
            <Link to='/'>
                <Button variant='outlined' className='xd'>Salir</Button>
            </Link>

            <div id='flowers'></div>
        </aside>
    )
}

export default AdminLogNavBar
