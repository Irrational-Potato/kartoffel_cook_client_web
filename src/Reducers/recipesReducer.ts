import { Recipe } from '../interfaces';
import { Action } from 'redux';

interface RecipeState {
    recipes: Recipe[];
}

const defaultState: RecipeState = {
    recipes: []
};

export const  recipesReducer = (state: RecipeState = defaultState, action: Action) => {
    return state;
};