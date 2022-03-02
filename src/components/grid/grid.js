import { Component } from "react";
import Cocktail from "../cocktail/cocktail";
import './grid.css';

export default class Grid extends Component {

    render() {
        return (
            <div className="grid">
                {(this.props.drinks.length > 0) ? (
                    this.props.drinks.map(drink => <Cocktail title={drink.strDrink} id={drink.idDrink} img={drink.strDrinkThumb} drink={drink} key={drink.idDrink}></Cocktail>)
                ) : 
                (
                    <p>No cocktails could be found</p>
                )}
            </div>
        );
    }

}