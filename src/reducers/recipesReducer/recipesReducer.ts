import { Recipe, RecipeDetail } from '../../interfaces';
import { LOAD_RECIPES, LOAD_RECIPE_DETAIL } from '../../constants';
import { Action } from 'redux';
import { LoadRecipeDetailAction, LoadRecipeAction } from '../../actions/types';

export interface RecipeReducer {
    recipes: Recipe[];
    selectedRecipe?: RecipeDetail;
}

export type RecipesActions =
    LoadRecipeDetailAction |
    LoadRecipeAction |
    Action;

export const defaultState: RecipeReducer = {
    recipes: [],
    selectedRecipe: undefined
};

export const recipesReducer = (state: RecipeReducer = defaultState, action: RecipesActions): RecipeReducer => {
    switch (action.type) {
        case LOAD_RECIPES:
            return { ...state, recipes: (action as LoadRecipeAction).payload };
        case LOAD_RECIPE_DETAIL:
            return { ...state, selectedRecipe: (action as LoadRecipeDetailAction).payload };
        default:
            return state;
    }
};