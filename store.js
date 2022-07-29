import { createStore, combineReducers } from "redux";
import products from "./store/reducers/products";

const rootReducer = combineReducers({
  products: products,
});

const store = createStore(rootReducer);

export default store;
