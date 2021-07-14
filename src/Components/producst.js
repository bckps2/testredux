import React from 'react';
import { useDispatch } from 'react-redux';
import ProductView from './products';
import { connect } from 'react-redux';
import { selectBasket } from '../store/redux1/reducerTest';
import {incrementCounter, decrementCounter, getTotal} from './logicProducts';

let products = [{ id: 0, name: 'Uva', price: 5.25, quantityProduct: 0, totalPriceProduct:0 }, { id: 1, name: 'Manzana', price: 5.25, quantityProduct: 0, totalPriceProduct:0 }];
let productsBasket = [];
let totalBasket = 0;

const Products = ({ reducerCart }) => {

    const dispatch = useDispatch();
    productsBasket = reducerCart.products != undefined ? reducerCart.products : [];
    
    if(reducerCart.products != undefined)
    {
        for (let prod in reducerCart.products)
        {
            var productbasket = reducerCart.products[prod];
            products[productbasket.id].quantityProduct = productbasket.quantityProduct;
        }
    }

    const increment = (product) => {
        incrementCounter(product, productsBasket, reducerCart);
        totalBasket = getTotal(productsBasket);
        dispatch({ type: 'UPDATE_BASKET', payload: { quantity: reducerCart.quantity, product: productsBasket , totalBasket: totalBasket} });
    }

    const decrement = (product) => {
        productsBasket = decrementCounter(product, productsBasket, reducerCart, totalBasket);
        totalBasket = getTotal(productsBasket);
        dispatch({ type: 'UPDATE_BASKET', payload: { quantity: reducerCart.quantity, product: productsBasket, totalBasket: totalBasket} });
    }

    return <ProductView products={products} increment={increment} decrement={decrement} />
}

const mapStateToProps = state => {
    return {
        reducerCart: selectBasket(state)
    };
};

export default connect(mapStateToProps)(Products);
