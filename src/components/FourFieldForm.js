import React, { useState } from 'react';

function FourFieldForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [phone, setPhone] = useState('');
  function submitForm() {
    console.log(`submitting form with values Name: ${name}, Email: ${email}, Company: ${company}, Phone: ${phone}`);
  }
  return <div>
          <form>
            <label htmlFor='name'> Name:</label>
            <input type='text' name='name' id='name'onChange={(e) => setName(e.target.value)}/><br/>
            <label htmlFor='email'> E-mail:</label>
            <input type='text' name='email' id='email'onChange={(e) => setEmail(e.target.value)}/><br/>
            <label htmlFor='company'> Company:</label>
            <input type='text' name='company' id='company'onChange={(e) => setCompany(e.target.value)}/><br/>
            <label htmlFor='phone'> Phone:</label>
            <input type='text' name='phone' id='phone'onChange={(e) => setPhone(e.target.value)}/><br/>
            <input type='button' value='submit' onClick={submitForm.bind(this)}></input>
          </form>
      </div>;
}
export default FourFieldForm;
