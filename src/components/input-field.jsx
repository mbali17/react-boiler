import React from 'react';

const InputField = ({ captureField, name }) => <label> {name.replace(name.charAt(0), name.charAt(0).toUpperCase())}: <input type='text' name={name} id={name} onChange={(e) => captureField(e)}/>  <br/></label>;

export default InputField;
