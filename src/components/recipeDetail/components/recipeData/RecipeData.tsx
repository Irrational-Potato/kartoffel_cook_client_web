import * as React from 'react';
import { RecipeDetail as RecipeDetailInterface } from '../../../../interfaces';

const styles = require('./RecipeData.scss');

interface Props {
    recipeDetail: RecipeDetailInterface;
}

const RecipeData = (props: Props) => {

    const { recipeDetail } = props;

    const imageBg = {
        backgroundImage: `url(${recipeDetail.image})` 
    };

    return (
        <div className={styles.recipeDataContainer}>
            <h2 className={styles.recipeName}>{recipeDetail.name}</h2>

            <div className={styles.recipeImage} style={imageBg} />
        </div>
    );
};

export default RecipeData;