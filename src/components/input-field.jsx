// @flow
import React from 'react';

// types
import type { Element } from 'react';
import type { InputFieldParams,eventTargetIdValue } from '../lib/type';

const InputField = ({ captureField, name, triggers }: InputFieldParams): Element<*> => <label> {name.replace(name[0], name[0].toUpperCase())}: <input type='text' name={name} id={name} onChange={(e: eventTargetIdValue) => captureField(e, triggers)}/>  <br/></label>;

export default InputField;
