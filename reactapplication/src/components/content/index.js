import React from 'react'
import './style.css'
import Data from './data/data.json';
import { v4 as uuid } from 'uuid';


import Card from './card/index.js'
import { useState } from 'react'

function Content() {
  const cards = Data.map(el => {
    el.id = uuid();
    return el;
  });

  const [topic, setTopic] = useState()
  const [selectedCard, setSelectedCard] = useState();

  const classNames = ['selected-tag'];
   if (topic) {
     classNames.push('show');
   }

  let cardArray = Data
  .filter(card => {
    if (topic) {
      return card.topic === topic;
    }

    if (selectedCard) {
      return card.id === selectedCard.id;
    }

    return true;
  })
  .map (
    card => <Card 
     image = {card.image}
     title = {card.title} 
     content = {card.content}
     date = {card.date}
     topic = {card.topic}
     setTopic = {setTopic}
     id={card.id}
     isArticleVisible={selectedCard && card.id === selectedCard.id}
     fullPage={card.fullPage}
     setSelectedCard={() => setSelectedCard(card)}

      />
  )

  
   
  return (
    <div className='content'>
    {/* <div className={classNames.join(' ')}>{topic}</div> */}
      {cardArray}
      <button onClick={() => {setTopic(); setSelectedCard()}} className='more_btn'>All posts &#8594;</button>
    </div>
  )
}





export default Content
