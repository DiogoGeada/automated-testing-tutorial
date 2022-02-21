import { Component } from "react";
import Cocktail from "../cocktail/cocktail";
import './grid.css';

export default class Grid extends Component {

    constructor(props){
        super(props);
    }

    render() {
        return (
            <div className="grid">
                {(this.props.drinks.length > 0) ? (
                    this.props.drinks.map(drink => <Cocktail title={drink.strDrink} img={drink.strDrinkThumb}></Cocktail>)
                ) : 
                (
                    <p>No cocktails could be found</p>
                )}
            </div>
        );
    }

}