import { RecipeDetail } from '../../interfaces';
import { LOAD_RECIPE_DETAIL } from '../../constants';

export interface LoadRecipeDetailAction {
    type: LOAD_RECIPE_DETAIL;
    payload: RecipeDetail;
}

const loadRecipeDetailAction = (recipeDetail: RecipeDetail): LoadRecipeDetailAction => {
    return {
        type: LOAD_RECIPE_DETAIL,
        payload: recipeDetail
    };
};

export default loadRecipeDetailAction;