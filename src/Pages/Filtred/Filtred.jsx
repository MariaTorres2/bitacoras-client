import React, { useState } from 'react';
import LogNavBar from '../../components/LogNavBar/LogNavBar';
import Cardpp from '../../components/Card/Cardpp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSliders } from '@fortawesome/free-solid-svg-icons';

import "../Filtred/Filtred.css";

const Filtred = () => {
    const [cards] = useState(new Array(30).fill({ title: "Card" }));
    const [visibleCards, setVisibleCards] = useState(9);

    const loadMoreCards = () => {
        setVisibleCards((prevVisible) => prevVisible + 9);
    };

    return (
        <div id="container">
            <div id="NavBar">
                <LogNavBar id="cd" />
            </div>
            <div id="hea">
                <button><FontAwesomeIcon icon={faSliders} /> Filtrar</button>
                <div className="card-grid">
                    {cards.slice(0, visibleCards).map((card, index) => (
                        <div key={index} className="card-container">
                            <Cardpp title={`${card.title} ${index}`} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Filtred;
