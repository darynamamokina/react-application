import React from 'react'
import s from './style.css'


const getComponentHeader = (inner_text) => {
  return (
    <p className={s.card_header}>{inner_text}</p>
  );
};

const getComponentText = (inner_text) => {
  return (
    <p className={s.card_text}>{inner_text}</p>
    
  );
};

const getComponentSubBlock = (inner_text) => {
  return (

      <p className={s.card_sub}>{inner_text}</p>

    
    
  );
};

const getComponentList = (elems) => {
  return (
    <div className={s.list}>
      {elems.map((el) => 
      <li className={s.card_list}>{el}</li>
    )}
    </div>
    
  );
};

export default function Card(props) {
  return (
    <div className={s.card} >
        <div className={s.img} style={{
          backgroundImage: `url(${props.image})`}}
          onClick={props.setSelectedCard}>
             </div>
      <h2 onClick={props.setSelectedCard}>{props.title}</h2>
        <p className={s.content}> {props.content} <span onClick={props.setSelectedCard}>Read more...</span></p>
        <p className={s.date}>{props.date} | <span onClick={() => props.setTopic(props.topic)}>{props.topic}</span></p>

        <article
        className={props.isArticleVisible ? '' : `${s.hide}`}
      >
        {
          props.fullPage.map(el => {
            switch (el.type) {
              case 'header': {
                return getComponentHeader(el.inner_text);
              }
              case 'text': {
                return getComponentText(el.inner_text);
              }
              case 'list': {
                return getComponentList(el.elems);
              }
              case 'sub-block': {
                return getComponentSubBlock(el.inner_text);
              }


              default: { }
            }
          })
        }
      </article>
        
    </div>
  )
}

