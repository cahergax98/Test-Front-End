import React, { useEffect, useState } from 'react';
import Product from './Product';
import './MasVendidos.css';

const MasVendidos = () => {
  const [products, setProducts] = useState([]);

  useEffect( () => {
    getProducts();
  }, []);

  let getProducts = async() => {
    const urlProducts = 'https://corebiz-test.herokuapp.com/api/v1/products';
    const resp = await fetch(urlProducts);
    const data = await resp.json();
    setProducts(data);
  }

  return (
    <>
      <div className="mas-vendidos">
        <h2 className="productos-title">Más Vendidos</h2>
        <div className="separator"></div>
        <ul className="product-list">
          { 
            products.map( product => (
              <Product key={product.productId}
                {...product} />
            ))
          }
        </ul>
      </div>
    </>
  );
}

export default MasVendidos