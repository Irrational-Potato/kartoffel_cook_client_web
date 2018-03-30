import * as React from 'react';
import { RecipeDetail as RecipeDetailInterface } from '../../interfaces';

interface Props {
    recipeDetail: RecipeDetailInterface;
}

const RecipeDetail = (props: Props) => {
    if (props.recipeDetail) {
        return <span>Recipe Detail {props.recipeDetail.id}</span>;
    }

    return <span>No hay receta</span>;
};

export default RecipeDetail;