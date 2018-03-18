import * as React from 'react';
import Card, { CardContent, CardMedia } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import { Recipe } from '../viewModel';

const styles = require('./RecipeListItem.scss');

interface Props {
    recipe: Recipe;
}

const RecipeListItem = ({ recipe }: Props) => (
    <Card id={`recipe-${recipe.id}`}>
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
);

export default RecipeListItem;