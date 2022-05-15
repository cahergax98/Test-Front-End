import React from 'react';
import './Header.css';
import HomeBtn from './HomeBtn/HomeBtn';
import MyAccountBtn from './MyAccountBtn/MyAccountBtn';
import CartBtn from './CartBtn/CartBtn';
import SearchInput from './SarchInput/SearchInput';

const Header = () => {
  return (
    <>
      <div className="container container-header">
        <div className="block home-btn">
          <HomeBtn />
        </div>
        <div className="block search">
          <SearchInput />
        </div>
        <div className="block action-btns">
          <MyAccountBtn />
          <CartBtn />
        </div>
      </div>
    </>
  );
}

export default Header