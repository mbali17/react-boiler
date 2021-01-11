import React from 'react';
import { mount, shallow } from 'enzyme';

// Mounting requirements
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'
import configureStore from 'redux-mock-store';

import App from '../../../../src/containers/app';

import { defaultState } from '../../../../src/reducers';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('Test app.js', () => {
  let wrapper;
  const shallowComponent = (Component, props) => shallow(<Component { ...props} />);
  const mountComponent = (Component, store = mockStore(defaultState), props = {}) => mount(<Provider store={store}><Component { ...props } /></Provider>);

  afterEach(() => {
    if (wrapper) wrapper.unmount(wrapper);
  });

  test('Test core app shallow render', (done) => {
    wrapper = shallowComponent(App);
    expect(wrapper).toMatchSnapshot();
    done();
  });
});
