import { defaultState, recipesReducer } from './recipesReducer';
import { LOAD_RECIPES } from '../../constants';
import { LoadRecipeAction } from '../../actions/recipes/loadRecipesAction';
import { Action } from 'redux';
import recipes from '../../services/api/mocks/recipesMock';

describe('recipes reducer', () => {
    it('should return the initial state', () => {
        const defaultAction: Action = { type: '' };
        expect(recipesReducer(undefined, defaultAction)).toEqual(defaultState);
    });

    it('should handle LOAD_RECIPES', () => {
        const loadRecipesAction: LoadRecipeAction = {
            type: LOAD_RECIPES,
            payload: recipes
        };
        const state = recipesReducer(undefined, loadRecipesAction);
        expect(state.recipes).toBe(recipes);
    });
});