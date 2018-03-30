import { Recipe } from '../../interfaces';
import { LOAD_RECIPES } from '../../constants';

export interface LoadRecipeAction {
    type: LOAD_RECIPES;
    payload: Recipe[];
}

const loadRecipesAction = (recipes: Recipe[]): LoadRecipeAction => {
    return {
        type: LOAD_RECIPES,
        payload: recipes
    };
};

export default loadRecipesAction;