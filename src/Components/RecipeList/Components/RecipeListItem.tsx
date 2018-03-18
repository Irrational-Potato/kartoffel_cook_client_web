import * as React from 'react';
import Card, { CardContent, CardMedia } from 'material-ui/Card';
import Typography from 'material-ui/Typography';

const styles = require('./RecipeListItem.scss');

const RecipeListItem = () => (
    <Card>
        <CardMedia
            className={styles.img}
            // tslint:disable:max-line-length
            image="https://media.cntraveler.com/photos/59ca6488e11975084c5841ea/master/pass/Federal_160415_FEDERALdonuts64786.jpg"
        />
        <CardContent>

            <Typography gutterBottom={true} variant="headline" component="h2">
                Receta de ejemplo
            </Typography>

            <Typography component="p">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Repellat at blanditiis, ab voluptatibus distinctio molestias,
                et quidem voluptatem unde adipisci, temporibus porro odio officia recusandae nam repellendus
                quibusdam fuga sit?
          </Typography>

        </CardContent>
    </Card>
);

export default RecipeListItem;