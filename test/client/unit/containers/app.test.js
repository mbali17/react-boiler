import React from 'react';
import { mount, shallow } from 'enzyme';

import App from '../../../../src/containers/app';;

describe('Test app.js', () => {
  let wrapper;

  afterEach(() => {
    if (wrapper) wrapper.unmount(wrapper);
  });

  test('Test core app render', (done) => {
    wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
    done();
  });
});
