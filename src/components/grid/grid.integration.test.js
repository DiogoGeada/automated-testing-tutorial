import { render, screen, waitFor, waitForElementToBeRemoved } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Home from "../../views/home/home";
import { COCKTAIL_LIBRARY_URL } from "../../services/cocktailService";
import cocktails from "../data/drinks.json";

// msw
import { rest } from 'msw';
import { setupServer } from 'msw/node';

// Redux
import { Provider } from "react-redux";
import {createStore, applyMiddleware} from "redux";
import initialState from '../../redux/state'
import fetchDrinkMiddleware from "../../redux/middleware";
import drinksReducer from "../../redux/reducers";

describe("Cocktail Grid", () => {

});