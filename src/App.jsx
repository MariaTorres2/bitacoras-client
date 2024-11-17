import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header/Header';
import HomePage from './Pages/HomePage/HomePage';
import LoginPage from './Pages/LoginPage/LoginPage';
import LogedHomePage from './Pages/HomePage/LogedHomePage/LogedHomePage';
import Filtred from './Pages/Filtred/Filtred';
import AddBit from './Pages/AddBit/AddBit';
import AdminLogedHomePage from './Pages/AdminLogedHomePage/AdminLogedHomePage';
import ModifyPage from './Pages/ModifyPage/ModifyPage';
import UpdateUser from './Pages/UpdateUser/UpdateUser';
import SearchPage from './Pages/SearchPage/SearchPage';
import SelectBita from './Pages/SelectBita/SelectBita';
import BitSample from './Pages/BitSamples/BitSample';
import SpeciesRegister from './Pages/SpeciesRegister/SpeciesRegister';
import RegisterPage from './Pages/RegisterPage/RegisterPage';

const App = () => {
  const location = useLocation();

  // Oculta el Header en la página de login
  const hideHeader = location.pathname != '/';
  const showNavBar = location.pathname ==='/LogedHomePage';
  

  return (
    <div id='xd'>
      {!hideHeader && <Header />}
      
      <Routes>
        {/* HomePage */}
        <Route path='/' element={<HomePage />} />
        {/* login */}
        <Route path='/LoginPage' element={<LoginPage/>} />
        {/* Home page para cuando se inicie sesion */}
        <Route path='/LogedHomePage' element={<LogedHomePage/>}/>
        {/* para cuando le des a filtrar en la barra de busqueda */}
        <Route path='/Filtred' element={<Filtred/>}/>
        {/* para cuando le das a añadir bitacora */}
        <Route path='/AddBit' element={<AddBit/>}/>
        {/* para cuando un admin se logguee */}
        <Route path='/AdminLogedHomePage' element={<AdminLogedHomePage/>}/>
        {/* para cuando un admin le dé a gestionar usuarios */}
        <Route path='/Modify' element={<ModifyPage/>}/>
        {/* para cuando un admin le dé a actualizar usuario */}
        <Route path='/UpdateUser'element={<UpdateUser/>}/>
        {/* para cuando le den a buscar en la barra de navegacion */}
        <Route path='/SearchPage' element={<SearchPage/>}/>
        {/* para cuando seleccionen una bitacora */}
        <Route path='/SelectedBita' element={<SelectBita/>}/>
        {/* lo de las muestras y no tengo ni idea de como lo van a implementar */}
        <Route path='/BitSamples' element={<BitSample/>}/>
        {/* Para registrar las especies */}
        <Route path='/SpeciesRegister' element={<SpeciesRegister/>}/>
        {/* para cuando seleccionen el boton de registrar */}
        <Route path='/Register' element={<RegisterPage/>}/>
      </Routes>
    </div>
  );
};

const RootApp = () => (
  <Router>
    <App />
  </Router>
);

export default RootApp;
