import React from 'react';
import './footer.css';

const Footer = () => {
    return (
        <>
            <div className="footer_container">
                <div className="footer_content">
                    <div className="footer_left">
                        <div className="footer_content_text">
                            <h2 className="footer_h2">EXCEPTEUR SINT OCCAECAT CUPIDATAT</h2>
                            <h1 className="footer_h1">Development</h1>
                        </div>
                        <div className="footer_content_text">
                            <h2 className="footer_h2">DUIS AUTE IRURE DOLAR</h2>
                            <h1 className="footer_h1">Leadership</h1>
                        </div>
                        <div className="footer_content_text">
                            <h2 className="footer_h2">EXCEPTEUR SINT OCCAECAT CUPIDATAT</h2>
                            <h1 className="footer_h1">Relevance</h1>
                        </div>
                    </div>
                    <div className="footer_right">
                        <div className="footer_right_content">
                            <h2 className="footer_right_address_h2">Address</h2>
                            <p className="footer_right_address_p">1600 Amphitheatre Parkway. <br /> Mountain View. CA 64043</p>
                            <h2 className="footer_right_address_h2">Phone</h2>
                            <p className="footer_right_address_p">+321 123 4567</p>
                            <h2 className="footer_right_address_h2">Email</h2>
                            <p className="footer_right_address_email">info@example.com</p>
                            <div className="social_media">
                                <span><i class="fa-brands fa-facebook-f"></i></span>
                                <span><i class="fa-brands fa-twitter"></i></span>
                                <span><i class="fa-brands fa-instagram"></i></span>
                                <span><i class="fa-brands fa-youtube"></i></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer_bottom">
                    <div className="footer_bottm_div1">
                        <h2 className="footer_bottom_h2">Heading</h2>
                        <p className="footer_bottom_p">Some text. Click to select the text box. click <br /> again or double click to start editing the text.</p>
                    </div>
                    <div className="footer_bottm_div2">
                        <h2 className="footer_bottom_h2">Heading</h2>
                        <p className="footer_bottom_p">Sample footer text</p>
                    </div>
                    <div className="footer_bottm_div3">
                        <h2 className="footer_bottom_h2">Heading</h2>
                        <p className="footer_bottom_p">Sample footer text</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;
