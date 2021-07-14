import { incrementCounter, decrementCounter, getTotalPriceProducts, getTotalProducts } from '../../Components/logicProducts';

const initialState = { product: {}, quantity: 0 };
let productsBasket = [];
let quantity = 0;
let totalBasket = 0;

const state = (state = initialState, action) => {
    switch (action.type) {
        
        case 'ADD_ITEM':
            quantity++;
            incrementCounter(action.payload.product, productsBasket, quantity);
            totalBasket = getTotalPriceProducts(productsBasket);

            return {
                ...state,
                products: productsBasket,
                quantity: quantity,
                totalBasket: totalBasket,
                product: action.payload.product
            }

        case 'ADD_ITEMS':
            productsBasket = action.payload.products;
            totalBasket = getTotalPriceProducts(productsBasket);
            quantity = getTotalProducts(productsBasket);

            return {
                ...state,
                products: productsBasket,
                quantity: quantity,
                totalBasket: totalBasket
            }

        case 'REMOVE_ITEM':
            let response = decrementCounter(action.payload.product, productsBasket, quantity);

            totalBasket = getTotalPriceProducts(productsBasket);
            quantity = response.quantity;
            productsBasket = response.productsBasket;
            action.payload.product = response.product;

            return {
                ...state,
                products: productsBasket,
                quantity: quantity,
                totalBasket: totalBasket,
                product: action.payload.product
            }

        default: return state;
    }
};

export default state;
export const selectBasket = state => state.reducerTest;