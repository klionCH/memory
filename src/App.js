import './App.css';
import Card from './comp/Card.js';
import React, { useState, useEffect } from 'react';

function Cards({ gameKey }) {
  const [cardsMax, setCardsMax] = useState(0);
  const [cardIds, setCardIds] = useState([]);
  const [prevCardIds, setPrevCardIds] = useState([]);
  const [matchingCounter, setMatchingCounter] = useState(0);
  const [matchingCards, setMatchingCards] = useState([]);
  const [turns, setTurns] = useState(0); 

  useEffect(() => {
    const initialCardIds = Array.from({ length: 12 }, (_, index) => (index + 1).toString());
    shuffleArray(initialCardIds);
    setCardIds(initialCardIds);
    setPrevCardIds([]);
    setMatchingCounter(0);
    setMatchingCards([]);
    resetCardsMax();
    setTurns(0);
  }, [gameKey]);


  useEffect(() => {
    const initialCardIds = Array.from({ length: 12 }, (_, index) => (index + 1).toString());
    shuffleArray(initialCardIds);
    setCardIds(initialCardIds);
  }, []); 

  

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  };

  const cardClicked = (id) => {
    const isAlreadyMatched = matchingCards.some(([firstId, secondId]) => [firstId, secondId].includes(id));

    if (!isAlreadyMatched) {
      console.log('Karte geklickt: ' + id);
      setPrevCardIds((prev) => [...prev, id]);
      setCardsMax((prevMax) => prevMax + 1);
    }

  };

  useEffect(() => {
    if (prevCardIds.length === 2) {
      const [firstId, secondId] = prevCardIds;
      setTurns((prevTurns) => prevTurns + 1);
      const isMatching =
        (firstId === '1' && secondId === '2') ||
        (firstId === '2' && secondId === '1') ||
        (firstId === '3' && secondId === '4') ||
        (firstId === '4' && secondId === '3') ||
        (firstId === '5' && secondId === '6') ||
        (firstId === '6' && secondId === '5') ||
        (firstId === '7' && secondId === '8') ||
        (firstId === '8' && secondId === '7') ||
        (firstId === '9' && secondId === '10') ||
        (firstId === '10' && secondId === '9') ||
        (firstId === '11' && secondId === '12') ||
        (firstId === '12' && secondId === '11');
  
      if (isMatching) {
        console.log('Match');
        setMatchingCounter((prevCounter) => prevCounter + 1);
        setMatchingCards([...matchingCards, [firstId, secondId]]);
      } else {
        console.log('No Match');
      }
      setPrevCardIds([]);
    }
  }, [prevCardIds, matchingCards]);

  useEffect(() => {
    console.log('prevCardIds: ', prevCardIds);
  }, [prevCardIds]);

  useEffect(() => {
    if (matchingCounter === 6) {
      alert('You win!');
    }
    if (matchingCards.length === 2) {
      setTimeout(() => {
        setCardIds((prevCardIds) =>
          prevCardIds.map((card) =>
            matchingCards.flat().includes(card.id)
              ? { ...card, isMatched: true }
              : card
          )
        );
      }, 10000);



    }
  }, [matchingCards]);
  



  const resetCardsMax = () => {
    setCardsMax(0);
  };

  

  return (
    <div>
    <div className="field">
    {cardIds.map((id) => (
  <div key={`card-${id}`}>
    <Card
      id={id}
      onClick={() => cardClicked(id)}
      cardsMax={cardsMax}
      resetCardsMax={resetCardsMax}
      isMatched={matchingCards.some(([firstId, secondId]) => [firstId, secondId].includes(id))}
    />
  </div>
))}
    </div>
    <p>Matching Counter: {matchingCounter}</p>
    <p>Turns: {turns}</p>
    <p>Wins: {wins}</p>
    </div>
  );
}

function App() {
  const [gameKey, setGameKey] = useState(0);




  const newGame = () => {
    console.log('Neues Spiel');
    setGameKey((prevKey) => prevKey + 1);
  };

  return (
    <div>
      <Cards key={gameKey}/>
      <button onClick={newGame}>New Game</button>
    </div>
  );
}

export default App;
