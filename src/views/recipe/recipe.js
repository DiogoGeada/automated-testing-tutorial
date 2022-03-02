import { Component } from "react";
import { connect } from "react-redux";
import withRouter from '../../hooks/withRouter';
import actions from "../../redux/actions";
import './recipe.css';

class Recipe extends Component {

    constructor(props) {
        super(props);
        this.props.selectDrink(this.props.router.params.id);
    }

    render() {
        return (
            <div className="recipe">
                { (this.props.drink !== undefined) ? (
                    <div className="content">
                        <div>
                            <img src={this.props.drink.strDrinkThumb} alt="" />
                            <article className="ingredients">
                                <h3>Ingredients</h3>
                                <ul>
                                    {Object.keys(this.props.drink).filter(key => key.includes("strIngredient")).map(ingredient => (
                                     (this.props.drink[ingredient] !== null) ? (
                                        <li>{this.props.drink[ingredient]}</li>
                                     ) : null
                                    ))}
                                </ul>
                            </article>
                        </div>
                        <div className="content-area">
                            <h2>{this.props.drink.strDrink}</h2>
                            <h3>Instructions</h3>
                            <p>{this.props.drink.strInstructions}</p>
                        </div>
                    </div>
                 ) : (
                     <h2 id="loading">Loading...</h2>
                 )
                 }
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        drink: state.drink
    }
}

const mapDispatchToProps = dispatch => {
    return {
        selectDrink: drinkId => dispatch(actions.selectDrink(drinkId))
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Recipe))