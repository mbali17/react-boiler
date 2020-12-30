import React, { useState } from 'react';

// Components
import SubmitButton from '../components/submitButton';
import InputField from '../components/input-field';

// helpers
import { submitForm, captureField } from '../helpers';

const FourFieldForm = () => {
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
            {fields.map((fieldName, key) => <InputField key={key} captureField = {captureField} name = {fieldName} triggers= {triggers}/>)}
            <SubmitButton action = {submitForm} values= {values} />
          </form>;
};
export default FourFieldForm;
