// @flow
import React from 'react';

// types
import type { Element } from 'react';
import type { InputFieldParams, event } from '../lib/types';

const InputField = ({ captureField, fieldName, triggers }: InputFieldParams): Element<*> => <label> {fieldName.replace(fieldName[0], fieldName[0].toUpperCase())}: <input type='text' name={fieldName} id={fieldName} onChange={(e: event) => captureField(e, triggers)}/>  <br/></label>;

export default InputField;
