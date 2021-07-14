let countProducts = 0;
export const updateProductsInBasket = (product) => {
    return {
        type: 'UPDATE_BASKET',
        payload: product
    }
}