import React from 'react';
import image from './../../imgs/corebiz-logo.png';
import './Header.css';

const Header = () => {
  let counter = 1;
  return (
    <>
      <div className="container container-header">
        <div className="block home-btn">
          <a href="/">
            <img src={image} alt="Corebiz" />
          </a>
        </div>
        <div className="block search">
          <label htmlFor="search-input">
            ¿Que estás buscando?
            <input type="text" name="search-input" id="search-input" />
          </label>
        </div>
        <div className="block my-acount">
          <div className="my-acount">
            <a href="/my-acoount" className="my-acount-btn">
              <i className="fa fa-account"></i>
              <span className="simpleText">Mi Cuenta</span>
            </a>
          </div>
          <div className="cart">
            <a href="/cart" className="cart-btn">
              <i className="fa fa-cart"></i>
              <span className="counter">{counter}</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header