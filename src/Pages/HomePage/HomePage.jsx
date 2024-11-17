import React from 'react'

import Footer from '../../components/Footer/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import { faImage } from '@fortawesome/free-solid-svg-icons';
import { faMicrophone } from '@fortawesome/free-solid-svg-icons';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import { Button } from '@mui/material'
import { Link } from 'react-router-dom';

import './HomePage.css'

const HomePage = () => {
  return (
    <main>
      <div id="banner">
        <div id='BannerContent'>
            <h2>VIVE LA NATURALEZA, SIENTE LA VIDA</h2>
          <div>
            <Link to={"/LoginPage"}>
              <Button variant='outlined' id='toLog'>
                Ingresar
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <div>
        <div id="botones" class="si">
          <Button className="icon-button">
            <FontAwesomeIcon icon={faLocationDot} className="fa-5x" />
            <br />Ubicación
          </Button>
          <Button className="icon-button">
            <FontAwesomeIcon icon={faClock} className="fa-5x" />
            <br />Horarios
          </Button>
          <Button className="icon-button">
            <FontAwesomeIcon icon={faImage} className="fa-5x" />
            <br />Plantas
          </Button>
          <Button className="icon-button">
            <FontAwesomeIcon icon={faMicrophone} className="fa-5x" />
            <br />Conferencias
          </Button>
          <Button className="icon-button">
            <FontAwesomeIcon icon={faUsers} className="fa-5x" />
            <br />Aliados
          </Button>
        </div>
        <div id='samples' class="si">
          <img src="src/assets/imagen.jpg" alt="" class="fotos" />
          <img src="src/assets/imagen.jpg" alt="" class="fotos" />
          <img src="src/assets/imagen.jpg" alt="" class="fotos" />
          <img src="src/assets/imagen.jpg" alt="" class="fotos" />
          <img src="src/assets/imagen.jpg" alt="" class="fotos" />
          <img src="src/assets/imagen.jpg" alt="" class="fotos" />
        </div>
      </div>

    </main>
  )
}

export default HomePage
