import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './CartBtn.css';
import { CartContext } from '../../cart/CartContext';

const CartBtn = () => {
  const { cart } = useContext(CartContext);

  return (
    <>
      <div className="cart">
        <a href="/cart" className="cart-btn">
          <FontAwesomeIcon className="cart-icon" icon={faShoppingCart} />
          {cart.counter > 0 && <span className="cart-counter">{cart.counter}</span>}
        </a>
      </div>
    </>
  );
}

export default CartBtn