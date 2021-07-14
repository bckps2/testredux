import { connect } from 'react-redux';
import { selectBasket } from '../store/redux1/reducerTest';
import React from 'react';
import { useDispatch } from 'react-redux';
import {incrementCounter, decrementCounter, saveOnLocalStorage, getFromLocalStorage, getTotal} from './logicProducts';

const Cart = ({ reducerCart }) => {

  const dispatch = useDispatch();
  var productsBasket = reducerCart.products;
  var basketStorage = getFromLocalStorage();
  
  if(basketStorage?.quantityBasket > 0 && reducerCart.quantity === 0)
  {
    reducerCart.products = basketStorage.products;
    reducerCart.quantity = basketStorage.quantityBasket;
    reducerCart.totalBasket = getTotal(reducerCart.products);
    dispatch({ type: 'UPDATE_BASKET', payload: { quantity:reducerCart.quantity, product: reducerCart.products, totalBasket:reducerCart.totalBasket } });
  }
  
  const increment = (product) => {
    incrementCounter(product, productsBasket, reducerCart);
    reducerCart.totalBasket = getTotal(reducerCart.products);
    dispatch({ type: 'UPDATE_BASKET', payload: { quantity:reducerCart.quantity, product: reducerCart.products, totalBasket:reducerCart.totalBasket} });
  }

  const decrement = (product) => {
    reducerCart.products = decrementCounter(product, productsBasket, reducerCart);
    reducerCart.totalBasket = getTotal(reducerCart.products);
    dispatch({ type: 'UPDATE_BASKET', payload: { quantity:reducerCart.quantity, product: reducerCart.products ,totalBasket:reducerCart.totalBasket} });
  }


  saveOnLocalStorage(reducerCart);

  return (
    <div>
      <span>
        /****************** CARRITO*/
      </span>
      {reducerCart.products?.map((product) =>
        <span>
          <p>{product.name}</p>
          <p>{product.price}</p>
          <p>{product.quantityProduct}</p>
          <p>{product.totalPriceProduct}</p>
       
          <button onClick={() => increment(product)}>+</button>
          <button onClick={() => decrement(product)}>-</button>
        </span>
      )}
      <p>Cantidad Total de productos: {reducerCart?.quantity}</p>
      <p>Precio Total : {reducerCart.totalBasket}</p>
      /****************** FIN CARRITO*/
    </div>
  )
}

const mapStateToProps = state => {
  return {
    reducerCart: selectBasket(state)
  };
};

export default connect(mapStateToProps)(Cart);