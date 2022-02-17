import React from 'react';
import "./about.css"
import Card from './card/Card';
import img1 from '../../images/logo1.png';
import img2 from '../../images/logo2.png';
import img3 from '../../images/logo3.png';
import img4 from '../../images/logo4.png';


const About = () => {
  return (
    <>
        <div className="about_container">
            <div className="about_main">
                <div className="about_content">
                    <h2 className="about_h2">ABOUT COMPANY</h2>
                    <h1 className="about_h1">Need Amazing <br /> Design?</h1>
                    <p className="about_p">Paragraph. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, rem earum possimus error amet quam quod<a href="#" className='card_link'>modi esse rem </a> id, et debitis aut quas dolorem enim veritatis facilis unde aliquid aliquam magni incidunt aperiam odit nobis. Sint quaerat alias quas commodi?</p>
                    <button className="about_button">LEARN MORE</button>
                </div>
                <div className="card_group">
                    <div className="card_group1">
                        <Card 
                            image={img1}
                            heading='Sample Headline'
                            pg='Sample text. Click to select the text box. Click again or double click to start editing the text.'
                        />
                        <Card 
                            image={img2}
                            heading='Sample Headline'
                            pg='Sample text. Click to select the text box. Click again or double click to start editing the text.'
                        />
                    </div>
                    <div className="card_group2">
                    <Card 
                        image={img3}
                        heading='Sample Headline'
                        pg='Sample text. Click to select the text box. Click again or double click to start editing the text.'
                    />
                    <Card 
                        image={img4}
                        heading='Sample Headline'
                        pg='Sample text. Click to select the text box. Click again or double click to start editing the text.'
                    />
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default About;