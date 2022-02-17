import React from 'react';
import './gallery.css';
import img1 from '../../images/img1.png'
import img2 from '../../images/img2.png'

const Gallery = () => {
  return (
    <>
      <div className="gallery_container">
          <div className="gallery3_img">
              <img src={img1} alt="" className="gallery_img" />
              <img src={img1} alt="" className="gallery_img" />
              <img src={img1} alt="" className="gallery_img" />
          
              <img src={img1} alt="" className="gallery_img" />
              <img src={img2} alt="" className="gallery_img" />
              <img src={img1} alt="" className="gallery_img" />
        
              <img src={img1} alt="" className="gallery_img" />
              <img src={img1} alt="" className="gallery_img" />
              <img src={img1} alt="" className="gallery_img" />
          </div>
      </div>
    </>
  )
}

export default Gallery;
