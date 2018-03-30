import { RecipeApi } from '../../services/api'; 
import { Recipe } from '../../interfaces';
import loadRecipesAction from './loadRecipesAction';

const fetchRecipesAction = () => (dispatch: Function): void => {
    RecipeApi
        .loadRecipes()
        .then( (response: Recipe[]) => {
            dispatch(loadRecipesAction(response));
        });
};

export default fetchRecipesAction;