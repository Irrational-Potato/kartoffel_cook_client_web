import * as React from 'react';
import { Link } from 'react-router-dom';
import Card, { CardContent, CardMedia } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import { Recipe } from '../../../interfaces';
import { recipeDetailURLBase } from '../../../constants/urls';

const styles = require('./RecipeListItem.scss');

interface Props {
    recipe: Recipe;
}

const RecipeListItem = ({ recipe }: Props) => (
    <Link
        to={`${recipeDetailURLBase}${recipe.id}`}
        className={styles['recipe-container']}
    >
        <Card
            id={`recipe-${recipe.id}`}
        >
            <CardMedia
                className={styles.img}
                image={recipe.image}
            />
            <CardContent>

                <Typography gutterBottom={true} variant="headline" component="h2">
                    {recipe.name}
                </Typography>

                <Typography component="p">
                    {recipe.description}
                </Typography>
            </CardContent>
        </Card>
    </Link>

);

export default RecipeListItem;