import React from "react";
import { Provider } from "react-redux"
import store from "../../redux/store"
import Cocktail from "./cocktail"
import drinks from "../data/drinks.json";
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from "react-router-dom";

describe("Cocktail component", () => {

it("Renders properly", () => {
    render(
    <Provider store={store}>
        <BrowserRouter location={{pathname: "/"}}>
            <Cocktail 
                img={drinks.drinks[0].strDrinkThumb}
                title={drinks.drinks[0].strDrink}
                id={drinks.drinks[0].idDrink}
            ></Cocktail>
        </BrowserRouter>
    </Provider>);
    
    const title = screen.getByRole("heading");

    expect(title).toHaveTextContent(drinks.drinks[0].strDrink);
});

it("Limits title length", () => {

    let drink = {...drinks.drinks[0]};
    drink.strDrink = "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    
    render(
    <Provider store={store}>
        <BrowserRouter location={{pathname: "/"}}>
            <Cocktail 
                img={drink.strDrinkThumb}
                title={drink.strDrink}
                id={drink.idDrink}
            ></Cocktail>
        </BrowserRouter>
    </Provider>);
    
    const title = screen.getByRole("heading", {level: 3});

    expect(title.textContent.length).toBeLessThanOrEqual(20);
});

});