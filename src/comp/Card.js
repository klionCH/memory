import React, { useState } from 'react';
import './card.css';

function Card() {
  const [clicked, setClicked] = useState(false);
  const cards = ['1', '1', '2', '2', '3', '3', '4', '4', '5', '5', '6', '6'];
  const random = cards[Math.floor(Math.random() * cards.length)];
  


  const flipCard = () => {
    setClicked(!clicked);
    console.log('Karte geklickt');
  };


  return (
    <div className={`card ${clicked ? 'flipped' : ''} ${random}`} onClick={flipCard}></div>
  );
}

export default Card;