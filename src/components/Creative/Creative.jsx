import React from 'react';
import './creative.css'
import bg2 from '../../images/bg2.png';
import man from '../../images/man.jpg';

const Creative = () => {
  return (
    <>
        <div className="creative_container" style={{ backgroundImage: `url(${bg2})` }}>
        <div className="creative_main">
            <div className="creative_image">
                <img src= {man} alt="" className="creative_img" />
            </div>
            <div className="creative_content">
                <h1 className="creative_h2">Creative Thinking</h1>
                <p className="creative_p">Simple Text. Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus veritatis nemo eos consectetur! Hic fugiat, ullam assumenda blanditiis cupiditate omnis?</p>
                <p className="creative_p_a">Image from <a href="#">Freepik</a></p>
                <button className="creative_button">LEARN MORE</button>
            </div>
            </div>
        </div>
    </>
  )
}

export default Creative;
