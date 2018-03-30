import { combineReducers } from 'redux';
import { recipesReducer, RecipeReducer } from './recipesReducer';

export interface ReducersType {
    recipesReducer: RecipeReducer;
}

const reducers =  combineReducers({
    recipesReducer
});

export default reducers;