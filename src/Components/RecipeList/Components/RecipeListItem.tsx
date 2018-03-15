import * as React from 'react';
import Card, { CardContent } from 'material-ui/Card';

const RecipeListItem = () => (
    <Card>
        <CardContent>
            <img
                className="recipe-image"
                src="https://cocina-casera.com/wp-content/uploads/2015/11/paella-mixta-receta-casera.jpeg"
            />
            <p>
                Hola
            </p>
        </CardContent>
    </Card>
);

export default RecipeListItem;