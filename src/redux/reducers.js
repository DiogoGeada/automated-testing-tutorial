import { ACTIONS } from "./actions";
import { initialState } from "./store";

const drinksReducer = (state = initialState, action) => {
    if(action.type === ACTIONS.SAVE_DRINKS) {
        debugger;
        return {
            ...state, 
            drinks: action.drinks
        };
    }

    return state;
}

export default drinksReducer;