/*
  This file combines all the reducers for the application.
*/
import { combineReducers } from 'redux';
import form, { defaultState as formState } from './forms';

const reducer = combineReducers({
  form,
});

export default reducer;

export const defaultState = {
  form: formState,
};
