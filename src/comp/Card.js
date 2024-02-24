import React, { useState } from 'react';
import './card.css';

function Card() {
  const [clicked, setClicked] = useState(false);

  const flipCard = () => {
    setClicked(!clicked);
    console.log('Karte geklickt');
  };

  return (
    <div className={`card ${clicked ? 'flipped' : ''}`} onClick={flipCard}/>
  );
}

export default Card;