import { Recipe } from '../../../interfaces';
import recipesMockData from '../mocks/recipesMock';

class RecipesApi {

  loadRecipes(): Promise<Recipe[]> {
    let p = new Promise<Recipe[]>((resolve, reject) => {
      setTimeout(() => { return resolve(recipesMockData); }, 1500);
    });
    return p;
  }

}

const recipesApi = new RecipesApi();

export default recipesApi;