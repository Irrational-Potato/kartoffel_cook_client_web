import { RecipeApi } from '../../services/api'; 
import { RecipeDetail } from '../../interfaces';
import loadRecipeDetailAction from './loadRecipeDetailAction';

const fetchRecipeDetailAction = (recipeId: string) => (dispatch: Function): void => {
    RecipeApi
        .getRecipe(recipeId)
        .then( (response: RecipeDetail) => {
            dispatch(loadRecipeDetailAction(response));
        });
};

export default fetchRecipeDetailAction;