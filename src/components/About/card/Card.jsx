
import React from 'react';
import './card.css';

const Card = (props) => {
  return (
    <>
      <div className="about_card_container">
          <img src={props.image} alt="aboutImg" className='about_card_img' />
          <h2 className="about_card_h2">{props.heading}</h2>
          <p className="about_card_p">{props.pg}</p>
      </div>
    </>
  )
}

export default Card;
