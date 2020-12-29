import React from 'react';

const NameField = ({ setName }) => <label> Name: <input type='text' name='name' id='name' onChange={(e) => setName(e.target.value)}/>  <br/></label>;

export default NameField;
