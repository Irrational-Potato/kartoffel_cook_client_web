import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import App from './App';
import TopBar from '../topBar';

describe('App component', () => {
  it('Renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });

  it('App should have top bar', () => {
    const app = shallow(<App/>);
    expect(app.find(TopBar).length).toBeGreaterThan(0);
  });
});