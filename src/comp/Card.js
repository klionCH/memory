import React, { useState, useEffect } from 'react';
import './card.css';

const Card = (props) => {
  const [clicked, setClicked] = useState(false);
  const { id, cardsMax, isMatched } = props;

  const flipCard = () => {
    if (cardsMax === 2) {
      console.log('Max erreicht');
      return;
    }
    setClicked(!clicked);
    props.onClick(String(id)); 
  };

  useEffect(() => {
    if (cardsMax === 2) {
      if (props.isMatched) {
        props.resetCardsMax();
      } else {
      setTimeout(() => {
        setClicked(false);
        props.resetCardsMax();
      }, 2000);
    }
    }
  }, [cardsMax, props]);
  

  return (
    <div className={`card ${clicked ? 'flipped' : ''} _${String(id)} ${isMatched ? 'hidden' : ''}`} onClick={flipCard}></div>
  );
};

export default Card;
