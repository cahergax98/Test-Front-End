import React from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import BannerCarrousel from './banner/BannerCarrousel';
import Body from './body/Body';
import { CartContext } from './cart/CartContext';
import Footer from './footer/Footer';
import Header from './header/Header';
import NewsLetter from './newsletter/NewsLetter';

const Main = () => {
  const [cart, setCart] = useLocalStorage("cart", {});
  return (
    <>
      <CartContext.Provider value={{
        cart,
        setCart
      }}>
        <Header />
        <BannerCarrousel />
        <Body />
        <NewsLetter />
        <Footer />  
      </CartContext.Provider>
    </>
  );
}

export default Main