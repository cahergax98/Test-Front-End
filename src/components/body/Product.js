import React, { useContext } from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as fullStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as emptyStar } from '@fortawesome/free-regular-svg-icons';
import { CartContext } from '../cart/CartContext';


const Product = (props) => {
  const printStars = (stars) => {
    let starsToPrint = [];
    for (let i = 0; i < stars; i++) {
      starsToPrint.push(<FontAwesomeIcon key={props.productId + "-" + i} className="star-icon" icon={fullStar} />);
    }
    for (let i = 0; i < 5 - stars; i++) {
      starsToPrint.push(<FontAwesomeIcon key={props.productId + "-" + (i + stars)} className="star-icon" icon={emptyStar} />);
    }
    return starsToPrint;
  };

  const formatPrice = ( price ) => {
    price = "" + price;
    const integers = price.substring(0, price.length - 2)
    const decimal = price.substring(price.length - 2);
    return integers + "," + decimal;
  }

  const printPrice = (listPrice, price) => {
    let priceToPrint = [];
    if (listPrice === null) {
      priceToPrint.push(<p className="price-now">por $ { formatPrice(price) }</p>);
    } else {
      priceToPrint.push(<p className="price-before"> de $ { formatPrice(listPrice) }</p>)
      priceToPrint.push(<p className="price-now"> por $ { formatPrice(price) } </p>);
    }
    return priceToPrint;
  }

  const printInstallements = (installments) =>  {
    let installmentsToPrint = null;
    if (installments.length > 0) {
      let installement = installments[0];
      let quantity = installement.quantity;
      let payment = installement.value;
      installmentsToPrint = <p className="installements">o en { quantity } pagos de ${ formatPrice(payment) } </p>
    }
    return installmentsToPrint;
  }

  const hasOffer = ({listPrice, price}) => {
    if (listPrice === null) return false;
    if (listPrice === price) return false;
    return listPrice > price;
  }

  const { cart, setCart} = useContext(CartContext);

  const addCart = () => {
    let counter = 0;
    if ("counter" in cart && (cart.counter !== null || cart.counter !== 0 || !isNaN(cart.counter))) {
      counter = cart.counter;
    }
    setCart({
      counter: counter + 1
    })
  }

  return (
    <>
      <li className="product-card">
        <img src={props.imageUrl} alt={props.productName} />
        {hasOffer(props) && <div className="offer-tag"></div> }
        <h3 className="product-name">
          {props.productName}
        </h3>
        <div className="stars">
          {printStars(props.stars)}
        </div>
        {printPrice(props.listPrice, props.price)}
        {printInstallements(props.installments)}
        <button className="btn-comprar" onClick={addCart}>Comprar</button>
      </li>
    </>
  );
}

export default Product

/*
{
    "productId": 1,
    "productName": "SAPATO FLOATER PRETO",
    "stars": 1,
    "imageUrl": "https://corebiz-test.herokuapp.com/images/product-1.png",
    "listPrice": null,
    "price": 25990,
    "installments": [
        {
            "quantity": 9,
            "value": 2887
        }
    ]
}
*/