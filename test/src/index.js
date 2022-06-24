import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';


const cardImages = [
  {"src": "/img/fish1.png", matched: false}, 
  {"src": "/img/fish2.png", matched: false}, 
  {"src": "/img/fish3.png", matched: false},
  {"src": "/img/fish4.png", matched: false}, 
  {"src": "/img/fish5.png", matched: false}, 
  {"src": "/img/fish6.png", matched: false},
  {"src": "/img/fish7.png", matched: false}, 
  {"src": "/img/fish8.png", matched: false}
];

function SingleCard({card, theChoice, flipped}){

  const clickOnCards = () => {
    theChoice(card);
  }

  return (
    <div className= 'card'>
      <div className={flipped ? "flipped" : ""}>
        <img className='front' src={card.src} alt='card front' onClick={clickOnCards} />
        <img className='back' src="/img/cover.png" alt='card back' onClick={clickOnCards} />
      </div>
    </div>
  )
}

function MemoryGame() {

  const [cards, setCards] = useState([]);

  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);

  const [score, setScore] = useState(0);

  const shuffleCards = () => {
    const duplicatedCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({...card, id: Math.random()}))

      setCards(duplicatedCards);
      setChoiceOne(null);
      setChoiceTwo(null);
      setScore(0);
  }

  const theChoice = (card) => {
    if(choiceOne != null){
      setChoiceTwo(card);
    } else {
      setChoiceOne(card);
    }
  }

  useEffect(()=> {
    if(choiceOne && choiceTwo) {
      if(choiceOne.src === choiceTwo.src){
        setCards(prevCards => {
          return prevCards.map(card =>{
            if(card.src === choiceOne.src){
              return {...card, matched: true};
            } else {
              return card;
            }
          })
        })
        setScore(prevScore => prevScore + 2);
        resetTurn();
      } else {
        setTimeout(()=> resetTurn(), 1000);
        setScore(prevScore => prevScore - 1);
      }
    }
  }, [choiceOne, choiceTwo]);

  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
  }

  return (
    <div className='game'>
      <h1>Memory Match Game</h1>
      <button onClick={shuffleCards}>Start Game</button>
      <h2>Score: {score}</h2>
      <div className='card-grid'>
        {cards.map(card => (
          <SingleCard 
            key={card.id} 
            card={card} 
            theChoice={theChoice} 
            flipped={card === choiceOne || card === choiceTwo || card.matched}
          />
        ))}
      </div>
    </div>
  )
}

ReactDOM.render(
  <MemoryGame />,
  document.getElementById('root')
)
