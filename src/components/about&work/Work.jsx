import React from 'react';
import './work.css';

const Work = () => {
  return (
    <>
      <div className="work_container">
          <p className="work_p1">WHAT WE DO</p>
          <div className="work_main">
              <div className="work_content">
                  <h1 className="work_h1">About Us & Our Work</h1>
                  <p className="work_p2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis dicta illum recusandae nisi, dolore voluptatem dignissimos iure culpa amet repellendus totam ut Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                  <p className="work_p3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum, blanditiis. Rem perspiciatis labore perferendis odio eaque in?</p>
              </div>
              <div className="work_div_container">
                  <div className="work_div1">
                      <h3 className="work_div1_h3">AWARDS</h3>
                      <h1 className="work_div1_h1">10k</h1>
                  </div>
                  <div className="work_div2_div3">
                      <div className="work_div2">
                          <h3 className="work_div2_h3">CLIENTS</h3>
                          <h1 className="work_div2_h1">8k</h1>
                      </div>
                      <div className="work_div3">
                          <h3 className="work_div3_h3">CASES</h3>
                          <h1 className="work_div3_h1">15K</h1>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    </>
  )
}

export default Work;
