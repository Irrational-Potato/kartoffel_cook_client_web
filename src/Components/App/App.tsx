import * as React from 'react';
import './App.css';
import TopBar from '../TopBar';

class App extends React.Component {
  render() {
    return (
      <TopBar title={process.env.REACT_APP_NAME as string}/>
    );
  }
}

export default App;
