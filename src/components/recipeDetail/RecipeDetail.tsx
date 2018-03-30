import * as React from 'react';
import { RouteComponentProps } from 'react-router';

const RecipeDetail = ({ match }: RouteComponentProps<any>) => {
    console.log(match);
    return <span>Recipe Detail {match.params.recipeId}</span>;
};

export default RecipeDetail;