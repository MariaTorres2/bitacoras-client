import { faRightToBracket, faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../LoginPage/LoginPage.css';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Swal from 'sweetalert2';
import { login } from '../../services/auhtService';

const LoginPage = () => {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleLogin = async (e) => {
    e.preventDefault(); 

    try {
      const response = await login(credentials.email, credentials.password);
      console.log('Respuesta del servidor:', response);

      if (response.token) {
        // Guarda el token en localStorage
        localStorage.setItem('authToken', response.token);

        // Muestra mensaje de éxito
        Swal.fire({
          title: '¡Inicio de sesión exitoso!',
          text: `Bienvenido, ${response.user.email}`,
          icon: 'success',
          confirmButtonText: 'Continuar',
        }).then(() => {
          navigate('/LogedHomePage');
        });
      } else {
        // Si no hay token, muestra un error genérico
        Swal.fire({
          title: 'Inicio de sesión fallido',
          text: 'Por favor, verifica tus credenciales.',
          icon: 'error',
          confirmButtonText: 'Cerrar',
        });
      }
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      Swal.fire({
        title: 'Error al iniciar sesión',
        text: error.message,
        icon: 'error',
        confirmButtonText: 'Cerrar',
      });
    }
  };

  return (
    <div id="cont">
      <div id="super">
        <div id="main" className="animate__animated animate__fadeInDown">
          <div id="nigga_cont" className="animate__animated animate__fadeInLeft">
            <div id="nigga1">
              <h2 id="wel" className="animate__animated animate__fadeIn">Login</h2>
              
            </div>
            <div id="nigga2"></div>
          </div>
          <div id="contenmelo" className="animate__animated animate__fadeIn">
            <h2 id="lo">Log In</h2>
            <form id="log" onSubmit={handleLogin}>
              <h3>Usuario</h3>
              <input
                type="text"
                name="email"
                value={credentials.email}
                onChange={handleInputChange}
              />
              <h3>Contraseña</h3>
              <input
                type="password"
                name="password"
                value={credentials.password}
                onChange={handleInputChange}
              />
              <button id="ing" type="submit">
                <FontAwesomeIcon icon={faRightToBracket} />
                Ingresar
              </button>
            </form>
            <Link to="/Register">
              <button id="regis">
                <FontAwesomeIcon icon={faPenToSquare} />
                Registrarse
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
