import * as React from 'react';
import { connect, Dispatch } from 'react-redux';
import { Recipe } from '../../interfaces';
import RecipeList from './RecipeList';
import { ReducersType, RecipesActions } from '../../reducers';
import { fetchRecipesAction } from '../../actions';

interface Props {
    recipesList: Recipe[];
    fetchRecipes: () => void;
}

class RecipeListContainer extends React.Component<Props, {}> {
    constructor(props: Props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchRecipes();
    }

    render() {
        return <RecipeList recipeList={this.props.recipesList} />;
    }
}

const mapStateToProps = ({ recipesReducer }: ReducersType) => {
    return {
        recipesList: recipesReducer.recipes
    };
};

const mapDispatchToProps = (dispatch: Dispatch<RecipesActions>) => {
    return {
        fetchRecipes: () => dispatch(fetchRecipesAction())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(RecipeListContainer);