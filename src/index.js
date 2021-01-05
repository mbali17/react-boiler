import React from 'react';
import ReactDOM from 'react-dom';
// redux
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers';

// containers
import Counter from './containers/Counter';
import FourFieldForm from './containers/FourFieldForm';

// create store. Store needs to be created at the highest level possible or the outer most component
const counterStore = createStore(reducer);
// FLag to control which app get's rendered.
const isExperimentalApp = true;
const component = isExperimentalApp ? ReactDOM.render(<Provider store= {counterStore}> <Counter label= 'Age' /> </Provider>, document.getElementById('root')) : ReactDOM.render(<FourFieldForm/>, document.getElementById('root'));
console.log(component);
