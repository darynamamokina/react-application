import React, { useEffect, useState } from "react";
import './style.css';
import Card from '../card';
import mockData from '../mock/data.json';
import { NavLink, useParams } from "react-router-dom";


function Content () {
  const cards = mockData;
  const [tag, setTag] = useState();
  console.log('tag:', tag);

  const classNames = ['selected-tag'];
  if (tag) {
    classNames.push('show');
  }

  const [selectedCard, setSelectedCard] = useState();
  console.log('selectedCard:', selectedCard);

  const { cardId } = useParams();
  useEffect(() => {
    setSelectedCard(
      cards.find(card => card.id == cardId)
    );
  }, [cardId]);
  return (
    <div className="content-cont">
      <div className={classNames.join(' ')}>{tag}</div>
      {cards
        .filter(card => {
          if (tag) {
            return card.tag === tag;
          }

          if (selectedCard) {
            return card.id === selectedCard.id;
          }

          return true;
        })
        .map(card => {

          return (
            <NavLink to={`/card/${card.id}`}>
              <Card
                id={card.id}
                isArticleVisible={selectedCard && card.id === selectedCard.id}
                image={card.image}
                title={card.title}
                description={card.description}
                date={card.date}
                tag={card.tag}
                fullPage={card.fullPage}
                setSelectedTag={setTag}
                setSelectedCard={() => setSelectedCard(card)}
              /></NavLink>);
        })}
      <NavLink to='/'>
        <div
          className="return-all-posts"
          onClick={() => { setTag(); setSelectedCard(); }}
        >All posts</div>
      </NavLink>
    </div>
  );
}

export default Content;
