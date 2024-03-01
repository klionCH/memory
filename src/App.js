import './App.css';
import Card from './comp/Card.js';
import React, { useState, useEffect } from 'react';

function Cards() {
  const [cardsMax, setCardsMax] = useState(0);
  const [cardIds, setCardIds] = useState([]);
  const [firstCard, setFirstCard] = useState(null);
  const [secondCard, setSecondCard] = useState(null);

  useEffect(() => {
    const initialCardIds = Array.from({ length: 12 }, (_, index) => (index + 1).toString());
    shuffleArray(initialCardIds);
    setCardIds(initialCardIds);
  }, []); 

  useEffect(() => {
    console.log('First: ' + firstCard);
    console.log('Second: ' + secondCard);
  }, [firstCard, secondCard]);

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  };

  const cardClicked = (id) => {
    console.log('Karte geklickt: ' + id);
    if (firstCard === null) {
      setFirstCard(id);
    } else if (secondCard === null) {
      setSecondCard(id);
    }
    setCardsMax((prevMax) => prevMax + 1);
  };

  return (
    <div className="field">
      {cardIds.map((id) => (
        <div key={id}>
          <Card id={id} onClick={() => cardClicked(id)} cardsMax={cardsMax} firstCard={firstCard} secondCard={secondCard} />
        </div>
      ))}
    </div>
  );
}

function App() {
  const newGame = () => {
    console.log('Neues Spiel');
  };

  return (
    <div>
      <Cards />
      <button onClick={newGame}>Neues Spiel</button>
    </div>
  );
}

export default App;
