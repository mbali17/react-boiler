import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './containers/Counter';
import FourFieldForm from './containers/FourFieldForm';
// FLag to control which app get's rendered.
const isExperimentalApp = true;

//
if (isExperimentalApp) {
  ReactDOM.render(<Counter label= 'Age' initialValue= '0'/>, document.getElementById('root'));
} else {
  ReactDOM.render(<FourFieldForm/>, document.getElementById('root'));
}
