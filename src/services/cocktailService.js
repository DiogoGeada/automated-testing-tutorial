export default class CocktailService {

    static async getRecipesFor(drink = "margarita"){
        debugger;
        return await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`)
        .then(data => data.json())
        .then(data => data.drinks)
        .catch(e => e);
    }

}