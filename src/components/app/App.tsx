import * as React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import TopBar from '../topBar';
import RecipeList from '../recipeList';
import RecipeDetail from '../recipeDetail';

const style = require('./App.scss');

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <TopBar title={process.env.REACT_APP_NAME as string} />
          <div className={style.container}>
            <Route exact={true} path="/" component={RecipeList}/>
            <Route path="/recipe" component={RecipeDetail}/>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
