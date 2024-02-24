import React from 'react';
import './App.css';
import Card from './comp/Card.js';

const App = () => {
  const cardIds = Array.from({ length: 12 }, (_, index) => (index + 1).toString());

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  };

  

  shuffleArray(cardIds);

  return (
    <div>
      <div className="field">
      {cardIds.map((id) => (
        <div key={id}>
          <Card id={id} />
        </div>
      ))}
      </div>
      <button>Neues Spiel</button>
    </div>

  );
};

export default App;
