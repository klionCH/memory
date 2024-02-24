import React, { useState } from 'react';
import './card.css';

const Card = (props) => {
  const [clicked, setClicked] = useState(false);
  const {id} = props;


  const flipCard = () => {
    setClicked(!clicked);
    console.log('Karte geklickt');
  };


  return (
    <div className={`card ${clicked ? 'flipped' : ''} _${id}`} onClick={flipCard}></div>
  );
}

export default Card;