// @flow
import React, { useState } from 'react';

// types
import type { Element } from 'react';

// Components
import SubmitButton from '../components/submitButton';
import InputField from './input-field';

// helpers
// If the name of the file is index.js , we can skip the index.js as this is the default name used if the name is passed.
import { submitForm, captureField } from '../helpers';

const FourFieldForm = (): Element<*> => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [phone, setPhone] = useState('');

  const triggers = {
    setName, setEmail, setCompany, setPhone,
  };
  // Unable to pass this inline as attribute value.
  const values = {
    name, email, company, phone,
  };

  const fields = ['name', 'email', 'company', 'phone'];

  return <form>
            {fields.map((fieldName, key) => <InputField key={key} captureField = {captureField} fieldName = {fieldName} triggers= {triggers}/>)}
            <SubmitButton action = {submitForm} values= {values} />
          </form>;
};
export default FourFieldForm;
