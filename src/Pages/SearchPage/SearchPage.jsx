import React, { useState } from 'react';
import LogNavBar from '../../components/LogNavBar/LogNavBar';
import Cardpp from '../../components/Card/Cardpp';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

import '../SearchPage/SearchPage.css';

const SearchPage = () => {
    const [age, setAge] = useState('');
    const [cards] = useState(new Array(30).fill({ title: "Card" }));
    const [visibleCards, setVisibleCards] = useState(9);

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    const loadMoreCards = () => {
        setVisibleCards((prevVisible) => prevVisible + 9);
    };

    const redirectToGoogleMaps = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                const { latitude, longitude } = position.coords;
                const googleMapsUrl = `https://www.google.com/maps?q=${latitude},${longitude}`;
                window.open(googleMapsUrl, '_blank');
            }, (error) => {
                console.error("Error obteniendo la ubicación:", error);
                alert("No se pudo obtener la ubicación actual.");
            });
        } else {
            alert("La geolocalización no es compatible con este navegador.");
        }
    };

    return (
        <div id="container">
            <div id="NavBar">
                <LogNavBar />
            </div>

            <div id="logom">
                <div id='searchbody'>
                    <div id='SearchHead'>
                        <h2>Bitacoras</h2>
                        <div id='SearchHead_Subelements'>
                            <h3>Titulo</h3>
                            <input type="text" name="" id="" />
                            <h3>Fecha</h3>
                            <input type="date" name="" id="" />
                            <InputLabel id="select-label">Ciudad</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="select"
                                value={age}
                                label="Age"
                                onChange={handleChange}
                            >
                                <MenuItem value={''}></MenuItem>
                            </Select>
                            <img src='src/assets/Hojita.png' alt="Icono" />
                        </div>
                        <button onClick={redirectToGoogleMaps} className="map-button"></button>
                    </div>

                    <div className="card-grid">
                        {cards.slice(0, visibleCards).map((card, index) => (
                            <div key={index} className="card-container">
                                <Cardpp title={`${card.title} ${index}`} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SearchPage;
