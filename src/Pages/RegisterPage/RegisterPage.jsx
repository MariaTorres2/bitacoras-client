import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLeaf } from '@fortawesome/free-solid-svg-icons';
import './RegisterPage.css';
import { Link } from 'react-router-dom';

function RegisterPage() {
    return (
        <div className="app-container">
            {/* Navbar */}
            <div className="navbar">
                <img src="src/assets/logo.png" alt="Logo" className="logo" />
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
                        <label>Nombres</label>
                        <input type="text" />
                    </div>
                    <div className="form-field">
                        <FontAwesomeIcon icon={faLeaf} className="icon" />
                        <label>Apellidos</label>
                        <input type="text" />
                    </div>
                    <div className="form-field">
                        <FontAwesomeIcon icon={faLeaf} className="icon" />
                        <label>Género</label>
                        <select>
                            <option>Seleccione</option>
                            <option>Masculino</option>
                            <option>Femenino</option>
                            <option>Otro</option>
                        </select>
                    </div>
                    <div className="form-field">
                        <FontAwesomeIcon icon={faLeaf} className="icon" />
                        <label>Correo electrónico</label>
                        <input type="email" />
                    </div>
                </div>

                {/* Image Section */}
                <div className="image-section">
                    <button className="register-button">Registrar</button>
                </div>
            </div>

            {/* Footer */}
            <footer>
            </footer>
        </div>
    );
}

export default RegisterPage;
