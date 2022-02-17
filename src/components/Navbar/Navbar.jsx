import React from 'react';
import './navbar.css'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <>

        
<nav className="navbar navbar-light bg-primary fixed-top">
  <div className="container-fluid">
    <NavLink className="navbar-brand logo" to='/'><span><i className="fa-solid fa-diagram-project"></i></span><span>Delever-V</span></NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Offcanvas</h5>
        <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body">
        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li className="nav-item">
            <NavLink className="nav-link active" aria-current="page" to= '/'>Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to= '/'>Link</NavLink>
          </li>
          
        </ul>
        
      </div>
    </div>
  </div>
</nav>

    </>
  )
}

export default Navbar
