// @flow
import React from 'react';

// types
import type { Element } from 'react';

type Triggers= {
  setName: Function,
  setEmail: Function,
  setCompany: Function,
  setPhone: Function,
}
type params = {
    captureField: Function,
    name: string,
    triggers: Triggers
}

const InputField = ({ captureField, name, triggers }: params): Element<*> => <label> {name.replace(name[0], name[0].toUpperCase())}: <input type='text' name={name} id={name} onChange={(e: {target: {id: string, name: string }}) => captureField(e, triggers)}/>  <br/></label>;

export default InputField;
