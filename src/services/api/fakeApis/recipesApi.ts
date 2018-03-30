import { Recipe, RecipeDetail } from '../../../interfaces';
import recipesMockData from '../mocks/recipesMock';
import recipeDetailMock from '../mocks/recipeDetailMock';

class RecipesApi {

  loadRecipes(): Promise<Recipe[]> {
    let p = new Promise<Recipe[]>((resolve, reject) => {
      setTimeout(() => { return resolve(recipesMockData); }, 1500);
    });
    return p;
  }

  getRecipe(recipeId: string): Promise<RecipeDetail> {
    let p = new Promise<RecipeDetail>((resolve, reject) => {
      setTimeout(() => { return resolve(recipeDetailMock); }, 1500);
    });
    return p;
  }

}

const recipesApi = new RecipesApi();

export default recipesApi;