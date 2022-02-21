import actions, { ACTIONS } from "./actions";
import CocktailService from "../services/cocktailService"

const fetchDrinkMiddleware = store => next => action => {

    if(action.type === ACTIONS.GET_DRINKS) {
        CocktailService.getRecipesFor(action.drink).then(drinks => {
            store.dispatch(actions.saveDrinks(drinks));
        }).catch(e => {
            store.dispatch(actions.saveDrinks());
        });
    }
        next(action);
}

export default fetchDrinkMiddleware;