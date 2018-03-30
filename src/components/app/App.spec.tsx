import * as React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import TopBar from '../topBar';

describe('App component', () => {
  it('App should have top bar', () => {
    const app = shallow(<App/>);
    expect(app.find(TopBar).length).toBeGreaterThan(0);
  });
});