import { ACTIONS } from "./actions";
import initialState from "./state";

const drinksReducer = (state = initialState, action) => {
    if(action.type === ACTIONS.SAVE_DRINKS) {
        return {
            ...state, 
            drinks: action.drinks
        };
    } else if(action.type === ACTIONS.SELECT_DRINK){
        return {
            ...state,
            drink: action.drink
        }
    }

    return state;
}

export default drinksReducer;