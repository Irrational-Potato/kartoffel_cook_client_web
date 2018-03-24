import { Recipe } from '../interfaces';

interface RecipeState {
    recipes: Recipe[];
}

const defaultState: RecipeState = {
    recipes: []
};

export const  recipesReducer = (state: RecipeState = defaultState) => {
    return state;
};