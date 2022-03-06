export default class CocktailService {

    static async getRecipesFor(drink = "margarita"){
        return await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`)
        .then(data => data.json())
        .then(data => data.drinks)
        .catch(e => e);
    }
}

export const COCKTAIL_LIBRARY_URL = "https://www.thecocktaildb.com/api/json/v1/1/search.php"