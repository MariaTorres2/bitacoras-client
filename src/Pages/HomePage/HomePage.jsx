import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faClock, faImage, faMicrophone, faUsers } from '@fortawesome/free-solid-svg-icons';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

import './HomePage.css';

// Importa las imágenes de forma explícita
import sampleImage from '../../assets/imagen.jpg';

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
        {/* <div id="botones" className="si">
          {[
            { icon: faLocationDot, label: 'Ubicación' },
            { icon: faClock, label: 'Horarios' },
            { icon: faImage, label: 'Plantas' },
            { icon: faMicrophone, label: 'Conferencias' },
            { icon: faUsers, label: 'Aliados' },
          ].map(({ icon, label }, index) => (
            <Button key={index} className="icon-button">
              <FontAwesomeIcon icon={icon} className="fa-5x" />
              <br />
              {label}
            </Button>
          ))}
        </div> */}

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
