export default class CocktailService {

    static async getRecipesFor(drink = "margarita"){
        return await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`)
        .then(data => data.json())
        .then(data => data.drinks)
        .catch(e => e);
    }

    static async getDrink(drinkId){
        return await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drinkId}`)
        .then(data => data.json())
        .then(data => data.drinks[0])
        .catch(e => e);
    }
}

export const COCKTAIL_LIBRARY_URL = "https://www.thecocktaildb.com/api/json/v1/1/search.php"