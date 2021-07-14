import { createStore, combineReducers } from 'redux';
import reducerTest from './redux1/reducerTest';

const reducers = combineReducers({
    reducerTest
});

const store = createStore(
    reducers
)

export default store;
