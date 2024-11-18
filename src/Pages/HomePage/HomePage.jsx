
import { faLocationDot, faClock, faImage, faMicrophone, faUsers } from '@fortawesome/free-solid-svg-icons';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import React, { useState } from "react";

import './HomePage.css';

const HomePage = () => {
  const imagenes = Array(6).fill(imagenes); // Crea un array con las imágenes para simplificar

 


    <main>
      {/* Banner principal */}
      <div id="banner">
        <div id="BannerContent">
          <h2>VIVE LA NATURALEZA, SIENTE LA VIDA</h2>
          <div>
            <Link to="/LoginPage">
              <Button variant="outlined" id="toLog">
                Ingresar
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Sección de botones de íconos */}
      <div>
        {/* Galería de imágenes */}
        <div id="samples" className="si">
          {sampleImages.map((img, index) => (
            <img src={img} alt={`Muestra ${index + 1}`} className="fotos" key={index} />
          ))}
        </div>
      </div>
    </main>
};

export default HomePage;
