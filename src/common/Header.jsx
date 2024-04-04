import React from 'react';
import { Link } from 'react-router-dom';
import img from '../components/images/logo.png';

export const Header = () => {
  return (
    <div className="site-wrap">
      {/* Menu Icon  */}
      <div className="site-mobile-menu site-navbar-target">
        <div className="site-mobile-menu-header">
          <div className="site-mobile-menu-close mt-3">
            <span className="icon-close2 js-menu-toggle"></span>
          </div>
        </div>
        <div className="site-mobile-menu-body"></div>
      </div>

      {/* Top of Navbar query Tab  */}
      <div className="py-2 bg-light">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-9 d-none d-lg-block">
              <Link to="/" className="small mr-3"><span className="icon-question-circle-o mr-2"></span>Have a questions?</Link>
              <Link to="/" className="small mr-3"><span className="icon-envelope-o mr-2"></span>manpreetsir@gmail.com</Link>
            </div>

            <div className="col-lg-3 text-right">
              <Link to="/" className="small mr-3"><span className="icon-unlock-alt"></span> Log In</Link>
              <Link to="/" className="small btn btn-primary px-4 py-2 rounded-0"><span className="icon-users"></span> Register</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Navbar Main  */}
      <header className="site-navbar py-4 js-sticky-header site-navbar-target" role="banner">
        <div className="container">
          <div className="d-flex align-items-center">
            <div className="site-logo">
              <Link to="/" className="d-block">
                <img src={img} alt="logo image" className="img-fluid" />
              </Link>
            </div>
            <div className="mr-auto">
              <nav className="site-navigation position-relative text-right" role="navigation">
                <ul className="site-menu main-menu js-clone-nav mr-auto d-none d-lg-block">
                  <li className="active">
                    <Link to="/" className="nav-link text-left">Home</Link>
                  </li>
                  <li className="has-children">
                    <Link to="/about-us" className="nav-link text-left">About Us</Link>
                    <ul className="dropdown">
                      <li><Link to="/about-us">About Us</Link></li>
                      <li><Link to="/contact-us">Vision &Mission</Link></li>
                    </ul>
                  </li>
                  <li className="has-children">
                    <Link to="/" className="nav-link text-left">Placement</Link>
                    <ul className="dropdown">
                      <li><Link to="/">Our Placement</Link></li>
                      <li><Link to="/">Our Training & Placement</Link></li>
                      <li><Link to="/">Our Placement & Record</Link></li>
                      <li><Link to="/">Our Vision & Mission</Link></li>
                      <li><Link to="/">News & Events</Link></li>
                    </ul>
                  </li>
                  <li>
                    <Link to="/" className="nav-link text-left">Internship</Link>
                  </li>
                  <li>
                    <Link to="/" className="nav-link text-left">Contact</Link>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="ml-auto">
              <div className="social-wrap">
                <Link to="/"><span className="icon-facebook"></span></Link>
                <Link to="/"><span className="icon-twitter"></span></Link>
                <Link to="/"><span className="icon-linkedin"></span></Link>
                <Link to="/" className="d-inline-block d-lg-none site-menu-toggle js-menu-toggle text-black"><span className="icon-menu h3"></span></Link>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};


