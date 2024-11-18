import React, { useState } from 'react';
import Cardpp from '../../components/Card/Cardpp';
import AdminLogNavBar from '../../components/AdminLogNavBar/AdminLogNavBar';

import "./AdminLogedHomePage.css";

const AdminLogedHomePage = () => {
    const [cards] = useState(new Array(30).fill({ title: "Card" }));
    const [visibleCards, setVisibleCards] = useState(9);

    const loadMoreCards = () => {
        setVisibleCards((prevVisible) => prevVisible + 9);
    };

    return (
        <div id="container">
            {/* Navigation Bar */}
            <div id="NavBar">
                <AdminLogNavBar />
            </div>

            <div id="main-content">
                <div className="card-grid">
                    {cards.slice(0, visibleCards).map((card, index) => (
                        <div key={index} className="card-container">
                            <Cardpp title={`${card.title} ${index}`} />
                        </div>
                    ))}
                </div>

                {/* Load More Button */}
                
            </div>
        </div>
    );
};

export default AdminLogedHomePage;
