import React, { useState } from 'react';
import Cardpp from '../../components/Card/Cardpp';
import AdminLogNavBar from '../../components/AdminLogNavBar/AdminLogNavBar';

const AdminLogedHomePage = () => {
    // Estado para almacenar todas las tarjetas (aquí simulamos 30 tarjetas)
    const [cards] = useState(new Array(30).fill({ title: "Card" }));
    // Estado para controlar cuántas tarjetas mostrar
    const [visibleCards, setVisibleCards] = useState(9); // Comienza mostrando 9 tarjetas

    // Función para cargar más tarjetas
    const loadMoreCards = () => {
        setVisibleCards((prevVisible) => prevVisible + 9); // Agrega 9 más al estado de visibilidad
    };

    return (
        <div id="logom">
            <div id="NavBar">
                <AdminLogNavBar id='cd' />
            </div>
            <div className="card-grid">
                {cards.slice(0, visibleCards).map((card, index) => (
                    <div key={index} className="card-container">
                        <Cardpp title={`${card.title} ${index}`} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AdminLogedHomePage;
