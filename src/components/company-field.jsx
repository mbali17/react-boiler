import React from 'react';

const CompanyField = ({ setCompany }) => <label> Company: <input type='text' name='company' id='company' onChange={(e) => setCompany(e.target.value)}/>  <br/></label>;

export default CompanyField;
