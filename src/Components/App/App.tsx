import * as React from 'react';
import TopBar from '../TopBar';
import { RecipeListItem } from '../RecipeList';

const styles = require('./App.scss');

class App extends React.Component {
  render() {
    return (
      <div className={styles.test}>
        <TopBar title={process.env.REACT_APP_NAME as string} />
        <div className={styles.test2}>
          <RecipeListItem  />        
        </div>
      </div>
    ); 
  }
}

export default App;
