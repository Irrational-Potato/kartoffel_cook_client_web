import * as React from 'react';
import './App.css';
import TopBar from '../TopBar';
import { RecipeListItem } from '../RecipeList';

class App extends React.Component {
  render() {
    return (
      <div>
        <TopBar title={process.env.REACT_APP_NAME as string} />
        <div className="recipeTest">
          <RecipeListItem  />        
        </div>
      </div>
    );
  }
}

export default App;
