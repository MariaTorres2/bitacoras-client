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

const MainApp = () => {
  const location = useLocation();

  // Determina si se debe mostrar el Header según la ruta actual
  const showHeader = location.pathname === '/';

  return (
    <div id="main-container">
      {showHeader && <Header />}
      <Routes>
        {/* Rutas principales */}
        <Route path="/" element={<HomePage />} />
        <Route path="/LoginPage" element={<LoginPage />} />
        <Route path="/LogedHomePage" element={<LogedHomePage />} />
      

        {/* Funcionalidades del sistema */}
        <Route path="/Filtred" element={<Filtred />} />
        <Route path="/AddBit" element={<AddBit />} />
        <Route path="/SearchPage" element={<SearchPage />} />

        {/* Rutas de administración */}
        <Route path="/AdminLogedHomePage" element={<AdminLogedHomePage />} />
        <Route path="/Modify" element={<ModifyPage />} />
        <Route path="/UpdateUser" element={<UpdateUser />} />

        {/* Rutas de bitácoras */}
        <Route path="/SelectedBita" element={<SelectBita />} />
        <Route path="/BitSamples" element={<BitSample />} />
        <Route path="/detallebitacora/:id" element={<LogedHomePage />} />

        {/* Rutas de registro */}
        <Route path="/SpeciesRegister" element={<SpeciesRegister />} />
        <Route path="/Register" element={<RegisterPage />} />
      </Routes>
    </div>
  );
};

const RootApp = () => (
  <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
    <MainApp />
  </Router>
);

export default RootApp;
