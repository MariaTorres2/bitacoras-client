import { useState } from 'react';
import { Button } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import "../AddBit/AddBit.css";
import FileUploadButton from '../../components/FileUploadButton/FileUploadButton';
import { create } from '../../services/bitacoraService';
import logo from '../../assets/Logo.png';
import logohojita from "../../assets/Hojita.png"
const AddBit = () => {
  const [formData, setFormData] = useState({
    id_bitacora: '',
    titulo: '',
    fecha: '',
    hora: '',
    coordenadas: '',
    condiciones_climaticas: '',
    imagen_sitio: '',
    descripcion_habitat: '',
    observaciones: '',
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileUpload = (url) => {
    setFormData({ ...formData, imagen_sitio: url });
  };

  const handleSubmit = async () => {
    try {
      console.log('Datos enviados:', formData); 
      await create(formData);
      alert('Bitácora registrada exitosamente');
      navigate('/LogedHomePage');
    } catch (error) {
      console.error('Error al registrar la bitácora:', error);
      alert(`Error: ${error}`);
    }
  };

  return (
    <div id='ppal'>
      <div id='jead'>
        <img src={logo} alt="" id='logo' />
        <h2>Botánica Viva</h2>
        <Link to='/LogedHomePage'>
          <Button>Regresar</Button>
        </Link>
      </div>

      <div id='forum'>
        <div id='half1'>
          <h3>
            <img src= {logohojita} className='hojita' /> Titulo de la Bitacora
          </h3>
          <input type="text" id="i1" name="titulo" value={formData.titulo} onChange={handleInputChange} />
          <div id='el2'>
            <div id='elhalf1'>
              <h3>
                <img src={logohojita} className='hojita' />Fecha
              </h3>
              <input type="date" id="i2" name="fecha" value={formData.fecha} onChange={handleInputChange} />
            </div>
            <div id='elhalf2'>
              <h3>
                <img src={logohojita} className='hojita' />Hora
              </h3>
              <input type="time" id="hora" name="hora" value={formData.hora} onChange={handleInputChange} />
            </div>
          </div>
          <h3>
            <img src={logohojita} className='hojita' />Localización Geográfica (Coordenadas)
          </h3>
          <input type="text" id="i4" name="coordenadas" value={formData.coordenadas} onChange={handleInputChange} />
          <h3>
            <img src={logohojita} className='hojita' />Condiciones Climáticas
          </h3>
          <input type="text" id="i5" name="condiciones_climaticas" value={formData.condiciones_climaticas} onChange={handleInputChange} />
        </div>

        <div id='half2'>
          <h3 id='fotografia'>
            <img src={logohojita}className='hojita' />Fotografías del sitio de muestreo
          </h3>
          <h3>
          <input type="text" id="i5" name="imagen_sitio" value={formData.imagen_sitio} onChange={handleInputChange} />
          </h3>
          <h3>
            <img src={logohojita} className='hojita' />Descripción del Hábitat
          </h3>
          <input type="text" id="i7" name="descripcion_habitat" value={formData.descripcion_habitat} onChange={handleInputChange} />
          <h3>
            <img src={logohojita} className='hojita' />Observaciones Adicionales
          </h3>
          <input type="text" id="i8" name="observaciones" value={formData.observaciones} onChange={handleInputChange} />
        </div>
      </div>
      <div id="fut">
        <Button id='reg' onClick={handleSubmit}>
          REGISTRAR BITACORA
        </Button>
      </div>
    </div>
  );
};

export default AddBit;
