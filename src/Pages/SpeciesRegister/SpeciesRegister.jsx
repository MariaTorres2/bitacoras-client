import { Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import FileUploadButton from '../../components/FileUploadButton/FileUploadButton'

import "../SpeciesRegister/SpeciesRegister.css"

const SpeciesRegister = () => {
    return (
        <div id='ppal'>
            <div id='jead'>
                <img src="src/assets/Logo.png" alt="" id='logo' />
                <h2>Botanica Viva</h2>
            </div>

            <div id='forum'>
                <div id='half1'>
                    <h3><img src='src/assets/Hojita.png' className='hojita' /> Nombre Cientifico</h3>
                    <input type="text" id="i1" />
                    <h3><img src='src/assets/Hojita.png' className='hojita' />Nombre Común</h3>
                    <input type="date" id="i2" />
                    <h3><img src='src/assets/Hojita.png' className='hojita' />Familia</h3>
                    <input type="datetime" id="i3" />
                    <h3><img src='src/assets/Hojita.png' className='hojita' />Familia</h3>
                    <input type="text" id="i4" />
                    <h3><img src='src/assets/Hojita.png' className='hojita' />Cantidad de Muestras</h3>
                    <input type="text" id="i5" />
                </div>

                <div id='half2'>
                    <h3><img src='src/assets/Hojita.png' className='hojita' />Fotografias de la especie</h3>
                    <FileUploadButton />
                    <h3><img src='src/assets/Hojita.png' className='hojita' />Estado de la planta</h3>
                    <input type="text" id="i7" />
                    <div id='botones'>
                        <Button className='ButtonsRegister'>Finalizar Bitacora</Button>
                        <Button className='ButtonsRegister'>Registrar Especie</Button>
                    </div>
                </div>
            </div>
            <div id="fut">
                <Button id='reg'>VOLVER</Button>
            </div>
        </div>
    )
}

export default SpeciesRegister
