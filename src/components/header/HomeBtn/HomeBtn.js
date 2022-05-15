import React from 'react';
import image from './../../../imgs/corebiz-logo.png';
import './HomeBtn.css';

const HomeBtn = () => {
  return (
    <>
      <a href="/">
        <img src={image} alt="Corebiz" />
      </a>
    </>
  );
}

export default HomeBtn