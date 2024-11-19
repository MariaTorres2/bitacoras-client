import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

import './HomePage.css';

// Importa las imágenes de forma explícita
import sampleImage from '../../assets/Banner.png';

const HomePage = () => {
  const sampleImages = Array(6).fill(sampleImage); // Crea un array con las imágenes para simplificar

  
  return (
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
  );
};

export default HomePage;
