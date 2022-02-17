import React from 'react';
import './weoffer.css';
import man from '../../images/man.jpg'
import bg1 from '../../images/bg1.jpg'


const WeOffer = () => {
  return (
    <>
        <div className="weoffer_container" style={{ backgroundImage: `url(${bg1})` }}>
            <div className="weoffer_img_container">
                <div className="weoffer_image">
                    <img src={man} alt="manImg" className="weoffer_img" />
                </div>
                <div className="weoffer_img_content">
                    <h2 className="weoffer_content_h2">What We Offer</h2>
                    <p className='weoffer_p'><span><i class="fa-solid fa-check"></i></span>Duis aute irure dolar in</p>
                    <p className='weoffer_p'><span><i class="fa-solid fa-check"></i></span>Excepteur sint occaecat</p>
                    <p className='weoffer_p'><span><i class="fa-solid fa-check"></i></span>Ut enim ad minim</p>
                    <p className='weoffer_p'><span><i class="fa-solid fa-check"></i></span>Lorem ipsum dolar</p>
                    <p className='weoffer_p'>Image from <a href="#" className='weoffer_a'>Freepik</a></p>
                </div>
            </div>
            <div className="weoffer_card">
            <div className="weoffer_card_content">
                <h2 className="weoffer_card_h2">BRANDING & DESIGN </h2>
                <p className="weoffer_card_p">Quam nulla porttitor massa id neque aliquam vestibulum morbi. Eu consequat ac felis donec et odio pellentesque. Turpis nunc eget lorem dolar sed. Ornare quam viverra orci sagittis eu volutpat odio. Sed vulputate odio ut enum blandit volutpat.</p>
                <p className='weoffer_card_p_a'>Image from <a href="#" className='weoffer_a'>Freepik</a></p>
                <button className="weoffer_button">LEARN MORE</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default WeOffer;