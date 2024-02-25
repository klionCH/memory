
import React, { useState } from 'react';
import './card.css';

const Card = (props) => {
  const [clicked, setClicked] = useState(false);
  let {id, cardsMax} = props;

  const flipCard = () => {
    if (cardsMax === 2) {
      console.log('Max erreicht');
      return;
    } 
      console.log("flipCard: 14: " + cardsMax)
      setClicked(!clicked);
      props.onClick(id);
      console.log('Karte geklickt'); 

  };


  return (
    <div className={`card ${clicked ? 'flipped' : ''} _${id}`} onClick={flipCard}></div>
  );
}

export default Card;