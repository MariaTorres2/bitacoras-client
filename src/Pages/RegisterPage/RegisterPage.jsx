import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLeaf } from '@fortawesome/free-solid-svg-icons';
import './RegisterPage.css';
import { Link, useNavigate } from 'react-router-dom';
import { register } from '../../services/auhtService.js';
import { useState } from 'react';
import Swal from 'sweetalert2';

function RegisterPage() {
    const [formData, setFormData] = useState({
        documento: '',
        email: '',
        password: '',
        nombre_usuario: '',
        rol: '',
    });

    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleRegister = async () => {
        try {
            const response = await register(formData);
            console.log('Registro exitoso:', response);

            if (response.token) {
                // Mostrar SweetAlert de éxito
                Swal.fire({
                    title: '¡Registro exitoso!',
                    text: `Bienvenido, ${response.user.nombre_usuario}`,
                    icon: 'success',
                    confirmButtonText: 'Continuar',
                }).then(() => {
                    navigate('/LoginPage'); // Redirige después de cerrar el SweetAlert
                });
            } else {
                // Mostrar SweetAlert de error
                Swal.fire({
                    title: 'Registro fallido',
                    text: 'Por favor, intenta nuevamente.',
                    icon: 'error',
                    confirmButtonText: 'Cerrar',
                });
            }
        } catch (error) {
            console.error('Error al registrar usuario:', error);
            // Mostrar SweetAlert de error en la excepción
            Swal.fire({
                title: 'Error al registrar',
                text: error.message,
                icon: 'error',
                confirmButtonText: 'Cerrar',
            });
        }
    };

    return (
        <div className="app-container">
            {/* Navbar */}
            <div className="navbar">
                <img src="https://i.ibb.co/RPCnpvL/logopage.png" alt="Logo" className="logo" />
                <h1>Botánica Viva</h1>
                <Link to={'/LoginPage'}>
                    <button className="login-button">Login</button>
                </Link>
            </div>

            {/* Main Content */}
            <div className="content">
                {/* Registration Form */}
                <div className="form-container">
                    <div className="form-field">
                        <FontAwesomeIcon icon={faLeaf} className="icon" />
                        <label>Documento</label>
                        <input 
                            type="text" 
                            name="documento" 
                            value={formData.documento} 
                            onChange={handleInputChange} 
                        />
                    </div>
                    <div className="form-field">
                        <FontAwesomeIcon icon={faLeaf} className="icon" />
                        <label>Email</label>
                        <input 
                            type="email" 
                            name="email" 
                            value={formData.email} 
                            onChange={handleInputChange} 
                        />
                    </div>
                    <div className="form-field">
                        <FontAwesomeIcon icon={faLeaf} className="icon" />
                        <label>Contraseña</label>
                        <input 
                            type="password" 
                            name="password" 
                            value={formData.password} 
                            onChange={handleInputChange} 
                        />
                    </div>
                    <div className="form-field">
                        <FontAwesomeIcon icon={faLeaf} className="icon" />
                        <label>Nombre de Usuario</label>
                        <input 
                            type="text" 
                            name="nombre_usuario" 
                            value={formData.nombre_usuario} 
                            onChange={handleInputChange} 
                        />
                    </div>
                    <div className="form-field">
                        <FontAwesomeIcon icon={faLeaf} className="icon" />
                        <label>Rol</label>
                        <select 
                            name="rol" 
                            value={formData.rol} 
                            onChange={handleInputChange}
                        >
                            <option value="">Seleccione</option>
                            <option value="administrador">Administrador</option>
                            <option value="usuario">Usuario</option>
                        </select>
                    </div>
                </div>

                {/* Image Section */}
                <div className="image-section">
                    <button className="register-button" onClick={handleRegister}>
                        Registrar
                    </button>
                </div>
            </div>

            {/* Footer */}
            <footer>
            </footer>
        </div>
    );
}

export default RegisterPage;
