import { Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const ModifyNavBar = () => {
    return (
        <aside>
            <img src="src/assets/Logo.png" id="logo" alt="" />
            <h2>Botánica Viva</h2>

            <Link to={'/Modify'}>
                <Button className='xd'>Crear Usuario</Button>
            </Link>

            <Link to={'/UpdateUser'}>
                <Button variant='outlined' className='xd'>Editar Usuario</Button>
            </Link>
            <Link to=''>
                <Button variant='outlined' className='xd'>Eliminar Usuario</Button>
            </Link>
            <Link to='/'>
                <Button variant='outlined' className='xd'>Salir</Button>
            </Link>

            <div id='flowers'></div>
        </aside>
    )
}

export default ModifyNavBar
