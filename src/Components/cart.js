import { connect } from 'react-redux';
import { selectBasket } from '../store/redux1/reducerTest';
import React from 'react';
import { useDispatch } from 'react-redux';
import { getFromLocalStorage } from './logicProducts';

const Cart = ({ reducerCart }) => {

  const dispatch = useDispatch();
  var basketStorage = getFromLocalStorage();

  if (basketStorage?.quantityBasket > 0 && reducerCart.quantity === 0) {
    dispatch({ type: 'ADD_ITEMS', payload: { products: basketStorage.products } });
  }

  const increment = (product) => {
    dispatch({ type: 'ADD_ITEM', payload: { product: product } });
  }

  const decrement = (product) => {
    dispatch({ type: 'REMOVE_ITEM', payload: { product: product } });
  }

  return (
    <div>
      <h1>Carrito</h1>
      {reducerCart.products?.map((product, index) =>
        <span key={index}>
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
    </div>
  )
}

const mapStateToProps = state => {
  return {
    reducerCart: selectBasket(state)
  };
};

export default connect(mapStateToProps)(Cart);