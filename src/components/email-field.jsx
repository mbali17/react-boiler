import React from 'react';

const emailField = ({ setEmail }) => <label> email: <input type='text' name= 'email' id='email' onChange={(e) => setEmail(e.target.value)}/>  <br/></label>;

export default emailField;
