import React from 'react';
import renderer from 'react-test-renderer';
import {render} from '@testing-library/react-native'

import { Provider } from 'react-redux';
import Home from '../../src/pages/Home';
import store from '../../src/store/store';

describe('<Home />', () => {
  it('contains contact', () => {
    const tree = renderer.create(
      <Provider store={store}>
        <Home/>
      </Provider>
    ).toJSON();
    expect(tree.children.length).toBe(2);
  });
});

