import { createStore } from 'redux';
import FavouriteReducer from './reducers';

const store = createStore(FavouriteReducer);

export default store;