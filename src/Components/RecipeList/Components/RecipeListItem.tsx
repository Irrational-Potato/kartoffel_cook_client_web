import * as React from 'react';
import Card, { CardMedia, CardContent } from 'material-ui/Card';

const RecipeListItem = () => (
    <Card>
        <CardMedia
            className="recipe-image"
            image="https://cocina-casera.com/wp-content/uploads/2015/11/paella-mixta-receta-casera.jpeg"
        />
        <CardContent>
            Hola
        </CardContent>
    </Card>
);

export default RecipeListItem;