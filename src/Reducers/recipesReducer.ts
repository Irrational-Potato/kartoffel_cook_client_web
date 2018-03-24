import { Recipe } from '../Interfaces';

interface RecipeState {
    recipes: Recipe[];
}

const defaultState: RecipeState = {
    recipes: []
};

export const  recipesReducer = (state: RecipeState = defaultState) => {
    return state;
};