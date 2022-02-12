export default class CocktailService {

    static getRecipesFor(drink = "margarita"){
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`)
        .then(data => data.json())
        .catch(e => e);
    }

}