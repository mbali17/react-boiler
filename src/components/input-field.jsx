// @flow
import React from 'react';

// types
import type { Element } from 'react';
import type { InputFieldParams, event } from '../lib/types';

const InputField = ({ onCaptureInput, fieldName, inputValue }: InputFieldParams): Element<*> => <label> {fieldName.replace(fieldName[0], fieldName[0].toUpperCase())}: <input type='text' value={inputValue} name={fieldName} id={fieldName} onChange={(e: event) => onCaptureInput(e.target.id, e.target.value)}/>  <br/></label>;

export default InputField;
