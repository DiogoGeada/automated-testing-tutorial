import { render, screen, waitFor, waitForElementToBeRemoved } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Home from "../../views/home/home";
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { COCKTAIL_LIBRARY_URL } from "../../services/cocktailService";
import cocktails from "../data/drinks.json";

// Redux
import { Provider } from "react-redux";
import {createStore, applyMiddleware} from "redux";
import initialState from '../../redux/state'
import fetchDrinkMiddleware from "../../redux/middleware";
import drinksReducer from "../../redux/reducers";

describe("Cocktail Grid", () => {

    let server = setupServer(
        rest.get(COCKTAIL_LIBRARY_URL, (req, res, ctx) => {
            return res(ctx.json(cocktails))
        })
    );
    let store = {};

    beforeAll(() => server.listen());
    beforeEach(() => {
        store = newStore();
    })

    afterEach(() => {
        server.resetHandlers()
        store = {};
    })
    afterAll(() => server.close());

    it("Renders items", async () => {
    
        render(home());

        let loading = screen.getByText("Loading...");
        await waitForElementToBeRemoved(loading);

        cocktails.drinks.forEach(cocktail => {
            expect(screen.getByText(cocktail.strDrink.substring(0, 20))).toBeInTheDocument();
        });
    });

    it("Displays loading message", async () => {

        render(home());
        expect(screen.getByText("Loading...")).toBeInTheDocument();

        await waitFor(() => {
            expect(screen.getByText(cocktails.drinks[0].strDrink)).toBeInTheDocument();
        });
        
    })

    const home = () => {
        return (
        <Provider store={store}>
            <BrowserRouter location={{pathname: "/"}}>
                <Home />
            </BrowserRouter>
        </Provider>);
    } 

    const newStore = () => {
        let middleware = applyMiddleware(fetchDrinkMiddleware); 
        return createStore(drinksReducer, {...initialState}, middleware);
    }
});