import { combineReducers } from 'redux';
import { recipesReducer, RecipeReducer, RecipesActions } from './recipesReducer/recipesReducer';

export interface ReducersType {
    recipesReducer: RecipeReducer;
}

const reducers =  combineReducers({
    recipesReducer
});

export default reducers;

export {
    RecipesActions
};