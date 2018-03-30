import { Recipe } from '../interfaces';
import { LoadRecipeAction } from '../actions/recipes/loadRecipesAction';
import { LOAD_RECIPES } from '../constants';

export interface RecipeReducer {
    recipes: Recipe[];
}

export type RecipesActions = LoadRecipeAction;

const defaultState: RecipeReducer = {
    recipes: []
};

export const recipesReducer = (state: RecipeReducer = defaultState, action: RecipesActions): RecipeReducer => {
    switch (action.type) {
        case LOAD_RECIPES:
            return { ...state, recipes: action.payload };
        default:
            return state;
    }
};