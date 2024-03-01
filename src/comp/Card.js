
import React, { useState } from 'react';
import './card.css';
import { useEffect } from 'react';

const Card = (props) => {
  const [clicked, setClicked] = useState(false);
  let {id, cardsMax, firstCard, secondCard} = props;
  const [matchingCards, setMatchingCards] = useState([]);
  

  const flipCard = () => {
    if (cardsMax === 5) {
      console.log('Max erreicht');
      return;
    } 
      setClicked(!clicked);
      props.onClick(id);
  };

  useEffect(() => {
    // Check for matching pairs
    if (
      (firstCard === 1 && secondCard === 2) ||
      (firstCard === 2 && secondCard === 1) ||
      (firstCard === 3 && secondCard === 4) ||
      (firstCard === 4 && secondCard === 3) ||
      (firstCard === 5 && secondCard === 6) ||
      (firstCard === 6 && secondCard === 5) ||
      (firstCard === 7 && secondCard === 8) ||
      (firstCard === 8 && secondCard === 7) ||
      (firstCard === 9 && secondCard === 10) ||
      (firstCard === 10 && secondCard === 9) ||
      (firstCard === 11 && secondCard === 12) ||
      (firstCard === 12 && secondCard === 11)
    ) {
      // Update matchingCards state
      setMatchingCards((prevMatchingCards) => [...prevMatchingCards, firstCard, secondCard]);
    }
  }, [firstCard, secondCard]); // Run when firstCard or secondCard changes
  
  // ...
  
  // Log matchingCards using another useEffect
  useEffect(() => {
    console.log('Matching Cards: ', matchingCards);
  }, [matchingCards]);

  return (
    <div className={`card ${clicked ? 'flipped' : ''} _${id}`} onClick={flipCard}></div>
  );
}

export default Card;