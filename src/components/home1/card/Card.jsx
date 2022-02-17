import React from 'react';
import '../home1.css';

const Card = (props) => {
  return (
    <>
        <div className="card_container">
            <div className="home_card">
                <h2 className='home_card_h2'>{props.head}</h2>
                <p className='home_card_p'>{props.pg}</p>
                <a href="#" className='card_link'>LEARN MORE</a>
            </div>
        </div>
    </>
  )
}

export default Card;