import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { ReducersType, RecipesActions } from '../../reducers';
import { Dispatch, connect } from 'react-redux';
import { fetchRecipeDetailAction } from '../../actions';
import { RecipeDetail as RecipeDetailInterface } from '../../interfaces';
import RecipeDetail from './RecipeDetail';

interface Props extends RouteComponentProps<any> {
    selectedRecipe: RecipeDetailInterface;
    fetchRecipeDetail: (recipeId: string) => void;
}

class RecipeDetailContainer extends React.Component<Props, {}> {
    constructor(props: Props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchRecipeDetail(this.props.match.params.recipeId);
    }

    render() {
        return <RecipeDetail recipeDetail={this.props.selectedRecipe} />;
    }
}

const mapStateToProps = ({ recipesReducer }: ReducersType) => {
    return {
        selectedRecipe: recipesReducer.selectedRecipe
    };
};

const mapDispatchToProps = (dispatch: Dispatch<RecipesActions>) => {
    return {
        fetchRecipeDetail: (recipeId: string) => dispatch(fetchRecipeDetailAction(recipeId))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(RecipeDetailContainer);
