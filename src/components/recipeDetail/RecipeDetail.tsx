import * as React from 'react';
import { RecipeDetail as RecipeDetailInterface } from '../../interfaces';
import { 
    RecipeData,
    RecipeIngredientsList
} from './components';

const styles = require('./RecipeDetail.scss');

interface Props {
    recipeDetail: RecipeDetailInterface;
}

const RecipeDetail = (props: Props) => {
    if (props.recipeDetail) {
        return (
            <div className={styles.recipeDetailContainer}>

                <div className={styles.recipeIngredientsContainer}>
                    <div className={styles.recipeIngredientListWrapper}>
                        <RecipeIngredientsList/>
                    </div>
                </div>

                <div className={styles.recipeDetailDataContainer}>
                    <RecipeData recipeDetail={props.recipeDetail}/>
                </div>

            </div>
        );
    }
    return <span>No hay receta</span>;
};

export default RecipeDetail;