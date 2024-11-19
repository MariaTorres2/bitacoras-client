import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

import './HomePage.css';



const HomePage = () => {

  const imagenes = [
    'https://dalerosas.com/modules/smartblog/images/6-single-default.jpg',
    'https://agriculturadelasamericas.com/wp-content/uploads/2022/01/alstroemeria-g3fd7516a3_640.jpg',
    'https://agriculturadelasamericas.com/wp-content/uploads/2022/01/1a0e6646-0567-416f-89f7-91accdb6ad7a-1024x768.jpg',
    'https://s3.amazonaws.com/rtvc-assets-canalinstitucional.tv/s3fs-public/styles/interna_noticias_after_1222x547_/public/2022-09/flores-colombianas-orquideas.jpg?itok=y0l3z_AO',
    'https://s3.amazonaws.com/rtvc-assets-canalinstitucional.tv/s3fs-public/inline-images/Claveles.jpg',
    'https://s3.amazonaws.com/rtvc-assets-canalinstitucional.tv/s3fs-public/inline-images/orqu%C3%ADdeas.jpg',
    'https://static8.depositphotos.com/1010238/810/i/450/depositphotos_8105962-stock-photo-tropical-flower-colombia.jpg',
    'https://www.blogdemedioambiente.com/wp-content/uploads/2024/01/tipos-de-flores-explorando-la-diversidad-floral-en-la-naturaleza.jpg',
];

  
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
          {imagenes.map((img, index) => (
            <img src={img} alt={`Muestra ${index + 1}`} className="fotos" key={index} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default HomePage;
