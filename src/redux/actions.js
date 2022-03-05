export const ACTIONS = {
    GET_DRINKS: 0,
    SAVE_DRINKS: 1,
    SELECT_DRINK: 2,
    SEARCH_FOR: 3
}

const actions = {
    getDrinks: (drink = undefined) => ({type: ACTIONS.GET_DRINKS, drink: drink}),
    saveDrinks: (drinks) => ({type: ACTIONS.SAVE_DRINKS, drinks: drinks}),
    selectDrink: (drink) => ({type: ACTIONS.SELECT_DRINK, drink: drink}),
};

export default actions;