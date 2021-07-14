import React from 'react';
import { useDispatch } from 'react-redux';
import ProductView from './products';
import { connect } from 'react-redux';
import { selectBasket } from '../store/redux1/reducerTest';

let products = [{ id: 0, name: 'Uva', price: 5.25, quantityProduct: 0, totalPriceProduct: 0 }, { id: 1, name: 'Manzana', price: 5.25, quantityProduct: 0, totalPriceProduct: 0 }];

const Products = ({ reducerCart }) => {

    const dispatch = useDispatch();
    let product = reducerCart.product;

    if (reducerCart.products !== undefined) {
        for (let prod in reducerCart.products) {
            var productbasket = reducerCart.products[prod];
            products[productbasket.id].quantityProduct = productbasket.quantityProduct;
        }
    }

    if (product.id !== undefined) {
        products[product.id].quantity = product.quantity;
    }

    const increment = (product) => {
        dispatch({ type: 'ADD_ITEM', payload: { product: product } });
    }

    const decrement = (product) => {
        dispatch({ type: 'REMOVE_ITEM', payload: { product: product } });
    }

    return <ProductView products={products} increment={increment} decrement={decrement} />
}

const mapStateToProps = state => {
    return {
        reducerCart: selectBasket(state)
    };
};

export default connect(mapStateToProps)(Products);
