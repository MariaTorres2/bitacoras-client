import React from 'react'
import NavBarBita from '../../components/NavBarBita/NavBarBita'
import Cardpp from '../../components/Card/Cardpp'

import '../SelectBita/SelectBita.css'
const SelectBita = () => {
    return (
        <div id="container">
            <div id="NavBar">
                <NavBarBita id="cd" />
            </div>
            <div id="logom">
                <div className="card-grid">
                    <Cardpp id="getinfo"/>
                </div>
                <div id='selected-bita-info'>
                    <h3>Muestreo</h3>
                    <div className='info'>

                    </div>
                    <div className='info'>

                    </div>
                    <h3>Observaciones</h3>
                    <div className='observation'>
                        <h3>Title</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SelectBita
