import { useEffect, useState } from 'react';
import LogNavBar from '../../../components/LogNavBar/LogNavBar';
import Cardpp from '../../../components/Card/Cardpp';
import "../LogedHomePage/LogedHomePage.css";
import { getAll } from '../../../services/bitacoraService';

const LogedHomePage = () => {
  const [cards, setCards] = useState([]);
  const [visibleCards, setVisibleCards] = useState(9);
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCards = async () => {
      try {
        setLoading(true); 
        const data = await getAll();
        setCards(data); 
      } catch (error) {
        console.error('Error al cargar las bitácoras:', error);
        setError(error.message || 'Error al cargar las bitácoras');
      } finally {
        setLoading(false); 
      }
    };

    fetchCards();
  }, []);

  const loadMoreCards = () => {
    setVisibleCards((prevVisible) => prevVisible + 9);
  };

  if (loading) {
    return <div>Cargando bitácoras...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div id="container">
      <div id="NavBar">
        <LogNavBar id="cd" />
      </div>
      <div id="logom">
        <div className="card-grid">
          {cards.slice(0, visibleCards).map((card) => (
            <div key={card._id} className="card-container">
              <Cardpp
                title={card.titulo}
                imageUrl={card.imagen_sitio}
                description={card.observaciones}
              />
            </div>
          ))}
        </div>
        {visibleCards < cards.length && (
          <button onClick={loadMoreCards} className="load-more">
            Cargar más
          </button>
        )}
      </div>
    </div>
  );
};

export default LogedHomePage;
