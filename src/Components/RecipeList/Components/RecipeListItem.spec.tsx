import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import RecipeListItem from './RecipeListItem';
import { Recipe } from '../viewModel';

describe('Recipe List Item', () => {

  const recipe: Recipe = {
    id: 'id1',
    name: 'name',
    image: 'image',
    description: 'recipe description'
  };

  it('Renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<RecipeListItem recipe={recipe} />, div);
  });

});