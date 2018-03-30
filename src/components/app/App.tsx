import * as React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import TopBar from '../topBar';
import RecipeListContainer from '../recipeList';
import RecipeDetailContainer from '../recipeDetail';
import { recipeDetailURLPattern } from '../../constants/urls';

const style = require('./App.scss');

const App = () => (
  <Router>
    <div>
      <TopBar title={process.env.REACT_APP_NAME as string} />
      <div className={style.container}>
        <Route exact={true} path="/" component={RecipeListContainer} />
        <Route path={recipeDetailURLPattern} component={RecipeDetailContainer} />
      </div>
    </div>
  </Router>
);

export default App;
