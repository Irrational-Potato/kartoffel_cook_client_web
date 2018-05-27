import * as React from 'react';
import { 
    RecipeDetail as RecipeDetailInterface,
    RecipeStep
} from '../../../../interfaces';

const styles = require('./RecipeData.scss');

interface Props {
    recipeDetail: RecipeDetailInterface;
}

const stepList = (steps: RecipeStep[]) => 
    steps.map( (step, index) => {
        return (
            <div 
                className={styles.recipeStepContainer_item} 
                key={index}
            >
                {step.description}
            </div>);
    });

const RecipeData = (props: Props) => {

    const { recipeDetail } = props;

    const imageBg = {
        backgroundImage: `url(${recipeDetail.image})` 
    };

    return (
        <div className={styles.recipeDataContainer}>
            <h2 className={styles.recipeName}>{recipeDetail.name}</h2>

            <div className={styles.recipeImage} style={imageBg} />

            <div className={styles.recipeStepContainer}>
                {stepList(recipeDetail.steps)}
            </div>
        </div>
    );
};

export default RecipeData;