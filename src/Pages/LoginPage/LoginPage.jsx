import React from 'react'
import  { faRightToBracket } from '@fortawesome/free-solid-svg-icons';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "../LoginPage/LoginPage.css"
import { Link } from 'react-router-dom';

const LoginPage = () => {
  return (
  <div id='cont'>
    <div id="super">
        <div id="main" class="animate__animated animate__fadeInDown">
            <div id="nigga_cont" class="animate__animated animate__fadeInLeft">
                <div id="nigga1" >
                    <h2 id="wel" class="animate__animated animate__fadeIn">¡WELCUM
                        BACK!</h2>
                    <p class="animate__animated animate__fadeIn">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum deserunt deleniti vitae porro a possimus voluptatibus dicta quae ducimus commodi provident sint, eius minus, explicabo reprehenderit officia modi repellat. Nesciunt.</p>
                </div>
                <div id="nigga2">
                </div>
            </div>
        <div id='contenmelo' class="animate__animated animate__fadeIn">
          <h2 id="lo">Log In</h2>
          <form id="log">
            <h3>Usuario</h3>
            <input type="text" />
            <h3>Contraseña</h3>
            <input type="password"/>
            <button id="ing"><FontAwesomeIcon icon={faRightToBracket} />Ingresar</button>
          </form>
          <Link to={'/Register'}>
          <button id="regis"><FontAwesomeIcon icon={faPenToSquare} />Registrarse</button>
          </Link>
        </div>
      </div>
    </div>
    
  </div>

  )
}

export default LoginPage

