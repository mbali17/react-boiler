import React, { useState } from 'react';

// Components
import NameField from '../components/name-field';
import CompanyField from '../components/company-field';
import PhoneField from '../components/phone-field';
import EmailField from '../components/email-field';
import SubmitButton from '../components/submitButton';

// helpers
import submitForm from '../helpers/helpers';

const FourFieldForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [phone, setPhone] = useState('');

  const values = {
    name, email, company, phone,
  };
  console.log(values);
  /*
    TODO:
      1. Remove label for and wrap the input inside the label. -- done.
      2. Create separate components for the each field
      3. extract the submit form into helper.
  */
  return <form>
            <NameField setName = {setName}/>
            <EmailField setEmail = {setEmail}/>
            <CompanyField setCompany = {setCompany}/>
            <PhoneField setPhone = {setPhone}/>
            <SubmitButton action = {submitForm} values= {values}/>
          </form>;
};
export default FourFieldForm;
