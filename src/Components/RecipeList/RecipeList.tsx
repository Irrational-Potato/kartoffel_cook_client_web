import * as React from 'react';
import { Recipe } from './viewModel';
import { RecipeListItem } from './index';
import Grid from 'material-ui/Grid';

interface Props {
    recipeList: Recipe[];
}

class RecipeList extends React.Component<Props, {}> {
    render () {
        return (
            <Grid container={true} spacing={40}>
                {this.props.recipeList.map(this.renderRecipeListItem)}
            </Grid>
        );
    }

    renderRecipeListItem = (item: Recipe) => (
        <Grid item={true} xs={4}>
            <RecipeListItem recipe={item}/>
        </Grid>
    )
}

export default RecipeList;