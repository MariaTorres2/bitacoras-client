import React from 'react'
import NavBarBita from '../../components/NavBarBita/NavBarBita'
import "../BitSamples/BitSample.css"
import FileUploadButton from '../../components/FileUploadButton/FileUploadButton'

const BitSample = () => {
    return (
        <div id="container">
            <div id="NavBar">
                <NavBarBita />
            </div>
            <div id="logom">
                <div id='Title'>
                    <h2>Nombre de Flor</h2>
                </div>
                <div id='complete'>
                    <div className='sample-addinfo'>
                        <h3><img src='src/assets/Hojita.png' className='hojita' />Fecha Muestreo</h3>
                        <input type="date" className='input_BitSample' />
                    </div>
                    <div className='sample-addinfo'>
                        <h3><img src='src/assets/Hojita.png' className='hojita' />Observaciones</h3>
                        <input type="text" className='input_BitSample' />
                    </div>
                    <div className='sample-addinfo'>
                        <h3><img src='src/assets/Hojita.png' className='hojita' />Tamaño de la muestra</h3>
                        <input type="text" className='input_BitSample' />
                    </div>
                    <div className='sample-addinfo'>
                        <h3><img src='src/assets/Hojita.png' className='hojita' />Soporte</h3>
                        <FileUploadButton />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BitSample
