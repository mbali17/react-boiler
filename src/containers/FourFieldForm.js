import React, { useState } from 'react';

// Components
import SubmitButton from '../components/submitButton';
import InputField from '../components/input-field';

// helpers
// TODO: not sure how to fix this.
import submitForm from '../helpers/index';

const FourFieldForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [phone, setPhone] = useState('');
  // Unable to pass this inline as attribute value.
  const values = {
    name, email, company, phone,
  };

  const fields = ['name', 'email', 'company', 'phone'];

  const captureField = (e) => {
    const fieldId = e.target.id;
    switch (fieldId) {
      case 'name':
        setName(e.target.value);
        break;
      case 'email':
        setEmail(e.target.value);
        break;
      case 'company':
        setCompany(e.target.value);
        break;
      case 'phone':
        setPhone(e.target.value);
        break;
      default:
        console.log('This is the default case');
    }
  };
  return <form>
            {fields.map((fieldName, key) => <InputField key={key} captureField = {captureField} name = {fieldName}/>)}
            <SubmitButton action = {submitForm} values= {values} />
          </form>;
};
export default FourFieldForm;
