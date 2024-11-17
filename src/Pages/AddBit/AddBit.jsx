import { Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

import "../AddBit/AddBit.css"
import FileUploadButton from '../../components/FileUploadButton/FileUploadButton'

const AddBit = () => {
    return (
        <div id='ppal'>
            <div id='jead'>
                <img src="src/assets/Logo.png" alt="" id='logo' />
                <h2>Botanica Viva</h2>
                <Link to='/LogedHomePage'>
                    <Button>Regresar</Button>
                </Link>
            </div>

            <div id='forum'>
                <div id='half1'>
                    <h3><img src='src/assets/Hojita.png' className='hojita' /> Titulo de la Bitacora</h3>
                    <input type="text" id="i1" />
                    <div id='el2'>
                        <div id='elhalf1'>
                            <h3><img src='src/assets/Hojita.png' className='hojita' />Fecha</h3>
                            <input type="date" id="i2" />
                        </div>
                        <div id='elhalf2'>
                            <h3><img src='src/assets/Hojita.png' className='hojita' />Hora</h3>
                            <input type="datetime" id="i3" />
                        </div>
                    </div>
                    <h3><img src='src/assets/Hojita.png' className='hojita' />Localización Geografíca (Coordenadas)</h3>
                    <input type="text" id="i4" />
                    <h3><img src='src/assets/Hojita.png' className='hojita' />Condiciones Climaticas</h3>
                    <input type="text" id="i5" />
                </div>

                <div id='half2'>
                    <h3><img src='src/assets/Hojita.png' className='hojita' />Fotografias del sitio de muestreo</h3>
                    <FileUploadButton/>
                    <h3><img src='src/assets/Hojita.png' className='hojita' />Descripción del Habitad</h3>
                    <input type="text" id="i7" />
                    <h3><img src='src/assets/Hojita.png' className='hojita' />Observaciones Adicionales</h3>
                    <input type="text" id="i8" />
                </div>
            </div>
            <div id="fut">
                <Button id='reg'>REGISTRAR BITACORA</Button>
            </div>
        </div>
    )
}

export default AddBit
