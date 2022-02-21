import {createStore, applyMiddleware} from "redux";
import fetchDrinkMiddleware from "./middleware";
import drinksReducer from "./reducers"

export const initialState = {
    drinks: []
}

const middleware = applyMiddleware(fetchDrinkMiddleware); 
const store = createStore(drinksReducer, initialState, middleware);

export default store;