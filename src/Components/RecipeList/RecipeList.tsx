import * as React from 'react';
import { Recipe } from '../../Interfaces';
import { RecipeListItem } from './index';

const styles = require('./RecipeList.scss');

interface Props {
    recipeList: Recipe[];
}

class RecipeList extends React.Component<Props, {}> {
    render () {
        return (
            <div className={styles.recipeListContainer}>
                {this.props.recipeList.map(this.renderRecipeListItem)}
            </div>
        );
    }

    renderRecipeListItem = (item: Recipe, key: number) => (
        <div 
            key={key}
            className={styles.recipeListContainer_item}
        >
            <RecipeListItem recipe={item} />
        </div>
    )
}

export default RecipeList;