import React, { useEffect, useRef, useState } from 'react';
import Product from './Product';
import './MasVendidos.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons'

const MasVendidos = () => {
  const [products, setProducts] = useState([]);
  const list = useRef();
  
  useEffect( () => {
    getProducts();
  }, []);

  const getProducts = async() => {
    const urlProducts = 'https://corebiz-test.herokuapp.com/api/v1/products';
    const resp = await fetch(urlProducts);
    const data = await resp.json();
    setProducts(data);
  }

  const scrollLeft = () => {
    list.current.scrollTo({
      top: 0,
      left: -315,
      behavior: 'smooth'
    });
  }

  const scrollRight = () => {
    list.current.scrollTo({
      top: 0,
      left: 315,
      behavior: 'smooth'
    });
  }

  return (
    <>
      <div className="mas-vendidos">
        <h2 className="productos-title">Más Vendidos</h2>
        <div className="separator"></div>
        <ul ref={ list } className="product-list">
          { 
            products.map( product => (
              <Product key={product.productId}
                {...product} />
            ))
          }
        </ul>
        <div onClick={ scrollLeft } className="scroll-control scroll-left">
          <FontAwesomeIcon className="scroll-control-icon" icon={faAngleLeft} />
        </div>
        <div onClick={ scrollRight } className="scroll-control scroll-right">
          <FontAwesomeIcon className="scroll-control-icon" icon={faAngleRight} />
        </div>
      </div>
    </>
  );
}

export default MasVendidos