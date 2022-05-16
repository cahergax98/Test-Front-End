import React from 'react';
import './HomeBtn.css';

const HomeBtn = () => {
  const imagUrl = "https://cahergax98.github.io/Test-Front-End/static/media/corebiz-logo.d47c427fb02db0735bc4.png";
  return (
    <>
      <a href="/">
        <img src={imagUrl} alt="Corebiz" />
      </a>
    </>
  );
}

export default HomeBtn