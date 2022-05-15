import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './CartBtn.css';

const CartBtn = () => {
  let counter = 1;
  return (
    <>
      <div className="cart">
        <a href="/cart" className="cart-btn">
          <FontAwesomeIcon className="cart-icon" icon={faShoppingCart} />
          <span className="cart-counter">{counter}</span>
        </a>
      </div>
    </>
  );
}

export default CartBtn