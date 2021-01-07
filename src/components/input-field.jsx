// @flow
import React from 'react';

// types
import type { Element } from 'react';
import type { InputFieldParams, event } from '../lib/types';

const InputField = ({ captureField, name, triggers }: InputFieldParams): Element<*> => <label> {name.replace(name[0], name[0].toUpperCase())}: <input type='text' name={name} id={name} onChange={(e: event) => captureField(e, triggers)}/>  <br/></label>;

export default InputField;
