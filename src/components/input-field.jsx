import React from 'react';

const InputField = ({ captureField, name, triggers }) => <label> {name.replace(name.charAt(0), name.charAt(0).toUpperCase())}: <input type='text' name={name} id={name}
onChange={(e) => captureField(e, triggers)}/>  <br/></label>;

export default InputField;
