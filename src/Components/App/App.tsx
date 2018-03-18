import * as React from 'react';
import TopBar from '../TopBar';
import RecipeList from '../RecipeList';

const style = require('./App.scss');

class App extends React.Component {
  render() {
    return (
      <div>
        <TopBar title={process.env.REACT_APP_NAME as string} />

        <div className={style.container}>
          <RecipeList/>
        </div>
      </div>
    );
  }
}

export default App;
