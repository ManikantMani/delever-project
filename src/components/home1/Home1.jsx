import React from 'react';
import Card from './card/Card';
import bg from "../../images/bg.jpg"

const Home1 = () => {
  return (
    <>
        <div className="home1_container" style={{ backgroundImage: `url(${bg})` }}>
                <div className="home1_card_container">
                  <div className="home1_card1">
                  <Card 
                    head= "Digital Art & Design Studio"
                    pg= 'Duis aute irure dolar in reprehenderit in voluptate velit esse cilum dolar eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.'
                  />
                  </div>
                  <div className="home1_card2">
                  <Card 
                    head= 'Our Mission'
                    pg= 'Duis aute irure dolar in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.'
                  />
                  </div>
                </div>
                <p className="home_p1_imgfrom">Image from <a href="#">Freepik</a></p>
        </div>
    </>
  )
}

export default Home1;