const initialState = {quantity:0};

export default (state = initialState, action) => {
    if(action.type === 'UPDATE_BASKET'){
        return {
            ...state,
            products:action.payload.product,
            quantity:action.payload.quantity,
            totalBasket: action.payload.totalBasket
        }
    }
    return state;
};

export const selectBasket = state => state.reducerTest; 