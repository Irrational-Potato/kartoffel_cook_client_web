import * as React from 'react';
import { Recipe } from '../../interfaces';
import RecipeList from './RecipeList';

interface State {
    recipesList: Recipe[];
}

class RecipeListContainer extends React.Component<{}, State> {
    constructor(props: {}) {
        super(props);

        this.state = {
            recipesList: [
                {
                    id: 'testid',
                    name: 'Name',
                    description: 'Description',            
                    // tslint:disable:max-line-length
                    image: 'https://media.cntraveler.com/photos/59ca6488e11975084c5841ea/master/pass/Federal_160415_FEDERALdonuts64786.jpg'
                },
                {
                    id: 'testid',
                    name: 'Name',
                    description: 'Description',            
                    // tslint:disable:max-line-length
                    image: 'https://media.cntraveler.com/photos/59ca6488e11975084c5841ea/master/pass/Federal_160415_FEDERALdonuts64786.jpg'
                },
                {
                    id: 'testid',
                    name: 'Name',
                    description: 'Description',            
                    // tslint:disable:max-line-length
                    image: 'https://media.cntraveler.com/photos/59ca6488e11975084c5841ea/master/pass/Federal_160415_FEDERALdonuts64786.jpg'
                },
                {
                    id: 'testid',
                    name: 'Name',
                    description: 'Description',            
                    // tslint:disable:max-line-length
                    image: 'https://media.cntraveler.com/photos/59ca6488e11975084c5841ea/master/pass/Federal_160415_FEDERALdonuts64786.jpg'
                },
                {
                    id: 'testid',
                    name: 'Name',
                    description: 'Description',            
                    // tslint:disable:max-line-length
                    image: 'https://media.cntraveler.com/photos/59ca6488e11975084c5841ea/master/pass/Federal_160415_FEDERALdonuts64786.jpg'
                },
                {
                    id: 'testid',
                    name: 'Name',
                    description: 'Description',            
                    // tslint:disable:max-line-length
                    image: 'https://media.cntraveler.com/photos/59ca6488e11975084c5841ea/master/pass/Federal_160415_FEDERALdonuts64786.jpg'
                },
                {
                    id: 'testid',
                    name: 'Name',
                    description: 'Description',            
                    // tslint:disable:max-line-length
                    image: 'https://media.cntraveler.com/photos/59ca6488e11975084c5841ea/master/pass/Federal_160415_FEDERALdonuts64786.jpg'
                }
            ]
        };
    }

    render() {
        return <RecipeList recipeList={this.state.recipesList} />;
    }
}

export default RecipeListContainer;