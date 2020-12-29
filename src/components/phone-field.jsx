import React from 'react';

const PhoneField = ({ setPhone }) => <label> Phone: <input type='text' name='phone' id='phone' onChange={(e) => setPhone(e.target.value)}/>  <br/></label>;

export default PhoneField;
