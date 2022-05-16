import React from 'react';
import Banner from './Banner';

const BannerCarrousel = () => {
  return (
    <>
      <div className="banner-container">
        <Banner title="Crear o migrar tu comercio electrónico?" 
          subTitle="¡Hola! ¿Qué es lo que buscas?"
          imgUrl="https://revistaitnow.com/wp-content/uploads/2020/03/black-friday-buy-credit-card-34577-1-770x540.jpg"/>
      </div>
    </>
  );
}

export default BannerCarrousel