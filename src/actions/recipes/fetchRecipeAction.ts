import { RecipeApi } from '../../services/api'; 

const fetchRecipeAction = (dispatch: Function) => () => {
    RecipeApi
        .loadRecipes
        .then();
};

export default fetchRecipeAction;