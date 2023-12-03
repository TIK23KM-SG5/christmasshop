import React from 'react';
import Button from '../uicomp/button';

const CardCollection = () => {
  const cardsData = [
    { title: 'Card 1', content: 'Content for Card 1' },
    { title: 'Card 2', content: 'Content for Card 2' },
    { title: 'Card 3', content: 'Content for Card 3' },
  ];

  return (
    <div className="card-collection">
      {cardsData.map((card, index) => (
        <div key={index} className="card">
          <h2>{card.title}</h2>
          <p>{card.content}</p>
          <Button onClick={() => (console.log("Jee"))} label="Card button" />
        </div>
      ))}
    </div>
  );
};

export default CardCollection;