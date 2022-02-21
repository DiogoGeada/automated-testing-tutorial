export const ACTIONS = {
    GET_DRINKS: 0,
    SAVE_DRINKS: 1
}

const actions = {
    getDrinks: (drink = undefined) => ({type: ACTIONS.GET_DRINKS, drink: drink}),
    saveDrinks: (drinks) => ({type: ACTIONS.SAVE_DRINKS, drinks: drinks})
};

export default actions;