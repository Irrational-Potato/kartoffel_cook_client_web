import * as React from 'react';
import TopBar from '../TopBar';
import { RecipeListItem } from '../RecipeList';
import { Grid } from 'material-ui';

const style = require('./App.scss');

class App extends React.Component {
  render() {
    return (
      <div>
        <TopBar title={process.env.REACT_APP_NAME as string} />

        <div className={style.container}>
          <Grid container={true} spacing={40}>

            <Grid item={true} xs={4}>
              <RecipeListItem />
            </Grid>

          </Grid>
        </div>
      </div>
    );
  }
}

export default App;
