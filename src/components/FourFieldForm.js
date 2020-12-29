import React, { useState } from 'react';

const FourFieldForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [phone, setPhone] = useState('');

  const submitForm = () => {
    console.log(`submitting form with values Name: ${name}, Email: ${email}, Company: ${company}, Phone: ${phone}`);
  };
  /*
    TODO:
      1. Remove label for and wrap the input inside the label.
      2. Create separate components for the each field
      3. extract the submit form into helper.
  */
  return <form>
            <label> Name: <input type='text' name='name' id='name' onChange={(e) => setName(e.target.value)}/> </label><br/>
            <label> E-mail: <input type='text' name='email' id='email' onChange={(e) => setEmail(e.target.value)}/> </label><br/>
            <label> Company: <input type='text' name='company' id='company' onChange={(e) => setCompany(e.target.value)}/> </label><br/>
            <label > Phone: <input type='text' name='phone' id='phone'onChange={(e) => setPhone(e.target.value)}/> </label> <br/>
            <input type='button' value='submit' onClick={submitForm.bind(this)}></input>
          </form>
};
export default FourFieldForm;
